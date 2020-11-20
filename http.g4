grammar http;

expression:
	<assoc = left> expression SEMICOLON expression
	| assign
	| print
	| value
	| request;
// | expression SEMICOLON expression;

// statement: assign | print;

LPAREN: '(';
RPAREN: ')';
LBRACE: '{';
RBRACE: '}';
COLON: ':';
SEMICOLON: ';';
COMMA: ',';
EQUALS: '=';
LET: 'let';
PRINT: 'print';
GET: 'GET';
POST: 'POST';
TO: 'to';
FROM: 'from';

assign: LET var EQUALS expression;

print: PRINT LPAREN expression RPAREN;

request: GET FROM STRING | POST json TO STRING;

json: LBRACE RBRACE | LBRACE pair (COMMA pair)* RBRACE;

pair: key COLON value;

NAME: [a-zA-Z][a-zA-Z]*;

// To be JSON parsable, keys require double quotes around them
key: STRING;

var: NAME;

value: INT | STRING | json | var;

INT: [0-9][0-9]*;

// Strings without the ability to escape double quotes
STRING: '"' ~('"')* '"';

// For ignoring whitespace
WS: [ \t\u000C\r\n]+ -> skip;

LINE_COMMENT: '//' ~[\r\n]* '\r'? '\n' -> skip;
