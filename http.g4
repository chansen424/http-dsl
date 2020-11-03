grammar http;

expression: request | VALUE;

statement: assgn | print;

assgn: 'let' NAME '=' expression;

print: 'print' '(' expression ')';

request: 'GET' 'from' STRING | 'POST' JSON 'to' STRING;

JSON: '{' '}' | '{' PAIR (',' PAIR)* '}';

PAIR: KEY ':' VALUE;

NAME: [a-zA-Z][a-zA-Z]*;

KEY: NAME;

VAR: NAME;

VALUE: INT | STRING | JSON;

INT: [0-9][0-9]*;

// Strings without the ability to escape double quotes
STRING: '"' ~('"')* '"';

// For ignoring whitespace
WS: [ \t\u000C\r\n]+ -> skip;
