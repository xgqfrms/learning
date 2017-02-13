# style.fontSize  





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










http://www.w3schools.com/jsref/prop_style_fontsize.asp



Value   Description
xx-small
x-small
small
medium
large
x-large
xx-large    Sets the size of the font to different fixed sizes, from xx-small to xx-large
smaller Decreases the font-size by one relative unit
larger  Increases the font-size by one relative unit
length  Defines the font-size in length units
%   Sets the font-size to a % of  the parent element's font size
initial Sets this property to its default value. Read about initial
inherit Inherits this property from its parent element. Read about inherit


// Set font size
<p id="myP">This is a paragraph.</p>
<button type="button" onclick="myFunction()">Set font size</button>

<script>
function myFunction() {
    document.getElementById("myP").style.fontSize = "xx-large";
}
</script>



// Return font size

<p id="myP" style="font-size:200%">This is a paragraph.</p>
<button type="button" onclick="myFunction()">Return font size</button>
<script>
function myFunction() {
    alert(document.getElementById("myP").style.fontSize);
}
</script>


// Not Return font size

<h1 id="myP">This is a paragraph.</h1>
<button type="button" onclick="myFunction()">Return font size</button>
<script>
function myFunction() {
    alert(document.getElementById("myP").style.fontSize);
}
</script>





<p id="myP">This is a paragraph.</p>

<select onchange="myFunction(this);" size="11">
    <option>xx-small</option>
    <option>x-small</option>
    <option>small</option>
    <option>medium</option>
    <option>large</option>
    <option>x-large</option>
    <option>xx-large</option>
    <option>100%</option>
    <option>250%</option>
    <option>2cm</option>
    <option>100px</option>
</select>
<script>
function myFunction(selectTag) {
    var listValue = selectTag.options[selectTag.selectedIndex].text;
    document.getElementById("myP").style.fontSize = listValue;
}
</script>








http://www.w3schools.com/jsref/jsref_fontsize.asp


string.fontsize(size)



size    Required. An integer between 1 and 7 that specifies the font size


<script>

var txt = "Hello World!";

document.write("The original string: " + txt);

document.write("<p>Big: " + txt.big() + "</p>");
document.write("<p>Small: " + txt.small() + "</p>");

document.write("<p>Bold: " + txt.bold() + "</p>");
document.write("<p>Italic: " + txt.italics() + "</p>");

document.write("<p>Fixed: " + txt.fixed() + "</p>");
document.write("<p>Strike: " + txt.strike() + "</p>");

document.write("<p>Fontcolor: " + txt.fontcolor("green") + "</p>");
document.write("<p>Fontsize: " + txt.fontsize(7) + "</p>");

document.write("<p>Subscript: " + txt.sub() + "</p>");
document.write("<p>Superscript: " + txt.sup() + "</p>");

document.write("<p>Link: " + txt.link("http://www.w3schools.com") + "</p>");

document.write("<p>Blink: " + txt.blink() + " (does not work in IE, Chrome, Firefox or Safari)</p>");

</script>


write() 方法将HTML表达式或JavaScript代码写入文档。 
write() 方法主要用于测试：
如果在HTML文档完全加载后使用它，它将删除所有现有的HTML。


当此方法不用于测试时，通常用于将一些文本写入由document.open() 方法打开的输出流。



提示：document.writeln()方法类似于write() ，只有在每个语句之后添加一个换行符。




document.write(exp1, exp2, exp3, ...)


exp1, exp2, exp3, ... 

可选的。要写入输出流的内容。可以列出多个参数，它们将按照出现的顺序附加到文档






<p>Click the button to open a new window called "MsgWindow" with some text.</p>

<button onclick="myFunction()">Try it</button>

<script>
function myFunction() {
    var myWindow = window.open("", "MsgWindow", "width=200,height=100");
    myWindow.document.write("<p>This is 'MsgWindow'. I am 200px wide and 100px tall!</p>");
}
</script>




<p>Note that write() does NOT add a new line after each statement:</p>

<pre>
<script>
    document.write("Hello World!");
    document.write("Have a nice day!");
</script>
</pre>

<p>Note that writeln() add a new line after each statement:</p>

<pre>
<script>
    document.writeln("Hello World!");
    document.writeln("Have a nice day!");
</script>
</pre>



<script>
    document.write("Hello World! <br>");
    document.write("Have a nice day!");
</script>



http://www.w3schools.com/jsref/met_doc_open.asp













