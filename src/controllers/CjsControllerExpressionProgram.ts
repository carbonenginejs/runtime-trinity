// Reference: E:\ccpwgl\src\unsupported\state\expression\Tr2ExpressionProgram.js
// JS-only controller expression helper. Carbon has Tr2ControllerExpression, not
// a Tr2ExpressionProgram runtime class.

const BLOCKED_IDENTIFIERS = new Set([
  "__proto__",
  "prototype",
  "constructor",
  "Function",
  "eval",
  "process",
  "global",
  "globalThis",
  "window",
  "document",
  "this",
]);

const CONSTANTS: Record<string, number> = {
  true: 1,
  false: 0,
  pi: Math.PI,
  pi2: Math.PI * 2,
  _pi: Math.PI,
  _e: Math.E,
};

type ExpressionNode =
  | { type: "literal"; value: unknown }
  | { type: "identifier"; name: string }
  | { type: "unary"; operator: string; argument: ExpressionNode }
  | {
    type: "binary";
    operator: string;
    left: ExpressionNode;
    right: ExpressionNode;
  }
  | {
    type: "conditional";
    condition: ExpressionNode;
    consequent: ExpressionNode;
    alternate: ExpressionNode;
  }
  | { type: "call"; name: string; args: ExpressionNode[] };

interface ExpressionToken {
  type: "number" | "string" | "identifier" | "operator" | "eof";
  value: string | number;
  position: number;
}

export interface CjsControllerExpressionContext {
  [key: string]: unknown;
  controller?: {
    GetVariableValue?: (name: string, fallback?: number) => unknown;
  };
  variables?: Map<string, unknown> | Record<string, unknown>;
  owner?: Record<string, unknown> | null;
  stateMachine?: {
    GetStateTime?: () => number;
  } | null;
}

export type CjsControllerExpressionFunction = (
  context: CjsControllerExpressionContext,
  ...args: unknown[]
) => unknown;

export interface CjsControllerExpressionProgramOptions {
  emptyValue?: unknown;
  functions?: Record<string, CjsControllerExpressionFunction>;
  pureFunctions?: ReadonlySet<string> | readonly string[];
}

export class CjsControllerExpressionProgram {
  source = "";
  options: CjsControllerExpressionProgramOptions = {};
  ast: ExpressionNode | null = null;
  error = "";
  variableNames: Set<string> = new Set();
  functionNames: Set<string> = new Set();
  #error: Error | null = null;

  constructor(
    source = "",
    options: CjsControllerExpressionProgramOptions = {},
  ) {
    this.Compile(source, options);
  }

  /**
   * Compiles a constrained expression into an AST.
   */
  Compile(
    source = this.source,
    options: CjsControllerExpressionProgramOptions = this.options,
  ): this {
    this.source = source || "";
    this.options = options || {};
    this.error = "";
    this.#error = null;
    this.variableNames.clear();
    this.functionNames.clear();

    if (!this.source) {
      this.ast = {
        type: "literal",
        value: this.options.emptyValue ?? 1,
      };
      return this;
    }

    try {
      const parser = new CjsControllerExpressionParser(
        this.source,
        this.options,
      );
      this.ast = parser.Parse();
      this.variableNames = parser.variableNames;
      this.functionNames = parser.functionNames;
    } catch (err) {
      this.ast = null;
      this.#error = err instanceof Error ? err : new Error(String(err));
      this.error = this.#error.message;
    }
    return this;
  }

  /**
   * Evaluates the compiled expression without using dynamic JavaScript eval.
   */
  Evaluate(context: CjsControllerExpressionContext = {}): unknown {
    if (!this.ast) {
      if (this.#error) {
        throw this.#error;
      }
      return 0;
    }
    return EvaluateNode(this.ast, context, this);
  }

  /**
   * Evaluates the compiled expression as a Carbon-style numeric boolean.
   */
  EvaluateBoolean(context: CjsControllerExpressionContext = {}): boolean {
    return ToBoolean(this.Evaluate(context));
  }

  /**
   * Checks whether the expression compiled successfully.
   */
  IsValid(): boolean {
    return !!this.ast && !this.error;
  }

  /**
   * Gets variable names referenced by the expression.
   */
  GetVariableNames(): string[] {
    return Array.from(this.variableNames);
  }

  /**
   * Gets function names referenced by the expression.
   */
  GetFunctionNames(): string[] {
    return Array.from(this.functionNames);
  }

  /**
   * Checks whether any referenced function can change without variable dirties.
   */
  HasNonPureFunctions(): boolean {
    for (const name of this.functionNames) {
      if (!IsFunctionPure(name, this.options)) {
        return true;
      }
    }
    return false;
  }

