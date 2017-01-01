# JSONP is not JSON. It is a JavaScript program.  

```codes
Content-Type="application/javascript"

$.ajax({
    url: 'https://cdn.xgqfrms.xyz/json/badges.json',
    dataType: 'jsonp',
    success: function(data) {
        populateWithCourses(data.courses.completed);
        hide();
    }
});
``` 

```codes
Content-Type="application/json"

$.ajax({
    url: 'https://cdn.xgqfrms.xyz/json/badges.json',
    dataType: 'json',
    success: function(data) {
        populateWithCourses(data.courses.completed);
        hide();
    }
});
``` 


## 

http://stackoverflow.com/questions/24528211/refused-to-execute-script-from-because-its-mime-type-application-json-is  

https://segmentfault.com/q/1010000004359113  




## JSONP  


http://stackoverflow.com/questions/3839966/can-anyone-explain-what-jsonp-is-in-layman-terms

http://stackoverflow.com/questions/2067472/what-is-jsonp-all-about

http://en.wikipedia.org/wiki/JSON  

http://remysharp.com/2007/10/08/what-is-jsonp/  


JSONP is script tag injection, passing the response from the server in to a user specified function

https://www.metaltoad.com/blog/using-jsonp-safely  

https://en.wikipedia.org/wiki/JSONP  


http://stackoverflow.com/questions/2067472/what-is-jsonp-all-about/2067584#2067584  

https://www.sitepoint.com/jsonp-examples/  

https://learn.jquery.com/ajax/working-with-jsonp/  

http://json-jsonp-tutorial.craic.com/index.html  

https://cameronspear.com/blog/exactly-what-is-jsonp/  









