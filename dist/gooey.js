import { ref as M, computed as k, defineComponent as E, openBlock as x, createBlock as O, unref as u, withCtx as C, createElementBlock as ee, Fragment as qe, renderList as hn, mergeProps as L, createElementVNode as ce, resolveDynamicComponent as Tt, normalizeClass as Vn, createCommentVNode as he, createTextVNode as vt, toDisplayString as Ze, isVNode as Go, createVNode as G, shallowRef as zn, watch as H, getCurrentScope as Wn, onScopeDispose as jn, shallowReadonly as Fe, getCurrentInstance as Re, toRef as Ko, camelize as Gn, Comment as Uo, cloneVNode as Ho, h as ze, toRefs as Se, reactive as Kn, watchEffect as Z, markRaw as Yo, isRef as Un, renderSlot as A, onMounted as $e, nextTick as ae, withKeys as Xo, normalizeProps as K, guardReactiveProps as U, normalizeStyle as Ht, effectScope as Hn, toHandlerKey as qo, onUnmounted as Ge, withModifiers as gt, Teleport as Yn, inject as Xn, provide as qn, readonly as Yt, onBeforeUpdate as Zo, onUpdated as Jo, mergeDefaults as Zn, customRef as Qo, onBeforeUnmount as er } from "vue";
const tr = 3, nr = 1e6, ye = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST"
};
let At = 0;
function or() {
  return At = (At + 1) % Number.MAX_VALUE, At.toString();
}
const St = /* @__PURE__ */ new Map();
function yn(e) {
  if (St.has(e))
    return;
  const t = setTimeout(() => {
    St.delete(e), Je({
      type: ye.REMOVE_TOAST,
      toastId: e
    });
  }, nr);
  St.set(e, t);
}
const le = M({
  toasts: []
});
function Je(e) {
  switch (e.type) {
    case ye.ADD_TOAST:
      le.value.toasts = [e.toast, ...le.value.toasts].slice(0, tr);
      break;
    case ye.UPDATE_TOAST:
      le.value.toasts = le.value.toasts.map(
        (t) => t.id === e.toast.id ? { ...t, ...e.toast } : t
      );
      break;
    case ye.DISMISS_TOAST: {
      const { toastId: t } = e;
      t ? yn(t) : le.value.toasts.forEach((n) => {
        yn(n.id);
      }), le.value.toasts = le.value.toasts.map(
        (n) => n.id === t || t === void 0 ? {
          ...n,
          open: !1
        } : n
      );
      break;
    }
    case ye.REMOVE_TOAST:
      e.toastId === void 0 ? le.value.toasts = [] : le.value.toasts = le.value.toasts.filter((t) => t.id !== e.toastId);
      break;
  }
}
function Jn() {
  return {
    toasts: k(() => le.value.toasts),
    toast: rr,
    dismiss: (e) => Je({ type: ye.DISMISS_TOAST, toastId: e })
  };
}
function rr(e) {
  const t = or(), n = (r) => Je({
    type: ye.UPDATE_TOAST,
    toast: { ...r, id: t }
  }), o = () => Je({ type: ye.DISMISS_TOAST, toastId: t });
  return Je({
    type: ye.ADD_TOAST,
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
const ar = { class: "flex items-start space-x-3" }, sr = { class: "grid gap-1" }, ir = /* @__PURE__ */ E({
  __name: "Toaster",
  setup(e) {
    const { toasts: t } = Jn();
    return (n, o) => (x(), O(u(il), null, {
      default: C(() => [
        (x(!0), ee(qe, null, hn(u(t), (r) => (x(), O(u(Qi), L({
          key: r.id,
          ref_for: !0
        }, r), {
          default: C(() => [
            ce("div", ar, [
              r.icon ? (x(), O(Tt(r.icon), {
                key: 0,
                class: Vn(["h-6 w-6", r.iconClasses])
              }, null, 8, ["class"])) : he("", !0),
              ce("div", sr, [
                r.title ? (x(), O(u(sl), { key: 0 }, {
                  default: C(() => [
                    vt(Ze(r.title), 1)
                  ]),
                  _: 2
                }, 1024)) : he("", !0),
                r.description ? (x(), ee(qe, { key: 1 }, [
                  Go(r.description) ? (x(), O(u(In), { key: 0 }, {
                    default: C(() => [
                      (x(), O(Tt(r.description)))
                    ]),
                    _: 2
                  }, 1024)) : (x(), O(u(In), { key: 1 }, {
                    default: C(() => [
                      vt(Ze(r.description), 1)
                    ]),
                    _: 2
                  }, 1024))
                ], 64)) : he("", !0),
                r.messages ? (x(!0), ee(qe, { key: 2 }, hn(r.messages, (a, s) => (x(), ee("p", {
                  key: s,
                  class: "text-sm opacity-90"
                }, Ze(a), 1))), 128)) : he("", !0),
                G(u(al))
              ])
            ]),
            (x(), O(Tt(r.action)))
          ]),
          _: 2
        }, 1040))), 128)),
        G(u(el))
      ]),
      _: 1
    }));
  }
}), lr = ["top", "right", "bottom", "left"];
const pe = Math.min, re = Math.max, ht = Math.round, lt = Math.floor, Pe = (e) => ({
  x: e,
  y: e
}), ur = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, cr = {
  start: "end",
  end: "start"
};
function Ft(e, t, n) {
  return re(e, pe(t, n));
}
function be(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function we(e) {
  return e.split("-")[0];
}
function Ke(e) {
  return e.split("-")[1];
}
function Xt(e) {
  return e === "x" ? "y" : "x";
}
function qt(e) {
  return e === "y" ? "height" : "width";
}
function Te(e) {
  return ["top", "bottom"].includes(we(e)) ? "y" : "x";
}
function Zt(e) {
  return Xt(Te(e));
}
function dr(e, t, n) {
  n === void 0 && (n = !1);
  const o = Ke(e), r = Zt(e), a = qt(r);
  let s = r === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (s = yt(s)), [s, yt(s)];
}
function fr(e) {
  const t = yt(e);
  return [Nt(e), t, Nt(t)];
}
function Nt(e) {
  return e.replace(/start|end/g, (t) => cr[t]);
}
function pr(e, t, n) {
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
function mr(e, t, n, o) {
  const r = Ke(e);
  let a = pr(we(e), n === "start", o);
  return r && (a = a.map((s) => s + "-" + r), t && (a = a.concat(a.map(Nt)))), a;
}
function yt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => ur[t]);
}
function vr(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Qn(e) {
  return typeof e != "number" ? vr(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function bt(e) {
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
function bn(e, t, n) {
  let {
    reference: o,
    floating: r
  } = e;
  const a = Te(t), s = Zt(t), i = qt(s), l = we(t), c = a === "y", f = o.x + o.width / 2 - r.width / 2, d = o.y + o.height / 2 - r.height / 2, p = o[i] / 2 - r[i] / 2;
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
  switch (Ke(t)) {
    case "start":
      m[s] -= p * (n && c ? -1 : 1);
      break;
    case "end":
      m[s] += p * (n && c ? -1 : 1);
      break;
  }
  return m;
}
const gr = async (e, t, n) => {
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
  } = bn(c, o, l), p = o, m = {}, v = 0;
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
    } = bn(c, p, l)), g = -1);
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
  } = be(t, e), v = Qn(m), h = i[p ? d === "floating" ? "reference" : "floating" : d], y = bt(await a.getClippingRect({
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
  }, T = bt(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const hr = (e) => ({
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
    } = be(e, t) || {};
    if (c == null)
      return {};
    const d = Qn(f), p = {
      x: n,
      y: o
    }, m = Zt(r), v = qt(m), g = await s.getDimensions(c), h = m === "y", y = h ? "top" : "left", b = h ? "bottom" : "right", _ = h ? "clientHeight" : "clientWidth", P = a.reference[v] + a.reference[m] - p[m] - a.floating[v], T = p[m] - a.reference[m], D = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let R = D ? D[_] : 0;
    (!R || !await (s.isElement == null ? void 0 : s.isElement(D))) && (R = i.floating[_] || a.floating[v]);
    const V = P / 2 - T / 2, F = R / 2 - g[v] / 2 - 1, w = pe(d[y], F), B = pe(d[b], F), S = w, j = R - g[v] - B, I = R / 2 - g[v] / 2 + V, q = Ft(S, I, j), Y = !l.arrow && Ke(r) != null && I !== q && a.reference[v] / 2 - (I < S ? w : B) - g[v] / 2 < 0, oe = Y ? I < S ? I - S : I - j : 0;
    return {
      [m]: p[m] + oe,
      data: {
        [m]: q,
        centerOffset: I - q - oe,
        ...Y && {
          alignmentOffset: oe
        }
      },
      reset: Y
    };
  }
});
const yr = function(e) {
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
      } = be(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const y = we(r), b = Te(i), _ = we(i) === i, P = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), T = p || (_ || !g ? [yt(i)] : fr(i)), D = v !== "none";
      !p && D && T.push(...mr(i, g, v, P));
      const R = [i, ...T], V = await Qe(t, h), F = [];
      let w = ((o = a.flip) == null ? void 0 : o.overflows) || [];
      if (f && F.push(V[y]), d) {
        const I = dr(r, s, P);
        F.push(V[I[0]], V[I[1]]);
      }
      if (w = [...w, {
        placement: r,
        overflows: F
      }], !F.every((I) => I <= 0)) {
        var B, S;
        const I = (((B = a.flip) == null ? void 0 : B.index) || 0) + 1, q = R[I];
        if (q)
          return {
            data: {
              index: I,
              overflows: w
            },
            reset: {
              placement: q
            }
          };
        let Y = (S = w.filter((oe) => oe.overflows[0] <= 0).sort((oe, ie) => oe.overflows[1] - ie.overflows[1])[0]) == null ? void 0 : S.placement;
        if (!Y)
          switch (m) {
            case "bestFit": {
              var j;
              const oe = (j = w.filter((ie) => {
                if (D) {
                  const Q = Te(ie.placement);
                  return Q === b || Q === "y";
                }
                return !0;
              }).map((ie) => [ie.placement, ie.overflows.filter((Q) => Q > 0).reduce((Q, st) => Q + st, 0)]).sort((ie, Q) => ie[1] - Q[1])[0]) == null ? void 0 : j[0];
              oe && (Y = oe);
              break;
            }
            case "initialPlacement":
              Y = i;
              break;
          }
        if (r !== Y)
          return {
            reset: {
              placement: Y
            }
          };
      }
      return {};
    }
  };
};
function wn(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function xn(e) {
  return lr.some((t) => e[t] >= 0);
}
const br = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: o = "referenceHidden",
        ...r
      } = be(e, t);
      switch (o) {
        case "referenceHidden": {
          const a = await Qe(t, {
            ...r,
            elementContext: "reference"
          }), s = wn(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: xn(s)
            }
          };
        }
        case "escaped": {
          const a = await Qe(t, {
            ...r,
            altBoundary: !0
          }), s = wn(a, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: xn(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function wr(e, t) {
  const {
    placement: n,
    platform: o,
    elements: r
  } = e, a = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), s = we(n), i = Ke(n), l = Te(n) === "y", c = ["left", "top"].includes(s) ? -1 : 1, f = a && l ? -1 : 1, d = be(t, e);
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
const xr = function(e) {
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
      } = t, l = await wr(t, e);
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
}, _r = function(e) {
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
      } = be(e, t), c = {
        x: n,
        y: o
      }, f = await Qe(t, l), d = Te(we(r)), p = Xt(d);
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
}, Cr = function(e) {
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
      } = be(e, t), f = {
        x: n,
        y: o
      }, d = Te(r), p = Xt(d);
      let m = f[p], v = f[d];
      const g = be(i, t), h = typeof g == "number" ? {
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
        const _ = p === "y" ? "width" : "height", P = ["top", "left"].includes(we(r)), T = a.reference[d] - a.floating[_] + (P && ((y = s.offset) == null ? void 0 : y[d]) || 0) + (P ? 0 : h.crossAxis), D = a.reference[d] + a.reference[_] + (P ? 0 : ((b = s.offset) == null ? void 0 : b[d]) || 0) - (P ? h.crossAxis : 0);
        v < T ? v = T : v > D && (v = D);
      }
      return {
        [p]: m,
        [d]: v
      };
    }
  };
}, Or = function(e) {
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
      } = be(e, t), l = await Qe(t, i), c = we(n), f = Ke(n), d = Te(n) === "y", {
        width: p,
        height: m
      } = o.floating;
      let v, g;
      c === "top" || c === "bottom" ? (v = c, g = f === (await (r.isRTL == null ? void 0 : r.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (g = c, v = f === "end" ? "top" : "bottom");
      const h = m - l.top - l.bottom, y = p - l.left - l.right, b = pe(m - l[v], h), _ = pe(p - l[g], y), P = !t.middlewareData.shift;
      let T = b, D = _;
      if (d ? D = f || P ? pe(_, y) : y : T = f || P ? pe(b, h) : h, P && !f) {
        const V = re(l.left, 0), F = re(l.right, 0), w = re(l.top, 0), B = re(l.bottom, 0);
        d ? D = p - 2 * (V !== 0 || F !== 0 ? V + F : re(l.left, l.right)) : T = m - 2 * (w !== 0 || B !== 0 ? w + B : re(l.top, l.bottom));
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
  return Jt(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function se(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function _e(e) {
  var t;
  return (t = (Jt(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Jt(e) {
  return e instanceof Node || e instanceof se(e).Node;
}
function de(e) {
  return e instanceof Element || e instanceof se(e).Element;
}
function me(e) {
  return e instanceof HTMLElement || e instanceof se(e).HTMLElement;
}
function _n(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof se(e).ShadowRoot;
}
function nt(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: r
  } = fe(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(r);
}
function Er(e) {
  return ["table", "td", "th"].includes(Ie(e));
}
function xt(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Qt(e) {
  const t = en(), n = de(e) ? fe(e) : e;
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function Pr(e) {
  let t = Ae(e);
  for (; me(t) && !je(t); ) {
    if (Qt(t))
      return t;
    if (xt(t))
      return null;
    t = Ae(t);
  }
  return null;
}
function en() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function je(e) {
  return ["html", "body", "#document"].includes(Ie(e));
}
function fe(e) {
  return se(e).getComputedStyle(e);
}
function _t(e) {
  return de(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Ae(e) {
  if (Ie(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || _n(e) && e.host || _e(e);
  return _n(t) ? t.host : t;
}
function eo(e) {
  const t = Ae(e);
  return je(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : me(t) && nt(t) ? t : eo(t);
}
function et(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const r = eo(e), a = r === ((o = e.ownerDocument) == null ? void 0 : o.body), s = se(r);
  return a ? t.concat(s, s.visualViewport || [], nt(r) ? r : [], s.frameElement && n ? et(s.frameElement) : []) : t.concat(r, et(r, [], n));
}
function to(e) {
  const t = fe(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const r = me(e), a = r ? e.offsetWidth : n, s = r ? e.offsetHeight : o, i = ht(n) !== a || ht(o) !== s;
  return i && (n = a, o = s), {
    width: n,
    height: o,
    $: i
  };
}
function tn(e) {
  return de(e) ? e : e.contextElement;
}
function We(e) {
  const t = tn(e);
  if (!me(t))
    return Pe(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: r,
    $: a
  } = to(t);
  let s = (a ? ht(n.width) : n.width) / o, i = (a ? ht(n.height) : n.height) / r;
  return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: s,
    y: i
  };
}
const Tr = /* @__PURE__ */ Pe(0);
function no(e) {
  const t = se(e);
  return !en() || !t.visualViewport ? Tr : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Ar(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== se(e) ? !1 : t;
}
function De(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), a = tn(e);
  let s = Pe(1);
  t && (o ? de(o) && (s = We(o)) : s = We(e));
  const i = Ar(a, n, o) ? no(a) : Pe(0);
  let l = (r.left + i.x) / s.x, c = (r.top + i.y) / s.y, f = r.width / s.x, d = r.height / s.y;
  if (a) {
    const p = se(a), m = o && de(o) ? se(o) : o;
    let v = p, g = v.frameElement;
    for (; g && o && m !== v; ) {
      const h = We(g), y = g.getBoundingClientRect(), b = fe(g), _ = y.left + (g.clientLeft + parseFloat(b.paddingLeft)) * h.x, P = y.top + (g.clientTop + parseFloat(b.paddingTop)) * h.y;
      l *= h.x, c *= h.y, f *= h.x, d *= h.y, l += _, c += P, v = se(g), g = v.frameElement;
    }
  }
  return bt({
    width: f,
    height: d,
    x: l,
    y: c
  });
}
function Sr(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: o,
    strategy: r
  } = e;
  const a = r === "fixed", s = _e(o), i = t ? xt(t.floating) : !1;
  if (o === s || i && a)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = Pe(1);
  const f = Pe(0), d = me(o);
  if ((d || !d && !a) && ((Ie(o) !== "body" || nt(s)) && (l = _t(o)), me(o))) {
    const p = De(o);
    c = We(o), f.x = p.x + o.clientLeft, f.y = p.y + o.clientTop;
  }
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + f.x,
    y: n.y * c.y - l.scrollTop * c.y + f.y
  };
}
function Mr(e) {
  return Array.from(e.getClientRects());
}
function oo(e) {
  return De(_e(e)).left + _t(e).scrollLeft;
}
function Br(e) {
  const t = _e(e), n = _t(e), o = e.ownerDocument.body, r = re(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), a = re(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let s = -n.scrollLeft + oo(e);
  const i = -n.scrollTop;
  return fe(o).direction === "rtl" && (s += re(t.clientWidth, o.clientWidth) - r), {
    width: r,
    height: a,
    x: s,
    y: i
  };
}
function kr(e, t) {
  const n = se(e), o = _e(e), r = n.visualViewport;
  let a = o.clientWidth, s = o.clientHeight, i = 0, l = 0;
  if (r) {
    a = r.width, s = r.height;
    const c = en();
    (!c || c && t === "fixed") && (i = r.offsetLeft, l = r.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: i,
    y: l
  };
}
function Dr(e, t) {
  const n = De(e, !0, t === "fixed"), o = n.top + e.clientTop, r = n.left + e.clientLeft, a = me(e) ? We(e) : Pe(1), s = e.clientWidth * a.x, i = e.clientHeight * a.y, l = r * a.x, c = o * a.y;
  return {
    width: s,
    height: i,
    x: l,
    y: c
  };
}
function Cn(e, t, n) {
  let o;
  if (t === "viewport")
    o = kr(e, n);
  else if (t === "document")
    o = Br(_e(e));
  else if (de(t))
    o = Dr(t, n);
  else {
    const r = no(e);
    o = {
      ...t,
      x: t.x - r.x,
      y: t.y - r.y
    };
  }
  return bt(o);
}
function ro(e, t) {
  const n = Ae(e);
  return n === t || !de(n) || je(n) ? !1 : fe(n).position === "fixed" || ro(n, t);
}
function Rr(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = et(e, [], !1).filter((i) => de(i) && Ie(i) !== "body"), r = null;
  const a = fe(e).position === "fixed";
  let s = a ? Ae(e) : e;
  for (; de(s) && !je(s); ) {
    const i = fe(s), l = Qt(s);
    !l && i.position === "fixed" && (r = null), (a ? !l && !r : !l && i.position === "static" && !!r && ["absolute", "fixed"].includes(r.position) || nt(s) && !l && ro(e, s)) ? o = o.filter((f) => f !== s) : r = i, s = Ae(s);
  }
  return t.set(e, o), o;
}
function $r(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: r
  } = e;
  const s = [...n === "clippingAncestors" ? xt(t) ? [] : Rr(t, this._c) : [].concat(n), o], i = s[0], l = s.reduce((c, f) => {
    const d = Cn(t, f, r);
    return c.top = re(d.top, c.top), c.right = pe(d.right, c.right), c.bottom = pe(d.bottom, c.bottom), c.left = re(d.left, c.left), c;
  }, Cn(t, i, r));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Ir(e) {
  const {
    width: t,
    height: n
  } = to(e);
  return {
    width: t,
    height: n
  };
}
function Lr(e, t, n) {
  const o = me(t), r = _e(t), a = n === "fixed", s = De(e, !0, a, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Pe(0);
  if (o || !o && !a)
    if ((Ie(t) !== "body" || nt(r)) && (i = _t(t)), o) {
      const d = De(t, !0, a, t);
      l.x = d.x + t.clientLeft, l.y = d.y + t.clientTop;
    } else
      r && (l.x = oo(r));
  const c = s.left + i.scrollLeft - l.x, f = s.top + i.scrollTop - l.y;
  return {
    x: c,
    y: f,
    width: s.width,
    height: s.height
  };
}
function Mt(e) {
  return fe(e).position === "static";
}
function On(e, t) {
  return !me(e) || fe(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function ao(e, t) {
  const n = se(e);
  if (xt(e))
    return n;
  if (!me(e)) {
    let r = Ae(e);
    for (; r && !je(r); ) {
      if (de(r) && !Mt(r))
        return r;
      r = Ae(r);
    }
    return n;
  }
  let o = On(e, t);
  for (; o && Er(o) && Mt(o); )
    o = On(o, t);
  return o && je(o) && Mt(o) && !Qt(o) ? n : o || Pr(e) || n;
}
const Fr = async function(e) {
  const t = this.getOffsetParent || ao, n = this.getDimensions, o = await n(e.floating);
  return {
    reference: Lr(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function Nr(e) {
  return fe(e).direction === "rtl";
}
const Vr = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Sr,
  getDocumentElement: _e,
  getClippingRect: $r,
  getOffsetParent: ao,
  getElementRects: Fr,
  getClientRects: Mr,
  getDimensions: Ir,
  getScale: We,
  isElement: de,
  isRTL: Nr
};
function zr(e, t) {
  let n = null, o;
  const r = _e(e);
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
    const m = lt(f), v = lt(r.clientWidth - (c + d)), g = lt(r.clientHeight - (f + p)), h = lt(c), b = {
      rootMargin: -m + "px " + -v + "px " + -g + "px " + -h + "px",
      threshold: re(0, pe(1, l)) || 1
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
function Wr(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = o, c = tn(e), f = r || a ? [...c ? et(c) : [], ...et(t)] : [];
  f.forEach((y) => {
    r && y.addEventListener("scroll", n, {
      passive: !0
    }), a && y.addEventListener("resize", n);
  });
  const d = c && i ? zr(c, n) : null;
  let p = -1, m = null;
  s && (m = new ResizeObserver((y) => {
    let [b] = y;
    b && b.target === c && m && (m.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var _;
      (_ = m) == null || _.observe(t);
    })), n();
  }), c && !l && m.observe(c), m.observe(t));
  let v, g = l ? De(e) : null;
  l && h();
  function h() {
    const y = De(e);
    g && (y.x !== g.x || y.y !== g.y || y.width !== g.width || y.height !== g.height) && n(), g = y, v = requestAnimationFrame(h);
  }
  return n(), () => {
    var y;
    f.forEach((b) => {
      r && b.removeEventListener("scroll", n), a && b.removeEventListener("resize", n);
    }), d == null || d(), (y = m) == null || y.disconnect(), m = null, l && cancelAnimationFrame(v);
  };
}
const jr = xr, Gr = _r, En = yr, Kr = Or, Ur = br, Hr = hr, Yr = Cr, Xr = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), r = {
    platform: Vr,
    ...n
  }, a = {
    ...r.platform,
    _c: o
  };
  return gr(e, t, {
    ...r,
    platform: a
  });
};
function qr(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function Vt(e) {
  if (qr(e)) {
    const t = e.$el;
    return Jt(t) && Ie(t) === "#comment" ? null : t;
  }
  return e;
}
function Ve(e) {
  return typeof e == "function" ? e() : u(e);
}
function Zr(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const n = Vt(Ve(e.element));
      return n == null ? {} : Hr({
        element: n,
        padding: e.padding
      }).fn(t);
    }
  };
}
function so(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Pn(e, t) {
  const n = so(e);
  return Math.round(t * n) / n;
}
function Jr(e, t, n) {
  n === void 0 && (n = {});
  const o = n.whileElementsMounted, r = k(() => {
    var R;
    return (R = Ve(n.open)) != null ? R : !0;
  }), a = k(() => Ve(n.middleware)), s = k(() => {
    var R;
    return (R = Ve(n.placement)) != null ? R : "bottom";
  }), i = k(() => {
    var R;
    return (R = Ve(n.strategy)) != null ? R : "absolute";
  }), l = k(() => {
    var R;
    return (R = Ve(n.transform)) != null ? R : !0;
  }), c = k(() => Vt(e.value)), f = k(() => Vt(t.value)), d = M(0), p = M(0), m = M(i.value), v = M(s.value), g = zn({}), h = M(!1), y = k(() => {
    const R = {
      position: m.value,
      left: "0",
      top: "0"
    };
    if (!f.value)
      return R;
    const V = Pn(f.value, d.value), F = Pn(f.value, p.value);
    return l.value ? {
      ...R,
      transform: "translate(" + V + "px, " + F + "px)",
      ...so(f.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: m.value,
      left: V + "px",
      top: F + "px"
    };
  });
  let b;
  function _() {
    c.value == null || f.value == null || Xr(c.value, f.value, {
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
  return H([a, s, i], _, {
    flush: "sync"
  }), H([c, f], T, {
    flush: "sync"
  }), H(r, D, {
    flush: "sync"
  }), Wn() && jn(P), {
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
function te(e, t) {
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
  }, (r) => (qn(o, r), r)];
}
function io(e, t, n) {
  const o = n.originalEvent.target, r = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, { once: !0 }), o.dispatchEvent(r);
}
function Qr(e, t) {
  var n;
  const o = zn();
  return Z(() => {
    o.value = e();
  }, {
    ...t,
    flush: (n = void 0) != null ? n : "sync"
  }), Yt(o);
}
function ot(e) {
  return Wn() ? (jn(e), !0) : !1;
}
function ea(e) {
  let t = !1, n;
  const o = Hn(!0);
  return (...r) => (t || (n = o.run(() => e(...r)), t = !0), n);
}
function ta(e) {
  let t = 0, n, o;
  const r = () => {
    t -= 1, o && t <= 0 && (o.stop(), n = void 0, o = void 0);
  };
  return (...a) => (t += 1, n || (o = Hn(!0), n = o.run(() => e(...a))), ot(r), n);
}
function ke(e) {
  return typeof e == "function" ? e() : u(e);
}
const ve = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const na = (e) => typeof e < "u", oa = Object.prototype.toString, ra = (e) => oa.call(e) === "[object Object]", lo = () => {
}, Tn = /* @__PURE__ */ aa();
function aa() {
  var e, t;
  return ve && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function sa(e) {
  return Re();
}
function ia(e, t = 1e4) {
  return Qo((n, o) => {
    let r = ke(e), a;
    const s = () => setTimeout(() => {
      r = ke(e), o();
    }, ke(t));
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
function la(e, t) {
  sa() && er(e, t);
}
function ua(e, t, n = {}) {
  const {
    immediate: o = !0
  } = n, r = M(!1);
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
    }, ke(t));
  }
  return o && (r.value = !0, ve && l()), ot(i), {
    isPending: Yt(r),
    start: l,
    stop: i
  };
}
function ca(e = 1e3, t = {}) {
  const {
    controls: n = !1,
    callback: o
  } = t, r = ua(
    o != null ? o : lo,
    e,
    t
  ), a = k(() => !r.isPending.value);
  return n ? {
    ready: a,
    ...r
  } : a;
}
function xe(e) {
  var t;
  const n = ke(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const nn = ve ? window : void 0;
function uo(...e) {
  let t, n, o, r;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, o, r] = e, t = nn) : [t, n, o, r] = e, !t)
    return lo;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const a = [], s = () => {
    a.forEach((f) => f()), a.length = 0;
  }, i = (f, d, p, m) => (f.addEventListener(d, p, m), () => f.removeEventListener(d, p, m)), l = H(
    () => [xe(t), ke(r)],
    ([f, d]) => {
      if (s(), !f)
        return;
      const p = ra(d) ? { ...d } : d;
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
function da(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function on(...e) {
  let t, n, o = {};
  e.length === 3 ? (t = e[0], n = e[1], o = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], o = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: r = nn,
    eventName: a = "keydown",
    passive: s = !1,
    dedupe: i = !1
  } = o, l = da(t);
  return uo(r, a, (c) => {
    c.repeat && ke(i) || l(c) && n(c);
  }, s);
}
function fa() {
  const e = M(!1), t = Re();
  return t && $e(() => {
    e.value = !0;
  }, t), e;
}
function co(e, t = {}) {
  const {
    immediate: n = !0,
    fpsLimit: o = void 0,
    window: r = nn
  } = t, a = M(!1), s = o ? 1e3 / o : null;
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
function pa(e) {
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
  } = o, m = Re(), v = n || (m == null ? void 0 : m.emit) || ((r = m == null ? void 0 : m.$emit) == null ? void 0 : r.bind(m)) || ((s = (a = m == null ? void 0 : m.proxy) == null ? void 0 : a.$emit) == null ? void 0 : s.bind(m == null ? void 0 : m.proxy));
  let g = c;
  t || (t = "modelValue"), g = g || `update:${t.toString()}`;
  const h = (_) => i ? typeof i == "function" ? i(_) : pa(_) : _, y = () => na(e[t]) ? h(e[t]) : d, b = (_) => {
    p ? p(_) && v(g, _) : v(g, _);
  };
  if (l) {
    const _ = y(), P = M(_);
    let T = !1;
    return H(
      () => e[t],
      (D) => {
        T || (T = !0, P.value = h(D), ae(() => T = !1));
      }
    ), H(
      P,
      (D) => {
        !T && (D !== e[t] || f) && b(D);
      },
      { deep: f }
    ), P;
  } else
    return k({
      get() {
        return y();
      },
      set(_) {
        b(_);
      }
    });
}
function rn(e) {
  return e ? e.flatMap((t) => t.type === qe ? rn(t.children) : [t]) : [];
}
const ma = ["INPUT", "TEXTAREA"];
function va(e, t, n, o = {}) {
  if (!t || o.enableIgnoredElement && ma.includes(t.nodeName))
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
  return b || y ? P = fo(_, t, {
    goForward: y ? v : l === "ltr" ? d : p,
    loop: i
  }) : g ? P = _.at(0) || null : h && (P = _.at(-1) || null), f && (P == null || P.focus()), P;
}
function fo(e, t, n, o = e.length) {
  if (--o === 0)
    return null;
  const r = e.indexOf(t), a = n.goForward ? r + 1 : r - 1;
  if (!n.loop && (a < 0 || a >= e.length))
    return null;
  const s = (a + e.length) % e.length, i = e[s];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? fo(
    e,
    i,
    n,
    o
  ) : i : null;
}
function Bt(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function zt(e, t, n = ".", o) {
  if (!Bt(t))
    return zt(e, {}, n, o);
  const r = Object.assign({}, t);
  for (const a in e) {
    if (a === "__proto__" || a === "constructor")
      continue;
    const s = e[a];
    s != null && (o && o(r, a, s, n) || (Array.isArray(s) && Array.isArray(r[a]) ? r[a] = [...s, ...r[a]] : Bt(s) && Bt(r[a]) ? r[a] = zt(
      s,
      r[a],
      (n ? `${n}.` : "") + a.toString(),
      o
    ) : r[a] = s));
  }
  return r;
}
function ga(e) {
  return (...t) => t.reduce((n, o) => zt(n, o, "", e), {});
}
const ha = ga(), [an, bl] = te("ConfigProvider");
let ya = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", ba = (e = 21) => {
  let t = "", n = e;
  for (; n--; )
    t += ya[Math.random() * 64 | 0];
  return t;
};
const wa = ta(() => {
  const e = M(/* @__PURE__ */ new Map()), t = M(), n = k(() => {
    for (const s of e.value.values())
      if (s)
        return !0;
    return !1;
  }), o = an({
    scrollBody: M(!0)
  });
  let r = null;
  const a = () => {
    var s;
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = (s = t.value) != null ? s : "", Tn && (r == null || r()), t.value = void 0;
  };
  return H(n, (s, i) => {
    var l;
    if (!ve)
      return;
    if (!s) {
      i && a();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const c = window.innerWidth - document.documentElement.clientWidth, f = { padding: c, margin: 0 }, d = (l = o.scrollBody) != null && l.value ? typeof o.scrollBody.value == "object" ? ha({
      padding: o.scrollBody.value.padding === !0 ? c : o.scrollBody.value.padding,
      margin: o.scrollBody.value.margin === !0 ? c : o.scrollBody.value.margin
    }, f) : f : { padding: 0, margin: 0 };
    c > 0 && (document.body.style.paddingRight = `${d.padding}px`, document.body.style.marginRight = `${d.margin}px`, document.body.style.setProperty("--scrollbar-width", `${c}px`), document.body.style.overflow = "hidden"), Tn && (r = uo(
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
function xa(e) {
  const t = ba(6), n = wa();
  n.value.set(t, e != null ? e : !1);
  const o = k({
    get: () => {
      var r;
      return (r = n.value.get(t)) != null ? r : !1;
    },
    set: (r) => n.value.set(t, r)
  });
  return la(() => {
    n.value.delete(t);
  }), o;
}
const _a = "data-radix-vue-collection-item";
function po(e, t = _a) {
  const n = e != null ? e : Symbol();
  return { createCollection: (o) => {
    const r = M([]);
    function a() {
      const s = xe(o);
      return s ? r.value = Array.from(
        s.querySelectorAll(`[${t}]:not([data-disabled])`)
      ) : r.value = [];
    }
    return Zo(() => {
      r.value = [];
    }), $e(a), Jo(a), H(() => o == null ? void 0 : o.value, a, { immediate: !0 }), qn(n, r), r;
  }, injectCollection: () => Xn(n, M([])) };
}
function sn(e) {
  const t = an({
    dir: M("ltr")
  });
  return k(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.dir) == null ? void 0 : n.value) || "ltr";
  });
}
function Ct(e) {
  const t = Re(), n = t == null ? void 0 : t.type.emits, o = {};
  return n != null && n.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), n == null || n.forEach((r) => {
    o[qo(Gn(r))] = (...a) => e(r, ...a);
  }), o;
}
let kt = 0;
function Ca() {
  Z((e) => {
    var n, o;
    if (!ve)
      return;
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      (n = t[0]) != null ? n : An()
    ), document.body.insertAdjacentElement(
      "beforeend",
      (o = t[1]) != null ? o : An()
    ), kt++, e(() => {
      kt === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((r) => r.remove()), kt--;
    });
  });
}
function An() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
function rt(e) {
  var r;
  const t = Re(), n = Object.keys((r = t == null ? void 0 : t.type.props) != null ? r : {}).reduce((a, s) => {
    const i = (t == null ? void 0 : t.type.props[s]).default;
    return i !== void 0 && (a[s] = i), a;
  }, {}), o = Ko(e);
  return k(() => {
    var i;
    const a = {}, s = (i = t == null ? void 0 : t.vnode.props) != null ? i : {};
    return Object.keys(s).forEach((l) => {
      a[Gn(l)] = s[l];
    }), Object.keys({ ...n, ...a }).reduce((l, c) => (o.value[c] !== void 0 && (l[c] = o.value[c]), l), {});
  });
}
function J(e, t) {
  const n = rt(e), o = t ? Ct(t) : {};
  return k(() => ({
    ...n.value,
    ...o
  }));
}
function N() {
  const e = Re(), t = M(), n = k(() => {
    var s, i;
    return ["#text", "#comment"].includes((s = t.value) == null ? void 0 : s.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : xe(t);
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
var Oa = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Ne = /* @__PURE__ */ new WeakMap(), ut = /* @__PURE__ */ new WeakMap(), ct = {}, Dt = 0, mo = function(e) {
  return e && (e.host || mo(e.parentNode));
}, Ea = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = mo(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Pa = function(e, t, n, o) {
  var r = Ea(t, Array.isArray(e) ? e : [e]);
  ct[n] || (ct[n] = /* @__PURE__ */ new WeakMap());
  var a = ct[n], s = [], i = /* @__PURE__ */ new Set(), l = new Set(r), c = function(d) {
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
          Ne.set(p, g), a.set(p, h), s.push(p), g === 1 && v && ut.set(p, !0), h === 1 && p.setAttribute(n, "true"), v || p.setAttribute(o, "true");
        } catch (y) {
          console.error("aria-hidden: cannot operate on ", p, y);
        }
    });
  };
  return f(t), i.clear(), Dt++, function() {
    s.forEach(function(d) {
      var p = Ne.get(d) - 1, m = a.get(d) - 1;
      Ne.set(d, p), a.set(d, m), p || (ut.has(d) || d.removeAttribute(o), ut.delete(d)), m || d.removeAttribute(n);
    }), Dt--, Dt || (Ne = /* @__PURE__ */ new WeakMap(), Ne = /* @__PURE__ */ new WeakMap(), ut = /* @__PURE__ */ new WeakMap(), ct = {});
  };
}, Ta = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), r = Oa(e);
  return r ? (o.push.apply(o, Array.from(r.querySelectorAll("[aria-live]"))), Pa(o, r, n, "aria-hidden")) : function() {
    return null;
  };
};
function Aa(e) {
  let t;
  H(() => xe(e), (n) => {
    n ? t = Ta(n) : t && t();
  }), Ge(() => {
    t && t();
  });
}
let Sa = 0;
function Ot(e, t = "radix") {
  if (e)
    return e;
  const { useId: n } = an({ useId: void 0 });
  return n && typeof n == "function" ? `${t}-${n()}` : `${t}-${++Sa}`;
}
function Ma(e) {
  const t = M(), n = k(() => {
    var a;
    var r;
    return (a = (r = t.value) == null ? void 0 : r.width) != null ? a : 0;
  }), o = k(() => {
    var a;
    var r;
    return (a = (r = t.value) == null ? void 0 : r.height) != null ? a : 0;
  });
  return $e(() => {
    const r = xe(e);
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
function Ba(e, t) {
  const n = M(e);
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
function ka(e) {
  const t = ia("", 1e3);
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
      }), f = Ra(c, t.value, l), d = s.find(
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
function Da(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
function Ra(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((i) => i === t[0]) ? t[0] : t, r = n ? e.indexOf(n) : -1;
  let a = Da(e, Math.max(r, 0));
  o.length === 1 && (a = a.filter((i) => i !== n));
  const s = a.find(
    (i) => i.toLowerCase().startsWith(o.toLowerCase())
  );
  return s !== n ? s : void 0;
}
const ln = E({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      var o, r;
      if (!n.default)
        return null;
      const a = rn(n.default()), s = a.findIndex((f) => f.type !== Uo);
      if (s === -1)
        return a;
      const i = a[s];
      (o = i.props) == null || delete o.ref;
      const l = i.props ? L(t, i.props) : t;
      t.class && (r = i.props) != null && r.class && delete i.props.class;
      const c = Ho(i, l);
      for (const f in l)
        f.startsWith("on") && (c.props || (c.props = {}), c.props[f] = l[f]);
      return a.length === 1 ? c : (a[s] = c, a);
    };
  }
}), X = E({
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
    return typeof o == "string" && ["area", "img", "input"].includes(o) ? () => ze(o, t) : o !== "template" ? () => ze(e.as, t, { default: n.default }) : () => ze(ln, t, { default: n.default });
  }
});
function vo() {
  const e = M(), t = k(() => {
    var n, o;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (o = e.value) == null ? void 0 : o.$el.nextElementSibling : xe(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
function $a(e, t) {
  const n = M({}), o = M("none"), r = e.value ? "mounted" : "unmounted", { state: a, dispatch: s } = Ba(r, {
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
    if (ve) {
      const v = new CustomEvent(p, { bubbles: !1, cancelable: !1 });
      (m = t.value) == null || m.dispatchEvent(v);
    }
  };
  H(
    e,
    async (p, m) => {
      var v;
      const g = m !== p;
      if (await ae(), g) {
        const h = o.value, y = dt(t.value);
        p ? (s("MOUNT"), i("enter"), y === "none" && i("after-enter")) : y === "none" || ((v = n.value) == null ? void 0 : v.display) === "none" ? (s("UNMOUNT"), i("leave"), i("after-leave")) : m && h !== y ? (s("ANIMATION_OUT"), i("leave")) : (s("UNMOUNT"), i("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const l = (p) => {
    const m = dt(t.value), v = m.includes(
      p.animationName
    ), g = a.value === "mounted" ? "enter" : "leave";
    p.target === t.value && v && (i(`after-${g}`), s("ANIMATION_END")), p.target === t.value && m === "none" && s("ANIMATION_END");
  }, c = (p) => {
    p.target === t.value && (o.value = dt(t.value));
  }, f = H(
    t,
    (p, m) => {
      p ? (n.value = getComputedStyle(p), p.addEventListener("animationstart", c), p.addEventListener("animationcancel", l), p.addEventListener("animationend", l)) : (s("ANIMATION_END"), m == null || m.removeEventListener("animationstart", c), m == null || m.removeEventListener("animationcancel", l), m == null || m.removeEventListener("animationend", l));
    },
    { immediate: !0 }
  ), d = H(a, () => {
    const p = dt(t.value);
    o.value = a.value === "mounted" ? p : "none";
  });
  return Ge(() => {
    f(), d();
  }), {
    isPresent: k(
      () => ["mounted", "unmountSuspended"].includes(a.value)
    )
  };
}
function dt(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const Et = E({
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
    const { present: r, forceMount: a } = Se(e), s = M(), { isPresent: i } = $a(r, s);
    n({ present: i });
    let l = t.default({ present: i });
    l = rn(l || []);
    const c = Re();
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
    return () => a.value || r.value || i.value ? ze(t.default({ present: i })[0], {
      ref: (f) => {
        const d = xe(f);
        return typeof (d == null ? void 0 : d.hasAttribute) > "u" || (d != null && d.hasAttribute("data-radix-popper-content-wrapper") ? s.value = d.firstElementChild : s.value = d), d;
      }
    }) : null;
  }
}), Ia = /* @__PURE__ */ E({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = fa();
    return (n, o) => u(t) || n.forceMount ? (x(), O(Yn, {
      key: 0,
      to: n.to,
      disabled: n.disabled
    }, [
      A(n.$slots, "default")
    ], 8, ["to", "disabled"])) : he("", !0);
  }
}), La = "dismissableLayer.pointerDownOutside", Fa = "dismissableLayer.focusOutside";
function go(e, t) {
  const n = t.closest(
    "[data-dismissable-layer]"
  ), o = e.dataset.dismissableLayer === "" ? e : e.querySelector(
    "[data-dismissable-layer]"
  ), r = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(n && o === n || r.indexOf(o) < r.indexOf(n));
}
function Na(e, t) {
  var s;
  var n;
  const o = (s = (n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) != null ? s : globalThis == null ? void 0 : globalThis.document, r = M(!1), a = M(() => {
  });
  return Z((i) => {
    if (!ve)
      return;
    const l = async (f) => {
      const d = f.target;
      if (t != null && t.value) {
        if (go(t.value, d)) {
          r.value = !1;
          return;
        }
        if (f.target && !r.value) {
          let p = function() {
            io(
              La,
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
function Va(e, t) {
  var a;
  var n;
  const o = (a = (n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) != null ? a : globalThis == null ? void 0 : globalThis.document, r = M(!1);
  return Z((s) => {
    if (!ve)
      return;
    const i = async (l) => {
      t != null && t.value && (await ae(), !(!t.value || go(t.value, l.target)) && l.target && !r.value && io(
        Fa,
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
const ue = Kn({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), za = /* @__PURE__ */ E({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, o = t, { forwardRef: r, currentElement: a } = N(), s = k(
      () => {
        var g;
        var v;
        return (g = (v = a.value) == null ? void 0 : v.ownerDocument) != null ? g : globalThis.document;
      }
    ), i = k(() => ue.layersRoot), l = k(() => a.value ? Array.from(i.value).indexOf(a.value) : -1), c = k(() => ue.layersWithOutsidePointerEventsDisabled.size > 0), f = k(() => {
      const v = Array.from(i.value), [g] = [...ue.layersWithOutsidePointerEventsDisabled].slice(-1), h = v.indexOf(g);
      return l.value >= h;
    }), d = Na(async (v) => {
      const g = [...ue.branches].some(
        (h) => h.contains(v.target)
      );
      !f.value || g || (o("pointerDownOutside", v), o("interactOutside", v), await ae(), v.defaultPrevented || o("dismiss"));
    }, a), p = Va((v) => {
      [...ue.branches].some(
        (g) => g.contains(v.target)
      ) || (o("focusOutside", v), o("interactOutside", v), v.defaultPrevented || o("dismiss"));
    }, a);
    on("Escape", (v) => {
      l.value === i.value.size - 1 && (o("escapeKeyDown", v), v.defaultPrevented || o("dismiss"));
    });
    let m;
    return Z((v) => {
      a.value && (n.disableOutsidePointerEvents && (ue.layersWithOutsidePointerEventsDisabled.size === 0 && (m = s.value.body.style.pointerEvents, s.value.body.style.pointerEvents = "none"), ue.layersWithOutsidePointerEventsDisabled.add(a.value)), i.value.add(a.value), v(() => {
        n.disableOutsidePointerEvents && ue.layersWithOutsidePointerEventsDisabled.size === 1 && (s.value.body.style.pointerEvents = m);
      }));
    }), Z((v) => {
      v(() => {
        a.value && (i.value.delete(a.value), ue.layersWithOutsidePointerEventsDisabled.delete(a.value));
      });
    }), (v, g) => (x(), O(u(X), {
      ref: u(r),
      "as-child": v.asChild,
      as: v.as,
      "data-dismissable-layer": "",
      style: Ht({
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
}), Wa = /* @__PURE__ */ E({
  __name: "DismissableLayerBranch",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: o } = N();
    return $e(() => {
      ue.branches.add(o.value);
    }), Ge(() => {
      ue.branches.delete(o.value);
    }), (r, a) => (x(), O(u(X), L({ ref: u(n) }, t), {
      default: C(() => [
        A(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Rt = "focusScope.autoFocusOnMount", $t = "focusScope.autoFocusOnUnmount", Sn = { bubbles: !1, cancelable: !0 };
function mt(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const o of e)
    if (Ee(o, { select: t }), document.activeElement !== n)
      return !0;
}
function ja(e) {
  const t = un(e), n = Mn(t, e), o = Mn(t.reverse(), e);
  return [n, o];
}
function un(e) {
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
    if (!Ga(n, { upTo: t }))
      return n;
}
function Ga(e, { upTo: t }) {
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
function Ka(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Ee(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Ka(e) && t && e.select();
  }
}
const Ua = ea(() => M([]));
function Ha() {
  const e = Ua();
  return {
    add(t) {
      const n = e.value[0];
      t !== n && (n == null || n.pause()), e.value = Bn(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var n;
      e.value = Bn(e.value, t), (n = e.value[0]) == null || n.resume();
    }
  };
}
function Bn(e, t) {
  const n = [...e], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function Ya(e) {
  return e.filter((t) => t.tagName !== "A");
}
const Xa = /* @__PURE__ */ E({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, o = t, { currentRef: r, currentElement: a } = N(), s = M(null), i = Ha(), l = Kn({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    Z((f) => {
      if (!ve)
        return;
      const d = a.value;
      if (!n.trapped)
        return;
      function p(h) {
        if (l.paused || !d)
          return;
        const y = h.target;
        d.contains(y) ? s.value = y : Ee(s.value, { select: !0 });
      }
      function m(h) {
        if (l.paused || !d)
          return;
        const y = h.relatedTarget;
        y !== null && (d.contains(y) || Ee(s.value, { select: !0 }));
      }
      function v(h) {
        d.contains(s.value) || Ee(d);
      }
      document.addEventListener("focusin", p), document.addEventListener("focusout", m);
      const g = new MutationObserver(v);
      d && g.observe(d, { childList: !0, subtree: !0 }), f(() => {
        document.removeEventListener("focusin", p), document.removeEventListener("focusout", m), g.disconnect();
      });
    }), Z(async (f) => {
      const d = a.value;
      if (await ae(), !d)
        return;
      i.add(l);
      const p = document.activeElement;
      if (!d.contains(p)) {
        const m = new CustomEvent(Rt, Sn);
        d.addEventListener(Rt, (v) => o("mountAutoFocus", v)), d.dispatchEvent(m), m.defaultPrevented || (mt(Ya(un(d)), {
          select: !0
        }), document.activeElement === p && Ee(d));
      }
      f(() => {
        d.removeEventListener(Rt, (g) => o("mountAutoFocus", g));
        const m = new CustomEvent($t, Sn), v = (g) => {
          o("unmountAutoFocus", g);
        };
        d.addEventListener($t, v), d.dispatchEvent(m), setTimeout(() => {
          m.defaultPrevented || Ee(p != null ? p : document.body, { select: !0 }), d.removeEventListener($t, v), i.remove(l);
        }, 0);
      });
    });
    function c(f) {
      if (!n.loop && !n.trapped || l.paused)
        return;
      const d = f.key === "Tab" && !f.altKey && !f.ctrlKey && !f.metaKey, p = document.activeElement;
      if (d && p) {
        const m = f.currentTarget, [v, g] = ja(m);
        v && g ? !f.shiftKey && p === g ? (f.preventDefault(), n.loop && Ee(v, { select: !0 })) : f.shiftKey && p === v && (f.preventDefault(), n.loop && Ee(g, { select: !0 })) : p === m && f.preventDefault();
      }
    }
    return (f, d) => (x(), O(u(X), {
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
}), qa = "menu.itemSelect", Wt = ["Enter", " "], Za = ["ArrowDown", "PageUp", "Home"], ho = ["ArrowUp", "PageDown", "End"], Ja = [...Za, ...ho], Qa = {
  ltr: [...Wt, "ArrowRight"],
  rtl: [...Wt, "ArrowLeft"]
}, es = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function yo(e) {
  return e ? "open" : "closed";
}
function wt(e) {
  return e === "indeterminate";
}
function cn(e) {
  return wt(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function ts(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function ns(e, t) {
  const { x: n, y: o } = e;
  let r = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a].x, l = t[a].y, c = t[s].x, f = t[s].y;
    l > o != f > o && n < (c - i) * (o - l) / (f - l) + i && (r = !r);
  }
  return r;
}
function os(e, t) {
  if (!t)
    return !1;
  const n = { x: e.clientX, y: e.clientY };
  return ns(n, t);
}
function tt(e) {
  return e.pointerType === "mouse";
}
const [bo, rs] = te("PopperRoot"), wo = /* @__PURE__ */ E({
  __name: "PopperRoot",
  setup(e) {
    const t = M();
    return rs({
      anchor: t,
      onAnchorChange: (n) => t.value = n
    }), (n, o) => A(n.$slots, "default");
  }
}), as = /* @__PURE__ */ E({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: o } = N(), r = bo();
    return H(o, () => {
      var a;
      r.onAnchorChange((a = t.element) != null ? a : o.value);
    }), (a, s) => (x(), O(u(X), {
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
function ss(e) {
  return e !== null;
}
function is(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var b, _;
      var n, o, r;
      const { placement: a, rects: s, middlewareData: i } = t, l = ((n = i.arrow) == null ? void 0 : n.centerOffset) !== 0, c = l ? 0 : e.arrowWidth, f = l ? 0 : e.arrowHeight, [d, p] = jt(a), m = { start: "0%", center: "50%", end: "100%" }[p], v = ((b = (o = i.arrow) == null ? void 0 : o.x) != null ? b : 0) + c / 2, g = ((_ = (r = i.arrow) == null ? void 0 : r.y) != null ? _ : 0) + f / 2;
      let h = "", y = "";
      return d === "bottom" ? (h = l ? m : `${v}px`, y = `${-f}px`) : d === "top" ? (h = l ? m : `${v}px`, y = `${s.floating.height + f}px`) : d === "right" ? (h = `${-f}px`, y = l ? m : `${g}px`) : d === "left" && (h = `${s.floating.width + f}px`, y = l ? m : `${g}px`), { data: { x: h, y } };
    }
  };
}
function jt(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
const xo = {
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
}, [wl, ls] = te("PopperContent"), us = /* @__PURE__ */ E({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ Zn({
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
    ...xo
  }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = bo(), { forwardRef: a, currentElement: s } = N(), i = M(), l = M(), { width: c, height: f } = Ma(l), d = k(
      () => n.side + (n.align !== "center" ? `-${n.align}` : "")
    ), p = k(() => typeof n.collisionPadding == "number" ? n.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...n.collisionPadding }), m = k(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), v = k(() => ({
      padding: p.value,
      boundary: m.value.filter(ss),
      altBoundary: m.value.length > 0
    })), g = Qr(() => [
      jr({
        mainAxis: n.sideOffset + f.value,
        alignmentAxis: n.alignOffset
      }),
      n.prioritizePosition && n.avoidCollisions && En({
        ...v.value
      }),
      n.avoidCollisions && Gr({
        mainAxis: !0,
        crossAxis: !!n.prioritizePosition,
        limiter: n.sticky === "partial" ? Yr() : void 0,
        ...v.value
      }),
      !n.prioritizePosition && n.avoidCollisions && En({
        ...v.value
      }),
      Kr({
        ...v.value,
        apply: ({ elements: w, rects: B, availableWidth: S, availableHeight: j }) => {
          const { width: I, height: q } = B.reference, Y = w.floating.style;
          Y.setProperty(
            "--radix-popper-available-width",
            `${S}px`
          ), Y.setProperty(
            "--radix-popper-available-height",
            `${j}px`
          ), Y.setProperty(
            "--radix-popper-anchor-width",
            `${I}px`
          ), Y.setProperty(
            "--radix-popper-anchor-height",
            `${q}px`
          );
        }
      }),
      l.value && Zr({ element: l.value, padding: n.arrowPadding }),
      is({
        arrowWidth: c.value,
        arrowHeight: f.value
      }),
      n.hideWhenDetached && Ur({ strategy: "referenceHidden", ...v.value })
    ]), { floatingStyles: h, placement: y, isPositioned: b, middlewareData: _ } = Jr(
      r.anchor,
      i,
      {
        strategy: "fixed",
        placement: d,
        whileElementsMounted: (...w) => Wr(...w, {
          animationFrame: n.updatePositionStrategy === "always"
        }),
        middleware: g
      }
    ), P = k(
      () => jt(y.value)[0]
    ), T = k(
      () => jt(y.value)[1]
    );
    Z(() => {
      b.value && o("placed");
    });
    const D = k(
      () => {
        var w;
        return ((w = _.value.arrow) == null ? void 0 : w.centerOffset) !== 0;
      }
    ), R = M("");
    Z(() => {
      s.value && (R.value = window.getComputedStyle(s.value).zIndex);
    });
    const V = k(() => {
      var B;
      var w;
      return (B = (w = _.value.arrow) == null ? void 0 : w.x) != null ? B : 0;
    }), F = k(() => {
      var B;
      var w;
      return (B = (w = _.value.arrow) == null ? void 0 : w.y) != null ? B : 0;
    });
    return ls({
      placedSide: P,
      onArrowChange: (w) => l.value = w,
      arrowX: V,
      arrowY: F,
      shouldHideArrow: D
    }), (w, B) => {
      var S, j, I;
      return x(), ee("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-radix-popper-content-wrapper": "",
        style: Ht({
          ...u(h),
          transform: u(b) ? u(h).transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: R.value,
          "--radix-popper-transform-origin": [
            (S = u(_).transformOrigin) == null ? void 0 : S.x,
            (j = u(_).transformOrigin) == null ? void 0 : j.y
          ].join(" "),
          ...((I = u(_).hide) == null ? void 0 : I.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        G(u(X), L({ ref: u(a) }, w.$attrs, {
          "as-child": n.asChild,
          as: w.as,
          "data-side": P.value,
          "data-align": T.value,
          style: {
            animation: u(b) ? void 0 : "none"
          }
        }), {
          default: C(() => [
            A(w.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
}), _o = /* @__PURE__ */ E({
  __name: "VisuallyHidden",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return N(), (t, n) => (x(), O(u(X), {
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
}), cs = "data-radix-vue-collection-item", [dn, ds] = te("CollectionProvider");
function fs(e = cs) {
  const t = M(/* @__PURE__ */ new Map()), n = M(), o = ds({
    collectionRef: n,
    itemMap: t,
    attrName: e
  }), { getItems: r } = vs(o), a = k(() => Array.from(o.itemMap.value.values())), s = k(() => o.itemMap.value.size);
  return { getItems: r, reactiveItems: a, itemMapSize: s };
}
const ps = E({
  name: "CollectionSlot",
  setup(e, { slots: t }) {
    const n = dn(), { primitiveElement: o, currentElement: r } = vo();
    return H(r, () => {
      n.collectionRef.value = r.value;
    }), () => ze(ln, { ref: o }, t);
  }
}), ms = E({
  name: "CollectionItem",
  inheritAttrs: !1,
  props: {
    value: {
      validator: () => !0
    }
  },
  setup(e, { slots: t, attrs: n }) {
    const o = dn(), { primitiveElement: r, currentElement: a } = vo();
    return Z((s) => {
      if (a.value) {
        const i = Yo(a.value);
        o.itemMap.value.set(i, { ref: a.value, value: e.value }), s(() => o.itemMap.value.delete(i));
      }
    }), () => ze(ln, { ...n, [o.attrName]: "", ref: r }, t);
  }
});
function vs(e) {
  const t = e != null ? e : dn();
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
const Co = /* @__PURE__ */ E({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (x(), O(u(as), K(U(t)), {
      default: C(() => [
        A(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Le, Oo] = te(["MenuRoot", "MenuSub"], "MenuContext"), [at, gs] = te("MenuRoot"), hs = /* @__PURE__ */ E({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = t, { modal: r, dir: a } = Se(n), s = sn(a), i = Me(n, "open", o), l = M(), c = M(!1);
    return Z((f) => {
      if (!ve)
        return;
      const d = () => {
        c.value = !0, document.addEventListener("pointerdown", p, {
          capture: !0,
          once: !0
        }), document.addEventListener("pointermove", p, {
          capture: !0,
          once: !0
        });
      }, p = () => c.value = !1;
      document.addEventListener("keydown", d, { capture: !0 }), f(() => {
        document.removeEventListener("keydown", d, { capture: !0 }), document.removeEventListener("pointerdown", p, {
          capture: !0
        }), document.removeEventListener("pointermove", p, {
          capture: !0
        });
      });
    }), Oo({
      open: i,
      onOpenChange: (f) => {
        i.value = f;
      },
      content: l,
      onContentChange: (f) => {
        l.value = f;
      }
    }), gs({
      onClose: () => {
        i.value = !1;
      },
      isUsingKeyboardRef: c,
      dir: s,
      modal: r
    }), (f, d) => (x(), O(u(wo), null, {
      default: C(() => [
        A(f.$slots, "default")
      ]),
      _: 3
    }));
  }
}), ys = "rovingFocusGroup.onEntryFocus", bs = { bubbles: !1, cancelable: !0 };
function ws(e, t = !1) {
  const n = document.activeElement;
  for (const o of e)
    if (o === n || (o.focus({ preventScroll: t }), document.activeElement !== n))
      return;
}
const [xl, xs] = te("RovingFocusGroup"), _s = /* @__PURE__ */ E({
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
    const o = e, r = n, { loop: a, orientation: s, dir: i } = Se(o), l = sn(i), c = Me(o, "currentTabStopId", r, {
      defaultValue: o.defaultCurrentTabStopId,
      passive: o.currentTabStopId === void 0
    }), f = M(!1), d = M(!1), p = M(0), { getItems: m } = fs();
    function v(g) {
      const h = !d.value;
      if (g.currentTarget && g.target === g.currentTarget && h && !f.value) {
        const y = new CustomEvent(ys, bs);
        if (g.currentTarget.dispatchEvent(y), r("entryFocus", y), !y.defaultPrevented) {
          const b = m().map((D) => D.ref).filter((D) => D.dataset.disabled !== ""), _ = b.find((D) => D.getAttribute("data-active") === "true"), P = b.find(
            (D) => D.id === c.value
          ), T = [_, P, ...b].filter(
            Boolean
          );
          ws(T, o.preventScrollOnEntryFocus);
        }
      }
      d.value = !1;
    }
    return t({
      getItems: m
    }), xs({
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
    }), (g, h) => (x(), O(u(ps), null, {
      default: C(() => [
        G(u(X), {
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
}), [fn, Cs] = te("MenuContent"), pn = /* @__PURE__ */ E({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ Zn({
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
    ...xo
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = Le(), a = at(), { trapFocus: s, disableOutsidePointerEvents: i, loop: l } = Se(n);
    Ca(), xa(i.value);
    const c = M(""), f = M(0), d = M(0), p = M(null), m = M("right"), v = M(0), g = M(null), { createCollection: h } = po(), { forwardRef: y, currentElement: b } = N(), _ = h(b);
    H(b, (w) => {
      r.onContentChange(w);
    });
    const { handleTypeaheadSearch: P } = ka(_);
    Ge(() => {
      window.clearTimeout(f.value);
    });
    function T(w) {
      var B, S;
      return m.value === ((B = p.value) == null ? void 0 : B.side) && os(w, (S = p.value) == null ? void 0 : S.area);
    }
    async function D(w) {
      var B;
      o("openAutoFocus", w), !w.defaultPrevented && (w.preventDefault(), (B = b.value) == null || B.focus({
        preventScroll: !0
      }));
    }
    function R(w) {
      if (w.defaultPrevented)
        return;
      const B = w.target.closest("[data-radix-menu-content]") === w.currentTarget, S = w.ctrlKey || w.altKey || w.metaKey, j = w.key.length === 1, I = va(
        w,
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
      if (I)
        return I == null ? void 0 : I.focus();
      if (w.code === "Space" || (B && (w.key === "Tab" && w.preventDefault(), !S && j && P(w.key)), w.target !== b.value) || !Ja.includes(w.key))
        return;
      w.preventDefault();
      const q = _.value;
      ho.includes(w.key) && q.reverse(), ts(q);
    }
    function V(w) {
      var B, S;
      (S = (B = w == null ? void 0 : w.currentTarget) == null ? void 0 : B.contains) != null && S.call(B, w.target) || (window.clearTimeout(f.value), c.value = "");
    }
    function F(w) {
      var B;
      if (!tt(w))
        return;
      const S = w.target, j = v.value !== w.clientX;
      if ((B = w == null ? void 0 : w.currentTarget) != null && B.contains(S) && j) {
        const I = w.clientX > v.value ? "right" : "left";
        m.value = I, v.value = w.clientX;
      }
    }
    return Cs({
      onItemEnter: (w) => !!T(w),
      onItemLeave: (w) => {
        var B;
        T(w) || ((B = b.value) == null || B.focus(), g.value = null);
      },
      onTriggerLeave: (w) => !!T(w),
      searchRef: c,
      pointerGraceTimerRef: d,
      onPointerGraceIntentChange: (w) => {
        p.value = w;
      }
    }), (w, B) => (x(), O(u(Xa), {
      "as-child": "",
      trapped: u(s),
      onMountAutoFocus: D,
      onUnmountAutoFocus: B[7] || (B[7] = (S) => o("closeAutoFocus", S))
    }, {
      default: C(() => [
        G(u(za), {
          "as-child": "",
          "disable-outside-pointer-events": u(i),
          onEscapeKeyDown: B[2] || (B[2] = (S) => o("escapeKeyDown", S)),
          onPointerDownOutside: B[3] || (B[3] = (S) => o("pointerDownOutside", S)),
          onFocusOutside: B[4] || (B[4] = (S) => o("focusOutside", S)),
          onInteractOutside: B[5] || (B[5] = (S) => o("interactOutside", S)),
          onDismiss: B[6] || (B[6] = (S) => o("dismiss"))
        }, {
          default: C(() => [
            G(u(_s), {
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
                G(u(us), {
                  ref: u(y),
                  role: "menu",
                  as: w.as,
                  "as-child": w.asChild,
                  "aria-orientation": "vertical",
                  "data-radix-menu-content": "",
                  "data-state": u(yo)(u(r).open.value),
                  dir: u(a).dir.value,
                  side: w.side,
                  "side-offset": w.sideOffset,
                  align: w.align,
                  "align-offset": w.alignOffset,
                  "avoid-collisions": w.avoidCollisions,
                  "collision-boundary": w.collisionBoundary,
                  "collision-padding": w.collisionPadding,
                  "arrow-padding": w.arrowPadding,
                  "prioritize-position": w.prioritizePosition,
                  sticky: w.sticky,
                  "hide-when-detached": w.hideWhenDetached,
                  onKeydown: R,
                  onBlur: V,
                  onPointermove: F
                }, {
                  default: C(() => [
                    A(w.$slots, "default")
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
}), Eo = /* @__PURE__ */ E({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = fn(), { forwardRef: o } = N(), r = M(!1);
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
    return (i, l) => (x(), O(u(ms), null, {
      default: C(() => [
        G(u(X), L({
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
}), mn = /* @__PURE__ */ E({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = t, { forwardRef: r, currentElement: a } = N(), s = at(), i = fn(), l = M(!1);
    async function c() {
      const f = a.value;
      if (!n.disabled && f) {
        const d = new CustomEvent(qa, {
          bubbles: !0,
          cancelable: !0
        });
        o("select", d), await ae(), d.defaultPrevented ? l.value = !1 : s.onClose();
      }
    }
    return (f, d) => (x(), O(Eo, L(n, {
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
        f.disabled || m && p.key === " " || u(Wt).includes(p.key) && (p.currentTarget.click(), p.preventDefault());
      })
    }), {
      default: C(() => [
        A(f.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Os, Po] = te(
  ["MenuCheckboxItem", "MenuRadioItem"],
  "MenuItemIndicatorContext"
), Es = /* @__PURE__ */ E({
  __name: "MenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = Os({
      checked: M(!1)
    });
    return (n, o) => (x(), O(u(Et), {
      present: n.forceMount || u(wt)(u(t).checked.value) || u(t).checked.value === !0
    }, {
      default: C(() => [
        G(u(X), {
          as: n.as,
          "as-child": n.asChild,
          "data-state": u(cn)(u(t).checked.value)
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
}), Ps = /* @__PURE__ */ E({
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
    return Po({ checked: r }), (a, s) => (x(), O(mn, L({ role: "menuitemcheckbox" }, n, {
      "aria-checked": u(wt)(u(r)) ? "mixed" : u(r),
      "data-state": u(cn)(u(r)),
      onSelect: s[0] || (s[0] = async (i) => {
        o("select", i), u(wt)(u(r)) ? r.value = !0 : r.value = !u(r);
      })
    }), {
      default: C(() => [
        A(a.$slots, "default", { checked: u(r) })
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), Ts = /* @__PURE__ */ E({
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
    const n = e, o = t, r = J(n, o), a = Le(), { forwardRef: s, currentElement: i } = N();
    return Aa(i), (l, c) => (x(), O(pn, L(u(r), {
      ref: u(s),
      "trap-focus": u(a).open.value,
      "disable-outside-pointer-events": u(a).open.value,
      "disable-outside-scroll": !0,
      onDismiss: c[0] || (c[0] = (f) => u(a).onOpenChange(!1)),
      onFocusOutside: c[1] || (c[1] = gt((f) => o("focusOutside", f), ["prevent"]))
    }), {
      default: C(() => [
        A(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), As = /* @__PURE__ */ E({
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
    const n = J(e, t), o = Le();
    return (r, a) => (x(), O(pn, L(u(n), {
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
}), Ss = /* @__PURE__ */ E({
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
    const n = J(e, t), o = Le(), r = at();
    return (a, s) => (x(), O(u(Et), {
      present: a.forceMount || u(o).open.value
    }, {
      default: C(() => [
        u(r).modal.value ? (x(), O(Ts, K(L({ key: 0 }, { ...a.$attrs, ...u(n) })), {
          default: C(() => [
            A(a.$slots, "default")
          ]),
          _: 3
        }, 16)) : (x(), O(As, K(L({ key: 1 }, { ...a.$attrs, ...u(n) })), {
          default: C(() => [
            A(a.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), To = /* @__PURE__ */ E({
  __name: "MenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (x(), O(u(X), L({ role: "group" }, t), {
      default: C(() => [
        A(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ms = /* @__PURE__ */ E({
  __name: "MenuLabel",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (n, o) => (x(), O(u(X), K(U(t)), {
      default: C(() => [
        A(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Bs = /* @__PURE__ */ E({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (x(), O(u(Ia), K(U(t)), {
      default: C(() => [
        A(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [ks, Ds] = te("MenuRadioGroup"), Rs = /* @__PURE__ */ E({
  __name: "MenuRadioGroup",
  props: {
    modelValue: { default: "" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = Me(n, "modelValue", t);
    return Ds({
      modelValue: o,
      onValueChange: (r) => {
        o.value = r;
      }
    }), (r, a) => (x(), O(To, K(U(n)), {
      default: C(() => [
        A(r.$slots, "default", { modelValue: u(o) })
      ]),
      _: 3
    }, 16));
  }
}), $s = /* @__PURE__ */ E({
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
    const n = e, o = t, { value: r } = Se(n), a = ks(), s = k(
      () => a.modelValue.value === (r == null ? void 0 : r.value)
    );
    return Po({ checked: s }), (i, l) => (x(), O(mn, L({ role: "menuitemradio" }, n, {
      "aria-checked": s.value,
      "data-state": u(cn)(s.value),
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
}), Is = /* @__PURE__ */ E({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (x(), O(u(X), L(t, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: C(() => [
        A(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Ao, Ls] = te("MenuSub"), Fs = /* @__PURE__ */ E({
  __name: "MenuSub",
  props: {
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = Me(n, "open", t, {
      defaultValue: !1,
      passive: n.open === void 0
    }), r = Le(), a = M(), s = M();
    return Z((i) => {
      (r == null ? void 0 : r.open.value) === !1 && (o.value = !1), i(() => o.value = !1);
    }), Oo({
      open: o,
      onOpenChange: (i) => {
        o.value = i;
      },
      content: s,
      onContentChange: (i) => {
        s.value = i;
      }
    }), Ls({
      triggerId: "",
      contentId: "",
      trigger: a,
      onTriggerChange: (i) => {
        a.value = i;
      }
    }), (i, l) => (x(), O(u(wo), null, {
      default: C(() => [
        A(i.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Ns = /* @__PURE__ */ E({
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
    const n = J(e, t), o = Le(), r = at(), a = Ao(), { forwardRef: s, currentElement: i } = N();
    return a.contentId || (a.contentId = Ot(void 0, "radix-vue-menu-sub-content")), (l, c) => (x(), O(u(Et), {
      present: l.forceMount || u(o).open.value
    }, {
      default: C(() => [
        G(pn, L(u(n), {
          id: u(a).contentId,
          ref: u(s),
          "aria-labelledby": u(a).triggerId,
          align: "start",
          side: u(r).dir.value === "rtl" ? "left" : "right",
          "disable-outside-pointer-events": !1,
          "disable-outside-scroll": !1,
          "trap-focus": !1,
          onOpenAutoFocus: c[0] || (c[0] = gt((f) => {
            var d;
            u(r).isUsingKeyboardRef.value && ((d = u(i)) == null || d.focus());
          }, ["prevent"])),
          onCloseAutoFocus: c[1] || (c[1] = gt(() => {
          }, ["prevent"])),
          onFocusOutside: c[2] || (c[2] = (f) => {
            f.defaultPrevented || f.target !== u(a).trigger.value && u(o).onOpenChange(!1);
          }),
          onEscapeKeyDown: c[3] || (c[3] = (f) => {
            u(r).onClose(), f.preventDefault();
          }),
          onKeydown: c[4] || (c[4] = (f) => {
            var d, p;
            const m = (d = f.currentTarget) == null ? void 0 : d.contains(f.target), v = u(es)[u(r).dir.value].includes(f.key);
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
}), Vs = /* @__PURE__ */ E({
  __name: "MenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Le(), o = at(), r = Ao(), a = fn(), s = M(null);
    r.triggerId || (r.triggerId = Ot(void 0, "radix-vue-menu-sub-trigger"));
    function i() {
      s.value && window.clearTimeout(s.value), s.value = null;
    }
    Ge(() => {
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
      t.disabled || m && d.key === " " || Qa[o.dir.value].includes(d.key) && (n.onOpenChange(!0), await ae(), (p = n.content.value) == null || p.focus(), d.preventDefault());
    }
    return (d, p) => (x(), O(Co, { "as-child": "" }, {
      default: C(() => [
        G(Eo, L(t, {
          id: u(r).triggerId,
          ref: (m) => {
            var v;
            (v = u(r)) == null || v.onTriggerChange(m == null ? void 0 : m.$el);
          },
          "aria-haspopup": "menu",
          "aria-expanded": u(n).open.value,
          "aria-controls": u(r).contentId,
          "data-state": u(yo)(u(n).open.value),
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
}), [So, zs] = te("DropdownMenuRoot"), Ws = /* @__PURE__ */ E({
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
    N();
    const r = Me(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), a = M(), { modal: s, dir: i } = Se(n), l = sn(i);
    return zs({
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
    }), (c, f) => (x(), O(u(hs), {
      open: u(r),
      "onUpdate:open": f[0] || (f[0] = (d) => Un(r) ? r.value = d : null),
      dir: u(l),
      modal: u(s)
    }, {
      default: C(() => [
        A(c.$slots, "default", { open: u(r) })
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
}), js = /* @__PURE__ */ E({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = So(), { forwardRef: o, currentElement: r } = N();
    return $e(() => {
      n.triggerElement = r;
    }), n.triggerId || (n.triggerId = Ot(void 0, "radix-vue-dropdown-menu-trigger")), (a, s) => (x(), O(u(Co), { "as-child": "" }, {
      default: C(() => [
        G(u(X), {
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
          onKeydown: s[1] || (s[1] = Xo(
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
}), Gs = /* @__PURE__ */ E({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (x(), O(u(Bs), K(U(t)), {
      default: C(() => [
        A(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ks = /* @__PURE__ */ E({
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
    const n = J(e, t);
    N();
    const o = So(), r = M(!1);
    function a(s) {
      s.defaultPrevented || (r.value || setTimeout(() => {
        var i;
        (i = o.triggerElement.value) == null || i.focus();
      }, 0), r.value = !1, s.preventDefault());
    }
    return o.contentId || (o.contentId = Ot(void 0, "radix-vue-dropdown-menu-content")), (s, i) => {
      var l;
      return x(), O(u(Ss), L(u(n), {
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
}), Us = /* @__PURE__ */ E({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = Ct(t);
    return N(), (r, a) => (x(), O(u(mn), K(U({ ...n, ...u(o) })), {
      default: C(() => [
        A(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hs = /* @__PURE__ */ E({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return N(), (n, o) => (x(), O(u(To), K(U(t)), {
      default: C(() => [
        A(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ys = /* @__PURE__ */ E({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return N(), (n, o) => (x(), O(u(Is), K(U(t)), {
      default: C(() => [
        A(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Xs = /* @__PURE__ */ E({
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
    const n = e, o = Ct(t);
    return N(), (r, a) => (x(), O(u(Ps), K(U({ ...n, ...u(o) })), {
      default: C(() => [
        A(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Mo = /* @__PURE__ */ E({
  __name: "DropdownMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return N(), (n, o) => (x(), O(u(Es), K(U(t)), {
      default: C(() => [
        A(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), qs = /* @__PURE__ */ E({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return N(), (n, o) => (x(), O(u(Ms), K(U(t)), {
      default: C(() => [
        A(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zs = /* @__PURE__ */ E({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = Ct(t);
    return N(), (r, a) => (x(), O(u(Rs), K(U({ ...n, ...u(o) })), {
      default: C(() => [
        A(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Js = /* @__PURE__ */ E({
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
    const n = J(e, t);
    return N(), (o, r) => (x(), O(u($s), K(U(u(n))), {
      default: C(() => [
        A(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Qs = /* @__PURE__ */ E({
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
    return N(), (a, s) => (x(), O(u(Fs), {
      open: u(o),
      "onUpdate:open": s[0] || (s[0] = (i) => Un(o) ? o.value = i : null)
    }, {
      default: C(() => [
        A(a.$slots, "default", { open: u(o) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), ei = /* @__PURE__ */ E({
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
    const n = J(e, t);
    return N(), (o, r) => (x(), O(u(Ns), L(u(n), { style: {
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
}), ti = /* @__PURE__ */ E({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return N(), (n, o) => (x(), O(u(Vs), K(U(t)), {
      default: C(() => [
        A(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function ni() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
ni();
const [Pt, oi] = te("ToastProvider"), ri = /* @__PURE__ */ E({
  __name: "ToastProvider",
  props: {
    label: { default: "Notification" },
    duration: { default: 5e3 },
    swipeDirection: { default: "right" },
    swipeThreshold: { default: 50 }
  },
  setup(e) {
    const t = e, { label: n, duration: o, swipeDirection: r, swipeThreshold: a } = Se(t), s = M(), i = M(0), l = M(!1), c = M(!1);
    if (t.label && typeof t.label == "string" && !t.label.trim()) {
      const f = "Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`.";
      throw new Error(f);
    }
    return oi({
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
}), ai = "toast.swipeStart", si = "toast.swipeMove", ii = "toast.swipeCancel", li = "toast.swipeEnd", Gt = "toast.viewportPause", Kt = "toast.viewportResume";
function ft(e, t, n) {
  const o = n.originalEvent.currentTarget, r = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, { once: !0 }), o.dispatchEvent(r);
}
function kn(e, t, n = 0) {
  const o = Math.abs(e.x), r = Math.abs(e.y), a = o > r;
  return t === "left" || t === "right" ? a && o > n : !a && r > n;
}
function ui(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function Bo(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((n) => {
    if (n.nodeType === n.TEXT_NODE && n.textContent && t.push(n.textContent), ui(n)) {
      const o = n.ariaHidden || n.hidden || n.style.display === "none", r = n.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (r) {
          const a = n.dataset.radixToastAnnounceAlt;
          a && t.push(a);
        } else
          t.push(...Bo(n));
    }
  }), t;
}
const ci = /* @__PURE__ */ E({
  __name: "ToastAnnounce",
  setup(e) {
    const t = Pt(), n = ca(1e3), o = M(!1);
    return co(() => {
      o.value = !0;
    }), (r, a) => u(n) || o.value ? (x(), O(u(_o), { key: 0 }, {
      default: C(() => [
        vt(Ze(u(t).label.value) + " ", 1),
        A(r.$slots, "default")
      ]),
      _: 3
    })) : he("", !0);
  }
}), [di, fi] = te("ToastRoot"), pi = /* @__PURE__ */ E({
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
    const n = e, o = t, { forwardRef: r, currentElement: a } = N(), s = Pt(), i = M(null), l = M(null), c = k(() => n.duration || s.duration.value), f = M(0), d = M(c.value), p = M(0), m = M(c.value), v = co(() => {
      const b = (/* @__PURE__ */ new Date()).getTime() - f.value;
      m.value = Math.max(d.value - b, 0);
    }, { fpsLimit: 60 });
    function g(b) {
      !b || b === Number.POSITIVE_INFINITY || (window.clearTimeout(p.value), f.value = (/* @__PURE__ */ new Date()).getTime(), p.value = window.setTimeout(h, b));
    }
    function h() {
      var b, _;
      (b = a.value) != null && b.contains(document.activeElement) && ((_ = s.viewport.value) == null || _.focus()), s.isClosePausedRef.value = !1, o("close");
    }
    const y = k(() => a.value ? Bo(a.value) : null);
    if (n.type && !["foreground", "background"].includes(n.type)) {
      const b = "Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.";
      throw new Error(b);
    }
    return Z((b) => {
      const _ = s.viewport.value;
      if (_) {
        const P = () => {
          g(d.value), v.resume(), o("resume");
        }, T = () => {
          const D = (/* @__PURE__ */ new Date()).getTime() - f.value;
          d.value = d.value - D, window.clearTimeout(p.value), v.pause(), o("pause");
        };
        return _.addEventListener(Gt, T), _.addEventListener(Kt, P), () => {
          _.removeEventListener(Gt, T), _.removeEventListener(Kt, P);
        };
      }
    }), H(() => [n.open, c.value], () => {
      d.value = c.value, n.open && !s.isClosePausedRef.value && g(c.value);
    }, { immediate: !0 }), on("Escape", (b) => {
      o("escapeKeyDown", b), b.defaultPrevented || (s.isFocusedToastEscapeKeyDownRef.value = !0, h());
    }), $e(() => {
      s.onToastAdd();
    }), Ge(() => {
      s.onToastRemove();
    }), fi({ onClose: h }), (b, _) => (x(), ee(qe, null, [
      y.value ? (x(), O(ci, {
        key: 0,
        role: "status",
        "aria-live": b.type === "foreground" ? "assertive" : "polite",
        "aria-atomic": ""
      }, {
        default: C(() => [
          vt(Ze(y.value), 1)
        ]),
        _: 1
      }, 8, ["aria-live"])) : he("", !0),
      (x(), O(Yn, {
        to: u(s).viewport.value
      }, [
        G(u(X), L({
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
          onPointerdown: _[0] || (_[0] = gt((P) => {
            i.value = { x: P.clientX, y: P.clientY };
          }, ["left"])),
          onPointermove: _[1] || (_[1] = (P) => {
            if (!i.value)
              return;
            const T = P.clientX - i.value.x, D = P.clientY - i.value.y, R = !!l.value, V = ["left", "right"].includes(u(s).swipeDirection.value), F = ["left", "up"].includes(u(s).swipeDirection.value) ? Math.min : Math.max, w = V ? F(0, T) : 0, B = V ? 0 : F(0, D), S = P.pointerType === "touch" ? 10 : 2, j = { x: w, y: B }, I = { originalEvent: P, delta: j };
            R ? (l.value = j, u(ft)(u(si), (q) => o("swipeMove", q), I)) : u(kn)(j, u(s).swipeDirection.value, S) ? (l.value = j, u(ft)(u(ai), (q) => o("swipeStart", q), I), P.target.setPointerCapture(P.pointerId)) : (Math.abs(T) > S || Math.abs(D) > S) && (i.value = null);
          }),
          onPointerup: _[2] || (_[2] = (P) => {
            const T = l.value, D = P.target;
            if (D.hasPointerCapture(P.pointerId) && D.releasePointerCapture(P.pointerId), l.value = null, i.value = null, T) {
              const R = P.currentTarget, V = { originalEvent: P, delta: T };
              u(kn)(T, u(s).swipeDirection.value, u(s).swipeThreshold.value) ? u(ft)(u(li), (F) => o("swipeEnd", F), V) : u(ft)(u(ii), (F) => o("swipeCancel", F), V), R == null || R.addEventListener("click", (F) => F.preventDefault(), {
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
      ], 8, ["to"]))
    ], 64));
  }
}), mi = /* @__PURE__ */ E({
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
    const n = e, o = t, { forwardRef: r } = N(), a = Me(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    });
    return (s, i) => (x(), O(u(Et), {
      present: s.forceMount || u(a)
    }, {
      default: C(() => [
        G(pi, L({
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
}), vi = /* @__PURE__ */ E({
  __name: "ToastAnnounceExclude",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    return (t, n) => (x(), O(u(X), {
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
}), gi = /* @__PURE__ */ E({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = di(), { forwardRef: o } = N();
    return (r, a) => (x(), O(vi, { "as-child": "" }, {
      default: C(() => [
        G(u(X), L(t, {
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
}), Dn = /* @__PURE__ */ E({
  __name: "FocusProxy",
  emits: ["focusFromOutsideViewport"],
  setup(e, { emit: t }) {
    const n = t, o = Pt();
    return (r, a) => (x(), O(u(_o), {
      "aria-hidden": "",
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
}), hi = /* @__PURE__ */ E({
  inheritAttrs: !1,
  __name: "ToastViewport",
  props: {
    hotkey: { default: () => ["F8"] },
    label: { type: [String, Function], default: "Notifications ({hotkey})" },
    asChild: { type: Boolean },
    as: { default: "ol" }
  },
  setup(e) {
    const t = e, { hotkey: n, label: o } = Se(t), { forwardRef: r, currentElement: a } = N(), { createCollection: s } = po(), i = s(a), l = Pt(), c = k(() => l.toastCount.value > 0), f = M(), d = M(), p = k(() => n.value.join("+").replace(/Key/g, "").replace(/Digit/g, ""));
    on(n.value, () => {
      a.value.focus();
    }), $e(() => {
      l.onViewportChange(a.value);
    }), Z((v) => {
      const g = a.value;
      if (c.value && g) {
        const h = () => {
          if (!l.isClosePausedRef.value) {
            const T = new CustomEvent(Gt);
            g.dispatchEvent(T), l.isClosePausedRef.value = !0;
          }
        }, y = () => {
          if (l.isClosePausedRef.value) {
            const T = new CustomEvent(Kt);
            g.dispatchEvent(T), l.isClosePausedRef.value = !1;
          }
        }, b = (T) => {
          !g.contains(T.relatedTarget) && y();
        }, _ = () => {
          g.contains(document.activeElement) || y();
        }, P = (T) => {
          var D, R, V;
          const F = T.altKey || T.ctrlKey || T.metaKey;
          if (T.key === "Tab" && !F) {
            const w = document.activeElement, B = T.shiftKey;
            if (T.target === g && B) {
              (D = f.value) == null || D.focus();
              return;
            }
            const S = m({ tabbingDirection: B ? "backwards" : "forwards" }), j = S.findIndex((I) => I === w);
            mt(S.slice(j + 1)) ? T.preventDefault() : B ? (R = f.value) == null || R.focus() : (V = d.value) == null || V.focus();
          }
        };
        g.addEventListener("focusin", h), g.addEventListener("focusout", b), g.addEventListener("pointermove", h), g.addEventListener("pointerleave", _), g.addEventListener("keydown", P), window.addEventListener("blur", h), window.addEventListener("focus", y), v(() => {
          g.removeEventListener("focusin", h), g.removeEventListener("focusout", b), g.removeEventListener("pointermove", h), g.removeEventListener("pointerleave", _), g.removeEventListener("keydown", P), window.removeEventListener("blur", h), window.removeEventListener("focus", y);
        });
      }
    });
    function m({ tabbingDirection: v }) {
      const g = i.value.map((h) => {
        const y = [h, ...un(h)];
        return v === "forwards" ? y : y.reverse();
      });
      return (v === "forwards" ? g.reverse() : g).flat();
    }
    return (v, g) => (x(), O(u(Wa), {
      role: "region",
      "aria-label": typeof u(o) == "string" ? u(o).replace("{hotkey}", p.value) : u(o)(p.value),
      tabindex: "-1",
      style: Ht({
        pointerEvents: c.value ? void 0 : "none"
      })
    }, {
      default: C(() => [
        c.value ? (x(), O(Dn, {
          key: 0,
          ref: (h) => {
            f.value = u(xe)(h);
          },
          onFocusFromOutsideViewport: g[0] || (g[0] = () => {
            const h = m({
              tabbingDirection: "forwards"
            });
            u(mt)(h);
          })
        }, null, 512)) : he("", !0),
        G(u(X), L({
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
        c.value ? (x(), O(Dn, {
          key: 1,
          ref: (h) => {
            d.value = u(xe)(h);
          },
          onFocusFromOutsideViewport: g[1] || (g[1] = () => {
            const h = m({
              tabbingDirection: "backwards"
            });
            u(mt)(h);
          })
        }, null, 512)) : he("", !0)
      ]),
      _: 3
    }, 8, ["aria-label", "style"]));
  }
}), yi = /* @__PURE__ */ E({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return N(), (n, o) => (x(), O(u(X), K(U(t)), {
      default: C(() => [
        A(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), bi = /* @__PURE__ */ E({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return N(), (n, o) => (x(), O(u(X), K(U(t)), {
      default: C(() => [
        A(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function ko(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number")
    o += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var r = e.length;
      for (t = 0; t < r; t++)
        e[t] && (n = ko(e[t])) && (o && (o += " "), o += n);
    } else
      for (n in e)
        e[n] && (o && (o += " "), o += n);
  return o;
}
function wi() {
  for (var e, t, n = 0, o = "", r = arguments.length; n < r; n++)
    (e = arguments[n]) && (t = ko(e)) && (o && (o += " "), o += t);
  return o;
}
const vn = "-";
function xi(e) {
  const t = Ci(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: o
  } = e;
  function r(s) {
    const i = s.split(vn);
    return i[0] === "" && i.length !== 1 && i.shift(), Do(i, t) || _i(s);
  }
  function a(s, i) {
    const l = n[s] || [];
    return i && o[s] ? [...l, ...o[s]] : l;
  }
  return {
    getClassGroupId: r,
    getConflictingClassGroupIds: a
  };
}
function Do(e, t) {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], o = t.nextPart.get(n), r = o ? Do(e.slice(1), o) : void 0;
  if (r)
    return r;
  if (t.validators.length === 0)
    return;
  const a = e.join(vn);
  return (s = t.validators.find(({
    validator: i
  }) => i(a))) == null ? void 0 : s.classGroupId;
}
const Rn = /^\[(.+)\]$/;
function _i(e) {
  if (Rn.test(e)) {
    const t = Rn.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function Ci(e) {
  const {
    theme: t,
    prefix: n
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Ei(Object.entries(e.classGroups), n).forEach(([a, s]) => {
    Ut(s, o, a, t);
  }), o;
}
function Ut(e, t, n, o) {
  e.forEach((r) => {
    if (typeof r == "string") {
      const a = r === "" ? t : $n(t, r);
      a.classGroupId = n;
      return;
    }
    if (typeof r == "function") {
      if (Oi(r)) {
        Ut(r(o), t, n, o);
        return;
      }
      t.validators.push({
        validator: r,
        classGroupId: n
      });
      return;
    }
    Object.entries(r).forEach(([a, s]) => {
      Ut(s, $n(t, a), n, o);
    });
  });
}
function $n(e, t) {
  let n = e;
  return t.split(vn).forEach((o) => {
    n.nextPart.has(o) || n.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(o);
  }), n;
}
function Oi(e) {
  return e.isThemeGetter;
}
function Ei(e, t) {
  return t ? e.map(([n, o]) => {
    const r = o.map((a) => typeof a == "string" ? t + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map(([s, i]) => [t + s, i])) : a);
    return [n, r];
  }) : e;
}
function Pi(e) {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  function r(a, s) {
    n.set(a, s), t++, t > e && (t = 0, o = n, n = /* @__PURE__ */ new Map());
  }
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
}
const Ro = "!";
function Ti(e) {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, o = t.length === 1, r = t[0], a = t.length;
  function s(i) {
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
    const p = l.length === 0 ? i : i.substring(f), m = p.startsWith(Ro), v = m ? p.substring(1) : p, g = d && d > f ? d - f : void 0;
    return {
      modifiers: l,
      hasImportantModifier: m,
      baseClassName: v,
      maybePostfixModifierPosition: g
    };
  }
  return n ? function(l) {
    return n({
      className: l,
      parseClassName: s
    });
  } : s;
}
function Ai(e) {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((o) => {
    o[0] === "[" ? (t.push(...n.sort(), o), n = []) : n.push(o);
  }), t.push(...n.sort()), t;
}
function Si(e) {
  return {
    cache: Pi(e.cacheSize),
    parseClassName: Ti(e),
    ...xi(e)
  };
}
const Mi = /\s+/;
function Bi(e, t) {
  const {
    parseClassName: n,
    getClassGroupId: o,
    getConflictingClassGroupIds: r
  } = t, a = /* @__PURE__ */ new Set();
  return e.trim().split(Mi).map((s) => {
    const {
      modifiers: i,
      hasImportantModifier: l,
      baseClassName: c,
      maybePostfixModifierPosition: f
    } = n(s);
    let d = Boolean(f), p = o(d ? c.substring(0, f) : c);
    if (!p) {
      if (!d)
        return {
          isTailwindClass: !1,
          originalClassName: s
        };
      if (p = o(c), !p)
        return {
          isTailwindClass: !1,
          originalClassName: s
        };
      d = !1;
    }
    const m = Ai(i).join(":");
    return {
      isTailwindClass: !0,
      modifierId: l ? m + Ro : m,
      classGroupId: p,
      originalClassName: s,
      hasPostfixModifier: d
    };
  }).reverse().filter((s) => {
    if (!s.isTailwindClass)
      return !0;
    const {
      modifierId: i,
      classGroupId: l,
      hasPostfixModifier: c
    } = s, f = i + l;
    return a.has(f) ? !1 : (a.add(f), r(l, c).forEach((d) => a.add(i + d)), !0);
  }).reverse().map((s) => s.originalClassName).join(" ");
}
function ki() {
  let e = 0, t, n, o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = $o(t)) && (o && (o += " "), o += n);
  return o;
}
function $o(e) {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = $o(e[o])) && (n && (n += " "), n += t);
  return n;
}
function Di(e, ...t) {
  let n, o, r, a = s;
  function s(l) {
    const c = t.reduce((f, d) => d(f), e());
    return n = Si(c), o = n.cache.get, r = n.cache.set, a = i, i(l);
  }
  function i(l) {
    const c = o(l);
    if (c)
      return c;
    const f = Bi(l, n);
    return r(l, f), f;
  }
  return function() {
    return a(ki.apply(null, arguments));
  };
}
function z(e) {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}
const Io = /^\[(?:([a-z-]+):)?(.+)\]$/i, Ri = /^\d+\/\d+$/, $i = /* @__PURE__ */ new Set(["px", "full", "screen"]), Ii = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Li = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Fi = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Ni = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Vi = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function ge(e) {
  return Be(e) || $i.has(e) || Ri.test(e);
}
function Ce(e) {
  return Ue(e, "length", Yi);
}
function Be(e) {
  return Boolean(e) && !Number.isNaN(Number(e));
}
function pt(e) {
  return Ue(e, "number", Be);
}
function Ye(e) {
  return Boolean(e) && Number.isInteger(Number(e));
}
function zi(e) {
  return e.endsWith("%") && Be(e.slice(0, -1));
}
function $(e) {
  return Io.test(e);
}
function Oe(e) {
  return Ii.test(e);
}
const Wi = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function ji(e) {
  return Ue(e, Wi, Lo);
}
function Gi(e) {
  return Ue(e, "position", Lo);
}
const Ki = /* @__PURE__ */ new Set(["image", "url"]);
function Ui(e) {
  return Ue(e, Ki, qi);
}
function Hi(e) {
  return Ue(e, "", Xi);
}
function Xe() {
  return !0;
}
function Ue(e, t, n) {
  const o = Io.exec(e);
  return o ? o[1] ? typeof t == "string" ? o[1] === t : t.has(o[1]) : n(o[2]) : !1;
}
function Yi(e) {
  return Li.test(e) && !Fi.test(e);
}
function Lo() {
  return !1;
}
function Xi(e) {
  return Ni.test(e);
}
function qi(e) {
  return Vi.test(e);
}
function Zi() {
  const e = z("colors"), t = z("spacing"), n = z("blur"), o = z("brightness"), r = z("borderColor"), a = z("borderRadius"), s = z("borderSpacing"), i = z("borderWidth"), l = z("contrast"), c = z("grayscale"), f = z("hueRotate"), d = z("invert"), p = z("gap"), m = z("gradientColorStops"), v = z("gradientColorStopPositions"), g = z("inset"), h = z("margin"), y = z("opacity"), b = z("padding"), _ = z("saturate"), P = z("scale"), T = z("sepia"), D = z("skew"), R = z("space"), V = z("translate"), F = () => ["auto", "contain", "none"], w = () => ["auto", "hidden", "clip", "visible", "scroll"], B = () => ["auto", $, t], S = () => [$, t], j = () => ["", ge, Ce], I = () => ["auto", Be, $], q = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], Y = () => ["solid", "dashed", "dotted", "double", "none"], oe = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ie = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], Q = () => ["", "0", $], st = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], He = () => [Be, pt], it = () => [Be, $];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Xe],
      spacing: [ge, Ce],
      blur: ["none", "", Oe, $],
      brightness: He(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Oe, $],
      borderSpacing: S(),
      borderWidth: j(),
      contrast: He(),
      grayscale: Q(),
      hueRotate: it(),
      invert: Q(),
      gap: S(),
      gradientColorStops: [e],
      gradientColorStopPositions: [zi, Ce],
      inset: B(),
      margin: B(),
      opacity: He(),
      padding: S(),
      saturate: He(),
      scale: He(),
      sepia: Q(),
      skew: it(),
      space: S(),
      translate: S()
    },
    classGroups: {
      aspect: [{
        aspect: ["auto", "square", "video", $]
      }],
      container: ["container"],
      columns: [{
        columns: [Oe]
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
        object: [...q(), $]
      }],
      overflow: [{
        overflow: w()
      }],
      "overflow-x": [{
        "overflow-x": w()
      }],
      "overflow-y": [{
        "overflow-y": w()
      }],
      overscroll: [{
        overscroll: F()
      }],
      "overscroll-x": [{
        "overscroll-x": F()
      }],
      "overscroll-y": [{
        "overscroll-y": F()
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
        z: ["auto", Ye, $]
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
        order: ["first", "last", "none", Ye, $]
      }],
      "grid-cols": [{
        "grid-cols": [Xe]
      }],
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Ye, $]
        }, $]
      }],
      "col-start": [{
        "col-start": I()
      }],
      "col-end": [{
        "col-end": I()
      }],
      "grid-rows": [{
        "grid-rows": [Xe]
      }],
      "row-start-end": [{
        row: ["auto", {
          span: [Ye, $]
        }, $]
      }],
      "row-start": [{
        "row-start": I()
      }],
      "row-end": [{
        "row-end": I()
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
          screen: [Oe]
        }, Oe]
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
        text: ["base", Oe, Ce]
      }],
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      "font-style": ["italic", "not-italic"],
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", pt]
      }],
      "font-family": [{
        font: [Xe]
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
        "line-clamp": ["none", Be, pt]
      }],
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", ge, $]
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
        decoration: [...Y(), "wavy"]
      }],
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", ge, Ce]
      }],
      "underline-offset": [{
        "underline-offset": ["auto", ge, $]
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
        bg: [...q(), Gi]
      }],
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      "bg-size": [{
        bg: ["auto", "cover", "contain", ji]
      }],
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Ui]
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
        border: [...Y(), "hidden"]
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
        divide: Y()
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
        outline: ["", ...Y()]
      }],
      "outline-offset": [{
        "outline-offset": [ge, $]
      }],
      "outline-w": [{
        outline: [ge, Ce]
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
        "ring-offset": [ge, Ce]
      }],
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      shadow: [{
        shadow: ["", "inner", "none", Oe, Hi]
      }],
      "shadow-color": [{
        shadow: [Xe]
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
        "drop-shadow": ["", "none", Oe, $]
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
        duration: it()
      }],
      ease: [{
        ease: ["linear", "in", "out", "in-out", $]
      }],
      delay: [{
        delay: it()
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
        rotate: [Ye, $]
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
        stroke: [ge, Ce, pt]
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
}
const Ji = /* @__PURE__ */ Di(Zi);
function ne(...e) {
  return Ji(wi(e));
}
const Qi = /* @__PURE__ */ E({
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
    const n = e, o = t, r = k(() => {
      const { class: s, ...i } = n;
      return i;
    }), a = J(r, o);
    return (s, i) => (x(), O(u(mi), L(u(a), {
      class: u(ne)(u(cl)({ variant: s.variant }), n.class),
      "onUpdate:open": s.onOpenChange
    }), {
      default: C(() => [
        A(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class", "onUpdate:open"]));
  }
}), el = /* @__PURE__ */ E({
  __name: "ToastViewport",
  props: {
    hotkey: {},
    label: { type: [String, Function] },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = k(() => {
      const { class: o, ...r } = t;
      return r;
    });
    return (o, r) => (x(), O(u(hi), L(n.value, {
      class: u(ne)(
        "fixed bottom-0 z-[100] flex max-h-screen w-full flex-col-reverse gap-y-1 p-4 sm:top-0 sm:right-0 sm:bottom-auto sm:flex-col md:max-w-[420px]",
        t.class
      )
    }), null, 16, ["class"]));
  }
});
function tl(e, t) {
  return x(), ee("svg", {
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
function nl(e, t) {
  return x(), ee("svg", {
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
function ol(e, t) {
  return x(), ee("svg", {
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
function rl(e, t) {
  return x(), ee("svg", {
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
const al = /* @__PURE__ */ E({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = k(() => {
      const { class: o, ...r } = t;
      return r;
    });
    return (o, r) => (x(), O(u(gi), L(n.value, {
      class: u(ne)(
        "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
        t.class
      )
    }), {
      default: C(() => [
        G(u(ol), { class: "h-4 w-4" })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), sl = /* @__PURE__ */ E({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = k(() => {
      const { class: o, ...r } = t;
      return r;
    });
    return (o, r) => (x(), O(u(yi), L(n.value, {
      class: u(ne)("text-sm font-semibold [&+div]:text-xs", t.class)
    }), {
      default: C(() => [
        A(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), In = /* @__PURE__ */ E({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = k(() => {
      const { class: o, ...r } = t;
      return r;
    });
    return (o, r) => (x(), O(u(bi), L({
      class: u(ne)("text-sm opacity-90", t.class)
    }, n.value), {
      default: C(() => [
        A(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), il = /* @__PURE__ */ E({
  __name: "ToastProvider",
  props: {
    label: {},
    duration: {},
    swipeDirection: {},
    swipeThreshold: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (x(), O(u(ri), K(U(t)), {
      default: C(() => [
        A(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Fo(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number")
    o += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Fo(e[t])) && (o && (o += " "), o += n);
    else
      for (t in e)
        e[t] && (o && (o += " "), o += t);
  return o;
}
function ll() {
  for (var e, t, n = 0, o = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Fo(e)) && (o && (o += " "), o += t);
  return o;
}
const Ln = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, Fn = ll, ul = (e, t) => (n) => {
  var o;
  if ((t == null ? void 0 : t.variants) == null)
    return Fn(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: r, defaultVariants: a } = t, s = Object.keys(r).map((c) => {
    const f = n == null ? void 0 : n[c], d = a == null ? void 0 : a[c];
    if (f === null)
      return null;
    const p = Ln(f) || Ln(d);
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
  return Fn(e, s, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, cl = ul(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-md transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-bottom-full data-[state=open]:sm:slide-in-from-top-full",
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
function dl(e, t) {
  return x(), ee("svg", {
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
function Nn(e, t) {
  return x(), ee("svg", {
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
function fl(e, t) {
  return x(), ee("svg", {
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
const pl = { name: "Notifications" }, _l = /* @__PURE__ */ E({
  ...pl,
  props: {
    info: {},
    success: {},
    warning: {},
    errors: {},
    showErrorKeys: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, { toast: n } = Jn();
    return H(
      () => t.info,
      (o) => {
        o && n({
          icon: fl,
          title: "FYI",
          iconClasses: "text-blue-400",
          description: t.info
        });
      },
      {
        immediate: !0
      }
    ), H(
      () => t.success,
      (o) => {
        o && n({
          icon: dl,
          title: "Success",
          iconClasses: "text-green-400",
          description: t.success
        });
      },
      { immediate: !0 }
    ), H(
      () => t.warning,
      (o) => {
        o && n({
          icon: Nn,
          title: "Warning",
          iconClasses: "text-orange-400",
          description: t.warning
        });
      },
      { immediate: !0 }
    ), H(
      () => t.errors,
      () => {
        Object.keys(t.errors).length > 0 && n({
          icon: Nn,
          title: "Oh snap! Some errors were encountered.",
          iconClasses: "text-red-400",
          messages: t.showErrorKeys ? Object.keys(t.errors) : Object.values(t.errors)
        });
      }
    ), (o, r) => (x(), O(u(ir)));
  }
});
var No = {}, Vo = {};
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
})(Vo);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return o;
    }
  });
  const t = /* @__PURE__ */ n(Vo);
  function n(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  const o = t.default;
})(No);
let It = No;
var ml = (It.__esModule ? It : { default: It }).default, zo = {}, Wo = {}, gn = { exports: {} }, W = String, jo = function() {
  return { isColorSupported: !1, reset: W, bold: W, dim: W, italic: W, underline: W, inverse: W, hidden: W, strikethrough: W, black: W, red: W, green: W, yellow: W, blue: W, magenta: W, cyan: W, white: W, gray: W, bgBlack: W, bgRed: W, bgGreen: W, bgYellow: W, bgBlue: W, bgMagenta: W, bgCyan: W, bgWhite: W };
};
gn.exports = jo();
gn.exports.createColors = jo;
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
  const n = /* @__PURE__ */ o(gn.exports);
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
})(Wo);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return r;
    }
  });
  const t = /* @__PURE__ */ n(Wo);
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
})(zo);
let Lt = zo;
var vl = (Lt.__esModule ? Lt : { default: Lt }).default;
const Cl = ml.withOptions(
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
              ...vl.indigo,
              ...(t = e == null ? void 0 : e.colors) == null ? void 0 : t.primary
            }
          }
        }
      }
    };
  }
), Ol = /* @__PURE__ */ E({
  __name: "DropdownMenu",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const r = J(e, t);
    return (a, s) => (x(), O(u(Ws), K(U(u(r))), {
      default: C(() => [
        A(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), El = /* @__PURE__ */ E({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const n = rt(e);
    return (o, r) => (x(), O(u(js), L({ class: "outline-none" }, u(n)), {
      default: C(() => [
        A(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Pl = /* @__PURE__ */ E({
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
    const n = e, o = t, r = k(() => {
      const { class: s, ...i } = n;
      return i;
    }), a = J(r, o);
    return (s, i) => (x(), O(u(Gs), null, {
      default: C(() => [
        G(u(Ks), L(u(a), {
          class: u(ne)(
            "z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
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
}), Tl = /* @__PURE__ */ E({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (x(), O(u(Hs), K(U(t)), {
      default: C(() => [
        A(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Al = /* @__PURE__ */ E({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = J(e, t);
    return (a, s) => (x(), O(u(Zs), K(U(u(r))), {
      default: C(() => [
        A(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Sl = /* @__PURE__ */ E({
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
    const t = e, n = k(() => {
      const { class: r, ...a } = t;
      return a;
    }), o = rt(n);
    return (r, a) => (x(), O(u(Us), L(u(o), {
      class: u(ne)(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
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
}), gl = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, Ml = /* @__PURE__ */ E({
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
    const n = e, o = t, r = k(() => {
      const { class: s, ...i } = n;
      return i;
    }), a = J(r, o);
    return (s, i) => (x(), O(u(Xs), L(u(a), {
      class: u(ne)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        n.class
      )
    }), {
      default: C(() => [
        ce("span", gl, [
          G(u(Mo), null, {
            default: C(() => [
              G(u(tl), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        A(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), hl = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, Bl = /* @__PURE__ */ E({
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
    const n = e, o = t, r = k(() => {
      const { class: s, ...i } = n;
      return i;
    }), a = J(r, o);
    return (s, i) => (x(), O(u(Js), L(u(a), {
      class: u(ne)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        n.class
      )
    }), {
      default: C(() => [
        ce("span", hl, [
          G(u(Mo), null, {
            default: C(() => [
              G(u(rl), { class: "h-4 w-4 fill-current" })
            ]),
            _: 1
          })
        ]),
        A(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), kl = /* @__PURE__ */ E({
  __name: "DropdownMenuShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (x(), ee("span", {
      class: Vn(u(ne)("ml-auto text-xs tracking-widest opacity-60", t.class))
    }, [
      A(n.$slots, "default")
    ], 2));
  }
}), Dl = /* @__PURE__ */ E({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = k(() => {
      const { class: o, ...r } = t;
      return r;
    });
    return (o, r) => (x(), O(u(Ys), L(n.value, {
      class: u(ne)("-mx-1 my-1 h-px bg-muted", t.class)
    }), null, 16, ["class"]));
  }
}), Rl = /* @__PURE__ */ E({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  setup(e) {
    const t = e, n = k(() => {
      const { class: r, ...a } = t;
      return a;
    }), o = rt(n);
    return (r, a) => (x(), O(u(qs), L(u(o), {
      class: u(ne)("px-2 py-1.5 text-sm font-semibold", r.inset && "pl-8", t.class)
    }), {
      default: C(() => [
        A(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), $l = /* @__PURE__ */ E({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const r = J(e, t);
    return (a, s) => (x(), O(u(Qs), K(U(u(r))), {
      default: C(() => [
        A(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Il = /* @__PURE__ */ E({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = k(() => {
      const { class: r, ...a } = t;
      return a;
    }), o = rt(n);
    return (r, a) => (x(), O(u(ti), L(u(o), {
      class: u(ne)(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
        t.class
      )
    }), {
      default: C(() => [
        A(r.$slots, "default"),
        G(u(nl), { class: "ml-auto h-4 w-4" })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ll = /* @__PURE__ */ E({
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
    const n = e, o = t, r = k(() => {
      const { class: s, ...i } = n;
      return i;
    }), a = J(r, o);
    return (s, i) => (x(), O(u(ei), L(u(a), {
      class: u(ne)(
        "z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
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
  Ol as DropdownMenu,
  Ml as DropdownMenuCheckboxItem,
  Pl as DropdownMenuContent,
  Tl as DropdownMenuGroup,
  Sl as DropdownMenuItem,
  Rl as DropdownMenuLabel,
  Gs as DropdownMenuPortal,
  Al as DropdownMenuRadioGroup,
  Bl as DropdownMenuRadioItem,
  Dl as DropdownMenuSeparator,
  kl as DropdownMenuShortcut,
  $l as DropdownMenuSub,
  Ll as DropdownMenuSubContent,
  Il as DropdownMenuSubTrigger,
  El as DropdownMenuTrigger,
  _l as Notifications,
  Cl as theme
};
