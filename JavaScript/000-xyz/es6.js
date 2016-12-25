var Person = function(name){
    this.name = name;
}

Person.prototype.registerSayHello = function(id) {
    document.getElementById(id).addEventListener('click', function() {
        console.log('Hi, I am a '+ this + ' and my name is ' + this.name + '!');
        console.log(this.attributes);
        console.log(this);
    });
};

var p = new Person('xgqfrms');

p.registerSayHello('someButton');


// document.getElementById('someButton').click();










