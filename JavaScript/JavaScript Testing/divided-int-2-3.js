/*

http://www.qlcoder.com/task/751e

http://www.qlcoder.com/explore

第2333个能被2或者被3整除的正整数是多少?

被2或者被3整除的正整数依次是：2,3,4,6,8,9,10,12,14,15,16,18…。

*/

let div_23 = (n) => {
    for( item of items){
        // iterator 迭代器
    }
}

const n = 2333;
const m = 100000;

let div_23 = (n, m) => {
    let sum = 0;
    let i = 1;
    // console.log(`i= ${i}`);
    // console.log(`sum= ${sum}`);
    for(i; i < m; i++){
        //console.log(`i= ${i}`);
        if ((i % 2 == 0) || (i % 3 == 0)) {
            // console.log(`i= ${i}`);
            sum++;
            if(sum === n){
                console.log(`第2333个能被2或者被3整除的正整数是: ${i}`);
            }
        }
    }
}

div_23(n, m);
// 3500
// 第2333个能被2或者被3整除的正整数是: 3500




const n = 2333;
const m = 10000;

let div_23 = (n, m) => {
    let sum = 0;
    let i = 1;
    // console.log(`i= ${i}`);
    // console.log(`sum= ${sum}`);
    for(i; i < m; i++){
        //console.log(`i= ${i}`);
        if ((i % 2 == 0) || (i % 3 == 0)) {
            // console.log(`i= ${i}`);
            sum++;
            if(sum === n){
                console.log(`第2333个能被2或者被3整除的正整数是: ${i}`);
            }
        }
    }
}

div_23(n, m);
// 第2333个能被2或者被3整除的正整数是: 3500
