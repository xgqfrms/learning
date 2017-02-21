TSSAPP
		.controller(
				'pcOffer',
				function($rootScope, $scope, i18nService, $http, $modal,
						elemeTab, elemeSearch, elemeAlert,elemeEnumType,resumeSourcePoolService,elemeUigrid,$filter) {
//					var Ohref = window.location.href;
//					var arrhref = Ohref.split("?");
//					if(arrhref.length > 2){
//						$scope.jssid = arrhref[1];
//						if(arrhref[2] == 1){
//							//应聘登记						
//							$scope.checkFlag = true;
//						}else if(arrhref[2] == 2){
//							//录用登记
//							$scope.checkFlag = false;
//						}
//					}
					if(localStorage.getItem("success") == null){
						window.location.href = "tss_collect_login.html";
					}
					//应聘登记
					//没有走面试直接维护录用结果  也要进入录用环节
//					if(localStorage.getItem("interviewFlag") == 1){
					if(JSON.parse(localStorage.getItem("info")).jssStatus != 21 && JSON.parse(localStorage.getItem("info")).jssStatus != 22){
						$scope.checkFlag = true;//应聘登记
					}else{
						$scope.checkFlag = false;//录用登记
					}
					
					
					/* 性别 */
					var sex = "E001";
					/* 身份证件类型 */
					var idName = "E002";
					/* 户口性质 */
					var hukouType = "E003";
					/* 健康状况 */
					var healthStatus = "E004";
					/* 婚姻状况 */
					var marriageStatus = "E005";
					/* 生育状况 */
					var birthStatus = "E006";
					/* 政治面貌 */
					var politicsStatus = "E007";
					/* 最高学历 */
					var highestdegree = "E012";
					
					/* 民族 */
					var nationality = "E033";
					/* 学位 */
					var prdegree = "E034";
					/* 招聘来源 */
//					var resumeSource = "E035";
					/* 居住证申领情况 */
					var residentialPass = "E036";
					/* 血型 */
					var bloodType = "E039";
					/* 亲朋在本公司 */
					var relativeOrFriend = "E049";
					/* 是否标志 */
					var yesOrNo = "E038";
					/* 与联系人关系*/
					var relationship = "E037";
					/* 出差意向*/
					var travelIntention = "E046";
					/* 居住证申领情况*/
					var residentialPass = "E036";
					//可报到日期
					var checkInDate = "E052";

					
					$scope.enumTypeList = new Array();
					$scope.enumTypeList.push(sex);
//					$scope.enumTypeList.push(resumeSource);
					$scope.enumTypeList.push(idName);
					$scope.enumTypeList.push(hukouType);
					$scope.enumTypeList.push(healthStatus);
					$scope.enumTypeList.push(marriageStatus);
					$scope.enumTypeList.push(birthStatus);
					$scope.enumTypeList.push(politicsStatus);
					$scope.enumTypeList.push(highestdegree);
					$scope.enumTypeList.push(nationality);
					$scope.enumTypeList.push(prdegree);
					$scope.enumTypeList.push(residentialPass);
					$scope.enumTypeList.push(bloodType);
					$scope.enumTypeList.push(relativeOrFriend);
					$scope.enumTypeList.push(yesOrNo);
					$scope.enumTypeList.push(relationship);
					$scope.enumTypeList.push(travelIntention);
					$scope.enumTypeList.push(residentialPass);
					$scope.enumTypeList.push(checkInDate);
					var mbCatList = new Array();
					for (var int = 0; int < $scope.enumTypeList.length; int++) {
						mbCatList.push($scope.enumTypeList[int]);
					}
					var num = {
						numList : mbCatList
					}

					$http(
							{
								method : 'POST',
								url : localStorage.getItem("Url")
										+ "TSSEnumTypeInfoServiceImpl/getEnumTypeInfoList",
								data : JSON.stringify(num)
							}).success(function(data) {
						// elemeAlert.closeLoading();
						$rootScope.sexList = data[sex];
//						$rootScope.resumeSourceList = data[resumeSource];
						$rootScope.idNameList = data[idName];
						$rootScope.hukouTypeList = data[hukouType];
						$rootScope.healthStatusList = data[healthStatus];
						$rootScope.marriageStatusList = data[marriageStatus];
						$rootScope.birthStatusList = data[birthStatus];
						$rootScope.politicsStatusList = data[politicsStatus];
						$rootScope.educationBgList = data[highestdegree];
						$rootScope.nationalityList = data[nationality];
						$rootScope.prdegreeList = data[prdegree];
						$rootScope.residentialPassList = data[residentialPass];
						$rootScope.bloodTypeList = data[bloodType];
						$rootScope.relativeOrFriendList = data[relativeOrFriend];
						$rootScope.yesOrNoList = data[yesOrNo];
						$rootScope.relationshipList = data[relationship];
						$rootScope.travelIntentionList = data[travelIntention];
						$rootScope.historyOfCrimeList = data[relativeOrFriend];
						$rootScope.isHighestDegreeList = data[yesOrNo];
						$rootScope.residentialPassList = data[residentialPass];
						$rootScope.checkInDateList = data[checkInDate];
						
//						获得下拉框的value值
						if($scope.pfInfo != null){
							if($scope.pfInfo.sex != null){
								$scope.pfInfo.sexValue = $rootScope.sexList[$scope.pfInfo.sex-1].enumValue;
							}
							if($scope.pfInfo.hukouType != null){
								$scope.pfInfo.hukouTypeValue = $rootScope.hukouTypeList[$scope.pfInfo.hukouType-1].enumValue;
							}
							if($scope.pfInfo.nationality != null){
								$scope.pfInfo.nationalityValue = $rootScope.nationalityList[$scope.pfInfo.nationality-1].enumValue;
							}
							if($scope.pfInfo.healthStatus != null){
								$scope.pfInfo.healthStatusValue = $rootScope.healthStatusList[$scope.pfInfo.healthStatus-1].enumValue;
							}
							if($scope.pfInfo.politicsStatus != null){
								$scope.pfInfo.politicsStatusValue = $rootScope.politicsStatusList[$scope.pfInfo.politicsStatus-1].enumValue;
							}
							if($scope.pfInfo.bloodType != null){
								$scope.pfInfo.bloodTypeValue = $rootScope.bloodTypeList[$scope.pfInfo.bloodType-1].enumValue;
							}
							if($scope.pfInfo.historyOfCrime != null){
								$scope.pfInfo.historyOfCrimeValue = $rootScope.historyOfCrimeList[$scope.pfInfo.historyOfCrime-1].enumValue;
							}
							if($scope.pfInfo.relativeOrFriend != null){
								$scope.pfInfo.relativeOrFriendValue = $rootScope.relativeOrFriendList[$scope.pfInfo.relativeOrFriend-1].enumValue;
							}
							if($scope.pfInfo.marriageStatus != null){
								$scope.pfInfo.marriageStatusValue = $rootScope.marriageStatusList[$scope.pfInfo.marriageStatus-1].enumValue;
							}
							if($scope.pfInfo.birthStatus != null){
								$scope.pfInfo.birthStatusValue = $rootScope.birthStatusList[$scope.pfInfo.birthStatus-1].enumValue;
							}
							if($scope.pfInfo.educationBg != null){
								$scope.pfInfo.educationBgValue = $rootScope.educationBgList[$scope.pfInfo.educationBg-1].enumValue;
							}
							if($scope.pfInfo.prdegree != null){
								$scope.pfInfo.prDegreeValue = $rootScope.prdegreeList[$scope.pfInfo.prdegree-1].enumValue;
							}
//							if($scope.pfInfo.resumeSource != null){
//								$scope.pfInfo.resumeSourceValue = $rootScope.resumeSourceList[$scope.pfInfo.resumeSource-1].enumValue;
//							}
							if($scope.pfInfo.onTheJob != null){
								$scope.pfInfo.onTheJobValue = $rootScope.yesOrNoList[$scope.pfInfo.onTheJob-1].enumValue;
							}
							if($scope.am != null){
								if($scope.am.travelIntention != null){
									$scope.am.travelIntentionValue = $rootScope.travelIntentionList[$scope.am.travelIntention-1].enumValue;
								}
								if($scope.am.checkInDate != null){
									$scope.am.checkInDateValue = $rootScope.checkInDateList[$scope.am.checkInDate-1].enumValue;
								}
							}
							if($scope.entr != null){
								if($scope.entr.residentialPass != null){
									$scope.entr.residentialPassValue = $rootScope.residentialPassList[$scope.entr.residentialPass-1].enumValue;
								}
							}
							if($scope.eduInfoList != null){
								for(var a = 0; a < $scope.eduInfoList.length; a++){
									if($scope.eduInfoList[a].highestDegree != null){
										$scope.eduInfoList[a].highestDegreeValue = $rootScope.isHighestDegreeList[$scope.eduInfoList[a].highestDegree-1].enumValue;
									}
								}
							}
						}
						//与联系人关系
//						if($scope.contactInfoList != null){
//							for( var int7 = 0; int7 < $scope.contactInfoList.length; int7++){
//								$scope.contactInfoList[int7].relationshipValue = $rootScope.relationshipList[$scope.contactInfoList[int7].relationship-1].enumValue;
//								$scope.contactInfoList[int7].isPrimaryValue = $rootScope.yesOrNoList[$scope.contactInfoList[int7].isPrimary-1].enumValue;
//							}
//						}
//						//是否最高学历
//						if($scope.eduInfoList != null && $scope.eduInfoList.length > 0){
//							for (var int5 = 0; int5 < $scope.eduInfoList.length; int5++) {
//								if($scope.eduInfoList[int5].highestDegree != null){
//									$scope.eduInfoList[int5].highestDegreeValue = $rootScope.yesOrNoList[$scope.eduInfoList[int5].highestDegree-1].enumValue;
//								}
//								
//							}
//						}

					}).error(function(data) {
					});
					
					
//					查询基本信息 学历信息 履历信息 紧急联系人
//					$scope.info = {
//							/*token : sessionStorage.getItem("token"),*/
//							jssId : $scope.jssid
//					}
//					$http(
//							{
//								method : 'POST',
//								url : localStorage.getItem("Url")
//								+ "TSSJobSeekersInfoServiceImpl/getJssBaseInfo",
//								data : JSON.stringify($scope.info)
//							}).success(function(data){
//								
//							}).error(function(data){
//								
//							});
					
					//录用最终结果表查询结果
					/*$scope.regInfo = angular.copy(data.register);*/
					//求职者信息表  录用登记时用到
//					$scope.payBgInfo = angular.copy(data.payBgInfo);
					
					$scope.eduInfoList = JSON.parse(localStorage.getItem("educationList"));
					$scope.workInfoList = JSON.parse(localStorage.getItem("workExpInfoList"));
					$scope.trainInfoList = JSON.parse(localStorage.getItem("trainExpList"));
					$scope.proInfoList = JSON.parse(localStorage.getItem("projectExpInfoList"));
					$scope.certInfoList = JSON.parse(localStorage.getItem("obtainCerList"));
					$scope.contactInfoList = JSON.parse(localStorage.getItem("linkManList"));
					//补录信息
					$scope.pfInfo = JSON.parse(localStorage.getItem("info"));
					if(localStorage.getItem("ambition") == null){
						$scope.am = JSON.parse(localStorage.getItem("info"));
					}else{
						$scope.am = JSON.parse(localStorage.getItem("ambition"));
					}
					if(localStorage.getItem("entr") == null){
						$scope.entr = JSON.parse(localStorage.getItem("info"));
					}else{
						$scope.entr = JSON.parse(localStorage.getItem("entr"));
					}
					
					
					//是否完成提交
					$scope.collectSuccess = localStorage.getItem("collectSuccess");
					$scope.infoFlag = localStorage.getItem("infoFlag");
					$scope.interviewFlag = localStorage.getItem("interviewFlag");
					
					if($scope.collectSuccess != null){
						$scope.infoFlag = "OK";
					}
					
					if($scope.infoFlag == null){
						if($scope.pfInfo.jssStatus == 21){
							$scope.infoFlag = "OK";
						}
					}
					
					//参加工作日期
					if($scope.pfInfo != null){
						$scope.pfInfo.workStartDate = $filter('date')($scope.pfInfo.workStartDate,'yyyy-MM-dd');
					}
					//出生日期
					if($scope.pfInfo != null){
						$scope.pfInfo.birthday = $filter('date')($scope.pfInfo.birthday,'yyyy-MM-dd');
					}
					
//					紧急联系人
//					if(data.pri != undefined){
//						$scope.pcInfoList = angular.copy(data.pri);
//					}
					if($scope.trainInfoList != null && $scope.trainInfoList.length > 0){
						for (var int2 = 0; int2 < $scope.trainInfoList.length; int2++) {
							$scope.trainInfoList[int2].startDate = $filter('date')($scope.trainInfoList[int2].startDate,'yyyy-MM-dd');
							$scope.trainInfoList[int2].endDate = $filter('date')($scope.trainInfoList[int2].endDate,'yyyy-MM-dd');
							if($scope.trainInfoList[int2].playingRole != null){
								$scope.trainInfoList[int2].playingRole = $scope.trainInfoList[int2].playingRole.replace(new RegExp(/(？)/g),' ');
							}
							if($scope.trainInfoList[int2].jobDuties != null){
								$scope.trainInfoList[int2].jobDuties = $scope.trainInfoList[int2].jobDuties.replace(new RegExp(/(？)/g),' ');
							}
							
						}
					}
					if($scope.workInfoList != null && $scope.workInfoList.length > 0){
						for (var int3 = 0; int3 < $scope.workInfoList.length; int3++) {
							$scope.workInfoList[int3].startDate = $filter('date')($scope.workInfoList[int3].startDate,'yyyy-MM-dd');
							$scope.workInfoList[int3].endDate = $filter('date')($scope.workInfoList[int3].endDate,'yyyy-MM-dd');
//							$scope.workInfoList[int3].jobDuties = $scope.workInfoList[int3].jobDuties.replace(new RegExp(/(?)/g),' ');
						}
					}
//					if($scope.trainInfoList != null && $scope.trainInfoList.length > 0){
//						for (var int4 = 0; int4 < $scope.trainInfoList.length; int4++) {
//							$scope.trainInfoList[int4].startDate = $filter('date')($scope.trainInfoList[int4].startDate,'yyyy-MM-dd');
//							$scope.trainInfoList[int4].endDate = $filter('date')($scope.trainInfoList[int4].endDate,'yyyy-MM-dd');
//
//						}
//					}
					if($scope.proInfoList != null && $scope.proInfoList.length > 0){
						for( var a = 0 ; a < $scope.proInfoList.length; a++){
							$scope.proInfoList[a].startDate = $filter('date')($scope.proInfoList[a].startDate,'yyyy-MM-dd');
							$scope.proInfoList[a].endDate = $filter('date')($scope.proInfoList[a].endDate,'yyyy-MM-dd');
						}
					}
					
					
					if($scope.certInfoList != null & $scope.certInfoList.length > 0){
						for(var int6 = 0; int6 < $scope.certInfoList.length; int6++){
							$scope.certInfoList[int6].getDate = $filter('date')($scope.certInfoList[int6].getDate,'yyyy-MM-dd');
						}
					}

							
//					修改个人基本信息
					$scope.changeBaseInfo = function(){
						$scope.addInfo = angular.copy($scope.pfInfo);
						if($scope.addInfo.historyOfCrime != null){
							$scope.addInfo.historyOfCrime = parseInt($scope.addInfo.historyOfCrime);
						}
						$scope.addInfo.prDegree = $scope.addInfo.prdegree;
						var modal = $modal({
							template : "modals/modal_pc_change_baseinfo.html",
							// persist: true,
							show : true,
							backdrop : 'static',
							scope : $scope,
							keyboard : false
						});
						modal.$promise.then(modal.show);	
					}
					
//					新增教育经历
					$scope.addEduInfo = function(){
						$scope.addEduInfoFlag = true;
						$scope.eInfo = "";
						var modal = $modal({
							template : "modals/modal_pc_change_eduinfo.html",
							// persist: true,
							show : true,
							backdrop : 'static',
							scope : $scope,
							keyboard : false
						});
						modal.$promise.then(modal.show);	
					}
					
//					修改教育经验
					$scope.changeEduInfo = function(index){
						$scope.addEduInfoFlag = false;
						$scope.eInfo = angular.copy($scope.eduInfoList[index]);
						$scope.eduIndex = index;
						var modal = $modal({
							template : "modals/modal_pc_change_eduinfo.html",
							// persist: true,
							show : true,
							backdrop : 'static',
							scope : $scope,
							keyboard : false
						});
						modal.$promise.then(modal.show);	
					}
//					删除教育经历
					$scope.educationListdele = new Array();
					$scope.deleteEdu = function(index){
						if($scope.eduInfoList[index].jssEduId != null){
//							$scope.educationListdele.push($scope.educationList[index]);
							$scope.educationListdele.push($scope.eduInfoList[index]);
						}
						$scope.eduInfoList.splice(index,1);
						localStorage.setItem("educationList",JSON.stringify($scope.eduInfoList));
//						$rootScope.$emit("deleteeduInfo",$scope.eduInfoList);
					}
					
//					新增履历经历
					$scope.addWorkInfo = function(){
						$scope.addWorkInfoFlag = true;
						$scope.wInfo = "";
						var modal = $modal({
							template : "modals/modal_pc_change_workinfo.html",
							// persist: true,
							show : true,
							backdrop : 'static',
							scope : $scope,
							keyboard : false
						});
						modal.$promise.then(modal.show);	
					}
					
//					修改履历经历
					$scope.changeWorkInfo = function(index){
						$scope.addWorkInfoFlag = false;
						$scope.wInfo = angular.copy($scope.workInfoList[index]);
						$scope.workIndex = index;
						var modal = $modal({
							template : "modals/modal_pc_change_workinfo.html",
							// persist: true,
							show : true,
							backdrop : 'static',
							scope : $scope,
							keyboard : false
						});
						modal.$promise.then(modal.show);	
					}
					
//					删除履历记录
					$scope.workExpInfoListdele = new Array();
					$scope.deleteWorkInfo = function(index){
						if($scope.workInfoList[index].jsswkeId != null){
							$scope.workExpInfoListdele.push($scope.workInfoList[index]);
						}
						$scope.workInfoList.splice(index,1);
						localStorage.setItem("workExpInfoList",JSON.stringify($scope.workInfoList));
//						$rootScope.$emit("deleteworkInfo",$scope.workInfoList);
					}
					
//					新增联系人信息
					$scope.addContactInfo = function(){
						$scope.addContactInfoFlag = true;
						$scope.contactInfo = "";
						var modal = $modal({
							template : "modals/modal_pc_change_contact.html",
							// persist: true,
							show : true,
							backdrop : 'static',
							scope : $scope,
							keyboard : false
						});
						modal.$promise.then(modal.show);	
					}
					
//					修改联系人信息
					$scope.changeContactInfo = function(index){
						$scope.addContactInfoFlag = false;
						$scope.contactInfo = angular.copy($scope.contactInfoList[index]);
						$scope.contactIndex = index;
						var modal = $modal({
							template : "modals/modal_pc_change_contact.html",
							// persist: true,
							show : true,
							backdrop : 'static',
							scope : $scope,
							keyboard : false
						});
						modal.$promise.then(modal.show);	
					}
					
//					删除联系人
					$scope.linkManListdele = new Array();
					$scope.deleteContactInfo = function(index){
						if($scope.contactInfoList[index].pciid != null){
							$scope.linkManListdele.push($scope.contactInfoList[index]);
						}
						$scope.contactInfoList.splice(index,1);
						localStorage.setItem("linkManList",JSON.stringify($scope.contactInfoList));
//						$rootScope.$emit("deleteContactInfo",$scope.contactInfoList);
					}
					
//					新建培训经历
					$scope.addTrainInfo = function(){
						$scope.addTrainInfoFlag = true;
						$scope.tInfo = "";
						var modal = $modal({
							template : "modals/modal_pc_change_traininfo.html",
							// persist: true,
							show : true,
							backdrop : 'static',
							scope : $scope,
							keyboard : false
						});
					}
					
//					修改培训经历
					$scope.changeTrainInfo = function(index){
						$scope.addTrainInfoFlag = false;
						$scope.tInfo = angular.copy($scope.trainInfoList[index]);
						$scope.trainIndex = index;
						var modal = $modal({
							template : "modals/modal_pc_change_traininfo.html",
							// persist: true,
							show : true,
							backdrop : 'static',
							scope : $scope,
							keyboard : false
						});
					}
					
//					删除培训记录
					$scope.trainExpListdele = new Array();
					$scope.deleteTrainInfo = function(index){
						if($scope.trainInfoList[index].teid != null){
							$scope.trainExpListdele.push($scope.trainInfoList[index]);
						}
						$scope.trainInfoList.splice(index,1);
						localStorage.setItem("trainExpList",JSON.stringify($scope.trainInfoList));
//						$rootScope.$emit("deletetrainInfo",$scope.trianInfoList);
					}
					
//					新建项目经验
					$scope.addProInfo = function(){
						$scope.addProInfoFlag = true;
						$scope.pInfo = "";
						var modal = $modal({
							template : "modals/modal_pc_change_proinfo.html",
							// persist: true,
							show : true,
							backdrop : 'static',
							scope : $scope,
							keyboard : false
						});
					}
					
//					修改项目经验
					$scope.changeProInfo = function(index){
						$scope.addProInfoFlag = false;
						$scope.pInfo = angular.copy($scope.proInfoList[index]);
						$scope.proIndex = index;
						var modal = $modal({
							template : "modals/modal_pc_change_proinfo.html",
							// persist: true,
							show : true,
							backdrop : 'static',
							scope : $scope,
							keyboard : false
						});
					}
					
//					删除项目经验
					$scope.projectExpInfoListdele = new Array();
					$scope.deleteProInfo = function(index){
						if($scope.proInfoList[index].jsspteid != null){
							$scope.projectExpInfoListdele.push($scope.proInfoList[index]);
						}
						$scope.proInfoList.splice(index,1);
						localStorage.setItem("projectExpInfoList",JSON.stringify($scope.proInfoList));
//						$rootScope.$emit("deleteproInfo",$scope.proInfoList);
					}
					
//					新建证书
					$scope.addCertInfo = function(){
						$scope.addCertInfoFlag = true;
						$scope.ceInfo = "";
						var modal = $modal({
							template : "modals/modal_pc_change_certinfo.html",
							// persist: true,
							show : true,
							backdrop : 'static',
							scope : $scope,
							keyboard : false
						});
					}
					
//					修改证书
					$scope.changeCertInfo = function(index){
						$scope.addCertInfoFlag = false;
						$scope.ceInfo = angular.copy($scope.certInfoList[index]);
						$scope.certIndex = index;
						var modal = $modal({
							template : "modals/modal_pc_change_certinfo.html",
							// persist: true,
							show : true,
							backdrop : 'static',
							scope : $scope,
							keyboard : false
						});
					}
					
//					删除证书
					$scope.rewardInfoListdele = new Array();
					$scope.deleteCertInfo = function(index){
						if($scope.certInfoList[index].ocid != null){
							$scope.rewardInfoListdele.push($scope.certInfoList[index]);
						}
						$scope.certInfoList.splice(index,1);
						localStorage.setItem("obtainCerList",JSON.stringify($scope.certInfoList));
//						$rootScope.$emit("deletecertInfo",$scope.certInfoList);
					}
					
//					新建自我评价
				/*	$scope.addSelfInfo = function(){
						$scope.addSelfInfoFlag = true;
						$scope.selfEvaluation = "";
						var modal = $modal({
							template : "modals/modal_pc_change_selfeval.html",
							// persist: true,
							show : true,
							backdrop : 'static',
							scope : $scope,
							keyboard : false
						});
					}*/
					
//					修改自我评价
					$scope.changeSelfInfo = function(){
						$scope.addSelfInfoFlag = false;
						if($scope.pfInfo != null){
							$scope.selfEvaluation = $scope.pfInfo.selfEvaluate;
						}
						
						var modal = $modal({
							template : "modals/modal_pc_change_selfeval.html",
							// persist: true,
							show : true,
							backdrop : 'static',
							scope : $scope,
							keyboard : false
						});
					}
					
//					新建求职意向
					/*$scope.addAmbitionInfo = function(){
						$scope.addAmbitionInfoFlag = true;
						$scope.aInfo = "";
						var modal = $modal({
							template : "modals/modal_pc_change_ambition.html",
							// persist: true,
							show : true,
							backdrop : 'static',
							scope : $scope,
							keyboard : false
						});
					}*/
					
//					修改求职意向
					$scope.changeAmbitionInfo = function(){
//						$scope.addAmbitionInfoFlag = false;
						$scope.aInfo = angular.copy($scope.am);
						var modal = $modal({
							template : "modals/modal_pc_change_ambition.html",
							// persist: true,
							show : true,
							backdrop : 'static',
							scope : $scope,
							keyboard : false
						});
					}
					
//					修改入职资料
					$scope.changeEntrInfo = function(){
						$scope.entrInfo = angular.copy($scope.entr);
						$scope.entrInfo.bankName = "中国工商银行";
						var modal = $modal({
							template : "modals/modal_pc_change_entrinfo.html",
							// persist: true,
							show : true,
							backdrop : 'static',
							scope : $scope,
							keyboard : false
						});
					}
					
					$rootScope.$on("pfInfo",function(event,msg){
						$scope.pfInfo = msg;
						localStorage.setItem("info",JSON.stringify(msg));
						$scope.infoFlag = "OK";
					})
					$rootScope.$on("addeduInfo",function(event,msg){
						if($scope.eduInfoList != undefined){
							$scope.eduInfoList[$scope.eduInfoList.length] = msg;
						}else{
							$scope.eduInfoList = [];
							$scope.eduInfoList[0] = msg;
						}
						localStorage.setItem("educationList",JSON.stringify($scope.eduInfoList));
						
					})
					$rootScope.$on("changeeduInfo",function(event,msg){
						$scope.eduInfoList[$scope.eduIndex] = msg;
						localStorage.setItem("educationList",JSON.stringify($scope.eduInfoList));
					})
//					$rootScope.$on("deleteeduInfo",function(event,msg){
//						$scope.eduInfoList = msg;
//						localStorage.setItem("educationList",JSON.stringify($scope.eduInfoList));
//					})
					$rootScope.$on("addWorkInfo",function(event,msg){
						if($scope.workInfoList != undefined){
							$scope.workInfoList[$scope.workInfoList.length] = msg;
						}else{
							$scope.workInfoList = [];
							$scope.workInfoList[0] = msg;
						}
						localStorage.setItem("workExpInfoList",JSON.stringify($scope.workInfoList));
					})
					$rootScope.$on("changeWorkInfo",function(event,msg){
						$scope.workInfoList[$scope.workIndex] = msg;
						localStorage.setItem("workExpInfoList",JSON.stringify($scope.workInfoList));
					})
//					$rootScope.$on("deleteworkInfo",function(event,msg){
//						$scope.workInfoList = msg;
//						localStorage.setItem("workExpInfoList",JSON.stringify($scope.workInfoList));
//					})
					$rootScope.$on("addContactInfo",function(event,msg){
						if($scope.contactInfoList != undefined){
							$scope.contactInfoList[$scope.contactInfoList.length] = msg;
						}else{
							$scope.contactInfoList = [];
							$scope.contactInfoList[0] = msg;
						}
						localStorage.setItem("linkManList",JSON.stringify($scope.contactInfoList));
					})
					$rootScope.$on("changeContactInfo",function(event,msg){
						$scope.contactInfoList[$scope.contactIndex] = msg;
						localStorage.setItem("linkManList",JSON.stringify($scope.contactInfoList));
					})
//					$rootScope.$on("deleteContactInfo",function(event,msg){
//						$scope.pcInfoList = msg;
//						localStorage.setItem("linkManList",JSON.stringify($scope.contactInfoList));
//					})
					$rootScope.$on("addTrainInfo",function(event,msg){
						if($scope.trainInfoList != undefined){
							$scope.trainInfoList[$scope.trainInfoList.length] = msg;
						}else{
							$scope.trainInfoList = [];
							$scope.trainInfoList[0] = msg;
						}
						localStorage.setItem("trainExpList",JSON.stringify($scope.trainInfoList));
					})
					$rootScope.$on("changeTrainInfo",function(event,msg){
						$scope.trainInfoList[$scope.trainIndex] = msg;
						localStorage.setItem("trainExpList",JSON.stringify($scope.trainInfoList));
					})
//					$rootScope.$on("deletetrainInfo",function(event,msg){
//						$scope.trainInfoList = msg;
//						localStorage.setItem("trainExpList",JSON.stringify($scope.trainInfoList));
//					})
					$rootScope.$on("addProInfo",function(event,msg){
						if($scope.proInfoList != undefined){
							$scope.proInfoList[$scope.proInfoList.length] = msg;
						}else{
							$scope.proInfoList = [];
							$scope.proInfoList[0] = msg;
						}
						localStorage.setItem("projectExpInfoList",JSON.stringify($scope.proInfoList));
					})
					$rootScope.$on("changeProInfo",function(event,msg){
						$scope.proInfoList[$scope.proIndex] = msg;
						localStorage.setItem("projectExpInfoList",JSON.stringify($scope.proInfoList));
					})
//					$rootScope.$on("deleteproInfo",function(event,msg){
//						$scope.proInfoList = msg;
//						localStorage.setItem("projectExpInfoList",JSON.stringify($scope.proInfoList));
//					})
					$rootScope.$on("addCertInfo",function(event,msg){
						if($scope.certInfoList != undefined){
							$scope.certInfoList[$scope.certInfoList.length] = msg;
						}else{
							$scope.certInfoList = [];
							$scope.certInfoList[0] = msg;
						}
						localStorage.setItem("obtainCerList",JSON.stringify($scope.certInfoList));
					})
					$rootScope.$on("changeCertInfo",function(event,msg){
						$scope.certInfoList[$scope.certIndex] = msg;
						localStorage.setItem("obtainCerList",JSON.stringify($scope.certInfoList));
					})
//					$rootScope.$on("deletecertInfo",function(event,msg){
//						$scope.certInfoList = msg;
//						localStorage.setItem("obtainCerList",JSON.stringify($scope.certInfoList));
//					})
					$rootScope.$on("changeSelfEvalInfo",function(event,msg){
						$scope.pfInfo.selfEvaluate = msg;
						localStorage.setItem("selfEvaluate",JSON.stringify(msg));
					})
					$rootScope.$on("changeAmbitionInfo",function(event,msg){
						$scope.am = msg;
						localStorage.setItem("ambition",JSON.stringify(msg));
					})
					$rootScope.$on("changeEntrInfo",function(event,msg){
						$scope.entr = msg;
						localStorage.setItem("entr",JSON.stringify(msg));
					})
					
					
					
					
					
//					提交按钮
					$scope.submit = function(){
						
//						$scope.info = JSON.parse(localStorage.getItem("info"));
//						//基本信息的填写
//						if($scope.info != null && $scope.info != ""){
//							if($scope.info.idNo == null || $scope.info.idNo == "" ||
//									$scope.info.birthday == null || $scope.info.birthday == "" ||
//									$scope.info.sex == null || $scope.info.sex == "" ||
//									$scope.info.hukouType == null || $scope.info.hukouType == "" ||
//									$scope.info.historyOfCrime == null || $scope.info.historyOfCrime == "" ||
//									$scope.info.marriageStatus == null || $scope.info.marriageStatus == "" ||
//									$scope.info.educationBg == null || $scope.info.educationBg == "" ||
//									$scope.info.birthStatus == null || $scope.info.birthStatus == "" ||
//									$scope.info.workStartDate == null || $scope.info.workStartDate == "" ||
//									$scope.info.email == null || $scope.info.email == ""){
//								elemeAlert.alert("20131");
//								return;
//							}
//						}else{
//							elemeAlert.alert("20131");
//							return;
//						}
//						
//						
//						//教育经历和联系人  求职意向   入职信息为必填项  其余为新增记录后再检查是否填写完整
//						//星号内容填写完整验证
//						/*$scope.finishEduFlag = false;*/
//						$scope.educationList = JSON.parse(localStorage.getItem("educationList"));
//						if($scope.educationList != null && $scope.educationList != ""){
////							$scope.finishEduFlag = true;
//							for (var int = 0; int < $scope.educationList.length; int++) {
//								if($scope.educationList[int].startDate == null || $scope.educationList[int].startDate == "" ||
//									$scope.educationList[int].endDate == null || $scope.educationList[int].endDate == "" ||
//									$scope.educationList[int].college == null || $scope.educationList[int].college == "" ||
//									$scope.educationList[int].degreeValue == null || $scope.educationList[int].degreeValue == "" /*||
//									$scope.educationList[int].prdegreeValue == null || $scope.educationList[int].prdegreeValue == "" *//*||
//									$scope.educationList[int].highestDegree == null || $scope.educationList[int].highestDegree == ""*/){
////									$scope.finishEduFlag = false;
//									elemeAlert.alert("20100");
//									return;
//								}
//							}
//						}else{
////							$scope.finishEduFlag = false;
//							elemeAlert.alert("20100");
//							return;
//						}
////						
////						$scope.finishWorkFlag = true;
//						$scope.workList = JSON.parse(localStorage.getItem("workExpInfoList"));
//						if($scope.workInfoList != null && $scope.workList != ""){
//							for (var int1 = 0; int1 < $scope.workList.length; int1++) {
//								if($scope.workList[int1].startDate == null || $scope.workList[int1].startDate == "" ||
//									/*$scope.workInfoList[int1].endDate == null || $scope.workInfoList[int1].endDate == "" ||*/
//									$scope.workList[int1].company == null || $scope.workList[int1].company == ""){
////									$scope.finishWorkFlag = false;
//									elemeAlert.alert("20101");
//									return;
//								}
//							}
//						}else{
////							$scope.finishWorkFlag = true;
//							elemeAlert.alert("20101");
//							return;
//						}
////						
////						/*$scope.finishContactFlag = true;*/
//						$scope.linkList = JSON.parse(localStorage.getItem("linkManList"));
//						if($scope.linkList != null && $scope.linkList != undefined){
//							$scope.finishContactFlag = true;
//							for (var int2 = 0; int2 < $scope.linkList.length; int2++){
//								if($scope.linkList[int2].name == null || $scope.linkList[int2].name == "" ||
//									$scope.linkList[int2].relationship == null || $scope.linkList[int2].relationship == "" ||
//									$scope.linkList[int2].mobile == null || $scope.linkList[int2].mobile == "" || 
//									$scope.linkList[int2].isPrimary == null || $scope.linkList[int2].isPrimary == ""){
////									$scope.finishContactFlag = false;
//									elemeAlert.alert("20102");
//									return;
//								}
//							}
//						}else{
////							$scope.finishContact = false;
//							elemeAlert.alert("20102");
//							return;
//						}
////						
////						$scope.finishTrainFlag = true;
////						if($scope.trainInfoList != null && $scope.trainInfoList != undefined){
////							for (var int3 = 0; int3< $scope.trainInfoList.length; int3++){
////								if($scope.trainInfoList[int3].startDate == null || $scope.trainInfoList[int3].startDate == undefined ||
////									$scope.trainInfoList[int3].endDate == null || $scope.trainInfoList[int3].endDate == undefined ||
////									$scope.trainInfoList[int3].trainingAgency == null || $scope.trainInfoList[int3].trainingAgency ==undefined ||
////									$scope.trainInfoList[int3].trainingContent == null || $scope.trainInfoList[int3].trainingContent == undefined ||
////									$scope.trainInfoList[int3].cityName == null || $scope.trainInfoList[int3].cityName == undefined){
////									$scope.finishTrainFlag = false;
////								}
////							}
////						}else{
////							$scope.finishTrainFlag = true;
////						}
////						
////						$scope.finishProFlag = true;
////						if($scope.proInfoList != null && $scope.proInfoList != undefined){
////							for (var int4 = 0; int4 < $scope.proInfoList.length; int4++){
////								if($scope.proInfoList[int4].startDate == null || $scope.proInfoList[int4].startDate == undefined ||
////									$scope.proInfoList[int4].endDate == null || $scope.proInfoList[int4].endDate == undefined ||
////									$scope.proInfoList[int4].project == null || $scope.proInfoList[int4].project == undefined ||
////									$scope.proInfoList[int4].jobDuties == null || $scope.proInfoList[int4].jobDuties == undefined){
////									$scope.finishProFlag = false;
////								}
////							}
////						}else{
////							$scope.finishProFlag = true;
////						}
////						
////						$scope.finishCertFlag = true;
////						if($scope.certInfoList != null && $scope.certInfoList != undefined){
////							for (var int5 = 0; int5 < $scope.certInfoList.length; int5++) {
////								if($scope.certInfoList[int5].getDate == null || $scope.certInfoList[int5].getDate == undefined ||
////									$scope.certInfoList[int5].certificateName == null || $scope.certInfoList[int5].certificateName == undefined){
////									$scope.finishCertFlag = false;
////								}
////							}
////						}else{
////							$scope.finishCertFlag = true;
////						}
////						
////						$scope.finishBaseFlag = true;
////						if($scope.pfInfo != null && $scope.pfInfo != undefined){
////							if($scope.pfInfo.birthday == undefined && $scope.pfInfo.birthday == null &&
////									$scope.pfInfo.idNo == undefined && $scope.pfInfo.idNo == null &&
////									$scope.pfInfo.sexValue == undefined && $scope.pfInfo.sexValue == null &&
////									$scope.pfInfo.hukouTypeValue == undefined && $scope.pfInfo.hukouTypeValue == null && 
////									$scope.pfInfo.email == undefined && $scope.pfInfo.email == null){
////								$scope.finishBaseFlag = false;
////							}
////						}else{
////							$scope.finishBaseFlag = false;
////						}
////						
////						$scope.finishAmbitionFlag = true;
////						if($scope.am != null && $scope.am != undefined){
////							if($scope.am.workArea == undefined && $scope.am.workArea == null &&
////									$scope.am.travelIntentionValue == undefined && $scope.am.travelIntentionValue == null &&
////									$scope.am.grossPayFloor == undefined && $scope.am.grossPayFloor == null &&
////									$scope.am.grossPayExpect == undefined && $scope.am.grossPayExpect == null){
////								$scope.finishAmbitionFlag = false;
////							}
////						}else{
////							$scope.finishAmbitionFlag = false;
////						}
//
//							if($scope.infoFlag == "OK"){
//								
//							}else{
//								elemeAlert.alert("20131");
//								return;
//							}
//							if(JSON.parse(localStorage.getItem("workExpInfoList")) != null && JSON.parse(localStorage.getItem("workExpInfoList")).length > 0){
//								
//							}else{
//								elemeAlert.alert("20101");
//								return;
//							}
//							$scope.edufilled = 0;
//							if(JSON.parse(localStorage.getItem("educationList")) != null && JSON.parse(localStorage.getItem("educationList")).length > 0){
//								//最高学历要有 且仅有一个
//								for(var b = 0; b < JSON.parse(localStorage.getItem("educationList")).length; b++){
//									if(JSON.parse(localStorage.getItem("educationList"))[b].highestDegree == 1){
//										$scope.edufilled++;
//									}
//								}
//								if($scope.edufilled != 1){
//									elemeAlert.alert("20111");
//									return;
//								}
//							}else{
//								elemeAlert.alert("20100");
//								return;
//							}
//							$scope.filled = 0;
//							if(JSON.parse(localStorage.getItem("linkManList")) != null && JSON.parse(localStorage.getItem("linkManList")).length > 0){
//								//主要联系人必须要有 且只能有一个
//								for(var a = 0; a < JSON.parse(localStorage.getItem("linkManList")).length; a++){
//									if(JSON.parse(localStorage.getItem("linkManList"))[a].isPrimaryValue == "是" 
//										|| JSON.parse(localStorage.getItem("linkManList"))[a].isPrimary == 1){
//										$scope.filled++;
//									}
//								}
//								if($scope.filled != 1){
//									elemeAlert.alert("20106");
//									return;
//								}
//							}else{
//								elemeAlert.alert("20102");
//								return;
//							}
//							if($scope.checkFlag){
//								if(JSON.parse(localStorage.getItem("ambition")) != null){
//									$scope.ambition = JSON.parse(localStorage.getItem("ambition"));
//									if($scope.ambition.workArea == null  || $scope.ambition.workArea == "" ||
//											$scope.ambition.travelIntention == null || $scope.ambition.travelIntention == "" ||
//											$scope.ambition.grossPayExpect == null || $scope.ambition.grossPayExpect == "" ||
//											$scope.ambition.checkInDate == null || $scope.ambition.checkInDate == ""){
//										elemeAlert.alert("20103");
//										return;
//									}
//								}else{
//									elemeAlert.alert("20103");
//									return;
//								}
//							}else{
//								if(JSON.parse(localStorage.getItem("entr")) == null){
//									elemeAlert.alert("20104");
//									return;
//								}else{
//									if(JSON.parse(localStorage.getItem("entr")).bankAccount == null || JSON.parse(localStorage.getItem("entr")).bankAccount == ""){
//										elemeAlert.alert("20104");
//										return;
//									}
//								}
//							}
						
						
						//校验与h5手机端保持一致
						
						//必填项校验  未填项定位到具体位置
						var infotips = new Set();
						//重新获取数据
						
						if(localStorage.getItem("info") != null && localStorage.getItem("info") != ""){
							$scope.info = JSON.parse(localStorage.getItem("info"));
								
								if($scope.info.idNo == null || $scope.info.idNo == ''){
									infotips.add("身份证号码");
								}
								if($scope.info.birthday == null || $scope.info.birthday == ''){
									infotips.add("出生日期");
								}
								if($scope.info.sex == null || $scope.info.sex == ''){
									infotips.add("性别");
								}
								if($scope.info.hukouType == null || $scope.info.hukouType == ''){
									infotips.add("户口性质");
								}
								if($scope.info.historyOfCrime == null || $scope.info.historyOfCrime == ''){
									infotips.add("犯罪史");
								}
								if($scope.info.marriageStatus == null || $scope.info.marriageStatus == ''){
									infotips.add("婚姻状况");
								}
								if($scope.info.birthStatus == null || $scope.info.birthStatus == ''){
									infotips.add("生育状况");
								}
								if($scope.info.educationBg == null || $scope.info.educationBg == ''){
									infotips.add("学历");
								}
								if($scope.info.workStartDate == null || $scope.info.workStartDate == ''){
									infotips.add("参加工作日期");
								}
								if($scope.info.email == null || $scope.info.email == ''){
									infotips.add("邮箱");
								}
						}else{
							infotips.add("身份证号码");
							infotips.add("出生日期");
							infotips.add("性别");
							infotips.add("户口性质");
							infotips.add("犯罪史");
							infotips.add("婚姻状况");
							infotips.add("生育状况");
							infotips.add("学历");
							infotips.add("参加工作日期");
							infotips.add("邮箱");
						}
						
						
						var edutips = new Set();
						$scope.nforCount = 0;
						if(JSON.parse(localStorage.getItem("educationList")) != null && JSON.parse(localStorage.getItem("educationList")).length > 0){
							$scope.eduList = JSON.parse(localStorage.getItem("educationList"));
							for (var int = 0; int < $scope.eduList.length; int++) {
								
									if($scope.eduList[int].highestDegree == 1){
										$scope.nforCount++;
									}
								
									
									if($scope.eduList[int].college == null || $scope.eduList[int].college == ''){
										edutips.add("毕业学校");
									}
									if($scope.eduList[int].startDate == null || $scope.eduList[int].startDate == ''){
										edutips.add("开始时间");
									}
									if($scope.eduList[int].endDate == null || $scope.eduList[int].endDate == ''){
										edutips.add("毕业时间");
									}
									if($scope.eduList[int].major == null || $scope.eduList[int].major == ''){
										edutips.add("专业信息");
									}
									if($scope.eduList[int].degree == null || $scope.eduList[int].degree == ''){
										edutips.add("学历");
									}
									if($scope.eduList[int].prdegree == null || $scope.eduList[int].prdegree == ''){
										edutips.add("学位");
									}
									if($scope.eduList[int].highestDegree == null || $scope.eduList[int].highestDegree == ''){
										edutips.add("是否最高学历");
									}
							}
						}else{
							edutips.add("毕业学校");
							edutips.add("开始时间");
							edutips.add("毕业时间");
							edutips.add("专业信息");
							edutips.add("学历");
							edutips.add("学位");
							edutips.add("是否最高学历");
						}
									
						
						var worktips = new Set();
						if(JSON.parse(localStorage.getItem("workExpInfoList")) != null && JSON.parse(localStorage.getItem("workExpInfoList")).length > 0){
							$scope.workList = JSON.parse(localStorage.getItem("workExpInfoList"));
							for (var int2 = 0; int2 < $scope.workList.length; int2++) {
								
									$scope.worktips = new Set();
									if($scope.workList[int2].company == null || $scope.workList[int2].company == ''){
										worktips.add("工作单位");
									}
									if($scope.workList[int2].startDate == null || $scope.workList[int2].startDate == ''){
										worktips.add("开始时间");
									}
									if($scope.workList[int2].endDate == null || $scope.workList[int2].endDate == ''){
										worktips.add("结束时间");
									}
									if($scope.workList[int2].department == null || $scope.workList[int2].department == ''){
										worktips.add("部门");
									}
									if($scope.workList[int2].position == null || $scope.workList[int2].position == ''){
										worktips.add("岗位");
									}
									if($scope.workList[int2].jobDuties == null || $scope.workList[int2].jobDuties == ''){
										worktips.add("主要职责");
									}
							}
						}else{
							worktips.add("工作单位");
							worktips.add("开始时间");
							worktips.add("结束时间");
							worktips.add("部门");
							worktips.add("岗位");
							worktips.add("主要职责");
						}
						
						var linktips = new Set();
						$scope.nforCount1 = 0;
						if(JSON.parse(localStorage.getItem("linkManList")) != null && JSON.parse(localStorage.getItem("linkManList")).length > 0){
							$scope.linkList = JSON.parse(localStorage.getItem("linkManList"));
							
							for (var int3 = 0; int3 < $scope.linkList.length; int3++) {
									if($scope.linkList[int3].isPrimary == 1){
										$scope.nforCount1++;
									}
									
									if($scope.linkList[int3].name == null || $scope.linkList[int3].name == ''){
										linktips.add("联系人");
									}
									if($scope.linkList[int3].relationship == null || $scope.linkList[int3].relationship == ''){
										linktips.add("与联系人关系");
									}
									if($scope.linkList[int3].isPrimary == null || $scope.linkList[int3].isPrimary == ''){
										linktips.add("是否主要联系人");
									}
									if($scope.linkList[int3].mobile == null || $scope.linkList[int3].mobile == ''){
										linktips.add("手机");
									}
								}
							}else{
								linktips.add("联系人");
								linktips.add("与联系人关系");
								linktips.add("是否主要联系人");
								linktips.add("手机");
							}
							
							
//						var traintips = new Set();
//						if(JSON.parse(localStorage.getItem("trainExpList")) != null && JSON.parse(localStorage.getItem("trainExpList")).length > 0){
//							$scope.trainList = JSON.parse(localStorage.getItem("trainExpList"));
//							for (var int4 = 0; int4 < $scope.trainList.length; int4++) {
//
//								if($scope.trainList[int4].startDate == null || $scope.trainList[int4].startDate == ''){
//									traintips.add("开始时间");
//								}
//								if($scope.trainList[int4].endDate == null || $scope.trainList[int4].endDate == ''){
//									traintips.add("结束时间");
//								}
//								if($scope.trainList[int4].trainingTitle == null || $scope.trainList[int4].trainingTitle == ''){
//									traintips.add("培训主题");
//								}
//								if($scope.trainList[int4].trainingAgency == null || $scope.trainList[int4].trainingAgency == ''){
//									traintips.add("培训机构");
//								}
//								if($scope.trainList[int4].trainingContent == null || $scope.trainList[int4].trainingContent == ''){
//									traintips.add("培训内容");
//								}
//								if($scope.trainList[int4].cityName == null || $scope.trainList[int4].cityName == ''){
//									traintips.add("城市");
//								}
//							}
//						}
						
//						var protips = new Set();
//						if(JSON.parse(localStorage.getItem("projectExpInfoList")) != null && JSON.parse(localStorage.getItem("projectExpInfoList")).length > 0){
//							$scope.proList = JSON.parse(localStorage.getItem("projectExpInfoList"));
//							for (var int5 = 0; int5 < $scope.proList.length; int5++) {
//
//								
//								
//								if($scope.proList[int5].startDate == null || $scope.proList[int5].startDate == ''){
//									protips.add("开始时间");
//								}
//								if($scope.proList[int5].endDate == null || $scope.proList[int5].endDate == ''){
//									protips.add("结束时间");
//								}
//								if($scope.proList[int5].project == null || $scope.proList[int5].project == ''){
//									protips.add("项目名称");
//								}
//								if($scope.proList[int5].jobDuties == null || $scope.proList[int5].jobDuties == ''){
//									protips.add("项目描述");
//								}
//							
//							}
//						}
						
//						var certtips = new Set();
//						if(JSON.parse(localStorage.getItem("obtainCerList")) != null && JSON.parse(localStorage.getItem("obtainCerList")).length > 0){
//							$scope.cerList = JSON.parse(localStorage.getItem("obtainCerList"));
//							for (var int6 = 0; int6 < $scope.cerList.length; int6++) {
//								if($scope.cerList[int6].getDate == null || $scope.cerList[int6].getDate == ''){
//									certtips.add("获得时间");
//								}
//								if($scope.cerList[int6].certificateName == null || $scope.cerList[int6].certificateName == ''){
//									certtips.add("名称");
//								}
//							}
//						}
						
//						//自我评价
//						var selftips = new Set();
//						if ($scope.info.selfEvaluate == null || $scope.info.selfEvaluate == '') {
//							selftips.add("评价");
//						}
						
						
						//求职意向
						var intips = new Set();
						var entrytips = new Set();
//						if(localStorage.getItem("ambition") != null){
//							$scope.info = JSON.parse(localStorage.getItem("ambition"));
//							if($scope.info.jssStatus != 21 && $scope.info.jssStatus != 22){
//							
//								
//								if($scope.info.travelIntention == null || $scope.info.travelIntention == ''){
//									intips.add("可出差意向");
//								}
//								if($scope.info.workArea == null || $scope.info.workArea == ''){
//									intips.add("意向工作区域");
//								}
//								if($scope.info.grossPayExpect == null || $scope.info.grossPayExpect == ''){
//									intips.add("税前月薪-期望");
//								}
//								//入职资料
//							}else{
//								if($scope.info.bankAccount == null || $scope.info.bankAccount == ''){
//								
//									entrytips.add("银行账号");
//								}
//							}	
//						}
						//求职意向
						if($scope.info.jssStatus != 21 && $scope.info.jssStatus != 22){
							if(localStorage.getItem("ambition") != null){
								$scope.ambition = JSON.parse(localStorage.getItem("ambition"));
								if($scope.ambition.travelIntention == null || $scope.ambition.travelIntention == ''){
									intips.add("可出差意向");
								}
								if($scope.ambition.workArea == null || $scope.ambition.workArea == ''){
									intips.add("意向工作区域");
								}
								if($scope.ambition.grossPayExpect == null || $scope.ambition.grossPayExpect == ''){
									intips.add("税前月薪-期望");
								}
							}else{
								intips.add("可出差意向");
								intips.add("意向工作区域");
								intips.add("税前月薪-期望");
							}
						//入职资料
						}else{
							if(localStorage.getItem("entr") != null){
								$scope.entr = JSON.parse(localStorage.getItem("entr"))
								if($scope.entr.bankAccount == null || $scope.entr.bankAccount == ''){
									entrytips.add("银行账号");
								}
							}else{
								entrytips.add("银行账号");
							}
						}
						
						
						var total = 0;
						var infoMessage = null;
						var message = null;
						if(infotips != null){
							infotips.forEach(function(item){
								if(total < 3){
									if(infoMessage == null){
										infoMessage = "基本信息中的" + item;
										total++;
									}else{
										infoMessage = infoMessage + "、" + item;
										total++;
									}
								}
							})
							if(infoMessage != null){
								message = infoMessage;
							}
						}
						
						var eduMessage = null;
						if(edutips != null){
							edutips.forEach(function(item){
								if(total < 3){
									if(eduMessage == null){
										eduMessage = "学历信息中的" + item;
										total++;
									}else{
										eduMessage = eduMessage + "、" + item;
										total++;
									}
								}
							})
							if(message == null){
								message = eduMessage;
							}else{
								if(eduMessage != null){
									message = message + "，" + eduMessage;
								}
							}
						}
						
						var workMessage = null;
						if(worktips != null){
							worktips.forEach(function(item){
								if(total < 3){
									if(workMessage == null){
										workMessage = "履历记录中的" + item;
										total++;
									}else{
										workMessage = workMessage + "、" + item;
										total++;
									}
								}
							})
							if(message == null){
								message = workMessage;
							}else{
								if(workMessage != null){
									message = message + "，" + workMessage;
								}
							}
						}
						
						var linkMessage = null;
						if(linktips != null){
							linktips.forEach(function(item){
								if(total < 3){
									if(linkMessage == null){
										linkMessage = "家庭/朋友圈中的" + item;
										total++;
									}else{
										linkMessage = linkMessage + "、" + item;
										total++;
									}
								}
							})
							if(message == null){
								message = linkMessage;
							}else{
								if(linkMessage != null){
									message = message + "，" + linkMessage;
								}
							}
						}
						
//						var trainMessage = null;
//						if(traintips != null){
//							traintips.forEach(function(item){
//								if(total < 3){
//									if(trainMessage == null){
//										trainMessage = "培训经历中的" + item;
//										total++;
//									}else{
//										trainMessage = trainMessage + "、" + item;
//										total++;
//									}
//								}
//							})
//							if(message == null){
//								message = trainMessage;
//							}else{
//								if(trainMessage != null){
//									message = message + "，" + trainMessage;
//								}
//							}
//						}
						
//						var proMessage = null;
//						if(protips != null){
//							protips.forEach(function(item){
//								if(total < 3){
//									if(proMessage == null){
//										proMessage = "项目经验中的" + item;
//										total++;
//									}else{
//										proMessage = proMessage + "、" + item;
//										total++;
//									}
//								}
//							})
//							if(message == null){
//								message = proMessage;
//							}else{
//								if(proMessage != null){
//									message = message + "，" + proMessage;
//								}
//							}
//						}
						
//						var certMessage = null;
//						if(certtips != null){
//							certtips.forEach(function(item){
//								if(total < 3){
//									if(certMessage == null){
//										certMessage = "证书中的" + item;
//										total++;
//									}else{
//										certMessage = certMessage + "、" + item;
//										total++;
//									}
//								}
//							})
//							if(message == null){
//								message = certMessage;
//							}else{
//								if(certMessage != null){
//									message = message + "，" + certMessage;
//								}
//							}
//						}
						
//						var selfMessage = null;
//						if(selftips != null){
//							certtips.forEach(function(item){
//								if(total < 3){
//									if(selfMessage == null){
//										selfMessage = "自我评价" + item;
//										total++;
//									}else{
//										selfMessage = selfMessage + "，" + item;
//										total++;
//									}
//								}
//							})
//							if(message == null){
//								message = selfMessage;
//							}else{
//								if(selfMessage != null){
//									message = message + "，" + selfMessage;
//								}
//							}
//						}
						
						//求职意向
						if(localStorage.getItem("info") != null){
							if($scope.info.jssStatus != 21 && $scope.info.jssStatus != 22){
								var inMessage = null;
								if(intips != null){
									intips.forEach(function(item){
										if(total < 3){
											if(inMessage == null){
												inMessage = "求职意向中的" + item;
												total++;
											}else{
												inMessage = inMessage + "、" + item;
												total++;
											}
										}
									})
									if(message == null){
										message = inMessage;
									}else{
										if(inMessage != null){
											message = message + "，" + inMessage; 
										}
									}
								}
							}else{
								//入职资料
								var enMessage = null;
								if(entrytips != null){
									entrytips.forEach(function(item){
										if(total < 3){
											if(enMessage == null){
												enMessage = "入职资料中的" + item;
												total++;
											}else{
												enMessage = enMessage + "、" + item;
												total++;
											}
										}
									})
									if(message == null){
										message = enMessage;
									}else{
										if(enMessage != null){
											message = message + "，" + enMessage;
										}
									}
								}
							}
						}
						
						
						if(message != null){
//							alert(message);
							elemeAlert.alert("20132",null,[message]);
						}else{
							//只有一个最高学历
							if($scope.nforCount != 1){
//								alert(0);
								elemeAlert.alert("20111");
							}else{
								//只有一个主要联系人
								if($scope.nforCount1 != 1){
//									alert(1);
									elemeAlert.alert("20106");
								}
							}
							
						}
						
						if(message == null && $scope.nforCount == 1 && $scope.nforCount1 == 1){
							
							
							elemeAlert.confirm("20097",function(choose){
								if(choose == 'OK'){
//									$scope.tssPostRecordedInfo = angular.copy($scope.pfInfo);
									$scope.tssPostRecordedInfo = JSON.parse(localStorage.getItem("info"));
									$scope.tssPostRecordedInfo.selfEvaluate = JSON.parse(localStorage.getItem("selfEvaluate"))
								//应聘登记
								if($scope.checkFlag){
					
									$scope.tssPostRecordedInfo.workArea = JSON.parse(localStorage.getItem("ambition")).workArea;
									$scope.tssPostRecordedInfo.travelIntention = JSON.parse(localStorage.getItem("ambition")).travelIntention;
									$scope.tssPostRecordedInfo.grossPayFloor = JSON.parse(localStorage.getItem("ambition")).grossPayFloor;
									$scope.tssPostRecordedInfo.grossPayExpect = JSON.parse(localStorage.getItem("ambition")).grossPayExpect;
									$scope.tssPostRecordedInfo.checkInDate = JSON.parse(localStorage.getItem("ambition")).checkInDate;
									$scope.tssPostRecordedInfo.basicSalary = JSON.parse(localStorage.getItem("ambition")).basicSalary;
									$scope.tssPostRecordedInfo.bonus = JSON.parse(localStorage.getItem("ambition")).bonus;
									$scope.tssPostRecordedInfo.otherBenefits = JSON.parse(localStorage.getItem("ambition")).otherBenefits;
									$scope.tssPostRecordedInfo.targetCity = $scope.am.workArea;
								
								//录用登记
								}else{
									$scope.tssPostRecordedInfo.bankName = '中国工商银行';
									$scope.tssPostRecordedInfo.fullBankName = JSON.parse(localStorage.getItem("entr")).fullBankName;	
									$scope.tssPostRecordedInfo.bankAccount = JSON.parse(localStorage.getItem("entr")).bankAccount;
									$scope.tssPostRecordedInfo.bankId = JSON.parse(localStorage.getItem("entr")).bankId;
									$scope.tssPostRecordedInfo.sSAccount = JSON.parse(localStorage.getItem("entr")).sSAccount;
									$scope.tssPostRecordedInfo.afAccount = JSON.parse(localStorage.getItem("entr")).afAccount;
									$scope.tssPostRecordedInfo.residentialPass = JSON.parse(localStorage.getItem("entr")).residentialPass;
								}
								
								elemeAlert.openLoading();
								$scope.info = {
										/*token : sessionStorage.getItem("token"),*/
										/*jssId : $scope.jssid,*/
										PostRecordedInfo : $scope.tssPostRecordedInfo,
										contactInfoData : JSON.parse(localStorage.getItem("linkManList")),
										eduData : JSON.parse(localStorage.getItem("educationList")),
										historyData : JSON.parse(localStorage.getItem("workExpInfoList")),
										projectExpInfoList : JSON.parse(localStorage.getItem("projectExpInfoList")),
										trainExpList : JSON.parse(localStorage.getItem("trainExpList")),
										obtainCerList : JSON.parse(localStorage.getItem("obtainCerList")),
										eduDataDele: $scope.educationListdele,
										historyDataDele: $scope.workExpInfoListdele,
										contactInfoDataDele: $scope.linkManListdele,
										projectExpInfoListDele: $scope.projectExpInfoListdele,
										trainExpListDele: $scope.trainExpListdele,
										obtainCerListDele: $scope.rewardInfoListdele
										
								}
								$http({
									method : 'POST',
									url : localStorage.getItem("Url")
										+ "TSSPostRecordedInfoServiceImpl/postRecordedInfo",
									data : JSON.stringify($scope.info)
								}).success(function(data){
									elemeAlert.closeLoading();
//									elemeAlert.alert("10020");
//									localStorage.clear();
//									window.location.href = "tss_upload_success.html";
									elemeAlert.h5alert("10028",function(choose){
										if(choose == 'OK'){
											localStorage.setItem("collectSuccess","success");
											localStorage.setItem("entr",JSON.stringify($scope.tssPostRecordedInfo));
											localStorage.setItem("ambition",JSON.stringify($scope.tssPostRecordedInfo));
											window.location.href = "../html/tss_pc_offer.html";
										}
									})
//									window.close();
								}).error(function(data){
									elemeAlert.alert("40023");
									elemeAlert.closeLoading();
								});
								}
							},null);
							
							
						}
							
							
								
							
					}
					
				});

