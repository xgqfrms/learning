# Object.assign()



Object.assign() 方法用于将所有可枚举的属性的值从一个或多个源对象复制到目标对象。
它将返回目标对象。


Object.assign(target, ...sources)


如果目标对象中的属性具有相同的键，则属性将被源中的属性覆盖。
后来的源的属性将类似地覆盖早先的属性。




https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign


http://www.ecma-international.org/ecma-262/6.0/#sec-object.assign


https://googlechrome.github.io/samples/object-assign-es6/



```js

{"name":"Tony","lastName":"Stark"}
{"name":"Tony","lastName":"Stark"}
{"foo":0,"bar":1,"baz":2}
{"foo":2}
{"person":"Thor Odinson"}
{"name":"Tony","lastName":"Stark"}
{"name":"Tony","lastName":"Stark"}




'use strict';

// Merge an object
let first = {name: 'Tony'};
let last = {lastName: 'Stark'};
let person = Object.assign(first, last);
ChromeSamples.log(person);
// {name: 'Tony', lastName: 'Stark'}
ChromeSamples.log(first);
// first = {name: 'Tony', lastName: 'Stark'} as the target also changed

// Merge multiple sources
let a = Object.assign({foo: 0}, {bar: 1}, {baz: 2});
ChromeSamples.log(a);
// {foo: 0, bar: 1, baz: 2}

// Merge and overwrite equal keys
let b = Object.assign({foo: 0}, {foo: 1}, {foo: 2});
ChromeSamples.log(b);
// {foo: 2}

// Clone an object
let obj = {person: 'Thor Odinson'};
let clone = Object.assign({}, obj);
ChromeSamples.log(clone);
// {person: 'Thor Odinson'}

``` 








https://googlechrome.github.io/samples/object-assign-es6/


http://www.2ality.com/2014/01/object-assign.html

https://github.com/sindresorhus/object-assign


https://www.npmjs.com/package/object-assign



https://www.npmjs.com/package/es6-object-assign


## Angular 2 


https://ultimateangular.com/


https://github.com/ultimateangular

https://github.com/UltimateAngular/angular-pro-src



https://medium.com/statuscode/functional-programming-for-the-dysfunctional-756531f5b9b4#.f4i6oar07



https://ultimateangular.com/typescript-fundamentals


https://ultimateangular.com/angular-2-fundamentals






http://www.2ality.com/2014/01/object-assign.html

http://www.2ality.com/2014/12/es6-oop.html

http://www.2ality.com/search/label/javascript




## redux & Object.assign()

http://redux.js.org/docs/recipes/UsingObjectSpreadOperator.html



https://egghead.io/lessons/javascript-redux-avoiding-object-mutations-with-object-assign-and-spread




```js

function todoApp(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      })
    default:
      return state
  }
}

``` 











js sort algorithm





















