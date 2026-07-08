type CjsGrannyDecodedCurve = {
  knots: number[];
  controls: number[];
  degree?: number;
  dimension: number;
};

const fr = Math.fround;
const CURVE_DECODERS = Object.freeze([
  Object.freeze({
    format: 0,
    decode: decodeDaKeyframes32f,
  }),
  Object.freeze({
    format: 1,
    decode: decodeDaK32fC32f,
  }),
  Object.freeze({
    format: 2,
    decode: decodeDaIdentity,
  }),
  Object.freeze({
    format: 3,
    decode: decodeDaConstant32f,
  }),
  Object.freeze({
    format: 4,
    decode: decodeD3Constant32f,
  }),
  Object.freeze({
    format: 5,
    decode: decodeD4Constant32f,
  }),
  Object.freeze({
    format: 6,
    decode: decodeDaK16uC16u,
  }),
  Object.freeze({
    format: 7,
    decode: decodeDaK8uC8u,
  }),
  Object.freeze({
    format: 8,
    decode: decodeD4nK16uC15u,
  }),
  Object.freeze({
    format: 9,
    decode: decodeD4nK8uC7u,
  }),
  Object.freeze({
    format: 10,
    decode: decodeD3K16uC16u,
  }),
  Object.freeze({
    format: 11,
    decode: decodeD3K8uC8u,
  }),
  Object.freeze({
    format: 12,
    decode: decodeD9I1K16uC16u,
  }),
  Object.freeze({
    format: 13,
    decode: decodeD9I3K16uC16u,
  }),
  Object.freeze({
    format: 14,
    decode: decodeD9I1K8uC8u,
  }),
  Object.freeze({
    format: 15,
    decode: decodeD9I3K8uC8u,
  }),
  Object.freeze({
    format: 16,
    decode: decodeD3I1K32fC32f,
  }),
  Object.freeze({
    format: 17,
    decode: decodeD3I1K16uC16u,
  }),
  Object.freeze({
    format: 18,
    decode: decodeD3I1K8uC8u,
  }),
]);

const D4N_SCALE_TABLE = new Float32Array([
  1.4142135,
  0.70710677,
  0.35355338,
  0.35355338,
  0.35355338,
  0.17677669,
  0.17677669,
  0.17677669,
  -1.4142135,
  -0.70710677,
  -0.35355338,
  -0.35355338,
  -0.35355338,
  -0.17677669,
  -0.17677669,
  -0.17677669,
]);

const D4N_OFFSET_TABLE = new Float32Array([
  -0.70710677,
  -0.35355338,
  -0.53033006,
  -0.17677669,
  0.17677669,
  -0.17677669,
  -0.088388346,
  0.0,
  0.70710677,
  0.35355338,
  0.53033006,
  0.17677669,
  -0.17677669,
  0.17677669,
  0.088388346,
  -0.0,
]);

const D4N_SCALE_TABLE_MULTIPLIER_16 = 0.000030518509;
const D4N_SCALE_TABLE_MULTIPLIER_8 = 0.0078740157;

export class CjsGrannyCurves {
  /**
   * Decode a GR2 JSON curve object into explicit knots and controls.
   */
  static decodeCurve(
    curveJson: CjsGrannyCurveJson,
    dimension: number,
  ): CjsGrannyDecodedCurve {
    if (!curveJson || typeof curveJson.format !== "number") {
      throw new Error(
        "gr2reader: decodeCurve requires a curve object with a numeric format",
      );
    }

    const decoder = CURVE_DECODERS[curveJson.format];
    if (!decoder) {
      throw new Error(
        `gr2reader: unsupported granny curve format ${curveJson.format}`,
      );
    }

    const { knots, controls, dimension: dim } = decoder.decode(
      curveJson,
      dimension,
    );
    if (dimension && dim && dim !== dimension) {
      throw new Error(
        `gr2reader: curve format ${curveJson.format} decoded dimension ${dim} does not match track dimension ${dimension}`,
      );
    }

    return {
      knots,
      controls,
      degree: Number(curveJson.degree) || 0,
      dimension: dim || dimension,
    };
  }

