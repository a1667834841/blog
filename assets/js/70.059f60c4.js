(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{500:function(n,a,s){"use strict";s.r(a);var e=s(16),r=Object(e.a)({},(function(){var n=this,a=n.$createElement,s=n._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h1",{attrs:{id:"yarn的简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yarn的简介"}},[n._v("#")]),n._v(" yarn的简介：")]),n._v(" "),s("p",[n._v("Yarn是facebook发布的一款取代npm的包管理工具。")]),n._v(" "),s("h1",{attrs:{id:"yarn的特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yarn的特点"}},[n._v("#")]),n._v(" yarn的特点：")]),n._v(" "),s("p",[n._v("速度超快。\nYarn 缓存了每个下载过的包，所以再次使用时无需重复下载。 同时利用并行下载以最大化资源利用率，因此安装速度更快。\n超级安全。\n在执行代码之前，Yarn 会通过算法校验每个安装包的完整性。\n超级可靠。\n使用详细、简洁的锁文件格式和明确的安装算法，Yarn 能够保证在不同系统上无差异的工作。")]),n._v(" "),s("h1",{attrs:{id:"yarn的安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yarn的安装"}},[n._v("#")]),n._v(" yarn的安装:")]),n._v(" "),s("p",[n._v("下载node.js，使用npm安装")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("npm install -g yarn\n查看版本：yarn --version\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br")])]),s("p",[n._v("安装node.js,下载yarn的安装程序:\n提供一个.msi文件，在运行时将引导您在Windows上安装Yarn\nYarn 淘宝源安装，分别复制粘贴以下代码行到黑窗口运行即可")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("yarn config set registry https://registry.npm.taobao.org -g\n\nyarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br")])]),s("h1",{attrs:{id:"yarn的常用命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yarn的常用命令"}},[n._v("#")]),n._v(" yarn的常用命令：")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("安装yarn\n\nnpm install -g yarn\n安装成功后，查看版本号：\n\nyarn --version\n创建文件夹 yarn\n\nmd yarn\n进入yarn文件夹\n\ncd yarn\n初始化项目\n\nyarn init // 同npm init，执行输入信息后，会生成package.json文件\nyarn的配置项：\n\nyarn config list // 显示所有配置项\nyarn config get <key> //显示某配置项\nyarn config delete <key> //删除某配置项\nyarn config set <key> <value> [-g|--global] //设置配置项\n安装包：\n\nyarn install //安装package.json里所有包，并将包及它的所有依赖项保存进yarn.lock\nyarn install --flat //安装一个包的单一版本\nyarn install --force //强制重新下载所有包\nyarn install --production //只安装dependencies里的包\nyarn install --no-lockfile //不读取或生成yarn.lock\nyarn install --pure-lockfile //不生成yarn.lock\n添加包（会更新package.json和yarn.lock）：\n\nyarn add [package] // 在当前的项目中添加一个依赖包，会自动更新到package.json和yarn.lock文件中\nyarn add [package]@[version] // 安装指定版本，这里指的是主要版本，如果需要精确到小版本，使用-E参数\nyarn add [package]@[tag] // 安装某个tag（比如beta,next或者latest）\n//不指定依赖类型默认安装到dependencies里，你也可以指定依赖类型：\n\nyarn add --dev/-D // 加到 devDependencies\nyarn add --peer/-P // 加到 peerDependencies\nyarn add --optional/-O // 加到 optionalDependencies\n//默认安装包的主要版本里的最新版本，下面两个命令可以指定版本：\n\nyarn add --exact/-E // 安装包的精确版本。例如yarn add foo@1.2.3会接受1.9.1版，但是yarn add foo@1.2.3 --exact只会接受1.2.3版\nyarn add --tilde/-T // 安装包的次要版本里的最新版。例如yarn add foo@1.2.3 --tilde会接受1.2.9，但不接受1.3.0\n发布包\n\nyarn publish\n移除一个包\n\nyarn remove <packageName>：移除一个包，会自动更新package.json和yarn.lock\n更新一个依赖\n\nyarn upgrade 用于更新包到基于规范范围的最新版本\n运行脚本\n\nyarn run 用来执行在 package.json 中 scripts 属性下定义的脚本\n显示某个包的信息\n\nyarn info <packageName> 可以用来查看某个模块的最新版本信息\n缓存\n\nyarn cache\nyarn cache list # 列出已缓存的每个包 yarn cache dir # 返回 全局缓存位置 yarn cache clean # 清除缓存\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br"),s("span",{staticClass:"line-number"},[n._v("29")]),s("br"),s("span",{staticClass:"line-number"},[n._v("30")]),s("br"),s("span",{staticClass:"line-number"},[n._v("31")]),s("br"),s("span",{staticClass:"line-number"},[n._v("32")]),s("br"),s("span",{staticClass:"line-number"},[n._v("33")]),s("br"),s("span",{staticClass:"line-number"},[n._v("34")]),s("br"),s("span",{staticClass:"line-number"},[n._v("35")]),s("br"),s("span",{staticClass:"line-number"},[n._v("36")]),s("br"),s("span",{staticClass:"line-number"},[n._v("37")]),s("br"),s("span",{staticClass:"line-number"},[n._v("38")]),s("br"),s("span",{staticClass:"line-number"},[n._v("39")]),s("br"),s("span",{staticClass:"line-number"},[n._v("40")]),s("br"),s("span",{staticClass:"line-number"},[n._v("41")]),s("br"),s("span",{staticClass:"line-number"},[n._v("42")]),s("br"),s("span",{staticClass:"line-number"},[n._v("43")]),s("br"),s("span",{staticClass:"line-number"},[n._v("44")]),s("br"),s("span",{staticClass:"line-number"},[n._v("45")]),s("br"),s("span",{staticClass:"line-number"},[n._v("46")]),s("br"),s("span",{staticClass:"line-number"},[n._v("47")]),s("br"),s("span",{staticClass:"line-number"},[n._v("48")]),s("br"),s("span",{staticClass:"line-number"},[n._v("49")]),s("br"),s("span",{staticClass:"line-number"},[n._v("50")]),s("br"),s("span",{staticClass:"line-number"},[n._v("51")]),s("br"),s("span",{staticClass:"line-number"},[n._v("52")]),s("br"),s("span",{staticClass:"line-number"},[n._v("53")]),s("br"),s("span",{staticClass:"line-number"},[n._v("54")]),s("br"),s("span",{staticClass:"line-number"},[n._v("55")]),s("br"),s("span",{staticClass:"line-number"},[n._v("56")]),s("br"),s("span",{staticClass:"line-number"},[n._v("57")]),s("br"),s("span",{staticClass:"line-number"},[n._v("58")]),s("br"),s("span",{staticClass:"line-number"},[n._v("59")]),s("br"),s("span",{staticClass:"line-number"},[n._v("60")]),s("br"),s("span",{staticClass:"line-number"},[n._v("61")]),s("br"),s("span",{staticClass:"line-number"},[n._v("62")]),s("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);