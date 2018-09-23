const http = require('http');

// response （http.ServerResponse 类）

http.createServer((req, res) => {
  // response.writeHead()
  // response.setHeader()
  // response.statusCode
  // response.write()
  // response.end()


  // res.writeHead()直接向客户端响应（写入）http响应报文头
  // res.statusMessage，第二个参数不能使用中文
  // 如果同时使用res.writeHead()和res.setHeader()，浏览器会使用res.writeHead()中设置的状态
  res.writeHead(200, 'OK', {
    'Content-Type': 'text/plain; charset=utf-8'
  });

  /* res.setHeader()
    放在res.write()和res.end()之前设置，不设置响应报文头，系统默认有响应报文头，默认发送给浏览器
    当已经有响应报文头后就不能在使用res.setHeader()来设置，否则报错
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  */
  /* res.statusCode设置响应状态码；res.statusMessage设置响应状态码对应的消息，配合res.setHeader()使用
    res.statusCode = 404;
    res.statusMessage = 'Not Found';
  */

  // res.write();
  res.write('hello，你好');

  // 每个请求都必须调用res.end()
  // 告诉服务器该响应的报文头，报文体等已经全部响应文笔，可以结束响应
  res.end();

}).listen('3002', () => {
  console.log('服务已启动');
})
