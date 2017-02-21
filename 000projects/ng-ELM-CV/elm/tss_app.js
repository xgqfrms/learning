//alert("111");
TSSAPP.controller('initHtml', function($rootScope, $scope,$http) {
//	 var href = location.href.split("TSS_FE/html/")[1];
////	 $('#tss_resume_list').attr('CSS','menu-active'); 
//	 var div = document.getElementById('tss_resume_list'); 
//	 div.setAttribute("class", "menu-active"); 
//	 localStorage.setItem("clickedUrl", href);
//	 alert(href);
	// added by bo.dang
	Date.prototype.toJSON = function () { return this.toLocaleString(); }
	
	// 时间处理
	Date.prototype.format = function(fmt) 
	{ //author: meizz 
		var o = { 
		 "M+" : this.getMonth()+1,                 //月份 
		 "d+" : this.getDate(),                    //日 
		 "h+" : this.getHours(),                   //小时 
		 "m+" : this.getMinutes(),                 //分 
		 "s+" : this.getSeconds(),                 //秒 
		 "q+" : Math.floor((this.getMonth()+3)/3), //季度 
		 "S"  : this.getMilliseconds()             //毫秒 
		}; 
		 var week = {         
				    "0" : "/u65e5",         
				    "1" : "/u4e00",         
				    "2" : "/u4e8c",         
				    "3" : "/u4e09",         
				    "4" : "/u56db",         
				    "5" : "/u4e94",         
				    "6" : "/u516d"        
				    }; 
		if(/(y+)/.test(fmt)) {
		 fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
		}
		if(/(E+)/.test(fmt)){         
	        fmt=fmt.replace(RegExp.$1, ((RegExp.$1.length>1) ? (RegExp.$1.length>2 ? "/u661f/u671f" : "/u5468") : "")+week[this.getDay()+""]);         
	    } 
		for(var k in o) 
		 if(new RegExp("("+ k +")").test(fmt)) 
		fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length))); 
		return fmt; 
	}
		
	// 设置背景色
//		if(angular.isUndefined(localStorage.getItem("bodyBackground")) || localStorage.getItem("bodyBackground") == null){
//			$("body").css({
//	            "background": "url('../img/bg-0.jpg')",
//	            "background-size": "100% 100%"
//	        });
//			localStorage.setItem("bodyBackground", "url('../img/bg-0.jpg')");
//		}else{
//			$("body").css({
//	            "background": localStorage.getItem("bodyBackground"),
//	            "background-size": "100% 100%"
//	        });
//		}
		$("body").css({
            "background-color": '#ebf0f7',
            "background-size": "100% 100%"
        });
		
		// 获得日期和时间
//		elemeHeadTime.getData();
//		var options = { offset: '+8', type: 'digital'};
//		elemeHeadTime.getTime(options);
		
		
		// Dev本地
		// var host = "http://" + window.location.host;
		// var ipAddress = host;
		// var ssoHomeUrl = host + "/TSS_FE/html/tss_login.html";
		// var downip = host;


		//172.16.6.109 dev服务器
		// var host ="https://tssdev.rajax.me";
		// var ipAddress = "https://tssdev.rajax.me";
		// var ssoHomeUrl ="https://ssodev.rajax.me/sso/auth/home";
		// var downip ="https://tssdev.rajax.me";
		
//		10.192.31.12 test
// 		var host = "https://tssuat.rajax.me";
// 		var downip = "https://tssuat.rajax.me";
// 		var ipAddress = host;
// 		var ssoHomeUrl = "https://ssouat.rajax.me/sso/auth/home";
		
		// 10.10.1.53 Pro
		var host = "https://tss.rajax.me";
		var downip = "https://tss.rajax.me";
		var ipAddress = host;
		var ssoHomeUrl = "https://sso.rajax.me/sso/auth/home";
		
//		localStorage.setItem("collectUrl", "http://TL.rajax.me");
//		localStorage.setItem("collectUrl", host + "/TSS_FE/html/tss_collect_login.html");
		localStorage.setItem("ssoHomeUrl", ssoHomeUrl);
		localStorage.setItem("Url", ipAddress + "/TSS_BE/rest/");
		// 下载文件URL
