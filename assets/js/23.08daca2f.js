(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{487:function(t,a,s){"use strict";s.r(a);var e=s(20),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"字符集和比较规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字符集和比较规则"}},[t._v("#")]),t._v(" 字符集和比较规则")]),t._v(" "),s("h2",{attrs:{id:"字符集简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字符集简介"}},[t._v("#")]),t._v(" 字符集简介")]),t._v(" "),s("p",[t._v("作用：为了让数据在人和计算机都能被”看的懂“。")]),t._v(" "),s("blockquote",[s("p",[t._v("我们知道在计算机中只能存储二进制数据，那该怎么存储字符串呢？当然是建立字符与二进制数据的映射关系了，建立这个关系最起码要搞清楚两件事儿：")]),t._v(" "),s("ol",[s("li",[t._v("你要把哪些字符映射成二进制数据？\n也就是界定清楚字符范围。")]),t._v(" "),s("li",[t._v("怎么映射？\n将一个字符映射成一个二进制数据的过程也叫做 编码 ，将一个二进制数据映射到一个字符的过程叫做 解码 。\n人们抽象出一个 字符集 的概念来描述某个字符范围的编码规则。比方说我们来自定义一个名称为 xiaohaizi 的字符集，它包含的字符范围和编码规则如下：\n包含字符 'a' 、 'b' 、 'A' 、 'B' 。\n编码规则如下：\n采用1个字节编码一个字符的形式，字符和字节的映射关系如下：\n'a' -> 00000001 (十六进制：0x01)\n'b' -> 00000010 (十六进制：0x02)\n'A' -> 00000011 (十六进制：0x03)\n'B' -> 00000100 (十六进制：0x04)\n有了 xiaohaizi 字符集，我们就可以用二进制形式表示一些字符串了，下边是一些字符串用 xiaohaizi 字符集编码后的二进制表示：\n'bA' -> 0000001000000011  (十六进制：0x0203)\n'baB' -> 000000100000000100000100  (十六进制：0x020104)\n'cd' -> 无法表示，字符集xiaohaizi不包含字符'c'和'd'")])]),t._v(" "),s("p",[t._v("—— 引用《MySQL是怎么运行的》")])]),t._v(" "),s("h2",{attrs:{id:"比较规则简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#比较规则简介"}},[t._v("#")]),t._v(" 比较规则简介")]),t._v(" "),s("ol",[s("li",[t._v("将两个大小写不同的字符全都转为大写或者小写。")]),t._v(" "),s("li",[t._v("再比较这两个字符对应的二进制数据。")])]),t._v(" "),s("p",[t._v("注意：同一种字符集可以有多种比较规则")]),t._v(" "),s("h2",{attrs:{id:"mysql中的utf8和utf8mb4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql中的utf8和utf8mb4"}},[t._v("#")]),t._v(" MySQL中的utf8和utf8mb4")]),t._v(" "),s("p",[t._v("utf8mb3 ：阉割过的 utf8 字符集，只使用1～3个字节表示字符。")]),t._v(" "),s("p",[t._v("utf8mb4 ：正宗的 utf8 字符集，使用1～4个字节表示字符。")]),t._v(" "),s("p",[t._v("mysql"),s("strong",[t._v("字符集的查看")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("SHOW (CHARACTER SET|CHARSET) [LIKE 匹配的模式];\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("strong",[t._v("mysql比较规则的查看")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("SHOW COLLATION [LIKE 匹配的模式];\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("注意：每种字符集对应若干种比较规则，每种字符集都有一种默认的比较规则")])])}),[],!1,null,null,null);a.default=n.exports}}]);