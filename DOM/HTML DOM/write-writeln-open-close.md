#  write writeln  open close


G:\wwwRoot\learning\CSS3\CSS长度单位



## HTML DOM open() Method

http://www.w3schools.com/jsref/met_doc_open.asp
http://www.w3schools.com/jsref/met_win_open.asp

document.open(MIMEtype, replace)


Parameter   Description

MIMEtype    Optional. The type of document you are writing to. Default value is "text/html"
replace Optional. If set, the history entry for the new document inherits the history entry from the document which opened this document


<p>Click the button to open an output stream, add some text, and close the output stream.</p>

<button onclick="myFunction()">Try it</button>

<script>
function myFunction() {
    document.open("text/html", "replace");
    document.write("<html><body><p>Hello World!</p></body></html>");
}
</script>








## HTML DOM close() Method





<p>Click the button to open an output stream, add some text, and close the output stream.</p>

<button onclick="myFunction()">Try it</button>

<script>
function myFunction() {
    document.open();
    document.write("<h1>Hello World</h1>");
    document.close();
}
</script>




