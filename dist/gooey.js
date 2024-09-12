import { ref as B, computed as M, defineComponent as C, openBlock as y, createBlock as _, unref as l, withCtx as w, createElementBlock as J, Fragment as Qe, renderList as wn, mergeProps as $, createElementVNode as ce, resolveDynamicComponent as At, normalizeClass as Ot, createCommentVNode as ie, createTextVNode as ht, toDisplayString as et, isVNode as Jo, createVNode as V, shallowRef as Wn, watch as X, getCurrentScope as jn, onScopeDispose as Kn, shallowReadonly as Ve, getCurrentInstance as Ie, toRef as Qo, camelize as Gn, Comment as er, cloneVNode as tr, h as je, toRefs as Oe, renderSlot as P, onMounted as fe, normalizeProps as W, guardReactiveProps as K, reactive as Un, watchEffect as te, markRaw as nr, isRef as Hn, nextTick as re, withKeys as or, normalizeStyle as Xt, effectScope as qn, toHandlerKey as rr, onUnmounted as He, Teleport as Xn, withModifiers as yt, inject as Yn, provide as Zn, readonly as Yt, onBeforeUpdate as sr, onUpdated as ar, mergeDefaults as Jn, onBeforeUnmount as ir, watchPostEffect as lr, customRef as ur } from "vue";
var Qn = {}, eo = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return n;
    }
  });
  function t(o, r) {
    return {
      handler: o,
      config: r
    };
  }
  t.withOptions = function(o, r = () => ({})) {
    const s = function(a) {
      return {
        __options: a,
        handler: o(a),
        config: r(a)
      };
    };
    return s.__isOptionsFunction = !0, s.__pluginFunction = o, s.__configFunction = r, s;
  };
  const n = t;
})(eo);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return o;
    }
  });
  const t = /* @__PURE__ */ n(eo);
  function n(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  const o = t.default;
})(Qn);
let Bt = Qn;
var cr = (Bt.__esModule ? Bt : { default: Bt }).default;
cr.withOptions(
  function() {
    return function() {
    };
  },
  function(e = {}) {
    return {
      theme: {
        extend: {
          colors: {
            ...e == null ? void 0 : e.colors
          }
        }
      }
    };
  }
);
const dr = 3, pr = 1e6, be = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST"
};
let St = 0;
function fr() {
  return St = (St + 1) % Number.MAX_VALUE, St.toString();
}
const Dt = /* @__PURE__ */ new Map();
function bn(e) {
  if (Dt.has(e))
    return;
  const t = setTimeout(() => {
    Dt.delete(e), tt({
      type: be.REMOVE_TOAST,
      toastId: e
    });
  }, pr);
  Dt.set(e, t);
}
const le = B({
  toasts: []
});
function tt(e) {
  switch (e.type) {
    case be.ADD_TOAST:
      le.value.toasts = [e.toast, ...le.value.toasts].slice(0, dr);
      break;
    case be.UPDATE_TOAST:
      le.value.toasts = le.value.toasts.map(
        (t) => t.id === e.toast.id ? { ...t, ...e.toast } : t
      );
      break;
    case be.DISMISS_TOAST: {
      const { toastId: t } = e;
      t ? bn(t) : le.value.toasts.forEach((n) => {
        bn(n.id);
      }), le.value.toasts = le.value.toasts.map(
        (n) => n.id === t || t === void 0 ? {
          ...n,
          open: !1
        } : n
      );
      break;
    }
    case be.REMOVE_TOAST:
      e.toastId === void 0 ? le.value.toasts = [] : le.value.toasts = le.value.toasts.filter((t) => t.id !== e.toastId);
      break;
  }
}
function to() {
  return {
    toasts: M(() => le.value.toasts),
    toast: mr,
    dismiss: (e) => tt({ type: be.DISMISS_TOAST, toastId: e })
  };
}
function mr(e) {
  const t = fr(), n = (r) => tt({
    type: be.UPDATE_TOAST,
    toast: { ...r, id: t }
  }), o = () => tt({ type: be.DISMISS_TOAST, toastId: t });
  return tt({
    type: be.ADD_TOAST,
    toast: {
      ...e,
      id: t,
      open: !0,
      onOpenChange: (r) => {
        r || o();
      }
    }
  }), {
    id: t,
    dismiss: o,
    update: n
  };
}
const vr = { class: "flex items-start space-x-3" }, gr = { class: "grid gap-1" }, hr = /* @__PURE__ */ C({
  __name: "Toaster",
  setup(e) {
    const { toasts: t } = to();
    return (n, o) => (y(), _(l(El), null, {
      default: w(() => [
        (y(!0), J(Qe, null, wn(l(t), (r) => (y(), _(l(yl), $({
          key: r.id,
          ref_for: !0
        }, r), {
          default: w(() => [
            ce("div", vr, [
              r.icon ? (y(), _(At(r.icon), {
                key: 0,
                class: Ot(["h-6 w-6", r.iconClasses])
              }, null, 8, ["class"])) : ie("", !0),
              ce("div", gr, [
                r.title ? (y(), _(l(Ol), { key: 0 }, {
                  default: w(() => [
                    ht(et(r.title), 1)
                  ]),
                  _: 2
                }, 1024)) : ie("", !0),
                r.description ? (y(), J(Qe, { key: 1 }, [
                  Jo(r.description) ? (y(), _(l(Fn), { key: 0 }, {
                    default: w(() => [
                      (y(), _(At(r.description)))
                    ]),
                    _: 2
                  }, 1024)) : (y(), _(l(Fn), { key: 1 }, {
                    default: w(() => [
                      ht(et(r.description), 1)
                    ]),
                    _: 2
                  }, 1024))
                ], 64)) : ie("", !0),
                r.messages ? (y(!0), J(Qe, { key: 2 }, wn(r.messages, (s, a) => (y(), J("p", {
                  key: a,
                  class: "text-sm opacity-90"
                }, et(s), 1))), 128)) : ie("", !0),
                V(l(Cl))
              ])
            ]),
            (y(), _(At(r.action)))
          ]),
          _: 2
        }, 1040))), 128)),
        V(l(wl))
      ]),
      _: 1
    }));
  }
}), yr = ["top", "right", "bottom", "left"];
const me = Math.min, oe = Math.max, wt = Math.round, ct = Math.floor, Se = (e) => ({
  x: e,
  y: e
}), wr = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, br = {
  start: "end",
  end: "start"
};
function Nt(e, t, n) {
  return oe(e, me(t, n));
}
function xe(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function _e(e) {
  return e.split("-")[0];
}
function qe(e) {
  return e.split("-")[1];
}
function Zt(e) {
  return e === "x" ? "y" : "x";
}
function Jt(e) {
  return e === "y" ? "height" : "width";
}
function De(e) {
  return ["top", "bottom"].includes(_e(e)) ? "y" : "x";
}
function Qt(e) {
  return Zt(De(e));
}
function xr(e, t, n) {
  n === void 0 && (n = !1);
  const o = qe(e), r = Qt(e), s = Jt(r);
  let a = r === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (a = bt(a)), [a, bt(a)];
}
function _r(e) {
  const t = bt(e);
  return [Vt(e), t, Vt(t)];
}
function Vt(e) {
  return e.replace(/start|end/g, (t) => br[t]);
}
function Cr(e, t, n) {
  const o = ["left", "right"], r = ["right", "left"], s = ["top", "bottom"], a = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? r : o : t ? o : r;
    case "left":
    case "right":
      return t ? s : a;
    default:
      return [];
  }
}
function Or(e, t, n, o) {
  const r = qe(e);
  let s = Cr(_e(e), n === "start", o);
  return r && (s = s.map((a) => a + "-" + r), t && (s = s.concat(s.map(Vt)))), s;
}
function bt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => wr[t]);
}
function Er(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function no(e) {
  return typeof e != "number" ? Er(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function xt(e) {
  const {
    x: t,
    y: n,
    width: o,
    height: r
  } = e;
  return {
    width: o,
    height: r,
    top: n,
    left: t,
    right: t + o,
    bottom: n + r,
    x: t,
    y: n
  };
}
function xn(e, t, n) {
  let {
    reference: o,
    floating: r
  } = e;
  const s = De(t), a = Qt(t), i = Jt(a), u = _e(t), c = s === "y", p = o.x + o.width / 2 - r.width / 2, d = o.y + o.height / 2 - r.height / 2, f = o[i] / 2 - r[i] / 2;
  let m;
  switch (u) {
    case "top":
      m = {
        x: p,
        y: o.y - r.height
      };
      break;
    case "bottom":
      m = {
        x: p,
        y: o.y + o.height
      };
      break;
    case "right":
      m = {
        x: o.x + o.width,
        y: d
      };
      break;
    case "left":
      m = {
        x: o.x - r.width,
        y: d
      };
      break;
    default:
      m = {
        x: o.x,
        y: o.y
      };
  }
  switch (qe(t)) {
    case "start":
      m[a] -= f * (n && c ? -1 : 1);
      break;
    case "end":
      m[a] += f * (n && c ? -1 : 1);
      break;
  }
  return m;
}
const Pr = async (e, t, n) => {
  const {
    placement: o = "bottom",
    strategy: r = "absolute",
    middleware: s = [],
    platform: a
  } = n, i = s.filter(Boolean), u = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let c = await a.getElementRects({
    reference: e,
    floating: t,
    strategy: r
  }), {
    x: p,
    y: d
  } = xn(c, o, u), f = o, m = {}, v = 0;
  for (let g = 0; g < i.length; g++) {
    const {
      name: h,
      fn: b
    } = i[g], {
      x,
      y: E,
      data: T,
      reset: A
    } = await b({
      x: p,
      y: d,
      initialPlacement: o,
      placement: f,
      strategy: r,
      middlewareData: m,
      rects: c,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    p = x != null ? x : p, d = E != null ? E : d, m = {
      ...m,
      [h]: {
        ...m[h],
        ...T
      }
    }, A && v <= 50 && (v++, typeof A == "object" && (A.placement && (f = A.placement), A.rects && (c = A.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: r
    }) : A.rects), {
      x: p,
      y: d
    } = xn(c, f, u)), g = -1);
  }
  return {
    x: p,
    y: d,
    placement: f,
    strategy: r,
    middlewareData: m
  };
};
async function nt(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: o,
    y: r,
    platform: s,
    rects: a,
    elements: i,
    strategy: u
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: p = "viewport",
    elementContext: d = "floating",
    altBoundary: f = !1,
    padding: m = 0
  } = xe(t, e), v = no(m), h = i[f ? d === "floating" ? "reference" : "floating" : d], b = xt(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(h))) == null || n ? h : h.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(i.floating)),
    boundary: c,
    rootBoundary: p,
    strategy: u
  })), x = d === "floating" ? {
    x: o,
    y: r,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, E = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(i.floating)), T = await (s.isElement == null ? void 0 : s.isElement(E)) ? await (s.getScale == null ? void 0 : s.getScale(E)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, A = xt(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: x,
    offsetParent: E,
    strategy: u
  }) : x);
  return {
    top: (b.top - A.top + v.top) / T.y,
    bottom: (A.bottom - b.bottom + v.bottom) / T.y,
    left: (b.left - A.left + v.left) / T.x,
    right: (A.right - b.right + v.right) / T.x
  };
}
const Tr = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: o,
      placement: r,
      rects: s,
      platform: a,
      elements: i,
      middlewareData: u
    } = t, {
      element: c,
      padding: p = 0
    } = xe(e, t) || {};
    if (c == null)
      return {};
    const d = no(p), f = {
      x: n,
      y: o
    }, m = Qt(r), v = Jt(m), g = await a.getDimensions(c), h = m === "y", b = h ? "top" : "left", x = h ? "bottom" : "right", E = h ? "clientHeight" : "clientWidth", T = s.reference[v] + s.reference[m] - f[m] - s.floating[v], A = f[m] - s.reference[m], k = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(c));
    let R = k ? k[E] : 0;
    (!R || !await (a.isElement == null ? void 0 : a.isElement(k))) && (R = i.floating[E] || s.floating[v]);
    const z = T / 2 - A / 2, N = R / 2 - g[v] / 2 - 1, O = me(d[b], N), D = me(d[x], N), S = O, G = R - g[v] - D, F = R / 2 - g[v] / 2 + z, Y = Nt(S, F, G), q = !u.arrow && qe(r) != null && F !== Y && s.reference[v] / 2 - (F < S ? O : D) - g[v] / 2 < 0, ne = q ? F < S ? F - S : F - G : 0;
    return {
      [m]: f[m] + ne,
      data: {
        [m]: Y,
        centerOffset: F - Y - ne,
        ...q && {
          alignmentOffset: ne
        }
      },
      reset: q
    };
  }
});
const Ar = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: r,
        middlewareData: s,
        rects: a,
        initialPlacement: i,
        platform: u,
        elements: c
      } = t, {
        mainAxis: p = !0,
        crossAxis: d = !0,
        fallbackPlacements: f,
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: g = !0,
        ...h
      } = xe(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const b = _e(r), x = De(i), E = _e(i) === i, T = await (u.isRTL == null ? void 0 : u.isRTL(c.floating)), A = f || (E || !g ? [bt(i)] : _r(i)), k = v !== "none";
      !f && k && A.push(...Or(i, g, v, T));
      const R = [i, ...A], z = await nt(t, h), N = [];
      let O = ((o = s.flip) == null ? void 0 : o.overflows) || [];
      if (p && N.push(z[b]), d) {
        const F = xr(r, a, T);
        N.push(z[F[0]], z[F[1]]);
      }
      if (O = [...O, {
        placement: r,
        overflows: N
      }], !N.every((F) => F <= 0)) {
        var D, S;
        const F = (((D = s.flip) == null ? void 0 : D.index) || 0) + 1, Y = R[F];
        if (Y)
          return {
            data: {
              index: F,
              overflows: O
            },
            reset: {
              placement: Y
            }
          };
        let q = (S = O.filter((ne) => ne.overflows[0] <= 0).sort((ne, ae) => ne.overflows[1] - ae.overflows[1])[0]) == null ? void 0 : S.placement;
        if (!q)
          switch (m) {
            case "bestFit": {
              var G;
              const ne = (G = O.filter((ae) => {
                if (k) {
                  const ee = De(ae.placement);
                  return ee === x || ee === "y";
                }
                return !0;
              }).map((ae) => [ae.placement, ae.overflows.filter((ee) => ee > 0).reduce((ee, ut) => ee + ut, 0)]).sort((ae, ee) => ae[1] - ee[1])[0]) == null ? void 0 : G[0];
              ne && (q = ne);
              break;
            }
            case "initialPlacement":
              q = i;
              break;
          }
        if (r !== q)
          return {
            reset: {
              placement: q
            }
          };
      }
      return {};
    }
  };
};
function _n(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Cn(e) {
  return yr.some((t) => e[t] >= 0);
}
const Br = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: o = "referenceHidden",
        ...r
      } = xe(e, t);
      switch (o) {
        case "referenceHidden": {
          const s = await nt(t, {
            ...r,
            elementContext: "reference"
          }), a = _n(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: Cn(a)
            }
          };
        }
        case "escaped": {
          const s = await nt(t, {
            ...r,
            altBoundary: !0
          }), a = _n(s, n.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: Cn(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Sr(e, t) {
  const {
    placement: n,
    platform: o,
    elements: r
  } = e, s = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), a = _e(n), i = qe(n), u = De(n) === "y", c = ["left", "top"].includes(a) ? -1 : 1, p = s && u ? -1 : 1, d = xe(t, e);
  let {
    mainAxis: f,
    crossAxis: m,
    alignmentAxis: v
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...d
  };
  return i && typeof v == "number" && (m = i === "end" ? v * -1 : v), u ? {
    x: m * p,
    y: f * c
  } : {
    x: f * c,
    y: m * p
  };
}
const Dr = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, o;
      const {
        x: r,
        y: s,
        placement: a,
        middlewareData: i
      } = t, u = await Sr(t, e);
      return a === ((n = i.offset) == null ? void 0 : n.placement) && (o = i.arrow) != null && o.alignmentOffset ? {} : {
        x: r + u.x,
        y: s + u.y,
        data: {
          ...u,
          placement: a
        }
      };
    }
  };
}, Mr = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: o,
        placement: r
      } = t, {
        mainAxis: s = !0,
        crossAxis: a = !1,
        limiter: i = {
          fn: (h) => {
            let {
              x: b,
              y: x
            } = h;
            return {
              x: b,
              y: x
            };
          }
        },
        ...u
      } = xe(e, t), c = {
        x: n,
        y: o
      }, p = await nt(t, u), d = De(_e(r)), f = Zt(d);
      let m = c[f], v = c[d];
      if (s) {
        const h = f === "y" ? "top" : "left", b = f === "y" ? "bottom" : "right", x = m + p[h], E = m - p[b];
        m = Nt(x, m, E);
      }
      if (a) {
        const h = d === "y" ? "top" : "left", b = d === "y" ? "bottom" : "right", x = v + p[h], E = v - p[b];
        v = Nt(x, v, E);
      }
      const g = i.fn({
        ...t,
        [f]: m,
        [d]: v
      });
      return {
        ...g,
        data: {
          x: g.x - n,
          y: g.y - o
        }
      };
    }
  };
}, kr = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: o,
        placement: r,
        rects: s,
        middlewareData: a
      } = t, {
        offset: i = 0,
        mainAxis: u = !0,
        crossAxis: c = !0
      } = xe(e, t), p = {
        x: n,
        y: o
      }, d = De(r), f = Zt(d);
      let m = p[f], v = p[d];
      const g = xe(i, t), h = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (u) {
        const E = f === "y" ? "height" : "width", T = s.reference[f] - s.floating[E] + h.mainAxis, A = s.reference[f] + s.reference[E] - h.mainAxis;
        m < T ? m = T : m > A && (m = A);
      }
      if (c) {
        var b, x;
        const E = f === "y" ? "width" : "height", T = ["top", "left"].includes(_e(r)), A = s.reference[d] - s.floating[E] + (T && ((b = a.offset) == null ? void 0 : b[d]) || 0) + (T ? 0 : h.crossAxis), k = s.reference[d] + s.reference[E] + (T ? 0 : ((x = a.offset) == null ? void 0 : x[d]) || 0) - (T ? h.crossAxis : 0);
        v < A ? v = A : v > k && (v = k);
      }
      return {
        [f]: m,
        [d]: v
      };
    }
  };
}, $r = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: n,
        rects: o,
        platform: r,
        elements: s
      } = t, {
        apply: a = () => {
        },
        ...i
      } = xe(e, t), u = await nt(t, i), c = _e(n), p = qe(n), d = De(n) === "y", {
        width: f,
        height: m
      } = o.floating;
      let v, g;
      c === "top" || c === "bottom" ? (v = c, g = p === (await (r.isRTL == null ? void 0 : r.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (g = c, v = p === "end" ? "top" : "bottom");
      const h = m - u.top - u.bottom, b = f - u.left - u.right, x = me(m - u[v], h), E = me(f - u[g], b), T = !t.middlewareData.shift;
      let A = x, k = E;
      if (d ? k = p || T ? me(E, b) : b : A = p || T ? me(x, h) : h, T && !p) {
        const z = oe(u.left, 0), N = oe(u.right, 0), O = oe(u.top, 0), D = oe(u.bottom, 0);
        d ? k = f - 2 * (z !== 0 || N !== 0 ? z + N : oe(u.left, u.right)) : A = m - 2 * (O !== 0 || D !== 0 ? O + D : oe(u.top, u.bottom));
      }
      await a({
        ...t,
        availableWidth: k,
        availableHeight: A
      });
      const R = await r.getDimensions(s.floating);
      return f !== R.width || m !== R.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Le(e) {
  return en(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function se(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ee(e) {
  var t;
  return (t = (en(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function en(e) {
  return e instanceof Node || e instanceof se(e).Node;
}
function de(e) {
  return e instanceof Element || e instanceof se(e).Element;
}
function ve(e) {
  return e instanceof HTMLElement || e instanceof se(e).HTMLElement;
}
function On(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof se(e).ShadowRoot;
}
function st(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: r
  } = pe(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(r);
}
function Rr(e) {
  return ["table", "td", "th"].includes(Le(e));
}
function Et(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function tn(e) {
  const t = nn(), n = de(e) ? pe(e) : e;
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function Ir(e) {
  let t = Me(e);
  for (; ve(t) && !Ue(t); ) {
    if (tn(t))
      return t;
    if (Et(t))
      return null;
    t = Me(t);
  }
  return null;
}
function nn() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ue(e) {
  return ["html", "body", "#document"].includes(Le(e));
}
function pe(e) {
  return se(e).getComputedStyle(e);
}
function Pt(e) {
  return de(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Me(e) {
  if (Le(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || On(e) && e.host || Ee(e);
  return On(t) ? t.host : t;
}
function oo(e) {
  const t = Me(e);
  return Ue(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ve(t) && st(t) ? t : oo(t);
}
function ot(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const r = oo(e), s = r === ((o = e.ownerDocument) == null ? void 0 : o.body), a = se(r);
  if (s) {
    const i = zt(a);
    return t.concat(a, a.visualViewport || [], st(r) ? r : [], i && n ? ot(i) : []);
  }
  return t.concat(r, ot(r, [], n));
}
function zt(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function ro(e) {
  const t = pe(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const r = ve(e), s = r ? e.offsetWidth : n, a = r ? e.offsetHeight : o, i = wt(n) !== s || wt(o) !== a;
  return i && (n = s, o = a), {
    width: n,
    height: o,
    $: i
  };
}
function on(e) {
  return de(e) ? e : e.contextElement;
}
function Ke(e) {
  const t = on(e);
  if (!ve(t))
    return Se(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: r,
    $: s
  } = ro(t);
  let a = (s ? wt(n.width) : n.width) / o, i = (s ? wt(n.height) : n.height) / r;
  return (!a || !Number.isFinite(a)) && (a = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: a,
    y: i
  };
}
const Lr = /* @__PURE__ */ Se(0);
function so(e) {
  const t = se(e);
  return !nn() || !t.visualViewport ? Lr : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Fr(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== se(e) ? !1 : t;
}
function $e(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), s = on(e);
  let a = Se(1);
  t && (o ? de(o) && (a = Ke(o)) : a = Ke(e));
  const i = Fr(s, n, o) ? so(s) : Se(0);
  let u = (r.left + i.x) / a.x, c = (r.top + i.y) / a.y, p = r.width / a.x, d = r.height / a.y;
  if (s) {
    const f = se(s), m = o && de(o) ? se(o) : o;
    let v = f, g = zt(v);
    for (; g && o && m !== v; ) {
      const h = Ke(g), b = g.getBoundingClientRect(), x = pe(g), E = b.left + (g.clientLeft + parseFloat(x.paddingLeft)) * h.x, T = b.top + (g.clientTop + parseFloat(x.paddingTop)) * h.y;
      u *= h.x, c *= h.y, p *= h.x, d *= h.y, u += E, c += T, v = se(g), g = zt(v);
    }
  }
  return xt({
    width: p,
    height: d,
    x: u,
    y: c
  });
}
function Nr(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: o,
    strategy: r
  } = e;
  const s = r === "fixed", a = Ee(o), i = t ? Et(t.floating) : !1;
  if (o === a || i && s)
    return n;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = Se(1);
  const p = Se(0), d = ve(o);
  if ((d || !d && !s) && ((Le(o) !== "body" || st(a)) && (u = Pt(o)), ve(o))) {
    const f = $e(o);
    c = Ke(o), p.x = f.x + o.clientLeft, p.y = f.y + o.clientTop;
  }
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - u.scrollLeft * c.x + p.x,
    y: n.y * c.y - u.scrollTop * c.y + p.y
  };
}
function Vr(e) {
  return Array.from(e.getClientRects());
}
function ao(e) {
  return $e(Ee(e)).left + Pt(e).scrollLeft;
}
function zr(e) {
  const t = Ee(e), n = Pt(e), o = e.ownerDocument.body, r = oe(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), s = oe(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let a = -n.scrollLeft + ao(e);
  const i = -n.scrollTop;
  return pe(o).direction === "rtl" && (a += oe(t.clientWidth, o.clientWidth) - r), {
    width: r,
    height: s,
    x: a,
    y: i
  };
}
function Wr(e, t) {
  const n = se(e), o = Ee(e), r = n.visualViewport;
  let s = o.clientWidth, a = o.clientHeight, i = 0, u = 0;
  if (r) {
    s = r.width, a = r.height;
    const c = nn();
    (!c || c && t === "fixed") && (i = r.offsetLeft, u = r.offsetTop);
  }
  return {
    width: s,
    height: a,
    x: i,
    y: u
  };
}
function jr(e, t) {
  const n = $e(e, !0, t === "fixed"), o = n.top + e.clientTop, r = n.left + e.clientLeft, s = ve(e) ? Ke(e) : Se(1), a = e.clientWidth * s.x, i = e.clientHeight * s.y, u = r * s.x, c = o * s.y;
  return {
    width: a,
    height: i,
    x: u,
    y: c
  };
}
function En(e, t, n) {
  let o;
  if (t === "viewport")
    o = Wr(e, n);
  else if (t === "document")
    o = zr(Ee(e));
  else if (de(t))
    o = jr(t, n);
  else {
    const r = so(e);
    o = {
      ...t,
      x: t.x - r.x,
      y: t.y - r.y
    };
  }
  return xt(o);
}
function io(e, t) {
  const n = Me(e);
  return n === t || !de(n) || Ue(n) ? !1 : pe(n).position === "fixed" || io(n, t);
}
function Kr(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = ot(e, [], !1).filter((i) => de(i) && Le(i) !== "body"), r = null;
  const s = pe(e).position === "fixed";
  let a = s ? Me(e) : e;
  for (; de(a) && !Ue(a); ) {
    const i = pe(a), u = tn(a);
    !u && i.position === "fixed" && (r = null), (s ? !u && !r : !u && i.position === "static" && !!r && ["absolute", "fixed"].includes(r.position) || st(a) && !u && io(e, a)) ? o = o.filter((p) => p !== a) : r = i, a = Me(a);
  }
  return t.set(e, o), o;
}
function Gr(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: r
  } = e;
  const a = [...n === "clippingAncestors" ? Et(t) ? [] : Kr(t, this._c) : [].concat(n), o], i = a[0], u = a.reduce((c, p) => {
    const d = En(t, p, r);
    return c.top = oe(d.top, c.top), c.right = me(d.right, c.right), c.bottom = me(d.bottom, c.bottom), c.left = oe(d.left, c.left), c;
  }, En(t, i, r));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function Ur(e) {
  const {
    width: t,
    height: n
  } = ro(e);
  return {
    width: t,
    height: n
  };
}
function Hr(e, t, n) {
  const o = ve(t), r = Ee(t), s = n === "fixed", a = $e(e, !0, s, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = Se(0);
  if (o || !o && !s)
    if ((Le(t) !== "body" || st(r)) && (i = Pt(t)), o) {
      const d = $e(t, !0, s, t);
      u.x = d.x + t.clientLeft, u.y = d.y + t.clientTop;
    } else
      r && (u.x = ao(r));
  const c = a.left + i.scrollLeft - u.x, p = a.top + i.scrollTop - u.y;
  return {
    x: c,
    y: p,
    width: a.width,
    height: a.height
  };
}
function Mt(e) {
  return pe(e).position === "static";
}
function Pn(e, t) {
  return !ve(e) || pe(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function lo(e, t) {
  const n = se(e);
  if (Et(e))
    return n;
  if (!ve(e)) {
    let r = Me(e);
    for (; r && !Ue(r); ) {
      if (de(r) && !Mt(r))
        return r;
      r = Me(r);
    }
    return n;
  }
  let o = Pn(e, t);
  for (; o && Rr(o) && Mt(o); )
    o = Pn(o, t);
  return o && Ue(o) && Mt(o) && !tn(o) ? n : o || Ir(e) || n;
}
const qr = async function(e) {
  const t = this.getOffsetParent || lo, n = this.getDimensions, o = await n(e.floating);
  return {
    reference: Hr(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function Xr(e) {
  return pe(e).direction === "rtl";
}
const Yr = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Nr,
  getDocumentElement: Ee,
  getClippingRect: Gr,
  getOffsetParent: lo,
  getElementRects: qr,
  getClientRects: Vr,
  getDimensions: Ur,
  getScale: Ke,
  isElement: de,
  isRTL: Xr
};
function Zr(e, t) {
  let n = null, o;
  const r = Ee(e);
  function s() {
    var i;
    clearTimeout(o), (i = n) == null || i.disconnect(), n = null;
  }
  function a(i, u) {
    i === void 0 && (i = !1), u === void 0 && (u = 1), s();
    const {
      left: c,
      top: p,
      width: d,
      height: f
    } = e.getBoundingClientRect();
    if (i || t(), !d || !f)
      return;
    const m = ct(p), v = ct(r.clientWidth - (c + d)), g = ct(r.clientHeight - (p + f)), h = ct(c), x = {
      rootMargin: -m + "px " + -v + "px " + -g + "px " + -h + "px",
      threshold: oe(0, me(1, u)) || 1
    };
    let E = !0;
    function T(A) {
      const k = A[0].intersectionRatio;
      if (k !== u) {
        if (!E)
          return a();
        k ? a(!1, k) : o = setTimeout(() => {
          a(!1, 1e-7);
        }, 1e3);
      }
      E = !1;
    }
    try {
      n = new IntersectionObserver(T, {
        ...x,
        root: r.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(T, x);
    }
    n.observe(e);
  }
  return a(!0), s;
}
function Jr(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: s = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = o, c = on(e), p = r || s ? [...c ? ot(c) : [], ...ot(t)] : [];
  p.forEach((b) => {
    r && b.addEventListener("scroll", n, {
      passive: !0
    }), s && b.addEventListener("resize", n);
  });
  const d = c && i ? Zr(c, n) : null;
  let f = -1, m = null;
  a && (m = new ResizeObserver((b) => {
    let [x] = b;
    x && x.target === c && m && (m.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var E;
      (E = m) == null || E.observe(t);
    })), n();
  }), c && !u && m.observe(c), m.observe(t));
  let v, g = u ? $e(e) : null;
  u && h();
  function h() {
    const b = $e(e);
    g && (b.x !== g.x || b.y !== g.y || b.width !== g.width || b.height !== g.height) && n(), g = b, v = requestAnimationFrame(h);
  }
  return n(), () => {
    var b;
    p.forEach((x) => {
      r && x.removeEventListener("scroll", n), s && x.removeEventListener("resize", n);
    }), d == null || d(), (b = m) == null || b.disconnect(), m = null, u && cancelAnimationFrame(v);
  };
}
const Qr = Dr, es = Mr, Tn = Ar, ts = $r, ns = Br, os = Tr, rs = kr, ss = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), r = {
    platform: Yr,
    ...n
  }, s = {
    ...r.platform,
    _c: o
  };
  return Pr(e, t, {
    ...r,
    platform: s
  });
};
function as(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function Wt(e) {
  if (as(e)) {
    const t = e.$el;
    return en(t) && Le(t) === "#comment" ? null : t;
  }
  return e;
}
function We(e) {
  return typeof e == "function" ? e() : l(e);
}
function is(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const n = Wt(We(e.element));
      return n == null ? {} : os({
        element: n,
        padding: e.padding
      }).fn(t);
    }
  };
}
function uo(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function An(e, t) {
  const n = uo(e);
  return Math.round(t * n) / n;
}
function ls(e, t, n) {
  n === void 0 && (n = {});
  const o = n.whileElementsMounted, r = M(() => {
    var R;
    return (R = We(n.open)) != null ? R : !0;
  }), s = M(() => We(n.middleware)), a = M(() => {
    var R;
    return (R = We(n.placement)) != null ? R : "bottom";
  }), i = M(() => {
    var R;
    return (R = We(n.strategy)) != null ? R : "absolute";
  }), u = M(() => {
    var R;
    return (R = We(n.transform)) != null ? R : !0;
  }), c = M(() => Wt(e.value)), p = M(() => Wt(t.value)), d = B(0), f = B(0), m = B(i.value), v = B(a.value), g = Wn({}), h = B(!1), b = M(() => {
    const R = {
      position: m.value,
      left: "0",
      top: "0"
    };
    if (!p.value)
      return R;
    const z = An(p.value, d.value), N = An(p.value, f.value);
    return u.value ? {
      ...R,
      transform: "translate(" + z + "px, " + N + "px)",
      ...uo(p.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: m.value,
      left: z + "px",
      top: N + "px"
    };
  });
  let x;
  function E() {
    c.value == null || p.value == null || ss(c.value, p.value, {
      middleware: s.value,
      placement: a.value,
      strategy: i.value
    }).then((R) => {
      d.value = R.x, f.value = R.y, m.value = R.strategy, v.value = R.placement, g.value = R.middlewareData, h.value = !0;
    });
  }
  function T() {
    typeof x == "function" && (x(), x = void 0);
  }
  function A() {
    if (T(), o === void 0) {
      E();
      return;
    }
    if (c.value != null && p.value != null) {
      x = o(c.value, p.value, E);
      return;
    }
  }
  function k() {
    r.value || (h.value = !1);
  }
  return X([s, a, i], E, {
    flush: "sync"
  }), X([c, p], A, {
    flush: "sync"
  }), X(r, k, {
    flush: "sync"
  }), jn() && Kn(T), {
    x: Ve(d),
    y: Ve(f),
    strategy: Ve(m),
    placement: Ve(v),
    middlewareData: Ve(g),
    isPositioned: Ve(h),
    floatingStyles: b,
    update: E
  };
}
function Q(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, o = Symbol(n);
  return [(r) => {
    const s = Yn(o, r);
    if (s || s === null)
      return s;
    throw new Error(
      `Injection \`${o.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (r) => (Zn(o, r), r)];
}
function co(e, t, n) {
  const o = n.originalEvent.target, r = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, { once: !0 }), o.dispatchEvent(r);
}
function us(e, t) {
  var n;
  const o = Wn();
  return te(() => {
    o.value = e();
  }, {
    ...t,
    flush: (n = void 0) != null ? n : "sync"
  }), Yt(o);
}
function at(e) {
  return jn() ? (Kn(e), !0) : !1;
}
function cs(e) {
  let t = !1, n;
  const o = qn(!0);
  return (...r) => (t || (n = o.run(() => e(...r)), t = !0), n);
}
function po(e) {
  let t = 0, n, o;
  const r = () => {
    t -= 1, o && t <= 0 && (o.stop(), n = void 0, o = void 0);
  };
  return (...s) => (t += 1, n || (o = qn(!0), n = o.run(() => e(...s))), at(r), n);
}
function ke(e) {
  return typeof e == "function" ? e() : l(e);
}
const ge = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const ds = (e) => typeof e < "u", ps = Object.prototype.toString, fs = (e) => ps.call(e) === "[object Object]", fo = () => {
}, Bn = /* @__PURE__ */ ms();
function ms() {
  var e, t;
  return ge && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function vs(e) {
  return Ie();
}
function gs(e, t = 1e4) {
  return ur((n, o) => {
    let r = ke(e), s;
    const a = () => setTimeout(() => {
      r = ke(e), o();
    }, ke(t));
    return at(() => {
      clearTimeout(s);
    }), {
      get() {
        return n(), r;
      },
      set(i) {
        r = i, o(), clearTimeout(s), s = a();
      }
    };
  });
}
function hs(e, t) {
  vs() && ir(e, t);
}
function ys(e, t, n = {}) {
  const {
    immediate: o = !0
  } = n, r = B(!1);
  let s = null;
  function a() {
    s && (clearTimeout(s), s = null);
  }
  function i() {
    r.value = !1, a();
  }
  function u(...c) {
    a(), r.value = !0, s = setTimeout(() => {
      r.value = !1, s = null, e(...c);
    }, ke(t));
  }
  return o && (r.value = !0, ge && u()), at(i), {
    isPending: Yt(r),
    start: u,
    stop: i
  };
}
function ws(e = 1e3, t = {}) {
  const {
    controls: n = !1,
    callback: o
  } = t, r = ys(
    o != null ? o : fo,
    e,
    t
  ), s = M(() => !r.isPending.value);
  return n ? {
    ready: s,
    ...r
  } : s;
}
function Ce(e) {
  var t;
  const n = ke(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const rn = ge ? window : void 0;
function _t(...e) {
  let t, n, o, r;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, o, r] = e, t = rn) : [t, n, o, r] = e, !t)
    return fo;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const s = [], a = () => {
    s.forEach((p) => p()), s.length = 0;
  }, i = (p, d, f, m) => (p.addEventListener(d, f, m), () => p.removeEventListener(d, f, m)), u = X(
    () => [Ce(t), ke(r)],
    ([p, d]) => {
      if (a(), !p)
        return;
      const f = fs(d) ? { ...d } : d;
      s.push(
        ...n.flatMap((m) => o.map((v) => i(p, m, v, f)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    u(), a();
  };
  return at(c), c;
}
function bs(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function sn(...e) {
  let t, n, o = {};
  e.length === 3 ? (t = e[0], n = e[1], o = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], o = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: r = rn,
    eventName: s = "keydown",
    passive: a = !1,
    dedupe: i = !1
  } = o, u = bs(t);
  return _t(r, s, (c) => {
    c.repeat && ke(i) || u(c) && n(c);
  }, a);
}
function xs() {
  const e = B(!1), t = Ie();
  return t && fe(() => {
    e.value = !0;
  }, t), e;
}
function mo(e, t = {}) {
  const {
    immediate: n = !0,
    fpsLimit: o = void 0,
    window: r = rn
  } = t, s = B(!1), a = o ? 1e3 / o : null;
  let i = 0, u = null;
  function c(f) {
    if (!s.value || !r)
      return;
    i || (i = f);
    const m = f - i;
    if (a && m < a) {
      u = r.requestAnimationFrame(c);
      return;
    }
    i = f, e({ delta: m, timestamp: f }), u = r.requestAnimationFrame(c);
  }
  function p() {
    !s.value && r && (s.value = !0, i = 0, u = r.requestAnimationFrame(c));
  }
  function d() {
    s.value = !1, u != null && r && (r.cancelAnimationFrame(u), u = null);
  }
  return n && p(), at(d), {
    isActive: Yt(s),
    pause: d,
    resume: p
  };
}
function _s(e) {
  return JSON.parse(JSON.stringify(e));
}
function Pe(e, t, n, o = {}) {
  var r, s, a;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: c,
    deep: p = !1,
    defaultValue: d,
    shouldEmit: f
  } = o, m = Ie(), v = n || (m == null ? void 0 : m.emit) || ((r = m == null ? void 0 : m.$emit) == null ? void 0 : r.bind(m)) || ((a = (s = m == null ? void 0 : m.proxy) == null ? void 0 : s.$emit) == null ? void 0 : a.bind(m == null ? void 0 : m.proxy));
  let g = c;
  t || (t = "modelValue"), g = g || `update:${t.toString()}`;
  const h = (E) => i ? typeof i == "function" ? i(E) : _s(E) : E, b = () => ds(e[t]) ? h(e[t]) : d, x = (E) => {
    f ? f(E) && v(g, E) : v(g, E);
  };
  if (u) {
    const E = b(), T = B(E);
    let A = !1;
    return X(
      () => e[t],
      (k) => {
        A || (A = !0, T.value = h(k), re(() => A = !1));
      }
    ), X(
      T,
      (k) => {
        !A && (k !== e[t] || p) && x(k);
      },
      { deep: p }
    ), T;
  } else
    return M({
      get() {
        return b();
      },
      set(E) {
        x(E);
      }
    });
}
function an(e) {
  return e ? e.flatMap((t) => t.type === Qe ? an(t.children) : [t]) : [];
}
const Cs = ["INPUT", "TEXTAREA"];
function Os(e, t, n, o = {}) {
  if (!t || o.enableIgnoredElement && Cs.includes(t.nodeName))
    return null;
  const {
    arrowKeyOptions: r = "both",
    attributeName: s = "[data-radix-vue-collection-item]",
    itemsArray: a = [],
    loop: i = !0,
    dir: u = "ltr",
    preventScroll: c = !0,
    focus: p = !1
  } = o, [d, f, m, v, g, h] = [
    e.key === "ArrowRight",
    e.key === "ArrowLeft",
    e.key === "ArrowUp",
    e.key === "ArrowDown",
    e.key === "Home",
    e.key === "End"
  ], b = m || v, x = d || f;
  if (!g && !h && (!b && !x || r === "vertical" && x || r === "horizontal" && b))
    return null;
  const E = n ? Array.from(n.querySelectorAll(s)) : a;
  if (!E.length)
    return null;
  c && e.preventDefault();
  let T = null;
  return x || b ? T = vo(E, t, {
    goForward: b ? v : u === "ltr" ? d : f,
    loop: i
  }) : g ? T = E.at(0) || null : h && (T = E.at(-1) || null), p && (T == null || T.focus()), T;
}
function vo(e, t, n, o = e.length) {
  if (--o === 0)
    return null;
  const r = e.indexOf(t), s = n.goForward ? r + 1 : r - 1;
  if (!n.loop && (s < 0 || s >= e.length))
    return null;
  const a = (s + e.length) % e.length, i = e[a];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? vo(
    e,
    i,
    n,
    o
  ) : i : null;
}
function kt(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function jt(e, t, n = ".", o) {
  if (!kt(t))
    return jt(e, {}, n, o);
  const r = Object.assign({}, t);
  for (const s in e) {
    if (s === "__proto__" || s === "constructor")
      continue;
    const a = e[s];
    a != null && (o && o(r, s, a, n) || (Array.isArray(a) && Array.isArray(r[s]) ? r[s] = [...a, ...r[s]] : kt(a) && kt(r[s]) ? r[s] = jt(
      a,
      r[s],
      (n ? `${n}.` : "") + s.toString(),
      o
    ) : r[s] = a));
  }
  return r;
}
function Es(e) {
  return (...t) => t.reduce((n, o) => jt(n, o, "", e), {});
}
const Ps = Es(), [ln, Il] = Q("ConfigProvider");
let Ts = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", As = (e = 21) => {
  let t = "", n = e;
  for (; n--; )
    t += Ts[Math.random() * 64 | 0];
  return t;
};
const Bs = po(() => {
  const e = B(/* @__PURE__ */ new Map()), t = B(), n = M(() => {
    for (const a of e.value.values())
      if (a)
        return !0;
    return !1;
  }), o = ln({
    scrollBody: B(!0)
  });
  let r = null;
  const s = () => {
    var a;
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = (a = t.value) != null ? a : "", Bn && (r == null || r()), t.value = void 0;
  };
  return X(n, (a, i) => {
    var u;
    if (!ge)
      return;
    if (!a) {
      i && s();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const c = window.innerWidth - document.documentElement.clientWidth, p = { padding: c, margin: 0 }, d = (u = o.scrollBody) != null && u.value ? typeof o.scrollBody.value == "object" ? Ps({
      padding: o.scrollBody.value.padding === !0 ? c : o.scrollBody.value.padding,
      margin: o.scrollBody.value.margin === !0 ? c : o.scrollBody.value.margin
    }, p) : p : { padding: 0, margin: 0 };
    c > 0 && (document.body.style.paddingRight = `${d.padding}px`, document.body.style.marginRight = `${d.margin}px`, document.body.style.setProperty("--scrollbar-width", `${c}px`), document.body.style.overflow = "hidden"), Bn && (r = _t(
      document,
      "touchmove",
      (f) => {
        var m;
        f.target === document.documentElement && (f.touches.length > 1 || (m = f.preventDefault) == null || m.call(f));
      },
      { passive: !1 }
    )), re(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), e;
});
function go(e) {
  const t = As(6), n = Bs();
  n.value.set(t, e != null ? e : !1);
  const o = M({
    get: () => {
      var r;
      return (r = n.value.get(t)) != null ? r : !1;
    },
    set: (r) => n.value.set(t, r)
  });
  return hs(() => {
    n.value.delete(t);
  }), o;
}
const Ss = "data-radix-vue-collection-item";
function ho(e, t = Ss) {
  const n = e != null ? e : Symbol();
  return { createCollection: (o) => {
    const r = B([]);
    function s() {
      const a = Ce(o);
      return a ? r.value = Array.from(
        a.querySelectorAll(`[${t}]:not([data-disabled])`)
      ) : r.value = [];
    }
    return sr(() => {
      r.value = [];
    }), fe(s), ar(s), X(() => o == null ? void 0 : o.value, s, { immediate: !0 }), Zn(n, r), r;
  }, injectCollection: () => Yn(n, B([])) };
}
function un(e) {
  const t = ln({
    dir: B("ltr")
  });
  return M(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.dir) == null ? void 0 : n.value) || "ltr";
  });
}
function Fe(e) {
  const t = Ie(), n = t == null ? void 0 : t.type.emits, o = {};
  return n != null && n.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), n == null || n.forEach((r) => {
    o[rr(Gn(r))] = (...s) => e(r, ...s);
  }), o;
}
let $t = 0;
function Ds() {
  te((e) => {
    var n, o;
    if (!ge)
      return;
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      (n = t[0]) != null ? n : Sn()
    ), document.body.insertAdjacentElement(
      "beforeend",
      (o = t[1]) != null ? o : Sn()
    ), $t++, e(() => {
      $t === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((r) => r.remove()), $t--;
    });
  });
}
function Sn() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
function it(e) {
  var r;
  const t = Ie(), n = Object.keys((r = t == null ? void 0 : t.type.props) != null ? r : {}).reduce((s, a) => {
    const i = (t == null ? void 0 : t.type.props[a]).default;
    return i !== void 0 && (s[a] = i), s;
  }, {}), o = Qo(e);
  return M(() => {
    var i;
    const s = {}, a = (i = t == null ? void 0 : t.vnode.props) != null ? i : {};
    return Object.keys(a).forEach((u) => {
      s[Gn(u)] = a[u];
    }), Object.keys({ ...n, ...s }).reduce((u, c) => (o.value[c] !== void 0 && (u[c] = o.value[c]), u), {});
  });
}
function Z(e, t) {
  const n = it(e), o = t ? Fe(t) : {};
  return M(() => ({
    ...n.value,
    ...o
  }));
}
function I() {
  const e = Ie(), t = B(), n = M(() => {
    var a, i;
    return ["#text", "#comment"].includes((a = t.value) == null ? void 0 : a.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : Ce(t);
  }), o = Object.assign({}, e.exposed), r = {};
  for (const a in e.props)
    Object.defineProperty(r, a, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[a]
    });
  if (Object.keys(o).length > 0)
    for (const a in o)
      Object.defineProperty(r, a, {
        enumerable: !0,
        configurable: !0,
        get: () => o[a]
      });
  Object.defineProperty(r, "$el", {
    enumerable: !0,
    configurable: !0,
    get: () => e.vnode.el
  }), e.exposed = r;
  function s(a) {
    t.value = a, !(a instanceof Element || !a) && (Object.defineProperty(r, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => a.$el
    }), e.exposed = r);
  }
  return { forwardRef: s, currentRef: t, currentElement: n };
}
var Ms = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, ze = /* @__PURE__ */ new WeakMap(), dt = /* @__PURE__ */ new WeakMap(), pt = {}, Rt = 0, yo = function(e) {
  return e && (e.host || yo(e.parentNode));
}, ks = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = yo(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, $s = function(e, t, n, o) {
  var r = ks(t, Array.isArray(e) ? e : [e]);
  pt[n] || (pt[n] = /* @__PURE__ */ new WeakMap());
  var s = pt[n], a = [], i = /* @__PURE__ */ new Set(), u = new Set(r), c = function(d) {
    !d || i.has(d) || (i.add(d), c(d.parentNode));
  };
  r.forEach(c);
  var p = function(d) {
    !d || u.has(d) || Array.prototype.forEach.call(d.children, function(f) {
      if (i.has(f))
        p(f);
      else
        try {
          var m = f.getAttribute(o), v = m !== null && m !== "false", g = (ze.get(f) || 0) + 1, h = (s.get(f) || 0) + 1;
          ze.set(f, g), s.set(f, h), a.push(f), g === 1 && v && dt.set(f, !0), h === 1 && f.setAttribute(n, "true"), v || f.setAttribute(o, "true");
        } catch (b) {
          console.error("aria-hidden: cannot operate on ", f, b);
        }
    });
  };
  return p(t), i.clear(), Rt++, function() {
    a.forEach(function(d) {
      var f = ze.get(d) - 1, m = s.get(d) - 1;
      ze.set(d, f), s.set(d, m), f || (dt.has(d) || d.removeAttribute(o), dt.delete(d)), m || d.removeAttribute(n);
    }), Rt--, Rt || (ze = /* @__PURE__ */ new WeakMap(), ze = /* @__PURE__ */ new WeakMap(), dt = /* @__PURE__ */ new WeakMap(), pt = {});
  };
}, Rs = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), r = Ms(e);
  return r ? (o.push.apply(o, Array.from(r.querySelectorAll("[aria-live]"))), $s(o, r, n, "aria-hidden")) : function() {
    return null;
  };
};
function wo(e) {
  let t;
  X(() => Ce(e), (n) => {
    n ? t = Rs(n) : t && t();
  }), He(() => {
    t && t();
  });
}
let Is = 0;
function Re(e, t = "radix") {
  if (e)
    return e;
  const { useId: n } = ln({ useId: void 0 });
  return n && typeof n == "function" ? `${t}-${n()}` : `${t}-${++Is}`;
}
function Ls(e) {
  const t = B(), n = M(() => {
    var s;
    var r;
    return (s = (r = t.value) == null ? void 0 : r.width) != null ? s : 0;
  }), o = M(() => {
    var s;
    var r;
    return (s = (r = t.value) == null ? void 0 : r.height) != null ? s : 0;
  });
  return fe(() => {
    const r = Ce(e);
    if (r) {
      t.value = { width: r.offsetWidth, height: r.offsetHeight };
      const s = new ResizeObserver((a) => {
        if (!Array.isArray(a) || !a.length)
          return;
        const i = a[0];
        let u, c;
        if ("borderBoxSize" in i) {
          const p = i.borderBoxSize, d = Array.isArray(p) ? p[0] : p;
          u = d.inlineSize, c = d.blockSize;
        } else
          u = r.offsetWidth, c = r.offsetHeight;
        t.value = { width: u, height: c };
      });
      return s.observe(r, { box: "border-box" }), () => s.unobserve(r);
    } else
      t.value = void 0;
  }), {
    width: n,
    height: o
  };
}
function Fs(e, t) {
  const n = B(e);
  function o(r) {
    var s;
    return (s = t[n.value][r]) != null ? s : n.value;
  }
  return {
    state: n,
    dispatch: (r) => {
      n.value = o(r);
    }
  };
}
function Ns(e) {
  const t = gs("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (n, o) => {
      var f, m;
      var r, s;
      if (!(e != null && e.value) && !o)
        return;
      t.value = t.value + n;
      const a = (f = e == null ? void 0 : e.value) != null ? f : o, i = document.activeElement, u = (m = (s = (r = a.find((v) => v === i)) == null ? void 0 : r.textContent) == null ? void 0 : s.trim()) != null ? m : "", c = a.map((v) => {
        var h;
        var g;
        return (h = (g = v.textContent) == null ? void 0 : g.trim()) != null ? h : "";
      }), p = zs(c, t.value, u), d = a.find(
        (v) => {
          var g;
          return ((g = v.textContent) == null ? void 0 : g.trim()) === p;
        }
      );
      return d && d.focus(), d;
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function Vs(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
function zs(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((i) => i === t[0]) ? t[0] : t, r = n ? e.indexOf(n) : -1;
  let s = Vs(e, Math.max(r, 0));
  o.length === 1 && (s = s.filter((i) => i !== n));
  const a = s.find(
    (i) => i.toLowerCase().startsWith(o.toLowerCase())
  );
  return a !== n ? a : void 0;
}
const cn = C({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      var o, r;
      if (!n.default)
        return null;
      const s = an(n.default()), a = s.findIndex((p) => p.type !== er);
      if (a === -1)
        return s;
      const i = s[a];
      (o = i.props) == null || delete o.ref;
      const u = i.props ? $(t, i.props) : t;
      t.class && (r = i.props) != null && r.class && delete i.props.class;
      const c = tr(i, u);
      for (const p in u)
        p.startsWith("on") && (c.props || (c.props = {}), c.props[p] = u[p]);
      return s.length === 1 ? c : (s[a] = c, s);
    };
  }
}), U = C({
  name: "Primitive",
  inheritAttrs: !1,
  props: {
    asChild: {
      type: Boolean,
      default: !1
    },
    as: {
      type: [String, Object],
      default: "div"
    }
  },
  setup(e, { attrs: t, slots: n }) {
    const o = e.asChild ? "template" : e.as;
    return typeof o == "string" && ["area", "img", "input"].includes(o) ? () => je(o, t) : o !== "template" ? () => je(e.as, t, { default: n.default }) : () => je(cn, t, { default: n.default });
  }
});
function bo() {
  const e = B(), t = M(() => {
    var n, o;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (o = e.value) == null ? void 0 : o.$el.nextElementSibling : Ce(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
function Ws(e, t) {
  const n = B({}), o = B("none"), r = e.value ? "mounted" : "unmounted", { state: s, dispatch: a } = Fs(r, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  }), i = (f) => {
    var m;
    if (ge) {
      const v = new CustomEvent(f, { bubbles: !1, cancelable: !1 });
      (m = t.value) == null || m.dispatchEvent(v);
    }
  };
  X(
    e,
    async (f, m) => {
      var v;
      const g = m !== f;
      if (await re(), g) {
        const h = o.value, b = ft(t.value);
        f ? (a("MOUNT"), i("enter"), b === "none" && i("after-enter")) : b === "none" || ((v = n.value) == null ? void 0 : v.display) === "none" ? (a("UNMOUNT"), i("leave"), i("after-leave")) : m && h !== b ? (a("ANIMATION_OUT"), i("leave")) : (a("UNMOUNT"), i("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const u = (f) => {
    const m = ft(t.value), v = m.includes(
      f.animationName
    ), g = s.value === "mounted" ? "enter" : "leave";
    f.target === t.value && v && (i(`after-${g}`), a("ANIMATION_END")), f.target === t.value && m === "none" && a("ANIMATION_END");
  }, c = (f) => {
    f.target === t.value && (o.value = ft(t.value));
  }, p = X(
    t,
    (f, m) => {
      f ? (n.value = getComputedStyle(f), f.addEventListener("animationstart", c), f.addEventListener("animationcancel", u), f.addEventListener("animationend", u)) : (a("ANIMATION_END"), m == null || m.removeEventListener("animationstart", c), m == null || m.removeEventListener("animationcancel", u), m == null || m.removeEventListener("animationend", u));
    },
    { immediate: !0 }
  ), d = X(s, () => {
    const f = ft(t.value);
    o.value = s.value === "mounted" ? f : "none";
  });
  return He(() => {
    p(), d();
  }), {
    isPresent: M(
      () => ["mounted", "unmountSuspended"].includes(s.value)
    )
  };
}
function ft(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const Xe = C({
  name: "Presence",
  props: {
    present: {
      type: Boolean,
      required: !0
    },
    forceMount: {
      type: Boolean
    }
  },
  slots: {},
  setup(e, { slots: t, expose: n }) {
    var o;
    const { present: r, forceMount: s } = Oe(e), a = B(), { isPresent: i } = Ws(r, a);
    n({ present: i });
    let u = t.default({ present: i });
    u = an(u || []);
    const c = Ie();
    if (u && (u == null ? void 0 : u.length) > 1) {
      const p = (o = c == null ? void 0 : c.parent) != null && o.type.name ? `<${c.parent.type.name} />` : "component";
      throw new Error(
        [
          `Detected an invalid children for \`${p}\` for  \`Presence\` component.`,
          "",
          "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",
          "You can apply a few solutions:",
          [
            "Provide a single child element so that `presence` directive attach correctly.",
            "Ensure the first child is an actual element instead of a raw text node or comment node."
          ].map((d) => `  - ${d}`).join(`
`)
        ].join(`
`)
      );
    }
    return () => s.value || r.value || i.value ? je(t.default({ present: i })[0], {
      ref: (p) => {
        const d = Ce(p);
        return typeof (d == null ? void 0 : d.hasAttribute) > "u" || (d != null && d.hasAttribute("data-radix-popper-content-wrapper") ? a.value = d.firstElementChild : a.value = d), d;
      }
    }) : null;
  }
}), [he, js] = Q("DialogRoot"), Ks = /* @__PURE__ */ C({
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = Pe(n, "open", t, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), r = B(), s = B(), { modal: a } = Oe(n);
    return js({
      open: o,
      modal: a,
      openModal: () => {
        o.value = !0;
      },
      onOpenChange: (i) => {
        o.value = i;
      },
      onOpenToggle: () => {
        o.value = !o.value;
      },
      contentId: "",
      titleId: "",
      descriptionId: "",
      triggerElement: r,
      contentElement: s
    }), (i, u) => P(i.$slots, "default", { open: l(o) });
  }
}), Gs = /* @__PURE__ */ C({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = he(), { forwardRef: o, currentElement: r } = I();
    return n.contentId || (n.contentId = Re(void 0, "radix-vue-dialog-content")), fe(() => {
      n.triggerElement.value = r.value;
    }), (s, a) => (y(), _(l(U), $(t, {
      ref: l(o),
      type: s.as === "button" ? "button" : void 0,
      "aria-haspopup": "dialog",
      "aria-expanded": l(n).open.value || !1,
      "aria-controls": l(n).open.value ? l(n).contentId : void 0,
      "data-state": l(n).open.value ? "open" : "closed",
      onClick: l(n).onOpenToggle
    }), {
      default: w(() => [
        P(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "onClick"]));
  }
}), xo = /* @__PURE__ */ C({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = xs();
    return (n, o) => l(t) || n.forceMount ? (y(), _(Xn, {
      key: 0,
      to: n.to,
      disabled: n.disabled
    }, [
      P(n.$slots, "default")
    ], 8, ["to", "disabled"])) : ie("", !0);
  }
}), Us = /* @__PURE__ */ C({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (y(), _(l(xo), W(K(t)), {
      default: w(() => [
        P(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hs = "dismissableLayer.pointerDownOutside", qs = "dismissableLayer.focusOutside";
function _o(e, t) {
  const n = t.closest(
    "[data-dismissable-layer]"
  ), o = e.dataset.dismissableLayer === "" ? e : e.querySelector(
    "[data-dismissable-layer]"
  ), r = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(n && o === n || r.indexOf(o) < r.indexOf(n));
}
function Xs(e, t) {
  var a;
  var n;
  const o = (a = (n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) != null ? a : globalThis == null ? void 0 : globalThis.document, r = B(!1), s = B(() => {
  });
  return te((i) => {
    if (!ge)
      return;
    const u = async (p) => {
      const d = p.target;
      if (t != null && t.value) {
        if (_o(t.value, d)) {
          r.value = !1;
          return;
        }
        if (p.target && !r.value) {
          let f = function() {
            co(
              Hs,
              e,
              m
            );
          };
          const m = { originalEvent: p };
          p.pointerType === "touch" ? (o.removeEventListener("click", s.value), s.value = f, o.addEventListener("click", s.value, {
            once: !0
          })) : f();
        } else
          o.removeEventListener("click", s.value);
        r.value = !1;
      }
    }, c = window.setTimeout(() => {
      o.addEventListener("pointerdown", u);
    }, 0);
    i(() => {
      window.clearTimeout(c), o.removeEventListener("pointerdown", u), o.removeEventListener("click", s.value);
    });
  }), {
    onPointerDownCapture: () => r.value = !0
  };
}
function Ys(e, t) {
  var s;
  var n;
  const o = (s = (n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) != null ? s : globalThis == null ? void 0 : globalThis.document, r = B(!1);
  return te((a) => {
    if (!ge)
      return;
    const i = async (u) => {
      t != null && t.value && (await re(), !(!t.value || _o(t.value, u.target)) && u.target && !r.value && co(
        qs,
        e,
        { originalEvent: u }
      ));
    };
    o.addEventListener("focusin", i), a(() => o.removeEventListener("focusin", i));
  }), {
    onFocusCapture: () => r.value = !0,
    onBlurCapture: () => r.value = !1
  };
}
const ue = Un({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Co = /* @__PURE__ */ C({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, o = t, { forwardRef: r, currentElement: s } = I(), a = M(
      () => {
        var g;
        var v;
        return (g = (v = s.value) == null ? void 0 : v.ownerDocument) != null ? g : globalThis.document;
      }
    ), i = M(() => ue.layersRoot), u = M(() => s.value ? Array.from(i.value).indexOf(s.value) : -1), c = M(() => ue.layersWithOutsidePointerEventsDisabled.size > 0), p = M(() => {
      const v = Array.from(i.value), [g] = [...ue.layersWithOutsidePointerEventsDisabled].slice(-1), h = v.indexOf(g);
      return u.value >= h;
    }), d = Xs(async (v) => {
      const g = [...ue.branches].some(
        (h) => h.contains(v.target)
      );
      !p.value || g || (o("pointerDownOutside", v), o("interactOutside", v), await re(), v.defaultPrevented || o("dismiss"));
    }, s), f = Ys((v) => {
      [...ue.branches].some(
        (g) => g.contains(v.target)
      ) || (o("focusOutside", v), o("interactOutside", v), v.defaultPrevented || o("dismiss"));
    }, s);
    sn("Escape", (v) => {
      u.value === i.value.size - 1 && (o("escapeKeyDown", v), v.defaultPrevented || o("dismiss"));
    });
    let m;
    return te((v) => {
      s.value && (n.disableOutsidePointerEvents && (ue.layersWithOutsidePointerEventsDisabled.size === 0 && (m = a.value.body.style.pointerEvents, a.value.body.style.pointerEvents = "none"), ue.layersWithOutsidePointerEventsDisabled.add(s.value)), i.value.add(s.value), v(() => {
        n.disableOutsidePointerEvents && ue.layersWithOutsidePointerEventsDisabled.size === 1 && (a.value.body.style.pointerEvents = m);
      }));
    }), te((v) => {
      v(() => {
        s.value && (i.value.delete(s.value), ue.layersWithOutsidePointerEventsDisabled.delete(s.value));
      });
    }), (v, g) => (y(), _(l(U), {
      ref: l(r),
      "as-child": v.asChild,
      as: v.as,
      "data-dismissable-layer": "",
      style: Xt({
        pointerEvents: c.value ? p.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: l(f).onFocusCapture,
      onBlurCapture: l(f).onBlurCapture,
      onPointerdownCapture: l(d).onPointerDownCapture
    }, {
      default: w(() => [
        P(v.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
}), Zs = /* @__PURE__ */ C({
  __name: "DismissableLayerBranch",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: o } = I();
    return fe(() => {
      ue.branches.add(o.value);
    }), He(() => {
      ue.branches.delete(o.value);
    }), (r, s) => (y(), _(l(U), $({ ref: l(n) }, t), {
      default: w(() => [
        P(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), It = "focusScope.autoFocusOnMount", Lt = "focusScope.autoFocusOnUnmount", Dn = { bubbles: !1, cancelable: !0 };
function gt(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const o of e)
    if (Be(o, { select: t }), document.activeElement !== n)
      return !0;
}
function Js(e) {
  const t = dn(e), n = Mn(t, e), o = Mn(t.reverse(), e);
  return [n, o];
}
function dn(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
function Mn(e, t) {
  for (const n of e)
    if (!Qs(n, { upTo: t }))
      return n;
}
function Qs(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t !== void 0 && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}
function ea(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Be(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && ea(e) && t && e.select();
  }
}
const ta = cs(() => B([]));
function na() {
  const e = ta();
  return {
    add(t) {
      const n = e.value[0];
      t !== n && (n == null || n.pause()), e.value = kn(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var n;
      e.value = kn(e.value, t), (n = e.value[0]) == null || n.resume();
    }
  };
}
function kn(e, t) {
  const n = [...e], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function oa(e) {
  return e.filter((t) => t.tagName !== "A");
}
const Oo = /* @__PURE__ */ C({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, o = t, { currentRef: r, currentElement: s } = I(), a = B(null), i = na(), u = Un({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    te((p) => {
      if (!ge)
        return;
      const d = s.value;
      if (!n.trapped)
        return;
      function f(h) {
        if (u.paused || !d)
          return;
        const b = h.target;
        d.contains(b) ? a.value = b : Be(a.value, { select: !0 });
      }
      function m(h) {
        if (u.paused || !d)
          return;
        const b = h.relatedTarget;
        b !== null && (d.contains(b) || Be(a.value, { select: !0 }));
      }
      function v(h) {
        d.contains(a.value) || Be(d);
      }
      document.addEventListener("focusin", f), document.addEventListener("focusout", m);
      const g = new MutationObserver(v);
      d && g.observe(d, { childList: !0, subtree: !0 }), p(() => {
        document.removeEventListener("focusin", f), document.removeEventListener("focusout", m), g.disconnect();
      });
    }), te(async (p) => {
      const d = s.value;
      if (await re(), !d)
        return;
      i.add(u);
      const f = document.activeElement;
      if (!d.contains(f)) {
        const m = new CustomEvent(It, Dn);
        d.addEventListener(It, (v) => o("mountAutoFocus", v)), d.dispatchEvent(m), m.defaultPrevented || (gt(oa(dn(d)), {
          select: !0
        }), document.activeElement === f && Be(d));
      }
      p(() => {
        d.removeEventListener(It, (g) => o("mountAutoFocus", g));
        const m = new CustomEvent(Lt, Dn), v = (g) => {
          o("unmountAutoFocus", g);
        };
        d.addEventListener(Lt, v), d.dispatchEvent(m), setTimeout(() => {
          m.defaultPrevented || Be(f != null ? f : document.body, { select: !0 }), d.removeEventListener(Lt, v), i.remove(u);
        }, 0);
      });
    });
    function c(p) {
      if (!n.loop && !n.trapped || u.paused)
        return;
      const d = p.key === "Tab" && !p.altKey && !p.ctrlKey && !p.metaKey, f = document.activeElement;
      if (d && f) {
        const m = p.currentTarget, [v, g] = Js(m);
        v && g ? !p.shiftKey && f === g ? (p.preventDefault(), n.loop && Be(v, { select: !0 })) : p.shiftKey && f === v && (p.preventDefault(), n.loop && Be(g, { select: !0 })) : f === m && p.preventDefault();
      }
    }
    return (p, d) => (y(), _(l(U), {
      ref_key: "currentRef",
      ref: r,
      tabindex: "-1",
      "as-child": p.asChild,
      as: p.as,
      onKeydown: c
    }, {
      default: w(() => [
        P(p.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), ra = "menu.itemSelect", Kt = ["Enter", " "], sa = ["ArrowDown", "PageUp", "Home"], Eo = ["ArrowUp", "PageDown", "End"], aa = [...sa, ...Eo], ia = {
  ltr: [...Kt, "ArrowRight"],
  rtl: [...Kt, "ArrowLeft"]
}, la = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function pn(e) {
  return e ? "open" : "closed";
}
function Ct(e) {
  return e === "indeterminate";
}
function fn(e) {
  return Ct(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function ua(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function ca(e, t) {
  const { x: n, y: o } = e;
  let r = !1;
  for (let s = 0, a = t.length - 1; s < t.length; a = s++) {
    const i = t[s].x, u = t[s].y, c = t[a].x, p = t[a].y;
    u > o != p > o && n < (c - i) * (o - u) / (p - u) + i && (r = !r);
  }
  return r;
}
function da(e, t) {
  if (!t)
    return !1;
  const n = { x: e.clientX, y: e.clientY };
  return ca(n, t);
}
function rt(e) {
  return e.pointerType === "mouse";
}
const pa = "DialogTitle", fa = "DialogContent";
function ma({
  titleName: e = pa,
  contentName: t = fa,
  componentLink: n = "dialog.html#title",
  titleId: o,
  descriptionId: r,
  contentElement: s
}) {
  const a = `Warning: \`${t}\` requires a \`${e}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.radix-vue.com/components/${n}`, i = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${t}.`;
  fe(() => {
    var u;
    document.getElementById(o) || console.warn(a);
    const c = (u = s.value) == null ? void 0 : u.getAttribute("aria-describedby");
    r && !c && (document.getElementById(r) || console.warn(i));
  });
}
const Po = /* @__PURE__ */ C({
  __name: "DialogContentImpl",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = he(), { forwardRef: s, currentElement: a } = I();
    return r.titleId || (r.titleId = Re(void 0, "radix-vue-dialog-title")), r.descriptionId || (r.descriptionId = Re(void 0, "radix-vue-dialog-description")), fe(() => {
      r.contentElement = a, document.activeElement !== document.body && (r.triggerElement.value = document.activeElement);
    }), process.env.NODE_ENV !== "production" && ma({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: r.titleId,
      descriptionId: r.descriptionId,
      contentElement: r.contentElement
    }), (i, u) => (y(), _(l(Oo), {
      "as-child": "",
      loop: "",
      trapped: n.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (c) => o("openAutoFocus", c)),
      onUnmountAutoFocus: u[6] || (u[6] = (c) => o("closeAutoFocus", c))
    }, {
      default: w(() => [
        V(l(Co), $({
          id: l(r).contentId,
          ref: l(s),
          as: i.as,
          "as-child": i.asChild,
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": l(r).descriptionId,
          "aria-labelledby": l(r).titleId,
          "data-state": l(pn)(l(r).open.value)
        }, i.$attrs, {
          onDismiss: u[0] || (u[0] = (c) => l(r).onOpenChange(!1)),
          onEscapeKeyDown: u[1] || (u[1] = (c) => o("escapeKeyDown", c)),
          onFocusOutside: u[2] || (u[2] = (c) => o("focusOutside", c)),
          onInteractOutside: u[3] || (u[3] = (c) => o("interactOutside", c)),
          onPointerDownOutside: u[4] || (u[4] = (c) => o("pointerDownOutside", c))
        }), {
          default: w(() => [
            P(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "as", "as-child", "disable-outside-pointer-events", "aria-describedby", "aria-labelledby", "data-state"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
}), va = /* @__PURE__ */ C({
  __name: "DialogContentModal",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = he(), s = Fe(o), { forwardRef: a, currentElement: i } = I();
    return wo(i), (u, c) => (y(), _(Po, $({ ...n, ...l(s) }, {
      ref: l(a),
      "trap-focus": l(r).open.value,
      "disable-outside-pointer-events": !0,
      onCloseAutoFocus: c[0] || (c[0] = (p) => {
        var d;
        p.defaultPrevented || (p.preventDefault(), (d = l(r).triggerElement.value) == null || d.focus());
      }),
      onPointerDownOutside: c[1] || (c[1] = (p) => {
        const d = p.detail.originalEvent, f = d.button === 0 && d.ctrlKey === !0;
        (d.button === 2 || f) && p.preventDefault();
      }),
      onFocusOutside: c[2] || (c[2] = (p) => {
        p.preventDefault();
      })
    }), {
      default: w(() => [
        P(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), ga = /* @__PURE__ */ C({
  __name: "DialogContentNonModal",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, o = Fe(t);
    I();
    const r = he(), s = B(!1), a = B(!1);
    return (i, u) => (y(), _(Po, $({ ...n, ...l(o) }, {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: u[0] || (u[0] = (c) => {
        var p;
        c.defaultPrevented || (s.value || (p = l(r).triggerElement.value) == null || p.focus(), c.preventDefault()), s.value = !1, a.value = !1;
      }),
      onInteractOutside: u[1] || (u[1] = (c) => {
        var p;
        c.defaultPrevented || (s.value = !0, c.detail.originalEvent.type === "pointerdown" && (a.value = !0));
        const d = c.target;
        (p = l(r).triggerElement.value) != null && p.contains(d) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && a.value && c.preventDefault();
      })
    }), {
      default: w(() => [
        P(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ha = /* @__PURE__ */ C({
  __name: "DialogContent",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = he(), s = Fe(o), { forwardRef: a } = I();
    return (i, u) => (y(), _(l(Xe), {
      present: i.forceMount || l(r).open.value
    }, {
      default: w(() => [
        l(r).modal.value ? (y(), _(va, $({
          key: 0,
          ref: l(a)
        }, { ...n, ...l(s), ...i.$attrs }), {
          default: w(() => [
            P(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (y(), _(ga, $({
          key: 1,
          ref: l(a)
        }, { ...n, ...l(s), ...i.$attrs }), {
          default: w(() => [
            P(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), ya = /* @__PURE__ */ C({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = he();
    return go(!0), I(), (n, o) => (y(), _(l(U), {
      as: n.as,
      "as-child": n.asChild,
      "data-state": l(t).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" }
    }, {
      default: w(() => [
        P(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state"]));
  }
}), wa = /* @__PURE__ */ C({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = he(), { forwardRef: n } = I();
    return (o, r) => {
      var s;
      return (s = l(t)) != null && s.modal.value ? (y(), _(l(Xe), {
        key: 0,
        present: o.forceMount || l(t).open.value
      }, {
        default: w(() => [
          V(ya, $(o.$attrs, {
            ref: l(n),
            as: o.as,
            "as-child": o.asChild
          }), {
            default: w(() => [
              P(o.$slots, "default")
            ]),
            _: 3
          }, 16, ["as", "as-child"])
        ]),
        _: 3
      }, 8, ["present"])) : ie("", !0);
    };
  }
}), To = /* @__PURE__ */ C({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    I();
    const n = he();
    return (o, r) => (y(), _(l(U), $(t, {
      type: o.as === "button" ? "button" : void 0,
      onClick: r[0] || (r[0] = (s) => l(n).onOpenChange(!1))
    }), {
      default: w(() => [
        P(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
}), ba = /* @__PURE__ */ C({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e, n = he();
    return I(), (o, r) => (y(), _(l(U), $(t, {
      id: l(n).titleId
    }), {
      default: w(() => [
        P(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), xa = /* @__PURE__ */ C({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    I();
    const n = he();
    return (o, r) => (y(), _(l(U), $(t, {
      id: l(n).descriptionId
    }), {
      default: w(() => [
        P(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), [Ao, _a] = Q("PopperRoot"), Bo = /* @__PURE__ */ C({
  __name: "PopperRoot",
  setup(e) {
    const t = B();
    return _a({
      anchor: t,
      onAnchorChange: (n) => t.value = n
    }), (n, o) => P(n.$slots, "default");
  }
}), Ca = /* @__PURE__ */ C({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: o } = I(), r = Ao();
    return te(() => {
      var s;
      r.onAnchorChange((s = t.element) != null ? s : o.value);
    }), (s, a) => (y(), _(l(U), {
      ref: l(n),
      as: s.as,
      "as-child": s.asChild
    }, {
      default: w(() => [
        P(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function Oa(e) {
  return e !== null;
}
function Ea(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var x, E;
      var n, o, r;
      const { placement: s, rects: a, middlewareData: i } = t, u = ((n = i.arrow) == null ? void 0 : n.centerOffset) !== 0, c = u ? 0 : e.arrowWidth, p = u ? 0 : e.arrowHeight, [d, f] = Gt(s), m = { start: "0%", center: "50%", end: "100%" }[f], v = ((x = (o = i.arrow) == null ? void 0 : o.x) != null ? x : 0) + c / 2, g = ((E = (r = i.arrow) == null ? void 0 : r.y) != null ? E : 0) + p / 2;
      let h = "", b = "";
      return d === "bottom" ? (h = u ? m : `${v}px`, b = `${-p}px`) : d === "top" ? (h = u ? m : `${v}px`, b = `${a.floating.height + p}px`) : d === "right" ? (h = `${-p}px`, b = u ? m : `${g}px`) : d === "left" && (h = `${a.floating.width + p}px`, b = u ? m : `${g}px`), { data: { x: h, y: b } };
    }
  };
}
function Gt(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
const So = {
  side: "bottom",
  sideOffset: 0,
  align: "center",
  alignOffset: 0,
  arrowPadding: 0,
  avoidCollisions: !0,
  collisionBoundary: () => [],
  collisionPadding: 0,
  sticky: "partial",
  hideWhenDetached: !1,
  updatePositionStrategy: "optimized",
  prioritizePosition: !1
}, [Ll, Pa] = Q("PopperContent"), Ta = /* @__PURE__ */ C({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ Jn({
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  }, {
    ...So
  }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = Ao(), { forwardRef: s, currentElement: a } = I(), i = B(), u = B(), { width: c, height: p } = Ls(u), d = M(
      () => n.side + (n.align !== "center" ? `-${n.align}` : "")
    ), f = M(() => typeof n.collisionPadding == "number" ? n.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...n.collisionPadding }), m = M(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), v = M(() => ({
      padding: f.value,
      boundary: m.value.filter(Oa),
      altBoundary: m.value.length > 0
    })), g = us(() => [
      Qr({
        mainAxis: n.sideOffset + p.value,
        alignmentAxis: n.alignOffset
      }),
      n.prioritizePosition && n.avoidCollisions && Tn({
        ...v.value
      }),
      n.avoidCollisions && es({
        mainAxis: !0,
        crossAxis: !!n.prioritizePosition,
        limiter: n.sticky === "partial" ? rs() : void 0,
        ...v.value
      }),
      !n.prioritizePosition && n.avoidCollisions && Tn({
        ...v.value
      }),
      ts({
        ...v.value,
        apply: ({ elements: O, rects: D, availableWidth: S, availableHeight: G }) => {
          const { width: F, height: Y } = D.reference, q = O.floating.style;
          q.setProperty(
            "--radix-popper-available-width",
            `${S}px`
          ), q.setProperty(
            "--radix-popper-available-height",
            `${G}px`
          ), q.setProperty(
            "--radix-popper-anchor-width",
            `${F}px`
          ), q.setProperty(
            "--radix-popper-anchor-height",
            `${Y}px`
          );
        }
      }),
      u.value && is({ element: u.value, padding: n.arrowPadding }),
      Ea({
        arrowWidth: c.value,
        arrowHeight: p.value
      }),
      n.hideWhenDetached && ns({ strategy: "referenceHidden", ...v.value })
    ]), { floatingStyles: h, placement: b, isPositioned: x, middlewareData: E } = ls(
      r.anchor,
      i,
      {
        strategy: "fixed",
        placement: d,
        whileElementsMounted: (...O) => Jr(...O, {
          animationFrame: n.updatePositionStrategy === "always"
        }),
        middleware: g
      }
    ), T = M(
      () => Gt(b.value)[0]
    ), A = M(
      () => Gt(b.value)[1]
    );
    lr(() => {
      x.value && o("placed");
    });
    const k = M(
      () => {
        var O;
        return ((O = E.value.arrow) == null ? void 0 : O.centerOffset) !== 0;
      }
    ), R = B("");
    te(() => {
      a.value && (R.value = window.getComputedStyle(a.value).zIndex);
    });
    const z = M(() => {
      var D;
      var O;
      return (D = (O = E.value.arrow) == null ? void 0 : O.x) != null ? D : 0;
    }), N = M(() => {
      var D;
      var O;
      return (D = (O = E.value.arrow) == null ? void 0 : O.y) != null ? D : 0;
    });
    return Pa({
      placedSide: T,
      onArrowChange: (O) => u.value = O,
      arrowX: z,
      arrowY: N,
      shouldHideArrow: k
    }), (O, D) => {
      var S, G, F;
      return y(), J("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-radix-popper-content-wrapper": "",
        style: Xt({
          ...l(h),
          transform: l(x) ? l(h).transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: R.value,
          "--radix-popper-transform-origin": [
            (S = l(E).transformOrigin) == null ? void 0 : S.x,
            (G = l(E).transformOrigin) == null ? void 0 : G.y
          ].join(" "),
          ...((F = l(E).hide) == null ? void 0 : F.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        V(l(U), $({ ref: l(s) }, O.$attrs, {
          "as-child": n.asChild,
          as: O.as,
          "data-side": T.value,
          "data-align": A.value,
          style: {
            animation: l(x) ? void 0 : "none"
          }
        }), {
          default: w(() => [
            P(O.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
}), Do = /* @__PURE__ */ C({
  __name: "VisuallyHidden",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return I(), (t, n) => (y(), _(l(U), {
      as: t.as,
      "as-child": t.asChild,
      style: {
        position: "absolute",
        border: 0,
        width: "1px",
        display: "inline-block",
        height: "1px",
        padding: 0,
        margin: "-1px",
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal"
      }
    }, {
      default: w(() => [
        P(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Aa = "data-radix-vue-collection-item", [mn, Ba] = Q("CollectionProvider");
function Sa(e = Aa) {
  const t = B(/* @__PURE__ */ new Map()), n = B(), o = Ba({
    collectionRef: n,
    itemMap: t,
    attrName: e
  }), { getItems: r } = ka(o), s = M(() => Array.from(o.itemMap.value.values())), a = M(() => o.itemMap.value.size);
  return { getItems: r, reactiveItems: s, itemMapSize: a };
}
const Da = C({
  name: "CollectionSlot",
  setup(e, { slots: t }) {
    const n = mn(), { primitiveElement: o, currentElement: r } = bo();
    return X(r, () => {
      n.collectionRef.value = r.value;
    }), () => je(cn, { ref: o }, t);
  }
}), Ma = C({
  name: "CollectionItem",
  inheritAttrs: !1,
  props: {
    value: {
      validator: () => !0
    }
  },
  setup(e, { slots: t, attrs: n }) {
    const o = mn(), { primitiveElement: r, currentElement: s } = bo();
    return te((a) => {
      if (s.value) {
        const i = nr(s.value);
        o.itemMap.value.set(i, { ref: s.value, value: e.value }), a(() => o.itemMap.value.delete(i));
      }
    }), () => je(cn, { ...n, [o.attrName]: "", ref: r }, t);
  }
});
function ka(e) {
  const t = e != null ? e : mn();
  return { getItems: () => {
    const n = t.collectionRef.value;
    if (!n)
      return [];
    const o = Array.from(n.querySelectorAll(`[${t.attrName}]`));
    return Array.from(t.itemMap.value.values()).sort(
      (r, s) => o.indexOf(r.ref) - o.indexOf(s.ref)
    );
  } };
}
const Mo = /* @__PURE__ */ C({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (y(), _(l(Ca), W(K(t)), {
      default: w(() => [
        P(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function $a() {
  const e = B(!1);
  return fe(() => {
    _t("keydown", () => {
      e.value = !0;
    }, { capture: !0, passive: !0 }), _t(["pointerdown", "pointermove"], () => {
      e.value = !1;
    }, { capture: !0, passive: !0 });
  }), e;
}
const Ra = po($a), [Ne, ko] = Q(["MenuRoot", "MenuSub"], "MenuContext"), [lt, Ia] = Q("MenuRoot"), La = /* @__PURE__ */ C({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = t, { modal: r, dir: s } = Oe(n), a = un(s), i = Pe(n, "open", o), u = B(), c = Ra();
    return ko({
      open: i,
      onOpenChange: (p) => {
        i.value = p;
      },
      content: u,
      onContentChange: (p) => {
        u.value = p;
      }
    }), Ia({
      onClose: () => {
        i.value = !1;
      },
      isUsingKeyboardRef: c,
      dir: a,
      modal: r
    }), (p, d) => (y(), _(l(Bo), null, {
      default: w(() => [
        P(p.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Fa = "rovingFocusGroup.onEntryFocus", Na = { bubbles: !1, cancelable: !0 };
function Va(e, t = !1) {
  const n = document.activeElement;
  for (const o of e)
    if (o === n || (o.focus({ preventScroll: t }), document.activeElement !== n))
      return;
}
const [Fl, za] = Q("RovingFocusGroup"), Wa = /* @__PURE__ */ C({
  __name: "RovingFocusGroup",
  props: {
    orientation: { default: void 0 },
    dir: {},
    loop: { type: Boolean, default: !1 },
    currentTabStopId: {},
    defaultCurrentTabStopId: {},
    preventScrollOnEntryFocus: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["entryFocus", "update:currentTabStopId"],
  setup(e, { expose: t, emit: n }) {
    const o = e, r = n, { loop: s, orientation: a, dir: i } = Oe(o), u = un(i), c = Pe(o, "currentTabStopId", r, {
      defaultValue: o.defaultCurrentTabStopId,
      passive: o.currentTabStopId === void 0
    }), p = B(!1), d = B(!1), f = B(0), { getItems: m } = Sa();
    function v(g) {
      const h = !d.value;
      if (g.currentTarget && g.target === g.currentTarget && h && !p.value) {
        const b = new CustomEvent(Fa, Na);
        if (g.currentTarget.dispatchEvent(b), r("entryFocus", b), !b.defaultPrevented) {
          const x = m().map((k) => k.ref).filter((k) => k.dataset.disabled !== ""), E = x.find((k) => k.getAttribute("data-active") === "true"), T = x.find(
            (k) => k.id === c.value
          ), A = [E, T, ...x].filter(
            Boolean
          );
          Va(A, o.preventScrollOnEntryFocus);
        }
      }
      d.value = !1;
    }
    return t({
      getItems: m
    }), za({
      loop: s,
      dir: u,
      orientation: a,
      currentTabStopId: c,
      onItemFocus: (g) => {
        c.value = g;
      },
      onItemShiftTab: () => {
        p.value = !0;
      },
      onFocusableItemAdd: () => {
        f.value++;
      },
      onFocusableItemRemove: () => {
        f.value--;
      }
    }), (g, h) => (y(), _(l(Da), null, {
      default: w(() => [
        V(l(U), {
          tabindex: p.value || f.value === 0 ? -1 : 0,
          "data-orientation": l(a),
          as: g.as,
          "as-child": g.asChild,
          dir: l(u),
          style: { outline: "none" },
          onMousedown: h[0] || (h[0] = (b) => d.value = !0),
          onFocus: v,
          onBlur: h[1] || (h[1] = (b) => p.value = !1)
        }, {
          default: w(() => [
            P(g.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), [vn, ja] = Q("MenuContent"), gn = /* @__PURE__ */ C({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ Jn({
    loop: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    disableOutsideScroll: { type: Boolean },
    trapFocus: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  }, {
    ...So
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = Ne(), s = lt(), { trapFocus: a, disableOutsidePointerEvents: i, loop: u } = Oe(n);
    Ds(), go(i.value);
    const c = B(""), p = B(0), d = B(0), f = B(null), m = B("right"), v = B(0), g = B(null), { createCollection: h } = ho(), { forwardRef: b, currentElement: x } = I(), E = h(x);
    X(x, (O) => {
      r.onContentChange(O);
    });
    const { handleTypeaheadSearch: T } = Ns(E);
    He(() => {
      window.clearTimeout(p.value);
    });
    function A(O) {
      var D, S;
      return m.value === ((D = f.value) == null ? void 0 : D.side) && da(O, (S = f.value) == null ? void 0 : S.area);
    }
    async function k(O) {
      var D;
      o("openAutoFocus", O), !O.defaultPrevented && (O.preventDefault(), (D = x.value) == null || D.focus({
        preventScroll: !0
      }));
    }
    function R(O) {
      if (O.defaultPrevented)
        return;
      const D = O.target.closest("[data-radix-menu-content]") === O.currentTarget, S = O.ctrlKey || O.altKey || O.metaKey, G = O.key.length === 1, F = Os(
        O,
        document.activeElement,
        x.value,
        {
          loop: u.value,
          arrowKeyOptions: "vertical",
          dir: s == null ? void 0 : s.dir.value,
          focus: !0,
          attributeName: "[data-radix-vue-collection-item]:not([data-disabled])"
        }
      );
      if (F)
        return F == null ? void 0 : F.focus();
      if (O.code === "Space" || (D && (O.key === "Tab" && O.preventDefault(), !S && G && T(O.key)), O.target !== x.value) || !aa.includes(O.key))
        return;
      O.preventDefault();
      const Y = E.value;
      Eo.includes(O.key) && Y.reverse(), ua(Y);
    }
    function z(O) {
      var D, S;
      (S = (D = O == null ? void 0 : O.currentTarget) == null ? void 0 : D.contains) != null && S.call(D, O.target) || (window.clearTimeout(p.value), c.value = "");
    }
    function N(O) {
      var D;
      if (!rt(O))
        return;
      const S = O.target, G = v.value !== O.clientX;
      if ((D = O == null ? void 0 : O.currentTarget) != null && D.contains(S) && G) {
        const F = O.clientX > v.value ? "right" : "left";
        m.value = F, v.value = O.clientX;
      }
    }
    return ja({
      onItemEnter: (O) => !!A(O),
      onItemLeave: (O) => {
        var D;
        A(O) || ((D = x.value) == null || D.focus(), g.value = null);
      },
      onTriggerLeave: (O) => !!A(O),
      searchRef: c,
      pointerGraceTimerRef: d,
      onPointerGraceIntentChange: (O) => {
        f.value = O;
      }
    }), (O, D) => (y(), _(l(Oo), {
      "as-child": "",
      trapped: l(a),
      onMountAutoFocus: k,
      onUnmountAutoFocus: D[7] || (D[7] = (S) => o("closeAutoFocus", S))
    }, {
      default: w(() => [
        V(l(Co), {
          "as-child": "",
          "disable-outside-pointer-events": l(i),
          onEscapeKeyDown: D[2] || (D[2] = (S) => o("escapeKeyDown", S)),
          onPointerDownOutside: D[3] || (D[3] = (S) => o("pointerDownOutside", S)),
          onFocusOutside: D[4] || (D[4] = (S) => o("focusOutside", S)),
          onInteractOutside: D[5] || (D[5] = (S) => o("interactOutside", S)),
          onDismiss: D[6] || (D[6] = (S) => o("dismiss"))
        }, {
          default: w(() => [
            V(l(Wa), {
              "current-tab-stop-id": g.value,
              "onUpdate:currentTabStopId": D[0] || (D[0] = (S) => g.value = S),
              "as-child": "",
              orientation: "vertical",
              dir: l(s).dir.value,
              loop: l(u),
              onEntryFocus: D[1] || (D[1] = (S) => {
                o("entryFocus", S), l(s).isUsingKeyboardRef.value || S.preventDefault();
              })
            }, {
              default: w(() => [
                V(l(Ta), {
                  ref: l(b),
                  role: "menu",
                  as: O.as,
                  "as-child": O.asChild,
                  "aria-orientation": "vertical",
                  "data-radix-menu-content": "",
                  "data-state": l(pn)(l(r).open.value),
                  dir: l(s).dir.value,
                  side: O.side,
                  "side-offset": O.sideOffset,
                  align: O.align,
                  "align-offset": O.alignOffset,
                  "avoid-collisions": O.avoidCollisions,
                  "collision-boundary": O.collisionBoundary,
                  "collision-padding": O.collisionPadding,
                  "arrow-padding": O.arrowPadding,
                  "prioritize-position": O.prioritizePosition,
                  sticky: O.sticky,
                  "hide-when-detached": O.hideWhenDetached,
                  onKeydown: R,
                  onBlur: z,
                  onPointermove: N
                }, {
                  default: w(() => [
                    P(O.$slots, "default")
                  ]),
                  _: 3
                }, 8, ["as", "as-child", "data-state", "dir", "side", "side-offset", "align", "align-offset", "avoid-collisions", "collision-boundary", "collision-padding", "arrow-padding", "prioritize-position", "sticky", "hide-when-detached"])
              ]),
              _: 3
            }, 8, ["current-tab-stop-id", "dir", "loop"])
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
}), $o = /* @__PURE__ */ C({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = vn(), { forwardRef: o } = I(), r = B(!1);
    async function s(i) {
      if (!i.defaultPrevented && rt(i)) {
        if (t.disabled)
          n.onItemLeave(i);
        else if (!n.onItemEnter(i)) {
          const u = i.currentTarget;
          u == null || u.focus({ preventScroll: !0 });
        }
      }
    }
    async function a(i) {
      await re(), !i.defaultPrevented && rt(i) && n.onItemLeave(i);
    }
    return (i, u) => (y(), _(l(Ma), null, {
      default: w(() => [
        V(l(U), $({
          ref: l(o),
          role: "menuitem",
          tabindex: "-1"
        }, i.$attrs, {
          as: i.as,
          "as-child": i.asChild,
          "data-radix-vue-collection-item": "",
          "aria-disabled": i.disabled || void 0,
          "data-disabled": i.disabled ? "" : void 0,
          "data-highlighted": r.value ? "" : void 0,
          onPointermove: s,
          onPointerleave: a,
          onFocus: u[0] || (u[0] = async (c) => {
            await re(), !(c.defaultPrevented || i.disabled) && (r.value = !0);
          }),
          onBlur: u[1] || (u[1] = async (c) => {
            await re(), !c.defaultPrevented && (r.value = !1);
          })
        }), {
          default: w(() => [
            P(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "aria-disabled", "data-disabled", "data-highlighted"])
      ]),
      _: 3
    }));
  }
}), hn = /* @__PURE__ */ C({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = t, { forwardRef: r, currentElement: s } = I(), a = lt(), i = vn(), u = B(!1);
    async function c() {
      const p = s.value;
      if (!n.disabled && p) {
        const d = new CustomEvent(ra, {
          bubbles: !0,
          cancelable: !0
        });
        o("select", d), await re(), d.defaultPrevented ? u.value = !1 : a.onClose();
      }
    }
    return (p, d) => (y(), _($o, $(n, {
      ref: l(r),
      onClick: c,
      onPointerdown: d[0] || (d[0] = () => {
        u.value = !0;
      }),
      onPointerup: d[1] || (d[1] = async (f) => {
        var m;
        await re(), !f.defaultPrevented && (u.value || (m = f.currentTarget) == null || m.click());
      }),
      onKeydown: d[2] || (d[2] = async (f) => {
        const m = l(i).searchRef.value !== "";
        p.disabled || m && f.key === " " || l(Kt).includes(f.key) && (f.currentTarget.click(), f.preventDefault());
      })
    }), {
      default: w(() => [
        P(p.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Ka, Ro] = Q(
  ["MenuCheckboxItem", "MenuRadioItem"],
  "MenuItemIndicatorContext"
), Ga = /* @__PURE__ */ C({
  __name: "MenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = Ka({
      checked: B(!1)
    });
    return (n, o) => (y(), _(l(Xe), {
      present: n.forceMount || l(Ct)(l(t).checked.value) || l(t).checked.value === !0
    }, {
      default: w(() => [
        V(l(U), {
          as: n.as,
          "as-child": n.asChild,
          "data-state": l(fn)(l(t).checked.value)
        }, {
          default: w(() => [
            P(n.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child", "data-state"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Ua = /* @__PURE__ */ C({
  __name: "MenuCheckboxItem",
  props: {
    checked: { type: [Boolean, String], default: !1 },
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select", "update:checked"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = Pe(n, "checked", o);
    return Ro({ checked: r }), (s, a) => (y(), _(hn, $({ role: "menuitemcheckbox" }, n, {
      "aria-checked": l(Ct)(l(r)) ? "mixed" : l(r),
      "data-state": l(fn)(l(r)),
      onSelect: a[0] || (a[0] = async (i) => {
        o("select", i), l(Ct)(l(r)) ? r.value = !0 : r.value = !l(r);
      })
    }), {
      default: w(() => [
        P(s.$slots, "default", { checked: l(r) })
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), Ha = /* @__PURE__ */ C({
  __name: "MenuRootContentModal",
  props: {
    loop: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = Z(n, o), s = Ne(), { forwardRef: a, currentElement: i } = I();
    return wo(i), (u, c) => (y(), _(gn, $(l(r), {
      ref: l(a),
      "trap-focus": l(s).open.value,
      "disable-outside-pointer-events": l(s).open.value,
      "disable-outside-scroll": !0,
      onDismiss: c[0] || (c[0] = (p) => l(s).onOpenChange(!1)),
      onFocusOutside: c[1] || (c[1] = yt((p) => o("focusOutside", p), ["prevent"]))
    }), {
      default: w(() => [
        P(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), qa = /* @__PURE__ */ C({
  __name: "MenuRootContentNonModal",
  props: {
    loop: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = Z(e, t), o = Ne();
    return (r, s) => (y(), _(gn, $(l(n), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      "disable-outside-scroll": !1,
      onDismiss: s[0] || (s[0] = (a) => l(o).onOpenChange(!1))
    }), {
      default: w(() => [
        P(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Xa = /* @__PURE__ */ C({
  __name: "MenuContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = Z(e, t), o = Ne(), r = lt();
    return (s, a) => (y(), _(l(Xe), {
      present: s.forceMount || l(o).open.value
    }, {
      default: w(() => [
        l(r).modal.value ? (y(), _(Ha, W($({ key: 0 }, { ...s.$attrs, ...l(n) })), {
          default: w(() => [
            P(s.$slots, "default")
          ]),
          _: 3
        }, 16)) : (y(), _(qa, W($({ key: 1 }, { ...s.$attrs, ...l(n) })), {
          default: w(() => [
            P(s.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Io = /* @__PURE__ */ C({
  __name: "MenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (y(), _(l(U), $({ role: "group" }, t), {
      default: w(() => [
        P(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ya = /* @__PURE__ */ C({
  __name: "MenuLabel",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (n, o) => (y(), _(l(U), W(K(t)), {
      default: w(() => [
        P(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Za = /* @__PURE__ */ C({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (y(), _(l(xo), W(K(t)), {
      default: w(() => [
        P(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Ja, Qa] = Q("MenuRadioGroup"), ei = /* @__PURE__ */ C({
  __name: "MenuRadioGroup",
  props: {
    modelValue: { default: "" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = Pe(n, "modelValue", t);
    return Qa({
      modelValue: o,
      onValueChange: (r) => {
        o.value = r;
      }
    }), (r, s) => (y(), _(Io, W(K(n)), {
      default: w(() => [
        P(r.$slots, "default", { modelValue: l(o) })
      ]),
      _: 3
    }, 16));
  }
}), ti = /* @__PURE__ */ C({
  __name: "MenuRadioItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = t, { value: r } = Oe(n), s = Ja(), a = M(
      () => s.modelValue.value === (r == null ? void 0 : r.value)
    );
    return Ro({ checked: a }), (i, u) => (y(), _(hn, $({ role: "menuitemradio" }, n, {
      "aria-checked": a.value,
      "data-state": l(fn)(a.value),
      onSelect: u[0] || (u[0] = async (c) => {
        o("select", c), l(s).onValueChange(l(r));
      })
    }), {
      default: w(() => [
        P(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), ni = /* @__PURE__ */ C({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (y(), _(l(U), $(t, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: w(() => [
        P(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Lo, oi] = Q("MenuSub"), ri = /* @__PURE__ */ C({
  __name: "MenuSub",
  props: {
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = Pe(n, "open", t, {
      defaultValue: !1,
      passive: n.open === void 0
    }), r = Ne(), s = B(), a = B();
    return te((i) => {
      (r == null ? void 0 : r.open.value) === !1 && (o.value = !1), i(() => o.value = !1);
    }), ko({
      open: o,
      onOpenChange: (i) => {
        o.value = i;
      },
      content: a,
      onContentChange: (i) => {
        a.value = i;
      }
    }), oi({
      triggerId: "",
      contentId: "",
      trigger: s,
      onTriggerChange: (i) => {
        s.value = i;
      }
    }), (i, u) => (y(), _(l(Bo), null, {
      default: w(() => [
        P(i.$slots, "default")
      ]),
      _: 3
    }));
  }
}), si = /* @__PURE__ */ C({
  __name: "MenuSubContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    sideOffset: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = Z(e, t), o = Ne(), r = lt(), s = Lo(), { forwardRef: a, currentElement: i } = I();
    return s.contentId || (s.contentId = Re(void 0, "radix-vue-menu-sub-content")), (u, c) => (y(), _(l(Xe), {
      present: u.forceMount || l(o).open.value
    }, {
      default: w(() => [
        V(gn, $(l(n), {
          id: l(s).contentId,
          ref: l(a),
          "aria-labelledby": l(s).triggerId,
          align: "start",
          side: l(r).dir.value === "rtl" ? "left" : "right",
          "disable-outside-pointer-events": !1,
          "disable-outside-scroll": !1,
          "trap-focus": !1,
          onOpenAutoFocus: c[0] || (c[0] = yt((p) => {
            var d;
            l(r).isUsingKeyboardRef.value && ((d = l(i)) == null || d.focus());
          }, ["prevent"])),
          onCloseAutoFocus: c[1] || (c[1] = yt(() => {
          }, ["prevent"])),
          onFocusOutside: c[2] || (c[2] = (p) => {
            p.defaultPrevented || p.target !== l(s).trigger.value && l(o).onOpenChange(!1);
          }),
          onEscapeKeyDown: c[3] || (c[3] = (p) => {
            l(r).onClose(), p.preventDefault();
          }),
          onKeydown: c[4] || (c[4] = (p) => {
            var d, f;
            const m = (d = p.currentTarget) == null ? void 0 : d.contains(p.target), v = l(la)[l(r).dir.value].includes(p.key);
            m && v && (l(o).onOpenChange(!1), (f = l(s).trigger.value) == null || f.focus(), p.preventDefault());
          })
        }), {
          default: w(() => [
            P(u.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-labelledby", "side"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), ai = /* @__PURE__ */ C({
  __name: "MenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Ne(), o = lt(), r = Lo(), s = vn(), a = B(null);
    r.triggerId || (r.triggerId = Re(void 0, "radix-vue-menu-sub-trigger"));
    function i() {
      a.value && window.clearTimeout(a.value), a.value = null;
    }
    He(() => {
      i();
    });
    function u(d) {
      !rt(d) || s.onItemEnter(d) || !t.disabled && !n.open.value && !a.value && (s.onPointerGraceIntentChange(null), a.value = window.setTimeout(() => {
        n.onOpenChange(!0), i();
      }, 100));
    }
    async function c(d) {
      var f, m;
      if (!rt(d))
        return;
      i();
      const v = (f = n.content.value) == null ? void 0 : f.getBoundingClientRect();
      if (v != null && v.width) {
        const g = (m = n.content.value) == null ? void 0 : m.dataset.side, h = g === "right", b = h ? -5 : 5, x = v[h ? "left" : "right"], E = v[h ? "right" : "left"];
        s.onPointerGraceIntentChange({
          area: [
            { x: d.clientX + b, y: d.clientY },
            { x, y: v.top },
            { x: E, y: v.top },
            { x: E, y: v.bottom },
            { x, y: v.bottom }
          ],
          side: g
        }), window.clearTimeout(s.pointerGraceTimerRef.value), s.pointerGraceTimerRef.value = window.setTimeout(
          () => s.onPointerGraceIntentChange(null),
          300
        );
      } else {
        if (s.onTriggerLeave(d))
          return;
        s.onPointerGraceIntentChange(null);
      }
    }
    async function p(d) {
      var f;
      const m = s.searchRef.value !== "";
      t.disabled || m && d.key === " " || ia[o.dir.value].includes(d.key) && (n.onOpenChange(!0), await re(), (f = n.content.value) == null || f.focus(), d.preventDefault());
    }
    return (d, f) => (y(), _(Mo, { "as-child": "" }, {
      default: w(() => [
        V($o, $(t, {
          id: l(r).triggerId,
          ref: (m) => {
            var v;
            (v = l(r)) == null || v.onTriggerChange(m == null ? void 0 : m.$el);
          },
          "aria-haspopup": "menu",
          "aria-expanded": l(n).open.value,
          "aria-controls": l(r).contentId,
          "data-state": l(pn)(l(n).open.value),
          onClick: f[0] || (f[0] = async (m) => {
            t.disabled || m.defaultPrevented || (m.currentTarget.focus(), l(n).open.value || l(n).onOpenChange(!0));
          }),
          onPointermove: u,
          onPointerleave: c,
          onKeydown: p
        }), {
          default: w(() => [
            P(d.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-expanded", "aria-controls", "data-state"])
      ]),
      _: 3
    }));
  }
}), [Fo, ii] = Q("DropdownMenuRoot"), li = /* @__PURE__ */ C({
  __name: "DropdownMenuRoot",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = t;
    I();
    const r = Pe(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), s = B(), { modal: a, dir: i } = Oe(n), u = un(i);
    return ii({
      open: r,
      onOpenChange: (c) => {
        r.value = c;
      },
      onOpenToggle: () => {
        r.value = !r.value;
      },
      triggerId: "",
      triggerElement: s,
      contentId: "",
      modal: a,
      dir: u
    }), (c, p) => (y(), _(l(La), {
      open: l(r),
      "onUpdate:open": p[0] || (p[0] = (d) => Hn(r) ? r.value = d : null),
      dir: l(u),
      modal: l(a)
    }, {
      default: w(() => [
        P(c.$slots, "default", { open: l(r) })
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
}), ui = /* @__PURE__ */ C({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Fo(), { forwardRef: o, currentElement: r } = I();
    return fe(() => {
      n.triggerElement = r;
    }), n.triggerId || (n.triggerId = Re(void 0, "radix-vue-dropdown-menu-trigger")), (s, a) => (y(), _(l(Mo), { "as-child": "" }, {
      default: w(() => [
        V(l(U), {
          id: l(n).triggerId,
          ref: l(o),
          type: s.as === "button" ? "button" : void 0,
          "as-child": t.asChild,
          as: s.as,
          "aria-haspopup": "menu",
          "aria-expanded": l(n).open.value,
          "aria-controls": l(n).open.value ? l(n).contentId : void 0,
          "data-disabled": s.disabled ? "" : void 0,
          disabled: s.disabled,
          "data-state": l(n).open.value ? "open" : "closed",
          onClick: a[0] || (a[0] = async (i) => {
            var u;
            !s.disabled && i.button === 0 && i.ctrlKey === !1 && ((u = l(n)) == null || u.onOpenToggle(), await re(), l(n).open.value && i.preventDefault());
          }),
          onKeydown: a[1] || (a[1] = or(
            (i) => {
              s.disabled || (["Enter", " "].includes(i.key) && l(n).onOpenToggle(), i.key === "ArrowDown" && l(n).onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
            },
            ["enter", "space", "arrow-down"]
          ))
        }, {
          default: w(() => [
            P(s.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as-child", "as", "aria-expanded", "aria-controls", "data-disabled", "disabled", "data-state"])
      ]),
      _: 3
    }));
  }
}), ci = /* @__PURE__ */ C({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (y(), _(l(Za), W(K(t)), {
      default: w(() => [
        P(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), di = /* @__PURE__ */ C({
  __name: "DropdownMenuContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = Z(e, t);
    I();
    const o = Fo(), r = B(!1);
    function s(a) {
      a.defaultPrevented || (r.value || setTimeout(() => {
        var i;
        (i = o.triggerElement.value) == null || i.focus();
      }, 0), r.value = !1, a.preventDefault());
    }
    return o.contentId || (o.contentId = Re(void 0, "radix-vue-dropdown-menu-content")), (a, i) => {
      var u;
      return y(), _(l(Xa), $(l(n), {
        id: l(o).contentId,
        "aria-labelledby": (u = l(o)) == null ? void 0 : u.triggerId,
        style: {
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        },
        onCloseAutoFocus: s,
        onInteractOutside: i[0] || (i[0] = (c) => {
          var p;
          if (c.defaultPrevented)
            return;
          const d = c.detail.originalEvent, f = d.button === 0 && d.ctrlKey === !0, m = d.button === 2 || f;
          (!l(o).modal.value || m) && (r.value = !0), (p = l(o).triggerElement.value) != null && p.contains(c.target) && c.preventDefault();
        })
      }), {
        default: w(() => [
          P(a.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby"]);
    };
  }
}), pi = /* @__PURE__ */ C({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = Fe(t);
    return I(), (r, s) => (y(), _(l(hn), W(K({ ...n, ...l(o) })), {
      default: w(() => [
        P(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fi = /* @__PURE__ */ C({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return I(), (n, o) => (y(), _(l(Io), W(K(t)), {
      default: w(() => [
        P(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), mi = /* @__PURE__ */ C({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return I(), (n, o) => (y(), _(l(ni), W(K(t)), {
      default: w(() => [
        P(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vi = /* @__PURE__ */ C({
  __name: "DropdownMenuCheckboxItem",
  props: {
    checked: { type: [Boolean, String] },
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select", "update:checked"],
  setup(e, { emit: t }) {
    const n = e, o = Fe(t);
    return I(), (r, s) => (y(), _(l(Ua), W(K({ ...n, ...l(o) })), {
      default: w(() => [
        P(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), No = /* @__PURE__ */ C({
  __name: "DropdownMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return I(), (n, o) => (y(), _(l(Ga), W(K(t)), {
      default: w(() => [
        P(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), gi = /* @__PURE__ */ C({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return I(), (n, o) => (y(), _(l(Ya), W(K(t)), {
      default: w(() => [
        P(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hi = /* @__PURE__ */ C({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = Fe(t);
    return I(), (r, s) => (y(), _(l(ei), W(K({ ...n, ...l(o) })), {
      default: w(() => [
        P(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), yi = /* @__PURE__ */ C({
  __name: "DropdownMenuRadioItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = Z(e, t);
    return I(), (o, r) => (y(), _(l(ti), W(K(l(n))), {
      default: w(() => [
        P(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wi = /* @__PURE__ */ C({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    var r;
    const n = e, o = Pe(n, "open", t, {
      passive: n.open === void 0,
      defaultValue: (r = n.defaultOpen) != null ? r : !1
    });
    return I(), (s, a) => (y(), _(l(ri), {
      open: l(o),
      "onUpdate:open": a[0] || (a[0] = (i) => Hn(o) ? o.value = i : null)
    }, {
      default: w(() => [
        P(s.$slots, "default", { open: l(o) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), bi = /* @__PURE__ */ C({
  __name: "DropdownMenuSubContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    sideOffset: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = Z(e, t);
    return I(), (o, r) => (y(), _(l(si), $(l(n), { style: {
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: w(() => [
        P(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), xi = /* @__PURE__ */ C({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return I(), (n, o) => (y(), _(l(ai), W(K(t)), {
      default: w(() => [
        P(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function _i() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
_i();
const [Tt, Ci] = Q("ToastProvider"), Oi = /* @__PURE__ */ C({
  __name: "ToastProvider",
  props: {
    label: { default: "Notification" },
    duration: { default: 5e3 },
    swipeDirection: { default: "right" },
    swipeThreshold: { default: 50 }
  },
  setup(e) {
    const t = e, { label: n, duration: o, swipeDirection: r, swipeThreshold: s } = Oe(t), a = B(), i = B(0), u = B(!1), c = B(!1);
    if (t.label && typeof t.label == "string" && !t.label.trim()) {
      const p = "Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`.";
      throw new Error(p);
    }
    return Ci({
      label: n,
      duration: o,
      swipeDirection: r,
      swipeThreshold: s,
      toastCount: i,
      viewport: a,
      onViewportChange(p) {
        a.value = p;
      },
      onToastAdd() {
        i.value++;
      },
      onToastRemove() {
        i.value--;
      },
      isFocusedToastEscapeKeyDownRef: u,
      isClosePausedRef: c
    }), (p, d) => P(p.$slots, "default");
  }
}), Ei = "toast.swipeStart", Pi = "toast.swipeMove", Ti = "toast.swipeCancel", Ai = "toast.swipeEnd", Ut = "toast.viewportPause", Ht = "toast.viewportResume";
function mt(e, t, n) {
  const o = n.originalEvent.currentTarget, r = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, { once: !0 }), o.dispatchEvent(r);
}
function $n(e, t, n = 0) {
  const o = Math.abs(e.x), r = Math.abs(e.y), s = o > r;
  return t === "left" || t === "right" ? s && o > n : !s && r > n;
}
function Bi(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function Vo(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((n) => {
    if (n.nodeType === n.TEXT_NODE && n.textContent && t.push(n.textContent), Bi(n)) {
      const o = n.ariaHidden || n.hidden || n.style.display === "none", r = n.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (r) {
          const s = n.dataset.radixToastAnnounceAlt;
          s && t.push(s);
        } else
          t.push(...Vo(n));
    }
  }), t;
}
const Si = /* @__PURE__ */ C({
  __name: "ToastAnnounce",
  setup(e) {
    const t = Tt(), n = ws(1e3), o = B(!1);
    return mo(() => {
      o.value = !0;
    }), (r, s) => l(n) || o.value ? (y(), _(l(Do), { key: 0 }, {
      default: w(() => [
        ht(et(l(t).label.value) + " ", 1),
        P(r.$slots, "default")
      ]),
      _: 3
    })) : ie("", !0);
  }
}), [Di, Mi] = Q("ToastRoot"), ki = /* @__PURE__ */ C({
  inheritAttrs: !1,
  __name: "ToastRootImpl",
  props: {
    type: {},
    open: { type: Boolean, default: !1 },
    duration: {},
    asChild: { type: Boolean },
    as: { default: "li" }
  },
  emits: ["close", "escapeKeyDown", "pause", "resume", "swipeStart", "swipeMove", "swipeCancel", "swipeEnd"],
  setup(e, { emit: t }) {
    const n = e, o = t, { forwardRef: r, currentElement: s } = I(), a = Tt(), i = B(null), u = B(null), c = M(() => n.duration || a.duration.value), p = B(0), d = B(c.value), f = B(0), m = B(c.value), v = mo(() => {
      const x = (/* @__PURE__ */ new Date()).getTime() - p.value;
      m.value = Math.max(d.value - x, 0);
    }, { fpsLimit: 60 });
    function g(x) {
      !x || x === Number.POSITIVE_INFINITY || ge && (window.clearTimeout(f.value), p.value = (/* @__PURE__ */ new Date()).getTime(), f.value = window.setTimeout(h, x));
    }
    function h() {
      var x, E;
      (x = s.value) != null && x.contains(document.activeElement) && ((E = a.viewport.value) == null || E.focus()), a.isClosePausedRef.value = !1, o("close");
    }
    const b = M(() => s.value ? Vo(s.value) : null);
    if (n.type && !["foreground", "background"].includes(n.type)) {
      const x = "Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.";
      throw new Error(x);
    }
    return te((x) => {
      const E = a.viewport.value;
      if (E) {
        const T = () => {
          g(d.value), v.resume(), o("resume");
        }, A = () => {
          const k = (/* @__PURE__ */ new Date()).getTime() - p.value;
          d.value = d.value - k, window.clearTimeout(f.value), v.pause(), o("pause");
        };
        return E.addEventListener(Ut, A), E.addEventListener(Ht, T), () => {
          E.removeEventListener(Ut, A), E.removeEventListener(Ht, T);
        };
      }
    }), X(() => [n.open, c.value], () => {
      d.value = c.value, n.open && !a.isClosePausedRef.value && g(c.value);
    }, { immediate: !0 }), sn("Escape", (x) => {
      o("escapeKeyDown", x), x.defaultPrevented || (a.isFocusedToastEscapeKeyDownRef.value = !0, h());
    }), fe(() => {
      a.onToastAdd();
    }), He(() => {
      a.onToastRemove();
    }), Mi({ onClose: h }), (x, E) => (y(), J(Qe, null, [
      b.value ? (y(), _(Si, {
        key: 0,
        role: "status",
        "aria-live": x.type === "foreground" ? "assertive" : "polite",
        "aria-atomic": ""
      }, {
        default: w(() => [
          ht(et(b.value), 1)
        ]),
        _: 1
      }, 8, ["aria-live"])) : ie("", !0),
      l(a).viewport.value ? (y(), _(Xn, {
        key: 1,
        to: l(a).viewport.value
      }, [
        V(l(U), $({
          ref: l(r),
          role: "status",
          "aria-live": "off",
          "aria-atomic": "",
          tabindex: "0",
          "data-radix-vue-collection-item": ""
        }, x.$attrs, {
          as: x.as,
          "as-child": x.asChild,
          "data-state": x.open ? "open" : "closed",
          "data-swipe-direction": l(a).swipeDirection.value,
          style: { userSelect: "none", touchAction: "none" },
          onPointerdown: E[0] || (E[0] = yt((T) => {
            i.value = { x: T.clientX, y: T.clientY };
          }, ["left"])),
          onPointermove: E[1] || (E[1] = (T) => {
            if (!i.value)
              return;
            const A = T.clientX - i.value.x, k = T.clientY - i.value.y, R = !!u.value, z = ["left", "right"].includes(l(a).swipeDirection.value), N = ["left", "up"].includes(l(a).swipeDirection.value) ? Math.min : Math.max, O = z ? N(0, A) : 0, D = z ? 0 : N(0, k), S = T.pointerType === "touch" ? 10 : 2, G = { x: O, y: D }, F = { originalEvent: T, delta: G };
            R ? (u.value = G, l(mt)(l(Pi), (Y) => o("swipeMove", Y), F)) : l($n)(G, l(a).swipeDirection.value, S) ? (u.value = G, l(mt)(l(Ei), (Y) => o("swipeStart", Y), F), T.target.setPointerCapture(T.pointerId)) : (Math.abs(A) > S || Math.abs(k) > S) && (i.value = null);
          }),
          onPointerup: E[2] || (E[2] = (T) => {
            const A = u.value, k = T.target;
            if (k.hasPointerCapture(T.pointerId) && k.releasePointerCapture(T.pointerId), u.value = null, i.value = null, A) {
              const R = T.currentTarget, z = { originalEvent: T, delta: A };
              l($n)(A, l(a).swipeDirection.value, l(a).swipeThreshold.value) ? l(mt)(l(Ai), (N) => o("swipeEnd", N), z) : l(mt)(l(Ti), (N) => o("swipeCancel", N), z), R == null || R.addEventListener("click", (N) => N.preventDefault(), {
                once: !0
              });
            }
          })
        }), {
          default: w(() => [
            P(x.$slots, "default", {
              remaining: m.value,
              duration: c.value
            })
          ]),
          _: 3
        }, 16, ["as", "as-child", "data-state", "data-swipe-direction"])
      ], 8, ["to"])) : ie("", !0)
    ], 64));
  }
}), $i = /* @__PURE__ */ C({
  __name: "ToastRoot",
  props: {
    defaultOpen: { type: Boolean, default: !0 },
    forceMount: { type: Boolean },
    type: { default: "foreground" },
    open: { type: Boolean, default: void 0 },
    duration: {},
    asChild: { type: Boolean },
    as: { default: "li" }
  },
  emits: ["escapeKeyDown", "pause", "resume", "swipeStart", "swipeMove", "swipeCancel", "swipeEnd", "update:open"],
  setup(e, { emit: t }) {
    const n = e, o = t, { forwardRef: r } = I(), s = Pe(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    });
    return (a, i) => (y(), _(l(Xe), {
      present: a.forceMount || l(s)
    }, {
      default: w(() => [
        V(ki, $({
          ref: l(r),
          open: l(s),
          type: a.type,
          as: a.as,
          "as-child": a.asChild,
          duration: a.duration
        }, a.$attrs, {
          onClose: i[0] || (i[0] = (u) => s.value = !1),
          onPause: i[1] || (i[1] = (u) => o("pause")),
          onResume: i[2] || (i[2] = (u) => o("resume")),
          onEscapeKeyDown: i[3] || (i[3] = (u) => o("escapeKeyDown", u)),
          onSwipeStart: i[4] || (i[4] = (u) => {
            o("swipeStart", u), u.currentTarget.setAttribute("data-swipe", "start");
          }),
          onSwipeMove: i[5] || (i[5] = (u) => {
            const { x: c, y: p } = u.detail.delta, d = u.currentTarget;
            d.setAttribute("data-swipe", "move"), d.style.setProperty("--radix-toast-swipe-move-x", `${c}px`), d.style.setProperty("--radix-toast-swipe-move-y", `${p}px`);
          }),
          onSwipeCancel: i[6] || (i[6] = (u) => {
            const c = u.currentTarget;
            c.setAttribute("data-swipe", "cancel"), c.style.removeProperty("--radix-toast-swipe-move-x"), c.style.removeProperty("--radix-toast-swipe-move-y"), c.style.removeProperty("--radix-toast-swipe-end-x"), c.style.removeProperty("--radix-toast-swipe-end-y");
          }),
          onSwipeEnd: i[7] || (i[7] = (u) => {
            const { x: c, y: p } = u.detail.delta, d = u.currentTarget;
            d.setAttribute("data-swipe", "end"), d.style.removeProperty("--radix-toast-swipe-move-x"), d.style.removeProperty("--radix-toast-swipe-move-y"), d.style.setProperty("--radix-toast-swipe-end-x", `${c}px`), d.style.setProperty("--radix-toast-swipe-end-y", `${p}px`), s.value = !1;
          })
        }), {
          default: w(({ remaining: u, duration: c }) => [
            P(a.$slots, "default", {
              remaining: u,
              duration: c,
              open: l(s)
            })
          ]),
          _: 3
        }, 16, ["open", "type", "as", "as-child", "duration"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), zo = /* @__PURE__ */ C({
  __name: "ToastAnnounceExclude",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    return (t, n) => (y(), _(l(U), {
      as: t.as,
      "as-child": t.asChild,
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": t.altText || void 0
    }, {
      default: w(() => [
        P(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-radix-toast-announce-alt"]));
  }
}), Wo = /* @__PURE__ */ C({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Di(), { forwardRef: o } = I();
    return (r, s) => (y(), _(zo, { "as-child": "" }, {
      default: w(() => [
        V(l(U), $(t, {
          ref: l(o),
          type: r.as === "button" ? "button" : void 0,
          onClick: s[0] || (s[0] = (a) => l(n).onClose())
        }), {
          default: w(() => [
            P(r.$slots, "default")
          ]),
          _: 3
        }, 16, ["type"])
      ]),
      _: 3
    }));
  }
}), Ri = /* @__PURE__ */ C({
  __name: "ToastAction",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    if (!e.altText)
      throw new Error("Missing prop `altText` expected on `ToastAction`");
    const { forwardRef: t } = I();
    return (n, o) => n.altText ? (y(), _(zo, {
      key: 0,
      "alt-text": n.altText,
      "as-child": ""
    }, {
      default: w(() => [
        V(Wo, {
          ref: l(t),
          as: n.as,
          "as-child": n.asChild
        }, {
          default: w(() => [
            P(n.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child"])
      ]),
      _: 3
    }, 8, ["alt-text"])) : ie("", !0);
  }
}), Rn = /* @__PURE__ */ C({
  __name: "FocusProxy",
  emits: ["focusFromOutsideViewport"],
  setup(e, { emit: t }) {
    const n = t, o = Tt();
    return (r, s) => (y(), _(l(Do), {
      "aria-hidden": "true",
      tabindex: "0",
      style: { position: "fixed" },
      onFocus: s[0] || (s[0] = (a) => {
        var i;
        const u = a.relatedTarget;
        !((i = l(o).viewport.value) != null && i.contains(u)) && n("focusFromOutsideViewport");
      })
    }, {
      default: w(() => [
        P(r.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Ii = /* @__PURE__ */ C({
  inheritAttrs: !1,
  __name: "ToastViewport",
  props: {
    hotkey: { default: () => ["F8"] },
    label: { type: [String, Function], default: "Notifications ({hotkey})" },
    asChild: { type: Boolean },
    as: { default: "ol" }
  },
  setup(e) {
    const t = e, { hotkey: n, label: o } = Oe(t), { forwardRef: r, currentElement: s } = I(), { createCollection: a } = ho(), i = a(s), u = Tt(), c = M(() => u.toastCount.value > 0), p = B(), d = B(), f = M(() => n.value.join("+").replace(/Key/g, "").replace(/Digit/g, ""));
    sn(n.value, () => {
      s.value.focus();
    }), fe(() => {
      u.onViewportChange(s.value);
    }), te((v) => {
      const g = s.value;
      if (c.value && g) {
        const h = () => {
          if (!u.isClosePausedRef.value) {
            const A = new CustomEvent(Ut);
            g.dispatchEvent(A), u.isClosePausedRef.value = !0;
          }
        }, b = () => {
          if (u.isClosePausedRef.value) {
            const A = new CustomEvent(Ht);
            g.dispatchEvent(A), u.isClosePausedRef.value = !1;
          }
        }, x = (A) => {
          !g.contains(A.relatedTarget) && b();
        }, E = () => {
          g.contains(document.activeElement) || b();
        }, T = (A) => {
          var k, R, z;
          const N = A.altKey || A.ctrlKey || A.metaKey;
          if (A.key === "Tab" && !N) {
            const O = document.activeElement, D = A.shiftKey;
            if (A.target === g && D) {
              (k = p.value) == null || k.focus();
              return;
            }
            const S = m({ tabbingDirection: D ? "backwards" : "forwards" }), G = S.findIndex((F) => F === O);
            gt(S.slice(G + 1)) ? A.preventDefault() : D ? (R = p.value) == null || R.focus() : (z = d.value) == null || z.focus();
          }
        };
        g.addEventListener("focusin", h), g.addEventListener("focusout", x), g.addEventListener("pointermove", h), g.addEventListener("pointerleave", E), g.addEventListener("keydown", T), window.addEventListener("blur", h), window.addEventListener("focus", b), v(() => {
          g.removeEventListener("focusin", h), g.removeEventListener("focusout", x), g.removeEventListener("pointermove", h), g.removeEventListener("pointerleave", E), g.removeEventListener("keydown", T), window.removeEventListener("blur", h), window.removeEventListener("focus", b);
        });
      }
    });
    function m({ tabbingDirection: v }) {
      const g = i.value.map((h) => {
        const b = [h, ...dn(h)];
        return v === "forwards" ? b : b.reverse();
      });
      return (v === "forwards" ? g.reverse() : g).flat();
    }
    return (v, g) => (y(), _(l(Zs), {
      role: "region",
      "aria-label": typeof l(o) == "string" ? l(o).replace("{hotkey}", f.value) : l(o)(f.value),
      tabindex: "-1",
      style: Xt({
        pointerEvents: c.value ? void 0 : "none"
      })
    }, {
      default: w(() => [
        c.value ? (y(), _(Rn, {
          key: 0,
          ref: (h) => {
            p.value = l(Ce)(h);
          },
          onFocusFromOutsideViewport: g[0] || (g[0] = () => {
            const h = m({
              tabbingDirection: "forwards"
            });
            l(gt)(h);
          })
        }, null, 512)) : ie("", !0),
        V(l(U), $({
          ref: l(r),
          tabindex: "-1",
          as: v.as,
          "as-child": v.asChild
        }, v.$attrs), {
          default: w(() => [
            P(v.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child"]),
        c.value ? (y(), _(Rn, {
          key: 1,
          ref: (h) => {
            d.value = l(Ce)(h);
          },
          onFocusFromOutsideViewport: g[1] || (g[1] = () => {
            const h = m({
              tabbingDirection: "backwards"
            });
            l(gt)(h);
          })
        }, null, 512)) : ie("", !0)
      ]),
      _: 3
    }, 8, ["aria-label", "style"]));
  }
}), Li = /* @__PURE__ */ C({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return I(), (n, o) => (y(), _(l(U), W(K(t)), {
      default: w(() => [
        P(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Fi = /* @__PURE__ */ C({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return I(), (n, o) => (y(), _(l(U), W(K(t)), {
      default: w(() => [
        P(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function jo(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number")
    o += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var r = e.length;
      for (t = 0; t < r; t++)
        e[t] && (n = jo(e[t])) && (o && (o += " "), o += n);
    } else
      for (n in e)
        e[n] && (o && (o += " "), o += n);
  return o;
}
function Ni() {
  for (var e, t, n = 0, o = "", r = arguments.length; n < r; n++)
    (e = arguments[n]) && (t = jo(e)) && (o && (o += " "), o += t);
  return o;
}
const yn = "-", Vi = (e) => {
  const t = Wi(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (a) => {
      const i = a.split(yn);
      return i[0] === "" && i.length !== 1 && i.shift(), Ko(i, t) || zi(a);
    },
    getConflictingClassGroupIds: (a, i) => {
      const u = n[a] || [];
      return i && o[a] ? [...u, ...o[a]] : u;
    }
  };
}, Ko = (e, t) => {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], o = t.nextPart.get(n), r = o ? Ko(e.slice(1), o) : void 0;
  if (r)
    return r;
  if (t.validators.length === 0)
    return;
  const s = e.join(yn);
  return (a = t.validators.find(({
    validator: i
  }) => i(s))) == null ? void 0 : a.classGroupId;
}, In = /^\[(.+)\]$/, zi = (e) => {
  if (In.test(e)) {
    const t = In.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, Wi = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Ki(Object.entries(e.classGroups), n).forEach(([s, a]) => {
    qt(a, o, s, t);
  }), o;
}, qt = (e, t, n, o) => {
  e.forEach((r) => {
    if (typeof r == "string") {
      const s = r === "" ? t : Ln(t, r);
      s.classGroupId = n;
      return;
    }
    if (typeof r == "function") {
      if (ji(r)) {
        qt(r(o), t, n, o);
        return;
      }
      t.validators.push({
        validator: r,
        classGroupId: n
      });
      return;
    }
    Object.entries(r).forEach(([s, a]) => {
      qt(a, Ln(t, s), n, o);
    });
  });
}, Ln = (e, t) => {
  let n = e;
  return t.split(yn).forEach((o) => {
    n.nextPart.has(o) || n.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(o);
  }), n;
}, ji = (e) => e.isThemeGetter, Ki = (e, t) => t ? e.map(([n, o]) => {
  const r = o.map((s) => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([a, i]) => [t + a, i])) : s);
  return [n, r];
}) : e, Gi = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  const r = (s, a) => {
    n.set(s, a), t++, t > e && (t = 0, o = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(s) {
      let a = n.get(s);
      if (a !== void 0)
        return a;
      if ((a = o.get(s)) !== void 0)
        return r(s, a), a;
    },
    set(s, a) {
      n.has(s) ? n.set(s, a) : r(s, a);
    }
  };
}, Go = "!", Ui = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, o = t.length === 1, r = t[0], s = t.length, a = (i) => {
    const u = [];
    let c = 0, p = 0, d;
    for (let h = 0; h < i.length; h++) {
      let b = i[h];
      if (c === 0) {
        if (b === r && (o || i.slice(h, h + s) === t)) {
          u.push(i.slice(p, h)), p = h + s;
          continue;
        }
        if (b === "/") {
          d = h;
          continue;
        }
      }
      b === "[" ? c++ : b === "]" && c--;
    }
    const f = u.length === 0 ? i : i.substring(p), m = f.startsWith(Go), v = m ? f.substring(1) : f, g = d && d > p ? d - p : void 0;
    return {
      modifiers: u,
      hasImportantModifier: m,
      baseClassName: v,
      maybePostfixModifierPosition: g
    };
  };
  return n ? (i) => n({
    className: i,
    parseClassName: a
  }) : a;
}, Hi = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((o) => {
    o[0] === "[" ? (t.push(...n.sort(), o), n = []) : n.push(o);
  }), t.push(...n.sort()), t;
}, qi = (e) => ({
  cache: Gi(e.cacheSize),
  parseClassName: Ui(e),
  ...Vi(e)
}), Xi = /\s+/, Yi = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: o,
    getConflictingClassGroupIds: r
  } = t, s = [], a = e.trim().split(Xi);
  let i = "";
  for (let u = a.length - 1; u >= 0; u -= 1) {
    const c = a[u], {
      modifiers: p,
      hasImportantModifier: d,
      baseClassName: f,
      maybePostfixModifierPosition: m
    } = n(c);
    let v = Boolean(m), g = o(v ? f.substring(0, m) : f);
    if (!g) {
      if (!v) {
        i = c + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (g = o(f), !g) {
        i = c + (i.length > 0 ? " " + i : i);
        continue;
      }
      v = !1;
    }
    const h = Hi(p).join(":"), b = d ? h + Go : h, x = b + g;
    if (s.includes(x))
      continue;
    s.push(x);
    const E = r(g, v);
    for (let T = 0; T < E.length; ++T) {
      const A = E[T];
      s.push(b + A);
    }
    i = c + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function Zi() {
  let e = 0, t, n, o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Uo(t)) && (o && (o += " "), o += n);
  return o;
}
const Uo = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = Uo(e[o])) && (n && (n += " "), n += t);
  return n;
};
function Ji(e, ...t) {
  let n, o, r, s = a;
  function a(u) {
    const c = t.reduce((p, d) => d(p), e());
    return n = qi(c), o = n.cache.get, r = n.cache.set, s = i, i(u);
  }
  function i(u) {
    const c = o(u);
    if (c)
      return c;
    const p = Yi(u, n);
    return r(u, p), p;
  }
  return function() {
    return s(Zi.apply(null, arguments));
  };
}
const j = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, Ho = /^\[(?:([a-z-]+):)?(.+)\]$/i, Qi = /^\d+\/\d+$/, el = /* @__PURE__ */ new Set(["px", "full", "screen"]), tl = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, nl = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ol = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, rl = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, sl = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, we = (e) => Ge(e) || el.has(e) || Qi.test(e), Te = (e) => Ye(e, "length", fl), Ge = (e) => Boolean(e) && !Number.isNaN(Number(e)), Ft = (e) => Ye(e, "number", Ge), Ze = (e) => Boolean(e) && Number.isInteger(Number(e)), al = (e) => e.endsWith("%") && Ge(e.slice(0, -1)), L = (e) => Ho.test(e), Ae = (e) => tl.test(e), il = /* @__PURE__ */ new Set(["length", "size", "percentage"]), ll = (e) => Ye(e, il, qo), ul = (e) => Ye(e, "position", qo), cl = /* @__PURE__ */ new Set(["image", "url"]), dl = (e) => Ye(e, cl, vl), pl = (e) => Ye(e, "", ml), Je = () => !0, Ye = (e, t, n) => {
  const o = Ho.exec(e);
  return o ? o[1] ? typeof t == "string" ? o[1] === t : t.has(o[1]) : n(o[2]) : !1;
}, fl = (e) => nl.test(e) && !ol.test(e), qo = () => !1, ml = (e) => rl.test(e), vl = (e) => sl.test(e), gl = () => {
  const e = j("colors"), t = j("spacing"), n = j("blur"), o = j("brightness"), r = j("borderColor"), s = j("borderRadius"), a = j("borderSpacing"), i = j("borderWidth"), u = j("contrast"), c = j("grayscale"), p = j("hueRotate"), d = j("invert"), f = j("gap"), m = j("gradientColorStops"), v = j("gradientColorStopPositions"), g = j("inset"), h = j("margin"), b = j("opacity"), x = j("padding"), E = j("saturate"), T = j("scale"), A = j("sepia"), k = j("skew"), R = j("space"), z = j("translate"), N = () => ["auto", "contain", "none"], O = () => ["auto", "hidden", "clip", "visible", "scroll"], D = () => ["auto", L, t], S = () => [L, t], G = () => ["", we, Te], F = () => ["auto", Ge, L], Y = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], q = () => ["solid", "dashed", "dotted", "double", "none"], ne = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ae = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], ee = () => ["", "0", L], ut = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], ye = () => [Ge, L];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Je],
      spacing: [we, Te],
      blur: ["none", "", Ae, L],
      brightness: ye(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Ae, L],
      borderSpacing: S(),
      borderWidth: G(),
      contrast: ye(),
      grayscale: ee(),
      hueRotate: ye(),
      invert: ee(),
      gap: S(),
      gradientColorStops: [e],
      gradientColorStopPositions: [al, Te],
      inset: D(),
      margin: D(),
      opacity: ye(),
      padding: S(),
      saturate: ye(),
      scale: ye(),
      sepia: ee(),
      skew: ye(),
      space: S(),
      translate: S()
    },
    classGroups: {
      aspect: [{
        aspect: ["auto", "square", "video", L]
      }],
      container: ["container"],
      columns: [{
        columns: [Ae]
      }],
      "break-after": [{
        "break-after": ut()
      }],
      "break-before": [{
        "break-before": ut()
      }],
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      box: [{
        box: ["border", "content"]
      }],
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      isolation: ["isolate", "isolation-auto"],
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      "object-position": [{
        object: [...Y(), L]
      }],
      overflow: [{
        overflow: O()
      }],
      "overflow-x": [{
        "overflow-x": O()
      }],
      "overflow-y": [{
        "overflow-y": O()
      }],
      overscroll: [{
        overscroll: N()
      }],
      "overscroll-x": [{
        "overscroll-x": N()
      }],
      "overscroll-y": [{
        "overscroll-y": N()
      }],
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      inset: [{
        inset: [g]
      }],
      "inset-x": [{
        "inset-x": [g]
      }],
      "inset-y": [{
        "inset-y": [g]
      }],
      start: [{
        start: [g]
      }],
      end: [{
        end: [g]
      }],
      top: [{
        top: [g]
      }],
      right: [{
        right: [g]
      }],
      bottom: [{
        bottom: [g]
      }],
      left: [{
        left: [g]
      }],
      visibility: ["visible", "invisible", "collapse"],
      z: [{
        z: ["auto", Ze, L]
      }],
      basis: [{
        basis: D()
      }],
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      flex: [{
        flex: ["1", "auto", "initial", "none", L]
      }],
      grow: [{
        grow: ee()
      }],
      shrink: [{
        shrink: ee()
      }],
      order: [{
        order: ["first", "last", "none", Ze, L]
      }],
      "grid-cols": [{
        "grid-cols": [Je]
      }],
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Ze, L]
        }, L]
      }],
      "col-start": [{
        "col-start": F()
      }],
      "col-end": [{
        "col-end": F()
      }],
      "grid-rows": [{
        "grid-rows": [Je]
      }],
      "row-start-end": [{
        row: ["auto", {
          span: [Ze, L]
        }, L]
      }],
      "row-start": [{
        "row-start": F()
      }],
      "row-end": [{
        "row-end": F()
      }],
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", L]
      }],
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", L]
      }],
      gap: [{
        gap: [f]
      }],
      "gap-x": [{
        "gap-x": [f]
      }],
      "gap-y": [{
        "gap-y": [f]
      }],
      "justify-content": [{
        justify: ["normal", ...ae()]
      }],
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      "align-content": [{
        content: ["normal", ...ae(), "baseline"]
      }],
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      "place-content": [{
        "place-content": [...ae(), "baseline"]
      }],
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      p: [{
        p: [x]
      }],
      px: [{
        px: [x]
      }],
      py: [{
        py: [x]
      }],
      ps: [{
        ps: [x]
      }],
      pe: [{
        pe: [x]
      }],
      pt: [{
        pt: [x]
      }],
      pr: [{
        pr: [x]
      }],
      pb: [{
        pb: [x]
      }],
      pl: [{
        pl: [x]
      }],
      m: [{
        m: [h]
      }],
      mx: [{
        mx: [h]
      }],
      my: [{
        my: [h]
      }],
      ms: [{
        ms: [h]
      }],
      me: [{
        me: [h]
      }],
      mt: [{
        mt: [h]
      }],
      mr: [{
        mr: [h]
      }],
      mb: [{
        mb: [h]
      }],
      ml: [{
        ml: [h]
      }],
      "space-x": [{
        "space-x": [R]
      }],
      "space-x-reverse": ["space-x-reverse"],
      "space-y": [{
        "space-y": [R]
      }],
      "space-y-reverse": ["space-y-reverse"],
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", L, t]
      }],
      "min-w": [{
        "min-w": [L, t, "min", "max", "fit"]
      }],
      "max-w": [{
        "max-w": [L, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [Ae]
        }, Ae]
      }],
      h: [{
        h: [L, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      "min-h": [{
        "min-h": [L, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      "max-h": [{
        "max-h": [L, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      size: [{
        size: [L, t, "auto", "min", "max", "fit"]
      }],
      "font-size": [{
        text: ["base", Ae, Te]
      }],
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      "font-style": ["italic", "not-italic"],
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ft]
      }],
      "font-family": [{
        font: [Je]
      }],
      "fvn-normal": ["normal-nums"],
      "fvn-ordinal": ["ordinal"],
      "fvn-slashed-zero": ["slashed-zero"],
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", L]
      }],
      "line-clamp": [{
        "line-clamp": ["none", Ge, Ft]
      }],
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", we, L]
      }],
      "list-image": [{
        "list-image": ["none", L]
      }],
      "list-style-type": [{
        list: ["none", "disc", "decimal", L]
      }],
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      "placeholder-color": [{
        placeholder: [e]
      }],
      "placeholder-opacity": [{
        "placeholder-opacity": [b]
      }],
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      "text-color": [{
        text: [e]
      }],
      "text-opacity": [{
        "text-opacity": [b]
      }],
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      "text-decoration-style": [{
        decoration: [...q(), "wavy"]
      }],
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", we, Te]
      }],
      "underline-offset": [{
        "underline-offset": ["auto", we, L]
      }],
      "text-decoration-color": [{
        decoration: [e]
      }],
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      indent: [{
        indent: S()
      }],
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", L]
      }],
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      content: [{
        content: ["none", L]
      }],
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      "bg-opacity": [{
        "bg-opacity": [b]
      }],
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      "bg-position": [{
        bg: [...Y(), ul]
      }],
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      "bg-size": [{
        bg: ["auto", "cover", "contain", ll]
      }],
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, dl]
      }],
      "bg-color": [{
        bg: [e]
      }],
      "gradient-from-pos": [{
        from: [v]
      }],
      "gradient-via-pos": [{
        via: [v]
      }],
      "gradient-to-pos": [{
        to: [v]
      }],
      "gradient-from": [{
        from: [m]
      }],
      "gradient-via": [{
        via: [m]
      }],
      "gradient-to": [{
        to: [m]
      }],
      rounded: [{
        rounded: [s]
      }],
      "rounded-s": [{
        "rounded-s": [s]
      }],
      "rounded-e": [{
        "rounded-e": [s]
      }],
      "rounded-t": [{
        "rounded-t": [s]
      }],
      "rounded-r": [{
        "rounded-r": [s]
      }],
      "rounded-b": [{
        "rounded-b": [s]
      }],
      "rounded-l": [{
        "rounded-l": [s]
      }],
      "rounded-ss": [{
        "rounded-ss": [s]
      }],
      "rounded-se": [{
        "rounded-se": [s]
      }],
      "rounded-ee": [{
        "rounded-ee": [s]
      }],
      "rounded-es": [{
        "rounded-es": [s]
      }],
      "rounded-tl": [{
        "rounded-tl": [s]
      }],
      "rounded-tr": [{
        "rounded-tr": [s]
      }],
      "rounded-br": [{
        "rounded-br": [s]
      }],
      "rounded-bl": [{
        "rounded-bl": [s]
      }],
      "border-w": [{
        border: [i]
      }],
      "border-w-x": [{
        "border-x": [i]
      }],
      "border-w-y": [{
        "border-y": [i]
      }],
      "border-w-s": [{
        "border-s": [i]
      }],
      "border-w-e": [{
        "border-e": [i]
      }],
      "border-w-t": [{
        "border-t": [i]
      }],
      "border-w-r": [{
        "border-r": [i]
      }],
      "border-w-b": [{
        "border-b": [i]
      }],
      "border-w-l": [{
        "border-l": [i]
      }],
      "border-opacity": [{
        "border-opacity": [b]
      }],
      "border-style": [{
        border: [...q(), "hidden"]
      }],
      "divide-x": [{
        "divide-x": [i]
      }],
      "divide-x-reverse": ["divide-x-reverse"],
      "divide-y": [{
        "divide-y": [i]
      }],
      "divide-y-reverse": ["divide-y-reverse"],
      "divide-opacity": [{
        "divide-opacity": [b]
      }],
      "divide-style": [{
        divide: q()
      }],
      "border-color": [{
        border: [r]
      }],
      "border-color-x": [{
        "border-x": [r]
      }],
      "border-color-y": [{
        "border-y": [r]
      }],
      "border-color-t": [{
        "border-t": [r]
      }],
      "border-color-r": [{
        "border-r": [r]
      }],
      "border-color-b": [{
        "border-b": [r]
      }],
      "border-color-l": [{
        "border-l": [r]
      }],
      "divide-color": [{
        divide: [r]
      }],
      "outline-style": [{
        outline: ["", ...q()]
      }],
      "outline-offset": [{
        "outline-offset": [we, L]
      }],
      "outline-w": [{
        outline: [we, Te]
      }],
      "outline-color": [{
        outline: [e]
      }],
      "ring-w": [{
        ring: G()
      }],
      "ring-w-inset": ["ring-inset"],
      "ring-color": [{
        ring: [e]
      }],
      "ring-opacity": [{
        "ring-opacity": [b]
      }],
      "ring-offset-w": [{
        "ring-offset": [we, Te]
      }],
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      shadow: [{
        shadow: ["", "inner", "none", Ae, pl]
      }],
      "shadow-color": [{
        shadow: [Je]
      }],
      opacity: [{
        opacity: [b]
      }],
      "mix-blend": [{
        "mix-blend": [...ne(), "plus-lighter", "plus-darker"]
      }],
      "bg-blend": [{
        "bg-blend": ne()
      }],
      filter: [{
        filter: ["", "none"]
      }],
      blur: [{
        blur: [n]
      }],
      brightness: [{
        brightness: [o]
      }],
      contrast: [{
        contrast: [u]
      }],
      "drop-shadow": [{
        "drop-shadow": ["", "none", Ae, L]
      }],
      grayscale: [{
        grayscale: [c]
      }],
      "hue-rotate": [{
        "hue-rotate": [p]
      }],
      invert: [{
        invert: [d]
      }],
      saturate: [{
        saturate: [E]
      }],
      sepia: [{
        sepia: [A]
      }],
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      "backdrop-blur": [{
        "backdrop-blur": [n]
      }],
      "backdrop-brightness": [{
        "backdrop-brightness": [o]
      }],
      "backdrop-contrast": [{
        "backdrop-contrast": [u]
      }],
      "backdrop-grayscale": [{
        "backdrop-grayscale": [c]
      }],
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [p]
      }],
      "backdrop-invert": [{
        "backdrop-invert": [d]
      }],
      "backdrop-opacity": [{
        "backdrop-opacity": [b]
      }],
      "backdrop-saturate": [{
        "backdrop-saturate": [E]
      }],
      "backdrop-sepia": [{
        "backdrop-sepia": [A]
      }],
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      "border-spacing": [{
        "border-spacing": [a]
      }],
      "border-spacing-x": [{
        "border-spacing-x": [a]
      }],
      "border-spacing-y": [{
        "border-spacing-y": [a]
      }],
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      caption: [{
        caption: ["top", "bottom"]
      }],
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", L]
      }],
      duration: [{
        duration: ye()
      }],
      ease: [{
        ease: ["linear", "in", "out", "in-out", L]
      }],
      delay: [{
        delay: ye()
      }],
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", L]
      }],
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      scale: [{
        scale: [T]
      }],
      "scale-x": [{
        "scale-x": [T]
      }],
      "scale-y": [{
        "scale-y": [T]
      }],
      rotate: [{
        rotate: [Ze, L]
      }],
      "translate-x": [{
        "translate-x": [z]
      }],
      "translate-y": [{
        "translate-y": [z]
      }],
      "skew-x": [{
        "skew-x": [k]
      }],
      "skew-y": [{
        "skew-y": [k]
      }],
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", L]
      }],
      accent: [{
        accent: ["auto", e]
      }],
      appearance: [{
        appearance: ["none", "auto"]
      }],
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", L]
      }],
      "caret-color": [{
        caret: [e]
      }],
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      "scroll-m": [{
        "scroll-m": S()
      }],
      "scroll-mx": [{
        "scroll-mx": S()
      }],
      "scroll-my": [{
        "scroll-my": S()
      }],
      "scroll-ms": [{
        "scroll-ms": S()
      }],
      "scroll-me": [{
        "scroll-me": S()
      }],
      "scroll-mt": [{
        "scroll-mt": S()
      }],
      "scroll-mr": [{
        "scroll-mr": S()
      }],
      "scroll-mb": [{
        "scroll-mb": S()
      }],
      "scroll-ml": [{
        "scroll-ml": S()
      }],
      "scroll-p": [{
        "scroll-p": S()
      }],
      "scroll-px": [{
        "scroll-px": S()
      }],
      "scroll-py": [{
        "scroll-py": S()
      }],
      "scroll-ps": [{
        "scroll-ps": S()
      }],
      "scroll-pe": [{
        "scroll-pe": S()
      }],
      "scroll-pt": [{
        "scroll-pt": S()
      }],
      "scroll-pr": [{
        "scroll-pr": S()
      }],
      "scroll-pb": [{
        "scroll-pb": S()
      }],
      "scroll-pl": [{
        "scroll-pl": S()
      }],
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      "touch-pz": ["touch-pinch-zoom"],
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", L]
      }],
      fill: [{
        fill: [e, "none"]
      }],
      "stroke-w": [{
        stroke: [we, Te, Ft]
      }],
      stroke: [{
        stroke: [e, "none"]
      }],
      sr: ["sr-only", "not-sr-only"],
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, hl = /* @__PURE__ */ Ji(gl);
function H(...e) {
  return hl(Ni(e));
}
const yl = /* @__PURE__ */ C({
  __name: "Toast",
  props: {
    class: {},
    variant: {},
    onOpenChange: { type: Function },
    defaultOpen: { type: Boolean },
    forceMount: { type: Boolean },
    type: {},
    open: { type: Boolean },
    duration: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pause", "resume", "swipeStart", "swipeMove", "swipeCancel", "swipeEnd", "update:open"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = M(() => {
      const { class: a, ...i } = n;
      return i;
    }), s = Z(r, o);
    return (a, i) => (y(), _(l($i), $(l(s), {
      class: l(H)(l(Tl)({ variant: a.variant }), n.class),
      "onUpdate:open": a.onOpenChange
    }), {
      default: w(() => [
        P(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class", "onUpdate:open"]));
  }
}), wl = /* @__PURE__ */ C({
  __name: "ToastViewport",
  props: {
    hotkey: {},
    label: { type: [String, Function] },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = M(() => {
      const { class: o, ...r } = t;
      return r;
    });
    return (o, r) => (y(), _(l(Ii), $(n.value, {
      class: l(H)(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        t.class
      )
    }), null, 16, ["class"]));
  }
}), Nl = /* @__PURE__ */ C({
  __name: "ToastAction",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = M(() => {
      const { class: o, ...r } = t;
      return r;
    });
    return (o, r) => (y(), _(l(Ri), $(n.value, {
      class: l(H)(
        "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
        t.class
      )
    }), {
      default: w(() => [
        P(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
});
function bl(e, t) {
  return y(), J("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    ce("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",
      fill: "currentColor"
    })
  ]);
}
function xl(e, t) {
  return y(), J("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    ce("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z",
      fill: "currentColor"
    })
  ]);
}
function Xo(e, t) {
  return y(), J("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    ce("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
      fill: "currentColor"
    })
  ]);
}
function _l(e, t) {
  return y(), J("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    ce("path", {
      d: "M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z",
      fill: "currentColor"
    })
  ]);
}
const Cl = /* @__PURE__ */ C({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = M(() => {
      const { class: o, ...r } = t;
      return r;
    });
    return (o, r) => (y(), _(l(Wo), $(n.value, {
      class: l(H)(
        "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
        t.class
      )
    }), {
      default: w(() => [
        V(l(Xo), { class: "h-4 w-4" })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Ol = /* @__PURE__ */ C({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = M(() => {
      const { class: o, ...r } = t;
      return r;
    });
    return (o, r) => (y(), _(l(Li), $(n.value, {
      class: l(H)("text-sm font-semibold [&+div]:text-xs", t.class)
    }), {
      default: w(() => [
        P(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Fn = /* @__PURE__ */ C({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = M(() => {
      const { class: o, ...r } = t;
      return r;
    });
    return (o, r) => (y(), _(l(Fi), $({
      class: l(H)("text-sm opacity-90", t.class)
    }, n.value), {
      default: w(() => [
        P(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), El = /* @__PURE__ */ C({
  __name: "ToastProvider",
  props: {
    label: {},
    duration: {},
    swipeDirection: {},
    swipeThreshold: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (y(), _(l(Oi), W(K(t)), {
      default: w(() => [
        P(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Yo(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number")
    o += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Yo(e[t])) && (o && (o += " "), o += n);
    else
      for (t in e)
        e[t] && (o && (o += " "), o += t);
  return o;
}
function Pl() {
  for (var e, t, n = 0, o = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Yo(e)) && (o && (o += " "), o += t);
  return o;
}
const Nn = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, Vn = Pl, Zo = (e, t) => (n) => {
  var o;
  if ((t == null ? void 0 : t.variants) == null)
    return Vn(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: r, defaultVariants: s } = t, a = Object.keys(r).map((c) => {
    const p = n == null ? void 0 : n[c], d = s == null ? void 0 : s[c];
    if (p === null)
      return null;
    const f = Nn(p) || Nn(d);
    return r[c][f];
  }), i = n && Object.entries(n).reduce((c, p) => {
    let [d, f] = p;
    return f === void 0 || (c[d] = f), c;
  }, {}), u = t == null || (o = t.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((c, p) => {
    let { class: d, className: f, ...m } = p;
    return Object.entries(m).every((v) => {
      let [g, h] = v;
      return Array.isArray(h) ? h.includes({
        ...s,
        ...i
      }[g]) : {
        ...s,
        ...i
      }[g] === h;
    }) ? [
      ...c,
      d,
      f
    ] : c;
  }, []);
  return Vn(e, a, u, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, Tl = Zo(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Al(e, t) {
  return y(), J("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    ce("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    })
  ]);
}
function zn(e, t) {
  return y(), J("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    ce("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
    })
  ]);
}
function Bl(e, t) {
  return y(), J("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    ce("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
    })
  ]);
}
const { toast: vt } = to();
function Sl() {
  return {
    info: (e) => {
      vt({
        icon: Bl,
        iconClasses: "text-blue-400",
        title: "FYI",
        description: e
      });
    },
    success: (e) => {
      vt({
        icon: Al,
        iconClasses: "text-green-400",
        title: "Success",
        description: e
      });
    },
    warning: (e) => {
      vt({
        icon: zn,
        iconClasses: "text-orange-400",
        title: "Warning",
        description: e
      });
    },
    error: (e, t = !1, n = !0) => {
      vt({
        icon: zn,
        iconClasses: "text-red-400",
        title: "Oh snap! Some errors were encountered."
      });
    }
  };
}
const Dl = { name: "Notifications" }, Vl = /* @__PURE__ */ C({
  ...Dl,
  props: {
    info: {},
    success: {},
    warning: {},
    errors: {},
    showErrorKeys: { type: Boolean, default: !1 },
    showErrorValues: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e, {
      info: n,
      success: o,
      warning: r,
      error: s
    } = Sl();
    return X(
      () => t.info,
      (a) => {
        a && n(t.info);
      },
      {
        immediate: !0
      }
    ), X(
      () => t.success,
      (a) => {
        a && o(t.success);
      },
      { immediate: !0 }
    ), X(
      () => t.warning,
      (a) => {
        a && r(t.warning);
      },
      { immediate: !0 }
    ), X(
      () => t.errors,
      () => {
        t.errors !== void 0 && Object.keys(t.errors).length > 0 && s(t.errors);
      }
    ), (a, i) => (y(), _(l(hr)));
  }
}), zl = /* @__PURE__ */ C({
  __name: "DropdownMenu",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const r = Z(e, t);
    return (s, a) => (y(), _(l(li), W(K(l(r))), {
      default: w(() => [
        P(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Wl = /* @__PURE__ */ C({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const n = it(e);
    return (o, r) => (y(), _(l(ui), $({ class: "outline-none" }, l(n)), {
      default: w(() => [
        P(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), jl = /* @__PURE__ */ C({
  __name: "DropdownMenuContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    side: {},
    sideOffset: { default: 4 },
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = M(() => {
      const { class: a, ...i } = n;
      return i;
    }), s = Z(r, o);
    return (a, i) => (y(), _(l(ci), null, {
      default: w(() => [
        V(l(di), $(l(s), {
          class: l(H)(
            "z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            n.class
          )
        }), {
          default: w(() => [
            P(a.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Kl = /* @__PURE__ */ C({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (y(), _(l(fi), W(K(t)), {
      default: w(() => [
        P(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Gl = /* @__PURE__ */ C({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = Z(e, t);
    return (s, a) => (y(), _(l(hi), W(K(l(r))), {
      default: w(() => [
        P(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ul = /* @__PURE__ */ C({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  setup(e) {
    const t = e, n = M(() => {
      const { class: r, ...s } = t;
      return s;
    }), o = it(n);
    return (r, s) => (y(), _(l(pi), $(l(o), {
      class: l(H)(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        r.inset && "pl-8",
        t.class
      )
    }), {
      default: w(() => [
        P(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ml = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, Hl = /* @__PURE__ */ C({
  __name: "DropdownMenuCheckboxItem",
  props: {
    checked: { type: [Boolean, String] },
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["select", "update:checked"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = M(() => {
      const { class: a, ...i } = n;
      return i;
    }), s = Z(r, o);
    return (a, i) => (y(), _(l(vi), $(l(s), {
      class: l(H)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        n.class
      )
    }), {
      default: w(() => [
        ce("span", Ml, [
          V(l(No), null, {
            default: w(() => [
              V(l(bl), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        P(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), kl = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, ql = /* @__PURE__ */ C({
  __name: "DropdownMenuRadioItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = M(() => {
      const { class: a, ...i } = n;
      return i;
    }), s = Z(r, o);
    return (a, i) => (y(), _(l(yi), $(l(s), {
      class: l(H)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        n.class
      )
    }), {
      default: w(() => [
        ce("span", kl, [
          V(l(No), null, {
            default: w(() => [
              V(l(_l), { class: "h-4 w-4 fill-current" })
            ]),
            _: 1
          })
        ]),
        P(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Xl = /* @__PURE__ */ C({
  __name: "DropdownMenuShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (y(), J("span", {
      class: Ot(l(H)("ml-auto text-xs tracking-widest opacity-60", t.class))
    }, [
      P(n.$slots, "default")
    ], 2));
  }
}), Yl = /* @__PURE__ */ C({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = M(() => {
      const { class: o, ...r } = t;
      return r;
    });
    return (o, r) => (y(), _(l(mi), $(n.value, {
      class: l(H)("-mx-1 my-1 h-px bg-muted", t.class)
    }), null, 16, ["class"]));
  }
}), Zl = /* @__PURE__ */ C({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  setup(e) {
    const t = e, n = M(() => {
      const { class: r, ...s } = t;
      return s;
    }), o = it(n);
    return (r, s) => (y(), _(l(gi), $(l(o), {
      class: l(H)("px-2 py-1.5 text-sm font-semibold", r.inset && "pl-8", t.class)
    }), {
      default: w(() => [
        P(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Jl = /* @__PURE__ */ C({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const r = Z(e, t);
    return (s, a) => (y(), _(l(wi), W(K(l(r))), {
      default: w(() => [
        P(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ql = /* @__PURE__ */ C({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = M(() => {
      const { class: r, ...s } = t;
      return s;
    }), o = it(n);
    return (r, s) => (y(), _(l(xi), $(l(o), {
      class: l(H)(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
        t.class
      )
    }), {
      default: w(() => [
        P(r.$slots, "default"),
        V(l(xl), { class: "ml-auto h-4 w-4" })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), eu = /* @__PURE__ */ C({
  __name: "DropdownMenuSubContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    sideOffset: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = M(() => {
      const { class: a, ...i } = n;
      return i;
    }), s = Z(r, o);
    return (a, i) => (y(), _(l(bi), $(l(s), {
      class: l(H)(
        "z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        n.class
      )
    }), {
      default: w(() => [
        P(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), tu = /* @__PURE__ */ C({
  __name: "Sheet",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const r = Z(e, t);
    return (s, a) => (y(), _(l(Ks), W(K(l(r))), {
      default: w(() => [
        P(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), nu = /* @__PURE__ */ C({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (y(), _(l(Gs), W(K(t)), {
      default: w(() => [
        P(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ou = /* @__PURE__ */ C({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (y(), _(l(To), W(K(t)), {
      default: w(() => [
        P(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ru = /* @__PURE__ */ C({
  inheritAttrs: !1,
  __name: "SheetContent",
  props: {
    class: {},
    side: {},
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = M(() => {
      const { class: a, side: i, ...u } = n;
      return u;
    }), s = Z(r, o);
    return (a, i) => (y(), _(l(Us), null, {
      default: w(() => [
        V(l(wa), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        V(l(ha), $({
          class: l(H)(l($l)({ side: a.side }), n.class)
        }, { ...l(s), ...a.$attrs }), {
          default: w(() => [
            P(a.$slots, "default"),
            V(l(To), { class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary" }, {
              default: w(() => [
                V(l(Xo), { class: "h-4 w-4" })
              ]),
              _: 1
            })
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), su = /* @__PURE__ */ C({
  __name: "SheetHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (y(), J("div", {
      class: Ot(l(H)("flex flex-col gap-y-2 text-center sm:text-left", t.class))
    }, [
      P(n.$slots, "default")
    ], 2));
  }
}), au = /* @__PURE__ */ C({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = M(() => {
      const { class: o, ...r } = t;
      return r;
    });
    return (o, r) => (y(), _(l(ba), $({
      class: l(H)("text-lg font-semibold text-foreground", t.class)
    }, n.value), {
      default: w(() => [
        P(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), iu = /* @__PURE__ */ C({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = M(() => {
      const { class: o, ...r } = t;
      return r;
    });
    return (o, r) => (y(), _(l(xa), $({
      class: l(H)("text-sm text-muted-foreground", t.class)
    }, n.value), {
      default: w(() => [
        P(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), lu = /* @__PURE__ */ C({
  __name: "SheetFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (y(), J("div", {
      class: Ot(l(H)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      P(n.$slots, "default")
    ], 2));
  }
}), $l = Zo(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
export {
  zl as DropdownMenu,
  Hl as DropdownMenuCheckboxItem,
  jl as DropdownMenuContent,
  Kl as DropdownMenuGroup,
  Ul as DropdownMenuItem,
  Zl as DropdownMenuLabel,
  ci as DropdownMenuPortal,
  Gl as DropdownMenuRadioGroup,
  ql as DropdownMenuRadioItem,
  Yl as DropdownMenuSeparator,
  Xl as DropdownMenuShortcut,
  Jl as DropdownMenuSub,
  eu as DropdownMenuSubContent,
  Ql as DropdownMenuSubTrigger,
  Wl as DropdownMenuTrigger,
  Vl as Notification,
  tu as Sheet,
  ou as SheetClose,
  ru as SheetContent,
  iu as SheetDescription,
  lu as SheetFooter,
  su as SheetHeader,
  au as SheetTitle,
  nu as SheetTrigger,
  yl as Toast,
  Nl as ToastAction,
  Cl as ToastClose,
  Fn as ToastDescription,
  El as ToastProvider,
  Ol as ToastTitle,
  wl as ToastViewport,
  hr as Toaster,
  $l as sheetVariants,
  mr as toast,
  Tl as toastVariants,
  Sl as useNotification,
  to as useToast
};
