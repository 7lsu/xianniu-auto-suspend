# 鲜牛加速器每日自动暂停 Github Action
无需服务器部署，每日凌晨四点自动暂停

## 部署
### 1. Star⭐ & Fork 这个项目 
[7lsu/xianniu-auto-suspend](https://github.com/7lsu/xianniu-auto-suspend)

### 2. 设置鲜牛账号密码

回到自己Fork的项目页面，依次点击`Settings`-->`Secrets`-->`New secret`

- XIANNIU_USERNAME 账号

- XIANNIU_PASSWORD 密码

### 3. 启用 Action

> Actions 默认为关闭状态，Fork 之后需要手动执行一次，若成功运行其才会激活。

返回项目主页面，点击上方的`Actions` --> `Node.js CI` --> `Run workflow`

## 致谢
@himcs [LeishenAuto](https://github.com/himcs/LeishenAuto)
