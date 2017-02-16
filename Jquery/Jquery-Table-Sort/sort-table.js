$(document).ready(function() {
    var tableObject = $('#tableSort'); //获取id为tableSort的table对象 
    var tbHead = tableObject.children('thead'); //获取table对象下的thead 
    var tbHeadTh = tbHead.find('tr th'); //获取thead下的tr下的th 
    var tbBody = tableObject.children('tbody'); //获取table对象下的tbody 
    var tbBodyTr = tbBody.find('tr'); //获取tbody下的tr 
    var sortIndex = -1;
    tbHeadTh.each(function() { //遍历thead的tr下的th 
        var thisIndex = tbHeadTh.index($(this)); //获取th所在的列号 
        $(this).mouseover(function() {
            tbBodyTr.each(function() { //编列tbody下的tr 
                var tds = $(this).find("td"); //获取列号为参数index的td对象集合 
                $(tds[thisIndex]).addClass("hover");
            });
        }).mouseout(function() {
            tbBodyTr.each(function() {
                var tds = $(this).find("td");
                $(tds[thisIndex]).removeClass("hover");
            });
        });
        $(this).click(function() {
            var dataType = $(this).attr("type");
            checkColumnValue(thisIndex, dataType);
        });
    });
    $("tbody tr").removeClass(); //先移除tbody下tr的所有css类 
    $("tbody tr").mouseover(function() {
        $(this).addClass("hover");
    }).mouseout(function() {
        $(this).removeClass("hover");
    });
    //对表格排序 
    function checkColumnValue(index, type) {
        var trsValue = new Array();
        tbBodyTr.each(function() {
            var tds = $(this).find('td');
            trsValue.push(type + ".separator" + $(tds[index]).html() + ".separator" + $(this).html());
            $(this).html("");
        });
        var len = trsValue.length;
        if (index == sortIndex) {
            trsValue.reverse();
        } else {
            for (var i = 0; i < len; i++) {
                type = trsValue[i].split(".separator")[0];
                for (var j = i + 1; j < len; j++) {
                    value1 = trsValue[i].split(".separator")[1];
                    value2 = trsValue[j].split(".separator")[1];
                    if (type == "number") {
                        value1 = value1 == "" ? 0 : value1;
                        value2 = value2 == "" ? 0 : value2;
                        if (parseFloat(value1) > parseFloat(value2)) {
                            var temp = trsValue[j];
                            trsValue[j] = trsValue[i];
                            trsValue[i] = temp;
                        }
                    } else if (type == "ip") {
                        if (ip2int(value1) > ip2int(value2)) {
                            var temp = trsValue[j];
                            trsValue[j] = trsValue[i];
                            trsValue[i] = temp;
                        }
                    } else {
                        if (value1.localeCompare(value2) > 0) { //该方法不兼容谷歌浏览器 
                            var temp = trsValue[j];
                            trsValue[j] = trsValue[i];
                            trsValue[i] = temp;
                        }
                    }
                }
            }
        }
        for (var i = 0; i < len; i++) {
            $("tbody tr:eq(" + i + ")").html(trsValue[i].split(".separator")[2]);
        }
        sortIndex = index;
    }
    //IP转成整型 
    function ip2int(ip) {
        var num = 0;
        ip = ip.split(".");
        num = Number(ip[0]) * 256 * 256 * 256 + Number(ip[1]) * 256 * 256 + Number(ip[2]) * 256 + Number(ip[3]);
        return num;
    }
})
