const express = require('express');
const path = require('path');

let app = express();

/* res.send() */
app.get('/', (req, res) => {
  // res.send('<h1>send方法发送</h1>');

  /* res.redirect() 默认302*/
  // res.redirect(301, 'http://yucihent.top');

  // 读取图片
  res.sendFile(path.join(__dirname, 'bg7.jpeg'), (err, data) => {
    if(err) {
      throw err
    }
    console.log('ok');
  })
})

/* res.json() */
// app.get('/', (req, res) => {
//   res.json({name: 'yucihent'});   // {"name":"yucihent"}
// })


app.listen(8888, () => {
  console.log('服务已启动');
})
