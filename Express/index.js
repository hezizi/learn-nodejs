// 入口文件

// 1. 加载 express 模块
const express = require('express');

// 2. 创建一个app对象（类似创建一个server对象）
let app  = express();

// 通过中间件监听指定的路由的请求
app.get('/index', (req, res) => {
  // res.end('hello express');    // hello express
  // res.send('hello express');   // hello express

  // res.end('你好,express');         // 中文乱码
  res.send('你好,express');     // 你好,express

  /*
    res.end()和res.send()的区别
    1. 参数类型区别
      res.end()   参数只能是 Buffer 对象或字符串
      res.send()  参数可以是 Buffer String Object Array
    2. res.send()会自动发送更多响应报文头，包括Content-Type: 'text/plain'; charset=utf-8
  */
})


// app.get('/login', (req, res) => {
//   res.send('Login');
// })
//
// app.get('/register', (req, res) => {
//   res.send('Register');
// })
//
// app.get('/submit', (req, res) => {
//   res.send('Submit');
// })

// app.get('/index', (req, res) => {
//   res.send('Index');
// })


// 只要以index开头的都行
app.use('/login', (req, res) => {
  res.send('login');
})


/*
  app.all() 注册路由：
    1. 不限定请求方法
    2. 请求路径pathname必须完全匹配
*/
// app.all('/register', (req, res) => {
//   res.send('hello express');
// })


/*
  正则表达式注册路由
*/
app.get(/^\/register(\/.+)*$/, (req, res) => {
  res.send('正则表达式注册路由');
})


/*
  通过req.params 获取路由中的参数
*/
app.get('/news/:year/:month/:day', (req, res) => {
  res.send('req.params');
})

// 4. 启动服务
app.listen(8888, () => {
  console.log('服务已启动');
})
