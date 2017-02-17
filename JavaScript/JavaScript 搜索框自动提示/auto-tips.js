function myFunction() {
    // 声明变量
    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
    // 循环所有列表，查找匹配项
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            ul.style.visibility = "visible";
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

// onkeyup="myFunction()"
// addEventListener()
