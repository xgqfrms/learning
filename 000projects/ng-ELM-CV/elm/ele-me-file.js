var elemeFile = angular.module('elemeFile',[])

elemeFile.service('elemeFile',function($rootScope) {
    
    var accept = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/msword,application/pdf,text/html,image/jpeg,image/png";
//  var accept = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/msword,application/pdf,text/html,message/rfc822";
    
    var accpetList = accept.split(",");

    var acceptInPosition = "application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/pdf,image/jpeg";

    var acceptInPositionList = acceptInPosition.split(",");

    
    var htmlAccept = "text/html";
    
    var htmlList = htmlAccept.split(",");
    
    var htmlEmlAccept = "text/html,message/rfc822";
    
    var htmlEmlList = htmlEmlAccept.split(",");
    
    var emlAccept = "message/rfc822";
    
    var emlList = emlAccept.split(",");
    
    
    // 导入excel
    var excelAccept = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel";
    // excel List
    var excelList = excelAccept.split(",");
    
    var filterList = new Array();
    
    this.initAccept = function(){
        $("input[type='file']").attr("accept",accept);
        $("input[type='file']").parent().after('<label class="col-sm-5 control-label" id="redInfo" for="ds_host" style="color:red;;max-width:100%">只能上传格式为：xlsx,xls,docx,doc,html,eml的文件</label>');
        
        //return "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/vnd.ms-powerpoint,application/msword,application/pdf,image/jpeg,image/bmp,image/png";
    }
    this.initAccept();
    
    this.initImportAccept = function(){
        $("input[type='file']").attr("accept","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel");
        $("input[type='file']").parent().after('<label class="col-sm-5 control-label" for="ds_host" style="color:red;;max-width:100%">只能上传格式为：xlsx,xls的文件</label>');
        
        //return "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/vnd.ms-powerpoint,application/msword,application/pdf,image/jpeg,image/bmp,image/png";
    }
    
    this.filter = function(file){
        var type = file.type;
        var name = file.name;
        
    /*  for (var i = 0; i < accpetList.length; i++) {
            
        }*/
        if($.inArray(type, accpetList) != -1){
            // 可以上传
            return true;
        }
        else {
            // 不可以上传
            filterList.push(name);
            return false;
        }
        
    }

    this.filterInPosition = function (file) {
        var type = file.type;
        var name = file.name;
        if($.inArray(type, acceptInPositionList) != -1){
            // 可以上传
            return true;
        }
        else {
            // 不可以上传
            filterList.push(name);
            return false;
        }
    }
    
    this.filterHtml = function(file){
        var type = file.type;
        var name = file.name;
        
        /*  for (var i = 0; i < accpetList.length; i++) {
            
        }*/
        if($.inArray(type, htmlList) != -1){
            // 可以上传
            return true;
        }
        else {
            // 不可以上传
            filterList.push(name);
            return false;
        }
        
    }
    
    this.filterEml = function(file){
        var type = file.type;
        var name = file.name;
        
        /*  for (var i = 0; i < accpetList.length; i++) {
            
        }*/
        if($.inArray(type, emlList) != -1){
            // 可以上传
            return true;
        }
        else {
            // 不可以上传
            filterList.push(name);
            return false;
        }
        
    }
    
    this.filterHtmlEml = function(file){
        var type = file.type;
        var name = file.name;
        
        /*  for (var i = 0; i < accpetList.length; i++) {
            
        }*/
        if($.inArray(type, htmlEmlList) != -1){
            // 可以上传
            return true;
        }
        else {
            // 不可以上传
            filterList.push(name);
            return false;
        }
        
    }
    
    this.filterExcel = function(file){
        var type = file.type;
        var name = file.name;
        if($.inArray(type, excelList) != -1){
            // 可以上传
            return true;
        }
        else {
            // 不可以上传
            filterList.push(name);
            return false;
        }
    }
    
    // 提示不可以上传的文件列表
    this.msg = function(elemeAlert, data, modalFlag){
        
        if(data == null || (data != null && data.file_filter_list != null)){
            
            if(data != null && data.file_filter_list != null){
                filterList = data.file_filter_list;
            }
            if(filterList != null && filterList.length != 0){
                var msg = "下列文件已经超出允许上传的文件格式范围：<br>";
                for (var i = 0; i < filterList.length; i++) {
                    msg += filterList[i] + "<br>";
                }
/*              if(modalFlag == "1"){
                    elemeAlert.alert("20030",null,[msg]);
                }
                else {
                    
                }*/
                elemeAlert.alert("20030",null,[msg]);
                filterList = new Array();
            }
            
        }
        else if(data != null){
            elemeAlert.alert(data);
        }
/*      if(errorList != null && errorList.length != 0){
            return;
        }*/
    }
    
})
