/*
 * Copyright (C) 2018 Zhejiang xiaominfo Technology CO.,LTD.
 * All rights reserved.
 * Official Web Site: http://www.xiaominfo.com.
 * Developer Web Site: http://open.xiaominfo.com.
 */

package com.github.xiaoymin.knife4j.aggre.spring.configuration;

import com.github.xiaoymin.knife4j.aggre.spring.support.EurekaSetting;
import com.github.xiaoymin.knife4j.aggre.spring.support.NacosSetting;
import com.github.xiaoymin.knife4j.aggre.spring.support.CloudSetting;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

/**
 * @author <a href="mailto:xiaoymin@foxmail.com">xiaoymin@foxmail.com</a>
 * 2020/11/13 13:12
 * @since:knife4j 1.0
 */
@Component
@ConfigurationProperties(prefix = "knife4j")
public class Knife4jAggregationProperties {

    /**
     * 是否开启Knife4j聚合模式
     */
    private boolean enableAggregation=false;

    /**
     * 任意聚合
     */
    private CloudSetting cloud;

    /**
     * 从Eureka注册中心中获取
     */
    private EurekaSetting eureka;

    /**
     * 从Nacos注册中心中获取
     */
    private NacosSetting nacos;

    public boolean isEnableAggregation() {
        return enableAggregation;
    }

    public void setEnableAggregation(boolean enableAggregation) {
        this.enableAggregation = enableAggregation;
    }

    public CloudSetting getCloud() {
        return cloud;
    }

    public void setCloud(CloudSetting cloud) {
        this.cloud = cloud;
    }

    public EurekaSetting getEureka() {
        return eureka;
    }

    public void setEureka(EurekaSetting eureka) {
        this.eureka = eureka;
    }

    public NacosSetting getNacos() {
        return nacos;
    }

    public void setNacos(NacosSetting nacos) {
        this.nacos = nacos;
    }
}
