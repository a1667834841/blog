---
title: 利用Excutors异步执行任务
date: 2021-01-30 00:00:00
tags: 
  - java
categories: 
  - 笔记
permalink: /pages/401bb7/
---

# 利用Excutors异步执行任务

 > 起因是项目中，有一个接口是查询数据库，for循环查询了10次，特别|消耗时间，当时数据有100万条时，查询时间需要6,7秒 ,所以想异步查询数据库，然后得到自己想要的结果。

 ## Excutors类

> Executors类，提供了一系列工厂方法用于创建线程池，返回的线程池都实现了ExecutorService接口。  

可以利用Excutors 创建线程池
* newCachedThreadPool创建一个可缓存线程池，如果线程池长度超过处理需要，可灵活回收空闲线程，若无可回收，则新建线程。
* newFixedThreadPool 创建一个定长线程池，可控制线程最大并发数，超出的线程会在队列中等待。
* newScheduledThreadPool 创建一个定长线程池，支持定时及周期性任务执行。
* newSingleThreadExecutor 创建一个单线程化的线程池，它只会用唯一的工作线程来执行任务，保证所有任务按照指定顺序(FIFO, LIFO, 优先级)执行。

```java
 ExecutorService executorService = Executors.newFixedThreadPool(10);
```
创建线程池后，可以得到 ExecutorService 对象
## ExecutorService
> 是一个比Executor使用更广泛的子类接口，其提供了生命周期管理的方法，返回 Future 对象，以及可跟踪一个或多个异步任务执行状况返回Future的方法；

可以调用ExecutorService的shutdown（）方法来平滑地关闭 ExecutorService，调用该方法后，将导致ExecutorService停止接受任何新的任务且等待已经提交的任务执行完成(已经提交的任务会分两类：

- 一类是已经在执行的，

- 另一类是还没有开始执行的)，当所有已经提交的任务执行完毕后将会关闭ExecutorService。因此我们一般用该接口来实现和管理多线程。

通过 ExecutorService.submit() 方法返回的 **Future** 对象，可以调用**isDone（）**方法查询Future是否已经完成。

当任务完成时，它具有一个结果，你可以调用**get()**方法来获取该结果。你也可以不用isDone（）进行检查就直接调用get()获取结果，在这种情况下，get()将阻塞，直至结果准备就绪，还可以取消任务的执行。

Future 提供了 **cancel()** 方法用来取消执行 pending 中的任务。ExecutorService 部分代码如下：

```java
public interface ExecutorService extends Executor {
	void shutdown();
	<T> Future<T> submit(Callable<T> task);
	<T> Future<T> submit(Runnable task, T result);
	<T> List<Future<T>> invokeAll(Collection<? extends Callable<T>> tasks, long timeout, TimeUnit unit) throws InterruptedException;
}
```

看到这，我们知道 ExecutorService 对象 可以接受 Callable 和 runnable 对象，返回Future 对象，说明我们可以定义自己的任务放在里面执行了！

## Future 对象

> Future表示一个可能还没有完成的异步任务的结果，针对这个结果可以添加Callback以便在任务执行成功或失败后作出相应的操作

### Future的主要方法

```java

    /**
     * 判断当前方法是否取消
     *
     * <p>After this method returns, subsequent calls to {@link #isDone} will
     * always return {@code true}.  Subsequent calls to {@link #isCancelled}
     * will always return {@code true} if this method returned {@code true}.
     *
     * @param mayInterruptIfRunning {@code true} if the thread executing this
     * task should be interrupted; otherwise, in-progress tasks are allowed
     * to complete
     * @return {@code false} if the task could not be cancelled,
     * typically because it has already completed normally;
     * {@code true} otherwise
     */
    boolean cancel(boolean mayInterruptIfRunning);

    /**
     * Returns {@code true} if this task was cancelled before it completed
     * normally.
     *
     * @return {@code true} if this task was cancelled before it completed
     */
    boolean isCancelled();

    /**
     * Returns {@code true} if this task completed.
     *
     * Completion may be due to normal termination, an exception, or
     * cancellation -- in all of these cases, this method will return
     * {@code true}.
     *
     * @return {@code true} if this task completed
     */
    boolean isDone();

    /**
     * 在必要时等待计算完成，然后检索其结果。
     *
     * @return the computed result
     * @throws CancellationException if the computation was cancelled
     * @throws ExecutionException if the computation threw an
     * exception
     * @throws InterruptedException if the current thread was interrupted
     * while waiting
     */
    V get() throws InterruptedException, ExecutionException;

    /**
     * 必要时最多等待给定时间以完成计算，然后检索其结果（如果有）
     *
     * @param timeout the maximum time to wait
     * @param unit the time unit of the timeout argument
     * @return the computed result
     * @throws CancellationException if the computation was cancelled
     * @throws ExecutionException if the computation threw an
     * exception
     * @throws InterruptedException if the current thread was interrupted
     * while waiting
     * @throws TimeoutException if the wait timed out
     */
    V get(long timeout, TimeUnit unit)
        throws InterruptedException, ExecutionException, TimeoutException;
```



