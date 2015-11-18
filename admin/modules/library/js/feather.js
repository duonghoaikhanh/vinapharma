/*!	SWFObject v2.2 <http://code.google.com/p/swfobject/> 
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
var avpw_swfobject = function () {
    function C() {
        if (b) return;
        try {
            var e = a.getElementsByTagName("body")[0].appendChild(U("span"));
            e.parentNode.removeChild(e)
        } catch (t) {
            return
        }
        b = !0;
        var n = c.length;
        for (var r = 0; r < n; r++) c[r]()
    }

    function k(e) {
        b ? e() : c[c.length] = e
    }

    function L(t) {
        if (typeof u.addEventListener != e) u.addEventListener("load", t, !1);
        else if (typeof a.addEventListener != e) a.addEventListener("load", t, !1);
        else if (typeof u.attachEvent != e) z(u, "onload", t);
        else if (typeof u.onload == "function") {
            var n = u.onload;
            u.onload = function () {
                n(), t()
            }
        } else u.onload = t
    }

    function A() {
        l ? O() : M()
    }

    function O() {
        var n = a.getElementsByTagName("body")[0],
            r = U(t);
        r.setAttribute("type", i);
        var s = n.appendChild(r);
        if (s) {
            var o = 0;
            (function () {
                if (typeof s.GetVariable != e) {
                    var t = s.GetVariable("$version");
                    t && (t = t.split(" ")[1].split(","), T.pv = [parseInt(t[0], 10), parseInt(t[1], 10), parseInt(t[2], 10)])
                } else if (o < 10) {
                    o++, setTimeout(arguments.callee, 10);
                    return
                }
                n.removeChild(r), s = null, M()
            })()
        } else M()
    }

    function M() {
        var t = h.length;
        if (t > 0)
            for (var n = 0; n < t; n++) {
                var r = h[n].id,
                    i = h[n].callbackFn,
                    s = {
                        success: !1,
                        id: r
                    };
                if (T.pv[0] > 0) {
                    var o = R(r);
                    if (o)
                        if (W(h[n].swfVersion) && !(T.wk && T.wk < 312)) V(r, !0), i && (s.success = !0, s.ref = _(r), i(s));
                        else if (h[n].expressInstall && D()) {
                        var u = {};
                        u.data = h[n].expressInstall, u.width = o.getAttribute("width") || "0", u.height = o.getAttribute("height") || "0", o.getAttribute("class") && (u.styleclass = o.getAttribute("class")), o.getAttribute("align") && (u.align = o.getAttribute("align"));
                        var a = {}, f = o.getElementsByTagName("param"),
                            l = f.length;
                        for (var c = 0; c < l; c++) f[c].getAttribute("name").toLowerCase() != "movie" && (a[f[c].getAttribute("name")] = f[c].getAttribute("value"));
                        P(u, a, r, i)
                    } else H(o), i && i(s)
                } else {
                    V(r, !0);
                    if (i) {
                        var p = _(r);
                        p && typeof p.SetVariable != e && (s.success = !0, s.ref = p), i(s)
                    }
                }
            }
    }

    function _(n) {
        var r = null,
            i = R(n);
        if (i && i.nodeName == "OBJECT")
            if (typeof i.SetVariable != e) r = i;
            else {
                var s = i.getElementsByTagName(t)[0];
                s && (r = s)
            }
        return r
    }

    function D() {
        return !w && W("6.0.65") && (T.win || T.mac) && !(T.wk && T.wk < 312)
    }

    function P(t, n, r, i) {
        w = !0, g = i || null, y = {
            success: !1,
            id: r
        };
        var o = R(r);
        if (o) {
            o.nodeName == "OBJECT" ? (v = B(o), m = null) : (v = o, m = r), t.id = s;
            if (typeof t.width == e || !/%$/.test(t.width) && parseInt(t.width, 10) < 310) t.width = "310";
            if (typeof t.height == e || !/%$/.test(t.height) && parseInt(t.height, 10) < 137) t.height = "137";
            a.title = a.title.slice(0, 47) + " - Flash Player Installation";
            var u = T.ie && T.win ? "ActiveX" : "PlugIn",
                f = "MMredirectURL=" + encodeURI(window.location).toString().replace(/&/g, "%26") + "&MMplayerType=" + u + "&MMdoctitle=" + a.title;
            typeof n.flashvars != e ? n.flashvars += "&" + f : n.flashvars = f;
            if (T.ie && T.win && o.readyState != 4) {
                var l = U("div");
                r += "SWFObjectNew", l.setAttribute("id", r), o.parentNode.insertBefore(l, o), o.style.display = "none",
                function () {
                    o.readyState == 4 ? o.parentNode.removeChild(o) : setTimeout(arguments.callee, 10)
                }()
            }
            j(t, n, r)
        }
    }

    function H(e) {
        if (T.ie && T.win && e.readyState != 4) {
            var t = U("div");
            e.parentNode.insertBefore(t, e), t.parentNode.replaceChild(B(e), t), e.style.display = "none",
            function () {
                e.readyState == 4 ? e.parentNode.removeChild(e) : setTimeout(arguments.callee, 10)
            }()
        } else e.parentNode.replaceChild(B(e), e)
    }

    function B(e) {
        var n = U("div");
        if (T.win && T.ie) n.innerHTML = e.innerHTML;
        else {
            var r = e.getElementsByTagName(t)[0];
            if (r) {
                var i = r.childNodes;
                if (i) {
                    var s = i.length;
                    for (var o = 0; o < s; o++)(i[o].nodeType != 1 || i[o].nodeName != "PARAM") && i[o].nodeType != 8 && n.appendChild(i[o].cloneNode(!0))
                }
            }
        }
        return n
    }

    function j(n, r, s) {
        var o, u = R(s);
        if (T.wk && T.wk < 312) return o;
        if (u) {
            typeof n.id == e && (n.id = s);
            if (T.ie && T.win) {
                var a = "";
                for (var f in n) n[f] != Object.prototype[f] && (f.toLowerCase() == "data" ? r.movie = n[f] : f.toLowerCase() == "styleclass" ? a += ' class="' + n[f] + '"' : f.toLowerCase() != "classid" && (a += " " + f + '="' + n[f] + '"'));
                var l = "";
                for (var c in r) r[c] != Object.prototype[c] && (l += '<param name="' + c + '" value="' + r[c] + '" />');
                u.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + a + ">" + l + "</object>", p[p.length] = n.id, o = R(n.id)
            } else {
                var h = U(t);
                h.setAttribute("type", i);
                for (var d in n) n[d] != Object.prototype[d] && (d.toLowerCase() == "styleclass" ? h.setAttribute("class", n[d]) : d.toLowerCase() != "classid" && h.setAttribute(d, n[d]));
                for (var v in r) r[v] != Object.prototype[v] && v.toLowerCase() != "movie" && F(h, v, r[v]);
                u.parentNode.replaceChild(h, u), o = h
            }
        }
        return o
    }

    function F(e, t, n) {
        var r = U("param");
        r.setAttribute("name", t), r.setAttribute("value", n), e.appendChild(r)
    }

    function I(e) {
        var t = R(e);
        t && t.nodeName == "OBJECT" && (T.ie && T.win ? (t.style.display = "none", function () {
            t.readyState == 4 ? q(e) : setTimeout(arguments.callee, 10)
        }()) : t.parentNode.removeChild(t))
    }

    function q(e) {
        var t = R(e);
        if (t) {
            for (var n in t) typeof t[n] == "function" && (t[n] = null);
            t.parentNode.removeChild(t)
        }
    }

    function R(e) {
        var t = null;
        try {
            t = a.getElementById(e)
        } catch (n) {}
        return t
    }

    function U(e) {
        return a.createElement(e)
    }

    function z(e, t, n) {
        e.attachEvent(t, n), d[d.length] = [e, t, n]
    }

    function W(e) {
        var t = T.pv,
            n = e.split(".");
        return n[0] = parseInt(n[0], 10), n[1] = parseInt(n[1], 10) || 0, n[2] = parseInt(n[2], 10) || 0, t[0] > n[0] || t[0] == n[0] && t[1] > n[1] || t[0] == n[0] && t[1] == n[1] && t[2] >= n[2] ? !0 : !1
    }

    function X(n, r, i, s) {
        if (T.ie && T.mac) return;
        var o = a.getElementsByTagName("head")[0];
        if (!o) return;
        var u = i && typeof i == "string" ? i : "screen";
        s && (E = null, S = null);
        if (!E || S != u) {
            var f = U("style");
            f.setAttribute("type", "text/css"), f.setAttribute("media", u), E = o.appendChild(f), T.ie && T.win && typeof a.styleSheets != e && a.styleSheets.length > 0 && (E = a.styleSheets[a.styleSheets.length - 1]), S = u
        }
        T.ie && T.win ? E && typeof E.addRule == t && E.addRule(n, r) : E && typeof a.createTextNode != e && E.appendChild(a.createTextNode(n + " {" + r + "}"))
    }

    function V(e, t) {
        if (!x) return;
        var n = t ? "visible" : "hidden";
        b && R(e) ? R(e).style.visibility = n : X("#" + e, "visibility:" + n)
    }

    function $(t) {
        var n = /[\\\"<>\.;]/,
            r = n.exec(t) != null;
        return r && typeof encodeURIComponent != e ? encodeURIComponent(t) : t
    }
    var e = "undefined",
        t = "object",
        n = "Shockwave Flash",
        r = "ShockwaveFlash.ShockwaveFlash",
        i = "application/x-shockwave-flash",
        s = "SWFObjectExprInst",
        o = "onreadystatechange",
        u = window,
        a = document,
        f = navigator,
        l = !1,
        c = [A],
        h = [],
        p = [],
        d = [],
        v, m, g, y, b = !1,
        w = !1,
        E, S, x = !0,
        T = function () {
            var s = typeof a.getElementById != e && typeof a.getElementsByTagName != e && typeof a.createElement != e,
                o = f.userAgent.toLowerCase(),
                c = f.platform.toLowerCase(),
                h = c ? /win/.test(c) : /win/.test(o),
                p = c ? /mac/.test(c) : /mac/.test(o),
                d = /webkit/.test(o) ? parseFloat(o.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : !1,
                v = !1,
                m = [0, 0, 0],
                g = null;
            if (typeof f.plugins != e && typeof f.plugins[n] == t) g = f.plugins[n].description, g && (typeof f.mimeTypes == e || !f.mimeTypes[i] || !! f.mimeTypes[i].enabledPlugin) && (l = !0, v = !1, g = g.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), m[0] = parseInt(g.replace(/^(.*)\..*$/, "$1"), 10), m[1] = parseInt(g.replace(/^.*\.(.*)\s.*$/, "$1"), 10), m[2] = /[a-zA-Z]/.test(g) ? parseInt(g.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0);
            else if (typeof u.ActiveXObject != e) try {
                var y = new ActiveXObject(r);
                y && (g = y.GetVariable("$version"), g && (v = !0, g = g.split(" ")[1].split(","), m = [parseInt(g[0], 10), parseInt(g[1], 10), parseInt(g[2], 10)]))
            } catch (b) {}
            return {
                w3: s,
                pv: m,
                wk: d,
                ie: v,
                win: h,
                mac: p
            }
        }(),
        N = function () {
            if (!T.w3) return;
            (typeof a.readyState != e && a.readyState == "complete" || typeof a.readyState == e && (a.getElementsByTagName("body")[0] || a.body)) && C(), b || (typeof a.addEventListener != e && a.addEventListener("DOMContentLoaded", C, !1), T.ie && T.win && (a.attachEvent(o, function () {
                a.readyState == "complete" && (a.detachEvent(o, arguments.callee), C())
            }), u == top && function () {
                if (b) return;
                try {
                    a.documentElement.doScroll("left")
                } catch (e) {
                    setTimeout(arguments.callee, 0);
                    return
                }
                C()
            }()), T.wk && function () {
                if (b) return;
                if (!/loaded|complete/.test(a.readyState)) {
                    setTimeout(arguments.callee, 0);
                    return
                }
                C()
            }(), L(C))
        }(),
        J = function () {
            T.ie && T.win && window.attachEvent("onunload", function () {
                var e = d.length;
                for (var t = 0; t < e; t++) d[t][0].detachEvent(d[t][1], d[t][2]);
                var n = p.length;
                for (var r = 0; r < n; r++) I(p[r]);
                for (var i in T) T[i] = null;
                T = null;
                for (var s in avpw_swfobject) avpw_swfobject[s] = null;
                avpw_swfobject = null
            })
        }();
    return {
        registerObject: function (e, t, n, r) {
            if (T.w3 && e && t) {
                var i = {};
                i.id = e, i.swfVersion = t, i.expressInstall = n, i.callbackFn = r, h[h.length] = i, V(e, !1)
            } else r && r({
                success: !1,
                id: e
            })
        },
        getObjectById: function (e) {
            if (T.w3) return _(e)
        },
        embedSWF: function (n, r, i, s, o, u, a, f, l, c) {
            var h = {
                success: !1,
                id: r
            };
            T.w3 && !(T.wk && T.wk < 312) && n && r && i && s && o ? (V(r, !1), k(function () {
                i += "", s += "";
                var p = {};
                if (l && typeof l === t)
                    for (var d in l) p[d] = l[d];
                p.data = n, p.width = i, p.height = s;
                var v = {};
                if (f && typeof f === t)
                    for (var m in f) v[m] = f[m];
                if (a && typeof a === t)
                    for (var g in a) typeof v.flashvars != e ? v.flashvars += "&" + g + "=" + a[g] : v.flashvars = g + "=" + a[g];
                if (W(o)) {
                    var y = j(p, v, r);
                    p.id == r && V(r, !0), h.success = !0, h.ref = y
                } else {
                    if (u && D()) {
                        p.data = u, P(p, v, r, c);
                        return
                    }
                    V(r, !0)
                }
                c && c(h)
            })) : c && c(h)
        },
        switchOffAutoHideShow: function () {
            x = !1
        },
        ua: T,
        getFlashPlayerVersion: function () {
            return {
                major: T.pv[0],
                minor: T.pv[1],
                release: T.pv[2]
            }
        },
        hasFlashPlayerVersion: W,
        createSWF: function (e, t, n) {
            return T.w3 ? j(e, t, n) : undefined
        },
        showExpressInstall: function (e, t, n, r) {
            T.w3 && D() && P(e, t, n, r)
        },
        removeSWF: function (e) {
            T.w3 && I(e)
        },
        createCSS: function (e, t, n, r) {
            T.w3 && X(e, t, n, r)
        },
        addDomLoadEvent: k,
        addLoadEvent: L,
        getQueryParamValue: function (e) {
            var t = a.location.search || a.location.hash;
            if (t) {
                /\?/.test(t) && (t = t.split("?")[1]);
                if (e == null) return $(t);
                var n = t.split("&");
                for (var r = 0; r < n.length; r++)
                    if (n[r].substring(0, n[r].indexOf("=")) == e) return $(n[r].substring(n[r].indexOf("=") + 1))
            }
            return ""
        },
        expressInstallCallback: function () {
            if (w) {
                var e = R(s);
                e && v && (e.parentNode.replaceChild(v, e), m && (V(m, !0), T.ie && T.win && (v.style.display = "block")), g && g(y)), w = !1
            }
        }
    }
}();
(function (AV, window, document) {

    // pretty much copied directly from Backbone.js
    // https://github.com/documentcloud/backbone/blob/master/backbone.js
    //
    //     Backbone.js 0.9.2
    //     (c) 2010-2012 Jeremy Ashkenas, DocumentCloud Inc.
    //     Backbone may be freely distributed under the MIT license.
    //     For all details and documentation:
    //     http://backbonejs.org
    //
    // Backbone.Events
    // -----------------
    // Regular expression used to split event strings
    var eventSplitter = /\s+/,
        Events = AV.Events = {
            on: function (e, t, n) {
                var r, i, s;
                if (!t) return this;
                e = e.split(eventSplitter), r = this._callbacks || (this._callbacks = {});
                while (i = e.shift()) s = r[i] || (r[i] = []), s.push(t, n);
                return this
            },
            off: function (e, t, n) {
                var r, i, s, o;
                if (!(i = this._callbacks)) return this;
                if (!(e || t || n)) return delete this._callbacks, this;
                e = e ? e.split(eventSplitter) : _.keys(i);
                while (r = e.shift()) {
                    if (!(s = i[r]) || !t && !n) {
                        delete i[r];
                        continue
                    }
                    for (o = s.length - 2; o >= 0; o -= 2) t && s[o] !== t || n && s[o + 1] !== n || s.splice(o, 2)
                }
                return this
            },
            trigger: function (e) {
                var t, n, r, i, s, o, u, a;
                if (!(n = this._callbacks)) return this;
                a = [], e = e.split(eventSplitter);
                for (i = 1, s = arguments.length; i < s; i++) a[i - 1] = arguments[i];
                while (t = e.shift()) {
                    if (u = n.all) u = u.slice();
                    if (r = n[t]) r = r.slice();
                    if (r)
                        for (i = 0, s = r.length; i < s; i += 2) r[i].apply(r[i + 1] || this, a);
                    if (u) {
                        o = [t].concat(a);
                        for (i = 0, s = u.length; i < s; i += 2) u[i].apply(u[i + 1] || this, o)
                    }
                }
                return this
            }
        };

}(window['AV'] || (window['AV'] = {}), window, document));
// this has been modded to put JSON in the AV namespace
typeof AV == "undefined" && (AV = {}), AV.JSON = {},
function () {
    "use strict";

    function f(e) {
        return e < 10 ? "0" + e : e
    }

    function quote(e) {
        return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(escapable, function (e) {
            var t = meta[e];
            return typeof t == "string" ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + e + '"'
    }

    function str(e, t) {
        var n, r, i, s, o = gap,
            u, a = t[e];
        a && typeof a == "object" && typeof a.toJSON == "function" && (a = a.toJSON(e)), typeof rep == "function" && (a = rep.call(t, e, a));
        switch (typeof a) {
        case "string":
            return quote(a);
        case "number":
            return isFinite(a) ? String(a) : "null";
        case "boolean":
        case "null":
            return String(a);
        case "object":
            if (!a) return "null";
            gap += indent, u = [];
            if (Object.prototype.toString.apply(a) === "[object Array]") {
                s = a.length;
                for (n = 0; n < s; n += 1) u[n] = str(n, a) || "null";
                return i = u.length === 0 ? "[]" : gap ? "[\n" + gap + u.join(",\n" + gap) + "\n" + o + "]" : "[" + u.join(",") + "]", gap = o, i
            }
            if (rep && typeof rep == "object") {
                s = rep.length;
                for (n = 0; n < s; n += 1) r = rep[n], typeof r == "string" && (i = str(r, a), i && u.push(quote(r) + (gap ? ": " : ":") + i))
            } else
                for (r in a) Object.hasOwnProperty.call(a, r) && (i = str(r, a), i && u.push(quote(r) + (gap ? ": " : ":") + i));
            return i = u.length === 0 ? "{}" : gap ? "{\n" + gap + u.join(",\n" + gap) + "\n" + o + "}" : "{" + u.join(",") + "}", gap = o, i
        }
    }
    typeof Date.prototype.toJSON != "function" && (Date.prototype.toJSON = function (e) {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function (e) {
        return this.valueOf()
    });
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap, indent, meta = {
            "\b": "\\b",
            "	": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        }, rep;
    typeof AV.JSON.stringify != "function" && (AV.JSON.stringify = function (e, t, n) {
        var r;
        gap = "", indent = "";
        if (typeof n == "number")
            for (r = 0; r < n; r += 1) indent += " ";
        else typeof n == "string" && (indent = n);
        rep = t;
        if (!t || typeof t == "function" || typeof t == "object" && typeof t.length == "number") return str("", {
            "": e
        });
        throw new Error("AV.JSON.stringify")
    }), typeof AV.JSON.parse != "function" && (AV.JSON.parse = function (text, reviver) {
        function walk(e, t) {
            var n, r, i = e[t];
            if (i && typeof i == "object")
                for (n in i) Object.hasOwnProperty.call(i, n) && (r = walk(i, n), r !== undefined ? i[n] = r : delete i[n]);
            return reviver.call(e, t, i)
        }
        var j;
        text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function (e) {
            return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
        }));
        if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), typeof reviver == "function" ? walk({
            "": j
        }, "") : j;
        throw new SyntaxError("AV.JSON.parse")
    })
}();
(function (AV) {
    AV.build = {
        version: "3.1.0.243",
        bundled: false,
        MINIMUM_FLASH_PLAYER_VERSION: "10.2.0",
        feather_baseURL: "http://feather.aviary.com/3.1.0.243/",
        feather_baseURL_SSL: "https://dme0ih8comzn4.cloudfront.net/3.1.0.243/",
        feather_stickerURL: "http://feather.aviary.com/stickers/",
        feather_stickerURL_SSL: "https://dme0ih8comzn4.cloudfront.net/stickers/",
        imgrecvBase: "http://featherservices.aviary.com/",
        imgrecvBase_SSL: "https://featherservices.aviary.com/",
        featherTargetAnnounce: "http://featherservices.aviary.com/feather_target_announce_v3.html",
        featherTargetAnnounce_SSL: "https://featherservices.aviary.com/feather_target_announce_v3.html",
        imgrecvServer: "http://featherservices.aviary.com/FeatherReceiver.aspx",
        imgrecvServer_SSL: "https://featherservices.aviary.com/FeatherReceiver.aspx",
        jsonp_imgserver: "http://featherservices.aviary.com/imgjsonpserver.aspx",
        jsonp_imgserver_SSL: "https://featherservices.aviary.com/imgjsonpserver.aspx",
        proxyServer: "http://featherservices.aviary.com/proxy.aspx",
        proxyServer_SSL: "https://featherservices.aviary.com/proxy.aspx",
        asyncImgrecvBase: "http://api.aviary.com/",
        asyncImgrecvBase_SSL: "https://api.aviary.com/",
        partnerAssetURL: "http://api.aviary.com/getassets",
        partnerAssetURL_SSL: "https://api.aviary.com/getassets",
        asyncFeatherTargetAnnounce: "http://api.aviary.com/feather_target_announce_v3.html",
        asyncFeatherTargetAnnounce_SSL: "https://api.aviary.com/feather_target_announce_v3.html",
        asyncImgrecvCreateJob: "http://api.aviary.com/createjob",
        asyncImgrecvCreateJob_SSL: "https://api.aviary.com/createjob",
        asyncImgrecvGetJobStatus: "http://api.aviary.com/getjobstatus",
        asyncImgrecvGetJobStatus_SSL: "https://api.aviary.com/getjobstatus",
        googleTracker: "UA-84575-16",
        inAppPurchaseFrameURL: "http://purchases.viary.com/gateway.aspx?p=flickr",
        filterServer: "http://featherservices.aviary.com/moa.ashx",
        filterServer_SSL: "https://featherservices.aviary.com/moa.ashx",
        featherFilterAnnounce: "http://featherservices.aviary.com/feather_filter_announce.html",
        featherFilterAnnounce_SSL: "https://featherservices.aviary.com/feather_filter_announce.html"
    }
})(AV = window["AV"] || {});
if (typeof AV == "undefined") {
    AV = {}
}
AV.validLanguages = {
    en: true,
    zh_hant: true,
    nl: true,
    fr: true,
    de: true,
    it: true,
    ja: true,
    ko: true,
    pl: true,
    pt: true,
    pt_br: true,
    ru: true,
    es: true,
    tr: true,
    bg: true,
    ca: true,
    zh_hans: true,
    cs: true,
    da: true,
    fi: true,
    he: true,
    hu: true,
    id: true,
    lv: true,
    lt: true,
    sv: true,
    vi: true,
    no: true,
    android: true,
    el: true,
    sk: true,
    sl: true,
    ar: true,
    th: true
};
(function (AV, window, document) {
    AV.util = {
        getX: function (e) {
            var x = 0;
            while (e != null) {
                x += e.offsetLeft;
                e = e.offsetParent
            }
            return x
        },
        getY: function (e) {
            var y = 0;
            while (e != null) {
                y += e.offsetTop;
                e = e.offsetParent
            }
            return y
        },
        getTouch: function (ev) {
            var touch;
            if (ev.originalEvent) {
                ev = ev.originalEvent
            }
            if (ev.changedTouches && ev.changedTouches.length == 1) {
                touch = ev.changedTouches[0]
            } else if (ev.touches && ev.touches.length == 1) {
                touch = ev.touches[0]
            } else {
                touch = false
            }
            return touch
        },
        getScaledDims: function (elW, elH, maxW, maxH) {
            maxH = maxH || maxW;
            var scaledW = elW;
            var scaledH = elH;
            var widthOverHeight = elW / elH;
            if (elW > maxW || elH > maxH) {
                if (elW - maxW > widthOverHeight * (elH - maxH)) {
                    scaledW = maxW;
                    scaledH = maxW * elH / elW + .5 | 0
                } else {
                    scaledW = maxH * widthOverHeight + .5 | 0;
                    scaledH = maxH
                }
            }
            return {
                width: scaledW,
                height: scaledH
            }
        },
        nextFrame: function (callback) {
            setTimeout(callback, 1)
        },
        getDomain: function (s, full) {
            var fullstart, start, end, i, i2, ipFormat, portIndex;
            if (s.substr(0, 7) == "http://") {
                fullstart = 7
            } else if (s.substr(0, 8) == "https://") {
                fullstart = 8
            } else if (s.substr(0, 6) == "ftp://") {
                fullstart = 6
            } else {
                fullstart = 0
            }
            end = s.indexOf("/", fullstart);
            if (end == -1) {
                end = s.length
            }
            if (full) {
                start = fullstart
            } else {
                ipFormat = s;
                portIndex = s.lastIndexOf(":");
                if (portIndex > fullstart) {
                    ipFormat = s.substring(fullstart, portIndex)
                } else {
                    ipFormat = s.substring(fullstart, end)
                } if (ipFormat.match(/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/)) {
                    start = fullstart
                } else {
                    i = s.lastIndexOf(".", end);
                    i2 = s.lastIndexOf(".", i - 1);
                    if (i2 == -1) {
                        start = fullstart
                    } else {
                        start = i2 + 1
                    }
                }
            }
            return s.substring(start, end)
        },
        extend: function () {
            var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1,
                length = arguments.length,
                deep = false;
            if (typeof target === "boolean") {
                deep = target;
                target = arguments[1] || {};
                i = 2
            }
            if (typeof target !== "object" && !jQuery.isFunction(target)) {
                target = {}
            }
            if (length === i) {
                target = this;
                --i
            }
            for (; i < length; i++) {
                if ((options = arguments[i]) != null) {
                    for (name in options) {
                        src = target[name];
                        copy = options[name];
                        if (target === copy) {
                            continue
                        }
                        if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
                            if (copyIsArray) {
                                copyIsArray = false;
                                clone = src && jQuery.isArray(src) ? src : []
                            } else {
                                clone = src && jQuery.isPlainObject(src) ? src : {}
                            }
                            target[name] = jQuery.extend(deep, clone, copy)
                        } else if (copy !== undefined) {
                            target[name] = copy
                        }
                    }
                }
            }
            return target
        },
        findItemByKeyValueFromArray: function (key, value, array) {
            var i, len = array.length,
                result;
            for (i = 0; i < array.length; i++) {
                if (array[i] && array[i][key] && array[i][key] === value) {
                    result = array[i];
                    break
                }
            }
            return result
        },
        loadFile: function () {
            var setCallback;
            var headEl;
            var styleSheetIndex = 0;
            var docFragment, firstChildOfHead;
            var setCallback_hairyStyle = function (e, callback) {
                if (callback) {
                    function handleReady(ev) {
                        if (this.readyState == 4 || this.readyState == "complete" || this.readyState == "loaded") {
                            callback(ev)
                        }
                    }
                    if (navigator.appName == "Microsoft Internet Explorer") {
                        e.onreadystatechange = handleReady
                    } else {
                        e.onload = callback
                    }
                }
            };
            setCallback = setCallback_hairyStyle;
            return function (filename, filetype, callback) {
                var fileref;
                if (filetype == "js") {
                    fileref = document.createElement("script");
                    fileref.setAttribute("type", "text/javascript");
                    setCallback(fileref, callback);
                    fileref.setAttribute("src", filename)
                } else if (filetype == "css") {
                    if (document.createStyleSheet) {
                        document.createStyleSheet(filename, styleSheetIndex++)
                    } else {
                        fileref = document.createElement("link");
                        fileref.setAttribute("rel", "stylesheet");
                        fileref.setAttribute("type", "text/css");
                        fileref.setAttribute("href", filename)
                    }
                } else if (filetype == "img") {
                    fileref = document.createElement("img");
                    setCallback(fileref, callback);
                    fileref.setAttribute("src", filename)
                }
                if (fileref) {
                    headEl = headEl || document.getElementsByTagName("head")[0];
                    if (filetype == "js") {
                        headEl.appendChild(fileref)
                    } else if (filetype == "css") {
                        docFragment = docFragment || document.createDocumentFragment();
                        docFragment.appendChild(fileref);
                        headEl.insertBefore(fileref, firstChildOfHead)
                    }
                }
                return fileref
            }
        }(),
        getImageElem: function (e) {
            if (typeof e == "string") {
                return document.getElementById(e)
            }
            if (e.length) {
                return e[0]
            }
            return e
        },
        getImageId: function (e) {
            if (typeof e == "string") {
                return e
            }
            return e.id
        },
        imgOnLoad: function (element, callback) {
            var $element = avpw$(element);
            $element.load(callback);
            if ($element[0].complete == true || $element[0].readyState == 4 || $element[0].readyState == "complete" || $element[0].readyState == "loaded") {
                $element.trigger("load")
            }
        },
        color_is_white: function (c) {
            c = c.toLowerCase();
            return c == "#fff" || c == "#ffffff" || c == "white" || c == "rgb(255,255,255)" || c == "rgb(255, 255, 255)"
        },
        color_is_light: function (c) {
            var r, g, b, v, cArray;
            r = g = b = 0;
            cArray = AV.util.color_to_array(c);
            r = cArray[0];
            g = cArray[1];
            b = cArray[2];
            v = .2 * r + .7 * g + .1 * b;
            return v > 127.5
        },
        color_expand: function (color) {
            var r, g, b;
            if (color.length == 4) {
                r = color.charAt(1);
                g = color.charAt(2);
                b = color.charAt(3);
                color = "#" + r + r + g + g + b + b
            }
            return color
        },
        color_to_array: function (color) {
            var r, g, b;
            if (color.charAt(0) == "#") {
                color = AV.util.color_expand(color);
                r = parseInt(color.substr(1, 2), 16);
                g = parseInt(color.substr(3, 2), 16);
                b = parseInt(color.substr(5, 2), 16)
            } else if (color.charAt(0).toLowerCase() == "r") {
                color = AV.util.rgb_to_color(color);
                r = parseInt(color.substr(1, 2), 16);
                g = parseInt(color.substr(3, 2), 16);
                b = parseInt(color.substr(5, 2), 16)
            }
            color = [r, g, b, 1];
            return color
        },
        array_to_color: function (array) {
            var color = AV.util.array_to_rgb(array);
            color = AV.util.rgb_to_color(color);
            return color
        },
        array_to_rgb: function (array) {
            var color = "rgb(0,0,0)";
            if (array.join) {
                if (array.length > 3) {
                    array = array.slice(0, 3)
                }
                color = "rgb(" + array.join(",") + ")"
            }
            return color
        },
        color_to_rgb: function (color) {
            color = AV.util.color_to_array(color);
            color = AV.util.array_to_rgb(color);
            return color
        },
        rgb_to_color: function (rgb) {
            var color;
            var r = /\s*rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/;
            var rr, gg, bb;
            var m = rgb.match(r);
            if (m) {
                rr = parseInt(m[1]).toString(16);
                if (rr.length == 1) {
                    rr = "0" + rr
                }
                gg = parseInt(m[2]).toString(16);
                if (gg.length == 1) {
                    gg = "0" + gg
                }
                bb = parseInt(m[3]).toString(16);
                if (bb.length == 1) {
                    bb = "0" + bb
                }
                return "#" + rr + gg + bb
            }
            return rgb
        },
        color_to_int: function (color) {
            color = AV.util.color_expand(color);
            color = AV.util.rgb_to_color(color);
            return parseInt(color.substr(1), 16)
        },
        loadImagesSync: function (images, callback) {
            var loadedCount = 0;
            var len = images.length;
            for (var i = 0; i < len; i++) {
                var img = images[i].img;
                var src = images[i].src;
                img.onload = function () {
                    loadedCount++;
                    if (callback && loadedCount == images.length) {
                        AV.util.nextFrame(callback)
                    }
                };
                img.src = src
            }
        },
        getApiVersion: function (config) {
            return config && config.apiVersion ? parseInt(config.apiVersion, 10) : 1
        },
        getUserFriendlyToolName: function (toolCodeName) {
            var specialMapping = {
                overlay: "Stickers",
                drawing: "Draw",
                textwithfont: "Text",
                colorsplash: "Splash",
                tiltshift: "Tilt Shift",
                forcecrop: "Crop"
            };
            var userFriendlyName = "";
            if (toolCodeName) {
                userFriendlyName = specialMapping[toolCodeName] || toolCodeName.substr(0, 1).toUpperCase() + toolCodeName.substr(1)
            }
            return userFriendlyName
        },
        keyDownHandlerNumber: function (ev, onValidKeyPress) {
            if (ev.keyCode == 9 || ev.keyCode == 27 || ev.keyCode == 65 && (ev.ctrlKey === true || ev.metaKey === true) || ev.keyCode >= 35 && ev.keyCode <= 39) {
                return
            } else {
                if ((ev.keyCode < 48 || ev.keyCode > 57) && (ev.keyCode < 96 || ev.keyCode > 105) && ev.keyCode !== 46 && ev.keyCode !== 8) {
                    ev.preventDefault()
                } else {
                    if (onValidKeyPress) onValidKeyPress.apply(this, [ev])
                }
            }
        },
        addFontToPage: function (font, callback) {
            if (!font) {
                if (callback) {
                    callback()
                }
            }
            var fontName = font.value;
            if (font.system) {
                if (callback) {
                    callback(font)
                }
            } else if (AV.WebFont) {
                var webFontConfig = {
                    loading: function () {
                        if (AV.controlsWidgetInstance) {
                            AV.controlsWidgetInstance.showWaitThrobber(true)
                        }
                    },
                    active: function () {
                        if (AV.controlsWidgetInstance) {
                            AV.controlsWidgetInstance.showWaitThrobber(false)
                        }
                        if (callback) {
                            callback(font)
                        }
                    },
                    inactive: function () {
                        if (AV.controlsWidgetInstance) {
                            AV.controlsWidgetInstance.showWaitThrobber(false)
                        }
                        AV.errorNotify("UNSUPPORTED_FONT", [fontName]);
                        if (callback) {
                            callback()
                        }
                    }
                };
                if (font.custom) {
                    webFontConfig.custom = {
                        families: [fontName],
                        urls: [font.url]
                    };
                    webFontConfig.active = function () {
                        if (AV.controlsWidgetInstance) {
                            AV.controlsWidgetInstance.showWaitThrobber(false)
                        }
                        if (callback) {
                            AV.util.nextFrame(function () {
                                callback(font)
                            }, 500)
                        }
                    }
                } else {
                    webFontConfig.google = {
                        families: [fontName]
                    }
                }
                AV.WebFont.load(webFontConfig)
            }
        }
    }
})(window["AV"] || (window["AV"] = {}), window, document);
if (typeof AV === "undefined") {
    AV = {}
}
AV.FlashAPI = function () {
    var _FLASH_CANVAS_ELEMENT_ID = "avpw_canvas_swf";
    var _getImageDataCallback = null;
    var embedSWF = function () {
        var _createObjParam = function (el, pName, pValue) {
            var p = document.createElement("param");
            p.setAttribute("name", pName);
            p.setAttribute("value", pValue);
            el.appendChild(p)
        };
        var _createSWF = function (attObj, parObj, id) {
            var el = document.getElementById(id);
            if (el) {
                if (typeof attObj.id == "undefined") {
                    attObj.id = id
                }
                if (AV.msie) {
                    var att = "";
                    for (var i in attObj) {
                        if (attObj[i] != Object.prototype[i]) {
                            if (i.toLowerCase() == "data") {
                                parObj.movie = attObj[i]
                            } else if (i.toLowerCase() == "styleclass") {
                                att += ' class="' + attObj[i] + '"'
                            } else if (i.toLowerCase() != "classid") {
                                att += " " + i + '="' + attObj[i] + '"'
                            }
                        }
                    }
                    var par = "";
                    for (var j in parObj) {
                        if (parObj[j] != Object.prototype[j]) {
                            par += '<param name="' + j + '" value="' + parObj[j] + '" />'
                        }
                    }
                    el.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + att + ">" + par + "</object>";
                    if (typeof objIdArr == "undefined") {
                        objIdArr = []
                    }
                    objIdArr[objIdArr.length] = attObj.id
                } else {
                    var o = document.createElement("object");
                    o.setAttribute("type", "application/x-shockwave-flash");
                    for (var m in attObj) {
                        if (attObj[m] != Object.prototype[m]) {
                            if (m.toLowerCase() == "styleclass") {
                                o.setAttribute("class", attObj[m])
                            } else if (m.toLowerCase() != "classid") {
                                o.setAttribute(m, attObj[m])
                            }
                        }
                    }
                    for (var n in parObj) {
                        if (parObj[n] != Object.prototype[n] && n.toLowerCase() != "movie") {
                            _createObjParam(o, n, parObj[n])
                        }
                    }
                    el.parentNode.replaceChild(o, el)
                }
            }
        };
        var _embedSWF = function (swfUrlStr, replaceElemIdStr, widthStr, heightStr, swfVersionStr, xiSwfUrlStr, flashvarsObj, parObj, attObj, callbackFn) {
            widthStr += "";
            heightStr += "";
            var att = {};
            if (attObj && typeof attObj === "object") {
                for (var i in attObj) {
                    att[i] = attObj[i]
                }
            }
            att.data = swfUrlStr;
            att.width = widthStr;
            att.height = heightStr;
            var par = {};
            if (parObj && typeof parObj === "object") {
                for (var j in parObj) {
                    par[j] = parObj[j]
                }
            }
            if (flashvarsObj && typeof flashvarsObj === "object") {
                for (var k in flashvarsObj) {
                    if (typeof par.flashvars != "undefined") {
                        par.flashvars += "&" + k + "=" + flashvarsObj[k]
                    } else {
                        par.flashvars = k + "=" + flashvarsObj[k]
                    }
                }
            }
            _createSWF(att, par, replaceElemIdStr)
        };
        return function (id, swf, width, height, flashvars) {
            flashvars = flashvars || {};
            var params = {};
            params.quality = "high";
            params.bgcolor = "#808080";
            params.allowscriptaccess = "always";
            params.allowfullscreen = "true";
            var attributes = {};
            attributes.id = id;
            attributes.name = id;
            if (AV.msie && AV.msie < 9) {
                attributes.align = "center"
            }
            _embedSWF(swf, id + "_replace", width || "100%", height || "100%", "10.0.32", "", flashvars, params, attributes)
        }
    }();
    var FlashBridge = function () {};
    FlashBridge.prototype = function () {
        return {
            getPlugins: function () {
                return []
            },
            createCanvas: function () {
                if (this.initsize) {
                    embedSWF(_FLASH_CANVAS_ELEMENT_ID, AV.build["feather_baseURL"] + "canvas.swf", this.initsize.width, this.initsize.height)
                } else {
                    embedSWF(_FLASH_CANVAS_ELEMENT_ID, AV.build["feather_baseURL"] + "canvas.swf")
                }
            },
            _onComponentLoaded: function (id) {
                switch (id) {
                case "canvas":
                    var canvas = document.getElementById(_FLASH_CANVAS_ELEMENT_ID);
                    AV.FlashAPI._onCanvasLoaded(canvas);
                    break;
                case "controls":
                    break
                }
            },
            _onComponentReady: function (id) {
                var pw = AV.paintWidgetInstance;
                if (id === "canvas") {
                    if (pw.canvasReadyCallback) {
                        pw.canvasReadyCallback.resolve()
                    }
                }
            }
        }
    }();
    var pibeca = function () {
        var _PibecaLookup = [];
        var _initPibecaLookup = function () {
            for (var i = 0; i < 256; i++) {
                _PibecaLookup[i] = String.fromCharCode(i)
            }
            _PibecaLookup[0] = String.fromCharCode(1) + String.fromCharCode(1);
            _PibecaLookup[1] = String.fromCharCode(1) + String.fromCharCode(2)
        };
        var _encodeDataString = function (array) {
            var s = "";
            for (var i = 0; i < array.length; i += 4) {
                s += _PibecaLookup[array[i + 3]];
                s += _PibecaLookup[array[i]];
                s += _PibecaLookup[array[i + 1]];
                s += _PibecaLookup[array[i + 2]]
            }
            return s
        };
        var _decodeDataString = function (data, width, height) {
            var decodedData = [];
            var d;
            var j = 0;
            var i = 0;
            var rpl = [0, 0, 1];
            while (i < data.length) {
                decodedData[j++] = (d = data.charCodeAt(i++)) != 1 ? d : rpl[data.charCodeAt(i++)]
            }
            return decodedData
        };
        var api = {};
        api.init = _initPibecaLookup;
        api.shutdown = function () {
            _PibecaLookup = []
        };
        api.decode = _decodeDataString;
        api.encode = _encodeDataString;
        return api
    }();
    return function () {
        var image = null;
        var active_target = null;
        var canvas = null;
        var _canUndo = false;
        var _canRedo = false;
        return {
            mapToFlashToolName: function (name) {
                switch (name) {
                case "rotate":
                    return "rotate90"
                }
                return name
            },
            mapFromFlashToolName: function (name) {
                switch (name) {
                case "rotate90":
                    return "rotate"
                }
                return name
            },
            customBridge: function (o) {
                var fn = function () {};
                fn.prototype = new FlashBridge;
                fn.prototype.constructor = FlashBridge;
                for (var k in o) {
                    fn.prototype[k] = o[k]
                }
                return fn
            },
            activate: function (c) {
                this.bridge = c || new FlashBridge;
                this.goldenEggCallback = null
            },
            setHiresSize: function (width, height) {
                if (this.canvas) {
                    this.canvas.setHiresSize(width, height)
                }
            },
            hiresSizeChanged: function (w, h) {
                if (AV.paintWidgetInstance && AV.paintWidgetInstance.actions) {
                    AV.paintWidgetInstance.actions.setDims(w, h)
                }
            },
            startEditing: function (target) {
                this.canvas = null;
                this.active_target = target;
                this.bridge.createCanvas()
            },
            restartEditing: function (target) {
                this.active_target = target;
                this._setupEditing()
            },
            close: function () {},
            runGoldenEgg: function (swfpath, swfname, filterparams, callback) {
                this.goldenEggCallback = callback;
                this.canvas.renderGoldenEgg(swfpath, swfname, filterparams)
            },
            doCrop: function () {
                this.canvas.executeCrop()
            },
            activatePlugin: function (id) {
                this.canvas.activatePlugin(id)
            },
            deactivatePlugin: function (id) {
                this.canvas.deactivatePlugin(id)
            },
            changeProperty: function (id, value) {
                this.canvas.changeProperty(id, value)
            },
            applyPreviewFromPlugin: function (id) {
                this.canvas.applyPreviewFromPlugin(id)
            },
            commitChangesFromPlugin: function (id) {
                this.canvas.commitChangesFromPlugin(id)
            },
            discardChangesFromPlugin: function (id) {
                this.canvas.discardChangesFromPlugin(id)
            },
            resizeCanvas: function (width, height) {
                var canvasContainer = this.canvas;
                canvasContainer.width = width + "px";
                canvasContainer.height = height + "px";
                if (AV.paintWidgetInstance) {
                    AV.paintWidgetInstance.setDimensions(width, height)
                }
            },
            hideCanvas: function () {
                if (this.canvas) {
                    this.canvas.style.visibility = "hidden"
                }
            },
            showCanvas: function () {
                if (this.canvas) {
                    this.canvas.style.visibility = "visible"
                }
            },
            executePlugin: function () {
                this.canvas.executePlugin()
            },
            renderPreview: function (id, params) {
                this.canvas.renderPreview(id, params)
            },
            getDynamicPropertyDefaultValue: function (id) {
                return this.canvas.getDynamicPropertyDefaultValue(id)
            },
            syncProperty: function (id, value) {},
            syncPreview: function (data) {},
            setCanvasDataArray: function (data, width, height) {
                if (AV.canvasDataReceiver) {
                    AV.canvasDataReceiver.apply(this, [data, width, height])
                }
            },
            setThumb: function (index, data) {},
            getHistory: function () {
                return this.canvas.getHistory()
            },
            getHiResStickerUrl: function (url) {
                if (AV.paintWidgetInstance && AV.paintWidgetInstance.overlayRegistry) {
                    return AV.paintWidgetInstance.overlayRegistry.getHiRes(url)
                } else {
                    return null
                }
            },
            getImageData: function (mime, callback) {
                if (callback && typeof callback === "function") {
                    _getImageDataCallback = callback
                }
                this.canvas.commit({})
            },
            getMaxSize: function () {
                var max = AV.launchData["maxEditSize"] || AV.launchData["maxSize"];
                return max
            },
            getMaxBitmapSize: function () {
                return AV.launchData["maxSize"]
            },
            _cropSelectionStarted: function (x, y, isCorner) {},
            _onPreviewRendered: function (id, preview) {},
            _onPluginLoaded: function (id, ui) {
                var pw = AV.paintWidgetInstance;
                if (pw.moduleLoadedCallback && pw.moduleLoadedCallback[id]) {
                    pw.moduleLoadedCallback[id].resolve()
                }
            },
            _onImageLoaded: function (imageWidth, imageHeight) {
                if (AV.paintWidgetLauncher_Flash_stage2) {
                    AV.paintWidgetLauncher_Flash_stage2(imageWidth, imageHeight)
                }
            },
            _onGoldenEggComplete: function () {
                if (this.goldenEggCallback) {
                    this.goldenEggCallback()
                }
            },
            _onCanvasLoaded: function (canvas) {
                this.canvas = canvas;
                this._setupEditing(AV.launchData.url || null)
            },
            _onGetImageDataComplete: function (result) {
                if (_getImageDataCallback) {
                    _getImageDataCallback.apply(this, [result]);
                    _getImageDataCallback = null
                }
            },
            _setupEditing: function (src) {
                var plugins = this.bridge.getPlugins();
                src = src || this.active_target.src;
                this.canvas.setup(src, AV.build["proxyServer"], plugins)
            },
            _canUndo: function () {
                return _canUndo
            },
            _onUndo: function () {
                this.canvas.undo()
            },
            _canRedo: function () {
                return _canRedo
            },
            _onRedo: function () {
                this.canvas.redo()
            },
            _onHistoryChange: function (canUndo, canRedo) {
                _canUndo = canUndo;
                _canRedo = canRedo;
                if (AV.controlsWidgetInstance) {
                    AV.controlsWidgetInstance.layoutNotify(AV.launchData["openType"], "updateUndoRedo", [canUndo, canRedo])
                }
            },
            setCheckpoint: function (checkpoint) {
                this.canvas.setCheckpoint(checkpoint)
            },
            isACheckpoint: function (idx) {
                return this.canvas.isACheckpoint(idx)
            },
            undoToCheckpoint: function () {
                this.canvas.undoToCheckpoint()
            },
            redoToCheckpoint: function () {
                return this.canvas.redoToCheckpoint()
            },
            truncateActionList: function () {
                this.canvas.truncateActionList()
            },
            _onError: function (type, args) {
                if (type === "BAD_IMAGE") {
                    AV.paintWidgetCloser(true);
                    if (AV.launchData["url"]) {
                        type = "BAD_URL"
                    }
                }
                AV.errorNotify(type, args)
            },
            init: function (o) {
                function setupBridge() {
                    if (!o) {
                        return new FlashBridge
                    }
                    if (o["plugins"]) {
                        var plugins = [];
                        var chunks = o.plugins;
                        for (var i = 0; i < chunks.length; ++i) {
                            var pl = AV.FlashAPI.mapToFlashToolName(chunks[i]);
                            var defaults = AV.toolDefaults[chunks[i]];
                            if (defaults && defaults.files) {
                                plugins.push({
                                    id: pl,
                                    presets: defaults.presetsFlash,
                                    files: defaults.files
                                })
                            }
                        }
                        if (plugins.length > 0) {
                            o.getPlugins = function () {
                                return plugins
                            }
                        }
                        delete o["plugins"]
                    }
                    var fn = function () {};
                    fn.prototype = new FlashBridge;
                    fn.prototype.constructor = FlashBridge;
                    for (var k in o) {
                        fn.prototype[k] = o[k]
                    }
                    return new fn
                }
                AV.FlashAPI.activate(setupBridge());
                pibeca.init()
            },
            pibeca: pibeca
        }
    }()
}();
(function (exports, window, document) {
    exports["AV"] = exports["AV"] || {};
    var AV = exports["AV"];
    AV.ImageSizeTracker = function (actions) {
        var api = this;
        api.setImageScaledIndicator = function () {
            AV.controlsWidgetInstance.layoutNotify(AV.launchData["openType"], "updateImageScaledIndicator")
        };
        api.setOrigSize = function (config, imageSize, canvasSize) {
            var w, h;
            if (config.hiresWidth && config.hiresHeight) {
                w = parseInt(config.hiresWidth, 10);
                h = parseInt(config.hiresHeight, 10)
            } else if (config.hiresUrl) {
                w = imageSize.width;
                h = imageSize.height
            } else if (config.displayImageSize) {
                w = canvasSize.width;
                h = canvasSize.height
            } else {
                return null
            }
            AV.paintWidgetInstance.actions.setOrigSize(w, h);
            api.setImageScaledIndicator();
            return {
                width: w,
                height: h
            }
        };
        api.isDisplayingImageSize = function (config) {
            return config.hiresWidth || config.hiresHeight || config.displayImageSize
        };
        api.isUsingHiResDimensions = function (config) {
            return config.hiresWidth || config.hiresHeight || config.displayImageSize && config.hiresUrl
        }
    };
    return exports
})(this, typeof window !== "undefined" ? window : {}, typeof document !== "undefined" ? document : {});
(function (exports, window, document) {
    exports["AV"] = exports["AV"] || {};
    var AV = exports["AV"];
    var mediator = AV.Events;
    AV.ToolManager = function (controls) {
        var activeTool = null;
        var _toolExists = function (toolName) {
            var i, len, activeTools = controls.activeTools,
                toolAvailable = false;
            if (activeTools) {
                len = activeTools.length;
                for (i = 0; i < len; i++) {
                    if (activeTools[i] === toolName) {
                        toolAvailable = true;
                        break
                    }
                }
            }
            if (toolName === "forcecrop" && AV.launchData.forceCropPreset) {
                return true
            }
            if (!toolAvailable) {
                AV.errorNotify("UNSUPPORTED_TOOL", [toolName])
            }
            return toolAvailable
        };
        var _notify = function (name, notification, args) {
            return controls.objectNotify("tool", name, notification, args)
        };
        var _showPanel = function (name) {
            if (name != null) {
                avpw$(".avpw_controlpanel").each(function () {
                    avpw$(this).hide()
                });
                avpw$("#avpw_controlpanel_" + name).show()
            }
        };
        var _setPanelMode = function () {
            var transitioning;
            var next = function (mode) {
                _notify(activeTool, "panelWillClose");
                _notify(mode, "panelWillOpen");
                mediator.trigger("canvas:activate", controls.panelMode2WidgetMode(mode));
                _showPanel(mode);
                _notify(mode, "resetUI");
                window.setTimeout(function (oldMode) {
                    return function () {
                        _notify(oldMode, "panelDidClose");
                        activeTool = mode;
                        _notify(mode, "panelDidOpen");
                        transitioning = false
                    }
                }(activeTool), 200);
                activeTool = mode;
                controls.layoutNotify(AV.launchData["openType"], "disableZoomMode")
            };
            return function (mode) {
                if (!transitioning) {
                    transitioning = true;
                    next(mode)
                }
            }
        }();
        var panelSwitcher = function (mode) {
            if (controls.paintWidget && controls.paintWidget.busy) {
                return
            }
            controls.layoutNotify(AV.launchData["openType"], "showView", ["editpanel"]);
            _setPanelMode(mode);
            AV.controlsWidgetInstance.onEggWaitThrobber.stop();
            if (AV.launchData["openType"] == "mobile") {
                var header;
                var eggElement = document.getElementById("avpw_main_" + mode);
                if (eggElement) {
                    header = eggElement.getAttribute("data-header");
                    if (header) {
                        document.getElementById("avpw_control_toolname").innerHTML = header
                    }
                }
            }
            AV.usageTracker.addUsage(mode)
        };
        var init = function () {
            mediator.on("tool:open", openToolByName);
            mediator.on("tool:close", closeAllTools);
            mediator.on("tool:init", initTool);
            mediator.on("tool:shutdown", shutdownTool);
            mediator.on("tool:commit", commitChangesFromActiveTool);
            mediator.on("tool:cancel", cancelChangesFromActiveTool);
            mediator.on("tool:undo", undoActions);
            mediator.on("tool:redo", redoActions)
        };
        var shutdown = function () {
            mediator.off("tool:open", openToolByName);
            mediator.off("tool:close", closeAllTools);
            mediator.off("tool:init", initTool);
            mediator.off("tool:shutdown", shutdownTool);
            mediator.off("tool:commit", commitChangesFromActiveTool);
            mediator.off("tool:cancel", cancelChangesFromActiveTool);
            mediator.off("tool:undo", undoActions);
            mediator.off("tool:redo", redoActions)
        };
        var closeAllTools = function () {
            controls.layoutNotify(AV.launchData["openType"], "showView", ["main"]);
            _setPanelMode(null)
        };
        var openToolByName = function (toolName, eggElement) {
            toolName = AV.publicName2PanelMode(toolName);
            if (_toolExists(toolName) || AV.launchData.forceCropPreset) {
                if (controls.paintWidget && !controls.paintWidget.moduleLoaded(toolName, panelSwitcher)) {
                    if (eggElement) {
                        controls.onEggWaitThrobber.stop();
                        controls.onEggWaitThrobber.spin(avpw$(eggElement).children(".avpw_icon_waiter")[0])
                    }
                }
            }
            mediator.trigger("usage:tool", toolName, "opened");
            mediator.trigger("usage:firstclick", toolName)
        };
        var initTool = function (toolName) {
            _notify(toolName, "init", [controls])
        };
        var commitChangesFromActiveTool = function () {
            var commitInfo, toolToApply = activeTool;
            if (toolToApply) {
                commitInfo = _notify(activeTool, "commit");
                if (commitInfo !== false) {
                    mediator.trigger("usage:tool", toolToApply, "applied", commitInfo !== true ? commitInfo : "");
                    mediator.trigger("tool:commitDone")
                }
            }
        };
        var cancelChangesFromActiveTool = function () {
            _notify(activeTool, "cancel");
            mediator.trigger("usage:tool", activeTool, "canceled")
        };
        var shutdownTool = function (toolName) {
            _notify(toolName, "shutdown")
        };
        var undo = function () {
            if (controls.paintWidget.busy) {
                return false
            }
            if (_notify(activeTool, "onUndo") === false) {
                return false
            }
            controls.paintWidget.actions.undo();
            _notify(activeTool, "onUndoComplete");
            return false
        };
        var undoToCheckpoint = function () {
            if (controls.paintWidget.busy) {
                return false
            }
            if (_notify(activeTool, "onUndo", [{
                global: true
            }]) === false) {
                return false
            }
            controls.paintWidget.actions.undoToCheckpoint();
            _notify(activeTool, "onUndoComplete", [{
                global: true
            }]);
            return false
        };
        var redo = function () {
            if (controls.paintWidget.busy) {
                return false
            }
            if (_notify(activeTool, "onRedo") === false) {
                return false
            }
            controls.paintWidget.actions.redo();
            _notify(activeTool, "onRedoComplete");
            return false
        };
        var redoToCheckpoint = function () {
            if (controls.paintWidget.busy) {
                return false
            }
            if (_notify(activeTool, "onRedo", [{
                global: true
            }]) === false) {
                return false
            }
            var success = controls.paintWidget.actions.redoToCheckpoint();
            if (success) {
                _notify(activeTool, "onRedoComplete", [{
                    global: true
                }])
            }
            return success
        };
        var undoActions = function () {
            mediator.trigger("usage:tool", "undo", "applied", activeTool || "");
            if (controls.paintWidget.actions.isACheckpoint()) {
                undoToCheckpoint()
            } else {
                undo()
            }
        };
        var redoActions = function () {
            mediator.trigger("usage:tool", "redo", "applied", activeTool || "");
            if (!redoToCheckpoint()) {
                redo()
            }
        };
        var api = this;
        api.init = init;
        api.shutdown = shutdown;
        api.notify = _notify;
        api.getActiveTool = function () {
            return activeTool
        };
        init();
        return api
    };
    return exports
})(this, typeof window !== "undefined" ? window : {}, typeof document !== "undefined" ? document : {});
(function (AV, window, document) {
    AV.AssetManager = function (isPremiumPartner, inAppPurchaseAllowed) {
        "use strict";
        var types = {
            EFFECT: "effect",
            STICKER: "sticker",
            IMAGEBORDER: "imageborder",
            PERMISSION: "permission",
            FONTPACK: "fontpack"
        };
        var _callbacks = {};
        var _assets;
        var _buildFrame = function () {
            if (!window.avpw_purchase_frame) {
                avpw$("#avpw_messaging").append(AV.template[AV.launchData.layout].inAppPurchaseFrame({
                    src: AV.build["inAppPurchaseFrameURL"]
                }))
            }
        };
        var _fixAssetURL = function (asset) {
            var url = asset.resourceUrl;
            if (url) {
                if (url.indexOf("http") === -1) {
                    url = AV.build["feather_baseURL"] + url
                }
                asset.resourceUrl = url
            }
        };
        var _updateAssetsWithPurchaseData = function (data) {
            for (var i = 0; i < _assets.length; i++) {
                for (var j = 0; j < data.length; j++) {
                    if (data[j].assetId === _assets[i].assetId) {
                        _assets[i].purchased = true;
                        AV.util.extend(_assets[i], data[j]);
                        _fixAssetURL(_assets[i])
                    }
                }
            }
        };
        var _getAssetsOfType = function (type) {
            var assets = [];
            if (type) {
                type = types[type];
                for (var i = 0; i < _assets.length; i++) {
                    if (_assets[i].assetType === type) {
                        assets.push(_assets[i])
                    }
                }
            } else {
                assets = _assets.slice(0)
            }
            return assets
        };
        var _getPremiumPartnerAssets = function (type, callback) {
            if (!_assets) {
                if (!_callbacks["getPartnerAssets"]) {
                    _callbacks["getPartnerAssets"] = [];
                    api.authenticate()
                }
                _callbacks["getPartnerAssets"].push(function (data) {
                    if (data && data.assets) {
                        _assets = data.assets
                    } else {
                        AV.errorNotify("ERROR_AUTHENTICATING");
                        _getLocalDefaultAssets()
                    }
                    AV.util.nextFrame(function () {
                        if (_assets) {
                            for (var i = 0; i < _assets.length; i++) {
                                _fixAssetURL(_assets[i])
                            }
                            if (callback) callback.apply(this, [_getAssetsOfType(type)])
                        }
                    })
                })
            } else {
                if (callback) callback.apply(this, [_getAssetsOfType(type)])
            }
        };
        var _getAssetsFromPurchaseFrame = function (type, callback) {
            window.setTimeout(function () {
                try {
                    window.avpw_purchase_frame.postMessage("getAssets", "*");
                    _callbacks["getAssets"] = callback;
                    return true
                } catch (e) {
                    return false
                }
            }, 2e3)
        };
        var _getUserPurchasedAssets = function (type, callback) {
            if (!_assets) {
                _getAssetsFromPurchaseFrame(type, function (assets) {
                    _assets = assets;
                    for (var i = 0; i < _assets.length; i++) {
                        _fixAssetURL(_assets[i])
                    }
                    _getAssets(type, callback)
                });
                return false
            }
            try {
                window.avpw_purchase_frame.postMessage("getPurchasedAssets", "*");
                _callbacks["getPurchasedAssets"] = function (data) {
                    _updateAssetsWithPurchaseData(data);
                    if (callback) callback.apply(this, [_getAssetsOfType(type)])
                };
                return true
            } catch (e) {
                return false
            }
        };
        var _getLocalDefaultAssets = function (type, callback) {
            _assets = [{
                needsPurchase: false,
                assetId: "default_effects",
                assetType: "effect",
                displayName: "Default",
                resourceUrl: "js/proclist_default_effects.js"
            }, {
                needsPurchase: false,
                assetId: "original_effects",
                assetType: "effect",
                displayName: "Original",
                resourceUrl: "js/proclist_original_effects.js"
            }, {
                needsPurchase: false,
                assetId: "original_stickers",
                assetType: "sticker",
                displayName: "Original",
                resourceUrl: "js/stickers_original_stickers.js"
            }, {
                needsPurchase: false,
                assetId: "borders",
                assetType: "imageborder",
                displayName: "Default Image Borders",
                resourceUrl: "js/borders_original.js"
            }];
            if (callback) {
                AV.util.nextFrame(function () {
                    for (var i = 0; i < _assets.length; i++) {
                        _fixAssetURL(_assets[i])
                    }
                    callback.apply(this, [_getAssetsOfType(type)])
                })
            }
            return true
        };
        var parseMessageObject = function (msgObj) {
            var i, len, callbackObject;
            if (msgObj.messageName) {
                callbackObject = _callbacks[msgObj.messageName];
                if (callbackObject) {
                    if (typeof callbackObject === "function") {
                        callbackObject.apply(this, [msgObj.data])
                    } else {
                        len = callbackObject.length;
                        for (i = 0; i < len; i++) {
                            callbackObject[i].apply(this, [msgObj.data])
                        }
                    }
                    callbackObject = null
                }
            }
        };
        var _getAssets = isPremiumPartner ? _getPremiumPartnerAssets : inAppPurchaseAllowed ? _getUserPurchasedAssets : _getLocalDefaultAssets;
        var api = this;
        api.getAssets = _getAssets;
        api.getById = function (id) {
            for (var i = 0; i < _assets.length; i++) {
                if (_assets[i].assetId === id) {
                    return _assets[i]
                }
            }
        };
        api.showAssetPurchaseView = function (id, purchaseCallback) {
            var message = {
                messageName: "showAssetPurchaseView",
                assetId: id
            };
            message = AV.JSON.stringify(message);
            try {
                window.avpw_purchase_frame.postMessage(message, "*");
                _callbacks["showAssetPurchaseView"] = function () {
                    api.showAssetPurchasePopup(id, purchaseCallback)
                };
                return true
            } catch (e) {
                return false
            }
        };
        api.showAssetPurchasePopup = function (id, purchaseCallback) {
            avpw$("#avpw_purchase_frame").show();
            AV.controlsWidgetInstance.messager.show("avpw_purchase_pack", true);
            avpw$("#avpw_purchase_pack_close").bind("click", api.hideAssetPurchasePopup);
            _callbacks["getPurchasedAssets"] = function (data) {
                _updateAssetsWithPurchaseData(data);
                var assetPurchased = api.getById(id);
                if (purchaseCallback && typeof purchaseCallback === "function" && assetPurchased) {
                    purchaseCallback.apply(this, [assetPurchased])
                }
                api.hideAssetPurchasePopup()
            }
        };
        api.hideAssetPurchasePopup = function () {
            _callbacks["getPurchasedAssets"] = null;
            avpw$("#avpw_purchase_frame").hide();
            AV.controlsWidgetInstance.messager.hide("avpw_purchase_pack");
            avpw$("#avpw_purchase_pack_close").unbind("click", api.hideAssetPurchasePopup)
        };
        api.authenticate = function () {
            var prepareAuthMessage = function (data) {
                var messageObject = {
                    messageName: "getPartnerAssets",
                    data: data
                };
                parseMessageObject(messageObject)
            };
            return function () {
                return AV.controlsWidgetInstance.serverMessaging.sendMessage({
                    id: "avpw_auth_form",
                    action: AV.build["partnerAssetURL"],
                    method: "POST",
                    dataType: "json",
                    announcer: AV.build["asyncFeatherTargetAnnounce"],
                    origin: AV.build["asyncImgrecvBase"],
                    keyValues: {
                        apikey: AV.launchData.apiKey,
                        timestamp: AV.launchData.timestamp,
                        signature: AV.launchData.signature,
                        salt: AV.launchData.salt,
                        encryptionmethod: AV.launchData.encryptionMethod
                    },
                    callback: prepareAuthMessage
                })
            }
        }();
        api.types = types;
        if (inAppPurchaseAllowed) {
            _buildFrame()
        }
        return api
    }
})(window["AV"] || (window["AV"] = {}), window, document);
(function (AV, window, document) {
    AV.ServerMessaging = function (o) {
        var formPostMessageQueue = [];
        var handleFormPostResponse = function (data, originDomain) {
            var transportForm, targetId;
            var messageTrusted = true;
            var messageObj = formPostMessageQueue.shift();
            if (messageObj) {
                if (originDomain && messageObj.origin) {
                    messageTrusted = originDomain === AV.util.getDomain(messageObj.origin)
                }
                if (messageObj.id) {
                    transportForm = avpw$("#" + messageObj.id);
                    targetId = transportForm.attr("target");
                    avpw$("#" + targetId).unbind("load");
                    avpw$("#" + messageObj.id + "_target_holder").empty();
                    transportForm.remove()
                }
                if (messageTrusted && messageObj.callback) {
                    if (messageObj.dataType && messageObj.dataType === "json") {
                        if (typeof data === "string") {
                            try {
                                data = AV.JSON.parse(data)
                            } catch (error) {}
                        }
                    }
                    messageObj.callback.call(this, data)
                }
            }
            if (formPostMessageQueue.length > 0) {
                sendFormPostMessageFromQueue()
            }
        };
        var simpleXHRPost = function (url, method, dataObj, dataType, callback) {
            return avpw$.ajax({
                url: url,
                type: method,
                data: dataObj,
                dataType: dataType,
                error: function () {
                    AV.errorNotify("ERROR_SAVING", [AV.build["imgrecvServer"]])
                },
                success: callback
            })
        };
        var buildForm = function (id, action, target, method, keyValues) {
            var form = avpw$("<form></form>").attr({
                id: id,
                action: action,
                target: target,
                method: method || "POST"
            }).css({
                display: "none"
            });
            var formContents = document.createDocumentFragment();
            for (var key in keyValues) {
                if (keyValues.hasOwnProperty(key)) {
                    formContents.appendChild(avpw$("<input></input>").attr({
                        name: key,
                        value: keyValues[key],
                        type: "hidden"
                    })[0])
                }
            }
            form.html(formContents);
            form.appendTo("#avpw_holder");
            return form
        };
        var buildHiddenFrame = function (id, name, source) {
            if (!source) {
                source = AV.build["feather_baseURL"] + "blank.html"
            }
            if (!name) {
                name = id
            }
            return ['<iframe width="1" height="1" ', 'style="position:absolute;left:-9999px;" ', 'id="' + id + '" name="' + name + '" src="' + source + '">', "</iframe>"].join("")
        };
        var buildNewTargetFrame = function (id, announcer, callback) {
            if (!id) {
                return null
            }
            var frameHolderId = id + "_target_holder";
            var randId = Math.floor(Math.random() * 4294967295).toString(16);
            var iframename = "avpw_form_target_" + randId;
            var targetHolder = avpw$("#" + frameHolderId);
            if (targetHolder && targetHolder.length) {} else {
                targetHolder = avpw$('<div id="' + frameHolderId + '"></div>').css({
                    position: "absolute",
                    top: 0,
                    left: 0
                }).appendTo("#avpw_holder")
            }
            targetHolder.html(buildHiddenFrame(iframename));
            if (announcer) {
                avpw$("#" + iframename).load(function () {
                    saveCallback_form(iframename, id, announcer)
                })
            } else {
                avpw$("#" + iframename).load(callback)
            }
            return iframename
        };
        var simpleFormPost = function (id, action, method, origin, keyValues, announcer, callback) {
            var targetFrameName = buildNewTargetFrame(id, announcer, callback);
            action += "?responsecontenttypeheader=" + escape("text/html");
            var form = buildForm(id, action, targetFrameName, method, keyValues);
            form.submit();
            return form
        };
        var saveCallback_form = function (sourceFrameName, id, announcer) {
            var announcerWindowName = id + "_announcer";
            var announcerFrame;
            if (window.postMessage) {
                if (window[announcerWindowName]) {
                    window[announcerWindowName].postMessage("avpw_load:" + sourceFrameName, "*")
                } else {
                    announcerFrame = avpw$(buildHiddenFrame(announcerWindowName, announcerWindowName, announcer));
                    announcerFrame.load(function () {
                        AV.util.nextFrame(function () {
                            window[announcerWindowName].postMessage("avpw_load:" + sourceFrameName, "*")
                        })
                    });
                    avpw$("#avpw_holder").append(announcerFrame)
                }
            } else {
                var cleanUpFrameHack = function () {
                    avpw$(observerFrameElement).unbind().remove()
                };
                var observerFrameElement;
                var observerId = id + "_observer";
                var observerName = observerId;
                var state = 0;
                var observerFrameLoad = function () {
                    var observerMessageAsWindowName;
                    try {
                        if (observerFrameElement.contentWindow.location == "about:blank") {
                            return
                        }
                    } catch (e) {}
                    if (state === 2) {
                        observerMessageAsWindowName = observerFrameElement.contentWindow.name;
                        if (observerMessageAsWindowName) {
                            state = 3;
                            if (observerMessageAsWindowName !== observerName && observerMessageAsWindowName.substr && observerMessageAsWindowName.substr(0, 5) == "avpw:") {
                                observerMessageAsWindowName = observerMessageAsWindowName.substr(5);
                                handleFormPostResponse(observerMessageAsWindowName)
                            } else {
                                AV.errorNotify("ERROR_SAVING", [AV.build["imgrecvServer"]]);
                                handleFormPostResponse()
                            }
                            cleanUpFrameHack()
                        }
                    }
                    if (state === 1) {
                        state = 2;
                        observerFrameElement.contentWindow.location = ""
                    }
                    if (!state) {
                        state = 1
                    }
                };
                observerFrameElement = avpw$(buildHiddenFrame(observerId, observerName, announcer + "#" + sourceFrameName))[0];
                avpw$(observerFrameElement).load(observerFrameLoad);
                avpw$(observerFrameElement).appendTo("#avpw_holder")
            }
        };
        var postMessageHandler = function (ev) {
            var data = ev.data;
            var remoteorigin = AV.util.getDomain(ev.origin);
            if (data.substr && data.substr(0, 5) == "avpw:") {
                data = data.substr(5);
                handleFormPostResponse(data, remoteorigin)
            }
        };
        var sendFormPostMessageFromQueue = function () {
            var opts = formPostMessageQueue[0];
            if (opts) {
                simpleFormPost(opts.id, opts.action, opts.method, opts.origin, opts.keyValues, opts.announcer)
            }
        };
        var enqueueFormPost = function (opts) {
            if (opts.announcer) {
                formPostMessageQueue.push(opts);
                if (formPostMessageQueue.length === 1) {
                    sendFormPostMessageFromQueue()
                }
            } else {
                simpleFormPost(opts.id, opts.action, opts.method, opts.origin, opts.keyValues, opts.announcer, opts.callback)
            }
        };
        var sendMessage = function (opts) {
            var transport = opts.transport || "xhr";
            var canPostXHR;
            if (transport === "xhr" && avpw$.support.cors && (!AV.firefox || AV.firefox >= 4)) {
                canPostXHR = simpleXHRPost(opts.action, opts.method, opts.keyValues, opts.dataType, opts.callback);
                if (!canPostXHR) {
                    enqueueFormPost(opts)
                }
            } else {
                enqueueFormPost(opts)
            }
        };
        var init = function () {
            if (window.addEventListener) {
                window.addEventListener("message", postMessageHandler, false)
            } else if (window.attachEvent) {
                window.attachEvent("onmessage", postMessageHandler)
            }
        };
        var api = this;
        api.shutdown = function () {
            if (window.removeEventListener) {
                window.removeEventListener("message", postMessageHandler, false)
            } else if (window.detachEvent) {
                window.detachEvent("onmessage", postMessageHandler)
            }
            formPostMessageQueue = []
        };
        api.sendMessage = sendMessage;
        init();
        return api
    }
})(window["AV"] || (window["AV"] = {}), window, document);
(function (exports, window, document) {
    exports["AV"] = exports["AV"] || {};
    var AV = exports["AV"];
    var mediator = AV.Events;
    AV.usageTracker = function () {
        var uuid = null;
        var usage = {};
        var usageCount = 0;
        var pagehits = [];
        var pagecount = 0;
        var prevpagenum;
        var prevpagehit = -1;
        var dataver = 1;
        var googleTrackerReady = false;
        var api = {};
        var onUnload = function () {
            if (AV.controlsWidgetInstance) {
                api.submit("close")
            }
        };
        var setupGoogleTracker = function () {
            window["_gaq"] = window["_gaq"] || [];
            if (typeof _gat === "undefined") {
                var ga = document.createElement("script");
                ga.type = "text/javascript";
                ga.async = true;
                ga.src = ("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(ga, s)
            }
            if (!googleTrackerReady) {
                _gaq.push(["Feather._setAccount", AV.build["googleTracker"]]);
                _gaq.push(["Feather._setCustomVar", 1, "apikey", AV.launchData.apiKey]);
                _gaq.push(["Feather._setCustomVar", 2, "featherversion", AV.build["version"]]);
                _gaq.push(["Feather._setCustomVar", 3, "sessionid", this.getUUID()]);
                _gaq.push(["Feather._setCustomVar", 4, "language", AV.launchData.language]);
                _gaq.push(["Feather._setCustomVar", 5, "apiversion", AV.launchData.apiVersion + ""]);
                googleTrackerReady = true
            }
        };
        var googleToolEvent = function (tool, action, outcome) {
            _gaq.push(["Feather._trackEvent", "tool", tool + ":" + action, outcome ? outcome + "" : ""])
        };
        var googleInteractEvent = function (tool, action, outcome) {
            _gaq.push(["Feather._trackEvent", "interaction", tool + ":" + action, outcome ? outcome + "" : ""])
        };
        var recordFirstClick = function (toolName) {
            api.submit("firstclick", toolName);
            mediator.off("usage:firstclick")
        };
        api.setup = function () {
            avpw$(window).bind("unload", onUnload);
            mediator.on("usage:submit", api.submit, api);
            mediator.on("usage:tool", googleToolEvent, api);
            mediator.on("usage:firstclick", recordFirstClick, api);
            mediator.on("usage:interact", googleInteractEvent)
        };
        api.shutdown = function () {
            avpw$(window).unbind("unload", onUnload);
            mediator.off("usage:submit", api.submit);
            mediator.off("usage:tool", googleToolEvent);
            mediator.off("usage:firstclick", recordFirstClick);
            mediator.off("usage:interact", googleInteractEvent)
        };
        api.clear = function () {
            uuid = null;
            usage = {};
            usageCount = 0;
            pagehits = [];
            pagecount = 0;
            prevpagehit = -1
        };
        api.getUUID = function () {
            if (uuid) {
                return uuid
            }
            return uuid = Math.floor(Math.random() * 4294967295).toString(16) + Math.floor(Math.random() * 4294967295).toString(16)
        };
        api.addUsage = function (type, count) {
            if (!count) {
                count = 1
            }
            if (usage[type] === undefined) {
                usage[type] = count
            } else {
                usage[type] += count
            }
            usageCount += count
        };
        api.setPageCount = function (count) {
            var i;
            pagecount = count;
            pagehits = new Array(count);
            for (i = 0; i < count; i++) {
                pagehits[i] = 0
            }
        };
        api.addPageHit = function (pagenum) {
            if (pagenum !== prevpagenum) {
                pagehits[pagenum]++
            }
            prevpagenum = pagenum
        };
        api.submit = function (type, metadata) {
            var trackFormData = null;
            var trackFormJSON = "";
            var targetFrameName;
            var trackForm;
            setupGoogleTracker.call(this);
            if (type === "launch") {
                _gaq.push(["Feather._trackPageview"])
            } else {
                _gaq.push(["Feather._trackEvent", "submit", type, metadata])
            }
        };
        return api
    }();
    AV.getActiveTools = function (tools) {
        var allSupportedTools = AV.featherUseFlash ? AV.flashSupportedTools : AV.defaultTools;
        var activeToolsAll = tools;
        if (!activeToolsAll || activeToolsAll === "all" || activeToolsAll === "All" || activeToolsAll === "ALL" || activeToolsAll === "") {
            activeToolsAll = allSupportedTools
        }
        if (typeof activeToolsAll === "string") {
            activeToolsAll = tools.split(",")
        }
        var activeTools = [];
        var name;
        var supportedTools = {};
        var i;
        for (i = 0; i < allSupportedTools.length; i++) {
            name = allSupportedTools[i];
            supportedTools[name] = true
        }
        for (i = 0; i < activeToolsAll.length; i++) {
            if (AV.launchData.forceCropPreset) {
                if (activeToolsAll[i] === "resize" || activeToolsAll[i] === "orientation" || activeToolsAll[i] === "crop") continue
            }
            name = AV.publicName2PanelMode(activeToolsAll[i]);
            if (name in supportedTools) {
                activeTools.push(name)
            }
        }
        return activeTools
    };
    AV.paintWidgetGetPopupEmbedDiv = function (imgElement) {
        var e = avpw$("#avpw_canvas_embed_popup");
        if (imgElement) {
            var $imgElement = avpw$(imgElement);
            var display;
            var i, n;
            var styleProps = ["top", "left", "bottom", "right", "margin-top", "margin-right", "margin-bottom", "margin-left", "border-top", "border-right", "border-bottom", "border-left", "padding-top", "padding-right", "padding-bottom", "padding-left"];
            var styleMap = {
                position: "relative"
            };
            for (i = 0; i < styleProps.length; i++) {
                n = styleProps[i];
                styleMap[n] = $imgElement.css(n)
            }
            display = avpw$(imgElement).css("display");
            if (display == "" || display == "inline") {
                display = "inline-block"
            }
            styleMap["display"] = display;
            if (e.length == 0) {
                e = document.createElement("div");
                e.id = "avpw_canvas_embed_popup"
            }
            avpw$(e).hide().css(styleMap).insertBefore(imgElement)
        }
        return e
    };
    AV.paintWidgetLauncher = function (paintImgIdElem, imgURL) {
        if (AV.paintWidgetInstance) {
            return
        }
        AV.usageTracker.clear();
        if (AV.featherUseFlash) {
            return AV.paintWidgetLauncher_Flash(paintImgIdElem, imgURL)
        } else {
            return AV.paintWidgetLauncher_HTML(paintImgIdElem, imgURL)
        }
    };
    AV.paintWidgetLauncher_Flash = function (paintImgIdElem, imgURL) {
        var delay = AV.launchData.launchDelay;
        var imgElement = AV.util.getImageElem(paintImgIdElem);
        var imgElementSrc = imgElement.src;
        var imgElement2;
        var embedElement;
        var dims, imageWidth, imageHeight, max;
        var i, name;
        var paintWidgetJSFilename;
        var activeTools;
        var assetManager;
        activeTools = AV.getActiveTools(AV.launchData.tools);
        assetManager = new AV.AssetManager(AV.launchData.isPremiumPartner, AV.launchData.allowInAppPurchase);
        AV.controlsWidgetInstance = new AV.ControlsWidget(null, paintImgIdElem, activeTools, assetManager, new AV.ServerMessaging);
        if (imgURL) {
            AV.controlsWidgetInstance.origURL = imgURL
        } else {
            AV.controlsWidgetInstance.origURL = avpw$(imgElement).attr("src")
        }
        avpw$(".avpw_isa_previewcanvas").hide();
        embedElement = AV.controlsWidgetInstance.layoutNotify(AV.launchData["openType"], "getEmbedElement", [imgElement]);
        avpw$(embedElement).show();
        paintWidgetJSFilename = "js/featherpaint_flash.js";
        imgElement2 = document.createElement("img");
        avpw$(imgElement2).css({
            display: "block",
            visibility: "hidden",
            position: "absolute"
        }).attr("src", imgURL ? imgURL : imgElement.src);

        function imgLoadComplete() {
            avpw$(imgElement2).unbind("load", imgLoadComplete);
            if (AV.msie && AV.msie == 7) {
                avpw$("#avpw_controls").css("visibility", "hidden");
                avpw$("#avpw_controls").show()
            }
            AV.controlsWidgetInstance.layoutNotify(AV.launchData["openType"], "placeControls_Flash", [AV.util.getApiVersion(AV.launchData) > 1 ? AV.launchData.appendTo : undefined]);
            AV.controlsWidgetInstance.layoutNotify(AV.launchData["openType"], "enableControls");
            dims = AV.controlsWidgetInstance.layoutNotify(AV.launchData["openType"], "getScaledImageDims_Flash", [imgElement2]);
            imageWidth = dims.width;
            imageHeight = dims.height;
            max = imageWidth > imageHeight ? imageWidth : imageHeight;
            AV.launchData["maxEditSize"] = max;
            AV.paintWidgetInstance = new AV.PaintWidget(imageWidth, imageHeight, new AV.Actions, new AV.ModeManager, new AV.FilterManager, new AV.OverlayRegistry, new AV.ImageBorderManager);
            AV.paintWidgetInstance.setOrigSize(imageWidth, imageHeight);
            var holderBox = AV.template[AV.launchData.layout].flashCanvasBox({
                id: "avpw_canvas_swf_replace"
            });
            avpw$(embedElement).append(holderBox);
            AV.controlsWidgetInstance.initAllTools.call(AV.controlsWidgetInstance);
            var params = {
                initsize: dims,
                plugins: activeTools,
                action: {
                    origUrl_: imgURL ? imgURL : imgElement.src,
                    sessionID_: AV.usageTracker.getUUID(),
                    referrerUrl_: window.location.href,
                    url: AV.build["imgrecvServer"],
                    name: "file"
                }
            };
            AV.controlsWidgetInstance.layoutNotify(AV.launchData["openType"], "hideOriginalImage", [imgElement]);
            AV.util.nextFrame(function () {
                AV.controlsWidgetInstance.setupScrollPanels()
            });
            if (AV.msie && AV.msie == 7) {
                avpw$("#avpw_controls").hide();
                avpw$("#avpw_controls").css("visibility", "visible")
            }
            avpw$("#avpw_controls").fadeIn(delay);
            if (AV.launchData.noCloseButton) {
                avpw$("#avpw_control_cancel_pane").css("display", "none")
            }
            var _paintImgIdElem = paintImgIdElem;
            setTimeout(function () {
                AV.FlashAPI.init(params);
                AV.FlashAPI.startEditing(paintImgIdElem);
                AV.controlsWidgetInstance.initWithPaintWidget(AV.paintWidgetInstance);
                mediator.trigger("tool:close");
                AV.controlsWidgetInstance.loaderPhase = 1
            }, delay)
        }

        function jsLoadComplete() {
            AV.util.imgOnLoad(imgElement2, imgLoadComplete);
            avpw$(imgElement2).attr("src", imgURL ? imgURL : imgElementSrc)
        }
        if (AV.build.bundled) {
            jsLoadComplete()
        } else {
            AV.util.loadFile(AV.build["feather_baseURL"] + paintWidgetJSFilename, "js", jsLoadComplete)
        }
    };
    AV.paintWidgetLauncher_Flash_stage2 = function (imageWidth, imageHeight) {
        AV.controlsWidgetInstance.loaderPhase = 2;
        AV.controlsWidgetInstance.imageSizeTracker.setOrigSize(AV.launchData, {
            width: imageWidth,
            height: imageHeight
        }, {
            width: AV.paintWidgetInstance.width,
            height: AV.paintWidgetInstance.height
        });
        AV.controlsWidgetInstance.layoutNotify(AV.launchData["openType"], "launchStage2_Flash");
        AV.controlsWidgetInstance.showWaitThrobber(false);
        avpw$(AV.controlsWidgetInstance.onEggWaitThrobber).hide();
        mediator.trigger("usage:submit", "launch");
        AV.fireLaunchComplete()
    };
    AV.paintWidgetLauncher_HTML = function (paintImgIdElem, imgURL) {
        var delay = AV.launchData.launchDelay;
        var imgElement = AV.util.getImageElem(paintImgIdElem);
        var newimg;
        var embedElement;
        var paintWidgetJSFilename;
        var dims;
        var activeTools;
        var assetManager;
        activeTools = AV.getActiveTools(AV.launchData.tools);
        if (AV.isRelaunched && typeof imgElement["avpw_prevURL"] != "undefined") {
            imgURL = imgElement["avpw_prevURL"]
        }
        assetManager = new AV.AssetManager(AV.launchData.isPremiumPartner, AV.launchData.allowInAppPurchase);
        AV.controlsWidgetInstance = new AV.ControlsWidget(null, paintImgIdElem, activeTools, assetManager, new AV.ServerMessaging);
        if (AV.launchData.image instanceof HTMLImageElement && !imgURL) {
            imgURL = paintImgIdElem.src
        }
        if (imgURL && imgURL.indexOf("//") === 0) {
            imgURL = document.location.protocol + imgURL
        }
        if (imgURL) {
            AV.controlsWidgetInstance.origURL = imgURL
        } else {
            AV.controlsWidgetInstance.origURL = avpw$(imgElement).attr("src")
        }
        AV.controlsWidgetInstance.layoutNotify(AV.launchData["openType"], "placeControls", [AV.util.getApiVersion(AV.launchData) > 1 ? AV.launchData.appendTo : undefined]);
        AV.controlsWidgetInstance.layoutNotify(AV.launchData["openType"], "enableControls");
        AV.controlsWidgetInstance.layoutNotify(AV.launchData["openType"], "bindEvents");
        avpw$("#avpw_controls").fadeIn(delay);
        AV.util.nextFrame(function () {
            if (AV.launchData["openType"] == "mobile") {
                AV.setPageWidth(avpw$("#avpw_controls").width())
            }
            AV.controlsWidgetInstance.setupScrollPanels()
        });
        if (AV.launchData.noCloseButton) {
            avpw$("#avpw_control_cancel_pane").css("display", "none")
        }
        if (imgElement && imgElement.nodeName.toLowerCase() === "canvas") {
            AV.mockLauncher(imgElement);
            return
        }
        paintWidgetJSFilename = "js/featherpaint.js";
        embedElement = AV.controlsWidgetInstance.layoutNotify(AV.launchData["openType"], "getEmbedElement", [imgElement]);
        newimg = document.createElement("img");
        newimg.id = "avpw_temp_loading_image";
        AV.tempLoadingImageSrc = newimg.src;
        avpw$(newimg).load(function () {
            dims = AV.controlsWidgetInstance.getScaledDims(avpw$(imgElement).width(), avpw$(imgElement).height());
            newimg.width = dims.width;
            newimg.height = dims.height;
            AV.controlsWidgetInstance.layoutNotify(AV.launchData["openType"], "getScaledImageDims", [newimg]);
            avpw$(newimg).unbind();
            newimg.style.display = "block";
            avpw$(embedElement).append(newimg);
            AV.controlsWidgetInstance.showWaitThrobber(true);
            AV.controlsWidgetInstance.layoutNotify(AV.launchData["openType"], "hideOriginalImage", [imgElement]);
            avpw$(embedElement).show();
            AV.util.nextFrame(function () {
                if (AV.build.bundled) {
                    AV.paintWidgetLauncher_stage2(paintImgIdElem, imgURL)
                } else {
                    AV.util.loadFile(AV.build["feather_baseURL"] + paintWidgetJSFilename, "js", function (e) {
                        AV.paintWidgetLauncher_stage2(paintImgIdElem, imgURL)
                    })
                }
            })
        }).error(function () {
            AV.paintWidgetCloser(true);
            AV.errorNotify("BAD_IMAGE", [imgURL])
        });
        newimg.src = imgElement.src;
        return false
    };
    AV.mockLauncher = function (imgElement) {
        var embedElement = AV.controlsWidgetInstance.layoutNotify(AV.launchData["openType"], "getEmbedElement", [imgElement]);
        AV.controlsWidgetInstance.layoutNotify(AV.launchData["openType"], "getScaledImageDims", [imgElement]);
        avpw$(imgElement).detach();
        avpw$(embedElement).append(imgElement);
        avpw$(embedElement).show();
        AV.controlsWidgetInstance.showWaitThrobber(true);
        AV.util.nextFrame(function () {
            var stub = function () {};
            AV.controlsWidgetInstance.initAllTools = function () {
                for (var i in this.activeTools) {
                    var toolName = this.activeTools[i];
                    if (this.tool.hasOwnProperty(toolName)) {
                        mediator.trigger("tool:init", toolName)
                    }
                }
            };
            AV.controlsWidgetInstance.initWithPaintWidget = function (paintWidget) {
                this.paintWidget = paintWidget;
                this.initAllTools();
                this.bindControls();
                this.paintWidget.showWaitThrobber = this.showWaitThrobber.AV_bindInst(this)
            };
            AV.controlsWidgetInstance.loaderPhase = 1;
            AV.paintWidgetInstance = {
                moduleLoaded: function (tool, callback) {
                    return callback.call(this)
                },
                setMode: stub,
                setCurrentLayerByName: stub,
                shutdown: stub,
                actions: {
                    setCheckpoint: stub
                }
            };
            AV.controlsWidgetInstance.initWithPaintWidget(AV.paintWidgetInstance);
            AV.controlsWidgetInstance.showWaitThrobber(false);
            AV.controlsWidgetInstance.loaderPhase = 2;
            AV.fireLaunchComplete()
        })
    };
    AV.paintWidgetLauncher_stage2 = function (paintImgIdElem, imgURL) {
        var imgElement = AV.util.getImageElem(paintImgIdElem);
        var imgElementClean;
        var canvasDims;
        var max;
        var loadImageFromData = function (data) {
            if (!AV.controlsWidgetInstance || !AV.paintWidgetInstance) {
                return
            }
            imgElementClean = new Image;
            if (avpw$.support.cors && AV.launchData.enableCORS) {
                imgElementClean.crossOrigin = "Anonymous"
            }
            avpw$(imgElementClean).load(function (e) {
                if (!AV.controlsWidgetInstance || !AV.paintWidgetInstance) {
                    return
                }
                canvasDims = AV.controlsWidgetInstance.getScaledDims(imgElementClean.width, imgElementClean.height);
                AV.controlsWidgetInstance.imageSizeTracker.setOrigSize(AV.launchData, imgElementClean, canvasDims);
                imgElementClean.width = canvasDims.width;
                imgElementClean.height = canvasDims.height;
                AV.paintWidgetInstance.setDimensions(canvasDims.width, canvasDims.height);
                if (!AV.paintWidgetInstance.setBackground(imgElementClean)) {
                    AV.paintWidgetCloser(true);
                    AV.errorNotify("IMAGE_NOT_CLEAN", [imgURL]);
                    return false
                }
                AV.paintWidgetInstance.setOrigSize(canvasDims.width, canvasDims.height);
                if (imgElement.src !== imgURL) {
                    AV.controlsWidgetInstance.layoutNotify(AV.launchData["openType"], "scaleCanvas")
                }
                avpw$(AV.paintWidgetInstance.canvas).insertBefore("#avpw_temp_loading_image");
                $tempimage.remove();
                AV.tempLoadingImageSrc = imgURL;
                AV.controlsWidgetInstance.showWaitThrobber(false);
                AV.controlsWidgetInstance.loaderPhase = 2;
                if (AV.launchData["actionListJSON"]) {
                    AV.paintWidgetInstance.actions.importJSON(AV.launchData["actionListJSON"], AV.fireLaunchComplete)
                }
            }).attr("src", data)
        };
        canvasDims = AV.controlsWidgetInstance.getScaledDims(avpw$(imgElement).width(), avpw$(imgElement).height());
        AV.controlsWidgetInstance.loaderPhase = 1;
        AV.paintWidgetInstance = new AV.PaintWidget(canvasDims.width, canvasDims.height, new AV.Actions, new AV.ModeManager, new AV.FilterManager, new AV.OverlayRegistry, new AV.ImageBorderManager);
        AV.controlsWidgetInstance.canvasUI = new AV.PaintUI(AV.paintWidgetInstance.canvas, AV.controlsWidgetInstance.layoutNotify(AV.launchData["openType"], "getEmbedElement"));
        AV.controlsWidgetInstance.initWithPaintWidget(AV.paintWidgetInstance);
        AV.paintWidgetInstance.setOrigSize(canvasDims.width, canvasDims.height);
        AV.controlsWidgetInstance.imageSizeTracker.setOrigSize(AV.launchData, imgElement, canvasDims);
        var $tempimage = avpw$("#avpw_temp_loading_image");
        AV.controlsWidgetInstance.layoutNotify(AV.launchData["openType"], "scaleCanvas");
        if (imgURL != null) {
            if (avpw$.support.cors && AV.launchData.enableCORS && !avpw$.browser.msie) {
                loadImageFromData(imgURL)
            } else if (imgURL.indexOf("data:") === -1) {
                avpw$.ajax({
                    type: "GET",
                    dataType: "json",
                    url: AV.build["jsonp_imgserver"] + "?callback=?",
                    data: {
                        url: escape(imgURL)
                    },
                    success: function (data) {
                        loadImageFromData(data.data)
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        if (jqXHR.status === 200 && textStatus === "parsererror") {
                            if (AV.controlsWidgetInstance) {
                                AV.controlsWidgetInstance.showWaitThrobber(false);
                                AV.util.nextFrame(function () {
                                    AV.paintWidgetCloser(true);
                                    AV.errorNotify("BAD_URL", [imgURL])
                                })
                            }
                        }
                    }
                })
            } else {
                loadImageFromData(imgURL)
            }
        } else {
            if (!AV.paintWidgetInstance.setBackground(imgElement)) {
                AV.paintWidgetCloser(true);
                if (AV.launchData.enableCORS && avpw$.support.cors) AV.errorNotify("ERROR_BAD_IMAGE_WITHOUT_CORS");
                else AV.errorNotify("IMAGE_NOT_CLEAN", [imgURL]);
                return false
            }
            avpw$("#avpw_controls").insertAfter(AV.paintWidgetInstance.canvas);
            avpw$(AV.paintWidgetInstance.canvas).insertBefore($tempimage);
            $tempimage.remove();
            AV.tempLoadingImageSrc = imgElement.src;
            AV.controlsWidgetInstance.showWaitThrobber(false);
            AV.controlsWidgetInstance.loaderPhase = 2;
            if (AV.launchData["actionListJSON"]) {
                AV.paintWidgetInstance.actions.importJSON(AV.launchData["actionListJSON"], AV.fireLaunchComplete)
            }
        }
        mediator.trigger("usage:submit", "launch");
        if (!AV.launchData["actionListJSON"]) {
            AV.fireLaunchComplete()
        }
        return false
    };
    AV.fireLaunchComplete = function () {
        var initTool = AV.launchData.initTool;
        if (initTool) {
            AV.util.nextFrame(function () {
                mediator.trigger("tool:open", initTool)
            });
            AV.paintWidgetInstance.moduleLoaded(initTool, function (toolName) {
                AV.util.nextFrame(function () {
                    avpw$("#avpw_holder").removeClass("avpw_init_hide")
                })
            })
        }
        if (typeof AV.launchData.onReady === "function") {
            AV.launchData.onReady()
        }
    };
    AV.paintWidgetShutdown = function () {
        var embedElement;
        mediator.trigger("usage:submit", "close");
        if (AV.paintWidgetInstance) {
            AV.paintWidgetInstance.shutdown()
        }
        if (AV.controlsWidgetInstance) {
            if (AV.controlsWidgetInstance.serverMessaging) {
                AV.controlsWidgetInstance.serverMessaging.shutdown();
                AV.controlsWidgetInstance.serverMessaging = null
            }
            AV.controlsWidgetInstance.shutdown()
        }
        if (AV.featherUseFlash) {
            AV.FlashAPI.close()
        }
        avpw$("#avpw_controls").hide();
        AV.controlsWidgetInstance.layoutNotify(AV.launchData["openType"], "onShutdown");
        if (typeof AV.launchData.onClose === "function") {
            AV.launchData.onClose(AV.paintWidgetInstance.dirty)
        }
        AV.paintWidgetInstance = null;
        AV.controlsWidgetInstance = null;
        AV.tempLoadingImageSrc = null
    };
    AV.paintWidgetCloser = function (instant) {
        var delay = AV.launchData.closeDelay;
        AV.controlsWidgetInstance.layoutNotify(AV.launchData["openType"], "onClose", [instant]);
        if (instant || delay === 0) {
            avpw$("#avpw_controls").hide();
            AV.paintWidgetShutdown()
        } else {
            avpw$("#avpw_controls").fadeOut(delay, function () {
                if (AV.paintWidgetInstance) {
                    AV.paintWidgetShutdown()
                }
            })
        }
    };
    AV.controlsWidget_saveResponder = function (callback, url, hiresurl) {
        var showConfirmation;
        if (typeof callback === "function") {
            showConfirmation = callback.apply(AV.launchData, [AV.util.getImageId(AV.controlsWidgetInstance.paintImgIdElem), url, hiresurl])
        }
        if (AV.controlsWidgetInstance) {
            var im = AV.util.getImageElem(AV.controlsWidgetInstance.paintImgIdElem);
            im.avpw_prevURL = url;
            mediator.trigger("tool:close");
            if (showConfirmation) {
                AV.controlsWidgetInstance.messager.show("avpw_aviary_beensaved", true)
            }
            AV.controlsWidgetInstance.paintWidget.dirty = false;
            AV.controlsWidgetInstance.saving = false
        }
    };
    AV.controlsWidget_onImageSaved = function (url, hiresurl) {
        AV.controlsWidget_saveResponder(AV.launchData.onSave, url, hiresurl)
    };
    AV.controlsWidget_onHiResImageSaved = function (url) {
        AV.controlsWidget_saveResponder(AV.launchData.onSaveHiRes, url)
    };
    AV.ControlsWidget = function (paintWidget, paintImgIdElem, activeTools, assetManager, serverMessaging) {
        this.maxWidth = parseInt(AV.launchData.maxSize);
        this.maxHeight = this.maxWidth;
        this.saving = false;
        this.origURL = null;
        this.activeTools = activeTools;
        this.quitCount = 0;
        AV.usageTracker.setup();
        this.paintImgIdElem = paintImgIdElem;
        mediator.on("layout:resize", this.setupScrollPanels, this);
        this.layoutNotify(AV.launchData["openType"], "showView", ["main"]);
        if (paintWidget) {
            this.initWithPaintWidget(paintWidget)
        }
        var canvasThrobberConfig = {
            className: "avpw_canvas_spinner",
            lines: 12,
            length: 6,
            width: 2,
            radius: 6,
            color: "#fff",
            speed: .5,
            trail: 70
        };
        var eggThrobberConfig = {
            className: "avpw_tool_spinner",
            lines: 12,
            length: 6,
            width: 2,
            radius: 6,
            color: "#fff",
            speed: .5,
            trail: 70
        };
        if (AV.launchData["openType"] != "mobile") {
            eggThrobberConfig.color = "#555";
            eggThrobberConfig.length = 4
        }
        this.waitThrobber = new AV.Spinner(canvasThrobberConfig);
        this.onEggWaitThrobber = new AV.Spinner(eggThrobberConfig);
        this.toolManager = new AV.ToolManager(this);
        this.assetManager = assetManager;
        this.serverMessaging = serverMessaging
    };
    AV.ControlsWidget.prototype.tool = {};
    AV.ControlsWidget.prototype.layout = {};
    AV.ControlsWidget.prototype.layoutNotify = function (modulename, notification, args) {
        return this.objectNotify("layout", modulename, notification, args)
    };
    AV.ControlsWidget.prototype.objectNotify = function (objname, modulename, notification, args) {
        if (typeof this[objname][modulename] == "object") {
            var objModule = this[objname][modulename];
            if (typeof objModule[notification] == "function") {
                var fun = objModule[notification];
                if (!args) {
                    args = []
                }
                return fun.apply(objModule, args)
            }
        }
        return true
    };
    AV.ControlsWidget.prototype.shutdown = function () {
        if (this.canvasUI) {
            this.canvasUI.shutdown()
        }
        if (this.messager) {
            this.messager.hide()
        }
        mediator.off("layout:resize", this.setupScrollPanels);
        this.shutdownAllTools();
        this.unbindControls();
        if (this.toolsPager) {
            this.toolsPager.shutdown();
            this.toolsPager = null
        }
        if (this.paintWidget) {
            this.paintWidget.showWaitThrobber = null
        }
        AV.usageTracker.shutdown();
        this.waitThrobber.stop();
        this.onEggWaitThrobber.stop();
        this.waitThrobber = null;
        this.onEggWaitThrobber = null;
        this.showPanel(null);
        this.toolManager.shutdown();
        this.toolManager = null
    };
    AV.ControlsWidget.prototype.initAllTools = function () {
        AV.paintWidgetInstance.filterManager.loadPack("tools");
        for (var i in this.activeTools) {
            var toolName = this.activeTools[i];
            if (this.tool.hasOwnProperty(toolName)) {
                AV.paintWidgetInstance.moduleLoaded(toolName, function (toolName) {
                    mediator.trigger("tool:init", toolName)
                }.AV_bindInst(this))
            }
        }
        if (AV.launchData.forceCropPreset) {
            AV.paintWidgetInstance.moduleLoaded("forcecrop", function (toolName) {
                mediator.trigger("tool:init", "forcecrop")
            }.AV_bindInst(this))
        }
    };
    AV.ControlsWidget.prototype.shutdownAllTools = function () {
        for (var i in this.activeTools) {
            var toolName = this.activeTools[i];
            mediator.trigger("tool:shutdown", toolName)
        }
    };
    AV.ControlsWidget.prototype.bindControls = function () {};
    AV.ControlsWidget.prototype.unbindControls = function () {};
    AV.ControlsWidget.prototype.initWithPaintWidget = function (paintWidget) {
        this.paintWidget = paintWidget;
        this.imageSizeTracker = new AV.ImageSizeTracker(paintWidget.actions);
        if (!AV.featherUseFlash) {
            this.initAllTools()
        }
        this.bindControls();
        this.paintWidget.showWaitThrobber = this.showWaitThrobber.AV_bindInst(this)
    };
    AV.ControlsWidget.prototype.showWaitThrobber = function (show, callback) {
        var fadeTime = 300;
        var _this = this;
        if (show) {
            var embedElement = this.layoutNotify(AV.launchData["openType"], "getEmbedElement");
            if (embedElement.is(":visible")) {
                this.waitThrobber.spin(embedElement[0]);
                avpw$(this.waitThrobber).fadeIn(fadeTime)
            }
        } else {
            avpw$(_this.waitThrobber.el).fadeOut(fadeTime, _this.waitThrobber.stop)
        } if (callback) {
            window.setTimeout(callback, 5)
        }
    };
    AV.publicName2PanelMode = function (mode) {
        if (mode === "stickers") {
            mode = "overlay"
        }
        if (mode === "draw") {
            mode = "drawing"
        }
        if (mode === "text" && !AV.featherUseFlash) {
            mode = "textwithfont"
        }
        return mode
    };
    AV.ControlsWidget.prototype.panelMode2WidgetMode = function (mode) {
        switch (mode) {
        case "rotate":
            return "rotate90";
            break;
        case "greeneye":
            return "redeye";
            break;
        case "pinch":
            return "bulge";
            break
        }
        return mode
    };
    AV.ControlsWidget.prototype.setupScrollPanels = function () {
        if (!this.activeTools || !this.activeTools.length) {
            return
        }
        var toolName, toolLabel;
        var _this = this;
        var PANEL_PADDING = 5;
        var lastPage, lastPageContents = {}, pageWidth = this.layoutNotify(AV.launchData["openType"], "getDims").TOOLS_BROWSER_WIDTH;
        var initAndAttachPager = function () {
            _this.toolsPager = new AV.Pager(pagerOpts)
        };
        var pagerOpts = {
            itemCount: this.activeTools.length,
            itemsPerPage: this.layoutNotify(AV.launchData["openType"], "getToolsPerPage"),
            pageWidth: pageWidth,
            leftArrow: avpw$("#avpw_lftArrow"),
            rightArrow: avpw$("#avpw_rghtArrow"),
            itemBuilder: function (i) {
                toolName = _this.activeTools[i];
                toolLabel = AV.util.getUserFriendlyToolName(toolName);
                toolLabel = AV.getLocalizedString(toolLabel);
                return AV.template[AV.launchData.layout].eggIcon({
                    optionName: toolName,
                    capOptionName: toolLabel
                })
            },
            pageTemplate: AV.template[AV.launchData.layout].genericScrollPanel,
            pipTemplate: AV.template[AV.launchData.layout].scrollPanelPip,
            lastPageTemplate: lastPage,
            lastPageContents: lastPageContents,
            pageContainer: avpw$("#avpw_control_main_scrolling_region"),
            pipContainer: avpw$("#avpw_tools_pager ul"),
            onPageChange: function (page) {
                AV.usageTracker.addPageHit(page)
            }
        };
        initAndAttachPager();
        avpw$("#avpw_control_main_scrolling_region").css("width", _this.toolsPager.getPageCount() * pageWidth + "px");
        this.assetManager.getAssets("PERMISSION", function (assets) {
            var aviaryBrandingShown = true;
            if (assets) {
                for (var i = 0; i < assets.length; i++) {
                    if (assets[i] && assets[i].assetId === "whitelabel") {
                        aviaryBrandingShown = false;
                        break
                    }
                }
            }
            if (aviaryBrandingShown) {
                avpw$("#avpw_powered_branding").html(AV.template[AV.launchData.layout].poweredByFooterLogo).click(function () {
                    mediator.trigger("modal:show", "avpw_aviary_aviaryfeedback", false, false)
                });
                _this.toolsPager.shutdown();
                initAndAttachPager();
                avpw$("#avpw_control_main_scrolling_region").css("width", _this.toolsPager.getPageCount() * pageWidth + "px");
                _this.toolsPager.changePage()
            }
        });
        AV.usageTracker.setPageCount(_this.toolsPager.getPageCount());
        _this.toolsPager.changePage()
    };
    AV.ControlsWidget.prototype.messager = function () {
        var messages = {};
        var messageContainer;
        var messageContainerInner;
        var messageStash;
        var NOTIFICATION_PERSIST = 1e3;
        var api = {
            show: function (id, needsConfirmation, persist) {
                messageContainer = messageContainer || avpw$("#avpw_messaging");
                messageContainerInner = messageContainerInner || avpw$("#avpw_messaging_inner");
                var message = messages[id] || (messages[id] = avpw$("#" + id));
                messageContainerInner.append(message);
                messageContainer.fadeIn(150);
                if (needsConfirmation) {
                    messageContainer.data("needsConfirmation", true);
                    AV.controlsWidgetInstance.layoutNotify(AV.launchData["openType"], "disableControls")
                } else {
                    messageContainer.data("needsConfirmation", false);
                    if (!persist) {
                        window.setTimeout(this.hide, NOTIFICATION_PERSIST)
                    }
                }
            },
            hide: function (id, callback) {
                messageContainer = messageContainer || avpw$("#avpw_messaging");
                messageStash = messageStash || avpw$("#avpw_messages");
                if (id) {
                    var message = messages[id];
                    if (message) {
                        messageStash.append(message)
                    }
                } else {
                    avpw$.each(messages, function (key, message) {
                        messageStash.append(message)
                    })
                } if (messageContainer.data("needsConfirmation")) {
                    window.setTimeout(function () {
                        if (callback) {
                            callback()
                        }
                    }, 400);
                    if (AV.controlsWidgetInstance) {
                        AV.controlsWidgetInstance.layoutNotify(AV.launchData["openType"], "enableControls")
                    }
                } else {
                    messageContainer.hide();
                    if (callback) {
                        callback()
                    }
                }
            },
            addMessage: function (html) {
                messageStash = messageStash || avpw$("#avpw_messages");
                if (html) {
                    messageStash[0].innerHTML += html
                }
            }
        };
        mediator.on("modal:show", api.show);
        mediator.on("modal:hide", api.hide);
        return api
    }();
    AV.ControlsWidget.prototype.orientationChanged = function (ev) {};
    AV.ControlsWidget.prototype.windowResized = function () {
        var resizeTimer = null;
        return function (ev) {
            window.clearTimeout(resizeTimer);
            resizeTimer = window.setTimeout(function () {
                mediator.trigger("layout:resize");
                resizeTimer = null
            }, 500)
        }
    }();
    AV.ControlsWidget.prototype.Slider = function (config) {
        var ignore = false;
        var onStartWrapper = function (ev, ui) {
            if (!ignore && config.onstart) {
                config.onstart.apply(this, [ev, ui])
            }
        };
        var onChangeWrapper = function (ev, ui) {
            if (!ignore && config.onchange) {
                config.onchange.apply(this, [ev, ui])
            }
        };
        var onSlideWrapper = function (ev, ui) {
            if (!ignore && config.onslide) {
                config.onslide.apply(this, [ev, ui])
            }
        };
        var $element = avpw$(config.element).slider({

            range: "min",
            max: config.max,
            min: config.min,
            value: config.defaultValue || config.max / 2,
            delay: config.delay
        });
        this.getValue = function () {
            return $element.slider("value")
        };
        this.setValue = function (value) {
            return $element.slider("value", value)
        };
        this.reset = function (val) {
            ignore = true;
            this.setValue(config.defaultValue);
            ignore = false
        };
        this.addListeners = function () {
            $element.bind("slidestart", onStartWrapper).bind("slidechange", onChangeWrapper).bind("slide", onSlideWrapper)
        };
        this.removeListeners = function () {
            $element.unbind("slidestart").unbind("slide").unbind("slidechange")
        };
        this.shutdown = function () {
            $element.slider("destroy")
        };
        return this
    };
    AV.ControlsWidget.prototype._drawUICircle = function (id, radius, color, fill, drawGrid) {
        if (AV.featherUseFlash) {
            return
        } else {
            this._drawUICircle_HTML(id, radius, color, fill, drawGrid)
        }
    };
    AV.ControlsWidget.prototype._drawUICircle_HTML = function (id, radius, color, fill, drawGrid) {
        var canvas = avpw$(id)[0];
        var cc = canvas.getContext("2d");
        var linewidth;
        cc.clearRect(0, 0, canvas.width, canvas.height);
        if (drawGrid && fill !== "transparent") {
            this._drawUIGrid(cc, canvas.width, canvas.height)
        }
        cc.globalCompositeOperation = "source-over";
        if (color != null) {
            if (drawGrid && (color == "transparent" || AV.util.color_is_white(color) || fill == null)) {
                cc.strokeStyle = "#444"
            } else {
                cc.strokeStyle = color
            }
            linewidth = 3
        } else {
            cc.strokeStyle = "rgba(0,0,0,0)";
            linewidth = 1
        }
        cc.lineWidth = linewidth;
        cc.beginPath();
        cc.arc(canvas.width / 2, canvas.height / 2, radius, 0, 2 * Math.PI, true);
        cc.stroke();
        cc.closePath();
        if (fill != null) {
            cc.save();
            cc.clip();
            if (drawGrid && fill == "transparent") {
                this._drawUIGrid(cc, canvas.width, canvas.height)
            } else {
                cc.fillStyle = fill;
                cc.fillRect(0, 0, canvas.width, canvas.height)
            }
            cc.restore()
        }
    };
    AV.ControlsWidget.prototype._drawUIGrid = function (context, width, height, blocksize) {
        var x, y;
        if (!blocksize) {
            blocksize = 5
        }
        for (y = 0; y < height + blocksize; y += blocksize) {
            for (x = 0; x < height + blocksize; x += blocksize) {
                if ((x + y & 1) == 1) {
                    context.fillStyle = "#fff"
                } else {
                    context.fillStyle = "#ddd"
                }
                context.fillRect(x, y, blocksize, blocksize)
            }
        }
    };
    AV.ControlsWidget.prototype.showPanel = function (name) {
        if (name != null) {
            avpw$(".avpw_controlpanel").each(function () {
                avpw$(this).hide()
            });
            avpw$("#avpw_controlpanel_" + name).show()
        }
    };
    AV.ControlsWidget.prototype.save = function () {
        var asyncPollingTimer = null;
        var asyncPollingReady = true;
        var POLLING_DELAY = 1e3;
        var getAuthenticationKeys = function () {
            return {
                apikey: AV.launchData.apiKey,
                timestamp: AV.launchData.timestamp,
                signature: AV.launchData.signature,
                salt: AV.launchData.salt,
                encryptionmethod: AV.launchData.encryptionMethod
            }
        };
        var saveCallbackWithURL = function (url, url_hires, error) {
            var cw = AV.controlsWidgetInstance;
            cw.layoutNotify(AV.launchData["openType"], "enableControls", [true]);
            cw.paintWidget.showWaitThrobber(false);
            if (url) {
                var im = avpw$(AV.util.getImageElem(cw.paintImgIdElem));
                im.avpw_prevURL = url;
                AV.controlsWidget_onImageSaved(url, url_hires)
            } else {
                AV.errorNotify("ERROR_SAVING", [AV.build["imgrecvServer"], error]);
                AV.controlsWidgetInstance.saving = false
            }
        };
        var hiresSaveCallbackWithURL = function (url, error) {
            var cw = AV.controlsWidgetInstance;
            cw.layoutNotify(AV.launchData["openType"], "enableControls", [true]);
            cw.paintWidget.showWaitThrobber(false);
            if (url) {
                var im = avpw$(AV.util.getImageElem(cw.paintImgIdElem));
                im.avpw_prevURL = url;
                AV.controlsWidget_onHiResImageSaved(url)
            } else {
                AV.errorNotify("ERROR_SAVING", [AV.build["asyncImgrecvBase"], error]);
                AV.controlsWidgetInstance.saving = false
            }
        };
        var prepareSaveMessage = function (data) {
            var urls, url, url_hires, errorNode, error = "";
            if (typeof data === "string") {
                urls = data.split("---FEATHER-POSTMESSAGE---");
                url = urls[0];
                url_hires = urls[1]
            } else {
                errorNode = avpw$(data).find("error");
                if (errorNode.length > 0) {
                    error = errorNode.text()
                } else {
                    var newFile = avpw$(data).find("url");
                    if (newFile) {
                        url = newFile.text();
                        url = url.replace(/^\s+|\s+$/g, "")
                    }
                    var newFile_hires = avpw$(data).find("hiresurl");
                    if (newFile_hires) {
                        url_hires = newFile_hires.text();
                        url_hires = url_hires.replace(/^\s+|\s+$/g, "")
                    }
                }
            }
            saveCallbackWithURL(url, url_hires, error)
        };
        var saveImageToFeatherServices = function (onCompleteOverrideFunction) {
            var _this = this;
            _this.paintWidget.exportImage(null, function (dataURL) {
                var mimeType, base64data;
                var semiIndex = dataURL.indexOf(";", 0);
                var commaIndex = dataURL.indexOf(",", semiIndex);
                mimeType = dataURL.slice(5, semiIndex);
                base64data = dataURL.slice(commaIndex + 1);
                dataURL = "";
                AV.controlsWidgetInstance.serverMessaging.sendMessage({
                    id: "avpw_save_form",
                    action: AV.build["imgrecvServer"],
                    method: "POST",
                    announcer: AV.build["featherTargetAnnounce"],
                    origin: AV.build["imgrecvBase"],
                    keyValues: AV.util.extend(getAuthenticationKeys(), {
                        file: base64data,
                        postdata: AV.launchData.postData,
                        posturl: AV.launchData.postUrl,
                        sessionid: AV.usageTracker.getUUID(),
                        actionlist: _this.paintWidget.actions.exportJSON(true),
                        origurl: _this.origURL,
                        hiresurl: AV.launchData.hiresUrl,
                        contenttype: AV.launchData.fileFormat,
                        jpgquality: AV.launchData.jpgQuality,
                        debug: AV.launchData.debug,
                        asyncsave: AV.launchData.asyncSave,
                        usecustomfileexpiration: AV.launchData.useCustomFileExpiration,
                        encodedas: "base64text"
                    }),
                    callback: onCompleteOverrideFunction || prepareSaveMessage
                })
            })
        };
        var _hiResSaveTracking = function (didHitAzure, width, height) {
            var megaPixels = Math.round(width * height / 1e6 * 10) / 10;
            var metadata = ["didHitAzure:" + (didHitAzure ? "Yes" : "No"), " width:" + width, " height:" + height, " megaPixels:" + megaPixels].join("");
            mediator.trigger("usage:submit", "saveHiRes", metadata)
        };
        var saveImageToAsyncFeatherServices = function () {
            var dims = AV.paintWidgetInstance.getScaledSize();
            var _couldOptimizeThisSave = false;
            if (!AV.launchData["forceHiResSave"] && dims.hiresWidth && dims.hiresHeight) {
                var maxDim = AV.launchData.maxSize;
                if (dims.hiresWidth < maxDim && dims.hiresHeight < maxDim) {
                    _couldOptimizeThisSave = true
                }
            }
            if (_couldOptimizeThisSave) {
                _hiResSaveTracking(false, dims.hiresWidth, dims.hiresHeight)
            } else {
                _hiResSaveTracking(true, dims.hiresWidth, dims.hiresHeight)
            }
            var createJobRequestData = AV.util.extend(getAuthenticationKeys(), {
                actionlist: this.paintWidget.actions.exportJSON(true),
                origurl: AV.launchData.hiresUrl,
                fileformat: AV.launchData.fileFormat,
                notificationmethod: "GET",
                backgroundcolor: "0xffffffff",
                jpgquality: AV.launchData.jpgQuality
            });
            var getJobStatusCallback = function (d) {
                if (!d || d && d.JobStatusCode === "JobFailed") {
                    hiresSaveCallbackWithURL(null);
                    window.clearInterval(asyncPollingTimer)
                } else {
                    if (d && d.JobStatusCode === "JobCompleted") {
                        window.clearInterval(asyncPollingTimer);
                        hiresSaveCallbackWithURL(d.JobStatus)
                    }
                }
                asyncPollingReady = true
            };
            var createJobCallback = function (d) {
                var jobId;
                if (d && d.JobId) {
                    jobId = d.JobId;
                    asyncPollingTimer = window.setInterval(function () {
                        if (asyncPollingReady) {
                            AV.controlsWidgetInstance.serverMessaging.sendMessage({
                                id: "avpw_save_form",
                                action: AV.build["asyncImgrecvGetJobStatus"],
                                method: "POST",
                                dataType: "json",
                                announcer: AV.build["asyncFeatherTargetAnnounce"],
                                origin: AV.build["asyncImgrecvBase"],
                                keyValues: AV.util.extend(getAuthenticationKeys(), {
                                    jobid: jobId
                                }),
                                callback: getJobStatusCallback
                            })
                        }
                        asyncPollingReady = false
                    }, POLLING_DELAY)
                } else {
                    hiresSaveCallbackWithURL(null)
                }
            };
            AV.controlsWidgetInstance.serverMessaging.sendMessage({
                id: "avpw_save_form",
                action: AV.build["asyncImgrecvCreateJob"],
                method: "POST",
                dataType: "json",
                announcer: AV.build["asyncFeatherTargetAnnounce"],
                origin: AV.build["asyncImgrecvBase"],
                keyValues: createJobRequestData,
                callback: createJobCallback
            })
        };
        var getImageData = function (callback, showConfirmation, mime) {
            var _this = this;
            _this.paintWidget.exportImage(mime, function (data) {
                var cw = AV.controlsWidgetInstance;
                cw.saving = false;
                cw.layoutNotify(AV.launchData["openType"], "enableControls", [true]);
                cw.paintWidget.showWaitThrobber(false);
                if (callback && typeof callback === "function") {
                    if (showConfirmation) {
                        showConfirmation = callback(data) === false ? false : true
                    } else {
                        callback(data)
                    }
                }
                if (showConfirmation) {
                    AV.util.nextFrame(function () {
                        AV.controlsWidget_onImageSaved(cw.origURL)
                    })
                }
            })
        };
        var saveViaHTML = function (type, callback, showConfirmation, mime) {
            var showThrobber = !AV.featherUseFlash;
            if (showThrobber) {
                this.layoutNotify(AV.launchData["openType"], "disableControls")
            }
            this.paintWidget.showWaitThrobber(showThrobber, function () {
                switch (type) {
                case "saveHiRes":
                    saveImageToAsyncFeatherServices.call(_this);
                    break;
                case "getImageData":
                    getImageData.call(_this, callback, showConfirmation, mime);
                    break;
                default:
                    saveImageToFeatherServices.call(_this);
                    break
                }
            });
            var _this = this;
            return false
        };
        return function (type, callback, showConfirmation, mime) {
            if (AV.controlsWidgetInstance.loaderPhase < 2) {
                return false
            }
            if (this.saving) {
                return false
            }
            mediator.trigger("tool:commit");
            mediator.trigger("tool:close");
            this.saving = true;
            AV.prevActionList = this.paintWidget.actions.exportJSON(true);
            if (AV.launchData.postData && typeof AV.launchData.postData !== "string") {
                AV.launchData.postData = AV.JSON.stringify(AV.launchData.postData)
            }
            return saveViaHTML.apply(this, [type, callback, showConfirmation, mime])
        }
    }();
    AV.ControlsWidget.prototype.onSaveButtonClicked = function (ev) {
        mediator.trigger("usage:submit", "saveclicked");
        if (typeof AV.launchData.onSaveButtonClicked === "function") {
            var letSaveProceed = AV.launchData.onSaveButtonClicked.apply(AV.launchData, [AV.util.getImageId(AV.controlsWidgetInstance.paintImgIdElem)]);
            if (letSaveProceed === false) {
                return false
            }
        }
        return AV.controlsWidgetInstance.save()
    };
    AV.ControlsWidget.prototype.showAreYouSure = function () {
        this.messager.show("avpw_aviary_quitareyousure", true)
    };
    AV.ControlsWidget.prototype.cancel = function (ev) {
        this.quitCount++;
        var unsavedChanges = this.quitCount > 0 && this.paintWidget && this.paintWidget.dirty;
        if (typeof AV.launchData.onCloseButtonClicked === "function") {
            var letCloseProceed = AV.launchData.onCloseButtonClicked.apply(AV.launchData, [unsavedChanges]);
            if (letCloseProceed === false) {
                return false
            }
        }
        if (unsavedChanges) {
            this.showAreYouSure()
        } else {
            AV.paintWidgetCloser()
        }
        return false
    };
    AV.ControlsWidget.prototype.getScaledDims = function (width, height) {
        return AV.util.getScaledDims(width, height, this.maxWidth, this.maxHeight)
    };
    AV.TransformStyle = function (originalString) {
        var api = this;
        var style = originalString || "";
        api.set = function (keyval) {
            if (style) {
                for (var key in keyval) {
                    var match = key + "\\([^\\)]*";
                    var re = new RegExp(match);
                    var matchFound = false;
                    var replacer = function (substr, offset, orig) {
                        matchFound = true;
                        return key + "(" + keyval[key]
                    };
                    style = style.replace(re, replacer);
                    if (!matchFound) {
                        style += " " + key + "(" + keyval[key] + ")"
                    }
                }
            } else {
                for (var key in keyval) {
                    style += " " + key + "(" + keyval[key] + ")"
                }
            }
        };
        api.serialize = function () {
            return style
        };
        return api
    };
    return exports
})(this, typeof window !== "undefined" ? window : {}, typeof document !== "undefined" ? document : {});
(function (AV, window, document) {
    AV.errorNotify = function (type, args) {
        var errors = {
            BAD_IMAGE: {
                code: 1,
                message: "There was a problem loading your image provided to the `image` config key. Either it's not actually an image file or it doesn't really exist."
            },
            UNSUPPORTED: {
                code: 2,
                message: "It looks like you're using a browser that doesn't support the HTML canvas element (and also doesn't have Flash installed either). Please try accessing this page through a modern browser like Chrome, Firefox, Safari, or Internet Explorer (version 9 or higher). Your internets will thank you."
            },
            BAD_URL: {
                code: 3,
                message: "There was a problem loading your image provided by URI to the `url` config key. It is not reachable by the public (and our service at " + (AV.featherUseFlash ? AV.build["proxyServer"] : AV.build["imgrecvBase"]) + ")"
            },
            UNSUPPORTED_TOOL: {
                code: 4,
                message: "So sorry, but this tool is not available because it is not part of the set chosen with the `tools` config key. It's alternatively possible that your browser does not support this specific tool."
            },
            IMAGE_NOT_CLEAN: {
                code: 5,
                message: "Uh oh! We can't edit this image because the editor wasn't set up correctly to load external files via their address. You must either provide images from the same domain as the web page with the editor OR pass the external image address via the `url` config key in order for Aviary to be able to get permission from the browser to open it for editing. Sorry for the inconvenience!"
            },
            UNSUPPORTED_FONT: {
                code: 6,
                message: "So sorry, but this font looks to be unsupported by your browser or platform"
            },
            ERROR_SAVING: {
                code: 7,
                message: "There was a problem saving your photo. Please try again."
            },
            NO_APIKEY: {
                code: 8,
                message: "apiKey is required and not provided. See http://www.aviary.com/web-documentation#constructor-config-apikey."
            },
            ERROR_AUTHENTICATING: {
                code: 9,
                message: "There was a problem retrieving access to content from our server. Please ensure all authentication keys are present or do not attempt premium partner authentication."
            },
            ERROR_BAD_THEME: {
                code: 10,
                message: "Selected theme does not exist. Please use 'dark', 'light' or 'minimum' or see aviary.com/web for more info."
            },
            ERROR_BAD_IMAGE_WITHOUT_CORS: {
                code: 11,
                message: "The image URL you are trying to use is either not on the same domain or is not configured for CORS. See http://enable-cors.org/ for more info."
            }
        };
        var showError = function (message) {};
        var errObj = errors[type];
        var message = errObj["message"];
        if (typeof AV.launchData.onError === "function") {
            errObj["args"] = args;
            message = AV.launchData.onError(errObj) || message
        }
        if (message) {
            showError(message)
        }
        return message
    }
})(window["AV"] || (window["AV"] = {}), window, document);
(function (exports, window, document) {
    exports["AV"] = exports["AV"] || {};
    var AV = exports["AV"];
    var mediator = AV.Events;
    exports["Aviary"] = AV;
    AV.feather_loaded = false;
    AV.feather_loading = false;
    AV.build = AV.build || {
        version: "",
        imgrecvServer: "imgrecvserver",
        flashGatewayServer: "",
        imgrecvBase: "",
        inAppPurchaseFrameURL: "",
        imgtrackServer: "imgtrackserver",
        filterServer: "",
        jsonp_imgserver: "",
        featherTargetAnnounce: "feather_target_announce_v3.html",
        proxyServer: "",
        feather_baseURL: "",
        feather_stickerURL: "",
        googleTracker: "",
        MINIMUM_FLASH_PLAYER_VERSION: "10.2.0"
    };
    AV.defaultTools = ["enhance", "effects", "frames", "overlay", "crop", "resize", "orientation", "focus", "brightness", "contrast", "saturation", "warmth", "sharpness", "colorsplash", "drawing", "textwithfont", "redeye", "whiten", "blemish"];
    AV.flashSupportedTools = ["enhance", "effects", "overlay", "crop", "resize", "orientation", "brightness", "contrast", "saturation", "sharpness", "drawing", "text", "redeye", "blemish"];
    var baseConfig = {};
    baseConfig.image = null;
    baseConfig.apiKey = undefined;
    baseConfig.apiVersion = 1;
    baseConfig.appendTo = null;
    baseConfig.language = "en";
    baseConfig.theme = null;
    baseConfig.minimumStyling = false;
    baseConfig.maxSize = 800;
    baseConfig.noCloseButton = false;
    baseConfig.launchDelay = 300;
    baseConfig.closeDelay = 300;
    baseConfig.forceCropPreset = null;
    baseConfig.tools = undefined;
    baseConfig.initTool = "";
    baseConfig.cropPresets = ["Custom", "Original", ["Square", "1:1"], "3:2", "3:5", "4:3", "4:5", "4:6", "5:7", "8:10", "16:9"];
    baseConfig.cropPresetDefault = "Custom";
    baseConfig.cropPresetsStrict = false;
    baseConfig.url = null;
    baseConfig.enableCORS = false;
    baseConfig.postUrl = undefined;
    baseConfig.postData = null;
    baseConfig.fileFormat = "";
    baseConfig.jpgQuality = 100;
    baseConfig.displayImageSize = false;
    baseConfig.hiresMaxSize = 1e4;
    baseConfig.hiresWidth = null;
    baseConfig.hiresHeight = null;
    baseConfig.onLoad = undefined;
    baseConfig.onReady = undefined;
    baseConfig.onSaveButtonClicked = undefined;
    baseConfig.onSave = undefined;
    baseConfig.onSaveHiRes = undefined;
    baseConfig.onClose = undefined;
    baseConfig.onError = undefined;
    baseConfig.signature = null;
    baseConfig.timestamp = null;
    baseConfig.hiresUrl = undefined;
    baseConfig.useCustomFileExpiration = false;
    baseConfig.allowInAppPurchase = false;
    baseConfig.forceFlash = false;
    baseConfig.forceSupport = false;
    baseConfig.poweredByURL = "http://www.aviary.com";
    baseConfig.giveFeedbackURL = "http://support.aviary.com/";
    baseConfig.getWidgetURL = "http://www.aviary.com";
    baseConfig.debug = false;
    baseConfig.asyncSave = true;
    AV.baseConfig = baseConfig;
    (function (w) {
        var gatherGlobalLegacyConfigs = function (w) {
            return {
                language: w["Feather_Language"],
                forceFlash: w["Feather_ForceFlash"],
                forceSupport: w["AV_Feather_ForceSupport"],
                onLoad: w["Feather_OnLoad"],
                onReady: w["Feather_OnLaunchComplete"],
                onClose: w["Feather_OnClose"],
                onSave: w["Feather_OnSave"],
                noCloseButton: w["Feather_NoCloseButton"],
                maxSize: w["Feather_MaxSize"] || w["Feather_MaxDisplaySize"],
                tools: w["Feather_EditOptions"],
                cropPresets: w["Feather_CropSizes"],
                resizePresets: w["Feather_ResizeSizes"],
                apiKey: w["Feather_APIKey"],
                hiresUrl: w["Feather_HiResURL"],
                postUrl: w["Feather_PostURL"],
                fileFormat: w["Feather_FileFormat"] || w["Feather_ContentType"],
                jpgQuality: w["Feather_FileQuality"],
                signature: w["Feather_Signature"],
                timestamp: w["Feather_Timestamp"]
            }
        };
        AV.baseConfig = AV.util.extend(AV.baseConfig, gatherGlobalLegacyConfigs(w));
        if ("https:" == w.location.protocol || "chrome-extension:" == w.location.protocol) {
            var baseKey, sslSplit, sslValue;
            for (var key in AV.build) {
                sslSplit = key.split("_SSL");
                if (sslSplit.length === 2 && AV.build[key]) {
                    baseKey = sslSplit[0];
                    AV.build[baseKey] = AV.build[key]
                }
            }
        }
        if (w["Feather_Theme"] || w["Feather_OpenType"] || w["Feather_APIKey"]) {
            AV.util.nextFrame(function () {
                var legacyFeather = new AV.Feather(AV.baseConfig);
                w.aviaryeditor = function (imageID, imageURL, postData, inlineSite) {
                    AV.launchData = AV.util.extend(AV.baseConfig, gatherGlobalLegacyConfigs(w));
                    var config = AV.util.extend(AV.launchData, {
                        image: imageID,
                        url: imageURL,
                        postData: postData,
                        appendTo: inlineSite
                    });
                    legacyFeather.launch(config)
                };
                w.aviaryeditor_close = legacyFeather.close;
                w.aviaryeditor_relaunch = legacyFeather.relaunch;
                w.aviaryeditor_activatetool = legacyFeather.activateTool;
                w.aviarynewimage = legacyFeather.replaceImage
            })
        }
    })(window);
    AV.getLocalizedString = function (key) {
        try {
            var ret = AV.lang[AV.launchData["language"]][key];
            if (ret === undefined) ret = key;
            return ret
        } catch (ex) {}
        return key
    };
    Function.prototype.AV_bindInst = function (scope) {
        var _function = this;
        return function () {
            return _function.apply(scope, arguments)
        }
    };
    AV.injectControls = function () {
        var internalSaveBlock, externalSaveBlock;
        if (AV.launchData["openType"] == "popup") {
            internalSaveBlock = "";
            externalSaveBlock = AV.template[AV.launchData.layout].saveBlock()
        } else {
            internalSaveBlock = AV.template[AV.launchData.layout].saveBlock();
            externalSaveBlock = ""
        } if (AV.criticalLayoutStyles && !AV.feather_loaded) {
            var styles = document.createElement("style");
            styles.type = "text/css";
            var rules = document.createTextNode(AV.criticalLayoutStyles);
            if (styles.styleSheet) {
                styles.styleSheet.cssText = rules.nodeValue
            } else {
                styles.appendChild(rules)
            }
            var headEl = document.getElementsByTagName("head")[0];
            headEl.appendChild(styles)
        }
        var s = AV.template[AV.launchData.layout].controls({
            internalSaveBlock: internalSaveBlock,
            externalSaveBlock: externalSaveBlock
        });
        var avholder = document.createElement("div");
        avholder.id = "avpw_holder";
        var supportClasses = "";
        if (AV.featherUseFlash) {
            supportClasses = "avpw_flash "
        }
        if (AV.msie) {
            supportClasses += "avpw_ie" + AV.msie
        }
        if (supportClasses) {
            avholder.className = supportClasses
        }
        var containerElem = document.getElementsByTagName("body");
        if (containerElem) {
            containerElem = containerElem[0]
        }
        if (!containerElem) {
            containerElem = document.documentElement
        }
        containerElem.appendChild(avholder);
        avholder.innerHTML = s
    };
    AV.Feather = function (config) {
        var api = this;
        var finishBuild = function () {
            AV.injectControls();
            AV.util.nextFrame(AV.loadStageFinal)
        };
        var checkForDOMAndFinishBuild = function () {
            if (typeof avpw$ !== "undefined") {
                avpw$(document).ready(finishBuild)
            } else {
                finishBuild()
            }
        };
        if (config) {
            config.openType = "aviary";
            config.layout = "desktop"
        }
        config = config || {};
        AV.launchData = AV.util.extend(AV.baseConfig, config);
        var AV__featherAutoInit_OLD = function () {
            var language, controlsJSFilename;

            function loadThemeCSSHelper(name) {
                var basepath = AV.build["feather_baseURL"] + "css/" + name;
                AV.util.loadFile(basepath + ".css", "css")
            }
            AV.featherUseFlash = !AV.featherHtmlOk() && AV.featherFlashOk();
            AV.launchData["language"] = AV.launchData["language"].toLowerCase();
            if (!AV.feather_loaded && !AV.feather_loading) {
                AV.feather_loading = true;
                language = AV.launchData["language"] || "en";
                controlsJSFilename = "js/feathercontrols_desktop";
                if (AV.validLanguages && AV.validLanguages[language]) {
                    controlsJSFilename += "_" + language + ".js"
                } else {
                    controlsJSFilename += "_en.js"
                } if (AV.launchData["minimumStyling"]) {
                    loadThemeCSSHelper("feather_core")
                } else {
                    loadThemeCSSHelper("feather_theme_aviary")
                }
                AV.util.loadFile(AV.build["feather_baseURL"] + "images/aviary_atlas.png", "img");
                if (AV.build.bundled) {
                    checkForDOMAndFinishBuild()
                } else {
                    AV.util.loadFile(AV.build["feather_baseURL"] + controlsJSFilename, "js", checkForDOMAndFinishBuild)
                }
            }
        };
        var AV__featherAutoInit = function () {
            var language, controlsJSFilename;

            function loadThemeCSSHelper(name) {
                var basepath = AV.build["feather_baseURL"] + "css/" + name;
                AV.util.loadFile(basepath + ".css", "css")
            }
            AV.featherUseFlash = !AV.featherHtmlOk() && AV.featherFlashOk();
            AV.launchData["language"] = AV.launchData["language"].toLowerCase();
            if (!AV.feather_loaded && !AV.feather_loading) {
                AV.feather_loading = true;
                language = AV.launchData["language"] || "en";
                controlsJSFilename = "js/feathercontrols_desktop";
                if (AV.validLanguages && AV.validLanguages[language]) {
                    controlsJSFilename += "_" + language + ".js"
                } else {
                    controlsJSFilename += "_en.js"
                } if (!AV.launchData["theme"] && AV.launchData["minimumStyling"]) {
                    AV.launchData["theme"] = "minimum"
                }
                if (AV.launchData["theme"] == "minimum") {
                    AV.launchData["minimumStyling"] = true
                }
                if (!AV.launchData["theme"]) {
                    AV.launchData["theme"] = "dark"
                }
                switch (AV.launchData["theme"]) {
                case "dark":
                case "light":
                case "minimum":
                    break;
                default:
                    AV.errorNotify("ERROR_BAD_THEME");
                    break
                }
                var styleName;
                if (AV.launchData["minimumStyling"]) styleName = "feather_core_";
                else styleName = "feather_theme_aviary_";
                styleName += AV.launchData["theme"];
                loadThemeCSSHelper(styleName);
                if (AV.build.bundled) {
                    checkForDOMAndFinishBuild()
                } else {
                    AV.util.loadFile(AV.build["feather_baseURL"] + controlsJSFilename, "js", checkForDOMAndFinishBuild)
                }
            }
        };
        var apiVersion = AV.util.getApiVersion(AV.launchData);
        if (apiVersion === 2) {
            AV.build["feather_baseURL"] = window.location.protocol + "//feather.aviary.com/2.6.2.184/";
            AV.build["feather_baseURL_SSL"] = window.location.protocol + "//dme0ih8comzn4.cloudfront.net/2.6.2.184/";
            if ("https:" == window.location.protocol || "chrome-extension:" == window.location.protocol) {
                var baseKey, sslSplit, sslValue;
                for (var key in AV.build) {
                    sslSplit = key.split("_SSL");
                    if (sslSplit.length === 2 && AV.build[key]) {
                        baseKey = sslSplit[0];
                        AV.build[baseKey] = AV.build[key]
                    }
                }
            }
            AV__featherAutoInit_OLD()
        } else {
            AV__featherAutoInit()
        }
        var beginLaunch = function () {
            if (AV.paintWidgetInstance) {
                return false
            } else {
                AV.paintWidgetLauncher(AV.launchData.image, AV.launchData.url)
            }
        };
        api.launch = function (launchData) {
            if (!AV.feather_loaded) {
                return false
            }
            var editorHtml = document.getElementById("avpw_holder");
            if (!editorHtml) {
                AV.injectControls()
            }
            if (AV.paintWidgetInstance) {
                if (editorHtml) {
                    return false
                } else {
                    api.close(true)
                }
            }
            if (launchData && launchData.language) {
                delete launchData.language
            }
            AV.launchData = launchData ? AV.util.extend(AV.launchData, launchData) : AV.launchData;
            if (!AV.launchData.image) {
                AV.errorNotify("BAD_IMAGE");
                return false
            }
            if (typeof launchData.forceCropPreset === "object") {
                AV.launchData.forceCropPreset = [launchData.forceCropPreset];
                AV.launchData.initTool = "forcecrop"
            } else {
                AV.launchData.forceCropPreset = null
            } if (AV.launchData.initTool) {
                editorHtml.className = "avpw_init_hide"
            }
            if (AV.featherUseFlash) {
                beginLaunch()
            } else {
                if (!AV.featherSupported()) {
                    if (AV.errorNotify("UNSUPPORTED")) {
                        AV.controlsWidgetInstance = new AV.ControlsWidget;
                        AV.controlsWidgetInstance.layoutNotify(AV.launchData["openType"], "placeControls", [AV.util.getApiVersion(AV.launchData) > 1 ? AV.launchData.appendTo : undefined]);
                        AV.controlsWidgetInstance.bindControls();
                        document.getElementById("avpw_controls").style.display = "block";
                        AV.controlsWidgetInstance.messager.show("avpw_aviary_unsupported", true)
                    }
                    return true
                }
                AV.util.nextFrame(beginLaunch)
            }
            return true
        };
        api.showWaitIndicator = function () {
            if (AV.controlsWidgetInstance && AV.controlsWidgetInstance.showWaitThrobber) {
                AV.controlsWidgetInstance.showWaitThrobber(true);
                return true
            } else {
                return false
            }
        };
        api.hideWaitIndicator = function () {
            if (AV.controlsWidgetInstance && AV.controlsWidgetInstance.showWaitThrobber) {
                AV.controlsWidgetInstance.showWaitThrobber(false);
                return true
            } else {
                return false
            }
        };
        api.getImageDimensions = function () {
            var wh = null;
            if (AV.paintWidgetInstance) {
                wh = AV.paintWidgetInstance.getScaledSize();
                if (!(AV.launchData["hiresWidth"] && AV.launchData["hiresHeight"])) {
                    delete wh.hiresWidth;
                    delete wh.hiresHeight
                }
            }
            return wh
        };
        api.save = function () {
            if (!AV.paintWidgetInstance) {
                return false
            }
            return AV.controlsWidgetInstance.save()
        };
        api.saveHiRes = function () {
            if (!AV.paintWidgetInstance) {
                return false
            }
            return AV.controlsWidgetInstance.save("saveHiRes")
        };
        api.getImageData = function (callback, showConfirmation, mime) {
            if (!AV.paintWidgetInstance) {
                return false
            }
            return AV.controlsWidgetInstance.save("getImageData", callback, showConfirmation, mime)
        };
        api.close = function (instant) {
            if (!AV.paintWidgetInstance) {
                return false
            }
            AV.paintWidgetCloser(instant)
        };
        api.relaunch = function () {
            mediator.trigger("usage:interact", "api", "relaunch");
            AV.isRelaunched = true;
            if (AV.launchData) {
                api.launch(AV.launchData)
            } else {
                return false
            }
        };
        api.activateTool = function (toolName) {
            mediator.trigger("tool:open", toolName, AV.controlsWidgetInstance)
        };
        api.replaceImage = function (imageURL) {
            mediator.trigger("usage:interact", "api", "replaceImage");
            if (AV.launchData) {
                api.close(true);
                AV.util.nextFrame(function () {
                    AV.launchData.url = imageURL;
                    api.launch(AV.launchData)
                })
            } else {
                return false
            }
        };
        api.updateConfig = function (param, value) {
            if (AV.launchData) {
                if (param && typeof param === "object") {
                    for (var key in param) {
                        if (param.hasOwnProperty(key)) {
                            AV.launchData[key] = param[key]
                        }
                    }
                } else if (param && typeof param === "string") {
                    AV.launchData[param] = value
                } else {
                    return false
                }
            } else {
                return false
            }
        };
        api.getIsDirty = function () {
            return AV.paintWidgetInstance ? AV.paintWidgetInstance.dirty : false
        };
        api.getActionList = function () {
            if (AV.paintWidgetInstance) {
                mediator.trigger("tool:commit");
                return AV.paintWidgetInstance.actions.exportJSON(true)
            } else {
                return undefined
            }
        };
        api.disableControls = function () {
            AV.controlsWidgetInstance.layoutNotify(AV.launchData["openType"], "disableControls")
        };
        api.enableControls = function () {
            AV.controlsWidgetInstance.layoutNotify(AV.launchData["openType"], "enableControls")
        };
        api.on = function (eventString, handlerFunc) {
            if (mediator && eventString && handlerFunc && typeof handlerFunc === "function") {
                mediator.on(eventString, handlerFunc)
            }
        };
        api.off = function (eventString, handlerFunc) {
            if (mediator && eventString && handlerFunc && typeof handlerFunc === "function") {
                mediator.off(eventString, handlerFunc)
            }
        };
        return api
    };
    AV.loadStageFinal = function () {
        AV.feather_loaded = true;
        if (typeof AV.launchData["onLoad"] === "function") {
            AV.launchData["onLoad"]()
        }
    };
    AV.featherSupported = function () {
        return AV.featherHtmlOk() || AV.featherFlashOk() || AV.launchData["forceSupport"]
    };
    AV.featherFlashOk = function () {
        if (AV.launchData["forceFlash"]) {
            return true
        }
        return avpw_swfobject && avpw_swfobject.hasFlashPlayerVersion(AV.build.MINIMUM_FLASH_PLAYER_VERSION)
    };
    AV.featherHtmlOk = function () {
        if (AV.launchData["forceFlash"]) {
            return false
        }
        var canvasSupported = !! document.createElement("canvas").getContext;
        var postMessageSupported = typeof window.postMessage === "function";
        return canvasSupported && postMessageSupported
    };
    AV.getFlashMovie = function (name) {
        var mov = window[name] || document[name];
        return mov
    };
    AV.msie = function () {
        var undef, v = 3,
            div = document.createElement("div"),
            all = div.getElementsByTagName("i");
        while (div.innerHTML = "<!--[if gt IE " + ++v + "]><i></i><![endif]-->", all[0]) {}
        return v > 4 ? v : undef
    }();
    AV.firefox = function () {
        var ff;
        if (window.navigator.product === "Gecko") {
            ff = navigator.userAgent.split("Firefox/")[1];
            ff = parseInt(ff, 10)
        }
        return ff
    }();
    AV.PAGE_WIDTH = 360;
    AV.setPageWidth = function (dim) {
        AV.PAGE_WIDTH = dim
    };
    return exports
})(this, typeof window !== "undefined" ? window : {}, typeof document !== "undefined" ? document : {});
(function (AV, window, document) {
    AV.support = function (w) {
        var ua = w.navigator.userAgent;
        var deviceWidth = w.screen.width;
        var deviceHeight = w.screen.height;
        var webkit_users = {
            0: /Android/i,
            1: /webOS/i,
            2: /iPhone/i,
            3: /iPod/i,
            4: /BlackBerry/i,
            5: /iPad/i
        };
        var device;
        var is_knownMobileWebkit = 0;
        var is_appleWebkit = 0;
        var is_android = 0;
        var android_version = 0;
        for (var key in webkit_users) {
            if (ua.match(webkit_users[key])) {
                is_knownMobileWebkit = 1;
                device = parseInt(key)
            }
        }
        if (ua.match(/AppleWebKit/i)) {
            is_appleWebkit = 1
        }
        if (device === 0) {
            is_android = 1
        }
        if (is_android === 1) {
            var android_platform = ua.match(/Android [0-9].[0-9]/).toString();
            if (android_platform) {
                android_version = parseFloat(android_platform.split("Android ")[1])
            }
        }
        var api = {};
        api.isAppleWebkit = function () {
            return is_appleWebkit === 1
        };
        api.isMobileWebkit = function () {
            return is_appleWebkit === 1 && deviceWidth && (deviceWidth <= 480 || android_version > 0 && android_version <= 2.3)
        };
        api.isIPhoneOrIPod = function () {
            return device === 2 || device === 3
        };
        api.isAndroid = function () {
            return is_android === 1
        };
        api.getAndroidVersion = function () {
            return android_version
        };
        api.getVendorProperty = function () {
            var savedProperties = {};
            var getProperty = function (element, prop) {
                var prefixes = ["webkit", "ms", "Moz", "O"];
                var pp, i, s = element.style;
                if (s[prop] !== undefined) return prop;
                prop = prop.charAt(0).toUpperCase() + prop.slice(1);
                for (i = 0; i < prefixes.length; i++) {
                    pp = prefixes[i] + prop;
                    if (s[pp] !== undefined) return pp
                }
            };
            return function (prop) {
                return savedProperties[prop] || (savedProperties[prop] = getProperty(document.createElement("div"), prop))
            }
        }();
        return api
    }(window)
})(window["AV"] || (window["AV"] = {}), window, document);