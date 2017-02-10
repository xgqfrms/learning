# WebSockets  



## Making Magic with WebSockets and CSS3


https://www.outsystems.com/blog/2016/10/outsystems-wins-hackathon.html  
https://www.outsystems.com/home/Signup.GetStarted.aspx  


There are two main factors in this interaction: real-time communication with WebSockets and optical illusions with CSS3. 




<div style='position:relative;padding-bottom:57%'>
    <iframe src='https://gfycat.com/ifr/DefiantAdventurousCamel' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe>
</div>


https://gist.githubusercontent.com/heliodolores/e0900818fc103ab3ff6979fb1f27e199/raw/7d3899f2ab1e2172fd370d2bd05c69756c925900/NodeServerExample.js


https://github.com/heliodolores/magic-tricks-example




http://socket.io/  
https://github.com/socketio/socket.io  


For this example, I used a library called socket.io. This library does more than just simplify the way I deal with WebSockets. It also creates a nice fallback for older versions of browsers that do not support the WebSocket protocol.


对于这个例子，我使用了一个名为socket.io的库。这个库不仅仅简化我处理WebSockets的方式。它还为不支持WebSocket协议的旧版本的浏览器创建了一个很好的后备。




// don't forget to include the client socket.io javascript file available here: http://socket.io/

var socket = io.connect(YOUR_NODEJS_SERVER_URL);

// function to be called to send the card to the table
function throwCard(cardData) {
    socket.emit('phone-throw-card', cardData);
}


// don't forget to include the client socket.io javascript file available here: http://socket.io/

var socket = io.connect(YOUR_NODEJS_SERVER_URL);
    
// register card table socket right after the connection is established
socket.emit('table-connect');

socket.on('phone-throw-card', function (cardData) {
    // Call animate card enter function here
});



## Optical Illusions with CSS3  















## webGL

http://blingbling.money

http://www.kilokilo.agency/en/motion








footer.code {
    background-image: linear-gradient(50deg, #00ffff, #7d81ff);
}


footer {
    position: relative;
    width: 100%;
    overflow: hidden;
    background: white;
}

* {
    box-sizing: border-box;
}

article, aside, footer, header, hgroup, main, nav, section {
    display: block;
}

















