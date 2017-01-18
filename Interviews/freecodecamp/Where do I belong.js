// Where do I belong

/*
findIndex === index

find === value

https://repl.it/FNFt/0

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex


https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find 

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/indexOf

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf



*/


function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  // sort
  // insert & get insert index
  // push === insert ???
  let n = num;
  arr.push(num);
  console.log(arr);
  arr.sort(function(a, b) {
    return a - b;
  });
  console.log(arr);
  function isEqual(x) {
     return x == n;
  }
  
  return arr.findIndex(isEqual);
// 50 is not a function
}

getIndexToIns([40, 60], 50);