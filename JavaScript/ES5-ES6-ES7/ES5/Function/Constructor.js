/*
函数定义 === functionName
函数调用 === functionName()


构造函数 === Constructor
构造函数调用创建一个新对象, 新对象从其构造函数继承属性和方法。

构造函数中的this关键字没有值。
这个值将是在调用函数时创建的新对象。
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
