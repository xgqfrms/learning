# js utils

## js & disabled right click

```js
  document.body.oncontextmenu = 
  document.body.ondragstart = 
  document.body.onselectstart = 
  document.body.onbeforecopy = function() {
    return false;
  };

  document.body.onselect = 
  document.body.oncopy = 
  document.body.onmouseup = function() {
    document.selection.empty();
  };
  

```

https://www.cnblogs.com/xgqfrms/p/12275284.html
