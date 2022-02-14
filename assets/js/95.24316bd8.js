(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{559:function(s,a,n){"use strict";n.r(a);var e=n(20),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"基于-docker-部署-skywalking-并实现-springboot-全链路监控"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基于-docker-部署-skywalking-并实现-springboot-全链路监控"}},[s._v("#")]),s._v(" 基于 docker 部署 skywalking 并实现 SpringBoot 全链路监控")]),s._v(" "),n("p",[s._v("[toc]")]),s._v(" "),n("h1",{attrs:{id:"一、安装环境部署"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、安装环境部署"}},[s._v("#")]),s._v(" 一、安装环境部署")]),s._v(" "),n("p",[s._v("下载镜像：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ docker pull docker pull elasticsearch:7.10.1\n$ docker pull apache/skywalking-oap-server:8.3.0-es7\n$ docker pull apache/skywalking-ui:8.3.0\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h2",{attrs:{id:"_1-1-docker-中安装-elasticsearch7-6-2-方式一"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-docker-中安装-elasticsearch7-6-2-方式一"}},[s._v("#")]),s._v(" 1.1 Docker 中安装 Elasticsearch7.6.2（方式一）")]),s._v(" "),n("p",[s._v("安装 Elasticsearch")]),s._v(" "),n("p",[s._v("注意：使用版本为 7.6.2，你可以选择其他版本\n拉取镜像")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("docker pull elasticsearch:7.6.2\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("启动容器")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('docker run --restart=always -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" \\\n-e ES_JAVA_OPTS="-Xms512m -Xmx512m" \\\n--name=\'elasticsearch\' --cpuset-cpus="1" -m 2G -d elasticsearch:7.6.2xxxxxxxxxx docker run --restart=always -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" \\-e ES_JAVA_OPTS="-Xms512m -Xmx512m" \\--name=\'elasticsearch\' --cpuset-cpus="1" -m 2G -d elasticsearch:7.6.2123\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("说明：")]),s._v(" "),n("ul",[n("li",[s._v("-v /opt/hanlp:/opt/hanlp 如果使用了 hanlp 的分词，所以需要挂载词库")]),s._v(" "),n("li",[s._v("ES_JAVA_OPTS 可以设置参数")]),s._v(" "),n("li",[s._v("单节点启动")])]),s._v(" "),n("p",[s._v("访问地址：http://172.18.63.211:9200")]),s._v(" "),n("h2",{attrs:{id:"_1-2-安装部署-elasticsearch-7-10-1-方式二"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-安装部署-elasticsearch-7-10-1-方式二"}},[s._v("#")]),s._v(" 1.2 安装部署 elasticsearch:7.10.1（方式二）")]),s._v(" "),n("h3",{attrs:{id:"修改配置文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#修改配置文件"}},[s._v("#")]),s._v(" 修改配置文件")]),s._v(" "),n("p",[s._v("（可选）修改主机配置参数：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ vi /etc/sysctl.conf\nvm.max_map_count=262144\n$ sysctl -p\n\n$ vi/etc/systemd/system.conf\nDefaultLimitNOFILE=65536\nDefaultLimitNPROC=32000\nDefaultLimitMEMLOCK=infinity\n$ systemctl daemon-reload\n\n$ vi /etc/security/limits.conf\n* soft nofile 65536\n* hard nofile 65536\n* soft nproc 4096\n* hard nproc 4096\n* hard memlock unlimited\n* soft memlock unlimited\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("h3",{attrs:{id:"启动-elasticsearch"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#启动-elasticsearch"}},[s._v("#")]),s._v(" 启动 elasticsearch")]),s._v(" "),n("p",[s._v("创建持久化目录，并启动 elasticsearch")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('$ mkdir -p /data/elasticsearch/data\n$ mkdir -p /data/elasticsearch/logs\n$ chmod -R 777 /data/elasticsearch/data\n$ chmod -R 777 /data/elasticsearch/logs\n$ docker run -d --name=es7 \\\n  --restart=always \\\n  -p 9200:9200 -p 9300:9300 \\\n  -e "discovery.type=single-node" \\\n  -v /data/elasticsearch/data:/usr/share/elasticsearch/data \\\n  -v /data/elasticsearch/logs:/usr/share/elasticsearch/logs \\\nelasticsearch:7.10.1\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h2",{attrs:{id:"_1-3-安装-oap"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-安装-oap"}},[s._v("#")]),s._v(" 1.3 安装 oap")]),s._v(" "),n("p",[n("strong",[s._v("注意：等待 elasticsearch 完全启动之后，再启动 oap")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ docker run --name oap --restart always -d \\\n--restart=always \\\n-e TZ=Asia/Shanghai \\\n-p 12800:12800 \\\n-p 11800:11800 \\\n--link es7:es7 \\\n-e SW_STORAGE=elasticsearch7 \\\n-e SW_STORAGE_ES_CLUSTER_NODES=es7:9200 \\\napache/skywalking-oap-server:8.3.0-es7\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("说明：这里指定 elasticsearch 来存储数据")]),s._v(" "),n("ul",[n("li",[s._v("–link： es7 和你启动的 es 容器的 name 保持一致")]),s._v(" "),n("li",[s._v("-e SW_STORAGE_ES_CLUSTER_NODES：es7 也可改为你 es 服务器部署的 Ip 地址，即 ip:9200")])]),s._v(" "),n("p",[s._v("如果有如下报错：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[Entrypoint] Apache SkyWalking Docker Image\nCurrent image doesn't Elasticsearch 6\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("把 SW_STORAGE 改成 elasticsearch7 即可")]),s._v(" "),n("h2",{attrs:{id:"_1-4-安装-ui"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-安装-ui"}},[s._v("#")]),s._v(" 1.4 安装 ui")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ docker run -d --name skywalking-ui \\\n--restart=always \\\n-e TZ=Asia/Shanghai \\\n-p 8080:8080 \\\n--link oap:oap \\\n-e SW_OAP_ADDRESS=oap:12800 \\\napache/skywalking-ui:8.3.0\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("说明：")]),s._v(" "),n("ul",[n("li",[s._v("– link：注意容器的名称")]),s._v(" "),n("li",[s._v("-e SW_OAP_ADDRESS：oap 容器名称，也可改为 ip:12800，即其他服务的 IP 和端口")])]),s._v(" "),n("h2",{attrs:{id:"_1-5-下载源码包-会用到其中的-agent"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-下载源码包-会用到其中的-agent"}},[s._v("#")]),s._v(" 1.5 下载源码包，会用到其中的 agent")]),s._v(" "),n("p",[s._v("http://skywalking.apache.org/downloads/")]),s._v(" "),n("p",[s._v("[外链图片转存失败, 源站可能有防盗链机制, 建议将图片保存下来直接上传 (img-K4yXkgBY-1615948939842)(https://lovebetterworld.com/skywalking.png)]")]),s._v(" "),n("h1",{attrs:{id:"二、springboot-集成-skywalking"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、springboot-集成-skywalking"}},[s._v("#")]),s._v(" 二、SpringBoot 集成 Skywalking")]),s._v(" "),n("h2",{attrs:{id:"_2-1-配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-配置"}},[s._v("#")]),s._v(" 2.1 配置")]),s._v(" "),n("h3",{attrs:{id:"文件准备"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#文件准备"}},[s._v("#")]),s._v(" 文件准备")]),s._v(" "),n("p",[s._v("将 apache-skywalking-apm-bin-es7/agent 文件夹拷贝到发布容器中，位置可以根据情况调整。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("cp -r ./agent/*  /opt/skywalkingAgent\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("文件说明")]),s._v(" "),n("ul",[n("li",[s._v("config/agent.config：为客户端代理配置文件，可以根据系统情况进行响应调整，这里就不详细说明。")]),s._v(" "),n("li",[s._v("logs：SW agent 相关运行情况日志。")]),s._v(" "),n("li",[s._v("skywalking-agent.jar：agent 代理 jar 包。")])]),s._v(" "),n("h3",{attrs:{id:"使用方式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用方式"}},[s._v("#")]),s._v(" 使用方式")]),s._v(" "),n("p",[s._v("优先级：探针 > JVM 配置 > 系统环境变量 > agent.config")]),s._v(" "),n("p",[s._v("一般都使用探针方式，其他方式就不介绍了，配置方式如下：s")]),s._v(" "),n("ul",[n("li",[s._v("格式 1(推荐)：-javaagent:/path/to/skywalking-agent.jar={config1}={value1},{config2}={value2}")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("-javaagent:../skywalking-agent.jar=agent.service_name=fw-gateway,collector.backend_service=127.0.0.1:11800\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("格式 2：-Dskywalking.[option1]=[value2]")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("-javaagent:../skywalking-agent.jar -Dskywalking.agent.service_name=fw-gateway -Dskywalking.collector.backend_service=127.0.0.1:11800\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("一般配置下面两项即可：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("agent.service_name：客户端服务名，在apm系统中显示的服务名称。\ncollector.backend_service：SW上传的服务地址。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("访问相关服务地址后可以在 SW 控制台中查看相关信息")]),s._v(" "),n("h3",{attrs:{id:"详细配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#详细配置"}},[s._v("#")]),s._v(" 详细配置")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('# 探针代理命名空间，跨进场传输时的header标记\n# agent.namespace=${SW_AGENT_NAMESPACE:default-namespace}\n \n# 代理服务名称，在ui显示的的服务名称\nagent.service_name=${SW_AGENT_NAME:Your_ApplicationName}\n \n# 采样率，每3秒trace几条\n# 小于等于0使用默认值，每条都采样\n# agent.sample_n_per_3_secs=${SW_AGENT_SAMPLE:-1}\n \n# server端的认证配置\n# agent.authentication = ${SW_AGENT_AUTHENTICATION:xxxx}\n \n# 单个trace的span跨度，会有内存开销\n# agent.span_limit_per_segment=${SW_AGENT_SPAN_LIMIT:150}\n \n# 忽略span，多个逗号分隔\n# agent.ignore_suffix=${SW_AGENT_IGNORE_SUFFIX:.jpg,.jpeg,.js,.css,.png,.bmp,.gif,.ico,.mp3,.mp4,.html,.svg}\n \n# 开启debug模式，用于发现sw的bug\n# agent.is_open_debugging_class = ${SW_AGENT_OPEN_DEBUG:true}\n \n# 是否缓存sw的增强包\n# agent.is_cache_enhanced_class = ${SW_AGENT_CACHE_CLASS:false}\n \n# sw指令类的缓存模式: MEMORY or FILE\n# MEMORY: 缓存在内存中，占用内容\n# FILE: 缓存到/class-cache目录下, 退出自动删除\n# agent.class_cache_mode = ${SW_AGENT_CLASS_CACHE_MODE:MEMORY}\n \n# 操作名称的最大长度，最大不要超过190\n# agent.operation_name_threshold=${SW_AGENT_OPERATION_NAME_THRESHOLD:150}\n \n# 代理默认使用gRPC纯文本。\n# 如果为true，则即使未检测到CA文件，SkyWalking代理也会使用TLS。\n# agent.force_tls=${SW_AGENT_FORCE_TLS:false}\n \n# 是否使用新的配置文件\n# profile.active=${SW_AGENT_PROFILE_ACTIVE:true}\n \n# 并行监听的分段数量\n# profile.max_parallel=${SW_AGENT_PROFILE_MAX_PARALLEL:5}\n \n# 监听分段的最大时间，超出则停止\n# profile.duration=${SW_AGENT_PROFILE_DURATION:10}\n \n# 线程最大跨线程数\n# profile.dump_max_stack_depth=${SW_AGENT_PROFILE_DUMP_MAX_STACK_DEPTH:500}\n \n# 数据快照缓冲区大小\n# profile.snapshot_transport_buffer_size=${SW_AGENT_PROFILE_SNAPSHOT_TRANSPORT_BUFFER_SIZE:50}\n \n# server服务地址\ncollector.backend_service=${SW_AGENT_COLLECTOR_BACKEND_SERVICES:127.0.0.1:11800}\n \n# sw日志文件\nlogging.file_name=${SW_LOGGING_FILE_NAME:skywalking-api.log}\n \n# sw日志级别\nlogging.level=${SW_LOGGING_LEVEL:INFO}\n \n# 日志文件地址\n# logging.dir=${SW_LOGGING_DIR:""}\n \n# 单个日志文件大小, default: 300 * 1024 * 1024 = 314572800\n# logging.max_file_size=${SW_LOGGING_MAX_FILE_SIZE:314572800}\n \n# 最大日志文件数量，滚动删除，小于等于0时不删除\n# logging.max_history_files=${SW_LOGGING_MAX_HISTORY_FILES:-1}\n \n# 忽略异常\n# statuscheck.ignored_exceptions=${SW_STATUSCHECK_IGNORED_EXCEPTIONS:}\n \n# 异常trace的跟踪深度，建议小于10，对性能有影响\n# statuscheck.max_recursive_depth=${SW_STATUSCHECK_MAX_RECURSIVE_DEPTH:1}\n \n# 扩展插件\nplugin.mount=${SW_MOUNT_FOLDERS:plugins,activations}\n \n# 不加载插件\n# plugin.exclude_plugins=${SW_EXCLUDE_PLUGINS:}\n \n# mysql插件\n# plugin.mysql.trace_sql_parameters=${SW_MYSQL_TRACE_SQL_PARAMETERS:false}\n \n# Kafka地址\n# plugin.kafka.bootstrap_servers=${SW_KAFKA_BOOTSTRAP_SERVERS:localhost:9092}\n \n# Match spring bean with regex expression for classname\n# plugin.springannotation.classname_match_regex=${SW_SPRINGANNOTATION_CLASSNAME_MATCH_REGEX:}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br"),n("span",{staticClass:"line-number"},[s._v("74")]),n("br"),n("span",{staticClass:"line-number"},[s._v("75")]),n("br"),n("span",{staticClass:"line-number"},[s._v("76")]),n("br"),n("span",{staticClass:"line-number"},[s._v("77")]),n("br"),n("span",{staticClass:"line-number"},[s._v("78")]),n("br"),n("span",{staticClass:"line-number"},[s._v("79")]),n("br"),n("span",{staticClass:"line-number"},[s._v("80")]),n("br"),n("span",{staticClass:"line-number"},[s._v("81")]),n("br"),n("span",{staticClass:"line-number"},[s._v("82")]),n("br"),n("span",{staticClass:"line-number"},[s._v("83")]),n("br"),n("span",{staticClass:"line-number"},[s._v("84")]),n("br"),n("span",{staticClass:"line-number"},[s._v("85")]),n("br"),n("span",{staticClass:"line-number"},[s._v("86")]),n("br"),n("span",{staticClass:"line-number"},[s._v("87")]),n("br"),n("span",{staticClass:"line-number"},[s._v("88")]),n("br"),n("span",{staticClass:"line-number"},[s._v("89")]),n("br"),n("span",{staticClass:"line-number"},[s._v("90")]),n("br")])]),n("h1",{attrs:{id:"三、使用systemctl"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、使用systemctl"}},[s._v("#")]),s._v(" 三、使用systemctl")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建后台启动模版")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/systemd/system/skywaking.service\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 内容如下：")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Unit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Description")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("skywaking\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("After")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("network.target\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Service"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /usr/local/src/frp_0.34.2_linux_amd64 frp所在位置")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStart")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/opt/software/skywalking/apache-skywalking-apm-bin/bin/startup.sh\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Install"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("WantedBy")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("multi-user.target\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动测试")]),s._v("\nsystemctl start skywaking.service\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看启动状态")]),s._v("\nsystemctl status skywaking.service\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开机自启")]),s._v("\nsystemctl "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" skywaking.service\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重新启动")]),s._v("\nsystemctl restart skywaking.service\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);