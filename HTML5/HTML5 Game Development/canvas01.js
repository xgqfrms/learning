/*

http://docs.webplatform.org/apis/canvas/CanvasRenderingContext2D/drawImage/



window.outerWidth

window.outerHeight

alert(window.outerWidth);
// 1366
alert(window.outerHeight);




??? fullscreen 



window.innerWidth

window.innerHeight


alert(window.innerWidth);
// 1366
alert(window.innerHeight);
// 



http://docs.webplatform.org/apis/canvas/CanvasRenderingContext2D/drawImage/

var object = object.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);


Coordinate systems

https://classroom.udacity.com/media/img/gamedev/robowalk/robowalk00.png



https://www.w3.org/TR/2dcontext/#drawing-images-to-the-canvas




https://www.w3.org/TR/2dcontext/

HTML Canvas 2D Context
W3C Recommendation 19 November 2015


*/
let canvas = null;
let ctx, img;

let assets = ['imgs'];
// json ??? 
// https://github.com/kbalonek/udacity-html5-game/tree/master/media/img/gamedev/robowalk
// https://github.com/cdutson/HTML5-Game-Dev

var assets = ['/media/img/gamedev/robowalk/robowalk00.png',
              '/media/img/gamedev/robowalk/robowalk01.png',
              '/media/img/gamedev/robowalk/robowalk02.png',
              '/media/img/gamedev/robowalk/robowalk03.png',
              '/media/img/gamedev/robowalk/robowalk04.png',
              '/media/img/gamedev/robowalk/robowalk05.png',
              '/media/img/gamedev/robowalk/robowalk06.png',
              '/media/img/gamedev/robowalk/robowalk07.png',
              '/media/img/gamedev/robowalk/robowalk08.png',
              '/media/img/gamedev/robowalk/robowalk09.png',
              '/media/img/gamedev/robowalk/robowalk10.png',
              '/media/img/gamedev/robowalk/robowalk11.png',
              '/media/img/gamedev/robowalk/robowalk12.png',
              '/media/img/gamedev/robowalk/robowalk13.png',
              '/media/img/gamedev/robowalk/robowalk14.png',
              '/media/img/gamedev/robowalk/robowalk15.png',
              '/media/img/gamedev/robowalk/robowalk16.png',
              '/media/img/gamedev/robowalk/robowalk17.png',
              '/media/img/gamedev/robowalk/robowalk18.png'
             ];

let frame = 0;
let frameRate = 1000/30;
// 1000/60 == 16ms

let frames = [];



const onImageLoaded = () => {
    console.log("images loaded!");
    ctx.drawImage(img, 0, 0, 100, 100, 0, 0, );
}




let setup = () => {
    canvas = document.getElementById('can');
    canvas.width = window.innerWidth;
    // window.innerWidth
    canvas.height = window.innerHeight;
    // window.innerHeight
    ctx = canvas.getContext('2d');
    for (var i = assets.length - 1; i >= 0; i--) {
        frames.push(new Image());
        frames[i].src = assets[i];
        frames[i].onload = onImageLoaded;
    }
    setInterval(animate, frameRate);

    // body.appendChild(canvas);
    img = new Image();
    img.onload = onImageLoaded;
    img.src = "https://cdn.xgqfrms.xyz/logo/icon.png";
};



let animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(frames[frame], 100, 100);
    frame = (frame + 1) % frames.length;
};


// We'll call your setup function in our test code, so
// don't call it in your code.
setup();

