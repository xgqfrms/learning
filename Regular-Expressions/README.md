# Regular Expressions


> Regular Expressions Cheatsheet


https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet

```js
const log = console.log;

// a~z
const reg = /[a-z]/;

reg.test(`a`);
// true
reg.test(`z`);
// true

reg.test(`A`);
// false
reg.test(`Z`);
// false


```
