// 调用fs.readFile()方法读取文件
const fs = require('fs');
const path = require('path');

console.log(__dirname);   // F:\Atom\learnNodeJs\readFile

// const fileName = `${__dirname}/hello-node.txt`;

const fileName = path.join(__dirname, 'hello-node.txt');    // 使用path.join()来拼接路劲

fs.readFile(fileName, 'utf8', (err, data) => {
  if(err) {
    throw err;
  }
  // data参数的数据类型是一个Buffer对象，里面存放的是一个个的字节（字节数组）
  // buffer对象转换成字符串，调用toString()方法
  // 默认编码为utf8
  // console.log(data.toString('utf8'));
  // 如果在readFile()中写的utf8，则不需要加上toString()来进行转换
  console.log(data);
})