TSSAPP
.controller(
		'pcChangeBaseInfo',
		function($rootScope, $scope, i18nService, $http, $modal,
				elemeTab, elemeSearch, elemeAlert, elemeUigrid,
				resumeSourcePoolService, resumeShareService,
				elemeEnumType, $filter) {
			
			$scope.baseSaveFlag = false;
			
			// 身份证正确性校验
			$scope.idNoFlag = false;
			$scope.validateIdNo = function() {
				var idNo = /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/;
				if (idNo.test($scope.addInfo.idNo)) {
					$scope.idNoFlag = false;
				}else{
					$scope.idNoFlag = true;
				}
			};
			$scope.focusidNo = function() {
				$scope.idNoFlag = false;
			};
			
			
			
					$scope.close = function(hide){
						hide();
					}
					$scope.NO = function(hide){
						hide();
					}
					$scope.OK = function(hide){
						
						$scope.baseSaveFlag = true;
						if($scope.addInfo.sex != undefined){
							$scope.addInfo.sexValue = $rootScope.sexList[$scope.addInfo.sex-1].enumValue;
						}
//						if($scope.addInfo.resumeSource != undefined){
//							$scope.addInfo.resumeSourceValue = $rootScope.resumeSourceList[$scope.addInfo.resumeSource-1].enumValue;
//						}
						if($scope.addInfo.idName != undefined){
							$scope.addInfo.idNameValue = $rootScope.idNameList[$scope.addInfo.idName-1].enumValue;
						}
						if($scope.addInfo.hukouType != undefined){
							$scope.addInfo.hukouTypeValue = $rootScope.hukouTypeList[$scope.addInfo.hukouType-1].enumValue;
						}
						if($scope.addInfo.healthStatus != undefined){
							$scope.addInfo.healthStatusValue = $rootScope.healthStatusList[$scope.addInfo.healthStatus-1].enumValue;
						}
						if($scope.addInfo.marriageStatus != undefined){
							$scope.addInfo.marriageStatusValue = $rootScope.marriageStatusList[$scope.addInfo.marriageStatus-1].enumValue;
						}
						if($scope.addInfo.birthStatus != undefined){
							$scope.addInfo.birthStatusValue = $rootScope.birthStatusList[$scope.addInfo.birthStatus-1].enumValue;
						}
						if($scope.addInfo.politicsStatus != undefined){
							$scope.addInfo.politicsStatusValue = $rootScope.politicsStatusList[$scope.addInfo.politicsStatus-1].enumValue;
						}
						if($scope.addInfo.educationBg != undefined){
							$scope.addInfo.educationBgValue = $rootScope.educationBgList[$scope.addInfo.educationBg-1].enumValue;
						}
						if($scope.addInfo.nationality != undefined){
							$scope.addInfo.nationalityValue = $rootScope.nationalityList[$scope.addInfo.nationality-1].enumValue;
						}
						if($scope.addInfo.prDegree != undefined){
							$scope.addInfo.prDegreeValue = $rootScope.prdegreeList[$scope.addInfo.prDegree-1].enumValue;
						}
						if($scope.addInfo.residentialPass != undefined){
							$scope.addInfo.residentialPassValue = $rootScope.residentialPassList[$scope.addInfo.residentialPass-1].enumValue;
						}
						if($scope.addInfo.bloodType != undefined){
							$scope.addInfo.bloodTypeValue = $rootScope.bloodTypeList[$scope.addInfo.bloodType-1].enumValue;
						}
						if($scope.addInfo.historyOfCrime != undefined){
							$scope.addInfo.historyOfCrimeValue = $rootScope.historyOfCrimeList[$scope.addInfo.historyOfCrime-1].enumValue;
						}
						if($scope.addInfo.relativeOrFriend != undefined){
							$scope.addInfo.relativeOrFriendValue = $rootScope.relativeOrFriendList[$scope.addInfo.relativeOrFriend-1].enumValue;
						}
						if($scope.addInfo.birthday != undefined){
							$scope.addInfo.birthday = $filter('date')($scope.addInfo.birthday,'yyyy-MM-dd');
						}
						if($scope.addInfo.workStartDate != undefined){
							$scope.addInfo.workStartDate = $filter('date')($scope.addInfo.workStartDate,'yyyy-MM-dd');
						}
						if($scope.addInfo.onTheJob != undefined){
							$scope.addInfo.onTheJobValue = $rootScope.yesOrNoList[$scope.addInfo.onTheJob-1].enumValue;
						}
						//带星号的校验
						if($scope.addInfo.idNo != null && !$scope.idNoFlag && $scope.addInfo.birthday != null && $scope.addInfo.sex != null 
								&& $scope.addInfo.hukouType != null && $scope.addInfo.workStartDate != null && $scope.addInfo.email != null
								&& $scope.addInfo.marriageStatus != null && $scope.addInfo.birthStatus != null && $scope.addInfo.historyOfCrime != null && $scope.addInfo.educationBg != null){
									$rootScope.$emit("pfInfo",$scope.addInfo);
									hide();
						}else{
//							elemeAlert.alert("20089");
						}
						
					}
			
			
			});