  /**
   * Sample a decoded Granny curve into caller-provided output.
   */
  static sampleDecodedCurve<
    T extends ArrayLike<number> & { [index: number]: number },
  >(
    out: T,
    curve: CjsDecodedGrannyCurve,
    time: number,
    cycle = false,
    duration = 0,
    options: { keyframed?: boolean } = {},
  ): T {
    if (!curve || !curve.knots || !curve.controls || !curve.dimension) {
      return out;
    }

    const
      knots = curve.knots,
      count = knots.length,
      dim = curve.dimension,
      controlCount = curve.controls.length / dim;

    if (!count || !controlCount) {
      return out;
    }

    if (options.keyframed) {
      return copyControl(
        out,
        curve,
        sampleKeyframedCurve(
          count,
          time,
          duration,
        ),
      ) as T;
    }

    const knot = findKnotIndex(knots, time);
    if (curve.degree <= 0 || count === 1 || controlCount === 1) {
      return copyControl(out, curve, Math.min(knot, controlCount - 1)) as T;
    }

    if (curve.degree === 1) {
      return sampleLinearCurve(
        out,
        curve,
        time,
        cycle,
        duration || knots[count - 1],
        knot,
      ) as T;
    }

    return sampleQuadraticCurve(
      out,
      curve,
      time,
      cycle,
      duration || knots[count - 1],
      knot,
    ) as T;
  }
}

export type CjsGrannyCurveDimension = 1 | 3 | 4 | 9;

export interface CjsGrannyTrackSource {
  animations?: CjsGrannyAnimation[];
  Animations?: CjsGrannyAnimation[];
}

export interface CjsGrannyAnimation {
  duration?: number;
  Duration?: number;
  timeStep?: number;
  TimeStep?: number;
  trackGroups?: CjsGrannyTrackGroup[];
  TrackGroups?: CjsGrannyTrackGroup[];
}

export interface CjsGrannyTrackGroup {
  name?: string;
  Name?: string;
  transformTracks?: CjsGrannyTransformTrackJson[];
  TransformTracks?: CjsGrannyTransformTrackJson[];
  vectorTracks?: CjsGrannyVectorTrackJson[];
  VectorTracks?: CjsGrannyVectorTrackJson[];
  textTracks?: CjsGrannyTextTrackJson[];
  TextTracks?: CjsGrannyTextTrackJson[];
}

export interface CjsGrannyTransformTrackJson {
  name?: string;
  Name?: string;
  orientation?: CjsGrannyCurveJson;
  Orientation?: CjsGrannyCurveJson;
  position?: CjsGrannyCurveJson;
  Position?: CjsGrannyCurveJson;
  scaleShear?: CjsGrannyCurveJson;
  ScaleShear?: CjsGrannyCurveJson;
}

export interface CjsGrannyVectorTrackJson {
  name?: string;
  Name?: string;
  valueCurve?: CjsGrannyCurveJson;
  ValueCurve?: CjsGrannyCurveJson;
}

export interface CjsGrannyTextTrackJson {
  name?: string;
  Name?: string;
  entries?: CjsGrannyTextTrackEntryJson[];
  Entries?: CjsGrannyTextTrackEntryJson[];
}

export interface CjsGrannyTextTrackEntryJson {
  time?: number;
  timeStamp?: number;
  timestamp?: number;
  TimeStamp?: number;
  text?: string;
  Text?: string;
  [key: string]: unknown;
}

export interface CjsGrannyTextTrackEntry {
  time: number;
  text: string;
}

export interface CjsGrannyCurveJson {
  format?: number;
  Format?: number;
  degree?: number;
  Degree?: number;
  knots?: number[];
  Knots?: number[];
  controls?: number[];
  Controls?: number[];
  dimension?: number;
  Dimension?: number;
  controlScaleOffsets?: number[];
  knotsControls?: number[];
  controlScale?: number;
  controlOffset?: number;
  controlScales?: number[];
  controlOffsets?: number[];
  oneOverKnotScale?: number;
  oneOverKnotScaleTrunc?: number;
  scaleOffsetTableEntries?: number;
  error?: string;
  Error?: string;
  [key: string]: unknown;
}

export interface CjsDecodedGrannyCurve {
  format?: number;
  knots: number[];
  controls: number[];
  degree: number;
  dimension: number;
  keyframed: boolean;
}

const grannyJsonResources = new Map<string, CjsGrannyTrackSource>();

export function CjsRegisterGrannyJsonResource(
  path: string,
  source: CjsGrannyTrackSource,
): void {
  if (path) {
    grannyJsonResources.set(path, source);
  }
}

export function CjsUnregisterGrannyJsonResource(path: string): void {
  grannyJsonResources.delete(path);
}

export function CjsClearGrannyJsonResources(): void {
  grannyJsonResources.clear();
}

export function CjsResolveGrannyJsonResource(
  path: string,
): CjsGrannyTrackSource | null {
  return grannyJsonResources.get(path) ?? null;
}

export function CjsGetGrannyJsonTrackSource(
  value: unknown,
): CjsGrannyTrackSource | null {
  return findTrackSource(value, 0);
}

