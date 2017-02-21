var elemeUigrid = angular.module('elemeUigrid', [])

elemeUigrid
        .service(
                'elemeUigrid',
                function($rootScope, $http) {

                    // 添加tab页
                    this.setHeight = function(obj) {
                        var rowHeight = 30; // your row height
                        var headerHeight = 30; // your header height
                        if(obj == null){
                            obj = 2;
                        }
                        // alert((obj.data.length * rowHeight + headerHeight) +
                        // "px");
                        return {
                            // height: ($scope.eduExpGridOptions.data.length *
                            // rowHeight + headerHeight) + "px"
                            // height: (obj.length * rowHeight + headerHeight +
                            // 17) + "px"
                            height : (obj.length * rowHeight + headerHeight + 17)
                                    + "px"
                        };

                    }

                    // 获取简历列表
                    this.getUiGridList = function(obj) {
                        var width;
                        if (obj != null && (obj == "tss_resume_list.html" || obj == "tss_survey_list.html"  || obj == "tss_interview_list.html"  || obj == "tss_offer_list.html" )) {
                            width = 100;
                        } else {
                            width = 60;
                        }
                        // 分页
                        $rootScope.totalItems = 0;
                        $rootScope.pagingOptions = {
                            paginationPageSizes : [50,20, 100, 200, 500, 700, 1000,
                                    1500, 2000 ],
                            paginationCurrentPage : 1,
                            paginationPageSize : 50
                        };

                        $rootScope.gridOptions = {
                            rowHeight : 30,
                            data : 'myData',
                            enablePaging : true,
//                          showFooter : true,
                            paginationPageSizes : $rootScope.pagingOptions.paginationPageSizes,
                            totalItems : 'totalItems',
                            options : $rootScope.pagingOptions,
//                          totalItems : $rootScope.totalItems,
                            i18n : 'zh-cn',
                            showColumnMenu : false,
                            jqueryUIDraggable : true,
                            showSelectionCheckbox : true,
                            multiSelect : true,
                            selectedItems : [],
                            // enableCellEdit: true,
                            enableRowSelection : true,
                            keepLastSelected : false,

                            //设置排序属性
                            enableSorting : true,
                            // 设置菜单属性
                            enableColumnMenus : false,
                            
                            enableColumnResizing : true,
//                          enableHorizontalScrollbar : 0,
//                          useExternalPagination: true,
//                          useExternalSorting: true,
//                          checkboxHeaderTemplate : '<input class="ngSelectionHeader" type="checkbox" ng-show="multiSelect" ng-model="$parent.allSelected" onchange="angular.element(this).scope().selectChanged(this)" ng-change="toggleSelectAll($parent.allSelected, true)" />',
//                          checkboxCellTemplate : '<div class="ngSelectionCell"><input tabindex="-1" class="ngSelectionCheckbox" type="checkbox" ng-checked="row.selected"/></div>',
                            columnDefs : [
                                    {
                                        field : 'applyposition',
                                        displayName : '应聘岗位',
                                        width : 150,
                                        cellTooltip: function( row ) {
                                            return row.entity.applyposition;
                                        }, 
//                                      headerCellClass : "center",
                                        headerTooltip: '应聘岗位',
                                        cellTemplate : '<div style="padding-top: 5px; padding-bottom: 7px;">'
                                            +'<a style="font-size: 8pt;width:100%; white-space:nowrap; text-overflow:ellipsis; -o-text-overflow:ellipsis; overflow:hidden;" href="javascript:void(0);" '
                                            +'ng-click="grid.appScope.reviewResumeOriCont(row.entity)" >{{row.entity.applyposition}}</a></div>',
                                         pinnedLeft:true
                                    },
                                    {
                                        field : 'flowStatusValue',
                                        displayName : '流程状态',
                                        width : 120,
                                        cellTooltip: function( row ) {
                                            return row.entity.flowStatusValue;
                                        }, 
//                                      headerCellClass : "center",
                                        headerTooltip: '流程状态',
                                         pinnedLeft:true
                                    },
                                    {
                                        field : 'name',
                                        displayName : '姓名',
                                        width : 60,
                                        cellTooltip: function( row ) {
                                              return row.entity.name;
                                        }, 
                                        headerTooltip: '姓名',
//                                      headerCellClass : "center",
                                        cellTemplate : '<div style="padding-top: 5px; padding-bottom: 7px;">'
                                            +'<a style="font-size: 8pt;width:100%; white-space:nowrap; text-overflow:ellipsis; -o-text-overflow:ellipsis; overflow:hidden;" href="javascript:void(0);" '
                                            +'ng-click="grid.appScope.reviewResumeOriCont(row.entity)" >{{row.entity.name}}</a></div>',
                                        pinnedLeft:true
                                    },

                                    {
                                        field : 'registerDate',
                                        displayName : '报到日期',
                                        width : 90,
                                        cellTooltip: function( row ) {
                                            return row.entity.registerDate;
                                        }, 
//                                      headerCellClass : "center",
                                        headerTooltip: '报到日期'
                                    },
                                    
                                    {
                                        field : 'entryCity',
                                        displayName : '入职城市',
                                        width : 90,
                                        cellTooltip: function( row ) {
                                            return row.entity.entryCity;
                                        }, 
//                                      headerCellClass : "center",
                                        headerTooltip: '报到日期'
                                    },
                                    
                                    {
                                        field : 'mobile',
                                        displayName : '手机号码',
                                        width : 100,
                                        cellTooltip: function( row ) {
                                            return row.entity.mobile;
                                        }, 
//                                      headerCellClass : "center",
                                        headerTooltip: '手机号码'
                                    },
                                    
                                    {
                                        field : 'hrEmail',
                                        displayName : '招聘人员邮箱',
                                        width : 180,
                                        cellTooltip: function( row ) {
                                            return row.entity.hrEmail;
                                        }, 
//                                      headerCellClass : "center",
                                        headerTooltip: '招聘人员邮箱'
                                    },
                                    
                                    {
                                        field : 'hrName',
                                        displayName : '招聘人员姓名',
                                        width : 100,
                                        cellTooltip: function( row ) {
                                            return row.entity.hrName;
                                        }, 
//                                      headerCellClass : "center",
                                        headerTooltip: '招聘人员姓名'
                                    },
                                    
                                    {
                                        field : 'highestdegreeValue',
                                        displayName : '最高学历',
                                        width : 80,
                                        cellTooltip: function( row ) {
                                            return row.entity.highestdegreeValue;
                                        }, 
//                                      headerCellClass : "center",
                                        headerTooltip: '最高学历'
                                    },
                                    
                                    {
                                        field : 'birthday',
                                        displayName : '出生日期',
                                        width : 90,
                                        cellTooltip: function( row ) {
                                            return row.entity.birthday;
                                        }, 
//                                      headerCellClass : "center",
                                        headerTooltip: '出生日期'
                                    },

                                    {
                                        field : 'sexValue',
                                        displayName : '性别',
                                        width : 40,
                                        cellTooltip: function( row ) {
                                              return row.entity.sexValue;
                                        }, 
//                                      headerCellClass : "center",
                                        headerTooltip: '性别'
                                    },
                                    
                                    {
                                        field : 'workYears',
                                        displayName : '工作年限',
                                        width : 65,
//                                      cellClass : "center",
                                        cellTooltip: function( row ) {
                                              return row.entity.workYears;
                                        }, 
//                                      headerCellClass : "center",
                                        headerTooltip: '工作年限'
                                    },
                                    
                                    {
                                        field : 'workStartDate',
                                        displayName : '参加工作日期',
                                        width : 90,
                                        cellTooltip: function( row ) {
                                            return row.entity.workStartDate;
                                        }, 
//                                      headerCellClass : "center",
                                        headerTooltip: '参加工作日期'
                                    },
                                    
                                    {
                                        field : 'email',
                                        displayName : '电子邮件',
                                        width : 180,
                                        cellTooltip: function( row ) {
                                            return row.entity.email;
                                        }, 
//                                      headerCellClass : "center",
                                        headerTooltip: '电子邮件'
                                    },
                                    
                                    {
                                        field : 'resumeSourceValue',
                                        displayName : '简历渠道',
                                        width : 90,
                                        cellTooltip: function( row ) {
                                            return row.entity.resumeSourceValue;
                                        }, 
//                                      headerCellClass : "center",
                                        headerTooltip: '简历渠道'
                                    },
                                    
                                    {
                                        field : 'resumeUptTime',
                                        displayName : '简历更新时间',
                                        width : 150,
                                        cellTooltip: function( row ) {
                                              return row.entity.resumeUptTime;
                                        }, 
//                                      headerCellClass : "center",
                                        headerTooltip: '简历更新时间'
                                    },
                                    
                                    {
                                        field : 'applyCount',
                                        displayName : '饿了么投递次数',
                                        width : 100,
                                        cellTooltip: function( row ) {
                                              return row.entity.applyCount;
                                        }, 
//                                      headerCellClass : "center",
                                        headerTooltip: '饿了么投递次数'
                                    },
                                    
                                    {
                                        field : 'employedValue',
                                        displayName : '是否在职',
                                        width : 100,
                                        cellTooltip: function( row ) {
                                              return row.entity.employedValue;
                                        }, 
//                                      headerCellClass : "center",
                                        headerTooltip: '是否在职'
                                    },
                                    
                                    {
                                        field : 'collegeName',
                                        displayName : '学校',
                                        width : 180,
                                        cellTooltip: function( row ) {
                                              return row.entity.collegeName;
                                        }, 
//                                      headerCellClass : "center",
                                        headerTooltip: '学校'
                                    },
                                    
                                    {
                                        field : 'major',
                                        displayName : '专业',
                                        width : 100,
                                        cellTooltip: function( row ) {
                                              return row.entity.major;
                                        }, 
//                                      headerCellClass : "center",
                                        headerTooltip: '专业'
                                    },
                                    
                                    {
                                        field : 'idNo',
                                        displayName : '证件号',
                                        width : 100,
                                        cellTooltip: function( row ) {
                                            return row.entity.idNo;
                                        }, 
//                                      headerCellClass : "center",
                                        headerTooltip: '证件号'
                                    },
                                    
                                    {
                                        field : 'targetCity',
                                        displayName : '目标城市',
                                        width : 65,
//                                      headerCellClass : "center",
//                                      cellClass : "center",
                                        cellTooltip: function( row ) {
                                            return row.entity.targetCity;
                                        }, 
                                        headerTooltip: '目标城市'
                                    },
                                    
                                
//                                  {
//                                      field : 'interviewPlanTime',
//                                      displayName : '面试可约时间1',
//                                      width : 150,
//                                      cellTooltip: function( row ) {
//                                          return row.entity.interviewPlanTime;
//                                      }, 
////                                        headerCellClass : "center",
//                                      headerTooltip: '面试可约时间1'
//                                  },
//                                  {
//                                      field : 'interviewPlanTime1',
//                                      displayName : '面试可约时间2',
//                                      width : 150,
//                                      cellTooltip: function( row ) {
//                                            return row.entity.InterviewStartTime1;
//                                      }, 
////                                        headerCellClass : "center",
//                                      headerTooltip: '面试可约时间2'
//                                  },
//                                  {
//                                      field : 'interviewPlanTime2',
//                                      displayName : '面试可约时间3',
//                                      width : 150,
//                                      cellTooltip: function( row ) {
//                                          return row.entity.InterviewStartTime2;
//                                      }, 
////                                        headerCellClass : "center",
//                                      headerTooltip: '面试可约时间<3>'
//                                  },
//                                  {
//                                      field : 'interviewIntrecidTime',
//                                      displayName : '最终面试时间',
//                                      width : 150,
//                                      cellTooltip: function( row ) {
//                                          return row.entity.interviewIntrecidTime;
//                                      }, 
////                                        headerCellClass : "center",
//                                      headerTooltip: '最终面试时间'
//                                  },
                                    
                                    {
                                        field : 'jssId',
                                        cellTemplate : '<div style="padding: 5px;"><a id="editBtn" href="javascript:void(0);" ng-click="grid.appScope.review(row.entity)" >查看</a>'
                                            + '<span ng-show="row.entity.resumeFlag && row.entity.jssStatusValue==\'否\' && row.entity.employed!=\'1\'">&nbsp;&nbsp;&nbsp;&nbsp;</span><a id="editBtn"  href="javascript:void(0);" class="" ng-show="row.entity.resumeFlag && row.entity.jssStatusValue==\'否\' && row.entity.employed!=\'1\'" ng-click="grid.appScope.update(row.entity)" >修改</a>'
                                            + '&nbsp;&nbsp;&nbsp;&nbsp;<a id="editBtn"  href="javascript:void(0);" ng-show="row.entity.resumeFlag && row.entity.jssStatusValue==\'是\'"  class="" ng-click="grid.appScope.own(row.entity)" >认领</a></div>',
                                            displayName : '操作',
//                                          headerCellClass : "center",
                                            // cellClass : "center",
                                            width : width,
                                            pinnedRight:true
                                    },
                                    
                                    
                                    
                                    
//                                  {
//                                      field : 'jssStatusValue',
//                                      displayName : '是否共享简历',
//                                      width : 100,
//                                      cellTooltip: function( row ) {
//                                            return row.entity.jssStatusValue;
//                                      }, 
////                                        headerCellClass : "center",
//                                      headerTooltip: '是否共享简历'
//                                  },
                                    
                                    
                                    
                                    

                            ],
                            rowTemplate: '<div ng-class="{\'green\':row.entity.jssIdFlag==\'1\', \'blue\':row.entity.employed==\'1\' }"><div ng-repeat="(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name" class="ui-grid-cell" ng-class="{ \'ui-grid-row-header-cell\': col.isRowHeader }" ui-grid-cell></div></div>',
//                          rowTemplate: '<div ng-class="{\'green\':true, \'blue\':row.entity.employed==\'1\' }"><div ng-repeat="(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name" class="ui-grid-cell" ng-class="{ \'ui-grid-row-header-cell\': col.isRowHeader }" ui-grid-cell></div></div>',
                                //localStorage.getItem(obj.jssId)
//                              '<div style="height: 100%" ng-class="{blue: \'row.entity.employed==1\'}">'
//                                  +'<div ng-style="{' + "'cursor':" + 'row.cursor }" ng-repeat="col in renderedColumns" ng-class="col.colIndex()" class="ngCell {{col.cellClass}}">'
//                                 + '<div class="ngVerticalBar" ng-style="{height: rowHeight}" ng-class="{ ngVerticalBarVisible: !$last }">&nbsp;</div>'
//                                 + '<div ng-cell></div>'
//                                 + '</div>'
//                                 + '</div>',   

                        };
                    }

                    // 教育经历列表
                    this.getEduExpUiGridList = function() {
                        $rootScope.eduExpGridOptions = {
                            rowHeight : 30,
                            data : 'eduData',
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
//                          enableHorizontalScrollbar : 0,
                            checkboxHeaderTemplate : '<input class="ngSelectionHeader" type="checkbox" ng-show="multiSelect" ng-model="$parent.allSelected" onchange="angular.element(this).scope().selectChanged(this)" ng-change="toggleSelectAll($parent.allSelected, true)" />',
                            checkboxCellTemplate : '<div class="ngSelectionCell"><input tabindex="-1" class="ngSelectionCheckbox" type="checkbox" ng-checked="row.selected"/></div>',
                            columnDefs : [
                                    {
                                        field : 'startDate',
                                        displayName : '开始时间',
                                        type : 'date',
                                        cellFilter : 'date:"yyyy-MM-dd"'
                                    },
                                    {
                                        field : 'endDate',
                                        displayName : '结束时间',
                                        type : 'date',
                                        cellFilter : 'date:"yyyy-MM-dd"'
                                    },
                                    {
                                        field : 'college',
                                        displayName : '毕业学校',
                                        cellTooltip: function( row ) {
                                              return row.entity.college;
                                        }
                                    },
                                    {
                                        field : 'major',
                                        displayName : '专业',
                                        cellTooltip: function( row ) {
                                              return row.entity.major;
                                        }
                                    },
                                    {
                                        field : 'degree',
                                        displayName : '学历',
                                        cellTooltip: function( row ) {
                                              return row.entity.degree;
                                        },
                                        editableCellTemplate : 'ui-grid/dropdownEditor',
                                        cellFilter : 'mapDegree',
                                        editDropdownValueLabel : 'degree',
                                        editDropdownOptionsArray : [ {
                                            id : 1,
                                            degree : '博士研究生'
                                        }, {
                                            id : 2,
                                            degree : '硕士研究生'
                                        }, {
                                            id : 3,
                                            degree : '大学本科'
                                        }, {
                                            id : 4,
                                            degree : '专科'
                                        }, {
                                            id : 5,
                                            degree : '中专'
                                        }, {
                                            id : 6,
                                            degree : '高中'
                                        }, {
                                            id : 7,
                                            degree : '初中'
                                        }, {
                                            id : 8,
                                            degree : '小学'
                                        }, {
                                            id : 9,
                                            degree : '其它'
                                        } ]
                                    }, {
                                        field : 'remark',
                                        displayName : '备注',
                                        cellTooltip: function( row ) {
                                              return row.entity.remark;
                                        }
                                    }, ]
                        };
                    }
                    // 履历记录列表
                    this.getHistoryUiGridList = function() {
                        $rootScope.historyGridOptions = {
                            rowHeight : 30,
                            data : 'historyData',
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
//                          enableHorizontalScrollbar : 0,
                            checkboxHeaderTemplate : '<input class="ngSelectionHeader" type="checkbox" ng-show="multiSelect" ng-model="$parent.allSelected" onchange="angular.element(this).scope().selectChanged(this)" ng-change="toggleSelectAll($parent.allSelected, true)" />',
                            checkboxCellTemplate : '<div class="ngSelectionCell"><input tabindex="-1" class="ngSelectionCheckbox" type="checkbox" ng-checked="row.selected"/></div>',
                            columnDefs : [ {
                                field : 'startDate',
                                displayName : '开始时间',
                                type : 'date',
                                width : 90,
                                cellFilter : 'date:"yyyy-MM-dd"'
                            }, {
                                field : 'endDate',
                                displayName : '结束时间',
                                width : 90,
                                type : 'date',
                                cellFilter : 'date:"yyyy-MM-dd"'
                            }, {
                                field : 'company',
                                displayName : '工作单位',
                                width : 240,
                                cellTooltip: function( row ) {
                                      return row.entity.company;
                                }
                            }, {
                                field : 'position',
                                displayName : '职位',
                                cellTooltip: function( row ) {
                                      return row.entity.position;
                                }
                            }, {
                                field : 'proveMan',
                                displayName : '证明人',
                                width : 50,
                                cellTooltip: function( row ) {
                                      return row.entity.proveMan;
                                }
                            }, {
                                field : 'mobile',
                                displayName : '证明人电话',
                                cellTooltip: function( row ) {
                                      return row.entity.mobile;
                                }
                            },  {
                                field : 'jobDuties',
                                displayName : '工作职责',
                                width : 300,
                                cellTooltip: function( row ) {
                                      return row.entity.jobDuties;
                                }
                            },
//                          {
//                              field : 'expType',
//                              displayName : '履历类别',
//                              cellTooltip: function( row ) {
//                                    return row.entity.expType;
//                              },
//                              editableCellTemplate : 'ui-grid/dropdownEditor',
//                              cellFilter : 'mapExpType',
//                              editDropdownValueLabel : 'expType',
//                              editDropdownOptionsArray : [ {
//                                  id : 1,
//                                  expType : '工作'
//                              }, {
//                                  id : 2,
//                                  expType : '实习'
//                              } ]
//                          },
//                          {
//                              field : 'remark',
//                              displayName : '备注',
//                              cellTooltip: function( row ) {
//                                    return row.entity.remark;
//                              }
//                          },
                            ]
                        };
                    }

                    // 履历记录列表
                    this.getProjectUiGridList = function() {
                        $rootScope.projectGridOptions = {
                            rowHeight : 30,
                            data : 'projectData',
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
//                          enableHorizontalScrollbar : 0,
                            checkboxHeaderTemplate : '<input class="ngSelectionHeader" type="checkbox" ng-show="multiSelect" ng-model="$parent.allSelected" onchange="angular.element(this).scope().selectChanged(this)" ng-change="toggleSelectAll($parent.allSelected, true)" />',
                            checkboxCellTemplate : '<div class="ngSelectionCell"><input tabindex="-1" class="ngSelectionCheckbox" type="checkbox" ng-checked="row.selected"/></div>',
                            columnDefs : [ {
                                field : 'startDate',
                                displayName : '开始时间',
                                type : 'date',
                                cellFilter : 'date:"yyyy-MM-dd"'
                            }, {
                                field : 'endDate',
                                displayName : '结束时间',
                                type : 'date',
                                cellFilter : 'date:"yyyy-MM-dd"'
                            }, {
                                field : 'project',
                                displayName : '项目名称',
                                cellTooltip: function( row ) {
                                      return row.entity.project;
                                }
                            }, {
                                field : 'playingRole',
                                displayName : '承担角色',
                                cellTooltip: function( row ) {
                                      return row.entity.playingRole;
                                }
                            }, {
                                field : 'jobDuties',
                                displayName : '工作职责',
                                cellTooltip: function( row ) {
                                      return row.entity.jobDuties;
                                }
                            }, {
                                field : 'proveMan',
                                displayName : '证明人',
                                cellTooltip: function( row ) {
                                      return row.entity.proveMan;
                                }
                            }, {
                                field : 'mobile',
                                displayName : '证明人电话',
                                cellTooltip: function( row ) {
                                      return row.entity.mobile;
                                }
                            }, {
                                field : 'remark',
                                displayName : '备注',
                                cellTooltip: function( row ) {
                                      return row.entity.remark;
                                }
                            }, ]
                        };
                    }
                    
                    // 面试记录列表
                    this.getInterviewRecordsUiGridList = function() {
                        $rootScope.interviewRecordsGridOptions = {
                            rowHeight : 30,
                            data : 'tssInterviewRecordsModelListReview',
                            enableSorting : false,
                            enableColumnMenus : false,
                            enablePaging : true,
                            // totalServerItems : 'totalServerItems',
                            // pagingOptions : $scope.pagingOptions,
                            // filterOptions : $scope.filterOptions,
                            // i18n:'zh-cn',
                            enableColumnResizing : true,
                            jqueryUIDraggable : true,
//                          showSelectionCheckbox : true,
                            multiSelect : true,
                            selectedItems : [],
                            keepLastSelected : false,
//                          enableHorizontalScrollbar : 0,
//                          checkboxHeaderTemplate : '<input class="ngSelectionHeader" type="checkbox" ng-show="multiSelect" ng-model="$parent.allSelected" onchange="angular.element(this).scope().selectChanged(this)" ng-change="toggleSelectAll($parent.allSelected, true)" />',
//                          checkboxCellTemplate : '<div class="ngSelectionCell"><input tabindex="-1" class="ngSelectionCheckbox" type="checkbox" ng-checked="row.selected"/></div>',
                            columnDefs : [ {
                                field : 'mainFlagValue',
                                displayName : '是否为主面试官'
                            }, {
                                field : 'researchistName',
                                displayName : '面试官姓名'
                            }, {
                                field : 'mobile',
                                displayName : '面试官电话'
                            }, {
                                field : 'deptName',
                                displayName : '面试官部门'
                            }, {
                                field : 'postName',
                                displayName : '面试官岗位'
                            }, {
                                field : 'planLocation',
                                displayName : '计划面试地点'
                            },
                            {
                                field : 'recStatusValue',
                                displayName : '面试状态'
                            },
                            {
                                field : 'intrecid',
                                cellTemplate : '<div ><a href="javascript:void(0);" ng-click="grid.appScope.reviewInterview(row.entity)" >查看</a></div>',
                                displayName : '操作',
                                headerCellClass : "center",
                                cellClass : "center"
                            }, ]
                        };
                    }
                    
                    // 审批记录列表
                    this.getApprovalHistoryUiGridList = function() {
                        $rootScope.approvalHistoryGridOptions = {
                                rowHeight : 30,
                                data : 'tssApprovalHistoryModelListReview',
                                enableSorting : false,
                                enableColumnMenus : false,
                                enablePaging : true,
                                // totalServerItems : 'totalServerItems',
                                // pagingOptions : $scope.pagingOptions,
                                // filterOptions : $scope.filterOptions,
                                // i18n:'zh-cn',
                                enableColumnResizing : true,
                                jqueryUIDraggable : true,
//                              showSelectionCheckbox : true,
                                multiSelect : true,
                                selectedItems : [],
                                keepLastSelected : false,
//                              enableHorizontalScrollbar : 0,
//                              checkboxHeaderTemplate : '<input class="ngSelectionHeader" type="checkbox" ng-show="multiSelect" ng-model="$parent.allSelected" onchange="angular.element(this).scope().selectChanged(this)" ng-change="toggleSelectAll($parent.allSelected, true)" />',
//                              checkboxCellTemplate : '<div class="ngSelectionCell"><input tabindex="-1" class="ngSelectionCheckbox" type="checkbox" ng-checked="row.selected"/></div>',
                                columnDefs : [ {
                                    field : 'apprName',
                                    displayName : '审批人',
                                    width : 70
                                }, {
                                    field : 'mobile',
                                    displayName : '审批人电话',
                                    width : 100
                                }, {
                                    field : 'deptName',
                                    displayName : '审批人部门',
                                    width : 100
                                }, {
                                    field : 'postName',
                                    displayName : '审批人岗位',
                                    width : 100
                                }, {
                                    field : 'email',
                                    displayName : '审批人邮箱',
                                    width : 150
                                },{
                                    field : 'apprDate',
                                    displayName : '审批时间',
                                    width : 150
                                },{
                                    field : 'postLevelValue',
                                    displayName : '职级',
                                    width : 60
                                },{
                                    field : 'postRank',
                                    displayName : '职等',
                                    width : 60
                                },{
                                    field : 'expectTypeValue',
                                    displayName : '薪资类别',
                                    width : 80
                                },{
                                    field : 'hireWage',
                                    displayName : '税前薪资',
                                    width : 80
                                },{
                                    field : 'hireOpinionValue',
                                    displayName : '录用意见',
                                    width : 80
                                },{
                                    field : 'hireRemark',
                                    displayName : '原因留言',
                                    width : 100
                                },
                                /*{
                                    field : 'recStatusValue',
                                    displayName : '录用状态',
                                    width : 100
                                },*/
                                /*{
                                    field : 'apprhisid',
                                    cellTemplate : '<div ><a href="javascript:void(0);" ng-click="grid.appScope.reviewApprovalHistory(row.entity)" >查看</a></div>',
                                    displayName : '操作',
                                    headerCellClass : "center",
                                    cellClass : "center"
                                },*/ ]
                        };
                    }
                    
                    // 紧急联系人列表
                    this.getContactInfoUiGridList = function() {
                        $rootScope.contactInfoGridOptions = {
                            rowHeight : 30,
                            data : 'contactInfoData',
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
//                          enableHorizontalScrollbar : 0,
                            checkboxHeaderTemplate : '<input class="ngSelectionHeader" type="checkbox" ng-show="multiSelect" ng-model="$parent.allSelected" onchange="angular.element(this).scope().selectChanged(this)" ng-change="toggleSelectAll($parent.allSelected, true)" />',
                            checkboxCellTemplate : '<div class="ngSelectionCell"><input tabindex="-1" class="ngSelectionCheckbox" type="checkbox" ng-checked="row.selected"/></div>',
                            columnDefs : [ {
                                field : 'name',
                                displayName : '联系人'
/*                              enableCellEdit: true,
                                editableCellTemplate: 
                                      "<div><form name=\"inputForm\"><input type=\"INPUT_TYPE\" ng-class=\"'colt' + col.uid\" ui-grid-editor ng-model=\"MODEL_COL_FIELD\" name=\"label\" ng-minlength=\"3\" ng-maxlength=\"10\" required validate-required-cell></form></div><span class=\"error\" ng-show=\"inputForm.$valid\">Too short!</span>"*/
                            }, {
                                field : 'relationship',
                                displayName : '与联系人关系',
                                cellTooltip: function( row ) {
                                      return row.entity.relationship;
                                },
                                editableCellTemplate : 'ui-grid/dropdownEditor',
                                cellFilter : 'mapRelationship',
                                editDropdownValueLabel : 'relationship',
                                editDropdownOptionsArray : [ {//1：配偶；2：子女；3：父母；4：亲人；5：朋友；6：其它；
                                    id : 1,
                                    relationship : '配偶'
                                }, {
                                    id : 2,
                                    relationship : '子女'
                                }, {
                                    id : 3,
                                    relationship : '父母'
                                }, {
                                    id : 4,
                                    relationship : '亲人'
                                }, {
                                    id : 5,
                                    relationship : '朋友'
                                }, {
                                    id : 6,
                                    relationship : '其它'
                                } ]
                            
                            }, {
                                field : 'isprimary',
                                displayName : '是否主要联系人',
                                cellTooltip: function( row ) {
                                      return row.entity.project;
                                },
                                editableCellTemplate : 'ui-grid/dropdownEditor',
                                cellFilter : 'mapIsPrimary',
                                editDropdownValueLabel : 'isPrimary',
                                editDropdownOptionsArray : [ {//1：是；2：否；
                                    id : 1,
                                    isPrimary : '是'
                                }, {
                                    id : 2,
                                    isPrimary : '否'
                                }]
                            }, {
                                field : 'mobile',
                                displayName : '手机',
                                cellTooltip: function( row ) {
                                      return row.entity.mobile;
                                }
                            } ]
                        };
                    }
                    
                    // 教育经历列表
                    this.getEduExpForCollectUiGridList = function() {
                        $rootScope.eduExpGridOptions = {
                            rowHeight : 30,
                            data : 'eduData',
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
//                          enableHorizontalScrollbar : 0,
                            checkboxHeaderTemplate : '<input class="ngSelectionHeader" type="checkbox" ng-show="multiSelect" ng-model="$parent.allSelected" onchange="angular.element(this).scope().selectChanged(this)" ng-change="toggleSelectAll($parent.allSelected, true)" />',
                            checkboxCellTemplate : '<div class="ngSelectionCell"><input tabindex="-1" class="ngSelectionCheckbox" type="checkbox" ng-checked="row.selected"/></div>',
                            columnDefs : [
                                    {
                                        field : 'startDate',
                                        displayName : '开始时间',
                                        type : 'date',
                                        cellFilter : 'date:"yyyy-MM-dd"'
                                    },
                                    {
                                        field : 'endDate',
                                        displayName : '结束时间',
                                        type : 'date',
                                        cellFilter : 'date:"yyyy-MM-dd"'
                                    },
                                    {
                                        field : 'college',
                                        displayName : '毕业学校',
                                        cellTooltip: function( row ) {
                                              return row.entity.college;
                                        }
                                    },
                                    {
                                        field : 'major',
                                        displayName : '专业',
                                        cellTooltip: function( row ) {
                                              return row.entity.major;
                                        }
                                    },
                                    {
                                        field : 'degree',
                                        displayName : '学历',
                                        cellTooltip: function( row ) {
                                              return row.entity.degree;
                                        },
                                        editableCellTemplate : 'ui-grid/dropdownEditor',
                                        cellFilter : 'mapDegree',
                                        editDropdownValueLabel : 'degree',
                                        editDropdownOptionsArray : [ {
                                            id : 1,
                                            degree : '博士研究生'
                                        }, {
                                            id : 2,
                                            degree : '硕士研究生'
                                        }, {
                                            id : 3,
                                            degree : '大学本科'
                                        }, {
                                            id : 4,
                                            degree : '专科'
                                        }, {
                                            id : 5,
                                            degree : '中专'
                                        }, {
                                            id : 6,
                                            degree : '高中'
                                        }, {
                                            id : 7,
                                            degree : '初中'
                                        }, {
                                            id : 8,
                                            degree : '小学'
                                        }, {
                                            id : 9,
                                            degree : '其它'
                                        } ]
                                    },{
                                        field : 'prdegree',
                                        displayName : '学位',
                                        cellTooltip: function( row ) {
                                              return row.entity.prdegree;
                                        },
                                        editableCellTemplate : 'ui-grid/dropdownEditor',
                                        cellFilter : 'mapprdegree',
                                        editDropdownValueLabel : 'prdegree',
                                        editDropdownOptionsArray : [ {
                                            id : 1,
                                            prdegree : '博士学位'
                                        }, {
                                            id : 2,
                                            prdegree : '硕士学位'
                                        }, {
                                            id : 3,
                                            prdegree : '学士学位'
                                        }, {
                                            id : 4,
                                            prdegree : '无学位'
                                        }]
                                    },{
                                        field : 'highestDegree',
                                        displayName : '是否最高学历',
                                        cellTooltip: function( row ) {
                                              return row.entity.highestDegree;
                                        },
                                        editableCellTemplate : 'ui-grid/dropdownEditor',
                                        cellFilter : 'maphighestDegree',
                                        editDropdownValueLabel : 'highestDegree',
                                        editDropdownOptionsArray : [ {
                                            id : 1,
                                            highestDegree : '是'
                                        }, {
                                            id : 2,
                                            highestDegree : '否'
                                        }]
                                    },]
                        };
                    }
                    // 履历记录列表
                    this.getHistoryForCollectUiGridList = function() {
                        $rootScope.historyGridOptions = {
                            rowHeight : 30,
                            data : 'historyData',
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
//                          enableHorizontalScrollbar : 0,
                            checkboxHeaderTemplate : '<input class="ngSelectionHeader" type="checkbox" ng-show="multiSelect" ng-model="$parent.allSelected" onchange="angular.element(this).scope().selectChanged(this)" ng-change="toggleSelectAll($parent.allSelected, true)" />',
                            checkboxCellTemplate : '<div class="ngSelectionCell"><input tabindex="-1" class="ngSelectionCheckbox" type="checkbox" ng-checked="row.selected"/></div>',
                            columnDefs : [ {
                                field : 'startDate',
                                displayName : '开始时间',
                                type : 'date',
                                cellFilter : 'date:"yyyy-MM-dd"'
                            }, {
                                field : 'endDate',
                                displayName : '结束时间',
                                type : 'date',
                                cellFilter : 'date:"yyyy-MM-dd"'
                            }, {
                                field : 'company',
                                displayName : '工作单位',
                                cellTooltip: function( row ) {
                                      return row.entity.company;
                                }
                            }, {
                                field : 'position',
                                displayName : '职位',
                                cellTooltip: function( row ) {
                                      return row.entity.position;
                                }
                            }, {
                                field : 'department',
                                displayName : '部门',
                                cellTooltip: function( row ) {
                                      return row.entity.department;
                                }
                            },{
                                field : 'jobDuties',
                                displayName : '工作职责',
                                cellTooltip: function( row ) {
                                      return row.entity.jobDuties;
                                }
                            }, {
                                field : 'workAddress',
                                displayName : '工作地址',
                                cellTooltip: function( row ) {
                                      return row.entity.workAddress;
                                }
                            }, {
                                field : 'leavingReason',
                                displayName : '离职原因',
                                cellTooltip: function( row ) {
                                      return row.entity.leavingReason;
                                }
                            }, {
                                field : 'proveMan',
                                displayName : '证明人',
                                cellTooltip: function( row ) {
                                      return row.entity.proveMan;
                                }
                            }, {
                                field : 'mobile',
                                displayName : '证明人电话',
                                cellTooltip: function( row ) {
                                      return row.entity.mobile;
                                }
                            }, 
//                          {
//                              field : 'expType',
//                              displayName : '履历类别',
//                              cellTooltip: function( row ) {
//                                    return row.entity.expType;
//                              },
//                              editableCellTemplate : 'ui-grid/dropdownEditor',
//                              cellFilter : 'mapExpType',
//                              editDropdownValueLabel : 'expType',
//                              editDropdownOptionsArray : [ {
//                                  id : 1,
//                                  expType : '工作'
//                              }, {
//                                  id : 2,
//                                  expType : '实习'
//                              } ]
//                          }, 
                            ]
                        };
                    }
                });
/*elemeUigrid.directive('validateRequiredCell', function(uiGridEditConstants) {
    return {
        restrict: 'A',
        scope: false,
        require: 'ngModel',
        link: function (scope, element, attrs, ngModel) {

            element.bind('blur', function(evt) {

              if (scope.inputForm && !scope.inputForm.$valid) {

                // Stops the rest of the event handlers from being executed
                evt.stopImmediatePropagation();
              }

            });

        }
    };
});*/