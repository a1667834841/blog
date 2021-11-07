---
title: RabbitMQ
date: 2021-10-08 19:46:04
permalink: /pages/551062/
categories:
  - 笔记
  - 中间件
tags:
  - 
---
## [RabbitMQ的应用场景以及基本原理介绍](https://blog.csdn.net/whoamiyang/article/details/54954780?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.nonecase&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.nonecase)

## 概念
RabbitMQ 是一个由 erlang 开发的 AMQP (Advanced Message Queuing Protocol) 的开源实现。


AMQP ：高级消息队列协议，是应用层协议的一个开放标准，为面向消息的中间件设计。消息中间件主要用于组件之间的解耦，消息的发送者无需知道消息使用者的存在，反之亦然。 AMQP 的主要特征是面向消息、队列、路由（包括点对点和发布 / 订阅）、可靠性、安全。 RabbitMQ 是一个开源的 AMQP 实现，服务器端用 Erlang 语言编写，支持多种客户端，如：Python、Ruby、.NET、Java、JMS、C、PHP、ActionScript、XMPP、STOMP 等，支持 AJAX。用于在分布式系统中存储转发消息，在易用性、扩展性、高可用性等方面表现不俗。


## 一、应用场景
异步处理
应用解耦
流量削峰
### 异步处理
场景说明：用户注册后，需要发注册邮件和注册短信,传统的做法有两种1.串行的方式;2.并行的方式
(1)串行方式:将注册信息写入数据库后,发送注册邮件,再发送注册短信,以上三个任务全部完成后才返回给客户端。 这有一个问题是,邮件,短信并不是必须的,它只是一个通知,而这种做法让客户端等待没有必要等待的东西.
![](https://cdn.nlark.com/yuque/0/2020/png/1089013/1593872463613-e37fe5f4-44e4-4da1-83c4-ffc636425468.png#align=left&display=inline&height=225&margin=%5Bobject%20Object%5D&originHeight=225&originWidth=980&size=0&status=done&style=none&width=980)
(2)并行方式:将注册信息写入数据库后,发送邮件的同时,发送短信,以上三个任务完成后,返回给客户端,并行的方式能提高处理的时间。
![](https://cdn.nlark.com/yuque/0/2020/png/1089013/1593872468344-5896d2be-9ce2-4cf0-908a-1994741e9231.png#align=left&display=inline&height=383&margin=%5Bobject%20Object%5D&originHeight=383&originWidth=827&size=0&status=done&style=none&width=827)
假设三个业务节点分别使用50ms,串行方式使用时间150ms,并行使用时间100ms。虽然并性已经提高的处理时间,但是,前面说过,邮件和短信对我正常的使用网站没有任何影响，客户端没有必要等着其发送完成才显示注册成功,英爱是写入数据库后就返回.
(3)消息队列
引入消息队列后，把发送邮件,短信不是必须的业务逻辑异步处理
![](https://cdn.nlark.com/yuque/0/2020/png/1089013/1593872473647-3e55215b-5fe7-49b7-ba59-c145c013a761.png#align=left&display=inline&height=291&margin=%5Bobject%20Object%5D&originHeight=291&originWidth=1030&size=0&status=done&style=none&width=1030)
由此可以看出,引入消息队列后，用户的响应时间就等于写入数据库的时间+写入消息队列的时间(可以忽略不计),引入消息队列后处理后,响应时间是串行的3倍,是并行的2倍。


### 应用解耦
场景：双11是购物狂节,用户下单后,订单系统需要通知库存系统,传统的做法就是订单系统调用库存系统的接口.
![](https://cdn.nlark.com/yuque/0/2020/png/1089013/1593872477986-e79708d1-2280-408d-b9b0-7213c408fff2.png#align=left&display=inline&height=178&margin=%5Bobject%20Object%5D&originHeight=178&originWidth=529&size=0&status=done&style=none&width=529)
这种做法有一个缺点:


当库存系统出现故障时,订单就会失败。(这样马云将少赚好多好多钱^ ^)
订单系统和库存系统高耦合.
引入消息队列
![](https://cdn.nlark.com/yuque/0/2020/png/1089013/1593872483684-5e944328-0a43-46c6-88ac-a655fe1f4d6d.png#align=left&display=inline&height=342&margin=%5Bobject%20Object%5D&originHeight=342&originWidth=697&size=0&status=done&style=none&width=697)


订单系统:用户下单后,订单系统完成持久化处理,将消息写入消息队列,返回用户订单下单成功。


库存系统:订阅下单的消息,获取下单消息,进行库操作。
就算库存系统出现故障,消息队列也能保证消息的可靠投递,不会导致消息丢失(马云这下高兴了).
### 流量削峰
流量削峰一般在秒杀活动中应用广泛
场景:秒杀活动，一般会因为流量过大，导致应用挂掉,为了解决这个问题，一般在应用前端加入消息队列。
作用:
1.可以控制活动人数，超过此一定阀值的订单直接丢弃(我为什么秒杀一次都没有成功过呢^^)
2.可以缓解短时间的高流量压垮应用(应用程序按自己的最大处理能力获取订单)
![](https://cdn.nlark.com/yuque/0/2020/png/1089013/1593872490456-7f935abc-1d78-4954-b2b6-fddb11b566ff.png#align=left&display=inline&height=205&margin=%5Bobject%20Object%5D&originHeight=205&originWidth=776&size=0&status=done&style=none&width=776)
1.用户的请求,服务器收到之后,首先写入消息队列,加入消息队列长度超过最大值,则直接抛弃用户请求或跳转到错误页面.
2.秒杀业务根据消息队列中的请求信息，再做后续处理.


## 二、RabbitMQ 特性
RabbitMQ 最初起源于金融系统，用于在分布式系统中存储转发消息，在易用性、扩展性、高可用性等方面表现不俗。具体特点包括：


- 可靠性（Reliability）


RabbitMQ 使用一些机制来保证可靠性，如持久化、传输确认、发布确认。


- 灵活的路由（Flexible Routing）


在消息进入队列之前，通过 Exchange 来路由消息的。对于典型的路由功能，RabbitMQ 已经提供了一些内置的 Exchange 来实现。针对更复杂的路由功能，可以将多个 Exchange 绑定在一起，也通过插件机制实现自己的 Exchange 。


- 消息集群（Clustering）


多个 RabbitMQ 服务器可以组成一个集群，形成一个逻辑 Broker 。


- 高可用（Highly Available Queues）


队列可以在集群中的机器上进行镜像，使得在部分节点出问题的情况下队列仍然可用。


- 多种协议（Multi-protocol）


RabbitMQ 支持多种消息队列协议，比如 STOMP、MQTT 等等。


- 多语言客户端（Many Clients）


RabbitMQ 几乎支持所有常用语言，比如 Java、.NET、Ruby 等等。


- 管理界面（Management UI）


RabbitMQ 提供了一个易用的用户界面，使得用户可以监控和管理消息 Broker 的许多方面。


- 跟踪机制（Tracing）


如果消息异常，RabbitMQ 提供了消息跟踪机制，使用者可以找出发生了什么。


- 插件机制（Plugin System）


RabbitMQ 提供了许多插件，来从多方面进行扩展，也可以编写自己的插件。
## 三、RabbitMQ 基本概念
![image-20210307155604188](https://gitee.com/zxqzhuzhu/imgs/raw/master/image-20210307155604188.png)
**- Message**


消息，消息是不具名的，它由消息头和消息体组成。消息体是不透明的，而消息头则由一系列的可选属性组成，这些属性包括routing-key（路由键）、priority（相对于其他消息的优先权）、delivery-mode（指出该消息可能需要持久性存储）等。


**- Publisher**


消息的生产者，也是一个向交换器发布消息的客户端应用程序。


**- Exchange**


交换器，用来接收生产者发送的消息并将这些消息路由给服务器中的队列。


**- Routing Key**


路由关键字,exchange根据这个关键字进行消息投递。


**- Binding**


绑定，用于消息队列和交换器之间的关联。一个绑定就是基于路由键将交换器和消息队列连接起来的路由规则，所以可以将交换器理解成一个由绑定构成的路由表。


- Queue


消息队列，用来保存消息直到发送给消费者。它是消息的容器，也是消息的终点。一个消息可投入一个或多个队列。消息一直在队列里面，等待消费者连接到这个队列将其取走。


- Connection


网络连接，比如一个TCP连接。


- Channel


信道，多路复用连接中的一条独立的双向数据流通道。信道是建立在真实的TCP连接内地虚拟连接，AMQP 命令都是通过信道发出去的，不管是发布消息、订阅队列还是接收消息，这些动作都是通过信道完成。因为对于操作系统来说建立和销毁 TCP 都是非常昂贵的开销，所以引入了信道的概念，以复用一条 TCP 连接。


- Consumer


消息的消费者，表示一个从消息队列中取得消息的客户端应用程序。


- Virtual Host


虚拟主机，表示一批交换器、消息队列和相关对象。虚拟主机是共享相同的身份认证和加密环境的独立服务器域。每个 vhost 本质上就是一个 mini 版的 RabbitMQ 服务器，拥有自己的队列、交换器、绑定和权限机制。vhost 是 AMQP 概念的基础，必须在连接时指定，RabbitMQ 默认的 vhost 是 / 。


- Broker


表示消息队列服务器实体。它提供一种传输服务,它的角色就是维护一条从生产者到消费者的路线，保证数据能按照指定的方式进行传输,
四、Exchange 类型
Exchange 分发消息时根据类型的不同分发策略有区别，目前共四种类型：direct、fanout、topic、headers 。headers 匹配 AMQP 消息的 header 而不是路由键，此外 headers 交换器和 direct 交换器完全一致，但性能差很多，目前几乎用不到了，所以直接看另外三种类型：


direct
消息中的路由键（routing key）如果和 Binding 中的 binding key 一致， 交换器就将消息发到对应的队列中。路由键与队列名完全匹配，如果一个队列绑定到交换机要求路由键为 “dog”，则只转发 routing key 标记为 “dog” 的消息，不会转发 “dog.puppy”，也不会转发 “dog.guard” 等等。它是完全匹配、单播的模式。


fanout
每个发到 fanout 类型交换器的消息都会分到所有绑定的队列上去。fanout 交换器不处理路由键，只是简单的将队列绑定到交换器上，每个发送到交换器的消息都会被转发到与该交换器绑定的所有队列上。很像子网广播，每台子网内的主机都获得了一份复制的消息。fanout 类型转发消息是最快的。


topic
topic 交换器通过模式匹配分配消息的路由键属性，将路由键和某个模式进行匹配，此时队列需要绑定到一个模式上。它将路由键和绑定键的字符串切分成单词，这些单词之间用点隔开。它同样也会识别两个通配符：符号 “#” 和符号 “”。# 匹配 0 个或多个单词，匹配不多不少一个单词。


五、ConnectionFactory、Connection、Channel
ConnectionFactory、Connection、Channel 都是 RabbitMQ 对外提供的 API 中最基本的对象。


Connection 是 RabbitMQ 的 socket 链接，它封装了 socket 协议相关部分逻辑。
ConnectionFactory 为 Connection 的制造工厂。
Channel 是我们与 RabbitMQ 打交道的最重要的一个接口，我们大部分的业务操作是在 Channel 这个接口中完成的，包括定义 Queue、定义 Exchange、绑定 Queue 与 Exchange、发布消息等。
六、任务分发机制
1、Round-robin dispathching 循环分发
RabbbitMQ 的分发机制非常适合扩展，而且它是专门为并发程序设计的，如果现在 load 加重，那么只需要创建更多的 Consumer 来进行任务处理


2、Message acknowledgment 消息 确认
在实际应用中，可能会发生消费者收到 Queue 中的消息，但没有处理完成就宕机（或出现其他意外）的情况，这种情况下就可能会导致消息丢失。为了避免这种情况发生，我们可以要求消费者在消费完消息后发送一个回执给 RabbitMQ，RabbitMQ 收到消息回执（Message acknowledgment）后才将该消息从 Queue 中移除；如果 RabbitMQ 没有收到回执并检测到消费者的 RabbitMQ 连接断开，则 RabbitMQ 会将该消息发送给其他消费者（如果存在多个消费者）进行处理。这里不存在 timeout 概念，一个消费者处理消息时间再长也不会导致该消息被发送给其他消费者，除非它的 RabbitMQ 连接断开。 这里会产生另外一个问题，如果我们的开发人员在处理完业务逻辑后，忘记发送回执给 RabbitMQ，这将会导致严重的 bug——Queue 中堆积的消息会越来越多；消费者重启后会重复消费这些消息并重复执行业务逻辑…
另外 pub message 是没有 ack 的。


3、Message durability 消息持久化
如果我们希望即使在 RabbitMQ 服务重启的情况下，也不会丢失消息，我们可以将 Queue 与 Message 都设置为可持久化的（durable），这样可以保证绝大部分情况下我们的 RabbitMQ 消息不会丢失。但依然解决不了小概率丢失事件的发生（比如 RabbitMQ 服务器已经接收到生产者的消息，但还没来得及持久化该消息时 RabbitMQ 服务器就断电了），如果我们需要对这种小概率事件也要管理起来，那么我们要用到事务。由于这里仅为 RabbitMQ 的简单介绍，所以这里将不讲解 RabbitMQ 相关的事务。
要持久化队列 queue 的持久化需要在声明时指定 durable=True;
这里要注意，队列的名字一定要是 Broker 中不存在的，不然不能改变此队列的任何属性.
队列和交换机有一个创建时候指定的标志 durable,durable 的唯一含义就是具有这个标志的队列和交换机会在重启之后重新建立，它不表示说在队列中的消息会在重启后恢复
消息持久化包括 3 部分


- 1.exchange持久化,在声明时指定durable => true
hannel.ExchangeDeclare(ExchangeName,"direct",durable:true,autoDelete:false,arguments:null);//声明消息队列，且为可持久化的


- 2.queue持久化,在声明时指定durable => true
channel.QueueDeclare(QueueName,durable:true,exclusive:false,autoDelete:false,arguments:null);//声明消息队列，且为可持久化的
- 3.消息持久化,在投递时指定delivery_mode => 2(1是非持久化).
channel.basic_publish(exchange='',
                     routing_key="task_queue",
                     body=message,
                     properties=pika.BasicProperties(
                        delivery_mode = 2, # make message persistent
                     ))
如果 exchange 和 queue 都是持久化的，那么它们之间的 binding 也是持久化的，如果 exchange 和 queue 两者之间有一个持久化，一个非持久化，则不允许建立绑定.
注意：一旦创建了队列和交换机，就不能修改其标志了，例如，创建了一个 non-durable 的队列，然后想把它改变成 durable 的，唯一的办法就是删除这个队列然后重现创建。


关于持久化的进一步讨论：
为了数据不丢失，我们采用了：
在数据处理结束后发送ack，这样RabbitMQ Server会认为Message Deliver 成功。
持久化queue，可以防止RabbitMQ Server 重启或者crash引起的数据丢失。
持久化Message，理由同上。


但是这样能保证数据100%不丢失吗？答案是否定的。问题就在与RabbitMQ需要时间去把这些信息存到磁盘上，这个time window虽然短，但是它的确还是有。在这个时间窗口内如果数据没有保存，数据还会丢失。还有另一个原因就是RabbitMQ并不是为每个Message都做fsync：它可能仅仅是把它保存到Cache里，还没来得及保存到物理磁盘上。因此这个持久化还是有问题。但是对于大多数应用来说，这已经足够了。当然为了保持一致性，你可以把每次的publish放到一个transaction中。这个transaction的实现需要user defined codes。那么商业系统会做什么呢？一种可能的方案是在系统panic时或者异常重启时或者断电时，应该给各个应用留出时间去flash cache，保证每个应用都能exit gracefully。
4、Fair dispath 公平分发
你可能也注意到了，分发机制不是那么优雅，默认状态下，RabbitMQ 将第 n 个 Message 分发给第 n 个 Consumer。n 是取余后的，它不管 Consumer 是否还有 unacked Message，只是按照这个默认的机制进行分发.
那么如果有个 Consumer 工作比较重，那么就会导致有的 Consumer 基本没事可做，有的 Consumer 却毫无休息的机会，那么，Rabbit 是如何处理这种问题呢？


4.1 Prefetch count
前面我们讲到如果有多个消费者同时订阅同一个 Queue 中的消息，Queue 中的消息会被平摊给多个消费者。这时如果每个消息的处理时间不同，就有可能会导致某些消费者一直在忙，而另外一些消费者很快就处理完手头工作并一直空闲的情况。我们可以通过设置 prefetchCount 来限制 Queue 每次发送给每个消费者的消息数，比如我们设置 prefetchCount=1，则 Queue 每次给每个消费者发送一条消息；消费者处理完这条消息后 Queue 会再给该消费者发送一条消息。


通过 basic.qos 方法设置 prefetch_count=1，这样 RabbitMQ 就会使得每个 Consumer 在同一个时间点最多处理一个 Message，换句话说，在接收到该 Consumer 的 ack 前，它不会将新的 Message 分发给它




1
channel.basic_qos(prefetch_count=1)


注意，这种方法可能会导致 queue 满。当然，这种情况下你可能需要添加更多的 Consumer，或者创建更多的 virtualHost 来细化你的设计。


七、消息序列化
RabbitMQ 使用 ProtoBuf 序列化消息，它可作为 RabbitMQ 的 Message 的数据格式进行传输，由于是结构化的数据，这样就极大的方便了 Consumer 的数据高效处理，当然也可以使用 XML，与 XML 相比，ProtoBuf 有以下优势:
1. 简单
2.size 小了 3-10 倍
3. 速度快了 20-100 倍
4. 易于编程
6. 减少了语义的歧义.
，ProtoBuf 具有速度和空间的优势，使得它现在应用非常广泛


八、RPC
MQ 本身是基于异步的消息处理，前面的示例中所有的生产者（P）将消息发送到 RabbitMQ 后不会知道消费者（C）处理成功或者失败（甚至连有没有消费者来处理这条消息都不知道）。 但实际的应用场景中，我们很可能需要一些同步处理，需要同步等待服务端将我的消息处理完成后再进行下一步处理。这相当于 RPC（Remote Procedure Call，远程过程调用）。在 RabbitMQ 中也支持 RPC。
RabbitMQ 中实现 RPC 的机制是：
客户端发送请求（消息）时，在消息的属性（MessageProperties ，在 AMQP 协议中定义了 14 中 properties ，这些属性会随着消息一起发送）中设置两个值 replyTo （一个 Queue 名称，用于告诉服务器处理完成后将通知我的消息发送到这个 Queue 中）和 correlationId （此次请求的标识号，服务器处理完成后需要将此属性返还，客户端将根据这个 id 了解哪条请求被成功执行了或执行失败）
服务器端收到消息并处理
服务器端处理完消息后，将生成一条应答消息到 replyTo 指定的 Queue ，同时带上 correlationId 属性
客户端之前已订阅 replyTo 指定的 Queue ，从中收到服务器的应答消息后，根据其中的 correlationId 属性分析哪条请求被执行了，根据执行结果进行后续业务处理


九、RabbitMQ 选型和对比
1. 从社区活跃度
按照目前网络上的资料，RabbitMQ 、activeM 、ZeroMQ 三者中，综合来看，RabbitMQ 是首选。


2. 持久化消息比较
ZeroMq 不支持，ActiveMq 和 RabbitMq 都支持。持久化消息主要是指我们机器在不可抗力因素等情况下挂掉了，消息不会丢失的机制。


3. 综合技术实现
可靠性、灵活的路由、集群、事务、高可用的队列、消息排序、问题追踪、可视化管理工具、插件系统等等。
RabbitMq / Kafka 最好，ActiveMq 次之，ZeroMq 最差。当然 ZeroMq 也可以做到，不过自己必须手动写代码实现，代码量不小。尤其是可靠性中的：持久性、投递确认、发布者证实和高可用性。


4. 高并发
毋庸置疑，RabbitMQ 最高，原因是它的实现语言是天生具备高并发高可用的 erlang 语言。


5. 比较关注的比较， RabbitMQ 和 Kafka
RabbitMq 比 Kafka 成熟，在可用性上，稳定性上，可靠性上， RabbitMq 胜于 Kafka （理论上）。
另外，Kafka 的定位主要在日志等方面， 因为 Kafka 设计的初衷就是处理日志的，可以看做是一个日志（消息）系统一个重要组件，针对性很强，所以 如果业务方面还是建议选择 RabbitMq 。
还有就是，Kafka 的性能（吞吐量、TPS ）比 RabbitMq 要高出来很多。
选型最后总结：
如果我们系统中已经有选择 Kafka ，或者 RabbitMq ，并且完全可以满足现在的业务，建议就不用重复去增加和造轮子。
可以在 Kafka 和 RabbitMq 中选择一个适合自己团队和业务的，这个才是最重要的。但是毋庸置疑现阶段，综合考虑没有第三选择。

## springboot 针对ack的方式

```yml
spring:
 rabbitmq:
 host: myhost
 port: 5672
 username: guest
 password: guest
 virtual-host: /
 listener:
 simple:
 acknowledge-mode: manual # ⼿动ack，默认为auto
```

⽅式 解释

**NONE** 没有ack，等价于原⽣api中的autoAck=true

**MANUAL** ⽤户需要⼿动发送ack或者nack

**AUTO** ⽅法正常结束，spring boot 框架返回ack，发⽣异常spring boot框架返回nack



1. 消费者不确认消息的情况

   当一个生产者往一个名为`errorQueue`的队列生产数据，两个消费者，消费者A,消费者B,同时消费队列里的数据时，

   两个消费者的确认机制都设置成`autoAck:false` （**不对消息做出确认回复，消息会继续留在队列中**）

   消费者A,消费者B 都接受消息时，停止消费者A与生产者的连接后，生产者会继续把发送给消费者A的

   且留在队列中的消息发送个消费者B

## **RabbitMQ**如何保证消息的可靠投递




