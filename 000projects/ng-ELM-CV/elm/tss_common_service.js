var TSSAPP = angular.module('TSSAPP', [ 'ngAnimate', 'ngSanitize','mgcrea.ngStrap',
		'ui.grid', 'ui.grid.pagination',
		'ui.grid.edit', 'ui.grid.autoResize', 'ui.grid.selection',
		'ui.grid.resizeColumns', 'elemeTab', 'elemeSearch', 'elemeUigrid',
		'elemeAlert', 'elemeEnumType', 'ui.select', 'elemeLogin','ui.grid.pinning','elemeFile','angularTreeview',
		'ui.bootstrap','angularjs-dropdown-multiselect','angucomplete-alt']);
TSSAPP.config(function($modalProvider) {
	angular.extend($modalProvider.defaults, {
		html : true
	});
});
TSSAPP.config(['$controllerProvider',
         function ($controllerProvider) {
             $controllerProvider.allowGlobals();
         }
     ]);
/*
 * TSSAPP.config(function($tooltipProvider) {
 * angular.extend($tooltipProvider.defaults, { animation: 'am-flip-x', trigger:
 * 'hover' title:"" }); })
 */
TSSAPP.config(function($popoverProvider) {
	angular.extend($popoverProvider.defaults, {
		html : true
	});
})
TSSAPP.factory('replaceSignService', function($http) {
	return {
		replaceSign : function(
				dataTmp) {
			var dataString = null;
			if(dataTmp != null){
				dataTmp = dataTmp.replace(/</g,"&lt;");
				dataTmp = dataTmp.replace(/>/g,"&gt;");
				dataTmp = dataTmp.replace(/\//g,"");
				dataTmp = dataTmp.replace(/\|/g,"&brvbar;");
				dataTmp = dataTmp.replace(/\&/g,"&amp;")
				dataTmp = dataTmp.replace(/\$/g,"")
				dataTmp = dataTmp.replace(/\'/g,"&acute;")
				dataTmp = dataTmp.replace("/\"/g","&quot;")
				dataTmp = dataTmp.replace("/\;/g","");
				dataTmp = dataTmp.replace("/\%/g","");
				dataTmp = dataTmp.replace("/\@/g","");
				dataTmp = dataTmp.replace("/\(/g","");
				dataTmp = dataTmp.replace("/\)/g","");
				dataTmp = dataTmp.replace("/\+/g","");
				dataTmp = dataTmp.replace("/\\n/g","");
				dataTmp = dataTmp.replace("/\\r/g","");
				dataTmp = dataTmp.replace("/\,/g","");
				dataTmp = dataTmp.replace("/\\/g","");
				dataString = dataTmp;
			}
			return dataString;
		}
	}
});
// 简历共享(status=7)，安排面试(status=1)，安排测评(status=4)service
TSSAPP
		.service(
				'resumeShareService',
				function($rootScope, $http, elemeAlert) {

					// 共享简历
					this.resumeShare = function(jssIds, status) {
						var flowStatus = 0;
						if(status == 1){
							flowStatus = 1;
						}else if(status == 4){
							flowStatus = 11;
						}
						elemeAlert.openLoading();
						var obj = {
							token : sessionStorage.getItem("token"),
							jssIds : jssIds,
							flowStatus : flowStatus,
							status : status
						}

						$http(
								{
									method : 'POST',
									url : localStorage.getItem("Url")
											+ "TSSJobSeekersInfoServiceImpl/putJobSeekersStatus",
									data : JSON.stringify(obj)
								})
								.success(
										function() {
											elemeAlert.closeLoading();
											if (status == "1") {
												window.location.href = "../html/tss_interview_list.html";
//											
											} else if (status == "4") {
												elemeAlert.alert("10008",function(choose) {

																	window.location.href = "../html/tss_survey_list.html";
																});
											} else if (status == "7") {
												elemeAlert.alert("10004");
												window.parent.$scope.$emit("pageChange",window.parent.$scope.searchObjTag,window.parent.$scope.newPage);
											}
										}).error(function() {
									if (status == "1") {
										elemeAlert.alert("40016");
									} else if (status == "4") {
										elemeAlert.alert("40017");
									} else if (status == "7") {
										elemeAlert.alert("40015");
									}
									elemeAlert.closeLoading();
								});

					}
				});
// 转人才库service
TSSAPP
		.service(
				'resumeSourcePoolService',
				function($rootScope, $http, elemeAlert, elemeTab) {

					// 转人才库
					this.resumeSourcePool = function(obj, type, optNotes) {
//						elemeAlert.openLoading();
						var rep = {
							token : sessionStorage.getItem("token"),
							tssJobSeekersInfoList : obj,
							type : type,
							optNotes : optNotes
						}

						$http(
								{
									method : 'POST',
									url : localStorage.getItem("Url")
											+ "TSSJobSeekersInfoServiceImpl/putJobSeekersSourcePool",
									data : JSON.stringify(rep)
								}).success(
								function() {
									elemeAlert.closeLoading();
									elemeAlert.alert("10003");
									if(obj.length == 1){
										elemeTab.closeTab(obj[0].jssId);
									}
									if(type == 2 || type == 6){
										$rootScope.$emit(
												"getPagedDataAsync",
												$rootScope.pagingOptions);
									}else{
										window.parent.$scope.$emit("pageChange",window.parent.$scope.searchObjTag,window.parent.$scope.newPage);
									}
									   
								}).error(function() {
							elemeAlert.alert("40018");
							elemeAlert.closeLoading();
						});

					}
				});
// 导出service
TSSAPP.service('exportService', function($rootScope, $http, elemeAlert) {

	// 导出
	this.exportDate = function(obj,searchObjTag,url,clickTmp) {
		elemeAlert.openLoading();
		var rep = {
			token : sessionStorage.getItem("token"),
			tssJobSeekersInfo : obj,
			searchObjTag : searchObjTag,
			url : url,
			clickTmp : clickTmp
		}

		$http(
				{
					method : 'POST',
					url : localStorage.getItem("Url")
							+ "TSSJobSeekersInfoServiceImpl/exportJobSeekers",
					data : JSON.stringify(rep)
				}).success(function(data) {
			elemeAlert.closeLoading();
			elemeAlert.alert("10016");
			window.open(localStorage.getItem("exportUrl") + data.exportUrl);
			// $rootScope.$emit(
			// "getPagedDataAsync",
			// $rootScope.pagingOptions);
		}).error(function() {
			if (data == "40011") {
				elemeAlert.alert("40011");
			} else {
				elemeAlert.alert("40005");
			}
			elemeAlert.closeLoading();
		});

	}
});

// 补录信息提交service
TSSAPP.service('PostRecordedInfoService', function($rootScope, $http, elemeAlert) {

	// 导出
	this.submitPostRecordedInfo = function(PostRecordedInfo, eduData, historyData, contactInfoData) {
		elemeAlert.openLoading();
		var rep = {
			PostRecordedInfo: PostRecordedInfo,
			eduData: eduData,
			historyData: historyData,
			contactInfoData: contactInfoData
		}

		$http(
				{
					method : 'POST',
					url : localStorage.getItem("Url")
							+ "TSSPostRecordedInfoServiceImpl/postRecordedInfo",
					data : JSON.stringify(rep)
				}).success(function(data) {
			elemeAlert.closeLoading();
//			elemeAlert.alert("10020");
			window.location.href = "../html/tss_upload_success.html";
			// $rootScope.$emit(
			// "getPagedDataAsync",
			// $rootScope.pagingOptions);
		}).error(function() {
/*			if (data == "40011") {
				elemeAlert.alert("40011");
			} else {
				elemeAlert.alert("40005");
			}*/
			elemeAlert.alert("40023");
			elemeAlert.closeLoading();
		});

	}
});
// 转入人才库
TSSAPP.controller('transferHire', function($rootScope, $scope, $compile, $http, elemeAlert, elemeTab) {
	var obj = $scope.newObj;
	$scope.name =obj[0].name;
	$scope.isOnlyShowOther = true;
	$scope.req = {
		tagCategory : "录用转人才库标签",
		size : 4
	};

	// 反馈标签
	$http(
			{
				method : 'GET',
				url : localStorage.getItem("Url")
						+ "TSSTagDefInfoServiceImpl/getTagDefInfoList",
				// data: JSON.stringify($scope.req)
				params : $scope.req
			})
			.success(
					function(data) {
						elemeAlert.closeLoading();
						$scope.tssTagModelList = data;
						$scope.tssTagModelList[0].value='248';

						for (var i = 0; i < $scope.tssTagModelList[0].tssTagDefInfoList.length; i++) {
							$scope.tssTagModelList[0].tssTagDefInfoList[i].value = i + 1;
						}

					})
			.error(
					function(data) {
						elemeAlert.closeLoading();
					});
	
	$scope.radioClick = function(tagid){
		if(tagid!='248'){
			$scope.isOnlyShowOther = false;
		}else{
			$scope.isOnlyShowOther = true;
		}
	}
	
	// 保存
	$scope.save = function($hide) {
		
		if($scope.tssTagModelList[0].value=='248'){
			if($scope.comment==null||$scope.comment==""||$scope.comment==undefined){
				elemeAlert.alert("40029");
				return;
			}
		}

		elemeAlert.openLoading();
		var rep = {
			token : sessionStorage.getItem("token"),
			tssJobSeekersInfoList : $scope.newObj,
			type : '5',
			tssTagModelList : $scope.tssTagModelList,
			optNotes: $scope.comment
		}
		$http(
				{
					method : 'POST',
					url : localStorage.getItem("Url")
							+ "TSSJobSeekersInfoServiceImpl/putJobSeekersSourcePool",
					data : JSON.stringify(rep)
				}).success(
				function() {
					elemeAlert.closeLoading();
					elemeAlert.alert("10003");
					$hide();
					elemeTab.closeTab(obj[0].jssId);
					$rootScope.$emit("pageChange",$rootScope.searchObjTag,$rootScope.newPage);
//					window.location.href = "../html/tss_interview_list.html";
				}).error(function() {
			elemeAlert.alert("40018");
			elemeAlert.closeLoading();
		});
	}
})
// 应聘历史
TSSAPP
		.controller(
				'historyInterview',
				function($rootScope, $scope, $http, elemeAlert) {

					// 项目经历
					$scope.historyInterviewGridOptions = {
						rowHeight : 30,
						data : 'historyInterviewData',
						enableSorting : false,
						enableColumnMenus : false,
						enablePaging : true,
						// totalServerItems : 'totalServerItems',
						// pagingOptions : $scope.pagingOptions,
						// filterOptions : $scope.filterOptions,
						// i18n:'zh-cn',
						enableColumnResizing : true,
						jqueryUIDraggable : true,
						showSelectionCheckbox : true,
						multiSelect : true,
						selectedItems : [],
						keepLastSelected : false,
						enableHorizontalScrollbar : 0,
						checkboxCellTemplate : '<div class="ngSelectionCell"><input tabindex="-1" class="ngSelectionCheckbox" type="checkbox" ng-checked="row.selected"/></div>',
						columnDefs : [
								{
									field : 'name',
									displayName : '姓名',
									cellTooltip: function( row ) {
										return row.entity.name;
									}
								},
								{
									field : 'sexValue',
									displayName : '姓别',
									cellTooltip: function( row ) {
										return row.entity.sexValue;
									}
								},
								{
									field : 'crtTime',
									displayName : '应聘时间',
									cellTooltip: function( row ) {
										return row.entity.crtTime;
									}
								},
								{
									field : 'applyposition',
									displayName : '应聘职位',
									cellTooltip: function( row ) {
										return row.entity.applyposition;
									}
								},
								{
									field : 'resumeSourceValue',
									displayName : '简历渠道',
									cellTooltip: function( row ) {
										return row.entity.resumeSourceValue;
									}
								},
								{
									field : 'annexName',
									displayName : '附件名',
									cellTooltip: function( row ) {
										return row.entity.annexName;
									}
								},
								{
									field : 'fileSize',
									displayName : '大小（KB）',
									cellTooltip: function( row ) {
										return row.entity.fileSize;
									}
								},
								// {
								// field : 'linkManName',
								// displayName : '时间'
								// },
								{
									field : 'apphisId',
									displayName : '操作',
									cellTemplate : '<button id="editBtn" type="button" class="btn btn-info" ng-click="grid.appScope.downLoad(row.entity)" >下载</button>',
									headerCellClass : "center",
									cellClass : "center",
									footerCellClass : "center"
								} ]
					};

//					$scope.formatDate = function(row) {
//						var date = new Date(row.entity.resumeUptTime);
//						var resumeUptTime = date.getFullYear() + '-'
//								+ (date.getMonth() + 1) + '-' + date.getDay()
//						return resumeUptTime;
//					};

					$scope.info = {
						token : sessionStorage.getItem("token"),
						historyInfo : $rootScope.historyInfo[0]
					}

					$scope.req = {
						info : $scope.info
					};
					elemeAlert.openLoading();
					$http(
							{
								method : 'POST',
								url : localStorage.getItem("Url")
										+ "TSSApplyHistoryServiceImpl/getTSSApplyHistoryList",
								 data : JSON.stringify($scope.info)
//								params : $scope.req
							})
							.success(
									function(data) {
										elemeAlert.closeLoading();
										$scope.historyInterviewData = data.tssApplyHistoryModelList;
									}).error(function(data) {
								if (data == "40011") {
									elemeAlert.alert("40011");
								} else {
									elemeAlert.alert("40014");
								}
								elemeAlert.closeLoading();
							});
					
					$scope.downLoad = function(obj){
						$scope.req = {
								apphisId : obj.apphisId
							};
						//modify by libing 2016-01-27
						if(obj.annexName == null)
						{
							elemeAlert.alert("20050");
//							alert("附件不存在，不能下载！");
							return;
						}
						//modify by libing 2016-01-27 end
							elemeAlert.openLoading();
							$http(
									{
										method : 'POST',
										url : localStorage.getItem("Url")
												+ "TSSResumeOricontServiceImpl/getResumeOricontByAnnexid",
										 data : JSON.stringify($scope.req)
//										params : $scope.req
									})
									.success(
											function(data) {
												elemeAlert.closeLoading();
												if(data.tssAnnexInfoList != null && data.tssAnnexInfoList.length > 0){
													window.open(localStorage.getItem("downloadUrl") + data.tssAnnexInfoList[0].pathname);
												}
											}).error(function(data) {
										if (data == "40011") {
											elemeAlert.alert("40011");
										} else {
											elemeAlert.alert("40014");
										}
										elemeAlert.closeLoading();
									});
					}
				})

// 获取面试官列表
TSSAPP
		.controller(
				'searchEmployeeList',
				function($rootScope, $scope, $http, $modal, elemeAlert) {
					//区分是查询employee表，还是审批人iverApprover表
                    var flag ='';
					$scope.req = {}
					$scope.getPagedDataAsync = function(
							flag) {
								 elemeAlert.openLoading();
					         	$scope.req.token = sessionStorage.getItem("token"),
								$scope.req.name = $scope.usename,
								$scope.req.workCode = $scope.workCode,
								$scope.req.deptName = $scope.deptname,
								$scope.req.postName = $scope.postName,
								$scope.req.flag = flag,
//								$scope.req.page = $scope.pagingOptions.paginationCurrentPage,
//								$scope.req.pageSize = $scope.pagingOptions.paginationPageSize

						$http(
								{
									method : 'POST',
									url : localStorage.getItem("Url")
											+ "TSSIverApproverServiceImpl/getIverApproverList",
									data : JSON.stringify($scope.req)
								})
								.success(
										function(data) {
										    elemeAlert.closeLoading();
											$scope.employeeList = data.employeeList;
//											$scope.totalItems = data.totalRows;
//											$scope.pagingOptions.paginationCurrentPage = data.currentPage;
//											$scope.pagingOptions.totalItems = data.totalRows;
											if (!$scope.$$phase) {
												$scope.$apply();
											}

										}).error(function(data) {
									elemeAlert.alert("40025");
									 elemeAlert.closeLoading();
								});

					};

					$scope.itemArray = null;
					var hrefHtml = location.href.split("TSS_FE/html/")[1];
					$scope.href = hrefHtml.split(".html")[0];
					if ($scope.href == "tss_offer_list") {
						$scope.title = "搜索审批人";
						$scope.listName = "审批人列表";
						$scope.columnDefs = [ {
							field : 'workCode',
							displayName : '工号'
						}, {
							field : 'name',
							displayName : '姓名'
						} /*
							 * , { field : 'mainFlag', cellTemplate : '<input
							 * type="radio" name="mainFlag"
							 * value="{{row.entity.intValue}}">', displayName :
							 * '主审批人' }
							 */];
						$scope.req.staffType = 'offer';
					} else if ($scope.href == "tss_interview_list" || $scope.href == "tss_resume_list") {
						$scope.title = "搜索面试官";
						$scope.listName = "面试官列表";
						$scope.columnDefs = [
								{
									field : 'workCode',
									displayName : '工号'
								},
								{
									field : 'name',
									displayName : '姓名'
								},
								{
									field : 'mainFlag',
									cellTemplate : '<input type="radio" name="mainFlag" data-ng-model="main_flag" id="radio_{{row.entity.intValue}}" value="{{row.entity.intValue}}" ng-click="grid.appScope.getMainFlag(row.entity)">',
									// cellTemplate : '<input type="radio"
									// name="mainFlag"
									// value="{{row.entity.intValue}}"
									// checked="{{row.entity.checkedFlag}}">',
									displayName : '主面官'
								} ];
						$scope.req.staffType = 'interview';
					}

					$scope.gridOptionsEmployee = {
						rowHeight : 30,
						data : 'employeeList',
//						paginationPageSizes : $scope.pagingOptions.paginationPageSizes,
//						totalItems : 'totalItems',
//						options : $scope.pagingOptions,
						enableSorting : false,
						enableColumnMenus : false,
						enablePaging : true,
						enableColumnResizing : true,
						jqueryUIDraggable : true,
						showSelectionCheckbox : true,
						multiSelect : true,
						selectedItems : [],
						keepLastSelected : false,
						enableHorizontalScrollbar : 0,
						checkboxHeaderTemplate : '<input class="ngSelectionHeader" type="checkbox" ng-show="multiSelect" ng-model="$parent.allSelected" onchange="angular.element(this).scope().selectChanged(this)" ng-change="toggleSelectAll($parent.allSelected, true)" />',
						checkboxCellTemplate : '<div class="ngSelectionCell"><input tabindex="-1" class="ngSelectionCheckbox" type="checkbox" ng-checked="row.selected"/></div>',
						columnDefs : [ {
							field : 'workCode',
							displayName : '工号'
						}, {
							field : 'name',
							displayName : '姓名',
						// width : 60
						}, {
							field : 'deptName',
							displayName : '部门'
						}, {
							field : 'postName',
							displayName : '岗位名称'
						} ]
					};

//					$scope.getPagedDataAsync(
//							$scope.pagingOptions.paginationPageSize,
//							$scope.pagingOptions.paginationCurrentPage, null);
					//不分页
					$scope.getPagedDataAsync("iverApprover");
        
					$rootScope.radioValue = "src";

					$scope.gridOptionsShure = {
						rowHeight : 30,
						data : 'shureData',
						enableSorting : false,
						enableColumnMenus : false,
						enablePaging : true,
						// totalServerItems : 'totalServerItems',
						// pagingOptions : $scope.pagingOptions,
						// filterOptions : $scope.filterOptions,
						// i18n:'zh-cn',
						enableColumnResizing : true,
						// showColumnMenu:false,
						// showGroupPanel:false,
						// keepLastSelected:false,
						// showFooter:false,
						jqueryUIDraggable : true,
						showSelectionCheckbox : true,
						multiSelect : true,
						selectedItems : [],
						keepLastSelected : false,
						enableHorizontalScrollbar : 0,
						checkboxHeaderTemplate : '<input class="ngSelectionHeader" type="checkbox" ng-show="multiSelect" ng-model="$parent.allSelected" onchange="angular.element(this).scope().selectChanged(this)" ng-change="toggleSelectAll($parent.allSelected, true)" />',
						checkboxCellTemplate : '<div class="ngSelectionCell"><input tabindex="-1" class="ngSelectionCheckbox" type="checkbox" ng-checked="row.selected"/></div>',
						columnDefs : $scope.columnDefs
					};

					// selectedItems选择用 start
					$scope.toggleMultiSelect = function() {
						$scope.gridApi.selection
								.setMultiSelect(!$scope.gridApi.grid.options.multiSelect);
						$scope.gridApiShure.selection
								.setMultiSelect(!$scope.gridApi.grid.options.multiSelect);
					};

					$scope.toggleRow1 = function() {
						$scope.gridApi.selection
								.toggleRowSelection($scope.gridOptionsEmployee.data[0]);
						$scope.gridApiShure.selection
								.toggleRowSelection($scope.gridOptionsShure.data[0]);
					};

					$scope.gridOptionsEmployee.onRegisterApi = function(gridApi) {
						// set gridApi on scope
						$scope.gridApi = gridApi;
					};
					$scope.gridOptionsShure.onRegisterApi = function(gridApi) {
						// set gridApi on scope
						$scope.gridApiShure = gridApi;
					};
					// selectedItems选择用 end

					// 显示指定人员框
					$scope.shureData = new Array();
					// 判断审批人或者面试人
					var intTmp = 0;
					$scope.shure = function() {
						var obj = $scope.gridApi.selection.getSelectedRows();
						if ($scope.href == "tss_offer_list") {
							if (obj.length > 1) {
								elemeAlert.alert("20016");
								return;
							} else {
								if ($scope.shureData.length > 0) {
									elemeAlert.alert("20015");
									return;
								} else {
									$scope.dataTmp = {};
									$scope.dataTmp.workCode = obj[0].workCode;
									$scope.dataTmp.name = obj[0].name;
									$scope.dataTmp.deptName = obj[0].deptName;
									$scope.dataTmp.postName = obj[0].postName;
									$scope.dataTmp.email = obj[0].email;
									$scope.dataTmp.mobile = obj[0].mobile;
									$scope.dataTmp.sex = obj[0].sex;
									// dataTmp.mainFlag = "1";
									$scope.dataTmp.mainFlag = angular
											.copy($scope.radioValue);
									$scope.dataTmp.intValue = intTmp++;
									$scope.dataTmp.checkedFlag = "true";
									$scope.shureData.push($scope.dataTmp);
									// obj.splice(0, obj.length);
								}
							}
						} else if ($scope.href == "tss_interview_list" || $scope.href == "tss_resume_list") {
							// 取得主面官
							$scope.getMainFlag = function(value) {
								$scope.main_flag = value.intValue;
								for (var i = 0; i < $scope.shureData.length; i++) {
									if ($scope.shureData[i].intValue == value.intValue) {
										$scope.shureData[i].radioFlag = "1";
									}else{
										$scope.shureData[i].radioFlag = null;
									}
								}
							}
							
							// 选定的面试官
							for (var int = 0; int < obj.length; int++) {
								var nameFlag = false;
								for (var i = 0; i < $scope.shureData.length; i++) {
									if ($scope.shureData[i].workCode == obj[int].workCode) {
										/*
										 * elemeAlert .alert( "20008", null, [
										 * $scope.shureData[i].custName ]);
										 * return;
										 */
										nameFlag = true;
										break;
									}
								}
								if (nameFlag) {
									continue;
								}
								$scope.dataTmp = {};
								$scope.dataTmp.name = obj[int].name;
								$scope.dataTmp.workCode = obj[int].workCode;
								$scope.dataTmp.deptName = obj[int].deptName;
								$scope.dataTmp.postName = obj[int].postName;
								$scope.dataTmp.email = obj[int].email;
								$scope.dataTmp.mobile = obj[int].mobile;
								$scope.dataTmp.sex = obj[int].sex;
								// dataTmp.mainFlag = "1";
								$scope.dataTmp.mainFlag = 2;
								$scope.dataTmp.intValue = intTmp++;

								$scope.shureData.push($scope.dataTmp);
								if($scope.shureData.length == 1){
									setTimeout(function () {
											  $scope.getMainFlag($scope.shureData[0]);
											  $("#radio_" + $scope.shureData[0].intValue).attr("checked",true);
										  }, 100);
								}
								// obj.splice(0, obj.length);
							}

							// $scope.shureData[0].checkedFlag = "true";
						}
					}

					$scope.remove = function() {
						var objRe = $scope.gridApiShure.selection
								.getSelectedRows();
						for (var int = 0; int < objRe.length; int++) {
							for (var i = 0; i < $scope.shureData.length; i++) {
								if ($scope.shureData[i].workCode == objRe[int].workCode) {
									if($scope.shureData[i].radioFlag != null && $scope.shureData[i].radioFlag == "1"){
										$scope.main_flag = undefined;
									}
									$scope.shureData.splice(i, 1);
									break;
								}
							}
						}
						if($scope.main_flag == null && $scope.shureData.length > 0){
							setTimeout(function () {
								document.getElementById("radio_" + $scope.shureData[0].intValue).click();
							 }, 100);
//							$scope.getMainFlag($scope.shureData[0]);
						}else{
							for (var i = 0; i < $scope.shureData.length; i++) {
								if($scope.shureData[i].radioFlag != null && $scope.shureData[i].radioFlag == "1"){
									setTimeout(function () {
									document.getElementById("radio_" + $scope.shureData[i].intValue).click();
									}, 100);
									break;
								}
							}
						}
					}

					$scope.onkeyup = function(event) {
						var e = event || window.event
								|| arguments.callee.caller.arguments[0];
						if (e && e.keyCode == 13) { // enter 键
							$scope.searchEmployeeList();
						}
					}

					$scope.searchEmployeeList = function() {
						//校验页面必须输入一个查询条件
						if(($scope.workCode==undefined||$scope.workCode=='')&&($scope.usename==undefined||$scope.usename=='')&&
								($scope.postName==undefined||$scope.postName=='')&&($scope.deptname==undefined||$scope.deptname=='')){
							elemeAlert.alert("20047");
							return;
						}
						
						$scope.getPagedDataAsync("employee");

					}
					
					
					// 确定
					$scope.confirm = function() {
						// 显示指定人员框
						// var names = "";
						// $rootScope.promoters = new Array();
						// if ($scope.gridOptions.selectedItems != null) {
						// $rootScope.maitenanceUser =
						// $scope.gridOptions.selectedItems;
						// if ($rootScope.maitenanceUser == null
						// || $rootScope.maitenanceUser.length == 0) {
						// elemeAlert.alert("20019");
						// return;
						// } else {
						// $scope.$emit("user",
						// $rootScope.maitenanceUser[0]);
						// }
						// }

						$scope.msg = null;
						// 搜索面试官
						if ($scope.req.staffType == 'interview') {
							$scope.msg = "面试官";
						}
						// 搜索审批人
						else if ($scope.req.staffType == 'offer') {
							$scope.msg = "审批人";
						}

						if ($scope.shureData == null
								|| $scope.shureData.length == 0) {
							elemeAlert.alert("20020", null, [ $scope.msg ]);
							return;
						}
						// 搜索面试官
						if ($scope.req.staffType == 'interview') {
							$scope.mainFlag = false;
							/*
							 * for (var i = 0; i < $scope.shureData.length; i++) {
							 * if($scope.shureData[i].mainFlag != null){
							 * $scope.mainFlag = true; break; } }
							 */

							// 面试邀请需要验证是否选主面官
							if (angular.isUndefined($scope.main_flag)) {
								/*
								 * $scope.mainFlag = 1; } if(!$scope.mainFlag){
								 */
								$scope.msg = "主面官";
								elemeAlert.alert("20020", null, [ $scope.msg ]);
								return;
							}

							$scope.choosedIVer = "";
							for (var i = 0; i < $scope.shureData.length; i++) {
								$scope.shureData[i].researchistName = $scope.shureData[i].name;
								$scope.shureData[i].researchistJobNo = $scope.shureData[i].workCode;
								if ($scope.main_flag == $scope.shureData[i].intValue) {
									$scope.shureData[i].mainFlag = 1;
									$scope.dataTmp = $scope.shureData[i];
								}
								if ($scope.shureData[i].mainFlag != 1) {
									if ($scope.choosedIVer == "") {
										$scope.choosedIVer = $scope.shureData[i].name;
									} else {
										$scope.choosedIVer = $scope.choosedIVer
												+ "、"
												+ $scope.shureData[i].name;
									}
								}
							}
							// 选定面试官，排在第一的是主面官
							if($scope.choosedIVer == ""){
								$scope.choosedIVer = $scope.dataTmp.name
							}else{
								$scope.choosedIVer = $scope.dataTmp.name + "、"
								+ $scope.choosedIVer;
							}
							$scope.dataTmp.choosedIVer = $scope.choosedIVer;
							$scope.response = {
								mainData : $scope.dataTmp,
								interviewRecordsList : $scope.shureData

							}
							$rootScope.$emit("employee", $scope.response);

						}
						// 审批人
						else {
							$rootScope.$emit("employee", $scope.dataTmp);
						}
						
						//记录选择的面试官，审批人
						$scope.object ={};
						$scope.approverList=[];
						if($scope.shureData.length>0){
							for(var i = 0; i < $scope.shureData.length; i++){
								var approverObject ={};
								approverObject.workCode =$scope.shureData[i].workCode;
								approverObject.name =$scope.shureData[i].name;
								approverObject.deptName =$scope.shureData[i].deptName;
								approverObject.postName =$scope.shureData[i].postName;
								approverObject.email =$scope.shureData[i].email;
								approverObject.mobile =$scope.shureData[i].mobile;
								approverObject.sex =$scope.shureData[i].sex;
								$scope.approverList.push(approverObject);
							}
						}
						$scope.object.approverList = $scope.approverList;
						$scope.object.token = sessionStorage.getItem("token");
						$scope.object.staffType = $scope.req.staffType;
						
						$http(
								{
									method : 'POST',
									url : localStorage.getItem("Url")
											+ "TSSIverApproverServiceImpl/postIverApproverList",
									data : JSON.stringify($scope.object)
								})
								.success(
										function(data) {
											//elemeAlert.alert("20048");
										    elemeAlert.closeLoading();
										}).error(function(data) {
											//alert("fail")
									 elemeAlert.closeLoading();
								});
						
						this.$hide();
						
					}

				});
// 获取上级列表
TSSAPP
.controller(
		'searchTopList',
		function($rootScope, $scope, $http, $modal, elemeAlert) {
			//区分是查询employee表，还是审批人iverApprover表
			var flag ='';
			$scope.req = {}
			$scope.getPagedDataAsync = function(
					flag) {
				elemeAlert.openLoading();
				$scope.req.token = sessionStorage.getItem("token"),
				$scope.req.name = $scope.usename,
				$scope.req.workCode = $scope.workCode,
				$scope.req.deptName = $scope.deptname,
				$scope.req.postName = $scope.postName,
				$scope.req.flag = flag,
//								$scope.req.page = $scope.pagingOptions.paginationCurrentPage,
//								$scope.req.pageSize = $scope.pagingOptions.paginationPageSize
				
				$http(
						{
							method : 'POST',
							url : localStorage.getItem("Url")
							+ "TSSIverApproverServiceImpl/getIverApproverList",
							data : JSON.stringify($scope.req)
						})
						.success(
								function(data) {
									elemeAlert.closeLoading();
									$scope.topList = data.employeeList;
//											$scope.totalItems = data.totalRows;
//											$scope.pagingOptions.paginationCurrentPage = data.currentPage;
//											$scope.pagingOptions.totalItems = data.totalRows;
//									if (!$scope.$$phase) {
//										$scope.$apply();
//									}
									
								}).error(function(data) {
									elemeAlert.alert("40025");
									elemeAlert.closeLoading();
								});
				
			};
			
			$scope.itemArray = null;
			
			$scope.gridOptionsTop = {
					rowHeight : 30,
					data : 'topList',
//						paginationPageSizes : $scope.pagingOptions.paginationPageSizes,
//						totalItems : 'totalItems',
//						options : $scope.pagingOptions,
					enableSorting : false,
					enableColumnMenus : false,
					enablePaging : true,
					enableColumnResizing : true,
					jqueryUIDraggable : true,
					showSelectionCheckbox : true,
					multiSelect : true,
					selectedItems : [],
					keepLastSelected : false,
					enableHorizontalScrollbar : 0,
					checkboxHeaderTemplate : '<input class="ngSelectionHeader" type="checkbox" ng-show="multiSelect" ng-model="$parent.allSelected" onchange="angular.element(this).scope().selectChanged(this)" ng-change="toggleSelectAll($parent.allSelected, true)" />',
					checkboxCellTemplate : '<div class="ngSelectionCell"><input tabindex="-1" class="ngSelectionCheckbox" type="checkbox" ng-checked="row.selected"/></div>',
					columnDefs : [ {
						field : 'workCode',
						displayName : '工号'
					}, {
						field : 'name',
						displayName : '姓名',
						// width : 60
					}, {
						field : 'deptName',
						displayName : '部门'
					}, {
						field : 'postName',
						displayName : '岗位名称'
					} ]
			};
			
			//不分页
			
			// selectedItems选择用 start
			$scope.toggleMultiSelect = function() {
				$scope.gridApi.selection
				.setMultiSelect(!$scope.gridApi.grid.options.multiSelect);
			};
			
			$scope.toggleRow1 = function() {
				$scope.gridApi.selection
				.toggleRowSelection($scope.gridOptionsTop.data[0]);
			};
			
			$scope.gridOptionsTop.onRegisterApi = function(gridApi) {
				// set gridApi on scope
				$scope.gridApi = gridApi;
			};
			// selectedItems选择用 end
			
			// 显示指定人员框
			$scope.onkeyup = function(event) {
				var e = event || window.event
				|| arguments.callee.caller.arguments[0];
				if (e && e.keyCode == 13) { // enter 键
					$scope.searchEmployeeList();
				}
			}
			
			$scope.searchEmployeeList = function() {
				//校验页面必须输入一个查询条件
				if(($scope.workCode==undefined||$scope.workCode=='')&&($scope.usename==undefined||$scope.usename=='')&&
						($scope.postName==undefined||$scope.postName=='')&&($scope.deptname==undefined||$scope.deptname=='')){
					elemeAlert.alert("20047");
					return;
				}
				
				$scope.getPagedDataAsync("employee");
				
			}
			
			// 确定
			$scope.confirm = function() {
				// 显示指定人员框
				var obj = $scope.gridApi.selection.getSelectedRows();
				if (obj.length == 0) {
					elemeAlert.alert("20069");
					return;
				} else if (obj.length > 1) {
					elemeAlert.alert("20069");
					return;
				} else {
					$rootScope.$emit("topName", obj);
				}
				
				this.$hide();
				
			}
			
		});
// 查看简历
TSSAPP
		.controller(
				'reviewRegister',
				function($rootScope, $scope, i18nService, $http, $modal,
						elemeTab, elemeSearch, elemeUigrid, elemeAlert,replaceSignService,resumeSourcePoolService,$filter) {
					
					//推荐简历和撤回简历
					$scope.isShowIntroduce = true;
					$scope.isShowCancel = false;
					
					
					$scope.tssJobSeekersInfoModel = angular
							.copy($rootScope.tssJobSeekersInfoModel);

					//工作年限为空，则设为0
					if($scope.tssJobSeekersInfoModel.workYears == null || $scope.tssJobSeekersInfoModel.workYears == undefined){
						$scope.tssJobSeekersInfoModel.workYears = 0;
					}

					$scope.historyData = angular
							.copy($rootScope.tssJobSeekersInfoModel.tssJobSeekersWorkExpInfoList);
					$rootScope.tssJobSeekersInfoModel = {};
					
					$scope.tssInterviewRecordsModelListReview = new Array();
					$scope.tssApprovalHistoryModelListReview = new Array();
					//接收最新的的审批记录数据
					  $rootScope.$on("newestApprovalHistory", function(event, msg) {
						  $scope.tssApprovalHistoryModelListReview = msg;
						});
					//接收最新的人员记录
				  $rootScope.$on("tssJobSeekersInfoModelObj", function(event, msg) {
					  $scope.tssJobSeekersInfoModel = msg;
					});
				  //接收最新录用历史信息
				  $rootScope.$on("tssApprovalHistoryModelList", function(event, msg) {
					  $scope.tssApprovalHistoryModelListReview = msg;
					});
				  
				  
				  //接收最新的面试记录信息
				  $rootScope.$on("tssInterviewRecordsModelListReview",function(event, msg){
					  $scope.tssInterviewRecordsModelListReview = msg;
				  });
//					
				  
				  $scope.queryWorkExpInfoList = function(){
					  $scope.paramInfo = {
							  token : sessionStorage.getItem("token"),
							  jssId : $scope.tssJobSeekersInfoModel.jssId
					  }
					  
					  $http(
							  {
								  method : 'POST',
								  url : localStorage.getItem("Url")
								  + "TSSJobSeekersInfoServiceImpl/getJssBaseInfo",
								  data : JSON.stringify($scope.paramInfo)
							  }).success(function(data) {
								  $scope.tssJobSeekersWorkExpInfoList = data.workList;
								  for(var i=0;i<$scope.tssJobSeekersWorkExpInfoList.length;i++){
									  if($scope.tssJobSeekersWorkExpInfoList[i].jobDuties!=null && $scope.tssJobSeekersWorkExpInfoList[i].jobDuties!='' && $scope.tssJobSeekersWorkExpInfoList[i].jobDuties !=undefined){
										  $scope.tssJobSeekersWorkExpInfoList[i].jobDuties =  $scope.tssJobSeekersWorkExpInfoList[i].jobDuties.replace(new RegExp(/(？)/g),' ');
									  }
								  }
							  }).error(function(data) {
								  elemeAlert.closeLoading();
								  if (data == "40011") {
									  elemeAlert.alert("40011");
								  } else {
									  elemeAlert.alert("40014");
								  }
							  });
				  }
					$scope.getResult = function() {
						elemeAlert.openLoading();
						$scope.info = {
							token : sessionStorage.getItem("token"),
							jssId : $scope.tssJobSeekersInfoModel.jssId
						}

						$scope.req = {
							info : $scope.info
						};

						$http(
								{
									method : 'GET',
									url : localStorage.getItem("Url")
											+ "TSSJobSeekersInfoServiceImpl/getJobSeekersInfo",
									// data : JSON.stringify(req)
									params : $scope.req
								})
								.success(
										function(data) {
											elemeAlert.closeLoading();
											$scope.tssHRFRIEvaluationReview = data.tssHRFRIEvaluation;
											$scope.tssHRFRIEvaluationHRReview = data.tssHRFRIEvaluationHR;
											$scope.tssInterviewRecordsModelListReview = data.tssInterviewRecordsModelList;
											$scope.tssFinalResultModelInterReview = data.tssFinalResultModelInter;
											$scope.tssFinalResultModelOfferReview = data.tssFinalResultModelOffer;
											$scope.tssPaybgCheckModelReview = data.tssPaybgCheckModel;
											$scope.tssApprovalHistoryModelListReview = data.tssApprovalHistoryModelList;
											$scope.tssRegisterInfoModelReview = data.tssRegisterInfoModel;
											$scope.tssTagResultInfoModelReview = data.tssTagResultInfoModel;
											
											//获取人员补录表中的信息
											$scope.tssPostRecordedInfoModelReview = data.tssPostRecordedInfoModel;
//											if($scope.tssPostRecordedInfoModelReview!=null && $scope.tssPostRecordedInfoModelReview!="" && $scope.tssPostRecordedInfoModelReview!=undefined){
//												$scope.tssPostRecordedInfoModelReview.birthdayStr = $filter('date')($scope.tssPostRecordedInfoModelReview.birthday,'yyyy/MM/dd');
//											}
											//获取项目经验
											$scope.tssJobSeekersProjectExpInfoModelListReview = data.tssJobSeekersProjectExpInfoModelList;
											for(var i=0;i<$scope.tssJobSeekersProjectExpInfoModelListReview.length;i++){
												if($scope.tssJobSeekersProjectExpInfoModelListReview[i].playingRole!=null && $scope.tssJobSeekersProjectExpInfoModelListReview[i].playingRole!='' && $scope.tssJobSeekersProjectExpInfoModelListReview[i].playingRole !=undefined){
													$scope.tssJobSeekersProjectExpInfoModelListReview[i].playingRole = $scope.tssJobSeekersProjectExpInfoModelListReview[i].playingRole.replace(new RegExp(/(？)/g),'');
												}
												if($scope.tssJobSeekersProjectExpInfoModelListReview[i].jobDuties!=null && $scope.tssJobSeekersProjectExpInfoModelListReview[i].jobDuties!='' && $scope.tssJobSeekersProjectExpInfoModelListReview[i].jobDuties !=undefined){
													$scope.tssJobSeekersProjectExpInfoModelListReview[i].jobDuties = $scope.tssJobSeekersProjectExpInfoModelListReview[i].jobDuties.replace(new RegExp(/(？)/g),'');
												}
											}
											//获取培训经历
											$scope.tssTrainingExperienceModelListReview = data.tssTrainingExperienceModelList;
//											if($scope.tssTrainingExperienceModelListReview!=null && $scope.tssTrainingExperienceModelListReview !="" && $scope.tssTrainingExperienceModelListReview!=undefined){
//												for(var tra=0;tra<=$scope.tssTrainingExperienceModelListReview.length-1;tra++){ 
//													$scope.tssTrainingExperienceModelListReview[tra].startDate = $filter('date')($scope.tssTrainingExperienceModelListReview[tra].startDate,'yyyy-MM-dd');
//													$scope.tssTrainingExperienceModelListReview[tra].endDate = $filter('date')($scope.tssTrainingExperienceModelListReview[tra].endDate,'yyyy-MM-dd');
//												}
//											}
											//获取证书信息
											$scope.tssObtainingCertificateModelListReview = data.tssObtainingCertificateModelList;
//											if($scope.tssObtainingCertificateModelListReview!=null && $scope.tssObtainingCertificateModelListReview !="" && $scope.tssObtainingCertificateModelListReview!=undefined){
//												for(var oba=0;oba<=$scope.tssObtainingCertificateModelListReview.length-1;oba++){ 
//													$scope.tssObtainingCertificateModelListReview[oba].getDate = $filter('date')($scope.tssObtainingCertificateModelListReview[oba].getDate,'yyyy-MM-dd');
//												}
//											}
											
											//获取邮箱短信记录
//											$scope.tssMailSMSLogInfoListReview = data.tssMailSMSLogInfoList;
											
											$scope.nameValue = ["不合格","需提升","合格","良好","优秀"];
											if($scope.tssHRFRIEvaluationHRReview != null && $scope.tssHRFRIEvaluationHRReview.tssTagResultInfoModelList != null){
//												for (var int = 0; int < $scope.tssHRFRIEvaluationHRReview.tssTagResultInfoModelList.length; int++) {
//													var list = new Array();
//													for (var i = 0; i < $scope.tssHRFRIEvaluationHRReview.tssTagResultInfoModelList[int].tagValue; i++) {
//														list.push(i);
//													}
//													$scope.tssHRFRIEvaluationHRReview.tssTagResultInfoModelList[int].list = list;
//												}
												for (var int = 0; int < $scope.tssHRFRIEvaluationHRReview.tssTagResultInfoModelList.length; int++) {
													var list = new Array();
													$scope.nameNum = 0;
													for (var int2 = 0; int2 < $scope.nameValue.length; int2++) {
														if($scope.tssHRFRIEvaluationHRReview.tssTagResultInfoModelList[int].tagValue == $scope.nameValue[int2]){
															$scope.nameNum = int2 + 1;
															break;
														}
													}
													for (var i = 0; i < $scope.nameNum; i++) {
														list.push(i);
													}
													if(list == null || list.length == 0){
														for (var i = 0; i < $scope.tssHRFRIEvaluationHRReview.tssTagResultInfoModelList[int].tagValue; i++) {
															list.push(i);
														}
													}
													$scope.tssHRFRIEvaluationHRReview.tssTagResultInfoModelList[int].list = list;
												}
											}
											//面试记录标签,3个for循环需要优化TODO
											for(var irm = 0;irm <$scope.tssInterviewRecordsModelListReview.length;irm++){
													if($scope.tssInterviewRecordsModelListReview[irm] != null && $scope.tssInterviewRecordsModelListReview[irm].tssTagResultInfoModelList != null){
														for (var int = 0; int < $scope.tssInterviewRecordsModelListReview[irm].tssTagResultInfoModelList.length; int++) {
															var list = new Array();
															$scope.nameNum = 0;
															for (var int2 = 0; int2 < $scope.nameValue.length; int2++) {
																if($scope.tssInterviewRecordsModelListReview[irm].tssTagResultInfoModelList[int].tagValue == $scope.nameValue[int2]){
																	$scope.nameNum = int2 + 1;
																	break;
																}
															}
															for (var i = 0; i < $scope.nameNum; i++) {
																list.push(i);
															}
															if(list == null || list.length == 0){
																for (var i = 0; i < $scope.tssInterviewRecordsModelListReview[irm].tssTagResultInfoModelList[int].tagValue; i++) {
																	list.push(i);
																}
															}
															$scope.tssInterviewRecordsModelListReview[irm].tssTagResultInfoModelList[int].list = list;
														}
													}
											}
											
											$scope.eduData = data.tssJobSeekerEducationInfoModelList;
//											$scope.historyData = data.tssJobSeekerWorkExpInfoModelList;
											$scope.projectData = data.tssJobSeekersProjectExpInfoModelList;
										}).error(function(data) {
									if (data == "40011") {
										elemeAlert.alert("40011");
									} else {
										elemeAlert.alert("40014");
									}
									elemeAlert.closeLoading();
								});
					}

					$scope.getResult();
					
					//点击简历详情
					$scope.showInterviewDetails = function(){
						$scope.isInterviewShow = !$scope.isInterviewShow;
					}
					//点击应聘详情
					$scope.showCandidateDetails = function(){
						$scope.isShowCandidate = !$scope.isShowCandidate;
					}
					//点击面试历史
					$scope.showInterviewHistory = function(){
						$scope.isShowInterviewHistory = !$scope.isShowInterviewHistory;
					}
					//点击录用历史
					$scope.showRecordHistory = function(){
						$scope.isShowRecordHistory = !$scope.isShowRecordHistory;
					}
					
					$scope.reviewResumeOriCont = function() {
						$scope.tab = {
							title : "查看" + $scope.tssJobSeekersInfoModel.name
									+ "的原始简历",
							page : 'tabs/tss_tab_review_resumeOriCont.html',
							id : $scope.tssJobSeekersInfoModel.jssId
						};
						elemeTab.add($scope.tab, $scope.tabs, $scope);
						$rootScope.resumeOriContJssId = $scope.tssJobSeekersInfoModel.jssId;
						$rootScope.resumeOriContTemp = $scope.tssJobSeekersInfoModel;
					}
					//面试-原始简历预览
					$scope.interviewOriginalResume = function() {
//						window.location.href = "../html/tss_tab_interviewOriginalResume.html?"+$scope.tssJobSeekersInfoModel.jssId;
						$scope.tab = {
								title : "查看" + $scope.tssJobSeekersInfoModel.name+ "的原始简历",
								page : 'tabs/tss_tab_interviewOriginalResume.html',
								id : $scope.tssJobSeekersInfoModel.jssId
							};
						elemeTab.add($scope.tab, $scope.tabs, $scope);
						$rootScope.interviewOriginalJssId = $scope.tssJobSeekersInfoModel.jssId;
						$rootScope.interviewOriginalTemp = $scope.tssJobSeekersInfoModel;
					}
					//转人才库
					$scope.doTransfer = function() {
						var obj =[];
						obj.push($scope.tssJobSeekersInfoModel);
						$scope.newObj=obj;
						if($scope.isShowResumeTrans){
								var jssIds = [];
								var resumeName = "";
								for (var int = 0; int < obj.length; int++) {
									resumeName = resumeName + obj[int].name + "、";
								}
								resumeName = resumeName.substring(0,
										resumeName.length - 1)
										elemeAlert.confirm("20003", function(choose) {
											if (choose == 'OK') {
												// 从哪个阶段转入人才库的；
												// 1：简历库；2：测评阶段；3：面试邀请阶段；4：面试反馈阶段；5：录用阶段；6：报到阶段；
												
												resumeSourcePoolService.resumeSourcePool(
														obj, '3');
												// elemeAlert.alert("10003");
											}
										}, [ resumeName ]);
						}else if($scope.isShowInterviewTrans){
								var transModal = $modal({
									template : "modals/modal_transfer_talentPool.html",
									show : true,
									backdrop : 'static',
									scope : $scope,
									keyboard : false
								});
								transModal.$promise.then(transModal.show);
						}else if($scope.isShowOfferTrans){
							var transModal = $modal({
								template : "modals/modal_transfer_hire.html",
								show : true,
								backdrop : 'static',
								scope : $scope,
								keyboard : false
							});
							transModal.$promise.then(transModal.show);
						}
						
					};
					
					
					$scope.info = {
						token : sessionStorage.getItem("token"),
						jssid : $scope.tssJobSeekersInfoModel.jssId
					}
					$http(
							{
								method : 'POST',
								url : localStorage.getItem("Url")
										+ "TSSResumeOricontServiceImpl/getResumeOricont",
								data : JSON.stringify($scope.info)
							}).success(function(data) {
						elemeAlert.closeLoading();
						$scope.tssAnnexInfoList = data.tssAnnexInfoList;
						$scope.queryWorkExpInfoList();
					}).error(function(data) {
						elemeAlert.closeLoading();
					});
					//下载附件简历word
					$scope.doDownload = function(e){
						window.open(localStorage.getItem("downloadUrl") + e);
					}
					
					//面试-撤回简历
					$scope.doBackInterview = function(obj) {
						elemeAlert.confirm("20066",
						   function(choose) {
						      if (choose == 'OK') {
						    	elemeAlert.openLoading();
						    	$scope.isShowIntroduce = false;
								$scope.isShowCancel = true;
						    	
						    	$scope.info = {
										token : sessionStorage.getItem("token"),
										jssid : obj.jssid
									}
								$http(	
										{
											method : 'POST',
											url : localStorage.getItem("Url")
													+ "TSSInterviewRecordsServiceImpl/getBackto",
											data : JSON.stringify($scope.info) 
										})
										.success(
												function(data) {
													elemeAlert.closeLoading(); 
//													elemeAlert.alert("10020");
//													 hide();
													$rootScope.$emit("pageChange",$rootScope.searchObjTag,$rootScope.newPage); 
													window.location.href = "../html/tss_interview_list.html";
												}).error(function(data) { 
										     elemeAlert.alert("40001");
											 elemeAlert.closeLoading();
										});
					         }
					      }, [obj.name]);
					}
					//面试-撤回简历单个
					$scope.doBackInterviewNew = function(obj) {
						elemeAlert.confirm("20066",
							function(choose) {
								if (choose == 'OK') {
									elemeAlert.openLoading();
									$scope.isShowIntroduce = false;
									$scope.isShowCancel = true;

									$scope.info = {
										token : sessionStorage.getItem("token"),
										intrecid : obj.intrecid
									}
									$http(
										{
											method : 'POST',
											url : localStorage.getItem("Url")
											+ "TSSInterviewRecordsServiceImpl/getBacktoNew",
											data : JSON.stringify($scope.info)
										})
										.success(
											function(data) {
												elemeAlert.closeLoading();
//													elemeAlert.alert("10020");
//													 hide();
												$rootScope.$emit("pageChange",$rootScope.searchObjTag,$rootScope.newPage);
												window.location.href = "../html/tss_interview_list.html";
											}).error(function(data) {
										elemeAlert.alert("40001");
										elemeAlert.closeLoading();
									});
								}
							}, [obj.name]);
					}
					
					// 发送录用申请
					$scope.doSend = function(object) {
						if(object.tssApprovalHistory==null){
							 $scope.tssJobSeekersInfoModel.flowStatus=14 ;
//							 $scope.tssJobSeekersInfoModel.tssApprovalHistory.apprStatus=1;
							$rootScope.offerRowEntity = $scope.tssJobSeekersInfoModel ;
							
						}else{
							
							$rootScope.offerRowEntity = object;
						}
						
								
								var sendModal = $modal({
									template : "modals/modal_send_offer.html",
									// persist: true,
									show : true,
									backdrop : 'static',
									scope : $scope,
									keyboard : false
								});
								sendModal.$promise.then(sendModal.show);

					}
					
					$scope.cancelReq = {
							token : sessionStorage.getItem("token"),
							jssId : $scope.tssJobSeekersInfoModel.jssId
					}
					$http(
							{
								method : 'GET',
								url : localStorage.getItem("Url")
								+ "TSSApprovalHistoryServiceImpl/getApprovalHistoryInfo",
								params : $scope.cancelReq
							})
							.success(
									function(data) {
										elemeAlert.closeLoading();
										$scope.tssApprovalhis = data.tssApprovalhis;
										if($scope.tssApprovalhis.length>0){
											$scope.tssApprovalhisview = $scope.tssApprovalhis[0];
										}
										
									}).error(function(data) {
										elemeAlert.closeLoading();
										elemeAlert.alert('40014');
									}); 
					
				
					//审批人录用不通过的简历清空撤回录用申请按钮 xuemei.xu 2016/4/15 13:12 start
					$scope.checkOfferview = function(obj){
							if (obj.flowStatus == 15) {
								$rootScope.tssofferFlag = true;
							}else {
								$rootScope.tssofferFlag = false;
							} 
							$rootScope.offerRowEntity = obj;
							var sendModal = $modal({
								template : "modals/modal_view_send_offer.html",
								// persist: true,
								show : true,
								backdrop : 'static',
								scope : $scope,
								keyboard : false
							});
							sendModal.$promise.then(sendModal.show); 
					}
					
					/*//发送面试通知
					$scope.doSendInterviewNotice = function(data,n){
						if(n == 1){
							$scope.firstSendFlag = 1;
						}else if(n == 2){
							$scope.firstSendFlag = 2;
						}else if(n == 3){
							$scope.firstSendFlag = 3;
						}

						$scope.InterviewerMobile = [];
						$scope.InterviewermainEmail = [];
						//获取页面显示所需数据
						$scope.addInterviewFlag = false;
						$scope.viewInterviewFlag = true;
				
						var obj = [];
						obj.push(data);
						
						$scope.choosedIVer = "";
						$scope.InterviewerMobile = [];
						$scope.InterviewermainEmail = [];
						
						
							//应聘者信息
							$scope.jssname = obj[0].name;
							$scope.jssmobile = obj[0].mobile;
							$scope.jssemail = obj[0].email;
							if(obj[0].jssid != null){
								$scope.jssId = obj[0].jssid;
							}else if(obj[0].jssId != null){
								$scope.jssId = obj[0].jssId;
							}
							
							$scope.applyposition = obj[0].applyposition;
							//获取面试官信息
							$scope.req = {
									token : sessionStorage.getItem("token"),
									jssId : $scope.jssId
							};
							$http(
									{
										method : 'GET',
										url : localStorage.getItem("Url")
										+ "TSSInterviewRecordsServiceImpl/getAllInterviewers",
										params : $scope.req
									})
									.success( 
											function(data) {
												if(data.tssInterviewRecordsList != null && data.tssInterviewRecordsList.length > 0 && $scope.firstSendFlag == 1 || $scope.firstSendFlag == 2){
			
													$scope.tssInterviewRecordsViewList = data.tssInterviewRecordsList;
													//这句的作用忘记了    勿删
//													$scope.tssInterviewRecordsModelListReview = $scope.tssInterviewRecordsViewList;
													for (var int = 0; int < $scope.tssInterviewRecordsViewList.length; int++) {
														
															$scope.InterviewerMobile[int] = $scope.tssInterviewRecordsViewList[int].mobile;
															$scope.InterviewermainEmail[int] = $scope.tssInterviewRecordsViewList[int].email;
															$scope.choosedIVer = $scope.tssInterviewRecordsViewList[int].choosedIVer;
															if($scope.tssInterviewRecordsViewList[int].mainFlag == 1){
																$scope.mainMobile = $scope.tssInterviewRecordsViewList[int].mobile;
																$scope.mainChoosedIVer = $scope.tssInterviewRecordsViewList[int].choosedIVer;
																$scope.mainEmail = $scope.tssInterviewRecordsViewList[int].email;
																$scope.workCode = $scope.tssInterviewRecordsViewList[int].researchistJobNo;
																$scope.department = $scope.tssInterviewRecordsViewList[int].deptName;
																$scope.postName = $scope.tssInterviewRecordsViewList[int].postName; 
															}
													}
												}else{
													//添加面试官标志
													$scope.addInterviewFlag = true;
													$scope.viewInterviewFlag = false;
												}
												var viewInterviewTimeModal = $modal({
													template : "modals/modal_sendInterviewTime.html",
													// persist: true,
													show : true,
													backdrop : 'static',
													scope : $scope,
													keyboard : false
												});
												viewInterviewTimeModal.$promise
												.then(viewInterviewTimeModal.show);
									}) 
									.error(
											function(data) {
												elemeAlert.closeLoading();
												if (data == "40011") {
													elemeAlert.alert("40011");
												} else {
													elemeAlert.alert("40014");
												}
									});
						
					}*/
					
					//发送面试通知
//					$scope.doSendInterviewNotice = function(data,n){
						
//						$scope.obj = data;
//						var viewInterviewTimeModal = $modal({
//							template : "modals/modal_interview_first.html",
//							// persist: true,
//							show : true,
//							backdrop : 'static',
//							scope : $scope,
//							keyboard : false
//						});
//						viewInterviewTimeModal.$promise.then(viewInterviewTimeModal.show);
						
						
						
						
//						if(n == 1){
//							//发送面试通知
//							$scope.firstSendFlag = 1;
//							$scope.MultiIVer = false;
//						}else if(n == 2){
//							//变更面试时间
//							$scope.firstSendFlag = 2;
//						}else if(n == 3){
//							//继续面试
//							$scope.firstSendFlag = 3;
//						}
//
//						$scope.InterviewerMobile = [];
//						//获取页面显示所需数据
//						$scope.addInterviewFlag = false;
//						$scope.viewInterviewFlag = true;
//				
//						var obj = [];
//						obj.push(data);
//						
//						$scope.choosedIVer = "";
////						$scope.InterviewerMobile = [];
//						$scope.InterviewermainEmail = [];
//						$scope.workCodeList = [];
//						$scope.departmentList = [];
//						$scope.postNameList = [];
//						$scope.InterviewerMobileList = [];
//						
//							//应聘者信息
//							$scope.jssname = obj[0].name;
//							$scope.jssmobile = obj[0].mobile;
//							$scope.jssemail = obj[0].email;
//							$scope.jssId = obj[0].jssId;
//							$scope.applyposition = obj[0].applyposition;
//							$scope.workYears= obj[0].workYears;
//							var num = 0;
////							if(data.tssMailSMSLogInfo != null){
////								num  = data.tssMailSMSLogInfo.interviewer.split("、").length;
////							}
//							if(data.tssIntReco != null){
//								num = data.tssIntReco.choosedIVer.split("、").length;
//							}
//							
//							//获取面试官信息
//							$scope.req = {
//									token : sessionStorage.getItem("token"),
//									jssId : $scope.jssId,
//									num : num
//							};
//							$http(
//									{
//										method : 'GET',
//										url : localStorage.getItem("Url")
//										+ "TSSInterviewRecordsServiceImpl/getAllInterviewers",
//										params : $scope.req
//									})
//									.success( 
//											function(data) {
//												if(data.tssInterviewRecordsList != null && data.tssInterviewRecordsList.length > 0 ){
//			
//													$scope.tssInterviewRecordsViewList = data.tssInterviewRecordsList;
////													
//													if(data.tssInterviewRecordsList!=null && data.tssInterviewRecordsList.length>0){
//														$scope.choosedIVerList=data.tssInterviewRecordsList[0].choosedIVer
//														$scope.names = $scope.choosedIVerList.split("、");
//													}
//													//单个/多个面试官显示控制
//													$scope.MultiIVer = false;
//													
//													for (var int = 0; int < data.tssInterviewRecordsList.length; int++) {
//														$scope.num = $scope.names.indexOf(data.tssInterviewRecordsList[int].researchistName);
//														if($scope.num==0){
//															$scope.mainMobile=data.tssInterviewRecordsList[int].mobile;
//															$scope.InterviewermainEmail =data.tssInterviewRecordsList[int].email;
//															$scope.workCode = data.tssInterviewRecordsList[int].researchistJobNo;
//															$scope.department =data.tssInterviewRecordsList[int].deptName;
//															$scope.postName = data.tssInterviewRecordsList[int].postName;
//															$scope.InterviewerMobile = data.tssInterviewRecordsList[int].mobile;
//															$scope.choosedIVer = data.tssInterviewRecordsList[int].researchistName;
//														}else if($scope.num==1){
//															$scope.InterviewerEmail1 = data.tssInterviewRecordsList[int].email;
//															$scope.workCode1 = data.tssInterviewRecordsList[int].researchistJobNo;
//															$scope.department1 = data.tssInterviewRecordsList[int].deptName;
//															$scope.postName1 = data.tssInterviewRecordsList[int].postName;
//															$scope.InterviewerMobile1 = data.tssInterviewRecordsList[int].mobile;
//															$scope.choosedIVer1 = data.tssInterviewRecordsList[int].researchistName;
//															$scope.MultiIVer = true;
//														}else if($scope.num==2){
//															$scope.InterviewerEmail2 =data.tssInterviewRecordsList[int].email;
//															$scope.workCode2 = data.tssInterviewRecordsList[int].researchistJobNo;
//															$scope.department2 = data.tssInterviewRecordsList[int].deptName;
//															$scope.postName2 =data.tssInterviewRecordsList[int].postName;
//															$scope.InterviewerMobile2 = data.tssInterviewRecordsList[int].mobile;
//															$scope.choosedIVer2 = data.tssInterviewRecordsList[int].researchistName;
//														}
////														
//														
//													}
////												
//												
//													
//												}else{
//													$scope.tssInterviewRecordsViewList = data.tssInterviewRecordsList;
//													// 发送面试通知  未推荐简历时数据全部清除
//													if($scope.firstSendFlag == 1 && data.tssInterviewRecordsList.length == 0){
//														$scope.choosedIVer = "";
//														$scope.choosedIVer1 = "";
//														$scope.choosedIVer2 = "";
//														$scope.mainMobile = "";
//														//选择框为空 选择为其他时输入框也为空
//														$scope.address = "";
//														$scope.siteList = "";
//														$scope.routes = "";
//														$scope.InterviewAddress = 0;
//														$scope.InterviewByhand = "";
//														$scope.WayRoute = 0;
//														$scope.WayRouteByhand = "";
//														
//														$scope.consult_mobile = "";
//														$scope.day = "";
//														$scope.time = "";
//														$scope.HRwords = "";
//														$scope.cityCode = "";
//													}
//												}
//												
//												//默认的联系电话为当前登录hr的手机（姓名）
//												if($scope.consult_mobile == null || $scope.consult_mobile == ''){
//													if(data.hrMobile != null){
//														if(data.hrName != null){
//															$scope.consult_mobile = data.hrMobile + "（" + data.hrName + "）";
//														}else{
//															$scope.consult_mobile = data.hrMobile;
//														}
//													}
//												}
//												
//												var viewInterviewTimeModal = $modal({
//													template : "modals/modal_sendInterviewTime.html",
//													// persist: true,
//													show : true,
//													backdrop : 'static',
//													scope : $scope,
//													keyboard : false
//												});
//												viewInterviewTimeModal.$promise
//												.then(viewInterviewTimeModal.show);
//									}) 
//									.error(
//											function(data) {
//												elemeAlert.closeLoading();
//												if (data == "40011") {
//													elemeAlert.alert("40011");
//												} else {
//													elemeAlert.alert("40014");
//												}
//									});
						
//					}
				});

//发送面试通知  解耦
TSSAPP.controller(
	'interviewTimeFirst',
	function($rootScope, $scope, $http, elemeAlert, $modal){
		
		//接受改变的面试官参数
		$rootScope.$on("resultMain",function(event,msg){
				if(msg[0] != null){
				$scope.resultMain = msg[0];
				$scope.choosedIVer = $scope.resultMain.psnname;
				$scope.mainMobile = $scope.resultMain.mobile;
			}else{
				$scope.choosedIVer = "";
				$scope.mainMobile = "";
				$scope.resultMain = null;
			}
			
		})
		$rootScope.$on("resultVice1",function(event,msg){
			$scope.resultVice1 = msg[0];
			if($scope.resultVice1 != null){
				$scope.choosedIVer1 = $scope.resultVice1.psnname;
				$scope.show_resultVice1 = msg[1];
			}else{
				$scope.choosedIVer1 = "";
				$scope.show_resultVice1 = msg[1];
			}
		})
		$rootScope.$on("resultVice2",function(event,msg){
			$scope.resultVice2 = msg[0];
			if($scope.resultVice2 != null){
				$scope.choosedIVer2 = $scope.resultVice2.psnname;
				$scope.show_resultVice2 = msg[1];
			}else{
				$scope.choosedIVer2 = "";
				$scope.show_resultVice2 = msg[1];
			}
		})

		$rootScope.$on("resultVice3",function(event,msg){
			$scope.resultVice3 = msg[0];
			if($scope.resultVice3 != null){
				$scope.choosedIVer3 = $scope.resultVice3.psnname;
				$scope.show_resultVice3 = msg[1];
			}else{
				$scope.choosedIVer3 = "";
				$scope.show_resultVice3 = msg[1];
			}
		})

		$rootScope.$on("resultVice4",function(event,msg){
			$scope.resultVice4 = msg[0];
			if($scope.resultVice4 != null){
				$scope.choosedIVer4 = $scope.resultVice4.psnname;
				$scope.show_resultVice4 = msg[1];
			}else{
				$scope.choosedIVer4 = "";
				$scope.show_resultVice4 = msg[1];
			}
		})

		$rootScope.$on("resultVice5",function(event,msg){
			$scope.resultVice5 = msg[0];
			if($scope.resultVice5 != null){
				$scope.choosedIVer5 = $scope.resultVice5.psnname;
				$scope.show_resultVice5 = msg[1];
			}else{
				$scope.choosedIVer5 = "";
				$scope.show_resultVice5 = msg[1];
			}
		})

		//面试官新增删除按钮显示
		// $scope.show_resultVice1 = false;
		// $scope.show_resultVice2 = false;
		// $scope.show_resultVice3 = false;
		// $scope.show_resultVice4 = false;
		// $scope.show_resultVice5 = false;

		$scope.addMain = function () {
			$scope.show_resultVice1 = true;
		}
		$scope.add_one = function () {
			$scope.show_resultVice2 = true;
		}
		$scope.add_two = function () {
			$scope.show_resultVice3 = true;
		}
		$scope.add_three = function () {
			$scope.show_resultVice4 = true;
		}
		$scope.add_four = function () {
			$scope.show_resultVice5 = true;
		}

		$scope.del_one = function () {
			// $scope.show_resultVice1 = false;
			// $rootScope.$emit("resultVice1",null);
			if($scope.resultVice2 != null){
				$scope.resultVice1 = $scope.resultVice2;
				$rootScope.$emit("resultVice1",[$scope.resultVice1,true]);
				$rootScope.$emit("resultVice1Name",[$scope.resultVice1,false]);
				// $scope.show_resultVice1 = true;
			}else{
				$rootScope.$emit("resultVice1",[null,false]);
				$rootScope.$emit("resultVice1Name",[null,false]);
				// $scope.show_resultVice2 = false;
			}
			if($scope.resultVice3 != null){
				$scope.resultVice2 = $scope.resultVice3;
				$rootScope.$emit("resultVice2",[$scope.resultVice2,true]);
				$rootScope.$emit("resultVice2Name",[$scope.resultVice2,false]);
				// $scope.show_resultVice2 = true;
			}else{
				$rootScope.$emit("resultVice2",[null,false]);
				$rootScope.$emit("resultVice2Name",[null,false]);
				// $scope.show_resultVice2 = false;
			}
			if($scope.resultVice4 != null){
				$scope.resultVice3 = $scope.resultVice4;
				$rootScope.$emit("resultVice3",[$scope.resultVice3,true]);
				$rootScope.$emit("resultVice3Name",[$scope.resultVice3,false]);
				// $scope.show_resultVice3 = true;
			}else{
				$rootScope.$emit("resultVice3",[null,false]);
				$rootScope.$emit("resultVice3Name",[null,false]);
				// $scope.show_resultVice3 = false;
			}
			if($scope.resultVice5 != null){
				$scope.resultVice4 = $scope.resultVice5;
				$rootScope.$emit("resultVice4",[$scope.resultVice4,true]);
				$rootScope.$emit("resultVice4Name",[$scope.resultVice4,false]);
				// $scope.show_resultVice4 = true;
			}else {
				$rootScope.$emit("resultVice4",[null,false]);
				$rootScope.$emit("resultVice4Name",[null,false]);
				// $scope.show_resultVice4 = false;
			}
			$rootScope.$emit("resultVice5",[null,false]);
			$rootScope.$emit("resultVice5Name",[null,false]);
			// $scope.show_resultVice5 = false;
		}
		$scope.del_two = function () {
			// $scope.show_resultVice2 = false;
			// $rootScope.$emit("resultVice2",null);
			if($scope.resultVice3 != null){
				$scope.resultVice2 = $scope.resultVice3;
				$rootScope.$emit("resultVice2",[$scope.resultVice2,true]);
				$rootScope.$emit("resultVice2Name",[$scope.resultVice2,false]);
				// $scope.show_resultVice2 = true;
			}else{
				$rootScope.$emit("resultVice2",[null,false]);
				$rootScope.$emit("resultVice2Name",[null,false]);
				// $scope.show_resultVice2 = false;
			}
			if($scope.resultVice4 != null){
				$scope.resultVice3 = $scope.resultVice4;
				$rootScope.$emit("resultVice3",[$scope.resultVice3,true]);
				$rootScope.$emit("resultVice3Name",[$scope.resultVice3,false]);
				// $scope.show_resultVice3 = true;
			}else{
				$rootScope.$emit("resultVice3",[null,false]);
				$rootScope.$emit("resultVice3Name",[null,false]);
				// $scope.show_resultVice3 = false;
			}
			if($scope.resultVice5 != null){
				$scope.resultVice4 = $scope.resultVice5;
				$rootScope.$emit("resultVice4",[$scope.resultVice4,true]);
				$rootScope.$emit("resultVice4Name",[$scope.resultVice4,false]);
				// $scope.show_resultVice4 = true;
			}else{
				$rootScope.$emit("resultVice4",[null,false]);
				$rootScope.$emit("resultVice4Name",[null,false]);
				// $scope.show_resultVice4 = false;
			}
			$rootScope.$emit("resultVice5",[null,false]);
			$rootScope.$emit("resultVice5Name",[null,false]);
			// $scope.show_resultVice5 = false;
		}
		$scope.del_three = function () {
			// $scope.show_resultVice3 = false;
			// $rootScope.$emit("resultVice3",null);
			if($scope.resultVice4 != null){
				$scope.resultVice3 = $scope.resultVice4;
				$rootScope.$emit("resultVice3",[$scope.resultVice3,true]);
				$rootScope.$emit("resultVice3Name",[$scope.resultVice3,false]);
				// $scope.show_resultVice3 = true;
			}else{
				$rootScope.$emit("resultVice3",[null,false]);
				$rootScope.$emit("resultVice3Name",[null,false]);
				// $scope.show_resultVice3 = false;
			}
			if($scope.resultVice5 != null){
				$scope.resultVice4 = $scope.resultVice5;
				$rootScope.$emit("resultVice4",[$scope.resultVice4,true]);
				$rootScope.$emit("resultVice4Name",[$scope.resultVice4,false]);
				// $scope.show_resultVice4 = true;
			}else{
				$rootScope.$emit("resultVice4",[null,false]);
				$rootScope.$emit("resultVice4Name",[null,false]);
				// $scope.show_resultVice4 = false;
			}
			$rootScope.$emit("resultVice5",[null,false]);
			$rootScope.$emit("resultVice5Name",[null,false]);
			// $scope.show_resultVice5 = false;
		}
		$scope.del_four = function () {
			// $scope.show_resultVice4 = false;
			// $rootScope.$emit("resultVice4",null);
			if($scope.resultVice5 != null){
				$scope.resultVice4 = $scope.resultVice5;
				$rootScope.$emit("resultVice4",[$scope.resultVice4,true]);
				$rootScope.$emit("resultVice4Name",[$scope.resultVice4,false]);
				// $scope.show_resultVice4 = true;
			}else{
				$rootScope.$emit("resultVice4",[null,false]);
				$rootScope.$emit("resultVice4Name",[null,false]);
				// $scope.show_resultVice4 = false;
			}
			$rootScope.$emit("resultVice5",[null,false]);
			$rootScope.$emit("resultVice5Name",[null,false]);
			// $scope.show_resultVice5 = false;
		}
		$scope.del_five = function () {
			// $scope.show_resultVice5 = false;
			$rootScope.$emit("resultVice5",[null,false]);
			$rootScope.$emit("resultVice5Name",[null,false]);
		}


		
		// //单个/多个面试官显示控制
		// $scope.MultiIVer = false;
		// //面试官可输入状态；
		// $scope.writeable = false;
		
		//获取页面展示初始值  传递进来的值为页面查询结果 $scope.obj
		//发送面试环节  若推荐简历后 则不可修改面试官，有多少个面试官就显示多少个；否则面试官为空，且默认为单个；
		//联系人为hr手机+（hr手机号）；

		//变更： 推荐简历后，只有主面试官不可变更，副面试官放开修改权限
		
		//候选人信息


		$rootScope.flagResulttopName=true;
		if( $rootScope.flagResulttopName){
			$scope.topName = $scope.obj.leaderjobname;
			$scope.topCode=$scope.obj.leaderjobno;
			$scope.TSSApprovalHistory={};
			$scope.TSSApprovalHistory.apprName= $scope.obj.leaderjobname;
			$rootScope.flagResulttopName=false;
		}
		
            $rootScope.$on("resulttopName",function (event,msg) {
                if(msg != null){
                    $scope.topName = msg.apprName;
                    $scope.topCode= msg.apprJobNo;
                    if($scope.topName==null|| $scope.topName==""){
                        $rootScope.flagResulttopName = true;
                    }else{
                        $rootScope.flagResulttopName = false;
                    }

                }
            })

		$scope.jssname = $scope.obj.name;
		$scope.jssmobile = $scope.obj.mobile;
		$scope.jssemail = $scope.obj.email;
		$scope.applydept=$scope.obj.applydept;
		$scope.applyposition=$scope.obj.applyposition;
		//当前轮次面试官个数
		var num = 0;
		if($scope.obj.tssIntReco != null){
			num = $scope.obj.tssIntReco.choosedIVer.split("、").length;
		}
		//获取面试官信息
		elemeAlert.openLoading();
		$scope.req = {
				token : sessionStorage.getItem("token"),
				jssId : $scope.obj.jssId,
				num : num
		}
		$http(
				{
					method : 'GET',
					url : localStorage.getItem("Url")
					+ "TSSInterviewRecordsServiceImpl/getAllInterviewers",
					params : $scope.req
				})
				.success( 
						function(data) {
							elemeAlert.closeLoading();
							
							//默认的联系电话为当前登录hr的手机（姓名）
							if(data.hrMobile != null){
								if(data.hrName != null){
									$scope.consult_mobile = data.hrMobile + "（" + data.hrName + "）";
								}else{
									$scope.consult_mobile = data.hrMobile;
								}
							}

							//默认的hr留言为 请尽快登录系统完善个人信息登记  若已完成则不显示
							//hasfinished true 为已完成 false 为未完成
                            if(data.hasfinished){
								$scope.HRwords = "";
                            }else{
								$scope.HRwords = "请尽快登录系统完善个人信息登记。";
							}

							if(data.tssInterviewRecordsList != null && data.tssInterviewRecordsList.length > 0 ){
								//面试官有则直接展示 不可以输入
								$scope.tssInterviewRecordsViewList = data.tssInterviewRecordsList;
								//主面官
								$scope.resultMain = data.tsstbEmployees[0];
								$rootScope.$emit("resultMain",[$scope.resultMain,true]);
								//副面官
								if(data.tsstbEmployees.length > 1){
									$scope.resultVice1 = data.tsstbEmployees[1];
									$rootScope.$emit("resultVice1",[$scope.resultVice1,true]);
									$rootScope.$emit("resultVice1Name",[$scope.resultVice1,false]);
								}
								if(data.tsstbEmployees.length > 2){
									$scope.resultVice2 = data.tsstbEmployees[2];
									$rootScope.$emit("resultVice2",[$scope.resultVice2,true]);
									$rootScope.$emit("resultVice2Name",[$scope.resultVice2,false]);
								}
								if(data.tsstbEmployees.length > 3){
									$scope.resultVice3 = data.tsstbEmployees[3];
									$rootScope.$emit("resultVice3",[$scope.resultVice3,true]);
									$rootScope.$emit("resultVice3Name",[$scope.resultVice3,false]);
								}
								if(data.tsstbEmployees.length > 4){
									$scope.resultVice4 = data.tsstbEmployees[4];
									$rootScope.$emit("resultVice4",[$scope.resultVice4,true]);
									$rootScope.$emit("resultVice4Name",[$scope.resultVice4,false]);
								}
								if(data.tsstbEmployees.length > 5){
									$scope.resultVice5 = data.tsstbEmployees[5];
									$rootScope.$emit("resultVice5",[$scope.resultVice5,true]);
									$rootScope.$emit("resultVice5Name",[$scope.resultVice5,false]);
								}
									
								// 发送面试通知  未推荐简历时数据全部清除
								if( data.tssInterviewRecordsList.length == 0){
									$rootScope.$emit("resultMain",[null,false]);
									$rootScope.$emit("resultVice1",[null,false]);
									$rootScope.$emit("resultVice2",[null,false]);
									$rootScope.$emit("resultVice3",[null,false]);
									$rootScope.$emit("resultVice4",[null,false]);
									$rootScope.$emit("resultVice5",[null,false]);
									//选择框为空 选择为其他时输入框也为空
									$scope.address = "";
									$scope.siteList = "";
									$scope.routes = "";
									$scope.InterviewAddress = 0;
									$scope.InterviewByhand = "";
									$scope.WayRoute = 0;
									$scope.WayRouteByhand = "";
									
									$scope.consult_mobile = "";
									$scope.day = "";
									$scope.time = "";
									// $scope.HRwords = "";
									$scope.cityCode = "";
								}
						}else{
							//没有做过推荐简历的操作  需要手动选择面试官
							$scope.writeable = true;
						}
							
						
						
							
				}) .error(
						function(data) {
							elemeAlert.closeLoading();
							if (data == "40011") {
								elemeAlert.alert("40011");
							} else {
								elemeAlert.alert("40014");
							}
				});
	
		
		
		
		
		//右上角关闭
		$scope.close = function(hide){
			hide();
		}
		
		//NO
		$scope.NO = function(hide){
			hide();
		}
		
		// // 面试官单选or多选
		// $scope.mainFlagClick = function(){
		// 	$scope.MultiIVer = !$scope.MultiIVer;
		// }
		
		// 邮箱正确性校验
		$scope.emailFlag = false;
		$scope.validateEmail = function() {
			var pattern = /^\w+([-+.]\w+)*@\w+([-.]\\w+)*\.\w+([-.]\w+)*$/;  
			if($scope.jssemail == null || $scope.jssemail == ""){
				$scope.emailFlag = false;
			}else{
				if (pattern.test($scope.jssemail)) {  
					$scope.emailFlag = false;
				}else{
					$scope.emailFlag = true;
				}
			}
		};
		$scope.focusEmail = function() {
			$scope.emailFlag = false;
		};
		
		//获取地址和交通方式
		$http({
			method : 'GET', 
			url : localStorage.getItem("Url") 
					+ 'TSSIntervierInfoServiceImpl/getInterviewInfoAndGettingThereInfo',
			/*params : null*/
		}).success(function(data){
			$scope.address = data.slist;
//			$scope.routes = data.glist;
		}).error(function(data){
			elemeAlert.alert("40031");
		})
		
		//城市选择地址
		$scope.selectCity = function(){
			if($scope.cityCode != null){
				$scope.routes = "";
				$scope.siteList = "";
				$scope.info = {
						cityCode : $scope.cityCode
				}
				$http({
					method : "POST",
					url : localStorage.getItem("Url")
						+ 'TSSIntervierInfoServiceImpl/getAddressByCityCode',
					data : JSON.stringify($scope.info)
				}).success(function(data){
					$scope.siteList = data.siteList;
					$scope.InterviewAddress = data.siteList[0].siteCode;
					$scope.selectSite();
				}).error(function(data){
					
				})
			}
		}
		//选择路径
		$scope.selectSite = function(){
			if($scope.InterviewAddress != null){//sitecode != null
				$scope.info = {
						siteCode : $scope.InterviewAddress
				}
				$http({
					 method : "POST",
					 url : localStorage.getItem("Url")
					 	+ 'TSSIntervierInfoServiceImpl/getGettingThereBySiteCode',
					 data : JSON.stringify($scope.info)
				}).success(function(data){
					$scope.routes = data.gettingList;
					//远程面试
					if($scope.InterviewAddress == -2){
						$scope.WayRoute = -2;
					}else{
						$scope.WayRoute = data.gettingList[0].gtiid;
					}
				}).error(function(data){
					
				})
			}
		}
		
		//提交表单
		$scope.saveFlag = false;
		$scope.send = function(hide){
			$scope.saveFlag = true;
			//要有面试官才能发送面试时间
			if($scope.choosedIVer != null && $scope.choosedIVer != "" && $scope.mainMobile != null && $scope.mainMobile != ""){
					elemeAlert.openLoading();
					//时间
					$scope.hRVerifytime = new Date($scope.day).format("yyyy-MM-dd")+ " "
							+ new Date($scope.time).format("hh:mm:ss");
					//手动输入的地址和交通信息
					if($scope.InterviewAddress == -1 && $scope.InterviewByhand != null){
						$scope.InterviewAddress = angular.copy($scope.InterviewByhand);
					}
					if($scope.WayRoute == -1 && $scope.WayRouteByhand != null){
						$scope.WayRoute = angular.copy($scope.WayRouteByhand);
					}
					if($scope.InterviewAddress == -2){
						$scope.InterviewAddress = "远程面试";
					}
					if($scope.WayRoute == -2){
						$scope.WayRoute = "远程面试，无须现场";
					}
					if($scope.day != null && $scope.time != null && $scope.day != "" && $scope.time != "" &&  $scope.topName!=null && $scope.topName!=""
							&& $scope.cityCode != null && $scope.cityCode != "" && $scope.cityCode != 0   &&  $scope.applydept!=null && $scope.applydept!=""
							&& $scope.InterviewAddress != null && $scope.InterviewAddress != "" && $scope.InterviewAddress != 0
							&& $scope.WayRoute != null && $scope.WayRoute != "" && $scope.WayRoute != 0  && $scope.applyposition != null && $scope.applyposition != ""
							&& $scope.consult_mobile != null && $scope.consult_mobile != "" && !$scope.emailFlag && $scope.InterviewAddress != -1 && $scope.WayRoute != -1){
						
						//发送短信 邮件
						$scope.req = {
							token : sessionStorage.getItem("token"),
							//应聘者信息
							mobile : $scope.obj.mobile,
							email :  $scope.jssemail,
							jssId : $scope.obj.jssId,
							name : $scope.obj.name,
							topName :$scope.topName,
						    topCode: $scope.topCode,
							applyposition : $scope.applyposition,
							workYears : $scope.obj.workYears,
							applydept : $scope.applydept,
							//面试官信息
							resultMain : $scope.resultMain,
							resultVice1 : $scope.resultVice1,
							resultVice2 : $scope.resultVice2,
							resultVice3 : $scope.resultVice3,
							resultVice4 : $scope.resultVice4,
							resultVice5 : $scope.resultVice5,

							cityCode : $scope.cityCode,
							hRVerifytime : $scope.hRVerifytime,
							planLocation : $scope.InterviewAddress,
							route : $scope.WayRoute,
							consult_mobile : $scope.consult_mobile,
							inviteNotes : $scope.HRwords,
							SendEmailAndMsgFlag : $scope.SendEmailAndMsgFlag
							
						}
						
						$http({
							method : 'POST',
							url : localStorage.getItem("Url")
							+ "TSSSendEMToJssServiceImpl/interviewFirst",
							data : JSON.stringify($scope.req)
						}).success(function(data){
							hide();
							$rootScope.isSendEmail = true;
							//刷新列表页面
							window.location.href = "../html/tss_interview_list.html";
							elemeAlert.closeLoading();
							
						}).error(function(data){
							elemeAlert.closeLoading();
							elemeAlert.alert("40028");
							
						})
					}else{
						elemeAlert.alert("20112");
						elemeAlert.closeLoading();
					}	
			}else{
				elemeAlert.alert("20091");
				elemeAlert.closeLoading();
			}		
			
		}
		
		
	})
	
	//变更面试时间 解耦
	TSSAPP.controller(
	'interviewChangeTime',
	function($rootScope, $scope, $http, elemeAlert, $modal){
		
		//查询已发送的面试官， 带出所有的相关信息，
		//面试官信息不能修改 
		//直接上级
		$rootScope.flagResulttopName=true;
		if( $rootScope.flagResulttopName){
			$scope.topName = $scope.obj.leaderjobname;
			$scope.topCode=$scope.obj.leaderjobno;
			$scope.TSSApprovalHistory={};
			$scope.TSSApprovalHistory.apprName= $scope.obj.leaderjobname;
			$rootScope.flagResulttopName=false;
			}
		$rootScope.$on("resulttopName",function (event,msg) {
			if(msg != null){
				$scope.topName = msg.apprName;
				$scope.topCode= msg.apprJobNo;
                if($scope.topName==null || $scope.topName==""){
                    $rootScope.flagResulttopName = true;
                }else{
                    $rootScope.flagResulttopName = false;
                }
				
			}
                
            
		})
		
		//候选人信息
		$scope.jssname = $scope.obj.name;
		$scope.jssmobile = $scope.obj.mobile;
		$scope.jssemail = $scope.obj.email;
		$scope.applydept = $scope.obj.applydept;
		$scope.applyposition = $scope.obj.applyposition;
		//当前轮次面试官个数
		var num = 0;
		if($scope.obj.tssIntReco != null){
			num = $scope.obj.tssIntReco.choosedIVer.split("、").length;
		}
		//获取面试官信息
		elemeAlert.openLoading();
		$scope.req = {
				token : sessionStorage.getItem("token"),
				jssId : $scope.obj.jssId,
				num : num
		}
		$http(
				{
					method : 'GET',
					url : localStorage.getItem("Url")
					+ "TSSInterviewRecordsServiceImpl/getAllInterviewers",
					params : $scope.req
				})
				.success( 
						function(data) {
							elemeAlert.closeLoading();
							
							
							//默认的联系电话为当前登录hr的手机（姓名）
							if(data.hrMobile != null){
								if(data.hrName != null){
									$scope.consult_mobile = data.hrMobile + "（" + data.hrName + "）";
								}else{
									$scope.consult_mobile = data.hrMobile;
								}
							}
							
							$scope.siteList = data.siteList;
							$scope.routes = data.gettingList;
							
							if(data.tssInterviewRecordsList != null && data.tssInterviewRecordsList.length > 0){
								//面试直接展示
								$scope.tssInterviewRecordsViewList = data.tssInterviewRecordsList;
								//面试官有多个 自动展开
								// if($scope.tssInterviewRecordsViewList[0].choosedIVer.split("、").length > 1){
								// 	$scope.MultiIVer = true;
								// }
								//面试时间
//								$scope.day = $scope.tssInterviewRecordsViewList[0].hRVerifyTime;
//								$scope.time = $scope.tssInterviewRecordsViewList[0].hRVerifyTime;
								//城市地点与路线
								if(data.msgLoglist.length > 0){
									$scope.consult_mobile = data.msgLoglist[0].consulttel;
									$scope.day = data.msgLoglist[0].interviewtime;
									$scope.time = data.msgLoglist[0].interviewtime;
									$scope.HRwords = data.msgLoglist[0].hrremark;
								}
								if(data.tssInterviewSiteInfo != null){
									$scope.cityCode = data.tssInterviewSiteInfo.cityCode;
									if(data.tssInterviewSiteInfo.siteCode == -1){
										$scope.InterviewAddress = -1;
										$scope.InterviewByhand = data.tssInterviewSiteInfo.interviewSite;
									}else if(data.tssInterviewSiteInfo.siteCode != null){
										$scope.InterviewAddress = data.tssInterviewSiteInfo.siteCode;
									}
								}
								if(data.tssGettingThereInfo != null){
									if(data.tssGettingThereInfo.gtiid == -1){
										$scope.WayRoute = -1;
										$scope.WayRouteByhand = data.tssGettingThereInfo.gettingThere;
									}else if(data.tssGettingThereInfo.gtiid != null){
										$scope.WayRoute = data.tssGettingThereInfo.gtiid;
									}
								}
								
								//面试官信息直接展示
								//主面官
								$scope.resultMain = data.tsstbEmployees[0];
								$scope.choosedIVer = $scope.resultMain.psnname;
								$scope.mainMobile = $scope.resultMain.mobile;
								//副面官
								if(data.tsstbEmployees.length > 1){
									$scope.resultVice1 = data.tsstbEmployees[1];
									$scope.choosedIVer1 = $scope.resultVice1.psnname;
								}
								if(data.tsstbEmployees.length > 2){
									$scope.resultVice2 = data.tsstbEmployees[2];
									$scope.choosedIVer2 = $scope.resultVice2.psnname;
								}
								if(data.tsstbEmployees.length > 3){
									$scope.resultVice3 = data.tsstbEmployees[3];
									$scope.choosedIVer3  = $scope.resultVice3.psnname;
								}
								if(data.tsstbEmployees.length > 4){
									$scope.resultVice4 = data.tsstbEmployees[4];
									$scope.choosedIVer4 = $scope.resultVice4.psnname;
								}
								if(data.tsstbEmployees.length > 5){
									$scope.resultVice5 = data.tsstbEmployees[5];
									$scope.choosedIVer5 = $scope.resultVice5.psnname;
								}
							}

							//默认的hr留言为 请尽快登录系统完善个人信息登记  若已完成则不显示
							//若已有其他留言则保留  此处不执行 hasfinished true 为已完成 false 为未完成
							if($scope.HRwords == null || $scope.HRwords == "" || $scope.HRwords == "请尽快登录系统完善个人信息登记。"){
								if(data.hasfinished){
									$scope.HRwords = "";
								}else{
									$scope.HRwords = "请尽快登录系统完善个人信息登记。";
								}
							}

							
							
							
							
				}) .error(
						function(data) {
							elemeAlert.closeLoading();
							if (data == "40011") {
								elemeAlert.alert("40011");
							} else {
								elemeAlert.alert("40014");
							}
				});
	
		//右上角关闭
		$scope.close = function(hide){
			hide();
		}
		
		//NO
		$scope.NO = function(hide){
			hide();
		}
		
		// 面试官单选or多选
		$scope.mainFlagClick = function(){
			$scope.MultiIVer = !$scope.MultiIVer;
		}
		
		// 邮箱正确性校验
		$scope.emailFlag = false;
		$scope.validateEmail = function() {
			var pattern = /^\w+([-+.]\w+)*@\w+([-.]\\w+)*\.\w+([-.]\w+)*$/;  
			if($scope.jssemail == null || $scope.jssemail == ""){
				$scope.emailFlag = false;
			}else{
				if (pattern.test($scope.jssemail)) {  
					$scope.emailFlag = false;
				}else{
					$scope.emailFlag = true;
				}
			}
		};
		$scope.focusEmail = function() {
			$scope.emailFlag = false;
		};
		
		//获取地址和交通方式
		$http({
			method : 'GET', 
			url : localStorage.getItem("Url") 
					+ 'TSSIntervierInfoServiceImpl/getInterviewInfoAndGettingThereInfo',
			/*params : null*/
		}).success(function(data){
			$scope.address = data.slist;
//			$scope.routes = data.glist;
		}).error(function(data){
			elemeAlert.alert("40031");
		})
		
		//城市选择地址
		$scope.selectCity = function(){
			if($scope.cityCode != null){
				$scope.routes = "";
				$scope.siteList = "";
				$scope.info = {
						cityCode : $scope.cityCode
				}
				$http({
					method : "POST",
					url : localStorage.getItem("Url")
						+ 'TSSIntervierInfoServiceImpl/getAddressByCityCode',
					data : JSON.stringify($scope.info)
				}).success(function(data){
					$scope.siteList = data.siteList;
					$scope.InterviewAddress = data.siteList[0].siteCode;
					$scope.selectSite();
				}).error(function(data){
					
				})
			}
		}
		//选择路径
		$scope.selectSite = function(){
			if($scope.InterviewAddress != null){//sitecode != null
				$scope.info = {
						siteCode : $scope.InterviewAddress
				}
				$http({
					 method : "POST",
					 url : localStorage.getItem("Url")
					 	+ 'TSSIntervierInfoServiceImpl/getGettingThereBySiteCode',
					 data : JSON.stringify($scope.info)
				}).success(function(data){
					$scope.routes = data.gettingList;
                    //远程面试
                    if($scope.InterviewAddress == -2){
                        $scope.WayRoute = -2;
                    }else{
                        $scope.WayRoute = data.gettingList[0].gtiid;
                    }
				}).error(function(data){
					
				})
			}
		}
		
		//提交表单
		$scope.send = function(hide){

			$scope.saveFlag = true;
			//要有面试官才能发送面试时间
			if($scope.choosedIVer != null && $scope.choosedIVer != "" && $scope.mainMobile != null && $scope.mainMobile != ""){
					elemeAlert.openLoading();
					//时间
					$scope.hRVerifytime = new Date($scope.day).format("yyyy-MM-dd")+ " "
							+ new Date($scope.time).format("hh:mm:ss");
					//手动输入的地址和交通信息
					if($scope.InterviewAddress == -1 && $scope.InterviewByhand != null){
						$scope.InterviewAddress = angular.copy($scope.InterviewByhand);
					}
					if($scope.WayRoute == -1 && $scope.WayRouteByhand != null){
						$scope.WayRoute = angular.copy($scope.WayRouteByhand);
					}
                    if($scope.InterviewAddress == -2){
                        $scope.InterviewAddress = "远程面试";
                    }
                    if($scope.WayRoute == -2){
                        $scope.WayRoute = "远程面试，无须现场";
                    }
					if($scope.day != null && $scope.time != null && $scope.day != "" && $scope.time != "" 	&& $scope.topName != null && $scope.topName != ""
							&& $scope.cityCode != null && $scope.cityCode != "" && $scope.cityCode != 0  	&& $scope.applydept != null && $scope.applydept != ""
							&& $scope.InterviewAddress != null && $scope.InterviewAddress != "" && $scope.InterviewAddress != 0
							&& $scope.WayRoute != null && $scope.WayRoute != "" && $scope.WayRoute != 0  && $scope.applyposition != null && $scope.applyposition != ""
							&& $scope.consult_mobile != null && $scope.consult_mobile != "" && !$scope.emailFlag && $scope.InterviewAddress != -1 && $scope.WayRoute != -1){
						
						//发送短信 邮件
						$scope.req = {
							token : sessionStorage.getItem("token"),
							//应聘者信息
							mobile : $scope.obj.mobile,
							email : $scope.obj.email,
							jssId : $scope.obj.jssId,
							name : $scope.obj.name,
							topName :$scope.topName,
						    topCode:$scope.topCode,
							applydept : $scope.applydept,
							applyposition : $scope.applyposition,
							workYears : $scope.obj.workYears,
							//面试官信息
							resultMain : $scope.resultMain,
							resultVice1 : $scope.resultVice1,
							resultVice2 : $scope.resultVice2,
							resultVice3 : $scope.resultVice3,
							resultVice4 : $scope.resultVice4,
							resultVice5 : $scope.resultVice5,
						
							cityCode : $scope.cityCode,
							hRVerifytime : $scope.hRVerifytime,
							planLocation : $scope.InterviewAddress,
							route : $scope.WayRoute,
							consult_mobile : $scope.consult_mobile,
							inviteNotes : $scope.HRwords,
							SendEmailAndMsgFlag : $scope.SendEmailAndMsgFlag
							
						}
						
						$http({
							method : 'POST',
							url : localStorage.getItem("Url")
							+ "TSSSendEMToJssServiceImpl/interviewChangeTime",
							data : JSON.stringify($scope.req)
						}).success(function(data){
							hide();
							$rootScope.isSendEmail = true;
							window.location.href = "../html/tss_interview_list.html";
							elemeAlert.closeLoading();
							
						}).error(function(data){
							elemeAlert.closeLoading();
							elemeAlert.alert("40028");
							
						})
					}else{
						elemeAlert.alert("20112");
						elemeAlert.closeLoading();
					}	
			}else{
				elemeAlert.alert("20091");
				elemeAlert.closeLoading();
			}		
			
		
		}
		
		
	})
	
	//继续面试 解耦
	TSSAPP.controller(
	'interviewContinue',
	function($rootScope, $scope, $http, elemeAlert, $modal){
		
		//面试官为空  时间为空  
		
		//接受改变的面试官参数
		$rootScope.$on("resultMain",function(event,msg){

			if(msg[0] != null){
                $scope.resultMain = msg[0];
				$scope.choosedIVer = $scope.resultMain.psnname;
				$scope.mainMobile = $scope.resultMain.mobile;
			}else{
				$scope.choosedIVer = "";
				$scope.mainMobile = "";
                $scope.resultMain = null;
			}
			
		})
		$rootScope.$on("resultVice1",function(event,msg){

			if(msg[0] != null){
                $scope.resultVice1 = msg[0];
				$scope.choosedIVer1 = $scope.resultVice1.psnname;
			}else{
				$scope.choosedIVer1 = "";
                $scope.resultVice1 = null;
			}
		})
		$rootScope.$on("resultVice2",function(event,msg){

			if(msg[0] != null){
                $scope.resultVice2 = msg[0];
				$scope.choosedIVer2 = $scope.resultVice2.psnname;
			}else{
				$scope.choosedIVer2 = "";
                $scope.resultVice2 = null;
			}
		})
		$rootScope.$on("resultVice3",function(event,msg){

			if(msg[0] != null){
                $scope.resultVice3 = msg[0];
				$scope.choosedIVer3 = $scope.resultVice3.psnname;
			}else{
				$scope.choosedIVer3 = "";
                $scope.resultVice3 = null;
			}
		})
		$rootScope.$on("resultVice4",function(event,msg){

			if(msg[0] != null){
                $scope.resultVice4 = msg[0];
				$scope.choosedIVer4 = $scope.resultVice4.psnname;
			}else{
				$scope.choosedIVer4 = "";
                $scope.resultVice4 = null;
			}
		})
		$rootScope.$on("resultVice5",function(event,msg){

			if(msg[0] != null){
                $scope.resultVice5 = msg[0];
				$scope.choosedIVer5 = $scope.resultVice5.psnname;
			}else{
				$scope.choosedIVer5 = "";
                $scope.resultVice5 = null;
			}
		})



		//面试官新增删除按钮显示
		$scope.show_resultVice1 = false;
		$scope.show_resultVice2 = false;
		$scope.show_resultVice3 = false;
		$scope.show_resultVice4 = false;
		$scope.show_resultVice5 = false;

		$scope.addMain = function () {
			$scope.show_resultVice1 = true;
		}
		$scope.add_one = function () {
			$scope.show_resultVice2 = true;
		}
		$scope.add_two = function () {
			$scope.show_resultVice3 = true;
		}
		$scope.add_three = function () {
			$scope.show_resultVice4 = true;
		}
		$scope.add_four = function () {
			$scope.show_resultVice5 = true;
		}

		$scope.del_one = function () {
			// $scope.show_resultVice1 = false;
			// $rootScope.$emit("resultVice1",null);
			if($scope.resultVice2 != null){
				$scope.resultVice1 = $scope.resultVice2;
				$rootScope.$emit("resultVice1",[$scope.resultVice1,true]);
				$rootScope.$emit("resultVice1Name",[$scope.resultVice1,false]);
				$scope.show_resultVice1 = true;
			}else{
				$rootScope.$emit("resultVice1",[null,false]);
				$rootScope.$emit("resultVice1Name",[null,false]);
				$scope.show_resultVice1 = false;
			}
			if($scope.resultVice3 != null){
				$scope.resultVice2 = $scope.resultVice3;
				$rootScope.$emit("resultVice2",[$scope.resultVice2,true]);
				$rootScope.$emit("resultVice2Name",[$scope.resultVice2,false]);
				$scope.show_resultVice2 = true;
			}else{
				$rootScope.$emit("resultVice2",[null,false]);
				$rootScope.$emit("resultVice2Name",[null,false]);
				$scope.show_resultVice2 = false;
			}
			if($scope.resultVice4 != null){
				$scope.resultVice3 = $scope.resultVice4;
				$rootScope.$emit("resultVice3",[$scope.resultVice3,true]);
				$rootScope.$emit("resultVice3Name",[$scope.resultVice3,false]);
				$scope.show_resultVice3 = true;
			}else{
				$rootScope.$emit("resultVice3",[null,false]);
				$rootScope.$emit("resultVice3Name",[null,false]);
				$scope.show_resultVice3 = false;
			}
			if($scope.resultVice5 != null){
				$scope.resultVice4 = $scope.resultVice5;
				$rootScope.$emit("resultVice4",[$scope.resultVice4,true]);
				$rootScope.$emit("resultVice4Name",[$scope.resultVice4,false]);
				$scope.show_resultVice4 = true;
			}else {
				$rootScope.$emit("resultVice4",[null,false]);
				$rootScope.$emit("resultVice4Name",[null,false]);
				$scope.show_resultVice4 = false;
			}
			$rootScope.$emit("resultVice5",[null,false]);
			$rootScope.$emit("resultVice5Name",[null,false]);
			$scope.show_resultVice5 = false;
		}
		$scope.del_two = function () {
			// $scope.show_resultVice2 = false;
			// $rootScope.$emit("resultVice2",null);
			if($scope.resultVice3 != null){
				$scope.resultVice2 = $scope.resultVice3;
				$rootScope.$emit("resultVice2",[$scope.resultVice2,true]);
				$rootScope.$emit("resultVice2Name",[$scope.resultVice2,false]);
				$scope.show_resultVice2 = true;
			}else{
				$rootScope.$emit("resultVice2",[null,false]);
				$rootScope.$emit("resultVice2Name",[null,false]);
				$scope.show_resultVice2 = false;
			}
			if($scope.resultVice4 != null){
				$scope.resultVice3 = $scope.resultVice4;
				$rootScope.$emit("resultVice3",[$scope.resultVice3,true]);
				$rootScope.$emit("resultVice3Name",[$scope.resultVice3,false]);
				$scope.show_resultVice3 = true;
			}else{
				$rootScope.$emit("resultVice3",[null,false]);
				$rootScope.$emit("resultVice3Name",[null,false]);
				$scope.show_resultVice3 = false;
			}
			if($scope.resultVice5 != null){
				$scope.resultVice4 = $scope.resultVice5;
				$rootScope.$emit("resultVice4",[$scope.resultVice4,true]);
				$rootScope.$emit("resultVice4Name",[$scope.resultVice4,false]);
				$scope.show_resultVice4 = true;
			}else{
				$rootScope.$emit("resultVice4",[null,false]);
				$rootScope.$emit("resultVice4Name",[null,false]);
				$scope.show_resultVice4 = false;
			}
			$rootScope.$emit("resultVice5",[null,false]);
			$rootScope.$emit("resultVice5Name",[null,false]);
			$scope.show_resultVice5 = false;
		}
		$scope.del_three = function () {
			// $scope.show_resultVice3 = false;
			// $rootScope.$emit("resultVice3",null);
			if($scope.resultVice4 != null){
				$scope.resultVice3 = $scope.resultVice4;
				$rootScope.$emit("resultVice3",[$scope.resultVice3,true]);
				$rootScope.$emit("resultVice3Name",[$scope.resultVice3,false]);
				$scope.show_resultVice3 = true;
			}else{
				$rootScope.$emit("resultVice3",[null,false]);
				$rootScope.$emit("resultVice3Name",[null,false]);
				$scope.show_resultVice3 = false;
			}
			if($scope.resultVice5 != null){
				$scope.resultVice4 = $scope.resultVice5;
				$rootScope.$emit("resultVice4",[$scope.resultVice4,true]);
				$rootScope.$emit("resultVice4Name",[$scope.resultVice4,false]);
				$scope.show_resultVice4 = true;
			}else{
				$rootScope.$emit("resultVice4",[null,false]);
				$rootScope.$emit("resultVice4Name",[null,false]);
				$scope.show_resultVice4 = false;
			}
			$rootScope.$emit("resultVice5",[null,false]);
			$rootScope.$emit("resultVice5Name",[null,false]);
			$scope.show_resultVice5 = false;
		}
		$scope.del_four = function () {
			// $scope.show_resultVice4 = false;
			// $rootScope.$emit("resultVice4",null);
			if($scope.resultVice5 != null){
				$scope.resultVice4 = $scope.resultVice5;
				$rootScope.$emit("resultVice4",[$scope.resultVice4,true]);
				$rootScope.$emit("resultVice4Name",[$scope.resultVice4,false]);
				$scope.show_resultVice4 = true;
			}else{
				$rootScope.$emit("resultVice4",[null,false]);
				$rootScope.$emit("resultVice4Name",[null,false]);
				$scope.show_resultVice4 = false;
			}
			$rootScope.$emit("resultVice5",[null,false]);
			$rootScope.$emit("resultVice5Name",[null,false]);
			$scope.show_resultVice5 = false;
		}
		$scope.del_five = function () {
			$scope.show_resultVice5 = false;
			$rootScope.$emit("resultVice5",[null,false]);
			$rootScope.$emit("resultVice5Name",[null,false]);
		}
		$rootScope.flagResulttopName=true;
		if( $rootScope.flagResulttopName){
			$scope.topName = $scope.obj.leaderjobname;
			$scope.topCode=$scope.obj.leaderjobno;
			$scope.TSSApprovalHistory={};
			$scope.TSSApprovalHistory.apprName= $scope.obj.leaderjobname;
			$rootScope.flagResulttopName=false;
		}
		$rootScope.$on("resulttopName",function (event,msg) {
			if(msg != null){
				$scope.topName = msg.apprName;
				$scope.topCode= msg.apprJobNo;
                if($scope.topName==null || $scope.topName==""){
                    $rootScope.flagResulttopName = true;
                }else{
                    $rootScope.flagResulttopName = false;
                }
			}
		})
		//候选人信息
		$scope.jssname = $scope.obj.name;
		$scope.jssmobile = $scope.obj.mobile;
		$scope.jssemail = $scope.obj.email;
		$scope.applydept = $scope.obj.applydept;
		$scope.applyposition = $scope.obj.applyposition;
		//当前轮次面试官个数
		var num = 0;
		if($scope.obj.tssIntReco != null){
			num = $scope.obj.tssIntReco.choosedIVer.split("、").length;
		}
		//获取面试官信息
		elemeAlert.openLoading();
		$scope.req = {
				token : sessionStorage.getItem("token"),
				jssId : $scope.obj.jssId,
				num : num
		}
		$http(
				{
					method : 'GET',
					url : localStorage.getItem("Url")
					+ "TSSInterviewRecordsServiceImpl/getAllInterviewers",
					params : $scope.req
				})
				.success( 
						function(data) {
							
							elemeAlert.closeLoading();
							
							//默认的联系电话为当前登录hr的手机（姓名）
							if(data.hrMobile != null){
								if(data.hrName != null){
									$scope.consult_mobile = data.hrMobile + "（" + data.hrName + "）";
								}else{
									$scope.consult_mobile = data.hrMobile;
								}
							}
							
							$scope.siteList = data.siteList;
							$scope.routes = data.gettingList;
							
							if(data.tssInterviewRecordsList != null && data.tssInterviewRecordsList.length > 0){
								//面试直接展示
								$scope.tssInterviewRecordsViewList = data.tssInterviewRecordsList;
								//城市地点与路线
								if(data.msgLoglist.length > 0){
									$scope.consult_mobile = data.msgLoglist[0].consulttel;
									$scope.day = data.msgLoglist[0].interviewtime;
									$scope.time = data.msgLoglist[0].interviewtime;
									$scope.HRwords = data.msgLoglist[0].hrremark;
								}
								if(data.tssInterviewSiteInfo != null){
									$scope.cityCode = data.tssInterviewSiteInfo.cityCode;
									if(data.tssInterviewSiteInfo.siteCode == -1){
										$scope.InterviewAddress = -1;
										$scope.InterviewByhand = data.tssInterviewSiteInfo.interviewSite;
									}else if(data.tssInterviewSiteInfo.siteCode != null){
										$scope.InterviewAddress = data.tssInterviewSiteInfo.siteCode;
									}
								}
								if(data.tssGettingThereInfo != null){
									if(data.tssGettingThereInfo.gtiid == -1){
										$scope.WayRoute = -1;
										$scope.WayRouteByhand = data.tssGettingThereInfo.gettingThere;
									}else if(data.tssGettingThereInfo.gtiid != null){
										$scope.WayRoute = data.tssGettingThereInfo.gtiid;
									}
								}
							}

							//默认的hr留言为 请尽快登录系统完善个人信息登记  若已完成则不显示
							//若已有其他留言则保留  此处不执行 hasfinished true 为已完成 false 为未完成
							if($scope.HRwords == null || $scope.HRwords == "" || $scope.HRwords == "请尽快登录系统完善个人信息登记。"){
								if(data.hasfinished){
									$scope.HRwords = "";
								}else{
									$scope.HRwords = "请尽快登录系统完善个人信息登记。";
								}
							}
							
							//面试官数据清空
							$rootScope.$emit("resultMain",[null,false]);
							$rootScope.$emit("resultVice1",[null,false]);
							$rootScope.$emit("resultVice2",[null,false]);
							$rootScope.$emit("resultVice3",[null,false]);
							$rootScope.$emit("resultVice4",[null,false]);
							$rootScope.$emit("resultVice5",[null,false]);
							$scope.day = "";
							$scope.time = "";
							
							
							
							
				}) .error(
						function(data) {
							elemeAlert.closeLoading();
							if (data == "40011") {
								elemeAlert.alert("40011");
							} else {
								elemeAlert.alert("40014");
							}
				});
	
		//右上角关闭
		$scope.close = function(hide){
			hide();
		}
		
		//NO
		$scope.NO = function(hide){
			hide();
		}
		
		// 面试官单选or多选
		$scope.mainFlagClick = function(){
			$scope.MultiIVer = !$scope.MultiIVer;
		}
		
		// 邮箱正确性校验
		$scope.emailFlag = false;
		$scope.validateEmail = function() {
			var pattern = /^\w+([-+.]\w+)*@\w+([-.]\\w+)*\.\w+([-.]\w+)*$/;  
			if($scope.jssemail == null || $scope.jssemail == ""){
				$scope.emailFlag = false;
			}else{
				if (pattern.test($scope.jssemail)) {  
					$scope.emailFlag = false;
				}else{
					$scope.emailFlag = true;
				}
			}
		};
		$scope.focusEmail = function() {
			$scope.emailFlag = false;
		};
		
		//获取地址和交通方式
		$http({
			method : 'GET', 
			url : localStorage.getItem("Url") 
					+ 'TSSIntervierInfoServiceImpl/getInterviewInfoAndGettingThereInfo',
			/*params : null*/
		}).success(function(data){
			$scope.address = data.slist;
		}).error(function(data){
			elemeAlert.alert("40031");
		})
		
		//城市选择地址
		$scope.selectCity = function(){
			if($scope.cityCode != null){
				$scope.routes = "";
				$scope.siteList = "";
				$scope.info = {
						cityCode : $scope.cityCode
				}
				$http({
					method : "POST",
					url : localStorage.getItem("Url")
						+ 'TSSIntervierInfoServiceImpl/getAddressByCityCode',
					data : JSON.stringify($scope.info)
				}).success(function(data){
					$scope.siteList = data.siteList;
					$scope.InterviewAddress = data.siteList[0].siteCode;
					$scope.selectSite();
				}).error(function(data){
					
				})
			}
		}
		//选择路径
		$scope.selectSite = function(){
			if($scope.InterviewAddress != null){//sitecode != null
				$scope.info = {
						siteCode : $scope.InterviewAddress
				}
				$http({
					 method : "POST",
					 url : localStorage.getItem("Url")
					 	+ 'TSSIntervierInfoServiceImpl/getGettingThereBySiteCode',
					 data : JSON.stringify($scope.info)
				}).success(function(data){
					$scope.routes = data.gettingList;
                    //远程面试
                    if($scope.InterviewAddress == -2){
                        $scope.WayRoute = -2;
                    }else{
                        $scope.WayRoute = data.gettingList[0].gtiid;
                    }
				}).error(function(data){
					
				})
			}
		}
		
		//提交表单
		$scope.send = function(hide){

			$scope.saveFlag = true;
			//要有面试官才能发送面试时间
			if($scope.choosedIVer != null && $scope.choosedIVer != "" && $scope.mainMobile != null && $scope.mainMobile != ""){
					elemeAlert.openLoading();
					//时间
					$scope.hRVerifytime = new Date($scope.day).format("yyyy-MM-dd")+ " "
							+ new Date($scope.time).format("hh:mm:ss");
					//手动输入的地址和交通信息
					if($scope.InterviewAddress == -1 && $scope.InterviewByhand != null){
						$scope.InterviewAddress = angular.copy($scope.InterviewByhand);
					}
					if($scope.WayRoute == -1 && $scope.WayRouteByhand != null){
						$scope.WayRoute = angular.copy($scope.WayRouteByhand);
					}
                    if($scope.InterviewAddress == -2){
                        $scope.InterviewAddress = "远程面试";
                    }
                    if($scope.WayRoute == -2){
                        $scope.WayRoute = "远程面试，无须现场";
                    }
					if($scope.day != null && $scope.time != null && $scope.day != "" && $scope.time != "" 	&& $scope.topName != null && $scope.topName != ""
						&& $scope.cityCode != null && $scope.cityCode != "" && $scope.cityCode != 0  	&& $scope.applydept != null && $scope.applydept != ""
						&& $scope.InterviewAddress != null && $scope.InterviewAddress != "" && $scope.InterviewAddress != 0
							&& $scope.WayRoute != null && $scope.WayRoute != "" && $scope.WayRoute != 0  && $scope.applyposition != null && $scope.applyposition != ""
							&& $scope.consult_mobile != null && $scope.consult_mobile != "" && !$scope.emailFlag && $scope.InterviewAddress != -1 && $scope.WayRoute != -1){
						
						//发送短信 邮件
						$scope.req = {
							token : sessionStorage.getItem("token"),
							//应聘者信息
							mobile : $scope.obj.mobile,
							email : $scope.obj.email,
							jssId : $scope.obj.jssId,
							name : $scope.obj.name,
							topName : $scope.topName,
							topCode : $scope.topCode,
							applydept : $scope.applydept,
							applyposition : $scope.applyposition,
							workYears : $scope.obj.workYears,
							//面试官信息
							resultMain : $scope.resultMain,
							resultVice1 : $scope.resultVice1,
							resultVice2 : $scope.resultVice2,
							resultVice3 : $scope.resultVice3,
							resultVice4 : $scope.resultVice4,
							resultVice5 : $scope.resultVice5,
						
							cityCode : $scope.cityCode,
							hRVerifytime : $scope.hRVerifytime,
							planLocation : $scope.InterviewAddress,
							route : $scope.WayRoute,
							consult_mobile : $scope.consult_mobile,
							inviteNotes : $scope.HRwords,
							SendEmailAndMsgFlag : $scope.SendEmailAndMsgFlag
							
						}
						
						$http({
							method : 'POST',
							url : localStorage.getItem("Url")
							+ "TSSSendEMToJssServiceImpl/interviewContinue",
							data : JSON.stringify($scope.req)
						}).success(function(data){
							hide();
							$rootScope.isSendEmail = true;
							//刷新列表页面
//							$rootScope.$emit("tssInterviewRecordsModelListReview",data.tssInterviewRecordsModelList);
//							$rootScope.$emit("pageChange",$rootScope.searchObjTag,$rootScope.newPage);
							window.location.href = "../html/tss_interview_list.html";
							elemeAlert.closeLoading();
							
						}).error(function(data){
							elemeAlert.closeLoading();
							elemeAlert.alert("40028");
							
						})
					}else{
						elemeAlert.alert("20112");
						elemeAlert.closeLoading();
					}	
			}else{
				elemeAlert.alert("20091");
				elemeAlert.closeLoading();
			}		
			
		
		}
		
	})
	
	//选择面试官的三个输入框
	.controller('selectIVer0',function($rootScope, $scope, $compile, $http, elemeAlert, elemeTab) {
			
			$scope.choosedIVerBlur=function(){
				if($scope.TSSInterviewRecords != "" && $scope.TSSInterviewRecords.mobile == null){
//					$scope.choosedIVer=null;
//					var msg= {};
//					$rootScope.$emit("IverMobile",msg);
					$rootScope.$emit("resultMain",[null,true]);
					if($scope.choosedIVer != null && $scope.choosedIVer.length > 0){
						$scope.choosedIVer = "";
					}
				}

			}
			
			$scope.$watch('choosedIVer', function (newVal, oldVal) {
				if (newVal !== oldVal && newVal != null && newVal.length > 1 && newVal.psnname == null) {
					$scope.req ={
							token:sessionStorage.getItem("token"),
							psnname: newVal
					}
					elemeAlert.openLoading();
					$http({
						method: 'POST',
						url : localStorage.getItem("Url") + "TBEmployeeServiceImpl/getEmployeeList",
						data: JSON.stringify($scope.req)
					}).success(function(data){
//						$scope.employeeList = data.employeeList;
//						console.log(new Date);
						$scope.$$childHead.matches = new Array();
						for (var int = 0; int < data.employeeList.length; int++) {
							var employee = {};
							employee.id=data.employeeList[int].psncode;
							employee.label=data.employeeList[int].psnname;
							employee.model = data.employeeList[int];
							$scope.$$childHead.matches.push(employee);
						}
//						console.log(new Date);
						elemeAlert.closeLoading();
					}).error(function(data){
						elemeAlert.closeLoading();
						//alert(data);
//					   elemeAlert.alert('40014'); 
					})
				}
				$scope.getEmployee(newVal);
			}, true);
			$scope.getEmployee = function(e){
				if(e != null && e.mobile != null){
					$scope.TSSInterviewRecords = {};
					$scope.TSSInterviewRecords.mobile = e.mobile;
					$rootScope.$emit("resultMain",[e,true]);
				}else{
					//选定面试官又清除后  同时清除相关的js参数
					if(e==""){
						$rootScope.$emit("resultMain",[null,true]);
					}
					$scope.TSSInterviewRecords = {};
				}
			}
		})
		
		.controller('selectIVer1',function($rootScope, $scope, $compile, $http, elemeAlert, elemeTab) {
			
			$scope.choosedIVerBlur1=function(){
				if($scope.TSSInterviewRecords != "" && $scope.TSSInterviewRecords != null &&  $scope.TSSInterviewRecords.mobile == null && checkFlag){
//					$scope.choosedIVer1=null;
					$rootScope.$emit("resultVice1",[null,true]);
					if($scope.choosedIVer1 != null && $scope.choosedIVer1.length > 0 && checkFlag){
						$scope.choosedIVer1 = "";
					}
				}

			}

			if(checkFlag == null){
				var checkFlag = true;
			}


			$rootScope.$on("resultVice1Name",function (event,msg) {
				if(msg[0] != null){
					$scope.choosedIVer1 = msg[0].psnname + "  " + msg[0].deptname + "  " + msg[0].postname;
				}else{
					$scope.choosedIVer1 = null;
				}
				$scope.TSSInterviewRecords = msg[0];
				checkFlag = msg[1];

			})

			$scope.$watch('choosedIVer1', function (newVal, oldVal) {
				
				if (newVal !== oldVal && newVal != null && newVal.length > 1 && newVal.psnname == null && checkFlag) {
					$scope.req ={
							token:sessionStorage.getItem("token"),
							psnname: newVal
					}
					elemeAlert.openLoading();
					$http({
						method: 'POST',
						url : localStorage.getItem("Url") + "TBEmployeeServiceImpl/getEmployeeList",
						data: JSON.stringify($scope.req)
					}).success(function(data){
//						$scope.employeeList = data.employeeList;
//						console.log(new Date);
						$scope.$$childHead.matches = new Array();
						for (var int = 0; int < data.employeeList.length; int++) {
							var employee1 = {};
							employee1.id=data.employeeList[int].psncode;
							employee1.label=data.employeeList[int].psnname;
							employee1.model = data.employeeList[int];
							$scope.$$childHead.matches.push(employee1);
						}
//						console.log(new Date);
						elemeAlert.closeLoading();
					}).error(function(data){
						elemeAlert.closeLoading();
						//alert(data);
//					   elemeAlert.alert('40014'); 
					})
				}
				if(checkFlag){
					$scope.getEmployee(newVal);
				}
				checkFlag = true;

			}, true);
			$scope.getEmployee = function(e){
				if(e != null && e.mobile != null){
					$scope.TSSInterviewRecords = {};
					$scope.TSSInterviewRecords.mobile = e.mobile;
					$rootScope.$emit("resultVice1",[e,true]);
				}else{
					if(e==""){
						$rootScope.$emit("resultVice1",[null,true]);
					}
					$scope.TSSInterviewRecords = {};
				}
			}
		})
		
		.controller('selectIVer2',function($rootScope, $scope, $compile, $http, elemeAlert, elemeTab) {
			
			$scope.choosedIVerBlur2=function(){
				if($scope.TSSInterviewRecords != "" && $scope.TSSInterviewRecords != null &&  $scope.TSSInterviewRecords.mobile == null && checkFlag){
//					$scope.choosedIVer2=null;
					$rootScope.$emit("resultVice2",[null,true]);
					if($scope.choosedIVer2 != null && $scope.choosedIVer2.length > 0 && checkFlag){
						$scope.choosedIVer2 = "";
					}
				}

			}

			if(checkFlag == null){
				var checkFlag = true;
			}


			$rootScope.$on("resultVice2Name",function (event,msg) {
				if(msg[0] != null){
					$scope.choosedIVer2 = msg[0].psnname + "  " + msg[0].deptname + "  " + msg[0].postname;
				}else {
					$scope.choosedIVer2 = null;
				}
				$scope.TSSInterviewRecords = msg[0];
				checkFlag = msg[1];

			})
			
			$scope.$watch('choosedIVer2', function (newVal, oldVal) {
				
				if (newVal !== oldVal && newVal != null && newVal.length > 1 && newVal.psnname == null && checkFlag) {
					$scope.req ={
							token:sessionStorage.getItem("token"),
							psnname: newVal
					}
					elemeAlert.openLoading();
					$http({
						method: 'POST',
						url : localStorage.getItem("Url") + "TBEmployeeServiceImpl/getEmployeeList",
						data: JSON.stringify($scope.req)
					}).success(function(data){
//						$scope.employeeList = data.employeeList;
						console.log(new Date);
						$scope.$$childHead.matches = new Array();
						for (var int = 0; int < data.employeeList.length; int++) {
							var employee2 = {};
							employee2.id=data.employeeList[int].psncode;
							employee2.label=data.employeeList[int].psnname;
							employee2.model = data.employeeList[int];
							$scope.$$childHead.matches.push(employee2);
						}
						console.log(new Date);
						elemeAlert.closeLoading();
					}).error(function(data){
						elemeAlert.closeLoading();
						//alert(data);
//					   elemeAlert.alert('40014'); 
					})
				}
				if(checkFlag){
					$scope.getEmployee(newVal);
				}
				checkFlag = true;

			}, true);
			$scope.getEmployee = function(e){
				if(e != null && e.mobile != null){
					$scope.TSSInterviewRecords = {};
					$scope.TSSInterviewRecords.mobile = e.mobile;
					$rootScope.$emit("resultVice2",[e,true]);
				}else{
					if(e==""){
						$rootScope.$emit("resultVice2",[null,true]);
					}
					$scope.TSSInterviewRecords = {};
				}
			}
		})

		.controller('selectIVer3',function($rootScope, $scope, $compile, $http, elemeAlert, elemeTab) {

			$scope.choosedIVerBlur3=function(){
				if($scope.TSSInterviewRecords != "" && $scope.TSSInterviewRecords != null &&  $scope.TSSInterviewRecords.mobile == null && checkFlag){
//					$scope.choosedIVer3=null;
					$rootScope.$emit("resultVice3",[null,true]);
					if($scope.choosedIVer3 != null && $scope.choosedIVer3.length > 0 && checkFlag){
						$scope.choosedIVer3 = "";
					}
				}

			}

			if(checkFlag == null){
				var checkFlag = true;
			}


			$rootScope.$on("resultVice3Name",function (event,msg) {
				if(msg[0] != null){
					$scope.choosedIVer3 = msg[0].psnname + "  " + msg[0].deptname + "  " + msg[0].postname;
				}else {
					$scope.choosedIVer3 = null;
				}
				$scope.TSSInterviewRecords = msg[0];
				checkFlag = msg[1];
			})

			$scope.$watch('choosedIVer3', function (newVal, oldVal) {

				if (newVal !== oldVal && newVal != null && newVal.length > 1 && newVal.psnname == null && checkFlag) {
					$scope.req ={
						token:sessionStorage.getItem("token"),
						psnname: newVal
					}
					elemeAlert.openLoading();
					$http({
						method: 'POST',
						url : localStorage.getItem("Url") + "TBEmployeeServiceImpl/getEmployeeList",
						data: JSON.stringify($scope.req)
					}).success(function(data){
//						$scope.employeeList = data.employeeList;
						console.log(new Date);
						$scope.$$childHead.matches = new Array();
						for (var int = 0; int < data.employeeList.length; int++) {
							var employee3 = {};
							employee3.id=data.employeeList[int].psncode;
							employee3.label=data.employeeList[int].psnname;
							employee3.model = data.employeeList[int];
							$scope.$$childHead.matches.push(employee3);
						}
						console.log(new Date);
						elemeAlert.closeLoading();
					}).error(function(data){
						elemeAlert.closeLoading();
						//alert(data);
//					   elemeAlert.alert('40014');
					})
				}
				if(checkFlag){
					$scope.getEmployee(newVal);
				}
				checkFlag = true;
			}, true);
			$scope.getEmployee = function(e){
				if(e != null && e.mobile != null){
					$scope.TSSInterviewRecords = {};
					$scope.TSSInterviewRecords.mobile = e.mobile;
					$rootScope.$emit("resultVice3",[e,true]);
				}else{
					if(e==""){
						$rootScope.$emit("resultVice3",[null,true]);
					}
					$scope.TSSInterviewRecords = {};
				}
			}
		})

		.controller('selectIVer4',function($rootScope, $scope, $compile, $http, elemeAlert, elemeTab) {

			$scope.choosedIVerBlur4=function(){
				if($scope.TSSInterviewRecords != "" && $scope.TSSInterviewRecords != null &&  $scope.TSSInterviewRecords.mobile == null && checkFlag){
//					$scope.choosedIVer2=null;
					$rootScope.$emit("resultVice4",[null,true]);
					if($scope.choosedIVer4 != null && $scope.choosedIVer4.length > 0 && checkFlag){
						$scope.choosedIVer4 = "";
					}
				}

			}

			if(checkFlag == null){
				var checkFlag = true;
			}


			$rootScope.$on("resultVice4Name",function (event,msg) {
				if(msg[0] != null){
					$scope.choosedIVer4 = msg[0].psnname + "  " + msg[0].deptname + "  " + msg[0].postname;
				}else{
					$scope.choosedIVer4 = null;
				}
				$scope.TSSInterviewRecords = msg[0];
				checkFlag = msg[1];
			})

			$scope.$watch('choosedIVer4', function (newVal, oldVal) {

				if (newVal !== oldVal && newVal != null && newVal.length > 1 && newVal.psnname == null && checkFlag) {
					$scope.req ={
						token:sessionStorage.getItem("token"),
						psnname: newVal
					}
					elemeAlert.openLoading();
					$http({
						method: 'POST',
						url : localStorage.getItem("Url") + "TBEmployeeServiceImpl/getEmployeeList",
						data: JSON.stringify($scope.req)
					}).success(function(data){
//						$scope.employeeList = data.employeeList;
						console.log(new Date);
						$scope.$$childHead.matches = new Array();
						for (var int = 0; int < data.employeeList.length; int++) {
							var employee4 = {};
							employee4.id=data.employeeList[int].psncode;
							employee4.label=data.employeeList[int].psnname;
							employee4.model = data.employeeList[int];
							$scope.$$childHead.matches.push(employee4);
						}
						console.log(new Date);
						elemeAlert.closeLoading();
					}).error(function(data){
						elemeAlert.closeLoading();
						//alert(data);
//					   elemeAlert.alert('40014');
					})
				}
				if(checkFlag){
					$scope.getEmployee(newVal);
				}
				checkFlag = true;
			}, true);
			$scope.getEmployee = function(e){
				if(e != null && e.mobile != null){
					$scope.TSSInterviewRecords = {};
					$scope.TSSInterviewRecords.mobile = e.mobile;
					$rootScope.$emit("resultVice4",[e,true]);
				}else{
					if(e==""){
						$rootScope.$emit("resultVice4",[null,true]);
					}
					$scope.TSSInterviewRecords = {};
				}
			}
		})

		.controller('selectIVer5',function($rootScope, $scope, $compile, $http, elemeAlert, elemeTab) {

			$scope.choosedIVerBlur5=function(){
				if($scope.TSSInterviewRecords != "" && $scope.TSSInterviewRecords != null &&  $scope.TSSInterviewRecords.mobile == null && checkFlag){
//					$scope.choosedIVer2=null;
					$rootScope.$emit("resultVice5",[null,true]);
					if($scope.choosedIVer5 != null && $scope.choosedIVer5.length > 0 && checkFlag){
						$scope.choosedIVer5 = "";
					}
				}

			}

			if(checkFlag == null){
				var checkFlag = true;
			}


			$rootScope.$on("resultVice5Name",function (event,msg) {
				if(msg[0] != null){
					$scope.choosedIVer5 = msg[0].psnname + "  " + msg[0].deptname + "  " + msg[0].postname;
				}else{
					$scope.choosedIVer5 = null;
				}
				$scope.TSSInterviewRecords = msg[0];
				checkFlag = msg[1];
			})

			$scope.$watch('choosedIVer5', function (newVal, oldVal) {

				if (newVal !== oldVal && newVal != null && newVal.length > 1 && newVal.psnname == null && checkFlag) {
					$scope.req ={
						token:sessionStorage.getItem("token"),
						psnname: newVal
					}
					elemeAlert.openLoading();
					$http({
						method: 'POST',
						url : localStorage.getItem("Url") + "TBEmployeeServiceImpl/getEmployeeList",
						data: JSON.stringify($scope.req)
					}).success(function(data){
//						$scope.employeeList = data.employeeList;
						console.log(new Date);
						$scope.$$childHead.matches = new Array();
						for (var int = 0; int < data.employeeList.length; int++) {
							var employee5 = {};
							employee5.id=data.employeeList[int].psncode;
							employee5.label=data.employeeList[int].psnname;
							employee5.model = data.employeeList[int];
							$scope.$$childHead.matches.push(employee5);
						}
						console.log(new Date);
						elemeAlert.closeLoading();
					}).error(function(data){
						elemeAlert.closeLoading();
						//alert(data);
//					   elemeAlert.alert('40014');
					})
				}
				if(checkFlag){
					$scope.getEmployee(newVal);
				}
				checkFlag = true;
			}, true);
			$scope.getEmployee = function(e){
				if(e != null && e.mobile != null){
					$scope.TSSInterviewRecords = {};
					$scope.TSSInterviewRecords.mobile = e.mobile;
					$rootScope.$emit("resultVice5",[e,true]);
				}else{
					if(e==""){
						$rootScope.$emit("resultVice5",[null,true]);
					}
					$scope.TSSInterviewRecords = {};
				}
			}
		})


		.controller('topNameController',function($rootScope, $scope, $compile, $http, elemeAlert, elemeTab) {

			$scope.topNameControllerBlur=function(){
				if(   $scope.TSSApprovalHistory==null||$scope.TSSApprovalHistory.apprName==null || $scope.TSSApprovalHistory.apprName==""){
					$scope.topName=null;
				}
			}


			$scope.$watch('topName', function (newVal, oldVal) {
				if(!$rootScope.flagResulttopName){
					$rootScope.flagResulttopName=true;
					return;
				}
				if (newVal !== oldVal && newVal != null && newVal.length > 1 && newVal.psnname == null) {
					$scope.req ={
						token:sessionStorage.getItem("token"),
						psnname: newVal
					}
					elemeAlert.openLoading();
					$http({
						method: 'POST',
						url : localStorage.getItem("Url") + "TBEmployeeServiceImpl/getEmployeeList",
						data: JSON.stringify($scope.req)
					}).success(function(data){
//						$scope.employeeList = data.employeeList;
						console.log(new Date);
						$scope.$$childHead.matches = new Array();
						for (var int = 0; int < data.employeeList.length; int++) {
							var employee = {};
							employee.id=data.employeeList[int].psncode;
							employee.label=data.employeeList[int].psnname;
							employee.model = data.employeeList[int];
							$scope.$$childHead.matches.push(employee);
						}
						console.log(new Date);
						elemeAlert.closeLoading();
					}).error(function(data){
						elemeAlert.closeLoading();
					})
				}
				$scope.getEmployee(newVal);
			}, true);
			$scope.getEmployee = function(e){
				if(e != null && e.mobile != null){
					$scope.TSSApprovalHistory = {};
					$scope.TSSApprovalHistory.apprName= e.psnname.split(" ")[0];;
					$scope.TSSApprovalHistory.apprJobNo=e.psncode;
					//$scope.TSSApprovalHistory.mobile = e.mobile;
					//$scope.TSSApprovalHistory.email = e.email;
					//$scope.TSSApprovalHistory.deptName = e.deptname;
					//$scope.TSSApprovalHistory.postName = e.postname;
					$rootScope.$emit("resulttopName", $scope.TSSApprovalHistory);
				}else{
					$scope.TSSApprovalHistory = {};
					$rootScope.$emit("resulttopName", $scope.TSSApprovalHistory);
				}
			}
		})
		


// 查看面试记录
TSSAPP.controller('viewInterview', function($rootScope, $scope, i18nService,
		$http, $modal, elemeTab, elemeSearch, elemeUigrid, elemeAlert) {
	$scope.interview = angular.copy($rootScope.interview);
	$scope.nameValue = ["不合格","需提升","合格","良好","优秀"];
	for (var int = 0; int < $scope.interview.tssTagResultInfoModelList.length; int++) {
		var list = new Array();
		$scope.nameNum = 0;
		for (var int2 = 0; int2 < $scope.nameValue.length; int2++) {
			if($scope.interview.tssTagResultInfoModelList[int].tagValue == $scope.nameValue[int2]){
				$scope.nameNum = int2 + 1;
				break;
			}
		}
		for (var i = 0; i < $scope.nameNum; i++) {
			list.push(i);
		}
		if(list == null || list.length == 0){
			for (var i = 0; i < $scope.interview.tssTagResultInfoModelList[int].tagValue; i++) {
				list.push(i);
			}
		}
		$scope.interview.tssTagResultInfoModelList[int].list = list;
	}
	
//	for (var int = 0; int < $scope.interview.tssTagResultInfoModelList.length; int++) {
//		var list = new Array();
//		for (var i = 0; i < $scope.interview.tssTagResultInfoModelList[int].tagValue; i++) {
//			list.push(i);
//		}
//		$scope.interview.tssTagResultInfoModelList[int].list = list;
//	}
	$scope.interviewTimeList = new Array();
	if($scope.interview.interviewTimeList != null && $scope.interview.interviewTimeList.length > 0){
		for (var int = 0; int < $scope.interview.interviewTimeList.length; int++) {
			$scope.interviewTime = {};
			$scope.interviewTime.time = $scope.interview.interviewTimeList[int];
			$scope.interviewTimeList.push($scope.interviewTime);
		}
	}
});
// 查看审批记录
TSSAPP.controller('viewApproval', function($rootScope, $scope, i18nService,
		$http, $modal, elemeTab, elemeSearch, elemeUigrid, elemeAlert) {

});
// 查看原始简历
TSSAPP.controller('reviewResumeOriCont', function($rootScope, $scope,
		i18nService, $http, $modal, $compile, elemeTab, elemeSearch,
		elemeUigrid, elemeAlert,resumeSourcePoolService,resumeShareService) {

var Ohref = window.location.href;
	var arrhref = Ohref.split("?");
	if(arrhref.length>0){
		$scope.resumeOriContJssIdTmp =arrhref[1];
		$scope.jssIdTmp = arrhref[1];
	
		if(arrhref.length>1){
			$scope.applyCount= arrhref[2];
		}
		if(arrhref.length>2){
			$scope.jssStatus= arrhref[3];
		}
	}
	
	$rootScope.$on("interviewRecords", function(event, msg) {
		$scope.TSSInterviewRecords = msg;
	});
	$rootScope.$on("interviewRecords2", function(event, msg) {
		$scope.TSSInterviewRecords2 = msg;
	});
	$rootScope.$on("interviewRecords3", function(event, msg) {
		$scope.TSSInterviewRecords3 = msg;
	});
	$rootScope.$on("interviewRecords4", function(event, msg) {
		$scope.TSSInterviewRecords4 = msg;
	});
	$rootScope.$on("interviewRecords5", function(event, msg) {
		$scope.TSSInterviewRecords5 = msg;
	});
	$rootScope.$on("interviewRecords6", function(event, msg) {
		$scope.TSSInterviewRecords6 = msg;
	});

	$scope.addMain = function () {
		$scope.show_resultVice1 = true;
	}
	$scope.add_one = function () {
		$scope.show_resultVice2 = true;
	}
	$scope.add_two = function () {
		$scope.show_resultVice3 = true;
	}
	$scope.add_three = function () {
		$scope.show_resultVice4 = true;
	}
	$scope.add_four = function () {
		$scope.show_resultVice5 = true;
	}

	$scope.del_one = function () {
		if($scope.TSSInterviewRecords3 != null){
			$scope.TSSInterviewRecords2 = $scope.TSSInterviewRecords3;
			$rootScope.$emit("interviewRecords2", $scope.TSSInterviewRecords2);
			$rootScope.$emit("interviewRecords2Name", $scope.TSSInterviewRecords2);
			$scope.show_resultVice1 = true;
		}else{
			$scope.show_resultVice1 = false;
			$rootScope.$emit("interviewRecords2", null);
			$rootScope.$emit("interviewRecords2Name", null);
		}
		if($scope.TSSInterviewRecords4 != null){
			$scope.TSSInterviewRecords3 = $scope.TSSInterviewRecords4;
			$rootScope.$emit("interviewRecords3", $scope.TSSInterviewRecords3);
			$rootScope.$emit("interviewRecords3Name", $scope.TSSInterviewRecords3);
			$scope.show_resultVice2 = true;
		}else{
			$scope.show_resultVice2 = false;
			$rootScope.$emit("interviewRecords3", null);
			$rootScope.$emit("interviewRecords3Name", null);
		}
		if($scope.TSSInterviewRecords5 != null){
			$scope.TSSInterviewRecords4 = $scope.TSSInterviewRecords5;
			$rootScope.$emit("interviewRecords4", $scope.TSSInterviewRecords5);
			$rootScope.$emit("interviewRecords4Name", $scope.TSSInterviewRecords5);
			$scope.show_resultVice3 = true;
		}else{
			$scope.show_resultVice3 = false;
			$rootScope.$emit("interviewRecords4", null);
			$rootScope.$emit("interviewRecords4Name", null);
		}
		if($scope.TSSInterviewRecords6 != null){
			$scope.TSSInterviewRecords5 = $scope.TSSInterviewRecords6;
			$rootScope.$emit("interviewRecords5", $scope.TSSInterviewRecords5);
			$rootScope.$emit("interviewRecords5Name", $scope.TSSInterviewRecords5);
			$scope.show_resultVice4 = true;
		}else{
			$scope.show_resultVice4 = false;
			$rootScope.$emit("interviewRecords5", null);
			$rootScope.$emit("interviewRecords5Name", null);
		}
		$scope.show_resultVice5 = false;
		$rootScope.$emit("interviewRecords6", null);
		$rootScope.$emit("interviewRecords6Name", null);
	}
	$scope.del_two = function () {
		if($scope.TSSInterviewRecords4 != null){
			$scope.TSSInterviewRecords3 = $scope.TSSInterviewRecords4;
			$rootScope.$emit("interviewRecords3", $scope.TSSInterviewRecords3);
			$rootScope.$emit("interviewRecords3Name", $scope.TSSInterviewRecords3);
			$scope.show_resultVice2 = true;
		}else{
			$scope.show_resultVice2 = false;
			$rootScope.$emit("interviewRecords3", null);
			$rootScope.$emit("interviewRecords3Name", null);
		}
		if($scope.TSSInterviewRecords5 != null){
			$scope.TSSInterviewRecords4 = $scope.TSSInterviewRecords5;
			$rootScope.$emit("interviewRecords4", $scope.TSSInterviewRecords5);
			$rootScope.$emit("interviewRecords4Name", $scope.TSSInterviewRecords5);
			$scope.show_resultVice3 = true;
		}else{
			$scope.show_resultVice3 = false;
			$rootScope.$emit("interviewRecords4", null);
			$rootScope.$emit("interviewRecords4Name", null);
		}
		if($scope.TSSInterviewRecords6 != null){
			$scope.TSSInterviewRecords5 = $scope.TSSInterviewRecords6;
			$rootScope.$emit("interviewRecords5", $scope.TSSInterviewRecords5);
			$rootScope.$emit("interviewRecords5Name", $scope.TSSInterviewRecords5);
			$scope.show_resultVice4 = true;
		}else{
			$scope.show_resultVice4 = false;
			$rootScope.$emit("interviewRecords5", null);
			$rootScope.$emit("interviewRecords5Name", null);
		}
		$scope.show_resultVice5 = false;
		$rootScope.$emit("interviewRecords6", null);
		$rootScope.$emit("interviewRecords6Name", null);
	}

	$scope.del_three = function () {
		if($scope.TSSInterviewRecords5 != null){
			$scope.TSSInterviewRecords4 = $scope.TSSInterviewRecords5;
			$rootScope.$emit("interviewRecords4", $scope.TSSInterviewRecords5);
			$rootScope.$emit("interviewRecords4Name", $scope.TSSInterviewRecords5);
			$scope.show_resultVice3 = true;
		}else{
			$scope.show_resultVice3 = false;
			$rootScope.$emit("interviewRecords4", null);
			$rootScope.$emit("interviewRecords4Name", null);
		}
		if($scope.TSSInterviewRecords6 != null){
			$scope.TSSInterviewRecords5 = $scope.TSSInterviewRecords6;
			$rootScope.$emit("interviewRecords5", $scope.TSSInterviewRecords5);
			$rootScope.$emit("interviewRecords5Name", $scope.TSSInterviewRecords5);
			$scope.show_resultVice4 = true;
		}else{
			$scope.show_resultVice4 = false;
			$rootScope.$emit("interviewRecords5", null);
			$rootScope.$emit("interviewRecords5Name", null);
		}
		$scope.show_resultVice5 = false;
		$rootScope.$emit("interviewRecords6", null);
		$rootScope.$emit("interviewRecords6Name", null);
	}

	$scope.del_four = function () {
		if($scope.TSSInterviewRecords6 != null){
			$scope.TSSInterviewRecords5 = $scope.TSSInterviewRecords6;
			$rootScope.$emit("interviewRecords5", $scope.TSSInterviewRecords5);
			$rootScope.$emit("interviewRecords5Name", $scope.TSSInterviewRecords5);
			$scope.show_resultVice4 = true;
		}else{
			$scope.show_resultVice4 = false;
			$rootScope.$emit("interviewRecords5", null);
			$rootScope.$emit("interviewRecords5Name", null);
		}
		$scope.show_resultVice5 = false;
		$rootScope.$emit("interviewRecords6", null);
		$rootScope.$emit("interviewRecords6Name", null);
	}

	$scope.del_five = function () {
		$scope.show_resultVice5 = false;
		$rootScope.$emit("interviewRecords6", null);
		$rootScope.$emit("interviewRecords6Name", null);
	}




	// 保存
	$scope.doSaveMaster= function() {
			//如果是在职人员只能转入人才库
		     if($scope.tssJobSeekersInfo.employed==1){
		    	 elemeAlert.alert("20022",null,$scope.tssJobSeekersInfo.name);
		    	 return;
		     }
		    if($scope.TSSInterviewRecords == null ||   $scope.TSSInterviewRecords.researchistName==null){
		    	elemeAlert.alert("20091");
				return;
		    } 
		     
			$scope.interviewRecordsList = new Array();
			if($scope.TSSInterviewRecords != null &&  $scope.TSSInterviewRecords.researchistName!=null){
				 $scope.choosedIVer = $scope.TSSInterviewRecords.researchistName;
			}
			if($scope.TSSInterviewRecords2 != null && $scope.TSSInterviewRecords2.researchistName!=null){
				$scope.choosedIVer = $scope.choosedIVer + "、" + $scope.TSSInterviewRecords2.researchistName;
			}
			if($scope.TSSInterviewRecords3 != null &&  $scope.TSSInterviewRecords3.researchistName!=null){
				$scope.choosedIVer = $scope.choosedIVer + "、" + $scope.TSSInterviewRecords3.researchistName;
			}
			if($scope.TSSInterviewRecords4 != null &&  $scope.TSSInterviewRecords4.researchistName!=null){
				$scope.choosedIVer = $scope.choosedIVer + "、" + $scope.TSSInterviewRecords4.researchistName;
			}
			if($scope.TSSInterviewRecords5 != null &&  $scope.TSSInterviewRecords5.researchistName!=null){
				$scope.choosedIVer = $scope.choosedIVer + "、" + $scope.TSSInterviewRecords5.researchistName;
			}
			if($scope.TSSInterviewRecords6 != null &&  $scope.TSSInterviewRecords6.researchistName!=null){
				$scope.choosedIVer = $scope.choosedIVer + "、" + $scope.TSSInterviewRecords6.researchistName;
			}
				
					if($scope.TSSInterviewRecords != null &&  $scope.TSSInterviewRecords.researchistName!=null){
						$scope.interviewRecordsTmp = {};
						// 设置面试官
						$scope.interviewRecordsTmp.choosedIVer = $scope.choosedIVer;
						// 设置求职信息
						$scope.interviewRecordsTmp.jssid = $scope.tssJobSeekersInfo.jssId;
						$scope.interviewRecordsTmp.name =$scope.tssJobSeekersInfo.name;
						$scope.interviewRecordsTmp.sex = $scope.tssJobSeekersInfo.sex;
						$scope.interviewRecordsTmp.applyposition = $scope.tssJobSeekersInfo.applyposition;
						$scope.interviewRecordsTmp.inviteNotes = $scope.TSSInterviewRecords.inviteNotes;
						$scope.interviewRecordsTmp.intrecid = $scope.TSSInterviewRecords.intrecid;
						$scope.interviewRecordsTmp.mobile = $scope.TSSInterviewRecords.mobile;
						$scope.interviewRecordsTmp.email = $scope.TSSInterviewRecords.email;
						$scope.interviewRecordsTmp.deptName = $scope.TSSInterviewRecords.deptName;
						$scope.interviewRecordsTmp.postName = $scope.TSSInterviewRecords.postName;
						$scope.interviewRecordsTmp.researchistName = $scope.TSSInterviewRecords.researchistName;
						$scope.interviewRecordsTmp.researchistJobNo = $scope.TSSInterviewRecords.researchistJobNo;
						$scope.interviewRecordsTmp.mainFlag = $scope.TSSInterviewRecords.mainFlag;
						$scope.interviewRecordsList.push($scope.interviewRecordsTmp);
					}
					if($scope.TSSInterviewRecords2 != null && $scope.TSSInterviewRecords2.researchistName!=null){
						$scope.interviewRecordsTmp = {};
						// 设置面试官
						$scope.interviewRecordsTmp.choosedIVer = $scope.choosedIVer;
						// 设置求职信息
						$scope.interviewRecordsTmp.jssid = $scope.tssJobSeekersInfo.jssId;
						$scope.interviewRecordsTmp.name = $scope.tssJobSeekersInfo.name;
						$scope.interviewRecordsTmp.sex = $scope.tssJobSeekersInfo.sex;
						$scope.interviewRecordsTmp.applyposition = $scope.tssJobSeekersInfo.applyposition;
						$scope.interviewRecordsTmp.inviteNotes = $scope.TSSInterviewRecords.inviteNotes;
						$scope.interviewRecordsTmp.intrecid = $scope.TSSInterviewRecords2.intrecid;
						$scope.interviewRecordsTmp.mobile = $scope.TSSInterviewRecords2.mobile;
						$scope.interviewRecordsTmp.email = $scope.TSSInterviewRecords2.email;
						$scope.interviewRecordsTmp.deptName = $scope.TSSInterviewRecords2.deptName;
						$scope.interviewRecordsTmp.postName = $scope.TSSInterviewRecords2.postName;
						$scope.interviewRecordsTmp.researchistName = $scope.TSSInterviewRecords2.researchistName;
						$scope.interviewRecordsTmp.researchistJobNo = $scope.TSSInterviewRecords2.researchistJobNo;
						$scope.interviewRecordsTmp.mainFlag = $scope.TSSInterviewRecords2.mainFlag;
						$scope.interviewRecordsList.push($scope.interviewRecordsTmp);
					}
					if($scope.TSSInterviewRecords3 != null &&  $scope.TSSInterviewRecords3.researchistName!=null){
						$scope.interviewRecordsTmp = {};
						// 设置面试官
						$scope.interviewRecordsTmp.choosedIVer = $scope.choosedIVer;
						// 设置求职信息
						$scope.interviewRecordsTmp.jssid = $scope.tssJobSeekersInfo.jssId;
						$scope.interviewRecordsTmp.name = $scope.tssJobSeekersInfo.name;
						$scope.interviewRecordsTmp.sex = $scope.tssJobSeekersInfo.sex;
						$scope.interviewRecordsTmp.applyposition = $scope.tssJobSeekersInfo.applyposition;
						$scope.interviewRecordsTmp.inviteNotes = $scope.TSSInterviewRecords.inviteNotes;
						$scope.interviewRecordsTmp.intrecid = $scope.TSSInterviewRecords3.intrecid;
						$scope.interviewRecordsTmp.mobile = $scope.TSSInterviewRecords3.mobile;
						$scope.interviewRecordsTmp.email = $scope.TSSInterviewRecords3.email;
						$scope.interviewRecordsTmp.deptName = $scope.TSSInterviewRecords3.deptName;
						$scope.interviewRecordsTmp.postName = $scope.TSSInterviewRecords3.postName;
						$scope.interviewRecordsTmp.researchistName = $scope.TSSInterviewRecords3.researchistName;
						$scope.interviewRecordsTmp.researchistJobNo = $scope.TSSInterviewRecords3.researchistJobNo;
						$scope.interviewRecordsTmp.mainFlag = $scope.TSSInterviewRecords3.mainFlag;
						$scope.interviewRecordsList.push($scope.interviewRecordsTmp);
					}
					if($scope.TSSInterviewRecords4 != null &&  $scope.TSSInterviewRecords4.researchistName!=null){
						$scope.interviewRecordsTmp = {};
						// 设置面试官
						$scope.interviewRecordsTmp.choosedIVer = $scope.choosedIVer;
						// 设置求职信息
						$scope.interviewRecordsTmp.jssid = $scope.tssJobSeekersInfo.jssId;
						$scope.interviewRecordsTmp.name = $scope.tssJobSeekersInfo.name;
						$scope.interviewRecordsTmp.sex = $scope.tssJobSeekersInfo.sex;
						$scope.interviewRecordsTmp.applyposition = $scope.tssJobSeekersInfo.applyposition;
						$scope.interviewRecordsTmp.inviteNotes = $scope.TSSInterviewRecords.inviteNotes;
						$scope.interviewRecordsTmp.intrecid = $scope.TSSInterviewRecords4.intrecid;
						$scope.interviewRecordsTmp.mobile = $scope.TSSInterviewRecords4.mobile;
						$scope.interviewRecordsTmp.email = $scope.TSSInterviewRecords4.email;
						$scope.interviewRecordsTmp.deptName = $scope.TSSInterviewRecords4.deptName;
						$scope.interviewRecordsTmp.postName = $scope.TSSInterviewRecords4.postName;
						$scope.interviewRecordsTmp.researchistName = $scope.TSSInterviewRecords4.researchistName;
						$scope.interviewRecordsTmp.researchistJobNo = $scope.TSSInterviewRecords4.researchistJobNo;
						$scope.interviewRecordsTmp.mainFlag = $scope.TSSInterviewRecords4.mainFlag;
						$scope.interviewRecordsList.push($scope.interviewRecordsTmp);
					}
					if($scope.TSSInterviewRecords5 != null &&  $scope.TSSInterviewRecords5.researchistName!=null){
						$scope.interviewRecordsTmp = {};
						// 设置面试官
						$scope.interviewRecordsTmp.choosedIVer = $scope.choosedIVer;
						// 设置求职信息
						$scope.interviewRecordsTmp.jssid = $scope.tssJobSeekersInfo.jssId;
						$scope.interviewRecordsTmp.name = $scope.tssJobSeekersInfo.name;
						$scope.interviewRecordsTmp.sex = $scope.tssJobSeekersInfo.sex;
						$scope.interviewRecordsTmp.applyposition = $scope.tssJobSeekersInfo.applyposition;
						$scope.interviewRecordsTmp.inviteNotes = $scope.TSSInterviewRecords.inviteNotes;
						$scope.interviewRecordsTmp.intrecid = $scope.TSSInterviewRecords5.intrecid;
						$scope.interviewRecordsTmp.mobile = $scope.TSSInterviewRecords5.mobile;
						$scope.interviewRecordsTmp.email = $scope.TSSInterviewRecords5.email;
						$scope.interviewRecordsTmp.deptName = $scope.TSSInterviewRecords5.deptName;
						$scope.interviewRecordsTmp.postName = $scope.TSSInterviewRecords5.postName;
						$scope.interviewRecordsTmp.researchistName = $scope.TSSInterviewRecords5.researchistName;
						$scope.interviewRecordsTmp.researchistJobNo = $scope.TSSInterviewRecords5.researchistJobNo;
						$scope.interviewRecordsTmp.mainFlag = $scope.TSSInterviewRecords5.mainFlag;
						$scope.interviewRecordsList.push($scope.interviewRecordsTmp);
					}
					if($scope.TSSInterviewRecords6 != null &&  $scope.TSSInterviewRecords6.researchistName!=null){
						$scope.interviewRecordsTmp = {};
						// 设置面试官
						$scope.interviewRecordsTmp.choosedIVer = $scope.choosedIVer;
						// 设置求职信息
						$scope.interviewRecordsTmp.jssid = $scope.tssJobSeekersInfo.jssId;
						$scope.interviewRecordsTmp.name = $scope.tssJobSeekersInfo.name;
						$scope.interviewRecordsTmp.sex = $scope.tssJobSeekersInfo.sex;
						$scope.interviewRecordsTmp.applyposition = $scope.tssJobSeekersInfo.applyposition;
						$scope.interviewRecordsTmp.inviteNotes = $scope.TSSInterviewRecords.inviteNotes;
						$scope.interviewRecordsTmp.intrecid = $scope.TSSInterviewRecords6.intrecid;
						$scope.interviewRecordsTmp.mobile = $scope.TSSInterviewRecords6.mobile;
						$scope.interviewRecordsTmp.email = $scope.TSSInterviewRecords6.email;
						$scope.interviewRecordsTmp.deptName = $scope.TSSInterviewRecords6.deptName;
						$scope.interviewRecordsTmp.postName = $scope.TSSInterviewRecords6.postName;
						$scope.interviewRecordsTmp.researchistName = $scope.TSSInterviewRecords6.researchistName;
						$scope.interviewRecordsTmp.researchistJobNo = $scope.TSSInterviewRecords6.researchistJobNo;
						$scope.interviewRecordsTmp.mainFlag = $scope.TSSInterviewRecords6.mainFlag;
						$scope.interviewRecordsList.push($scope.interviewRecordsTmp);
					}

				


			elemeAlert.openLoading();
			$scope.req = {
				token : sessionStorage.getItem("token"),
				interviewRecordsList : $scope.interviewRecordsList
			}
			$http(
					{
						method : 'post',
						url : localStorage.getItem("Url")
								+ "TSSInterviewRecordsServiceImpl/postInterviewRecordsList",
						data : JSON.stringify($scope.req)
					// params: $scope.req
					})
					.success(
							function(data) {
								elemeAlert.closeLoading();
								window.parent.$scope.$emit("pageChange",window.parent.$scope.searchObjTag,window.parent.$scope.newPage);
//								window.location.href = "../html/tss_interview_list.html";
							})
					.error(
							function(data) {
								elemeAlert.closeLoading();
								if (data == "40011") {
									elemeAlert.alert("40011");
								} else {
									elemeAlert.alert("40021");
								}
							})
		

	}
	
	
	
	//控制主面显示按钮
	$scope.viewRecordFlag=false;
	$scope.doshow=function(data){
		if(data){
			$scope.viewRecordFlag=false;
		}else{
			$scope.viewRecordFlag=true;
		}
	};
	
	//推荐简历/初约
	$scope.doSend = function() {
//		$rootScope.rowEntity = $scope.resumeOriContTempScope;
		$rootScope.rowEntity = $scope.tssJobSeekersInfo;
		localStorage.setItem($rootScope.rowEntity.jssId,"0");
		if($scope.tssJobSeekersInfo.applyposition == null || $scope.tssJobSeekersInfo.applyposition == ""){
			elemeAlert.alert("20039", null, [ $scope.resumeOriContTempScope.name ]);
			return;
		}
		// 判断是否为共享
		if ($rootScope.rowEntity.jssStatus == 7) {
			elemeAlert.alert("20025", null, [ $rootScope.rowEntity.name ]);
			return;
		}
		var sendModal = $modal({
			template : "modals/modal_send_interview.html",
			// persist: true,
			show : true,
			backdrop : 'static',
			scope : $scope,
			keyboard : false
		});
		sendModal.$promise
		.then(sendModal.show);
	}
	
	elemeAlert.openLoading();
	$scope.info = {
		token : sessionStorage.getItem("token"),
		jssid : $scope.resumeOriContJssIdTmp
	}

	$http(
			{
				method : 'POST',
				url : localStorage.getItem("Url")
						+ "TSSResumeOricontServiceImpl/getResumeOricont",
				data : JSON.stringify($scope.info)
			// params : $scope.req
			}).success(function(data) {
		elemeAlert.closeLoading();
		if (data.re != null) {
			$scope.startType;
			$scope.end;
			$scope.stringDate;
			if (data.re.contflag == 1) {
				if(data.re.resumecont.indexOf("<style ") != -1){
					$scope.startType = data.re.resumecont.indexOf("<style ");
				}
				if(data.re.resumecont.indexOf("</style>") != -1){
					$scope.end = data.re.resumecont.indexOf("</style>") + 8;
				}
				if($scope.startType == null && $scope.end == null){
					$scope.dateTmp =  data.re.resumecont.replace(new RegExp(/(null)/g),'');
				}else{
					$scope.stringDate = data.re.resumecont.substring($scope.startType,$scope.end);
					
					$scope.dateTmp =  data.re.resumecont.replace($scope.stringDate,'').replace(new RegExp(/(null)/g),'');
				}
				$("#nav_" + $scope.jssIdTmp).append($scope.dateTmp);
			} else {
				if(data.re.longcont.indexOf("<style ") != -1){
					$scope.startType = data.re.longcont.indexOf("<style ");
				}
				if(data.re.longcont.indexOf("</style>") != -1){
					$scope.end = data.re.longcont.indexOf("</style>") + 8;
				}
				if($scope.startType == null && $scope.end == null){
					$scope.dateTmp =  data.re.longcont.replace(new RegExp(/(null)/g),'');
				}else{
					$scope.stringDate = data.re.longcont.substring($scope.startType,$scope.end);
					
					$scope.dateTmp =  data.re.longcont.replace($scope.stringDate,'').replace(new RegExp(/(null)/g),'');
				}
				$("#nav_" + $scope.jssIdTmp).append($scope.dateTmp);
			}
		} else {
			$("#nav_" + $scope.jssIdTmp).append("无");
		}
		$scope.tssAnnexInfoList = data.tssAnnexInfoList;
		$scope.tssJobSeekersInfo= data.tssJobSeekersInfo;
	}).error(function(data) {
		 if (data == "40011") {
			elemeAlert.alert("40011");
		} else {
			elemeAlert.alert("40014");
		}
		elemeAlert.closeLoading();
	});
	
	$scope.doDownload = function(e){
		window.open(localStorage.getItem("downloadUrl") + e);
	}
	
	
	
	// 应聘历史
	$scope.doHistory = function() {
//		var obj = $scope.gridApi.selection.getSelectedRows();
//		var jssIds = [];
		var obj = [];
		obj.push($scope.tssJobSeekersInfo);
		$scope.jssStatusFlag = false;
		// var jssStatus =[];
		if (obj.length == 0) {
			elemeAlert.alert("20021");
			return;
		} else if (obj.length > 1) {
			elemeAlert.alert("20021");
			return;
		} else {
			$rootScope.historyInfo = obj
			var sendModal = $modal({
				template : "modals/modal_history_interview.html",
				// persist: true,
				show : true,
				backdrop : 'static',
				scope : $scope,
				keyboard : false
			});
			
			sendModal.$promise.then(sendModal.show);
		}

	};
	
	
//	 认领
	$scope.doOwn = function() {
		elemeAlert.confirm(
						"20023",
						function(choose) {
							if (choose == 'OK') {
//								elemeAlert.openLoading();
								var req = {
									token : sessionStorage
											.getItem("token"),
									jssId : $scope.tssJobSeekersInfo.jssId
								}

								$http(
										{
											method : 'POST',
											url : localStorage
													.getItem("Url")
													+ "TSSJobSeekersInfoServiceImpl/postJobSeekersInfoOwn",
											data : JSON.stringify(req)
										})
										.success(
												function(data) {
//													elemeAlert
//															.closeLoading();
													elemeAlert
															.alert(
																	"10015",
																	function(choose) {
																		window.parent.$scope.$emit("pageChange",window.parent.$scope.searchObjTag,window.parent.$scope.newPage);
																	});
												})
										.error(
												function(data) {
													if (data == "40011") {
														elemeAlert
																.alert("40011");
													} else {
														elemeAlert
																.alert("40019");
													}
//													elemeAlert
//															.closeLoading();
												});
							}
						},[ $scope.tssJobSeekersInfo.name ])
	};
	
	
	
	// 简历共享
	$scope.doShareClick = function() {
		var obj = [];
		obj.push($scope.tssJobSeekersInfo);
		var jssIds = [];
		$scope.jssStatusFlag = false;
		if (obj.length == 0) {
			elemeAlert.alert("20004");
			return;
		} else if (obj.length > 10) {
			elemeAlert.alert("20009");
			return;
		} else {
			var resumeName = "";
			var resumeNameNoShare = "";
			for (var int = 0; int < obj.length; int++) {
				if (obj[int].jssStatus == '7') {
					resumeName = resumeName + obj[int].name
							+ "、";
					$scope.jssStatusFlag = true;
				} else {
					resumeNameNoShare = resumeNameNoShare
							+ obj[int].name + "、";
					jssIds.push(obj[int].jssId);
				}
			}
			if ($scope.jssStatusFlag) {
				resumeName = resumeName.substring(0,
						resumeName.length - 1)
				elemeAlert.alert("10007", null, [ resumeName ]);
				return;
			}
			resumeNameNoShare = resumeNameNoShare.substring(0,
					resumeNameNoShare.length - 1)
			elemeAlert.confirm("20006",
					function(choose) {
						if (choose == 'OK') {
							resumeShareService.resumeShare(
									jssIds, '7');
//							window.parent.$scope.$emit("pageChange",window.parent.$scope.searchObjTag,window.parent.$scope.newPage);
						}
					}, [ resumeNameNoShare ]);

		
		}
	};

	// 转入人才库
	$scope.doTransferFromCont = function() {
		var obj = [];
		obj.push($scope.tssJobSeekersInfo);
		var jssIds = [];
		if (obj.length == 0) {
			elemeAlert.alert("20002");
			return;
		} else {
			var resumeName = "";
			for (var int = 0; int < obj.length; int++) {
				resumeName = resumeName + obj[int].name + "、";
			}
			resumeName = resumeName.substring(0,
					resumeName.length - 1)
			elemeAlert.confirm("20003", function(choose) {
				if (choose == 'OK') {
					// 从哪个阶段转入人才库的；
					// 1：简历库；2：测评阶段；3：面试邀请阶段；4：面试反馈阶段；5：录用阶段；6：报到阶段；
					resumeSourcePoolService.resumeSourcePool(
							obj, '1');
//					window.parent.$scope.$emit("pageChange",window.parent.$scope.searchObjTag,window.parent.$scope.newPage);
				}
			}, [ resumeName ]);
		}
	};
	
	


/*
	// 认领
	$rootScope.own = function(data) {
		elemeAlert.confirm(
						"20023",
						function(choose) {
							if (choose == 'OK') {
								elemeAlert.openLoading();
								var req = {
									token : sessionStorage
											.getItem("token"),
									jssId : data
								}

								$http(
										{
											method : 'POST',
											url : localStorage
													.getItem("Url")
													+ "TSSJobSeekersInfoServiceImpl/postJobSeekersInfoOwn",
											data : JSON
													.stringify(req)
										})
										.success(
												function(data) {
													elemeAlert
															.closeLoading();
													elemeAlert
															.alert(
																	"10015",
																	function(
																			choose) {
																		$scope
																				.getPagedDataAsync();
																	});
												})
										.error(
												function(data) {
													if (data == "40011") {
														elemeAlert
																.alert("40011");
													} else {
														elemeAlert
																.alert("40019");
													}
													elemeAlert
															.closeLoading();
												});
							}
						}, [ obj.name ]);
	}
	*/
	
});

//面试-简历预览
TSSAPP.controller('interviewOriginalResume',function($rootScope, $scope, i18nService,
		$http, $modal, elemeTab, elemeSearch, elemeUigrid, elemeAlert){
	/*var Ohref = window.location.href;
	var arrhref = Ohref.split("?");
	if(arrhref.length>0){
		$scope.resumeOriContJssIdTmp =arrhref[1];
		$scope.jssIdTmp = arrhref[1];
	
		if(arrhref.length>1){
			$scope.applyCount= arrhref[2];
		}
	}
	elemeAlert.openLoading();*/
	$scope.jssIdTmp = $scope.interviewOriginalJssId;
	$scope.info = {
		token : sessionStorage.getItem("token"),
		jssid : $scope.interviewOriginalJssId
	}

	$http(
			{
				method : 'POST',
				url : localStorage.getItem("Url")
						+ "TSSResumeOricontServiceImpl/getResumeOricont",
				data : JSON.stringify($scope.info)
			}).success(function(data) {
		elemeAlert.closeLoading();
		if (data.re != null) {
			$scope.startType;
			$scope.end;
			$scope.stringDate;
			if (data.re.contflag == 1) {
				if(data.re.resumecont.indexOf("<style ") != -1){
					$scope.startType = data.re.resumecont.indexOf("<style ");
				}
				if(data.re.resumecont.indexOf("</style>") != -1){
					$scope.end = data.re.resumecont.indexOf("</style>") + 8;
				}
				if($scope.startType == null && $scope.end == null){
					$scope.dateTmp =  data.re.resumecont.replace(new RegExp(/(null)/g),'');
				}else{
					$scope.stringDate = data.re.resumecont.substring($scope.startType,$scope.end);
					
					$scope.dateTmp =  data.re.resumecont.replace($scope.stringDate,'').replace(new RegExp(/(null)/g),'');
				}
				$("#nav_" + $scope.jssIdTmp).append($scope.dateTmp);
			} else {
				if(data.re.longcont.indexOf("<style ") != -1){
					$scope.startType = data.re.longcont.indexOf("<style ");
				}
				if(data.re.longcont.indexOf("</style>") != -1){
					$scope.end = data.re.longcont.indexOf("</style>") + 8;
				}
				if($scope.startType == null && $scope.end == null){
					$scope.dateTmp =  data.re.longcont.replace(new RegExp(/(null)/g),'');
				}else{
					$scope.stringDate = data.re.longcont.substring($scope.startType,$scope.end);
					
					$scope.dateTmp =  data.re.longcont.replace($scope.stringDate,'').replace(new RegExp(/(null)/g),'');
				}
				$("#nav_" + $scope.jssIdTmp).append($scope.dateTmp);
			}
		} else {
			$("#nav_" + $scope.jssIdTmp).append("无");
		}
		$scope.tssAnnexInfoList = data.tssAnnexInfoList;
	}).error(function(data) {
		 if (data == "40011") {
			elemeAlert.alert("40011");
		} else {
			elemeAlert.alert("40014");
		}
		elemeAlert.closeLoading();
	});
	
	$scope.doDownload = function(e){
		window.open(localStorage.getItem("downloadUrl") + e);
	}
});

//新建修改简历
TSSAPP.controller(
		'addResume',
		function($rootScope, $scope, i18nService, $http, $modal,
				elemeTab, elemeSearch, elemeUigrid, elemeAlert) {

			$rootScope.eduData = new Array();
			$rootScope.historyData = new Array();
			$rootScope.projectData = new Array();
			$scope.eduData = new Array();
			$scope.historyData = new Array();
			$scope.projectData = new Array();
			$scope.saveFlag = false;
			$scope.saveValue = "保存";
			elemeUigrid.getEduExpUiGridList();
			elemeUigrid.getHistoryUiGridList();
			elemeUigrid.getProjectUiGridList();
			
			if ($rootScope.addFlag) {
				$scope.tssJobSeekersInfoModel = {};
				$rootScope.tssJobSeekersInfoModel = {};
			} else {
				$scope.saveFlag = true;
				$scope.saveValue = "修改";
				$scope.tssJobSeekersInfoModel = angular
						.copy($rootScope.tssJobSeekersInfoModel);
				$scope.eduData = angular
						.copy($rootScope.tssJobSeekersInfoModel.tssJobSeekersEducationInfoList);
				$scope.historyData = angular
						.copy($rootScope.tssJobSeekersInfoModel.tssJobSeekersWorkExpInfoList);
				$scope.projectData = angular
				.copy($rootScope.tssJobSeekersInfoModel.tssJobSeekersProjectExpInfoList);
				$rootScope.tssJobSeekersInfoModel = {};
				
			}
			
			// 手机号码正确性校验
			$scope.mobileFlag = false;
			$scope.validateMobile = function() {
				var pattern = /^1\d{10}$/;  
			    if (pattern.test($scope.tssJobSeekersInfoModel.mobile)) {  
			    	$scope.mobileFlag = false;
			    }else{
			    	$scope.mobileFlag = true;
			    }
			};
			$scope.focusMobile = function() {
				$scope.mobileFlag = false;
			};
			
			$scope.save = function() {
				$scope.saveCheckFlag = true;
				// 验证未通过
				if (!$scope.cust_form.$valid) {
					// alert("验证未通过");
					return;
				}
				
				if($scope.tssJobSeekersInfoModel.mobile == null || $scope.tssJobSeekersInfoModel.mobile == "" 
					|| $scope.tssJobSeekersInfoModel.name == null || $scope.tssJobSeekersInfoModel.name == ""
						|| $scope.tssJobSeekersInfoModel.applyposition == null || $scope.tssJobSeekersInfoModel.applyposition == ""
					|| $scope.tssJobSeekersInfoModel.resumeSource == null || $scope.tssJobSeekersInfoModel.resumeSource == "" || $scope.mobileFlag){
					return;
				}
				$scope.existFlag = false;
				// 查看是否已存在。
//				if (!$scope.saveFlag) {
					elemeAlert.openLoading();
					var req = {
						token : sessionStorage.getItem("token"),
						tssJobSeekersInfoModel : $scope.tssJobSeekersInfoModel
					}

					$http(
							{
								method : 'POST',
								url : localStorage.getItem("Url")
										+ "TSSJobSeekersInfoServiceImpl/getJobSeekersInfoObject",
								data : JSON.stringify(req)
							})
							.success(
									function(data) {
										elemeAlert.closeLoading();
										if (data.tssJobSeekersInfo == null) {
											$scope.saveDate();
										} else {
											if (data.tssJobSeekersInfo.jssStatus == 7) {
												elemeAlert
												.alert(
														"20025",
														null,
														[ $scope.tssJobSeekersInfoModel.name ]);
												return;
//												$scope.saveFlag = true;
//												$scope.existFlag = true;
//												$scope.tssJobSeekersInfoModel.jssId = data.tssJobSeekersInfo.jssId;
//												$scope.saveDate();
											} else {
												if (data.tssJobSeekersInfo.jssStatus != 0 && data.tssJobSeekersInfo.jssStatus != 1) {
													elemeAlert
													.alert(
															"20034",
															null,
															[ $scope.tssJobSeekersInfoModel.name ]);
													return;
												}else{
													
													if (data.tssJobSeekersInfo.hrJobNo == sessionStorage
															.getItem("workcode")) {
														elemeAlert
														.confirm(
																"20037",
																function(
																		choose) {
																	if (choose == 'OK') {
																		$scope.saveFlag = true;
																		$scope.existFlag = true;
																		$scope.tssJobSeekersInfoModel.jssId = data.tssJobSeekersInfo.jssId;
																		$scope.saveDate();
																	} else {
																		return;
																	}
																},
																[ $scope.tssJobSeekersInfoModel.name ]);
													} else {
														elemeAlert
														.alert(
																"20033",
																null,
																[ $scope.tssJobSeekersInfoModel.name,data.hrJobName ]);
														return;
													}
												}
											}
										}
									}).error(function(data) {
										elemeAlert.closeLoading();
								if (data == "40011") {
									elemeAlert.alert("40011");
								} else {
									elemeAlert.alert("40014");
								}
							});
//				}else{
//					$scope.saveDate();
//				}

			}

			$scope.saveDate = function() {
				elemeAlert.openLoading();
				var req = {
					token : sessionStorage.getItem("token"),
					tssJobSeekersInfoModel : $scope.tssJobSeekersInfoModel,
					saveFlag : $scope.saveFlag + "",
					existFlag : $scope.existFlag + ""
				}

				$http(
						{
							method : 'POST',
							url : localStorage.getItem("Url")
									+ "TSSJobSeekersInfoServiceImpl/putJobSeekersInfo",
							data : JSON.stringify(req)
						})
						.success(
								function(data) {
									if ($scope.saveFlag) {
										elemeAlert.alert("10002");
									} else {
										$scope.tssJobSeekersInfoModel.jssId = data.jssId;
										elemeAlert.alert("10001");
									}
//									$rootScope.$emit(
//											"getPagedDataAsync",
//											$rootScope.pagingOptions);
									$rootScope.$emit("pageChange",$rootScope.searchObjTag,$rootScope.newPage);
									elemeAlert.closeLoading();
									$scope.saveFlag = true;
									$scope.saveValue = "修改";
								}).error(function(data) {
							if (data == "40011") {
								elemeAlert.alert("40011");
							} else {
								if ($scope.saveFlag) {
									elemeAlert.alert("40002");
								} else {
									elemeAlert.alert("40001");
								}
							}
							elemeAlert.closeLoading();
						});

			}
			$scope.getTableHeight = function(obj) {
				return elemeUigrid.setHeight(obj);
			};
			
			// 教育经历
			$scope.toggleMultiSelect = function() {
				$scope.gridApiedu.selection
						.setMultiSelect(!$scope.gridApi.grid.options.multiSelect);
				$scope.gridApihistory.selection
						.setMultiSelect(!$scope.gridApi.grid.options.multiSelect);
				$scope.gridApiproject.selection
						.setMultiSelect(!$scope.gridApi.grid.options.multiSelect);
			};

			$scope.toggleRow1 = function() {
				$scope.gridApiedu.selection
						.toggleRowSelection($scope.eduExpGridOptions.data[0]);
				$scope.gridApihistory.selection
						.toggleRowSelection($scope.historyGridOptions.data[0]);
				$scope.gridApiproject.selection
						.toggleRowSelection($scope.projectGridOptions.data[0]);
			};

			$scope.eduExpGridOptions.onRegisterApi = function(gridApi) {
				// set gridApi on scope
				$scope.gridApiedu = gridApi;
			};
			$scope.historyGridOptions.onRegisterApi = function(gridApi) {
				$scope.gridApihistory = gridApi;
			};
			$scope.projectGridOptions.onRegisterApi = function(gridApi) {
				$scope.gridApiproject = gridApi;
			};
			var eduId = 0;
			$scope.addEduDataNew = function() {
				// $scope.eduExpGridOptions.data.unshift({});
				$scope.eduData.push({
					eduId : eduId++,
					jssEduId : "",
					startDate : "",
					endDate : "",
					college : "",
					major : "",
					degree : "",
					// degreeList : $rootScope.highestdegreeList,
					remark : ""
				});
			};
			$scope.delEduData = new Array();
			$scope.delEduDataNew = function(e) {
				var obj = $scope.gridApiedu.selection.getSelectedRows();
				if (obj.length == 0) {
					elemeAlert.alert("20046");
					return;
				} else {
					for (var i = 0; i < obj.length; i++) {
						for (var j = 0; j < $scope.eduData.length; j++) {
							if ($scope.eduData[j].jsseduId != null
									&& $scope.eduData[j].jsseduId != ""
									&& $scope.eduData[j].jsseduId == obj[i].jsseduId) {
								$scope.delEduData
										.push($scope.eduData[j]);
								$scope.eduData.splice(j, 1);
								break;
							}
							if ($scope.eduData[j].eduId != null && $scope.eduData[j].eduId == obj[i].eduId) {
								$scope.eduData.splice(j, 1);
								break;
							}
						}
					}
				}
			}

			$scope.saveEduData = function() {
				for (var int = 0; int < $scope.eduData.length; int++) {
					if($scope.eduData[int].startDate == null || $scope.eduData[int].startDate == ""){
						elemeAlert.alert("20038");
						return;
					}
					$scope.eduData[int].startDate = new Date(
							$scope.eduData[int].startDate)
							.format("yyyy-MM-dd");
					if($scope.eduData[int].endDate != null && $scope.eduData[int].endDate != ""){
						$scope.eduData[int].endDate = new Date(
								$scope.eduData[int].endDate)
						.format("yyyy-MM-dd");
					}
//					var sta = $scope.eduData[int].startDate.replace(/-/g,"/");
//					var end = $scope.eduData[int].endDate.replace(/-/g,"/");
					if($scope.eduData[int].endDate != null && $scope.eduData[int].endDate != "" && $scope.eduData[int].startDate > $scope.eduData[int].endDate){
						elemeAlert.alert("20040");
						return;
					}
				}
				elemeAlert.openLoading();
				
				var req = {
					token : sessionStorage.getItem("token"),
					jssId : $scope.tssJobSeekersInfoModel.jssId,
					eduData : $scope.eduData,
					delEduData : $scope.delEduData
				}

				$http(
						{
							method : 'POST',
							url : localStorage.getItem("Url")
									+ "TSSJobSeekersEducationInfoServiceImpl/putJobSeekersEducationInfoList",
							data : JSON.stringify(req)
						}).success(
						function(data) {
							elemeAlert.alert("10017");
//							$rootScope.$emit("getPagedDataAsync",
//									$rootScope.pagingOptions);
							$rootScope.$emit("pageChange",$rootScope.searchObjTag,$rootScope.newPage);
							elemeAlert.closeLoading();
							$scope.eduData = new Array();
							$scope.eduData = angular.copy(data.resultList);
						}).error(function(data) {
					if (data == "40011") {
						elemeAlert.alert("40011");
					} else {
						elemeAlert.alert("40021");
					}
					elemeAlert.closeLoading();
				});
			}
			// // 履历记录
			var wkeid = 0;
			$scope.addHistoryDataNew = function() {
				// $scope.eduExpGridOptions.data.unshift({});
				$scope.historyData.push({
					wkeid : wkeid++,
					jsswkeid : "",
					startDate : "",
					endDate : "",
					company : "",
					position : "",
					jobDuties : "",
					proveMan : "",
					mobile : "",
					remark : ""
				});
			};

			$scope.delHistoryData = new Array();
			$scope.delHistoryDataNew = function() {
				var obj = $scope.gridApihistory.selection
						.getSelectedRows();
				if (obj.length == 0) {
					elemeAlert.alert("20046");
					return;
				} else {
					for (var i = 0; i < obj.length; i++) {
						for (var j = 0; j < $scope.historyData.length; j++) {
							if ($scope.historyData[j].jsswkeId != null
									&& $scope.historyData[j].jsswkeId != ""
									&& $scope.historyData[j].jsswkeId == obj[i].jsswkeId) {
								$scope.delHistoryData
										.push($scope.historyData[j]);
								$scope.historyData.splice(j, 1);
								break;
							}
							if ($scope.historyData[j].wkeid != null && $scope.historyData[j].wkeid == obj[i].wkeid) {
								$scope.historyData.splice(j, 1);
								break;
							}
						}
					}
				}
			}

			$scope.saveHistoryData = function() {
				for (var int = 0; int < $scope.historyData.length; int++) {
					if($scope.historyData[int].startDate == null || $scope.historyData[int].startDate == ""){
						elemeAlert.alert("20038");
						return;
					}
					$scope.historyData[int].startDate = new Date(
							$scope.historyData[int].startDate)
							.format("yyyy-MM-dd");
					if($scope.historyData[int].endDate != null && $scope.historyData[int].endDate != ""){
						$scope.historyData[int].endDate = new Date(
								$scope.historyData[int].endDate)
						.format("yyyy-MM-dd");
					}
					if($scope.historyData[int].endDate != null && $scope.historyData[int].endDate != "" && $scope.historyData[int].startDate > $scope.historyData[int].endDate){
						elemeAlert.alert("20040");
						return;
					}
				}
				elemeAlert.openLoading();
				var req = {
					token : sessionStorage.getItem("token"),
					jssId : $scope.tssJobSeekersInfoModel.jssId,
					historyData : $scope.historyData,
					delHistoryData : $scope.delHistoryData
				}

				$http(
						{
							method : 'POST',
							url : localStorage.getItem("Url")
									+ "TSSJobSeekersWorkExpInfoServiceImpl/putJobSeekersWorkExpInfoList",
							data : JSON.stringify(req)
						}).success(
						function(data) {
							elemeAlert.alert("10017");
//							$rootScope.$emit("getPagedDataAsync",
//									$rootScope.pagingOptions);
							$rootScope.$emit("pageChange",$rootScope.searchObjTag,$rootScope.newPage);
							elemeAlert.closeLoading();
							$scope.historyData = new Array();
							$scope.historyData = angular.copy(data.resultList);
						}).error(function(data) {
					if (data == "40011") {
						elemeAlert.alert("40011");
					} else {
						elemeAlert.alert("40021");
					}
					elemeAlert.closeLoading();
				});
			}
			// // 项目经历
			var pteid = 0;
			$scope.addProjectDataNew = function() {
				// $scope.eduExpGridOptions.data.unshift({});
				$scope.projectData.push({
					pteid : pteid++,
					jsspteid : "",
					startDate : "",
					endDate : "",
					project : "",
					playingRole : "",
					jobDuties : "",
					proveMan : "",
					mobile : "",
					remark : ""
				});
			};

			$scope.delProjectData = new Array();
			$scope.delProjectDataNew = function() {
				var obj = $scope.gridApiproject.selection
						.getSelectedRows();
				if (obj.length == 0) {
					elemeAlert.alert("20046");
					return;
				} else {
					for (var i = 0; i < obj.length; i++) {
						for (var j = 0; j < $scope.projectData.length; j++) {
							if ($scope.projectData[j].jsspteid != null
									&& $scope.projectData[j].jsspteid != ""
									&& $scope.projectData[j].jsspteid == obj[i].jsspteid) {
								$scope.delProjectData
										.push($scope.projectData[j]);
								$scope.projectData.splice(j, 1);
								break;
							}
							if ($scope.projectData[j].pteid != null && $scope.projectData[j].pteid == obj[i].pteid) {
								$scope.delProjectData
								.push($scope.projectData[j]);
								$scope.projectData.splice(j, 1);
								break;
							}
						}
					}
				}
			}

			$scope.saveProjectData = function() {
				for (var int = 0; int < $scope.projectData.length; int++) {
					if($scope.projectData[int].startDate == null || $scope.projectData[int].startDate == ""){
						elemeAlert.alert("20038");
						return;
					}
					$scope.projectData[int].startDate = new Date(
							$scope.projectData[int].startDate)
							.format("yyyy-MM-dd");
					if($scope.projectData[int].endDate != null && $scope.projectData[int].endDate != ""){
						$scope.projectData[int].endDate = new Date(
								$scope.projectData[int].endDate)
								.format("yyyy-MM-dd");
					}
					if($scope.projectData[int].endDate != null && $scope.projectData[int].endDate != "" && $scope.projectData[int].startDate > $scope.projectData[int].endDate){
						elemeAlert.alert("20040");
						return;
					}
				}
				elemeAlert.openLoading();
				var req = {
					token : sessionStorage.getItem("token"),
					jssId : $scope.tssJobSeekersInfoModel.jssId,
					projectData : $scope.projectData,
					delProjectData : $scope.delProjectData
				}

				$http(
						{
							method : 'POST',
							url : localStorage.getItem("Url")
									+ "TSSJobSeekersProjectExpInfoServiceImpl/putJobSeekersProjectExpInfoList",
							data : JSON.stringify(req)
						}).success(
						function(data) {
							elemeAlert.alert("10017");
//							$rootScope.$emit("getPagedDataAsync",
//									$rootScope.pagingOptions);
							$rootScope.$emit("pageChange",$rootScope.searchObjTag,$rootScope.newPage);
							elemeAlert.closeLoading();
							$scope.projectData = new Array();
							$scope.projectData = angular.copy(data.resultList);
						}).error(function(data) {
					if (data == "40011") {
						elemeAlert.alert("40011");
					} else {
						elemeAlert.alert("40021");
					}
					elemeAlert.closeLoading();
				});
			}

			$scope.upResume = function() {
				$rootScope.importResumeJssId = $scope.tssJobSeekersInfoModel.jssId;
				var myOtherModal = $modal({
					template : "modals/modal_importResume.html",
					// persist: true,
					show : true,
					backdrop : 'static',
					scope : $scope,
					keyboard : false
				});
				myOtherModal.$promise.then(myOtherModal.show);
			}
		});
//上传附件。
TSSAPP.controller(
		'importResumeController',
		function($rootScope, $scope, i18nService, $http, $modal,
				elemeAlert,elemeFile) {
			$scope.importResumeJssId = angular
					.copy($rootScope.importResumeJssId);
			$rootScope.importResumeJssId = "";
			$scope.importResumeFile = function(hide) {
				if ($scope.fileJson == null || $scope.fileJson == "") {
					elemeAlert.alert("20031");
					return;
				}
				var token = sessionStorage.getItem("token");
				elemeAlert.openLoading();
				var fileJsonArr = [];
				// 拉勾
				var filevar = {
					base64 : $scope.fileJson
				}
				fileJsonArr.push(filevar);

				$scope.req = {
					token : token,
					fileJsonArr : fileJsonArr,
					jssid : $scope.importResumeJssId
				}
				$http(
						{
							method : 'POST',
							url : localStorage.getItem("Url")
									+ "TSSJobSeekersInfoServiceImpl/impTssResumefile",
							data : JSON.stringify($scope.req)
						}).success(function(data) {
					elemeAlert.closeLoading();
					if(data.errorList != null && data.errorList.length > 0){
						elemeAlert.alert("20057");
					} else if(data.errorTagList != null && data.errorTagList.length > 0){
						var string = data.errorTagList[0];
						if( string.indexOf(".doc")>=0 || string.indexOf(".docx")>=0 ){
							elemeAlert.alert("20072");
						}else{
							elemeAlert.alert("20071");
						}
					}else {
						hide();
						elemeAlert.alert("10014");
						$rootScope.$emit("importResume",$rootScope.jssId);
					}
				}).error(function(data) {
					elemeAlert.closeLoading();
					if (data == "40011") {
						elemeAlert.alert("40011");
					} else {
						elemeAlert.alert("40020");
					}
				});
			}

			$scope.file_changed = function(element) {
				var reader = new FileReader();
				reader.readAsBinaryString(element.files[0]);
				var ext = element.files[0].type;
				if(element.files[0].size==0){
					elemeAlert.alert("20109");
					return;
				}
				if(!elemeFile.filter(element.files[0])){
					elemeAlert.alert("20064");
					$scope.$apply();
	    			return;
	    		}
				var fileName = element.files[0].name;
				var arr = ext.split('/');
				var loadfiletype = "." + arr[1];
				reader.onload = function(e) {
					var fileJson = {
						fileName : fileName,
						file : $.base64.encode(e.target.result),
						ext : loadfiletype
					};
					$("#fileName").val(fileName);
					$scope.fileJson = fileJson;
					$('#file_base64').val(fileJson);
				};
			}
		})
// 推荐简历初约
TSSAPP.controller(
		'sendInterview',
		function($rootScope, $scope, $compile, $http, elemeAlert, elemeTab) {

			$scope.TSSInterviewRecords = null;
			$scope.TSSInterviewRecords2 = null;
			$scope.TSSInterviewRecords3 = null;
			$scope.TSSInterviewRecords4 = null;
			$scope.TSSInterviewRecords5 = null;
			$scope.TSSInterviewRecords6 = null;
			$rootScope.$on("interviewRecords", function(event, msg) {
				$scope.TSSInterviewRecords = msg;
			});
			$rootScope.$on("interviewRecords2", function(event, msg) {
				$scope.TSSInterviewRecords2 = msg;
			});
			$rootScope.$on("interviewRecords3", function(event, msg) {
				$scope.TSSInterviewRecords3 = msg;
			});
			$rootScope.$on("interviewRecords4", function(event, msg) {
				$scope.TSSInterviewRecords4 = msg;
			});
			$rootScope.$on("interviewRecords5", function(event, msg) {
				$scope.TSSInterviewRecords5 = msg;
			});
			$rootScope.$on("interviewRecords6", function(event, msg) {
				$scope.TSSInterviewRecords6 = msg;
			});


			$scope.addMain = function () {
				$scope.show_resultVice1 = true;
			}
			$scope.add_one = function () {
				$scope.show_resultVice2 = true;
			}
			$scope.add_two = function () {
				$scope.show_resultVice3 = true;
			}
			$scope.add_three = function () {
				$scope.show_resultVice4 = true;
			}
			$scope.add_four = function () {
				$scope.show_resultVice5 = true;
			}

			$scope.del_one = function () {
				if($scope.TSSInterviewRecords3 != null){
					$scope.TSSInterviewRecords2 = $scope.TSSInterviewRecords3;
					$rootScope.$emit("interviewRecords2", $scope.TSSInterviewRecords2);
					$rootScope.$emit("interviewRecords2Name", $scope.TSSInterviewRecords2);
					$scope.show_resultVice1 = true;
				}else{
					$scope.show_resultVice1 = false;
					$rootScope.$emit("interviewRecords2", null);
					$rootScope.$emit("interviewRecords2Name", null);
				}
				if($scope.TSSInterviewRecords4 != null){
					$scope.TSSInterviewRecords3 = $scope.TSSInterviewRecords4;
					$rootScope.$emit("interviewRecords3", $scope.TSSInterviewRecords3);
					$rootScope.$emit("interviewRecords3Name", $scope.TSSInterviewRecords3);
					$scope.show_resultVice2 = true;
				}else{
					$scope.show_resultVice2 = false;
					$rootScope.$emit("interviewRecords3", null);
					$rootScope.$emit("interviewRecords3Name", null);
				}
				if($scope.TSSInterviewRecords5 != null){
					$scope.TSSInterviewRecords4 = $scope.TSSInterviewRecords5;
					$rootScope.$emit("interviewRecords4", $scope.TSSInterviewRecords5);
					$rootScope.$emit("interviewRecords4Name", $scope.TSSInterviewRecords5);
					$scope.show_resultVice3 = true;
				}else{
					$scope.show_resultVice3 = false;
					$rootScope.$emit("interviewRecords4", null);
					$rootScope.$emit("interviewRecords4Name", null);
				}
				if($scope.TSSInterviewRecords6 != null){
					$scope.TSSInterviewRecords5 = $scope.TSSInterviewRecords6;
					$rootScope.$emit("interviewRecords5", $scope.TSSInterviewRecords5);
					$rootScope.$emit("interviewRecords5Name", $scope.TSSInterviewRecords5);
					$scope.show_resultVice4 = true;
				}else{
					$scope.show_resultVice4 = false;
					$rootScope.$emit("interviewRecords5", null);
					$rootScope.$emit("interviewRecords5Name", null);
				}
				$scope.show_resultVice5 = false;
				$rootScope.$emit("interviewRecords6", null);
				$rootScope.$emit("interviewRecords6Name", null);
			}
			$scope.del_two = function () {
				if($scope.TSSInterviewRecords4 != null){
					$scope.TSSInterviewRecords3 = $scope.TSSInterviewRecords4;
					$rootScope.$emit("interviewRecords3", $scope.TSSInterviewRecords3);
					$rootScope.$emit("interviewRecords3Name", $scope.TSSInterviewRecords3);
					$scope.show_resultVice2 = true;
				}else{
					$scope.show_resultVice2 = false;
					$rootScope.$emit("interviewRecords3", null);
					$rootScope.$emit("interviewRecords3Name", null);
				}
				if($scope.TSSInterviewRecords5 != null){
					$scope.TSSInterviewRecords4 = $scope.TSSInterviewRecords5;
					$rootScope.$emit("interviewRecords4", $scope.TSSInterviewRecords5);
					$rootScope.$emit("interviewRecords4Name", $scope.TSSInterviewRecords5);
					$scope.show_resultVice3 = true;
				}else{
					$scope.show_resultVice3 = false;
					$rootScope.$emit("interviewRecords4", null);
					$rootScope.$emit("interviewRecords4Name", null);
				}
				if($scope.TSSInterviewRecords6 != null){
					$scope.TSSInterviewRecords5 = $scope.TSSInterviewRecords6;
					$rootScope.$emit("interviewRecords5", $scope.TSSInterviewRecords5);
					$rootScope.$emit("interviewRecords5Name", $scope.TSSInterviewRecords5);
					$scope.show_resultVice4 = true;
				}else{
					$scope.show_resultVice4 = false;
					$rootScope.$emit("interviewRecords5", null);
					$rootScope.$emit("interviewRecords5Name", null);
				}
				$scope.show_resultVice5 = false;
				$rootScope.$emit("interviewRecords6", null);
				$rootScope.$emit("interviewRecords6Name", null);
			}

			$scope.del_three = function () {
				if($scope.TSSInterviewRecords5 != null){
					$scope.TSSInterviewRecords4 = $scope.TSSInterviewRecords5;
					$rootScope.$emit("interviewRecords4", $scope.TSSInterviewRecords5);
					$rootScope.$emit("interviewRecords4Name", $scope.TSSInterviewRecords5);
					$scope.show_resultVice3 = true;
				}else{
					$scope.show_resultVice3 = false;
					$rootScope.$emit("interviewRecords4", null);
					$rootScope.$emit("interviewRecords4Name", null);
				}
				if($scope.TSSInterviewRecords6 != null){
					$scope.TSSInterviewRecords5 = $scope.TSSInterviewRecords6;
					$rootScope.$emit("interviewRecords5", $scope.TSSInterviewRecords5);
					$rootScope.$emit("interviewRecords5Name", $scope.TSSInterviewRecords5);
					$scope.show_resultVice4 = true;
				}else{
					$scope.show_resultVice4 = false;
					$rootScope.$emit("interviewRecords5", null);
					$rootScope.$emit("interviewRecords5Name", null);
				}
				$scope.show_resultVice5 = false;
				$rootScope.$emit("interviewRecords6", null);
				$rootScope.$emit("interviewRecords6Name", null);
			}

			$scope.del_four = function () {
				if($scope.TSSInterviewRecords6 != null){
					$scope.TSSInterviewRecords5 = $scope.TSSInterviewRecords6;
					$rootScope.$emit("interviewRecords5", $scope.TSSInterviewRecords5);
					$rootScope.$emit("interviewRecords5Name", $scope.TSSInterviewRecords5);
					$scope.show_resultVice4 = true;
				}else{
					$scope.show_resultVice4 = false;
					$rootScope.$emit("interviewRecords5", null);
					$rootScope.$emit("interviewRecords5Name", null);
				}
				$scope.show_resultVice5 = false;
				$rootScope.$emit("interviewRecords6", null);
				$rootScope.$emit("interviewRecords6Name", null);
			}

			$scope.del_five = function () {
				$scope.show_resultVice5 = false;
				$rootScope.$emit("interviewRecords6", null);
				$rootScope.$emit("interviewRecords6Name", null);
			}


			$scope.interviewTimesList = new Array();


			
			$scope.nameTmp = "";
			if($rootScope.rowEntityList == null || $rootScope.rowEntityList.length == 0){
				if($rootScope.resumeOriContTemp != null){
					$scope.nameTmp = $rootScope.resumeOriContTemp.name;
				}
			}else{
				for (var j = 0; j < $rootScope.rowEntityList.length; j++) {
					if(j != $rootScope.rowEntityList.length - 1){
						$scope.nameTmp = $scope.nameTmp + $rootScope.rowEntityList[j].name + "、";
					}else{
						$scope.nameTmp = $scope.nameTmp + $rootScope.rowEntityList[j].name;
					}
				}
			}
//			

			$scope.mainFlag = false;
			$scope.mainFlagClick = function(){
				$scope.mainFlag = !$scope.mainFlag;
			}
			
			

		
			// 保存
			$scope.save = function(hide) {
				
				if($scope.TSSInterviewRecords == null ||  $scope.TSSInterviewRecords.researchistName==null){
					elemeAlert.alert("20091");
					return;
				}

				if ($scope.sendInterviewForm.$valid) {
					$scope.interviewRecordsList = new Array();
					if($scope.TSSInterviewRecords != null && $scope.TSSInterviewRecords.researchistName!=null){
						 $scope.choosedIVer = $scope.TSSInterviewRecords.researchistName;
					}
					if($scope.TSSInterviewRecords2 != null && $scope.TSSInterviewRecords2.researchistName!=null){
						$scope.choosedIVer = $scope.choosedIVer + "、" + $scope.TSSInterviewRecords2.researchistName;
					}
					if($scope.TSSInterviewRecords3 != null &&  $scope.TSSInterviewRecords3.researchistName!=null){
						$scope.choosedIVer = $scope.choosedIVer + "、" + $scope.TSSInterviewRecords3.researchistName;
					}
					if($scope.TSSInterviewRecords4 != null &&  $scope.TSSInterviewRecords4.researchistName!=null){
						$scope.choosedIVer = $scope.choosedIVer + "、" + $scope.TSSInterviewRecords4.researchistName;
					}
					if($scope.TSSInterviewRecords5 != null &&  $scope.TSSInterviewRecords5.researchistName!=null){
						$scope.choosedIVer = $scope.choosedIVer + "、" + $scope.TSSInterviewRecords5.researchistName;
					}
					if($scope.TSSInterviewRecords6 != null &&  $scope.TSSInterviewRecords6.researchistName!=null){
						$scope.choosedIVer = $scope.choosedIVer + "、" + $scope.TSSInterviewRecords6.researchistName;
					}
						for (var j = 0; j < $rootScope.rowEntityList.length; j++) {
							if($scope.TSSInterviewRecords != null && $scope.TSSInterviewRecords.researchistName!=null){
								$scope.interviewRecordsTmp = {};
								// 设置面试官
								$scope.interviewRecordsTmp.choosedIVer = $scope.choosedIVer;
								// 设置求职信息
								$scope.interviewRecordsTmp.jssid = $rootScope.rowEntityList[j].jssId;
								$scope.interviewRecordsTmp.name = $rootScope.rowEntityList[j].name;
								$scope.interviewRecordsTmp.sex = $rootScope.rowEntityList[j].sex;
								$scope.interviewRecordsTmp.applyposition = $rootScope.rowEntityList[j].applyposition;
								$scope.interviewRecordsTmp.inviteNotes = $scope.TSSInterviewRecords.inviteNotes;
								$scope.interviewRecordsTmp.intrecid = $scope.TSSInterviewRecords.intrecid;
								$scope.interviewRecordsTmp.mobile = $scope.TSSInterviewRecords.mobile;
								$scope.interviewRecordsTmp.email = $scope.TSSInterviewRecords.email;
								$scope.interviewRecordsTmp.deptName = $scope.TSSInterviewRecords.deptName;
								$scope.interviewRecordsTmp.postName = $scope.TSSInterviewRecords.postName;
								$scope.interviewRecordsTmp.researchistName = $scope.TSSInterviewRecords.researchistName;
								$scope.interviewRecordsTmp.researchistJobNo = $scope.TSSInterviewRecords.researchistJobNo;
								$scope.interviewRecordsTmp.mainFlag = $scope.TSSInterviewRecords.mainFlag;
								$scope.interviewRecordsList.push($scope.interviewRecordsTmp);
							}
							if($scope.TSSInterviewRecords2 != null && $scope.TSSInterviewRecords2.researchistName!=null){
								$scope.interviewRecordsTmp = {};
								// 设置面试官
								$scope.interviewRecordsTmp.choosedIVer = $scope.choosedIVer;
								// 设置求职信息
								$scope.interviewRecordsTmp.jssid = $rootScope.rowEntityList[j].jssId;
								$scope.interviewRecordsTmp.name = $rootScope.rowEntityList[j].name;
								$scope.interviewRecordsTmp.sex = $rootScope.rowEntityList[j].sex;
								$scope.interviewRecordsTmp.applyposition = $rootScope.rowEntityList[j].applyposition;
								$scope.interviewRecordsTmp.inviteNotes = $scope.TSSInterviewRecords.inviteNotes;
								$scope.interviewRecordsTmp.intrecid = $scope.TSSInterviewRecords2.intrecid;
								$scope.interviewRecordsTmp.mobile = $scope.TSSInterviewRecords2.mobile;
								$scope.interviewRecordsTmp.email = $scope.TSSInterviewRecords2.email;
								$scope.interviewRecordsTmp.deptName = $scope.TSSInterviewRecords2.deptName;
								$scope.interviewRecordsTmp.postName = $scope.TSSInterviewRecords2.postName;
								$scope.interviewRecordsTmp.researchistName = $scope.TSSInterviewRecords2.researchistName;
								$scope.interviewRecordsTmp.researchistJobNo = $scope.TSSInterviewRecords2.researchistJobNo;
								$scope.interviewRecordsTmp.mainFlag = $scope.TSSInterviewRecords2.mainFlag;
								$scope.interviewRecordsList.push($scope.interviewRecordsTmp);
							}
							if($scope.TSSInterviewRecords3 != null &&  $scope.TSSInterviewRecords3.researchistName!=null){
								$scope.interviewRecordsTmp = {};
								// 设置面试官
								$scope.interviewRecordsTmp.choosedIVer = $scope.choosedIVer;
								// 设置求职信息
								$scope.interviewRecordsTmp.jssid = $rootScope.rowEntityList[j].jssId;
								$scope.interviewRecordsTmp.name = $rootScope.rowEntityList[j].name;
								$scope.interviewRecordsTmp.sex = $rootScope.rowEntityList[j].sex;
								$scope.interviewRecordsTmp.applyposition = $rootScope.rowEntityList[j].applyposition;
								$scope.interviewRecordsTmp.inviteNotes = $scope.TSSInterviewRecords.inviteNotes;
								$scope.interviewRecordsTmp.intrecid = $scope.TSSInterviewRecords3.intrecid;
								$scope.interviewRecordsTmp.mobile = $scope.TSSInterviewRecords3.mobile;
								$scope.interviewRecordsTmp.email = $scope.TSSInterviewRecords3.email;
								$scope.interviewRecordsTmp.deptName = $scope.TSSInterviewRecords3.deptName;
								$scope.interviewRecordsTmp.postName = $scope.TSSInterviewRecords3.postName;
								$scope.interviewRecordsTmp.researchistName = $scope.TSSInterviewRecords3.researchistName;
								$scope.interviewRecordsTmp.researchistJobNo = $scope.TSSInterviewRecords3.researchistJobNo;
								$scope.interviewRecordsTmp.mainFlag = $scope.TSSInterviewRecords3.mainFlag;
								$scope.interviewRecordsList.push($scope.interviewRecordsTmp);
							}
							if($scope.TSSInterviewRecords4 != null &&  $scope.TSSInterviewRecords4.researchistName!=null){
								$scope.interviewRecordsTmp = {};
								// 设置面试官
								$scope.interviewRecordsTmp.choosedIVer = $scope.choosedIVer;
								// 设置求职信息
								$scope.interviewRecordsTmp.jssid = $rootScope.rowEntityList[j].jssId;
								$scope.interviewRecordsTmp.name = $rootScope.rowEntityList[j].name;
								$scope.interviewRecordsTmp.sex = $rootScope.rowEntityList[j].sex;
								$scope.interviewRecordsTmp.applyposition = $rootScope.rowEntityList[j].applyposition;
								$scope.interviewRecordsTmp.inviteNotes = $scope.TSSInterviewRecords.inviteNotes;
								$scope.interviewRecordsTmp.mobile = $scope.TSSInterviewRecords4.mobile;
								$scope.interviewRecordsTmp.email = $scope.TSSInterviewRecords4.email;
								$scope.interviewRecordsTmp.deptName = $scope.TSSInterviewRecords4.deptName;
								$scope.interviewRecordsTmp.postName = $scope.TSSInterviewRecords4.postName;
								$scope.interviewRecordsTmp.researchistName = $scope.TSSInterviewRecords4.researchistName;
								$scope.interviewRecordsTmp.researchistJobNo = $scope.TSSInterviewRecords4.researchistJobNo;
								$scope.interviewRecordsTmp.mainFlag = $scope.TSSInterviewRecords4.mainFlag;
								$scope.interviewRecordsList.push($scope.interviewRecordsTmp);
							}
							if($scope.TSSInterviewRecords5 != null &&  $scope.TSSInterviewRecords5.researchistName!=null){
								$scope.interviewRecordsTmp = {};
								// 设置面试官
								$scope.interviewRecordsTmp.choosedIVer = $scope.choosedIVer;
								// 设置求职信息
								$scope.interviewRecordsTmp.jssid = $rootScope.rowEntityList[j].jssId;
								$scope.interviewRecordsTmp.name = $rootScope.rowEntityList[j].name;
								$scope.interviewRecordsTmp.sex = $rootScope.rowEntityList[j].sex;
								$scope.interviewRecordsTmp.applyposition = $rootScope.rowEntityList[j].applyposition;
								$scope.interviewRecordsTmp.inviteNotes = $scope.TSSInterviewRecords.inviteNotes;
								$scope.interviewRecordsTmp.mobile = $scope.TSSInterviewRecords5.mobile;
								$scope.interviewRecordsTmp.email = $scope.TSSInterviewRecords5.email;
								$scope.interviewRecordsTmp.deptName = $scope.TSSInterviewRecords5.deptName;
								$scope.interviewRecordsTmp.postName = $scope.TSSInterviewRecords5.postName;
								$scope.interviewRecordsTmp.researchistName = $scope.TSSInterviewRecords5.researchistName;
								$scope.interviewRecordsTmp.researchistJobNo = $scope.TSSInterviewRecords5.researchistJobNo;
								$scope.interviewRecordsTmp.mainFlag = $scope.TSSInterviewRecords5.mainFlag;
								$scope.interviewRecordsList.push($scope.interviewRecordsTmp);
							}
							if($scope.TSSInterviewRecords6 != null &&  $scope.TSSInterviewRecords6.researchistName!=null){
								$scope.interviewRecordsTmp = {};
								// 设置面试官
								$scope.interviewRecordsTmp.choosedIVer = $scope.choosedIVer;
								// 设置求职信息
								$scope.interviewRecordsTmp.jssid = $rootScope.rowEntityList[j].jssId;
								$scope.interviewRecordsTmp.name = $rootScope.rowEntityList[j].name;
								$scope.interviewRecordsTmp.sex = $rootScope.rowEntityList[j].sex;
								$scope.interviewRecordsTmp.applyposition = $rootScope.rowEntityList[j].applyposition;
								$scope.interviewRecordsTmp.inviteNotes = $scope.TSSInterviewRecords.inviteNotes;
								$scope.interviewRecordsTmp.mobile = $scope.TSSInterviewRecords6.mobile;
								$scope.interviewRecordsTmp.email = $scope.TSSInterviewRecords6.email;
								$scope.interviewRecordsTmp.deptName = $scope.TSSInterviewRecords6.deptName;
								$scope.interviewRecordsTmp.postName = $scope.TSSInterviewRecords6.postName;
								$scope.interviewRecordsTmp.researchistName = $scope.TSSInterviewRecords6.researchistName;
								$scope.interviewRecordsTmp.researchistJobNo = $scope.TSSInterviewRecords6.researchistJobNo;
								$scope.interviewRecordsTmp.mainFlag = $scope.TSSInterviewRecords6.mainFlag;
								$scope.interviewRecordsList.push($scope.interviewRecordsTmp);
							}

						}
//					}

					elemeAlert.openLoading();
					$scope.req = {
						token : sessionStorage.getItem("token"),
						interviewRecordsList : $scope.interviewRecordsList,
						workYears:$rootScope.rowEntityList[0].workYears
					}
					$http(
							{
								method : 'post',
								url : localStorage.getItem("Url")
										+ "TSSInterviewRecordsServiceImpl/postInterviewRecordsList",
								data : JSON.stringify($scope.req)
							// params: $scope.req
							})
							.success(
									function(data) {
										hide();
										elemeAlert.closeLoading();
										// 推荐简历成功后的这个提示不要了 xuemei.xu start
										$rootScope.$emit("pageChange",$rootScope.searchObjTag,$rootScope.newPage);
										window.location.href = "../html/tss_interview_list.html";
										//跳转到面试模块
										
									})
							.error(
									function(data) {
										if ($scope.interviewTimesList != null
												&& $scope.interviewTimesList.length > 0) {
											if($scope.interviewTimesList[0].removeFlag == null){
												$scope.interviewTimesList.splice(0, 1);
											}
										}
										elemeAlert.closeLoading();
										if (data == "40011") {
											elemeAlert.alert("40011");
										} else {
											elemeAlert.alert("40021");
										}
									})
				}

			}

		})
TSSAPP.controller(
		'sendInterview1',
		function($rootScope, $scope, $compile, $http, elemeAlert, elemeTab) {
			if($rootScope.tssInterviewRecordsViewList != null && $rootScope.tssInterviewRecordsViewList.length > 0){
				$scope.customPopupSelected = $rootScope.tssInterviewRecordsViewList[0].choosedIVer.split("、")[0];
				$scope.TSSInterviewRecords = $rootScope.tssInterviewRecordsViewList[0]
				$rootScope.$emit("interviewRecords", $scope.TSSInterviewRecords);
			}

			
			$scope.customPopupSelectedBlur1=function(){
				if($scope.TSSInterviewRecords==null || $scope.TSSInterviewRecords.researchistJobNo==null || $scope.TSSInterviewRecords.researchistJobNo==""){
					$scope.customPopupSelected = null;
				}
			}
			// 副面试官
			$scope.$watch('customPopupSelected', function (newVal, oldVal) {
				if (newVal !== oldVal && newVal != null && newVal.length > 1 && newVal.psnname == null) {
					$scope.req ={
							token:sessionStorage.getItem("token"),
							psnname: newVal
					}
					elemeAlert.openLoading();
					$http({
						method: 'POST',
						url : localStorage.getItem("Url") + "TBEmployeeServiceImpl/getEmployeeList",
						data: JSON.stringify($scope.req)
					}).success(function(data){
						console.log(new Date);
						$scope.$$childHead.matches = new Array();
						for (var int = 0; int < data.employeeList.length; int++) {
							var employee = {};
							employee.id=data.employeeList[int].psncode;
							employee.label=data.employeeList[int].psnname;
							employee.model = data.employeeList[int];
							$scope.$$childHead.matches.push(employee);
						}
//						console.log(new Date);
						elemeAlert.closeLoading();
					}).error(function(data){
						elemeAlert.closeLoading();
					})
				}
				$scope.getEmployee(newVal);
			}, true);
			$scope.getEmployee = function(e){
				if(e != null && e.mobile != null){
					$scope.TSSInterviewRecords = {};
					$scope.TSSInterviewRecords.mobile = e.mobile;
					$scope.TSSInterviewRecords.email = e.email;
					$scope.TSSInterviewRecords.deptName = e.deptname;
					$scope.TSSInterviewRecords.postName = e.postname;
					$scope.TSSInterviewRecords.researchistJobNo = e.psncode;
					$scope.TSSInterviewRecords.researchistName = e.psnname.split(" ")[0];
					$scope.TSSInterviewRecords.mainFlag = 1;
					$rootScope.$emit("interviewRecords", $scope.TSSInterviewRecords);
				}else{
					$scope.TSSInterviewRecords = {};
					$rootScope.$emit("interviewRecords", null);
				}
			}
		})
TSSAPP.controller(
		'sendInterview2',
		function($rootScope, $scope, $compile, $http, elemeAlert, elemeTab) {
			if($rootScope.tssInterviewRecordsViewList != null && $rootScope.tssInterviewRecordsViewList.length > 1){
				$scope.customPopupSelected2 = $rootScope.tssInterviewRecordsViewList[1].choosedIVer.split("、")[1];
				$scope.TSSInterviewRecords2 = $rootScope.tssInterviewRecordsViewList[1]
				$rootScope.$emit("interviewRecords2", $scope.TSSInterviewRecords2);
			}

			var checkFlag = true;
			$rootScope.$on("interviewRecords2Name",function (event, msg) {
				if(msg != null){
					$scope.customPopupSelected2 = msg.researchistName +"  " + msg.deptName + "  " + msg.postName;
				}else{
					$scope.customPopupSelected2 = null;
				}
				checkFlag = false;
			})
			
			$scope.customPopupSelectedBlur2=function(){
				if($scope.TSSInterviewRecords2==null || $scope.TSSInterviewRecords2.researchistJobNo==null || $scope.TSSInterviewRecords2.researchistJobNo==""){
					$scope.customPopupSelected2 = null;
				}
			}
			// 副面试官
			$scope.$watch('customPopupSelected2', function (newVal, oldVal) {
				if (newVal !== oldVal && newVal != null && newVal.length > 1 && newVal.psnname == null && checkFlag) {
					$scope.req ={
							token:sessionStorage.getItem("token"),
							psnname: newVal
					}
					elemeAlert.openLoading();
					$http({
						method: 'POST',
						url : localStorage.getItem("Url") + "TBEmployeeServiceImpl/getEmployeeList",
						data: JSON.stringify($scope.req)
					}).success(function(data){
						console.log(new Date);
						$scope.$$childHead.matches = new Array();
						for (var int = 0; int < data.employeeList.length; int++) {
							var employee = {};
							employee.id=data.employeeList[int].psncode;
							employee.label=data.employeeList[int].psnname;
							employee.model = data.employeeList[int];
							$scope.$$childHead.matches.push(employee);
						}
//						console.log(new Date);
						elemeAlert.closeLoading();
					}).error(function(data){
						elemeAlert.closeLoading();
						//alert(data);
//					   elemeAlert.alert('40014'); 
					})
				}
				if(checkFlag){
					$scope.getEmployee(newVal);
				}
				checkFlag = true;
			}, true);
			$scope.getEmployee = function(e){
				if(e != null && e.mobile != null){
					$scope.TSSInterviewRecords2 = {};
					$scope.TSSInterviewRecords2.mobile = e.mobile;
					$scope.TSSInterviewRecords2.email = e.email;
					$scope.TSSInterviewRecords2.deptName = e.deptname;
					$scope.TSSInterviewRecords2.postName = e.postname;
					$scope.TSSInterviewRecords2.researchistJobNo = e.psncode;
					$scope.TSSInterviewRecords2.researchistName = e.psnname.split(" ")[0];
					$scope.TSSInterviewRecords2.mainFlag = 2;
					$rootScope.$emit("interviewRecords2", $scope.TSSInterviewRecords2);
				}else{
					$scope.TSSInterviewRecords2 = {};
					$rootScope.$emit("interviewRecords2", null);
				}
			 }
})

TSSAPP.controller(
		'sendInterview3',
		function($rootScope, $scope, $compile, $http, elemeAlert, elemeTab) {
			if($rootScope.tssInterviewRecordsViewList != null && $rootScope.tssInterviewRecordsViewList.length > 2){
				$scope.customPopupSelected3 = $rootScope.tssInterviewRecordsViewList[2].choosedIVer.split("、")[2];
				$scope.TSSInterviewRecords3 = $rootScope.tssInterviewRecordsViewList[2]
				$rootScope.$emit("interviewRecords3", $scope.TSSInterviewRecords3);
			}

			var checkFlag = true;

			$rootScope.$on("interviewRecords3Name",function (event, msg) {
				if(msg != null){
					$scope.customPopupSelected3 = msg.researchistName +"  " + msg.deptName + "  " + msg.postName;
				}else{
					$scope.customPopupSelected3 = null;
				}
				checkFlag = false;
			})

			$scope.customPopupSelectedBlur3=function(){
				if($scope.TSSInterviewRecords3==null || $scope.TSSInterviewRecords3.researchistJobNo==null || $scope.TSSInterviewRecords3.researchistJobNo==""){
					$scope.customPopupSelected3 = null;
				}
			}
			// 副面试官
			$scope.$watch('customPopupSelected3', function (newVal, oldVal) {
				if (newVal !== oldVal && newVal != null && newVal.length > 1 && newVal.psnname == null && checkFlag) {
					$scope.req ={
							token:sessionStorage.getItem("token"),
							psnname: newVal
					}
					elemeAlert.openLoading();
					$http({
						method: 'POST',
						url : localStorage.getItem("Url") + "TBEmployeeServiceImpl/getEmployeeList",
						data: JSON.stringify($scope.req)
					}).success(function(data){
//						$scope.employeeList = data.employeeList;
						console.log(new Date);
						$scope.$$childHead.matches = new Array();
						for (var int = 0; int < data.employeeList.length; int++) {
							var employee = {};
							employee.id=data.employeeList[int].psncode;
							employee.label=data.employeeList[int].psnname;
							employee.model = data.employeeList[int];
							$scope.$$childHead.matches.push(employee);
						}
						console.log(new Date);
						elemeAlert.closeLoading();
					}).error(function(data){
						elemeAlert.closeLoading();
						//alert(data);
//					   elemeAlert.alert('40014'); 
					})
				}
				if(checkFlag){
					$scope.getEmployee(newVal);
				}
				checkFlag = true;
			}, true);
			$scope.getEmployee = function(e){
				if(e != null && e.mobile != null){
					$scope.TSSInterviewRecords3 = {};
					$scope.TSSInterviewRecords3.mobile = e.mobile;
					$scope.TSSInterviewRecords3.email = e.email;
					$scope.TSSInterviewRecords3.deptName = e.deptname;
					$scope.TSSInterviewRecords3.postName = e.postname;
					$scope.TSSInterviewRecords3.researchistJobNo = e.psncode;
					$scope.TSSInterviewRecords3.researchistName = e.psnname.split(" ")[0];
					$scope.TSSInterviewRecords3.mainFlag = 2;
					
					$rootScope.$emit("interviewRecords3", $scope.TSSInterviewRecords3);
				}else{
					$scope.TSSInterviewRecords3 = {};
					$rootScope.$emit("interviewRecords3", null);
				}
			 }
		})

TSSAPP.controller(
	'sendInterview4',
	function($rootScope, $scope, $compile, $http, elemeAlert, elemeTab) {
		if($rootScope.tssInterviewRecordsViewList != null && $rootScope.tssInterviewRecordsViewList.length > 3){
			$scope.customPopupSelected4 = $rootScope.tssInterviewRecordsViewList[3].choosedIVer.split("、")[3];
			$scope.TSSInterviewRecords4 = $rootScope.tssInterviewRecordsViewList[3]
			$rootScope.$emit("interviewRecords4", $scope.TSSInterviewRecords4);
		}

		var checkFlag = true;

		$rootScope.$on("interviewRecords4Name",function (event, msg) {
			if(msg != null){
				$scope.customPopupSelected4 = msg.researchistName +"  " + msg.deptName + "  " + msg.postName;
			}else{
				$scope.customPopupSelected4 = null;
			}
			checkFlag = false;
		})

		$scope.customPopupSelectedBlur4=function(){
			if($scope.TSSInterviewRecords4==null || $scope.TSSInterviewRecords4.researchistJobNo==null || $scope.TSSInterviewRecords4.researchistJobNo==""){
				$scope.customPopupSelected4 = null;
			}
		}
		// 副面试官
		$scope.$watch('customPopupSelected4', function (newVal, oldVal) {
			if (newVal !== oldVal && newVal != null && newVal.length > 1 && newVal.psnname == null && checkFlag) {
				$scope.req ={
					token:sessionStorage.getItem("token"),
					psnname: newVal
				}
				elemeAlert.openLoading();
				$http({
					method: 'POST',
					url : localStorage.getItem("Url") + "TBEmployeeServiceImpl/getEmployeeList",
					data: JSON.stringify($scope.req)
				}).success(function(data){
//						$scope.employeeList = data.employeeList;
					console.log(new Date);
					$scope.$$childHead.matches = new Array();
					for (var int = 0; int < data.employeeList.length; int++) {
						var employee = {};
						employee.id=data.employeeList[int].psncode;
						employee.label=data.employeeList[int].psnname;
						employee.model = data.employeeList[int];
						$scope.$$childHead.matches.push(employee);
					}
					console.log(new Date);
					elemeAlert.closeLoading();
				}).error(function(data){
					elemeAlert.closeLoading();
					//alert(data);
//					   elemeAlert.alert('40014');
				})
			}
			if(checkFlag){
				$scope.getEmployee(newVal);
			}
			checkFlag = true;
		}, true);
		$scope.getEmployee = function(e){
			if(e != null && e.mobile != null){
				$scope.TSSInterviewRecords4 = {};
				$scope.TSSInterviewRecords4.mobile = e.mobile;
				$scope.TSSInterviewRecords4.email = e.email;
				$scope.TSSInterviewRecords4.deptName = e.deptname;
				$scope.TSSInterviewRecords4.postName = e.postname;
				$scope.TSSInterviewRecords4.researchistJobNo = e.psncode;
				$scope.TSSInterviewRecords4.researchistName = e.psnname.split(" ")[0];
				$scope.TSSInterviewRecords4.mainFlag = 2;

				$rootScope.$emit("interviewRecords4", $scope.TSSInterviewRecords4);
			}else{
				// $scope.TSSInterviewRecords3 = {};
				$scope.TSSInterviewRecords4 = null;
				$rootScope.$emit("interviewRecords4", null);
			}
		}
	})

TSSAPP.controller(
	'sendInterview5',
	function($rootScope, $scope, $compile, $http, elemeAlert, elemeTab) {
		if($rootScope.tssInterviewRecordsViewList != null && $rootScope.tssInterviewRecordsViewList.length > 4){
			$scope.customPopupSelected5 = $rootScope.tssInterviewRecordsViewList[4].choosedIVer.split("、")[4];
			$scope.TSSInterviewRecords5 = $rootScope.tssInterviewRecordsViewList[4]
			$rootScope.$emit("interviewRecords5", $scope.TSSInterviewRecords5);
		}

		var checkFlag = true;

		$rootScope.$on("interviewRecords5Name",function (event, msg) {
			if(msg != null){
				$scope.customPopupSelected5 = msg.researchistName +"  " + msg.deptName + "  " + msg.postName;
			}else{
				$scope.customPopupSelected5 = null;
			}
			checkFlag = false;
		})

		$scope.customPopupSelectedBlur5=function(){
			if($scope.TSSInterviewRecords5==null || $scope.TSSInterviewRecords5.researchistJobNo==null || $scope.TSSInterviewRecords5.researchistJobNo==""){
				$scope.customPopupSelected5 = null;
			}
		}
		// 副面试官
		$scope.$watch('customPopupSelected5', function (newVal, oldVal) {
			if (newVal !== oldVal && newVal != null && newVal.length > 1 && newVal.psnname == null && checkFlag) {
				$scope.req ={
					token:sessionStorage.getItem("token"),
					psnname: newVal
				}
				elemeAlert.openLoading();
				$http({
					method: 'POST',
					url : localStorage.getItem("Url") + "TBEmployeeServiceImpl/getEmployeeList",
					data: JSON.stringify($scope.req)
				}).success(function(data){
//						$scope.employeeList = data.employeeList;
					console.log(new Date);
					$scope.$$childHead.matches = new Array();
					for (var int = 0; int < data.employeeList.length; int++) {
						var employee = {};
						employee.id=data.employeeList[int].psncode;
						employee.label=data.employeeList[int].psnname;
						employee.model = data.employeeList[int];
						$scope.$$childHead.matches.push(employee);
					}
					console.log(new Date);
					elemeAlert.closeLoading();
				}).error(function(data){
					elemeAlert.closeLoading();
					//alert(data);
//					   elemeAlert.alert('40014');
				})
			}
			if(checkFlag){
				$scope.getEmployee(newVal);
			}
			checkFlag = true;
		}, true);
		$scope.getEmployee = function(e){
			if(e != null && e.mobile != null){
				$scope.TSSInterviewRecords5 = {};
				$scope.TSSInterviewRecords5.mobile = e.mobile;
				$scope.TSSInterviewRecords5.email = e.email;
				$scope.TSSInterviewRecords5.deptName = e.deptname;
				$scope.TSSInterviewRecords5.postName = e.postname;
				$scope.TSSInterviewRecords5.researchistJobNo = e.psncode;
				$scope.TSSInterviewRecords5.researchistName = e.psnname.split(" ")[0];
				$scope.TSSInterviewRecords5.mainFlag = 2;

				$rootScope.$emit("interviewRecords5", $scope.TSSInterviewRecords5);
			}else{
				$scope.TSSInterviewRecords5 = {};
				$rootScope.$emit("interviewRecords5", null);
			}
		}
	})

TSSAPP.controller(
	'sendInterview6',
	function($rootScope, $scope, $compile, $http, elemeAlert, elemeTab) {
		if($rootScope.tssInterviewRecordsViewList != null && $rootScope.tssInterviewRecordsViewList.length > 5){
			$scope.customPopupSelected6 = $rootScope.tssInterviewRecordsViewList[5].choosedIVer.split("、")[5];
			$scope.TSSInterviewRecords6 = $rootScope.tssInterviewRecordsViewList[5]
			$rootScope.$emit("interviewRecords6", $scope.TSSInterviewRecords6);
		}

		var checkFlag = true;

		$rootScope.$on("interviewRecords6Name",function (event, msg) {
			if(msg != null){
				$scope.customPopupSelected6 = msg.researchistName +"  " + msg.deptName + "  " + msg.postName;
			}else{
				$scope.customPopupSelected6 = null;
			}
			checkFlag = false;
		})

		$scope.customPopupSelectedBlur6=function(){
			if($scope.TSSInterviewRecords6==null || $scope.TSSInterviewRecords6.researchistJobNo==null || $scope.TSSInterviewRecords6.researchistJobNo==""){
				$scope.customPopupSelected6 = null;
			}
		}
		// 副面试官
		$scope.$watch('customPopupSelected6', function (newVal, oldVal) {
			if (newVal !== oldVal && newVal != null && newVal.length > 1 && newVal.psnname == null && checkFlag) {
				$scope.req ={
					token:sessionStorage.getItem("token"),
					psnname: newVal
				}
				elemeAlert.openLoading();
				$http({
					method: 'POST',
					url : localStorage.getItem("Url") + "TBEmployeeServiceImpl/getEmployeeList",
					data: JSON.stringify($scope.req)
				}).success(function(data){
//						$scope.employeeList = data.employeeList;
					console.log(new Date);
					$scope.$$childHead.matches = new Array();
					for (var int = 0; int < data.employeeList.length; int++) {
						var employee = {};
						employee.id=data.employeeList[int].psncode;
						employee.label=data.employeeList[int].psnname;
						employee.model = data.employeeList[int];
						$scope.$$childHead.matches.push(employee);
					}
					console.log(new Date);
					elemeAlert.closeLoading();
				}).error(function(data){
					elemeAlert.closeLoading();
					//alert(data);
//					   elemeAlert.alert('40014');
				})
			}
			if(checkFlag){
				$scope.getEmployee(newVal);
			}
			checkFlag = true;
		}, true);
		$scope.getEmployee = function(e){
			if(e != null && e.mobile != null){
				$scope.TSSInterviewRecords6 = {};
				$scope.TSSInterviewRecords6.mobile = e.mobile;
				$scope.TSSInterviewRecords6.email = e.email;
				$scope.TSSInterviewRecords6.deptName = e.deptname;
				$scope.TSSInterviewRecords6.postName = e.postname;
				$scope.TSSInterviewRecords6.researchistJobNo = e.psncode;
				$scope.TSSInterviewRecords6.researchistName = e.psnname.split(" ")[0];
				$scope.TSSInterviewRecords6.mainFlag = 2;

				$rootScope.$emit("interviewRecords6", $scope.TSSInterviewRecords6);
			}else{
				$scope.TSSInterviewRecords6 = {};
				$rootScope.$emit("interviewRecords6", null);
			}
		}
	})
			
//转人才库
TSSAPP.controller('transferTalentPool',function($rootScope, $scope, $compile, $http, elemeAlert, elemeTab){
	var obj = $scope.newObj;
	$scope.name =obj[0].name;
	$scope.isOnlyShowOther = true;
	$scope.req = {
		tagCategory : "面试转人才库标签",
		size : 4
	};

	// 反馈标签
	$http(
			{
				method : 'GET',
				url : localStorage.getItem("Url")
						+ "TSSTagDefInfoServiceImpl/getTagDefInfoList",
				// data: JSON.stringify($scope.req)
				params : $scope.req
			})
			.success(
					function(data) {
						elemeAlert.closeLoading();
						$scope.tssTagModelList = data;
						$scope.tssTagModelList[0].value='252';

						for (var i = 0; i < $scope.tssTagModelList[0].tssTagDefInfoList.length; i++) {
							$scope.tssTagModelList[0].tssTagDefInfoList[i].value = i + 1;
						}

					})
			.error(
					function(data) {
						elemeAlert.closeLoading();
						if (data == "90000") {
							alert("登录超时， 请重新登录！");
							window.location.href = '../html/crm_login.html';
						}
					});
	
	$scope.radioClick = function(tagid){
		if(tagid!='252'){
			$scope.isOnlyShowOther = false;
		}else{
			$scope.isOnlyShowOther = true;
		}
	}
	
	// 保存
	$scope.save = function($hide) {
		elemeAlert.openLoading();
		var rep = {
			token : sessionStorage.getItem("token"),
			tssJobSeekersInfoList : $scope.newObj,
			type : '3',
			tssTagModelList : $scope.tssTagModelList
		}
		$http(
				{
					method : 'POST',
					url : localStorage.getItem("Url")
							+ "TSSJobSeekersInfoServiceImpl/putJobSeekersSourcePool",
					data : JSON.stringify(rep)
				}).success(
				function() {
					elemeAlert.closeLoading();
					elemeAlert.alert("10003");
					$hide();
					elemeTab.closeTab(obj[0].jssId);
					$rootScope.$emit("pageChange",$rootScope.searchObjTag,$rootScope.newPage);
//					window.location.href = "../html/tss_interview_list.html";
				}).error(function() {
			elemeAlert.alert("40018");
			elemeAlert.closeLoading();
		});
	}
})

		// 获取部门
TSSAPP.controller(
		'searchCompanyDept',
		function($rootScope, $scope, $compile, $http, elemeAlert, elemeTab) {
			
			$scope.getTreeEmpInfo = function (dptId) {
				$scope.roleList = new Array();
				elemeAlert.openLoading();
				$scope.req ={
		 	     		token:localStorage.getItem("token"),
		 	     		req:{id:dptId}//id:0007
		 	   	    }
			    $http({
			        method: 'POST',
			        url : localStorage.getItem("Url") + "TSSRegisterInfoServiceImpl/getDepartmentTreeInfo",
			 	    data: JSON.stringify($scope.req)
				  }).success(function(data){
					  elemeAlert.closeLoading();
					  if (data.treeinfo != null) {
						for (var int = 0; int < data.treeinfo.length; int++) {
							$scope.roleListTmp = eval("(" + data.treeinfo[int] + ")");//str转成JSON
							for (var i = 0; i < $scope.roleListTmp.length; i++) {
								$scope.roleList.push($scope.roleListTmp[i]);
							}
						}
					}

//					  if($scope.dptid != null){
//						  $("#" + $scope.dptid).addClass("selected"); // 追加样式 
//						  $("#" + $scope.dptid).css("color","red"); // 追加样式 
////						  document.getElementById($scope.dptid).className="selected";
//					  }
					  setTimeout(function () {
						  if($scope.dptid != null){
							  $("#" + $scope.dptid).addClass("selected"); // 追加样式 
//						  $("#" + $scope.dptid).css("color","red"); // 追加样式 
						  }
						  }, 100);
//					  $scope.roleList = eval("(" + data.treeinfo + ")");//str转成JSON
				   }).error(function(data){
					   elemeAlert.closeLoading();
					   		if(data == "40026"){
				  	    		elemeAlert.alert("40026");
				  	    	}else{
					   	      elemeAlert.alert("40046");
				  	    	}
				   })
			}
			
			window.onload=function(){
			    alert('加载完成');

			}
			
			$scope.getTreeEmpInfo(null);
			
			$scope.$watch( 'mytree.currentNode', function( newObj, oldObj ) {
				   if( $scope.mytree && angular.isObject($scope.mytree.currentNode) ) {
				    	$scope.dpt = $scope.mytree.currentNode.label;
				    	$scope.dptid = $scope.mytree.currentNode.id;
				    	$scope.checkFlag = 1;
				    	for (var int = 0; int < $scope.roleList.length; int++) {
				    		if($scope.checkFlag == 1){
				    			$scope.getCompany($scope.roleList[int],$scope.dptid,int);
				    		}
				    	}
				    	$scope.getTreeEmpInfo($scope.dptid);
				    }
				}, false);
			
			$scope.getCompany = function (obj,dptid,numTmp) {
				if(numTmp != null){
					$scope.companyId = numTmp;
					$scope.companyName = obj.label;
				}
				if(obj != null && obj.children != null && obj.children.length > 0){
					for (var int = 0; int < obj.children.length; int++) {
						if(dptid == obj.children[int].id){
							$scope.checkFlag = 2;
							break;
						}else{
							$scope.getCompany(obj.children[int],dptid);
						}
					}
				}
			}
			$scope.add = function (hide) {
//				$rootScope.deptName = $scope.dpt;
//				$rootScope.deptId = $scope.dptid;
//				$rootScope.companyName = $scope.companyName;
				$scope.comDept ={};
				$scope.comDept.deptName = $scope.dpt.split("(")[0];
				$scope.comDept.deptId = $scope.dptid;
				//不能选择    公司名称  
				if($scope.dptid=="01" || $scope.dptid=="02"){
					return;
				}
				$scope.comDept.companyName = $scope.companyName;
				$rootScope
				.$emit(
						"getComDept",
						$scope.comDept);
				hide();
			}
		})




// 获取部门
TSSAPP.controller(
	'searchCompanyDept',
	function($rootScope, $scope, $compile, $http, elemeAlert, elemeTab) {

		$scope.getTreeEmpInfo = function (dptId) {
			$scope.roleList = new Array();
			elemeAlert.openLoading();
			$scope.req ={
				token:localStorage.getItem("token"),
				req:{id:dptId}//id:0007
			}
			$http({
				method: 'POST',
				url : localStorage.getItem("Url") + "TSSRegisterInfoServiceImpl/getDepartmentTreeInfo",
				data: JSON.stringify($scope.req)
			}).success(function(data){
				elemeAlert.closeLoading();
				if (data.treeinfo != null) {
					for (var int = 0; int < data.treeinfo.length; int++) {
						$scope.roleListTmp = eval("(" + data.treeinfo[int] + ")");//str转成JSON
						for (var i = 0; i < $scope.roleListTmp.length; i++) {
							$scope.roleList.push($scope.roleListTmp[i]);
						}
					}
				}

//					  if($scope.dptid != null){
//						  $("#" + $scope.dptid).addClass("selected"); // 追加样式
//						  $("#" + $scope.dptid).css("color","red"); // 追加样式
////						  document.getElementById($scope.dptid).className="selected";
//					  }
				setTimeout(function () {
					if($scope.dptid != null){
						$("#" + $scope.dptid).addClass("selected"); // 追加样式
//						  $("#" + $scope.dptid).css("color","red"); // 追加样式
					}
				}, 100);
//					  $scope.roleList = eval("(" + data.treeinfo + ")");//str转成JSON
			}).error(function(data){
				elemeAlert.closeLoading();
				if(data == "40026"){
					elemeAlert.alert("40026");
				}else{
					elemeAlert.alert("40046");
				}
			})
		}

		window.onload=function(){
			alert('加载完成');

		}

		$scope.getTreeEmpInfo(null);

		$scope.$watch( 'mytree.currentNode', function( newObj, oldObj ) {
			if( $scope.mytree && angular.isObject($scope.mytree.currentNode) ) {
				$scope.dpt = $scope.mytree.currentNode.label;
				$scope.dptid = $scope.mytree.currentNode.id;
				$scope.checkFlag = 1;
				for (var int = 0; int < $scope.roleList.length; int++) {
					if($scope.checkFlag == 1){
						$scope.getCompany($scope.roleList[int],$scope.dptid,int);
					}
				}
				$scope.getTreeEmpInfo($scope.dptid);
			}
		}, false);

		$scope.getCompany = function (obj,dptid,numTmp) {
			if(numTmp != null){
				$scope.companyId = numTmp;
				$scope.companyName = obj.label;
			}
			if(obj != null && obj.children != null && obj.children.length > 0){
				for (var int = 0; int < obj.children.length; int++) {
					if(dptid == obj.children[int].id){
						$scope.checkFlag = 2;
						break;
					}else{
						$scope.getCompany(obj.children[int],dptid);
					}
				}
			}
		}
		$scope.add = function (hide) {
//				$rootScope.deptName = $scope.dpt;
//				$rootScope.deptId = $scope.dptid;
//				$rootScope.companyName = $scope.companyName;
			$scope.comDept ={};
			$scope.comDept.deptName = $scope.dpt.split("(")[0];
			$scope.comDept.deptId = $scope.dptid;
			//不能选择    公司名称
			if($scope.dptid=="01" || $scope.dptid=="02"){
				return;
			}
			$scope.comDept.companyName = $scope.companyName;
			$rootScope
				.$emit(
					"getComDept",
					$scope.comDept);
			hide();
		}
	})
		
TSSAPP.filter('mapDegree', function() {
	var genderHash = {
			1 : '博士研究生',
			2 : '硕士研究生',
			3 : '大学本科',
			4 : '专科',
			5 : '中专',
			6 : '高中',
			7 : '高中',
			8 : '小学',
			9 : '其它'
	};
	
	return function(input) {
		if (!input) {
			return '';
		} else {
			return genderHash[input];
		}
	};
})
TSSAPP.filter('mapRelationship', function() {
	var genderHash = {
			1 : '配偶',
			2 : '子女',
			3 : '父母',
			4 : '亲人',
			5 : '朋友',
			6 : '其它'
	};

	return function(input) {
		if (!input) {
			return '';
		} else {
			return genderHash[input];
		}
	};
})
TSSAPP.filter('mapIsPrimary', function() {
	var genderHash = {
			1 : '是',
			2 : '否'
	};

	return function(input) {
		if (!input) {
			return '';
		} else {
			return genderHash[input];
		}
	};
})
//TSSAPP.filter('mapExpType', function() {
//	var expTypeHash = {
//		1 : '工作',
//		2 : '实习'
//	};
//
//	return function(input) {
//		if (!input) {
//			return '';
//		} else {
//			return expTypeHash[input];
//		}
//	};
//})
TSSAPP.filter('maphighestDegree', function() {
	var genderHash = {
			1 : '是',
			2 : '否'
	};

	return function(input) {
		if (!input) {
			return '';
		} else {
			return genderHash[input];
		}
	};
})
TSSAPP.filter('mapprdegree', function() {
	var genderHash = {
			1 : '博士学位',
			2 : '硕士学位',
			3 : '学士学位',
			4 : '无学位'
	};
	
	return function(input) {
		if (!input) {
			return '';
		} else {
			return genderHash[input];
		}
	};
})

function convertUrl(url) {
	if (url == undefined) {
		return "http://";
	}
	var prefix = url.substring(0, 4).toLowerCase();
	if (prefix != "http") {
		return "http://" + url;
	}
	return url;
}

function checkUrl(url) {
	var flg = false;
	if (url != null && url != "") {
		var arrhref = new Array();
		if (url.indexOf("，") > 0) {
			arrhref = url.split("，");
		} else {
			arrhref.push(url);
		}
		var strRegex = "^((https|http|ftp|rtsp|mms)?://)"
				+ "?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?" // ftp的user@
				+ "(([0-9]{1,3}\.){3}[0-9]{1,3}" // IP形式的URL- 199.194.52.184
				+ "|" // 允许IP和DOMAIN（域名）
				+ "([0-9a-z_!~*'()-]+\.)*" // 域名- www.
				+ "([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\." // 二级域名
				+ "[a-z]{2,6})" // first level domain- .com or .museum
				+ "(:[0-9]{1,4})?" // 端口- :80
				+ "((/?)|" // a slash isn't required if there is no file name
				+ "(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$";
		var re = new RegExp(strRegex);
		// re.test()
		for (var int = 0; int < arrhref.length; int++) {
			if (re.test(arrhref[int])) {
				// return false;
			} else {
				flg = true;
				return flg;
			}
		}
	}
	/*
	 * else{ return false; }
	 */
	return flg;
}




TSSAPP.controller('newDoSearch', function($rootScope, $scope, i18nService,
		$http, $modal, elemeTab, elemeSearch, elemeUigrid, elemeAlert,$location) {
	$rootScope.newPage = location.href.split("TSS_FE/html/")[1];
	 //定义查询条件
	 $rootScope.searchObjTag={};
	  //按回车模糊查询
	   $scope.myKeyup = function(e,data){
         var keycode = window.event?e.keyCode:e.which;
         if(keycode==13){
         	if(data == undefined || data==null)
         		{
         		 elemeAlert.alert("20098");
	        		return;
	        	}
         	$rootScope.searchObjTag.searchByLike=data;
			$rootScope.$emit("pageChange",$rootScope.searchObjTag,$rootScope.newPage);
         }
     };
     //点击模糊查询按钮
     $scope. searchLikeInfo=function(data){
     	if(data == undefined || data==null){
     		 elemeAlert.alert("20098");
     		return;
     	}
     	$rootScope.searchObjTag.searchByLike=data;
			$rootScope.$emit("pageChange",$rootScope.searchObjTag,$rootScope.newPage);
     };
    
     	$scope.searchByEduValue = "学历";
     	$scope.searchByWyValue = "工作年限";
     	$scope.searchByQdValue = "渠道";
     	$scope.searchByNdValue = "更新时间";
     	$scope.searchByLcValue = "流程状态";
		//根据学历进行查询
		$scope.searchByEdu=function(data){
			if(data == null){
				$rootScope.searchObjTag.searchByEduData=data;
				$scope.searchByEduValue = "学历";
			}else{
				$rootScope.searchObjTag.searchByEduData=data.enumNo;
				$scope.searchByEduValue = data.enumValue;
			}
			$rootScope.$emit("pageChange",$rootScope.searchObjTag,$rootScope.newPage);
		};
		//根据工作年限进行查询
		$scope.searchByWy=function(data){
			if(data.enumNo == 1){
				$scope.searchByWyValue = "工作年限";
			}else{
				$scope.searchByWyValue = data.enumValue;
			}
			$rootScope.searchObjTag.searchByWorkYears=data.enumNo;
			$rootScope.$emit("pageChange",$rootScope.searchObjTag,$rootScope.newPage);
		};
		//根据简历渠道进行查询
		$scope.searchByQd=function(data){
			if(data == null){
				$rootScope.searchObjTag.searchByResourses=data;
				$scope.searchByQdValue = "渠道";
			}else{
				$rootScope.searchObjTag.searchByResourses=data.enumNo;
				$scope.searchByQdValue = data.enumValue;
			}
			$rootScope.$emit("pageChange",$rootScope.searchObjTag,$rootScope.newPage);
		};
		//根据简历更新时间进行查询
		$scope.searchByNd=function(data){
			if(data == null){
				$rootScope.searchObjTag.searchByTimeChange=data;
				$scope.searchByNdValue = "更新时间";
			}else{
				$rootScope.searchObjTag.searchByTimeChange=data.enumNo;
				$scope.searchByNdValue = data.enumValue;
			}
			$rootScope.$emit("pageChange",$rootScope.searchObjTag,$rootScope.newPage);
		};
		//根据流程状态进行查询
		$scope.searchByLc=function(data){
			if(data == null){
				$rootScope.searchObjTag.searchByLcFlowStatus=data;
				$scope.searchByLcValue = "流程状态";
			}else{
				$rootScope.searchObjTag.searchByLcFlowStatus=data.enumNo;
				$scope.searchByLcValue = data.enumValue;
			}
			$rootScope.$emit("pageChange",$rootScope.searchObjTag,$rootScope.newPage);
		};	
		
		//批量导入骑手信息
		$scope.importExcel=function(){
			var sendModal = $modal({
				template : "modals/modal_ExcelMessage_import.html",
				// persist: true,
				show : true,
				backdrop : 'static',
				scope : $scope,
				keyboard : false
			});
			
			sendModal.$promise.then(sendModal.show);
		}
	
});

// 个人信息
TSSAPP.controller(
	'changeBaseInfo',
	function($rootScope, $scope, $modal, $http, elemeAlert, $filter, elemeTab){
		
		if($scope.base.birthday != null){
			$scope.base.birthday = new Date($scope.base.birthday);
		}
		if($scope.base.workStartDate != null){
			$scope.base.workStartDate = new Date($scope.base.workStartDate);
		}
		
		//姓名只有在推荐简历之前才能修改
		$scope.nameReadOnly = false;
		if ($scope.base != null && $scope.base.flowStatus != null) {
			if ($scope.base.flowStatus != 0 && $scope.base.flowStatus != 1 && 
					$scope.base.flowStatus != 24 && $scope.base.flowStatus != 26 && $scope.base.flowStatus != 27) {
				$scope.nameReadOnly = true;
			}
		}
		
		//设置简历渠道的默认值为其他网络渠道
		if($scope.base != null && ($scope.base.resumeSource == null || $scope.base.resumeSource == "")){
			$scope.base.resumeSource = 1;
		}
		
		// 邮箱正确性校验
		$scope.emailFlag = false;
		$scope.validateEmail = function() {
		    if($scope.base.email == "" || $scope.base.email == null){
		    	$scope.emailFlag = false;
		    }else{
		    	var pattern = /^\w+([-+.]\w+)*@\w+([-.]\\w+)*\.\w+([-.]\w+)*$/;
			    if (pattern.test($scope.base.email)) {  
			    	$scope.emailFlag = false;
			    }else{
			    	$scope.emailFlag = true;
			    }
		    }
		};
		$scope.focusEmail = function() {
			$scope.emailFlag = false;
		};
		// 手机验证
		$scope.mobileFlag = false;
		$scope.validateMobile = function(){
			var pattern = /^1\d{10}$/;
			if(pattern.test($scope.base.mobile)){
				$scope.mobileFlag = false;
			}else{
				$scope.mobileFlag = true;
			}
			}
		$scope.focusMobile = function(){
			$scope.mobileFlag = false;
		}
		
		// 出生日期格式验证
		$scope.birthdayFlag = false;
		$scope.validateBirthday = function(){
			var pattern = /^((?:19|20)\d\d)-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;
			if(pattern.test($scope.base.birthday)){
				$scope.birthdayFlag = false;
			}else{
				$scope.birthdayFlag = true;
			}
			//是否是日期型
			if($scope.base.birthday instanceof Date){
				$scope.birthdayFlag = false;
			}else{
				$scope.birthdayFlag = true;
			}
			if($scope.base.birthday == "" || $scope.base.birthday == null){
				$scope.birthdayFlag = false;
			}
		}
		$scope.focusBirthday = function(){
			$scope.birthdayFlag = false;
		}
		
		$scope.workStartDateFlag = false;
		$scope.validateWorkStartDate = function(){
			var pattern = /^((?:19|20)\d\d)-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;
			if(pattern.test($scope.base.workStartDate)){
				$scope.workStartDateFlag = false;
			}else{
				$scope.workStartDateFlag = true;
			}
			//是否是日期型
			if($scope.base.workStartDate instanceof Date){
				$scope.workStartDateFlag = false;
			}else{
				$scope.workStartDateFlag = true;
			}
			if($scope.base.workStartDate == "" || $scope.base.workStartDate == null){
				$scope.workStartDateFlag = false;
			}
		}
		$scope.focusWorkStartDate = function(){
			$scope.workStartDateFlag = false;
		}
		
		$scope.close = function(hide){
			hide();
			if($scope.basicInfo == null){
				elemeTab.closeTab(1);
			}
		}
		$scope.NO = function(hide){
			hide();
			if($scope.basicInfo == null){
				elemeTab.closeTab(1);
			}
		}
		$scope.OK = function(hide){
			
			//修改  姓名不可修改  新需求  姓名可以修改
			if($rootScope.changeBaseInfoFlag){
				//必填字段 姓名 手机号码 应聘岗位
//				if($scope.base.name == null || $scope.base.name == "" 
//					|| $scope.base.mobile == null || $scope.base.mobile == ""
//					|| $scope.mobileFlag || ($scope.emailFlag && $scope.base.email != null)){
//					elemeAlert.alert("20089");
//				}else{
					elemeAlert.openLoading();
					if($scope.base.birthday != null){
						$scope.base.birthday = new Date($scope.base.birthday).format("yyyy-MM-dd");
					}
					if($scope.base.workStartDate != null){
						$scope.base.workStartDate = new Date($scope.base.workStartDate).format("yyyy-MM-dd");
					}
					
					//检验 姓名、手机 是否有重复
					var req = {
							token : sessionStorage.getItem("token"),
							tssJobSeekersInfoModel : $scope.base,
							jssId : $rootScope.jssId
					}
					$http(
							{
								method : 'POST',
								url : localStorage.getItem("Url")
										+ "TSSJobSeekersInfoServiceImpl/getJobSeekersInfoObject",
								data : JSON.stringify(req)
							}).success(function(data) {
									elemeAlert.closeLoading();
									//当简历在其他hr手中（包括人才库  简历库 和流程中） 和  已共享状态  和  缺少hrJobNo hremail 不能修改
									if(data.tssJobSeekersInfo != null){
										//修改非姓名手机号等信息
										if(data.tssJobSeekersInfo.jssId == $rootScope.jssId){
											$scope.update();
											hide();
											return;
										}

										//已共享状态
										else if(data.tssJobSeekersInfo != null && data.tssJobSeekersInfo.hrJobNo == null && data.tssJobSeekersInfo.jssStatus == 7){
											elemeAlert.alert("20025",null,[$scope.base.name]);
											return;
										}
										//在职人员 不可操作
										else if(data.tssJobSeekersInfo != null && data.tssJobSeekersInfo.employed == 1){
											elemeAlert.alert("20022", null, [ $scope.base.name ]);
											return;
										}
										//在非当前hr的简历库中
										else if(data.tssJobSeekersInfo != null && data.tssJobSeekersInfo.hrJobNo != null && data.tssJobSeekersInfo.hrJobNo != sessionStorage.getItem("workcode")
												&& (data.tssJobSeekersInfo.jssStatus == 0 || data.tssJobSeekersInfo.jssStatus == 1)){
											if(data.hrJobName == null || data.hrJobName == ''){
												data.hrJobName == "未知";
											}
											elemeAlert.alert("20115",null,[$scope.base.name,data.hrJobName]);
											return;
										}
										//在其他hr的测评、面试、录用、报到中
										else if(data.tssJobSeekersInfo != null && data.tssJobSeekersInfo.hrJobNo != null && data.tssJobSeekersInfo.hrJobNo != sessionStorage.getItem("workcode")
												&& data.tssJobSeekersInfo.jssStatus != 0 && data.tssJobSeekersInfo.jssStatus != 1){
											elemeAlert.alert("20122",null,[$scope.base.name,data.hrJobName]);
											return;
										}
										//在当前hr的简历库中 
										else if(data.tssJobSeekersInfo != null && data.tssJobSeekersInfo.hrJobNo != null && data.tssJobSeekersInfo.hrJobNo == sessionStorage.getItem("workcode")
												&& (data.tssJobSeekersInfo.jssStatus == 0 || data.tssJobSeekersInfo.jssStatus == 1)){
											elemeAlert.alert("20120");
											return;
										}//离职人员
										else {
											elemeAlert.alert("20025",null,[$scope.base.name]);
									}
										//在当前hr的非简历库环节 正在走流程 不能修改
										if(data.tssJobSeekersInfo != null && data.tssJobSeekersInfo.hrJobNo != null && data.tssJobSeekersInfo.hrJobNo == sessionStorage.getItem("workcode")
												&& data.tssJobSeekersInfo.jssStatus != 0 && data.tssJobSeekersInfo.jssStatus != 1){
											elemeAlert.alert("20034",null,[$scope.base.name]);
											return;
//										}
//										//简历异常
//										else if(data.tssJobSeekersInfo != null && data.tssJobSeekersInfo.hrJobNo == null && data.tssJobSeekersInfo.jssStatus != 7 || data.tSSHRSourcePool != null && data.tSSHRSourcePool.hrJobNo == null){
//												elemeAlert.alert("20118");
//												return;
										}else{
											//简历已存在
											elemeAlert.alert("20121");
										}
										
									//在人才库中
									}else if(data.tSSHRSourcePool != null){
										elemeAlert.alert("20119");
										return;
									}else if(data.nuMlevening!=null){
										//主表，人才库都没有  员工表有
										if(data.nuMlevening.psnendflag!=null && data.nuMlevening.psnendflag=="Y"){
											//离职人员
											elemeAlert.confirm("20133",function(choose){
												if(choose == 'OK'){
													$scope.update();
												}
												return;
											},[$scope.base.name])
										}else if(data.nuMlevening.psnendflag!=null && data.nuMlevening.psnendflag=="N"){
											elemeAlert.alert("20135");
											return;
										}
										
										
									}else{
										$scope.update();
										hide();
									}
									
							}).error(function(data){
								elemeAlert.closeLoading();
								if (data == "40011") {
									elemeAlert.alert("40011");
								} else {
									elemeAlert.alert("40014");
								}
							})		
//				}
				
			}
			
			$scope.update = function(){
				$scope.info = {
						token : sessionStorage.getItem("token"),
						jssId : $scope.base.jssId,
						baseInfo : $scope.base
				}
				$http({
					method : 'POST', 
					url : localStorage.getItem("Url") 
						+ 'TSSJobSeekersInfoServiceImpl/updateBaseInfo',
					data : JSON.stringify($scope.info)
				}).success(function(data){
					$rootScope.$emit("selfInfo",data.result);
					$rootScope.$emit("applyInfo",data.result);
					$rootScope.$emit("pageChange",$rootScope.searchObjTag,$rootScope.newPage);
//					elemeAlert.alert("10020");
					hide();
				}).error(function(data){
					elemeAlert.alert("40002");
				})
			}
			
			$scope.fixed = function(obj){
				$rootScope.update(obj);
			}
			
			//新增
			if(!$rootScope.changeBaseInfoFlag){
				elemeAlert.openLoading();
					//检测简历是否存在
					if($scope.base.birthday != null){
						$scope.base.birthday = new Date($scope.base.birthday).format("yyyy-MM-dd");
					}
					if($scope.base.workStartDate != null){
						$scope.base.workStartDate = new Date($scope.base.workStartDate).format("yyyy-MM-dd");
					}
					var req = {
							token : sessionStorage.getItem("token"),
							tssJobSeekersInfoModel : $scope.base
					}
					
					$http(
							{
								method : 'POST',
								url : localStorage.getItem("Url")
										+ "TSSJobSeekersInfoServiceImpl/getJobSeekersInfoObject",
								data : JSON.stringify(req)
							}).success(function(data) {
									elemeAlert.closeLoading();
									//简历库没有数据
									if(data.tssJobSeekersInfo == null && data.tSSHRSourcePool == null && data.nuMlevening==null){
										$scope.saveDate();
										hide();
									//简历库有数据
									}else{
										//在职人员 不可操作
										if(data.tssJobSeekersInfo != null && data.tssJobSeekersInfo.employed == 1){
											elemeAlert.alert("20022", null, [ $scope.base.name ]);
											return;
										}
										//在其他hr的简历库中
										else if(data.tssJobSeekersInfo != null && data.tssJobSeekersInfo.hrJobNo != null && data.tssJobSeekersInfo.hrJobNo != sessionStorage.getItem("workcode")
												&& (data.tssJobSeekersInfo.jssStatus == 0 || data.tssJobSeekersInfo.jssStatus == 1)){
											if(data.hrJobName == null || data.hrJobName == ''){
												data.hrJobName == "未知";
											}
											elemeAlert.alert("20115",null,[$scope.base.name,data.hrJobName]);
											return;
										}
										//在其他hr的测评、面试、录用、报到中
										else if(data.tssJobSeekersInfo != null && data.tssJobSeekersInfo.hrJobNo != null && data.tssJobSeekersInfo.hrJobNo != sessionStorage.getItem("workcode")
												&& data.tssJobSeekersInfo.jssStatus != 0 && data.tssJobSeekersInfo.jssStatus != 1){
											elemeAlert.alert("20116",null,[$scope.base.name,data.hrJobName]);
											return;
										}
										//在当前hr的简历库中  点击确定直接打开修改页面
										else if(data.tssJobSeekersInfo != null && data.tssJobSeekersInfo.hrJobNo != null && data.tssJobSeekersInfo.hrJobNo == sessionStorage.getItem("workcode")
												&& (data.tssJobSeekersInfo.jssStatus == 0 || data.tssJobSeekersInfo.jssStatus == 1)){
											
											hide();
											elemeTab.closeTab(1);
											elemeAlert.confirm("20117",function(choose){
												if(choose == 'OK'){
													$rootScope.$emit("pageChange",$rootScope.searchObjTag,$rootScope.newPage);
													$scope.fixed(data.tssJobSeekersInfo);
												}
												return;
											},[$scope.base.name])
										}
										//在当前hr的非简历库环节
										else if(data.tssJobSeekersInfo != null && data.tssJobSeekersInfo.hrJobNo != null && data.tssJobSeekersInfo.hrJobNo == sessionStorage.getItem("workcode")
												&& data.tssJobSeekersInfo.jssStatus != 0 && data.tssJobSeekersInfo.jssStatus != 1){
											elemeAlert.alert("20034",null,[$scope.base.name]);
											return;
										}
										//已共享状态
										else if(data.tssJobSeekersInfo != null && data.tssJobSeekersInfo.hrJobNo == null && data.tssJobSeekersInfo.jssStatus == 7){
											elemeAlert.alert("20025",null,[$scope.base.name]);
											return;
										}
										//在当前hr的人才库中
										else if(data.tSSHRSourcePool != null){
											elemeAlert.alert("20119");
										}else if(data.nuMlevening!=null){
											//主表，人才库都没有  员工表有
											if(data.nuMlevening.psnendflag!=null && data.nuMlevening.psnendflag=="Y"){
												//离职人员
												elemeAlert.confirm("20133",function(choose){
													if(choose == 'OK'){
														$scope.saveDate();
													}
													return;
												},[$scope.base.name])
											}else if(data.nuMlevening.psnendflag!=null && data.nuMlevening.psnendflag=="N"){
												elemeAlert.alert("20135");
												return;
											}			
										}else{
											//简历已存在
											elemeAlert.alert("20121");
										}
									}
									}).error(function(data) {
										elemeAlert.closeLoading();
										if (data == "40011") {
											elemeAlert.alert("40011");
										} else {
											elemeAlert.alert("40014");
										}
									});
					
					
					
//				}
				
			}
			
			$scope.saveDate = function(){
				if($scope.base.birthday != null && $scope.base.birthday != ""){
					$scope.base.birthday = new Date($scope.base.birthday).format("yyyy-MM-dd");
				}
				var req = {
						token : sessionStorage.getItem("token"),
						base : $scope.base
				}

				$http(
						{
							method : 'POST',
							url : localStorage.getItem("Url")
									+ "TSSJobSeekersInfoServiceImpl/insertBaseInfo",
							data : JSON.stringify(req)
						}).success(function(data){
							$scope.hasBaseInfo = true;
							data.result.birthday = $filter('date')(data.result.birthday,"yyyy-MM-dd");
							$rootScope.jssId = data.result.jssId;
							$rootScope.$emit("selfInfo",data.result);
							$rootScope.$emit("applyInfo",data.result);
							$rootScope.$emit("pageChange",$rootScope.searchObjTag,$rootScope.newPage);
//							elemeAlert.alert("10020");
						}).error(function(data){
							elemeAlert.alert("40002");
						})
				
			}
			
			
		}
	})
				
//应聘信息
TSSAPP.controller(
	'addjobinList',
	function($rootScope, $scope, $modal, $http, elemeAlert){
		$scope.close = function(hide){
			hide();
		}
		$scope.NO = function(hide){
			hide();
		}
		$scope.OK = function(hide){
			
			//修改
			if($rootScope.changeInfoFlag){
				elemeAlert.openLoading();
				$scope.info = {
						token : sessionStorage.getItem("token"),
						jssId : $rootScope.jssId,
//						applydept : $scope.tss.applydept,
//						applyposition : $scope.tss.applyposition
						tss : $scope.tss
				}
				$http({
					method : 'POST',
					url : localStorage.getItem("Url") 
						+ 'TSSJobSeekersInfoServiceImpl/updateJob',
					data : JSON .stringify($scope.info)
				}).success(function(data){
				/*	$scope.tssJobSeekersInfoModel.applydept = data.result.applydept;
					$scope.tssJobSeekersInfoModel.applyposition = data.result.applyposition;*/
					$rootScope.$emit("applyInfo",data.result);
					$rootScope.$emit("pageChange",$rootScope.searchObjTag,$rootScope.newPage);
//					elemeAlert.alert("10020");
					elemeAlert.closeLoading();
					hide();
				}).error(function(data){
					elemeAlert.alert("40002");
					elemeAlert.closeLoading();
				})
				
			}
			
			//新增
//			if(!$rootScope.changeInfoFlag){
//				elemeAlert.openLoading();
//				$scope.info = {
//						token : sessionStorage.getItem("token"),
//						jssId : $scope.jssInfo.jssId,
//						applydept : $scope.tss.applydept,
//						applyposition : $scope.tss.applyposition
//				}
//				$http({
//						method : 'POST',
//						url : localStorage.getItem("Url") 
//							+ 'TSSJobSeekersInfoServiceImpl/insertJob',
//							data : JSON.stringify($scope.info)
//					}).success(function(data){
//						$rootScope.$emit("applyInfo",data.result);
//						elemeAlert.closeLoading();
//						hide();
//					}).error(function(data){
//						elemeAlert.alert("40002");
//						elemeAlert.closeLoading();
//					})
//				
//			}
		}	
	})
//教育经历
TSSAPP.controller(
		'changeEduInfo',
		function($rootScope, $scope, $modal, $http, elemeAlert){
			
			// 日期验证
			$scope.startDateFlag = false;
			$scope.validateStartDate = function(){
				var pattern = /^((?:19|20)\d\d)-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;
				if(pattern.test($scope.edu.startDate)){
					$scope.startDateFlag = false;
				}else{
					$scope.startDateFlag = true;
				}
				if($scope.edu.startDate instanceof Date){
					$scope.startDateFlag = false;
				}else{
					$scope.startDateFlag = true;
				}
			}
			$scope.focusStartDate = function(){
				$scope.startDateFlag = false;
			}
			
			$scope.endDateFlag = false;
			$scope.validateEndDate = function(){
				var pattern = /^((?:19|20)\d\d)-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;
				if(pattern.test($scope.edu.endDate)){
					$scope.endDateFlag = false;
				}else{
					$scope.endDateFlag = true;
				}
				if($scope.edu.endDate instanceof Date){
					$scope.endDateFlag = false;
				}else{
					$scope.endDateFlag = true;
				}
			}
			$scope.focusEndDate = function(){
				$scope.endDateFlag = false;
			}
			
			$scope.close = function(hide){
				hide();
			}
			$scope.NO = function(hide){
				hide();
			}
			$scope.OK = function(hide){
				//修改记录
				elemeAlert.openLoading();
				if($rootScope.changeEduInfoFlag){
					
					$scope.index = $rootScope.eduindex;
					$scope.middle = angular.copy($scope.jssInfo.tssJobSeekersEducationInfoList[$scope.index]);
					//HR修改后的值
					$scope.middle.college = $scope.edu.college;
					$scope.middle.major = $scope.edu.major;
					$scope.middle.degree = $scope.edu.degree;
					if($scope.edu.startDate != null){
						$scope.middle.startDate
						= new Date($scope.edu.startDate).format("yyyy-MM-dd");
					}else{
						$scope.middle.startDate = null;
					}
					if($scope.edu.endDate != null){
						$scope.middle.endDate 
						= new Date($scope.edu.endDate).format("yyyy-MM-dd");
					}else{
						$scope.middle.endDate = null;
					}
					$scope.middle.remark = $scope.edu.remark;
					
//					if($scope.edu.startDate != null && $scope.edu.startDate != "" &&
//						$scope.edu.endDate != null && $scope.edu.endDate != "" && 
//						$scope.edu.startDate < $scope.edu.endDate){
//						数据库修改教育表对应记录
						$scope.info = {
								token : sessionStorage.getItem("token"),
								jssEduId : $scope.jssInfo.tssJobSeekersEducationInfoList[$scope.index].jssEduId,
								jssId : $rootScope.jssId,
								edu : $scope.middle,
								
						}
						
						$http({
							method : 'POST',
							url : localStorage.getItem("Url") 
								+ 'TSSJobSeekersEducationInfoServiceImpl/updateEdu',
							data : JSON.stringify($scope.info)
						}).success(function(data){
							/*$scope.tssJobSeekersInfoModel.tssJobSeekersEducationInfoList = data.resultList;*/
							elemeAlert.closeLoading();
							$rootScope.$emit("eduInfo",data.resultList);
//							elemeAlert.alert("10020");
							hide();
						}).error(function(data){
							elemeAlert.closeLoading();
							elemeAlert.alert("40002");
						})
//					}	else{
//						elemeAlert.closeLoading();
////						elemeAlert.alert("20092");
//					}	
					
					
//				新增记录	
				}else if(!$rootScope.changeEduinfoFlag){
//					if($scope.edu.startDate != null && $scope.edu.endDate != null &&
//						$scope.edu.startDate < $scope.edu.endDate){

						if($scope.edu.startDate != null){
							$scope.start = new Date($scope.edu.startDate).format("yyyy-MM-dd");
						}else{
							$scope.start = null;
						}
						if($scope.edu.endDate != null){
							$scope.end = new Date($scope.edu.endDate).format("yyyy-MM-dd");
						}else{
							$scope.end = null;
						}
						
						$scope.info = {
								token : sessionStorage.getItem("token"),
								jssId : $rootScope.jssId,
								college : $scope.edu.college,
								major : $scope.edu.major,
								degree : $scope.edu.degree,
								startDate : $scope.start,
								endDate : $scope.end,
								remark : $scope.edu.remark
						}
						
						$http({
							method : 'POST',
							url : localStorage.getItem("Url") 
									+'TSSJobSeekersEducationInfoServiceImpl/insertEdu',
							data : JSON.stringify($scope.info)
						}).success(function(data){
							/*$scope.tssJobSeekersInfoModel.tssJobSeekersEducationInfoList = data.resultList;*/
							elemeAlert.closeLoading();
							$rootScope.$emit("eduInfo",data.resultList);
//							elemeAlert.alert("10020");
							hide();
						}).error(function(data){
							elemeAlert.closeLoading();
							elemeAlert.alert("40002");
						})
					
//					}else{
//						elemeAlert.closeLoading();
//						elemeAlert.alert("20092");
//					}
				}
			}
				
		})
//履历经验			
TSSAPP.controller(
		'changeJobInfo',
		function($rootScope, $scope, $modal, $http, elemeAlert){
			
			// 日期验证
			$scope.startDateFlag = false;
			$scope.validateStartDate = function(){
				var pattern = /^((?:19|20)\d\d)-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;
				if(pattern.test($scope.re.startDate)){
					$scope.startDateFlag = false;
				}else{
					$scope.startDateFlag = true;
				}
				if($scope.re.startDate instanceof Date){
					$scope.startDateFlag = false;
				}else{
					$scope.startDateFlag = true;
				}
			}
			$scope.focusStartDate = function(){
				$scope.startDateFlag = false;
			}
			
			$scope.endDateFlag = false;
			$scope.validateEndDate = function(){
				var pattern = /^((?:19|20)\d\d)-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;
				if(pattern.test($scope.re.endDate)){
					$scope.endDateFlag = false;
				}else{
					$scope.endDateFlag = true;
				}
				if($scope.re.endDate instanceof Date){
					$scope.endDateFlag = false;
				}else{
					$scope.endDateFlag = true;
				}
			}
			$scope.focusEndDate = function(){
				$scope.endDateFlag = false;
			}

			$scope.close = function(hide){
				hide();
			}
			$scope.NO = function(hide){
				hide();
			}
			$scope.OK = function(hide){
				
				//修改
				if($rootScope.changeJobInfoFlag){
					/*if($scope.re.startDate != null && $scope.re.endDate != null &&
						$scope.re.startDate < $scope.re.endDate){*/

						elemeAlert.openLoading();
						$scope.index = $rootScope.workIndex;
						$scope.middle = angular.copy($scope.jssInfo.tssJobSeekersWorkExpInfoList[$scope.index]);
						$scope.middle.company = $scope.re.company;
						$scope.middle.position = $scope.re.position;
						$scope.middle.jobDuties = $scope.re.jobDuties;
						if($scope.re.startDate != null){
							$scope.middle.startDate = new Date($scope.re.startDate).format("yyyy-MM-dd");
						}else{
							$scope.middle.startDate = undefined;
						}
						if($scope.re.endDate != null){
							$scope.middle.endDate = new Date($scope.re.endDate).format("yyyy-MM-dd");
						}else{
							$scope.middle.endDate = undefined;
						}
						
						$scope.jsswkeId = $scope.jssInfo.tssJobSeekersWorkExpInfoList[$scope.index].jsswkeId;
						
						//修改履历表对应记录
						$scope.info = {
								token : sessionStorage.getItem("token"),
								jsswkeId : $scope.jsswkeId,
								jssId : $rootScope.jssId,
								workExp : $scope.middle,	
						}
						$http({
							method : 'POST',
							url : localStorage.getItem("Url") 
								+ 'TSSJobSeekersWorkExpInfoServiceImpl/updateWorkExp',
							data : JSON.stringify($scope.info)
						}).success(function(data){
							/*$scope.tssJobSeekersInfoModel.tssJobSeekersWorkExpInfoList = data.resultList;*/
							elemeAlert.closeLoading();
							$rootScope.$emit("jobInfo",data.resultList);
							$rootScope.$emit("pageChange",$rootScope.searchObjTag,$rootScope.newPage);
//							elemeAlert.alert("10020");
							hide();
						}).error(function(data){
							elemeAlert.alert("40002");
							elemeAlert.closeLoading();
						})
					
					/*}else{
						elemeAlert.alert("20092");
					}*/
				}
				
				//新增
				else if(!$rootScope.changeJobInfoFlag){
					elemeAlert.openLoading();
					if($scope.re.startDate != null){
						$scope.start = new Date($scope.re.startDate).format("yyyy-MM-dd");
					}else{
						$scope.start = undefined;
					}
					if($scope.re.endDate != null){
						$scope.end = new Date($scope.re.endDate).format("yyyy-MM-dd");
					}else{
						$scope.end = undefined;
					}
					$scope.info = {
							token : sessionStorage.getItem("token"),
							jssId : $rootScope.jssId,
							company : $scope.re.company,
							position : $scope.re.position,
							jobDuties : $scope.re.jobDuties,
							startDate : $scope.start,
							endDate : $scope.end
					}
					$http({
						method : 'POST',
						url : localStorage.getItem("Url") 
							+ 'TSSJobSeekersWorkExpInfoServiceImpl/insertWorkExp',
						data : JSON.stringify($scope.info)
					}).success(function(data){
						/*$scope.tssJobSeekersInfoModel.tssJobSeekersWorkExpInfoList = data.resultList;*/
						$rootScope.$emit("jobInfo",data.resultList);
						$rootScope.$emit("pageChange",$rootScope.searchObjTag,$rootScope.newPage);
//						elemeAlert.alert("10020");
						elemeAlert.closeLoading();
						hide();
					}).error(function(data){
						elemeAlert.alert("40002");
						elemeAlert.closeLoading();
					})
				}
			}
			
		})
//项目经验
TSSAPP.controller(
		'changeProInfo',
		function($rootScope, $scope, $modal, $http, elemeAlert){
			
			// 日期验证
			$scope.startDateFlag = false;
			$scope.validateStartDate = function(){
//				var pattern = /^((?:19|20)\d\d)-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;
//				if(pattern.test($scope.pro.startDate)){
//					$scope.startDateFlag = false;
//				}else{
//					$scope.startDateFlag = true;
//				}
				if($scope.pro.startDate instanceof Date){
					$scope.startDateFlag = false;
				}else{
					$scope.startDateFlag = true;
				}
				
			}
			$scope.focusStartDate = function(){
				$scope.startDateFlag = false;
			}
			
			$scope.endDateFlag = false;
			$scope.validateEndDate = function(){
//				var pattern = /^((?:19|20)\d\d)-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;
//				if(pattern.test($scope.pro.endDate)){
//					$scope.endDateFlag = false;
//				}else{
//					$scope.endDateFlag = true;
//				}
				if($scope.pro.endDate instanceof Date){
					$scope.endDateFlag = false;
				}else{
					$scope.endDateFlag = true;
				}

			}
			$scope.focusEndDate = function(){
				$scope.endDateFlag = false;
			}
			
			
			$scope.close = function(hide){
				hide();
			}
			$scope.NO = function(hide){
				hide();
			}
			$scope.OK = function(hide){
				
				//修改
				if($rootScope.changeProInfoFlag){
					/*if($scope.pro.startDate != null && $scope.pro.endDate != null &&
						$scope.pro.startDate < $scope.pro.endDate){*/

						elemeAlert.openLoading();
						$scope.index = $rootScope.proIndex;
						$scope.middle = angular.copy($scope.jssInfo.tssJobSeekersProjectExpInfoList[$scope.index]);
						$scope.middle.project = $scope.pro.project;
						$scope.middle.playingRole = $scope.pro.playingRole;
						$scope.middle.jobDuties = $scope.pro.jobDuties;
						if($scope.pro.startDate != null){
							$scope.middle.startDate = new Date($scope.pro.startDate).format("yyyy-MM-dd");
						}else{
							$scope.middle.startDate = null;
						}
						if($scope.pro.endDate != null){
							$scope.middle.endDate = new Date($scope.pro.endDate).format("yyyy-MM-dd");
						}else{
							$scope.middle.endDate = null;
						}
						
						
						$scope.jsspteid = $scope.middle.jsspteid;
						
						$scope.info = {
								token : sessionStorage.getItem("token"),
								jsspteid : $scope.jsspteid,
								jssId : $rootScope.jssId,
								proExp : $scope.middle	
						}
						$http({
							method : 'POST',
							url : localStorage.getItem("Url") 
								+ 'TSSJobSeekersProjectExpInfoServiceImpl/updatePro',
							data : JSON.stringify($scope.info)
						}).success(function(data){
							/*$scope.tssJobSeekersInfoModel.tssJobSeekersProjectExpInfoList = data.resultList;*/
							$rootScope.$emit("proInfo",data.resultList);
//							elemeAlert.alert("10020");
							elemeAlert.closeLoading();
							hide();
						}).error(function(data){
							elemeAlert.alert("40002");
							elemeAlert.closeLoading();
						})
					
					/*}else{
						elemeAlert.alert("20092");
					}*/
				}
				//新增
				if(!$rootScope.changeProInfoFlag){
					/*if($scope.pro.startDate != null && $scope.pro.endDate &&
						$scope.pro.startDate < $scope.pro.endDate){*/

						elemeAlert.openLoading();
						if($scope.pro.startDate != null){
							$scope.start = new Date($scope.pro.startDate).format("yyyy-MM-dd");
						}else{
							$scope.start = null;
						}
						if($scope.pro.endDate != null){
							$scope.end = new Date($scope.pro.endDate).format("yyyy-MM-dd");
						}else{
							$scope.end = null;
						}
						
						$scope.info = {
								token : sessionStorage.getItem("token"),
								jssId : $rootScope.jssId,
								project : $scope.pro.project,
								jobDuties : $scope.pro.jobDuties,
								playingRole : $scope.pro.playingRole,
								startDate : $scope.start,
								endDate : $scope.end
						}
						$http({
							method : 'POST',
							url : localStorage.getItem("Url") 
								+ 'TSSJobSeekersProjectExpInfoServiceImpl/insertPro',
							data : JSON.stringify($scope.info)
						}).success(function(data){
							/*$scope.tssJobSeekersInfoModel.tssJobSeekersProjectExpInfoList = data.resultList;*/
							$rootScope.$emit("proInfo",data.resultList);
//							elemeAlert.alert("10020");
							elemeAlert.closeLoading();
							hide();
						}).error(function(data){
							elemeAlert.alert("40002");
							elemeAlert.closeLoading();
						})
					
					/*}else{
						elemeAlert.alert("20092");
					}*/
				}
			}
		})	
//培训经历
TSSAPP.controller(
		'changeTrainInfo',
		function($rootScope, $scope, $modal, $http, elemeAlert){
			
			// 日期验证
			$scope.startDateFlag = false;
			$scope.validateStartDate = function(){
				var pattern = /^((?:19|20)\d\d)-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;
				if(pattern.test($scope.tr.startDate)){
					$scope.startDateFlag = false;
				}else{
					$scope.startDateFlag = true;
				}
				if($scope.tr.startDate instanceof Date){
					$scope.startDateFlag = false;
				}else{
					$scope.startDateFlag = true;
				}
			}
			$scope.focusStartDate = function(){
				$scope.startDateFlag = false;
			}
			
			$scope.endDateFlag = false;
			$scope.validateEndDate = function(){
				var pattern = /^((?:19|20)\d\d)-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;
				if(pattern.test($scope.tr.endDate)){
					$scope.endDateFlag = false;
				}else{
					$scope.endDateFlag = true;
				}
				if($scope.tr.endDate instanceof Date){
					$scope.endDateFlag = false;
				}else{
					$scope.endDateFlag = true;
				}
			}
			$scope.focusEndDate = function(){
				$scope.endDateFlag = false;
			}
			
			
			$scope.close = function(hide){
				hide();
			}
			$scope.NO = function(hide){
				hide();
			}
			$scope.OK = function(hide){
				
				//修改
				if($rootScope.changeTrainInfoFlag){
//					if($scope.tr.startDate != null && $scope.tr.endDate != null &&
//						$scope.tr.startDate < $scope.tr.endDate){

						elemeAlert.openLoading();
						$scope.index = $rootScope.trainIndex;
						$scope.middle = angular.copy($scope.jssInfo.tSSTrainingExperienceModelList[$scope.index]);
						$scope.middle.trainingContent = $scope.tr.trainingContent;
						$scope.middle.trainingAgency = $scope.tr.trainingAgency;
						$scope.middle.trainingTitle = $scope.tr.trainingTitle;
						if($scope.tr.startDate != null){
							$scope.middle.startDate = new Date($scope.tr.startDate).format("yyyy-MM-dd");
						}else{
							$scope.middle.startDate = null;
						}
						if($scope.tr.endDate != null){
							$scope.middle.endDate = new Date($scope.tr.endDate).format("yyyy-MM-dd");
						}else{
							$scope.middle.endDate = null;
						}
						
						$scope.teid = $scope.middle.teid;
						
						$scope.info = {
								token : sessionStorage.getItem("token"),
								teid : $scope.teid,
								jssId : $rootScope.jssId,
								train : $scope.middle
						}
						$http({
							method : 'POST',
							url : localStorage.getItem("Url") 
								+ 'TSSTrainingExperienceServiceImpl/updateTra',
							data : JSON.stringify($scope.info)
						}).success(function(data){
							/*$scope.info.tSSTrainingExperienceModelList = data.resultList;*/
							for (var int = 0; int < data.resultList.length; int++) {
								data.resultList[int].startDate 
									= new Date(data.resultList[int].startDate).format("yyyy-MM-dd");
								if(data.resultList[int].endDate != null){
									data.resultList[int].endDate
									= new Date(data.resultList[int].endDate).format("yyyy-MM-dd");
								}
							}
							$rootScope.$emit("trainInfo",data.resultList);
//							elemeAlert.alert("10020");
							elemeAlert.closeLoading();
							hide();
						}).error(function(data){
							elemeAlert.alert("40002");
							elemeAlert.closeLoading();
						})
					
//					}else{
//						elemeAlert.alert("20092");
//					}
				}
				//新增
				else if(!$rootScope.changeTrainInfoFlag){
//					if($scope.tr.startDate != null && $scope.tr.endDate &&
//						$scope.tr.startDate < $scope.tr.endDate){

						elemeAlert.openLoading();
						if($scope.tr.startDate != null){
							$scope.start = new Date($scope.tr.startDate).format("yyyy-MM-dd");
						}else{
							$scope.start = null;
						}
						if($scope.tr.endDate != null){
							$scope.end = new Date($scope.tr.endDate).format("yyyy-MM-dd");
						}else{
							$scope.end = null;
						}
						
						$scope.info = {
								token : sessionStorage.getItem("token"),
								jssId : $rootScope.jssId,
								trainingTitle : $scope.tr.trainingTitle,
								trainingContent : $scope.tr.trainingContent,
								trainingAgency : $scope.tr.trainingAgency,
								startDate : $scope.start,
								endDate : $scope.end
						}
						$http({
							method : 'POST',
							url : localStorage.getItem("Url") 
								+ 'TSSTrainingExperienceServiceImpl/insertTra',
							data : JSON.stringify($scope.info)
						}).success(function(data){
							/*$scope.info.tSSTrainingExperienceModelList = data.resultList;*/
							for (var int = 0; int < data.resultList.length; int++) {
								data.resultList[int].startDate 
									= new Date(data.resultList[int].startDate).format("yyyy-MM-dd");
								if(data.resultList[int].endDate != null){
									data.resultList[int].endDate
									= new Date(data.resultList[int].endDate).format("yyyy-MM-dd");
								}
							}
							$rootScope.$emit("trainInfo",data.resultList);
//							elemeAlert.alert("10020");
							elemeAlert.closeLoading();
							hide();
						}).error(function(data){
							elemeAlert.alert("40002");
							elemeAlert.closeLoading();
						})
					
//					}else{
//						elemeAlert.alert("20092");
//					}
				}
			}
		})	
//证书
TSSAPP.controller(
		'changeCertInfo',
		function($rootScope, $scope, $modal, $http, elemeAlert){
			
			$scope.getDateFlag = false;
			$scope.validateGetDate = function(){
				var pattern = /^((?:19|20)\d\d)-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;
				if(pattern.test($scope.ce.getDate)){
					$scope.getDateFlag = false;
				}else{
					$scope.getDateFlag = true;
				}
				
				if($scope.ce.getDate instanceof Date){
					$scope.getDateFlag = false;
				}else{
					$scope.getDateFlag = true;
				}
			}
			$scope.close = function(hide){
				hide();
			}
			$scope.NO = function(hide){
				hide();
			}
			$scope.OK = function(hide){
				
				//修改
				if($rootScope.changeCertInfoFlag){
					elemeAlert.openLoading();
					$scope.index = $rootScope.certIndex;
					$scope.middle = angular.copy($scope.jssInfo.tSSObtainingCertificateList[$scope.index]);
					$scope.middle.certificateName = $scope.ce.certificateName;
					if($scope.ce.getDate != null){
						$scope.middle.getDate = new Date($scope.ce.getDate).format("yyyy-MM-dd");
					}else{
						$scope.middle.getDate = null;
					}
					
					$scope.ocid = $scope.middle.ocid;
					
					$scope.info = {
							token : sessionStorage.getItem("token"),
							ocid : $scope.ocid,
							jssId : $rootScope.jssId,
							cert : $scope.middle
					}
					$http({
						method : 'POST', 
						url : localStorage.getItem("Url") 
							+ 'TSSObtainingCertificateServiceImpl/updateCert',
						data : JSON.stringify($scope.info)
					}).success(function(data){
						/*$scope.tssJobSeekersInfoModel.tSSObtainingCertificateList = data.resultList;*/
						for(int = 0; int < data.resultList.length; int++){
							data.resultList[int].getDate
								= new Date(data.resultList[int].getDate).format("yyyy-MM-dd");
						}
						$rootScope.$emit("certInfo",data.resultList);
//						elemeAlert.alert("10020");
						elemeAlert.closeLoading();
						hide();
					}).error(function(data){
						elemeAlert.alert("40002");
						elemeAlert.closeLoading();
					})
				}
				
				
				//新增
				if(!$rootScope.changeCertInfoFlag){
					elemeAlert.openLoading();
					if($scope.ce.getDate != null){
						$scope.getDate = new Date($scope.ce.getDate).format("yyyy-MM-dd");
					}else{
						$scope.getDate = null;
					}
					
					$scope.info = {
							token : sessionStorage.getItem("token"),
							jssId : $rootScope.jssId,
							certificateName : $scope.ce.certificateName,
							getDate : $scope.getDate
					}
					$http({
						method : 'POST', 
						url : localStorage.getItem("Url") 
							+ 'TSSObtainingCertificateServiceImpl/insertCert',
						data : JSON.stringify($scope.info)
					}).success(function(data){
						/*$scope.tssJobSeekersInfoModel.tSSObtainingCertificateList = data.resultList;*/
						for(int = 0; int < data.resultList.length; int++){
							data.resultList[int].getDate
								= new Date(data.resultList[int].getDate).format("yyyy-MM-dd");
						}
						$rootScope.$emit("certInfo",data.resultList);
//						elemeAlert.alert("10020");
						elemeAlert.closeLoading();
						hide();
					}).error(function(data){
						elemeAlert.alert("40002");
						elemeAlert.closeLoading();
					})
				}
			}
		})	
//自我评价
TSSAPP.controller(
		'changeSelfEvalInfo',
		function($rootScope, $scope, $modal, $http, elemeAlert){
			$scope.close = function(hide){
				hide();
			}
			$scope.NO = function(hide){
				hide();
			}
			$scope.OK = function(hide){
				
				//修改
				if($rootScope.changeSelfEvalInfoFlag){
					elemeAlert.openLoading();
					$scope.info ={
							token : sessionStorage.getItem("token"),
							jssId : $rootScope.jssId,
							selfEval : $scope.selfEval
					}
				
					$http({
						method : 'POST', 
						url : localStorage.getItem("Url") 
							+ 'TSSJobSeekersInfoServiceImpl/updateSelfEval',
						data : JSON.stringify($scope.info)
					}).success(function(data){
						/*$scope.info.selfEvaluate = data.result.selfEvaluate;*/
						$rootScope.$emit("selfEvalInfo",data.result.selfEvaluate);
						//需要刷新主表数据
						$rootScope.$emit("pageChange",$rootScope.searchObjTag,$rootScope.newPage);
//						elemeAlert.alert("10020");
						elemeAlert.closeLoading();
						hide();
					}).error(function(data){
						elemeAlert.alert("40002");
						elemeAlert.closeLoading();
					})
					
				}

				//新建
				if(!$rootScope.changeSelfEvalInfoFlag){
					elemeAlert.openLoading();
					$scope.info = {
							token : sessionStorage.getItem("token"),
							jssId : $rootScope.jssId,
							selfEval : $scope.selfEval
					}
					$http({
						method : 'POST',
						url : localStorage.getItem("Url") 
						+ 'TSSJobSeekersInfoServiceImpl/insertSelfEval',
						data : JSON.stringify($scope.info)
					}).success(function(data){
						/*$scope.info.selfEvaluate = data.result.selfEvaluate;*/
						$rootScope.$emit("selfEvalInfo",data.result.selfEvaluate);
//						elemeAlert.alert("10020");
						elemeAlert.closeLoading();
						hide();
					}).error(function(data){
						elemeAlert.alert("40002");
						elemeAlert.closeLoading();
					})
				}
			}
		})	
		
TSSAPP.controller(
		'addResumeSe',
		function($rootScope, $scope, $modal, $http, elemeAlert, elemeTab) {
			
			$rootScope.$on("selfInfo", function(event, msg) {
				$scope.basicInfo = msg;
				if(msg.workYears == null){
					$scope.basicInfo.workYears = 0;
				}
			});
			
			$rootScope.$on("eduInfo",function(event, msg){
				if($scope.jssInfo == "" || $scope.jssInfo == null){
					$scope.jssInfo = $scope.basicInfo;
				}
				$scope.jssInfo.tssJobSeekersEducationInfoList = msg;
			});
			
			$rootScope.$on("jobInfo",function(event, msg){
				if($scope.jssInfo == "" || $scope.jssInfo == null){
					$scope.jssInfo = $scope.basicInfo;
				}
				$scope.jssInfo.tssJobSeekersWorkExpInfoList = msg;
			});
			
			$rootScope.$on("proInfo",function(event, msg){
				if($scope.jssInfo == "" || $scope.jssInfo == null){
					$scope.jssInfo = $scope.basicInfo;
				}
				$scope.jssInfo.tssJobSeekersProjectExpInfoList = msg;
			});

			$rootScope.$on("trainInfo",function(event, msg){
				if($scope.jssInfo == "" || $scope.jssInfo == null){
					$scope.jssInfo = $scope.basicInfo;
				}
				$scope.jssInfo.tSSTrainingExperienceModelList = msg;
			});

			$rootScope.$on("certInfo",function(event, msg){
				if($scope.jssInfo == "" || $scope.jssInfo == null){
					$scope.jssInfo = $scope.basicInfo;
				}
				$scope.jssInfo.tSSObtainingCertificateList = msg;
			});

			$rootScope.$on("selfEvalInfo",function(event, msg){
				if($scope.jssInfo == "" || $scope.jssInfo == null){
					$scope.jssInfo = $scope.basicInfo;
				}
				$scope.jssInfo.selfEvaluate = msg;
			});		
			
			$rootScope.$on("applyInfo", function(event, msg) {
				$scope.applydept = msg.applydept;
				$scope.applyposition = msg.applyposition;
			});
			
			$rootScope.$on("fromHistory",function(event, msg){
				$scope.basicInfo = msg.result;
				if(msg.workYears == null){
					$scope.basicInfo.workYears = 0;
				}
				$scope.jssInfo = msg.result;
				$scope.jssInfo.applydept = msg.result.applydept;
				$scope.jssInfo.applyposition = msg.result.applyposition;
				$scope.jssInfo.tssJobSeekersEducationInfoList = msg.tssJobSeekerEducationInfoModelList;
				$scope.jssInfo.tssJobSeekersWorkExpInfoList = msg.tssJobSeekerWorkExpList;
				$scope.jssInfo.tssJobSeekersProjectExpInfoList = msg.tssJobSeekersProjectExpInfoModelList;
				$scope.jssInfo.tSSTrainingExperienceModelList = msg.tssTrainingExperienceModelList;
				$scope.jssInfo.tSSObtainingCertificateList = msg.tssObtainingCertificateModelList;
				$scope.jssInfo.selfEvaluate = msg.jssInfo.selfEvaluate;
			});
			
			$rootScope.$on("importResume",function(event,msg){
				//附件查询
				$scope.info = {
						token : sessionStorage.getItem("token"),
						jssid : msg
					}
					$http(
							{
								method : 'POST',
								url : localStorage.getItem("Url")
										+ "TSSResumeOricontServiceImpl/getResumeOricont",
								data : JSON.stringify($scope.info)
							}).success(function(data) {
						elemeAlert.closeLoading();
						$scope.tssAnnexInfoList = data.tssAnnexInfoList;
					}).error(function(data) {
						elemeAlert.closeLoading();
					});
				
			})
			
			
			if(!$rootScope.addFlag){
				//附件查询
				$scope.info = {
						token : sessionStorage.getItem("token"),
						jssid : $rootScope.jssId
					}
					$http(
							{
								method : 'POST',
								url : localStorage.getItem("Url")
										+ "TSSResumeOricontServiceImpl/getResumeOricont",
								data : JSON.stringify($scope.info)
							}).success(function(data) {
						elemeAlert.closeLoading();
						$scope.tssAnnexInfoList = data.tssAnnexInfoList;
					}).error(function(data) {
						elemeAlert.closeLoading();
					});
			}
			//下载附件
			$scope.doDownload = function(e){
				window.open(localStorage.getItem("downloadUrl") + e);
			}
			
			//原始简历预览
			$scope.interviewOriginalResume = function() {
				$scope.tab = {
						title : "查看" + $scope.basicInfo.name+ "的原始简历",
						page : 'tabs/tss_tab_interviewOriginalResume.html',
						id : $rootScope.jssId
					};
				elemeTab.add($scope.tab, $scope.tabs, $scope);
				$rootScope.interviewOriginalJssId = $rootScope.jssId;
				$rootScope.interviewOriginalTemp = $scope.jssInfo;
			}
			
			//上传附件
			$scope.uploadModals = function(){
				var myOtherModal = $modal({
					template : "modals/modal_importResume.html",
					// persist: true,
					show : true,
					backdrop : 'static',
					scope : $scope,
					keyboard : false
				});
				$rootScope.importResumeJssId = $rootScope.jssId;
				myOtherModal.$promise.then(myOtherModal.show);
			}
			$scope.checkClose = function(name){
				if($rootScope.addFlag){
					elemeTab.closeTab(1);
				}else{
					elemeTab.closeTab(name + "_add");
					$rootScope.$emit("pageChange",$rootScope.searchObjTag,$rootScope.newPage);
				}
			}
			
			elemeAlert.openLoading();
			if($rootScope.addFlag){
				$scope.jssInfo = "";
				elemeAlert.closeLoading();
			}else{
				/*var obj = $scope.choseObj;*/
//				$scope.jssInfo = angular.copy($rootScope.tssJobSeekersInfoModel);
				if($rootScope.tssJobSeekersInfoModel != null){
					//获取教育 培训 证书等信息 工作经历不完整 重新查询
					$scope.info = {
							token : sessionStorage.getItem("token"),
							jssId : $rootScope.tssJobSeekersInfoModel.jssId
					}
					$http({
						method : 'POST',
						url : localStorage.getItem("Url")
							+ 'TSSJobSeekersInfoServiceImpl/getaddresumeInfo',
						data : JSON.stringify($scope.info)
					}).success(function(data){
						$scope.jssInfo = data.jssInfo;
						$scope.basicInfo = data.jssInfo;
						if($scope.basicInfo.workYears == null){
							$scope.basicInfo.workYears = 0;
						}
						if($scope.jssInfo.selfEvaluate != null){
							$scope.jssInfo.selfEvaluate = $scope.jssInfo.selfEvaluate.replace(new RegExp(/(？)/g),'');
						}
						$scope.jssInfo.tssJobSeekersEducationInfoList = data.tssJobSeekerEducationInfoModelList;
						$scope.jssInfo.tssJobSeekersProjectExpInfoList = data.tssJobSeekersProjectExpInfoModelList;
						$scope.jssInfo.tSSObtainingCertificateList = data.tssObtainingCertificateModelList;
						$scope.jssInfo.tSSTrainingExperienceModelList = data.tssTrainingExperienceModelList;
						$scope.jssInfo.tssJobSeekersWorkExpInfoList = data.tssJobSeekerWorkExpList;
						for(var c = 0; c < $scope.jssInfo.tssJobSeekersWorkExpInfoList.length; c++ ){
							if($scope.jssInfo.tssJobSeekersWorkExpInfoList[c].jobDuties != null){
//								$scope.jssInfo.tssJobSeekersWorkExpInfoList[c].jobDuties = $scope.jssInfo.tssJobSeekersWorkExpInfoList[c].jobDuties.replace(new RegExp(/(？)/g),'');
//								$scope.jssInfo.tssJobSeekersWorkExpInfoList[c].company = $scope.jssInfo.tssJobSeekersWorkExpInfoList[c].company.replace(new RegExp(/(？)/g),'');
							}
						}
						for (var a = 0; a < data.tssTrainingExperienceModelList.length; a++) {
							$scope.jssInfo.tSSTrainingExperienceModelList[a].startDate 
								= new Date($scope.jssInfo.tSSTrainingExperienceModelList[a].startDate).format("yyyy-MM-dd");
//							$scope.jssInfo.tSSTrainingExperienceModelList[a].endDate 
//								= new Date($scope.jssInfo.tSSTrainingExperienceModelList[a].endDate).format("yyyy-MM-dd");
						}
						for(b = 0; b < data.tssObtainingCertificateModelList.length; b++){
							$scope.jssInfo.tSSObtainingCertificateList[b].getDate
								= new Date($scope.jssInfo.tSSObtainingCertificateList[b].getDate).format("yyyy-MM-dd");
						}
						$scope.applydept = $scope.jssInfo.applydept;
						$scope.applyposition = $scope.jssInfo.applyposition;
						elemeAlert.closeLoading();
					}).error(function(data){
						elemeAlert.alert("40032");
						elemeAlert.closeLoading();
					})
					
				}
			}
		
//			个人信息
			$scope.addBaseInfo = function(){
				$rootScope.changeBaseInfoFlag = false;
				$scope.base = "";
//				$rootScope.$on("selfInfo", function(event, msg) {
//					$scope.basic = msg;
//				});
				
				var modal = $modal({
					template : "modals/modal_change_baseinfo.html",
					// persist: true,
					show : true,
					backdrop : 'static',
					scope : $scope,
					keyboard : false
				});
				modal.$promise.then(modal.show);
			}
			
			$scope.changeBaseInfo = function(){
				$rootScope.changeBaseInfoFlag = true;
				$scope.base = angular.copy($scope.basicInfo);
				if($scope.base.birthday != null){
					$scope.base.birthday = new Date($scope.base.birthday).format("yyyy-MM-dd");
				}
				if($scope.base.workStartDate != null){
					$scope.base.workStartDate = new Date($scope.base.workStartDate).format("yyyy-MM-dd");
				}
//				$rootScope.$on("selfInfo", function(event, msg) {
//					$scope.basic = msg;
//				});
				var modal = $modal({
					template : "modals/modal_change_baseinfo.html",
					// persist: true,
					show : true,
					backdrop : 'static',
					scope : $scope,
					keyboard : false
				});
				modal.$promise.then(modal.show);
			}
			
//			应聘信息
			$scope.addInfo = function(){
				$rootScope.changeInfoFlag = false;
				$scope.tss = "";
//				$rootScope.$on("applyInfo", function(event, msg) {
//					$scope.applydept = msg.applydept;
//					$scope.applyposition = msg.applyposition;
//				});
				var modal = $modal({
					template : "modals/modal_change_selfinfo.html",
					// persist: true,
					show : true,
					backdrop : 'static',
					scope : $scope,
					keyboard : false
				});
				modal.$promise.then(modal.show);
			}
			
			
			$scope.changejob = function(){
				$rootScope.changeInfoFlag = true;
				$scope.tss = {
						applydept : $scope.applydept,
						applyposition : $scope.applyposition
				}
				/*if($scope.applydept != null){
					$scope.tss.applydept = angular.copy($scope.applydept);
				}
				if($scope.applyposition != null){
					$scope.tss.applyposition = angular.copy($scope.applyposition);
				}*/
//				$rootScope.$on("applyInfo", function(event, msg) {
//					$scope.applydept = msg.applydept;
//					$scope.applyposition = msg.applyposition;
//				});
				var modal = $modal({
					template : "modals/modal_change_selfinfo.html",
					// persist: true,
					show : true,
					backdrop : 'static',
					scope : $scope,
					keyboard : false
				});
				modal.$promise.then(modal.show);
			}
			
			
//			教育经历
			$scope.addEduinfo = function(){
				$rootScope.changeEduInfoFlag = false;
				$scope.edu = "";
//				$rootScope.$on("eduInfo",function(event, msg){
//					$scope.jssInfo.tssJobSeekersEducationInfoList = msg;
//				});
				var modal = $modal({
					template : "modals/modal_change_eduinfo.html",
					// persist: true,
					show : true,
					backdrop : 'static',
					scope : $scope,
					keyboard : false
				});
				modal.$promise.then(modal.show);
			}
			
			$scope.changeEduInfo = function(index){
				$rootScope.changeEduInfoFlag = true;
				$scope.cel = angular.copy($scope.jssInfo.tssJobSeekersEducationInfoList[index]);
				$rootScope.eduindex = index;
				$scope.edu = angular.copy($scope.cel);
				if($scope.cel.startDate != null){
					$scope.edu.startDate = new Date($scope.cel.startDate);
				}else{
					$scope.edu.startDate = null;
				}
				
				if($scope.cel.endDate != null){
					$scope.edu.endDate = new Date($scope.cel.endDate);
				}else if($scope.cel.endDate == null){
					$scope.edu.endDate = null;
				}
//				$rootScope.$on("eduInfo",function(event, msg){
//					$scope.jssInfo.tssJobSeekersEducationInfoList = msg;
//				});
				var modal = $modal({
					template : "modals/modal_change_eduinfo.html",
					// persist: true,
					show : true,
					backdrop : 'static',
					scope : $scope,
					keyboard : false
				});
				modal.$promise.then(modal.show);
			}
			
			//删除教育经历
			$scope.deleteEdu = function(index){
				elemeAlert.confirm("20093",function(choose){
					if(choose == 'OK'){
						elemeAlert.openLoading();
						$scope.info = {
								token : sessionStorage.getItem("token"),
								jssId : $scope.jssInfo.jssId,
								jssEduId : $scope.jssInfo.tssJobSeekersEducationInfoList[index].jssEduId
						}
						$http({
							method : 'POST',
							url : localStorage.getItem("Url") 
								+ 'TSSJobSeekersEducationInfoServiceImpl/deleteEdu',
							data : JSON.stringify($scope.info)
						}).success(function(data){
//							$rootScope.$emit("eduInfo",data.resultList);
							$scope.jssInfo.tssJobSeekersEducationInfoList = data.resultList;
//							elemeAlert.alert("10020");
							elemeAlert.closeLoading();
						}).error(function(data){
							elemeAlert.alert("40002");
							elemeAlert.closeLoading();
						})
						
						
					}
				});
				elemeAlert.closeLoading();
			}
			
//			履历经历
			$scope.addJobInfo = function(){
				$rootScope.changeJobInfoFlag = false;
				$scope.re = "";
//				$rootScope.$on("jobInfo",function(event, msg){
//					$scope.jssInfo.tssJobSeekersWorkExpInfoList = msg;
//				});
				var modal = $modal({
					template : "modals/modal_change_jobinfo.html",
					// persist: true,
					show : true,
					backdrop : 'static',
					scope : $scope,
					keyboard : false
				});
				modal.$promise.then(modal.show);
			}
			$scope.changeWorkExpInfo = function(index){
				$rootScope.changeJobInfoFlag = true;
				$rootScope.workIndex = index;
//				$rootScope.$on("jobInfo",function(event, msg){
//					$scope.jssInfo.tssJobSeekersWorkExpInfoList = msg;
//				});
				//页面数据
				$scope.middle = angular.copy($scope.jssInfo.tssJobSeekersWorkExpInfoList[index]);
				$scope.re = $scope.middle;
				if($scope.re.startDate != null){
					$scope.re.startDate = new Date($scope.re.startDate);
				}else{
					$scope.re.startDate = null;
				}
				
				if($scope.re.endDate != null){
					$scope.re.endDate = new Date($scope.re.endDate);
				}else{
					$scope.re.endDate = null;
				}
				
				var modal = $modal({
					template : "modals/modal_change_jobinfo.html",
					// persist: true,
					show : true,
					backdrop : 'static',
					scope : $scope,
					keyboard : false
				});
				modal.$promise.then(modal.show);
			}
			
			//删除履历经历数据
			$scope.deleteWorkExpInfo = function(index){
				elemeAlert.confirm("20093",function(choose){
					if(choose == 'OK'){
						elemeAlert.openLoading();
						$scope.info = {
								token : sessionStorage.getItem("token"),
								jssId : $scope.jssInfo.jssId,
								jsswkeId : $scope.jssInfo.tssJobSeekersWorkExpInfoList[index].jsswkeId
						}
						$http({
							method : 'POST',
							url : localStorage.getItem("Url") 
								+ 'TSSJobSeekersWorkExpInfoServiceImpl/deleteWorkExp',
							data : JSON.stringify($scope.info)
						}).success(function(data){
//							$rootScope.$emit("jobInfo",data.resultList);
							$scope.jssInfo.tssJobSeekersWorkExpInfoList = data.resultList;
							$rootScope.$emit("pageChange",$rootScope.searchObjTag,$rootScope.newPage);
//							elemeAlert.alert("10020");
							elemeAlert.closeLoading();
						}).error(function(data){
							elemeAlert.alert("40002");
							elemeAlert.closeLoading();
						})
					}
				},null);
				elemeAlert.closeLoading();
			}
			
//			项目经验
			$scope.addProInfo = function(){
				$rootScope.changeProInfoFlag = false;
				$scope.pro = "";
//				$rootScope.$on("proInfo",function(event, msg){
//					$scope.jssInfo.tssJobSeekersProjectExpInfoList = msg;
//				});
				var modal = $modal({
					template : "modals/modal_change_proinfo.html",
					// persist: true,
					show : true,
					backdrop : 'static',
					scope : $scope,
					keyboard : false
				});
				modal.$promise.then(modal.show);
			}
			$scope.changeProInfo = function(index){
				$rootScope.changeProInfoFlag = true;
				$rootScope.proIndex = index;
//				$rootScope.$on("proInfo",function(event, msg){
//					$scope.jssInfo.tssJobSeekersProjectExpInfoList = msg;
//				});
				//页面数据
				$scope.middle = angular.copy($scope.jssInfo.tssJobSeekersProjectExpInfoList[index]);
				$scope.pro = $scope.middle;
				if($scope.middle.startDate != null){
					$scope.pro.startDate = new Date($scope.middle.startDate);
				}else{
					$scope.pro.startDate = null;
				}
				
				if($scope.middle.endDate != null){
					$scope.pro.endDate = new Date($scope.middle.endDate);
				}else{
					$scope.pro.endDate = null;
				}
				
				var modal = $modal({
					template : "modals/modal_change_proinfo.html",
					// persist: true,
					show : true,
					backdrop : 'static',
					scope : $scope,
					keyboard : false
				});
				modal.$promise.then(modal.show);
			}
			
			//删除项目信息
			$scope.deleteProInfo = function(index){
				elemeAlert.confirm("20093",function(choose){
					if(choose == 'OK'){
						elemeAlert.closeLoading();
						$scope.info = {
								token : sessionStorage.getItem("token"),
								jssId : $scope.jssInfo.jssId,	
								jsspteid : $scope.jssInfo.tssJobSeekersProjectExpInfoList[index].jsspteid
						}
						$http({
							method : 'POST',
							url : localStorage.getItem("Url") 
								+ 'TSSJobSeekersProjectExpInfoServiceImpl/deletePro',
							data : JSON.stringify($scope.info)
						}).success(function(data){
//							$rootScope.$emit("proInfo",data.resultList);
							$scope.jssInfo.tssJobSeekersProjectExpInfoList = data.resultList;
//							elemeAlert.alert("10020");
							elemeAlert.closeLoading();
						}).error(function(data){
							elemeAlert.alert("40002");
							elemeAlert.closeLoading();
						})
					}
				},null);
			}
//			培训信息
			$scope.addTrainInfo = function(){
				$rootScope.changeTrainInfoFlag = false;
				$scope.tr = "";
//				$rootScope.$on("trainInfo",function(event, msg){
//					$scope.jssInfo.tSSTrainingExperienceModelList = msg;
//				});
				var modal = $modal({
					template : "modals/modal_change_traininfo.html",
					// persist: true,
					show : true,
					backdrop : 'static',
					scope : $scope,
					keyboard : false
				});
				modal.$promise.then(modal.show);
			}
			$scope.changeTrainInfo = function(index){
				$rootScope.changeTrainInfoFlag = true;
				$rootScope.trainIndex = index;
//				$rootScope.$on("trainInfo",function(event, msg){
//					$scope.jssInfo.tSSTrainingExperienceModelList = msg;
//				});
				//页面数据
				$scope.middle = angular.copy($scope.jssInfo.tSSTrainingExperienceModelList[index]);
				$scope.tr = $scope.middle;
				if($scope.middle.startDate != null){
					$scope.tr.startDate = new Date($scope.middle.startDate);
				}else{
					$scope.tr.startDate = null;
				}
				
				if($scope.middle.endDate != null){
					$scope.tr.endDate = new Date($scope.middle.endDate);
				}else{
					$scope.tr.endDate = null;
				}
				$rootScope.$on("trainInfo",function(event, msg){
					$scope.jssInfo.tSSTrainingExperienceModelList = msg;
				});
				var modal = $modal({
					template : "modals/modal_change_traininfo.html",
					// persist: true,
					show : true,
					backdrop : 'static',
					scope : $scope,
					keyboard : false
				});
				modal.$promise.then(modal.show);
			}
			
			//删除培训经历
			$scope.deleteTrainInfo = function(index){
				elemeAlert.confirm("20093",function(choose){
					if(choose == 'OK'){
						elemeAlert.openLoading();
						$scope.info = {
								token : sessionStorage.getItem("token"),
								jssId : $scope.jssInfo.jssId,
								teid : $scope.jssInfo.tSSTrainingExperienceModelList[index].teid
						}
						$http({
							method : 'POST',
							url : localStorage.getItem("Url") 
								+ 'TSSTrainingExperienceServiceImpl/deleteTrain',
							data : JSON.stringify($scope.info)
						}).success(function(data){
//							$rootScope.$emit("trainInfo",data.resultList);
							$scope.jssInfo.tSSTrainingExperienceModelList = data.resultList;
//							elemeAlert.alert("10020");
							elemeAlert.closeLoading();
						}).error(function(data){
							elemeAlert.alert("40002");
							elemeAlert.closeLoading();
						})
					}
				},null);
			}
//			证书信息
			$scope.addCertInfo = function(){
				$rootScope.changeCertInfoFlag = false;
				$scope.ce = "";
//				$rootScope.$on("certInfo",function(event, msg){
//					$scope.jssInfo.tSSObtainingCertificateList = msg;
//				});
				var modal = $modal({
					template : "modals/modal_change_certinfo.html",
					// persist: true,
					show : true,
					backdrop : 'static',
					scope : $scope,
					keyboard : false
				});
				modal.$promise.then(modal.show);
			}
			$scope.changeCertInfo = function(index){
				$rootScope.certIndex = index;
				$rootScope.changeCertInfoFlag = true;
//				$rootScope.$on("certInfo",function(event, msg){
//					$scope.jssInfo.tSSObtainingCertificateList = msg;
//				});
				//页面数据
				$scope.middle = angular.copy($scope.jssInfo.tSSObtainingCertificateList[index]);
				$scope.ce = $scope.middle;
				if($scope.middle.getDate != null){
					$scope.ce.getDate = new Date($scope.middle.getDate).format("yyyy-MM-dd");
				}else{
					$scope.ce.getDate = null;
				}
				
				
				var modal = $modal({
					template : "modals/modal_change_certinfo.html",
					// persist: true,
					show : true,
					backdrop : 'static',
					scope : $scope,
					keyboard : false
				});
				modal.$promise.then(modal.show);
			}
			
			//删除证书
			$scope.deleteCert = function(index){
				elemeAlert.confirm("20093",function(choose){
					if(choose == 'OK'){
						elemeAlert.openLoading();
						$scope.info = {
								token : sessionStorage.getItem("token"),
								jssId : $scope.jssInfo.jssId,
								ocid : $scope.jssInfo.tSSObtainingCertificateList[index].ocid
						}
						$http({
							method : 'POST',
							url : localStorage.getItem("Url") 
								+ 'TSSObtainingCertificateServiceImpl/deleteCert',
							data : JSON.stringify($scope.info)
						}).success(function(data){
							for(int = 0; int < data.resultList.length; int++){
								data.resultList[int].getDate = new Date(data.resultList[int].getDate).format("yyyy-MM-dd");
							}
//							$rootScope.$emit("certInfo",data.resultList);
							$scope.jssInfo.tSSObtainingCertificateList = data.resultList;
//							elemeAlert.alert("10020");
							elemeAlert.closeLoading();
						}).error(function(data){
							elemeAlert.alert("40002");
							elemeAlert.closeLoading();
						})
					}
				},null)
			}
//			自我评价
			$scope.addSelfEvalInfo = function(){
				$rootScope.changeSelfEvalInfoFlag = false;
				$scope.selfEval = "";
//				$rootScope.$on("selfEvalInfo",function(event, msg){
//					$scope.jssInfo.selfEvaluate = msg;
//				});
				var modal = $modal({
					template : "modals/modal_change_selfevalinfo.html",
					// persist: true,
					show : true,
					backdrop : 'static',
					scope : $scope,
					keyboard : false
				});
				modal.$promise.then(modal.show);
			}
			$scope.changeSelfEvalInfo = function(){
				$rootScope.changeSelfEvalInfoFlag = true;
//				$rootScope.$on("selfEvalInfo",function(event, msg){
//					$scope.jssInfo.selfEvaluate = msg;
//				});
				//页面数据
				$scope.selfEval = angular.copy($scope.jssInfo.selfEvaluate);
				
				var modal = $modal({
					template : "modals/modal_change_selfevalinfo.html",
					// persist: true,
					show : true,
					backdrop : 'static',
					scope : $scope,
					keyboard : false
				});
				modal.$promise.then(modal.show);
			}	
			
		})
TSSAPP.controller('uploadResume',function($rootScope, $scope, i18nService, $http, $modal,elemeAlert,elemeFile) {
	$scope.tongchengFileJson = "";
		$scope.ganjiFileJson = "";
		$scope.liepinFileJson = "";
		$scope.zhaopinFileJson = "";
		$scope.jobFileJson = "";
		$scope.lagouFileJson = "";
		$scope.jobtype = "1";
		$scope.import = function(hide) {
			// alert($rootScope.importFileJson.file);
			
			var token = sessionStorage.getItem("token");
			var fileJsonArr = [];
			var isExistFile = false;
			// 拉勾
			if ($scope.lagouFileJson != null
					&& $scope.lagouFileJson != "") {
				var filevar = {
					type : 'lagou',
					base64 : $scope.lagouFileJson
				}
				fileJsonArr.push(filevar);
				isExistFile = true;
			}
			//前程
			if ($scope.jobFileJson != null
					&& $scope.jobFileJson != "") {
				var filevar = {
					type : 'job',
					base64 : $scope.jobFileJson
				}
				fileJsonArr.push(filevar);
				isExistFile = true;
			}
			//招聘
			if ($scope.zhaopinFileJson != null
					&& $scope.zhaopinFileJson != "") {
				var filevar = {
					type : 'zhaopin',
					base64 : $scope.zhaopinFileJson
				}
				fileJsonArr.push(filevar);
				isExistFile = true;
			}
			//猎聘
			if ($scope.liepinFileJson != null
					&& $scope.liepinFileJson != "") {
				var filevar = {
					type : 'liepin',
					base64 : $scope.liepinFileJson
				}
				fileJsonArr.push(filevar);
				isExistFile = true;
			}
			//赶集
			if ($scope.ganjiFileJson != null
					&& $scope.ganjiFileJson != "") {
				var filevar = {
					type : 'ganji',
					base64 : $scope.ganjiFileJson
				}
				fileJsonArr.push(filevar);
				isExistFile = true;
			}
			//58同城
			if ($scope.tongchengFileJson != null
					&& $scope.tongchengFileJson != "") {
				var filevar = {
					type : 'tongcheng',
					base64 : $scope.tongchengFileJson
				}
				fileJsonArr.push(filevar);
				isExistFile = true;
			}
			if (!isExistFile) {
				elemeAlert.alert("20026");
				return;
			}
			elemeAlert.openLoading();
			$scope.req = {
				token : token,
				fileJsonArr : fileJsonArr
			}
			$http(
					{
						method : 'POST',
						url : localStorage.getItem("Url")
								+ "TSSJobSeekersInfoServiceImpl/impTssfile",
						data : JSON.stringify($scope.req)
			}).success(function(data) {
				elemeAlert.closeLoading();
//							$scope.$hide();
				isExistFile = false;
				fileJsonArr = [];
				$scope.tongchengFileJson = "";
				$scope.ganjiFileJson = "";
				$scope.liepinFileJson = "";
				$scope.zhaopinFileJson = "";
				$scope.jobFileJson = "";
				$scope.lagouFileJson = "";
				$("#lagoufileName").val("");
				$("#jobfileName").val("");
				$("#zhaopinfileName").val("");
				$("#liepinfileName").val("");
				$("#ganjifileName").val("");
				$("#tongchengfileName").val("");
				if(data.errorList != null && data.errorList.length > 0){
					elemeAlert.alert("20057");
				}else{
					elemeAlert.alert("20062",null,[data.insertResult]);
				}
//				$rootScope.$emit("getPagedDataAsync",$rootScope.pagingOptions);
				$rootScope.$emit("pageChange",$rootScope.searchObjTag,$rootScope.newPage);
			}).error(function(data) {
				elemeAlert.closeLoading();
			});
		}

		$scope.file_changed = function(element) {
			// var v = $(this).val();
			var reader = new FileReader();
			reader.readAsBinaryString(element.files[0]);
			var ext = element.files[0].type;
			var fileName = element.files[0].name;
			var arr = ext.split('/');
			var loadfiletype = "." + arr[1];
			var filetype = element.id;
			if (filetype == 'lagou') {
				if(!elemeFile.filterHtml(element.files[0])){
					elemeFile.msg(elemeAlert, null, "1");
					$scope.$apply();
					return;
				}
			} else if (filetype == 'job') {//前程
				if(!elemeFile.filterHtmlEml(element.files[0])){
					elemeFile.msg(elemeAlert, null, "1");
					$scope.$apply();
					return;
				}
			} else if (filetype == 'zhaopin') {//智联招聘
				if(!elemeFile.filterHtmlEml(element.files[0])){
					elemeFile.msg(elemeAlert, null, "1");
					$scope.$apply();
					return;
				}
			} else if (filetype == 'liepin') {//猎聘
				if(!elemeFile.filterHtmlEml(element.files[0])){
					elemeFile.msg(elemeAlert, null, "1");
					$scope.$apply();
					return;
				}
			} else if (filetype == 'tongcheng') {//58同城
				if(!elemeFile.filterEml(element.files[0])){
					elemeFile.msg(elemeAlert, null, "1");
					$scope.$apply();
					return;
				}
			}
			
			
			element.value = "";
			reader.onload = function(e) {
				var fileJson = {
					fileName : fileName,
					file : $.base64.encode(e.target.result),
					ext : loadfiletype
				};
				if (filetype == 'lagou') {
					$("#lagoufileName").val(fileName);
					$scope.lagouFileJson = fileJson;
					$('#lagoufile_base64').val(fileJson);
				} else if (filetype == 'job') {//前程
					$("#jobfileName").val(fileName);
					$scope.jobFileJson = fileJson;
					$('#jobfile_base64').val(fileJson);
				} else if (filetype == 'zhaopin') {//智联招聘
					$("#zhaopinfileName").val(fileName);
					$scope.zhaopinFileJson = fileJson;
					$('#zhaopinfile_base64').val(fileJson);
//					$('#zhaopin').removeAttr('onchange');
				} else if (filetype == 'liepin') {//猎聘
					$("#liepinfileName").val(fileName);
					$scope.liepinFileJson = fileJson;
					$('#liepinfile_base64').val(fileJson);
				} else if (filetype == 'tongcheng') {//58同城
					$("#tongchengfileName").val(fileName);
					$scope.tongchengFileJson = fileJson;
					$('#tongchengfile_base64').val(fileJson);
				}
			};
			
		}
		
		
		
	})
	
	
	

	
TSSAPP.controller('importOfferExcelController',function($rootScope, $scope, i18nService, $http, $modal,elemeAlert,elemeFile) {
	
	//选择EXCEL文件
	$scope.file_changed = function(element) {
		// var v = $(this).val();
		var reader = new FileReader();
		reader.readAsBinaryString(element.files[0]);
		var ext = element.files[0].type;
		if(!elemeFile.filterExcel(element.files[0])){
			elemeAlert.alert("20107");
			$scope.$apply();
			return;
		}
		var fileName = element.files[0].name;
		var arr = ext.split('/');
		var loadfiletype = "." + arr[1];
		reader.onload = function(e) {
			var fileJson = {
				fileName : fileName,
				file : $.base64.encode(e.target.result),
				ext : loadfiletype
			};
			$("#fileName").val(fileName);
			$scope.fileJson = fileJson;
			$('#file_base64').val(fileJson);
		};
	}
	//导入数据
	$scope.importResumeFile = function(hide) {
		if ($scope.fileJson == null || $scope.fileJson == "") {
			elemeAlert.alert("20031");
			return;
		}
		var token = sessionStorage.getItem("token");
		elemeAlert.openLoading();
		var fileJsonArr = [];
		// 拉勾
		var filevar = {
			base64 : $scope.fileJson
		}
		fileJsonArr.push(filevar);

		$scope.req = {
			token : token,
			fileJsonArr : fileJsonArr,
		}
		$http(
				{
					method : 'POST',
					url : localStorage.getItem("Url")
							+ "TSSJobSeekersInfoServiceImpl/importTssExcel",
					data : JSON.stringify($scope.req)
				}).success(function(data) {
			elemeAlert.closeLoading();
			$scope.excelErrorList=data.excelErrorList;
			hide();
			//弹出页面
			var modal = $modal({
				template : "modals/modal_ExcelMessage_result.html",
				// persist: true,
				show : true,
				backdrop : 'static',
				scope : $scope,
				keyboard : false
			});
			modal.$promise.then(modal.show);
			
			
		}).error(function(data) {
			elemeAlert.closeLoading();
			if (data == "40011") {
				elemeAlert.alert("40011");
			} else {
				elemeAlert.alert("40020");
			}
		});
	}
	
	//下载固定模板
	$scope.downLoadExcel=function(){
		window.open(localStorage.getItem("downloadUrl") + "/File/Upload/EXCEL.xlsx");
	}
	
//	//查看部门岗位编码
//	$scope.viewPartCode = function(){
//		
//	}
	
})


//错误信息展现
TSSAPP.controller('importOfferExcelResultController',function($rootScope, $scope, i18nService, $http, $modal,elemeAlert,elemeFile) {
	//右上角关闭
	$scope.close = function(hide){
		hide();
		$rootScope.$emit("pageChange",$rootScope.searchObjTag,$rootScope.newPage);
	}
})
	
// 获取部门
TSSAPP.controller(
		'viewCompanyDept',
		function($rootScope, $scope, $compile, $http, elemeAlert, elemeTab, $modal) {
			
			$scope.getTreeEmpInfo = function (dptId) {
				$scope.roleList = new Array();
				elemeAlert.openLoading();
				$scope.req ={
		 	     		token:localStorage.getItem("token"),
		 	     		req:{id:dptId}//id:0007
		 	   	    }
			    $http({
			        method: 'POST',
			        url : localStorage.getItem("Url") + "TSSRegisterInfoServiceImpl/getDepartmentTreeInfo",
			 	    data: JSON.stringify($scope.req)
				  }).success(function(data){
					  elemeAlert.closeLoading();
					  if (data.treeinfo != null) {
						for (var int = 0; int < data.treeinfo.length; int++) {
							$scope.roleListTmp = eval("(" + data.treeinfo[int] + ")");//str转成JSON
							for (var i = 0; i < $scope.roleListTmp.length; i++) {
								$scope.roleList.push($scope.roleListTmp[i]);
							}
						}
					}

//					  if($scope.dptid != null){
//						  $("#" + $scope.dptid).addClass("selected"); // 追加样式 
//						  $("#" + $scope.dptid).css("color","red"); // 追加样式 
////						  document.getElementById($scope.dptid).className="selected";
//					  }
					  setTimeout(function () {
						  if($scope.dptid != null){
							  $("#" + $scope.dptid).addClass("selected"); // 追加样式 
//						  $("#" + $scope.dptid).css("color","red"); // 追加样式 
						  }
						  }, 100);
//					  $scope.roleList = eval("(" + data.treeinfo + ")");//str转成JSON
				   }).error(function(data){
					   elemeAlert.closeLoading();
					   		if(data == "40026"){
				  	    		elemeAlert.alert("40026");
				  	    	}else{
					   	      elemeAlert.alert("40046");
				  	    	}
				   })
			}
			
			window.onload=function(){
			    alert('加载完成');

			}
			
			$scope.getTreeEmpInfo(null);
			
			$scope.$watch( 'mytree.currentNode', function( newObj, oldObj ) {
				   if( $scope.mytree && angular.isObject($scope.mytree.currentNode) ) {
				    	$scope.dpt = $scope.mytree.currentNode.label;
				    	$scope.dptid = $scope.mytree.currentNode.id;
				    	$scope.checkFlag = 1;
				    	for (var int = 0; int < $scope.roleList.length; int++) {
				    		if($scope.checkFlag == 1){
				    			$scope.getCompany($scope.roleList[int],$scope.dptid,int);
				    		}
				    	}
				    	$scope.getTreeEmpInfo($scope.dptid);
				    }
				}, false);
			
			$scope.getCompany = function (obj,dptid,numTmp) {
				if(numTmp != null){
					$scope.companyId = numTmp;
					$scope.companyName = obj.label;
				}
				if(obj != null && obj.children != null && obj.children.length > 0){
					for (var int = 0; int < obj.children.length; int++) {
						if(dptid == obj.children[int].id){
							$scope.checkFlag = 2;
							break;
						}else{
							$scope.getCompany(obj.children[int],dptid);
						}
					}
				}
			}
			$scope.add = function (hide) {
//				$rootScope.deptName = $scope.dpt;
//				$rootScope.deptId = $scope.dptid;
//				$rootScope.companyName = $scope.companyName;
				$scope.comDept ={};
				$scope.comDept.deptName = $scope.dpt;
				$scope.comDept.deptId = $scope.dptid;
				//不能选择    公司名称  
				if($scope.dptid=="01" || $scope.dptid=="02"){
					return;
				}
				$scope.comDept.companyName = $scope.companyName;
				$rootScope
				.$emit(
						"getComDept",
						$scope.comDept);
				hide();
			}
			
			//获取岗位信息
			
			$scope.getPostinfo = function(){
				if($scope.dptid == undefined){
					return;
				}
				$scope.deptCode = $scope.dptid;
				//弹出页面
				var modal = $modal({
					template : "modals/modal_viewPostInfo.html",
					// persist: true,
					show : true,
					backdrop : 'static',
					scope : $scope,
					keyboard : false
				});
				modal.$promise.then(modal.show);
			}
			
		})
TSSAPP.controller(
		'viewPostInfo',
		function($rootScope, $scope, $compile, $http, elemeAlert, elemeTab, $modal) {
			 elemeAlert.openLoading();
			  $scope.deptObj ={
		 	     		token:sessionStorage.getItem("token"),
		 	     		deptCode:$scope.deptCode
		 	   	    }
		     $http({
		        method: 'POST',
		        url : localStorage.getItem("Url") + "TSSRegisterInfoServiceImpl/getPostMidInfo",
		 	    data: JSON.stringify($scope.deptObj)
			  }).success(function(data){
				  $scope.postMidList = data;
				  elemeAlert.closeLoading();
			   }).error(function(data){
				  // alert(data);
				   elemeAlert.closeLoading();
//				   elemeAlert.alert('40014'); 
			   })
		})	
	
// 维护报到日期
TSSAPP.controller(
				'changeRegister',
				function($rootScope, $scope, i18nService, $http, $modal,
						elemeTab,elemeUigrid,elemeAlert) {
//				var obj = $scope.gridApi.selection.getSelectedRows()[0];
				if($scope.gridApi != null){
					var obj = $scope.gridApi.selection.getSelectedRows()[0];
				}else{
					var obj = $scope.obj;
				}
				
				$scope.name = obj.name; 
				var req = {
						token:sessionStorage.getItem("token"),
						jssId:obj.jssId
				} 
				$http(
						{
							method : 'GET',
							url : localStorage.getItem("Url")
									+ "TSSRegisterInfoServiceImpl/getTSSRegisterInfo",
							params : req
						}).success(function(data) {
							$scope.tssRegisterInfo = data.tssRegisterInfo;	
							$scope.isHaveFlag = data.isHaveFlag;
							//发送过报道信息后，才可变更报道日期
							if ($scope.isHaveFlag) {
								$scope.registerDate = $scope.tssRegisterInfo.registerDate
										.substr(0, 10);
								$scope.changeReason = $scope.tssRegisterInfo.changeReason;
						  	}
							
				}).error(function(data) {
					 elemeAlert.alert('40014'); 
				});
				
				$scope.save = function($hide){
					
					
					
					if(!$scope.cust_form.$valid){
						//alert(1);
						return;
					}
					
					elemeAlert.openLoading();
					var changeReason ='';
					if($scope.changeReason!=null&&$scope.changeReason!=''&&$scope.changeReason!=undefined){
						changeReason = $scope.changeReason;
					}
					
				    $scope.obj ={
				    	token:sessionStorage.getItem("token"),
				    	jssId:obj.jssId,
				    	changeReason:changeReason,
				    	registerDate:$scope.registerDate
				    }
				    
					$http(
							{
								method : 'POST',
								url : localStorage.getItem("Url")
										+ "TSSRegisterInfoServiceImpl/updateTSSRegisterInfoDate",
								data : JSON.stringify($scope.obj)
							}).success(function(data) {
								//等人事更改时间接口好了替换一下
							   $scope.messageFlag = data.messFlag;	
							   $rootScope.$emit("pageChange",$rootScope.searchObjTag,$rootScope.newPage);
							   if(!$scope.messageFlag){
								   elemeAlert.alert('10017');
								   elemeAlert.closeLoading();
							   }else{
								   elemeAlert.alert('40002');
								   elemeAlert.closeLoading();
							   }
//							   elemeAlert.alert('10017');
//							   $rootScope.$emit(
//										"getPagedDataAsync",
//										$rootScope.pagingOptions);
							   $hide();
					}).error(function() {
						  elemeAlert.alert('40002'); 
						  elemeAlert.closeLoading();
					});
				}
				

				})
		// 发送报到信息
TSSAPP.controller(
				'sendRegister',
				function($rootScope, $scope, i18nService, $http, $modal,
						elemeAlert, elemeSearch,elemeUigrid) {
					/*var obj = $scope.gridApi.selection.getSelectedRows()[0];*/
					/*var obj = [];
					obj.push(data);*/
					if($scope.gridApi != null){
						var obj = $scope.gridApi.selection.getSelectedRows()[0];
					}else{
						var obj = $scope.obj;
					}
					var req = {
							token:sessionStorage.getItem("token"),
							jssId:obj.jssId
					}
					$http(
							
							{
								method : 'GET',
								url : localStorage.getItem("Url")+ "TSSPaybgCheckServiceImpl/getPaybgCheckInfo",
								params : req
							}).success(function(data) {
								$scope.tssPaybgCheck = data.tssPaybgCheck;
								$scope.haveFlag = data.isHaveFlag;
								
								if( $scope.haveFlag){
									$scope.name = $scope.tssPaybgCheck.name;
									$scope.companyName = $scope.tssPaybgCheck.companyName;
									$scope.deptName = $scope.tssPaybgCheck.deptname;
									$scope.deptId = $scope.tssPaybgCheck.deptcode;
									$scope.staffStatus = $scope.tssPaybgCheck.staffStatus;
									$scope.registerDate = $scope.tssPaybgCheck.registerDate;
								}
							}).error(function(data) {
								elemeAlert.alert('40014');
							});
					
					
				  //加载岗位
				  $scope.getPostinfo = function(dept){
					 // alert($scope.dept.selected);
					  elemeAlert.openLoading();
					  $scope.deptObj ={
				 	     		token:sessionStorage.getItem("token"),
				 	     		deptCode:dept
				 	   	    }
				     $http({
				        method: 'POST',
				        url : localStorage.getItem("Url") + "TSSRegisterInfoServiceImpl/getPostMidInfo",
				 	    data: JSON.stringify($scope.deptObj)
					  }).success(function(data){
						  $scope.postMidList = data;
						  if($scope.tssPaybgCheck != null && $scope.tssPaybgCheck.regApplyposition != null && $scope.regApplyposition == null){
							  $scope.regApplyposition = $scope.tssPaybgCheck.regApplyposition;
						  }
						  elemeAlert.closeLoading();
					   }).error(function(data){
						  // alert(data);
						   elemeAlert.closeLoading();
						   elemeAlert.alert('40014'); 
					   })
				  }
          
				  $rootScope.$on("getComDept", function(event, msg) {
					  $scope.companyName = msg.companyName;
					  $scope.deptName = msg.deptName;
					  $scope.deptId = msg.deptId;
					});
				  $scope.$watch( 'deptId', function( newObj, oldObj ) {
					  if(newObj != null){
						  $scope.getPostinfo(newObj);
					  }
					}, false);
				  
				  $scope.registerObject = {};
					
				$scope.save = function($hide){
					//首先查询是否是离职人员
						  
						//校验表单的合法性$scope.cust_form.$valid
					    if (!$scope.cust_form.$valid||$scope.regApplyposition==undefined||$scope.registerDate==undefined
								 ||$scope.staffStatus==undefined) {
					    	elemeAlert.alert("20070")
						     return;
						    } 
					    elemeAlert.openLoading();
						
						$scope.registerObject.jssId =obj.jssId; 
					    $scope.registerObject.name = obj.name; 
					    $scope.registerObject.sex = obj.sex; 
					    $scope.registerObject.applyposition = $scope.regApplyposition; 
					    $scope.registerObject.companyName = $scope.companyName; 
					    $scope.registerObject.deptname = $scope.deptName; 
					    $scope.registerObject.deptid = $scope.deptId; 
					    //alert($scope.dept.selected);
					    $scope.registerObject.registerDate = $scope.registerDate; 
					    $scope.registerObject.staffStatus = $scope.staffStatus; 
					   
					    $scope.obj ={
					    	token:sessionStorage.getItem("token"),
					    	registerObject:	$scope.registerObject
					    }
					  
						$http(
								{
									method : 'POST',
									url : localStorage.getItem("Url")
											+ "TSSRegisterInfoServiceImpl/postTSSRegisterInfo",
									data : JSON.stringify($scope.obj)
								}).success(function(data) {
								      elemeAlert.closeLoading();
								      //如果发送报道信息到hr成功则返回成功，失败的话就提示信息失败
									   $scope.messFlag = data.messFlag;

										$scope.messFlag2 = data.messFlag2;
							           if($scope.messFlag2 != null &&  !$scope.messFlag2){
										   elemeAlert.alert('20134');
										   return;
									   }else{
										   //错误信息
										   $scope.messageError = data.messageError;
										   if($scope.messFlag){
											   elemeAlert.alert('10017');

											   if($rootScope.newPage=="tss_offer_list.html"){
												   $rootScope.$emit("pageChange",$rootScope.searchObjTag,$rootScope.newPage);
											   }
											   if($rootScope.newPage=="tss_register_list.html"){
												   $rootScope.$emit("getPagedDataAsync",$rootScope.pagingOptions);
											   }

											   $hide();
										   }else{
											   var strError=$scope.messageError.indexOf("error");
											   if(strError >= 0){
												   elemeAlert.alert('40021');
											   }else{
												   //错误信息 提示
												   elemeAlert.alert("20030",null,[$scope.messageError]);
											   }
										   }
									   }
						}).error(function() {
						      elemeAlert.closeLoading();
							  elemeAlert.alert('40001'); 
						});
					}

				})		
				
				
//职位申请表 打印
		.controller('printTable',function($rootScope, $scope, i18nService, $http, $modal,elemeAlert,elemeFile) {
	$scope.printJssId = $rootScope.printModals.jssId;
	elemeAlert.openLoading();
	$scope.req = {
		token : sessionStorage.getItem("token"),
		jssId : $scope.printJssId + ""
	}
	$http({
		method : 'post',
		url : localStorage.getItem("Url")
				+ "TSSInterviewRecordsServiceImpl/postPrintModel",
		data : JSON.stringify($scope.req)
	})
	.success(function(data) {
		elemeAlert.closeLoading();
		$scope.tssJobSeekersInfoPrintModel = data.tssJobSeekersInfoPrintModel;
		$scope.tssPrimaryContactInfoList = data.tssPrimaryContactInfoList;
		$scope.tssTrainingExperienceModelList = data.tssTrainingExperienceModelList;
		// 主要家庭成员
		if($scope.tssPrimaryContactInfoList == null || $scope.tssPrimaryContactInfoList.length == 0){
			$scope.tssPrimaryContactInfoList = new Array();
			for (var int = 0; int < 3; int++) {
				$scope.tssPrimaryContactInfo = {};
				$scope.tssPrimaryContactInfoList.push($scope.tssPrimaryContactInfo);
			}
		}else{
			if($scope.tssPrimaryContactInfoList.length < 3){
				$scope.lengthTmp = $scope.tssPrimaryContactInfoList.length;
				for (var int = 0; int < 3 - $scope.lengthTmp; int++) {
					$scope.tssPrimaryContactInfo = {};
					$scope.tssPrimaryContactInfoList.push($scope.tssPrimaryContactInfo);
				}
			}else{
				$scope.tssPrimaryContactInfoList = new Array();
				$scope.tssPrimaryContactInfoList.push(data.tssPrimaryContactInfoList[0]);
				$scope.tssPrimaryContactInfoList.push(data.tssPrimaryContactInfoList[1]);
				$scope.tssPrimaryContactInfoList.push(data.tssPrimaryContactInfoList[2]);
			}
		}
		
		/*// 主要家庭成员
		if($scope.tssPrimaryContactInfoList1 == null || $scope.tssPrimaryContactInfoList1.length == 0){
			$scope.tssPrimaryContactInfoList2 = new Array();
			for (var int = 0; int < 3; int++) {
				$scope.tssPrimaryContactInfo = {};
				$scope.tssPrimaryContactInfoList2.push($scope.tssPrimaryContactInfo);
			}
		}else{
			$scope.tssPrimaryContactInfoList2 = new Array();
			for (var int = 0; int < 3; int++) {
				if($scope.tssPrimaryContactInfoList1[int].relationship!=null  &&  ($scope.tssPrimaryContactInfoList1[int].relationship=='5' || $scope.tssPrimaryContactInfoList1[int].relationship=='6')){
					
				}else{
					$scope.tssPrimaryContactInfoList2.push($scope.tssPrimaryContactInfoList1[int]);
				}
			}
			
		}*/
		// 教育经历
		if($scope.tssJobSeekersInfoPrintModel.tssJobSeekersEducationInfoList == null || $scope.tssJobSeekersInfoPrintModel.tssJobSeekersEducationInfoList.length == 0){
			$scope.tssJobSeekersInfoPrintModel.tssJobSeekersEducationInfoList = new Array();
			for (var int = 0; int < 3; int++) {
				$scope.tssEdu = {};
				$scope.tssJobSeekersInfoPrintModel.tssJobSeekersEducationInfoList.push($scope.tssEdu);
			}
		}else{
			if($scope.tssJobSeekersInfoPrintModel.tssJobSeekersEducationInfoList.length < 3){
				$scope.lengthTmp = $scope.tssJobSeekersInfoPrintModel.tssJobSeekersEducationInfoList.length;
				for (var int = 0; int < 3 - $scope.lengthTmp; int++) {
					$scope.tssEdu = {};
					$scope.tssJobSeekersInfoPrintModel.tssJobSeekersEducationInfoList.push($scope.tssEdu);
				}
			}else if($scope.tssJobSeekersInfoPrintModel.tssJobSeekersEducationInfoList.length > 2){
				$scope.eduExpL = angular.copy($scope.tssJobSeekersInfoPrintModel.tssJobSeekersEducationInfoList);
				$scope.tssJobSeekersInfoPrintModel.tssJobSeekersEducationInfoList = [];
				$scope.tssJobSeekersInfoPrintModel.tssJobSeekersEducationInfoList[0] = $scope.eduExpL[0];
				$scope.tssJobSeekersInfoPrintModel.tssJobSeekersEducationInfoList[1] = $scope.eduExpL[1];
				$scope.tssJobSeekersInfoPrintModel.tssJobSeekersEducationInfoList[2] = $scope.eduExpL[2];
			}
		}
		//年月分离
		for (var int2 = 0; int2 < $scope.tssJobSeekersInfoPrintModel.tssJobSeekersEducationInfoList.length; int2++) {
			if($scope.tssJobSeekersInfoPrintModel.tssJobSeekersEducationInfoList[int2] != null){
				if($scope.tssJobSeekersInfoPrintModel.tssJobSeekersEducationInfoList[int2].startDate != null){
					var ts = $scope.tssJobSeekersInfoPrintModel.tssJobSeekersEducationInfoList[int2].startDate.split("/");
					$scope.tssJobSeekersInfoPrintModel.tssJobSeekersEducationInfoList[int2].startYear = ts[0];
					$scope.tssJobSeekersInfoPrintModel.tssJobSeekersEducationInfoList[int2].startMonth = ts[1];
				}
				if($scope.tssJobSeekersInfoPrintModel.tssJobSeekersEducationInfoList[int2].endDate != null){
					var ts = $scope.tssJobSeekersInfoPrintModel.tssJobSeekersEducationInfoList[int2].endDate.split("/");
					$scope.tssJobSeekersInfoPrintModel.tssJobSeekersEducationInfoList[int2].endYear = ts[0];
					$scope.tssJobSeekersInfoPrintModel.tssJobSeekersEducationInfoList[int2].endMonth = ts[1];
				}
			}
		}
		// 培训经历
		if($scope.tssTrainingExperienceModelList == null || $scope.tssTrainingExperienceModelList.length == 0){
			$scope.tssTrainingExperienceModelList = new Array();
			for (var int = 0; int < 3; int++) {
				$scope.tssTe = {};
				$scope.tssTrainingExperienceModelList.push($scope.tssTe);
			}
		}else{
			if($scope.tssTrainingExperienceModelList.length < 3){
				$scope.lengthTmp = $scope.tssTrainingExperienceModelList.length;
				for (var int = 0; int < 3 - $scope.lengthTmp; int++) {
					$scope.tssTe = {};
					$scope.tssTrainingExperienceModelList.push($scope.tssTe);
				}
			}
		}
		// 工作经历
		if($scope.tssJobSeekersInfoPrintModel.tssJobSeekersWorkExpInfoList == null || $scope.tssJobSeekersInfoPrintModel.tssJobSeekersWorkExpInfoList.length == 0){
			$scope.tssJobSeekersInfoPrintModel.tssJobSeekersWorkExpInfoList = new Array();
			for (var int = 0; int < 4; int++) {
				$scope.tssWork = {};
				$scope.tssJobSeekersInfoPrintModel.tssJobSeekersWorkExpInfoList.push($scope.tssWork);
			}
		}else{
			if($scope.tssJobSeekersInfoPrintModel.tssJobSeekersWorkExpInfoList.length < 4){
				$scope.lengthTmp = $scope.tssJobSeekersInfoPrintModel.tssJobSeekersWorkExpInfoList.length;
				for (var int = 0; int < 4 - $scope.lengthTmp; int++) {
					$scope.tssWork = {};
					$scope.tssJobSeekersInfoPrintModel.tssJobSeekersWorkExpInfoList.push($scope.tssWork);
				}
			}else if($scope.tssJobSeekersInfoPrintModel.tssJobSeekersWorkExpInfoList.length > 3){
				$scope.workExpL = angular.copy($scope.tssJobSeekersInfoPrintModel.tssJobSeekersWorkExpInfoList);
				$scope.tssJobSeekersInfoPrintModel.tssJobSeekersWorkExpInfoList = [];
				$scope.tssJobSeekersInfoPrintModel.tssJobSeekersWorkExpInfoList[0] = $scope.workExpL[0];
				$scope.tssJobSeekersInfoPrintModel.tssJobSeekersWorkExpInfoList[1] = $scope.workExpL[1];
				$scope.tssJobSeekersInfoPrintModel.tssJobSeekersWorkExpInfoList[2] = $scope.workExpL[2];
				$scope.tssJobSeekersInfoPrintModel.tssJobSeekersWorkExpInfoList[3] = $scope.workExpL[3];
				
			}
		}
		//年月分离
		for (var int3 = 0; int3 < $scope.tssJobSeekersInfoPrintModel.tssJobSeekersWorkExpInfoList.length; int3++) {
			if($scope.tssJobSeekersInfoPrintModel.tssJobSeekersWorkExpInfoList[int3] != null){
				if($scope.tssJobSeekersInfoPrintModel.tssJobSeekersWorkExpInfoList[int3].startDate != null){
					var ts = $scope.tssJobSeekersInfoPrintModel.tssJobSeekersWorkExpInfoList[int3].startDate.split("/");
					$scope.tssJobSeekersInfoPrintModel.tssJobSeekersWorkExpInfoList[int3].startYear = ts[0];
					$scope.tssJobSeekersInfoPrintModel.tssJobSeekersWorkExpInfoList[int3].startMonth = ts[1];
				}
				if($scope.tssJobSeekersInfoPrintModel.tssJobSeekersWorkExpInfoList[int3].endDate != null){
					var ts = $scope.tssJobSeekersInfoPrintModel.tssJobSeekersWorkExpInfoList[int3].endDate.split("/");
					$scope.tssJobSeekersInfoPrintModel.tssJobSeekersWorkExpInfoList[int3].endYear = ts[0];
					$scope.tssJobSeekersInfoPrintModel.tssJobSeekersWorkExpInfoList[int3].endMonth = ts[1];
				}
			}
		}
		// 户籍类型
		if($scope.tssJobSeekersInfoPrintModel.hukouType == 1 || $scope.tssJobSeekersInfoPrintModel.hukouType == 3){
			$scope.tssJobSeekersInfoPrintModel.hukouType1 = true;
		}else if($scope.tssJobSeekersInfoPrintModel.hukouType == 2 || $scope.tssJobSeekersInfoPrintModel.hukouType == 4){
			$scope.tssJobSeekersInfoPrintModel.hukouType2 = true;
		}
		
		
		// 生育状况
		if($scope.tssJobSeekersInfoPrintModel.birthStatus == 1){
			$scope.tssJobSeekersInfoPrintModel.birthStatus1 = true;
		}else if($scope.tssJobSeekersInfoPrintModel.birthStatus == 2){
			$scope.tssJobSeekersInfoPrintModel.birthStatus2 = true;
		}
		
		// 健康状况
		if($scope.tssJobSeekersInfoPrintModel.healthStatus == 1){
			$scope.tssJobSeekersInfoPrintModel.healthStatus1 = true;
		}else if($scope.tssJobSeekersInfoPrintModel.healthStatus == 2){
			$scope.tssJobSeekersInfoPrintModel.healthStatus2 = true;
		}else if($scope.tssJobSeekersInfoPrintModel.healthStatus == 3 || $scope.tssJobSeekersInfoPrintModel.healthStatus == 4){
			$scope.tssJobSeekersInfoPrintModel.healthStatus3 = true;
		}
		
		// 是否有犯罪史
		if($scope.tssJobSeekersInfoPrintModel.historyOfCrime == '1'){
			$scope.tssJobSeekersInfoPrintModel.historyOfCrime1 = true;
		}else if($scope.tssJobSeekersInfoPrintModel.historyOfCrime == '2'){
			$scope.tssJobSeekersInfoPrintModel.historyOfCrime2 = true;
		}
		
		// 可出差意向
		if($scope.tssJobSeekersInfoPrintModel.travelIntention == 1){
			$scope.tssJobSeekersInfoPrintModel.travelIntention1 = true;
		}else if($scope.tssJobSeekersInfoPrintModel.travelIntention == 2){
			$scope.tssJobSeekersInfoPrintModel.travelIntention2 = true;
		}else if($scope.tssJobSeekersInfoPrintModel.travelIntention == 3){
			$scope.tssJobSeekersInfoPrintModel.travelIntention3 = true;
		}else if($scope.tssJobSeekersInfoPrintModel.travelIntention == 4){
			$scope.tssJobSeekersInfoPrintModel.travelIntention4 = true;
		}
		// 简历渠道
		if($scope.tssJobSeekersInfoPrintModel.resumeSource == 1 || $scope.tssJobSeekersInfoPrintModel.resumeSource == 2 ||
				$scope.tssJobSeekersInfoPrintModel.resumeSource == 3 || $scope.tssJobSeekersInfoPrintModel.resumeSource == 4 ||
				$scope.tssJobSeekersInfoPrintModel.resumeSource == 5 || $scope.tssJobSeekersInfoPrintModel.resumeSource == 6 ||
				$scope.tssJobSeekersInfoPrintModel.resumeSource == 7){
			$scope.tssJobSeekersInfoPrintModel.resumeSource1 = true;
		}else if($scope.tssJobSeekersInfoPrintModel.resumeSource == 9){
			$scope.tssJobSeekersInfoPrintModel.resumeSource2 = true;
		}else if($scope.tssJobSeekersInfoPrintModel.resumeSource == 10){
			$scope.tssJobSeekersInfoPrintModel.resumeSource3 = true;
		}else if($scope.tssJobSeekersInfoPrintModel.resumeSource == 8){
			$scope.tssJobSeekersInfoPrintModel.resumeSource4 = true;
		}else if($scope.tssJobSeekersInfoPrintModel.resumeSource == 11 || $scope.tssJobSeekersInfoPrintModel.resumeSource == 12){
			$scope.tssJobSeekersInfoPrintModel.resumeSource5 = true;
		}
		
		
		// 是否有朋友或亲属在本公司工作
		if($scope.tssJobSeekersInfoPrintModel.relativeOrFriend == 1){
			$scope.tssJobSeekersInfoPrintModel.relativeOrFriend2 = true;
		}else if($scope.tssJobSeekersInfoPrintModel.relativeOrFriend == 2){
			$scope.tssJobSeekersInfoPrintModel.relativeOrFriend1 = true;
		}
		
		// 语言
		if($scope.tssJobSeekersInfoPrintModel.language == 1){
			$scope.tssJobSeekersInfoPrintModel.language1 = true;
		}else if($scope.tssJobSeekersInfoPrintModel.language == 2){
			$scope.tssJobSeekersInfoPrintModel.language2 = true;
		}else if($scope.tssJobSeekersInfoPrintModel.language == 3){
			$scope.tssJobSeekersInfoPrintModel.language3 = true;
		}else if($scope.tssJobSeekersInfoPrintModel.rank != null){
			$scope.tssJobSeekersInfoPrintModel.language2 = true;
		}
				
	})
	.error(function(data) {
		elemeAlert.closeLoading();
		if (data == "40011") {
			elemeAlert.alert("40011");
		} else {
			elemeAlert.alert("40021");
		}
	})
	$scope.printClick = function(){
//		$scope.tssJobSeekersInfoPrintModel;
		jQuery('#PPrintIDD').print();
	}
	       $scope.exportWord = function(fileName) {
	            fileName = typeof fileName !== 'undefined' ? fileName : "jQuery-Word-Export";
	            var static = {
	                mhtml: {
	                    top: "Mime-Version: 1.0\nContent-Base: " + location.href + "\nContent-Type: Multipart/related; boundary=\"NEXT.ITEM-BOUNDARY\";type=\"text/html\"\n\n--NEXT.ITEM-BOUNDARY\nContent-Type: text/html; charset=\"utf-8\"\nContent-Location: " + location.href + "\n\n<!DOCTYPE html>\n<html>\n_html_</html>",
	                    head: "<head>\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">\n<style>\n</style>\n</head>\n",
	                    body: "<body>_body_</body>"
	                }
	            };
	            var options = {
	                maxWidth: 624
	            };
	            var markup = $("#printId").clone();
	            var images = Array();
	            var img = markup.find('img');
	            for (var i = 0; i < img.length; i++) {
	                // Calculate dimensions of output image
	                var w = Math.min(img[i].width, options.maxWidth);
	                var h = img[i].height * (w / img[i].width);
	                // Create canvas for converting image to data URL
	                var canvas = document.createElement("CANVAS");
	                canvas.width = w;
	                canvas.height = h;
	                // Draw image to canvas
	                var context = canvas.getContext('2d');
	                context.drawImage(img[i], 0, 0, w, h);
	                // Get data URL encoding of image
	                var uri = canvas.toDataURL("image/png");
	                $(img[i]).attr("src", img[i].src);
	                img[i].width = w;
	                img[i].height = h;
	                // Save encoded image to array
	                images[i] = {
	                    type: uri.substring(uri.indexOf(":") + 1, uri.indexOf(";")),
	                    encoding: uri.substring(uri.indexOf(";") + 1, uri.indexOf(",")),
	                    location: $(img[i]).attr("src"),
	                    data: uri.substring(uri.indexOf(",") + 1)
	                };
	            }

	            // Prepare bottom of mhtml file with image data
	            var mhtmlBottom = "\n";
	            for (var i = 0; i < images.length; i++) {
	                mhtmlBottom += "--NEXT.ITEM-BOUNDARY\n";
	                mhtmlBottom += "Content-Location: " + images[i].location + "\n";
	                mhtmlBottom += "Content-Type: " + images[i].type + "\n";
	                mhtmlBottom += "Content-Transfer-Encoding: " + images[i].encoding + "\n\n";
	                mhtmlBottom += images[i].data + "\n\n";
	            }
	            mhtmlBottom += "--NEXT.ITEM-BOUNDARY--";

	            //TODO: load css from included stylesheet
	            var styles = "";

	            // Aggregate parts of the file together
	            var fileContent = static.mhtml.top.replace("_html_", static.mhtml.head.replace("_styles_", styles) + static.mhtml.body.replace("_body_", markup.html())) + mhtmlBottom;

	            // Create a Blob with the file contents
	            var blob = new Blob([fileContent], {
	                type: "application/msword;charset=utf-8"
	            });
	            saveAs(blob, fileName + ".doc");
	        };
	

})
	//发送简历
	.controller('sendCandidateTable',function($rootScope, $scope, i18nService, $http, $modal,elemeAlert) {
		
		
		elemeAlert.openLoading();
		
		//接受修改过后的面试官信息
		$rootScope.$on("sendMain",function(event,msg){
			$scope.sendMain = msg;
		})
		
		$rootScope.$on("sendVice1",function(event,msg){
			$scope.sendVice1 = msg;
		})
		
		$rootScope.$on("sendVice2",function(event,msg){
			$scope.sendVice2 = msg;
		})
		
		
		
		
		
		$scope.close = function($hide){
			$hide();
		}
		$scope.cancel = function($hide){
			$hide();
		}
		
		//初试参数
		$scope.info = {
				token:sessionStorage.getItem("token"),
				jssId : $scope.jssId
		}
		
		$http(
				{
					method : "POST",
					url : localStorage.getItem("Url")
						+ "TSSInterviewRecordsServiceImpl/getInterviewers",
					data : JSON.stringify($scope.info)
		}).success(function(data){
			if(data.mainInterviewer != null){
				$scope.choosedIVer = data.mainInterviewer.psnname + "  " + data.mainInterviewer.deptname + "  " + data.mainInterviewer.postname;
				$scope.sendMain = data.mainInterviewer;
				// $rootScope.$emit("sendMainAuto",false);
			}
			if(data.fuList != null && data.fuList.length > 0 && data.fuList[0] != null){
				$scope.choosedIVer1 = data.fuList[0].psnname + "  " + data.fuList[0].deptname + "  " + data.fuList[0].postname;
				$scope.sendVice1 = data.fuList[0];
				// $rootScope.$emit("sendVice1Auto",false);
			}
			if(data.fuList != null && data.fuList.length > 1 && data.fuList[1] != null){
				$scope.choosedIVer2 = data.fuList[1].psnname + "  " + data.fuList[1].deptname + "  " + data.fuList[1].postname;
				$scope.sendVice2 = data.fuList[1];
				// $rootScope.$emit("sendVice2Auto",false);
			}
			
			//发送内容的标志
			$scope.sendAnnexFlag = false;
			$scope.sendCandidateTableFlag = false;
			//附件是否存在表示
			$scope.hasAnnexFlag = data.hasAnnexFlag;
			$scope.hasCandidateTableFlag = data.hasCandidateTableFlag;
			if(!$scope.hasAnnexFlag && !$scope.hasCandidateTableFlag){
				
				elemeAlert.alert("20125");
				$scope.hrModal.hide();
				elemeAlert.closeLoading();
			}
			elemeAlert.closeLoading();
			
			
		}).error(function(data){
			elemeAlert.alert("40014");
			elemeAlert.closeLoading();
		})
		
		
		
		
		$scope.submit = function($hide){
			
			elemeAlert.openLoading();

			if($scope.sendAnnexFlag==false && $scope.sendCandidateTableFlag==false){
				elemeAlert.alert("20126");
				elemeAlert.closeLoading();
				return;
			}
			
			if($scope.sendMain == null || $scope.sendMain == "" || $scope.sendMain.email == null){
				elemeAlert.alert("20091");
				elemeAlert.closeLoading();
				return;
			}
			
			
			$scope.info = {
					token:sessionStorage.getItem("token"),
					jssId : $scope.jssId,
					resultMain : $scope.sendMain,
					resultVice1 : $scope.sendVice1,
					resultVice2 : $scope.sendVice2,
					sendAnnexFlag : $scope.sendAnnexFlag,
					sendCandidateTableFlag : $scope.sendCandidateTableFlag
			}
			
			$http(
					{
						method : "POST",
						url : localStorage.getItem("Url")
							+"TSSInterviewRecordsServiceImpl/sendCandidateTables",
						data : JSON.stringify($scope.info)
			}).success(function(data){
				$hide();
				elemeAlert.alert("10026");//发送成功
				elemeAlert.closeLoading();
			}).error(function(data){
				elemeAlert.alert("40099");//发送失败
				elemeAlert.closeLoading();
			})
			
		}
		
		
		
		
	})
	
	
	.controller('sendCandidateTable1',function($rootScope, $scope, $compile, $http, elemeAlert, elemeTab) {
		
			$scope.init = 0;
			
			$scope.choosedIVerBlur=function(){
				if($scope.TSSInterviewRecords==null || $scope.choosedIVer == null || $scope.choosedIVer == ""){
					$scope.choosedIVer=null;
					var msg= {};
					$rootScope.$emit("sendMain",msg);
				}
			}
			
			$scope.$watch('choosedIVer', function (newVal, oldVal) {
				if (newVal !== oldVal && newVal != null && newVal.length > 0 && newVal.psnname == null) {
					
					$scope.init++;
					
					$scope.req ={
							token:sessionStorage.getItem("token"),
							psnname: newVal
					}
					elemeAlert.openLoading();
					$http({
						method: 'POST',
						url : localStorage.getItem("Url") + "TBEmployeeServiceImpl/getEmployeeList",
						data: JSON.stringify($scope.req)
					}).success(function(data){
//						$scope.employeeList = data.employeeList;
						console.log(new Date);
						$scope.$$childHead.matches = new Array();
						for (var int = 0; int < data.employeeList.length; int++) {
							var employee = {};
							employee.id=data.employeeList[int].psncode;
							employee.label=data.employeeList[int].psnname;
							employee.model = data.employeeList[int];
							$scope.$$childHead.matches.push(employee);
						}
						//初始化时值不会被清空
						if($scope.init > 1 && (data.employeeList == null || data.employeeList.length == 0)){
							$scope.choosedIVer=null;
							var msg= {};
							$rootScope.$emit("sendMain",msg);
						}
						console.log(new Date);
						elemeAlert.closeLoading();
					}).error(function(data){
						elemeAlert.closeLoading();
					})
				}
					$scope.getEmployee(newVal);

			}, true);
			$scope.getEmployee = function(e){
				if(e != null && e.mobile != null){
					$scope.TSSInterviewRecords = e;
					$rootScope.$emit("sendMain",e);
				}else{
					//选定面试官又清除后  同时清除相关的js参数
					if(e=="" || e==undefined){
						$rootScope.$emit("sendMain",e);
					}
					$scope.TSSInterviewRecords = null;
				}
			}
		})
		
		.controller('sendCandidateTable2',function($rootScope, $scope, $compile, $http, elemeAlert, elemeTab) {
			
			$scope.init = 0;
			
			$scope.choosedIVerBlur1=function(){
				if($scope.TSSInterviewRecords==null||$scope.choosedIVer1 == null || $scope.choosedIVer1 == ""){
					$scope.choosedIVer1=null;
					var msg= {};
					$rootScope.$emit("sendVice1",msg);
				}
			}
			
			$scope.$watch('choosedIVer1', function (newVal, oldVal) {
				
				$scope.init++;
				
				if (newVal !== oldVal && newVal != null && newVal.length > 0 && newVal.psnname == null) {
					$scope.req ={
							token:sessionStorage.getItem("token"),
							psnname: newVal
					}
					elemeAlert.openLoading();
					$http({
						method: 'POST',
						url : localStorage.getItem("Url") + "TBEmployeeServiceImpl/getEmployeeList",
						data: JSON.stringify($scope.req)
					}).success(function(data){
//						$scope.employeeList = data.employeeList;
						console.log(new Date);
						$scope.$$childHead.matches = new Array();
						for (var int = 0; int < data.employeeList.length; int++) {
							var employee1 = {};
							employee1.id=data.employeeList[int].psncode;
							employee1.label=data.employeeList[int].psnname;
							employee1.model = data.employeeList[int];
							$scope.$$childHead.matches.push(employee1);
						}
						if($scope.init > 2 && (data.employeeList == null || data.employeeList.length == 0)){
							$scope.choosedIVer1=null;
							var msg= {};
							$rootScope.$emit("sendVice1",msg);
						}
						elemeAlert.closeLoading();
					}).error(function(data){
						elemeAlert.closeLoading();
					})
				}
					$scope.getEmployee(newVal);
			}, true);
			$scope.getEmployee = function(e){
				if(e != null && e.mobile != null){
					$scope.TSSInterviewRecords = e;
					$rootScope.$emit("sendVice1",e);
				}else{
					if(e=="" || e==undefined){
						$rootScope.$emit("sendVice1",e);
					}
					$scope.TSSInterviewRecords = null;
				}
			}
		})
		
		.controller('sendCandidateTable3',function($rootScope, $scope, $compile, $http, elemeAlert, elemeTab) {
			
			$scope.init = 0;
			
			$scope.choosedIVerBlur2=function(){
				if($scope.TSSInterviewRecords==null||$scope.choosedIVer2 == null || $scope.choosedIVer2 == ""){
					$scope.choosedIVer2=null;
					var msg= {};
					$rootScope.$emit("sendVice2",msg);
				}
			}
			
			$scope.$watch('choosedIVer2', function (newVal, oldVal) {
				
				$scope.init++;
				
				if (newVal !== oldVal && newVal != null && newVal.length > 0 && newVal.psnname == null) {
					$scope.req ={
							token:sessionStorage.getItem("token"),
							psnname: newVal
					}
					elemeAlert.openLoading();
					$http({
						method: 'POST',
						url : localStorage.getItem("Url") + "TBEmployeeServiceImpl/getEmployeeList",
						data: JSON.stringify($scope.req)
					}).success(function(data){
//						$scope.employeeList = data.employeeList;
						console.log(new Date);
						$scope.$$childHead.matches = new Array();
						for (var int = 0; int < data.employeeList.length; int++) {
							var employee2 = {};
							employee2.id=data.employeeList[int].psncode;
							employee2.label=data.employeeList[int].psnname;
							employee2.model = data.employeeList[int];
							$scope.$$childHead.matches.push(employee2);
						}
						if($scope.init > 2 && (data.employeeList == null || data.employeeList.length == 0)){
							$scope.choosedIVer2=null;
							var msg= {};
							$rootScope.$emit("sendVice2",msg);
						}
						elemeAlert.closeLoading();
					}).error(function(data){
						elemeAlert.closeLoading();
					})
				}
					$scope.getEmployee(newVal);
			}, true);
			$scope.getEmployee = function(e){
				if(e != null && e.mobile != null){
					$scope.TSSInterviewRecords = e;
					$rootScope.$emit("sendVice2",e);
				}else{
					if(e=="" || e==undefined){
						$rootScope.$emit("sendVice2",e);
					}
					$scope.TSSInterviewRecords = null;
				}
			}
		})
TSSAPP.controller(
	'searchDepartment',
	function($rootScope, $scope, $compile, $http, elemeAlert, elemeTab) {

		$scope.getTreeEmpInfo = function (dptId) {
			$scope.roleList = new Array();
			elemeAlert.openLoading();
			$scope.req ={
				token:localStorage.getItem("token"),
				req:{id:dptId}//id:0007
			}
			$http({
				method: 'POST',
				url : localStorage.getItem("Url") + "TSSRegisterInfoServiceImpl/getDepartmentTreeInfo",
				data: JSON.stringify($scope.req)
			}).success(function(data){
				elemeAlert.closeLoading();
				if (data.treeinfo != null) {
					for (var int = 0; int < data.treeinfo.length; int++) {
						$scope.roleListTmp = eval("(" + data.treeinfo[int] + ")");//str转成JSON
						for (var i = 0; i < $scope.roleListTmp.length; i++) {
							$scope.roleList.push($scope.roleListTmp[i]);
						}
					}
				}

//					  if($scope.dptid != null){
//						  $("#" + $scope.dptid).addClass("selected"); // 追加样式
//						  $("#" + $scope.dptid).css("color","red"); // 追加样式
////						  document.getElementById($scope.dptid).className="selected";
//					  }
				setTimeout(function () {
					if($scope.dptid != null){
						$("#" + $scope.dptid).addClass("selected"); // 追加样式
//						  $("#" + $scope.dptid).css("color","red"); // 追加样式
					}
				}, 100);
//					  $scope.roleList = eval("(" + data.treeinfo + ")");//str转成JSON
			}).error(function(data){
				elemeAlert.closeLoading();
				if(data == "40026"){
					elemeAlert.alert("40026");
				}else{
					elemeAlert.alert("40046");
				}
			})
		}

		window.onload=function(){
			alert('加载完成');

		}

		$scope.getTreeEmpInfo(null);

		$scope.$watch( 'mytree.currentNode', function( newObj, oldObj ) {
			if( $scope.mytree && angular.isObject($scope.mytree.currentNode) ) {
				$scope.dpt = $scope.mytree.currentNode.label;
				$scope.dptid = $scope.mytree.currentNode.id;
				$scope.checkFlag = 1;
				for (var int = 0; int < $scope.roleList.length; int++) {
					if($scope.checkFlag == 1){
						$scope.getCompany($scope.roleList[int],$scope.dptid,int);
					}
				}
				$scope.getTreeEmpInfo($scope.dptid);
			}
		}, false);

		$scope.getCompany = function (obj,dptid,numTmp) {
			if(numTmp != null){
				$scope.companyId = numTmp;
				$scope.companyName = obj.label;
			}
			if(obj != null && obj.children != null && obj.children.length > 0){
				for (var int = 0; int < obj.children.length; int++) {
					if(dptid == obj.children[int].id){
						$scope.checkFlag = 2;
						break;
					}else{
						$scope.getCompany(obj.children[int],dptid);
					}
				}
			}
		}
		$scope.add = function (hide) {
//				$rootScope.deptName = $scope.dpt;
//				$rootScope.deptId = $scope.dptid;
//				$rootScope.companyName = $scope.companyName;
			$scope.comDept ={};
			$scope.comDept.deptName = $scope.dpt.split("(")[0];
			$scope.comDept.deptId = $scope.dptid;
			//不能选择    公司名称
			if($scope.dptid=="01" || $scope.dptid=="02"){
				return;
			}
			$scope.comDept.companyName = $scope.companyName;
			$rootScope
				.$emit(
					"getComDepartment",
					$scope.comDept);
			hide();
		}
	})