export function CjsGetGrannyAnimations(
  source: CjsGrannyTrackSource,
): CjsGrannyAnimation[] {
  return getArray<CjsGrannyAnimation>(source, "animations", "Animations");
}

export function CjsGetGrannyTrackGroups(
  animation: CjsGrannyAnimation,
): CjsGrannyTrackGroup[] {
  return getArray<CjsGrannyTrackGroup>(
    animation,
    "trackGroups",
    "TrackGroups",
  );
}

export function CjsGetGrannyAnimationDuration(
  animation: CjsGrannyAnimation,
): number {
  return Number(animation.duration ?? animation.Duration) || 0;
}

export function CjsGetGrannyAnimationTimeStep(
  animation: CjsGrannyAnimation,
): number {
  return Number(animation.timeStep ?? animation.TimeStep) || 0;
}

export function CjsFindGrannyTransformTrack(
  group: unknown,
  name: string,
): CjsGrannyTransformTrackJson | null {
  const trackGroup = asTrackGroup(group);
  if (!trackGroup) {
    return null;
  }

  const tracks = getArray<CjsGrannyTransformTrackJson>(
    trackGroup,
    "transformTracks",
    "TransformTracks",
  );
  const track = tracks.find((item) => getName(item) === name);
  return track ? normalizeTransformTrack(track) :
    null;
}

export function CjsFindGrannyVectorTrack(
  group: unknown,
  name: string,
): CjsGrannyVectorTrackJson | null {
  const trackGroup = asTrackGroup(group);
  if (!trackGroup) {
    return null;
  }

  const tracks = getArray<CjsGrannyVectorTrackJson>(
    trackGroup,
    "vectorTracks",
    "VectorTracks",
  );
  const track = tracks.find((item) => getName(item) === name);
  return track ? normalizeVectorTrack(track) : null;
}

export function CjsFindGrannyTextTrack(
  group: unknown,
  name: string,
): CjsGrannyTextTrackJson | null {
  const trackGroup = asTrackGroup(group);
  if (!trackGroup) {
    return null;
  }

  const textTracks = getArray<CjsGrannyTextTrackJson>(
    trackGroup,
    "textTracks",
    "TextTracks",
  );
  return textTracks.find((track) => getName(track) === name) ?? null;
}

export function CjsGetGrannyTextTrackEntries(
  track: CjsGrannyTextTrackJson,
): CjsGrannyTextTrackEntry[] {
  const entries = getArray<CjsGrannyTextTrackEntryJson>(
    track,
    "entries",
    "Entries",
  );
  const out: CjsGrannyTextTrackEntry[] = [];

  for (const entry of entries) {
    const time = getEntryTime(entry);
    if (!Number.isFinite(time)) {
      continue;
    }

    out.push({
      time,
      text: String(entry.text ?? entry.Text ?? ""),
    });
  }

  return out;
}

export function CjsDecodeGrannyCurve(
  curve: CjsGrannyCurveJson | undefined,
  dimension: CjsGrannyCurveDimension,
): CjsDecodedGrannyCurve | null {
  if (!curve || curve.error || curve.Error) {
    return null;
  }

  const normalized = normalizeCurve(curve);
  const decodedDirect = getDecodedCurve(normalized, dimension);
  if (decodedDirect) {
    return decodedDirect;
  }

  if (
    typeof normalized.format !== "number" ||
    typeof normalized.degree !== "number"
  ) {
    return null;
  }

  try {
    const decoded = CjsGrannyCurves.decodeCurve(
      normalized as CjsGrannyCurveJson & {
        format: number;
        degree: number;
      },
      dimension,
    ) as {
      knots: number[];
      controls: number[];
      degree: number;
      dimension: number;
    };

    return {
      format: normalized.format,
      knots: decoded.knots,
      controls: decoded.controls,
      degree: decoded.degree,
      dimension: decoded.dimension,
      keyframed: normalized.format === 0,
    };
  } catch {
    return null;
  }
}

export function CjsSampleGrannyCurve<T extends ArrayLike<number> & {
  [index: number]: number;
}>(
  out: T,
  curve: CjsDecodedGrannyCurve,
  time: number,
  cycle: boolean,
  duration: number,
): T {
  CjsGrannyCurves.sampleDecodedCurve(
    out,
    curve,
    time,
    cycle,
    duration,
    { keyframed: curve.keyframed },
  );
  return out;
}

function exactDiv(numerator: number, divisor: number, what: string): number {
  const value = numerator / divisor;
  if (!Number.isInteger(value)) {
    throw new Error(
      `gr2reader: curve ${what}: ${numerator} is not divisible by ${divisor}`,
    );
  }
  return value;
}

