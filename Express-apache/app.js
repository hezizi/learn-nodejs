// 入口文件
// 模拟apache服务器

// 加载 express 模块
const express = require('express');
const path = require('path');

// 创建app对象
let app = express();

// 处理静态资源
let fn = express.static(path.join(__dirname, 'public'));

// 注册路由
app.use('/', fn);

// 启动服务
app.listen(3001, () => {
  console.log('服务已启动');
})
