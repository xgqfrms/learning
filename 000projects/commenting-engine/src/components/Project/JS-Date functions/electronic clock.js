function tick() {
    const localTime = new Date().toLocaleTimeString();
    console.log(`localTime = ${localTime}`);
    let clock = document.getElementById("clock");
    clock.innerHTML=`localTime = ${localTime}`;
}


setInterval(tick, 1000);
