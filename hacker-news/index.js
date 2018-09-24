// 当前项目（包）的入口文件

// 1. 加载http模块
const http = require('http');

// 2. 创建服务
http.createServer((req, res) => {
  // 设计路由
  // 当用户请求 / 或 /index 时，显示新闻列表
  // 当用户请求 /item 时，显示新闻详情
  // 当用户请求 /submit 时，显示添加新闻页面
  // 当用户请求 /add 时，将用户提交的新闻保存在 data.json 中 -get请求
  // 当用户请求 /add 时，将用户提交的新闻保存在 data.json 中 -post请求
}).listen(8000, () => {
  console.log('服务已开启');
})
