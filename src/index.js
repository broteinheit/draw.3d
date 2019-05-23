var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var users = [];

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/client', function(req, res) {
    res.sendFile(__dirname + "/client.html");
});

app.get('/server', function(req, res) {
    res.sendFile(__dirname + "/server.html");
});

io.of('/server').on('connection', function(socket) {
    console.log('a server connected');


    socket.on('disconnect', function(){
      console.log('server disconnected');
    });
});

var clients = io.of('/client');
//CLIENTS
clients.on("connection", function(socket) {
    console.log('a client connected');

    
    var id = socket.id;
    id = id.substring(id.indexOf('#')+1, id.length)

    socket.emit('id', id);
    users.push(id);

    socket.broadcast.emit('users changed', users);
    socket.emit('users changed', users);

    socket.on('disconnect', function(){
      console.log('client disconnected');
      users.splice(users.indexOf(id), 1);
      socket.broadcast.emit('users changed', users);
    });

    socket.on('orientation', function(msg) {
      //console.log(users);
      socket.broadcast.emit('others', msg);
    });
});




http.listen(3000, function(){
    console.log('listening on *:3000');
});