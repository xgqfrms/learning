
var Person = {
    firstName: "Xray",
    lastName: "Smith",
    age: 17,
    eyeColor: "black",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

Person.fullName;
// 函数定义

Person.fullName();
// 函数调用

typeof(Person.fullName)
// "function"
typeof(Person.fullName())
// "string"


/*
函数定义 === functionName
函数调用 === functionName()
 */

function myFunction(arg1, arg2) {
    this.firstName = arg1;
    this.lastName  = arg2;
    this.fullName = function(){
        return arg1 + ", " + arg2; 
    };
    return fullName();
}

var f = new myFunction("John", "Doe");

f.fullName();
// 如果函数调用的前面是new关键字，它是一个构造函数调用。

typeof(f);
// "object"
typeof(f.fullName);
// "function"
typeof(f.fullName());
// "string"
typeof(f.firstName);
// "string"
typeof(f.lastName);
// "string"


