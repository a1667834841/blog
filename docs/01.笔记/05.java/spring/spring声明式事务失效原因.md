---
title: spring声明式事务失效原因
date: 2021-10-08 19:46:04
permalink: /pages/3fd7aa/
categories:
  - 笔记
  - java
  - spring
tags:
  - 
---
# 事务失效的原因

1. ## 数据库引擎不支持事务

   （这里以 MySQL 为例，其 MyISAM 引擎是不支持事务操作的，InnoDB 才是支持事务的引擎，一般要支持事务都会使用 InnoDB）

2. ## 没有被 Spring 管理

3. ## 方法不是 public的 -- 该异常一般情况都会被编译器帮忙识别

   > When using proxies, you should apply the @Transactional annotation only to methods with public visibility. If you do annotate protected, private or package-visible methods with the @Transactional annotation, no error is raised, but the annotated method does not exhibit the configured transactional settings. Consider the use of AspectJ (see below) if you need to annotate non-public methods.

4. ## 自身调用问题

5. ## 数据源没有配置事务管理器

6. ## 不支持事务

```java
@Service
public class OrderServiceImpl implements OrderService {
    @Transactional
    public void update(Order order) {
        updateOrder(order);
    }
    @Transactional(propagation = Propagation.NOT_SUPPORTED)
    public void updateOrder(Order order) {
        // update order；
    }
}
```

7. ## 异常被吃了

8. ## 异常类型错误或格式配置错误





## 解决自身调用引起事务失效的办法

1. 把方法A()和方法B()分别放到不同的类里，使构成自身调用的条件失效
2. 自己注入自己，用注入的实例调用

```java
@Service
class TransactionTestAServiceImpl implements TransactionTestAService {

    @Resource
    TUserDao tUserDao;
    @Resource
    UserDao userDao;
    @Resource
    TransactionTestAService transactionTestAService;

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public void insertA() {
        User user = new User();
        user.setAge(1);
        user.setName("test");
        userDao.insert(user);
        int i = 1/0;
    }

    @Transactional(propagation = Propagation.REQUIRED)
    @Override
    public void insertB() {
        TUser user = new TUser();
        user.setAge(1);
        user.setName("test");
        tUserDao.insert(user);

    }

    @Override
//    @Transactional(propagation = Propagation.REQUIRED)
    public void insertAAndB() {
        transactionTestAService.insertA();
        transactionTestAService.insertB();
    }
}
```

3. 获取代理类，利用代理类调用自己类的方法

```java
@Service
class TransactionTestAServiceImpl implements TransactionTestAService {

    @Resource
    TUserDao tUserDao;
    @Resource
    UserDao userDao;
    @Resource
    TransactionTestAService transactionTestAService;

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public void insertA() {
        User user = new User();
        user.setAge(1);
        user.setName("test");
        userDao.insert(user);
        int i = 1/0;
    }

    @Transactional(propagation = Propagation.REQUIRED)
    @Override
    public void insertB() {
        TUser user = new TUser();
        user.setAge(1);
        user.setName("test");
        tUserDao.insert(user);

    }

    @Override
//    @Transactional(propagation = Propagation.REQUIRED)
    public void insertAAndB() {
//        transactionTestAService.insertA();
//        transactionTestAService.insertB();
        ((TransactionTestAService) AopContext.currentProxy()).insertA();
        ((TransactionTestAService) AopContext.currentProxy()).insertB();
    }
}
```