function knotScaleFromTrunc(oneOverKnotScaleTrunc: number): number {
  const buffer = new Uint32Array([oneOverKnotScaleTrunc << 16]);
  return new Float32Array(buffer.buffer)[0];
}

function knotsFromControls(
  knotsControls: ArrayLike<number>,
  count: number,
  scale: number,
): number[] {
  const out = new Array(count);
  for (let i = 0; i < count; i++) {
    out[i] = fr(knotsControls[i] / scale);
  }
  return out;
}

function knotsFromControlsTrunc(
  knotsControls: ArrayLike<number>,
  count: number,
  oneOverKnotScaleTrunc: number,
): number[] {
  return knotsFromControls(
    knotsControls,
    count,
    knotScaleFromTrunc(oneOverKnotScaleTrunc),
  );
}

function identityControls(dimension: number): number[] {
  switch (dimension) {
    case 3:
      return [0, 0, 0];
    case 4:
      return [0, 0, 0, 1];
    case 9:
      return [1, 0, 0, 0, 1, 0, 0, 0, 1];
    default:
      throw new Error(
        `gr2reader: invalid curve dimension ${dimension}`,
      );
  }
}

function copyControl(
  out: ArrayLike<number> & { [index: number]: number },
  curve: {
    knots: number[];
    controls: number[];
    dimension: number;
  },
  index: number,
): ArrayLike<number> & { [index: number]: number } {
  const offset = index * curve.dimension;
  for (let i = 0; i < curve.dimension; i++) {
    out[i] = curve.controls[offset + i];
  }
  return out;
}

function findKnotIndex(knots: number[], time: number): number {
  let low = 0;
  let high = knots.length - 1;

  while (low < high) {
    const mid = (low + high) >> 1;
    if (knots[mid] > time) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }

  return low;
}

function sampleKeyframedCurve(
  count: number,
  time: number,
  duration: number,
): number {
  const frame = duration > 0 ? Math.trunc((count * time) / duration) : 0;
  return Math.max(0, Math.min(count - 1, frame));
}

function sampleLinearCurve(
  out: ArrayLike<number> & { [index: number]: number },
  curve: {
    knots: number[];
    controls: number[];
    dimension: number;
  },
  time: number,
  cycle: boolean,
  duration: number,
  knot: number,
): ArrayLike<number> & { [index: number]: number } {
  const
    knots = curve.knots,
    count = knots.length,
    dim = curve.dimension,
    knot0 = cycle ? (knot + count - 1) % count : knot === 0 ? 0 : knot - 1;

  const start = knots[knot0];
  let end = knots[knot];
  let localTime = time;

  if (cycle && end < start) {
    end += duration;
  }
  if (cycle && localTime < start) {
    localTime += duration;
  }

  const t = end !== start ? (localTime - start) / (end - start) : 0;
  const p0 = knot0 * dim;
  const p1 = knot * dim;

  for (let i = 0; i < dim; i++) {
    out[i] = curve.controls[p0 + i] * (1 - t) + curve.controls[p1 + i] * t;
  }
  return out;
}

function sampleQuadraticCurve(
  out: ArrayLike<number> & { [index: number]: number },
  curve: {
    knots: number[];
    controls: number[];
    dimension: number;
  },
  time: number,
  cycle: boolean,
  duration: number,
  knot: number,
): ArrayLike<number> & { [index: number]: number } {
  const
    knots = curve.knots,
    count = knots.length,
    dim = curve.dimension,
    k2 = cycle ? (knot + count - 2) % count : knot === 0 ? 0 : Math.max(0, knot - 2),
    k1 = cycle ? (knot + count - 1) % count : knot === 0 ? 0 : knot - 1;

  const ti2 = knots[k2];
  const ti1 = knots[k1];
  let ti = knots[knot];
  let tiNext = knots[(knot + 1) % count];
  let localTime = time;

  if (ti2 > ti) {
    ti += duration;
    tiNext += duration;
    localTime += duration;
  }

  if (ti1 > ti) {
    ti += duration;
    tiNext += duration;
    localTime += duration;
  }

  if (tiNext < ti) {
    tiNext += duration;
  }

  const d0 = ti - ti1;
  const d1a = ti - ti2;
  const d1b = tiNext - ti1;
  const l0 = d0 !== 0 ? (localTime - ti1) / d0 : 0;
  const l1a = d1a !== 0 ? (localTime - ti2) / d1a : 0;
  const l1b = d1b !== 0 ? (localTime - ti1) / d1b : 0;

  let c2 = (l1a + l0) - l0 * l1a;
  const ci = l0 * l1b;
  const c1 = c2 - ci;
  c2 = 1 - c2;

  const p0 = k2 * dim;
  const p1 = k1 * dim;
  const p2 = knot * dim;

  for (let i = 0; i < dim; i++) {
    out[i] = c2 * curve.controls[p0 + i] +
      c1 * curve.controls[p1 + i] +
      ci * curve.controls[p2 + i];
  }
  return out;
}

