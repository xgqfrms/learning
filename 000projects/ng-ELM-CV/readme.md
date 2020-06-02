# Angular2 ELM CV  


https://tss.rajax.me/TSS_FE/html/tss_pc_offer.html

饿了么公司欢迎您！请填写并补充您的个人信息，谢谢！(电脑端请使用谷歌Chrome浏览器)

凌晨-应聘前端工程师
应聘部门：基础交易机动组
面试时间：2017-02-22 10:30



*基本信息

身份证号码：
出生日期：
性别：
户籍地址：
现居住地址：
家庭地址：
户口性质：
民族：
籍贯：
血型：
英语等级：
身高：
体重：
兴趣专长：
犯罪史：
是否有亲属在本公司工作：
本公司亲属姓名：
是否在职：
婚姻情况：
生育情况：
学历：
学位：
参加工作日期：
私人电子邮箱：
健康状况：
政治面貌：


*学历信息



新增教育信息

入学日期*： 
毕业日期*： 
学校*： 
学历*： 
学位*： 
专业*： 
本条为最高学历*：



<div class="form-group">
    <label class="col-sm-3 control-label" for="ds_name">学历<span class="star">*</span>：
    </label>
    <div class="col-sm-6 prm-history-col-sm-6">
        <select class="form-control ng-pristine ng-valid ng-touched" ng-model="eInfo.degree" ng-options="item.enumNo as item.enumValue for item in educationBgList">
            <option value="" class="" selected="selected">--请选择--</option>
            <option value="number:1" label="博士研究生">博士研究生</option>
            <option value="number:2" label="硕士研究生">硕士研究生</option>
            <option value="number:3" label="大学本科">大学本科</option>
            <option value="number:4" label="专科">专科</option>
            <option value="number:5" label="中专">中专</option>
            <option value="number:6" label="高中">高中</option>
            <option value="number:7" label="初中">初中</option>
            <option value="number:8" label="小学">小学</option>
            <option value="number:9" label="其他">其他</option>
        </select>
        <span ng-show="eduSaveFlag &amp;&amp; (this.eInfo.degree == null || this.eInfo.degree == '')" style="color:red" class="ng-hide">请输入学历！</span>
    </div>
</div>


<div class="form-group">
    <label class="col-sm-3 control-label" for="ds_name">学位<span class="star">*</span>：
    </label>
    <div class="col-sm-6 prm-history-col-sm-6">
        <select class="form-control ng-pristine ng-untouched ng-valid" ng-model="eInfo.prdegree" ng-options="item.enumNo as item.enumValue for item in prdegreeList">
            <option value="" class="" selected="selected">--请选择--</option>
            <option value="number:1" label="博士学位">博士学位</option>
            <option value="number:2" label="硕士学位">硕士学位</option><option value="number:3" label="学士学位">学士学位</option>
            <option value="number:4" label="无学位">无学位</option>
        </select>
        <span ng-show="eduSaveFlag &amp;&amp; (this.eInfo.prdegree == null || this.eInfo.prdegree == '')" style="color:red" class="ng-hide">请输入学位！</span>
    </div>
</div>


<div class="form-group">
    <label class="col-sm-3 control-label" for="ds_name">本条为最高学历<span class="star">*</span>：
    </label>
    <div class="col-sm-6 prm-history-col-sm-6">
        <select class="form-control ng-pristine ng-untouched ng-valid" ng-model="eInfo.highestDegree" ng-options="item.enumNo as item.enumValue for item in isHighestDegreeList">
            <option value="" class="" selected="selected">--请选择--</option>
            <option value="number:1" label="是">是</option>
            <option value="number:2" label="否">否</option>
        </select>
        <span ng-show="eduSaveFlag &amp;&amp; (this.eInfo.highestDegree == null || this.eInfo.highestDegree == '')" style="color:red" class="ng-hide">请输入本条是否为最高学历！</span>
    </div>
</div>


<div class="form-group">
    <div class="col-sm-12" align="center">
        <button type="button" class="btn btn-info" ng-click="OK($hide)">保存</button>
        &nbsp;&nbsp;&nbsp;
        <button type="button" class="btn btn-info" ng-click="NO($hide)">取消</button>
    </div>
</div>




*履历记录



*家庭/朋友圈


新增联系人信息

联系人姓名*： 
与其关系*： 
手机号码*： 
工作单位及部门： 
本联系人为最主要联系人*：


<div class="col-sm-6 prm-history-col-sm-6">
    <select class="form-control ng-pristine ng-valid ng-touched" ng-model="contactInfo.relationship" ng-options="item.enumNo as item.enumValue for item in relationshipList">
        <option value="" class="" selected="selected">--请选择--</option>
        <option value="number:1" label="配偶">配偶</option>
        <option value="number:2" label="子女">子女</option>
        <option value="number:3" label="父母">父母</option><option value="number:4" label="亲人">亲人</option>
        <option value="number:5" label="朋友">朋友</option>
        <option value="number:6" label="其他">其他</option>
    </select>
    <span ng-show="contactSaveFlag &amp;&amp; (this.contactInfo.relationship == null || this.contactInfo.relationship == '')" style="color:red" class="ng-hide">请输入与联系人关系！</span>
