var ar = (e) => {
  throw TypeError(e);
};
var Gl = (e, t, n) => t.has(e) || ar("Cannot " + n);
var on = (e, t, n) => (Gl(e, t, "read from private field"), n ? n.call(e) : t.get(e)), rr = (e, t, n) => t.has(e) ? ar("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n);
import * as Ln from "vue";
import { computed as S, ref as T, shallowRef as zn, watch as X, getCurrentScope as Wr, onScopeDispose as Gr, shallowReadonly as Rt, unref as s, defineComponent as x, createBlock as C, openBlock as h, normalizeProps as U, guardReactiveProps as W, withCtx as y, renderSlot as _, toRefs as pe, createVNode as R, mergeProps as D, onMounted as se, watchEffect as we, normalizeStyle as Ot, createCommentVNode as ce, getCurrentInstance as Fe, toRef as qr, camelize as qn, withKeys as mt, toHandlers as ql, resolveDynamicComponent as Ve, withModifiers as Be, nextTick as ae, withDirectives as Ut, vShow as ea, h as Oe, createTextVNode as ke, watchSyncEffect as Yl, toDisplayString as Te, isRef as $t, onBeforeMount as Yr, onUnmounted as ze, createElementBlock as N, Fragment as be, renderList as vt, useSlots as Xr, Teleport as Yn, onBeforeUnmount as Xn, inject as hn, provide as yn, toHandlerKey as Zr, onBeforeUpdate as Xl, onUpdated as Zl, reactive as Qr, readonly as ta, Comment as na, cloneVNode as Jr, markRaw as es, createElementVNode as re, vModelSelect as Ql, toRaw as Jl, mergeDefaults as ts, watchPostEffect as ei, effectScope as ns, customRef as ti, normalizeClass as ne, isVNode as ni, toValue as os, vModelText as as } from "vue";
function rs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var oi = {
  aqua: /#00ffff(ff)?(?!\w)|#0ff(f)?(?!\w)/gi,
  azure: /#f0ffff(ff)?(?!\w)/gi,
  beige: /#f5f5dc(ff)?(?!\w)/gi,
  bisque: /#ffe4c4(ff)?(?!\w)/gi,
  black: /#000000(ff)?(?!\w)|#000(f)?(?!\w)/gi,
  blue: /#0000ff(ff)?(?!\w)|#00f(f)?(?!\w)/gi,
  brown: /#a52a2a(ff)?(?!\w)/gi,
  coral: /#ff7f50(ff)?(?!\w)/gi,
  cornsilk: /#fff8dc(ff)?(?!\w)/gi,
  crimson: /#dc143c(ff)?(?!\w)/gi,
  cyan: /#00ffff(ff)?(?!\w)|#0ff(f)?(?!\w)/gi,
  darkblue: /#00008b(ff)?(?!\w)/gi,
  darkcyan: /#008b8b(ff)?(?!\w)/gi,
  darkgrey: /#a9a9a9(ff)?(?!\w)/gi,
  darkred: /#8b0000(ff)?(?!\w)/gi,
  deeppink: /#ff1493(ff)?(?!\w)/gi,
  dimgrey: /#696969(ff)?(?!\w)/gi,
  gold: /#ffd700(ff)?(?!\w)/gi,
  green: /#008000(ff)?(?!\w)/gi,
  grey: /#808080(ff)?(?!\w)/gi,
  honeydew: /#f0fff0(ff)?(?!\w)/gi,
  hotpink: /#ff69b4(ff)?(?!\w)/gi,
  indigo: /#4b0082(ff)?(?!\w)/gi,
  ivory: /#fffff0(ff)?(?!\w)/gi,
  khaki: /#f0e68c(ff)?(?!\w)/gi,
  lavender: /#e6e6fa(ff)?(?!\w)/gi,
  lime: /#00ff00(ff)?(?!\w)|#0f0(f)?(?!\w)/gi,
  linen: /#faf0e6(ff)?(?!\w)/gi,
  maroon: /#800000(ff)?(?!\w)/gi,
  moccasin: /#ffe4b5(ff)?(?!\w)/gi,
  navy: /#000080(ff)?(?!\w)/gi,
  oldlace: /#fdf5e6(ff)?(?!\w)/gi,
  olive: /#808000(ff)?(?!\w)/gi,
  orange: /#ffa500(ff)?(?!\w)/gi,
  orchid: /#da70d6(ff)?(?!\w)/gi,
  peru: /#cd853f(ff)?(?!\w)/gi,
  pink: /#ffc0cb(ff)?(?!\w)/gi,
  plum: /#dda0dd(ff)?(?!\w)/gi,
  purple: /#800080(ff)?(?!\w)/gi,
  red: /#ff0000(ff)?(?!\w)|#f00(f)?(?!\w)/gi,
  salmon: /#fa8072(ff)?(?!\w)/gi,
  seagreen: /#2e8b57(ff)?(?!\w)/gi,
  seashell: /#fff5ee(ff)?(?!\w)/gi,
  sienna: /#a0522d(ff)?(?!\w)/gi,
  silver: /#c0c0c0(ff)?(?!\w)/gi,
  skyblue: /#87ceeb(ff)?(?!\w)/gi,
  snow: /#fffafa(ff)?(?!\w)/gi,
  tan: /#d2b48c(ff)?(?!\w)/gi,
  teal: /#008080(ff)?(?!\w)/gi,
  thistle: /#d8bfd8(ff)?(?!\w)/gi,
  tomato: /#ff6347(ff)?(?!\w)/gi,
  violet: /#ee82ee(ff)?(?!\w)/gi,
  wheat: /#f5deb3(ff)?(?!\w)/gi,
  white: /#ffffff(ff)?(?!\w)|#fff(f)?(?!\w)/gi
}, Co = oi, oa = {
  whitespace: /\s+/g,
  urlHexPairs: /%[\dA-F]{2}/g,
  quotes: /"/g
};
function ai(e) {
  return e.trim().replace(oa.whitespace, " ");
}
function ri(e) {
  return encodeURIComponent(e).replace(oa.urlHexPairs, li);
}
function si(e) {
  return Object.keys(Co).forEach(function(t) {
    Co[t].test(e) && (e = e.replace(Co[t], t));
  }), e;
}
function li(e) {
  switch (e) {
    case "%20":
      return " ";
    case "%3D":
      return "=";
    case "%3A":
      return ":";
    case "%2F":
      return "/";
    default:
      return e.toLowerCase();
  }
}
function Ro(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string, but received " + typeof e);
  e.charCodeAt(0) === 65279 && (e = e.slice(1));
  var t = si(ai(e)).replace(oa.quotes, "'");
  return "data:image/svg+xml," + ri(t);
}
Ro.toSrcset = function(t) {
  return Ro(t).replace(/ /g, "%20");
};
var ii = Ro, ss = {}, ls = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return n;
    }
  });
  function t(o, a) {
    return {
      handler: o,
      config: a
    };
  }
  t.withOptions = function(o, a = () => ({})) {
    const r = function(l) {
      return {
        __options: l,
        handler: o(l),
        config: a(l)
      };
    };
    return r.__isOptionsFunction = !0, r.__pluginFunction = o, r.__configFunction = a, r;
  };
  const n = t;
})(ls);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return o;
    }
  });
  const t = /* @__PURE__ */ n(ls);
  function n(a) {
    return a && a.__esModule ? a : {
      default: a
    };
  }
  const o = t.default;
})(ss);
let Bo = ss;
var is = (Bo.__esModule ? Bo : { default: Bo }).default, us = {}, ds = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "cloneDeep", {
    enumerable: !0,
    get: function() {
      return t;
    }
  });
  function t(n) {
    return Array.isArray(n) ? n.map((o) => t(o)) : typeof n == "object" && n !== null ? Object.fromEntries(Object.entries(n).map(([o, a]) => [
      o,
      t(a)
    ])) : n;
  }
})(ds);
var ui = {
  content: [],
  presets: [],
  darkMode: "media",
  // or 'class'
  theme: {
    accentColor: ({ theme: e }) => ({
      ...e("colors"),
      auto: "auto"
    }),
    animation: {
      none: "none",
      spin: "spin 1s linear infinite",
      ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
      pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      bounce: "bounce 1s infinite"
    },
    aria: {
      busy: 'busy="true"',
      checked: 'checked="true"',
      disabled: 'disabled="true"',
      expanded: 'expanded="true"',
      hidden: 'hidden="true"',
      pressed: 'pressed="true"',
      readonly: 'readonly="true"',
      required: 'required="true"',
      selected: 'selected="true"'
    },
    aspectRatio: {
      auto: "auto",
      square: "1 / 1",
      video: "16 / 9"
    },
    backdropBlur: ({ theme: e }) => e("blur"),
    backdropBrightness: ({ theme: e }) => e("brightness"),
    backdropContrast: ({ theme: e }) => e("contrast"),
    backdropGrayscale: ({ theme: e }) => e("grayscale"),
    backdropHueRotate: ({ theme: e }) => e("hueRotate"),
    backdropInvert: ({ theme: e }) => e("invert"),
    backdropOpacity: ({ theme: e }) => e("opacity"),
    backdropSaturate: ({ theme: e }) => e("saturate"),
    backdropSepia: ({ theme: e }) => e("sepia"),
    backgroundColor: ({ theme: e }) => e("colors"),
    backgroundImage: {
      none: "none",
      "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))",
      "gradient-to-tr": "linear-gradient(to top right, var(--tw-gradient-stops))",
      "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
      "gradient-to-br": "linear-gradient(to bottom right, var(--tw-gradient-stops))",
      "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))",
      "gradient-to-bl": "linear-gradient(to bottom left, var(--tw-gradient-stops))",
      "gradient-to-l": "linear-gradient(to left, var(--tw-gradient-stops))",
      "gradient-to-tl": "linear-gradient(to top left, var(--tw-gradient-stops))"
    },
    backgroundOpacity: ({ theme: e }) => e("opacity"),
    backgroundPosition: {
      bottom: "bottom",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top"
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain"
    },
    blur: {
      0: "0",
      none: "",
      sm: "4px",
      DEFAULT: "8px",
      md: "12px",
      lg: "16px",
      xl: "24px",
      "2xl": "40px",
      "3xl": "64px"
    },
    borderColor: ({ theme: e }) => ({
      ...e("colors"),
      DEFAULT: e("colors.gray.200", "currentColor")
    }),
    borderOpacity: ({ theme: e }) => e("opacity"),
    borderRadius: {
      none: "0px",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      full: "9999px"
    },
    borderSpacing: ({ theme: e }) => ({
      ...e("spacing")
    }),
    borderWidth: {
      DEFAULT: "1px",
      0: "0px",
      2: "2px",
      4: "4px",
      8: "8px"
    },
    boxShadow: {
      sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
      md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
      inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
      none: "none"
    },
    boxShadowColor: ({ theme: e }) => e("colors"),
    brightness: {
      0: "0",
      50: ".5",
      75: ".75",
      90: ".9",
      95: ".95",
      100: "1",
      105: "1.05",
      110: "1.1",
      125: "1.25",
      150: "1.5",
      200: "2"
    },
    caretColor: ({ theme: e }) => e("colors"),
    colors: ({ colors: e }) => ({
      inherit: e.inherit,
      current: e.current,
      transparent: e.transparent,
      black: e.black,
      white: e.white,
      slate: e.slate,
      gray: e.gray,
      zinc: e.zinc,
      neutral: e.neutral,
      stone: e.stone,
      red: e.red,
      orange: e.orange,
      amber: e.amber,
      yellow: e.yellow,
      lime: e.lime,
      green: e.green,
      emerald: e.emerald,
      teal: e.teal,
      cyan: e.cyan,
      sky: e.sky,
      blue: e.blue,
      indigo: e.indigo,
      violet: e.violet,
      purple: e.purple,
      fuchsia: e.fuchsia,
      pink: e.pink,
      rose: e.rose
    }),
    columns: {
      auto: "auto",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      "3xs": "16rem",
      "2xs": "18rem",
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
      "7xl": "80rem"
    },
    container: {},
    content: {
      none: "none"
    },
    contrast: {
      0: "0",
      50: ".5",
      75: ".75",
      100: "1",
      125: "1.25",
      150: "1.5",
      200: "2"
    },
    cursor: {
      auto: "auto",
      default: "default",
      pointer: "pointer",
      wait: "wait",
      text: "text",
      move: "move",
      help: "help",
      "not-allowed": "not-allowed",
      none: "none",
      "context-menu": "context-menu",
      progress: "progress",
      cell: "cell",
      crosshair: "crosshair",
      "vertical-text": "vertical-text",
      alias: "alias",
      copy: "copy",
      "no-drop": "no-drop",
      grab: "grab",
      grabbing: "grabbing",
      "all-scroll": "all-scroll",
      "col-resize": "col-resize",
      "row-resize": "row-resize",
      "n-resize": "n-resize",
      "e-resize": "e-resize",
      "s-resize": "s-resize",
      "w-resize": "w-resize",
      "ne-resize": "ne-resize",
      "nw-resize": "nw-resize",
      "se-resize": "se-resize",
      "sw-resize": "sw-resize",
      "ew-resize": "ew-resize",
      "ns-resize": "ns-resize",
      "nesw-resize": "nesw-resize",
      "nwse-resize": "nwse-resize",
      "zoom-in": "zoom-in",
      "zoom-out": "zoom-out"
    },
    divideColor: ({ theme: e }) => e("borderColor"),
    divideOpacity: ({ theme: e }) => e("borderOpacity"),
    divideWidth: ({ theme: e }) => e("borderWidth"),
    dropShadow: {
      sm: "0 1px 1px rgb(0 0 0 / 0.05)",
      DEFAULT: ["0 1px 2px rgb(0 0 0 / 0.1)", "0 1px 1px rgb(0 0 0 / 0.06)"],
      md: ["0 4px 3px rgb(0 0 0 / 0.07)", "0 2px 2px rgb(0 0 0 / 0.06)"],
      lg: ["0 10px 8px rgb(0 0 0 / 0.04)", "0 4px 3px rgb(0 0 0 / 0.1)"],
      xl: ["0 20px 13px rgb(0 0 0 / 0.03)", "0 8px 5px rgb(0 0 0 / 0.08)"],
      "2xl": "0 25px 25px rgb(0 0 0 / 0.15)",
      none: "0 0 #0000"
    },
    fill: ({ theme: e }) => ({
      none: "none",
      ...e("colors")
    }),
    flex: {
      1: "1 1 0%",
      auto: "1 1 auto",
      initial: "0 1 auto",
      none: "none"
    },
    flexBasis: ({ theme: e }) => ({
      auto: "auto",
      ...e("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      "1/12": "8.333333%",
      "2/12": "16.666667%",
      "3/12": "25%",
      "4/12": "33.333333%",
      "5/12": "41.666667%",
      "6/12": "50%",
      "7/12": "58.333333%",
      "8/12": "66.666667%",
      "9/12": "75%",
      "10/12": "83.333333%",
      "11/12": "91.666667%",
      full: "100%"
    }),
    flexGrow: {
      0: "0",
      DEFAULT: "1"
    },
    flexShrink: {
      0: "0",
      DEFAULT: "1"
    },
    fontFamily: {
      sans: [
        "ui-sans-serif",
        "system-ui",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ],
      serif: ["ui-serif", "Georgia", "Cambria", '"Times New Roman"', "Times", "serif"],
      mono: [
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace"
      ]
    },
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1rem" }],
      sm: ["0.875rem", { lineHeight: "1.25rem" }],
      base: ["1rem", { lineHeight: "1.5rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.25rem", { lineHeight: "1.75rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
      "5xl": ["3rem", { lineHeight: "1" }],
      "6xl": ["3.75rem", { lineHeight: "1" }],
      "7xl": ["4.5rem", { lineHeight: "1" }],
      "8xl": ["6rem", { lineHeight: "1" }],
      "9xl": ["8rem", { lineHeight: "1" }]
    },
    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900"
    },
    gap: ({ theme: e }) => e("spacing"),
    gradientColorStops: ({ theme: e }) => e("colors"),
    gradientColorStopPositions: {
      "0%": "0%",
      "5%": "5%",
      "10%": "10%",
      "15%": "15%",
      "20%": "20%",
      "25%": "25%",
      "30%": "30%",
      "35%": "35%",
      "40%": "40%",
      "45%": "45%",
      "50%": "50%",
      "55%": "55%",
      "60%": "60%",
      "65%": "65%",
      "70%": "70%",
      "75%": "75%",
      "80%": "80%",
      "85%": "85%",
      "90%": "90%",
      "95%": "95%",
      "100%": "100%"
    },
    grayscale: {
      0: "0",
      DEFAULT: "100%"
    },
    gridAutoColumns: {
      auto: "auto",
      min: "min-content",
      max: "max-content",
      fr: "minmax(0, 1fr)"
    },
    gridAutoRows: {
      auto: "auto",
      min: "min-content",
      max: "max-content",
      fr: "minmax(0, 1fr)"
    },
    gridColumn: {
      auto: "auto",
      "span-1": "span 1 / span 1",
      "span-2": "span 2 / span 2",
      "span-3": "span 3 / span 3",
      "span-4": "span 4 / span 4",
      "span-5": "span 5 / span 5",
      "span-6": "span 6 / span 6",
      "span-7": "span 7 / span 7",
      "span-8": "span 8 / span 8",
      "span-9": "span 9 / span 9",
      "span-10": "span 10 / span 10",
      "span-11": "span 11 / span 11",
      "span-12": "span 12 / span 12",
      "span-full": "1 / -1"
    },
    gridColumnEnd: {
      auto: "auto",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      13: "13"
    },
    gridColumnStart: {
      auto: "auto",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      13: "13"
    },
    gridRow: {
      auto: "auto",
      "span-1": "span 1 / span 1",
      "span-2": "span 2 / span 2",
      "span-3": "span 3 / span 3",
      "span-4": "span 4 / span 4",
      "span-5": "span 5 / span 5",
      "span-6": "span 6 / span 6",
      "span-7": "span 7 / span 7",
      "span-8": "span 8 / span 8",
      "span-9": "span 9 / span 9",
      "span-10": "span 10 / span 10",
      "span-11": "span 11 / span 11",
      "span-12": "span 12 / span 12",
      "span-full": "1 / -1"
    },
    gridRowEnd: {
      auto: "auto",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      13: "13"
    },
    gridRowStart: {
      auto: "auto",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      13: "13"
    },
    gridTemplateColumns: {
      none: "none",
      subgrid: "subgrid",
      1: "repeat(1, minmax(0, 1fr))",
      2: "repeat(2, minmax(0, 1fr))",
      3: "repeat(3, minmax(0, 1fr))",
      4: "repeat(4, minmax(0, 1fr))",
      5: "repeat(5, minmax(0, 1fr))",
      6: "repeat(6, minmax(0, 1fr))",
      7: "repeat(7, minmax(0, 1fr))",
      8: "repeat(8, minmax(0, 1fr))",
      9: "repeat(9, minmax(0, 1fr))",
      10: "repeat(10, minmax(0, 1fr))",
      11: "repeat(11, minmax(0, 1fr))",
      12: "repeat(12, minmax(0, 1fr))"
    },
    gridTemplateRows: {
      none: "none",
      subgrid: "subgrid",
      1: "repeat(1, minmax(0, 1fr))",
      2: "repeat(2, minmax(0, 1fr))",
      3: "repeat(3, minmax(0, 1fr))",
      4: "repeat(4, minmax(0, 1fr))",
      5: "repeat(5, minmax(0, 1fr))",
      6: "repeat(6, minmax(0, 1fr))",
      7: "repeat(7, minmax(0, 1fr))",
      8: "repeat(8, minmax(0, 1fr))",
      9: "repeat(9, minmax(0, 1fr))",
      10: "repeat(10, minmax(0, 1fr))",
      11: "repeat(11, minmax(0, 1fr))",
      12: "repeat(12, minmax(0, 1fr))"
    },
    height: ({ theme: e }) => ({
      auto: "auto",
      ...e("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      full: "100%",
      screen: "100vh",
      svh: "100svh",
      lvh: "100lvh",
      dvh: "100dvh",
      min: "min-content",
      max: "max-content",
      fit: "fit-content"
    }),
    hueRotate: {
      0: "0deg",
      15: "15deg",
      30: "30deg",
      60: "60deg",
      90: "90deg",
      180: "180deg"
    },
    inset: ({ theme: e }) => ({
      auto: "auto",
      ...e("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      full: "100%"
    }),
    invert: {
      0: "0",
      DEFAULT: "100%"
    },
    keyframes: {
      spin: {
        to: {
          transform: "rotate(360deg)"
        }
      },
      ping: {
        "75%, 100%": {
          transform: "scale(2)",
          opacity: "0"
        }
      },
      pulse: {
        "50%": {
          opacity: ".5"
        }
      },
      bounce: {
        "0%, 100%": {
          transform: "translateY(-25%)",
          animationTimingFunction: "cubic-bezier(0.8,0,1,1)"
        },
        "50%": {
          transform: "none",
          animationTimingFunction: "cubic-bezier(0,0,0.2,1)"
        }
      }
    },
    letterSpacing: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0em",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em"
    },
    lineHeight: {
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2",
      3: ".75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem"
    },
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal"
    },
    listStyleImage: {
      none: "none"
    },
    margin: ({ theme: e }) => ({
      auto: "auto",
      ...e("spacing")
    }),
    lineClamp: {
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6"
    },
    maxHeight: ({ theme: e }) => ({
      ...e("spacing"),
      none: "none",
      full: "100%",
      screen: "100vh",
      svh: "100svh",
      lvh: "100lvh",
      dvh: "100dvh",
      min: "min-content",
      max: "max-content",
      fit: "fit-content"
    }),
    maxWidth: ({ theme: e, breakpoints: t }) => ({
      ...e("spacing"),
      none: "none",
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
      "7xl": "80rem",
      full: "100%",
      min: "min-content",
      max: "max-content",
      fit: "fit-content",
      prose: "65ch",
      ...t(e("screens"))
    }),
    minHeight: ({ theme: e }) => ({
      ...e("spacing"),
      full: "100%",
      screen: "100vh",
      svh: "100svh",
      lvh: "100lvh",
      dvh: "100dvh",
      min: "min-content",
      max: "max-content",
      fit: "fit-content"
    }),
    minWidth: ({ theme: e }) => ({
      ...e("spacing"),
      full: "100%",
      min: "min-content",
      max: "max-content",
      fit: "fit-content"
    }),
    objectPosition: {
      bottom: "bottom",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top"
    },
    opacity: {
      0: "0",
      5: "0.05",
      10: "0.1",
      15: "0.15",
      20: "0.2",
      25: "0.25",
      30: "0.3",
      35: "0.35",
      40: "0.4",
      45: "0.45",
      50: "0.5",
      55: "0.55",
      60: "0.6",
      65: "0.65",
      70: "0.7",
      75: "0.75",
      80: "0.8",
      85: "0.85",
      90: "0.9",
      95: "0.95",
      100: "1"
    },
    order: {
      first: "-9999",
      last: "9999",
      none: "0",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12"
    },
    outlineColor: ({ theme: e }) => e("colors"),
    outlineOffset: {
      0: "0px",
      1: "1px",
      2: "2px",
      4: "4px",
      8: "8px"
    },
    outlineWidth: {
      0: "0px",
      1: "1px",
      2: "2px",
      4: "4px",
      8: "8px"
    },
    padding: ({ theme: e }) => e("spacing"),
    placeholderColor: ({ theme: e }) => e("colors"),
    placeholderOpacity: ({ theme: e }) => e("opacity"),
    ringColor: ({ theme: e }) => ({
      DEFAULT: e("colors.blue.500", "#3b82f6"),
      ...e("colors")
    }),
    ringOffsetColor: ({ theme: e }) => e("colors"),
    ringOffsetWidth: {
      0: "0px",
      1: "1px",
      2: "2px",
      4: "4px",
      8: "8px"
    },
    ringOpacity: ({ theme: e }) => ({
      DEFAULT: "0.5",
      ...e("opacity")
    }),
    ringWidth: {
      DEFAULT: "3px",
      0: "0px",
      1: "1px",
      2: "2px",
      4: "4px",
      8: "8px"
    },
    rotate: {
      0: "0deg",
      1: "1deg",
      2: "2deg",
      3: "3deg",
      6: "6deg",
      12: "12deg",
      45: "45deg",
      90: "90deg",
      180: "180deg"
    },
    saturate: {
      0: "0",
      50: ".5",
      100: "1",
      150: "1.5",
      200: "2"
    },
    scale: {
      0: "0",
      50: ".5",
      75: ".75",
      90: ".9",
      95: ".95",
      100: "1",
      105: "1.05",
      110: "1.1",
      125: "1.25",
      150: "1.5"
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px"
    },
    scrollMargin: ({ theme: e }) => ({
      ...e("spacing")
    }),
    scrollPadding: ({ theme: e }) => e("spacing"),
    sepia: {
      0: "0",
      DEFAULT: "100%"
    },
    skew: {
      0: "0deg",
      1: "1deg",
      2: "2deg",
      3: "3deg",
      6: "6deg",
      12: "12deg"
    },
    space: ({ theme: e }) => ({
      ...e("spacing")
    }),
    spacing: {
      px: "1px",
      0: "0px",
      0.5: "0.125rem",
      1: "0.25rem",
      1.5: "0.375rem",
      2: "0.5rem",
      2.5: "0.625rem",
      3: "0.75rem",
      3.5: "0.875rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      11: "2.75rem",
      12: "3rem",
      14: "3.5rem",
      16: "4rem",
      20: "5rem",
      24: "6rem",
      28: "7rem",
      32: "8rem",
      36: "9rem",
      40: "10rem",
      44: "11rem",
      48: "12rem",
      52: "13rem",
      56: "14rem",
      60: "15rem",
      64: "16rem",
      72: "18rem",
      80: "20rem",
      96: "24rem"
    },
    stroke: ({ theme: e }) => ({
      none: "none",
      ...e("colors")
    }),
    strokeWidth: {
      0: "0",
      1: "1",
      2: "2"
    },
    supports: {},
    data: {},
    textColor: ({ theme: e }) => e("colors"),
    textDecorationColor: ({ theme: e }) => e("colors"),
    textDecorationThickness: {
      auto: "auto",
      "from-font": "from-font",
      0: "0px",
      1: "1px",
      2: "2px",
      4: "4px",
      8: "8px"
    },
    textIndent: ({ theme: e }) => ({
      ...e("spacing")
    }),
    textOpacity: ({ theme: e }) => e("opacity"),
    textUnderlineOffset: {
      auto: "auto",
      0: "0px",
      1: "1px",
      2: "2px",
      4: "4px",
      8: "8px"
    },
    transformOrigin: {
      center: "center",
      top: "top",
      "top-right": "top right",
      right: "right",
      "bottom-right": "bottom right",
      bottom: "bottom",
      "bottom-left": "bottom left",
      left: "left",
      "top-left": "top left"
    },
    transitionDelay: {
      0: "0s",
      75: "75ms",
      100: "100ms",
      150: "150ms",
      200: "200ms",
      300: "300ms",
      500: "500ms",
      700: "700ms",
      1e3: "1000ms"
    },
    transitionDuration: {
      DEFAULT: "150ms",
      0: "0s",
      75: "75ms",
      100: "100ms",
      150: "150ms",
      200: "200ms",
      300: "300ms",
      500: "500ms",
      700: "700ms",
      1e3: "1000ms"
    },
    transitionProperty: {
      none: "none",
      all: "all",
      DEFAULT: "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
      colors: "color, background-color, border-color, text-decoration-color, fill, stroke",
      opacity: "opacity",
      shadow: "box-shadow",
      transform: "transform"
    },
    transitionTimingFunction: {
      DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
      linear: "linear",
      in: "cubic-bezier(0.4, 0, 1, 1)",
      out: "cubic-bezier(0, 0, 0.2, 1)",
      "in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
    },
    translate: ({ theme: e }) => ({
      ...e("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      full: "100%"
    }),
    size: ({ theme: e }) => ({
      auto: "auto",
      ...e("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      "1/12": "8.333333%",
      "2/12": "16.666667%",
      "3/12": "25%",
      "4/12": "33.333333%",
      "5/12": "41.666667%",
      "6/12": "50%",
      "7/12": "58.333333%",
      "8/12": "66.666667%",
      "9/12": "75%",
      "10/12": "83.333333%",
      "11/12": "91.666667%",
      full: "100%",
      min: "min-content",
      max: "max-content",
      fit: "fit-content"
    }),
    width: ({ theme: e }) => ({
      auto: "auto",
      ...e("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      "1/12": "8.333333%",
      "2/12": "16.666667%",
      "3/12": "25%",
      "4/12": "33.333333%",
      "5/12": "41.666667%",
      "6/12": "50%",
      "7/12": "58.333333%",
      "8/12": "66.666667%",
      "9/12": "75%",
      "10/12": "83.333333%",
      "11/12": "91.666667%",
      full: "100%",
      screen: "100vw",
      svw: "100svw",
      lvw: "100lvw",
      dvw: "100dvw",
      min: "min-content",
      max: "max-content",
      fit: "fit-content"
    }),
    willChange: {
      auto: "auto",
      scroll: "scroll-position",
      contents: "contents",
      transform: "transform"
    },
    zIndex: {
      auto: "auto",
      0: "0",
      10: "10",
      20: "20",
      30: "30",
      40: "40",
      50: "50"
    }
  },
  plugins: []
};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return a;
    }
  });
  const t = ds, n = /* @__PURE__ */ o(ui);
  function o(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  const a = (0, t.cloneDeep)(n.default.theme);
})(us);
let $o = us;
var di = ($o.__esModule ? $o : { default: $o }).default, cs = {}, ps = {}, aa = { exports: {} }, ee = String, fs = function() {
  return { isColorSupported: !1, reset: ee, bold: ee, dim: ee, italic: ee, underline: ee, inverse: ee, hidden: ee, strikethrough: ee, black: ee, red: ee, green: ee, yellow: ee, blue: ee, magenta: ee, cyan: ee, white: ee, gray: ee, bgBlack: ee, bgRed: ee, bgGreen: ee, bgYellow: ee, bgBlue: ee, bgMagenta: ee, bgCyan: ee, bgWhite: ee, blackBright: ee, redBright: ee, greenBright: ee, yellowBright: ee, blueBright: ee, magentaBright: ee, cyanBright: ee, whiteBright: ee, bgBlackBright: ee, bgRedBright: ee, bgGreenBright: ee, bgYellowBright: ee, bgBlueBright: ee, bgMagentaBright: ee, bgCyanBright: ee, bgWhiteBright: ee };
};
aa.exports = fs();
aa.exports.createColors = fs;
var ci = aa.exports;
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(u, d) {
    for (var c in d) Object.defineProperty(u, c, {
      enumerable: !0,
      get: d[c]
    });
  }
  t(e, {
    dim: function() {
      return l;
    },
    default: function() {
      return i;
    }
  });
  const n = /* @__PURE__ */ o(ci);
  function o(u) {
    return u && u.__esModule ? u : {
      default: u
    };
  }
  let a = /* @__PURE__ */ new Set();
  function r(u, d, c) {
    typeof process < "u" && process.env.JEST_WORKER_ID || c && a.has(c) || (c && a.add(c), console.warn(""), d.forEach((p) => console.warn(u, "-", p)));
  }
  function l(u) {
    return n.default.dim(u);
  }
  const i = {
    info(u, d) {
      r(n.default.bold(n.default.cyan("info")), ...Array.isArray(u) ? [
        u
      ] : [
        d,
        u
      ]);
    },
    warn(u, d) {
      r(n.default.bold(n.default.yellow("warn")), ...Array.isArray(u) ? [
        u
      ] : [
        d,
        u
      ]);
    },
    risk(u, d) {
      r(n.default.bold(n.default.magenta("risk")), ...Array.isArray(u) ? [
        u
      ] : [
        d,
        u
      ]);
    }
  };
})(ps);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return a;
    }
  });
  const t = /* @__PURE__ */ n(ps);
  function n(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  function o({ version: r, from: l, to: i }) {
    t.default.warn(`${l}-color-renamed`, [
      `As of Tailwind CSS ${r}, \`${l}\` has been renamed to \`${i}\`.`,
      "Update your configuration file to silence this warning."
    ]);
  }
  const a = {
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
})(cs);
let So = cs;
var pi = (So.__esModule ? So : { default: So }).default;
const En = ii, fi = is, ms = di, dt = pi, [mi, { lineHeight: vi }] = ms.fontSize.base, { spacing: nt, borderWidth: sr, borderRadius: lr } = ms;
function Ct(e, t) {
  return e.replace("<alpha-value>", `var(${t}, 1)`);
}
const gi = fi.withOptions(function(e = { strategy: void 0 }) {
  return function({ addBase: t, addComponents: n, theme: o }) {
    function a(u, d) {
      let c = o(u);
      return !c || c.includes("var(") ? d : c.replace("<alpha-value>", "1");
    }
    const r = e.strategy === void 0 ? ["base", "class"] : [e.strategy], l = [
      {
        base: [
          "[type='text']",
          "input:where(:not([type]))",
          "[type='email']",
          "[type='url']",
          "[type='password']",
          "[type='number']",
          "[type='date']",
          "[type='datetime-local']",
          "[type='month']",
          "[type='search']",
          "[type='tel']",
          "[type='time']",
          "[type='week']",
          "[multiple]",
          "textarea",
          "select"
        ],
        class: [".form-input", ".form-textarea", ".form-select", ".form-multiselect"],
        styles: {
          appearance: "none",
          "background-color": "#fff",
          "border-color": Ct(
            o("colors.gray.500", dt.gray[500]),
            "--tw-border-opacity"
          ),
          "border-width": sr.DEFAULT,
          "border-radius": lr.none,
          "padding-top": nt[2],
          "padding-right": nt[3],
          "padding-bottom": nt[2],
          "padding-left": nt[3],
          "font-size": mi,
          "line-height": vi,
          "--tw-shadow": "0 0 #0000",
          "&:focus": {
            outline: "2px solid transparent",
            "outline-offset": "2px",
            "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)",
            "--tw-ring-offset-width": "0px",
            "--tw-ring-offset-color": "#fff",
            "--tw-ring-color": Ct(
              o("colors.blue.600", dt.blue[600]),
              "--tw-ring-opacity"
            ),
            "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
            "--tw-ring-shadow": "var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
            "box-shadow": "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)",
            "border-color": Ct(
              o("colors.blue.600", dt.blue[600]),
              "--tw-border-opacity"
            )
          }
        }
      },
      {
        base: ["input::placeholder", "textarea::placeholder"],
        class: [".form-input::placeholder", ".form-textarea::placeholder"],
        styles: {
          color: Ct(o("colors.gray.500", dt.gray[500]), "--tw-text-opacity"),
          opacity: "1"
        }
      },
      {
        base: ["::-webkit-datetime-edit-fields-wrapper"],
        class: [".form-input::-webkit-datetime-edit-fields-wrapper"],
        styles: {
          padding: "0"
        }
      },
      {
        // Unfortunate hack until https://bugs.webkit.org/show_bug.cgi?id=198959 is fixed.
        // This sucks because users can't change line-height with a utility on date inputs now.
        // Reference: https://github.com/twbs/bootstrap/pull/31993
        base: ["::-webkit-date-and-time-value"],
        class: [".form-input::-webkit-date-and-time-value"],
        styles: {
          "min-height": "1.5em"
        }
      },
      {
        // In Safari on iOS date and time inputs are centered instead of left-aligned and can't be
        // changed with `text-align` utilities on the input by default. Resetting this to `inherit`
        // makes them left-aligned by default and makes it possible to override the alignment with
        // utility classes without using an arbitrary variant to target the pseudo-elements.
        base: ["::-webkit-date-and-time-value"],
        class: [".form-input::-webkit-date-and-time-value"],
        styles: {
          "text-align": "inherit"
        }
      },
      {
        // In Safari on macOS date time inputs that are set to `display: block` have unexpected
        // extra bottom spacing. This can be corrected by setting the `::-webkit-datetime-edit`
        // pseudo-element to `display: inline-flex`, instead of the browser default of
        // `display: inline-block`.
        base: ["::-webkit-datetime-edit"],
        class: [".form-input::-webkit-datetime-edit"],
        styles: {
          display: "inline-flex"
        }
      },
      {
        // In Safari on macOS date time inputs are 4px taller than normal inputs
        // This is because there is extra padding on the datetime-edit and datetime-edit-{part}-field pseudo elements
        // See https://github.com/tailwindlabs/tailwindcss-forms/issues/95
        base: [
          "::-webkit-datetime-edit",
          "::-webkit-datetime-edit-year-field",
          "::-webkit-datetime-edit-month-field",
          "::-webkit-datetime-edit-day-field",
          "::-webkit-datetime-edit-hour-field",
          "::-webkit-datetime-edit-minute-field",
          "::-webkit-datetime-edit-second-field",
          "::-webkit-datetime-edit-millisecond-field",
          "::-webkit-datetime-edit-meridiem-field"
        ],
        class: [
          ".form-input::-webkit-datetime-edit",
          ".form-input::-webkit-datetime-edit-year-field",
          ".form-input::-webkit-datetime-edit-month-field",
          ".form-input::-webkit-datetime-edit-day-field",
          ".form-input::-webkit-datetime-edit-hour-field",
          ".form-input::-webkit-datetime-edit-minute-field",
          ".form-input::-webkit-datetime-edit-second-field",
          ".form-input::-webkit-datetime-edit-millisecond-field",
          ".form-input::-webkit-datetime-edit-meridiem-field"
        ],
        styles: {
          "padding-top": 0,
          "padding-bottom": 0
        }
      },
      {
        base: ["select"],
        class: [".form-select"],
        styles: {
          "background-image": `url("${En(
            `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="${a(
              "colors.gray.500",
              dt.gray[500]
            )}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 8l4 4 4-4"/></svg>`
          )}")`,
          "background-position": `right ${nt[2]} center`,
          "background-repeat": "no-repeat",
          "background-size": "1.5em 1.5em",
          "padding-right": nt[10],
          "print-color-adjust": "exact"
        }
      },
      {
        base: ["[multiple]", '[size]:where(select:not([size="1"]))'],
        class: ['.form-select:where([size]:not([size="1"]))'],
        styles: {
          "background-image": "initial",
          "background-position": "initial",
          "background-repeat": "unset",
          "background-size": "initial",
          "padding-right": nt[3],
          "print-color-adjust": "unset"
        }
      },
      {
        base: ["[type='checkbox']", "[type='radio']"],
        class: [".form-checkbox", ".form-radio"],
        styles: {
          appearance: "none",
          padding: "0",
          "print-color-adjust": "exact",
          display: "inline-block",
          "vertical-align": "middle",
          "background-origin": "border-box",
          "user-select": "none",
          "flex-shrink": "0",
          height: nt[4],
          width: nt[4],
          color: Ct(o("colors.blue.600", dt.blue[600]), "--tw-text-opacity"),
          "background-color": "#fff",
          "border-color": Ct(
            o("colors.gray.500", dt.gray[500]),
            "--tw-border-opacity"
          ),
          "border-width": sr.DEFAULT,
          "--tw-shadow": "0 0 #0000"
        }
      },
      {
        base: ["[type='checkbox']"],
        class: [".form-checkbox"],
        styles: {
          "border-radius": lr.none
        }
      },
      {
        base: ["[type='radio']"],
        class: [".form-radio"],
        styles: {
          "border-radius": "100%"
        }
      },
      {
        base: ["[type='checkbox']:focus", "[type='radio']:focus"],
        class: [".form-checkbox:focus", ".form-radio:focus"],
        styles: {
          outline: "2px solid transparent",
          "outline-offset": "2px",
          "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)",
          "--tw-ring-offset-width": "2px",
          "--tw-ring-offset-color": "#fff",
          "--tw-ring-color": Ct(
            o("colors.blue.600", dt.blue[600]),
            "--tw-ring-opacity"
          ),
          "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
          "--tw-ring-shadow": "var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
          "box-shadow": "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)"
        }
      },
      {
        base: ["[type='checkbox']:checked", "[type='radio']:checked"],
        class: [".form-checkbox:checked", ".form-radio:checked"],
        styles: {
          "border-color": "transparent",
          "background-color": "currentColor",
          "background-size": "100% 100%",
          "background-position": "center",
          "background-repeat": "no-repeat"
        }
      },
      {
        base: ["[type='checkbox']:checked"],
        class: [".form-checkbox:checked"],
        styles: {
          "background-image": `url("${En(
            '<svg viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z"/></svg>'
          )}")`,
          "@media (forced-colors: active) ": {
            appearance: "auto"
          }
        }
      },
      {
        base: ["[type='radio']:checked"],
        class: [".form-radio:checked"],
        styles: {
          "background-image": `url("${En(
            '<svg viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="3"/></svg>'
          )}")`,
          "@media (forced-colors: active) ": {
            appearance: "auto"
          }
        }
      },
      {
        base: [
          "[type='checkbox']:checked:hover",
          "[type='checkbox']:checked:focus",
          "[type='radio']:checked:hover",
          "[type='radio']:checked:focus"
        ],
        class: [
          ".form-checkbox:checked:hover",
          ".form-checkbox:checked:focus",
          ".form-radio:checked:hover",
          ".form-radio:checked:focus"
        ],
        styles: {
          "border-color": "transparent",
          "background-color": "currentColor"
        }
      },
      {
        base: ["[type='checkbox']:indeterminate"],
        class: [".form-checkbox:indeterminate"],
        styles: {
          "background-image": `url("${En(
            '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h8"/></svg>'
          )}")`,
          "border-color": "transparent",
          "background-color": "currentColor",
          "background-size": "100% 100%",
          "background-position": "center",
          "background-repeat": "no-repeat",
          "@media (forced-colors: active) ": {
            appearance: "auto"
          }
        }
      },
      {
        base: ["[type='checkbox']:indeterminate:hover", "[type='checkbox']:indeterminate:focus"],
        class: [".form-checkbox:indeterminate:hover", ".form-checkbox:indeterminate:focus"],
        styles: {
          "border-color": "transparent",
          "background-color": "currentColor"
        }
      },
      {
        base: ["[type='file']"],
        class: null,
        styles: {
          background: "unset",
          "border-color": "inherit",
          "border-width": "0",
          "border-radius": "0",
          padding: "0",
          "font-size": "unset",
          "line-height": "inherit"
        }
      },
      {
        base: ["[type='file']:focus"],
        class: null,
        styles: {
          outline: ["1px solid ButtonText", "1px auto -webkit-focus-ring-color"]
        }
      }
    ], i = (u) => l.map((d) => d[u] === null ? null : { [d[u]]: d.styles }).filter(Boolean);
    r.includes("base") && t(i("base")), r.includes("class") && n(i("class"));
  };
});
var hi = gi;
const yi = /* @__PURE__ */ rs(hi), bi = is;
function ir(e) {
  return Object.fromEntries(
    Object.entries(e).filter(([t]) => t !== "DEFAULT")
  );
}
var wi = bi(
  ({ addUtilities: e, matchUtilities: t, theme: n }) => {
    e({
      "@keyframes enter": n("keyframes.enter"),
      "@keyframes exit": n("keyframes.exit"),
      ".animate-in": {
        animationName: "enter",
        animationDuration: n("animationDuration.DEFAULT"),
        "--tw-enter-opacity": "initial",
        "--tw-enter-scale": "initial",
        "--tw-enter-rotate": "initial",
        "--tw-enter-translate-x": "initial",
        "--tw-enter-translate-y": "initial"
      },
      ".animate-out": {
        animationName: "exit",
        animationDuration: n("animationDuration.DEFAULT"),
        "--tw-exit-opacity": "initial",
        "--tw-exit-scale": "initial",
        "--tw-exit-rotate": "initial",
        "--tw-exit-translate-x": "initial",
        "--tw-exit-translate-y": "initial"
      }
    }), t(
      {
        "fade-in": (o) => ({ "--tw-enter-opacity": o }),
        "fade-out": (o) => ({ "--tw-exit-opacity": o })
      },
      { values: n("animationOpacity") }
    ), t(
      {
        "zoom-in": (o) => ({ "--tw-enter-scale": o }),
        "zoom-out": (o) => ({ "--tw-exit-scale": o })
      },
      { values: n("animationScale") }
    ), t(
      {
        "spin-in": (o) => ({ "--tw-enter-rotate": o }),
        "spin-out": (o) => ({ "--tw-exit-rotate": o })
      },
      { values: n("animationRotate") }
    ), t(
      {
        "slide-in-from-top": (o) => ({
          "--tw-enter-translate-y": `-${o}`
        }),
        "slide-in-from-bottom": (o) => ({
          "--tw-enter-translate-y": o
        }),
        "slide-in-from-left": (o) => ({
          "--tw-enter-translate-x": `-${o}`
        }),
        "slide-in-from-right": (o) => ({
          "--tw-enter-translate-x": o
        }),
        "slide-out-to-top": (o) => ({
          "--tw-exit-translate-y": `-${o}`
        }),
        "slide-out-to-bottom": (o) => ({
          "--tw-exit-translate-y": o
        }),
        "slide-out-to-left": (o) => ({
          "--tw-exit-translate-x": `-${o}`
        }),
        "slide-out-to-right": (o) => ({
          "--tw-exit-translate-x": o
        })
      },
      { values: n("animationTranslate") }
    ), t(
      { duration: (o) => ({ animationDuration: o }) },
      { values: ir(n("animationDuration")) }
    ), t(
      { delay: (o) => ({ animationDelay: o }) },
      { values: n("animationDelay") }
    ), t(
      { ease: (o) => ({ animationTimingFunction: o }) },
      { values: ir(n("animationTimingFunction")) }
    ), e({
      ".running": { animationPlayState: "running" },
      ".paused": { animationPlayState: "paused" }
    }), t(
      { "fill-mode": (o) => ({ animationFillMode: o }) },
      { values: n("animationFillMode") }
    ), t(
      { direction: (o) => ({ animationDirection: o }) },
      { values: n("animationDirection") }
    ), t(
      { repeat: (o) => ({ animationIterationCount: o }) },
      { values: n("animationRepeat") }
    );
  },
  {
    theme: {
      extend: {
        animationDelay: ({ theme: e }) => ({
          ...e("transitionDelay")
        }),
        animationDuration: ({ theme: e }) => ({
          0: "0ms",
          ...e("transitionDuration")
        }),
        animationTimingFunction: ({ theme: e }) => ({
          ...e("transitionTimingFunction")
        }),
        animationFillMode: {
          none: "none",
          forwards: "forwards",
          backwards: "backwards",
          both: "both"
        },
        animationDirection: {
          normal: "normal",
          reverse: "reverse",
          alternate: "alternate",
          "alternate-reverse": "alternate-reverse"
        },
        animationOpacity: ({ theme: e }) => ({
          DEFAULT: 0,
          ...e("opacity")
        }),
        animationTranslate: ({ theme: e }) => ({
          DEFAULT: "100%",
          ...e("translate")
        }),
        animationScale: ({ theme: e }) => ({
          DEFAULT: 0,
          ...e("scale")
        }),
        animationRotate: ({ theme: e }) => ({
          DEFAULT: "30deg",
          ...e("rotate")
        }),
        animationRepeat: {
          0: "0",
          1: "1",
          infinite: "infinite"
        },
        keyframes: {
          enter: {
            from: {
              opacity: "var(--tw-enter-opacity, 1)",
              transform: "translate3d(var(--tw-enter-translate-x, 0), var(--tw-enter-translate-y, 0), 0) scale3d(var(--tw-enter-scale, 1), var(--tw-enter-scale, 1), var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0))"
            }
          },
          exit: {
            to: {
              opacity: "var(--tw-exit-opacity, 1)",
              transform: "translate3d(var(--tw-exit-translate-x, 0), var(--tw-exit-translate-y, 0), 0) scale3d(var(--tw-exit-scale, 1), var(--tw-exit-scale, 1), var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0))"
            }
          }
        }
      }
    }
  }
);
const xi = /* @__PURE__ */ rs(wi), P0 = {
  darkMode: ["class"],
  safelist: ["dark"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        }
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 }
        },
        "collapsible-down": {
          from: { height: 0 },
          to: { height: "var(--radix-collapsible-content-height)" }
        },
        "collapsible-up": {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: 0 }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-in-out",
        "collapsible-up": "collapsible-up 0.2s ease-in-out"
      }
    }
  },
  plugins: [
    xi,
    yi({
      strategy: "class"
    })
  ]
}, _i = ["top", "right", "bottom", "left"], gt = Math.min, Me = Math.max, Nn = Math.round, An = Math.floor, Xe = (e) => ({
  x: e,
  y: e
}), Ci = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Bi = {
  start: "end",
  end: "start"
};
function Fo(e, t, n) {
  return Me(e, gt(t, n));
}
function lt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function it(e) {
  return e.split("-")[0];
}
function Wt(e) {
  return e.split("-")[1];
}
function ra(e) {
  return e === "x" ? "y" : "x";
}
function sa(e) {
  return e === "y" ? "height" : "width";
}
function rt(e) {
  return ["top", "bottom"].includes(it(e)) ? "y" : "x";
}
function la(e) {
  return ra(rt(e));
}
function $i(e, t, n) {
  n === void 0 && (n = !1);
  const o = Wt(e), a = la(e), r = sa(a);
  let l = a === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (l = jn(l)), [l, jn(l)];
}
function Si(e) {
  const t = jn(e);
  return [Vo(e), t, Vo(t)];
}
function Vo(e) {
  return e.replace(/start|end/g, (t) => Bi[t]);
}
function ki(e, t, n) {
  const o = ["left", "right"], a = ["right", "left"], r = ["top", "bottom"], l = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? a : o : t ? o : a;
    case "left":
    case "right":
      return t ? r : l;
    default:
      return [];
  }
}
function Oi(e, t, n, o) {
  const a = Wt(e);
  let r = ki(it(e), n === "start", o);
  return a && (r = r.map((l) => l + "-" + a), t && (r = r.concat(r.map(Vo)))), r;
}
function jn(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Ci[t]);
}
function Ei(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function vs(e) {
  return typeof e != "number" ? Ei(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Kn(e) {
  const {
    x: t,
    y: n,
    width: o,
    height: a
  } = e;
  return {
    width: o,
    height: a,
    top: n,
    left: t,
    right: t + o,
    bottom: n + a,
    x: t,
    y: n
  };
}
function ur(e, t, n) {
  let {
    reference: o,
    floating: a
  } = e;
  const r = rt(t), l = la(t), i = sa(l), u = it(t), d = r === "y", c = o.x + o.width / 2 - a.width / 2, p = o.y + o.height / 2 - a.height / 2, m = o[i] / 2 - a[i] / 2;
  let f;
  switch (u) {
    case "top":
      f = {
        x: c,
        y: o.y - a.height
      };
      break;
    case "bottom":
      f = {
        x: c,
        y: o.y + o.height
      };
      break;
    case "right":
      f = {
        x: o.x + o.width,
        y: p
      };
      break;
    case "left":
      f = {
        x: o.x - a.width,
        y: p
      };
      break;
    default:
      f = {
        x: o.x,
        y: o.y
      };
  }
  switch (Wt(t)) {
    case "start":
      f[l] -= m * (n && d ? -1 : 1);
      break;
    case "end":
      f[l] += m * (n && d ? -1 : 1);
      break;
  }
  return f;
}
const Ai = async (e, t, n) => {
  const {
    placement: o = "bottom",
    strategy: a = "absolute",
    middleware: r = [],
    platform: l
  } = n, i = r.filter(Boolean), u = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let d = await l.getElementRects({
    reference: e,
    floating: t,
    strategy: a
  }), {
    x: c,
    y: p
  } = ur(d, o, u), m = o, f = {}, v = 0;
  for (let g = 0; g < i.length; g++) {
    const {
      name: b,
      fn: w
    } = i[g], {
      x: B,
      y: $,
      data: E,
      reset: k
    } = await w({
      x: c,
      y: p,
      initialPlacement: o,
      placement: m,
      strategy: a,
      middlewareData: f,
      rects: d,
      platform: l,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = B ?? c, p = $ ?? p, f = {
      ...f,
      [b]: {
        ...f[b],
        ...E
      }
    }, k && v <= 50 && (v++, typeof k == "object" && (k.placement && (m = k.placement), k.rects && (d = k.rects === !0 ? await l.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : k.rects), {
      x: c,
      y: p
    } = ur(d, m, u)), g = -1);
  }
  return {
    x: c,
    y: p,
    placement: m,
    strategy: a,
    middlewareData: f
  };
};
async function dn(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: o,
    y: a,
    platform: r,
    rects: l,
    elements: i,
    strategy: u
  } = e, {
    boundary: d = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: p = "floating",
    altBoundary: m = !1,
    padding: f = 0
  } = lt(t, e), v = vs(f), b = i[m ? p === "floating" ? "reference" : "floating" : p], w = Kn(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(b))) == null || n ? b : b.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(i.floating)),
    boundary: d,
    rootBoundary: c,
    strategy: u
  })), B = p === "floating" ? {
    x: o,
    y: a,
    width: l.floating.width,
    height: l.floating.height
  } : l.reference, $ = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(i.floating)), E = await (r.isElement == null ? void 0 : r.isElement($)) ? await (r.getScale == null ? void 0 : r.getScale($)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, k = Kn(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: B,
    offsetParent: $,
    strategy: u
  }) : B);
  return {
    top: (w.top - k.top + v.top) / E.y,
    bottom: (k.bottom - w.bottom + v.bottom) / E.y,
    left: (w.left - k.left + v.left) / E.x,
    right: (k.right - w.right + v.right) / E.x
  };
}
const Ti = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: o,
      placement: a,
      rects: r,
      platform: l,
      elements: i,
      middlewareData: u
    } = t, {
      element: d,
      padding: c = 0
    } = lt(e, t) || {};
    if (d == null)
      return {};
    const p = vs(c), m = {
      x: n,
      y: o
    }, f = la(a), v = sa(f), g = await l.getDimensions(d), b = f === "y", w = b ? "top" : "left", B = b ? "bottom" : "right", $ = b ? "clientHeight" : "clientWidth", E = r.reference[v] + r.reference[f] - m[f] - r.floating[v], k = m[f] - r.reference[f], P = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(d));
    let O = P ? P[$] : 0;
    (!O || !await (l.isElement == null ? void 0 : l.isElement(P))) && (O = i.floating[$] || r.floating[v]);
    const I = E / 2 - k / 2, V = O / 2 - g[v] / 2 - 1, A = gt(p[w], V), L = gt(p[B], V), F = A, q = O - g[v] - L, G = O / 2 - g[v] / 2 + I, Q = Fo(F, G, q), le = !u.arrow && Wt(a) != null && G !== Q && r.reference[v] / 2 - (G < F ? A : L) - g[v] / 2 < 0, fe = le ? G < F ? G - F : G - q : 0;
    return {
      [f]: m[f] + fe,
      data: {
        [f]: Q,
        centerOffset: G - Q - fe,
        ...le && {
          alignmentOffset: fe
        }
      },
      reset: le
    };
  }
}), Di = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: a,
        middlewareData: r,
        rects: l,
        initialPlacement: i,
        platform: u,
        elements: d
      } = t, {
        mainAxis: c = !0,
        crossAxis: p = !0,
        fallbackPlacements: m,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: g = !0,
        ...b
      } = lt(e, t);
      if ((n = r.arrow) != null && n.alignmentOffset)
        return {};
      const w = it(a), B = rt(i), $ = it(i) === i, E = await (u.isRTL == null ? void 0 : u.isRTL(d.floating)), k = m || ($ || !g ? [jn(i)] : Si(i)), P = v !== "none";
      !m && P && k.push(...Oi(i, g, v, E));
      const O = [i, ...k], I = await dn(t, b), V = [];
      let A = ((o = r.flip) == null ? void 0 : o.overflows) || [];
      if (c && V.push(I[w]), p) {
        const Q = $i(a, l, E);
        V.push(I[Q[0]], I[Q[1]]);
      }
      if (A = [...A, {
        placement: a,
        overflows: V
      }], !V.every((Q) => Q <= 0)) {
        var L, F;
        const Q = (((L = r.flip) == null ? void 0 : L.index) || 0) + 1, le = O[Q];
        if (le) {
          var q;
          const ue = p === "alignment" ? B !== rt(le) : !1, j = ((q = A[0]) == null ? void 0 : q.overflows[0]) > 0;
          if (!ue || j)
            return {
              data: {
                index: Q,
                overflows: A
              },
              reset: {
                placement: le
              }
            };
        }
        let fe = (F = A.filter((ue) => ue.overflows[0] <= 0).sort((ue, j) => ue.overflows[1] - j.overflows[1])[0]) == null ? void 0 : F.placement;
        if (!fe)
          switch (f) {
            case "bestFit": {
              var G;
              const ue = (G = A.filter((j) => {
                if (P) {
                  const Y = rt(j.placement);
                  return Y === B || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  Y === "y";
                }
                return !0;
              }).map((j) => [j.placement, j.overflows.filter((Y) => Y > 0).reduce((Y, J) => Y + J, 0)]).sort((j, Y) => j[1] - Y[1])[0]) == null ? void 0 : G[0];
              ue && (fe = ue);
              break;
            }
            case "initialPlacement":
              fe = i;
              break;
          }
        if (a !== fe)
          return {
            reset: {
              placement: fe
            }
          };
      }
      return {};
    }
  };
};
function dr(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function cr(e) {
  return _i.some((t) => e[t] >= 0);
}
const Pi = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: o = "referenceHidden",
        ...a
      } = lt(e, t);
      switch (o) {
        case "referenceHidden": {
          const r = await dn(t, {
            ...a,
            elementContext: "reference"
          }), l = dr(r, n.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: cr(l)
            }
          };
        }
        case "escaped": {
          const r = await dn(t, {
            ...a,
            altBoundary: !0
          }), l = dr(r, n.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: cr(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Ii(e, t) {
  const {
    placement: n,
    platform: o,
    elements: a
  } = e, r = await (o.isRTL == null ? void 0 : o.isRTL(a.floating)), l = it(n), i = Wt(n), u = rt(n) === "y", d = ["left", "top"].includes(l) ? -1 : 1, c = r && u ? -1 : 1, p = lt(t, e);
  let {
    mainAxis: m,
    crossAxis: f,
    alignmentAxis: v
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: p.mainAxis || 0,
    crossAxis: p.crossAxis || 0,
    alignmentAxis: p.alignmentAxis
  };
  return i && typeof v == "number" && (f = i === "end" ? v * -1 : v), u ? {
    x: f * c,
    y: m * d
  } : {
    x: m * d,
    y: f * c
  };
}
const Mi = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, o;
      const {
        x: a,
        y: r,
        placement: l,
        middlewareData: i
      } = t, u = await Ii(t, e);
      return l === ((n = i.offset) == null ? void 0 : n.placement) && (o = i.arrow) != null && o.alignmentOffset ? {} : {
        x: a + u.x,
        y: r + u.y,
        data: {
          ...u,
          placement: l
        }
      };
    }
  };
}, Ri = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: o,
        placement: a
      } = t, {
        mainAxis: r = !0,
        crossAxis: l = !1,
        limiter: i = {
          fn: (b) => {
            let {
              x: w,
              y: B
            } = b;
            return {
              x: w,
              y: B
            };
          }
        },
        ...u
      } = lt(e, t), d = {
        x: n,
        y: o
      }, c = await dn(t, u), p = rt(it(a)), m = ra(p);
      let f = d[m], v = d[p];
      if (r) {
        const b = m === "y" ? "top" : "left", w = m === "y" ? "bottom" : "right", B = f + c[b], $ = f - c[w];
        f = Fo(B, f, $);
      }
      if (l) {
        const b = p === "y" ? "top" : "left", w = p === "y" ? "bottom" : "right", B = v + c[b], $ = v - c[w];
        v = Fo(B, v, $);
      }
      const g = i.fn({
        ...t,
        [m]: f,
        [p]: v
      });
      return {
        ...g,
        data: {
          x: g.x - n,
          y: g.y - o,
          enabled: {
            [m]: r,
            [p]: l
          }
        }
      };
    }
  };
}, Fi = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: o,
        placement: a,
        rects: r,
        middlewareData: l
      } = t, {
        offset: i = 0,
        mainAxis: u = !0,
        crossAxis: d = !0
      } = lt(e, t), c = {
        x: n,
        y: o
      }, p = rt(a), m = ra(p);
      let f = c[m], v = c[p];
      const g = lt(i, t), b = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (u) {
        const $ = m === "y" ? "height" : "width", E = r.reference[m] - r.floating[$] + b.mainAxis, k = r.reference[m] + r.reference[$] - b.mainAxis;
        f < E ? f = E : f > k && (f = k);
      }
      if (d) {
        var w, B;
        const $ = m === "y" ? "width" : "height", E = ["top", "left"].includes(it(a)), k = r.reference[p] - r.floating[$] + (E && ((w = l.offset) == null ? void 0 : w[p]) || 0) + (E ? 0 : b.crossAxis), P = r.reference[p] + r.reference[$] + (E ? 0 : ((B = l.offset) == null ? void 0 : B[p]) || 0) - (E ? b.crossAxis : 0);
        v < k ? v = k : v > P && (v = P);
      }
      return {
        [m]: f,
        [p]: v
      };
    }
  };
}, Vi = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: a,
        rects: r,
        platform: l,
        elements: i
      } = t, {
        apply: u = () => {
        },
        ...d
      } = lt(e, t), c = await dn(t, d), p = it(a), m = Wt(a), f = rt(a) === "y", {
        width: v,
        height: g
      } = r.floating;
      let b, w;
      p === "top" || p === "bottom" ? (b = p, w = m === (await (l.isRTL == null ? void 0 : l.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (w = p, b = m === "end" ? "top" : "bottom");
      const B = g - c.top - c.bottom, $ = v - c.left - c.right, E = gt(g - c[b], B), k = gt(v - c[w], $), P = !t.middlewareData.shift;
      let O = E, I = k;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (I = $), (o = t.middlewareData.shift) != null && o.enabled.y && (O = B), P && !m) {
        const A = Me(c.left, 0), L = Me(c.right, 0), F = Me(c.top, 0), q = Me(c.bottom, 0);
        f ? I = v - 2 * (A !== 0 || L !== 0 ? A + L : Me(c.left, c.right)) : O = g - 2 * (F !== 0 || q !== 0 ? F + q : Me(c.top, c.bottom));
      }
      await u({
        ...t,
        availableWidth: I,
        availableHeight: O
      });
      const V = await l.getDimensions(i.floating);
      return v !== V.width || g !== V.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Zn() {
  return typeof window < "u";
}
function Et(e) {
  return ia(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Re(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Qe(e) {
  var t;
  return (t = (ia(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function ia(e) {
  return Zn() ? e instanceof Node || e instanceof Re(e).Node : !1;
}
function We(e) {
  return Zn() ? e instanceof Element || e instanceof Re(e).Element : !1;
}
function Ze(e) {
  return Zn() ? e instanceof HTMLElement || e instanceof Re(e).HTMLElement : !1;
}
function pr(e) {
  return !Zn() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Re(e).ShadowRoot;
}
function bn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: a
  } = Ge(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(a);
}
function Li(e) {
  return ["table", "td", "th"].includes(Et(e));
}
function Qn(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function ua(e) {
  const t = da(), n = We(e) ? Ge(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((o) => n[o] ? n[o] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function zi(e) {
  let t = ht(e);
  for (; Ze(t) && !jt(t); ) {
    if (ua(t))
      return t;
    if (Qn(t))
      return null;
    t = ht(t);
  }
  return null;
}
function da() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function jt(e) {
  return ["html", "body", "#document"].includes(Et(e));
}
function Ge(e) {
  return Re(e).getComputedStyle(e);
}
function Jn(e) {
  return We(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function ht(e) {
  if (Et(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    pr(e) && e.host || // Fallback.
    Qe(e)
  );
  return pr(t) ? t.host : t;
}
function gs(e) {
  const t = ht(e);
  return jt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ze(t) && bn(t) ? t : gs(t);
}
function cn(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const a = gs(e), r = a === ((o = e.ownerDocument) == null ? void 0 : o.body), l = Re(a);
  if (r) {
    const i = Lo(l);
    return t.concat(l, l.visualViewport || [], bn(a) ? a : [], i && n ? cn(i) : []);
  }
  return t.concat(a, cn(a, [], n));
}
function Lo(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function hs(e) {
  const t = Ge(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const a = Ze(e), r = a ? e.offsetWidth : n, l = a ? e.offsetHeight : o, i = Nn(n) !== r || Nn(o) !== l;
  return i && (n = r, o = l), {
    width: n,
    height: o,
    $: i
  };
}
function ca(e) {
  return We(e) ? e : e.contextElement;
}
function Lt(e) {
  const t = ca(e);
  if (!Ze(t))
    return Xe(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: a,
    $: r
  } = hs(t);
  let l = (r ? Nn(n.width) : n.width) / o, i = (r ? Nn(n.height) : n.height) / a;
  return (!l || !Number.isFinite(l)) && (l = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: l,
    y: i
  };
}
const Ni = /* @__PURE__ */ Xe(0);
function ys(e) {
  const t = Re(e);
  return !da() || !t.visualViewport ? Ni : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function ji(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Re(e) ? !1 : t;
}
function St(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const a = e.getBoundingClientRect(), r = ca(e);
  let l = Xe(1);
  t && (o ? We(o) && (l = Lt(o)) : l = Lt(e));
  const i = ji(r, n, o) ? ys(r) : Xe(0);
  let u = (a.left + i.x) / l.x, d = (a.top + i.y) / l.y, c = a.width / l.x, p = a.height / l.y;
  if (r) {
    const m = Re(r), f = o && We(o) ? Re(o) : o;
    let v = m, g = Lo(v);
    for (; g && o && f !== v; ) {
      const b = Lt(g), w = g.getBoundingClientRect(), B = Ge(g), $ = w.left + (g.clientLeft + parseFloat(B.paddingLeft)) * b.x, E = w.top + (g.clientTop + parseFloat(B.paddingTop)) * b.y;
      u *= b.x, d *= b.y, c *= b.x, p *= b.y, u += $, d += E, v = Re(g), g = Lo(v);
    }
  }
  return Kn({
    width: c,
    height: p,
    x: u,
    y: d
  });
}
function pa(e, t) {
  const n = Jn(e).scrollLeft;
  return t ? t.left + n : St(Qe(e)).left + n;
}
function bs(e, t, n) {
  n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = o.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    pa(e, o)
  )), r = o.top + t.scrollTop;
  return {
    x: a,
    y: r
  };
}
function Ki(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: o,
    strategy: a
  } = e;
  const r = a === "fixed", l = Qe(o), i = t ? Qn(t.floating) : !1;
  if (o === l || i && r)
    return n;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = Xe(1);
  const c = Xe(0), p = Ze(o);
  if ((p || !p && !r) && ((Et(o) !== "body" || bn(l)) && (u = Jn(o)), Ze(o))) {
    const f = St(o);
    d = Lt(o), c.x = f.x + o.clientLeft, c.y = f.y + o.clientTop;
  }
  const m = l && !p && !r ? bs(l, u, !0) : Xe(0);
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - u.scrollLeft * d.x + c.x + m.x,
    y: n.y * d.y - u.scrollTop * d.y + c.y + m.y
  };
}
function Hi(e) {
  return Array.from(e.getClientRects());
}
function Ui(e) {
  const t = Qe(e), n = Jn(e), o = e.ownerDocument.body, a = Me(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), r = Me(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let l = -n.scrollLeft + pa(e);
  const i = -n.scrollTop;
  return Ge(o).direction === "rtl" && (l += Me(t.clientWidth, o.clientWidth) - a), {
    width: a,
    height: r,
    x: l,
    y: i
  };
}
function Wi(e, t) {
  const n = Re(e), o = Qe(e), a = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, i = 0, u = 0;
  if (a) {
    r = a.width, l = a.height;
    const d = da();
    (!d || d && t === "fixed") && (i = a.offsetLeft, u = a.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: i,
    y: u
  };
}
function Gi(e, t) {
  const n = St(e, !0, t === "fixed"), o = n.top + e.clientTop, a = n.left + e.clientLeft, r = Ze(e) ? Lt(e) : Xe(1), l = e.clientWidth * r.x, i = e.clientHeight * r.y, u = a * r.x, d = o * r.y;
  return {
    width: l,
    height: i,
    x: u,
    y: d
  };
}
function fr(e, t, n) {
  let o;
  if (t === "viewport")
    o = Wi(e, n);
  else if (t === "document")
    o = Ui(Qe(e));
  else if (We(t))
    o = Gi(t, n);
  else {
    const a = ys(e);
    o = {
      x: t.x - a.x,
      y: t.y - a.y,
      width: t.width,
      height: t.height
    };
  }
  return Kn(o);
}
function ws(e, t) {
  const n = ht(e);
  return n === t || !We(n) || jt(n) ? !1 : Ge(n).position === "fixed" || ws(n, t);
}
function qi(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = cn(e, [], !1).filter((i) => We(i) && Et(i) !== "body"), a = null;
  const r = Ge(e).position === "fixed";
  let l = r ? ht(e) : e;
  for (; We(l) && !jt(l); ) {
    const i = Ge(l), u = ua(l);
    !u && i.position === "fixed" && (a = null), (r ? !u && !a : !u && i.position === "static" && !!a && ["absolute", "fixed"].includes(a.position) || bn(l) && !u && ws(e, l)) ? o = o.filter((c) => c !== l) : a = i, l = ht(l);
  }
  return t.set(e, o), o;
}
function Yi(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: a
  } = e;
  const l = [...n === "clippingAncestors" ? Qn(t) ? [] : qi(t, this._c) : [].concat(n), o], i = l[0], u = l.reduce((d, c) => {
    const p = fr(t, c, a);
    return d.top = Me(p.top, d.top), d.right = gt(p.right, d.right), d.bottom = gt(p.bottom, d.bottom), d.left = Me(p.left, d.left), d;
  }, fr(t, i, a));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function Xi(e) {
  const {
    width: t,
    height: n
  } = hs(e);
  return {
    width: t,
    height: n
  };
}
function Zi(e, t, n) {
  const o = Ze(t), a = Qe(t), r = n === "fixed", l = St(e, !0, r, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = Xe(0);
  function d() {
    u.x = pa(a);
  }
  if (o || !o && !r)
    if ((Et(t) !== "body" || bn(a)) && (i = Jn(t)), o) {
      const f = St(t, !0, r, t);
      u.x = f.x + t.clientLeft, u.y = f.y + t.clientTop;
    } else a && d();
  r && !o && a && d();
  const c = a && !o && !r ? bs(a, i) : Xe(0), p = l.left + i.scrollLeft - u.x - c.x, m = l.top + i.scrollTop - u.y - c.y;
  return {
    x: p,
    y: m,
    width: l.width,
    height: l.height
  };
}
function ko(e) {
  return Ge(e).position === "static";
}
function mr(e, t) {
  if (!Ze(e) || Ge(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Qe(e) === n && (n = n.ownerDocument.body), n;
}
function xs(e, t) {
  const n = Re(e);
  if (Qn(e))
    return n;
  if (!Ze(e)) {
    let a = ht(e);
    for (; a && !jt(a); ) {
      if (We(a) && !ko(a))
        return a;
      a = ht(a);
    }
    return n;
  }
  let o = mr(e, t);
  for (; o && Li(o) && ko(o); )
    o = mr(o, t);
  return o && jt(o) && ko(o) && !ua(o) ? n : o || zi(e) || n;
}
const Qi = async function(e) {
  const t = this.getOffsetParent || xs, n = this.getDimensions, o = await n(e.floating);
  return {
    reference: Zi(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function Ji(e) {
  return Ge(e).direction === "rtl";
}
const eu = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Ki,
  getDocumentElement: Qe,
  getClippingRect: Yi,
  getOffsetParent: xs,
  getElementRects: Qi,
  getClientRects: Hi,
  getDimensions: Xi,
  getScale: Lt,
  isElement: We,
  isRTL: Ji
};
function _s(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function tu(e, t) {
  let n = null, o;
  const a = Qe(e);
  function r() {
    var i;
    clearTimeout(o), (i = n) == null || i.disconnect(), n = null;
  }
  function l(i, u) {
    i === void 0 && (i = !1), u === void 0 && (u = 1), r();
    const d = e.getBoundingClientRect(), {
      left: c,
      top: p,
      width: m,
      height: f
    } = d;
    if (i || t(), !m || !f)
      return;
    const v = An(p), g = An(a.clientWidth - (c + m)), b = An(a.clientHeight - (p + f)), w = An(c), $ = {
      rootMargin: -v + "px " + -g + "px " + -b + "px " + -w + "px",
      threshold: Me(0, gt(1, u)) || 1
    };
    let E = !0;
    function k(P) {
      const O = P[0].intersectionRatio;
      if (O !== u) {
        if (!E)
          return l();
        O ? l(!1, O) : o = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      O === 1 && !_s(d, e.getBoundingClientRect()) && l(), E = !1;
    }
    try {
      n = new IntersectionObserver(k, {
        ...$,
        // Handle <iframe>s
        root: a.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(k, $);
    }
    n.observe(e);
  }
  return l(!0), r;
}
function nu(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: a = !0,
    ancestorResize: r = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = o, d = ca(e), c = a || r ? [...d ? cn(d) : [], ...cn(t)] : [];
  c.forEach((w) => {
    a && w.addEventListener("scroll", n, {
      passive: !0
    }), r && w.addEventListener("resize", n);
  });
  const p = d && i ? tu(d, n) : null;
  let m = -1, f = null;
  l && (f = new ResizeObserver((w) => {
    let [B] = w;
    B && B.target === d && f && (f.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var $;
      ($ = f) == null || $.observe(t);
    })), n();
  }), d && !u && f.observe(d), f.observe(t));
  let v, g = u ? St(e) : null;
  u && b();
  function b() {
    const w = St(e);
    g && !_s(g, w) && n(), g = w, v = requestAnimationFrame(b);
  }
  return n(), () => {
    var w;
    c.forEach((B) => {
      a && B.removeEventListener("scroll", n), r && B.removeEventListener("resize", n);
    }), p == null || p(), (w = f) == null || w.disconnect(), f = null, u && cancelAnimationFrame(v);
  };
}
const ou = Mi, au = Ri, vr = Di, ru = Vi, su = Pi, lu = Ti, iu = Fi, uu = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), a = {
    platform: eu,
    ...n
  }, r = {
    ...a.platform,
    _c: o
  };
  return Ai(e, t, {
    ...a,
    platform: r
  });
};
function du(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function zo(e) {
  if (du(e)) {
    const t = e.$el;
    return ia(t) && Et(t) === "#comment" ? null : t;
  }
  return e;
}
function Vt(e) {
  return typeof e == "function" ? e() : s(e);
}
function cu(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const n = zo(Vt(e.element));
      return n == null ? {} : lu({
        element: n,
        padding: e.padding
      }).fn(t);
    }
  };
}
function Cs(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function gr(e, t) {
  const n = Cs(e);
  return Math.round(t * n) / n;
}
function pu(e, t, n) {
  n === void 0 && (n = {});
  const o = n.whileElementsMounted, a = S(() => {
    var O;
    return (O = Vt(n.open)) != null ? O : !0;
  }), r = S(() => Vt(n.middleware)), l = S(() => {
    var O;
    return (O = Vt(n.placement)) != null ? O : "bottom";
  }), i = S(() => {
    var O;
    return (O = Vt(n.strategy)) != null ? O : "absolute";
  }), u = S(() => {
    var O;
    return (O = Vt(n.transform)) != null ? O : !0;
  }), d = S(() => zo(e.value)), c = S(() => zo(t.value)), p = T(0), m = T(0), f = T(i.value), v = T(l.value), g = zn({}), b = T(!1), w = S(() => {
    const O = {
      position: f.value,
      left: "0",
      top: "0"
    };
    if (!c.value)
      return O;
    const I = gr(c.value, p.value), V = gr(c.value, m.value);
    return u.value ? {
      ...O,
      transform: "translate(" + I + "px, " + V + "px)",
      ...Cs(c.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: f.value,
      left: I + "px",
      top: V + "px"
    };
  });
  let B;
  function $() {
    if (d.value == null || c.value == null)
      return;
    const O = a.value;
    uu(d.value, c.value, {
      middleware: r.value,
      placement: l.value,
      strategy: i.value
    }).then((I) => {
      p.value = I.x, m.value = I.y, f.value = I.strategy, v.value = I.placement, g.value = I.middlewareData, b.value = O !== !1;
    });
  }
  function E() {
    typeof B == "function" && (B(), B = void 0);
  }
  function k() {
    if (E(), o === void 0) {
      $();
      return;
    }
    if (d.value != null && c.value != null) {
      B = o(d.value, c.value, $);
      return;
    }
  }
  function P() {
    a.value || (b.value = !1);
  }
  return X([r, l, i, a], $, {
    flush: "sync"
  }), X([d, c], k, {
    flush: "sync"
  }), X(a, P, {
    flush: "sync"
  }), Wr() && Gr(E), {
    x: Rt(p),
    y: Rt(m),
    strategy: Rt(f),
    placement: Rt(v),
    middlewareData: Rt(g),
    isPositioned: Rt(b),
    floatingStyles: w,
    update: $
  };
}
function oe(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, o = Symbol(n);
  return [(a) => {
    const r = hn(o, a);
    if (r || r === null)
      return r;
    throw new Error(
      `Injection \`${o.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (a) => (yn(o, a), a)];
}
function fa(e, t, n) {
  const o = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, { once: !0 }), o.dispatchEvent(a);
}
function Hn(e, t = Number.NEGATIVE_INFINITY, n = Number.POSITIVE_INFINITY) {
  return Math.min(n, Math.max(t, e));
}
function fu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var mu = function e(t, n) {
  if (t === n) return !0;
  if (t && n && typeof t == "object" && typeof n == "object") {
    if (t.constructor !== n.constructor) return !1;
    var o, a, r;
    if (Array.isArray(t)) {
      if (o = t.length, o != n.length) return !1;
      for (a = o; a-- !== 0; )
        if (!e(t[a], n[a])) return !1;
      return !0;
    }
    if (t.constructor === RegExp) return t.source === n.source && t.flags === n.flags;
    if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === n.valueOf();
    if (t.toString !== Object.prototype.toString) return t.toString() === n.toString();
    if (r = Object.keys(t), o = r.length, o !== Object.keys(n).length) return !1;
    for (a = o; a-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(n, r[a])) return !1;
    for (a = o; a-- !== 0; ) {
      var l = r[a];
      if (!e(t[l], n[l])) return !1;
    }
    return !0;
  }
  return t !== t && n !== n;
};
const Bt = /* @__PURE__ */ fu(mu);
function zt(e) {
  return e == null;
}
function vu(e, t) {
  var n;
  const o = zn();
  return we(() => {
    o.value = e();
  }, {
    ...t,
    flush: (n = void 0) != null ? n : "sync"
  }), ta(o);
}
function At(e) {
  return Wr() ? (Gr(e), !0) : !1;
}
function gu() {
  const e = /* @__PURE__ */ new Set(), t = (n) => {
    e.delete(n);
  };
  return {
    on: (n) => {
      e.add(n);
      const o = () => t(n);
      return At(o), {
        off: o
      };
    },
    off: t,
    trigger: (...n) => Promise.all(Array.from(e).map((o) => o(...n)))
  };
}
function hu(e) {
  let t = !1, n;
  const o = ns(!0);
  return (...a) => (t || (n = o.run(() => e(...a)), t = !0), n);
}
function Bs(e) {
  let t = 0, n, o;
  const a = () => {
    t -= 1, o && t <= 0 && (o.stop(), n = void 0, o = void 0);
  };
  return (...r) => (t += 1, n || (o = ns(!0), n = o.run(() => e(...r))), At(a), n);
}
function st(e) {
  return typeof e == "function" ? e() : s(e);
}
const Je = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const yu = (e) => typeof e < "u", bu = (e) => e != null, wu = Object.prototype.toString, xu = (e) => wu.call(e) === "[object Object]", $s = () => {
}, hr = /* @__PURE__ */ _u();
function _u() {
  var e, t;
  return Je && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function Cu(e) {
  return Fe();
}
function Ss(e, t = 1e4) {
  return ti((n, o) => {
    let a = st(e), r;
    const l = () => setTimeout(() => {
      a = st(e), o();
    }, st(t));
    return At(() => {
      clearTimeout(r);
    }), {
      get() {
        return n(), a;
      },
      set(i) {
        a = i, o(), clearTimeout(r), r = l();
      }
    };
  });
}
function Bu(e, t) {
  Cu() && Xn(e, t);
}
function ma(e, t, n = {}) {
  const {
    immediate: o = !0
  } = n, a = T(!1);
  let r = null;
  function l() {
    r && (clearTimeout(r), r = null);
  }
  function i() {
    a.value = !1, l();
  }
  function u(...d) {
    l(), a.value = !0, r = setTimeout(() => {
      a.value = !1, r = null, e(...d);
    }, st(t));
  }
  return o && (a.value = !0, Je && u()), At(i), {
    isPending: ta(a),
    start: u,
    stop: i
  };
}
function $u(e = 1e3, t = {}) {
  const {
    controls: n = !1,
    callback: o
  } = t, a = ma(
    o ?? $s,
    e,
    t
  ), r = S(() => !a.isPending.value);
  return n ? {
    ready: r,
    ...a
  } : r;
}
function Le(e) {
  var t;
  const n = st(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const wn = Je ? window : void 0;
function Kt(...e) {
  let t, n, o, a;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, o, a] = e, t = wn) : [t, n, o, a] = e, !t)
    return $s;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const r = [], l = () => {
    r.forEach((c) => c()), r.length = 0;
  }, i = (c, p, m, f) => (c.addEventListener(p, m, f), () => c.removeEventListener(p, m, f)), u = X(
    () => [Le(t), st(a)],
    ([c, p]) => {
      if (l(), !c)
        return;
      const m = xu(p) ? { ...p } : p;
      r.push(
        ...n.flatMap((f) => o.map((v) => i(c, f, v, m)))
      );
    },
    { immediate: !0, flush: "post" }
  ), d = () => {
    u(), l();
  };
  return At(d), d;
}
function Su(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function va(...e) {
  let t, n, o = {};
  e.length === 3 ? (t = e[0], n = e[1], o = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], o = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: a = wn,
    eventName: r = "keydown",
    passive: l = !1,
    dedupe: i = !1
  } = o, u = Su(t);
  return Kt(a, r, (d) => {
    d.repeat && st(i) || u(d) && n(d);
  }, l);
}
function ga() {
  const e = T(!1), t = Fe();
  return t && se(() => {
    e.value = !0;
  }, t), e;
}
function ku(e) {
  const t = ga();
  return S(() => (t.value, !!e()));
}
function Ou(e, t, n = {}) {
  const { window: o = wn, ...a } = n;
  let r;
  const l = ku(() => o && "MutationObserver" in o), i = () => {
    r && (r.disconnect(), r = void 0);
  }, u = S(() => {
    const m = st(e), f = (Array.isArray(m) ? m : [m]).map(Le).filter(bu);
    return new Set(f);
  }), d = X(
    () => u.value,
    (m) => {
      i(), l.value && m.size && (r = new MutationObserver(t), m.forEach((f) => r.observe(f, a)));
    },
    { immediate: !0, flush: "post" }
  ), c = () => r == null ? void 0 : r.takeRecords(), p = () => {
    i(), d();
  };
  return At(p), {
    isSupported: l,
    stop: p,
    takeRecords: c
  };
}
function ks(e, t = {}) {
  const {
    immediate: n = !0,
    fpsLimit: o = void 0,
    window: a = wn
  } = t, r = T(!1), l = o ? 1e3 / o : null;
  let i = 0, u = null;
  function d(m) {
    if (!r.value || !a)
      return;
    i || (i = m);
    const f = m - i;
    if (l && f < l) {
      u = a.requestAnimationFrame(d);
      return;
    }
    i = m, e({ delta: f, timestamp: m }), u = a.requestAnimationFrame(d);
  }
  function c() {
    !r.value && a && (r.value = !0, i = 0, u = a.requestAnimationFrame(d));
  }
  function p() {
    r.value = !1, u != null && a && (a.cancelAnimationFrame(u), u = null);
  }
  return n && c(), At(p), {
    isActive: ta(r),
    pause: p,
    resume: c
  };
}
function Eu(e) {
  return JSON.parse(JSON.stringify(e));
}
function ge(e, t, n, o = {}) {
  var a, r, l;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: c = !1,
    defaultValue: p,
    shouldEmit: m
  } = o, f = Fe(), v = n || (f == null ? void 0 : f.emit) || ((a = f == null ? void 0 : f.$emit) == null ? void 0 : a.bind(f)) || ((l = (r = f == null ? void 0 : f.proxy) == null ? void 0 : r.$emit) == null ? void 0 : l.bind(f == null ? void 0 : f.proxy));
  let g = d;
  t || (t = "modelValue"), g = g || `update:${t.toString()}`;
  const b = ($) => i ? typeof i == "function" ? i($) : Eu($) : $, w = () => yu(e[t]) ? b(e[t]) : p, B = ($) => {
    m ? m($) && v(g, $) : v(g, $);
  };
  if (u) {
    const $ = w(), E = T($);
    let k = !1;
    return X(
      () => e[t],
      (P) => {
        k || (k = !0, E.value = b(P), ae(() => k = !1));
      }
    ), X(
      E,
      (P) => {
        !k && (P !== e[t] || c) && B(P);
      },
      { deep: c }
    ), E;
  } else
    return S({
      get() {
        return w();
      },
      set($) {
        B($);
      }
    });
}
function eo(e) {
  return e ? e.flatMap((t) => t.type === be ? eo(t.children) : [t]) : [];
}
function $e() {
  let e = document.activeElement;
  if (e == null)
    return null;
  for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null; )
    e = e.shadowRoot.activeElement;
  return e;
}
const Au = ["INPUT", "TEXTAREA"];
function Os(e, t, n, o = {}) {
  if (!t || o.enableIgnoredElement && Au.includes(t.nodeName))
    return null;
  const {
    arrowKeyOptions: a = "both",
    attributeName: r = "[data-radix-vue-collection-item]",
    itemsArray: l = [],
    loop: i = !0,
    dir: u = "ltr",
    preventScroll: d = !0,
    focus: c = !1
  } = o, [p, m, f, v, g, b] = [
    e.key === "ArrowRight",
    e.key === "ArrowLeft",
    e.key === "ArrowUp",
    e.key === "ArrowDown",
    e.key === "Home",
    e.key === "End"
  ], w = f || v, B = p || m;
  if (!g && !b && (!w && !B || a === "vertical" && B || a === "horizontal" && w))
    return null;
  const $ = n ? Array.from(n.querySelectorAll(r)) : l;
  if (!$.length)
    return null;
  d && e.preventDefault();
  let E = null;
  return B || w ? E = Es($, t, {
    goForward: w ? v : u === "ltr" ? p : m,
    loop: i
  }) : g ? E = $.at(0) || null : b && (E = $.at(-1) || null), c && (E == null || E.focus()), E;
}
function Es(e, t, n, o = e.length) {
  if (--o === 0)
    return null;
  const a = e.indexOf(t), r = n.goForward ? a + 1 : a - 1;
  if (!n.loop && (r < 0 || r >= e.length))
    return null;
  const l = (r + e.length) % e.length, i = e[l];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? Es(
    e,
    i,
    n,
    o
  ) : i : null;
}
function Oo(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function No(e, t, n = ".", o) {
  if (!Oo(t))
    return No(e, {}, n);
  const a = Object.assign({}, t);
  for (const r in e) {
    if (r === "__proto__" || r === "constructor")
      continue;
    const l = e[r];
    l != null && (Array.isArray(l) && Array.isArray(a[r]) ? a[r] = [...l, ...a[r]] : Oo(l) && Oo(a[r]) ? a[r] = No(
      l,
      a[r],
      (n ? `${n}.` : "") + r.toString()
    ) : a[r] = l);
  }
  return a;
}
function Tu(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, o) => No(n, o, ""), {})
  );
}
const Du = Tu(), [to, I0] = oe("ConfigProvider");
let Pu = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", Iu = (e = 21) => {
  let t = "", n = e;
  for (; n--; )
    t += Pu[Math.random() * 64 | 0];
  return t;
};
const Mu = Bs(() => {
  const e = T(/* @__PURE__ */ new Map()), t = T(), n = S(() => {
    for (const l of e.value.values())
      if (l)
        return !0;
    return !1;
  }), o = to({
    scrollBody: T(!0)
  });
  let a = null;
  const r = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", hr && (a == null || a()), t.value = void 0;
  };
  return X(n, (l, i) => {
    var u;
    if (!Je)
      return;
    if (!l) {
      i && r();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const d = window.innerWidth - document.documentElement.clientWidth, c = { padding: d, margin: 0 }, p = (u = o.scrollBody) != null && u.value ? typeof o.scrollBody.value == "object" ? Du({
      padding: o.scrollBody.value.padding === !0 ? d : o.scrollBody.value.padding,
      margin: o.scrollBody.value.margin === !0 ? d : o.scrollBody.value.margin
    }, c) : c : { padding: 0, margin: 0 };
    d > 0 && (document.body.style.paddingRight = typeof p.padding == "number" ? `${p.padding}px` : String(p.padding), document.body.style.marginRight = typeof p.margin == "number" ? `${p.margin}px` : String(p.margin), document.body.style.setProperty("--scrollbar-width", `${d}px`), document.body.style.overflow = "hidden"), hr && (a = Kt(
      document,
      "touchmove",
      (m) => Ru(m),
      { passive: !1 }
    )), ae(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), e;
});
function xn(e) {
  const t = Iu(6), n = Mu();
  n.value.set(t, e ?? !1);
  const o = S({
    get: () => n.value.get(t) ?? !1,
    set: (a) => n.value.set(t, a)
  });
  return Bu(() => {
    n.value.delete(t);
  }), o;
}
function As(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight)
    return !0;
  {
    const n = e.parentNode;
    return !(n instanceof Element) || n.tagName === "BODY" ? !1 : As(n);
  }
}
function Ru(e) {
  const t = e || window.event, n = t.target;
  return n instanceof Element && As(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
const Fu = "data-radix-vue-collection-item";
function Gt(e, t = Fu) {
  const n = Symbol();
  return { createCollection: (o) => {
    const a = T([]);
    function r() {
      const l = Le(o);
      return l ? a.value = Array.from(
        l.querySelectorAll(`[${t}]:not([data-disabled])`)
      ) : a.value = [];
    }
    return Xl(() => {
      a.value = [];
    }), se(r), Zl(r), X(() => o == null ? void 0 : o.value, r, { immediate: !0 }), yn(n, a), a;
  }, injectCollection: () => hn(n, T([])) };
}
function yt(e) {
  const t = to({
    dir: T("ltr")
  });
  return S(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.dir) == null ? void 0 : n.value) || "ltr";
  });
}
function bt(e) {
  const t = Fe(), n = t == null ? void 0 : t.type.emits, o = {};
  return n != null && n.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), n == null || n.forEach((a) => {
    o[Zr(qn(a))] = (...r) => e(a, ...r);
  }), o;
}
let Eo = 0;
function ha() {
  we((e) => {
    if (!Je)
      return;
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? yr()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? yr()
    ), Eo++, e(() => {
      Eo === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((n) => n.remove()), Eo--;
    });
  });
}
function yr() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
function no(e) {
  return S(() => {
    var t;
    return st(e) ? !!((t = Le(e)) != null && t.closest("form")) : !0;
  });
}
function Se(e) {
  const t = Fe(), n = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((a, r) => {
    const l = (t == null ? void 0 : t.type.props[r]).default;
    return l !== void 0 && (a[r] = l), a;
  }, {}), o = qr(e);
  return S(() => {
    const a = {}, r = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(r).forEach((l) => {
      a[qn(l)] = r[l];
    }), Object.keys({ ...n, ...a }).reduce((l, i) => (o.value[i] !== void 0 && (l[i] = o.value[i]), l), {});
  });
}
function Z(e, t) {
  const n = Se(e), o = t ? bt(t) : {};
  return S(() => ({
    ...n.value,
    ...o
  }));
}
function M() {
  const e = Fe(), t = T(), n = S(() => {
    var l, i;
    return ["#text", "#comment"].includes((l = t.value) == null ? void 0 : l.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : Le(t);
  }), o = Object.assign({}, e.exposed), a = {};
  for (const l in e.props)
    Object.defineProperty(a, l, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[l]
    });
  if (Object.keys(o).length > 0)
    for (const l in o)
      Object.defineProperty(a, l, {
        enumerable: !0,
        configurable: !0,
        get: () => o[l]
      });
  Object.defineProperty(a, "$el", {
    enumerable: !0,
    configurable: !0,
    get: () => e.vnode.el
  }), e.exposed = a;
  function r(l) {
    t.value = l, l && (Object.defineProperty(a, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => l instanceof Element ? l : l.$el
    }), e.exposed = a);
  }
  return { forwardRef: r, currentRef: t, currentElement: n };
}
function Vu(e, t) {
  const n = Ss(!1, 300), o = T(null), a = gu();
  function r() {
    o.value = null, n.value = !1;
  }
  function l(i, u) {
    const d = i.currentTarget, c = { x: i.clientX, y: i.clientY }, p = Lu(c, d.getBoundingClientRect()), m = zu(c, p), f = Nu(u.getBoundingClientRect()), v = Ku([...m, ...f]);
    o.value = v, n.value = !0;
  }
  return we((i) => {
    if (e.value && t.value) {
      const u = (c) => l(c, t.value), d = (c) => l(c, e.value);
      e.value.addEventListener("pointerleave", u), t.value.addEventListener("pointerleave", d), i(() => {
        var c, p;
        (c = e.value) == null || c.removeEventListener("pointerleave", u), (p = t.value) == null || p.removeEventListener("pointerleave", d);
      });
    }
  }), we((i) => {
    var u;
    if (o.value) {
      const d = (c) => {
        var p, m;
        if (!o.value)
          return;
        const f = c.target, v = { x: c.clientX, y: c.clientY }, g = ((p = e.value) == null ? void 0 : p.contains(f)) || ((m = t.value) == null ? void 0 : m.contains(f)), b = !ju(v, o.value), w = !!f.closest("[data-grace-area-trigger]");
        g ? r() : (b || w) && (r(), a.trigger());
      };
      (u = e.value) == null || u.ownerDocument.addEventListener("pointermove", d), i(() => {
        var c;
        return (c = e.value) == null ? void 0 : c.ownerDocument.removeEventListener("pointermove", d);
      });
    }
  }), {
    isPointerInTransit: n,
    onPointerExit: a.on
  };
}
function Lu(e, t) {
  const n = Math.abs(t.top - e.y), o = Math.abs(t.bottom - e.y), a = Math.abs(t.right - e.x), r = Math.abs(t.left - e.x);
  switch (Math.min(n, o, a, r)) {
    case r:
      return "left";
    case a:
      return "right";
    case n:
      return "top";
    case o:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function zu(e, t, n = 5) {
  const o = [];
  switch (t) {
    case "top":
      o.push(
        { x: e.x - n, y: e.y + n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "bottom":
      o.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x + n, y: e.y - n }
      );
      break;
    case "left":
      o.push(
        { x: e.x + n, y: e.y - n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "right":
      o.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x - n, y: e.y + n }
      );
      break;
  }
  return o;
}
function Nu(e) {
  const { top: t, right: n, bottom: o, left: a } = e;
  return [
    { x: a, y: t },
    { x: n, y: t },
    { x: n, y: o },
    { x: a, y: o }
  ];
}
function ju(e, t) {
  const { x: n, y: o } = e;
  let a = !1;
  for (let r = 0, l = t.length - 1; r < t.length; l = r++) {
    const i = t[r].x, u = t[r].y, d = t[l].x, c = t[l].y;
    u > o != c > o && n < (d - i) * (o - u) / (c - u) + i && (a = !a);
  }
  return a;
}
function Ku(e) {
  const t = e.slice();
  return t.sort((n, o) => n.x < o.x ? -1 : n.x > o.x ? 1 : n.y < o.y ? -1 : n.y > o.y ? 1 : 0), Hu(t);
}
function Hu(e) {
  if (e.length <= 1)
    return e.slice();
  const t = [];
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    for (; t.length >= 2; ) {
      const r = t[t.length - 1], l = t[t.length - 2];
      if ((r.x - l.x) * (a.y - l.y) >= (r.y - l.y) * (a.x - l.x))
        t.pop();
      else break;
    }
    t.push(a);
  }
  t.pop();
  const n = [];
  for (let o = e.length - 1; o >= 0; o--) {
    const a = e[o];
    for (; n.length >= 2; ) {
      const r = n[n.length - 1], l = n[n.length - 2];
      if ((r.x - l.x) * (a.y - l.y) >= (r.y - l.y) * (a.x - l.x))
        n.pop();
      else break;
    }
    n.push(a);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var Uu = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Ft = /* @__PURE__ */ new WeakMap(), Tn = /* @__PURE__ */ new WeakMap(), Dn = {}, Ao = 0, Ts = function(e) {
  return e && (e.host || Ts(e.parentNode));
}, Wu = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = Ts(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Gu = function(e, t, n, o) {
  var a = Wu(t, Array.isArray(e) ? e : [e]);
  Dn[n] || (Dn[n] = /* @__PURE__ */ new WeakMap());
  var r = Dn[n], l = [], i = /* @__PURE__ */ new Set(), u = new Set(a), d = function(p) {
    !p || i.has(p) || (i.add(p), d(p.parentNode));
  };
  a.forEach(d);
  var c = function(p) {
    !p || u.has(p) || Array.prototype.forEach.call(p.children, function(m) {
      if (i.has(m))
        c(m);
      else
        try {
          var f = m.getAttribute(o), v = f !== null && f !== "false", g = (Ft.get(m) || 0) + 1, b = (r.get(m) || 0) + 1;
          Ft.set(m, g), r.set(m, b), l.push(m), g === 1 && v && Tn.set(m, !0), b === 1 && m.setAttribute(n, "true"), v || m.setAttribute(o, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", m, w);
        }
    });
  };
  return c(t), i.clear(), Ao++, function() {
    l.forEach(function(p) {
      var m = Ft.get(p) - 1, f = r.get(p) - 1;
      Ft.set(p, m), r.set(p, f), m || (Tn.has(p) || p.removeAttribute(o), Tn.delete(p)), f || p.removeAttribute(n);
    }), Ao--, Ao || (Ft = /* @__PURE__ */ new WeakMap(), Ft = /* @__PURE__ */ new WeakMap(), Tn = /* @__PURE__ */ new WeakMap(), Dn = {});
  };
}, qu = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), a = Uu(e);
  return a ? (o.push.apply(o, Array.from(a.querySelectorAll("[aria-live]"))), Gu(o, a, n, "aria-hidden")) : function() {
    return null;
  };
};
function _n(e) {
  let t;
  X(() => Le(e), (n) => {
    n ? t = qu(n) : t && t();
  }), ze(() => {
    t && t();
  });
}
let Yu = 0;
function Ce(e, t = "radix") {
  const n = to({ useId: void 0 });
  return Ln.useId ? `${t}-${Ln.useId()}` : n.useId ? `${t}-${n.useId()}` : `${t}-${++Yu}`;
}
function Ds(e) {
  const t = T(), n = S(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.width) ?? 0;
  }), o = S(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.height) ?? 0;
  });
  return se(() => {
    const a = Le(e);
    if (a) {
      t.value = { width: a.offsetWidth, height: a.offsetHeight };
      const r = new ResizeObserver((l) => {
        if (!Array.isArray(l) || !l.length)
          return;
        const i = l[0];
        let u, d;
        if ("borderBoxSize" in i) {
          const c = i.borderBoxSize, p = Array.isArray(c) ? c[0] : c;
          u = p.inlineSize, d = p.blockSize;
        } else
          u = a.offsetWidth, d = a.offsetHeight;
        t.value = { width: u, height: d };
      });
      return r.observe(a, { box: "border-box" }), () => r.unobserve(a);
    } else
      t.value = void 0;
  }), {
    width: n,
    height: o
  };
}
function Xu(e, t) {
  const n = T(e);
  function o(a) {
    return t[n.value][a] ?? n.value;
  }
  return {
    state: n,
    dispatch: (a) => {
      n.value = o(a);
    }
  };
}
const Zu = "data-item-text";
function ya(e) {
  const t = Ss("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (n, o) => {
      if (!(e != null && e.value) && !o)
        return;
      t.value = t.value + n;
      const a = (e == null ? void 0 : e.value) ?? o, r = $e(), l = a.map((p) => {
        var m;
        return {
          ref: p,
          textValue: ((m = (p.querySelector(`[${Zu}]`) ?? p).textContent) == null ? void 0 : m.trim()) ?? ""
        };
      }), i = l.find((p) => p.ref === r), u = l.map((p) => p.textValue), d = Ju(u, t.value, i == null ? void 0 : i.textValue), c = l.find((p) => p.textValue === d);
      return c && c.ref.focus(), c == null ? void 0 : c.ref;
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function Qu(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
function Ju(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((i) => i === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let r = Qu(e, Math.max(a, 0));
  o.length === 1 && (r = r.filter((i) => i !== n));
  const l = r.find(
    (i) => i.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
const ba = x({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      var o, a;
      if (!n.default)
        return null;
      const r = eo(n.default()), l = r.findIndex((c) => c.type !== na);
      if (l === -1)
        return r;
      const i = r[l];
      (o = i.props) == null || delete o.ref;
      const u = i.props ? D(t, i.props) : t;
      t.class && (a = i.props) != null && a.class && delete i.props.class;
      const d = Jr(i, u);
      for (const c in u)
        c.startsWith("on") && (d.props || (d.props = {}), d.props[c] = u[c]);
      return r.length === 1 ? d : (r[l] = d, r);
    };
  }
}), K = x({
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
    return typeof o == "string" && ["area", "img", "input"].includes(o) ? () => Oe(o, t) : o !== "template" ? () => Oe(e.as, t, { default: n.default }) : () => Oe(ba, t, { default: n.default });
  }
});
function Ps() {
  const e = T(), t = S(() => {
    var n, o;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (o = e.value) == null ? void 0 : o.$el.nextElementSibling : Le(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
const [Is, ed] = oe("CollapsibleRoot"), td = /* @__PURE__ */ x({
  __name: "CollapsibleRoot",
  props: {
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:open"],
  setup(e, { expose: t, emit: n }) {
    const o = e, a = ge(o, "open", n, {
      defaultValue: o.defaultOpen,
      passive: o.open === void 0
    }), r = ge(o, "disabled");
    return ed({
      contentId: "",
      disabled: r,
      open: a,
      onOpenToggle: () => {
        a.value = !a.value;
      }
    }), t({ open: a }), M(), (l, i) => (h(), C(s(K), {
      as: l.as,
      "as-child": o.asChild,
      "data-state": s(a) ? "open" : "closed",
      "data-disabled": s(r) ? "" : void 0
    }, {
      default: y(() => [
        _(l.$slots, "default", { open: s(a) })
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state", "data-disabled"]));
  }
}), nd = /* @__PURE__ */ x({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    M();
    const n = Is();
    return (o, a) => {
      var r, l;
      return h(), C(s(K), {
        type: o.as === "button" ? "button" : void 0,
        as: o.as,
        "as-child": t.asChild,
        "aria-controls": s(n).contentId,
        "aria-expanded": s(n).open.value,
        "data-state": s(n).open.value ? "open" : "closed",
        "data-disabled": (r = s(n).disabled) != null && r.value ? "" : void 0,
        disabled: (l = s(n).disabled) == null ? void 0 : l.value,
        onClick: s(n).onOpenToggle
      }, {
        default: y(() => [
          _(o.$slots, "default")
        ]),
        _: 3
      }, 8, ["type", "as", "as-child", "aria-controls", "aria-expanded", "data-state", "data-disabled", "disabled", "onClick"]);
    };
  }
});
function od(e, t) {
  var n;
  const o = T({}), a = T("none"), r = T(e), l = e.value ? "mounted" : "unmounted";
  let i;
  const u = ((n = t.value) == null ? void 0 : n.ownerDocument.defaultView) ?? wn, { state: d, dispatch: c } = Xu(l, {
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
  }), p = (b) => {
    var w;
    if (Je) {
      const B = new CustomEvent(b, { bubbles: !1, cancelable: !1 });
      (w = t.value) == null || w.dispatchEvent(B);
    }
  };
  X(
    e,
    async (b, w) => {
      var B;
      const $ = w !== b;
      if (await ae(), $) {
        const E = a.value, k = Pn(t.value);
        b ? (c("MOUNT"), p("enter"), k === "none" && p("after-enter")) : k === "none" || ((B = o.value) == null ? void 0 : B.display) === "none" ? (c("UNMOUNT"), p("leave"), p("after-leave")) : w && E !== k ? (c("ANIMATION_OUT"), p("leave")) : (c("UNMOUNT"), p("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const m = (b) => {
    const w = Pn(t.value), B = w.includes(
      b.animationName
    ), $ = d.value === "mounted" ? "enter" : "leave";
    if (b.target === t.value && B && (p(`after-${$}`), c("ANIMATION_END"), !r.value)) {
      const E = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", i = u == null ? void 0 : u.setTimeout(() => {
        var k;
        ((k = t.value) == null ? void 0 : k.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = E);
      });
    }
    b.target === t.value && w === "none" && c("ANIMATION_END");
  }, f = (b) => {
    b.target === t.value && (a.value = Pn(t.value));
  }, v = X(
    t,
    (b, w) => {
      b ? (o.value = getComputedStyle(b), b.addEventListener("animationstart", f), b.addEventListener("animationcancel", m), b.addEventListener("animationend", m)) : (c("ANIMATION_END"), i !== void 0 && (u == null || u.clearTimeout(i)), w == null || w.removeEventListener("animationstart", f), w == null || w.removeEventListener("animationcancel", m), w == null || w.removeEventListener("animationend", m));
    },
    { immediate: !0 }
  ), g = X(d, () => {
    const b = Pn(t.value);
    a.value = d.value === "mounted" ? b : "none";
  });
  return ze(() => {
    v(), g();
  }), {
    isPresent: S(
      () => ["mounted", "unmountSuspended"].includes(d.value)
    )
  };
}
function Pn(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const Ne = x({
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
    const { present: a, forceMount: r } = pe(e), l = T(), { isPresent: i } = od(a, l);
    n({ present: i });
    let u = t.default({ present: i });
    u = eo(u || []);
    const d = Fe();
    if (u && (u == null ? void 0 : u.length) > 1) {
      const c = (o = d == null ? void 0 : d.parent) != null && o.type.name ? `<${d.parent.type.name} />` : "component";
      throw new Error(
        [
          `Detected an invalid children for \`${c}\` for  \`Presence\` component.`,
          "",
          "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",
          "You can apply a few solutions:",
          [
            "Provide a single child element so that `presence` directive attach correctly.",
            "Ensure the first child is an actual element instead of a raw text node or comment node."
          ].map((p) => `  - ${p}`).join(`
`)
        ].join(`
`)
      );
    }
    return () => r.value || a.value || i.value ? Oe(t.default({ present: i })[0], {
      ref: (c) => {
        const p = Le(c);
        return typeof (p == null ? void 0 : p.hasAttribute) > "u" || (p != null && p.hasAttribute("data-radix-popper-content-wrapper") ? l.value = p.firstElementChild : l.value = p), p;
      }
    }) : null;
  }
}), ad = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Is();
    n.contentId || (n.contentId = Ce(void 0, "radix-vue-collapsible-content"));
    const o = T(), { forwardRef: a, currentElement: r } = M(), l = T(0), i = T(0), u = S(() => n.open.value), d = T(u.value), c = T();
    return X(
      () => {
        var p;
        return [u.value, (p = o.value) == null ? void 0 : p.present];
      },
      async () => {
        await ae();
        const p = r.value;
        if (!p)
          return;
        c.value = c.value || {
          transitionDuration: p.style.transitionDuration,
          animationName: p.style.animationName
        }, p.style.transitionDuration = "0s", p.style.animationName = "none";
        const m = p.getBoundingClientRect();
        i.value = m.height, l.value = m.width, d.value || (p.style.transitionDuration = c.value.transitionDuration, p.style.animationName = c.value.animationName);
      },
      {
        immediate: !0
      }
    ), se(() => {
      requestAnimationFrame(() => {
        d.value = !1;
      });
    }), (p, m) => (h(), C(s(Ne), {
      ref_key: "presentRef",
      ref: o,
      present: p.forceMount || s(n).open.value,
      "force-mount": !0
    }, {
      default: y(() => {
        var f, v;
        return [
          R(s(K), D(p.$attrs, {
            id: s(n).contentId,
            ref: s(a),
            "as-child": t.asChild,
            as: p.as,
            "data-state": s(n).open.value ? "open" : "closed",
            "data-disabled": (f = s(n).disabled) != null && f.value ? "" : void 0,
            hidden: !((v = o.value) != null && v.present),
            style: {
              "--radix-collapsible-content-height": `${i.value}px`,
              "--radix-collapsible-content-width": `${l.value}px`
            }
          }), {
            default: y(() => {
              var g;
              return [
                (g = o.value) != null && g.present ? _(p.$slots, "default", { key: 0 }) : ce("", !0)
              ];
            }),
            _: 3
          }, 16, ["id", "as-child", "as", "data-state", "data-disabled", "hidden", "style"])
        ];
      }),
      _: 3
    }, 8, ["present"]));
  }
});
function Ms({ type: e, defaultValue: t, modelValue: n }) {
  const o = n || t;
  if (zt(e) && zt(n) && zt(t))
    throw new Error("Either the `type` or the `value` or `default-value` prop must be defined.");
  if (n !== void 0 && t !== void 0 && typeof n != typeof t)
    throw new Error(
      `Invalid prop \`value\` of value \`${n}\` supplied, should be the same type as the \`defaultValue\` prop, which is \`${t}\`. The \`value\` prop must be:
  ${e === "single" ? "- a string" : e === "multiple" ? "- an array of strings" : `- a string
- an array of strings`}
  - \`undefined\``
    );
  const a = n !== void 0 || t !== void 0;
  if (e && a) {
    const r = Array.isArray(n) || Array.isArray(t), l = n !== void 0 ? "modelValue" : "defaultValue", i = l === "modelValue" ? typeof n : typeof t;
    if (e === "single" && r)
      return console.error(`Invalid prop \`${l}\` of type ${i} supplied with type \`single\`. The \`modelValue\` prop must be a string or \`undefined\`.
    You can remove the \`type\` prop to let the component infer the type from the ${l} prop.`), "multiple";
    if (e === "multiple" && !r)
      return console.error(`Invalid prop \`${l}\` of type ${i} supplied with type \`multiple\`. The \`modelValue\` prop must be an array of strings or \`undefined\`.
    You can remove the \`type\` prop to let the component infer the type from the ${l} prop.`), "single";
  }
  return a ? Array.isArray(o) ? "multiple" : "single" : e;
}
function rd({ type: e, defaultValue: t, modelValue: n }) {
  return e || Ms({ type: e, defaultValue: t, modelValue: n });
}
function sd({ type: e, defaultValue: t }) {
  return t !== void 0 ? t : e === "single" ? void 0 : [];
}
function ld(e, t) {
  const n = T(rd(e)), o = ge(e, "modelValue", t, {
    defaultValue: sd(e),
    passive: e.modelValue === void 0,
    deep: !0
  });
  X(
    () => [e.type, e.modelValue, e.defaultValue],
    () => {
      const l = Ms(e);
      n.value !== l && (n.value = l);
    },
    { immediate: !0 }
  );
  function a(l) {
    if (n.value === "single")
      o.value = l === o.value ? void 0 : l;
    else {
      const i = [...o.value || []];
      if (i.includes(l)) {
        const u = i.findIndex((d) => d === l);
        i.splice(u, 1);
      } else
        i.push(l);
      o.value = i;
    }
  }
  const r = S(() => n.value === "single");
  return {
    modelValue: o,
    type: n,
    changeModelValue: a,
    isSingle: r
  };
}
const [oo, id] = oe("AccordionRoot"), ud = /* @__PURE__ */ x({
  __name: "AccordionRoot",
  props: {
    collapsible: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    dir: {},
    orientation: { default: "vertical" },
    asChild: { type: Boolean },
    as: {},
    type: {},
    modelValue: {},
    defaultValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = t, { dir: a, disabled: r } = pe(n), l = yt(a), { modelValue: i, changeModelValue: u, isSingle: d } = ld(n, o), { forwardRef: c, currentElement: p } = M();
    return id({
      disabled: r,
      direction: l,
      orientation: n.orientation,
      parentElement: p,
      isSingle: d,
      collapsible: n.collapsible,
      modelValue: i,
      changeModelValue: u
    }), (m, f) => (h(), C(s(K), {
      ref: s(c),
      "as-child": m.asChild,
      as: m.as
    }, {
      default: y(() => [
        _(m.$slots, "default", { modelValue: s(i) })
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), [wa, dd] = oe("AccordionItem"), cd = /* @__PURE__ */ x({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e, { expose: t }) {
    const n = e, o = oo(), a = S(
      () => o.isSingle.value ? n.value === o.modelValue.value : Array.isArray(o.modelValue.value) && o.modelValue.value.includes(n.value)
    ), r = S(() => o.disabled.value || n.disabled), l = S(() => r.value ? "" : void 0), i = S(
      () => a.value ? "open" : "closed"
      /* Closed */
    );
    t({ open: a, dataDisabled: l });
    const { currentRef: u, currentElement: d } = M();
    dd({
      open: a,
      dataState: i,
      disabled: r,
      dataDisabled: l,
      triggerId: "",
      currentRef: u,
      currentElement: d,
      value: S(() => n.value)
    });
    function c(p) {
      var m;
      const f = p.target;
      if (Array.from(((m = o.parentElement.value) == null ? void 0 : m.querySelectorAll("[data-radix-vue-collection-item]")) ?? []).findIndex((v) => v === f) === -1)
        return null;
      Os(
        p,
        d.value,
        o.parentElement.value,
        {
          arrowKeyOptions: o.orientation,
          dir: o.direction.value,
          focus: !0
        }
      );
    }
    return (p, m) => (h(), C(s(td), {
      "data-orientation": s(o).orientation,
      "data-disabled": l.value,
      "data-state": i.value,
      disabled: r.value,
      open: a.value,
      as: n.as,
      "as-child": n.asChild,
      onKeydown: mt(c, ["up", "down", "left", "right", "home", "end"])
    }, {
      default: y(() => [
        _(p.$slots, "default", { open: a.value })
      ]),
      _: 3
    }, 8, ["data-orientation", "data-disabled", "data-state", "disabled", "open", "as", "as-child"]));
  }
}), pd = /* @__PURE__ */ x({
  __name: "AccordionContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = oo(), o = wa();
    return M(), (a, r) => (h(), C(s(ad), {
      role: "region",
      hidden: !s(o).open.value,
      "as-child": t.asChild,
      "force-mount": t.forceMount,
      "aria-labelledby": s(o).triggerId,
      "data-state": s(o).dataState.value,
      "data-disabled": s(o).dataDisabled.value,
      "data-orientation": s(n).orientation,
      style: { "--radix-accordion-content-width": "var(--radix-collapsible-content-width)", "--radix-accordion-content-height": "var(--radix-collapsible-content-height)" }
    }, {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["hidden", "as-child", "force-mount", "aria-labelledby", "data-state", "data-disabled", "data-orientation"]));
  }
}), fd = /* @__PURE__ */ x({
  __name: "AccordionHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "h3" }
  },
  setup(e) {
    const t = e, n = oo(), o = wa();
    return M(), (a, r) => (h(), C(s(K), {
      as: t.as,
      "as-child": t.asChild,
      "data-orientation": s(n).orientation,
      "data-state": s(o).dataState.value,
      "data-disabled": s(o).dataDisabled.value
    }, {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-orientation", "data-state", "data-disabled"]));
  }
}), md = /* @__PURE__ */ x({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = oo(), o = wa();
    o.triggerId || (o.triggerId = Ce(void 0, "radix-vue-accordion-trigger"));
    function a() {
      const r = n.isSingle.value && o.open.value && !n.collapsible;
      o.disabled.value || r || n.changeModelValue(o.value.value);
    }
    return (r, l) => (h(), C(s(nd), {
      id: s(o).triggerId,
      ref: s(o).currentRef,
      "data-radix-vue-collection-item": "",
      as: t.as,
      "as-child": t.asChild,
      "aria-disabled": s(o).disabled.value || void 0,
      "aria-expanded": s(o).open.value || !1,
      "data-disabled": s(o).dataDisabled.value,
      "data-orientation": s(n).orientation,
      "data-state": s(o).dataState.value,
      disabled: s(o).disabled.value,
      onClick: a
    }, {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "as", "as-child", "aria-disabled", "aria-expanded", "data-disabled", "data-orientation", "data-state", "disabled"]));
  }
}), [et, vd] = oe("DialogRoot"), xa = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = ge(n, "open", t, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), a = T(), r = T(), { modal: l } = pe(n);
    return vd({
      open: o,
      modal: l,
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
      triggerElement: a,
      contentElement: r
    }), (i, u) => _(i.$slots, "default", { open: s(o) });
  }
}), _a = /* @__PURE__ */ x({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = et(), { forwardRef: o, currentElement: a } = M();
    return n.contentId || (n.contentId = Ce(void 0, "radix-vue-dialog-content")), se(() => {
      n.triggerElement.value = a.value;
    }), (r, l) => (h(), C(s(K), D(t, {
      ref: s(o),
      type: r.as === "button" ? "button" : void 0,
      "aria-haspopup": "dialog",
      "aria-expanded": s(n).open.value || !1,
      "aria-controls": s(n).open.value ? s(n).contentId : void 0,
      "data-state": s(n).open.value ? "open" : "closed",
      onClick: s(n).onOpenToggle
    }), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "onClick"]));
  }
}), qt = /* @__PURE__ */ x({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = ga();
    return (n, o) => s(t) || n.forceMount ? (h(), C(Yn, {
      key: 0,
      to: n.to,
      disabled: n.disabled
    }, [
      _(n.$slots, "default")
    ], 8, ["to", "disabled"])) : ce("", !0);
  }
}), Ca = /* @__PURE__ */ x({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(qt), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), gd = "dismissableLayer.pointerDownOutside", hd = "dismissableLayer.focusOutside";
function Rs(e, t) {
  const n = t.closest(
    "[data-dismissable-layer]"
  ), o = e.dataset.dismissableLayer === "" ? e : e.querySelector(
    "[data-dismissable-layer]"
  ), a = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(n && o === n || a.indexOf(o) < a.indexOf(n));
}
function yd(e, t) {
  var n;
  const o = ((n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), a = T(!1), r = T(() => {
  });
  return we((l) => {
    if (!Je)
      return;
    const i = async (d) => {
      const c = d.target;
      if (t != null && t.value) {
        if (Rs(t.value, c)) {
          a.value = !1;
          return;
        }
        if (d.target && !a.value) {
          let p = function() {
            fa(
              gd,
              e,
              m
            );
          };
          const m = { originalEvent: d };
          d.pointerType === "touch" ? (o.removeEventListener("click", r.value), r.value = p, o.addEventListener("click", r.value, {
            once: !0
          })) : p();
        } else
          o.removeEventListener("click", r.value);
        a.value = !1;
      }
    }, u = window.setTimeout(() => {
      o.addEventListener("pointerdown", i);
    }, 0);
    l(() => {
      window.clearTimeout(u), o.removeEventListener("pointerdown", i), o.removeEventListener("click", r.value);
    });
  }), {
    onPointerDownCapture: () => a.value = !0
  };
}
function bd(e, t) {
  var n;
  const o = ((n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), a = T(!1);
  return we((r) => {
    if (!Je)
      return;
    const l = async (i) => {
      t != null && t.value && (await ae(), !(!t.value || Rs(t.value, i.target)) && i.target && !a.value && fa(
        hd,
        e,
        { originalEvent: i }
      ));
    };
    o.addEventListener("focusin", l), r(() => o.removeEventListener("focusin", l));
  }), {
    onFocusCapture: () => a.value = !0,
    onBlurCapture: () => a.value = !1
  };
}
const Ke = Qr({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Yt = /* @__PURE__ */ x({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, o = t, { forwardRef: a, currentElement: r } = M(), l = S(
      () => {
        var v;
        return ((v = r.value) == null ? void 0 : v.ownerDocument) ?? globalThis.document;
      }
    ), i = S(() => Ke.layersRoot), u = S(() => r.value ? Array.from(i.value).indexOf(r.value) : -1), d = S(() => Ke.layersWithOutsidePointerEventsDisabled.size > 0), c = S(() => {
      const v = Array.from(i.value), [g] = [...Ke.layersWithOutsidePointerEventsDisabled].slice(-1), b = v.indexOf(g);
      return u.value >= b;
    }), p = yd(async (v) => {
      const g = [...Ke.branches].some(
        (b) => b == null ? void 0 : b.contains(v.target)
      );
      !c.value || g || (o("pointerDownOutside", v), o("interactOutside", v), await ae(), v.defaultPrevented || o("dismiss"));
    }, r), m = bd((v) => {
      [...Ke.branches].some(
        (g) => g == null ? void 0 : g.contains(v.target)
      ) || (o("focusOutside", v), o("interactOutside", v), v.defaultPrevented || o("dismiss"));
    }, r);
    va("Escape", (v) => {
      u.value === i.value.size - 1 && (o("escapeKeyDown", v), v.defaultPrevented || o("dismiss"));
    });
    let f;
    return we((v) => {
      r.value && (n.disableOutsidePointerEvents && (Ke.layersWithOutsidePointerEventsDisabled.size === 0 && (f = l.value.body.style.pointerEvents, l.value.body.style.pointerEvents = "none"), Ke.layersWithOutsidePointerEventsDisabled.add(r.value)), i.value.add(r.value), v(() => {
        n.disableOutsidePointerEvents && Ke.layersWithOutsidePointerEventsDisabled.size === 1 && (l.value.body.style.pointerEvents = f);
      }));
    }), we((v) => {
      v(() => {
        r.value && (i.value.delete(r.value), Ke.layersWithOutsidePointerEventsDisabled.delete(r.value));
      });
    }), (v, g) => (h(), C(s(K), {
      ref: s(a),
      "as-child": v.asChild,
      as: v.as,
      "data-dismissable-layer": "",
      style: Ot({
        pointerEvents: d.value ? c.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: s(m).onFocusCapture,
      onBlurCapture: s(m).onBlurCapture,
      onPointerdownCapture: s(p).onPointerDownCapture
    }, {
      default: y(() => [
        _(v.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
}), wd = /* @__PURE__ */ x({
  __name: "DismissableLayerBranch",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: o } = M();
    return se(() => {
      Ke.branches.add(o.value);
    }), ze(() => {
      Ke.branches.delete(o.value);
    }), (a, r) => (h(), C(s(K), D({ ref: s(n) }, t), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), To = "focusScope.autoFocusOnMount", Do = "focusScope.autoFocusOnUnmount", br = { bubbles: !1, cancelable: !0 };
function Vn(e, { select: t = !1 } = {}) {
  const n = $e();
  for (const o of e)
    if (ft(o, { select: t }), $e() !== n)
      return !0;
}
function xd(e) {
  const t = Ba(e), n = wr(t, e), o = wr(t.reverse(), e);
  return [n, o];
}
function Ba(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const a = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || a ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function wr(e, t) {
  for (const n of e)
    if (!_d(n, { upTo: t }))
      return n;
}
function _d(e, { upTo: t }) {
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
function Cd(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function ft(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = $e();
    e.focus({ preventScroll: !0 }), e !== n && Cd(e) && t && e.select();
  }
}
const Bd = hu(() => T([]));
function $d() {
  const e = Bd();
  return {
    add(t) {
      const n = e.value[0];
      t !== n && (n == null || n.pause()), e.value = xr(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var n;
      e.value = xr(e.value, t), (n = e.value[0]) == null || n.resume();
    }
  };
}
function xr(e, t) {
  const n = [...e], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function Sd(e) {
  return e.filter((t) => t.tagName !== "A");
}
const ao = /* @__PURE__ */ x({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, o = t, { currentRef: a, currentElement: r } = M(), l = T(null), i = $d(), u = Qr({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    we((c) => {
      if (!Je)
        return;
      const p = r.value;
      if (!n.trapped)
        return;
      function m(b) {
        if (u.paused || !p)
          return;
        const w = b.target;
        p.contains(w) ? l.value = w : ft(l.value, { select: !0 });
      }
      function f(b) {
        if (u.paused || !p)
          return;
        const w = b.relatedTarget;
        w !== null && (p.contains(w) || ft(l.value, { select: !0 }));
      }
      function v(b) {
        p.contains(l.value) || ft(p);
      }
      document.addEventListener("focusin", m), document.addEventListener("focusout", f);
      const g = new MutationObserver(v);
      p && g.observe(p, { childList: !0, subtree: !0 }), c(() => {
        document.removeEventListener("focusin", m), document.removeEventListener("focusout", f), g.disconnect();
      });
    }), we(async (c) => {
      const p = r.value;
      if (await ae(), !p)
        return;
      i.add(u);
      const m = $e();
      if (!p.contains(m)) {
        const f = new CustomEvent(To, br);
        p.addEventListener(To, (v) => o("mountAutoFocus", v)), p.dispatchEvent(f), f.defaultPrevented || (Vn(Sd(Ba(p)), {
          select: !0
        }), $e() === m && ft(p));
      }
      c(() => {
        p.removeEventListener(To, (g) => o("mountAutoFocus", g));
        const f = new CustomEvent(Do, br), v = (g) => {
          o("unmountAutoFocus", g);
        };
        p.addEventListener(Do, v), p.dispatchEvent(f), setTimeout(() => {
          f.defaultPrevented || ft(m ?? document.body, { select: !0 }), p.removeEventListener(Do, v), i.remove(u);
        }, 0);
      });
    });
    function d(c) {
      if (!n.loop && !n.trapped || u.paused)
        return;
      const p = c.key === "Tab" && !c.altKey && !c.ctrlKey && !c.metaKey, m = $e();
      if (p && m) {
        const f = c.currentTarget, [v, g] = xd(f);
        v && g ? !c.shiftKey && m === g ? (c.preventDefault(), n.loop && ft(v, { select: !0 })) : c.shiftKey && m === v && (c.preventDefault(), n.loop && ft(g, { select: !0 })) : m === f && c.preventDefault();
      }
    }
    return (c, p) => (h(), C(s(K), {
      ref_key: "currentRef",
      ref: a,
      tabindex: "-1",
      "as-child": c.asChild,
      as: c.as,
      onKeydown: d
    }, {
      default: y(() => [
        _(c.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), kd = "menu.itemSelect", jo = ["Enter", " "], Od = ["ArrowDown", "PageUp", "Home"], Fs = ["ArrowUp", "PageDown", "End"], Ed = [...Od, ...Fs], Ad = {
  ltr: [...jo, "ArrowRight"],
  rtl: [...jo, "ArrowLeft"]
}, Td = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function $a(e) {
  return e ? "open" : "closed";
}
function Un(e) {
  return e === "indeterminate";
}
function Sa(e) {
  return Un(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Ko(e) {
  const t = $e();
  for (const n of e)
    if (n === t || (n.focus(), $e() !== t))
      return;
}
function Dd(e, t) {
  const { x: n, y: o } = e;
  let a = !1;
  for (let r = 0, l = t.length - 1; r < t.length; l = r++) {
    const i = t[r].x, u = t[r].y, d = t[l].x, c = t[l].y;
    u > o != c > o && n < (d - i) * (o - u) / (c - u) + i && (a = !a);
  }
  return a;
}
function Pd(e, t) {
  if (!t)
    return !1;
  const n = { x: e.clientX, y: e.clientY };
  return Dd(n, t);
}
function pn(e) {
  return e.pointerType === "mouse";
}
const Id = "DialogTitle", Md = "DialogContent";
function Rd({
  titleName: e = Id,
  contentName: t = Md,
  componentLink: n = "dialog.html#title",
  titleId: o,
  descriptionId: a,
  contentElement: r
}) {
  const l = `Warning: \`${t}\` requires a \`${e}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.radix-vue.com/components/${n}`, i = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${t}.`;
  se(() => {
    var u;
    document.getElementById(o) || console.warn(l);
    const d = (u = r.value) == null ? void 0 : u.getAttribute("aria-describedby");
    a && d && (document.getElementById(a) || console.warn(i));
  });
}
const Vs = /* @__PURE__ */ x({
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
    const n = e, o = t, a = et(), { forwardRef: r, currentElement: l } = M();
    return a.titleId || (a.titleId = Ce(void 0, "radix-vue-dialog-title")), a.descriptionId || (a.descriptionId = Ce(void 0, "radix-vue-dialog-description")), se(() => {
      a.contentElement = l, $e() !== document.body && (a.triggerElement.value = $e());
    }), process.env.NODE_ENV !== "production" && Rd({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: a.titleId,
      descriptionId: a.descriptionId,
      contentElement: l
    }), (i, u) => (h(), C(s(ao), {
      "as-child": "",
      loop: "",
      trapped: n.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => o("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => o("closeAutoFocus", d))
    }, {
      default: y(() => [
        R(s(Yt), D({
          id: s(a).contentId,
          ref: s(r),
          as: i.as,
          "as-child": i.asChild,
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": s(a).descriptionId,
          "aria-labelledby": s(a).titleId,
          "data-state": s($a)(s(a).open.value)
        }, i.$attrs, {
          onDismiss: u[0] || (u[0] = (d) => s(a).onOpenChange(!1)),
          onEscapeKeyDown: u[1] || (u[1] = (d) => o("escapeKeyDown", d)),
          onFocusOutside: u[2] || (u[2] = (d) => o("focusOutside", d)),
          onInteractOutside: u[3] || (u[3] = (d) => o("interactOutside", d)),
          onPointerDownOutside: u[4] || (u[4] = (d) => o("pointerDownOutside", d))
        }), {
          default: y(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "as", "as-child", "disable-outside-pointer-events", "aria-describedby", "aria-labelledby", "data-state"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
}), Fd = /* @__PURE__ */ x({
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
    const n = e, o = t, a = et(), r = bt(o), { forwardRef: l, currentElement: i } = M();
    return _n(i), (u, d) => (h(), C(Vs, D({ ...n, ...s(r) }, {
      ref: s(l),
      "trap-focus": s(a).open.value,
      "disable-outside-pointer-events": !0,
      onCloseAutoFocus: d[0] || (d[0] = (c) => {
        var p;
        c.defaultPrevented || (c.preventDefault(), (p = s(a).triggerElement.value) == null || p.focus());
      }),
      onPointerDownOutside: d[1] || (d[1] = (c) => {
        const p = c.detail.originalEvent, m = p.button === 0 && p.ctrlKey === !0;
        (p.button === 2 || m) && c.preventDefault();
      }),
      onFocusOutside: d[2] || (d[2] = (c) => {
        c.preventDefault();
      })
    }), {
      default: y(() => [
        _(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), Vd = /* @__PURE__ */ x({
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
    const n = e, o = bt(t);
    M();
    const a = et(), r = T(!1), l = T(!1);
    return (i, u) => (h(), C(Vs, D({ ...n, ...s(o) }, {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: u[0] || (u[0] = (d) => {
        var c;
        d.defaultPrevented || (r.value || (c = s(a).triggerElement.value) == null || c.focus(), d.preventDefault()), r.value = !1, l.value = !1;
      }),
      onInteractOutside: u[1] || (u[1] = (d) => {
        var c;
        d.defaultPrevented || (r.value = !0, d.detail.originalEvent.type === "pointerdown" && (l.value = !0));
        const p = d.target;
        (c = s(a).triggerElement.value) != null && c.contains(p) && d.preventDefault(), d.detail.originalEvent.type === "focusin" && l.value && d.preventDefault();
      })
    }), {
      default: y(() => [
        _(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ro = /* @__PURE__ */ x({
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
    const n = e, o = t, a = et(), r = bt(o), { forwardRef: l } = M();
    return (i, u) => (h(), C(s(Ne), {
      present: i.forceMount || s(a).open.value
    }, {
      default: y(() => [
        s(a).modal.value ? (h(), C(Fd, D({
          key: 0,
          ref: s(l)
        }, { ...n, ...s(r), ...i.$attrs }), {
          default: y(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (h(), C(Vd, D({
          key: 1,
          ref: s(l)
        }, { ...n, ...s(r), ...i.$attrs }), {
          default: y(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Ld = /* @__PURE__ */ x({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = et();
    return xn(!0), M(), (n, o) => (h(), C(s(K), {
      as: n.as,
      "as-child": n.asChild,
      "data-state": s(t).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" }
    }, {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state"]));
  }
}), so = /* @__PURE__ */ x({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = et(), { forwardRef: n } = M();
    return (o, a) => {
      var r;
      return (r = s(t)) != null && r.modal.value ? (h(), C(s(Ne), {
        key: 0,
        present: o.forceMount || s(t).open.value
      }, {
        default: y(() => [
          R(Ld, D(o.$attrs, {
            ref: s(n),
            as: o.as,
            "as-child": o.asChild
          }), {
            default: y(() => [
              _(o.$slots, "default")
            ]),
            _: 3
          }, 16, ["as", "as-child"])
        ]),
        _: 3
      }, 8, ["present"])) : ce("", !0);
    };
  }
}), Tt = /* @__PURE__ */ x({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    M();
    const n = et();
    return (o, a) => (h(), C(s(K), D(t, {
      type: o.as === "button" ? "button" : void 0,
      onClick: a[0] || (a[0] = (r) => s(n).onOpenChange(!1))
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
}), ka = /* @__PURE__ */ x({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e, n = et();
    return M(), (o, a) => (h(), C(s(K), D(t, {
      id: s(n).titleId
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Oa = /* @__PURE__ */ x({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    M();
    const n = et();
    return (o, a) => (h(), C(s(K), D(t, {
      id: s(n).descriptionId
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), zd = /* @__PURE__ */ x({
  __name: "AlertDialogRoot",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = Z(e, t);
    return M(), (o, a) => (h(), C(s(xa), D(s(n), { modal: !0 }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Nd = /* @__PURE__ */ x({
  __name: "AlertDialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    return M(), (n, o) => (h(), C(s(_a), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), jd = /* @__PURE__ */ x({
  __name: "AlertDialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(qt), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Kd, Hd] = oe("AlertDialogContent"), Ud = /* @__PURE__ */ x({
  __name: "AlertDialogContent",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, o = bt(t);
    M();
    const a = T();
    return Hd({
      onCancelElementChange: (r) => {
        a.value = r;
      }
    }), (r, l) => (h(), C(s(ro), D({ ...n, ...s(o) }, {
      role: "alertdialog",
      onPointerDownOutside: l[0] || (l[0] = Be(() => {
      }, ["prevent"])),
      onInteractOutside: l[1] || (l[1] = Be(() => {
      }, ["prevent"])),
      onOpenAutoFocus: l[2] || (l[2] = () => {
        ae(() => {
          var i;
          (i = a.value) == null || i.focus({
            preventScroll: !0
          });
        });
      })
    }), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Wd = /* @__PURE__ */ x({
  __name: "AlertDialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return M(), (n, o) => (h(), C(s(so), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Gd = /* @__PURE__ */ x({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Kd(), { forwardRef: o, currentElement: a } = M();
    return se(() => {
      n.onCancelElementChange(a.value);
    }), (r, l) => (h(), C(s(Tt), D(t, { ref: s(o) }), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), qd = /* @__PURE__ */ x({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e;
    return M(), (n, o) => (h(), C(s(ka), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Yd = /* @__PURE__ */ x({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    return M(), (n, o) => (h(), C(s(Oa), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Xd = /* @__PURE__ */ x({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    return M(), (n, o) => (h(), C(s(Tt), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Ls, Zd] = oe("AvatarRoot"), Qd = /* @__PURE__ */ x({
  __name: "AvatarRoot",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return M(), Zd({
      imageLoadingStatus: T("loading")
    }), (t, n) => (h(), C(s(K), {
      "as-child": t.asChild,
      as: t.as
    }, {
      default: y(() => [
        _(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
});
function Jd(e, t) {
  const n = T("idle"), o = T(!1), a = (r) => () => {
    o.value && (n.value = r);
  };
  return se(() => {
    o.value = !0, X([() => e.value, () => t == null ? void 0 : t.value], ([r, l]) => {
      if (!r)
        n.value = "error";
      else {
        const i = new window.Image();
        n.value = "loading", i.onload = a("loaded"), i.onerror = a("error"), i.src = r, l && (i.referrerPolicy = l);
      }
    }, { immediate: !0 });
  }), ze(() => {
    o.value = !1;
  }), n;
}
const ec = /* @__PURE__ */ x({
  __name: "AvatarImage",
  props: {
    src: {},
    referrerPolicy: {},
    asChild: { type: Boolean },
    as: { default: "img" }
  },
  emits: ["loadingStatusChange"],
  setup(e, { emit: t }) {
    const n = e, o = t, { src: a, referrerPolicy: r } = pe(n);
    M();
    const l = Ls(), i = Jd(a, r);
    return X(
      i,
      (u) => {
        o("loadingStatusChange", u), u !== "idle" && (l.imageLoadingStatus.value = u);
      },
      { immediate: !0 }
    ), (u, d) => Ut((h(), C(s(K), {
      role: "img",
      "as-child": u.asChild,
      as: u.as,
      src: s(a),
      "referrer-policy": s(r)
    }, {
      default: y(() => [
        _(u.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "src", "referrer-policy"])), [
      [ea, s(i) === "loaded"]
    ]);
  }
}), tc = /* @__PURE__ */ x({
  __name: "AvatarFallback",
  props: {
    delayMs: { default: 0 },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = Ls();
    M();
    const o = T(!1);
    let a;
    return X(n.imageLoadingStatus, (r) => {
      r === "loading" && (o.value = !1, t.delayMs ? a = setTimeout(() => {
        o.value = !0, clearTimeout(a);
      }, t.delayMs) : o.value = !0);
    }, { immediate: !0 }), (r, l) => o.value && s(n).imageLoadingStatus.value !== "loaded" ? (h(), C(s(K), {
      key: 0,
      "as-child": r.asChild,
      as: r.as
    }, {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"])) : ce("", !0);
  }
}), [zs, nc] = oe("PopperRoot"), Xt = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = T();
    return nc({
      anchor: t,
      onAnchorChange: (n) => t.value = n
    }), (n, o) => _(n.$slots, "default");
  }
}), Cn = /* @__PURE__ */ x({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: o } = M(), a = zs();
    return we(() => {
      a.onAnchorChange(t.element ?? o.value);
    }), (r, l) => (h(), C(s(K), {
      ref: s(n),
      as: r.as,
      "as-child": r.asChild
    }, {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function oc(e) {
  return e !== null;
}
function ac(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var n, o, a;
      const { placement: r, rects: l, middlewareData: i } = t, u = ((n = i.arrow) == null ? void 0 : n.centerOffset) !== 0, d = u ? 0 : e.arrowWidth, c = u ? 0 : e.arrowHeight, [p, m] = Ho(r), f = { start: "0%", center: "50%", end: "100%" }[m], v = (((o = i.arrow) == null ? void 0 : o.x) ?? 0) + d / 2, g = (((a = i.arrow) == null ? void 0 : a.y) ?? 0) + c / 2;
      let b = "", w = "";
      return p === "bottom" ? (b = u ? f : `${v}px`, w = `${-c}px`) : p === "top" ? (b = u ? f : `${v}px`, w = `${l.floating.height + c}px`) : p === "right" ? (b = `${-c}px`, w = u ? f : `${g}px`) : p === "left" && (b = `${l.floating.width + c}px`, w = u ? f : `${g}px`), { data: { x: b, y: w } };
    }
  };
}
function Ho(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
const Ns = {
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
}, [M0, rc] = oe("PopperContent"), Ht = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ ts({
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
    ...Ns
  }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = zs(), { forwardRef: r, currentElement: l } = M(), i = T(), u = T(), { width: d, height: c } = Ds(u), p = S(
      () => n.side + (n.align !== "center" ? `-${n.align}` : "")
    ), m = S(() => typeof n.collisionPadding == "number" ? n.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...n.collisionPadding }), f = S(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), v = S(() => ({
      padding: m.value,
      boundary: f.value.filter(oc),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: f.value.length > 0
    })), g = vu(() => [
      ou({
        mainAxis: n.sideOffset + c.value,
        alignmentAxis: n.alignOffset
      }),
      n.prioritizePosition && n.avoidCollisions && vr({
        ...v.value
      }),
      n.avoidCollisions && au({
        mainAxis: !0,
        crossAxis: !!n.prioritizePosition,
        limiter: n.sticky === "partial" ? iu() : void 0,
        ...v.value
      }),
      !n.prioritizePosition && n.avoidCollisions && vr({
        ...v.value
      }),
      ru({
        ...v.value,
        apply: ({ elements: A, rects: L, availableWidth: F, availableHeight: q }) => {
          const { width: G, height: Q } = L.reference, le = A.floating.style;
          le.setProperty(
            "--radix-popper-available-width",
            `${F}px`
          ), le.setProperty(
            "--radix-popper-available-height",
            `${q}px`
          ), le.setProperty(
            "--radix-popper-anchor-width",
            `${G}px`
          ), le.setProperty(
            "--radix-popper-anchor-height",
            `${Q}px`
          );
        }
      }),
      u.value && cu({ element: u.value, padding: n.arrowPadding }),
      ac({
        arrowWidth: d.value,
        arrowHeight: c.value
      }),
      n.hideWhenDetached && su({ strategy: "referenceHidden", ...v.value })
    ]), { floatingStyles: b, placement: w, isPositioned: B, middlewareData: $ } = pu(
      a.anchor,
      i,
      {
        strategy: "fixed",
        placement: p,
        whileElementsMounted: (...A) => nu(...A, {
          animationFrame: n.updatePositionStrategy === "always"
        }),
        middleware: g
      }
    ), E = S(
      () => Ho(w.value)[0]
    ), k = S(
      () => Ho(w.value)[1]
    );
    ei(() => {
      B.value && o("placed");
    });
    const P = S(
      () => {
        var A;
        return ((A = $.value.arrow) == null ? void 0 : A.centerOffset) !== 0;
      }
    ), O = T("");
    we(() => {
      l.value && (O.value = window.getComputedStyle(l.value).zIndex);
    });
    const I = S(() => {
      var A;
      return ((A = $.value.arrow) == null ? void 0 : A.x) ?? 0;
    }), V = S(() => {
      var A;
      return ((A = $.value.arrow) == null ? void 0 : A.y) ?? 0;
    });
    return rc({
      placedSide: E,
      onArrowChange: (A) => u.value = A,
      arrowX: I,
      arrowY: V,
      shouldHideArrow: P
    }), (A, L) => {
      var F, q, G;
      return h(), N("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-radix-popper-content-wrapper": "",
        style: Ot({
          ...s(b),
          transform: s(B) ? s(b).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: O.value,
          "--radix-popper-transform-origin": [
            (F = s($).transformOrigin) == null ? void 0 : F.x,
            (q = s($).transformOrigin) == null ? void 0 : q.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((G = s($).hide) == null ? void 0 : G.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        R(s(K), D({ ref: s(r) }, A.$attrs, {
          "as-child": n.asChild,
          as: A.as,
          "data-side": E.value,
          "data-align": k.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: s(B) ? void 0 : "none"
          }
        }), {
          default: y(() => [
            _(A.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
}), Bn = /* @__PURE__ */ x({
  __name: "VisuallyHidden",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return M(), (t, n) => (h(), C(s(K), {
      as: t.as,
      "as-child": t.asChild,
      style: {
        // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
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
      default: y(() => [
        _(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), sc = /* @__PURE__ */ x({
  __name: "VisuallyHiddenInput",
  props: {
    name: {},
    value: {},
    required: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, n = S(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" ? [{ name: t.name, value: t.value }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((o, a) => typeof o == "object" ? Object.entries(o).map(([r, l]) => ({ name: `[${a}][${t.name}][${r}]`, value: l })) : { name: `[${t.name}][${a}]`, value: o }) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([o, a]) => ({ name: `[${t.name}][${o}]`, value: a })) : []);
    return (o, a) => (h(!0), N(be, null, vt(n.value, (r) => (h(), C(Bn, {
      key: r.name,
      as: "input",
      type: "hidden",
      hidden: "",
      readonly: "",
      name: r.name,
      value: r.value,
      required: o.required,
      disabled: o.disabled
    }, null, 8, ["name", "value", "required", "disabled"]))), 128));
  }
}), lc = "data-radix-vue-collection-item", [Ea, ic] = oe("CollectionProvider");
function Aa(e = lc) {
  const t = T(/* @__PURE__ */ new Map()), n = T(), o = ic({
    collectionRef: n,
    itemMap: t,
    attrName: e
  }), { getItems: a } = Da(o), r = S(() => Array.from(o.itemMap.value.values())), l = S(() => o.itemMap.value.size);
  return { getItems: a, reactiveItems: r, itemMapSize: l };
}
const Ta = x({
  name: "CollectionSlot",
  setup(e, { slots: t }) {
    const n = Ea(), { primitiveElement: o, currentElement: a } = Ps();
    return X(a, () => {
      n.collectionRef.value = a.value;
    }), () => Oe(ba, { ref: o }, t);
  }
}), lo = x({
  name: "CollectionItem",
  inheritAttrs: !1,
  props: {
    value: {
      // It accepts any value
      validator: () => !0
    }
  },
  setup(e, { slots: t, attrs: n }) {
    const o = Ea(), { primitiveElement: a, currentElement: r } = Ps();
    return we((l) => {
      if (r.value) {
        const i = es(r.value);
        o.itemMap.value.set(i, { ref: r.value, value: e.value }), l(() => o.itemMap.value.delete(i));
      }
    }), () => Oe(ba, { ...n, [o.attrName]: "", ref: a }, t);
  }
});
function Da(e) {
  const t = e ?? Ea();
  return { getItems: () => {
    const n = t.collectionRef.value;
    if (!n)
      return [];
    const o = Array.from(n.querySelectorAll(`[${t.attrName}]`));
    return Array.from(t.itemMap.value.values()).sort(
      (a, r) => o.indexOf(a.ref) - o.indexOf(r.ref)
    );
  } };
}
const [Zt, uc] = oe("ComboboxRoot"), dc = /* @__PURE__ */ x({
  __name: "ComboboxRoot",
  props: {
    modelValue: {},
    defaultValue: {},
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean },
    searchTerm: {},
    selectedValue: {},
    multiple: { type: Boolean },
    disabled: { type: Boolean },
    name: {},
    dir: {},
    filterFunction: {},
    displayValue: {},
    resetSearchTermOnBlur: { type: Boolean, default: !0 },
    resetSearchTermOnSelect: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "update:open", "update:searchTerm", "update:selectedValue"],
  setup(e, { emit: t }) {
    const n = e, o = t, { multiple: a, disabled: r, dir: l } = pe(n), i = yt(l), u = ge(n, "searchTerm", o, {
      // @ts-expect-error ignore the type error here
      defaultValue: "",
      passive: n.searchTerm === void 0
    }), d = ge(n, "modelValue", o, {
      // @ts-expect-error ignore the type error here
      defaultValue: n.defaultValue ?? a.value ? [] : void 0,
      passive: n.modelValue === void 0,
      deep: !0
    }), c = ge(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), p = ge(n, "selectedValue", o, {
      defaultValue: void 0,
      passive: n.selectedValue === void 0
    });
    async function m(j) {
      var Y, J;
      c.value = j, await ae(), j ? (d.value && (Array.isArray(d.value) && a.value ? p.value = (Y = $().find((De) => {
        var Ie, Pe;
        return ((Pe = (Ie = De.ref) == null ? void 0 : Ie.dataset) == null ? void 0 : Pe.state) === "checked";
      })) == null ? void 0 : Y.value : p.value = d.value), await ae(), (J = g.value) == null || J.focus(), q()) : (v.value = !1, n.resetSearchTermOnBlur && I("blur"));
    }
    function f(j) {
      if (Array.isArray(d.value) && a.value) {
        const Y = d.value.findIndex((De) => Bt(De, j)), J = [...d.value];
        Y === -1 ? J.push(j) : J.splice(Y, 1), d.value = J;
      } else
        d.value = j, m(!1);
    }
    const v = T(!1), g = T(), b = T(), { forwardRef: w, currentElement: B } = M(), { getItems: $, reactiveItems: E, itemMapSize: k } = Aa("data-radix-vue-combobox-item"), P = T([]);
    X(() => k.value, () => {
      P.value = $().map((j) => j.value);
    }, {
      immediate: !0,
      flush: "post"
    });
    const O = S(() => {
      if (v.value) {
        if (n.filterFunction)
          return n.filterFunction(P.value, u.value);
        const j = P.value.filter((Y) => typeof Y == "string");
        if (j.length)
          return j.filter((Y) => {
            var J;
            return Y.toLowerCase().includes((J = u.value) == null ? void 0 : J.toLowerCase());
          });
      }
      return P.value;
    });
    function I(j) {
      const Y = j === "blur" || j === "select" && n.resetSearchTermOnSelect;
      !a.value && d.value && !Array.isArray(d.value) ? n.displayValue ? u.value = n.displayValue(d.value) : typeof d.value != "object" ? u.value = d.value.toString() : Y && (u.value = "") : Y && (u.value = "");
    }
    const V = S(() => O.value.findIndex((j) => Bt(j, p.value))), A = S(() => {
      var j;
      return (j = E.value.find((Y) => Bt(Y.value, p.value))) == null ? void 0 : j.ref;
    }), L = S(() => JSON.stringify(d.value));
    X(L, async () => {
      await ae(), await ae(), I("select");
    }, {
      // If searchTerm is provided with value during initialization, we don't reset it immediately
      immediate: !n.searchTerm
    }), X(() => [O.value.length, u.value.length], async ([j, Y], [J, De]) => {
      await ae(), await ae(), j && (De > Y || V.value === -1) && (p.value = O.value[0]);
    });
    const F = no(B);
    function q() {
      var j;
      A.value instanceof Element && ((j = A.value) == null || j.scrollIntoView({ block: "nearest" }));
    }
    function G() {
      A.value instanceof Element && A.value.focus && A.value.focus();
    }
    const Q = T(!1);
    function le() {
      Q.value = !0;
    }
    function fe() {
      requestAnimationFrame(() => {
        Q.value = !1;
      });
    }
    async function ue(j) {
      var Y;
      O.value.length && p.value && A.value instanceof Element && (j.preventDefault(), j.stopPropagation(), Q.value || (Y = A.value) == null || Y.click());
    }
    return uc({
      searchTerm: u,
      modelValue: d,
      // @ts-expect-error ignoring
      onValueChange: f,
      isUserInputted: v,
      multiple: a,
      disabled: r,
      open: c,
      onOpenChange: m,
      filteredOptions: O,
      contentId: "",
      inputElement: g,
      selectedElement: A,
      onInputElementChange: (j) => g.value = j,
      onInputNavigation: async (j) => {
        const Y = V.value;
        Y === 0 && j === "up" || Y === O.value.length - 1 && j === "down" || (Y === -1 && O.value.length || j === "home" ? p.value = O.value[0] : j === "end" ? p.value = O.value[O.value.length - 1] : p.value = O.value[j === "up" ? Y - 1 : Y + 1], await ae(), q(), G(), ae(() => {
          var J;
          return (J = g.value) == null ? void 0 : J.focus({ preventScroll: !0 });
        }));
      },
      onInputEnter: ue,
      onCompositionEnd: fe,
      onCompositionStart: le,
      selectedValue: p,
      onSelectedValueChange: (j) => p.value = j,
      parentElement: B,
      contentElement: b,
      onContentElementChange: (j) => b.value = j
    }), (j, Y) => (h(), C(s(Xt), null, {
      default: y(() => [
        R(s(K), D({
          ref: s(w),
          style: {
            pointerEvents: s(c) ? "auto" : void 0
          },
          as: j.as,
          "as-child": j.asChild,
          dir: s(i)
        }, j.$attrs), {
          default: y(() => [
            _(j.$slots, "default", {
              open: s(c),
              modelValue: s(d)
            }),
            s(F) && n.name ? (h(), C(s(sc), {
              key: 0,
              name: n.name,
              value: s(d)
            }, null, 8, ["name", "value"])) : ce("", !0)
          ]),
          _: 3
        }, 16, ["style", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), cc = /* @__PURE__ */ x({
  __name: "ComboboxInput",
  props: {
    type: { default: "text" },
    disabled: { type: Boolean },
    autoFocus: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(e) {
    const t = e, n = Zt(), { forwardRef: o, currentElement: a } = M();
    se(() => {
      const c = a.value.nodeName === "INPUT" ? a.value : a.value.querySelector("input");
      c && (n.onInputElementChange(c), setTimeout(() => {
        t.autoFocus && (c == null || c.focus());
      }, 1));
    });
    const r = S(() => t.disabled || n.disabled.value || !1), l = T();
    Yl(() => {
      var c;
      return l.value = (c = n.selectedElement.value) == null ? void 0 : c.id;
    });
    function i(c) {
      n.open.value ? n.onInputNavigation(c.key === "ArrowUp" ? "up" : "down") : n.onOpenChange(!0);
    }
    function u(c) {
      n.open.value && n.onInputNavigation(c.key === "Home" ? "home" : "end");
    }
    function d(c) {
      var p;
      n.searchTerm.value = (p = c.target) == null ? void 0 : p.value, n.open.value || n.onOpenChange(!0), n.isUserInputted.value = !0;
    }
    return (c, p) => (h(), C(s(K), {
      ref: s(o),
      as: c.as,
      "as-child": c.asChild,
      type: c.type,
      disabled: r.value,
      value: s(n).searchTerm.value,
      "aria-expanded": s(n).open.value,
      "aria-controls": s(n).contentId,
      "aria-disabled": r.value ?? void 0,
      "aria-activedescendant": l.value,
      "aria-autocomplete": "list",
      role: "combobox",
      autocomplete: "false",
      onInput: d,
      onKeydown: [
        mt(Be(i, ["prevent"]), ["down", "up"]),
        mt(s(n).onInputEnter, ["enter"]),
        mt(Be(u, ["prevent"]), ["home", "end"])
      ],
      onCompositionstart: s(n).onCompositionStart,
      onCompositionend: s(n).onCompositionEnd
    }, {
      default: y(() => [
        _(c.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "disabled", "value", "aria-expanded", "aria-controls", "aria-disabled", "aria-activedescendant", "onKeydown", "onCompositionstart", "onCompositionend"]));
  }
}), [js, pc] = oe("ComboboxGroup"), fc = /* @__PURE__ */ x({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { currentRef: n, currentElement: o } = M(), a = Ce(void 0, "radix-vue-combobox-group"), r = Zt(), l = T(!1);
    function i() {
      if (!o.value)
        return;
      const u = o.value.querySelectorAll("[data-radix-vue-combobox-item]:not([data-hidden])");
      l.value = !!u.length;
    }
    return Ou(o, () => {
      ae(() => {
        i();
      });
    }, { childList: !0 }), X(() => r.searchTerm.value, () => {
      ae(() => {
        i();
      });
    }, { immediate: !0 }), pc({
      id: a
    }), (u, d) => Ut((h(), C(s(K), D(t, {
      ref_key: "currentRef",
      ref: n,
      role: "group",
      "aria-labelledby": s(a)
    }), {
      default: y(() => [
        _(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"])), [
      [ea, l.value]
    ]);
  }
}), mc = /* @__PURE__ */ x({
  __name: "ComboboxLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    M();
    const n = js({ id: "" });
    return (o, a) => (h(), C(s(K), D(t, {
      id: s(n).id
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), [R0, vc] = oe("ComboboxContent"), gc = /* @__PURE__ */ x({
  __name: "ComboboxContentImpl",
  props: {
    position: { default: "inline" },
    bodyLock: { type: Boolean },
    dismissable: { type: Boolean, default: !0 },
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
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(e, { emit: t }) {
    const n = e, o = t, { position: a } = pe(n), r = Zt();
    xn(n.bodyLock);
    const { forwardRef: l, currentElement: i } = M();
    _n(r.parentElement);
    const u = S(() => n.position === "popper" ? n : {}), d = Se(u.value);
    function c(m) {
      r.onSelectedValueChange("");
    }
    se(() => {
      r.onContentElementChange(i.value);
    });
    const p = {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      "--radix-combobox-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-combobox-content-available-width": "var(--radix-popper-available-width)",
      "--radix-combobox-content-available-height": "var(--radix-popper-available-height)",
      "--radix-combobox-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-combobox-trigger-height": "var(--radix-popper-anchor-height)"
    };
    return vc({ position: a }), (m, f) => (h(), C(s(Ta), null, {
      default: y(() => [
        m.dismissable ? (h(), C(s(Yt), {
          key: 0,
          "as-child": "",
          "disable-outside-pointer-events": m.disableOutsidePointerEvents,
          onDismiss: f[0] || (f[0] = (v) => s(r).onOpenChange(!1)),
          onFocusOutside: f[1] || (f[1] = (v) => {
            var g;
            (g = s(r).parentElement.value) != null && g.contains(v.target) && v.preventDefault(), o("focusOutside", v);
          }),
          onInteractOutside: f[2] || (f[2] = (v) => o("interactOutside", v)),
          onEscapeKeyDown: f[3] || (f[3] = (v) => o("escapeKeyDown", v)),
          onPointerDownOutside: f[4] || (f[4] = (v) => {
            var g;
            (g = s(r).parentElement.value) != null && g.contains(v.target) && v.preventDefault(), o("pointerDownOutside", v);
          })
        }, {
          default: y(() => [
            (h(), C(Ve(s(a) === "popper" ? s(Ht) : s(K)), D({ ...m.$attrs, ...s(d) }, {
              id: s(r).contentId,
              ref: s(l),
              role: "listbox",
              "data-state": s(r).open.value ? "open" : "closed",
              style: {
                // flex layout so we can place the scroll buttons properly
                display: "flex",
                flexDirection: "column",
                // reset the outline by default as the content MAY get focused
                outline: "none",
                ...s(a) === "popper" ? p : {}
              },
              onPointerleave: c
            }), {
              default: y(() => [
                _(m.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "data-state", "style"]))
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])) : (h(), C(Ve(s(a) === "popper" ? s(Ht) : s(K)), D({ key: 1 }, { ...m.$attrs, ...u.value }, {
          id: s(r).contentId,
          ref: s(l),
          role: "listbox",
          "data-state": s(r).open.value ? "open" : "closed",
          style: {
            // flex layout so we can place the scroll buttons properly
            display: "flex",
            flexDirection: "column",
            // reset the outline by default as the content MAY get focused
            outline: "none",
            ...s(a) === "popper" ? p : {}
          },
          onPointerleave: c
        }), {
          default: y(() => [
            _(m.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "data-state", "style"]))
      ]),
      _: 3
    }));
  }
}), hc = /* @__PURE__ */ x({
  __name: "ComboboxContent",
  props: {
    forceMount: { type: Boolean },
    position: {},
    bodyLock: { type: Boolean },
    dismissable: { type: Boolean },
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
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(e, { emit: t }) {
    const n = Z(e, t), { forwardRef: o } = M(), a = Zt();
    return a.contentId || (a.contentId = Ce(void 0, "radix-vue-combobox-content")), (r, l) => (h(), C(s(Ne), {
      present: r.forceMount || s(a).open.value
    }, {
      default: y(() => [
        R(gc, D({ ...s(n), ...r.$attrs }, { ref: s(o) }), {
          default: y(() => [
            _(r.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), yc = /* @__PURE__ */ x({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    M();
    const n = Zt(), o = S(() => n.filteredOptions.value.length === 0);
    return (a, r) => o.value ? (h(), C(s(K), U(D({ key: 0 }, t)), {
      default: y(() => [
        _(a.$slots, "default", {}, () => [
          ke("No options")
        ])
      ]),
      _: 3
    }, 16)) : ce("", !0);
  }
});
function bc(e) {
  const t = to({
    nonce: T()
  });
  return S(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.nonce) == null ? void 0 : n.value);
  });
}
const [F0, wc] = oe("ComboboxItem"), xc = "combobox.select", _c = /* @__PURE__ */ x({
  __name: "ComboboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = t, { disabled: a } = pe(n), r = Zt();
    js({ id: "", options: T([]) });
    const { forwardRef: l } = M(), i = S(
      () => {
        var g, b;
        return r.multiple.value && Array.isArray(r.modelValue.value) ? (g = r.modelValue.value) == null ? void 0 : g.some((w) => Bt(w, n.value)) : Bt((b = r.modelValue) == null ? void 0 : b.value, n.value);
      }
    ), u = S(() => Bt(r.selectedValue.value, n.value)), d = Ce(void 0, "radix-vue-combobox-item"), c = Ce(void 0, "radix-vue-combobox-option"), p = S(() => r.isUserInputted.value ? r.searchTerm.value === "" || !!r.filteredOptions.value.find((g) => Bt(g, n.value)) : !0);
    async function m(g) {
      o("select", g), !(g != null && g.defaultPrevented) && !a.value && g && r.onValueChange(n.value);
    }
    function f(g) {
      if (!g)
        return;
      const b = { originalEvent: g, value: n.value };
      fa(xc, m, b);
    }
    async function v(g) {
      await ae(), !g.defaultPrevented && r.onSelectedValueChange(n.value);
    }
    if (n.value === "")
      throw new Error(
        "A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder."
      );
    return wc({
      isSelected: i
    }), (g, b) => (h(), C(s(lo), { value: g.value }, {
      default: y(() => [
        Ut(R(s(K), {
          id: s(c),
          ref: s(l),
          role: "option",
          tabindex: "-1",
          "aria-labelledby": s(d),
          "data-highlighted": u.value ? "" : void 0,
          "aria-selected": i.value,
          "data-state": i.value ? "checked" : "unchecked",
          "aria-disabled": s(a) || void 0,
          "data-disabled": s(a) ? "" : void 0,
          as: g.as,
          "as-child": g.asChild,
          "data-hidden": p.value ? void 0 : !0,
          onClick: f,
          onPointermove: v
        }, {
          default: y(() => [
            _(g.$slots, "default", {}, () => [
              ke(Te(g.value), 1)
            ])
          ]),
          _: 3
        }, 8, ["id", "aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "as", "as-child", "data-hidden"]), [
          [ea, p.value]
        ])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), Cc = /* @__PURE__ */ x({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return M(), (n, o) => (h(), C(s(K), D(t, { "aria-hidden": "true" }), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ks = /* @__PURE__ */ x({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(Cn), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Bc() {
  const e = T(!1);
  return se(() => {
    Kt("keydown", () => {
      e.value = !0;
    }, { capture: !0, passive: !0 }), Kt(["pointerdown", "pointermove"], () => {
      e.value = !1;
    }, { capture: !0, passive: !0 });
  }), e;
}
const $c = Bs(Bc), [Dt, Hs] = oe(["MenuRoot", "MenuSub"], "MenuContext"), [$n, Sc] = oe("MenuRoot"), kc = /* @__PURE__ */ x({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = t, { modal: a, dir: r } = pe(n), l = yt(r), i = ge(n, "open", o), u = T(), d = $c();
    return Hs({
      open: i,
      onOpenChange: (c) => {
        i.value = c;
      },
      content: u,
      onContentChange: (c) => {
        u.value = c;
      }
    }), Sc({
      onClose: () => {
        i.value = !1;
      },
      isUsingKeyboardRef: d,
      dir: l,
      modal: a
    }), (c, p) => (h(), C(s(Xt), null, {
      default: y(() => [
        _(c.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Oc = "rovingFocusGroup.onEntryFocus", Ec = { bubbles: !1, cancelable: !0 }, Ac = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Tc(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Dc(e, t, n) {
  const o = Tc(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o)))
    return Ac[o];
}
function Us(e, t = !1) {
  const n = $e();
  for (const o of e)
    if (o === n || (o.focus({ preventScroll: t }), $e() !== n))
      return;
}
function Pc(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
const [Ic, Mc] = oe("RovingFocusGroup"), Ws = /* @__PURE__ */ x({
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
    const o = e, a = n, { loop: r, orientation: l, dir: i } = pe(o), u = yt(i), d = ge(o, "currentTabStopId", a, {
      defaultValue: o.defaultCurrentTabStopId,
      passive: o.currentTabStopId === void 0
    }), c = T(!1), p = T(!1), m = T(0), { getItems: f } = Aa();
    function v(b) {
      const w = !p.value;
      if (b.currentTarget && b.target === b.currentTarget && w && !c.value) {
        const B = new CustomEvent(Oc, Ec);
        if (b.currentTarget.dispatchEvent(B), a("entryFocus", B), !B.defaultPrevented) {
          const $ = f().map((O) => O.ref).filter((O) => O.dataset.disabled !== ""), E = $.find((O) => O.getAttribute("data-active") === "true"), k = $.find(
            (O) => O.id === d.value
          ), P = [E, k, ...$].filter(
            Boolean
          );
          Us(P, o.preventScrollOnEntryFocus);
        }
      }
      p.value = !1;
    }
    function g() {
      setTimeout(() => {
        p.value = !1;
      }, 1);
    }
    return t({
      getItems: f
    }), Mc({
      loop: r,
      dir: u,
      orientation: l,
      currentTabStopId: d,
      onItemFocus: (b) => {
        d.value = b;
      },
      onItemShiftTab: () => {
        c.value = !0;
      },
      onFocusableItemAdd: () => {
        m.value++;
      },
      onFocusableItemRemove: () => {
        m.value--;
      }
    }), (b, w) => (h(), C(s(Ta), null, {
      default: y(() => [
        R(s(K), {
          tabindex: c.value || m.value === 0 ? -1 : 0,
          "data-orientation": s(l),
          as: b.as,
          "as-child": b.asChild,
          dir: s(u),
          style: { outline: "none" },
          onMousedown: w[0] || (w[0] = (B) => p.value = !0),
          onMouseup: g,
          onFocus: v,
          onBlur: w[1] || (w[1] = (B) => c.value = !1)
        }, {
          default: y(() => [
            _(b.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), Rc = /* @__PURE__ */ x({
  __name: "RovingFocusItem",
  props: {
    tabStopId: {},
    focusable: { type: Boolean, default: !0 },
    active: { type: Boolean, default: !0 },
    allowShiftKey: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = Ic(), o = S(() => t.tabStopId || Ce()), a = S(
      () => n.currentTabStopId.value === o.value
    ), { getItems: r } = Da();
    se(() => {
      t.focusable && n.onFocusableItemAdd();
    }), ze(() => {
      t.focusable && n.onFocusableItemRemove();
    });
    function l(i) {
      if (i.key === "Tab" && i.shiftKey) {
        n.onItemShiftTab();
        return;
      }
      if (i.target !== i.currentTarget)
        return;
      const u = Dc(
        i,
        n.orientation.value,
        n.dir.value
      );
      if (u !== void 0) {
        if (i.metaKey || i.ctrlKey || i.altKey || !t.allowShiftKey && i.shiftKey)
          return;
        i.preventDefault();
        let d = [...r().map((c) => c.ref).filter((c) => c.dataset.disabled !== "")];
        if (u === "last")
          d.reverse();
        else if (u === "prev" || u === "next") {
          u === "prev" && d.reverse();
          const c = d.indexOf(
            i.currentTarget
          );
          d = n.loop.value ? Pc(d, c + 1) : d.slice(c + 1);
        }
        ae(() => Us(d));
      }
    }
    return (i, u) => (h(), C(s(lo), null, {
      default: y(() => [
        R(s(K), {
          tabindex: a.value ? 0 : -1,
          "data-orientation": s(n).orientation.value,
          "data-active": i.active,
          "data-disabled": i.focusable ? void 0 : "",
          as: i.as,
          "as-child": i.asChild,
          onMousedown: u[0] || (u[0] = (d) => {
            i.focusable ? s(n).onItemFocus(o.value) : d.preventDefault();
          }),
          onFocus: u[1] || (u[1] = (d) => s(n).onItemFocus(o.value)),
          onKeydown: l
        }, {
          default: y(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "data-active", "data-disabled", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), [Pa, Fc] = oe("MenuContent"), Ia = /* @__PURE__ */ x({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ ts({
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
    ...Ns
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = Dt(), r = $n(), { trapFocus: l, disableOutsidePointerEvents: i, loop: u } = pe(n);
    ha(), xn(i.value);
    const d = T(""), c = T(0), p = T(0), m = T(null), f = T("right"), v = T(0), g = T(null), { createCollection: b } = Gt(), { forwardRef: w, currentElement: B } = M(), $ = b(B);
    X(B, (A) => {
      a.onContentChange(A);
    });
    const { handleTypeaheadSearch: E } = ya($);
    ze(() => {
      window.clearTimeout(c.value);
    });
    function k(A) {
      var L, F;
      return f.value === ((L = m.value) == null ? void 0 : L.side) && Pd(A, (F = m.value) == null ? void 0 : F.area);
    }
    async function P(A) {
      var L;
      o("openAutoFocus", A), !A.defaultPrevented && (A.preventDefault(), (L = B.value) == null || L.focus({
        preventScroll: !0
      }));
    }
    function O(A) {
      if (A.defaultPrevented)
        return;
      const L = A.target.closest("[data-radix-menu-content]") === A.currentTarget, F = A.ctrlKey || A.altKey || A.metaKey, q = A.key.length === 1, G = Os(
        A,
        $e(),
        B.value,
        {
          loop: u.value,
          arrowKeyOptions: "vertical",
          dir: r == null ? void 0 : r.dir.value,
          focus: !0,
          attributeName: "[data-radix-vue-collection-item]:not([data-disabled])"
        }
      );
      if (G)
        return G == null ? void 0 : G.focus();
      if (A.code === "Space" || (L && (A.key === "Tab" && A.preventDefault(), !F && q && E(A.key)), A.target !== B.value) || !Ed.includes(A.key))
        return;
      A.preventDefault();
      const Q = $.value;
      Fs.includes(A.key) && Q.reverse(), Ko(Q);
    }
    function I(A) {
      var L, F;
      (F = (L = A == null ? void 0 : A.currentTarget) == null ? void 0 : L.contains) != null && F.call(L, A.target) || (window.clearTimeout(c.value), d.value = "");
    }
    function V(A) {
      var L;
      if (!pn(A))
        return;
      const F = A.target, q = v.value !== A.clientX;
      if ((L = A == null ? void 0 : A.currentTarget) != null && L.contains(F) && q) {
        const G = A.clientX > v.value ? "right" : "left";
        f.value = G, v.value = A.clientX;
      }
    }
    return Fc({
      onItemEnter: (A) => !!k(A),
      onItemLeave: (A) => {
        var L;
        k(A) || ((L = B.value) == null || L.focus(), g.value = null);
      },
      onTriggerLeave: (A) => !!k(A),
      searchRef: d,
      pointerGraceTimerRef: p,
      onPointerGraceIntentChange: (A) => {
        m.value = A;
      }
    }), (A, L) => (h(), C(s(ao), {
      "as-child": "",
      trapped: s(l),
      onMountAutoFocus: P,
      onUnmountAutoFocus: L[7] || (L[7] = (F) => o("closeAutoFocus", F))
    }, {
      default: y(() => [
        R(s(Yt), {
          "as-child": "",
          "disable-outside-pointer-events": s(i),
          onEscapeKeyDown: L[2] || (L[2] = (F) => o("escapeKeyDown", F)),
          onPointerDownOutside: L[3] || (L[3] = (F) => o("pointerDownOutside", F)),
          onFocusOutside: L[4] || (L[4] = (F) => o("focusOutside", F)),
          onInteractOutside: L[5] || (L[5] = (F) => o("interactOutside", F)),
          onDismiss: L[6] || (L[6] = (F) => o("dismiss"))
        }, {
          default: y(() => [
            R(s(Ws), {
              "current-tab-stop-id": g.value,
              "onUpdate:currentTabStopId": L[0] || (L[0] = (F) => g.value = F),
              "as-child": "",
              orientation: "vertical",
              dir: s(r).dir.value,
              loop: s(u),
              onEntryFocus: L[1] || (L[1] = (F) => {
                o("entryFocus", F), s(r).isUsingKeyboardRef.value || F.preventDefault();
              })
            }, {
              default: y(() => [
                R(s(Ht), {
                  ref: s(w),
                  role: "menu",
                  as: A.as,
                  "as-child": A.asChild,
                  "aria-orientation": "vertical",
                  "data-radix-menu-content": "",
                  "data-state": s($a)(s(a).open.value),
                  dir: s(r).dir.value,
                  side: A.side,
                  "side-offset": A.sideOffset,
                  align: A.align,
                  "align-offset": A.alignOffset,
                  "avoid-collisions": A.avoidCollisions,
                  "collision-boundary": A.collisionBoundary,
                  "collision-padding": A.collisionPadding,
                  "arrow-padding": A.arrowPadding,
                  "prioritize-position": A.prioritizePosition,
                  sticky: A.sticky,
                  "hide-when-detached": A.hideWhenDetached,
                  onKeydown: O,
                  onBlur: I,
                  onPointermove: V
                }, {
                  default: y(() => [
                    _(A.$slots, "default")
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
}), Gs = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Pa(), { forwardRef: o } = M(), a = T(!1);
    async function r(i) {
      if (!i.defaultPrevented && pn(i)) {
        if (t.disabled)
          n.onItemLeave(i);
        else if (!n.onItemEnter(i)) {
          const u = i.currentTarget;
          u == null || u.focus({ preventScroll: !0 });
        }
      }
    }
    async function l(i) {
      await ae(), !i.defaultPrevented && pn(i) && n.onItemLeave(i);
    }
    return (i, u) => (h(), C(s(lo), {
      value: { textValue: i.textValue }
    }, {
      default: y(() => [
        R(s(K), D({
          ref: s(o),
          role: "menuitem",
          tabindex: "-1"
        }, i.$attrs, {
          as: i.as,
          "as-child": i.asChild,
          "data-radix-vue-collection-item": "",
          "aria-disabled": i.disabled || void 0,
          "data-disabled": i.disabled ? "" : void 0,
          "data-highlighted": a.value ? "" : void 0,
          onPointermove: r,
          onPointerleave: l,
          onFocus: u[0] || (u[0] = async (d) => {
            await ae(), !(d.defaultPrevented || i.disabled) && (a.value = !0);
          }),
          onBlur: u[1] || (u[1] = async (d) => {
            await ae(), !d.defaultPrevented && (a.value = !1);
          })
        }), {
          default: y(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "aria-disabled", "data-disabled", "data-highlighted"])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), Ma = /* @__PURE__ */ x({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = t, { forwardRef: a, currentElement: r } = M(), l = $n(), i = Pa(), u = T(!1);
    async function d() {
      const c = r.value;
      if (!n.disabled && c) {
        const p = new CustomEvent(kd, {
          bubbles: !0,
          cancelable: !0
        });
        o("select", p), await ae(), p.defaultPrevented ? u.value = !1 : l.onClose();
      }
    }
    return (c, p) => (h(), C(Gs, D(n, {
      ref: s(a),
      onClick: d,
      onPointerdown: p[0] || (p[0] = () => {
        u.value = !0;
      }),
      onPointerup: p[1] || (p[1] = async (m) => {
        var f;
        await ae(), !m.defaultPrevented && (u.value || (f = m.currentTarget) == null || f.click());
      }),
      onKeydown: p[2] || (p[2] = async (m) => {
        const f = s(i).searchRef.value !== "";
        c.disabled || f && m.key === " " || s(jo).includes(m.key) && (m.currentTarget.click(), m.preventDefault());
      })
    }), {
      default: y(() => [
        _(c.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Vc, qs] = oe(
  ["MenuCheckboxItem", "MenuRadioItem"],
  "MenuItemIndicatorContext"
), Lc = /* @__PURE__ */ x({
  __name: "MenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = Vc({
      checked: T(!1)
    });
    return (n, o) => (h(), C(s(Ne), {
      present: n.forceMount || s(Un)(s(t).checked.value) || s(t).checked.value === !0
    }, {
      default: y(() => [
        R(s(K), {
          as: n.as,
          "as-child": n.asChild,
          "data-state": s(Sa)(s(t).checked.value)
        }, {
          default: y(() => [
            _(n.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child", "data-state"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), zc = /* @__PURE__ */ x({
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
    const n = e, o = t, a = ge(n, "checked", o);
    return qs({ checked: a }), (r, l) => (h(), C(Ma, D({ role: "menuitemcheckbox" }, n, {
      "aria-checked": s(Un)(s(a)) ? "mixed" : s(a),
      "data-state": s(Sa)(s(a)),
      onSelect: l[0] || (l[0] = async (i) => {
        o("select", i), s(Un)(s(a)) ? a.value = !0 : a.value = !s(a);
      })
    }), {
      default: y(() => [
        _(r.$slots, "default", { checked: s(a) })
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), Nc = /* @__PURE__ */ x({
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
    const n = e, o = t, a = Z(n, o), r = Dt(), { forwardRef: l, currentElement: i } = M();
    return _n(i), (u, d) => (h(), C(Ia, D(s(a), {
      ref: s(l),
      "trap-focus": s(r).open.value,
      "disable-outside-pointer-events": s(r).open.value,
      "disable-outside-scroll": !0,
      onDismiss: d[0] || (d[0] = (c) => s(r).onOpenChange(!1)),
      onFocusOutside: d[1] || (d[1] = Be((c) => o("focusOutside", c), ["prevent"]))
    }), {
      default: y(() => [
        _(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), jc = /* @__PURE__ */ x({
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
    const n = Z(e, t), o = Dt();
    return (a, r) => (h(), C(Ia, D(s(n), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      "disable-outside-scroll": !1,
      onDismiss: r[0] || (r[0] = (l) => s(o).onOpenChange(!1))
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Kc = /* @__PURE__ */ x({
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
    const n = Z(e, t), o = Dt(), a = $n();
    return (r, l) => (h(), C(s(Ne), {
      present: r.forceMount || s(o).open.value
    }, {
      default: y(() => [
        s(a).modal.value ? (h(), C(Nc, U(D({ key: 0 }, { ...r.$attrs, ...s(n) })), {
          default: y(() => [
            _(r.$slots, "default")
          ]),
          _: 3
        }, 16)) : (h(), C(jc, U(D({ key: 1 }, { ...r.$attrs, ...s(n) })), {
          default: y(() => [
            _(r.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Ys = /* @__PURE__ */ x({
  __name: "MenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(K), D({ role: "group" }, t), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hc = /* @__PURE__ */ x({
  __name: "MenuLabel",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(K), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Uc = /* @__PURE__ */ x({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(qt), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Wc, Gc] = oe("MenuRadioGroup"), qc = /* @__PURE__ */ x({
  __name: "MenuRadioGroup",
  props: {
    modelValue: { default: "" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = ge(n, "modelValue", t);
    return Gc({
      modelValue: o,
      onValueChange: (a) => {
        o.value = a;
      }
    }), (a, r) => (h(), C(Ys, U(W(n)), {
      default: y(() => [
        _(a.$slots, "default", { modelValue: s(o) })
      ]),
      _: 3
    }, 16));
  }
}), Yc = /* @__PURE__ */ x({
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
    const n = e, o = t, { value: a } = pe(n), r = Wc(), l = S(
      () => r.modelValue.value === (a == null ? void 0 : a.value)
    );
    return qs({ checked: l }), (i, u) => (h(), C(Ma, D({ role: "menuitemradio" }, n, {
      "aria-checked": l.value,
      "data-state": s(Sa)(l.value),
      onSelect: u[0] || (u[0] = async (d) => {
        o("select", d), s(r).onValueChange(s(a));
      })
    }), {
      default: y(() => [
        _(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), Xc = /* @__PURE__ */ x({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(K), D(t, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Xs, Zc] = oe("MenuSub"), Qc = /* @__PURE__ */ x({
  __name: "MenuSub",
  props: {
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = ge(n, "open", t, {
      defaultValue: !1,
      passive: n.open === void 0
    }), a = Dt(), r = T(), l = T();
    return we((i) => {
      (a == null ? void 0 : a.open.value) === !1 && (o.value = !1), i(() => o.value = !1);
    }), Hs({
      open: o,
      onOpenChange: (i) => {
        o.value = i;
      },
      content: l,
      onContentChange: (i) => {
        l.value = i;
      }
    }), Zc({
      triggerId: "",
      contentId: "",
      trigger: r,
      onTriggerChange: (i) => {
        r.value = i;
      }
    }), (i, u) => (h(), C(s(Xt), null, {
      default: y(() => [
        _(i.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Jc = /* @__PURE__ */ x({
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
    const n = Z(e, t), o = Dt(), a = $n(), r = Xs(), { forwardRef: l, currentElement: i } = M();
    return r.contentId || (r.contentId = Ce(void 0, "radix-vue-menu-sub-content")), (u, d) => (h(), C(s(Ne), {
      present: u.forceMount || s(o).open.value
    }, {
      default: y(() => [
        R(Ia, D(s(n), {
          id: s(r).contentId,
          ref: s(l),
          "aria-labelledby": s(r).triggerId,
          align: "start",
          side: s(a).dir.value === "rtl" ? "left" : "right",
          "disable-outside-pointer-events": !1,
          "disable-outside-scroll": !1,
          "trap-focus": !1,
          onOpenAutoFocus: d[0] || (d[0] = Be((c) => {
            var p;
            s(a).isUsingKeyboardRef.value && ((p = s(i)) == null || p.focus());
          }, ["prevent"])),
          onCloseAutoFocus: d[1] || (d[1] = Be(() => {
          }, ["prevent"])),
          onFocusOutside: d[2] || (d[2] = (c) => {
            c.defaultPrevented || c.target !== s(r).trigger.value && s(o).onOpenChange(!1);
          }),
          onEscapeKeyDown: d[3] || (d[3] = (c) => {
            s(a).onClose(), c.preventDefault();
          }),
          onKeydown: d[4] || (d[4] = (c) => {
            var p, m;
            const f = (p = c.currentTarget) == null ? void 0 : p.contains(c.target), v = s(Td)[s(a).dir.value].includes(c.key);
            f && v && (s(o).onOpenChange(!1), (m = s(r).trigger.value) == null || m.focus(), c.preventDefault());
          })
        }), {
          default: y(() => [
            _(u.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-labelledby", "side"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), ep = /* @__PURE__ */ x({
  __name: "MenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Dt(), o = $n(), a = Xs(), r = Pa(), l = T(null);
    a.triggerId || (a.triggerId = Ce(void 0, "radix-vue-menu-sub-trigger"));
    function i() {
      l.value && window.clearTimeout(l.value), l.value = null;
    }
    ze(() => {
      i();
    });
    function u(p) {
      !pn(p) || r.onItemEnter(p) || !t.disabled && !n.open.value && !l.value && (r.onPointerGraceIntentChange(null), l.value = window.setTimeout(() => {
        n.onOpenChange(!0), i();
      }, 100));
    }
    async function d(p) {
      var m, f;
      if (!pn(p))
        return;
      i();
      const v = (m = n.content.value) == null ? void 0 : m.getBoundingClientRect();
      if (v != null && v.width) {
        const g = (f = n.content.value) == null ? void 0 : f.dataset.side, b = g === "right", w = b ? -5 : 5, B = v[b ? "left" : "right"], $ = v[b ? "right" : "left"];
        r.onPointerGraceIntentChange({
          area: [
            // Apply a bleed on clientX to ensure that our exit point is
            // consistently within polygon bounds
            { x: p.clientX + w, y: p.clientY },
            { x: B, y: v.top },
            { x: $, y: v.top },
            { x: $, y: v.bottom },
            { x: B, y: v.bottom }
          ],
          side: g
        }), window.clearTimeout(r.pointerGraceTimerRef.value), r.pointerGraceTimerRef.value = window.setTimeout(
          () => r.onPointerGraceIntentChange(null),
          300
        );
      } else {
        if (r.onTriggerLeave(p))
          return;
        r.onPointerGraceIntentChange(null);
      }
    }
    async function c(p) {
      var m;
      const f = r.searchRef.value !== "";
      t.disabled || f && p.key === " " || Ad[o.dir.value].includes(p.key) && (n.onOpenChange(!0), await ae(), (m = n.content.value) == null || m.focus(), p.preventDefault());
    }
    return (p, m) => (h(), C(Ks, { "as-child": "" }, {
      default: y(() => [
        R(Gs, D(t, {
          id: s(a).triggerId,
          ref: (f) => {
            var v;
            (v = s(a)) == null || v.onTriggerChange(f == null ? void 0 : f.$el);
          },
          "aria-haspopup": "menu",
          "aria-expanded": s(n).open.value,
          "aria-controls": s(a).contentId,
          "data-state": s($a)(s(n).open.value),
          onClick: m[0] || (m[0] = async (f) => {
            t.disabled || f.defaultPrevented || (f.currentTarget.focus(), s(n).open.value || s(n).onOpenChange(!0));
          }),
          onPointermove: u,
          onPointerleave: d,
          onKeydown: c
        }), {
          default: y(() => [
            _(p.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-expanded", "aria-controls", "data-state"])
      ]),
      _: 3
    }));
  }
}), [Zs, tp] = oe("DropdownMenuRoot"), np = /* @__PURE__ */ x({
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
    M();
    const a = ge(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), r = T(), { modal: l, dir: i } = pe(n), u = yt(i);
    return tp({
      open: a,
      onOpenChange: (d) => {
        a.value = d;
      },
      onOpenToggle: () => {
        a.value = !a.value;
      },
      triggerId: "",
      triggerElement: r,
      contentId: "",
      modal: l,
      dir: u
    }), (d, c) => (h(), C(s(kc), {
      open: s(a),
      "onUpdate:open": c[0] || (c[0] = (p) => $t(a) ? a.value = p : null),
      dir: s(u),
      modal: s(l)
    }, {
      default: y(() => [
        _(d.$slots, "default", { open: s(a) })
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
}), op = /* @__PURE__ */ x({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Zs(), { forwardRef: o, currentElement: a } = M();
    return se(() => {
      n.triggerElement = a;
    }), n.triggerId || (n.triggerId = Ce(void 0, "radix-vue-dropdown-menu-trigger")), (r, l) => (h(), C(s(Ks), { "as-child": "" }, {
      default: y(() => [
        R(s(K), {
          id: s(n).triggerId,
          ref: s(o),
          type: r.as === "button" ? "button" : void 0,
          "as-child": t.asChild,
          as: r.as,
          "aria-haspopup": "menu",
          "aria-expanded": s(n).open.value,
          "aria-controls": s(n).open.value ? s(n).contentId : void 0,
          "data-disabled": r.disabled ? "" : void 0,
          disabled: r.disabled,
          "data-state": s(n).open.value ? "open" : "closed",
          onClick: l[0] || (l[0] = async (i) => {
            var u;
            !r.disabled && i.button === 0 && i.ctrlKey === !1 && ((u = s(n)) == null || u.onOpenToggle(), await ae(), s(n).open.value && i.preventDefault());
          }),
          onKeydown: l[1] || (l[1] = mt(
            (i) => {
              r.disabled || (["Enter", " "].includes(i.key) && s(n).onOpenToggle(), i.key === "ArrowDown" && s(n).onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
            },
            ["enter", "space", "arrow-down"]
          ))
        }, {
          default: y(() => [
            _(r.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as-child", "as", "aria-expanded", "aria-controls", "data-disabled", "disabled", "data-state"])
      ]),
      _: 3
    }));
  }
}), ap = /* @__PURE__ */ x({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(Uc), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), rp = /* @__PURE__ */ x({
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
    M();
    const o = Zs(), a = T(!1);
    function r(l) {
      l.defaultPrevented || (a.value || setTimeout(() => {
        var i;
        (i = o.triggerElement.value) == null || i.focus();
      }, 0), a.value = !1, l.preventDefault());
    }
    return o.contentId || (o.contentId = Ce(void 0, "radix-vue-dropdown-menu-content")), (l, i) => {
      var u;
      return h(), C(s(Kc), D(s(n), {
        id: s(o).contentId,
        "aria-labelledby": (u = s(o)) == null ? void 0 : u.triggerId,
        style: {
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        },
        onCloseAutoFocus: r,
        onInteractOutside: i[0] || (i[0] = (d) => {
          var c;
          if (d.defaultPrevented) return;
          const p = d.detail.originalEvent, m = p.button === 0 && p.ctrlKey === !0, f = p.button === 2 || m;
          (!s(o).modal.value || f) && (a.value = !0), (c = s(o).triggerElement.value) != null && c.contains(d.target) && d.preventDefault();
        })
      }), {
        default: y(() => [
          _(l.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby"]);
    };
  }
}), sp = /* @__PURE__ */ x({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = bt(t);
    return M(), (a, r) => (h(), C(s(Ma), U(W({ ...n, ...s(o) })), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), lp = /* @__PURE__ */ x({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return M(), (n, o) => (h(), C(s(Ys), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ip = /* @__PURE__ */ x({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return M(), (n, o) => (h(), C(s(Xc), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), up = /* @__PURE__ */ x({
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
    const n = e, o = bt(t);
    return M(), (a, r) => (h(), C(s(zc), U(W({ ...n, ...s(o) })), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Qs = /* @__PURE__ */ x({
  __name: "DropdownMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return M(), (n, o) => (h(), C(s(Lc), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), dp = /* @__PURE__ */ x({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return M(), (n, o) => (h(), C(s(Hc), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), cp = /* @__PURE__ */ x({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = bt(t);
    return M(), (a, r) => (h(), C(s(qc), U(W({ ...n, ...s(o) })), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), pp = /* @__PURE__ */ x({
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
    return M(), (o, a) => (h(), C(s(Yc), U(W(s(n))), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fp = /* @__PURE__ */ x({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = ge(n, "open", t, {
      passive: n.open === void 0,
      defaultValue: n.defaultOpen ?? !1
    });
    return M(), (a, r) => (h(), C(s(Qc), {
      open: s(o),
      "onUpdate:open": r[0] || (r[0] = (l) => $t(o) ? o.value = l : null)
    }, {
      default: y(() => [
        _(a.$slots, "default", { open: s(o) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), mp = /* @__PURE__ */ x({
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
    return M(), (o, a) => (h(), C(s(Jc), D(s(n), { style: {
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vp = /* @__PURE__ */ x({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return M(), (n, o) => (h(), C(s(ep), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), gp = /* @__PURE__ */ x({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(e) {
    const t = e;
    return M(), (n, o) => (h(), C(s(K), D(t, {
      onMousedown: o[0] || (o[0] = (a) => {
        !a.defaultPrevented && a.detail > 1 && a.preventDefault();
      })
    }), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Qt, hp] = oe("PopoverRoot"), yp = /* @__PURE__ */ x({
  __name: "PopoverRoot",
  props: {
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: !1 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = t, { modal: a } = pe(n), r = ge(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), l = T(), i = T(!1);
    return hp({
      contentId: "",
      modal: a,
      open: r,
      onOpenChange: (u) => {
        r.value = u;
      },
      onOpenToggle: () => {
        r.value = !r.value;
      },
      triggerElement: l,
      hasCustomAnchor: i
    }), (u, d) => (h(), C(s(Xt), null, {
      default: y(() => [
        _(u.$slots, "default", { open: s(r) })
      ]),
      _: 3
    }));
  }
}), bp = /* @__PURE__ */ x({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Qt(), { forwardRef: o, currentElement: a } = M();
    return se(() => {
      n.triggerElement.value = a.value;
    }), (r, l) => (h(), C(Ve(s(n).hasCustomAnchor.value ? s(K) : s(Cn)), { "as-child": "" }, {
      default: y(() => [
        R(s(K), {
          ref: s(o),
          type: r.as === "button" ? "button" : void 0,
          "aria-haspopup": "dialog",
          "aria-expanded": s(n).open.value,
          "aria-controls": s(n).contentId,
          "data-state": s(n).open.value ? "open" : "closed",
          as: r.as,
          "as-child": t.asChild,
          onClick: s(n).onOpenToggle
        }, {
          default: y(() => [
            _(r.$slots, "default")
          ]),
          _: 3
        }, 8, ["type", "aria-expanded", "aria-controls", "data-state", "as", "as-child", "onClick"])
      ]),
      _: 3
    }));
  }
}), wp = /* @__PURE__ */ x({
  __name: "PopoverPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(qt), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Js = /* @__PURE__ */ x({
  __name: "PopoverContentImpl",
  props: {
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
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = Se(n), { forwardRef: r } = M(), l = Qt();
    return ha(), (i, u) => (h(), C(s(ao), {
      "as-child": "",
      loop: "",
      trapped: i.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => o("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => o("closeAutoFocus", d))
    }, {
      default: y(() => [
        R(s(Yt), {
          "as-child": "",
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          onPointerDownOutside: u[0] || (u[0] = (d) => o("pointerDownOutside", d)),
          onInteractOutside: u[1] || (u[1] = (d) => o("interactOutside", d)),
          onEscapeKeyDown: u[2] || (u[2] = (d) => o("escapeKeyDown", d)),
          onFocusOutside: u[3] || (u[3] = (d) => o("focusOutside", d)),
          onDismiss: u[4] || (u[4] = (d) => s(l).onOpenChange(!1))
        }, {
          default: y(() => [
            R(s(Ht), D(s(a), {
              id: s(l).contentId,
              ref: s(r),
              "data-state": s(l).open.value ? "open" : "closed",
              role: "dialog",
              style: {
                "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
              }
            }), {
              default: y(() => [
                _(i.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "data-state"])
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
}), xp = /* @__PURE__ */ x({
  __name: "PopoverContentModal",
  props: {
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
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = Qt(), r = T(!1);
    xn(!0);
    const l = Z(n, o), { forwardRef: i, currentElement: u } = M();
    return _n(u), (d, c) => (h(), C(Js, D(s(l), {
      ref: s(i),
      "trap-focus": s(a).open.value,
      "disable-outside-pointer-events": "",
      onCloseAutoFocus: c[0] || (c[0] = Be(
        (p) => {
          var m;
          o("closeAutoFocus", p), r.value || (m = s(a).triggerElement.value) == null || m.focus();
        },
        ["prevent"]
      )),
      onPointerDownOutside: c[1] || (c[1] = (p) => {
        o("pointerDownOutside", p);
        const m = p.detail.originalEvent, f = m.button === 0 && m.ctrlKey === !0, v = m.button === 2 || f;
        r.value = v;
      }),
      onFocusOutside: c[2] || (c[2] = Be(() => {
      }, ["prevent"]))
    }), {
      default: y(() => [
        _(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), _p = /* @__PURE__ */ x({
  __name: "PopoverContentNonModal",
  props: {
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
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = Qt(), r = T(!1), l = T(!1), i = Z(n, o);
    return (u, d) => (h(), C(Js, D(s(i), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: d[0] || (d[0] = (c) => {
        var p;
        o("closeAutoFocus", c), c.defaultPrevented || (r.value || (p = s(a).triggerElement.value) == null || p.focus(), c.preventDefault()), r.value = !1, l.value = !1;
      }),
      onInteractOutside: d[1] || (d[1] = async (c) => {
        var p;
        o("interactOutside", c), c.defaultPrevented || (r.value = !0, c.detail.originalEvent.type === "pointerdown" && (l.value = !0));
        const m = c.target;
        (p = s(a).triggerElement.value) != null && p.contains(m) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && l.value && c.preventDefault();
      })
    }), {
      default: y(() => [
        _(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Cp = /* @__PURE__ */ x({
  __name: "PopoverContent",
  props: {
    forceMount: { type: Boolean },
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
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = Qt(), r = Z(n, o), { forwardRef: l } = M();
    return a.contentId || (a.contentId = Ce(void 0, "radix-vue-popover-content")), (i, u) => (h(), C(s(Ne), {
      present: i.forceMount || s(a).open.value
    }, {
      default: y(() => [
        s(a).modal.value ? (h(), C(xp, D({ key: 0 }, s(r), { ref: s(l) }), {
          default: y(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (h(), C(_p, D({ key: 1 }, s(r), { ref: s(l) }), {
          default: y(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), V0 = /* @__PURE__ */ x({
  __name: "PopoverAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    M();
    const n = Qt();
    return Yr(() => {
      n.hasCustomAnchor.value = !0;
    }), ze(() => {
      n.hasCustomAnchor.value = !1;
    }), (o, a) => (h(), C(s(Cn), U(W(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fn = 100, [Bp, $p] = oe("ProgressRoot"), Ra = (e) => typeof e == "number";
function Sp(e, t) {
  return zt(e) || Ra(e) && !Number.isNaN(e) && e <= t && e >= 0 ? e : (console.error(`Invalid prop \`value\` of value \`${e}\` supplied to \`ProgressRoot\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${fn} if no \`max\` prop is set)
  - \`null\`  or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`), null);
}
function kp(e) {
  return Ra(e) && !Number.isNaN(e) && e > 0 ? e : (console.error(
    `Invalid prop \`max\` of value \`${e}\` supplied to \`ProgressRoot\`. Only numbers greater than 0 are valid max values. Defaulting to \`${fn}\`.`
  ), fn);
}
const Op = /* @__PURE__ */ x({
  __name: "ProgressRoot",
  props: {
    modelValue: {},
    max: { default: fn },
    getValueLabel: { type: Function, default: (e, t) => `${Math.round(e / t * fn)}%` },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "update:max"],
  setup(e, { emit: t }) {
    const n = e, o = t;
    M();
    const a = ge(n, "modelValue", o, {
      passive: n.modelValue === void 0
    }), r = ge(n, "max", o, {
      passive: n.max === void 0
    });
    X(
      () => a.value,
      async (i) => {
        const u = Sp(i, n.max);
        u !== i && (await ae(), a.value = u);
      },
      { immediate: !0 }
    ), X(
      () => n.max,
      (i) => {
        const u = kp(n.max);
        u !== i && (r.value = u);
      },
      { immediate: !0 }
    );
    const l = S(() => zt(a.value) ? "indeterminate" : a.value === r.value ? "complete" : "loading");
    return $p({
      modelValue: a,
      max: r,
      progressState: l
    }), (i, u) => (h(), C(s(K), {
      "as-child": i.asChild,
      as: i.as,
      "aria-valuemax": s(r),
      "aria-valuemin": 0,
      "aria-valuenow": Ra(s(a)) ? s(a) : void 0,
      "aria-valuetext": i.getValueLabel(s(a), s(r)),
      "aria-label": i.getValueLabel(s(a), s(r)),
      role: "progressbar",
      "data-state": l.value,
      "data-value": s(a) ?? void 0,
      "data-max": s(r)
    }, {
      default: y(() => [
        _(i.$slots, "default", { modelValue: s(a) })
      ]),
      _: 3
    }, 8, ["as-child", "as", "aria-valuemax", "aria-valuenow", "aria-valuetext", "aria-label", "data-state", "data-value", "data-max"]));
  }
}), Ep = /* @__PURE__ */ x({
  __name: "ProgressIndicator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Bp();
    return M(), (o, a) => {
      var r;
      return h(), C(s(K), D(t, {
        "data-state": s(n).progressState.value,
        "data-value": ((r = s(n).modelValue) == null ? void 0 : r.value) ?? void 0,
        "data-max": s(n).max.value
      }), {
        default: y(() => [
          _(o.$slots, "default")
        ]),
        _: 3
      }, 16, ["data-state", "data-value", "data-max"]);
    };
  }
}), Ap = ["default-value"], Tp = /* @__PURE__ */ x({
  __name: "BubbleSelect",
  props: {
    autocomplete: {},
    autofocus: { type: Boolean },
    disabled: { type: Boolean },
    form: {},
    multiple: { type: Boolean },
    name: {},
    required: { type: Boolean },
    size: {},
    value: {}
  },
  setup(e) {
    const t = e, { value: n } = pe(t), o = T();
    return (a, r) => (h(), C(s(Bn), { "as-child": "" }, {
      default: y(() => [
        Ut(re("select", D({
          ref_key: "selectElement",
          ref: o
        }, t, {
          "onUpdate:modelValue": r[0] || (r[0] = (l) => $t(n) ? n.value = l : null),
          "default-value": s(n)
        }), [
          _(a.$slots, "default")
        ], 16, Ap), [
          [Ql, s(n)]
        ])
      ]),
      _: 3
    }));
  }
}), Dp = {
  key: 0,
  value: ""
}, [Pt, el] = oe("SelectRoot"), [Pp, Ip] = oe("SelectRoot"), Mp = /* @__PURE__ */ x({
  __name: "SelectRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean },
    defaultValue: { default: "" },
    modelValue: { default: void 0 },
    dir: {},
    name: {},
    autocomplete: {},
    disabled: { type: Boolean },
    required: { type: Boolean }
  },
  emits: ["update:modelValue", "update:open"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = ge(n, "modelValue", o, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), r = ge(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), l = T(), i = T(), u = T({
      x: 0,
      y: 0
    }), d = T(!1), { required: c, disabled: p, dir: m } = pe(n), f = yt(m);
    el({
      triggerElement: l,
      onTriggerChange: (w) => {
        l.value = w;
      },
      valueElement: i,
      onValueElementChange: (w) => {
        i.value = w;
      },
      valueElementHasChildren: d,
      onValueElementHasChildrenChange: (w) => {
        d.value = w;
      },
      contentId: "",
      modelValue: a,
      onValueChange: (w) => {
        a.value = w;
      },
      open: r,
      required: c,
      onOpenChange: (w) => {
        r.value = w;
      },
      dir: f,
      triggerPointerDownPosRef: u,
      disabled: p
    });
    const v = no(l), g = T(/* @__PURE__ */ new Set()), b = S(() => Array.from(g.value).map((w) => {
      var B;
      return (B = w.props) == null ? void 0 : B.value;
    }).join(";"));
    return Ip({
      onNativeOptionAdd: (w) => {
        g.value.add(w);
      },
      onNativeOptionRemove: (w) => {
        g.value.delete(w);
      }
    }), (w, B) => (h(), C(s(Xt), null, {
      default: y(() => [
        _(w.$slots, "default", {
          modelValue: s(a),
          open: s(r)
        }),
        s(v) ? (h(), C(Tp, D({ key: b.value }, w.$attrs, {
          "aria-hidden": "true",
          tabindex: "-1",
          required: s(c),
          name: w.name,
          autocomplete: w.autocomplete,
          disabled: s(p),
          value: s(a),
          onChange: B[0] || (B[0] = ($) => a.value = $.target.value)
        }), {
          default: y(() => [
            s(a) === void 0 ? (h(), N("option", Dp)) : ce("", !0),
            (h(!0), N(be, null, vt(Array.from(g.value), ($) => (h(), C(Ve($), D({ ref_for: !0 }, $.props, {
              key: $.key ?? ""
            }), null, 16))), 128))
          ]),
          _: 1
        }, 16, ["required", "name", "autocomplete", "disabled", "value"])) : ce("", !0)
      ]),
      _: 3
    }));
  }
}), Rp = [" ", "Enter", "ArrowUp", "ArrowDown"], Fp = [" ", "Enter"], He = 10;
function tl(e) {
  return e === "" || zt(e);
}
const Vp = /* @__PURE__ */ x({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Pt(), o = S(() => {
      var f;
      return ((f = n.disabled) == null ? void 0 : f.value) || t.disabled;
    }), { forwardRef: a, currentElement: r } = M();
    n.contentId || (n.contentId = Ce(void 0, "radix-vue-select-content")), se(() => {
      n.triggerElement = r;
    });
    const { injectCollection: l } = Gt(), i = l(), { search: u, handleTypeaheadSearch: d, resetTypeahead: c } = ya(i);
    function p() {
      o.value || (n.onOpenChange(!0), c());
    }
    function m(f) {
      p(), n.triggerPointerDownPosRef.value = {
        x: Math.round(f.pageX),
        y: Math.round(f.pageY)
      };
    }
    return (f, v) => (h(), C(s(Cn), { "as-child": "" }, {
      default: y(() => {
        var g, b, w, B;
        return [
          R(s(K), {
            ref: s(a),
            role: "combobox",
            type: f.as === "button" ? "button" : void 0,
            "aria-controls": s(n).contentId,
            "aria-expanded": s(n).open.value || !1,
            "aria-required": (g = s(n).required) == null ? void 0 : g.value,
            "aria-autocomplete": "none",
            disabled: o.value,
            dir: (b = s(n)) == null ? void 0 : b.dir.value,
            "data-state": (w = s(n)) != null && w.open.value ? "open" : "closed",
            "data-disabled": o.value ? "" : void 0,
            "data-placeholder": s(tl)((B = s(n).modelValue) == null ? void 0 : B.value) ? "" : void 0,
            "as-child": f.asChild,
            as: f.as,
            onClick: v[0] || (v[0] = ($) => {
              var E;
              (E = $ == null ? void 0 : $.currentTarget) == null || E.focus();
            }),
            onPointerdown: v[1] || (v[1] = ($) => {
              if ($.pointerType === "touch")
                return $.preventDefault();
              const E = $.target;
              E.hasPointerCapture($.pointerId) && E.releasePointerCapture($.pointerId), $.button === 0 && $.ctrlKey === !1 && (m($), $.preventDefault());
            }),
            onPointerup: v[2] || (v[2] = Be(
              ($) => {
                $.pointerType === "touch" && m($);
              },
              ["prevent"]
            )),
            onKeydown: v[3] || (v[3] = ($) => {
              const E = s(u) !== "";
              !($.ctrlKey || $.altKey || $.metaKey) && $.key.length === 1 && E && $.key === " " || (s(d)($.key), s(Rp).includes($.key) && (p(), $.preventDefault()));
            })
          }, {
            default: y(() => [
              _(f.$slots, "default")
            ]),
            _: 3
          }, 8, ["type", "aria-controls", "aria-expanded", "aria-required", "disabled", "dir", "data-state", "data-disabled", "data-placeholder", "as-child", "as"])
        ];
      }),
      _: 3
    }));
  }
}), Lp = /* @__PURE__ */ x({
  __name: "SelectPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(qt), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Fa, zp] = oe("SelectItemAlignedPosition"), Np = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, o = t, { injectCollection: a } = Gt(), r = Pt(), l = It(), i = a(), u = T(!1), d = T(!0), c = T(), { forwardRef: p, currentElement: m } = M(), { viewport: f, selectedItem: v, selectedItemText: g, focusSelectedItem: b } = l;
    function w() {
      if (r.triggerElement.value && r.valueElement.value && c.value && m.value && f != null && f.value && v != null && v.value && g != null && g.value) {
        const E = r.triggerElement.value.getBoundingClientRect(), k = m.value.getBoundingClientRect(), P = r.valueElement.value.getBoundingClientRect(), O = g.value.getBoundingClientRect();
        if (r.dir.value !== "rtl") {
          const ye = O.left - k.left, me = P.left - ye, Ee = E.left - me, xe = E.width + Ee, de = Math.max(xe, k.width), H = window.innerWidth - He, ie = Hn(me, He, Math.max(He, H - de));
          c.value.style.minWidth = `${xe}px`, c.value.style.left = `${ie}px`;
        } else {
          const ye = k.right - O.right, me = window.innerWidth - P.right - ye, Ee = window.innerWidth - E.right - me, xe = E.width + Ee, de = Math.max(xe, k.width), H = window.innerWidth - He, ie = Hn(
            me,
            He,
            Math.max(He, H - de)
          );
          c.value.style.minWidth = `${xe}px`, c.value.style.right = `${ie}px`;
        }
        const I = i.value, V = window.innerHeight - He * 2, A = f.value.scrollHeight, L = window.getComputedStyle(m.value), F = Number.parseInt(
          L.borderTopWidth,
          10
        ), q = Number.parseInt(L.paddingTop, 10), G = Number.parseInt(
          L.borderBottomWidth,
          10
        ), Q = Number.parseInt(
          L.paddingBottom,
          10
        ), le = F + q + A + Q + G, fe = Math.min(
          v.value.offsetHeight * 5,
          le
        ), ue = window.getComputedStyle(f.value), j = Number.parseInt(ue.paddingTop, 10), Y = Number.parseInt(
          ue.paddingBottom,
          10
        ), J = E.top + E.height / 2 - He, De = V - J, Ie = v.value.offsetHeight / 2, Pe = v.value.offsetTop + Ie, qe = F + q + Pe, wt = le - qe;
        if (qe <= J) {
          const ye = v.value === I[I.length - 1];
          c.value.style.bottom = "0px";
          const me = m.value.clientHeight - f.value.offsetTop - f.value.offsetHeight, Ee = Math.max(
            De,
            Ie + (ye ? Y : 0) + me + G
          ), xe = qe + Ee;
          c.value.style.height = `${xe}px`;
        } else {
          const ye = v.value === I[0];
          c.value.style.top = "0px";
          const me = Math.max(
            J,
            F + f.value.offsetTop + (ye ? j : 0) + Ie
          ) + wt;
          c.value.style.height = `${me}px`, f.value.scrollTop = qe - J + f.value.offsetTop;
        }
        c.value.style.margin = `${He}px 0`, c.value.style.minHeight = `${fe}px`, c.value.style.maxHeight = `${V}px`, o("placed"), requestAnimationFrame(() => u.value = !0);
      }
    }
    const B = T("");
    se(async () => {
      await ae(), w(), m.value && (B.value = window.getComputedStyle(m.value).zIndex);
    });
    function $(E) {
      E && d.value === !0 && (w(), b == null || b(), d.value = !1);
    }
    return zp({
      contentWrapper: c,
      shouldExpandOnScrollRef: u,
      onScrollButtonChange: $
    }), (E, k) => (h(), N("div", {
      ref_key: "contentWrapperElement",
      ref: c,
      style: Ot({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: B.value
      })
    }, [
      R(s(K), D({
        ref: s(p),
        style: {
          // When we get the height of the content, it includes borders. If we were to set
          // the height without having `boxSizing: 'border-box'` it would be too big.
          boxSizing: "border-box",
          // We need to ensure the content doesn't get taller than the wrapper
          maxHeight: "100%"
        }
      }, { ...E.$attrs, ...n }), {
        default: y(() => [
          _(E.$slots, "default")
        ]),
        _: 3
      }, 16)
    ], 4));
  }
}), jp = /* @__PURE__ */ x({
  __name: "SelectPopperPosition",
  props: {
    side: {},
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: { default: He },
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Se(e);
    return (n, o) => (h(), C(s(Ht), D(s(t), { style: {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-select-content-available-width": "var(--radix-popper-available-width)",
      "--radix-select-content-available-height": "var(--radix-popper-available-height)",
      "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Jt = {
  onViewportChange: () => {
  },
  itemTextRefCallback: () => {
  },
  itemRefCallback: () => {
  }
}, [It, Kp] = oe("SelectContent"), Hp = /* @__PURE__ */ x({
  __name: "SelectContentImpl",
  props: {
    position: { default: "item-aligned" },
    bodyLock: { type: Boolean, default: !0 },
    side: {},
    sideOffset: {},
    align: { default: "start" },
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
  emits: ["closeAutoFocus", "escapeKeyDown", "pointerDownOutside"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = Pt();
    ha(), xn(n.bodyLock);
    const { createCollection: r } = Gt(), l = T();
    _n(l);
    const i = r(l), { search: u, handleTypeaheadSearch: d } = ya(i), c = T(), p = T(), m = T(), f = T(!1), v = T(!1);
    function g() {
      p.value && l.value && Ko([p.value, l.value]);
    }
    X(f, () => {
      g();
    });
    const { onOpenChange: b, triggerPointerDownPosRef: w } = a;
    we((k) => {
      if (!l.value)
        return;
      let P = { x: 0, y: 0 };
      const O = (V) => {
        var A, L;
        P = {
          x: Math.abs(
            Math.round(V.pageX) - (((A = w.value) == null ? void 0 : A.x) ?? 0)
          ),
          y: Math.abs(
            Math.round(V.pageY) - (((L = w.value) == null ? void 0 : L.y) ?? 0)
          )
        };
      }, I = (V) => {
        var A;
        V.pointerType !== "touch" && (P.x <= 10 && P.y <= 10 ? V.preventDefault() : (A = l.value) != null && A.contains(V.target) || b(!1), document.removeEventListener("pointermove", O), w.value = null);
      };
      w.value !== null && (document.addEventListener("pointermove", O), document.addEventListener("pointerup", I, {
        capture: !0,
        once: !0
      })), k(() => {
        document.removeEventListener("pointermove", O), document.removeEventListener("pointerup", I, {
          capture: !0
        });
      });
    });
    function B(k) {
      const P = k.ctrlKey || k.altKey || k.metaKey;
      if (k.key === "Tab" && k.preventDefault(), !P && k.key.length === 1 && d(k.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(k.key)) {
        let O = i.value;
        if (["ArrowUp", "End"].includes(k.key) && (O = O.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(k.key)) {
          const I = k.target, V = O.indexOf(I);
          O = O.slice(V + 1);
        }
        setTimeout(() => Ko(O)), k.preventDefault();
      }
    }
    const $ = S(() => n.position === "popper" ? n : {}), E = Se($.value);
    return Kp({
      content: l,
      viewport: c,
      onViewportChange: (k) => {
        c.value = k;
      },
      itemRefCallback: (k, P, O) => {
        var I, V;
        const A = !v.value && !O;
        (((I = a.modelValue) == null ? void 0 : I.value) !== void 0 && ((V = a.modelValue) == null ? void 0 : V.value) === P || A) && (p.value = k, A && (v.value = !0));
      },
      selectedItem: p,
      selectedItemText: m,
      onItemLeave: () => {
        var k;
        (k = l.value) == null || k.focus();
      },
      itemTextRefCallback: (k, P, O) => {
        var I, V;
        const A = !v.value && !O;
        (((I = a.modelValue) == null ? void 0 : I.value) !== void 0 && ((V = a.modelValue) == null ? void 0 : V.value) === P || A) && (m.value = k);
      },
      focusSelectedItem: g,
      position: n.position,
      isPositioned: f,
      searchRef: u
    }), (k, P) => (h(), C(s(ao), {
      "as-child": "",
      onMountAutoFocus: P[6] || (P[6] = Be(() => {
      }, ["prevent"])),
      onUnmountAutoFocus: P[7] || (P[7] = (O) => {
        var I;
        o("closeAutoFocus", O), !O.defaultPrevented && ((I = s(a).triggerElement.value) == null || I.focus({ preventScroll: !0 }), O.preventDefault());
      })
    }, {
      default: y(() => [
        R(s(Yt), {
          "as-child": "",
          "disable-outside-pointer-events": "",
          onFocusOutside: P[2] || (P[2] = Be(() => {
          }, ["prevent"])),
          onDismiss: P[3] || (P[3] = (O) => s(a).onOpenChange(!1)),
          onEscapeKeyDown: P[4] || (P[4] = (O) => o("escapeKeyDown", O)),
          onPointerDownOutside: P[5] || (P[5] = (O) => o("pointerDownOutside", O))
        }, {
          default: y(() => [
            (h(), C(Ve(
              k.position === "popper" ? jp : Np
            ), D({ ...k.$attrs, ...s(E) }, {
              id: s(a).contentId,
              ref: (O) => {
                l.value = s(Le)(O);
              },
              role: "listbox",
              "data-state": s(a).open.value ? "open" : "closed",
              dir: s(a).dir.value,
              style: {
                // flex layout so we can place the scroll buttons properly
                display: "flex",
                flexDirection: "column",
                // reset the outline by default as the content MAY get focused
                outline: "none"
              },
              onContextmenu: P[0] || (P[0] = Be(() => {
              }, ["prevent"])),
              onPlaced: P[1] || (P[1] = (O) => f.value = !0),
              onKeydown: B
            }), {
              default: y(() => [
                _(k.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "data-state", "dir", "onKeydown"]))
          ]),
          _: 3
        })
      ]),
      _: 3
    }));
  }
}), Up = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "SelectProvider",
  props: {
    context: {}
  },
  setup(e) {
    return el(e.context), (t, n) => _(t.$slots, "default");
  }
}), Wp = { key: 1 }, Gp = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "SelectContent",
  props: {
    forceMount: { type: Boolean },
    position: {},
    bodyLock: { type: Boolean },
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
  emits: ["closeAutoFocus", "escapeKeyDown", "pointerDownOutside"],
  setup(e, { emit: t }) {
    const n = e, o = Z(n, t), a = Pt(), r = T();
    se(() => {
      r.value = new DocumentFragment();
    });
    const l = T(), i = S(() => n.forceMount || a.open.value);
    return (u, d) => {
      var c;
      return i.value ? (h(), C(s(Ne), {
        key: 0,
        ref_key: "presenceRef",
        ref: l,
        present: !0
      }, {
        default: y(() => [
          R(Hp, U(W({ ...s(o), ...u.$attrs })), {
            default: y(() => [
              _(u.$slots, "default")
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 512)) : !((c = l.value) != null && c.present) && r.value ? (h(), N("div", Wp, [
        (h(), C(Yn, { to: r.value }, [
          R(Up, { context: s(a) }, {
            default: y(() => [
              _(u.$slots, "default")
            ]),
            _: 3
          }, 8, ["context"])
        ], 8, ["to"]))
      ])) : ce("", !0);
    };
  }
}), qp = /* @__PURE__ */ x({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(K), D({ "aria-hidden": "true" }, t), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [nl, Yp] = oe("SelectItem"), Xp = /* @__PURE__ */ x({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { disabled: n } = pe(t), o = Pt(), a = It(Jt), { forwardRef: r, currentElement: l } = M(), i = S(() => {
      var g;
      return ((g = o.modelValue) == null ? void 0 : g.value) === t.value;
    }), u = T(!1), d = T(t.textValue ?? ""), c = Ce(void 0, "radix-vue-select-item-text");
    async function p(g) {
      await ae(), !(g != null && g.defaultPrevented) && (n.value || (o.onValueChange(t.value), o.onOpenChange(!1)));
    }
    async function m(g) {
      var b;
      await ae(), !g.defaultPrevented && (n.value ? (b = a.onItemLeave) == null || b.call(a) : g.currentTarget.focus({ preventScroll: !0 }));
    }
    async function f(g) {
      var b;
      await ae(), !g.defaultPrevented && g.currentTarget === $e() && ((b = a.onItemLeave) == null || b.call(a));
    }
    async function v(g) {
      var b;
      await ae(), !(g.defaultPrevented || ((b = a.searchRef) == null ? void 0 : b.value) !== "" && g.key === " ") && (Fp.includes(g.key) && p(), g.key === " " && g.preventDefault());
    }
    if (t.value === "")
      throw new Error(
        "A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return se(() => {
      l.value && a.itemRefCallback(
        l.value,
        t.value,
        t.disabled
      );
    }), Yp({
      value: t.value,
      disabled: n,
      textId: c,
      isSelected: i,
      onItemTextChange: (g) => {
        d.value = ((d.value || (g == null ? void 0 : g.textContent)) ?? "").trim();
      }
    }), (g, b) => (h(), C(s(K), {
      ref: s(r),
      role: "option",
      "data-radix-vue-collection-item": "",
      "aria-labelledby": s(c),
      "data-highlighted": u.value ? "" : void 0,
      "aria-selected": i.value,
      "data-state": i.value ? "checked" : "unchecked",
      "aria-disabled": s(n) || void 0,
      "data-disabled": s(n) ? "" : void 0,
      tabindex: s(n) ? void 0 : -1,
      as: g.as,
      "as-child": g.asChild,
      onFocus: b[0] || (b[0] = (w) => u.value = !0),
      onBlur: b[1] || (b[1] = (w) => u.value = !1),
      onPointerup: p,
      onPointerdown: b[2] || (b[2] = (w) => {
        w.currentTarget.focus({ preventScroll: !0 });
      }),
      onTouchend: b[3] || (b[3] = Be(() => {
      }, ["prevent", "stop"])),
      onPointermove: m,
      onPointerleave: f,
      onKeydown: v
    }, {
      default: y(() => [
        _(g.$slots, "default")
      ]),
      _: 3
    }, 8, ["aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "tabindex", "as", "as-child"]));
  }
}), Zp = /* @__PURE__ */ x({
  __name: "SelectItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = nl();
    return (o, a) => s(n).isSelected.value ? (h(), C(s(K), D({
      key: 0,
      "aria-hidden": "true"
    }, t), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16)) : ce("", !0);
  }
}), [Qp, Jp] = oe("SelectGroup"), ef = /* @__PURE__ */ x({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Ce(void 0, "radix-vue-select-group");
    return Jp({ id: n }), (o, a) => (h(), C(s(K), D({ role: "group" }, t, { "aria-labelledby": s(n) }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), tf = /* @__PURE__ */ x({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, n = Qp({ id: "" });
    return (o, a) => (h(), C(s(K), D(t, {
      id: s(n).id
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), ol = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = Pt(), o = It(Jt), a = Pp(), r = nl(), { forwardRef: l, currentElement: i } = M(), u = S(() => {
      var d;
      return Oe("option", {
        key: r.value,
        value: r.value,
        disabled: r.disabled.value,
        textContent: (d = i.value) == null ? void 0 : d.textContent
      });
    });
    return se(() => {
      i.value && (r.onItemTextChange(i.value), o.itemTextRefCallback(
        i.value,
        r.value,
        r.disabled.value
      ), a.onNativeOptionAdd(u.value));
    }), Xn(() => {
      a.onNativeOptionRemove(u.value);
    }), (d, c) => (h(), N(be, null, [
      R(s(K), D({
        id: s(r).textId,
        ref: s(l)
      }, { ...t, ...d.$attrs }, { "data-item-text": "" }), {
        default: y(() => [
          _(d.$slots, "default")
        ]),
        _: 3
      }, 16, ["id"]),
      s(r).isSelected.value && s(n).valueElement.value && !s(n).valueElementHasChildren.value ? (h(), C(Yn, {
        key: 0,
        to: s(n).valueElement.value
      }, [
        _(d.$slots, "default")
      ], 8, ["to"])) : ce("", !0)
    ], 64));
  }
}), nf = /* @__PURE__ */ x({
  __name: "SelectViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { nonce: n } = pe(t), o = bc(n), a = It(Jt), r = a.position === "item-aligned" ? Fa() : void 0, { forwardRef: l, currentElement: i } = M();
    se(() => {
      a == null || a.onViewportChange(i.value);
    });
    const u = T(0);
    function d(c) {
      const p = c.currentTarget, { shouldExpandOnScrollRef: m, contentWrapper: f } = r ?? {};
      if (m != null && m.value && f != null && f.value) {
        const v = Math.abs(u.value - p.scrollTop);
        if (v > 0) {
          const g = window.innerHeight - He * 2, b = Number.parseFloat(
            f.value.style.minHeight
          ), w = Number.parseFloat(f.value.style.height), B = Math.max(b, w);
          if (B < g) {
            const $ = B + v, E = Math.min(g, $), k = $ - E;
            f.value.style.height = `${E}px`, f.value.style.bottom === "0px" && (p.scrollTop = k > 0 ? k : 0, f.value.style.justifyContent = "flex-end");
          }
        }
      }
      u.value = p.scrollTop;
    }
    return (c, p) => (h(), N(be, null, [
      R(s(K), D({
        ref: s(l),
        "data-radix-select-viewport": "",
        role: "presentation"
      }, { ...c.$attrs, ...t }, {
        style: {
          // we use position: 'relative' here on the `viewport` so that when we call
          // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
          // (independent of the scrollUpButton).
          position: "relative",
          flex: 1,
          overflow: "hidden auto"
        },
        onScroll: d
      }), {
        default: y(() => [
          _(c.$slots, "default")
        ]),
        _: 3
      }, 16),
      R(s(K), {
        as: "style",
        nonce: s(o)
      }, {
        default: y(() => [
          ke(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-radix-select-viewport]::-webkit-scrollbar { display: none; } ")
        ]),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
}), al = /* @__PURE__ */ x({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(e, { emit: t }) {
    const n = t, { injectCollection: o } = Gt(), a = o(), r = It(Jt), l = T(null);
    function i() {
      l.value !== null && (window.clearInterval(l.value), l.value = null);
    }
    we(() => {
      const c = a.value.find(
        (p) => p === $e()
      );
      c == null || c.scrollIntoView({ block: "nearest" });
    });
    function u() {
      l.value === null && (l.value = window.setInterval(() => {
        n("autoScroll");
      }, 50));
    }
    function d() {
      var c;
      (c = r.onItemLeave) == null || c.call(r), l.value === null && (l.value = window.setInterval(() => {
        n("autoScroll");
      }, 50));
    }
    return Xn(() => i()), (c, p) => {
      var m;
      return h(), C(s(K), D({
        "aria-hidden": "true",
        style: {
          flexShrink: 0
        }
      }, (m = c.$parent) == null ? void 0 : m.$props, {
        onPointerdown: u,
        onPointermove: d,
        onPointerleave: p[0] || (p[0] = () => {
          i();
        })
      }), {
        default: y(() => [
          _(c.$slots, "default")
        ]),
        _: 3
      }, 16);
    };
  }
}), of = /* @__PURE__ */ x({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = It(Jt), n = t.position === "item-aligned" ? Fa() : void 0, { forwardRef: o, currentElement: a } = M(), r = T(!1);
    return we((l) => {
      var i, u;
      if ((i = t.viewport) != null && i.value && (u = t.isPositioned) != null && u.value) {
        let d = function() {
          r.value = c.scrollTop > 0;
        };
        const c = t.viewport.value;
        d(), c.addEventListener("scroll", d), l(() => c.removeEventListener("scroll", d));
      }
    }), X(a, () => {
      a.value && (n == null || n.onScrollButtonChange(a.value));
    }), (l, i) => r.value ? (h(), C(al, {
      key: 0,
      ref: s(o),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: u, selectedItem: d } = s(t);
        u != null && u.value && d != null && d.value && (u.value.scrollTop = u.value.scrollTop - d.value.offsetHeight);
      })
    }, {
      default: y(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 512)) : ce("", !0);
  }
}), af = /* @__PURE__ */ x({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = It(Jt), n = t.position === "item-aligned" ? Fa() : void 0, { forwardRef: o, currentElement: a } = M(), r = T(!1);
    return we((l) => {
      var i, u;
      if ((i = t.viewport) != null && i.value && (u = t.isPositioned) != null && u.value) {
        let d = function() {
          const p = c.scrollHeight - c.clientHeight;
          r.value = Math.ceil(c.scrollTop) < p;
        };
        const c = t.viewport.value;
        d(), c.addEventListener("scroll", d), l(() => c.removeEventListener("scroll", d));
      }
    }), X(a, () => {
      a.value && (n == null || n.onScrollButtonChange(a.value));
    }), (l, i) => r.value ? (h(), C(al, {
      key: 0,
      ref: s(o),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: u, selectedItem: d } = s(t);
        u != null && u.value && d != null && d.value && (u.value.scrollTop = u.value.scrollTop + d.value.offsetHeight);
      })
    }, {
      default: y(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 512)) : ce("", !0);
  }
}), rf = /* @__PURE__ */ x({
  __name: "SelectValue",
  props: {
    placeholder: { default: "" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const { forwardRef: t, currentElement: n } = M(), o = Pt(), a = Xr();
    return Yr(() => {
      var r;
      const l = !!eo((r = a == null ? void 0 : a.default) == null ? void 0 : r.call(a)).length;
      o.onValueElementHasChildrenChange(l);
    }), se(() => {
      o.valueElement = n;
    }), (r, l) => (h(), C(s(K), {
      ref: s(t),
      as: r.as,
      "as-child": r.asChild,
      style: { pointerEvents: "none" }
    }, {
      default: y(() => {
        var i;
        return [
          s(tl)((i = s(o).modelValue) == null ? void 0 : i.value) ? (h(), N(be, { key: 0 }, [
            ke(Te(r.placeholder), 1)
          ], 64)) : _(r.$slots, "default", { key: 1 })
        ];
      }),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), sf = /* @__PURE__ */ x({
  __name: "SelectIcon",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return (t, n) => (h(), C(s(K), {
      "aria-hidden": "true",
      as: t.as,
      "as-child": t.asChild
    }, {
      default: y(() => [
        _(t.$slots, "default", {}, () => [
          ke("▼")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function lf(e = [], t, n) {
  const o = [...e];
  return o[n] = t, o.sort((a, r) => a - r);
}
function rl(e, t, n) {
  const o = 100 / (n - t) * (e - t);
  return Hn(o, 0, 100);
}
function uf(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
function df(e, t) {
  if (e.length === 1)
    return 0;
  const n = e.map((a) => Math.abs(a - t)), o = Math.min(...n);
  return n.indexOf(o);
}
function cf(e, t, n) {
  const o = e / 2, a = Va([0, 50], [0, o]);
  return (o - a(t) * n) * n;
}
function pf(e) {
  return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
function ff(e, t) {
  if (t > 0) {
    const n = pf(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function Va(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const o = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + o * (n - e[0]);
  };
}
function mf(e) {
  return (String(e).split(".")[1] || "").length;
}
function vf(e, t) {
  const n = 10 ** t;
  return Math.round(e * n) / n;
}
const sl = ["PageUp", "PageDown"], ll = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], il = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, [ul, dl] = oe(["SliderVertical", "SliderHorizontal"]), cl = /* @__PURE__ */ x({
  __name: "SliderImpl",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  emits: ["slideStart", "slideMove", "slideEnd", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = io();
    return (r, l) => (h(), C(s(K), D({ "data-slider-impl": "" }, n, {
      onKeydown: l[0] || (l[0] = (i) => {
        i.key === "Home" ? (o("homeKeyDown", i), i.preventDefault()) : i.key === "End" ? (o("endKeyDown", i), i.preventDefault()) : s(sl).concat(s(ll)).includes(i.key) && (o("stepKeyDown", i), i.preventDefault());
      }),
      onPointerdown: l[1] || (l[1] = (i) => {
        const u = i.target;
        u.setPointerCapture(i.pointerId), i.preventDefault(), s(a).thumbElements.value.includes(u) ? u.focus() : o("slideStart", i);
      }),
      onPointermove: l[2] || (l[2] = (i) => {
        i.target.hasPointerCapture(i.pointerId) && o("slideMove", i);
      }),
      onPointerup: l[3] || (l[3] = (i) => {
        const u = i.target;
        u.hasPointerCapture(i.pointerId) && (u.releasePointerCapture(i.pointerId), o("slideEnd", i));
      })
    }), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), gf = /* @__PURE__ */ x({
  __name: "SliderHorizontal",
  props: {
    dir: {},
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const n = e, o = t, { max: a, min: r, dir: l, inverted: i } = pe(n), { forwardRef: u, currentElement: d } = M(), c = T(), p = S(() => (l == null ? void 0 : l.value) === "ltr" && !i.value || (l == null ? void 0 : l.value) !== "ltr" && i.value);
    function m(f) {
      const v = c.value || d.value.getBoundingClientRect(), g = [0, v.width], b = p.value ? [r.value, a.value] : [a.value, r.value], w = Va(g, b);
      return c.value = v, w(f - v.left);
    }
    return dl({
      startEdge: p.value ? "left" : "right",
      endEdge: p.value ? "right" : "left",
      direction: p.value ? 1 : -1,
      size: "width"
    }), (f, v) => (h(), C(cl, {
      ref: s(u),
      dir: s(l),
      "data-orientation": "horizontal",
      style: {
        "--radix-slider-thumb-transform": "translateX(-50%)"
      },
      onSlideStart: v[0] || (v[0] = (g) => {
        const b = m(g.clientX);
        o("slideStart", b);
      }),
      onSlideMove: v[1] || (v[1] = (g) => {
        const b = m(g.clientX);
        o("slideMove", b);
      }),
      onSlideEnd: v[2] || (v[2] = () => {
        c.value = void 0, o("slideEnd");
      }),
      onStepKeyDown: v[3] || (v[3] = (g) => {
        const b = p.value ? "from-left" : "from-right", w = s(il)[b].includes(g.key);
        o("stepKeyDown", g, w ? -1 : 1);
      }),
      onEndKeyDown: v[4] || (v[4] = (g) => o("endKeyDown", g)),
      onHomeKeyDown: v[5] || (v[5] = (g) => o("homeKeyDown", g))
    }, {
      default: y(() => [
        _(f.$slots, "default")
      ]),
      _: 3
    }, 8, ["dir"]));
  }
}), hf = /* @__PURE__ */ x({
  __name: "SliderVertical",
  props: {
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const n = e, o = t, { max: a, min: r, inverted: l } = pe(n), { forwardRef: i, currentElement: u } = M(), d = T(), c = S(() => !l.value);
    function p(m) {
      const f = d.value || u.value.getBoundingClientRect(), v = [0, f.height], g = c.value ? [a.value, r.value] : [r.value, a.value], b = Va(v, g);
      return d.value = f, b(m - f.top);
    }
    return dl({
      startEdge: c.value ? "bottom" : "top",
      endEdge: c.value ? "top" : "bottom",
      size: "height",
      direction: c.value ? 1 : -1
    }), (m, f) => (h(), C(cl, {
      ref: s(i),
      "data-orientation": "vertical",
      style: {
        "--radix-slider-thumb-transform": "translateY(50%)"
      },
      onSlideStart: f[0] || (f[0] = (v) => {
        const g = p(v.clientY);
        o("slideStart", g);
      }),
      onSlideMove: f[1] || (f[1] = (v) => {
        const g = p(v.clientY);
        o("slideMove", g);
      }),
      onSlideEnd: f[2] || (f[2] = () => {
        d.value = void 0, o("slideEnd");
      }),
      onStepKeyDown: f[3] || (f[3] = (v) => {
        const g = c.value ? "from-bottom" : "from-top", b = s(il)[g].includes(v.key);
        o("stepKeyDown", v, b ? -1 : 1);
      }),
      onEndKeyDown: f[4] || (f[4] = (v) => o("endKeyDown", v)),
      onHomeKeyDown: f[5] || (f[5] = (v) => o("homeKeyDown", v))
    }, {
      default: y(() => [
        _(m.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
}), yf = ["value", "name", "disabled", "step"], [io, bf] = oe("SliderRoot"), wf = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "SliderRoot",
  props: {
    name: {},
    defaultValue: { default: () => [0] },
    modelValue: {},
    disabled: { type: Boolean, default: !1 },
    orientation: { default: "horizontal" },
    dir: {},
    inverted: { type: Boolean, default: !1 },
    min: { default: 0 },
    max: { default: 100 },
    step: { default: 1 },
    minStepsBetweenThumbs: { default: 0 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "valueCommit"],
  setup(e, { emit: t }) {
    const n = e, o = t, { min: a, max: r, step: l, minStepsBetweenThumbs: i, orientation: u, disabled: d, dir: c } = pe(n), p = yt(c), { forwardRef: m, currentElement: f } = M(), v = no(f);
    Aa();
    const g = ge(n, "modelValue", o, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), b = T(0), w = T(g.value);
    function B(O) {
      const I = df(g.value, O);
      k(O, I);
    }
    function $(O) {
      k(O, b.value);
    }
    function E() {
      const O = w.value[b.value];
      g.value[b.value] !== O && o("valueCommit", Jl(g.value));
    }
    function k(O, I, { commit: V } = { commit: !1 }) {
      var A;
      const L = mf(l.value), F = vf(Math.round((O - a.value) / l.value) * l.value + a.value, L), q = Hn(F, a.value, r.value), G = lf(g.value, q, I);
      if (ff(G, i.value * l.value)) {
        b.value = G.indexOf(q);
        const Q = String(G) !== String(g.value);
        Q && V && o("valueCommit", G), Q && ((A = P.value[b.value]) == null || A.focus(), g.value = G);
      }
    }
    const P = T([]);
    return bf({
      modelValue: g,
      valueIndexToChangeRef: b,
      thumbElements: P,
      orientation: u,
      min: a,
      max: r,
      disabled: d
    }), (O, I) => (h(), N(be, null, [
      R(s(Ta), null, {
        default: y(() => [
          (h(), C(Ve(s(u) === "horizontal" ? gf : hf), D(O.$attrs, {
            ref: s(m),
            "as-child": O.asChild,
            as: O.as,
            min: s(a),
            max: s(r),
            dir: s(p),
            inverted: O.inverted,
            "aria-disabled": s(d),
            "data-disabled": s(d) ? "" : void 0,
            onPointerdown: I[0] || (I[0] = () => {
              s(d) || (w.value = s(g));
            }),
            onSlideStart: I[1] || (I[1] = (V) => !s(d) && B(V)),
            onSlideMove: I[2] || (I[2] = (V) => !s(d) && $(V)),
            onSlideEnd: I[3] || (I[3] = (V) => !s(d) && E()),
            onHomeKeyDown: I[4] || (I[4] = (V) => !s(d) && k(s(a), 0, { commit: !0 })),
            onEndKeyDown: I[5] || (I[5] = (V) => !s(d) && k(s(r), s(g).length - 1, { commit: !0 })),
            onStepKeyDown: I[6] || (I[6] = (V, A) => {
              if (!s(d)) {
                const L = s(sl).includes(V.key) || V.shiftKey && s(ll).includes(V.key) ? 10 : 1, F = b.value, q = s(g)[F], G = s(l) * L * A;
                k(q + G, F, { commit: !0 });
              }
            })
          }), {
            default: y(() => [
              _(O.$slots, "default", { modelValue: s(g) })
            ]),
            _: 3
          }, 16, ["as-child", "as", "min", "max", "dir", "inverted", "aria-disabled", "data-disabled"]))
        ]),
        _: 3
      }),
      s(v) ? (h(!0), N(be, { key: 0 }, vt(s(g), (V, A) => (h(), N("input", {
        key: A,
        value: V,
        type: "number",
        style: { display: "none" },
        name: O.name ? O.name + (s(g).length > 1 ? "[]" : "") : void 0,
        disabled: s(d),
        step: s(l)
      }, null, 8, yf))), 128)) : ce("", !0)
    ], 64));
  }
}), xf = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "SliderThumbImpl",
  props: {
    index: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = io(), o = ul(), { forwardRef: a, currentElement: r } = M(), l = S(() => {
      var f, v;
      return (v = (f = n.modelValue) == null ? void 0 : f.value) == null ? void 0 : v[t.index];
    }), i = S(() => l.value === void 0 ? 0 : rl(l.value, n.min.value ?? 0, n.max.value ?? 100)), u = S(() => {
      var f, v;
      return uf(t.index, ((v = (f = n.modelValue) == null ? void 0 : f.value) == null ? void 0 : v.length) ?? 0);
    }), d = Ds(r), c = S(() => d[o.size].value), p = S(() => c.value ? cf(c.value, i.value, o.direction) : 0), m = ga();
    return se(() => {
      n.thumbElements.value.push(r.value);
    }), ze(() => {
      const f = n.thumbElements.value.findIndex((v) => v === r.value) ?? -1;
      n.thumbElements.value.splice(f, 1);
    }), (f, v) => (h(), C(s(lo), null, {
      default: y(() => [
        R(s(K), D(f.$attrs, {
          ref: s(a),
          role: "slider",
          "data-radix-vue-collection-item": "",
          tabindex: s(n).disabled.value ? void 0 : 0,
          "aria-label": f.$attrs["aria-label"] || u.value,
          "data-disabled": s(n).disabled.value ? "" : void 0,
          "data-orientation": s(n).orientation.value,
          "aria-valuenow": l.value,
          "aria-valuemin": s(n).min.value,
          "aria-valuemax": s(n).max.value,
          "aria-orientation": s(n).orientation.value,
          "as-child": f.asChild,
          as: f.as,
          style: {
            transform: "var(--radix-slider-thumb-transform)",
            position: "absolute",
            [s(o).startEdge]: `calc(${i.value}% + ${p.value}px)`,
            /**
             * There will be no value on initial render while we work out the index so we hide thumbs
             * without a value, otherwise SSR will render them in the wrong position before they
             * snap into the correct position during hydration which would be visually jarring for
             * slower connections.
             */
            display: !s(m) && l.value === void 0 ? "none" : void 0
          },
          onFocus: v[0] || (v[0] = () => {
            s(n).valueIndexToChangeRef.value = f.index;
          })
        }), {
          default: y(() => [
            _(f.$slots, "default")
          ]),
          _: 3
        }, 16, ["tabindex", "aria-label", "data-disabled", "data-orientation", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-orientation", "as-child", "as", "style"])
      ]),
      _: 3
    }));
  }
}), _f = /* @__PURE__ */ x({
  __name: "SliderThumb",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { getItems: n } = Da(), { forwardRef: o, currentElement: a } = M(), r = S(() => a.value ? n().findIndex((l) => l.ref === a.value) : -1);
    return (l, i) => (h(), C(xf, D({ ref: s(o) }, t, { index: r.value }), {
      default: y(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["index"]));
  }
}), Cf = /* @__PURE__ */ x({
  __name: "SliderTrack",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = io();
    return M(), (n, o) => (h(), C(s(K), {
      "as-child": n.asChild,
      as: n.as,
      "data-disabled": s(t).disabled.value ? "" : void 0,
      "data-orientation": s(t).orientation.value
    }, {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "data-disabled", "data-orientation"]));
  }
}), Bf = /* @__PURE__ */ x({
  __name: "SliderRange",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = io(), n = ul();
    M();
    const o = S(() => {
      var l, i;
      return (i = (l = t.modelValue) == null ? void 0 : l.value) == null ? void 0 : i.map(
        (u) => rl(u, t.min.value, t.max.value)
      );
    }), a = S(() => t.modelValue.value.length > 1 ? Math.min(...o.value) : 0), r = S(() => 100 - Math.max(...o.value));
    return (l, i) => (h(), C(s(K), {
      "data-disabled": s(t).disabled.value ? "" : void 0,
      "data-orientation": s(t).orientation.value,
      "as-child": l.asChild,
      as: l.as,
      style: Ot({
        [s(n).startEdge]: `${a.value}%`,
        [s(n).endEdge]: `${r.value}%`
      })
    }, {
      default: y(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-disabled", "data-orientation", "as-child", "as", "style"]));
  }
});
function $f() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
$f();
const Sf = ["name", "disabled", "required", "value", "checked", "data-state", "data-disabled"], [kf, Of] = oe("SwitchRoot"), Ef = /* @__PURE__ */ x({
  __name: "SwitchRoot",
  props: {
    defaultChecked: { type: Boolean },
    checked: { type: Boolean, default: void 0 },
    disabled: { type: Boolean },
    required: { type: Boolean },
    name: {},
    id: {},
    value: { default: "on" },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  emits: ["update:checked"],
  setup(e, { emit: t }) {
    const n = e, o = t, { disabled: a } = pe(n), r = ge(n, "checked", o, {
      defaultValue: n.defaultChecked,
      passive: n.checked === void 0
    });
    function l() {
      a.value || (r.value = !r.value);
    }
    const { forwardRef: i, currentElement: u } = M(), d = no(u), c = S(() => {
      var p;
      return n.id && u.value ? (p = document.querySelector(`[for="${n.id}"]`)) == null ? void 0 : p.innerText : void 0;
    });
    return Of({
      checked: r,
      toggleCheck: l,
      disabled: a
    }), (p, m) => (h(), N(be, null, [
      R(s(K), D(p.$attrs, {
        id: p.id,
        ref: s(i),
        role: "switch",
        type: p.as === "button" ? "button" : void 0,
        value: p.value,
        "aria-label": p.$attrs["aria-label"] || c.value,
        "aria-checked": s(r),
        "aria-required": p.required,
        "data-state": s(r) ? "checked" : "unchecked",
        "data-disabled": s(a) ? "" : void 0,
        "as-child": p.asChild,
        as: p.as,
        disabled: s(a),
        onClick: l,
        onKeydown: mt(Be(l, ["prevent"]), ["enter"])
      }), {
        default: y(() => [
          _(p.$slots, "default", { checked: s(r) })
        ]),
        _: 3
      }, 16, ["id", "type", "value", "aria-label", "aria-checked", "aria-required", "data-state", "data-disabled", "as-child", "as", "disabled", "onKeydown"]),
      s(d) ? (h(), N("input", {
        key: 0,
        type: "checkbox",
        name: p.name,
        tabindex: "-1",
        "aria-hidden": "true",
        disabled: s(a),
        required: p.required,
        value: p.value,
        checked: !!s(r),
        "data-state": s(r) ? "checked" : "unchecked",
        "data-disabled": s(a) ? "" : void 0,
        style: {
          transform: "translateX(-100%)",
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }, null, 8, Sf)) : ce("", !0)
    ], 64));
  }
}), Af = /* @__PURE__ */ x({
  __name: "SwitchThumb",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = kf();
    return M(), (n, o) => {
      var a;
      return h(), C(s(K), {
        "data-state": (a = s(t).checked) != null && a.value ? "checked" : "unchecked",
        "data-disabled": s(t).disabled.value ? "" : void 0,
        "as-child": n.asChild,
        as: n.as
      }, {
        default: y(() => [
          _(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-state", "data-disabled", "as-child", "as"]);
    };
  }
}), [La, Tf] = oe("TabsRoot"), Df = /* @__PURE__ */ x({
  __name: "TabsRoot",
  props: {
    defaultValue: {},
    orientation: { default: "horizontal" },
    dir: {},
    activationMode: { default: "automatic" },
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = t, { orientation: a, dir: r } = pe(n), l = yt(r);
    M();
    const i = ge(n, "modelValue", o, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), u = T();
    return Tf({
      modelValue: i,
      changeModelValue: (d) => {
        i.value = d;
      },
      orientation: a,
      dir: l,
      activationMode: n.activationMode,
      baseId: Ce(void 0, "radix-vue-tabs"),
      tabsList: u
    }), (d, c) => (h(), C(s(K), {
      dir: s(l),
      "data-orientation": s(a),
      "as-child": d.asChild,
      as: d.as
    }, {
      default: y(() => [
        _(d.$slots, "default", { modelValue: s(i) })
      ]),
      _: 3
    }, 8, ["dir", "data-orientation", "as-child", "as"]));
  }
}), Pf = /* @__PURE__ */ x({
  __name: "TabsList",
  props: {
    loop: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { loop: n } = pe(t), { forwardRef: o, currentElement: a } = M(), r = La();
    return r.tabsList = a, (l, i) => (h(), C(s(Ws), {
      "as-child": "",
      orientation: s(r).orientation.value,
      dir: s(r).dir.value,
      loop: s(n)
    }, {
      default: y(() => [
        R(s(K), {
          ref: s(o),
          role: "tablist",
          "as-child": l.asChild,
          as: l.as,
          "aria-orientation": s(r).orientation.value
        }, {
          default: y(() => [
            _(l.$slots, "default")
          ]),
          _: 3
        }, 8, ["as-child", "as", "aria-orientation"])
      ]),
      _: 3
    }, 8, ["orientation", "dir", "loop"]));
  }
});
function pl(e, t) {
  return `${e}-trigger-${t}`;
}
function fl(e, t) {
  return `${e}-content-${t}`;
}
const If = /* @__PURE__ */ x({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n } = M(), o = La(), a = S(() => pl(o.baseId, t.value)), r = S(() => fl(o.baseId, t.value)), l = S(() => t.value === o.modelValue.value), i = T(l.value);
    return se(() => {
      requestAnimationFrame(() => {
        i.value = !1;
      });
    }), (u, d) => (h(), C(s(Ne), {
      present: l.value,
      "force-mount": ""
    }, {
      default: y(({ present: c }) => [
        R(s(K), {
          id: r.value,
          ref: s(n),
          "as-child": u.asChild,
          as: u.as,
          role: "tabpanel",
          "data-state": l.value ? "active" : "inactive",
          "data-orientation": s(o).orientation.value,
          "aria-labelledby": a.value,
          hidden: !c.value,
          tabindex: "0",
          style: Ot({
            animationDuration: i.value ? "0s" : void 0
          })
        }, {
          default: y(() => [
            u.forceMount || l.value ? _(u.$slots, "default", { key: 0 }) : ce("", !0)
          ]),
          _: 2
        }, 1032, ["id", "as-child", "as", "data-state", "data-orientation", "aria-labelledby", "hidden", "style"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Mf = /* @__PURE__ */ x({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, { forwardRef: n } = M(), o = La(), a = S(() => pl(o.baseId, t.value)), r = S(() => fl(o.baseId, t.value)), l = S(() => t.value === o.modelValue.value);
    return (i, u) => (h(), C(s(Rc), {
      "as-child": "",
      focusable: !i.disabled,
      active: l.value
    }, {
      default: y(() => [
        R(s(K), {
          id: a.value,
          ref: s(n),
          role: "tab",
          type: i.as === "button" ? "button" : void 0,
          as: i.as,
          "as-child": i.asChild,
          "aria-selected": l.value ? "true" : "false",
          "aria-controls": r.value,
          "data-state": l.value ? "active" : "inactive",
          disabled: i.disabled,
          "data-disabled": i.disabled ? "" : void 0,
          "data-orientation": s(o).orientation.value,
          onMousedown: u[0] || (u[0] = Be((d) => {
            !i.disabled && d.ctrlKey === !1 ? s(o).changeModelValue(i.value) : d.preventDefault();
          }, ["left"])),
          onKeydown: u[1] || (u[1] = mt((d) => s(o).changeModelValue(i.value), ["enter", "space"])),
          onFocus: u[2] || (u[2] = () => {
            const d = s(o).activationMode !== "manual";
            !l.value && !i.disabled && d && s(o).changeModelValue(i.value);
          })
        }, {
          default: y(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as", "as-child", "aria-selected", "aria-controls", "data-state", "disabled", "data-disabled", "data-orientation"])
      ]),
      _: 3
    }, 8, ["focusable", "active"]));
  }
}), [uo, Rf] = oe("ToastProvider"), Ff = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "ToastProvider",
  props: {
    label: { default: "Notification" },
    duration: { default: 5e3 },
    swipeDirection: { default: "right" },
    swipeThreshold: { default: 50 }
  },
  setup(e) {
    const t = e, { label: n, duration: o, swipeDirection: a, swipeThreshold: r } = pe(t), l = T(), i = T(0), u = T(!1), d = T(!1);
    if (t.label && typeof t.label == "string" && !t.label.trim()) {
      const c = "Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`.";
      throw new Error(c);
    }
    return Rf({
      label: n,
      duration: o,
      swipeDirection: a,
      swipeThreshold: r,
      toastCount: i,
      viewport: l,
      onViewportChange(c) {
        l.value = c;
      },
      onToastAdd() {
        i.value++;
      },
      onToastRemove() {
        i.value--;
      },
      isFocusedToastEscapeKeyDownRef: u,
      isClosePausedRef: d
    }), (c, p) => _(c.$slots, "default");
  }
}), Vf = "toast.swipeStart", Lf = "toast.swipeMove", zf = "toast.swipeCancel", Nf = "toast.swipeEnd", Uo = "toast.viewportPause", Wo = "toast.viewportResume";
function In(e, t, n) {
  const o = n.originalEvent.currentTarget, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, { once: !0 }), o.dispatchEvent(a);
}
function _r(e, t, n = 0) {
  const o = Math.abs(e.x), a = Math.abs(e.y), r = o > a;
  return t === "left" || t === "right" ? r && o > n : !r && a > n;
}
function jf(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function ml(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((n) => {
    if (n.nodeType === n.TEXT_NODE && n.textContent && t.push(n.textContent), jf(n)) {
      const o = n.ariaHidden || n.hidden || n.style.display === "none", a = n.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (a) {
          const r = n.dataset.radixToastAnnounceAlt;
          r && t.push(r);
        } else
          t.push(...ml(n));
    }
  }), t;
}
const Kf = /* @__PURE__ */ x({
  __name: "ToastAnnounce",
  setup(e) {
    const t = uo(), n = $u(1e3), o = T(!1);
    return ks(() => {
      o.value = !0;
    }), (a, r) => s(n) || o.value ? (h(), C(s(Bn), { key: 0 }, {
      default: y(() => [
        ke(Te(s(t).label.value) + " ", 1),
        _(a.$slots, "default")
      ]),
      _: 3
    })) : ce("", !0);
  }
}), [Hf, Uf] = oe("ToastRoot"), Wf = /* @__PURE__ */ x({
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
    const n = e, o = t, { forwardRef: a, currentElement: r } = M(), l = uo(), i = T(null), u = T(null), d = S(
      () => typeof n.duration == "number" ? n.duration : l.duration.value
    ), c = T(0), p = T(d.value), m = T(0), f = T(d.value), v = ks(() => {
      const B = (/* @__PURE__ */ new Date()).getTime() - c.value;
      f.value = Math.max(p.value - B, 0);
    }, { fpsLimit: 60 });
    function g(B) {
      B <= 0 || B === Number.POSITIVE_INFINITY || Je && (window.clearTimeout(m.value), c.value = (/* @__PURE__ */ new Date()).getTime(), m.value = window.setTimeout(b, B));
    }
    function b() {
      var B, $;
      (B = r.value) != null && B.contains($e()) && (($ = l.viewport.value) == null || $.focus()), l.isClosePausedRef.value = !1, o("close");
    }
    const w = S(() => r.value ? ml(r.value) : null);
    if (n.type && !["foreground", "background"].includes(n.type)) {
      const B = "Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.";
      throw new Error(B);
    }
    return we((B) => {
      const $ = l.viewport.value;
      if ($) {
        const E = () => {
          g(p.value), v.resume(), o("resume");
        }, k = () => {
          const P = (/* @__PURE__ */ new Date()).getTime() - c.value;
          p.value = p.value - P, window.clearTimeout(m.value), v.pause(), o("pause");
        };
        return $.addEventListener(Uo, k), $.addEventListener(Wo, E), () => {
          $.removeEventListener(Uo, k), $.removeEventListener(Wo, E);
        };
      }
    }), X(() => [n.open, d.value], () => {
      p.value = d.value, n.open && !l.isClosePausedRef.value && g(d.value);
    }, { immediate: !0 }), va("Escape", (B) => {
      o("escapeKeyDown", B), B.defaultPrevented || (l.isFocusedToastEscapeKeyDownRef.value = !0, b());
    }), se(() => {
      l.onToastAdd();
    }), ze(() => {
      l.onToastRemove();
    }), Uf({ onClose: b }), (B, $) => (h(), N(be, null, [
      w.value ? (h(), C(Kf, {
        key: 0,
        role: "alert",
        "aria-live": B.type === "foreground" ? "assertive" : "polite",
        "aria-atomic": "true"
      }, {
        default: y(() => [
          ke(Te(w.value), 1)
        ]),
        _: 1
      }, 8, ["aria-live"])) : ce("", !0),
      s(l).viewport.value ? (h(), C(Yn, {
        key: 1,
        to: s(l).viewport.value
      }, [
        R(s(K), D({
          ref: s(a),
          role: "alert",
          "aria-live": "off",
          "aria-atomic": "true",
          tabindex: "0",
          "data-radix-vue-collection-item": ""
        }, B.$attrs, {
          as: B.as,
          "as-child": B.asChild,
          "data-state": B.open ? "open" : "closed",
          "data-swipe-direction": s(l).swipeDirection.value,
          style: { userSelect: "none", touchAction: "none" },
          onPointerdown: $[0] || ($[0] = Be((E) => {
            i.value = { x: E.clientX, y: E.clientY };
          }, ["left"])),
          onPointermove: $[1] || ($[1] = (E) => {
            if (!i.value) return;
            const k = E.clientX - i.value.x, P = E.clientY - i.value.y, O = !!u.value, I = ["left", "right"].includes(s(l).swipeDirection.value), V = ["left", "up"].includes(s(l).swipeDirection.value) ? Math.min : Math.max, A = I ? V(0, k) : 0, L = I ? 0 : V(0, P), F = E.pointerType === "touch" ? 10 : 2, q = { x: A, y: L }, G = { originalEvent: E, delta: q };
            O ? (u.value = q, s(In)(s(Lf), (Q) => o("swipeMove", Q), G)) : s(_r)(q, s(l).swipeDirection.value, F) ? (u.value = q, s(In)(s(Vf), (Q) => o("swipeStart", Q), G), E.target.setPointerCapture(E.pointerId)) : (Math.abs(k) > F || Math.abs(P) > F) && (i.value = null);
          }),
          onPointerup: $[2] || ($[2] = (E) => {
            const k = u.value, P = E.target;
            if (P.hasPointerCapture(E.pointerId) && P.releasePointerCapture(E.pointerId), u.value = null, i.value = null, k) {
              const O = E.currentTarget, I = { originalEvent: E, delta: k };
              s(_r)(k, s(l).swipeDirection.value, s(l).swipeThreshold.value) ? s(In)(s(Nf), (V) => o("swipeEnd", V), I) : s(In)(s(zf), (V) => o("swipeCancel", V), I), O == null || O.addEventListener("click", (V) => V.preventDefault(), {
                once: !0
              });
            }
          })
        }), {
          default: y(() => [
            _(B.$slots, "default", {
              remaining: f.value,
              duration: d.value
            })
          ]),
          _: 3
        }, 16, ["as", "as-child", "data-state", "data-swipe-direction"])
      ], 8, ["to"])) : ce("", !0)
    ], 64));
  }
}), Gf = /* @__PURE__ */ x({
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
    const n = e, o = t, { forwardRef: a } = M(), r = ge(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    });
    return (l, i) => (h(), C(s(Ne), {
      present: l.forceMount || s(r)
    }, {
      default: y(() => [
        R(Wf, D({
          ref: s(a),
          open: s(r),
          type: l.type,
          as: l.as,
          "as-child": l.asChild,
          duration: l.duration
        }, l.$attrs, {
          onClose: i[0] || (i[0] = (u) => r.value = !1),
          onPause: i[1] || (i[1] = (u) => o("pause")),
          onResume: i[2] || (i[2] = (u) => o("resume")),
          onEscapeKeyDown: i[3] || (i[3] = (u) => o("escapeKeyDown", u)),
          onSwipeStart: i[4] || (i[4] = (u) => {
            o("swipeStart", u), u.currentTarget.setAttribute("data-swipe", "start");
          }),
          onSwipeMove: i[5] || (i[5] = (u) => {
            const { x: d, y: c } = u.detail.delta, p = u.currentTarget;
            p.setAttribute("data-swipe", "move"), p.style.setProperty("--radix-toast-swipe-move-x", `${d}px`), p.style.setProperty("--radix-toast-swipe-move-y", `${c}px`);
          }),
          onSwipeCancel: i[6] || (i[6] = (u) => {
            const d = u.currentTarget;
            d.setAttribute("data-swipe", "cancel"), d.style.removeProperty("--radix-toast-swipe-move-x"), d.style.removeProperty("--radix-toast-swipe-move-y"), d.style.removeProperty("--radix-toast-swipe-end-x"), d.style.removeProperty("--radix-toast-swipe-end-y");
          }),
          onSwipeEnd: i[7] || (i[7] = (u) => {
            const { x: d, y: c } = u.detail.delta, p = u.currentTarget;
            p.setAttribute("data-swipe", "end"), p.style.removeProperty("--radix-toast-swipe-move-x"), p.style.removeProperty("--radix-toast-swipe-move-y"), p.style.setProperty("--radix-toast-swipe-end-x", `${d}px`), p.style.setProperty("--radix-toast-swipe-end-y", `${c}px`), r.value = !1;
          })
        }), {
          default: y(({ remaining: u, duration: d }) => [
            _(l.$slots, "default", {
              remaining: u,
              duration: d,
              open: s(r)
            })
          ]),
          _: 3
        }, 16, ["open", "type", "as", "as-child", "duration"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), vl = /* @__PURE__ */ x({
  __name: "ToastAnnounceExclude",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    return (t, n) => (h(), C(s(K), {
      as: t.as,
      "as-child": t.asChild,
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": t.altText || void 0
    }, {
      default: y(() => [
        _(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-radix-toast-announce-alt"]));
  }
}), gl = /* @__PURE__ */ x({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Hf(), { forwardRef: o } = M();
    return (a, r) => (h(), C(vl, { "as-child": "" }, {
      default: y(() => [
        R(s(K), D(t, {
          ref: s(o),
          type: a.as === "button" ? "button" : void 0,
          onClick: r[0] || (r[0] = (l) => s(n).onClose())
        }), {
          default: y(() => [
            _(a.$slots, "default")
          ]),
          _: 3
        }, 16, ["type"])
      ]),
      _: 3
    }));
  }
}), qf = /* @__PURE__ */ x({
  __name: "ToastAction",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    if (!e.altText)
      throw new Error("Missing prop `altText` expected on `ToastAction`");
    const { forwardRef: t } = M();
    return (n, o) => n.altText ? (h(), C(vl, {
      key: 0,
      "alt-text": n.altText,
      "as-child": ""
    }, {
      default: y(() => [
        R(gl, {
          ref: s(t),
          as: n.as,
          "as-child": n.asChild
        }, {
          default: y(() => [
            _(n.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child"])
      ]),
      _: 3
    }, 8, ["alt-text"])) : ce("", !0);
  }
}), Cr = /* @__PURE__ */ x({
  __name: "FocusProxy",
  emits: ["focusFromOutsideViewport"],
  setup(e, { emit: t }) {
    const n = t, o = uo();
    return (a, r) => (h(), C(s(Bn), {
      "aria-hidden": "true",
      tabindex: "0",
      style: { position: "fixed" },
      onFocus: r[0] || (r[0] = (l) => {
        var i;
        const u = l.relatedTarget;
        !((i = s(o).viewport.value) != null && i.contains(u)) && n("focusFromOutsideViewport");
      })
    }, {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Yf = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "ToastViewport",
  props: {
    hotkey: { default: () => ["F8"] },
    label: { type: [String, Function], default: "Notifications ({hotkey})" },
    asChild: { type: Boolean },
    as: { default: "ol" }
  },
  setup(e) {
    const t = e, { hotkey: n, label: o } = pe(t), { forwardRef: a, currentElement: r } = M(), { createCollection: l } = Gt(), i = l(r), u = uo(), d = S(() => u.toastCount.value > 0), c = T(), p = T(), m = S(() => n.value.join("+").replace(/Key/g, "").replace(/Digit/g, ""));
    va(n.value, () => {
      r.value.focus();
    }), se(() => {
      u.onViewportChange(r.value);
    }), we((v) => {
      const g = r.value;
      if (d.value && g) {
        const b = () => {
          if (!u.isClosePausedRef.value) {
            const k = new CustomEvent(Uo);
            g.dispatchEvent(k), u.isClosePausedRef.value = !0;
          }
        }, w = () => {
          if (u.isClosePausedRef.value) {
            const k = new CustomEvent(Wo);
            g.dispatchEvent(k), u.isClosePausedRef.value = !1;
          }
        }, B = (k) => {
          !g.contains(k.relatedTarget) && w();
        }, $ = () => {
          g.contains($e()) || w();
        }, E = (k) => {
          var P, O, I;
          const V = k.altKey || k.ctrlKey || k.metaKey;
          if (k.key === "Tab" && !V) {
            const A = $e(), L = k.shiftKey;
            if (k.target === g && L) {
              (P = c.value) == null || P.focus();
              return;
            }
            const F = f({ tabbingDirection: L ? "backwards" : "forwards" }), q = F.findIndex((G) => G === A);
            Vn(F.slice(q + 1)) ? k.preventDefault() : L ? (O = c.value) == null || O.focus() : (I = p.value) == null || I.focus();
          }
        };
        g.addEventListener("focusin", b), g.addEventListener("focusout", B), g.addEventListener("pointermove", b), g.addEventListener("pointerleave", $), g.addEventListener("keydown", E), window.addEventListener("blur", b), window.addEventListener("focus", w), v(() => {
          g.removeEventListener("focusin", b), g.removeEventListener("focusout", B), g.removeEventListener("pointermove", b), g.removeEventListener("pointerleave", $), g.removeEventListener("keydown", E), window.removeEventListener("blur", b), window.removeEventListener("focus", w);
        });
      }
    });
    function f({ tabbingDirection: v }) {
      const g = i.value.map((b) => {
        const w = [b, ...Ba(b)];
        return v === "forwards" ? w : w.reverse();
      });
      return (v === "forwards" ? g.reverse() : g).flat();
    }
    return (v, g) => (h(), C(s(wd), {
      role: "region",
      "aria-label": typeof s(o) == "string" ? s(o).replace("{hotkey}", m.value) : s(o)(m.value),
      tabindex: "-1",
      style: Ot({
        // incase list has size when empty (e.g. padding), we remove pointer events so
        // it doesn't prevent interactions with page elements that it overlays
        pointerEvents: d.value ? void 0 : "none"
      })
    }, {
      default: y(() => [
        d.value ? (h(), C(Cr, {
          key: 0,
          ref: (b) => {
            c.value = s(Le)(b);
          },
          onFocusFromOutsideViewport: g[0] || (g[0] = () => {
            const b = f({
              tabbingDirection: "forwards"
            });
            s(Vn)(b);
          })
        }, null, 512)) : ce("", !0),
        R(s(K), D({
          ref: s(a),
          tabindex: "-1",
          as: v.as,
          "as-child": v.asChild
        }, v.$attrs), {
          default: y(() => [
            _(v.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child"]),
        d.value ? (h(), C(Cr, {
          key: 1,
          ref: (b) => {
            p.value = s(Le)(b);
          },
          onFocusFromOutsideViewport: g[1] || (g[1] = () => {
            const b = f({
              tabbingDirection: "backwards"
            });
            s(Vn)(b);
          })
        }, null, 512)) : ce("", !0)
      ]),
      _: 3
    }, 8, ["aria-label", "style"]));
  }
}), Xf = /* @__PURE__ */ x({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return M(), (n, o) => (h(), C(s(K), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zf = /* @__PURE__ */ x({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return M(), (n, o) => (h(), C(s(K), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hl = "tooltip.open", [za, Qf] = oe("TooltipProvider"), Jf = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "TooltipProvider",
  props: {
    delayDuration: { default: 700 },
    skipDelayDuration: { default: 300 },
    disableHoverableContent: { type: Boolean, default: !1 },
    disableClosingTrigger: { type: Boolean },
    disabled: { type: Boolean },
    ignoreNonKeyboardFocus: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, { delayDuration: n, skipDelayDuration: o, disableHoverableContent: a, disableClosingTrigger: r, ignoreNonKeyboardFocus: l, disabled: i } = pe(t);
    M();
    const u = T(!0), d = T(!1), { start: c, stop: p } = ma(() => {
      u.value = !0;
    }, o, { immediate: !1 });
    return Qf({
      isOpenDelayed: u,
      delayDuration: n,
      onOpen() {
        p(), u.value = !1;
      },
      onClose() {
        c();
      },
      isPointerInTransitRef: d,
      disableHoverableContent: a,
      disableClosingTrigger: r,
      disabled: i,
      ignoreNonKeyboardFocus: l
    }), (m, f) => _(m.$slots, "default");
  }
}), [co, em] = oe("TooltipRoot"), tm = /* @__PURE__ */ x({
  __name: "TooltipRoot",
  props: {
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    delayDuration: { default: void 0 },
    disableHoverableContent: { type: Boolean, default: void 0 },
    disableClosingTrigger: { type: Boolean, default: void 0 },
    disabled: { type: Boolean, default: void 0 },
    ignoreNonKeyboardFocus: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = t;
    M();
    const a = za(), r = S(() => n.disableHoverableContent ?? a.disableHoverableContent.value), l = S(() => n.disableClosingTrigger ?? a.disableClosingTrigger.value), i = S(() => n.disabled ?? a.disabled.value), u = S(() => n.delayDuration ?? a.delayDuration.value), d = S(() => n.ignoreNonKeyboardFocus ?? a.ignoreNonKeyboardFocus.value), c = ge(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    });
    X(c, ($) => {
      a.onClose && ($ ? (a.onOpen(), document.dispatchEvent(new CustomEvent(hl))) : a.onClose());
    });
    const p = T(!1), m = T(), f = S(() => c.value ? p.value ? "delayed-open" : "instant-open" : "closed"), { start: v, stop: g } = ma(() => {
      p.value = !0, c.value = !0;
    }, u, { immediate: !1 });
    function b() {
      g(), p.value = !1, c.value = !0;
    }
    function w() {
      g(), c.value = !1;
    }
    function B() {
      v();
    }
    return em({
      contentId: "",
      open: c,
      stateAttribute: f,
      trigger: m,
      onTriggerChange($) {
        m.value = $;
      },
      onTriggerEnter() {
        a.isOpenDelayed.value ? B() : b();
      },
      onTriggerLeave() {
        r.value ? w() : g();
      },
      onOpen: b,
      onClose: w,
      disableHoverableContent: r,
      disableClosingTrigger: l,
      disabled: i,
      ignoreNonKeyboardFocus: d
    }), ($, E) => (h(), C(s(Xt), null, {
      default: y(() => [
        _($.$slots, "default", { open: s(c) })
      ]),
      _: 3
    }));
  }
}), nm = /* @__PURE__ */ x({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = co(), o = za();
    n.contentId || (n.contentId = Ce(void 0, "radix-vue-tooltip-content"));
    const { forwardRef: a, currentElement: r } = M(), l = T(!1), i = T(!1), u = S(() => n.disabled.value ? {} : {
      click: g,
      focus: f,
      pointermove: p,
      pointerleave: m,
      pointerdown: c,
      blur: v
    });
    se(() => {
      n.onTriggerChange(r.value);
    });
    function d() {
      setTimeout(() => {
        l.value = !1;
      }, 1);
    }
    function c() {
      l.value = !0, document.addEventListener("pointerup", d, { once: !0 });
    }
    function p(b) {
      b.pointerType !== "touch" && !i.value && !o.isPointerInTransitRef.value && (n.onTriggerEnter(), i.value = !0);
    }
    function m() {
      n.onTriggerLeave(), i.value = !1;
    }
    function f(b) {
      var w, B;
      l.value || n.ignoreNonKeyboardFocus.value && !((B = (w = b.target).matches) != null && B.call(w, ":focus-visible")) || n.onOpen();
    }
    function v() {
      n.onClose();
    }
    function g() {
      n.disableClosingTrigger.value || n.onClose();
    }
    return (b, w) => (h(), C(s(Cn), { "as-child": "" }, {
      default: y(() => [
        R(s(K), D({
          ref: s(a),
          "aria-describedby": s(n).open.value ? s(n).contentId : void 0,
          "data-state": s(n).stateAttribute.value,
          as: b.as,
          "as-child": t.asChild,
          "data-grace-area-trigger": ""
        }, ql(u.value)), {
          default: y(() => [
            _(b.$slots, "default")
          ]),
          _: 3
        }, 16, ["aria-describedby", "data-state", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), yl = /* @__PURE__ */ x({
  __name: "TooltipContentImpl",
  props: {
    ariaLabel: {},
    asChild: { type: Boolean },
    as: {},
    side: { default: "top" },
    sideOffset: { default: 0 },
    align: { default: "center" },
    alignOffset: {},
    avoidCollisions: { type: Boolean, default: !0 },
    collisionBoundary: { default: () => [] },
    collisionPadding: { default: 0 },
    arrowPadding: { default: 0 },
    sticky: { default: "partial" },
    hideWhenDetached: { type: Boolean, default: !1 }
  },
  emits: ["escapeKeyDown", "pointerDownOutside"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = co(), { forwardRef: r } = M(), l = Xr(), i = S(() => {
      var c;
      return (c = l.default) == null ? void 0 : c.call(l);
    }), u = S(() => {
      var c;
      if (n.ariaLabel)
        return n.ariaLabel;
      let p = "";
      function m(f) {
        typeof f.children == "string" && f.type !== na ? p += f.children : Array.isArray(f.children) && f.children.forEach((v) => m(v));
      }
      return (c = i.value) == null || c.forEach((f) => m(f)), p;
    }), d = S(() => {
      const { ariaLabel: c, ...p } = n;
      return p;
    });
    return se(() => {
      Kt(window, "scroll", (c) => {
        const p = c.target;
        p != null && p.contains(a.trigger.value) && a.onClose();
      }), Kt(window, hl, a.onClose);
    }), (c, p) => (h(), C(s(Yt), {
      "as-child": "",
      "disable-outside-pointer-events": !1,
      onEscapeKeyDown: p[0] || (p[0] = (m) => o("escapeKeyDown", m)),
      onPointerDownOutside: p[1] || (p[1] = (m) => {
        var f;
        s(a).disableClosingTrigger.value && (f = s(a).trigger.value) != null && f.contains(m.target) && m.preventDefault(), o("pointerDownOutside", m);
      }),
      onFocusOutside: p[2] || (p[2] = Be(() => {
      }, ["prevent"])),
      onDismiss: p[3] || (p[3] = (m) => s(a).onClose())
    }, {
      default: y(() => [
        R(s(Ht), D({
          ref: s(r),
          "data-state": s(a).stateAttribute.value
        }, { ...c.$attrs, ...d.value }, { style: {
          "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
          "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
          "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
        } }), {
          default: y(() => [
            _(c.$slots, "default"),
            R(s(Bn), {
              id: s(a).contentId,
              role: "tooltip"
            }, {
              default: y(() => [
                ke(Te(u.value), 1)
              ]),
              _: 1
            }, 8, ["id"])
          ]),
          _: 3
        }, 16, ["data-state"])
      ]),
      _: 3
    }));
  }
}), om = /* @__PURE__ */ x({
  __name: "TooltipContentHoverable",
  props: {
    ariaLabel: {},
    asChild: { type: Boolean },
    as: {},
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean }
  },
  setup(e) {
    const t = Se(e), { forwardRef: n, currentElement: o } = M(), { trigger: a, onClose: r } = co(), l = za(), { isPointerInTransit: i, onPointerExit: u } = Vu(a, o);
    return l.isPointerInTransitRef = i, u(() => {
      r();
    }), (d, c) => (h(), C(yl, D({ ref: s(n) }, s(t)), {
      default: y(() => [
        _(d.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), am = /* @__PURE__ */ x({
  __name: "TooltipContent",
  props: {
    forceMount: { type: Boolean },
    ariaLabel: {},
    asChild: { type: Boolean },
    as: {},
    side: { default: "top" },
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = co(), r = Z(n, o), { forwardRef: l } = M();
    return (i, u) => (h(), C(s(Ne), {
      present: i.forceMount || s(a).open.value
    }, {
      default: y(() => [
        (h(), C(Ve(s(a).disableHoverableContent.value ? yl : om), D({ ref: s(l) }, s(r)), {
          default: y(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), rm = /* @__PURE__ */ x({
  __name: "TooltipPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(qt), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), en = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, a] of t)
    n[o] = a;
  return n;
}, sm = {}, lm = { class: "h-full bg-background dark:text-white" };
function im(e, t) {
  return h(), N("div", lm, [
    _(e.$slots, "default")
  ]);
}
const L0 = /* @__PURE__ */ en(sm, [["render", im]]), um = {}, dm = { class: "sticky top-0 z-50 flex h-16 shrink-0 items-center gap-x-4 bg-background/60 px-4 backdrop-blur sm:gap-x-6 sm:px-6 lg:px-8" };
function cm(e, t) {
  return h(), N("header", dm, [
    _(e.$slots, "default")
  ]);
}
const z0 = /* @__PURE__ */ en(um, [["render", cm]]), pm = {}, fm = { class: "px-4 py-10 sm:px-6 lg:px-8 lg:pl-72" };
function mm(e, t) {
  return h(), N("main", fm, [
    _(e.$slots, "default")
  ]);
}
const N0 = /* @__PURE__ */ en(pm, [["render", mm]]), vm = {};
function gm(e, t) {
  return _(e.$slots, "default");
}
const j0 = /* @__PURE__ */ en(vm, [["render", gm]]), hm = {}, ym = { class: "hidden px-6 py-10 lg:fixed lg:inset-y-0 lg:top-16 lg:z-50 lg:flex lg:w-72 lg:flex-col" }, bm = { class: "gap-y-5 overflow-y-auto" };
function wm(e, t) {
  return h(), N("div", ym, [
    re("div", bm, [
      _(e.$slots, "default")
    ])
  ]);
}
const K0 = /* @__PURE__ */ en(hm, [["render", wm]]), xm = {};
function _m(e, t) {
  return _(e.$slots, "default");
}
const H0 = /* @__PURE__ */ en(xm, [["render", _m]]);
function Cm(e, t) {
  return h(), N("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    re("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    })
  ]);
}
function Bm(e, t) {
  return h(), N("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    re("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    })
  ]);
}
function Br(e, t) {
  return h(), N("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    re("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
    })
  ]);
}
function $m(e, t) {
  return h(), N("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    re("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
    })
  ]);
}
const Sm = {
  type: "button",
  class: "-m-2.5 p-2.5 lg:hidden"
}, U0 = /* @__PURE__ */ x({
  __name: "TwoColumnLayoutSidebarTrigger",
  setup(e) {
    return (t, n) => (h(), N("button", Sm, [
      n[0] || (n[0] = re("span", { class: "sr-only" }, "Open sidebar", -1)),
      R(s(Cm), {
        class: "h-6 w-6",
        "aria-hidden": "true"
      })
    ]));
  }
}), km = 3, Om = 1e6, at = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST"
};
let Po = 0;
function Em() {
  return Po = (Po + 1) % Number.MAX_VALUE, Po.toString();
}
const Io = /* @__PURE__ */ new Map();
function $r(e) {
  if (Io.has(e)) return;
  const t = setTimeout(() => {
    Io.delete(e), ln({
      type: at.REMOVE_TOAST,
      toastId: e
    });
  }, Om);
  Io.set(e, t);
}
const je = T({
  toasts: []
});
function ln(e) {
  switch (e.type) {
    case at.ADD_TOAST:
      je.value.toasts = [e.toast, ...je.value.toasts].slice(0, km);
      break;
    case at.UPDATE_TOAST:
      je.value.toasts = je.value.toasts.map(
        (t) => t.id === e.toast.id ? { ...t, ...e.toast } : t
      );
      break;
    case at.DISMISS_TOAST: {
      const { toastId: t } = e;
      t ? $r(t) : je.value.toasts.forEach((n) => {
        $r(n.id);
      }), je.value.toasts = je.value.toasts.map(
        (n) => n.id === t || t === void 0 ? {
          ...n,
          open: !1
        } : n
      );
      break;
    }
    case at.REMOVE_TOAST:
      e.toastId === void 0 ? je.value.toasts = [] : je.value.toasts = je.value.toasts.filter((t) => t.id !== e.toastId);
      break;
  }
}
function bl() {
  return {
    toasts: S(() => je.value.toasts),
    toast: Am,
    dismiss: (e) => ln({ type: at.DISMISS_TOAST, toastId: e })
  };
}
function Am(e) {
  const t = e.id ?? Em(), n = (a) => ln({
    type: at.UPDATE_TOAST,
    toast: { ...a, id: t }
  }), o = () => ln({ type: at.DISMISS_TOAST, toastId: t });
  return ln({
    type: at.ADD_TOAST,
    toast: {
      ...e,
      id: t,
      open: !0,
      onOpenChange: (a) => {
        a || o();
      }
    }
  }), {
    id: t,
    dismiss: o,
    update: n
  };
}
const Tm = { class: "flex items-start space-x-3" }, Dm = ["src", "alt"], Pm = { class: "grid gap-1" }, Im = { class: "font-bold" }, Mm = /* @__PURE__ */ x({
  __name: "Toaster",
  emits: ["click"],
  setup(e) {
    const { toasts: t } = bl();
    return (n, o) => (h(), C(s($v), null, {
      default: y(() => [
        (h(!0), N(be, null, vt(s(t), (a) => (h(), C(s(mv), D({
          key: a.id,
          ref_for: !0
        }, a, {
          class: "mt-1.5",
          onClick: (r) => n.$emit("click", a)
        }), {
          default: y(() => [
            re("div", Tm, [
              a.icon ? (h(), N(be, { key: 0 }, [
                typeof a.icon == "string" ? (h(), N("img", {
                  key: 0,
                  src: a.icon,
                  class: ne(["size-16 rounded-sm object-cover", a.iconClasses]),
                  alt: a.title
                }, null, 10, Dm)) : (h(), C(Ve(a.icon), {
                  key: 1,
                  class: ne(["size-6", a.iconClasses])
                }, null, 8, ["class"]))
              ], 64)) : ce("", !0),
              re("div", Pm, [
                a.title ? (h(), C(s(Bv), { key: 0 }, {
                  default: y(() => [
                    ke(Te(a.title), 1)
                  ]),
                  _: 2
                }, 1024)) : ce("", !0),
                a.description ? (h(), N(be, { key: 1 }, [
                  ni(a.description) ? (h(), C(s(Or), { key: 0 }, {
                    default: y(() => [
                      (h(), C(Ve(a.description)))
                    ]),
                    _: 2
                  }, 1024)) : typeof a.description == "object" ? (h(!0), N(be, { key: 1 }, vt(a.description, (r, l) => (h(), N("p", {
                    key: l,
                    class: "text-sm opacity-90"
                  }, [
                    a.objectFormat === "key" ? (h(), N(be, { key: 0 }, [
                      ke(Te(l), 1)
                    ], 64)) : a.objectFormat === "both" ? (h(), N(be, { key: 1 }, [
                      re("span", Im, Te(l), 1),
                      ke(": " + Te(r), 1)
                    ], 64)) : (h(), N(be, { key: 2 }, [
                      ke(Te(r), 1)
                    ], 64))
                  ]))), 128)) : (h(), C(s(Or), { key: 2 }, {
                    default: y(() => [
                      ke(Te(a.description), 1)
                    ]),
                    _: 2
                  }, 1024))
                ], 64)) : ce("", !0),
                R(s(Cv))
              ])
            ]),
            (h(), C(Ve(a.action)))
          ]),
          _: 2
        }, 1040, ["onClick"]))), 128)),
        R(s(vv))
      ]),
      _: 1
    }));
  }
});
function wl(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (t = 0; t < a; t++) e[t] && (n = wl(e[t])) && (o && (o += " "), o += n);
  } else for (n in e) e[n] && (o && (o += " "), o += n);
  return o;
}
function xl() {
  for (var e, t, n = 0, o = "", a = arguments.length; n < a; n++) (e = arguments[n]) && (t = wl(e)) && (o && (o += " "), o += t);
  return o;
}
const Na = "-", Rm = (e) => {
  const t = Vm(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (l) => {
      const i = l.split(Na);
      return i[0] === "" && i.length !== 1 && i.shift(), _l(i, t) || Fm(l);
    },
    getConflictingClassGroupIds: (l, i) => {
      const u = n[l] || [];
      return i && o[l] ? [...u, ...o[l]] : u;
    }
  };
}, _l = (e, t) => {
  var l;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], o = t.nextPart.get(n), a = o ? _l(e.slice(1), o) : void 0;
  if (a)
    return a;
  if (t.validators.length === 0)
    return;
  const r = e.join(Na);
  return (l = t.validators.find(({
    validator: i
  }) => i(r))) == null ? void 0 : l.classGroupId;
}, Sr = /^\[(.+)\]$/, Fm = (e) => {
  if (Sr.test(e)) {
    const t = Sr.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, Vm = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return zm(Object.entries(e.classGroups), n).forEach(([r, l]) => {
    Go(l, o, r, t);
  }), o;
}, Go = (e, t, n, o) => {
  e.forEach((a) => {
    if (typeof a == "string") {
      const r = a === "" ? t : kr(t, a);
      r.classGroupId = n;
      return;
    }
    if (typeof a == "function") {
      if (Lm(a)) {
        Go(a(o), t, n, o);
        return;
      }
      t.validators.push({
        validator: a,
        classGroupId: n
      });
      return;
    }
    Object.entries(a).forEach(([r, l]) => {
      Go(l, kr(t, r), n, o);
    });
  });
}, kr = (e, t) => {
  let n = e;
  return t.split(Na).forEach((o) => {
    n.nextPart.has(o) || n.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(o);
  }), n;
}, Lm = (e) => e.isThemeGetter, zm = (e, t) => t ? e.map(([n, o]) => {
  const a = o.map((r) => typeof r == "string" ? t + r : typeof r == "object" ? Object.fromEntries(Object.entries(r).map(([l, i]) => [t + l, i])) : r);
  return [n, a];
}) : e, Nm = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  const a = (r, l) => {
    n.set(r, l), t++, t > e && (t = 0, o = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(r) {
      let l = n.get(r);
      if (l !== void 0)
        return l;
      if ((l = o.get(r)) !== void 0)
        return a(r, l), l;
    },
    set(r, l) {
      n.has(r) ? n.set(r, l) : a(r, l);
    }
  };
}, Cl = "!", jm = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, o = t.length === 1, a = t[0], r = t.length, l = (i) => {
    const u = [];
    let d = 0, c = 0, p;
    for (let b = 0; b < i.length; b++) {
      let w = i[b];
      if (d === 0) {
        if (w === a && (o || i.slice(b, b + r) === t)) {
          u.push(i.slice(c, b)), c = b + r;
          continue;
        }
        if (w === "/") {
          p = b;
          continue;
        }
      }
      w === "[" ? d++ : w === "]" && d--;
    }
    const m = u.length === 0 ? i : i.substring(c), f = m.startsWith(Cl), v = f ? m.substring(1) : m, g = p && p > c ? p - c : void 0;
    return {
      modifiers: u,
      hasImportantModifier: f,
      baseClassName: v,
      maybePostfixModifierPosition: g
    };
  };
  return n ? (i) => n({
    className: i,
    parseClassName: l
  }) : l;
}, Km = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((o) => {
    o[0] === "[" ? (t.push(...n.sort(), o), n = []) : n.push(o);
  }), t.push(...n.sort()), t;
}, Hm = (e) => ({
  cache: Nm(e.cacheSize),
  parseClassName: jm(e),
  ...Rm(e)
}), Um = /\s+/, Wm = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: o,
    getConflictingClassGroupIds: a
  } = t, r = [], l = e.trim().split(Um);
  let i = "";
  for (let u = l.length - 1; u >= 0; u -= 1) {
    const d = l[u], {
      modifiers: c,
      hasImportantModifier: p,
      baseClassName: m,
      maybePostfixModifierPosition: f
    } = n(d);
    let v = !!f, g = o(v ? m.substring(0, f) : m);
    if (!g) {
      if (!v) {
        i = d + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (g = o(m), !g) {
        i = d + (i.length > 0 ? " " + i : i);
        continue;
      }
      v = !1;
    }
    const b = Km(c).join(":"), w = p ? b + Cl : b, B = w + g;
    if (r.includes(B))
      continue;
    r.push(B);
    const $ = a(g, v);
    for (let E = 0; E < $.length; ++E) {
      const k = $[E];
      r.push(w + k);
    }
    i = d + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function Gm() {
  let e = 0, t, n, o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Bl(t)) && (o && (o += " "), o += n);
  return o;
}
const Bl = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = Bl(e[o])) && (n && (n += " "), n += t);
  return n;
};
function qm(e, ...t) {
  let n, o, a, r = l;
  function l(u) {
    const d = t.reduce((c, p) => p(c), e());
    return n = Hm(d), o = n.cache.get, a = n.cache.set, r = i, i(u);
  }
  function i(u) {
    const d = o(u);
    if (d)
      return d;
    const c = Wm(u, n);
    return a(u, c), c;
  }
  return function() {
    return r(Gm.apply(null, arguments));
  };
}
const ve = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, $l = /^\[(?:([a-z-]+):)?(.+)\]$/i, Ym = /^\d+\/\d+$/, Xm = /* @__PURE__ */ new Set(["px", "full", "screen"]), Zm = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Qm = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Jm = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, ev = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, tv = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ot = (e) => Nt(e) || Xm.has(e) || Ym.test(e), ct = (e) => tn(e, "length", uv), Nt = (e) => !!e && !Number.isNaN(Number(e)), Mo = (e) => tn(e, "number", Nt), an = (e) => !!e && Number.isInteger(Number(e)), nv = (e) => e.endsWith("%") && Nt(e.slice(0, -1)), te = (e) => $l.test(e), pt = (e) => Zm.test(e), ov = /* @__PURE__ */ new Set(["length", "size", "percentage"]), av = (e) => tn(e, ov, Sl), rv = (e) => tn(e, "position", Sl), sv = /* @__PURE__ */ new Set(["image", "url"]), lv = (e) => tn(e, sv, cv), iv = (e) => tn(e, "", dv), rn = () => !0, tn = (e, t, n) => {
  const o = $l.exec(e);
  return o ? o[1] ? typeof t == "string" ? o[1] === t : t.has(o[1]) : n(o[2]) : !1;
}, uv = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Qm.test(e) && !Jm.test(e)
), Sl = () => !1, dv = (e) => ev.test(e), cv = (e) => tv.test(e), pv = () => {
  const e = ve("colors"), t = ve("spacing"), n = ve("blur"), o = ve("brightness"), a = ve("borderColor"), r = ve("borderRadius"), l = ve("borderSpacing"), i = ve("borderWidth"), u = ve("contrast"), d = ve("grayscale"), c = ve("hueRotate"), p = ve("invert"), m = ve("gap"), f = ve("gradientColorStops"), v = ve("gradientColorStopPositions"), g = ve("inset"), b = ve("margin"), w = ve("opacity"), B = ve("padding"), $ = ve("saturate"), E = ve("scale"), k = ve("sepia"), P = ve("skew"), O = ve("space"), I = ve("translate"), V = () => ["auto", "contain", "none"], A = () => ["auto", "hidden", "clip", "visible", "scroll"], L = () => ["auto", te, t], F = () => [te, t], q = () => ["", ot, ct], G = () => ["auto", Nt, te], Q = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], le = () => ["solid", "dashed", "dotted", "double", "none"], fe = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ue = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], j = () => ["", "0", te], Y = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], J = () => [Nt, te];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [rn],
      spacing: [ot, ct],
      blur: ["none", "", pt, te],
      brightness: J(),
      borderColor: [e],
      borderRadius: ["none", "", "full", pt, te],
      borderSpacing: F(),
      borderWidth: q(),
      contrast: J(),
      grayscale: j(),
      hueRotate: J(),
      invert: j(),
      gap: F(),
      gradientColorStops: [e],
      gradientColorStopPositions: [nv, ct],
      inset: L(),
      margin: L(),
      opacity: J(),
      padding: F(),
      saturate: J(),
      scale: J(),
      sepia: j(),
      skew: J(),
      space: F(),
      translate: F()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", te]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [pt]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": Y()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": Y()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...Q(), te]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: A()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": A()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": A()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: V()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": V()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": V()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [g]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [g]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [g]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [g]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [g]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [g]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [g]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [g]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [g]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", an, te]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: L()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", te]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: j()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: j()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", an, te]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [rn]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", an, te]
        }, te]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": G()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": G()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [rn]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [an, te]
        }, te]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": G()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": G()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", te]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", te]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [m]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [m]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [m]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...ue()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...ue(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...ue(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [B]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [B]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [B]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [B]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [B]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [B]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [B]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [B]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [B]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [b]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [b]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [b]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [b]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [b]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [b]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [b]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [b]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [b]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [O]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [O]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", te, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [te, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [te, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [pt]
        }, pt]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [te, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [te, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [te, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [te, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", pt, ct]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Mo]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [rn]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", te]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Nt, Mo]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", ot, te]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", te]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", te]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [w]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [w]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...le(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", ot, ct]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", ot, te]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: F()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", te]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", te]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [w]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...Q(), rv]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", av]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, lv]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [v]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [v]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [v]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [f]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [f]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [f]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [r]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [r]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [r]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [r]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [r]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [r]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [r]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [r]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [r]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [r]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [r]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [r]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [r]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [r]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [r]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [i]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [i]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [i]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [i]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [i]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [i]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [i]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [i]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [i]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [w]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...le(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [i]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [i]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [w]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: le()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [a]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [a]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [a]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [a]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [a]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [a]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [a]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [a]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [a]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [a]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...le()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ot, te]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [ot, ct]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: q()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [w]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [ot, ct]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", pt, iv]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [rn]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [w]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...fe(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": fe()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [n]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [o]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [u]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", pt, te]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [d]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [c]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [p]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [$]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [k]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [n]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [o]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [u]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [d]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [c]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [p]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [w]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [$]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [k]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [l]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [l]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [l]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", te]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: J()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", te]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: J()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", te]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [E]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [E]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [E]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [an, te]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [I]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [I]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [P]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [P]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", te]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", te]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": F()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": F()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": F()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": F()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": F()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": F()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": F()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": F()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": F()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": F()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": F()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": F()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": F()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": F()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": F()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": F()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": F()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": F()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", te]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [ot, ct, Mo]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
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
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
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
}, fv = /* @__PURE__ */ qm(pv);
function z(...e) {
  return fv(xl(e));
}
const mv = /* @__PURE__ */ x({
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
    const n = e, o = t, a = S(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = Z(a, o);
    return (l, i) => (h(), C(s(Gf), D(s(r), {
      class: s(z)(s(Sv)({ variant: l.variant }), n.class),
      "onUpdate:open": l.onOpenChange
    }), {
      default: y(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class", "onUpdate:open"]));
  }
}), vv = /* @__PURE__ */ x({
  __name: "ToastViewport",
  props: {
    hotkey: {},
    label: { type: [String, Function] },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(Yf), D(n.value, {
      class: s(z)(
        // overriding the defaults to position at the bottom on mobile viewport
        // 'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
        "fixed bottom-0 right-0 top-auto flex-col z-[100] flex max-h-screen w-full p-4 md:max-w-[420px]",
        t.class
      )
    }), null, 16, ["class"]));
  }
}), W0 = /* @__PURE__ */ x({
  __name: "ToastAction",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(qf), D(n.value, {
      class: s(z)(
        "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
        t.class
      )
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
});
function gv(e, t) {
  return h(), N("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    re("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z",
      fill: "currentColor"
    })
  ]);
}
function hv(e, t) {
  return h(), N("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    re("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z",
      fill: "currentColor"
    })
  ]);
}
function yv(e, t) {
  return h(), N("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    re("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z",
      fill: "currentColor"
    })
  ]);
}
function kl(e, t) {
  return h(), N("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    re("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",
      fill: "currentColor"
    })
  ]);
}
function Ol(e, t) {
  return h(), N("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    re("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
      fill: "currentColor"
    })
  ]);
}
function bv(e, t) {
  return h(), N("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    re("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z",
      fill: "currentColor"
    })
  ]);
}
function wv(e, t) {
  return h(), N("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    re("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M3.13523 8.84197C3.3241 9.04343 3.64052 9.05363 3.84197 8.86477L7.5 5.43536L11.158 8.86477C11.3595 9.05363 11.6759 9.04343 11.8648 8.84197C12.0536 8.64051 12.0434 8.32409 11.842 8.13523L7.84197 4.38523C7.64964 4.20492 7.35036 4.20492 7.15803 4.38523L3.15803 8.13523C2.95657 8.32409 2.94637 8.64051 3.13523 8.84197Z",
      fill: "currentColor"
    })
  ]);
}
function po(e, t) {
  return h(), N("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    re("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
      fill: "currentColor"
    })
  ]);
}
function xv(e, t) {
  return h(), N("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    re("path", {
      d: "M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z",
      fill: "currentColor"
    })
  ]);
}
function _v(e, t) {
  return h(), N("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    re("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z",
      fill: "currentColor"
    })
  ]);
}
const Cv = /* @__PURE__ */ x({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(gl), D(n.value, {
      class: s(z)(
        "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
        t.class
      )
    }), {
      default: y(() => [
        R(s(po), { class: "h-4 w-4" })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Bv = /* @__PURE__ */ x({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(Xf), D(n.value, {
      class: s(z)("text-sm font-semibold [&+div]:text-xs", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Or = /* @__PURE__ */ x({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(Zf), D({
      class: s(z)("text-sm opacity-90", t.class)
    }, n.value), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), $v = /* @__PURE__ */ x({
  __name: "ToastProvider",
  props: {
    label: {},
    duration: {},
    swipeDirection: {},
    swipeThreshold: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(Ff), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Er = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Ar = xl, Sn = (e, t) => (n) => {
  var o;
  if ((t == null ? void 0 : t.variants) == null) return Ar(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: a, defaultVariants: r } = t, l = Object.keys(a).map((d) => {
    const c = n == null ? void 0 : n[d], p = r == null ? void 0 : r[d];
    if (c === null) return null;
    const m = Er(c) || Er(p);
    return a[d][m];
  }), i = n && Object.entries(n).reduce((d, c) => {
    let [p, m] = c;
    return m === void 0 || (d[p] = m), d;
  }, {}), u = t == null || (o = t.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((d, c) => {
    let { class: p, className: m, ...f } = c;
    return Object.entries(f).every((v) => {
      let [g, b] = v;
      return Array.isArray(b) ? b.includes({
        ...r,
        ...i
      }[g]) : {
        ...r,
        ...i
      }[g] === b;
    }) ? [
      ...d,
      p,
      m
    ] : d;
  }, []);
  return Ar(e, l, u, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, Sv = Sn(
  // overriding the defaults to position at the bottom on mobile viewport
  // "group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-bottom-full",
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
), { toast: Mn } = bl();
function kv() {
  return {
    info: (e) => {
      Mn({
        icon: $m,
        iconClasses: "text-blue-400",
        title: "FYI",
        description: e
      });
    },
    success: (e) => {
      Mn({
        icon: Bm,
        iconClasses: "text-green-400",
        title: "Success",
        description: e
      });
    },
    warning: (e) => {
      Mn({
        icon: Br,
        iconClasses: "text-orange-400",
        title: "Warning",
        description: e
      });
    },
    error: (e, t = "value") => {
      Mn({
        icon: Br,
        iconClasses: "text-red-400",
        title: "Oh snap! Some errors were encountered.",
        description: e,
        objectFormat: t
      });
    }
  };
}
const G0 = /* @__PURE__ */ x({
  __name: "Flasher",
  props: {
    info: {},
    success: {},
    warning: {},
    errors: {},
    objectFormat: { default: "value" }
  },
  setup(e) {
    const t = e, {
      info: n,
      success: o,
      warning: a,
      error: r
    } = kv();
    return X(
      () => t.info,
      (l) => {
        l && n(t.info);
      },
      {
        immediate: !0
      }
    ), X(
      () => t.success,
      (l) => {
        l && o(t.success);
      },
      { immediate: !0 }
    ), X(
      () => t.warning,
      (l) => {
        l && a(t.warning);
      },
      { immediate: !0 }
    ), X(
      () => t.errors,
      () => {
        t.errors !== void 0 && Object.keys(t.errors).length > 0 && r(t.errors, t.objectFormat);
      }
    ), (l, i) => (h(), C(s(Mm)));
  }
}), Ov = { class: "flex items-center justify-between space-y-2" }, Ev = { class: "flex items-center space-x-2" }, q0 = /* @__PURE__ */ x({
  __name: "Heading",
  props: {
    as: { default: "h2" },
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), N("div", Ov, [
      (h(), C(Ve(n.as), {
        class: ne(s(z)("text-3xl font-bold tracking-tight", t.class))
      }, {
        default: y(() => [
          _(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["class"])),
      re("div", Ev, [
        _(n.$slots, "actions")
      ])
    ]));
  }
}), Av = /* @__PURE__ */ x({
  __name: "Accordion",
  props: {
    collapsible: { type: Boolean },
    disabled: { type: Boolean },
    dir: {},
    orientation: {},
    asChild: { type: Boolean },
    as: {},
    type: {},
    modelValue: {},
    defaultValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = Z(e, t);
    return (r, l) => (h(), C(s(ud), U(W(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Y0 = /* @__PURE__ */ x({
  __name: "Accord",
  props: {
    content: {},
    collapsible: { type: Boolean, default: !0 },
    disabled: { type: Boolean },
    dir: {},
    orientation: {},
    asChild: { type: Boolean },
    as: {},
    type: { default: "single" },
    modelValue: {},
    defaultValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = Z(e, t);
    return (r, l) => (h(), C(Av, U(W(s(a))), {
      default: y(() => [
        (h(!0), N(be, null, vt(r.content, (i, u) => (h(), C(s(Dv), {
          key: u,
          value: "item-" + u
        }, {
          default: y(() => [
            R(s(Pv), null, {
              default: y(() => [
                _(r.$slots, u + ".title", { item: i }, () => [
                  ke(Te(i.title), 1)
                ])
              ]),
              _: 2
            }, 1024),
            R(s(Tv), null, {
              default: y(() => [
                _(r.$slots, u + ".content", { item: i }, () => [
                  ke(Te(i.content), 1)
                ])
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1032, ["value"]))), 128))
      ]),
      _: 3
    }, 16));
  }
}), Tv = /* @__PURE__ */ x({
  __name: "AccordionContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(pd), D(n.value, { class: "accordion-content overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" }), {
      default: y(() => [
        re("div", {
          class: ne(s(z)("pb-4 pt-0", t.class))
        }, [
          _(o.$slots, "default")
        ], 2)
      ]),
      _: 3
    }, 16));
  }
}), Dv = /* @__PURE__ */ x({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = Se(n);
    return (a, r) => (h(), C(s(cd), D(s(o), {
      class: s(z)("border-b", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Pv = /* @__PURE__ */ x({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(fd), { class: "flex" }, {
      default: y(() => [
        R(s(md), D(n.value, {
          class: s(z)(
            "accordion-trigger flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
            t.class
          )
        }), {
          default: y(() => [
            _(o.$slots, "default"),
            _(o.$slots, "icon", {}, () => [
              R(s(Ol), { class: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), X0 = /* @__PURE__ */ x({
  __name: "Tip",
  props: {
    tooltip: {},
    indicator: { type: Boolean },
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    delayDuration: { default: 300 },
    disableHoverableContent: { type: Boolean },
    disableClosingTrigger: { type: Boolean },
    disabled: { type: Boolean },
    ignoreNonKeyboardFocus: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = Z(e, t);
    return (r, l) => (h(), C(s(Rv), null, {
      default: y(() => [
        R(s(Iv), U(W(s(a))), {
          default: y(() => [
            R(s(Fv), {
              class: ne(r.indicator ? "underline decoration-dotted underline-offset-4" : "")
            }, {
              default: y(() => [
                _(r.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]),
            R(s(Mv), U(W(r.$attrs)), {
              default: y(() => [
                _(r.$slots, "tooltip", {}, () => [
                  ke(Te(r.tooltip), 1)
                ])
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }));
  }
}), Iv = /* @__PURE__ */ x({
  __name: "Tooltip",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    delayDuration: {},
    disableHoverableContent: { type: Boolean },
    disableClosingTrigger: { type: Boolean },
    disabled: { type: Boolean },
    ignoreNonKeyboardFocus: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = Z(e, t);
    return (r, l) => (h(), C(s(tm), U(W(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Mv = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "TooltipContent",
  props: {
    forceMount: { type: Boolean },
    ariaLabel: {},
    asChild: { type: Boolean },
    as: {},
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
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = S(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = Z(a, o);
    return (l, i) => (h(), C(s(rm), null, {
      default: y(() => [
        R(s(am), D({ ...s(r), ...l.$attrs }, {
          class: s(z)(
            "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            n.class
          )
        }), {
          default: y(() => [
            _(l.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Rv = /* @__PURE__ */ x({
  __name: "TooltipProvider",
  props: {
    delayDuration: {},
    skipDelayDuration: {},
    disableHoverableContent: { type: Boolean },
    disableClosingTrigger: { type: Boolean },
    disabled: { type: Boolean },
    ignoreNonKeyboardFocus: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(Jf), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Fv = /* @__PURE__ */ x({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(nm), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Z0 = /* @__PURE__ */ x({
  __name: "AlertDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = Z(e, t);
    return (r, l) => (h(), C(s(zd), U(W(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Q0 = /* @__PURE__ */ x({
  __name: "AlertDialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(Nd), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), J0 = /* @__PURE__ */ x({
  __name: "AlertDialogContent",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = S(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = Z(a, o);
    return (l, i) => (h(), C(s(jd), null, {
      default: y(() => [
        R(s(Wd), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        R(s(Ud), D(s(r), {
          class: s(z)(
            "fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
            n.class
          )
        }), {
          default: y(() => [
            _(l.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), eh = /* @__PURE__ */ x({
  __name: "AlertDialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), N("div", {
      class: ne(s(z)("flex flex-col gap-y-2 text-center sm:text-left", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), th = /* @__PURE__ */ x({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(qd), D(n.value, {
      class: s(z)("text-lg font-semibold", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), nh = /* @__PURE__ */ x({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(Yd), D(n.value, {
      class: s(z)("text-sm text-muted-foreground", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), oh = /* @__PURE__ */ x({
  __name: "AlertDialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), N("div", {
      class: ne(s(z)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), El = /* @__PURE__ */ x({
  __name: "Button",
  props: {
    variant: {},
    size: {},
    class: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(K), {
      as: n.as,
      "as-child": n.asChild,
      class: ne(s(z)(s(ja)({ variant: n.variant, size: n.size }), t.class))
    }, {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), ja = Sn(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        xs: "h-7 rounded px-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), ah = /* @__PURE__ */ x({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(Xd), D(n.value, {
      class: s(z)(s(ja)(), t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), rh = /* @__PURE__ */ x({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(Gd), D(n.value, {
      class: s(z)(s(ja)({ variant: "outline" }), "mt-2 sm:mt-0", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), sh = /* @__PURE__ */ x({
  __name: "Avatar",
  props: {
    class: {},
    size: { default: "sm" },
    shape: { default: "circle" }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(Qd), {
      class: ne(s(z)(s(Vv)({ size: n.size, shape: n.shape }), t.class))
    }, {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), lh = /* @__PURE__ */ x({
  __name: "AvatarImage",
  props: {
    src: {},
    referrerPolicy: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(ec), D(t, { class: "h-full w-full object-cover" }), null, 16));
  }
}), ih = /* @__PURE__ */ x({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(tc), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Vv = Sn(
  "inline-flex shrink-0 select-none items-center justify-center overflow-hidden bg-secondary font-normal text-foreground",
  {
    variants: {
      size: {
        sm: "h-10 w-10 text-xs",
        base: "h-16 w-16 text-2xl",
        lg: "h-32 w-32 text-5xl"
      },
      shape: {
        circle: "rounded-full",
        square: "rounded-md"
      }
    }
  }
), uh = /* @__PURE__ */ x({
  __name: "Badge",
  props: {
    variant: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), N("div", {
      class: ne(s(z)(s(Lv)({ variant: n.variant }), t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), Lv = Sn(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), dh = /* @__PURE__ */ x({
  __name: "Card",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), N("div", {
      class: ne(s(z)("rounded-xl border bg-card text-card-foreground shadow", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), ch = /* @__PURE__ */ x({
  __name: "CardContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), N("div", {
      class: ne(s(z)("p-6 pt-0", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), ph = /* @__PURE__ */ x({
  __name: "CardDescription",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), N("p", {
      class: ne(s(z)("text-sm text-muted-foreground", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), fh = /* @__PURE__ */ x({
  __name: "CardFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), N("div", {
      class: ne(s(z)("flex items-center p-6 pt-0", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), mh = /* @__PURE__ */ x({
  __name: "CardHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), N("div", {
      class: ne(s(z)("flex flex-col gap-y-1.5 p-6", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), vh = /* @__PURE__ */ x({
  __name: "CardTitle",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), N("h3", {
      class: ne(s(z)("font-semibold leading-none tracking-tight", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
});
var Tr;
const zv = typeof window < "u", Nv = (e) => typeof e < "u", jv = (e) => typeof e == "function";
zv && ((Tr = window == null ? void 0 : window.navigator) != null && Tr.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Kv(e) {
  return e;
}
function Hv(e) {
  const t = Symbol("InjectionState");
  return [(...a) => {
    const r = e(...a);
    return yn(t, r), r;
  }, () => hn(t)];
}
function Uv(e) {
  return JSON.parse(JSON.stringify(e));
}
const Dr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Pr = "__vueuse_ssr_handlers__";
Dr[Pr] = Dr[Pr] || {};
var Ir;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Ir || (Ir = {}));
var Wv = Object.defineProperty, Mr = Object.getOwnPropertySymbols, Gv = Object.prototype.hasOwnProperty, qv = Object.prototype.propertyIsEnumerable, Rr = (e, t, n) => t in e ? Wv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Yv = (e, t) => {
  for (var n in t || (t = {}))
    Gv.call(t, n) && Rr(e, n, t[n]);
  if (Mr)
    for (var n of Mr(t))
      qv.call(t, n) && Rr(e, n, t[n]);
  return e;
};
const Xv = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
Yv({
  linear: Kv
}, Xv);
function Al(e, t, n, o = {}) {
  var a, r, l;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: c = !1,
    defaultValue: p
  } = o, m = Fe(), f = n || (m == null ? void 0 : m.emit) || ((a = m == null ? void 0 : m.$emit) == null ? void 0 : a.bind(m)) || ((l = (r = m == null ? void 0 : m.proxy) == null ? void 0 : r.$emit) == null ? void 0 : l.bind(m == null ? void 0 : m.proxy));
  let v = d;
  v = d || v || `update:${t.toString()}`;
  const g = (w) => i ? jv(i) ? i(w) : Uv(w) : w, b = () => Nv(e[t]) ? g(e[t]) : p;
  if (u) {
    const w = b(), B = T(w);
    return X(() => e[t], ($) => B.value = g($)), X(B, ($) => {
      ($ !== e[t] || c) && f(v, $);
    }, { deep: c }), B;
  } else
    return S({
      get() {
        return b();
      },
      set(w) {
        f(v, w);
      }
    });
}
function Zv(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Fr(e) {
  return Zv(e) || Array.isArray(e);
}
function Qv() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Ka(e, t) {
  const n = Object.keys(e), o = Object.keys(t);
  if (n.length !== o.length) return !1;
  const a = JSON.stringify(Object.keys(e.breakpoints || {})), r = JSON.stringify(Object.keys(t.breakpoints || {}));
  return a !== r ? !1 : n.every((l) => {
    const i = e[l], u = t[l];
    return typeof i == "function" ? `${i}` == `${u}` : !Fr(i) || !Fr(u) ? i === u : Ka(i, u);
  });
}
function Vr(e) {
  return e.concat().sort((t, n) => t.name > n.name ? 1 : -1).map((t) => t.options);
}
function Jv(e, t) {
  if (e.length !== t.length) return !1;
  const n = Vr(e), o = Vr(t);
  return n.every((a, r) => {
    const l = o[r];
    return Ka(a, l);
  });
}
function Ha(e) {
  return typeof e == "number";
}
function qo(e) {
  return typeof e == "string";
}
function fo(e) {
  return typeof e == "boolean";
}
function Lr(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function he(e) {
  return Math.abs(e);
}
function Ua(e) {
  return Math.sign(e);
}
function un(e, t) {
  return he(e - t);
}
function eg(e, t) {
  if (e === 0 || t === 0 || he(e) <= he(t)) return 0;
  const n = un(he(e), he(t));
  return he(n / e);
}
function tg(e) {
  return Math.round(e * 100) / 100;
}
function mn(e) {
  return vn(e).map(Number);
}
function Ue(e) {
  return e[kn(e)];
}
function kn(e) {
  return Math.max(0, e.length - 1);
}
function Wa(e, t) {
  return t === kn(e);
}
function zr(e, t = 0) {
  return Array.from(Array(e), (n, o) => t + o);
}
function vn(e) {
  return Object.keys(e);
}
function Tl(e, t) {
  return [e, t].reduce((n, o) => (vn(o).forEach((a) => {
    const r = n[a], l = o[a], i = Lr(r) && Lr(l);
    n[a] = i ? Tl(r, l) : l;
  }), n), {});
}
function Yo(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function ng(e, t) {
  const n = {
    start: o,
    center: a,
    end: r
  };
  function o() {
    return 0;
  }
  function a(u) {
    return r(u) / 2;
  }
  function r(u) {
    return t - u;
  }
  function l(u, d) {
    return qo(e) ? n[e](u) : e(t, u, d);
  }
  return {
    measure: l
  };
}
function gn() {
  let e = [];
  function t(a, r, l, i = {
    passive: !0
  }) {
    let u;
    if ("addEventListener" in a)
      a.addEventListener(r, l, i), u = () => a.removeEventListener(r, l, i);
    else {
      const d = a;
      d.addListener(l), u = () => d.removeListener(l);
    }
    return e.push(u), o;
  }
  function n() {
    e = e.filter((a) => a());
  }
  const o = {
    add: t,
    clear: n
  };
  return o;
}
function og(e, t, n, o) {
  const a = gn(), r = 1e3 / 60;
  let l = null, i = 0, u = 0;
  function d() {
    a.add(e, "visibilitychange", () => {
      e.hidden && v();
    });
  }
  function c() {
    f(), a.clear();
  }
  function p(b) {
    if (!u) return;
    l || (l = b, n(), n());
    const w = b - l;
    for (l = b, i += w; i >= r; )
      n(), i -= r;
    const B = i / r;
    o(B), u && (u = t.requestAnimationFrame(p));
  }
  function m() {
    u || (u = t.requestAnimationFrame(p));
  }
  function f() {
    t.cancelAnimationFrame(u), l = null, i = 0, u = 0;
  }
  function v() {
    l = null, i = 0;
  }
  return {
    init: d,
    destroy: c,
    start: m,
    stop: f,
    update: n,
    render: o
  };
}
function ag(e, t) {
  const n = t === "rtl", o = e === "y", a = o ? "y" : "x", r = o ? "x" : "y", l = !o && n ? -1 : 1, i = c(), u = p();
  function d(v) {
    const {
      height: g,
      width: b
    } = v;
    return o ? g : b;
  }
  function c() {
    return o ? "top" : n ? "right" : "left";
  }
  function p() {
    return o ? "bottom" : n ? "left" : "right";
  }
  function m(v) {
    return v * l;
  }
  return {
    scroll: a,
    cross: r,
    startEdge: i,
    endEdge: u,
    measureSize: d,
    direction: m
  };
}
function kt(e = 0, t = 0) {
  const n = he(e - t);
  function o(d) {
    return d < e;
  }
  function a(d) {
    return d > t;
  }
  function r(d) {
    return o(d) || a(d);
  }
  function l(d) {
    return r(d) ? o(d) ? e : t : d;
  }
  function i(d) {
    return n ? d - n * Math.ceil((d - t) / n) : d;
  }
  return {
    length: n,
    max: t,
    min: e,
    constrain: l,
    reachedAny: r,
    reachedMax: a,
    reachedMin: o,
    removeOffset: i
  };
}
function Dl(e, t, n) {
  const {
    constrain: o
  } = kt(0, e), a = e + 1;
  let r = l(t);
  function l(m) {
    return n ? he((a + m) % a) : o(m);
  }
  function i() {
    return r;
  }
  function u(m) {
    return r = l(m), p;
  }
  function d(m) {
    return c().set(i() + m);
  }
  function c() {
    return Dl(e, i(), n);
  }
  const p = {
    get: i,
    set: u,
    add: d,
    clone: c
  };
  return p;
}
function rg(e, t, n, o, a, r, l, i, u, d, c, p, m, f, v, g, b, w, B) {
  const {
    cross: $,
    direction: E
  } = e, k = ["INPUT", "SELECT", "TEXTAREA"], P = {
    passive: !1
  }, O = gn(), I = gn(), V = kt(50, 225).constrain(f.measure(20)), A = {
    mouse: 300,
    touch: 400
  }, L = {
    mouse: 500,
    touch: 600
  }, F = v ? 43 : 25;
  let q = !1, G = 0, Q = 0, le = !1, fe = !1, ue = !1, j = !1;
  function Y(H) {
    if (!B) return;
    function ie(Ae) {
      (fo(B) || B(H, Ae)) && wt(Ae);
    }
    const _e = t;
    O.add(_e, "dragstart", (Ae) => Ae.preventDefault(), P).add(_e, "touchmove", () => {
    }, P).add(_e, "touchend", () => {
    }).add(_e, "touchstart", ie).add(_e, "mousedown", ie).add(_e, "touchcancel", me).add(_e, "contextmenu", me).add(_e, "click", Ee, !0);
  }
  function J() {
    O.clear(), I.clear();
  }
  function De() {
    const H = j ? n : t;
    I.add(H, "touchmove", ye, P).add(H, "touchend", me).add(H, "mousemove", ye, P).add(H, "mouseup", me);
  }
  function Ie(H) {
    const ie = H.nodeName || "";
    return k.includes(ie);
  }
  function Pe() {
    return (v ? L : A)[j ? "mouse" : "touch"];
  }
  function qe(H, ie) {
    const _e = p.add(Ua(H) * -1), Ae = c.byDistance(H, !v).distance;
    return v || he(H) < V ? Ae : b && ie ? Ae * 0.5 : c.byIndex(_e.get(), 0).distance;
  }
  function wt(H) {
    const ie = Yo(H, o);
    j = ie, ue = v && ie && !H.buttons && q, q = un(a.get(), l.get()) >= 2, !(ie && H.button !== 0) && (Ie(H.target) || (le = !0, r.pointerDown(H), d.useFriction(0).useDuration(0), a.set(l), De(), G = r.readPoint(H), Q = r.readPoint(H, $), m.emit("pointerDown")));
  }
  function ye(H) {
    if (!Yo(H, o) && H.touches.length >= 2) return me(H);
    const _e = r.readPoint(H), Ae = r.readPoint(H, $), Ye = un(_e, G), tt = un(Ae, Q);
    if (!fe && !j && (!H.cancelable || (fe = Ye > tt, !fe)))
      return me(H);
    const xt = r.pointerMove(H);
    Ye > g && (ue = !0), d.useFriction(0.3).useDuration(0.75), i.start(), a.add(E(xt)), H.preventDefault();
  }
  function me(H) {
    const _e = c.byDistance(0, !1).index !== p.get(), Ae = r.pointerUp(H) * Pe(), Ye = qe(E(Ae), _e), tt = eg(Ae, Ye), xt = F - 10 * tt, ut = w + tt / 50;
    fe = !1, le = !1, I.clear(), d.useDuration(xt).useFriction(ut), u.distance(Ye, !v), j = !1, m.emit("pointerUp");
  }
  function Ee(H) {
    ue && (H.stopPropagation(), H.preventDefault(), ue = !1);
  }
  function xe() {
    return le;
  }
  return {
    init: Y,
    destroy: J,
    pointerDown: xe
  };
}
function sg(e, t) {
  let o, a;
  function r(p) {
    return p.timeStamp;
  }
  function l(p, m) {
    const v = `client${(m || e.scroll) === "x" ? "X" : "Y"}`;
    return (Yo(p, t) ? p : p.touches[0])[v];
  }
  function i(p) {
    return o = p, a = p, l(p);
  }
  function u(p) {
    const m = l(p) - l(a), f = r(p) - r(o) > 170;
    return a = p, f && (o = p), m;
  }
  function d(p) {
    if (!o || !a) return 0;
    const m = l(a) - l(o), f = r(p) - r(o), v = r(p) - r(a) > 170, g = m / f;
    return f && !v && he(g) > 0.1 ? g : 0;
  }
  return {
    pointerDown: i,
    pointerMove: u,
    pointerUp: d,
    readPoint: l
  };
}
function lg() {
  function e(n) {
    const {
      offsetTop: o,
      offsetLeft: a,
      offsetWidth: r,
      offsetHeight: l
    } = n;
    return {
      top: o,
      right: a + r,
      bottom: o + l,
      left: a,
      width: r,
      height: l
    };
  }
  return {
    measure: e
  };
}
function ig(e) {
  function t(o) {
    return e * (o / 100);
  }
  return {
    measure: t
  };
}
function ug(e, t, n, o, a, r, l) {
  const i = [e].concat(o);
  let u, d, c = [], p = !1;
  function m(b) {
    return a.measureSize(l.measure(b));
  }
  function f(b) {
    if (!r) return;
    d = m(e), c = o.map(m);
    function w(B) {
      for (const $ of B) {
        if (p) return;
        const E = $.target === e, k = o.indexOf($.target), P = E ? d : c[k], O = m(E ? e : o[k]);
        if (he(O - P) >= 0.5) {
          b.reInit(), t.emit("resize");
          break;
        }
      }
    }
    u = new ResizeObserver((B) => {
      (fo(r) || r(b, B)) && w(B);
    }), n.requestAnimationFrame(() => {
      i.forEach((B) => u.observe(B));
    });
  }
  function v() {
    p = !0, u && u.disconnect();
  }
  return {
    init: f,
    destroy: v
  };
}
function dg(e, t, n, o, a, r) {
  let l = 0, i = 0, u = a, d = r, c = e.get(), p = 0;
  function m() {
    const P = o.get() - e.get(), O = !u;
    let I = 0;
    return O ? (l = 0, n.set(o), e.set(o), I = P) : (n.set(e), l += P / u, l *= d, c += l, e.add(l), I = c - p), i = Ua(I), p = c, k;
  }
  function f() {
    const P = o.get() - t.get();
    return he(P) < 1e-3;
  }
  function v() {
    return u;
  }
  function g() {
    return i;
  }
  function b() {
    return l;
  }
  function w() {
    return $(a);
  }
  function B() {
    return E(r);
  }
  function $(P) {
    return u = P, k;
  }
  function E(P) {
    return d = P, k;
  }
  const k = {
    direction: g,
    duration: v,
    velocity: b,
    seek: m,
    settled: f,
    useBaseFriction: B,
    useBaseDuration: w,
    useFriction: E,
    useDuration: $
  };
  return k;
}
function cg(e, t, n, o, a) {
  const r = a.measure(10), l = a.measure(50), i = kt(0.1, 0.99);
  let u = !1;
  function d() {
    return !(u || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
  }
  function c(f) {
    if (!d()) return;
    const v = e.reachedMin(t.get()) ? "min" : "max", g = he(e[v] - t.get()), b = n.get() - t.get(), w = i.constrain(g / l);
    n.subtract(b * w), !f && he(b) < r && (n.set(e.constrain(n.get())), o.useDuration(25).useBaseFriction());
  }
  function p(f) {
    u = !f;
  }
  return {
    shouldConstrain: d,
    constrain: c,
    toggleActive: p
  };
}
function pg(e, t, n, o, a) {
  const r = kt(-t + e, 0), l = p(), i = c(), u = m();
  function d(v, g) {
    return un(v, g) <= 1;
  }
  function c() {
    const v = l[0], g = Ue(l), b = l.lastIndexOf(v), w = l.indexOf(g) + 1;
    return kt(b, w);
  }
  function p() {
    return n.map((v, g) => {
      const {
        min: b,
        max: w
      } = r, B = r.constrain(v), $ = !g, E = Wa(n, g);
      return $ ? w : E || d(b, B) ? b : d(w, B) ? w : B;
    }).map((v) => parseFloat(v.toFixed(3)));
  }
  function m() {
    if (t <= e + a) return [r.max];
    if (o === "keepSnaps") return l;
    const {
      min: v,
      max: g
    } = i;
    return l.slice(v, g);
  }
  return {
    snapsContained: u,
    scrollContainLimit: i
  };
}
function fg(e, t, n) {
  const o = t[0], a = n ? o - e : Ue(t);
  return {
    limit: kt(a, o)
  };
}
function mg(e, t, n, o) {
  const r = t.min + 0.1, l = t.max + 0.1, {
    reachedMin: i,
    reachedMax: u
  } = kt(r, l);
  function d(m) {
    return m === 1 ? u(n.get()) : m === -1 ? i(n.get()) : !1;
  }
  function c(m) {
    if (!d(m)) return;
    const f = e * (m * -1);
    o.forEach((v) => v.add(f));
  }
  return {
    loop: c
  };
}
function vg(e) {
  const {
    max: t,
    length: n
  } = e;
  function o(r) {
    const l = r - t;
    return n ? l / -n : 0;
  }
  return {
    get: o
  };
}
function gg(e, t, n, o, a) {
  const {
    startEdge: r,
    endEdge: l
  } = e, {
    groupSlides: i
  } = a, u = p().map(t.measure), d = m(), c = f();
  function p() {
    return i(o).map((g) => Ue(g)[l] - g[0][r]).map(he);
  }
  function m() {
    return o.map((g) => n[r] - g[r]).map((g) => -he(g));
  }
  function f() {
    return i(d).map((g) => g[0]).map((g, b) => g + u[b]);
  }
  return {
    snaps: d,
    snapsAligned: c
  };
}
function hg(e, t, n, o, a, r) {
  const {
    groupSlides: l
  } = a, {
    min: i,
    max: u
  } = o, d = c();
  function c() {
    const m = l(r), f = !e || t === "keepSnaps";
    return n.length === 1 ? [r] : f ? m : m.slice(i, u).map((v, g, b) => {
      const w = !g, B = Wa(b, g);
      if (w) {
        const $ = Ue(b[0]) + 1;
        return zr($);
      }
      if (B) {
        const $ = kn(r) - Ue(b)[0] + 1;
        return zr($, Ue(b)[0]);
      }
      return v;
    });
  }
  return {
    slideRegistry: d
  };
}
function yg(e, t, n, o, a) {
  const {
    reachedAny: r,
    removeOffset: l,
    constrain: i
  } = o;
  function u(v) {
    return v.concat().sort((g, b) => he(g) - he(b))[0];
  }
  function d(v) {
    const g = e ? l(v) : i(v), b = t.map((B, $) => ({
      diff: c(B - g, 0),
      index: $
    })).sort((B, $) => he(B.diff) - he($.diff)), {
      index: w
    } = b[0];
    return {
      index: w,
      distance: g
    };
  }
  function c(v, g) {
    const b = [v, v + n, v - n];
    if (!e) return v;
    if (!g) return u(b);
    const w = b.filter((B) => Ua(B) === g);
    return w.length ? u(w) : Ue(b) - n;
  }
  function p(v, g) {
    const b = t[v] - a.get(), w = c(b, g);
    return {
      index: v,
      distance: w
    };
  }
  function m(v, g) {
    const b = a.get() + v, {
      index: w,
      distance: B
    } = d(b), $ = !e && r(b);
    if (!g || $) return {
      index: w,
      distance: v
    };
    const E = t[w] - B, k = v + c(E, 0);
    return {
      index: w,
      distance: k
    };
  }
  return {
    byDistance: m,
    byIndex: p,
    shortcut: c
  };
}
function bg(e, t, n, o, a, r, l) {
  function i(p) {
    const m = p.distance, f = p.index !== t.get();
    r.add(m), m && (o.duration() ? e.start() : (e.update(), e.render(1), e.update())), f && (n.set(t.get()), t.set(p.index), l.emit("select"));
  }
  function u(p, m) {
    const f = a.byDistance(p, m);
    i(f);
  }
  function d(p, m) {
    const f = t.clone().set(p), v = a.byIndex(f.get(), m);
    i(v);
  }
  return {
    distance: u,
    index: d
  };
}
function wg(e, t, n, o, a, r, l, i) {
  const u = {
    passive: !0,
    capture: !0
  };
  let d = 0;
  function c(f) {
    if (!i) return;
    function v(g) {
      if ((/* @__PURE__ */ new Date()).getTime() - d > 10) return;
      l.emit("slideFocusStart"), e.scrollLeft = 0;
      const B = n.findIndex(($) => $.includes(g));
      Ha(B) && (a.useDuration(0), o.index(B, 0), l.emit("slideFocus"));
    }
    r.add(document, "keydown", p, !1), t.forEach((g, b) => {
      r.add(g, "focus", (w) => {
        (fo(i) || i(f, w)) && v(b);
      }, u);
    });
  }
  function p(f) {
    f.code === "Tab" && (d = (/* @__PURE__ */ new Date()).getTime());
  }
  return {
    init: c
  };
}
function sn(e) {
  let t = e;
  function n() {
    return t;
  }
  function o(u) {
    t = l(u);
  }
  function a(u) {
    t += l(u);
  }
  function r(u) {
    t -= l(u);
  }
  function l(u) {
    return Ha(u) ? u : u.get();
  }
  return {
    get: n,
    set: o,
    add: a,
    subtract: r
  };
}
function Pl(e, t) {
  const n = e.scroll === "x" ? l : i, o = t.style;
  let a = null, r = !1;
  function l(m) {
    return `translate3d(${m}px,0px,0px)`;
  }
  function i(m) {
    return `translate3d(0px,${m}px,0px)`;
  }
  function u(m) {
    if (r) return;
    const f = tg(e.direction(m));
    f !== a && (o.transform = n(f), a = f);
  }
  function d(m) {
    r = !m;
  }
  function c() {
    r || (o.transform = "", t.getAttribute("style") || t.removeAttribute("style"));
  }
  return {
    clear: c,
    to: u,
    toggleActive: d
  };
}
function xg(e, t, n, o, a, r, l, i, u) {
  const c = mn(a), p = mn(a).reverse(), m = w().concat(B());
  function f(O, I) {
    return O.reduce((V, A) => V - a[A], I);
  }
  function v(O, I) {
    return O.reduce((V, A) => f(V, I) > 0 ? V.concat([A]) : V, []);
  }
  function g(O) {
    return r.map((I, V) => ({
      start: I - o[V] + 0.5 + O,
      end: I + t - 0.5 + O
    }));
  }
  function b(O, I, V) {
    const A = g(I);
    return O.map((L) => {
      const F = V ? 0 : -n, q = V ? n : 0, G = V ? "end" : "start", Q = A[L][G];
      return {
        index: L,
        loopPoint: Q,
        slideLocation: sn(-1),
        translate: Pl(e, u[L]),
        target: () => i.get() > Q ? F : q
      };
    });
  }
  function w() {
    const O = l[0], I = v(p, O);
    return b(I, n, !1);
  }
  function B() {
    const O = t - l[0] - 1, I = v(c, O);
    return b(I, -n, !0);
  }
  function $() {
    return m.every(({
      index: O
    }) => {
      const I = c.filter((V) => V !== O);
      return f(I, t) <= 0.1;
    });
  }
  function E() {
    m.forEach((O) => {
      const {
        target: I,
        translate: V,
        slideLocation: A
      } = O, L = I();
      L !== A.get() && (V.to(L), A.set(L));
    });
  }
  function k() {
    m.forEach((O) => O.translate.clear());
  }
  return {
    canLoop: $,
    clear: k,
    loop: E,
    loopPoints: m
  };
}
function _g(e, t, n) {
  let o, a = !1;
  function r(u) {
    if (!n) return;
    function d(c) {
      for (const p of c)
        if (p.type === "childList") {
          u.reInit(), t.emit("slidesChanged");
          break;
        }
    }
    o = new MutationObserver((c) => {
      a || (fo(n) || n(u, c)) && d(c);
    }), o.observe(e, {
      childList: !0
    });
  }
  function l() {
    o && o.disconnect(), a = !0;
  }
  return {
    init: r,
    destroy: l
  };
}
function Cg(e, t, n, o) {
  const a = {};
  let r = null, l = null, i, u = !1;
  function d() {
    i = new IntersectionObserver((v) => {
      u || (v.forEach((g) => {
        const b = t.indexOf(g.target);
        a[b] = g;
      }), r = null, l = null, n.emit("slidesInView"));
    }, {
      root: e.parentElement,
      threshold: o
    }), t.forEach((v) => i.observe(v));
  }
  function c() {
    i && i.disconnect(), u = !0;
  }
  function p(v) {
    return vn(a).reduce((g, b) => {
      const w = parseInt(b), {
        isIntersecting: B
      } = a[w];
      return (v && B || !v && !B) && g.push(w), g;
    }, []);
  }
  function m(v = !0) {
    if (v && r) return r;
    if (!v && l) return l;
    const g = p(v);
    return v && (r = g), v || (l = g), g;
  }
  return {
    init: d,
    destroy: c,
    get: m
  };
}
function Bg(e, t, n, o, a, r) {
  const {
    measureSize: l,
    startEdge: i,
    endEdge: u
  } = e, d = n[0] && a, c = v(), p = g(), m = n.map(l), f = b();
  function v() {
    if (!d) return 0;
    const B = n[0];
    return he(t[i] - B[i]);
  }
  function g() {
    if (!d) return 0;
    const B = r.getComputedStyle(Ue(o));
    return parseFloat(B.getPropertyValue(`margin-${u}`));
  }
  function b() {
    return n.map((B, $, E) => {
      const k = !$, P = Wa(E, $);
      return k ? m[$] + c : P ? m[$] + p : E[$ + 1][i] - B[i];
    }).map(he);
  }
  return {
    slideSizes: m,
    slideSizesWithGaps: f,
    startGap: c,
    endGap: p
  };
}
function $g(e, t, n, o, a, r, l, i, u) {
  const {
    startEdge: d,
    endEdge: c,
    direction: p
  } = e, m = Ha(n);
  function f(w, B) {
    return mn(w).filter(($) => $ % B === 0).map(($) => w.slice($, $ + B));
  }
  function v(w) {
    return w.length ? mn(w).reduce((B, $, E) => {
      const k = Ue(B) || 0, P = k === 0, O = $ === kn(w), I = a[d] - r[k][d], V = a[d] - r[$][c], A = !o && P ? p(l) : 0, L = !o && O ? p(i) : 0, F = he(V - L - (I + A));
      return E && F > t + u && B.push($), O && B.push(w.length), B;
    }, []).map((B, $, E) => {
      const k = Math.max(E[$ - 1] || 0);
      return w.slice(k, B);
    }) : [];
  }
  function g(w) {
    return m ? f(w, n) : v(w);
  }
  return {
    groupSlides: g
  };
}
function Sg(e, t, n, o, a, r, l) {
  const {
    align: i,
    axis: u,
    direction: d,
    startIndex: c,
    loop: p,
    duration: m,
    dragFree: f,
    dragThreshold: v,
    inViewThreshold: g,
    slidesToScroll: b,
    skipSnaps: w,
    containScroll: B,
    watchResize: $,
    watchSlides: E,
    watchDrag: k,
    watchFocus: P
  } = r, O = 2, I = lg(), V = I.measure(t), A = n.map(I.measure), L = ag(u, d), F = L.measureSize(V), q = ig(F), G = ng(i, F), Q = !p && !!B, le = p || !!B, {
    slideSizes: fe,
    slideSizesWithGaps: ue,
    startGap: j,
    endGap: Y
  } = Bg(L, V, A, n, le, a), J = $g(L, F, b, p, V, A, j, Y, O), {
    snaps: De,
    snapsAligned: Ie
  } = gg(L, G, V, A, J), Pe = -Ue(De) + Ue(ue), {
    snapsContained: qe,
    scrollContainLimit: wt
  } = pg(F, Pe, Ie, B, O), ye = Q ? qe : Ie, {
    limit: me
  } = fg(Pe, ye, p), Ee = Dl(kn(ye), c, p), xe = Ee.clone(), de = mn(n), H = ({
    dragHandler: Mt,
    scrollBody: xo,
    scrollBounds: _o,
    options: {
      loop: On
    }
  }) => {
    On || _o.constrain(Mt.pointerDown()), xo.seek();
  }, ie = ({
    scrollBody: Mt,
    translate: xo,
    location: _o,
    offsetLocation: On,
    previousLocation: Ll,
    scrollLooper: zl,
    slideLooper: Nl,
    dragHandler: jl,
    animation: Kl,
    eventHandler: Qa,
    scrollBounds: Hl,
    options: {
      loop: Ja
    }
  }, er) => {
    const tr = Mt.settled(), Ul = !Hl.shouldConstrain(), nr = Ja ? tr : tr && Ul, or = nr && !jl.pointerDown();
    or && Kl.stop();
    const Wl = _o.get() * er + Ll.get() * (1 - er);
    On.set(Wl), Ja && (zl.loop(Mt.direction()), Nl.loop()), xo.to(On.get()), or && Qa.emit("settle"), nr || Qa.emit("scroll");
  }, _e = og(o, a, () => H(wo), (Mt) => ie(wo, Mt)), Ae = 0.68, Ye = ye[Ee.get()], tt = sn(Ye), xt = sn(Ye), ut = sn(Ye), _t = sn(Ye), nn = dg(tt, ut, xt, _t, m, Ae), yo = yg(p, ye, Pe, me, _t), bo = bg(_e, Ee, xe, nn, yo, _t, l), Ya = vg(me), Xa = gn(), Fl = Cg(t, n, l, g), {
    slideRegistry: Za
  } = hg(Q, B, ye, wt, J, de), Vl = wg(e, n, Za, bo, nn, Xa, l, P), wo = {
    ownerDocument: o,
    ownerWindow: a,
    eventHandler: l,
    containerRect: V,
    slideRects: A,
    animation: _e,
    axis: L,
    dragHandler: rg(L, e, o, a, _t, sg(L, a), tt, _e, bo, nn, yo, Ee, l, q, f, v, w, Ae, k),
    eventStore: Xa,
    percentOfView: q,
    index: Ee,
    indexPrevious: xe,
    limit: me,
    location: tt,
    offsetLocation: ut,
    previousLocation: xt,
    options: r,
    resizeHandler: ug(t, l, a, n, L, $, I),
    scrollBody: nn,
    scrollBounds: cg(me, ut, _t, nn, q),
    scrollLooper: mg(Pe, me, ut, [tt, ut, xt, _t]),
    scrollProgress: Ya,
    scrollSnapList: ye.map(Ya.get),
    scrollSnaps: ye,
    scrollTarget: yo,
    scrollTo: bo,
    slideLooper: xg(L, F, Pe, fe, ue, De, ye, ut, n),
    slideFocus: Vl,
    slidesHandler: _g(t, l, E),
    slidesInView: Fl,
    slideIndexes: de,
    slideRegistry: Za,
    slidesToScroll: J,
    target: _t,
    translate: Pl(L, t)
  };
  return wo;
}
function kg() {
  let e = {}, t;
  function n(d) {
    t = d;
  }
  function o(d) {
    return e[d] || [];
  }
  function a(d) {
    return o(d).forEach((c) => c(t, d)), u;
  }
  function r(d, c) {
    return e[d] = o(d).concat([c]), u;
  }
  function l(d, c) {
    return e[d] = o(d).filter((p) => p !== c), u;
  }
  function i() {
    e = {};
  }
  const u = {
    init: n,
    emit: a,
    off: l,
    on: r,
    clear: i
  };
  return u;
}
const Og = {
  align: "center",
  axis: "x",
  container: null,
  slides: null,
  containScroll: "trimSnaps",
  direction: "ltr",
  slidesToScroll: 1,
  inViewThreshold: 0,
  breakpoints: {},
  dragFree: !1,
  dragThreshold: 10,
  loop: !1,
  skipSnaps: !1,
  duration: 25,
  startIndex: 0,
  active: !0,
  watchDrag: !0,
  watchResize: !0,
  watchSlides: !0,
  watchFocus: !0
};
function Eg(e) {
  function t(r, l) {
    return Tl(r, l || {});
  }
  function n(r) {
    const l = r.breakpoints || {}, i = vn(l).filter((u) => e.matchMedia(u).matches).map((u) => l[u]).reduce((u, d) => t(u, d), {});
    return t(r, i);
  }
  function o(r) {
    return r.map((l) => vn(l.breakpoints || {})).reduce((l, i) => l.concat(i), []).map(e.matchMedia);
  }
  return {
    mergeOptions: t,
    optionsAtMedia: n,
    optionsMediaQueries: o
  };
}
function Ag(e) {
  let t = [];
  function n(r, l) {
    return t = l.filter(({
      options: i
    }) => e.optionsAtMedia(i).active !== !1), t.forEach((i) => i.init(r, e)), l.reduce((i, u) => Object.assign(i, {
      [u.name]: u
    }), {});
  }
  function o() {
    t = t.filter((r) => r.destroy());
  }
  return {
    init: n,
    destroy: o
  };
}
function Wn(e, t, n) {
  const o = e.ownerDocument, a = o.defaultView, r = Eg(a), l = Ag(r), i = gn(), u = kg(), {
    mergeOptions: d,
    optionsAtMedia: c,
    optionsMediaQueries: p
  } = r, {
    on: m,
    off: f,
    emit: v
  } = u, g = L;
  let b = !1, w, B = d(Og, Wn.globalOptions), $ = d(B), E = [], k, P, O;
  function I() {
    const {
      container: de,
      slides: H
    } = $;
    P = (qo(de) ? e.querySelector(de) : de) || e.children[0];
    const _e = qo(H) ? P.querySelectorAll(H) : H;
    O = [].slice.call(_e || P.children);
  }
  function V(de) {
    const H = Sg(e, P, O, o, a, de, u);
    if (de.loop && !H.slideLooper.canLoop()) {
      const ie = Object.assign({}, de, {
        loop: !1
      });
      return V(ie);
    }
    return H;
  }
  function A(de, H) {
    b || (B = d(B, de), $ = c(B), E = H || E, I(), w = V($), p([B, ...E.map(({
      options: ie
    }) => ie)]).forEach((ie) => i.add(ie, "change", L)), $.active && (w.translate.to(w.location.get()), w.animation.init(), w.slidesInView.init(), w.slideFocus.init(xe), w.eventHandler.init(xe), w.resizeHandler.init(xe), w.slidesHandler.init(xe), w.options.loop && w.slideLooper.loop(), P.offsetParent && O.length && w.dragHandler.init(xe), k = l.init(xe, E)));
  }
  function L(de, H) {
    const ie = J();
    F(), A(d({
      startIndex: ie
    }, de), H), u.emit("reInit");
  }
  function F() {
    w.dragHandler.destroy(), w.eventStore.clear(), w.translate.clear(), w.slideLooper.clear(), w.resizeHandler.destroy(), w.slidesHandler.destroy(), w.slidesInView.destroy(), w.animation.destroy(), l.destroy(), i.clear();
  }
  function q() {
    b || (b = !0, i.clear(), F(), u.emit("destroy"), u.clear());
  }
  function G(de, H, ie) {
    !$.active || b || (w.scrollBody.useBaseFriction().useDuration(H === !0 ? 0 : $.duration), w.scrollTo.index(de, ie || 0));
  }
  function Q(de) {
    const H = w.index.add(1).get();
    G(H, de, -1);
  }
  function le(de) {
    const H = w.index.add(-1).get();
    G(H, de, 1);
  }
  function fe() {
    return w.index.add(1).get() !== J();
  }
  function ue() {
    return w.index.add(-1).get() !== J();
  }
  function j() {
    return w.scrollSnapList;
  }
  function Y() {
    return w.scrollProgress.get(w.offsetLocation.get());
  }
  function J() {
    return w.index.get();
  }
  function De() {
    return w.indexPrevious.get();
  }
  function Ie() {
    return w.slidesInView.get();
  }
  function Pe() {
    return w.slidesInView.get(!1);
  }
  function qe() {
    return k;
  }
  function wt() {
    return w;
  }
  function ye() {
    return e;
  }
  function me() {
    return P;
  }
  function Ee() {
    return O;
  }
  const xe = {
    canScrollNext: fe,
    canScrollPrev: ue,
    containerNode: me,
    internalEngine: wt,
    destroy: q,
    off: f,
    on: m,
    emit: v,
    plugins: qe,
    previousScrollSnap: De,
    reInit: g,
    rootNode: ye,
    scrollNext: Q,
    scrollPrev: le,
    scrollProgress: Y,
    scrollSnapList: j,
    scrollTo: G,
    selectedScrollSnap: J,
    slideNodes: Ee,
    slidesInView: Ie,
    slidesNotInView: Pe
  };
  return A(t, n), setTimeout(() => u.emit("init"), 0), xe;
}
Wn.globalOptions = void 0;
function Ga(e = {}, t = []) {
  const n = $t(e), o = $t(t);
  let a = n ? e.value : e, r = o ? t.value : t;
  const l = zn(), i = zn();
  function u() {
    i.value && i.value.reInit(a, r);
  }
  return se(() => {
    !Qv() || !l.value || (Wn.globalOptions = Ga.globalOptions, i.value = Wn(l.value, a, r));
  }), Xn(() => {
    i.value && i.value.destroy();
  }), n && X(e, (d) => {
    Ka(a, d) || (a = d, u());
  }), o && X(t, (d) => {
    Jv(r, d) || (r = d, u());
  }), [l, i];
}
Ga.globalOptions = void 0;
const [Tg, Dg] = Hv(
  ({ opts: e, orientation: t, plugins: n }, o) => {
    const [a, r] = Ga(
      {
        ...e,
        axis: t === "horizontal" ? "x" : "y"
      },
      n
    );
    function l() {
      var p;
      (p = r.value) == null || p.scrollPrev();
    }
    function i() {
      var p;
      (p = r.value) == null || p.scrollNext();
    }
    const u = T(!1), d = T(!1);
    function c(p) {
      u.value = (p == null ? void 0 : p.canScrollNext()) || !1, d.value = (p == null ? void 0 : p.canScrollPrev()) || !1;
    }
    return se(() => {
      var p, m, f;
      r.value && ((p = r.value) == null || p.on("init", c), (m = r.value) == null || m.on("reInit", c), (f = r.value) == null || f.on("select", c), o("init-api", r.value));
    }), {
      carouselRef: a,
      carouselApi: r,
      canScrollPrev: d,
      canScrollNext: u,
      scrollPrev: l,
      scrollNext: i,
      orientation: t
    };
  }
);
function mo() {
  const e = Dg();
  if (!e) throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const gh = /* @__PURE__ */ x({
  __name: "Carousel",
  props: {
    opts: {},
    plugins: {},
    orientation: { default: "horizontal" },
    class: {}
  },
  emits: ["init-api"],
  setup(e, { expose: t, emit: n }) {
    const o = e, a = n, {
      canScrollNext: r,
      canScrollPrev: l,
      carouselApi: i,
      carouselRef: u,
      orientation: d,
      scrollNext: c,
      scrollPrev: p
    } = Tg(o, a);
    t({
      canScrollNext: r,
      canScrollPrev: l,
      carouselApi: i,
      carouselRef: u,
      orientation: d,
      scrollNext: c,
      scrollPrev: p
    });
    function m(f) {
      const v = o.orientation === "vertical" ? "ArrowUp" : "ArrowLeft", g = o.orientation === "vertical" ? "ArrowDown" : "ArrowRight";
      if (f.key === v) {
        f.preventDefault(), p();
        return;
      }
      f.key === g && (f.preventDefault(), c());
    }
    return (f, v) => (h(), N("div", {
      class: ne(s(z)("relative", o.class)),
      role: "region",
      "aria-roledescription": "carousel",
      tabindex: "0",
      onKeydown: m
    }, [
      _(f.$slots, "default", {
        canScrollNext: s(r),
        canScrollPrev: s(l),
        carouselApi: s(i),
        carouselRef: s(u),
        orientation: s(d),
        scrollNext: s(c),
        scrollPrev: s(p)
      })
    ], 34));
  }
}), hh = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "CarouselContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { carouselRef: n, orientation: o } = mo();
    return (a, r) => (h(), N("div", {
      ref_key: "carouselRef",
      ref: n,
      class: "overflow-hidden"
    }, [
      re("div", D({
        class: s(z)("flex", s(o) === "horizontal" ? "-ml-4" : "-mt-4 flex-col", t.class)
      }, a.$attrs), [
        _(a.$slots, "default")
      ], 16)
    ], 512));
  }
}), yh = /* @__PURE__ */ x({
  __name: "CarouselItem",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { orientation: n } = mo();
    return (o, a) => (h(), N("div", {
      role: "group",
      "aria-roledescription": "slide",
      class: ne(
        s(z)(
          "min-w-0 shrink-0 grow-0 basis-full",
          s(n) === "horizontal" ? "pl-4" : "pt-4",
          t.class
        )
      )
    }, [
      _(o.$slots, "default")
    ], 2));
  }
}), bh = /* @__PURE__ */ x({
  __name: "CarouselPrevious",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { orientation: n, canScrollPrev: o, scrollPrev: a } = mo();
    return (r, l) => (h(), C(s(El), {
      disabled: !s(o),
      class: ne(
        s(z)(
          "touch-manipulation absolute size-8 rounded-full p-0",
          s(n) === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          t.class
        )
      ),
      variant: "outline",
      onClick: s(a)
    }, {
      default: y(() => [
        _(r.$slots, "default", {}, () => [
          R(s(gv), { class: "size-4 text-current" }),
          l[0] || (l[0] = re("span", { class: "sr-only" }, "Previous Slide", -1))
        ])
      ]),
      _: 3
    }, 8, ["disabled", "class", "onClick"]));
  }
}), wh = /* @__PURE__ */ x({
  __name: "CarouselNext",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { orientation: n, canScrollNext: o, scrollNext: a } = mo();
    return (r, l) => (h(), C(s(El), {
      disabled: !s(o),
      class: ne(
        s(z)(
          "touch-manipulation absolute size-8 rounded-full p-0",
          s(n) === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          t.class
        )
      ),
      variant: "outline",
      onClick: s(a)
    }, {
      default: y(() => [
        _(r.$slots, "default", {}, () => [
          R(s(hv), { class: "size-4 text-current" }),
          l[0] || (l[0] = re("span", { class: "sr-only" }, "Next Slide", -1))
        ])
      ]),
      _: 3
    }, 8, ["disabled", "class", "onClick"]));
  }
});
/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pg = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Rn = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ig = ({ size: e, strokeWidth: t = 2, absoluteStrokeWidth: n, color: o, iconNode: a, name: r, class: l, ...i }, { slots: u }) => Oe(
  "svg",
  {
    ...Rn,
    width: e || Rn.width,
    height: e || Rn.height,
    stroke: o || Rn.stroke,
    "stroke-width": n ? Number(t) * 24 / Number(e) : t,
    class: ["lucide", `lucide-${Pg(r ?? "icon")}`],
    ...i
  },
  [...a.map((d) => Oe(...d)), ...u.default ? [u.default()] : []]
);
/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mg = (e, t) => (n, { slots: o }) => Oe(
  Ig,
  {
    ...n,
    iconNode: t,
    name: e
  },
  o
);
/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rg = Mg("CheckIcon", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
function qa(e) {
  return e ? e.flatMap((t) => t.type === be ? qa(t.children) : [t]) : [];
}
const Xo = x({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      var u, d;
      if (!n.default)
        return null;
      const o = qa(n.default()), a = o.findIndex((c) => c.type !== na);
      if (a === -1)
        return o;
      const r = o[a];
      (u = r.props) == null || delete u.ref;
      const l = r.props ? D(t, r.props) : t;
      t.class && ((d = r.props) != null && d.class) && delete r.props.class;
      const i = Jr(r, l);
      for (const c in l)
        c.startsWith("on") && (i.props || (i.props = {}), i.props[c] = l[c]);
      return o.length === 1 ? i : (o[a] = i, o);
    };
  }
}), Fg = ["area", "img", "input"], vo = x({
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
    return typeof o == "string" && Fg.includes(o) ? () => Oe(o, t) : o !== "template" ? () => Oe(e.as, t, { default: n.default }) : () => Oe(Xo, t, { default: n.default });
  }
}), Vg = /* @__PURE__ */ x({
  __name: "VisuallyHidden",
  props: {
    feature: { default: "focusable" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return (t, n) => (h(), C(s(vo), {
      as: t.as,
      "as-child": t.asChild,
      "aria-hidden": t.feature === "focusable" ? "true" : void 0,
      "data-hidden": t.feature === "fully-hidden" ? "" : void 0,
      tabindex: t.feature === "fully-hidden" ? "-1" : void 0,
      style: {
        // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
        position: "absolute",
        border: 0,
        width: "1px",
        height: "1px",
        padding: 0,
        margin: "-1px",
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        clipPath: "inset(50%)",
        whiteSpace: "nowrap",
        wordWrap: "normal"
      }
    }, {
      default: y(() => [
        _(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-hidden", "data-hidden", "tabindex"]));
  }
}), Il = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Lg = (e) => typeof e < "u", zg = os, Ng = Il ? window : void 0;
function go(e) {
  var t;
  const n = os(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
function jg(e) {
  return JSON.parse(JSON.stringify(e));
}
function Kg(e, t, n, o = {}) {
  var a, r, l;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: c = !1,
    defaultValue: p,
    shouldEmit: m
  } = o, f = Fe(), v = n || (f == null ? void 0 : f.emit) || ((a = f == null ? void 0 : f.$emit) == null ? void 0 : a.bind(f)) || ((l = (r = f == null ? void 0 : f.proxy) == null ? void 0 : r.$emit) == null ? void 0 : l.bind(f == null ? void 0 : f.proxy));
  let g = d;
  g = g || `update:${t.toString()}`;
  const b = ($) => i ? typeof i == "function" ? i($) : jg($) : $, w = () => Lg(e[t]) ? b(e[t]) : p, B = ($) => {
    m ? m($) && v(g, $) : v(g, $);
  };
  if (u) {
    const $ = w(), E = T($);
    let k = !1;
    return X(
      () => e[t],
      (P) => {
        k || (k = !0, E.value = b(P), ae(() => k = !1));
      }
    ), X(
      E,
      (P) => {
        !k && (P !== e[t] || c) && B(P);
      },
      { deep: c }
    ), E;
  } else
    return S({
      get() {
        return w();
      },
      set($) {
        B($);
      }
    });
}
function ho(e, t) {
  const n = typeof e == "string" ? `${e}Context` : t, o = Symbol(n);
  return [(l) => {
    const i = hn(o, l);
    if (i || i === null)
      return i;
    throw new Error(
      `Injection \`${o.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (l) => (yn(o, l), l)];
}
function Nr(e) {
  return typeof e == "string" ? `'${e}'` : new Hg().serialize(e);
}
const Hg = /* @__PURE__ */ function() {
  var t;
  class e {
    constructor() {
      rr(this, t, /* @__PURE__ */ new Map());
    }
    compare(o, a) {
      const r = typeof o, l = typeof a;
      return r === "string" && l === "string" ? o.localeCompare(a) : r === "number" && l === "number" ? o - a : String.prototype.localeCompare.call(this.serialize(o, !0), this.serialize(a, !0));
    }
    serialize(o, a) {
      if (o === null) return "null";
      switch (typeof o) {
        case "string":
          return a ? o : `'${o}'`;
        case "bigint":
          return `${o}n`;
        case "object":
          return this.$object(o);
        case "function":
          return this.$function(o);
      }
      return String(o);
    }
    serializeObject(o) {
      const a = Object.prototype.toString.call(o);
      if (a !== "[object Object]") return this.serializeBuiltInType(a.length < 10 ? `unknown:${a}` : a.slice(8, -1), o);
      const r = o.constructor, l = r === Object || r === void 0 ? "" : r.name;
      if (l !== "" && globalThis[l] === r) return this.serializeBuiltInType(l, o);
      if (typeof o.toJSON == "function") {
        const i = o.toJSON();
        return l + (i !== null && typeof i == "object" ? this.$object(i) : `(${this.serialize(i)})`);
      }
      return this.serializeObjectEntries(l, Object.entries(o));
    }
    serializeBuiltInType(o, a) {
      const r = this["$" + o];
      if (r) return r.call(this, a);
      if (typeof (a == null ? void 0 : a.entries) == "function") return this.serializeObjectEntries(o, a.entries());
      throw new Error(`Cannot serialize ${o}`);
    }
    serializeObjectEntries(o, a) {
      const r = Array.from(a).sort((i, u) => this.compare(i[0], u[0]));
      let l = `${o}{`;
      for (let i = 0; i < r.length; i++) {
        const [u, d] = r[i];
        l += `${this.serialize(u, !0)}:${this.serialize(d)}`, i < r.length - 1 && (l += ",");
      }
      return l + "}";
    }
    $object(o) {
      let a = on(this, t).get(o);
      return a === void 0 && (on(this, t).set(o, `#${on(this, t).size}`), a = this.serializeObject(o), on(this, t).set(o, a)), a;
    }
    $function(o) {
      const a = Function.prototype.toString.call(o);
      return a.slice(-15) === "[native code] }" ? `${o.name || ""}()[native]` : `${o.name}(${o.length})${a.replace(/\s*\n\s*/g, "")}`;
    }
    $Array(o) {
      let a = "[";
      for (let r = 0; r < o.length; r++) a += this.serialize(o[r]), r < o.length - 1 && (a += ",");
      return a + "]";
    }
    $Date(o) {
      try {
        return `Date(${o.toISOString()})`;
      } catch {
        return "Date(null)";
      }
    }
    $ArrayBuffer(o) {
      return `ArrayBuffer[${new Uint8Array(o).join(",")}]`;
    }
    $Set(o) {
      return `Set${this.$Array(Array.from(o).sort((a, r) => this.compare(a, r)))}`;
    }
    $Map(o) {
      return this.serializeObjectEntries("Map", o.entries());
    }
  }
  t = new WeakMap();
  for (const n of ["Error", "RegExp", "URL"]) e.prototype["$" + n] = function(o) {
    return `${n}(${o})`;
  };
  for (const n of ["Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array"]) e.prototype["$" + n] = function(o) {
    return `${n}[${o.join(",")}]`;
  };
  for (const n of ["BigInt64Array", "BigUint64Array"]) e.prototype["$" + n] = function(o) {
    return `${n}[${o.join("n,")}${o.length > 0 ? "n" : ""}]`;
  };
  return e;
}();
function Zo(e, t) {
  return e === t || Nr(e) === Nr(t);
}
function Qo(e) {
  return e == null;
}
function jr(e, t) {
  return Qo(e) ? !1 : Array.isArray(e) ? e.some((n) => Zo(n, t)) : Zo(e, t);
}
const [Ug, xh] = ho("ConfigProvider");
function Ml() {
  const e = Fe(), t = T(), n = S(() => {
    var l, i;
    return ["#text", "#comment"].includes((l = t.value) == null ? void 0 : l.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : go(t);
  }), o = Object.assign({}, e.exposed), a = {};
  for (const l in e.props)
    Object.defineProperty(a, l, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[l]
    });
  if (Object.keys(o).length > 0)
    for (const l in o)
      Object.defineProperty(a, l, {
        enumerable: !0,
        configurable: !0,
        get: () => o[l]
      });
  Object.defineProperty(a, "$el", {
    enumerable: !0,
    configurable: !0,
    get: () => e.vnode.el
  }), e.exposed = a;
  function r(l) {
    t.value = l, l && (Object.defineProperty(a, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => l instanceof Element ? l : l.$el
    }), e.exposed = a);
  }
  return { forwardRef: r, currentRef: t, currentElement: n };
}
let Wg = 0;
function Gg(e, t = "reka") {
  const n = Ug({ useId: void 0 });
  return Ln.useId ? `${t}-${Ln.useId()}` : n.useId ? `${t}-${n.useId()}` : `${t}-${++Wg}`;
}
function qg(e, t) {
  const n = T(e);
  function o(r) {
    return t[n.value][r] ?? n.value;
  }
  return {
    state: n,
    dispatch: (r) => {
      n.value = o(r);
    }
  };
}
function Yg(e, t) {
  var b;
  const n = T({}), o = T("none"), a = T(e), r = e.value ? "mounted" : "unmounted";
  let l;
  const i = ((b = t.value) == null ? void 0 : b.ownerDocument.defaultView) ?? Ng, { state: u, dispatch: d } = qg(r, {
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
  }), c = (w) => {
    var B;
    if (Il) {
      const $ = new CustomEvent(w, { bubbles: !1, cancelable: !1 });
      (B = t.value) == null || B.dispatchEvent($);
    }
  };
  X(
    e,
    async (w, B) => {
      var E;
      const $ = B !== w;
      if (await ae(), $) {
        const k = o.value, P = Fn(t.value);
        w ? (d("MOUNT"), c("enter"), P === "none" && c("after-enter")) : P === "none" || P === "undefined" || ((E = n.value) == null ? void 0 : E.display) === "none" ? (d("UNMOUNT"), c("leave"), c("after-leave")) : B && k !== P ? (d("ANIMATION_OUT"), c("leave")) : (d("UNMOUNT"), c("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const p = (w) => {
    const B = Fn(t.value), $ = B.includes(
      w.animationName
    ), E = u.value === "mounted" ? "enter" : "leave";
    if (w.target === t.value && $ && (c(`after-${E}`), d("ANIMATION_END"), !a.value)) {
      const k = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", l = i == null ? void 0 : i.setTimeout(() => {
        var P;
        ((P = t.value) == null ? void 0 : P.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = k);
      });
    }
    w.target === t.value && B === "none" && d("ANIMATION_END");
  }, m = (w) => {
    w.target === t.value && (o.value = Fn(t.value));
  }, f = X(
    t,
    (w, B) => {
      w ? (n.value = getComputedStyle(w), w.addEventListener("animationstart", m), w.addEventListener("animationcancel", p), w.addEventListener("animationend", p)) : (d("ANIMATION_END"), l !== void 0 && (i == null || i.clearTimeout(l)), B == null || B.removeEventListener("animationstart", m), B == null || B.removeEventListener("animationcancel", p), B == null || B.removeEventListener("animationend", p));
    },
    { immediate: !0 }
  ), v = X(u, () => {
    const w = Fn(t.value);
    o.value = u.value === "mounted" ? w : "none";
  });
  return ze(() => {
    f(), v();
  }), {
    isPresent: S(
      () => ["mounted", "unmountSuspended"].includes(u.value)
    )
  };
}
function Fn(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const Xg = x({
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
    var d;
    const { present: o, forceMount: a } = pe(e), r = T(), { isPresent: l } = Yg(o, r);
    n({ present: l });
    let i = t.default({ present: l.value });
    i = qa(i || []);
    const u = Fe();
    if (i && (i == null ? void 0 : i.length) > 1) {
      const c = (d = u == null ? void 0 : u.parent) != null && d.type.name ? `<${u.parent.type.name} />` : "component";
      throw new Error(
        [
          `Detected an invalid children for \`${c}\` for  \`Presence\` component.`,
          "",
          "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",
          "You can apply a few solutions:",
          [
            "Provide a single child element so that `presence` directive attach correctly.",
            "Ensure the first child is an actual element instead of a raw text node or comment node."
          ].map((p) => `  - ${p}`).join(`
`)
        ].join(`
`)
      );
    }
    return () => a.value || o.value || l.value ? Oe(t.default({ present: l.value })[0], {
      ref: (c) => {
        const p = go(c);
        return typeof (p == null ? void 0 : p.hasAttribute) > "u" || (p != null && p.hasAttribute("data-reka-popper-content-wrapper") ? r.value = p.firstElementChild : r.value = p), p;
      }
    }) : null;
  }
});
function Zg(e) {
  const t = Fe(), n = t == null ? void 0 : t.type.emits, o = {};
  return n != null && n.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), n == null || n.forEach((a) => {
    o[Zr(qn(a))] = (...r) => e(a, ...r);
  }), o;
}
function Kr() {
  let e = document.activeElement;
  if (e == null)
    return null;
  for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null; )
    e = e.shadowRoot.activeElement;
  return e;
}
function Qg(e) {
  const t = Fe(), n = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((a, r) => {
    const l = (t == null ? void 0 : t.type.props[r]).default;
    return l !== void 0 && (a[r] = l), a;
  }, {}), o = qr(e);
  return S(() => {
    const a = {}, r = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(r).forEach((l) => {
      a[qn(l)] = r[l];
    }), Object.keys({ ...n, ...a }).reduce((l, i) => (o.value[i] !== void 0 && (l[i] = o.value[i]), l), {});
  });
}
function Jg(e, t) {
  const n = Qg(e), o = t ? Zg(t) : {};
  return S(() => ({
    ...n.value,
    ...o
  }));
}
function Jo() {
  const e = T(), t = S(() => {
    var n, o;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (o = e.value) == null ? void 0 : o.$el.nextElementSibling : go(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
function e0(e) {
  return S(() => {
    var t;
    return zg(e) ? !!((t = go(e)) != null && t.closest("form")) : !0;
  });
}
const Hr = "data-reka-collection-item";
function t0(e = {}) {
  const { key: t = "", isProvider: n = !1 } = e, o = `${t}CollectionProvider`;
  let a;
  if (n) {
    const c = T(/* @__PURE__ */ new Map());
    a = {
      collectionRef: T(),
      itemMap: c
    }, yn(o, a);
  } else
    a = hn(o);
  const r = (c = !1) => {
    const p = a.collectionRef.value;
    if (!p)
      return [];
    const m = Array.from(p.querySelectorAll(`[${Hr}]`)), v = Array.from(a.itemMap.value.values()).sort(
      (g, b) => m.indexOf(g.ref) - m.indexOf(b.ref)
    );
    return c ? v : v.filter((g) => g.ref.dataset.disabled !== "");
  }, l = x({
    name: "CollectionSlot",
    setup(c, { slots: p }) {
      const { primitiveElement: m, currentElement: f } = Jo();
      return X(f, () => {
        a.collectionRef.value = f.value;
      }), () => Oe(Xo, { ref: m }, p);
    }
  }), i = x({
    name: "CollectionItem",
    inheritAttrs: !1,
    props: {
      value: {
        // It accepts any value
        validator: () => !0
      }
    },
    setup(c, { slots: p, attrs: m }) {
      const { primitiveElement: f, currentElement: v } = Jo();
      return we((g) => {
        if (v.value) {
          const b = es(v.value);
          a.itemMap.value.set(b, { ref: v.value, value: c.value }), g(() => a.itemMap.value.delete(b));
        }
      }), () => Oe(Xo, { ...m, [Hr]: "", ref: f }, p);
    }
  }), u = S(() => Array.from(a.itemMap.value.values())), d = S(() => a.itemMap.value.size);
  return { getItems: r, reactiveItems: u, itemMapSize: d, CollectionSlot: l, CollectionItem: i };
}
const n0 = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function o0(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function a0(e, t, n) {
  const o = o0(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o)))
    return n0[o];
}
function r0(e, t = !1) {
  const n = Kr();
  for (const o of e)
    if (o === n || (o.focus({ preventScroll: t }), Kr() !== n))
      return;
}
function s0(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
const [l0, _h] = ho("RovingFocusGroup"), Ur = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "VisuallyHiddenInputBubble",
  props: {
    name: {},
    value: {},
    checked: { type: Boolean, default: void 0 },
    required: { type: Boolean },
    disabled: { type: Boolean },
    feature: { default: "fully-hidden" }
  },
  setup(e) {
    const t = e, { primitiveElement: n, currentElement: o } = Jo(), a = S(() => t.checked ?? t.value);
    return X(a, (r, l) => {
      if (!o.value)
        return;
      const i = o.value, u = window.HTMLInputElement.prototype, c = Object.getOwnPropertyDescriptor(u, "value").set;
      if (c && r !== l) {
        const p = new Event("input", { bubbles: !0 }), m = new Event("change", { bubbles: !0 });
        c.call(i, r), i.dispatchEvent(p), i.dispatchEvent(m);
      }
    }), (r, l) => (h(), C(Vg, D({
      ref_key: "primitiveElement",
      ref: n
    }, { ...t, ...r.$attrs }, { as: "input" }), null, 16));
  }
}), i0 = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "VisuallyHiddenInput",
  props: {
    name: {},
    value: {},
    checked: { type: Boolean, default: void 0 },
    required: { type: Boolean },
    disabled: { type: Boolean },
    feature: { default: "fully-hidden" }
  },
  setup(e) {
    const t = e, n = S(
      () => typeof t.value == "object" && Array.isArray(t.value) && t.value.length === 0 && t.required
    ), o = S(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" ? [{ name: t.name, value: t.value }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((a, r) => typeof a == "object" ? Object.entries(a).map(([l, i]) => ({ name: `[${t.name}][${r}][${l}]`, value: i })) : { name: `[${t.name}][${r}]`, value: a }) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([a, r]) => ({ name: `[${t.name}][${a}]`, value: r })) : []);
    return (a, r) => n.value ? (h(), C(Ur, D({ key: a.name }, { ...t, ...a.$attrs }, {
      name: a.name,
      value: a.value
    }), null, 16, ["name", "value"])) : (h(!0), N(be, { key: 1 }, vt(o.value, (l) => (h(), C(Ur, D({
      key: l.name,
      ref_for: !0
    }, { ...t, ...a.$attrs }, {
      name: l.name,
      value: l.value
    }), null, 16, ["name", "value"]))), 128));
  }
}), [u0, Ch] = ho("CheckboxGroupRoot");
function Gn(e) {
  return e === "indeterminate";
}
function Rl(e) {
  return Gn(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const d0 = /* @__PURE__ */ x({
  __name: "RovingFocusItem",
  props: {
    tabStopId: {},
    focusable: { type: Boolean, default: !0 },
    active: { type: Boolean },
    allowShiftKey: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = l0(), o = Gg(), a = S(() => t.tabStopId || o), r = S(
      () => n.currentTabStopId.value === a.value
    ), { getItems: l, CollectionItem: i } = t0();
    se(() => {
      t.focusable && n.onFocusableItemAdd();
    }), ze(() => {
      t.focusable && n.onFocusableItemRemove();
    });
    function u(d) {
      if (d.key === "Tab" && d.shiftKey) {
        n.onItemShiftTab();
        return;
      }
      if (d.target !== d.currentTarget)
        return;
      const c = a0(
        d,
        n.orientation.value,
        n.dir.value
      );
      if (c !== void 0) {
        if (d.metaKey || d.ctrlKey || d.altKey || !t.allowShiftKey && d.shiftKey)
          return;
        d.preventDefault();
        let p = [...l().map((m) => m.ref).filter((m) => m.dataset.disabled !== "")];
        if (c === "last")
          p.reverse();
        else if (c === "prev" || c === "next") {
          c === "prev" && p.reverse();
          const m = p.indexOf(
            d.currentTarget
          );
          p = n.loop.value ? s0(p, m + 1) : p.slice(m + 1);
        }
        ae(() => r0(p));
      }
    }
    return (d, c) => (h(), C(s(i), null, {
      default: y(() => [
        R(s(vo), {
          tabindex: r.value ? 0 : -1,
          "data-orientation": s(n).orientation.value,
          "data-active": d.active ? "" : void 0,
          "data-disabled": d.focusable ? void 0 : "",
          as: d.as,
          "as-child": d.asChild,
          onMousedown: c[0] || (c[0] = (p) => {
            d.focusable ? s(n).onItemFocus(a.value) : p.preventDefault();
          }),
          onFocus: c[1] || (c[1] = (p) => s(n).onItemFocus(a.value)),
          onKeydown: u
        }, {
          default: y(() => [
            _(d.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "data-active", "data-disabled", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), [c0, p0] = ho("CheckboxRoot"), f0 = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "CheckboxRoot",
  props: {
    defaultValue: { type: [Boolean, String] },
    modelValue: { type: [Boolean, String, null], default: void 0 },
    disabled: { type: Boolean },
    value: { default: "on" },
    id: {},
    asChild: { type: Boolean },
    as: { default: "button" },
    name: {},
    required: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = t, { forwardRef: a, currentElement: r } = Ml(), l = u0(null), i = Kg(n, "modelValue", o, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), u = S(() => (l == null ? void 0 : l.disabled.value) || n.disabled), d = S(() => Qo(l == null ? void 0 : l.modelValue.value) ? i.value === "indeterminate" ? "indeterminate" : i.value : jr(l.modelValue.value, n.value));
    function c() {
      if (Qo(l == null ? void 0 : l.modelValue.value))
        i.value = Gn(i.value) ? !0 : !i.value;
      else {
        const f = [...l.modelValue.value || []];
        if (jr(f, n.value)) {
          const v = f.findIndex((g) => Zo(g, n.value));
          f.splice(v, 1);
        } else
          f.push(n.value);
        l.modelValue.value = f;
      }
    }
    const p = e0(r), m = S(() => {
      var f;
      return n.id && r.value ? (f = document.querySelector(`[for="${n.id}"]`)) == null ? void 0 : f.innerText : void 0;
    });
    return p0({
      disabled: u,
      state: d
    }), (f, v) => {
      var g, b;
      return h(), C(Ve((g = s(l)) != null && g.rovingFocus.value ? s(d0) : s(vo)), D(f.$attrs, {
        id: f.id,
        ref: s(a),
        role: "checkbox",
        "as-child": f.asChild,
        as: f.as,
        type: f.as === "button" ? "button" : void 0,
        "aria-checked": s(Gn)(d.value) ? "mixed" : d.value,
        "aria-required": f.required,
        "aria-label": f.$attrs["aria-label"] || m.value,
        "data-state": s(Rl)(d.value),
        "data-disabled": u.value ? "" : void 0,
        disabled: u.value,
        focusable: (b = s(l)) != null && b.rovingFocus.value ? !u.value : void 0,
        onKeydown: mt(Be(() => {
        }, ["prevent"]), ["enter"]),
        onClick: c
      }), {
        default: y(() => [
          _(f.$slots, "default", {
            modelValue: s(i),
            state: d.value
          }),
          s(p) && f.name && !s(l) ? (h(), C(s(i0), {
            key: 0,
            type: "checkbox",
            checked: !!d.value,
            name: f.name,
            value: f.value,
            disabled: u.value,
            required: f.required
          }, null, 8, ["checked", "name", "value", "disabled", "required"])) : ce("", !0)
        ]),
        _: 3
      }, 16, ["id", "as-child", "as", "type", "aria-checked", "aria-required", "aria-label", "data-state", "data-disabled", "disabled", "focusable", "onKeydown"]);
    };
  }
}), m0 = /* @__PURE__ */ x({
  __name: "CheckboxIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const { forwardRef: t } = Ml(), n = c0();
    return (o, a) => (h(), C(s(Xg), {
      present: o.forceMount || s(Gn)(s(n).state.value) || s(n).state.value === !0
    }, {
      default: y(() => [
        R(s(vo), D({
          ref: s(t),
          "data-state": s(Rl)(s(n).state.value),
          "data-disabled": s(n).disabled.value ? "" : void 0,
          style: { pointerEvents: "none" },
          "as-child": o.asChild,
          as: o.as
        }, o.$attrs), {
          default: y(() => [
            _(o.$slots, "default")
          ]),
          _: 3
        }, 16, ["data-state", "data-disabled", "as-child", "as"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Bh = /* @__PURE__ */ x({
  __name: "Checkbox",
  props: {
    defaultValue: { type: [Boolean, String] },
    modelValue: { type: [Boolean, String, null] },
    disabled: { type: Boolean },
    value: {},
    id: {},
    asChild: { type: Boolean },
    as: {},
    name: {},
    required: { type: Boolean },
    class: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = S(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = Jg(a, o);
    return (l, i) => (h(), C(s(f0), D(s(r), {
      class: s(z)(
        "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        n.class
      )
    }), {
      default: y(() => [
        R(s(m0), { class: "flex h-full w-full items-center justify-center text-current" }, {
          default: y(() => [
            _(l.$slots, "default", {}, () => [
              R(s(Rg), { class: "h-4 w-4" })
            ])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), v0 = /* @__PURE__ */ x({
  __name: "Command",
  props: {
    modelValue: { default: "" },
    defaultValue: {},
    open: { type: Boolean, default: !0 },
    defaultOpen: { type: Boolean },
    searchTerm: {},
    selectedValue: {},
    multiple: { type: Boolean },
    disabled: { type: Boolean },
    name: {},
    dir: {},
    filterFunction: {},
    displayValue: {},
    resetSearchTermOnBlur: { type: Boolean },
    resetSearchTermOnSelect: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["update:modelValue", "update:open", "update:searchTerm", "update:selectedValue"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = S(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = Z(a, o);
    return (l, i) => (h(), C(s(dc), D(s(r), {
      class: s(z)(
        "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
        n.class
      )
    }), {
      default: y(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), g0 = /* @__PURE__ */ x({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = Z(e, t);
    return (r, l) => (h(), C(s(xa), U(W(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $h = /* @__PURE__ */ x({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(Tt), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Sh = /* @__PURE__ */ x({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(_a), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), kh = /* @__PURE__ */ x({
  __name: "DialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), N("div", {
      class: ne(s(z)("flex flex-col gap-y-1.5 text-center sm:text-left", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), Oh = /* @__PURE__ */ x({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = Se(n);
    return (a, r) => (h(), C(s(ka), D(s(o), {
      class: s(z)("text-lg font-semibold leading-none tracking-tight", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Eh = /* @__PURE__ */ x({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = Se(n);
    return (a, r) => (h(), C(s(Oa), D(s(o), {
      class: s(z)("text-sm text-muted-foreground", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), h0 = /* @__PURE__ */ x({
  __name: "DialogContent",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus", "close"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = S(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = Z(a, o);
    return (l, i) => (h(), C(s(Ca), null, {
      default: y(() => [
        R(s(so), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        R(s(ro), D(s(r), {
          class: s(z)(
            "fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
            n.class
          )
        }), {
          default: y(() => [
            _(l.$slots, "default"),
            R(s(Tt), {
              class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
              onClick: i[0] || (i[0] = (u) => o("close", u))
            }, {
              default: y(() => [
                R(s(po), { class: "size-4" }),
                i[1] || (i[1] = re("span", { class: "sr-only" }, "Close", -1))
              ]),
              _: 1,
              __: [1]
            })
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Ah = /* @__PURE__ */ x({
  __name: "DialogScrollContent",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = S(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = Z(a, o);
    return (l, i) => (h(), C(s(Ca), null, {
      default: y(() => [
        R(s(so), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: y(() => [
            R(s(ro), D({
              class: s(z)(
                "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                n.class
              )
            }, s(r), {
              onPointerDownOutside: i[0] || (i[0] = (u) => {
                const d = u.detail.originalEvent, c = d.target;
                (d.offsetX > c.clientWidth || d.offsetY > c.clientHeight) && u.preventDefault();
              })
            }), {
              default: y(() => [
                _(l.$slots, "default"),
                R(s(Tt), { class: "absolute right-4 top-4 rounded-md p-0.5 transition-colors hover:bg-secondary" }, {
                  default: y(() => [
                    R(s(po), { class: "h-4 w-4" }),
                    i[1] || (i[1] = re("span", { class: "sr-only" }, "Close", -1))
                  ]),
                  _: 1,
                  __: [1]
                })
              ]),
              _: 3
            }, 16, ["class"])
          ]),
          _: 3
        })
      ]),
      _: 3
    }));
  }
}), Th = /* @__PURE__ */ x({
  __name: "DialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), N("div", {
      class: ne(s(z)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), Dh = /* @__PURE__ */ x({
  __name: "CommandDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = Z(e, t);
    return (r, l) => (h(), C(s(g0), U(W(s(a))), {
      default: y(() => [
        R(s(h0), { class: "overflow-hidden p-0 shadow-lg" }, {
          default: y(() => [
            R(v0, { class: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5" }, {
              default: y(() => [
                _(r.$slots, "default")
              ]),
              _: 3
            })
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16));
  }
}), Ph = /* @__PURE__ */ x({
  __name: "CommandEmpty",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(yc), D(n.value, {
      class: s(z)("py-6 text-center text-sm", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ih = /* @__PURE__ */ x({
  __name: "CommandGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    heading: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(fc), D(n.value, {
      class: s(z)(
        "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
        t.class
      )
    }), {
      default: y(() => [
        o.heading ? (h(), C(s(mc), {
          key: 0,
          class: "px-2 py-1.5 text-xs font-medium text-muted-foreground"
        }, {
          default: y(() => [
            ke(Te(o.heading), 1)
          ]),
          _: 1
        })) : ce("", !0),
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), y0 = {
  class: "flex items-center border-b px-3",
  "cmdk-input-wrapper": ""
}, Mh = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "CommandInput",
  props: {
    type: {},
    disabled: { type: Boolean },
    autoFocus: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = Se(n);
    return (a, r) => (h(), N("div", y0, [
      R(s(_v), { class: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
      R(s(cc), D({ ...s(o), ...a.$attrs }, {
        "auto-focus": "",
        class: s(z)(
          "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          t.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), Rh = /* @__PURE__ */ x({
  __name: "CommandItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = S(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = Z(a, o);
    return (l, i) => (h(), C(s(_c), D(s(r), {
      class: s(z)(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        n.class
      )
    }), {
      default: y(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), b0 = { role: "presentation" }, Fh = /* @__PURE__ */ x({
  __name: "CommandList",
  props: {
    forceMount: { type: Boolean },
    position: {},
    bodyLock: { type: Boolean },
    dismissable: { type: Boolean, default: !1 },
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
    as: {},
    disableOutsidePointerEvents: { type: Boolean },
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = S(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = Z(a, o);
    return (l, i) => (h(), C(s(hc), D(s(r), {
      class: s(z)("max-h-[300px] overflow-y-auto overflow-x-hidden", n.class)
    }), {
      default: y(() => [
        re("div", b0, [
          _(l.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Vh = /* @__PURE__ */ x({
  __name: "CommandSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(Cc), D(n.value, {
      class: s(z)("-mx-1 h-px bg-border", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Lh = /* @__PURE__ */ x({
  __name: "CommandShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), N("span", {
      class: ne(s(z)("ml-auto text-xs tracking-widest text-muted-foreground", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), zh = /* @__PURE__ */ x({
  __name: "DropdownMenu",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = Z(e, t);
    return (r, l) => (h(), C(s(np), U(W(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Nh = /* @__PURE__ */ x({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const n = Se(e);
    return (o, a) => (h(), C(s(op), D({ class: "outline-none" }, s(n)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), jh = /* @__PURE__ */ x({
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
    const n = e, o = t, a = S(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = Z(a, o);
    return (l, i) => (h(), C(s(ap), null, {
      default: y(() => [
        R(s(rp), D(s(r), {
          class: s(z)(
            "z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            n.class
          )
        }), {
          default: y(() => [
            _(l.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Kh = /* @__PURE__ */ x({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(lp), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hh = /* @__PURE__ */ x({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = Z(e, t);
    return (r, l) => (h(), C(s(cp), U(W(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Uh = /* @__PURE__ */ x({
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
    const t = e, n = S(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = Se(n);
    return (a, r) => (h(), C(s(sp), D(s(o), {
      class: s(z)(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        a.inset && "pl-8",
        t.class
      )
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), w0 = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, Wh = /* @__PURE__ */ x({
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
    const n = e, o = t, a = S(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = Z(a, o);
    return (l, i) => (h(), C(s(up), D(s(r), {
      class: s(z)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        n.class
      )
    }), {
      default: y(() => [
        re("span", w0, [
          R(s(Qs), null, {
            default: y(() => [
              R(s(kl), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), x0 = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, Gh = /* @__PURE__ */ x({
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
    const n = e, o = t, a = S(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = Z(a, o);
    return (l, i) => (h(), C(s(pp), D(s(r), {
      class: s(z)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        n.class
      )
    }), {
      default: y(() => [
        re("span", x0, [
          R(s(Qs), null, {
            default: y(() => [
              R(s(xv), { class: "h-4 w-4 fill-current" })
            ]),
            _: 1
          })
        ]),
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), qh = /* @__PURE__ */ x({
  __name: "DropdownMenuShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), N("span", {
      class: ne(s(z)("ml-auto text-xs tracking-widest opacity-60", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), Yh = /* @__PURE__ */ x({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(ip), D(n.value, {
      class: s(z)("-mx-1 my-1 h-px bg-muted", t.class)
    }), null, 16, ["class"]));
  }
}), Xh = /* @__PURE__ */ x({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = Se(n);
    return (a, r) => (h(), C(s(dp), D(s(o), {
      class: s(z)("px-2 py-1.5 text-sm font-semibold", a.inset && "pl-8", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Zh = /* @__PURE__ */ x({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = Z(e, t);
    return (r, l) => (h(), C(s(fp), U(W(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Qh = /* @__PURE__ */ x({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = Se(n);
    return (a, r) => (h(), C(s(vp), D(s(o), {
      class: s(z)(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
        t.class
      )
    }), {
      default: y(() => [
        _(a.$slots, "default"),
        R(s(bv), { class: "ml-auto h-4 w-4" })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Jh = /* @__PURE__ */ x({
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
    const n = e, o = t, a = S(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = Z(a, o);
    return (l, i) => (h(), C(s(mp), D(s(r), {
      class: s(z)(
        "z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        n.class
      )
    }), {
      default: y(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ey = /* @__PURE__ */ x({
  __name: "Input",
  props: {
    defaultValue: {},
    modelValue: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = Al(n, "modelValue", t, {
      passive: !0,
      defaultValue: n.defaultValue
    });
    return (r, l) => Ut((h(), N("input", {
      "onUpdate:modelValue": l[0] || (l[0] = (i) => $t(a) ? a.value = i : null),
      class: ne(
        s(z)(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          n.class
        )
      )
    }, null, 2)), [
      [as, s(a)]
    ]);
  }
}), ty = /* @__PURE__ */ x({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(gp), D(n.value, {
      class: s(z)(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        t.class
      )
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ny = /* @__PURE__ */ x({
  __name: "Popover",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = Z(e, t);
    return (r, l) => (h(), C(s(yp), U(W(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), oy = /* @__PURE__ */ x({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(bp), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ay = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "PopoverContent",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    side: {},
    sideOffset: { default: 4 },
    align: { default: "center" },
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
    disableOutsidePointerEvents: { type: Boolean },
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = S(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = Z(a, o);
    return (l, i) => (h(), C(s(wp), null, {
      default: y(() => [
        R(s(Cp), D({ ...s(r), ...l.$attrs }, {
          class: s(z)(
            "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            n.class
          )
        }), {
          default: y(() => [
            _(l.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), ry = /* @__PURE__ */ x({
  __name: "Progress",
  props: {
    modelValue: { default: 0 },
    max: {},
    getValueLabel: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(Op), D(n.value, {
      class: s(z)("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", t.class)
    }), {
      default: y(() => [
        R(s(Ep), {
          class: "h-full w-full flex-1 bg-primary transition-all",
          style: Ot(`transform: translateX(-${100 - (t.modelValue ?? 0)}%);`)
        }, null, 8, ["style"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), sy = /* @__PURE__ */ x({
  __name: "Select",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    defaultValue: {},
    modelValue: {},
    dir: {},
    name: {},
    autocomplete: {},
    disabled: { type: Boolean },
    required: { type: Boolean }
  },
  emits: ["update:modelValue", "update:open"],
  setup(e, { emit: t }) {
    const a = Z(e, t);
    return (r, l) => (h(), C(s(Mp), U(W(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ly = /* @__PURE__ */ x({
  __name: "SelectValue",
  props: {
    placeholder: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(rf), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), iy = /* @__PURE__ */ x({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = Se(n);
    return (a, r) => (h(), C(s(Vp), D(s(o), {
      class: s(z)(
        "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:truncate text-start",
        t.class
      )
    }), {
      default: y(() => [
        _(a.$slots, "default"),
        R(s(sf), { "as-child": "" }, {
          default: y(() => [
            R(s(yv), { class: "h-4 w-4 shrink-0 opacity-50" })
          ]),
          _: 1
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), uy = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "SelectContent",
  props: {
    forceMount: { type: Boolean },
    position: { default: "popper" },
    bodyLock: { type: Boolean },
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
    as: {},
    class: {}
  },
  emits: ["closeAutoFocus", "escapeKeyDown", "pointerDownOutside"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = S(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = Z(a, o);
    return (l, i) => (h(), C(s(Lp), null, {
      default: y(() => [
        R(s(Gp), D({ ...s(r), ...l.$attrs }, {
          class: s(z)(
            "relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            l.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            n.class
          )
        }), {
          default: y(() => [
            R(s(C0)),
            R(s(nf), {
              class: ne(
                s(z)(
                  "p-1",
                  l.position === "popper" && "h-[--radix-select-trigger-height] w-full min-w-[--radix-select-trigger-width]"
                )
              )
            }, {
              default: y(() => [
                _(l.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]),
            R(s(B0))
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), dy = /* @__PURE__ */ x({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(ef), D({
      class: s(z)("p-1 w-full", t.class)
    }, n.value), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), _0 = { class: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center" }, cy = /* @__PURE__ */ x({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = Se(n);
    return (a, r) => (h(), C(s(Xp), D(s(o), {
      class: s(z)(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        t.class
      )
    }), {
      default: y(() => [
        re("span", _0, [
          R(s(Zp), null, {
            default: y(() => [
              R(s(kl), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        R(s(ol), null, {
          default: y(() => [
            _(a.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), py = /* @__PURE__ */ x({
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(ol), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fy = /* @__PURE__ */ x({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(tf), {
      class: ne(s(z)("px-2 py-1.5 text-sm font-semibold", t.class))
    }, {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), my = /* @__PURE__ */ x({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(qp), D(n.value, {
      class: s(z)("-mx-1 my-1 h-px bg-muted", t.class)
    }), null, 16, ["class"]));
  }
}), C0 = /* @__PURE__ */ x({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = Se(n);
    return (a, r) => (h(), C(s(of), D(s(o), {
      class: s(z)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default", {}, () => [
          R(s(wv))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), B0 = /* @__PURE__ */ x({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = Se(n);
    return (a, r) => (h(), C(s(af), D(s(o), {
      class: s(z)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default", {}, () => [
          R(s(Ol))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), vy = /* @__PURE__ */ x({
  __name: "Sheet",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = Z(e, t);
    return (r, l) => (h(), C(s(xa), U(W(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), gy = /* @__PURE__ */ x({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(_a), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hy = /* @__PURE__ */ x({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(Tt), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), yy = /* @__PURE__ */ x({
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
    const n = e, o = t, a = S(() => {
      const { class: l, side: i, ...u } = n;
      return u;
    }), r = Z(a, o);
    return (l, i) => (h(), C(s(Ca), null, {
      default: y(() => [
        R(s(so), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        R(s(ro), D({
          class: s(z)(s($0)({ side: l.side }), n.class)
        }, { ...s(r), ...l.$attrs }), {
          default: y(() => [
            _(l.$slots, "default"),
            R(s(Tt), { class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary" }, {
              default: y(() => [
                R(s(po), { class: "h-4 w-4" })
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
}), by = /* @__PURE__ */ x({
  __name: "SheetHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), N("div", {
      class: ne(s(z)("flex flex-col gap-y-2 text-center sm:text-left", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), wy = /* @__PURE__ */ x({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(ka), D({
      class: s(z)("text-lg font-semibold text-foreground", t.class)
    }, n.value), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), xy = /* @__PURE__ */ x({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(Oa), D({
      class: s(z)("text-sm text-muted-foreground", t.class)
    }, n.value), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), _y = /* @__PURE__ */ x({
  __name: "SheetFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), N("div", {
      class: ne(s(z)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), $0 = Sn(
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
), Cy = /* @__PURE__ */ x({
  __name: "Skeleton",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), N("div", {
      class: ne(s(z)("animate-pulse rounded-md bg-primary/10", t.class))
    }, null, 2));
  }
}), By = /* @__PURE__ */ x({
  __name: "Slider",
  props: {
    name: {},
    defaultValue: {},
    modelValue: {},
    disabled: { type: Boolean },
    orientation: {},
    dir: {},
    inverted: { type: Boolean },
    min: {},
    max: {},
    step: {},
    minStepsBetweenThumbs: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["update:modelValue", "valueCommit"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = S(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = Z(a, o);
    return (l, i) => (h(), C(s(wf), D({
      class: s(z)("relative flex w-full touch-none select-none items-center", n.class)
    }, s(r)), {
      default: y(() => [
        R(s(Cf), { class: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20" }, {
          default: y(() => [
            R(s(Bf), { class: "absolute h-full bg-primary" })
          ]),
          _: 1
        }),
        (h(!0), N(be, null, vt(l.modelValue, (u, d) => (h(), C(s(_f), {
          key: d,
          class: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        }))), 128))
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), $y = /* @__PURE__ */ x({
  __name: "Switch",
  props: {
    defaultChecked: { type: Boolean },
    checked: { type: Boolean },
    disabled: { type: Boolean },
    required: { type: Boolean },
    name: {},
    id: {},
    value: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["update:checked"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = S(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = Z(a, o);
    return (l, i) => (h(), C(s(Ef), D(s(r), {
      class: s(z)(
        "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        n.class
      )
    }), {
      default: y(() => [
        R(s(Af), {
          class: ne(
            s(z)(
              "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
            )
          )
        }, null, 8, ["class"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), S0 = { class: "relative w-full overflow-auto" }, Sy = /* @__PURE__ */ x({
  __name: "Table",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), N("div", S0, [
      re("table", {
        class: ne(s(z)("w-full caption-bottom text-sm", t.class))
      }, [
        _(n.$slots, "default")
      ], 2)
    ]));
  }
}), ky = /* @__PURE__ */ x({
  __name: "TableBody",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), N("tbody", {
      class: ne(s(z)("[&_tr:last-child]:border-0", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), k0 = /* @__PURE__ */ x({
  __name: "TableCell",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), N("td", {
      class: ne(
        s(z)(
          "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5",
          t.class
        )
      )
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), Oy = /* @__PURE__ */ x({
  __name: "TableHead",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), N("th", {
      class: ne(
        s(z)(
          "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5",
          t.class
        )
      )
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), Ey = /* @__PURE__ */ x({
  __name: "TableHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), N("thead", {
      class: ne(s(z)("[&_tr]:border-b", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), Ay = /* @__PURE__ */ x({
  __name: "TableFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), N("tfoot", {
      class: ne(s(z)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), O0 = /* @__PURE__ */ x({
  __name: "TableRow",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), N("tr", {
      class: ne(
        s(z)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", t.class)
      )
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), Ty = /* @__PURE__ */ x({
  __name: "TableCaption",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), N("caption", {
      class: ne(s(z)("mt-4 text-sm text-muted-foreground", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), E0 = { class: "flex items-center justify-center py-10" }, Dy = /* @__PURE__ */ x({
  __name: "TableEmpty",
  props: {
    class: {},
    colspan: { default: 1 }
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(O0, null, {
      default: y(() => [
        R(k0, D({
          class: s(z)("p-4 whitespace-nowrap align-middle text-sm text-foreground", t.class)
        }, n.value), {
          default: y(() => [
            re("div", E0, [
              _(o.$slots, "default")
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Py = /* @__PURE__ */ x({
  __name: "Tabs",
  props: {
    defaultValue: {},
    orientation: {},
    dir: {},
    activationMode: {},
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = Z(e, t);
    return (r, l) => (h(), C(s(Df), U(W(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Iy = /* @__PURE__ */ x({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(If), D({
      class: s(z)(
        "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        t.class
      )
    }, n.value), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), My = /* @__PURE__ */ x({
  __name: "TabsList",
  props: {
    loop: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(Pf), D(n.value, {
      class: s(z)(
        "inline-flex items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
        t.class
      )
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), A0 = { class: "truncate" }, Ry = /* @__PURE__ */ x({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = Se(n);
    return (a, r) => (h(), C(s(Mf), D(s(o), {
      class: s(z)(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
        t.class
      )
    }), {
      default: y(() => [
        re("span", A0, [
          _(a.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Fy = /* @__PURE__ */ x({
  __name: "Textarea",
  props: {
    class: {},
    defaultValue: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = Al(n, "modelValue", t, {
      passive: !0,
      defaultValue: n.defaultValue
    });
    return (r, l) => Ut((h(), N("textarea", {
      "onUpdate:modelValue": l[0] || (l[0] = (i) => $t(a) ? a.value = i : null),
      class: ne(
        s(z)(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          n.class
        )
      )
    }, null, 2)), [
      [as, s(a)]
    ]);
  }
});
export {
  Y0 as Accord,
  Av as Accordion,
  Tv as AccordionContent,
  Dv as AccordionItem,
  Pv as AccordionTrigger,
  Z0 as AlertDialog,
  ah as AlertDialogAction,
  rh as AlertDialogCancel,
  J0 as AlertDialogContent,
  nh as AlertDialogDescription,
  oh as AlertDialogFooter,
  eh as AlertDialogHeader,
  th as AlertDialogTitle,
  Q0 as AlertDialogTrigger,
  sh as Avatar,
  ih as AvatarFallback,
  lh as AvatarImage,
  uh as Badge,
  El as Button,
  dh as Card,
  ch as CardContent,
  ph as CardDescription,
  fh as CardFooter,
  mh as CardHeader,
  vh as CardTitle,
  gh as Carousel,
  hh as CarouselContent,
  yh as CarouselItem,
  wh as CarouselNext,
  bh as CarouselPrevious,
  Bh as Checkbox,
  v0 as Command,
  Dh as CommandDialog,
  Ph as CommandEmpty,
  Ih as CommandGroup,
  Mh as CommandInput,
  Rh as CommandItem,
  Fh as CommandList,
  Vh as CommandSeparator,
  Lh as CommandShortcut,
  g0 as Dialog,
  $h as DialogClose,
  h0 as DialogContent,
  Eh as DialogDescription,
  Th as DialogFooter,
  kh as DialogHeader,
  Ah as DialogScrollContent,
  Oh as DialogTitle,
  Sh as DialogTrigger,
  zh as DropdownMenu,
  Wh as DropdownMenuCheckboxItem,
  jh as DropdownMenuContent,
  Kh as DropdownMenuGroup,
  Uh as DropdownMenuItem,
  Xh as DropdownMenuLabel,
  ap as DropdownMenuPortal,
  Hh as DropdownMenuRadioGroup,
  Gh as DropdownMenuRadioItem,
  Yh as DropdownMenuSeparator,
  qh as DropdownMenuShortcut,
  Zh as DropdownMenuSub,
  Jh as DropdownMenuSubContent,
  Qh as DropdownMenuSubTrigger,
  Nh as DropdownMenuTrigger,
  G0 as Flasher,
  z0 as Header,
  q0 as Heading,
  ey as Input,
  ty as Label,
  N0 as Main,
  ny as Popover,
  V0 as PopoverAnchor,
  ay as PopoverContent,
  oy as PopoverTrigger,
  ry as Progress,
  sy as Select,
  uy as SelectContent,
  dy as SelectGroup,
  cy as SelectItem,
  py as SelectItemText,
  fy as SelectLabel,
  B0 as SelectScrollDownButton,
  C0 as SelectScrollUpButton,
  my as SelectSeparator,
  iy as SelectTrigger,
  ly as SelectValue,
  vy as Sheet,
  hy as SheetClose,
  yy as SheetContent,
  xy as SheetDescription,
  _y as SheetFooter,
  by as SheetHeader,
  wy as SheetTitle,
  gy as SheetTrigger,
  Cy as Skeleton,
  By as Slider,
  $y as Switch,
  Sy as Table,
  ky as TableBody,
  Ty as TableCaption,
  k0 as TableCell,
  Dy as TableEmpty,
  Ay as TableFooter,
  Oy as TableHead,
  Ey as TableHeader,
  O0 as TableRow,
  Py as Tabs,
  Iy as TabsContent,
  My as TabsList,
  Ry as TabsTrigger,
  Fy as Textarea,
  X0 as Tip,
  mv as Toast,
  W0 as ToastAction,
  Cv as ToastClose,
  Or as ToastDescription,
  $v as ToastProvider,
  Bv as ToastTitle,
  vv as ToastViewport,
  Mm as Toaster,
  Iv as Tooltip,
  Mv as TooltipContent,
  Rv as TooltipProvider,
  Fv as TooltipTrigger,
  L0 as TwoColumnLayout,
  j0 as TwoColumnLayoutSidebar,
  K0 as TwoColumnLayoutSidebarDesktop,
  H0 as TwoColumnLayoutSidebarMobile,
  U0 as TwoColumnLayoutSidebarTrigger,
  Vv as avatarVariant,
  Lv as badgeVariants,
  ja as buttonVariants,
  P0 as preset,
  $0 as sheetVariants,
  Am as toast,
  Sv as toastVariants,
  mo as useCarousel,
  kv as useFlasher,
  bl as useToast
};