1. 创建自己任务 ，我这里使用callable对象

   

   ```java
   public static class  MyTask implements Callable<Integer> {
   
           @Override
           public Integer call() throws Exception {
               
               long start = System.currentTimeMillis();
               // 睡眠 5秒
               Thread.sleep(5000);
               String name = Thread.currentThread().getName();
               System.out.println("方法执行任务成功    thread name: " + name);
               long end = System.currentTimeMillis();
               System.out.println("花费时间 = " + (end - start)/1000.0+"秒");
               return 1;
           }
       }
   ```

2.  demo代码

   

   ```java
    public static void main(String[] args)  {
   
           // 创建线程池
           ExecutorService executorService = Executors.newFixedThreadPool(10);
           // 创建list 装 Future 对象
           LinkedList<Future<Integer>> futures = new LinkedList<>();
           // 开始时间
           long start = System.currentTimeMillis();
           String startStr = DateUtils.parseString(start, DateUtils.DEFAULT_FORMAT);
           System.out.println("开始执行..开始时间： = " + startStr);
   
           // 循环执行10次
           for (int i = 0; i < 10; i++) {
               // 执行任务
               Future<Integer> future = executorService.submit(new MyTask());
               // add
               futures.add(future);
           }
   
           // 判断每个任务是否完成 ，如果未完成则阻塞，完成放行
           for (Future<Integer> future : futures) {
               // 死循环 判断该线程任务是否执行完
               while (!future.isDone()){}
               // 返回执行结果
               Integer result = null;
               try {
                   // 获取执行结果
                   result = future.get();
                   System.out.println("result = " + result);
               } catch (InterruptedException e) {
                   e.printStackTrace();
               } catch (ExecutionException e) {
                   e.printStackTrace();
               } finally {
                   // 启动有序关闭，在该关闭中执行先前提交的任务，但不接受任何新任务。 如果调用已经关闭，则调用不会产生任何其他影响。
                   executorService.shutdown();
               }
   
   
           }
   
           // 打印结束时间
           long end = System.currentTimeMillis();
           String endStr = DateUtils.parseString(end, DateUtils.DEFAULT_FORMAT);
           System.out.println("结束时间 = " + endStr);
           Long dif = end - start;
           // 打印消耗时间
           System.out.println("总共花费时间 = " + dif/1000.0+"秒");
   
   
       }
   ```

3. 执行结果

```shell

开始执行..开始时间： = 2020-12-08 00:42:08
方法执行任务成功    thread name: pool-1-thread-7
方法执行任务成功    thread name: pool-1-thread-10
方法执行任务成功    thread name: pool-1-thread-9
方法执行任务成功    thread name: pool-1-thread-8
方法执行任务成功    thread name: pool-1-thread-6
方法执行任务成功    thread name: pool-1-thread-4
方法执行任务成功    thread name: pool-1-thread-2
方法执行任务成功    thread name: pool-1-thread-1
方法执行任务成功    thread name: pool-1-thread-5
方法执行任务成功    thread name: pool-1-thread-3
花费时间 = 5.001秒
花费时间 = 5.001秒
花费时间 = 5.001秒
花费时间 = 5.001秒
花费时间 = 5.001秒
花费时间 = 5.001秒
花费时间 = 5.001秒
result = 1
花费时间 = 5.001秒
花费时间 = 5.002秒
花费时间 = 5.002秒
result = 1
result = 1
result = 1
result = 1
result = 1
result = 1
result = 1
result = 1
result = 1
结束时间 = 2020-12-08 00:42:13
总共花费时间 = 5.073秒
Disconnected from the target VM, address: '127.0.0.1:0', transport: 'socket'

Process finished with exit code 0
```

