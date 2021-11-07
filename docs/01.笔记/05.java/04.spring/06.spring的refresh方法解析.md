---
title: spring的refresh方法解析
date: 2021-10-08 19:46:04
permalink: /pages/8e26b5/
categories:
  - 笔记
  - java
tags:
  - 
---
refresh方法会刷新spring的上下文

里面有多达13种方法，一一解析

## prepareRefresh方法

表示在真正做refresh操作之前需要准备做的事情：

- 设置Spring容器的启动时间，
- 开启活跃状态，撤销关闭状态，。
- 初始化context environment（上下文环境）中的占位符属性来源。
- 验证环境信息里一些必须存在的属性

```java
	/**
	 * Prepare this context for refreshing, setting its startup date and
	 * active flag as well as performing any initialization of property sources.
	 */
	protected void prepareRefresh() {
		// Switch to active.
        // 记录刷新开始时间
		this.startupDate = System.currentTimeMillis();
        // 上下文活动状态设置为开启
		this.closed.set(false);
		this.active.set(true);
		
		if (logger.isDebugEnabled()) {
			if (logger.isTraceEnabled()) {
				logger.trace("Refreshing " + this);
			}
			else {
				logger.debug("Refreshing " + getDisplayName());
			}
		}

		// Initialize any placeholder property sources in the context environment.
        // 初始化上下文中占位符资源
		initPropertySources();

		// Validate that all properties marked as required are resolvable:
        //验证所有标记为必需的属性都是可解析的
		// see ConfigurablePropertyResolver#setRequiredProperties
		getEnvironment().validateRequiredProperties();

		// Store pre-refresh ApplicationListeners...
        // 准备预存的监听器
		if (this.earlyApplicationListeners == null) {
			this.earlyApplicationListeners = new LinkedHashSet<>(this.applicationListeners);
		}
		else {
			// Reset local application listeners to pre-refresh state.
            // 不为空 则监听器重置
			this.applicationListeners.clear();
			this.applicationListeners.addAll(this.earlyApplicationListeners);
		}

		// Allow for the collection of early ApplicationEvents,
        // 为applicaion事件准备的集合
		// to be published once the multicaster is available...
        // 一旦广播器可用，application事件就会被push进去
		this.earlyApplicationEvents = new LinkedHashSet<>();
	}
```