//		localStorage.setItem("downloadUrl", "http://115.159.103.53:8080" + "/File/");
//		// 导出文件URL
//		localStorage.setItem("exportUrl", "http://115.159.103.53:8080" + "/File/ExportFile/");
//		localStorage.setItem("downloadUrl", downip + "/File/");
		localStorage.setItem("downloadUrl", downip);
		// 导出文件URL
		localStorage.setItem("exportUrl", downip + "/File/ExportFile/");
		// alert 内容
		localStorage.setItem("messageUrl", ipAddress + "/TSS_FE/lib/message/");
		
//		$scope.userName = sessionStorage.getItem("name");
		
})

.controller('showMenuController', function($rootScope, $scope,$http, $compile, elemeAlert) {
	// 设置菜单active
	var hrefHtml = location.href.split("TSS_FE/html/")[1];
	var href = hrefHtml.split(".html")[0];
	var div = null;
	$rootScope.resumelag = false;
	$rootScope.surveyVFlag = false;
	$rootScope.interviewVFlag = false;
	$rootScope.offerVFlag = false;
	$rootScope.registerVFlag = false;
	$rootScope.talentPoolVFlag = false;
	$rootScope.supplierVFlag = false;
	$rootScope.candidateVFlag = false;
	$rootScope.positionVFlag = false;
//	 $('#tss_resume_list').attr('CSS','menu-active'); 
	switch(href)
	 {
	 	case "tss_workbench_list":
			div = document.getElementById('tss_workbench_list'); 
//			$rootScope.resumelag = true;
		     break;
		case "tss_resume_list":
			div = document.getElementById('tss_resume_list'); 
			$rootScope.resumelag = true;
		     break;
		case "tss_survey_list":
			div = document.getElementById('tss_survey_list'); 
			$rootScope.surveyVFlag = true;
		     break;
		case "tss_interview_list":
			div = document.getElementById('tss_interview_list'); 
			$rootScope.interviewVFlag = true;
		     break; 
		case "tss_offer_list":
			div = document.getElementById('tss_offer_list'); 
			$rootScope.offerVFlag = true;
		     break;
		case "tss_register_list":
			div = document.getElementById('tss_register_list'); 
			$rootScope.registerVFlag = true;
		     break;
		case "tss_talent_pool_list":
			div = document.getElementById('tss_talent_pool_list'); 
			$rootScope.talentPoolVFlag = true;
	       break;
		case "tss_supplier_list":
			div = document.getElementById("tss_supplier_list");
			$rootScope.supplierVFlag = true;
			break;
		case "tss_candidate_list":
			div = document.getElementById("tss_candidate_list");
			$rootScope.candidateVFlag = true;
			break;
		case "tss_position_list":
			div = document.getElementById("tss_position_list");
			$rootScope.positionVFlag = true;
			break;
	}
	if(div != null){
		div.setAttribute("class", "menu-active"); 
	}
	
	$scope.clickMenu = function(hrefUrl){
	///////权限控制/////////////
		if(sessionStorage.getItem("urlAddressList")!=null){
			$scope.urlAddressList=sessionStorage.getItem("urlAddressList");
			if($scope.urlAddressList.indexOf(hrefUrl)==-1){
				elemeAlert.alert("20123");
				return;
			}
		}
		////////////////////////
		switch(hrefUrl)
		 {
			case "tss_resume_list.html":
				window.location.href = "../html/tss_resume_list.html";
			     break;
			case "tss_survey_list.html":
				window.location.href = "../html/tss_survey_list.html";
			     break;
			case "tss_interview_list.html":
				window.location.href = "../html/tss_interview_list.html";
			     break; 
			case "tss_offer_list.html":
				window.location.href = "../html/tss_offer_list.html";
			     break;
			case "tss_register_list.html":
				window.location.href = "../html/tss_register_list.html";
			     break;
			case "tss_workbench_list.html":
				window.location.href = "../html/tss_workbench_list.html";
			     break;
			case "tss_talent_pool_list.html":
				window.location.href = "../html/tss_talent_pool_list.html";
				 break;
			case "tss_supplier_list.html":
				window.location.href = "../html/tss_supplier_list.html";
				 break;
			case "tss_candidate_list.html":
				window.location.href = "../html/tss_candidate_list.html";
				 break;
			case "tss_position_list.html":
				window.location.href = "../html/tss_position_list.html";
				 break;
		}
	}
	//判断是否是登陆过来的
//	alert("请先登录！");
//	if("success" != sessionStorage.getItem("login")){
//		elemeAlert.alert("40013");
//		window.location.href ='../html/tss_login.html';
//	}
	var email=localStorage.getItem("email");
	var menuFlag = false;
	$scope.menuClick = function(){
		menuFlag = !menuFlag;
		if(menuFlag) {
//			$(this).removeClass('active')
			$('#skin-select').animate({ left:0 }, 100);	
			$('.wrap-fluid').css({"width":"auto","margin-left":"150px"});
//			$('.wrap-fluid').css({"width":"auto","margin-left":"250px"});
//			$('.navbar').css({"margin-left":"240px"});

			$('#skin-select li').css({"text-align":"left"});
			$('#skin-select li span, ul.topnav h4, .side-dash, .noft-blue, .noft-purple-number, .noft-blue-number, .title-menu-left').css({"display":"inline-block", "float":"none"});
//			$('#logo').css({"display":"inline-block", "float":"none"});
			//$('body').css({"padding-left":"250px"});
			
			
			$('.ul.topnav li a:hover').css({" background-color":"green!important"});

			$('.ul.topnav h4').css({"display":"none"});

			$('.tooltip-tip2').addClass('tooltipster-disable');
			$('.tooltip-tip').addClass('tooltipster-disable');

			
			$('.datepicker-wrap').css({"position":"absolute", "right":"300px"});
			$('.skin-part').css({"visibility":"visible"});
			$('#menu-showhide').css({"margin":"10px"});
//			$('#menu-showhide, .menu-left-nest').css({"margin":"10px"});
			$('.dark').css({"visibility":"visible"});

			$('.search-hover').css({"display":"none"});
			$('.dropdown-wrap').css({"position":"absolute", "left":"0px", "top":"53px"});



			
		} else {
//			$(this).addClass('active')
			

			//$('#skin-select').animate({ left:-200 }, 100);
			$('#skin-select').animate({ left:-150 }, 100);

			$('.wrap-fluid').css({"width":"auto", "margin-left":"50px"});
//			$('.navbar').css({"margin-left":"50px"});

			$('#skin-select li').css({"text-align":"right"});
			$('#skin-select li span, ul.topnav h4, .side-dash, .noft-blue, .noft-purple-number, .noft-blue-number, .title-menu-left').css({"display":"none"});
//			$('#logo').css({"display":"none"});
			//$('body').css({"padding-left":"50px"});
			$('.tooltip-tip2').removeClass('tooltipster-disable');
			$('.tooltip-tip').removeClass('ktooltipster-disable');
			
			$('.datepicker-wrap').css({"position":"absolute", "right":"84px"});
			
			$('.skin-part').css({"visibility":"visible"});
			$('.dark').css({"visibility":"hidden"});
			$('#menu-showhide').css({"margin":"0"});
//			$('#menu-showhide, .menu-left-nest').css({"margin":"0"});

			$('.search-hover').css({"display":"block", "position":"absolute", "right":"-100px"});

			$('.dropdown-wrap').css({"position":"absolute", "left":"-10px", "top":"53px"});

		}
	}
	
	$scope.menuClick();
})
.controller('nameController', function($rootScope,$scope,$http,$compile,elemeAlert) {
	var name=sessionStorage.getItem("name");
	 $scope.userName=name;
//	 alert(name);
	 $rootScope.$on("loginUserName", function(event, msg) {
		$scope.userName = sessionStorage.getItem("name");
	 });
//	 console.log($scope.user.name);
	 $scope.out = function(){
//		 var ssoHomeUrl = localStorage.getItem("ssoHomeUrl");
//	    	localStorage.clear();
//	    	sessionStorage.clear();
//	    	window.location.href = ssoHomeUrl;
		 var token=sessionStorage.getItem("token");
			CRMUser={};
			CRMUser.token=token;
			$http({
      	        method: 'POST',
          	    url: localStorage.getItem("ServerUrl") + "UserPermissionServ/logOut", 
      	        data: JSON.stringify(CRMUser)
      	    }).success(function(data){
      	    	var ssoHomeUrl = localStorage.getItem("ssoHomeUrl");
      	    	var keylist = new Array();
      	    	for (var int = 0; int < localStorage.length; int++) {
      	    		// 获取 key
      	    		var getKey=localStorage.key(int);  
      	    	            
  	    	        //通过键名获取值，这里的值包括内容和日期  
  	    	        var getVal=localStorage.getItem(getKey);  
  	    	        if(getVal != null && getVal == '1'){
  	    	        	keylist.push(getKey);
  	    	        }
				}
      	    	localStorage.clear();
      	    	sessionStorage.clear();
      	    	window.location.href = ssoHomeUrl;
      	    	for (var i = 0; i < keylist.length; i++) {
      	    		localStorage.setItem(keylist[i],'1');
      	    	}
//      	    	window.location.href ='../html/crm_login.html';
//      	     window.location.href ='http://10.10.1.17:38080/sso/auth/home';
      	    }).error(function(data){
//      	    	alert("error:" + data);
      	    	elemeAlert.alert("40013");
      	    });
	 }

	 $scope.backgroundFlag = false;
	 $scope.changeBackground = function(){
		 $scope.backgroundFlag = !$scope.backgroundFlag;
	 }
	 
	 mouseOutBackground = function(obj){
		 $scope.backgroundFlag = false;
	}
	 mouseOverBackground = function(obj){
		 $scope.backgroundFlag = true;
	 }
	 
	 $scope.buttonBg = function(obj) {
		 switch(obj)
		 {
			case 1:
				$("body").css({
		            "background": "url('../img/bg-0.jpg')"
//		            	"background": "#3397E4"
		        });
//				localStorage.setItem("bodyBackground", "#3397E4");
				localStorage.setItem("bodyBackground", "url('../img/bg-0.jpg')");
			     break;
			case 2:
				$("body").css({
		            "background": "url('../img/bg2.jpg')",
		            "background-size": "100% 100%"
		        });
				localStorage.setItem("bodyBackground", "url('../img/bg2.jpg')");
			     break;
			case 3:
				$("body").css({
		            "background": "url('../img/bg.jpg')",
		            "background-size": "100% 100%"
		        });
				localStorage.setItem("bodyBackground", "url('../img/bg.jpg')");
			     break; 
			case 4:
				$("body").css({
		            "background": "url('../img/bg3.jpg')",
		            "background-size": "100% 100%"
		        });
				localStorage.setItem("bodyBackground", "url('../img/bg3.jpg')");
			     break;
			case 5:
				$("body").css({
		            "background": "url('../img/bg5.jpg')",
		            "background-size": "100% 100%"
		        });
				localStorage.setItem("bodyBackground", "url('../img/bg5.jpg')");
			     break;
			case 6:
				$("body").css({
		            "background": "url('../img/bg4.jpg')",
		            "background-size": "100% 100%"
		        });
				localStorage.setItem("bodyBackground", "url('../img/bg4.jpg')");
		       break;
			case 7:
				$("body").css({
		            "background": "url('../img/bg7.jpg')",
		            "background-size": "100% 100%"
		        });
				localStorage.setItem("bodyBackground", "url('../img/bg7.jpg')");
			     break;
			case 8:
				$("body").css({
		            "background": "url('../img/bg8.jpg')",
		            "background-size": "100% 100%"
		        });
				localStorage.setItem("bodyBackground", "url('../img/bg8.jpg')");
			     break; 
			case 9:
				$("body").css({
		            "background": "url('../img/bg9.jpg')",
		            "background-size": "100% 100%"
		        });
				localStorage.setItem("bodyBackground", "url('../img/bg9.jpg')");
			     break;
			case 10:
				$("body").css({
		            "background": "url('../img/bg10.jpg')",
		            "background-size": "100% 100%"
		        });
				localStorage.setItem("bodyBackground", "url('../img/bg10.jpg')");
			     break;
			case 11:
				$("body").css({
		            "background": "url('../img/bg11.jpg')",
		            "background-size": "100% 100%"
		        });
				localStorage.setItem("bodyBackground", "url('../img/bg11.jpg')");
		       break;
			case 12:
				$("body").css({
		            "background": "url('../img/bg12.jpg')",
		            "background-size": "100% 100%"
		        });
				localStorage.setItem("bodyBackground", "url('../img/bg12.jpg')");
			     break;
			case 13:
				$("body").css({
		            "background": "url('../img/bg13.jpg')",
		            "background-size": "100% 100%"
		        });
				localStorage.setItem("bodyBackground", "url('../img/bg13.jpg')");
			     break; 
		}
//        $("body").css({
//            "background": "url('../img/bg2.jpg') "
//        });
        $scope.backgroundFlag = false;
    }
	 
	 $rootScope.rightMenuFlag = false;
	 $scope.rightMenu = function() {
		 $rootScope.rightMenuFlag = !$rootScope.rightMenuFlag;
//		 elemeRightMenu.getRightMenu("right");
	 }
	 
})
function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}
function getMenuTreeHtml(elemeAlert,json){
    var html = "";
    var childHtml = "";
    var clickedUrl = ".." + localStorage.getItem("clickedUrl");
    var clickedFlag = false;
    var url = "";
//    var urlArray = null;
    for(var i = 0; i < json.length; i++){
        html += "";
        for(var j = 0; j < json[i].subMenu.length; j++){
        	childHtml = "";
        	clickedFlag = false;
        	var iconHtml = elemeAlert.setMenuIcon(json[i].subMenu[j].menuName);
            for(var k = 0; k < json[i].subMenu[j].subMenu.length; k++){
            	url = elemeAlert.setBase64Encode(json[i].subMenu[j].subMenu[k].menuName, json[i].subMenu[j].subMenu[k].urlAddress);
//            	if(clickedUrl == json[i].subMenu[j].subMenu[k].urlAddress){
            	if(clickedUrl == url){
            		clickedFlag = true;
            	}
/*            	url = json[i].subMenu[j].subMenu[k].urlAddress;
            	if(json[i].subMenu[j].subMenu[k].menuName == "私海客户"){
            		if(url.indexOf("?") != -1){
            			urlArray = url.split("?");
            			url = urlArray[0] + "?" + $.base64.encode(urlArray[1]);
            		}
            	}*/
//            	url = elemeAlert.setBase64Encode(json[i].subMenu[j].subMenu[k].menuName, json[i].subMenu[j].subMenu[k].urlAddress);
//            	childHtml += "<li ui-sref-active='active'><a ui-sref='app.dashboard-v1' href="+json[i].subMenu[j].subMenu[k].urlAddress+"><span>"+json[i].subMenu[j].subMenu[k].menuName+"</span></a></li>"  
            	childHtml += "<li ui-sref-active='active'><a ui-sref='app.dashboard-v1' href=" + url + "><span>"+json[i].subMenu[j].subMenu[k].menuName+"</span></a></li>"  
            }
        	
        	if(null==json[i].subMenu[j].urlAddress){
        		if(clickedFlag){
//        			html += "<li ui-sref-active='active'  ng-click='toggle($event)' class='active'><a  href='' class='auto' ><span class='pull-right text-muted'><i class='fa fa-fw fa-angle-right text'></i><i class='fa fa-fw fa-angle-down text-active'></i></span><i class='glyphicon glyphicon-stats icon text-primary-dker'></i><span class='font-bold' translate='aside.nav.CALENDAR'>"+json[i].subMenu[j].menuName+"</span></a><ul class='nav nav-sub dk'>"
        			html += "<li ui-sref-active='active'  ng-click='toggle($event)' class='active'><a  href='' class='auto' ><span class='pull-right text-muted'><i class='fa fa-fw fa-angle-right text'></i><i class='fa fa-fw fa-angle-down text-active'></i></span>" + iconHtml + "<span class='font-bold' translate='aside.nav.CALENDAR'>"+json[i].subMenu[j].menuName+"</span></a><ul class='nav nav-sub dk'>"
        		}
        		else {
        			html += "<li ui-sref-active='active'  ng-click='toggle($event)' ><a  href='' class='auto' ><span class='pull-right text-muted'><i class='fa fa-fw fa-angle-right text'></i><i class='fa fa-fw fa-angle-down text-active'></i></span>" + iconHtml + "<span class='font-bold' translate='aside.nav.CALENDAR'>"+json[i].subMenu[j].menuName+"</span></a><ul class='nav nav-sub dk' style='display:none'>"
        		}
        	}
        	else{
//        		html += "<li ui-sref-active='active'  ng-click='toggle($event)' ><a  href="+json[i].subMenu[j].urlAddress+"  class='auto' ><span class='pull-right text-muted'></span><i class='glyphicon glyphicon-stats icon text-primary-dker'></i><span class='font-bold' translate='aside.nav.CALENDAR'>"+json[i].subMenu[j].menuName+"</span></a><ul class='nav nav-sub dk' style='display:none'>"
        		html += "<li ui-sref-active='active'  ng-click='toggle($event)' ><a  href="+json[i].subMenu[j].urlAddress+"  class='auto' ><span class='pull-right text-muted'></span>" + iconHtml + "<span class='font-bold' translate='aside.nav.CALENDAR'>"+json[i].subMenu[j].menuName+"</span></a><ul class='nav nav-sub dk' style='display:none'>"
        	}
        	html += childHtml;
/*            for(var k = 0; k < json[i].subMenu[j].subMenu.length; k++){
            	html += "<li ui-sref-active='active'><a ui-sref='app.dashboard-v1' href="+json[i].subMenu[j].subMenu[k].urlAddress+"><span>"+json[i].subMenu[j].subMenu[k].menuName+"</span></a></li>"  
            }*/
            html += "</ul>";
            html += "</li>";
        }
    }
    return html;
}
function len(s) {// 获取字符串的字节长度
    s = String(s);
    return s.length + (s.match(/[^\x00-\xff]/g) || "").length;// 加上匹配到的全角字符长度
}

