# WebSockets  



## Making Magic with WebSockets and CSS3


https://medium.com/outsystems-engineering/making-magic-with-websockets-and-css3-ec22c1dcc8a8

https://www.outsystems.com/blog/2016/10/outsystems-wins-hackathon.html  
https://www.outsystems.com/home/Signup.GetStarted.aspx  


There are two main factors in this interaction: real-time communication with WebSockets and optical illusions with CSS3. 




<div style='position:relative;padding-bottom:57%'>
    <iframe src='https://gfycat.com/ifr/DefiantAdventurousCamel' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe>
</div>


https://gist.githubusercontent.com/heliodolores/e0900818fc103ab3ff6979fb1f27e199/raw/7d3899f2ab1e2172fd370d2bd05c69756c925900/NodeServerExample.js


https://github.com/heliodolores/magic-tricks-example





## Socket.IO

http://socket.io/  
https://github.com/socketio/socket.io  
http://socket.io/get-started/chat/  



$ npm install socket.io

// $ npm init -y

$ npm i -S socket.io


// $ npm i -S express






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





## Smooth as Butter: Achieving 60 FPS Animations with CSS3

https://medium.com/outsystems-experts/how-to-achieve-60-fps-animations-with-css3-db7b98610108#.gye3k9lwr


## Making Magic with WebSockets and CSS3

https://medium.com/outsystems-engineering/making-magic-with-websockets-and-css3-ec22c1dcc8a8#.epq93f65h

https://www.outsystems.com/blog/2016/10/outsystems-wins-hackathon.html





https://developer.mozilla.org/en-US/docs/Web/API/Detecting_device_orientation

















https://www.viget.com/articles/ensuring-css-animations-run-and-stop-gracefully?utm_campaign=Issue-248&utm_medium=email&utm_source=CSS-Weekly



https://medium.com/@evejweinberg/web-animation-everything-you-need-to-know-in-too-much-detail-91bf5d48f980#.8gfujfcji



https://robots.thoughtbot.com/css-animation-for-beginners?utm_campaign=Revue%20newsletter&utm_medium=Newsletter&utm_source=revue


https://journal.helabs.com/pocket-guide-to-css-only-drawings-and-animations-781470436ecc#.jlfs37l3v



https://scotch.io/tutorials/building-a-morphing-hamburger-menu-with-css?utm_campaign=Issue-250&utm_medium=email&utm_source=CSS-Weekly


https://medium.com/outsystems-experts/how-to-achieve-60-fps-animations-with-css3-db7b98610108#.gye3k9lwr





https://scotch.io/tutorials/whats-new-in-expressjs-5-0