function decodeDaKeyframes32f(
  c: CjsGrannyCurveJson,
  dimension: number,
): CjsGrannyDecodedCurve {
  const
    dim = c.dimension || dimension,
    controls = c.controls || [],
    count = exactDiv(controls.length, dim, "DaKeyframes32f controls/dimension"),
    knots = new Array(count);

  for (let i = 0; i < count; i++) {
    knots[i] = i;
  }
  return { knots, controls: controls.map(fr), dimension: dim };
}

function decodeDaK32fC32f(
  c: CjsGrannyCurveJson,
  dimension: number,
): CjsGrannyDecodedCurve {
  const
    knots = (c.knots || []).map(fr),
    controls = (c.controls || []).map(fr),
    dim = knots.length
      ? exactDiv(controls.length, knots.length, "DaK32fC32f controls/knots")
      : dimension;
  return { knots, controls, dimension: dim };
}

function decodeDaIdentity(
  c: CjsGrannyCurveJson,
  dimension: number,
): CjsGrannyDecodedCurve {
  const dim = c.dimension || dimension;
  return {
    knots: [0],
    controls: identityControls(dim),
    dimension: dim,
  };
}

function decodeDaConstant32f(
  c: CjsGrannyCurveJson,
  dimension: number,
): CjsGrannyDecodedCurve {
  const controls = (c.controls || []).map(fr);
  return {
    knots: [0],
    controls,
    dimension: controls.length || dimension,
  };
}

function decodeD3Constant32f(
  c: CjsGrannyCurveJson,
): CjsGrannyDecodedCurve {
  const controls = (c.controls || [0, 0, 0]).slice(0, 3).map(fr);
  return { knots: [0], controls, dimension: 3 };
}

function decodeD4Constant32f(
  c: CjsGrannyCurveJson,
): CjsGrannyDecodedCurve {
  const controls = (c.controls || [0, 0, 0, 1]).slice(0, 4).map(fr);
  return { knots: [0], controls, dimension: 4 };
}

function decodeDaK(
  c: CjsGrannyCurveJson,
): CjsGrannyDecodedCurve {
  const
    controlScaleOffsets = c.controlScaleOffsets || [],
    knotsControls = c.knotsControls || [],
    dim = exactDiv(controlScaleOffsets.length, 2, "DaK controlScaleOffsets/2"),
    count = exactDiv(knotsControls.length, dim + 1, "DaK knotsControls/(dim+1)"),
    knots = knotsFromControlsTrunc(
      knotsControls,
      count,
      Number(c.oneOverKnotScaleTrunc) || 0,
    ),
    controls = new Array(count * dim);

  for (let i = 0; i < count; i++) {
    for (let x = 0; x < dim; x++) {
      controls[i * dim + x] = fr(
        knotsControls[count + i * dim + x] * controlScaleOffsets[x] +
          controlScaleOffsets[dim + x],
      );
    }
  }

  return { knots, controls, dimension: dim };
}

function quatFromControl16(
  out: number[],
  a: number,
  b: number,
  c: number,
  scales: ArrayLike<number>,
  offsets: ArrayLike<number>,
): number[] {
  const
    swizzle1 = ((b & 0x8000) >> 14) | (c >> 15),
    swizzle2 = (swizzle1 + 1) & 3,
    swizzle3 = (swizzle2 + 1) & 3,
    swizzle4 = (swizzle3 + 1) & 3;

  const
    dataA = (a & 0x7fff) * scales[swizzle2] + offsets[swizzle2],
    dataB = (b & 0x7fff) * scales[swizzle3] + offsets[swizzle3],
    dataC = (c & 0x7fff) * scales[swizzle4] + offsets[swizzle4];

  let dataD = Math.sqrt(
    Math.max(0, 1 - (dataA * dataA + dataB * dataB + dataC * dataC)),
  );
  if ((a & 0x8000) !== 0) {
    dataD = -dataD;
  }

  out[swizzle2] = fr(dataA);
  out[swizzle3] = fr(dataB);
  out[swizzle4] = fr(dataC);
  out[swizzle1] = fr(dataD);
  return out;
}