  static Compile(
    source: string,
    options: CjsControllerExpressionProgramOptions = {},
  ): CjsControllerExpressionProgram {
    return new CjsControllerExpressionProgram(source, options);
  }
}

class CjsControllerExpressionParser {
  source: string;
  options: CjsControllerExpressionProgramOptions;
  tokens: ExpressionToken[];
  index = 0;
  variableNames = new Set<string>();
  functionNames = new Set<string>();

  constructor(source: string, options: CjsControllerExpressionProgramOptions) {
    this.source = source;
    this.options = options || {};
    this.tokens = Tokenize(source);
  }

  Parse(): ExpressionNode {
    const expression = this.ParseConditional();
    this.Expect("eof");
    return expression;
  }

  ParseConditional(): ExpressionNode {
    const condition = this.ParseLogicalOr();
    if (this.Match("operator", "?")) {
      const consequent = this.ParseConditional();
      this.Expect("operator", ":");
      const alternate = this.ParseConditional();
      return { type: "conditional", condition, consequent, alternate };
    }
    return condition;
  }

  ParseLogicalOr(): ExpressionNode {
    let node = this.ParseLogicalAnd();
    while (this.Match("operator", "||")) {
      node = {
        type: "binary",
        operator: "||",
        left: node,
        right: this.ParseLogicalAnd(),
      };
    }
    return node;
  }

  ParseLogicalAnd(): ExpressionNode {
    let node = this.ParseEquality();
    while (this.Match("operator", "&&")) {
      node = {
        type: "binary",
        operator: "&&",
        left: node,
        right: this.ParseEquality(),
      };
    }
    return node;
  }

  ParseEquality(): ExpressionNode {
    let node = this.ParseComparison();
    while (true) {
      if (this.Match("operator", "==")) {
        node = {
          type: "binary",
          operator: "==",
          left: node,
          right: this.ParseComparison(),
        };
      } else if (this.Match("operator", "!=")) {
        node = {
          type: "binary",
          operator: "!=",
          left: node,
          right: this.ParseComparison(),
        };
      } else {
        return node;
      }
    }
  }

  ParseComparison(): ExpressionNode {
    let node = this.ParseTerm();
    while (true) {
      if (this.Match("operator", "<")) {
        node = {
          type: "binary",
          operator: "<",
          left: node,
          right: this.ParseTerm(),
        };
      } else if (this.Match("operator", "<=")) {
        node = {
          type: "binary",
          operator: "<=",
          left: node,
          right: this.ParseTerm(),
        };
      } else if (this.Match("operator", ">")) {
        node = {
          type: "binary",
          operator: ">",
          left: node,
          right: this.ParseTerm(),
        };
      } else if (this.Match("operator", ">=")) {
        node = {
          type: "binary",
          operator: ">=",
          left: node,
          right: this.ParseTerm(),
        };
      } else {
        return node;
      }
    }
  }

  ParseTerm(): ExpressionNode {
    let node = this.ParseFactor();
    while (true) {
      if (this.Match("operator", "+")) {
        node = {
          type: "binary",
          operator: "+",
          left: node,
          right: this.ParseFactor(),
        };
      } else if (this.Match("operator", "-")) {
        node = {
          type: "binary",
          operator: "-",
          left: node,
          right: this.ParseFactor(),
        };
      } else {
        return node;
      }
    }
  }

  ParseFactor(): ExpressionNode {
    let node = this.ParseExponent();
    while (true) {
      if (this.Match("operator", "*")) {
        node = {
          type: "binary",
          operator: "*",
          left: node,
          right: this.ParseExponent(),
        };
      } else if (this.Match("operator", "/")) {
        node = {
          type: "binary",
          operator: "/",
          left: node,
          right: this.ParseExponent(),
        };
      } else if (this.Match("operator", "%")) {
        node = {
          type: "binary",
          operator: "%",
          left: node,
          right: this.ParseExponent(),
        };
      } else {
        return node;
      }
    }
  }

  ParseExponent(): ExpressionNode {
    let node = this.ParseUnary();
    while (this.Match("operator", "^")) {
      node = {
        type: "binary",
        operator: "^",
        left: node,
        right: this.ParseUnary(),
      };
    }
    return node;
  }

  ParseUnary(): ExpressionNode {
    if (this.Match("operator", "!")) {
      return { type: "unary", operator: "!", argument: this.ParseUnary() };
    }
    if (this.Match("operator", "-")) {
      return { type: "unary", operator: "-", argument: this.ParseUnary() };
    }
    if (this.Match("operator", "+")) {
      return { type: "unary", operator: "+", argument: this.ParseUnary() };
    }
    return this.ParsePrimary();
  }

