(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{524:function(a,s,t){"use strict";t.r(s);var e=t(20),v=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[t("img",{attrs:{src:"https://gitee.com/zxqzhuzhu/imgs/raw/master/image-20210329222126460.png",alt:"image-20210329222126460"}})]),a._v(" "),t("img",{attrs:{src:"https://gitee.com/zxqzhuzhu/imgs/raw/master/image-20210329222725748.png",alt:"image-20210329222725748"}}),a._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/zxqzhuzhu/imgs/raw/master/image-20210404164313559.png",alt:"image-20210404164313559"}})]),a._v(" "),t("h1",{attrs:{id:"双亲委派机制-安全问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#双亲委派机制-安全问题"}},[a._v("#")]),a._v(" 双亲委派机制 安全问题")]),a._v(" "),t("p",[a._v("如何命名了Java的核心类，比如java.lang.String")]),a._v(" "),t("p",[a._v("如果没有双亲委派机制，那就直接使用自定义的加载器加载类，会造成安全问题")]),a._v(" "),t("p",[a._v("在双亲委派机制的作用下，类加载器会不断地向父级加载器传递请求，然后再有顶级加载器bootrap往下分配或自己加载")]),a._v(" "),t("h1",{attrs:{id:"自定义类加载器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自定义类加载器"}},[a._v("#")]),a._v(" 自定义类加载器")]),a._v(" "),t("p",[a._v("继承ClassLoader 重写findCLass方法")]),a._v(" "),t("p",[a._v("需要使用defindClass 把字节码转化为Class")]),a._v(" "),t("h1",{attrs:{id:"类加载过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类加载过程"}},[a._v("#")]),a._v(" 类加载过程")]),a._v(" "),t("p",[a._v("加载（loading）：ClassLoader将class文件读取为字节码文件，然后再根据defindClass方法在java堆中实例化class对象")]),a._v(" "),t("p",[a._v("连接（linking）：")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("验证：验证.class文件的字节流中包含的信息使符合当前虚拟机的要求的，并不会危害虚拟机自身的安全")]),a._v(" "),t("p",[a._v("验证步骤：文件格式验证，元数据验证，字节码验证，符号引用验证")])]),a._v(" "),t("li",[t("p",[a._v("准备：静态变量赋默认值（例如，static int val = 123;不是将val赋值为123，而是0）")])]),a._v(" "),t("li",[t("p",[a._v("解析: 是Java虚拟机将常量池内的符号引用替换为直接引用的过程")])])]),a._v(" "),t("p",[a._v("初始化（initializing）: 调用初始化代码"),t("cinit",[a._v(" ,给静态变量赋初始值")])],1),a._v(" "),t("h1",{attrs:{id:"创建对象过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建对象过程"}},[a._v("#")]),a._v(" 创建对象过程")]),a._v(" "),t("p",[t("img",{attrs:{src:"D:%5Cproject%5Cvscode%5Cvuepress-theme-reco-demo%5Cmy-blog%5Cblogs%5C%E7%AC%94%E8%AE%B0%5Cjava%5Cjvm%5C%E7%B1%BB%E5%8A%A0%E8%BD%BD%E5%99%A8.assets%5Cimage-20210405000536565.png",alt:"image-20210405000536565"}})]),a._v(" "),t("p",[a._v("比如 new了一个对象，它含有不是静态的成员变量，加载过程是;")]),a._v(" "),t("ol",[t("li",[a._v("class loading")]),a._v(" "),t("li",[a._v("class linking")]),a._v(" "),t("li",[a._v("class initializing")]),a._v(" "),t("li",[a._v("先去内存申请一块内存空间")]),a._v(" "),t("li",[a._v("成员变量赋默认值")]),a._v(" "),t("li",[a._v("调用构造方法")]),a._v(" "),t("li",[a._v("成员变量才会被赋初始值")])]),a._v(" "),t("h1",{attrs:{id:"数据类型的默认值介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据类型的默认值介绍"}},[a._v("#")]),a._v(" 数据类型的默认值介绍")]),a._v(" "),t("p",[t("img",{attrs:{src:"D:%5Cproject%5Cvscode%5Cvuepress-theme-reco-demo%5Cmy-blog%5Cblogs%5C%E7%AC%94%E8%AE%B0%5Cjava%5Cjvm%5C%E7%B1%BB%E5%8A%A0%E8%BD%BD%E5%99%A8.assets%5Cimage-20210404201423487.png",alt:"image-20210404201423487"}})]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("字节码:\n其实更类似汇编语言的造型，当然字节码并不是汇编也不是二进制代码，这个格式是只有jvm才能解释执行的。\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])])])}),[],!1,null,null,null);s.default=v.exports}}]);