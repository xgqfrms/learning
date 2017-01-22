window.onload = function() {
	fnAddMenuEvent();
}


function fnAddMenuEvent() {
	var oMenu = document.getElementById('ul_nav');
	var ao = oMenu.getElementsByTagName('h3');
	var o;
	var bIE6 = window.navigator.userAgent.toLowerCase().indexOf('msie 6.')>=0;
	for (var i=0; i<ao.length; i++) {
		o = ao[i].getElementsByTagName('span')[0];
		if (o) {
			o.onclick = fnSetMenu;
			if (bIE6) {
				o.onmouseover = fnSetHover;
				o.onmouseout = fnClrHover;
			}
		}
	}
	function fnSetMenu() {
		var s;
		var oMenuItem = this.parentNode.parentNode;
		if (oMenuItem.nodeName.toLowerCase() == 'li') {
			s = oMenuItem.className.slice(1);
			if (oMenu.className == 'c'+s) {
				oMenu.className = '';
			} else {
				oMenu.className = 'c' + s;
				//alert(oMenu.className);
			}
		}
		return false;
	}
}
function fnSetHover() {
	this.className = 'hover';
}
function fnClrHover() {
	this.className = '';
}
