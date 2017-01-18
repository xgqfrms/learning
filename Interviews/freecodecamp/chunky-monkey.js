/*
https://www.freecodecamp.com/challenges/chunky-monkey

https://repl.it/FM2r/0
https://repl.it/FM2r/2

*/



function chunkArrayInGroups(arr, size) { // 4, 5
    const arrLength = arr.length;
    console.log("arr.length = " + arrLength);

    let num = Math.floor(arrLength / size); // 2, 2
    let left = arrLength % size; // 0, 1
    console.log("num = " + num);
    console.log("left = " + left);

    let newArrLength = 0;
    if (left === 0) {
        newArrLength = num; // 2
    } else {
        newArrLength = num + 1; // 3
    }
    console.log("newArrLength = " + newArrLength);

    let newArr = [];
    for (let i = 0; i < arrLength; i++) {
        let temp = [];
        temp.push(arr.slice(i, newArrLength));
        console.log(`\n temp[${i}] = ${temp[i]}`);
        for (let j = 0; j < newArrLength; j++) {
            temp.push(arr.slice(i, i + 1));
            console.log(`\n temp[${j}] = ${temp[j]}`);
            newArr[j] = temp[j];
            console.log(`newArr[${j}] = ${newArr[j]}`);
        }
        console.log("newArr = " + newArr);
    }
    return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2); // 2

// [["a", "b"], ["c", "d"]]


chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3); // 3

// [[0, 1, 2], [3, 4, 5], [6]]


chunkArrayInGroups([0, 1, 2, 3, 4], 3); // 2

// [[0, 1, 2], [3, 4]]
