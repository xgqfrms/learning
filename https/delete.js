
function foo(){
  delete x;
  let x;
}
// undefined

function bar() {
  delete y;
  const y;
}
// VM794:3 Uncaught SyntaxError: Missing initializer in const declaration
function bar() {
  delete y;
  const y="y";
}
// undefined


/*

delete 操作符从对象中删除一个属性。

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/delete

语法
delete expression

expression 应该是一个对象的属性引用，例如：

delete object.property

delete object['property']

参数

objectName
一个对象的名称，或评估为一个对象的一个表达式。
property
要删除的属性。
返回值

对于所有情况都是true，除非属性是一个自己的不可配置属性，在这种情况下，非严格模式返回 false
*/
