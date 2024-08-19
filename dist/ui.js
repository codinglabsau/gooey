import { ref as A, computed as $, defineComponent as O, openBlock as h, createBlock as S, unref as d, withCtx as P, createElementBlock as W, Fragment as ue, renderList as Ye, mergeProps as z, createElementVNode as oe, resolveDynamicComponent as Ee, normalizeClass as Ot, createCommentVNode as Y, createTextVNode as we, toDisplayString as de, isVNode as Nt, createVNode as ee, Comment as $t, cloneVNode as It, h as ne, toRefs as Ie, getCurrentInstance as pe, reactive as Rt, watch as L, watchEffect as Re, markRaw as Lt, renderSlot as I, onMounted as xe, normalizeStyle as zt, normalizeProps as Le, guardReactiveProps as ze, effectScope as Dt, nextTick as st, toHandlerKey as jt, camelize as it, toRef as Vt, onUnmounted as De, Teleport as Bt, withModifiers as Ft, inject as lt, provide as ct, readonly as ut, onBeforeUpdate as Gt, onUpdated as Ut, getCurrentScope as Wt, onScopeDispose as Kt } from "vue";
const qt = 3, Ht = 1e6, K = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST"
};
let Se = 0;
function Yt() {
  return Se = (Se + 1) % Number.MAX_VALUE, Se.toString();
}
const Ae = /* @__PURE__ */ new Map();
function Je(e) {
  if (Ae.has(e))
    return;
  const t = setTimeout(() => {
    Ae.delete(e), fe({
      type: K.REMOVE_TOAST,
      toastId: e
    });
  }, Ht);
  Ae.set(e, t);
}
const j = A({
  toasts: []
});
function fe(e) {
  switch (e.type) {
    case K.ADD_TOAST:
      j.value.toasts = [e.toast, ...j.value.toasts].slice(0, qt);
      break;
    case K.UPDATE_TOAST:
      j.value.toasts = j.value.toasts.map(
        (t) => t.id === e.toast.id ? { ...t, ...e.toast } : t
      );
      break;
    case K.DISMISS_TOAST: {
      const { toastId: t } = e;
      t ? Je(t) : j.value.toasts.forEach((r) => {
        Je(r.id);
      }), j.value.toasts = j.value.toasts.map(
        (r) => r.id === t || t === void 0 ? {
          ...r,
          open: !1
        } : r
      );
      break;
    }
    case K.REMOVE_TOAST:
      e.toastId === void 0 ? j.value.toasts = [] : j.value.toasts = j.value.toasts.filter((t) => t.id !== e.toastId);
      break;
  }
}
function dt() {
  return {
    toasts: $(() => j.value.toasts),
    toast: Jt,
    dismiss: (e) => fe({ type: K.DISMISS_TOAST, toastId: e })
  };
}
function Jt(e) {
  const t = Yt(), r = (o) => fe({
    type: K.UPDATE_TOAST,
    toast: { ...o, id: t }
  }), n = () => fe({ type: K.DISMISS_TOAST, toastId: t });
  return fe({
    type: K.ADD_TOAST,
    toast: {
      ...e,
      id: t,
      open: !0,
      onOpenChange: (o) => {
        o || n();
      }
    }
  }), {
    id: t,
    dismiss: n,
    update: r
  };
}
const Zt = { class: "flex items-start space-x-3" }, Xt = { class: "grid gap-1" }, Qt = /* @__PURE__ */ O({
  __name: "Toaster",
  setup(e) {
    const { toasts: t } = dt();
    return (r, n) => (h(), S(d(En), null, {
      default: P(() => [
        (h(!0), W(ue, null, Ye(d(t), (o) => (h(), S(d(wn), z({
          key: o.id,
          ref_for: !0
        }, o), {
          default: P(() => [
            oe("div", Zt, [
              o.icon ? (h(), S(Ee(o.icon), {
                key: 0,
                class: Ot(["h-6 w-6", o.iconClasses])
              }, null, 8, ["class"])) : Y("", !0),
              oe("div", Xt, [
                o.title ? (h(), S(d(Cn), { key: 0 }, {
                  default: P(() => [
                    we(de(o.title), 1)
                  ]),
                  _: 2
                }, 1024)) : Y("", !0),
                o.description ? (h(), W(ue, { key: 1 }, [
                  Nt(o.description) ? (h(), S(d(rt), { key: 0 }, {
                    default: P(() => [
                      (h(), S(Ee(o.description)))
                    ]),
                    _: 2
                  }, 1024)) : (h(), S(d(rt), { key: 1 }, {
                    default: P(() => [
                      we(de(o.description), 1)
                    ]),
                    _: 2
                  }, 1024))
                ], 64)) : Y("", !0),
                o.messages ? (h(!0), W(ue, { key: 2 }, Ye(o.messages, (a, s) => (h(), W("p", {
                  key: s,
                  class: "text-sm opacity-90"
                }, de(a), 1))), 128)) : Y("", !0),
                ee(d(Tn))
              ])
            ]),
            (h(), S(Ee(o.action)))
          ]),
          _: 2
        }, 1040))), 128)),
        ee(d(xn))
      ]),
      _: 1
    }));
  }
});
function je(e, t) {
  const r = typeof e == "string" && !t ? `${e}Context` : t, n = Symbol(r);
  return [(o) => {
    const a = lt(n, o);
    if (a || a === null)
      return a;
    throw new Error(
      `Injection \`${n.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (o) => (ct(n, o), o)];
}
function Ve(e) {
  return Wt() ? (Kt(e), !0) : !1;
}
function er(e) {
  let t = !1, r;
  const n = Dt(!0);
  return (...o) => (t || (r = n.run(() => e(...o)), t = !0), r);
}
function _e(e) {
  return typeof e == "function" ? e() : d(e);
}
const Be = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const tr = (e) => typeof e < "u", rr = Object.prototype.toString, nr = (e) => rr.call(e) === "[object Object]", ft = () => {
};
function or(e, t, r = {}) {
  const {
    immediate: n = !0
  } = r, o = A(!1);
  let a = null;
  function s() {
    a && (clearTimeout(a), a = null);
  }
  function i() {
    o.value = !1, s();
  }
  function l(...c) {
    s(), o.value = !0, a = setTimeout(() => {
      o.value = !1, a = null, e(...c);
    }, _e(t));
  }
  return n && (o.value = !0, Be && l()), Ve(i), {
    isPending: ut(o),
    start: l,
    stop: i
  };
}
function ar(e = 1e3, t = {}) {
  const {
    controls: r = !1,
    callback: n
  } = t, o = or(
    n != null ? n : ft,
    e,
    t
  ), a = $(() => !o.isPending.value);
  return r ? {
    ready: a,
    ...o
  } : a;
}
function te(e) {
  var t;
  const r = _e(e);
  return (t = r == null ? void 0 : r.$el) != null ? t : r;
}
const Fe = Be ? window : void 0;
function sr(...e) {
  let t, r, n, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([r, n, o] = e, t = Fe) : [t, r, n, o] = e, !t)
    return ft;
  Array.isArray(r) || (r = [r]), Array.isArray(n) || (n = [n]);
  const a = [], s = () => {
    a.forEach((u) => u()), a.length = 0;
  }, i = (u, f, p, m) => (u.addEventListener(f, p, m), () => u.removeEventListener(f, p, m)), l = L(
    () => [te(t), _e(o)],
    ([u, f]) => {
      if (s(), !u)
        return;
      const p = nr(f) ? { ...f } : f;
      a.push(
        ...r.flatMap((m) => n.map((w) => i(u, m, w, p)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    l(), s();
  };
  return Ve(c), c;
}
function ir(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function pt(...e) {
  let t, r, n = {};
  e.length === 3 ? (t = e[0], r = e[1], n = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, r = e[0], n = e[1]) : (t = e[0], r = e[1]) : (t = !0, r = e[0]);
  const {
    target: o = Fe,
    eventName: a = "keydown",
    passive: s = !1,
    dedupe: i = !1
  } = n, l = ir(t);
  return sr(o, a, (c) => {
    c.repeat && _e(i) || l(c) && r(c);
  }, s);
}
function mt(e, t = {}) {
  const {
    immediate: r = !0,
    fpsLimit: n = void 0,
    window: o = Fe
  } = t, a = A(!1), s = n ? 1e3 / n : null;
  let i = 0, l = null;
  function c(p) {
    if (!a.value || !o)
      return;
    i || (i = p);
    const m = p - i;
    if (s && m < s) {
      l = o.requestAnimationFrame(c);
      return;
    }
    i = p, e({ delta: m, timestamp: p }), l = o.requestAnimationFrame(c);
  }
  function u() {
    !a.value && o && (a.value = !0, i = 0, l = o.requestAnimationFrame(c));
  }
  function f() {
    a.value = !1, l != null && o && (o.cancelAnimationFrame(l), l = null);
  }
  return r && u(), Ve(f), {
    isActive: ut(a),
    pause: f,
    resume: u
  };
}
function lr(e) {
  return JSON.parse(JSON.stringify(e));
}
function cr(e, t, r, n = {}) {
  var o, a, s;
  const {
    clone: i = !1,
    passive: l = !1,
    eventName: c,
    deep: u = !1,
    defaultValue: f,
    shouldEmit: p
  } = n, m = pe(), w = r || (m == null ? void 0 : m.emit) || ((o = m == null ? void 0 : m.$emit) == null ? void 0 : o.bind(m)) || ((s = (a = m == null ? void 0 : m.proxy) == null ? void 0 : a.$emit) == null ? void 0 : s.bind(m == null ? void 0 : m.proxy));
  let v = c;
  t || (t = "modelValue"), v = v || `update:${t.toString()}`;
  const b = (x) => i ? typeof i == "function" ? i(x) : lr(x) : x, _ = () => tr(e[t]) ? b(e[t]) : f, y = (x) => {
    p ? p(x) && w(v, x) : w(v, x);
  };
  if (l) {
    const x = _(), E = A(x);
    let T = !1;
    return L(
      () => e[t],
      (N) => {
        T || (T = !0, E.value = b(N), st(() => T = !1));
      }
    ), L(
      E,
      (N) => {
        !T && (N !== e[t] || u) && y(N);
      },
      { deep: u }
    ), E;
  } else
    return $({
      get() {
        return _();
      },
      set(x) {
        y(x);
      }
    });
}
function Ge(e) {
  return e ? e.flatMap((t) => t.type === ue ? Ge(t.children) : [t]) : [];
}
const ur = "data-radix-vue-collection-item";
function dr(e, t = ur) {
  const r = e != null ? e : Symbol();
  return { createCollection: (n) => {
    const o = A([]);
    function a() {
      const s = te(n);
      return s ? o.value = Array.from(
        s.querySelectorAll(`[${t}]:not([data-disabled])`)
      ) : o.value = [];
    }
    return Gt(() => {
      o.value = [];
    }), xe(a), Ut(a), L(() => n == null ? void 0 : n.value, a, { immediate: !0 }), ct(r, o), o;
  }, injectCollection: () => lt(r, A([])) };
}
function fr(e) {
  const t = pe(), r = t == null ? void 0 : t.type.emits, n = {};
  return r != null && r.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), r == null || r.forEach((o) => {
    n[jt(it(o))] = (...a) => e(o, ...a);
  }), n;
}
function pr(e) {
  var o;
  const t = pe(), r = Object.keys((o = t == null ? void 0 : t.type.props) != null ? o : {}).reduce((a, s) => {
    const i = (t == null ? void 0 : t.type.props[s]).default;
    return i !== void 0 && (a[s] = i), a;
  }, {}), n = Vt(e);
  return $(() => {
    var i;
    const a = {}, s = (i = t == null ? void 0 : t.vnode.props) != null ? i : {};
    return Object.keys(s).forEach((l) => {
      a[it(l)] = s[l];
    }), Object.keys({ ...r, ...a }).reduce((l, c) => (n.value[c] !== void 0 && (l[c] = n.value[c]), l), {});
  });
}
function mr(e, t) {
  const r = pr(e), n = t ? fr(t) : {};
  return $(() => ({
    ...r.value,
    ...n
  }));
}
function J() {
  const e = pe(), t = A(), r = $(() => {
    var s, i;
    return ["#text", "#comment"].includes((s = t.value) == null ? void 0 : s.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : te(t);
  }), n = Object.assign({}, e.exposed), o = {};
  for (const s in e.props)
    Object.defineProperty(o, s, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[s]
    });
  if (Object.keys(n).length > 0)
    for (const s in n)
      Object.defineProperty(o, s, {
        enumerable: !0,
        configurable: !0,
        get: () => n[s]
      });
  Object.defineProperty(o, "$el", {
    enumerable: !0,
    configurable: !0,
    get: () => e.vnode.el
  }), e.exposed = o;
  function a(s) {
    t.value = s, !(s instanceof Element || !s) && (Object.defineProperty(o, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => s.$el
    }), e.exposed = o);
  }
  return { forwardRef: a, currentRef: t, currentElement: r };
}
function vr(e, t) {
  const r = A(e);
  function n(o) {
    var a;
    return (a = t[r.value][o]) != null ? a : r.value;
  }
  return {
    state: r,
    dispatch: (o) => {
      r.value = n(o);
    }
  };
}
const Ue = O({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: r }) {
    return () => {
      var n, o;
      if (!r.default)
        return null;
      const a = Ge(r.default()), s = a.findIndex((u) => u.type !== $t);
      if (s === -1)
        return a;
      const i = a[s];
      (n = i.props) == null || delete n.ref;
      const l = i.props ? z(t, i.props) : t;
      t.class && (o = i.props) != null && o.class && delete i.props.class;
      const c = It(i, l);
      for (const u in l)
        u.startsWith("on") && (c.props || (c.props = {}), c.props[u] = l[u]);
      return a.length === 1 ? c : (a[s] = c, a);
    };
  }
}), Z = O({
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
  setup(e, { attrs: t, slots: r }) {
    const n = e.asChild ? "template" : e.as;
    return typeof n == "string" && ["area", "img", "input"].includes(n) ? () => ne(n, t) : n !== "template" ? () => ne(e.as, t, { default: r.default }) : () => ne(Ue, t, { default: r.default });
  }
});
function vt() {
  const e = A(), t = $(() => {
    var r, n;
    return ["#text", "#comment"].includes((r = e.value) == null ? void 0 : r.$el.nodeName) ? (n = e.value) == null ? void 0 : n.$el.nextElementSibling : te(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
function br(e, t) {
  const r = A({}), n = A("none"), o = e.value ? "mounted" : "unmounted", { state: a, dispatch: s } = vr(o, {
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
    if (Be) {
      const w = new CustomEvent(p, { bubbles: !1, cancelable: !1 });
      (m = t.value) == null || m.dispatchEvent(w);
    }
  };
  L(
    e,
    async (p, m) => {
      var w;
      const v = m !== p;
      if (await st(), v) {
        const b = n.value, _ = ge(t.value);
        p ? (s("MOUNT"), i("enter"), _ === "none" && i("after-enter")) : _ === "none" || ((w = r.value) == null ? void 0 : w.display) === "none" ? (s("UNMOUNT"), i("leave"), i("after-leave")) : m && b !== _ ? (s("ANIMATION_OUT"), i("leave")) : (s("UNMOUNT"), i("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const l = (p) => {
    const m = ge(t.value), w = m.includes(
      p.animationName
    ), v = a.value === "mounted" ? "enter" : "leave";
    p.target === t.value && w && (i(`after-${v}`), s("ANIMATION_END")), p.target === t.value && m === "none" && s("ANIMATION_END");
  }, c = (p) => {
    p.target === t.value && (n.value = ge(t.value));
  }, u = L(
    t,
    (p, m) => {
      p ? (r.value = getComputedStyle(p), p.addEventListener("animationstart", c), p.addEventListener("animationcancel", l), p.addEventListener("animationend", l)) : (s("ANIMATION_END"), m == null || m.removeEventListener("animationstart", c), m == null || m.removeEventListener("animationcancel", l), m == null || m.removeEventListener("animationend", l));
    },
    { immediate: !0 }
  ), f = L(a, () => {
    const p = ge(t.value);
    n.value = a.value === "mounted" ? p : "none";
  });
  return De(() => {
    u(), f();
  }), {
    isPresent: $(
      () => ["mounted", "unmountSuspended"].includes(a.value)
    )
  };
}
function ge(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const gr = O({
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
  setup(e, { slots: t, expose: r }) {
    var n;
    const { present: o, forceMount: a } = Ie(e), s = A(), { isPresent: i } = br(o, s);
    r({ present: i });
    let l = t.default({ present: i });
    l = Ge(l || []);
    const c = pe();
    if (l && (l == null ? void 0 : l.length) > 1) {
      const u = (n = c == null ? void 0 : c.parent) != null && n.type.name ? `<${c.parent.type.name} />` : "component";
      throw new Error(
        [
          `Detected an invalid children for \`${u}\` for  \`Presence\` component.`,
          "",
          "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",
          "You can apply a few solutions:",
          [
            "Provide a single child element so that `presence` directive attach correctly.",
            "Ensure the first child is an actual element instead of a raw text node or comment node."
          ].map((f) => `  - ${f}`).join(`
`)
        ].join(`
`)
      );
    }
    return () => a.value || o.value || i.value ? ne(t.default({ present: i })[0], {
      ref: (u) => {
        const f = te(u);
        return typeof (f == null ? void 0 : f.hasAttribute) > "u" || (f != null && f.hasAttribute("data-radix-popper-content-wrapper") ? s.value = f.firstElementChild : s.value = f), f;
      }
    }) : null;
  }
}), Ze = Rt({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), hr = /* @__PURE__ */ O({
  __name: "DismissableLayerBranch",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: r, currentElement: n } = J();
    return xe(() => {
      Ze.branches.add(n.value);
    }), De(() => {
      Ze.branches.delete(n.value);
    }), (o, a) => (h(), S(d(Z), z({ ref: d(r) }, t), {
      default: P(() => [
        I(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function ke(e, { select: t = !1 } = {}) {
  const r = document.activeElement;
  for (const n of e)
    if (xr(n, { select: t }), document.activeElement !== r)
      return !0;
}
function yr(e) {
  const t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); )
    t.push(r.currentNode);
  return t;
}
function wr(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function xr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const r = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== r && wr(e) && t && e.select();
  }
}
er(() => A([]));
const bt = /* @__PURE__ */ O({
  __name: "VisuallyHidden",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return J(), (t, r) => (h(), S(d(Z), {
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
      default: P(() => [
        I(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), [gt, Rn] = je("CollectionProvider");
O({
  name: "CollectionSlot",
  setup(e, { slots: t }) {
    const r = gt(), { primitiveElement: n, currentElement: o } = vt();
    return L(o, () => {
      r.collectionRef.value = o.value;
    }), () => ne(Ue, { ref: n }, t);
  }
});
O({
  name: "CollectionItem",
  inheritAttrs: !1,
  props: {
    value: {
      validator: () => !0
    }
  },
  setup(e, { slots: t, attrs: r }) {
    const n = gt(), { primitiveElement: o, currentElement: a } = vt();
    return Re((s) => {
      if (a.value) {
        const i = Lt(a.value);
        n.itemMap.value.set(i, { ref: a.value, value: e.value }), s(() => n.itemMap.value.delete(i));
      }
    }), () => ne(Ue, { ...r, [n.attrName]: "", ref: o }, t);
  }
});
function _r() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
_r();
const [Te, Tr] = je("ToastProvider"), Cr = /* @__PURE__ */ O({
  __name: "ToastProvider",
  props: {
    label: { default: "Notification" },
    duration: { default: 5e3 },
    swipeDirection: { default: "right" },
    swipeThreshold: { default: 50 }
  },
  setup(e) {
    const t = e, { label: r, duration: n, swipeDirection: o, swipeThreshold: a } = Ie(t), s = A(), i = A(0), l = A(!1), c = A(!1);
    if (t.label && typeof t.label == "string" && !t.label.trim()) {
      const u = "Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`.";
      throw new Error(u);
    }
    return Tr({
      label: r,
      duration: n,
      swipeDirection: o,
      swipeThreshold: a,
      toastCount: i,
      viewport: s,
      onViewportChange(u) {
        s.value = u;
      },
      onToastAdd() {
        i.value++;
      },
      onToastRemove() {
        i.value--;
      },
      isFocusedToastEscapeKeyDownRef: l,
      isClosePausedRef: c
    }), (u, f) => I(u.$slots, "default");
  }
}), Er = "toast.swipeStart", Sr = "toast.swipeMove", Ar = "toast.swipeCancel", kr = "toast.swipeEnd", Oe = "toast.viewportPause", Ne = "toast.viewportResume";
function he(e, t, r) {
  const n = r.originalEvent.currentTarget, o = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: r
  });
  t && n.addEventListener(e, t, { once: !0 }), n.dispatchEvent(o);
}
function Xe(e, t, r = 0) {
  const n = Math.abs(e.x), o = Math.abs(e.y), a = n > o;
  return t === "left" || t === "right" ? a && n > r : !a && o > r;
}
function Mr(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function ht(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((r) => {
    if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), Mr(r)) {
      const n = r.ariaHidden || r.hidden || r.style.display === "none", o = r.dataset.radixToastAnnounceExclude === "";
      if (!n)
        if (o) {
          const a = r.dataset.radixToastAnnounceAlt;
          a && t.push(a);
        } else
          t.push(...ht(r));
    }
  }), t;
}
const Pr = /* @__PURE__ */ O({
  __name: "ToastAnnounce",
  setup(e) {
    const t = Te(), r = ar(1e3), n = A(!1);
    return mt(() => {
      n.value = !0;
    }), (o, a) => d(r) || n.value ? (h(), S(d(bt), { key: 0 }, {
      default: P(() => [
        we(de(d(t).label.value) + " ", 1),
        I(o.$slots, "default")
      ]),
      _: 3
    })) : Y("", !0);
  }
}), [Or, Nr] = je("ToastRoot"), $r = /* @__PURE__ */ O({
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
    const r = e, n = t, { forwardRef: o, currentElement: a } = J(), s = Te(), i = A(null), l = A(null), c = $(() => r.duration || s.duration.value), u = A(0), f = A(c.value), p = A(0), m = A(c.value), w = mt(() => {
      const y = (/* @__PURE__ */ new Date()).getTime() - u.value;
      m.value = Math.max(f.value - y, 0);
    }, { fpsLimit: 60 });
    function v(y) {
      !y || y === Number.POSITIVE_INFINITY || (window.clearTimeout(p.value), u.value = (/* @__PURE__ */ new Date()).getTime(), p.value = window.setTimeout(b, y));
    }
    function b() {
      var y, x;
      (y = a.value) != null && y.contains(document.activeElement) && ((x = s.viewport.value) == null || x.focus()), s.isClosePausedRef.value = !1, n("close");
    }
    const _ = $(() => a.value ? ht(a.value) : null);
    if (r.type && !["foreground", "background"].includes(r.type)) {
      const y = "Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.";
      throw new Error(y);
    }
    return Re((y) => {
      const x = s.viewport.value;
      if (x) {
        const E = () => {
          v(f.value), w.resume(), n("resume");
        }, T = () => {
          const N = (/* @__PURE__ */ new Date()).getTime() - u.value;
          f.value = f.value - N, window.clearTimeout(p.value), w.pause(), n("pause");
        };
        return x.addEventListener(Oe, T), x.addEventListener(Ne, E), () => {
          x.removeEventListener(Oe, T), x.removeEventListener(Ne, E);
        };
      }
    }), L(() => [r.open, c.value], () => {
      f.value = c.value, r.open && !s.isClosePausedRef.value && v(c.value);
    }, { immediate: !0 }), pt("Escape", (y) => {
      n("escapeKeyDown", y), y.defaultPrevented || (s.isFocusedToastEscapeKeyDownRef.value = !0, b());
    }), xe(() => {
      s.onToastAdd();
    }), De(() => {
      s.onToastRemove();
    }), Nr({ onClose: b }), (y, x) => (h(), W(ue, null, [
      _.value ? (h(), S(Pr, {
        key: 0,
        role: "status",
        "aria-live": y.type === "foreground" ? "assertive" : "polite",
        "aria-atomic": ""
      }, {
        default: P(() => [
          we(de(_.value), 1)
        ]),
        _: 1
      }, 8, ["aria-live"])) : Y("", !0),
      (h(), S(Bt, {
        to: d(s).viewport.value
      }, [
        ee(d(Z), z({
          ref: d(o),
          role: "status",
          "aria-live": "off",
          "aria-atomic": "",
          tabindex: "0",
          "data-radix-vue-collection-item": ""
        }, y.$attrs, {
          as: y.as,
          "as-child": y.asChild,
          "data-state": y.open ? "open" : "closed",
          "data-swipe-direction": d(s).swipeDirection.value,
          style: { userSelect: "none", touchAction: "none" },
          onPointerdown: x[0] || (x[0] = Ft((E) => {
            i.value = { x: E.clientX, y: E.clientY };
          }, ["left"])),
          onPointermove: x[1] || (x[1] = (E) => {
            if (!i.value)
              return;
            const T = E.clientX - i.value.x, N = E.clientY - i.value.y, V = !!l.value, D = ["left", "right"].includes(d(s).swipeDirection.value), R = ["left", "up"].includes(d(s).swipeDirection.value) ? Math.min : Math.max, X = D ? R(0, T) : 0, B = D ? 0 : R(0, N), C = E.pointerType === "touch" ? 10 : 2, F = { x: X, y: B }, G = { originalEvent: E, delta: F };
            V ? (l.value = F, d(he)(d(Sr), (re) => n("swipeMove", re), G)) : d(Xe)(F, d(s).swipeDirection.value, C) ? (l.value = F, d(he)(d(Er), (re) => n("swipeStart", re), G), E.target.setPointerCapture(E.pointerId)) : (Math.abs(T) > C || Math.abs(N) > C) && (i.value = null);
          }),
          onPointerup: x[2] || (x[2] = (E) => {
            const T = l.value, N = E.target;
            if (N.hasPointerCapture(E.pointerId) && N.releasePointerCapture(E.pointerId), l.value = null, i.value = null, T) {
              const V = E.currentTarget, D = { originalEvent: E, delta: T };
              d(Xe)(T, d(s).swipeDirection.value, d(s).swipeThreshold.value) ? d(he)(d(kr), (R) => n("swipeEnd", R), D) : d(he)(d(Ar), (R) => n("swipeCancel", R), D), V == null || V.addEventListener("click", (R) => R.preventDefault(), {
                once: !0
              });
            }
          })
        }), {
          default: P(() => [
            I(y.$slots, "default", {
              remaining: m.value,
              duration: c.value
            })
          ]),
          _: 3
        }, 16, ["as", "as-child", "data-state", "data-swipe-direction"])
      ], 8, ["to"]))
    ], 64));
  }
}), Ir = /* @__PURE__ */ O({
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
    const r = e, n = t, { forwardRef: o } = J(), a = cr(r, "open", n, {
      defaultValue: r.defaultOpen,
      passive: r.open === void 0
    });
    return (s, i) => (h(), S(d(gr), {
      present: s.forceMount || d(a)
    }, {
      default: P(() => [
        ee($r, z({
          ref: d(o),
          open: d(a),
          type: s.type,
          as: s.as,
          "as-child": s.asChild,
          duration: s.duration
        }, s.$attrs, {
          onClose: i[0] || (i[0] = (l) => a.value = !1),
          onPause: i[1] || (i[1] = (l) => n("pause")),
          onResume: i[2] || (i[2] = (l) => n("resume")),
          onEscapeKeyDown: i[3] || (i[3] = (l) => n("escapeKeyDown", l)),
          onSwipeStart: i[4] || (i[4] = (l) => {
            n("swipeStart", l), l.currentTarget.setAttribute("data-swipe", "start");
          }),
          onSwipeMove: i[5] || (i[5] = (l) => {
            const { x: c, y: u } = l.detail.delta, f = l.currentTarget;
            f.setAttribute("data-swipe", "move"), f.style.setProperty("--radix-toast-swipe-move-x", `${c}px`), f.style.setProperty("--radix-toast-swipe-move-y", `${u}px`);
          }),
          onSwipeCancel: i[6] || (i[6] = (l) => {
            const c = l.currentTarget;
            c.setAttribute("data-swipe", "cancel"), c.style.removeProperty("--radix-toast-swipe-move-x"), c.style.removeProperty("--radix-toast-swipe-move-y"), c.style.removeProperty("--radix-toast-swipe-end-x"), c.style.removeProperty("--radix-toast-swipe-end-y");
          }),
          onSwipeEnd: i[7] || (i[7] = (l) => {
            const { x: c, y: u } = l.detail.delta, f = l.currentTarget;
            f.setAttribute("data-swipe", "end"), f.style.removeProperty("--radix-toast-swipe-move-x"), f.style.removeProperty("--radix-toast-swipe-move-y"), f.style.setProperty("--radix-toast-swipe-end-x", `${c}px`), f.style.setProperty("--radix-toast-swipe-end-y", `${u}px`), a.value = !1;
          })
        }), {
          default: P(({ remaining: l, duration: c }) => [
            I(s.$slots, "default", {
              remaining: l,
              duration: c,
              open: d(a)
            })
          ]),
          _: 3
        }, 16, ["open", "type", "as", "as-child", "duration"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Rr = /* @__PURE__ */ O({
  __name: "ToastAnnounceExclude",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    return (t, r) => (h(), S(d(Z), {
      as: t.as,
      "as-child": t.asChild,
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": t.altText || void 0
    }, {
      default: P(() => [
        I(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-radix-toast-announce-alt"]));
  }
}), Lr = /* @__PURE__ */ O({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, r = Or(), { forwardRef: n } = J();
    return (o, a) => (h(), S(Rr, { "as-child": "" }, {
      default: P(() => [
        ee(d(Z), z(t, {
          ref: d(n),
          type: o.as === "button" ? "button" : void 0,
          onClick: a[0] || (a[0] = (s) => d(r).onClose())
        }), {
          default: P(() => [
            I(o.$slots, "default")
          ]),
          _: 3
        }, 16, ["type"])
      ]),
      _: 3
    }));
  }
}), Qe = /* @__PURE__ */ O({
  __name: "FocusProxy",
  emits: ["focusFromOutsideViewport"],
  setup(e, { emit: t }) {
    const r = t, n = Te();
    return (o, a) => (h(), S(d(bt), {
      "aria-hidden": "",
      tabindex: "0",
      style: { position: "fixed" },
      onFocus: a[0] || (a[0] = (s) => {
        var i;
        const l = s.relatedTarget;
        !((i = d(n).viewport.value) != null && i.contains(l)) && r("focusFromOutsideViewport");
      })
    }, {
      default: P(() => [
        I(o.$slots, "default")
      ]),
      _: 3
    }));
  }
}), zr = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "ToastViewport",
  props: {
    hotkey: { default: () => ["F8"] },
    label: { type: [String, Function], default: "Notifications ({hotkey})" },
    asChild: { type: Boolean },
    as: { default: "ol" }
  },
  setup(e) {
    const t = e, { hotkey: r, label: n } = Ie(t), { forwardRef: o, currentElement: a } = J(), { createCollection: s } = dr(), i = s(a), l = Te(), c = $(() => l.toastCount.value > 0), u = A(), f = A(), p = $(() => r.value.join("+").replace(/Key/g, "").replace(/Digit/g, ""));
    pt(r.value, () => {
      a.value.focus();
    }), xe(() => {
      l.onViewportChange(a.value);
    }), Re((w) => {
      const v = a.value;
      if (c.value && v) {
        const b = () => {
          if (!l.isClosePausedRef.value) {
            const T = new CustomEvent(Oe);
            v.dispatchEvent(T), l.isClosePausedRef.value = !0;
          }
        }, _ = () => {
          if (l.isClosePausedRef.value) {
            const T = new CustomEvent(Ne);
            v.dispatchEvent(T), l.isClosePausedRef.value = !1;
          }
        }, y = (T) => {
          !v.contains(T.relatedTarget) && _();
        }, x = () => {
          v.contains(document.activeElement) || _();
        }, E = (T) => {
          var N, V, D;
          const R = T.altKey || T.ctrlKey || T.metaKey;
          if (T.key === "Tab" && !R) {
            const X = document.activeElement, B = T.shiftKey;
            if (T.target === v && B) {
              (N = u.value) == null || N.focus();
              return;
            }
            const C = m({ tabbingDirection: B ? "backwards" : "forwards" }), F = C.findIndex((G) => G === X);
            ke(C.slice(F + 1)) ? T.preventDefault() : B ? (V = u.value) == null || V.focus() : (D = f.value) == null || D.focus();
          }
        };
        v.addEventListener("focusin", b), v.addEventListener("focusout", y), v.addEventListener("pointermove", b), v.addEventListener("pointerleave", x), v.addEventListener("keydown", E), window.addEventListener("blur", b), window.addEventListener("focus", _), w(() => {
          v.removeEventListener("focusin", b), v.removeEventListener("focusout", y), v.removeEventListener("pointermove", b), v.removeEventListener("pointerleave", x), v.removeEventListener("keydown", E), window.removeEventListener("blur", b), window.removeEventListener("focus", _);
        });
      }
    });
    function m({ tabbingDirection: w }) {
      const v = i.value.map((b) => {
        const _ = [b, ...yr(b)];
        return w === "forwards" ? _ : _.reverse();
      });
      return (w === "forwards" ? v.reverse() : v).flat();
    }
    return (w, v) => (h(), S(d(hr), {
      role: "region",
      "aria-label": typeof d(n) == "string" ? d(n).replace("{hotkey}", p.value) : d(n)(p.value),
      tabindex: "-1",
      style: zt({
        pointerEvents: c.value ? void 0 : "none"
      })
    }, {
      default: P(() => [
        c.value ? (h(), S(Qe, {
          key: 0,
          ref: (b) => {
            u.value = d(te)(b);
          },
          onFocusFromOutsideViewport: v[0] || (v[0] = () => {
            const b = m({
              tabbingDirection: "forwards"
            });
            d(ke)(b);
          })
        }, null, 512)) : Y("", !0),
        ee(d(Z), z({
          ref: d(o),
          tabindex: "-1",
          as: w.as,
          "as-child": w.asChild
        }, w.$attrs), {
          default: P(() => [
            I(w.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child"]),
        c.value ? (h(), S(Qe, {
          key: 1,
          ref: (b) => {
            f.value = d(te)(b);
          },
          onFocusFromOutsideViewport: v[1] || (v[1] = () => {
            const b = m({
              tabbingDirection: "backwards"
            });
            d(ke)(b);
          })
        }, null, 512)) : Y("", !0)
      ]),
      _: 3
    }, 8, ["aria-label", "style"]));
  }
}), Dr = /* @__PURE__ */ O({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return J(), (r, n) => (h(), S(d(Z), Le(ze(t)), {
      default: P(() => [
        I(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), jr = /* @__PURE__ */ O({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return J(), (r, n) => (h(), S(d(Z), Le(ze(t)), {
      default: P(() => [
        I(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function yt(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (r = yt(e[t])) && (n && (n += " "), n += r);
    } else
      for (r in e)
        e[r] && (n && (n += " "), n += r);
  return n;
}
function Vr() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++)
    (e = arguments[r]) && (t = yt(e)) && (n && (n += " "), n += t);
  return n;
}
const We = "-";
function Br(e) {
  const t = Gr(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  function o(s) {
    const i = s.split(We);
    return i[0] === "" && i.length !== 1 && i.shift(), wt(i, t) || Fr(s);
  }
  function a(s, i) {
    const l = r[s] || [];
    return i && n[s] ? [...l, ...n[s]] : l;
  }
  return {
    getClassGroupId: o,
    getConflictingClassGroupIds: a
  };
}
function wt(e, t) {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), o = n ? wt(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const a = e.join(We);
  return (s = t.validators.find(({
    validator: i
  }) => i(a))) == null ? void 0 : s.classGroupId;
}
const et = /^\[(.+)\]$/;
function Fr(e) {
  if (et.test(e)) {
    const t = et.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}
function Gr(e) {
  const {
    theme: t,
    prefix: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Wr(Object.entries(e.classGroups), r).forEach(([a, s]) => {
    $e(s, n, a, t);
  }), n;
}
function $e(e, t, r, n) {
  e.forEach((o) => {
    if (typeof o == "string") {
      const a = o === "" ? t : tt(t, o);
      a.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (Ur(o)) {
        $e(o(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(([a, s]) => {
      $e(s, tt(t, a), r, n);
    });
  });
}
function tt(e, t) {
  let r = e;
  return t.split(We).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}
function Ur(e) {
  return e.isThemeGetter;
}
function Wr(e, t) {
  return t ? e.map(([r, n]) => {
    const o = n.map((a) => typeof a == "string" ? t + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map(([s, i]) => [t + s, i])) : a);
    return [r, o];
  }) : e;
}
function Kr(e) {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  function o(a, s) {
    r.set(a, s), t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ new Map());
  }
  return {
    get(a) {
      let s = r.get(a);
      if (s !== void 0)
        return s;
      if ((s = n.get(a)) !== void 0)
        return o(a, s), s;
    },
    set(a, s) {
      r.has(a) ? r.set(a, s) : o(a, s);
    }
  };
}
const xt = "!";
function qr(e) {
  const {
    separator: t,
    experimentalParseClassName: r
  } = e, n = t.length === 1, o = t[0], a = t.length;
  function s(i) {
    const l = [];
    let c = 0, u = 0, f;
    for (let b = 0; b < i.length; b++) {
      let _ = i[b];
      if (c === 0) {
        if (_ === o && (n || i.slice(b, b + a) === t)) {
          l.push(i.slice(u, b)), u = b + a;
          continue;
        }
        if (_ === "/") {
          f = b;
          continue;
        }
      }
      _ === "[" ? c++ : _ === "]" && c--;
    }
    const p = l.length === 0 ? i : i.substring(u), m = p.startsWith(xt), w = m ? p.substring(1) : p, v = f && f > u ? f - u : void 0;
    return {
      modifiers: l,
      hasImportantModifier: m,
      baseClassName: w,
      maybePostfixModifierPosition: v
    };
  }
  return r ? function(l) {
    return r({
      className: l,
      parseClassName: s
    });
  } : s;
}
function Hr(e) {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...r.sort(), n), r = []) : r.push(n);
  }), t.push(...r.sort()), t;
}
function Yr(e) {
  return {
    cache: Kr(e.cacheSize),
    parseClassName: qr(e),
    ...Br(e)
  };
}
const Jr = /\s+/;
function Zr(e, t) {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o
  } = t, a = /* @__PURE__ */ new Set();
  return e.trim().split(Jr).map((s) => {
    const {
      modifiers: i,
      hasImportantModifier: l,
      baseClassName: c,
      maybePostfixModifierPosition: u
    } = r(s);
    let f = Boolean(u), p = n(f ? c.substring(0, u) : c);
    if (!p) {
      if (!f)
        return {
          isTailwindClass: !1,
          originalClassName: s
        };
      if (p = n(c), !p)
        return {
          isTailwindClass: !1,
          originalClassName: s
        };
      f = !1;
    }
    const m = Hr(i).join(":");
    return {
      isTailwindClass: !0,
      modifierId: l ? m + xt : m,
      classGroupId: p,
      originalClassName: s,
      hasPostfixModifier: f
    };
  }).reverse().filter((s) => {
    if (!s.isTailwindClass)
      return !0;
    const {
      modifierId: i,
      classGroupId: l,
      hasPostfixModifier: c
    } = s, u = i + l;
    return a.has(u) ? !1 : (a.add(u), o(l, c).forEach((f) => a.add(i + f)), !0);
  }).reverse().map((s) => s.originalClassName).join(" ");
}
function Xr() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = _t(t)) && (n && (n += " "), n += r);
  return n;
}
function _t(e) {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = _t(e[n])) && (r && (r += " "), r += t);
  return r;
}
function Qr(e, ...t) {
  let r, n, o, a = s;
  function s(l) {
    const c = t.reduce((u, f) => f(u), e());
    return r = Yr(c), n = r.cache.get, o = r.cache.set, a = i, i(l);
  }
  function i(l) {
    const c = n(l);
    if (c)
      return c;
    const u = Zr(l, r);
    return o(l, u), u;
  }
  return function() {
    return a(Xr.apply(null, arguments));
  };
}
function k(e) {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}
const Tt = /^\[(?:([a-z-]+):)?(.+)\]$/i, en = /^\d+\/\d+$/, tn = /* @__PURE__ */ new Set(["px", "full", "screen"]), rn = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, nn = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, on = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, an = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, sn = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function U(e) {
  return Q(e) || tn.has(e) || en.test(e);
}
function q(e) {
  return ae(e, "length", vn);
}
function Q(e) {
  return Boolean(e) && !Number.isNaN(Number(e));
}
function ye(e) {
  return ae(e, "number", Q);
}
function le(e) {
  return Boolean(e) && Number.isInteger(Number(e));
}
function ln(e) {
  return e.endsWith("%") && Q(e.slice(0, -1));
}
function g(e) {
  return Tt.test(e);
}
function H(e) {
  return rn.test(e);
}
const cn = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function un(e) {
  return ae(e, cn, Ct);
}
function dn(e) {
  return ae(e, "position", Ct);
}
const fn = /* @__PURE__ */ new Set(["image", "url"]);
function pn(e) {
  return ae(e, fn, gn);
}
function mn(e) {
  return ae(e, "", bn);
}
function ce() {
  return !0;
}
function ae(e, t, r) {
  const n = Tt.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : r(n[2]) : !1;
}
function vn(e) {
  return nn.test(e) && !on.test(e);
}
function Ct() {
  return !1;
}
function bn(e) {
  return an.test(e);
}
function gn(e) {
  return sn.test(e);
}
function hn() {
  const e = k("colors"), t = k("spacing"), r = k("blur"), n = k("brightness"), o = k("borderColor"), a = k("borderRadius"), s = k("borderSpacing"), i = k("borderWidth"), l = k("contrast"), c = k("grayscale"), u = k("hueRotate"), f = k("invert"), p = k("gap"), m = k("gradientColorStops"), w = k("gradientColorStopPositions"), v = k("inset"), b = k("margin"), _ = k("opacity"), y = k("padding"), x = k("saturate"), E = k("scale"), T = k("sepia"), N = k("skew"), V = k("space"), D = k("translate"), R = () => ["auto", "contain", "none"], X = () => ["auto", "hidden", "clip", "visible", "scroll"], B = () => ["auto", g, t], C = () => [g, t], F = () => ["", U, q], G = () => ["auto", Q, g], re = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], ve = () => ["solid", "dashed", "dotted", "double", "none"], qe = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], Ce = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], se = () => ["", "0", g], He = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], ie = () => [Q, ye], be = () => [Q, g];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [ce],
      spacing: [U, q],
      blur: ["none", "", H, g],
      brightness: ie(),
      borderColor: [e],
      borderRadius: ["none", "", "full", H, g],
      borderSpacing: C(),
      borderWidth: F(),
      contrast: ie(),
      grayscale: se(),
      hueRotate: be(),
      invert: se(),
      gap: C(),
      gradientColorStops: [e],
      gradientColorStopPositions: [ln, q],
      inset: B(),
      margin: B(),
      opacity: ie(),
      padding: C(),
      saturate: ie(),
      scale: ie(),
      sepia: se(),
      skew: be(),
      space: C(),
      translate: C()
    },
    classGroups: {
      aspect: [{
        aspect: ["auto", "square", "video", g]
      }],
      container: ["container"],
      columns: [{
        columns: [H]
      }],
      "break-after": [{
        "break-after": He()
      }],
      "break-before": [{
        "break-before": He()
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
        object: [...re(), g]
      }],
      overflow: [{
        overflow: X()
      }],
      "overflow-x": [{
        "overflow-x": X()
      }],
      "overflow-y": [{
        "overflow-y": X()
      }],
      overscroll: [{
        overscroll: R()
      }],
      "overscroll-x": [{
        "overscroll-x": R()
      }],
      "overscroll-y": [{
        "overscroll-y": R()
      }],
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      inset: [{
        inset: [v]
      }],
      "inset-x": [{
        "inset-x": [v]
      }],
      "inset-y": [{
        "inset-y": [v]
      }],
      start: [{
        start: [v]
      }],
      end: [{
        end: [v]
      }],
      top: [{
        top: [v]
      }],
      right: [{
        right: [v]
      }],
      bottom: [{
        bottom: [v]
      }],
      left: [{
        left: [v]
      }],
      visibility: ["visible", "invisible", "collapse"],
      z: [{
        z: ["auto", le, g]
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
        flex: ["1", "auto", "initial", "none", g]
      }],
      grow: [{
        grow: se()
      }],
      shrink: [{
        shrink: se()
      }],
      order: [{
        order: ["first", "last", "none", le, g]
      }],
      "grid-cols": [{
        "grid-cols": [ce]
      }],
      "col-start-end": [{
        col: ["auto", {
          span: ["full", le, g]
        }, g]
      }],
      "col-start": [{
        "col-start": G()
      }],
      "col-end": [{
        "col-end": G()
      }],
      "grid-rows": [{
        "grid-rows": [ce]
      }],
      "row-start-end": [{
        row: ["auto", {
          span: [le, g]
        }, g]
      }],
      "row-start": [{
        "row-start": G()
      }],
      "row-end": [{
        "row-end": G()
      }],
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", g]
      }],
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", g]
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
        justify: ["normal", ...Ce()]
      }],
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      "align-content": [{
        content: ["normal", ...Ce(), "baseline"]
      }],
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      "place-content": [{
        "place-content": [...Ce(), "baseline"]
      }],
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      p: [{
        p: [y]
      }],
      px: [{
        px: [y]
      }],
      py: [{
        py: [y]
      }],
      ps: [{
        ps: [y]
      }],
      pe: [{
        pe: [y]
      }],
      pt: [{
        pt: [y]
      }],
      pr: [{
        pr: [y]
      }],
      pb: [{
        pb: [y]
      }],
      pl: [{
        pl: [y]
      }],
      m: [{
        m: [b]
      }],
      mx: [{
        mx: [b]
      }],
      my: [{
        my: [b]
      }],
      ms: [{
        ms: [b]
      }],
      me: [{
        me: [b]
      }],
      mt: [{
        mt: [b]
      }],
      mr: [{
        mr: [b]
      }],
      mb: [{
        mb: [b]
      }],
      ml: [{
        ml: [b]
      }],
      "space-x": [{
        "space-x": [V]
      }],
      "space-x-reverse": ["space-x-reverse"],
      "space-y": [{
        "space-y": [V]
      }],
      "space-y-reverse": ["space-y-reverse"],
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", g, t]
      }],
      "min-w": [{
        "min-w": [g, t, "min", "max", "fit"]
      }],
      "max-w": [{
        "max-w": [g, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [H]
        }, H]
      }],
      h: [{
        h: [g, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      "min-h": [{
        "min-h": [g, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      "max-h": [{
        "max-h": [g, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      size: [{
        size: [g, t, "auto", "min", "max", "fit"]
      }],
      "font-size": [{
        text: ["base", H, q]
      }],
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      "font-style": ["italic", "not-italic"],
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", ye]
      }],
      "font-family": [{
        font: [ce]
      }],
      "fvn-normal": ["normal-nums"],
      "fvn-ordinal": ["ordinal"],
      "fvn-slashed-zero": ["slashed-zero"],
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", g]
      }],
      "line-clamp": [{
        "line-clamp": ["none", Q, ye]
      }],
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", U, g]
      }],
      "list-image": [{
        "list-image": ["none", g]
      }],
      "list-style-type": [{
        list: ["none", "disc", "decimal", g]
      }],
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      "placeholder-color": [{
        placeholder: [e]
      }],
      "placeholder-opacity": [{
        "placeholder-opacity": [_]
      }],
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      "text-color": [{
        text: [e]
      }],
      "text-opacity": [{
        "text-opacity": [_]
      }],
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      "text-decoration-style": [{
        decoration: [...ve(), "wavy"]
      }],
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", U, q]
      }],
      "underline-offset": [{
        "underline-offset": ["auto", U, g]
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
        indent: C()
      }],
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", g]
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
        content: ["none", g]
      }],
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      "bg-opacity": [{
        "bg-opacity": [_]
      }],
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      "bg-position": [{
        bg: [...re(), dn]
      }],
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      "bg-size": [{
        bg: ["auto", "cover", "contain", un]
      }],
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, pn]
      }],
      "bg-color": [{
        bg: [e]
      }],
      "gradient-from-pos": [{
        from: [w]
      }],
      "gradient-via-pos": [{
        via: [w]
      }],
      "gradient-to-pos": [{
        to: [w]
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
        "border-opacity": [_]
      }],
      "border-style": [{
        border: [...ve(), "hidden"]
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
        "divide-opacity": [_]
      }],
      "divide-style": [{
        divide: ve()
      }],
      "border-color": [{
        border: [o]
      }],
      "border-color-x": [{
        "border-x": [o]
      }],
      "border-color-y": [{
        "border-y": [o]
      }],
      "border-color-t": [{
        "border-t": [o]
      }],
      "border-color-r": [{
        "border-r": [o]
      }],
      "border-color-b": [{
        "border-b": [o]
      }],
      "border-color-l": [{
        "border-l": [o]
      }],
      "divide-color": [{
        divide: [o]
      }],
      "outline-style": [{
        outline: ["", ...ve()]
      }],
      "outline-offset": [{
        "outline-offset": [U, g]
      }],
      "outline-w": [{
        outline: [U, q]
      }],
      "outline-color": [{
        outline: [e]
      }],
      "ring-w": [{
        ring: F()
      }],
      "ring-w-inset": ["ring-inset"],
      "ring-color": [{
        ring: [e]
      }],
      "ring-opacity": [{
        "ring-opacity": [_]
      }],
      "ring-offset-w": [{
        "ring-offset": [U, q]
      }],
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      shadow: [{
        shadow: ["", "inner", "none", H, mn]
      }],
      "shadow-color": [{
        shadow: [ce]
      }],
      opacity: [{
        opacity: [_]
      }],
      "mix-blend": [{
        "mix-blend": [...qe(), "plus-lighter", "plus-darker"]
      }],
      "bg-blend": [{
        "bg-blend": qe()
      }],
      filter: [{
        filter: ["", "none"]
      }],
      blur: [{
        blur: [r]
      }],
      brightness: [{
        brightness: [n]
      }],
      contrast: [{
        contrast: [l]
      }],
      "drop-shadow": [{
        "drop-shadow": ["", "none", H, g]
      }],
      grayscale: [{
        grayscale: [c]
      }],
      "hue-rotate": [{
        "hue-rotate": [u]
      }],
      invert: [{
        invert: [f]
      }],
      saturate: [{
        saturate: [x]
      }],
      sepia: [{
        sepia: [T]
      }],
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      "backdrop-blur": [{
        "backdrop-blur": [r]
      }],
      "backdrop-brightness": [{
        "backdrop-brightness": [n]
      }],
      "backdrop-contrast": [{
        "backdrop-contrast": [l]
      }],
      "backdrop-grayscale": [{
        "backdrop-grayscale": [c]
      }],
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [u]
      }],
      "backdrop-invert": [{
        "backdrop-invert": [f]
      }],
      "backdrop-opacity": [{
        "backdrop-opacity": [_]
      }],
      "backdrop-saturate": [{
        "backdrop-saturate": [x]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", g]
      }],
      duration: [{
        duration: be()
      }],
      ease: [{
        ease: ["linear", "in", "out", "in-out", g]
      }],
      delay: [{
        delay: be()
      }],
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", g]
      }],
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      scale: [{
        scale: [E]
      }],
      "scale-x": [{
        "scale-x": [E]
      }],
      "scale-y": [{
        "scale-y": [E]
      }],
      rotate: [{
        rotate: [le, g]
      }],
      "translate-x": [{
        "translate-x": [D]
      }],
      "translate-y": [{
        "translate-y": [D]
      }],
      "skew-x": [{
        "skew-x": [N]
      }],
      "skew-y": [{
        "skew-y": [N]
      }],
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", g]
      }],
      accent: [{
        accent: ["auto", e]
      }],
      appearance: [{
        appearance: ["none", "auto"]
      }],
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", g]
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
        "scroll-m": C()
      }],
      "scroll-mx": [{
        "scroll-mx": C()
      }],
      "scroll-my": [{
        "scroll-my": C()
      }],
      "scroll-ms": [{
        "scroll-ms": C()
      }],
      "scroll-me": [{
        "scroll-me": C()
      }],
      "scroll-mt": [{
        "scroll-mt": C()
      }],
      "scroll-mr": [{
        "scroll-mr": C()
      }],
      "scroll-mb": [{
        "scroll-mb": C()
      }],
      "scroll-ml": [{
        "scroll-ml": C()
      }],
      "scroll-p": [{
        "scroll-p": C()
      }],
      "scroll-px": [{
        "scroll-px": C()
      }],
      "scroll-py": [{
        "scroll-py": C()
      }],
      "scroll-ps": [{
        "scroll-ps": C()
      }],
      "scroll-pe": [{
        "scroll-pe": C()
      }],
      "scroll-pt": [{
        "scroll-pt": C()
      }],
      "scroll-pr": [{
        "scroll-pr": C()
      }],
      "scroll-pb": [{
        "scroll-pb": C()
      }],
      "scroll-pl": [{
        "scroll-pl": C()
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
        "will-change": ["auto", "scroll", "contents", "transform", g]
      }],
      fill: [{
        fill: [e, "none"]
      }],
      "stroke-w": [{
        stroke: [U, q, ye]
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
const yn = /* @__PURE__ */ Qr(hn);
function me(...e) {
  return yn(Vr(e));
}
const wn = /* @__PURE__ */ O({
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
    const r = e, n = t, o = $(() => {
      const { class: s, ...i } = r;
      return i;
    }), a = mr(o, n);
    return (s, i) => (h(), S(d(Ir), z(d(a), {
      class: d(me)(d(kn)({ variant: s.variant }), r.class),
      "onUpdate:open": s.onOpenChange
    }), {
      default: P(() => [
        I(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class", "onUpdate:open"]));
  }
}), xn = /* @__PURE__ */ O({
  __name: "ToastViewport",
  props: {
    hotkey: {},
    label: { type: [String, Function] },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, r = $(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (h(), S(d(zr), z(r.value, {
      class: d(me)(
        "fixed bottom-0 z-[100] flex max-h-screen w-full flex-col-reverse gap-y-1 p-4 sm:top-0 sm:right-0 sm:bottom-auto sm:flex-col md:max-w-[420px]",
        t.class
      )
    }), null, 16, ["class"]));
  }
});
function _n(e, t) {
  return h(), W("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    oe("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
      fill: "currentColor"
    })
  ]);
}
const Tn = /* @__PURE__ */ O({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, r = $(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (h(), S(d(Lr), z(r.value, {
      class: d(me)(
        "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
        t.class
      )
    }), {
      default: P(() => [
        ee(d(_n), { class: "h-4 w-4" })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Cn = /* @__PURE__ */ O({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, r = $(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (h(), S(d(Dr), z(r.value, {
      class: d(me)("text-sm font-semibold [&+div]:text-xs", t.class)
    }), {
      default: P(() => [
        I(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), rt = /* @__PURE__ */ O({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, r = $(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (h(), S(d(jr), z({
      class: d(me)("text-sm opacity-90", t.class)
    }, r.value), {
      default: P(() => [
        I(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), En = /* @__PURE__ */ O({
  __name: "ToastProvider",
  props: {
    label: {},
    duration: {},
    swipeDirection: {},
    swipeThreshold: {}
  },
  setup(e) {
    const t = e;
    return (r, n) => (h(), S(d(Cr), Le(ze(t)), {
      default: P(() => [
        I(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Et(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = Et(e[t])) && (n && (n += " "), n += r);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function Sn() {
  for (var e, t, r = 0, n = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = Et(e)) && (n && (n += " "), n += t);
  return n;
}
const nt = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, ot = Sn, An = (e, t) => (r) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null)
    return ot(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: o, defaultVariants: a } = t, s = Object.keys(o).map((c) => {
    const u = r == null ? void 0 : r[c], f = a == null ? void 0 : a[c];
    if (u === null)
      return null;
    const p = nt(u) || nt(f);
    return o[c][p];
  }), i = r && Object.entries(r).reduce((c, u) => {
    let [f, p] = u;
    return p === void 0 || (c[f] = p), c;
  }, {}), l = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((c, u) => {
    let { class: f, className: p, ...m } = u;
    return Object.entries(m).every((w) => {
      let [v, b] = w;
      return Array.isArray(b) ? b.includes({
        ...a,
        ...i
      }[v]) : {
        ...a,
        ...i
      }[v] === b;
    }) ? [
      ...c,
      f,
      p
    ] : c;
  }, []);
  return ot(e, s, l, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
}, kn = An(
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
function Mn(e, t) {
  return h(), W("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    oe("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    })
  ]);
}
function at(e, t) {
  return h(), W("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    oe("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
    })
  ]);
}
function Pn(e, t) {
  return h(), W("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    oe("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
    })
  ]);
}
const On = { name: "Notifications" }, Ln = /* @__PURE__ */ O({
  ...On,
  props: {
    info: {},
    success: {},
    warning: {},
    errors: {},
    showErrorKeys: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, { toast: r } = dt();
    return L(
      () => t.info,
      (n) => {
        n && r({
          icon: Pn,
          title: "FYI",
          iconClasses: "text-blue-400",
          description: t.info
        });
      },
      {
        immediate: !0
      }
    ), L(
      () => t.success,
      (n) => {
        n && r({
          icon: Mn,
          title: "Success",
          iconClasses: "text-green-400",
          description: t.success
        });
      },
      { immediate: !0 }
    ), L(
      () => t.warning,
      (n) => {
        n && r({
          icon: at,
          title: "Warning",
          iconClasses: "text-orange-400",
          description: t.warning
        });
      },
      { immediate: !0 }
    ), L(
      () => t.errors,
      () => {
        Object.keys(t.errors).length > 0 && r({
          icon: at,
          title: "Oh snap! Some errors were encountered.",
          iconClasses: "text-red-400",
          messages: t.showErrorKeys ? Object.keys(t.errors) : Object.values(t.errors)
        });
      }
    ), (n, o) => (h(), S(d(Qt)));
  }
});
var St = {}, At = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return r;
    }
  });
  function t(n, o) {
    return {
      handler: n,
      config: o
    };
  }
  t.withOptions = function(n, o = () => ({})) {
    const a = function(s) {
      return {
        __options: s,
        handler: n(s),
        config: o(s)
      };
    };
    return a.__isOptionsFunction = !0, a.__pluginFunction = n, a.__configFunction = o, a;
  };
  const r = t;
})(At);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return n;
    }
  });
  const t = /* @__PURE__ */ r(At);
  function r(o) {
    return o && o.__esModule ? o : {
      default: o
    };
  }
  const n = t.default;
})(St);
let Me = St;
var Nn = (Me.__esModule ? Me : { default: Me }).default, kt = {}, Mt = {}, Ke = { exports: {} }, M = String, Pt = function() {
  return { isColorSupported: !1, reset: M, bold: M, dim: M, italic: M, underline: M, inverse: M, hidden: M, strikethrough: M, black: M, red: M, green: M, yellow: M, blue: M, magenta: M, cyan: M, white: M, gray: M, bgBlack: M, bgRed: M, bgGreen: M, bgYellow: M, bgBlue: M, bgMagenta: M, bgCyan: M, bgWhite: M };
};
Ke.exports = Pt();
Ke.exports.createColors = Pt;
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(l, c) {
    for (var u in c)
      Object.defineProperty(l, u, {
        enumerable: !0,
        get: c[u]
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
  const r = /* @__PURE__ */ n(Ke.exports);
  function n(l) {
    return l && l.__esModule ? l : {
      default: l
    };
  }
  let o = /* @__PURE__ */ new Set();
  function a(l, c, u) {
    typeof process < "u" && process.env.JEST_WORKER_ID || u && o.has(u) || (u && o.add(u), console.warn(""), c.forEach((f) => console.warn(l, "-", f)));
  }
  function s(l) {
    return r.default.dim(l);
  }
  const i = {
    info(l, c) {
      a(r.default.bold(r.default.cyan("info")), ...Array.isArray(l) ? [
        l
      ] : [
        c,
        l
      ]);
    },
    warn(l, c) {
      a(r.default.bold(r.default.yellow("warn")), ...Array.isArray(l) ? [
        l
      ] : [
        c,
        l
      ]);
    },
    risk(l, c) {
      a(r.default.bold(r.default.magenta("risk")), ...Array.isArray(l) ? [
        l
      ] : [
        c,
        l
      ]);
    }
  };
})(Mt);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return o;
    }
  });
  const t = /* @__PURE__ */ r(Mt);
  function r(a) {
    return a && a.__esModule ? a : {
      default: a
    };
  }
  function n({ version: a, from: s, to: i }) {
    t.default.warn(`${s}-color-renamed`, [
      `As of Tailwind CSS ${a}, \`${s}\` has been renamed to \`${i}\`.`,
      "Update your configuration file to silence this warning."
    ]);
  }
  const o = {
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
      return n({
        version: "v2.2",
        from: "lightBlue",
        to: "sky"
      }), this.sky;
    },
    get warmGray() {
      return n({
        version: "v3.0",
        from: "warmGray",
        to: "stone"
      }), this.stone;
    },
    get trueGray() {
      return n({
        version: "v3.0",
        from: "trueGray",
        to: "neutral"
      }), this.neutral;
    },
    get coolGray() {
      return n({
        version: "v3.0",
        from: "coolGray",
        to: "gray"
      }), this.gray;
    },
    get blueGray() {
      return n({
        version: "v3.0",
        from: "blueGray",
        to: "slate"
      }), this.slate;
    }
  };
})(kt);
let Pe = kt;
var $n = (Pe.__esModule ? Pe : { default: Pe }).default;
const zn = Nn.withOptions(
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
              ...$n.indigo,
              ...(t = e == null ? void 0 : e.colors) == null ? void 0 : t.primary
            }
          }
        }
      }
    };
  }
);
export {
  Ln as Notifications,
  zn as theme
};
