var ometajs = require('ometajs'),
    OMeta = ometajs.OMeta;
{var CSSBSParser=exports.CSSBSParser=objectThatDelegatesTo(OMeta,{
"ident":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("m_ident");return ["ident",x]}).call(this)},
"atkeyword":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){this._applyWithArgs("exactly","@");x=this._apply("m_ident");return ["atkeyword",x]}).call(this)},
"string":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("m_string");return ["string",x]}).call(this)},
"hash":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){this._applyWithArgs("exactly","#");x=this._apply("m_name");return ["hash",x]}).call(this)},
"number":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("m_number");return ["number",x]}).call(this)},
"percentage":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("m_number");this._applyWithArgs("exactly","%");return ["percentage",x]}).call(this)},
"dimension":function(){var $elf=this,_fromIdx=this.input.idx,x,y;return (function(){x=this._apply("m_number");y=this._apply("m_ident");return ["dimension",x,y]}).call(this)},
"cdo":function(){var $elf=this,_fromIdx=this.input.idx;return (function(){this._applyWithArgs("exactly","<");this._applyWithArgs("exactly","!");this._applyWithArgs("exactly","-");this._applyWithArgs("exactly","-");"<!--";return ["cdo"]}).call(this)},
"cdc":function(){var $elf=this,_fromIdx=this.input.idx;return (function(){this._applyWithArgs("exactly","-");this._applyWithArgs("exactly","-");this._applyWithArgs("exactly",">");"-->";return ["cdc"]}).call(this)},
"s":function(){var $elf=this,_fromIdx=this.input.idx,x,xx;return (function(){xx=this._many1((function(){return (function(){x=this._apply("anything");this._applyWithArgs("m_w",x);return x}).call(this)}));return ["s",xx.join("")]}).call(this)},
"attrselector":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=(function(){switch(this._apply('anything')){case "=":return "=";case "~":return (function(){this._applyWithArgs("exactly","=");return "~="}).call(this);case "^":return (function(){this._applyWithArgs("exactly","=");return "^="}).call(this);case "$":return (function(){this._applyWithArgs("exactly","=");return "$="}).call(this);case "*":return (function(){this._applyWithArgs("exactly","=");return "*="}).call(this);default: throw fail}}).call(this);return ["attrselector",x]}).call(this)},
"delim":function(){var $elf=this,_fromIdx=this.input.idx;return (function(){this._applyWithArgs("exactly",",");return ["delim",","]}).call(this)},
"comment":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){this._applyWithArgs("exactly","/");this._applyWithArgs("exactly","*");"/*";x=this._many((function(){return this._apply("anything")}));this._applyWithArgs("exactly","*");this._applyWithArgs("exactly","/");"*/";return ["comment",x.join("")]}).call(this)},
"m_ident":function(){var $elf=this,_fromIdx=this.input.idx,x,y,z,zz;return (function(){x=this._many((function(){return (function(){switch(this._apply('anything')){case "-":return "-";case "*":return "*";default: throw fail}}).call(this)}));y=this._apply("anything");this._applyWithArgs("m_nmstart",y);zz=this._many((function(){return (function(){z=this._apply("anything");this._applyWithArgs("m_nmchar",z);return z}).call(this)}));return ((x.join("") + y) + zz.join(""))}).call(this)},
"m_name":function(){var $elf=this,_fromIdx=this.input.idx,x,xx;return (function(){xx=this._many1((function(){return (function(){x=this._apply("anything");this._applyWithArgs("m_nmchar",x);return x}).call(this)}));return xx.join("")}).call(this)},
"m_number":function(){var $elf=this,_fromIdx=this.input.idx,x,y,x,x;return this._or((function(){return (function(){x=this._many1((function(){return this._apply("digit")}));this._applyWithArgs("exactly",".");y=this._many1((function(){return this._apply("digit")}));return ((x.join("") + ".") + y.join(""))}).call(this)}),(function(){return (function(){switch(this._apply('anything')){case ".":return (function(){x=this._many1((function(){return this._apply("digit")}));return ("." + x.join(""))}).call(this);default: throw fail}}).call(this)}),(function(){return (function(){x=this._many1((function(){return this._apply("digit")}));return x.join("")}).call(this)}))},
"m_string":function(){var $elf=this,_fromIdx=this.input.idx,s,s;return (function(){switch(this._apply('anything')){case "\"":return (function(){s=this._many((function(){return this._or((function(){return this._apply("m_string_nl1")}),(function(){return (function(){this._not((function(){return this._applyWithArgs("exactly","\"")}));return this._apply("char")}).call(this)}))}));this._applyWithArgs("exactly","\"");return (("\"" + s.join("")) + "\"")}).call(this);case "\'":return (function(){s=this._many((function(){return this._or((function(){return this._apply("m_string_nl2")}),(function(){return (function(){this._not((function(){return this._applyWithArgs("exactly","\'")}));return this._apply("char")}).call(this)}))}));this._applyWithArgs("exactly","\'");return (("\'" + s.join("")) + "\'")}).call(this);default: throw fail}}).call(this)},
"m_string_nl1":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=(function(){switch(this._apply('anything')){case "\n":return "\n";case "\r":return "\r";case "f":return "f";case "\\":return (function(){this._applyWithArgs("exactly","\"");return "\\\""}).call(this);default: throw fail}}).call(this);return x}).call(this)},
"m_string_nl2":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=(function(){switch(this._apply('anything')){case "\n":return "\n";case "\r":return "\r";case "f":return "f";case "\\":return (function(){this._applyWithArgs("exactly","\'");return "\\\'"}).call(this);default: throw fail}}).call(this);return x}).call(this)},
"m_nmstart":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("anything");return this._pred(CSSBSParser._m_nmstart(x))}).call(this)},
"m_unicode":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("anything");return this._pred(CSSBSParser._m_unicode(x))}).call(this)},
"m_escape":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("anything");return this._pred(CSSBSParser._m_escape(x))}).call(this)},
"m_nmchar":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("anything");return this._pred(CSSBSParser._m_nmchar(x))}).call(this)},
"m_nl":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("anything");return this._pred(CSSBSParser._m_nl(x))}).call(this)},
"m_w":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("anything");return this._pred(CSSBSParser._m_w(x))}).call(this)},
"m_comment":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("anything");return this._pred(CSSBSParser._m_comment(x))}).call(this)}});var CSSParser=exports.CSSParser=objectThatDelegatesTo(CSSBSParser,{
"sc":function(){var $elf=this,_fromIdx=this.input.idx;return this._or((function(){return this._apply("s")}),(function(){return this._apply("comment")}))},
"stylesheet":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._many((function(){return this._or((function(){return this._apply("cdo")}),(function(){return this._apply("cdc")}),(function(){return this._apply("sc")}),(function(){return this._apply("statement")}))}));return this.concat(["stylesheet"],x)}).call(this)},
"statement":function(){var $elf=this,_fromIdx=this.input.idx;return this._or((function(){return this._apply("ruleset")}),(function(){return this._apply("atrule")}))},
"atrulepart":function(){var $elf=this,_fromIdx=this.input.idx;return this._or((function(){return this._apply("any")}),(function(){return this._apply("operator")}),(function(){return this._apply("sc")}))},
"atrule":function(){var $elf=this,_fromIdx=this.input.idx,ap,s0,r,s1,ak,ap,b,ak,ap;return this._or((function(){return (function(){switch(this._apply('anything')){case "@":return (function(){this._applyWithArgs("exactly","m");this._applyWithArgs("exactly","e");this._applyWithArgs("exactly","d");this._applyWithArgs("exactly","i");this._applyWithArgs("exactly","a");"@media";ap=this._many((function(){return this._apply("atrulepart")}));this._applyWithArgs("exactly","{");s0=this._many((function(){return this._apply("sc")}));r=this._many((function(){return this._apply("ruleset")}));s1=this._many((function(){return this._apply("sc")}));this._applyWithArgs("exactly","}");return this.concat(["atrulem"],ap,s0,r,s1)}).call(this);default: throw fail}}).call(this)}),(function(){return (function(){ak=this._apply("atkeyword");ap=this._many((function(){return this._apply("atrulepart")}));b=this._apply("block");return this.concat(["atruleb",ak],ap,[b])}).call(this)}),(function(){return (function(){ak=this._apply("atkeyword");ap=this._many((function(){return this._apply("atrulepart")}));this._applyWithArgs("exactly",";");return this.concat(["atrules",ak],ap)}).call(this)}))},
"blockdecl":function(){var $elf=this,_fromIdx=this.input.idx,s0,x,y,s1,s0,x,s1,s0,x,sc1;return this._or((function(){return (function(){s0=this._many((function(){return this._apply("sc")}));x=this._apply("declaration");y=this._apply("decldelim");s1=this._many((function(){return this._apply("sc")}));return this.concat(s0,[x],[y],s1)}).call(this)}),(function(){return (function(){s0=this._many((function(){return this._apply("sc")}));x=this._apply("declaration");s1=this._many((function(){return this._apply("sc")}));return this.concat(s0,[x],s1)}).call(this)}),(function(){return (function(){s0=this._many((function(){return this._apply("sc")}));x=this._apply("decldelim");sc1=this._many((function(){return this._apply("sc")}));return this.concat(s0,[x],s1)}).call(this)}))},
"decldelim":function(){var $elf=this,_fromIdx=this.input.idx;return (function(){this._applyWithArgs("exactly",";");return ["decldelim"]}).call(this)},
"block":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){this._applyWithArgs("exactly","{");x=this._many((function(){return this._apply("blockdecl")}));this._applyWithArgs("exactly","}");return this.concatContent(["block"],x)}).call(this)},
"ruleset":function(){var $elf=this,_fromIdx=this.input.idx,x,y;return (function(){x=this._many((function(){return this._apply("selector")}));y=this._apply("block");return this.concat(["ruleset"],x,[y])}).call(this)},
"combinator":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=(function(){switch(this._apply('anything')){case "+":return "+";case ">":return ">";case "~":return "~";default: throw fail}}).call(this);return ["combinator",x]}).call(this)},
"spaceselector":function(){var $elf=this,_fromIdx=this.input.idx,x,y;return (function(){x=this._apply("s");y=this._apply("any");return [x,y]}).call(this)},
"combiselector":function(){var $elf=this,_fromIdx=this.input.idx,s0,x,s1,y;return (function(){s0=this._many((function(){return this._apply("sc")}));x=this._apply("combinator");s1=this._many((function(){return this._apply("sc")}));y=this._apply("any");return this.concat(s0,[x],s1,[y])}).call(this)},
"attrib":function(){var $elf=this,_fromIdx=this.input.idx,s0,x,s1,a,s2,y,s3;return (function(){this._applyWithArgs("exactly","[");s0=this._many((function(){return this._apply("sc")}));x=this._apply("ident");s1=this._many((function(){return this._apply("sc")}));a=this._apply("attrselector");s2=this._many((function(){return this._apply("sc")}));y=this._or((function(){return this._apply("ident")}),(function(){return this._apply("string")}));s3=this._many((function(){return this._apply("sc")}));this._applyWithArgs("exactly","]");return [this.concat(["attrib"],s0,[x],s1,[a],s2,[y],s3)]}).call(this)},
"class":function(){var $elf=this,_fromIdx=this.input.idx,i;return (function(){this._applyWithArgs("exactly",".");i=this._apply("ident");return ["class",i]}).call(this)},
"simpleselector":function(){var $elf=this,_fromIdx=this.input.idx,x,y;return (function(){x=this._apply("any");y=this._many((function(){return this._or((function(){return this._apply("combiselector")}),(function(){return this._apply("spaceselector")}),(function(){return this._apply("attrib")}))}));return this.concatContent(["simpleselector",x],y)}).call(this)},
"selector":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._many1((function(){return this._or((function(){return this._apply("simpleselector")}),(function(){return this._apply("delim")}),(function(){return this._apply("sc")}))}));return this.concat(["selector"],x)}).call(this)},
"declaration":function(){var $elf=this,_fromIdx=this.input.idx,x,y;return (function(){x=this._apply("property");this._applyWithArgs("exactly",":");y=this._apply("value");return ["declaration",x,y]}).call(this)},
"property":function(){var $elf=this,_fromIdx=this.input.idx,x,s0;return (function(){x=this._apply("ident");s0=this._many((function(){return this._apply("sc")}));return this.concat(["property",x],s0)}).call(this)},
"prio":function(){var $elf=this,_fromIdx=this.input.idx,s0;return (function(){this._applyWithArgs("exactly","!");s0=this._many((function(){return this._apply("sc")}));this._applyWithArgs("exactly","i");this._applyWithArgs("exactly","m");this._applyWithArgs("exactly","p");this._applyWithArgs("exactly","o");this._applyWithArgs("exactly","r");this._applyWithArgs("exactly","t");this._applyWithArgs("exactly","a");this._applyWithArgs("exactly","n");this._applyWithArgs("exactly","t");"important";return ["important"].concat(s0)}).call(this)},
"unary":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=(function(){switch(this._apply('anything')){case "-":return "-";case "+":return "+";default: throw fail}}).call(this);return ["unary",x]}).call(this)},
"operator":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=(function(){switch(this._apply('anything')){case "/":return "/";case ",":return ",";case ":":return ":";default: throw fail}}).call(this);return ["operator",x]}).call(this)},
"uri":function(){var $elf=this,_fromIdx=this.input.idx,s0,x,s1,x,xx;return (function(){switch(this._apply('anything')){case "u":return (function(){switch(this._apply('anything')){case "r":return (function(){switch(this._apply('anything')){case "l":return this._or((function(){return (function(){"url";this._applyWithArgs("exactly","(");s0=this._many((function(){return this._apply("sc")}));x=this._apply("string");s1=this._many((function(){return this._apply("sc")}));this._applyWithArgs("exactly",")");return this.concat(["uri"],s0,[x],s1)}).call(this)}),(function(){return (function(){"url";this._applyWithArgs("exactly","(");xx=this._many((function(){return (function(){x=this._apply("anything");this._pred((x !== ")"));return x}).call(this)}));this._applyWithArgs("exactly",")");return ["uri",["raw",xx.join("")]]}).call(this)}));default: throw fail}}).call(this);default: throw fail}}).call(this);default: throw fail}}).call(this)},
"value":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._many1((function(){return this._or((function(){return this._apply("any")}),(function(){return this._apply("block")}),(function(){return this._apply("atkeyword")}),(function(){return this._apply("operator")}),(function(){return this._apply("sc")}),(function(){return this._apply("prio")}))}));return this.concat(["value"],x)}).call(this)},
"func":function(){var $elf=this,_fromIdx=this.input.idx,x,y;return (function(){x=this._apply("ident");this._applyWithArgs("exactly","(");y=this._many((function(){return this._or((function(){return this._apply("any")}),(function(){return this._apply("sc")}))}));this._applyWithArgs("exactly",")");return this.concat(["function",x],y)}).call(this)},
"any":function(){var $elf=this,_fromIdx=this.input.idx,x,x,y,s0,x,s1,s0,x,s1;return this._or((function(){return (function(){x=this._or((function(){return this._apply("class")}),(function(){return this._apply("string")}),(function(){return this._apply("percentage")}),(function(){return this._apply("dimension")}),(function(){return this._apply("hash")}),(function(){return this._apply("number")}),(function(){return this._apply("uri")}),(function(){return this._apply("func")}),(function(){return this._apply("ident")}));return x}).call(this)}),(function(){return (function(){x=this._many((function(){return this._apply("unary")}));y=this._or((function(){return this._apply("percentage")}),(function(){return this._apply("dimension")}),(function(){return this._apply("number")}));return x.concat(y)}).call(this)}),(function(){return (function(){switch(this._apply('anything')){case "(":return (function(){s0=this._many((function(){return this._apply("sc")}));x=this._many((function(){return this._apply("any")}));s1=this._many((function(){return this._apply("sc")}));this._applyWithArgs("exactly",")");return this.concat(["braces","(",")"],s0,x,s1)}).call(this);case "[":return (function(){s0=this._many((function(){return this._apply("sc")}));x=this._many((function(){return this._apply("any")}));s1=this._many((function(){return this._apply("sc")}));this._applyWithArgs("exactly","]");return this.concat(["braces","[","]"],s0,x,s1)}).call(this);default: throw fail}}).call(this)}))}});(CSSParser["concatContent"]=(function (x,y){y.forEach((function (e){(x=x.concat(e))}));return x}));(CSSParser["concat"]=(function (){var x = [];for(var i = undefined in arguments){(x=x.concat(arguments[i]))};undefined;return x}));var CSSTransformer=exports.CSSTransformer=objectThatDelegatesTo(OMeta,{
"anys":function(){var $elf=this,_fromIdx=this.input.idx;return this._many((function(){return this._apply("anything")}))},
"ident":function(){var $elf=this,_fromIdx=this.input.idx,t,x;return (function(){t=this._apply("anything");x=this._apply("anything");return [t,x]}).call(this)},
"atkeyword":function(){var $elf=this,_fromIdx=this.input.idx,t,x;return (function(){t=this._apply("anything");x=this._apply("anything");return [t,x]}).call(this)},
"string":function(){var $elf=this,_fromIdx=this.input.idx,t,x;return (function(){t=this._apply("anything");x=this._apply("anything");return [t,x]}).call(this)},
"hash":function(){var $elf=this,_fromIdx=this.input.idx,t,x;return (function(){t=this._apply("anything");x=this._apply("anything");return [t,x]}).call(this)},
"number":function(){var $elf=this,_fromIdx=this.input.idx,t,x;return (function(){t=this._apply("anything");x=this._apply("anything");return [t,x]}).call(this)},
"percentage":function(){var $elf=this,_fromIdx=this.input.idx,t,x;return (function(){t=this._apply("anything");x=this._apply("anything");return [t,x]}).call(this)},
"dimension":function(){var $elf=this,_fromIdx=this.input.idx,t,x;return (function(){t=this._apply("anything");x=this._apply("anys");return [t].concat(x)}).call(this)},
"cdo":function(){var $elf=this,_fromIdx=this.input.idx,t;return (function(){t=this._apply("anything");return [t]}).call(this)},
"cdc":function(){var $elf=this,_fromIdx=this.input.idx,t;return (function(){t=this._apply("anything");return [t]}).call(this)},
"decldelim":function(){var $elf=this,_fromIdx=this.input.idx,t;return (function(){t=this._apply("anything");return [t]}).call(this)},
"s":function(){var $elf=this,_fromIdx=this.input.idx,t,x;return (function(){t=this._apply("anything");x=this._apply("anything");return [t,x]}).call(this)},
"attrselector":function(){var $elf=this,_fromIdx=this.input.idx,t,x;return (function(){t=this._apply("anything");x=this._apply("anything");return [t,x]}).call(this)},
"attrib":function(){var $elf=this,_fromIdx=this.input.idx,t,x;return (function(){t=this._apply("anything");x=this._apply("anys");return [t].concat(x)}).call(this)},
"class":function(){var $elf=this,_fromIdx=this.input.idx,t,x;return (function(){t=this._apply("anything");x=this._apply("anything");return [t,x]}).call(this)},
"delim":function(){var $elf=this,_fromIdx=this.input.idx,t,x;return (function(){t=this._apply("anything");x=this._apply("anything");return [t,x]}).call(this)},
"stylesheet":function(){var $elf=this,_fromIdx=this.input.idx,t,x;return (function(){t=this._apply("anything");x=this._apply("anys");return [t].concat(x)}).call(this)},
"atrulem":function(){var $elf=this,_fromIdx=this.input.idx,t,x;return (function(){t=this._apply("anything");x=this._apply("anys");return [t].concat(x)}).call(this)},
"atruleb":function(){var $elf=this,_fromIdx=this.input.idx,t,x;return (function(){t=this._apply("anything");x=this._apply("anys");return [t].concat(x)}).call(this)},
"atrules":function(){var $elf=this,_fromIdx=this.input.idx,t,x;return (function(){t=this._apply("anything");x=this._apply("anys");return [t].concat(x)}).call(this)},
"block":function(){var $elf=this,_fromIdx=this.input.idx,t,x;return (function(){t=this._apply("anything");x=this._apply("anys");return [t].concat(x)}).call(this)},
"ruleset":function(){var $elf=this,_fromIdx=this.input.idx,t,x;return (function(){t=this._apply("anything");x=this._apply("anys");return [t].concat(x)}).call(this)},
"combinator":function(){var $elf=this,_fromIdx=this.input.idx,t,x;return (function(){t=this._apply("anything");x=this._apply("anything");return [t,x]}).call(this)},
"simpleselector":function(){var $elf=this,_fromIdx=this.input.idx,t,x;return (function(){t=this._apply("anything");x=this._apply("anys");return [t].concat(x)}).call(this)},
"selector":function(){var $elf=this,_fromIdx=this.input.idx,t,x;return (function(){t=this._apply("anything");x=this._apply("anys");return [t].concat(x)}).call(this)},
"declaration":function(){var $elf=this,_fromIdx=this.input.idx,t,p,v;return (function(){t=this._apply("anything");p=this._apply("anything");v=this._apply("anything");return [t,p,v]}).call(this)},
"property":function(){var $elf=this,_fromIdx=this.input.idx,t,x;return (function(){t=this._apply("anything");x=this._apply("anys");return [t].concat(x)}).call(this)},
"important":function(){var $elf=this,_fromIdx=this.input.idx,t,x;return (function(){t=this._apply("anything");x=this._apply("anys");return [t].concat(x)}).call(this)},
"unary":function(){var $elf=this,_fromIdx=this.input.idx,t,x;return (function(){t=this._apply("anything");x=this._apply("anything");return [t,x]}).call(this)},
"operator":function(){var $elf=this,_fromIdx=this.input.idx,t,x;return (function(){t=this._apply("anything");x=this._apply("anything");return [t,x]}).call(this)},
"braces":function(){var $elf=this,_fromIdx=this.input.idx,t,x,y,z;return (function(){t=this._apply("anything");x=this._apply("anything");y=this._apply("anything");z=this._apply("anys");return [t,x,y].concat(z)}).call(this)},
"value":function(){var $elf=this,_fromIdx=this.input.idx,t,x;return (function(){t=this._apply("anything");x=this._apply("anys");return [t].concat(x)}).call(this)},
"comment":function(){var $elf=this,_fromIdx=this.input.idx,t,x;return (function(){t=this._apply("anything");x=this._apply("anything");return [t,x]}).call(this)},
"uri":function(){var $elf=this,_fromIdx=this.input.idx,t,x;return (function(){t=this._apply("anything");x=this._apply("anything");return [t,x]}).call(this)},
"raw":function(){var $elf=this,_fromIdx=this.input.idx,t,x;return (function(){t=this._apply("anything");x=this._apply("anything");return [t,x]}).call(this)},
"function":function(){var $elf=this,_fromIdx=this.input.idx,t,x,y;return (function(){t=this._apply("anything");x=this._apply("anything");y=this._many((function(){return this._apply("anys")}));return [t,x].concat(y)}).call(this)}});var CSSTranslator=exports.CSSTranslator=objectThatDelegatesTo(OMeta,{
"trans":function(){var $elf=this,_fromIdx=this.input.idx,t,x;return (function(){this._form((function(){return (function(){t=this._apply("anything");return x=this._applyWithArgs("apply",t)}).call(this)}));return x}).call(this)},
"ident":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("anything");return x}).call(this)},
"atkeyword":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("anything");return ("@" + x)}).call(this)},
"string":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("anything");return x}).call(this)},
"hash":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("anything");return ("#" + x)}).call(this)},
"number":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("anything");return x}).call(this)},
"percentage":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("anything");return (x + "%")}).call(this)},
"dimension":function(){var $elf=this,_fromIdx=this.input.idx,x,y;return (function(){x=this._apply("anything");y=this._apply("anything");return (x + y)}).call(this)},
"cdo":function(){var $elf=this,_fromIdx=this.input.idx;return "<!--"},
"cdc":function(){var $elf=this,_fromIdx=this.input.idx;return "-->"},
"decldelim":function(){var $elf=this,_fromIdx=this.input.idx;return ";"},
"s":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("anything");return x}).call(this)},
"attrselector":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("anything");return x}).call(this)},
"attrib":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._many((function(){return this._apply("trans")}));return (("[" + x.join("")) + "]")}).call(this)},
"class":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("trans");return ("." + x)}).call(this)},
"delim":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("anything");return x}).call(this)},
"stylesheet":function(){var $elf=this,_fromIdx=this.input.idx,x,y;return (function(){x=this._apply("anything");y=this._many((function(){return this._apply("trans")}));return y.join("")}).call(this)},
"atrulem":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._many((function(){return this._apply("trans")}));return ("@media" + x.join(""))}).call(this)},
"atruleb":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._many((function(){return this._apply("trans")}));return x.join("")}).call(this)},
"atrules":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._many((function(){return this._apply("trans")}));return (x.join("") + ";")}).call(this)},
"block":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._many((function(){return this._apply("trans")}));return (("{" + x.join("")) + "}")}).call(this)},
"ruleset":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._many((function(){return this._apply("trans")}));return x.join("")}).call(this)},
"combinator":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("anything");return x}).call(this)},
"simpleselector":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._many((function(){return this._apply("trans")}));return x.join("")}).call(this)},
"selector":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._many((function(){return this._apply("trans")}));return x.join("")}).call(this)},
"declaration":function(){var $elf=this,_fromIdx=this.input.idx,p,v;return (function(){p=this._apply("trans");v=this._apply("trans");return ((p + ":") + v)}).call(this)},
"property":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._many((function(){return this._apply("trans")}));return x.join("")}).call(this)},
"important":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._many((function(){return this._apply("trans")}));return (("!" + x.join("")) + "important")}).call(this)},
"unary":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("anything");return x}).call(this)},
"operator":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("anything");return x}).call(this)},
"braces":function(){var $elf=this,_fromIdx=this.input.idx,x,y,z;return (function(){x=this._apply("anything");y=this._apply("anything");z=this._many((function(){return this._apply("trans")}));return ((x + z.join("")) + y)}).call(this)},
"value":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._many((function(){return this._apply("trans")}));return x.join("")}).call(this)},
"comment":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("anything");return x}).call(this)},
"uri":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("trans");return (("url(" + x) + ")")}).call(this)},
"raw":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("anything");return x}).call(this)},
"function":function(){var $elf=this,_fromIdx=this.input.idx,x,y;return (function(){x=this._apply("trans");y=this._many((function(){return this._apply("trans")}));return (((x + "(") + y.join("")) + ")")}).call(this)}})}
// CSS 2.1 / 4.1.1 Tokenization / macro section

