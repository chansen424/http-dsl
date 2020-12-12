const VAR_NOT_FOUND = (x: string) => new Error(`Variable not found: ${x}`);
const ILLEGAL_EXTRACTION = new Error("Can only extract attributes from a JSON");
const ILLEGAL_SET = new Error("Can only add or edit fields on JSONs");
const UNDEFINED_PARSER_CONTEXT = new Error("Cannot operate on undefined parser context");
const INVALID_HEADER = new Error("Header values can only be strings!");
export { VAR_NOT_FOUND, ILLEGAL_EXTRACTION, ILLEGAL_SET, UNDEFINED_PARSER_CONTEXT, INVALID_HEADER };
