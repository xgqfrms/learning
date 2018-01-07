/**
 *
 * @namespace STOCK_F9_FV
 * @subnamespace STOCK_F9_FV.Modal
 *
 * @description BouncedModal
 * @author xgqfrms
 *
 * @method getClientWidthHeight
 * @method BouncedModal(options,debug)
 *
 */

// namespaces
var STOCK_F9_FV = STOCK_F9_FV || {};
// sub namespaces
STOCK_F9_FV.Modal = STOCK_F9_FV.Modal || {};

STOCK_F9_FV.Modal.Public = STOCK_F9_FV.Modal.Public  || ((debug = false) => {
    return {
        view: () => {
            const w = document.documentElement.clientWidth;
            const h = document.documentElement.clientHeight;
            if (debug) {
                console.log(`clientHeight = `, h);
                console.log(`clientWidth = `, w);
            }
            //w:可视区域的宽度
            // h:可视区域的高度
            return {
                w,
                h
            };
        },
    }
});


STOCK_F9_FV.Modal.getClientWidthHeight = STOCK_F9_FV.Modal.getClientWidthHeight  || ((debug = false) => {
    let width = 0,
        innerwidth = 0,
        bodywidth = 0,
        height = 0,
        innerheight = 0,
        bodyheight = 0,
        isIE = navigator.userAgent.indexOf("MSIE 6.0") !== -1 ? true : false;
    if(!isIE){
        bodywidth = document.body.clientWidth;
        width = document.documentElement.clientWidth;
        innerwidth = window.innerWidth;
        // 50px ??? bug
        bodyheight = document.body.clientHeight;
        height = document.documentElement.clientHeight;
        innerheight = window.innerHeight;
        if (debug) {
            console.log(`document.body.clientHeight = `, bodyheight);
            // 50px ??? bug
            console.log(`document.documentElement.clientHeight = `, height);
            console.log(`window.innerHeight = `, innerheight);
            console.log(`***********************************`);
            console.log(`document.body.clientWidth = `, bodywidth);
            console.log(`document.documentElement.clientWidth = `, width);
            console.log(`window.innerWidth = `, innerwidth);
        }
    }else{
        width = document.documentElement.clientWidth;
        height = document.documentElement.clientHeight;
        if (debug) {
            console.log(`document.documentElement.clientHeight = `, height);
            console.log(`document.documentElement.clientWidth = `, width);
        }
    }
    if (debug) {
        console.log(`isIE = `, isIE);
        console.log(`clientHeight = `, height);
        console.log(`clientWidth = `, width);
    }
    return {
        w: width,
        h: height
    };
});


/**
 * @description BouncedModal & $.extend
 *
 * @param {* Object} options
 * @param {* Boolean} debug
 *
 * @example BouncedModal({width: 300, height: 200, title:"信息", datas: {}}, true)
 *
 * @augments $.extend === Object.assign
 */

/* 弹框的基本对象 Constructor */
// STOCK_F9_FV.Modal.BouncedModal = STOCK_F9_FV.Modal.BouncedModal || ((options, debug = false) => {
function BouncedModal(options, debug = false){
    if (debug) {
        console.log(`BouncedModal's options = \n`, JSON.stringify(options, null, 4));
    }
    // ??? this ??? not Constructorle ???
    // this.config = {
    //     layerBoxClass : "layerBox",
    //     layerclass:"",
    //     width: 300,// UDP.getClientWidth()-60
    //     height: 200,// UDP.getClientWidth()-60
    //     zIndex: 1000,
    //     title: "信息",
    //     setOverflow: "overflow-y:scroll",
    //     str: "",
    //     datas: {},
    //     callback: function () {
    //         //
    //     }
    // };
    // Object.assign(this.config, options);
    if (debug) {
        console.log(`BouncedModal's this.config = \n`, JSON.stringify(this.config, null, 4));
    }
    // return this.config;
    this.config = {
        layerBoxClass : "layerBox",
        layerclass:"",
        width: 300,// UDP.getClientWidth()-60
        height: 200,// UDP.getClientWidth()-60
        zIndex: 1000,
        title: "信息",
        setOverflow: "overflow-y:scroll",
        str: "",
        datas: {},
        callback: function () {
            //
        }
    };
    $.extend(this.config, options);
    // jquery plugin ???
    // Object.assign({}, obj1, obj2);
};

