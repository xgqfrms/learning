// https://www.lagou.com/gongsi/23579.html
// http://www.cardinfolink.com/about.html
/*


[
    [
        "james",
        {
            "name":"James Zhao",
            "description":"CEO  ---  Create Employee’s Opportunity"
        }
    ],
    [
        "jerryzhu",
        {
            "name":"Jerry Zhu",
            "description":"    有所作为是生活的最高境界。"
        }
    ]
]

二维数组

let tda = [["value01",{"key11":"value11", "key12":"value12"}],["value02",{"key21":"value21","key22":"value22"}]];

tda;
// [Array[2], Array[2]]

tda[0];
// ["value01", Object]

tda[0][0];
// "value01"

tda[0][1].key11;
// "value11"

tda[0][1].key12;
// "value12"












*/
var stripeTeam = [
        ["james", { name: "James Zhao", description: "CEO  ---  Create Employee’s Opportunity" }],
        ["jerryzhu", { name: "Jerry Zhu", description: "    有所作为是生活的最高境界。" }],
        ["hyman", { name: "Hyman Zhu", description: "    伟大的思想能变成巨大的财富。" }],
        ["victorye", { name: "Victor Ye", description: "所谓热爱，就是当时间抹去所有的感觉之后，还在你脑子里蹦出来的第一个想法。" }],
        ["tiansheng", { name: "Chinson Liu", description: "事在人为！" }],
        ["joeluo", { name: "Joe Luo ", description: "不用相当的独立功夫，不论在哪个严重的问题上都不能找出真理；谁怕用功夫，谁就无法找到真理。" }],
        ["felix", { name: "Felix Wang", description: "让身边的一切完美起来。" }],
        ["samrtzhang", { name: "Smart Zhang", description: "向同事中的牛人学习，并超过他们！" }],
        ["hongmin", { name: "Hongmin Wang", description: "弱水三千只取一瓢饮" }],
        ["cherry", { name: "Cherry Zhou", description: "与你同行，共同努力，共享成长" }],
        ["gaoren", { name: "Gaoren Yang", description: "     敢做，敢担当。" }],
        ["leo", { name: "Leo Dai", description: "最大的成就就是完成别人认为你完不成事情。" }],
        ["carolma", { name: "Carol Ma", description: "天道酬勤，总不言败！" }],
        ["iris", { name: "Iris Gao", description: "海阔凭鱼跃，天高任鸟飞。" }],
        ["santiago", { name: "Santiago", description: "非淡泊无以明志，非宁静无以致远。" }],
        ["dickzhang", { name: "Dick Zhang", description: "当你停止尝试时，就是失败的时候。" }],
        ["timzhang", { name: "Tim Zhang", description: "世界上一成不变的东西，只有“任何事物都是在不断变化的”这条真理。" }],
        ["ritaren", { name: "Rita Ren", description: "和喜欢的一切在一起。" }],
        ["brianding", { name: "Brian Ding", description: " 善待一切，不忘初心。" }],
        ["paulyu", { name: "Paul Yu", description: "把生命浪费在美好的事情上" }],
        ["sunny", { name: "Sunny Ma", description: "临渊羡鱼，不如退而结网" }],
        ["jackyzhang", { name: "Jacky Zhang", description: "匆匆百年如白驹过隙，不努力就是对不起自己..." }],
        ["tracyzhang", { name: "Tracy Zhang", description: "认真做好每一天!" }],
        ["lilygu", { name: "Lily Gu", description: "不积跬步，无以至千里；不积小流，无以成江海 " }],
        ["eva", { name: "Eva Yan", description: "     有志者事竟成" }],
        ["vivianqian", { name: "Vivian Qian", description: "  希望能有一群人，让我恋上一座城。" }],
        ["kellyli", { name: "Kelly Li", description: "     “食”不可无欲。" }],
        ["ciciyang", { name: "Cici Yang", description: "     不求最好，但求更好，相信自己！" }],
        ["vincent", { name: "Vincent Qian", description: " 知而好问，然后能才 。" }],
        ["forrestfan", { name: "Forrest Fan", description: "做事要尽心尽力，做人应问心无愧" }],
        ["robinlang", { name: "Robin Lang", description: "     人生本无意义 那让我们赋予它意义。" }],
        ["merrymeng", { name: "Merry Meng", description: "像蚂蚁一样工作，像蝴蝶一样生活" }],
        ["tonybian", { name: "Tony Bian", description: "精诚所至，金石为开" }],
        ["strong", { name: "Strong Si", description: "The harder you work, the luckier you get.." }],
        ["arron", { name: "Arron Wang", description: " 凡事要三思，但比三思更重要的是三思而行。" }],
        ["tingliu", { name: "Ting Liu", description: "最困难的时候，就是距离成功不远了。" }],
        ["kayliu", { name: "Kay Liu", description: "     要成功，先发疯，头脑简单向前冲。" }],
        ["zealot", { name: "Zealot Jiang", description: "     每天都要做得更好。" }],
        ["kathyye", { name: "Kathy Ye", description: " 让我们携手，共创、共享、共成长！" }],
        ["arthurwang", { name: "Arthur Wang", description: "Stay hungry,stay foolish!" }],
        ["armstrongzhu", { name: "Armstrong Zhu", description: "Just do it！" }],
        ["yangyang", { name: "Yang Yang", description: " 人生至善，就是对生活乐观，对工作愉快，对事业兴奋。" }],
        ["cherripe", { name: "Cherripe Chen", description: "换一个角度，世界不再是我所熟悉的那个" }],
        ["westzhang", { name: "West Zhang", description: "世上无难事，只要肯登攀" }],
        ["mandahuang", { name: "Manda Huang", description: "劳动创造世界。" }],
        ["rogers", { name: "Rogers Chen", description: "努力工作，与公司一起成长。" }],
        ["jolly", { name: "Jolly Cheng", description: "存在即为合理。" }],
        ["steve", { name: "Steve Chi", description: "All 4 win！" }],
        ["long", { name: "Long Dai", description: "每一天，我都要尽职尽责，让平凡的工作增添我个人的荣耀。" }],
        ["charles", { name: "Charles Deng", description: "I'm Charles Deng" }],
        ["danger", { name: "Danger Deng", description: "从零开始。" }],
        ["hedy", { name: "Hedy Han", description: "I'm Hedy Han" }],
        ["jumper", { name: "Jumper Huang", description: "成长是我与公司的关键词。" }],
        ["jeff", { name: "Jeff Huang", description: "微笑工作。" }],
        ["summer", { name: "Summer Huang", description: "I'm Summer Huang" }],
        ["wen", { name: "Wen Jian", description: "努力学习，与公司一同成长。" }],
        ["alant", { name: "Alant Liu", description: "只要有目标，路就不会消失。" }],
        ["young", { name: "Young Yang", description: " 永不言弃。" }],
        ["sam", { name: "Sam Pan", description: "与讯联携手共创明天。" }],
        ["dorothy", { name: "Dorothy Shi", description: "同公司一起成长，一起努力。" }],
        ["david", { name: "David Sun", description: "天行健，君子以自强不息。" }],
        ["candy", { name: "Candy Tang", description: "一起努力，一起进步。" }],
        ["tandy", { name: "Tandy Tian", description: "有事者事竟成；破釜沉舟，百二秦关终归楚；苦心人，天不负；卧薪尝胆，三千越甲可吞吴。" }],
        ["peter", { name: "Peter Tuo", description: "做一个本分的人，寻找新的事物，开拓新的征程。" }],
        ["evelyn", { name: "Evelyn Wang", description: " ^o^ " }],
        ["wanny", { name: "Wanny Wang", description: "我们一起努力，做最好的支付收单系统。" }],
        ["moira", { name: "Moira Wei", description: "努力工作，用心生活，保持积极、热情、向上的人生态度。" }],
        ["jie", { name: "Jie Wu", description: "做好自己。" }],
        ["adair", { name: "Adair Xiong", description: "理想是人生的太阳。" }],
        ["jane", { name: "Jane Yang", description: "不甘今天，追逐明天。" }],
        ["michael", { name: "Michael Yang", description: "胜则举杯相庆，败则拼死相救。" }],
        ["godzilla", { name: "Godzilla Zhang", description: "你的态度决定你的高度。" }],
        ["selena", { name: "Selena Zhang", description: "奋斗吧！" }],
        ["green", { name: "Green Zhang", description: "每天都是新的开始，加油。" }],
        ["steven", { name: "Steven Zhao", description: "不断学习，不断提升。" }],
        ["yann", { name: "Yann Zhao", description: "做最好的自己。" }],
        ["mazy", { name: "Mazy Zhong", description: "世上无难事，只怕有心人。" }],
        ["jeffrey", { name: "Jeffrey Zhu", description: "只要有方向，就不会迷路。" }],
        ["niki", { name: "Niki Yu", description: "I'm Niki Yu" }],
        ["jim", { name: "Jim Wang", description: "没有谁必定成功，努力决定将来。" }],
        ["amy", { name: "Amy Liu", description: "扎实工作，坦荡做人。" }],
        ["echo", { name: "Echo Peng", description: "一步一脚印。" }],
        ["anneguo", { name: "Anne Guo", description: " 莫找借口失败，只找理由成功。" }]
    ],
    Bezier = function() {
        "use strict";
        var e = 400,
            t = function(e) {
                return 1 / (200 * e)
            },
            n = function(n, a, i, r) {
                var o = 3 * n,
                    s = 3 * (i - n) - o,
                    l = 1 - o - s,
                    c = 3 * a,
                    d = 3 * (r - a) - c,
                    u = 1 - c - d,
                    h = function(e) {
                        return ((l * e + s) * e + o) * e
                    },
                    p = function(e) {
                        return ((u * e + d) * e + c) * e
                    },
                    m = function(e) {
                        return (3 * l * e + 2 * s) * e + o
                    },
                    f = function(e, t) {
                        var n, a, i, r, o, s;
                        for (i = e, s = 0; 8 > s; s++) {
                            if (r = h(i) - e, Math.abs(r) < t) return i;
                            if (o = m(i), Math.abs(o) < 1e-6) break;
                            i -= r / o
                        }
                        if (n = 0, a = 1, i = e, n > i) return n;
                        if (i > a) return a;
                        for (; a > n;) {
                            if (r = h(i), Math.abs(r - e) < t) return i;
                            e > r ? n = i : a = i, i = .5 * (a - n) + n
                        }
                        return i
                    },
                    g = function(e, t) {
                        return p(f(e, t))
                    };
                return function(n, a) {
                    return g(n, t(+a || e))
                }
            };
        return n
    }(),
    createTeam = function(e, t, n) {
        n = n || {}, e.innerHTML = '<div class="team" style="display:none;">     <div class="people current"></div>     <div class="people next"></div>     <div class="inter">' + (n.inter || "") + '</div>   </div>   <div class="search" style="display:none;">     <input type="text" placeholder="Search">   </div>';
        var a = e,
            i = e.querySelector(".team-scroll"),
            r = e.querySelector(".search"),
            o = e.querySelector(".search input"),
            s = e.querySelector(".team"),
            l = e.querySelector(".team .people.current"),
            c = e.querySelector(".team .people.next"),
            d = e.querySelector(".team .inter"),
            u = function(e, t) { e.style.webkitTransform = t, e.style.mozTransform = t, e.style.msTransform = t, e.style.transform = t },
            h = 110,
            p = [],
            m = 1;
        (a.clientWidth < 450 || a.clientHeight < 450) && (m = Math.min(a.clientWidth, a.clientHeight) / 450);
        var f = 450 * m,
            g = { enabled: !1, v: 0 };
        a.style.height = f + "px";
        var v = 20 * m,
            y = function() { this.scale = 0, this.delay = 0, this.active = !0, this.loaded = !1 };
        y.ease = Bezier(.11, 1.24, .61, 1), y.prototype.tick = function(e) {
            if (this.active && this.loaded && e && !(e < this.delay)) {
                var t = (e - this.delay) / 1200;
                t >= 1 ? (this.scale = 1, this.active = !1) : this.scale = y.ease(t)
            }
        }, y.prototype.setLoaded = function() { this.delay += me, this.loaded = !0 };
        var M = 1,
            b = function(e) { this.id = M++, this.size = e, this.translate = [0, 0], this.startTranslate = [0, 0], this.toTranslate = [0, 0], this.startT = 0, this.duration = 1 };
        b.ease = Bezier(.6, 0, .4, 1), b.prototype.tick = function(e) {
            if (e - this.startT > this.duration) {
                var t = 2 * Math.random() * 3.14;
                this.startTranslate = [this.translate[0], this.translate[1]], this.startT = e, this.toTranslate = [Math.cos(t) * this.size / 20, Math.sin(t) * this.size / 20], this.duration = 5e3 * Math.random() + 3e3
            }
            var n = (e - this.startT) / this.duration,
                a = b.ease(n);
            this.translate[0] = a * (this.toTranslate[0] - this.startTranslate[0]) + this.startTranslate[0], this.translate[1] = a * (this.toTranslate[1] - this.startTranslate[1]) + this.startTranslate[1]
        };
        for (var w = function(e, t) {
                var n = document.createElement("div");
                n.className = "employee";
                var a = document.createElement("a");
                a.className = "circle", n.appendChild(a);
                var i = new y,
                    r = { pos: e, size: t, el: n, scale: 1, translate: [0, 0], offset: 0, random: Math.random(), startupAnimation: i, floatingAnimation: new b(t), circleEl: a, loaded: function() { i.setLoaded() } };
                return r.distanceFromCenter = function() {
                    return Math.abs(ce(r))
                }, r
            }, T = function(e, t) {
                var n = Math.pow(10, t);
                return Math.round(e * n) / n
            }, z = function(e) { u(e.el, "translate3d(" + T(e.translate[0], 2) + "px," + T(e.translate[1], 2) + "px,0px)       scale(" + T(e.scale * e.startupAnimation.scale, 6) + ")") }, C = function(e, t) {
                var n = k(e.pos, t.pos) < (e.size + t.size) / 2 + v;
                return isNaN(n) ? 0 : n
            }, E = function(e) {
                for (var t = 0; t < p.length; t++) {
                    var n = p[t];
                    if (C(e, n)) return !0
                }
                return !1
            }, S = function(e) {
                return e.pos[1] > e.size && e.pos[1] < f - e.size ? !E({ pos: e.pos, size: e.fakeSize || e.size }) : !1
            }, k = function(e, t) {
                return Math.sqrt(Math.pow(e[0] - t[0], 2) + Math.pow(e[1] - t[1], 2))
            }, x = 0, L = 0; t / 8 > L; L++) {
            var A = Math.round(f / 2 + (130 * Math.random() - 65) * m);
            p.push(w([x, A], Math.round((85 + 15 * Math.random()) * m))), x += Math.round((150 + 100 * Math.random()) * m)
        }
        for (var Y = 0; 2 > Y; Y++)
            for (var Z = p.slice(), L = 0; L < Z.length && !(p.length >= t); L++)
                for (var H = Z[L], N = 2 - Y, W = 0; N > W; W++)
                    for (var q = !1, J = 0; !q && 5 > J;) {
                        var F = Math.round((55 + 15 * Math.random()) * m),
                            j = H.size / 2 + (20 * m + 5 * Math.random() * m + F / 2),
                            D = Math.min(2, Math.max(-2, (H.pos[1] - f / 2) / (f / 2) * 1.5)),
                            I = 3.14 * (1 - Math.abs(D)) + 3.14,
                            R = (3.14 - I) / 2 * (D > 0 ? 1 : -1),
                            B = R + I * (D > 0 ? 1 : -1),
                            O = Math.random() * (B - R) + R,
                            x = Math.round(H.pos[0] + Math.cos(O) * j),
                            A = Math.round(H.pos[1] - Math.sin(O) * j),
                            P = { pos: [x, A], size: F };
                        S(P) && (p.push(w([x, A], F)), q = !0), J++
                    }
        for (var Y = 0; p.length < t;) {
            for (var Z = p.slice(), L = 0; L < Z.length && !(p.length >= t); L++)
                for (var H = Z[L], O = 0; 6.28 > O && !(p.length >= t); O += .628) {
                    var F = Math.round((35 + 10 * Math.random()) * m),
                        j = H.size / 2 + (20 * m + 5 * Math.random() * m + F / 2);
                    j += 30 * m;
                    var A = Math.round(H.pos[1] + Math.sin(O) * j),
                        X = Math.abs(A - f / 2) / 10,
                        $ = Math.random() * X + X,
                        G = F + $,
                        D = Math.min(2, Math.max(-2, (H.pos[1] - f / 2) / (f / 2) * 1.5)),
                        K = !1;
                    D > -.5 && .5 > D && (G += 20, F += 20, K = !0);
                    var j = j - F / 2 + G / 2,
                        x = Math.round(H.pos[0] + Math.cos(O) * j),
                        A = Math.round(H.pos[1] + Math.sin(O) * j),
                        P = { pos: [x, A], size: F, fakeSize: G };
                    if (S(P)) p.push(w([x, A], F));
                    else if (K) {
                        G -= 20, F -= 20;
                        var P = { pos: [x, A], size: F, fakeSize: G };
                        S(P) && p.push(w([x, A], F))
                    }
                }
            if (Y++, Y > 4) break
        }
        for (var V = 0, Q = 1e3, L = 0; L < p.length; L++) {
            var H = p[L],
                x = H.pos[0];
            x > V && (V = x), Q > x && (Q = x)
        }
        var _ = V - Q + 2 * h;
        l.style.left = "0px", l.setAttribute("data-left", 0), l.style.width = _ + "px", c.style.width = _ + "px";
        for (var L = 0; L < p.length; L++) {
            var H = p[L];
            H.pos[0] += h - Q;
            var U = H.el;
            U.style.width = H.size + "px", U.style.height = H.size + "px", U.style.left = H.pos[0] - H.size / 2 + "px", U.style.top = H.pos[1] - H.size / 2 + "px", l.appendChild(U)
        }
        var ee = _ / 2,
            te = ee,
            ne = ee,
            ae = null,
            ie = function() {
                return null == ae && (ae = a.clientWidth), ae
            };
        window.addEventListener("resize", function() { ae = null });
        var re = Bezier(0, .8, .4, 1),
            oe = function(e) {
                var t = Math.abs(ce(e));
                if (t > ie() / 2) return 0;
                var n = Math.min(1, Math.max(0, 1 - t / (ie() / 2)));
                return re(T(n, 5))
            },
            se = function(e) {
                return ce(e) > 0 ? 1 : -1
            },
            le = function(e) {
                return parseInt(e.getAttribute("data-left")) - ee
            },
            ce = function(e, t) {
                t || (t = e.el.parentNode);
                var n = le(t);
                return e.pos[0] + e.translate[0] + e.floatingAnimation.translate[0] + n - ie() / 2
            },
            de = function(e) {
                for (var t = [l, c], n = { pos: null, el: null }, a = 0; a < t.length; a++) {
                    var i = t[a],
                        r = Math.abs(ce(e, i));
                    (null == n.pos || r < n.pos) && (n.pos = r, n.el = i)
                }
                null != n.el && n.el != e.el.parentNode && n.el.appendChild(e.el)
            },
            ue = function() {
                var e = le(l) + _ / 2 - ie() / 2,
                    t = le(c) + _ / 2 - +ie() / 2;
                if (Math.abs(e) > Math.abs(t)) {
                    var n = l;
                    l = c, l.className = "people current", c = n, c.className = "people next"
                }
                var a = parseInt(l.getAttribute("data-left")),
                    e = le(l) + _ / 2 - ie() / 2;
                if (e > 100) {
                    l.appendChild(d);
                    var i = a - _
                } else if (-100 > e) {
                    c.appendChild(d);
                    var i = a + _
                }
                null != i && i != c.getAttribute("data-left") && (c.style.left = i + "px", c.setAttribute("data-left", i)), u(l, "translateX(" + -ee + "px)"), u(c, "translateX(" + -ee + "px)")
            };
        s.addEventListener("wheel", function(e) {
            (0 == e.deltaY || Math.abs(e.deltaY) < Math.abs(e.deltaX)) && (te += e.deltaX, pe.setToRight(te > ee), e.preventDefault())
        });
        var he = [0, 0],
            pe = function() {
                var e = .2,
                    t = .2,
                    n = !0,
                    a = !0,
                    i = function() { t = a ? n ? .2 : -.2 : 0 };
                return {
                    get: function() {
                        return e
                    },
                    setToRight: function(e) { n = e, i() },
                    setEnabled: function(e) { a = e, i() },
                    tick: function() { e = .1 * (t - e) + e }
                }
            }(),
            me = 0,
            fe = function(e) {
                me = e, pe.tick(), ne = ee, ee = .1 * (te - ee) + ee, Math.abs(ee - ne) > 2 && ye(null), te += pe.get(), ue();
                for (var t = 0; t < p.length; t++) {
                    var n = p[t];
                    n.scale > 0 && (n.startupAnimation.tick(e), n.floatingAnimation.tick(e)), de(n);
                    var a = ce(n) / (ie() / 2),
                        i = (100 * m - Math.min(100 * m, n.size)) / 2;
                    if (n.scale = oe(n), n.translate[0] = -a * i + n.floatingAnimation.translate[0], n.translate[1] = 5 * Math.sin(1.57 * (2 * a - 1) + 6.28 * n.random) * m + n.floatingAnimation.translate[1], 1 != n.scale && (n.translate[0] += -se(n) * (1 - n.scale) * n.size / 2 * m), n.scale <= 0) n.el.style.display = "none";
                    else {
                        if (0 != g.v) {
                            var r = ce(n) / (ie() / 2);
                            r = Math.abs(r);
                            var o = Math.abs(2 * (n.pos[1] / f - .5)),
                                s = (Math.cos(r * Math.PI) + 1) / 2 * 100 * (1 - o) * g.v;
                            n.pos[1] > f / 2 ? n.translate[1] += s : n.translate[1] -= s, n.scale *= 1 - Math.abs((Math.cos(r * Math.PI) + 1) / 2) / 4 * g.v
                        }
                        z(n), n.el.style.display = "block"
                    }
                }
                requestAnimationFrame(fe)
            };
        fe(null),
            function() {
                for (var e = 0, t = p.sort(function(e, t) {
                        return e.distanceFromCenter() > t.distanceFromCenter() ? 1 : -1
                    }), n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.startupAnimation.delay = e, a.scale > 0 && (e += 15)
                }
            }(), s.style.display = "block";
        for (var ge = null, ve = function(e) { ye(ze(e)) }, ye = function(e) {
                if (ge != e) {
                    if (ge && ge.highlightEl) {
                        ge.publicEmployee.onMouseOut();
                        var t = ge.highlightEl;
                        t.className = "highlight";
                        var n = ge.el;
                        setTimeout(function() { n.removeChild(t) }, 1e3), ge.highlightEl = null
                    }
                    if (ge = e) {
                        ge.publicEmployee.onMouseOver();
                        var t = ge.highlightEl;
                        t || (t = document.createElement("div"), t.className = "highlight", ge.highlightEl = t, ge.el.appendChild(t)), t.offsetHeight, t.className = "highlight visible"
                    }
                }
            }, Me = [], L = 0; L < p.length; L++) {
            var be = { loaded: p[L].loaded, size: p[L].size, el: p[L].circleEl, onMouseOver: function() {}, onMouseOut: function() {}, distanceFromCenter: p[L].distanceFromCenter };
            p[L].publicEmployee = be,
                function(e, t) { e.el.addEventListener("mouseenter", function(t) { Math.abs(ne - ee) > 2 || (pe.setEnabled(!1), ye(e)) }), e.el.addEventListener("mouseleave", function(e) { pe.setEnabled(!0), ye(null) }) }(p[L], be), Me.push(be)
        }
        var we = null,
            Te = null,
            ze = function(e) {
                for (var t = 0; t < p.length; t++)
                    if (p[t].publicEmployee == e) return p[t];
                return null
            },
            Ce = function(e, t) { Ee(ze(e), t) },
            Ee = function(e, t) {
                var n = e.pos[0] - ie() / 2;
                t === !1 && (ee = n), te = n
            };
        o.addEventListener("keyup", function() {
            if (g.enabled && we) {
                var e = we(o.value);
                e.length > 0 && Ce(e[0])
            }
        });
        var Se = function() { g.enabled = !0, r.style.display = "block", o.focus(), dynamics.css(r, { opacity: 0 }), dynamics.animate(d, { opacity: 0 }, { duration: 250 }), dynamics.animate(r, { opacity: 1 }, { duration: 250 }), dynamics.animate(g, { v: 1 }, { type: dynamics.spring, friction: 340, duration: 600 }) },
            ke = function() { Te && Te(), g.enabled = !1, dynamics.animate(d, { opacity: 1 }, { duration: 250 }), dynamics.animate(r, { opacity: 0 }, { duration: 150, complete: function() { r.style.display = "none" } }), dynamics.animate(g, { v: 0 }, { type: dynamics.spring, friction: 500, duration: 900 }) };
        return window.addEventListener("keydown", function(e) {
            if (g.enabled) 27 == e.which && ke();
            else {
                var t = String.fromCharCode(e.which);
                /\w/.test(t) && (Se(), o.value = "")
            }
        }), {
            elements: Me,
            autoScroll: pe,
            scroll: function() {
                return { current: ee, to: te }
            },
            onSearch: function(e) { we = e },
            onClearSearch: function(e) { Te = e },
            scrollToEmployee: Ce,
            setHighlightedEmployee: ve
        }
    };
