// arguments.callee



setTimeout(function(){
    //取出下一个条目并处理
    var item = array.shift();
    process(item);
    //若还有条目，再设置另一个定时器
    if(array.length > 0){
        setTimeout(arguments.callee, 100);
    }
}, 100);


// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments/callee

function factorial (n) {
    return !(n > 1) ? 1 : factorial(n - 1) * n;
};

[1,2,3,4,5].map(factorial);


[1,2,3,4,5].map(function (n) {
    return !(n > 1) ? 1 : /* what goes here? */ (n - 1) * n;
});


[1,2,3,4,5].map(function (n) {
    return !(n > 1) ? 1 : arguments.callee(n - 1) * n;
});





