/*
  请求不同路径做出不同响应
*/

const http = require('http');

http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  // 获取用户请求路劲
  console.log(req.url);
  // 通过req.url获取用户请求路径，根据不同的请求路径，服务器做出不同的响应
  if(req.url === '/' || req.url === '/index') {
    res.end('Index');
  } else if(req.url === '/login') {
    res.end('Login');
  } else if(req.url === '/list') {
    res.end('List');
  } else if(req.url === '/register') {
    res.end('Register');
  } else {
    res.end('404, Not Found,客户端错误');
  }
}).listen(8001, () => {
  console.log('服务已启动');
});
