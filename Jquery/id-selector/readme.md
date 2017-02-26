# id selector





jquery

$('#id[0]')


https://api.jquery.com/id-selector/

http://stackoverflow.com/questions/24049337/what-does-the-0-do-in-id0

$('#id')[0] === document.getElementById('id')



Calling jQuery() (or $()) with an id selector as its argument will return a jQuery object containing a collection of either zero or one DOM element.

Each id value must be used only once within a document. If more than one element has been assigned the same ID, queries that use that ID will only select the first matched element in the DOM. This behavior should not be relied on, however; a document with more than one element using the same ID is invalid.

<div id="myID.entry[0]">id="myID.entry[0]"</div>
<div id="myID.entry[1]">id="myID.entry[1]"</div>
<div id="myID.entry[2]">id="myID.entry[2]"</div>
<script>
$( "#myID\\.entry\\[1\\]" ).css( "border", "3px solid red" );
</script>


<div id="notMe"><p>id="notMe"</p></div>
<div id="myDiv">id="myDiv"</div>
<script>
$( "#myDiv" ).css( "border", "3px solid red" );
</script>






http://stackoverflow.com/questions/3239598/how-can-i-get-the-id-of-an-element-using-jquery


<div id="test"></div>


$('#test').get(0).id;

or

$('#test')[0].id;


http://stackoverflow.com/questions/5874652/prop-vs-attr



$('#id')[0];



http://stackoverflow.com/questions/13774601/jquery-object-array-notation

http://blog.jquery.com/2011/05/12/jquery-1-6-1-released/

http://ejohn.org/blog/jquery-16-and-attr/





https://www.sitepoint.com/premium/books/html5-css3-for-the-real-world-2nd-edition

https://github.com/spbooks/htmlcss2

https://github.com/spbooks





http://stackoverflow.com/questions/3239598/how-can-i-get-the-id-of-an-element-using-jquery








https://www.w3.org/TR/SRI/

Subresource Integrity

子资源完整性



http://jquery.com/download/

http://try.jquery.com/levels/3/challenges/1


https://code.jquery.com/jquery-3.1.1.min.js


https://code.jquery.com/


<script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>