  ParsePrimary(): ExpressionNode {
    const token = this.Peek();

    if (this.Match("number")) {
      return { type: "literal", value: token.value };
    }

    if (this.Match("string")) {
      return { type: "literal", value: token.value };
    }

    if (this.Match("identifier")) {
      const name = String(token.value);
      this.AssertSafeIdentifier(name);
      if (this.Match("operator", "(")) {
        return this.ParseCall(name);
      }

      if (name in CONSTANTS) {
        return { type: "literal", value: CONSTANTS[name] };
      }

      this.variableNames.add(name);
      return { type: "identifier", name };
    }

    if (this.Match("operator", "(")) {
      const node = this.ParseConditional();
      this.Expect("operator", ")");
      return node;
    }

    throw this.Error(`Unexpected token '${String(token.value)}'`);
  }

  ParseCall(name: string): ExpressionNode {
    this.AssertSafeIdentifier(name);
    if (!GetFunction(name, this.options)) {
      throw this.Error(`Unknown function '${name}'`);
    }

    const args: ExpressionNode[] = [];
    if (!this.Match("operator", ")")) {
      do {
        args.push(this.ParseConditional());
      } while (this.Match("operator", ","));
      this.Expect("operator", ")");
    }

    this.functionNames.add(name);
    return { type: "call", name, args };
  }

  AssertSafeIdentifier(name: string): void {
    if (BLOCKED_IDENTIFIERS.has(name)) {
      throw this.Error(`Unsafe identifier '${name}'`);
    }
  }

  Peek(): ExpressionToken {
    return this.tokens[this.index];
  }

  Match(type: ExpressionToken["type"], value?: string): boolean {
    const token = this.Peek();
    if (!token || token.type !== type) {
      return false;
    }
    if (value !== undefined && token.value !== value) {
      return false;
    }
    this.index++;
    return true;
  }

  Expect(type: ExpressionToken["type"], value?: string): ExpressionToken {
    const token = this.Peek();
    if (this.Match(type, value)) {
      return token;
    }
    throw this.Error(
      `Expected ${value || type}, got '${
        token ? String(token.value) : "end of input"
      }'`,
    );
  }

  Error(message: string): CjsControllerExpressionCompileError {
    const token = this.Peek();
    return new CjsControllerExpressionCompileError({
      expression: this.source,
      reason: message,
      position: token ? token.position : this.source.length,
    });
  }
}

function Tokenize(source: string): ExpressionToken[] {
  const tokens: ExpressionToken[] = [];
  let i = 0;

  while (i < source.length) {
    const c = source[i];

    if (/\s/.test(c)) {
      i++;
      continue;
    }

    if (IsDigit(c) || (c === "." && IsDigit(source[i + 1]))) {
      const start = i;
      i = ReadNumber(source, i);
      tokens.push({
        type: "number",
        value: Number(source.slice(start, i)),
        position: start,
      });
      continue;
    }

    if (c === '"' || c === "'") {
      const start = i;
      const result = ReadString(source, i);
      i = result.end;
      tokens.push({ type: "string", value: result.value, position: start });
      continue;
    }

    if (IsIdentifierStart(c)) {
      const start = i;
      i++;
      while (IsIdentifierPart(source[i])) {
        i++;
      }
      tokens.push({
        type: "identifier",
        value: source.slice(start, i),
        position: start,
      });
      continue;
    }

    const two = source.slice(i, i + 2);
    if (
      two === "&&" ||
      two === "||" ||
      two === "<=" ||
      two === ">=" ||
      two === "==" ||
      two === "!="
    ) {
      tokens.push({ type: "operator", value: two, position: i });
      i += 2;
      continue;
    }

    if ("+-*/%^<>()!,?:".includes(c)) {
      tokens.push({ type: "operator", value: c, position: i });
      i++;
      continue;
    }

    throw new CjsControllerExpressionCompileError({
      expression: source,
      reason: `Unexpected character '${c}'`,
      position: i,
    });
  }

  tokens.push({ type: "eof", value: "", position: source.length });
  return tokens;
}

function ReadNumber(source: string, index: number): number {
  let i = index;
  while (IsDigit(source[i])) {
    i++;
  }
  if (source[i] === ".") {
    i++;
    while (IsDigit(source[i])) {
      i++;
    }
  }
  if (source[i] === "e" || source[i] === "E") {
    const exp = i;
    i++;
    if (source[i] === "+" || source[i] === "-") {
      i++;
    }
    const digits = i;
    while (IsDigit(source[i])) {
      i++;
    }
    if (digits === i) {
      return exp;
    }
  }
  return i;
}

