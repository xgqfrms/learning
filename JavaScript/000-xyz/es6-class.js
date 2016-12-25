let Person = function(name){
    this.name = name;
}

Person.prototype.registerSayHello = function() {
    document.getElementById('someButton').addEventListener('click', () => {
        console.log('Hi, I am a '+ this + ' and my name is ' + this.name + '!');
        console.log(this.length);
        console.log(this.attributes);
        console.log(this);
        console.log(typeof(this));
    });
};

/*
Arrow function 

*/

/*
Person.prototype.newSayHello = function() {
    document.getElementById('newBtn').addEventListener('click', function() {
        console.log('Hi, I am a '+ this + ' and my name is ' + this.name + '!');
        console.log(this.attributes);
        console.log(this);
    });
};
*/

Person.prototype.newSayHello = function(id) {
    document.getElementById(id).addEventListener('click', function() {
        console.log('Hi, I am a '+ this + ' and my name is ' + this.name + '!');
        console.log(this.length);
        console.log(this.attributes);
        console.log(this);
        console.log(typeof(this));
    });
};

/*
IIFE isn't work rightly!

Person.prototype.newSayHello = function(id) {
    document.getElementById(id).addEventListener('click', (function() {
        console.log('Hi, I am a '+ this + ' and my name is ' + this.name + '!');
        console.log(this.attributes);
        console.log(this);
    }()));
};

Person.prototype.newSayHello = function(id) {
    document.getElementById(id).addEventListener('click', (function() {
        console.log('Hi, I am a '+ this + ' and my name is ' + this.name + '!');
        console.log(this.attributes);
        console.log(this);
    })());
};

*/

var p = new Person('xgqfrms');

p.registerSayHello();

p.newSayHello('newBtn');

// document.getElementById('someButton').click();










