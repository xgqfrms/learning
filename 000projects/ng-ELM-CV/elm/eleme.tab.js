var elemeTab = angular.module('elemeTab', [])

elemeTab.service('elemeTab',function($rootScope,$http,replaceSignService) {
	
	// 添加tab页
	this.add = function(tab, tabs){
		// 去掉特殊字符
		tab.title = replaceSignService.replaceSign(tab.title);
	     tab.title = tab.title + '<input type="hidden" value="'+ tab.id +'">  <span id="'+ tab.id +'" onclick="closeTab(this)" onmouseOver="mouseOver(this)" onmouseOut="mouseOut(this)"><img src="../img/tab/tab-close.gif"></span>';
		   for (var i = 0; i < tabs.length; i++) {
//			   var obj1 = tabs[i].title + tabs[i].id;
//			   var obj2 = tab.title + tab.id;
			   if(tabs[i].title == tab.title){
				   tabs.activeTab = tab.title;
				   return;
			   }
		}
		
			tabs.push({title: tab.title, page: tab.page, id: tab.id});
			tabs.activeTab = tab.title;
			$rootScope.tabs = tabs;  
		
	}
	
	mouseOver = function(obj){
		obj.firstChild.src = "../img/tab/close-002.png";
	}
	mouseOut = function(obj){
		obj.firstChild.src = "../img/tab/close-009.gif";
	}
	
	closeTab = function(obj){
		var index = obj.parentElement.dataset.index;
		var idObj = document.getElementById($rootScope.tabs[index].title);
		idObj.remove();
		$rootScope.tabs.splice(index, 1);
		if(!angular.isUndefined($rootScope.tabs[index])){
			$rootScope.tabs.activeTab = $rootScope.tabs[index].title;
//			$rootScope.tabs.activeTab = 0;
		}
//		$rootScope.$apply();
		
	}
	// 删除tab页
	this.closeTab = function(id){
		var num = 0;
		while($("#" + id)){
			num++;
			$("#" + id).click();
			if(num == 2){
				break;
			}
		}
//		obj.click();
	}
	
});