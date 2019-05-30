const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const users = [];

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/client', function (req, res) {
    res.sendFile(__dirname + "/client.html");
});

app.get('/server', function (req, res) {
    res.sendFile(__dirname + "/server.html");
});

app.get('/js/three.js', function (req, res) {
    res.sendFile(__dirname + "/js/three.js");
});

app.get('/js/OrbitControls.js', function (req, res) {
    res.sendFile(__dirname + "/js/OrbitControls.js");
});


const serverSockets = io.of('/server');
serverSockets.on('connection', function (socket) {
    console.log('a server connected');
    socket.emit('users changed', users);

    socket.on('disconnect', function () {
        console.log('server disconnected');
    });
});

const clients = io.of('/client');
//CLIENTS
clients.on("connection", function (socket) {
    console.log('a client connected');


    var id = socket.id;
    id = id.substring(id.indexOf('#') + 1, id.length);

    socket.emit('id', id);
    users.push(id);

    socket.broadcast.emit('users changed', users);
    socket.emit('users changed', users);

    serverSockets.emit('users changed', users);

    socket.on('disconnect', function () {
        console.log('client disconnected');
        users.splice(users.indexOf(id), 1);
        socket.broadcast.emit('users changed', users);
        serverSockets.emit('users changed', users);
    });

    socket.on('orientation', function (msg) {
        //console.log(users);
        socket.broadcast.emit('others', msg);
        serverSockets.emit('orientation', msg);
    });
});

http.listen(3000, function () {
    console.log('listening on *:3000');
});
