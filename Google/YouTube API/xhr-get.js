var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.codecademy.com/", false);
xhr.send();

console.log(xhr.status);
console.log(xhr.statusText);

/*

Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. 

For more help, check https://xhr.spec.whatwg.org/.

*/
/*


The Four Verbs

The number of HTTP methods you'll use is quite small—there are just four HTTP "verbs" you'll need to know! They are:


GET: 

retrieves information from the specified source (you just saw this one!)

POST: 

sends new information to the specified source.

PUT: 

updates existing information of the specified source.

DELETE: 

removes existing information from the specified source.
So when we sent our GET request to codecademy.com, we retrieved information. When you add to or update your blog, you're sending POST or PUT requests; when you delete a tweet, there goes a DELETE request.

*/
