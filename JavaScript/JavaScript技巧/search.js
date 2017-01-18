function addParams(name, value) {
    $("#params").append('<input name="' + name + '" value="' + value + '" type="hidden">');
}

function setSearchEngine(searchIndex) {
    var jk = "http://so.wangbaiyuan.cn/cse/search",
        bd = "https://www.baidu.com/s",
        gg = "https://www.google.com.hk/webhp?hl=zh-CN&sourceid=cnhp#safe=strict&hl=zh-CN&q=",
        hs = "https://www.haosou.com/s",
        sg = "https://www.sogou.com/sogou";
    var actions = [bd, jk, gg, hs, sg];

    $.cookie("searchId", searchIndex, { expires: 30 });
    var keywordflag = ["wd", "q", "q", "q", "query"];
    $("#params").empty();
    $("#searchform").attr("action", actions[searchIndex]);
    $("#keyword").attr("name", keywordflag[searchIndex]);
    switch (searchIndex) {
        case "0":
            addParams("ie", "UTF-8");
            break;
        case "1":
            addParams("s", "12193527087847762795");
            addParams("nsid", "1");
            addParams("entry", "1");
            break;
        case "2":
            addParams("ie", "UTF-8");
            break;
        case "3":
            addParams("ie", "UTF-8");
            break;
        case "4":
            addParams("ie", "UTF-8");
            break;
        default:
            addParams("ie", "UTF-8");
    }
}


$(document).ready(function() {
    $("#choose").change(function() {
        var sindex = $("#choose").val();
        setSearchEngine(sindex);

        function isNull(str) {
            if (str == "") return true;
            var regu = "^[ ]+$";
            var re = new RegExp(regu);
            return re.test(str);
        }
        var strings = $("#keyword").val();
        if (!isNull(strings)) {
            $("#submit").click();
        }
    });
    $.ajaxSetup({
        cache: true,
        scriptCharset: 'UTF-8'
    });
});


var serachId = Number($.cookie("searchId"));
if (serachId !== null && serachId !== undefined){
    serachId = serachId;
}else{
    serachId = 0;
}

$("#choose option[value='" + serachId + "']").attr("selected", "selected");
setSearchEngine(serachId.toString());
$("#keyword").focus();