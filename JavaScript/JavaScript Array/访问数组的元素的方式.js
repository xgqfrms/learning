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



/*




二维数组

let tda = [["value01",{"key11":"value11", "key12":"value12"}],["value02",{"key21":"value21","key22":"value22"}]];

tda;
// [Array[2], Array[2]]

tda[0];
// ["value01", Object]

tda[0][0];
// "value01"

tda[0][1].key11;
// "value11"

tda[0][1].key12;
// "value12"



*/






