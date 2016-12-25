var Person = function(name){
    this.name = name;
}

Person.prototype.registerSayHello = function() {
    document.getElementById('someButton').addEventListener('click', function() {
        console.log('Hi, I am a '+ this + ' and my name is ' + this.name + '!');
        // console.log(this.attributes);
        // console.log(this);
    });
};


Person.prototype.newSayHello = function(id) {
    document.getElementById(id).addEventListener('click', function() {
        console.log('Hi, I am a '+ this + ' and my name is ' + this.name + '!');
        console.log(this.attributes);
        console.log(this);
    });
};
 

var p = new Person('xgqfrms');

p.registerSayHello();

p.newSayHello('newBtn');

// document.getElementById('someButton').click();