function decodeD4n(
  c: CjsGrannyCurveJson,
  decoder: (
    out: number[],
    a: number,
    b: number,
    c: number,
    scales: ArrayLike<number>,
    offsets: ArrayLike<number>,
  ) => number[],
  scaleTableMultiplier: number,
): CjsGrannyDecodedCurve {
  const
    knotsControls = c.knotsControls || [],
    count = exactDiv(knotsControls.length, 4, "D4n knotsControls/4"),
    knots = knotsFromControls(
      knotsControls,
      count,
      Number(c.oneOverKnotScale) || 0,
    );

  const
    selector = (c.scaleOffsetTableEntries ?? 0) >>> 0,
    scales = new Float32Array([
      D4N_SCALE_TABLE[(selector >> 0) & 0x0f] * scaleTableMultiplier,
      D4N_SCALE_TABLE[(selector >> 4) & 0x0f] * scaleTableMultiplier,
      D4N_SCALE_TABLE[(selector >> 8) & 0x0f] * scaleTableMultiplier,
      D4N_SCALE_TABLE[(selector >> 12) & 0x0f] * scaleTableMultiplier,
    ]),
    offsets = new Float32Array([
      D4N_OFFSET_TABLE[(selector >> 0) & 0x0f],
      D4N_OFFSET_TABLE[(selector >> 4) & 0x0f],
      D4N_OFFSET_TABLE[(selector >> 8) & 0x0f],
      D4N_OFFSET_TABLE[(selector >> 12) & 0x0f],
    ]);

  const
    controls = new Array(count * 4),
    quat = [0, 0, 0, 1];

  for (let i = 0; i < count; i++) {
    decoder(
      quat,
      knotsControls[count + i * 3],
      knotsControls[count + i * 3 + 1],
      knotsControls[count + i * 3 + 2],
      scales,
      offsets,
    );
    controls[i * 4] = quat[0];
    controls[i * 4 + 1] = quat[1];
    controls[i * 4 + 2] = quat[2];
    controls[i * 4 + 3] = quat[3];
  }

  return { knots, controls, dimension: 4 };
}

function decodeD4nK16uC15u(c: CjsGrannyCurveJson): CjsGrannyDecodedCurve {
  return decodeD4n(c, quatFromControl16, D4N_SCALE_TABLE_MULTIPLIER_16);
}

function quatFromControl8(
  out: number[],
  a: number,
  b: number,
  c: number,
  scales: ArrayLike<number>,
  offsets: ArrayLike<number>,
): number[] {
  const
    swizzle1 = ((b & 0x80) >> 6) | ((c & 0x80) >> 7),
    swizzle2 = (swizzle1 + 1) & 3,
    swizzle3 = (swizzle2 + 1) & 3,
    swizzle4 = (swizzle3 + 1) & 3;

  const
    dataA = (a & 0x7f) * scales[swizzle2] + offsets[swizzle2],
    dataB = (b & 0x7f) * scales[swizzle3] + offsets[swizzle3],
    dataC = (c & 0x7f) * scales[swizzle4] + offsets[swizzle4];

  let dataD = Math.sqrt(
    Math.max(0, 1 - (dataA * dataA + dataB * dataB + dataC * dataC)),
  );
  if ((a & 0x80) !== 0) {
    dataD = -dataD;
  }

  out[swizzle2] = fr(dataA);
  out[swizzle3] = fr(dataB);
  out[swizzle4] = fr(dataC);
  out[swizzle1] = fr(dataD);
  return out;
}

function decodeD4nK8uC7u(c: CjsGrannyCurveJson): CjsGrannyDecodedCurve {
  return decodeD4n(c, quatFromControl8, D4N_SCALE_TABLE_MULTIPLIER_8);
}

function decodeD3K(c: CjsGrannyCurveJson): CjsGrannyDecodedCurve {
  const
    knotsControls = c.knotsControls || [],
    count = exactDiv(knotsControls.length, 4, "D3K knotsControls/4"),
    knots = knotsFromControlsTrunc(
      knotsControls,
      count,
      Number(c.oneOverKnotScaleTrunc) || 0,
    ),
    controlScales = c.controlScales || [],
    controlOffsets = c.controlOffsets || [],
    controls = new Array(count * 3);

  for (let i = 0; i < count; i++) {
    for (let x = 0; x < 3; x++) {
      controls[i * 3 + x] = fr(
        knotsControls[count + i * 3 + x] * controlScales[x] + controlOffsets[x],
      );
    }
  }

  return { knots, controls, dimension: 3 };
}

