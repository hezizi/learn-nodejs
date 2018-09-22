// 加载http模块
const http = require('http');

// 创建http服务对象
let server = http.createServer();

// 监听用户的请求事件（request事件）
server.on('request', (req, res) => {
  // 解决乱码：服务器通过设置http响应报文头，告诉浏览器使用相应的编码来解析网页
  // res.setHeader('Content-Type', 'text/plain; charset=utf-8');

  // 如果使用html，则需要使用html
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.write('hello node, <h1>你好</h1>');
  res.end();
}).listen(8888, () => {
  console.log('服务已经启动');
})
