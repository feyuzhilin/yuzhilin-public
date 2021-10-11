const express = require('express');
const app = express()
const server = require('http').Server(app);
const Socket = require('socket.io')
const io = require('socket.io')(server, {allowEIO3: true, cors: true });
// 解决跨域问题
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });
  app.use(express.static('../drawApp/public'));


io.on('connection', socket => {
  console.log('connection');
  // 初始化
  socket.on('init', (data) => {
      console.log("init",data);
  })
  // 创建账户
  socket.on('createUser', data => {
  })
  // 创建房间
  socket.on('createRoom', data => {
    console.log("createRoom",data);
  })
})
io.listen(app.listen(3000, () => {
  console.log('server start at port: ' + 3000)
}))