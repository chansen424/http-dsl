grammar http;

toplevel: command EOF;

expression:
	value
	| addable PLUS addable
	| request
	| input
	| expression LBRACKET (INT | key | var) RBRACKET;

command:
	<assoc = right> command SEMICOLON command
	| assign
	| assign_field
	| delete_field
	| output
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
DLEFTARROW: '<<';
WITH: 'with';
INPUT: 'input';
PLUS: '+';

addable: STRING | var;

assign: LET var EQUALS expression;

assign_field:
	LET expression LBRACKET expression RBRACKET EQUALS expression;

delete_field: DEL expression LBRACKET key RBRACKET;

output: key DLEFTARROW expression;

print: PRINT LPAREN expression RPAREN;

input: INPUT LPAREN RPAREN;

request:
	GET FROM STRING
	| GET FROM STRING WITH headers
	| POST json TO STRING
	| POST json TO STRING WITH headers;

json: LBRACE RBRACE | LBRACE pair (COMMA pair)* RBRACE;

headers: json;

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
