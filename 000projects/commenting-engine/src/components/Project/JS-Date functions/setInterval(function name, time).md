# setInterval(function name, time)



## setInterval(tick, 1000);

// function name() Error
setInterval(getTime(), 1000);

// function name OK
let time = setInterval(getTime, 1000);


********************************************************************


// G:\wwwRoot\learning\Front-End\React\React\components

function tick() {
    const localTime = new Date().toLocaleTimeString();
    console.log(`localTime = ${localTime}`);
    let clock = document.getElementById("clock");
    clock.innerHTML=`localTime = ${localTime}`;
}

setInterval(tick, 1000);


********************************************************************




