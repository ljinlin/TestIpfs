package com.test.ipfs;


import org.mybatis.spring.boot.autoconfigure.MybatisAutoConfiguration;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.scheduling.annotation.EnableScheduling;

@EnableCaching // 启用缓存功能
@EnableScheduling // 开启定时任务功能
//@ServletComponentScan
@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class,MybatisAutoConfiguration.class})
public class AppStart {
	private static ConfigurableApplicationContext applicationContext;

	public static void main(String[] args) {
		applicationContext = SpringApplication.run(AppStart.class, args);
	}

	public static ConfigurableApplicationContext applicationContext() {
		return applicationContext;
	}
	
	
	


}
