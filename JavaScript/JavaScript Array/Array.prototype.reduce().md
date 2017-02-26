# Array.prototype.reduce()


reduce() 方法对累加器和数组的每个值 (从左到右)应用一个函数，以将其减少为单个值。

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce#概述




let list1 = [[0, 1], [2, 3], [4, 5]];
​​​​​​​
let list2 = [0, [1, [2, [3, [4, [5, [6]]]]]]];

const flatten = arr => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);

flatten(list1); 
// [0, 1, 2, 3, 4, 5]

flatten(list2); 
// [ 0, 1, 2, 3, 4, 5, 6 ]





let sum = [0, 1, 2, 3].reduce(function(acc, val) {
  return acc + val;
}, 0);

console.log(sum);
// 6

let list1 = [[0, 1], [2, 3], [4, 5]];

let list2 = [0, [1, [2, [3, [4, [5, [6]]]]]]];

const flatten = (arr) => {
    return arr.reduce(
        (acc, val) => {
            return acc.concat(Array.isArray(val) ? flatten(val) : val)
        }, []
    );
};

flatten(list1); 
// [0, 1, 2, 3, 4, 5]

flatten(list2); 
// [ 0, 1, 2, 3, 4, 5, 6 ]


https://mdn.mozillademos.org/files/14569/Array.prototype.splice().png























