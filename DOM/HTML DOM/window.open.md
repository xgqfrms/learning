# window.open


http://codepen.io/xgqfrms/full/ggqpKo/










## Window open() Method

http://www.w3schools.com/jsref/met_win_open.asp



The open() method opens a new browser window.

open() 方法打开一个新的浏览器窗口。


window.open(URL, name, specs, replace)


URL 可选的。

指定要打开的页面的URL。如果未指定URL，则会打开一个包含about：blank的新窗口



name 可选的。指定目标属性或窗口的名称。支持以下值：


_blank - URL is loaded into a new window. This is default
_parent - URL is loaded into the parent frame
_self - URL replaces the current page
_top - URL replaces any framesets that may be loaded
name - The name of the window 

(Note: the name does not specify the title of the new window)




specs 可选的。以逗号分隔的项目列表，无空格。支持以下值：

    height=pixels

    top=pixels

    left=pixels

    width=pixels

    menubar=yes|no|1|0

    status=yes|no|1|0


    titlebar=yes|no|1|0




replace 可选的。

指定URL是创建新条目还是替换历史记录列表中的当前条目。支持以下值：

    true - URL替换历史记录列表中的当前文档 
    false - URL在历史记录列表中创建一个新条目





window.open("https://www.xgqfrms.xyz/", "_self","toolbar=yes,scrollbars=yes,resizable=yes,status=yes,menubar=yes,titlebar=yes,top=100,left=100,width=800,height=600", false)





<button onclick="myFunction()">Try it</button>

<script>
function myFunction() {
    var myWindow = window.open("https://www.xgqfrms.xyz/", "index.html", "width=400,height=300");
}
</script>





<p>Click the button to open a new browser window.</p>

<button onclick="myFunction()">Try it</button>

<script>
function myFunction() {
    window.open("http://www.w3schools.com");
}
</script>






## HTML <iframe> Tag

http://www.w3schools.com/html/html_iframe.asp

<iframe src="demo_iframe.htm" height="200" width="300"></iframe>



Attribute   Value   Description

name    text    指定<iframe>的名称

sandbox    为<iframe>中的内容启用额外的一组限制
    allow-forms
    allow-pointer-lock
    allow-popups
    allow-same-origin
    allow-scripts
    allow-top-navigation 

src URL 指定要嵌入到<iframe>中的文档的地址

srcdoc  HTML_code   指定要在<iframe>中显示的页面的HTML内容


width   pixels    指定<iframe>的宽度

height  pixels    指定<iframe>的高度

