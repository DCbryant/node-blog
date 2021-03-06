依赖模块：

1. express: web 框架

2. express-session: session 中间件

3. connect-mongo: 将 session 存储于 mongodb，结合 express-session 使用

4. connect-flash: 页面通知的中间件，基于 session 实现

5. ejs: 模板

6. express-formidable: 接收表单及文件上传的中间件

7. config-lite: 读取配置文件

8. marked: markdown 解析

9. moment: 时间格式化

10. mongolass: mongodb 驱动

11. objectid-to-timestamp: 根据 ObjectId 生成时间戳

12. sha1: sha1 加密，用于密码加密

13. winston: 日志

14. express-winston: express 的 winston 日志中间件


由于 HTTP 协议是无状态的协议，所以服务端需要记录用户的状态时，就需要用某种机制来识别具体的用户，这个机制就是会话（Session）。

cookie 与 session 的区别:

1. cookie 存储在浏览器（有大小限制），session 存储在服务端（没有大小限制）

2. 通常 session 的实现是基于 cookie 的，session id 存储于 cookie 中

3. session 更安全，cookie 可以直接在浏览器查看甚至编辑

```
app.use(session(options))
```

session 中间件会在 req 上添加 session 对象，即 req.session 初始值为 {}，当我们登录后设置 req.session.user = 用户信息，返回浏览器的头信息中会带上 set-cookie 将 session id 写到浏览器 cookie 中，那么该用户下次请求时，通过带上来的 cookie 中的 session id 我们就可以查找到该用户，并将用户信息保存到 req.session.user


connect-flash 是基于 session 实现的，它的原理很简单：设置初始值 req.session.flash={}，通过 req.flash(name, value) 设置这个对象下的字段和值，通过 req.flash(name) 获取这个对象下的值，同时删除这个字段，实现了只显示一次刷新后消失的功能

