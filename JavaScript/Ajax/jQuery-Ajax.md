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
