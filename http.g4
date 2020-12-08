grammar http;

toplevel: command EOF;

expression: value | request | expression LBRACKET key RBRACKET;

command:
	<assoc = right> command SEMICOLON command
	| assign
	| assign_field
	| delete_field
	| print;

LPAREN: '(';
RPAREN: ')';
LBRACKET: '[';
RBRACKET: ']';
LBRACE: '{';
RBRACE: '}';
COLON: ':';
SEMICOLON: ';';
COMMA: ',';
EQUALS: '=';
LET: 'let';
PRINT: 'print';
DEL: 'del';
GET: 'GET';
POST: 'POST';
TO: 'to';
FROM: 'from';

assign: LET var EQUALS expression;

assign_field: LET expression LBRACKET expression RBRACKET EQUALS expression;

delete_field: DEL expression LBRACKET key RBRACKET;

print: PRINT LPAREN expression RPAREN;

request: GET FROM STRING | POST json TO STRING;

json: LBRACE RBRACE | LBRACE pair (COMMA pair)* RBRACE;

array:
	LBRACKET RBRACKET
	| LBRACKET value (COMMA value)* RBRACKET;

pair: key COLON value;

NAME: [a-zA-Z][a-zA-Z]*;

// To be JSON parsable, keys require double quotes around them
key: STRING;

var: NAME;

value: INT | STRING | json | var | array;

INT: [0-9][0-9]*;

// Strings without the ability to escape double quotes
STRING: '"' ~('"')* '"';

// For ignoring whitespace
WS: [ \t\u000C\r\n]+ -> skip;

LINE_COMMENT: '//' ~[\r\n]* '\r'? '\n' -> skip;
