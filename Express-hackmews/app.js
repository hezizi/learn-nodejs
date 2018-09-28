const express = require('express');
// 加载config模块
const config = require('./config.js');
// 加载路由模块
const router = require('./router.js');

let app = express();

// 注册路由
// 设置app和router相关联
// app.use('/', router);
app.use(router);

app.listen(config.port, () => {
  console.log('服务已启动');
});