TSSAPP
.controller(
		'pcChangeEduInfo',
		function($rootScope, $scope, i18nService, $http, $modal,
				elemeTab, elemeSearch, elemeAlert, elemeUigrid,
				resumeSourcePoolService, resumeShareService,
				elemeEnumType,  $filter) {
			$scope.close = function(hide){
				hide();
			}
			$scope.NO = function(hide){
				hide();
			}
			
			$scope.eduSaveFlag = false;
			$scope.OK = function(hide){
				$scope.eduSaveFlag = true;
				if($scope.eInfo.degree != undefined){
					$scope.eInfo.degreeValue = $rootScope.educationBgList[$scope.eInfo.degree-1].enumValue;
				}
				if($scope.eInfo.prdegree != undefined){
					$scope.eInfo.prdegreeValue = $rootScope.prdegreeList[$scope.eInfo.prdegree-1].enumValue;
				}
				if($scope.eInfo.highestDegree != undefined){
					$scope.eInfo.highestDegreeValue = $rootScope.isHighestDegreeList[$scope.eInfo.highestDegree-1].enumValue;
				}
				if($scope.eInfo.endDate != undefined){
					/*$scope.eInfo.endDate.replace("\"","");*/
					/*$scope.eInfo.endDate = new Date($scope.eInfo.endDate).format("yyyy-MM-dd");*/
					
					$scope.eInfo.endDate = $filter('date')($scope.eInfo.endDate,'yyyy-MM-dd');
				}
				if($scope.eInfo.startDate != undefined){
					$scope.eInfo.startDate = $filter('date')($scope.eInfo.startDate,'yyyy-MM-dd');
				}
				
				if($scope.eInfo.startDate != null && $scope.eInfo.endDate != null && $scope.eInfo.college != null
						&& $scope.eInfo.degree != null && $scope.eInfo.highestDegree != null){
							if($scope.addEduInfoFlag){
									$rootScope.$emit("addeduInfo",$scope.eInfo);
							}else{
									$rootScope.$emit("changeeduInfo",$scope.eInfo);
							}
					
							hide();
				}else{
//					elemeAlert.alert("20089");
				}
				
			}
			
			
		})
		
TSSAPP
.controller(
		'pcChangeWorkInfo',
		function($rootScope, $scope, i18nService, $http, $modal,
				elemeTab, elemeSearch, elemeAlert, elemeUigrid,
				resumeSourcePoolService, resumeShareService,
				elemeEnumType, $filter) {
			
			// 手机号码正确性校验
			$scope.mobileFlag = false;
			$scope.validateMobile = function() {
				var pattern = /^1\d{10}$/;  
			    if ($scope.wInfo != null && ($scope.wInfo.mobile == null || pattern.test($scope.wInfo.mobile))) {
			    	$scope.mobileFlag = false;
			    }else{
			    	$scope.mobileFlag = true;
			    }
			};
			$scope.focusMobile = function() {
				$scope.mobileFlag = false;
			};
			
			
			$scope.close = function(hide){
				hide();
			}
			$scope.NO = function(hide){
				hide();
			}
			$scope.workSaveFlag = false;
			$scope.OK = function(hide){
				$scope.workSaveFlag = true;
				if($scope.wInfo.startDate != undefined){
					$scope.wInfo.startDate = $filter('date')($scope.wInfo.startDate,'yyyy-MM-dd');
				}
				if($scope.wInfo.endDate != undefined){
					$scope.wInfo.endDate = $filter('date')($scope.wInfo.endDate,'yyyy-MM-dd');
				}
				if($scope.wInfo.startDate != null && $scope.wInfo.company != null && $scope.wInfo.endDate != null && $scope.wInfo.department != null){
					if($scope.addWorkInfoFlag){
						$rootScope.$emit("addWorkInfo",$scope.wInfo);
					}else{
						$rootScope.$emit("changeWorkInfo",$scope.wInfo);
					}
					hide();
				}else{
//					elemeAlert.alert("20089");
				}
				
				
			}
			
		})
		
TSSAPP
.controller(
		'pcChangeContactInfo',
		function($rootScope, $scope, i18nService, $http, $modal,
				elemeTab, elemeSearch, elemeAlert, elemeUigrid,
				resumeSourcePoolService, resumeShareService,
				elemeEnumType) {
			
			/*// 身份证正确性校验
			$scope.idNoFlag = false;
			$scope.validateIdNo = function() {
				var idNo = /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/;
				if (idNo.test($scope.addInfo.idNo)) {
					$scope.idNoFlag = false;
				}else{
					$scope.idNoFlag = true;
				}
			};
			$scope.focusidNo = function() {
				$scope.idNoFlag = false;
			};*/
			
			$scope.mobileFlag = false;
			$scope.validateMobile = function(){
				var mobile = /^1\d{10}$/;
				if(mobile.test($scope.contactInfo.mobile)){
					$scope.mobileFlag = false;
				}else{
					$scope.mobileFlag = true;
				}
			};
			$scope.focusMobile = function(){
				$scope.mobileFlag = false;
			}
			
			$scope.close = function(hide){
				hide();
			}
			$scope.NO = function(hide){
				hide();
			}
			$scope.contactSaveFlag = false;
			$scope.OK = function(hide){
				$scope.contactSaveFlag = true;
				if($scope.contactInfo.relationship != undefined){
					$scope.contactInfo.relationshipValue = $rootScope.relationshipList[$scope.contactInfo.relationship-1].enumValue;
				}
				if($scope.contactInfo.isPrimary != undefined){
					$scope.contactInfo.isPrimaryValue = $rootScope.yesOrNoList[$scope.contactInfo.isPrimary-1].enumValue;
				}
				if($scope.contactInfo.name != null && $scope.contactInfo.relationship != null && $scope.contactInfo.mobile && !$scope.mobileFlag && $scope.contactInfo.isPrimary){
					if($scope.addContactInfoFlag){
						$rootScope.$emit("addContactInfo",$scope.contactInfo);
					}else{
						$rootScope.$emit("changeContactInfo",$scope.contactInfo);
					}
					hide();
				}else{
//					elemeAlert.alert("20089");
				}
				
				
			}
			
		})
		
TSSAPP
.controller(
		'pcChangeTrainInfo',
		function($rootScope, $scope, i18nService, $http, $modal,
				elemeTab, elemeSearch, elemeAlert, elemeUigrid,
				resumeSourcePoolService, resumeShareService,
				elemeEnumType,$filter) {

			$scope.close = function(hide){
				hide();
			}
			$scope.NO = function(hide){
				hide();
			}
			$scope.trainSaveFlag = false;
			$scope.OK = function(hide){
				$scope.trainSaveFlag = true;
				if($scope.tInfo.startDate != undefined){
					$scope.tInfo.startDate = $filter('date')($scope.tInfo.startDate,'yyyy-MM-dd');
				}
				if($scope.tInfo.endDate != undefined){
					$scope.tInfo.endDate = $filter('date')($scope.tInfo.endDate,'yyyy-MM-dd');
				}
				
				if($scope.tInfo.startDate != null && $scope.tInfo.endDate != null && $scope.tInfo.trainingAgency != null 
						&& $scope.tInfo.trainingContent != null && $scope.tInfo.cityName != null){
							if($scope.addTrainInfoFlag){
								$rootScope.$emit("addTrainInfo",$scope.tInfo);
							}else{
								$rootScope.$emit("changeTrainInfo",$scope.tInfo);
							}
					
							hide();
				}else{
//					elemeAlert.alert("20089");
				}
				
			}
			
		})
				
		
TSSAPP
.controller(
		'pcChangeProInfo',
		function($rootScope, $scope, i18nService, $http, $modal,
				elemeTab, elemeSearch, elemeAlert, elemeUigrid,
				resumeSourcePoolService, resumeShareService,
				elemeEnumType,$filter) {
			$scope.close = function(hide){
				hide();
			}
			$scope.NO = function(hide){
				hide();
			}
			$scope.proSaveFlag = false;
			$scope.OK = function(hide){
				$scope.proSaveFlag = true;
				if($scope.pInfo.startDate != undefined){
					$scope.pInfo.startDate = $filter('date')($scope.pInfo.startDate,'yyyy-MM-dd');
				}
				if($scope.pInfo.endDate != undefined){
					$scope.pInfo.endDate = $filter('date')($scope.pInfo.endDate,'yyyy-MM-dd');
				}
				
				if($scope.pInfo.startDate != null && $scope.pInfo.endDate != null && $scope.pInfo.project != null && $scope.pInfo.jobDuties != null){
					if($scope.addProInfoFlag){
						$rootScope.$emit("addProInfo",$scope.pInfo);
					}else{
						$rootScope.$emit("changeProInfo",$scope.pInfo);
					}
					
					hide();
				}else{
//					elemeAlert.alert("20089");
				}
				
			}
			
			
		})
		
