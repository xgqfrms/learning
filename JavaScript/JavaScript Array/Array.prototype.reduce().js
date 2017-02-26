/*
Array.prototype.reduce()
*/


/*

let list1 = [[0, 1], [2, 3], [4, 5]];
​​​​​​​
let list2 = [0, [1, [2, [3, [4, [5, [6]]]]]]];

const flatten = arr => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);

flatten(list1); 
// [0, 1, 2, 3, 4, 5]

flatten(list2); 
// [ 0, 1, 2, 3, 4, 5, 6 ]

*/


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
