function ReadString(
  source: string,
  index: number,
): { value: string; end: number } {
  const quote = source[index];
  let value = "";
  let i = index + 1;
  while (i < source.length) {
    const c = source[i++];
    if (c === quote) {
      return { value, end: i };
    }
    if (c === "\\") {
      const n = source[i++];
      switch (n) {
        case "n":
          value += "\n";
          break;
        case "r":
          value += "\r";
          break;
        case "t":
          value += "\t";
          break;
        default:
          value += n;
          break;
      }
    } else {
      value += c;
    }
  }
  throw new CjsControllerExpressionCompileError({
    expression: source,
    reason: "Unterminated string",
    position: index,
  });
}

function EvaluateNode(
  node: ExpressionNode,
  context: CjsControllerExpressionContext,
  program: CjsControllerExpressionProgram,
): unknown {
  switch (node.type) {
    case "literal":
      return node.value;

    case "identifier":
      return ResolveIdentifier(node.name, context);

    case "unary":
      return EvaluateUnary(
        node.operator,
        EvaluateNode(node.argument, context, program),
      );

    case "binary":
      return EvaluateBinary(
        node.operator,
        node.left,
        node.right,
        context,
        program,
      );

    case "conditional":
      return ToBoolean(EvaluateNode(node.condition, context, program))
        ? EvaluateNode(node.consequent, context, program)
        : EvaluateNode(node.alternate, context, program);

    case "call":
      return EvaluateCall(node, context, program);
  }
}

function EvaluateUnary(operator: string, value: unknown): number {
  switch (operator) {
    case "!":
      return ToBoolean(value) ? 0 : 1;
    case "-":
      return -ToNumber(value);
    case "+":
      return ToNumber(value);
    default:
      return 0;
  }
}

function EvaluateBinary(
  operator: string,
  leftNode: ExpressionNode,
  rightNode: ExpressionNode,
  context: CjsControllerExpressionContext,
  program: CjsControllerExpressionProgram,
): number {
  if (operator === "&&") {
    return ToBoolean(EvaluateNode(leftNode, context, program)) &&
        ToBoolean(EvaluateNode(rightNode, context, program))
      ? 1
      : 0;
  }
  if (operator === "||") {
    return ToBoolean(EvaluateNode(leftNode, context, program)) ||
        ToBoolean(EvaluateNode(rightNode, context, program))
      ? 1
      : 0;
  }

  const left = EvaluateNode(leftNode, context, program);
  const right = EvaluateNode(rightNode, context, program);
  switch (operator) {
    case "+":
      return ToNumber(left) + ToNumber(right);
    case "-":
      return ToNumber(left) - ToNumber(right);
    case "*":
      return ToNumber(left) * ToNumber(right);
    case "/":
      return ToNumber(right) === 0 ? 0 : ToNumber(left) / ToNumber(right);
    case "%":
      return ToNumber(right) === 0 ? 0 : ToNumber(left) % ToNumber(right);
    case "^":
      return Math.pow(ToNumber(left), ToNumber(right));
    case "<":
      return ToNumber(left) < ToNumber(right) ? 1 : 0;
    case "<=":
      return ToNumber(left) <= ToNumber(right) ? 1 : 0;
    case ">":
      return ToNumber(left) > ToNumber(right) ? 1 : 0;
    case ">=":
      return ToNumber(left) >= ToNumber(right) ? 1 : 0;
    case "==":
      // Carbon's CcpParser numeric/string coercion is closer to loose JS here.
      // deno-lint-ignore eqeqeq
      return left == right ? 1 : 0;
    case "!=":
      // deno-lint-ignore eqeqeq
      return left != right ? 1 : 0;
    default:
      return 0;
  }
}

function EvaluateCall(
  node: { type: "call"; name: string; args: ExpressionNode[] },
  context: CjsControllerExpressionContext,
  program: CjsControllerExpressionProgram,
): unknown {
  const fn = GetFunction(node.name, program.options);
  if (!fn) {
    throw new CjsControllerExpressionEvaluateError({
      expression: program.source,
      reason: `Unknown function '${node.name}'`,
    });
  }
  const args = node.args.map((arg) => EvaluateNode(arg, context, program));
  return fn(context || {}, ...args);
}

function ResolveIdentifier(
  name: string,
  context: CjsControllerExpressionContext = {},
): unknown {
  if (name in CONSTANTS) {
    return CONSTANTS[name];
  }

  if (context.variables) {
    if (context.variables instanceof Map && context.variables.has(name)) {
      return NormalizeValue(context.variables.get(name));
    }
    if (
      !(context.variables instanceof Map) &&
      Object.prototype.hasOwnProperty.call(context.variables, name)
    ) {
      return NormalizeValue(context.variables[name]);
    }
  }

  const value = context.controller?.GetVariableValue?.(name, undefined);
  if (value !== undefined) {
    return NormalizeValue(value);
  }

  if (Object.prototype.hasOwnProperty.call(context, name)) {
    return NormalizeValue(context[name]);
  }

  return 0;
}

