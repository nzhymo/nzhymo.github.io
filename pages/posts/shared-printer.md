---
title: 设置共享打印机
date: 2024-04-18 11:14:16
updated: 2024-04-18 11:14:16
tags:
  - 打印机
categories:
  - 运维
---

共享打印机的设置是一个巨坑，各种千奇百怪的错误，令人头疼。很多是由windows系统更新导致的，设置共享打印机要顺便把更新禁掉。

<!-- more -->

## 查看已添加打印机的IP地址
设置-设备-打印机和扫描仪，选中打印机

![](https://cdn.jsdelivr.net/gh/nzhymo/img-valaxy/24/04/18-13-09-18.webp)

管理-打印机属性-端口-配置端口

![](https://cdn.jsdelivr.net/gh/nzhymo/img-valaxy/24/04/18-13-09-26.webp)

## 获取当前电脑的IP地址
Windows+R调出命令行窗口，输入cmd，回车 (PS :windows+i 可调出设置界面)

![](https://cdn.jsdelivr.net/gh/nzhymo/img-valaxy/24/04/18-13-09-36.webp)

输入ipconfig,回车，即可看到电脑当前的IP地址配置

![](https://cdn.jsdelivr.net/gh/nzhymo/img-valaxy/24/04/18-13-09-43.webp)
## 打印机共享设置
设置-设备-打印机和扫描仪-选中要共享的打印机，点击管理

![](https://cdn.jsdelivr.net/gh/nzhymo/img-valaxy/24/04/18-13-09-53.webp)

打印机属性-共享-更改共享选项（界面可能会闪一下最小化）

![](https://cdn.jsdelivr.net/gh/nzhymo/img-valaxy/24/04/18-13-10-02.webp)

### 更改高级共享设置
右下角网络和Internet设置-网络和共享中心

![](https://cdn.jsdelivr.net/gh/nzhymo/img-valaxy/24/04/18-13-10-11.webp)
![](https://cdn.jsdelivr.net/gh/nzhymo/img-valaxy/24/04/18-13-10-31.webp)
![](https://cdn.jsdelivr.net/gh/nzhymo/img-valaxy/24/04/18-13-10-50.webp)
![](https://cdn.jsdelivr.net/gh/nzhymo/img-valaxy/24/04/18-13-10-58.webp)

如图所示勾选，保存勾选

### 修改本地安全策略
- 【本地策略】—【安全选项】—【网络访问：本地账户的共享和安全模型】---改来宾

![](https://cdn.jsdelivr.net/gh/nzhymo/img-valaxy/24/04/18-13-11-09.webp)
![](https://cdn.jsdelivr.net/gh/nzhymo/img-valaxy/24/04/18-13-11-18.webp)
![](https://cdn.jsdelivr.net/gh/nzhymo/img-valaxy/24/04/18-13-11-32.webp)
- 【本地策略】—【安全选项】—【账户：来宾账户状态】---改启用

![](https://cdn.jsdelivr.net/gh/nzhymo/img-valaxy/24/04/18-13-11-38.webp)

- 【本地策略】—【用户权限分配】—【拒绝从网络访问这台计算机】---删除guest

![](https://cdn.jsdelivr.net/gh/nzhymo/img-valaxy/24/04/18-13-11-49.webp)

- 【本地策略】—【安全选项】—【账户：使用空密码的本地账户只允许进行控制台登录】--改禁用

![](https://cdn.jsdelivr.net/gh/nzhymo/img-valaxy/24/04/18-13-11-58.webp)
### 检查防火墙配置

![](https://cdn.jsdelivr.net/gh/nzhymo/img-valaxy/24/04/18-13-12-22.webp)
![](https://cdn.jsdelivr.net/gh/nzhymo/img-valaxy/24/04/18-13-12-27.webp)
![](https://cdn.jsdelivr.net/gh/nzhymo/img-valaxy/24/04/18-13-14-19.webp)
![](https://cdn.jsdelivr.net/gh/nzhymo/img-valaxy/24/04/18-13-14-29.webp)

## 连接共享打印机
![](https://cdn.jsdelivr.net/gh/nzhymo/img-valaxy/24/04/18-13-14-37.webp)
## 错误
### 0X0000011b
-  添加注册表值
直接运行文件即可

![](https://cdn.jsdelivr.net/gh/nzhymo/img-valaxy/24/04/18-13-14-44.webp)

亲测，运行reg文件后正常，下图为reg文件内部


![](https://cdn.jsdelivr.net/gh/nzhymo/img-valaxy/24/04/18-13-14-52.webp)

```bash
Windows Registry Editor Version 5.00
[HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Print]
"RpcAuthnLevelPrivacyEnabled"=dword:00000000

[HKEY_LOCAL_MACHINE\Software\Policies\Microsoft\Windows NT\Printers\PointAndPrint]
"RestrictDriverInstallationToAdministrators"=dword:00000000
```

或者手动修改注册表，如下图所示

![](https://cdn.jsdelivr.net/gh/nzhymo/img-valaxy/24/04/18-13-14-59.webp)
![](https://cdn.jsdelivr.net/gh/nzhymo/img-valaxy/24/04/18-13-15-08.webp)
![](https://cdn.jsdelivr.net/gh/nzhymo/img-valaxy/24/04/18-13-15-18.webp)
![](https://cdn.jsdelivr.net/gh/nzhymo/img-valaxy/24/04/18-13-15-24.webp)
### 组织的安全策略阻止未经身份验证的来宾访问

![](https://cdn.jsdelivr.net/gh/nzhymo/img-valaxy/24/04/18-13-16-13.webp)

搜索【编辑组策略】或调出控制台，输入【gpedit.msc】，进入本地组策略编辑

![](https://cdn.jsdelivr.net/gh/nzhymo/img-valaxy/24/04/18-13-16-22.webp)

选择【已启用】，确定，关闭界面。

![](https://cdn.jsdelivr.net/gh/nzhymo/img-valaxy/24/04/18-13-16-29.webp)
## LPD打印服务
### 启用服务

当共享打印机错误无法解决时，可使用LPD来手动添加打印机


![](https://cdn.jsdelivr.net/gh/nzhymo/img-valaxy/24/04/18-13-16-35.webp)
![](https://cdn.jsdelivr.net/gh/nzhymo/img-valaxy/24/04/18-13-16-42.webp)

### 添加打印机

![](https://cdn.jsdelivr.net/gh/nzhymo/img-valaxy/24/04/18-13-16-52.webp)
![](https://cdn.jsdelivr.net/gh/nzhymo/img-valaxy/24/04/18-13-17-03.webp)
![](https://cdn.jsdelivr.net/gh/nzhymo/img-valaxy/24/04/18-13-17-15.webp)
![](https://cdn.jsdelivr.net/gh/nzhymo/img-valaxy/24/04/18-13-17-26.webp)













