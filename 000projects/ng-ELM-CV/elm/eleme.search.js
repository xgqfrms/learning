var elemeSearch = angular.module('elemeSearch', [])

elemeSearch
		.service(
				'elemeSearch',
				function($rootScope, $http,elemeAlert,$filter) {
					$scope = $rootScope;
					// 添加tab页
					this.search = function(searchObj,pageObj, clickTmp, url,searchFlag,searchObjTag,pageNo,pageSize) {
						switch (url) {
						case "tss_resume_list.html":
							getResumeList(searchObjTag,searchObj,pageNo,pageSize, clickTmp, url,searchFlag);
							break;
						case "tss_survey_list.html":
							getResumeUiGridList(searchObj, pageObj, clickTmp, url,searchFlag);
							break;
						case "tss_interview_list.html":
							getResumeList(searchObjTag,searchObj,pageNo,pageSize, clickTmp, url,searchFlag);
							break;
						case "tss_offer_list.html":
							getResumeList(searchObjTag,searchObj,pageNo,pageSize, clickTmp, url,searchFlag);
							break;
						case "tss_register_list.html":
							getResumeUiGridList(searchObj, pageObj, clickTmp, url,searchFlag);
							break;
						case "tss_talent_pool_list.html":
							getTalentPoolList(searchObj, pageObj, clickTmp, url,searchFlag);
							break;
						case "tss_workbench_list.html":
							getWorkbenchList(searchObjTag,pageNo,pageSize,url);
							break;
						case "tss_candidate_list.html":
                            getCandidateList(searchObjTag,pageNo,pageSize,url);
                            break;
						case "tss_position_list.html":
							getPositionList(searchObjTag,pageNo,pageSize,url);
							break;
						case "tss_supplier_list.html":
							getSupplierList(searchObj,searchObjTag,pageNo,pageSize,url);
							break;
						}

					}

					$rootScope.searchVFlag = false;
					$rootScope.searchValue = "展开筛选";
					this.searchV = function(url) {
						$rootScope.searchVFlag = !$rootScope.searchVFlag;
						if ($rootScope.searchVFlag) {
							$rootScope.searchValue = "收起筛选";
						} else {
							$rootScope.searchValue = "展开筛选";
						}

					}



					getResumeUiGridList = function(searchObj, pageObj, clickTmp, url,searchFlag) {
						elemeAlert.openLoading();
						var roleName = undefined;
						if(sessionStorage.getItem("role_name") != null){
							roleName = sessionStorage.getItem("role_name");
						}
						$scope.info = {
							token : sessionStorage.getItem("token"),
							searchObj : searchObj,
							paginationCurrentPage : pageObj.paginationCurrentPage,
							paginationPageSize : pageObj.paginationPageSize,
							clickTmp : clickTmp,
							url : url,
							roleName : roleName
						}
						
						$scope.req = {
								info: $scope.info
						};

						$http(
								{
									method : 'POST',
									url : localStorage.getItem("Url")
											+ "TSSJobSeekersInfoServiceImpl/getJobSeekersInfoList",
									data : JSON.stringify($scope.info)
//									params: $scope.req
								})
								.success(
										function(data) {
											 elemeAlert.closeLoading();
											$rootScope.myData = data.resultList;
											$rootScope.pagingOptions.paginationCurrentPage = data.currentPage;
											$rootScope.pagingOptions.totalItems = data.totalRows;
											$rootScope.totalItems = data.totalRows;
											$rootScope.totalItems1 = data.totalRows1;
											$rootScope.totalItems2 = data.totalRows2;
											$rootScope.totalItems3 = data.totalRows3;
											$rootScope.totalItems4 = data.totalRows4;
											$rootScope.totalItems5 = data.totalRows5;
											for (var int = 0; int < $rootScope.myData.length; int++) {
												$rootScope.myData[int].jssIdFlag = localStorage.getItem($rootScope.myData[int].jssId);
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
					
					getResumeList = function(searchObjTag,searchObj,pageNo,pageSize,clickTmp, url) {
						elemeAlert.openLoading();
						var roleName = undefined;
						if(sessionStorage.getItem("role_name") != null){
							roleName = sessionStorage.getItem("role_name");
						}
						$scope.info = {
								token : sessionStorage.getItem("token"),
								searchObjTag :searchObjTag,
								searchObj : searchObj,
								paginationCurrentPage : pageNo,
								paginationPageSize : pageSize,
								clickTmp : clickTmp,
								url : url,
								roleName : roleName
						}
						
						
						$scope.req = {
								info: $scope.info
						};
						
						$http(
								{
									method : 'POST',
									url : localStorage.getItem("Url")
									+ "TSSJobSeekersInfoServiceImpl/getJobSeekersInfoList",
									data : JSON.stringify($scope.info)
								})
								.success(
										function(data) {
										
//											    //数据
											 $rootScope.myData = data.resultList;
											    //总数据条数
											 $rootScope.totalItems = data.totalRows;
//											当前页
											 $rootScope.currentPage=data.currentPage;
											elemeAlert.closeLoading();
											
										}).error(function(data) {
											if (data == "40011") {
												elemeAlert.alert("40011");
											} else {
												elemeAlert.alert("40014");
											}
											elemeAlert.closeLoading();
										});
					}
					

					
				

					getTalentPoolList = function(searchObj, pageObj,clickTmp, url) {
						$scope.info = {
								token : sessionStorage.getItem("token"),
								searchObj : searchObj,
								paginationCurrentPage : pageObj.paginationCurrentPage,
								paginationPageSize : pageObj.paginationPageSize,
								url : url,
								clickTmp : clickTmp
							}
							
							$scope.req = {
									info: $scope.info
							};
						elemeAlert.openLoading();
						$http(
								{
									method : 'GET',
									url : localStorage.getItem("Url")
											+ "TSSHRSourcePoolServiceImpl/getHRSourcePoolList",
											params: $scope.req
								})
								.success(
										function(data) {
											 elemeAlert.closeLoading();
											$rootScope.myData = data.resultList;
											$rootScope.pagingOptions.paginationCurrentPage = data.currentPage;
											$rootScope.pagingOptions.totalItems = data.totalRows;
											$rootScope.totalItems = data.totalRows;
											$rootScope.totalItems1 = data.totalRows1;
											$rootScope.totalItems2 = data.totalRows2;
											$rootScope.totalItems3 = data.totalRows3;
											$rootScope.totalItems4 = data.totalRows4;
											$rootScope.totalItems5 = data.totalRows5;
											$rootScope.totalItems6 = data.totalRows6;

										}).error(function(data) {
											 if (data == "40011") {
												 elemeAlert.alert("40011");
												 } else {
												 elemeAlert.alert("40014");
												 }
									 elemeAlert.closeLoading();
								});
					}
					//工作台查询
					getWorkbenchList = function(searchObjTag,pageNo,pageSize,url){
						elemeAlert.openLoading();
						$scope.info = {
								token : sessionStorage.getItem("token"),
								searchObjTag :searchObjTag,
								paginationCurrentPage : pageNo,
								paginationPageSize : pageSize,
								url : url
						}
						$scope.req = {
								info: $scope.info
						};
						
						$http(
								{
									method : 'POST',
									url : localStorage.getItem("Url")
									+ "TSSJobSeekersInfoServiceImpl/getJobSeekersInfoListWt",
									data : JSON.stringify($scope.info)
								})
								.success(
										function(data) {
										
//											    //数据
											 $rootScope.myData = data.resultList;
											    //总数据条数
											 $rootScope.totalItems = data.totalRows;
//											当前页
											 $rootScope.currentPage=data.currentPage;
											elemeAlert.closeLoading();
											
										}).error(function(data) {
											if (data == "40011") {
												elemeAlert.alert("40011");
											} else {
												elemeAlert.alert("40014");
											}
											elemeAlert.closeLoading();
										});
					}
					//候选人表查询
                    getCandidateList = function(searchObjTag,pageNo,pageSize,url){
                        elemeAlert.openLoading();
                        $scope.info = {
                            token : sessionStorage.getItem("token"),
                            searchObjTag :searchObjTag,
                            paginationCurrentPage : pageNo,
                            paginationPageSize : pageSize,
                            url : url
                        }
                        $scope.req = {
                            info: $scope.info
                        };

                        $http(
                            {
                                method : 'POST',
                                url : localStorage.getItem("Url")
                                + "HHSCandidateServiceImpl/getHHSCandidateInfoList",
                                data : JSON.stringify($scope.info)
                            })
                            .success(
                                function(data) {
                                    $rootScope.myData = data.resultList;
                                    $rootScope.totalItems = data.totalRows;
                                    $rootScope.currentPage=data.currentPage;
                                    elemeAlert.closeLoading();

                                }).error(function(data) {
                            if (data == "40011") {
                                elemeAlert.alert("40011");
                            } else {
                                elemeAlert.alert("40014");
                            }
                            elemeAlert.closeLoading();
                        });

					}

					//职位表查询
					getPositionList = function (searchObjTag,pageNo,pageSize,url) {
						elemeAlert.openLoading();
						$scope.info = {
							token : sessionStorage.getItem("token"),
							searchObjTag :searchObjTag,
							paginationCurrentPage : pageNo,
							paginationPageSize : pageSize,
							url : url
						}
						$scope.req = {
							info: $scope.info
						};

						$http(
							{
								method : 'POST',
								url : localStorage.getItem("Url")
								+ "TSSPositionServiceImpl/getPositionList",
								data : JSON.stringify($scope.info)
							})
							.success(
								function(data) {
									$rootScope.list = data.List;
									$rootScope.totalItems = data.totalRows;
									$rootScope.currentPage=data.currentPage;
									elemeAlert.closeLoading();

								}).error(function(data) {
							if (data == "40011") {
								elemeAlert.alert("40011");
							} else {
								elemeAlert.alert("40014");
							}
							elemeAlert.closeLoading();
						});
					}

					//供应商
					getSupplierList = function (searchObj,searchObjTag,pageNo,pageSize,url){
						elemeAlert.openLoading();
						$scope.info = {
							token : sessionStorage.getItem("token"),
							currentPage : pageNo,
							// currentPage : 1,
							pageSize : pageSize,
							// pageSize : 50,

							company : searchObj.searchByComPanyName
						}
						$http({
							method : 'POST',
							url : localStorage.getItem("Url")
							+ "TSSPositionServiceImpl/getSupplierList",
							data : JSON.stringify($scope.info)
						}).success(function(data){
							$scope.list = data.List;

							if($scope.list != null){
								for (var i = 0; i < $scope.list.length; i++) {
									if($scope.list[i] != null && $scope.list[i].contract_Start != null){
										$scope.list[i].contract_Start = $filter('date')($scope.list[i].contract_Start,'yyyy-MM-dd');
									}
									if($scope.list[i] != null && $scope.list[i].contract_End != null){
										$scope.list[i].contract_End = $filter('date')($scope.list[i].contract_End,'yyyy-MM-dd');
									}
								}
							}


							$scope.totalPages = data.totalRows/data.pageSize;
							$scope.pageSize = data.pageSize;
							$scope.totalItems = data.totalRows;
							$scope.pageNo = data.currentPage;

							elemeAlert.closeLoading();

						}).error(function(data){
							elemeAlert.closeLoading();
							elemeAlert.alert("40014");
						})
					}



				});

