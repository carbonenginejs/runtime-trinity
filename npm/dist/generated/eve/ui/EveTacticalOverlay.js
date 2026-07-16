import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { vec3 } from '@carbonenginejs/core-math/vec3';
import { vec4 } from '@carbonenginejs/core-math/vec4';

let _initClass, _init_trackObjects, _init_extra_trackObjects, _init_totalSegmentsLast, _init_extra_totalSegmentsLast, _init_requestedSegmentsLast, _init_extra_requestedSegmentsLast, _init_anchorEffect, _init_extra_anchorEffect, _init_connectorEffect, _init_extra_connectorEffect, _init_velocityEffect, _init_extra_velocityEffect, _init_activeRange, _init_extra_activeRange, _init_rangeFadeLength, _init_extra_rangeFadeLength, _init_rangeMultiplier, _init_extra_rangeMultiplier, _init_sourceRadius, _init_extra_sourceRadius, _init_interestRange, _init_extra_interestRange, _init_outsideInterestIntensity, _init_extra_outsideInterestIntensity, _init_minRadiusForRange, _init_extra_minRadiusForRange, _init_segmentsLow, _init_extra_segmentsLow, _init_segmentsMedium, _init_extra_segmentsMedium, _init_segmentsHigh, _init_extra_segmentsHigh, _init_targetMaxSegments, _init_extra_targetMaxSegments, _init_arcSegmentMultiplier, _init_extra_arcSegmentMultiplier, _init_segmentCountMultiplier, _init_extra_segmentCountMultiplier, _init_translationCurve, _init_extra_translationCurve, _init_worldPosition, _init_extra_worldPosition, _init_interestObject, _init_extra_interestObject;