function GetFunction(
  name: string,
  options: CjsControllerExpressionProgramOptions = {},
): CjsControllerExpressionFunction | null {
  if (options.functions?.[name]) {
    return options.functions[name];
  }
  return DEFAULT_FUNCTIONS[name] || null;
}

function IsFunctionPure(
  name: string,
  options: CjsControllerExpressionProgramOptions = {},
): boolean {
  if (options.functions?.[name]) {
    const pureFunctions = options.pureFunctions;
    return pureFunctions instanceof Set
      ? pureFunctions.has(name)
      : Array.isArray(pureFunctions) && pureFunctions.includes(name);
  }
  return PURE_DEFAULT_FUNCTIONS.has(name);
}

const PURE_DEFAULT_FUNCTIONS = new Set([
  "abs",
  "min",
  "max",
  "floor",
  "ceil",
  "round",
  "sqrt",
  "pow",
  "sin",
  "cos",
  "tan",
  "asin",
  "acos",
  "atan",
  "sinh",
  "cosh",
  "tanh",
  "asinh",
  "acosh",
  "atanh",
  "log2",
  "log10",
  "log",
  "ln",
  "exp",
  "sign",
  "rint",
  "sum",
  "avg",
  "clamp",
  "radians",
  "mod",
  "lerp",
]);

const DEFAULT_FUNCTIONS: Record<string, CjsControllerExpressionFunction> = {
  abs: (_ctx, x) => Math.abs(ToNumber(x)),
  min: (_ctx, ...args) => Math.min(...args.map(ToNumber)),
  max: (_ctx, ...args) => Math.max(...args.map(ToNumber)),
  floor: (_ctx, x) => Math.floor(ToNumber(x)),
  ceil: (_ctx, x) => Math.ceil(ToNumber(x)),
  round: (_ctx, x) => Math.round(ToNumber(x)),
  sqrt: (_ctx, x) => Math.sqrt(Math.max(0, ToNumber(x))),
  pow: (_ctx, x, y) => Math.pow(ToNumber(x), ToNumber(y)),
  sin: (_ctx, x) => Math.sin(ToNumber(x)),
  cos: (_ctx, x) => Math.cos(ToNumber(x)),
  tan: (_ctx, x) => Math.tan(ToNumber(x)),
  asin: (_ctx, x) => Math.asin(ToNumber(x)),
  acos: (_ctx, x) => Math.acos(ToNumber(x)),
  atan: (_ctx, x) => Math.atan(ToNumber(x)),
  sinh: (_ctx, x) => Math.sinh(ToNumber(x)),
  cosh: (_ctx, x) => Math.cosh(ToNumber(x)),
  tanh: (_ctx, x) => Math.tanh(ToNumber(x)),
  asinh: (_ctx, x) => Math.asinh(ToNumber(x)),
  acosh: (_ctx, x) => Math.acosh(ToNumber(x)),
  atanh: (_ctx, x) => Math.atanh(ToNumber(x)),
  log2: (_ctx, x) => Math.log2(ToNumber(x)),
  log10: (_ctx, x) => Math.log10(ToNumber(x)),
  log: (_ctx, x) => Math.log(ToNumber(x)),
  ln: (_ctx, x) => Math.log(ToNumber(x)),
  exp: (_ctx, x) => Math.exp(ToNumber(x)),
  sign: (_ctx, x) => {
    const value = ToNumber(x);
    return value > 0 ? 1 : value < 0 ? -1 : 0;
  },
  rint: (_ctx, x) => RoundHalfToEven(ToNumber(x)),
  sum: (_ctx, ...args) => SumValues(args),
  avg: (_ctx, ...args) => args.length ? SumValues(args) / args.length : 0,
  clamp: (_ctx, x, min, max) =>
    Math.min(ToNumber(max), Math.max(ToNumber(min), ToNumber(x))),
  radians: (_ctx, x) => ToNumber(x) * Math.PI / 180,
  mod: (_ctx, x, y) => ToNumber(y) === 0 ? 0 : ToNumber(x) % ToNumber(y),
  lerp: (_ctx, a, b, x) =>
    ToNumber(a) * (1 - ToNumber(x)) + ToNumber(b) * ToNumber(x),
  random: (_ctx, min = 0, max = 1) =>
    ToNumber(min) + Math.random() * (ToNumber(max) - ToNumber(min)),
  Random: (_ctx, min = 0, max = 1) => RandomInteger(min, max),
  randomConstant: (ctx, min = 0, max = 1) =>
    ToNumber(min) + GetRandomConstant(ctx) * (ToNumber(max) - ToNumber(min)),
  randconst: (ctx, min = 0, max = 1) =>
    DEFAULT_FUNCTIONS.randomConstant(ctx, min, max),
  randhash: (_ctx, min = 0, max = 1, value = 0) =>
    ToNumber(min) + Hash01(ToNumber(value)) * (ToNumber(max) - ToNumber(min)),
  noise: (ctx, x) => Hash01(ToNumber(x) + GetRandomConstant(ctx)),
  fractal: (ctx, x) => Hash01(ToNumber(x) + GetRandomConstant(ctx)),
  input: (ctx, index) => GetInputValue(ctx, index),
  inputAt: (ctx, index, time) => GetInputValue(ctx, index, time),
  StateTime: (ctx) =>
    ctx.stateMachine?.GetStateTime
      ? ctx.stateMachine.GetStateTime()
      : ToNumber(ctx.stateTime),
  CurveSetTime: (ctx, name) => GetCurveSetTime(ctx, name),
  AnimationTime: (ctx, name) => CallContextFunction(ctx, "AnimationTime", name),
  IsAnimationPlaying: (ctx, name) =>
    CallContextFunction(ctx, "IsAnimationPlaying", name),
  GetExternalControllerVariable: (ctx, name, fallback = 0) =>
    GetExternalControllerVariable(ctx, name, fallback),
  ShipSpeed: (ctx) => CallContextFunction(ctx, "ShipSpeed"),
  ShipMaxSpeed: (ctx) => CallContextFunction(ctx, "ShipMaxSpeed", undefined, 1),
  ShipBoosterIntensity: (ctx) =>
    CallContextFunction(ctx, "ShipBoosterIntensity"),
  KillCount: (ctx) => CallContextFunction(ctx, "KillCount"),
  BoundingSphereRadius: (ctx) =>
    CallContextFunction(ctx, "BoundingSphereRadius"),
  ShaderQuality: (ctx) => CallContextFunction(ctx, "ShaderQuality"),
  IsWeekend: (ctx) => GetServerDatePart(ctx, "dayOfWeek") % 6 === 0 ? 1 : 0,
  ServerYear: (ctx) => GetServerDatePart(ctx, "year"),
  ServerMonth: (ctx) => GetServerDatePart(ctx, "month"),
  ServerDay: (ctx) => GetServerDatePart(ctx, "day"),
  ServerDayOfWeek: (ctx) => GetServerDatePart(ctx, "dayOfWeek"),
  ServerHour: (ctx) => GetServerDatePart(ctx, "hour"),
  ServerMinute: (ctx) => GetServerDatePart(ctx, "minute"),
  ServerSecond: (ctx) => GetServerDatePart(ctx, "second"),
  ServerTimePhase: (ctx, period) => GetServerTimePhase(ctx, period),
  ServerTimeGreaterThan: (ctx, year, month, day, hour, minute, second) =>
    ServerTimeComparison(ctx, [year, month, day, hour, minute, second], 1),
  ServerTimeLessThanOrEqual: (ctx, year, month, day, hour, minute, second) =>
    ServerTimeComparison(ctx, [year, month, day, hour, minute, second], -1),
  ServerTimeEqual: (ctx, year, month, day, hour, minute, second) =>
    ServerTimeComparison(ctx, [year, month, day, hour, minute, second], 0),
  DaysSinceServerTime: (ctx, year, month, day) =>
    DaysSinceServerTime(ctx, year, month, day),
};