function decodeD9I1(c: CjsGrannyCurveJson): CjsGrannyDecodedCurve {
  const
    knotsControls = c.knotsControls || [],
    count = exactDiv(knotsControls.length, 2, "D9I1 knotsControls/2"),
    knots = knotsFromControlsTrunc(
      knotsControls,
      count,
      Number(c.oneOverKnotScaleTrunc) || 0,
    );

  const
    scale = Array.isArray(c.controlScales)
      ? c.controlScales[0] ?? 0
      : c.controlScale || 0,
    offset = Array.isArray(c.controlOffsets)
      ? c.controlOffsets[0] ?? 0
      : c.controlOffset || 0,
    controls = new Array(count * 9).fill(0);

  for (let i = 0; i < count; i++) {
    const s = fr(knotsControls[count + i] * scale + offset);
    controls[i * 9] = s;
    controls[i * 9 + 4] = s;
    controls[i * 9 + 8] = s;
  }

  return { knots, controls, dimension: 9 };
}

function decodeD9I3(c: CjsGrannyCurveJson): CjsGrannyDecodedCurve {
  const
    knotsControls = c.knotsControls || [],
    count = exactDiv(knotsControls.length, 4, "D9I3 knotsControls/4"),
    knots = knotsFromControlsTrunc(
      knotsControls,
      count,
      Number(c.oneOverKnotScaleTrunc) || 0,
    ),
    controlScales = c.controlScales || [],
    controlOffsets = c.controlOffsets || [],
    controls = new Array(count * 9).fill(0);

  for (let i = 0; i < count; i++) {
    controls[i * 9] = fr(
      knotsControls[count + i * 3] * controlScales[0] + controlOffsets[0],
    );
    controls[i * 9 + 4] = fr(
      knotsControls[count + i * 3 + 1] * controlScales[1] + controlOffsets[1],
    );
    controls[i * 9 + 8] = fr(
      knotsControls[count + i * 3 + 2] * controlScales[2] + controlOffsets[2],
    );
  }

  return { knots, controls, dimension: 9 };
}

function d3I1Controls(
  knotsControls: ArrayLike<number>,
  count: number,
  scales: ArrayLike<number>,
  offsets: ArrayLike<number>,
): number[] {
  const controls = new Array(count * 3);
  for (let i = 0; i < count; i++) {
    const value = knotsControls[count + i];
    controls[i * 3] = fr(value * scales[0] + offsets[0]);
    controls[i * 3 + 1] = fr(value * scales[1] + offsets[1]);
    controls[i * 3 + 2] = fr(value * scales[2] + offsets[2]);
  }
  return controls;
}

function decodeD3I1K32fC32f(
  c: CjsGrannyCurveJson,
): CjsGrannyDecodedCurve {
  const
    knotsControls = c.knotsControls || [],
    count = exactDiv(knotsControls.length, 2, "D3I1K32f knotsControls/2"),
    knots = new Array(count);

  for (let i = 0; i < count; i++) {
    knots[i] = fr(knotsControls[i]);
  }

  return {
    knots,
    controls: d3I1Controls(
      knotsControls,
      count,
      c.controlScales || [],
      c.controlOffsets || [],
    ),
    dimension: 3,
  };
}

function decodeD3I1u(
  c: CjsGrannyCurveJson,
): CjsGrannyDecodedCurve {
  const
    knotsControls = c.knotsControls || [],
    count = exactDiv(knotsControls.length, 2, "D3I1 knotsControls/2"),
    knots = knotsFromControlsTrunc(
      knotsControls,
      count,
      Number(c.oneOverKnotScaleTrunc) || 0,
    );

  return {
    knots,
    controls: d3I1Controls(
      knotsControls,
      count,
      c.controlScales || [],
      c.controlOffsets || [],
    ),
    dimension: 3,
  };
}

function decodeDaK16uC16u(c: CjsGrannyCurveJson): CjsGrannyDecodedCurve {
  return decodeDaK(c);
}

function decodeDaK8uC8u(c: CjsGrannyCurveJson): CjsGrannyDecodedCurve {
  return decodeDaK(c);
}

function decodeD3K16uC16u(c: CjsGrannyCurveJson): CjsGrannyDecodedCurve {
  return decodeD3K(c);
}

function decodeD3K8uC8u(c: CjsGrannyCurveJson): CjsGrannyDecodedCurve {
  return decodeD3K(c);
}

function decodeD9I1K16uC16u(c: CjsGrannyCurveJson): CjsGrannyDecodedCurve {
  return decodeD9I1(c);
}

function decodeD9I1K8uC8u(c: CjsGrannyCurveJson): CjsGrannyDecodedCurve {
  return decodeD9I1(c);
}

function decodeD9I3K16uC16u(c: CjsGrannyCurveJson): CjsGrannyDecodedCurve {
  return decodeD9I3(c);
}

function decodeD9I3K8uC8u(c: CjsGrannyCurveJson): CjsGrannyDecodedCurve {
  return decodeD9I3(c);
}

