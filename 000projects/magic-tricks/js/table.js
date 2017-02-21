// CHANGE THE SERVER URL WITH INTERNAL NETWORK PUBLIC ADDRESS
var serverURL = "192.168.2.101:8080";
var tableId = generateID();
var idCounter = 0;


// on ready
document.addEventListener( 'DOMContentLoaded', function () {

    // connect to websocket server
    var socket = io.connect(serverURL);

    // register card table socket
    socket.emit('table-connect', tableId);

    // listen to phone movements
    socket.on('phone-move', phoneMoved);

    // listen to phone connections
    socket.on('phone-connect', phoneConnected);

    // listen to card arrivals
    socket.on('phone-throw-card', throwCard);

    // set the qrcode
    qrCodeGenerator("http://" + serverURL + "/?id=" + tableId, "placeholder");

    // and the URL
    document.getElementById("url").innerHTML = "http://" + serverURL + "/?id=" + tableId;

}, false);


// CALLBACK FUNCTIONS

function phoneMoved(angle) {
    // change angle of the phone direction indicator
    var path = document.querySelector("#phone-move.path");
    path.style = `transform: rotate(${angle}deg)`;
}

function throwCard(card) {
    // add card to table
    var cardid = "card" + idCounter++;
    addCard(cardid, card.angle, card.suit, card.rank);    

    // little hack to trigger the animation
    setTimeout(function () {
        var cardElement = document.getElementById(cardid);
        // add 'thrown' class to start animation
        cardElement.className += " thrown";
        // set thrown strength
        cardElement.style = "transform: translateY(" + (100 - card.strength) + "vh) scale(1)";
    }, 100);
}

function phoneConnected() {
    // remove banner when a phone connects
    document.getElementById("waiting-for-device").remove();
}


// AUX METHODS

function addCard(id, angle, suit, rank) {
    // inject card html to the page body
    document.body.innerHTML += 
        `<div class="path" style="transform: rotate(${angle}deg)">
            <div id="${id}" class="card ${suit} rank${rank}">
                <div class="face"/>
            </div>
        </div>`;
}

function qrCodeGenerator(value, elementid) {
    // generates a qrcode based on a value inside an html element
    var qr = qrcode(4, 'L');
    qr.addData(value);
    qr.make();
    document.getElementById(elementid).innerHTML = qr.createImgTag(4,16);
}

function generateID(){
    // generate random 5 character id for the session
    var d = new Date().getTime();
    if(window.performance && typeof window.performance.now === "function"){
        d += performance.now();
    }
    var uuid = 'xxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
}