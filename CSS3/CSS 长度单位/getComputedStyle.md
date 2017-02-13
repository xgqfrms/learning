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


















