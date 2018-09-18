
// 实现文件写入

// 1. 加载文件操作模块，fs模块
const fs = require('fs');

// 2. 实现文件写入操作
const msg = 'hello nodejs';

// 3. 调用fs.writeFile()，进行文件写入
// fs.writeFile(file, data[, options], callback)
fs.writeFile('./hello.txt', msg, 'utf8', err => {
  if(err) {
    console.log(`写文件出错了,具体错误${err}`);
  } else {
    console.log('写入成功');
  }
})