function GetRandomConstant(context: CjsControllerExpressionContext): number {
  const source = context.curve ?? context.self ?? context.expression;
  if (HasFunction(source, "GetRandomConstant")) {
    return ToNumber(source.GetRandomConstant());
  }
  if (HasProperty(source, "randomConstant")) {
    return ToNumber(source.randomConstant);
  }
  return 0;
}

function GetInputValue(
  context: CjsControllerExpressionContext,
  index: unknown,
  time?: unknown,
): number {
  const source = context.curve ?? context.self ?? context.expression ?? context;
  if (HasFunction(source, "GetInputValue")) {
    return ToNumber(source.GetInputValue(RoundInputIndex(index), time));
  }

  const inputs = HasProperty(source, "inputs") ? source.inputs : context.inputs;
  const input = Array.isArray(inputs)
    ? inputs[RoundInputIndex(index)]
    : null;
  if (!input) {
    return 0;
  }
  if (time !== undefined && HasFunction(input, "GetValueAt")) {
    return ToNumber(input.GetValueAt(ToNumber(time)));
  }
  if (HasFunction(input, "GetValueAt")) {
    return ToNumber(input.GetValueAt(ToNumber(context.time)));
  }
  if (HasProperty(input, "currentValue")) {
    return ToNumber(input.currentValue);
  }
  return ToNumber(input);
}

function RoundInputIndex(index: unknown): number {
  return Math.trunc(ToNumber(index) + 0.5);
}

