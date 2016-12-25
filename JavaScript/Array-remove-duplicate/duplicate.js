// JavaScript数组去重 

let arr = [
    {
        name: 'Rosi',
        age: 26
    },
    {
        name: 'Reid',
        age: 24
    },
    {
        name: 'Morgan',
        age: 25
    },
    {
        name: 'Morgan',
        age: 28
    }
];


function removeDuplicates(myArr, prop) {
    return myArr.filter((obj, pos, arr) => {
        return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
    });
}

console.log(`${arr} + ${arr.length}`);

removeDuplicates(arr, 'name');

console.log(`${arr} + ${arr.length}`);










