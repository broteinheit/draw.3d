var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var users = [];

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/client', function(req, res) {
    res.sendFile(__dirname + "/client.html");
});

app.get('/server', function(req, res) {
    res.sendFile(__dirname + "/server.html");
});

io.on('connection', function(socket){
    users.push(socket.id);
    console.log('a user connected');
    io.to(socket.id).emit('id', socket.id);

    io.sockets.emit('users changed', users);

    socket.on('disconnect', function(){
      console.log('user disconnected');
      users.splice(users.indexOf(socket.id), 1);
      socket.broadcast.emit('users changed', users);
    });

    socket.on('orientation', function(msg) {
      console.log(msg);
      socket.broadcast.emit('others', msg);
    });
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});