function GetCurveSetTime(
  context: CjsControllerExpressionContext,
  name: unknown,
): number {
  const owner = context.owner;
  if (owner) {
    if (
      HasFunction(owner, "GetRangeDuration") &&
      typeof name === "string" &&
      name.includes("/")
    ) {
      const parts = name.split("/");
      return ToNumber(
        owner.GetRangeDuration(parts[0], parts.slice(1).join("/")),
      );
    }
    if (HasFunction(owner, "GetCurveSetDuration")) {
      return ToNumber(owner.GetCurveSetDuration(name));
    }
  }
  return CallContextFunction(context, "CurveSetTime", name);
}

function GetExternalControllerVariable(
  context: CjsControllerExpressionContext,
  name: unknown,
  fallback: unknown,
): number {
  if (
    HasProperty(context, "externalControllerVariables") &&
    context.externalControllerVariables &&
    typeof context.externalControllerVariables === "object" &&
    Object.prototype.hasOwnProperty.call(
      context.externalControllerVariables,
      String(name),
    )
  ) {
    return ToNumber(
      (context.externalControllerVariables as Record<string, unknown>)[
        String(name)
      ],
    );
  }
  if (HasFunction(context.owner, "GetControllerValueByName")) {
    const value = context.owner.GetControllerValueByName(name);
    return value === undefined || value === null
      ? ToNumber(fallback)
      : ToNumber(value);
  }
  return ToNumber(fallback);
}

function RandomInteger(min: unknown, max: unknown): number {
  const minValue = ToNumber(min);
  const span = Math.trunc(ToNumber(max) - minValue);
  if (span <= 0) {
    return minValue;
  }
  return minValue + Math.floor(Math.random() * span);
}

function GetServerDatePart(
  context: CjsControllerExpressionContext,
  part:
    | "year"
    | "month"
    | "day"
    | "dayOfWeek"
    | "hour"
    | "minute"
    | "second",
): number {
  const override = TryCallContextFunction(context, `Server${Capitalize(part)}`);
  if (override !== null) {
    return override;
  }

  const date = GetServerDate(context);
  switch (part) {
    case "year":
      return date.getFullYear();
    case "month":
      return date.getMonth() + 1;
    case "day":
      return date.getDate();
    case "dayOfWeek":
      return date.getDay();
    case "hour":
      return date.getHours();
    case "minute":
      return date.getMinutes();
    case "second":
      return date.getSeconds();
  }
}

function GetServerTimePhase(
  context: CjsControllerExpressionContext,
  period: unknown,
): number {
  const value = Math.abs(ToNumber(period));
  if (value === 0) {
    return 0;
  }
  return GetServerTimeSeconds(context) % value;
}

function ServerTimeComparison(
  context: CjsControllerExpressionContext,
  values: unknown[],
  mode: -1 | 0 | 1,
): number {
  const parts = [
    GetServerDatePart(context, "year"),
    GetServerDatePart(context, "month"),
    GetServerDatePart(context, "day"),
    GetServerDatePart(context, "hour"),
    GetServerDatePart(context, "minute"),
    GetServerDatePart(context, "second"),
  ];

  for (let i = 0; i < parts.length; i++) {
    const expected = ToNumber(values[i], -1);
    if (expected === -1) {
      continue;
    }

    if (mode === 0) {
      if (parts[i] !== expected) {
        return 0;
      }
      continue;
    }

    if (parts[i] > expected) {
      return mode === 1 ? 1 : 0;
    }
    if (parts[i] < expected) {
      return mode === -1 ? 1 : 0;
    }
  }

  return 1;
}

function DaysSinceServerTime(
  context: CjsControllerExpressionContext,
  year: unknown,
  month: unknown,
  day: unknown,
): number {
  const currentYear = GetServerDatePart(context, "year");
  const currentMonth = GetServerDatePart(context, "month");
  const currentDay = GetServerDatePart(context, "day");
  const targetYear = ToNumber(year, -1) === -1 ? currentYear : ToNumber(year);
  const targetMonth = ToNumber(month, -1) === -1 ? currentMonth : ToNumber(month);
  const targetDay = ToNumber(day, -1) === -1 ? currentDay : ToNumber(day);
  const target = Date.UTC(targetYear, targetMonth, targetDay);
  const current = Date.UTC(currentYear, currentMonth, currentDay);
  if (!Number.isFinite(target) || !Number.isFinite(current)) {
    return Number.MIN_VALUE;
  }
  return (current - target) / (60 * 60 * 24 * 1000);
}

function GetServerDate(context: CjsControllerExpressionContext): Date {
  const value = GetServerTimeValue(context);
  if (value instanceof Date) {
    return value;
  }
  if (typeof value === "number" && Number.isFinite(value)) {
    return new Date(NormalizeServerTimeMilliseconds(value));
  }
  return new Date();
}