function decodeD3I1K16uC16u(c: CjsGrannyCurveJson): CjsGrannyDecodedCurve {
  return decodeD3I1u(c);
}

function decodeD3I1K8uC8u(c: CjsGrannyCurveJson): CjsGrannyDecodedCurve {
  return decodeD3I1u(c);
}

function asRecord(value: unknown): Record<string, unknown> | null {
  return value !== null && typeof value === "object"
    ? value as Record<string, unknown>
    : null;
}

function asTrackSource(value: unknown): CjsGrannyTrackSource | null {
  const record = asRecord(value);
  return hasArrayValue(record, "animations", "Animations")
    ? record as unknown as CjsGrannyTrackSource
    : null;
}

function asTrackGroup(value: unknown): CjsGrannyTrackGroup | null {
  const record = asRecord(value);
  return record ? record as unknown as CjsGrannyTrackGroup : null;
}

function findTrackSource(
  value: unknown,
  depth: number,
): CjsGrannyTrackSource | null {
  const direct = asTrackSource(value);
  if (direct) {
    return direct;
  }

  const record = asRecord(value);
  if (!record || depth > 8) {
    return null;
  }

  for (
    const key of [
      "json",
      "Json",
      "data",
      "Data",
      "value",
      "Value",
      "source",
      "Source",
      "fileInfo",
      "FileInfo",
    ]
  ) {
    const nested = findTrackSource(record[key], depth + 1);
    if (nested) {
      return nested;
    }
  }

  return null;
}

function getArray<T>(
  value: object,
  lowerKey: string,
  upperKey: string,
): T[] {
  const record = value as Record<string, unknown>;
  const lower = record[lowerKey];
  if (Array.isArray(lower)) {
    return lower as T[];
  }

  const upper = record[upperKey];
  return Array.isArray(upper) ? upper as T[] : [];
}

function hasArrayValue(
  value: Record<string, unknown> | null,
  lowerKey: string,
  upperKey: string,
): boolean {
  return Array.isArray(value?.[lowerKey]) || Array.isArray(value?.[upperKey]);
}

function getName(
  value:
    | CjsGrannyTrackGroup
    | CjsGrannyTransformTrackJson
    | CjsGrannyVectorTrackJson
    | CjsGrannyTextTrackJson,
): string | undefined {
  return value.name ?? value.Name;
}

function getEntryTime(entry: CjsGrannyTextTrackEntryJson): number {
  const value = entry.timeStamp ?? entry.TimeStamp ?? entry.timestamp ??
    entry.time;
  return typeof value === "number" ? value : Number.NaN;
}

function normalizeTransformTrack(
  track: CjsGrannyTransformTrackJson,
): CjsGrannyTransformTrackJson {
  return {
    ...track,
    name: getName(track),
    orientation: track.orientation ?? track.Orientation,
    position: track.position ?? track.Position,
    scaleShear: track.scaleShear ?? track.ScaleShear,
  };
}

function normalizeVectorTrack(
  track: CjsGrannyVectorTrackJson,
): CjsGrannyVectorTrackJson {
  return {
    ...track,
    name: getName(track),
    valueCurve: track.valueCurve ?? track.ValueCurve,
  };
}

function normalizeCurve(curve: CjsGrannyCurveJson): CjsGrannyCurveJson {
  const normalized = { ...curve };
  const record = curve as Record<string, unknown>;
  for (const [key, value] of Object.entries(record)) {
    const lowerKey = lowerFirst(key);
    if (!(lowerKey in normalized)) {
      normalized[lowerKey] = value;
    }
  }

  normalized.format = curve.format ?? curve.Format;
  normalized.degree = curve.degree ?? curve.Degree;
  normalized.knots = curve.knots ?? curve.Knots;
  normalized.controls = curve.controls ?? curve.Controls;
  normalized.dimension = curve.dimension ?? curve.Dimension;
  normalized.error = curve.error ?? curve.Error;
  return normalized;
}

function getDecodedCurve(
  curve: CjsGrannyCurveJson,
  dimension: CjsGrannyCurveDimension,
): CjsDecodedGrannyCurve | null {
  const knots = curve.knots;
  const controls = curve.controls;
  const curveDimension = Number(curve.dimension) || dimension;
  if (
    !Array.isArray(knots) ||
    !Array.isArray(controls) ||
    curveDimension !== dimension ||
    controls.length % curveDimension !== 0
  ) {
    return null;
  }

  return {
    format: curve.format,
    knots,
    controls,
    degree: Number(curve.degree) || 0,
    dimension: curveDimension,
    keyframed: curve.format === 0,
  };
}

function lowerFirst(value: string): string {
  return value ? value[0].toLowerCase() + value.slice(1) : value;
}
