import { openBlock as w, createElementBlock as ee, createElementVNode as de, ref as k, computed as M, defineComponent as E, createBlock as O, unref as u, withCtx as C, Fragment as Xe, renderList as yn, mergeProps as L, resolveDynamicComponent as Pt, normalizeClass as Vn, createCommentVNode as ce, createTextVNode as pt, toDisplayString as Ze, isVNode as Ho, createVNode as G, shallowRef as Wn, watch as q, getCurrentScope as jn, onScopeDispose as Gn, shallowReadonly as Fe, getCurrentInstance as $e, toRef as qo, camelize as Kn, Comment as Yo, cloneVNode as Xo, h as Ve, toRefs as ke, reactive as Un, watchEffect as te, markRaw as Zo, isRef as Hn, renderSlot as A, onMounted as Be, nextTick as ae, withKeys as Jo, normalizeProps as K, guardReactiveProps as U, normalizeStyle as qt, effectScope as qn, toHandlerKey as Qo, onUnmounted as Ke, withModifiers as mt, Teleport as Yn, inject as Xn, provide as Zn, readonly as Yt, onBeforeUpdate as er, onUpdated as tr, mergeDefaults as Jn, watchPostEffect as nr, customRef as or, onBeforeUnmount as rr } from "vue";
function ar(e, t) {
  return w(), ee("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    de("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    })
  ]);
}
function bn(e, t) {
  return w(), ee("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    de("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
    })
  ]);
}
function sr(e, t) {
  return w(), ee("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    de("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
    })
  ]);
}
const ir = 3, lr = 1e6, be = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST"
};
let Tt = 0;
function ur() {
  return Tt = (Tt + 1) % Number.MAX_VALUE, Tt.toString();
}
const At = /* @__PURE__ */ new Map();
function wn(e) {
  if (At.has(e))
    return;
  const t = setTimeout(() => {
    At.delete(e), Je({
      type: be.REMOVE_TOAST,
      toastId: e
    });
  }, lr);
  At.set(e, t);
}
const le = k({
  toasts: []
});
function Je(e) {
  switch (e.type) {
    case be.ADD_TOAST:
      le.value.toasts = [e.toast, ...le.value.toasts].slice(0, ir);
      break;
    case be.UPDATE_TOAST:
      le.value.toasts = le.value.toasts.map(
        (t) => t.id === e.toast.id ? { ...t, ...e.toast } : t
      );
      break;
    case be.DISMISS_TOAST: {
      const { toastId: t } = e;
      t ? wn(t) : le.value.toasts.forEach((n) => {
        wn(n.id);
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
function Qn() {
  return {
    toasts: M(() => le.value.toasts),
    toast: cr,
    dismiss: (e) => Je({ type: be.DISMISS_TOAST, toastId: e })
  };
}
function cr(e) {
  const t = ur(), n = (r) => Je({
    type: be.UPDATE_TOAST,
    toast: { ...r, id: t }
  }), o = () => Je({ type: be.DISMISS_TOAST, toastId: t });
  return Je({
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
const dr = { class: "flex items-start space-x-3" }, fr = { class: "grid gap-1" }, pr = /* @__PURE__ */ E({
  __name: "Toaster",
  setup(e) {
    const { toasts: t } = Qn();
    return (n, o) => (w(), O(u(pl), null, {
      default: C(() => [
        (w(!0), ee(Xe, null, yn(u(t), (r) => (w(), O(u(al), L({
          key: r.id,
          ref_for: !0
        }, r), {
          default: C(() => [
            de("div", dr, [
              r.icon ? (w(), O(Pt(r.icon), {
                key: 0,
                class: Vn(["h-6 w-6", r.iconClasses])
              }, null, 8, ["class"])) : ce("", !0),
              de("div", fr, [
                r.title ? (w(), O(u(fl), { key: 0 }, {
                  default: C(() => [
                    pt(Ze(r.title), 1)
                  ]),
                  _: 2
                }, 1024)) : ce("", !0),
                r.description ? (w(), ee(Xe, { key: 1 }, [
                  Ho(r.description) ? (w(), O(u(Fn), { key: 0 }, {
                    default: C(() => [
                      (w(), O(Pt(r.description)))
                    ]),
                    _: 2
                  }, 1024)) : (w(), O(u(Fn), { key: 1 }, {
                    default: C(() => [
                      pt(Ze(r.description), 1)
                    ]),
                    _: 2
                  }, 1024))
                ], 64)) : ce("", !0),
                r.messages ? (w(!0), ee(Xe, { key: 2 }, yn(r.messages, (a, s) => (w(), ee("p", {
                  key: s,
                  class: "text-sm opacity-90"
                }, Ze(a), 1))), 128)) : ce("", !0),
                G(u(dl))
              ])
            ]),
            (w(), O(Pt(r.action)))
          ]),
          _: 2
        }, 1040))), 128)),
        G(u(sl))
      ]),
      _: 1
    }));
  }
}), mr = ["top", "right", "bottom", "left"];
const me = Math.min, re = Math.max, vt = Math.round, it = Math.floor, Te = (e) => ({
  x: e,
  y: e
}), vr = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, gr = {
  start: "end",
  end: "start"
};
function Ft(e, t, n) {
  return re(e, me(t, n));
}
function we(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function xe(e) {
  return e.split("-")[0];
}
function Ue(e) {
  return e.split("-")[1];
}
function Xt(e) {
  return e === "x" ? "y" : "x";
}
function Zt(e) {
  return e === "y" ? "height" : "width";
}
function Ae(e) {
  return ["top", "bottom"].includes(xe(e)) ? "y" : "x";
}
function Jt(e) {
  return Xt(Ae(e));
}
function hr(e, t, n) {
  n === void 0 && (n = !1);
  const o = Ue(e), r = Jt(e), a = Zt(r);
  let s = r === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (s = gt(s)), [s, gt(s)];
}
function yr(e) {
  const t = gt(e);
  return [Nt(e), t, Nt(t)];
}
function Nt(e) {
  return e.replace(/start|end/g, (t) => gr[t]);
}
function br(e, t, n) {
  const o = ["left", "right"], r = ["right", "left"], a = ["top", "bottom"], s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? r : o : t ? o : r;
    case "left":
    case "right":
      return t ? a : s;
    default:
      return [];
  }
}
function wr(e, t, n, o) {
  const r = Ue(e);
  let a = br(xe(e), n === "start", o);
  return r && (a = a.map((s) => s + "-" + r), t && (a = a.concat(a.map(Nt)))), a;
}
function gt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => vr[t]);
}
function xr(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function eo(e) {
  return typeof e != "number" ? xr(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function ht(e) {
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
  const a = Ae(t), s = Jt(t), i = Zt(s), l = xe(t), c = a === "y", f = o.x + o.width / 2 - r.width / 2, d = o.y + o.height / 2 - r.height / 2, p = o[i] / 2 - r[i] / 2;
  let m;
  switch (l) {
    case "top":
      m = {
        x: f,
        y: o.y - r.height
      };
      break;
    case "bottom":
      m = {
        x: f,
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
  switch (Ue(t)) {
    case "start":
      m[s] -= p * (n && c ? -1 : 1);
      break;
    case "end":
      m[s] += p * (n && c ? -1 : 1);
      break;
  }
  return m;
}
const _r = async (e, t, n) => {
  const {
    placement: o = "bottom",
    strategy: r = "absolute",
    middleware: a = [],
    platform: s
  } = n, i = a.filter(Boolean), l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let c = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: r
  }), {
    x: f,
    y: d
  } = xn(c, o, l), p = o, m = {}, v = 0;
  for (let g = 0; g < i.length; g++) {
    const {
      name: h,
      fn: y
    } = i[g], {
      x: b,
      y: _,
      data: P,
      reset: T
    } = await y({
      x: f,
      y: d,
      initialPlacement: o,
      placement: p,
      strategy: r,
      middlewareData: m,
      rects: c,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    f = b != null ? b : f, d = _ != null ? _ : d, m = {
      ...m,
      [h]: {
        ...m[h],
        ...P
      }
    }, T && v <= 50 && (v++, typeof T == "object" && (T.placement && (p = T.placement), T.rects && (c = T.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: r
    }) : T.rects), {
      x: f,
      y: d
    } = xn(c, p, l)), g = -1);
  }
  return {
    x: f,
    y: d,
    placement: p,
    strategy: r,
    middlewareData: m
  };
};
async function Qe(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: o,
    y: r,
    platform: a,
    rects: s,
    elements: i,
    strategy: l
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: d = "floating",
    altBoundary: p = !1,
    padding: m = 0
  } = we(t, e), v = eo(m), h = i[p ? d === "floating" ? "reference" : "floating" : d], y = ht(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(h))) == null || n ? h : h.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(i.floating)),
    boundary: c,
    rootBoundary: f,
    strategy: l
  })), b = d === "floating" ? {
    x: o,
    y: r,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, _ = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(i.floating)), P = await (a.isElement == null ? void 0 : a.isElement(_)) ? await (a.getScale == null ? void 0 : a.getScale(_)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, T = ht(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: b,
    offsetParent: _,
    strategy: l
  }) : b);
  return {
    top: (y.top - T.top + v.top) / P.y,
    bottom: (T.bottom - y.bottom + v.bottom) / P.y,
    left: (y.left - T.left + v.left) / P.x,
    right: (T.right - y.right + v.right) / P.x
  };
}
const Cr = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: o,
      placement: r,
      rects: a,
      platform: s,
      elements: i,
      middlewareData: l
    } = t, {
      element: c,
      padding: f = 0
    } = we(e, t) || {};
    if (c == null)
      return {};
    const d = eo(f), p = {
      x: n,
      y: o
    }, m = Jt(r), v = Zt(m), g = await s.getDimensions(c), h = m === "y", y = h ? "top" : "left", b = h ? "bottom" : "right", _ = h ? "clientHeight" : "clientWidth", P = a.reference[v] + a.reference[m] - p[m] - a.floating[v], T = p[m] - a.reference[m], D = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let R = D ? D[_] : 0;
    (!R || !await (s.isElement == null ? void 0 : s.isElement(D))) && (R = i.floating[_] || a.floating[v]);
    const V = P / 2 - T / 2, N = R / 2 - g[v] / 2 - 1, x = me(d[y], N), B = me(d[b], N), S = x, j = R - g[v] - B, F = R / 2 - g[v] / 2 + V, X = Ft(S, F, j), H = !l.arrow && Ue(r) != null && F !== X && a.reference[v] / 2 - (F < S ? x : B) - g[v] / 2 < 0, oe = H ? F < S ? F - S : F - j : 0;
    return {
      [m]: p[m] + oe,
      data: {
        [m]: X,
        centerOffset: F - X - oe,
        ...H && {
          alignmentOffset: oe
        }
      },
      reset: H
    };
  }
});
const Or = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: r,
        middlewareData: a,
        rects: s,
        initialPlacement: i,
        platform: l,
        elements: c
      } = t, {
        mainAxis: f = !0,
        crossAxis: d = !0,
        fallbackPlacements: p,
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: g = !0,
        ...h
      } = we(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const y = xe(r), b = Ae(i), _ = xe(i) === i, P = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), T = p || (_ || !g ? [gt(i)] : yr(i)), D = v !== "none";
      !p && D && T.push(...wr(i, g, v, P));
      const R = [i, ...T], V = await Qe(t, h), N = [];
      let x = ((o = a.flip) == null ? void 0 : o.overflows) || [];
      if (f && N.push(V[y]), d) {
        const F = hr(r, s, P);
        N.push(V[F[0]], V[F[1]]);
      }
      if (x = [...x, {
        placement: r,
        overflows: N
      }], !N.every((F) => F <= 0)) {
        var B, S;
        const F = (((B = a.flip) == null ? void 0 : B.index) || 0) + 1, X = R[F];
        if (X)
          return {
            data: {
              index: F,
              overflows: x
            },
            reset: {
              placement: X
            }
          };
        let H = (S = x.filter((oe) => oe.overflows[0] <= 0).sort((oe, ie) => oe.overflows[1] - ie.overflows[1])[0]) == null ? void 0 : S.placement;
        if (!H)
          switch (m) {
            case "bestFit": {
              var j;
              const oe = (j = x.filter((ie) => {
                if (D) {
                  const Q = Ae(ie.placement);
                  return Q === b || Q === "y";
                }
                return !0;
              }).map((ie) => [ie.placement, ie.overflows.filter((Q) => Q > 0).reduce((Q, st) => Q + st, 0)]).sort((ie, Q) => ie[1] - Q[1])[0]) == null ? void 0 : j[0];
              oe && (H = oe);
              break;
            }
            case "initialPlacement":
              H = i;
              break;
          }
        if (r !== H)
          return {
            reset: {
              placement: H
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
  return mr.some((t) => e[t] >= 0);
}
const Er = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: o = "referenceHidden",
        ...r
      } = we(e, t);
      switch (o) {
        case "referenceHidden": {
          const a = await Qe(t, {
            ...r,
            elementContext: "reference"
          }), s = _n(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: Cn(s)
            }
          };
        }
        case "escaped": {
          const a = await Qe(t, {
            ...r,
            altBoundary: !0
          }), s = _n(a, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: Cn(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Pr(e, t) {
  const {
    placement: n,
    platform: o,
    elements: r
  } = e, a = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), s = xe(n), i = Ue(n), l = Ae(n) === "y", c = ["left", "top"].includes(s) ? -1 : 1, f = a && l ? -1 : 1, d = we(t, e);
  let {
    mainAxis: p,
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
  return i && typeof v == "number" && (m = i === "end" ? v * -1 : v), l ? {
    x: m * f,
    y: p * c
  } : {
    x: p * c,
    y: m * f
  };
}
const Tr = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, o;
      const {
        x: r,
        y: a,
        placement: s,
        middlewareData: i
      } = t, l = await Pr(t, e);
      return s === ((n = i.offset) == null ? void 0 : n.placement) && (o = i.arrow) != null && o.alignmentOffset ? {} : {
        x: r + l.x,
        y: a + l.y,
        data: {
          ...l,
          placement: s
        }
      };
    }
  };
}, Ar = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: o,
        placement: r
      } = t, {
        mainAxis: a = !0,
        crossAxis: s = !1,
        limiter: i = {
          fn: (h) => {
            let {
              x: y,
              y: b
            } = h;
            return {
              x: y,
              y: b
            };
          }
        },
        ...l
      } = we(e, t), c = {
        x: n,
        y: o
      }, f = await Qe(t, l), d = Ae(xe(r)), p = Xt(d);
      let m = c[p], v = c[d];
      if (a) {
        const h = p === "y" ? "top" : "left", y = p === "y" ? "bottom" : "right", b = m + f[h], _ = m - f[y];
        m = Ft(b, m, _);
      }
      if (s) {
        const h = d === "y" ? "top" : "left", y = d === "y" ? "bottom" : "right", b = v + f[h], _ = v - f[y];
        v = Ft(b, v, _);
      }
      const g = i.fn({
        ...t,
        [p]: m,
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
}, Sr = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: o,
        placement: r,
        rects: a,
        middlewareData: s
      } = t, {
        offset: i = 0,
        mainAxis: l = !0,
        crossAxis: c = !0
      } = we(e, t), f = {
        x: n,
        y: o
      }, d = Ae(r), p = Xt(d);
      let m = f[p], v = f[d];
      const g = we(i, t), h = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (l) {
        const _ = p === "y" ? "height" : "width", P = a.reference[p] - a.floating[_] + h.mainAxis, T = a.reference[p] + a.reference[_] - h.mainAxis;
        m < P ? m = P : m > T && (m = T);
      }
      if (c) {
        var y, b;
        const _ = p === "y" ? "width" : "height", P = ["top", "left"].includes(xe(r)), T = a.reference[d] - a.floating[_] + (P && ((y = s.offset) == null ? void 0 : y[d]) || 0) + (P ? 0 : h.crossAxis), D = a.reference[d] + a.reference[_] + (P ? 0 : ((b = s.offset) == null ? void 0 : b[d]) || 0) - (P ? h.crossAxis : 0);
        v < T ? v = T : v > D && (v = D);
      }
      return {
        [p]: m,
        [d]: v
      };
    }
  };
}, kr = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: n,
        rects: o,
        platform: r,
        elements: a
      } = t, {
        apply: s = () => {
        },
        ...i
      } = we(e, t), l = await Qe(t, i), c = xe(n), f = Ue(n), d = Ae(n) === "y", {
        width: p,
        height: m
      } = o.floating;
      let v, g;
      c === "top" || c === "bottom" ? (v = c, g = f === (await (r.isRTL == null ? void 0 : r.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (g = c, v = f === "end" ? "top" : "bottom");
      const h = m - l.top - l.bottom, y = p - l.left - l.right, b = me(m - l[v], h), _ = me(p - l[g], y), P = !t.middlewareData.shift;
      let T = b, D = _;
      if (d ? D = f || P ? me(_, y) : y : T = f || P ? me(b, h) : h, P && !f) {
        const V = re(l.left, 0), N = re(l.right, 0), x = re(l.top, 0), B = re(l.bottom, 0);
        d ? D = p - 2 * (V !== 0 || N !== 0 ? V + N : re(l.left, l.right)) : T = m - 2 * (x !== 0 || B !== 0 ? x + B : re(l.top, l.bottom));
      }
      await s({
        ...t,
        availableWidth: D,
        availableHeight: T
      });
      const R = await r.getDimensions(a.floating);
      return p !== R.width || m !== R.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Ie(e) {
  return Qt(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function se(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ce(e) {
  var t;
  return (t = (Qt(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Qt(e) {
  return e instanceof Node || e instanceof se(e).Node;
}
function fe(e) {
  return e instanceof Element || e instanceof se(e).Element;
}
function ve(e) {
  return e instanceof HTMLElement || e instanceof se(e).HTMLElement;
}
function On(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof se(e).ShadowRoot;
}
function nt(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: r
  } = pe(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(r);
}
function Br(e) {
  return ["table", "td", "th"].includes(Ie(e));
}
function wt(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function en(e) {
  const t = tn(), n = fe(e) ? pe(e) : e;
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function Mr(e) {
  let t = Se(e);
  for (; ve(t) && !Ge(t); ) {
    if (en(t))
      return t;
    if (wt(t))
      return null;
    t = Se(t);
  }
  return null;
}
function tn() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ge(e) {
  return ["html", "body", "#document"].includes(Ie(e));
}
function pe(e) {
  return se(e).getComputedStyle(e);
}
function xt(e) {
  return fe(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Se(e) {
  if (Ie(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || On(e) && e.host || Ce(e);
  return On(t) ? t.host : t;
}
function to(e) {
  const t = Se(e);
  return Ge(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ve(t) && nt(t) ? t : to(t);
}
function et(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const r = to(e), a = r === ((o = e.ownerDocument) == null ? void 0 : o.body), s = se(r);
  if (a) {
    const i = zt(s);
    return t.concat(s, s.visualViewport || [], nt(r) ? r : [], i && n ? et(i) : []);
  }
  return t.concat(r, et(r, [], n));
}
function zt(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function no(e) {
  const t = pe(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const r = ve(e), a = r ? e.offsetWidth : n, s = r ? e.offsetHeight : o, i = vt(n) !== a || vt(o) !== s;
  return i && (n = a, o = s), {
    width: n,
    height: o,
    $: i
  };
}
function nn(e) {
  return fe(e) ? e : e.contextElement;
}
function We(e) {
  const t = nn(e);
  if (!ve(t))
    return Te(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: r,
    $: a
  } = no(t);
  let s = (a ? vt(n.width) : n.width) / o, i = (a ? vt(n.height) : n.height) / r;
  return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: s,
    y: i
  };
}
const Dr = /* @__PURE__ */ Te(0);
function oo(e) {
  const t = se(e);
  return !tn() || !t.visualViewport ? Dr : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Rr(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== se(e) ? !1 : t;
}
function Re(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), a = nn(e);
  let s = Te(1);
  t && (o ? fe(o) && (s = We(o)) : s = We(e));
  const i = Rr(a, n, o) ? oo(a) : Te(0);
  let l = (r.left + i.x) / s.x, c = (r.top + i.y) / s.y, f = r.width / s.x, d = r.height / s.y;
  if (a) {
    const p = se(a), m = o && fe(o) ? se(o) : o;
    let v = p, g = zt(v);
    for (; g && o && m !== v; ) {
      const h = We(g), y = g.getBoundingClientRect(), b = pe(g), _ = y.left + (g.clientLeft + parseFloat(b.paddingLeft)) * h.x, P = y.top + (g.clientTop + parseFloat(b.paddingTop)) * h.y;
      l *= h.x, c *= h.y, f *= h.x, d *= h.y, l += _, c += P, v = se(g), g = zt(v);
    }
  }
  return ht({
    width: f,
    height: d,
    x: l,
    y: c
  });
}
function $r(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: o,
    strategy: r
  } = e;
  const a = r === "fixed", s = Ce(o), i = t ? wt(t.floating) : !1;
  if (o === s || i && a)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = Te(1);
  const f = Te(0), d = ve(o);
  if ((d || !d && !a) && ((Ie(o) !== "body" || nt(s)) && (l = xt(o)), ve(o))) {
    const p = Re(o);
    c = We(o), f.x = p.x + o.clientLeft, f.y = p.y + o.clientTop;
  }
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + f.x,
    y: n.y * c.y - l.scrollTop * c.y + f.y
  };
}
function Ir(e) {
  return Array.from(e.getClientRects());
}
function ro(e) {
  return Re(Ce(e)).left + xt(e).scrollLeft;
}
function Lr(e) {
  const t = Ce(e), n = xt(e), o = e.ownerDocument.body, r = re(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), a = re(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let s = -n.scrollLeft + ro(e);
  const i = -n.scrollTop;
  return pe(o).direction === "rtl" && (s += re(t.clientWidth, o.clientWidth) - r), {
    width: r,
    height: a,
    x: s,
    y: i
  };
}
function Fr(e, t) {
  const n = se(e), o = Ce(e), r = n.visualViewport;
  let a = o.clientWidth, s = o.clientHeight, i = 0, l = 0;
  if (r) {
    a = r.width, s = r.height;
    const c = tn();
    (!c || c && t === "fixed") && (i = r.offsetLeft, l = r.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: i,
    y: l
  };
}
function Nr(e, t) {
  const n = Re(e, !0, t === "fixed"), o = n.top + e.clientTop, r = n.left + e.clientLeft, a = ve(e) ? We(e) : Te(1), s = e.clientWidth * a.x, i = e.clientHeight * a.y, l = r * a.x, c = o * a.y;
  return {
    width: s,
    height: i,
    x: l,
    y: c
  };
}
function En(e, t, n) {
  let o;
  if (t === "viewport")
    o = Fr(e, n);
  else if (t === "document")
    o = Lr(Ce(e));
  else if (fe(t))
    o = Nr(t, n);
  else {
    const r = oo(e);
    o = {
      ...t,
      x: t.x - r.x,
      y: t.y - r.y
    };
  }
  return ht(o);
}
function ao(e, t) {
  const n = Se(e);
  return n === t || !fe(n) || Ge(n) ? !1 : pe(n).position === "fixed" || ao(n, t);
}
function zr(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = et(e, [], !1).filter((i) => fe(i) && Ie(i) !== "body"), r = null;
  const a = pe(e).position === "fixed";
  let s = a ? Se(e) : e;
  for (; fe(s) && !Ge(s); ) {
    const i = pe(s), l = en(s);
    !l && i.position === "fixed" && (r = null), (a ? !l && !r : !l && i.position === "static" && !!r && ["absolute", "fixed"].includes(r.position) || nt(s) && !l && ao(e, s)) ? o = o.filter((f) => f !== s) : r = i, s = Se(s);
  }
  return t.set(e, o), o;
}
function Vr(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: r
  } = e;
  const s = [...n === "clippingAncestors" ? wt(t) ? [] : zr(t, this._c) : [].concat(n), o], i = s[0], l = s.reduce((c, f) => {
    const d = En(t, f, r);
    return c.top = re(d.top, c.top), c.right = me(d.right, c.right), c.bottom = me(d.bottom, c.bottom), c.left = re(d.left, c.left), c;
  }, En(t, i, r));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Wr(e) {
  const {
    width: t,
    height: n
  } = no(e);
  return {
    width: t,
    height: n
  };
}
function jr(e, t, n) {
  const o = ve(t), r = Ce(t), a = n === "fixed", s = Re(e, !0, a, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Te(0);
  if (o || !o && !a)
    if ((Ie(t) !== "body" || nt(r)) && (i = xt(t)), o) {
      const d = Re(t, !0, a, t);
      l.x = d.x + t.clientLeft, l.y = d.y + t.clientTop;
    } else
      r && (l.x = ro(r));
  const c = s.left + i.scrollLeft - l.x, f = s.top + i.scrollTop - l.y;
  return {
    x: c,
    y: f,
    width: s.width,
    height: s.height
  };
}
function St(e) {
  return pe(e).position === "static";
}
function Pn(e, t) {
  return !ve(e) || pe(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function so(e, t) {
  const n = se(e);
  if (wt(e))
    return n;
  if (!ve(e)) {
    let r = Se(e);
    for (; r && !Ge(r); ) {
      if (fe(r) && !St(r))
        return r;
      r = Se(r);
    }
    return n;
  }
  let o = Pn(e, t);
  for (; o && Br(o) && St(o); )
    o = Pn(o, t);
  return o && Ge(o) && St(o) && !en(o) ? n : o || Mr(e) || n;
}
const Gr = async function(e) {
  const t = this.getOffsetParent || so, n = this.getDimensions, o = await n(e.floating);
  return {
    reference: jr(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function Kr(e) {
  return pe(e).direction === "rtl";
}
const Ur = {
  convertOffsetParentRelativeRectToViewportRelativeRect: $r,
  getDocumentElement: Ce,
  getClippingRect: Vr,
  getOffsetParent: so,
  getElementRects: Gr,
  getClientRects: Ir,
  getDimensions: Wr,
  getScale: We,
  isElement: fe,
  isRTL: Kr
};
function Hr(e, t) {
  let n = null, o;
  const r = Ce(e);
  function a() {
    var i;
    clearTimeout(o), (i = n) == null || i.disconnect(), n = null;
  }
  function s(i, l) {
    i === void 0 && (i = !1), l === void 0 && (l = 1), a();
    const {
      left: c,
      top: f,
      width: d,
      height: p
    } = e.getBoundingClientRect();
    if (i || t(), !d || !p)
      return;
    const m = it(f), v = it(r.clientWidth - (c + d)), g = it(r.clientHeight - (f + p)), h = it(c), b = {
      rootMargin: -m + "px " + -v + "px " + -g + "px " + -h + "px",
      threshold: re(0, me(1, l)) || 1
    };
    let _ = !0;
    function P(T) {
      const D = T[0].intersectionRatio;
      if (D !== l) {
        if (!_)
          return s();
        D ? s(!1, D) : o = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      _ = !1;
    }
    try {
      n = new IntersectionObserver(P, {
        ...b,
        root: r.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(P, b);
    }
    n.observe(e);
  }
  return s(!0), a;
}
function qr(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = o, c = nn(e), f = r || a ? [...c ? et(c) : [], ...et(t)] : [];
  f.forEach((y) => {
    r && y.addEventListener("scroll", n, {
      passive: !0
    }), a && y.addEventListener("resize", n);
  });
  const d = c && i ? Hr(c, n) : null;
  let p = -1, m = null;
  s && (m = new ResizeObserver((y) => {
    let [b] = y;
    b && b.target === c && m && (m.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var _;
      (_ = m) == null || _.observe(t);
    })), n();
  }), c && !l && m.observe(c), m.observe(t));
  let v, g = l ? Re(e) : null;
  l && h();
  function h() {
    const y = Re(e);
    g && (y.x !== g.x || y.y !== g.y || y.width !== g.width || y.height !== g.height) && n(), g = y, v = requestAnimationFrame(h);
  }
  return n(), () => {
    var y;
    f.forEach((b) => {
      r && b.removeEventListener("scroll", n), a && b.removeEventListener("resize", n);
    }), d == null || d(), (y = m) == null || y.disconnect(), m = null, l && cancelAnimationFrame(v);
  };
}
const Yr = Tr, Xr = Ar, Tn = Or, Zr = kr, Jr = Er, Qr = Cr, ea = Sr, ta = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), r = {
    platform: Ur,
    ...n
  }, a = {
    ...r.platform,
    _c: o
  };
  return _r(e, t, {
    ...r,
    platform: a
  });
};
function na(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function Vt(e) {
  if (na(e)) {
    const t = e.$el;
    return Qt(t) && Ie(t) === "#comment" ? null : t;
  }
  return e;
}
function ze(e) {
  return typeof e == "function" ? e() : u(e);
}
function oa(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const n = Vt(ze(e.element));
      return n == null ? {} : Qr({
        element: n,
        padding: e.padding
      }).fn(t);
    }
  };
}
function io(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function An(e, t) {
  const n = io(e);
  return Math.round(t * n) / n;
}
function ra(e, t, n) {
  n === void 0 && (n = {});
  const o = n.whileElementsMounted, r = M(() => {
    var R;
    return (R = ze(n.open)) != null ? R : !0;
  }), a = M(() => ze(n.middleware)), s = M(() => {
    var R;
    return (R = ze(n.placement)) != null ? R : "bottom";
  }), i = M(() => {
    var R;
    return (R = ze(n.strategy)) != null ? R : "absolute";
  }), l = M(() => {
    var R;
    return (R = ze(n.transform)) != null ? R : !0;
  }), c = M(() => Vt(e.value)), f = M(() => Vt(t.value)), d = k(0), p = k(0), m = k(i.value), v = k(s.value), g = Wn({}), h = k(!1), y = M(() => {
    const R = {
      position: m.value,
      left: "0",
      top: "0"
    };
    if (!f.value)
      return R;
    const V = An(f.value, d.value), N = An(f.value, p.value);
    return l.value ? {
      ...R,
      transform: "translate(" + V + "px, " + N + "px)",
      ...io(f.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: m.value,
      left: V + "px",
      top: N + "px"
    };
  });
  let b;
  function _() {
    c.value == null || f.value == null || ta(c.value, f.value, {
      middleware: a.value,
      placement: s.value,
      strategy: i.value
    }).then((R) => {
      d.value = R.x, p.value = R.y, m.value = R.strategy, v.value = R.placement, g.value = R.middlewareData, h.value = !0;
    });
  }
  function P() {
    typeof b == "function" && (b(), b = void 0);
  }
  function T() {
    if (P(), o === void 0) {
      _();
      return;
    }
    if (c.value != null && f.value != null) {
      b = o(c.value, f.value, _);
      return;
    }
  }
  function D() {
    r.value || (h.value = !1);
  }
  return q([a, s, i], _, {
    flush: "sync"
  }), q([c, f], T, {
    flush: "sync"
  }), q(r, D, {
    flush: "sync"
  }), jn() && Gn(P), {
    x: Fe(d),
    y: Fe(p),
    strategy: Fe(m),
    placement: Fe(v),
    middlewareData: Fe(g),
    isPositioned: Fe(h),
    floatingStyles: y,
    update: _
  };
}
function ne(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, o = Symbol(n);
  return [(r) => {
    const a = Xn(o, r);
    if (a || a === null)
      return a;
    throw new Error(
      `Injection \`${o.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (r) => (Zn(o, r), r)];
}
function lo(e, t, n) {
  const o = n.originalEvent.target, r = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, { once: !0 }), o.dispatchEvent(r);
}
function aa(e, t) {
  var n;
  const o = Wn();
  return te(() => {
    o.value = e();
  }, {
    ...t,
    flush: (n = void 0) != null ? n : "sync"
  }), Yt(o);
}
function ot(e) {
  return jn() ? (Gn(e), !0) : !1;
}
function sa(e) {
  let t = !1, n;
  const o = qn(!0);
  return (...r) => (t || (n = o.run(() => e(...r)), t = !0), n);
}
function uo(e) {
  let t = 0, n, o;
  const r = () => {
    t -= 1, o && t <= 0 && (o.stop(), n = void 0, o = void 0);
  };
  return (...a) => (t += 1, n || (o = qn(!0), n = o.run(() => e(...a))), ot(r), n);
}
function De(e) {
  return typeof e == "function" ? e() : u(e);
}
const ge = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const ia = (e) => typeof e < "u", la = Object.prototype.toString, ua = (e) => la.call(e) === "[object Object]", co = () => {
}, Sn = /* @__PURE__ */ ca();
function ca() {
  var e, t;
  return ge && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function da(e) {
  return $e();
}
function fa(e, t = 1e4) {
  return or((n, o) => {
    let r = De(e), a;
    const s = () => setTimeout(() => {
      r = De(e), o();
    }, De(t));
    return ot(() => {
      clearTimeout(a);
    }), {
      get() {
        return n(), r;
      },
      set(i) {
        r = i, o(), clearTimeout(a), a = s();
      }
    };
  });
}
function pa(e, t) {
  da() && rr(e, t);
}
function ma(e, t, n = {}) {
  const {
    immediate: o = !0
  } = n, r = k(!1);
  let a = null;
  function s() {
    a && (clearTimeout(a), a = null);
  }
  function i() {
    r.value = !1, s();
  }
  function l(...c) {
    s(), r.value = !0, a = setTimeout(() => {
      r.value = !1, a = null, e(...c);
    }, De(t));
  }
  return o && (r.value = !0, ge && l()), ot(i), {
    isPending: Yt(r),
    start: l,
    stop: i
  };
}
function va(e = 1e3, t = {}) {
  const {
    controls: n = !1,
    callback: o
  } = t, r = ma(
    o != null ? o : co,
    e,
    t
  ), a = M(() => !r.isPending.value);
  return n ? {
    ready: a,
    ...r
  } : a;
}
function _e(e) {
  var t;
  const n = De(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const on = ge ? window : void 0;
function yt(...e) {
  let t, n, o, r;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, o, r] = e, t = on) : [t, n, o, r] = e, !t)
    return co;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const a = [], s = () => {
    a.forEach((f) => f()), a.length = 0;
  }, i = (f, d, p, m) => (f.addEventListener(d, p, m), () => f.removeEventListener(d, p, m)), l = q(
    () => [_e(t), De(r)],
    ([f, d]) => {
      if (s(), !f)
        return;
      const p = ua(d) ? { ...d } : d;
      a.push(
        ...n.flatMap((m) => o.map((v) => i(f, m, v, p)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    l(), s();
  };
  return ot(c), c;
}
function ga(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function rn(...e) {
  let t, n, o = {};
  e.length === 3 ? (t = e[0], n = e[1], o = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], o = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: r = on,
    eventName: a = "keydown",
    passive: s = !1,
    dedupe: i = !1
  } = o, l = ga(t);
  return yt(r, a, (c) => {
    c.repeat && De(i) || l(c) && n(c);
  }, s);
}
function ha() {
  const e = k(!1), t = $e();
  return t && Be(() => {
    e.value = !0;
  }, t), e;
}
function fo(e, t = {}) {
  const {
    immediate: n = !0,
    fpsLimit: o = void 0,
    window: r = on
  } = t, a = k(!1), s = o ? 1e3 / o : null;
  let i = 0, l = null;
  function c(p) {
    if (!a.value || !r)
      return;
    i || (i = p);
    const m = p - i;
    if (s && m < s) {
      l = r.requestAnimationFrame(c);
      return;
    }
    i = p, e({ delta: m, timestamp: p }), l = r.requestAnimationFrame(c);
  }
  function f() {
    !a.value && r && (a.value = !0, i = 0, l = r.requestAnimationFrame(c));
  }
  function d() {
    a.value = !1, l != null && r && (r.cancelAnimationFrame(l), l = null);
  }
  return n && f(), ot(d), {
    isActive: Yt(a),
    pause: d,
    resume: f
  };
}
function ya(e) {
  return JSON.parse(JSON.stringify(e));
}
function Me(e, t, n, o = {}) {
  var r, a, s;
  const {
    clone: i = !1,
    passive: l = !1,
    eventName: c,
    deep: f = !1,
    defaultValue: d,
    shouldEmit: p
  } = o, m = $e(), v = n || (m == null ? void 0 : m.emit) || ((r = m == null ? void 0 : m.$emit) == null ? void 0 : r.bind(m)) || ((s = (a = m == null ? void 0 : m.proxy) == null ? void 0 : a.$emit) == null ? void 0 : s.bind(m == null ? void 0 : m.proxy));
  let g = c;
  t || (t = "modelValue"), g = g || `update:${t.toString()}`;
  const h = (_) => i ? typeof i == "function" ? i(_) : ya(_) : _, y = () => ia(e[t]) ? h(e[t]) : d, b = (_) => {
    p ? p(_) && v(g, _) : v(g, _);
  };
  if (l) {
    const _ = y(), P = k(_);
    let T = !1;
    return q(
      () => e[t],
      (D) => {
        T || (T = !0, P.value = h(D), ae(() => T = !1));
      }
    ), q(
      P,
      (D) => {
        !T && (D !== e[t] || f) && b(D);
      },
      { deep: f }
    ), P;
  } else
    return M({
      get() {
        return y();
      },
      set(_) {
        b(_);
      }
    });
}
function an(e) {
  return e ? e.flatMap((t) => t.type === Xe ? an(t.children) : [t]) : [];
}
const ba = ["INPUT", "TEXTAREA"];
function wa(e, t, n, o = {}) {
  if (!t || o.enableIgnoredElement && ba.includes(t.nodeName))
    return null;
  const {
    arrowKeyOptions: r = "both",
    attributeName: a = "[data-radix-vue-collection-item]",
    itemsArray: s = [],
    loop: i = !0,
    dir: l = "ltr",
    preventScroll: c = !0,
    focus: f = !1
  } = o, [d, p, m, v, g, h] = [
    e.key === "ArrowRight",
    e.key === "ArrowLeft",
    e.key === "ArrowUp",
    e.key === "ArrowDown",
    e.key === "Home",
    e.key === "End"
  ], y = m || v, b = d || p;
  if (!g && !h && (!y && !b || r === "vertical" && b || r === "horizontal" && y))
    return null;
  const _ = n ? Array.from(n.querySelectorAll(a)) : s;
  if (!_.length)
    return null;
  c && e.preventDefault();
  let P = null;
  return b || y ? P = po(_, t, {
    goForward: y ? v : l === "ltr" ? d : p,
    loop: i
  }) : g ? P = _.at(0) || null : h && (P = _.at(-1) || null), f && (P == null || P.focus()), P;
}
function po(e, t, n, o = e.length) {
  if (--o === 0)
    return null;
  const r = e.indexOf(t), a = n.goForward ? r + 1 : r - 1;
  if (!n.loop && (a < 0 || a >= e.length))
    return null;
  const s = (a + e.length) % e.length, i = e[s];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? po(
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
function Wt(e, t, n = ".", o) {
  if (!kt(t))
    return Wt(e, {}, n, o);
  const r = Object.assign({}, t);
  for (const a in e) {
    if (a === "__proto__" || a === "constructor")
      continue;
    const s = e[a];
    s != null && (o && o(r, a, s, n) || (Array.isArray(s) && Array.isArray(r[a]) ? r[a] = [...s, ...r[a]] : kt(s) && kt(r[a]) ? r[a] = Wt(
      s,
      r[a],
      (n ? `${n}.` : "") + a.toString(),
      o
    ) : r[a] = s));
  }
  return r;
}
function xa(e) {
  return (...t) => t.reduce((n, o) => Wt(n, o, "", e), {});
}
const _a = xa(), [sn, Cl] = ne("ConfigProvider");
let Ca = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", Oa = (e = 21) => {
  let t = "", n = e;
  for (; n--; )
    t += Ca[Math.random() * 64 | 0];
  return t;
};
const Ea = uo(() => {
  const e = k(/* @__PURE__ */ new Map()), t = k(), n = M(() => {
    for (const s of e.value.values())
      if (s)
        return !0;
    return !1;
  }), o = sn({
    scrollBody: k(!0)
  });
  let r = null;
  const a = () => {
    var s;
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = (s = t.value) != null ? s : "", Sn && (r == null || r()), t.value = void 0;
  };
  return q(n, (s, i) => {
    var l;
    if (!ge)
      return;
    if (!s) {
      i && a();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const c = window.innerWidth - document.documentElement.clientWidth, f = { padding: c, margin: 0 }, d = (l = o.scrollBody) != null && l.value ? typeof o.scrollBody.value == "object" ? _a({
      padding: o.scrollBody.value.padding === !0 ? c : o.scrollBody.value.padding,
      margin: o.scrollBody.value.margin === !0 ? c : o.scrollBody.value.margin
    }, f) : f : { padding: 0, margin: 0 };
    c > 0 && (document.body.style.paddingRight = `${d.padding}px`, document.body.style.marginRight = `${d.margin}px`, document.body.style.setProperty("--scrollbar-width", `${c}px`), document.body.style.overflow = "hidden"), Sn && (r = yt(
      document,
      "touchmove",
      (p) => {
        var m;
        p.target === document.documentElement && (p.touches.length > 1 || (m = p.preventDefault) == null || m.call(p));
      },
      { passive: !1 }
    )), ae(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), e;
});
function Pa(e) {
  const t = Oa(6), n = Ea();
  n.value.set(t, e != null ? e : !1);
  const o = M({
    get: () => {
      var r;
      return (r = n.value.get(t)) != null ? r : !1;
    },
    set: (r) => n.value.set(t, r)
  });
  return pa(() => {
    n.value.delete(t);
  }), o;
}
const Ta = "data-radix-vue-collection-item";
function mo(e, t = Ta) {
  const n = e != null ? e : Symbol();
  return { createCollection: (o) => {
    const r = k([]);
    function a() {
      const s = _e(o);
      return s ? r.value = Array.from(
        s.querySelectorAll(`[${t}]:not([data-disabled])`)
      ) : r.value = [];
    }
    return er(() => {
      r.value = [];
    }), Be(a), tr(a), q(() => o == null ? void 0 : o.value, a, { immediate: !0 }), Zn(n, r), r;
  }, injectCollection: () => Xn(n, k([])) };
}
function ln(e) {
  const t = sn({
    dir: k("ltr")
  });
  return M(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.dir) == null ? void 0 : n.value) || "ltr";
  });
}
function _t(e) {
  const t = $e(), n = t == null ? void 0 : t.type.emits, o = {};
  return n != null && n.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), n == null || n.forEach((r) => {
    o[Qo(Kn(r))] = (...a) => e(r, ...a);
  }), o;
}
let Bt = 0;
function Aa() {
  te((e) => {
    var n, o;
    if (!ge)
      return;
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      (n = t[0]) != null ? n : kn()
    ), document.body.insertAdjacentElement(
      "beforeend",
      (o = t[1]) != null ? o : kn()
    ), Bt++, e(() => {
      Bt === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((r) => r.remove()), Bt--;
    });
  });
}
function kn() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
function rt(e) {
  var r;
  const t = $e(), n = Object.keys((r = t == null ? void 0 : t.type.props) != null ? r : {}).reduce((a, s) => {
    const i = (t == null ? void 0 : t.type.props[s]).default;
    return i !== void 0 && (a[s] = i), a;
  }, {}), o = qo(e);
  return M(() => {
    var i;
    const a = {}, s = (i = t == null ? void 0 : t.vnode.props) != null ? i : {};
    return Object.keys(s).forEach((l) => {
      a[Kn(l)] = s[l];
    }), Object.keys({ ...n, ...a }).reduce((l, c) => (o.value[c] !== void 0 && (l[c] = o.value[c]), l), {});
  });
}
function Z(e, t) {
  const n = rt(e), o = t ? _t(t) : {};
  return M(() => ({
    ...n.value,
    ...o
  }));
}
function z() {
  const e = $e(), t = k(), n = M(() => {
    var s, i;
    return ["#text", "#comment"].includes((s = t.value) == null ? void 0 : s.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : _e(t);
  }), o = Object.assign({}, e.exposed), r = {};
  for (const s in e.props)
    Object.defineProperty(r, s, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[s]
    });
  if (Object.keys(o).length > 0)
    for (const s in o)
      Object.defineProperty(r, s, {
        enumerable: !0,
        configurable: !0,
        get: () => o[s]
      });
  Object.defineProperty(r, "$el", {
    enumerable: !0,
    configurable: !0,
    get: () => e.vnode.el
  }), e.exposed = r;
  function a(s) {
    t.value = s, !(s instanceof Element || !s) && (Object.defineProperty(r, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => s.$el
    }), e.exposed = r);
  }
  return { forwardRef: a, currentRef: t, currentElement: n };
}
var Sa = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Ne = /* @__PURE__ */ new WeakMap(), lt = /* @__PURE__ */ new WeakMap(), ut = {}, Mt = 0, vo = function(e) {
  return e && (e.host || vo(e.parentNode));
}, ka = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = vo(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Ba = function(e, t, n, o) {
  var r = ka(t, Array.isArray(e) ? e : [e]);
  ut[n] || (ut[n] = /* @__PURE__ */ new WeakMap());
  var a = ut[n], s = [], i = /* @__PURE__ */ new Set(), l = new Set(r), c = function(d) {
    !d || i.has(d) || (i.add(d), c(d.parentNode));
  };
  r.forEach(c);
  var f = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(p) {
      if (i.has(p))
        f(p);
      else
        try {
          var m = p.getAttribute(o), v = m !== null && m !== "false", g = (Ne.get(p) || 0) + 1, h = (a.get(p) || 0) + 1;
          Ne.set(p, g), a.set(p, h), s.push(p), g === 1 && v && lt.set(p, !0), h === 1 && p.setAttribute(n, "true"), v || p.setAttribute(o, "true");
        } catch (y) {
          console.error("aria-hidden: cannot operate on ", p, y);
        }
    });
  };
  return f(t), i.clear(), Mt++, function() {
    s.forEach(function(d) {
      var p = Ne.get(d) - 1, m = a.get(d) - 1;
      Ne.set(d, p), a.set(d, m), p || (lt.has(d) || d.removeAttribute(o), lt.delete(d)), m || d.removeAttribute(n);
    }), Mt--, Mt || (Ne = /* @__PURE__ */ new WeakMap(), Ne = /* @__PURE__ */ new WeakMap(), lt = /* @__PURE__ */ new WeakMap(), ut = {});
  };
}, Ma = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), r = Sa(e);
  return r ? (o.push.apply(o, Array.from(r.querySelectorAll("[aria-live]"))), Ba(o, r, n, "aria-hidden")) : function() {
    return null;
  };
};
function Da(e) {
  let t;
  q(() => _e(e), (n) => {
    n ? t = Ma(n) : t && t();
  }), Ke(() => {
    t && t();
  });
}
let Ra = 0;
function Ct(e, t = "radix") {
  if (e)
    return e;
  const { useId: n } = sn({ useId: void 0 });
  return n && typeof n == "function" ? `${t}-${n()}` : `${t}-${++Ra}`;
}
function $a(e) {
  const t = k(), n = M(() => {
    var a;
    var r;
    return (a = (r = t.value) == null ? void 0 : r.width) != null ? a : 0;
  }), o = M(() => {
    var a;
    var r;
    return (a = (r = t.value) == null ? void 0 : r.height) != null ? a : 0;
  });
  return Be(() => {
    const r = _e(e);
    if (r) {
      t.value = { width: r.offsetWidth, height: r.offsetHeight };
      const a = new ResizeObserver((s) => {
        if (!Array.isArray(s) || !s.length)
          return;
        const i = s[0];
        let l, c;
        if ("borderBoxSize" in i) {
          const f = i.borderBoxSize, d = Array.isArray(f) ? f[0] : f;
          l = d.inlineSize, c = d.blockSize;
        } else
          l = r.offsetWidth, c = r.offsetHeight;
        t.value = { width: l, height: c };
      });
      return a.observe(r, { box: "border-box" }), () => a.unobserve(r);
    } else
      t.value = void 0;
  }), {
    width: n,
    height: o
  };
}
function Ia(e, t) {
  const n = k(e);
  function o(r) {
    var a;
    return (a = t[n.value][r]) != null ? a : n.value;
  }
  return {
    state: n,
    dispatch: (r) => {
      n.value = o(r);
    }
  };
}
function La(e) {
  const t = fa("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (n, o) => {
      var p, m;
      var r, a;
      if (!(e != null && e.value) && !o)
        return;
      t.value = t.value + n;
      const s = (p = e == null ? void 0 : e.value) != null ? p : o, i = document.activeElement, l = (m = (a = (r = s.find((v) => v === i)) == null ? void 0 : r.textContent) == null ? void 0 : a.trim()) != null ? m : "", c = s.map((v) => {
        var h;
        var g;
        return (h = (g = v.textContent) == null ? void 0 : g.trim()) != null ? h : "";
      }), f = Na(c, t.value, l), d = s.find(
        (v) => {
          var g;
          return ((g = v.textContent) == null ? void 0 : g.trim()) === f;
        }
      );
      return d && d.focus(), d;
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function Fa(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
function Na(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((i) => i === t[0]) ? t[0] : t, r = n ? e.indexOf(n) : -1;
  let a = Fa(e, Math.max(r, 0));
  o.length === 1 && (a = a.filter((i) => i !== n));
  const s = a.find(
    (i) => i.toLowerCase().startsWith(o.toLowerCase())
  );
  return s !== n ? s : void 0;
}
const un = E({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      var o, r;
      if (!n.default)
        return null;
      const a = an(n.default()), s = a.findIndex((f) => f.type !== Yo);
      if (s === -1)
        return a;
      const i = a[s];
      (o = i.props) == null || delete o.ref;
      const l = i.props ? L(t, i.props) : t;
      t.class && (r = i.props) != null && r.class && delete i.props.class;
      const c = Xo(i, l);
      for (const f in l)
        f.startsWith("on") && (c.props || (c.props = {}), c.props[f] = l[f]);
      return a.length === 1 ? c : (a[s] = c, a);
    };
  }
}), Y = E({
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
    return typeof o == "string" && ["area", "img", "input"].includes(o) ? () => Ve(o, t) : o !== "template" ? () => Ve(e.as, t, { default: n.default }) : () => Ve(un, t, { default: n.default });
  }
});
function go() {
  const e = k(), t = M(() => {
    var n, o;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (o = e.value) == null ? void 0 : o.$el.nextElementSibling : _e(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
function za(e, t) {
  const n = k({}), o = k("none"), r = e.value ? "mounted" : "unmounted", { state: a, dispatch: s } = Ia(r, {
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
  }), i = (p) => {
    var m;
    if (ge) {
      const v = new CustomEvent(p, { bubbles: !1, cancelable: !1 });
      (m = t.value) == null || m.dispatchEvent(v);
    }
  };
  q(
    e,
    async (p, m) => {
      var v;
      const g = m !== p;
      if (await ae(), g) {
        const h = o.value, y = ct(t.value);
        p ? (s("MOUNT"), i("enter"), y === "none" && i("after-enter")) : y === "none" || ((v = n.value) == null ? void 0 : v.display) === "none" ? (s("UNMOUNT"), i("leave"), i("after-leave")) : m && h !== y ? (s("ANIMATION_OUT"), i("leave")) : (s("UNMOUNT"), i("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const l = (p) => {
    const m = ct(t.value), v = m.includes(
      p.animationName
    ), g = a.value === "mounted" ? "enter" : "leave";
    p.target === t.value && v && (i(`after-${g}`), s("ANIMATION_END")), p.target === t.value && m === "none" && s("ANIMATION_END");
  }, c = (p) => {
    p.target === t.value && (o.value = ct(t.value));
  }, f = q(
    t,
    (p, m) => {
      p ? (n.value = getComputedStyle(p), p.addEventListener("animationstart", c), p.addEventListener("animationcancel", l), p.addEventListener("animationend", l)) : (s("ANIMATION_END"), m == null || m.removeEventListener("animationstart", c), m == null || m.removeEventListener("animationcancel", l), m == null || m.removeEventListener("animationend", l));
    },
    { immediate: !0 }
  ), d = q(a, () => {
    const p = ct(t.value);
    o.value = a.value === "mounted" ? p : "none";
  });
  return Ke(() => {
    f(), d();
  }), {
    isPresent: M(
      () => ["mounted", "unmountSuspended"].includes(a.value)
    )
  };
}
function ct(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const Ot = E({
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
    const { present: r, forceMount: a } = ke(e), s = k(), { isPresent: i } = za(r, s);
    n({ present: i });
    let l = t.default({ present: i });
    l = an(l || []);
    const c = $e();
    if (l && (l == null ? void 0 : l.length) > 1) {
      const f = (o = c == null ? void 0 : c.parent) != null && o.type.name ? `<${c.parent.type.name} />` : "component";
      throw new Error(
        [
          `Detected an invalid children for \`${f}\` for  \`Presence\` component.`,
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
    return () => a.value || r.value || i.value ? Ve(t.default({ present: i })[0], {
      ref: (f) => {
        const d = _e(f);
        return typeof (d == null ? void 0 : d.hasAttribute) > "u" || (d != null && d.hasAttribute("data-radix-popper-content-wrapper") ? s.value = d.firstElementChild : s.value = d), d;
      }
    }) : null;
  }
}), Va = /* @__PURE__ */ E({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = ha();
    return (n, o) => u(t) || n.forceMount ? (w(), O(Yn, {
      key: 0,
      to: n.to,
      disabled: n.disabled
    }, [
      A(n.$slots, "default")
    ], 8, ["to", "disabled"])) : ce("", !0);
  }
}), Wa = "dismissableLayer.pointerDownOutside", ja = "dismissableLayer.focusOutside";
function ho(e, t) {
  const n = t.closest(
    "[data-dismissable-layer]"
  ), o = e.dataset.dismissableLayer === "" ? e : e.querySelector(
    "[data-dismissable-layer]"
  ), r = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(n && o === n || r.indexOf(o) < r.indexOf(n));
}
function Ga(e, t) {
  var s;
  var n;
  const o = (s = (n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) != null ? s : globalThis == null ? void 0 : globalThis.document, r = k(!1), a = k(() => {
  });
  return te((i) => {
    if (!ge)
      return;
    const l = async (f) => {
      const d = f.target;
      if (t != null && t.value) {
        if (ho(t.value, d)) {
          r.value = !1;
          return;
        }
        if (f.target && !r.value) {
          let p = function() {
            lo(
              Wa,
              e,
              m
            );
          };
          const m = { originalEvent: f };
          f.pointerType === "touch" ? (o.removeEventListener("click", a.value), a.value = p, o.addEventListener("click", a.value, {
            once: !0
          })) : p();
        } else
          o.removeEventListener("click", a.value);
        r.value = !1;
      }
    }, c = window.setTimeout(() => {
      o.addEventListener("pointerdown", l);
    }, 0);
    i(() => {
      window.clearTimeout(c), o.removeEventListener("pointerdown", l), o.removeEventListener("click", a.value);
    });
  }), {
    onPointerDownCapture: () => r.value = !0
  };
}
function Ka(e, t) {
  var a;
  var n;
  const o = (a = (n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) != null ? a : globalThis == null ? void 0 : globalThis.document, r = k(!1);
  return te((s) => {
    if (!ge)
      return;
    const i = async (l) => {
      t != null && t.value && (await ae(), !(!t.value || ho(t.value, l.target)) && l.target && !r.value && lo(
        ja,
        e,
        { originalEvent: l }
      ));
    };
    o.addEventListener("focusin", i), s(() => o.removeEventListener("focusin", i));
  }), {
    onFocusCapture: () => r.value = !0,
    onBlurCapture: () => r.value = !1
  };
}
const ue = Un({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Ua = /* @__PURE__ */ E({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, o = t, { forwardRef: r, currentElement: a } = z(), s = M(
      () => {
        var g;
        var v;
        return (g = (v = a.value) == null ? void 0 : v.ownerDocument) != null ? g : globalThis.document;
      }
    ), i = M(() => ue.layersRoot), l = M(() => a.value ? Array.from(i.value).indexOf(a.value) : -1), c = M(() => ue.layersWithOutsidePointerEventsDisabled.size > 0), f = M(() => {
      const v = Array.from(i.value), [g] = [...ue.layersWithOutsidePointerEventsDisabled].slice(-1), h = v.indexOf(g);
      return l.value >= h;
    }), d = Ga(async (v) => {
      const g = [...ue.branches].some(
        (h) => h.contains(v.target)
      );
      !f.value || g || (o("pointerDownOutside", v), o("interactOutside", v), await ae(), v.defaultPrevented || o("dismiss"));
    }, a), p = Ka((v) => {
      [...ue.branches].some(
        (g) => g.contains(v.target)
      ) || (o("focusOutside", v), o("interactOutside", v), v.defaultPrevented || o("dismiss"));
    }, a);
    rn("Escape", (v) => {
      l.value === i.value.size - 1 && (o("escapeKeyDown", v), v.defaultPrevented || o("dismiss"));
    });
    let m;
    return te((v) => {
      a.value && (n.disableOutsidePointerEvents && (ue.layersWithOutsidePointerEventsDisabled.size === 0 && (m = s.value.body.style.pointerEvents, s.value.body.style.pointerEvents = "none"), ue.layersWithOutsidePointerEventsDisabled.add(a.value)), i.value.add(a.value), v(() => {
        n.disableOutsidePointerEvents && ue.layersWithOutsidePointerEventsDisabled.size === 1 && (s.value.body.style.pointerEvents = m);
      }));
    }), te((v) => {
      v(() => {
        a.value && (i.value.delete(a.value), ue.layersWithOutsidePointerEventsDisabled.delete(a.value));
      });
    }), (v, g) => (w(), O(u(Y), {
      ref: u(r),
      "as-child": v.asChild,
      as: v.as,
      "data-dismissable-layer": "",
      style: qt({
        pointerEvents: c.value ? f.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: u(p).onFocusCapture,
      onBlurCapture: u(p).onBlurCapture,
      onPointerdownCapture: u(d).onPointerDownCapture
    }, {
      default: C(() => [
        A(v.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
}), Ha = /* @__PURE__ */ E({
  __name: "DismissableLayerBranch",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: o } = z();
    return Be(() => {
      ue.branches.add(o.value);
    }), Ke(() => {
      ue.branches.delete(o.value);
    }), (r, a) => (w(), O(u(Y), L({ ref: u(n) }, t), {
      default: C(() => [
        A(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Dt = "focusScope.autoFocusOnMount", Rt = "focusScope.autoFocusOnUnmount", Bn = { bubbles: !1, cancelable: !0 };
function ft(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const o of e)
    if (Pe(o, { select: t }), document.activeElement !== n)
      return !0;
}
function qa(e) {
  const t = cn(e), n = Mn(t, e), o = Mn(t.reverse(), e);
  return [n, o];
}
function cn(e) {
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
    if (!Ya(n, { upTo: t }))
      return n;
}
function Ya(e, { upTo: t }) {
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
function Xa(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Pe(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Xa(e) && t && e.select();
  }
}
const Za = sa(() => k([]));
function Ja() {
  const e = Za();
  return {
    add(t) {
      const n = e.value[0];
      t !== n && (n == null || n.pause()), e.value = Dn(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var n;
      e.value = Dn(e.value, t), (n = e.value[0]) == null || n.resume();
    }
  };
}
function Dn(e, t) {
  const n = [...e], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function Qa(e) {
  return e.filter((t) => t.tagName !== "A");
}
const es = /* @__PURE__ */ E({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, o = t, { currentRef: r, currentElement: a } = z(), s = k(null), i = Ja(), l = Un({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    te((f) => {
      if (!ge)
        return;
      const d = a.value;
      if (!n.trapped)
        return;
      function p(h) {
        if (l.paused || !d)
          return;
        const y = h.target;
        d.contains(y) ? s.value = y : Pe(s.value, { select: !0 });
      }
      function m(h) {
        if (l.paused || !d)
          return;
        const y = h.relatedTarget;
        y !== null && (d.contains(y) || Pe(s.value, { select: !0 }));
      }
      function v(h) {
        d.contains(s.value) || Pe(d);
      }
      document.addEventListener("focusin", p), document.addEventListener("focusout", m);
      const g = new MutationObserver(v);
      d && g.observe(d, { childList: !0, subtree: !0 }), f(() => {
        document.removeEventListener("focusin", p), document.removeEventListener("focusout", m), g.disconnect();
      });
    }), te(async (f) => {
      const d = a.value;
      if (await ae(), !d)
        return;
      i.add(l);
      const p = document.activeElement;
      if (!d.contains(p)) {
        const m = new CustomEvent(Dt, Bn);
        d.addEventListener(Dt, (v) => o("mountAutoFocus", v)), d.dispatchEvent(m), m.defaultPrevented || (ft(Qa(cn(d)), {
          select: !0
        }), document.activeElement === p && Pe(d));
      }
      f(() => {
        d.removeEventListener(Dt, (g) => o("mountAutoFocus", g));
        const m = new CustomEvent(Rt, Bn), v = (g) => {
          o("unmountAutoFocus", g);
        };
        d.addEventListener(Rt, v), d.dispatchEvent(m), setTimeout(() => {
          m.defaultPrevented || Pe(p != null ? p : document.body, { select: !0 }), d.removeEventListener(Rt, v), i.remove(l);
        }, 0);
      });
    });
    function c(f) {
      if (!n.loop && !n.trapped || l.paused)
        return;
      const d = f.key === "Tab" && !f.altKey && !f.ctrlKey && !f.metaKey, p = document.activeElement;
      if (d && p) {
        const m = f.currentTarget, [v, g] = qa(m);
        v && g ? !f.shiftKey && p === g ? (f.preventDefault(), n.loop && Pe(v, { select: !0 })) : f.shiftKey && p === v && (f.preventDefault(), n.loop && Pe(g, { select: !0 })) : p === m && f.preventDefault();
      }
    }
    return (f, d) => (w(), O(u(Y), {
      ref_key: "currentRef",
      ref: r,
      tabindex: "-1",
      "as-child": f.asChild,
      as: f.as,
      onKeydown: c
    }, {
      default: C(() => [
        A(f.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), ts = "menu.itemSelect", jt = ["Enter", " "], ns = ["ArrowDown", "PageUp", "Home"], yo = ["ArrowUp", "PageDown", "End"], os = [...ns, ...yo], rs = {
  ltr: [...jt, "ArrowRight"],
  rtl: [...jt, "ArrowLeft"]
}, as = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function bo(e) {
  return e ? "open" : "closed";
}
function bt(e) {
  return e === "indeterminate";
}
function dn(e) {
  return bt(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function ss(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function is(e, t) {
  const { x: n, y: o } = e;
  let r = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a].x, l = t[a].y, c = t[s].x, f = t[s].y;
    l > o != f > o && n < (c - i) * (o - l) / (f - l) + i && (r = !r);
  }
  return r;
}
function ls(e, t) {
  if (!t)
    return !1;
  const n = { x: e.clientX, y: e.clientY };
  return is(n, t);
}
function tt(e) {
  return e.pointerType === "mouse";
}
const [wo, us] = ne("PopperRoot"), xo = /* @__PURE__ */ E({
  __name: "PopperRoot",
  setup(e) {
    const t = k();
    return us({
      anchor: t,
      onAnchorChange: (n) => t.value = n
    }), (n, o) => A(n.$slots, "default");
  }
}), cs = /* @__PURE__ */ E({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: o } = z(), r = wo();
    return te(() => {
      var a;
      r.onAnchorChange((a = t.element) != null ? a : o.value);
    }), (a, s) => (w(), O(u(Y), {
      ref: u(n),
      as: a.as,
      "as-child": a.asChild
    }, {
      default: C(() => [
        A(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function ds(e) {
  return e !== null;
}
function fs(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var b, _;
      var n, o, r;
      const { placement: a, rects: s, middlewareData: i } = t, l = ((n = i.arrow) == null ? void 0 : n.centerOffset) !== 0, c = l ? 0 : e.arrowWidth, f = l ? 0 : e.arrowHeight, [d, p] = Gt(a), m = { start: "0%", center: "50%", end: "100%" }[p], v = ((b = (o = i.arrow) == null ? void 0 : o.x) != null ? b : 0) + c / 2, g = ((_ = (r = i.arrow) == null ? void 0 : r.y) != null ? _ : 0) + f / 2;
      let h = "", y = "";
      return d === "bottom" ? (h = l ? m : `${v}px`, y = `${-f}px`) : d === "top" ? (h = l ? m : `${v}px`, y = `${s.floating.height + f}px`) : d === "right" ? (h = `${-f}px`, y = l ? m : `${g}px`) : d === "left" && (h = `${s.floating.width + f}px`, y = l ? m : `${g}px`), { data: { x: h, y } };
    }
  };
}
function Gt(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
const _o = {
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
}, [Ol, ps] = ne("PopperContent"), ms = /* @__PURE__ */ E({
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
    ..._o
  }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = wo(), { forwardRef: a, currentElement: s } = z(), i = k(), l = k(), { width: c, height: f } = $a(l), d = M(
      () => n.side + (n.align !== "center" ? `-${n.align}` : "")
    ), p = M(() => typeof n.collisionPadding == "number" ? n.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...n.collisionPadding }), m = M(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), v = M(() => ({
      padding: p.value,
      boundary: m.value.filter(ds),
      altBoundary: m.value.length > 0
    })), g = aa(() => [
      Yr({
        mainAxis: n.sideOffset + f.value,
        alignmentAxis: n.alignOffset
      }),
      n.prioritizePosition && n.avoidCollisions && Tn({
        ...v.value
      }),
      n.avoidCollisions && Xr({
        mainAxis: !0,
        crossAxis: !!n.prioritizePosition,
        limiter: n.sticky === "partial" ? ea() : void 0,
        ...v.value
      }),
      !n.prioritizePosition && n.avoidCollisions && Tn({
        ...v.value
      }),
      Zr({
        ...v.value,
        apply: ({ elements: x, rects: B, availableWidth: S, availableHeight: j }) => {
          const { width: F, height: X } = B.reference, H = x.floating.style;
          H.setProperty(
            "--radix-popper-available-width",
            `${S}px`
          ), H.setProperty(
            "--radix-popper-available-height",
            `${j}px`
          ), H.setProperty(
            "--radix-popper-anchor-width",
            `${F}px`
          ), H.setProperty(
            "--radix-popper-anchor-height",
            `${X}px`
          );
        }
      }),
      l.value && oa({ element: l.value, padding: n.arrowPadding }),
      fs({
        arrowWidth: c.value,
        arrowHeight: f.value
      }),
      n.hideWhenDetached && Jr({ strategy: "referenceHidden", ...v.value })
    ]), { floatingStyles: h, placement: y, isPositioned: b, middlewareData: _ } = ra(
      r.anchor,
      i,
      {
        strategy: "fixed",
        placement: d,
        whileElementsMounted: (...x) => qr(...x, {
          animationFrame: n.updatePositionStrategy === "always"
        }),
        middleware: g
      }
    ), P = M(
      () => Gt(y.value)[0]
    ), T = M(
      () => Gt(y.value)[1]
    );
    nr(() => {
      b.value && o("placed");
    });
    const D = M(
      () => {
        var x;
        return ((x = _.value.arrow) == null ? void 0 : x.centerOffset) !== 0;
      }
    ), R = k("");
    te(() => {
      s.value && (R.value = window.getComputedStyle(s.value).zIndex);
    });
    const V = M(() => {
      var B;
      var x;
      return (B = (x = _.value.arrow) == null ? void 0 : x.x) != null ? B : 0;
    }), N = M(() => {
      var B;
      var x;
      return (B = (x = _.value.arrow) == null ? void 0 : x.y) != null ? B : 0;
    });
    return ps({
      placedSide: P,
      onArrowChange: (x) => l.value = x,
      arrowX: V,
      arrowY: N,
      shouldHideArrow: D
    }), (x, B) => {
      var S, j, F;
      return w(), ee("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-radix-popper-content-wrapper": "",
        style: qt({
          ...u(h),
          transform: u(b) ? u(h).transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: R.value,
          "--radix-popper-transform-origin": [
            (S = u(_).transformOrigin) == null ? void 0 : S.x,
            (j = u(_).transformOrigin) == null ? void 0 : j.y
          ].join(" "),
          ...((F = u(_).hide) == null ? void 0 : F.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        G(u(Y), L({ ref: u(a) }, x.$attrs, {
          "as-child": n.asChild,
          as: x.as,
          "data-side": P.value,
          "data-align": T.value,
          style: {
            animation: u(b) ? void 0 : "none"
          }
        }), {
          default: C(() => [
            A(x.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
}), Co = /* @__PURE__ */ E({
  __name: "VisuallyHidden",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return z(), (t, n) => (w(), O(u(Y), {
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
      default: C(() => [
        A(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), vs = "data-radix-vue-collection-item", [fn, gs] = ne("CollectionProvider");
function hs(e = vs) {
  const t = k(/* @__PURE__ */ new Map()), n = k(), o = gs({
    collectionRef: n,
    itemMap: t,
    attrName: e
  }), { getItems: r } = ws(o), a = M(() => Array.from(o.itemMap.value.values())), s = M(() => o.itemMap.value.size);
  return { getItems: r, reactiveItems: a, itemMapSize: s };
}
const ys = E({
  name: "CollectionSlot",
  setup(e, { slots: t }) {
    const n = fn(), { primitiveElement: o, currentElement: r } = go();
    return q(r, () => {
      n.collectionRef.value = r.value;
    }), () => Ve(un, { ref: o }, t);
  }
}), bs = E({
  name: "CollectionItem",
  inheritAttrs: !1,
  props: {
    value: {
      validator: () => !0
    }
  },
  setup(e, { slots: t, attrs: n }) {
    const o = fn(), { primitiveElement: r, currentElement: a } = go();
    return te((s) => {
      if (a.value) {
        const i = Zo(a.value);
        o.itemMap.value.set(i, { ref: a.value, value: e.value }), s(() => o.itemMap.value.delete(i));
      }
    }), () => Ve(un, { ...n, [o.attrName]: "", ref: r }, t);
  }
});
function ws(e) {
  const t = e != null ? e : fn();
  return { getItems: () => {
    const n = t.collectionRef.value;
    if (!n)
      return [];
    const o = Array.from(n.querySelectorAll(`[${t.attrName}]`));
    return Array.from(t.itemMap.value.values()).sort(
      (r, a) => o.indexOf(r.ref) - o.indexOf(a.ref)
    );
  } };
}
const Oo = /* @__PURE__ */ E({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (w(), O(u(cs), K(U(t)), {
      default: C(() => [
        A(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function xs() {
  const e = k(!1);
  return Be(() => {
    yt("keydown", () => {
      e.value = !0;
    }, { capture: !0, passive: !0 }), yt(["pointerdown", "pointermove"], () => {
      e.value = !1;
    }, { capture: !0, passive: !0 });
  }), e;
}
const _s = uo(xs), [Le, Eo] = ne(["MenuRoot", "MenuSub"], "MenuContext"), [at, Cs] = ne("MenuRoot"), Os = /* @__PURE__ */ E({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = t, { modal: r, dir: a } = ke(n), s = ln(a), i = Me(n, "open", o), l = k(), c = _s();
    return Eo({
      open: i,
      onOpenChange: (f) => {
        i.value = f;
      },
      content: l,
      onContentChange: (f) => {
        l.value = f;
      }
    }), Cs({
      onClose: () => {
        i.value = !1;
      },
      isUsingKeyboardRef: c,
      dir: s,
      modal: r
    }), (f, d) => (w(), O(u(xo), null, {
      default: C(() => [
        A(f.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Es = "rovingFocusGroup.onEntryFocus", Ps = { bubbles: !1, cancelable: !0 };
function Ts(e, t = !1) {
  const n = document.activeElement;
  for (const o of e)
    if (o === n || (o.focus({ preventScroll: t }), document.activeElement !== n))
      return;
}
const [El, As] = ne("RovingFocusGroup"), Ss = /* @__PURE__ */ E({
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
    const o = e, r = n, { loop: a, orientation: s, dir: i } = ke(o), l = ln(i), c = Me(o, "currentTabStopId", r, {
      defaultValue: o.defaultCurrentTabStopId,
      passive: o.currentTabStopId === void 0
    }), f = k(!1), d = k(!1), p = k(0), { getItems: m } = hs();
    function v(g) {
      const h = !d.value;
      if (g.currentTarget && g.target === g.currentTarget && h && !f.value) {
        const y = new CustomEvent(Es, Ps);
        if (g.currentTarget.dispatchEvent(y), r("entryFocus", y), !y.defaultPrevented) {
          const b = m().map((D) => D.ref).filter((D) => D.dataset.disabled !== ""), _ = b.find((D) => D.getAttribute("data-active") === "true"), P = b.find(
            (D) => D.id === c.value
          ), T = [_, P, ...b].filter(
            Boolean
          );
          Ts(T, o.preventScrollOnEntryFocus);
        }
      }
      d.value = !1;
    }
    return t({
      getItems: m
    }), As({
      loop: a,
      dir: l,
      orientation: s,
      currentTabStopId: c,
      onItemFocus: (g) => {
        c.value = g;
      },
      onItemShiftTab: () => {
        f.value = !0;
      },
      onFocusableItemAdd: () => {
        p.value++;
      },
      onFocusableItemRemove: () => {
        p.value--;
      }
    }), (g, h) => (w(), O(u(ys), null, {
      default: C(() => [
        G(u(Y), {
          tabindex: f.value || p.value === 0 ? -1 : 0,
          "data-orientation": u(s),
          as: g.as,
          "as-child": g.asChild,
          dir: u(l),
          style: { outline: "none" },
          onMousedown: h[0] || (h[0] = (y) => d.value = !0),
          onFocus: v,
          onBlur: h[1] || (h[1] = (y) => f.value = !1)
        }, {
          default: C(() => [
            A(g.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), [pn, ks] = ne("MenuContent"), mn = /* @__PURE__ */ E({
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
    ..._o
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = Le(), a = at(), { trapFocus: s, disableOutsidePointerEvents: i, loop: l } = ke(n);
    Aa(), Pa(i.value);
    const c = k(""), f = k(0), d = k(0), p = k(null), m = k("right"), v = k(0), g = k(null), { createCollection: h } = mo(), { forwardRef: y, currentElement: b } = z(), _ = h(b);
    q(b, (x) => {
      r.onContentChange(x);
    });
    const { handleTypeaheadSearch: P } = La(_);
    Ke(() => {
      window.clearTimeout(f.value);
    });
    function T(x) {
      var B, S;
      return m.value === ((B = p.value) == null ? void 0 : B.side) && ls(x, (S = p.value) == null ? void 0 : S.area);
    }
    async function D(x) {
      var B;
      o("openAutoFocus", x), !x.defaultPrevented && (x.preventDefault(), (B = b.value) == null || B.focus({
        preventScroll: !0
      }));
    }
    function R(x) {
      if (x.defaultPrevented)
        return;
      const B = x.target.closest("[data-radix-menu-content]") === x.currentTarget, S = x.ctrlKey || x.altKey || x.metaKey, j = x.key.length === 1, F = wa(
        x,
        document.activeElement,
        b.value,
        {
          loop: l.value,
          arrowKeyOptions: "vertical",
          dir: a == null ? void 0 : a.dir.value,
          focus: !0,
          attributeName: "[data-radix-vue-collection-item]:not([data-disabled])"
        }
      );
      if (F)
        return F == null ? void 0 : F.focus();
      if (x.code === "Space" || (B && (x.key === "Tab" && x.preventDefault(), !S && j && P(x.key)), x.target !== b.value) || !os.includes(x.key))
        return;
      x.preventDefault();
      const X = _.value;
      yo.includes(x.key) && X.reverse(), ss(X);
    }
    function V(x) {
      var B, S;
      (S = (B = x == null ? void 0 : x.currentTarget) == null ? void 0 : B.contains) != null && S.call(B, x.target) || (window.clearTimeout(f.value), c.value = "");
    }
    function N(x) {
      var B;
      if (!tt(x))
        return;
      const S = x.target, j = v.value !== x.clientX;
      if ((B = x == null ? void 0 : x.currentTarget) != null && B.contains(S) && j) {
        const F = x.clientX > v.value ? "right" : "left";
        m.value = F, v.value = x.clientX;
      }
    }
    return ks({
      onItemEnter: (x) => !!T(x),
      onItemLeave: (x) => {
        var B;
        T(x) || ((B = b.value) == null || B.focus(), g.value = null);
      },
      onTriggerLeave: (x) => !!T(x),
      searchRef: c,
      pointerGraceTimerRef: d,
      onPointerGraceIntentChange: (x) => {
        p.value = x;
      }
    }), (x, B) => (w(), O(u(es), {
      "as-child": "",
      trapped: u(s),
      onMountAutoFocus: D,
      onUnmountAutoFocus: B[7] || (B[7] = (S) => o("closeAutoFocus", S))
    }, {
      default: C(() => [
        G(u(Ua), {
          "as-child": "",
          "disable-outside-pointer-events": u(i),
          onEscapeKeyDown: B[2] || (B[2] = (S) => o("escapeKeyDown", S)),
          onPointerDownOutside: B[3] || (B[3] = (S) => o("pointerDownOutside", S)),
          onFocusOutside: B[4] || (B[4] = (S) => o("focusOutside", S)),
          onInteractOutside: B[5] || (B[5] = (S) => o("interactOutside", S)),
          onDismiss: B[6] || (B[6] = (S) => o("dismiss"))
        }, {
          default: C(() => [
            G(u(Ss), {
              "current-tab-stop-id": g.value,
              "onUpdate:currentTabStopId": B[0] || (B[0] = (S) => g.value = S),
              "as-child": "",
              orientation: "vertical",
              dir: u(a).dir.value,
              loop: u(l),
              onEntryFocus: B[1] || (B[1] = (S) => {
                o("entryFocus", S), u(a).isUsingKeyboardRef.value || S.preventDefault();
              })
            }, {
              default: C(() => [
                G(u(ms), {
                  ref: u(y),
                  role: "menu",
                  as: x.as,
                  "as-child": x.asChild,
                  "aria-orientation": "vertical",
                  "data-radix-menu-content": "",
                  "data-state": u(bo)(u(r).open.value),
                  dir: u(a).dir.value,
                  side: x.side,
                  "side-offset": x.sideOffset,
                  align: x.align,
                  "align-offset": x.alignOffset,
                  "avoid-collisions": x.avoidCollisions,
                  "collision-boundary": x.collisionBoundary,
                  "collision-padding": x.collisionPadding,
                  "arrow-padding": x.arrowPadding,
                  "prioritize-position": x.prioritizePosition,
                  sticky: x.sticky,
                  "hide-when-detached": x.hideWhenDetached,
                  onKeydown: R,
                  onBlur: V,
                  onPointermove: N
                }, {
                  default: C(() => [
                    A(x.$slots, "default")
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
}), Po = /* @__PURE__ */ E({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = pn(), { forwardRef: o } = z(), r = k(!1);
    async function a(i) {
      if (!i.defaultPrevented && tt(i)) {
        if (t.disabled)
          n.onItemLeave(i);
        else if (!n.onItemEnter(i)) {
          const l = i.currentTarget;
          l == null || l.focus({ preventScroll: !0 });
        }
      }
    }
    async function s(i) {
      await ae(), !i.defaultPrevented && tt(i) && n.onItemLeave(i);
    }
    return (i, l) => (w(), O(u(bs), null, {
      default: C(() => [
        G(u(Y), L({
          ref: u(o),
          role: "menuitem",
          tabindex: "-1"
        }, i.$attrs, {
          as: i.as,
          "as-child": i.asChild,
          "data-radix-vue-collection-item": "",
          "aria-disabled": i.disabled || void 0,
          "data-disabled": i.disabled ? "" : void 0,
          "data-highlighted": r.value ? "" : void 0,
          onPointermove: a,
          onPointerleave: s,
          onFocus: l[0] || (l[0] = async (c) => {
            await ae(), !(c.defaultPrevented || i.disabled) && (r.value = !0);
          }),
          onBlur: l[1] || (l[1] = async (c) => {
            await ae(), !c.defaultPrevented && (r.value = !1);
          })
        }), {
          default: C(() => [
            A(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "aria-disabled", "data-disabled", "data-highlighted"])
      ]),
      _: 3
    }));
  }
}), vn = /* @__PURE__ */ E({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = t, { forwardRef: r, currentElement: a } = z(), s = at(), i = pn(), l = k(!1);
    async function c() {
      const f = a.value;
      if (!n.disabled && f) {
        const d = new CustomEvent(ts, {
          bubbles: !0,
          cancelable: !0
        });
        o("select", d), await ae(), d.defaultPrevented ? l.value = !1 : s.onClose();
      }
    }
    return (f, d) => (w(), O(Po, L(n, {
      ref: u(r),
      onClick: c,
      onPointerdown: d[0] || (d[0] = () => {
        l.value = !0;
      }),
      onPointerup: d[1] || (d[1] = async (p) => {
        var m;
        await ae(), !p.defaultPrevented && (l.value || (m = p.currentTarget) == null || m.click());
      }),
      onKeydown: d[2] || (d[2] = async (p) => {
        const m = u(i).searchRef.value !== "";
        f.disabled || m && p.key === " " || u(jt).includes(p.key) && (p.currentTarget.click(), p.preventDefault());
      })
    }), {
      default: C(() => [
        A(f.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Bs, To] = ne(
  ["MenuCheckboxItem", "MenuRadioItem"],
  "MenuItemIndicatorContext"
), Ms = /* @__PURE__ */ E({
  __name: "MenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = Bs({
      checked: k(!1)
    });
    return (n, o) => (w(), O(u(Ot), {
      present: n.forceMount || u(bt)(u(t).checked.value) || u(t).checked.value === !0
    }, {
      default: C(() => [
        G(u(Y), {
          as: n.as,
          "as-child": n.asChild,
          "data-state": u(dn)(u(t).checked.value)
        }, {
          default: C(() => [
            A(n.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child", "data-state"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Ds = /* @__PURE__ */ E({
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
    const n = e, o = t, r = Me(n, "checked", o);
    return To({ checked: r }), (a, s) => (w(), O(vn, L({ role: "menuitemcheckbox" }, n, {
      "aria-checked": u(bt)(u(r)) ? "mixed" : u(r),
      "data-state": u(dn)(u(r)),
      onSelect: s[0] || (s[0] = async (i) => {
        o("select", i), u(bt)(u(r)) ? r.value = !0 : r.value = !u(r);
      })
    }), {
      default: C(() => [
        A(a.$slots, "default", { checked: u(r) })
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), Rs = /* @__PURE__ */ E({
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
    const n = e, o = t, r = Z(n, o), a = Le(), { forwardRef: s, currentElement: i } = z();
    return Da(i), (l, c) => (w(), O(mn, L(u(r), {
      ref: u(s),
      "trap-focus": u(a).open.value,
      "disable-outside-pointer-events": u(a).open.value,
      "disable-outside-scroll": !0,
      onDismiss: c[0] || (c[0] = (f) => u(a).onOpenChange(!1)),
      onFocusOutside: c[1] || (c[1] = mt((f) => o("focusOutside", f), ["prevent"]))
    }), {
      default: C(() => [
        A(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), $s = /* @__PURE__ */ E({
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
    const n = Z(e, t), o = Le();
    return (r, a) => (w(), O(mn, L(u(n), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      "disable-outside-scroll": !1,
      onDismiss: a[0] || (a[0] = (s) => u(o).onOpenChange(!1))
    }), {
      default: C(() => [
        A(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Is = /* @__PURE__ */ E({
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
    const n = Z(e, t), o = Le(), r = at();
    return (a, s) => (w(), O(u(Ot), {
      present: a.forceMount || u(o).open.value
    }, {
      default: C(() => [
        u(r).modal.value ? (w(), O(Rs, K(L({ key: 0 }, { ...a.$attrs, ...u(n) })), {
          default: C(() => [
            A(a.$slots, "default")
          ]),
          _: 3
        }, 16)) : (w(), O($s, K(L({ key: 1 }, { ...a.$attrs, ...u(n) })), {
          default: C(() => [
            A(a.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Ao = /* @__PURE__ */ E({
  __name: "MenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (w(), O(u(Y), L({ role: "group" }, t), {
      default: C(() => [
        A(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ls = /* @__PURE__ */ E({
  __name: "MenuLabel",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (n, o) => (w(), O(u(Y), K(U(t)), {
      default: C(() => [
        A(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Fs = /* @__PURE__ */ E({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (w(), O(u(Va), K(U(t)), {
      default: C(() => [
        A(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Ns, zs] = ne("MenuRadioGroup"), Vs = /* @__PURE__ */ E({
  __name: "MenuRadioGroup",
  props: {
    modelValue: { default: "" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = Me(n, "modelValue", t);
    return zs({
      modelValue: o,
      onValueChange: (r) => {
        o.value = r;
      }
    }), (r, a) => (w(), O(Ao, K(U(n)), {
      default: C(() => [
        A(r.$slots, "default", { modelValue: u(o) })
      ]),
      _: 3
    }, 16));
  }
}), Ws = /* @__PURE__ */ E({
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
    const n = e, o = t, { value: r } = ke(n), a = Ns(), s = M(
      () => a.modelValue.value === (r == null ? void 0 : r.value)
    );
    return To({ checked: s }), (i, l) => (w(), O(vn, L({ role: "menuitemradio" }, n, {
      "aria-checked": s.value,
      "data-state": u(dn)(s.value),
      onSelect: l[0] || (l[0] = async (c) => {
        o("select", c), u(a).onValueChange(u(r));
      })
    }), {
      default: C(() => [
        A(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), js = /* @__PURE__ */ E({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (w(), O(u(Y), L(t, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: C(() => [
        A(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [So, Gs] = ne("MenuSub"), Ks = /* @__PURE__ */ E({
  __name: "MenuSub",
  props: {
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = Me(n, "open", t, {
      defaultValue: !1,
      passive: n.open === void 0
    }), r = Le(), a = k(), s = k();
    return te((i) => {
      (r == null ? void 0 : r.open.value) === !1 && (o.value = !1), i(() => o.value = !1);
    }), Eo({
      open: o,
      onOpenChange: (i) => {
        o.value = i;
      },
      content: s,
      onContentChange: (i) => {
        s.value = i;
      }
    }), Gs({
      triggerId: "",
      contentId: "",
      trigger: a,
      onTriggerChange: (i) => {
        a.value = i;
      }
    }), (i, l) => (w(), O(u(xo), null, {
      default: C(() => [
        A(i.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Us = /* @__PURE__ */ E({
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
    const n = Z(e, t), o = Le(), r = at(), a = So(), { forwardRef: s, currentElement: i } = z();
    return a.contentId || (a.contentId = Ct(void 0, "radix-vue-menu-sub-content")), (l, c) => (w(), O(u(Ot), {
      present: l.forceMount || u(o).open.value
    }, {
      default: C(() => [
        G(mn, L(u(n), {
          id: u(a).contentId,
          ref: u(s),
          "aria-labelledby": u(a).triggerId,
          align: "start",
          side: u(r).dir.value === "rtl" ? "left" : "right",
          "disable-outside-pointer-events": !1,
          "disable-outside-scroll": !1,
          "trap-focus": !1,
          onOpenAutoFocus: c[0] || (c[0] = mt((f) => {
            var d;
            u(r).isUsingKeyboardRef.value && ((d = u(i)) == null || d.focus());
          }, ["prevent"])),
          onCloseAutoFocus: c[1] || (c[1] = mt(() => {
          }, ["prevent"])),
          onFocusOutside: c[2] || (c[2] = (f) => {
            f.defaultPrevented || f.target !== u(a).trigger.value && u(o).onOpenChange(!1);
          }),
          onEscapeKeyDown: c[3] || (c[3] = (f) => {
            u(r).onClose(), f.preventDefault();
          }),
          onKeydown: c[4] || (c[4] = (f) => {
            var d, p;
            const m = (d = f.currentTarget) == null ? void 0 : d.contains(f.target), v = u(as)[u(r).dir.value].includes(f.key);
            m && v && (u(o).onOpenChange(!1), (p = u(a).trigger.value) == null || p.focus(), f.preventDefault());
          })
        }), {
          default: C(() => [
            A(l.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-labelledby", "side"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Hs = /* @__PURE__ */ E({
  __name: "MenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Le(), o = at(), r = So(), a = pn(), s = k(null);
    r.triggerId || (r.triggerId = Ct(void 0, "radix-vue-menu-sub-trigger"));
    function i() {
      s.value && window.clearTimeout(s.value), s.value = null;
    }
    Ke(() => {
      i();
    });
    function l(d) {
      !tt(d) || a.onItemEnter(d) || !t.disabled && !n.open.value && !s.value && (a.onPointerGraceIntentChange(null), s.value = window.setTimeout(() => {
        n.onOpenChange(!0), i();
      }, 100));
    }
    async function c(d) {
      var p, m;
      if (!tt(d))
        return;
      i();
      const v = (p = n.content.value) == null ? void 0 : p.getBoundingClientRect();
      if (v != null && v.width) {
        const g = (m = n.content.value) == null ? void 0 : m.dataset.side, h = g === "right", y = h ? -5 : 5, b = v[h ? "left" : "right"], _ = v[h ? "right" : "left"];
        a.onPointerGraceIntentChange({
          area: [
            { x: d.clientX + y, y: d.clientY },
            { x: b, y: v.top },
            { x: _, y: v.top },
            { x: _, y: v.bottom },
            { x: b, y: v.bottom }
          ],
          side: g
        }), window.clearTimeout(a.pointerGraceTimerRef.value), a.pointerGraceTimerRef.value = window.setTimeout(
          () => a.onPointerGraceIntentChange(null),
          300
        );
      } else {
        if (a.onTriggerLeave(d))
          return;
        a.onPointerGraceIntentChange(null);
      }
    }
    async function f(d) {
      var p;
      const m = a.searchRef.value !== "";
      t.disabled || m && d.key === " " || rs[o.dir.value].includes(d.key) && (n.onOpenChange(!0), await ae(), (p = n.content.value) == null || p.focus(), d.preventDefault());
    }
    return (d, p) => (w(), O(Oo, { "as-child": "" }, {
      default: C(() => [
        G(Po, L(t, {
          id: u(r).triggerId,
          ref: (m) => {
            var v;
            (v = u(r)) == null || v.onTriggerChange(m == null ? void 0 : m.$el);
          },
          "aria-haspopup": "menu",
          "aria-expanded": u(n).open.value,
          "aria-controls": u(r).contentId,
          "data-state": u(bo)(u(n).open.value),
          onClick: p[0] || (p[0] = async (m) => {
            t.disabled || m.defaultPrevented || (m.currentTarget.focus(), u(n).open.value || u(n).onOpenChange(!0));
          }),
          onPointermove: l,
          onPointerleave: c,
          onKeydown: f
        }), {
          default: C(() => [
            A(d.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-expanded", "aria-controls", "data-state"])
      ]),
      _: 3
    }));
  }
}), [ko, qs] = ne("DropdownMenuRoot"), Ys = /* @__PURE__ */ E({
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
    z();
    const r = Me(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), a = k(), { modal: s, dir: i } = ke(n), l = ln(i);
    return qs({
      open: r,
      onOpenChange: (c) => {
        r.value = c;
      },
      onOpenToggle: () => {
        r.value = !r.value;
      },
      triggerId: "",
      triggerElement: a,
      contentId: "",
      modal: s,
      dir: l
    }), (c, f) => (w(), O(u(Os), {
      open: u(r),
      "onUpdate:open": f[0] || (f[0] = (d) => Hn(r) ? r.value = d : null),
      dir: u(l),
      modal: u(s)
    }, {
      default: C(() => [
        A(c.$slots, "default", { open: u(r) })
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
}), Xs = /* @__PURE__ */ E({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = ko(), { forwardRef: o, currentElement: r } = z();
    return Be(() => {
      n.triggerElement = r;
    }), n.triggerId || (n.triggerId = Ct(void 0, "radix-vue-dropdown-menu-trigger")), (a, s) => (w(), O(u(Oo), { "as-child": "" }, {
      default: C(() => [
        G(u(Y), {
          id: u(n).triggerId,
          ref: u(o),
          type: a.as === "button" ? "button" : void 0,
          "as-child": t.asChild,
          as: a.as,
          "aria-haspopup": "menu",
          "aria-expanded": u(n).open.value,
          "aria-controls": u(n).open.value ? u(n).contentId : void 0,
          "data-disabled": a.disabled ? "" : void 0,
          disabled: a.disabled,
          "data-state": u(n).open.value ? "open" : "closed",
          onClick: s[0] || (s[0] = async (i) => {
            var l;
            !a.disabled && i.button === 0 && i.ctrlKey === !1 && ((l = u(n)) == null || l.onOpenToggle(), await ae(), u(n).open.value && i.preventDefault());
          }),
          onKeydown: s[1] || (s[1] = Jo(
            (i) => {
              a.disabled || (["Enter", " "].includes(i.key) && u(n).onOpenToggle(), i.key === "ArrowDown" && u(n).onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
            },
            ["enter", "space", "arrow-down"]
          ))
        }, {
          default: C(() => [
            A(a.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as-child", "as", "aria-expanded", "aria-controls", "data-disabled", "disabled", "data-state"])
      ]),
      _: 3
    }));
  }
}), Zs = /* @__PURE__ */ E({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (w(), O(u(Fs), K(U(t)), {
      default: C(() => [
        A(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Js = /* @__PURE__ */ E({
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
    z();
    const o = ko(), r = k(!1);
    function a(s) {
      s.defaultPrevented || (r.value || setTimeout(() => {
        var i;
        (i = o.triggerElement.value) == null || i.focus();
      }, 0), r.value = !1, s.preventDefault());
    }
    return o.contentId || (o.contentId = Ct(void 0, "radix-vue-dropdown-menu-content")), (s, i) => {
      var l;
      return w(), O(u(Is), L(u(n), {
        id: u(o).contentId,
        "aria-labelledby": (l = u(o)) == null ? void 0 : l.triggerId,
        style: {
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        },
        onCloseAutoFocus: a,
        onInteractOutside: i[0] || (i[0] = (c) => {
          var f;
          if (c.defaultPrevented)
            return;
          const d = c.detail.originalEvent, p = d.button === 0 && d.ctrlKey === !0, m = d.button === 2 || p;
          (!u(o).modal.value || m) && (r.value = !0), (f = u(o).triggerElement.value) != null && f.contains(c.target) && c.preventDefault();
        })
      }), {
        default: C(() => [
          A(s.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby"]);
    };
  }
}), Qs = /* @__PURE__ */ E({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = _t(t);
    return z(), (r, a) => (w(), O(u(vn), K(U({ ...n, ...u(o) })), {
      default: C(() => [
        A(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ei = /* @__PURE__ */ E({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return z(), (n, o) => (w(), O(u(Ao), K(U(t)), {
      default: C(() => [
        A(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ti = /* @__PURE__ */ E({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return z(), (n, o) => (w(), O(u(js), K(U(t)), {
      default: C(() => [
        A(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ni = /* @__PURE__ */ E({
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
    const n = e, o = _t(t);
    return z(), (r, a) => (w(), O(u(Ds), K(U({ ...n, ...u(o) })), {
      default: C(() => [
        A(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Bo = /* @__PURE__ */ E({
  __name: "DropdownMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return z(), (n, o) => (w(), O(u(Ms), K(U(t)), {
      default: C(() => [
        A(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), oi = /* @__PURE__ */ E({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return z(), (n, o) => (w(), O(u(Ls), K(U(t)), {
      default: C(() => [
        A(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ri = /* @__PURE__ */ E({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = _t(t);
    return z(), (r, a) => (w(), O(u(Vs), K(U({ ...n, ...u(o) })), {
      default: C(() => [
        A(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ai = /* @__PURE__ */ E({
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
    return z(), (o, r) => (w(), O(u(Ws), K(U(u(n))), {
      default: C(() => [
        A(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), si = /* @__PURE__ */ E({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    var r;
    const n = e, o = Me(n, "open", t, {
      passive: n.open === void 0,
      defaultValue: (r = n.defaultOpen) != null ? r : !1
    });
    return z(), (a, s) => (w(), O(u(Ks), {
      open: u(o),
      "onUpdate:open": s[0] || (s[0] = (i) => Hn(o) ? o.value = i : null)
    }, {
      default: C(() => [
        A(a.$slots, "default", { open: u(o) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), ii = /* @__PURE__ */ E({
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
    return z(), (o, r) => (w(), O(u(Us), L(u(n), { style: {
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: C(() => [
        A(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), li = /* @__PURE__ */ E({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return z(), (n, o) => (w(), O(u(Hs), K(U(t)), {
      default: C(() => [
        A(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function ui() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
ui();
const [Et, ci] = ne("ToastProvider"), di = /* @__PURE__ */ E({
  __name: "ToastProvider",
  props: {
    label: { default: "Notification" },
    duration: { default: 5e3 },
    swipeDirection: { default: "right" },
    swipeThreshold: { default: 50 }
  },
  setup(e) {
    const t = e, { label: n, duration: o, swipeDirection: r, swipeThreshold: a } = ke(t), s = k(), i = k(0), l = k(!1), c = k(!1);
    if (t.label && typeof t.label == "string" && !t.label.trim()) {
      const f = "Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`.";
      throw new Error(f);
    }
    return ci({
      label: n,
      duration: o,
      swipeDirection: r,
      swipeThreshold: a,
      toastCount: i,
      viewport: s,
      onViewportChange(f) {
        s.value = f;
      },
      onToastAdd() {
        i.value++;
      },
      onToastRemove() {
        i.value--;
      },
      isFocusedToastEscapeKeyDownRef: l,
      isClosePausedRef: c
    }), (f, d) => A(f.$slots, "default");
  }
}), fi = "toast.swipeStart", pi = "toast.swipeMove", mi = "toast.swipeCancel", vi = "toast.swipeEnd", Kt = "toast.viewportPause", Ut = "toast.viewportResume";
function dt(e, t, n) {
  const o = n.originalEvent.currentTarget, r = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, { once: !0 }), o.dispatchEvent(r);
}
function Rn(e, t, n = 0) {
  const o = Math.abs(e.x), r = Math.abs(e.y), a = o > r;
  return t === "left" || t === "right" ? a && o > n : !a && r > n;
}
function gi(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function Mo(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((n) => {
    if (n.nodeType === n.TEXT_NODE && n.textContent && t.push(n.textContent), gi(n)) {
      const o = n.ariaHidden || n.hidden || n.style.display === "none", r = n.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (r) {
          const a = n.dataset.radixToastAnnounceAlt;
          a && t.push(a);
        } else
          t.push(...Mo(n));
    }
  }), t;
}
const hi = /* @__PURE__ */ E({
  __name: "ToastAnnounce",
  setup(e) {
    const t = Et(), n = va(1e3), o = k(!1);
    return fo(() => {
      o.value = !0;
    }), (r, a) => u(n) || o.value ? (w(), O(u(Co), { key: 0 }, {
      default: C(() => [
        pt(Ze(u(t).label.value) + " ", 1),
        A(r.$slots, "default")
      ]),
      _: 3
    })) : ce("", !0);
  }
}), [yi, bi] = ne("ToastRoot"), wi = /* @__PURE__ */ E({
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
    const n = e, o = t, { forwardRef: r, currentElement: a } = z(), s = Et(), i = k(null), l = k(null), c = M(() => n.duration || s.duration.value), f = k(0), d = k(c.value), p = k(0), m = k(c.value), v = fo(() => {
      const b = (/* @__PURE__ */ new Date()).getTime() - f.value;
      m.value = Math.max(d.value - b, 0);
    }, { fpsLimit: 60 });
    function g(b) {
      !b || b === Number.POSITIVE_INFINITY || ge && (window.clearTimeout(p.value), f.value = (/* @__PURE__ */ new Date()).getTime(), p.value = window.setTimeout(h, b));
    }
    function h() {
      var b, _;
      (b = a.value) != null && b.contains(document.activeElement) && ((_ = s.viewport.value) == null || _.focus()), s.isClosePausedRef.value = !1, o("close");
    }
    const y = M(() => a.value ? Mo(a.value) : null);
    if (n.type && !["foreground", "background"].includes(n.type)) {
      const b = "Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.";
      throw new Error(b);
    }
    return te((b) => {
      const _ = s.viewport.value;
      if (_) {
        const P = () => {
          g(d.value), v.resume(), o("resume");
        }, T = () => {
          const D = (/* @__PURE__ */ new Date()).getTime() - f.value;
          d.value = d.value - D, window.clearTimeout(p.value), v.pause(), o("pause");
        };
        return _.addEventListener(Kt, T), _.addEventListener(Ut, P), () => {
          _.removeEventListener(Kt, T), _.removeEventListener(Ut, P);
        };
      }
    }), q(() => [n.open, c.value], () => {
      d.value = c.value, n.open && !s.isClosePausedRef.value && g(c.value);
    }, { immediate: !0 }), rn("Escape", (b) => {
      o("escapeKeyDown", b), b.defaultPrevented || (s.isFocusedToastEscapeKeyDownRef.value = !0, h());
    }), Be(() => {
      s.onToastAdd();
    }), Ke(() => {
      s.onToastRemove();
    }), bi({ onClose: h }), (b, _) => (w(), ee(Xe, null, [
      y.value ? (w(), O(hi, {
        key: 0,
        role: "status",
        "aria-live": b.type === "foreground" ? "assertive" : "polite",
        "aria-atomic": ""
      }, {
        default: C(() => [
          pt(Ze(y.value), 1)
        ]),
        _: 1
      }, 8, ["aria-live"])) : ce("", !0),
      u(s).viewport.value ? (w(), O(Yn, {
        key: 1,
        to: u(s).viewport.value
      }, [
        G(u(Y), L({
          ref: u(r),
          role: "status",
          "aria-live": "off",
          "aria-atomic": "",
          tabindex: "0",
          "data-radix-vue-collection-item": ""
        }, b.$attrs, {
          as: b.as,
          "as-child": b.asChild,
          "data-state": b.open ? "open" : "closed",
          "data-swipe-direction": u(s).swipeDirection.value,
          style: { userSelect: "none", touchAction: "none" },
          onPointerdown: _[0] || (_[0] = mt((P) => {
            i.value = { x: P.clientX, y: P.clientY };
          }, ["left"])),
          onPointermove: _[1] || (_[1] = (P) => {
            if (!i.value)
              return;
            const T = P.clientX - i.value.x, D = P.clientY - i.value.y, R = !!l.value, V = ["left", "right"].includes(u(s).swipeDirection.value), N = ["left", "up"].includes(u(s).swipeDirection.value) ? Math.min : Math.max, x = V ? N(0, T) : 0, B = V ? 0 : N(0, D), S = P.pointerType === "touch" ? 10 : 2, j = { x, y: B }, F = { originalEvent: P, delta: j };
            R ? (l.value = j, u(dt)(u(pi), (X) => o("swipeMove", X), F)) : u(Rn)(j, u(s).swipeDirection.value, S) ? (l.value = j, u(dt)(u(fi), (X) => o("swipeStart", X), F), P.target.setPointerCapture(P.pointerId)) : (Math.abs(T) > S || Math.abs(D) > S) && (i.value = null);
          }),
          onPointerup: _[2] || (_[2] = (P) => {
            const T = l.value, D = P.target;
            if (D.hasPointerCapture(P.pointerId) && D.releasePointerCapture(P.pointerId), l.value = null, i.value = null, T) {
              const R = P.currentTarget, V = { originalEvent: P, delta: T };
              u(Rn)(T, u(s).swipeDirection.value, u(s).swipeThreshold.value) ? u(dt)(u(vi), (N) => o("swipeEnd", N), V) : u(dt)(u(mi), (N) => o("swipeCancel", N), V), R == null || R.addEventListener("click", (N) => N.preventDefault(), {
                once: !0
              });
            }
          })
        }), {
          default: C(() => [
            A(b.$slots, "default", {
              remaining: m.value,
              duration: c.value
            })
          ]),
          _: 3
        }, 16, ["as", "as-child", "data-state", "data-swipe-direction"])
      ], 8, ["to"])) : ce("", !0)
    ], 64));
  }
}), xi = /* @__PURE__ */ E({
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
    const n = e, o = t, { forwardRef: r } = z(), a = Me(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    });
    return (s, i) => (w(), O(u(Ot), {
      present: s.forceMount || u(a)
    }, {
      default: C(() => [
        G(wi, L({
          ref: u(r),
          open: u(a),
          type: s.type,
          as: s.as,
          "as-child": s.asChild,
          duration: s.duration
        }, s.$attrs, {
          onClose: i[0] || (i[0] = (l) => a.value = !1),
          onPause: i[1] || (i[1] = (l) => o("pause")),
          onResume: i[2] || (i[2] = (l) => o("resume")),
          onEscapeKeyDown: i[3] || (i[3] = (l) => o("escapeKeyDown", l)),
          onSwipeStart: i[4] || (i[4] = (l) => {
            o("swipeStart", l), l.currentTarget.setAttribute("data-swipe", "start");
          }),
          onSwipeMove: i[5] || (i[5] = (l) => {
            const { x: c, y: f } = l.detail.delta, d = l.currentTarget;
            d.setAttribute("data-swipe", "move"), d.style.setProperty("--radix-toast-swipe-move-x", `${c}px`), d.style.setProperty("--radix-toast-swipe-move-y", `${f}px`);
          }),
          onSwipeCancel: i[6] || (i[6] = (l) => {
            const c = l.currentTarget;
            c.setAttribute("data-swipe", "cancel"), c.style.removeProperty("--radix-toast-swipe-move-x"), c.style.removeProperty("--radix-toast-swipe-move-y"), c.style.removeProperty("--radix-toast-swipe-end-x"), c.style.removeProperty("--radix-toast-swipe-end-y");
          }),
          onSwipeEnd: i[7] || (i[7] = (l) => {
            const { x: c, y: f } = l.detail.delta, d = l.currentTarget;
            d.setAttribute("data-swipe", "end"), d.style.removeProperty("--radix-toast-swipe-move-x"), d.style.removeProperty("--radix-toast-swipe-move-y"), d.style.setProperty("--radix-toast-swipe-end-x", `${c}px`), d.style.setProperty("--radix-toast-swipe-end-y", `${f}px`), a.value = !1;
          })
        }), {
          default: C(({ remaining: l, duration: c }) => [
            A(s.$slots, "default", {
              remaining: l,
              duration: c,
              open: u(a)
            })
          ]),
          _: 3
        }, 16, ["open", "type", "as", "as-child", "duration"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Do = /* @__PURE__ */ E({
  __name: "ToastAnnounceExclude",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    return (t, n) => (w(), O(u(Y), {
      as: t.as,
      "as-child": t.asChild,
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": t.altText || void 0
    }, {
      default: C(() => [
        A(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-radix-toast-announce-alt"]));
  }
}), Ro = /* @__PURE__ */ E({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = yi(), { forwardRef: o } = z();
    return (r, a) => (w(), O(Do, { "as-child": "" }, {
      default: C(() => [
        G(u(Y), L(t, {
          ref: u(o),
          type: r.as === "button" ? "button" : void 0,
          onClick: a[0] || (a[0] = (s) => u(n).onClose())
        }), {
          default: C(() => [
            A(r.$slots, "default")
          ]),
          _: 3
        }, 16, ["type"])
      ]),
      _: 3
    }));
  }
}), _i = /* @__PURE__ */ E({
  __name: "ToastAction",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    if (!e.altText)
      throw new Error("Missing prop `altText` expected on `ToastAction`");
    const { forwardRef: t } = z();
    return (n, o) => n.altText ? (w(), O(Do, {
      key: 0,
      "alt-text": n.altText,
      "as-child": ""
    }, {
      default: C(() => [
        G(Ro, {
          ref: u(t),
          as: n.as,
          "as-child": n.asChild
        }, {
          default: C(() => [
            A(n.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child"])
      ]),
      _: 3
    }, 8, ["alt-text"])) : ce("", !0);
  }
}), $n = /* @__PURE__ */ E({
  __name: "FocusProxy",
  emits: ["focusFromOutsideViewport"],
  setup(e, { emit: t }) {
    const n = t, o = Et();
    return (r, a) => (w(), O(u(Co), {
      "aria-hidden": "true",
      tabindex: "0",
      style: { position: "fixed" },
      onFocus: a[0] || (a[0] = (s) => {
        var i;
        const l = s.relatedTarget;
        !((i = u(o).viewport.value) != null && i.contains(l)) && n("focusFromOutsideViewport");
      })
    }, {
      default: C(() => [
        A(r.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Ci = /* @__PURE__ */ E({
  inheritAttrs: !1,
  __name: "ToastViewport",
  props: {
    hotkey: { default: () => ["F8"] },
    label: { type: [String, Function], default: "Notifications ({hotkey})" },
    asChild: { type: Boolean },
    as: { default: "ol" }
  },
  setup(e) {
    const t = e, { hotkey: n, label: o } = ke(t), { forwardRef: r, currentElement: a } = z(), { createCollection: s } = mo(), i = s(a), l = Et(), c = M(() => l.toastCount.value > 0), f = k(), d = k(), p = M(() => n.value.join("+").replace(/Key/g, "").replace(/Digit/g, ""));
    rn(n.value, () => {
      a.value.focus();
    }), Be(() => {
      l.onViewportChange(a.value);
    }), te((v) => {
      const g = a.value;
      if (c.value && g) {
        const h = () => {
          if (!l.isClosePausedRef.value) {
            const T = new CustomEvent(Kt);
            g.dispatchEvent(T), l.isClosePausedRef.value = !0;
          }
        }, y = () => {
          if (l.isClosePausedRef.value) {
            const T = new CustomEvent(Ut);
            g.dispatchEvent(T), l.isClosePausedRef.value = !1;
          }
        }, b = (T) => {
          !g.contains(T.relatedTarget) && y();
        }, _ = () => {
          g.contains(document.activeElement) || y();
        }, P = (T) => {
          var D, R, V;
          const N = T.altKey || T.ctrlKey || T.metaKey;
          if (T.key === "Tab" && !N) {
            const x = document.activeElement, B = T.shiftKey;
            if (T.target === g && B) {
              (D = f.value) == null || D.focus();
              return;
            }
            const S = m({ tabbingDirection: B ? "backwards" : "forwards" }), j = S.findIndex((F) => F === x);
            ft(S.slice(j + 1)) ? T.preventDefault() : B ? (R = f.value) == null || R.focus() : (V = d.value) == null || V.focus();
          }
        };
        g.addEventListener("focusin", h), g.addEventListener("focusout", b), g.addEventListener("pointermove", h), g.addEventListener("pointerleave", _), g.addEventListener("keydown", P), window.addEventListener("blur", h), window.addEventListener("focus", y), v(() => {
          g.removeEventListener("focusin", h), g.removeEventListener("focusout", b), g.removeEventListener("pointermove", h), g.removeEventListener("pointerleave", _), g.removeEventListener("keydown", P), window.removeEventListener("blur", h), window.removeEventListener("focus", y);
        });
      }
    });
    function m({ tabbingDirection: v }) {
      const g = i.value.map((h) => {
        const y = [h, ...cn(h)];
        return v === "forwards" ? y : y.reverse();
      });
      return (v === "forwards" ? g.reverse() : g).flat();
    }
    return (v, g) => (w(), O(u(Ha), {
      role: "region",
      "aria-label": typeof u(o) == "string" ? u(o).replace("{hotkey}", p.value) : u(o)(p.value),
      tabindex: "-1",
      style: qt({
        pointerEvents: c.value ? void 0 : "none"
      })
    }, {
      default: C(() => [
        c.value ? (w(), O($n, {
          key: 0,
          ref: (h) => {
            f.value = u(_e)(h);
          },
          onFocusFromOutsideViewport: g[0] || (g[0] = () => {
            const h = m({
              tabbingDirection: "forwards"
            });
            u(ft)(h);
          })
        }, null, 512)) : ce("", !0),
        G(u(Y), L({
          ref: u(r),
          tabindex: "-1",
          as: v.as,
          "as-child": v.asChild
        }, v.$attrs), {
          default: C(() => [
            A(v.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child"]),
        c.value ? (w(), O($n, {
          key: 1,
          ref: (h) => {
            d.value = u(_e)(h);
          },
          onFocusFromOutsideViewport: g[1] || (g[1] = () => {
            const h = m({
              tabbingDirection: "backwards"
            });
            u(ft)(h);
          })
        }, null, 512)) : ce("", !0)
      ]),
      _: 3
    }, 8, ["aria-label", "style"]));
  }
}), Oi = /* @__PURE__ */ E({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return z(), (n, o) => (w(), O(u(Y), K(U(t)), {
      default: C(() => [
        A(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ei = /* @__PURE__ */ E({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return z(), (n, o) => (w(), O(u(Y), K(U(t)), {
      default: C(() => [
        A(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function $o(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number")
    o += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var r = e.length;
      for (t = 0; t < r; t++)
        e[t] && (n = $o(e[t])) && (o && (o += " "), o += n);
    } else
      for (n in e)
        e[n] && (o && (o += " "), o += n);
  return o;
}
function Pi() {
  for (var e, t, n = 0, o = "", r = arguments.length; n < r; n++)
    (e = arguments[n]) && (t = $o(e)) && (o && (o += " "), o += t);
  return o;
}
const gn = "-", Ti = (e) => {
  const t = Si(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (s) => {
      const i = s.split(gn);
      return i[0] === "" && i.length !== 1 && i.shift(), Io(i, t) || Ai(s);
    },
    getConflictingClassGroupIds: (s, i) => {
      const l = n[s] || [];
      return i && o[s] ? [...l, ...o[s]] : l;
    }
  };
}, Io = (e, t) => {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], o = t.nextPart.get(n), r = o ? Io(e.slice(1), o) : void 0;
  if (r)
    return r;
  if (t.validators.length === 0)
    return;
  const a = e.join(gn);
  return (s = t.validators.find(({
    validator: i
  }) => i(a))) == null ? void 0 : s.classGroupId;
}, In = /^\[(.+)\]$/, Ai = (e) => {
  if (In.test(e)) {
    const t = In.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, Si = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Bi(Object.entries(e.classGroups), n).forEach(([a, s]) => {
    Ht(s, o, a, t);
  }), o;
}, Ht = (e, t, n, o) => {
  e.forEach((r) => {
    if (typeof r == "string") {
      const a = r === "" ? t : Ln(t, r);
      a.classGroupId = n;
      return;
    }
    if (typeof r == "function") {
      if (ki(r)) {
        Ht(r(o), t, n, o);
        return;
      }
      t.validators.push({
        validator: r,
        classGroupId: n
      });
      return;
    }
    Object.entries(r).forEach(([a, s]) => {
      Ht(s, Ln(t, a), n, o);
    });
  });
}, Ln = (e, t) => {
  let n = e;
  return t.split(gn).forEach((o) => {
    n.nextPart.has(o) || n.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(o);
  }), n;
}, ki = (e) => e.isThemeGetter, Bi = (e, t) => t ? e.map(([n, o]) => {
  const r = o.map((a) => typeof a == "string" ? t + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map(([s, i]) => [t + s, i])) : a);
  return [n, r];
}) : e, Mi = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  const r = (a, s) => {
    n.set(a, s), t++, t > e && (t = 0, o = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(a) {
      let s = n.get(a);
      if (s !== void 0)
        return s;
      if ((s = o.get(a)) !== void 0)
        return r(a, s), s;
    },
    set(a, s) {
      n.has(a) ? n.set(a, s) : r(a, s);
    }
  };
}, Lo = "!", Di = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, o = t.length === 1, r = t[0], a = t.length, s = (i) => {
    const l = [];
    let c = 0, f = 0, d;
    for (let h = 0; h < i.length; h++) {
      let y = i[h];
      if (c === 0) {
        if (y === r && (o || i.slice(h, h + a) === t)) {
          l.push(i.slice(f, h)), f = h + a;
          continue;
        }
        if (y === "/") {
          d = h;
          continue;
        }
      }
      y === "[" ? c++ : y === "]" && c--;
    }
    const p = l.length === 0 ? i : i.substring(f), m = p.startsWith(Lo), v = m ? p.substring(1) : p, g = d && d > f ? d - f : void 0;
    return {
      modifiers: l,
      hasImportantModifier: m,
      baseClassName: v,
      maybePostfixModifierPosition: g
    };
  };
  return n ? (i) => n({
    className: i,
    parseClassName: s
  }) : s;
}, Ri = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((o) => {
    o[0] === "[" ? (t.push(...n.sort(), o), n = []) : n.push(o);
  }), t.push(...n.sort()), t;
}, $i = (e) => ({
  cache: Mi(e.cacheSize),
  parseClassName: Di(e),
  ...Ti(e)
}), Ii = /\s+/, Li = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: o,
    getConflictingClassGroupIds: r
  } = t, a = [], s = e.trim().split(Ii);
  let i = "";
  for (let l = s.length - 1; l >= 0; l -= 1) {
    const c = s[l], {
      modifiers: f,
      hasImportantModifier: d,
      baseClassName: p,
      maybePostfixModifierPosition: m
    } = n(c);
    let v = Boolean(m), g = o(v ? p.substring(0, m) : p);
    if (!g) {
      if (!v) {
        i = c + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (g = o(p), !g) {
        i = c + (i.length > 0 ? " " + i : i);
        continue;
      }
      v = !1;
    }
    const h = Ri(f).join(":"), y = d ? h + Lo : h, b = y + g;
    if (a.includes(b))
      continue;
    a.push(b);
    const _ = r(g, v);
    for (let P = 0; P < _.length; ++P) {
      const T = _[P];
      a.push(y + T);
    }
    i = c + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function Fi() {
  let e = 0, t, n, o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Fo(t)) && (o && (o += " "), o += n);
  return o;
}
const Fo = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = Fo(e[o])) && (n && (n += " "), n += t);
  return n;
};
function Ni(e, ...t) {
  let n, o, r, a = s;
  function s(l) {
    const c = t.reduce((f, d) => d(f), e());
    return n = $i(c), o = n.cache.get, r = n.cache.set, a = i, i(l);
  }
  function i(l) {
    const c = o(l);
    if (c)
      return c;
    const f = Li(l, n);
    return r(l, f), f;
  }
  return function() {
    return a(Fi.apply(null, arguments));
  };
}
const W = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, No = /^\[(?:([a-z-]+):)?(.+)\]$/i, zi = /^\d+\/\d+$/, Vi = /* @__PURE__ */ new Set(["px", "full", "screen"]), Wi = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ji = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Gi = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Ki = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Ui = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ye = (e) => je(e) || Vi.has(e) || zi.test(e), Oe = (e) => He(e, "length", el), je = (e) => Boolean(e) && !Number.isNaN(Number(e)), $t = (e) => He(e, "number", je), qe = (e) => Boolean(e) && Number.isInteger(Number(e)), Hi = (e) => e.endsWith("%") && je(e.slice(0, -1)), $ = (e) => No.test(e), Ee = (e) => Wi.test(e), qi = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Yi = (e) => He(e, qi, zo), Xi = (e) => He(e, "position", zo), Zi = /* @__PURE__ */ new Set(["image", "url"]), Ji = (e) => He(e, Zi, nl), Qi = (e) => He(e, "", tl), Ye = () => !0, He = (e, t, n) => {
  const o = No.exec(e);
  return o ? o[1] ? typeof t == "string" ? o[1] === t : t.has(o[1]) : n(o[2]) : !1;
}, el = (e) => ji.test(e) && !Gi.test(e), zo = () => !1, tl = (e) => Ki.test(e), nl = (e) => Ui.test(e), ol = () => {
  const e = W("colors"), t = W("spacing"), n = W("blur"), o = W("brightness"), r = W("borderColor"), a = W("borderRadius"), s = W("borderSpacing"), i = W("borderWidth"), l = W("contrast"), c = W("grayscale"), f = W("hueRotate"), d = W("invert"), p = W("gap"), m = W("gradientColorStops"), v = W("gradientColorStopPositions"), g = W("inset"), h = W("margin"), y = W("opacity"), b = W("padding"), _ = W("saturate"), P = W("scale"), T = W("sepia"), D = W("skew"), R = W("space"), V = W("translate"), N = () => ["auto", "contain", "none"], x = () => ["auto", "hidden", "clip", "visible", "scroll"], B = () => ["auto", $, t], S = () => [$, t], j = () => ["", ye, Oe], F = () => ["auto", je, $], X = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], H = () => ["solid", "dashed", "dotted", "double", "none"], oe = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ie = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], Q = () => ["", "0", $], st = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], he = () => [je, $];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Ye],
      spacing: [ye, Oe],
      blur: ["none", "", Ee, $],
      brightness: he(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Ee, $],
      borderSpacing: S(),
      borderWidth: j(),
      contrast: he(),
      grayscale: Q(),
      hueRotate: he(),
      invert: Q(),
      gap: S(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Hi, Oe],
      inset: B(),
      margin: B(),
      opacity: he(),
      padding: S(),
      saturate: he(),
      scale: he(),
      sepia: Q(),
      skew: he(),
      space: S(),
      translate: S()
    },
    classGroups: {
      aspect: [{
        aspect: ["auto", "square", "video", $]
      }],
      container: ["container"],
      columns: [{
        columns: [Ee]
      }],
      "break-after": [{
        "break-after": st()
      }],
      "break-before": [{
        "break-before": st()
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
        object: [...X(), $]
      }],
      overflow: [{
        overflow: x()
      }],
      "overflow-x": [{
        "overflow-x": x()
      }],
      "overflow-y": [{
        "overflow-y": x()
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
        z: ["auto", qe, $]
      }],
      basis: [{
        basis: B()
      }],
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      flex: [{
        flex: ["1", "auto", "initial", "none", $]
      }],
      grow: [{
        grow: Q()
      }],
      shrink: [{
        shrink: Q()
      }],
      order: [{
        order: ["first", "last", "none", qe, $]
      }],
      "grid-cols": [{
        "grid-cols": [Ye]
      }],
      "col-start-end": [{
        col: ["auto", {
          span: ["full", qe, $]
        }, $]
      }],
      "col-start": [{
        "col-start": F()
      }],
      "col-end": [{
        "col-end": F()
      }],
      "grid-rows": [{
        "grid-rows": [Ye]
      }],
      "row-start-end": [{
        row: ["auto", {
          span: [qe, $]
        }, $]
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
        "auto-cols": ["auto", "min", "max", "fr", $]
      }],
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", $]
      }],
      gap: [{
        gap: [p]
      }],
      "gap-x": [{
        "gap-x": [p]
      }],
      "gap-y": [{
        "gap-y": [p]
      }],
      "justify-content": [{
        justify: ["normal", ...ie()]
      }],
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      "align-content": [{
        content: ["normal", ...ie(), "baseline"]
      }],
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      "place-content": [{
        "place-content": [...ie(), "baseline"]
      }],
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      p: [{
        p: [b]
      }],
      px: [{
        px: [b]
      }],
      py: [{
        py: [b]
      }],
      ps: [{
        ps: [b]
      }],
      pe: [{
        pe: [b]
      }],
      pt: [{
        pt: [b]
      }],
      pr: [{
        pr: [b]
      }],
      pb: [{
        pb: [b]
      }],
      pl: [{
        pl: [b]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", $, t]
      }],
      "min-w": [{
        "min-w": [$, t, "min", "max", "fit"]
      }],
      "max-w": [{
        "max-w": [$, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [Ee]
        }, Ee]
      }],
      h: [{
        h: [$, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      "min-h": [{
        "min-h": [$, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      "max-h": [{
        "max-h": [$, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      size: [{
        size: [$, t, "auto", "min", "max", "fit"]
      }],
      "font-size": [{
        text: ["base", Ee, Oe]
      }],
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      "font-style": ["italic", "not-italic"],
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", $t]
      }],
      "font-family": [{
        font: [Ye]
      }],
      "fvn-normal": ["normal-nums"],
      "fvn-ordinal": ["ordinal"],
      "fvn-slashed-zero": ["slashed-zero"],
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", $]
      }],
      "line-clamp": [{
        "line-clamp": ["none", je, $t]
      }],
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", ye, $]
      }],
      "list-image": [{
        "list-image": ["none", $]
      }],
      "list-style-type": [{
        list: ["none", "disc", "decimal", $]
      }],
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      "placeholder-color": [{
        placeholder: [e]
      }],
      "placeholder-opacity": [{
        "placeholder-opacity": [y]
      }],
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      "text-color": [{
        text: [e]
      }],
      "text-opacity": [{
        "text-opacity": [y]
      }],
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      "text-decoration-style": [{
        decoration: [...H(), "wavy"]
      }],
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", ye, Oe]
      }],
      "underline-offset": [{
        "underline-offset": ["auto", ye, $]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", $]
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
        content: ["none", $]
      }],
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      "bg-opacity": [{
        "bg-opacity": [y]
      }],
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      "bg-position": [{
        bg: [...X(), Xi]
      }],
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      "bg-size": [{
        bg: ["auto", "cover", "contain", Yi]
      }],
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Ji]
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
        rounded: [a]
      }],
      "rounded-s": [{
        "rounded-s": [a]
      }],
      "rounded-e": [{
        "rounded-e": [a]
      }],
      "rounded-t": [{
        "rounded-t": [a]
      }],
      "rounded-r": [{
        "rounded-r": [a]
      }],
      "rounded-b": [{
        "rounded-b": [a]
      }],
      "rounded-l": [{
        "rounded-l": [a]
      }],
      "rounded-ss": [{
        "rounded-ss": [a]
      }],
      "rounded-se": [{
        "rounded-se": [a]
      }],
      "rounded-ee": [{
        "rounded-ee": [a]
      }],
      "rounded-es": [{
        "rounded-es": [a]
      }],
      "rounded-tl": [{
        "rounded-tl": [a]
      }],
      "rounded-tr": [{
        "rounded-tr": [a]
      }],
      "rounded-br": [{
        "rounded-br": [a]
      }],
      "rounded-bl": [{
        "rounded-bl": [a]
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
        "border-opacity": [y]
      }],
      "border-style": [{
        border: [...H(), "hidden"]
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
        "divide-opacity": [y]
      }],
      "divide-style": [{
        divide: H()
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
        outline: ["", ...H()]
      }],
      "outline-offset": [{
        "outline-offset": [ye, $]
      }],
      "outline-w": [{
        outline: [ye, Oe]
      }],
      "outline-color": [{
        outline: [e]
      }],
      "ring-w": [{
        ring: j()
      }],
      "ring-w-inset": ["ring-inset"],
      "ring-color": [{
        ring: [e]
      }],
      "ring-opacity": [{
        "ring-opacity": [y]
      }],
      "ring-offset-w": [{
        "ring-offset": [ye, Oe]
      }],
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      shadow: [{
        shadow: ["", "inner", "none", Ee, Qi]
      }],
      "shadow-color": [{
        shadow: [Ye]
      }],
      opacity: [{
        opacity: [y]
      }],
      "mix-blend": [{
        "mix-blend": [...oe(), "plus-lighter", "plus-darker"]
      }],
      "bg-blend": [{
        "bg-blend": oe()
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
        contrast: [l]
      }],
      "drop-shadow": [{
        "drop-shadow": ["", "none", Ee, $]
      }],
      grayscale: [{
        grayscale: [c]
      }],
      "hue-rotate": [{
        "hue-rotate": [f]
      }],
      invert: [{
        invert: [d]
      }],
      saturate: [{
        saturate: [_]
      }],
      sepia: [{
        sepia: [T]
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
        "backdrop-contrast": [l]
      }],
      "backdrop-grayscale": [{
        "backdrop-grayscale": [c]
      }],
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [f]
      }],
      "backdrop-invert": [{
        "backdrop-invert": [d]
      }],
      "backdrop-opacity": [{
        "backdrop-opacity": [y]
      }],
      "backdrop-saturate": [{
        "backdrop-saturate": [_]
      }],
      "backdrop-sepia": [{
        "backdrop-sepia": [T]
      }],
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      "border-spacing": [{
        "border-spacing": [s]
      }],
      "border-spacing-x": [{
        "border-spacing-x": [s]
      }],
      "border-spacing-y": [{
        "border-spacing-y": [s]
      }],
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      caption: [{
        caption: ["top", "bottom"]
      }],
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", $]
      }],
      duration: [{
        duration: he()
      }],
      ease: [{
        ease: ["linear", "in", "out", "in-out", $]
      }],
      delay: [{
        delay: he()
      }],
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", $]
      }],
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      scale: [{
        scale: [P]
      }],
      "scale-x": [{
        "scale-x": [P]
      }],
      "scale-y": [{
        "scale-y": [P]
      }],
      rotate: [{
        rotate: [qe, $]
      }],
      "translate-x": [{
        "translate-x": [V]
      }],
      "translate-y": [{
        "translate-y": [V]
      }],
      "skew-x": [{
        "skew-x": [D]
      }],
      "skew-y": [{
        "skew-y": [D]
      }],
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", $]
      }],
      accent: [{
        accent: ["auto", e]
      }],
      appearance: [{
        appearance: ["none", "auto"]
      }],
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", $]
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
        "will-change": ["auto", "scroll", "contents", "transform", $]
      }],
      fill: [{
        fill: [e, "none"]
      }],
      "stroke-w": [{
        stroke: [ye, Oe, $t]
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
}, rl = /* @__PURE__ */ Ni(ol);
function J(...e) {
  return rl(Pi(e));
}
const al = /* @__PURE__ */ E({
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
      const { class: s, ...i } = n;
      return i;
    }), a = Z(r, o);
    return (s, i) => (w(), O(u(xi), L(u(a), {
      class: u(J)(u(gl)({ variant: s.variant }), n.class),
      "onUpdate:open": s.onOpenChange
    }), {
      default: C(() => [
        A(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class", "onUpdate:open"]));
  }
}), sl = /* @__PURE__ */ E({
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
    return (o, r) => (w(), O(u(Ci), L(n.value, {
      class: u(J)(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        t.class
      )
    }), null, 16, ["class"]));
  }
}), Pl = /* @__PURE__ */ E({
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
    return (o, r) => (w(), O(u(_i), L(n.value, {
      class: u(J)(
        "inline-flex h-8 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-transparent px-3 text-sm font-medium transition-colors hover:bg-slate-100 focus:outline-none focus:ring-1 focus:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-slate-100/40 group-[.destructive]:hover:border-red-500/30 group-[.destructive]:hover:bg-red-500 group-[.destructive]:hover:text-slate-50 group-[.destructive]:focus:ring-red-500 dark:border-slate-800 dark:hover:bg-slate-800 dark:focus:ring-slate-300 dark:group-[.destructive]:border-slate-800/40 dark:group-[.destructive]:hover:border-red-900/30 dark:group-[.destructive]:hover:bg-red-900 dark:group-[.destructive]:hover:text-slate-50 dark:group-[.destructive]:focus:ring-red-900",
        t.class
      )
    }), {
      default: C(() => [
        A(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
});
function il(e, t) {
  return w(), ee("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    de("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",
      fill: "currentColor"
    })
  ]);
}
function ll(e, t) {
  return w(), ee("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    de("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z",
      fill: "currentColor"
    })
  ]);
}
function ul(e, t) {
  return w(), ee("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    de("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
      fill: "currentColor"
    })
  ]);
}
function cl(e, t) {
  return w(), ee("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    de("path", {
      d: "M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z",
      fill: "currentColor"
    })
  ]);
}
const dl = /* @__PURE__ */ E({
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
    return (o, r) => (w(), O(u(Ro), L(n.value, {
      class: u(J)(
        "absolute right-1 top-1 rounded-md p-1 text-slate-950/50 opacity-0 transition-opacity hover:text-slate-950 focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600 dark:text-slate-50/50 dark:hover:text-slate-50",
        t.class
      )
    }), {
      default: C(() => [
        G(u(ul), { class: "h-4 w-4" })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), fl = /* @__PURE__ */ E({
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
    return (o, r) => (w(), O(u(Oi), L(n.value, {
      class: u(J)("text-sm font-semibold [&+div]:text-xs", t.class)
    }), {
      default: C(() => [
        A(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Fn = /* @__PURE__ */ E({
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
    return (o, r) => (w(), O(u(Ei), L({
      class: u(J)("text-sm opacity-90", t.class)
    }, n.value), {
      default: C(() => [
        A(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), pl = /* @__PURE__ */ E({
  __name: "ToastProvider",
  props: {
    label: {},
    duration: {},
    swipeDirection: {},
    swipeThreshold: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (w(), O(u(di), K(U(t)), {
      default: C(() => [
        A(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Vo(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number")
    o += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Vo(e[t])) && (o && (o += " "), o += n);
    else
      for (t in e)
        e[t] && (o && (o += " "), o += t);
  return o;
}
function ml() {
  for (var e, t, n = 0, o = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Vo(e)) && (o && (o += " "), o += t);
  return o;
}
const Nn = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, zn = ml, vl = (e, t) => (n) => {
  var o;
  if ((t == null ? void 0 : t.variants) == null)
    return zn(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: r, defaultVariants: a } = t, s = Object.keys(r).map((c) => {
    const f = n == null ? void 0 : n[c], d = a == null ? void 0 : a[c];
    if (f === null)
      return null;
    const p = Nn(f) || Nn(d);
    return r[c][p];
  }), i = n && Object.entries(n).reduce((c, f) => {
    let [d, p] = f;
    return p === void 0 || (c[d] = p), c;
  }, {}), l = t == null || (o = t.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((c, f) => {
    let { class: d, className: p, ...m } = f;
    return Object.entries(m).every((v) => {
      let [g, h] = v;
      return Array.isArray(h) ? h.includes({
        ...a,
        ...i
      }[g]) : {
        ...a,
        ...i
      }[g] === h;
    }) ? [
      ...c,
      d,
      p
    ] : c;
  }, []);
  return zn(e, s, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, gl = vl(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border border-slate-200 p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full dark:border-slate-800 data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-50",
        destructive: "destructive group border-red-500 bg-red-500 text-slate-50 dark:border-red-900 dark:bg-red-900 dark:text-slate-50"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), hl = { name: "Notifications" }, Tl = /* @__PURE__ */ E({
  ...hl,
  props: {
    info: {},
    success: {},
    warning: {},
    errors: {},
    showErrorKeys: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, { toast: n } = Qn();
    return q(
      () => t.info,
      (o) => {
        o && n({
          icon: sr,
          title: "FYI",
          iconClasses: "text-blue-400",
          description: t.info
        });
      },
      {
        immediate: !0
      }
    ), q(
      () => t.success,
      (o) => {
        o && n({
          icon: ar,
          title: "Success",
          iconClasses: "text-green-400",
          description: t.success
        });
      },
      { immediate: !0 }
    ), q(
      () => t.warning,
      (o) => {
        o && n({
          icon: bn,
          title: "Warning",
          iconClasses: "text-orange-400",
          description: t.warning
        });
      },
      { immediate: !0 }
    ), q(
      () => t.errors,
      () => {
        Object.keys(t.errors).length > 0 && n({
          icon: bn,
          title: "Oh snap! Some errors were encountered.",
          iconClasses: "text-red-400",
          messages: t.showErrorKeys ? Object.keys(t.errors) : Object.values(t.errors)
        });
      }
    ), (o, r) => (w(), O(u(pr)));
  }
});
var Wo = {}, jo = {};
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
    const a = function(s) {
      return {
        __options: s,
        handler: o(s),
        config: r(s)
      };
    };
    return a.__isOptionsFunction = !0, a.__pluginFunction = o, a.__configFunction = r, a;
  };
  const n = t;
})(jo);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return o;
    }
  });
  const t = /* @__PURE__ */ n(jo);
  function n(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  const o = t.default;
})(Wo);
let It = Wo;
var yl = (It.__esModule ? It : { default: It }).default, Go = {}, Ko = {}, hn = { exports: {} }, I = String, Uo = function() {
  return { isColorSupported: !1, reset: I, bold: I, dim: I, italic: I, underline: I, inverse: I, hidden: I, strikethrough: I, black: I, red: I, green: I, yellow: I, blue: I, magenta: I, cyan: I, white: I, gray: I, bgBlack: I, bgRed: I, bgGreen: I, bgYellow: I, bgBlue: I, bgMagenta: I, bgCyan: I, bgWhite: I, blackBright: I, redBright: I, greenBright: I, yellowBright: I, blueBright: I, magentaBright: I, cyanBright: I, whiteBright: I, bgBlackBright: I, bgRedBright: I, bgGreenBright: I, bgYellowBright: I, bgBlueBright: I, bgMagentaBright: I, bgCyanBright: I, bgWhiteBright: I };
};
hn.exports = Uo();
hn.exports.createColors = Uo;
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(l, c) {
    for (var f in c)
      Object.defineProperty(l, f, {
        enumerable: !0,
        get: c[f]
      });
  }
  t(e, {
    dim: function() {
      return s;
    },
    default: function() {
      return i;
    }
  });
  const n = /* @__PURE__ */ o(hn.exports);
  function o(l) {
    return l && l.__esModule ? l : {
      default: l
    };
  }
  let r = /* @__PURE__ */ new Set();
  function a(l, c, f) {
    typeof process < "u" && process.env.JEST_WORKER_ID || f && r.has(f) || (f && r.add(f), console.warn(""), c.forEach((d) => console.warn(l, "-", d)));
  }
  function s(l) {
    return n.default.dim(l);
  }
  const i = {
    info(l, c) {
      a(n.default.bold(n.default.cyan("info")), ...Array.isArray(l) ? [
        l
      ] : [
        c,
        l
      ]);
    },
    warn(l, c) {
      a(n.default.bold(n.default.yellow("warn")), ...Array.isArray(l) ? [
        l
      ] : [
        c,
        l
      ]);
    },
    risk(l, c) {
      a(n.default.bold(n.default.magenta("risk")), ...Array.isArray(l) ? [
        l
      ] : [
        c,
        l
      ]);
    }
  };
})(Ko);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return r;
    }
  });
  const t = /* @__PURE__ */ n(Ko);
  function n(a) {
    return a && a.__esModule ? a : {
      default: a
    };
  }
  function o({ version: a, from: s, to: i }) {
    t.default.warn(`${s}-color-renamed`, [
      `As of Tailwind CSS ${a}, \`${s}\` has been renamed to \`${i}\`.`,
      "Update your configuration file to silence this warning."
    ]);
  }
  const r = {
    inherit: "inherit",
    current: "currentColor",
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    slate: {
      50: "#f8fafc",
      100: "#f1f5f9",
      200: "#e2e8f0",
      300: "#cbd5e1",
      400: "#94a3b8",
      500: "#64748b",
      600: "#475569",
      700: "#334155",
      800: "#1e293b",
      900: "#0f172a",
      950: "#020617"
    },
    gray: {
      50: "#f9fafb",
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#111827",
      950: "#030712"
    },
    zinc: {
      50: "#fafafa",
      100: "#f4f4f5",
      200: "#e4e4e7",
      300: "#d4d4d8",
      400: "#a1a1aa",
      500: "#71717a",
      600: "#52525b",
      700: "#3f3f46",
      800: "#27272a",
      900: "#18181b",
      950: "#09090b"
    },
    neutral: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#e5e5e5",
      300: "#d4d4d4",
      400: "#a3a3a3",
      500: "#737373",
      600: "#525252",
      700: "#404040",
      800: "#262626",
      900: "#171717",
      950: "#0a0a0a"
    },
    stone: {
      50: "#fafaf9",
      100: "#f5f5f4",
      200: "#e7e5e4",
      300: "#d6d3d1",
      400: "#a8a29e",
      500: "#78716c",
      600: "#57534e",
      700: "#44403c",
      800: "#292524",
      900: "#1c1917",
      950: "#0c0a09"
    },
    red: {
      50: "#fef2f2",
      100: "#fee2e2",
      200: "#fecaca",
      300: "#fca5a5",
      400: "#f87171",
      500: "#ef4444",
      600: "#dc2626",
      700: "#b91c1c",
      800: "#991b1b",
      900: "#7f1d1d",
      950: "#450a0a"
    },
    orange: {
      50: "#fff7ed",
      100: "#ffedd5",
      200: "#fed7aa",
      300: "#fdba74",
      400: "#fb923c",
      500: "#f97316",
      600: "#ea580c",
      700: "#c2410c",
      800: "#9a3412",
      900: "#7c2d12",
      950: "#431407"
    },
    amber: {
      50: "#fffbeb",
      100: "#fef3c7",
      200: "#fde68a",
      300: "#fcd34d",
      400: "#fbbf24",
      500: "#f59e0b",
      600: "#d97706",
      700: "#b45309",
      800: "#92400e",
      900: "#78350f",
      950: "#451a03"
    },
    yellow: {
      50: "#fefce8",
      100: "#fef9c3",
      200: "#fef08a",
      300: "#fde047",
      400: "#facc15",
      500: "#eab308",
      600: "#ca8a04",
      700: "#a16207",
      800: "#854d0e",
      900: "#713f12",
      950: "#422006"
    },
    lime: {
      50: "#f7fee7",
      100: "#ecfccb",
      200: "#d9f99d",
      300: "#bef264",
      400: "#a3e635",
      500: "#84cc16",
      600: "#65a30d",
      700: "#4d7c0f",
      800: "#3f6212",
      900: "#365314",
      950: "#1a2e05"
    },
    green: {
      50: "#f0fdf4",
      100: "#dcfce7",
      200: "#bbf7d0",
      300: "#86efac",
      400: "#4ade80",
      500: "#22c55e",
      600: "#16a34a",
      700: "#15803d",
      800: "#166534",
      900: "#14532d",
      950: "#052e16"
    },
    emerald: {
      50: "#ecfdf5",
      100: "#d1fae5",
      200: "#a7f3d0",
      300: "#6ee7b7",
      400: "#34d399",
      500: "#10b981",
      600: "#059669",
      700: "#047857",
      800: "#065f46",
      900: "#064e3b",
      950: "#022c22"
    },
    teal: {
      50: "#f0fdfa",
      100: "#ccfbf1",
      200: "#99f6e4",
      300: "#5eead4",
      400: "#2dd4bf",
      500: "#14b8a6",
      600: "#0d9488",
      700: "#0f766e",
      800: "#115e59",
      900: "#134e4a",
      950: "#042f2e"
    },
    cyan: {
      50: "#ecfeff",
      100: "#cffafe",
      200: "#a5f3fc",
      300: "#67e8f9",
      400: "#22d3ee",
      500: "#06b6d4",
      600: "#0891b2",
      700: "#0e7490",
      800: "#155e75",
      900: "#164e63",
      950: "#083344"
    },
    sky: {
      50: "#f0f9ff",
      100: "#e0f2fe",
      200: "#bae6fd",
      300: "#7dd3fc",
      400: "#38bdf8",
      500: "#0ea5e9",
      600: "#0284c7",
      700: "#0369a1",
      800: "#075985",
      900: "#0c4a6e",
      950: "#082f49"
    },
    blue: {
      50: "#eff6ff",
      100: "#dbeafe",
      200: "#bfdbfe",
      300: "#93c5fd",
      400: "#60a5fa",
      500: "#3b82f6",
      600: "#2563eb",
      700: "#1d4ed8",
      800: "#1e40af",
      900: "#1e3a8a",
      950: "#172554"
    },
    indigo: {
      50: "#eef2ff",
      100: "#e0e7ff",
      200: "#c7d2fe",
      300: "#a5b4fc",
      400: "#818cf8",
      500: "#6366f1",
      600: "#4f46e5",
      700: "#4338ca",
      800: "#3730a3",
      900: "#312e81",
      950: "#1e1b4b"
    },
    violet: {
      50: "#f5f3ff",
      100: "#ede9fe",
      200: "#ddd6fe",
      300: "#c4b5fd",
      400: "#a78bfa",
      500: "#8b5cf6",
      600: "#7c3aed",
      700: "#6d28d9",
      800: "#5b21b6",
      900: "#4c1d95",
      950: "#2e1065"
    },
    purple: {
      50: "#faf5ff",
      100: "#f3e8ff",
      200: "#e9d5ff",
      300: "#d8b4fe",
      400: "#c084fc",
      500: "#a855f7",
      600: "#9333ea",
      700: "#7e22ce",
      800: "#6b21a8",
      900: "#581c87",
      950: "#3b0764"
    },
    fuchsia: {
      50: "#fdf4ff",
      100: "#fae8ff",
      200: "#f5d0fe",
      300: "#f0abfc",
      400: "#e879f9",
      500: "#d946ef",
      600: "#c026d3",
      700: "#a21caf",
      800: "#86198f",
      900: "#701a75",
      950: "#4a044e"
    },
    pink: {
      50: "#fdf2f8",
      100: "#fce7f3",
      200: "#fbcfe8",
      300: "#f9a8d4",
      400: "#f472b6",
      500: "#ec4899",
      600: "#db2777",
      700: "#be185d",
      800: "#9d174d",
      900: "#831843",
      950: "#500724"
    },
    rose: {
      50: "#fff1f2",
      100: "#ffe4e6",
      200: "#fecdd3",
      300: "#fda4af",
      400: "#fb7185",
      500: "#f43f5e",
      600: "#e11d48",
      700: "#be123c",
      800: "#9f1239",
      900: "#881337",
      950: "#4c0519"
    },
    get lightBlue() {
      return o({
        version: "v2.2",
        from: "lightBlue",
        to: "sky"
      }), this.sky;
    },
    get warmGray() {
      return o({
        version: "v3.0",
        from: "warmGray",
        to: "stone"
      }), this.stone;
    },
    get trueGray() {
      return o({
        version: "v3.0",
        from: "trueGray",
        to: "neutral"
      }), this.neutral;
    },
    get coolGray() {
      return o({
        version: "v3.0",
        from: "coolGray",
        to: "gray"
      }), this.gray;
    },
    get blueGray() {
      return o({
        version: "v3.0",
        from: "blueGray",
        to: "slate"
      }), this.slate;
    }
  };
})(Go);
let Lt = Go;
var bl = (Lt.__esModule ? Lt : { default: Lt }).default;
const Al = yl.withOptions(
  function() {
    return function() {
    };
  },
  function(e = {}) {
    var t;
    return {
      theme: {
        extend: {
          colors: {
            primary: {
              ...bl.indigo,
              ...(t = e == null ? void 0 : e.colors) == null ? void 0 : t.primary
            }
          }
        }
      }
    };
  }
), Sl = /* @__PURE__ */ E({
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
    return (a, s) => (w(), O(u(Ys), K(U(u(r))), {
      default: C(() => [
        A(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), kl = /* @__PURE__ */ E({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const n = rt(e);
    return (o, r) => (w(), O(u(Xs), L({ class: "outline-none" }, u(n)), {
      default: C(() => [
        A(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Bl = /* @__PURE__ */ E({
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
      const { class: s, ...i } = n;
      return i;
    }), a = Z(r, o);
    return (s, i) => (w(), O(u(Zs), null, {
      default: C(() => [
        G(u(Js), L(u(a), {
          class: u(J)(
            "z-50 min-w-32 overflow-hidden rounded-md border border-slate-200 bg-white p-1 text-slate-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
            n.class
          )
        }), {
          default: C(() => [
            A(s.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Ml = /* @__PURE__ */ E({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (w(), O(u(ei), K(U(t)), {
      default: C(() => [
        A(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Dl = /* @__PURE__ */ E({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = Z(e, t);
    return (a, s) => (w(), O(u(ri), K(U(u(r))), {
      default: C(() => [
        A(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Rl = /* @__PURE__ */ E({
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
      const { class: r, ...a } = t;
      return a;
    }), o = rt(n);
    return (r, a) => (w(), O(u(Qs), L(u(o), {
      class: u(J)(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50",
        r.inset && "pl-8",
        t.class
      )
    }), {
      default: C(() => [
        A(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), wl = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, $l = /* @__PURE__ */ E({
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
      const { class: s, ...i } = n;
      return i;
    }), a = Z(r, o);
    return (s, i) => (w(), O(u(ni), L(u(a), {
      class: u(J)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50",
        n.class
      )
    }), {
      default: C(() => [
        de("span", wl, [
          G(u(Bo), null, {
            default: C(() => [
              G(u(il), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        A(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), xl = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, Il = /* @__PURE__ */ E({
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
      const { class: s, ...i } = n;
      return i;
    }), a = Z(r, o);
    return (s, i) => (w(), O(u(ai), L(u(a), {
      class: u(J)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50",
        n.class
      )
    }), {
      default: C(() => [
        de("span", xl, [
          G(u(Bo), null, {
            default: C(() => [
              G(u(cl), { class: "h-4 w-4 fill-current" })
            ]),
            _: 1
          })
        ]),
        A(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ll = /* @__PURE__ */ E({
  __name: "DropdownMenuShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (w(), ee("span", {
      class: Vn(u(J)("ml-auto text-xs tracking-widest opacity-60", t.class))
    }, [
      A(n.$slots, "default")
    ], 2));
  }
}), Fl = /* @__PURE__ */ E({
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
    return (o, r) => (w(), O(u(ti), L(n.value, {
      class: u(J)("-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-800", t.class)
    }), null, 16, ["class"]));
  }
}), Nl = /* @__PURE__ */ E({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  setup(e) {
    const t = e, n = M(() => {
      const { class: r, ...a } = t;
      return a;
    }), o = rt(n);
    return (r, a) => (w(), O(u(oi), L(u(o), {
      class: u(J)("px-2 py-1.5 text-sm font-semibold", r.inset && "pl-8", t.class)
    }), {
      default: C(() => [
        A(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), zl = /* @__PURE__ */ E({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const r = Z(e, t);
    return (a, s) => (w(), O(u(si), K(U(u(r))), {
      default: C(() => [
        A(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Vl = /* @__PURE__ */ E({
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
      const { class: r, ...a } = t;
      return a;
    }), o = rt(n);
    return (r, a) => (w(), O(u(li), L(u(o), {
      class: u(J)(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-slate-100 data-[state=open]:bg-slate-100 dark:focus:bg-slate-800 dark:data-[state=open]:bg-slate-800",
        t.class
      )
    }), {
      default: C(() => [
        A(r.$slots, "default"),
        G(u(ll), { class: "ml-auto h-4 w-4" })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Wl = /* @__PURE__ */ E({
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
      const { class: s, ...i } = n;
      return i;
    }), a = Z(r, o);
    return (s, i) => (w(), O(u(ii), L(u(a), {
      class: u(J)(
        "z-50 min-w-32 overflow-hidden rounded-md border border-slate-200 bg-white p-1 text-slate-950 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
        n.class
      )
    }), {
      default: C(() => [
        A(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
});
export {
  Sl as DropdownMenu,
  $l as DropdownMenuCheckboxItem,
  Bl as DropdownMenuContent,
  Ml as DropdownMenuGroup,
  Rl as DropdownMenuItem,
  Nl as DropdownMenuLabel,
  Zs as DropdownMenuPortal,
  Dl as DropdownMenuRadioGroup,
  Il as DropdownMenuRadioItem,
  Fl as DropdownMenuSeparator,
  Ll as DropdownMenuShortcut,
  zl as DropdownMenuSub,
  Wl as DropdownMenuSubContent,
  Vl as DropdownMenuSubTrigger,
  kl as DropdownMenuTrigger,
  Tl as Notifications,
  al as Toast,
  Pl as ToastAction,
  dl as ToastClose,
  Fn as ToastDescription,
  pl as ToastProvider,
  fl as ToastTitle,
  sl as ToastViewport,
  pr as Toaster,
  Al as theme,
  cr as toast,
  gl as toastVariants,
  Qn as useToast
};
