var Yu = Object.defineProperty;
var qu = (n, e, t) => e in n ? Yu(n, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : n[e] = t;
var Pe = (n, e, t) => qu(n, typeof e != "symbol" ? e + "" : e, t);
(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload"))
        return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]'))
        i(s);
    new MutationObserver(s => {
        for (const r of s)
            if (r.type === "childList")
                for (const a of r.addedNodes)
                    a.tagName === "LINK" && a.rel === "modulepreload" && i(a)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function t(s) {
        const r = {};
        return s.integrity && (r.integrity = s.integrity),
        s.referrerPolicy && (r.referrerPolicy = s.referrerPolicy),
        s.crossOrigin === "use-credentials" ? r.credentials = "include" : s.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin",
        r
    }
    function i(s) {
        if (s.ep)
            return;
        s.ep = !0;
        const r = t(s);
        fetch(s.href, r)
    }
}
)();
const ia = n => {
    "ontouchstart"in window || navigator.maxTouchPoints || n()
}
  , S = {
    navbar: ".navbar",
    navbarLogo: ".navbar__logo",
    navbarTgl: ".navbar__toggle",
    navbarTglTxt: ".navbar__toggle-text",
    navbarCloseBtn: ".navbar__close-btn",
    navbarCloseBtnValue: ".navbar__close-btn-text",
    navbarMenu: ".navbar__menu",
    navItem: ".nav-item",
    navItemValue: ".nav-item__value",
    navbarOverlay: ".navbar__menu-overlay",
    navbarSocial: ".navbar__menu-social",
    navbarSocialItem: ".navbar__menu-social-item",
    heroCanvas: ".hero__bg-canvas",
    heroPlane: ".hero__bg-plane",
    wrapper: ".wrapper",
    main: ".main",
    about: ".about",
    contacts: ".contacts",
    hero: ".hero",
    heroBg: ".hero__bg",
    intro: ".intro",
    introtext: ".about__intro",
    introTitle: ".about__intro-title",
    aboutTrg: ".about_trg",
    loader: ".loader",
    loaderIndicator: ".loader__indicator",
    loaderLogoOverlay: ".loader__logo-overlay",
    loaderLogoSvg: ".loader__logo-svg",
    viewTransition: ".view-transition",
    casesTransition: ".cases-transition",
    socialLinks: ".social",
    socialLinkItem: ".social .social-item",
    socialLinkValue: ".social-item__value",
    quote: ".quote",
    cases: ".cases",
    casesInnerBox: ".cases__content",
    casesList: ".cases-list",
    casesContent: ".cases-list__content",
    caseItem: ".case",
    caseInfo: ".case__info",
    caseExtra: ".case__extra",
    caseHead: ".case__head",
    caseTitle: ".case__title",
    caseSubtitle: ".case__subtitle",
    caseContent: ".case__content",
    caseDescription: ".case__description",
    caseDescriptionText: ".case__description-text",
    caseMeta: ".case__meta",
    caseMetaDate: ".case__meta-date",
    caseMetaType: ".case__meta-type",
    caseLink: ".case__link",
    casesNav: ".cases-nav",
    casesNavBtn: ".cases__nav-btn",
    casesNavBtnNext: ".cases__nav-btn_next",
    casesNavBtnPrev: ".cases__nav-btn_prev",
    casesNavBtnTitle: ".cases__nav-title",
    casesNavBtnAction: ".cases__nav-action",
    casesNavBtnNextTitle: ".cases__nav-btn_next .cases__nav-title",
    casesNavBtnPrevTitle: ".cases__nav-btn_prev .cases__nav-title",
    gallery: ".case__gallery",
    galleryContent: ".cases__gallery-content",
    galleryItem: ".case__gallery-item",
    galleryNextCase: ".case__gallery-next",
    galleryNextCaseImg: ".case__gallery-next-img",
    galleryNextCaseTitle: ".case__gallery-next-title",
    galleryNextCaseSubtitle: ".case__gallery-next-subtitle",
    galleryNextCaseLink: ".case__gallery-next-link",
    title: ".title",
    introTitleShape: ".intro-title-shape",
    titleAbout: ".title-shape_about",
    titleContacts: ".title-shape_contacts",
    titleHome: ".title-shape_intro",
    titleShape: ".title-shape",
    titleWorks: ".title-shape_works",
    viewMod: ".view-mod",
    viewModBtn: ".view-mod__btn",
    workGridItem: ".grid-item",
    preview: ".preview",
    previewItem: ".preview-item",
    previewItemInfo: ".preview-item__info",
    previewItemBg: ".preview-item__bg",
    previewTitle: ".preview-item__title",
    previewSubtitle: ".preview-item__subtitle",
    previewBg: ".preview-item__bg",
    previewCover: ".preview-item__cover",
    previewSlide: ".preview-item__slide",
    previewOverlay: ".preview-item__overlay",
    effectUncover: "[data-hover-effect='uncover']",
    textElement: "[data-element='text']",
    textHover: "[data-interaction='text-hover']",
    uncoverWord: "[data-effect='uncover-word']",
    uncoverLine: "[data-effect='uncover-line']",
    uncoverOnScroll: "[data-effect='uncover-word-on-scroll']",
    splitWords: "[data-split-text='word']",
    splitLines: "[data-split-text='line']",
    contactForm: ".contacts__form",
    contactBox: ".contacts__box",
    contactItem: ".contact-item",
    formTitle: ".form__title",
    inputBox: ".input-box",
    button: ".button",
    footer: ".footer"
};
function gi(n) {
    if (n === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return n
}
function sl(n, e) {
    n.prototype = Object.create(e.prototype),
    n.prototype.constructor = n,
    n.__proto__ = e
}
/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Ft = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
        lineHeight: ""
    }
}, ks = {
    duration: .5,
    overwrite: !1,
    delay: 0
}, Ra, Je, fe, Vt = 1e8, he = 1 / Vt, sa = Math.PI * 2, $u = sa / 4, ju = 0, rl = Math.sqrt, Qu = Math.cos, Ku = Math.sin, Ge = function(e) {
    return typeof e == "string"
}, xe = function(e) {
    return typeof e == "function"
}, Di = function(e) {
    return typeof e == "number"
}, Oa = function(e) {
    return typeof e > "u"
}, ci = function(e) {
    return typeof e == "object"
}, pt = function(e) {
    return e !== !1
}, La = function() {
    return typeof window < "u"
}, Or = function(e) {
    return xe(e) || Ge(e)
}, nl = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {}
, et = Array.isArray, ra = /(?:-?\.?\d|\.)+/gi, al = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, Ss = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Mn = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, ol = /[+-]=-?[.\d]+/, ll = /[^,'"\[\]\s]+/gi, Zu = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, me, si, na, ka, At = {}, on = {}, ul, hl = function(e) {
    return (on = hs(e, At)) && vt
}, Ia = function(e, t) {
    return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()")
}, vr = function(e, t) {
    return !t && console.warn(e)
}, cl = function(e, t) {
    return e && (At[e] = t) && on && (on[e] = t) || At
}, yr = function() {
    return 0
}, Ju = {
    suppressEvents: !0,
    isStart: !0,
    kill: !1
}, Qr = {
    suppressEvents: !0,
    kill: !1
}, eh = {
    suppressEvents: !0
}, za = {}, Bi = [], aa = {}, dl, St = {}, Fn = {}, oo = 30, Kr = [], Ba = "", Na = function(e) {
    var t = e[0], i, s;
    if (ci(t) || xe(t) || (e = [e]),
    !(i = (t._gsap || {}).harness)) {
        for (s = Kr.length; s-- && !Kr[s].targetTest(t); )
            ;
        i = Kr[s]
    }
    for (s = e.length; s--; )
        e[s] && (e[s]._gsap || (e[s]._gsap = new Il(e[s],i))) || e.splice(s, 1);
    return e
}, ss = function(e) {
    return e._gsap || Na(Ut(e))[0]._gsap
}, fl = function(e, t, i) {
    return (i = e[t]) && xe(i) ? e[t]() : Oa(i) && e.getAttribute && e.getAttribute(t) || i
}, gt = function(e, t) {
    return (e = e.split(",")).forEach(t) || e
}, Te = function(e) {
    return Math.round(e * 1e5) / 1e5 || 0
}, Ue = function(e) {
    return Math.round(e * 1e7) / 1e7 || 0
}, Ms = function(e, t) {
    var i = t.charAt(0)
      , s = parseFloat(t.substr(2));
    return e = parseFloat(e),
    i === "+" ? e + s : i === "-" ? e - s : i === "*" ? e * s : e / s
}, th = function(e, t) {
    for (var i = t.length, s = 0; e.indexOf(t[s]) < 0 && ++s < i; )
        ;
    return s < i
}, ln = function() {
    var e = Bi.length, t = Bi.slice(0), i, s;
    for (aa = {},
    Bi.length = 0,
    i = 0; i < e; i++)
        s = t[i],
        s && s._lazy && (s.render(s._lazy[0], s._lazy[1], !0)._lazy = 0)
}, pl = function(e, t, i, s) {
    Bi.length && !Je && ln(),
    e.render(t, i, Je && t < 0 && (e._initted || e._startAt)),
    Bi.length && !Je && ln()
}, gl = function(e) {
    var t = parseFloat(e);
    return (t || t === 0) && (e + "").match(ll).length < 2 ? t : Ge(e) ? e.trim() : e
}, ml = function(e) {
    return e
}, Wt = function(e, t) {
    for (var i in t)
        i in e || (e[i] = t[i]);
    return e
}, ih = function(e) {
    return function(t, i) {
        for (var s in i)
            s in t || s === "duration" && e || s === "ease" || (t[s] = i[s])
    }
}, hs = function(e, t) {
    for (var i in t)
        e[i] = t[i];
    return e
}, lo = function n(e, t) {
    for (var i in t)
        i !== "__proto__" && i !== "constructor" && i !== "prototype" && (e[i] = ci(t[i]) ? n(e[i] || (e[i] = {}), t[i]) : t[i]);
    return e
}, un = function(e, t) {
    var i = {}, s;
    for (s in e)
        s in t || (i[s] = e[s]);
    return i
}, ar = function(e) {
    var t = e.parent || me
      , i = e.keyframes ? ih(et(e.keyframes)) : Wt;
    if (pt(e.inherit))
        for (; t; )
            i(e, t.vars.defaults),
            t = t.parent || t._dp;
    return e
}, sh = function(e, t) {
    for (var i = e.length, s = i === t.length; s && i-- && e[i] === t[i]; )
        ;
    return i < 0
}, _l = function(e, t, i, s, r) {
    var a = e[s], o;
    if (r)
        for (o = t[r]; a && a[r] > o; )
            a = a._prev;
    return a ? (t._next = a._next,
    a._next = t) : (t._next = e[i],
    e[i] = t),
    t._next ? t._next._prev = t : e[s] = t,
    t._prev = a,
    t.parent = t._dp = e,
    t
}, xn = function(e, t, i, s) {
    i === void 0 && (i = "_first"),
    s === void 0 && (s = "_last");
    var r = t._prev
      , a = t._next;
    r ? r._next = a : e[i] === t && (e[i] = a),
    a ? a._prev = r : e[s] === t && (e[s] = r),
    t._next = t._prev = t.parent = null
}, Ui = function(e, t) {
    e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e),
    e._act = 0
}, rs = function(e, t) {
    if (e && (!t || t._end > e._dur || t._start < 0))
        for (var i = e; i; )
            i._dirty = 1,
            i = i.parent;
    return e
}, rh = function(e) {
    for (var t = e.parent; t && t.parent; )
        t._dirty = 1,
        t.totalDuration(),
        t = t.parent;
    return e
}, oa = function(e, t, i, s) {
    return e._startAt && (Je ? e._startAt.revert(Qr) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, s))
}, nh = function n(e) {
    return !e || e._ts && n(e.parent)
}, uo = function(e) {
    return e._repeat ? Is(e._tTime, e = e.duration() + e._rDelay) * e : 0
}, Is = function(e, t) {
    var i = Math.floor(e /= t);
    return e && i === e ? i - 1 : i
}, hn = function(e, t) {
    return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
}, Dn = function(e) {
    return e._end = Ue(e._start + (e._tDur / Math.abs(e._ts || e._rts || he) || 0))
}, wn = function(e, t) {
    var i = e._dp;
    return i && i.smoothChildTiming && e._ts && (e._start = Ue(i._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)),
    Dn(e),
    i._dirty || rs(i, e)),
    e
}, vl = function(e, t) {
    var i;
    if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (i = hn(e.rawTime(), t),
    (!t._dur || Pr(0, t.totalDuration(), i) - t._tTime > he) && t.render(i, !0)),
    rs(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
        if (e._dur < e.duration())
            for (i = e; i._dp; )
                i.rawTime() >= 0 && i.totalTime(i._tTime),
                i = i._dp;
        e._zTime = -he
    }
}, ni = function(e, t, i, s) {
    return t.parent && Ui(t),
    t._start = Ue((Di(i) ? i : i || e !== me ? kt(e, i, t) : e._time) + t._delay),
    t._end = Ue(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)),
    _l(e, t, "_first", "_last", e._sort ? "_start" : 0),
    la(t) || (e._recent = t),
    s || vl(e, t),
    e._ts < 0 && wn(e, e._tTime),
    e
}, yl = function(e, t) {
    return (At.ScrollTrigger || Ia("scrollTrigger", t)) && At.ScrollTrigger.create(t, e)
}, xl = function(e, t, i, s, r) {
    if (Ua(e, t, r),
    !e._initted)
        return 1;
    if (!i && e._pt && !Je && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && dl !== Ct.frame)
        return Bi.push(e),
        e._lazy = [r, s],
        1
}, ah = function n(e) {
    var t = e.parent;
    return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || n(t))
}, la = function(e) {
    var t = e.data;
    return t === "isFromStart" || t === "isStart"
}, oh = function(e, t, i, s) {
    var r = e.ratio, a = t < 0 || !t && (!e._start && ah(e) && !(!e._initted && la(e)) || (e._ts < 0 || e._dp._ts < 0) && !la(e)) ? 0 : 1, o = e._rDelay, l = 0, u, h, d;
    if (o && e._repeat && (l = Pr(0, e._tDur, t),
    h = Is(l, o),
    e._yoyo && h & 1 && (a = 1 - a),
    h !== Is(e._tTime, o) && (r = 1 - a,
    e.vars.repeatRefresh && e._initted && e.invalidate())),
    a !== r || Je || s || e._zTime === he || !t && e._zTime) {
        if (!e._initted && xl(e, t, s, i, l))
            return;
        for (d = e._zTime,
        e._zTime = t || (i ? he : 0),
        i || (i = t && !d),
        e.ratio = a,
        e._from && (a = 1 - a),
        e._time = 0,
        e._tTime = l,
        u = e._pt; u; )
            u.r(a, u.d),
            u = u._next;
        t < 0 && oa(e, t, i, !0),
        e._onUpdate && !i && Mt(e, "onUpdate"),
        l && e._repeat && !i && e.parent && Mt(e, "onRepeat"),
        (t >= e._tDur || t < 0) && e.ratio === a && (a && Ui(e, 1),
        !i && !Je && (Mt(e, a ? "onComplete" : "onReverseComplete", !0),
        e._prom && e._prom()))
    } else
        e._zTime || (e._zTime = t)
}, lh = function(e, t, i) {
    var s;
    if (i > t)
        for (s = e._first; s && s._start <= i; ) {
            if (s.data === "isPause" && s._start > t)
                return s;
            s = s._next
        }
    else
        for (s = e._last; s && s._start >= i; ) {
            if (s.data === "isPause" && s._start < t)
                return s;
            s = s._prev
        }
}, zs = function(e, t, i, s) {
    var r = e._repeat
      , a = Ue(t) || 0
      , o = e._tTime / e._tDur;
    return o && !s && (e._time *= a / e._dur),
    e._dur = a,
    e._tDur = r ? r < 0 ? 1e10 : Ue(a * (r + 1) + e._rDelay * r) : a,
    o > 0 && !s && wn(e, e._tTime = e._tDur * o),
    e.parent && Dn(e),
    i || rs(e.parent, e),
    e
}, ho = function(e) {
    return e instanceof lt ? rs(e) : zs(e, e._dur)
}, uh = {
    _start: 0,
    endTime: yr,
    totalDuration: yr
}, kt = function n(e, t, i) {
    var s = e.labels, r = e._recent || uh, a = e.duration() >= Vt ? r.endTime(!1) : e._dur, o, l, u;
    return Ge(t) && (isNaN(t) || t in s) ? (l = t.charAt(0),
    u = t.substr(-1) === "%",
    o = t.indexOf("="),
    l === "<" || l === ">" ? (o >= 0 && (t = t.replace(/=/, "")),
    (l === "<" ? r._start : r.endTime(r._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (u ? (o < 0 ? r : i).totalDuration() / 100 : 1)) : o < 0 ? (t in s || (s[t] = a),
    s[t]) : (l = parseFloat(t.charAt(o - 1) + t.substr(o + 1)),
    u && i && (l = l / 100 * (et(i) ? i[0] : i).totalDuration()),
    o > 1 ? n(e, t.substr(0, o - 1), i) + l : a + l)) : t == null ? a : +t
}, or = function(e, t, i) {
    var s = Di(t[1]), r = (s ? 2 : 1) + (e < 2 ? 0 : 1), a = t[r], o, l;
    if (s && (a.duration = t[1]),
    a.parent = i,
    e) {
        for (o = a,
        l = i; l && !("immediateRender"in o); )
            o = l.vars.defaults || {},
            l = pt(l.vars.inherit) && l.parent;
        a.immediateRender = pt(o.immediateRender),
        e < 2 ? a.runBackwards = 1 : a.startAt = t[r - 1]
    }
    return new Fe(t[0],a,t[r + 1])
}, Hi = function(e, t) {
    return e || e === 0 ? t(e) : t
}, Pr = function(e, t, i) {
    return i < e ? e : i > t ? t : i
}, Ze = function(e, t) {
    return !Ge(e) || !(t = Zu.exec(e)) ? "" : t[1]
}, hh = function(e, t, i) {
    return Hi(i, function(s) {
        return Pr(e, t, s)
    })
}, ua = [].slice, Dl = function(e, t) {
    return e && ci(e) && "length"in e && (!t && !e.length || e.length - 1 in e && ci(e[0])) && !e.nodeType && e !== si
}, ch = function(e, t, i) {
    return i === void 0 && (i = []),
    e.forEach(function(s) {
        var r;
        return Ge(s) && !t || Dl(s, 1) ? (r = i).push.apply(r, Ut(s)) : i.push(s)
    }) || i
}, Ut = function(e, t, i) {
    return fe && !t && fe.selector ? fe.selector(e) : Ge(e) && !i && (na || !Bs()) ? ua.call((t || ka).querySelectorAll(e), 0) : et(e) ? ch(e, i) : Dl(e) ? ua.call(e, 0) : e ? [e] : []
}, ha = function(e) {
    return e = Ut(e)[0] || vr("Invalid scope") || {},
    function(t) {
        var i = e.current || e.nativeElement || e;
        return Ut(t, i.querySelectorAll ? i : i === e ? vr("Invalid scope") || ka.createElement("div") : e)
    }
}, wl = function(e) {
    return e.sort(function() {
        return .5 - Math.random()
    })
}, bl = function(e) {
    if (xe(e))
        return e;
    var t = ci(e) ? e : {
        each: e
    }
      , i = ns(t.ease)
      , s = t.from || 0
      , r = parseFloat(t.base) || 0
      , a = {}
      , o = s > 0 && s < 1
      , l = isNaN(s) || o
      , u = t.axis
      , h = s
      , d = s;
    return Ge(s) ? h = d = {
        center: .5,
        edges: .5,
        end: 1
    }[s] || 0 : !o && l && (h = s[0],
    d = s[1]),
    function(f, c, g) {
        var p = (g || t).length, _ = a[p], y, D, m, v, x, P, T, E, C;
        if (!_) {
            if (C = t.grid === "auto" ? 0 : (t.grid || [1, Vt])[1],
            !C) {
                for (T = -Vt; T < (T = g[C++].getBoundingClientRect().left) && C < p; )
                    ;
                C < p && C--
            }
            for (_ = a[p] = [],
            y = l ? Math.min(C, p) * h - .5 : s % C,
            D = C === Vt ? 0 : l ? p * d / C - .5 : s / C | 0,
            T = 0,
            E = Vt,
            P = 0; P < p; P++)
                m = P % C - y,
                v = D - (P / C | 0),
                _[P] = x = u ? Math.abs(u === "y" ? v : m) : rl(m * m + v * v),
                x > T && (T = x),
                x < E && (E = x);
            s === "random" && wl(_),
            _.max = T - E,
            _.min = E,
            _.v = p = (parseFloat(t.amount) || parseFloat(t.each) * (C > p ? p - 1 : u ? u === "y" ? p / C : C : Math.max(C, p / C)) || 0) * (s === "edges" ? -1 : 1),
            _.b = p < 0 ? r - p : r,
            _.u = Ze(t.amount || t.each) || 0,
            i = i && p < 0 ? Ol(i) : i
        }
        return p = (_[f] - _.min) / _.max || 0,
        Ue(_.b + (i ? i(p) : p) * _.v) + _.u
    }
}, ca = function(e) {
    var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
    return function(i) {
        var s = Ue(Math.round(parseFloat(i) / e) * e * t);
        return (s - s % 1) / t + (Di(i) ? 0 : Ze(i))
    }
}, Tl = function(e, t) {
    var i = et(e), s, r;
    return !i && ci(e) && (s = i = e.radius || Vt,
    e.values ? (e = Ut(e.values),
    (r = !Di(e[0])) && (s *= s)) : e = ca(e.increment)),
    Hi(t, i ? xe(e) ? function(a) {
        return r = e(a),
        Math.abs(r - a) <= s ? r : a
    }
    : function(a) {
        for (var o = parseFloat(r ? a.x : a), l = parseFloat(r ? a.y : 0), u = Vt, h = 0, d = e.length, f, c; d--; )
            r ? (f = e[d].x - o,
            c = e[d].y - l,
            f = f * f + c * c) : f = Math.abs(e[d] - o),
            f < u && (u = f,
            h = d);
        return h = !s || u <= s ? e[h] : a,
        r || h === a || Di(a) ? h : h + Ze(a)
    }
    : ca(e))
}, Sl = function(e, t, i, s) {
    return Hi(et(e) ? !t : i === !0 ? !!(i = 0) : !s, function() {
        return et(e) ? e[~~(Math.random() * e.length)] : (i = i || 1e-5) && (s = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((e - i / 2 + Math.random() * (t - e + i * .99)) / i) * i * s) / s
    })
}, dh = function() {
    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
        t[i] = arguments[i];
    return function(s) {
        return t.reduce(function(r, a) {
            return a(r)
        }, s)
    }
}, fh = function(e, t) {
    return function(i) {
        return e(parseFloat(i)) + (t || Ze(i))
    }
}, ph = function(e, t, i) {
    return Cl(e, t, 0, 1, i)
}, El = function(e, t, i) {
    return Hi(i, function(s) {
        return e[~~t(s)]
    })
}, gh = function n(e, t, i) {
    var s = t - e;
    return et(e) ? El(e, n(0, e.length), t) : Hi(i, function(r) {
        return (s + (r - e) % s) % s + e
    })
}, mh = function n(e, t, i) {
    var s = t - e
      , r = s * 2;
    return et(e) ? El(e, n(0, e.length - 1), t) : Hi(i, function(a) {
        return a = (r + (a - e) % r) % r || 0,
        e + (a > s ? r - a : a)
    })
}, xr = function(e) {
    for (var t = 0, i = "", s, r, a, o; ~(s = e.indexOf("random(", t)); )
        a = e.indexOf(")", s),
        o = e.charAt(s + 7) === "[",
        r = e.substr(s + 7, a - s - 7).match(o ? ll : ra),
        i += e.substr(t, s - t) + Sl(o ? r : +r[0], o ? 0 : +r[1], +r[2] || 1e-5),
        t = a + 1;
    return i + e.substr(t, e.length - t)
}, Cl = function(e, t, i, s, r) {
    var a = t - e
      , o = s - i;
    return Hi(r, function(l) {
        return i + ((l - e) / a * o || 0)
    })
}, _h = function n(e, t, i, s) {
    var r = isNaN(e + t) ? 0 : function(c) {
        return (1 - c) * e + c * t
    }
    ;
    if (!r) {
        var a = Ge(e), o = {}, l, u, h, d, f;
        if (i === !0 && (s = 1) && (i = null),
        a)
            e = {
                p: e
            },
            t = {
                p: t
            };
        else if (et(e) && !et(t)) {
            for (h = [],
            d = e.length,
            f = d - 2,
            u = 1; u < d; u++)
                h.push(n(e[u - 1], e[u]));
            d--,
            r = function(g) {
                g *= d;
                var p = Math.min(f, ~~g);
                return h[p](g - p)
            }
            ,
            i = t
        } else
            s || (e = hs(et(e) ? [] : {}, e));
        if (!h) {
            for (l in t)
                Va.call(o, e, l, "get", t[l]);
            r = function(g) {
                return Ha(g, o) || (a ? e.p : e)
            }
        }
    }
    return Hi(i, r)
}, co = function(e, t, i) {
    var s = e.labels, r = Vt, a, o, l;
    for (a in s)
        o = s[a] - t,
        o < 0 == !!i && o && r > (o = Math.abs(o)) && (l = a,
        r = o);
    return l
}, Mt = function(e, t, i) {
    var s = e.vars, r = s[t], a = fe, o = e._ctx, l, u, h;
    if (r)
        return l = s[t + "Params"],
        u = s.callbackScope || e,
        i && Bi.length && ln(),
        o && (fe = o),
        h = l ? r.apply(u, l) : r.call(u),
        fe = a,
        h
}, Ks = function(e) {
    return Ui(e),
    e.scrollTrigger && e.scrollTrigger.kill(!!Je),
    e.progress() < 1 && Mt(e, "onInterrupt"),
    e
}, Es, Pl = [], Ml = function(e) {
    if (e)
        if (e = !e.name && e.default || e,
        La() || e.headless) {
            var t = e.name
              , i = xe(e)
              , s = t && !i && e.init ? function() {
                this._props = []
            }
            : e
              , r = {
                init: yr,
                render: Ha,
                add: Va,
                kill: Oh,
                modifier: Rh,
                rawVars: 0
            }
              , a = {
                targetTest: 0,
                get: 0,
                getSetter: Wa,
                aliases: {},
                register: 0
            };
            if (Bs(),
            e !== s) {
                if (St[t])
                    return;
                Wt(s, Wt(un(e, r), a)),
                hs(s.prototype, hs(r, un(e, a))),
                St[s.prop = t] = s,
                e.targetTest && (Kr.push(s),
                za[t] = 1),
                t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin"
            }
            cl(t, s),
            e.register && e.register(vt, s, mt)
        } else
            Pl.push(e)
}, ue = 255, Zs = {
    aqua: [0, ue, ue],
    lime: [0, ue, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, ue],
    navy: [0, 0, 128],
    white: [ue, ue, ue],
    olive: [128, 128, 0],
    yellow: [ue, ue, 0],
    orange: [ue, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [ue, 0, 0],
    pink: [ue, 192, 203],
    cyan: [0, ue, ue],
    transparent: [ue, ue, ue, 0]
}, An = function(e, t, i) {
    return e += e < 0 ? 1 : e > 1 ? -1 : 0,
    (e * 6 < 1 ? t + (i - t) * e * 6 : e < .5 ? i : e * 3 < 2 ? t + (i - t) * (2 / 3 - e) * 6 : t) * ue + .5 | 0
}, Fl = function(e, t, i) {
    var s = e ? Di(e) ? [e >> 16, e >> 8 & ue, e & ue] : 0 : Zs.black, r, a, o, l, u, h, d, f, c, g;
    if (!s) {
        if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)),
        Zs[e])
            s = Zs[e];
        else if (e.charAt(0) === "#") {
            if (e.length < 6 && (r = e.charAt(1),
            a = e.charAt(2),
            o = e.charAt(3),
            e = "#" + r + r + a + a + o + o + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")),
            e.length === 9)
                return s = parseInt(e.substr(1, 6), 16),
                [s >> 16, s >> 8 & ue, s & ue, parseInt(e.substr(7), 16) / 255];
            e = parseInt(e.substr(1), 16),
            s = [e >> 16, e >> 8 & ue, e & ue]
        } else if (e.substr(0, 3) === "hsl") {
            if (s = g = e.match(ra),
            !t)
                l = +s[0] % 360 / 360,
                u = +s[1] / 100,
                h = +s[2] / 100,
                a = h <= .5 ? h * (u + 1) : h + u - h * u,
                r = h * 2 - a,
                s.length > 3 && (s[3] *= 1),
                s[0] = An(l + 1 / 3, r, a),
                s[1] = An(l, r, a),
                s[2] = An(l - 1 / 3, r, a);
            else if (~e.indexOf("="))
                return s = e.match(al),
                i && s.length < 4 && (s[3] = 1),
                s
        } else
            s = e.match(ra) || Zs.transparent;
        s = s.map(Number)
    }
    return t && !g && (r = s[0] / ue,
    a = s[1] / ue,
    o = s[2] / ue,
    d = Math.max(r, a, o),
    f = Math.min(r, a, o),
    h = (d + f) / 2,
    d === f ? l = u = 0 : (c = d - f,
    u = h > .5 ? c / (2 - d - f) : c / (d + f),
    l = d === r ? (a - o) / c + (a < o ? 6 : 0) : d === a ? (o - r) / c + 2 : (r - a) / c + 4,
    l *= 60),
    s[0] = ~~(l + .5),
    s[1] = ~~(u * 100 + .5),
    s[2] = ~~(h * 100 + .5)),
    i && s.length < 4 && (s[3] = 1),
    s
}, Al = function(e) {
    var t = []
      , i = []
      , s = -1;
    return e.split(Ni).forEach(function(r) {
        var a = r.match(Ss) || [];
        t.push.apply(t, a),
        i.push(s += a.length + 1)
    }),
    t.c = i,
    t
}, fo = function(e, t, i) {
    var s = "", r = (e + s).match(Ni), a = t ? "hsla(" : "rgba(", o = 0, l, u, h, d;
    if (!r)
        return e;
    if (r = r.map(function(f) {
        return (f = Fl(f, t, 1)) && a + (t ? f[0] + "," + f[1] + "%," + f[2] + "%," + f[3] : f.join(",")) + ")"
    }),
    i && (h = Al(e),
    l = i.c,
    l.join(s) !== h.c.join(s)))
        for (u = e.replace(Ni, "1").split(Ss),
        d = u.length - 1; o < d; o++)
            s += u[o] + (~l.indexOf(o) ? r.shift() || a + "0,0,0,0)" : (h.length ? h : r.length ? r : i).shift());
    if (!u)
        for (u = e.split(Ni),
        d = u.length - 1; o < d; o++)
            s += u[o] + r[o];
    return s + u[d]
}, Ni = function() {
    var n = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
    for (e in Zs)
        n += "|" + e + "\\b";
    return new RegExp(n + ")","gi")
}(), vh = /hsl[a]?\(/, Rl = function(e) {
    var t = e.join(" "), i;
    if (Ni.lastIndex = 0,
    Ni.test(t))
        return i = vh.test(t),
        e[1] = fo(e[1], i),
        e[0] = fo(e[0], i, Al(e[1])),
        !0
}, Dr, Ct = function() {
    var n = Date.now, e = 500, t = 33, i = n(), s = i, r = 1e3 / 240, a = r, o = [], l, u, h, d, f, c, g = function p(_) {
        var y = n() - s, D = _ === !0, m, v, x, P;
        if ((y > e || y < 0) && (i += y - t),
        s += y,
        x = s - i,
        m = x - a,
        (m > 0 || D) && (P = ++d.frame,
        f = x - d.time * 1e3,
        d.time = x = x / 1e3,
        a += m + (m >= r ? 4 : r - m),
        v = 1),
        D || (l = u(p)),
        v)
            for (c = 0; c < o.length; c++)
                o[c](x, f, P, _)
    };
    return d = {
        time: 0,
        frame: 0,
        tick: function() {
            g(!0)
        },
        deltaRatio: function(_) {
            return f / (1e3 / (_ || 60))
        },
        wake: function() {
            ul && (!na && La() && (si = na = window,
            ka = si.document || {},
            At.gsap = vt,
            (si.gsapVersions || (si.gsapVersions = [])).push(vt.version),
            hl(on || si.GreenSockGlobals || !si.gsap && si || {}),
            Pl.forEach(Ml)),
            h = typeof requestAnimationFrame < "u" && requestAnimationFrame,
            l && d.sleep(),
            u = h || function(_) {
                return setTimeout(_, a - d.time * 1e3 + 1 | 0)
            }
            ,
            Dr = 1,
            g(2))
        },
        sleep: function() {
            (h ? cancelAnimationFrame : clearTimeout)(l),
            Dr = 0,
            u = yr
        },
        lagSmoothing: function(_, y) {
            e = _ || 1 / 0,
            t = Math.min(y || 33, e)
        },
        fps: function(_) {
            r = 1e3 / (_ || 240),
            a = d.time * 1e3 + r
        },
        add: function(_, y, D) {
            var m = y ? function(v, x, P, T) {
                _(v, x, P, T),
                d.remove(m)
            }
            : _;
            return d.remove(_),
            o[D ? "unshift" : "push"](m),
            Bs(),
            m
        },
        remove: function(_, y) {
            ~(y = o.indexOf(_)) && o.splice(y, 1) && c >= y && c--
        },
        _listeners: o
    },
    d
}(), Bs = function() {
    return !Dr && Ct.wake()
}, ie = {}, yh = /^[\d.\-M][\d.\-,\s]/, xh = /["']/g, Dh = function(e) {
    for (var t = {}, i = e.substr(1, e.length - 3).split(":"), s = i[0], r = 1, a = i.length, o, l, u; r < a; r++)
        l = i[r],
        o = r !== a - 1 ? l.lastIndexOf(",") : l.length,
        u = l.substr(0, o),
        t[s] = isNaN(u) ? u.replace(xh, "").trim() : +u,
        s = l.substr(o + 1).trim();
    return t
}, wh = function(e) {
    var t = e.indexOf("(") + 1
      , i = e.indexOf(")")
      , s = e.indexOf("(", t);
    return e.substring(t, ~s && s < i ? e.indexOf(")", i + 1) : i)
}, bh = function(e) {
    var t = (e + "").split("(")
      , i = ie[t[0]];
    return i && t.length > 1 && i.config ? i.config.apply(null, ~e.indexOf("{") ? [Dh(t[1])] : wh(e).split(",").map(gl)) : ie._CE && yh.test(e) ? ie._CE("", e) : i
}, Ol = function(e) {
    return function(t) {
        return 1 - e(1 - t)
    }
}, Ll = function n(e, t) {
    for (var i = e._first, s; i; )
        i instanceof lt ? n(i, t) : i.vars.yoyoEase && (!i._yoyo || !i._repeat) && i._yoyo !== t && (i.timeline ? n(i.timeline, t) : (s = i._ease,
        i._ease = i._yEase,
        i._yEase = s,
        i._yoyo = t)),
        i = i._next
}, ns = function(e, t) {
    return e && (xe(e) ? e : ie[e] || bh(e)) || t
}, gs = function(e, t, i, s) {
    i === void 0 && (i = function(l) {
        return 1 - t(1 - l)
    }
    ),
    s === void 0 && (s = function(l) {
        return l < .5 ? t(l * 2) / 2 : 1 - t((1 - l) * 2) / 2
    }
    );
    var r = {
        easeIn: t,
        easeOut: i,
        easeInOut: s
    }, a;
    return gt(e, function(o) {
        ie[o] = At[o] = r,
        ie[a = o.toLowerCase()] = i;
        for (var l in r)
            ie[a + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = ie[o + "." + l] = r[l]
    }),
    r
}, kl = function(e) {
    return function(t) {
        return t < .5 ? (1 - e(1 - t * 2)) / 2 : .5 + e((t - .5) * 2) / 2
    }
}, Rn = function n(e, t, i) {
    var s = t >= 1 ? t : 1
      , r = (i || (e ? .3 : .45)) / (t < 1 ? t : 1)
      , a = r / sa * (Math.asin(1 / s) || 0)
      , o = function(h) {
        return h === 1 ? 1 : s * Math.pow(2, -10 * h) * Ku((h - a) * r) + 1
    }
      , l = e === "out" ? o : e === "in" ? function(u) {
        return 1 - o(1 - u)
    }
    : kl(o);
    return r = sa / r,
    l.config = function(u, h) {
        return n(e, u, h)
    }
    ,
    l
}, On = function n(e, t) {
    t === void 0 && (t = 1.70158);
    var i = function(a) {
        return a ? --a * a * ((t + 1) * a + t) + 1 : 0
    }
      , s = e === "out" ? i : e === "in" ? function(r) {
        return 1 - i(1 - r)
    }
    : kl(i);
    return s.config = function(r) {
        return n(e, r)
    }
    ,
    s
};
gt("Linear,Quad,Cubic,Quart,Quint,Strong", function(n, e) {
    var t = e < 5 ? e + 1 : e;
    gs(n + ",Power" + (t - 1), e ? function(i) {
        return Math.pow(i, t)
    }
    : function(i) {
        return i
    }
    , function(i) {
        return 1 - Math.pow(1 - i, t)
    }, function(i) {
        return i < .5 ? Math.pow(i * 2, t) / 2 : 1 - Math.pow((1 - i) * 2, t) / 2
    })
});
ie.Linear.easeNone = ie.none = ie.Linear.easeIn;
gs("Elastic", Rn("in"), Rn("out"), Rn());
(function(n, e) {
    var t = 1 / e
      , i = 2 * t
      , s = 2.5 * t
      , r = function(o) {
        return o < t ? n * o * o : o < i ? n * Math.pow(o - 1.5 / e, 2) + .75 : o < s ? n * (o -= 2.25 / e) * o + .9375 : n * Math.pow(o - 2.625 / e, 2) + .984375
    };
    gs("Bounce", function(a) {
        return 1 - r(1 - a)
    }, r)
}
)(7.5625, 2.75);
gs("Expo", function(n) {
    return n ? Math.pow(2, 10 * (n - 1)) : 0
});
gs("Circ", function(n) {
    return -(rl(1 - n * n) - 1)
});
gs("Sine", function(n) {
    return n === 1 ? 1 : -Qu(n * $u) + 1
});
gs("Back", On("in"), On("out"), On());
ie.SteppedEase = ie.steps = At.SteppedEase = {
    config: function(e, t) {
        e === void 0 && (e = 1);
        var i = 1 / e
          , s = e + (t ? 0 : 1)
          , r = t ? 1 : 0
          , a = 1 - he;
        return function(o) {
            return ((s * Pr(0, a, o) | 0) + r) * i
        }
    }
};
ks.ease = ie["quad.out"];
gt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(n) {
    return Ba += n + "," + n + "Params,"
});
var Il = function(e, t) {
    this.id = ju++,
    e._gsap = this,
    this.target = e,
    this.harness = t,
    this.get = t ? t.get : fl,
    this.set = t ? t.getSetter : Wa
}
  , wr = function() {
    function n(t) {
        this.vars = t,
        this._delay = +t.delay || 0,
        (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0,
        this._yoyo = !!t.yoyo || !!t.yoyoEase),
        this._ts = 1,
        zs(this, +t.duration, 1, 1),
        this.data = t.data,
        fe && (this._ctx = fe,
        fe.data.push(this)),
        Dr || Ct.wake()
    }
    var e = n.prototype;
    return e.delay = function(i) {
        return i || i === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + i - this._delay),
        this._delay = i,
        this) : this._delay
    }
    ,
    e.duration = function(i) {
        return arguments.length ? this.totalDuration(this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i) : this.totalDuration() && this._dur
    }
    ,
    e.totalDuration = function(i) {
        return arguments.length ? (this._dirty = 0,
        zs(this, this._repeat < 0 ? i : (i - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
    }
    ,
    e.totalTime = function(i, s) {
        if (Bs(),
        !arguments.length)
            return this._tTime;
        var r = this._dp;
        if (r && r.smoothChildTiming && this._ts) {
            for (wn(this, i),
            !r._dp || r.parent || vl(r, this); r && r.parent; )
                r.parent._time !== r._start + (r._ts >= 0 ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0),
                r = r.parent;
            !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && i < this._tDur || this._ts < 0 && i > 0 || !this._tDur && !i) && ni(this._dp, this, this._start - this._delay)
        }
        return (this._tTime !== i || !this._dur && !s || this._initted && Math.abs(this._zTime) === he || !i && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = i),
        pl(this, i, s)),
        this
    }
    ,
    e.time = function(i, s) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), i + uo(this)) % (this._dur + this._rDelay) || (i ? this._dur : 0), s) : this._time
    }
    ,
    e.totalProgress = function(i, s) {
        return arguments.length ? this.totalTime(this.totalDuration() * i, s) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0
    }
    ,
    e.progress = function(i, s) {
        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) + uo(this), s) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0
    }
    ,
    e.iteration = function(i, s) {
        var r = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (i - 1) * r, s) : this._repeat ? Is(this._tTime, r) + 1 : 1
    }
    ,
    e.timeScale = function(i, s) {
        if (!arguments.length)
            return this._rts === -he ? 0 : this._rts;
        if (this._rts === i)
            return this;
        var r = this.parent && this._ts ? hn(this.parent._time, this) : this._tTime;
        return this._rts = +i || 0,
        this._ts = this._ps || i === -he ? 0 : this._rts,
        this.totalTime(Pr(-Math.abs(this._delay), this._tDur, r), s !== !1),
        Dn(this),
        rh(this)
    }
    ,
    e.paused = function(i) {
        return arguments.length ? (this._ps !== i && (this._ps = i,
        i ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
        this._ts = this._act = 0) : (Bs(),
        this._ts = this._rts,
        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== he && (this._tTime -= he)))),
        this) : this._ps
    }
    ,
    e.startTime = function(i) {
        if (arguments.length) {
            this._start = i;
            var s = this.parent || this._dp;
            return s && (s._sort || !this.parent) && ni(s, this, i - this._delay),
            this
        }
        return this._start
    }
    ,
    e.endTime = function(i) {
        return this._start + (pt(i) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
    }
    ,
    e.rawTime = function(i) {
        var s = this.parent || this._dp;
        return s ? i && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? hn(s.rawTime(i), this) : this._tTime : this._tTime
    }
    ,
    e.revert = function(i) {
        i === void 0 && (i = eh);
        var s = Je;
        return Je = i,
        (this._initted || this._startAt) && (this.timeline && this.timeline.revert(i),
        this.totalTime(-.01, i.suppressEvents)),
        this.data !== "nested" && i.kill !== !1 && this.kill(),
        Je = s,
        this
    }
    ,
    e.globalTime = function(i) {
        for (var s = this, r = arguments.length ? i : s.rawTime(); s; )
            r = s._start + r / (Math.abs(s._ts) || 1),
            s = s._dp;
        return !this.parent && this._sat ? this._sat.globalTime(i) : r
    }
    ,
    e.repeat = function(i) {
        return arguments.length ? (this._repeat = i === 1 / 0 ? -2 : i,
        ho(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
    }
    ,
    e.repeatDelay = function(i) {
        if (arguments.length) {
            var s = this._time;
            return this._rDelay = i,
            ho(this),
            s ? this.time(s) : this
        }
        return this._rDelay
    }
    ,
    e.yoyo = function(i) {
        return arguments.length ? (this._yoyo = i,
        this) : this._yoyo
    }
    ,
    e.seek = function(i, s) {
        return this.totalTime(kt(this, i), pt(s))
    }
    ,
    e.restart = function(i, s) {
        return this.play().totalTime(i ? -this._delay : 0, pt(s))
    }
    ,
    e.play = function(i, s) {
        return i != null && this.seek(i, s),
        this.reversed(!1).paused(!1)
    }
    ,
    e.reverse = function(i, s) {
        return i != null && this.seek(i || this.totalDuration(), s),
        this.reversed(!0).paused(!1)
    }
    ,
    e.pause = function(i, s) {
        return i != null && this.seek(i, s),
        this.paused(!0)
    }
    ,
    e.resume = function() {
        return this.paused(!1)
    }
    ,
    e.reversed = function(i) {
        return arguments.length ? (!!i !== this.reversed() && this.timeScale(-this._rts || (i ? -he : 0)),
        this) : this._rts < 0
    }
    ,
    e.invalidate = function() {
        return this._initted = this._act = 0,
        this._zTime = -he,
        this
    }
    ,
    e.isActive = function() {
        var i = this.parent || this._dp, s = this._start, r;
        return !!(!i || this._ts && this._initted && i.isActive() && (r = i.rawTime(!0)) >= s && r < this.endTime(!0) - he)
    }
    ,
    e.eventCallback = function(i, s, r) {
        var a = this.vars;
        return arguments.length > 1 ? (s ? (a[i] = s,
        r && (a[i + "Params"] = r),
        i === "onUpdate" && (this._onUpdate = s)) : delete a[i],
        this) : a[i]
    }
    ,
    e.then = function(i) {
        var s = this;
        return new Promise(function(r) {
            var a = xe(i) ? i : ml
              , o = function() {
                var u = s.then;
                s.then = null,
                xe(a) && (a = a(s)) && (a.then || a === s) && (s.then = u),
                r(a),
                s.then = u
            };
            s._initted && s.totalProgress() === 1 && s._ts >= 0 || !s._tTime && s._ts < 0 ? o() : s._prom = o
        }
        )
    }
    ,
    e.kill = function() {
        Ks(this)
    }
    ,
    n
}();
Wt(wr.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -he,
    _prom: 0,
    _ps: !1,
    _rts: 1
});
var lt = function(n) {
    sl(e, n);
    function e(i, s) {
        var r;
        return i === void 0 && (i = {}),
        r = n.call(this, i) || this,
        r.labels = {},
        r.smoothChildTiming = !!i.smoothChildTiming,
        r.autoRemoveChildren = !!i.autoRemoveChildren,
        r._sort = pt(i.sortChildren),
        me && ni(i.parent || me, gi(r), s),
        i.reversed && r.reverse(),
        i.paused && r.paused(!0),
        i.scrollTrigger && yl(gi(r), i.scrollTrigger),
        r
    }
    var t = e.prototype;
    return t.to = function(s, r, a) {
        return or(0, arguments, this),
        this
    }
    ,
    t.from = function(s, r, a) {
        return or(1, arguments, this),
        this
    }
    ,
    t.fromTo = function(s, r, a, o) {
        return or(2, arguments, this),
        this
    }
    ,
    t.set = function(s, r, a) {
        return r.duration = 0,
        r.parent = this,
        ar(r).repeatDelay || (r.repeat = 0),
        r.immediateRender = !!r.immediateRender,
        new Fe(s,r,kt(this, a),1),
        this
    }
    ,
    t.call = function(s, r, a) {
        return ni(this, Fe.delayedCall(0, s, r), a)
    }
    ,
    t.staggerTo = function(s, r, a, o, l, u, h) {
        return a.duration = r,
        a.stagger = a.stagger || o,
        a.onComplete = u,
        a.onCompleteParams = h,
        a.parent = this,
        new Fe(s,a,kt(this, l)),
        this
    }
    ,
    t.staggerFrom = function(s, r, a, o, l, u, h) {
        return a.runBackwards = 1,
        ar(a).immediateRender = pt(a.immediateRender),
        this.staggerTo(s, r, a, o, l, u, h)
    }
    ,
    t.staggerFromTo = function(s, r, a, o, l, u, h, d) {
        return o.startAt = a,
        ar(o).immediateRender = pt(o.immediateRender),
        this.staggerTo(s, r, o, l, u, h, d)
    }
    ,
    t.render = function(s, r, a) {
        var o = this._time, l = this._dirty ? this.totalDuration() : this._tDur, u = this._dur, h = s <= 0 ? 0 : Ue(s), d = this._zTime < 0 != s < 0 && (this._initted || !u), f, c, g, p, _, y, D, m, v, x, P, T;
        if (this !== me && h > l && s >= 0 && (h = l),
        h !== this._tTime || a || d) {
            if (o !== this._time && u && (h += this._time - o,
            s += this._time - o),
            f = h,
            v = this._start,
            m = this._ts,
            y = !m,
            d && (u || (o = this._zTime),
            (s || !r) && (this._zTime = s)),
            this._repeat) {
                if (P = this._yoyo,
                _ = u + this._rDelay,
                this._repeat < -1 && s < 0)
                    return this.totalTime(_ * 100 + s, r, a);
                if (f = Ue(h % _),
                h === l ? (p = this._repeat,
                f = u) : (p = ~~(h / _),
                p && p === h / _ && (f = u,
                p--),
                f > u && (f = u)),
                x = Is(this._tTime, _),
                !o && this._tTime && x !== p && this._tTime - x * _ - this._dur <= 0 && (x = p),
                P && p & 1 && (f = u - f,
                T = 1),
                p !== x && !this._lock) {
                    var E = P && x & 1
                      , C = E === (P && p & 1);
                    if (p < x && (E = !E),
                    o = E ? 0 : h % u ? u : h,
                    this._lock = 1,
                    this.render(o || (T ? 0 : Ue(p * _)), r, !u)._lock = 0,
                    this._tTime = h,
                    !r && this.parent && Mt(this, "onRepeat"),
                    this.vars.repeatRefresh && !T && (this.invalidate()._lock = 1),
                    o && o !== this._time || y !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
                        return this;
                    if (u = this._dur,
                    l = this._tDur,
                    C && (this._lock = 2,
                    o = E ? u : -1e-4,
                    this.render(o, !0),
                    this.vars.repeatRefresh && !T && this.invalidate()),
                    this._lock = 0,
                    !this._ts && !y)
                        return this;
                    Ll(this, T)
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (D = lh(this, Ue(o), Ue(f)),
            D && (h -= f - (f = D._start))),
            this._tTime = h,
            this._time = f,
            this._act = !m,
            this._initted || (this._onUpdate = this.vars.onUpdate,
            this._initted = 1,
            this._zTime = s,
            o = 0),
            !o && f && !r && !p && (Mt(this, "onStart"),
            this._tTime !== h))
                return this;
            if (f >= o && s >= 0)
                for (c = this._first; c; ) {
                    if (g = c._next,
                    (c._act || f >= c._start) && c._ts && D !== c) {
                        if (c.parent !== this)
                            return this.render(s, r, a);
                        if (c.render(c._ts > 0 ? (f - c._start) * c._ts : (c._dirty ? c.totalDuration() : c._tDur) + (f - c._start) * c._ts, r, a),
                        f !== this._time || !this._ts && !y) {
                            D = 0,
                            g && (h += this._zTime = -he);
                            break
                        }
                    }
                    c = g
                }
            else {
                c = this._last;
                for (var w = s < 0 ? s : f; c; ) {
                    if (g = c._prev,
                    (c._act || w <= c._end) && c._ts && D !== c) {
                        if (c.parent !== this)
                            return this.render(s, r, a);
                        if (c.render(c._ts > 0 ? (w - c._start) * c._ts : (c._dirty ? c.totalDuration() : c._tDur) + (w - c._start) * c._ts, r, a || Je && (c._initted || c._startAt)),
                        f !== this._time || !this._ts && !y) {
                            D = 0,
                            g && (h += this._zTime = w ? -he : he);
                            break
                        }
                    }
                    c = g
                }
            }
            if (D && !r && (this.pause(),
            D.render(f >= o ? 0 : -he)._zTime = f >= o ? 1 : -1,
            this._ts))
                return this._start = v,
                Dn(this),
                this.render(s, r, a);
            this._onUpdate && !r && Mt(this, "onUpdate", !0),
            (h === l && this._tTime >= this.totalDuration() || !h && o) && (v === this._start || Math.abs(m) !== Math.abs(this._ts)) && (this._lock || ((s || !u) && (h === l && this._ts > 0 || !h && this._ts < 0) && Ui(this, 1),
            !r && !(s < 0 && !o) && (h || o || !l) && (Mt(this, h === l && s >= 0 ? "onComplete" : "onReverseComplete", !0),
            this._prom && !(h < l && this.timeScale() > 0) && this._prom())))
        }
        return this
    }
    ,
    t.add = function(s, r) {
        var a = this;
        if (Di(r) || (r = kt(this, r, s)),
        !(s instanceof wr)) {
            if (et(s))
                return s.forEach(function(o) {
                    return a.add(o, r)
                }),
                this;
            if (Ge(s))
                return this.addLabel(s, r);
            if (xe(s))
                s = Fe.delayedCall(0, s);
            else
                return this
        }
        return this !== s ? ni(this, s, r) : this
    }
    ,
    t.getChildren = function(s, r, a, o) {
        s === void 0 && (s = !0),
        r === void 0 && (r = !0),
        a === void 0 && (a = !0),
        o === void 0 && (o = -Vt);
        for (var l = [], u = this._first; u; )
            u._start >= o && (u instanceof Fe ? r && l.push(u) : (a && l.push(u),
            s && l.push.apply(l, u.getChildren(!0, r, a)))),
            u = u._next;
        return l
    }
    ,
    t.getById = function(s) {
        for (var r = this.getChildren(1, 1, 1), a = r.length; a--; )
            if (r[a].vars.id === s)
                return r[a]
    }
    ,
    t.remove = function(s) {
        return Ge(s) ? this.removeLabel(s) : xe(s) ? this.killTweensOf(s) : (xn(this, s),
        s === this._recent && (this._recent = this._last),
        rs(this))
    }
    ,
    t.totalTime = function(s, r) {
        return arguments.length ? (this._forcing = 1,
        !this._dp && this._ts && (this._start = Ue(Ct.time - (this._ts > 0 ? s / this._ts : (this.totalDuration() - s) / -this._ts))),
        n.prototype.totalTime.call(this, s, r),
        this._forcing = 0,
        this) : this._tTime
    }
    ,
    t.addLabel = function(s, r) {
        return this.labels[s] = kt(this, r),
        this
    }
    ,
    t.removeLabel = function(s) {
        return delete this.labels[s],
        this
    }
    ,
    t.addPause = function(s, r, a) {
        var o = Fe.delayedCall(0, r || yr, a);
        return o.data = "isPause",
        this._hasPause = 1,
        ni(this, o, kt(this, s))
    }
    ,
    t.removePause = function(s) {
        var r = this._first;
        for (s = kt(this, s); r; )
            r._start === s && r.data === "isPause" && Ui(r),
            r = r._next
    }
    ,
    t.killTweensOf = function(s, r, a) {
        for (var o = this.getTweensOf(s, a), l = o.length; l--; )
            Ri !== o[l] && o[l].kill(s, r);
        return this
    }
    ,
    t.getTweensOf = function(s, r) {
        for (var a = [], o = Ut(s), l = this._first, u = Di(r), h; l; )
            l instanceof Fe ? th(l._targets, o) && (u ? (!Ri || l._initted && l._ts) && l.globalTime(0) <= r && l.globalTime(l.totalDuration()) > r : !r || l.isActive()) && a.push(l) : (h = l.getTweensOf(o, r)).length && a.push.apply(a, h),
            l = l._next;
        return a
    }
    ,
    t.tweenTo = function(s, r) {
        r = r || {};
        var a = this, o = kt(a, s), l = r, u = l.startAt, h = l.onStart, d = l.onStartParams, f = l.immediateRender, c, g = Fe.to(a, Wt({
            ease: r.ease || "none",
            lazy: !1,
            immediateRender: !1,
            time: o,
            overwrite: "auto",
            duration: r.duration || Math.abs((o - (u && "time"in u ? u.time : a._time)) / a.timeScale()) || he,
            onStart: function() {
                if (a.pause(),
                !c) {
                    var _ = r.duration || Math.abs((o - (u && "time"in u ? u.time : a._time)) / a.timeScale());
                    g._dur !== _ && zs(g, _, 0, 1).render(g._time, !0, !0),
                    c = 1
                }
                h && h.apply(g, d || [])
            }
        }, r));
        return f ? g.render(0) : g
    }
    ,
    t.tweenFromTo = function(s, r, a) {
        return this.tweenTo(r, Wt({
            startAt: {
                time: kt(this, s)
            }
        }, a))
    }
    ,
    t.recent = function() {
        return this._recent
    }
    ,
    t.nextLabel = function(s) {
        return s === void 0 && (s = this._time),
        co(this, kt(this, s))
    }
    ,
    t.previousLabel = function(s) {
        return s === void 0 && (s = this._time),
        co(this, kt(this, s), 1)
    }
    ,
    t.currentLabel = function(s) {
        return arguments.length ? this.seek(s, !0) : this.previousLabel(this._time + he)
    }
    ,
    t.shiftChildren = function(s, r, a) {
        a === void 0 && (a = 0);
        for (var o = this._first, l = this.labels, u; o; )
            o._start >= a && (o._start += s,
            o._end += s),
            o = o._next;
        if (r)
            for (u in l)
                l[u] >= a && (l[u] += s);
        return rs(this)
    }
    ,
    t.invalidate = function(s) {
        var r = this._first;
        for (this._lock = 0; r; )
            r.invalidate(s),
            r = r._next;
        return n.prototype.invalidate.call(this, s)
    }
    ,
    t.clear = function(s) {
        s === void 0 && (s = !0);
        for (var r = this._first, a; r; )
            a = r._next,
            this.remove(r),
            r = a;
        return this._dp && (this._time = this._tTime = this._pTime = 0),
        s && (this.labels = {}),
        rs(this)
    }
    ,
    t.totalDuration = function(s) {
        var r = 0, a = this, o = a._last, l = Vt, u, h, d;
        if (arguments.length)
            return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -s : s));
        if (a._dirty) {
            for (d = a.parent; o; )
                u = o._prev,
                o._dirty && o.totalDuration(),
                h = o._start,
                h > l && a._sort && o._ts && !a._lock ? (a._lock = 1,
                ni(a, o, h - o._delay, 1)._lock = 0) : l = h,
                h < 0 && o._ts && (r -= h,
                (!d && !a._dp || d && d.smoothChildTiming) && (a._start += h / a._ts,
                a._time -= h,
                a._tTime -= h),
                a.shiftChildren(-h, !1, -1 / 0),
                l = 0),
                o._end > r && o._ts && (r = o._end),
                o = u;
            zs(a, a === me && a._time > r ? a._time : r, 1, 1),
            a._dirty = 0
        }
        return a._tDur
    }
    ,
    e.updateRoot = function(s) {
        if (me._ts && (pl(me, hn(s, me)),
        dl = Ct.frame),
        Ct.frame >= oo) {
            oo += Ft.autoSleep || 120;
            var r = me._first;
            if ((!r || !r._ts) && Ft.autoSleep && Ct._listeners.length < 2) {
                for (; r && !r._ts; )
                    r = r._next;
                r || Ct.sleep()
            }
        }
    }
    ,
    e
}(wr);
Wt(lt.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var Th = function(e, t, i, s, r, a, o) {
    var l = new mt(this._pt,e,t,0,1,Gl,null,r), u = 0, h = 0, d, f, c, g, p, _, y, D;
    for (l.b = i,
    l.e = s,
    i += "",
    s += "",
    (y = ~s.indexOf("random(")) && (s = xr(s)),
    a && (D = [i, s],
    a(D, e, t),
    i = D[0],
    s = D[1]),
    f = i.match(Mn) || []; d = Mn.exec(s); )
        g = d[0],
        p = s.substring(u, d.index),
        c ? c = (c + 1) % 5 : p.substr(-5) === "rgba(" && (c = 1),
        g !== f[h++] && (_ = parseFloat(f[h - 1]) || 0,
        l._pt = {
            _next: l._pt,
            p: p || h === 1 ? p : ",",
            s: _,
            c: g.charAt(1) === "=" ? Ms(_, g) - _ : parseFloat(g) - _,
            m: c && c < 4 ? Math.round : 0
        },
        u = Mn.lastIndex);
    return l.c = u < s.length ? s.substring(u, s.length) : "",
    l.fp = o,
    (ol.test(s) || y) && (l.e = 0),
    this._pt = l,
    l
}, Va = function(e, t, i, s, r, a, o, l, u, h) {
    xe(s) && (s = s(r || 0, e, a));
    var d = e[t], f = i !== "get" ? i : xe(d) ? u ? e[t.indexOf("set") || !xe(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](u) : e[t]() : d, c = xe(d) ? u ? Mh : Vl : Ga, g;
    if (Ge(s) && (~s.indexOf("random(") && (s = xr(s)),
    s.charAt(1) === "=" && (g = Ms(f, s) + (Ze(f) || 0),
    (g || g === 0) && (s = g))),
    !h || f !== s || da)
        return !isNaN(f * s) && s !== "" ? (g = new mt(this._pt,e,t,+f || 0,s - (f || 0),typeof d == "boolean" ? Ah : Ul,0,c),
        u && (g.fp = u),
        o && g.modifier(o, this, e),
        this._pt = g) : (!d && !(t in e) && Ia(t, s),
        Th.call(this, e, t, f, s, c, l || Ft.stringFilter, u))
}, Sh = function(e, t, i, s, r) {
    if (xe(e) && (e = lr(e, r, t, i, s)),
    !ci(e) || e.style && e.nodeType || et(e) || nl(e))
        return Ge(e) ? lr(e, r, t, i, s) : e;
    var a = {}, o;
    for (o in e)
        a[o] = lr(e[o], r, t, i, s);
    return a
}, zl = function(e, t, i, s, r, a) {
    var o, l, u, h;
    if (St[e] && (o = new St[e]).init(r, o.rawVars ? t[e] : Sh(t[e], s, r, a, i), i, s, a) !== !1 && (i._pt = l = new mt(i._pt,r,e,0,1,o.render,o,0,o.priority),
    i !== Es))
        for (u = i._ptLookup[i._targets.indexOf(r)],
        h = o._props.length; h--; )
            u[o._props[h]] = l;
    return o
}, Ri, da, Ua = function n(e, t, i) {
    var s = e.vars, r = s.ease, a = s.startAt, o = s.immediateRender, l = s.lazy, u = s.onUpdate, h = s.runBackwards, d = s.yoyoEase, f = s.keyframes, c = s.autoRevert, g = e._dur, p = e._startAt, _ = e._targets, y = e.parent, D = y && y.data === "nested" ? y.vars.targets : _, m = e._overwrite === "auto" && !Ra, v = e.timeline, x, P, T, E, C, w, L, F, O, I, z, k, B;
    if (v && (!f || !r) && (r = "none"),
    e._ease = ns(r, ks.ease),
    e._yEase = d ? Ol(ns(d === !0 ? r : d, ks.ease)) : 0,
    d && e._yoyo && !e._repeat && (d = e._yEase,
    e._yEase = e._ease,
    e._ease = d),
    e._from = !v && !!s.runBackwards,
    !v || f && !s.stagger) {
        if (F = _[0] ? ss(_[0]).harness : 0,
        k = F && s[F.prop],
        x = un(s, za),
        p && (p._zTime < 0 && p.progress(1),
        t < 0 && h && o && !c ? p.render(-1, !0) : p.revert(h && g ? Qr : Ju),
        p._lazy = 0),
        a) {
            if (Ui(e._startAt = Fe.set(_, Wt({
                data: "isStart",
                overwrite: !1,
                parent: y,
                immediateRender: !0,
                lazy: !p && pt(l),
                startAt: null,
                delay: 0,
                onUpdate: u && function() {
                    return Mt(e, "onUpdate")
                }
                ,
                stagger: 0
            }, a))),
            e._startAt._dp = 0,
            e._startAt._sat = e,
            t < 0 && (Je || !o && !c) && e._startAt.revert(Qr),
            o && g && t <= 0 && i <= 0) {
                t && (e._zTime = t);
                return
            }
        } else if (h && g && !p) {
            if (t && (o = !1),
            T = Wt({
                overwrite: !1,
                data: "isFromStart",
                lazy: o && !p && pt(l),
                immediateRender: o,
                stagger: 0,
                parent: y
            }, x),
            k && (T[F.prop] = k),
            Ui(e._startAt = Fe.set(_, T)),
            e._startAt._dp = 0,
            e._startAt._sat = e,
            t < 0 && (Je ? e._startAt.revert(Qr) : e._startAt.render(-1, !0)),
            e._zTime = t,
            !o)
                n(e._startAt, he, he);
            else if (!t)
                return
        }
        for (e._pt = e._ptCache = 0,
        l = g && pt(l) || l && !g,
        P = 0; P < _.length; P++) {
            if (C = _[P],
            L = C._gsap || Na(_)[P]._gsap,
            e._ptLookup[P] = I = {},
            aa[L.id] && Bi.length && ln(),
            z = D === _ ? P : D.indexOf(C),
            F && (O = new F).init(C, k || x, e, z, D) !== !1 && (e._pt = E = new mt(e._pt,C,O.name,0,1,O.render,O,0,O.priority),
            O._props.forEach(function(U) {
                I[U] = E
            }),
            O.priority && (w = 1)),
            !F || k)
                for (T in x)
                    St[T] && (O = zl(T, x, e, z, C, D)) ? O.priority && (w = 1) : I[T] = E = Va.call(e, C, T, "get", x[T], z, D, 0, s.stringFilter);
            e._op && e._op[P] && e.kill(C, e._op[P]),
            m && e._pt && (Ri = e,
            me.killTweensOf(C, I, e.globalTime(t)),
            B = !e.parent,
            Ri = 0),
            e._pt && l && (aa[L.id] = 1)
        }
        w && Wl(e),
        e._onInit && e._onInit(e)
    }
    e._onUpdate = u,
    e._initted = (!e._op || e._pt) && !B,
    f && t <= 0 && v.render(Vt, !0, !0)
}, Eh = function(e, t, i, s, r, a, o, l) {
    var u = (e._pt && e._ptCache || (e._ptCache = {}))[t], h, d, f, c;
    if (!u)
        for (u = e._ptCache[t] = [],
        f = e._ptLookup,
        c = e._targets.length; c--; ) {
            if (h = f[c][t],
            h && h.d && h.d._pt)
                for (h = h.d._pt; h && h.p !== t && h.fp !== t; )
                    h = h._next;
            if (!h)
                return da = 1,
                e.vars[t] = "+=0",
                Ua(e, o),
                da = 0,
                l ? vr(t + " not eligible for reset") : 1;
            u.push(h)
        }
    for (c = u.length; c--; )
        d = u[c],
        h = d._pt || d,
        h.s = (s || s === 0) && !r ? s : h.s + (s || 0) + a * h.c,
        h.c = i - h.s,
        d.e && (d.e = Te(i) + Ze(d.e)),
        d.b && (d.b = h.s + Ze(d.b))
}, Ch = function(e, t) {
    var i = e[0] ? ss(e[0]).harness : 0, s = i && i.aliases, r, a, o, l;
    if (!s)
        return t;
    r = hs({}, t);
    for (a in s)
        if (a in r)
            for (l = s[a].split(","),
            o = l.length; o--; )
                r[l[o]] = r[a];
    return r
}, Ph = function(e, t, i, s) {
    var r = t.ease || s || "power1.inOut", a, o;
    if (et(t))
        o = i[e] || (i[e] = []),
        t.forEach(function(l, u) {
            return o.push({
                t: u / (t.length - 1) * 100,
                v: l,
                e: r
            })
        });
    else
        for (a in t)
            o = i[a] || (i[a] = []),
            a === "ease" || o.push({
                t: parseFloat(e),
                v: t[a],
                e: r
            })
}, lr = function(e, t, i, s, r) {
    return xe(e) ? e.call(t, i, s, r) : Ge(e) && ~e.indexOf("random(") ? xr(e) : e
}, Bl = Ba + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", Nl = {};
gt(Bl + ",id,stagger,delay,duration,paused,scrollTrigger", function(n) {
    return Nl[n] = 1
});
var Fe = function(n) {
    sl(e, n);
    function e(i, s, r, a) {
        var o;
        typeof s == "number" && (r.duration = s,
        s = r,
        r = null),
        o = n.call(this, a ? s : ar(s)) || this;
        var l = o.vars, u = l.duration, h = l.delay, d = l.immediateRender, f = l.stagger, c = l.overwrite, g = l.keyframes, p = l.defaults, _ = l.scrollTrigger, y = l.yoyoEase, D = s.parent || me, m = (et(i) || nl(i) ? Di(i[0]) : "length"in s) ? [i] : Ut(i), v, x, P, T, E, C, w, L;
        if (o._targets = m.length ? Na(m) : vr("GSAP target " + i + " not found. https://gsap.com", !Ft.nullTargetWarn) || [],
        o._ptLookup = [],
        o._overwrite = c,
        g || f || Or(u) || Or(h)) {
            if (s = o.vars,
            v = o.timeline = new lt({
                data: "nested",
                defaults: p || {},
                targets: D && D.data === "nested" ? D.vars.targets : m
            }),
            v.kill(),
            v.parent = v._dp = gi(o),
            v._start = 0,
            f || Or(u) || Or(h)) {
                if (T = m.length,
                w = f && bl(f),
                ci(f))
                    for (E in f)
                        ~Bl.indexOf(E) && (L || (L = {}),
                        L[E] = f[E]);
                for (x = 0; x < T; x++)
                    P = un(s, Nl),
                    P.stagger = 0,
                    y && (P.yoyoEase = y),
                    L && hs(P, L),
                    C = m[x],
                    P.duration = +lr(u, gi(o), x, C, m),
                    P.delay = (+lr(h, gi(o), x, C, m) || 0) - o._delay,
                    !f && T === 1 && P.delay && (o._delay = h = P.delay,
                    o._start += h,
                    P.delay = 0),
                    v.to(C, P, w ? w(x, C, m) : 0),
                    v._ease = ie.none;
                v.duration() ? u = h = 0 : o.timeline = 0
            } else if (g) {
                ar(Wt(v.vars.defaults, {
                    ease: "none"
                })),
                v._ease = ns(g.ease || s.ease || "none");
                var F = 0, O, I, z;
                if (et(g))
                    g.forEach(function(k) {
                        return v.to(m, k, ">")
                    }),
                    v.duration();
                else {
                    P = {};
                    for (E in g)
                        E === "ease" || E === "easeEach" || Ph(E, g[E], P, g.easeEach);
                    for (E in P)
                        for (O = P[E].sort(function(k, B) {
                            return k.t - B.t
                        }),
                        F = 0,
                        x = 0; x < O.length; x++)
                            I = O[x],
                            z = {
                                ease: I.e,
                                duration: (I.t - (x ? O[x - 1].t : 0)) / 100 * u
                            },
                            z[E] = I.v,
                            v.to(m, z, F),
                            F += z.duration;
                    v.duration() < u && v.to({}, {
                        duration: u - v.duration()
                    })
                }
            }
            u || o.duration(u = v.duration())
        } else
            o.timeline = 0;
        return c === !0 && !Ra && (Ri = gi(o),
        me.killTweensOf(m),
        Ri = 0),
        ni(D, gi(o), r),
        s.reversed && o.reverse(),
        s.paused && o.paused(!0),
        (d || !u && !g && o._start === Ue(D._time) && pt(d) && nh(gi(o)) && D.data !== "nested") && (o._tTime = -he,
        o.render(Math.max(0, -h) || 0)),
        _ && yl(gi(o), _),
        o
    }
    var t = e.prototype;
    return t.render = function(s, r, a) {
        var o = this._time, l = this._tDur, u = this._dur, h = s < 0, d = s > l - he && !h ? l : s < he ? 0 : s, f, c, g, p, _, y, D, m, v;
        if (!u)
            oh(this, s, r, a);
        else if (d !== this._tTime || !s || a || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== h) {
            if (f = d,
            m = this.timeline,
            this._repeat) {
                if (p = u + this._rDelay,
                this._repeat < -1 && h)
                    return this.totalTime(p * 100 + s, r, a);
                if (f = Ue(d % p),
                d === l ? (g = this._repeat,
                f = u) : (g = ~~(d / p),
                g && g === Ue(d / p) && (f = u,
                g--),
                f > u && (f = u)),
                y = this._yoyo && g & 1,
                y && (v = this._yEase,
                f = u - f),
                _ = Is(this._tTime, p),
                f === o && !a && this._initted && g === _)
                    return this._tTime = d,
                    this;
                g !== _ && (m && this._yEase && Ll(m, y),
                this.vars.repeatRefresh && !y && !this._lock && this._time !== p && this._initted && (this._lock = a = 1,
                this.render(Ue(p * g), !0).invalidate()._lock = 0))
            }
            if (!this._initted) {
                if (xl(this, h ? s : f, a, r, d))
                    return this._tTime = 0,
                    this;
                if (o !== this._time && !(a && this.vars.repeatRefresh && g !== _))
                    return this;
                if (u !== this._dur)
                    return this.render(s, r, a)
            }
            if (this._tTime = d,
            this._time = f,
            !this._act && this._ts && (this._act = 1,
            this._lazy = 0),
            this.ratio = D = (v || this._ease)(f / u),
            this._from && (this.ratio = D = 1 - D),
            f && !o && !r && !g && (Mt(this, "onStart"),
            this._tTime !== d))
                return this;
            for (c = this._pt; c; )
                c.r(D, c.d),
                c = c._next;
            m && m.render(s < 0 ? s : m._dur * m._ease(f / this._dur), r, a) || this._startAt && (this._zTime = s),
            this._onUpdate && !r && (h && oa(this, s, r, a),
            Mt(this, "onUpdate")),
            this._repeat && g !== _ && this.vars.onRepeat && !r && this.parent && Mt(this, "onRepeat"),
            (d === this._tDur || !d) && this._tTime === d && (h && !this._onUpdate && oa(this, s, !0, !0),
            (s || !u) && (d === this._tDur && this._ts > 0 || !d && this._ts < 0) && Ui(this, 1),
            !r && !(h && !o) && (d || o || y) && (Mt(this, d === l ? "onComplete" : "onReverseComplete", !0),
            this._prom && !(d < l && this.timeScale() > 0) && this._prom()))
        }
        return this
    }
    ,
    t.targets = function() {
        return this._targets
    }
    ,
    t.invalidate = function(s) {
        return (!s || !this.vars.runBackwards) && (this._startAt = 0),
        this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0,
        this._ptLookup = [],
        this.timeline && this.timeline.invalidate(s),
        n.prototype.invalidate.call(this, s)
    }
    ,
    t.resetTo = function(s, r, a, o, l) {
        Dr || Ct.wake(),
        this._ts || this.play();
        var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts), h;
        return this._initted || Ua(this, u),
        h = this._ease(u / this._dur),
        Eh(this, s, r, a, o, h, u, l) ? this.resetTo(s, r, a, o, 1) : (wn(this, 0),
        this.parent || _l(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0),
        this.render(0))
    }
    ,
    t.kill = function(s, r) {
        if (r === void 0 && (r = "all"),
        !s && (!r || r === "all"))
            return this._lazy = this._pt = 0,
            this.parent ? Ks(this) : this;
        if (this.timeline) {
            var a = this.timeline.totalDuration();
            return this.timeline.killTweensOf(s, r, Ri && Ri.vars.overwrite !== !0)._first || Ks(this),
            this.parent && a !== this.timeline.totalDuration() && zs(this, this._dur * this.timeline._tDur / a, 0, 1),
            this
        }
        var o = this._targets, l = s ? Ut(s) : o, u = this._ptLookup, h = this._pt, d, f, c, g, p, _, y;
        if ((!r || r === "all") && sh(o, l))
            return r === "all" && (this._pt = 0),
            Ks(this);
        for (d = this._op = this._op || [],
        r !== "all" && (Ge(r) && (p = {},
        gt(r, function(D) {
            return p[D] = 1
        }),
        r = p),
        r = Ch(o, r)),
        y = o.length; y--; )
            if (~l.indexOf(o[y])) {
                f = u[y],
                r === "all" ? (d[y] = r,
                g = f,
                c = {}) : (c = d[y] = d[y] || {},
                g = r);
                for (p in g)
                    _ = f && f[p],
                    _ && ((!("kill"in _.d) || _.d.kill(p) === !0) && xn(this, _, "_pt"),
                    delete f[p]),
                    c !== "all" && (c[p] = 1)
            }
        return this._initted && !this._pt && h && Ks(this),
        this
    }
    ,
    e.to = function(s, r) {
        return new e(s,r,arguments[2])
    }
    ,
    e.from = function(s, r) {
        return or(1, arguments)
    }
    ,
    e.delayedCall = function(s, r, a, o) {
        return new e(r,0,{
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: s,
            onComplete: r,
            onReverseComplete: r,
            onCompleteParams: a,
            onReverseCompleteParams: a,
            callbackScope: o
        })
    }
    ,
    e.fromTo = function(s, r, a) {
        return or(2, arguments)
    }
    ,
    e.set = function(s, r) {
        return r.duration = 0,
        r.repeatDelay || (r.repeat = 0),
        new e(s,r)
    }
    ,
    e.killTweensOf = function(s, r, a) {
        return me.killTweensOf(s, r, a)
    }
    ,
    e
}(wr);
Wt(Fe.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
});
gt("staggerTo,staggerFrom,staggerFromTo", function(n) {
    Fe[n] = function() {
        var e = new lt
          , t = ua.call(arguments, 0);
        return t.splice(n === "staggerFromTo" ? 5 : 4, 0, 0),
        e[n].apply(e, t)
    }
});
var Ga = function(e, t, i) {
    return e[t] = i
}
  , Vl = function(e, t, i) {
    return e[t](i)
}
  , Mh = function(e, t, i, s) {
    return e[t](s.fp, i)
}
  , Fh = function(e, t, i) {
    return e.setAttribute(t, i)
}
  , Wa = function(e, t) {
    return xe(e[t]) ? Vl : Oa(e[t]) && e.setAttribute ? Fh : Ga
}
  , Ul = function(e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t)
}
  , Ah = function(e, t) {
    return t.set(t.t, t.p, !!(t.s + t.c * e), t)
}
  , Gl = function(e, t) {
    var i = t._pt
      , s = "";
    if (!e && t.b)
        s = t.b;
    else if (e === 1 && t.e)
        s = t.e;
    else {
        for (; i; )
            s = i.p + (i.m ? i.m(i.s + i.c * e) : Math.round((i.s + i.c * e) * 1e4) / 1e4) + s,
            i = i._next;
        s += t.c
    }
    t.set(t.t, t.p, s, t)
}
  , Ha = function(e, t) {
    for (var i = t._pt; i; )
        i.r(e, i.d),
        i = i._next
}
  , Rh = function(e, t, i, s) {
    for (var r = this._pt, a; r; )
        a = r._next,
        r.p === s && r.modifier(e, t, i),
        r = a
}
  , Oh = function(e) {
    for (var t = this._pt, i, s; t; )
        s = t._next,
        t.p === e && !t.op || t.op === e ? xn(this, t, "_pt") : t.dep || (i = 1),
        t = s;
    return !i
}
  , Lh = function(e, t, i, s) {
    s.mSet(e, t, s.m.call(s.tween, i, s.mt), s)
}
  , Wl = function(e) {
    for (var t = e._pt, i, s, r, a; t; ) {
        for (i = t._next,
        s = r; s && s.pr > t.pr; )
            s = s._next;
        (t._prev = s ? s._prev : a) ? t._prev._next = t : r = t,
        (t._next = s) ? s._prev = t : a = t,
        t = i
    }
    e._pt = r
}
  , mt = function() {
    function n(t, i, s, r, a, o, l, u, h) {
        this.t = i,
        this.s = r,
        this.c = a,
        this.p = s,
        this.r = o || Ul,
        this.d = l || this,
        this.set = u || Ga,
        this.pr = h || 0,
        this._next = t,
        t && (t._prev = this)
    }
    var e = n.prototype;
    return e.modifier = function(i, s, r) {
        this.mSet = this.mSet || this.set,
        this.set = Lh,
        this.m = i,
        this.mt = r,
        this.tween = s
    }
    ,
    n
}();
gt(Ba + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(n) {
    return za[n] = 1
});
At.TweenMax = At.TweenLite = Fe;
At.TimelineLite = At.TimelineMax = lt;
me = new lt({
    sortChildren: !1,
    defaults: ks,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
});
Ft.stringFilter = Rl;
var as = []
  , Zr = {}
  , kh = []
  , po = 0
  , Ih = 0
  , Ln = function(e) {
    return (Zr[e] || kh).map(function(t) {
        return t()
    })
}
  , fa = function() {
    var e = Date.now()
      , t = [];
    e - po > 2 && (Ln("matchMediaInit"),
    as.forEach(function(i) {
        var s = i.queries, r = i.conditions, a, o, l, u;
        for (o in s)
            a = si.matchMedia(s[o]).matches,
            a && (l = 1),
            a !== r[o] && (r[o] = a,
            u = 1);
        u && (i.revert(),
        l && t.push(i))
    }),
    Ln("matchMediaRevert"),
    t.forEach(function(i) {
        return i.onMatch(i, function(s) {
            return i.add(null, s)
        })
    }),
    po = e,
    Ln("matchMedia"))
}
  , Hl = function() {
    function n(t, i) {
        this.selector = i && ha(i),
        this.data = [],
        this._r = [],
        this.isReverted = !1,
        this.id = Ih++,
        t && this.add(t)
    }
    var e = n.prototype;
    return e.add = function(i, s, r) {
        xe(i) && (r = s,
        s = i,
        i = xe);
        var a = this
          , o = function() {
            var u = fe, h = a.selector, d;
            return u && u !== a && u.data.push(a),
            r && (a.selector = ha(r)),
            fe = a,
            d = s.apply(a, arguments),
            xe(d) && a._r.push(d),
            fe = u,
            a.selector = h,
            a.isReverted = !1,
            d
        };
        return a.last = o,
        i === xe ? o(a, function(l) {
            return a.add(null, l)
        }) : i ? a[i] = o : o
    }
    ,
    e.ignore = function(i) {
        var s = fe;
        fe = null,
        i(this),
        fe = s
    }
    ,
    e.getTweens = function() {
        var i = [];
        return this.data.forEach(function(s) {
            return s instanceof n ? i.push.apply(i, s.getTweens()) : s instanceof Fe && !(s.parent && s.parent.data === "nested") && i.push(s)
        }),
        i
    }
    ,
    e.clear = function() {
        this._r.length = this.data.length = 0
    }
    ,
    e.kill = function(i, s) {
        var r = this;
        if (i ? function() {
            for (var o = r.getTweens(), l = r.data.length, u; l--; )
                u = r.data[l],
                u.data === "isFlip" && (u.revert(),
                u.getChildren(!0, !0, !1).forEach(function(h) {
                    return o.splice(o.indexOf(h), 1)
                }));
            for (o.map(function(h) {
                return {
                    g: h._dur || h._delay || h._sat && !h._sat.vars.immediateRender ? h.globalTime(0) : -1 / 0,
                    t: h
                }
            }).sort(function(h, d) {
                return d.g - h.g || -1 / 0
            }).forEach(function(h) {
                return h.t.revert(i)
            }),
            l = r.data.length; l--; )
                u = r.data[l],
                u instanceof lt ? u.data !== "nested" && (u.scrollTrigger && u.scrollTrigger.revert(),
                u.kill()) : !(u instanceof Fe) && u.revert && u.revert(i);
            r._r.forEach(function(h) {
                return h(i, r)
            }),
            r.isReverted = !0
        }() : this.data.forEach(function(o) {
            return o.kill && o.kill()
        }),
        this.clear(),
        s)
            for (var a = as.length; a--; )
                as[a].id === this.id && as.splice(a, 1)
    }
    ,
    e.revert = function(i) {
        this.kill(i || {})
    }
    ,
    n
}()
  , zh = function() {
    function n(t) {
        this.contexts = [],
        this.scope = t,
        fe && fe.data.push(this)
    }
    var e = n.prototype;
    return e.add = function(i, s, r) {
        ci(i) || (i = {
            matches: i
        });
        var a = new Hl(0,r || this.scope), o = a.conditions = {}, l, u, h;
        fe && !a.selector && (a.selector = fe.selector),
        this.contexts.push(a),
        s = a.add("onMatch", s),
        a.queries = i;
        for (u in i)
            u === "all" ? h = 1 : (l = si.matchMedia(i[u]),
            l && (as.indexOf(a) < 0 && as.push(a),
            (o[u] = l.matches) && (h = 1),
            l.addListener ? l.addListener(fa) : l.addEventListener("change", fa)));
        return h && s(a, function(d) {
            return a.add(null, d)
        }),
        this
    }
    ,
    e.revert = function(i) {
        this.kill(i || {})
    }
    ,
    e.kill = function(i) {
        this.contexts.forEach(function(s) {
            return s.kill(i, !0)
        })
    }
    ,
    n
}()
  , cn = {
    registerPlugin: function() {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
            t[i] = arguments[i];
        t.forEach(function(s) {
            return Ml(s)
        })
    },
    timeline: function(e) {
        return new lt(e)
    },
    getTweensOf: function(e, t) {
        return me.getTweensOf(e, t)
    },
    getProperty: function(e, t, i, s) {
        Ge(e) && (e = Ut(e)[0]);
        var r = ss(e || {}).get
          , a = i ? ml : gl;
        return i === "native" && (i = ""),
        e && (t ? a((St[t] && St[t].get || r)(e, t, i, s)) : function(o, l, u) {
            return a((St[o] && St[o].get || r)(e, o, l, u))
        }
        )
    },
    quickSetter: function(e, t, i) {
        if (e = Ut(e),
        e.length > 1) {
            var s = e.map(function(h) {
                return vt.quickSetter(h, t, i)
            })
              , r = s.length;
            return function(h) {
                for (var d = r; d--; )
                    s[d](h)
            }
        }
        e = e[0] || {};
        var a = St[t]
          , o = ss(e)
          , l = o.harness && (o.harness.aliases || {})[t] || t
          , u = a ? function(h) {
            var d = new a;
            Es._pt = 0,
            d.init(e, i ? h + i : h, Es, 0, [e]),
            d.render(1, d),
            Es._pt && Ha(1, Es)
        }
        : o.set(e, l);
        return a ? u : function(h) {
            return u(e, l, i ? h + i : h, o, 1)
        }
    },
    quickTo: function(e, t, i) {
        var s, r = vt.to(e, hs((s = {},
        s[t] = "+=0.1",
        s.paused = !0,
        s), i || {})), a = function(l, u, h) {
            return r.resetTo(t, l, u, h)
        };
        return a.tween = r,
        a
    },
    isTweening: function(e) {
        return me.getTweensOf(e, !0).length > 0
    },
    defaults: function(e) {
        return e && e.ease && (e.ease = ns(e.ease, ks.ease)),
        lo(ks, e || {})
    },
    config: function(e) {
        return lo(Ft, e || {})
    },
    registerEffect: function(e) {
        var t = e.name
          , i = e.effect
          , s = e.plugins
          , r = e.defaults
          , a = e.extendTimeline;
        (s || "").split(",").forEach(function(o) {
            return o && !St[o] && !At[o] && vr(t + " effect requires " + o + " plugin.")
        }),
        Fn[t] = function(o, l, u) {
            return i(Ut(o), Wt(l || {}, r), u)
        }
        ,
        a && (lt.prototype[t] = function(o, l, u) {
            return this.add(Fn[t](o, ci(l) ? l : (u = l) && {}, this), u)
        }
        )
    },
    registerEase: function(e, t) {
        ie[e] = ns(t)
    },
    parseEase: function(e, t) {
        return arguments.length ? ns(e, t) : ie
    },
    getById: function(e) {
        return me.getById(e)
    },
    exportRoot: function(e, t) {
        e === void 0 && (e = {});
        var i = new lt(e), s, r;
        for (i.smoothChildTiming = pt(e.smoothChildTiming),
        me.remove(i),
        i._dp = 0,
        i._time = i._tTime = me._time,
        s = me._first; s; )
            r = s._next,
            (t || !(!s._dur && s instanceof Fe && s.vars.onComplete === s._targets[0])) && ni(i, s, s._start - s._delay),
            s = r;
        return ni(me, i, 0),
        i
    },
    context: function(e, t) {
        return e ? new Hl(e,t) : fe
    },
    matchMedia: function(e) {
        return new zh(e)
    },
    matchMediaRefresh: function() {
        return as.forEach(function(e) {
            var t = e.conditions, i, s;
            for (s in t)
                t[s] && (t[s] = !1,
                i = 1);
            i && e.revert()
        }) || fa()
    },
    addEventListener: function(e, t) {
        var i = Zr[e] || (Zr[e] = []);
        ~i.indexOf(t) || i.push(t)
    },
    removeEventListener: function(e, t) {
        var i = Zr[e]
          , s = i && i.indexOf(t);
        s >= 0 && i.splice(s, 1)
    },
    utils: {
        wrap: gh,
        wrapYoyo: mh,
        distribute: bl,
        random: Sl,
        snap: Tl,
        normalize: ph,
        getUnit: Ze,
        clamp: hh,
        splitColor: Fl,
        toArray: Ut,
        selector: ha,
        mapRange: Cl,
        pipe: dh,
        unitize: fh,
        interpolate: _h,
        shuffle: wl
    },
    install: hl,
    effects: Fn,
    ticker: Ct,
    updateRoot: lt.updateRoot,
    plugins: St,
    globalTimeline: me,
    core: {
        PropTween: mt,
        globals: cl,
        Tween: Fe,
        Timeline: lt,
        Animation: wr,
        getCache: ss,
        _removeLinkedListItem: xn,
        reverting: function() {
            return Je
        },
        context: function(e) {
            return e && fe && (fe.data.push(e),
            e._ctx = fe),
            fe
        },
        suppressOverwrites: function(e) {
            return Ra = e
        }
    }
};
gt("to,from,fromTo,delayedCall,set,killTweensOf", function(n) {
    return cn[n] = Fe[n]
});
Ct.add(lt.updateRoot);
Es = cn.to({}, {
    duration: 0
});
var Bh = function(e, t) {
    for (var i = e._pt; i && i.p !== t && i.op !== t && i.fp !== t; )
        i = i._next;
    return i
}
  , Nh = function(e, t) {
    var i = e._targets, s, r, a;
    for (s in t)
        for (r = i.length; r--; )
            a = e._ptLookup[r][s],
            a && (a = a.d) && (a._pt && (a = Bh(a, s)),
            a && a.modifier && a.modifier(t[s], e, i[r], s))
}
  , kn = function(e, t) {
    return {
        name: e,
        rawVars: 1,
        init: function(s, r, a) {
            a._onInit = function(o) {
                var l, u;
                if (Ge(r) && (l = {},
                gt(r, function(h) {
                    return l[h] = 1
                }),
                r = l),
                t) {
                    l = {};
                    for (u in r)
                        l[u] = t(r[u]);
                    r = l
                }
                Nh(o, r)
            }
        }
    }
}
  , vt = cn.registerPlugin({
    name: "attr",
    init: function(e, t, i, s, r) {
        var a, o, l;
        this.tween = i;
        for (a in t)
            l = e.getAttribute(a) || "",
            o = this.add(e, "setAttribute", (l || 0) + "", t[a], s, r, 0, 0, a),
            o.op = a,
            o.b = l,
            this._props.push(a)
    },
    render: function(e, t) {
        for (var i = t._pt; i; )
            Je ? i.set(i.t, i.p, i.b, i) : i.r(e, i.d),
            i = i._next
    }
}, {
    name: "endArray",
    init: function(e, t) {
        for (var i = t.length; i--; )
            this.add(e, i, e[i] || 0, t[i], 0, 0, 0, 0, 0, 1)
    }
}, kn("roundProps", ca), kn("modifiers"), kn("snap", Tl)) || cn;
Fe.version = lt.version = vt.version = "3.12.5";
ul = 1;
La() && Bs();
ie.Power0;
ie.Power1;
ie.Power2;
ie.Power3;
ie.Power4;
ie.Linear;
ie.Quad;
ie.Cubic;
ie.Quart;
ie.Quint;
ie.Strong;
ie.Elastic;
ie.Back;
ie.SteppedEase;
ie.Bounce;
ie.Sine;
var Vh = ie.Expo;
ie.Circ;
/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var go, Oi, Fs, Xa, ts, mo, Ya, Uh = function() {
    return typeof window < "u"
}, wi = {}, Zi = 180 / Math.PI, As = Math.PI / 180, xs = Math.atan2, _o = 1e8, qa = /([A-Z])/g, Gh = /(left|right|width|margin|padding|x)/i, Wh = /[\s,\(]\S/, ai = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
}, pa = function(e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
}, Hh = function(e, t) {
    return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
}, Xh = function(e, t) {
    return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t)
}, Yh = function(e, t) {
    var i = t.s + t.c * e;
    t.set(t.t, t.p, ~~(i + (i < 0 ? -.5 : .5)) + t.u, t)
}, Xl = function(e, t) {
    return t.set(t.t, t.p, e ? t.e : t.b, t)
}, Yl = function(e, t) {
    return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t)
}, qh = function(e, t, i) {
    return e.style[t] = i
}, $h = function(e, t, i) {
    return e.style.setProperty(t, i)
}, jh = function(e, t, i) {
    return e._gsap[t] = i
}, Qh = function(e, t, i) {
    return e._gsap.scaleX = e._gsap.scaleY = i
}, Kh = function(e, t, i, s, r) {
    var a = e._gsap;
    a.scaleX = a.scaleY = i,
    a.renderTransform(r, a)
}, Zh = function(e, t, i, s, r) {
    var a = e._gsap;
    a[t] = i,
    a.renderTransform(r, a)
}, ve = "transform", _t = ve + "Origin", Jh = function n(e, t) {
    var i = this
      , s = this.target
      , r = s.style
      , a = s._gsap;
    if (e in wi && r) {
        if (this.tfm = this.tfm || {},
        e !== "transform")
            e = ai[e] || e,
            ~e.indexOf(",") ? e.split(",").forEach(function(o) {
                return i.tfm[o] = mi(s, o)
            }) : this.tfm[e] = a.x ? a[e] : mi(s, e),
            e === _t && (this.tfm.zOrigin = a.zOrigin);
        else
            return ai.transform.split(",").forEach(function(o) {
                return n.call(i, o, t)
            });
        if (this.props.indexOf(ve) >= 0)
            return;
        a.svg && (this.svgo = s.getAttribute("data-svg-origin"),
        this.props.push(_t, t, "")),
        e = ve
    }
    (r || t) && this.props.push(e, t, r[e])
}, ql = function(e) {
    e.translate && (e.removeProperty("translate"),
    e.removeProperty("scale"),
    e.removeProperty("rotate"))
}, ec = function() {
    var e = this.props, t = this.target, i = t.style, s = t._gsap, r, a;
    for (r = 0; r < e.length; r += 3)
        e[r + 1] ? t[e[r]] = e[r + 2] : e[r + 2] ? i[e[r]] = e[r + 2] : i.removeProperty(e[r].substr(0, 2) === "--" ? e[r] : e[r].replace(qa, "-$1").toLowerCase());
    if (this.tfm) {
        for (a in this.tfm)
            s[a] = this.tfm[a];
        s.svg && (s.renderTransform(),
        t.setAttribute("data-svg-origin", this.svgo || "")),
        r = Ya(),
        (!r || !r.isStart) && !i[ve] && (ql(i),
        s.zOrigin && i[_t] && (i[_t] += " " + s.zOrigin + "px",
        s.zOrigin = 0,
        s.renderTransform()),
        s.uncache = 1)
    }
}, $l = function(e, t) {
    var i = {
        target: e,
        props: [],
        revert: ec,
        save: Jh
    };
    return e._gsap || vt.core.getCache(e),
    t && t.split(",").forEach(function(s) {
        return i.save(s)
    }),
    i
}, jl, ga = function(e, t) {
    var i = Oi.createElementNS ? Oi.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Oi.createElement(e);
    return i && i.style ? i : Oi.createElement(e)
}, li = function n(e, t, i) {
    var s = getComputedStyle(e);
    return s[t] || s.getPropertyValue(t.replace(qa, "-$1").toLowerCase()) || s.getPropertyValue(t) || !i && n(e, Ns(t) || t, 1) || ""
}, vo = "O,Moz,ms,Ms,Webkit".split(","), Ns = function(e, t, i) {
    var s = t || ts
      , r = s.style
      , a = 5;
    if (e in r && !i)
        return e;
    for (e = e.charAt(0).toUpperCase() + e.substr(1); a-- && !(vo[a] + e in r); )
        ;
    return a < 0 ? null : (a === 3 ? "ms" : a >= 0 ? vo[a] : "") + e
}, ma = function() {
    Uh() && window.document && (go = window,
    Oi = go.document,
    Fs = Oi.documentElement,
    ts = ga("div") || {
        style: {}
    },
    ga("div"),
    ve = Ns(ve),
    _t = ve + "Origin",
    ts.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
    jl = !!Ns("perspective"),
    Ya = vt.core.reverting,
    Xa = 1)
}, In = function n(e) {
    var t = ga("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = this.parentNode, s = this.nextSibling, r = this.style.cssText, a;
    if (Fs.appendChild(t),
    t.appendChild(this),
    this.style.display = "block",
    e)
        try {
            a = this.getBBox(),
            this._gsapBBox = this.getBBox,
            this.getBBox = n
        } catch {}
    else
        this._gsapBBox && (a = this._gsapBBox());
    return i && (s ? i.insertBefore(this, s) : i.appendChild(this)),
    Fs.removeChild(t),
    this.style.cssText = r,
    a
}, yo = function(e, t) {
    for (var i = t.length; i--; )
        if (e.hasAttribute(t[i]))
            return e.getAttribute(t[i])
}, Ql = function(e) {
    var t;
    try {
        t = e.getBBox()
    } catch {
        t = In.call(e, !0)
    }
    return t && (t.width || t.height) || e.getBBox === In || (t = In.call(e, !0)),
    t && !t.width && !t.x && !t.y ? {
        x: +yo(e, ["x", "cx", "x1"]) || 0,
        y: +yo(e, ["y", "cy", "y1"]) || 0,
        width: 0,
        height: 0
    } : t
}, Kl = function(e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Ql(e))
}, cs = function(e, t) {
    if (t) {
        var i = e.style, s;
        t in wi && t !== _t && (t = ve),
        i.removeProperty ? (s = t.substr(0, 2),
        (s === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t),
        i.removeProperty(s === "--" ? t : t.replace(qa, "-$1").toLowerCase())) : i.removeAttribute(t)
    }
}, Li = function(e, t, i, s, r, a) {
    var o = new mt(e._pt,t,i,0,1,a ? Yl : Xl);
    return e._pt = o,
    o.b = s,
    o.e = r,
    e._props.push(i),
    o
}, xo = {
    deg: 1,
    rad: 1,
    turn: 1
}, tc = {
    grid: 1,
    flex: 1
}, Gi = function n(e, t, i, s) {
    var r = parseFloat(i) || 0, a = (i + "").trim().substr((r + "").length) || "px", o = ts.style, l = Gh.test(t), u = e.tagName.toLowerCase() === "svg", h = (u ? "client" : "offset") + (l ? "Width" : "Height"), d = 100, f = s === "px", c = s === "%", g, p, _, y;
    if (s === a || !r || xo[s] || xo[a])
        return r;
    if (a !== "px" && !f && (r = n(e, t, i, "px")),
    y = e.getCTM && Kl(e),
    (c || a === "%") && (wi[t] || ~t.indexOf("adius")))
        return g = y ? e.getBBox()[l ? "width" : "height"] : e[h],
        Te(c ? r / g * d : r / 100 * g);
    if (o[l ? "width" : "height"] = d + (f ? a : s),
    p = ~t.indexOf("adius") || s === "em" && e.appendChild && !u ? e : e.parentNode,
    y && (p = (e.ownerSVGElement || {}).parentNode),
    (!p || p === Oi || !p.appendChild) && (p = Oi.body),
    _ = p._gsap,
    _ && c && _.width && l && _.time === Ct.time && !_.uncache)
        return Te(r / _.width * d);
    if (c && (t === "height" || t === "width")) {
        var D = e.style[t];
        e.style[t] = d + s,
        g = e[h],
        D ? e.style[t] = D : cs(e, t)
    } else
        (c || a === "%") && !tc[li(p, "display")] && (o.position = li(e, "position")),
        p === e && (o.position = "static"),
        p.appendChild(ts),
        g = ts[h],
        p.removeChild(ts),
        o.position = "absolute";
    return l && c && (_ = ss(p),
    _.time = Ct.time,
    _.width = p[h]),
    Te(f ? g * r / d : g && r ? d / g * r : 0)
}, mi = function(e, t, i, s) {
    var r;
    return Xa || ma(),
    t in ai && t !== "transform" && (t = ai[t],
    ~t.indexOf(",") && (t = t.split(",")[0])),
    wi[t] && t !== "transform" ? (r = Tr(e, s),
    r = t !== "transformOrigin" ? r[t] : r.svg ? r.origin : fn(li(e, _t)) + " " + r.zOrigin + "px") : (r = e.style[t],
    (!r || r === "auto" || s || ~(r + "").indexOf("calc(")) && (r = dn[t] && dn[t](e, t, i) || li(e, t) || fl(e, t) || (t === "opacity" ? 1 : 0))),
    i && !~(r + "").trim().indexOf(" ") ? Gi(e, t, r, i) + i : r
}, ic = function(e, t, i, s) {
    if (!i || i === "none") {
        var r = Ns(t, e, 1)
          , a = r && li(e, r, 1);
        a && a !== i ? (t = r,
        i = a) : t === "borderColor" && (i = li(e, "borderTopColor"))
    }
    var o = new mt(this._pt,e.style,t,0,1,Gl), l = 0, u = 0, h, d, f, c, g, p, _, y, D, m, v, x;
    if (o.b = i,
    o.e = s,
    i += "",
    s += "",
    s === "auto" && (p = e.style[t],
    e.style[t] = s,
    s = li(e, t) || s,
    p ? e.style[t] = p : cs(e, t)),
    h = [i, s],
    Rl(h),
    i = h[0],
    s = h[1],
    f = i.match(Ss) || [],
    x = s.match(Ss) || [],
    x.length) {
        for (; d = Ss.exec(s); )
            _ = d[0],
            D = s.substring(l, d.index),
            g ? g = (g + 1) % 5 : (D.substr(-5) === "rgba(" || D.substr(-5) === "hsla(") && (g = 1),
            _ !== (p = f[u++] || "") && (c = parseFloat(p) || 0,
            v = p.substr((c + "").length),
            _.charAt(1) === "=" && (_ = Ms(c, _) + v),
            y = parseFloat(_),
            m = _.substr((y + "").length),
            l = Ss.lastIndex - m.length,
            m || (m = m || Ft.units[t] || v,
            l === s.length && (s += m,
            o.e += m)),
            v !== m && (c = Gi(e, t, p, m) || 0),
            o._pt = {
                _next: o._pt,
                p: D || u === 1 ? D : ",",
                s: c,
                c: y - c,
                m: g && g < 4 || t === "zIndex" ? Math.round : 0
            });
        o.c = l < s.length ? s.substring(l, s.length) : ""
    } else
        o.r = t === "display" && s === "none" ? Yl : Xl;
    return ol.test(s) && (o.e = 0),
    this._pt = o,
    o
}, Do = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
}, sc = function(e) {
    var t = e.split(" ")
      , i = t[0]
      , s = t[1] || "50%";
    return (i === "top" || i === "bottom" || s === "left" || s === "right") && (e = i,
    i = s,
    s = e),
    t[0] = Do[i] || i,
    t[1] = Do[s] || s,
    t.join(" ")
}, rc = function(e, t) {
    if (t.tween && t.tween._time === t.tween._dur) {
        var i = t.t, s = i.style, r = t.u, a = i._gsap, o, l, u;
        if (r === "all" || r === !0)
            s.cssText = "",
            l = 1;
        else
            for (r = r.split(","),
            u = r.length; --u > -1; )
                o = r[u],
                wi[o] && (l = 1,
                o = o === "transformOrigin" ? _t : ve),
                cs(i, o);
        l && (cs(i, ve),
        a && (a.svg && i.removeAttribute("transform"),
        Tr(i, 1),
        a.uncache = 1,
        ql(s)))
    }
}, dn = {
    clearProps: function(e, t, i, s, r) {
        if (r.data !== "isFromStart") {
            var a = e._pt = new mt(e._pt,t,i,0,0,rc);
            return a.u = s,
            a.pr = -10,
            a.tween = r,
            e._props.push(i),
            1
        }
    }
}, br = [1, 0, 0, 1, 0, 0], Zl = {}, Jl = function(e) {
    return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e
}, wo = function(e) {
    var t = li(e, ve);
    return Jl(t) ? br : t.substr(7).match(al).map(Te)
}, $a = function(e, t) {
    var i = e._gsap || ss(e), s = e.style, r = wo(e), a, o, l, u;
    return i.svg && e.getAttribute("transform") ? (l = e.transform.baseVal.consolidate().matrix,
    r = [l.a, l.b, l.c, l.d, l.e, l.f],
    r.join(",") === "1,0,0,1,0,0" ? br : r) : (r === br && !e.offsetParent && e !== Fs && !i.svg && (l = s.display,
    s.display = "block",
    a = e.parentNode,
    (!a || !e.offsetParent) && (u = 1,
    o = e.nextElementSibling,
    Fs.appendChild(e)),
    r = wo(e),
    l ? s.display = l : cs(e, "display"),
    u && (o ? a.insertBefore(e, o) : a ? a.appendChild(e) : Fs.removeChild(e))),
    t && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r)
}, _a = function(e, t, i, s, r, a) {
    var o = e._gsap, l = r || $a(e, !0), u = o.xOrigin || 0, h = o.yOrigin || 0, d = o.xOffset || 0, f = o.yOffset || 0, c = l[0], g = l[1], p = l[2], _ = l[3], y = l[4], D = l[5], m = t.split(" "), v = parseFloat(m[0]) || 0, x = parseFloat(m[1]) || 0, P, T, E, C;
    i ? l !== br && (T = c * _ - g * p) && (E = v * (_ / T) + x * (-p / T) + (p * D - _ * y) / T,
    C = v * (-g / T) + x * (c / T) - (c * D - g * y) / T,
    v = E,
    x = C) : (P = Ql(e),
    v = P.x + (~m[0].indexOf("%") ? v / 100 * P.width : v),
    x = P.y + (~(m[1] || m[0]).indexOf("%") ? x / 100 * P.height : x)),
    s || s !== !1 && o.smooth ? (y = v - u,
    D = x - h,
    o.xOffset = d + (y * c + D * p) - y,
    o.yOffset = f + (y * g + D * _) - D) : o.xOffset = o.yOffset = 0,
    o.xOrigin = v,
    o.yOrigin = x,
    o.smooth = !!s,
    o.origin = t,
    o.originIsAbsolute = !!i,
    e.style[_t] = "0px 0px",
    a && (Li(a, o, "xOrigin", u, v),
    Li(a, o, "yOrigin", h, x),
    Li(a, o, "xOffset", d, o.xOffset),
    Li(a, o, "yOffset", f, o.yOffset)),
    e.setAttribute("data-svg-origin", v + " " + x)
}, Tr = function(e, t) {
    var i = e._gsap || new Il(e);
    if ("x"in i && !t && !i.uncache)
        return i;
    var s = e.style, r = i.scaleX < 0, a = "px", o = "deg", l = getComputedStyle(e), u = li(e, _t) || "0", h, d, f, c, g, p, _, y, D, m, v, x, P, T, E, C, w, L, F, O, I, z, k, B, U, R, b, j, oe, ke, se, K;
    return h = d = f = p = _ = y = D = m = v = 0,
    c = g = 1,
    i.svg = !!(e.getCTM && Kl(e)),
    l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (s[ve] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[ve] !== "none" ? l[ve] : "")),
    s.scale = s.rotate = s.translate = "none"),
    T = $a(e, i.svg),
    i.svg && (i.uncache ? (U = e.getBBox(),
    u = i.xOrigin - U.x + "px " + (i.yOrigin - U.y) + "px",
    B = "") : B = !t && e.getAttribute("data-svg-origin"),
    _a(e, B || u, !!B || i.originIsAbsolute, i.smooth !== !1, T)),
    x = i.xOrigin || 0,
    P = i.yOrigin || 0,
    T !== br && (L = T[0],
    F = T[1],
    O = T[2],
    I = T[3],
    h = z = T[4],
    d = k = T[5],
    T.length === 6 ? (c = Math.sqrt(L * L + F * F),
    g = Math.sqrt(I * I + O * O),
    p = L || F ? xs(F, L) * Zi : 0,
    D = O || I ? xs(O, I) * Zi + p : 0,
    D && (g *= Math.abs(Math.cos(D * As))),
    i.svg && (h -= x - (x * L + P * O),
    d -= P - (x * F + P * I))) : (K = T[6],
    ke = T[7],
    b = T[8],
    j = T[9],
    oe = T[10],
    se = T[11],
    h = T[12],
    d = T[13],
    f = T[14],
    E = xs(K, oe),
    _ = E * Zi,
    E && (C = Math.cos(-E),
    w = Math.sin(-E),
    B = z * C + b * w,
    U = k * C + j * w,
    R = K * C + oe * w,
    b = z * -w + b * C,
    j = k * -w + j * C,
    oe = K * -w + oe * C,
    se = ke * -w + se * C,
    z = B,
    k = U,
    K = R),
    E = xs(-O, oe),
    y = E * Zi,
    E && (C = Math.cos(-E),
    w = Math.sin(-E),
    B = L * C - b * w,
    U = F * C - j * w,
    R = O * C - oe * w,
    se = I * w + se * C,
    L = B,
    F = U,
    O = R),
    E = xs(F, L),
    p = E * Zi,
    E && (C = Math.cos(E),
    w = Math.sin(E),
    B = L * C + F * w,
    U = z * C + k * w,
    F = F * C - L * w,
    k = k * C - z * w,
    L = B,
    z = U),
    _ && Math.abs(_) + Math.abs(p) > 359.9 && (_ = p = 0,
    y = 180 - y),
    c = Te(Math.sqrt(L * L + F * F + O * O)),
    g = Te(Math.sqrt(k * k + K * K)),
    E = xs(z, k),
    D = Math.abs(E) > 2e-4 ? E * Zi : 0,
    v = se ? 1 / (se < 0 ? -se : se) : 0),
    i.svg && (B = e.getAttribute("transform"),
    i.forceCSS = e.setAttribute("transform", "") || !Jl(li(e, ve)),
    B && e.setAttribute("transform", B))),
    Math.abs(D) > 90 && Math.abs(D) < 270 && (r ? (c *= -1,
    D += p <= 0 ? 180 : -180,
    p += p <= 0 ? 180 : -180) : (g *= -1,
    D += D <= 0 ? 180 : -180)),
    t = t || i.uncache,
    i.x = h - ((i.xPercent = h && (!t && i.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-h) ? -50 : 0))) ? e.offsetWidth * i.xPercent / 100 : 0) + a,
    i.y = d - ((i.yPercent = d && (!t && i.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-d) ? -50 : 0))) ? e.offsetHeight * i.yPercent / 100 : 0) + a,
    i.z = f + a,
    i.scaleX = Te(c),
    i.scaleY = Te(g),
    i.rotation = Te(p) + o,
    i.rotationX = Te(_) + o,
    i.rotationY = Te(y) + o,
    i.skewX = D + o,
    i.skewY = m + o,
    i.transformPerspective = v + a,
    (i.zOrigin = parseFloat(u.split(" ")[2]) || !t && i.zOrigin || 0) && (s[_t] = fn(u)),
    i.xOffset = i.yOffset = 0,
    i.force3D = Ft.force3D,
    i.renderTransform = i.svg ? ac : jl ? eu : nc,
    i.uncache = 0,
    i
}, fn = function(e) {
    return (e = e.split(" "))[0] + " " + e[1]
}, zn = function(e, t, i) {
    var s = Ze(t);
    return Te(parseFloat(t) + parseFloat(Gi(e, "x", i + "px", s))) + s
}, nc = function(e, t) {
    t.z = "0px",
    t.rotationY = t.rotationX = "0deg",
    t.force3D = 0,
    eu(e, t)
}, Qi = "0deg", qs = "0px", Ki = ") ", eu = function(e, t) {
    var i = t || this
      , s = i.xPercent
      , r = i.yPercent
      , a = i.x
      , o = i.y
      , l = i.z
      , u = i.rotation
      , h = i.rotationY
      , d = i.rotationX
      , f = i.skewX
      , c = i.skewY
      , g = i.scaleX
      , p = i.scaleY
      , _ = i.transformPerspective
      , y = i.force3D
      , D = i.target
      , m = i.zOrigin
      , v = ""
      , x = y === "auto" && e && e !== 1 || y === !0;
    if (m && (d !== Qi || h !== Qi)) {
        var P = parseFloat(h) * As, T = Math.sin(P), E = Math.cos(P), C;
        P = parseFloat(d) * As,
        C = Math.cos(P),
        a = zn(D, a, T * C * -m),
        o = zn(D, o, -Math.sin(P) * -m),
        l = zn(D, l, E * C * -m + m)
    }
    _ !== qs && (v += "perspective(" + _ + Ki),
    (s || r) && (v += "translate(" + s + "%, " + r + "%) "),
    (x || a !== qs || o !== qs || l !== qs) && (v += l !== qs || x ? "translate3d(" + a + ", " + o + ", " + l + ") " : "translate(" + a + ", " + o + Ki),
    u !== Qi && (v += "rotate(" + u + Ki),
    h !== Qi && (v += "rotateY(" + h + Ki),
    d !== Qi && (v += "rotateX(" + d + Ki),
    (f !== Qi || c !== Qi) && (v += "skew(" + f + ", " + c + Ki),
    (g !== 1 || p !== 1) && (v += "scale(" + g + ", " + p + Ki),
    D.style[ve] = v || "translate(0, 0)"
}, ac = function(e, t) {
    var i = t || this, s = i.xPercent, r = i.yPercent, a = i.x, o = i.y, l = i.rotation, u = i.skewX, h = i.skewY, d = i.scaleX, f = i.scaleY, c = i.target, g = i.xOrigin, p = i.yOrigin, _ = i.xOffset, y = i.yOffset, D = i.forceCSS, m = parseFloat(a), v = parseFloat(o), x, P, T, E, C;
    l = parseFloat(l),
    u = parseFloat(u),
    h = parseFloat(h),
    h && (h = parseFloat(h),
    u += h,
    l += h),
    l || u ? (l *= As,
    u *= As,
    x = Math.cos(l) * d,
    P = Math.sin(l) * d,
    T = Math.sin(l - u) * -f,
    E = Math.cos(l - u) * f,
    u && (h *= As,
    C = Math.tan(u - h),
    C = Math.sqrt(1 + C * C),
    T *= C,
    E *= C,
    h && (C = Math.tan(h),
    C = Math.sqrt(1 + C * C),
    x *= C,
    P *= C)),
    x = Te(x),
    P = Te(P),
    T = Te(T),
    E = Te(E)) : (x = d,
    E = f,
    P = T = 0),
    (m && !~(a + "").indexOf("px") || v && !~(o + "").indexOf("px")) && (m = Gi(c, "x", a, "px"),
    v = Gi(c, "y", o, "px")),
    (g || p || _ || y) && (m = Te(m + g - (g * x + p * T) + _),
    v = Te(v + p - (g * P + p * E) + y)),
    (s || r) && (C = c.getBBox(),
    m = Te(m + s / 100 * C.width),
    v = Te(v + r / 100 * C.height)),
    C = "matrix(" + x + "," + P + "," + T + "," + E + "," + m + "," + v + ")",
    c.setAttribute("transform", C),
    D && (c.style[ve] = C)
}, oc = function(e, t, i, s, r) {
    var a = 360, o = Ge(r), l = parseFloat(r) * (o && ~r.indexOf("rad") ? Zi : 1), u = l - s, h = s + u + "deg", d, f;
    return o && (d = r.split("_")[1],
    d === "short" && (u %= a,
    u !== u % (a / 2) && (u += u < 0 ? a : -a)),
    d === "cw" && u < 0 ? u = (u + a * _o) % a - ~~(u / a) * a : d === "ccw" && u > 0 && (u = (u - a * _o) % a - ~~(u / a) * a)),
    e._pt = f = new mt(e._pt,t,i,s,u,Hh),
    f.e = h,
    f.u = "deg",
    e._props.push(i),
    f
}, bo = function(e, t) {
    for (var i in t)
        e[i] = t[i];
    return e
}, lc = function(e, t, i) {
    var s = bo({}, i._gsap), r = "perspective,force3D,transformOrigin,svgOrigin", a = i.style, o, l, u, h, d, f, c, g;
    s.svg ? (u = i.getAttribute("transform"),
    i.setAttribute("transform", ""),
    a[ve] = t,
    o = Tr(i, 1),
    cs(i, ve),
    i.setAttribute("transform", u)) : (u = getComputedStyle(i)[ve],
    a[ve] = t,
    o = Tr(i, 1),
    a[ve] = u);
    for (l in wi)
        u = s[l],
        h = o[l],
        u !== h && r.indexOf(l) < 0 && (c = Ze(u),
        g = Ze(h),
        d = c !== g ? Gi(i, l, u, g) : parseFloat(u),
        f = parseFloat(h),
        e._pt = new mt(e._pt,o,l,d,f - d,pa),
        e._pt.u = g || 0,
        e._props.push(l));
    bo(o, s)
};
gt("padding,margin,Width,Radius", function(n, e) {
    var t = "Top"
      , i = "Right"
      , s = "Bottom"
      , r = "Left"
      , a = (e < 3 ? [t, i, s, r] : [t + r, t + i, s + i, s + r]).map(function(o) {
        return e < 2 ? n + o : "border" + o + n
    });
    dn[e > 1 ? "border" + n : n] = function(o, l, u, h, d) {
        var f, c;
        if (arguments.length < 4)
            return f = a.map(function(g) {
                return mi(o, g, u)
            }),
            c = f.join(" "),
            c.split(f[0]).length === 5 ? f[0] : c;
        f = (h + "").split(" "),
        c = {},
        a.forEach(function(g, p) {
            return c[g] = f[p] = f[p] || f[(p - 1) / 2 | 0]
        }),
        o.init(l, c, d)
    }
});
var tu = {
    name: "css",
    register: ma,
    targetTest: function(e) {
        return e.style && e.nodeType
    },
    init: function(e, t, i, s, r) {
        var a = this._props, o = e.style, l = i.vars.startAt, u, h, d, f, c, g, p, _, y, D, m, v, x, P, T, E;
        Xa || ma(),
        this.styles = this.styles || $l(e),
        E = this.styles.props,
        this.tween = i;
        for (p in t)
            if (p !== "autoRound" && (h = t[p],
            !(St[p] && zl(p, t, i, s, e, r)))) {
                if (c = typeof h,
                g = dn[p],
                c === "function" && (h = h.call(i, s, e, r),
                c = typeof h),
                c === "string" && ~h.indexOf("random(") && (h = xr(h)),
                g)
                    g(this, e, p, h, i) && (T = 1);
                else if (p.substr(0, 2) === "--")
                    u = (getComputedStyle(e).getPropertyValue(p) + "").trim(),
                    h += "",
                    Ni.lastIndex = 0,
                    Ni.test(u) || (_ = Ze(u),
                    y = Ze(h)),
                    y ? _ !== y && (u = Gi(e, p, u, y) + y) : _ && (h += _),
                    this.add(o, "setProperty", u, h, s, r, 0, 0, p),
                    a.push(p),
                    E.push(p, 0, o[p]);
                else if (c !== "undefined") {
                    if (l && p in l ? (u = typeof l[p] == "function" ? l[p].call(i, s, e, r) : l[p],
                    Ge(u) && ~u.indexOf("random(") && (u = xr(u)),
                    Ze(u + "") || u === "auto" || (u += Ft.units[p] || Ze(mi(e, p)) || ""),
                    (u + "").charAt(1) === "=" && (u = mi(e, p))) : u = mi(e, p),
                    f = parseFloat(u),
                    D = c === "string" && h.charAt(1) === "=" && h.substr(0, 2),
                    D && (h = h.substr(2)),
                    d = parseFloat(h),
                    p in ai && (p === "autoAlpha" && (f === 1 && mi(e, "visibility") === "hidden" && d && (f = 0),
                    E.push("visibility", 0, o.visibility),
                    Li(this, o, "visibility", f ? "inherit" : "hidden", d ? "inherit" : "hidden", !d)),
                    p !== "scale" && p !== "transform" && (p = ai[p],
                    ~p.indexOf(",") && (p = p.split(",")[0]))),
                    m = p in wi,
                    m) {
                        if (this.styles.save(p),
                        v || (x = e._gsap,
                        x.renderTransform && !t.parseTransform || Tr(e, t.parseTransform),
                        P = t.smoothOrigin !== !1 && x.smooth,
                        v = this._pt = new mt(this._pt,o,ve,0,1,x.renderTransform,x,0,-1),
                        v.dep = 1),
                        p === "scale")
                            this._pt = new mt(this._pt,x,"scaleY",x.scaleY,(D ? Ms(x.scaleY, D + d) : d) - x.scaleY || 0,pa),
                            this._pt.u = 0,
                            a.push("scaleY", p),
                            p += "X";
                        else if (p === "transformOrigin") {
                            E.push(_t, 0, o[_t]),
                            h = sc(h),
                            x.svg ? _a(e, h, 0, P, 0, this) : (y = parseFloat(h.split(" ")[2]) || 0,
                            y !== x.zOrigin && Li(this, x, "zOrigin", x.zOrigin, y),
                            Li(this, o, p, fn(u), fn(h)));
                            continue
                        } else if (p === "svgOrigin") {
                            _a(e, h, 1, P, 0, this);
                            continue
                        } else if (p in Zl) {
                            oc(this, x, p, f, D ? Ms(f, D + h) : h);
                            continue
                        } else if (p === "smoothOrigin") {
                            Li(this, x, "smooth", x.smooth, h);
                            continue
                        } else if (p === "force3D") {
                            x[p] = h;
                            continue
                        } else if (p === "transform") {
                            lc(this, h, e);
                            continue
                        }
                    } else
                        p in o || (p = Ns(p) || p);
                    if (m || (d || d === 0) && (f || f === 0) && !Wh.test(h) && p in o)
                        _ = (u + "").substr((f + "").length),
                        d || (d = 0),
                        y = Ze(h) || (p in Ft.units ? Ft.units[p] : _),
                        _ !== y && (f = Gi(e, p, u, y)),
                        this._pt = new mt(this._pt,m ? x : o,p,f,(D ? Ms(f, D + d) : d) - f,!m && (y === "px" || p === "zIndex") && t.autoRound !== !1 ? Yh : pa),
                        this._pt.u = y || 0,
                        _ !== y && y !== "%" && (this._pt.b = u,
                        this._pt.r = Xh);
                    else if (p in o)
                        ic.call(this, e, p, u, D ? D + h : h);
                    else if (p in e)
                        this.add(e, p, u || e[p], D ? D + h : h, s, r);
                    else if (p !== "parseTransform") {
                        Ia(p, h);
                        continue
                    }
                    m || (p in o ? E.push(p, 0, o[p]) : E.push(p, 1, u || e[p])),
                    a.push(p)
                }
            }
        T && Wl(this)
    },
    render: function(e, t) {
        if (t.tween._time || !Ya())
            for (var i = t._pt; i; )
                i.r(e, i.d),
                i = i._next;
        else
            t.styles.revert()
    },
    get: mi,
    aliases: ai,
    getSetter: function(e, t, i) {
        var s = ai[t];
        return s && s.indexOf(",") < 0 && (t = s),
        t in wi && t !== _t && (e._gsap.x || mi(e, "x")) ? i && mo === i ? t === "scale" ? Qh : jh : (mo = i || {}) && (t === "scale" ? Kh : Zh) : e.style && !Oa(e.style[t]) ? qh : ~t.indexOf("-") ? $h : Wa(e, t)
    },
    core: {
        _removeProperty: cs,
        _getMatrix: $a
    }
};
vt.utils.checkPrefix = Ns;
vt.core.getStyleSaver = $l;
(function(n, e, t, i) {
    var s = gt(n + "," + e + "," + t, function(r) {
        wi[r] = 1
    });
    gt(e, function(r) {
        Ft.units[r] = "deg",
        Zl[r] = 1
    }),
    ai[s[13]] = n + "," + e,
    gt(i, function(r) {
        var a = r.split(":");
        ai[a[1]] = s[a[0]]
    })
}
)("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
gt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(n) {
    Ft.units[n] = "px"
});
vt.registerPlugin(tu);
var M = vt.registerPlugin(tu) || vt;
M.core.Tween;
let Bn = 0;
function X() {
    if (!(Bn > 100)) {
        if (Bn === 100)
            console.warn("Curtains: too many warnings thrown, stop logging.");
        else {
            const n = Array.prototype.slice.call(arguments);
            console.warn.apply(console, n)
        }
        Bn++
    }
}
function ct() {
    const n = Array.prototype.slice.call(arguments);
    console.error.apply(console, n)
}
function iu() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, n => {
        let e = Math.random() * 16 | 0;
        return (n === "x" ? e : e & 3 | 8).toString(16).toUpperCase()
    }
    )
}
function ti(n) {
    return (n & n - 1) === 0
}
function uc(n, e, t) {
    return (1 - t) * n + t * e
}
class hc {
    constructor(e) {
        if (this.type = "Scene",
        !e || e.type !== "Renderer")
            ct(this.type + ": Renderer not passed as first argument", e);
        else if (!e.gl) {
            ct(this.type + ": Renderer WebGL context is undefined", e);
            return
        }
        this.renderer = e,
        this.gl = e.gl,
        this.initStacks()
    }
    initStacks() {
        this.stacks = {
            pingPong: [],
            renderTargets: [],
            opaque: [],
            transparent: [],
            renderPasses: [],
            scenePasses: []
        }
    }
    resetPlaneStacks() {
        this.stacks.pingPong = [],
        this.stacks.renderTargets = [],
        this.stacks.opaque = [],
        this.stacks.transparent = [];
        for (let e = 0; e < this.renderer.planes.length; e++)
            this.addPlane(this.renderer.planes[e])
    }
    resetShaderPassStacks() {
        this.stacks.scenePasses = [],
        this.stacks.renderPasses = [];
        for (let e = 0; e < this.renderer.shaderPasses.length; e++)
            this.renderer.shaderPasses[e].index = e,
            this.renderer.shaderPasses[e]._isScenePass ? this.stacks.scenePasses.push(this.renderer.shaderPasses[e]) : this.stacks.renderPasses.push(this.renderer.shaderPasses[e]);
        this.stacks.scenePasses.length === 0 && (this.renderer.state.scenePassIndex = null)
    }
    addToRenderTargetsStack(e) {
        const t = this.renderer.planes.filter(s => s.type !== "PingPongPlane" && s.target && s.uuid !== e.uuid);
        let i = -1;
        if (e.target._depth) {
            for (let s = t.length - 1; s >= 0; s--)
                if (t[s].target.uuid === e.target.uuid) {
                    i = s + 1;
                    break
                }
        } else
            i = t.findIndex(s => s.target.uuid === e.target.uuid);
        i = Math.max(0, i),
        t.splice(i, 0, e),
        e.target._depth ? (t.sort( (s, r) => s.index - r.index),
        t.sort( (s, r) => r.renderOrder - s.renderOrder)) : (t.sort( (s, r) => r.index - s.index),
        t.sort( (s, r) => s.renderOrder - r.renderOrder)),
        t.sort( (s, r) => s.target.index - r.target.index),
        this.stacks.renderTargets = t
    }
    addToRegularPlaneStack(e) {
        const t = this.renderer.planes.filter(s => s.type !== "PingPongPlane" && !s.target && s._transparent === e._transparent && s.uuid !== e.uuid);
        let i = -1;
        for (let s = t.length - 1; s >= 0; s--)
            if (t[s]._geometry.definition.id === e._geometry.definition.id) {
                i = s + 1;
                break
            }
        return i = Math.max(0, i),
        t.splice(i, 0, e),
        t.sort( (s, r) => s.index - r.index),
        t
    }
    addPlane(e) {
        if (e.type === "PingPongPlane")
            this.stacks.pingPong.push(e);
        else if (e.target)
            this.addToRenderTargetsStack(e);
        else if (e._transparent) {
            const t = this.addToRegularPlaneStack(e);
            t.sort( (i, s) => s.relativeTranslation.z - i.relativeTranslation.z),
            t.sort( (i, s) => s.renderOrder - i.renderOrder),
            this.stacks.transparent = t
        } else {
            const t = this.addToRegularPlaneStack(e);
            t.sort( (i, s) => s.renderOrder - i.renderOrder),
            this.stacks.opaque = t
        }
    }
    removePlane(e) {
        e.type === "PingPongPlane" ? this.stacks.pingPong = this.stacks.pingPong.filter(t => t.uuid !== e.uuid) : e.target ? this.stacks.renderTargets = this.stacks.renderTargets.filter(t => t.uuid !== e.uuid) : e._transparent ? this.stacks.transparent = this.stacks.transparent.filter(t => t.uuid !== e.uuid) : this.stacks.opaque = this.stacks.opaque.filter(t => t.uuid !== e.uuid)
    }
    setPlaneRenderOrder(e) {
        if (e.type === "ShaderPass")
            this.sortShaderPassStack(e._isScenePass ? this.stacks.scenePasses : this.stacks.renderPasses);
        else if (e.type === "PingPongPlane")
            return;
        if (e.target)
            e.target._depth ? (this.stacks.renderTargets.sort( (t, i) => t.index - i.index),
            this.stacks.renderTargets.sort( (t, i) => i.renderOrder - t.renderOrder)) : (this.stacks.renderTargets.sort( (t, i) => i.index - t.index),
            this.stacks.renderTargets.sort( (t, i) => t.renderOrder - i.renderOrder)),
            this.stacks.renderTargets.sort( (t, i) => t.target.index - i.target.index);
        else {
            const t = e._transparent ? this.stacks.transparent : this.stacks.opaque
              , i = this.stacks.scenePasses.find( (s, r) => s._isScenePass && !s._depth && r === 0);
            !this.renderer.depth || i ? (t.sort( (s, r) => r.index - s.index),
            e._transparent && t.sort( (s, r) => s.relativeTranslation.z - r.relativeTranslation.z),
            t.sort( (s, r) => s.renderOrder - r.renderOrder)) : (t.sort( (s, r) => s.index - r.index),
            e._transparent && t.sort( (s, r) => r.relativeTranslation.z - s.relativeTranslation.z),
            t.sort( (s, r) => r.renderOrder - s.renderOrder))
        }
    }
    addShaderPass(e) {
        e._isScenePass ? (this.stacks.scenePasses.push(e),
        this.sortShaderPassStack(this.stacks.scenePasses)) : (this.stacks.renderPasses.push(e),
        this.sortShaderPassStack(this.stacks.renderPasses))
    }
    removeShaderPass(e) {
        this.resetShaderPassStacks()
    }
    sortShaderPassStack(e) {
        e.sort( (t, i) => t.index - i.index),
        e.sort( (t, i) => t.renderOrder - i.renderOrder)
    }
    enableShaderPass() {
        this.stacks.scenePasses.length && this.stacks.renderPasses.length === 0 && this.renderer.planes.length && (this.renderer.state.scenePassIndex = 0,
        this.renderer.bindFrameBuffer(this.stacks.scenePasses[0].target))
    }
    drawRenderPasses() {
        this.stacks.scenePasses.length && this.stacks.renderPasses.length && this.renderer.planes.length && (this.renderer.state.scenePassIndex = 0,
        this.renderer.bindFrameBuffer(this.stacks.scenePasses[0].target));
        for (let e = 0; e < this.stacks.renderPasses.length; e++)
            this.stacks.renderPasses[e]._startDrawing(),
            this.renderer.clearDepth()
    }
    drawScenePasses() {
        for (let e = 0; e < this.stacks.scenePasses.length; e++)
            this.stacks.scenePasses[e]._startDrawing()
    }
    drawPingPongStack() {
        for (let e = 0; e < this.stacks.pingPong.length; e++) {
            const t = this.stacks.pingPong[e];
            t && t._startDrawing()
        }
    }
    drawStack(e) {
        for (let t = 0; t < this.stacks[e].length; t++) {
            const i = this.stacks[e][t];
            i && i._startDrawing()
        }
    }
    draw() {
        this.drawPingPongStack(),
        this.enableShaderPass(),
        this.drawStack("renderTargets"),
        this.drawRenderPasses(),
        this.renderer.setBlending(!1),
        this.drawStack("opaque"),
        this.stacks.transparent.length && (this.renderer.setBlending(!0),
        this.drawStack("transparent")),
        this.drawScenePasses()
    }
}
class cc {
    constructor() {
        this.geometries = [],
        this.clear()
    }
    clear() {
        this.textures = [],
        this.programs = []
    }
    getGeometryFromID(e) {
        return this.geometries.find(t => t.id === e)
    }
    addGeometry(e, t, i) {
        this.geometries.push({
            id: e,
            vertices: t,
            uvs: i
        })
    }
    isSameShader(e, t) {
        return e.localeCompare(t) === 0
    }
    getProgramFromShaders(e, t) {
        return this.programs.find(i => this.isSameShader(i.vsCode, e) && this.isSameShader(i.fsCode, t))
    }
    addProgram(e) {
        this.programs.push(e)
    }
    getTextureFromSource(e) {
        const t = typeof e == "string" ? e : e.src;
        return this.textures.find(i => i.source && i.source.src === t)
    }
    addTexture(e) {
        this.getTextureFromSource(e.source) || this.textures.push(e)
    }
    removeTexture(e) {
        this.textures = this.textures.filter(t => t.uuid !== e.uuid)
    }
}
class dc {
    constructor() {
        this.clear()
    }
    clear() {
        this.queue = []
    }
    add(e, t=!1) {
        const i = {
            callback: e,
            keep: t,
            timeout: null
        };
        return i.timeout = setTimeout( () => {
            this.queue.push(i)
        }
        , 0),
        i
    }
    execute() {
        this.queue.map(e => {
            e.callback && e.callback(),
            clearTimeout(this.queue.timeout)
        }
        ),
        this.queue = this.queue.filter(e => e.keep)
    }
}
class fc {
    constructor({alpha: e, antialias: t, premultipliedAlpha: i, depth: s, failIfMajorPerformanceCaveat: r, preserveDrawingBuffer: a, stencil: o, container: l, pixelRatio: u, renderingScale: h, production: d, onError: f, onSuccess: c, onContextLost: g, onContextRestored: p, onDisposed: _, onSceneChange: y}) {
        this.type = "Renderer",
        this.alpha = e,
        this.antialias = t,
        this.premultipliedAlpha = i,
        this.depth = s,
        this.failIfMajorPerformanceCaveat = r,
        this.preserveDrawingBuffer = a,
        this.stencil = o,
        this.container = l,
        this.pixelRatio = u,
        this._renderingScale = h,
        this.production = d,
        this.onError = f,
        this.onSuccess = c,
        this.onContextLost = g,
        this.onContextRestored = p,
        this.onDisposed = _,
        this.onSceneChange = y,
        this.initState(),
        this.canvas = document.createElement("canvas");
        const D = {
            alpha: this.alpha,
            premultipliedAlpha: this.premultipliedAlpha,
            antialias: this.antialias,
            depth: this.depth,
            failIfMajorPerformanceCaveat: this.failIfMajorPerformanceCaveat,
            preserveDrawingBuffer: this.preserveDrawingBuffer,
            stencil: this.stencil
        };
        if (this.gl = this.canvas.getContext("webgl2", D),
        this._isWebGL2 = !!this.gl,
        this.gl || (this.gl = this.canvas.getContext("webgl", D) || this.canvas.getContext("experimental-webgl", D)),
        this.gl)
            this.onSuccess && this.onSuccess();
        else {
            this.production || X(this.type + ": WebGL context could not be created"),
            this.state.isActive = !1,
            this.onError && this.onError();
            return
        }
        this.initRenderer()
    }
    initState() {
        this.state = {
            isActive: !0,
            isContextLost: !0,
            drawingEnabled: !0,
            forceRender: !1,
            currentProgramID: null,
            currentGeometryID: null,
            forceBufferUpdate: !1,
            depthTest: null,
            blending: null,
            cullFace: null,
            frameBufferID: null,
            scenePassIndex: null,
            activeTexture: null,
            unpackAlignment: null,
            flipY: null,
            premultiplyAlpha: null
        }
    }
    initCallbackQueueManager() {
        this.nextRender = new dc
    }
    initRenderer() {
        this.planes = [],
        this.renderTargets = [],
        this.shaderPasses = [],
        this.state.isContextLost = !1,
        this.state.maxTextureSize = this.gl.getParameter(this.gl.MAX_TEXTURE_SIZE),
        this.initCallbackQueueManager(),
        this.setBlendFunc(),
        this.setDepthFunc(),
        this.setDepthTest(!0),
        this.cache = new cc,
        this.scene = new hc(this),
        this.getExtensions(),
        this._contextLostHandler = this.contextLost.bind(this),
        this.canvas.addEventListener("webglcontextlost", this._contextLostHandler, !1),
        this._contextRestoredHandler = this.contextRestored.bind(this),
        this.canvas.addEventListener("webglcontextrestored", this._contextRestoredHandler, !1)
    }
    getExtensions() {
        this.extensions = [],
        this._isWebGL2 ? (this.extensions.EXT_color_buffer_float = this.gl.getExtension("EXT_color_buffer_float"),
        this.extensions.OES_texture_float_linear = this.gl.getExtension("OES_texture_float_linear"),
        this.extensions.EXT_texture_filter_anisotropic = this.gl.getExtension("EXT_texture_filter_anisotropic"),
        this.extensions.WEBGL_lose_context = this.gl.getExtension("WEBGL_lose_context")) : (this.extensions.OES_vertex_array_object = this.gl.getExtension("OES_vertex_array_object"),
        this.extensions.OES_texture_float = this.gl.getExtension("OES_texture_float"),
        this.extensions.OES_texture_float_linear = this.gl.getExtension("OES_texture_float_linear"),
        this.extensions.OES_texture_half_float = this.gl.getExtension("OES_texture_half_float"),
        this.extensions.OES_texture_half_float_linear = this.gl.getExtension("OES_texture_half_float_linear"),
        this.extensions.EXT_texture_filter_anisotropic = this.gl.getExtension("EXT_texture_filter_anisotropic"),
        this.extensions.OES_element_index_uint = this.gl.getExtension("OES_element_index_uint"),
        this.extensions.OES_standard_derivatives = this.gl.getExtension("OES_standard_derivatives"),
        this.extensions.EXT_sRGB = this.gl.getExtension("EXT_sRGB"),
        this.extensions.WEBGL_depth_texture = this.gl.getExtension("WEBGL_depth_texture"),
        this.extensions.WEBGL_draw_buffers = this.gl.getExtension("WEBGL_draw_buffers"),
        this.extensions.WEBGL_lose_context = this.gl.getExtension("WEBGL_lose_context"))
    }
    contextLost(e) {
        this.state.isContextLost = !0,
        this.state.isActive && (e.preventDefault(),
        this.nextRender.add( () => this.onContextLost && this.onContextLost()))
    }
    restoreContext() {
        this.state.isActive && (this.initState(),
        this.gl && this.extensions.WEBGL_lose_context ? this.extensions.WEBGL_lose_context.restoreContext() : (!this.gl && !this.production ? X(this.type + ": Could not restore the context because the context is not defined") : !this.extensions.WEBGL_lose_context && !this.production && X(this.type + ": Could not restore the context because the restore context extension is not defined"),
        this.onError && this.onError()))
    }
    isContextexFullyRestored() {
        let e = !0;
        for (let t = 0; t < this.renderTargets.length; t++) {
            this.renderTargets[t].textures[0]._canDraw || (e = !1);
            break
        }
        if (e)
            for (let t = 0; t < this.planes.length; t++)
                if (this.planes[t]._canDraw) {
                    for (let i = 0; i < this.planes[t].textures.length; i++)
                        if (!this.planes[t].textures[i]._canDraw) {
                            e = !1;
                            break
                        }
                } else {
                    e = !1;
                    break
                }
        if (e)
            for (let t = 0; t < this.shaderPasses.length; t++)
                if (this.shaderPasses[t]._canDraw) {
                    for (let i = 0; i < this.shaderPasses[t].textures.length; i++)
                        if (!this.shaderPasses[t].textures[i]._canDraw) {
                            e = !1;
                            break
                        }
                } else {
                    e = !1;
                    break
                }
        return e
    }
    contextRestored() {
        this.getExtensions(),
        this.setBlendFunc(),
        this.setDepthFunc(),
        this.setDepthTest(!0),
        this.cache.clear(),
        this.scene.initStacks();
        for (let t = 0; t < this.renderTargets.length; t++)
            this.renderTargets[t]._restoreContext();
        for (let t = 0; t < this.planes.length; t++)
            this.planes[t]._restoreContext();
        for (let t = 0; t < this.shaderPasses.length; t++)
            this.shaderPasses[t]._restoreContext();
        const e = this.nextRender.add( () => {
            this.isContextexFullyRestored() && (e.keep = !1,
            this.state.isContextLost = !1,
            this.onContextRestored && this.onContextRestored(),
            this.onSceneChange(),
            this.needRender())
        }
        , !0)
    }
    setPixelRatio(e) {
        this.pixelRatio = e
    }
    setSize() {
        if (!this.gl)
            return;
        const e = this.container.getBoundingClientRect();
        this._boundingRect = {
            width: e.width * this.pixelRatio,
            height: e.height * this.pixelRatio,
            top: e.top * this.pixelRatio,
            left: e.left * this.pixelRatio
        };
        const t = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/)
          , i = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        if (t && i) {
            let r = function(a) {
                let o = 0;
                for (; a && !isNaN(a.offsetTop); )
                    o += a.offsetTop - a.scrollTop,
                    a = a.offsetParent;
                return o
            };
            var s = r;
            this._boundingRect.top = r(this.container) * this.pixelRatio
        }
        this.canvas.style.width = Math.floor(this._boundingRect.width / this.pixelRatio) + "px",
        this.canvas.style.height = Math.floor(this._boundingRect.height / this.pixelRatio) + "px",
        this.canvas.width = Math.floor(this._boundingRect.width * this._renderingScale),
        this.canvas.height = Math.floor(this._boundingRect.height * this._renderingScale),
        this.gl.viewport(0, 0, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight)
    }
    resize() {
        for (let e = 0; e < this.planes.length; e++)
            this.planes[e]._canDraw && this.planes[e].resize();
        for (let e = 0; e < this.shaderPasses.length; e++)
            this.shaderPasses[e]._canDraw && this.shaderPasses[e].resize();
        for (let e = 0; e < this.renderTargets.length; e++)
            this.renderTargets[e].resize();
        this.needRender()
    }
    clear() {
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT)
    }
    clearDepth() {
        this.gl.clear(this.gl.DEPTH_BUFFER_BIT)
    }
    clearColor() {
        this.gl.clear(this.gl.COLOR_BUFFER_BIT)
    }
    bindFrameBuffer(e, t) {
        let i = null;
        e ? (i = e.index,
        i !== this.state.frameBufferID && (this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, e._frameBuffer),
        this.gl.viewport(0, 0, e._size.width, e._size.height),
        e._shouldClear && !t && this.clear())) : this.state.frameBufferID !== null && (this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null),
        this.gl.viewport(0, 0, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight)),
        this.state.frameBufferID = i
    }
    setDepthTest(e) {
        e && !this.state.depthTest ? (this.state.depthTest = e,
        this.gl.enable(this.gl.DEPTH_TEST)) : !e && this.state.depthTest && (this.state.depthTest = e,
        this.gl.disable(this.gl.DEPTH_TEST))
    }
    setDepthFunc() {
        this.gl.depthFunc(this.gl.LEQUAL)
    }
    setBlending(e=!1) {
        e && !this.state.blending ? (this.state.blending = e,
        this.gl.enable(this.gl.BLEND)) : !e && this.state.blending && (this.state.blending = e,
        this.gl.disable(this.gl.BLEND))
    }
    setBlendFunc() {
        this.gl.enable(this.gl.BLEND),
        this.premultipliedAlpha ? this.gl.blendFuncSeparate(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA, this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA) : this.gl.blendFuncSeparate(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA, this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA)
    }
    setFaceCulling(e) {
        if (this.state.cullFace !== e)
            if (this.state.cullFace = e,
            e === "none")
                this.gl.disable(this.gl.CULL_FACE);
            else {
                const t = e === "front" ? this.gl.FRONT : this.gl.BACK;
                this.gl.enable(this.gl.CULL_FACE),
                this.gl.cullFace(t)
            }
    }
    useProgram(e) {
        (this.state.currentProgramID === null || this.state.currentProgramID !== e.id) && (this.gl.useProgram(e.program),
        this.state.currentProgramID = e.id)
    }
    removePlane(e) {
        this.gl && (this.planes = this.planes.filter(t => t.uuid !== e.uuid),
        this.scene.removePlane(e),
        e = null,
        this.gl && this.clear(),
        this.onSceneChange())
    }
    removeRenderTarget(e) {
        if (!this.gl)
            return;
        let t = this.planes.find(i => i.type !== "PingPongPlane" && i.target && i.target.uuid === e.uuid);
        for (let i = 0; i < this.planes.length; i++)
            this.planes[i].target && this.planes[i].target.uuid === e.uuid && (this.planes[i].target = null);
        this.renderTargets = this.renderTargets.filter(i => i.uuid !== e.uuid);
        for (let i = 0; i < this.renderTargets.length; i++)
            this.renderTargets[i].index = i;
        e = null,
        this.gl && this.clear(),
        t && this.scene.resetPlaneStacks(),
        this.onSceneChange()
    }
    removeShaderPass(e) {
        this.gl && (this.shaderPasses = this.shaderPasses.filter(t => t.uuid !== e.uuid),
        this.scene.removeShaderPass(e),
        e = null,
        this.gl && this.clear(),
        this.onSceneChange())
    }
    enableDrawing() {
        this.state.drawingEnabled = !0
    }
    disableDrawing() {
        this.state.drawingEnabled = !1
    }
    needRender() {
        this.state.forceRender = !0
    }
    render() {
        this.gl && (this.clear(),
        this.state.currentGeometryID = null,
        this.scene.draw())
    }
    deletePrograms() {
        for (let e = 0; e < this.cache.programs.length; e++) {
            const t = this.cache.programs[e];
            this.gl.deleteProgram(t.program)
        }
    }
    dispose() {
        if (!this.gl)
            return;
        for (this.state.isActive = !1; this.planes.length > 0; )
            this.removePlane(this.planes[0]);
        for (; this.shaderPasses.length > 0; )
            this.removeShaderPass(this.shaderPasses[0]);
        for (; this.renderTargets.length > 0; )
            this.removeRenderTarget(this.renderTargets[0]);
        let e = this.nextRender.add( () => {
            this.planes.length === 0 && this.shaderPasses.length === 0 && this.renderTargets.length === 0 && (e.keep = !1,
            this.deletePrograms(),
            this.clear(),
            this.canvas.removeEventListener("webgllost", this._contextLostHandler, !1),
            this.canvas.removeEventListener("webglrestored", this._contextRestoredHandler, !1),
            this.gl && this.extensions.WEBGL_lose_context && this.extensions.WEBGL_lose_context.loseContext(),
            this.canvas.width = this.canvas.width,
            this.gl = null,
            this.container.removeChild(this.canvas),
            this.container = null,
            this.canvas = null,
            this.onDisposed && this.onDisposed())
        }
        , !0)
    }
}
class pc {
    constructor({xOffset: e=0, yOffset: t=0, lastXDelta: i=0, lastYDelta: s=0, shouldWatch: r=!0, onScroll: a= () => {}
    }={}) {
        this.xOffset = e,
        this.yOffset = t,
        this.lastXDelta = i,
        this.lastYDelta = s,
        this.shouldWatch = r,
        this.onScroll = a,
        this.handler = this.scroll.bind(this, !0),
        this.shouldWatch && window.addEventListener("scroll", this.handler, {
            passive: !0
        })
    }
    scroll() {
        this.updateScrollValues(window.pageXOffset, window.pageYOffset)
    }
    updateScrollValues(e, t) {
        const i = this.xOffset;
        this.xOffset = e,
        this.lastXDelta = i - this.xOffset;
        const s = this.yOffset;
        this.yOffset = t,
        this.lastYDelta = s - this.yOffset,
        this.onScroll && this.onScroll(this.lastXDelta, this.lastYDelta)
    }
    dispose() {
        this.shouldWatch && window.removeEventListener("scroll", this.handler, {
            passive: !0
        })
    }
}
const gc = "8.1.6";
class mc {
    constructor({container: e, alpha: t=!0, premultipliedAlpha: i=!1, antialias: s=!0, depth: r=!0, failIfMajorPerformanceCaveat: a=!0, preserveDrawingBuffer: o=!1, stencil: l=!1, autoResize: u=!0, autoRender: h=!0, watchScroll: d=!0, pixelRatio: f=window.devicePixelRatio || 1, renderingScale: c=1, production: g=!1}={}) {
        this.type = "Curtains",
        this._autoResize = u,
        this._autoRender = h,
        this._watchScroll = d,
        this.pixelRatio = f,
        c = isNaN(c) ? 1 : parseFloat(c),
        this._renderingScale = Math.max(.25, Math.min(1, c)),
        this.premultipliedAlpha = i,
        this.alpha = t,
        this.antialias = s,
        this.depth = r,
        this.failIfMajorPerformanceCaveat = a,
        this.preserveDrawingBuffer = o,
        this.stencil = l,
        this.production = g,
        this.errors = !1,
        e ? this.setContainer(e) : this.production || X(this.type + ": no container provided in the initial parameters. Use setContainer() method to set one later and initialize the WebGL context")
    }
    setContainer(e) {
        if (e)
            if (typeof e == "string")
                if (e = document.getElementById(e),
                e)
                    this.container = e;
                else {
                    let t = document.createElement("div");
                    t.setAttribute("id", "curtains-canvas"),
                    document.body.appendChild(t),
                    this.container = t,
                    this.production || X('Curtains: no valid container HTML element or ID provided, created a div with "curtains-canvas" ID instead')
                }
            else
                e instanceof Element && (this.container = e);
        else {
            let t = document.createElement("div");
            t.setAttribute("id", "curtains-canvas"),
            document.body.appendChild(t),
            this.container = t,
            this.production || X('Curtains: no valid container HTML element or ID provided, created a div with "curtains-canvas" ID instead')
        }
        this._initCurtains()
    }
    _initCurtains() {
        this.planes = [],
        this.renderTargets = [],
        this.shaderPasses = [],
        this._initRenderer(),
        this.gl && (this._initScroll(),
        this._setSize(),
        this._addListeners(),
        this.container.appendChild(this.canvas),
        console.log("curtains.js - v" + gc),
        this._animationFrameID = null,
        this._autoRender && this._animate())
    }
    _initRenderer() {
        this.renderer = new fc({
            alpha: this.alpha,
            antialias: this.antialias,
            premultipliedAlpha: this.premultipliedAlpha,
            depth: this.depth,
            failIfMajorPerformanceCaveat: this.failIfMajorPerformanceCaveat,
            preserveDrawingBuffer: this.preserveDrawingBuffer,
            stencil: this.stencil,
            container: this.container,
            pixelRatio: this.pixelRatio,
            renderingScale: this._renderingScale,
            production: this.production,
            onError: () => this._onRendererError(),
            onSuccess: () => this._onRendererSuccess(),
            onContextLost: () => this._onRendererContextLost(),
            onContextRestored: () => this._onRendererContextRestored(),
            onDisposed: () => this._onRendererDisposed(),
            onSceneChange: () => this._keepSync()
        }),
        this.gl = this.renderer.gl,
        this.canvas = this.renderer.canvas
    }
    restoreContext() {
        this.renderer.restoreContext()
    }
    _animate() {
        this.render(),
        this._animationFrameID = window.requestAnimationFrame(this._animate.bind(this))
    }
    enableDrawing() {
        this.renderer.enableDrawing()
    }
    disableDrawing() {
        this.renderer.disableDrawing()
    }
    needRender() {
        this.renderer.needRender()
    }
    nextRender(e, t=!1) {
        return this.renderer.nextRender.add(e, t)
    }
    clear() {
        this.renderer && this.renderer.clear()
    }
    clearDepth() {
        this.renderer && this.renderer.clearDepth()
    }
    clearColor() {
        this.renderer && this.renderer.clearColor()
    }
    isWebGL2() {
        return this.gl ? this.renderer._isWebGL2 : !1
    }
    render() {
        this.renderer.nextRender.execute(),
        !(!this.renderer.state.drawingEnabled && !this.renderer.state.forceRender) && (this.renderer.state.forceRender && (this.renderer.state.forceRender = !1),
        this._onRenderCallback && this._onRenderCallback(),
        this.renderer.render())
    }
    _addListeners() {
        this._resizeHandler = null,
        this._autoResize && (this._resizeHandler = this.resize.bind(this, !0),
        window.addEventListener("resize", this._resizeHandler, !1))
    }
    setPixelRatio(e, t) {
        this.pixelRatio = parseFloat(Math.max(e, 1)) || 1,
        this.renderer.setPixelRatio(e),
        this.resize(t)
    }
    _setSize() {
        this.renderer.setSize(),
        this._scrollManager.shouldWatch && (this._scrollManager.xOffset = window.pageXOffset,
        this._scrollManager.yOffset = window.pageYOffset)
    }
    getBoundingRect() {
        return this.renderer._boundingRect
    }
    resize(e) {
        this.gl && (this._setSize(),
        this.renderer.resize(),
        this.nextRender( () => {
            this._onAfterResizeCallback && e && this._onAfterResizeCallback()
        }
        ))
    }
    _initScroll() {
        this._scrollManager = new pc({
            xOffset: window.pageXOffset,
            yOffset: window.pageYOffset,
            lastXDelta: 0,
            lastYDelta: 0,
            shouldWatch: this._watchScroll,
            onScroll: (e, t) => this._updateScroll(e, t)
        })
    }
    _updateScroll(e, t) {
        for (let i = 0; i < this.planes.length; i++)
            this.planes[i].watchScroll && this.planes[i].updateScrollPosition(e, t);
        this.renderer.needRender(),
        this._onScrollCallback && this._onScrollCallback()
    }
    updateScrollValues(e, t) {
        this._scrollManager.updateScrollValues(e, t)
    }
    getScrollDeltas() {
        return {
            x: this._scrollManager.lastXDelta,
            y: this._scrollManager.lastYDelta
        }
    }
    getScrollValues() {
        return {
            x: this._scrollManager.xOffset,
            y: this._scrollManager.yOffset
        }
    }
    _keepSync() {
        this.planes = this.renderer.planes,
        this.shaderPasses = this.renderer.shaderPasses,
        this.renderTargets = this.renderer.renderTargets
    }
    lerp(e, t, i) {
        return uc(e, t, i)
    }
    onAfterResize(e) {
        return e && (this._onAfterResizeCallback = e),
        this
    }
    onError(e) {
        return e && (this._onErrorCallback = e),
        this
    }
    _onRendererError() {
        setTimeout( () => {
            this._onErrorCallback && !this.errors && this._onErrorCallback(),
            this.errors = !0
        }
        , 0)
    }
    onSuccess(e) {
        return e && (this._onSuccessCallback = e),
        this
    }
    _onRendererSuccess() {
        setTimeout( () => {
            this._onSuccessCallback && this._onSuccessCallback()
        }
        , 0)
    }
    onContextLost(e) {
        return e && (this._onContextLostCallback = e),
        this
    }
    _onRendererContextLost() {
        this._onContextLostCallback && this._onContextLostCallback()
    }
    onContextRestored(e) {
        return e && (this._onContextRestoredCallback = e),
        this
    }
    _onRendererContextRestored() {
        this._onContextRestoredCallback && this._onContextRestoredCallback()
    }
    onRender(e) {
        return e && (this._onRenderCallback = e),
        this
    }
    onScroll(e) {
        return e && (this._onScrollCallback = e),
        this
    }
    dispose() {
        this.renderer.dispose()
    }
    _onRendererDisposed() {
        this._animationFrameID && window.cancelAnimationFrame(this._animationFrameID),
        this._resizeHandler && window.removeEventListener("resize", this._resizeHandler, !1),
        this._scrollManager && this._scrollManager.dispose()
    }
}
class _c {
    constructor(e, t, i) {
        if (this.type = "Uniforms",
        !e || e.type !== "Renderer")
            ct(this.type + ": Renderer not passed as first argument", e);
        else if (!e.gl) {
            ct(this.type + ": Renderer WebGL context is undefined", e);
            return
        }
        if (this.renderer = e,
        this.gl = e.gl,
        this.program = t,
        this.uniforms = {},
        i)
            for (const s in i) {
                const r = i[s];
                this.uniforms[s] = {
                    name: r.name,
                    type: r.type,
                    value: r.value.clone && typeof r.value.clone == "function" ? r.value.clone() : r.value,
                    update: null
                }
            }
    }
    handleUniformSetting(e) {
        switch (e.type) {
        case "1i":
            e.update = this.setUniform1i.bind(this);
            break;
        case "1iv":
            e.update = this.setUniform1iv.bind(this);
            break;
        case "1f":
            e.update = this.setUniform1f.bind(this);
            break;
        case "1fv":
            e.update = this.setUniform1fv.bind(this);
            break;
        case "2i":
            e.update = this.setUniform2i.bind(this);
            break;
        case "2iv":
            e.update = this.setUniform2iv.bind(this);
            break;
        case "2f":
            e.update = this.setUniform2f.bind(this);
            break;
        case "2fv":
            e.update = this.setUniform2fv.bind(this);
            break;
        case "3i":
            e.update = this.setUniform3i.bind(this);
            break;
        case "3iv":
            e.update = this.setUniform3iv.bind(this);
            break;
        case "3f":
            e.update = this.setUniform3f.bind(this);
            break;
        case "3fv":
            e.update = this.setUniform3fv.bind(this);
            break;
        case "4i":
            e.update = this.setUniform4i.bind(this);
            break;
        case "4iv":
            e.update = this.setUniform4iv.bind(this);
            break;
        case "4f":
            e.update = this.setUniform4f.bind(this);
            break;
        case "4fv":
            e.update = this.setUniform4fv.bind(this);
            break;
        case "mat2":
            e.update = this.setUniformMatrix2fv.bind(this);
            break;
        case "mat3":
            e.update = this.setUniformMatrix3fv.bind(this);
            break;
        case "mat4":
            e.update = this.setUniformMatrix4fv.bind(this);
            break;
        default:
            this.renderer.production || X(this.type + ": This uniform type is not handled : ", e.type)
        }
    }
    setInternalFormat(e) {
        e.value.type === "Vec2" ? (e._internalFormat = "Vec2",
        e.lastValue = e.value.clone()) : e.value.type === "Vec3" ? (e._internalFormat = "Vec3",
        e.lastValue = e.value.clone()) : e.value.type === "Mat4" ? (e._internalFormat = "Mat4",
        e.lastValue = e.value.clone()) : e.value.type === "Quat" ? (e._internalFormat = "Quat",
        e.lastValue = e.value.clone()) : Array.isArray(e.value) ? (e._internalFormat = "array",
        e.lastValue = Array.from(e.value)) : e.value.constructor === Float32Array ? (e._internalFormat = "mat",
        e.lastValue = e.value) : (e._internalFormat = "float",
        e.lastValue = e.value)
    }
    setUniforms() {
        if (this.uniforms)
            for (const e in this.uniforms) {
                let t = this.uniforms[e];
                t.location = this.gl.getUniformLocation(this.program, t.name),
                t._internalFormat || this.setInternalFormat(t),
                t.type || (t._internalFormat === "Vec2" ? t.type = "2f" : t._internalFormat === "Vec3" ? t.type = "3f" : t._internalFormat === "Mat4" ? t.type = "mat4" : t._internalFormat === "array" ? t.value.length === 4 ? (t.type = "4f",
                this.renderer.production || X(this.type + ": No uniform type declared for " + t.name + ", applied a 4f (array of 4 floats) uniform type")) : t.value.length === 3 ? (t.type = "3f",
                this.renderer.production || X(this.type + ": No uniform type declared for " + t.name + ", applied a 3f (array of 3 floats) uniform type")) : t.value.length === 2 && (t.type = "2f",
                this.renderer.production || X(this.type + ": No uniform type declared for " + t.name + ", applied a 2f (array of 2 floats) uniform type")) : t._internalFormat === "mat" ? t.value.length === 16 ? (t.type = "mat4",
                this.renderer.production || X(this.type + ": No uniform type declared for " + t.name + ", applied a mat4 (4x4 matrix array) uniform type")) : t.value.length === 9 ? (t.type = "mat3",
                this.renderer.production || X(this.type + ": No uniform type declared for " + t.name + ", applied a mat3 (3x3 matrix array) uniform type")) : t.value.length === 4 && (t.type = "mat2",
                this.renderer.production || X(this.type + ": No uniform type declared for " + t.name + ", applied a mat2 (2x2 matrix array) uniform type")) : (t.type = "1f",
                this.renderer.production || X(this.type + ": No uniform type declared for " + t.name + ", applied a 1f (float) uniform type"))),
                this.handleUniformSetting(t),
                t.update && t.update(t)
            }
    }
    updateUniforms() {
        if (this.uniforms)
            for (const e in this.uniforms) {
                const t = this.uniforms[e];
                let i = !1;
                t._internalFormat === "Vec2" || t._internalFormat === "Vec3" || t._internalFormat === "Quat" ? t.value.equals(t.lastValue) || (i = !0,
                t.lastValue.copy(t.value)) : t.value.length ? JSON.stringify(t.value) !== JSON.stringify(t.lastValue) && (i = !0,
                t.lastValue = Array.from(t.value)) : t.value !== t.lastValue && (i = !0,
                t.lastValue = t.value),
                i && t.update && t.update(t)
            }
    }
    setUniform1i(e) {
        this.gl.uniform1i(e.location, e.value)
    }
    setUniform1iv(e) {
        this.gl.uniform1iv(e.location, e.value)
    }
    setUniform1f(e) {
        this.gl.uniform1f(e.location, e.value)
    }
    setUniform1fv(e) {
        this.gl.uniform1fv(e.location, e.value)
    }
    setUniform2i(e) {
        e._internalFormat === "Vec2" ? this.gl.uniform2i(e.location, e.value.x, e.value.y) : this.gl.uniform2i(e.location, e.value[0], e.value[1])
    }
    setUniform2iv(e) {
        e._internalFormat === "Vec2" ? this.gl.uniform2iv(e.location, [e.value.x, e.value.y]) : this.gl.uniform2iv(e.location, e.value)
    }
    setUniform2f(e) {
        e._internalFormat === "Vec2" ? this.gl.uniform2f(e.location, e.value.x, e.value.y) : this.gl.uniform2f(e.location, e.value[0], e.value[1])
    }
    setUniform2fv(e) {
        e._internalFormat === "Vec2" ? this.gl.uniform2fv(e.location, [e.value.x, e.value.y]) : this.gl.uniform2fv(e.location, e.value)
    }
    setUniform3i(e) {
        e._internalFormat === "Vec3" ? this.gl.uniform3i(e.location, e.value.x, e.value.y, e.value.z) : this.gl.uniform3i(e.location, e.value[0], e.value[1], e.value[2])
    }
    setUniform3iv(e) {
        e._internalFormat === "Vec3" ? this.gl.uniform3iv(e.location, [e.value.x, e.value.y, e.value.z]) : this.gl.uniform3iv(e.location, e.value)
    }
    setUniform3f(e) {
        e._internalFormat === "Vec3" ? this.gl.uniform3f(e.location, e.value.x, e.value.y, e.value.z) : this.gl.uniform3f(e.location, e.value[0], e.value[1], e.value[2])
    }
    setUniform3fv(e) {
        e._internalFormat === "Vec3" ? this.gl.uniform3fv(e.location, [e.value.x, e.value.y, e.value.z]) : this.gl.uniform3fv(e.location, e.value)
    }
    setUniform4i(e) {
        e._internalFormat === "Quat" ? this.gl.uniform4i(e.location, e.value.elements[0], e.value.elements[1], e.value.elements[2], e.value[3]) : this.gl.uniform4i(e.location, e.value[0], e.value[1], e.value[2], e.value[3])
    }
    setUniform4iv(e) {
        e._internalFormat === "Quat" ? this.gl.uniform4iv(e.location, [e.value.elements[0], e.value.elements[1], e.value.elements[2], e.value[3]]) : this.gl.uniform4iv(e.location, e.value)
    }
    setUniform4f(e) {
        e._internalFormat === "Quat" ? this.gl.uniform4f(e.location, e.value.elements[0], e.value.elements[1], e.value.elements[2], e.value[3]) : this.gl.uniform4f(e.location, e.value[0], e.value[1], e.value[2], e.value[3])
    }
    setUniform4fv(e) {
        e._internalFormat === "Quat" ? this.gl.uniform4fv(e.location, [e.value.elements[0], e.value.elements[1], e.value.elements[2], e.value[3]]) : this.gl.uniform4fv(e.location, e.value)
    }
    setUniformMatrix2fv(e) {
        this.gl.uniformMatrix2fv(e.location, !1, e.value)
    }
    setUniformMatrix3fv(e) {
        this.gl.uniformMatrix3fv(e.location, !1, e.value)
    }
    setUniformMatrix4fv(e) {
        e._internalFormat === "Mat4" ? this.gl.uniformMatrix4fv(e.location, !1, e.value.elements) : this.gl.uniformMatrix4fv(e.location, !1, e.value)
    }
}
const vc = `
precision mediump float;
`
  , bn = vc.replace(/\n/g, "")
  , yc = `
attribute vec3 aVertexPosition;
attribute vec2 aTextureCoord;
`
  , su = yc.replace(/\n/g, "")
  , xc = `
varying vec3 vVertexPosition;
varying vec2 vTextureCoord;
`
  , Tn = xc.replace(/\n/g, "")
  , Dc = bn + su + Tn + `
uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;

void main() {
    vTextureCoord = aTextureCoord;
    vVertexPosition = aVertexPosition;
    
    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
}
`
  , wc = Dc.replace(/\n/g, "")
  , bc = bn + Tn + `
void main() {
    gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
}
`
  , Tc = bc.replace(/\n/g, "")
  , Sc = bn + su + Tn + `
void main() {
    vTextureCoord = aTextureCoord;
    vVertexPosition = aVertexPosition;
    
    gl_Position = vec4(aVertexPosition, 1.0);
}
`
  , Ec = Sc.replace(/\n/g, "")
  , Cc = bn + Tn + `
uniform sampler2D uRenderTexture;

void main() {
    gl_FragColor = texture2D(uRenderTexture, vTextureCoord);
}
`
  , Pc = Cc.replace(/\n/g, "");
let To = 0;
class So {
    constructor(e, {parent: t, vertexShader: i, fragmentShader: s}={}) {
        if (this.type = "Program",
        !e || e.type !== "Renderer")
            ct(this.type + ": Renderer not passed as first argument", e);
        else if (!e.gl) {
            ct(this.type + ": Renderer WebGL context is undefined", e);
            return
        }
        this.renderer = e,
        this.gl = this.renderer.gl,
        this.parent = t,
        this.defaultVsCode = this.parent.type === "Plane" ? wc : Ec,
        this.defaultFsCode = this.parent.type === "Plane" ? Tc : Pc,
        i ? this.vsCode = i : (!this.renderer.production && this.parent.type === "Plane" && X(this.parent.type + ": No vertex shader provided, will use a default one"),
        this.vsCode = this.defaultVsCode),
        s ? this.fsCode = s : (this.renderer.production || X(this.parent.type + ": No fragment shader provided, will use a default one"),
        this.fsCode = this.defaultFsCode),
        this.compiled = !0,
        this.setupProgram()
    }
    createShader(e, t) {
        const i = this.gl.createShader(t);
        if (this.gl.shaderSource(i, e),
        this.gl.compileShader(i),
        !this.renderer.production && !this.gl.getShaderParameter(i, this.gl.COMPILE_STATUS)) {
            const s = t === this.gl.VERTEX_SHADER ? "vertex shader" : "fragment shader";
            let a = this.gl.getShaderSource(i).split(`
`);
            for (let o = 0; o < a.length; o++)
                a[o] = o + 1 + ": " + a[o];
            return a = a.join(`
`),
            X(this.type + ": Errors occurred while compiling the", s, `:
`, this.gl.getShaderInfoLog(i)),
            ct(a),
            X(this.type + ": Will use a default", s),
            this.createShader(t === this.gl.VERTEX_SHADER ? this.defaultVsCode : this.defaultFsCode, t)
        }
        return i
    }
    useNewShaders() {
        this.vertexShader = this.createShader(this.vsCode, this.gl.VERTEX_SHADER),
        this.fragmentShader = this.createShader(this.fsCode, this.gl.FRAGMENT_SHADER),
        (!this.vertexShader || !this.fragmentShader) && (this.renderer.production || X(this.type + ": Unable to find or compile the vertex or fragment shader"))
    }
    setupProgram() {
        let e = this.renderer.cache.getProgramFromShaders(this.vsCode, this.fsCode);
        e ? (this.vertexShader = e.vertexShader,
        this.fragmentShader = e.fragmentShader,
        this.activeUniforms = e.activeUniforms,
        this.activeAttributes = e.activeAttributes,
        this.createProgram()) : (this.useNewShaders(),
        this.compiled && (this.createProgram(),
        this.renderer.cache.addProgram(this)))
    }
    createProgram() {
        if (To++,
        this.id = To,
        this.program = this.gl.createProgram(),
        this.gl.attachShader(this.program, this.vertexShader),
        this.gl.attachShader(this.program, this.fragmentShader),
        this.gl.linkProgram(this.program),
        !this.renderer.production && !this.gl.getProgramParameter(this.program, this.gl.LINK_STATUS)) {
            X(this.type + ": Unable to initialize the shader program: " + this.gl.getProgramInfoLog(this.program)),
            X(this.type + ": Will use default vertex and fragment shaders"),
            this.vertexShader = this.createShader(this.defaultVsCode, this.gl.VERTEX_SHADER),
            this.fragmentShader = this.createShader(this.defaultFsCode, this.gl.FRAGMENT_SHADER),
            this.createProgram();
            return
        }
        if (this.gl.deleteShader(this.vertexShader),
        this.gl.deleteShader(this.fragmentShader),
        !this.activeUniforms || !this.activeAttributes) {
            this.activeUniforms = {
                textures: [],
                textureMatrices: []
            };
            const e = this.gl.getProgramParameter(this.program, this.gl.ACTIVE_UNIFORMS);
            for (let i = 0; i < e; i++) {
                const s = this.gl.getActiveUniform(this.program, i);
                s.type === this.gl.SAMPLER_2D && this.activeUniforms.textures.push(s.name),
                s.type === this.gl.FLOAT_MAT4 && s.name !== "uMVMatrix" && s.name !== "uPMatrix" && this.activeUniforms.textureMatrices.push(s.name)
            }
            this.activeAttributes = [];
            const t = this.gl.getProgramParameter(this.program, this.gl.ACTIVE_ATTRIBUTES);
            for (let i = 0; i < t; i++) {
                const s = this.gl.getActiveAttrib(this.program, i);
                this.activeAttributes.push(s.name)
            }
        }
    }
    createUniforms(e) {
        this.uniformsManager = new _c(this.renderer,this.program,e),
        this.setUniforms()
    }
    setUniforms() {
        this.renderer.useProgram(this),
        this.uniformsManager.setUniforms()
    }
    updateUniforms() {
        this.renderer.useProgram(this),
        this.uniformsManager.updateUniforms()
    }
}
class Mc {
    constructor(e, {program: t=null, width: i=1, height: s=1}={}) {
        if (this.type = "Geometry",
        !e || e.type !== "Renderer")
            ct(this.type + ": Renderer not passed as first argument", e);
        else if (!e.gl) {
            ct(this.type + ": Renderer WebGL context is undefined", e);
            return
        }
        this.renderer = e,
        this.gl = this.renderer.gl,
        this.definition = {
            id: i * s + i,
            width: i,
            height: s
        },
        this.setDefaultAttributes(),
        this.setVerticesUVs()
    }
    restoreContext(e) {
        this.program = null,
        this.setDefaultAttributes(),
        this.setVerticesUVs(),
        this.setProgram(e)
    }
    setDefaultAttributes() {
        this.attributes = {
            vertexPosition: {
                name: "aVertexPosition",
                size: 3,
                isActive: !1
            },
            textureCoord: {
                name: "aTextureCoord",
                size: 3,
                isActive: !1
            }
        }
    }
    setVerticesUVs() {
        const e = this.renderer.cache.getGeometryFromID(this.definition.id);
        e ? (this.attributes.vertexPosition.array = e.vertices,
        this.attributes.textureCoord.array = e.uvs) : (this.computeVerticesUVs(),
        this.renderer.cache.addGeometry(this.definition.id, this.attributes.vertexPosition.array, this.attributes.textureCoord.array))
    }
    setProgram(e) {
        this.program = e,
        this.initAttributes(),
        this.renderer._isWebGL2 ? (this._vao = this.gl.createVertexArray(),
        this.gl.bindVertexArray(this._vao)) : this.renderer.extensions.OES_vertex_array_object && (this._vao = this.renderer.extensions.OES_vertex_array_object.createVertexArrayOES(),
        this.renderer.extensions.OES_vertex_array_object.bindVertexArrayOES(this._vao)),
        this.initializeBuffers()
    }
    initAttributes() {
        for (const e in this.attributes) {
            if (this.attributes[e].isActive = this.program.activeAttributes.includes(this.attributes[e].name),
            !this.attributes[e].isActive)
                return;
            this.attributes[e].location = this.gl.getAttribLocation(this.program.program, this.attributes[e].name),
            this.attributes[e].buffer = this.gl.createBuffer(),
            this.attributes[e].numberOfItems = this.definition.width * this.definition.height * this.attributes[e].size * 2
        }
    }
    computeVerticesUVs() {
        this.attributes.vertexPosition.array = [],
        this.attributes.textureCoord.array = [];
        const e = this.attributes.vertexPosition.array
          , t = this.attributes.textureCoord.array;
        for (let i = 0; i < this.definition.height; i++) {
            const s = i / this.definition.height;
            for (let r = 0; r < this.definition.width; r++) {
                const a = r / this.definition.width;
                t.push(a),
                t.push(s),
                t.push(0),
                e.push((a - .5) * 2),
                e.push((s - .5) * 2),
                e.push(0),
                t.push(a + 1 / this.definition.width),
                t.push(s),
                t.push(0),
                e.push((a + 1 / this.definition.width - .5) * 2),
                e.push((s - .5) * 2),
                e.push(0),
                t.push(a),
                t.push(s + 1 / this.definition.height),
                t.push(0),
                e.push((a - .5) * 2),
                e.push((s + 1 / this.definition.height - .5) * 2),
                e.push(0),
                t.push(a),
                t.push(s + 1 / this.definition.height),
                t.push(0),
                e.push((a - .5) * 2),
                e.push((s + 1 / this.definition.height - .5) * 2),
                e.push(0),
                t.push(a + 1 / this.definition.width),
                t.push(s),
                t.push(0),
                e.push((a + 1 / this.definition.width - .5) * 2),
                e.push((s - .5) * 2),
                e.push(0),
                t.push(a + 1 / this.definition.width),
                t.push(s + 1 / this.definition.height),
                t.push(0),
                e.push((a + 1 / this.definition.width - .5) * 2),
                e.push((s + 1 / this.definition.height - .5) * 2),
                e.push(0)
            }
        }
    }
    initializeBuffers() {
        if (this.attributes) {
            for (const e in this.attributes) {
                if (!this.attributes[e].isActive)
                    return;
                this.gl.enableVertexAttribArray(this.attributes[e].location),
                this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.attributes[e].buffer),
                this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(this.attributes[e].array), this.gl.STATIC_DRAW),
                this.gl.vertexAttribPointer(this.attributes[e].location, this.attributes[e].size, this.gl.FLOAT, !1, 0, 0)
            }
            this.renderer.state.currentGeometryID = this.definition.id
        }
    }
    bindBuffers() {
        if (this._vao)
            this.renderer._isWebGL2 ? this.gl.bindVertexArray(this._vao) : this.renderer.extensions.OES_vertex_array_object.bindVertexArrayOES(this._vao);
        else
            for (const e in this.attributes) {
                if (!this.attributes[e].isActive)
                    return;
                this.gl.enableVertexAttribArray(this.attributes[e].location),
                this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.attributes[e].buffer),
                this.gl.vertexAttribPointer(this.attributes[e].location, this.attributes[e].size, this.gl.FLOAT, !1, 0, 0)
            }
        this.renderer.state.currentGeometryID = this.definition.id
    }
    draw() {
        this.gl.drawArrays(this.gl.TRIANGLES, 0, this.attributes.vertexPosition.numberOfItems)
    }
    dispose() {
        this._vao && (this.renderer._isWebGL2 ? this.gl.deleteVertexArray(this._vao) : this.renderer.extensions.OES_vertex_array_object.deleteVertexArrayOES(this._vao));
        for (const e in this.attributes) {
            if (!this.attributes[e].isActive)
                return;
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.attributes[e].buffer),
            this.gl.bufferData(this.gl.ARRAY_BUFFER, 1, this.gl.STATIC_DRAW),
            this.gl.deleteBuffer(this.attributes[e].buffer)
        }
        this.attributes = null,
        this.renderer.state.currentGeometryID = null
    }
}
class ui {
    constructor(e=new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])) {
        this.type = "Mat4",
        this.elements = e
    }
    setFromArray(e) {
        for (let t = 0; t < this.elements.length; t++)
            this.elements[t] = e[t];
        return this
    }
    copy(e) {
        const t = e.elements;
        return this.elements[0] = t[0],
        this.elements[1] = t[1],
        this.elements[2] = t[2],
        this.elements[3] = t[3],
        this.elements[4] = t[4],
        this.elements[5] = t[5],
        this.elements[6] = t[6],
        this.elements[7] = t[7],
        this.elements[8] = t[8],
        this.elements[9] = t[9],
        this.elements[10] = t[10],
        this.elements[11] = t[11],
        this.elements[12] = t[12],
        this.elements[13] = t[13],
        this.elements[14] = t[14],
        this.elements[15] = t[15],
        this
    }
    clone() {
        return new ui().copy(this)
    }
    multiply(e) {
        const t = this.elements
          , i = e.elements;
        let s = new ui;
        return s.elements[0] = i[0] * t[0] + i[1] * t[4] + i[2] * t[8] + i[3] * t[12],
        s.elements[1] = i[0] * t[1] + i[1] * t[5] + i[2] * t[9] + i[3] * t[13],
        s.elements[2] = i[0] * t[2] + i[1] * t[6] + i[2] * t[10] + i[3] * t[14],
        s.elements[3] = i[0] * t[3] + i[1] * t[7] + i[2] * t[11] + i[3] * t[15],
        s.elements[4] = i[4] * t[0] + i[5] * t[4] + i[6] * t[8] + i[7] * t[12],
        s.elements[5] = i[4] * t[1] + i[5] * t[5] + i[6] * t[9] + i[7] * t[13],
        s.elements[6] = i[4] * t[2] + i[5] * t[6] + i[6] * t[10] + i[7] * t[14],
        s.elements[7] = i[4] * t[3] + i[5] * t[7] + i[6] * t[11] + i[7] * t[15],
        s.elements[8] = i[8] * t[0] + i[9] * t[4] + i[10] * t[8] + i[11] * t[12],
        s.elements[9] = i[8] * t[1] + i[9] * t[5] + i[10] * t[9] + i[11] * t[13],
        s.elements[10] = i[8] * t[2] + i[9] * t[6] + i[10] * t[10] + i[11] * t[14],
        s.elements[11] = i[8] * t[3] + i[9] * t[7] + i[10] * t[11] + i[11] * t[15],
        s.elements[12] = i[12] * t[0] + i[13] * t[4] + i[14] * t[8] + i[15] * t[12],
        s.elements[13] = i[12] * t[1] + i[13] * t[5] + i[14] * t[9] + i[15] * t[13],
        s.elements[14] = i[12] * t[2] + i[13] * t[6] + i[14] * t[10] + i[15] * t[14],
        s.elements[15] = i[12] * t[3] + i[13] * t[7] + i[14] * t[11] + i[15] * t[15],
        s
    }
    getInverse() {
        const e = this.elements
          , t = new ui
          , i = t.elements;
        let s = e[0]
          , r = e[1]
          , a = e[2]
          , o = e[3]
          , l = e[4]
          , u = e[5]
          , h = e[6]
          , d = e[7]
          , f = e[8]
          , c = e[9]
          , g = e[10]
          , p = e[11]
          , _ = e[12]
          , y = e[13]
          , D = e[14]
          , m = e[15]
          , v = s * u - r * l
          , x = s * h - a * l
          , P = s * d - o * l
          , T = r * h - a * u
          , E = r * d - o * u
          , C = a * d - o * h
          , w = f * y - c * _
          , L = f * D - g * _
          , F = f * m - p * _
          , O = c * D - g * y
          , I = c * m - p * y
          , z = g * m - p * D
          , k = v * z - x * I + P * O + T * F - E * L + C * w;
        return k ? (k = 1 / k,
        i[0] = (u * z - h * I + d * O) * k,
        i[1] = (a * I - r * z - o * O) * k,
        i[2] = (y * C - D * E + m * T) * k,
        i[3] = (g * E - c * C - p * T) * k,
        i[4] = (h * F - l * z - d * L) * k,
        i[5] = (s * z - a * F + o * L) * k,
        i[6] = (D * P - _ * C - m * x) * k,
        i[7] = (f * C - g * P + p * x) * k,
        i[8] = (l * I - u * F + d * w) * k,
        i[9] = (r * F - s * I - o * w) * k,
        i[10] = (_ * E - y * P + m * v) * k,
        i[11] = (c * P - f * E - p * v) * k,
        i[12] = (u * L - l * O - h * w) * k,
        i[13] = (s * O - r * L + a * w) * k,
        i[14] = (y * x - _ * T - D * v) * k,
        i[15] = (f * T - c * x + g * v) * k,
        t) : null
    }
    scale(e) {
        let t = this.elements;
        return t[0] *= e.x,
        t[1] *= e.x,
        t[2] *= e.x,
        t[3] *= e.x,
        t[4] *= e.y,
        t[5] *= e.y,
        t[6] *= e.y,
        t[7] *= e.y,
        t[8] *= e.z,
        t[9] *= e.z,
        t[10] *= e.z,
        t[11] *= e.z,
        this
    }
    compose(e, t, i) {
        let s = this.elements;
        const r = t.elements[0]
          , a = t.elements[1]
          , o = t.elements[2]
          , l = t.elements[3]
          , u = r + r
          , h = a + a
          , d = o + o
          , f = r * u
          , c = r * h
          , g = r * d
          , p = a * h
          , _ = a * d
          , y = o * d
          , D = l * u
          , m = l * h
          , v = l * d
          , x = i.x
          , P = i.y
          , T = i.z;
        return s[0] = (1 - (p + y)) * x,
        s[1] = (c + v) * x,
        s[2] = (g - m) * x,
        s[3] = 0,
        s[4] = (c - v) * P,
        s[5] = (1 - (f + y)) * P,
        s[6] = (_ + D) * P,
        s[7] = 0,
        s[8] = (g + m) * T,
        s[9] = (_ - D) * T,
        s[10] = (1 - (f + p)) * T,
        s[11] = 0,
        s[12] = e.x,
        s[13] = e.y,
        s[14] = e.z,
        s[15] = 1,
        this
    }
    composeFromOrigin(e, t, i, s) {
        let r = this.elements;
        const a = t.elements[0]
          , o = t.elements[1]
          , l = t.elements[2]
          , u = t.elements[3]
          , h = a + a
          , d = o + o
          , f = l + l
          , c = a * h
          , g = a * d
          , p = a * f
          , _ = o * d
          , y = o * f
          , D = l * f
          , m = u * h
          , v = u * d
          , x = u * f
          , P = i.x
          , T = i.y
          , E = i.z
          , C = s.x
          , w = s.y
          , L = s.z
          , F = (1 - (_ + D)) * P
          , O = (g + x) * P
          , I = (p - v) * P
          , z = (g - x) * T
          , k = (1 - (c + D)) * T
          , B = (y + m) * T
          , U = (p + v) * E
          , R = (y - m) * E
          , b = (1 - (c + _)) * E;
        return r[0] = F,
        r[1] = O,
        r[2] = I,
        r[3] = 0,
        r[4] = z,
        r[5] = k,
        r[6] = B,
        r[7] = 0,
        r[8] = U,
        r[9] = R,
        r[10] = b,
        r[11] = 0,
        r[12] = e.x + C - (F * C + z * w + U * L),
        r[13] = e.y + w - (O * C + k * w + R * L),
        r[14] = e.z + L - (I * C + B * w + b * L),
        r[15] = 1,
        this
    }
}
class bi {
    constructor(e=0, t=e) {
        this.type = "Vec2",
        this._x = e,
        this._y = t
    }
    get x() {
        return this._x
    }
    get y() {
        return this._y
    }
    set x(e) {
        const t = e !== this._x;
        this._x = e,
        t && this._onChangeCallback && this._onChangeCallback()
    }
    set y(e) {
        const t = e !== this._y;
        this._y = e,
        t && this._onChangeCallback && this._onChangeCallback()
    }
    onChange(e) {
        return e && (this._onChangeCallback = e),
        this
    }
    set(e, t) {
        return this._x = e,
        this._y = t,
        this
    }
    add(e) {
        return this._x += e.x,
        this._y += e.y,
        this
    }
    addScalar(e) {
        return this._x += e,
        this._y += e,
        this
    }
    sub(e) {
        return this._x -= e.x,
        this._y -= e.y,
        this
    }
    subScalar(e) {
        return this._x -= e,
        this._y -= e,
        this
    }
    multiply(e) {
        return this._x *= e.x,
        this._y *= e.y,
        this
    }
    multiplyScalar(e) {
        return this._x *= e,
        this._y *= e,
        this
    }
    copy(e) {
        return this._x = e.x,
        this._y = e.y,
        this
    }
    clone() {
        return new bi(this._x,this._y)
    }
    sanitizeNaNValuesWith(e) {
        return this._x = isNaN(this._x) ? e.x : parseFloat(this._x),
        this._y = isNaN(this._y) ? e.y : parseFloat(this._y),
        this
    }
    max(e) {
        return this._x = Math.max(this._x, e.x),
        this._y = Math.max(this._y, e.y),
        this
    }
    min(e) {
        return this._x = Math.min(this._x, e.x),
        this._y = Math.min(this._y, e.y),
        this
    }
    equals(e) {
        return this._x === e.x && this._y === e.y
    }
    normalize() {
        let e = this._x * this._x + this._y * this._y;
        return e > 0 && (e = 1 / Math.sqrt(e)),
        this._x *= e,
        this._y *= e,
        this
    }
    dot(e) {
        return this._x * e.x + this._y * e.y
    }
}
class _e {
    constructor(e=0, t=e, i=e) {
        this.type = "Vec3",
        this._x = e,
        this._y = t,
        this._z = i
    }
    get x() {
        return this._x
    }
    get y() {
        return this._y
    }
    get z() {
        return this._z
    }
    set x(e) {
        const t = e !== this._x;
        this._x = e,
        t && this._onChangeCallback && this._onChangeCallback()
    }
    set y(e) {
        const t = e !== this._y;
        this._y = e,
        t && this._onChangeCallback && this._onChangeCallback()
    }
    set z(e) {
        const t = e !== this._z;
        this._z = e,
        t && this._onChangeCallback && this._onChangeCallback()
    }
    onChange(e) {
        return e && (this._onChangeCallback = e),
        this
    }
    set(e, t, i) {
        return this._x = e,
        this._y = t,
        this._z = i,
        this
    }
    add(e) {
        return this._x += e.x,
        this._y += e.y,
        this._z += e.z,
        this
    }
    addScalar(e) {
        return this._x += e,
        this._y += e,
        this._z += e,
        this
    }
    sub(e) {
        return this._x -= e.x,
        this._y -= e.y,
        this._z -= e.z,
        this
    }
    subScalar(e) {
        return this._x -= e,
        this._y -= e,
        this._z -= e,
        this
    }
    multiply(e) {
        return this._x *= e.x,
        this._y *= e.y,
        this._z *= e.z,
        this
    }
    multiplyScalar(e) {
        return this._x *= e,
        this._y *= e,
        this._z *= e,
        this
    }
    copy(e) {
        return this._x = e.x,
        this._y = e.y,
        this._z = e.z,
        this
    }
    clone() {
        return new _e(this._x,this._y,this._z)
    }
    sanitizeNaNValuesWith(e) {
        return this._x = isNaN(this._x) ? e.x : parseFloat(this._x),
        this._y = isNaN(this._y) ? e.y : parseFloat(this._y),
        this._z = isNaN(this._z) ? e.z : parseFloat(this._z),
        this
    }
    max(e) {
        return this._x = Math.max(this._x, e.x),
        this._y = Math.max(this._y, e.y),
        this._z = Math.max(this._z, e.z),
        this
    }
    min(e) {
        return this._x = Math.min(this._x, e.x),
        this._y = Math.min(this._y, e.y),
        this._z = Math.min(this._z, e.z),
        this
    }
    equals(e) {
        return this._x === e.x && this._y === e.y && this._z === e.z
    }
    normalize() {
        let e = this._x * this._x + this._y * this._y + this._z * this._z;
        return e > 0 && (e = 1 / Math.sqrt(e)),
        this._x *= e,
        this._y *= e,
        this._z *= e,
        this
    }
    dot(e) {
        return this._x * e.x + this._y * e.y + this._z * e.z
    }
    applyMat4(e) {
        const t = this._x
          , i = this._y
          , s = this._z
          , r = e.elements;
        let a = r[3] * t + r[7] * i + r[11] * s + r[15];
        return a = a || 1,
        this._x = (r[0] * t + r[4] * i + r[8] * s + r[12]) / a,
        this._y = (r[1] * t + r[5] * i + r[9] * s + r[13]) / a,
        this._z = (r[2] * t + r[6] * i + r[10] * s + r[14]) / a,
        this
    }
    applyQuat(e) {
        const t = this._x
          , i = this._y
          , s = this._z
          , r = e.elements[0]
          , a = e.elements[1]
          , o = e.elements[2]
          , l = e.elements[3]
          , u = l * t + a * s - o * i
          , h = l * i + o * t - r * s
          , d = l * s + r * i - a * t
          , f = -r * t - a * i - o * s;
        return this._x = u * l + f * -r + h * -o - d * -a,
        this._y = h * l + f * -a + d * -r - u * -o,
        this._z = d * l + f * -o + u * -a - h * -r,
        this
    }
    project(e) {
        return this.applyMat4(e.viewMatrix).applyMat4(e.projectionMatrix),
        this
    }
    unproject(e) {
        return this.applyMat4(e.projectionMatrix.getInverse()).applyMat4(e.worldMatrix),
        this
    }
}
const Nn = new bi
  , Fc = new _e
  , Ac = new ui;
class Js {
    constructor(e, {isFBOTexture: t=!1, fromTexture: i=!1, loader: s, sampler: r, floatingPoint: a="none", premultiplyAlpha: o=!1, anisotropy: l=1, generateMipmap: u=null, wrapS: h, wrapT: d, minFilter: f, magFilter: c}={}) {
        if (this.type = "Texture",
        e = e && e.renderer || e,
        !e || e.type !== "Renderer")
            ct(this.type + ": Renderer not passed as first argument", e);
        else if (!e.gl) {
            e.production || ct(this.type + ": Unable to create a " + this.type + " because the Renderer WebGL context is not defined");
            return
        }
        if (this.renderer = e,
        this.gl = this.renderer.gl,
        this.uuid = iu(),
        this._globalParameters = {
            unpackAlignment: 4,
            flipY: !t,
            premultiplyAlpha: !1,
            shouldPremultiplyAlpha: o,
            floatingPoint: a,
            type: this.gl.UNSIGNED_BYTE,
            internalFormat: this.gl.RGBA,
            format: this.gl.RGBA
        },
        this.parameters = {
            anisotropy: l,
            generateMipmap: u,
            wrapS: h || this.gl.CLAMP_TO_EDGE,
            wrapT: d || this.gl.CLAMP_TO_EDGE,
            minFilter: f || this.gl.LINEAR,
            magFilter: c || this.gl.LINEAR,
            _shouldUpdate: !0
        },
        this._initState(),
        this.sourceType = t ? "fbo" : "empty",
        this._useCache = !0,
        this._samplerName = r,
        this._sampler = {
            isActive: !1,
            isTextureBound: !1,
            texture: this.gl.createTexture()
        },
        this._textureMatrix = {
            matrix: new ui,
            isActive: !1
        },
        this._size = {
            width: 1,
            height: 1
        },
        this.scale = new bi(1),
        this.scale.onChange( () => this.resize()),
        this.offset = new bi,
        this.offset.onChange( () => this.resize()),
        this._loader = s,
        this._sourceLoaded = !1,
        this._uploaded = !1,
        this._willUpdate = !1,
        this.shouldUpdate = !1,
        this._forceUpdate = !1,
        this.userData = {},
        this._canDraw = !1,
        i) {
            this._copyOnInit = !0,
            this._copiedFrom = i;
            return
        }
        this._copyOnInit = !1,
        this._initTexture()
    }
    _initState() {
        this._state = {
            anisotropy: 1,
            generateMipmap: !1,
            wrapS: null,
            wrapT: null,
            minFilter: null,
            magFilter: this.gl.LINEAR
        }
    }
    _initTexture() {
        this.gl.bindTexture(this.gl.TEXTURE_2D, this._sampler.texture),
        this.sourceType === "empty" && (this._globalParameters.flipY = !1,
        this._updateGlobalTexParameters(),
        this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 255])),
        this._canDraw = !0)
    }
    _restoreFromTexture() {
        this._copyOnInit || this._initTexture(),
        this._parent && (this._setTextureUniforms(),
        this._setSize()),
        this.copy(this._copiedFrom),
        this._canDraw = !0
    }
    _restoreContext() {
        if (this._canDraw = !1,
        this._sampler.texture = this.gl.createTexture(),
        this._sampler.isActive = !1,
        this._sampler.isTextureBound = !1,
        this._textureMatrix.isActive = !1,
        this._initState(),
        this._state.generateMipmap = !1,
        this.parameters._shouldUpdate = !0,
        !this._copiedFrom)
            this._initTexture(),
            this._parent && this._setParent(),
            this.source && (this.setSource(this.source),
            this.sourceType === "image" ? this.renderer.cache.addTexture(this) : this.needUpdate()),
            this._canDraw = !0;
        else {
            const e = this.renderer.nextRender.add( () => {
                this._copiedFrom._canDraw && (this._restoreFromTexture(),
                e.keep = !1)
            }
            , !0)
        }
    }
    addParent(e) {
        if (!e || e.type !== "Plane" && e.type !== "PingPongPlane" && e.type !== "ShaderPass" && e.type !== "RenderTarget") {
            this.renderer.production || X(this.type + ": cannot add texture as a child of ", e, " because it is not a valid parent");
            return
        }
        this._parent = e,
        this.index = this._parent.textures.length,
        this._parent.textures.push(this),
        this._setParent()
    }
    _setParent() {
        if (this._sampler.name = this._samplerName || "uSampler" + this.index,
        this._textureMatrix.name = this._samplerName ? this._samplerName + "Matrix" : "uTextureMatrix" + this.index,
        this._parent._program) {
            if (!this._parent._program.compiled) {
                this.renderer.production || X(this.type + ": Unable to create the texture because the program is not valid");
                return
            }
            if (this._setTextureUniforms(),
            this._copyOnInit) {
                const e = this.renderer.nextRender.add( () => {
                    this._copiedFrom._canDraw && this._copiedFrom._uploaded && (this.copy(this._copiedFrom),
                    e.keep = !1)
                }
                , !0);
                return
            }
            this.source ? this._parent.loader && this._parent.loader._addSourceToParent(this.source, this.sourceType) : this._size = {
                width: this._parent._boundingRect.document.width,
                height: this._parent._boundingRect.document.height
            },
            this._setSize()
        } else
            this._parent.type === "RenderTarget" && (this._size = {
                width: this._parent._size && this._parent._size.width || this.renderer._boundingRect.width,
                height: this._parent._size && this._parent._size.height || this.renderer._boundingRect.height
            },
            this._upload(),
            this._updateTexParameters(),
            this._canDraw = !0)
    }
    hasParent() {
        return !!this._parent
    }
    _setTextureUniforms() {
        const e = this._parent._program.activeUniforms;
        for (let t = 0; t < e.textures.length; t++)
            e.textures[t] === this._sampler.name && (this._sampler.isActive = !0,
            this.renderer.useProgram(this._parent._program),
            this._sampler.location = this.gl.getUniformLocation(this._parent._program.program, this._sampler.name),
            e.textureMatrices.find(s => s === this._textureMatrix.name) && (this._textureMatrix.isActive = !0,
            this._textureMatrix.location = this.gl.getUniformLocation(this._parent._program.program, this._textureMatrix.name)),
            this.gl.uniform1i(this._sampler.location, this.index))
    }
    copy(e) {
        if (!e || e.type !== "Texture") {
            this.renderer.production || X(this.type + ": Unable to set the texture from texture:", e);
            return
        }
        this._globalParameters = Object.assign({}, e._globalParameters),
        this._state = Object.assign({}, e._state),
        this.parameters.generateMipmap = e.parameters.generateMipmap,
        this._state.generateMipmap = null,
        this._size = e._size,
        !this._sourceLoaded && e._sourceLoaded && this._onSourceLoadedCallback && this._onSourceLoadedCallback(),
        this._sourceLoaded = e._sourceLoaded,
        !this._uploaded && e._uploaded && this._onSourceUploadedCallback && this._onSourceUploadedCallback(),
        this._uploaded = e._uploaded,
        this.sourceType = e.sourceType,
        this.source = e.source,
        this._videoFrameCallbackID = e._videoFrameCallbackID,
        this._sampler.texture = e._sampler.texture,
        this._copiedFrom = e,
        this._parent && this._parent._program && (!this._canDraw || !this._textureMatrix.matrix) && (this._setSize(),
        this._canDraw = !0),
        this._updateTexParameters(),
        this.renderer.needRender()
    }
    setSource(e) {
        this._sourceLoaded || this.renderer.nextRender.add( () => this._onSourceLoadedCallback && this._onSourceLoadedCallback());
        const t = e.tagName.toUpperCase() === "IMG" ? "image" : e.tagName.toLowerCase();
        if ((t === "video" || t === "canvas") && (this._useCache = !1),
        this._useCache) {
            const i = this.renderer.cache.getTextureFromSource(e);
            if (i && i.uuid !== this.uuid) {
                this._uploaded || (this.renderer.nextRender.add( () => this._onSourceUploadedCallback && this._onSourceUploadedCallback()),
                this._uploaded = !0),
                this.copy(i),
                this.resize();
                return
            }
        }
        if (this.sourceType === "empty" || this.sourceType !== t)
            if (t === "video")
                this._willUpdate = !1,
                this.shouldUpdate = !0;
            else if (t === "canvas")
                this._willUpdate = !0,
                this.shouldUpdate = !0;
            else if (t === "image")
                this._willUpdate = !1,
                this.shouldUpdate = !1;
            else {
                this.renderer.production || X(this.type + ": this HTML tag could not be converted into a texture:", e.tagName);
                return
            }
        this.source = e,
        this.sourceType = t,
        this._size = {
            width: this.source.naturalWidth || this.source.width || this.source.videoWidth,
            height: this.source.naturalHeight || this.source.height || this.source.videoHeight
        },
        this._sourceLoaded = !0,
        this.gl.bindTexture(this.gl.TEXTURE_2D, this._sampler.texture),
        this.resize(),
        this._globalParameters.flipY = !0,
        this._globalParameters.premultiplyAlpha = this._globalParameters.shouldPremultiplyAlpha,
        this.sourceType === "image" && (this.parameters.generateMipmap = this.parameters.generateMipmap || this.parameters.generateMipmap === null,
        this.parameters._shouldUpdate = this.parameters.generateMipmap,
        this._state.generateMipmap = !1,
        this._upload()),
        this.renderer.needRender()
    }
    _updateGlobalTexParameters() {
        this.renderer.state.unpackAlignment !== this._globalParameters.unpackAlignment && (this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, this._globalParameters.unpackAlignment),
        this.renderer.state.unpackAlignment = this._globalParameters.unpackAlignment),
        this.renderer.state.flipY !== this._globalParameters.flipY && (this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, this._globalParameters.flipY),
        this.renderer.state.flipY = this._globalParameters.flipY),
        this.renderer.state.premultiplyAlpha !== this._globalParameters.premultiplyAlpha && (this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this._globalParameters.premultiplyAlpha),
        this.renderer.state.premultiplyAlpha = this._globalParameters.premultiplyAlpha),
        this._globalParameters.floatingPoint === "half-float" ? this.renderer._isWebGL2 && this.renderer.extensions.EXT_color_buffer_float ? (this._globalParameters.internalFormat = this.gl.RGBA16F,
        this._globalParameters.type = this.gl.HALF_FLOAT) : this.renderer.extensions.OES_texture_half_float ? this._globalParameters.type = this.renderer.extensions.OES_texture_half_float.HALF_FLOAT_OES : this.renderer.production || X(this.type + ": could not use half-float textures because the extension is not available") : this._globalParameters.floatingPoint === "float" && (this.renderer._isWebGL2 && this.renderer.extensions.EXT_color_buffer_float ? (this._globalParameters.internalFormat = this.gl.RGBA16F,
        this._globalParameters.type = this.gl.FLOAT) : this.renderer.extensions.OES_texture_float ? this._globalParameters.type = this.renderer.extensions.OES_texture_half_float.FLOAT : this.renderer.production || X(this.type + ": could not use float textures because the extension is not available"))
    }
    _updateTexParameters() {
        this.index && this.renderer.state.activeTexture !== this.index && this._bindTexture(),
        this.parameters.wrapS !== this._state.wrapS && (!this.renderer._isWebGL2 && (!ti(this._size.width) || !ti(this._size.height)) && (this.parameters.wrapS = this.gl.CLAMP_TO_EDGE),
        this.parameters.wrapS !== this.gl.REPEAT && this.parameters.wrapS !== this.gl.CLAMP_TO_EDGE && this.parameters.wrapS !== this.gl.MIRRORED_REPEAT && (this.renderer.production || X(this.type + ": Wrong wrapS value", this.parameters.wrapS, "for this texture:", this, `
gl.CLAMP_TO_EDGE wrapping will be used instead`),
        this.parameters.wrapS = this.gl.CLAMP_TO_EDGE),
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.parameters.wrapS),
        this._state.wrapS = this.parameters.wrapS),
        this.parameters.wrapT !== this._state.wrapT && (!this.renderer._isWebGL2 && (!ti(this._size.width) || !ti(this._size.height)) && (this.parameters.wrapT = this.gl.CLAMP_TO_EDGE),
        this.parameters.wrapT !== this.gl.REPEAT && this.parameters.wrapT !== this.gl.CLAMP_TO_EDGE && this.parameters.wrapT !== this.gl.MIRRORED_REPEAT && (this.renderer.production || X(this.type + ": Wrong wrapT value", this.parameters.wrapT, "for this texture:", this, `
gl.CLAMP_TO_EDGE wrapping will be used instead`),
        this.parameters.wrapT = this.gl.CLAMP_TO_EDGE),
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.parameters.wrapT),
        this._state.wrapT = this.parameters.wrapT),
        this.parameters.generateMipmap && !this._state.generateMipmap && this.source && (!this.renderer._isWebGL2 && (!ti(this._size.width) || !ti(this._size.height)) ? this.parameters.generateMipmap = !1 : this.gl.generateMipmap(this.gl.TEXTURE_2D),
        this._state.generateMipmap = this.parameters.generateMipmap),
        this.parameters.minFilter !== this._state.minFilter && (!this.renderer._isWebGL2 && (!ti(this._size.width) || !ti(this._size.height)) && (this.parameters.minFilter = this.gl.LINEAR),
        !this.parameters.generateMipmap && this.parameters.generateMipmap !== null && (this.parameters.minFilter = this.gl.LINEAR),
        this.parameters.minFilter !== this.gl.LINEAR && this.parameters.minFilter !== this.gl.NEAREST && this.parameters.minFilter !== this.gl.NEAREST_MIPMAP_NEAREST && this.parameters.minFilter !== this.gl.LINEAR_MIPMAP_NEAREST && this.parameters.minFilter !== this.gl.NEAREST_MIPMAP_LINEAR && this.parameters.minFilter !== this.gl.LINEAR_MIPMAP_LINEAR && (this.renderer.production || X(this.type + ": Wrong minFilter value", this.parameters.minFilter, "for this texture:", this, `
gl.LINEAR filtering will be used instead`),
        this.parameters.minFilter = this.gl.LINEAR),
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.parameters.minFilter),
        this._state.minFilter = this.parameters.minFilter),
        this.parameters.magFilter !== this._state.magFilter && (!this.renderer._isWebGL2 && (!ti(this._size.width) || !ti(this._size.height)) && (this.parameters.magFilter = this.gl.LINEAR),
        this.parameters.magFilter !== this.gl.LINEAR && this.parameters.magFilter !== this.gl.NEAREST && (this.renderer.production || X(this.type + ": Wrong magFilter value", this.parameters.magFilter, "for this texture:", this, `
gl.LINEAR filtering will be used instead`),
        this.parameters.magFilter = this.gl.LINEAR),
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.parameters.magFilter),
        this._state.magFilter = this.parameters.magFilter);
        const e = this.renderer.extensions.EXT_texture_filter_anisotropic;
        if (e && this.parameters.anisotropy !== this._state.anisotropy) {
            const t = this.gl.getParameter(e.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
            this.parameters.anisotropy = Math.max(1, Math.min(this.parameters.anisotropy, t)),
            this.gl.texParameterf(this.gl.TEXTURE_2D, e.TEXTURE_MAX_ANISOTROPY_EXT, this.parameters.anisotropy),
            this._state.anisotropy = this.parameters.anisotropy
        }
    }
    setWrapS(e) {
        this.parameters.wrapS !== e && (this.parameters.wrapS = e,
        this.parameters._shouldUpdate = !0)
    }
    setWrapT(e) {
        this.parameters.wrapT !== e && (this.parameters.wrapT = e,
        this.parameters._shouldUpdate = !0)
    }
    setMinFilter(e) {
        this.parameters.minFilter !== e && (this.parameters.minFilter = e,
        this.parameters._shouldUpdate = !0)
    }
    setMagFilter(e) {
        this.parameters.magFilter !== e && (this.parameters.magFilter = e,
        this.parameters._shouldUpdate = !0)
    }
    setAnisotropy(e) {
        e = isNaN(e) ? this.parameters.anisotropy : e,
        this.parameters.anisotropy !== e && (this.parameters.anisotropy = e,
        this.parameters._shouldUpdate = !0)
    }
    needUpdate() {
        this._forceUpdate = !0
    }
    _videoFrameCallback() {
        if (this._willUpdate = !0,
        this.source)
            this.source.requestVideoFrameCallback( () => this._videoFrameCallback());
        else {
            const e = this.renderer.nextRender.add( () => {
                this.source && (e.keep = !1,
                this.source.requestVideoFrameCallback( () => this._videoFrameCallback()))
            }
            , !0)
        }
    }
    _upload() {
        this._updateGlobalTexParameters(),
        this.source ? this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this._globalParameters.internalFormat, this._globalParameters.format, this._globalParameters.type, this.source) : this.sourceType === "fbo" && this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this._globalParameters.internalFormat, this._size.width, this._size.height, 0, this._globalParameters.format, this._globalParameters.type, this.source || null),
        this._uploaded || (this.renderer.nextRender.add( () => this._onSourceUploadedCallback && this._onSourceUploadedCallback()),
        this._uploaded = !0)
    }
    _getSizes() {
        if (this.sourceType === "fbo")
            return {
                parentWidth: this._parent._boundingRect.document.width,
                parentHeight: this._parent._boundingRect.document.height,
                sourceWidth: this._parent._boundingRect.document.width,
                sourceHeight: this._parent._boundingRect.document.height,
                xOffset: 0,
                yOffset: 0
            };
        const e = this._parent.scale ? Nn.set(this._parent.scale.x, this._parent.scale.y) : Nn.set(1, 1)
          , t = this._parent._boundingRect.document.width * e.x
          , i = this._parent._boundingRect.document.height * e.y
          , s = this._size.width
          , r = this._size.height
          , a = s / r
          , o = t / i;
        let l = 0
          , u = 0;
        return o > a ? u = Math.min(0, i - t * (1 / a)) : o < a && (l = Math.min(0, t - i * a)),
        {
            parentWidth: t,
            parentHeight: i,
            sourceWidth: s,
            sourceHeight: r,
            xOffset: l,
            yOffset: u
        }
    }
    setScale(e) {
        if (!e.type || e.type !== "Vec2") {
            this.renderer.production || X(this.type + ": Cannot set scale because the parameter passed is not of Vec2 type:", e);
            return
        }
        e.sanitizeNaNValuesWith(this.scale).max(Nn.set(.001, .001)),
        e.equals(this.scale) || (this.scale.copy(e),
        this.resize())
    }
    setOffset(e) {
        if (!e.type || e.type !== "Vec2") {
            this.renderer.production || X(this.type + ": Cannot set offset because the parameter passed is not of Vec2 type:", scale);
            return
        }
        e.sanitizeNaNValuesWith(this.offset),
        e.equals(this.offset) || (this.offset.copy(e),
        this.resize())
    }
    _setSize() {
        if (this._parent && this._parent._program) {
            const e = this._getSizes();
            this._updateTextureMatrix(e)
        }
    }
    resize() {
        this.sourceType === "fbo" ? (this._size = {
            width: this._parent._size && this._parent._size.width || this._parent._boundingRect.document.width,
            height: this._parent._size && this._parent._size.height || this._parent._boundingRect.document.height
        },
        this._copiedFrom || (this.gl.bindTexture(this.gl.TEXTURE_2D, this._sampler.texture),
        this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this._globalParameters.internalFormat, this._size.width, this._size.height, 0, this._globalParameters.format, this._globalParameters.type, null))) : this.source && (this._size = {
            width: this.source.naturalWidth || this.source.width || this.source.videoWidth,
            height: this.source.naturalHeight || this.source.height || this.source.videoHeight
        }),
        this._setSize()
    }
    _updateTextureMatrix(e) {
        const t = Fc.set(e.parentWidth / (e.parentWidth - e.xOffset), e.parentHeight / (e.parentHeight - e.yOffset), 1);
        t.x /= this.scale.x,
        t.y /= this.scale.y,
        this._textureMatrix.matrix = Ac.setFromArray([t.x, 0, 0, 0, 0, t.y, 0, 0, 0, 0, 1, 0, (1 - t.x) / 2 + this.offset.x, (1 - t.y) / 2 + this.offset.y, 0, 1]),
        this._updateMatrixUniform()
    }
    _updateMatrixUniform() {
        this._textureMatrix.isActive && (this.renderer.useProgram(this._parent._program),
        this.gl.uniformMatrix4fv(this._textureMatrix.location, !1, this._textureMatrix.matrix.elements))
    }
    _onSourceLoaded(e) {
        this.setSource(e),
        this.sourceType === "image" && this.renderer.cache.addTexture(this)
    }
    _bindTexture() {
        this._canDraw && (this.renderer.state.activeTexture !== this.index && (this.gl.activeTexture(this.gl.TEXTURE0 + this.index),
        this.renderer.state.activeTexture = this.index),
        this.gl.bindTexture(this.gl.TEXTURE_2D, this._sampler.texture),
        this._sampler.isTextureBound || (this._sampler.isTextureBound = !!this.gl.getParameter(this.gl.TEXTURE_BINDING_2D),
        this._sampler.isTextureBound && this.renderer.needRender()))
    }
    _draw() {
        this._sampler.isActive && (this._bindTexture(),
        this.sourceType === "video" && this.source && !this._videoFrameCallbackID && this.source.readyState >= this.source.HAVE_CURRENT_DATA && !this.source.paused && (this._willUpdate = !0),
        (this._forceUpdate || this._willUpdate && this.shouldUpdate) && (this._state.generateMipmap = !1,
        this._upload()),
        this.sourceType === "video" && (this._willUpdate = !1),
        this._forceUpdate = !1),
        this.parameters._shouldUpdate && (this._updateTexParameters(),
        this.parameters._shouldUpdate = !1)
    }
    onSourceLoaded(e) {
        return e && (this._onSourceLoadedCallback = e),
        this
    }
    onSourceUploaded(e) {
        return e && (this._onSourceUploadedCallback = e),
        this
    }
    _dispose(e=!1) {
        this.sourceType === "video" || this.sourceType === "image" && !this.renderer.state.isActive ? (this._loader && this._loader._removeSource(this),
        this.source = null) : this.sourceType === "canvas" && (this.source.width = this.source.width,
        this.source = null),
        this._parent = null,
        this.gl && !this._copiedFrom && (e || this.sourceType !== "image" || !this.renderer.state.isActive) && (this._canDraw = !1,
        this.renderer.cache.removeTexture(this),
        this.gl.activeTexture(this.gl.TEXTURE0 + this.index),
        this.gl.bindTexture(this.gl.TEXTURE_2D, null),
        this.gl.deleteTexture(this._sampler.texture))
    }
}
class Rc {
    constructor(e, t="anonymous") {
        if (this.type = "TextureLoader",
        e = e && e.renderer || e,
        !e || e.type !== "Renderer")
            ct(this.type + ": Renderer not passed as first argument", e);
        else if (!e.gl) {
            ct(this.type + ": Renderer WebGL context is undefined", e);
            return
        }
        this.renderer = e,
        this.gl = this.renderer.gl,
        this.crossOrigin = t,
        this.elements = []
    }
    _addElement(e, t, i, s) {
        const r = {
            source: e,
            texture: t,
            load: this._sourceLoaded.bind(this, e, t, i),
            error: this._sourceLoadError.bind(this, e, s)
        };
        return this.elements.push(r),
        r
    }
    _sourceLoadError(e, t, i) {
        t && t(e, i)
    }
    _sourceLoaded(e, t, i) {
        t._sourceLoaded || (t._onSourceLoaded(e),
        this._parent && (this._increment && this._increment(),
        this.renderer.nextRender.add( () => this._parent._onLoadingCallback && this._parent._onLoadingCallback(t))),
        i && i(t))
    }
    _getSourceType(e) {
        let t;
        return typeof e == "string" ? e.match(/\.(jpeg|jpg|jfif|pjpeg|pjp|gif|bmp|png|webp|svg|avif|apng)$/) !== null ? t = "image" : e.match(/\.(webm|mp4|mpg|mpeg|avi|ogg|ogm|ogv|mov|av1)$/) !== null && (t = "video") : e.tagName.toUpperCase() === "IMG" ? t = "image" : e.tagName.toUpperCase() === "VIDEO" ? t = "video" : e.tagName.toUpperCase() === "CANVAS" && (t = "canvas"),
        t
    }
    _createImage(e) {
        if (typeof e == "string" || !e.hasAttribute("crossOrigin")) {
            const t = new Image;
            return t.crossOrigin = this.crossOrigin,
            typeof e == "string" ? t.src = e : (t.src = e.src,
            e.hasAttribute("data-sampler") && t.setAttribute("data-sampler", e.getAttribute("data-sampler"))),
            t
        } else
            return e
    }
    _createVideo(e) {
        if (typeof e == "string" || e.getAttribute("crossOrigin") === null) {
            const t = document.createElement("video");
            return t.crossOrigin = this.crossOrigin,
            typeof e == "string" ? t.src = e : (t.src = e.src,
            e.hasAttribute("data-sampler") && t.setAttribute("data-sampler", e.getAttribute("data-sampler"))),
            t
        } else
            return e
    }
    loadSource(e, t, i, s) {
        switch (this._getSourceType(e)) {
        case "image":
            this.loadImage(e, t, i, s);
            break;
        case "video":
            this.loadVideo(e, t, i, s);
            break;
        case "canvas":
            this.loadCanvas(e, t, i);
            break;
        default:
            this._sourceLoadError(e, s, "this source could not be converted into a texture: " + e);
            break
        }
    }
    loadSources(e, t, i, s) {
        for (let r = 0; r < e.length; r++)
            this.loadSource(e[r], t, i, s)
    }
    loadImage(e, t={}, i, s) {
        const r = this.renderer.cache.getTextureFromSource(e);
        let a = Object.assign({}, t);
        if (this._parent && (a = Object.assign(a, this._parent._texturesOptions)),
        a.loader = this,
        r) {
            a.sampler = typeof e != "string" && e.hasAttribute("data-sampler") ? e.getAttribute("data-sampler") : a.sampler,
            a.fromTexture = r;
            const h = new Js(this.renderer,a);
            this._sourceLoaded(r.source, h, i),
            this._parent && this._addToParent(h, r.source, "image");
            return
        }
        const o = this._createImage(e);
        a.sampler = o.hasAttribute("data-sampler") ? o.getAttribute("data-sampler") : a.sampler;
        const l = new Js(this.renderer,a)
          , u = this._addElement(o, l, i, s);
        o.complete ? this._sourceLoaded(o, l, i) : o.decode ? o.decode().then(this._sourceLoaded.bind(this, o, l, i)).catch( () => {
            o.addEventListener("load", u.load, !1),
            o.addEventListener("error", u.error, !1)
        }
        ) : (o.addEventListener("load", u.load, !1),
        o.addEventListener("error", u.error, !1)),
        this._parent && this._addToParent(l, o, "image")
    }
    loadImages(e, t, i, s) {
        for (let r = 0; r < e.length; r++)
            this.loadImage(e[r], t, i, s)
    }
    loadVideo(e, t={}, i, s) {
        const r = this._createVideo(e);
        r.preload = !0,
        r.muted = !0,
        r.loop = !0,
        r.setAttribute("playsinline", ""),
        r.crossOrigin = this.crossOrigin;
        let a = Object.assign({}, t);
        this._parent && (a = Object.assign(t, this._parent._texturesOptions)),
        a.loader = this,
        a.sampler = r.hasAttribute("data-sampler") ? r.getAttribute("data-sampler") : a.sampler;
        const o = new Js(this.renderer,a)
          , l = this._addElement(r, o, i, s);
        r.addEventListener("canplaythrough", l.load, !1),
        r.addEventListener("error", l.error, !1),
        r.readyState >= r.HAVE_FUTURE_DATA && i && this._sourceLoaded(r, o, i),
        r.load(),
        this._addToParent && this._addToParent(o, r, "video"),
        "requestVideoFrameCallback"in HTMLVideoElement.prototype && (l.videoFrameCallback = o._videoFrameCallback.bind(o),
        o._videoFrameCallbackID = r.requestVideoFrameCallback(l.videoFrameCallback))
    }
    loadVideos(e, t, i, s) {
        for (let r = 0; r < e.length; r++)
            this.loadVideo(e[r], t, i, s)
    }
    loadCanvas(e, t={}, i) {
        let s = Object.assign({}, t);
        this._parent && (s = Object.assign(t, this._parent._texturesOptions)),
        s.loader = this,
        s.sampler = e.hasAttribute("data-sampler") ? e.getAttribute("data-sampler") : s.sampler;
        const r = new Js(this.renderer,s);
        this._addElement(e, r, i, null),
        this._sourceLoaded(e, r, i),
        this._parent && this._addToParent(r, e, "canvas")
    }
    loadCanvases(e, t, i) {
        for (let s = 0; s < e.length; s++)
            this.loadCanvas(e[s], t, i)
    }
    _removeSource(e) {
        const t = this.elements.find(i => i.texture.uuid === e.uuid);
        t && (e.sourceType === "image" ? t.source.removeEventListener("load", t.load, !1) : e.sourceType === "video" && (t.videoFrameCallback && e._videoFrameCallbackID && t.source.cancelVideoFrameCallback(e._videoFrameCallbackID),
        t.source.removeEventListener("canplaythrough", t.load, !1),
        t.source.pause(),
        t.source.removeAttribute("src"),
        t.source.load()),
        t.source.removeEventListener("error", t.error, !1))
    }
}
class Oc extends Rc {
    constructor(e, t, {sourcesLoaded: i=0, sourcesToLoad: s=0, complete: r=!1, onComplete: a= () => {}
    }={}) {
        super(e, t.crossOrigin),
        this.type = "PlaneTextureLoader",
        this._parent = t,
        this._parent.type !== "Plane" && this._parent.type !== "PingPongPlane" && this._parent.type !== "ShaderPass" && (X(this.type + ": Wrong parent type assigned to this loader"),
        this._parent = null),
        this.sourcesLoaded = i,
        this.sourcesToLoad = s,
        this.complete = r,
        this.onComplete = a
    }
    _setLoaderSize(e) {
        this.sourcesToLoad = e,
        this.sourcesToLoad === 0 && (this.complete = !0,
        this.renderer.nextRender.add( () => this.onComplete && this.onComplete()))
    }
    _increment() {
        this.sourcesLoaded++,
        this.sourcesLoaded >= this.sourcesToLoad && !this.complete && (this.complete = !0,
        this.renderer.nextRender.add( () => this.onComplete && this.onComplete()))
    }
    _addSourceToParent(e, t) {
        if (t === "image") {
            const i = this._parent.images;
            !i.find(r => r.src === e.src) && i.push(e)
        } else if (t === "video") {
            const i = this._parent.videos;
            !i.find(r => r.src === e.src) && i.push(e)
        } else if (t === "canvas") {
            const i = this._parent.canvases;
            !i.find(r => r.isSameNode(e)) && i.push(e)
        }
    }
    _addToParent(e, t, i) {
        this._addSourceToParent(t, i),
        this._parent && e.addParent(this._parent)
    }
}
class Lc {
    constructor(e, t="Mesh", {vertexShaderID: i, fragmentShaderID: s, vertexShader: r, fragmentShader: a, uniforms: o={}, widthSegments: l=1, heightSegments: u=1, renderOrder: h=0, depthTest: d=!0, cullFace: f="back", texturesOptions: c={}, crossOrigin: g="anonymous"}={}) {
        if (this.type = t,
        e = e && e.renderer || e,
        (!e || e.type !== "Renderer") && (ct(this.type + ": Curtains not passed as first argument or Curtains Renderer is missing", e),
        setTimeout( () => {
            this._onErrorCallback && this._onErrorCallback()
        }
        , 0)),
        this.renderer = e,
        this.gl = this.renderer.gl,
        !this.gl) {
            this.renderer.production || ct(this.type + ": Unable to create a " + this.type + " because the Renderer WebGL context is not defined"),
            setTimeout( () => {
                this._onErrorCallback && this._onErrorCallback()
            }
            , 0);
            return
        }
        this._canDraw = !1,
        this.renderOrder = h,
        this._depthTest = d,
        this.cullFace = f,
        this.cullFace !== "back" && this.cullFace !== "front" && this.cullFace !== "none" && (this.cullFace = "back"),
        this.textures = [],
        this._texturesOptions = Object.assign({
            premultiplyAlpha: !1,
            anisotropy: 1,
            floatingPoint: "none",
            wrapS: this.gl.CLAMP_TO_EDGE,
            wrapT: this.gl.CLAMP_TO_EDGE,
            minFilter: this.gl.LINEAR,
            magFilter: this.gl.LINEAR
        }, c),
        this.crossOrigin = g,
        !r && i && document.getElementById(i) && (r = document.getElementById(i).innerHTML),
        !a && s && document.getElementById(s) && (a = document.getElementById(s).innerHTML),
        this._initMesh(),
        l = parseInt(l),
        u = parseInt(u),
        this._geometry = new Mc(this.renderer,{
            width: l,
            height: u
        }),
        this._program = new So(this.renderer,{
            parent: this,
            vertexShader: r,
            fragmentShader: a
        }),
        this._program.compiled ? (this._program.createUniforms(o),
        this.uniforms = this._program.uniformsManager.uniforms,
        this._geometry.setProgram(this._program),
        this.renderer.onSceneChange()) : this.renderer.nextRender.add( () => this._onErrorCallback && this._onErrorCallback())
    }
    _initMesh() {
        this.uuid = iu(),
        this.loader = new Oc(this.renderer,this,{
            sourcesLoaded: 0,
            initSourcesToLoad: 0,
            complete: !1,
            onComplete: () => {
                this._onReadyCallback && this._onReadyCallback(),
                this.renderer.needRender()
            }
        }),
        this.images = [],
        this.videos = [],
        this.canvases = [],
        this.userData = {},
        this._canDraw = !0
    }
    _restoreContext() {
        this._canDraw = !1,
        this._matrices && (this._matrices = null),
        this._program = new So(this.renderer,{
            parent: this,
            vertexShader: this._program.vsCode,
            fragmentShader: this._program.fsCode
        }),
        this._program.compiled && (this._geometry.restoreContext(this._program),
        this._program.createUniforms(this.uniforms),
        this.uniforms = this._program.uniformsManager.uniforms,
        this._programRestored())
    }
    setRenderTarget(e) {
        if (!e || e.type !== "RenderTarget") {
            this.renderer.production || X(this.type + ": Could not set the render target because the argument passed is not a RenderTarget class object", e);
            return
        }
        this.type === "Plane" && this.renderer.scene.removePlane(this),
        this.target = e,
        this.type === "Plane" && this.renderer.scene.addPlane(this)
    }
    setRenderOrder(e=0) {
        e = isNaN(e) ? this.renderOrder : parseInt(e),
        e !== this.renderOrder && (this.renderOrder = e,
        this.renderer.scene.setPlaneRenderOrder(this))
    }
    createTexture(e={}) {
        const t = new Js(this.renderer,Object.assign(e, this._texturesOptions));
        return t.addParent(this),
        t
    }
    addTexture(e) {
        if (!e || e.type !== "Texture") {
            this.renderer.production || X(this.type + ": cannot add ", e, " to this " + this.type + " because it is not a valid texture");
            return
        }
        e.addParent(this)
    }
    loadSources(e, t={}, i, s) {
        for (let r = 0; r < e.length; r++)
            this.loadSource(e[r], t, i, s)
    }
    loadSource(e, t={}, i, s) {
        this.loader.loadSource(e, Object.assign(t, this._texturesOptions), r => {
            i && i(r)
        }
        , (r, a) => {
            this.renderer.production || X(this.type + ": this HTML tag could not be converted into a texture:", r.tagName),
            s && s(r, a)
        }
        )
    }
    loadImage(e, t={}, i, s) {
        this.loader.loadImage(e, Object.assign(t, this._texturesOptions), r => {
            i && i(r)
        }
        , (r, a) => {
            this.renderer.production || X(this.type + `: There has been an error:
`, a, `
while loading this image:
`, r),
            s && s(r, a)
        }
        )
    }
    loadVideo(e, t={}, i, s) {
        this.loader.loadVideo(e, Object.assign(t, this._texturesOptions), r => {
            i && i(r)
        }
        , (r, a) => {
            this.renderer.production || X(this.type + `: There has been an error:
`, a, `
while loading this video:
`, r),
            s && s(r, a)
        }
        )
    }
    loadCanvas(e, t={}, i) {
        this.loader.loadCanvas(e, Object.assign(t, this._texturesOptions), s => {
            i && i(s)
        }
        )
    }
    loadImages(e, t={}, i, s) {
        for (let r = 0; r < e.length; r++)
            this.loadImage(e[r], t, i, s)
    }
    loadVideos(e, t={}, i, s) {
        for (let r = 0; r < e.length; r++)
            this.loadVideo(e[r], t, i, s)
    }
    loadCanvases(e, t={}, i) {
        for (let s = 0; s < e.length; s++)
            this.loadCanvas(e[s], t, i)
    }
    playVideos() {
        for (let e = 0; e < this.textures.length; e++) {
            const t = this.textures[e];
            if (t.sourceType === "video") {
                const i = t.source.play();
                i !== void 0 && i.catch(s => {
                    this.renderer.production || X(this.type + ": Could not play the video : ", s)
                }
                )
            }
        }
    }
    _draw() {
        this.renderer.setDepthTest(this._depthTest),
        this.renderer.setFaceCulling(this.cullFace),
        this._program.updateUniforms(),
        this._geometry.bindBuffers(),
        this.renderer.state.forceBufferUpdate = !1;
        for (let e = 0; e < this.textures.length; e++)
            if (this.textures[e]._draw(),
            this.textures[e]._sampler.isActive && !this.textures[e]._sampler.isTextureBound)
                return;
        this._geometry.draw(),
        this.renderer.state.activeTexture = null,
        this._onAfterRenderCallback && this._onAfterRenderCallback()
    }
    onError(e) {
        return e && (this._onErrorCallback = e),
        this
    }
    onLoading(e) {
        return e && (this._onLoadingCallback = e),
        this
    }
    onReady(e) {
        return e && (this._onReadyCallback = e),
        this
    }
    onRender(e) {
        return e && (this._onRenderCallback = e),
        this
    }
    onAfterRender(e) {
        return e && (this._onAfterRenderCallback = e),
        this
    }
    remove() {
        this._canDraw = !1,
        this.target && this.renderer.bindFrameBuffer(null),
        this._dispose(),
        this.type === "Plane" ? this.renderer.removePlane(this) : this.type === "ShaderPass" && (this.target && (this.target._shaderPass = null,
        this.target.remove(),
        this.target = null),
        this.renderer.removeShaderPass(this))
    }
    _dispose() {
        if (this.gl) {
            this._geometry && this._geometry.dispose(),
            this.target && this.type === "ShaderPass" && (this.renderer.removeRenderTarget(this.target),
            this.textures.shift());
            for (let e = 0; e < this.textures.length; e++)
                this.textures[e]._dispose();
            this.textures = []
        }
    }
}
const Eo = new bi
  , kc = new bi;
class Ic extends Lc {
    constructor(e, t, i="DOMMesh", {widthSegments: s, heightSegments: r, renderOrder: a, depthTest: o, cullFace: l, uniforms: u, vertexShaderID: h, fragmentShaderID: d, vertexShader: f, fragmentShader: c, texturesOptions: g, crossOrigin: p}={}) {
        h = h || t && t.getAttribute("data-vs-id"),
        d = d || t && t.getAttribute("data-fs-id"),
        super(e, i, {
            widthSegments: s,
            heightSegments: r,
            renderOrder: a,
            depthTest: o,
            cullFace: l,
            uniforms: u,
            vertexShaderID: h,
            fragmentShaderID: d,
            vertexShader: f,
            fragmentShader: c,
            texturesOptions: g,
            crossOrigin: p
        }),
        this.gl && (this.htmlElement = t,
        (!this.htmlElement || this.htmlElement.length === 0) && (this.renderer.production || X(this.type + ": The HTML element you specified does not currently exists in the DOM")),
        this._setDocumentSizes())
    }
    _setDocumentSizes() {
        let e = this.htmlElement.getBoundingClientRect();
        this._boundingRect || (this._boundingRect = {}),
        this._boundingRect.document = {
            width: e.width * this.renderer.pixelRatio,
            height: e.height * this.renderer.pixelRatio,
            top: e.top * this.renderer.pixelRatio,
            left: e.left * this.renderer.pixelRatio
        }
    }
    getBoundingRect() {
        return {
            width: this._boundingRect.document.width,
            height: this._boundingRect.document.height,
            top: this._boundingRect.document.top,
            left: this._boundingRect.document.left,
            right: this._boundingRect.document.left + this._boundingRect.document.width,
            bottom: this._boundingRect.document.top + this._boundingRect.document.height
        }
    }
    resize() {
        this._setDocumentSizes(),
        this.type === "Plane" && (this.setPerspective(this.camera.fov, this.camera.near, this.camera.far),
        this._setWorldSizes(),
        this._applyWorldPositions());
        for (let e = 0; e < this.textures.length; e++)
            this.textures[e].resize();
        this.renderer.nextRender.add( () => this._onAfterResizeCallback && this._onAfterResizeCallback())
    }
    mouseToPlaneCoords(e) {
        const t = this.scale ? this.scale : kc.set(1, 1)
          , i = Eo.set((this._boundingRect.document.width - this._boundingRect.document.width * t.x) / 2, (this._boundingRect.document.height - this._boundingRect.document.height * t.y) / 2)
          , s = {
            width: this._boundingRect.document.width * t.x / this.renderer.pixelRatio,
            height: this._boundingRect.document.height * t.y / this.renderer.pixelRatio,
            top: (this._boundingRect.document.top + i.y) / this.renderer.pixelRatio,
            left: (this._boundingRect.document.left + i.x) / this.renderer.pixelRatio
        };
        return Eo.set((e.x - s.left) / s.width * 2 - 1, 1 - (e.y - s.top) / s.height * 2)
    }
    onAfterResize(e) {
        return e && (this._onAfterResizeCallback = e),
        this
    }
}
class zc {
    constructor({fov: e=50, near: t=.1, far: i=150, width: s, height: r, pixelRatio: a=1}={}) {
        this.position = new _e,
        this.projectionMatrix = new ui,
        this.worldMatrix = new ui,
        this.viewMatrix = new ui,
        this._shouldUpdate = !1,
        this.setSize(),
        this.setPerspective(e, t, i, s, r, a)
    }
    setFov(e) {
        e = isNaN(e) ? this.fov : parseFloat(e),
        e = Math.max(1, Math.min(e, 179)),
        e !== this.fov && (this.fov = e,
        this.setPosition(),
        this._shouldUpdate = !0),
        this.setCSSPerspective()
    }
    setNear(e) {
        e = isNaN(e) ? this.near : parseFloat(e),
        e = Math.max(e, .01),
        e !== this.near && (this.near = e,
        this._shouldUpdate = !0)
    }
    setFar(e) {
        e = isNaN(e) ? this.far : parseFloat(e),
        e = Math.max(e, 50),
        e !== this.far && (this.far = e,
        this._shouldUpdate = !0)
    }
    setPixelRatio(e) {
        e !== this.pixelRatio && (this._shouldUpdate = !0),
        this.pixelRatio = e
    }
    setSize(e, t) {
        (e !== this.width || t !== this.height) && (this._shouldUpdate = !0),
        this.width = e,
        this.height = t
    }
    setPerspective(e, t, i, s, r, a) {
        this.setPixelRatio(a),
        this.setSize(s, r),
        this.setFov(e),
        this.setNear(t),
        this.setFar(i),
        this._shouldUpdate && this.updateProjectionMatrix()
    }
    setPosition() {
        this.position.set(0, 0, 1),
        this.worldMatrix.setFromArray([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, this.position.x, this.position.y, this.position.z, 1]),
        this.viewMatrix = this.viewMatrix.copy(this.worldMatrix).getInverse()
    }
    setCSSPerspective() {
        this.CSSPerspective = Math.pow(Math.pow(this.width / (2 * this.pixelRatio), 2) + Math.pow(this.height / (2 * this.pixelRatio), 2), .5) / Math.tan(this.fov * .5 * Math.PI / 180)
    }
    getScreenRatiosFromFov(e=0) {
        const t = this.position.z;
        e < t ? e -= t : e += t;
        const i = this.fov * Math.PI / 180
          , s = 2 * Math.tan(i / 2) * Math.abs(e);
        return {
            width: s * this.width / this.height,
            height: s
        }
    }
    updateProjectionMatrix() {
        const e = this.width / this.height
          , t = this.near * Math.tan(Math.PI / 180 * .5 * this.fov)
          , i = 2 * t
          , s = e * i
          , r = -.5 * s
          , a = r + s
          , o = t - i
          , l = 2 * this.near / (a - r)
          , u = 2 * this.near / (t - o)
          , h = (a + r) / (a - r)
          , d = (t + o) / (t - o)
          , f = -(this.far + this.near) / (this.far - this.near)
          , c = -2 * this.far * this.near / (this.far - this.near);
        this.projectionMatrix.setFromArray([l, 0, 0, 0, 0, u, 0, 0, h, d, f, -1, 0, 0, c, 0])
    }
    forceUpdate() {
        this._shouldUpdate = !0
    }
    cancelUpdate() {
        this._shouldUpdate = !1
    }
}
class Sn {
    constructor(e=new Float32Array([0, 0, 0, 1]), t="XYZ") {
        this.type = "Quat",
        this.elements = e,
        this.axisOrder = t
    }
    setFromArray(e) {
        return this.elements[0] = e[0],
        this.elements[1] = e[1],
        this.elements[2] = e[2],
        this.elements[3] = e[3],
        this
    }
    setAxisOrder(e) {
        switch (e = e.toUpperCase(),
        e) {
        case "XYZ":
        case "YXZ":
        case "ZXY":
        case "ZYX":
        case "YZX":
        case "XZY":
            this.axisOrder = e;
            break;
        default:
            this.axisOrder = "XYZ"
        }
        return this
    }
    copy(e) {
        return this.elements = e.elements,
        this.axisOrder = e.axisOrder,
        this
    }
    clone() {
        return new Sn().copy(this)
    }
    equals(e) {
        return this.elements[0] === e.elements[0] && this.elements[1] === e.elements[1] && this.elements[2] === e.elements[2] && this.elements[3] === e.elements[3] && this.axisOrder === e.axisOrder
    }
    setFromVec3(e) {
        const t = e.x * .5
          , i = e.y * .5
          , s = e.z * .5
          , r = Math.cos(t)
          , a = Math.cos(i)
          , o = Math.cos(s)
          , l = Math.sin(t)
          , u = Math.sin(i)
          , h = Math.sin(s);
        return this.axisOrder === "XYZ" ? (this.elements[0] = l * a * o + r * u * h,
        this.elements[1] = r * u * o - l * a * h,
        this.elements[2] = r * a * h + l * u * o,
        this.elements[3] = r * a * o - l * u * h) : this.axisOrder === "YXZ" ? (this.elements[0] = l * a * o + r * u * h,
        this.elements[1] = r * u * o - l * a * h,
        this.elements[2] = r * a * h - l * u * o,
        this.elements[3] = r * a * o + l * u * h) : this.axisOrder === "ZXY" ? (this.elements[0] = l * a * o - r * u * h,
        this.elements[1] = r * u * o + l * a * h,
        this.elements[2] = r * a * h + l * u * o,
        this.elements[3] = r * a * o - l * u * h) : this.axisOrder === "ZYX" ? (this.elements[0] = l * a * o - r * u * h,
        this.elements[1] = r * u * o + l * a * h,
        this.elements[2] = r * a * h - l * u * o,
        this.elements[3] = r * a * o + l * u * h) : this.axisOrder === "YZX" ? (this.elements[0] = l * a * o + r * u * h,
        this.elements[1] = r * u * o + l * a * h,
        this.elements[2] = r * a * h - l * u * o,
        this.elements[3] = r * a * o - l * u * h) : this.axisOrder === "XZY" && (this.elements[0] = l * a * o - r * u * h,
        this.elements[1] = r * u * o - l * a * h,
        this.elements[2] = r * a * h + l * u * o,
        this.elements[3] = r * a * o + l * u * h),
        this
    }
}
const Bc = new bi
  , Nc = new _e
  , Vc = new _e
  , Uc = new _e
  , Gc = new _e
  , Wc = new _e
  , Hc = new _e
  , Ot = new _e
  , Lt = new _e
  , Co = new Sn
  , Xc = new _e(.5,.5,0)
  , Yc = new _e
  , qc = new _e
  , $c = new _e
  , jc = new _e
  , Qc = new bi;
class Kc extends Ic {
    constructor(e, t, {widthSegments: i, heightSegments: s, renderOrder: r, depthTest: a, cullFace: o, uniforms: l, vertexShaderID: u, fragmentShaderID: h, vertexShader: d, fragmentShader: f, texturesOptions: c, crossOrigin: g, alwaysDraw: p=!1, visible: _=!0, transparent: y=!1, drawCheckMargins: D={
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }, autoloadSources: m=!0, watchScroll: v=!0, fov: x=50}={}) {
        super(e, t, "Plane", {
            widthSegments: i,
            heightSegments: s,
            renderOrder: r,
            depthTest: a,
            cullFace: o,
            uniforms: l,
            vertexShaderID: u,
            fragmentShaderID: h,
            vertexShader: d,
            fragmentShader: f,
            texturesOptions: c,
            crossOrigin: g
        }),
        this.gl && (this.index = this.renderer.planes.length,
        this.target = null,
        this.alwaysDraw = p,
        this._shouldDraw = !0,
        this.visible = _,
        this._transparent = y,
        this.drawCheckMargins = D,
        this.autoloadSources = m,
        this.watchScroll = v,
        this._updateMVMatrix = !1,
        this.camera = new zc({
            fov: x,
            width: this.renderer._boundingRect.width,
            height: this.renderer._boundingRect.height,
            pixelRatio: this.renderer.pixelRatio
        }),
        this._program.compiled && (this._initPlane(),
        this.renderer.scene.addPlane(this),
        this.renderer.planes.push(this)))
    }
    _programRestored() {
        this.target && this.setRenderTarget(this.renderer.renderTargets[this.target.index]),
        this._initMatrices(),
        this.setPerspective(this.camera.fov, this.camera.near, this.camera.far),
        this._setWorldSizes(),
        this._applyWorldPositions(),
        this.renderer.scene.addPlane(this);
        for (let e = 0; e < this.textures.length; e++)
            this.textures[e]._parent = this,
            this.textures[e]._restoreContext();
        this._canDraw = !0
    }
    _initPlane() {
        this._initTransformValues(),
        this._initPositions(),
        this.setPerspective(this.camera.fov, this.camera.near, this.camera.far),
        this._initSources()
    }
    _initTransformValues() {
        this.rotation = new _e,
        this.rotation.onChange( () => this._applyRotation()),
        this.quaternion = new Sn,
        this.relativeTranslation = new _e,
        this.relativeTranslation.onChange( () => this._setTranslation()),
        this._translation = new _e,
        this.scale = new _e(1),
        this.scale.onChange( () => {
            this.scale.z = 1,
            this._applyScale()
        }
        ),
        this.transformOrigin = new _e(.5,.5,0),
        this.transformOrigin.onChange( () => {
            this._setWorldTransformOrigin(),
            this._updateMVMatrix = !0
        }
        )
    }
    resetPlane(e) {
        this._initTransformValues(),
        this._setWorldTransformOrigin(),
        e !== null && e ? (this.htmlElement = e,
        this.resize()) : !e && !this.renderer.production && X(this.type + ": You are trying to reset a plane with a HTML element that does not exist. The old HTML element will be kept instead.")
    }
    removeRenderTarget() {
        this.target && (this.renderer.scene.removePlane(this),
        this.target = null,
        this.renderer.scene.addPlane(this))
    }
    _initPositions() {
        this._initMatrices(),
        this._setWorldSizes(),
        this._applyWorldPositions()
    }
    _initMatrices() {
        const e = new ui;
        this._matrices = {
            world: {
                matrix: e
            },
            modelView: {
                name: "uMVMatrix",
                matrix: e,
                location: this.gl.getUniformLocation(this._program.program, "uMVMatrix")
            },
            projection: {
                name: "uPMatrix",
                matrix: e,
                location: this.gl.getUniformLocation(this._program.program, "uPMatrix")
            },
            modelViewProjection: {
                matrix: e
            }
        }
    }
    _setPerspectiveMatrix() {
        this.camera._shouldUpdate && (this.renderer.useProgram(this._program),
        this.gl.uniformMatrix4fv(this._matrices.projection.location, !1, this._matrices.projection.matrix.elements)),
        this.camera.cancelUpdate()
    }
    setPerspective(e, t, i) {
        this.camera.setPerspective(e, t, i, this.renderer._boundingRect.width, this.renderer._boundingRect.height, this.renderer.pixelRatio),
        this.renderer.state.isContextLost && this.camera.forceUpdate(),
        this._matrices.projection.matrix = this.camera.projectionMatrix,
        this.camera._shouldUpdate && (this._setWorldSizes(),
        this._applyWorldPositions(),
        this._translation.z = this.relativeTranslation.z / this.camera.CSSPerspective),
        this._updateMVMatrix = this.camera._shouldUpdate
    }
    _setMVMatrix() {
        this._updateMVMatrix && (this._matrices.world.matrix = this._matrices.world.matrix.composeFromOrigin(this._translation, this.quaternion, this.scale, this._boundingRect.world.transformOrigin),
        this._matrices.world.matrix.scale({
            x: this._boundingRect.world.width,
            y: this._boundingRect.world.height,
            z: 1
        }),
        this._matrices.modelView.matrix.copy(this._matrices.world.matrix),
        this._matrices.modelView.matrix.elements[14] -= this.camera.position.z,
        this._matrices.modelViewProjection.matrix = this._matrices.projection.matrix.multiply(this._matrices.modelView.matrix),
        this.alwaysDraw || this._shouldDrawCheck(),
        this.renderer.useProgram(this._program),
        this.gl.uniformMatrix4fv(this._matrices.modelView.location, !1, this._matrices.modelView.matrix.elements)),
        this._updateMVMatrix = !1
    }
    _setWorldTransformOrigin() {
        this._boundingRect.world.transformOrigin = new _e((this.transformOrigin.x * 2 - 1) * this._boundingRect.world.width,-(this.transformOrigin.y * 2 - 1) * this._boundingRect.world.height,this.transformOrigin.z)
    }
    _documentToWorldSpace(e) {
        return Vc.set(e.x * this.renderer.pixelRatio / this.renderer._boundingRect.width * this._boundingRect.world.ratios.width, -(e.y * this.renderer.pixelRatio / this.renderer._boundingRect.height) * this._boundingRect.world.ratios.height, e.z)
    }
    _setWorldSizes() {
        const e = this.camera.getScreenRatiosFromFov();
        this._boundingRect.world = {
            width: this._boundingRect.document.width / this.renderer._boundingRect.width * e.width / 2,
            height: this._boundingRect.document.height / this.renderer._boundingRect.height * e.height / 2,
            ratios: e
        },
        this._setWorldTransformOrigin()
    }
    _setWorldPosition() {
        const e = {
            x: this._boundingRect.document.width / 2 + this._boundingRect.document.left,
            y: this._boundingRect.document.height / 2 + this._boundingRect.document.top
        }
          , t = {
            x: this.renderer._boundingRect.width / 2 + this.renderer._boundingRect.left,
            y: this.renderer._boundingRect.height / 2 + this.renderer._boundingRect.top
        };
        this._boundingRect.world.top = (t.y - e.y) / this.renderer._boundingRect.height * this._boundingRect.world.ratios.height,
        this._boundingRect.world.left = (e.x - t.x) / this.renderer._boundingRect.width * this._boundingRect.world.ratios.width
    }
    setScale(e) {
        if (!e.type || e.type !== "Vec2") {
            this.renderer.production || X(this.type + ": Cannot set scale because the parameter passed is not of Vec2 type:", e);
            return
        }
        e.sanitizeNaNValuesWith(this.scale).max(Bc.set(.001, .001)),
        (e.x !== this.scale.x || e.y !== this.scale.y) && (this.scale.set(e.x, e.y, 1),
        this._applyScale())
    }
    _applyScale() {
        for (let e = 0; e < this.textures.length; e++)
            this.textures[e].resize();
        this._updateMVMatrix = !0
    }
    setRotation(e) {
        if (!e.type || e.type !== "Vec3") {
            this.renderer.production || X(this.type + ": Cannot set rotation because the parameter passed is not of Vec3 type:", e);
            return
        }
        e.sanitizeNaNValuesWith(this.rotation),
        e.equals(this.rotation) || (this.rotation.copy(e),
        this._applyRotation())
    }
    _applyRotation() {
        this.quaternion.setFromVec3(this.rotation),
        this._updateMVMatrix = !0
    }
    setTransformOrigin(e) {
        if (!e.type || e.type !== "Vec3") {
            this.renderer.production || X(this.type + ": Cannot set transform origin because the parameter passed is not of Vec3 type:", e);
            return
        }
        e.sanitizeNaNValuesWith(this.transformOrigin),
        e.equals(this.transformOrigin) || (this.transformOrigin.copy(e),
        this._setWorldTransformOrigin(),
        this._updateMVMatrix = !0)
    }
    _setTranslation() {
        let e = Nc.set(0, 0, 0);
        this.relativeTranslation.equals(e) || (e = this._documentToWorldSpace(this.relativeTranslation)),
        this._translation.set(this._boundingRect.world.left + e.x, this._boundingRect.world.top + e.y, this.relativeTranslation.z / this.camera.CSSPerspective),
        this._updateMVMatrix = !0
    }
    setRelativeTranslation(e) {
        if (!e.type || e.type !== "Vec3") {
            this.renderer.production || X(this.type + ": Cannot set translation because the parameter passed is not of Vec3 type:", e);
            return
        }
        e.sanitizeNaNValuesWith(this.relativeTranslation),
        e.equals(this.relativeTranslation) || (this.relativeTranslation.copy(e),
        this._setTranslation())
    }
    _applyWorldPositions() {
        this._setWorldPosition(),
        this._setTranslation()
    }
    updatePosition() {
        this._setDocumentSizes(),
        this._applyWorldPositions()
    }
    updateScrollPosition(e, t) {
        (e || t) && (this._boundingRect.document.top += t * this.renderer.pixelRatio,
        this._boundingRect.document.left += e * this.renderer.pixelRatio,
        this._applyWorldPositions())
    }
    _getIntersection(e, t) {
        let i = t.clone().sub(e)
          , s = e.clone();
        for (; s.z > -1; )
            s.add(i);
        return s
    }
    _getNearPlaneIntersections(e, t, i) {
        const s = this._matrices.modelViewProjection.matrix;
        if (i.length === 1)
            i[0] === 0 ? (t[0] = this._getIntersection(t[1], Ot.set(.95, 1, 0).applyMat4(s)),
            t.push(this._getIntersection(t[3], Lt.set(-1, -.95, 0).applyMat4(s)))) : i[0] === 1 ? (t[1] = this._getIntersection(t[0], Ot.set(-.95, 1, 0).applyMat4(s)),
            t.push(this._getIntersection(t[2], Lt.set(1, -.95, 0).applyMat4(s)))) : i[0] === 2 ? (t[2] = this._getIntersection(t[3], Ot.set(-.95, -1, 0).applyMat4(s)),
            t.push(this._getIntersection(t[1], Lt.set(1, .95, 0).applyMat4(s)))) : i[0] === 3 && (t[3] = this._getIntersection(t[2], Ot.set(.95, -1, 0).applyMat4(s)),
            t.push(this._getIntersection(t[0], Lt.set(-1, .95, 0).applyMat4(s))));
        else if (i.length === 2)
            i[0] === 0 && i[1] === 1 ? (t[0] = this._getIntersection(t[3], Ot.set(-1, -.95, 0).applyMat4(s)),
            t[1] = this._getIntersection(t[2], Lt.set(1, -.95, 0).applyMat4(s))) : i[0] === 1 && i[1] === 2 ? (t[1] = this._getIntersection(t[0], Ot.set(-.95, 1, 0).applyMat4(s)),
            t[2] = this._getIntersection(t[3], Lt.set(-.95, -1, 0).applyMat4(s))) : i[0] === 2 && i[1] === 3 ? (t[2] = this._getIntersection(t[1], Ot.set(1, .95, 0).applyMat4(s)),
            t[3] = this._getIntersection(t[0], Lt.set(-1, .95, 0).applyMat4(s))) : i[0] === 0 && i[1] === 3 && (t[0] = this._getIntersection(t[1], Ot.set(.95, 1, 0).applyMat4(s)),
            t[3] = this._getIntersection(t[2], Lt.set(.95, -1, 0).applyMat4(s)));
        else if (i.length === 3) {
            let r = 0;
            for (let a = 0; a < e.length; a++)
                i.includes(a) || (r = a);
            t = [t[r]],
            r === 0 ? (t.push(this._getIntersection(t[0], Ot.set(-.95, 1, 0).applyMat4(s))),
            t.push(this._getIntersection(t[0], Lt.set(-1, .95, 0).applyMat4(s)))) : r === 1 ? (t.push(this._getIntersection(t[0], Ot.set(.95, 1, 0).applyMat4(s))),
            t.push(this._getIntersection(t[0], Lt.set(1, .95, 0).applyMat4(s)))) : r === 2 ? (t.push(this._getIntersection(t[0], Ot.set(.95, -1, 0).applyMat4(s))),
            t.push(this._getIntersection(t[0], Lt.set(1, -.95, 0).applyMat4(s)))) : r === 3 && (t.push(this._getIntersection(t[0], Ot.set(-.95, -1, 0).applyMat4(s))),
            t.push(this._getIntersection(t[0], Lt.set(-1 - .95, 0).applyMat4(s))))
        } else
            for (let r = 0; r < e.length; r++)
                t[r][0] = 1e4,
                t[r][1] = 1e4;
        return t
    }
    _getWorldCoords() {
        const e = [Uc.set(-1, 1, 0), Gc.set(1, 1, 0), Wc.set(1, -1, 0), Hc.set(-1, -1, 0)];
        let t = []
          , i = [];
        for (let l = 0; l < e.length; l++) {
            const u = e[l].applyMat4(this._matrices.modelViewProjection.matrix);
            t.push(u),
            Math.abs(u.z) > 1 && i.push(l)
        }
        i.length && (t = this._getNearPlaneIntersections(e, t, i));
        let s = 1 / 0
          , r = -1 / 0
          , a = 1 / 0
          , o = -1 / 0;
        for (let l = 0; l < t.length; l++) {
            const u = t[l];
            u.x < s && (s = u.x),
            u.x > r && (r = u.x),
            u.y < a && (a = u.y),
            u.y > o && (o = u.y)
        }
        return {
            top: o,
            right: r,
            bottom: a,
            left: s
        }
    }
    _computeWebGLBoundingRect() {
        const e = this._getWorldCoords();
        let t = {
            top: 1 - (e.top + 1) / 2,
            right: (e.right + 1) / 2,
            bottom: 1 - (e.bottom + 1) / 2,
            left: (e.left + 1) / 2
        };
        t.width = t.right - t.left,
        t.height = t.bottom - t.top,
        this._boundingRect.worldToDocument = {
            width: t.width * this.renderer._boundingRect.width,
            height: t.height * this.renderer._boundingRect.height,
            top: t.top * this.renderer._boundingRect.height + this.renderer._boundingRect.top,
            left: t.left * this.renderer._boundingRect.width + this.renderer._boundingRect.left,
            right: t.left * this.renderer._boundingRect.width + this.renderer._boundingRect.left + t.width * this.renderer._boundingRect.width,
            bottom: t.top * this.renderer._boundingRect.height + this.renderer._boundingRect.top + t.height * this.renderer._boundingRect.height
        }
    }
    getWebGLBoundingRect() {
        if (this._matrices.modelViewProjection)
            (!this._boundingRect.worldToDocument || this.alwaysDraw) && this._computeWebGLBoundingRect();
        else
            return this._boundingRect.document;
        return this._boundingRect.worldToDocument
    }
    _getWebGLDrawRect() {
        return this._computeWebGLBoundingRect(),
        {
            top: this._boundingRect.worldToDocument.top - this.drawCheckMargins.top,
            right: this._boundingRect.worldToDocument.right + this.drawCheckMargins.right,
            bottom: this._boundingRect.worldToDocument.bottom + this.drawCheckMargins.bottom,
            left: this._boundingRect.worldToDocument.left - this.drawCheckMargins.left
        }
    }
    _shouldDrawCheck() {
        const e = this._getWebGLDrawRect();
        Math.round(e.right) <= this.renderer._boundingRect.left || Math.round(e.left) >= this.renderer._boundingRect.left + this.renderer._boundingRect.width || Math.round(e.bottom) <= this.renderer._boundingRect.top || Math.round(e.top) >= this.renderer._boundingRect.top + this.renderer._boundingRect.height ? this._shouldDraw && (this._shouldDraw = !1,
        this.renderer.nextRender.add( () => this._onLeaveViewCallback && this._onLeaveViewCallback())) : (this._shouldDraw || this.renderer.nextRender.add( () => this._onReEnterViewCallback && this._onReEnterViewCallback()),
        this._shouldDraw = !0)
    }
    isDrawn() {
        return this._canDraw && this.visible && (this._shouldDraw || this.alwaysDraw)
    }
    enableDepthTest(e) {
        this._depthTest = e
    }
    _initSources() {
        let e = 0;
        if (this.autoloadSources) {
            const t = this.htmlElement.getElementsByTagName("img")
              , i = this.htmlElement.getElementsByTagName("video")
              , s = this.htmlElement.getElementsByTagName("canvas");
            t.length && this.loadImages(t),
            i.length && this.loadVideos(i),
            s.length && this.loadCanvases(s),
            e = t.length + i.length + s.length
        }
        this.loader._setLoaderSize(e),
        this._canDraw = !0
    }
    _startDrawing() {
        this._canDraw && (this._onRenderCallback && this._onRenderCallback(),
        this.target ? this.renderer.bindFrameBuffer(this.target) : this.renderer.state.scenePassIndex === null && this.renderer.bindFrameBuffer(null),
        this._setPerspectiveMatrix(),
        this._setMVMatrix(),
        (this.alwaysDraw || this._shouldDraw) && this.visible && this._draw())
    }
    mouseToPlaneCoords(e) {
        if (Co.setAxisOrder(this.quaternion.axisOrder),
        Co.equals(this.quaternion) && Xc.equals(this.transformOrigin))
            return super.mouseToPlaneCoords(e);
        {
            const t = {
                x: 2 * (e.x / (this.renderer._boundingRect.width / this.renderer.pixelRatio)) - 1,
                y: 2 * (1 - e.y / (this.renderer._boundingRect.height / this.renderer.pixelRatio)) - 1
            }
              , i = this.camera.position.clone()
              , s = Yc.set(t.x, t.y, -.5);
            s.unproject(this.camera),
            s.sub(i).normalize();
            const r = qc.set(0, 0, -1);
            r.applyQuat(this.quaternion).normalize();
            const a = jc.set(0, 0, 0)
              , o = r.dot(s);
            if (Math.abs(o) >= 1e-4) {
                const l = this._matrices.world.matrix.getInverse().multiply(this.camera.viewMatrix)
                  , u = this._boundingRect.world.transformOrigin.clone().add(this._translation)
                  , h = $c.set(this._translation.x - u.x, this._translation.y - u.y, this._translation.z - u.z);
                h.applyQuat(this.quaternion),
                u.add(h);
                const d = r.dot(u.clone().sub(i)) / o;
                a.copy(i.add(s.multiplyScalar(d))),
                a.applyMat4(l)
            } else
                a.set(1 / 0, 1 / 0, 1 / 0);
            return Qc.set(a.x, a.y)
        }
    }
    onReEnterView(e) {
        return e && (this._onReEnterViewCallback = e),
        this
    }
    onLeaveView(e) {
        return e && (this._onLeaveViewCallback = e),
        this
    }
}
var Zc = `#ifdef GL_ES
  precision mediump float;
  #endif

  #define PI2 6.28318530718
  #define PI 3.14159265359
  #define S(a,b,n) smoothstep(a,b,n)

  uniform float uTime;
  uniform float uProgress;
  uniform vec2 uReso;
  uniform vec2 uMouse;
  
  varying vec3 vVertexPosition;
  varying vec2 vTextureCoord0;
  varying vec2 vTextureCoord1;
  varying vec2 vTextureCoordMap;

  uniform sampler2D texture0;
  uniform sampler2D texture1;
  uniform sampler2D map;

  float exponentialEasing (float x, float a){

    float epsilon = 0.00001;
    float min_param_a = 0.0 + epsilon;
    float max_param_a = 1.0 - epsilon;
    a = max(min_param_a, min(max_param_a, a));

    if (a < 0.5){
      
      a = 2.0 * a;
      float y = pow(x, a);
      return y;
    } else {
      
      a = 2.0 * (a-0.5);
      float y = pow(x, 1.0 / (1.-a));
      return y;
    }
  }

  vec4 blur13(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {
    vec4 color = vec4(0.0);
    vec2 off1 = vec2(1.411764705882353) * direction;
    vec2 off2 = vec2(3.2941176470588234) * direction;
    vec2 off3 = vec2(5.176470588235294) * direction;
    color += texture2D(image, uv) * 0.1964825501511404;
    color += texture2D(image, uv + (off1 / resolution)) * 0.2969069646728344;
    color += texture2D(image, uv - (off1 / resolution)) * 0.2969069646728344;
    color += texture2D(image, uv + (off2 / resolution)) * 0.09447039785044732;
    color += texture2D(image, uv - (off2 / resolution)) * 0.09447039785044732;
    color += texture2D(image, uv + (off3 / resolution)) * 0.010381362401148057;
    color += texture2D(image, uv - (off3 / resolution)) * 0.010381362401148057;
    return color;
  }

  void main(){
    vec2 uv0 = vTextureCoord0;
    vec2 uv1 = vTextureCoord1;

    float progress0 = uProgress;
    float progress1 = 1. - uProgress;

    vec4 map = blur13(map, vTextureCoordMap, uReso, vec2(2.)) + 0.5;

    uv0.x += progress0 * map.r;
    uv1.y -= progress1 * map.r; 

    vec4 color = texture2D( texture0, uv0 );
    vec4 color1 = texture2D( texture1, uv1 );

    gl_FragColor = mix(color, color1, progress0 );
    gl_FragColor.rgb *= gl_FragColor.a;
  }`
  , Jc = `#ifdef GL_ES
  precision mediump float;
  #endif

  attribute vec3 aVertexPosition;
  attribute vec2 aTextureCoord;

  uniform mat4 uMVMatrix;
  uniform mat4 uPMatrix;

  uniform mat4 texture0Matrix;
  uniform mat4 texture1Matrix;
  uniform mat4 mapMatrix;

  varying vec3 vVertexPosition;
  varying vec2 vTextureCoord0;
  varying vec2 vTextureCoord1;
  varying vec2 vTextureCoordMap;

  void main() {
    vec3 vertexPosition = aVertexPosition;

    gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, 1.0);

    vTextureCoord0 = (texture0Matrix * vec4(aTextureCoord, 0., 1.)).xy;
    vTextureCoord1 = (texture1Matrix * vec4(aTextureCoord, 0., 1.)).xy;
    vTextureCoordMap = (mapMatrix * vec4(aTextureCoord, 0., 1.)).xy;
    vVertexPosition = vertexPosition;
  }`;
class ed {
    constructor() {
        this.canvasEl = document.querySelector(S.heroCanvas),
        this.planeEl = document.querySelector(S.heroPlane),
        this.webGLCurtain = new mc({
            container: this.canvasEl,
            watchScroll: !1,
            autoResize: !0,
            alpha: !0,
            antialias: !0,
            pixelRatio: Math.min(1.5, window.devicePixelRatio)
        }),
        this.mouse = {
            x: 0,
            y: 0
        },
        this.params = {
            vertexShader: Jc,
            fragmentShader: Zc,
            uniforms: {
                time: {
                    name: "uTime",
                    type: "1f",
                    value: 0
                },
                mousepos: {
                    name: "uMouse",
                    type: "2f",
                    value: [0, 0]
                },
                resolution: {
                    name: "uReso",
                    type: "2f",
                    value: [this.planeEl.clientWidth, this.planeEl.clientHeight]
                },
                progress: {
                    name: "uProgress",
                    type: "1f",
                    value: 0
                }
            }
        },
        this.initPlane(),
        this.webGLCurtain.onAfterResize( () => {
            this.plane.uniforms.resolution.value = [this.planeEl.clientWidth, this.planeEl.clientHeight]
        }
        )
    }
    setInitialView() {
        M.set(this.canvasEl, {
            opacity: 0
        })
    }
    initPlane() {
        this.plane = new Kc(this.webGLCurtain,this.planeEl,this.params),
        this.plane.transformOrigin.x = .5,
        this.plane.transformOrigin.y = 0,
        this.plane.transformOrigin.z = 0,
        this.plane.scale.y = 1.1,
        this.plane.scale.x = 1.1,
        this.plane && this.plane.onReady( () => {
            this.update(),
            this.scrollEffect()
        }
        )
    }
    update() {
        this.plane.onRender( () => {
            this.plane.uniforms.time.value += .01,
            this.plane.uniforms.resolution.value = [this.planeEl.clientWidth, this.planeEl.clientHeight]
        }
        )
    }
    scrollEffect() {
        M.timeline({
            defaults: {
                ease: "power1.inOut"
            },
            scrollTrigger: {
                trigger: S.hero,
                scrub: 1,
                start: "top top",
                end: "bottom bottom"
            }
        }).fromTo(this.plane.uniforms.progress, {
            value: 1
        }, {
            value: .6
        })
    }
    introEffect(e) {
        const t = e.delay || .2
          , i = e.duration || 1.5
          , s = e.startProgress || 0
          , r = e.finishProgress || 1;
        M.fromTo(this.plane.uniforms.progress, {
            value: s
        }, {
            value: r,
            duration: i,
            delay: t
        })
    }
}
const ru = new ed;
class td {
    constructor(e) {
        Pe(this, "routes", []);
        Pe(this, "mode", null);
        Pe(this, "root", "/");
        Pe(this, "intervalId", null);
        this.mode = window.history.pushState ? "history" : "hash",
        this.mode = e.mode || this.mode,
        this.root = e.root || this.root,
        this.currentHash = window.location.hash,
        this.listen()
    }
    add(e, t) {
        return this.routes.push({
            path: e,
            cb: t
        }),
        this
    }
    getCurrentHash() {
        return window.location.hash
    }
    remove(e) {
        return this.routes = this.routes.filter(t => t.path !== e),
        this
    }
    flush() {
        return this.routes.length = 0,
        this
    }
    clearSlashes(e) {
        return e.toString().replace(/\/$/, "").replace(/^\//, "")
    }
    getFragment() {
        let e = "";
        if (this.mode === "history")
            e = decodeURI(window.location.pathname + window.location.search).replace(/\?(.*)$/, ""),
            e = this.root !== "/" ? e.replace(this.root, "") : e;
        else {
            const t = window.location.href.match(/#(.*)$/);
            e = t ? t[1] : ""
        }
        return this.clearSlashes(e)
    }
    navigate(e="") {
        const t = this.root + this.clearSlashes(e);
        return this.mode === "history" ? window.history.pushState(null, null, t) : window.location.href = window.location.href.replace(/#(.*)$/, "") + "#" + e,
        this.currentHash = window.location.hash,
        this
    }
    listen() {
        clearInterval(this.intervalId),
        this.intervalId = setInterval( () => this.checkRoutes(), 50)
    }
    checkRoutes() {
        const e = this.getFragment();
        this.currentHash !== e && (this.currentHash = e,
        this.routes.some(t => {
            const i = e.match(t.path);
            return i ? (i.shift(),
            t.cb.apply({}, i),
            !0) : !1
        }
        ))
    }
}
class id {
    constructor(e, t) {
        Pe(this, "DOM", {
            el: null
        });
        Pe(this, "row");
        Pe(this, "column");
        this.DOM.el = document.createElement("div"),
        M.set(this.DOM.el, {
            willChange: "opacity, transform"
        }),
        this.row = e,
        this.column = t
    }
}
class ja {
    constructor(e, t) {
        Pe(this, "DOM", {
            el: null
        });
        Pe(this, "cells", []);
        Pe(this, "options", {
            rows: 2,
            columns: 2,
            duration: 1,
            each: .03,
            startEase: "none",
            stopEase: "none",
            startFrom: 0,
            stopFrom: 0,
            startDelay: 0,
            stopDelay: 0,
            transformOrigin: "50% -50%"
        });
        this.DOM.el = e,
        this.options = Object.assign({}, this.options, t),
        this.DOM.el.style.setProperty("--columns", this.options.columns),
        this.cells = new Array(this.options.rows);
        for (let i = 0; i < this.options.rows; ++i)
            this.cells[i] = new Array(this.options.columns);
        for (let i = 0; i < this.options.rows; ++i)
            for (let s = 0; s < this.options.columns; ++s) {
                const r = new id(i,s);
                this.cells[i][s] = r,
                this.DOM.el.appendChild(r.DOM.el)
            }
    }
    start(e={}) {
        return new Promise(t => {
            const i = {
                transformOrigin: this.options.transformOrigin,
                duration: this.options.duration,
                ease: this.options.startEase,
                delay: this.options.startDelay,
                stagger: {
                    grid: [this.options.rows, this.options.columns],
                    from: this.options.startFrom,
                    each: this.options.each
                }
            }
              , s = Object.assign({}, i, e);
            M.set(this.DOM.el, {
                opacity: 1
            }),
            M.timeline({
                onComplete: () => {}
            }).fromTo(this.cells.flat().map(a => a.DOM.el), {
                scaleX: 0,
                transformOrigin: s.transformOrigin
            }, {
                duration: s.duration,
                delay: s.delay,
                ease: s.ease,
                scaleX: 1.02,
                stagger: s.stagger,
                onComplete: t
            })
        }
        )
    }
    stop(e={}) {
        return new Promise(t => {
            const i = {
                transformOrigin: this.options.transformOrigin,
                duration: this.options.duration,
                ease: this.options.stopEase,
                delay: this.options.stopDelay,
                stagger: {
                    grid: [this.options.rows, this.options.columns],
                    from: this.options.stopFrom,
                    each: this.options.each
                }
            }
              , s = Object.assign({}, i, e);
            M.fromTo(this.cells.flat().map(r => r.DOM.el), {
                transformOrigin: s.transformOrigin
            }, {
                duration: s.duration,
                ease: s.ease,
                delay: s.delay,
                scaleX: 0,
                stagger: s.stagger,
                onComplete: t
            })
        }
        )
    }
}
class sd {
    constructor() {
        this.initLogoOverlay()
    }
    setDefaultView() {
        M.set(S.wrapper, {
            opacity: 0
        })
    }
    initLogoOverlay() {
        const e = document.querySelector(S.loaderLogoOverlay);
        this.logoLoaderOverlay = new ja(e,{
            rows: 16,
            columns: 1,
            duration: .5,
            each: .03,
            startEase: "power2.inOut",
            stopEase: "power2.inOut",
            startFrom: "center",
            stopFrom: "center"
        })
    }
    hideLoader() {
        M.set(S.loader, {
            display: "none",
            height: 0
        })
    }
    hideLoaderIndicator() {
        M.to(S.loaderIndicator, {
            opacity: 0,
            duration: .2
        })
    }
    uncover(e) {
        const t = M.timeline({
            defaults: {
                ease: "power2.inOut",
                duration: .8
            },
            onStart: () => {
                e(),
                this.logoLoaderOverlay.start(),
                this.hideLoaderIndicator()
            }
            ,
            onComplete: () => {
                this.hideLoader()
            }
        });
        t.to(S.loaderLogoSvg, {
            scale: .8,
            opacity: 0
        }),
        t.to(S.loader, {
            opacity: 0
        })
    }
    init(e, t) {
        window.addEventListener("load", () => {
            setTimeout( () => {
                this.uncover(e)
            }
            , t * 1e3)
        }
        )
    }
}
function rd(n, e) {
    for (var t = 0; t < e.length; t++) {
        var i = e[t];
        i.enumerable = i.enumerable || !1,
        i.configurable = !0,
        "value"in i && (i.writable = !0),
        Object.defineProperty(n, i.key, i)
    }
}
function nd(n, e, t) {
    return e && rd(n.prototype, e),
    n
}
/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Xe, Jr, Pt, ki, Ii, Rs, nu, Ji, ur, au, vi, Qt, ou, lu = function() {
    return Xe || typeof window < "u" && (Xe = window.gsap) && Xe.registerPlugin && Xe
}, uu = 1, Cs = [], J = [], hi = [], hr = Date.now, va = function(e, t) {
    return t
}, ad = function() {
    var e = ur.core
      , t = e.bridge || {}
      , i = e._scrollers
      , s = e._proxies;
    i.push.apply(i, J),
    s.push.apply(s, hi),
    J = i,
    hi = s,
    va = function(a, o) {
        return t[a](o)
    }
}, Vi = function(e, t) {
    return ~hi.indexOf(e) && hi[hi.indexOf(e) + 1][t]
}, cr = function(e) {
    return !!~au.indexOf(e)
}, rt = function(e, t, i, s, r) {
    return e.addEventListener(t, i, {
        passive: s !== !1,
        capture: !!r
    })
}, st = function(e, t, i, s) {
    return e.removeEventListener(t, i, !!s)
}, Lr = "scrollLeft", kr = "scrollTop", ya = function() {
    return vi && vi.isPressed || J.cache++
}, pn = function(e, t) {
    var i = function s(r) {
        if (r || r === 0) {
            uu && (Pt.history.scrollRestoration = "manual");
            var a = vi && vi.isPressed;
            r = s.v = Math.round(r) || (vi && vi.iOS ? 1 : 0),
            e(r),
            s.cacheID = J.cache,
            a && va("ss", r)
        } else
            (t || J.cache !== s.cacheID || va("ref")) && (s.cacheID = J.cache,
            s.v = e());
        return s.v + s.offset
    };
    return i.offset = 0,
    e && i
}, ut = {
    s: Lr,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: pn(function(n) {
        return arguments.length ? Pt.scrollTo(n, Le.sc()) : Pt.pageXOffset || ki[Lr] || Ii[Lr] || Rs[Lr] || 0
    })
}, Le = {
    s: kr,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: ut,
    sc: pn(function(n) {
        return arguments.length ? Pt.scrollTo(ut.sc(), n) : Pt.pageYOffset || ki[kr] || Ii[kr] || Rs[kr] || 0
    })
}, ft = function(e, t) {
    return (t && t._ctx && t._ctx.selector || Xe.utils.toArray)(e)[0] || (typeof e == "string" && Xe.config().nullTargetWarn !== !1 ? console.warn("Element not found:", e) : null)
}, Wi = function(e, t) {
    var i = t.s
      , s = t.sc;
    cr(e) && (e = ki.scrollingElement || Ii);
    var r = J.indexOf(e)
      , a = s === Le.sc ? 1 : 2;
    !~r && (r = J.push(e) - 1),
    J[r + a] || rt(e, "scroll", ya);
    var o = J[r + a]
      , l = o || (J[r + a] = pn(Vi(e, i), !0) || (cr(e) ? s : pn(function(u) {
        return arguments.length ? e[i] = u : e[i]
    })));
    return l.target = e,
    o || (l.smooth = Xe.getProperty(e, "scrollBehavior") === "smooth"),
    l
}, xa = function(e, t, i) {
    var s = e
      , r = e
      , a = hr()
      , o = a
      , l = t || 50
      , u = Math.max(500, l * 3)
      , h = function(g, p) {
        var _ = hr();
        p || _ - a > l ? (r = s,
        s = g,
        o = a,
        a = _) : i ? s += g : s = r + (g - r) / (_ - o) * (a - o)
    }
      , d = function() {
        r = s = i ? 0 : s,
        o = a = 0
    }
      , f = function(g) {
        var p = o
          , _ = r
          , y = hr();
        return (g || g === 0) && g !== s && h(g),
        a === o || y - o > u ? 0 : (s + (i ? _ : -_)) / ((i ? y : a) - p) * 1e3
    };
    return {
        update: h,
        reset: d,
        getVelocity: f
    }
}, $s = function(e, t) {
    return t && !e._gsapAllow && e.preventDefault(),
    e.changedTouches ? e.changedTouches[0] : e
}, Po = function(e) {
    var t = Math.max.apply(Math, e)
      , i = Math.min.apply(Math, e);
    return Math.abs(t) >= Math.abs(i) ? t : i
}, hu = function() {
    ur = Xe.core.globals().ScrollTrigger,
    ur && ur.core && ad()
}, cu = function(e) {
    return Xe = e || lu(),
    !Jr && Xe && typeof document < "u" && document.body && (Pt = window,
    ki = document,
    Ii = ki.documentElement,
    Rs = ki.body,
    au = [Pt, ki, Ii, Rs],
    Xe.utils.clamp,
    ou = Xe.core.context || function() {}
    ,
    Ji = "onpointerenter"in Rs ? "pointer" : "mouse",
    nu = Se.isTouch = Pt.matchMedia && Pt.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart"in Pt || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0,
    Qt = Se.eventTypes = ("ontouchstart"in Ii ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown"in Ii ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","),
    setTimeout(function() {
        return uu = 0
    }, 500),
    hu(),
    Jr = 1),
    Jr
};
ut.op = Le;
J.cache = 0;
var Se = function() {
    function n(t) {
        this.init(t)
    }
    var e = n.prototype;
    return e.init = function(i) {
        Jr || cu(Xe) || console.warn("Please gsap.registerPlugin(Observer)"),
        ur || hu();
        var s = i.tolerance
          , r = i.dragMinimum
          , a = i.type
          , o = i.target
          , l = i.lineHeight
          , u = i.debounce
          , h = i.preventDefault
          , d = i.onStop
          , f = i.onStopDelay
          , c = i.ignore
          , g = i.wheelSpeed
          , p = i.event
          , _ = i.onDragStart
          , y = i.onDragEnd
          , D = i.onDrag
          , m = i.onPress
          , v = i.onRelease
          , x = i.onRight
          , P = i.onLeft
          , T = i.onUp
          , E = i.onDown
          , C = i.onChangeX
          , w = i.onChangeY
          , L = i.onChange
          , F = i.onToggleX
          , O = i.onToggleY
          , I = i.onHover
          , z = i.onHoverEnd
          , k = i.onMove
          , B = i.ignoreCheck
          , U = i.isNormalizer
          , R = i.onGestureStart
          , b = i.onGestureEnd
          , j = i.onWheel
          , oe = i.onEnable
          , ke = i.onDisable
          , se = i.onClick
          , K = i.scrollSpeed
          , Ie = i.capture
          , ne = i.allowClicks
          , tt = i.lockAxis
          , Ye = i.onLockAxis;
        this.target = o = ft(o) || Ii,
        this.vars = i,
        c && (c = Xe.utils.toArray(c)),
        s = s || 1e-9,
        r = r || 0,
        g = g || 1,
        K = K || 1,
        a = a || "wheel,touch,pointer",
        u = u !== !1,
        l || (l = parseFloat(Pt.getComputedStyle(Rs).lineHeight) || 22);
        var Si, it, Ht, re, De, dt, xt, A = this, Dt = 0, di = 0, Ei = i.passive || !h, Ee = Wi(o, ut), Ci = Wi(o, Le), Xi = Ee(), ms = Ci(), ze = ~a.indexOf("touch") && !~a.indexOf("pointer") && Qt[0] === "pointerdown", Pi = cr(o), we = o.ownerDocument || ki, Xt = [0, 0, 0], Rt = [0, 0, 0], fi = 0, Gs = function() {
            return fi = hr()
        }, Ce = function(W, ae) {
            return (A.event = W) && c && ~c.indexOf(W.target) || ae && ze && W.pointerType !== "touch" || B && B(W, ae)
        }, Fr = function() {
            A._vx.reset(),
            A._vy.reset(),
            it.pause(),
            d && d(A)
        }, Mi = function() {
            var W = A.deltaX = Po(Xt)
              , ae = A.deltaY = Po(Rt)
              , N = Math.abs(W) >= s
              , $ = Math.abs(ae) >= s;
            L && (N || $) && L(A, W, ae, Xt, Rt),
            N && (x && A.deltaX > 0 && x(A),
            P && A.deltaX < 0 && P(A),
            C && C(A),
            F && A.deltaX < 0 != Dt < 0 && F(A),
            Dt = A.deltaX,
            Xt[0] = Xt[1] = Xt[2] = 0),
            $ && (E && A.deltaY > 0 && E(A),
            T && A.deltaY < 0 && T(A),
            w && w(A),
            O && A.deltaY < 0 != di < 0 && O(A),
            di = A.deltaY,
            Rt[0] = Rt[1] = Rt[2] = 0),
            (re || Ht) && (k && k(A),
            Ht && (D(A),
            Ht = !1),
            re = !1),
            dt && !(dt = !1) && Ye && Ye(A),
            De && (j(A),
            De = !1),
            Si = 0
        }, _s = function(W, ae, N) {
            Xt[N] += W,
            Rt[N] += ae,
            A._vx.update(W),
            A._vy.update(ae),
            u ? Si || (Si = requestAnimationFrame(Mi)) : Mi()
        }, vs = function(W, ae) {
            tt && !xt && (A.axis = xt = Math.abs(W) > Math.abs(ae) ? "x" : "y",
            dt = !0),
            xt !== "y" && (Xt[2] += W,
            A._vx.update(W, !0)),
            xt !== "x" && (Rt[2] += ae,
            A._vy.update(ae, !0)),
            u ? Si || (Si = requestAnimationFrame(Mi)) : Mi()
        }, Fi = function(W) {
            if (!Ce(W, 1)) {
                W = $s(W, h);
                var ae = W.clientX
                  , N = W.clientY
                  , $ = ae - A.x
                  , G = N - A.y
                  , Y = A.isDragging;
                A.x = ae,
                A.y = N,
                (Y || Math.abs(A.startX - ae) >= r || Math.abs(A.startY - N) >= r) && (D && (Ht = !0),
                Y || (A.isDragging = !0),
                vs($, G),
                Y || _ && _(A))
            }
        }, Yi = A.onPress = function(q) {
            Ce(q, 1) || q && q.button || (A.axis = xt = null,
            it.pause(),
            A.isPressed = !0,
            q = $s(q),
            Dt = di = 0,
            A.startX = A.x = q.clientX,
            A.startY = A.y = q.clientY,
            A._vx.reset(),
            A._vy.reset(),
            rt(U ? o : we, Qt[1], Fi, Ei, !0),
            A.deltaX = A.deltaY = 0,
            m && m(A))
        }
        , Z = A.onRelease = function(q) {
            if (!Ce(q, 1)) {
                st(U ? o : we, Qt[1], Fi, !0);
                var W = !isNaN(A.y - A.startY)
                  , ae = A.isDragging
                  , N = ae && (Math.abs(A.x - A.startX) > 3 || Math.abs(A.y - A.startY) > 3)
                  , $ = $s(q);
                !N && W && (A._vx.reset(),
                A._vy.reset(),
                h && ne && Xe.delayedCall(.08, function() {
                    if (hr() - fi > 300 && !q.defaultPrevented) {
                        if (q.target.click)
                            q.target.click();
                        else if (we.createEvent) {
                            var G = we.createEvent("MouseEvents");
                            G.initMouseEvent("click", !0, !0, Pt, 1, $.screenX, $.screenY, $.clientX, $.clientY, !1, !1, !1, !1, 0, null),
                            q.target.dispatchEvent(G)
                        }
                    }
                })),
                A.isDragging = A.isGesturing = A.isPressed = !1,
                d && ae && !U && it.restart(!0),
                y && ae && y(A),
                v && v(A, N)
            }
        }
        , qi = function(W) {
            return W.touches && W.touches.length > 1 && (A.isGesturing = !0) && R(W, A.isDragging)
        }, Yt = function() {
            return (A.isGesturing = !1) || b(A)
        }, qt = function(W) {
            if (!Ce(W)) {
                var ae = Ee()
                  , N = Ci();
                _s((ae - Xi) * K, (N - ms) * K, 1),
                Xi = ae,
                ms = N,
                d && it.restart(!0)
            }
        }, $t = function(W) {
            if (!Ce(W)) {
                W = $s(W, h),
                j && (De = !0);
                var ae = (W.deltaMode === 1 ? l : W.deltaMode === 2 ? Pt.innerHeight : 1) * g;
                _s(W.deltaX * ae, W.deltaY * ae, 0),
                d && !U && it.restart(!0)
            }
        }, $i = function(W) {
            if (!Ce(W)) {
                var ae = W.clientX
                  , N = W.clientY
                  , $ = ae - A.x
                  , G = N - A.y;
                A.x = ae,
                A.y = N,
                re = !0,
                d && it.restart(!0),
                ($ || G) && vs($, G)
            }
        }, ys = function(W) {
            A.event = W,
            I(A)
        }, pi = function(W) {
            A.event = W,
            z(A)
        }, Ws = function(W) {
            return Ce(W) || $s(W, h) && se(A)
        };
        it = A._dc = Xe.delayedCall(f || .25, Fr).pause(),
        A.deltaX = A.deltaY = 0,
        A._vx = xa(0, 50, !0),
        A._vy = xa(0, 50, !0),
        A.scrollX = Ee,
        A.scrollY = Ci,
        A.isDragging = A.isGesturing = A.isPressed = !1,
        ou(this),
        A.enable = function(q) {
            return A.isEnabled || (rt(Pi ? we : o, "scroll", ya),
            a.indexOf("scroll") >= 0 && rt(Pi ? we : o, "scroll", qt, Ei, Ie),
            a.indexOf("wheel") >= 0 && rt(o, "wheel", $t, Ei, Ie),
            (a.indexOf("touch") >= 0 && nu || a.indexOf("pointer") >= 0) && (rt(o, Qt[0], Yi, Ei, Ie),
            rt(we, Qt[2], Z),
            rt(we, Qt[3], Z),
            ne && rt(o, "click", Gs, !0, !0),
            se && rt(o, "click", Ws),
            R && rt(we, "gesturestart", qi),
            b && rt(we, "gestureend", Yt),
            I && rt(o, Ji + "enter", ys),
            z && rt(o, Ji + "leave", pi),
            k && rt(o, Ji + "move", $i)),
            A.isEnabled = !0,
            q && q.type && Yi(q),
            oe && oe(A)),
            A
        }
        ,
        A.disable = function() {
            A.isEnabled && (Cs.filter(function(q) {
                return q !== A && cr(q.target)
            }).length || st(Pi ? we : o, "scroll", ya),
            A.isPressed && (A._vx.reset(),
            A._vy.reset(),
            st(U ? o : we, Qt[1], Fi, !0)),
            st(Pi ? we : o, "scroll", qt, Ie),
            st(o, "wheel", $t, Ie),
            st(o, Qt[0], Yi, Ie),
            st(we, Qt[2], Z),
            st(we, Qt[3], Z),
            st(o, "click", Gs, !0),
            st(o, "click", Ws),
            st(we, "gesturestart", qi),
            st(we, "gestureend", Yt),
            st(o, Ji + "enter", ys),
            st(o, Ji + "leave", pi),
            st(o, Ji + "move", $i),
            A.isEnabled = A.isPressed = A.isDragging = !1,
            ke && ke(A))
        }
        ,
        A.kill = A.revert = function() {
            A.disable();
            var q = Cs.indexOf(A);
            q >= 0 && Cs.splice(q, 1),
            vi === A && (vi = 0)
        }
        ,
        Cs.push(A),
        U && cr(o) && (vi = A),
        A.enable(p)
    }
    ,
    nd(n, [{
        key: "velocityX",
        get: function() {
            return this._vx.getVelocity()
        }
    }, {
        key: "velocityY",
        get: function() {
            return this._vy.getVelocity()
        }
    }]),
    n
}();
Se.version = "3.12.5";
Se.create = function(n) {
    return new Se(n)
}
;
Se.register = cu;
Se.getAll = function() {
    return Cs.slice()
}
;
Se.getById = function(n) {
    return Cs.filter(function(e) {
        return e.vars.id === n
    })[0]
}
;
lu() && Xe.registerPlugin(Se);
/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var V, bs, te, ge, Kt, ce, du, gn, Sr, dr, er, Ir, Qe, En, Da, at, Mo, Fo, Ts, fu, Vn, pu, nt, wa, gu, mu, Ai, ba, Qa, Os, Ka, mn, Ta, Un, zr = 1, Ke = Date.now, Gn = Ke(), Gt = 0, tr = 0, Ao = function(e, t, i) {
    var s = Tt(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
    return i["_" + t + "Clamp"] = s,
    s ? e.substr(6, e.length - 7) : e
}, Ro = function(e, t) {
    return t && (!Tt(e) || e.substr(0, 6) !== "clamp(") ? "clamp(" + e + ")" : e
}, od = function n() {
    return tr && requestAnimationFrame(n)
}, Oo = function() {
    return En = 1
}, Lo = function() {
    return En = 0
}, ri = function(e) {
    return e
}, ir = function(e) {
    return Math.round(e * 1e5) / 1e5 || 0
}, _u = function() {
    return typeof window < "u"
}, vu = function() {
    return V || _u() && (V = window.gsap) && V.registerPlugin && V
}, ds = function(e) {
    return !!~du.indexOf(e)
}, yu = function(e) {
    return (e === "Height" ? Ka : te["inner" + e]) || Kt["client" + e] || ce["client" + e]
}, xu = function(e) {
    return Vi(e, "getBoundingClientRect") || (ds(e) ? function() {
        return nn.width = te.innerWidth,
        nn.height = Ka,
        nn
    }
    : function() {
        return _i(e)
    }
    )
}, ld = function(e, t, i) {
    var s = i.d
      , r = i.d2
      , a = i.a;
    return (a = Vi(e, "getBoundingClientRect")) ? function() {
        return a()[s]
    }
    : function() {
        return (t ? yu(r) : e["client" + r]) || 0
    }
}, ud = function(e, t) {
    return !t || ~hi.indexOf(e) ? xu(e) : function() {
        return nn
    }
}, oi = function(e, t) {
    var i = t.s
      , s = t.d2
      , r = t.d
      , a = t.a;
    return Math.max(0, (i = "scroll" + s) && (a = Vi(e, i)) ? a() - xu(e)()[r] : ds(e) ? (Kt[i] || ce[i]) - yu(s) : e[i] - e["offset" + s])
}, Br = function(e, t) {
    for (var i = 0; i < Ts.length; i += 3)
        (!t || ~t.indexOf(Ts[i + 1])) && e(Ts[i], Ts[i + 1], Ts[i + 2])
}, Tt = function(e) {
    return typeof e == "string"
}, ht = function(e) {
    return typeof e == "function"
}, sr = function(e) {
    return typeof e == "number"
}, es = function(e) {
    return typeof e == "object"
}, js = function(e, t, i) {
    return e && e.progress(t ? 0 : 1) && i && e.pause()
}, Wn = function(e, t) {
    if (e.enabled) {
        var i = e._ctx ? e._ctx.add(function() {
            return t(e)
        }) : t(e);
        i && i.totalTime && (e.callbackAnimation = i)
    }
}, Ds = Math.abs, Du = "left", wu = "top", Za = "right", Ja = "bottom", os = "width", ls = "height", fr = "Right", pr = "Left", gr = "Top", mr = "Bottom", Me = "padding", zt = "margin", Vs = "Width", eo = "Height", Re = "px", Bt = function(e) {
    return te.getComputedStyle(e)
}, hd = function(e) {
    var t = Bt(e).position;
    e.style.position = t === "absolute" || t === "fixed" ? t : "relative"
}, ko = function(e, t) {
    for (var i in t)
        i in e || (e[i] = t[i]);
    return e
}, _i = function(e, t) {
    var i = t && Bt(e)[Da] !== "matrix(1, 0, 0, 1, 0, 0)" && V.to(e, {
        x: 0,
        y: 0,
        xPercent: 0,
        yPercent: 0,
        rotation: 0,
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0
    }).progress(1)
      , s = e.getBoundingClientRect();
    return i && i.progress(0).kill(),
    s
}, _n = function(e, t) {
    var i = t.d2;
    return e["offset" + i] || e["client" + i] || 0
}, bu = function(e) {
    var t = [], i = e.labels, s = e.duration(), r;
    for (r in i)
        t.push(i[r] / s);
    return t
}, cd = function(e) {
    return function(t) {
        return V.utils.snap(bu(e), t)
    }
}, to = function(e) {
    var t = V.utils.snap(e)
      , i = Array.isArray(e) && e.slice(0).sort(function(s, r) {
        return s - r
    });
    return i ? function(s, r, a) {
        a === void 0 && (a = .001);
        var o;
        if (!r)
            return t(s);
        if (r > 0) {
            for (s -= a,
            o = 0; o < i.length; o++)
                if (i[o] >= s)
                    return i[o];
            return i[o - 1]
        } else
            for (o = i.length,
            s += a; o--; )
                if (i[o] <= s)
                    return i[o];
        return i[0]
    }
    : function(s, r, a) {
        a === void 0 && (a = .001);
        var o = t(s);
        return !r || Math.abs(o - s) < a || o - s < 0 == r < 0 ? o : t(r < 0 ? s - e : s + e)
    }
}, dd = function(e) {
    return function(t, i) {
        return to(bu(e))(t, i.direction)
    }
}, Nr = function(e, t, i, s) {
    return i.split(",").forEach(function(r) {
        return e(t, r, s)
    })
}, Ve = function(e, t, i, s, r) {
    return e.addEventListener(t, i, {
        passive: !s,
        capture: !!r
    })
}, Ne = function(e, t, i, s) {
    return e.removeEventListener(t, i, !!s)
}, Vr = function(e, t, i) {
    i = i && i.wheelHandler,
    i && (e(t, "wheel", i),
    e(t, "touchmove", i))
}, Io = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal"
}, Ur = {
    toggleActions: "play",
    anticipatePin: 0
}, vn = {
    top: 0,
    left: 0,
    center: .5,
    bottom: 1,
    right: 1
}, en = function(e, t) {
    if (Tt(e)) {
        var i = e.indexOf("=")
          , s = ~i ? +(e.charAt(i - 1) + 1) * parseFloat(e.substr(i + 1)) : 0;
        ~i && (e.indexOf("%") > i && (s *= t / 100),
        e = e.substr(0, i - 1)),
        e = s + (e in vn ? vn[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
    }
    return e
}, Gr = function(e, t, i, s, r, a, o, l) {
    var u = r.startColor
      , h = r.endColor
      , d = r.fontSize
      , f = r.indent
      , c = r.fontWeight
      , g = ge.createElement("div")
      , p = ds(i) || Vi(i, "pinType") === "fixed"
      , _ = e.indexOf("scroller") !== -1
      , y = p ? ce : i
      , D = e.indexOf("start") !== -1
      , m = D ? u : h
      , v = "border-color:" + m + ";font-size:" + d + ";color:" + m + ";font-weight:" + c + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return v += "position:" + ((_ || l) && p ? "fixed;" : "absolute;"),
    (_ || l || !p) && (v += (s === Le ? Za : Ja) + ":" + (a + parseFloat(f)) + "px;"),
    o && (v += "box-sizing:border-box;text-align:left;width:" + o.offsetWidth + "px;"),
    g._isStart = D,
    g.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
    g.style.cssText = v,
    g.innerText = t || t === 0 ? e + "-" + t : e,
    y.children[0] ? y.insertBefore(g, y.children[0]) : y.appendChild(g),
    g._offset = g["offset" + s.op.d2],
    tn(g, 0, s, D),
    g
}, tn = function(e, t, i, s) {
    var r = {
        display: "block"
    }
      , a = i[s ? "os2" : "p2"]
      , o = i[s ? "p2" : "os2"];
    e._isFlipped = s,
    r[i.a + "Percent"] = s ? -100 : 0,
    r[i.a] = s ? "1px" : 0,
    r["border" + a + Vs] = 1,
    r["border" + o + Vs] = 0,
    r[i.p] = t + "px",
    V.set(e, r)
}, Q = [], Sa = {}, Er, zo = function() {
    return Ke() - Gt > 34 && (Er || (Er = requestAnimationFrame(xi)))
}, ws = function() {
    (!nt || !nt.isPressed || nt.startX > ce.clientWidth) && (J.cache++,
    nt ? Er || (Er = requestAnimationFrame(xi)) : xi(),
    Gt || ps("scrollStart"),
    Gt = Ke())
}, Hn = function() {
    mu = te.innerWidth,
    gu = te.innerHeight
}, rr = function() {
    J.cache++,
    !Qe && !pu && !ge.fullscreenElement && !ge.webkitFullscreenElement && (!wa || mu !== te.innerWidth || Math.abs(te.innerHeight - gu) > te.innerHeight * .25) && gn.restart(!0)
}, fs = {}, fd = [], Tu = function n() {
    return Ne(H, "scrollEnd", n) || is(!0)
}, ps = function(e) {
    return fs[e] && fs[e].map(function(t) {
        return t()
    }) || fd
}, bt = [], Su = function(e) {
    for (var t = 0; t < bt.length; t += 5)
        (!e || bt[t + 4] && bt[t + 4].query === e) && (bt[t].style.cssText = bt[t + 1],
        bt[t].getBBox && bt[t].setAttribute("transform", bt[t + 2] || ""),
        bt[t + 3].uncache = 1)
}, io = function(e, t) {
    var i;
    for (at = 0; at < Q.length; at++)
        i = Q[at],
        i && (!t || i._ctx === t) && (e ? i.kill(1) : i.revert(!0, !0));
    mn = !0,
    t && Su(t),
    t || ps("revert")
}, Eu = function(e, t) {
    J.cache++,
    (t || !ot) && J.forEach(function(i) {
        return ht(i) && i.cacheID++ && (i.rec = 0)
    }),
    Tt(e) && (te.history.scrollRestoration = Qa = e)
}, ot, us = 0, Bo, pd = function() {
    if (Bo !== us) {
        var e = Bo = us;
        requestAnimationFrame(function() {
            return e === us && is(!0)
        })
    }
}, Cu = function() {
    ce.appendChild(Os),
    Ka = !nt && Os.offsetHeight || te.innerHeight,
    ce.removeChild(Os)
}, No = function(e) {
    return Sr(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t) {
        return t.style.display = e ? "none" : "block"
    })
}, is = function(e, t) {
    if (Gt && !e && !mn) {
        Ve(H, "scrollEnd", Tu);
        return
    }
    Cu(),
    ot = H.isRefreshing = !0,
    J.forEach(function(s) {
        return ht(s) && ++s.cacheID && (s.rec = s())
    });
    var i = ps("refreshInit");
    fu && H.sort(),
    t || io(),
    J.forEach(function(s) {
        ht(s) && (s.smooth && (s.target.style.scrollBehavior = "auto"),
        s(0))
    }),
    Q.slice(0).forEach(function(s) {
        return s.refresh()
    }),
    mn = !1,
    Q.forEach(function(s) {
        if (s._subPinOffset && s.pin) {
            var r = s.vars.horizontal ? "offsetWidth" : "offsetHeight"
              , a = s.pin[r];
            s.revert(!0, 1),
            s.adjustPinSpacing(s.pin[r] - a),
            s.refresh()
        }
    }),
    Ta = 1,
    No(!0),
    Q.forEach(function(s) {
        var r = oi(s.scroller, s._dir)
          , a = s.vars.end === "max" || s._endClamp && s.end > r
          , o = s._startClamp && s.start >= r;
        (a || o) && s.setPositions(o ? r - 1 : s.start, a ? Math.max(o ? r : s.start + 1, r) : s.end, !0)
    }),
    No(!1),
    Ta = 0,
    i.forEach(function(s) {
        return s && s.render && s.render(-1)
    }),
    J.forEach(function(s) {
        ht(s) && (s.smooth && requestAnimationFrame(function() {
            return s.target.style.scrollBehavior = "smooth"
        }),
        s.rec && s(s.rec))
    }),
    Eu(Qa, 1),
    gn.pause(),
    us++,
    ot = 2,
    xi(2),
    Q.forEach(function(s) {
        return ht(s.vars.onRefresh) && s.vars.onRefresh(s)
    }),
    ot = H.isRefreshing = !1,
    ps("refresh")
}, Ea = 0, sn = 1, _r, xi = function(e) {
    if (e === 2 || !ot && !mn) {
        H.isUpdating = !0,
        _r && _r.update(0);
        var t = Q.length
          , i = Ke()
          , s = i - Gn >= 50
          , r = t && Q[0].scroll();
        if (sn = Ea > r ? -1 : 1,
        ot || (Ea = r),
        s && (Gt && !En && i - Gt > 200 && (Gt = 0,
        ps("scrollEnd")),
        er = Gn,
        Gn = i),
        sn < 0) {
            for (at = t; at-- > 0; )
                Q[at] && Q[at].update(0, s);
            sn = 1
        } else
            for (at = 0; at < t; at++)
                Q[at] && Q[at].update(0, s);
        H.isUpdating = !1
    }
    Er = 0
}, Ca = [Du, wu, Ja, Za, zt + mr, zt + fr, zt + gr, zt + pr, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], rn = Ca.concat([os, ls, "boxSizing", "max" + Vs, "max" + eo, "position", zt, Me, Me + gr, Me + fr, Me + mr, Me + pr]), gd = function(e, t, i) {
    Ls(i);
    var s = e._gsap;
    if (s.spacerIsNative)
        Ls(s.spacerState);
    else if (e._gsap.swappedIn) {
        var r = t.parentNode;
        r && (r.insertBefore(e, t),
        r.removeChild(t))
    }
    e._gsap.swappedIn = !1
}, Xn = function(e, t, i, s) {
    if (!e._gsap.swappedIn) {
        for (var r = Ca.length, a = t.style, o = e.style, l; r--; )
            l = Ca[r],
            a[l] = i[l];
        a.position = i.position === "absolute" ? "absolute" : "relative",
        i.display === "inline" && (a.display = "inline-block"),
        o[Ja] = o[Za] = "auto",
        a.flexBasis = i.flexBasis || "auto",
        a.overflow = "visible",
        a.boxSizing = "border-box",
        a[os] = _n(e, ut) + Re,
        a[ls] = _n(e, Le) + Re,
        a[Me] = o[zt] = o[wu] = o[Du] = "0",
        Ls(s),
        o[os] = o["max" + Vs] = i[os],
        o[ls] = o["max" + eo] = i[ls],
        o[Me] = i[Me],
        e.parentNode !== t && (e.parentNode.insertBefore(t, e),
        t.appendChild(e)),
        e._gsap.swappedIn = !0
    }
}, md = /([A-Z])/g, Ls = function(e) {
    if (e) {
        var t = e.t.style, i = e.length, s = 0, r, a;
        for ((e.t._gsap || V.core.getCache(e.t)).uncache = 1; s < i; s += 2)
            a = e[s + 1],
            r = e[s],
            a ? t[r] = a : t[r] && t.removeProperty(r.replace(md, "-$1").toLowerCase())
    }
}, Wr = function(e) {
    for (var t = rn.length, i = e.style, s = [], r = 0; r < t; r++)
        s.push(rn[r], i[rn[r]]);
    return s.t = e,
    s
}, _d = function(e, t, i) {
    for (var s = [], r = e.length, a = i ? 8 : 0, o; a < r; a += 2)
        o = e[a],
        s.push(o, o in t ? t[o] : e[a + 1]);
    return s.t = e.t,
    s
}, nn = {
    left: 0,
    top: 0
}, Vo = function(e, t, i, s, r, a, o, l, u, h, d, f, c, g) {
    ht(e) && (e = e(l)),
    Tt(e) && e.substr(0, 3) === "max" && (e = f + (e.charAt(4) === "=" ? en("0" + e.substr(3), i) : 0));
    var p = c ? c.time() : 0, _, y, D;
    if (c && c.seek(0),
    isNaN(e) || (e = +e),
    sr(e))
        c && (e = V.utils.mapRange(c.scrollTrigger.start, c.scrollTrigger.end, 0, f, e)),
        o && tn(o, i, s, !0);
    else {
        ht(t) && (t = t(l));
        var m = (e || "0").split(" "), v, x, P, T;
        D = ft(t, l) || ce,
        v = _i(D) || {},
        (!v || !v.left && !v.top) && Bt(D).display === "none" && (T = D.style.display,
        D.style.display = "block",
        v = _i(D),
        T ? D.style.display = T : D.style.removeProperty("display")),
        x = en(m[0], v[s.d]),
        P = en(m[1] || "0", i),
        e = v[s.p] - u[s.p] - h + x + r - P,
        o && tn(o, P, s, i - P < 20 || o._isStart && P > 20),
        i -= i - P
    }
    if (g && (l[g] = e || -.001,
    e < 0 && (e = 0)),
    a) {
        var E = e + i
          , C = a._isStart;
        _ = "scroll" + s.d2,
        tn(a, E, s, C && E > 20 || !C && (d ? Math.max(ce[_], Kt[_]) : a.parentNode[_]) <= E + 1),
        d && (u = _i(o),
        d && (a.style[s.op.p] = u[s.op.p] - s.op.m - a._offset + Re))
    }
    return c && D && (_ = _i(D),
    c.seek(f),
    y = _i(D),
    c._caScrollDist = _[s.p] - y[s.p],
    e = e / c._caScrollDist * f),
    c && c.seek(p),
    c ? e : Math.round(e)
}, vd = /(webkit|moz|length|cssText|inset)/i, Uo = function(e, t, i, s) {
    if (e.parentNode !== t) {
        var r = e.style, a, o;
        if (t === ce) {
            e._stOrig = r.cssText,
            o = Bt(e);
            for (a in o)
                !+a && !vd.test(a) && o[a] && typeof r[a] == "string" && a !== "0" && (r[a] = o[a]);
            r.top = i,
            r.left = s
        } else
            r.cssText = e._stOrig;
        V.core.getCache(e).uncache = 1,
        t.appendChild(e)
    }
}, Pu = function(e, t, i) {
    var s = t
      , r = s;
    return function(a) {
        var o = Math.round(e());
        return o !== s && o !== r && Math.abs(o - s) > 3 && Math.abs(o - r) > 3 && (a = o,
        i && i()),
        r = s,
        s = a,
        a
    }
}, Hr = function(e, t, i) {
    var s = {};
    s[t.p] = "+=" + i,
    V.set(e, s)
}, Go = function(e, t) {
    var i = Wi(e, t)
      , s = "_scroll" + t.p2
      , r = function a(o, l, u, h, d) {
        var f = a.tween
          , c = l.onComplete
          , g = {};
        u = u || i();
        var p = Pu(i, u, function() {
            f.kill(),
            a.tween = 0
        });
        return d = h && d || 0,
        h = h || o - u,
        f && f.kill(),
        l[s] = o,
        l.inherit = !1,
        l.modifiers = g,
        g[s] = function() {
            return p(u + h * f.ratio + d * f.ratio * f.ratio)
        }
        ,
        l.onUpdate = function() {
            J.cache++,
            a.tween && xi()
        }
        ,
        l.onComplete = function() {
            a.tween = 0,
            c && c.call(f)
        }
        ,
        f = a.tween = V.to(e, l),
        f
    };
    return e[s] = i,
    i.wheelHandler = function() {
        return r.tween && r.tween.kill() && (r.tween = 0)
    }
    ,
    Ve(e, "wheel", i.wheelHandler),
    H.isTouch && Ve(e, "touchmove", i.wheelHandler),
    r
}, H = function() {
    function n(t, i) {
        bs || n.register(V) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        ba(this),
        this.init(t, i)
    }
    var e = n.prototype;
    return e.init = function(i, s) {
        if (this.progress = this.start = 0,
        this.vars && this.kill(!0, !0),
        !tr) {
            this.update = this.refresh = this.kill = ri;
            return
        }
        i = ko(Tt(i) || sr(i) || i.nodeType ? {
            trigger: i
        } : i, Ur);
        var r = i, a = r.onUpdate, o = r.toggleClass, l = r.id, u = r.onToggle, h = r.onRefresh, d = r.scrub, f = r.trigger, c = r.pin, g = r.pinSpacing, p = r.invalidateOnRefresh, _ = r.anticipatePin, y = r.onScrubComplete, D = r.onSnapComplete, m = r.once, v = r.snap, x = r.pinReparent, P = r.pinSpacer, T = r.containerAnimation, E = r.fastScrollEnd, C = r.preventOverlaps, w = i.horizontal || i.containerAnimation && i.horizontal !== !1 ? ut : Le, L = !d && d !== 0, F = ft(i.scroller || te), O = V.core.getCache(F), I = ds(F), z = ("pinType"in i ? i.pinType : Vi(F, "pinType") || I && "fixed") === "fixed", k = [i.onEnter, i.onLeave, i.onEnterBack, i.onLeaveBack], B = L && i.toggleActions.split(" "), U = "markers"in i ? i.markers : Ur.markers, R = I ? 0 : parseFloat(Bt(F)["border" + w.p2 + Vs]) || 0, b = this, j = i.onRefreshInit && function() {
            return i.onRefreshInit(b)
        }
        , oe = ld(F, I, w), ke = ud(F, I), se = 0, K = 0, Ie = 0, ne = Wi(F, w), tt, Ye, Si, it, Ht, re, De, dt, xt, A, Dt, di, Ei, Ee, Ci, Xi, ms, ze, Pi, we, Xt, Rt, fi, Gs, Ce, Fr, Mi, _s, vs, Fi, Yi, Z, qi, Yt, qt, $t, $i, ys, pi;
        if (b._startClamp = b._endClamp = !1,
        b._dir = w,
        _ *= 45,
        b.scroller = F,
        b.scroll = T ? T.time.bind(T) : ne,
        it = ne(),
        b.vars = i,
        s = s || i.animation,
        "refreshPriority"in i && (fu = 1,
        i.refreshPriority === -9999 && (_r = b)),
        O.tweenScroll = O.tweenScroll || {
            top: Go(F, Le),
            left: Go(F, ut)
        },
        b.tweenTo = tt = O.tweenScroll[w.p],
        b.scrubDuration = function(N) {
            qi = sr(N) && N,
            qi ? Z ? Z.duration(N) : Z = V.to(s, {
                ease: "expo",
                totalProgress: "+=0",
                inherit: !1,
                duration: qi,
                paused: !0,
                onComplete: function() {
                    return y && y(b)
                }
            }) : (Z && Z.progress(1).kill(),
            Z = 0)
        }
        ,
        s && (s.vars.lazy = !1,
        s._initted && !b.isReverted || s.vars.immediateRender !== !1 && i.immediateRender !== !1 && s.duration() && s.render(0, !0, !0),
        b.animation = s.pause(),
        s.scrollTrigger = b,
        b.scrubDuration(d),
        Fi = 0,
        l || (l = s.vars.id)),
        v && ((!es(v) || v.push) && (v = {
            snapTo: v
        }),
        "scrollBehavior"in ce.style && V.set(I ? [ce, Kt] : F, {
            scrollBehavior: "auto"
        }),
        J.forEach(function(N) {
            return ht(N) && N.target === (I ? ge.scrollingElement || Kt : F) && (N.smooth = !1)
        }),
        Si = ht(v.snapTo) ? v.snapTo : v.snapTo === "labels" ? cd(s) : v.snapTo === "labelsDirectional" ? dd(s) : v.directional !== !1 ? function(N, $) {
            return to(v.snapTo)(N, Ke() - K < 500 ? 0 : $.direction)
        }
        : V.utils.snap(v.snapTo),
        Yt = v.duration || {
            min: .1,
            max: 2
        },
        Yt = es(Yt) ? dr(Yt.min, Yt.max) : dr(Yt, Yt),
        qt = V.delayedCall(v.delay || qi / 2 || .1, function() {
            var N = ne()
              , $ = Ke() - K < 500
              , G = tt.tween;
            if (($ || Math.abs(b.getVelocity()) < 10) && !G && !En && se !== N) {
                var Y = (N - re) / Ee, Be = s && !L ? s.totalProgress() : Y, ee = $ ? 0 : (Be - Yi) / (Ke() - er) * 1e3 || 0, be = V.utils.clamp(-Y, 1 - Y, Ds(ee / 2) * ee / .185), qe = Y + (v.inertia === !1 ? 0 : be), ye, de, le = v, jt = le.onStart, pe = le.onInterrupt, wt = le.onComplete;
                if (ye = Si(qe, b),
                sr(ye) || (ye = qe),
                de = Math.round(re + ye * Ee),
                N <= De && N >= re && de !== N) {
                    if (G && !G._initted && G.data <= Ds(de - N))
                        return;
                    v.inertia === !1 && (be = ye - Y),
                    tt(de, {
                        duration: Yt(Ds(Math.max(Ds(qe - Be), Ds(ye - Be)) * .185 / ee / .05 || 0)),
                        ease: v.ease || "power3",
                        data: Ds(de - N),
                        onInterrupt: function() {
                            return qt.restart(!0) && pe && pe(b)
                        },
                        onComplete: function() {
                            b.update(),
                            se = ne(),
                            s && (Z ? Z.resetTo("totalProgress", ye, s._tTime / s._tDur) : s.progress(ye)),
                            Fi = Yi = s && !L ? s.totalProgress() : b.progress,
                            D && D(b),
                            wt && wt(b)
                        }
                    }, N, be * Ee, de - N - be * Ee),
                    jt && jt(b, tt.tween)
                }
            } else
                b.isActive && se !== N && qt.restart(!0)
        }).pause()),
        l && (Sa[l] = b),
        f = b.trigger = ft(f || c !== !0 && c),
        pi = f && f._gsap && f._gsap.stRevert,
        pi && (pi = pi(b)),
        c = c === !0 ? f : ft(c),
        Tt(o) && (o = {
            targets: f,
            className: o
        }),
        c && (g === !1 || g === zt || (g = !g && c.parentNode && c.parentNode.style && Bt(c.parentNode).display === "flex" ? !1 : Me),
        b.pin = c,
        Ye = V.core.getCache(c),
        Ye.spacer ? Ci = Ye.pinState : (P && (P = ft(P),
        P && !P.nodeType && (P = P.current || P.nativeElement),
        Ye.spacerIsNative = !!P,
        P && (Ye.spacerState = Wr(P))),
        Ye.spacer = ze = P || ge.createElement("div"),
        ze.classList.add("pin-spacer"),
        l && ze.classList.add("pin-spacer-" + l),
        Ye.pinState = Ci = Wr(c)),
        i.force3D !== !1 && V.set(c, {
            force3D: !0
        }),
        b.spacer = ze = Ye.spacer,
        vs = Bt(c),
        Gs = vs[g + w.os2],
        we = V.getProperty(c),
        Xt = V.quickSetter(c, w.a, Re),
        Xn(c, ze, vs),
        ms = Wr(c)),
        U) {
            di = es(U) ? ko(U, Io) : Io,
            A = Gr("scroller-start", l, F, w, di, 0),
            Dt = Gr("scroller-end", l, F, w, di, 0, A),
            Pi = A["offset" + w.op.d2];
            var Ws = ft(Vi(F, "content") || F);
            dt = this.markerStart = Gr("start", l, Ws, w, di, Pi, 0, T),
            xt = this.markerEnd = Gr("end", l, Ws, w, di, Pi, 0, T),
            T && (ys = V.quickSetter([dt, xt], w.a, Re)),
            !z && !(hi.length && Vi(F, "fixedMarkers") === !0) && (hd(I ? ce : F),
            V.set([A, Dt], {
                force3D: !0
            }),
            Fr = V.quickSetter(A, w.a, Re),
            _s = V.quickSetter(Dt, w.a, Re))
        }
        if (T) {
            var q = T.vars.onUpdate
              , W = T.vars.onUpdateParams;
            T.eventCallback("onUpdate", function() {
                b.update(0, 0, 1),
                q && q.apply(T, W || [])
            })
        }
        if (b.previous = function() {
            return Q[Q.indexOf(b) - 1]
        }
        ,
        b.next = function() {
            return Q[Q.indexOf(b) + 1]
        }
        ,
        b.revert = function(N, $) {
            if (!$)
                return b.kill(!0);
            var G = N !== !1 || !b.enabled
              , Y = Qe;
            G !== b.isReverted && (G && ($t = Math.max(ne(), b.scroll.rec || 0),
            Ie = b.progress,
            $i = s && s.progress()),
            dt && [dt, xt, A, Dt].forEach(function(Be) {
                return Be.style.display = G ? "none" : "block"
            }),
            G && (Qe = b,
            b.update(G)),
            c && (!x || !b.isActive) && (G ? gd(c, ze, Ci) : Xn(c, ze, Bt(c), Ce)),
            G || b.update(G),
            Qe = Y,
            b.isReverted = G)
        }
        ,
        b.refresh = function(N, $, G, Y) {
            if (!((Qe || !b.enabled) && !$)) {
                if (c && N && Gt) {
                    Ve(n, "scrollEnd", Tu);
                    return
                }
                !ot && j && j(b),
                Qe = b,
                tt.tween && !G && (tt.tween.kill(),
                tt.tween = 0),
                Z && Z.pause(),
                p && s && s.revert({
                    kill: !1
                }).invalidate(),
                b.isReverted || b.revert(!0, !0),
                b._subPinOffset = !1;
                var Be = oe(), ee = ke(), be = T ? T.duration() : oi(F, w), qe = Ee <= .01, ye = 0, de = Y || 0, le = es(G) ? G.end : i.end, jt = i.endTrigger || f, pe = es(G) ? G.start : i.start || (i.start === 0 || !f ? 0 : c ? "0 0" : "0 100%"), wt = b.pinnedContainer = i.pinnedContainer && ft(i.pinnedContainer, b), Zt = f && Math.max(0, Q.indexOf(b)) || 0, We = Zt, He, $e, ji, Ar, je, Ae, Jt, Pn, ao, Hs, ei, Xs, Rr;
                for (U && es(G) && (Xs = V.getProperty(A, w.p),
                Rr = V.getProperty(Dt, w.p)); We--; )
                    Ae = Q[We],
                    Ae.end || Ae.refresh(0, 1) || (Qe = b),
                    Jt = Ae.pin,
                    Jt && (Jt === f || Jt === c || Jt === wt) && !Ae.isReverted && (Hs || (Hs = []),
                    Hs.unshift(Ae),
                    Ae.revert(!0, !0)),
                    Ae !== Q[We] && (Zt--,
                    We--);
                for (ht(pe) && (pe = pe(b)),
                pe = Ao(pe, "start", b),
                re = Vo(pe, f, Be, w, ne(), dt, A, b, ee, R, z, be, T, b._startClamp && "_startClamp") || (c ? -.001 : 0),
                ht(le) && (le = le(b)),
                Tt(le) && !le.indexOf("+=") && (~le.indexOf(" ") ? le = (Tt(pe) ? pe.split(" ")[0] : "") + le : (ye = en(le.substr(2), Be),
                le = Tt(pe) ? pe : (T ? V.utils.mapRange(0, T.duration(), T.scrollTrigger.start, T.scrollTrigger.end, re) : re) + ye,
                jt = f)),
                le = Ao(le, "end", b),
                De = Math.max(re, Vo(le || (jt ? "100% 0" : be), jt, Be, w, ne() + ye, xt, Dt, b, ee, R, z, be, T, b._endClamp && "_endClamp")) || -.001,
                ye = 0,
                We = Zt; We--; )
                    Ae = Q[We],
                    Jt = Ae.pin,
                    Jt && Ae.start - Ae._pinPush <= re && !T && Ae.end > 0 && (He = Ae.end - (b._startClamp ? Math.max(0, Ae.start) : Ae.start),
                    (Jt === f && Ae.start - Ae._pinPush < re || Jt === wt) && isNaN(pe) && (ye += He * (1 - Ae.progress)),
                    Jt === c && (de += He));
                if (re += ye,
                De += ye,
                b._startClamp && (b._startClamp += ye),
                b._endClamp && !ot && (b._endClamp = De || -.001,
                De = Math.min(De, oi(F, w))),
                Ee = De - re || (re -= .01) && .001,
                qe && (Ie = V.utils.clamp(0, 1, V.utils.normalize(re, De, $t))),
                b._pinPush = de,
                dt && ye && (He = {},
                He[w.a] = "+=" + ye,
                wt && (He[w.p] = "-=" + ne()),
                V.set([dt, xt], He)),
                c && !(Ta && b.end >= oi(F, w)))
                    He = Bt(c),
                    Ar = w === Le,
                    ji = ne(),
                    Rt = parseFloat(we(w.a)) + de,
                    !be && De > 1 && (ei = (I ? ge.scrollingElement || Kt : F).style,
                    ei = {
                        style: ei,
                        value: ei["overflow" + w.a.toUpperCase()]
                    },
                    I && Bt(ce)["overflow" + w.a.toUpperCase()] !== "scroll" && (ei.style["overflow" + w.a.toUpperCase()] = "scroll")),
                    Xn(c, ze, He),
                    ms = Wr(c),
                    $e = _i(c, !0),
                    Pn = z && Wi(F, Ar ? ut : Le)(),
                    g ? (Ce = [g + w.os2, Ee + de + Re],
                    Ce.t = ze,
                    We = g === Me ? _n(c, w) + Ee + de : 0,
                    We && (Ce.push(w.d, We + Re),
                    ze.style.flexBasis !== "auto" && (ze.style.flexBasis = We + Re)),
                    Ls(Ce),
                    wt && Q.forEach(function(Ys) {
                        Ys.pin === wt && Ys.vars.pinSpacing !== !1 && (Ys._subPinOffset = !0)
                    }),
                    z && ne($t)) : (We = _n(c, w),
                    We && ze.style.flexBasis !== "auto" && (ze.style.flexBasis = We + Re)),
                    z && (je = {
                        top: $e.top + (Ar ? ji - re : Pn) + Re,
                        left: $e.left + (Ar ? Pn : ji - re) + Re,
                        boxSizing: "border-box",
                        position: "fixed"
                    },
                    je[os] = je["max" + Vs] = Math.ceil($e.width) + Re,
                    je[ls] = je["max" + eo] = Math.ceil($e.height) + Re,
                    je[zt] = je[zt + gr] = je[zt + fr] = je[zt + mr] = je[zt + pr] = "0",
                    je[Me] = He[Me],
                    je[Me + gr] = He[Me + gr],
                    je[Me + fr] = He[Me + fr],
                    je[Me + mr] = He[Me + mr],
                    je[Me + pr] = He[Me + pr],
                    Xi = _d(Ci, je, x),
                    ot && ne(0)),
                    s ? (ao = s._initted,
                    Vn(1),
                    s.render(s.duration(), !0, !0),
                    fi = we(w.a) - Rt + Ee + de,
                    Mi = Math.abs(Ee - fi) > 1,
                    z && Mi && Xi.splice(Xi.length - 2, 2),
                    s.render(0, !0, !0),
                    ao || s.invalidate(!0),
                    s.parent || s.totalTime(s.totalTime()),
                    Vn(0)) : fi = Ee,
                    ei && (ei.value ? ei.style["overflow" + w.a.toUpperCase()] = ei.value : ei.style.removeProperty("overflow-" + w.a));
                else if (f && ne() && !T)
                    for ($e = f.parentNode; $e && $e !== ce; )
                        $e._pinOffset && (re -= $e._pinOffset,
                        De -= $e._pinOffset),
                        $e = $e.parentNode;
                Hs && Hs.forEach(function(Ys) {
                    return Ys.revert(!1, !0)
                }),
                b.start = re,
                b.end = De,
                it = Ht = ot ? $t : ne(),
                !T && !ot && (it < $t && ne($t),
                b.scroll.rec = 0),
                b.revert(!1, !0),
                K = Ke(),
                qt && (se = -1,
                qt.restart(!0)),
                Qe = 0,
                s && L && (s._initted || $i) && s.progress() !== $i && s.progress($i || 0, !0).render(s.time(), !0, !0),
                (qe || Ie !== b.progress || T || p) && (s && !L && s.totalProgress(T && re < -.001 && !Ie ? V.utils.normalize(re, De, 0) : Ie, !0),
                b.progress = qe || (it - re) / Ee === Ie ? 0 : Ie),
                c && g && (ze._pinOffset = Math.round(b.progress * fi)),
                Z && Z.invalidate(),
                isNaN(Xs) || (Xs -= V.getProperty(A, w.p),
                Rr -= V.getProperty(Dt, w.p),
                Hr(A, w, Xs),
                Hr(dt, w, Xs - (Y || 0)),
                Hr(Dt, w, Rr),
                Hr(xt, w, Rr - (Y || 0))),
                qe && !ot && b.update(),
                h && !ot && !Ei && (Ei = !0,
                h(b),
                Ei = !1)
            }
        }
        ,
        b.getVelocity = function() {
            return (ne() - Ht) / (Ke() - er) * 1e3 || 0
        }
        ,
        b.endAnimation = function() {
            js(b.callbackAnimation),
            s && (Z ? Z.progress(1) : s.paused() ? L || js(s, b.direction < 0, 1) : js(s, s.reversed()))
        }
        ,
        b.labelToScroll = function(N) {
            return s && s.labels && (re || b.refresh() || re) + s.labels[N] / s.duration() * Ee || 0
        }
        ,
        b.getTrailing = function(N) {
            var $ = Q.indexOf(b)
              , G = b.direction > 0 ? Q.slice(0, $).reverse() : Q.slice($ + 1);
            return (Tt(N) ? G.filter(function(Y) {
                return Y.vars.preventOverlaps === N
            }) : G).filter(function(Y) {
                return b.direction > 0 ? Y.end <= re : Y.start >= De
            })
        }
        ,
        b.update = function(N, $, G) {
            if (!(T && !G && !N)) {
                var Y = ot === !0 ? $t : b.scroll(), Be = N ? 0 : (Y - re) / Ee, ee = Be < 0 ? 0 : Be > 1 ? 1 : Be || 0, be = b.progress, qe, ye, de, le, jt, pe, wt, Zt;
                if ($ && (Ht = it,
                it = T ? ne() : Y,
                v && (Yi = Fi,
                Fi = s && !L ? s.totalProgress() : ee)),
                _ && c && !Qe && !zr && Gt && (!ee && re < Y + (Y - Ht) / (Ke() - er) * _ ? ee = 1e-4 : ee === 1 && De > Y + (Y - Ht) / (Ke() - er) * _ && (ee = .9999)),
                ee !== be && b.enabled) {
                    if (qe = b.isActive = !!ee && ee < 1,
                    ye = !!be && be < 1,
                    pe = qe !== ye,
                    jt = pe || !!ee != !!be,
                    b.direction = ee > be ? 1 : -1,
                    b.progress = ee,
                    jt && !Qe && (de = ee && !be ? 0 : ee === 1 ? 1 : be === 1 ? 2 : 3,
                    L && (le = !pe && B[de + 1] !== "none" && B[de + 1] || B[de],
                    Zt = s && (le === "complete" || le === "reset" || le in s))),
                    C && (pe || Zt) && (Zt || d || !s) && (ht(C) ? C(b) : b.getTrailing(C).forEach(function(ji) {
                        return ji.endAnimation()
                    })),
                    L || (Z && !Qe && !zr ? (Z._dp._time - Z._start !== Z._time && Z.render(Z._dp._time - Z._start),
                    Z.resetTo ? Z.resetTo("totalProgress", ee, s._tTime / s._tDur) : (Z.vars.totalProgress = ee,
                    Z.invalidate().restart())) : s && s.totalProgress(ee, !!(Qe && (K || N)))),
                    c) {
                        if (N && g && (ze.style[g + w.os2] = Gs),
                        !z)
                            Xt(ir(Rt + fi * ee));
                        else if (jt) {
                            if (wt = !N && ee > be && De + 1 > Y && Y + 1 >= oi(F, w),
                            x)
                                if (!N && (qe || wt)) {
                                    var We = _i(c, !0)
                                      , He = Y - re;
                                    Uo(c, ce, We.top + (w === Le ? He : 0) + Re, We.left + (w === Le ? 0 : He) + Re)
                                } else
                                    Uo(c, ze);
                            Ls(qe || wt ? Xi : ms),
                            Mi && ee < 1 && qe || Xt(Rt + (ee === 1 && !wt ? fi : 0))
                        }
                    }
                    v && !tt.tween && !Qe && !zr && qt.restart(!0),
                    o && (pe || m && ee && (ee < 1 || !Un)) && Sr(o.targets).forEach(function(ji) {
                        return ji.classList[qe || m ? "add" : "remove"](o.className)
                    }),
                    a && !L && !N && a(b),
                    jt && !Qe ? (L && (Zt && (le === "complete" ? s.pause().totalProgress(1) : le === "reset" ? s.restart(!0).pause() : le === "restart" ? s.restart(!0) : s[le]()),
                    a && a(b)),
                    (pe || !Un) && (u && pe && Wn(b, u),
                    k[de] && Wn(b, k[de]),
                    m && (ee === 1 ? b.kill(!1, 1) : k[de] = 0),
                    pe || (de = ee === 1 ? 1 : 3,
                    k[de] && Wn(b, k[de]))),
                    E && !qe && Math.abs(b.getVelocity()) > (sr(E) ? E : 2500) && (js(b.callbackAnimation),
                    Z ? Z.progress(1) : js(s, le === "reverse" ? 1 : !ee, 1))) : L && a && !Qe && a(b)
                }
                if (_s) {
                    var $e = T ? Y / T.duration() * (T._caScrollDist || 0) : Y;
                    Fr($e + (A._isFlipped ? 1 : 0)),
                    _s($e)
                }
                ys && ys(-Y / T.duration() * (T._caScrollDist || 0))
            }
        }
        ,
        b.enable = function(N, $) {
            b.enabled || (b.enabled = !0,
            Ve(F, "resize", rr),
            I || Ve(F, "scroll", ws),
            j && Ve(n, "refreshInit", j),
            N !== !1 && (b.progress = Ie = 0,
            it = Ht = se = ne()),
            $ !== !1 && b.refresh())
        }
        ,
        b.getTween = function(N) {
            return N && tt ? tt.tween : Z
        }
        ,
        b.setPositions = function(N, $, G, Y) {
            if (T) {
                var Be = T.scrollTrigger
                  , ee = T.duration()
                  , be = Be.end - Be.start;
                N = Be.start + be * N / ee,
                $ = Be.start + be * $ / ee
            }
            b.refresh(!1, !1, {
                start: Ro(N, G && !!b._startClamp),
                end: Ro($, G && !!b._endClamp)
            }, Y),
            b.update()
        }
        ,
        b.adjustPinSpacing = function(N) {
            if (Ce && N) {
                var $ = Ce.indexOf(w.d) + 1;
                Ce[$] = parseFloat(Ce[$]) + N + Re,
                Ce[1] = parseFloat(Ce[1]) + N + Re,
                Ls(Ce)
            }
        }
        ,
        b.disable = function(N, $) {
            if (b.enabled && (N !== !1 && b.revert(!0, !0),
            b.enabled = b.isActive = !1,
            $ || Z && Z.pause(),
            $t = 0,
            Ye && (Ye.uncache = 1),
            j && Ne(n, "refreshInit", j),
            qt && (qt.pause(),
            tt.tween && tt.tween.kill() && (tt.tween = 0)),
            !I)) {
                for (var G = Q.length; G--; )
                    if (Q[G].scroller === F && Q[G] !== b)
                        return;
                Ne(F, "resize", rr),
                I || Ne(F, "scroll", ws)
            }
        }
        ,
        b.kill = function(N, $) {
            b.disable(N, $),
            Z && !$ && Z.kill(),
            l && delete Sa[l];
            var G = Q.indexOf(b);
            G >= 0 && Q.splice(G, 1),
            G === at && sn > 0 && at--,
            G = 0,
            Q.forEach(function(Y) {
                return Y.scroller === b.scroller && (G = 1)
            }),
            G || ot || (b.scroll.rec = 0),
            s && (s.scrollTrigger = null,
            N && s.revert({
                kill: !1
            }),
            $ || s.kill()),
            dt && [dt, xt, A, Dt].forEach(function(Y) {
                return Y.parentNode && Y.parentNode.removeChild(Y)
            }),
            _r === b && (_r = 0),
            c && (Ye && (Ye.uncache = 1),
            G = 0,
            Q.forEach(function(Y) {
                return Y.pin === c && G++
            }),
            G || (Ye.spacer = 0)),
            i.onKill && i.onKill(b)
        }
        ,
        Q.push(b),
        b.enable(!1, !1),
        pi && pi(b),
        s && s.add && !Ee) {
            var ae = b.update;
            b.update = function() {
                b.update = ae,
                re || De || b.refresh()
            }
            ,
            V.delayedCall(.01, b.update),
            Ee = .01,
            re = De = 0
        } else
            b.refresh();
        c && pd()
    }
    ,
    n.register = function(i) {
        return bs || (V = i || vu(),
        _u() && window.document && n.enable(),
        bs = tr),
        bs
    }
    ,
    n.defaults = function(i) {
        if (i)
            for (var s in i)
                Ur[s] = i[s];
        return Ur
    }
    ,
    n.disable = function(i, s) {
        tr = 0,
        Q.forEach(function(a) {
            return a[s ? "kill" : "disable"](i)
        }),
        Ne(te, "wheel", ws),
        Ne(ge, "scroll", ws),
        clearInterval(Ir),
        Ne(ge, "touchcancel", ri),
        Ne(ce, "touchstart", ri),
        Nr(Ne, ge, "pointerdown,touchstart,mousedown", Oo),
        Nr(Ne, ge, "pointerup,touchend,mouseup", Lo),
        gn.kill(),
        Br(Ne);
        for (var r = 0; r < J.length; r += 3)
            Vr(Ne, J[r], J[r + 1]),
            Vr(Ne, J[r], J[r + 2])
    }
    ,
    n.enable = function() {
        if (te = window,
        ge = document,
        Kt = ge.documentElement,
        ce = ge.body,
        V && (Sr = V.utils.toArray,
        dr = V.utils.clamp,
        ba = V.core.context || ri,
        Vn = V.core.suppressOverwrites || ri,
        Qa = te.history.scrollRestoration || "auto",
        Ea = te.pageYOffset,
        V.core.globals("ScrollTrigger", n),
        ce)) {
            tr = 1,
            Os = document.createElement("div"),
            Os.style.height = "100vh",
            Os.style.position = "absolute",
            Cu(),
            od(),
            Se.register(V),
            n.isTouch = Se.isTouch,
            Ai = Se.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),
            wa = Se.isTouch === 1,
            Ve(te, "wheel", ws),
            du = [te, ge, Kt, ce],
            V.matchMedia ? (n.matchMedia = function(l) {
                var u = V.matchMedia(), h;
                for (h in l)
                    u.add(h, l[h]);
                return u
            }
            ,
            V.addEventListener("matchMediaInit", function() {
                return io()
            }),
            V.addEventListener("matchMediaRevert", function() {
                return Su()
            }),
            V.addEventListener("matchMedia", function() {
                is(0, 1),
                ps("matchMedia")
            }),
            V.matchMedia("(orientation: portrait)", function() {
                return Hn(),
                Hn
            })) : console.warn("Requires GSAP 3.11.0 or later"),
            Hn(),
            Ve(ge, "scroll", ws);
            var i = ce.style, s = i.borderTopStyle, r = V.core.Animation.prototype, a, o;
            for (r.revert || Object.defineProperty(r, "revert", {
                value: function() {
                    return this.time(-.01, !0)
                }
            }),
            i.borderTopStyle = "solid",
            a = _i(ce),
            Le.m = Math.round(a.top + Le.sc()) || 0,
            ut.m = Math.round(a.left + ut.sc()) || 0,
            s ? i.borderTopStyle = s : i.removeProperty("border-top-style"),
            Ir = setInterval(zo, 250),
            V.delayedCall(.5, function() {
                return zr = 0
            }),
            Ve(ge, "touchcancel", ri),
            Ve(ce, "touchstart", ri),
            Nr(Ve, ge, "pointerdown,touchstart,mousedown", Oo),
            Nr(Ve, ge, "pointerup,touchend,mouseup", Lo),
            Da = V.utils.checkPrefix("transform"),
            rn.push(Da),
            bs = Ke(),
            gn = V.delayedCall(.2, is).pause(),
            Ts = [ge, "visibilitychange", function() {
                var l = te.innerWidth
                  , u = te.innerHeight;
                ge.hidden ? (Mo = l,
                Fo = u) : (Mo !== l || Fo !== u) && rr()
            }
            , ge, "DOMContentLoaded", is, te, "load", is, te, "resize", rr],
            Br(Ve),
            Q.forEach(function(l) {
                return l.enable(0, 1)
            }),
            o = 0; o < J.length; o += 3)
                Vr(Ne, J[o], J[o + 1]),
                Vr(Ne, J[o], J[o + 2])
        }
    }
    ,
    n.config = function(i) {
        "limitCallbacks"in i && (Un = !!i.limitCallbacks);
        var s = i.syncInterval;
        s && clearInterval(Ir) || (Ir = s) && setInterval(zo, s),
        "ignoreMobileResize"in i && (wa = n.isTouch === 1 && i.ignoreMobileResize),
        "autoRefreshEvents"in i && (Br(Ne) || Br(Ve, i.autoRefreshEvents || "none"),
        pu = (i.autoRefreshEvents + "").indexOf("resize") === -1)
    }
    ,
    n.scrollerProxy = function(i, s) {
        var r = ft(i)
          , a = J.indexOf(r)
          , o = ds(r);
        ~a && J.splice(a, o ? 6 : 2),
        s && (o ? hi.unshift(te, s, ce, s, Kt, s) : hi.unshift(r, s))
    }
    ,
    n.clearMatchMedia = function(i) {
        Q.forEach(function(s) {
            return s._ctx && s._ctx.query === i && s._ctx.kill(!0, !0)
        })
    }
    ,
    n.isInViewport = function(i, s, r) {
        var a = (Tt(i) ? ft(i) : i).getBoundingClientRect()
          , o = a[r ? os : ls] * s || 0;
        return r ? a.right - o > 0 && a.left + o < te.innerWidth : a.bottom - o > 0 && a.top + o < te.innerHeight
    }
    ,
    n.positionInViewport = function(i, s, r) {
        Tt(i) && (i = ft(i));
        var a = i.getBoundingClientRect()
          , o = a[r ? os : ls]
          , l = s == null ? o / 2 : s in vn ? vn[s] * o : ~s.indexOf("%") ? parseFloat(s) * o / 100 : parseFloat(s) || 0;
        return r ? (a.left + l) / te.innerWidth : (a.top + l) / te.innerHeight
    }
    ,
    n.killAll = function(i) {
        if (Q.slice(0).forEach(function(r) {
            return r.vars.id !== "ScrollSmoother" && r.kill()
        }),
        i !== !0) {
            var s = fs.killAll || [];
            fs = {},
            s.forEach(function(r) {
                return r()
            })
        }
    }
    ,
    n
}();
H.version = "3.12.5";
H.saveStyles = function(n) {
    return n ? Sr(n).forEach(function(e) {
        if (e && e.style) {
            var t = bt.indexOf(e);
            t >= 0 && bt.splice(t, 5),
            bt.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), V.core.getCache(e), ba())
        }
    }) : bt
}
;
H.revert = function(n, e) {
    return io(!n, e)
}
;
H.create = function(n, e) {
    return new H(n,e)
}
;
H.refresh = function(n) {
    return n ? rr() : (bs || H.register()) && is(!0)
}
;
H.update = function(n) {
    return ++J.cache && xi(n === !0 ? 2 : 0)
}
;
H.clearScrollMemory = Eu;
H.maxScroll = function(n, e) {
    return oi(n, e ? ut : Le)
}
;
H.getScrollFunc = function(n, e) {
    return Wi(ft(n), e ? ut : Le)
}
;
H.getById = function(n) {
    return Sa[n]
}
;
H.getAll = function() {
    return Q.filter(function(n) {
        return n.vars.id !== "ScrollSmoother"
    })
}
;
H.isScrolling = function() {
    return !!Gt
}
;
H.snapDirectional = to;
H.addEventListener = function(n, e) {
    var t = fs[n] || (fs[n] = []);
    ~t.indexOf(e) || t.push(e)
}
;
H.removeEventListener = function(n, e) {
    var t = fs[n]
      , i = t && t.indexOf(e);
    i >= 0 && t.splice(i, 1)
}
;
H.batch = function(n, e) {
    var t = [], i = {}, s = e.interval || .016, r = e.batchMax || 1e9, a = function(u, h) {
        var d = []
          , f = []
          , c = V.delayedCall(s, function() {
            h(d, f),
            d = [],
            f = []
        }).pause();
        return function(g) {
            d.length || c.restart(!0),
            d.push(g.trigger),
            f.push(g),
            r <= d.length && c.progress(1)
        }
    }, o;
    for (o in e)
        i[o] = o.substr(0, 2) === "on" && ht(e[o]) && o !== "onRefreshInit" ? a(o, e[o]) : e[o];
    return ht(r) && (r = r(),
    Ve(H, "refresh", function() {
        return r = e.batchMax()
    })),
    Sr(n).forEach(function(l) {
        var u = {};
        for (o in i)
            u[o] = i[o];
        u.trigger = l,
        t.push(H.create(u))
    }),
    t
}
;
var Wo = function(e, t, i, s) {
    return t > s ? e(s) : t < 0 && e(0),
    i > s ? (s - t) / (i - t) : i < 0 ? t / (t - i) : 1
}, Yn = function n(e, t) {
    t === !0 ? e.style.removeProperty("touch-action") : e.style.touchAction = t === !0 ? "auto" : t ? "pan-" + t + (Se.isTouch ? " pinch-zoom" : "") : "none",
    e === Kt && n(ce, t)
}, Xr = {
    auto: 1,
    scroll: 1
}, yd = function(e) {
    var t = e.event, i = e.target, s = e.axis, r = (t.changedTouches ? t.changedTouches[0] : t).target, a = r._gsap || V.core.getCache(r), o = Ke(), l;
    if (!a._isScrollT || o - a._isScrollT > 2e3) {
        for (; r && r !== ce && (r.scrollHeight <= r.clientHeight && r.scrollWidth <= r.clientWidth || !(Xr[(l = Bt(r)).overflowY] || Xr[l.overflowX])); )
            r = r.parentNode;
        a._isScroll = r && r !== i && !ds(r) && (Xr[(l = Bt(r)).overflowY] || Xr[l.overflowX]),
        a._isScrollT = o
    }
    (a._isScroll || s === "x") && (t.stopPropagation(),
    t._gsapAllow = !0)
}, Mu = function(e, t, i, s) {
    return Se.create({
        target: e,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: t,
        onWheel: s = s && yd,
        onPress: s,
        onDrag: s,
        onScroll: s,
        onEnable: function() {
            return i && Ve(ge, Se.eventTypes[0], Xo, !1, !0)
        },
        onDisable: function() {
            return Ne(ge, Se.eventTypes[0], Xo, !0)
        }
    })
}, xd = /(input|label|select|textarea)/i, Ho, Xo = function(e) {
    var t = xd.test(e.target.tagName);
    (t || Ho) && (e._gsapAllow = !0,
    Ho = t)
}, Dd = function(e) {
    es(e) || (e = {}),
    e.preventDefault = e.isNormalizer = e.allowClicks = !0,
    e.type || (e.type = "wheel,touch"),
    e.debounce = !!e.debounce,
    e.id = e.id || "normalizer";
    var t = e, i = t.normalizeScrollX, s = t.momentum, r = t.allowNestedScroll, a = t.onRelease, o, l, u = ft(e.target) || Kt, h = V.core.globals().ScrollSmoother, d = h && h.get(), f = Ai && (e.content && ft(e.content) || d && e.content !== !1 && !d.smooth() && d.content()), c = Wi(u, Le), g = Wi(u, ut), p = 1, _ = (Se.isTouch && te.visualViewport ? te.visualViewport.scale * te.visualViewport.width : te.outerWidth) / te.innerWidth, y = 0, D = ht(s) ? function() {
        return s(o)
    }
    : function() {
        return s || 2.8
    }
    , m, v, x = Mu(u, e.type, !0, r), P = function() {
        return v = !1
    }, T = ri, E = ri, C = function() {
        l = oi(u, Le),
        E = dr(Ai ? 1 : 0, l),
        i && (T = dr(0, oi(u, ut))),
        m = us
    }, w = function() {
        f._gsap.y = ir(parseFloat(f._gsap.y) + c.offset) + "px",
        f.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(f._gsap.y) + ", 0, 1)",
        c.offset = c.cacheID = 0
    }, L = function() {
        if (v) {
            requestAnimationFrame(P);
            var U = ir(o.deltaY / 2)
              , R = E(c.v - U);
            if (f && R !== c.v + c.offset) {
                c.offset = R - c.v;
                var b = ir((parseFloat(f && f._gsap.y) || 0) - c.offset);
                f.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + b + ", 0, 1)",
                f._gsap.y = b + "px",
                c.cacheID = J.cache,
                xi()
            }
            return !0
        }
        c.offset && w(),
        v = !0
    }, F, O, I, z, k = function() {
        C(),
        F.isActive() && F.vars.scrollY > l && (c() > l ? F.progress(1) && c(l) : F.resetTo("scrollY", l))
    };
    return f && V.set(f, {
        y: "+=0"
    }),
    e.ignoreCheck = function(B) {
        return Ai && B.type === "touchmove" && L() || p > 1.05 && B.type !== "touchstart" || o.isGesturing || B.touches && B.touches.length > 1
    }
    ,
    e.onPress = function() {
        v = !1;
        var B = p;
        p = ir((te.visualViewport && te.visualViewport.scale || 1) / _),
        F.pause(),
        B !== p && Yn(u, p > 1.01 ? !0 : i ? !1 : "x"),
        O = g(),
        I = c(),
        C(),
        m = us
    }
    ,
    e.onRelease = e.onGestureStart = function(B, U) {
        if (c.offset && w(),
        !U)
            z.restart(!0);
        else {
            J.cache++;
            var R = D(), b, j;
            i && (b = g(),
            j = b + R * .05 * -B.velocityX / .227,
            R *= Wo(g, b, j, oi(u, ut)),
            F.vars.scrollX = T(j)),
            b = c(),
            j = b + R * .05 * -B.velocityY / .227,
            R *= Wo(c, b, j, oi(u, Le)),
            F.vars.scrollY = E(j),
            F.invalidate().duration(R).play(.01),
            (Ai && F.vars.scrollY >= l || b >= l - 1) && V.to({}, {
                onUpdate: k,
                duration: R
            })
        }
        a && a(B)
    }
    ,
    e.onWheel = function() {
        F._ts && F.pause(),
        Ke() - y > 1e3 && (m = 0,
        y = Ke())
    }
    ,
    e.onChange = function(B, U, R, b, j) {
        if (us !== m && C(),
        U && i && g(T(b[2] === U ? O + (B.startX - B.x) : g() + U - b[1])),
        R) {
            c.offset && w();
            var oe = j[2] === R
              , ke = oe ? I + B.startY - B.y : c() + R - j[1]
              , se = E(ke);
            oe && ke !== se && (I += se - ke),
            c(se)
        }
        (R || U) && xi()
    }
    ,
    e.onEnable = function() {
        Yn(u, i ? !1 : "x"),
        H.addEventListener("refresh", k),
        Ve(te, "resize", k),
        c.smooth && (c.target.style.scrollBehavior = "auto",
        c.smooth = g.smooth = !1),
        x.enable()
    }
    ,
    e.onDisable = function() {
        Yn(u, !0),
        Ne(te, "resize", k),
        H.removeEventListener("refresh", k),
        x.kill()
    }
    ,
    e.lockAxis = e.lockAxis !== !1,
    o = new Se(e),
    o.iOS = Ai,
    Ai && !c() && c(1),
    Ai && V.ticker.add(ri),
    z = o._dc,
    F = V.to(o, {
        ease: "power4",
        paused: !0,
        inherit: !1,
        scrollX: i ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
            scrollY: Pu(c, c(), function() {
                return F.pause()
            })
        },
        onUpdate: xi,
        onComplete: z.vars.onComplete
    }),
    o
};
H.sort = function(n) {
    return Q.sort(n || function(e, t) {
        return (e.vars.refreshPriority || 0) * -1e6 + e.start - (t.start + (t.vars.refreshPriority || 0) * -1e6)
    }
    )
}
;
H.observe = function(n) {
    return new Se(n)
}
;
H.normalizeScroll = function(n) {
    if (typeof n > "u")
        return nt;
    if (n === !0 && nt)
        return nt.enable();
    if (n === !1) {
        nt && nt.kill(),
        nt = n;
        return
    }
    var e = n instanceof Se ? n : Dd(n);
    return nt && nt.target === e.target && nt.kill(),
    ds(e.target) && (nt = e),
    e
}
;
H.core = {
    _getVelocityProp: xa,
    _inputObserver: Mu,
    _scrollers: J,
    _proxies: hi,
    bridge: {
        ss: function() {
            Gt || ps("scrollStart"),
            Gt = Ke()
        },
        ref: function() {
            return Qe
        }
    }
};
vu() && V.registerPlugin(H);
function Fu(n, e, t) {
    return Math.max(n, Math.min(e, t))
}
class wd {
    constructor() {
        this.isRunning = !1,
        this.value = 0,
        this.from = 0,
        this.to = 0,
        this.duration = 0,
        this.currentTime = 0
    }
    advance(e) {
        var t;
        if (!this.isRunning)
            return;
        let i = !1;
        if (this.duration && this.easing) {
            this.currentTime += e;
            const s = Fu(0, this.currentTime / this.duration, 1);
            i = s >= 1;
            const r = i ? 1 : this.easing(s);
            this.value = this.from + (this.to - this.from) * r
        } else
            this.lerp ? (this.value = function(r, a, o, l) {
                return function(h, d, f) {
                    return (1 - f) * h + f * d
                }(r, a, 1 - Math.exp(-o * l))
            }(this.value, this.to, 60 * this.lerp, e),
            Math.round(this.value) === this.to && (this.value = this.to,
            i = !0)) : (this.value = this.to,
            i = !0);
        i && this.stop(),
        (t = this.onUpdate) === null || t === void 0 || t.call(this, this.value, i)
    }
    stop() {
        this.isRunning = !1
    }
    fromTo(e, t, {lerp: i, duration: s, easing: r, onStart: a, onUpdate: o}) {
        this.from = this.value = e,
        this.to = t,
        this.lerp = i,
        this.duration = s,
        this.easing = r,
        this.currentTime = 0,
        this.isRunning = !0,
        a == null || a(),
        this.onUpdate = o
    }
}
class bd {
    constructor({wrapper: e, content: t, autoResize: i=!0, debounce: s=250}={}) {
        this.width = 0,
        this.height = 0,
        this.scrollWidth = 0,
        this.scrollHeight = 0,
        this.resize = () => {
            this.onWrapperResize(),
            this.onContentResize()
        }
        ,
        this.onWrapperResize = () => {
            this.wrapper === window ? (this.width = window.innerWidth,
            this.height = window.innerHeight) : this.wrapper instanceof HTMLElement && (this.width = this.wrapper.clientWidth,
            this.height = this.wrapper.clientHeight)
        }
        ,
        this.onContentResize = () => {
            this.wrapper === window ? (this.scrollHeight = this.content.scrollHeight,
            this.scrollWidth = this.content.scrollWidth) : this.wrapper instanceof HTMLElement && (this.scrollHeight = this.wrapper.scrollHeight,
            this.scrollWidth = this.wrapper.scrollWidth)
        }
        ,
        this.wrapper = e,
        this.content = t,
        i && (this.debouncedResize = function(a, o) {
            let l;
            return function() {
                let u = arguments
                  , h = this;
                clearTimeout(l),
                l = setTimeout(function() {
                    a.apply(h, u)
                }, o)
            }
        }(this.resize, s),
        this.wrapper === window ? window.addEventListener("resize", this.debouncedResize, !1) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize),
        this.wrapperResizeObserver.observe(this.wrapper)),
        this.contentResizeObserver = new ResizeObserver(this.debouncedResize),
        this.contentResizeObserver.observe(this.content)),
        this.resize()
    }
    destroy() {
        var e, t;
        (e = this.wrapperResizeObserver) === null || e === void 0 || e.disconnect(),
        (t = this.contentResizeObserver) === null || t === void 0 || t.disconnect(),
        window.removeEventListener("resize", this.debouncedResize, !1)
    }
    get limit() {
        return {
            x: this.scrollWidth - this.width,
            y: this.scrollHeight - this.height
        }
    }
}
class Au {
    constructor() {
        this.events = {}
    }
    emit(e, ...t) {
        let i = this.events[e] || [];
        for (let s = 0, r = i.length; s < r; s++)
            i[s](...t)
    }
    on(e, t) {
        var i;
        return !((i = this.events[e]) === null || i === void 0) && i.push(t) || (this.events[e] = [t]),
        () => {
            var s;
            this.events[e] = (s = this.events[e]) === null || s === void 0 ? void 0 : s.filter(r => t !== r)
        }
    }
    off(e, t) {
        var i;
        this.events[e] = (i = this.events[e]) === null || i === void 0 ? void 0 : i.filter(s => t !== s)
    }
    destroy() {
        this.events = {}
    }
}
const Yo = 100 / 6;
class Td {
    constructor(e, {wheelMultiplier: t=1, touchMultiplier: i=1}) {
        this.lastDelta = {
            x: 0,
            y: 0
        },
        this.windowWidth = 0,
        this.windowHeight = 0,
        this.onTouchStart = s => {
            const {clientX: r, clientY: a} = s.targetTouches ? s.targetTouches[0] : s;
            this.touchStart.x = r,
            this.touchStart.y = a,
            this.lastDelta = {
                x: 0,
                y: 0
            },
            this.emitter.emit("scroll", {
                deltaX: 0,
                deltaY: 0,
                event: s
            })
        }
        ,
        this.onTouchMove = s => {
            var r, a, o, l;
            const {clientX: u, clientY: h} = s.targetTouches ? s.targetTouches[0] : s
              , d = -(u - ((a = (r = this.touchStart) === null || r === void 0 ? void 0 : r.x) !== null && a !== void 0 ? a : 0)) * this.touchMultiplier
              , f = -(h - ((l = (o = this.touchStart) === null || o === void 0 ? void 0 : o.y) !== null && l !== void 0 ? l : 0)) * this.touchMultiplier;
            this.touchStart.x = u,
            this.touchStart.y = h,
            this.lastDelta = {
                x: d,
                y: f
            },
            this.emitter.emit("scroll", {
                deltaX: d,
                deltaY: f,
                event: s
            })
        }
        ,
        this.onTouchEnd = s => {
            this.emitter.emit("scroll", {
                deltaX: this.lastDelta.x,
                deltaY: this.lastDelta.y,
                event: s
            })
        }
        ,
        this.onWheel = s => {
            let {deltaX: r, deltaY: a, deltaMode: o} = s;
            r *= o === 1 ? Yo : o === 2 ? this.windowWidth : 1,
            a *= o === 1 ? Yo : o === 2 ? this.windowHeight : 1,
            r *= this.wheelMultiplier,
            a *= this.wheelMultiplier,
            this.emitter.emit("scroll", {
                deltaX: r,
                deltaY: a,
                event: s
            })
        }
        ,
        this.onWindowResize = () => {
            this.windowWidth = window.innerWidth,
            this.windowHeight = window.innerHeight
        }
        ,
        this.element = e,
        this.wheelMultiplier = t,
        this.touchMultiplier = i,
        this.touchStart = {
            x: null,
            y: null
        },
        this.emitter = new Au,
        window.addEventListener("resize", this.onWindowResize, !1),
        this.onWindowResize(),
        this.element.addEventListener("wheel", this.onWheel, {
            passive: !1
        }),
        this.element.addEventListener("touchstart", this.onTouchStart, {
            passive: !1
        }),
        this.element.addEventListener("touchmove", this.onTouchMove, {
            passive: !1
        }),
        this.element.addEventListener("touchend", this.onTouchEnd, {
            passive: !1
        })
    }
    on(e, t) {
        return this.emitter.on(e, t)
    }
    destroy() {
        this.emitter.destroy(),
        window.removeEventListener("resize", this.onWindowResize, !1),
        this.element.removeEventListener("wheel", this.onWheel),
        this.element.removeEventListener("touchstart", this.onTouchStart),
        this.element.removeEventListener("touchmove", this.onTouchMove),
        this.element.removeEventListener("touchend", this.onTouchEnd)
    }
}
class Sd {
    constructor({wrapper: e=window, content: t=document.documentElement, wheelEventsTarget: i=e, eventsTarget: s=i, smoothWheel: r=!0, syncTouch: a=!1, syncTouchLerp: o=.075, touchInertiaMultiplier: l=35, duration: u, easing: h=x => Math.min(1, 1.001 - Math.pow(2, -10 * x)), lerp: d=.1, infinite: f=!1, orientation: c="vertical", gestureOrientation: g="vertical", touchMultiplier: p=1, wheelMultiplier: _=1, autoResize: y=!0, prevent: D, virtualScroll: m, __experimental__naiveDimensions: v=!1}={}) {
        this.__isScrolling = !1,
        this.__isStopped = !1,
        this.__isLocked = !1,
        this.userData = {},
        this.lastVelocity = 0,
        this.velocity = 0,
        this.direction = 0,
        this.onPointerDown = x => {
            x.button === 1 && this.reset()
        }
        ,
        this.onVirtualScroll = x => {
            if (typeof this.options.virtualScroll == "function" && this.options.virtualScroll(x) === !1)
                return;
            const {deltaX: P, deltaY: T, event: E} = x;
            if (this.emitter.emit("virtual-scroll", {
                deltaX: P,
                deltaY: T,
                event: E
            }),
            E.ctrlKey)
                return;
            const C = E.type.includes("touch")
              , w = E.type.includes("wheel");
            if (this.isTouching = E.type === "touchstart" || E.type === "touchmove",
            this.options.syncTouch && C && E.type === "touchstart" && !this.isStopped && !this.isLocked)
                return void this.reset();
            const L = P === 0 && T === 0
              , F = this.options.gestureOrientation === "vertical" && T === 0 || this.options.gestureOrientation === "horizontal" && P === 0;
            if (L || F)
                return;
            let O = E.composedPath();
            O = O.slice(0, O.indexOf(this.rootElement));
            const I = this.options.prevent;
            if (O.find(U => {
                var R, b, j, oe, ke;
                return U instanceof Element && (typeof I == "function" && (I == null ? void 0 : I(U)) || ((R = U.hasAttribute) === null || R === void 0 ? void 0 : R.call(U, "data-lenis-prevent")) || C && ((b = U.hasAttribute) === null || b === void 0 ? void 0 : b.call(U, "data-lenis-prevent-touch")) || w && ((j = U.hasAttribute) === null || j === void 0 ? void 0 : j.call(U, "data-lenis-prevent-wheel")) || ((oe = U.classList) === null || oe === void 0 ? void 0 : oe.contains("lenis")) && !(!((ke = U.classList) === null || ke === void 0) && ke.contains("lenis-stopped")))
            }
            ))
                return;
            if (this.isStopped || this.isLocked)
                return void E.preventDefault();
            if (!(this.options.syncTouch && C || this.options.smoothWheel && w))
                return this.isScrolling = "native",
                void this.animate.stop();
            E.preventDefault();
            let z = T;
            this.options.gestureOrientation === "both" ? z = Math.abs(T) > Math.abs(P) ? T : P : this.options.gestureOrientation === "horizontal" && (z = P);
            const k = C && this.options.syncTouch
              , B = C && E.type === "touchend" && Math.abs(z) > 5;
            B && (z = this.velocity * this.options.touchInertiaMultiplier),
            this.scrollTo(this.targetScroll + z, Object.assign({
                programmatic: !1
            }, k ? {
                lerp: B ? this.options.syncTouchLerp : 1
            } : {
                lerp: this.options.lerp,
                duration: this.options.duration,
                easing: this.options.easing
            }))
        }
        ,
        this.onNativeScroll = () => {
            if (clearTimeout(this.__resetVelocityTimeout),
            delete this.__resetVelocityTimeout,
            this.__preventNextNativeScrollEvent)
                delete this.__preventNextNativeScrollEvent;
            else if (this.isScrolling === !1 || this.isScrolling === "native") {
                const x = this.animatedScroll;
                this.animatedScroll = this.targetScroll = this.actualScroll,
                this.lastVelocity = this.velocity,
                this.velocity = this.animatedScroll - x,
                this.direction = Math.sign(this.animatedScroll - x),
                this.isScrolling = "native",
                this.emit(),
                this.velocity !== 0 && (this.__resetVelocityTimeout = setTimeout( () => {
                    this.lastVelocity = this.velocity,
                    this.velocity = 0,
                    this.isScrolling = !1,
                    this.emit()
                }
                , 400))
            }
        }
        ,
        window.lenisVersion = "1.1.6",
        e && e !== document.documentElement && e !== document.body || (e = window),
        this.options = {
            wrapper: e,
            content: t,
            wheelEventsTarget: i,
            eventsTarget: s,
            smoothWheel: r,
            syncTouch: a,
            syncTouchLerp: o,
            touchInertiaMultiplier: l,
            duration: u,
            easing: h,
            lerp: d,
            infinite: f,
            gestureOrientation: g,
            orientation: c,
            touchMultiplier: p,
            wheelMultiplier: _,
            autoResize: y,
            prevent: D,
            virtualScroll: m,
            __experimental__naiveDimensions: v
        },
        this.animate = new wd,
        this.emitter = new Au,
        this.dimensions = new bd({
            wrapper: e,
            content: t,
            autoResize: y
        }),
        this.updateClassName(),
        this.userData = {},
        this.time = 0,
        this.velocity = this.lastVelocity = 0,
        this.isLocked = !1,
        this.isStopped = !1,
        this.isScrolling = !1,
        this.targetScroll = this.animatedScroll = this.actualScroll,
        this.options.wrapper.addEventListener("scroll", this.onNativeScroll, !1),
        this.options.wrapper.addEventListener("pointerdown", this.onPointerDown, !1),
        this.virtualScroll = new Td(s,{
            touchMultiplier: p,
            wheelMultiplier: _
        }),
        this.virtualScroll.on("scroll", this.onVirtualScroll)
    }
    destroy() {
        this.emitter.destroy(),
        this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, !1),
        this.options.wrapper.removeEventListener("pointerdown", this.onPointerDown, !1),
        this.virtualScroll.destroy(),
        this.dimensions.destroy(),
        this.cleanUpClassName()
    }
    on(e, t) {
        return this.emitter.on(e, t)
    }
    off(e, t) {
        return this.emitter.off(e, t)
    }
    setScroll(e) {
        this.isHorizontal ? this.rootElement.scrollLeft = e : this.rootElement.scrollTop = e
    }
    resize() {
        this.dimensions.resize()
    }
    emit() {
        this.emitter.emit("scroll", this)
    }
    reset() {
        this.isLocked = !1,
        this.isScrolling = !1,
        this.animatedScroll = this.targetScroll = this.actualScroll,
        this.lastVelocity = this.velocity = 0,
        this.animate.stop()
    }
    start() {
        this.isStopped && (this.isStopped = !1,
        this.reset())
    }
    stop() {
        this.isStopped || (this.isStopped = !0,
        this.animate.stop(),
        this.reset())
    }
    raf(e) {
        const t = e - (this.time || e);
        this.time = e,
        this.animate.advance(.001 * t)
    }
    scrollTo(e, {offset: t=0, immediate: i=!1, lock: s=!1, duration: r=this.options.duration, easing: a=this.options.easing, lerp: o=this.options.lerp, onStart: l, onComplete: u, force: h=!1, programmatic: d=!0, userData: f={}}={}) {
        if (!this.isStopped && !this.isLocked || h) {
            if (typeof e == "string" && ["top", "left", "start"].includes(e))
                e = 0;
            else if (typeof e == "string" && ["bottom", "right", "end"].includes(e))
                e = this.limit;
            else {
                let c;
                if (typeof e == "string" ? c = document.querySelector(e) : e instanceof HTMLElement && (e != null && e.nodeType) && (c = e),
                c) {
                    if (this.options.wrapper !== window) {
                        const p = this.rootElement.getBoundingClientRect();
                        t -= this.isHorizontal ? p.left : p.top
                    }
                    const g = c.getBoundingClientRect();
                    e = (this.isHorizontal ? g.left : g.top) + this.animatedScroll
                }
            }
            if (typeof e == "number" && (e += t,
            e = Math.round(e),
            this.options.infinite ? d && (this.targetScroll = this.animatedScroll = this.scroll) : e = Fu(0, e, this.limit),
            e !== this.targetScroll)) {
                if (this.userData = f,
                i)
                    return this.animatedScroll = this.targetScroll = e,
                    this.setScroll(this.scroll),
                    this.reset(),
                    this.preventNextNativeScrollEvent(),
                    this.emit(),
                    u == null || u(this),
                    void (this.userData = {});
                d || (this.targetScroll = e),
                this.animate.fromTo(this.animatedScroll, e, {
                    duration: r,
                    easing: a,
                    lerp: o,
                    onStart: () => {
                        s && (this.isLocked = !0),
                        this.isScrolling = "smooth",
                        l == null || l(this)
                    }
                    ,
                    onUpdate: (c, g) => {
                        this.isScrolling = "smooth",
                        this.lastVelocity = this.velocity,
                        this.velocity = c - this.animatedScroll,
                        this.direction = Math.sign(this.velocity),
                        this.animatedScroll = c,
                        this.setScroll(this.scroll),
                        d && (this.targetScroll = c),
                        g || this.emit(),
                        g && (this.reset(),
                        this.emit(),
                        u == null || u(this),
                        this.userData = {},
                        this.preventNextNativeScrollEvent())
                    }
                })
            }
        }
    }
    preventNextNativeScrollEvent() {
        this.__preventNextNativeScrollEvent = !0,
        requestAnimationFrame( () => {
            delete this.__preventNextNativeScrollEvent
        }
        )
    }
    get rootElement() {
        return this.options.wrapper === window ? document.documentElement : this.options.wrapper
    }
    get limit() {
        return this.options.__experimental__naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? "x" : "y"]
    }
    get isHorizontal() {
        return this.options.orientation === "horizontal"
    }
    get actualScroll() {
        return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop
    }
    get scroll() {
        return this.options.infinite ? function(t, i) {
            return (t % i + i) % i
        }(this.animatedScroll, this.limit) : this.animatedScroll
    }
    get progress() {
        return this.limit === 0 ? 1 : this.scroll / this.limit
    }
    get isScrolling() {
        return this.__isScrolling
    }
    set isScrolling(e) {
        this.__isScrolling !== e && (this.__isScrolling = e,
        this.updateClassName())
    }
    get isStopped() {
        return this.__isStopped
    }
    set isStopped(e) {
        this.__isStopped !== e && (this.__isStopped = e,
        this.updateClassName())
    }
    get isLocked() {
        return this.__isLocked
    }
    set isLocked(e) {
        this.__isLocked !== e && (this.__isLocked = e,
        this.updateClassName())
    }
    get isSmooth() {
        return this.isScrolling === "smooth"
    }
    get className() {
        let e = "lenis";
        return this.isStopped && (e += " lenis-stopped"),
        this.isLocked && (e += " lenis-locked"),
        this.isScrolling && (e += " lenis-scrolling"),
        this.isScrolling === "smooth" && (e += " lenis-smooth"),
        e
    }
    updateClassName() {
        this.cleanUpClassName(),
        this.rootElement.className = `${this.rootElement.className} ${this.className}`.trim()
    }
    cleanUpClassName() {
        this.rootElement.className = this.rootElement.className.replace(/lenis(-\w+)?/g, "").trim()
    }
}
M.registerPlugin(H);
class Ed {
    constructor() {
        this.currentScroll = 0,
        this.mainScroll = new Sd({
            smooth: !0,
            lerp: .1,
            touchMultiplier: 2
        }),
        this.scrollTriggerUpdate()
    }
    scrollTriggerUpdate() {
        this.mainScroll.on("scroll", H.update),
        M.ticker.add(e => {
            this.mainScroll.raf(e * 1e3)
        }
        ),
        M.ticker.lagSmoothing(0)
    }
    to(e, t={
        duration: .5,
        delay: 0
    }) {
        const i = document.querySelector(e);
        setTimeout( () => {
            this.mainScroll.scrollTo(i, {
                duration: t.duration,
                force: !0
            })
        }
        , t.delay * 1e3)
    }
    enableMainScroll() {
        this.mainScroll.start()
    }
    resetMainScroll() {
        this.mainScroll.scrollTo("top", {
            duration: .5,
            force: !0
        })
    }
    reset(e=0) {
        setTimeout( () => {
            this.mainScroll.scrollTo("top", {
                duration: .5,
                force: !0
            })
        }
        , e * 1e3)
    }
    disable() {
        this.mainScroll.stop()
    }
    enable() {
        this.mainScroll.start()
    }
    saveCurrentScroll() {
        this.currentScroll = this.mainScroll.scroll
    }
    scrollBack(e) {
        setTimeout( () => {
            this.mainScroll.scrollTo(this.currentScroll, {
                duration: 0,
                force: !0
            })
        }
        , e * 1e3)
    }
    refresh() {
        H.refresh()
    }
}
const Oe = new Ed;
class Ru {
    constructor(e, t={}) {
        this.transitionWrapper = document.querySelector(e),
        this.transitionCanvas = this.transitionWrapper.querySelector(".canvas"),
        this.transitionFilter = this.transitionWrapper.querySelector(".filter"),
        this.overlayConfig = {
            rows: t.rows || 1,
            columns: t.columns || 12,
            duration: t.duration || .4,
            each: t.each || .04,
            startEase: t.startEase || "power2.inOut",
            stopEase: t.stopEase || "power12.inOut",
            startFrom: t.startFrom || "start",
            stopFrom: t.stopFrom || "start",
            transformOrigin: t.transformOrigin || "50% 50%"
        },
        this.overlay = new ja(this.transitionCanvas,this.overlayConfig)
    }
    start(e={}) {
        const t = {
            delay: (e.delay || .5) * 1e3,
            filterOpacity: e.filterOpacity || .5,
            filterDuration: e.filterOpacity || 3
        };
        this.overlay.start(),
        M.to(this.transitionFilter, {
            opacity: t.filterOpacity,
            ease: "power1.inOut",
            duration: t.filterDuration
        }),
        setTimeout( () => {
            M.to(this.transitionFilter, {
                opacity: 0,
                ease: "power1.inOut",
                duration: t.filterDuration,
                delay: .4
            }),
            this.overlay.stop()
        }
        , t.delay)
    }
}
class Yr {
    constructor(e, t={}) {
        this.el = e,
        this.options = Object.assign({}, {
            target: this.el,
            maxDistance: 16,
            duration: 1.5,
            parallax: !1,
            parallaxEl: null,
            parallaxDuration: 1.5,
            ease: "power2.out"
        }, t),
        this.initEvents()
    }
    mouseMove(e) {
        this.rect = this.el.getBoundingClientRect(),
        this.x = e.clientX - this.rect.left - this.rect.width / 2,
        this.y = e.clientY - this.rect.top - this.rect.height / 2,
        this.distance = Math.min(Math.sqrt(this.x * this.x + this.y * this.y), this.options.maxDistance),
        this.angle = Math.atan2(this.y, this.x),
        M.to(this.el, {
            x: this.distance * Math.cos(this.angle),
            y: this.distance * Math.sin(this.angle),
            duration: this.options.duration,
            overwrite: !0,
            ease: this.options.ease
        }),
        this.options.parallax && M.to(this.options.parallaxEl, {
            x: Math.cos(this.angle) * 2,
            y: Math.sin(this.angle) * 2,
            duration: this.options.parallaxDuration,
            overwrite: "auto",
            ease: this.options.ease
        })
    }
    mouseLeave() {
        M.to(this.el, {
            x: 0,
            y: 0,
            duration: this.options.duration,
            overwrite: "auto",
            ease: this.options.ease
        }),
        this.options.parallax && M.to(this.options.parallaxEl, {
            x: 0,
            y: 0,
            duration: this.options.parallaxDuration,
            overwrite: "auto",
            ease: this.options.ease
        })
    }
    initEvents() {
        this.options.target.addEventListener("mousemove", e => this.mouseMove(e)),
        this.options.target.addEventListener("mouseleave", () => this.mouseLeave())
    }
}
/*!
 * strings: 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Cd = /(?:^\s+|\s+$)/g
  , Ou = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
function so(n) {
    var e = n.nodeType
      , t = "";
    if (e === 1 || e === 9 || e === 11) {
        if (typeof n.textContent == "string")
            return n.textContent;
        for (n = n.firstChild; n; n = n.nextSibling)
            t += so(n)
    } else if (e === 3 || e === 4)
        return n.nodeValue;
    return t
}
function Pa(n, e, t, i) {
    for (var s = n.firstChild, r = [], a; s; )
        s.nodeType === 3 ? (a = (s.nodeValue + "").replace(/^\n+/g, ""),
        i || (a = a.replace(/\s+/g, " ")),
        r.push.apply(r, Lu(a, e, t, i))) : (s.nodeName + "").toLowerCase() === "br" ? r[r.length - 1] += "<br>" : r.push(s.outerHTML),
        s = s.nextSibling;
    for (a = r.length; a--; )
        r[a] === "&" && r.splice(a, 1, "&amp;");
    return r
}
function Lu(n, e, t, i) {
    if (n += "",
    t && (n = n.trim ? n.trim() : n.replace(Cd, "")),
    e && e !== "")
        return n.replace(/>/g, "&gt;").replace(/</g, "&lt;").split(e);
    for (var s = [], r = n.length, a = 0, o, l; a < r; a++)
        l = n.charAt(a),
        (l.charCodeAt(0) >= 55296 && l.charCodeAt(0) <= 56319 || n.charCodeAt(a + 1) >= 65024 && n.charCodeAt(a + 1) <= 65039) && (o = ((n.substr(a, 12).split(Ou) || [])[1] || "").length || 2,
        l = n.substr(a, o),
        s.emoji = 1,
        a += o - 1),
        s.push(l === ">" ? "&gt;" : l === "<" ? "&lt;" : i && l === " " && (n.charAt(a - 1) === " " || n.charAt(a + 1) === " ") ? "&nbsp;" : l);
    return s
}
/*!
 * SplitText: 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Ps, Ma, ku, Qs, Iu, Cn, Pd = /(?:\r|\n|\t\t)/g, Md = /(?:\s\s+)/g, Fd = " ", zu = function(e) {
    Ps = document,
    Ma = window,
    Qs = Qs || e || Ma.gsap || console.warn("Please gsap.registerPlugin(SplitText)"),
    Qs && (Cn = Qs.utils.toArray,
    Iu = Qs.core.context || function() {}
    ,
    ku = 1)
}, Bu = function(e) {
    return Ma.getComputedStyle(e)
}, ro = function(e) {
    return e.position === "absolute" || e.absolute === !0
}, Ad = function(e, t) {
    for (var i = t.length, s; --i > -1; )
        if (s = t[i],
        e.substr(0, s.length) === s)
            return s.length
}, Rd = " style='position:relative;display:inline-block;'", qo = function(e, t) {
    e === void 0 && (e = "");
    var i = ~e.indexOf("++")
      , s = 1;
    return i && (e = e.split("++").join("")),
    function() {
        return "<" + t + Rd + (e ? " class='" + e + (i ? s++ : "") + "'>" : ">")
    }
}, Nu = function n(e, t, i) {
    var s = e.nodeType;
    if (s === 1 || s === 9 || s === 11)
        for (e = e.firstChild; e; e = e.nextSibling)
            n(e, t, i);
    else
        (s === 3 || s === 4) && (e.nodeValue = e.nodeValue.split(t).join(i))
}, qn = function(e, t) {
    for (var i = t.length; --i > -1; )
        e.push(t[i])
}, $o = function(e, t, i) {
    for (var s; e && e !== t; ) {
        if (s = e._next || e.nextSibling,
        s)
            return s.textContent.charAt(0) === i;
        e = e.parentNode || e._parent
    }
}, Od = function n(e) {
    var t = Cn(e.childNodes), i = t.length, s, r;
    for (s = 0; s < i; s++)
        r = t[s],
        r._isSplit ? n(r) : s && r.previousSibling && r.previousSibling.nodeType === 3 ? (r.previousSibling.nodeValue += r.nodeType === 3 ? r.nodeValue : r.firstChild.nodeValue,
        e.removeChild(r)) : r.nodeType !== 3 && (e.insertBefore(r.firstChild, r),
        e.removeChild(r))
}, ii = function(e, t) {
    return parseFloat(t[e]) || 0
}, Ld = function(e, t, i, s, r, a, o) {
    var l = Bu(e), u = ii("paddingLeft", l), h = -999, d = ii("borderBottomWidth", l) + ii("borderTopWidth", l), f = ii("borderLeftWidth", l) + ii("borderRightWidth", l), c = ii("paddingTop", l) + ii("paddingBottom", l), g = ii("paddingLeft", l) + ii("paddingRight", l), p = ii("fontSize", l) * (t.lineThreshold || .2), _ = l.textAlign, y = [], D = [], m = [], v = t.wordDelimiter || " ", x = t.tag ? t.tag : t.span ? "span" : "div", P = t.type || t.split || "chars,words,lines", T = r && ~P.indexOf("lines") ? [] : null, E = ~P.indexOf("words"), C = ~P.indexOf("chars"), w = ro(t), L = t.linesClass, F = ~(L || "").indexOf("++"), O = [], I = l.display === "flex", z = e.style.display, k, B, U, R, b, j, oe, ke, se, K, Ie, ne;
    for (F && (L = L.split("++").join("")),
    I && (e.style.display = "block"),
    B = e.getElementsByTagName("*"),
    U = B.length,
    b = [],
    k = 0; k < U; k++)
        b[k] = B[k];
    if (T || w)
        for (k = 0; k < U; k++)
            R = b[k],
            j = R.parentNode === e,
            (j || w || C && !E) && (ne = R.offsetTop,
            T && j && Math.abs(ne - h) > p && (R.nodeName !== "BR" || k === 0) && (oe = [],
            T.push(oe),
            h = ne),
            w && (R._x = R.offsetLeft,
            R._y = ne,
            R._w = R.offsetWidth,
            R._h = R.offsetHeight),
            T && ((R._isSplit && j || !C && j || E && j || !E && R.parentNode.parentNode === e && !R.parentNode._isSplit) && (oe.push(R),
            R._x -= u,
            $o(R, e, v) && (R._wordEnd = !0)),
            R.nodeName === "BR" && (R.nextSibling && R.nextSibling.nodeName === "BR" || k === 0) && T.push([])));
    for (k = 0; k < U; k++) {
        if (R = b[k],
        j = R.parentNode === e,
        R.nodeName === "BR") {
            T || w ? (R.parentNode && R.parentNode.removeChild(R),
            b.splice(k--, 1),
            U--) : E || e.appendChild(R);
            continue
        }
        if (w && (se = R.style,
        !E && !j && (R._x += R.parentNode._x,
        R._y += R.parentNode._y),
        se.left = R._x + "px",
        se.top = R._y + "px",
        se.position = "absolute",
        se.display = "block",
        se.width = R._w + 1 + "px",
        se.height = R._h + "px"),
        !E && C)
            if (R._isSplit)
                for (R._next = B = R.nextSibling,
                R.parentNode.appendChild(R); B && B.nodeType === 3 && B.textContent === " "; )
                    R._next = B.nextSibling,
                    R.parentNode.appendChild(B),
                    B = B.nextSibling;
            else
                R.parentNode._isSplit ? (R._parent = R.parentNode,
                !R.previousSibling && R.firstChild && (R.firstChild._isFirst = !0),
                R.nextSibling && R.nextSibling.textContent === " " && !R.nextSibling.nextSibling && O.push(R.nextSibling),
                R._next = R.nextSibling && R.nextSibling._isFirst ? null : R.nextSibling,
                R.parentNode.removeChild(R),
                b.splice(k--, 1),
                U--) : j || (ne = !R.nextSibling && $o(R.parentNode, e, v),
                R.parentNode._parent && R.parentNode._parent.appendChild(R),
                ne && R.parentNode.appendChild(Ps.createTextNode(" ")),
                x === "span" && (R.style.display = "inline"),
                y.push(R));
        else
            R.parentNode._isSplit && !R._isSplit && R.innerHTML !== "" ? D.push(R) : C && !R._isSplit && (x === "span" && (R.style.display = "inline"),
            y.push(R))
    }
    for (k = O.length; --k > -1; )
        O[k].parentNode.removeChild(O[k]);
    if (T) {
        for (w && (K = Ps.createElement(x),
        e.appendChild(K),
        Ie = K.offsetWidth + "px",
        ne = K.offsetParent === e ? 0 : e.offsetLeft,
        e.removeChild(K)),
        se = e.style.cssText,
        e.style.cssText = "display:none;"; e.firstChild; )
            e.removeChild(e.firstChild);
        for (ke = v === " " && (!w || !E && !C),
        k = 0; k < T.length; k++) {
            for (oe = T[k],
            K = Ps.createElement(x),
            K.style.cssText = "display:block;text-align:" + _ + ";position:" + (w ? "absolute;" : "relative;"),
            L && (K.className = L + (F ? k + 1 : "")),
            m.push(K),
            U = oe.length,
            B = 0; B < U; B++)
                oe[B].nodeName !== "BR" && (R = oe[B],
                K.appendChild(R),
                ke && R._wordEnd && K.appendChild(Ps.createTextNode(" ")),
                w && (B === 0 && (K.style.top = R._y + "px",
                K.style.left = u + ne + "px"),
                R.style.top = "0px",
                ne && (R.style.left = R._x - ne + "px")));
            U === 0 ? K.innerHTML = "&nbsp;" : !E && !C && (Od(K),
            Nu(K, " ", " ")),
            w && (K.style.width = Ie,
            K.style.height = R._h + "px"),
            e.appendChild(K)
        }
        e.style.cssText = se
    }
    w && (o > e.clientHeight && (e.style.height = o - c + "px",
    e.clientHeight < o && (e.style.height = o + d + "px")),
    a > e.clientWidth && (e.style.width = a - g + "px",
    e.clientWidth < a && (e.style.width = a + f + "px"))),
    I && (z ? e.style.display = z : e.style.removeProperty("display")),
    qn(i, y),
    E && qn(s, D),
    qn(r, m)
}, kd = function(e, t, i, s) {
    var r = t.tag ? t.tag : t.span ? "span" : "div", a = t.type || t.split || "chars,words,lines", o = ~a.indexOf("chars"), l = ro(t), u = t.wordDelimiter || " ", h = function(w) {
        return w === u || w === Fd && u === " "
    }, d = u !== " " ? "" : l ? "&#173; " : " ", f = "</" + r + ">", c = 1, g = t.specialChars ? typeof t.specialChars == "function" ? t.specialChars : Ad : null, p, _, y, D, m, v, x, P, T = Ps.createElement("div"), E = e.parentNode;
    for (E.insertBefore(T, e),
    T.textContent = e.nodeValue,
    E.removeChild(e),
    e = T,
    p = so(e),
    x = p.indexOf("<") !== -1,
    t.reduceWhiteSpace !== !1 && (p = p.replace(Md, " ").replace(Pd, "")),
    x && (p = p.split("<").join("{{LT}}")),
    m = p.length,
    _ = (p.charAt(0) === " " ? d : "") + i(),
    y = 0; y < m; y++)
        if (v = p.charAt(y),
        g && (P = g(p.substr(y), t.specialChars)))
            v = p.substr(y, P || 1),
            _ += o && v !== " " ? s() + v + "</" + r + ">" : v,
            y += P - 1;
        else if (h(v) && !h(p.charAt(y - 1)) && y) {
            for (_ += c ? f : "",
            c = 0; h(p.charAt(y + 1)); )
                _ += d,
                y++;
            y === m - 1 ? _ += d : p.charAt(y + 1) !== ")" && (_ += d + i(),
            c = 1)
        } else
            v === "{" && p.substr(y, 6) === "{{LT}}" ? (_ += o ? s() + "{{LT}}</" + r + ">" : "{{LT}}",
            y += 5) : v.charCodeAt(0) >= 55296 && v.charCodeAt(0) <= 56319 || p.charCodeAt(y + 1) >= 65024 && p.charCodeAt(y + 1) <= 65039 ? (D = ((p.substr(y, 12).split(Ou) || [])[1] || "").length || 2,
            _ += o && v !== " " ? s() + p.substr(y, D) + "</" + r + ">" : p.substr(y, D),
            y += D - 1) : _ += o && v !== " " ? s() + v + "</" + r + ">" : v;
    e.outerHTML = _ + (c ? f : ""),
    x && Nu(E, "{{LT}}", "<")
}, Id = function n(e, t, i, s) {
    var r = Cn(e.childNodes), a = r.length, o = ro(t), l, u;
    if (e.nodeType !== 3 || a > 1) {
        for (t.absolute = !1,
        l = 0; l < a; l++)
            u = r[l],
            u._next = u._isFirst = u._parent = u._wordEnd = null,
            (u.nodeType !== 3 || /\S+/.test(u.nodeValue)) && (o && u.nodeType !== 3 && Bu(u).display === "inline" && (u.style.display = "inline-block",
            u.style.position = "relative"),
            u._isSplit = !0,
            n(u, t, i, s));
        t.absolute = o,
        e._isSplit = !0;
        return
    }
    kd(e, t, i, s)
}, Ti = function() {
    function n(t, i) {
        ku || zu(),
        this.elements = Cn(t),
        this.chars = [],
        this.words = [],
        this.lines = [],
        this._originals = [],
        this.vars = i || {},
        Iu(this),
        this.split(i)
    }
    var e = n.prototype;
    return e.split = function(i) {
        this.isSplit && this.revert(),
        this.vars = i = i || this.vars,
        this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
        for (var s = this.elements.length, r = i.tag ? i.tag : i.span ? "span" : "div", a = qo(i.wordsClass, r), o = qo(i.charsClass, r), l, u, h; --s > -1; )
            h = this.elements[s],
            this._originals[s] = {
                html: h.innerHTML,
                style: h.getAttribute("style")
            },
            l = h.clientHeight,
            u = h.clientWidth,
            Id(h, i, a, o),
            Ld(h, i, this.chars, this.words, this.lines, u, l);
        return this.chars.reverse(),
        this.words.reverse(),
        this.lines.reverse(),
        this.isSplit = !0,
        this
    }
    ,
    e.revert = function() {
        var i = this._originals;
        if (!i)
            throw "revert() call wasn't scoped properly.";
        return this.elements.forEach(function(s, r) {
            s.innerHTML = i[r].html,
            s.setAttribute("style", i[r].style)
        }),
        this.chars = [],
        this.words = [],
        this.lines = [],
        this.isSplit = !1,
        this
    }
    ,
    n.create = function(i, s) {
        return new n(i,s)
    }
    ,
    n
}();
Ti.version = "3.12.5";
Ti.register = zu;
M.registerPlugin(Ti);
class zd {
    constructor() {
        new Ti(S.splitWords,{
            type: "words",
            wordsClass: "word",
            tag: "span"
        }),
        new Ti(S.splitLines,{
            type: "lines",
            linesClass: "line",
            tag: "span"
        })
    }
}
M.registerPlugin(H);
class Bd {
    constructor() {
        this.bindEvents()
    }
    show(e=0) {
        M.set(S.heroBg, {}),
        M.set(S.caseItem, {
            height: "auto",
            minHeight: "auto",
            display: "flex",
            delay: 1,
            onComplete: () => {
                H.refresh()
            }
        });
        const t = M.timeline({
            defaults: {
                ease: "power2.inOut"
            }
        });
        t.add( () => {
            document.body.classList.add("state-works")
        }
        , .8),
        t.fromTo(S.casesList, {
            willChange: "transform"
        }, {
            scaleY: 1
        })
    }
    hide(e=0) {
        M.to(S.main, {
            opacity: 1,
            direction: .8,
            delay: 1.2,
            onComplete: () => {}
        }),
        M.set(S.main, {}),
        M.set(S.heroBg, {}),
        M.set(S.caseItem, {
            height: "auto",
            minHeight: "auto",
            display: "flex",
            delay: 1,
            onComplete: () => {
                H.refresh()
            }
        });
        const t = M.timeline({
            defaults: {
                ease: "power2.inOut"
            }
        });
        t.add( () => {
            document.body.classList.remove("state-works")
        }
        , .8),
        t.fromTo(S.casesList, {
            willChange: "transform"
        }, {
            scaleY: 1
        })
    }
    setPadding() {
        const e = M.getProperty(S.navbar, "height");
        M.set(S.casesList, {
            paddingTop: e
        })
    }
    resetPadding() {
        M.set(S.casesList, {
            paddingTop: 0
        })
    }
    bindEvents() {
        this.resize()
    }
    resize() {
        const e = () => {}
        ;
        window.addEventListener("resize", e)
    }
}
M.registerPlugin(H);
class Nd {
    constructor() {
        this.mobileView = window.matchMedia("(max-width: 768px)"),
        this.galleryMod = "normal",
        this.galleryIsInit = !1,
        this.bindEvents()
    }
    setActiveElements(e) {
        this.activeCaseEl = e,
        this.el = {
            link: this.activeCaseEl.querySelector(S.caseLink),
            title: this.activeCaseEl.querySelector(S.caseTitle),
            subtitle: this.activeCaseEl.querySelector(S.caseSubtitle),
            description: this.activeCaseEl.querySelector(S.caseDescription),
            meta: this.activeCaseEl.querySelector(S.caseMeta),
            metaDate: this.activeCaseEl.querySelector(S.caseMetaDate),
            metaType: this.activeCaseEl.querySelector(S.caseMetaType),
            extra: this.activeCaseEl.querySelector(S.caseExtra),
            nav: this.activeCaseEl.querySelector(S.casesNav)
        },
        this.detailsElList = [this.el.title.querySelectorAll(".word"), this.el.subtitle.querySelectorAll(".word"), this.el.description.querySelectorAll(".line"), this.el.metaDate.querySelectorAll(".word"), this.el.metaType.querySelectorAll(".word")]
    }
    toggleCaseLink(e) {
        M.set(S.caseLink, {
            pointerEvents: e ? "auto" : "none"
        })
    }
    show(e, t=0) {
        this.setActiveElements(e),
        this.toggleCaseLink(!1),
        M.set(S.cases, {
            delay: 1
        }),
        M.to(S.main, {}),
        M.set(S.main, {}),
        M.set(S.heroBg, {
            opacity: 0,
            delay: 1
        }),
        M.set(S.caseItem, {
            height: 0,
            minHeight: 0,
            display: "none",
            delay: 1,
            onComplete: () => {
                M.set(this.activeCaseEl, {
                    height: "auto",
                    minHeight: "100svh",
                    display: "flex"
                }),
                M.set(this.el.extra, {
                    width: "100%"
                }),
                M.set([this.el.description, this.el.meta], {
                    display: "block"
                })
            }
        }),
        M.timeline({
            defaults: {
                ease: "power2.inOut"
            }
        }).add( () => {
            document.body.classList.add("state-work-details")
        }
        , .8)
    }
    hide(e=0) {
        this.toggleCaseLink(!0),
        M.set(S.heroBg, {
            opacity: 1
        }),
        M.timeline({
            defaults: {
                ease: "power2.inOut"
            },
            onComplete: () => {
                M.set(S.cases, {}),
                M.set(S.main, {
                    onComplete: () => {}
                }),
                M.to(S.main, {}),
                M.set(S.caseItem, {
                    height: "auto",
                    minHeight: "auto",
                    display: "flex"
                }),
                M.set([S.caseDescription, S.caseMeta], {
                    display: "none"
                }),
                M.set(S.caseExtra, {
                    width: "0"
                })
            }
        }).add( () => {
            document.body.classList.remove("state-work-details")
        }
        , .8)
    }
    toggleElDisplay(e, t) {
        const i = t ? "block" : "none";
        M.set(e, {
            display: i
        })
    }
    bindEvents() {
        this.resize()
    }
    resize() {
        const e = () => {}
        ;
        window.addEventListener("resize", e)
    }
    scaleGallery(e) {}
}
class Vd {
    constructor() {}
    update(e) {
        this.activeCase = e,
        this.nextCase = this.activeCase.nextElementSibling,
        this.prevCase = this.activeCase.previousElementSibling,
        this.nextCase === null && (this.nextCase = this.activeCase.parentElement.firstElementChild),
        this.prevCase === null && (this.prevCase = this.activeCase.parentElement.lastElementChild),
        this.el = {
            nextBtn: document.querySelector(S.casesNavBtnNext),
            prevBtn: document.querySelector(S.casesNavBtnPrev),
            nextTitle: document.querySelector(S.casesNavBtnNextTitle),
            prevTitle: document.querySelector(S.casesNavBtnPrevTitle),
            galleryNextCaseImg: this.activeCase.querySelector(S.galleryNextCaseImg),
            galleryNextCaseTitle: this.activeCase.querySelector(S.galleryNextCaseTitle),
            galleryNextCaseSubtitle: this.activeCase.querySelector(S.galleryNextCaseSubtitle),
            galleryNextCaseLink: this.activeCase.querySelector(S.galleryNextCaseLink)
        },
        this.data = {
            nextImage: this.nextCase.querySelector(S.galleryItem).getAttribute("src"),
            nextTitle: this.nextCase.querySelector(S.caseTitle).textContent,
            prevTitle: this.prevCase.querySelector(S.caseTitle).textContent,
            nextSubtitle: this.nextCase.querySelector(S.caseSubtitle).textContent,
            nextSlug: this.nextCase.getAttribute("data-slug"),
            prevSlug: this.prevCase.getAttribute("data-slug")
        };
        const t = M.timeline({
            defaults: {
                duration: .3,
                ease: "power2.inOut",
                willChange: "filter, transform"
            },
            onStart: () => {
                this.setBtnUrl(),
                this.setGalleryNextCase()
            }
        });
        t.to([this.el.prevTitle, this.el.nextTitle], {
            filter: "blur(4px)",
            yPercent: 0,
            scaleY: .8,
            onComplete: () => {
                this.setBtnTitle()
            }
        }),
        t.to([this.el.prevTitle, this.el.nextTitle], {
            filter: "blur(0px)",
            yPercent: 0,
            scaleY: 1
        })
    }
    setBtnUrl() {
        this.el.nextBtn.setAttribute("href", `#works/${this.data.nextSlug}`),
        this.el.prevBtn.setAttribute("href", `#works/${this.data.prevSlug}`)
    }
    setBtnTitle() {
        this.el.nextTitle.textContent = this.data.nextTitle,
        this.el.prevTitle.textContent = this.data.prevTitle
    }
    setGalleryNextCase() {
        this.el.galleryNextCaseTitle.textContent = `Next: ${this.data.nextTitle}`,
        this.el.galleryNextCaseSubtitle.textContent = this.data.nextSubtitle,
        this.el.galleryNextCaseImg.setAttribute("src", this.data.nextImage),
        this.el.galleryNextCaseLink.setAttribute("href", `#works/${this.data.nextSlug}`)
    }
    show(e=0) {
        M.set(S.casesNav, {
            bottom: "0",
            opacity: 1
        }),
        M.fromTo([S.casesNavBtnAction, S.casesNavBtnTitle], {
            opacity: 0,
            yPercent: -40
        }, {
            opacity: 1,
            yPercent: 0,
            delay: e,
            ease: "power2.inOut",
            duration: .5,
            stagger: {
                each: .1,
                from: "end"
            }
        })
    }
    hide(e=0) {
        M.to([S.casesNavBtnAction, S.casesNavBtnTitle], {
            opacity: 0,
            yPercent: 20,
            ease: "power2.inOut",
            delay: e,
            duration: .5,
            stagger: {
                each: .1,
                from: "start"
            },
            onComplete: () => {
                M.set(S.casesNav, {
                    bottom: "-50vh",
                    opacity: 0
                })
            }
        })
    }
    loadNextCaseImages() {
        this.nextCase.querySelectorAll('img[loading="lazy"]').forEach(e => {
            e.removeAttribute("loading")
        }
        )
    }
}
function jo(n) {
    return n !== null && typeof n == "object" && "constructor"in n && n.constructor === Object
}
function no(n, e) {
    n === void 0 && (n = {}),
    e === void 0 && (e = {}),
    Object.keys(e).forEach(t => {
        typeof n[t] > "u" ? n[t] = e[t] : jo(e[t]) && jo(n[t]) && Object.keys(e[t]).length > 0 && no(n[t], e[t])
    }
    )
}
const Vu = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: {
        blur() {},
        nodeName: ""
    },
    querySelector() {
        return null
    },
    querySelectorAll() {
        return []
    },
    getElementById() {
        return null
    },
    createEvent() {
        return {
            initEvent() {}
        }
    },
    createElement() {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName() {
                return []
            }
        }
    },
    createElementNS() {
        return {}
    },
    importNode() {
        return null
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    }
};
function Us() {
    const n = typeof document < "u" ? document : {};
    return no(n, Vu),
    n
}
const Ud = {
    document: Vu,
    navigator: {
        userAgent: ""
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    },
    history: {
        replaceState() {},
        pushState() {},
        go() {},
        back() {}
    },
    CustomEvent: function() {
        return this
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle() {
        return {
            getPropertyValue() {
                return ""
            }
        }
    },
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia() {
        return {}
    },
    requestAnimationFrame(n) {
        return typeof setTimeout > "u" ? (n(),
        null) : setTimeout(n, 0)
    },
    cancelAnimationFrame(n) {
        typeof setTimeout > "u" || clearTimeout(n)
    }
};
function yt() {
    const n = typeof window < "u" ? window : {};
    return no(n, Ud),
    n
}
function Gd(n) {
    return n === void 0 && (n = ""),
    n.trim().split(" ").filter(e => !!e.trim())
}
function Wd(n) {
    const e = n;
    Object.keys(e).forEach(t => {
        try {
            e[t] = null
        } catch {}
        try {
            delete e[t]
        } catch {}
    }
    )
}
function Cr(n, e) {
    return e === void 0 && (e = 0),
    setTimeout(n, e)
}
function Nt() {
    return Date.now()
}
function Hd(n) {
    const e = yt();
    let t;
    return e.getComputedStyle && (t = e.getComputedStyle(n, null)),
    !t && n.currentStyle && (t = n.currentStyle),
    t || (t = n.style),
    t
}
function Xd(n, e) {
    e === void 0 && (e = "x");
    const t = yt();
    let i, s, r;
    const a = Hd(n);
    return t.WebKitCSSMatrix ? (s = a.transform || a.webkitTransform,
    s.split(",").length > 6 && (s = s.split(", ").map(o => o.replace(",", ".")).join(", ")),
    r = new t.WebKitCSSMatrix(s === "none" ? "" : s)) : (r = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
    i = r.toString().split(",")),
    e === "x" && (t.WebKitCSSMatrix ? s = r.m41 : i.length === 16 ? s = parseFloat(i[12]) : s = parseFloat(i[4])),
    e === "y" && (t.WebKitCSSMatrix ? s = r.m42 : i.length === 16 ? s = parseFloat(i[13]) : s = parseFloat(i[5])),
    s || 0
}
function qr(n) {
    return typeof n == "object" && n !== null && n.constructor && Object.prototype.toString.call(n).slice(8, -1) === "Object"
}
function Yd(n) {
    return typeof window < "u" && typeof window.HTMLElement < "u" ? n instanceof HTMLElement : n && (n.nodeType === 1 || n.nodeType === 11)
}
function Et() {
    const n = Object(arguments.length <= 0 ? void 0 : arguments[0])
      , e = ["__proto__", "constructor", "prototype"];
    for (let t = 1; t < arguments.length; t += 1) {
        const i = t < 0 || arguments.length <= t ? void 0 : arguments[t];
        if (i != null && !Yd(i)) {
            const s = Object.keys(Object(i)).filter(r => e.indexOf(r) < 0);
            for (let r = 0, a = s.length; r < a; r += 1) {
                const o = s[r]
                  , l = Object.getOwnPropertyDescriptor(i, o);
                l !== void 0 && l.enumerable && (qr(n[o]) && qr(i[o]) ? i[o].__swiper__ ? n[o] = i[o] : Et(n[o], i[o]) : !qr(n[o]) && qr(i[o]) ? (n[o] = {},
                i[o].__swiper__ ? n[o] = i[o] : Et(n[o], i[o])) : n[o] = i[o])
            }
        }
    }
    return n
}
function $r(n, e, t) {
    n.style.setProperty(e, t)
}
function Uu(n) {
    let {swiper: e, targetPosition: t, side: i} = n;
    const s = yt()
      , r = -e.translate;
    let a = null, o;
    const l = e.params.speed;
    e.wrapperEl.style.scrollSnapType = "none",
    s.cancelAnimationFrame(e.cssModeFrameID);
    const u = t > r ? "next" : "prev"
      , h = (f, c) => u === "next" && f >= c || u === "prev" && f <= c
      , d = () => {
        o = new Date().getTime(),
        a === null && (a = o);
        const f = Math.max(Math.min((o - a) / l, 1), 0)
          , c = .5 - Math.cos(f * Math.PI) / 2;
        let g = r + c * (t - r);
        if (h(g, t) && (g = t),
        e.wrapperEl.scrollTo({
            [i]: g
        }),
        h(g, t)) {
            e.wrapperEl.style.overflow = "hidden",
            e.wrapperEl.style.scrollSnapType = "",
            setTimeout( () => {
                e.wrapperEl.style.overflow = "",
                e.wrapperEl.scrollTo({
                    [i]: g
                })
            }
            ),
            s.cancelAnimationFrame(e.cssModeFrameID);
            return
        }
        e.cssModeFrameID = s.requestAnimationFrame(d)
    }
    ;
    d()
}
function yi(n, e) {
    return e === void 0 && (e = ""),
    [...n.children].filter(t => t.matches(e))
}
function yn(n) {
    try {
        console.warn(n);
        return
    } catch {}
}
function Fa(n, e) {
    e === void 0 && (e = []);
    const t = document.createElement(n);
    return t.classList.add(...Array.isArray(e) ? e : Gd(e)),
    t
}
function qd(n, e) {
    const t = [];
    for (; n.previousElementSibling; ) {
        const i = n.previousElementSibling;
        e ? i.matches(e) && t.push(i) : t.push(i),
        n = i
    }
    return t
}
function $d(n, e) {
    const t = [];
    for (; n.nextElementSibling; ) {
        const i = n.nextElementSibling;
        e ? i.matches(e) && t.push(i) : t.push(i),
        n = i
    }
    return t
}
function zi(n, e) {
    return yt().getComputedStyle(n, null).getPropertyValue(e)
}
function Qo(n) {
    let e = n, t;
    if (e) {
        for (t = 0; (e = e.previousSibling) !== null; )
            e.nodeType === 1 && (t += 1);
        return t
    }
}
function jd(n, e) {
    const t = [];
    let i = n.parentElement;
    for (; i; )
        t.push(i),
        i = i.parentElement;
    return t
}
function $n(n, e) {
    function t(i) {
        i.target === n && (e.call(n, i),
        n.removeEventListener("transitionend", t))
    }
    e && n.addEventListener("transitionend", t)
}
function Ko(n, e, t) {
    const i = yt();
    return n[e === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(i.getComputedStyle(n, null).getPropertyValue(e === "width" ? "margin-right" : "margin-top")) + parseFloat(i.getComputedStyle(n, null).getPropertyValue(e === "width" ? "margin-left" : "margin-bottom"))
}
let jn;
function Qd() {
    const n = yt()
      , e = Us();
    return {
        smoothScroll: e.documentElement && e.documentElement.style && "scrollBehavior"in e.documentElement.style,
        touch: !!("ontouchstart"in n || n.DocumentTouch && e instanceof n.DocumentTouch)
    }
}
function Gu() {
    return jn || (jn = Qd()),
    jn
}
let Qn;
function Kd(n) {
    let {userAgent: e} = n === void 0 ? {} : n;
    const t = Gu()
      , i = yt()
      , s = i.navigator.platform
      , r = e || i.navigator.userAgent
      , a = {
        ios: !1,
        android: !1
    }
      , o = i.screen.width
      , l = i.screen.height
      , u = r.match(/(Android);?[\s\/]+([\d.]+)?/);
    let h = r.match(/(iPad).*OS\s([\d_]+)/);
    const d = r.match(/(iPod)(.*OS\s([\d_]+))?/)
      , f = !h && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
      , c = s === "Win32";
    let g = s === "MacIntel";
    const p = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    return !h && g && t.touch && p.indexOf(`${o}x${l}`) >= 0 && (h = r.match(/(Version)\/([\d.]+)/),
    h || (h = [0, 1, "13_0_0"]),
    g = !1),
    u && !c && (a.os = "android",
    a.android = !0),
    (h || f || d) && (a.os = "ios",
    a.ios = !0),
    a
}
function Wu(n) {
    return n === void 0 && (n = {}),
    Qn || (Qn = Kd(n)),
    Qn
}
let Kn;
function Zd() {
    const n = yt()
      , e = Wu();
    let t = !1;
    function i() {
        const o = n.navigator.userAgent.toLowerCase();
        return o.indexOf("safari") >= 0 && o.indexOf("chrome") < 0 && o.indexOf("android") < 0
    }
    if (i()) {
        const o = String(n.navigator.userAgent);
        if (o.includes("Version/")) {
            const [l,u] = o.split("Version/")[1].split(" ")[0].split(".").map(h => Number(h));
            t = l < 16 || l === 16 && u < 2
        }
    }
    const s = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(n.navigator.userAgent)
      , r = i()
      , a = r || s && e.ios;
    return {
        isSafari: t || r,
        needPerspectiveFix: t,
        need3dFix: a,
        isWebView: s
    }
}
function Jd() {
    return Kn || (Kn = Zd()),
    Kn
}
function ef(n) {
    let {swiper: e, on: t, emit: i} = n;
    const s = yt();
    let r = null
      , a = null;
    const o = () => {
        !e || e.destroyed || !e.initialized || (i("beforeResize"),
        i("resize"))
    }
      , l = () => {
        !e || e.destroyed || !e.initialized || (r = new ResizeObserver(d => {
            a = s.requestAnimationFrame( () => {
                const {width: f, height: c} = e;
                let g = f
                  , p = c;
                d.forEach(_ => {
                    let {contentBoxSize: y, contentRect: D, target: m} = _;
                    m && m !== e.el || (g = D ? D.width : (y[0] || y).inlineSize,
                    p = D ? D.height : (y[0] || y).blockSize)
                }
                ),
                (g !== f || p !== c) && o()
            }
            )
        }
        ),
        r.observe(e.el))
    }
      , u = () => {
        a && s.cancelAnimationFrame(a),
        r && r.unobserve && e.el && (r.unobserve(e.el),
        r = null)
    }
      , h = () => {
        !e || e.destroyed || !e.initialized || i("orientationchange")
    }
    ;
    t("init", () => {
        if (e.params.resizeObserver && typeof s.ResizeObserver < "u") {
            l();
            return
        }
        s.addEventListener("resize", o),
        s.addEventListener("orientationchange", h)
    }
    ),
    t("destroy", () => {
        u(),
        s.removeEventListener("resize", o),
        s.removeEventListener("orientationchange", h)
    }
    )
}
function tf(n) {
    let {swiper: e, extendParams: t, on: i, emit: s} = n;
    const r = []
      , a = yt()
      , o = function(h, d) {
        d === void 0 && (d = {});
        const f = a.MutationObserver || a.WebkitMutationObserver
          , c = new f(g => {
            if (e.__preventObserver__)
                return;
            if (g.length === 1) {
                s("observerUpdate", g[0]);
                return
            }
            const p = function() {
                s("observerUpdate", g[0])
            };
            a.requestAnimationFrame ? a.requestAnimationFrame(p) : a.setTimeout(p, 0)
        }
        );
        c.observe(h, {
            attributes: typeof d.attributes > "u" ? !0 : d.attributes,
            childList: e.isElement || (typeof d.childList > "u" ? !0 : d).childList,
            characterData: typeof d.characterData > "u" ? !0 : d.characterData
        }),
        r.push(c)
    }
      , l = () => {
        if (e.params.observer) {
            if (e.params.observeParents) {
                const h = jd(e.hostEl);
                for (let d = 0; d < h.length; d += 1)
                    o(h[d])
            }
            o(e.hostEl, {
                childList: e.params.observeSlideChildren
            }),
            o(e.wrapperEl, {
                attributes: !1
            })
        }
    }
      , u = () => {
        r.forEach(h => {
            h.disconnect()
        }
        ),
        r.splice(0, r.length)
    }
    ;
    t({
        observer: !1,
        observeParents: !1,
        observeSlideChildren: !1
    }),
    i("init", l),
    i("destroy", u)
}
var sf = {
    on(n, e, t) {
        const i = this;
        if (!i.eventsListeners || i.destroyed || typeof e != "function")
            return i;
        const s = t ? "unshift" : "push";
        return n.split(" ").forEach(r => {
            i.eventsListeners[r] || (i.eventsListeners[r] = []),
            i.eventsListeners[r][s](e)
        }
        ),
        i
    },
    once(n, e, t) {
        const i = this;
        if (!i.eventsListeners || i.destroyed || typeof e != "function")
            return i;
        function s() {
            i.off(n, s),
            s.__emitterProxy && delete s.__emitterProxy;
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
                a[o] = arguments[o];
            e.apply(i, a)
        }
        return s.__emitterProxy = e,
        i.on(n, s, t)
    },
    onAny(n, e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed || typeof n != "function")
            return t;
        const i = e ? "unshift" : "push";
        return t.eventsAnyListeners.indexOf(n) < 0 && t.eventsAnyListeners[i](n),
        t
    },
    offAny(n) {
        const e = this;
        if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners)
            return e;
        const t = e.eventsAnyListeners.indexOf(n);
        return t >= 0 && e.eventsAnyListeners.splice(t, 1),
        e
    },
    off(n, e) {
        const t = this;
        return !t.eventsListeners || t.destroyed || !t.eventsListeners || n.split(" ").forEach(i => {
            typeof e > "u" ? t.eventsListeners[i] = [] : t.eventsListeners[i] && t.eventsListeners[i].forEach( (s, r) => {
                (s === e || s.__emitterProxy && s.__emitterProxy === e) && t.eventsListeners[i].splice(r, 1)
            }
            )
        }
        ),
        t
    },
    emit() {
        const n = this;
        if (!n.eventsListeners || n.destroyed || !n.eventsListeners)
            return n;
        let e, t, i;
        for (var s = arguments.length, r = new Array(s), a = 0; a < s; a++)
            r[a] = arguments[a];
        return typeof r[0] == "string" || Array.isArray(r[0]) ? (e = r[0],
        t = r.slice(1, r.length),
        i = n) : (e = r[0].events,
        t = r[0].data,
        i = r[0].context || n),
        t.unshift(i),
        (Array.isArray(e) ? e : e.split(" ")).forEach(l => {
            n.eventsAnyListeners && n.eventsAnyListeners.length && n.eventsAnyListeners.forEach(u => {
                u.apply(i, [l, ...t])
            }
            ),
            n.eventsListeners && n.eventsListeners[l] && n.eventsListeners[l].forEach(u => {
                u.apply(i, t)
            }
            )
        }
        ),
        n
    }
};
function rf() {
    const n = this;
    let e, t;
    const i = n.el;
    typeof n.params.width < "u" && n.params.width !== null ? e = n.params.width : e = i.clientWidth,
    typeof n.params.height < "u" && n.params.height !== null ? t = n.params.height : t = i.clientHeight,
    !(e === 0 && n.isHorizontal() || t === 0 && n.isVertical()) && (e = e - parseInt(zi(i, "padding-left") || 0, 10) - parseInt(zi(i, "padding-right") || 0, 10),
    t = t - parseInt(zi(i, "padding-top") || 0, 10) - parseInt(zi(i, "padding-bottom") || 0, 10),
    Number.isNaN(e) && (e = 0),
    Number.isNaN(t) && (t = 0),
    Object.assign(n, {
        width: e,
        height: t,
        size: n.isHorizontal() ? e : t
    }))
}
function nf() {
    const n = this;
    function e(w, L) {
        return parseFloat(w.getPropertyValue(n.getDirectionLabel(L)) || 0)
    }
    const t = n.params
      , {wrapperEl: i, slidesEl: s, size: r, rtlTranslate: a, wrongRTL: o} = n
      , l = n.virtual && t.virtual.enabled
      , u = l ? n.virtual.slides.length : n.slides.length
      , h = yi(s, `.${n.params.slideClass}, swiper-slide`)
      , d = l ? n.virtual.slides.length : h.length;
    let f = [];
    const c = []
      , g = [];
    let p = t.slidesOffsetBefore;
    typeof p == "function" && (p = t.slidesOffsetBefore.call(n));
    let _ = t.slidesOffsetAfter;
    typeof _ == "function" && (_ = t.slidesOffsetAfter.call(n));
    const y = n.snapGrid.length
      , D = n.slidesGrid.length;
    let m = t.spaceBetween
      , v = -p
      , x = 0
      , P = 0;
    if (typeof r > "u")
        return;
    typeof m == "string" && m.indexOf("%") >= 0 ? m = parseFloat(m.replace("%", "")) / 100 * r : typeof m == "string" && (m = parseFloat(m)),
    n.virtualSize = -m,
    h.forEach(w => {
        a ? w.style.marginLeft = "" : w.style.marginRight = "",
        w.style.marginBottom = "",
        w.style.marginTop = ""
    }
    ),
    t.centeredSlides && t.cssMode && ($r(i, "--swiper-centered-offset-before", ""),
    $r(i, "--swiper-centered-offset-after", ""));
    const T = t.grid && t.grid.rows > 1 && n.grid;
    T ? n.grid.initSlides(h) : n.grid && n.grid.unsetSlides();
    let E;
    const C = t.slidesPerView === "auto" && t.breakpoints && Object.keys(t.breakpoints).filter(w => typeof t.breakpoints[w].slidesPerView < "u").length > 0;
    for (let w = 0; w < d; w += 1) {
        E = 0;
        let L;
        if (h[w] && (L = h[w]),
        T && n.grid.updateSlide(w, L, h),
        !(h[w] && zi(L, "display") === "none")) {
            if (t.slidesPerView === "auto") {
                C && (h[w].style[n.getDirectionLabel("width")] = "");
                const F = getComputedStyle(L)
                  , O = L.style.transform
                  , I = L.style.webkitTransform;
                if (O && (L.style.transform = "none"),
                I && (L.style.webkitTransform = "none"),
                t.roundLengths)
                    E = n.isHorizontal() ? Ko(L, "width") : Ko(L, "height");
                else {
                    const z = e(F, "width")
                      , k = e(F, "padding-left")
                      , B = e(F, "padding-right")
                      , U = e(F, "margin-left")
                      , R = e(F, "margin-right")
                      , b = F.getPropertyValue("box-sizing");
                    if (b && b === "border-box")
                        E = z + U + R;
                    else {
                        const {clientWidth: j, offsetWidth: oe} = L;
                        E = z + k + B + U + R + (oe - j)
                    }
                }
                O && (L.style.transform = O),
                I && (L.style.webkitTransform = I),
                t.roundLengths && (E = Math.floor(E))
            } else
                E = (r - (t.slidesPerView - 1) * m) / t.slidesPerView,
                t.roundLengths && (E = Math.floor(E)),
                h[w] && (h[w].style[n.getDirectionLabel("width")] = `${E}px`);
            h[w] && (h[w].swiperSlideSize = E),
            g.push(E),
            t.centeredSlides ? (v = v + E / 2 + x / 2 + m,
            x === 0 && w !== 0 && (v = v - r / 2 - m),
            w === 0 && (v = v - r / 2 - m),
            Math.abs(v) < 1 / 1e3 && (v = 0),
            t.roundLengths && (v = Math.floor(v)),
            P % t.slidesPerGroup === 0 && f.push(v),
            c.push(v)) : (t.roundLengths && (v = Math.floor(v)),
            (P - Math.min(n.params.slidesPerGroupSkip, P)) % n.params.slidesPerGroup === 0 && f.push(v),
            c.push(v),
            v = v + E + m),
            n.virtualSize += E + m,
            x = E,
            P += 1
        }
    }
    if (n.virtualSize = Math.max(n.virtualSize, r) + _,
    a && o && (t.effect === "slide" || t.effect === "coverflow") && (i.style.width = `${n.virtualSize + m}px`),
    t.setWrapperSize && (i.style[n.getDirectionLabel("width")] = `${n.virtualSize + m}px`),
    T && n.grid.updateWrapperSize(E, f),
    !t.centeredSlides) {
        const w = [];
        for (let L = 0; L < f.length; L += 1) {
            let F = f[L];
            t.roundLengths && (F = Math.floor(F)),
            f[L] <= n.virtualSize - r && w.push(F)
        }
        f = w,
        Math.floor(n.virtualSize - r) - Math.floor(f[f.length - 1]) > 1 && f.push(n.virtualSize - r)
    }
    if (l && t.loop) {
        const w = g[0] + m;
        if (t.slidesPerGroup > 1) {
            const L = Math.ceil((n.virtual.slidesBefore + n.virtual.slidesAfter) / t.slidesPerGroup)
              , F = w * t.slidesPerGroup;
            for (let O = 0; O < L; O += 1)
                f.push(f[f.length - 1] + F)
        }
        for (let L = 0; L < n.virtual.slidesBefore + n.virtual.slidesAfter; L += 1)
            t.slidesPerGroup === 1 && f.push(f[f.length - 1] + w),
            c.push(c[c.length - 1] + w),
            n.virtualSize += w
    }
    if (f.length === 0 && (f = [0]),
    m !== 0) {
        const w = n.isHorizontal() && a ? "marginLeft" : n.getDirectionLabel("marginRight");
        h.filter( (L, F) => !t.cssMode || t.loop ? !0 : F !== h.length - 1).forEach(L => {
            L.style[w] = `${m}px`
        }
        )
    }
    if (t.centeredSlides && t.centeredSlidesBounds) {
        let w = 0;
        g.forEach(F => {
            w += F + (m || 0)
        }
        ),
        w -= m;
        const L = w - r;
        f = f.map(F => F <= 0 ? -p : F > L ? L + _ : F)
    }
    if (t.centerInsufficientSlides) {
        let w = 0;
        g.forEach(F => {
            w += F + (m || 0)
        }
        ),
        w -= m;
        const L = (t.slidesOffsetBefore || 0) + (t.slidesOffsetAfter || 0);
        if (w + L < r) {
            const F = (r - w - L) / 2;
            f.forEach( (O, I) => {
                f[I] = O - F
            }
            ),
            c.forEach( (O, I) => {
                c[I] = O + F
            }
            )
        }
    }
    if (Object.assign(n, {
        slides: h,
        snapGrid: f,
        slidesGrid: c,
        slidesSizesGrid: g
    }),
    t.centeredSlides && t.cssMode && !t.centeredSlidesBounds) {
        $r(i, "--swiper-centered-offset-before", `${-f[0]}px`),
        $r(i, "--swiper-centered-offset-after", `${n.size / 2 - g[g.length - 1] / 2}px`);
        const w = -n.snapGrid[0]
          , L = -n.slidesGrid[0];
        n.snapGrid = n.snapGrid.map(F => F + w),
        n.slidesGrid = n.slidesGrid.map(F => F + L)
    }
    if (d !== u && n.emit("slidesLengthChange"),
    f.length !== y && (n.params.watchOverflow && n.checkOverflow(),
    n.emit("snapGridLengthChange")),
    c.length !== D && n.emit("slidesGridLengthChange"),
    t.watchSlidesProgress && n.updateSlidesOffset(),
    n.emit("slidesUpdated"),
    !l && !t.cssMode && (t.effect === "slide" || t.effect === "fade")) {
        const w = `${t.containerModifierClass}backface-hidden`
          , L = n.el.classList.contains(w);
        d <= t.maxBackfaceHiddenSlides ? L || n.el.classList.add(w) : L && n.el.classList.remove(w)
    }
}
function af(n) {
    const e = this
      , t = []
      , i = e.virtual && e.params.virtual.enabled;
    let s = 0, r;
    typeof n == "number" ? e.setTransition(n) : n === !0 && e.setTransition(e.params.speed);
    const a = o => i ? e.slides[e.getSlideIndexByData(o)] : e.slides[o];
    if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
        if (e.params.centeredSlides)
            (e.visibleSlides || []).forEach(o => {
                t.push(o)
            }
            );
        else
            for (r = 0; r < Math.ceil(e.params.slidesPerView); r += 1) {
                const o = e.activeIndex + r;
                if (o > e.slides.length && !i)
                    break;
                t.push(a(o))
            }
    else
        t.push(a(e.activeIndex));
    for (r = 0; r < t.length; r += 1)
        if (typeof t[r] < "u") {
            const o = t[r].offsetHeight;
            s = o > s ? o : s
        }
    (s || s === 0) && (e.wrapperEl.style.height = `${s}px`)
}
function of() {
    const n = this
      , e = n.slides
      , t = n.isElement ? n.isHorizontal() ? n.wrapperEl.offsetLeft : n.wrapperEl.offsetTop : 0;
    for (let i = 0; i < e.length; i += 1)
        e[i].swiperSlideOffset = (n.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop) - t - n.cssOverflowAdjustment()
}
const Zo = (n, e, t) => {
    e && !n.classList.contains(t) ? n.classList.add(t) : !e && n.classList.contains(t) && n.classList.remove(t)
}
;
function lf(n) {
    n === void 0 && (n = this && this.translate || 0);
    const e = this
      , t = e.params
      , {slides: i, rtlTranslate: s, snapGrid: r} = e;
    if (i.length === 0)
        return;
    typeof i[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
    let a = -n;
    s && (a = n),
    e.visibleSlidesIndexes = [],
    e.visibleSlides = [];
    let o = t.spaceBetween;
    typeof o == "string" && o.indexOf("%") >= 0 ? o = parseFloat(o.replace("%", "")) / 100 * e.size : typeof o == "string" && (o = parseFloat(o));
    for (let l = 0; l < i.length; l += 1) {
        const u = i[l];
        let h = u.swiperSlideOffset;
        t.cssMode && t.centeredSlides && (h -= i[0].swiperSlideOffset);
        const d = (a + (t.centeredSlides ? e.minTranslate() : 0) - h) / (u.swiperSlideSize + o)
          , f = (a - r[0] + (t.centeredSlides ? e.minTranslate() : 0) - h) / (u.swiperSlideSize + o)
          , c = -(a - h)
          , g = c + e.slidesSizesGrid[l]
          , p = c >= 0 && c <= e.size - e.slidesSizesGrid[l]
          , _ = c >= 0 && c < e.size - 1 || g > 1 && g <= e.size || c <= 0 && g >= e.size;
        _ && (e.visibleSlides.push(u),
        e.visibleSlidesIndexes.push(l)),
        Zo(u, _, t.slideVisibleClass),
        Zo(u, p, t.slideFullyVisibleClass),
        u.progress = s ? -d : d,
        u.originalProgress = s ? -f : f
    }
}
function uf(n) {
    const e = this;
    if (typeof n > "u") {
        const h = e.rtlTranslate ? -1 : 1;
        n = e && e.translate && e.translate * h || 0
    }
    const t = e.params
      , i = e.maxTranslate() - e.minTranslate();
    let {progress: s, isBeginning: r, isEnd: a, progressLoop: o} = e;
    const l = r
      , u = a;
    if (i === 0)
        s = 0,
        r = !0,
        a = !0;
    else {
        s = (n - e.minTranslate()) / i;
        const h = Math.abs(n - e.minTranslate()) < 1
          , d = Math.abs(n - e.maxTranslate()) < 1;
        r = h || s <= 0,
        a = d || s >= 1,
        h && (s = 0),
        d && (s = 1)
    }
    if (t.loop) {
        const h = e.getSlideIndexByData(0)
          , d = e.getSlideIndexByData(e.slides.length - 1)
          , f = e.slidesGrid[h]
          , c = e.slidesGrid[d]
          , g = e.slidesGrid[e.slidesGrid.length - 1]
          , p = Math.abs(n);
        p >= f ? o = (p - f) / g : o = (p + g - c) / g,
        o > 1 && (o -= 1)
    }
    Object.assign(e, {
        progress: s,
        progressLoop: o,
        isBeginning: r,
        isEnd: a
    }),
    (t.watchSlidesProgress || t.centeredSlides && t.autoHeight) && e.updateSlidesProgress(n),
    r && !l && e.emit("reachBeginning toEdge"),
    a && !u && e.emit("reachEnd toEdge"),
    (l && !r || u && !a) && e.emit("fromEdge"),
    e.emit("progress", s)
}
const Zn = (n, e, t) => {
    e && !n.classList.contains(t) ? n.classList.add(t) : !e && n.classList.contains(t) && n.classList.remove(t)
}
;
function hf() {
    const n = this
      , {slides: e, params: t, slidesEl: i, activeIndex: s} = n
      , r = n.virtual && t.virtual.enabled
      , a = n.grid && t.grid && t.grid.rows > 1
      , o = d => yi(i, `.${t.slideClass}${d}, swiper-slide${d}`)[0];
    let l, u, h;
    if (r)
        if (t.loop) {
            let d = s - n.virtual.slidesBefore;
            d < 0 && (d = n.virtual.slides.length + d),
            d >= n.virtual.slides.length && (d -= n.virtual.slides.length),
            l = o(`[data-swiper-slide-index="${d}"]`)
        } else
            l = o(`[data-swiper-slide-index="${s}"]`);
    else
        a ? (l = e.filter(d => d.column === s)[0],
        h = e.filter(d => d.column === s + 1)[0],
        u = e.filter(d => d.column === s - 1)[0]) : l = e[s];
    l && (a || (h = $d(l, `.${t.slideClass}, swiper-slide`)[0],
    t.loop && !h && (h = e[0]),
    u = qd(l, `.${t.slideClass}, swiper-slide`)[0],
    t.loop && !u === 0 && (u = e[e.length - 1]))),
    e.forEach(d => {
        Zn(d, d === l, t.slideActiveClass),
        Zn(d, d === h, t.slideNextClass),
        Zn(d, d === u, t.slidePrevClass)
    }
    ),
    n.emitSlidesClasses()
}
const an = (n, e) => {
    if (!n || n.destroyed || !n.params)
        return;
    const t = () => n.isElement ? "swiper-slide" : `.${n.params.slideClass}`
      , i = e.closest(t());
    if (i) {
        let s = i.querySelector(`.${n.params.lazyPreloaderClass}`);
        !s && n.isElement && (i.shadowRoot ? s = i.shadowRoot.querySelector(`.${n.params.lazyPreloaderClass}`) : requestAnimationFrame( () => {
            i.shadowRoot && (s = i.shadowRoot.querySelector(`.${n.params.lazyPreloaderClass}`),
            s && s.remove())
        }
        )),
        s && s.remove()
    }
}
  , Jn = (n, e) => {
    if (!n.slides[e])
        return;
    const t = n.slides[e].querySelector('[loading="lazy"]');
    t && t.removeAttribute("loading")
}
  , Aa = n => {
    if (!n || n.destroyed || !n.params)
        return;
    let e = n.params.lazyPreloadPrevNext;
    const t = n.slides.length;
    if (!t || !e || e < 0)
        return;
    e = Math.min(e, t);
    const i = n.params.slidesPerView === "auto" ? n.slidesPerViewDynamic() : Math.ceil(n.params.slidesPerView)
      , s = n.activeIndex;
    if (n.params.grid && n.params.grid.rows > 1) {
        const a = s
          , o = [a - e];
        o.push(...Array.from({
            length: e
        }).map( (l, u) => a + i + u)),
        n.slides.forEach( (l, u) => {
            o.includes(l.column) && Jn(n, u)
        }
        );
        return
    }
    const r = s + i - 1;
    if (n.params.rewind || n.params.loop)
        for (let a = s - e; a <= r + e; a += 1) {
            const o = (a % t + t) % t;
            (o < s || o > r) && Jn(n, o)
        }
    else
        for (let a = Math.max(s - e, 0); a <= Math.min(r + e, t - 1); a += 1)
            a !== s && (a > r || a < s) && Jn(n, a)
}
;
function cf(n) {
    const {slidesGrid: e, params: t} = n
      , i = n.rtlTranslate ? n.translate : -n.translate;
    let s;
    for (let r = 0; r < e.length; r += 1)
        typeof e[r + 1] < "u" ? i >= e[r] && i < e[r + 1] - (e[r + 1] - e[r]) / 2 ? s = r : i >= e[r] && i < e[r + 1] && (s = r + 1) : i >= e[r] && (s = r);
    return t.normalizeSlideIndex && (s < 0 || typeof s > "u") && (s = 0),
    s
}
function df(n) {
    const e = this
      , t = e.rtlTranslate ? e.translate : -e.translate
      , {snapGrid: i, params: s, activeIndex: r, realIndex: a, snapIndex: o} = e;
    let l = n, u;
    const h = c => {
        let g = c - e.virtual.slidesBefore;
        return g < 0 && (g = e.virtual.slides.length + g),
        g >= e.virtual.slides.length && (g -= e.virtual.slides.length),
        g
    }
    ;
    if (typeof l > "u" && (l = cf(e)),
    i.indexOf(t) >= 0)
        u = i.indexOf(t);
    else {
        const c = Math.min(s.slidesPerGroupSkip, l);
        u = c + Math.floor((l - c) / s.slidesPerGroup)
    }
    if (u >= i.length && (u = i.length - 1),
    l === r && !e.params.loop) {
        u !== o && (e.snapIndex = u,
        e.emit("snapIndexChange"));
        return
    }
    if (l === r && e.params.loop && e.virtual && e.params.virtual.enabled) {
        e.realIndex = h(l);
        return
    }
    const d = e.grid && s.grid && s.grid.rows > 1;
    let f;
    if (e.virtual && s.virtual.enabled && s.loop)
        f = h(l);
    else if (d) {
        const c = e.slides.filter(p => p.column === l)[0];
        let g = parseInt(c.getAttribute("data-swiper-slide-index"), 10);
        Number.isNaN(g) && (g = Math.max(e.slides.indexOf(c), 0)),
        f = Math.floor(g / s.grid.rows)
    } else if (e.slides[l]) {
        const c = e.slides[l].getAttribute("data-swiper-slide-index");
        c ? f = parseInt(c, 10) : f = l
    } else
        f = l;
    Object.assign(e, {
        previousSnapIndex: o,
        snapIndex: u,
        previousRealIndex: a,
        realIndex: f,
        previousIndex: r,
        activeIndex: l
    }),
    e.initialized && Aa(e),
    e.emit("activeIndexChange"),
    e.emit("snapIndexChange"),
    (e.initialized || e.params.runCallbacksOnInit) && (a !== f && e.emit("realIndexChange"),
    e.emit("slideChange"))
}
function ff(n, e) {
    const t = this
      , i = t.params;
    let s = n.closest(`.${i.slideClass}, swiper-slide`);
    !s && t.isElement && e && e.length > 1 && e.includes(n) && [...e.slice(e.indexOf(n) + 1, e.length)].forEach(o => {
        !s && o.matches && o.matches(`.${i.slideClass}, swiper-slide`) && (s = o)
    }
    );
    let r = !1, a;
    if (s) {
        for (let o = 0; o < t.slides.length; o += 1)
            if (t.slides[o] === s) {
                r = !0,
                a = o;
                break
            }
    }
    if (s && r)
        t.clickedSlide = s,
        t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(s.getAttribute("data-swiper-slide-index"), 10) : t.clickedIndex = a;
    else {
        t.clickedSlide = void 0,
        t.clickedIndex = void 0;
        return
    }
    i.slideToClickedSlide && t.clickedIndex !== void 0 && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
}
var pf = {
    updateSize: rf,
    updateSlides: nf,
    updateAutoHeight: af,
    updateSlidesOffset: of,
    updateSlidesProgress: lf,
    updateProgress: uf,
    updateSlidesClasses: hf,
    updateActiveIndex: df,
    updateClickedSlide: ff
};
function gf(n) {
    n === void 0 && (n = this.isHorizontal() ? "x" : "y");
    const e = this
      , {params: t, rtlTranslate: i, translate: s, wrapperEl: r} = e;
    if (t.virtualTranslate)
        return i ? -s : s;
    if (t.cssMode)
        return s;
    let a = Xd(r, n);
    return a += e.cssOverflowAdjustment(),
    i && (a = -a),
    a || 0
}
function mf(n, e) {
    const t = this
      , {rtlTranslate: i, params: s, wrapperEl: r, progress: a} = t;
    let o = 0
      , l = 0;
    const u = 0;
    t.isHorizontal() ? o = i ? -n : n : l = n,
    s.roundLengths && (o = Math.floor(o),
    l = Math.floor(l)),
    t.previousTranslate = t.translate,
    t.translate = t.isHorizontal() ? o : l,
    s.cssMode ? r[t.isHorizontal() ? "scrollLeft" : "scrollTop"] = t.isHorizontal() ? -o : -l : s.virtualTranslate || (t.isHorizontal() ? o -= t.cssOverflowAdjustment() : l -= t.cssOverflowAdjustment(),
    r.style.transform = `translate3d(${o}px, ${l}px, ${u}px)`);
    let h;
    const d = t.maxTranslate() - t.minTranslate();
    d === 0 ? h = 0 : h = (n - t.minTranslate()) / d,
    h !== a && t.updateProgress(n),
    t.emit("setTranslate", t.translate, e)
}
function _f() {
    return -this.snapGrid[0]
}
function vf() {
    return -this.snapGrid[this.snapGrid.length - 1]
}
function yf(n, e, t, i, s) {
    n === void 0 && (n = 0),
    e === void 0 && (e = this.params.speed),
    t === void 0 && (t = !0),
    i === void 0 && (i = !0);
    const r = this
      , {params: a, wrapperEl: o} = r;
    if (r.animating && a.preventInteractionOnTransition)
        return !1;
    const l = r.minTranslate()
      , u = r.maxTranslate();
    let h;
    if (i && n > l ? h = l : i && n < u ? h = u : h = n,
    r.updateProgress(h),
    a.cssMode) {
        const d = r.isHorizontal();
        if (e === 0)
            o[d ? "scrollLeft" : "scrollTop"] = -h;
        else {
            if (!r.support.smoothScroll)
                return Uu({
                    swiper: r,
                    targetPosition: -h,
                    side: d ? "left" : "top"
                }),
                !0;
            o.scrollTo({
                [d ? "left" : "top"]: -h,
                behavior: "smooth"
            })
        }
        return !0
    }
    return e === 0 ? (r.setTransition(0),
    r.setTranslate(h),
    t && (r.emit("beforeTransitionStart", e, s),
    r.emit("transitionEnd"))) : (r.setTransition(e),
    r.setTranslate(h),
    t && (r.emit("beforeTransitionStart", e, s),
    r.emit("transitionStart")),
    r.animating || (r.animating = !0,
    r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(f) {
        !r || r.destroyed || f.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd),
        r.onTranslateToWrapperTransitionEnd = null,
        delete r.onTranslateToWrapperTransitionEnd,
        r.animating = !1,
        t && r.emit("transitionEnd"))
    }
    ),
    r.wrapperEl.addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd))),
    !0
}
var xf = {
    getTranslate: gf,
    setTranslate: mf,
    minTranslate: _f,
    maxTranslate: vf,
    translateTo: yf
};
function Df(n, e) {
    const t = this;
    t.params.cssMode || (t.wrapperEl.style.transitionDuration = `${n}ms`,
    t.wrapperEl.style.transitionDelay = n === 0 ? "0ms" : ""),
    t.emit("setTransition", n, e)
}
function Hu(n) {
    let {swiper: e, runCallbacks: t, direction: i, step: s} = n;
    const {activeIndex: r, previousIndex: a} = e;
    let o = i;
    if (o || (r > a ? o = "next" : r < a ? o = "prev" : o = "reset"),
    e.emit(`transition${s}`),
    t && r !== a) {
        if (o === "reset") {
            e.emit(`slideResetTransition${s}`);
            return
        }
        e.emit(`slideChangeTransition${s}`),
        o === "next" ? e.emit(`slideNextTransition${s}`) : e.emit(`slidePrevTransition${s}`)
    }
}
function wf(n, e) {
    n === void 0 && (n = !0);
    const t = this
      , {params: i} = t;
    i.cssMode || (i.autoHeight && t.updateAutoHeight(),
    Hu({
        swiper: t,
        runCallbacks: n,
        direction: e,
        step: "Start"
    }))
}
function bf(n, e) {
    n === void 0 && (n = !0);
    const t = this
      , {params: i} = t;
    t.animating = !1,
    !i.cssMode && (t.setTransition(0),
    Hu({
        swiper: t,
        runCallbacks: n,
        direction: e,
        step: "End"
    }))
}
var Tf = {
    setTransition: Df,
    transitionStart: wf,
    transitionEnd: bf
};
function Sf(n, e, t, i, s) {
    n === void 0 && (n = 0),
    t === void 0 && (t = !0),
    typeof n == "string" && (n = parseInt(n, 10));
    const r = this;
    let a = n;
    a < 0 && (a = 0);
    const {params: o, snapGrid: l, slidesGrid: u, previousIndex: h, activeIndex: d, rtlTranslate: f, wrapperEl: c, enabled: g} = r;
    if (!g && !i && !s || r.destroyed || r.animating && o.preventInteractionOnTransition)
        return !1;
    typeof e > "u" && (e = r.params.speed);
    const p = Math.min(r.params.slidesPerGroupSkip, a);
    let _ = p + Math.floor((a - p) / r.params.slidesPerGroup);
    _ >= l.length && (_ = l.length - 1);
    const y = -l[_];
    if (o.normalizeSlideIndex)
        for (let m = 0; m < u.length; m += 1) {
            const v = -Math.floor(y * 100)
              , x = Math.floor(u[m] * 100)
              , P = Math.floor(u[m + 1] * 100);
            typeof u[m + 1] < "u" ? v >= x && v < P - (P - x) / 2 ? a = m : v >= x && v < P && (a = m + 1) : v >= x && (a = m)
        }
    if (r.initialized && a !== d && (!r.allowSlideNext && (f ? y > r.translate && y > r.minTranslate() : y < r.translate && y < r.minTranslate()) || !r.allowSlidePrev && y > r.translate && y > r.maxTranslate() && (d || 0) !== a))
        return !1;
    a !== (h || 0) && t && r.emit("beforeSlideChangeStart"),
    r.updateProgress(y);
    let D;
    if (a > d ? D = "next" : a < d ? D = "prev" : D = "reset",
    f && -y === r.translate || !f && y === r.translate)
        return r.updateActiveIndex(a),
        o.autoHeight && r.updateAutoHeight(),
        r.updateSlidesClasses(),
        o.effect !== "slide" && r.setTranslate(y),
        D !== "reset" && (r.transitionStart(t, D),
        r.transitionEnd(t, D)),
        !1;
    if (o.cssMode) {
        const m = r.isHorizontal()
          , v = f ? y : -y;
        if (e === 0) {
            const x = r.virtual && r.params.virtual.enabled;
            x && (r.wrapperEl.style.scrollSnapType = "none",
            r._immediateVirtual = !0),
            x && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0 ? (r._cssModeVirtualInitialSet = !0,
            requestAnimationFrame( () => {
                c[m ? "scrollLeft" : "scrollTop"] = v
            }
            )) : c[m ? "scrollLeft" : "scrollTop"] = v,
            x && requestAnimationFrame( () => {
                r.wrapperEl.style.scrollSnapType = "",
                r._immediateVirtual = !1
            }
            )
        } else {
            if (!r.support.smoothScroll)
                return Uu({
                    swiper: r,
                    targetPosition: v,
                    side: m ? "left" : "top"
                }),
                !0;
            c.scrollTo({
                [m ? "left" : "top"]: v,
                behavior: "smooth"
            })
        }
        return !0
    }
    return r.setTransition(e),
    r.setTranslate(y),
    r.updateActiveIndex(a),
    r.updateSlidesClasses(),
    r.emit("beforeTransitionStart", e, i),
    r.transitionStart(t, D),
    e === 0 ? r.transitionEnd(t, D) : r.animating || (r.animating = !0,
    r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(v) {
        !r || r.destroyed || v.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd),
        r.onSlideToWrapperTransitionEnd = null,
        delete r.onSlideToWrapperTransitionEnd,
        r.transitionEnd(t, D))
    }
    ),
    r.wrapperEl.addEventListener("transitionend", r.onSlideToWrapperTransitionEnd)),
    !0
}
function Ef(n, e, t, i) {
    n === void 0 && (n = 0),
    t === void 0 && (t = !0),
    typeof n == "string" && (n = parseInt(n, 10));
    const s = this;
    if (s.destroyed)
        return;
    typeof e > "u" && (e = s.params.speed);
    const r = s.grid && s.params.grid && s.params.grid.rows > 1;
    let a = n;
    if (s.params.loop)
        if (s.virtual && s.params.virtual.enabled)
            a = a + s.virtual.slidesBefore;
        else {
            let o;
            if (r) {
                const f = a * s.params.grid.rows;
                o = s.slides.filter(c => c.getAttribute("data-swiper-slide-index") * 1 === f)[0].column
            } else
                o = s.getSlideIndexByData(a);
            const l = r ? Math.ceil(s.slides.length / s.params.grid.rows) : s.slides.length
              , {centeredSlides: u} = s.params;
            let h = s.params.slidesPerView;
            h === "auto" ? h = s.slidesPerViewDynamic() : (h = Math.ceil(parseFloat(s.params.slidesPerView, 10)),
            u && h % 2 === 0 && (h = h + 1));
            let d = l - o < h;
            if (u && (d = d || o < Math.ceil(h / 2)),
            i && u && s.params.slidesPerView !== "auto" && !r && (d = !1),
            d) {
                const f = u ? o < s.activeIndex ? "prev" : "next" : o - s.activeIndex - 1 < s.params.slidesPerView ? "next" : "prev";
                s.loopFix({
                    direction: f,
                    slideTo: !0,
                    activeSlideIndex: f === "next" ? o + 1 : o - l + 1,
                    slideRealIndex: f === "next" ? s.realIndex : void 0
                })
            }
            if (r) {
                const f = a * s.params.grid.rows;
                a = s.slides.filter(c => c.getAttribute("data-swiper-slide-index") * 1 === f)[0].column
            } else
                a = s.getSlideIndexByData(a)
        }
    return requestAnimationFrame( () => {
        s.slideTo(a, e, t, i)
    }
    ),
    s
}
function Cf(n, e, t) {
    e === void 0 && (e = !0);
    const i = this
      , {enabled: s, params: r, animating: a} = i;
    if (!s || i.destroyed)
        return i;
    typeof n > "u" && (n = i.params.speed);
    let o = r.slidesPerGroup;
    r.slidesPerView === "auto" && r.slidesPerGroup === 1 && r.slidesPerGroupAuto && (o = Math.max(i.slidesPerViewDynamic("current", !0), 1));
    const l = i.activeIndex < r.slidesPerGroupSkip ? 1 : o
      , u = i.virtual && r.virtual.enabled;
    if (r.loop) {
        if (a && !u && r.loopPreventsSliding)
            return !1;
        if (i.loopFix({
            direction: "next"
        }),
        i._clientLeft = i.wrapperEl.clientLeft,
        i.activeIndex === i.slides.length - 1 && r.cssMode)
            return requestAnimationFrame( () => {
                i.slideTo(i.activeIndex + l, n, e, t)
            }
            ),
            !0
    }
    return r.rewind && i.isEnd ? i.slideTo(0, n, e, t) : i.slideTo(i.activeIndex + l, n, e, t)
}
function Pf(n, e, t) {
    e === void 0 && (e = !0);
    const i = this
      , {params: s, snapGrid: r, slidesGrid: a, rtlTranslate: o, enabled: l, animating: u} = i;
    if (!l || i.destroyed)
        return i;
    typeof n > "u" && (n = i.params.speed);
    const h = i.virtual && s.virtual.enabled;
    if (s.loop) {
        if (u && !h && s.loopPreventsSliding)
            return !1;
        i.loopFix({
            direction: "prev"
        }),
        i._clientLeft = i.wrapperEl.clientLeft
    }
    const d = o ? i.translate : -i.translate;
    function f(y) {
        return y < 0 ? -Math.floor(Math.abs(y)) : Math.floor(y)
    }
    const c = f(d)
      , g = r.map(y => f(y));
    let p = r[g.indexOf(c) - 1];
    if (typeof p > "u" && s.cssMode) {
        let y;
        r.forEach( (D, m) => {
            c >= D && (y = m)
        }
        ),
        typeof y < "u" && (p = r[y > 0 ? y - 1 : y])
    }
    let _ = 0;
    if (typeof p < "u" && (_ = a.indexOf(p),
    _ < 0 && (_ = i.activeIndex - 1),
    s.slidesPerView === "auto" && s.slidesPerGroup === 1 && s.slidesPerGroupAuto && (_ = _ - i.slidesPerViewDynamic("previous", !0) + 1,
    _ = Math.max(_, 0))),
    s.rewind && i.isBeginning) {
        const y = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
        return i.slideTo(y, n, e, t)
    } else if (s.loop && i.activeIndex === 0 && s.cssMode)
        return requestAnimationFrame( () => {
            i.slideTo(_, n, e, t)
        }
        ),
        !0;
    return i.slideTo(_, n, e, t)
}
function Mf(n, e, t) {
    e === void 0 && (e = !0);
    const i = this;
    if (!i.destroyed)
        return typeof n > "u" && (n = i.params.speed),
        i.slideTo(i.activeIndex, n, e, t)
}
function Ff(n, e, t, i) {
    e === void 0 && (e = !0),
    i === void 0 && (i = .5);
    const s = this;
    if (s.destroyed)
        return;
    typeof n > "u" && (n = s.params.speed);
    let r = s.activeIndex;
    const a = Math.min(s.params.slidesPerGroupSkip, r)
      , o = a + Math.floor((r - a) / s.params.slidesPerGroup)
      , l = s.rtlTranslate ? s.translate : -s.translate;
    if (l >= s.snapGrid[o]) {
        const u = s.snapGrid[o]
          , h = s.snapGrid[o + 1];
        l - u > (h - u) * i && (r += s.params.slidesPerGroup)
    } else {
        const u = s.snapGrid[o - 1]
          , h = s.snapGrid[o];
        l - u <= (h - u) * i && (r -= s.params.slidesPerGroup)
    }
    return r = Math.max(r, 0),
    r = Math.min(r, s.slidesGrid.length - 1),
    s.slideTo(r, n, e, t)
}
function Af() {
    const n = this;
    if (n.destroyed)
        return;
    const {params: e, slidesEl: t} = n
      , i = e.slidesPerView === "auto" ? n.slidesPerViewDynamic() : e.slidesPerView;
    let s = n.clickedIndex, r;
    const a = n.isElement ? "swiper-slide" : `.${e.slideClass}`;
    if (e.loop) {
        if (n.animating)
            return;
        r = parseInt(n.clickedSlide.getAttribute("data-swiper-slide-index"), 10),
        e.centeredSlides ? s < n.loopedSlides - i / 2 || s > n.slides.length - n.loopedSlides + i / 2 ? (n.loopFix(),
        s = n.getSlideIndex(yi(t, `${a}[data-swiper-slide-index="${r}"]`)[0]),
        Cr( () => {
            n.slideTo(s)
        }
        )) : n.slideTo(s) : s > n.slides.length - i ? (n.loopFix(),
        s = n.getSlideIndex(yi(t, `${a}[data-swiper-slide-index="${r}"]`)[0]),
        Cr( () => {
            n.slideTo(s)
        }
        )) : n.slideTo(s)
    } else
        n.slideTo(s)
}
var Rf = {
    slideTo: Sf,
    slideToLoop: Ef,
    slideNext: Cf,
    slidePrev: Pf,
    slideReset: Mf,
    slideToClosest: Ff,
    slideToClickedSlide: Af
};
function Of(n) {
    const e = this
      , {params: t, slidesEl: i} = e;
    if (!t.loop || e.virtual && e.params.virtual.enabled)
        return;
    const s = () => {
        yi(i, `.${t.slideClass}, swiper-slide`).forEach( (d, f) => {
            d.setAttribute("data-swiper-slide-index", f)
        }
        )
    }
      , r = e.grid && t.grid && t.grid.rows > 1
      , a = t.slidesPerGroup * (r ? t.grid.rows : 1)
      , o = e.slides.length % a !== 0
      , l = r && e.slides.length % t.grid.rows !== 0
      , u = h => {
        for (let d = 0; d < h; d += 1) {
            const f = e.isElement ? Fa("swiper-slide", [t.slideBlankClass]) : Fa("div", [t.slideClass, t.slideBlankClass]);
            e.slidesEl.append(f)
        }
    }
    ;
    if (o) {
        if (t.loopAddBlankSlides) {
            const h = a - e.slides.length % a;
            u(h),
            e.recalcSlides(),
            e.updateSlides()
        } else
            yn("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        s()
    } else if (l) {
        if (t.loopAddBlankSlides) {
            const h = t.grid.rows - e.slides.length % t.grid.rows;
            u(h),
            e.recalcSlides(),
            e.updateSlides()
        } else
            yn("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        s()
    } else
        s();
    e.loopFix({
        slideRealIndex: n,
        direction: t.centeredSlides ? void 0 : "next"
    })
}
function Lf(n) {
    let {slideRealIndex: e, slideTo: t=!0, direction: i, setTranslate: s, activeSlideIndex: r, byController: a, byMousewheel: o} = n === void 0 ? {} : n;
    const l = this;
    if (!l.params.loop)
        return;
    l.emit("beforeLoopFix");
    const {slides: u, allowSlidePrev: h, allowSlideNext: d, slidesEl: f, params: c} = l
      , {centeredSlides: g} = c;
    if (l.allowSlidePrev = !0,
    l.allowSlideNext = !0,
    l.virtual && c.virtual.enabled) {
        t && (!c.centeredSlides && l.snapIndex === 0 ? l.slideTo(l.virtual.slides.length, 0, !1, !0) : c.centeredSlides && l.snapIndex < c.slidesPerView ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0) : l.snapIndex === l.snapGrid.length - 1 && l.slideTo(l.virtual.slidesBefore, 0, !1, !0)),
        l.allowSlidePrev = h,
        l.allowSlideNext = d,
        l.emit("loopFix");
        return
    }
    let p = c.slidesPerView;
    p === "auto" ? p = l.slidesPerViewDynamic() : (p = Math.ceil(parseFloat(c.slidesPerView, 10)),
    g && p % 2 === 0 && (p = p + 1));
    const _ = c.slidesPerGroupAuto ? p : c.slidesPerGroup;
    let y = _;
    y % _ !== 0 && (y += _ - y % _),
    y += c.loopAdditionalSlides,
    l.loopedSlides = y;
    const D = l.grid && c.grid && c.grid.rows > 1;
    u.length < p + y ? yn("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : D && c.grid.fill === "row" && yn("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
    const m = []
      , v = [];
    let x = l.activeIndex;
    typeof r > "u" ? r = l.getSlideIndex(u.filter(O => O.classList.contains(c.slideActiveClass))[0]) : x = r;
    const P = i === "next" || !i
      , T = i === "prev" || !i;
    let E = 0
      , C = 0;
    const w = D ? Math.ceil(u.length / c.grid.rows) : u.length
      , F = (D ? u[r].column : r) + (g && typeof s > "u" ? -p / 2 + .5 : 0);
    if (F < y) {
        E = Math.max(y - F, _);
        for (let O = 0; O < y - F; O += 1) {
            const I = O - Math.floor(O / w) * w;
            if (D) {
                const z = w - I - 1;
                for (let k = u.length - 1; k >= 0; k -= 1)
                    u[k].column === z && m.push(k)
            } else
                m.push(w - I - 1)
        }
    } else if (F + p > w - y) {
        C = Math.max(F - (w - y * 2), _);
        for (let O = 0; O < C; O += 1) {
            const I = O - Math.floor(O / w) * w;
            D ? u.forEach( (z, k) => {
                z.column === I && v.push(k)
            }
            ) : v.push(I)
        }
    }
    if (l.__preventObserver__ = !0,
    requestAnimationFrame( () => {
        l.__preventObserver__ = !1
    }
    ),
    T && m.forEach(O => {
        u[O].swiperLoopMoveDOM = !0,
        f.prepend(u[O]),
        u[O].swiperLoopMoveDOM = !1
    }
    ),
    P && v.forEach(O => {
        u[O].swiperLoopMoveDOM = !0,
        f.append(u[O]),
        u[O].swiperLoopMoveDOM = !1
    }
    ),
    l.recalcSlides(),
    c.slidesPerView === "auto" ? l.updateSlides() : D && (m.length > 0 && T || v.length > 0 && P) && l.slides.forEach( (O, I) => {
        l.grid.updateSlide(I, O, l.slides)
    }
    ),
    c.watchSlidesProgress && l.updateSlidesOffset(),
    t) {
        if (m.length > 0 && T) {
            if (typeof e > "u") {
                const O = l.slidesGrid[x]
                  , z = l.slidesGrid[x + E] - O;
                o ? l.setTranslate(l.translate - z) : (l.slideTo(x + Math.ceil(E), 0, !1, !0),
                s && (l.touchEventsData.startTranslate = l.touchEventsData.startTranslate - z,
                l.touchEventsData.currentTranslate = l.touchEventsData.currentTranslate - z))
            } else if (s) {
                const O = D ? m.length / c.grid.rows : m.length;
                l.slideTo(l.activeIndex + O, 0, !1, !0),
                l.touchEventsData.currentTranslate = l.translate
            }
        } else if (v.length > 0 && P)
            if (typeof e > "u") {
                const O = l.slidesGrid[x]
                  , z = l.slidesGrid[x - C] - O;
                o ? l.setTranslate(l.translate - z) : (l.slideTo(x - C, 0, !1, !0),
                s && (l.touchEventsData.startTranslate = l.touchEventsData.startTranslate - z,
                l.touchEventsData.currentTranslate = l.touchEventsData.currentTranslate - z))
            } else {
                const O = D ? v.length / c.grid.rows : v.length;
                l.slideTo(l.activeIndex - O, 0, !1, !0)
            }
    }
    if (l.allowSlidePrev = h,
    l.allowSlideNext = d,
    l.controller && l.controller.control && !a) {
        const O = {
            slideRealIndex: e,
            direction: i,
            setTranslate: s,
            activeSlideIndex: r,
            byController: !0
        };
        Array.isArray(l.controller.control) ? l.controller.control.forEach(I => {
            !I.destroyed && I.params.loop && I.loopFix({
                ...O,
                slideTo: I.params.slidesPerView === c.slidesPerView ? t : !1
            })
        }
        ) : l.controller.control instanceof l.constructor && l.controller.control.params.loop && l.controller.control.loopFix({
            ...O,
            slideTo: l.controller.control.params.slidesPerView === c.slidesPerView ? t : !1
        })
    }
    l.emit("loopFix")
}
function kf() {
    const n = this
      , {params: e, slidesEl: t} = n;
    if (!e.loop || n.virtual && n.params.virtual.enabled)
        return;
    n.recalcSlides();
    const i = [];
    n.slides.forEach(s => {
        const r = typeof s.swiperSlideIndex > "u" ? s.getAttribute("data-swiper-slide-index") * 1 : s.swiperSlideIndex;
        i[r] = s
    }
    ),
    n.slides.forEach(s => {
        s.removeAttribute("data-swiper-slide-index")
    }
    ),
    i.forEach(s => {
        t.append(s)
    }
    ),
    n.recalcSlides(),
    n.slideTo(n.realIndex, 0)
}
var If = {
    loopCreate: Of,
    loopFix: Lf,
    loopDestroy: kf
};
function zf(n) {
    const e = this;
    if (!e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode)
        return;
    const t = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
    e.isElement && (e.__preventObserver__ = !0),
    t.style.cursor = "move",
    t.style.cursor = n ? "grabbing" : "grab",
    e.isElement && requestAnimationFrame( () => {
        e.__preventObserver__ = !1
    }
    )
}
function Bf() {
    const n = this;
    n.params.watchOverflow && n.isLocked || n.params.cssMode || (n.isElement && (n.__preventObserver__ = !0),
    n[n.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "",
    n.isElement && requestAnimationFrame( () => {
        n.__preventObserver__ = !1
    }
    ))
}
var Nf = {
    setGrabCursor: zf,
    unsetGrabCursor: Bf
};
function Vf(n, e) {
    e === void 0 && (e = this);
    function t(i) {
        if (!i || i === Us() || i === yt())
            return null;
        i.assignedSlot && (i = i.assignedSlot);
        const s = i.closest(n);
        return !s && !i.getRootNode ? null : s || t(i.getRootNode().host)
    }
    return t(e)
}
function Jo(n, e, t) {
    const i = yt()
      , {params: s} = n
      , r = s.edgeSwipeDetection
      , a = s.edgeSwipeThreshold;
    return r && (t <= a || t >= i.innerWidth - a) ? r === "prevent" ? (e.preventDefault(),
    !0) : !1 : !0
}
function Uf(n) {
    const e = this
      , t = Us();
    let i = n;
    i.originalEvent && (i = i.originalEvent);
    const s = e.touchEventsData;
    if (i.type === "pointerdown") {
        if (s.pointerId !== null && s.pointerId !== i.pointerId)
            return;
        s.pointerId = i.pointerId
    } else
        i.type === "touchstart" && i.targetTouches.length === 1 && (s.touchId = i.targetTouches[0].identifier);
    if (i.type === "touchstart") {
        Jo(e, i, i.targetTouches[0].pageX);
        return
    }
    const {params: r, touches: a, enabled: o} = e;
    if (!o || !r.simulateTouch && i.pointerType === "mouse" || e.animating && r.preventInteractionOnTransition)
        return;
    !e.animating && r.cssMode && r.loop && e.loopFix();
    let l = i.target;
    if (r.touchEventsTarget === "wrapper" && !e.wrapperEl.contains(l) || "which"in i && i.which === 3 || "button"in i && i.button > 0 || s.isTouched && s.isMoved)
        return;
    const u = !!r.noSwipingClass && r.noSwipingClass !== ""
      , h = i.composedPath ? i.composedPath() : i.path;
    u && i.target && i.target.shadowRoot && h && (l = h[0]);
    const d = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`
      , f = !!(i.target && i.target.shadowRoot);
    if (r.noSwiping && (f ? Vf(d, l) : l.closest(d))) {
        e.allowClick = !0;
        return
    }
    if (r.swipeHandler && !l.closest(r.swipeHandler))
        return;
    a.currentX = i.pageX,
    a.currentY = i.pageY;
    const c = a.currentX
      , g = a.currentY;
    if (!Jo(e, i, c))
        return;
    Object.assign(s, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0
    }),
    a.startX = c,
    a.startY = g,
    s.touchStartTime = Nt(),
    e.allowClick = !0,
    e.updateSize(),
    e.swipeDirection = void 0,
    r.threshold > 0 && (s.allowThresholdMove = !1);
    let p = !0;
    l.matches(s.focusableElements) && (p = !1,
    l.nodeName === "SELECT" && (s.isTouched = !1)),
    t.activeElement && t.activeElement.matches(s.focusableElements) && t.activeElement !== l && t.activeElement.blur();
    const _ = p && e.allowTouchMove && r.touchStartPreventDefault;
    (r.touchStartForcePreventDefault || _) && !l.isContentEditable && i.preventDefault(),
    r.freeMode && r.freeMode.enabled && e.freeMode && e.animating && !r.cssMode && e.freeMode.onTouchStart(),
    e.emit("touchStart", i)
}
function Gf(n) {
    const e = Us()
      , t = this
      , i = t.touchEventsData
      , {params: s, touches: r, rtlTranslate: a, enabled: o} = t;
    if (!o || !s.simulateTouch && n.pointerType === "mouse")
        return;
    let l = n;
    if (l.originalEvent && (l = l.originalEvent),
    l.type === "pointermove" && (i.touchId !== null || l.pointerId !== i.pointerId))
        return;
    let u;
    if (l.type === "touchmove") {
        if (u = [...l.changedTouches].filter(P => P.identifier === i.touchId)[0],
        !u || u.identifier !== i.touchId)
            return
    } else
        u = l;
    if (!i.isTouched) {
        i.startMoving && i.isScrolling && t.emit("touchMoveOpposite", l);
        return
    }
    const h = u.pageX
      , d = u.pageY;
    if (l.preventedByNestedSwiper) {
        r.startX = h,
        r.startY = d;
        return
    }
    if (!t.allowTouchMove) {
        l.target.matches(i.focusableElements) || (t.allowClick = !1),
        i.isTouched && (Object.assign(r, {
            startX: h,
            startY: d,
            currentX: h,
            currentY: d
        }),
        i.touchStartTime = Nt());
        return
    }
    if (s.touchReleaseOnEdges && !s.loop) {
        if (t.isVertical()) {
            if (d < r.startY && t.translate <= t.maxTranslate() || d > r.startY && t.translate >= t.minTranslate()) {
                i.isTouched = !1,
                i.isMoved = !1;
                return
            }
        } else if (h < r.startX && t.translate <= t.maxTranslate() || h > r.startX && t.translate >= t.minTranslate())
            return
    }
    if (e.activeElement && l.target === e.activeElement && l.target.matches(i.focusableElements)) {
        i.isMoved = !0,
        t.allowClick = !1;
        return
    }
    i.allowTouchCallbacks && t.emit("touchMove", l),
    r.previousX = r.currentX,
    r.previousY = r.currentY,
    r.currentX = h,
    r.currentY = d;
    const f = r.currentX - r.startX
      , c = r.currentY - r.startY;
    if (t.params.threshold && Math.sqrt(f ** 2 + c ** 2) < t.params.threshold)
        return;
    if (typeof i.isScrolling > "u") {
        let P;
        t.isHorizontal() && r.currentY === r.startY || t.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : f * f + c * c >= 25 && (P = Math.atan2(Math.abs(c), Math.abs(f)) * 180 / Math.PI,
        i.isScrolling = t.isHorizontal() ? P > s.touchAngle : 90 - P > s.touchAngle)
    }
    if (i.isScrolling && t.emit("touchMoveOpposite", l),
    typeof i.startMoving > "u" && (r.currentX !== r.startX || r.currentY !== r.startY) && (i.startMoving = !0),
    i.isScrolling || l.type === "touchmove" && i.preventTouchMoveFromPointerMove) {
        i.isTouched = !1;
        return
    }
    if (!i.startMoving)
        return;
    t.allowClick = !1,
    !s.cssMode && l.cancelable && l.preventDefault(),
    s.touchMoveStopPropagation && !s.nested && l.stopPropagation();
    let g = t.isHorizontal() ? f : c
      , p = t.isHorizontal() ? r.currentX - r.previousX : r.currentY - r.previousY;
    s.oneWayMovement && (g = Math.abs(g) * (a ? 1 : -1),
    p = Math.abs(p) * (a ? 1 : -1)),
    r.diff = g,
    g *= s.touchRatio,
    a && (g = -g,
    p = -p);
    const _ = t.touchesDirection;
    t.swipeDirection = g > 0 ? "prev" : "next",
    t.touchesDirection = p > 0 ? "prev" : "next";
    const y = t.params.loop && !s.cssMode
      , D = t.touchesDirection === "next" && t.allowSlideNext || t.touchesDirection === "prev" && t.allowSlidePrev;
    if (!i.isMoved) {
        if (y && D && t.loopFix({
            direction: t.swipeDirection
        }),
        i.startTranslate = t.getTranslate(),
        t.setTransition(0),
        t.animating) {
            const P = new window.CustomEvent("transitionend",{
                bubbles: !0,
                cancelable: !0,
                detail: {
                    bySwiperTouchMove: !0
                }
            });
            t.wrapperEl.dispatchEvent(P)
        }
        i.allowMomentumBounce = !1,
        s.grabCursor && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!0),
        t.emit("sliderFirstMove", l)
    }
    let m;
    if (new Date().getTime(),
    i.isMoved && i.allowThresholdMove && _ !== t.touchesDirection && y && D && Math.abs(g) >= 1) {
        Object.assign(r, {
            startX: h,
            startY: d,
            currentX: h,
            currentY: d,
            startTranslate: i.currentTranslate
        }),
        i.loopSwapReset = !0,
        i.startTranslate = i.currentTranslate;
        return
    }
    t.emit("sliderMove", l),
    i.isMoved = !0,
    i.currentTranslate = g + i.startTranslate;
    let v = !0
      , x = s.resistanceRatio;
    if (s.touchReleaseOnEdges && (x = 0),
    g > 0 ? (y && D && !m && i.allowThresholdMove && i.currentTranslate > (s.centeredSlides ? t.minTranslate() - t.slidesSizesGrid[t.activeIndex + 1] : t.minTranslate()) && t.loopFix({
        direction: "prev",
        setTranslate: !0,
        activeSlideIndex: 0
    }),
    i.currentTranslate > t.minTranslate() && (v = !1,
    s.resistance && (i.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + i.startTranslate + g) ** x))) : g < 0 && (y && D && !m && i.allowThresholdMove && i.currentTranslate < (s.centeredSlides ? t.maxTranslate() + t.slidesSizesGrid[t.slidesSizesGrid.length - 1] : t.maxTranslate()) && t.loopFix({
        direction: "next",
        setTranslate: !0,
        activeSlideIndex: t.slides.length - (s.slidesPerView === "auto" ? t.slidesPerViewDynamic() : Math.ceil(parseFloat(s.slidesPerView, 10)))
    }),
    i.currentTranslate < t.maxTranslate() && (v = !1,
    s.resistance && (i.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - i.startTranslate - g) ** x))),
    v && (l.preventedByNestedSwiper = !0),
    !t.allowSlideNext && t.swipeDirection === "next" && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate),
    !t.allowSlidePrev && t.swipeDirection === "prev" && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate),
    !t.allowSlidePrev && !t.allowSlideNext && (i.currentTranslate = i.startTranslate),
    s.threshold > 0)
        if (Math.abs(g) > s.threshold || i.allowThresholdMove) {
            if (!i.allowThresholdMove) {
                i.allowThresholdMove = !0,
                r.startX = r.currentX,
                r.startY = r.currentY,
                i.currentTranslate = i.startTranslate,
                r.diff = t.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY;
                return
            }
        } else {
            i.currentTranslate = i.startTranslate;
            return
        }
    !s.followFinger || s.cssMode || ((s.freeMode && s.freeMode.enabled && t.freeMode || s.watchSlidesProgress) && (t.updateActiveIndex(),
    t.updateSlidesClasses()),
    s.freeMode && s.freeMode.enabled && t.freeMode && t.freeMode.onTouchMove(),
    t.updateProgress(i.currentTranslate),
    t.setTranslate(i.currentTranslate))
}
function Wf(n) {
    const e = this
      , t = e.touchEventsData;
    let i = n;
    i.originalEvent && (i = i.originalEvent);
    let s;
    if (i.type === "touchend" || i.type === "touchcancel") {
        if (s = [...i.changedTouches].filter(x => x.identifier === t.touchId)[0],
        !s || s.identifier !== t.touchId)
            return
    } else {
        if (t.touchId !== null || i.pointerId !== t.pointerId)
            return;
        s = i
    }
    if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(i.type) && !(["pointercancel", "contextmenu"].includes(i.type) && (e.browser.isSafari || e.browser.isWebView)))
        return;
    t.pointerId = null,
    t.touchId = null;
    const {params: a, touches: o, rtlTranslate: l, slidesGrid: u, enabled: h} = e;
    if (!h || !a.simulateTouch && i.pointerType === "mouse")
        return;
    if (t.allowTouchCallbacks && e.emit("touchEnd", i),
    t.allowTouchCallbacks = !1,
    !t.isTouched) {
        t.isMoved && a.grabCursor && e.setGrabCursor(!1),
        t.isMoved = !1,
        t.startMoving = !1;
        return
    }
    a.grabCursor && t.isMoved && t.isTouched && (e.allowSlideNext === !0 || e.allowSlidePrev === !0) && e.setGrabCursor(!1);
    const d = Nt()
      , f = d - t.touchStartTime;
    if (e.allowClick) {
        const x = i.path || i.composedPath && i.composedPath();
        e.updateClickedSlide(x && x[0] || i.target, x),
        e.emit("tap click", i),
        f < 300 && d - t.lastClickTime < 300 && e.emit("doubleTap doubleClick", i)
    }
    if (t.lastClickTime = Nt(),
    Cr( () => {
        e.destroyed || (e.allowClick = !0)
    }
    ),
    !t.isTouched || !t.isMoved || !e.swipeDirection || o.diff === 0 && !t.loopSwapReset || t.currentTranslate === t.startTranslate && !t.loopSwapReset) {
        t.isTouched = !1,
        t.isMoved = !1,
        t.startMoving = !1;
        return
    }
    t.isTouched = !1,
    t.isMoved = !1,
    t.startMoving = !1;
    let c;
    if (a.followFinger ? c = l ? e.translate : -e.translate : c = -t.currentTranslate,
    a.cssMode)
        return;
    if (a.freeMode && a.freeMode.enabled) {
        e.freeMode.onTouchEnd({
            currentPos: c
        });
        return
    }
    const g = c >= -e.maxTranslate() && !e.params.loop;
    let p = 0
      , _ = e.slidesSizesGrid[0];
    for (let x = 0; x < u.length; x += x < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
        const P = x < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
        typeof u[x + P] < "u" ? (g || c >= u[x] && c < u[x + P]) && (p = x,
        _ = u[x + P] - u[x]) : (g || c >= u[x]) && (p = x,
        _ = u[u.length - 1] - u[u.length - 2])
    }
    let y = null
      , D = null;
    a.rewind && (e.isBeginning ? D = a.virtual && a.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1 : e.isEnd && (y = 0));
    const m = (c - u[p]) / _
      , v = p < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
    if (f > a.longSwipesMs) {
        if (!a.longSwipes) {
            e.slideTo(e.activeIndex);
            return
        }
        e.swipeDirection === "next" && (m >= a.longSwipesRatio ? e.slideTo(a.rewind && e.isEnd ? y : p + v) : e.slideTo(p)),
        e.swipeDirection === "prev" && (m > 1 - a.longSwipesRatio ? e.slideTo(p + v) : D !== null && m < 0 && Math.abs(m) > a.longSwipesRatio ? e.slideTo(D) : e.slideTo(p))
    } else {
        if (!a.shortSwipes) {
            e.slideTo(e.activeIndex);
            return
        }
        e.navigation && (i.target === e.navigation.nextEl || i.target === e.navigation.prevEl) ? i.target === e.navigation.nextEl ? e.slideTo(p + v) : e.slideTo(p) : (e.swipeDirection === "next" && e.slideTo(y !== null ? y : p + v),
        e.swipeDirection === "prev" && e.slideTo(D !== null ? D : p))
    }
}
function el() {
    const n = this
      , {params: e, el: t} = n;
    if (t && t.offsetWidth === 0)
        return;
    e.breakpoints && n.setBreakpoint();
    const {allowSlideNext: i, allowSlidePrev: s, snapGrid: r} = n
      , a = n.virtual && n.params.virtual.enabled;
    n.allowSlideNext = !0,
    n.allowSlidePrev = !0,
    n.updateSize(),
    n.updateSlides(),
    n.updateSlidesClasses();
    const o = a && e.loop;
    (e.slidesPerView === "auto" || e.slidesPerView > 1) && n.isEnd && !n.isBeginning && !n.params.centeredSlides && !o ? n.slideTo(n.slides.length - 1, 0, !1, !0) : n.params.loop && !a ? n.slideToLoop(n.realIndex, 0, !1, !0) : n.slideTo(n.activeIndex, 0, !1, !0),
    n.autoplay && n.autoplay.running && n.autoplay.paused && (clearTimeout(n.autoplay.resizeTimeout),
    n.autoplay.resizeTimeout = setTimeout( () => {
        n.autoplay && n.autoplay.running && n.autoplay.paused && n.autoplay.resume()
    }
    , 500)),
    n.allowSlidePrev = s,
    n.allowSlideNext = i,
    n.params.watchOverflow && r !== n.snapGrid && n.checkOverflow()
}
function Hf(n) {
    const e = this;
    e.enabled && (e.allowClick || (e.params.preventClicks && n.preventDefault(),
    e.params.preventClicksPropagation && e.animating && (n.stopPropagation(),
    n.stopImmediatePropagation())))
}
function Xf() {
    const n = this
      , {wrapperEl: e, rtlTranslate: t, enabled: i} = n;
    if (!i)
        return;
    n.previousTranslate = n.translate,
    n.isHorizontal() ? n.translate = -e.scrollLeft : n.translate = -e.scrollTop,
    n.translate === 0 && (n.translate = 0),
    n.updateActiveIndex(),
    n.updateSlidesClasses();
    let s;
    const r = n.maxTranslate() - n.minTranslate();
    r === 0 ? s = 0 : s = (n.translate - n.minTranslate()) / r,
    s !== n.progress && n.updateProgress(t ? -n.translate : n.translate),
    n.emit("setTranslate", n.translate, !1)
}
function Yf(n) {
    const e = this;
    an(e, n.target),
    !(e.params.cssMode || e.params.slidesPerView !== "auto" && !e.params.autoHeight) && e.update()
}
function qf() {
    const n = this;
    n.documentTouchHandlerProceeded || (n.documentTouchHandlerProceeded = !0,
    n.params.touchReleaseOnEdges && (n.el.style.touchAction = "auto"))
}
const Xu = (n, e) => {
    const t = Us()
      , {params: i, el: s, wrapperEl: r, device: a} = n
      , o = !!i.nested
      , l = e === "on" ? "addEventListener" : "removeEventListener"
      , u = e;
    !s || typeof s == "string" || (t[l]("touchstart", n.onDocumentTouchStart, {
        passive: !1,
        capture: o
    }),
    s[l]("touchstart", n.onTouchStart, {
        passive: !1
    }),
    s[l]("pointerdown", n.onTouchStart, {
        passive: !1
    }),
    t[l]("touchmove", n.onTouchMove, {
        passive: !1,
        capture: o
    }),
    t[l]("pointermove", n.onTouchMove, {
        passive: !1,
        capture: o
    }),
    t[l]("touchend", n.onTouchEnd, {
        passive: !0
    }),
    t[l]("pointerup", n.onTouchEnd, {
        passive: !0
    }),
    t[l]("pointercancel", n.onTouchEnd, {
        passive: !0
    }),
    t[l]("touchcancel", n.onTouchEnd, {
        passive: !0
    }),
    t[l]("pointerout", n.onTouchEnd, {
        passive: !0
    }),
    t[l]("pointerleave", n.onTouchEnd, {
        passive: !0
    }),
    t[l]("contextmenu", n.onTouchEnd, {
        passive: !0
    }),
    (i.preventClicks || i.preventClicksPropagation) && s[l]("click", n.onClick, !0),
    i.cssMode && r[l]("scroll", n.onScroll),
    i.updateOnWindowResize ? n[u](a.ios || a.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", el, !0) : n[u]("observerUpdate", el, !0),
    s[l]("load", n.onLoad, {
        capture: !0
    }))
}
;
function $f() {
    const n = this
      , {params: e} = n;
    n.onTouchStart = Uf.bind(n),
    n.onTouchMove = Gf.bind(n),
    n.onTouchEnd = Wf.bind(n),
    n.onDocumentTouchStart = qf.bind(n),
    e.cssMode && (n.onScroll = Xf.bind(n)),
    n.onClick = Hf.bind(n),
    n.onLoad = Yf.bind(n),
    Xu(n, "on")
}
function jf() {
    Xu(this, "off")
}
var Qf = {
    attachEvents: $f,
    detachEvents: jf
};
const tl = (n, e) => n.grid && e.grid && e.grid.rows > 1;
function Kf() {
    const n = this
      , {realIndex: e, initialized: t, params: i, el: s} = n
      , r = i.breakpoints;
    if (!r || r && Object.keys(r).length === 0)
        return;
    const a = n.getBreakpoint(r, n.params.breakpointsBase, n.el);
    if (!a || n.currentBreakpoint === a)
        return;
    const l = (a in r ? r[a] : void 0) || n.originalParams
      , u = tl(n, i)
      , h = tl(n, l)
      , d = n.params.grabCursor
      , f = l.grabCursor
      , c = i.enabled;
    u && !h ? (s.classList.remove(`${i.containerModifierClass}grid`, `${i.containerModifierClass}grid-column`),
    n.emitContainerClasses()) : !u && h && (s.classList.add(`${i.containerModifierClass}grid`),
    (l.grid.fill && l.grid.fill === "column" || !l.grid.fill && i.grid.fill === "column") && s.classList.add(`${i.containerModifierClass}grid-column`),
    n.emitContainerClasses()),
    d && !f ? n.unsetGrabCursor() : !d && f && n.setGrabCursor(),
    ["navigation", "pagination", "scrollbar"].forEach(m => {
        if (typeof l[m] > "u")
            return;
        const v = i[m] && i[m].enabled
          , x = l[m] && l[m].enabled;
        v && !x && n[m].disable(),
        !v && x && n[m].enable()
    }
    );
    const g = l.direction && l.direction !== i.direction
      , p = i.loop && (l.slidesPerView !== i.slidesPerView || g)
      , _ = i.loop;
    g && t && n.changeDirection(),
    Et(n.params, l);
    const y = n.params.enabled
      , D = n.params.loop;
    Object.assign(n, {
        allowTouchMove: n.params.allowTouchMove,
        allowSlideNext: n.params.allowSlideNext,
        allowSlidePrev: n.params.allowSlidePrev
    }),
    c && !y ? n.disable() : !c && y && n.enable(),
    n.currentBreakpoint = a,
    n.emit("_beforeBreakpoint", l),
    t && (p ? (n.loopDestroy(),
    n.loopCreate(e),
    n.updateSlides()) : !_ && D ? (n.loopCreate(e),
    n.updateSlides()) : _ && !D && n.loopDestroy()),
    n.emit("breakpoint", l)
}
function Zf(n, e, t) {
    if (e === void 0 && (e = "window"),
    !n || e === "container" && !t)
        return;
    let i = !1;
    const s = yt()
      , r = e === "window" ? s.innerHeight : t.clientHeight
      , a = Object.keys(n).map(o => {
        if (typeof o == "string" && o.indexOf("@") === 0) {
            const l = parseFloat(o.substr(1));
            return {
                value: r * l,
                point: o
            }
        }
        return {
            value: o,
            point: o
        }
    }
    );
    a.sort( (o, l) => parseInt(o.value, 10) - parseInt(l.value, 10));
    for (let o = 0; o < a.length; o += 1) {
        const {point: l, value: u} = a[o];
        e === "window" ? s.matchMedia(`(min-width: ${u}px)`).matches && (i = l) : u <= t.clientWidth && (i = l)
    }
    return i || "max"
}
var Jf = {
    setBreakpoint: Kf,
    getBreakpoint: Zf
};
function ep(n, e) {
    const t = [];
    return n.forEach(i => {
        typeof i == "object" ? Object.keys(i).forEach(s => {
            i[s] && t.push(e + s)
        }
        ) : typeof i == "string" && t.push(e + i)
    }
    ),
    t
}
function tp() {
    const n = this
      , {classNames: e, params: t, rtl: i, el: s, device: r} = n
      , a = ep(["initialized", t.direction, {
        "free-mode": n.params.freeMode && t.freeMode.enabled
    }, {
        autoheight: t.autoHeight
    }, {
        rtl: i
    }, {
        grid: t.grid && t.grid.rows > 1
    }, {
        "grid-column": t.grid && t.grid.rows > 1 && t.grid.fill === "column"
    }, {
        android: r.android
    }, {
        ios: r.ios
    }, {
        "css-mode": t.cssMode
    }, {
        centered: t.cssMode && t.centeredSlides
    }, {
        "watch-progress": t.watchSlidesProgress
    }], t.containerModifierClass);
    e.push(...a),
    s.classList.add(...e),
    n.emitContainerClasses()
}
function ip() {
    const n = this
      , {el: e, classNames: t} = n;
    !e || typeof e == "string" || (e.classList.remove(...t),
    n.emitContainerClasses())
}
var sp = {
    addClasses: tp,
    removeClasses: ip
};
function rp() {
    const n = this
      , {isLocked: e, params: t} = n
      , {slidesOffsetBefore: i} = t;
    if (i) {
        const s = n.slides.length - 1
          , r = n.slidesGrid[s] + n.slidesSizesGrid[s] + i * 2;
        n.isLocked = n.size > r
    } else
        n.isLocked = n.snapGrid.length === 1;
    t.allowSlideNext === !0 && (n.allowSlideNext = !n.isLocked),
    t.allowSlidePrev === !0 && (n.allowSlidePrev = !n.isLocked),
    e && e !== n.isLocked && (n.isEnd = !1),
    e !== n.isLocked && n.emit(n.isLocked ? "lock" : "unlock")
}
var np = {
    checkOverflow: rp
}
  , il = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    swiperElementNodeName: "SWIPER-CONTAINER",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: .5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: .85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1
};
function ap(n, e) {
    return function(i) {
        i === void 0 && (i = {});
        const s = Object.keys(i)[0]
          , r = i[s];
        if (typeof r != "object" || r === null) {
            Et(e, i);
            return
        }
        if (n[s] === !0 && (n[s] = {
            enabled: !0
        }),
        s === "navigation" && n[s] && n[s].enabled && !n[s].prevEl && !n[s].nextEl && (n[s].auto = !0),
        ["pagination", "scrollbar"].indexOf(s) >= 0 && n[s] && n[s].enabled && !n[s].el && (n[s].auto = !0),
        !(s in n && "enabled"in r)) {
            Et(e, i);
            return
        }
        typeof n[s] == "object" && !("enabled"in n[s]) && (n[s].enabled = !0),
        n[s] || (n[s] = {
            enabled: !1
        }),
        Et(e, i)
    }
}
const ea = {
    eventsEmitter: sf,
    update: pf,
    translate: xf,
    transition: Tf,
    slide: Rf,
    loop: If,
    grabCursor: Nf,
    events: Qf,
    breakpoints: Jf,
    checkOverflow: np,
    classes: sp
}
  , ta = {};
class It {
    constructor() {
        let e, t;
        for (var i = arguments.length, s = new Array(i), r = 0; r < i; r++)
            s[r] = arguments[r];
        s.length === 1 && s[0].constructor && Object.prototype.toString.call(s[0]).slice(8, -1) === "Object" ? t = s[0] : [e,t] = s,
        t || (t = {}),
        t = Et({}, t),
        e && !t.el && (t.el = e);
        const a = Us();
        if (t.el && typeof t.el == "string" && a.querySelectorAll(t.el).length > 1) {
            const h = [];
            return a.querySelectorAll(t.el).forEach(d => {
                const f = Et({}, t, {
                    el: d
                });
                h.push(new It(f))
            }
            ),
            h
        }
        const o = this;
        o.__swiper__ = !0,
        o.support = Gu(),
        o.device = Wu({
            userAgent: t.userAgent
        }),
        o.browser = Jd(),
        o.eventsListeners = {},
        o.eventsAnyListeners = [],
        o.modules = [...o.__modules__],
        t.modules && Array.isArray(t.modules) && o.modules.push(...t.modules);
        const l = {};
        o.modules.forEach(h => {
            h({
                params: t,
                swiper: o,
                extendParams: ap(t, l),
                on: o.on.bind(o),
                once: o.once.bind(o),
                off: o.off.bind(o),
                emit: o.emit.bind(o)
            })
        }
        );
        const u = Et({}, il, l);
        return o.params = Et({}, u, ta, t),
        o.originalParams = Et({}, o.params),
        o.passedParams = Et({}, t),
        o.params && o.params.on && Object.keys(o.params.on).forEach(h => {
            o.on(h, o.params.on[h])
        }
        ),
        o.params && o.params.onAny && o.onAny(o.params.onAny),
        Object.assign(o, {
            enabled: o.params.enabled,
            el: e,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal() {
                return o.params.direction === "horizontal"
            },
            isVertical() {
                return o.params.direction === "vertical"
            },
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            cssOverflowAdjustment() {
                return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
            },
            allowSlideNext: o.params.allowSlideNext,
            allowSlidePrev: o.params.allowSlidePrev,
            touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: o.params.focusableElements,
                lastClickTime: 0,
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                startMoving: void 0,
                pointerId: null,
                touchId: null
            },
            allowClick: !0,
            allowTouchMove: o.params.allowTouchMove,
            touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
        }),
        o.emit("_swiper"),
        o.params.init && o.init(),
        o
    }
    getDirectionLabel(e) {
        return this.isHorizontal() ? e : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom"
        }[e]
    }
    getSlideIndex(e) {
        const {slidesEl: t, params: i} = this
          , s = yi(t, `.${i.slideClass}, swiper-slide`)
          , r = Qo(s[0]);
        return Qo(e) - r
    }
    getSlideIndexByData(e) {
        return this.getSlideIndex(this.slides.filter(t => t.getAttribute("data-swiper-slide-index") * 1 === e)[0])
    }
    recalcSlides() {
        const e = this
          , {slidesEl: t, params: i} = e;
        e.slides = yi(t, `.${i.slideClass}, swiper-slide`)
    }
    enable() {
        const e = this;
        e.enabled || (e.enabled = !0,
        e.params.grabCursor && e.setGrabCursor(),
        e.emit("enable"))
    }
    disable() {
        const e = this;
        e.enabled && (e.enabled = !1,
        e.params.grabCursor && e.unsetGrabCursor(),
        e.emit("disable"))
    }
    setProgress(e, t) {
        const i = this;
        e = Math.min(Math.max(e, 0), 1);
        const s = i.minTranslate()
          , a = (i.maxTranslate() - s) * e + s;
        i.translateTo(a, typeof t > "u" ? 0 : t),
        i.updateActiveIndex(),
        i.updateSlidesClasses()
    }
    emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el)
            return;
        const t = e.el.className.split(" ").filter(i => i.indexOf("swiper") === 0 || i.indexOf(e.params.containerModifierClass) === 0);
        e.emit("_containerClasses", t.join(" "))
    }
    getSlideClasses(e) {
        const t = this;
        return t.destroyed ? "" : e.className.split(" ").filter(i => i.indexOf("swiper-slide") === 0 || i.indexOf(t.params.slideClass) === 0).join(" ")
    }
    emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el)
            return;
        const t = [];
        e.slides.forEach(i => {
            const s = e.getSlideClasses(i);
            t.push({
                slideEl: i,
                classNames: s
            }),
            e.emit("_slideClass", i, s)
        }
        ),
        e.emit("_slideClasses", t)
    }
    slidesPerViewDynamic(e, t) {
        e === void 0 && (e = "current"),
        t === void 0 && (t = !1);
        const i = this
          , {params: s, slides: r, slidesGrid: a, slidesSizesGrid: o, size: l, activeIndex: u} = i;
        let h = 1;
        if (typeof s.slidesPerView == "number")
            return s.slidesPerView;
        if (s.centeredSlides) {
            let d = r[u] ? Math.ceil(r[u].swiperSlideSize) : 0, f;
            for (let c = u + 1; c < r.length; c += 1)
                r[c] && !f && (d += Math.ceil(r[c].swiperSlideSize),
                h += 1,
                d > l && (f = !0));
            for (let c = u - 1; c >= 0; c -= 1)
                r[c] && !f && (d += r[c].swiperSlideSize,
                h += 1,
                d > l && (f = !0))
        } else if (e === "current")
            for (let d = u + 1; d < r.length; d += 1)
                (t ? a[d] + o[d] - a[u] < l : a[d] - a[u] < l) && (h += 1);
        else
            for (let d = u - 1; d >= 0; d -= 1)
                a[u] - a[d] < l && (h += 1);
        return h
    }
    update() {
        const e = this;
        if (!e || e.destroyed)
            return;
        const {snapGrid: t, params: i} = e;
        i.breakpoints && e.setBreakpoint(),
        [...e.el.querySelectorAll('[loading="lazy"]')].forEach(a => {
            a.complete && an(e, a)
        }
        ),
        e.updateSize(),
        e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses();
        function s() {
            const a = e.rtlTranslate ? e.translate * -1 : e.translate
              , o = Math.min(Math.max(a, e.maxTranslate()), e.minTranslate());
            e.setTranslate(o),
            e.updateActiveIndex(),
            e.updateSlidesClasses()
        }
        let r;
        if (i.freeMode && i.freeMode.enabled && !i.cssMode)
            s(),
            i.autoHeight && e.updateAutoHeight();
        else {
            if ((i.slidesPerView === "auto" || i.slidesPerView > 1) && e.isEnd && !i.centeredSlides) {
                const a = e.virtual && i.virtual.enabled ? e.virtual.slides : e.slides;
                r = e.slideTo(a.length - 1, 0, !1, !0)
            } else
                r = e.slideTo(e.activeIndex, 0, !1, !0);
            r || s()
        }
        i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
        e.emit("update")
    }
    changeDirection(e, t) {
        t === void 0 && (t = !0);
        const i = this
          , s = i.params.direction;
        return e || (e = s === "horizontal" ? "vertical" : "horizontal"),
        e === s || e !== "horizontal" && e !== "vertical" || (i.el.classList.remove(`${i.params.containerModifierClass}${s}`),
        i.el.classList.add(`${i.params.containerModifierClass}${e}`),
        i.emitContainerClasses(),
        i.params.direction = e,
        i.slides.forEach(r => {
            e === "vertical" ? r.style.width = "" : r.style.height = ""
        }
        ),
        i.emit("changeDirection"),
        t && i.update()),
        i
    }
    changeLanguageDirection(e) {
        const t = this;
        t.rtl && e === "rtl" || !t.rtl && e === "ltr" || (t.rtl = e === "rtl",
        t.rtlTranslate = t.params.direction === "horizontal" && t.rtl,
        t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
        t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
        t.el.dir = "ltr"),
        t.update())
    }
    mount(e) {
        const t = this;
        if (t.mounted)
            return !0;
        let i = e || t.params.el;
        if (typeof i == "string" && (i = document.querySelector(i)),
        !i)
            return !1;
        i.swiper = t,
        i.parentNode && i.parentNode.host && i.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
        const s = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let a = i && i.shadowRoot && i.shadowRoot.querySelector ? i.shadowRoot.querySelector(s()) : yi(i, s())[0];
        return !a && t.params.createElements && (a = Fa("div", t.params.wrapperClass),
        i.append(a),
        yi(i, `.${t.params.slideClass}`).forEach(o => {
            a.append(o)
        }
        )),
        Object.assign(t, {
            el: i,
            wrapperEl: a,
            slidesEl: t.isElement && !i.parentNode.host.slideSlots ? i.parentNode.host : a,
            hostEl: t.isElement ? i.parentNode.host : i,
            mounted: !0,
            rtl: i.dir.toLowerCase() === "rtl" || zi(i, "direction") === "rtl",
            rtlTranslate: t.params.direction === "horizontal" && (i.dir.toLowerCase() === "rtl" || zi(i, "direction") === "rtl"),
            wrongRTL: zi(a, "display") === "-webkit-box"
        }),
        !0
    }
    init(e) {
        const t = this;
        if (t.initialized || t.mount(e) === !1)
            return t;
        t.emit("beforeInit"),
        t.params.breakpoints && t.setBreakpoint(),
        t.addClasses(),
        t.updateSize(),
        t.updateSlides(),
        t.params.watchOverflow && t.checkOverflow(),
        t.params.grabCursor && t.enabled && t.setGrabCursor(),
        t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0),
        t.params.loop && t.loopCreate(),
        t.attachEvents();
        const s = [...t.el.querySelectorAll('[loading="lazy"]')];
        return t.isElement && s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
        s.forEach(r => {
            r.complete ? an(t, r) : r.addEventListener("load", a => {
                an(t, a.target)
            }
            )
        }
        ),
        Aa(t),
        t.initialized = !0,
        Aa(t),
        t.emit("init"),
        t.emit("afterInit"),
        t
    }
    destroy(e, t) {
        e === void 0 && (e = !0),
        t === void 0 && (t = !0);
        const i = this
          , {params: s, el: r, wrapperEl: a, slides: o} = i;
        return typeof i.params > "u" || i.destroyed || (i.emit("beforeDestroy"),
        i.initialized = !1,
        i.detachEvents(),
        s.loop && i.loopDestroy(),
        t && (i.removeClasses(),
        r && typeof r != "string" && r.removeAttribute("style"),
        a && a.removeAttribute("style"),
        o && o.length && o.forEach(l => {
            l.classList.remove(s.slideVisibleClass, s.slideFullyVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass),
            l.removeAttribute("style"),
            l.removeAttribute("data-swiper-slide-index")
        }
        )),
        i.emit("destroy"),
        Object.keys(i.eventsListeners).forEach(l => {
            i.off(l)
        }
        ),
        e !== !1 && (i.el && typeof i.el != "string" && (i.el.swiper = null),
        Wd(i)),
        i.destroyed = !0),
        null
    }
    static extendDefaults(e) {
        Et(ta, e)
    }
    static get extendedDefaults() {
        return ta
    }
    static get defaults() {
        return il
    }
    static installModule(e) {
        It.prototype.__modules__ || (It.prototype.__modules__ = []);
        const t = It.prototype.__modules__;
        typeof e == "function" && t.indexOf(e) < 0 && t.push(e)
    }
    static use(e) {
        return Array.isArray(e) ? (e.forEach(t => It.installModule(t)),
        It) : (It.installModule(e),
        It)
    }
}
Object.keys(ea).forEach(n => {
    Object.keys(ea[n]).forEach(e => {
        It.prototype[e] = ea[n][e]
    }
    )
}
);
It.use([ef, tf]);
function op(n) {
    let {swiper: e, extendParams: t, on: i, emit: s} = n;
    const r = yt();
    t({
        mousewheel: {
            enabled: !1,
            releaseOnEdges: !1,
            invert: !1,
            forceToAxis: !1,
            sensitivity: 1,
            eventsTarget: "container",
            thresholdDelta: null,
            thresholdTime: null,
            noMousewheelClass: "swiper-no-mousewheel"
        }
    }),
    e.mousewheel = {
        enabled: !1
    };
    let a, o = Nt(), l;
    const u = [];
    function h(m) {
        let T = 0
          , E = 0
          , C = 0
          , w = 0;
        return "detail"in m && (E = m.detail),
        "wheelDelta"in m && (E = -m.wheelDelta / 120),
        "wheelDeltaY"in m && (E = -m.wheelDeltaY / 120),
        "wheelDeltaX"in m && (T = -m.wheelDeltaX / 120),
        "axis"in m && m.axis === m.HORIZONTAL_AXIS && (T = E,
        E = 0),
        C = T * 10,
        w = E * 10,
        "deltaY"in m && (w = m.deltaY),
        "deltaX"in m && (C = m.deltaX),
        m.shiftKey && !C && (C = w,
        w = 0),
        (C || w) && m.deltaMode && (m.deltaMode === 1 ? (C *= 40,
        w *= 40) : (C *= 800,
        w *= 800)),
        C && !T && (T = C < 1 ? -1 : 1),
        w && !E && (E = w < 1 ? -1 : 1),
        {
            spinX: T,
            spinY: E,
            pixelX: C,
            pixelY: w
        }
    }
    function d() {
        e.enabled && (e.mouseEntered = !0)
    }
    function f() {
        e.enabled && (e.mouseEntered = !1)
    }
    function c(m) {
        return e.params.mousewheel.thresholdDelta && m.delta < e.params.mousewheel.thresholdDelta || e.params.mousewheel.thresholdTime && Nt() - o < e.params.mousewheel.thresholdTime ? !1 : m.delta >= 6 && Nt() - o < 60 ? !0 : (m.direction < 0 ? (!e.isEnd || e.params.loop) && !e.animating && (e.slideNext(),
        s("scroll", m.raw)) : (!e.isBeginning || e.params.loop) && !e.animating && (e.slidePrev(),
        s("scroll", m.raw)),
        o = new r.Date().getTime(),
        !1)
    }
    function g(m) {
        const v = e.params.mousewheel;
        if (m.direction < 0) {
            if (e.isEnd && !e.params.loop && v.releaseOnEdges)
                return !0
        } else if (e.isBeginning && !e.params.loop && v.releaseOnEdges)
            return !0;
        return !1
    }
    function p(m) {
        let v = m
          , x = !0;
        if (!e.enabled || m.target.closest(`.${e.params.mousewheel.noMousewheelClass}`))
            return;
        const P = e.params.mousewheel;
        e.params.cssMode && v.preventDefault();
        let T = e.el;
        e.params.mousewheel.eventsTarget !== "container" && (T = document.querySelector(e.params.mousewheel.eventsTarget));
        const E = T && T.contains(v.target);
        if (!e.mouseEntered && !E && !P.releaseOnEdges)
            return !0;
        v.originalEvent && (v = v.originalEvent);
        let C = 0;
        const w = e.rtlTranslate ? -1 : 1
          , L = h(v);
        if (P.forceToAxis)
            if (e.isHorizontal())
                if (Math.abs(L.pixelX) > Math.abs(L.pixelY))
                    C = -L.pixelX * w;
                else
                    return !0;
            else if (Math.abs(L.pixelY) > Math.abs(L.pixelX))
                C = -L.pixelY;
            else
                return !0;
        else
            C = Math.abs(L.pixelX) > Math.abs(L.pixelY) ? -L.pixelX * w : -L.pixelY;
        if (C === 0)
            return !0;
        P.invert && (C = -C);
        let F = e.getTranslate() + C * P.sensitivity;
        if (F >= e.minTranslate() && (F = e.minTranslate()),
        F <= e.maxTranslate() && (F = e.maxTranslate()),
        x = e.params.loop ? !0 : !(F === e.minTranslate() || F === e.maxTranslate()),
        x && e.params.nested && v.stopPropagation(),
        !e.params.freeMode || !e.params.freeMode.enabled) {
            const O = {
                time: Nt(),
                delta: Math.abs(C),
                direction: Math.sign(C),
                raw: m
            };
            u.length >= 2 && u.shift();
            const I = u.length ? u[u.length - 1] : void 0;
            if (u.push(O),
            I ? (O.direction !== I.direction || O.delta > I.delta || O.time > I.time + 150) && c(O) : c(O),
            g(O))
                return !0
        } else {
            const O = {
                time: Nt(),
                delta: Math.abs(C),
                direction: Math.sign(C)
            }
              , I = l && O.time < l.time + 500 && O.delta <= l.delta && O.direction === l.direction;
            if (!I) {
                l = void 0;
                let z = e.getTranslate() + C * P.sensitivity;
                const k = e.isBeginning
                  , B = e.isEnd;
                if (z >= e.minTranslate() && (z = e.minTranslate()),
                z <= e.maxTranslate() && (z = e.maxTranslate()),
                e.setTransition(0),
                e.setTranslate(z),
                e.updateProgress(),
                e.updateActiveIndex(),
                e.updateSlidesClasses(),
                (!k && e.isBeginning || !B && e.isEnd) && e.updateSlidesClasses(),
                e.params.loop && e.loopFix({
                    direction: O.direction < 0 ? "next" : "prev",
                    byMousewheel: !0
                }),
                e.params.freeMode.sticky) {
                    clearTimeout(a),
                    a = void 0,
                    u.length >= 15 && u.shift();
                    const U = u.length ? u[u.length - 1] : void 0
                      , R = u[0];
                    if (u.push(O),
                    U && (O.delta > U.delta || O.direction !== U.direction))
                        u.splice(0);
                    else if (u.length >= 15 && O.time - R.time < 500 && R.delta - O.delta >= 1 && O.delta <= 6) {
                        const b = C > 0 ? .8 : .2;
                        l = O,
                        u.splice(0),
                        a = Cr( () => {
                            e.slideToClosest(e.params.speed, !0, void 0, b)
                        }
                        , 0)
                    }
                    a || (a = Cr( () => {
                        l = O,
                        u.splice(0),
                        e.slideToClosest(e.params.speed, !0, void 0, .5)
                    }
                    , 500))
                }
                if (I || s("scroll", v),
                e.params.autoplay && e.params.autoplayDisableOnInteraction && e.autoplay.stop(),
                P.releaseOnEdges && (z === e.minTranslate() || z === e.maxTranslate()))
                    return !0
            }
        }
        return v.preventDefault ? v.preventDefault() : v.returnValue = !1,
        !1
    }
    function _(m) {
        let v = e.el;
        e.params.mousewheel.eventsTarget !== "container" && (v = document.querySelector(e.params.mousewheel.eventsTarget)),
        v[m]("mouseenter", d),
        v[m]("mouseleave", f),
        v[m]("wheel", p)
    }
    function y() {
        return e.params.cssMode ? (e.wrapperEl.removeEventListener("wheel", p),
        !0) : e.mousewheel.enabled ? !1 : (_("addEventListener"),
        e.mousewheel.enabled = !0,
        !0)
    }
    function D() {
        return e.params.cssMode ? (e.wrapperEl.addEventListener(event, p),
        !0) : e.mousewheel.enabled ? (_("removeEventListener"),
        e.mousewheel.enabled = !1,
        !0) : !1
    }
    i("init", () => {
        !e.params.mousewheel.enabled && e.params.cssMode && D(),
        e.params.mousewheel.enabled && y()
    }
    ),
    i("destroy", () => {
        e.params.cssMode && y(),
        e.mousewheel.enabled && D()
    }
    ),
    Object.assign(e.mousewheel, {
        enable: y,
        disable: D
    })
}
function lp(n) {
    let {swiper: e, extendParams: t, emit: i, once: s} = n;
    t({
        freeMode: {
            enabled: !1,
            momentum: !0,
            momentumRatio: 1,
            momentumBounce: !0,
            momentumBounceRatio: 1,
            momentumVelocityRatio: 1,
            sticky: !1,
            minimumVelocity: .02
        }
    });
    function r() {
        if (e.params.cssMode)
            return;
        const l = e.getTranslate();
        e.setTranslate(l),
        e.setTransition(0),
        e.touchEventsData.velocities.length = 0,
        e.freeMode.onTouchEnd({
            currentPos: e.rtl ? e.translate : -e.translate
        })
    }
    function a() {
        if (e.params.cssMode)
            return;
        const {touchEventsData: l, touches: u} = e;
        l.velocities.length === 0 && l.velocities.push({
            position: u[e.isHorizontal() ? "startX" : "startY"],
            time: l.touchStartTime
        }),
        l.velocities.push({
            position: u[e.isHorizontal() ? "currentX" : "currentY"],
            time: Nt()
        })
    }
    function o(l) {
        let {currentPos: u} = l;
        if (e.params.cssMode)
            return;
        const {params: h, wrapperEl: d, rtlTranslate: f, snapGrid: c, touchEventsData: g} = e
          , _ = Nt() - g.touchStartTime;
        if (u < -e.minTranslate()) {
            e.slideTo(e.activeIndex);
            return
        }
        if (u > -e.maxTranslate()) {
            e.slides.length < c.length ? e.slideTo(c.length - 1) : e.slideTo(e.slides.length - 1);
            return
        }
        if (h.freeMode.momentum) {
            if (g.velocities.length > 1) {
                const E = g.velocities.pop()
                  , C = g.velocities.pop()
                  , w = E.position - C.position
                  , L = E.time - C.time;
                e.velocity = w / L,
                e.velocity /= 2,
                Math.abs(e.velocity) < h.freeMode.minimumVelocity && (e.velocity = 0),
                (L > 150 || Nt() - E.time > 300) && (e.velocity = 0)
            } else
                e.velocity = 0;
            e.velocity *= h.freeMode.momentumVelocityRatio,
            g.velocities.length = 0;
            let y = 1e3 * h.freeMode.momentumRatio;
            const D = e.velocity * y;
            let m = e.translate + D;
            f && (m = -m);
            let v = !1, x;
            const P = Math.abs(e.velocity) * 20 * h.freeMode.momentumBounceRatio;
            let T;
            if (m < e.maxTranslate())
                h.freeMode.momentumBounce ? (m + e.maxTranslate() < -P && (m = e.maxTranslate() - P),
                x = e.maxTranslate(),
                v = !0,
                g.allowMomentumBounce = !0) : m = e.maxTranslate(),
                h.loop && h.centeredSlides && (T = !0);
            else if (m > e.minTranslate())
                h.freeMode.momentumBounce ? (m - e.minTranslate() > P && (m = e.minTranslate() + P),
                x = e.minTranslate(),
                v = !0,
                g.allowMomentumBounce = !0) : m = e.minTranslate(),
                h.loop && h.centeredSlides && (T = !0);
            else if (h.freeMode.sticky) {
                let E;
                for (let C = 0; C < c.length; C += 1)
                    if (c[C] > -m) {
                        E = C;
                        break
                    }
                Math.abs(c[E] - m) < Math.abs(c[E - 1] - m) || e.swipeDirection === "next" ? m = c[E] : m = c[E - 1],
                m = -m
            }
            if (T && s("transitionEnd", () => {
                e.loopFix()
            }
            ),
            e.velocity !== 0) {
                if (f ? y = Math.abs((-m - e.translate) / e.velocity) : y = Math.abs((m - e.translate) / e.velocity),
                h.freeMode.sticky) {
                    const E = Math.abs((f ? -m : m) - e.translate)
                      , C = e.slidesSizesGrid[e.activeIndex];
                    E < C ? y = h.speed : E < 2 * C ? y = h.speed * 1.5 : y = h.speed * 2.5
                }
            } else if (h.freeMode.sticky) {
                e.slideToClosest();
                return
            }
            h.freeMode.momentumBounce && v ? (e.updateProgress(x),
            e.setTransition(y),
            e.setTranslate(m),
            e.transitionStart(!0, e.swipeDirection),
            e.animating = !0,
            $n(d, () => {
                !e || e.destroyed || !g.allowMomentumBounce || (i("momentumBounce"),
                e.setTransition(h.speed),
                setTimeout( () => {
                    e.setTranslate(x),
                    $n(d, () => {
                        !e || e.destroyed || e.transitionEnd()
                    }
                    )
                }
                , 0))
            }
            )) : e.velocity ? (i("_freeModeNoMomentumRelease"),
            e.updateProgress(m),
            e.setTransition(y),
            e.setTranslate(m),
            e.transitionStart(!0, e.swipeDirection),
            e.animating || (e.animating = !0,
            $n(d, () => {
                !e || e.destroyed || e.transitionEnd()
            }
            ))) : e.updateProgress(m),
            e.updateActiveIndex(),
            e.updateSlidesClasses()
        } else if (h.freeMode.sticky) {
            e.slideToClosest();
            return
        } else
            h.freeMode && i("_freeModeNoMomentumRelease");
        (!h.freeMode.momentum || _ >= h.longSwipesMs) && (i("_freeModeStaticRelease"),
        e.updateProgress(),
        e.updateActiveIndex(),
        e.updateSlidesClasses())
    }
    Object.assign(e, {
        freeMode: {
            onTouchStart: r,
            onTouchMove: a,
            onTouchEnd: o
        }
    })
}
const up = (n, e) => {
    let t;
    return (...i) => {
        clearTimeout(t),
        t = setTimeout( () => {
            n.apply(void 0, i)
        }
        , e)
    }
}
;
class hp {
    constructor() {
        Pe(this, "toggleGalleryMode", up( () => {
            this.transition.start({
                delay: 1.2,
                filterOpacity: .5
            }),
            this.galleryMode === "normal" && this.setFullMode(.8),
            this.galleryMode === "fullScreen" && this.setNormalMode()
        }
        , 250));
        this.galleryMode = "normal",
        this.galleryIsInit = !1,
        this.mobileView = window.matchMedia("(max-width: 980px)"),
        this.transition = new Ru(S.casesTransition,{
            rows: 1,
            columns: 12,
            duration: .4,
            each: .04,
            startEase: "power2.inOut",
            stopEase: "power12.inOut",
            startFrom: "edges",
            stopFrom: "center"
        })
    }
    init(e) {
        this.activeCase = e,
        this.el = {
            gallery: this.activeCase.querySelector(S.gallery),
            galleryContent: this.activeCase.querySelector(S.galleryContent),
            galleryItems: this.activeCase.querySelectorAll(S.galleryItem),
            galleryNextCase: this.activeCase.querySelector(S.galleryNextCase)
        },
        this.gallery = new It(this.el.gallery,{
            wrapperClass: "cases__gallery-content",
            slideClass: "case__gallery-item",
            modules: [lp, op],
            mousewheel: !0,
            slidesPerView: "auto",
            speed: 800,
            direction: "horizontal",
            slideToClickedSlide: !1,
            freeMode: {
                enable: !0,
                momentum: !0,
                minimumVelocity: .1,
                momentumBounce: !0,
                momentumRatio: 2,
                momentumVelocityRatio: 1
            },
            on: {
                init: () => {
                    this.galleryIsInit = !0,
                    this.preventScroll(),
                    this.setTopPadding()
                }
                ,
                destroy: () => {
                    this.galleryIsInit = !1
                }
                ,
                click: () => {
                    const t = this.gallery.clickedIndex
                      , i = this.gallery.slides.length - 1;
                    t !== i && (this.toggleGalleryMode(),
                    setTimeout( () => {
                        this.gallery.slideTo(t, 300)
                    }
                    , 1e3))
                }
            }
        }),
        this.galleryMode === "fullScreen" && this.setFullMode(.1)
    }
    newInstance(e, t=0) {
        const i = M.timeline({
            defaults: {
                ease: "power2.inOut"
            }
        });
        i.add( () => {
            this.galleryIsInit && this.gallery.destroy()
        }
        , t),
        i.add( () => {
            this.init(e)
        }
        , "<")
    }
    destroy(e=0) {
        M.timeline({
            defaults: {
                ease: "power2.inOut"
            }
        }).add( () => {
            this.galleryIsInit && (this.gallery.destroy(),
            this.resetTopPadding())
        }
        , e)
    }
    setFullMode(e) {
        Oe.disable();
        const t = M.timeline({
            defaults: {
                ease: "power2.inOut",
                duration: .5
            },
            onComplete: () => {
                this.galleryMode = "fullScreen"
            }
        });
        t.add( () => {
            document.body.classList.add("fullscreen-case"),
            this.mobileView.matches && this.gallery.changeDirection("vertical")
        }
        , e),
        t.to(S.caseInfo, {
            opacity: 0
        }),
        t.to(S.casesNav, {
            opacity: 0,
            y: "10vh"
        })
    }
    setNormalMode() {
        Oe.enable();
        const e = M.timeline({
            defaults: {
                ease: "power2.inOut",
                duration: .5
            },
            onComplete: () => {
                this.galleryMode = "normal"
            }
        });
        e.add( () => {
            document.body.classList.remove("fullscreen-case"),
            this.mobileView.matches && this.gallery.changeDirection("horizontal")
        }
        , .8),
        e.to(S.caseInfo, {
            opacity: 1
        }),
        e.to(S.casesNav, {
            opacity: 1,
            y: "0vh"
        })
    }
    preventScroll() {
        this.el.gallery.addEventListener("mouseover", () => {
            Oe.disable()
        }
        ),
        this.el.gallery.addEventListener("mouseout", () => {
            Oe.enable()
        }
        )
    }
    setTopPadding() {
        const e = M.getProperty(S.navbar, "height");
        M.set(this.el.gallery, {
            paddingTop: e
        })
    }
    resetTopPadding() {
        M.set(this.el.gallery, {
            paddingTop: 0
        })
    }
}
M.registerPlugin(Ti);
class cp {
    constructor(e, t) {
        this.trigger = document.querySelectorAll(e),
        this.props = {
            textEl: M.utils.toArray(t.textElements)
        },
        this.splitText = new Ti(this.props.textEl,{
            type: "chars",
            charsClass: "split-char",
            tag: "span"
        }),
        this.init()
    }
    setDefaultView() {
        M.set(this.splitText.chars, {
            opacity: 0,
            display: "inline-block"
        })
    }
    init() {
        this.setDefaultView(),
        this.bindEvents()
    }
    bindEvents() {
        this.trigger.forEach(e => {
            e.addEventListener("mouseenter", () => this.startEffect(e)),
            e.addEventListener("mouseleave", () => this.stopEffect(e))
        }
        )
    }
    startEffect(e) {
        const t = e.querySelectorAll(".split-char");
        this.startTl = M.timeline({
            defaults: {
                ease: "power1.out",
                willChange: "filter, transform"
            }
        }),
        this.startTl.fromTo(t, {
            yPercent: -25,
            opacity: 0,
            filter: "blur(4px)"
        }, {
            yPercent: 0,
            opacity: 1,
            filter: "blur(0px)",
            stagger: {
                from: "random",
                amount: .2
            }
        })
    }
    stopEffect(e) {
        const t = e.querySelectorAll(".split-char");
        this.startTl && this.startTl.kill(),
        this.stopTl = M.timeline({
            defaults: {
                ease: "power1.out",
                willChange: "filter, transform"
            }
        }),
        this.stopTl.fromTo(t, {
            yPercent: 0,
            opacity: 1
        }, {
            yPercent: 40,
            opacity: 0,
            filter: "blur(4px)",
            stagger: {
                from: "random",
                amount: .1
            }
        })
    }
}
M.registerPlugin(Ti);
class dp {
    constructor(e, t) {
        this.targetEl = document.querySelectorAll(e),
        this.props = {
            el: document.querySelectorAll(t.element)
        },
        this.isHovering = !1,
        this.splitText = new Ti(this.targetEl,{
            type: "chars, lines",
            linesClass: "split-line",
            charsClass: "split-char"
        }),
        this.init()
    }
    init() {
        this.targetEl.forEach(e => {
            this.duplicateLine(e),
            e.addEventListener("mouseenter", () => this.startEffect(e))
        }
        )
    }
    duplicateLine(e) {
        const t = e.querySelector(".split-line").cloneNode(!0);
        e.appendChild(t)
    }
    startEffect(e) {
        const t = e.querySelectorAll(".split-line")
          , i = t[0].querySelectorAll(".split-char")
          , s = t[1].querySelectorAll(".split-char")
          , r = M.timeline({
            defaults: {
                ease: "power1.out",
                willChange: "filter, transform"
            }
        });
        r.addLabel("label"),
        r.fromTo(i, {
            yPercent: 0
        }, {
            yPercent: -100,
            stagger: {
                from: "start",
                amount: .2
            }
        }, "label"),
        r.fromTo(s, {
            yPercent: 100
        }, {
            yPercent: 0,
            stagger: {
                from: "start",
                amount: .2
            }
        }, "label")
    }
}
class fp {
    constructor(e) {
        Pe(this, "currentIndex", null);
        Pe(this, "slidesArr", null);
        Pe(this, "totalSlides", null);
        this.isHovering = !1,
        this.item = e,
        this.el = {
            title: this.item.querySelector(S.previewTitle),
            subtitle: this.item.querySelector(S.previewSubtitle),
            content: this.item.querySelector(S.previewItemInfo),
            cover: this.item.querySelector(S.previewCover),
            slides: this.item.querySelectorAll(S.previewSlide),
            overlay: this.item.querySelector(S.previewOverlay)
        },
        this.slidesArr = M.utils.toArray(this.el.slides),
        this.initEvents()
    }
    startSlider() {
        this.lastIndex = null,
        this.slideInterval = setInterval( () => {
            let e;
            do
                e = Math.floor(Math.random() * this.slidesArr.length);
            while (e === this.lastIndex);
            this.lastIndex = e,
            M.set(this.slidesArr, {
                zIndex: 50
            }),
            M.set(this.slidesArr, {
                opacity: 0
            }),
            M.set(this.slidesArr[e], {
                opacity: 1
            })
        }
        , 400)
    }
    stopSlider() {
        clearInterval(this.slideInterval)
    }
    mouseEnter() {
        this.tlMouseEnter = M.timeline({
            defaults: {
                ease: "power2.inOut",
                duration: .2,
                onComplete: () => {
                    this.isHovering = !0
                }
            }
        }),
        this.isHovering || (this.tlMouseEnter.to(this.el.overlay, {
            opacity: 1
        }),
        this.tlMouseEnter.add( () => {
            this.startSlider()
        }
        , .2))
    }
    mouseLeave() {
        this.tlMouseLeave = M.timeline({
            defaults: {
                ease: "power2.inOut",
                duration: .2,
                onComplete: () => {
                    this.isHovering = !1
                }
            }
        }),
        this.tlMouseEnter && (this.tlMouseEnter.kill(),
        this.stopSlider()),
        this.tlMouseLeave.to(this.el.overlay, {
            opacity: 0,
            delay: .2
        })
    }
    initEvents() {
        this.item.addEventListener("mouseenter", e => this.mouseEnter(e)),
        this.item.addEventListener("mouseleave", e => this.mouseLeave(e))
    }
}
class pp {
    constructor(e) {
        Pe(this, "currentIndex", null);
        Pe(this, "slidesArr", null);
        Pe(this, "totalSlides", null);
        this.isHovering = !1,
        this.item = e,
        this.el = {
            title: this.item.querySelector(S.caseTitle),
            subtitle: this.item.querySelector(S.caseSubtitle),
            gallery: this.item.querySelector(S.gallery)
        },
        this.initEvents(),
        this.setUrls()
    }
    setUrls() {
        const e = "#works"
          , t = this.item.getAttribute("data-slug")
          , i = `<a class="case__link" href="${e}/${t}"></a>`;
        this.item.insertAdjacentHTML("beforeend", i)
    }
    mouseEnter() {
        this.tlMouseEnter = M.timeline({
            defaults: {
                ease: "power2.inOut",
                duration: .2,
                onComplete: () => {
                    this.isHovering = !0
                }
            }
        }),
        this.isHovering || (this.tlMouseEnter.to(this.el.overlay, {
            opacity: 1
        }),
        this.tlMouseEnter.add( () => {}
        , .2))
    }
    mouseLeave() {
        this.tlMouseLeave = M.timeline({
            defaults: {
                ease: "power2.inOut",
                duration: .2,
                onComplete: () => {
                    this.isHovering = !1
                }
            }
        }),
        this.tlMouseEnter && this.tlMouseEnter.kill(),
        this.tlMouseLeave.to(this.el.overlay, {
            opacity: 0,
            delay: .2
        })
    }
    initEvents() {
        this.item.addEventListener("mouseenter", e => this.mouseEnter(e)),
        this.item.addEventListener("mouseleave", e => this.mouseLeave(e))
    }
}
function gp(n) {
    return Math.abs(n) / 100
}
function mp(n) {
    return Math.abs(n) / 100
}
function _p(n) {
    return Math.atan(n / 100)
}
function vp(n) {
    return Math.atan(n / 100)
}
class yp {
    constructor() {
        Pe(this, "loop", () => {
            const e = gp(this.vel.x)
              , t = mp(this.vel.y)
              , i = Math.max(Math.min(_p(this.vel.x) * this.vel.y, 10), -10)
              , s = Math.max(Math.min(vp(this.vel.y) * this.vel.x, 10), -10);
            this.set.x(this.pos.x),
            this.set.y(this.pos.y),
            this.set.sx(1 + e),
            this.set.sy(1 + t),
            this.set.skx(i),
            this.set.sky(s)
        }
        );
        Pe(this, "setFromEvent", e => {
            const t = e.clientX
              , i = e.clientY;
            this.isMoving = !0,
            M.to(this.pos, {
                x: t,
                y: i,
                duration: .95,
                ease: Vh.easeOut,
                onUpdate: () => {
                    this.vel.x = t - this.pos.x,
                    this.vel.y = i - this.pos.y
                }
                ,
                onComplete: () => {
                    this.isMoving = !1
                }
            }),
            this.loop()
        }
        );
        this.cursor = document.createElement("div"),
        this.cursorShape = document.createElement("div"),
        this.cursorText = document.createElement("div"),
        this.cursorIcon = document.createElement("div"),
        this.cursorMedia = document.createElement("div"),
        this.cursor.classList.add("cursor"),
        this.cursorShape.classList.add("cursor__shape"),
        this.cursorText.classList.add("cursor__text"),
        this.cursorIcon.classList.add("cursor__icon"),
        this.cursorMedia.classList.add("cursor__media"),
        document.body.appendChild(this.cursor),
        this.cursor.appendChild(this.cursorShape),
        this.cursor.appendChild(this.cursorText),
        this.cursor.appendChild(this.cursorIcon),
        this.cursor.appendChild(this.cursorMedia),
        this.pos = {
            x: 0,
            y: 0
        },
        this.vel = {
            x: 0,
            y: 0
        },
        this.isMoving = !1,
        this.set = {
            x: M.quickSetter(this.cursor, "x", "px"),
            y: M.quickSetter(this.cursor, "y", "px"),
            sx: M.quickSetter(this.cursorShape, "scaleX"),
            sy: M.quickSetter(this.cursorShape, "scaleY"),
            skx: M.quickSetter(this.cursorShape, "skewX", "deg"),
            sky: M.quickSetter(this.cursorShape, "skewY", "deg")
        },
        this.init()
    }
    init() {
        M.set(this.cursor, {
            xPercent: -50,
            yPercent: -50
        }),
        window.addEventListener("mousemove", this.setFromEvent),
        M.ticker.add(this.loop),
        this.interactionsList(),
        this.bind()
    }
    destroy() {
        window.removeEventListener("mousemove", this.setFromEvent),
        M.ticker.remove(this.loop)
    }
    interactionsList() {
        this.setupInteraction(".navbar__logo", "logo-pointer"),
        this.setupInteraction(".cases__nav-btn, a.contact-item__value, .inline-link", "cursor-pointer"),
        this.setupInteraction("img.case__gallery-item", "cursor-gallery"),
        this.setupInteraction(".nav-item, .navbar__close-btn", "cursor-nav", !0),
        this.setupInteraction(".case__gallery-next", "cursor-gallery-preview"),
        this.setupInteraction(".case", "cursor-case"),
        this.setupInteraction(".preview-item", "cursor-preview"),
        this.setupInteraction(".input, .textarea", "cursor-input"),
        this.setupInteraction(".button", "cursor-button"),
        this.setupInteraction(".contacts", "cursor-light")
    }
    setupInteraction(e, t, i=!1) {
        document.querySelectorAll(e).forEach(r => {
            r.addEventListener("mouseover", () => {
                if (this.cursor.classList.add(t),
                i) {
                    const a = r.offsetWidth;
                    this.cursorShape.style.width = `${a + 24}px`
                }
            }
            ),
            r.addEventListener("mouseleave", () => {
                this.cursor.classList.remove(t),
                i && (this.cursorShape.style.width = "")
            }
            )
        }
        )
    }
    mousedown() {
        M.to(this.cursor, {
            scaleX: .8,
            scaleY: .8,
            ease: "power1.in",
            duration: .4
        })
    }
    mouseup() {
        M.to(this.cursor, {
            scaleX: 1,
            scaleY: 1,
            ease: "power1.in",
            duration: .4
        })
    }
    moveCursor(e) {
        M.to(this.cursor, {
            x: e.clientX,
            y: e.clientY,
            duration: .3,
            ease: "sine.out",
            overwrite: !0
        })
    }
    galleryDraggableStart() {
        M.to(this.cursor, {
            opacity: 0,
            scaleX: .5,
            scaleY: .5,
            skewX: 45,
            skewY: 45,
            rotation: 180,
            ease: "power1.in",
            duration: .2
        })
    }
    galleryDraggableStop() {
        M.to(this.cursor, {
            opacity: 1,
            scaleX: 1,
            scaleY: 1,
            skewX: 0,
            skewY: 0,
            rotation: 0,
            ease: "power1.in",
            duration: .2
        })
    }
    bind() {
        document.addEventListener("mousedown", () => this.mousedown()),
        document.addEventListener("mouseup", () => this.mouseup())
    }
}
/*!
 * TextPlugin 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var nr, jr, xp = function() {
    return nr || typeof window < "u" && (nr = window.gsap) && nr.registerPlugin && nr
}, Mr = {
    version: "3.12.5",
    name: "text",
    init: function(e, t, i) {
        typeof t != "object" && (t = {
            value: t
        });
        var s = e.nodeName.toUpperCase(), r = this, a = t, o = a.newClass, l = a.oldClass, u = a.preserveSpaces, h = a.rtl, d = r.delimiter = t.delimiter || "", f = r.fillChar = t.fillChar || (t.padSpace ? "&nbsp;" : ""), c, g, p, _, y, D, m, v;
        if (r.svg = e.getBBox && (s === "TEXT" || s === "TSPAN"),
        !("innerHTML"in e) && !r.svg)
            return !1;
        if (r.target = e,
        !("value"in t)) {
            r.text = r.original = [""];
            return
        }
        for (p = Pa(e, d, !1, u),
        jr || (jr = document.createElement("div")),
        jr.innerHTML = t.value,
        g = Pa(jr, d, !1, u),
        r.from = i._from,
        (r.from || h) && !(h && r.from) && (s = p,
        p = g,
        g = s),
        r.hasClass = !!(o || l),
        r.newClass = h ? l : o,
        r.oldClass = h ? o : l,
        s = p.length - g.length,
        c = s < 0 ? p : g,
        s < 0 && (s = -s); --s > -1; )
            c.push(f);
        if (t.type === "diff") {
            for (_ = 0,
            y = [],
            D = [],
            m = "",
            s = 0; s < g.length; s++)
                v = g[s],
                v === p[s] ? m += v : (y[_] = m + v,
                D[_++] = m + p[s],
                m = "");
            g = y,
            p = D,
            m && (g.push(m),
            p.push(m))
        }
        t.speed && i.duration(Math.min(.05 / t.speed * c.length, t.maxDuration || 9999)),
        r.rtl = h,
        r.original = p,
        r.text = g,
        r._props.push("text")
    },
    render: function(e, t) {
        e > 1 ? e = 1 : e < 0 && (e = 0),
        t.from && (e = 1 - e);
        var i = t.text, s = t.hasClass, r = t.newClass, a = t.oldClass, o = t.delimiter, l = t.target, u = t.fillChar, h = t.original, d = t.rtl, f = i.length, c = (d ? 1 - e : e) * f + .5 | 0, g, p, _;
        s && e ? (g = r && c,
        p = a && c !== f,
        _ = (g ? "<span class='" + r + "'>" : "") + i.slice(0, c).join(o) + (g ? "</span>" : "") + (p ? "<span class='" + a + "'>" : "") + o + h.slice(c).join(o) + (p ? "</span>" : "")) : _ = i.slice(0, c).join(o) + o + h.slice(c).join(o),
        t.svg ? l.textContent = _ : l.innerHTML = u === "&nbsp;" && ~_.indexOf("  ") ? _.split("  ").join("&nbsp;&nbsp;") : _
    }
};
Mr.splitInnerHTML = Pa;
Mr.emojiSafeSplit = Lu;
Mr.getText = so;
xp() && nr.registerPlugin(Mr);
M.registerPlugin(Mr);
class Dp {
    constructor() {
        this.isMenuVisible = !1,
        this.menuOverlayEl = document.querySelector(S.navbarOverlay),
        this.menuOverlay = new ja(this.menuOverlayEl,{
            rows: 1,
            columns: 8,
            duration: .4,
            each: .04,
            startEase: "power2.inOut",
            stopEase: "power12.inOut",
            startFrom: "edges",
            stopFrom: "center"
        }),
        this.bindEvents()
    }
    showItems(e=0) {
        M.fromTo([S.navItem, S.navbarTgl], {
            x: "1vw",
            opacity: 0,
            filter: "blur(2px)"
        }, {
            x: "0",
            opacity: 1,
            filter: "blur(0px)",
            stagger: .1,
            delay: e,
            duration: .8,
            ease: "power2",
            onStart: () => this.toggleVisible(S.navbarMenu, !0)
        })
    }
    hideItems(e=0) {
        M.to([S.navItem, S.navbarTgl], {
            x: "-1vw",
            filter: "blur(2px)",
            opacity: 0,
            stagger: .1,
            duration: .8,
            ease: "power2",
            delay: e,
            onComplete: () => this.toggleVisible(S.navbarMenu, !1)
        })
    }
    showCloseBtn(e=0) {
        M.fromTo(S.navbarCloseBtn, {
            x: "1vw",
            filter: "blur(4px)",
            opacity: 0
        }, {
            x: "0",
            opacity: 1,
            filter: "blur(0px)",
            ease: "power2",
            duration: .8,
            delay: e,
            onStart: () => this.toggleVisible(S.navbarCloseBtn, !0)
        })
    }
    hideCloseBtn(e=0) {
        M.to(S.navbarCloseBtn, {
            x: "-1vw",
            filter: "blur(4px)",
            opacity: 0,
            duration: .8,
            ease: "power2",
            delay: e,
            onComplete: () => this.toggleVisible(S.navbarCloseBtn, !1)
        })
    }
    showBg(e=0) {
        M.to(S.navbar, {
            backgroundColor: "rgba(248, 248, 248, 1)",
            delay: e,
            duration: .8
        })
    }
    hideBg(e=0) {
        M.to(S.navbar, {
            backgroundColor: "rgba(248, 248, 248, 0)",
            delay: e,
            duration: .1
        })
    }
    showMobileToggle(e=0) {
        M.fromTo(S.navbarTgl, {
            x: "2vw"
        }, {
            x: "0",
            filter: "blur(0px)",
            opacity: 1,
            duration: .4,
            ease: "power2",
            delay: e,
            onStart: () => this.toggleVisible(S.navbarTgl, !0)
        })
    }
    hideMobileToggle(e=0) {
        M.to(S.navbarTgl, {
            x: "-2vw",
            filter: "blur(2px)",
            opacity: 0,
            duration: .4,
            ease: "power2",
            delay: e,
            onComplete: () => this.toggleVisible(S.navbarTgl, !1)
        })
    }
    transformMobileToggle() {
        M.to(S.navbarTgl, {
            opacity: .6,
            filter: "blur(1px)",
            ease: "power2.inOut",
            onComplete: () => {
                this.isMenuVisible ? M.set(S.navbarTglTxt, {
                    text: "Menu"
                }) : M.set(S.navbarTglTxt, {
                    text: "Close"
                }),
                M.to(S.navbarTgl, {
                    opacity: 1,
                    ease: "power2.inOut",
                    filter: "blur(0px)"
                })
            }
        })
    }
    showMobileMenu() {
        const e = M.timeline({
            defaults: {
                ease: "power2"
            },
            onComplete: () => {
                this.isMenuVisible = !0
            }
            ,
            onStart: () => {
                M.set(S.navbarMenu, {
                    width: "100%"
                }),
                this.transformMobileToggle(),
                this.menuOverlay.start()
            }
        });
        e.addLabel("label", .5),
        e.fromTo(S.navItem, {
            y: "-10vh",
            opacity: 0
        }, {
            y: "0",
            opacity: 1,
            delay: .2,
            duration: .8,
            stagger: {
                each: .07,
                from: "start"
            }
        }, "label"),
        e.fromTo(S.navbarSocialItem, {
            y: "-16px",
            opacity: 0
        }, {
            y: "0",
            opacity: 1,
            delay: .5,
            stagger: {
                each: .07,
                from: "end"
            }
        }, "label")
    }
    hideMobileMenu() {
        const e = M.timeline({
            defaults: {
                ease: "power2"
            },
            onComplete: () => {
                this.isMenuVisible = !1,
                this.menuOverlay.stop(),
                M.set(S.navbarMenu, {
                    width: "0",
                    delay: .9
                })
            }
            ,
            onStart: () => {
                this.transformMobileToggle()
            }
        });
        e.addLabel("label"),
        e.to(S.navbarSocialItem, {
            y: "16px",
            opacity: 0,
            stagger: {
                each: .07,
                from: "end"
            }
        }, "label"),
        e.to(S.navItem, {
            y: "10vh",
            opacity: 0,
            delay: .2,
            duration: .8,
            stagger: {
                each: .07,
                from: "end"
            }
        }, "label")
    }
    toggleMobileMenu() {
        this.isMenuVisible ? this.hideMobileMenu() : this.showMobileMenu()
    }
    clickNavItem() {
        document.querySelectorAll(S.navItem).forEach(e => {
            e.addEventListener("click", () => {
                this.isMenuVisible && this.hideMobileMenu()
            }
            )
        }
        )
    }
    clickMobileToggle() {
        document.querySelector(S.navbarTgl).addEventListener("click", this.toggleMobileMenu.bind(this))
    }
    bindEvents() {
        this.clickMobileToggle(),
        this.clickNavItem()
    }
    toggleVisible(e, t) {
        M.set(e, {
            visibility: t ? "visible" : "hidden"
        })
    }
    showModControls(e=0) {
        M.to(S.viewModBtn, {
            x: "0",
            opacity: 1,
            stagger: .1,
            delay: e,
            duration: .8,
            ease: "power2",
            onStart: () => this.toggleVisible(S.viewModBtn, !0)
        })
    }
    hideModControls(e=0) {
        M.to(S.viewModBtn, {
            x: "2vw",
            opacity: 0,
            stagger: .1,
            delay: e,
            duration: .8,
            ease: "power2",
            onComplete: () => this.toggleVisible(S.viewModBtn, !1)
        })
    }
}
M.registerPlugin(H);
class wp {
    constructor() {
        this.init()
    }
    init() {
        this.titleTransform(S.titleAbout, {
            trigger: S.about,
            start: "top bottom",
            end: "top bottom"
        }),
        this.titleTransform(S.titleContacts, {
            trigger: S.contacts,
            start: "10% bottom",
            end: "10% bottom"
        })
    }
    resize() {
        window.addEventListener("resize", () => {
            this.init()
        }
        )
    }
    titleTransform(e, t) {
        const i = M.timeline({
            defaults: {
                ease: "power1.inOut",
                willChange: "filter, transform"
            },
            scrollTrigger: {
                trigger: t.trigger,
                scrub: 1,
                start: t.start,
                end: t.end
            }
        });
        i.addLabel("label"),
        i.to(S.titleShape, {
            yPercent: -10,
            opacity: 0,
            skewY: "4deg",
            filter: "blur(40px)"
        }, "label"),
        i.to(e, {
            filter: "blur(0px)",
            yPercent: 0,
            skewY: "0deg",
            opacity: 1,
            onComplete: () => {
                M.set(e, {
                    filter: "blur(0px)"
                })
            }
        }, "label")
    }
}
M.registerPlugin(H);
class bp {
    constructor() {
        ru.scrollEffect(),
        this.heroAnimation()
    }
    heroAnimation() {
        const e = M.timeline({
            defaults: {
                duration: 1.2,
                ease: "power1.inOut"
            },
            scrollTrigger: {
                trigger: S.hero,
                scrub: 1,
                start: "40% center",
                end: "center top"
            }
        });
        e.addLabel("label"),
        e.fromTo(S.introtext, {
            opacity: 1
        }, {
            opacity: .08
        }, "label"),
        e.fromTo(S.introTitleShape, {
            fill: "#292b34"
        }, {
            fill: "#E8E8E8"
        }, "label"),
        e.fromTo(S.hero, {
            opacity: 1
        }, {
            opacity: 0
        }, "label")
    }
}
M.registerPlugin(H);
class Tp {
    constructor() {
        this.pinIntrotext()
    }
    pinIntrotext() {
        const e = M.timeline({
            defaults: {
                duration: .01,
                ease: "expo"
            },
            scrollTrigger: {
                trigger: S.about,
                scrub: 0,
                start: "top bottom",
                end: "top bottom"
            }
        });
        e.to(S.introtext, {
            position: "absolute",
            translateY: "-100%",
            bottom: "inherit"
        }),
        e.to(S.introtext, {
            duration: .4,
            ease: "expo",
            opacity: 1
        })
    }
}
M.registerPlugin(H);
class Sp {
    constructor() {
        this.aboutTextEffect()
    }
    aboutTextEffect() {
        document.querySelector(".about").querySelectorAll(S.splitWords).forEach(t => {
            const i = t.querySelectorAll(".word");
            M.timeline({
                defaults: {
                    stagger: .04,
                    ease: "sine",
                    willChange: "filter, transform"
                }
            }).fromTo(i, {
                opacity: 0,
                y: "10px",
                filter: "blur(4px)"
            }, {
                opacity: 1,
                y: "0px",
                filter: "blur(0px)",
                scrollTrigger: {
                    trigger: t,
                    start: "top bottom",
                    end: "bottom bottom-=10%",
                    scrub: !0
                }
            })
        }
        )
    }
    contactTextEffect() {
        document.querySelector(".contacts").querySelectorAll(S.splitWords).forEach(t => {
            const i = t.querySelectorAll(".word");
            M.timeline({
                defaults: {
                    stagger: .04,
                    ease: "sine",
                    willChange: "filter, transform"
                }
            }).fromTo(i, {
                opacity: 0,
                y: "10px",
                filter: "blur(4px)"
            }, {
                opacity: 1,
                y: "0px",
                filter: "blur(0px)",
                scrollTrigger: {
                    trigger: t,
                    start: "top bottom",
                    end: "bottom bottom-=50%",
                    scrub: !0
                }
            })
        }
        )
    }
}
M.registerPlugin(H);
class Ep {
    constructor() {
        this.initAnimation(),
        window.addEventListener("resize", () => {
            this.initAnimation()
        }
        )
    }
    initAnimation() {
        const e = window.innerWidth < 1440;
        this.tl && this.tl.kill(),
        e && this.show({
            trigger: S.contacts,
            start: "top center",
            end: "top center"
        }),
        e || this.show({
            trigger: S.about,
            start: "top center",
            end: "top center"
        })
    }
    show(e) {
        this.tl = M.timeline({
            scrollTrigger: {
                trigger: e.trigger,
                scrub: 1.5,
                start: e.start,
                end: e.end
            }
        }),
        this.tl.fromTo(S.socialLinkItem, {
            x: "1vw",
            opacity: 0,
            filter: "blur(4px)",
            visibility: "hidden"
        }, {
            visibility: "visible",
            x: "0",
            opacity: 1,
            filter: "blur(0px)",
            stagger: .1,
            duration: .8,
            ease: "power2"
        })
    }
}
M.registerPlugin(H);
class Cp {
    constructor() {
        this.init(),
        window.addEventListener("resize", () => {}
        )
    }
    init() {
        new wp,
        new bp,
        new Tp,
        new Ep,
        ia( () => {
            new Sp
        }
        ),
        this.pinQuote(),
        this.animateQuote(),
        this.animateContactSection()
    }
    animateContactSection() {
        const e = [S.contactForm, S.contactBox];
        M.timeline({
            ease: "power4.inOut",
            scrollTrigger: {
                trigger: S.contacts,
                scrub: 3,
                start: "20% 100%",
                end: "60% 80%"
            }
        }).fromTo(e, {
            y: "4vw",
            opacity: 0,
            filter: "blur(4px)"
        }, {
            duration: 6,
            y: "0",
            opacity: 1,
            filter: "blur(0px)",
            stagger: {
                each: 1.2,
                from: "start"
            }
        })
    }
    animateQuote() {
        M.timeline({
            scrollTrigger: {
                trigger: S.about,
                scrub: 1,
                start: "top center",
                end: "center top"
            }
        }).fromTo(S.quote, {
            opacity: 0,
            yPercent: 10,
            ease: "power2.inOut"
        }, {
            opacity: .4,
            yPercent: 0,
            ease: "power2.inOut"
        }),
        M.timeline({
            scrollTrigger: {
                trigger: S.about,
                scrub: 1,
                start: "70% 10%",
                end: "90% top"
            }
        }).to(S.quote, {
            opacity: 0,
            yPercent: -10,
            ease: "power2.inOut"
        })
    }
    pinQuote() {
        M.timeline({
            scrollTrigger: {
                trigger: S.about,
                scrub: 0,
                start: "top bottom",
                end: "top bottom"
            }
        }).to(S.quote, {
            position: "fixed",
            top: 0
        })
    }
    previewSection() {}
    aboutSection() {
        this.aboutTextScrollEffect()
    }
    animatePreviewItems() {
        M.set(S.previewItemBg, {
            transformOrigin: "right center",
            force3D: !0,
            willChange: "transform"
        });
        let e = {
            scale: 1,
            opacity: 1
        }
          , t = M.quickSetter(S.previewItemBg, "scaleY")
          , i = M.utils.clamp(1, 1.2);
        M.timeline({
            scrollTrigger: {
                trigger: S.preview,
                endTrigger: S.about,
                scrub: 1,
                onUpdate: s => {
                    let r = Math.abs(s.getVelocity())
                      , a = i(1 + r / 1e4);
                    e.scale = a,
                    M.to(e, {
                        scale: 1,
                        duration: 1,
                        ease: "expo",
                        overwrite: !0,
                        onUpdate: () => {
                            t(e.scale)
                        }
                    })
                }
            }
        })
    }
    aboutTextScrollEffect() {
        document.querySelectorAll(S.splitWords).forEach(e => {
            const t = e.querySelectorAll(".word");
            M.timeline({
                defaults: {
                    stagger: .04,
                    ease: "sine",
                    willChange: "filter, transform"
                }
            }).fromTo(t, {
                opacity: 0,
                y: "10px",
                filter: "blur(4px)"
            }, {
                opacity: 1,
                y: "0px",
                filter: "blur(0px)",
                scrollTrigger: {
                    trigger: e,
                    start: "top bottom",
                    end: "bottom bottom-=10%",
                    scrub: !0
                }
            })
        }
        )
    }
    animateAbout() {
        this.pinQuote(),
        M.timeline({
            defaults: {
                duration: 1.2,
                ease: "power2.inOut"
            },
            scrollTrigger: {
                trigger: S.about,
                scrub: 1,
                toggleActions: "play none none reverse",
                start: "top bottom",
                end: "bottom top",
                onEnter: () => {
                    this.pinIntrotext(!0)
                }
                ,
                onLeaveBack: () => {
                    this.pinIntrotext(!1)
                }
            }
        })
    }
    animateShowcaseList() {}
    animateContacts() {}
    animateLastWork() {
        M.timeline({
            scrollTrigger: {
                trigger: ".works-section_lsat",
                scrub: .5,
                pin: !0,
                start: "10% top",
                end: "80% 20%"
            }
        }).to(".works-section_lsat .work-item", {
            scale: .5,
            opacity: 0
        })
    }
    animateAboutSection() {}
    contact() {
        M.timeline({
            defaults: {
                duration: 1.2,
                ease: "power2.inOut"
            },
            scrollTrigger: {
                trigger: ".contacts",
                scrub: 1,
                onEnter: () => {}
                ,
                onLeaveBack: () => {}
            }
        })
    }
    showcases() {
        M.timeline({
            defaults: {
                duration: 1.2,
                ease: "power2.inOut"
            },
            scrollTrigger: {
                trigger: ".showcases-wrapper",
                scrub: 1,
                onEnter: () => {}
                ,
                onLeaveBack: () => {}
            }
        }).to(".showcases", {})
    }
}
class Pp {
    constructor() {
        this.florenceTimezone = "Europe/Rome",
        this.locale = "en-US",
        this.displayLocalTime()
    }
    displayLocalTime() {
        const e = () => {
            const t = new Date().toLocaleTimeString(this.locale, {
                timeZone: this.florenceTimezone,
                hour: "2-digit",
                minute: "2-digit",
                hour12: !0
            }).replace("PM", "pm").replace("AM", "am");
            document.querySelector(".local-time").textContent = t
        }
        ;
        e(),
        setInterval(e, 1e3)
    }
}
class Mp {
    constructor() {
        this.appHash = window.location.hash,
        this.activeCase = null,
        this.textSplitter = new zd,
        this.ScrollAnimation = new Cp,
        this.setAppState({
            route: "home",
            state: "loading"
        }),
        this.config = {
            scrollDuration: 4,
            loadingDelay: .1
        },
        this.loader = new sd,
        this.caseList = new Bd,
        this.caseDetails = new Nd,
        this.caseGallery = new hp,
        this.caseNav = new Vd,
        this.router = new td({
            mode: "hash",
            root: "/"
        }),
        this.viewTransition = new Ru(S.viewTransition,{
            rows: 1,
            columns: 12,
            duration: .4,
            each: .04,
            startFrom: "start",
            stopFrom: "start"
        }),
        ia( () => {
            this.previewHover = new cp(S.previewItem,{
                textElements: [S.previewTitle, S.previewSubtitle]
            }),
            this.effectTextHover = new dp(S.textHover,{
                element: S.hoverEffectText
            }),
            this.cursor = new yp
        }
        ),
        this.navbar = new Dp,
        this.appInit(),
        this.localTime = new Pp
    }
    setAppState({route: e, state: t}={}) {
        e && (this.appRoute = e),
        t && (this.appState = t)
    }
    appInit() {
        this.bindEvents(),
        this.bindTargetActions(),
        this.appRoutes(),
        this.appLoader(),
        this.initCaseListItems(),
        ia( () => {
            this.initMagneticHero(),
            this.initMagneticItems(),
            this.initMagneticLogo(),
            this.initPreviewItems()
        }
        )
    }
    appLoader() {
        Oe.disable(),
        Oe.resetMainScroll(),
        this.loader.init( () => {
            this.viewTransition.start({
                delay: 1,
                filterOpacity: .1
            }),
            ru.introEffect({
                duration: 2,
                delay: .2
            }),
            this.appState === "loading" && this.navbar.showItems(1.8)
        }
        , this.config.loadingDelay),
        Oe.enableMainScroll()
    }
    appRoutes() {
        this.router.add(/^$/, () => this.home()),
        this.router.add(/home/, () => {
            window.location.pathname === "/" && this.home()
        }
        ),
        this.router.add(/about/, () => this.about()),
        this.router.add(/contact/, () => this.contact()),
        this.router.add(/works\/(.*)/, e => this.openCase(e)),
        this.router.add(/works/, () => this.openCaseList())
    }
    bindTargetActions() {
        this.targetAction("#home", () => {}
        ),
        this.targetAction("#about", () => {
            this.appRoute === "about" && Oe.to(S.aboutTrg, {
                duration: 1,
                delay: .2
            })
        }
        ),
        this.targetAction("#contact", () => {}
        )
    }
    targetAction(e, t) {
        const i = document.querySelector(`a[href="${e}"]`);
        i && i.addEventListener("click", s => {
            t()
        }
        )
    }
    resetAppState() {
        this.appState === "loading" && this.navbar.showItems(1.8),
        this.appRoute === "showcaseList" && (this.closeCaseList(),
        this.appState !== "showcase" && this.resetHash()),
        this.appState === "showcase" && (this.closeCase(),
        this.appRoute !== "showcaseList" && this.resetHash())
    }
    home() {
        this.resetAppState(),
        this.appState !== "showcase" && Oe.to(S.hero, {
            duration: this.config.scrollDuration,
            delay: .2
        }),
        this.setAppState({
            route: "home",
            state: "default"
        })
    }
    about() {
        this.resetAppState(),
        this.appRoute === "showcaseList" ? Oe.to(S.about, {
            duration: this.config.scrollDuration,
            delay: 1.3
        }) : Oe.to(S.about, {
            duration: this.config.scrollDuration,
            delay: .1
        }),
        Oe.enableMainScroll(),
        this.setAppState({
            route: "about",
            state: "default"
        })
    }
    contact() {
        this.resetAppState(),
        this.appRoute === "showcaseList" ? Oe.to(S.contacts, {
            duration: this.config.scrollDuration,
            delay: 1.3
        }) : Oe.to(S.contacts, {
            duration: this.config.scrollDuration,
            delay: .1
        }),
        Oe.enableMainScroll(),
        this.setAppState({
            route: "contact",
            state: "default"
        })
    }
    openCaseList() {
        this.resetAppState(),
        this.caseDetails.hide(),
        this.viewTransition.start({
            delay: 1.5,
            filterOpacity: .5
        }),
        setTimeout( () => {
            Oe.resetMainScroll()
        }
        , 600),
        this.caseList.show(.8),
        this.navbar.showBg(.8),
        this.setAppState({
            route: "showcaseList"
        })
    }
    closeCaseList() {
        this.viewTransition.start({
            delay: 1.2,
            filterOpacity: .5
        }),
        this.caseList.hide(.8),
        this.navbar.hideBg(1.2)
    }
    openCase(e) {
        this.appRoute === "showcaseList" && this.caseList.hide(),
        this.setActiveCase(e),
        this.caseNav.update(this.activeCase),
        this.viewTransition.start({
            delay: 1,
            filterOpacity: .5
        }),
        this.caseGallery.newInstance(this.activeCase, .9),
        this.caseDetails.show(this.activeCase, 1),
        Oe.to(S.cases, {
            duration: .1,
            delay: 1.1
        }),
        this.appState !== "showcase" && (Oe.saveCurrentScroll(),
        this.caseNav.show(1.8),
        this.navbar.hideItems(.5),
        this.navbar.showBg(2),
        this.navbar.showCloseBtn(1.5)),
        this.setAppState({
            state: "showcase"
        })
    }
    closeCase() {
        this.viewTransition.start({
            delay: 1.8,
            filterOpacity: .5,
            filterDuration: 4
        }),
        this.caseDetails.hide(0),
        Oe.scrollBack(1.2),
        this.caseGallery.setNormalMode(),
        this.caseNav.hide(.5),
        this.navbar.hideCloseBtn(.5),
        this.navbar.showItems(1.2),
        this.navbar.hideBg(1.2),
        this.caseGallery.destroy(1),
        this.setAppState({
            state: "default"
        })
    }
    bindEvents() {
        this.bindCloseCase()
    }
    bindCloseCase() {
        document.querySelector(S.navbarCloseBtn).addEventListener("click", () => {
            this.appRoute !== "showcaseList" && this.home(),
            this.appRoute === "showcaseList" && this.router.navigate("works")
        }
        )
    }
    resetHash() {
        window.history.pushState ? window.history.pushState("", "/", window.location.pathname) : window.location.hash = ""
    }
    setActiveCase(e) {
        this.casesListContainer = document.querySelector(S.casesContent),
        this.activeCase = this.casesListContainer.querySelector(`[data-slug="${e}"]`)
    }
    initPreviewItems() {
        const e = document.querySelectorAll(S.previewItem)
          , t = document.querySelectorAll(S.previewItemInfo);
        e.forEach(i => {
            new fp(i),
            new Yr(i,{
                maxDistance: 56,
                duration: 1.5,
                parallax: !0,
                parallaxEl: t
            })
        }
        )
    }
    initMagneticHero() {
        const e = document.querySelector(S.heroBg);
        new Yr(e,{
            target: window,
            maxDistance: 24,
            duration: 2.8,
            ease: "power1.out"
        })
    }
    initMagneticLogo() {
        const e = document.querySelector(S.navbarLogo);
        new Yr(e,{
            maxDistance: 24,
            duration: 1.2
        })
    }
    initMagneticItems() {
        const e = [S.navItemValue, S.navbarCloseBtnValue, S.socialLinkValue, S.casesNavBtn, S.button];
        document.querySelectorAll(e).forEach(i => {
            new Yr(i,{
                maxDistance: 8,
                duration: 1.2
            })
        }
        )
    }
    initCaseListItems() {
        document.querySelectorAll(S.caseItem).forEach(e => {
            new pp(e)
        }
        )
    }
}
new Mp;
