// don't forget to include the client socket.io javascript file available here: http://socket.io/

var socket = io.connect(YOUR_NODEJS_SERVER_URL);
             
// function to be called to send the card to the table
function throwCard(cardData) {
  socket.emit('phone-throw-card', cardData);
}
