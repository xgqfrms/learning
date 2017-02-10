// don't forget to include the client socket.io javascript file available here: http://socket.io/

var socket = io.connect(YOUR_NODEJS_SERVER_URL);
    
// register card table socket right after the connection is established
socket.emit('table-connect');

socket.on('phone-throw-card', function (cardData) {
    // Call animate card enter function here
});
