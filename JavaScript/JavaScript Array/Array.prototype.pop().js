// Array.prototype.pop()

let myFish = ["angel", "clown", "mandarin", "surgeon"];

let popped = myFish.pop();

console.log(myFish); 
// ["angel", "clown", "mandarin"]

console.log(popped); 
// surgeon



let multiArr = [["A1", "B1", "C1"], ["B2", "C2"], ["C3"]];


let poppedArr = multiArr.pop();

console.log(multiArr); 
// [Array[3], Array[2]]

console.log(poppedArr); 
// ["C3"]


Array[2]
    0:Array[3]
        0:"A1"
        1:"B1"
        2:"C1"
        length:3
        __proto__:Array[0]
    1:Array[2]
        0:"B2"
        1:"C2"
        length:2
        __proto__:Array[0]
    length:2
    __proto__:Array[0]





let objectArr = [{ "K1":"A1", "K2":"B1", "K3":"C1"}, { "K1":"B2", "K2":"C2"}, {"K1":"C3"}];

let popOA = objectArr.pop();

for( let item of objectArr){
    console.log(item);
}

// Object {K1: "A1", K2: "B1", K3: "C1"}

// Object {K1: "B2", K2: "C2"}

// Object {K1: "C3"}


objectArr[0]
// Object {K1: "A1", K2: "B1", K3: "C1"}


objectArr[0][0]
// undefined

objectArr[0].K1
// "A1"










let arrObject = {"K1":["A1", "B1", "C1"], "K2":["B2", "C2"], "K3":["C3"]};

let popAO = arrObject.pop();

// Uncaught TypeError: arrObject.pop is not a function
// Object not have the pop() function

arrObject[0];
// undefined

arrObject.K1
// ["A1", "B1", "C1"]

arrObject[0][0];
// Uncaught TypeError: Cannot read property '0' of undefined


for( let item of arrObject){
    console.log(item);
}





