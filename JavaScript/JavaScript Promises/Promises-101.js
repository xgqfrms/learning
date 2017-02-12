// Promises 101


/*

A JavaScript Promise represents the result of an operation that hasn't been completed yet, but will at some undetermined point in the future.

JavaScript承诺表示尚未完成但在未来某个未确定点的操作的结果。

*/


// callback hell 回调地狱



doSomething(function(responseOne) {  
    doSomethingElse(responseOne, function(responseTwo, err) {
        if (err) { handleError(err); }
        doMoreStuff(responseTwo, function(responseThree, err) {
            if (err) { handleAnotherError(err); }
            doFinalThing(responseThree, function(err) {
                if (err) { handleAnotherError(err); }
                // Complete
            }); // end doFinalThing
        }); // end doMoreStuff
    }); // end doSomethingElse
}); // end doSomething


// LIFO (last in, first out). 
// LIFO 后进先出

// https://en.wikipedia.org/wiki/Stack_(abstract_data_type)

// FIFO : First In, First Out，
// FIFO 先进先出


/*
callback :

step 01 call nect function: 

1 Need next func> 2 Need next func > 3 

step 02 return result to callback:

3 first Done > 2 is Done > 1 last Done!

*/
























