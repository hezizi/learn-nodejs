const http = require('http');

// resquest （http.IncomingMessage 类）

http.createServer((req, res) => {
  // resquest.headers
  // resquest.rawHeaders
  // resquest.httpVersion
  // resquest.method
  // resquest.url

  // 1. req.headers返回一个对象，包含所有的请求报文头
  // console.log(req.headers);

  // 2. req.rawHeaders返回一个数组，保存请求报文头的字符串
  // console.log(req.rawHeaders);

  // 3. resquest.httpVersion获取请求客户端所使用的http版本号
  // console.log(req.httpVersion);

  // 4. resquest.method获取用户请求方式
  // console.log(req.method);

  // 5. resquest.url请求报文请求路径（GET），不包含主机名
  console.log(req.url);

  res.end('hello');
}).listen('3001', () => {
  console.log('服务已启动');
})
