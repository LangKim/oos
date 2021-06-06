// Avoid `console` errors in browsers that lack a console.

(function () {

    var method;

    var noop = function noop() {};

    var methods = [

        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',

        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',

        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',

        'timeStamp', 'trace', 'warn'

    ];

    var length = methods.length;

    var console = (window.console = window.console || {});

    while (length--) {

        method = methods[length];

        // Only stub undefined methods.

        if (!console[method]) {

            console[method] = noop;

        }

    }

}());

/*! Magnific Popup - v1.0.0 - 2014-12-12

 * http://dimsemenov.com/plugins/magnific-popup/

 * Copyright (c) 2014 Dmitry Semenov; */

(function (e) {

    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? e(require("jquery")) : e(window.jQuery || window.Zepto)

})(function (e) {

    var t, n, i, o, r, a, s, l = "Close",

        c = "BeforeClose",

        d = "AfterClose",

        u = "BeforeAppend",

        p = "MarkupParse",

        f = "Open",

        m = "Change",

        g = "mfp",

        h = "." + g,

        v = "mfp-ready",

        C = "mfp-removing",

        y = "mfp-prevent-close",

        w = function () {},

        b = !!window.jQuery,

        I = e(window),

        x = function (e, n) {

            t.ev.on(g + e + h, n)

        },

        k = function (t, n, i, o) {

            var r = document.createElement("div");

            return r.className = "mfp-" + t, i && (r.innerHTML = i), o ? n && n.appendChild(r) : (r = e(r), n && r.appendTo(n)), r

        },

        T = function (n, i) {

            t.ev.triggerHandler(g + n, i), t.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1), t.st.callbacks[n] && t.st.callbacks[n].apply(t, e.isArray(i) ? i : [i]))

        },

        E = function (n) {

            return n === s && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), s = n), t.currTemplate.closeBtn

        },

        _ = function () {

            e.magnificPopup.instance || (t = new w, t.init(), e.magnificPopup.instance = t)

        },

        S = function () {

            var e = document.createElement("p").style,

                t = ["ms", "O", "Moz", "Webkit"];

            if (void 0 !== e.transition) return !0;

            for (; t.length;)

                if (t.pop() + "Transition" in e) return !0;

            return !1

        };

    w.prototype = {

        constructor: w,

        init: function () {

            var n = navigator.appVersion;

            t.isIE7 = -1 !== n.indexOf("MSIE 7."), t.isIE8 = -1 !== n.indexOf("MSIE 8."), t.isLowIE = t.isIE7 || t.isIE8, t.isAndroid = /android/gi.test(n), t.isIOS = /iphone|ipad|ipod/gi.test(n), t.supportsTransition = S(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), o = e(document), t.popupsCache = {}

        },

        open: function (n) {

            i || (i = e(document.body));

            var r;

            if (n.isObj === !1) {

                t.items = n.items.toArray(), t.index = 0;

                var s, l = n.items;

                for (r = 0; l.length > r; r++)

                    if (s = l[r], s.parsed && (s = s.el[0]), s === n.el[0]) {

                        t.index = r;

                        break

                    }

            } else t.items = e.isArray(n.items) ? n.items : [n.items], t.index = n.index || 0;

            if (t.isOpen) return t.updateItemHTML(), void 0;

            t.types = [], a = "", t.ev = n.mainEl && n.mainEl.length ? n.mainEl.eq(0) : o, n.key ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}), t.currTemplate = t.popupsCache[n.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, n), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = k("bg").on("click" + h, function () {

                t.close()

            }), t.wrap = k("wrap").attr("tabindex", -1).on("click" + h, function (e) {

                t._checkIfClose(e.target) && t.close()

            }), t.container = k("container", t.wrap)), t.contentContainer = k("content"), t.st.preloader && (t.preloader = k("preloader", t.container, t.st.tLoading));

            var c = e.magnificPopup.modules;

            for (r = 0; c.length > r; r++) {

                var d = c[r];

                d = d.charAt(0).toUpperCase() + d.slice(1), t["init" + d].call(t)

            }

            T("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (x(p, function (e, t, n, i) {

                n.close_replaceWith = E(i.type)

            }), a += " mfp-close-btn-in") : t.wrap.append(E())), t.st.alignTop && (a += " mfp-align-top"), t.fixedContentPos ? t.wrap.css({

                overflow: t.st.overflowY,

                overflowX: "hidden",

                overflowY: t.st.overflowY

            }) : t.wrap.css({

                top: I.scrollTop(),

                position: "absolute"

            }), (t.st.fixedBgPos === !1 || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({

                height: o.height(),

                position: "absolute"

            }), t.st.enableEscapeKey && o.on("keyup" + h, function (e) {

                27 === e.keyCode && t.close()

            }), I.on("resize" + h, function () {

                t.updateSize()

            }), t.st.closeOnContentClick || (a += " mfp-auto-cursor"), a && t.wrap.addClass(a);

            var u = t.wH = I.height(),

                m = {};

            if (t.fixedContentPos && t._hasScrollBar(u)) {

                var g = t._getScrollbarSize();

                g && (m.marginRight = g)

            }

            t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : m.overflow = "hidden");

            var C = t.st.mainClass;

            return t.isIE7 && (C += " mfp-ie7"), C && t._addClassToMFP(C), t.updateItemHTML(), T("BuildControls"), e("html").css(m), t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || i), t._lastFocusedEl = document.activeElement, setTimeout(function () {

                t.content ? (t._addClassToMFP(v), t._setFocus()) : t.bgOverlay.addClass(v), o.on("focusin" + h, t._onFocusIn)

            }, 16), t.isOpen = !0, t.updateSize(u), T(f), n

        },

        close: function () {

            t.isOpen && (T(c), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(C), setTimeout(function () {

                t._close()

            }, t.st.removalDelay)) : t._close())

        },

        _close: function () {

            T(l);

            var n = C + " " + v + " ";

            if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (n += t.st.mainClass + " "), t._removeClassFromMFP(n), t.fixedContentPos) {

                var i = {

                    marginRight: ""

                };

                t.isIE7 ? e("body, html").css("overflow", "") : i.overflow = "", e("html").css(i)

            }

            o.off("keyup" + h + " focusin" + h), t.ev.off(h), t.wrap.attr("class", "mfp-wrap").removeAttr("style"), t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), !t.st.showCloseBtn || t.st.closeBtnInside && t.currTemplate[t.currItem.type] !== !0 || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, T(d)

        },

        updateSize: function (e) {

            if (t.isIOS) {

                var n = document.documentElement.clientWidth / window.innerWidth,

                    i = window.innerHeight * n;

                t.wrap.css("height", i), t.wH = i

            } else t.wH = e || I.height();

            t.fixedContentPos || t.wrap.css("height", t.wH), T("Resize")

        },

        updateItemHTML: function () {

            var n = t.items[t.index];

            t.contentContainer.detach(), t.content && t.content.detach(), n.parsed || (n = t.parseEl(t.index));

            var i = n.type;

            if (T("BeforeChange", [t.currItem ? t.currItem.type : "", i]), t.currItem = n, !t.currTemplate[i]) {

                var o = t.st[i] ? t.st[i].markup : !1;

                T("FirstMarkupParse", o), t.currTemplate[i] = o ? e(o) : !0

            }

            r && r !== n.type && t.container.removeClass("mfp-" + r + "-holder");

            var a = t["get" + i.charAt(0).toUpperCase() + i.slice(1)](n, t.currTemplate[i]);

            t.appendContent(a, i), n.preloaded = !0, T(m, n), r = n.type, t.container.prepend(t.contentContainer), T("AfterChange")

        },

        appendContent: function (e, n) {

            t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && t.currTemplate[n] === !0 ? t.content.find(".mfp-close").length || t.content.append(E()) : t.content = e : t.content = "", T(u), t.container.addClass("mfp-" + n + "-holder"), t.contentContainer.append(t.content)

        },

        parseEl: function (n) {

            var i, o = t.items[n];

            if (o.tagName ? o = {

                    el: e(o)

                } : (i = o.type, o = {

                    data: o,

                    src: o.src

                }), o.el) {

                for (var r = t.types, a = 0; r.length > a; a++)

                    if (o.el.hasClass("mfp-" + r[a])) {

                        i = r[a];

                        break

                    }

                o.src = o.el.attr("data-mfp-src"), o.src || (o.src = o.el.attr("href"))

            }

            return o.type = i || t.st.type || "inline", o.index = n, o.parsed = !0, t.items[n] = o