function limit(obj, limit) {
    var val = obj.value;
    if (len(val) > limit) {
        val=val.substring(0,limit);
        while (len(val) > limit){
            val = val.substring(0, val.length - 1);
        };
        obj.value = val;
    }
}

/*function getMenuTreeHtml(json){
    var html = "";
    for(var i = 0; i < json.length; i++){
        html += "";
        for(var j = 0; j < json[i].subMenu.length; j++){
        	if(null==json[i].subMenu[j].urlAddress){
        		html += "<li ui-sref-active='active'  ng-click='toggle($event)' ><a  href='' class='auto' ><span class='pull-right text-muted'><i class='fa fa-fw fa-angle-right text'></i><i class='fa fa-fw fa-angle-down text-active'></i></span><i class='glyphicon glyphicon-stats icon text-primary-dker'></i><span class='font-bold' translate='aside.nav.CALENDAR'>"+json[i].subMenu[j].menuName+"</span></a><ul class='nav nav-sub dk' style='display:none'>"
        	}
        	else{
        		html += "<li ui-sref-active='active'  ng-click='toggle($event)' ><a  href="+json[i].subMenu[j].urlAddress+"  class='auto' ><span class='pull-right text-muted'></span><i class='glyphicon glyphicon-stats icon text-primary-dker'></i><span class='font-bold' translate='aside.nav.CALENDAR'>"+json[i].subMenu[j].menuName+"</span></a><ul class='nav nav-sub dk' style='display:none'>"
        	}
            for(var k = 0; k < json[i].subMenu[j].subMenu.length; k++){
            	html += "<li ui-sref-active='active'><a ui-sref='app.dashboard-v1' href="+json[i].subMenu[j].subMenu[k].urlAddress+"><span>"+json[i].subMenu[j].subMenu[k].menuName+"</span></a></li>"  
            }
            html += "</ul>";
            html += "</li>";
        }
    }
    return html;
}*/
