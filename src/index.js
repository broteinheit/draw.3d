var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    console.log('a user connected');
    io.to(socket.id).emit('id', socket.id);

    socket.on('disconnect', function(){
      console.log('user disconnected');
    });

    socket.on('orientation', function(msg) {
      console.log(msg);
      socket.broadcast.emit('orientation', msg);
    });
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});