/** EveTacticalOverlay (eve/ui) - generated from schema shapeHash 889b4065.... */
let _EveTacticalOverlay;
class EveTacticalOverlay extends CjsModel {
  static {
    ({
      e: [_init_trackObjects, _init_extra_trackObjects, _init_totalSegmentsLast, _init_extra_totalSegmentsLast, _init_requestedSegmentsLast, _init_extra_requestedSegmentsLast, _init_anchorEffect, _init_extra_anchorEffect, _init_connectorEffect, _init_extra_connectorEffect, _init_velocityEffect, _init_extra_velocityEffect, _init_activeRange, _init_extra_activeRange, _init_rangeFadeLength, _init_extra_rangeFadeLength, _init_rangeMultiplier, _init_extra_rangeMultiplier, _init_sourceRadius, _init_extra_sourceRadius, _init_interestRange, _init_extra_interestRange, _init_outsideInterestIntensity, _init_extra_outsideInterestIntensity, _init_minRadiusForRange, _init_extra_minRadiusForRange, _init_segmentsLow, _init_extra_segmentsLow, _init_segmentsMedium, _init_extra_segmentsMedium, _init_segmentsHigh, _init_extra_segmentsHigh, _init_targetMaxSegments, _init_extra_targetMaxSegments, _init_arcSegmentMultiplier, _init_extra_arcSegmentMultiplier, _init_segmentCountMultiplier, _init_extra_segmentCountMultiplier, _init_translationCurve, _init_extra_translationCurve, _init_worldPosition, _init_extra_worldPosition, _init_interestObject, _init_extra_interestObject],
      c: [_EveTacticalOverlay, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveTacticalOverlay",
      family: "eve/ui"
    })], [[[io, io.read, void 0, type.list("EveTacticalOverlayTrackObject")], 16, "trackObjects"], [[io, io.read, type, type.float32], 16, "totalSegmentsLast"], [[io, io.read, type, type.float32], 16, "requestedSegmentsLast"], [[io, io.notify, io, io.persist, void 0, type.model("Tr2Effect")], 16, "anchorEffect"], [[io, io.notify, io, io.persist, void 0, type.model("Tr2Effect")], 16, "connectorEffect"], [[io, io.notify, io, io.persist, void 0, type.model("Tr2Effect")], 16, "velocityEffect"], [[io, io.persist, type, type.vec4], 16, "activeRange"], [[io, io.persist, type, type.vec4], 16, "rangeFadeLength"], [[io, io.persist, type, type.vec4], 16, "rangeMultiplier"], [[io, io.persist, type, type.vec4], 16, "sourceRadius"], [[io, io.persist, type, type.float32], 16, "interestRange"], [[io, io.persist, type, type.float32], 16, "outsideInterestIntensity"], [[io, io.persist, type, type.float32], 16, "minRadiusForRange"], [[io, io.persist, type, type.float32], 16, "segmentsLow"], [[io, io.persist, type, type.float32], 16, "segmentsMedium"], [[io, io.persist, type, type.float32], 16, "segmentsHigh"], [[io, io.persist, type, type.float32], 16, "targetMaxSegments"], [[io, io.persist, type, type.float32], 16, "arcSegmentMultiplier"], [[io, io.persist, type, type.float32], 16, "segmentCountMultiplier"], [[io, io.persist, void 0, type.model("ITriVectorFunction")], 16, "translationCurve"], [[io, io.persist, type, type.vec3], 16, "worldPosition"], [[io, io.readwrite, void 0, type.objectRef("EveTacticalOverlayTrackObject")], 16, "interestObject"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_interestObject(this);
  }
  /** m_trackObjects (PEveTacticalOverlayTrackObjectVector) [READ] */
  trackObjects = _init_trackObjects(this, []);

  /** m_totalSegmentsLast (float) [READ] */
  totalSegmentsLast = (_init_extra_trackObjects(this), _init_totalSegmentsLast(this, 0));

  /** m_requestedSegmentsLast (float) [READ] */
  requestedSegmentsLast = (_init_extra_totalSegmentsLast(this), _init_requestedSegmentsLast(this, 0));

  /** m_anchorEffect (Tr2EffectPtr) [READWRITE, PERSIST, NOTIFY] */
  anchorEffect = (_init_extra_requestedSegmentsLast(this), _init_anchorEffect(this, null));

  /** m_connectorEffect (Tr2EffectPtr) [READWRITE, PERSIST, NOTIFY] */
  connectorEffect = (_init_extra_anchorEffect(this), _init_connectorEffect(this, null));

  /** m_velocityEffect (Tr2EffectPtr) [READWRITE, PERSIST, NOTIFY] */
  velocityEffect = (_init_extra_connectorEffect(this), _init_velocityEffect(this, null));

  /** m_ranges.x (Vector4) [READWRITE, PERSIST] */
  activeRange = (_init_extra_velocityEffect(this), _init_activeRange(this, vec4.fromValues(200000, 50000, 1, 50)));

  /** m_ranges.y (Vector4) [READWRITE, PERSIST] */
  rangeFadeLength = (_init_extra_activeRange(this), _init_rangeFadeLength(this, vec4.fromValues(200000, 50000, 1, 50)));

  /** m_ranges.z (Vector4) [READWRITE, PERSIST] */
  rangeMultiplier = (_init_extra_rangeFadeLength(this), _init_rangeMultiplier(this, vec4.fromValues(200000, 50000, 1, 50)));

  /** m_ranges.w (Vector4) [READWRITE, PERSIST] */
  sourceRadius = (_init_extra_rangeMultiplier(this), _init_sourceRadius(this, vec4.fromValues(200000, 50000, 1, 50)));

  /** m_interestRange (float) [READWRITE, PERSIST] */
  interestRange = (_init_extra_sourceRadius(this), _init_interestRange(this, 0));

  /** m_outsideInterestIntensity (float) [READWRITE, PERSIST] */
  outsideInterestIntensity = (_init_extra_interestRange(this), _init_outsideInterestIntensity(this, 0.35));

  /** m_minRadiusForRange (float) [READWRITE, PERSIST] */
  minRadiusForRange = (_init_extra_outsideInterestIntensity(this), _init_minRadiusForRange(this, 150));

  /** m_connectorSegmentsLow (float) [READWRITE, PERSIST] */
  segmentsLow = (_init_extra_minRadiusForRange(this), _init_segmentsLow(this, 2));

  /** m_connectorSegmentsMedium (float) [READWRITE, PERSIST] */
  segmentsMedium = (_init_extra_segmentsLow(this), _init_segmentsMedium(this, 5));

  /** m_connectorSegmentsHigh (float) [READWRITE, PERSIST] */
  segmentsHigh = (_init_extra_segmentsMedium(this), _init_segmentsHigh(this, 9));

  /** m_targetSegmentCount (float) [READWRITE, PERSIST] */
  targetMaxSegments = (_init_extra_segmentsHigh(this), _init_targetMaxSegments(this, 25000));

  /** m_arcSegmentMultiplier (float) [READWRITE, PERSIST] */
  arcSegmentMultiplier = (_init_extra_targetMaxSegments(this), _init_arcSegmentMultiplier(this, 1));

  /** m_segmentCountMultiplier (float) [READWRITE, PERSIST] */
  segmentCountMultiplier = (_init_extra_arcSegmentMultiplier(this), _init_segmentCountMultiplier(this, 2));

  /** m_positionCurve (ITriVectorFunctionPtr) [READWRITE, PERSIST] */
  translationCurve = (_init_extra_segmentCountMultiplier(this), _init_translationCurve(this, null));

  /** m_rootPosition (Vector3) [READWRITE, PERSIST] */
  worldPosition = (_init_extra_translationCurve(this), _init_worldPosition(this, vec3.create()));

  /** m_interestObject (EveTacticalOverlayTrackObjectPtr) [READWRITE] */
  interestObject = (_init_extra_worldPosition(this), _init_interestObject(this, null));
  static {
    _initClass();
  }
}

export { _EveTacticalOverlay as EveTacticalOverlay };
//# sourceMappingURL=EveTacticalOverlay.js.map
