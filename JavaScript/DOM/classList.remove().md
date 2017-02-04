# .classList.remove()  







function hide(){
    // var hl = document.getElementById('hl');
    // hl.style.display = "none";
    var hideLoad = document.getElementById('hideLoad');
    var state = "showTure";
    if (state === "showTure") {
        hideLoad.classList.remove('showTure');
        hideLoad.classList.add("hidenTure");
        console.log(`state = "showTure"`);
        hideLoad.style.display = "none";
        // ??? .classList bugs ??? 
    } else {
        //state = "showTure";
        console.log(`state = "hidenTure"`);
    }
}





















