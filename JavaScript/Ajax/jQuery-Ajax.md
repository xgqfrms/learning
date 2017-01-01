# Jquery Ajax  



<!-- 
https://codeschool-project-demos.github.io/jQueryBadgesProject/ 
https://www.codeschool.com/users/sergiocruz.json
https://codeschool-project-demos.github.io/jQueryBadgesProject/assets/main.js
-->



$("#msform").removeAttr("style").hide();

$("#msform").css("display","none");

$(document).ready(function(){
    var display =  $("#msform").css("display");
    if(display!="none"){
        $("#msform").attr("style", "display:none");
    }
});


document.getElementById("elementId").style.display="none";

$("#elementId").hide();


$('#id').hide();
$('#id').show();
An alternate way is to use the jQuery css method:

$("#id").css("display", "none");
$("#id").css("display", "block");






http://stackoverflow.com/questions/4396983/hide-or-display-none-jquery  
http://stackoverflow.com/questions/3582619/how-to-change-css-display-none-or-block-property-using-jquery  

http://api.jquery.com/hide/
http://api.jquery.com/show/

https://api.jquery.com/hidden-selector/ 

http://vanilla-js.com/
vanilla-js

http://www.w3schools.com/jsref/prop_style_display.asp  
http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_style_display2  
http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_style_display_toggle  


https://developer.mozilla.org/en-US/docs/Web/JavaScript  



http://stackoverflow.com/questions/1835440/jquery-changing-css-class-to-div  
http://stackoverflow.com/questions/3452778/jquery-change-class-name  

$(".first").addClass("second")
// remove a class
$(".first").removeClass("second")

$("#mydiv").attr("class", "second"); 
$("#td_id").toggleClass('change_me newClass'); 

$('#td_id').removeClass('change_me').addClass('new_class');


http://stackoverflow.com/questions/7941276/changing-the-class-of-a-div-when-clicking-on-it


function change_autorefreshdiv(){
    var NAME = document.getElementById("first_name");
    var currentClass = NAME.className;
    if (currentClass == "second_name") { // Check the current class name
        NAME.className = "first_name";   // Set other class name
    } else {
        NAME.className = "second_name";  // Otherwise, use `second_name`
    }
}   


document.getElementById('id').setAttribute("class", "bar");



learn by analogy

举一反三

http://stackoverflow.com/a/196038/5934465






## HTML5


document.getElementById("MyElement").classList.add('class');

document.getElementById("MyElement").classList.remove('class');

if ( document.getElementById("MyElement").classList.contains('class') )

document.getElementById("MyElement").classList.toggle('class');

## ES5 

document.getElementById("MyElement").className = "MyClass";

document.getElementById("MyElement").className += " MyClass"; 

document.getElementById("MyElement").className =
   document.getElementById("MyElement").className.replace
      ( /(?:^|\s)MyClass(?!\S)/g , '' )
/* Code wrapped for readability - above is all one statement 

(?:^|\s) # Match the start of the string, or any single whitespace character

MyClass  # The literal text for the classname to remove

(?!\S)   # Negative lookahead to verify the above is the whole classname
         # Ensures there is no non-space character following
         # (i.e. must be end of string or a space)

*/

if ( document.getElementById("MyElement").className.match(/(?:^|\s)MyClass(?!\S)/) )


<script type="text/javascript">
    function changeClass()
    {
        // Code examples from above
    }
</script>
...
<button onclick="changeClass()">My Button</button>

<script type="text/javascript">
    function changeClass()
    {
        // Code examples from above
    }

    window.onload = function()
    {
        document.getElementById("MyElement").addEventListener( 'click', changeClass);
    }
</script>
...
<button id="MyElement">My Button</button>

https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener  
https://developer.mozilla.org/en-US/docs/Web/API/Element/classList  



## jQuery:

$('#MyElement').addClass('MyClass');

$('#MyElement').removeClass('MyClass');

if ($('#MyElement').hasClass('MyClass'))

$('#MyElement').toggleClass('MyClass');

$('#MyElement').click(changeClass);

$(':button:contains(My Button)').click(changeClass);



https://developer.mozilla.org/en-US/docs/Web/API/Element/classList  
https://github.com/eligrey/classList.js/blob/master/classList.js  
https://github.com/eligrey/FileSaver.js  

https://github.com/eligrey/l10n.js  
https://eligrey.com/blog/saving-generated-files-on-the-client-side/  



https://www.w3.org/TR/dom/#dom-element-classlist  


classList attribute must return the associated DOMTokenList object representing the context object's classes.


https://www.w3.org/TR/dom/#domtokenlist  

https://www.w3.org/TR/dom/#element  

https://www.w3.org/TR/dom/#dom-element-getattribute  
https://www.w3.org/TR/dom/#dom-element-setattribute  
https://www.w3.org/TR/dom/#dom-element-removeattribute  
https://www.w3.org/TR/dom/#dom-element-hasattributens  




https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList  
https://developer.mozilla.org/en-US/docs/Web/API  
https://developer.mozilla.org/zh-CN/docs/Web/API  

https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement  
https://developer.mozilla.org/en-US/docs/Web/API/HTMLDocument  
https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation
https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model  

https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model


判断,变量,类型, Object.prototype.toString.call()

https://ioliu.cn/2016/judgment-variable-type/  

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString

使用toString()方法来检测对象类型

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString

https://developer.mozilla.org/en-US/docs/Web/API/Element/classList



https://github.com/js-cookie/js-cookie



https://codepen.io/xgqfrms/pen/EVGrBY

