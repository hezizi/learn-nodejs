const http = require('http');

// response （http.ServerResponse 类）

http.createServer((req, res) => {
  // response.write()
  // response.end()
  // response.setHeader();
  // response.method
  // response.url


  // res.setHeader()
  // 放在res.write()和res.end()之前设置，不设置响应报文头，系统默认有响应报文头，默认发送给浏览器
  // 当已经有响应报文头后就不能在使用res.setHeader()来设置，否则报错
  res.setHeader('Content-Type', 'text/plain', 'charset=utf-8');

  // res.write();
  res.write('hello，你好');

  // 每个请求都必须调用res.end()
  // 告诉服务器该响应的报文头，报文体等已经全部响应文笔，可以结束响应
  res.end();


}).listen('3001', () => {
  console.log('服务已启动');
})