$(function() {
    var e = document.querySelector(".employees"),
        t = createTeam(e, stripeTeam.length, { inter: "<div class='abc'></div>" }),
        n = t.elements,
        a = window.location.hash,
        i = null;
    if (a && a.length > 0) {
        a = a.replace("#", "");
        for (var r = 0; r < n.length; r++)(function(e, n) { n[0] == a && (t.scrollToEmployee(e, !1), i = [e, n[1]]) })(n[r], stripeTeam[r])
    }
    for (var o = function(e, t) {
            var n = document.createElement("div");
            return n.className = "popover", n.innerHTML = "<h1>" + e + "</h1><p>" + t + "</p><div class='arrow'></div>", document.body.appendChild(n), {
                show: function(e, t) {
                    var a = n.getBoundingClientRect(),
                        i = a.height / .4,
                        r = e[0],
                        o = Math.round(e[1] - i - 9 - 10 - t[1] / 2),
                        s = null;
                    o < document.body.scrollTop + 10 && (r = e[0] - 125 - t[0] / 2, o = e[1] - i / 2, s = "left"), 125 > r ? (r = e[0] + 125 + t[0] / 2, o = e[1] - i / 2, s = "right") : r > window.innerWidth - 125 && (r = e[0] - 125 - t[0] / 2, o = e[1] - i / 2, s = "left"), n.style.left = r + "px", n.style.top = o + "px", $(n).addClass("visible"), s && $(n).addClass(s)
                },
                hide: function() { $(n).removeClass("visible"), setTimeout(function() { document.body.removeChild(n) }, 1e3) }
            }
        }, s = [], l = function(e, t) { s.push({ employee: e, nick: t, priority: e.distanceFromCenter() }) }, c = window.pixelRatio(), d = function(e, t, n) {
            var a = new Image,
                i = "";
            e.size * c > 100 && (i = "@2x");
            var r = "../img/about/team/" + t + i + ".jpg";
            a.src = r, a.addEventListener("load", function() { e.el.style.backgroundImage = "url(" + r + ")", e.loaded(), n(!0) }), a.addEventListener("error", function() { n(!1) })
        }, u = function() {
            s.sort(function(e, t) {
                return e.priority < t.priority ? 1 : -1
            });
            var e = function() {
                if (0 != s.length) {
                    var t = s.pop();
                    d(t.employee, t.nick, function(t) { e() })
                }
            };
            e(), e()
        }, h = function(e, n) {
            if (!e.popover) {
                e.popover = o(n.name, n.description);
                for (var a = e.el.getBoundingClientRect(), i = t.autoScroll.get(), r = 0; Math.abs(i) > .01;) r -= i, i = .1 * -i + i;
                r -= t.scroll().to - t.scroll().current, e.popover.show([Math.round(a.left + a.width / 2 + r), Math.round(a.top + a.height / 2 + document.body.scrollTop)], [a.width, a.height])
            }
        }, p = function(e) { e.popover && e.popover.hide(), e.popover = null }, r = 0; r < n.length; r++)(function(e, t) {
        var n = t[0],
            a = t[1];
        l(e, n);
        var i = null;
        a.twitter ? i = "https://twitter.com/" + a.twitter : a.github && (i = "https://github.com/" + a.github), i && (e.el.setAttribute("href", i), e.el.setAttribute("target", "_blank")), e.onMouseOver = h.bind(this, e, a), e.onMouseOut = p.bind(this, e)
    })(n[r], stripeTeam[r]);
    var m = function() {
        for (var e = 0; e < n.length; e++) dynamics.animate(n[e].el, { opacity: 1 }, { duration: 250 })
    };
    t.onClearSearch(function() { m() }), t.onSearch(function(e) {
        if ("" == e) return m(), [];
        e = e.replace(/ /g, " ?");
        for (var t = [], a = new RegExp(e, "i"), i = 0; i < n.length; i++)(function(e, n) {
            for (var i = n[1], r = [n[0], i.twitter, i.github, i.name], o = !1, s = 0; s < r.length; s++)
                if (r[s] && r[s].match(a)) {
                    o = !0;
                    break
                }
            var l = .2;
            o && (l = 1, t.push(e)), dynamics.animate(e.el, { opacity: l }, { duration: 250 })
        })(n[i], stripeTeam[i]);
        return t
    }), $(window).load(function() { setTimeout(function() { u(), i && (t.autoScroll.setEnabled(!1), setTimeout(function() { h.apply(this, i), t.setHighlightedEmployee(i[0]) }, 1e3)) }, 10) });
    var f = function(e, t, n) {
            for (var a = document.querySelectorAll(t), e = e.split(" "), i = 0; i < e.length; i++) document.body.addEventListener(e[i], function(e) {
                for (var t = 0; t < a.length; t++)(a[t].contains(e.target) || a[t] == e.target) && (e.stopPropagation(), n(e, a[t]))
            })
        },
        g = function() {
            return { left: window.pageXOffset || document.documentElement.scrollLeft, top: window.pageYOffset || document.documentElement.scrollTop }
        },
        v = function(e, t, n, a) {
            var i = function(e, t, n, a) {
                    return Math.sqrt(Math.pow(n - e, 2) + Math.pow(a - t, 2))
                },
                r = n / 2 > e ? n : 0,
                o = a / 2 > t ? a : 0;
            return i(e, t, r, o)
        };
    f("ontouchstart" in window ? "touchstart" : "mousedown", "*[interaction-fill]", function(e, t) {
        var n = t.getBoundingClientRect(),
            a = e.pageX - n.left - g().left,
            i = e.pageY - n.top - g().top,
            r = t.querySelector(".interactionFill");
        r && r.parentNode.removeChild(r), r = document.createElement("div"), r.classList.add("interactionFill"), r.style.backgroundColor = t.getAttribute("interaction-fill");
        var o = 2 * v(a, i, n.width, n.height);
        r.style.width = o + "px", r.style.height = o + "px", r.style.left = a - o / 2 + "px", r.style.top = e.pageY - n.top - g().top - o / 2 + "px", t.insertBefore(r, t.firstChild), setTimeout(function() { r.classList.add("show") }, 10)
    }), f("ontouchstart" in window ? "touchend" : "mouseup mouseout", "*[interaction-fill]", function(e, t) {
        var n = t.querySelector(".interactionFill");
        n && (n.addEventListener("transitionend", function() { n && n.parentNode && n.parentNode.removeChild(n) }), n.classList.add("hide"))
    })
});
