grammar http;

expression: request | value;

statement: assgn | print;

LPAREN: '(';
RPAREN: ')';
LBRACE: '{';
RBRACE: '}';
COLON: ':';
COMMA: ',';
EQUALS: '=';
LET: 'let';
PRINT: 'print';
GET: 'GET';
POST: 'POST';
TO: 'to';
FROM: 'from';

assgn: LET NAME EQUALS expression;
print: PRINT LPAREN expression RPAREN;

request: GET FROM STRING | POST json TO STRING;

json: LBRACE RBRACE | LBRACE pair (COMMA pair)* RBRACE;

pair: key COLON value;

NAME: [a-zA-Z][a-zA-Z]*;

key: NAME;

var: NAME;

value: INT | STRING | json;

INT: [0-9][0-9]*;

// Strings without the ability to escape double quotes
STRING: '"' ~('"')* '"';

// For ignoring whitespace
WS: [ \t\u000C\r\n]+ -> skip;
