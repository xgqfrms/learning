/*

https://repl.it/FMdx/0
https://repl.it/FMdx/2
https://repl.it/FMdx/3

https://www.freecodecamp.com/challenges/slasher-flick

*/



function slasher(arr, howMany) {
    // it doesn't always pay to be first
    // var temp = arr.slice(0,howMany);
    //  console.log("temp = " + temp);
    arr.splice(0,howMany);
    return arr;
}

slasher([1, 2, 3], 2);