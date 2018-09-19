const path = require('path');

// 当前模块的文件夹名称 -- 等同于 __filename 的 path.dirname() 的值
console.log(__dirname);                   // F:\Atom\learnNodeJs\module
console.log(path.dirname(__filename));    // F:\Atom\learnNodeJs\module

// 当前模块的文件名称 -- 解析后的绝对路径
console.log(__filename);                  // F:\Atom\learnNodeJs\module\__dirname.js
