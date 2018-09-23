const http = require('http');
const path = require('path');
const fs = require('fs');
// 引用第三方模块mime
const mime = require('mime');

http.createServer((req, res) => {
  // 1. 获取用户请求路径
  // req.url

  // 2. 获取assets目录的完整路径
  const fileDir = path.join(__dirname, 'assets');
  const fileName = path.join(fileDir, req.url);
  // 3. 根据assets和用户请求的路径
  fs.readFile(fileName, (err, data) => {
    if(err) {
      res.end('文件不存在');
    } else {
      // 通过第三方模块mime，判断content-type类型
      res.setHeader('Content-Type', mime.getType(fileName));
      res.end(data);
    }
  })
}).listen('3000', () => {
  console.log('服务已启动');
})
