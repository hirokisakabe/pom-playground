export type ErrorType = "xml_syntax" | "schema" | "structure" | "unknown";

export interface StructuredError {
  type: ErrorType;
  message: string;
}

const XML_SYNTAX_PATTERNS = [
  /is not closed/i,
  /invalid.*xml/i,
  /unexpected.*closing/i,
];

const SCHEMA_PATTERNS = [
  /^Cannot convert ".+" to number$/,
  /^Cannot convert ".+" to boolean/,
  /is not valid JSON$/,
];

const STRUCTURE_PATTERNS = [/<Box> must have exactly 1 child element/];

function matchesAny(message: string, patterns: RegExp[]): boolean {
  return patterns.some((p) => p.test(message));
}

export function classifyError(error: unknown): StructuredError {
  if (!(error instanceof Error)) {
    return { type: "unknown", message: "不明なエラーが発生しました" };
  }

  const message = error.message;

  if (matchesAny(message, XML_SYNTAX_PATTERNS)) {
    return { type: "xml_syntax", message };
  }

  if (matchesAny(message, SCHEMA_PATTERNS)) {
    return { type: "schema", message };
  }

  if (matchesAny(message, STRUCTURE_PATTERNS)) {
    return { type: "structure", message };
  }

  return { type: "unknown", message };
}
