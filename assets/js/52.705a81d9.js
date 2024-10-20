(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{446:function(t,s,a){t.exports=a.p+"assets/img/匹配邮箱.666f9801.png"},650:function(t,s,a){"use strict";a.r(s);var n=a(10),_=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"正则表达式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式"}},[t._v("#")]),t._v(" 正则表达式")]),t._v(" "),s("p",[t._v("有两种方法可以创建一个 "),s("code",[t._v("RegExp")]),t._v(" 对象：一种是字面量，另一种是构造函数。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("字面量")]),t._v(" "),s("p",[t._v("由斜杠 (/) 包围而不是引号包围。")])]),t._v(" "),s("li",[s("p",[t._v("构造函数的字符串参数")]),t._v(" "),s("p",[t._v("由引号而不是斜杠包围")])])]),t._v(" "),s("p",[t._v("以下三种表达式都会创建相同的正则表达式：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("ab+c")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-flags"}},[t._v("i")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 字面量形式")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RegExp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ab+c'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'i'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 首个参数为字符串模式的构造函数")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RegExp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("ab+c")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'i'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 首个参数为常规字面量的构造函数")]),t._v("\n")])])]),s("h2",{attrs:{id:"语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[t._v("#")]),t._v(" ⭐️语法")]),t._v(" "),s("h3",{attrs:{id:"_1-普通字符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-普通字符"}},[t._v("#")]),t._v(" 1.普通字符")]),t._v(" "),s("h3",{attrs:{id:"_2-非打印字符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-非打印字符"}},[t._v("#")]),t._v(" 2.非打印字符")]),t._v(" "),s("p",[t._v("非打印字符也可以是正则表达式的组成部分。下表列出了表示非打印字符的转义序列")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字符")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("\\cx")]),t._v(" "),s("td",[t._v("匹配由x指明的控制字符。例如，\\cM 匹配一个 Control-M 或回车符。")])]),t._v(" "),s("tr",[s("td",[t._v("\\f")]),t._v(" "),s("td",[t._v("匹配一个换页符。等价于 \\x0c 和 \\cL。")])]),t._v(" "),s("tr",[s("td",[t._v("\\n")]),t._v(" "),s("td",[t._v("匹配一个换行符。等价于 \\x0a 和 \\cJ。")])]),t._v(" "),s("tr",[s("td",[t._v("\\r")]),t._v(" "),s("td",[t._v("匹配一个回车符。等价于 \\x0d 和 \\cM。")])]),t._v(" "),s("tr",[s("td",[t._v("\\s")]),t._v(" "),s("td",[t._v("匹配任何空白字符串，包括空格、制表符、换页符等等。等价于 [\\f\\n\\r\\t\\v]。")])]),t._v(" "),s("tr",[s("td",[t._v("\\S")]),t._v(" "),s("td",[t._v("匹配任何非空白字符。等价于 [^ \\f\\n\\r\\t\\v]。")])]),t._v(" "),s("tr",[s("td",[t._v("\\t")]),t._v(" "),s("td",[t._v("匹配一个制表符。等价于 \\x09 和 \\cl。")])]),t._v(" "),s("tr",[s("td",[t._v("\\v")]),t._v(" "),s("td",[t._v("匹配一个垂直制表符。等价于 \\x0b 和 \\cK。")])])])]),t._v(" "),s("h3",{attrs:{id:"_3-特殊字符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-特殊字符"}},[t._v("#")]),t._v(" 3.特殊字符")]),t._v(" "),s("p",[t._v("所谓特殊字符，就是一些有特殊含义的字符，若要匹配这些特殊字符，必须首先使字符 "),s("strong",[t._v('"转义"')]),t._v("，")]),t._v(" "),s("p",[t._v("即，将 "),s("strong",[t._v("反斜杠字符 \\")]),t._v(" 放在它们前面。下表列出了正则表达式中的特殊字符：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("特殊字符")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[t._v("^")])]),t._v(" "),s("td",[s("strong",[t._v("匹配输入字符串的开始位置")]),t._v("，除非在方括号表达式中使用，"),s("br"),s("strong",[t._v("当该符号在方括号表达式中使用时，表示不接受该方括号表达式中的字符集合")]),t._v("。要匹配 ^ 字符，请使用 \\^")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("$")])]),t._v(" "),s("td",[s("strong",[t._v("匹配输入字符串的结尾位置")]),t._v("。"),s("br"),t._v("如果设置了 RegExp 对象的 Multiline 属性，则 $ 也匹配 'n' 或 'r'。要匹配 $ 字符本身，请使用 \\$")])]),t._v(" "),s("tr",[s("td",[t._v("( )")]),t._v(" "),s("td",[t._v("标记一个子表达式的开始和结束位置。子表达式可以获取供以后使用。要匹配这些字符，请使用 \\( 和 \\)")])]),t._v(" "),s("tr",[s("td",[t._v("*")]),t._v(" "),s("td",[t._v("匹配前面的子表达式 0次 或 多次。要匹配 * 字符，请使用 \\*")])]),t._v(" "),s("tr",[s("td",[t._v("+")]),t._v(" "),s("td",[t._v("匹配前面的子表达式 1次 或 多次。要匹配 + 字符，请使用 \\+")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v(".")]),t._v("（点）")]),t._v(" "),s("td",[t._v("匹配除 换行符 \\n 以外的任何单字符。要匹配 . 字符，请使用 \\.")])]),t._v(" "),s("tr",[s("td",[t._v("[")]),t._v(" "),s("td",[t._v("标记一个中括号表达式的开始。要匹配 [ 字符，请使用 \\[")])]),t._v(" "),s("tr",[s("td",[t._v("?")]),t._v(" "),s("td",[t._v("匹配前面的子表达式 0次 或 1次，或指明一个"),s("strong",[t._v("非贪婪限定符")]),t._v("。要匹配 ? 字符，请使用 ?")])]),t._v(" "),s("tr",[s("td",[t._v("\\")]),t._v(" "),s("td",[t._v("将下一个字符标记为或特殊字符、或原义字符、或向后引用、或八进转义字符")])]),t._v(" "),s("tr",[s("td",[t._v("{")]),t._v(" "),s("td",[t._v("标记限定字符表达式的开始。要匹配 { 字符，请使用 \\{")])]),t._v(" "),s("tr",[s("td",[t._v("|")]),t._v(" "),s("td",[t._v("指明两项之间的一个选择。要匹配 | 字符，请使用 \\")])])])]),t._v(" "),s("p",[s("strong",{staticStyle:{color:"#DD5145"}},[t._v("如果 ^ 和 $ 在一起，表示必须精确匹配")])]),t._v(" "),s("h3",{attrs:{id:"_4-限定符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-限定符"}},[t._v("#")]),t._v(" 4.限定符")]),t._v(" "),s("p",[t._v("限定符用来指定正则表达式的一个给定组件必须要出现多少次才能满足匹配。")]),t._v(" "),s("p",[t._v("正则表达式的限定符有 "),s("strong",{staticStyle:{color:"#DD5145","font-size":"20px"}},[t._v("*")]),t._v(" 或 "),s("strong",[t._v("+")]),t._v(" 或 "),s("strong",[t._v("?")]),t._v(" 或 "),s("strong",[t._v("{n}")]),t._v(" 或 "),s("strong",[t._v("{n,}")]),t._v(" 或 "),s("strong",[t._v("{n,m}")]),t._v(" 共6种：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字符")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("*")]),t._v(" "),s("td",[t._v('匹配前面的子表达式0次或多次。例如，zo* 能匹配 "z" 以及 "zoo"。 * 等价于 {0, }')])]),t._v(" "),s("tr",[s("td",[t._v("+")]),t._v(" "),s("td",[t._v('匹配前面的子表达式1次或多次。例如，\'zo+\' 能匹配 "zo"以及 "zoo"，但不能匹配 "z"。+ 等价于 {1,}')])]),t._v(" "),s("tr",[s("td",[t._v("？")]),t._v(" "),s("td",[t._v('匹配前面的子表达式0次或1一次。例如，"do(es)?" 能匹配 "do"、"does" 中的 "does"、"doxy" 中的 "do"。? 等价于 {0, 1}')])]),t._v(" "),s("tr",[s("td",[t._v("{n}")]),t._v(" "),s("td",[t._v("n是非负整数，匹配确定的n次。例如，'o{2}' 不能匹配 \"Bob\" 中的 'o'，但能匹配 \"food\" 中的两个 'o'。")])]),t._v(" "),s("tr",[s("td",[t._v("{n,}")]),t._v(" "),s("td",[t._v("n是非负整数，至少匹配n次。例如，'o{2,}' 不能匹配 \"Bob\" 中的 'o'，但能匹配 \"fooooood\" 中的所有 'o'。'o{1,}' 等价于 'o+'。'o{0,}' 则等价于 'o*'")])]),t._v(" "),s("tr",[s("td",[t._v("{n,m}")]),t._v(" "),s("td",[t._v("m和n均为非负整数，其中n <= m，最少匹配n次且最多匹配m次。例如，\"o{1,3}\" 将匹配 \"fooooood\" 中前三个o。'o{0,1}' 等价于 'o?'。"),s("strong",[t._v("请注意在逗号和两个数之间不能有空格")])])])])]),t._v(" "),s("p",[t._v("字符 "),s("strong",[t._v("*")]),t._v(" 和 "),s("strong",[t._v("+")]),t._v(" 限定符都是"),s("strong",{staticStyle:{color:"#DD5145"}},[t._v("贪婪")]),t._v("的，"),s("br"),t._v("因为它们会尽可能多的匹配文字，只有在它们的后面加上一个 "),s("strong",[t._v("?")]),t._v(" 就可以实现非贪婪或最小匹配。")]),t._v(" "),s("h3",{attrs:{id:"_5-定位符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-定位符"}},[t._v("#")]),t._v(" 5.定位符")]),t._v(" "),s("p",[t._v("定位符使您能够 "),s("strong",[t._v("将正则表达式固定到行首或行尾")]),t._v("。它们还使您能够创建这样的正则表达式，这些正则表达式出现在一个单词内、在一个单词的开头或者一个单词的结尾。")]),t._v(" "),s("p",[t._v("定位符用来描述字符串或单词的边界，"),s("strong",[t._v("^")]),t._v(" 和 "),s("strong",[t._v("$")]),t._v(" 分别指字符串的开始与结束，"),s("strong",[t._v("\\b")]),t._v(" 描述单词的前或后边界，"),s("strong",[t._v("\\B")]),t._v(" 表示非单词边界。")]),t._v(" "),s("p",[t._v("正则表达式的定位符有：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字符")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[t._v("^")])]),t._v(" "),s("td",[t._v("匹配输入字符串"),s("strong",[t._v("开始")]),t._v("的位置，如果设置了 RegExp 对象的 Multiline 属性，^ 还会与 \\n 或 \\r 之后的位置匹配")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("$")])]),t._v(" "),s("td",[t._v("匹配输入字符串"),s("strong",[t._v("结尾")]),t._v("的位置，如果设置了 RegExp 对象的 Multiline 属性，$ 还会与 \\n 或 \\r 之前的位置匹配")])]),t._v(" "),s("tr",[s("td",[t._v("\\b")]),t._v(" "),s("td",[t._v("匹配一个单词边界，即字与空格间的位置")])]),t._v(" "),s("tr",[s("td",[t._v("\\B")]),t._v(" "),s("td",[t._v("非单词边界匹配")])])])]),t._v(" "),s("p",[s("strong",[t._v("注意")]),t._v("：不能将限定符与定位符一起使用。由于在紧靠换行或者单词边界的前面或后面不能有一个以上位置，因此不允许诸如 "),s("strong",[t._v("^*")]),t._v(" 之类的表达式。")]),t._v(" "),s("p",[t._v("若要匹配一行文本开始处的文本，请在正则表达式的开始使用 "),s("strong",[t._v("^")]),t._v(" 字符。不要将 "),s("strong",[t._v("^")]),t._v(" 的这种用法与中括号表达式内的用法混淆。")]),t._v(" "),s("p",[t._v("若要匹配一行文本的结束处的文本，请在正则表达式的结束处使用 "),s("strong",[t._v("$")]),t._v(" 字符。")]),t._v(" "),s("h3",{attrs:{id:"_6-选择"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-选择"}},[t._v("#")]),t._v(" 6.选择")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("用圆括号 "),s("strong",[t._v("( )")]),t._v(" 将所有选择项括起来，相邻的选择项之间用 "),s("strong",[t._v("|")]),t._v(" 分隔。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("( )")]),t._v(" 表示"),s("strong",[t._v("捕获分组")]),t._v("，"),s("strong",[t._v("( )")]),t._v(" 会把每个分组里的匹配的值保存起来， 多个匹配值可以通过数字 n 来查看("),s("strong",[t._v("n")]),t._v(" 是一个数字，表示第 n 个捕获组的内容)。")])]),t._v(" "),s("li",[s("p",[t._v("但用圆括号会有一个副作用，使相关的匹配会被缓存，此时可用 "),s("strong",[t._v("?:")]),t._v(" 放在第一个选项前来消除这种副作用。")])]),t._v(" "),s("li",[s("p",[t._v("其中 "),s("strong",[t._v("?:")]),t._v(" 是非捕获元之一，还有两个非捕获元是 "),s("strong",[t._v("?=")]),t._v(" 和 "),s("strong",[t._v("?!")]),t._v("，这两个还有更多的含义，"),s("strong",[t._v("前者为正向预查")]),t._v("，在任何开始匹配圆括号内的正则表达式模式的位置来匹配搜索字符串，"),s("strong",[t._v("后者为负向预查")]),t._v("，在任何开始不匹配该正则表达式模式的位置来匹配搜索字符串。")])])]),t._v(" "),s("h3",{attrs:{id:"_7-反向引用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-反向引用"}},[t._v("#")]),t._v(" 7.反向引用")]),t._v(" "),s("h2",{attrs:{id:"修饰符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修饰符"}},[t._v("#")]),t._v(" ⭐️修饰符")]),t._v(" "),s("p",[s("strong",[t._v("标记")]),t._v(" 也称为修饰符，正则表达式的标记用于指定额外的匹配策略。")]),t._v(" "),s("p",[t._v("标记不写在正则表达式里，标记位于表达式之外，格式如下：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("/pattern/flags\n")])])]),s("p",[t._v("下表列出了正则表达式常用的修饰符：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("修饰符")]),t._v(" "),s("th",[t._v("含义")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("i")]),t._v(" "),s("td",[t._v("ignore - 不区分大小写")]),t._v(" "),s("td",[t._v("将匹配设置为不区分大小写，搜索时不区分大小写")])]),t._v(" "),s("tr",[s("td",[t._v("g")]),t._v(" "),s("td",[t._v("global - 全局匹配")]),t._v(" "),s("td",[t._v("查找字符串中所有的匹配项")])]),t._v(" "),s("tr",[s("td",[t._v("m")]),t._v(" "),s("td",[t._v("multi line - 多行匹配")]),t._v(" "),s("td",[t._v("使边界字符 ^ 和 $ 匹配每一行的开头和结尾，"),s("strong",[t._v("记住是多行")]),t._v("，而不是整个字符串的开头和结尾")])]),t._v(" "),s("tr",[s("td",[t._v("s")]),t._v(" "),s("td",[t._v("特殊字符圆点 . 中包含换行符 \\n")]),t._v(" "),s("td",[t._v("默认情况下的圆点 . 是匹配除换行符 \\n 之外的任何字符，加上 s 修饰符之后，. 中包含换行符 \\n")])])])]),t._v(" "),s("h2",{attrs:{id:"元字符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#元字符"}},[t._v("#")]),t._v(" ⭐️元字符")]),t._v(" "),s("p",[t._v("下表包含了元字符的完整列表以及它们在正则表达式上下文中的行为：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字符")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("\\d")]),t._v(" "),s("td",[t._v("匹配一个数字字符，等价于 [0-9]")])]),t._v(" "),s("tr",[s("td",[t._v("\\D")]),t._v(" "),s("td",[t._v("匹配一个非数字字符，等价于[^0-9]")])])])]),t._v(" "),s("p",[s("img",{attrs:{src:a(446),alt:""}})]),t._v(" "),s("h2",{attrs:{id:"运算符优先级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运算符优先级"}},[t._v("#")]),t._v(" ⭐️运算符优先级")]),t._v(" "),s("p",[t._v("正则表达式从左到右进行计算，并遵循优先级顺序，这与算术表达式非常类似。")]),t._v(" "),s("p",[t._v("相同优先级的从左到右进行运算，不同优先级的运算先高后低。下表"),s("strong",[t._v("从最高到最低")]),t._v("说明了各种正则表达式运算符的优先级顺序：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("运算符")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("\\")]),t._v(" "),s("td",[t._v("转义符")])]),t._v(" "),s("tr",[s("td",[t._v("()，("),s("code",[t._v("?:")]),t._v(")，("),s("code",[t._v("?=")]),t._v(")，[ ]")]),t._v(" "),s("td",[t._v("圆括号和方括号")])]),t._v(" "),s("tr",[s("td",[t._v("*，+，?，{n}，{n,}，{n,m}")]),t._v(" "),s("td",[t._v("限定符")])]),t._v(" "),s("tr",[s("td",[t._v("^，$，"),s("br"),t._v("\\ 加上任何字符、元字符")]),t._v(" "),s("td",[t._v("定位点和序列（即，位置和顺序）")])]),t._v(" "),s("tr",[s("td",[t._v("|")]),t._v(" "),s("td",[t._v('替换，"或"操作。字符具有高于替换运算符的优先级，使得 "m|food" 匹配 "m" 或 "food"。'),s("br"),t._v('若要匹配 "mood" 或 "food"，请使用括号创建子表达式，从而产生 "(m|f)ood"')])])])]),t._v(" "),s("h2",{attrs:{id:"匹配规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#匹配规则"}},[t._v("#")]),t._v(" ⭐️匹配规则")]),t._v(" "),s("h3",{attrs:{id:"基本模式匹配"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本模式匹配"}},[t._v("#")]),t._v(" 基本模式匹配")]),t._v(" "),s("p",[t._v("一切从最基本的开始。模式，是正则表达式最基本的元素，它们是一组描述字符串特征的字符。模式可以很简单，由普通的字符串组成，也可以非常复杂，往往用特殊的字符表示一个范围内的字符、重复出现，或表示上下文。")]),t._v(" "),s("h3",{attrs:{id:"字符簇"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字符簇"}},[t._v("#")]),t._v(" 字符簇")]),t._v(" "),s("p",[t._v("在 INTERNET 的程序中，正则表达式通常用来验证用户的输入。当用户提交一个 FORM 以后，要判断输入的电话号码、地址、EMAIL 地址、信用卡号码等是否有效，用普通的基于字面的字符是不够的。")]),t._v(" "),s("p",[t._v("所以要用一种更自由的描述我们要的模式的办法，它就是"),s("strong",[t._v("字符簇")]),t._v("。要建立一个表示所有元音字符的字符簇，就把所有的元音字符放在一个方括号里：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("[AaEeIiOoUu]\n")])])]),s("p",[t._v("用连字号可以表示一个字符的"),s("strong",[t._v("范围")]),t._v("，如：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("z"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 匹配所有的小写字母 ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Z")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 匹配所有的大写字母 ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("zA"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Z")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 匹配所有的字母 ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 匹配所有的数字 ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v("\\"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\\"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 匹配所有的数字，句号和减号 ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" \\f\\r\\t\\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 匹配所有的白字符")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("z"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("$ "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 匹配一个由一个小写字母和一位数字组成的字符串")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("$ "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 匹配 第一个字符不是数字 的字符串")]),t._v("\n")])])]),s("p",[t._v("当在一组方括号里使用 "),s("strong",[t._v("^")]),t._v(' 时，它表示"'),s("strong",[t._v("非")]),t._v('"或"'),s("strong",[t._v("排除")]),t._v('"的意思，常常用来剔除某个字符。')]),t._v(" "),s("p",[t._v("特殊字符 "),s("strong",[t._v(".")]),t._v('(点，句号)在正则表达式中用来表示除了"新行"之外的所有字符。所以模式 '),s("strong",[t._v("^.5$")]),t._v(' 与任何两个字符的、以数字5结尾和以其他非"新行"字符开头的字符串匹配。模式 '),s("strong",[t._v(".")]),t._v(" 可以匹配任何字符串，"),s("strong",[t._v("换行符（\\n、\\r）除外")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"匹配方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#匹配方法"}},[t._v("#")]),t._v(" ⭐️匹配方法")]),t._v(" "),s("h3",{attrs:{id:"test方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#test方法"}},[t._v("#")]),t._v(" test方法")]),t._v(" "),s("p",[s("code",[t._v("RegExp.prototype.test()")]),t._v(" 方法执行一个检索，用来查看正则表达式与指定的字符串是否匹配。返回 "),s("code",[t._v("true")]),t._v(" 或 "),s("code",[t._v("false")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("regexObj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("ul",[s("li",[t._v("str：用来与正则表达式匹配的字符串")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" str "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'table football'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" regex "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RegExp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo*'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" globalRegex "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RegExp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo*'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'g'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("regex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Expected output: true")]),t._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("globalRegex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastIndex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Expected output: 0")]),t._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("globalRegex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Expected output: true")]),t._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("globalRegex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastIndex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Expected output: 9")]),t._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("globalRegex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Expected output: false")]),t._v("\n")])])]),s("h3",{attrs:{id:"exec方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#exec方法"}},[t._v("#")]),t._v(" exec方法")]),t._v(" "),s("p",[s("code",[t._v("RegExp.prototype.exec()")]),t._v(" 方法在一个指定字符串中执行一个搜索匹配。返回一个结果数组或 "),s("code",[t._v("null")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("ul",[s("li",[t._v("str：用来与正则表达式匹配的字符串")])])])}),[],!1,null,null,null);s.default=_.exports}}]);