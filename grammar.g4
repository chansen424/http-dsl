grammar http;

expression: request;

request: 'GET' 'from' STRING | 'POST' JSON 'to' STRING;

JSON: '{' '}' | '{' PAIR (',' PAIR)* '}';

PAIR: KEY ':' VALUE;

KEY: [a-zA-Z][a-zA-Z]*;

VALUE: INT | STRING;

INT: [0-9][0-9]*;

// Strings without the ability to escape double quotes
STRING: '"' ~('"')* '"';

// For ignoring whitespace
WS: [ \t\u000C\r\n]+ -> skip;
