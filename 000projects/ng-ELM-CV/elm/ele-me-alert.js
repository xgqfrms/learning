var elemeAlert = angular.module('elemeAlert',['mgcrea.ngStrap.modal','mgcrea.ngStrap.alert'])
    .value("alerts",[]) //如果不写这个，那么下面的$rootScope.alerts = []就只能是显示一个了
    elemeAlert.service('elemeAlert',function($rootScope,$timeout,alerts,$alert, $modal) {
//      localStorage.setItem("messageUrl","http://" + window.location.host + "/TSS_FE/lib/message/");
          var alertJson = {};
          var timer = null;
          var messCode = null;
          $rootScope.messageMap = null;
          $rootScope.alerts = alerts;
          $rootScope.alerts_modal = alerts;
          this.getMessage =function(msg) {
              if(JSON.stringify($.i18n.map) == "{}"){
                  jQuery.i18n.properties({// 加载资浏览器语言对应的资源文件  
                      name : 'message', // 资源文件名称  
                      language : 'zh_CN', //默认为英文当改为zh_CN时页面显示中文语言  
                      path : localStorage.getItem("messageUrl"), // 资源文件路径
                      mode : 'map', // 用 Map 的方式使用资源文件中的值 
                      cache: false,// 是否有缓存，如果新加的中英文字段，这里需要改成false,如果资源库文件已经稳定，可改成true;
                      encoding:'UTF-8',
                      callback : function() {// 加载成功后设置显示内容
                          
                      }  
                  });  
              }
          }
          
          
      /*// 登录页面用的alert
       this.alertLogin = function(msg,callback,list){
              if(typeof(msg) == "number"){
                    msg = msg + "";
                }
                if(msg.substring(0,1) == "1"){
                    type = "成功";
                }else if(msg.substring(0,1) == "2"){
                    type = "警告";
                }else if(msg.substring(0,1) == "3"){
                    type = "提示";
                }else if(msg.substring(0,1) == "4"){
                    type = "失败";
                }
            this.getMessage(msg);
            var messageTmp = null;
            if(list){
                var messTmp = $.i18n.prop(msg);
                for(var i = 0; i < list.length; i++){
                    messTmp = messTmp.replace("{"+i+"}",list[i]);
                }
                messageTmp = messTmp;
            }else{
                messageTmp = $.i18n.prop(msg);
            }
            
             var _html = "";
               var title = type;
             _html += '<div id="mb_box"></div><div id="mb_con"><span id="mb_tit">' + title + '</span>';
             _html += '<a id="mb_ico"></a><div id="mb_msg" style="text-align:center">' + messageTmp + '</div><div id="mb_btnbox">';
             _html += '<input id="mb_btn_ok" type="button" value="确定" onkeydown="keydown(this)"/>';
             
             _html += '</div></div>';
          
             //必须先将_html添加到body，再设置Css样式
             $("body").append(_html); 
           //生成Css
             GenerateCss = function () {
            
               $("#mb_box").css({ width: '100%', height: '100%', zIndex: '99999', position: 'fixed',
                 filter: 'Alpha(opacity=60)', backgroundColor: 'black', top: '0', left: '0', opacity: '0.6'
               });
            
               $("#mb_con").css({ zIndex: '999999', width: '400px', position: 'fixed',
                 backgroundColor: 'White', borderRadius: '15px'
               });
            
               $("#mb_tit").css({ display: 'block', fontSize: '14px', color: '#444', padding: '10px 15px',
                 backgroundColor: 'rgb(152, 228, 236)', borderRadius: '15px 15px 0 0',
                 borderBottom: '0px solid #009BFE', fontWeight: 'bold'
               });
            
               $("#mb_msg").css({ padding: '20px', lineHeight: '20px',
                 borderBottom: '1px dashed #DDD', fontSize: '15px'
               });
            
               $("#mb_ico").css({ display: 'block', position: 'absolute', right: '10px', top: '9px',
                 border: '0px solid Gray', width: '21px', height: '21px', textAlign: 'center',
                 lineHeight: '16px', cursor: 'pointer', borderRadius: '12px', fontFamily: '微软雅黑',background: 'url(images/close.png)'
               });
            
               $("#mb_btnbox").css({ margin: '15px 0 10px 0', textAlign: 'center' });
               $("#mb_btn_ok,#mb_btn_no").css({ width: '85px', height: '30px', color: 'white', border: 'none' });
               $("#mb_btn_ok").css({ backgroundColor: '#168bbb' });
               $("#mb_btn_no").css({ backgroundColor: 'gray', marginLeft: '20px' });
            
            
               //右上角关闭按钮hover样式
               $("#mb_ico").hover(function () {
//               $(this).css({ backgroundColor: 'Red', color: 'White' });
                 $(this).css({ background: 'url(images/close1.png)' });
               }, function () {
//               $(this).css({ backgroundColor: '#DDD', color: 'black' });
                   $(this).css({ background: 'url(images/close.png)' });
               });
            
               var _widht = document.documentElement.clientWidth; //屏幕宽
               var _height = document.documentElement.clientHeight; //屏幕高
            
               var boxWidth = $("#mb_con").width();
               var boxHeight = $("#mb_con").height();
            
               //让提示框居中
               $("#mb_con").css({ top: (_height - boxHeight) / 2 + "px", left: (_widht - boxWidth) / 2 + "px" });
               
//             document.getElementById('mb_tit').style.background="#FF0000";
               if(type == "成功"){
                   document.getElementById('mb_tit').style.background="#A5CD1F";
               }else if(type == "警告"){
                   document.getElementById('mb_tit').style.background="#FFE96A";
               }else if(type == "提示"){
                   document.getElementById('mb_tit').style.background="#64A0D4";
               }else if(type == "失败"){
                   document.getElementById('mb_tit').style.background="#EF7256";
               }
             }
             GenerateCss();
            
             //确定按钮事件
             $("#mb_btn_ok").click(function () {
               $("#mb_box,#mb_con").remove();
               if (typeof (callback) == 'function') {
                   callback("OK");
//                 window.parent.location.href ='login.html';
               }
             });
             
           //取消按钮事件
             $("#mb_ico").click(function () {
                 $("#mb_box,#mb_con").remove();
             });
             document.getElementById("mb_btn_ok").focus();
        }*/
          
      // H5页面用的alert
      this.h5alert = function(msg,callback,list){
        this.getMessage(msg);
        var messageTmp = null;
        if(list){
            var messTmp = $.i18n.prop(msg);
            for(var i = 0; i < list.length; i++){
                messTmp = messTmp.replace("{"+i+"}",list[i]);
            }
            messageTmp = messTmp;
        }else{
            messageTmp = $.i18n.prop(msg);
        }
        
         var _html = "";
         if(typeof(msg) == "number"){
             msg = msg + "";
         }
         if(msg.substring(0,1) == "1"){
             type = '<i class="glyphicon glyphicon-ok-sign"></i>';
//           type = "glyphicon glyphicon-ok-sign";
         }else if(msg.substring(0,1) == "2"){
             type = '<i class="glyphicon glyphicon-info-sign"></i>';
//           type = "glyphicon glyphicon-info-sign";
         }else if(msg.substring(0,1) == "3"){
//           type = "提示";
         }else if(msg.substring(0,1) == "4"){
//           type = "失败";
             type = '<i class="glyphicon glyphicon-remove-sign"></i>';
         }
          var title = type;
         _html += '<div id="mb_box"></div><div id="mb_con"><span id="mb_tit" style=" text-align: "center">' + title + '</span>';
//         _html += '<div id="mb_box"></div><div id="mb_con"><span id="mb_tit">' + title + '</span>';
//         _html += '<a id="mb_ico"></a><div id="mb_msg" style="text-align:center">' + messageTmp + '</div><div id="mb_btnbox">';
         _html += '</a><div id="mb_msg" style="text-align:center;color: black">' + messageTmp + '</div><div id="mb_btnbox" style="display:none">';
         _html += '<button type="button" class="btn btn-info" id="mb_btn_ok"><i class="glyphicon glyphicon-ok-sign"></i>确定</button>';
//         _html += '<input id="mb_btn_ok" class="btn btn-info" type="button" value="确定" />';
         /*if (type == "alert") {
           _html += '<input id="mb_btn_ok" type="button" value="确定" />';
         }
         if (type == "confirm") {
           _html += '<input id="mb_btn_ok" type="button" value="确定" />';
           _html += '<input id="mb_btn_no" type="button" value="取消" />';
         }*/
         _html += '</div></div>';
      
         //必须先将_html添加到body，再设置Css样式
         $("body").append(_html); 
//         $('window.parent.body').html(_html); 
       //生成Css
         GenerateCss = function () {
        
           $("#mb_box").css({ width: '100%', height: '100%', zIndex: '99999', position: 'fixed',
             filter: 'Alpha(opacity=60)', backgroundColor: 'rgba(87,153,202,.7)', top: '0', left: '0', opacity: '0.6'
           });
        
           $("#mb_con").css({ zIndex: '999999', width: '250px', position: 'fixed',
             backgroundColor: 'White', borderRadius: '15px'
           });
        
           $("#mb_tit").css({ display: 'block', fontSize: '20px', color: '#444', padding: '10px 15px 0px 15px',
             borderRadius: '15px 15px 0 0',
             borderBottom: '0px solid #009BFE', fontWeight: 'bold', textAlign: 'center'
           });
        
           $("#mb_msg").css({ padding: '10px 20px 20px 20px', lineHeight: '20px', 
             borderBottom: '0px solid #DDD', fontSize: '15px'
           });
        
           /*$("#mb_ico").css({ display: 'block', position: 'absolute', right: '10px', top: '9px',
             border: '0px solid Gray', width: '21px', height: '21px', textAlign: 'center',
             lineHeight: '16px', cursor: 'pointer', borderRadius: '12px', fontFamily: '微软雅黑',background: 'url(../images/close.png)'
           });*/
        
           $("#mb_btnbox").css({ margin: '5px 0 5px 0', textAlign: 'center' });
           $("#mb_btn_ok,#mb_btn_no").css({ width: '100px', height: '30px', color: 'white', border: 'none' });
//           $("#mb_btn_ok").css({ backgroundColor: '#168bbb' });
//           $("#mb_btn_no").css({ backgroundColor: 'gray', marginLeft: '20px' });
        
        
           //右上角关闭按钮hover样式
           /*$("#mb_ico").hover(function () {
//             $(this).css({ backgroundColor: 'Red', color: 'White' });
             $(this).css({ background: 'url(../images/close1.png)' });
           }, function () {
//             $(this).css({ backgroundColor: '#DDD', color: 'black' });
               $(this).css({ background: 'url(../images/close.png)' });
           });*/
        
           var _widht = document.documentElement.clientWidth; //屏幕宽
           var _height = document.documentElement.clientHeight; //屏幕高
        
           var boxWidth = $("#mb_con").width();
           var boxHeight = $("#mb_con").height();
        
           //让提示框居中
           $("#mb_con").css({ top: (_height - boxHeight) / 2 + "px", left: (_widht - boxWidth) / 2 + "px" });
           if(type == "成功"){
//             document.getElementById('mb_tit').style.background="#A5CD1F";
           }else if(type == "友情提示"){
//             document.getElementById('mb_tit').style.background="#47BFC3";
//             document.getElementById('mb_tit').style.background="#1f8e87";
           }else if(type == "提示"){
//             document.getElementById('mb_tit').style.background="#64A0D4";
           }else if(type == "失败"){
//             document.getElementById('mb_tit').style.background="#EF7256";
           }
           
         }
         GenerateCss();
        
         setTimeout(function () {
             $("#mb_btn_ok").click();
            }, 2000);
         
         //确定按钮事件
         $("#mb_btn_ok").click(function () {
           $("#mb_box,#mb_con").remove();
           if (typeof (callback) == 'function') {
               callback("OK");
//                 window.parent.location.href ='login.html';
           }
           if(msg == "40011" || msg == "40007" || msg == "20075"){
               window.parent.location.href =localStorage.getItem("ssoHomeUrl");
           }
         });
         
       //取消按钮事件
         /*$("#mb_ico").click(function () {
             $("#mb_box,#mb_con").remove();
         });*/
         document.getElementById("mb_btn_ok").focus();
    }
      
      this.h5confirm = function(msg,callback,list){
        this.getMessage(msg);
        var messageTmp = null;
        if(list){
            var messTmp = $.i18n.prop(msg);
            for(var i = 0; i < list.length; i++){
                messTmp = messTmp.replace("{"+i+"}",list[i]);
            }
            messageTmp = messTmp;
        }else{
            messageTmp = $.i18n.prop(msg);
        }
        
         var _html = "";
           var title = "友情提示";
         _html += '<div id="mb_box"></div><div id="mb_con"><span id="mb_tit">' + title + '</span>';
         _html += '</a><div id="mb_msg" style="text-align:center">' + messageTmp + '</div><div id="mb_btnbox">';
         _html += '<button type="button" class="btn btn-info" id="mb_btn_ok"><i class="glyphicon glyphicon-ok-sign"></i>确定</button>&nbsp;&nbsp;&nbsp;&nbsp;';
         _html += '<button type="button" class="btn btn-info" id="mb_btn_no"><i class="glyphicon glyphicon-info-sign"></i>取消</button>';
//         _html += '<input id="mb_btn_ok" class="btn btn-info" type="button" value="确定" />&nbsp;&nbsp;&nbsp;&nbsp;';
//         _html += '<input id="mb_btn_no" class="btn btn-info" type="button" value="取消" />';
         /*if (type == "alert") {
           _html += '<input id="mb_btn_ok" type="button" value="确定" />';
         }
         if (type == "confirm") {
           _html += '<input id="mb_btn_ok" type="button" value="确定" />';
           _html += '<input id="mb_btn_no" type="button" value="取消" />';
         }*/
         _html += '</div></div>';
      
         //必须先将_html添加到body，再设置Css样式
         $("body").append(_html); 
//         $('window.parent.body').html(_html); 
//         GenerateCss();
       //生成Css
         GenerateCss = function () {
             
             $("#mb_box").css({ width: '100%', height: '100%', zIndex: '99999', position: 'fixed',
                 filter: 'Alpha(opacity=60)', backgroundColor: 'rgba(87,153,202,.7)', top: '0', left: '0', opacity: '0.6'
               });
            
               $("#mb_con").css({ zIndex: '999999', width: '250px', position: 'fixed',
                 backgroundColor: 'White', borderRadius: '15px'
               });
            
               $("#mb_tit").css({ display: 'block', fontSize: '14px', color: '#444', padding: '10px 15px',
                 borderRadius: '15px 15px 0 0',
                 borderBottom: '0px solid #009BFE', fontWeight: 'bold'
               });
            
               $("#mb_msg").css({ padding: '20px', lineHeight: '20px', 
                 borderBottom: '1px dashed #DDD', fontSize: '15px'
               });
            
               /*$("#mb_ico").css({ display: 'block', position: 'absolute', right: '10px', top: '9px',
                 border: '0px solid Gray', width: '21px', height: '21px', textAlign: 'center',
                 lineHeight: '16px', cursor: 'pointer', borderRadius: '12px', fontFamily: '微软雅黑',background: 'url(../images/close.png)'
               });*/
            
               $("#mb_btnbox").css({ margin: '5px 0 5px 0', textAlign: 'center' });
               $("#mb_btn_ok,#mb_btn_no").css({ width: '80px', height: '30px', color: 'white', border: 'none' });
//             $("#mb_btn_ok").css({ backgroundColor: '#168bbb' });
//             $("#mb_btn_no").css({ backgroundColor: 'gray', marginLeft: '20px' });
          
          
             //右上角关闭按钮hover样式
             /*$("#mb_ico").hover(function () {
//               $(this).css({ backgroundColor: 'Red', color: 'White' });
               $(this).css({ background: 'url(../images/close1.png)' });
             }, function () {
//               $(this).css({ backgroundColor: '#DDD', color: 'black' });
               $(this).css({ background: 'url(../images/close.png)' });
             });*/
        
           var _widht = document.documentElement.clientWidth; //屏幕宽
           var _height = document.documentElement.clientHeight; //屏幕高
        
           var boxWidth = $("#mb_con").width();
           var boxHeight = $("#mb_con").height();
        
           //让提示框居中
           $("#mb_con").css({ top: (_height - boxHeight) / 2 + "px", left: (_widht - boxWidth) / 2 + "px" });
         }
         GenerateCss();
        
         //确定按钮事件
         $("#mb_btn_ok").click(function () {
           $("#mb_box,#mb_con").remove();
           if (typeof (callback) == 'function') {
               callback("OK");
           }
         });
        
         //取消按钮事件
           $("#mb_btn_no").click(function () {
             $("#mb_box,#mb_con").remove();
             if (typeof (callback) == 'function') {
                   callback("");
               }
           });
           document.getElementById("mb_btn_ok").focus();
    }
      
      // 主要页面用的alert
      this.alert = function(msg,callback,list){
          this.getMessage(msg);
          var messageTmp = null;
          if(list){
              var messTmp = $.i18n.prop(msg);
              for(var i = 0; i < list.length; i++){
                  messTmp = messTmp.replace("{"+i+"}",list[i]);
              }
              messageTmp = messTmp;
          }else{
              messageTmp = $.i18n.prop(msg);
          }
          
          var _html = "";
          if(typeof(msg) == "number"){
              msg = msg + "";
          }
          if(msg.substring(0,1) == "1"){
//           type = '<i class="glyphicon glyphicon-ok-sign"></i>';
              type = "成功";
          }else if(msg.substring(0,1) == "2"){
//           type = '<i class="glyphicon glyphicon-ok-sign"></i>';
              type = "友情提示";
          }else if(msg.substring(0,1) == "3"){
              type = "提示";
          }else if(msg.substring(0,1) == "4"){
              type = "失败";
          }
          var title = type;
          _html += '<div id="mb_box"></div><div id="mb_con"><span id="mb_tit">' + title + '</span>';
//         _html += '<a id="mb_ico"></a><div id="mb_msg" style="text-align:center">' + messageTmp + '</div><div id="mb_btnbox">';
          _html += '</a><div id="mb_msg" style="text-align:center">' + messageTmp + '</div><div id="mb_btnbox">';
          _html += '<button type="button" class="btn btn-info" id="mb_btn_ok"><i class="glyphicon glyphicon-ok-sign"></i>确定</button>';
//         _html += '<input id="mb_btn_ok" class="btn btn-info" type="button" value="确定" />';
          /*if (type == "alert") {
           _html += '<input id="mb_btn_ok" type="button" value="确定" />';
         }
         if (type == "confirm") {
           _html += '<input id="mb_btn_ok" type="button" value="确定" />';
           _html += '<input id="mb_btn_no" type="button" value="取消" />';
         }*/
          _html += '</div></div>';
          
          //必须先将_html添加到body，再设置Css样式
          $("body").append(_html); 
//         $('window.parent.body').html(_html); 
          //生成Css
          GenerateCss = function () {
              
              $("#mb_box").css({ width: '100%', height: '100%', zIndex: '99999', position: 'fixed',
                  filter: 'Alpha(opacity=60)', backgroundColor: 'rgba(87,153,202,.7)', top: '0', left: '0', opacity: '0.6'
              });
              
              $("#mb_con").css({ zIndex: '999999', width: '400px', position: 'fixed',
                  backgroundColor: 'White', borderRadius: '15px'
              });
              
              $("#mb_tit").css({ display: 'block', fontSize: '14px', color: '#444', padding: '10px 15px',
                  backgroundColor: 'rgb(152, 228, 236)', borderRadius: '15px 15px 0 0',
                  borderBottom: '0px solid #009BFE', fontWeight: 'bold'
              });
              
              $("#mb_msg").css({ padding: '20px', lineHeight: '20px',
                  borderBottom: '1px dashed #DDD', fontSize: '15px'
              });
              
              /*$("#mb_ico").css({ display: 'block', position: 'absolute', right: '10px', top: '9px',
             border: '0px solid Gray', width: '21px', height: '21px', textAlign: 'center',
             lineHeight: '16px', cursor: 'pointer', borderRadius: '12px', fontFamily: '微软雅黑',background: 'url(../images/close.png)'
           });*/
              
              $("#mb_btnbox").css({ margin: '15px 0 10px 0', textAlign: 'center' });
//           $("#mb_btn_ok,#mb_btn_no").css({ width: '85px', height: '30px', color: 'white', border: 'none' });
//           $("#mb_btn_ok").css({ backgroundColor: '#168bbb' });
//           $("#mb_btn_no").css({ backgroundColor: 'gray', marginLeft: '20px' });
              
              
              //右上角关闭按钮hover样式
              /*$("#mb_ico").hover(function () {
//             $(this).css({ backgroundColor: 'Red', color: 'White' });
             $(this).css({ background: 'url(../images/close1.png)' });
           }, function () {
//             $(this).css({ backgroundColor: '#DDD', color: 'black' });
               $(this).css({ background: 'url(../images/close.png)' });
           });*/
              
              var _widht = document.documentElement.clientWidth; //屏幕宽
              var _height = document.documentElement.clientHeight; //屏幕高
              
              var boxWidth = $("#mb_con").width();
              var boxHeight = $("#mb_con").height();
              
              //让提示框居中
              $("#mb_con").css({ top: (_height - boxHeight) / 2 + "px", left: (_widht - boxWidth) / 2 + "px" });
              if(type == "成功"){
                  document.getElementById('mb_tit').style.background="#A5CD1F";
              }else if(type == "友情提示"){
                  document.getElementById('mb_tit').style.background="#FFE96A";
              }else if(type == "提示"){
                  document.getElementById('mb_tit').style.background="#64A0D4";
              }else if(type == "失败"){
                  document.getElementById('mb_tit').style.background="#EF7256";
              }
              
          }
          GenerateCss();
          
          //确定按钮事件
          $("#mb_btn_ok").click(function () {
              $("#mb_box,#mb_con").remove();
              if (typeof (callback) == 'function') {
                  callback("OK");
//                 window.parent.location.href ='login.html';
              }
              if(msg == "40011" || msg == "40007" || msg == "20075"){
                  window.parent.location.href =localStorage.getItem("ssoHomeUrl");
              }
          });
          
          //取消按钮事件
          /*$("#mb_ico").click(function () {
             $("#mb_box,#mb_con").remove();
         });*/
          document.getElementById("mb_btn_ok").focus();
      }
    
    this.confirm = function(msg,callback,list){
        this.getMessage(msg);
        var messageTmp = null;
        if(list){
            var messTmp = $.i18n.prop(msg);
            for(var i = 0; i < list.length; i++){
                messTmp = messTmp.replace("{"+i+"}",list[i]);
            }
            messageTmp = messTmp;
        }else{
            messageTmp = $.i18n.prop(msg);
        }
        
       var _html = "";
       var title = "友情提示";
       _html += '<div id="mb_box"></div><div id="mb_con"><span id="mb_tit">' + title + '</span>';
       _html += '</a><div id="mb_msg" style="text-align:center">' + messageTmp + '</div><div id="mb_btnbox">';
       _html += '<button type="button" class="btn btn-info" id="mb_btn_ok"><i class="glyphicon glyphicon-ok-sign"></i>确定</button>&nbsp;&nbsp;&nbsp;&nbsp;';
       _html += '<button type="button" class="btn btn-info" id="mb_btn_no"><i class="glyphicon glyphicon-info-sign"></i>取消</button>';
//       _html += '<input id="mb_btn_ok" class="btn btn-info" type="button" value="确定" />&nbsp;&nbsp;&nbsp;&nbsp;';
//       _html += '<input id="mb_btn_no" class="btn btn-info" type="button" value="取消" />';
       /*if (type == "alert") {
         _html += '<input id="mb_btn_ok" type="button" value="确定" />';
       }
       if (type == "confirm") {
         _html += '<input id="mb_btn_ok" type="button" value="确定" />';
         _html += '<input id="mb_btn_no" type="button" value="取消" />';
       }*/
       _html += '</div></div>';
    
       //必须先将_html添加到body，再设置Css样式
       $("body").append(_html); 
//       $('window.parent.body').html(_html); 
//       GenerateCss();
     //生成Css
       GenerateCss = function () {
      
         $("#mb_box").css({ width: '100%', height: '100%', zIndex: '99999', position: 'fixed',
           filter: 'Alpha(opacity=60)', backgroundColor: 'rgba(87,153,202,.7)', top: '0', left: '0', opacity: '0.6'
         });
      
         $("#mb_con").css({ zIndex: '999999', width: '400px', position: 'fixed',
           backgroundColor: 'White', borderRadius: '15px'
         });
      
         $("#mb_tit").css({ display: 'block', fontSize: '14px', color: '#444', padding: '10px 15px',
           backgroundColor: 'rgb(152, 228, 236)', borderRadius: '15px 15px 0 0',
           borderBottom: '0px solid #009BFE', fontWeight: 'bold'
         });
      
         $("#mb_msg").css({ padding: '20px', lineHeight: '20px',
           borderBottom: '1px dashed #DDD', fontSize: '15px'
         });
      
        /* $("#mb_ico").css({ display: 'block', position: 'absolute', right: '10px', top: '9px',
             border: '0px solid Gray', width: '21px', height: '21px', textAlign: 'center',
             lineHeight: '16px', cursor: 'pointer', borderRadius: '12px', fontFamily: '微软雅黑',background: 'url(../images/close.png)'
           });*/
        
           $("#mb_btnbox").css({ margin: '15px 0 10px 0', textAlign: 'center' });
//           $("#mb_btn_ok,#mb_btn_no").css({ width: '85px', height: '30px', color: 'white', border: 'none' });
//           $("#mb_btn_ok").css({ backgroundColor: '#168bbb' });
//           $("#mb_btn_no").css({ backgroundColor: 'gray', marginLeft: '20px' });
        
        
           //右上角关闭按钮hover样式
           /*$("#mb_ico").hover(function () {
//             $(this).css({ backgroundColor: 'Red', color: 'White' });
             $(this).css({ background: 'url(../images/close1.png)' });
           }, function () {
//             $(this).css({ backgroundColor: '#DDD', color: 'black' });
               $(this).css({ background: 'url(../images/close.png)' });
           });*/
      
         var _widht = document.documentElement.clientWidth; //屏幕宽
         var _height = document.documentElement.clientHeight; //屏幕高
      
         var boxWidth = $("#mb_con").width();
         var boxHeight = $("#mb_con").height();
      
         //让提示框居中
         $("#mb_con").css({ top: (_height - boxHeight) / 2 + "px", left: (_widht - boxWidth) / 2 + "px" });
       }
       GenerateCss();
      
       //确定按钮事件
       $("#mb_btn_ok").click(function () {
           $("#mb_box,#mb_con").remove();
           if (typeof (callback) == 'function') {
               callback("OK");
           }
       });
      
       //取消按钮事件
         $("#mb_btn_no").click(function () {
             $("#mb_box,#mb_con").remove();
             if (typeof (callback) == 'function') {
               callback("");
           }
         });
         document.getElementById("mb_btn_ok").focus();
    }
    
    this.openLoading = function(){
       $.fn.jqLoading({ height: 100, width: 240, text: "正在加载中，请耐心等待...." });
    }
    
    this.closeLoading = function(){
       $.fn.jqLoading("destroy");
    }
    
});
