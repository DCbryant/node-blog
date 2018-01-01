
对应模块的用处：

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


Restful 是一种 api 的设计风格，提出了一组 api 的设计原则和约束条件


cookie 与 session 的区别

- cookie 存储在浏览器（有大小限制），session 存储在服务端（没有大小限制）

- 通常 session 的实现是基于 cookie 的，session id 存储于 cookie 中

- session 更安全，cookie 可以直接在浏览器查看甚至编辑


```js
app.use(session(options))
```

session 中间件会在 req 上添加 session 对象，即 req.session 初始值为 {}，当我们登录后设置 req.session.user = 用户信息，返回浏览器的头信息中会带上 set-cookie 将 session id 写到浏览器 cookie 中，那么该用户下次请求时，通过带上来的 cookie 中的 session id 我们就可以查找到该用户，并将用户信息保存到 req.session.user
