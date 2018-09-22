/*
  请求不同路径做出不同响应，响应现有的html
*/

const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
  if(req.url === '/' || req.url === '/index') {
    // 拂去Index.html文件
    fs.readFile(path.join(__dirname, 'html', 'Index.html'), (err,data) => {
      if(err) {
        throw err
      }
      // 把提取到的Index.html页面内容发送到浏览器
      // 如果指定了 data，则相当于调用 response.write(data, encoding) 之后再调用 response.end(callback)
      res.end(data);
    });
  } else if(req.url === '/login') {
    fs.readFile(path.join(__dirname, 'html', 'Login.html'), (err,data) => {
      if(err) {
        throw err
      }
      // 把提取到的Index.html页面内容发送到浏览器
      // 如果指定了 data，则相当于调用 response.write(data, encoding) 之后再调用 response.end(callback)
      res.end(data);
    });
  } else if(req.url === '/list') {
    fs.readFile(path.join(__dirname, 'html', 'List.html'), (err,data) => {
      if(err) {
        throw err
      }
      // 把提取到的Index.html页面内容发送到浏览器
      // 如果指定了 data，则相当于调用 response.write(data, encoding) 之后再调用 response.end(callback)
      res.end(data);
    });
  } else if(req.url === '/register') {
    fs.readFile(path.join(__dirname, 'html', 'Register.html'), (err,data) => {
      if(err) {
        throw err
      }
      // 把提取到的Index.html页面内容发送到浏览器
      // 如果指定了 data，则相当于调用 response.write(data, encoding) 之后再调用 response.end(callback)
      res.end(data);
    });
  } else {
    fs.readFile(path.join(__dirname, 'html', '404.html'), (err,data) => {
      if(err) {
        throw err
      }
      // 把提取到的Index.html页面内容发送到浏览器
      // 如果指定了 data，则相当于调用 response.write(data, encoding) 之后再调用 response.end(callback)
      res.end(data);
    });
  }
}).listen('3000', () => {
  console.log('服务已启动');
})
