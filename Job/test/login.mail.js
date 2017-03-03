// https://www.dd528.com/login

!function(t) {
    function e(o) {
        if (n[o])
            return n[o].exports;
        var i = n[o] = {
            exports: {},
            id: o,
            loaded: !1
        };
        return t[o].call(i.exports, i, i.exports, e),
        i.loaded = !0,
        i.exports
    }
    var n = {};
    return e.m = t,
    e.c = n,
    e.p = "",
    e(0)
}([function(t, e, n) {
    "use strict";
    window.Modal = n(2).Modal;
    var o = function() {
        var t = $("#uid")
          , e = $("#pwd")
          , n = $("#uid_clear")
          , o = $("#login_submit")
          , i = function() {
            o.one("click", function() {
                var n = parseInt($(this).data("submit"));
                if (1 === n) {
                    Modal.showLoading();
                    var o = {};
                    $.ajax({
                        url: "/login",
                        type: "post",
                        timeout: 3e3,
                        data: {
                            uid: t.val(),
                            pwd: e.val(),
                            plugin: {
                                sw: window.screen.width,
                                sh: window.screen.height,
                                iw: window.innerWidth,
                                ih: window.innerHeight,
                                ua: navigator.userAgent
                            },
                            auto: $("#login_auto").is(":checked")
                        },
                        success: function(t) {
                            o.result = t && "status"in t && t.status > 0 && t,
                            o.message = t && "message"in t && t.message || ""
                        },
                        error: function(t) {
                            o.result = !1,
                            o.error = t
                        },
                        complete: function() {
                            !o.result || "error"in o ? (Modal.showLoading(!1),
                            "error"in o ? "object" == typeof o.error && "statusText"in o.error && "timeout" === o.error.statusText ? Modal.setAlert("很抱歉，现在网络太慢，请重新登录") : "string" == typeof o.error ? (console.error(o.error),
                            Modal.setAlert(o.error || "未知错误")) : (console.error(o.error),
                            Modal.setAlert("系统错误!请联系客服！")) : "message"in o && Modal.setAlert(o.message)) : location.href = "/home"
                        }
                    })
                } else
                    Modal.setAlert("请您输入用户名或密码");
                i()
            })
        }
          , r = function() {
            function i() {
                var i = !1;
                return t = $("#uid"),
                e = $("#pwd"),
                t && t.val().length > 0 && e && e.val().length > 0 ? (o.removeClass("not-submit").data("submit", 1),
                i = !0) : o.addClass("not-submit").data("submit", 0),
                t && t.val().length > 0 || e && e.val().length > 0 ? n.fadeIn() : n.fadeOut(),
                i
            }
            setTimeout(function() {
                t.focus()
            }, 500),
            t.on("keyup", function() {
                i() && 13 === event.keyCode && o.click()
            }),
            e.on("keyup", function() {
                i() && 13 === event.keyCode && o.click()
            }),
            n.on("click", function() {
                t.val(""),
                e.val(""),
                $(this).fadeOut(),
                i()
            })
        }
          , s = function() {
            var t = $("#is_login_auto").val();
            if ("true" === t) {
                Modal.showLoading();
                var e = {};
                $.ajax({
                    url: "/login/auto",
                    type: "post",
                    timeout: 3e3,
                    success: function(t) {
                        e.result = t && "status"in t && t.status > 0 && t,
                        e.message = t && "message"in t && t.message || ""
                    },
                    error: function(t) {
                        e.result = !1,
                        e.error = t
                    },
                    complete: function() {
                        !e.result || "error"in e ? (Modal.showLoading(!1),
                        "error"in e ? "object" == typeof e.error && "statusText"in e.error && "timeout" === e.error.statusText ? Modal.setAlert("很抱歉，现在网络太慢，请重新登录") : "string" == typeof e.error ? (console.error(e.error),
                        Modal.setAlert(e.error || "未知错误")) : (console.error(e.error),
                        Modal.setAlert("系统错误!请联系客服！")) : "message"in e && Modal.setAlert(e.message)) : location.href = "/home"
                    }
                })
            }
        }
          , a = function() {
            s(),
            i(),
            r()
        };
        return {
            init: a
        }
    }();
    $(function() {
        function t() {
            return !!document.createElement("canvas").getContext && "pushState"in history
        }
        t() ? o.init() : $("#browser_compatible").show()
    }())
}
, , function(t, e, n) {
    "use strict";
    n(3);
    var o = n(4);
    e.Modal = {
        showLoading: o.showLoading,
        setAlert: o.setAlert,
        setConfirm: o.setConfirm,
        showConfirm: o.showConfirm
    }
}
, function(t, e) {
    "use strict";
    var n = function() {
        var t = function() {
            function t() {
                e()
            }
            var e = function() {
                Date.prototype.format = function(t) {
                    var e = {
                        "M+": this.getMonth() + 1,
                        "d+": this.getDate(),
                        "h+": this.getHours(),
                        "m+": this.getMinutes(),
                        "s+": this.getSeconds(),
                        "w+": this.getDay(),
                        "q+": Math.floor((this.getMonth() + 3) / 3),
                        S: this.getMilliseconds()
                    };
                    /(y+)/.test(t) && (t = t.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));
                    for (var n in e)
                        new RegExp("(" + n + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[n] : ("00" + e[n]).substr(("" + e[n]).length)));
                    return t
                }
            };
            return {
                init: e,
                run: t
            }
        }()
          , e = function() {
            function t() {
                e()
            }
            var e = function() {
                String.prototype.trim = function() {
                    return this.replace(/(^\s*)|(\s*$)/g, "")
                }
            };
            return {
                trim: e,
                run: t
            }
        }()
          , n = function() {
            function t() {
                e()
            }
            var e = function() {
                Array.prototype.sortBy = function() {
                    if (this.length <= 1)
                        return this;
                    if (0 == arguments.length)
                        return "number" == typeof this[0] || "string" == typeof this[0] ? this.sortBy(function(t, e) {
                            return t > e
                        }) : this;
                    if (2 == arguments.length) {
                        var t = arguments[0]
                          , e = arguments[1];
                        return this.sortBy(function(n, o) {
                            return "desc" == e.toLocaleLowerCase() ? n[t] < o[t] : n[t] > o[t]
                        })
                    }
                    if (1 != arguments.length)
                        return this;
                    var n = arguments[0];
                    if ("function" == typeof n) {
                        if (this && this instanceof Array && this.length > 1)
                            for (var o = this.length, i = 0; i < o; i++)
                                for (var r = i + 1; r < o; r++) {
                                    var s = n.call(this, this[i], this[r]);
                                    if ("number" == typeof s ? s > 0 : !!s || !1) {
                                        var a = this[i];
                                        this[i] = this[r],
                                        this[r] = a
                                    }
                                }
                        return this
                    }
                    if ("string" != typeof n)
                        return this;
                    if (this[0] && "object" == typeof this[0]) {
                        if (this[0].hasOwnProperty(n))
                            return this.sortBy(n, "");
                        var l;
                        for (var d in this[0])
                            l = d;
                        return this.sortBy(l, n)
                    }
                    return "number" == typeof this[0] || "string" == typeof this[0] ? this.sortBy(function(t, e) {
                        return "desc" == n.toLocaleLowerCase() ? t < e : t > e
                    }) : void 0
                }
            };
            return {
                run: t
            }
        }();
        return {
            _String: e,
            _Date: t,
            _Array: n
        }
    }();
    n._String.run(),
    n._Date.run(),
    n._Array.run(),
    e.Prototype = n,
    window.gReg = {
        input: /select|update|delete|exec|count|'|"|=|;|>|<|%/i,
        phone: /^1[3|4|5|7|8]\d{9}$/,
        money: /^\d{0,8}\.{0,1}(\d{1,2})?$/
    }
}
, function(t, e) {
    "use strict";
    var n = function() {
        function t(t) {
            this.s = t.s,
            this.id = t.id
        }
        t.prototype.show = function() {
            function t() {
                return 1 == e.className.split("dp-n").length
            }
            var e = document.getElementById(this.id);
            e && (this.s && !t() ? e.className = e.className.replace("dp-n", "") : !this.s && t() && (e.className += " dp-n"),
            e.className = String(e.className).trim())
        }
        ;
        var e = function() {
            var e = function() {
                return document.getElementById("loading_modal_element") || $("body").append('<div id="loading_modal_element" class="loading-modal-body dp-n"><div class="cover_modal_element"></div><div class="loading-modal-image"></div><div class="loading-modal-text"><h2>玩命加载中……</h2></div></div>'),
                !1
            }
              , n = function(e) {
                e = "undefined" == typeof e || e;
                var n = new t({
                    id: "loading_modal_element",
                    s: e
                });
                n.show()
            };
            return {
                init: e,
                show: n
            }
        }()
          , n = function() {
            var e = function() {
                return document.getElementById("alert_modal_element") || $("body").append('<div id="alert_modal_element" class="alert-modal-element dp-n"><div class="cover_modal_element"></div><div class="alert-modal-content"><div class="alert-modal-body"><span class="alert-modal-text"></span></div><div class="alert-modal-footer"><button id="alert_modal_close" class="alert-modal-button">关闭</button></div></div></div>'),
                !1
            }
              , n = function(e) {
                e = "undefined" == typeof e || e;
                var n = new t({
                    id: "alert_modal_element",
                    s: e
                });
                n.show()
            }
              , o = function(t, o, i) {
                var r = document.getElementById("alert_modal_element");
                t && ("object" == typeof t && (t = JSON.stringify(t)),
                r ? r.getElementsByClassName("alert-modal-text")[0].innerHTML = t : (e(),
                r.getElementsByClassName("alert-modal-text")[0].innerHTML = t),
                n()),
                o > 0 && setTimeout(function() {
                    n(!1)
                }, 1e3 * o),
                $("#alert_modal_close").on("click", function() {
                    return i && i instanceof Function && i(),
                    n(!1),
                    !1
                })
            };
            return {
                init: e,
                show: n,
                set: o
            }
        }()
          , o = function() {
            var e = function() {
                return document.getElementById("confirm_modal_element") || $("body").append('<div id="confirm_modal_element" class="confirm-modal-element dp-n"><div class="cover_modal_element"></div><div class="confirm-modal-content"><div id="confirm_modal_header" class="confirm-modal-header dp-n"></div><div class="confirm-modal-body"><span id="confirm_modal_text" class="confirm-modal-text"></span></div><div class="confirm-modal-footer"><div class="footer-button-success"><button class="confirm-modal-button  modal-success" data-confirm="success">确认</button></div><div class="footer-button-false"><button class="confirm-modal-button" data-confirm="error">取消</button></div></div></div></div>'),
                !1
            }
              , n = function(e) {
                e = "undefined" == typeof e || e;
                var n = new t({
                    id: "confirm_modal_element",
                    s: e
                });
                n.show()
            }
              , o = 0
              , i = function(t) {
                return !!t && ("title"in t && t.title.length > 0 && (document.getElementById("confirm_modal_header").innerHTML = t.title),
                "text"in t && t.text.length > 0 && (document.getElementById("confirm_modal_text").innerHTML = t.text),
                void $("#confirm_modal_element").find(".confirm-modal-button").off("click").on("click", function() {
                    var e = $(this).attr("data-confirm");
                    o++,
                    t && e in t && t[e]instanceof Function && t[e](),
                    t && "complete"in t && t.complete instanceof Function ? t.complete() : n(!1)
                }))
            };
            return {
                init: e,
                show: n,
                set: i
            }
        }()
          , i = function() {
            var t = function() {
                return document.getElementById("cover_modal_element") || $("body").append('<div id="cover_modal_element" class="cover-modal-element dp-n"></div>'),
                !1
            }
              , e = function() {
                document.getElementById("cover_modal_element").style.display = "none"
            }
              , n = function() {
                document.getElementById("cover_modal_element").style.display = "block"
            };
            return {
                init: t,
                show: n,
                hide: e
            }
        }();
        return {
            initLoading: e.init,
            showLoading: e.show,
            initAlert: n.init,
            showAlert: n.show,
            setAlert: n.set,
            initConfirm: o.init,
            setConfirm: o.set,
            showConfirm: o.show,
            initCover: i.init
        }
    }();
    setTimeout(function() {
        n.initCover(),
        n.initLoading(),
        n.initAlert(),
        n.initConfirm()
    }, 100),
    e.showLoading = n.showLoading,
    e.setAlert = n.setAlert,
    e.showAlert = n.showAlert,
    e.setConfirm = n.setConfirm,
    e.showConfirm = n.showConfirm
}
]);