// STOCK_F9_FV.Modal.BouncedModal.prototype = {
BouncedModal.prototype = {
    /*创建弹出框*/
    _createDialog: function(state, debug = false){
        var that = this;
        var str = "";
        that.config.zIndex++;
        var s = UDP.Public.view();
        // UDP ??? NameSpace
        const BAD_URLs = [
            "聚源数据",
            "WWW",
            "qq",
            "ww",
            "www.",
            "www",
            "wwww",
            "http://data.east",
            "http://www.",
            "http://www.eweb",
            "https://wx.qq.com/"
        ];
        // shape data ???
        const data = that.config.datas;
        if (debug) {
            console.log(`BouncedModal's data = \n`, JSON.stringify(data, null, 4));
        }
        let url_link = BAD_URLs.includes(data.Url) === true ? `` : `
            <a
                style="margin-left:10px;color:#5389d2;"
                class="gotext"
                id="linkyuanwen"
                target="_blank"
                data-value="${data.Url}"
                href="${data.Url}">
                查看原文
                <i class="icon-external-link"></i>
            </a>
        `;
        if (debug) {
            // value="${data.Url}" !== href="${data.Url}"
            console.log(`BouncedModal's url_link = \n`, url_link);
        }
        const html_template = `
            <div>
                <div class="modal-title">
                    <h3 style="margin-left: 15px;">${data.Title}</h3>
                </div>
                <div class="zxdtData">
                    <div class="fontSize" id="fontsize">
                        <span>字体：</span>
                        <span class="fontBtn">
                            <a id="big">大</a>
                        </span>
                        <span class="fontBtn">
                            <a id="middle">中</a>
                        </span>
                        <span class="fontBtn active">
                            <a id="small">小</a>
                        </span>
                    </div>
                    <div class="model-Info">
                        <span>
                            来源：
                            <span id="zxdtlaiyuan" class="">
                                ${data.Infosource}
                            </span>
                            &nbsp;
                        </span>
                        <span id="zxdtPubDate" class="">${data.PublishDate}</span>&nbsp;
                        ${url_link}
                    </div>
                    <div class="clr"></div>
                </div>
                <div class="modal-body" style="overflow: auto;text-align: left;">
                    <div id="zxdtContent">
                        ${data.Content}
                    </div>
                </div>
            </div>
        `;
        str = `
            <div class="overlay" style="z-index: ${that.config.zIndex}">
                <div
                    class="animated zoomIn ${that.config.layerBoxClass}"
                    data-animated="animated"
                    data-layerBox="layerBox"
                    style="width: ${this.config.width}px; height: ${this.config.height}px">
                    <h5
                        class="layerHeader"
                        data-layerHeader="layerHeader">
                        ${this.config.title}
                        <a href="javascript:;" class="close_btn"></a>
                    </h5>
                    <div
                        class="layerContianer ${this.config.layerclass}"
                        data-layerContianer="layerContianer"
                        style="${this.config.setOverflow}">
                        ${html_template}
                    </div>
                </div>
            </div>
        `;
        const UDP_wh = UDP.getClientWidthHeight;
        if (debug) {
            console.log(`BouncedModal's UDP_wh = \n`, JSON.stringify(UDP_wh, null, 4));
        }
        // UDP_wh.h
        $("#zxdtModal").empty().html(str);
        $(".modal-body").css("height", UDP.Public.view().h - 200);
        $(window).resize(function() {
            $(".layerBox").css("width", $(window).width()-60+"px");
            $(".layerBox").css("height", $(window).height()-80+"px");
            $(".modal-body").css("height", UDP.Public.view().h - 200);
        });

        $(".close_btn").click(function (){
            that.delDialog($(this));
        });
        $("."+that.config.layerBoxClass).eq($(".overlay").size()-1).css({
            left: `${(s.w - this.config.width)/2}px`,
            top: `${(s.h - this.config.height)/2}px`
        });
        if(that.config.callback){
            that.config.callback.apply(this,[]);
        }
        return str;
    },
    /*移除弹框*/
    delDialog: function(ele){
        $(ele).parents(".overlay").remove();
    },
    /*移动弹框*/
    moveDialog: function(ele){
        var that = this;
        var s = UDP.Public.view();
        // mousedown & mouseup
        $(".layerHeader").mousedown(function(e){
            var theme = this;
            var moveEle = $(theme).parents("."+that.config.layerBoxClass);
            e.stopPropagation();
            e.preventDefault();
            var x = e.clientX - moveEle.offset().left;
            var y = e.clientY - moveEle.offset().top;
            $(document).mousemove(function(e){
                var lf = e.clientX-x;
                var tp = e.clientY-y;
                lf = lf < 0 ? 0 : lf;
                lf = lf > (s.w - moveEle.width()) ? (s.w - moveEle.width()) : lf;
                tp = tp < 0 ? 0:tp;
                tp = tp > (s.h - moveEle.height()) ? (s.h - moveEle.height()) : tp;
                moveEle.css({
                    left: `${lf}px`,
                    top: `${tp}px`
                });
            });
            $(document).mouseup(function(){
                $(this).unbind("mousemove");
            });
        });
    },
    /*手动调整弹框大小*/
    revampSize: function(){
        var that = this;
        var s = UDP.Public.view();
        //
        $(".layer-size").mousedown(function(e){
            var theme = this;
            var moveEle = $(theme).parents("."+that.config.layerBoxClass);
            var x = e.clientX - moveEle.width();
            var y = e.clientY - moveEle.height();
           $(document).mousemove(function(e){
               var width = `${e.clientX - x}px`;
               var height = `${e.clientY - y}px`;
               width = width < 0 ? 0 : width;
               width = width > s.w ? s.w :width;
               height = height < 0 ? 0 : height;
               height = height > s.h ? s.h : height;
               moveEle.css({
                    width:width,
                    height:height
               });
           });
            $(document).mouseup(function(){
                // unbind
                $(document).unbind("mousemove");
            });
        });
    },
    changeSize: function () {
        $('div#fontsize a').mousedown(function (e) {
            var id = $(this).attr('id');
            $('div#fontsize .active').removeClass('active');
            $(this).parent('span').addClass('active');
            switch(id)
            {
                case 'big':
                    $("#zxdtContent").css("font-size",'16px');
                    break;
                case 'middle':
                    $("#zxdtContent").css("font-size",'14px');
                    break;
                default:
                    $("#zxdtContent").css("font-size",'12px');
            }
        });
    },
    init: function(){
        this._createDialog();
        this.moveDialog();
        this.revampSize();
        this.changeSize();
    }
};


