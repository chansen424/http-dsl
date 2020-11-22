const variableInJSON = /: *[a-zA-Z0-9]+/g;

function isNumeric(s: string): boolean {
  return !isNaN(parseFloat(s));
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
      return ":" + context[match.substring(1).trim()];
    }
  );
  return JSON.parse(variablesInserted);
}

function removeQuotes(s: string): string {
  return s.substr(1, s.length - 2);
}

export { isNumeric, parseJson, removeQuotes };
