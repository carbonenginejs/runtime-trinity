export interface CjsCurveExpressionTermInfo
{
  group: string;
  name: string;
  kind: "function" | "variable";
  description: string;
  parameters?: string;
}

const COMMON_TERMS: CjsCurveExpressionTermInfo[] = [
  {
    group: "Random",
    name: "fractal",
    kind: "function",
    parameters: "x, alpha, beta, n",
    description: "fractal noise",
  },
  {
    group: "Random",
    name: "noise",
    kind: "function",
    parameters: "x",
    description: "simple one-octave noise",
  },
  {
    group: "Random",
    name: "randomConstant",
    kind: "function",
    parameters: "a, b",
    description: "random per-curve constant in range [a, b)",
  },
  {
    group: "Random",
    name: "randconst",
    kind: "function",
    parameters: "a, b",
    description: "random per-curve constant in range [a, b)",
  },
  {
    group: "Random",
    name: "random",
    kind: "function",
    parameters: "a, b",
    description: "random value in range [a, b)",
  },
  {
    group: "Random",
    name: "randhash",
    kind: "function",
    parameters: "a, b, x",
    description: "random value in range [a, b) based on value x",
  },
  {
    group: "Inputs",
    name: "input",
    kind: "function",
    parameters: "n",
    description: "n-th input curve value at current time",
  },
  {
    group: "Inputs",
    name: "inputAt",
    kind: "function",
    parameters: "n, t",
    description: "input curve value at time t",
  },
  {
    group: "Math",
    name: "clamp",
    kind: "function",
    parameters: "x, min, max",
    description: "value x clamped to [min, max] range",
  },
  {
    group: "Inputs",
    name: "input1",
    kind: "variable",
    description: "input1 attribute",
  },
  {
    group: "Inputs",
    name: "input2",
    kind: "variable",
    description: "input2 attribute",
  },
  {
    group: "Inputs",
    name: "input3",
    kind: "variable",
    description: "input3 attribute",
  },
  {
    group: "Inputs",
    name: "input4",
    kind: "variable",
    description: "input4 attribute",
  },
  {
    group: "Inputs",
    name: "time",
    kind: "variable",
    description: "current time",
  },
  {
    group: "Math",
    name: "pi",
    kind: "variable",
    description: "Pi value",
  },
  {
    group: "Math",
    name: "pi2",
    kind: "variable",
    description: "Pi x 2 value",
  },
];

const RADIANS_TERM: CjsCurveExpressionTermInfo = {
  group: "Math",
  name: "radians",
  kind: "function",
  parameters: "x",
  description: "convert x degrees to radians",
};

export function GetCurveExpressionTermInfo(
  options: { includeRadians?: boolean } = {},
): CjsCurveExpressionTermInfo[]
{
  const terms = COMMON_TERMS.map((term) => ({ ...term }));
  if (options.includeRadians)
  {
    terms.splice(9, 0, { ...RADIANS_TERM });
  }
  return terms;
}
