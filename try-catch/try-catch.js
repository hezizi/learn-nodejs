const fs = require('fs');

// try-catch无法捕获异步异常

try {
  fs.writeFile('./test1.txt', '测试try-catch', 'utf-8', err => {
    console.log('ok');
  })
} catch(e) {
  console.log(e);
}