// [_a-z]|{nonascii}|{escape}
CSSBSParser['_m_nmstart'] = function(x) {
    return /[_a-zA-Z]/.test(x) || CSSBSParser['_m_escape'](x);
};

// \\[0-9a-f]{1,6}(\r\n|[ \n\r\t\f])?
CSSBSParser['_m_unicode'] = function(x) {
    return /\\[0-9a-fA-F]{1,6}(\r\n|[ \n\r\t\f])?/.test(x);
};

// {unicode}|\\[^\n\r\f0-9a-f]
CSSBSParser['_m_escape'] = function(x) {
    return CSSBSParser['_m_unicode'](x) || /\\[^\n\r\f0-9a-fA-F]/.test(x);
}

// [_a-z0-9-]|{nonascii}|{escape}
CSSBSParser['_m_nmchar'] = function(x) {
    return /[_a-zA-Z0-9]/.test(x) || CSSBSParser['_m_escape'](x);
};

//  \n|\r\n|\r|\f
CSSBSParser['_m_nl'] = function(x) {
    return /[ \n\r\n\r\f]/.test(x);
};

// [ \t\r\n\f]*
CSSBSParser['_m_w'] = function(x) {
    return /[ \t\r\n\f]/.test(x);
};

// \/\*[^*]*\*+([^/*][^*]*\*+)*\/
CSSBSParser['_m_comment'] = function(x) {
    return new RegExp('\/\*[^*]*\*+([^/*][^*]*\*+)*\/').test(x);
};

