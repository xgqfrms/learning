

function xhrGet(reqUri,callback) {
	var xhr = new XMLHttpRequest();

	xhr.open("GET", reqUri, true);
	xhr.onload = callback;

	xhr.send();
}