</div>

<div class="col-sm-6 prm-history-col-sm-6">
    <select class="form-control ng-pristine ng-valid ng-touched" ng-model="contactInfo.isPrimary" ng-options="item.enumNo as item.enumValue for item in yesOrNoList">
        <option value="" class="" selected="selected">--请选择--</option>
        <option value="number:1" label="是">是</option>
        <option value="number:2" label="否">否</option>
    </select>
    <span ng-show="contactSaveFlag &amp;&amp; (this.contactInfo.isPrimary == null || this.contactInfo.isPrimary == '')" style="color:red" class="ng-hide">请输入本联系人是否为最主要联系人！</span>
</div>

培训经历

新增培训信息

开始日期*： 
结束日期*： 
培训机构*： 
培训内容*： 
城市*： 
获得证书：


项目经验

新增项目信息

开始日期*： 
结束日期*： 
项目名称*： 
项目内容*：


奖励/证书

新增奖励/证书信息

获得证书日期*： 
获得证书*：





自我评价

修改自我评价

自我评价：


*求职意向

意向工作区域：
可出差意向：
原单位基本月薪：
原单位绩效/奖金：
原单位其他福利：
税前月薪要求-底限：
税前月薪要求-期望：
可报到日期：

我申明：我对上述资料的正确性负责，如果有任何不实，饿了么公司有权对我进行解聘工作。


提交

<div class="col-sm-6 prm-history-col-sm-6">
    <select class="form-control ng-pristine ng-valid ng-touched" ng-model="aInfo.travelIntention" ng-options="item.enumNo as item.enumValue for item in travelIntentionList">
        <option value="" class="" selected="selected">--请选择--</option>
        <option value="number:1" label="不可出差">不可出差</option>
        <option value="number:2" label="偶尔出差（一周内）">偶尔出差（一周内）</option>
        <option value="number:3" label="短期出差（1~3个月）">短期出差（1~3个月）</option>
        <option value="number:4" label="长期出差（3~6个月）">长期出差（3~6个月）</option>
    </select>
    <span ng-show="ambiSaveFlag &amp;&amp; (this.aInfo.travelIntention == null || this.aInfo.travelIntention == '')" style="color:red" class="ng-hide">请输入可出差意向！</span>
</div>



<div class="form-group">
    <label class="col-sm-3 control-label" for="ds_name">原单位基本月薪：</label>
    <div class="col-sm-6 prm-history-col-sm-6 placeholder-right">
        <input type="text" class="form-control ng-valid-maxlength ng-touched ng-dirty ng-valid-parse ng-valid ng-valid-pattern" ng-model="aInfo.basicSalary" placeholder="元" name="basicSalary" ng-pattern="/^\+?[1-9][0-9]*$/" maxlength="10">
        <span ng-show="myform.basicSalary.$invalid &amp;&amp; !myform.basicSalary.$pristine" style="color: red;" class="ng-hide">请输入整数！</span>
    </div>
</div>


<div class="form-group">
    <label class="col-sm-3 control-label" for="ds_name" style="float:left">可报到日期<span class="star">*</span>：
    </label>
    <div class="col-sm-6 prm-history-col-sm-6 placeholder-right">
        <!-- <input class="form-control " type="button" style="text-align:left"
                data-date-format="yyyy-MM-dd" data-autoclose="1" required
                ng-model="aInfo.checkInDate" placeholder="日期" 
                bs-datepicker> -->
        <select class="form-control ng-pristine ng-valid ng-touched" ng-model="aInfo.checkInDate" ng-options="item.enumNo as item.enumValue for item in checkInDateList">
            <option value="" class="" selected="selected">--请选择--</option>
            <option value="number:1" label="1周内">1周内</option><option value="number:2" label="2周内">2周内</option>
            <option value="number:3" label="1个月内">1个月内</option>
            <option value="number:4" label="1个月后">1个月后</option>
        </select>
        <span ng-show="ambiSaveFlag &amp;&amp; (this.aInfo.checkInDate == null || this.aInfo.checkInDate == '')" style="color:red" class="ng-hide">请输入可报到日期！</span>
    </div>
</div>








招聘管理系统

https://tss.rajax.me/TSS_FE/html/tss_login.html


https://tss.rajax.me/TSS_FE/html/tss_collect_login.html


饿了么人才信息登记








https://tss.rajax.me/TSS_FE/img/tab/tab-close.gif



https://github.com/eu81273

https://github.com/eu81273/angular.treeview




AngularJS
Javascript Framework
Lo-dash
Javascript Framework
Nginx
Web Server
Twitter Bootstrap
Web Framework
jQuery 2.1.4
Javascript Framework
jQuery UI
Javascript Framework



https://github.com/jamesflorentino/nanoScrollerJS




