---
title: 访问指定域名使用特定DNS服务器地址
date: 2024-04-12 15:41:32
updated: 2024-04-12 15:41:32
tags:
  - DNS
categories:
  - 运维
---
## 前言

访问预算系统时发现，配公司的DNS地址无法访问，需要改成别的如114DNS才可访问，但很多网站又只有公司DNS才能访问，频繁修改DNS地址非常麻烦。

最后发现在组策略编辑器中可以进行设置

## 解决方法
Windows+R打开命令运行框，输入gpedit.msc，回车。
![](https://cdn.jsdelivr.net/gh/nzhymo/img-valaxy/24/04/12-15-36-21.webp)


打开域名解析策略，选择FQDN，填写完整域名；选择常规DNS服务器，勾选启用DNS设置
![组策略编辑器1](https://cdn.jsdelivr.net/gh/nzhymo/img-valaxy/24/04/12-15-56-07.webp)

添加，输入访问上述网址的DNS服务器地址-创建-应用。

![组策略编辑器2](https://cdn.jsdelivr.net/gh/nzhymo/img-valaxy/24/04/12-16-29-06.webp)

ping一下，发现可以正常访问。若浏览器还是访问不了，清除下缓存就可以了。