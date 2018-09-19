// path.join([...paths])
// 1. ...paths <string> 一个路径片段的序列
// 2. 返回: <string>
// 3. path.join() 方法使用平台特定的分隔符把全部给定的 path 片段连接到一起，并规范化生成的路径
// 4. 如果任一路径片段不是一个字符串，则抛出 TypeError

const path = require('path');

// path.join('foo', {}, 'bar');    // throw new TypeError('Path must be a string. Received ' + inspect(path));


console.log(path.join('/a', 'b', 'c/d', 'e', '..'));    // \a\b\c\d

console.log(path.join('/a', 'b', '..', 'c/d', 'e'));    // \a\b\c\d

console.log(path.join('', '', ''));   // 链接后的字符串是一个长度为0的字符串，则返回'.'表示当前目录
