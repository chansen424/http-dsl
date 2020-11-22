import { VAR_NOT_FOUND } from './errors';
import { Value } from './types';


const variableInJSON = /: *[a-zA-Z0-9]+/g;

function isJson(s: string): boolean {
  return s.startsWith("{") && s.endsWith("}");
}

function isNumeric(s: string): boolean {
  return !isNaN(parseFloat(s));
}

function parseArray(stringifiedArray: string, context: any): Object {
  const elements = removeEnclosing(stringifiedArray).split(/[ ,]+/);
  const result: Map<Number, Value> = new Map();
  elements.forEach((value, index) => {
    if (value.startsWith("\"")) {
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
  })
  return result;
}

// function parseJSON(s: string, context: any): Object {
//   return JSON.parse(s, function(_, value) {
//     if (typeof(value) === 'string' && value[0] === '$'){
//       const variableName = value.substr(1)
//       return context[variableName]
//     }
//     return value
//   });
// }
function parseJson(stringifiedJson: string, context: any): Object {
  const variablesInserted = stringifiedJson.replace(
    variableInJSON,
    (match: string) => {
      const variable = match.substring(1).trim();
      if (variable in context) {
        return typeof context[variable] === 'string' ?
          `: "${context[variable]}"` : `: ${context[variable]}`;
      } else {
        throw VAR_NOT_FOUND;
      }
    }
  );
  return JSON.parse(variablesInserted);
}

function removeEnclosing(s: string): string {
  return s.substr(1, s.length - 2);
}

export { isNumeric, parseArray, parseJson, removeEnclosing };
