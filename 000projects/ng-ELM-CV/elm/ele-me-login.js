var elemeLogin = angular.module('elemeLogin',['elemeAlert'])

elemeLogin.service('elemeLogin',function($rootScope, $http, $compile,elemeAlert) {
    // 本地dev 
    // var upmsAddress = "https://itsmdev2.rajax.me";
    // var ipAddress = "http://" + window.location.host;
    // var ssoHomeUrl = "https://ssodev.rajax.me/sso/auth/home";
    
    // 172.16.6.109dev 
    // var upmsAddress = "https://itsmdev2.rajax.me";
    // var ipAddress = "https://tssdev.rajax.me";
    // var ssoHomeUrl = "https://ssodev.rajax.me/sso/auth/home";
    
//  10.192.31.12 test
//  var ipAddress = "https://tssuat.rajax.me";
//  var upmsAddress = "https://itsmuat2.rajax.me";
//  var ssoHomeUrl = "https://ssouat.rajax.me/sso/auth/home";
    
//  // 10.10.1.53 pro
    var ipAddress = "https://tss.rajax.me";
    var upmsAddress = "https://tss.rajax.me";
    var ssoHomeUrl = "https://sso.rajax.me/sso/auth/home";
    localStorage.setItem("ServerUrl", upmsAddress + "/UPMS_SERVER/rest/");
    localStorage.setItem("ssoHomeUrl", ssoHomeUrl);
    localStorage.setItem("Url", ipAddress + "/TSS_BE/rest/");
    localStorage.setItem("messageUrl", ipAddress + "/TSS_FE/lib/message/");
    
    $scope = $rootScope;
//  var elemeAlert = "";
    var href = window.location.href;
    var token = "";
    if(href.indexOf("?") != -1){
        token = href.split("?")[1];
        sessionStorage.setItem("token", token);
    }
    else {
        token = sessionStorage.getItem("token");
    }
    $scope.start = function() {
            //开发放开，测试需要注释
//         token = sessionStorage.getItem("token");
            
            $scope.CRMUser = {};
            if(token == null){
                elemeAlert.alert("40011");
            }           
                        $scope.CRMUser.token = token;
                        $scope.CRMUser.sys_name = '招聘管理系统';

                        $http({
                            method: 'POST',
                            url: localStorage.getItem("ServerUrl") + "UserPrivilegeServ/getPrivilege",
                            data: JSON.stringify($scope.CRMUser)
                        }).success(function(data){
                                $scope.subMenuList=[];
                                $scope.urlAddressList=[];
                                if(data.length>0&&data[0].subMenu.length>0){
                                    $scope.subMenuList=data[0].subMenu;
                                }
                                for(var i=0; i<$scope.subMenuList.length; i++){
                                    $scope.urlAddressList.push($scope.subMenuList[i].urlAddress);
                                }
                            
                            sessionStorage.setItem("urlAddressList", JSON.stringify($scope.urlAddressList));
                            $http(
                                    {
                                        method : 'POST',
                                        url : localStorage.getItem("ServerUrl")
                                        + "UserPermissionServ/getUserInfo",
                                        data : JSON.stringify($scope.CRMUser)
                                    }).success(function(data) {
                                        
                                        
                                        $scope.TSSUser = data.user;
                                        sessionStorage.setItem("login", "success");
                                        sessionStorage.setItem("name",$scope.TSSUser.name);
                                        sessionStorage.setItem("workcode",$scope.TSSUser.workcode);
                                        sessionStorage.setItem("pk_psndoc",$scope.TSSUser.pk_psndoc);
                                        $scope.CRMUser = {};
                                        $scope.CRMUser.workcode = sessionStorage.getItem('workcode');
                                        $scope.CRMUser.sys_name = '招聘管理系统';
                                        //token 为 “6c1a2232fee1932c8b13188131c5a6ac”+当天年月日（yyyyMMdd）最后MD5加密大写
                                         Date.prototype.format = function(partten)
                                            {
                                                if(partten ==null||partten=='')
                                                {
                                                    partten = 'ymd'    ;
                                                }
                                                var y = this.getFullYear();
                                                var m = this.getMonth()+1;
                                                var d = this.getDate();
                                                var r = partten.replace(/y+/gi,y);
                                                r = r.replace(/m+/gi,(m<10?"0":"")+m);
                                                r = r.replace(/d+/gi,(d<10?"0":"")+d);
                                                return r; 
                                            }
                                        
                                        var token_new = "6c1a2232fee1932c8b13188131c5a6ac" + new Date().format("ymd");
                                        $scope.CRMUser.token = md5(token_new);
                                        
                                        $http({
                                            method: 'POST',
                                            url: localStorage.getItem("ServerUrl") + "PlatformEmpRoleServ/getRoleByEmp",
                                            data: JSON.stringify($scope.CRMUser)
                                        }).success(function(data){
                                            if(data != null && data.length > 0){
                                                for(var i = 0; i < data.length; i++){
                                                    var roleNameS = data[i].role_name.split(",");
                                                    if(roleNameS != null && roleNameS.length > 0){
                                                        if(roleNameS[0] == "超级管理员" || roleNameS[0] == "ssc-报到管理"){
                                                            sessionStorage.setItem("role_name",roleNameS[0]);
                                                            break;
                                                        }
                                                    }
                                                }
                                            }
                                            $rootScope.$emit("loginUserName", sessionStorage);
                                            if(sessionStorage.getItem('role_name')=='ssc-报到管理'){
                                                window.location.href = "tss_register_list.html";
                                            }else{
                                                $rootScope.$emit("solveAmount", sessionStorage);
                                            }
                                        
                                        }).error(function(data){
                                            elemeAlert.alert("20075");
                                            elemeAlert.closeLoading();
                                            setTimeout(function () {
                                                window.parent.location.href =localStorage.getItem("ssoHomeUrl");
                                            }, 2000);
                                        });
                                        
                                    }).error(function(data) {
                                        // alert("登录失败！");
                                        elemeAlert.alert("40010");
                                        setTimeout(function () {
                                            window.parent.location.href =localStorage.getItem("ssoHomeUrl");
                                        }, 2000);
                                    });
                            
                        }).error(function(data){
                            elemeAlert.alert("20075");
                            elemeAlert.closeLoading();
                            setTimeout(function () {
                                window.parent.location.href =localStorage.getItem("ssoHomeUrl");
                            }, 2000);
                        });
    }
    
    
    
    $scope.getMenuTreeHtml = function(json){
            var html = "";
            var url = "";
            for(var i = 0; i < json.length; i++){
                html += "";
                for(var j = 0; j < json[i].subMenu.length; j++){
                    var iconHtml = elemeAlert.setMenuIcon(json[i].subMenu[j].menuName);
                    if(null==json[i].subMenu[j].urlAddress){
//                      html += "<li ui-sref-active='active'  ng-click='toggle($event)' ><a  href='' class='auto' ><span class='pull-right text-muted'><i class='fa fa-fw fa-angle-right text'></i><i class='fa fa-fw fa-angle-down text-active'></i></span><i class='glyphicon glyphicon-stats icon text-primary-dker'></i><span class='font-bold' translate='aside.nav.CALENDAR'>"+json[i].subMenu[j].menuName+"</span></a><ul class='nav nav-sub dk' style='display:none'>"
                        html += "<li ui-sref-active='active'  ng-click='toggle($event)' ><a  href='' class='auto' ><span class='pull-right text-muted'><i class='fa fa-fw fa-angle-right text'></i><i class='fa fa-fw fa-angle-down text-active'></i></span>" + iconHtml + "<span class='font-bold' translate='aside.nav.CALENDAR'>"+json[i].subMenu[j].menuName+"</span></a><ul class='nav nav-sub dk' style='display:none'>"
                    }
                    else{
                        html += "<li ui-sref-active='active'  ng-click='toggle($event)' ><a  href="+json[i].subMenu[j].urlAddress+"  class='auto' ><span class='pull-right text-muted'></span>" + iconHtml + "<span class='font-bold' translate='aside.nav.CALENDAR'>"+json[i].subMenu[j].menuName+"</span></a><ul class='nav nav-sub dk' style='display:none'>"
                    }
                    for(var k = 0; k < json[i].subMenu[j].subMenu.length; k++){
                        url = elemeAlert.setBase64Encode(json[i].subMenu[j].subMenu[k].menuName, json[i].subMenu[j].subMenu[k].urlAddress);
//                      html += "<li ui-sref-active='active'><a ui-sref='app.dashboard-v1' href="+json[i].subMenu[j].subMenu[k].urlAddress+"><span>"+json[i].subMenu[j].subMenu[k].menuName+"</span></a></li>"  
                        html += "<li ui-sref-active='active'><a ui-sref='app.dashboard-v1' href=" + url + "><span>"+json[i].subMenu[j].subMenu[k].menuName+"</span></a></li>"  
                    }
                    html += "</ul>";
                    html += "</li>";
                }
            }
            return html;
        }
    
    $scope.toggle = function ($event) {
    if(angular.element($event.currentTarget).find('ul').css('display')=="none"){
         angular.element($event.currentTarget).find('ul').css('display','');
         angular.element($event.currentTarget).addClass("active");
    }else{
        angular.element($event.currentTarget).find('ul').css('display','none');
         angular.element($event.currentTarget).removeClass("active");
    }
     if(angular.element($event.currentTarget).find('ul').css("display")=='none'){
         
        }
        else {
        
        }
     
   }
    
    this.init = function(){
         $scope.start();
    }
    
})
