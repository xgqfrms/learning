// copyRightYear

const copyRightYear = () => {
    let copyYear=Symbol();
    copyYear=new Date().getFullYear();
    // const spanYear=document.getElementById('spanYear');
    const body = document.querySelector('body');
    const reference = body.lastChild;
    const footer = document.createElement('footer');
    footer.id = "foo";
    footer.style.background = "rgba(0,0,0,0.7)";
    footer.style.color = "rgba(0,255,0,0.7)";
    footer.style.textAlign = "center";
    let fullYear = `Copyright © 2012 - ${copyYear} ❤️ xgqfrms `;
    footer.innerText = `${fullYear}`;

    // let fullYear = `<mark>Copyright &copy; 2012 - ${copyYear} ❤️ xgqfrms </mark>`;
    // footer.innerText = `<div>${fullYear}</div>`;

    return body.insertBefore(footer, reference);
    // return body.innerHTML = footer;
    // return body.innerHTML = `<div>${fullYear}</div>`;
    // return body.insertBefore = `<div>${fullYear}</div>`;
    //return body.append = `<div>${fullYear}</div>`
    //return body.appendChild = `<div>${fullYear}</div>`;
}
window.onload = copyRightYear();

/*const copyRightYear = () => {
    let copyYear=Symbol();
    copyYear=new Date().getFullYear();
    // const spanYear=document.getElementById('spanYear');
    const body = document.querySelector('body');
    const reference = body.lastChild;
    const footer = document.createElement('footer');

    let fullYear = `<mark>Copyright &copy; 2012 - ${copyYear} ❤️ xgqfrms </mark>`;
    footer.innerText = `<div>${fullYear}</div>`;

    return body.insertBefore(footer, reference);
    // return body.innerHTML = footer;
    // return body.innerHTML = `<div>${fullYear}</div>`;
    // return body.insertBefore = `<div>${fullYear}</div>`;
    //return body.append = `<div>${fullYear}</div>`
    //return body.appendChild = `<div>${fullYear}</div>`;
}
window.onload = copyRightYear();*/


// var newElement = document.createElement("div");


/*


// Get a reference to the element in which we want to insert a new node
var parentElement = document.getElementById('parentElement');
// Get a reference to the first child
var theFirstChild = parentElement.firstChild;

// Create a new element
var newElement = document.createElement("div");

// Insert the new element before the first child
parentElement.insertBefore(newElement, theFirstChild);



body.lastChild

body.firstChild
 
body.firstElementChild

body.lastElementChild


https://www.w3.org/TR/dom/#dom-node-insertbefore

*/


/*
appendChild
append


Node.appendChild()
Node.insertBefore()

Node.removeChild()
Node.replaceChild()
Node.insertBefore()
Node.hasChildNodes()




ParentNode.prepend()
ParentNode.append()



FormData.append()



https://developer.mozilla.org/en-US/docs/Web/API/FormData/append


https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/prepend
https://developer.mozilla.org/zh-CN/docs/Web/API/ParentNode/append




https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore
https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild

https://developer.mozilla.org/en-US/docs/Web/API/Node

*/





