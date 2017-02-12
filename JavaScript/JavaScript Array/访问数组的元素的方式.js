/*
## 访问数组的元素的方式

let objectsArr = [
    { "K1":"A1", "K2":"B1", "K3":"C1"}, 
    { "K1":"B2", "K2":"C2"}, 
    {"K1":"C3"}
];


1. arr[0]

2. arr[0].key

3. for of 


for( let item of objectsArr){
    console.log(item);
}

for( let item of objectsArr){
    console.log(item.K1);
}


*/

let objectsArr = [
    { "K1":"A1", "K2":"B1", "K3":"C1"}, 
    { "K1":"B2", "K2":"C2"}, 
    {"K1":"C3"}
];

for( let item of objectsArr){
    console.log(item);
}

// Object {K1: "A1", K2: "B1", K3: "C1"}
// Object {K1: "B2", K2: "C2"}
// Object {K1: "C3"}

for( let item of objectsArr){
    console.log(item.K1);
}

// A1
// B2
// C3












