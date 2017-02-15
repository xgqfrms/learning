const setTime = () => {
    let current = new Date();
    let now = current.getTime();
    if (now < 1487610000000) {
        document.getElementById('one').style.display = 'block';
        document.getElementById('two').style.display = 'none';
        document.getElementById('three').style.display = 'block';
        document.getElementById('four').style.display = 'block';
    } else if (now > 1487610000000) {
        document.getElementById('two').style.display = 'block';
        document.getElementById('one').style.display = 'none';
        document.getElementById('three').style.display = 'block';
        document.getElementById('four').style.display = 'block';
    }
}

// let id = "";
const getID = (id) => {
    return document.getElementById(id);
}


let one = getID('one');









