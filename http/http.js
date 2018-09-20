// 加载http模块
const http = require('http');

// 创建http服务对象
let server = http.createServer();

// 监听用户的请求事件（request事件）
server.on('request', (req, res) => {
  // 解决乱码：服务器通过设置http响应报文头，告诉浏览器使用相应的编码来解析王爷
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.write('hello node, 你好');
  res.end();
})

server.listen(8888, () => {
  console.log('服务已经启动了');
});
