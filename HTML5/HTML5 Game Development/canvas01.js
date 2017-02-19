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


*/
let canvas = null;
let ctx, img;

let setup = () => {
    canvas = document.getElementById('can');
    canvas.width = window.innerWidth;
    // window.innerWidth
    canvas.height = window.innerHeight;
    // window.innerHeight
    ctx = canvas.getContext('2d');
    img = new Image();
    img.onload = onImageLoaded;
    img.src = "https://cdn.xgqfrms.xyz/logo/icon.png";
};


const onImageLoaded = () => {
    console.log("images loaded!");
    ctx.drawImage(img, 0, 0, 100, 100);
}
// We'll call your setup function in our test code, so
// don't call it in your code.
setup();

