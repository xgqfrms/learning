// import dependencies
var HTTP = require('http');
var IO = require('socket.io');

// Create a basic web server
var server = HTTP.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Websocket server is up and running!\n');
});

// HTTP server will listen on port 80
server.listen(80);
// create a WebSocket listener for the same server
var realtimeListener = IO.listen(server); 

// socket to the card table
var tableSocket;

realtimeListener.on('connection', function (socket) {
  
    // receives a connect message from the card table
    socket.on("table-connect", function () {
        // ...  and stores the card table socket
        tableSocket = socket;
    });

    // receives a throw card message from a phone
    socket.on('phone-throw-card', function (cardData) {
        if (tableSocket) {
            // ... and forwards the data to the card table
            tableSocket.emit('phone-throw-card', cardData);
        }
    });
});




