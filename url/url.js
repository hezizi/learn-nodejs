// url 模块提供了一些实用函数，用于 URL 处理与解析

const url = require('url');
const path = require('path');
const fs = require('fs');

// 当第二个参数为true时，则query为一个js对象
const myUrl = url.parse(`http://yucihent.top:8888/atom-tips.html?wd=乐子赫的博客&type=hahaha&name=yucihent`, true);

console.log(myUrl);
/* Url {
    protocol: 'http:',
    slashes: true,
    auth: null,
    host: 'yucihent.top:8888',
    port: '8888',
    hostname: 'yucihent.top',
    hash: null,
    search: '?wd=乐子赫的博客&type=hahaha&name=yucihent',
    query: { wd: '乐子赫的博客', type: 'hahaha', name: 'yucihent' },
    pathname: '/atom-tips.html',
    path: '/atom-tips.html?wd=乐子赫的博客&type=hahaha&name=yucihent',
    href: 'http://yucihent.top:8888/atom-tips.html?wd=乐子赫的博客&type=hahaha&name=yucihent'
  }
*/

console.log(myUrl.href);        // http://yucihent.top:8888/atom-tips.html?wd=乐子赫的博客&type=hahaha&name=yucihent

console.log(myUrl.protocol);    // http:

console.log(myUrl.host);        // yucihent.top:8888

console.log(myUrl.hostname);    // yucihent.top

console.log(myUrl.port);        // 8888

console.log(myUrl.path);        // /atom-tips.html?wd=乐子赫的博客&type=hahaha&name=yucihent

console.log(myUrl.pathname);    // /atom-tips.html

console.log(myUrl.search);      // ?wd=乐子赫的博客&type=hahaha&name=yucihent

console.log(myUrl.query);       // { wd: '乐子赫的博客', type: 'hahaha', name: 'yucihent' }

let list = [];
list.push(myUrl.query);

// JSON.stringify() 方法是将一个JavaScript值(对象或者数组)转换为一个 JSON字符串
fs.writeFile(path.join(__dirname, 'data', 'data.json'), JSON.stringify(list), (err, data) => {
  if(err) {
    throw err
  } else {
    console.log('ok');
  }
})
