Function.prototype = {
    arguments: null,
    length: 0,
    call: function(){
        // secret code
    },
    apply: function(){
        // secret code
    }
    // ...
}


console.log(myObject.__proto__ === Function.prototype) // true


var myInstance = new myObject(“foo”);
console.log(myInstance.__proto__ === myObject.prototype); // true



// define the GameObject constructor function
var GameObject = function(width, height) {
    this.x = Math.floor((Math.random() * myCanvasWidth) + 1);
    this.y = Math.floor((Math.random() * myCanvasHeight) + 1);
    this.width = width;
    this.height = height;
    return this;
};
 
// (re)define the GameObject prototype object
GameObject.prototype = {
    x: 0,
    y: 0,
    width: 5,
    width: 5,
    draw: function() {
        myCanvasContext.fillRect(this.x, this.y, this.width, this.height);
    }
};


var x = 100,
arrayOfGameObjects = [];

do {
    arrayOfGameObjects.push(new GameObject(10, 10));
} while(x--);


var GameLoop = function() {
    for(gameObject in arrayOfGameObjects) {
        gameObject.draw();
    }
}; 





String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, ‘’);
};


if(!String.prototype.trim) {
    String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, ‘’);
    };
}