(function (win, func) {
    // factory function
    let test = func();
    try {
        if (test !== undefined) {
            // console.log(`test = \n`, test);
        }
    } catch (error) {
        console.log(`error = \n`, error);
        // ReferenceError: test is not defined
    }
    if(win["UDP"]){
        // win["UDP"], will never be executed!
        win["UDP"].Public = STOCK_F9_FV.Modal.Public();
        win["UDP"].getClientWidthHeight = STOCK_F9_FV.Modal.getClientWidthHeight();
        // win["UDP"].BouncedModal = STOCK_F9_FV.Modal.BouncedModal();
        win["UDP"].BouncedModal = BouncedModal();
        // BouncedModal && Constructorle ???
    }else{
        win.UDP = {
            Public: STOCK_F9_FV.Modal.Public(),
            // getClientWidth: STOCK_F9_FV.Modal.getClientWidth(),
            // getClientHeight: STOCK_F9_FV.Modal.getClientHeight(),
            getClientWidthHeight: STOCK_F9_FV.Modal.getClientWidthHeight(),
            // BouncedModal: STOCK_F9_FV.Modal.BouncedModal()
            BouncedModal: BouncedModal()
        };
        // window.UDP & window["UDP"]
    }
})(window, function(debug = false){
    let test = `NameSpace testing!`;
    if (debug) {
        console.log(`this is a callback function!`);
    }
    return test;
});



/*

npm i -g uglify-es


uglifyjs ./libs/BouncedModal.js -o ./build/foo.min.js -c -m reserved=['BouncedModal']

// OK ???
uglifyjs -h
uglifyjs ./libs/modal.js -o ./build/modal.min.js -c -m reserved=['BouncedModal']

// ??? BAD
uglifyes -h
uglifyes ./libs/modal.js -o ./build/modal.min.js -c -m reserved=['BouncedModal']





*/
