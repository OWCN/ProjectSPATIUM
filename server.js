var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(8000, function(){
  console.log('Now listening...');
});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/js/client_world.js', function(req, res){
    res.sendFile(__dirname + '/js/client_world.js');
});

io.on('connection', function(socket){
    console.log("A user connected.");

    socket.on('Join room', function (room) {
        onJoinRoom(room);
    });

    socket.on('disconnect', function () {
        console.log("A user disconnected.");
    });
});
