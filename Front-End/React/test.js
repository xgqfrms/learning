
var a = 10;

function test(){
    console.log(a);
    a = 100;
    console.log(this.a);
    console.log(a);
    var a;
    console.log(a);
}
test();



function test(){
    var a;
    console.log(a);//undefined
    a = 100;
    console.log(this.a);//10
    console.log(this);
    console.log(a);//100
    console.log(a);//100
}

