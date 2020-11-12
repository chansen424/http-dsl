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
		WS=17, LINE_COMMENT=18;
	public static final int
		RULE_expression = 0, RULE_assign = 1, RULE_print = 2, RULE_request = 3, 
		RULE_json = 4, RULE_pair = 5, RULE_key = 6, RULE_var = 7, RULE_value = 8;
	private static String[] makeRuleNames() {
		return new String[] {
			"expression", "assign", "print", "request", "json", "pair", "key", "var", 
			"value"
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
			"WS", "LINE_COMMENT"
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
		public AssignContext assign() {
			return getRuleContext(AssignContext.class,0);
		}
		public PrintContext print() {
			return getRuleContext(PrintContext.class,0);
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
				setState(18);
				request();
				}
				break;
			case LBRACE:
			case INT:
			case STRING:
				enterOuterAlt(_localctx, 2);
				{
				setState(19);
				value();
				}
				break;
			case LET:
				enterOuterAlt(_localctx, 3);
				{
				setState(20);
				assign();
				}
				break;
			case PRINT:
				enterOuterAlt(_localctx, 4);
				{
				setState(21);
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

	public static class AssignContext extends ParserRuleContext {
		public TerminalNode LET() { return getToken(httpParser.LET, 0); }
		public TerminalNode NAME() { return getToken(httpParser.NAME, 0); }
		public TerminalNode EQUALS() { return getToken(httpParser.EQUALS, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public AssignContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assign; }
	}

	public final AssignContext assign() throws RecognitionException {
		AssignContext _localctx = new AssignContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_assign);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(24);
			match(LET);
			setState(25);
			match(NAME);
			setState(26);
			match(EQUALS);
			setState(27);
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
		enterRule(_localctx, 4, RULE_print);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(29);
			match(PRINT);
			setState(30);
			match(LPAREN);
			setState(31);
			expression();
			setState(32);
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
		enterRule(_localctx, 6, RULE_request);
		try {
			setState(42);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case GET:
				enterOuterAlt(_localctx, 1);
				{
				setState(34);
				match(GET);
				setState(35);
				match(FROM);
				setState(36);
				match(STRING);
				}
				break;
			case POST:
				enterOuterAlt(_localctx, 2);
				{
				setState(37);
				match(POST);
				setState(38);
				json();
				setState(39);
				match(TO);
				setState(40);
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
		enterRule(_localctx, 8, RULE_json);
		int _la;
		try {
			setState(57);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(44);
				match(LBRACE);
				setState(45);
				match(RBRACE);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(46);
				match(LBRACE);
				setState(47);
				pair();
				setState(52);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(48);
					match(COMMA);
					setState(49);
					pair();
					}
					}
					setState(54);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(55);
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
		enterRule(_localctx, 10, RULE_pair);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(59);
			key();
			setState(60);
			match(COLON);
			setState(61);
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
		public TerminalNode STRING() { return getToken(httpParser.STRING, 0); }
		public KeyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_key; }
	}

	public final KeyContext key() throws RecognitionException {
		KeyContext _localctx = new KeyContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_key);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(63);
			match(STRING);
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
		enterRule(_localctx, 14, RULE_var);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(65);
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
		enterRule(_localctx, 16, RULE_value);
		try {
			setState(70);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case INT:
				enterOuterAlt(_localctx, 1);
				{
				setState(67);
				match(INT);
				}
				break;
			case STRING:
				enterOuterAlt(_localctx, 2);
				{
				setState(68);
				match(STRING);
				}
				break;
			case LBRACE:
				enterOuterAlt(_localctx, 3);
				{
				setState(69);
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\24K\4\2\t\2\4\3\t"+
		"\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\3\2\3\2\3\2"+
		"\3\2\5\2\31\n\2\3\3\3\3\3\3\3\3\3\3\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3"+
		"\5\3\5\3\5\3\5\3\5\5\5-\n\5\3\6\3\6\3\6\3\6\3\6\3\6\7\6\65\n\6\f\6\16"+
		"\68\13\6\3\6\3\6\5\6<\n\6\3\7\3\7\3\7\3\7\3\b\3\b\3\t\3\t\3\n\3\n\3\n"+
		"\5\nI\n\n\3\n\2\2\13\2\4\6\b\n\f\16\20\22\2\2\2I\2\30\3\2\2\2\4\32\3\2"+
		"\2\2\6\37\3\2\2\2\b,\3\2\2\2\n;\3\2\2\2\f=\3\2\2\2\16A\3\2\2\2\20C\3\2"+
		"\2\2\22H\3\2\2\2\24\31\5\b\5\2\25\31\5\22\n\2\26\31\5\4\3\2\27\31\5\6"+
		"\4\2\30\24\3\2\2\2\30\25\3\2\2\2\30\26\3\2\2\2\30\27\3\2\2\2\31\3\3\2"+
		"\2\2\32\33\7\n\2\2\33\34\7\20\2\2\34\35\7\t\2\2\35\36\5\2\2\2\36\5\3\2"+
		"\2\2\37 \7\13\2\2 !\7\3\2\2!\"\5\2\2\2\"#\7\4\2\2#\7\3\2\2\2$%\7\f\2\2"+
		"%&\7\17\2\2&-\7\22\2\2\'(\7\r\2\2()\5\n\6\2)*\7\16\2\2*+\7\22\2\2+-\3"+
		"\2\2\2,$\3\2\2\2,\'\3\2\2\2-\t\3\2\2\2./\7\5\2\2/<\7\6\2\2\60\61\7\5\2"+
		"\2\61\66\5\f\7\2\62\63\7\b\2\2\63\65\5\f\7\2\64\62\3\2\2\2\658\3\2\2\2"+
		"\66\64\3\2\2\2\66\67\3\2\2\2\679\3\2\2\28\66\3\2\2\29:\7\6\2\2:<\3\2\2"+
		"\2;.\3\2\2\2;\60\3\2\2\2<\13\3\2\2\2=>\5\16\b\2>?\7\7\2\2?@\5\22\n\2@"+
		"\r\3\2\2\2AB\7\22\2\2B\17\3\2\2\2CD\7\20\2\2D\21\3\2\2\2EI\7\21\2\2FI"+
		"\7\22\2\2GI\5\n\6\2HE\3\2\2\2HF\3\2\2\2HG\3\2\2\2I\23\3\2\2\2\7\30,\66"+
		";H";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}