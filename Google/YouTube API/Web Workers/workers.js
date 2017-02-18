var myWorker = new Worker("my_task.js");

myWorker.onmessage = function (oEvent) {
    console.log("Called back by the worker!\n");
};





var myWorker = new Worker("my_task.js");

myWorker.addEventListener("message", function (oEvent) {
    console.log("Called back by the worker!\n");
}, false);

myWorker.postMessage(""); 
// start the worker.













