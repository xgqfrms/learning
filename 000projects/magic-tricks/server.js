// import dependencies
var HTTP = require('http');
var FS = require('fs');
var PATH = require('path');
var IO = require('socket.io');
var MOBILE_DETECT = require('mobile-detect');


// Create a simple web server for both pages (deck and table)
var server = HTTP.createServer(function (request, response) {

    // Serve different pages for Phone (deck) and Desktop/Tablet (table)
    var filePath = '.' + request.url;

    if (request.url === '/' || request.url.startsWith('/?')) {
        var md = new MOBILE_DETECT(request.headers['user-agent']);
        filePath = './' + (md.phone() ? 'deck.html' : 'table.html');
    }

    // Handle different file requests (just the required for this demo)
    var extname = PATH.extname(filePath);
    var contentType = 'text/html';

    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.png':
            contentType = 'image/png';
            break;      
        case '.svg':
            contentType = 'image/svg+xml';
            break;   
    }

    FS.readFile(filePath, function(error, content) {
        if (error) {
            console.log("Resource not found: " + filePath + " from request: " + request.url );
            response.writeHead(404);
            response.end();
        } else {
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(content, 'utf-8');
        }
    });
});


// HTTP server will listen on port 8080
server.listen(8080);

console.log(`HTTP server is listening on port: 8080!`);

// create a WebSocket listener for the same server
var realtimeListener = IO.listen(server); 

// object to store table sockets
var tableSockets = {};

realtimeListener.on('connection', function (socket) {

    // receives a connect message from the card table
    socket.on("table-connect", function (tableId) {
        // ...  and stores the card table socket
        tableSockets[tableId] = socket;
        socket.tableId = tableId;
    });

    // receives a connect message from a phone
    socket.on("phone-connect", function (tableId) {
        var tableSocket = tableSockets[tableId];
        if (tableSocket) {
            // ... informs table that a phone has connected
            tableSocket.emit('phone-connect');
        }
    });

    // receives a move from a phone
    socket.on('phone-move', function (data) {
        var tableSocket = tableSockets[data.tableId];
        if (tableSocket) {
            // ... and forwards the current angle to the card table
            tableSocket.emit('phone-move', data.angle);
        }
    });

    // receives a throw card message from a phone
    socket.on('phone-throw-card', function (data) {
        var tableSocket = tableSockets[data.tableId];
        if (tableSocket) {
            // ... and forwards the data to the card table
            tableSocket.emit('phone-throw-card', data);
        }
    });

    // device disconnected
    socket.on('disconnect', function () {
        // if it's a table
        if(socket.tableId) {
            // remove table socket
            delete tableSockets[socket.tableId];
        }
    });
});
