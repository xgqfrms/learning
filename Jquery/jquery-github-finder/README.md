# Github Finder

Searches Github.com user profiles and displays profile info and the latest repositories

### Version
1.0.0

## Usage

Open index.html




https://github.com/settings/developers


https://developer.github.com/


https://developer.github.com/v3/oauth/




Client ID
08ecc2f68d922f18800e
Client Secret
5846d428b5340812b76c9637eceaee979340b922



https://github.com/xgqfrms007/gsa






document.querySelector("span.statcounter").style.display = "none";



window.onload = (function(){
    document.querySelector("span.statcounter").style.display = "none";
})();




window.onload = (function(){
    document.querySelector("span.statcounter").style.display = "none";
}());






requestAnimationFrame




https://www.paulirish.com/2011/requestanimationframe-for-smart-animating/


https://www.paulirish.com/2011/requestanimationframe-for-smart-animating/


http://caniuse.com/#feat=requestanimationframe

API allowing a more efficient way of running script-based animation, compared to traditional methods using timeouts. Also covers support for cancelAnimationFrame

Global 92.82%  +   0.17%   =   92.99%

https://html.spec.whatwg.org/multipage/webappapis.html#animation-frames






var sprites = {};
function loadMySprites() {
  var image = new Image();
  image.src = 'mysprites.png';
  var resolver;
  var promise = new Promise(function (arg) { resolver = arg });
  image.onload = function () {
    resolver(Promise.all(
      createImageBitmap(image,  0,  0, 40, 40).then(function (image) { sprites.woman = image }),
      createImageBitmap(image, 40,  0, 40, 40).then(function (image) { sprites.man   = image }),
      createImageBitmap(image, 80,  0, 40, 40).then(function (image) { sprites.tree  = image }),
      createImageBitmap(image,  0, 40, 40, 40).then(function (image) { sprites.hut   = image }),
      createImageBitmap(image, 40, 40, 40, 40).then(function (image) { sprites.apple = image }),
      createImageBitmap(image, 80, 40, 40, 40).then(function (image) { sprites.snake = image }),
    ));
  };
  return promise;
}

function runDemo() {
  var canvas = document.querySelector('canvas#demo');
  var context = canvas.getContext('2d');
  context.drawImage(sprites.tree, 30, 10);
  context.drawImage(sprites.snake, 70, 10);
}

loadMySprites().then(runDemo);





http://www.javascriptkit.com/javatutors/requestanimationframe.shtml


https://www.w3.org/TR/animation-timing/


https://code.facebook.com/posts/895897210527114/dive-into-react-native-performance/


https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame











