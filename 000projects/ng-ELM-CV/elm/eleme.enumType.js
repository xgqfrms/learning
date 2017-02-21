var elemeEnumType = angular.module('elemeEnumType', [])

elemeEnumType.service('elemeEnumType', function($rootScope, $http,elemeSearch) {

	// 加载枚举值
	this.getEnumType = function() {
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
		/* 简历渠道 */
		var resumeSource = "E008";
		/* 最高学历 */
		var highestdegree = "E012";
		/* 履历类别 */
		var expType = "E028";
		// 民族
		var nationality = "E033";
		// 学位
		var prdegree = "E034";
		// 招聘来源
		var recruitSource = "E035";
		// 居住证申领情况
		var residentialPass = "E036";
		// 血型
		var bloodType = "E039";
		// 职级
		var postLevel = "E040";
		// 职等
		var postRank = "E041"; 
		// 城市等级
		var cityGrade = "E042";
		// 人员类别
		var staffStatus = "E032";
		// 工作区域
		var workRegion = "E043";
		// 流程状态
		var flowStatus = "E031";
		
		//bin.zhai   start
		//工作年限
		var workYears="E047";
		//更新时间
		var changeTime="E048";
		
		//是否有绩效奖金
		var bonus = "E053";
		
		//劳动合同期限
		var contractPeriod = "E054";
		
		//是否有餐补
		var mealAllowance = "E055";
		//发票抬头
		var invoiceTitle = "E056";
		//12.15 候选人状态
		var canadidate="E062";
		var jobCategory="E063";
		//职位状态
		var jobStatus="E060";
		//所属公司
		var belongsCompany="E059";
		//发布渠道
		var issueChannel="E066";
		
		$scope.enumTypeList = new Array();
        $scope.enumTypeList.push(canadidate);
        $scope.enumTypeList.push(jobCategory);
		$scope.enumTypeList.push(workYears);
		$scope.enumTypeList.push(changeTime);
		$scope.enumTypeList.push(sex);
		$scope.enumTypeList.push(resumeSource);
		//流程状态
	    $scope.enumTypeList.push(flowStatus);  
		$scope.enumTypeList.push(idName);
		$scope.enumTypeList.push(hukouType);
		$scope.enumTypeList.push(healthStatus);
		$scope.enumTypeList.push(marriageStatus);
		$scope.enumTypeList.push(birthStatus);
		$scope.enumTypeList.push(politicsStatus);
		$scope.enumTypeList.push(highestdegree);
		$scope.enumTypeList.push(expType);
		$scope.enumTypeList.push(recruitSource);
		$scope.enumTypeList.push(nationality);
		$scope.enumTypeList.push(bloodType);
		$scope.enumTypeList.push(prdegree);
		$scope.enumTypeList.push(residentialPass);
		//bin.zhai 职级
		$scope.enumTypeList.push(postLevel);
		//bin.zhai 职等
		$scope.enumTypeList.push(postRank);
		$scope.enumTypeList.push(cityGrade);
		$scope.enumTypeList.push(staffStatus);
		$scope.enumTypeList.push(workRegion);
		$scope.enumTypeList.push(bonus);
		$scope.enumTypeList.push(contractPeriod);
		$scope.enumTypeList.push(mealAllowance);
		$scope.enumTypeList.push(invoiceTitle);
		$scope.enumTypeList.push(jobStatus);
		$scope.enumTypeList.push(belongsCompany);
		$scope.enumTypeList.push(issueChannel);
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
		    //下拉框显示与隐藏  xu 2016/4/13 start
			var hrefHtml = location.href.split("TSS_FE/html/")[1];
			var href = hrefHtml.split(".html")[0];
			$rootScope.flowStatusList = new Array();
			switch(href)
			 {
				case "tss_resume_list":
					var temp = [0,24,26,27]; 
					$scope.doflow(temp,data[flowStatus]);
				     break; 
				case "tss_survey_list":
					var temp = [11,12,13];
					$scope.doflow(temp,data[flowStatus]); 
				     break;
				case "tss_interview_list":
					var temp = [1,4,6,5,7,8,9,10];
					$scope.doflow(temp,data[flowStatus]); 
				     break;
				case "tss_offer_list":
					var temp = [10,14,15,16,17,18,19,20];
					$scope.doflow(temp,data[flowStatus]);
				     break;
				case "tss_register_list":
					var temp = [20,21,22,23];
					$scope.doflow(temp,data[flowStatus]);
				     break; 
				case "tss_talent_pool_list": 
					var temp = [0,24,11,12,13,1,4,6,5,7,8,9,10,14,15,16,17,18,19,20,21,23];
					$scope.doflow(temp,data[flowStatus]);
				     break;
			 }
			//end 
			$rootScope.sexList = data[sex];
			$rootScope.resumeSourceList = data[resumeSource];
			$rootScope.idNameList = data[idName];
			$rootScope.hukouTypeList = data[hukouType];
			$rootScope.healthStatusList = data[healthStatus];
			$rootScope.marriageStatusList = data[marriageStatus];
			$rootScope.birthStatusList = data[birthStatus];
			$rootScope.politicsStatusList = data[politicsStatus];
			$rootScope.highestdegreeList = data[highestdegree];
			$rootScope.expTypeList = data[expType];
			$rootScope.recruitSourceList = data[recruitSource];
			$rootScope.nationalityList = data[nationality];
			$rootScope.bloodTypeList = data[bloodType];
			$rootScope.prdegreeList = data[prdegree];
			$rootScope.residentialPassList = data[residentialPass];
			//存入职级
			$rootScope.postLevelList = data[postLevel];
			//存入职等
			$rootScope.postRankList = data[postRank];
			$rootScope.cityGradeList = data[cityGrade];
			$rootScope.staffStatusList = data[staffStatus];
			$rootScope.workRegionList = data[workRegion];
			//工作年限
			$rootScope.workYearsList = data[workYears];
			//更新时间
			$rootScope.changeTimeList = data[changeTime];
			$rootScope.bonusList = data[bonus];
			$rootScope.contractPeriodList = data[contractPeriod];
			$rootScope.mealAllowanceList = data[mealAllowance];
			$rootScope.invoiceTitleList = data[invoiceTitle];
            $rootScope.canadidateList = data[canadidate];
            $rootScope.jobCategoryList = data[jobCategory];
			$rootScope.jobStatusList = data[jobStatus];
			$rootScope.belongsCompanyList = data[belongsCompany];
			$rootScope.issueChannelList = data[issueChannel];
		}).error(function(data) {
		});
		
		 $scope.req ={
	 	     		token:sessionStorage.getItem("token"),
	 	     		cityName:''
	 	   	    }
		  $http({
		        method: 'POST',
		        url : localStorage.getItem("Url") + "TSSWorkCityServiceImpl/postWorkCityList",
		 	    data: JSON.stringify($scope.req)
			  }).success(function(data){
				  $scope.entryCityList = data.tssWorkCitylist;
			   }).error(function(data){
				   
			   })

		//写入
		$scope.doflow = function(tmp,list){
//			$scope.flowTmp = new Array();
			for (var i = 0; i < tmp.length; i++) { 
				for (var int = 0; int < list.length; int++) { 
					if(tmp[i] == list[int].enumNo){
						$rootScope.flowStatusList.push(list[int]);
						break;
					}
				}
			}
		}
	}
});