function GetServerTimeSeconds(context: CjsControllerExpressionContext): number {
  const value = GetServerTimeValue(context);
  if (value instanceof Date) {
    return value.getTime() / 1000;
  }
  if (typeof value === "number" && Number.isFinite(value)) {
    return NormalizeServerTimeMilliseconds(value) / 1000;
  }
  return Date.now() / 1000;
}

function GetServerTimeValue(
  context: CjsControllerExpressionContext,
): Date | number | null {
  if (HasProperty(context, "serverTime")) {
    const value = context.serverTime;
    if (value instanceof Date || typeof value === "number") {
      return value;
    }
  }
  if (
    HasProperty(context, "functions") &&
    context.functions &&
    typeof context.functions === "object" &&
    HasFunction(context.functions, "GetServerTime")
  ) {
    const value = context.functions.GetServerTime(context);
    if (value instanceof Date || typeof value === "number") {
      return value;
    }
  }
  if (HasFunction(context.owner, "GetServerTime")) {
    const value = context.owner.GetServerTime();
    if (value instanceof Date || typeof value === "number") {
      return value;
    }
  }
  return null;
}

function NormalizeServerTimeMilliseconds(value: number): number {
  if (Math.abs(value) > 1e14) {
    return value / 10000;
  }
  if (Math.abs(value) < 1e10) {
    return value * 1000;
  }
  return value;
}

function CallContextFunction(
  context: CjsControllerExpressionContext,
  name: string,
  arg?: unknown,
  fallback = 0,
): number {
  const value = TryCallContextFunction(context, name, arg);
  return value === null ? fallback : value;
}

function TryCallContextFunction(
  context: CjsControllerExpressionContext,
  name: string,
  arg?: unknown,
): number | null {
  if (
    HasProperty(context, "functions") &&
    context.functions &&
    typeof context.functions === "object" &&
    HasFunction(context.functions, name)
  ) {
    return ToNumber(context.functions[name](arg, context));
  }
  if (HasFunction(context.owner, name)) {
    return ToNumber(context.owner[name](arg));
  }
  return null;
}

function RoundHalfToEven(value: number): number {
  const floor = Math.floor(value);
  const diff = value - floor;
  if (diff < 0.5) {
    return floor;
  }
  if (diff > 0.5) {
    return floor + 1;
  }
  return floor % 2 === 0 ? floor : floor + 1;
}

function SumValues(values: unknown[]): number {
  let total = 0;
  for (const value of values) {
    total += ToNumber(value);
  }
  return total;
}

function Hash01(value: number): number {
  const x = Math.sin(value * 12.9898 + 78.233) * 43758.5453;
  return x - Math.floor(x);
}

function NormalizeValue(value: unknown): unknown {
  if (value === true) {
    return 1;
  }
  if (value === false) {
    return 0;
  }
  if (value === undefined || value === null) {
    return 0;
  }
  return value;
}

function ToNumber(value: unknown, fallback = 0): number {
  value = NormalizeValue(value);
  const number = Number(value);
  return Number.isFinite(number) ? number : fallback;
}

function Capitalize(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function ToBoolean(value: unknown): boolean {
  if (typeof value === "string") {
    return value.length > 0;
  }
  return ToNumber(value) !== 0;
}

function IsDigit(c: string | undefined): boolean {
  return !!c && c >= "0" && c <= "9";
}

function IsIdentifierStart(c: string | undefined): boolean {
  return !!c && /[A-Za-z_]/.test(c);
}

function IsIdentifierPart(c: string | undefined): boolean {
  return !!c && /[A-Za-z0-9_]/.test(c);
}

function HasProperty<K extends string>(
  value: unknown,
  key: K,
): value is Record<K, unknown> {
  return !!value && typeof value === "object" && key in value;
}

function HasFunction<K extends string>(
  value: unknown,
  key: K,
): value is Record<K, (...args: unknown[]) => unknown> {
  return HasProperty(value, key) && typeof value[key] === "function";
}

export class CjsControllerExpressionCompileError extends Error {
  expression: string;
  reason: string;
  position: number;

  constructor(data: { expression: string; reason: string; position: number }) {
    super(
      `Error compiling expression at ${data.position}: ${data.reason} (${data.expression})`,
    );
    this.name = "CjsControllerExpressionCompileError";
    this.expression = data.expression;
    this.reason = data.reason;
    this.position = data.position;
  }
}

export class CjsControllerExpressionEvaluateError extends Error {
  expression: string;
  reason: string;

  constructor(data: { expression: string; reason: string }) {
    super(`Error evaluating expression: ${data.reason} (${data.expression})`);
    this.name = "CjsControllerExpressionEvaluateError";
    this.expression = data.expression;
    this.reason = data.reason;
  }
}
