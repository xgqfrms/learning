/*

https://gist.github.com/xgqfrms-GitHub/9cef79afee86c8f8b5848d8931ab275d

<body>
    <p id="p1" draggable="true" ondragstart="dragstart_handler(event);">
        This element is draggable.
    </p>
</body>

*/



function dragstart_handler(ev) {
    console.log("dragStart");
    // Add the target element's id to the data transfer object
    ev.dataTransfer.setData("text/plain", ev.target.id);
}





function dragstart_handler(ev) {
    // Add the drag data
    ev.dataTransfer.setData("text/plain", ev.target.id);
    ev.dataTransfer.setData("text/html", "<p>Example paragraph</p>");
    ev.dataTransfer.setData("text/uri-list", "http://developer.mozilla.org");
}




function dragstart_handler(ev) {
    // Create an image and then use it for the drag image.
    // NOTE: change "example.gif" to an existing image or the image 
    // will not be created and the default drag image will be used.
    var img = new Image(); 
    img.src = 'example.gif'; 
    ev.dataTransfer.setDragImage(img, 10, 10);
}



function dragstart_handler(ev) {
    // Set the drag effect to copy
    ev.dataTransfer.dropEffect = "copy";
}



function dragover_handler(ev) {
    ev.preventDefault();
    // Set the dropEffect to move
    ev.dataTransfer.dropEffect = "move"
}

function drop_handler(ev) {
    ev.preventDefault();
    // Get the id of the target and add the moved element to the target's DOM
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}


/*

```html
    
<body>
    <div id="target" ondrop="drop_handler(event);" ondragover="dragover_handler(event);">
        Drop Zone
    </div>
</body>

```
*/


function dragstart_handler(ev) {
    // Add the target element's id to the data transfer object
    ev.dataTransfer.setData("text/plain", ev.target.id);
    ev.dropEffect = "move";
}

function dragover_handler(ev) {
    ev.preventDefault();
    // Set the dropEffect to move
    ev.dataTransfer.dropEffect = "move";
}

function drop_handler(ev) {
    ev.preventDefault();
    // Get the id of the target and add the moved element to the target's DOM
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}


/*


<body>
    <p id="p1" draggable="true" ondragstart="dragstart_handler(event);">
        This element is draggable.
    </p>
    <div id="target" ondrop="drop_handler(event);" ondragover="dragover_handler(event);">
        Drop Zone
    </div>
</body>

*/



# 7. 拖动结束

```js
    



```






















