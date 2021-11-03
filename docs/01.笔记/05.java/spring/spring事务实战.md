---
title: spring事务实战
date: 2021-10-08 19:46:04
permalink: /pages/88540a/
categories:
  - 笔记
  - java
  - spring
tags:
  - 
---


## 事务隔离级别

PROPAGATION_REQUIRED

如果当前没有事务，就创建一个新事务，如果当前存在事务，就加入该事务，这是最常见的选择，也是Spring默认的事务传播行为。



1. 一个service内，方法A和方法B事务隔离级别都是REQUIRED，insertAAndB方法无事务

```java
 	@Override
    @Transactional(propagation = Propagation.REQUIRED)
    public void insertA() {
        User user = new User();
        user.setAge(1);
        user.setName("test");
        userDao.insert(user);
        // A方法抛异常
        int i = 1/0;
    }

    @Transactional(propagation = Propagation.REQUIRED)
    public void insertB() {
        TUser user = new TUser();
        user.setAge(1);
        user.setName("test");
        tUserDao.insert(user);
    }

    @Override
    public void insertAAndB() {
        insertA();
        insertB();
    }
    
------------------分界线---------------------
    
    @Test
    void insertAAndB() {
        // 一个service内 事务传播行为都是required 测试方法A有异常 方法A成功执行，方法B因为异常未执行
        transactionTestAService.insertAAndB();
    }
```

分析：方法A声明了事务，但是因为一个service内，方法 insertAAndB 调用了 方法A和方法B，属于自身调用，事务失效，所以方法A抛异常未回滚。

自身调用（spring的声明式事务，是利用代理类来实现的，方法A和方法B都有自己的代理方法，但是由于insertAAndB没有声明事务，所以走的是实际的方法，方法insertAAndB调用的是实际的方法A和方法B，所以事务失效）



一个service内 事务传播行为都是required 方法insertAAndB有异常 方法A 和 方法B 都不回滚

```java
 @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public void insertA() {
        User user = new User();
        user.setAge(1);
        user.setName("test");
        userDao.insert(user);
    }

    @Transactional(propagation = Propagation.REQUIRED)
    public void insertB() {
        TUser user = new TUser();
        user.setAge(1);
        user.setName("test");
        tUserDao.insert(user);
    }

    @Override
    public void insertAAndB() {
        insertA();
        insertB();
        // 非事务方法抛异常
        int i = 1/0;
    }
    
    @Test
    void insertAAndB() {
        // 一个service内 事务传播行为都是required 方法insertAAndB有异常 方法A 和 方法B 都不回滚
        transactionTestAService.insertAAndB();
    }
```

分析：外围方法未开启事务，方法A和方法B在自己的事务中进行，外围异常并未影响。



一个service内 事务传播行为都是required 方法insertAAndB也具有事务，传播行为为REQUIRED，且有异常 方法A 和 方法B都回滚

```java
 @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public void insertA() {
        User user = new User();
        user.setAge(1);
        user.setName("test");
        userDao.insert(user);
    }

    @Transactional(propagation = Propagation.REQUIRED)
    public void insertB() {
        TUser user = new TUser();
        user.setAge(1);
        user.setName("test");
        tUserDao.insert(user);
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public void insertAAndB() {
        insertA();
        insertB();
        int i = 1/0;
    }
    
    @Test
    void insertAAndB() {
        // 一个service内 事务传播行为都是required 方法insertAAndB也具有事务，传播行为为REQUIRED，且有异常 方法A 和 方法B都回滚
        transactionTestAService.insertAAndB();
    }
```

分析：因为方法 insertAAndB具有事务，且事务隔离级别是REQUIRED（如果当前没有事务，就创建一个新事务，如果当前存在事务，就加入该事务）,三个方法处于同一事务中，所以有异常，就会回滚