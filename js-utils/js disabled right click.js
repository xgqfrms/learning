
window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');

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
});
