# getComputedStyle



http://stackoverflow.com/questions/15195209/how-to-get-font-size-in-html

https://developer.mozilla.org/zh-CN/docs/Web/API/Window/getComputedStyle








<p id="fp" style="font-size:200%">
    This is a paragraph. <br>
    <mark>inline style : <code>style="font-size:200%"</code></mark>
</p>
<button type="button" onclick="tureFunc()">Return font size</button>
<h1 id="fh">
    This is a H1. <mark>browser defualt value</mark>
</h1>
<button type="button" onclick="myFunction()">Not Return font size</button>
<script>
    function tureFunc() {
        alert(document.getElementById("fp").style.fontSize);
    }
    function falseFunc() {
        alert(document.getElementById("fh").style.fontSize);
    }
</script>






<style>
    h3::after {
        content: "rocks!";
    }
</style>

<h3>generated content</h3> 
<script>
    let h3 = document.querySelector('h3'), 
    result = getComputedStyle(h3, '::after').content;
    // console.log("the generated content is: ", result);
    console.log(`the generated content is: ${result}`); 
    alert(`the generated content is: ${result}`);
    // the generated content is: "rocks!"
</script>








<style>
    #elem-container{
        position: absolute;
        left:     100px;
        top:      200px;
        height:   100px;
    }
</style>

<div id="elem-container">dummy</div>
<div id="output"></div>  
<script>
    function getTheStyle(){
        let elem = document.getElementById("elem-container");
        let fontSize = window.getComputedStyle(elem,null).getPropertyValue("font-size");
        // font-size !=== fontSize
        console.log(`fontSize = ${fontSize}`);
        document.getElementById("output").innerHTML = fontSize;
    }
    getTheStyle();
</script>


## getPropertyValue ???



http://www.w3schools.com/jsref/jsref_getcomputedstyle.asp

http://stackoverflow.com/questions/10803023/why-wont-getpropertyvalue-return-a-value-for-the-borderradius-property


https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle


https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration


https://developer.mozilla.org/zh-CN/docs/Web/API/Window/getComputedStyle 

http://stackoverflow.com/questions/15195209/how-to-get-font-size-in-html 




