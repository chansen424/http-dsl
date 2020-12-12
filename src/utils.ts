import * as parser from "../generated/httpParser";
const prompt = require("prompt-sync")({ sigint: true });

import { VAR_NOT_FOUND, UNDEFINED_PARSER_CONTEXT, INVALID_HEADER } from "./errors";
import { Value, Context, ObjectType, Headers } from "./types";

const variableInJSON = /: *[a-zA-Z]+/g;

function variableInScope(variable: parser.VarContext | undefined, context: Context) {
  if (variable === undefined) throw UNDEFINED_PARSER_CONTEXT;
  if (context[variable.text]) {
    return context[variable.text];
  } else {
    throw VAR_NOT_FOUND(variable.text);
  }
}

function isJson(s: string): boolean {
  return s.startsWith("{") && s.endsWith("}");
}

function isNumeric(s: string): boolean {
  return !isNaN(parseFloat(s));
}

function parseArray(stringifiedArray: string, context: Context): Object {
  const elements = removeEnclosing(stringifiedArray).split(/[ ,]+/);
  const result: Map<Number, Value> = new Map();
  elements.forEach((value, index) => {
    if (value.startsWith('"')) {
      result.set(index, removeEnclosing(value));
    } else if (isNumeric(value)) {
      result.set(index, parseInt(value));
    } else if (isJson(value)) {
      result.set(index, parseJson(value, context));
    } else {
      if (value in context) {
        result.set(index, context[value]);
      } else {
        throw VAR_NOT_FOUND;
      }
    }
  });
  return Array.from(result.values());
}

function parseJson(stringifiedJson: string, context: Context, isHeader = false): ObjectType {
  const variablesInserted = stringifiedJson.replace(
    variableInJSON,
    (match: string) => {
      const variable = match.substring(1).trim();
      if (variable in context) {
        if (isHeader && typeof context[variable] !== "string") throw INVALID_HEADER;
        return typeof context[variable] === "string"
          ? `: "${context[variable]}"`
          : `: ${context[variable]}`;
      } else {
        throw VAR_NOT_FOUND;
      }
    }
  );
  return JSON.parse(variablesInserted);
}

function parseHeaders(stringifiedHeaders: string, context: Context): Headers {
  return parseJson(stringifiedHeaders, context, true) as Headers;
}

function removeEnclosing(s: string): string {
  return s.substr(1, s.length - 2);
}

function userInput() {
  return prompt('>> ');
}

export { userInput, isNumeric, parseArray, parseJson, parseHeaders, removeEnclosing, variableInScope };
