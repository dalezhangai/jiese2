const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('a user connected');
    
    socket.on('sendMessage', (message) => {
        io.emit('message', message);
    });
});

app.post('/add-product', (req, res) => {
    // 处理添加商品逻辑
});

http.listen(4000, () => {
    console.log('listening on *:4000');
});
