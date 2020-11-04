// Generated from /Users/anshgodha/Desktop/Fall 2020/CS 4110/http-dsl/http.g4 by ANTLR 4.8
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class httpParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		LPAREN=1, RPAREN=2, LBRACE=3, RBRACE=4, COLON=5, COMMA=6, EQUALS=7, LET=8, 
		PRINT=9, GET=10, POST=11, TO=12, FROM=13, NAME=14, INT=15, STRING=16, 
		WS=17;
	public static final int
		RULE_expression = 0, RULE_statement = 1, RULE_assgn = 2, RULE_print = 3, 
		RULE_request = 4, RULE_json = 5, RULE_pair = 6, RULE_key = 7, RULE_var = 8, 
		RULE_value = 9;
	private static String[] makeRuleNames() {
		return new String[] {
			"expression", "statement", "assgn", "print", "request", "json", "pair", 
			"key", "var", "value"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'('", "')'", "'{'", "'}'", "':'", "','", "'='", "'let'", "'print'", 
			"'GET'", "'POST'", "'to'", "'from'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "LPAREN", "RPAREN", "LBRACE", "RBRACE", "COLON", "COMMA", "EQUALS", 
			"LET", "PRINT", "GET", "POST", "TO", "FROM", "NAME", "INT", "STRING", 
			"WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "http.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public httpParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class ExpressionContext extends ParserRuleContext {
		public RequestContext request() {
			return getRuleContext(RequestContext.class,0);
		}
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	}

	public final ExpressionContext expression() throws RecognitionException {
		ExpressionContext _localctx = new ExpressionContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_expression);
		try {
			setState(22);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case GET:
			case POST:
				enterOuterAlt(_localctx, 1);
				{
				setState(20);
				request();
				}
				break;
			case LBRACE:
			case INT:
			case STRING:
				enterOuterAlt(_localctx, 2);
				{
				setState(21);
				value();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatementContext extends ParserRuleContext {
		public AssgnContext assgn() {
			return getRuleContext(AssgnContext.class,0);
		}
		public PrintContext print() {
			return getRuleContext(PrintContext.class,0);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_statement);
		try {
			setState(26);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LET:
				enterOuterAlt(_localctx, 1);
				{
				setState(24);
				assgn();
				}
				break;
			case PRINT:
				enterOuterAlt(_localctx, 2);
				{
				setState(25);
				print();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AssgnContext extends ParserRuleContext {
		public TerminalNode LET() { return getToken(httpParser.LET, 0); }
		public TerminalNode NAME() { return getToken(httpParser.NAME, 0); }
		public TerminalNode EQUALS() { return getToken(httpParser.EQUALS, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public AssgnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assgn; }
	}

	public final AssgnContext assgn() throws RecognitionException {
		AssgnContext _localctx = new AssgnContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_assgn);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(28);
			match(LET);
			setState(29);
			match(NAME);
			setState(30);
			match(EQUALS);
			setState(31);
			expression();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PrintContext extends ParserRuleContext {
		public TerminalNode PRINT() { return getToken(httpParser.PRINT, 0); }
		public TerminalNode LPAREN() { return getToken(httpParser.LPAREN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(httpParser.RPAREN, 0); }
		public PrintContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_print; }
	}

	public final PrintContext print() throws RecognitionException {
		PrintContext _localctx = new PrintContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_print);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(33);
			match(PRINT);
			setState(34);
			match(LPAREN);
			setState(35);
			expression();
			setState(36);
			match(RPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RequestContext extends ParserRuleContext {
		public TerminalNode GET() { return getToken(httpParser.GET, 0); }
		public TerminalNode FROM() { return getToken(httpParser.FROM, 0); }
		public TerminalNode STRING() { return getToken(httpParser.STRING, 0); }
		public TerminalNode POST() { return getToken(httpParser.POST, 0); }
		public JsonContext json() {
			return getRuleContext(JsonContext.class,0);
		}
		public TerminalNode TO() { return getToken(httpParser.TO, 0); }
		public RequestContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_request; }
	}

	public final RequestContext request() throws RecognitionException {
		RequestContext _localctx = new RequestContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_request);
		try {
			setState(46);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case GET:
				enterOuterAlt(_localctx, 1);
				{
				setState(38);
				match(GET);
				setState(39);
				match(FROM);
				setState(40);
				match(STRING);
				}
				break;
			case POST:
				enterOuterAlt(_localctx, 2);
				{
				setState(41);
				match(POST);
				setState(42);
				json();
				setState(43);
				match(TO);
				setState(44);
				match(STRING);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class JsonContext extends ParserRuleContext {
		public TerminalNode LBRACE() { return getToken(httpParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(httpParser.RBRACE, 0); }
		public List<PairContext> pair() {
			return getRuleContexts(PairContext.class);
		}
		public PairContext pair(int i) {
			return getRuleContext(PairContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(httpParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(httpParser.COMMA, i);
		}
		public JsonContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_json; }
	}

	public final JsonContext json() throws RecognitionException {
		JsonContext _localctx = new JsonContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_json);
		int _la;
		try {
			setState(61);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(48);
				match(LBRACE);
				setState(49);
				match(RBRACE);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(50);
				match(LBRACE);
				setState(51);
				pair();
				setState(56);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(52);
					match(COMMA);
					setState(53);
					pair();
					}
					}
					setState(58);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(59);
				match(RBRACE);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PairContext extends ParserRuleContext {
		public KeyContext key() {
			return getRuleContext(KeyContext.class,0);
		}
		public TerminalNode COLON() { return getToken(httpParser.COLON, 0); }
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public PairContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pair; }
	}

	public final PairContext pair() throws RecognitionException {
		PairContext _localctx = new PairContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_pair);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(63);
			key();
			setState(64);
			match(COLON);
			setState(65);
			value();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KeyContext extends ParserRuleContext {
		public TerminalNode NAME() { return getToken(httpParser.NAME, 0); }
		public KeyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_key; }
	}

	public final KeyContext key() throws RecognitionException {
		KeyContext _localctx = new KeyContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_key);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(67);
			match(NAME);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VarContext extends ParserRuleContext {
		public TerminalNode NAME() { return getToken(httpParser.NAME, 0); }
		public VarContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_var; }
	}

	public final VarContext var() throws RecognitionException {
		VarContext _localctx = new VarContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_var);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(69);
			match(NAME);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ValueContext extends ParserRuleContext {
		public TerminalNode INT() { return getToken(httpParser.INT, 0); }
		public TerminalNode STRING() { return getToken(httpParser.STRING, 0); }
		public JsonContext json() {
			return getRuleContext(JsonContext.class,0);
		}
		public ValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_value; }
	}

	public final ValueContext value() throws RecognitionException {
		ValueContext _localctx = new ValueContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_value);
		try {
			setState(74);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case INT:
				enterOuterAlt(_localctx, 1);
				{
				setState(71);
				match(INT);
				}
				break;
			case STRING:
				enterOuterAlt(_localctx, 2);
				{
				setState(72);
				match(STRING);
				}
				break;
			case LBRACE:
				enterOuterAlt(_localctx, 3);
				{
				setState(73);
				json();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\23O\4\2\t\2\4\3\t"+
		"\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t\13\3"+
		"\2\3\2\5\2\31\n\2\3\3\3\3\5\3\35\n\3\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3"+
		"\5\3\5\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\5\6\61\n\6\3\7\3\7\3\7\3\7\3\7"+
		"\3\7\7\79\n\7\f\7\16\7<\13\7\3\7\3\7\5\7@\n\7\3\b\3\b\3\b\3\b\3\t\3\t"+
		"\3\n\3\n\3\13\3\13\3\13\5\13M\n\13\3\13\2\2\f\2\4\6\b\n\f\16\20\22\24"+
		"\2\2\2K\2\30\3\2\2\2\4\34\3\2\2\2\6\36\3\2\2\2\b#\3\2\2\2\n\60\3\2\2\2"+
		"\f?\3\2\2\2\16A\3\2\2\2\20E\3\2\2\2\22G\3\2\2\2\24L\3\2\2\2\26\31\5\n"+
		"\6\2\27\31\5\24\13\2\30\26\3\2\2\2\30\27\3\2\2\2\31\3\3\2\2\2\32\35\5"+
		"\6\4\2\33\35\5\b\5\2\34\32\3\2\2\2\34\33\3\2\2\2\35\5\3\2\2\2\36\37\7"+
		"\n\2\2\37 \7\20\2\2 !\7\t\2\2!\"\5\2\2\2\"\7\3\2\2\2#$\7\13\2\2$%\7\3"+
		"\2\2%&\5\2\2\2&\'\7\4\2\2\'\t\3\2\2\2()\7\f\2\2)*\7\17\2\2*\61\7\22\2"+
		"\2+,\7\r\2\2,-\5\f\7\2-.\7\16\2\2./\7\22\2\2/\61\3\2\2\2\60(\3\2\2\2\60"+
		"+\3\2\2\2\61\13\3\2\2\2\62\63\7\5\2\2\63@\7\6\2\2\64\65\7\5\2\2\65:\5"+
		"\16\b\2\66\67\7\b\2\2\679\5\16\b\28\66\3\2\2\29<\3\2\2\2:8\3\2\2\2:;\3"+
		"\2\2\2;=\3\2\2\2<:\3\2\2\2=>\7\6\2\2>@\3\2\2\2?\62\3\2\2\2?\64\3\2\2\2"+
		"@\r\3\2\2\2AB\5\20\t\2BC\7\7\2\2CD\5\24\13\2D\17\3\2\2\2EF\7\20\2\2F\21"+
		"\3\2\2\2GH\7\20\2\2H\23\3\2\2\2IM\7\21\2\2JM\7\22\2\2KM\5\f\7\2LI\3\2"+
		"\2\2LJ\3\2\2\2LK\3\2\2\2M\25\3\2\2\2\b\30\34\60:?L";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}