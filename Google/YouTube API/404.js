var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.codecademy.com/doesnt_exist", false);
xhr.send();
// Add your code below!
console.log(xhr.status);
console.log(xhr.statusText);
// 404
// Not Found


/*

Instructions
We've sent a GET request to a Codecademy page that doesn't exist! Call status on xhr and console.log this value so you can see the status code returned by the server. It should be the dreaded '404'!

*/
