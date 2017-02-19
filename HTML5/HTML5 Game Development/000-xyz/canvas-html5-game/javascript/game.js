var canvas = null;
var ctx = null;
var img = null;

var framerate = 1000/30;
var frame = 0;
var assets = ['media/img/gamedev/robowalk/robowalk00.png',
              'media/img/gamedev/robowalk/robowalk01.png',
              'media/img/gamedev/robowalk/robowalk02.png',
              'media/img/gamedev/robowalk/robowalk03.png',
              'media/img/gamedev/robowalk/robowalk04.png',
              'media/img/gamedev/robowalk/robowalk05.png',
              'media/img/gamedev/robowalk/robowalk06.png',
              'media/img/gamedev/robowalk/robowalk07.png',
              'media/img/gamedev/robowalk/robowalk08.png',
              'media/img/gamedev/robowalk/robowalk09.png',
              'media/img/gamedev/robowalk/robowalk10.png',
              'media/img/gamedev/robowalk/robowalk11.png',
              'media/img/gamedev/robowalk/robowalk12.png',
              'media/img/gamedev/robowalk/robowalk13.png',
              'media/img/gamedev/robowalk/robowalk14.png',
              'media/img/gamedev/robowalk/robowalk15.png',
              'media/img/gamedev/robowalk/robowalk16.png',
              'media/img/gamedev/robowalk/robowalk17.png',
              'media/img/gamedev/robowalk/robowalk18.png'
             ];
var frames = [];

var setup = function() {
    
    canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx = canvas.getContext('2d');

   
    
    // Load each image URL from the assets array into the frames array 
    // in the correct order.
    // Afterwards, call setInterval to run at a framerate of 30 frames 
    // per second, calling the animate function each time.
    for (var i=0; i<assets.length; i++) {
    frames.push(loadImage(assets[i]));
    }
    var body = document.getElementById('body');
    body.appendChild(canvas);
 
    setInterval( animate, 1000/30);
};

var loadImage = function(url){
    var img = new Image();
    //  img.onload = function(){
    //  onImageLoad();
    //};
    img.src = url;
    return img;
};

var animate = function(){
    // Draw each frame in order, looping back around to the 
    // beginning of the animation once you reach the end.
    
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.drawImage(frames[frame], 192, 192);
    frame = (frame + 1) % frames.length
};

setup();
