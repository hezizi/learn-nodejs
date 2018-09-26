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

// 4. 启动服务
app.listen(8888, () => {
  console.log('服务已启动');
})
