(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{477:function(s,t,n){"use strict";n.r(t);var a=n(20),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"mysql-5-7-中文全文检索"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mysql-5-7-中文全文检索"}},[s._v("#")]),s._v(" MySQL 5.7 中文全文检索")]),s._v(" "),n("hr"),s._v(" "),n("p",[s._v("在 MySQL 5.7.6 之前，全文索引只支持英文全文索引，不支持中文全文索引，需要利用分词器把中文段落预处理拆分成单词，然后存入数据库。\n从 "),n("strong",[s._v("MySQL 5.7.6")]),s._v(" 开始，MySQL内置了ngram全文解析器，用来"),n("strong",[s._v("支持中文")]),s._v("、日文、韩文分词。\n本文使用的MySQL 版本是 "),n("strong",[s._v("5.7.24")]),s._v("，"),n("strong",[s._v("InnoDB")]),s._v("数据库引擎。")]),s._v(" "),n("hr"),s._v(" "),n("h2",{attrs:{id:"ngram全文解析器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ngram全文解析器"}},[s._v("#")]),s._v(" ngram全文解析器")]),s._v(" "),n("p",[s._v("ngram就是一段文字里面连续的n个字的序列。")]),s._v(" "),n("p",[s._v("ngram全文解析器能够对文本进行分词，每个单词是连续的n个字的序列。")]),s._v(" "),n("p",[s._v("例如，用ngram全文解析器对“"),n("strong",[s._v("恭喜发财")]),s._v("”进行分词:")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("n=1: '恭', '喜', '发', '财' \nn=2: '恭喜', '喜发', '发财' \nn=3: '恭喜发', '喜发财' \nn=4: '恭喜发财'\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("MySQL 中使用全局变量 "),n("strong",[s._v("ngram_token_size")]),s._v(" 来配置 ngram 中 n 的大小，它的取值范围是1到10，"),n("strong",[s._v("默认值")]),s._v("是 "),n("strong",[s._v("2")]),s._v("。通常ngram_token_size设置为要查询的单词的最小字数。如果需要搜索单字，就要把ngram_token_size设置为1。在默认值是2的情况下，搜索单字是得不到任何结果的。因为中文单词最少是两个汉字，推荐使用默认值2。")]),s._v(" "),n("p",[s._v("全局变量 ngram_token_size 的两种设置方法：")]),s._v(" "),n("p",[n("strong",[s._v("【方式1】")]),s._v("：使用启动命令 mysqld 时，传参如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("mysqld --ngram_token_size=2\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("strong",[s._v("【方式2】")]),s._v("：在修改MySQL配置文件 "),n("strong",[s._v("my.ini")]),s._v(" 中，末尾增加一行 ngram_token_size 的参数设置：")]),s._v(" "),n("p",[s._v("["),n("img",{attrs:{src:"https://common.cnblogs.com/images/copycode.gif",alt:"复制代码"}}),s._v("](javascript:void(0)😉")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[mysql]\n# 设置mysql客户端默认字符集\ndefault-character-set=utf8\n[mysqld]\n#设置3306端口\nport = 3306\n\nserver_id=100\n# 设置mysql的安装目录\nbasedir=D:\\mysql-5.7.24-winx64\n# 设置mysql数据库的数据的存放目录\ndatadir=D:\\mysql-5.7.24-winx64\\data\n# 允许最大连接数\nmax_connections=200\n# 服务端使用的字符集默认为8比特编码的latin1字符集\ncharacter-set-server=utf8\n# 创建新表时将使用的默认存储引擎\ndefault-storage-engine=INNODB\n\n# 全文检索分词数\nngram_token_size=2\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br")])]),n("p",[s._v("["),n("img",{attrs:{src:"https://common.cnblogs.com/images/copycode.gif",alt:"复制代码"}}),s._v("](javascript:void(0)😉")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://img2018.cnblogs.com/blog/1148440/201907/1148440-20190707195314025-1911945996.png",alt:"img"}})]),s._v(" "),n("hr"),s._v(" "),n("h2",{attrs:{id:"创建全文索引"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建全文索引"}},[s._v("#")]),s._v(" 创建全文索引")]),s._v(" "),n("h3",{attrs:{id:"_1、建表-t-article"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、建表-t-article"}},[s._v("#")]),s._v(" 1、建表 t_article")]),s._v(" "),n("p",[s._v("建表语句如下：")]),s._v(" "),n("p",[s._v("["),n("img",{attrs:{src:"https://common.cnblogs.com/images/copycode.gif",alt:"复制代码"}}),s._v("](javascript:void(0)😉")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("/*\n Navicat Premium Data Transfer\n\n Source Server         : localhost\n Source Server Type    : MySQL\n Source Server Version : 50724\n Source Host           : localhost:3306\n Source Schema         : test_db\n\n Target Server Type    : MySQL\n Target Server Version : 50724\n File Encoding         : 65001\n\n Date: 07/07/2019 19:54:33\n*/\n\nSET NAMES utf8mb4;\nSET FOREIGN_KEY_CHECKS = 0;\n\n-- ----------------------------\n-- Table structure for t_article\n-- ----------------------------\nDROP TABLE IF EXISTS `t_article`;\nCREATE TABLE `t_article`  (\n  `id` int(11) NOT NULL AUTO_INCREMENT,\n  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,\n  `content` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,\n  PRIMARY KEY (`id`) USING BTREE,\n  FULLTEXT INDEX `fulltext_title_content`(`title`, `content`) WITH PARSER `ngram`\n) ENGINE = InnoDB AUTO_INCREMENT = 15 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;\n\n-- ----------------------------\n-- Records of t_article\n-- ----------------------------\nINSERT INTO `t_article` VALUES (1, '八荣八耻 1', '以热爱祖国为荣、以危害祖国为耻');\nINSERT INTO `t_article` VALUES (2, '八荣八耻 2', '以服务人民为荣、以背离人民为耻');\nINSERT INTO `t_article` VALUES (3, '八荣八耻 3', '以崇尚科学为荣，以愚昧无知为耻');\nINSERT INTO `t_article` VALUES (4, '八荣八耻 4', '以辛勤劳动为荣，以好逸恶劳为耻');\nINSERT INTO `t_article` VALUES (5, '八荣八耻 5', '以团结互助为荣，以损人利己为耻');\nINSERT INTO `t_article` VALUES (6, '八荣八耻 6', '以诚实守信为荣，以见利忘义为耻');\nINSERT INTO `t_article` VALUES (7, '八荣八耻 7', '以遵纪守法为荣，以违法乱纪为耻');\nINSERT INTO `t_article` VALUES (8, '八荣八耻 8', '以艰苦奋斗为荣，以骄奢淫逸为耻');\nINSERT INTO `t_article` VALUES (9, '满江红', '靖康耻，尤未雪');\nINSERT INTO `t_article` VALUES (10, '第一生产力', '科学技术是第一 生产力');\nINSERT INTO `t_article` VALUES (11, '团结互助', '团结就是力量');\nINSERT INTO `t_article` VALUES (12, 'Blue Red', 'Red Black');\nINSERT INTO `t_article` VALUES (13, '我是奇迹 1', '你好，我是奇迹2');\nINSERT INTO `t_article` VALUES (14, '恭喜发财', '你好');\n\nSET FOREIGN_KEY_CHECKS = 1;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br")])]),n("p",[s._v("["),n("img",{attrs:{src:"https://common.cnblogs.com/images/copycode.gif",alt:"复制代码"}}),s._v("](javascript:void(0)😉")]),s._v(" "),n("h3",{attrs:{id:"_2、创建全文索引"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、创建全文索引"}},[s._v("#")]),s._v(" 2、创建全文索引")]),s._v(" "),n("p",[s._v("创建字段 "),n("strong",[s._v("title")]),s._v(" 和 "),n("strong",[s._v("content")]),s._v(" 的联合全文索引，语句如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("alter table `t_article` add fulltext index fulltext_title_content(`title`,`content`) WITH PARSER ngram; \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("重连数据库，刷新查看索引的创建情况：")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://img2018.cnblogs.com/blog/1148440/201907/1148440-20190707195829633-1188771705.png",alt:"img"}})]),s._v(" "),n("h3",{attrs:{id:"_3、全文检索查询"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3、全文检索查询"}},[s._v("#")]),s._v(" 3、全文检索查询")]),s._v(" "),n("p",[s._v("1）查询 title 或者 content 中包含“"),n("strong",[s._v("祖国")]),s._v("”的记录，查询语句如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("select *, MATCH (title, content) AGAINST ('祖国') as score\nfrom t_article where MATCH (title, content) AGAINST ('祖国' IN NATURAL LANGUAGE MODE);\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("查询结果如下：")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://img2018.cnblogs.com/blog/1148440/201907/1148440-20190707200154903-147877988.png",alt:"img"}})]),s._v(" "),n("p",[s._v("2）查询 title 或者 content 中包含“"),n("strong",[s._v("团结劳动")]),s._v("”的记录，查询语句如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("select *, MATCH (title, content) AGAINST ('团结劳动') as score\nfrom t_article where MATCH (title, content) AGAINST ('团结劳动' IN NATURAL LANGUAGE MODE);\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("查询结果如下（"),n("strong",[s._v("查询结果，默认会按照得分 score ，从高到低排序")]),s._v("）：")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://img2018.cnblogs.com/blog/1148440/201907/1148440-20190707200959180-65149056.png",alt:"img"}})]),s._v(" "),n("p",[s._v("3）查询 title 或者 content 中包含“"),n("strong",[s._v("为荣")]),s._v("”的记录，查询语句如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("select *, MATCH (title, content) AGAINST ('为荣') as score\nfrom t_article where MATCH (title, content) AGAINST ('为荣' IN NATURAL LANGUAGE MODE);\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("查询结果如下（可以看到，此处得分是一样的）：")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://img2018.cnblogs.com/blog/1148440/201907/1148440-20190707200721921-1685136722.png",alt:"img"}})]),s._v(" "),n("h3",{attrs:{id:"_4、特殊情况"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4、特殊情况"}},[s._v("#")]),s._v(" "),n("strong",[s._v("4、特殊情况")])]),s._v(" "),n("h4",{attrs:{id:"_1-查询单个汉字"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-查询单个汉字"}},[s._v("#")]),s._v(" 1）查询单个汉字")]),s._v(" "),n("p",[s._v("比如，查询 title 或者 content 中包含“"),n("strong",[s._v("力")]),s._v("”的记录，查询语句如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("select *, MATCH (title, content) AGAINST ('力') as score\nfrom t_article where MATCH (title, content) AGAINST ('力' IN NATURAL LANGUAGE MODE);\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("查询结果如下：")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://img2018.cnblogs.com/blog/1148440/201907/1148440-20190707201526792-963721839.png",alt:"img"}})]),s._v(" "),n("p",[s._v("从上可以看到，查不到结果。原因是设置的全局变量 ngram_token_size 的值为 2。")]),s._v(" "),n("p",[s._v("如果想查询单个汉字，需要在配置文件 "),n("strong",[s._v("my.ini")]),s._v(" 中修改 "),n("strong",[s._v("ngram_token_size = 1 ，"),n("strong",[s._v("并")]),s._v("重启 mysqld 服务。")])]),s._v(" "),n("p",[n("img",{attrs:{src:"https://img2018.cnblogs.com/blog/1148440/201907/1148440-20190707201828936-1393400406.png",alt:"img"}})]),s._v(" "),n("p",[s._v("使用如下命令查询 ngram_token_size 的设置情况：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("show VARIABLES like 'ngram_token_size';\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("查询结果如下：")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://img2018.cnblogs.com/blog/1148440/201907/1148440-20190707202601351-46680503.png",alt:"img"}})]),s._v(" "),n("p",[s._v("此时，再次执行上面的单个汉字“"),n("strong",[s._v("力")]),s._v("”查询语句，结果如下（由于记录id = 10 中包含两个“力”，记录id = 11 中只有一个“力”。所以，查询结果中，前者得到的分数是后者的两倍）：")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://img2018.cnblogs.com/blog/1148440/201907/1148440-20190707202723491-1820665231.png",alt:"img"}})]),s._v(" "),n("h4",{attrs:{id:"_2-查询单个字段"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-查询单个字段"}},[s._v("#")]),s._v(" 2）查询单个字段")]),s._v(" "),n("p",[s._v("比如，查询字段 content 中包含“"),n("strong",[s._v("诚实")]),s._v("”，查询语句如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("select *, MATCH (content) AGAINST ('诚实') as score\nfrom t_article where MATCH (content) AGAINST ('诚实' IN NATURAL LANGUAGE MODE);\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("查询结果报错如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("select *, MATCH (content) AGAINST ('诚实') as score\nfrom t_article where MATCH (content) AGAINST ('诚实' IN NATURAL LANGUAGE MODE)\n> 1191 - Can't find FULLTEXT index matching the column list\n> 时间: 0.002s\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[n("img",{attrs:{src:"https://img2018.cnblogs.com/blog/1148440/201907/1148440-20190707204108101-1030058799.png",alt:"img"}})]),s._v(" "),n("p",[s._v("原因是没有给字段 "),n("strong",[s._v("content")]),s._v(" 单独创建全文检索的索引。")]),s._v(" "),n("p",[s._v("给字段 content 创建全文检索索引，语句如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("alter table `t_article` add fulltext index fulltext_content(`content`) WITH PARSER ngram;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("执行结果如下：")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://img2018.cnblogs.com/blog/1148440/201907/1148440-20190707204402528-1776425814.png",alt:"img"}})]),s._v(" "),n("p",[s._v("再次执行 查询字段 content 中包含“"),n("strong",[s._v("诚实")]),s._v("”，查询结果如下：")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://img2018.cnblogs.com/blog/1148440/201907/1148440-20190707204537436-1964527373.png",alt:"img"}})]),s._v(" "),n("p",[s._v("同理，如下需要单独对字段 title 进行全文检索，需要给字段 title 创建全文检索的索引，创建语句如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("alter table `t_article` add fulltext index fulltext_title(`title`) WITH PARSER ngram; \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("结果如下：")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://img2018.cnblogs.com/blog/1148440/201907/1148440-20190707204741927-622477233.png",alt:"img"}})]),s._v(" "),n("h3",{attrs:{id:"_5、全文检索模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5、全文检索模式"}},[s._v("#")]),s._v(" 5、全文检索模式")]),s._v(" "),n("p",[s._v("常用的全文检索模式有两种：")]),s._v(" "),n("p",[s._v("1、自然语言模式("),n("strong",[s._v("NATURAL LANGUAGE MODE")]),s._v(")")]),s._v(" "),n("p",[n("strong",[s._v("自然语言模式")]),s._v("是 MySQL 默认的全文检索模式。")]),s._v(" "),n("p",[s._v("自然语言模式不能使用操作符，不能指定关键词必须出现或者必须不能出现等复杂查询。")]),s._v(" "),n("p",[s._v("2、BOOLEAN 模式("),n("strong",[s._v("BOOLEAN MODE")]),s._v(")\nBOOLEAN 模式可以使用操作符，可以支持指定关键词必须出现或者必须不能出现或者关键词的权重高还是低等复杂查询。")]),s._v(" "),n("p",[s._v("BOOLEAN 模式，举例如下：")]),s._v(" "),n("p",[s._v("["),n("img",{attrs:{src:"https://common.cnblogs.com/images/copycode.gif",alt:"复制代码"}}),s._v("](javascript:void(0)😉")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("'apple banana' \n无操作符，表示或，要么包含apple，要么包含banana\n\n'+apple +juice'\n必须同时包含两个词\n\n'+apple macintosh'\n必须包含apple，但是如果也包含macintosh的话，相关性会更高。\n\n'+apple -macintosh'\n必须包含apple，同时不能包含macintosh。\n\n'+apple ~macintosh'\n必须包含apple，但是如果也包含macintosh的话，相关性要比不包含macintosh的记录低。\n\n'+apple +(>juice <pie)'\n查询必须包含apple和juice或者apple和pie的记录，但是apple juice的相关性要比apple pie高。\n\n'apple*'\n查询包含以apple开头的单词的记录，如apple、apples、applet。\n\n'\"some words\"'\n使用双引号把要搜素的词括起来，效果类似于like '%some words%'，\n例如“some words of wisdom”会被匹配到，而“some noise words”就不会被匹配。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br")])]),n("p",[s._v("["),n("img",{attrs:{src:"https://common.cnblogs.com/images/copycode.gif",alt:"复制代码"}}),s._v("](javascript:void(0)😉")]),s._v(" "),n("p",[s._v("举例说明：")]),s._v(" "),n("p",[s._v("1）查询字段 content 中"),n("strong",[s._v("包含")]),s._v(" “团结”"),n("strong",[s._v("和")]),s._v("“力量”的语句如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("select *, MATCH (content) AGAINST ('+团结 +力量') as score\nfrom t_article where MATCH (content) AGAINST ('+团结 +力量' IN BOOLEAN MODE);\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("查询结果如下：")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://img2018.cnblogs.com/blog/1148440/201907/1148440-20190707210611327-974484452.png",alt:"img"}})]),s._v(" "),n("p",[s._v("2）查询字段 content 中"),n("strong",[s._v("包含")]),s._v(" “团结”，但"),n("strong",[s._v("不包含")]),s._v("“力量”的语句如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("select *, MATCH (content) AGAINST ('+团结 -力量') as score\nfrom t_article where MATCH (content) AGAINST ('+团结 -力量' IN BOOLEAN MODE);\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("查询结果如下：")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://img2018.cnblogs.com/blog/1148440/201907/1148440-20190707210724208-993647100.png",alt:"img"}})]),s._v(" "),n("p",[s._v("3）查询字段 conent 中"),n("strong",[s._v("包含")]),s._v("“团结”"),n("strong",[s._v("或者")]),s._v("“力量”的语句如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("select *, MATCH (content) AGAINST ('团结 力量') as score\nfrom t_article where MATCH (content) AGAINST ('团结 力量' IN BOOLEAN MODE);\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("查询结果如下：")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://img2018.cnblogs.com/blog/1148440/201907/1148440-20190707210932944-1693152047.png",alt:"img"}})]),s._v(" "),n("h3",{attrs:{id:"_6、注意"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6、注意"}},[s._v("#")]),s._v(" 6、注意")]),s._v(" "),n("p",[s._v("1）只能在类型为 "),n("strong",[s._v("CHAR")]),s._v("、"),n("strong",[s._v("VARCHAR")]),s._v(" 或者 "),n("strong",[s._v("TEXT")]),s._v(" 的字段上创建全文索引。")]),s._v(" "),n("p",[s._v("2）全文索引只支持 "),n("strong",[s._v("InnoDB")]),s._v(" 和 "),n("strong",[s._v("MyISAM")]),s._v(" 引擎。")]),s._v(" "),n("p",[s._v("3）MATCH (columnName) AGAINST ('keywords')。MATCH()函数使用的字段名，必须要与创建全文索引时指定的字段名"),n("strong",[s._v("一致")]),s._v("。")]),s._v(" "),n("p",[s._v("如上面的示例，MATCH (title,content)使用的字段名与全文索引t_article(title,conent)定义的字段名一致。")]),s._v(" "),n("p",[s._v("如果要对 title 或者 content 字段分别进行查询，就需要在 title 和 content 字段上分别创建新的全文索引。")]),s._v(" "),n("p",[s._v("4）MATCH()函数使用的字段名只能是"),n("strong",[s._v("同一个表的字段")]),s._v("，因为全文索引不能够"),n("strong",[s._v("跨多个表")]),s._v("进行检索。")]),s._v(" "),n("p",[s._v("5）如果要导入大数据集，使用"),n("strong",[s._v("先导入")]),s._v("数据，"),n("strong",[s._v("再")]),s._v("在表上"),n("strong",[s._v("创建全文索引")]),s._v("的方式，要比先在表上创建全文索引再导入数据的方式快很多。")])])}),[],!1,null,null,null);t.default=e.exports}}]);