TSSAPP
.controller(
		'pcChangeCertInfo',
		function($rootScope, $scope, i18nService, $http, $modal,
				elemeTab, elemeSearch, elemeAlert, elemeUigrid,
				resumeSourcePoolService, resumeShareService,
				elemeEnumType, $filter) {
			
			$scope.close = function(hide){
				hide();
			}
			$scope.NO = function(hide){
				hide();
			}
			$scope.certSaveFlag = false;
			$scope.OK = function(hide){
				$scope.certSaveFlag = true;
				if($scope.ceInfo.getDate != undefined){
					$scope.ceInfo.getDate = $filter('date')($scope.ceInfo.getDate,'yyyy-MM-dd');
				}
				
				if($scope.ceInfo.getDate != null && $scope.ceInfo.certificateName != null){
					if($scope.addCertInfoFlag){
						$rootScope.$emit("addCertInfo",$scope.ceInfo);
					}else{
						$rootScope.$emit("changeCertInfo",$scope.ceInfo);
					}
					
					hide();
				}else{
//					elemeAlert.alert("20089");
				}
				
			}
				
			
		})
		
TSSAPP
.controller(
		'pcChangeSelfEvalInfo',
		function($rootScope, $scope, i18nService, $http, $modal,
				elemeTab, elemeSearch, elemeAlert, elemeUigrid,
				resumeSourcePoolService, resumeShareService,
				elemeEnumType) {
			
			$scope.close = function(hide){
				hide();
			}
			$scope.NO = function(hide){
				hide();
			}
			$scope.OK = function(hide){
				
				$rootScope.$emit("changeSelfEvalInfo",$scope.selfEvaluation);
				
				hide();
			}
		})

TSSAPP
.controller(
		'pcChangeAmbitionInfo',
		function($rootScope, $scope, i18nService, $http, $modal,
				elemeTab, elemeSearch, elemeAlert, elemeUigrid,
				resumeSourcePoolService, resumeShareService,
				elemeEnumType,$filter) {
			$scope.close = function(hide){
				hide();
			}
			$scope.NO = function(hide){
				hide();
			}
			$scope.ambiSaveFlag = false;
			$scope.OK = function(hide){
				$scope.ambiSaveFlag = true;
				if($scope.aInfo.travelIntention != undefined){
					$scope.aInfo.travelIntentionValue = $rootScope.travelIntentionList[$scope.aInfo.travelIntention-1].enumValue;
				}
				if($scope.aInfo.checkInDate != undefined){
					$scope.aInfo.checkInDateValue = $rootScope.checkInDateList[$scope.aInfo.checkInDate-1].enumValue;
				}
				if($scope.aInfo.workArea != null && $scope.aInfo.travelIntention != null  &&
						 $scope.aInfo.grossPayExpect != null && $scope.aInfo.checkInDate != null){
							$scope.$emit("changeAmbitionInfo",$scope.aInfo);
							hide();
				}else{
//						elemeAlert.alert("20089");
				}
				
			}
			
		})	

TSSAPP
.controller(
		'pcChangeEntrInfo',
		function($rootScope, $scope, i18nService, $http, $modal,
				elemeTab, elemeSearch, elemeAlert, elemeUigrid,
				resumeSourcePoolService, resumeShareService,
				elemeEnumType) {
			$scope.close = function(hide){
				hide();
			}
			$scope.NO = function(hide){
				hide();
			}
			$scope.entrSaveFlag = false;
			$scope.OK = function(hide){
				$scope.entrSaveFlag = true;
				if($scope.entrInfo.residentialPass != undefined){
					$scope.entrInfo.residentialPassValue = $rootScope.residentialPassList[$scope.entrInfo.residentialPass-1].enumValue;
				}
				if($scope.entrInfo.bankAccount != null){
					$rootScope.$emit("changeEntrInfo",$scope.entrInfo);
					hide();
				}else{
//					elemeAlert.alert("20089");
				}
				
			}
			
		})
		
