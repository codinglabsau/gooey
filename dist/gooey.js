var Ls = (e) => {
  throw TypeError(e);
};
var sf = (e, t, n) => t.has(e) || Ls("Cannot " + n);
var ga = (e, t, n) => (sf(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Ns = (e, t, n) => t.has(e) ? Ls("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n);
import * as zn from "vue";
import { computed as O, ref as E, shallowRef as Un, watch as te, getCurrentScope as Cl, onScopeDispose as Sl, shallowReadonly as Fn, unref as l, defineComponent as w, createBlock as C, openBlock as y, normalizeProps as Q, guardReactiveProps as ne, withCtx as h, renderSlot as x, mergeProps as k, withModifiers as ke, nextTick as re, onMounted as ue, toRefs as Ce, createVNode as R, watchEffect as Se, normalizeStyle as Pt, createCommentVNode as ce, getCurrentInstance as Qe, toRef as du, camelize as Fo, withKeys as nt, toHandlers as uf, resolveDynamicComponent as at, withDirectives as rt, vShow as $l, h as Je, createTextVNode as ge, watchSyncEffect as cu, toDisplayString as pe, isRef as ct, onBeforeMount as fu, onUnmounted as Ge, createElementBlock as q, Fragment as Ee, renderList as st, useSlots as Ol, Teleport as Ra, onBeforeUnmount as ta, toHandlerKey as pu, inject as na, provide as aa, onBeforeUpdate as df, onUpdated as cf, reactive as Gn, readonly as Mo, Comment as El, cloneVNode as vu, markRaw as mu, createElementVNode as H, vModelSelect as gu, toRaw as ff, mergeDefaults as Al, watchPostEffect as Bl, effectScope as Ro, customRef as yu, normalizeClass as le, isVNode as pf, toValue as ot, withMemo as vf, vModelText as Ht } from "vue";
import { router as mf, usePage as gf } from "@inertiajs/vue3";
var Vs = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function hu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function yf(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function a() {
      return this instanceof a ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(a) {
    var o = Object.getOwnPropertyDescriptor(e, a);
    Object.defineProperty(n, a, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[a];
      }
    });
  }), n;
}
var hf = {
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
}, cr = hf, Pl = {
  whitespace: /\s+/g,
  urlHexPairs: /%[\dA-F]{2}/g,
  quotes: /"/g
};
function bf(e) {
  return e.trim().replace(Pl.whitespace, " ");
}
function wf(e) {
  return encodeURIComponent(e).replace(Pl.urlHexPairs, xf);
}
function _f(e) {
  return Object.keys(cr).forEach(function(t) {
    cr[t].test(e) && (e = e.replace(cr[t], t));
  }), e;
}
function xf(e) {
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
function Jr(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string, but received " + typeof e);
  e.charCodeAt(0) === 65279 && (e = e.slice(1));
  var t = _f(bf(e)).replace(Pl.quotes, "'");
  return "data:image/svg+xml," + wf(t);
}
Jr.toSrcset = function(t) {
  return Jr(t).replace(/ /g, "%20");
};
var Cf = Jr, bu = {}, wu = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return n;
    }
  });
  function t(a, o) {
    return {
      handler: a,
      config: o
    };
  }
  t.withOptions = function(a, o = () => ({})) {
    const r = function(s) {
      return {
        __options: s,
        handler: a(s),
        config: o(s)
      };
    };
    return r.__isOptionsFunction = !0, r.__pluginFunction = a, r.__configFunction = o, r;
  };
  const n = t;
})(wu);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return a;
    }
  });
  const t = /* @__PURE__ */ n(wu);
  function n(o) {
    return o && o.__esModule ? o : {
      default: o
    };
  }
  const a = t.default;
})(bu);
let fr = bu;
var _u = (fr.__esModule ? fr : { default: fr }).default, xu = {}, Cu = {};
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
    return Array.isArray(n) ? n.map((a) => t(a)) : typeof n == "object" && n !== null ? Object.fromEntries(Object.entries(n).map(([a, o]) => [
      a,
      t(o)
    ])) : n;
  }
})(Cu);
var Sf = {
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
      return o;
    }
  });
  const t = Cu, n = /* @__PURE__ */ a(Sf);
  function a(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  const o = (0, t.cloneDeep)(n.default.theme);
})(xu);
let pr = xu;
var $f = (pr.__esModule ? pr : { default: pr }).default, Su = {}, $u = {}, Dl = { exports: {} }, ve = String, Ou = function() {
  return { isColorSupported: !1, reset: ve, bold: ve, dim: ve, italic: ve, underline: ve, inverse: ve, hidden: ve, strikethrough: ve, black: ve, red: ve, green: ve, yellow: ve, blue: ve, magenta: ve, cyan: ve, white: ve, gray: ve, bgBlack: ve, bgRed: ve, bgGreen: ve, bgYellow: ve, bgBlue: ve, bgMagenta: ve, bgCyan: ve, bgWhite: ve, blackBright: ve, redBright: ve, greenBright: ve, yellowBright: ve, blueBright: ve, magentaBright: ve, cyanBright: ve, whiteBright: ve, bgBlackBright: ve, bgRedBright: ve, bgGreenBright: ve, bgYellowBright: ve, bgBlueBright: ve, bgMagentaBright: ve, bgCyanBright: ve, bgWhiteBright: ve };
};
Dl.exports = Ou();
Dl.exports.createColors = Ou;
var Of = Dl.exports;
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
      return s;
    },
    default: function() {
      return i;
    }
  });
  const n = /* @__PURE__ */ a(Of);
  function a(u) {
    return u && u.__esModule ? u : {
      default: u
    };
  }
  let o = /* @__PURE__ */ new Set();
  function r(u, d, c) {
    typeof process < "u" && process.env.JEST_WORKER_ID || c && o.has(c) || (c && o.add(c), console.warn(""), d.forEach((f) => console.warn(u, "-", f)));
  }
  function s(u) {
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
})($u);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return o;
    }
  });
  const t = /* @__PURE__ */ n($u);
  function n(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  function a({ version: r, from: s, to: i }) {
    t.default.warn(`${s}-color-renamed`, [
      `As of Tailwind CSS ${r}, \`${s}\` has been renamed to \`${i}\`.`,
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
      return a({
        version: "v2.2",
        from: "lightBlue",
        to: "sky"
      }), this.sky;
    },
    get warmGray() {
      return a({
        version: "v3.0",
        from: "warmGray",
        to: "stone"
      }), this.stone;
    },
    get trueGray() {
      return a({
        version: "v3.0",
        from: "trueGray",
        to: "neutral"
      }), this.neutral;
    },
    get coolGray() {
      return a({
        version: "v3.0",
        from: "coolGray",
        to: "gray"
      }), this.gray;
    },
    get blueGray() {
      return a({
        version: "v3.0",
        from: "blueGray",
        to: "slate"
      }), this.slate;
    }
  };
})(Su);
let vr = Su;
var Ef = (vr.__esModule ? vr : { default: vr }).default;
const eo = Cf, Af = _u, Eu = $f, Qt = Ef, [Bf, { lineHeight: Pf }] = Eu.fontSize.base, { spacing: Nt, borderWidth: qs, borderRadius: zs } = Eu;
function vn(e, t) {
  return e.replace("<alpha-value>", `var(${t}, 1)`);
}
const Df = Af.withOptions(function(e = { strategy: void 0 }) {
  return function({ addBase: t, addComponents: n, theme: a }) {
    function o(u, d) {
      let c = a(u);
      return !c || c.includes("var(") ? d : c.replace("<alpha-value>", "1");
    }
    const r = e.strategy === void 0 ? ["base", "class"] : [e.strategy], s = [
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
          "border-color": vn(
            a("colors.gray.500", Qt.gray[500]),
            "--tw-border-opacity"
          ),
          "border-width": qs.DEFAULT,
          "border-radius": zs.none,
          "padding-top": Nt[2],
          "padding-right": Nt[3],
          "padding-bottom": Nt[2],
          "padding-left": Nt[3],
          "font-size": Bf,
          "line-height": Pf,
          "--tw-shadow": "0 0 #0000",
          "&:focus": {
            outline: "2px solid transparent",
            "outline-offset": "2px",
            "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)",
            "--tw-ring-offset-width": "0px",
            "--tw-ring-offset-color": "#fff",
            "--tw-ring-color": vn(
              a("colors.blue.600", Qt.blue[600]),
              "--tw-ring-opacity"
            ),
            "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
            "--tw-ring-shadow": "var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
            "box-shadow": "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)",
            "border-color": vn(
              a("colors.blue.600", Qt.blue[600]),
              "--tw-border-opacity"
            )
          }
        }
      },
      {
        base: ["input::placeholder", "textarea::placeholder"],
        class: [".form-input::placeholder", ".form-textarea::placeholder"],
        styles: {
          color: vn(a("colors.gray.500", Qt.gray[500]), "--tw-text-opacity"),
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
          "background-image": `url("${eo(
            `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="${o(
              "colors.gray.500",
              Qt.gray[500]
            )}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 8l4 4 4-4"/></svg>`
          )}")`,
          "background-position": `right ${Nt[2]} center`,
          "background-repeat": "no-repeat",
          "background-size": "1.5em 1.5em",
          "padding-right": Nt[10],
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
          "padding-right": Nt[3],
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
          height: Nt[4],
          width: Nt[4],
          color: vn(a("colors.blue.600", Qt.blue[600]), "--tw-text-opacity"),
          "background-color": "#fff",
          "border-color": vn(
            a("colors.gray.500", Qt.gray[500]),
            "--tw-border-opacity"
          ),
          "border-width": qs.DEFAULT,
          "--tw-shadow": "0 0 #0000"
        }
      },
      {
        base: ["[type='checkbox']"],
        class: [".form-checkbox"],
        styles: {
          "border-radius": zs.none
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
          "--tw-ring-color": vn(
            a("colors.blue.600", Qt.blue[600]),
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
          "background-image": `url("${eo(
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
          "background-image": `url("${eo(
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
          "background-image": `url("${eo(
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
    ], i = (u) => s.map((d) => d[u] === null ? null : { [d[u]]: d.styles }).filter(Boolean);
    r.includes("base") && t(i("base")), r.includes("class") && n(i("class"));
  };
});
var kf = Df;
const Tf = /* @__PURE__ */ hu(kf), If = _u;
function js(e) {
  return Object.fromEntries(
    Object.entries(e).filter(([t]) => t !== "DEFAULT")
  );
}
var Ff = If(
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
        "fade-in": (a) => ({ "--tw-enter-opacity": a }),
        "fade-out": (a) => ({ "--tw-exit-opacity": a })
      },
      { values: n("animationOpacity") }
    ), t(
      {
        "zoom-in": (a) => ({ "--tw-enter-scale": a }),
        "zoom-out": (a) => ({ "--tw-exit-scale": a })
      },
      { values: n("animationScale") }
    ), t(
      {
        "spin-in": (a) => ({ "--tw-enter-rotate": a }),
        "spin-out": (a) => ({ "--tw-exit-rotate": a })
      },
      { values: n("animationRotate") }
    ), t(
      {
        "slide-in-from-top": (a) => ({
          "--tw-enter-translate-y": `-${a}`
        }),
        "slide-in-from-bottom": (a) => ({
          "--tw-enter-translate-y": a
        }),
        "slide-in-from-left": (a) => ({
          "--tw-enter-translate-x": `-${a}`
        }),
        "slide-in-from-right": (a) => ({
          "--tw-enter-translate-x": a
        }),
        "slide-out-to-top": (a) => ({
          "--tw-exit-translate-y": `-${a}`
        }),
        "slide-out-to-bottom": (a) => ({
          "--tw-exit-translate-y": a
        }),
        "slide-out-to-left": (a) => ({
          "--tw-exit-translate-x": `-${a}`
        }),
        "slide-out-to-right": (a) => ({
          "--tw-exit-translate-x": a
        })
      },
      { values: n("animationTranslate") }
    ), t(
      { duration: (a) => ({ animationDuration: a }) },
      { values: js(n("animationDuration")) }
    ), t(
      { delay: (a) => ({ animationDelay: a }) },
      { values: n("animationDelay") }
    ), t(
      { ease: (a) => ({ animationTimingFunction: a }) },
      { values: js(n("animationTimingFunction")) }
    ), e({
      ".running": { animationPlayState: "running" },
      ".paused": { animationPlayState: "paused" }
    }), t(
      { "fill-mode": (a) => ({ animationFillMode: a }) },
      { values: n("animationFillMode") }
    ), t(
      { direction: (a) => ({ animationDirection: a }) },
      { values: n("animationDirection") }
    ), t(
      { repeat: (a) => ({ animationIterationCount: a }) },
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
const Mf = /* @__PURE__ */ hu(Ff), e$ = {
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
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))"
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))"
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
    Mf,
    Tf({
      strategy: "class"
    })
  ]
}, Rf = ["top", "right", "bottom", "left"], on = Math.min, lt = Math.max, Co = Math.round, to = Math.floor, At = (e) => ({
  x: e,
  y: e
}), Lf = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Nf = {
  start: "end",
  end: "start"
};
function Zr(e, t, n) {
  return lt(e, on(t, n));
}
function Wt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ut(e) {
  return e.split("-")[0];
}
function oa(e) {
  return e.split("-")[1];
}
function kl(e) {
  return e === "x" ? "y" : "x";
}
function Tl(e) {
  return e === "y" ? "height" : "width";
}
const Vf = /* @__PURE__ */ new Set(["top", "bottom"]);
function Et(e) {
  return Vf.has(Ut(e)) ? "y" : "x";
}
function Il(e) {
  return kl(Et(e));
}
function qf(e, t, n) {
  n === void 0 && (n = !1);
  const a = oa(e), o = Il(e), r = Tl(o);
  let s = o === "x" ? a === (n ? "end" : "start") ? "right" : "left" : a === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (s = So(s)), [s, So(s)];
}
function zf(e) {
  const t = So(e);
  return [el(e), t, el(t)];
}
function el(e) {
  return e.replace(/start|end/g, (t) => Nf[t]);
}
const Ks = ["left", "right"], Hs = ["right", "left"], jf = ["top", "bottom"], Kf = ["bottom", "top"];
function Hf(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Hs : Ks : t ? Ks : Hs;
    case "left":
    case "right":
      return t ? jf : Kf;
    default:
      return [];
  }
}
function Wf(e, t, n, a) {
  const o = oa(e);
  let r = Hf(Ut(e), n === "start", a);
  return o && (r = r.map((s) => s + "-" + o), t && (r = r.concat(r.map(el)))), r;
}
function So(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Lf[t]);
}
function Uf(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Au(e) {
  return typeof e != "number" ? Uf(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function $o(e) {
  const {
    x: t,
    y: n,
    width: a,
    height: o
  } = e;
  return {
    width: a,
    height: o,
    top: n,
    left: t,
    right: t + a,
    bottom: n + o,
    x: t,
    y: n
  };
}
function Ws(e, t, n) {
  let {
    reference: a,
    floating: o
  } = e;
  const r = Et(t), s = Il(t), i = Tl(s), u = Ut(t), d = r === "y", c = a.x + a.width / 2 - o.width / 2, f = a.y + a.height / 2 - o.height / 2, p = a[i] / 2 - o[i] / 2;
  let m;
  switch (u) {
    case "top":
      m = {
        x: c,
        y: a.y - o.height
      };
      break;
    case "bottom":
      m = {
        x: c,
        y: a.y + a.height
      };
      break;
    case "right":
      m = {
        x: a.x + a.width,
        y: f
      };
      break;
    case "left":
      m = {
        x: a.x - o.width,
        y: f
      };
      break;
    default:
      m = {
        x: a.x,
        y: a.y
      };
  }
  switch (oa(t)) {
    case "start":
      m[s] -= p * (n && d ? -1 : 1);
      break;
    case "end":
      m[s] += p * (n && d ? -1 : 1);
      break;
  }
  return m;
}
const Gf = async (e, t, n) => {
  const {
    placement: a = "bottom",
    strategy: o = "absolute",
    middleware: r = [],
    platform: s
  } = n, i = r.filter(Boolean), u = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let d = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: c,
    y: f
  } = Ws(d, a, u), p = a, m = {}, v = 0;
  for (let g = 0; g < i.length; g++) {
    const {
      name: b,
      fn: _
    } = i[g], {
      x: $,
      y: S,
      data: P,
      reset: A
    } = await _({
      x: c,
      y: f,
      initialPlacement: a,
      placement: p,
      strategy: o,
      middlewareData: m,
      rects: d,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = $ ?? c, f = S ?? f, m = {
      ...m,
      [b]: {
        ...m[b],
        ...P
      }
    }, A && v <= 50 && (v++, typeof A == "object" && (A.placement && (p = A.placement), A.rects && (d = A.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : A.rects), {
      x: c,
      y: f
    } = Ws(d, p, u)), g = -1);
  }
  return {
    x: c,
    y: f,
    placement: p,
    strategy: o,
    middlewareData: m
  };
};
async function Ba(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: a,
    y: o,
    platform: r,
    rects: s,
    elements: i,
    strategy: u
  } = e, {
    boundary: d = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: f = "floating",
    altBoundary: p = !1,
    padding: m = 0
  } = Wt(t, e), v = Au(m), b = i[p ? f === "floating" ? "reference" : "floating" : f], _ = $o(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(b))) == null || n ? b : b.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(i.floating)),
    boundary: d,
    rootBoundary: c,
    strategy: u
  })), $ = f === "floating" ? {
    x: a,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, S = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(i.floating)), P = await (r.isElement == null ? void 0 : r.isElement(S)) ? await (r.getScale == null ? void 0 : r.getScale(S)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, A = $o(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: $,
    offsetParent: S,
    strategy: u
  }) : $);
  return {
    top: (_.top - A.top + v.top) / P.y,
    bottom: (A.bottom - _.bottom + v.bottom) / P.y,
    left: (_.left - A.left + v.left) / P.x,
    right: (A.right - _.right + v.right) / P.x
  };
}
const Yf = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: a,
      placement: o,
      rects: r,
      platform: s,
      elements: i,
      middlewareData: u
    } = t, {
      element: d,
      padding: c = 0
    } = Wt(e, t) || {};
    if (d == null)
      return {};
    const f = Au(c), p = {
      x: n,
      y: a
    }, m = Il(o), v = Tl(m), g = await s.getDimensions(d), b = m === "y", _ = b ? "top" : "left", $ = b ? "bottom" : "right", S = b ? "clientHeight" : "clientWidth", P = r.reference[v] + r.reference[m] - p[m] - r.floating[v], A = p[m] - r.reference[m], D = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(d));
    let B = D ? D[S] : 0;
    (!B || !await (s.isElement == null ? void 0 : s.isElement(D))) && (B = i.floating[S] || r.floating[v]);
    const I = P / 2 - A / 2, F = B / 2 - g[v] / 2 - 1, T = on(f[_], F), L = on(f[$], F), M = T, K = B - g[v] - L, j = B / 2 - g[v] / 2 + I, G = Zr(M, j, K), W = !u.arrow && oa(o) != null && j !== G && r.reference[v] / 2 - (j < M ? T : L) - g[v] / 2 < 0, ee = W ? j < M ? j - M : j - K : 0;
    return {
      [m]: p[m] + ee,
      data: {
        [m]: G,
        centerOffset: j - G - ee,
        ...W && {
          alignmentOffset: ee
        }
      },
      reset: W
    };
  }
}), Xf = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, a;
      const {
        placement: o,
        middlewareData: r,
        rects: s,
        initialPlacement: i,
        platform: u,
        elements: d
      } = t, {
        mainAxis: c = !0,
        crossAxis: f = !0,
        fallbackPlacements: p,
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: g = !0,
        ...b
      } = Wt(e, t);
      if ((n = r.arrow) != null && n.alignmentOffset)
        return {};
      const _ = Ut(o), $ = Et(i), S = Ut(i) === i, P = await (u.isRTL == null ? void 0 : u.isRTL(d.floating)), A = p || (S || !g ? [So(i)] : zf(i)), D = v !== "none";
      !p && D && A.push(...Wf(i, g, v, P));
      const B = [i, ...A], I = await Ba(t, b), F = [];
      let T = ((a = r.flip) == null ? void 0 : a.overflows) || [];
      if (c && F.push(I[_]), f) {
        const j = qf(o, s, P);
        F.push(I[j[0]], I[j[1]]);
      }
      if (T = [...T, {
        placement: o,
        overflows: F
      }], !F.every((j) => j <= 0)) {
        var L, M;
        const j = (((L = r.flip) == null ? void 0 : L.index) || 0) + 1, G = B[j];
        if (G && (!(f === "alignment" ? $ !== Et(G) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        T.every((Z) => Et(Z.placement) === $ ? Z.overflows[0] > 0 : !0)))
          return {
            data: {
              index: j,
              overflows: T
            },
            reset: {
              placement: G
            }
          };
        let W = (M = T.filter((ee) => ee.overflows[0] <= 0).sort((ee, Z) => ee.overflows[1] - Z.overflows[1])[0]) == null ? void 0 : M.placement;
        if (!W)
          switch (m) {
            case "bestFit": {
              var K;
              const ee = (K = T.filter((Z) => {
                if (D) {
                  const z = Et(Z.placement);
                  return z === $ || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  z === "y";
                }
                return !0;
              }).map((Z) => [Z.placement, Z.overflows.filter((z) => z > 0).reduce((z, se) => z + se, 0)]).sort((Z, z) => Z[1] - z[1])[0]) == null ? void 0 : K[0];
              ee && (W = ee);
              break;
            }
            case "initialPlacement":
              W = i;
              break;
          }
        if (o !== W)
          return {
            reset: {
              placement: W
            }
          };
      }
      return {};
    }
  };
};
function Us(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Gs(e) {
  return Rf.some((t) => e[t] >= 0);
}
const Qf = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: a = "referenceHidden",
        ...o
      } = Wt(e, t);
      switch (a) {
        case "referenceHidden": {
          const r = await Ba(t, {
            ...o,
            elementContext: "reference"
          }), s = Us(r, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: Gs(s)
            }
          };
        }
        case "escaped": {
          const r = await Ba(t, {
            ...o,
            altBoundary: !0
          }), s = Us(r, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: Gs(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Bu = /* @__PURE__ */ new Set(["left", "top"]);
async function Jf(e, t) {
  const {
    placement: n,
    platform: a,
    elements: o
  } = e, r = await (a.isRTL == null ? void 0 : a.isRTL(o.floating)), s = Ut(n), i = oa(n), u = Et(n) === "y", d = Bu.has(s) ? -1 : 1, c = r && u ? -1 : 1, f = Wt(t, e);
  let {
    mainAxis: p,
    crossAxis: m,
    alignmentAxis: v
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return i && typeof v == "number" && (m = i === "end" ? v * -1 : v), u ? {
    x: m * c,
    y: p * d
  } : {
    x: p * d,
    y: m * c
  };
}
const Zf = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, a;
      const {
        x: o,
        y: r,
        placement: s,
        middlewareData: i
      } = t, u = await Jf(t, e);
      return s === ((n = i.offset) == null ? void 0 : n.placement) && (a = i.arrow) != null && a.alignmentOffset ? {} : {
        x: o + u.x,
        y: r + u.y,
        data: {
          ...u,
          placement: s
        }
      };
    }
  };
}, ep = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: a,
        placement: o
      } = t, {
        mainAxis: r = !0,
        crossAxis: s = !1,
        limiter: i = {
          fn: (b) => {
            let {
              x: _,
              y: $
            } = b;
            return {
              x: _,
              y: $
            };
          }
        },
        ...u
      } = Wt(e, t), d = {
        x: n,
        y: a
      }, c = await Ba(t, u), f = Et(Ut(o)), p = kl(f);
      let m = d[p], v = d[f];
      if (r) {
        const b = p === "y" ? "top" : "left", _ = p === "y" ? "bottom" : "right", $ = m + c[b], S = m - c[_];
        m = Zr($, m, S);
      }
      if (s) {
        const b = f === "y" ? "top" : "left", _ = f === "y" ? "bottom" : "right", $ = v + c[b], S = v - c[_];
        v = Zr($, v, S);
      }
      const g = i.fn({
        ...t,
        [p]: m,
        [f]: v
      });
      return {
        ...g,
        data: {
          x: g.x - n,
          y: g.y - a,
          enabled: {
            [p]: r,
            [f]: s
          }
        }
      };
    }
  };
}, tp = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: a,
        placement: o,
        rects: r,
        middlewareData: s
      } = t, {
        offset: i = 0,
        mainAxis: u = !0,
        crossAxis: d = !0
      } = Wt(e, t), c = {
        x: n,
        y: a
      }, f = Et(o), p = kl(f);
      let m = c[p], v = c[f];
      const g = Wt(i, t), b = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (u) {
        const S = p === "y" ? "height" : "width", P = r.reference[p] - r.floating[S] + b.mainAxis, A = r.reference[p] + r.reference[S] - b.mainAxis;
        m < P ? m = P : m > A && (m = A);
      }
      if (d) {
        var _, $;
        const S = p === "y" ? "width" : "height", P = Bu.has(Ut(o)), A = r.reference[f] - r.floating[S] + (P && ((_ = s.offset) == null ? void 0 : _[f]) || 0) + (P ? 0 : b.crossAxis), D = r.reference[f] + r.reference[S] + (P ? 0 : (($ = s.offset) == null ? void 0 : $[f]) || 0) - (P ? b.crossAxis : 0);
        v < A ? v = A : v > D && (v = D);
      }
      return {
        [p]: m,
        [f]: v
      };
    }
  };
}, np = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, a;
      const {
        placement: o,
        rects: r,
        platform: s,
        elements: i
      } = t, {
        apply: u = () => {
        },
        ...d
      } = Wt(e, t), c = await Ba(t, d), f = Ut(o), p = oa(o), m = Et(o) === "y", {
        width: v,
        height: g
      } = r.floating;
      let b, _;
      f === "top" || f === "bottom" ? (b = f, _ = p === (await (s.isRTL == null ? void 0 : s.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (_ = f, b = p === "end" ? "top" : "bottom");
      const $ = g - c.top - c.bottom, S = v - c.left - c.right, P = on(g - c[b], $), A = on(v - c[_], S), D = !t.middlewareData.shift;
      let B = P, I = A;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (I = S), (a = t.middlewareData.shift) != null && a.enabled.y && (B = $), D && !p) {
        const T = lt(c.left, 0), L = lt(c.right, 0), M = lt(c.top, 0), K = lt(c.bottom, 0);
        m ? I = v - 2 * (T !== 0 || L !== 0 ? T + L : lt(c.left, c.right)) : B = g - 2 * (M !== 0 || K !== 0 ? M + K : lt(c.top, c.bottom));
      }
      await u({
        ...t,
        availableWidth: I,
        availableHeight: B
      });
      const F = await s.getDimensions(i.floating);
      return v !== F.width || g !== F.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Lo() {
  return typeof window < "u";
}
function _n(e) {
  return Fl(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function it(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Dt(e) {
  var t;
  return (t = (Fl(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Fl(e) {
  return Lo() ? e instanceof Node || e instanceof it(e).Node : !1;
}
function _t(e) {
  return Lo() ? e instanceof Element || e instanceof it(e).Element : !1;
}
function Bt(e) {
  return Lo() ? e instanceof HTMLElement || e instanceof it(e).HTMLElement : !1;
}
function Ys(e) {
  return !Lo() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof it(e).ShadowRoot;
}
const ap = /* @__PURE__ */ new Set(["inline", "contents"]);
function La(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: a,
    display: o
  } = xt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + a + n) && !ap.has(o);
}
const op = /* @__PURE__ */ new Set(["table", "td", "th"]);
function rp(e) {
  return op.has(_n(e));
}
const lp = [":popover-open", ":modal"];
function No(e) {
  return lp.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const sp = ["transform", "translate", "scale", "rotate", "perspective"], ip = ["transform", "translate", "scale", "rotate", "perspective", "filter"], up = ["paint", "layout", "strict", "content"];
function Ml(e) {
  const t = Rl(), n = _t(e) ? xt(e) : e;
  return sp.some((a) => n[a] ? n[a] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ip.some((a) => (n.willChange || "").includes(a)) || up.some((a) => (n.contain || "").includes(a));
}
function dp(e) {
  let t = rn(e);
  for (; Bt(t) && !Yn(t); ) {
    if (Ml(t))
      return t;
    if (No(t))
      return null;
    t = rn(t);
  }
  return null;
}
function Rl() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const cp = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Yn(e) {
  return cp.has(_n(e));
}
function xt(e) {
  return it(e).getComputedStyle(e);
}
function Vo(e) {
  return _t(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function rn(e) {
  if (_n(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Ys(e) && e.host || // Fallback.
    Dt(e)
  );
  return Ys(t) ? t.host : t;
}
function Pu(e) {
  const t = rn(e);
  return Yn(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Bt(t) && La(t) ? t : Pu(t);
}
function Pa(e, t, n) {
  var a;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Pu(e), r = o === ((a = e.ownerDocument) == null ? void 0 : a.body), s = it(o);
  if (r) {
    const i = tl(s);
    return t.concat(s, s.visualViewport || [], La(o) ? o : [], i && n ? Pa(i) : []);
  }
  return t.concat(o, Pa(o, [], n));
}
function tl(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Du(e) {
  const t = xt(e);
  let n = parseFloat(t.width) || 0, a = parseFloat(t.height) || 0;
  const o = Bt(e), r = o ? e.offsetWidth : n, s = o ? e.offsetHeight : a, i = Co(n) !== r || Co(a) !== s;
  return i && (n = r, a = s), {
    width: n,
    height: a,
    $: i
  };
}
function Ll(e) {
  return _t(e) ? e : e.contextElement;
}
function jn(e) {
  const t = Ll(e);
  if (!Bt(t))
    return At(1);
  const n = t.getBoundingClientRect(), {
    width: a,
    height: o,
    $: r
  } = Du(t);
  let s = (r ? Co(n.width) : n.width) / a, i = (r ? Co(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: s,
    y: i
  };
}
const fp = /* @__PURE__ */ At(0);
function ku(e) {
  const t = it(e);
  return !Rl() || !t.visualViewport ? fp : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function pp(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== it(e) ? !1 : t;
}
function hn(e, t, n, a) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), r = Ll(e);
  let s = At(1);
  t && (a ? _t(a) && (s = jn(a)) : s = jn(e));
  const i = pp(r, n, a) ? ku(r) : At(0);
  let u = (o.left + i.x) / s.x, d = (o.top + i.y) / s.y, c = o.width / s.x, f = o.height / s.y;
  if (r) {
    const p = it(r), m = a && _t(a) ? it(a) : a;
    let v = p, g = tl(v);
    for (; g && a && m !== v; ) {
      const b = jn(g), _ = g.getBoundingClientRect(), $ = xt(g), S = _.left + (g.clientLeft + parseFloat($.paddingLeft)) * b.x, P = _.top + (g.clientTop + parseFloat($.paddingTop)) * b.y;
      u *= b.x, d *= b.y, c *= b.x, f *= b.y, u += S, d += P, v = it(g), g = tl(v);
    }
  }
  return $o({
    width: c,
    height: f,
    x: u,
    y: d
  });
}
function qo(e, t) {
  const n = Vo(e).scrollLeft;
  return t ? t.left + n : hn(Dt(e)).left + n;
}
function Tu(e, t) {
  const n = e.getBoundingClientRect(), a = n.left + t.scrollLeft - qo(e, n), o = n.top + t.scrollTop;
  return {
    x: a,
    y: o
  };
}
function vp(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: a,
    strategy: o
  } = e;
  const r = o === "fixed", s = Dt(a), i = t ? No(t.floating) : !1;
  if (a === s || i && r)
    return n;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = At(1);
  const c = At(0), f = Bt(a);
  if ((f || !f && !r) && ((_n(a) !== "body" || La(s)) && (u = Vo(a)), Bt(a))) {
    const m = hn(a);
    d = jn(a), c.x = m.x + a.clientLeft, c.y = m.y + a.clientTop;
  }
  const p = s && !f && !r ? Tu(s, u) : At(0);
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - u.scrollLeft * d.x + c.x + p.x,
    y: n.y * d.y - u.scrollTop * d.y + c.y + p.y
  };
}
function mp(e) {
  return Array.from(e.getClientRects());
}
function gp(e) {
  const t = Dt(e), n = Vo(e), a = e.ownerDocument.body, o = lt(t.scrollWidth, t.clientWidth, a.scrollWidth, a.clientWidth), r = lt(t.scrollHeight, t.clientHeight, a.scrollHeight, a.clientHeight);
  let s = -n.scrollLeft + qo(e);
  const i = -n.scrollTop;
  return xt(a).direction === "rtl" && (s += lt(t.clientWidth, a.clientWidth) - o), {
    width: o,
    height: r,
    x: s,
    y: i
  };
}
const Xs = 25;
function yp(e, t) {
  const n = it(e), a = Dt(e), o = n.visualViewport;
  let r = a.clientWidth, s = a.clientHeight, i = 0, u = 0;
  if (o) {
    r = o.width, s = o.height;
    const c = Rl();
    (!c || c && t === "fixed") && (i = o.offsetLeft, u = o.offsetTop);
  }
  const d = qo(a);
  if (d <= 0) {
    const c = a.ownerDocument, f = c.body, p = getComputedStyle(f), m = c.compatMode === "CSS1Compat" && parseFloat(p.marginLeft) + parseFloat(p.marginRight) || 0, v = Math.abs(a.clientWidth - f.clientWidth - m);
    v <= Xs && (r -= v);
  } else d <= Xs && (r += d);
  return {
    width: r,
    height: s,
    x: i,
    y: u
  };
}
const hp = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function bp(e, t) {
  const n = hn(e, !0, t === "fixed"), a = n.top + e.clientTop, o = n.left + e.clientLeft, r = Bt(e) ? jn(e) : At(1), s = e.clientWidth * r.x, i = e.clientHeight * r.y, u = o * r.x, d = a * r.y;
  return {
    width: s,
    height: i,
    x: u,
    y: d
  };
}
function Qs(e, t, n) {
  let a;
  if (t === "viewport")
    a = yp(e, n);
  else if (t === "document")
    a = gp(Dt(e));
  else if (_t(t))
    a = bp(t, n);
  else {
    const o = ku(e);
    a = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return $o(a);
}
function Iu(e, t) {
  const n = rn(e);
  return n === t || !_t(n) || Yn(n) ? !1 : xt(n).position === "fixed" || Iu(n, t);
}
function wp(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let a = Pa(e, [], !1).filter((i) => _t(i) && _n(i) !== "body"), o = null;
  const r = xt(e).position === "fixed";
  let s = r ? rn(e) : e;
  for (; _t(s) && !Yn(s); ) {
    const i = xt(s), u = Ml(s);
    !u && i.position === "fixed" && (o = null), (r ? !u && !o : !u && i.position === "static" && !!o && hp.has(o.position) || La(s) && !u && Iu(e, s)) ? a = a.filter((c) => c !== s) : o = i, s = rn(s);
  }
  return t.set(e, a), a;
}
function _p(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: a,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? No(t) ? [] : wp(t, this._c) : [].concat(n), a], i = s[0], u = s.reduce((d, c) => {
    const f = Qs(t, c, o);
    return d.top = lt(f.top, d.top), d.right = on(f.right, d.right), d.bottom = on(f.bottom, d.bottom), d.left = lt(f.left, d.left), d;
  }, Qs(t, i, o));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function xp(e) {
  const {
    width: t,
    height: n
  } = Du(e);
  return {
    width: t,
    height: n
  };
}
function Cp(e, t, n) {
  const a = Bt(t), o = Dt(t), r = n === "fixed", s = hn(e, !0, r, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = At(0);
  function d() {
    u.x = qo(o);
  }
  if (a || !a && !r)
    if ((_n(t) !== "body" || La(o)) && (i = Vo(t)), a) {
      const m = hn(t, !0, r, t);
      u.x = m.x + t.clientLeft, u.y = m.y + t.clientTop;
    } else o && d();
  r && !a && o && d();
  const c = o && !a && !r ? Tu(o, i) : At(0), f = s.left + i.scrollLeft - u.x - c.x, p = s.top + i.scrollTop - u.y - c.y;
  return {
    x: f,
    y: p,
    width: s.width,
    height: s.height
  };
}
function mr(e) {
  return xt(e).position === "static";
}
function Js(e, t) {
  if (!Bt(e) || xt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Dt(e) === n && (n = n.ownerDocument.body), n;
}
function Fu(e, t) {
  const n = it(e);
  if (No(e))
    return n;
  if (!Bt(e)) {
    let o = rn(e);
    for (; o && !Yn(o); ) {
      if (_t(o) && !mr(o))
        return o;
      o = rn(o);
    }
    return n;
  }
  let a = Js(e, t);
  for (; a && rp(a) && mr(a); )
    a = Js(a, t);
  return a && Yn(a) && mr(a) && !Ml(a) ? n : a || dp(e) || n;
}
const Sp = async function(e) {
  const t = this.getOffsetParent || Fu, n = this.getDimensions, a = await n(e.floating);
  return {
    reference: Cp(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: a.width,
      height: a.height
    }
  };
};
function $p(e) {
  return xt(e).direction === "rtl";
}
const Op = {
  convertOffsetParentRelativeRectToViewportRelativeRect: vp,
  getDocumentElement: Dt,
  getClippingRect: _p,
  getOffsetParent: Fu,
  getElementRects: Sp,
  getClientRects: mp,
  getDimensions: xp,
  getScale: jn,
  isElement: _t,
  isRTL: $p
};
function Mu(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Ep(e, t) {
  let n = null, a;
  const o = Dt(e);
  function r() {
    var i;
    clearTimeout(a), (i = n) == null || i.disconnect(), n = null;
  }
  function s(i, u) {
    i === void 0 && (i = !1), u === void 0 && (u = 1), r();
    const d = e.getBoundingClientRect(), {
      left: c,
      top: f,
      width: p,
      height: m
    } = d;
    if (i || t(), !p || !m)
      return;
    const v = to(f), g = to(o.clientWidth - (c + p)), b = to(o.clientHeight - (f + m)), _ = to(c), S = {
      rootMargin: -v + "px " + -g + "px " + -b + "px " + -_ + "px",
      threshold: lt(0, on(1, u)) || 1
    };
    let P = !0;
    function A(D) {
      const B = D[0].intersectionRatio;
      if (B !== u) {
        if (!P)
          return s();
        B ? s(!1, B) : a = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      B === 1 && !Mu(d, e.getBoundingClientRect()) && s(), P = !1;
    }
    try {
      n = new IntersectionObserver(A, {
        ...S,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(A, S);
    }
    n.observe(e);
  }
  return s(!0), r;
}
function Ru(e, t, n, a) {
  a === void 0 && (a = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: r = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = a, d = Ll(e), c = o || r ? [...d ? Pa(d) : [], ...Pa(t)] : [];
  c.forEach((_) => {
    o && _.addEventListener("scroll", n, {
      passive: !0
    }), r && _.addEventListener("resize", n);
  });
  const f = d && i ? Ep(d, n) : null;
  let p = -1, m = null;
  s && (m = new ResizeObserver((_) => {
    let [$] = _;
    $ && $.target === d && m && (m.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var S;
      (S = m) == null || S.observe(t);
    })), n();
  }), d && !u && m.observe(d), m.observe(t));
  let v, g = u ? hn(e) : null;
  u && b();
  function b() {
    const _ = hn(e);
    g && !Mu(g, _) && n(), g = _, v = requestAnimationFrame(b);
  }
  return n(), () => {
    var _;
    c.forEach(($) => {
      o && $.removeEventListener("scroll", n), r && $.removeEventListener("resize", n);
    }), f == null || f(), (_ = m) == null || _.disconnect(), m = null, u && cancelAnimationFrame(v);
  };
}
const Lu = Zf, Nu = ep, Oo = Xf, Vu = np, qu = Qf, Ap = Yf, zu = tp, Bp = (e, t, n) => {
  const a = /* @__PURE__ */ new Map(), o = {
    platform: Op,
    ...n
  }, r = {
    ...o.platform,
    _c: a
  };
  return Gf(e, t, {
    ...o,
    platform: r
  });
};
function Pp(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function nl(e) {
  if (Pp(e)) {
    const t = e.$el;
    return Fl(t) && _n(t) === "#comment" ? null : t;
  }
  return e;
}
function Vn(e) {
  return typeof e == "function" ? e() : l(e);
}
function ju(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const n = nl(Vn(e.element));
      return n == null ? {} : Ap({
        element: n,
        padding: e.padding
      }).fn(t);
    }
  };
}
function Ku(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Zs(e, t) {
  const n = Ku(e);
  return Math.round(t * n) / n;
}
function Hu(e, t, n) {
  n === void 0 && (n = {});
  const a = n.whileElementsMounted, o = O(() => {
    var B;
    return (B = Vn(n.open)) != null ? B : !0;
  }), r = O(() => Vn(n.middleware)), s = O(() => {
    var B;
    return (B = Vn(n.placement)) != null ? B : "bottom";
  }), i = O(() => {
    var B;
    return (B = Vn(n.strategy)) != null ? B : "absolute";
  }), u = O(() => {
    var B;
    return (B = Vn(n.transform)) != null ? B : !0;
  }), d = O(() => nl(e.value)), c = O(() => nl(t.value)), f = E(0), p = E(0), m = E(i.value), v = E(s.value), g = Un({}), b = E(!1), _ = O(() => {
    const B = {
      position: m.value,
      left: "0",
      top: "0"
    };
    if (!c.value)
      return B;
    const I = Zs(c.value, f.value), F = Zs(c.value, p.value);
    return u.value ? {
      ...B,
      transform: "translate(" + I + "px, " + F + "px)",
      ...Ku(c.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: m.value,
      left: I + "px",
      top: F + "px"
    };
  });
  let $;
  function S() {
    if (d.value == null || c.value == null)
      return;
    const B = o.value;
    Bp(d.value, c.value, {
      middleware: r.value,
      placement: s.value,
      strategy: i.value
    }).then((I) => {
      f.value = I.x, p.value = I.y, m.value = I.strategy, v.value = I.placement, g.value = I.middlewareData, b.value = B !== !1;
    });
  }
  function P() {
    typeof $ == "function" && ($(), $ = void 0);
  }
  function A() {
    if (P(), a === void 0) {
      S();
      return;
    }
    if (d.value != null && c.value != null) {
      $ = a(d.value, c.value, S);
      return;
    }
  }
  function D() {
    o.value || (b.value = !1);
  }
  return te([r, s, i, o], S, {
    flush: "sync"
  }), te([d, c], A, {
    flush: "sync"
  }), te(o, D, {
    flush: "sync"
  }), Cl() && Sl(P), {
    x: Fn(f),
    y: Fn(p),
    strategy: Fn(m),
    placement: Fn(v),
    middlewareData: Fn(g),
    isPositioned: Fn(b),
    floatingStyles: _,
    update: S
  };
}
function we(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, a = Symbol(n);
  return [(o) => {
    const r = na(a, o);
    if (r || r === null)
      return r;
    throw new Error(
      `Injection \`${a.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (o) => (aa(a, o), o)];
}
function Nl(e, t, n) {
  const a = n.originalEvent.target, o = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && a.addEventListener(e, t, { once: !0 }), a.dispatchEvent(o);
}
function Eo(e, t = Number.NEGATIVE_INFINITY, n = Number.POSITIVE_INFINITY) {
  return Math.min(n, Math.max(t, e));
}
function Dp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var kp = function e(t, n) {
  if (t === n) return !0;
  if (t && n && typeof t == "object" && typeof n == "object") {
    if (t.constructor !== n.constructor) return !1;
    var a, o, r;
    if (Array.isArray(t)) {
      if (a = t.length, a != n.length) return !1;
      for (o = a; o-- !== 0; )
        if (!e(t[o], n[o])) return !1;
      return !0;
    }
    if (t.constructor === RegExp) return t.source === n.source && t.flags === n.flags;
    if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === n.valueOf();
    if (t.toString !== Object.prototype.toString) return t.toString() === n.toString();
    if (r = Object.keys(t), a = r.length, a !== Object.keys(n).length) return !1;
    for (o = a; o-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(n, r[o])) return !1;
    for (o = a; o-- !== 0; ) {
      var s = r[o];
      if (!e(t[s], n[s])) return !1;
    }
    return !0;
  }
  return t !== t && n !== n;
};
const gn = /* @__PURE__ */ Dp(kp);
function Kn(e) {
  return e == null;
}
function Tp(e, t) {
  var n;
  const a = Un();
  return Se(() => {
    a.value = e();
  }, {
    ...t,
    flush: (n = void 0) != null ? n : "sync"
  }), Mo(a);
}
function xn(e) {
  return Cl() ? (Sl(e), !0) : !1;
}
function Ip() {
  const e = /* @__PURE__ */ new Set(), t = (n) => {
    e.delete(n);
  };
  return {
    on: (n) => {
      e.add(n);
      const a = () => t(n);
      return xn(a), {
        off: a
      };
    },
    off: t,
    trigger: (...n) => Promise.all(Array.from(e).map((a) => a(...n)))
  };
}
function Fp(e) {
  let t = !1, n;
  const a = Ro(!0);
  return (...o) => (t || (n = a.run(() => e(...o)), t = !0), n);
}
function Wu(e) {
  let t = 0, n, a;
  const o = () => {
    t -= 1, a && t <= 0 && (a.stop(), n = void 0, a = void 0);
  };
  return (...r) => (t += 1, n || (a = Ro(!0), n = a.run(() => e(...r))), xn(o), n);
}
function Kt(e) {
  return typeof e == "function" ? e() : l(e);
}
const kt = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Mp = (e) => typeof e < "u", Rp = (e) => e != null, Lp = Object.prototype.toString, Np = (e) => Lp.call(e) === "[object Object]", Uu = () => {
}, ei = /* @__PURE__ */ Vp();
function Vp() {
  var e, t;
  return kt && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function qp(e) {
  return Qe();
}
function Gu(e, t = 1e4) {
  return yu((n, a) => {
    let o = Kt(e), r;
    const s = () => setTimeout(() => {
      o = Kt(e), a();
    }, Kt(t));
    return xn(() => {
      clearTimeout(r);
    }), {
      get() {
        return n(), o;
      },
      set(i) {
        o = i, a(), clearTimeout(r), r = s();
      }
    };
  });
}
function zp(e, t) {
  qp() && ta(e, t);
}
function Vl(e, t, n = {}) {
  const {
    immediate: a = !0
  } = n, o = E(!1);
  let r = null;
  function s() {
    r && (clearTimeout(r), r = null);
  }
  function i() {
    o.value = !1, s();
  }
  function u(...d) {
    s(), o.value = !0, r = setTimeout(() => {
      o.value = !1, r = null, e(...d);
    }, Kt(t));
  }
  return a && (o.value = !0, kt && u()), xn(i), {
    isPending: Mo(o),
    start: u,
    stop: i
  };
}
function jp(e = 1e3, t = {}) {
  const {
    controls: n = !1,
    callback: a
  } = t, o = Vl(
    a ?? Uu,
    e,
    t
  ), r = O(() => !o.isPending.value);
  return n ? {
    ready: r,
    ...o
  } : r;
}
function ft(e) {
  var t;
  const n = Kt(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Na = kt ? window : void 0;
function Xn(...e) {
  let t, n, a, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, a, o] = e, t = Na) : [t, n, a, o] = e, !t)
    return Uu;
  Array.isArray(n) || (n = [n]), Array.isArray(a) || (a = [a]);
  const r = [], s = () => {
    r.forEach((c) => c()), r.length = 0;
  }, i = (c, f, p, m) => (c.addEventListener(f, p, m), () => c.removeEventListener(f, p, m)), u = te(
    () => [ft(t), Kt(o)],
    ([c, f]) => {
      if (s(), !c)
        return;
      const p = Np(f) ? { ...f } : f;
      r.push(
        ...n.flatMap((m) => a.map((v) => i(c, m, v, p)))
      );
    },
    { immediate: !0, flush: "post" }
  ), d = () => {
    u(), s();
  };
  return xn(d), d;
}
function Kp(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function ql(...e) {
  let t, n, a = {};
  e.length === 3 ? (t = e[0], n = e[1], a = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], a = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: o = Na,
    eventName: r = "keydown",
    passive: s = !1,
    dedupe: i = !1
  } = a, u = Kp(t);
  return Xn(o, r, (d) => {
    d.repeat && Kt(i) || u(d) && n(d);
  }, s);
}
function zl() {
  const e = E(!1), t = Qe();
  return t && ue(() => {
    e.value = !0;
  }, t), e;
}
function Hp(e) {
  const t = zl();
  return O(() => (t.value, !!e()));
}
function Wp(e, t, n = {}) {
  const { window: a = Na, ...o } = n;
  let r;
  const s = Hp(() => a && "MutationObserver" in a), i = () => {
    r && (r.disconnect(), r = void 0);
  }, u = O(() => {
    const p = Kt(e), m = (Array.isArray(p) ? p : [p]).map(ft).filter(Rp);
    return new Set(m);
  }), d = te(
    () => u.value,
    (p) => {
      i(), s.value && p.size && (r = new MutationObserver(t), p.forEach((m) => r.observe(m, o)));
    },
    { immediate: !0, flush: "post" }
  ), c = () => r == null ? void 0 : r.takeRecords(), f = () => {
    i(), d();
  };
  return xn(f), {
    isSupported: s,
    stop: f,
    takeRecords: c
  };
}
function Yu(e, t = {}) {
  const {
    immediate: n = !0,
    fpsLimit: a = void 0,
    window: o = Na
  } = t, r = E(!1), s = a ? 1e3 / a : null;
  let i = 0, u = null;
  function d(p) {
    if (!r.value || !o)
      return;
    i || (i = p);
    const m = p - i;
    if (s && m < s) {
      u = o.requestAnimationFrame(d);
      return;
    }
    i = p, e({ delta: m, timestamp: p }), u = o.requestAnimationFrame(d);
  }
  function c() {
    !r.value && o && (r.value = !0, i = 0, u = o.requestAnimationFrame(d));
  }
  function f() {
    r.value = !1, u != null && o && (o.cancelAnimationFrame(u), u = null);
  }
  return n && c(), xn(f), {
    isActive: Mo(r),
    pause: f,
    resume: c
  };
}
function Up(e) {
  return JSON.parse(JSON.stringify(e));
}
function De(e, t, n, a = {}) {
  var o, r, s;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: c = !1,
    defaultValue: f,
    shouldEmit: p
  } = a, m = Qe(), v = n || (m == null ? void 0 : m.emit) || ((o = m == null ? void 0 : m.$emit) == null ? void 0 : o.bind(m)) || ((s = (r = m == null ? void 0 : m.proxy) == null ? void 0 : r.$emit) == null ? void 0 : s.bind(m == null ? void 0 : m.proxy));
  let g = d;
  t || (t = "modelValue"), g = g || `update:${t.toString()}`;
  const b = (S) => i ? typeof i == "function" ? i(S) : Up(S) : S, _ = () => Mp(e[t]) ? b(e[t]) : f, $ = (S) => {
    p ? p(S) && v(g, S) : v(g, S);
  };
  if (u) {
    const S = _(), P = E(S);
    let A = !1;
    return te(
      () => e[t],
      (D) => {
        A || (A = !0, P.value = b(D), re(() => A = !1));
      }
    ), te(
      P,
      (D) => {
        !A && (D !== e[t] || c) && $(D);
      },
      { deep: c }
    ), P;
  } else
    return O({
      get() {
        return _();
      },
      set(S) {
        $(S);
      }
    });
}
function zo(e) {
  return e ? e.flatMap((t) => t.type === Ee ? zo(t.children) : [t]) : [];
}
function Ke() {
  let e = document.activeElement;
  if (e == null)
    return null;
  for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null; )
    e = e.shadowRoot.activeElement;
  return e;
}
const Gp = ["INPUT", "TEXTAREA"];
function Xu(e, t, n, a = {}) {
  if (!t || a.enableIgnoredElement && Gp.includes(t.nodeName))
    return null;
  const {
    arrowKeyOptions: o = "both",
    attributeName: r = "[data-radix-vue-collection-item]",
    itemsArray: s = [],
    loop: i = !0,
    dir: u = "ltr",
    preventScroll: d = !0,
    focus: c = !1
  } = a, [f, p, m, v, g, b] = [
    e.key === "ArrowRight",
    e.key === "ArrowLeft",
    e.key === "ArrowUp",
    e.key === "ArrowDown",
    e.key === "Home",
    e.key === "End"
  ], _ = m || v, $ = f || p;
  if (!g && !b && (!_ && !$ || o === "vertical" && $ || o === "horizontal" && _))
    return null;
  const S = n ? Array.from(n.querySelectorAll(r)) : s;
  if (!S.length)
    return null;
  d && e.preventDefault();
  let P = null;
  return $ || _ ? P = Qu(S, t, {
    goForward: _ ? v : u === "ltr" ? f : p,
    loop: i
  }) : g ? P = S.at(0) || null : b && (P = S.at(-1) || null), c && (P == null || P.focus()), P;
}
function Qu(e, t, n, a = e.length) {
  if (--a === 0)
    return null;
  const o = e.indexOf(t), r = n.goForward ? o + 1 : o - 1;
  if (!n.loop && (r < 0 || r >= e.length))
    return null;
  const s = (r + e.length) % e.length, i = e[s];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? Qu(
    e,
    i,
    n,
    a
  ) : i : null;
}
function gr(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function al(e, t, n = ".", a) {
  if (!gr(t))
    return al(e, {}, n);
  const o = Object.assign({}, t);
  for (const r in e) {
    if (r === "__proto__" || r === "constructor")
      continue;
    const s = e[r];
    s != null && (Array.isArray(s) && Array.isArray(o[r]) ? o[r] = [...s, ...o[r]] : gr(s) && gr(o[r]) ? o[r] = al(
      s,
      o[r],
      (n ? `${n}.` : "") + r.toString()
    ) : o[r] = s);
  }
  return o;
}
function Yp(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, a) => al(n, a, ""), {})
  );
}
const Xp = Yp(), [jo] = we("ConfigProvider");
let Qp = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", Jp = (e = 21) => {
  let t = "", n = e;
  for (; n--; )
    t += Qp[Math.random() * 64 | 0];
  return t;
};
const Zp = Wu(() => {
  const e = E(/* @__PURE__ */ new Map()), t = E(), n = O(() => {
    for (const s of e.value.values())
      if (s)
        return !0;
    return !1;
  }), a = jo({
    scrollBody: E(!0)
  });
  let o = null;
  const r = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", ei && (o == null || o()), t.value = void 0;
  };
  return te(n, (s, i) => {
    var u;
    if (!kt)
      return;
    if (!s) {
      i && r();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const d = window.innerWidth - document.documentElement.clientWidth, c = { padding: d, margin: 0 }, f = (u = a.scrollBody) != null && u.value ? typeof a.scrollBody.value == "object" ? Xp({
      padding: a.scrollBody.value.padding === !0 ? d : a.scrollBody.value.padding,
      margin: a.scrollBody.value.margin === !0 ? d : a.scrollBody.value.margin
    }, c) : c : { padding: 0, margin: 0 };
    d > 0 && (document.body.style.paddingRight = typeof f.padding == "number" ? `${f.padding}px` : String(f.padding), document.body.style.marginRight = typeof f.margin == "number" ? `${f.margin}px` : String(f.margin), document.body.style.setProperty("--scrollbar-width", `${d}px`), document.body.style.overflow = "hidden"), ei && (o = Xn(
      document,
      "touchmove",
      (p) => ev(p),
      { passive: !1 }
    )), re(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), e;
});
function Va(e) {
  const t = Jp(6), n = Zp();
  n.value.set(t, e ?? !1);
  const a = O({
    get: () => n.value.get(t) ?? !1,
    set: (o) => n.value.set(t, o)
  });
  return zp(() => {
    n.value.delete(t);
  }), a;
}
function Ju(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight)
    return !0;
  {
    const n = e.parentNode;
    return !(n instanceof Element) || n.tagName === "BODY" ? !1 : Ju(n);
  }
}
function ev(e) {
  const t = e || window.event, n = t.target;
  return n instanceof Element && Ju(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
const tv = "data-radix-vue-collection-item";
function ra(e, t = tv) {
  const n = Symbol();
  return { createCollection: (a) => {
    const o = E([]);
    function r() {
      const s = ft(a);
      return s ? o.value = Array.from(
        s.querySelectorAll(`[${t}]:not([data-disabled])`)
      ) : o.value = [];
    }
    return df(() => {
      o.value = [];
    }), ue(r), cf(r), te(() => a == null ? void 0 : a.value, r, { immediate: !0 }), aa(n, o), o;
  }, injectCollection: () => na(n, E([])) };
}
function sn(e) {
  const t = jo({
    dir: E("ltr")
  });
  return O(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.dir) == null ? void 0 : n.value) || "ltr";
  });
}
function un(e) {
  const t = Qe(), n = t == null ? void 0 : t.type.emits, a = {};
  return n != null && n.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), n == null || n.forEach((o) => {
    a[pu(Fo(o))] = (...r) => e(o, ...r);
  }), a;
}
let yr = 0;
function jl() {
  Se((e) => {
    if (!kt)
      return;
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? ti()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? ti()
    ), yr++, e(() => {
      yr === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((n) => n.remove()), yr--;
    });
  });
}
function ti() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
function Ko(e) {
  return O(() => {
    var t;
    return Kt(e) ? !!((t = ft(e)) != null && t.closest("form")) : !0;
  });
}
function He(e) {
  const t = Qe(), n = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((o, r) => {
    const s = (t == null ? void 0 : t.type.props[r]).default;
    return s !== void 0 && (o[r] = s), o;
  }, {}), a = du(e);
  return O(() => {
    const o = {}, r = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(r).forEach((s) => {
      o[Fo(s)] = r[s];
    }), Object.keys({ ...n, ...o }).reduce((s, i) => (a.value[i] !== void 0 && (s[i] = a.value[i]), s), {});
  });
}
function de(e, t) {
  const n = He(e), a = t ? un(t) : {};
  return O(() => ({
    ...n.value,
    ...a
  }));
}
function V() {
  const e = Qe(), t = E(), n = O(() => {
    var s, i;
    return ["#text", "#comment"].includes((s = t.value) == null ? void 0 : s.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : ft(t);
  }), a = Object.assign({}, e.exposed), o = {};
  for (const s in e.props)
    Object.defineProperty(o, s, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[s]
    });
  if (Object.keys(a).length > 0)
    for (const s in a)
      Object.defineProperty(o, s, {
        enumerable: !0,
        configurable: !0,
        get: () => a[s]
      });
  Object.defineProperty(o, "$el", {
    enumerable: !0,
    configurable: !0,
    get: () => e.vnode.el
  }), e.exposed = o;
  function r(s) {
    t.value = s, s && (Object.defineProperty(o, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => s instanceof Element ? s : s.$el
    }), e.exposed = o);
  }
  return { forwardRef: r, currentRef: t, currentElement: n };
}
function nv(e, t) {
  const n = Gu(!1, 300), a = E(null), o = Ip();
  function r() {
    a.value = null, n.value = !1;
  }
  function s(i, u) {
    const d = i.currentTarget, c = { x: i.clientX, y: i.clientY }, f = av(c, d.getBoundingClientRect()), p = ov(c, f), m = rv(u.getBoundingClientRect()), v = sv([...p, ...m]);
    a.value = v, n.value = !0;
  }
  return Se((i) => {
    if (e.value && t.value) {
      const u = (c) => s(c, t.value), d = (c) => s(c, e.value);
      e.value.addEventListener("pointerleave", u), t.value.addEventListener("pointerleave", d), i(() => {
        var c, f;
        (c = e.value) == null || c.removeEventListener("pointerleave", u), (f = t.value) == null || f.removeEventListener("pointerleave", d);
      });
    }
  }), Se((i) => {
    var u;
    if (a.value) {
      const d = (c) => {
        var f, p;
        if (!a.value)
          return;
        const m = c.target, v = { x: c.clientX, y: c.clientY }, g = ((f = e.value) == null ? void 0 : f.contains(m)) || ((p = t.value) == null ? void 0 : p.contains(m)), b = !lv(v, a.value), _ = !!m.closest("[data-grace-area-trigger]");
        g ? r() : (b || _) && (r(), o.trigger());
      };
      (u = e.value) == null || u.ownerDocument.addEventListener("pointermove", d), i(() => {
        var c;
        return (c = e.value) == null ? void 0 : c.ownerDocument.removeEventListener("pointermove", d);
      });
    }
  }), {
    isPointerInTransit: n,
    onPointerExit: o.on
  };
}
function av(e, t) {
  const n = Math.abs(t.top - e.y), a = Math.abs(t.bottom - e.y), o = Math.abs(t.right - e.x), r = Math.abs(t.left - e.x);
  switch (Math.min(n, a, o, r)) {
    case r:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case a:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function ov(e, t, n = 5) {
  const a = [];
  switch (t) {
    case "top":
      a.push(
        { x: e.x - n, y: e.y + n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "bottom":
      a.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x + n, y: e.y - n }
      );
      break;
    case "left":
      a.push(
        { x: e.x + n, y: e.y - n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "right":
      a.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x - n, y: e.y + n }
      );
      break;
  }
  return a;
}
function rv(e) {
  const { top: t, right: n, bottom: a, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: a },
    { x: o, y: a }
  ];
}
function lv(e, t) {
  const { x: n, y: a } = e;
  let o = !1;
  for (let r = 0, s = t.length - 1; r < t.length; s = r++) {
    const i = t[r].x, u = t[r].y, d = t[s].x, c = t[s].y;
    u > a != c > a && n < (d - i) * (a - u) / (c - u) + i && (o = !o);
  }
  return o;
}
function sv(e) {
  const t = e.slice();
  return t.sort((n, a) => n.x < a.x ? -1 : n.x > a.x ? 1 : n.y < a.y ? -1 : n.y > a.y ? 1 : 0), iv(t);
}
function iv(e) {
  if (e.length <= 1)
    return e.slice();
  const t = [];
  for (let a = 0; a < e.length; a++) {
    const o = e[a];
    for (; t.length >= 2; ) {
      const r = t[t.length - 1], s = t[t.length - 2];
      if ((r.x - s.x) * (o.y - s.y) >= (r.y - s.y) * (o.x - s.x))
        t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let a = e.length - 1; a >= 0; a--) {
    const o = e[a];
    for (; n.length >= 2; ) {
      const r = n[n.length - 1], s = n[n.length - 2];
      if ((r.x - s.x) * (o.y - s.y) >= (r.y - s.y) * (o.x - s.x))
        n.pop();
      else break;
    }
    n.push(o);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var uv = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Mn = /* @__PURE__ */ new WeakMap(), no = /* @__PURE__ */ new WeakMap(), ao = {}, hr = 0, Zu = function(e) {
  return e && (e.host || Zu(e.parentNode));
}, dv = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var a = Zu(n);
    return a && e.contains(a) ? a : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, cv = function(e, t, n, a) {
  var o = dv(t, Array.isArray(e) ? e : [e]);
  ao[n] || (ao[n] = /* @__PURE__ */ new WeakMap());
  var r = ao[n], s = [], i = /* @__PURE__ */ new Set(), u = new Set(o), d = function(f) {
    !f || i.has(f) || (i.add(f), d(f.parentNode));
  };
  o.forEach(d);
  var c = function(f) {
    !f || u.has(f) || Array.prototype.forEach.call(f.children, function(p) {
      if (i.has(p))
        c(p);
      else
        try {
          var m = p.getAttribute(a), v = m !== null && m !== "false", g = (Mn.get(p) || 0) + 1, b = (r.get(p) || 0) + 1;
          Mn.set(p, g), r.set(p, b), s.push(p), g === 1 && v && no.set(p, !0), b === 1 && p.setAttribute(n, "true"), v || p.setAttribute(a, "true");
        } catch (_) {
          console.error("aria-hidden: cannot operate on ", p, _);
        }
    });
  };
  return c(t), i.clear(), hr++, function() {
    s.forEach(function(f) {
      var p = Mn.get(f) - 1, m = r.get(f) - 1;
      Mn.set(f, p), r.set(f, m), p || (no.has(f) || f.removeAttribute(a), no.delete(f)), m || f.removeAttribute(n);
    }), hr--, hr || (Mn = /* @__PURE__ */ new WeakMap(), Mn = /* @__PURE__ */ new WeakMap(), no = /* @__PURE__ */ new WeakMap(), ao = {});
  };
}, fv = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var a = Array.from(Array.isArray(e) ? e : [e]), o = uv(e);
  return o ? (a.push.apply(a, Array.from(o.querySelectorAll("[aria-live]"))), cv(a, o, n, "aria-hidden")) : function() {
    return null;
  };
};
function qa(e) {
  let t;
  te(() => ft(e), (n) => {
    n ? t = fv(n) : t && t();
  }), Ge(() => {
    t && t();
  });
}
let pv = 0;
function Ve(e, t = "radix") {
  const n = jo({ useId: void 0 });
  return zn.useId ? `${t}-${zn.useId()}` : n.useId ? `${t}-${n.useId()}` : `${t}-${++pv}`;
}
function ed(e) {
  const t = E(), n = O(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.width) ?? 0;
  }), a = O(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.height) ?? 0;
  });
  return ue(() => {
    const o = ft(e);
    if (o) {
      t.value = { width: o.offsetWidth, height: o.offsetHeight };
      const r = new ResizeObserver((s) => {
        if (!Array.isArray(s) || !s.length)
          return;
        const i = s[0];
        let u, d;
        if ("borderBoxSize" in i) {
          const c = i.borderBoxSize, f = Array.isArray(c) ? c[0] : c;
          u = f.inlineSize, d = f.blockSize;
        } else
          u = o.offsetWidth, d = o.offsetHeight;
        t.value = { width: u, height: d };
      });
      return r.observe(o, { box: "border-box" }), () => r.unobserve(o);
    } else
      t.value = void 0;
  }), {
    width: n,
    height: a
  };
}
function vv(e, t) {
  const n = E(e);
  function a(o) {
    return t[n.value][o] ?? n.value;
  }
  return {
    state: n,
    dispatch: (o) => {
      n.value = a(o);
    }
  };
}
const mv = "data-item-text";
function Kl(e) {
  const t = Gu("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (n, a) => {
      if (!(e != null && e.value) && !a)
        return;
      t.value = t.value + n;
      const o = (e == null ? void 0 : e.value) ?? a, r = Ke(), s = o.map((f) => {
        var p;
        return {
          ref: f,
          textValue: ((p = (f.querySelector(`[${mv}]`) ?? f).textContent) == null ? void 0 : p.trim()) ?? ""
        };
      }), i = s.find((f) => f.ref === r), u = s.map((f) => f.textValue), d = yv(u, t.value, i == null ? void 0 : i.textValue), c = s.find((f) => f.textValue === d);
      return c && c.ref.focus(), c == null ? void 0 : c.ref;
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function gv(e, t) {
  return e.map((n, a) => e[(t + a) % e.length]);
}
function yv(e, t, n) {
  const a = t.length > 1 && Array.from(t).every((i) => i === t[0]) ? t[0] : t, o = n ? e.indexOf(n) : -1;
  let r = gv(e, Math.max(o, 0));
  a.length === 1 && (r = r.filter((i) => i !== n));
  const s = r.find(
    (i) => i.toLowerCase().startsWith(a.toLowerCase())
  );
  return s !== n ? s : void 0;
}
const Hl = w({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      var a, o;
      if (!n.default)
        return null;
      const r = zo(n.default()), s = r.findIndex((c) => c.type !== El);
      if (s === -1)
        return r;
      const i = r[s];
      (a = i.props) == null || delete a.ref;
      const u = i.props ? k(t, i.props) : t;
      t.class && (o = i.props) != null && o.class && delete i.props.class;
      const d = vu(i, u);
      for (const c in u)
        c.startsWith("on") && (d.props || (d.props = {}), d.props[c] = u[c]);
      return r.length === 1 ? d : (r[s] = d, r);
    };
  }
}), Y = w({
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
    const a = e.asChild ? "template" : e.as;
    return typeof a == "string" && ["area", "img", "input"].includes(a) ? () => Je(a, t) : a !== "template" ? () => Je(e.as, t, { default: n.default }) : () => Je(Hl, t, { default: n.default });
  }
});
function td() {
  const e = E(), t = O(() => {
    var n, a;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (a = e.value) == null ? void 0 : a.$el.nextElementSibling : ft(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
const [nd, hv] = we("CollapsibleRoot"), bv = /* @__PURE__ */ w({
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
    const a = e, o = De(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), r = De(a, "disabled");
    return hv({
      contentId: "",
      disabled: r,
      open: o,
      onOpenToggle: () => {
        o.value = !o.value;
      }
    }), t({ open: o }), V(), (s, i) => (y(), C(l(Y), {
      as: s.as,
      "as-child": a.asChild,
      "data-state": l(o) ? "open" : "closed",
      "data-disabled": l(r) ? "" : void 0
    }, {
      default: h(() => [
        x(s.$slots, "default", { open: l(o) })
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state", "data-disabled"]));
  }
}), wv = /* @__PURE__ */ w({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    V();
    const n = nd();
    return (a, o) => {
      var r, s;
      return y(), C(l(Y), {
        type: a.as === "button" ? "button" : void 0,
        as: a.as,
        "as-child": t.asChild,
        "aria-controls": l(n).contentId,
        "aria-expanded": l(n).open.value,
        "data-state": l(n).open.value ? "open" : "closed",
        "data-disabled": (r = l(n).disabled) != null && r.value ? "" : void 0,
        disabled: (s = l(n).disabled) == null ? void 0 : s.value,
        onClick: l(n).onOpenToggle
      }, {
        default: h(() => [
          x(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["type", "as", "as-child", "aria-controls", "aria-expanded", "data-state", "data-disabled", "disabled", "onClick"]);
    };
  }
});
function _v(e, t) {
  var n;
  const a = E({}), o = E("none"), r = E(e), s = e.value ? "mounted" : "unmounted";
  let i;
  const u = ((n = t.value) == null ? void 0 : n.ownerDocument.defaultView) ?? Na, { state: d, dispatch: c } = vv(s, {
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
  }), f = (b) => {
    var _;
    if (kt) {
      const $ = new CustomEvent(b, { bubbles: !1, cancelable: !1 });
      (_ = t.value) == null || _.dispatchEvent($);
    }
  };
  te(
    e,
    async (b, _) => {
      var $;
      const S = _ !== b;
      if (await re(), S) {
        const P = o.value, A = oo(t.value);
        b ? (c("MOUNT"), f("enter"), A === "none" && f("after-enter")) : A === "none" || (($ = a.value) == null ? void 0 : $.display) === "none" ? (c("UNMOUNT"), f("leave"), f("after-leave")) : _ && P !== A ? (c("ANIMATION_OUT"), f("leave")) : (c("UNMOUNT"), f("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const p = (b) => {
    const _ = oo(t.value), $ = _.includes(
      b.animationName
    ), S = d.value === "mounted" ? "enter" : "leave";
    if (b.target === t.value && $ && (f(`after-${S}`), c("ANIMATION_END"), !r.value)) {
      const P = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", i = u == null ? void 0 : u.setTimeout(() => {
        var A;
        ((A = t.value) == null ? void 0 : A.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = P);
      });
    }
    b.target === t.value && _ === "none" && c("ANIMATION_END");
  }, m = (b) => {
    b.target === t.value && (o.value = oo(t.value));
  }, v = te(
    t,
    (b, _) => {
      b ? (a.value = getComputedStyle(b), b.addEventListener("animationstart", m), b.addEventListener("animationcancel", p), b.addEventListener("animationend", p)) : (c("ANIMATION_END"), i !== void 0 && (u == null || u.clearTimeout(i)), _ == null || _.removeEventListener("animationstart", m), _ == null || _.removeEventListener("animationcancel", p), _ == null || _.removeEventListener("animationend", p));
    },
    { immediate: !0 }
  ), g = te(d, () => {
    const b = oo(t.value);
    o.value = d.value === "mounted" ? b : "none";
  });
  return Ge(() => {
    v(), g();
  }), {
    isPresent: O(
      () => ["mounted", "unmountSuspended"].includes(d.value)
    )
  };
}
function oo(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const pt = w({
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
    var a;
    const { present: o, forceMount: r } = Ce(e), s = E(), { isPresent: i } = _v(o, s);
    n({ present: i });
    let u = t.default({ present: i });
    u = zo(u || []);
    const d = Qe();
    if (u && (u == null ? void 0 : u.length) > 1) {
      const c = (a = d == null ? void 0 : d.parent) != null && a.type.name ? `<${d.parent.type.name} />` : "component";
      throw new Error(
        [
          `Detected an invalid children for \`${c}\` for  \`Presence\` component.`,
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
    return () => r.value || o.value || i.value ? Je(t.default({ present: i })[0], {
      ref: (c) => {
        const f = ft(c);
        return typeof (f == null ? void 0 : f.hasAttribute) > "u" || (f != null && f.hasAttribute("data-radix-popper-content-wrapper") ? s.value = f.firstElementChild : s.value = f), f;
      }
    }) : null;
  }
}), xv = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = nd();
    n.contentId || (n.contentId = Ve(void 0, "radix-vue-collapsible-content"));
    const a = E(), { forwardRef: o, currentElement: r } = V(), s = E(0), i = E(0), u = O(() => n.open.value), d = E(u.value), c = E();
    return te(
      () => {
        var f;
        return [u.value, (f = a.value) == null ? void 0 : f.present];
      },
      async () => {
        await re();
        const f = r.value;
        if (!f)
          return;
        c.value = c.value || {
          transitionDuration: f.style.transitionDuration,
          animationName: f.style.animationName
        }, f.style.transitionDuration = "0s", f.style.animationName = "none";
        const p = f.getBoundingClientRect();
        i.value = p.height, s.value = p.width, d.value || (f.style.transitionDuration = c.value.transitionDuration, f.style.animationName = c.value.animationName);
      },
      {
        immediate: !0
      }
    ), ue(() => {
      requestAnimationFrame(() => {
        d.value = !1;
      });
    }), (f, p) => (y(), C(l(pt), {
      ref_key: "presentRef",
      ref: a,
      present: f.forceMount || l(n).open.value,
      "force-mount": !0
    }, {
      default: h(() => {
        var m, v;
        return [
          R(l(Y), k(f.$attrs, {
            id: l(n).contentId,
            ref: l(o),
            "as-child": t.asChild,
            as: f.as,
            "data-state": l(n).open.value ? "open" : "closed",
            "data-disabled": (m = l(n).disabled) != null && m.value ? "" : void 0,
            hidden: !((v = a.value) != null && v.present),
            style: {
              "--radix-collapsible-content-height": `${i.value}px`,
              "--radix-collapsible-content-width": `${s.value}px`
            }
          }), {
            default: h(() => {
              var g;
              return [
                (g = a.value) != null && g.present ? x(f.$slots, "default", { key: 0 }) : ce("", !0)
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
function ad({ type: e, defaultValue: t, modelValue: n }) {
  const a = n || t;
  if (Kn(e) && Kn(n) && Kn(t))
    throw new Error("Either the `type` or the `value` or `default-value` prop must be defined.");
  if (n !== void 0 && t !== void 0 && typeof n != typeof t)
    throw new Error(
      `Invalid prop \`value\` of value \`${n}\` supplied, should be the same type as the \`defaultValue\` prop, which is \`${t}\`. The \`value\` prop must be:
  ${e === "single" ? "- a string" : e === "multiple" ? "- an array of strings" : `- a string
- an array of strings`}
  - \`undefined\``
    );
  const o = n !== void 0 || t !== void 0;
  if (e && o) {
    const r = Array.isArray(n) || Array.isArray(t), s = n !== void 0 ? "modelValue" : "defaultValue", i = s === "modelValue" ? typeof n : typeof t;
    if (e === "single" && r)
      return console.error(`Invalid prop \`${s}\` of type ${i} supplied with type \`single\`. The \`modelValue\` prop must be a string or \`undefined\`.
    You can remove the \`type\` prop to let the component infer the type from the ${s} prop.`), "multiple";
    if (e === "multiple" && !r)
      return console.error(`Invalid prop \`${s}\` of type ${i} supplied with type \`multiple\`. The \`modelValue\` prop must be an array of strings or \`undefined\`.
    You can remove the \`type\` prop to let the component infer the type from the ${s} prop.`), "single";
  }
  return o ? Array.isArray(a) ? "multiple" : "single" : e;
}
function Cv({ type: e, defaultValue: t, modelValue: n }) {
  return e || ad({ type: e, defaultValue: t, modelValue: n });
}
function Sv({ type: e, defaultValue: t }) {
  return t !== void 0 ? t : e === "single" ? void 0 : [];
}
function $v(e, t) {
  const n = E(Cv(e)), a = De(e, "modelValue", t, {
    defaultValue: Sv(e),
    passive: e.modelValue === void 0,
    deep: !0
  });
  te(
    () => [e.type, e.modelValue, e.defaultValue],
    () => {
      const s = ad(e);
      n.value !== s && (n.value = s);
    },
    { immediate: !0 }
  );
  function o(s) {
    if (n.value === "single")
      a.value = s === a.value ? void 0 : s;
    else {
      const i = [...a.value || []];
      if (i.includes(s)) {
        const u = i.findIndex((d) => d === s);
        i.splice(u, 1);
      } else
        i.push(s);
      a.value = i;
    }
  }
  const r = O(() => n.value === "single");
  return {
    modelValue: a,
    type: n,
    changeModelValue: o,
    isSingle: r
  };
}
const [Ho, Ov] = we("AccordionRoot"), Ev = /* @__PURE__ */ w({
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
    const n = e, a = t, { dir: o, disabled: r } = Ce(n), s = sn(o), { modelValue: i, changeModelValue: u, isSingle: d } = $v(n, a), { forwardRef: c, currentElement: f } = V();
    return Ov({
      disabled: r,
      direction: s,
      orientation: n.orientation,
      parentElement: f,
      isSingle: d,
      collapsible: n.collapsible,
      modelValue: i,
      changeModelValue: u
    }), (p, m) => (y(), C(l(Y), {
      ref: l(c),
      "as-child": p.asChild,
      as: p.as
    }, {
      default: h(() => [
        x(p.$slots, "default", { modelValue: l(i) })
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), [Wl, Av] = we("AccordionItem"), Bv = /* @__PURE__ */ w({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e, { expose: t }) {
    const n = e, a = Ho(), o = O(
      () => a.isSingle.value ? n.value === a.modelValue.value : Array.isArray(a.modelValue.value) && a.modelValue.value.includes(n.value)
    ), r = O(() => a.disabled.value || n.disabled), s = O(() => r.value ? "" : void 0), i = O(
      () => o.value ? "open" : "closed"
      /* Closed */
    );
    t({ open: o, dataDisabled: s });
    const { currentRef: u, currentElement: d } = V();
    Av({
      open: o,
      dataState: i,
      disabled: r,
      dataDisabled: s,
      triggerId: "",
      currentRef: u,
      currentElement: d,
      value: O(() => n.value)
    });
    function c(f) {
      var p;
      const m = f.target;
      if (Array.from(((p = a.parentElement.value) == null ? void 0 : p.querySelectorAll("[data-radix-vue-collection-item]")) ?? []).findIndex((v) => v === m) === -1)
        return null;
      Xu(
        f,
        d.value,
        a.parentElement.value,
        {
          arrowKeyOptions: a.orientation,
          dir: a.direction.value,
          focus: !0
        }
      );
    }
    return (f, p) => (y(), C(l(bv), {
      "data-orientation": l(a).orientation,
      "data-disabled": s.value,
      "data-state": i.value,
      disabled: r.value,
      open: o.value,
      as: n.as,
      "as-child": n.asChild,
      onKeydown: nt(c, ["up", "down", "left", "right", "home", "end"])
    }, {
      default: h(() => [
        x(f.$slots, "default", { open: o.value })
      ]),
      _: 3
    }, 8, ["data-orientation", "data-disabled", "data-state", "disabled", "open", "as", "as-child"]));
  }
}), Pv = /* @__PURE__ */ w({
  __name: "AccordionContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Ho(), a = Wl();
    return V(), (o, r) => (y(), C(l(xv), {
      role: "region",
      hidden: !l(a).open.value,
      "as-child": t.asChild,
      "force-mount": t.forceMount,
      "aria-labelledby": l(a).triggerId,
      "data-state": l(a).dataState.value,
      "data-disabled": l(a).dataDisabled.value,
      "data-orientation": l(n).orientation,
      style: { "--radix-accordion-content-width": "var(--radix-collapsible-content-width)", "--radix-accordion-content-height": "var(--radix-collapsible-content-height)" }
    }, {
      default: h(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["hidden", "as-child", "force-mount", "aria-labelledby", "data-state", "data-disabled", "data-orientation"]));
  }
}), Dv = /* @__PURE__ */ w({
  __name: "AccordionHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "h3" }
  },
  setup(e) {
    const t = e, n = Ho(), a = Wl();
    return V(), (o, r) => (y(), C(l(Y), {
      as: t.as,
      "as-child": t.asChild,
      "data-orientation": l(n).orientation,
      "data-state": l(a).dataState.value,
      "data-disabled": l(a).dataDisabled.value
    }, {
      default: h(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-orientation", "data-state", "data-disabled"]));
  }
}), kv = /* @__PURE__ */ w({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Ho(), a = Wl();
    a.triggerId || (a.triggerId = Ve(void 0, "radix-vue-accordion-trigger"));
    function o() {
      const r = n.isSingle.value && a.open.value && !n.collapsible;
      a.disabled.value || r || n.changeModelValue(a.value.value);
    }
    return (r, s) => (y(), C(l(wv), {
      id: l(a).triggerId,
      ref: l(a).currentRef,
      "data-radix-vue-collection-item": "",
      as: t.as,
      "as-child": t.asChild,
      "aria-disabled": l(a).disabled.value || void 0,
      "aria-expanded": l(a).open.value || !1,
      "data-disabled": l(a).dataDisabled.value,
      "data-orientation": l(n).orientation,
      "data-state": l(a).dataState.value,
      disabled: l(a).disabled.value,
      onClick: o
    }, {
      default: h(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "as", "as-child", "aria-disabled", "aria-expanded", "data-disabled", "data-orientation", "data-state", "disabled"]));
  }
}), [Tt, Tv] = we("DialogRoot"), Ul = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, a = De(n, "open", t, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), o = E(), r = E(), { modal: s } = Ce(n);
    return Tv({
      open: a,
      modal: s,
      openModal: () => {
        a.value = !0;
      },
      onOpenChange: (i) => {
        a.value = i;
      },
      onOpenToggle: () => {
        a.value = !a.value;
      },
      contentId: "",
      titleId: "",
      descriptionId: "",
      triggerElement: o,
      contentElement: r
    }), (i, u) => x(i.$slots, "default", { open: l(a) });
  }
}), Gl = /* @__PURE__ */ w({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Tt(), { forwardRef: a, currentElement: o } = V();
    return n.contentId || (n.contentId = Ve(void 0, "radix-vue-dialog-content")), ue(() => {
      n.triggerElement.value = o.value;
    }), (r, s) => (y(), C(l(Y), k(t, {
      ref: l(a),
      type: r.as === "button" ? "button" : void 0,
      "aria-haspopup": "dialog",
      "aria-expanded": l(n).open.value || !1,
      "aria-controls": l(n).open.value ? l(n).contentId : void 0,
      "data-state": l(n).open.value ? "open" : "closed",
      onClick: l(n).onOpenToggle
    }), {
      default: h(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "onClick"]));
  }
}), la = /* @__PURE__ */ w({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = zl();
    return (n, a) => l(t) || n.forceMount ? (y(), C(Ra, {
      key: 0,
      to: n.to,
      disabled: n.disabled
    }, [
      x(n.$slots, "default")
    ], 8, ["to", "disabled"])) : ce("", !0);
  }
}), Yl = /* @__PURE__ */ w({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, a) => (y(), C(l(la), Q(ne(t)), {
      default: h(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Iv = "dismissableLayer.pointerDownOutside", Fv = "dismissableLayer.focusOutside";
function od(e, t) {
  const n = t.closest(
    "[data-dismissable-layer]"
  ), a = e.dataset.dismissableLayer === "" ? e : e.querySelector(
    "[data-dismissable-layer]"
  ), o = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(n && a === n || o.indexOf(a) < o.indexOf(n));
}
function Mv(e, t) {
  var n;
  const a = ((n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = E(!1), r = E(() => {
  });
  return Se((s) => {
    if (!kt)
      return;
    const i = async (d) => {
      const c = d.target;
      if (t != null && t.value) {
        if (od(t.value, c)) {
          o.value = !1;
          return;
        }
        if (d.target && !o.value) {
          let f = function() {
            Nl(
              Iv,
              e,
              p
            );
          };
          const p = { originalEvent: d };
          d.pointerType === "touch" ? (a.removeEventListener("click", r.value), r.value = f, a.addEventListener("click", r.value, {
            once: !0
          })) : f();
        } else
          a.removeEventListener("click", r.value);
        o.value = !1;
      }
    }, u = window.setTimeout(() => {
      a.addEventListener("pointerdown", i);
    }, 0);
    s(() => {
      window.clearTimeout(u), a.removeEventListener("pointerdown", i), a.removeEventListener("click", r.value);
    });
  }), {
    onPointerDownCapture: () => o.value = !0
  };
}
function Rv(e, t) {
  var n;
  const a = ((n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = E(!1);
  return Se((r) => {
    if (!kt)
      return;
    const s = async (i) => {
      t != null && t.value && (await re(), !(!t.value || od(t.value, i.target)) && i.target && !o.value && Nl(
        Fv,
        e,
        { originalEvent: i }
      ));
    };
    a.addEventListener("focusin", s), r(() => a.removeEventListener("focusin", s));
  }), {
    onFocusCapture: () => o.value = !0,
    onBlurCapture: () => o.value = !1
  };
}
const yt = Gn({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), sa = /* @__PURE__ */ w({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, a = t, { forwardRef: o, currentElement: r } = V(), s = O(
      () => {
        var v;
        return ((v = r.value) == null ? void 0 : v.ownerDocument) ?? globalThis.document;
      }
    ), i = O(() => yt.layersRoot), u = O(() => r.value ? Array.from(i.value).indexOf(r.value) : -1), d = O(() => yt.layersWithOutsidePointerEventsDisabled.size > 0), c = O(() => {
      const v = Array.from(i.value), [g] = [...yt.layersWithOutsidePointerEventsDisabled].slice(-1), b = v.indexOf(g);
      return u.value >= b;
    }), f = Mv(async (v) => {
      const g = [...yt.branches].some(
        (b) => b == null ? void 0 : b.contains(v.target)
      );
      !c.value || g || (a("pointerDownOutside", v), a("interactOutside", v), await re(), v.defaultPrevented || a("dismiss"));
    }, r), p = Rv((v) => {
      [...yt.branches].some(
        (g) => g == null ? void 0 : g.contains(v.target)
      ) || (a("focusOutside", v), a("interactOutside", v), v.defaultPrevented || a("dismiss"));
    }, r);
    ql("Escape", (v) => {
      u.value === i.value.size - 1 && (a("escapeKeyDown", v), v.defaultPrevented || a("dismiss"));
    });
    let m;
    return Se((v) => {
      r.value && (n.disableOutsidePointerEvents && (yt.layersWithOutsidePointerEventsDisabled.size === 0 && (m = s.value.body.style.pointerEvents, s.value.body.style.pointerEvents = "none"), yt.layersWithOutsidePointerEventsDisabled.add(r.value)), i.value.add(r.value), v(() => {
        n.disableOutsidePointerEvents && yt.layersWithOutsidePointerEventsDisabled.size === 1 && (s.value.body.style.pointerEvents = m);
      }));
    }), Se((v) => {
      v(() => {
        r.value && (i.value.delete(r.value), yt.layersWithOutsidePointerEventsDisabled.delete(r.value));
      });
    }), (v, g) => (y(), C(l(Y), {
      ref: l(o),
      "as-child": v.asChild,
      as: v.as,
      "data-dismissable-layer": "",
      style: Pt({
        pointerEvents: d.value ? c.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: l(p).onFocusCapture,
      onBlurCapture: l(p).onBlurCapture,
      onPointerdownCapture: l(f).onPointerDownCapture
    }, {
      default: h(() => [
        x(v.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
}), Lv = /* @__PURE__ */ w({
  __name: "DismissableLayerBranch",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: a } = V();
    return ue(() => {
      yt.branches.add(a.value);
    }), Ge(() => {
      yt.branches.delete(a.value);
    }), (o, r) => (y(), C(l(Y), k({ ref: l(n) }, t), {
      default: h(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), br = "focusScope.autoFocusOnMount", wr = "focusScope.autoFocusOnUnmount", ni = { bubbles: !1, cancelable: !0 };
function yo(e, { select: t = !1 } = {}) {
  const n = Ke();
  for (const a of e)
    if (tn(a, { select: t }), Ke() !== n)
      return !0;
}
function Nv(e) {
  const t = Xl(e), n = ai(t, e), a = ai(t.reverse(), e);
  return [n, a];
}
function Xl(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (a) => {
      const o = a.tagName === "INPUT" && a.type === "hidden";
      return a.disabled || a.hidden || o ? NodeFilter.FILTER_SKIP : a.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function ai(e, t) {
  for (const n of e)
    if (!Vv(n, { upTo: t }))
      return n;
}
function Vv(e, { upTo: t }) {
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
function qv(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function tn(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = Ke();
    e.focus({ preventScroll: !0 }), e !== n && qv(e) && t && e.select();
  }
}
const zv = Fp(() => E([]));
function jv() {
  const e = zv();
  return {
    add(t) {
      const n = e.value[0];
      t !== n && (n == null || n.pause()), e.value = oi(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var n;
      e.value = oi(e.value, t), (n = e.value[0]) == null || n.resume();
    }
  };
}
function oi(e, t) {
  const n = [...e], a = n.indexOf(t);
  return a !== -1 && n.splice(a, 1), n;
}
function Kv(e) {
  return e.filter((t) => t.tagName !== "A");
}
const Wo = /* @__PURE__ */ w({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, a = t, { currentRef: o, currentElement: r } = V(), s = E(null), i = jv(), u = Gn({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    Se((c) => {
      if (!kt)
        return;
      const f = r.value;
      if (!n.trapped)
        return;
      function p(b) {
        if (u.paused || !f)
          return;
        const _ = b.target;
        f.contains(_) ? s.value = _ : tn(s.value, { select: !0 });
      }
      function m(b) {
        if (u.paused || !f)
          return;
        const _ = b.relatedTarget;
        _ !== null && (f.contains(_) || tn(s.value, { select: !0 }));
      }
      function v(b) {
        f.contains(s.value) || tn(f);
      }
      document.addEventListener("focusin", p), document.addEventListener("focusout", m);
      const g = new MutationObserver(v);
      f && g.observe(f, { childList: !0, subtree: !0 }), c(() => {
        document.removeEventListener("focusin", p), document.removeEventListener("focusout", m), g.disconnect();
      });
    }), Se(async (c) => {
      const f = r.value;
      if (await re(), !f)
        return;
      i.add(u);
      const p = Ke();
      if (!f.contains(p)) {
        const m = new CustomEvent(br, ni);
        f.addEventListener(br, (v) => a("mountAutoFocus", v)), f.dispatchEvent(m), m.defaultPrevented || (yo(Kv(Xl(f)), {
          select: !0
        }), Ke() === p && tn(f));
      }
      c(() => {
        f.removeEventListener(br, (g) => a("mountAutoFocus", g));
        const m = new CustomEvent(wr, ni), v = (g) => {
          a("unmountAutoFocus", g);
        };
        f.addEventListener(wr, v), f.dispatchEvent(m), setTimeout(() => {
          m.defaultPrevented || tn(p ?? document.body, { select: !0 }), f.removeEventListener(wr, v), i.remove(u);
        }, 0);
      });
    });
    function d(c) {
      if (!n.loop && !n.trapped || u.paused)
        return;
      const f = c.key === "Tab" && !c.altKey && !c.ctrlKey && !c.metaKey, p = Ke();
      if (f && p) {
        const m = c.currentTarget, [v, g] = Nv(m);
        v && g ? !c.shiftKey && p === g ? (c.preventDefault(), n.loop && tn(v, { select: !0 })) : c.shiftKey && p === v && (c.preventDefault(), n.loop && tn(g, { select: !0 })) : p === m && c.preventDefault();
      }
    }
    return (c, f) => (y(), C(l(Y), {
      ref_key: "currentRef",
      ref: o,
      tabindex: "-1",
      "as-child": c.asChild,
      as: c.as,
      onKeydown: d
    }, {
      default: h(() => [
        x(c.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), Hv = "menu.itemSelect", ol = ["Enter", " "], Wv = ["ArrowDown", "PageUp", "Home"], rd = ["ArrowUp", "PageDown", "End"], Uv = [...Wv, ...rd], Gv = {
  ltr: [...ol, "ArrowRight"],
  rtl: [...ol, "ArrowLeft"]
}, Yv = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function Ql(e) {
  return e ? "open" : "closed";
}
function Ao(e) {
  return e === "indeterminate";
}
function Jl(e) {
  return Ao(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function rl(e) {
  const t = Ke();
  for (const n of e)
    if (n === t || (n.focus(), Ke() !== t))
      return;
}
function Xv(e, t) {
  const { x: n, y: a } = e;
  let o = !1;
  for (let r = 0, s = t.length - 1; r < t.length; s = r++) {
    const i = t[r].x, u = t[r].y, d = t[s].x, c = t[s].y;
    u > a != c > a && n < (d - i) * (a - u) / (c - u) + i && (o = !o);
  }
  return o;
}
function Qv(e, t) {
  if (!t)
    return !1;
  const n = { x: e.clientX, y: e.clientY };
  return Xv(n, t);
}
function Da(e) {
  return e.pointerType === "mouse";
}
const Jv = "DialogTitle", Zv = "DialogContent";
function em({
  titleName: e = Jv,
  contentName: t = Zv,
  componentLink: n = "dialog.html#title",
  titleId: a,
  descriptionId: o,
  contentElement: r
}) {
  const s = `Warning: \`${t}\` requires a \`${e}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.radix-vue.com/components/${n}`, i = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${t}.`;
  ue(() => {
    var u;
    document.getElementById(a) || console.warn(s);
    const d = (u = r.value) == null ? void 0 : u.getAttribute("aria-describedby");
    o && d && (document.getElementById(o) || console.warn(i));
  });
}
const ld = /* @__PURE__ */ w({
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
    const n = e, a = t, o = Tt(), { forwardRef: r, currentElement: s } = V();
    return o.titleId || (o.titleId = Ve(void 0, "radix-vue-dialog-title")), o.descriptionId || (o.descriptionId = Ve(void 0, "radix-vue-dialog-description")), ue(() => {
      o.contentElement = s, Ke() !== document.body && (o.triggerElement.value = Ke());
    }), process.env.NODE_ENV !== "production" && em({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: o.titleId,
      descriptionId: o.descriptionId,
      contentElement: s
    }), (i, u) => (y(), C(l(Wo), {
      "as-child": "",
      loop: "",
      trapped: n.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => a("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => a("closeAutoFocus", d))
    }, {
      default: h(() => [
        R(l(sa), k({
          id: l(o).contentId,
          ref: l(r),
          as: i.as,
          "as-child": i.asChild,
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": l(o).descriptionId,
          "aria-labelledby": l(o).titleId,
          "data-state": l(Ql)(l(o).open.value)
        }, i.$attrs, {
          onDismiss: u[0] || (u[0] = (d) => l(o).onOpenChange(!1)),
          onEscapeKeyDown: u[1] || (u[1] = (d) => a("escapeKeyDown", d)),
          onFocusOutside: u[2] || (u[2] = (d) => a("focusOutside", d)),
          onInteractOutside: u[3] || (u[3] = (d) => a("interactOutside", d)),
          onPointerDownOutside: u[4] || (u[4] = (d) => a("pointerDownOutside", d))
        }), {
          default: h(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "as", "as-child", "disable-outside-pointer-events", "aria-describedby", "aria-labelledby", "data-state"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
}), tm = /* @__PURE__ */ w({
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
    const n = e, a = t, o = Tt(), r = un(a), { forwardRef: s, currentElement: i } = V();
    return qa(i), (u, d) => (y(), C(ld, k({ ...n, ...l(r) }, {
      ref: l(s),
      "trap-focus": l(o).open.value,
      "disable-outside-pointer-events": !0,
      onCloseAutoFocus: d[0] || (d[0] = (c) => {
        var f;
        c.defaultPrevented || (c.preventDefault(), (f = l(o).triggerElement.value) == null || f.focus());
      }),
      onPointerDownOutside: d[1] || (d[1] = (c) => {
        const f = c.detail.originalEvent, p = f.button === 0 && f.ctrlKey === !0;
        (f.button === 2 || p) && c.preventDefault();
      }),
      onFocusOutside: d[2] || (d[2] = (c) => {
        c.preventDefault();
      })
    }), {
      default: h(() => [
        x(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), nm = /* @__PURE__ */ w({
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
    const n = e, a = un(t);
    V();
    const o = Tt(), r = E(!1), s = E(!1);
    return (i, u) => (y(), C(ld, k({ ...n, ...l(a) }, {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: u[0] || (u[0] = (d) => {
        var c;
        d.defaultPrevented || (r.value || (c = l(o).triggerElement.value) == null || c.focus(), d.preventDefault()), r.value = !1, s.value = !1;
      }),
      onInteractOutside: u[1] || (u[1] = (d) => {
        var c;
        d.defaultPrevented || (r.value = !0, d.detail.originalEvent.type === "pointerdown" && (s.value = !0));
        const f = d.target;
        (c = l(o).triggerElement.value) != null && c.contains(f) && d.preventDefault(), d.detail.originalEvent.type === "focusin" && s.value && d.preventDefault();
      })
    }), {
      default: h(() => [
        x(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Uo = /* @__PURE__ */ w({
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
    const n = e, a = t, o = Tt(), r = un(a), { forwardRef: s } = V();
    return (i, u) => (y(), C(l(pt), {
      present: i.forceMount || l(o).open.value
    }, {
      default: h(() => [
        l(o).modal.value ? (y(), C(tm, k({
          key: 0,
          ref: l(s)
        }, { ...n, ...l(r), ...i.$attrs }), {
          default: h(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (y(), C(nm, k({
          key: 1,
          ref: l(s)
        }, { ...n, ...l(r), ...i.$attrs }), {
          default: h(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), am = /* @__PURE__ */ w({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Tt();
    return Va(!0), V(), (n, a) => (y(), C(l(Y), {
      as: n.as,
      "as-child": n.asChild,
      "data-state": l(t).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" }
    }, {
      default: h(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state"]));
  }
}), Go = /* @__PURE__ */ w({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Tt(), { forwardRef: n } = V();
    return (a, o) => {
      var r;
      return (r = l(t)) != null && r.modal.value ? (y(), C(l(pt), {
        key: 0,
        present: a.forceMount || l(t).open.value
      }, {
        default: h(() => [
          R(am, k(a.$attrs, {
            ref: l(n),
            as: a.as,
            "as-child": a.asChild
          }), {
            default: h(() => [
              x(a.$slots, "default")
            ]),
            _: 3
          }, 16, ["as", "as-child"])
        ]),
        _: 3
      }, 8, ["present"])) : ce("", !0);
    };
  }
}), Cn = /* @__PURE__ */ w({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    V();
    const n = Tt();
    return (a, o) => (y(), C(l(Y), k(t, {
      type: a.as === "button" ? "button" : void 0,
      onClick: o[0] || (o[0] = (r) => l(n).onOpenChange(!1))
    }), {
      default: h(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
}), Zl = /* @__PURE__ */ w({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e, n = Tt();
    return V(), (a, o) => (y(), C(l(Y), k(t, {
      id: l(n).titleId
    }), {
      default: h(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), es = /* @__PURE__ */ w({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    V();
    const n = Tt();
    return (a, o) => (y(), C(l(Y), k(t, {
      id: l(n).descriptionId
    }), {
      default: h(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), om = /* @__PURE__ */ w({
  __name: "AlertDialogRoot",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = de(e, t);
    return V(), (a, o) => (y(), C(l(Ul), k(l(n), { modal: !0 }), {
      default: h(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), rm = /* @__PURE__ */ w({
  __name: "AlertDialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    return V(), (n, a) => (y(), C(l(Gl), Q(ne(t)), {
      default: h(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), lm = /* @__PURE__ */ w({
  __name: "AlertDialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, a) => (y(), C(l(la), Q(ne(t)), {
      default: h(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [sm, im] = we("AlertDialogContent"), um = /* @__PURE__ */ w({
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
    const n = e, a = un(t);
    V();
    const o = E();
    return im({
      onCancelElementChange: (r) => {
        o.value = r;
      }
    }), (r, s) => (y(), C(l(Uo), k({ ...n, ...l(a) }, {
      role: "alertdialog",
      onPointerDownOutside: s[0] || (s[0] = ke(() => {
      }, ["prevent"])),
      onInteractOutside: s[1] || (s[1] = ke(() => {
      }, ["prevent"])),
      onOpenAutoFocus: s[2] || (s[2] = () => {
        re(() => {
          var i;
          (i = o.value) == null || i.focus({
            preventScroll: !0
          });
        });
      })
    }), {
      default: h(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), dm = /* @__PURE__ */ w({
  __name: "AlertDialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return V(), (n, a) => (y(), C(l(Go), Q(ne(t)), {
      default: h(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), cm = /* @__PURE__ */ w({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = sm(), { forwardRef: a, currentElement: o } = V();
    return ue(() => {
      n.onCancelElementChange(o.value);
    }), (r, s) => (y(), C(l(Cn), k(t, { ref: l(a) }), {
      default: h(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fm = /* @__PURE__ */ w({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e;
    return V(), (n, a) => (y(), C(l(Zl), Q(ne(t)), {
      default: h(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), pm = /* @__PURE__ */ w({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    return V(), (n, a) => (y(), C(l(es), Q(ne(t)), {
      default: h(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vm = /* @__PURE__ */ w({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    return V(), (n, a) => (y(), C(l(Cn), Q(ne(t)), {
      default: h(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [sd, mm] = we("AvatarRoot"), gm = /* @__PURE__ */ w({
  __name: "AvatarRoot",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return V(), mm({
      imageLoadingStatus: E("loading")
    }), (t, n) => (y(), C(l(Y), {
      "as-child": t.asChild,
      as: t.as
    }, {
      default: h(() => [
        x(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
});
function ym(e, t) {
  const n = E("idle"), a = E(!1), o = (r) => () => {
    a.value && (n.value = r);
  };
  return ue(() => {
    a.value = !0, te([() => e.value, () => t == null ? void 0 : t.value], ([r, s]) => {
      if (!r)
        n.value = "error";
      else {
        const i = new window.Image();
        n.value = "loading", i.onload = o("loaded"), i.onerror = o("error"), i.src = r, s && (i.referrerPolicy = s);
      }
    }, { immediate: !0 });
  }), Ge(() => {
    a.value = !1;
  }), n;
}
const hm = /* @__PURE__ */ w({
  __name: "AvatarImage",
  props: {
    src: {},
    referrerPolicy: {},
    asChild: { type: Boolean },
    as: { default: "img" }
  },
  emits: ["loadingStatusChange"],
  setup(e, { emit: t }) {
    const n = e, a = t, { src: o, referrerPolicy: r } = Ce(n);
    V();
    const s = sd(), i = ym(o, r);
    return te(
      i,
      (u) => {
        a("loadingStatusChange", u), u !== "idle" && (s.imageLoadingStatus.value = u);
      },
      { immediate: !0 }
    ), (u, d) => rt((y(), C(l(Y), {
      role: "img",
      "as-child": u.asChild,
      as: u.as,
      src: l(o),
      "referrer-policy": l(r)
    }, {
      default: h(() => [
        x(u.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "src", "referrer-policy"])), [
      [$l, l(i) === "loaded"]
    ]);
  }
}), bm = /* @__PURE__ */ w({
  __name: "AvatarFallback",
  props: {
    delayMs: { default: 0 },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = sd();
    V();
    const a = E(!1);
    let o;
    return te(n.imageLoadingStatus, (r) => {
      r === "loading" && (a.value = !1, t.delayMs ? o = setTimeout(() => {
        a.value = !0, clearTimeout(o);
      }, t.delayMs) : a.value = !0);
    }, { immediate: !0 }), (r, s) => a.value && l(n).imageLoadingStatus.value !== "loaded" ? (y(), C(l(Y), {
      key: 0,
      "as-child": r.asChild,
      as: r.as
    }, {
      default: h(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"])) : ce("", !0);
  }
}), [id, wm] = we("PopperRoot"), ia = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = E();
    return wm({
      anchor: t,
      onAnchorChange: (n) => t.value = n
    }), (n, a) => x(n.$slots, "default");
  }
}), za = /* @__PURE__ */ w({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: a } = V(), o = id();
    return Se(() => {
      o.onAnchorChange(t.element ?? a.value);
    }), (r, s) => (y(), C(l(Y), {
      ref: l(n),
      as: r.as,
      "as-child": r.asChild
    }, {
      default: h(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function _m(e) {
  return e !== null;
}
function xm(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var n, a, o;
      const { placement: r, rects: s, middlewareData: i } = t, u = ((n = i.arrow) == null ? void 0 : n.centerOffset) !== 0, d = u ? 0 : e.arrowWidth, c = u ? 0 : e.arrowHeight, [f, p] = ll(r), m = { start: "0%", center: "50%", end: "100%" }[p], v = (((a = i.arrow) == null ? void 0 : a.x) ?? 0) + d / 2, g = (((o = i.arrow) == null ? void 0 : o.y) ?? 0) + c / 2;
      let b = "", _ = "";
      return f === "bottom" ? (b = u ? m : `${v}px`, _ = `${-c}px`) : f === "top" ? (b = u ? m : `${v}px`, _ = `${s.floating.height + c}px`) : f === "right" ? (b = `${-c}px`, _ = u ? m : `${g}px`) : f === "left" && (b = `${s.floating.width + c}px`, _ = u ? m : `${g}px`), { data: { x: b, y: _ } };
    }
  };
}
function ll(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
const ud = {
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
}, [t$, Cm] = we("PopperContent"), Qn = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ Al({
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
    ...ud
  }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = id(), { forwardRef: r, currentElement: s } = V(), i = E(), u = E(), { width: d, height: c } = ed(u), f = O(
      () => n.side + (n.align !== "center" ? `-${n.align}` : "")
    ), p = O(() => typeof n.collisionPadding == "number" ? n.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...n.collisionPadding }), m = O(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), v = O(() => ({
      padding: p.value,
      boundary: m.value.filter(_m),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: m.value.length > 0
    })), g = Tp(() => [
      Lu({
        mainAxis: n.sideOffset + c.value,
        alignmentAxis: n.alignOffset
      }),
      n.prioritizePosition && n.avoidCollisions && Oo({
        ...v.value
      }),
      n.avoidCollisions && Nu({
        mainAxis: !0,
        crossAxis: !!n.prioritizePosition,
        limiter: n.sticky === "partial" ? zu() : void 0,
        ...v.value
      }),
      !n.prioritizePosition && n.avoidCollisions && Oo({
        ...v.value
      }),
      Vu({
        ...v.value,
        apply: ({ elements: T, rects: L, availableWidth: M, availableHeight: K }) => {
          const { width: j, height: G } = L.reference, W = T.floating.style;
          W.setProperty(
            "--radix-popper-available-width",
            `${M}px`
          ), W.setProperty(
            "--radix-popper-available-height",
            `${K}px`
          ), W.setProperty(
            "--radix-popper-anchor-width",
            `${j}px`
          ), W.setProperty(
            "--radix-popper-anchor-height",
            `${G}px`
          );
        }
      }),
      u.value && ju({ element: u.value, padding: n.arrowPadding }),
      xm({
        arrowWidth: d.value,
        arrowHeight: c.value
      }),
      n.hideWhenDetached && qu({ strategy: "referenceHidden", ...v.value })
    ]), { floatingStyles: b, placement: _, isPositioned: $, middlewareData: S } = Hu(
      o.anchor,
      i,
      {
        strategy: "fixed",
        placement: f,
        whileElementsMounted: (...T) => Ru(...T, {
          animationFrame: n.updatePositionStrategy === "always"
        }),
        middleware: g
      }
    ), P = O(
      () => ll(_.value)[0]
    ), A = O(
      () => ll(_.value)[1]
    );
    Bl(() => {
      $.value && a("placed");
    });
    const D = O(
      () => {
        var T;
        return ((T = S.value.arrow) == null ? void 0 : T.centerOffset) !== 0;
      }
    ), B = E("");
    Se(() => {
      s.value && (B.value = window.getComputedStyle(s.value).zIndex);
    });
    const I = O(() => {
      var T;
      return ((T = S.value.arrow) == null ? void 0 : T.x) ?? 0;
    }), F = O(() => {
      var T;
      return ((T = S.value.arrow) == null ? void 0 : T.y) ?? 0;
    });
    return Cm({
      placedSide: P,
      onArrowChange: (T) => u.value = T,
      arrowX: I,
      arrowY: F,
      shouldHideArrow: D
    }), (T, L) => {
      var M, K, j;
      return y(), q("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-radix-popper-content-wrapper": "",
        style: Pt({
          ...l(b),
          transform: l($) ? l(b).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: B.value,
          "--radix-popper-transform-origin": [
            (M = l(S).transformOrigin) == null ? void 0 : M.x,
            (K = l(S).transformOrigin) == null ? void 0 : K.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((j = l(S).hide) == null ? void 0 : j.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        R(l(Y), k({ ref: l(r) }, T.$attrs, {
          "as-child": n.asChild,
          as: T.as,
          "data-side": P.value,
          "data-align": A.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: l($) ? void 0 : "none"
          }
        }), {
          default: h(() => [
            x(T.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
}), ja = /* @__PURE__ */ w({
  __name: "VisuallyHidden",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return V(), (t, n) => (y(), C(l(Y), {
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
      default: h(() => [
        x(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Sm = /* @__PURE__ */ w({
  __name: "VisuallyHiddenInput",
  props: {
    name: {},
    value: {},
    required: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, n = O(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" ? [{ name: t.name, value: t.value }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((a, o) => typeof a == "object" ? Object.entries(a).map(([r, s]) => ({ name: `[${o}][${t.name}][${r}]`, value: s })) : { name: `[${t.name}][${o}]`, value: a }) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([a, o]) => ({ name: `[${t.name}][${a}]`, value: o })) : []);
    return (a, o) => (y(!0), q(Ee, null, st(n.value, (r) => (y(), C(ja, {
      key: r.name,
      as: "input",
      type: "hidden",
      hidden: "",
      readonly: "",
      name: r.name,
      value: r.value,
      required: a.required,
      disabled: a.disabled
    }, null, 8, ["name", "value", "required", "disabled"]))), 128));
  }
}), $m = "data-radix-vue-collection-item", [ts, Om] = we("CollectionProvider");
function ns(e = $m) {
  const t = E(/* @__PURE__ */ new Map()), n = E(), a = Om({
    collectionRef: n,
    itemMap: t,
    attrName: e
  }), { getItems: o } = os(a), r = O(() => Array.from(a.itemMap.value.values())), s = O(() => a.itemMap.value.size);
  return { getItems: o, reactiveItems: r, itemMapSize: s };
}
const as = w({
  name: "CollectionSlot",
  setup(e, { slots: t }) {
    const n = ts(), { primitiveElement: a, currentElement: o } = td();
    return te(o, () => {
      n.collectionRef.value = o.value;
    }), () => Je(Hl, { ref: a }, t);
  }
}), Yo = w({
  name: "CollectionItem",
  inheritAttrs: !1,
  props: {
    value: {
      // It accepts any value
      validator: () => !0
    }
  },
  setup(e, { slots: t, attrs: n }) {
    const a = ts(), { primitiveElement: o, currentElement: r } = td();
    return Se((s) => {
      if (r.value) {
        const i = mu(r.value);
        a.itemMap.value.set(i, { ref: r.value, value: e.value }), s(() => a.itemMap.value.delete(i));
      }
    }), () => Je(Hl, { ...n, [a.attrName]: "", ref: o }, t);
  }
});
function os(e) {
  const t = e ?? ts();
  return { getItems: () => {
    const n = t.collectionRef.value;
    if (!n)
      return [];
    const a = Array.from(n.querySelectorAll(`[${t.attrName}]`));
    return Array.from(t.itemMap.value.values()).sort(
      (o, r) => a.indexOf(o.ref) - a.indexOf(r.ref)
    );
  } };
}
const [ua, Em] = we("ComboboxRoot"), Am = /* @__PURE__ */ w({
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
    const n = e, a = t, { multiple: o, disabled: r, dir: s } = Ce(n), i = sn(s), u = De(n, "searchTerm", a, {
      // @ts-expect-error ignore the type error here
      defaultValue: "",
      passive: n.searchTerm === void 0
    }), d = De(n, "modelValue", a, {
      // @ts-expect-error ignore the type error here
      defaultValue: n.defaultValue ?? o.value ? [] : void 0,
      passive: n.modelValue === void 0,
      deep: !0
    }), c = De(n, "open", a, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), f = De(n, "selectedValue", a, {
      defaultValue: void 0,
      passive: n.selectedValue === void 0
    });
    async function p(z) {
      var se, ie;
      c.value = z, await re(), z ? (d.value && (Array.isArray(d.value) && o.value ? f.value = (se = S().find((Te) => {
        var Me, qe;
        return ((qe = (Me = Te.ref) == null ? void 0 : Me.dataset) == null ? void 0 : qe.state) === "checked";
      })) == null ? void 0 : se.value : f.value = d.value), await re(), (ie = g.value) == null || ie.focus(), K()) : (v.value = !1, n.resetSearchTermOnBlur && I("blur"));
    }
    function m(z) {
      if (Array.isArray(d.value) && o.value) {
        const se = d.value.findIndex((Te) => gn(Te, z)), ie = [...d.value];
        se === -1 ? ie.push(z) : ie.splice(se, 1), d.value = ie;
      } else
        d.value = z, p(!1);
    }
    const v = E(!1), g = E(), b = E(), { forwardRef: _, currentElement: $ } = V(), { getItems: S, reactiveItems: P, itemMapSize: A } = ns("data-radix-vue-combobox-item"), D = E([]);
    te(() => A.value, () => {
      D.value = S().map((z) => z.value);
    }, {
      immediate: !0,
      flush: "post"
    });
    const B = O(() => {
      if (v.value) {
        if (n.filterFunction)
          return n.filterFunction(D.value, u.value);
        const z = D.value.filter((se) => typeof se == "string");
        if (z.length)
          return z.filter((se) => {
            var ie;
            return se.toLowerCase().includes((ie = u.value) == null ? void 0 : ie.toLowerCase());
          });
      }
      return D.value;
    });
    function I(z) {
      const se = z === "blur" || z === "select" && n.resetSearchTermOnSelect;
      !o.value && d.value && !Array.isArray(d.value) ? n.displayValue ? u.value = n.displayValue(d.value) : typeof d.value != "object" ? u.value = d.value.toString() : se && (u.value = "") : se && (u.value = "");
    }
    const F = O(() => B.value.findIndex((z) => gn(z, f.value))), T = O(() => {
      var z;
      return (z = P.value.find((se) => gn(se.value, f.value))) == null ? void 0 : z.ref;
    }), L = O(() => JSON.stringify(d.value));
    te(L, async () => {
      await re(), await re(), I("select");
    }, {
      // If searchTerm is provided with value during initialization, we don't reset it immediately
      immediate: !n.searchTerm
    }), te(() => [B.value.length, u.value.length], async ([z, se], [ie, Te]) => {
      await re(), await re(), z && (Te > se || F.value === -1) && (f.value = B.value[0]);
    });
    const M = Ko($);
    function K() {
      var z;
      T.value instanceof Element && ((z = T.value) == null || z.scrollIntoView({ block: "nearest" }));
    }
    function j() {
      T.value instanceof Element && T.value.focus && T.value.focus();
    }
    const G = E(!1);
    function W() {
      G.value = !0;
    }
    function ee() {
      requestAnimationFrame(() => {
        G.value = !1;
      });
    }
    async function Z(z) {
      var se;
      B.value.length && f.value && T.value instanceof Element && (z.preventDefault(), z.stopPropagation(), G.value || (se = T.value) == null || se.click());
    }
    return Em({
      searchTerm: u,
      modelValue: d,
      // @ts-expect-error ignoring
      onValueChange: m,
      isUserInputted: v,
      multiple: o,
      disabled: r,
      open: c,
      onOpenChange: p,
      filteredOptions: B,
      contentId: "",
      inputElement: g,
      selectedElement: T,
      onInputElementChange: (z) => g.value = z,
      onInputNavigation: async (z) => {
        const se = F.value;
        se === 0 && z === "up" || se === B.value.length - 1 && z === "down" || (se === -1 && B.value.length || z === "home" ? f.value = B.value[0] : z === "end" ? f.value = B.value[B.value.length - 1] : f.value = B.value[z === "up" ? se - 1 : se + 1], await re(), K(), j(), re(() => {
          var ie;
          return (ie = g.value) == null ? void 0 : ie.focus({ preventScroll: !0 });
        }));
      },
      onInputEnter: Z,
      onCompositionEnd: ee,
      onCompositionStart: W,
      selectedValue: f,
      onSelectedValueChange: (z) => f.value = z,
      parentElement: $,
      contentElement: b,
      onContentElementChange: (z) => b.value = z
    }), (z, se) => (y(), C(l(ia), null, {
      default: h(() => [
        R(l(Y), k({
          ref: l(_),
          style: {
            pointerEvents: l(c) ? "auto" : void 0
          },
          as: z.as,
          "as-child": z.asChild,
          dir: l(i)
        }, z.$attrs), {
          default: h(() => [
            x(z.$slots, "default", {
              open: l(c),
              modelValue: l(d)
            }),
            l(M) && n.name ? (y(), C(l(Sm), {
              key: 0,
              name: n.name,
              value: l(d)
            }, null, 8, ["name", "value"])) : ce("", !0)
          ]),
          _: 3
        }, 16, ["style", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), Bm = /* @__PURE__ */ w({
  __name: "ComboboxInput",
  props: {
    type: { default: "text" },
    disabled: { type: Boolean },
    autoFocus: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(e) {
    const t = e, n = ua(), { forwardRef: a, currentElement: o } = V();
    ue(() => {
      const c = o.value.nodeName === "INPUT" ? o.value : o.value.querySelector("input");
      c && (n.onInputElementChange(c), setTimeout(() => {
        t.autoFocus && (c == null || c.focus());
      }, 1));
    });
    const r = O(() => t.disabled || n.disabled.value || !1), s = E();
    cu(() => {
      var c;
      return s.value = (c = n.selectedElement.value) == null ? void 0 : c.id;
    });
    function i(c) {
      n.open.value ? n.onInputNavigation(c.key === "ArrowUp" ? "up" : "down") : n.onOpenChange(!0);
    }
    function u(c) {
      n.open.value && n.onInputNavigation(c.key === "Home" ? "home" : "end");
    }
    function d(c) {
      var f;
      n.searchTerm.value = (f = c.target) == null ? void 0 : f.value, n.open.value || n.onOpenChange(!0), n.isUserInputted.value = !0;
    }
    return (c, f) => (y(), C(l(Y), {
      ref: l(a),
      as: c.as,
      "as-child": c.asChild,
      type: c.type,
      disabled: r.value,
      value: l(n).searchTerm.value,
      "aria-expanded": l(n).open.value,
      "aria-controls": l(n).contentId,
      "aria-disabled": r.value ?? void 0,
      "aria-activedescendant": s.value,
      "aria-autocomplete": "list",
      role: "combobox",
      autocomplete: "false",
      onInput: d,
      onKeydown: [
        nt(ke(i, ["prevent"]), ["down", "up"]),
        nt(l(n).onInputEnter, ["enter"]),
        nt(ke(u, ["prevent"]), ["home", "end"])
      ],
      onCompositionstart: l(n).onCompositionStart,
      onCompositionend: l(n).onCompositionEnd
    }, {
      default: h(() => [
        x(c.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "disabled", "value", "aria-expanded", "aria-controls", "aria-disabled", "aria-activedescendant", "onKeydown", "onCompositionstart", "onCompositionend"]));
  }
}), [dd, Pm] = we("ComboboxGroup"), Dm = /* @__PURE__ */ w({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { currentRef: n, currentElement: a } = V(), o = Ve(void 0, "radix-vue-combobox-group"), r = ua(), s = E(!1);
    function i() {
      if (!a.value)
        return;
      const u = a.value.querySelectorAll("[data-radix-vue-combobox-item]:not([data-hidden])");
      s.value = !!u.length;
    }
    return Wp(a, () => {
      re(() => {
        i();
      });
    }, { childList: !0 }), te(() => r.searchTerm.value, () => {
      re(() => {
        i();
      });
    }, { immediate: !0 }), Pm({
      id: o
    }), (u, d) => rt((y(), C(l(Y), k(t, {
      ref_key: "currentRef",
      ref: n,
      role: "group",
      "aria-labelledby": l(o)
    }), {
      default: h(() => [
        x(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"])), [
      [$l, s.value]
    ]);
  }
}), km = /* @__PURE__ */ w({
  __name: "ComboboxLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    V();
    const n = dd({ id: "" });
    return (a, o) => (y(), C(l(Y), k(t, {
      id: l(n).id
    }), {
      default: h(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), [n$, Tm] = we("ComboboxContent"), Im = /* @__PURE__ */ w({
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
    const n = e, a = t, { position: o } = Ce(n), r = ua();
    Va(n.bodyLock);
    const { forwardRef: s, currentElement: i } = V();
    qa(r.parentElement);
    const u = O(() => n.position === "popper" ? n : {}), d = He(u.value);
    function c(p) {
      r.onSelectedValueChange("");
    }
    ue(() => {
      r.onContentElementChange(i.value);
    });
    const f = {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      "--radix-combobox-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-combobox-content-available-width": "var(--radix-popper-available-width)",
      "--radix-combobox-content-available-height": "var(--radix-popper-available-height)",
      "--radix-combobox-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-combobox-trigger-height": "var(--radix-popper-anchor-height)"
    };
    return Tm({ position: o }), (p, m) => (y(), C(l(as), null, {
      default: h(() => [
        p.dismissable ? (y(), C(l(sa), {
          key: 0,
          "as-child": "",
          "disable-outside-pointer-events": p.disableOutsidePointerEvents,
          onDismiss: m[0] || (m[0] = (v) => l(r).onOpenChange(!1)),
          onFocusOutside: m[1] || (m[1] = (v) => {
            var g;
            (g = l(r).parentElement.value) != null && g.contains(v.target) && v.preventDefault(), a("focusOutside", v);
          }),
          onInteractOutside: m[2] || (m[2] = (v) => a("interactOutside", v)),
          onEscapeKeyDown: m[3] || (m[3] = (v) => a("escapeKeyDown", v)),
          onPointerDownOutside: m[4] || (m[4] = (v) => {
            var g;
            (g = l(r).parentElement.value) != null && g.contains(v.target) && v.preventDefault(), a("pointerDownOutside", v);
          })
        }, {
          default: h(() => [
            (y(), C(at(l(o) === "popper" ? l(Qn) : l(Y)), k({ ...p.$attrs, ...l(d) }, {
              id: l(r).contentId,
              ref: l(s),
              role: "listbox",
              "data-state": l(r).open.value ? "open" : "closed",
              style: {
                // flex layout so we can place the scroll buttons properly
                display: "flex",
                flexDirection: "column",
                // reset the outline by default as the content MAY get focused
                outline: "none",
                ...l(o) === "popper" ? f : {}
              },
              onPointerleave: c
            }), {
              default: h(() => [
                x(p.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "data-state", "style"]))
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])) : (y(), C(at(l(o) === "popper" ? l(Qn) : l(Y)), k({ key: 1 }, { ...p.$attrs, ...u.value }, {
          id: l(r).contentId,
          ref: l(s),
          role: "listbox",
          "data-state": l(r).open.value ? "open" : "closed",
          style: {
            // flex layout so we can place the scroll buttons properly
            display: "flex",
            flexDirection: "column",
            // reset the outline by default as the content MAY get focused
            outline: "none",
            ...l(o) === "popper" ? f : {}
          },
          onPointerleave: c
        }), {
          default: h(() => [
            x(p.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "data-state", "style"]))
      ]),
      _: 3
    }));
  }
}), Fm = /* @__PURE__ */ w({
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
    const n = de(e, t), { forwardRef: a } = V(), o = ua();
    return o.contentId || (o.contentId = Ve(void 0, "radix-vue-combobox-content")), (r, s) => (y(), C(l(pt), {
      present: r.forceMount || l(o).open.value
    }, {
      default: h(() => [
        R(Im, k({ ...l(n), ...r.$attrs }, { ref: l(a) }), {
          default: h(() => [
            x(r.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Mm = /* @__PURE__ */ w({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    V();
    const n = ua(), a = O(() => n.filteredOptions.value.length === 0);
    return (o, r) => a.value ? (y(), C(l(Y), Q(k({ key: 0 }, t)), {
      default: h(() => [
        x(o.$slots, "default", {}, () => [
          ge("No options")
        ])
      ]),
      _: 3
    }, 16)) : ce("", !0);
  }
});
function Rm(e) {
  const t = jo({
    nonce: E()
  });
  return O(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.nonce) == null ? void 0 : n.value);
  });
}
const [a$, Lm] = we("ComboboxItem"), Nm = "combobox.select", Vm = /* @__PURE__ */ w({
  __name: "ComboboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, a = t, { disabled: o } = Ce(n), r = ua();
    dd({ id: "", options: E([]) });
    const { forwardRef: s } = V(), i = O(
      () => {
        var g, b;
        return r.multiple.value && Array.isArray(r.modelValue.value) ? (g = r.modelValue.value) == null ? void 0 : g.some((_) => gn(_, n.value)) : gn((b = r.modelValue) == null ? void 0 : b.value, n.value);
      }
    ), u = O(() => gn(r.selectedValue.value, n.value)), d = Ve(void 0, "radix-vue-combobox-item"), c = Ve(void 0, "radix-vue-combobox-option"), f = O(() => r.isUserInputted.value ? r.searchTerm.value === "" || !!r.filteredOptions.value.find((g) => gn(g, n.value)) : !0);
    async function p(g) {
      a("select", g), !(g != null && g.defaultPrevented) && !o.value && g && r.onValueChange(n.value);
    }
    function m(g) {
      if (!g)
        return;
      const b = { originalEvent: g, value: n.value };
      Nl(Nm, p, b);
    }
    async function v(g) {
      await re(), !g.defaultPrevented && r.onSelectedValueChange(n.value);
    }
    if (n.value === "")
      throw new Error(
        "A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder."
      );
    return Lm({
      isSelected: i
    }), (g, b) => (y(), C(l(Yo), { value: g.value }, {
      default: h(() => [
        rt(R(l(Y), {
          id: l(c),
          ref: l(s),
          role: "option",
          tabindex: "-1",
          "aria-labelledby": l(d),
          "data-highlighted": u.value ? "" : void 0,
          "aria-selected": i.value,
          "data-state": i.value ? "checked" : "unchecked",
          "aria-disabled": l(o) || void 0,
          "data-disabled": l(o) ? "" : void 0,
          as: g.as,
          "as-child": g.asChild,
          "data-hidden": f.value ? void 0 : !0,
          onClick: m,
          onPointermove: v
        }, {
          default: h(() => [
            x(g.$slots, "default", {}, () => [
              ge(pe(g.value), 1)
            ])
          ]),
          _: 3
        }, 8, ["id", "aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "as", "as-child", "data-hidden"]), [
          [$l, f.value]
        ])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), qm = /* @__PURE__ */ w({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return V(), (n, a) => (y(), C(l(Y), k(t, { "aria-hidden": "true" }), {
      default: h(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), cd = /* @__PURE__ */ w({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (y(), C(l(za), Q(ne(t)), {
      default: h(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function zm() {
  const e = E(!1);
  return ue(() => {
    Xn("keydown", () => {
      e.value = !0;
    }, { capture: !0, passive: !0 }), Xn(["pointerdown", "pointermove"], () => {
      e.value = !1;
    }, { capture: !0, passive: !0 });
  }), e;
}
const jm = Wu(zm), [Sn, fd] = we(["MenuRoot", "MenuSub"], "MenuContext"), [Ka, Km] = we("MenuRoot"), Hm = /* @__PURE__ */ w({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, a = t, { modal: o, dir: r } = Ce(n), s = sn(r), i = De(n, "open", a), u = E(), d = jm();
    return fd({
      open: i,
      onOpenChange: (c) => {
        i.value = c;
      },
      content: u,
      onContentChange: (c) => {
        u.value = c;
      }
    }), Km({
      onClose: () => {
        i.value = !1;
      },
      isUsingKeyboardRef: d,
      dir: s,
      modal: o
    }), (c, f) => (y(), C(l(ia), null, {
      default: h(() => [
        x(c.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Wm = "rovingFocusGroup.onEntryFocus", Um = { bubbles: !1, cancelable: !0 }, Gm = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Ym(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Xm(e, t, n) {
  const a = Ym(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(a)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(a)))
    return Gm[a];
}
function pd(e, t = !1) {
  const n = Ke();
  for (const a of e)
    if (a === n || (a.focus({ preventScroll: t }), Ke() !== n))
      return;
}
function Qm(e, t) {
  return e.map((n, a) => e[(t + a) % e.length]);
}
const [Jm, Zm] = we("RovingFocusGroup"), vd = /* @__PURE__ */ w({
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
    const a = e, o = n, { loop: r, orientation: s, dir: i } = Ce(a), u = sn(i), d = De(a, "currentTabStopId", o, {
      defaultValue: a.defaultCurrentTabStopId,
      passive: a.currentTabStopId === void 0
    }), c = E(!1), f = E(!1), p = E(0), { getItems: m } = ns();
    function v(b) {
      const _ = !f.value;
      if (b.currentTarget && b.target === b.currentTarget && _ && !c.value) {
        const $ = new CustomEvent(Wm, Um);
        if (b.currentTarget.dispatchEvent($), o("entryFocus", $), !$.defaultPrevented) {
          const S = m().map((B) => B.ref).filter((B) => B.dataset.disabled !== ""), P = S.find((B) => B.getAttribute("data-active") === "true"), A = S.find(
            (B) => B.id === d.value
          ), D = [P, A, ...S].filter(
            Boolean
          );
          pd(D, a.preventScrollOnEntryFocus);
        }
      }
      f.value = !1;
    }
    function g() {
      setTimeout(() => {
        f.value = !1;
      }, 1);
    }
    return t({
      getItems: m
    }), Zm({
      loop: r,
      dir: u,
      orientation: s,
      currentTabStopId: d,
      onItemFocus: (b) => {
        d.value = b;
      },
      onItemShiftTab: () => {
        c.value = !0;
      },
      onFocusableItemAdd: () => {
        p.value++;
      },
      onFocusableItemRemove: () => {
        p.value--;
      }
    }), (b, _) => (y(), C(l(as), null, {
      default: h(() => [
        R(l(Y), {
          tabindex: c.value || p.value === 0 ? -1 : 0,
          "data-orientation": l(s),
          as: b.as,
          "as-child": b.asChild,
          dir: l(u),
          style: { outline: "none" },
          onMousedown: _[0] || (_[0] = ($) => f.value = !0),
          onMouseup: g,
          onFocus: v,
          onBlur: _[1] || (_[1] = ($) => c.value = !1)
        }, {
          default: h(() => [
            x(b.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), eg = /* @__PURE__ */ w({
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
    const t = e, n = Jm(), a = O(() => t.tabStopId || Ve()), o = O(
      () => n.currentTabStopId.value === a.value
    ), { getItems: r } = os();
    ue(() => {
      t.focusable && n.onFocusableItemAdd();
    }), Ge(() => {
      t.focusable && n.onFocusableItemRemove();
    });
    function s(i) {
      if (i.key === "Tab" && i.shiftKey) {
        n.onItemShiftTab();
        return;
      }
      if (i.target !== i.currentTarget)
        return;
      const u = Xm(
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
          d = n.loop.value ? Qm(d, c + 1) : d.slice(c + 1);
        }
        re(() => pd(d));
      }
    }
    return (i, u) => (y(), C(l(Yo), null, {
      default: h(() => [
        R(l(Y), {
          tabindex: o.value ? 0 : -1,
          "data-orientation": l(n).orientation.value,
          "data-active": i.active,
          "data-disabled": i.focusable ? void 0 : "",
          as: i.as,
          "as-child": i.asChild,
          onMousedown: u[0] || (u[0] = (d) => {
            i.focusable ? l(n).onItemFocus(a.value) : d.preventDefault();
          }),
          onFocus: u[1] || (u[1] = (d) => l(n).onItemFocus(a.value)),
          onKeydown: s
        }, {
          default: h(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "data-active", "data-disabled", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), [rs, tg] = we("MenuContent"), ls = /* @__PURE__ */ w({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ Al({
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
    ...ud
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = Sn(), r = Ka(), { trapFocus: s, disableOutsidePointerEvents: i, loop: u } = Ce(n);
    jl(), Va(i.value);
    const d = E(""), c = E(0), f = E(0), p = E(null), m = E("right"), v = E(0), g = E(null), { createCollection: b } = ra(), { forwardRef: _, currentElement: $ } = V(), S = b($);
    te($, (T) => {
      o.onContentChange(T);
    });
    const { handleTypeaheadSearch: P } = Kl(S);
    Ge(() => {
      window.clearTimeout(c.value);
    });
    function A(T) {
      var L, M;
      return m.value === ((L = p.value) == null ? void 0 : L.side) && Qv(T, (M = p.value) == null ? void 0 : M.area);
    }
    async function D(T) {
      var L;
      a("openAutoFocus", T), !T.defaultPrevented && (T.preventDefault(), (L = $.value) == null || L.focus({
        preventScroll: !0
      }));
    }
    function B(T) {
      if (T.defaultPrevented)
        return;
      const L = T.target.closest("[data-radix-menu-content]") === T.currentTarget, M = T.ctrlKey || T.altKey || T.metaKey, K = T.key.length === 1, j = Xu(
        T,
        Ke(),
        $.value,
        {
          loop: u.value,
          arrowKeyOptions: "vertical",
          dir: r == null ? void 0 : r.dir.value,
          focus: !0,
          attributeName: "[data-radix-vue-collection-item]:not([data-disabled])"
        }
      );
      if (j)
        return j == null ? void 0 : j.focus();
      if (T.code === "Space" || (L && (T.key === "Tab" && T.preventDefault(), !M && K && P(T.key)), T.target !== $.value) || !Uv.includes(T.key))
        return;
      T.preventDefault();
      const G = S.value;
      rd.includes(T.key) && G.reverse(), rl(G);
    }
    function I(T) {
      var L, M;
      (M = (L = T == null ? void 0 : T.currentTarget) == null ? void 0 : L.contains) != null && M.call(L, T.target) || (window.clearTimeout(c.value), d.value = "");
    }
    function F(T) {
      var L;
      if (!Da(T))
        return;
      const M = T.target, K = v.value !== T.clientX;
      if ((L = T == null ? void 0 : T.currentTarget) != null && L.contains(M) && K) {
        const j = T.clientX > v.value ? "right" : "left";
        m.value = j, v.value = T.clientX;
      }
    }
    return tg({
      onItemEnter: (T) => !!A(T),
      onItemLeave: (T) => {
        var L;
        A(T) || ((L = $.value) == null || L.focus(), g.value = null);
      },
      onTriggerLeave: (T) => !!A(T),
      searchRef: d,
      pointerGraceTimerRef: f,
      onPointerGraceIntentChange: (T) => {
        p.value = T;
      }
    }), (T, L) => (y(), C(l(Wo), {
      "as-child": "",
      trapped: l(s),
      onMountAutoFocus: D,
      onUnmountAutoFocus: L[7] || (L[7] = (M) => a("closeAutoFocus", M))
    }, {
      default: h(() => [
        R(l(sa), {
          "as-child": "",
          "disable-outside-pointer-events": l(i),
          onEscapeKeyDown: L[2] || (L[2] = (M) => a("escapeKeyDown", M)),
          onPointerDownOutside: L[3] || (L[3] = (M) => a("pointerDownOutside", M)),
          onFocusOutside: L[4] || (L[4] = (M) => a("focusOutside", M)),
          onInteractOutside: L[5] || (L[5] = (M) => a("interactOutside", M)),
          onDismiss: L[6] || (L[6] = (M) => a("dismiss"))
        }, {
          default: h(() => [
            R(l(vd), {
              "current-tab-stop-id": g.value,
              "onUpdate:currentTabStopId": L[0] || (L[0] = (M) => g.value = M),
              "as-child": "",
              orientation: "vertical",
              dir: l(r).dir.value,
              loop: l(u),
              onEntryFocus: L[1] || (L[1] = (M) => {
                a("entryFocus", M), l(r).isUsingKeyboardRef.value || M.preventDefault();
              })
            }, {
              default: h(() => [
                R(l(Qn), {
                  ref: l(_),
                  role: "menu",
                  as: T.as,
                  "as-child": T.asChild,
                  "aria-orientation": "vertical",
                  "data-radix-menu-content": "",
                  "data-state": l(Ql)(l(o).open.value),
                  dir: l(r).dir.value,
                  side: T.side,
                  "side-offset": T.sideOffset,
                  align: T.align,
                  "align-offset": T.alignOffset,
                  "avoid-collisions": T.avoidCollisions,
                  "collision-boundary": T.collisionBoundary,
                  "collision-padding": T.collisionPadding,
                  "arrow-padding": T.arrowPadding,
                  "prioritize-position": T.prioritizePosition,
                  sticky: T.sticky,
                  "hide-when-detached": T.hideWhenDetached,
                  onKeydown: B,
                  onBlur: I,
                  onPointermove: F
                }, {
                  default: h(() => [
                    x(T.$slots, "default")
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
}), md = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = rs(), { forwardRef: a } = V(), o = E(!1);
    async function r(i) {
      if (!i.defaultPrevented && Da(i)) {
        if (t.disabled)
          n.onItemLeave(i);
        else if (!n.onItemEnter(i)) {
          const u = i.currentTarget;
          u == null || u.focus({ preventScroll: !0 });
        }
      }
    }
    async function s(i) {
      await re(), !i.defaultPrevented && Da(i) && n.onItemLeave(i);
    }
    return (i, u) => (y(), C(l(Yo), {
      value: { textValue: i.textValue }
    }, {
      default: h(() => [
        R(l(Y), k({
          ref: l(a),
          role: "menuitem",
          tabindex: "-1"
        }, i.$attrs, {
          as: i.as,
          "as-child": i.asChild,
          "data-radix-vue-collection-item": "",
          "aria-disabled": i.disabled || void 0,
          "data-disabled": i.disabled ? "" : void 0,
          "data-highlighted": o.value ? "" : void 0,
          onPointermove: r,
          onPointerleave: s,
          onFocus: u[0] || (u[0] = async (d) => {
            await re(), !(d.defaultPrevented || i.disabled) && (o.value = !0);
          }),
          onBlur: u[1] || (u[1] = async (d) => {
            await re(), !d.defaultPrevented && (o.value = !1);
          })
        }), {
          default: h(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "aria-disabled", "data-disabled", "data-highlighted"])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), ss = /* @__PURE__ */ w({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, a = t, { forwardRef: o, currentElement: r } = V(), s = Ka(), i = rs(), u = E(!1);
    async function d() {
      const c = r.value;
      if (!n.disabled && c) {
        const f = new CustomEvent(Hv, {
          bubbles: !0,
          cancelable: !0
        });
        a("select", f), await re(), f.defaultPrevented ? u.value = !1 : s.onClose();
      }
    }
    return (c, f) => (y(), C(md, k(n, {
      ref: l(o),
      onClick: d,
      onPointerdown: f[0] || (f[0] = () => {
        u.value = !0;
      }),
      onPointerup: f[1] || (f[1] = async (p) => {
        var m;
        await re(), !p.defaultPrevented && (u.value || (m = p.currentTarget) == null || m.click());
      }),
      onKeydown: f[2] || (f[2] = async (p) => {
        const m = l(i).searchRef.value !== "";
        c.disabled || m && p.key === " " || l(ol).includes(p.key) && (p.currentTarget.click(), p.preventDefault());
      })
    }), {
      default: h(() => [
        x(c.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [ng, gd] = we(
  ["MenuCheckboxItem", "MenuRadioItem"],
  "MenuItemIndicatorContext"
), ag = /* @__PURE__ */ w({
  __name: "MenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = ng({
      checked: E(!1)
    });
    return (n, a) => (y(), C(l(pt), {
      present: n.forceMount || l(Ao)(l(t).checked.value) || l(t).checked.value === !0
    }, {
      default: h(() => [
        R(l(Y), {
          as: n.as,
          "as-child": n.asChild,
          "data-state": l(Jl)(l(t).checked.value)
        }, {
          default: h(() => [
            x(n.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child", "data-state"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), og = /* @__PURE__ */ w({
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
    const n = e, a = t, o = De(n, "checked", a);
    return gd({ checked: o }), (r, s) => (y(), C(ss, k({ role: "menuitemcheckbox" }, n, {
      "aria-checked": l(Ao)(l(o)) ? "mixed" : l(o),
      "data-state": l(Jl)(l(o)),
      onSelect: s[0] || (s[0] = async (i) => {
        a("select", i), l(Ao)(l(o)) ? o.value = !0 : o.value = !l(o);
      })
    }), {
      default: h(() => [
        x(r.$slots, "default", { checked: l(o) })
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), rg = /* @__PURE__ */ w({
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
    const n = e, a = t, o = de(n, a), r = Sn(), { forwardRef: s, currentElement: i } = V();
    return qa(i), (u, d) => (y(), C(ls, k(l(o), {
      ref: l(s),
      "trap-focus": l(r).open.value,
      "disable-outside-pointer-events": l(r).open.value,
      "disable-outside-scroll": !0,
      onDismiss: d[0] || (d[0] = (c) => l(r).onOpenChange(!1)),
      onFocusOutside: d[1] || (d[1] = ke((c) => a("focusOutside", c), ["prevent"]))
    }), {
      default: h(() => [
        x(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), lg = /* @__PURE__ */ w({
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
    const n = de(e, t), a = Sn();
    return (o, r) => (y(), C(ls, k(l(n), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      "disable-outside-scroll": !1,
      onDismiss: r[0] || (r[0] = (s) => l(a).onOpenChange(!1))
    }), {
      default: h(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), sg = /* @__PURE__ */ w({
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
    const n = de(e, t), a = Sn(), o = Ka();
    return (r, s) => (y(), C(l(pt), {
      present: r.forceMount || l(a).open.value
    }, {
      default: h(() => [
        l(o).modal.value ? (y(), C(rg, Q(k({ key: 0 }, { ...r.$attrs, ...l(n) })), {
          default: h(() => [
            x(r.$slots, "default")
          ]),
          _: 3
        }, 16)) : (y(), C(lg, Q(k({ key: 1 }, { ...r.$attrs, ...l(n) })), {
          default: h(() => [
            x(r.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), yd = /* @__PURE__ */ w({
  __name: "MenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (y(), C(l(Y), k({ role: "group" }, t), {
      default: h(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ig = /* @__PURE__ */ w({
  __name: "MenuLabel",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (n, a) => (y(), C(l(Y), Q(ne(t)), {
      default: h(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ug = /* @__PURE__ */ w({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, a) => (y(), C(l(la), Q(ne(t)), {
      default: h(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [dg, cg] = we("MenuRadioGroup"), fg = /* @__PURE__ */ w({
  __name: "MenuRadioGroup",
  props: {
    modelValue: { default: "" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = De(n, "modelValue", t);
    return cg({
      modelValue: a,
      onValueChange: (o) => {
        a.value = o;
      }
    }), (o, r) => (y(), C(yd, Q(ne(n)), {
      default: h(() => [
        x(o.$slots, "default", { modelValue: l(a) })
      ]),
      _: 3
    }, 16));
  }
}), pg = /* @__PURE__ */ w({
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
    const n = e, a = t, { value: o } = Ce(n), r = dg(), s = O(
      () => r.modelValue.value === (o == null ? void 0 : o.value)
    );
    return gd({ checked: s }), (i, u) => (y(), C(ss, k({ role: "menuitemradio" }, n, {
      "aria-checked": s.value,
      "data-state": l(Jl)(s.value),
      onSelect: u[0] || (u[0] = async (d) => {
        a("select", d), l(r).onValueChange(l(o));
      })
    }), {
      default: h(() => [
        x(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), vg = /* @__PURE__ */ w({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (y(), C(l(Y), k(t, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: h(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [hd, mg] = we("MenuSub"), gg = /* @__PURE__ */ w({
  __name: "MenuSub",
  props: {
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, a = De(n, "open", t, {
      defaultValue: !1,
      passive: n.open === void 0
    }), o = Sn(), r = E(), s = E();
    return Se((i) => {
      (o == null ? void 0 : o.open.value) === !1 && (a.value = !1), i(() => a.value = !1);
    }), fd({
      open: a,
      onOpenChange: (i) => {
        a.value = i;
      },
      content: s,
      onContentChange: (i) => {
        s.value = i;
      }
    }), mg({
      triggerId: "",
      contentId: "",
      trigger: r,
      onTriggerChange: (i) => {
        r.value = i;
      }
    }), (i, u) => (y(), C(l(ia), null, {
      default: h(() => [
        x(i.$slots, "default")
      ]),
      _: 3
    }));
  }
}), yg = /* @__PURE__ */ w({
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
    const n = de(e, t), a = Sn(), o = Ka(), r = hd(), { forwardRef: s, currentElement: i } = V();
    return r.contentId || (r.contentId = Ve(void 0, "radix-vue-menu-sub-content")), (u, d) => (y(), C(l(pt), {
      present: u.forceMount || l(a).open.value
    }, {
      default: h(() => [
        R(ls, k(l(n), {
          id: l(r).contentId,
          ref: l(s),
          "aria-labelledby": l(r).triggerId,
          align: "start",
          side: l(o).dir.value === "rtl" ? "left" : "right",
          "disable-outside-pointer-events": !1,
          "disable-outside-scroll": !1,
          "trap-focus": !1,
          onOpenAutoFocus: d[0] || (d[0] = ke((c) => {
            var f;
            l(o).isUsingKeyboardRef.value && ((f = l(i)) == null || f.focus());
          }, ["prevent"])),
          onCloseAutoFocus: d[1] || (d[1] = ke(() => {
          }, ["prevent"])),
          onFocusOutside: d[2] || (d[2] = (c) => {
            c.defaultPrevented || c.target !== l(r).trigger.value && l(a).onOpenChange(!1);
          }),
          onEscapeKeyDown: d[3] || (d[3] = (c) => {
            l(o).onClose(), c.preventDefault();
          }),
          onKeydown: d[4] || (d[4] = (c) => {
            var f, p;
            const m = (f = c.currentTarget) == null ? void 0 : f.contains(c.target), v = l(Yv)[l(o).dir.value].includes(c.key);
            m && v && (l(a).onOpenChange(!1), (p = l(r).trigger.value) == null || p.focus(), c.preventDefault());
          })
        }), {
          default: h(() => [
            x(u.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-labelledby", "side"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), hg = /* @__PURE__ */ w({
  __name: "MenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Sn(), a = Ka(), o = hd(), r = rs(), s = E(null);
    o.triggerId || (o.triggerId = Ve(void 0, "radix-vue-menu-sub-trigger"));
    function i() {
      s.value && window.clearTimeout(s.value), s.value = null;
    }
    Ge(() => {
      i();
    });
    function u(f) {
      !Da(f) || r.onItemEnter(f) || !t.disabled && !n.open.value && !s.value && (r.onPointerGraceIntentChange(null), s.value = window.setTimeout(() => {
        n.onOpenChange(!0), i();
      }, 100));
    }
    async function d(f) {
      var p, m;
      if (!Da(f))
        return;
      i();
      const v = (p = n.content.value) == null ? void 0 : p.getBoundingClientRect();
      if (v != null && v.width) {
        const g = (m = n.content.value) == null ? void 0 : m.dataset.side, b = g === "right", _ = b ? -5 : 5, $ = v[b ? "left" : "right"], S = v[b ? "right" : "left"];
        r.onPointerGraceIntentChange({
          area: [
            // Apply a bleed on clientX to ensure that our exit point is
            // consistently within polygon bounds
            { x: f.clientX + _, y: f.clientY },
            { x: $, y: v.top },
            { x: S, y: v.top },
            { x: S, y: v.bottom },
            { x: $, y: v.bottom }
          ],
          side: g
        }), window.clearTimeout(r.pointerGraceTimerRef.value), r.pointerGraceTimerRef.value = window.setTimeout(
          () => r.onPointerGraceIntentChange(null),
          300
        );
      } else {
        if (r.onTriggerLeave(f))
          return;
        r.onPointerGraceIntentChange(null);
      }
    }
    async function c(f) {
      var p;
      const m = r.searchRef.value !== "";
      t.disabled || m && f.key === " " || Gv[a.dir.value].includes(f.key) && (n.onOpenChange(!0), await re(), (p = n.content.value) == null || p.focus(), f.preventDefault());
    }
    return (f, p) => (y(), C(cd, { "as-child": "" }, {
      default: h(() => [
        R(md, k(t, {
          id: l(o).triggerId,
          ref: (m) => {
            var v;
            (v = l(o)) == null || v.onTriggerChange(m == null ? void 0 : m.$el);
          },
          "aria-haspopup": "menu",
          "aria-expanded": l(n).open.value,
          "aria-controls": l(o).contentId,
          "data-state": l(Ql)(l(n).open.value),
          onClick: p[0] || (p[0] = async (m) => {
            t.disabled || m.defaultPrevented || (m.currentTarget.focus(), l(n).open.value || l(n).onOpenChange(!0));
          }),
          onPointermove: u,
          onPointerleave: d,
          onKeydown: c
        }), {
          default: h(() => [
            x(f.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-expanded", "aria-controls", "data-state"])
      ]),
      _: 3
    }));
  }
}), [bd, bg] = we("DropdownMenuRoot"), wg = /* @__PURE__ */ w({
  __name: "DropdownMenuRoot",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, a = t;
    V();
    const o = De(n, "open", a, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), r = E(), { modal: s, dir: i } = Ce(n), u = sn(i);
    return bg({
      open: o,
      onOpenChange: (d) => {
        o.value = d;
      },
      onOpenToggle: () => {
        o.value = !o.value;
      },
      triggerId: "",
      triggerElement: r,
      contentId: "",
      modal: s,
      dir: u
    }), (d, c) => (y(), C(l(Hm), {
      open: l(o),
      "onUpdate:open": c[0] || (c[0] = (f) => ct(o) ? o.value = f : null),
      dir: l(u),
      modal: l(s)
    }, {
      default: h(() => [
        x(d.$slots, "default", { open: l(o) })
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
}), _g = /* @__PURE__ */ w({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = bd(), { forwardRef: a, currentElement: o } = V();
    return ue(() => {
      n.triggerElement = o;
    }), n.triggerId || (n.triggerId = Ve(void 0, "radix-vue-dropdown-menu-trigger")), (r, s) => (y(), C(l(cd), { "as-child": "" }, {
      default: h(() => [
        R(l(Y), {
          id: l(n).triggerId,
          ref: l(a),
          type: r.as === "button" ? "button" : void 0,
          "as-child": t.asChild,
          as: r.as,
          "aria-haspopup": "menu",
          "aria-expanded": l(n).open.value,
          "aria-controls": l(n).open.value ? l(n).contentId : void 0,
          "data-disabled": r.disabled ? "" : void 0,
          disabled: r.disabled,
          "data-state": l(n).open.value ? "open" : "closed",
          onClick: s[0] || (s[0] = async (i) => {
            var u;
            !r.disabled && i.button === 0 && i.ctrlKey === !1 && ((u = l(n)) == null || u.onOpenToggle(), await re(), l(n).open.value && i.preventDefault());
          }),
          onKeydown: s[1] || (s[1] = nt(
            (i) => {
              r.disabled || (["Enter", " "].includes(i.key) && l(n).onOpenToggle(), i.key === "ArrowDown" && l(n).onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
            },
            ["enter", "space", "arrow-down"]
          ))
        }, {
          default: h(() => [
            x(r.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as-child", "as", "aria-expanded", "aria-controls", "data-disabled", "disabled", "data-state"])
      ]),
      _: 3
    }));
  }
}), xg = /* @__PURE__ */ w({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, a) => (y(), C(l(ug), Q(ne(t)), {
      default: h(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Cg = /* @__PURE__ */ w({
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
    const n = de(e, t);
    V();
    const a = bd(), o = E(!1);
    function r(s) {
      s.defaultPrevented || (o.value || setTimeout(() => {
        var i;
        (i = a.triggerElement.value) == null || i.focus();
      }, 0), o.value = !1, s.preventDefault());
    }
    return a.contentId || (a.contentId = Ve(void 0, "radix-vue-dropdown-menu-content")), (s, i) => {
      var u;
      return y(), C(l(sg), k(l(n), {
        id: l(a).contentId,
        "aria-labelledby": (u = l(a)) == null ? void 0 : u.triggerId,
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
          const f = d.detail.originalEvent, p = f.button === 0 && f.ctrlKey === !0, m = f.button === 2 || p;
          (!l(a).modal.value || m) && (o.value = !0), (c = l(a).triggerElement.value) != null && c.contains(d.target) && d.preventDefault();
        })
      }), {
        default: h(() => [
          x(s.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby"]);
    };
  }
}), Sg = /* @__PURE__ */ w({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, a = un(t);
    return V(), (o, r) => (y(), C(l(ss), Q(ne({ ...n, ...l(a) })), {
      default: h(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $g = /* @__PURE__ */ w({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return V(), (n, a) => (y(), C(l(yd), Q(ne(t)), {
      default: h(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Og = /* @__PURE__ */ w({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return V(), (n, a) => (y(), C(l(vg), Q(ne(t)), {
      default: h(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Eg = /* @__PURE__ */ w({
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
    const n = e, a = un(t);
    return V(), (o, r) => (y(), C(l(og), Q(ne({ ...n, ...l(a) })), {
      default: h(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wd = /* @__PURE__ */ w({
  __name: "DropdownMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return V(), (n, a) => (y(), C(l(ag), Q(ne(t)), {
      default: h(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ag = /* @__PURE__ */ w({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return V(), (n, a) => (y(), C(l(ig), Q(ne(t)), {
      default: h(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Bg = /* @__PURE__ */ w({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = un(t);
    return V(), (o, r) => (y(), C(l(fg), Q(ne({ ...n, ...l(a) })), {
      default: h(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Pg = /* @__PURE__ */ w({
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
    const n = de(e, t);
    return V(), (a, o) => (y(), C(l(pg), Q(ne(l(n))), {
      default: h(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Dg = /* @__PURE__ */ w({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, a = De(n, "open", t, {
      passive: n.open === void 0,
      defaultValue: n.defaultOpen ?? !1
    });
    return V(), (o, r) => (y(), C(l(gg), {
      open: l(a),
      "onUpdate:open": r[0] || (r[0] = (s) => ct(a) ? a.value = s : null)
    }, {
      default: h(() => [
        x(o.$slots, "default", { open: l(a) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), kg = /* @__PURE__ */ w({
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
    const n = de(e, t);
    return V(), (a, o) => (y(), C(l(yg), k(l(n), { style: {
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: h(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Tg = /* @__PURE__ */ w({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return V(), (n, a) => (y(), C(l(hg), Q(ne(t)), {
      default: h(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ig = /* @__PURE__ */ w({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(e) {
    const t = e;
    return V(), (n, a) => (y(), C(l(Y), k(t, {
      onMousedown: a[0] || (a[0] = (o) => {
        !o.defaultPrevented && o.detail > 1 && o.preventDefault();
      })
    }), {
      default: h(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [da, Fg] = we("PopoverRoot"), Mg = /* @__PURE__ */ w({
  __name: "PopoverRoot",
  props: {
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: !1 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, a = t, { modal: o } = Ce(n), r = De(n, "open", a, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), s = E(), i = E(!1);
    return Fg({
      contentId: "",
      modal: o,
      open: r,
      onOpenChange: (u) => {
        r.value = u;
      },
      onOpenToggle: () => {
        r.value = !r.value;
      },
      triggerElement: s,
      hasCustomAnchor: i
    }), (u, d) => (y(), C(l(ia), null, {
      default: h(() => [
        x(u.$slots, "default", { open: l(r) })
      ]),
      _: 3
    }));
  }
}), Rg = /* @__PURE__ */ w({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = da(), { forwardRef: a, currentElement: o } = V();
    return ue(() => {
      n.triggerElement.value = o.value;
    }), (r, s) => (y(), C(at(l(n).hasCustomAnchor.value ? l(Y) : l(za)), { "as-child": "" }, {
      default: h(() => [
        R(l(Y), {
          ref: l(a),
          type: r.as === "button" ? "button" : void 0,
          "aria-haspopup": "dialog",
          "aria-expanded": l(n).open.value,
          "aria-controls": l(n).contentId,
          "data-state": l(n).open.value ? "open" : "closed",
          as: r.as,
          "as-child": t.asChild,
          onClick: l(n).onOpenToggle
        }, {
          default: h(() => [
            x(r.$slots, "default")
          ]),
          _: 3
        }, 8, ["type", "aria-expanded", "aria-controls", "data-state", "as", "as-child", "onClick"])
      ]),
      _: 3
    }));
  }
}), Lg = /* @__PURE__ */ w({
  __name: "PopoverPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, a) => (y(), C(l(la), Q(ne(t)), {
      default: h(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), _d = /* @__PURE__ */ w({
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
    const n = e, a = t, o = He(n), { forwardRef: r } = V(), s = da();
    return jl(), (i, u) => (y(), C(l(Wo), {
      "as-child": "",
      loop: "",
      trapped: i.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => a("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => a("closeAutoFocus", d))
    }, {
      default: h(() => [
        R(l(sa), {
          "as-child": "",
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          onPointerDownOutside: u[0] || (u[0] = (d) => a("pointerDownOutside", d)),
          onInteractOutside: u[1] || (u[1] = (d) => a("interactOutside", d)),
          onEscapeKeyDown: u[2] || (u[2] = (d) => a("escapeKeyDown", d)),
          onFocusOutside: u[3] || (u[3] = (d) => a("focusOutside", d)),
          onDismiss: u[4] || (u[4] = (d) => l(s).onOpenChange(!1))
        }, {
          default: h(() => [
            R(l(Qn), k(l(o), {
              id: l(s).contentId,
              ref: l(r),
              "data-state": l(s).open.value ? "open" : "closed",
              role: "dialog",
              style: {
                "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
              }
            }), {
              default: h(() => [
                x(i.$slots, "default")
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
}), Ng = /* @__PURE__ */ w({
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
    const n = e, a = t, o = da(), r = E(!1);
    Va(!0);
    const s = de(n, a), { forwardRef: i, currentElement: u } = V();
    return qa(u), (d, c) => (y(), C(_d, k(l(s), {
      ref: l(i),
      "trap-focus": l(o).open.value,
      "disable-outside-pointer-events": "",
      onCloseAutoFocus: c[0] || (c[0] = ke(
        (f) => {
          var p;
          a("closeAutoFocus", f), r.value || (p = l(o).triggerElement.value) == null || p.focus();
        },
        ["prevent"]
      )),
      onPointerDownOutside: c[1] || (c[1] = (f) => {
        a("pointerDownOutside", f);
        const p = f.detail.originalEvent, m = p.button === 0 && p.ctrlKey === !0, v = p.button === 2 || m;
        r.value = v;
      }),
      onFocusOutside: c[2] || (c[2] = ke(() => {
      }, ["prevent"]))
    }), {
      default: h(() => [
        x(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), Vg = /* @__PURE__ */ w({
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
    const n = e, a = t, o = da(), r = E(!1), s = E(!1), i = de(n, a);
    return (u, d) => (y(), C(_d, k(l(i), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: d[0] || (d[0] = (c) => {
        var f;
        a("closeAutoFocus", c), c.defaultPrevented || (r.value || (f = l(o).triggerElement.value) == null || f.focus(), c.preventDefault()), r.value = !1, s.value = !1;
      }),
      onInteractOutside: d[1] || (d[1] = async (c) => {
        var f;
        a("interactOutside", c), c.defaultPrevented || (r.value = !0, c.detail.originalEvent.type === "pointerdown" && (s.value = !0));
        const p = c.target;
        (f = l(o).triggerElement.value) != null && f.contains(p) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && s.value && c.preventDefault();
      })
    }), {
      default: h(() => [
        x(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), qg = /* @__PURE__ */ w({
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
    const n = e, a = t, o = da(), r = de(n, a), { forwardRef: s } = V();
    return o.contentId || (o.contentId = Ve(void 0, "radix-vue-popover-content")), (i, u) => (y(), C(l(pt), {
      present: i.forceMount || l(o).open.value
    }, {
      default: h(() => [
        l(o).modal.value ? (y(), C(Ng, k({ key: 0 }, l(r), { ref: l(s) }), {
          default: h(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (y(), C(Vg, k({ key: 1 }, l(r), { ref: l(s) }), {
          default: h(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), o$ = /* @__PURE__ */ w({
  __name: "PopoverAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    V();
    const n = da();
    return fu(() => {
      n.hasCustomAnchor.value = !0;
    }), Ge(() => {
      n.hasCustomAnchor.value = !1;
    }), (a, o) => (y(), C(l(za), Q(ne(t)), {
      default: h(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ka = 100, [zg, jg] = we("ProgressRoot"), is = (e) => typeof e == "number";
function Kg(e, t) {
  return Kn(e) || is(e) && !Number.isNaN(e) && e <= t && e >= 0 ? e : (console.error(`Invalid prop \`value\` of value \`${e}\` supplied to \`ProgressRoot\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${ka} if no \`max\` prop is set)
  - \`null\`  or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`), null);
}
function Hg(e) {
  return is(e) && !Number.isNaN(e) && e > 0 ? e : (console.error(
    `Invalid prop \`max\` of value \`${e}\` supplied to \`ProgressRoot\`. Only numbers greater than 0 are valid max values. Defaulting to \`${ka}\`.`
  ), ka);
}
const Wg = /* @__PURE__ */ w({
  __name: "ProgressRoot",
  props: {
    modelValue: {},
    max: { default: ka },
    getValueLabel: { type: Function, default: (e, t) => `${Math.round(e / t * ka)}%` },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "update:max"],
  setup(e, { emit: t }) {
    const n = e, a = t;
    V();
    const o = De(n, "modelValue", a, {
      passive: n.modelValue === void 0
    }), r = De(n, "max", a, {
      passive: n.max === void 0
    });
    te(
      () => o.value,
      async (i) => {
        const u = Kg(i, n.max);
        u !== i && (await re(), o.value = u);
      },
      { immediate: !0 }
    ), te(
      () => n.max,
      (i) => {
        const u = Hg(n.max);
        u !== i && (r.value = u);
      },
      { immediate: !0 }
    );
    const s = O(() => Kn(o.value) ? "indeterminate" : o.value === r.value ? "complete" : "loading");
    return jg({
      modelValue: o,
      max: r,
      progressState: s
    }), (i, u) => (y(), C(l(Y), {
      "as-child": i.asChild,
      as: i.as,
      "aria-valuemax": l(r),
      "aria-valuemin": 0,
      "aria-valuenow": is(l(o)) ? l(o) : void 0,
      "aria-valuetext": i.getValueLabel(l(o), l(r)),
      "aria-label": i.getValueLabel(l(o), l(r)),
      role: "progressbar",
      "data-state": s.value,
      "data-value": l(o) ?? void 0,
      "data-max": l(r)
    }, {
      default: h(() => [
        x(i.$slots, "default", { modelValue: l(o) })
      ]),
      _: 3
    }, 8, ["as-child", "as", "aria-valuemax", "aria-valuenow", "aria-valuetext", "aria-label", "data-state", "data-value", "data-max"]));
  }
}), Ug = /* @__PURE__ */ w({
  __name: "ProgressIndicator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = zg();
    return V(), (a, o) => {
      var r;
      return y(), C(l(Y), k(t, {
        "data-state": l(n).progressState.value,
        "data-value": ((r = l(n).modelValue) == null ? void 0 : r.value) ?? void 0,
        "data-max": l(n).max.value
      }), {
        default: h(() => [
          x(a.$slots, "default")
        ]),
        _: 3
      }, 16, ["data-state", "data-value", "data-max"]);
    };
  }
}), Gg = ["default-value"], Yg = /* @__PURE__ */ w({
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
    const t = e, { value: n } = Ce(t), a = E();
    return (o, r) => (y(), C(l(ja), { "as-child": "" }, {
      default: h(() => [
        rt(H("select", k({
          ref_key: "selectElement",
          ref: a
        }, t, {
          "onUpdate:modelValue": r[0] || (r[0] = (s) => ct(n) ? n.value = s : null),
          "default-value": l(n)
        }), [
          x(o.$slots, "default")
        ], 16, Gg), [
          [gu, l(n)]
        ])
      ]),
      _: 3
    }));
  }
}), Xg = {
  key: 0,
  value: ""
}, [$n, xd] = we("SelectRoot"), [Qg, Jg] = we("SelectRoot"), Zg = /* @__PURE__ */ w({
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
    const n = e, a = t, o = De(n, "modelValue", a, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), r = De(n, "open", a, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), s = E(), i = E(), u = E({
      x: 0,
      y: 0
    }), d = E(!1), { required: c, disabled: f, dir: p } = Ce(n), m = sn(p);
    xd({
      triggerElement: s,
      onTriggerChange: (_) => {
        s.value = _;
      },
      valueElement: i,
      onValueElementChange: (_) => {
        i.value = _;
      },
      valueElementHasChildren: d,
      onValueElementHasChildrenChange: (_) => {
        d.value = _;
      },
      contentId: "",
      modelValue: o,
      onValueChange: (_) => {
        o.value = _;
      },
      open: r,
      required: c,
      onOpenChange: (_) => {
        r.value = _;
      },
      dir: m,
      triggerPointerDownPosRef: u,
      disabled: f
    });
    const v = Ko(s), g = E(/* @__PURE__ */ new Set()), b = O(() => Array.from(g.value).map((_) => {
      var $;
      return ($ = _.props) == null ? void 0 : $.value;
    }).join(";"));
    return Jg({
      onNativeOptionAdd: (_) => {
        g.value.add(_);
      },
      onNativeOptionRemove: (_) => {
        g.value.delete(_);
      }
    }), (_, $) => (y(), C(l(ia), null, {
      default: h(() => [
        x(_.$slots, "default", {
          modelValue: l(o),
          open: l(r)
        }),
        l(v) ? (y(), C(Yg, k({ key: b.value }, _.$attrs, {
          "aria-hidden": "true",
          tabindex: "-1",
          required: l(c),
          name: _.name,
          autocomplete: _.autocomplete,
          disabled: l(f),
          value: l(o),
          onChange: $[0] || ($[0] = (S) => o.value = S.target.value)
        }), {
          default: h(() => [
            l(o) === void 0 ? (y(), q("option", Xg)) : ce("", !0),
            (y(!0), q(Ee, null, st(Array.from(g.value), (S) => (y(), C(at(S), k({ ref_for: !0 }, S.props, {
              key: S.key ?? ""
            }), null, 16))), 128))
          ]),
          _: 1
        }, 16, ["required", "name", "autocomplete", "disabled", "value"])) : ce("", !0)
      ]),
      _: 3
    }));
  }
}), ey = [" ", "Enter", "ArrowUp", "ArrowDown"], ty = [" ", "Enter"], ht = 10;
function Cd(e) {
  return e === "" || Kn(e);
}
const ny = /* @__PURE__ */ w({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = $n(), a = O(() => {
      var m;
      return ((m = n.disabled) == null ? void 0 : m.value) || t.disabled;
    }), { forwardRef: o, currentElement: r } = V();
    n.contentId || (n.contentId = Ve(void 0, "radix-vue-select-content")), ue(() => {
      n.triggerElement = r;
    });
    const { injectCollection: s } = ra(), i = s(), { search: u, handleTypeaheadSearch: d, resetTypeahead: c } = Kl(i);
    function f() {
      a.value || (n.onOpenChange(!0), c());
    }
    function p(m) {
      f(), n.triggerPointerDownPosRef.value = {
        x: Math.round(m.pageX),
        y: Math.round(m.pageY)
      };
    }
    return (m, v) => (y(), C(l(za), { "as-child": "" }, {
      default: h(() => {
        var g, b, _, $;
        return [
          R(l(Y), {
            ref: l(o),
            role: "combobox",
            type: m.as === "button" ? "button" : void 0,
            "aria-controls": l(n).contentId,
            "aria-expanded": l(n).open.value || !1,
            "aria-required": (g = l(n).required) == null ? void 0 : g.value,
            "aria-autocomplete": "none",
            disabled: a.value,
            dir: (b = l(n)) == null ? void 0 : b.dir.value,
            "data-state": (_ = l(n)) != null && _.open.value ? "open" : "closed",
            "data-disabled": a.value ? "" : void 0,
            "data-placeholder": l(Cd)(($ = l(n).modelValue) == null ? void 0 : $.value) ? "" : void 0,
            "as-child": m.asChild,
            as: m.as,
            onClick: v[0] || (v[0] = (S) => {
              var P;
              (P = S == null ? void 0 : S.currentTarget) == null || P.focus();
            }),
            onPointerdown: v[1] || (v[1] = (S) => {
              if (S.pointerType === "touch")
                return S.preventDefault();
              const P = S.target;
              P.hasPointerCapture(S.pointerId) && P.releasePointerCapture(S.pointerId), S.button === 0 && S.ctrlKey === !1 && (p(S), S.preventDefault());
            }),
            onPointerup: v[2] || (v[2] = ke(
              (S) => {
                S.pointerType === "touch" && p(S);
              },
              ["prevent"]
            )),
            onKeydown: v[3] || (v[3] = (S) => {
              const P = l(u) !== "";
              !(S.ctrlKey || S.altKey || S.metaKey) && S.key.length === 1 && P && S.key === " " || (l(d)(S.key), l(ey).includes(S.key) && (f(), S.preventDefault()));
            })
          }, {
            default: h(() => [
              x(m.$slots, "default")
            ]),
            _: 3
          }, 8, ["type", "aria-controls", "aria-expanded", "aria-required", "disabled", "dir", "data-state", "data-disabled", "data-placeholder", "as-child", "as"])
        ];
      }),
      _: 3
    }));
  }
}), ay = /* @__PURE__ */ w({
  __name: "SelectPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, a) => (y(), C(l(la), Q(ne(t)), {
      default: h(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [us, oy] = we("SelectItemAlignedPosition"), ry = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, a = t, { injectCollection: o } = ra(), r = $n(), s = On(), i = o(), u = E(!1), d = E(!0), c = E(), { forwardRef: f, currentElement: p } = V(), { viewport: m, selectedItem: v, selectedItemText: g, focusSelectedItem: b } = s;
    function _() {
      if (r.triggerElement.value && r.valueElement.value && c.value && p.value && m != null && m.value && v != null && v.value && g != null && g.value) {
        const P = r.triggerElement.value.getBoundingClientRect(), A = p.value.getBoundingClientRect(), D = r.valueElement.value.getBoundingClientRect(), B = g.value.getBoundingClientRect();
        if (r.dir.value !== "rtl") {
          const U = B.left - A.left, X = D.left - U, oe = P.left - X, fe = P.width + oe, ye = Math.max(fe, A.width), J = window.innerWidth - ht, be = Eo(X, ht, Math.max(ht, J - ye));
          c.value.style.minWidth = `${fe}px`, c.value.style.left = `${be}px`;
        } else {
          const U = A.right - B.right, X = window.innerWidth - D.right - U, oe = window.innerWidth - P.right - X, fe = P.width + oe, ye = Math.max(fe, A.width), J = window.innerWidth - ht, be = Eo(
            X,
            ht,
            Math.max(ht, J - ye)
          );
          c.value.style.minWidth = `${fe}px`, c.value.style.right = `${be}px`;
        }
        const I = i.value, F = window.innerHeight - ht * 2, T = m.value.scrollHeight, L = window.getComputedStyle(p.value), M = Number.parseInt(
          L.borderTopWidth,
          10
        ), K = Number.parseInt(L.paddingTop, 10), j = Number.parseInt(
          L.borderBottomWidth,
          10
        ), G = Number.parseInt(
          L.paddingBottom,
          10
        ), W = M + K + T + G + j, ee = Math.min(
          v.value.offsetHeight * 5,
          W
        ), Z = window.getComputedStyle(m.value), z = Number.parseInt(Z.paddingTop, 10), se = Number.parseInt(
          Z.paddingBottom,
          10
        ), ie = P.top + P.height / 2 - ht, Te = F - ie, Me = v.value.offsetHeight / 2, qe = v.value.offsetTop + Me, et = M + K + qe, ut = W - et;
        if (et <= ie) {
          const U = v.value === I[I.length - 1];
          c.value.style.bottom = "0px";
          const X = p.value.clientHeight - m.value.offsetTop - m.value.offsetHeight, oe = Math.max(
            Te,
            Me + (U ? se : 0) + X + j
          ), fe = et + oe;
          c.value.style.height = `${fe}px`;
        } else {
          const U = v.value === I[0];
          c.value.style.top = "0px";
          const X = Math.max(
            ie,
            M + m.value.offsetTop + (U ? z : 0) + Me
          ) + ut;
          c.value.style.height = `${X}px`, m.value.scrollTop = et - ie + m.value.offsetTop;
        }
        c.value.style.margin = `${ht}px 0`, c.value.style.minHeight = `${ee}px`, c.value.style.maxHeight = `${F}px`, a("placed"), requestAnimationFrame(() => u.value = !0);
      }
    }
    const $ = E("");
    ue(async () => {
      await re(), _(), p.value && ($.value = window.getComputedStyle(p.value).zIndex);
    });
    function S(P) {
      P && d.value === !0 && (_(), b == null || b(), d.value = !1);
    }
    return oy({
      contentWrapper: c,
      shouldExpandOnScrollRef: u,
      onScrollButtonChange: S
    }), (P, A) => (y(), q("div", {
      ref_key: "contentWrapperElement",
      ref: c,
      style: Pt({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: $.value
      })
    }, [
      R(l(Y), k({
        ref: l(f),
        style: {
          // When we get the height of the content, it includes borders. If we were to set
          // the height without having `boxSizing: 'border-box'` it would be too big.
          boxSizing: "border-box",
          // We need to ensure the content doesn't get taller than the wrapper
          maxHeight: "100%"
        }
      }, { ...P.$attrs, ...n }), {
        default: h(() => [
          x(P.$slots, "default")
        ]),
        _: 3
      }, 16)
    ], 4));
  }
}), ly = /* @__PURE__ */ w({
  __name: "SelectPopperPosition",
  props: {
    side: {},
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: { default: ht },
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = He(e);
    return (n, a) => (y(), C(l(Qn), k(l(t), { style: {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-select-content-available-width": "var(--radix-popper-available-width)",
      "--radix-select-content-available-height": "var(--radix-popper-available-height)",
      "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: h(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ca = {
  onViewportChange: () => {
  },
  itemTextRefCallback: () => {
  },
  itemRefCallback: () => {
  }
}, [On, sy] = we("SelectContent"), iy = /* @__PURE__ */ w({
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
    const n = e, a = t, o = $n();
    jl(), Va(n.bodyLock);
    const { createCollection: r } = ra(), s = E();
    qa(s);
    const i = r(s), { search: u, handleTypeaheadSearch: d } = Kl(i), c = E(), f = E(), p = E(), m = E(!1), v = E(!1);
    function g() {
      f.value && s.value && rl([f.value, s.value]);
    }
    te(m, () => {
      g();
    });
    const { onOpenChange: b, triggerPointerDownPosRef: _ } = o;
    Se((A) => {
      if (!s.value)
        return;
      let D = { x: 0, y: 0 };
      const B = (F) => {
        var T, L;
        D = {
          x: Math.abs(
            Math.round(F.pageX) - (((T = _.value) == null ? void 0 : T.x) ?? 0)
          ),
          y: Math.abs(
            Math.round(F.pageY) - (((L = _.value) == null ? void 0 : L.y) ?? 0)
          )
        };
      }, I = (F) => {
        var T;
        F.pointerType !== "touch" && (D.x <= 10 && D.y <= 10 ? F.preventDefault() : (T = s.value) != null && T.contains(F.target) || b(!1), document.removeEventListener("pointermove", B), _.value = null);
      };
      _.value !== null && (document.addEventListener("pointermove", B), document.addEventListener("pointerup", I, {
        capture: !0,
        once: !0
      })), A(() => {
        document.removeEventListener("pointermove", B), document.removeEventListener("pointerup", I, {
          capture: !0
        });
      });
    });
    function $(A) {
      const D = A.ctrlKey || A.altKey || A.metaKey;
      if (A.key === "Tab" && A.preventDefault(), !D && A.key.length === 1 && d(A.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(A.key)) {
        let B = i.value;
        if (["ArrowUp", "End"].includes(A.key) && (B = B.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(A.key)) {
          const I = A.target, F = B.indexOf(I);
          B = B.slice(F + 1);
        }
        setTimeout(() => rl(B)), A.preventDefault();
      }
    }
    const S = O(() => n.position === "popper" ? n : {}), P = He(S.value);
    return sy({
      content: s,
      viewport: c,
      onViewportChange: (A) => {
        c.value = A;
      },
      itemRefCallback: (A, D, B) => {
        var I, F;
        const T = !v.value && !B;
        (((I = o.modelValue) == null ? void 0 : I.value) !== void 0 && ((F = o.modelValue) == null ? void 0 : F.value) === D || T) && (f.value = A, T && (v.value = !0));
      },
      selectedItem: f,
      selectedItemText: p,
      onItemLeave: () => {
        var A;
        (A = s.value) == null || A.focus();
      },
      itemTextRefCallback: (A, D, B) => {
        var I, F;
        const T = !v.value && !B;
        (((I = o.modelValue) == null ? void 0 : I.value) !== void 0 && ((F = o.modelValue) == null ? void 0 : F.value) === D || T) && (p.value = A);
      },
      focusSelectedItem: g,
      position: n.position,
      isPositioned: m,
      searchRef: u
    }), (A, D) => (y(), C(l(Wo), {
      "as-child": "",
      onMountAutoFocus: D[6] || (D[6] = ke(() => {
      }, ["prevent"])),
      onUnmountAutoFocus: D[7] || (D[7] = (B) => {
        var I;
        a("closeAutoFocus", B), !B.defaultPrevented && ((I = l(o).triggerElement.value) == null || I.focus({ preventScroll: !0 }), B.preventDefault());
      })
    }, {
      default: h(() => [
        R(l(sa), {
          "as-child": "",
          "disable-outside-pointer-events": "",
          onFocusOutside: D[2] || (D[2] = ke(() => {
          }, ["prevent"])),
          onDismiss: D[3] || (D[3] = (B) => l(o).onOpenChange(!1)),
          onEscapeKeyDown: D[4] || (D[4] = (B) => a("escapeKeyDown", B)),
          onPointerDownOutside: D[5] || (D[5] = (B) => a("pointerDownOutside", B))
        }, {
          default: h(() => [
            (y(), C(at(
              A.position === "popper" ? ly : ry
            ), k({ ...A.$attrs, ...l(P) }, {
              id: l(o).contentId,
              ref: (B) => {
                s.value = l(ft)(B);
              },
              role: "listbox",
              "data-state": l(o).open.value ? "open" : "closed",
              dir: l(o).dir.value,
              style: {
                // flex layout so we can place the scroll buttons properly
                display: "flex",
                flexDirection: "column",
                // reset the outline by default as the content MAY get focused
                outline: "none"
              },
              onContextmenu: D[0] || (D[0] = ke(() => {
              }, ["prevent"])),
              onPlaced: D[1] || (D[1] = (B) => m.value = !0),
              onKeydown: $
            }), {
              default: h(() => [
                x(A.$slots, "default")
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
}), uy = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "SelectProvider",
  props: {
    context: {}
  },
  setup(e) {
    return xd(e.context), (t, n) => x(t.$slots, "default");
  }
}), dy = { key: 1 }, cy = /* @__PURE__ */ w({
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
    const n = e, a = de(n, t), o = $n(), r = E();
    ue(() => {
      r.value = new DocumentFragment();
    });
    const s = E(), i = O(() => n.forceMount || o.open.value);
    return (u, d) => {
      var c;
      return i.value ? (y(), C(l(pt), {
        key: 0,
        ref_key: "presenceRef",
        ref: s,
        present: !0
      }, {
        default: h(() => [
          R(iy, Q(ne({ ...l(a), ...u.$attrs })), {
            default: h(() => [
              x(u.$slots, "default")
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 512)) : !((c = s.value) != null && c.present) && r.value ? (y(), q("div", dy, [
        (y(), C(Ra, { to: r.value }, [
          R(uy, { context: l(o) }, {
            default: h(() => [
              x(u.$slots, "default")
            ]),
            _: 3
          }, 8, ["context"])
        ], 8, ["to"]))
      ])) : ce("", !0);
    };
  }
}), fy = /* @__PURE__ */ w({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (y(), C(l(Y), k({ "aria-hidden": "true" }, t), {
      default: h(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Sd, py] = we("SelectItem"), vy = /* @__PURE__ */ w({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { disabled: n } = Ce(t), a = $n(), o = On(ca), { forwardRef: r, currentElement: s } = V(), i = O(() => {
      var g;
      return ((g = a.modelValue) == null ? void 0 : g.value) === t.value;
    }), u = E(!1), d = E(t.textValue ?? ""), c = Ve(void 0, "radix-vue-select-item-text");
    async function f(g) {
      await re(), !(g != null && g.defaultPrevented) && (n.value || (a.onValueChange(t.value), a.onOpenChange(!1)));
    }
    async function p(g) {
      var b;
      await re(), !g.defaultPrevented && (n.value ? (b = o.onItemLeave) == null || b.call(o) : g.currentTarget.focus({ preventScroll: !0 }));
    }
    async function m(g) {
      var b;
      await re(), !g.defaultPrevented && g.currentTarget === Ke() && ((b = o.onItemLeave) == null || b.call(o));
    }
    async function v(g) {
      var b;
      await re(), !(g.defaultPrevented || ((b = o.searchRef) == null ? void 0 : b.value) !== "" && g.key === " ") && (ty.includes(g.key) && f(), g.key === " " && g.preventDefault());
    }
    if (t.value === "")
      throw new Error(
        "A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return ue(() => {
      s.value && o.itemRefCallback(
        s.value,
        t.value,
        t.disabled
      );
    }), py({
      value: t.value,
      disabled: n,
      textId: c,
      isSelected: i,
      onItemTextChange: (g) => {
        d.value = ((d.value || (g == null ? void 0 : g.textContent)) ?? "").trim();
      }
    }), (g, b) => (y(), C(l(Y), {
      ref: l(r),
      role: "option",
      "data-radix-vue-collection-item": "",
      "aria-labelledby": l(c),
      "data-highlighted": u.value ? "" : void 0,
      "aria-selected": i.value,
      "data-state": i.value ? "checked" : "unchecked",
      "aria-disabled": l(n) || void 0,
      "data-disabled": l(n) ? "" : void 0,
      tabindex: l(n) ? void 0 : -1,
      as: g.as,
      "as-child": g.asChild,
      onFocus: b[0] || (b[0] = (_) => u.value = !0),
      onBlur: b[1] || (b[1] = (_) => u.value = !1),
      onPointerup: f,
      onPointerdown: b[2] || (b[2] = (_) => {
        _.currentTarget.focus({ preventScroll: !0 });
      }),
      onTouchend: b[3] || (b[3] = ke(() => {
      }, ["prevent", "stop"])),
      onPointermove: p,
      onPointerleave: m,
      onKeydown: v
    }, {
      default: h(() => [
        x(g.$slots, "default")
      ]),
      _: 3
    }, 8, ["aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "tabindex", "as", "as-child"]));
  }
}), my = /* @__PURE__ */ w({
  __name: "SelectItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = Sd();
    return (a, o) => l(n).isSelected.value ? (y(), C(l(Y), k({
      key: 0,
      "aria-hidden": "true"
    }, t), {
      default: h(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16)) : ce("", !0);
  }
}), [gy, yy] = we("SelectGroup"), hy = /* @__PURE__ */ w({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Ve(void 0, "radix-vue-select-group");
    return yy({ id: n }), (a, o) => (y(), C(l(Y), k({ role: "group" }, t, { "aria-labelledby": l(n) }), {
      default: h(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), by = /* @__PURE__ */ w({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, n = gy({ id: "" });
    return (a, o) => (y(), C(l(Y), k(t, {
      id: l(n).id
    }), {
      default: h(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), $d = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = $n(), a = On(ca), o = Qg(), r = Sd(), { forwardRef: s, currentElement: i } = V(), u = O(() => {
      var d;
      return Je("option", {
        key: r.value,
        value: r.value,
        disabled: r.disabled.value,
        textContent: (d = i.value) == null ? void 0 : d.textContent
      });
    });
    return ue(() => {
      i.value && (r.onItemTextChange(i.value), a.itemTextRefCallback(
        i.value,
        r.value,
        r.disabled.value
      ), o.onNativeOptionAdd(u.value));
    }), ta(() => {
      o.onNativeOptionRemove(u.value);
    }), (d, c) => (y(), q(Ee, null, [
      R(l(Y), k({
        id: l(r).textId,
        ref: l(s)
      }, { ...t, ...d.$attrs }, { "data-item-text": "" }), {
        default: h(() => [
          x(d.$slots, "default")
        ]),
        _: 3
      }, 16, ["id"]),
      l(r).isSelected.value && l(n).valueElement.value && !l(n).valueElementHasChildren.value ? (y(), C(Ra, {
        key: 0,
        to: l(n).valueElement.value
      }, [
        x(d.$slots, "default")
      ], 8, ["to"])) : ce("", !0)
    ], 64));
  }
}), wy = /* @__PURE__ */ w({
  __name: "SelectViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { nonce: n } = Ce(t), a = Rm(n), o = On(ca), r = o.position === "item-aligned" ? us() : void 0, { forwardRef: s, currentElement: i } = V();
    ue(() => {
      o == null || o.onViewportChange(i.value);
    });
    const u = E(0);
    function d(c) {
      const f = c.currentTarget, { shouldExpandOnScrollRef: p, contentWrapper: m } = r ?? {};
      if (p != null && p.value && m != null && m.value) {
        const v = Math.abs(u.value - f.scrollTop);
        if (v > 0) {
          const g = window.innerHeight - ht * 2, b = Number.parseFloat(
            m.value.style.minHeight
          ), _ = Number.parseFloat(m.value.style.height), $ = Math.max(b, _);
          if ($ < g) {
            const S = $ + v, P = Math.min(g, S), A = S - P;
            m.value.style.height = `${P}px`, m.value.style.bottom === "0px" && (f.scrollTop = A > 0 ? A : 0, m.value.style.justifyContent = "flex-end");
          }
        }
      }
      u.value = f.scrollTop;
    }
    return (c, f) => (y(), q(Ee, null, [
      R(l(Y), k({
        ref: l(s),
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
        default: h(() => [
          x(c.$slots, "default")
        ]),
        _: 3
      }, 16),
      R(l(Y), {
        as: "style",
        nonce: l(a)
      }, {
        default: h(() => [
          ge(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-radix-select-viewport]::-webkit-scrollbar { display: none; } ")
        ]),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
}), Od = /* @__PURE__ */ w({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(e, { emit: t }) {
    const n = t, { injectCollection: a } = ra(), o = a(), r = On(ca), s = E(null);
    function i() {
      s.value !== null && (window.clearInterval(s.value), s.value = null);
    }
    Se(() => {
      const c = o.value.find(
        (f) => f === Ke()
      );
      c == null || c.scrollIntoView({ block: "nearest" });
    });
    function u() {
      s.value === null && (s.value = window.setInterval(() => {
        n("autoScroll");
      }, 50));
    }
    function d() {
      var c;
      (c = r.onItemLeave) == null || c.call(r), s.value === null && (s.value = window.setInterval(() => {
        n("autoScroll");
      }, 50));
    }
    return ta(() => i()), (c, f) => {
      var p;
      return y(), C(l(Y), k({
        "aria-hidden": "true",
        style: {
          flexShrink: 0
        }
      }, (p = c.$parent) == null ? void 0 : p.$props, {
        onPointerdown: u,
        onPointermove: d,
        onPointerleave: f[0] || (f[0] = () => {
          i();
        })
      }), {
        default: h(() => [
          x(c.$slots, "default")
        ]),
        _: 3
      }, 16);
    };
  }
}), _y = /* @__PURE__ */ w({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = On(ca), n = t.position === "item-aligned" ? us() : void 0, { forwardRef: a, currentElement: o } = V(), r = E(!1);
    return Se((s) => {
      var i, u;
      if ((i = t.viewport) != null && i.value && (u = t.isPositioned) != null && u.value) {
        let d = function() {
          r.value = c.scrollTop > 0;
        };
        const c = t.viewport.value;
        d(), c.addEventListener("scroll", d), s(() => c.removeEventListener("scroll", d));
      }
    }), te(o, () => {
      o.value && (n == null || n.onScrollButtonChange(o.value));
    }), (s, i) => r.value ? (y(), C(Od, {
      key: 0,
      ref: l(a),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: u, selectedItem: d } = l(t);
        u != null && u.value && d != null && d.value && (u.value.scrollTop = u.value.scrollTop - d.value.offsetHeight);
      })
    }, {
      default: h(() => [
        x(s.$slots, "default")
      ]),
      _: 3
    }, 512)) : ce("", !0);
  }
}), xy = /* @__PURE__ */ w({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = On(ca), n = t.position === "item-aligned" ? us() : void 0, { forwardRef: a, currentElement: o } = V(), r = E(!1);
    return Se((s) => {
      var i, u;
      if ((i = t.viewport) != null && i.value && (u = t.isPositioned) != null && u.value) {
        let d = function() {
          const f = c.scrollHeight - c.clientHeight;
          r.value = Math.ceil(c.scrollTop) < f;
        };
        const c = t.viewport.value;
        d(), c.addEventListener("scroll", d), s(() => c.removeEventListener("scroll", d));
      }
    }), te(o, () => {
      o.value && (n == null || n.onScrollButtonChange(o.value));
    }), (s, i) => r.value ? (y(), C(Od, {
      key: 0,
      ref: l(a),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: u, selectedItem: d } = l(t);
        u != null && u.value && d != null && d.value && (u.value.scrollTop = u.value.scrollTop + d.value.offsetHeight);
      })
    }, {
      default: h(() => [
        x(s.$slots, "default")
      ]),
      _: 3
    }, 512)) : ce("", !0);
  }
}), Cy = /* @__PURE__ */ w({
  __name: "SelectValue",
  props: {
    placeholder: { default: "" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const { forwardRef: t, currentElement: n } = V(), a = $n(), o = Ol();
    return fu(() => {
      var r;
      const s = !!zo((r = o == null ? void 0 : o.default) == null ? void 0 : r.call(o)).length;
      a.onValueElementHasChildrenChange(s);
    }), ue(() => {
      a.valueElement = n;
    }), (r, s) => (y(), C(l(Y), {
      ref: l(t),
      as: r.as,
      "as-child": r.asChild,
      style: { pointerEvents: "none" }
    }, {
      default: h(() => {
        var i;
        return [
          l(Cd)((i = l(a).modelValue) == null ? void 0 : i.value) ? (y(), q(Ee, { key: 0 }, [
            ge(pe(r.placeholder), 1)
          ], 64)) : x(r.$slots, "default", { key: 1 })
        ];
      }),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Sy = /* @__PURE__ */ w({
  __name: "SelectIcon",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return (t, n) => (y(), C(l(Y), {
      "aria-hidden": "true",
      as: t.as,
      "as-child": t.asChild
    }, {
      default: h(() => [
        x(t.$slots, "default", {}, () => [
          ge("▼")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function $y(e = [], t, n) {
  const a = [...e];
  return a[n] = t, a.sort((o, r) => o - r);
}
function Ed(e, t, n) {
  const a = 100 / (n - t) * (e - t);
  return Eo(a, 0, 100);
}
function Oy(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
function Ey(e, t) {
  if (e.length === 1)
    return 0;
  const n = e.map((o) => Math.abs(o - t)), a = Math.min(...n);
  return n.indexOf(a);
}
function Ay(e, t, n) {
  const a = e / 2, o = ds([0, 50], [0, a]);
  return (a - o(t) * n) * n;
}
function By(e) {
  return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
function Py(e, t) {
  if (t > 0) {
    const n = By(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function ds(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const a = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + a * (n - e[0]);
  };
}
function Dy(e) {
  return (String(e).split(".")[1] || "").length;
}
function ky(e, t) {
  const n = 10 ** t;
  return Math.round(e * n) / n;
}
const Ad = ["PageUp", "PageDown"], Bd = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Pd = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, [Dd, kd] = we(["SliderVertical", "SliderHorizontal"]), Td = /* @__PURE__ */ w({
  __name: "SliderImpl",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  emits: ["slideStart", "slideMove", "slideEnd", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = Xo();
    return (r, s) => (y(), C(l(Y), k({ "data-slider-impl": "" }, n, {
      onKeydown: s[0] || (s[0] = (i) => {
        i.key === "Home" ? (a("homeKeyDown", i), i.preventDefault()) : i.key === "End" ? (a("endKeyDown", i), i.preventDefault()) : l(Ad).concat(l(Bd)).includes(i.key) && (a("stepKeyDown", i), i.preventDefault());
      }),
      onPointerdown: s[1] || (s[1] = (i) => {
        const u = i.target;
        u.setPointerCapture(i.pointerId), i.preventDefault(), l(o).thumbElements.value.includes(u) ? u.focus() : a("slideStart", i);
      }),
      onPointermove: s[2] || (s[2] = (i) => {
        i.target.hasPointerCapture(i.pointerId) && a("slideMove", i);
      }),
      onPointerup: s[3] || (s[3] = (i) => {
        const u = i.target;
        u.hasPointerCapture(i.pointerId) && (u.releasePointerCapture(i.pointerId), a("slideEnd", i));
      })
    }), {
      default: h(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ty = /* @__PURE__ */ w({
  __name: "SliderHorizontal",
  props: {
    dir: {},
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const n = e, a = t, { max: o, min: r, dir: s, inverted: i } = Ce(n), { forwardRef: u, currentElement: d } = V(), c = E(), f = O(() => (s == null ? void 0 : s.value) === "ltr" && !i.value || (s == null ? void 0 : s.value) !== "ltr" && i.value);
    function p(m) {
      const v = c.value || d.value.getBoundingClientRect(), g = [0, v.width], b = f.value ? [r.value, o.value] : [o.value, r.value], _ = ds(g, b);
      return c.value = v, _(m - v.left);
    }
    return kd({
      startEdge: f.value ? "left" : "right",
      endEdge: f.value ? "right" : "left",
      direction: f.value ? 1 : -1,
      size: "width"
    }), (m, v) => (y(), C(Td, {
      ref: l(u),
      dir: l(s),
      "data-orientation": "horizontal",
      style: {
        "--radix-slider-thumb-transform": "translateX(-50%)"
      },
      onSlideStart: v[0] || (v[0] = (g) => {
        const b = p(g.clientX);
        a("slideStart", b);
      }),
      onSlideMove: v[1] || (v[1] = (g) => {
        const b = p(g.clientX);
        a("slideMove", b);
      }),
      onSlideEnd: v[2] || (v[2] = () => {
        c.value = void 0, a("slideEnd");
      }),
      onStepKeyDown: v[3] || (v[3] = (g) => {
        const b = f.value ? "from-left" : "from-right", _ = l(Pd)[b].includes(g.key);
        a("stepKeyDown", g, _ ? -1 : 1);
      }),
      onEndKeyDown: v[4] || (v[4] = (g) => a("endKeyDown", g)),
      onHomeKeyDown: v[5] || (v[5] = (g) => a("homeKeyDown", g))
    }, {
      default: h(() => [
        x(m.$slots, "default")
      ]),
      _: 3
    }, 8, ["dir"]));
  }
}), Iy = /* @__PURE__ */ w({
  __name: "SliderVertical",
  props: {
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const n = e, a = t, { max: o, min: r, inverted: s } = Ce(n), { forwardRef: i, currentElement: u } = V(), d = E(), c = O(() => !s.value);
    function f(p) {
      const m = d.value || u.value.getBoundingClientRect(), v = [0, m.height], g = c.value ? [o.value, r.value] : [r.value, o.value], b = ds(v, g);
      return d.value = m, b(p - m.top);
    }
    return kd({
      startEdge: c.value ? "bottom" : "top",
      endEdge: c.value ? "top" : "bottom",
      size: "height",
      direction: c.value ? 1 : -1
    }), (p, m) => (y(), C(Td, {
      ref: l(i),
      "data-orientation": "vertical",
      style: {
        "--radix-slider-thumb-transform": "translateY(50%)"
      },
      onSlideStart: m[0] || (m[0] = (v) => {
        const g = f(v.clientY);
        a("slideStart", g);
      }),
      onSlideMove: m[1] || (m[1] = (v) => {
        const g = f(v.clientY);
        a("slideMove", g);
      }),
      onSlideEnd: m[2] || (m[2] = () => {
        d.value = void 0, a("slideEnd");
      }),
      onStepKeyDown: m[3] || (m[3] = (v) => {
        const g = c.value ? "from-bottom" : "from-top", b = l(Pd)[g].includes(v.key);
        a("stepKeyDown", v, b ? -1 : 1);
      }),
      onEndKeyDown: m[4] || (m[4] = (v) => a("endKeyDown", v)),
      onHomeKeyDown: m[5] || (m[5] = (v) => a("homeKeyDown", v))
    }, {
      default: h(() => [
        x(p.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
}), Fy = ["value", "name", "disabled", "step"], [Xo, My] = we("SliderRoot"), Ry = /* @__PURE__ */ w({
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
    const n = e, a = t, { min: o, max: r, step: s, minStepsBetweenThumbs: i, orientation: u, disabled: d, dir: c } = Ce(n), f = sn(c), { forwardRef: p, currentElement: m } = V(), v = Ko(m);
    ns();
    const g = De(n, "modelValue", a, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), b = E(0), _ = E(g.value);
    function $(B) {
      const I = Ey(g.value, B);
      A(B, I);
    }
    function S(B) {
      A(B, b.value);
    }
    function P() {
      const B = _.value[b.value];
      g.value[b.value] !== B && a("valueCommit", ff(g.value));
    }
    function A(B, I, { commit: F } = { commit: !1 }) {
      var T;
      const L = Dy(s.value), M = ky(Math.round((B - o.value) / s.value) * s.value + o.value, L), K = Eo(M, o.value, r.value), j = $y(g.value, K, I);
      if (Py(j, i.value * s.value)) {
        b.value = j.indexOf(K);
        const G = String(j) !== String(g.value);
        G && F && a("valueCommit", j), G && ((T = D.value[b.value]) == null || T.focus(), g.value = j);
      }
    }
    const D = E([]);
    return My({
      modelValue: g,
      valueIndexToChangeRef: b,
      thumbElements: D,
      orientation: u,
      min: o,
      max: r,
      disabled: d
    }), (B, I) => (y(), q(Ee, null, [
      R(l(as), null, {
        default: h(() => [
          (y(), C(at(l(u) === "horizontal" ? Ty : Iy), k(B.$attrs, {
            ref: l(p),
            "as-child": B.asChild,
            as: B.as,
            min: l(o),
            max: l(r),
            dir: l(f),
            inverted: B.inverted,
            "aria-disabled": l(d),
            "data-disabled": l(d) ? "" : void 0,
            onPointerdown: I[0] || (I[0] = () => {
              l(d) || (_.value = l(g));
            }),
            onSlideStart: I[1] || (I[1] = (F) => !l(d) && $(F)),
            onSlideMove: I[2] || (I[2] = (F) => !l(d) && S(F)),
            onSlideEnd: I[3] || (I[3] = (F) => !l(d) && P()),
            onHomeKeyDown: I[4] || (I[4] = (F) => !l(d) && A(l(o), 0, { commit: !0 })),
            onEndKeyDown: I[5] || (I[5] = (F) => !l(d) && A(l(r), l(g).length - 1, { commit: !0 })),
            onStepKeyDown: I[6] || (I[6] = (F, T) => {
              if (!l(d)) {
                const L = l(Ad).includes(F.key) || F.shiftKey && l(Bd).includes(F.key) ? 10 : 1, M = b.value, K = l(g)[M], j = l(s) * L * T;
                A(K + j, M, { commit: !0 });
              }
            })
          }), {
            default: h(() => [
              x(B.$slots, "default", { modelValue: l(g) })
            ]),
            _: 3
          }, 16, ["as-child", "as", "min", "max", "dir", "inverted", "aria-disabled", "data-disabled"]))
        ]),
        _: 3
      }),
      l(v) ? (y(!0), q(Ee, { key: 0 }, st(l(g), (F, T) => (y(), q("input", {
        key: T,
        value: F,
        type: "number",
        style: { display: "none" },
        name: B.name ? B.name + (l(g).length > 1 ? "[]" : "") : void 0,
        disabled: l(d),
        step: l(s)
      }, null, 8, Fy))), 128)) : ce("", !0)
    ], 64));
  }
}), Ly = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "SliderThumbImpl",
  props: {
    index: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Xo(), a = Dd(), { forwardRef: o, currentElement: r } = V(), s = O(() => {
      var m, v;
      return (v = (m = n.modelValue) == null ? void 0 : m.value) == null ? void 0 : v[t.index];
    }), i = O(() => s.value === void 0 ? 0 : Ed(s.value, n.min.value ?? 0, n.max.value ?? 100)), u = O(() => {
      var m, v;
      return Oy(t.index, ((v = (m = n.modelValue) == null ? void 0 : m.value) == null ? void 0 : v.length) ?? 0);
    }), d = ed(r), c = O(() => d[a.size].value), f = O(() => c.value ? Ay(c.value, i.value, a.direction) : 0), p = zl();
    return ue(() => {
      n.thumbElements.value.push(r.value);
    }), Ge(() => {
      const m = n.thumbElements.value.findIndex((v) => v === r.value) ?? -1;
      n.thumbElements.value.splice(m, 1);
    }), (m, v) => (y(), C(l(Yo), null, {
      default: h(() => [
        R(l(Y), k(m.$attrs, {
          ref: l(o),
          role: "slider",
          "data-radix-vue-collection-item": "",
          tabindex: l(n).disabled.value ? void 0 : 0,
          "aria-label": m.$attrs["aria-label"] || u.value,
          "data-disabled": l(n).disabled.value ? "" : void 0,
          "data-orientation": l(n).orientation.value,
          "aria-valuenow": s.value,
          "aria-valuemin": l(n).min.value,
          "aria-valuemax": l(n).max.value,
          "aria-orientation": l(n).orientation.value,
          "as-child": m.asChild,
          as: m.as,
          style: {
            transform: "var(--radix-slider-thumb-transform)",
            position: "absolute",
            [l(a).startEdge]: `calc(${i.value}% + ${f.value}px)`,
            /**
             * There will be no value on initial render while we work out the index so we hide thumbs
             * without a value, otherwise SSR will render them in the wrong position before they
             * snap into the correct position during hydration which would be visually jarring for
             * slower connections.
             */
            display: !l(p) && s.value === void 0 ? "none" : void 0
          },
          onFocus: v[0] || (v[0] = () => {
            l(n).valueIndexToChangeRef.value = m.index;
          })
        }), {
          default: h(() => [
            x(m.$slots, "default")
          ]),
          _: 3
        }, 16, ["tabindex", "aria-label", "data-disabled", "data-orientation", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-orientation", "as-child", "as", "style"])
      ]),
      _: 3
    }));
  }
}), Ny = /* @__PURE__ */ w({
  __name: "SliderThumb",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { getItems: n } = os(), { forwardRef: a, currentElement: o } = V(), r = O(() => o.value ? n().findIndex((s) => s.ref === o.value) : -1);
    return (s, i) => (y(), C(Ly, k({ ref: l(a) }, t, { index: r.value }), {
      default: h(() => [
        x(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["index"]));
  }
}), Vy = /* @__PURE__ */ w({
  __name: "SliderTrack",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = Xo();
    return V(), (n, a) => (y(), C(l(Y), {
      "as-child": n.asChild,
      as: n.as,
      "data-disabled": l(t).disabled.value ? "" : void 0,
      "data-orientation": l(t).orientation.value
    }, {
      default: h(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "data-disabled", "data-orientation"]));
  }
}), qy = /* @__PURE__ */ w({
  __name: "SliderRange",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = Xo(), n = Dd();
    V();
    const a = O(() => {
      var s, i;
      return (i = (s = t.modelValue) == null ? void 0 : s.value) == null ? void 0 : i.map(
        (u) => Ed(u, t.min.value, t.max.value)
      );
    }), o = O(() => t.modelValue.value.length > 1 ? Math.min(...a.value) : 0), r = O(() => 100 - Math.max(...a.value));
    return (s, i) => (y(), C(l(Y), {
      "data-disabled": l(t).disabled.value ? "" : void 0,
      "data-orientation": l(t).orientation.value,
      "as-child": s.asChild,
      as: s.as,
      style: Pt({
        [l(n).startEdge]: `${o.value}%`,
        [l(n).endEdge]: `${r.value}%`
      })
    }, {
      default: h(() => [
        x(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-disabled", "data-orientation", "as-child", "as", "style"]));
  }
});
function zy() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
zy();
const jy = ["name", "disabled", "required", "value", "checked", "data-state", "data-disabled"], [Ky, Hy] = we("SwitchRoot"), Wy = /* @__PURE__ */ w({
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
    const n = e, a = t, { disabled: o } = Ce(n), r = De(n, "checked", a, {
      defaultValue: n.defaultChecked,
      passive: n.checked === void 0
    });
    function s() {
      o.value || (r.value = !r.value);
    }
    const { forwardRef: i, currentElement: u } = V(), d = Ko(u), c = O(() => {
      var f;
      return n.id && u.value ? (f = document.querySelector(`[for="${n.id}"]`)) == null ? void 0 : f.innerText : void 0;
    });
    return Hy({
      checked: r,
      toggleCheck: s,
      disabled: o
    }), (f, p) => (y(), q(Ee, null, [
      R(l(Y), k(f.$attrs, {
        id: f.id,
        ref: l(i),
        role: "switch",
        type: f.as === "button" ? "button" : void 0,
        value: f.value,
        "aria-label": f.$attrs["aria-label"] || c.value,
        "aria-checked": l(r),
        "aria-required": f.required,
        "data-state": l(r) ? "checked" : "unchecked",
        "data-disabled": l(o) ? "" : void 0,
        "as-child": f.asChild,
        as: f.as,
        disabled: l(o),
        onClick: s,
        onKeydown: nt(ke(s, ["prevent"]), ["enter"])
      }), {
        default: h(() => [
          x(f.$slots, "default", { checked: l(r) })
        ]),
        _: 3
      }, 16, ["id", "type", "value", "aria-label", "aria-checked", "aria-required", "data-state", "data-disabled", "as-child", "as", "disabled", "onKeydown"]),
      l(d) ? (y(), q("input", {
        key: 0,
        type: "checkbox",
        name: f.name,
        tabindex: "-1",
        "aria-hidden": "true",
        disabled: l(o),
        required: f.required,
        value: f.value,
        checked: !!l(r),
        "data-state": l(r) ? "checked" : "unchecked",
        "data-disabled": l(o) ? "" : void 0,
        style: {
          transform: "translateX(-100%)",
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }, null, 8, jy)) : ce("", !0)
    ], 64));
  }
}), Uy = /* @__PURE__ */ w({
  __name: "SwitchThumb",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = Ky();
    return V(), (n, a) => {
      var o;
      return y(), C(l(Y), {
        "data-state": (o = l(t).checked) != null && o.value ? "checked" : "unchecked",
        "data-disabled": l(t).disabled.value ? "" : void 0,
        "as-child": n.asChild,
        as: n.as
      }, {
        default: h(() => [
          x(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-state", "data-disabled", "as-child", "as"]);
    };
  }
}), [cs, Gy] = we("TabsRoot"), Yy = /* @__PURE__ */ w({
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
    const n = e, a = t, { orientation: o, dir: r } = Ce(n), s = sn(r);
    V();
    const i = De(n, "modelValue", a, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), u = E();
    return Gy({
      modelValue: i,
      changeModelValue: (d) => {
        i.value = d;
      },
      orientation: o,
      dir: s,
      activationMode: n.activationMode,
      baseId: Ve(void 0, "radix-vue-tabs"),
      tabsList: u
    }), (d, c) => (y(), C(l(Y), {
      dir: l(s),
      "data-orientation": l(o),
      "as-child": d.asChild,
      as: d.as
    }, {
      default: h(() => [
        x(d.$slots, "default", { modelValue: l(i) })
      ]),
      _: 3
    }, 8, ["dir", "data-orientation", "as-child", "as"]));
  }
}), Xy = /* @__PURE__ */ w({
  __name: "TabsList",
  props: {
    loop: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { loop: n } = Ce(t), { forwardRef: a, currentElement: o } = V(), r = cs();
    return r.tabsList = o, (s, i) => (y(), C(l(vd), {
      "as-child": "",
      orientation: l(r).orientation.value,
      dir: l(r).dir.value,
      loop: l(n)
    }, {
      default: h(() => [
        R(l(Y), {
          ref: l(a),
          role: "tablist",
          "as-child": s.asChild,
          as: s.as,
          "aria-orientation": l(r).orientation.value
        }, {
          default: h(() => [
            x(s.$slots, "default")
          ]),
          _: 3
        }, 8, ["as-child", "as", "aria-orientation"])
      ]),
      _: 3
    }, 8, ["orientation", "dir", "loop"]));
  }
});
function Id(e, t) {
  return `${e}-trigger-${t}`;
}
function Fd(e, t) {
  return `${e}-content-${t}`;
}
const Qy = /* @__PURE__ */ w({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n } = V(), a = cs(), o = O(() => Id(a.baseId, t.value)), r = O(() => Fd(a.baseId, t.value)), s = O(() => t.value === a.modelValue.value), i = E(s.value);
    return ue(() => {
      requestAnimationFrame(() => {
        i.value = !1;
      });
    }), (u, d) => (y(), C(l(pt), {
      present: s.value,
      "force-mount": ""
    }, {
      default: h(({ present: c }) => [
        R(l(Y), {
          id: r.value,
          ref: l(n),
          "as-child": u.asChild,
          as: u.as,
          role: "tabpanel",
          "data-state": s.value ? "active" : "inactive",
          "data-orientation": l(a).orientation.value,
          "aria-labelledby": o.value,
          hidden: !c.value,
          tabindex: "0",
          style: Pt({
            animationDuration: i.value ? "0s" : void 0
          })
        }, {
          default: h(() => [
            u.forceMount || s.value ? x(u.$slots, "default", { key: 0 }) : ce("", !0)
          ]),
          _: 2
        }, 1032, ["id", "as-child", "as", "data-state", "data-orientation", "aria-labelledby", "hidden", "style"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Jy = /* @__PURE__ */ w({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, { forwardRef: n } = V(), a = cs(), o = O(() => Id(a.baseId, t.value)), r = O(() => Fd(a.baseId, t.value)), s = O(() => t.value === a.modelValue.value);
    return (i, u) => (y(), C(l(eg), {
      "as-child": "",
      focusable: !i.disabled,
      active: s.value
    }, {
      default: h(() => [
        R(l(Y), {
          id: o.value,
          ref: l(n),
          role: "tab",
          type: i.as === "button" ? "button" : void 0,
          as: i.as,
          "as-child": i.asChild,
          "aria-selected": s.value ? "true" : "false",
          "aria-controls": r.value,
          "data-state": s.value ? "active" : "inactive",
          disabled: i.disabled,
          "data-disabled": i.disabled ? "" : void 0,
          "data-orientation": l(a).orientation.value,
          onMousedown: u[0] || (u[0] = ke((d) => {
            !i.disabled && d.ctrlKey === !1 ? l(a).changeModelValue(i.value) : d.preventDefault();
          }, ["left"])),
          onKeydown: u[1] || (u[1] = nt((d) => l(a).changeModelValue(i.value), ["enter", "space"])),
          onFocus: u[2] || (u[2] = () => {
            const d = l(a).activationMode !== "manual";
            !s.value && !i.disabled && d && l(a).changeModelValue(i.value);
          })
        }, {
          default: h(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as", "as-child", "aria-selected", "aria-controls", "data-state", "disabled", "data-disabled", "data-orientation"])
      ]),
      _: 3
    }, 8, ["focusable", "active"]));
  }
}), [Qo, Zy] = we("ToastProvider"), eh = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "ToastProvider",
  props: {
    label: { default: "Notification" },
    duration: { default: 5e3 },
    swipeDirection: { default: "right" },
    swipeThreshold: { default: 50 }
  },
  setup(e) {
    const t = e, { label: n, duration: a, swipeDirection: o, swipeThreshold: r } = Ce(t), s = E(), i = E(0), u = E(!1), d = E(!1);
    if (t.label && typeof t.label == "string" && !t.label.trim()) {
      const c = "Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`.";
      throw new Error(c);
    }
    return Zy({
      label: n,
      duration: a,
      swipeDirection: o,
      swipeThreshold: r,
      toastCount: i,
      viewport: s,
      onViewportChange(c) {
        s.value = c;
      },
      onToastAdd() {
        i.value++;
      },
      onToastRemove() {
        i.value--;
      },
      isFocusedToastEscapeKeyDownRef: u,
      isClosePausedRef: d
    }), (c, f) => x(c.$slots, "default");
  }
}), th = "toast.swipeStart", nh = "toast.swipeMove", ah = "toast.swipeCancel", oh = "toast.swipeEnd", sl = "toast.viewportPause", il = "toast.viewportResume";
function ro(e, t, n) {
  const a = n.originalEvent.currentTarget, o = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && a.addEventListener(e, t, { once: !0 }), a.dispatchEvent(o);
}
function ri(e, t, n = 0) {
  const a = Math.abs(e.x), o = Math.abs(e.y), r = a > o;
  return t === "left" || t === "right" ? r && a > n : !r && o > n;
}
function rh(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function Md(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((n) => {
    if (n.nodeType === n.TEXT_NODE && n.textContent && t.push(n.textContent), rh(n)) {
      const a = n.ariaHidden || n.hidden || n.style.display === "none", o = n.dataset.radixToastAnnounceExclude === "";
      if (!a)
        if (o) {
          const r = n.dataset.radixToastAnnounceAlt;
          r && t.push(r);
        } else
          t.push(...Md(n));
    }
  }), t;
}
const lh = /* @__PURE__ */ w({
  __name: "ToastAnnounce",
  setup(e) {
    const t = Qo(), n = jp(1e3), a = E(!1);
    return Yu(() => {
      a.value = !0;
    }), (o, r) => l(n) || a.value ? (y(), C(l(ja), { key: 0 }, {
      default: h(() => [
        ge(pe(l(t).label.value) + " ", 1),
        x(o.$slots, "default")
      ]),
      _: 3
    })) : ce("", !0);
  }
}), [sh, ih] = we("ToastRoot"), uh = /* @__PURE__ */ w({
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
    const n = e, a = t, { forwardRef: o, currentElement: r } = V(), s = Qo(), i = E(null), u = E(null), d = O(
      () => typeof n.duration == "number" ? n.duration : s.duration.value
    ), c = E(0), f = E(d.value), p = E(0), m = E(d.value), v = Yu(() => {
      const $ = (/* @__PURE__ */ new Date()).getTime() - c.value;
      m.value = Math.max(f.value - $, 0);
    }, { fpsLimit: 60 });
    function g($) {
      $ <= 0 || $ === Number.POSITIVE_INFINITY || kt && (window.clearTimeout(p.value), c.value = (/* @__PURE__ */ new Date()).getTime(), p.value = window.setTimeout(b, $));
    }
    function b() {
      var $, S;
      ($ = r.value) != null && $.contains(Ke()) && ((S = s.viewport.value) == null || S.focus()), s.isClosePausedRef.value = !1, a("close");
    }
    const _ = O(() => r.value ? Md(r.value) : null);
    if (n.type && !["foreground", "background"].includes(n.type)) {
      const $ = "Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.";
      throw new Error($);
    }
    return Se(($) => {
      const S = s.viewport.value;
      if (S) {
        const P = () => {
          g(f.value), v.resume(), a("resume");
        }, A = () => {
          const D = (/* @__PURE__ */ new Date()).getTime() - c.value;
          f.value = f.value - D, window.clearTimeout(p.value), v.pause(), a("pause");
        };
        return S.addEventListener(sl, A), S.addEventListener(il, P), () => {
          S.removeEventListener(sl, A), S.removeEventListener(il, P);
        };
      }
    }), te(() => [n.open, d.value], () => {
      f.value = d.value, n.open && !s.isClosePausedRef.value && g(d.value);
    }, { immediate: !0 }), ql("Escape", ($) => {
      a("escapeKeyDown", $), $.defaultPrevented || (s.isFocusedToastEscapeKeyDownRef.value = !0, b());
    }), ue(() => {
      s.onToastAdd();
    }), Ge(() => {
      s.onToastRemove();
    }), ih({ onClose: b }), ($, S) => (y(), q(Ee, null, [
      _.value ? (y(), C(lh, {
        key: 0,
        role: "alert",
        "aria-live": $.type === "foreground" ? "assertive" : "polite",
        "aria-atomic": "true"
      }, {
        default: h(() => [
          ge(pe(_.value), 1)
        ]),
        _: 1
      }, 8, ["aria-live"])) : ce("", !0),
      l(s).viewport.value ? (y(), C(Ra, {
        key: 1,
        to: l(s).viewport.value
      }, [
        R(l(Y), k({
          ref: l(o),
          role: "alert",
          "aria-live": "off",
          "aria-atomic": "true",
          tabindex: "0",
          "data-radix-vue-collection-item": ""
        }, $.$attrs, {
          as: $.as,
          "as-child": $.asChild,
          "data-state": $.open ? "open" : "closed",
          "data-swipe-direction": l(s).swipeDirection.value,
          style: { userSelect: "none", touchAction: "none" },
          onPointerdown: S[0] || (S[0] = ke((P) => {
            i.value = { x: P.clientX, y: P.clientY };
          }, ["left"])),
          onPointermove: S[1] || (S[1] = (P) => {
            if (!i.value) return;
            const A = P.clientX - i.value.x, D = P.clientY - i.value.y, B = !!u.value, I = ["left", "right"].includes(l(s).swipeDirection.value), F = ["left", "up"].includes(l(s).swipeDirection.value) ? Math.min : Math.max, T = I ? F(0, A) : 0, L = I ? 0 : F(0, D), M = P.pointerType === "touch" ? 10 : 2, K = { x: T, y: L }, j = { originalEvent: P, delta: K };
            B ? (u.value = K, l(ro)(l(nh), (G) => a("swipeMove", G), j)) : l(ri)(K, l(s).swipeDirection.value, M) ? (u.value = K, l(ro)(l(th), (G) => a("swipeStart", G), j), P.target.setPointerCapture(P.pointerId)) : (Math.abs(A) > M || Math.abs(D) > M) && (i.value = null);
          }),
          onPointerup: S[2] || (S[2] = (P) => {
            const A = u.value, D = P.target;
            if (D.hasPointerCapture(P.pointerId) && D.releasePointerCapture(P.pointerId), u.value = null, i.value = null, A) {
              const B = P.currentTarget, I = { originalEvent: P, delta: A };
              l(ri)(A, l(s).swipeDirection.value, l(s).swipeThreshold.value) ? l(ro)(l(oh), (F) => a("swipeEnd", F), I) : l(ro)(l(ah), (F) => a("swipeCancel", F), I), B == null || B.addEventListener("click", (F) => F.preventDefault(), {
                once: !0
              });
            }
          })
        }), {
          default: h(() => [
            x($.$slots, "default", {
              remaining: m.value,
              duration: d.value
            })
          ]),
          _: 3
        }, 16, ["as", "as-child", "data-state", "data-swipe-direction"])
      ], 8, ["to"])) : ce("", !0)
    ], 64));
  }
}), dh = /* @__PURE__ */ w({
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
    const n = e, a = t, { forwardRef: o } = V(), r = De(n, "open", a, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    });
    return (s, i) => (y(), C(l(pt), {
      present: s.forceMount || l(r)
    }, {
      default: h(() => [
        R(uh, k({
          ref: l(o),
          open: l(r),
          type: s.type,
          as: s.as,
          "as-child": s.asChild,
          duration: s.duration
        }, s.$attrs, {
          onClose: i[0] || (i[0] = (u) => r.value = !1),
          onPause: i[1] || (i[1] = (u) => a("pause")),
          onResume: i[2] || (i[2] = (u) => a("resume")),
          onEscapeKeyDown: i[3] || (i[3] = (u) => a("escapeKeyDown", u)),
          onSwipeStart: i[4] || (i[4] = (u) => {
            a("swipeStart", u), u.currentTarget.setAttribute("data-swipe", "start");
          }),
          onSwipeMove: i[5] || (i[5] = (u) => {
            const { x: d, y: c } = u.detail.delta, f = u.currentTarget;
            f.setAttribute("data-swipe", "move"), f.style.setProperty("--radix-toast-swipe-move-x", `${d}px`), f.style.setProperty("--radix-toast-swipe-move-y", `${c}px`);
          }),
          onSwipeCancel: i[6] || (i[6] = (u) => {
            const d = u.currentTarget;
            d.setAttribute("data-swipe", "cancel"), d.style.removeProperty("--radix-toast-swipe-move-x"), d.style.removeProperty("--radix-toast-swipe-move-y"), d.style.removeProperty("--radix-toast-swipe-end-x"), d.style.removeProperty("--radix-toast-swipe-end-y");
          }),
          onSwipeEnd: i[7] || (i[7] = (u) => {
            const { x: d, y: c } = u.detail.delta, f = u.currentTarget;
            f.setAttribute("data-swipe", "end"), f.style.removeProperty("--radix-toast-swipe-move-x"), f.style.removeProperty("--radix-toast-swipe-move-y"), f.style.setProperty("--radix-toast-swipe-end-x", `${d}px`), f.style.setProperty("--radix-toast-swipe-end-y", `${c}px`), r.value = !1;
          })
        }), {
          default: h(({ remaining: u, duration: d }) => [
            x(s.$slots, "default", {
              remaining: u,
              duration: d,
              open: l(r)
            })
          ]),
          _: 3
        }, 16, ["open", "type", "as", "as-child", "duration"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Rd = /* @__PURE__ */ w({
  __name: "ToastAnnounceExclude",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    return (t, n) => (y(), C(l(Y), {
      as: t.as,
      "as-child": t.asChild,
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": t.altText || void 0
    }, {
      default: h(() => [
        x(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-radix-toast-announce-alt"]));
  }
}), Ld = /* @__PURE__ */ w({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = sh(), { forwardRef: a } = V();
    return (o, r) => (y(), C(Rd, { "as-child": "" }, {
      default: h(() => [
        R(l(Y), k(t, {
          ref: l(a),
          type: o.as === "button" ? "button" : void 0,
          onClick: r[0] || (r[0] = (s) => l(n).onClose())
        }), {
          default: h(() => [
            x(o.$slots, "default")
          ]),
          _: 3
        }, 16, ["type"])
      ]),
      _: 3
    }));
  }
}), ch = /* @__PURE__ */ w({
  __name: "ToastAction",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    if (!e.altText)
      throw new Error("Missing prop `altText` expected on `ToastAction`");
    const { forwardRef: t } = V();
    return (n, a) => n.altText ? (y(), C(Rd, {
      key: 0,
      "alt-text": n.altText,
      "as-child": ""
    }, {
      default: h(() => [
        R(Ld, {
          ref: l(t),
          as: n.as,
          "as-child": n.asChild
        }, {
          default: h(() => [
            x(n.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child"])
      ]),
      _: 3
    }, 8, ["alt-text"])) : ce("", !0);
  }
}), li = /* @__PURE__ */ w({
  __name: "FocusProxy",
  emits: ["focusFromOutsideViewport"],
  setup(e, { emit: t }) {
    const n = t, a = Qo();
    return (o, r) => (y(), C(l(ja), {
      "aria-hidden": "true",
      tabindex: "0",
      style: { position: "fixed" },
      onFocus: r[0] || (r[0] = (s) => {
        var i;
        const u = s.relatedTarget;
        !((i = l(a).viewport.value) != null && i.contains(u)) && n("focusFromOutsideViewport");
      })
    }, {
      default: h(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }));
  }
}), fh = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "ToastViewport",
  props: {
    hotkey: { default: () => ["F8"] },
    label: { type: [String, Function], default: "Notifications ({hotkey})" },
    asChild: { type: Boolean },
    as: { default: "ol" }
  },
  setup(e) {
    const t = e, { hotkey: n, label: a } = Ce(t), { forwardRef: o, currentElement: r } = V(), { createCollection: s } = ra(), i = s(r), u = Qo(), d = O(() => u.toastCount.value > 0), c = E(), f = E(), p = O(() => n.value.join("+").replace(/Key/g, "").replace(/Digit/g, ""));
    ql(n.value, () => {
      r.value.focus();
    }), ue(() => {
      u.onViewportChange(r.value);
    }), Se((v) => {
      const g = r.value;
      if (d.value && g) {
        const b = () => {
          if (!u.isClosePausedRef.value) {
            const A = new CustomEvent(sl);
            g.dispatchEvent(A), u.isClosePausedRef.value = !0;
          }
        }, _ = () => {
          if (u.isClosePausedRef.value) {
            const A = new CustomEvent(il);
            g.dispatchEvent(A), u.isClosePausedRef.value = !1;
          }
        }, $ = (A) => {
          !g.contains(A.relatedTarget) && _();
        }, S = () => {
          g.contains(Ke()) || _();
        }, P = (A) => {
          var D, B, I;
          const F = A.altKey || A.ctrlKey || A.metaKey;
          if (A.key === "Tab" && !F) {
            const T = Ke(), L = A.shiftKey;
            if (A.target === g && L) {
              (D = c.value) == null || D.focus();
              return;
            }
            const M = m({ tabbingDirection: L ? "backwards" : "forwards" }), K = M.findIndex((j) => j === T);
            yo(M.slice(K + 1)) ? A.preventDefault() : L ? (B = c.value) == null || B.focus() : (I = f.value) == null || I.focus();
          }
        };
        g.addEventListener("focusin", b), g.addEventListener("focusout", $), g.addEventListener("pointermove", b), g.addEventListener("pointerleave", S), g.addEventListener("keydown", P), window.addEventListener("blur", b), window.addEventListener("focus", _), v(() => {
          g.removeEventListener("focusin", b), g.removeEventListener("focusout", $), g.removeEventListener("pointermove", b), g.removeEventListener("pointerleave", S), g.removeEventListener("keydown", P), window.removeEventListener("blur", b), window.removeEventListener("focus", _);
        });
      }
    });
    function m({ tabbingDirection: v }) {
      const g = i.value.map((b) => {
        const _ = [b, ...Xl(b)];
        return v === "forwards" ? _ : _.reverse();
      });
      return (v === "forwards" ? g.reverse() : g).flat();
    }
    return (v, g) => (y(), C(l(Lv), {
      role: "region",
      "aria-label": typeof l(a) == "string" ? l(a).replace("{hotkey}", p.value) : l(a)(p.value),
      tabindex: "-1",
      style: Pt({
        // incase list has size when empty (e.g. padding), we remove pointer events so
        // it doesn't prevent interactions with page elements that it overlays
        pointerEvents: d.value ? void 0 : "none"
      })
    }, {
      default: h(() => [
        d.value ? (y(), C(li, {
          key: 0,
          ref: (b) => {
            c.value = l(ft)(b);
          },
          onFocusFromOutsideViewport: g[0] || (g[0] = () => {
            const b = m({
              tabbingDirection: "forwards"
            });
            l(yo)(b);
          })
        }, null, 512)) : ce("", !0),
        R(l(Y), k({
          ref: l(o),
          tabindex: "-1",
          as: v.as,
          "as-child": v.asChild
        }, v.$attrs), {
          default: h(() => [
            x(v.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child"]),
        d.value ? (y(), C(li, {
          key: 1,
          ref: (b) => {
            f.value = l(ft)(b);
          },
          onFocusFromOutsideViewport: g[1] || (g[1] = () => {
            const b = m({
              tabbingDirection: "backwards"
            });
            l(yo)(b);
          })
        }, null, 512)) : ce("", !0)
      ]),
      _: 3
    }, 8, ["aria-label", "style"]));
  }
}), ph = /* @__PURE__ */ w({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return V(), (n, a) => (y(), C(l(Y), Q(ne(t)), {
      default: h(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vh = /* @__PURE__ */ w({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return V(), (n, a) => (y(), C(l(Y), Q(ne(t)), {
      default: h(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Nd = "tooltip.open", [fs, mh] = we("TooltipProvider"), gh = /* @__PURE__ */ w({
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
    const t = e, { delayDuration: n, skipDelayDuration: a, disableHoverableContent: o, disableClosingTrigger: r, ignoreNonKeyboardFocus: s, disabled: i } = Ce(t);
    V();
    const u = E(!0), d = E(!1), { start: c, stop: f } = Vl(() => {
      u.value = !0;
    }, a, { immediate: !1 });
    return mh({
      isOpenDelayed: u,
      delayDuration: n,
      onOpen() {
        f(), u.value = !1;
      },
      onClose() {
        c();
      },
      isPointerInTransitRef: d,
      disableHoverableContent: o,
      disableClosingTrigger: r,
      disabled: i,
      ignoreNonKeyboardFocus: s
    }), (p, m) => x(p.$slots, "default");
  }
}), [Jo, yh] = we("TooltipRoot"), hh = /* @__PURE__ */ w({
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
    const n = e, a = t;
    V();
    const o = fs(), r = O(() => n.disableHoverableContent ?? o.disableHoverableContent.value), s = O(() => n.disableClosingTrigger ?? o.disableClosingTrigger.value), i = O(() => n.disabled ?? o.disabled.value), u = O(() => n.delayDuration ?? o.delayDuration.value), d = O(() => n.ignoreNonKeyboardFocus ?? o.ignoreNonKeyboardFocus.value), c = De(n, "open", a, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    });
    te(c, (S) => {
      o.onClose && (S ? (o.onOpen(), document.dispatchEvent(new CustomEvent(Nd))) : o.onClose());
    });
    const f = E(!1), p = E(), m = O(() => c.value ? f.value ? "delayed-open" : "instant-open" : "closed"), { start: v, stop: g } = Vl(() => {
      f.value = !0, c.value = !0;
    }, u, { immediate: !1 });
    function b() {
      g(), f.value = !1, c.value = !0;
    }
    function _() {
      g(), c.value = !1;
    }
    function $() {
      v();
    }
    return yh({
      contentId: "",
      open: c,
      stateAttribute: m,
      trigger: p,
      onTriggerChange(S) {
        p.value = S;
      },
      onTriggerEnter() {
        o.isOpenDelayed.value ? $() : b();
      },
      onTriggerLeave() {
        r.value ? _() : g();
      },
      onOpen: b,
      onClose: _,
      disableHoverableContent: r,
      disableClosingTrigger: s,
      disabled: i,
      ignoreNonKeyboardFocus: d
    }), (S, P) => (y(), C(l(ia), null, {
      default: h(() => [
        x(S.$slots, "default", { open: l(c) })
      ]),
      _: 3
    }));
  }
}), bh = /* @__PURE__ */ w({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Jo(), a = fs();
    n.contentId || (n.contentId = Ve(void 0, "radix-vue-tooltip-content"));
    const { forwardRef: o, currentElement: r } = V(), s = E(!1), i = E(!1), u = O(() => n.disabled.value ? {} : {
      click: g,
      focus: m,
      pointermove: f,
      pointerleave: p,
      pointerdown: c,
      blur: v
    });
    ue(() => {
      n.onTriggerChange(r.value);
    });
    function d() {
      setTimeout(() => {
        s.value = !1;
      }, 1);
    }
    function c() {
      s.value = !0, document.addEventListener("pointerup", d, { once: !0 });
    }
    function f(b) {
      b.pointerType !== "touch" && !i.value && !a.isPointerInTransitRef.value && (n.onTriggerEnter(), i.value = !0);
    }
    function p() {
      n.onTriggerLeave(), i.value = !1;
    }
    function m(b) {
      var _, $;
      s.value || n.ignoreNonKeyboardFocus.value && !(($ = (_ = b.target).matches) != null && $.call(_, ":focus-visible")) || n.onOpen();
    }
    function v() {
      n.onClose();
    }
    function g() {
      n.disableClosingTrigger.value || n.onClose();
    }
    return (b, _) => (y(), C(l(za), { "as-child": "" }, {
      default: h(() => [
        R(l(Y), k({
          ref: l(o),
          "aria-describedby": l(n).open.value ? l(n).contentId : void 0,
          "data-state": l(n).stateAttribute.value,
          as: b.as,
          "as-child": t.asChild,
          "data-grace-area-trigger": ""
        }, uf(u.value)), {
          default: h(() => [
            x(b.$slots, "default")
          ]),
          _: 3
        }, 16, ["aria-describedby", "data-state", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), Vd = /* @__PURE__ */ w({
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
    const n = e, a = t, o = Jo(), { forwardRef: r } = V(), s = Ol(), i = O(() => {
      var c;
      return (c = s.default) == null ? void 0 : c.call(s);
    }), u = O(() => {
      var c;
      if (n.ariaLabel)
        return n.ariaLabel;
      let f = "";
      function p(m) {
        typeof m.children == "string" && m.type !== El ? f += m.children : Array.isArray(m.children) && m.children.forEach((v) => p(v));
      }
      return (c = i.value) == null || c.forEach((m) => p(m)), f;
    }), d = O(() => {
      const { ariaLabel: c, ...f } = n;
      return f;
    });
    return ue(() => {
      Xn(window, "scroll", (c) => {
        const f = c.target;
        f != null && f.contains(o.trigger.value) && o.onClose();
      }), Xn(window, Nd, o.onClose);
    }), (c, f) => (y(), C(l(sa), {
      "as-child": "",
      "disable-outside-pointer-events": !1,
      onEscapeKeyDown: f[0] || (f[0] = (p) => a("escapeKeyDown", p)),
      onPointerDownOutside: f[1] || (f[1] = (p) => {
        var m;
        l(o).disableClosingTrigger.value && (m = l(o).trigger.value) != null && m.contains(p.target) && p.preventDefault(), a("pointerDownOutside", p);
      }),
      onFocusOutside: f[2] || (f[2] = ke(() => {
      }, ["prevent"])),
      onDismiss: f[3] || (f[3] = (p) => l(o).onClose())
    }, {
      default: h(() => [
        R(l(Qn), k({
          ref: l(r),
          "data-state": l(o).stateAttribute.value
        }, { ...c.$attrs, ...d.value }, { style: {
          "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
          "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
          "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
        } }), {
          default: h(() => [
            x(c.$slots, "default"),
            R(l(ja), {
              id: l(o).contentId,
              role: "tooltip"
            }, {
              default: h(() => [
                ge(pe(u.value), 1)
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
}), wh = /* @__PURE__ */ w({
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
    const t = He(e), { forwardRef: n, currentElement: a } = V(), { trigger: o, onClose: r } = Jo(), s = fs(), { isPointerInTransit: i, onPointerExit: u } = nv(o, a);
    return s.isPointerInTransitRef = i, u(() => {
      r();
    }), (d, c) => (y(), C(Vd, k({ ref: l(n) }, l(t)), {
      default: h(() => [
        x(d.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), _h = /* @__PURE__ */ w({
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
    const n = e, a = t, o = Jo(), r = de(n, a), { forwardRef: s } = V();
    return (i, u) => (y(), C(l(pt), {
      present: i.forceMount || l(o).open.value
    }, {
      default: h(() => [
        (y(), C(at(l(o).disableHoverableContent.value ? Vd : wh), k({ ref: l(s) }, l(r)), {
          default: h(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), xh = /* @__PURE__ */ w({
  __name: "TooltipPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, a) => (y(), C(l(la), Q(ne(t)), {
      default: h(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function qd(e) {
  var t, n, a = "";
  if (typeof e == "string" || typeof e == "number") a += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = qd(e[t])) && (a && (a += " "), a += n);
  } else for (n in e) e[n] && (a && (a += " "), a += n);
  return a;
}
function zd() {
  for (var e, t, n = 0, a = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = qd(e)) && (a && (a += " "), a += t);
  return a;
}
const ps = "-", Ch = (e) => {
  const t = $h(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: a
  } = e;
  return {
    getClassGroupId: (s) => {
      const i = s.split(ps);
      return i[0] === "" && i.length !== 1 && i.shift(), jd(i, t) || Sh(s);
    },
    getConflictingClassGroupIds: (s, i) => {
      const u = n[s] || [];
      return i && a[s] ? [...u, ...a[s]] : u;
    }
  };
}, jd = (e, t) => {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], a = t.nextPart.get(n), o = a ? jd(e.slice(1), a) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const r = e.join(ps);
  return (s = t.validators.find(({
    validator: i
  }) => i(r))) == null ? void 0 : s.classGroupId;
}, si = /^\[(.+)\]$/, Sh = (e) => {
  if (si.test(e)) {
    const t = si.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, $h = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, a = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Eh(Object.entries(e.classGroups), n).forEach(([r, s]) => {
    ul(s, a, r, t);
  }), a;
}, ul = (e, t, n, a) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const r = o === "" ? t : ii(t, o);
      r.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (Oh(o)) {
        ul(o(a), t, n, a);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([r, s]) => {
      ul(s, ii(t, r), n, a);
    });
  });
}, ii = (e, t) => {
  let n = e;
  return t.split(ps).forEach((a) => {
    n.nextPart.has(a) || n.nextPart.set(a, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(a);
  }), n;
}, Oh = (e) => e.isThemeGetter, Eh = (e, t) => t ? e.map(([n, a]) => {
  const o = a.map((r) => typeof r == "string" ? t + r : typeof r == "object" ? Object.fromEntries(Object.entries(r).map(([s, i]) => [t + s, i])) : r);
  return [n, o];
}) : e, Ah = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
  const o = (r, s) => {
    n.set(r, s), t++, t > e && (t = 0, a = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(r) {
      let s = n.get(r);
      if (s !== void 0)
        return s;
      if ((s = a.get(r)) !== void 0)
        return o(r, s), s;
    },
    set(r, s) {
      n.has(r) ? n.set(r, s) : o(r, s);
    }
  };
}, Kd = "!", Bh = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, a = t.length === 1, o = t[0], r = t.length, s = (i) => {
    const u = [];
    let d = 0, c = 0, f;
    for (let b = 0; b < i.length; b++) {
      let _ = i[b];
      if (d === 0) {
        if (_ === o && (a || i.slice(b, b + r) === t)) {
          u.push(i.slice(c, b)), c = b + r;
          continue;
        }
        if (_ === "/") {
          f = b;
          continue;
        }
      }
      _ === "[" ? d++ : _ === "]" && d--;
    }
    const p = u.length === 0 ? i : i.substring(c), m = p.startsWith(Kd), v = m ? p.substring(1) : p, g = f && f > c ? f - c : void 0;
    return {
      modifiers: u,
      hasImportantModifier: m,
      baseClassName: v,
      maybePostfixModifierPosition: g
    };
  };
  return n ? (i) => n({
    className: i,
    parseClassName: s
  }) : s;
}, Ph = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((a) => {
    a[0] === "[" ? (t.push(...n.sort(), a), n = []) : n.push(a);
  }), t.push(...n.sort()), t;
}, Dh = (e) => ({
  cache: Ah(e.cacheSize),
  parseClassName: Bh(e),
  ...Ch(e)
}), kh = /\s+/, Th = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: a,
    getConflictingClassGroupIds: o
  } = t, r = [], s = e.trim().split(kh);
  let i = "";
  for (let u = s.length - 1; u >= 0; u -= 1) {
    const d = s[u], {
      modifiers: c,
      hasImportantModifier: f,
      baseClassName: p,
      maybePostfixModifierPosition: m
    } = n(d);
    let v = !!m, g = a(v ? p.substring(0, m) : p);
    if (!g) {
      if (!v) {
        i = d + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (g = a(p), !g) {
        i = d + (i.length > 0 ? " " + i : i);
        continue;
      }
      v = !1;
    }
    const b = Ph(c).join(":"), _ = f ? b + Kd : b, $ = _ + g;
    if (r.includes($))
      continue;
    r.push($);
    const S = o(g, v);
    for (let P = 0; P < S.length; ++P) {
      const A = S[P];
      r.push(_ + A);
    }
    i = d + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function Ih() {
  let e = 0, t, n, a = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Hd(t)) && (a && (a += " "), a += n);
  return a;
}
const Hd = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let a = 0; a < e.length; a++)
    e[a] && (t = Hd(e[a])) && (n && (n += " "), n += t);
  return n;
};
function Fh(e, ...t) {
  let n, a, o, r = s;
  function s(u) {
    const d = t.reduce((c, f) => f(c), e());
    return n = Dh(d), a = n.cache.get, o = n.cache.set, r = i, i(u);
  }
  function i(u) {
    const d = a(u);
    if (d)
      return d;
    const c = Th(u, n);
    return o(u, c), c;
  }
  return function() {
    return r(Ih.apply(null, arguments));
  };
}
const Pe = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, Wd = /^\[(?:([a-z-]+):)?(.+)\]$/i, Mh = /^\d+\/\d+$/, Rh = /* @__PURE__ */ new Set(["px", "full", "screen"]), Lh = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Nh = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Vh = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, qh = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, zh = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Vt = (e) => Hn(e) || Rh.has(e) || Mh.test(e), Jt = (e) => fa(e, "length", Xh), Hn = (e) => !!e && !Number.isNaN(Number(e)), _r = (e) => fa(e, "number", Hn), ya = (e) => !!e && Number.isInteger(Number(e)), jh = (e) => e.endsWith("%") && Hn(e.slice(0, -1)), me = (e) => Wd.test(e), Zt = (e) => Lh.test(e), Kh = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Hh = (e) => fa(e, Kh, Ud), Wh = (e) => fa(e, "position", Ud), Uh = /* @__PURE__ */ new Set(["image", "url"]), Gh = (e) => fa(e, Uh, Jh), Yh = (e) => fa(e, "", Qh), ha = () => !0, fa = (e, t, n) => {
  const a = Wd.exec(e);
  return a ? a[1] ? typeof t == "string" ? a[1] === t : t.has(a[1]) : n(a[2]) : !1;
}, Xh = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Nh.test(e) && !Vh.test(e)
), Ud = () => !1, Qh = (e) => qh.test(e), Jh = (e) => zh.test(e), Zh = () => {
  const e = Pe("colors"), t = Pe("spacing"), n = Pe("blur"), a = Pe("brightness"), o = Pe("borderColor"), r = Pe("borderRadius"), s = Pe("borderSpacing"), i = Pe("borderWidth"), u = Pe("contrast"), d = Pe("grayscale"), c = Pe("hueRotate"), f = Pe("invert"), p = Pe("gap"), m = Pe("gradientColorStops"), v = Pe("gradientColorStopPositions"), g = Pe("inset"), b = Pe("margin"), _ = Pe("opacity"), $ = Pe("padding"), S = Pe("saturate"), P = Pe("scale"), A = Pe("sepia"), D = Pe("skew"), B = Pe("space"), I = Pe("translate"), F = () => ["auto", "contain", "none"], T = () => ["auto", "hidden", "clip", "visible", "scroll"], L = () => ["auto", me, t], M = () => [me, t], K = () => ["", Vt, Jt], j = () => ["auto", Hn, me], G = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], W = () => ["solid", "dashed", "dotted", "double", "none"], ee = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], Z = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], z = () => ["", "0", me], se = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], ie = () => [Hn, me];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [ha],
      spacing: [Vt, Jt],
      blur: ["none", "", Zt, me],
      brightness: ie(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Zt, me],
      borderSpacing: M(),
      borderWidth: K(),
      contrast: ie(),
      grayscale: z(),
      hueRotate: ie(),
      invert: z(),
      gap: M(),
      gradientColorStops: [e],
      gradientColorStopPositions: [jh, Jt],
      inset: L(),
      margin: L(),
      opacity: ie(),
      padding: M(),
      saturate: ie(),
      scale: ie(),
      sepia: z(),
      skew: ie(),
      space: M(),
      translate: M()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", me]
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
        columns: [Zt]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": se()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": se()
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
        object: [...G(), me]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: T()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": T()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": T()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: F()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": F()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": F()
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
        z: ["auto", ya, me]
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
        flex: ["1", "auto", "initial", "none", me]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: z()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: z()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", ya, me]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [ha]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", ya, me]
        }, me]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": j()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": j()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [ha]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [ya, me]
        }, me]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": j()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": j()
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
        "auto-cols": ["auto", "min", "max", "fr", me]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", me]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [p]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [p]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [p]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...Z()]
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
        content: ["normal", ...Z(), "baseline"]
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
        "place-content": [...Z(), "baseline"]
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
        p: [$]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [$]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [$]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [$]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [$]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [$]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [$]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [$]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [$]
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
        "space-x": [B]
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
        "space-y": [B]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", me, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [me, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [me, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [Zt]
        }, Zt]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [me, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [me, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [me, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [me, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Zt, Jt]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", _r]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ha]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", me]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Hn, _r]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Vt, me]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", me]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", me]
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
        "placeholder-opacity": [_]
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
        "text-opacity": [_]
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
        decoration: [...W(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Vt, Jt]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Vt, me]
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
        indent: M()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", me]
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
        content: ["none", me]
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
        "bg-opacity": [_]
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
        bg: [...G(), Wh]
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
        bg: ["auto", "cover", "contain", Hh]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Gh]
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
        from: [m]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [m]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [m]
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
        "border-opacity": [_]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...W(), "hidden"]
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
        "divide-opacity": [_]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: W()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [o]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [o]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [o]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [o]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [o]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [o]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [o]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [o]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [o]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [o]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...W()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Vt, me]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Vt, Jt]
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
        ring: K()
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
        "ring-opacity": [_]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Vt, Jt]
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
        shadow: ["", "inner", "none", Zt, Yh]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [ha]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [_]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ee(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ee()
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
        brightness: [a]
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
        "drop-shadow": ["", "none", Zt, me]
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
        invert: [f]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [S]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [A]
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
        "backdrop-brightness": [a]
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
        "backdrop-invert": [f]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [_]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [S]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [A]
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
        "border-spacing": [s]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [s]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [s]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", me]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: ie()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", me]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: ie()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", me]
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
        scale: [P]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [P]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [P]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [ya, me]
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
        "skew-x": [D]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [D]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", me]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", me]
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
        "scroll-m": M()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": M()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": M()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": M()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": M()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": M()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": M()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": M()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": M()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": M()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": M()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": M()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": M()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": M()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": M()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": M()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": M()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": M()
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
        "will-change": ["auto", "scroll", "contents", "transform", me]
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
        stroke: [Vt, Jt, _r]
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
}, e0 = /* @__PURE__ */ Fh(Zh);
function N(...e) {
  return e0(zd(e));
}
function r$(e, t) {
  t.value = typeof e == "function" ? e(t.value) : e;
}
function l$(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, a = Symbol(n);
  return [(s) => {
    const i = na(a, s);
    if (i || i === null) return i;
    throw new Error(
      `Injection \`${a.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(", ")}` : `\`${e}\``}`
    );
  }, (s) => (aa(a, s), s)];
}
const t0 = /* @__PURE__ */ w({
  __name: "AlertDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = de(e, t);
    return (r, s) => (y(), C(l(om), Q(ne(l(o))), {
      default: h(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), s$ = /* @__PURE__ */ w({
  __name: "AlertDialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (y(), C(l(rm), Q(ne(t)), {
      default: h(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), n0 = /* @__PURE__ */ w({
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
    const n = e, a = t, o = O(() => {
      const { class: s, ...i } = n;
      return i;
    }), r = de(o, a);
    return (s, i) => (y(), C(l(lm), null, {
      default: h(() => [
        R(l(dm), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        R(l(um), k(l(r), {
          class: l(N)(
            "fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
            n.class
          )
        }), {
          default: h(() => [
            x(s.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), a0 = /* @__PURE__ */ w({
  __name: "AlertDialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (y(), q("div", {
      class: le(l(N)("flex flex-col gap-y-2 text-center sm:text-left", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), o0 = /* @__PURE__ */ w({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = O(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (y(), C(l(fm), k(n.value, {
      class: l(N)("text-lg font-semibold", t.class)
    }), {
      default: h(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), r0 = /* @__PURE__ */ w({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = O(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (y(), C(l(pm), k(n.value, {
      class: l(N)("text-sm text-muted-foreground", t.class)
    }), {
      default: h(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), l0 = /* @__PURE__ */ w({
  __name: "AlertDialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (y(), q("div", {
      class: le(l(N)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), ui = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, di = zd, Ha = (e, t) => (n) => {
  var a;
  if ((t == null ? void 0 : t.variants) == null) return di(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: r } = t, s = Object.keys(o).map((d) => {
    const c = n == null ? void 0 : n[d], f = r == null ? void 0 : r[d];
    if (c === null) return null;
    const p = ui(c) || ui(f);
    return o[d][p];
  }), i = n && Object.entries(n).reduce((d, c) => {
    let [f, p] = c;
    return p === void 0 || (d[f] = p), d;
  }, {}), u = t == null || (a = t.compoundVariants) === null || a === void 0 ? void 0 : a.reduce((d, c) => {
    let { class: f, className: p, ...m } = c;
    return Object.entries(m).every((v) => {
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
      f,
      p
    ] : d;
  }, []);
  return di(e, s, u, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, vs = /* @__PURE__ */ w({
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
    return (n, a) => (y(), C(l(Y), {
      as: e.as,
      "as-child": e.asChild,
      class: le(l(N)(l(dn)({ variant: e.variant, size: e.size }), t.class))
    }, {
      default: h(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), dn = Ha(
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
), s0 = /* @__PURE__ */ w({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    variant: {}
  },
  setup(e) {
    const t = e, n = O(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (y(), C(l(vm), k(n.value, {
      class: l(N)(l(dn)({ variant: e.variant }), t.class)
    }), {
      default: h(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), i0 = /* @__PURE__ */ w({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = O(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (y(), C(l(cm), k(n.value, {
      class: l(N)(l(dn)({ variant: "outline" }), "mt-2 sm:mt-0", t.class)
    }), {
      default: h(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), i$ = /* @__PURE__ */ w({
  __name: "ConfirmDialog",
  setup(e) {
    const { isOpen: t, close: n, cancelButton: a, actionButton: o, title: r, description: s, variant: i } = c0();
    return (u, d) => (y(), C(l(t0), { open: l(t) }, {
      default: h(() => [
        R(l(n0), {
          onClose: l(n),
          onEscapeKeyDown: l(n),
          onPointerDownOutside: l(n)
        }, {
          default: h(() => [
            R(l(a0), null, {
              default: h(() => [
                R(l(o0), null, {
                  default: h(() => [
                    ge(pe(l(r)), 1)
                  ]),
                  _: 1
                }),
                R(l(r0), null, {
                  default: h(() => [
                    ge(pe(l(s)), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            R(l(l0), null, {
              default: h(() => [
                R(l(i0), {
                  onClick: l(a).handler
                }, {
                  default: h(() => [
                    ge(pe(l(a).label ?? "Cancel"), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                R(l(s0), {
                  variant: l(i),
                  onClick: l(o).handler
                }, {
                  default: h(() => [
                    ge(pe(l(o).label ?? "Confirm"), 1)
                  ]),
                  _: 1
                }, 8, ["variant", "onClick"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["onClose", "onEscapeKeyDown", "onPointerDownOutside"])
      ]),
      _: 1
    }, 8, ["open"]));
  }
}), ms = E(!1), Gd = E(""), Yd = E(""), Xd = E(null), Qd = E({
  label: void 0,
  handler: () => {
  }
}), Jd = E({
  label: void 0,
  handler: () => {
  }
}), u0 = (e) => {
  Gd.value = e.title, Yd.value = e.description, Xd.value = e.variant, Qd.value = ci(e.cancelAction), Jd.value = ci(e.action), d0();
}, ci = (e) => typeof e == "string" ? {
  label: e,
  handler: ho
} : typeof e == "function" ? {
  label: void 0,
  handler: e
} : typeof e == "object" && e !== void 0 ? {
  label: e.label ?? void 0,
  handler: e.handler ?? ho
} : {
  label: void 0,
  handler: ho
}, ho = () => {
  ms.value = !1;
}, d0 = () => {
  ms.value = !0;
};
function c0() {
  return {
    confirmDialog: (e) => u0(e),
    title: Gd,
    description: Yd,
    variant: Xd,
    isOpen: ms,
    close: ho,
    cancelButton: Qd,
    actionButton: Jd
  };
}
const pa = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, o] of t)
    n[a] = o;
  return n;
}, f0 = {}, p0 = { class: "h-full bg-background dark:text-white" };
function v0(e, t) {
  return y(), q("div", p0, [
    x(e.$slots, "default")
  ]);
}
const u$ = /* @__PURE__ */ pa(f0, [["render", v0]]), m0 = {}, g0 = { class: "sticky top-0 z-50 flex h-16 shrink-0 items-center gap-x-4 bg-background/60 px-4 backdrop-blur sm:gap-x-6 sm:px-6 lg:px-8" };
function y0(e, t) {
  return y(), q("header", g0, [
    x(e.$slots, "default")
  ]);
}
const d$ = /* @__PURE__ */ pa(m0, [["render", y0]]), h0 = {}, b0 = { class: "px-4 py-10 sm:px-6 lg:px-8 lg:pl-72" };
function w0(e, t) {
  return y(), q("main", b0, [
    x(e.$slots, "default")
  ]);
}
const c$ = /* @__PURE__ */ pa(h0, [["render", w0]]), _0 = {};
function x0(e, t) {
  return x(e.$slots, "default");
}
const f$ = /* @__PURE__ */ pa(_0, [["render", x0]]), C0 = {}, S0 = { class: "hidden px-6 py-10 lg:fixed lg:inset-y-0 lg:top-16 lg:z-50 lg:flex lg:w-72 lg:flex-col" }, $0 = { class: "gap-y-5 overflow-y-auto" };
function O0(e, t) {
  return y(), q("div", S0, [
    H("div", $0, [
      x(e.$slots, "default")
    ])
  ]);
}
const p$ = /* @__PURE__ */ pa(C0, [["render", O0]]), E0 = {};
function A0(e, t) {
  return x(e.$slots, "default");
}
const v$ = /* @__PURE__ */ pa(E0, [["render", A0]]);
function B0(e, t) {
  return y(), q("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    H("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    })
  ]);
}
function P0(e, t) {
  return y(), q("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    H("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    })
  ]);
}
function fi(e, t) {
  return y(), q("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    H("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
    })
  ]);
}
function D0(e, t) {
  return y(), q("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    H("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
    })
  ]);
}
const k0 = {
  type: "button",
  class: "-m-2.5 p-2.5 lg:hidden"
}, m$ = /* @__PURE__ */ w({
  __name: "TwoColumnLayoutSidebarTrigger",
  setup(e) {
    return (t, n) => (y(), q("button", k0, [
      n[0] || (n[0] = H("span", { class: "sr-only" }, "Open sidebar", -1)),
      R(l(B0), {
        class: "h-6 w-6",
        "aria-hidden": "true"
      })
    ]));
  }
}), T0 = 3, I0 = 1e6, jt = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST"
};
let xr = 0;
function F0() {
  return xr = (xr + 1) % Number.MAX_VALUE, xr.toString();
}
const Cr = /* @__PURE__ */ new Map();
function pi(e) {
  if (Cr.has(e)) return;
  const t = setTimeout(() => {
    Cr.delete(e), xa({
      type: jt.REMOVE_TOAST,
      toastId: e
    });
  }, I0);
  Cr.set(e, t);
}
const gt = E({
  toasts: []
});
function xa(e) {
  switch (e.type) {
    case jt.ADD_TOAST:
      gt.value.toasts = [e.toast, ...gt.value.toasts].slice(0, T0);
      break;
    case jt.UPDATE_TOAST:
      gt.value.toasts = gt.value.toasts.map(
        (t) => t.id === e.toast.id ? { ...t, ...e.toast } : t
      );
      break;
    case jt.DISMISS_TOAST: {
      const { toastId: t } = e;
      t ? pi(t) : gt.value.toasts.forEach((n) => {
        pi(n.id);
      }), gt.value.toasts = gt.value.toasts.map(
        (n) => n.id === t || t === void 0 ? {
          ...n,
          open: !1
        } : n
      );
      break;
    }
    case jt.REMOVE_TOAST:
      e.toastId === void 0 ? gt.value.toasts = [] : gt.value.toasts = gt.value.toasts.filter((t) => t.id !== e.toastId);
      break;
  }
}
function Zd() {
  return {
    toasts: O(() => gt.value.toasts),
    toast: M0,
    dismiss: (e) => xa({ type: jt.DISMISS_TOAST, toastId: e })
  };
}
function M0(e) {
  const t = F0(), n = (o) => xa({
    type: jt.UPDATE_TOAST,
    toast: { ...o, id: t }
  }), a = () => xa({ type: jt.DISMISS_TOAST, toastId: t });
  return xa({
    type: jt.ADD_TOAST,
    toast: {
      ...e,
      id: t,
      open: !0,
      onOpenChange: (o) => {
        o || a();
      }
    }
  }), {
    id: t,
    dismiss: a,
    update: n
  };
}
const R0 = { class: "flex items-start space-x-3" }, L0 = ["src", "alt"], N0 = { class: "grid gap-1" }, V0 = { class: "font-bold" }, q0 = /* @__PURE__ */ w({
  __name: "Toaster",
  props: {
    position: {}
  },
  emits: ["click"],
  setup(e) {
    const { toasts: t } = Zd();
    return (n, a) => (y(), C(l(Z0), null, {
      default: h(() => [
        (y(!0), q(Ee, null, st(l(t), (o) => (y(), C(l(z0), k({
          key: o.id
        }, { ref_for: !0 }, o, {
          class: "mt-1.5",
          onClick: (r) => n.$emit("click", o)
        }), {
          default: h(() => [
            H("div", R0, [
              o.icon ? (y(), q(Ee, { key: 0 }, [
                typeof o.icon == "string" ? (y(), q("img", {
                  key: 0,
                  src: o.icon,
                  class: le(["size-16 rounded-sm object-cover", o.iconClasses]),
                  alt: o.title
                }, null, 10, L0)) : (y(), C(at(o.icon), {
                  key: 1,
                  class: le(["size-6", o.iconClasses])
                }, null, 8, ["class"]))
              ], 64)) : ce("", !0),
              H("div", N0, [
                o.title ? (y(), C(l(J0), { key: 0 }, {
                  default: h(() => [
                    ge(pe(o.title), 1)
                  ]),
                  _: 2
                }, 1024)) : ce("", !0),
                o.description ? (y(), q(Ee, { key: 1 }, [
                  pf(o.description) ? (y(), C(l(vi), { key: 0 }, {
                    default: h(() => [
                      (y(), C(at(o.description)))
                    ]),
                    _: 2
                  }, 1024)) : typeof o.description == "object" ? (y(!0), q(Ee, { key: 1 }, st(o.description, (r, s) => (y(), q("p", {
                    key: s,
                    class: "text-sm opacity-90"
                  }, [
                    o.objectFormat === "key" ? (y(), q(Ee, { key: 0 }, [
                      ge(pe(s), 1)
                    ], 64)) : o.objectFormat === "both" ? (y(), q(Ee, { key: 1 }, [
                      H("span", V0, pe(s), 1),
                      ge(": " + pe(r), 1)
                    ], 64)) : (y(), q(Ee, { key: 2 }, [
                      ge(pe(r), 1)
                    ], 64))
                  ]))), 128)) : (y(), C(l(vi), { key: 2 }, {
                    default: h(() => [
                      ge(pe(o.description), 1)
                    ]),
                    _: 2
                  }, 1024))
                ], 64)) : ce("", !0),
                R(l(Q0))
              ])
            ]),
            (y(), C(at(o.action)))
          ]),
          _: 2
        }, 1040, ["onClick"]))), 128)),
        R(l(j0), { position: e.position }, null, 8, ["position"])
      ]),
      _: 1
    }));
  }
}), z0 = /* @__PURE__ */ w({
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
    const n = e, a = t, o = O(() => {
      const { class: s, ...i } = n;
      return i;
    }), r = de(o, a);
    return (s, i) => (y(), C(l(dh), k(l(r), {
      class: l(N)(l(eb)({ variant: e.variant }), n.class),
      "onUpdate:open": e.onOpenChange
    }), {
      default: h(() => [
        x(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class", "onUpdate:open"]));
  }
}), j0 = /* @__PURE__ */ w({
  __name: "ToastViewport",
  props: {
    position: { default: "bottom-right" },
    hotkey: {},
    label: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = O(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = O(() => {
      switch (t.position) {
        case "top-left":
          return "top-0 left-0 bottom-auto";
        case "top-right":
          return "top-0 right-0 bottom-auto";
        case "bottom-left":
          return "bottom-0 left-0 top-auto";
        case "bottom-right":
          return "bottom-0 right-0 top-auto";
        default:
          return "bottom-0 right-0 top-auto";
      }
    });
    return (o, r) => (y(), C(l(fh), k(n.value, {
      class: l(N)(
        // overriding the defaults to position at the bottom on mobile viewport
        // 'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
        "fixed flex-col z-[100] flex max-h-screen w-full p-4 md:max-w-[420px]",
        a.value,
        t.class
      )
    }), null, 16, ["class"]));
  }
}), g$ = /* @__PURE__ */ w({
  __name: "ToastAction",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = O(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (y(), C(l(ch), k(n.value, {
      class: l(N)(
        "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
        t.class
      )
    }), {
      default: h(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
});
function K0(e, t) {
  return y(), q("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    H("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z",
      fill: "currentColor"
    })
  ]);
}
function H0(e, t) {
  return y(), q("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    H("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z",
      fill: "currentColor"
    })
  ]);
}
function W0(e, t) {
  return y(), q("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    H("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z",
      fill: "currentColor"
    })
  ]);
}
function ec(e, t) {
  return y(), q("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    H("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",
      fill: "currentColor"
    })
  ]);
}
function tc(e, t) {
  return y(), q("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    H("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
      fill: "currentColor"
    })
  ]);
}
function U0(e, t) {
  return y(), q("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    H("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z",
      fill: "currentColor"
    })
  ]);
}
function G0(e, t) {
  return y(), q("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    H("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M3.13523 8.84197C3.3241 9.04343 3.64052 9.05363 3.84197 8.86477L7.5 5.43536L11.158 8.86477C11.3595 9.05363 11.6759 9.04343 11.8648 8.84197C12.0536 8.64051 12.0434 8.32409 11.842 8.13523L7.84197 4.38523C7.64964 4.20492 7.35036 4.20492 7.15803 4.38523L3.15803 8.13523C2.95657 8.32409 2.94637 8.64051 3.13523 8.84197Z",
      fill: "currentColor"
    })
  ]);
}
function Zo(e, t) {
  return y(), q("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    H("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
      fill: "currentColor"
    })
  ]);
}
function Y0(e, t) {
  return y(), q("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    H("path", {
      d: "M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z",
      fill: "currentColor"
    })
  ]);
}
function X0(e, t) {
  return y(), q("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    H("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z",
      fill: "currentColor"
    })
  ]);
}
const Q0 = /* @__PURE__ */ w({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = O(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (y(), C(l(Ld), k(n.value, {
      class: l(N)(
        "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
        t.class
      )
    }), {
      default: h(() => [
        R(l(Zo), { class: "h-4 w-4" })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), J0 = /* @__PURE__ */ w({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = O(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (y(), C(l(ph), k(n.value, {
      class: l(N)("text-sm font-semibold [&+div]:text-xs", t.class)
    }), {
      default: h(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), vi = /* @__PURE__ */ w({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = O(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (y(), C(l(vh), k({
      class: l(N)("text-sm opacity-90", t.class)
    }, n.value), {
      default: h(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Z0 = /* @__PURE__ */ w({
  __name: "ToastProvider",
  props: {
    label: {},
    duration: {},
    swipeDirection: {},
    swipeThreshold: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (y(), C(l(eh), Q(ne(t)), {
      default: h(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), eb = Ha(
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
), { toast: lo } = Zd();
function tb() {
  return {
    info: (e) => {
      lo({
        icon: D0,
        iconClasses: "text-blue-400",
        title: "FYI",
        description: e
      });
    },
    success: (e) => {
      lo({
        icon: P0,
        iconClasses: "text-green-400",
        title: "Success",
        description: e
      });
    },
    warning: (e) => {
      lo({
        icon: fi,
        iconClasses: "text-orange-400",
        title: "Warning",
        description: e
      });
    },
    error: (e, t = "value") => {
      lo({
        icon: fi,
        iconClasses: "text-red-400",
        title: "Oh snap! Some errors were encountered.",
        description: e,
        objectFormat: t
      });
    }
  };
}
const y$ = /* @__PURE__ */ w({
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
      success: a,
      warning: o,
      error: r
    } = tb();
    return te(
      () => t.info,
      (s) => {
        s && n(t.info);
      },
      {
        immediate: !0
      }
    ), te(
      () => t.success,
      (s) => {
        s && a(t.success);
      },
      { immediate: !0 }
    ), te(
      () => t.warning,
      (s) => {
        s && o(t.warning);
      },
      { immediate: !0 }
    ), te(
      () => t.errors,
      () => {
        t.errors !== void 0 && Object.keys(t.errors).length > 0 && r(t.errors, t.objectFormat);
      }
    ), (s, i) => (y(), C(l(q0)));
  }
}), nb = { class: "flex items-center justify-between space-y-2" }, ab = { class: "flex items-center space-x-2" }, h$ = /* @__PURE__ */ w({
  __name: "Heading",
  props: {
    as: { default: "h2" },
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (y(), q("div", nb, [
      (y(), C(at(e.as), {
        class: le(l(N)("text-3xl font-bold tracking-tight", t.class))
      }, {
        default: h(() => [
          x(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["class"])),
      H("div", ab, [
        x(n.$slots, "actions")
      ])
    ]));
  }
}), ob = /* @__PURE__ */ w({
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
    const o = de(e, t);
    return (r, s) => (y(), C(l(Ev), Q(ne(l(o))), {
      default: h(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), b$ = /* @__PURE__ */ w({
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
    const o = de(e, t);
    return (r, s) => (y(), C(ob, Q(ne(l(o))), {
      default: h(() => [
        (y(!0), q(Ee, null, st(e.content, (i, u) => (y(), C(l(lb), {
          key: u,
          value: "item-" + u
        }, {
          default: h(() => [
            R(l(sb), null, {
              default: h(() => [
                x(r.$slots, u + ".title", { item: i }, () => [
                  ge(pe(i.title), 1)
                ])
              ]),
              _: 2
            }, 1024),
            R(l(rb), null, {
              default: h(() => [
                x(r.$slots, u + ".content", { item: i }, () => [
                  ge(pe(i.content), 1)
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
}), rb = /* @__PURE__ */ w({
  __name: "AccordionContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = O(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (y(), C(l(Pv), k(n.value, { class: "accordion-content overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" }), {
      default: h(() => [
        H("div", {
          class: le(l(N)("pb-4 pt-0", t.class))
        }, [
          x(a.$slots, "default")
        ], 2)
      ]),
      _: 3
    }, 16));
  }
}), lb = /* @__PURE__ */ w({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = O(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = He(n);
    return (o, r) => (y(), C(l(Bv), k(l(a), {
      class: l(N)("border-b", t.class)
    }), {
      default: h(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), sb = /* @__PURE__ */ w({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = O(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (y(), C(l(Dv), { class: "flex" }, {
      default: h(() => [
        R(l(kv), k(n.value, {
          class: l(N)(
            "accordion-trigger flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
            t.class
          )
        }), {
          default: h(() => [
            x(a.$slots, "default"),
            x(a.$slots, "icon", {}, () => [
              R(l(tc), { class: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), w$ = /* @__PURE__ */ w({
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
    const o = de(e, t);
    return (r, s) => (y(), C(l(db), null, {
      default: h(() => [
        R(l(ib), Q(ne(l(o))), {
          default: h(() => [
            R(l(cb), {
              class: le(e.indicator ? "underline decoration-dotted underline-offset-4" : "")
            }, {
              default: h(() => [
                x(r.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]),
            R(l(ub), Q(ne(r.$attrs)), {
              default: h(() => [
                x(r.$slots, "tooltip", {}, () => [
                  ge(pe(e.tooltip), 1)
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
}), ib = /* @__PURE__ */ w({
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
    const o = de(e, t);
    return (r, s) => (y(), C(l(hh), Q(ne(l(o))), {
      default: h(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ub = /* @__PURE__ */ w({
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
    const n = e, a = t, o = O(() => {
      const { class: s, ...i } = n;
      return i;
    }), r = de(o, a);
    return (s, i) => (y(), C(l(xh), null, {
      default: h(() => [
        R(l(_h), k({ ...l(r), ...s.$attrs }, {
          class: l(N)(
            "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            n.class
          )
        }), {
          default: h(() => [
            x(s.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), db = /* @__PURE__ */ w({
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
    return (n, a) => (y(), C(l(gh), Q(ne(t)), {
      default: h(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), cb = /* @__PURE__ */ w({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (y(), C(l(bh), Q(ne(t)), {
      default: h(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), _$ = /* @__PURE__ */ w({
  __name: "Avatar",
  props: {
    class: {},
    size: { default: "sm" },
    shape: { default: "circle" }
  },
  setup(e) {
    const t = e;
    return (n, a) => (y(), C(l(gm), {
      class: le(l(N)(l(fb)({ size: e.size, shape: e.shape }), t.class))
    }, {
      default: h(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), x$ = /* @__PURE__ */ w({
  __name: "AvatarImage",
  props: {
    src: {},
    referrerPolicy: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (y(), C(l(hm), k(t, { class: "h-full w-full object-cover" }), null, 16));
  }
}), C$ = /* @__PURE__ */ w({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (y(), C(l(bm), Q(ne(t)), {
      default: h(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fb = Ha(
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
), S$ = /* @__PURE__ */ w({
  __name: "Badge",
  props: {
    variant: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (y(), q("div", {
      class: le(l(N)(l(pb)({ variant: e.variant }), t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), pb = Ha(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        success: "border-transparent bg-success text-success-foreground shadow hover:bg-success/80",
        warning: "border-transparent bg-warning text-warning-foreground shadow hover:bg-warning/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), $$ = /* @__PURE__ */ w({
  __name: "Card",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (y(), q("div", {
      class: le(l(N)("rounded-xl border bg-card text-card-foreground shadow", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), O$ = /* @__PURE__ */ w({
  __name: "CardContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (y(), q("div", {
      class: le(l(N)("p-6 pt-0", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), E$ = /* @__PURE__ */ w({
  __name: "CardDescription",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (y(), q("p", {
      class: le(l(N)("text-sm text-muted-foreground", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), A$ = /* @__PURE__ */ w({
  __name: "CardFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (y(), q("div", {
      class: le(l(N)("flex items-center p-6 pt-0", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), B$ = /* @__PURE__ */ w({
  __name: "CardHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (y(), q("div", {
      class: le(l(N)("flex flex-col gap-y-1.5 p-6", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), P$ = /* @__PURE__ */ w({
  __name: "CardTitle",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (y(), q("h3", {
      class: le(l(N)("font-semibold leading-none tracking-tight", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
});
var mi;
const vb = typeof window < "u", mb = (e) => typeof e < "u", gb = (e) => typeof e == "function";
vb && ((mi = window == null ? void 0 : window.navigator) != null && mi.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function yb(e) {
  return e;
}
function hb(e) {
  const t = Symbol("InjectionState");
  return [(...o) => {
    const r = e(...o);
    return aa(t, r), r;
  }, () => na(t)];
}
function bb(e) {
  if (!ct(e))
    return Gn(e);
  const t = new Proxy({}, {
    get(n, a, o) {
      return l(Reflect.get(e.value, a, o));
    },
    set(n, a, o) {
      return ct(e.value[a]) && !ct(o) ? e.value[a].value = o : e.value[a] = o, !0;
    },
    deleteProperty(n, a) {
      return Reflect.deleteProperty(e.value, a);
    },
    has(n, a) {
      return Reflect.has(e.value, a);
    },
    ownKeys() {
      return Object.keys(e.value);
    },
    getOwnPropertyDescriptor() {
      return {
        enumerable: !0,
        configurable: !0
      };
    }
  });
  return Gn(t);
}
function wb(e) {
  return bb(O(e));
}
function Ye(e, ...t) {
  const n = t.flat();
  return wb(() => Object.fromEntries(Object.entries(Ce(e)).filter((a) => !n.includes(a[0]))));
}
function _b(e) {
  return JSON.parse(JSON.stringify(e));
}
const gi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, yi = "__vueuse_ssr_handlers__";
gi[yi] = gi[yi] || {};
var hi;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(hi || (hi = {}));
var xb = Object.defineProperty, bi = Object.getOwnPropertySymbols, Cb = Object.prototype.hasOwnProperty, Sb = Object.prototype.propertyIsEnumerable, wi = (e, t, n) => t in e ? xb(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, $b = (e, t) => {
  for (var n in t || (t = {}))
    Cb.call(t, n) && wi(e, n, t[n]);
  if (bi)
    for (var n of bi(t))
      Sb.call(t, n) && wi(e, n, t[n]);
  return e;
};
const Ob = {
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
$b({
  linear: yb
}, Ob);
function nc(e, t, n, a = {}) {
  var o, r, s;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: c = !1,
    defaultValue: f
  } = a, p = Qe(), m = n || (p == null ? void 0 : p.emit) || ((o = p == null ? void 0 : p.$emit) == null ? void 0 : o.bind(p)) || ((s = (r = p == null ? void 0 : p.proxy) == null ? void 0 : r.$emit) == null ? void 0 : s.bind(p == null ? void 0 : p.proxy));
  let v = d;
  v = d || v || `update:${t.toString()}`;
  const g = (_) => i ? gb(i) ? i(_) : _b(_) : _, b = () => mb(e[t]) ? g(e[t]) : f;
  if (u) {
    const _ = b(), $ = E(_);
    return te(() => e[t], (S) => $.value = g(S)), te($, (S) => {
      (S !== e[t] || c) && m(v, S);
    }, { deep: c }), $;
  } else
    return O({
      get() {
        return b();
      },
      set(_) {
        m(v, _);
      }
    });
}
function Eb(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function _i(e) {
  return Eb(e) || Array.isArray(e);
}
function Ab() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function gs(e, t) {
  const n = Object.keys(e), a = Object.keys(t);
  if (n.length !== a.length) return !1;
  const o = JSON.stringify(Object.keys(e.breakpoints || {})), r = JSON.stringify(Object.keys(t.breakpoints || {}));
  return o !== r ? !1 : n.every((s) => {
    const i = e[s], u = t[s];
    return typeof i == "function" ? `${i}` == `${u}` : !_i(i) || !_i(u) ? i === u : gs(i, u);
  });
}
function xi(e) {
  return e.concat().sort((t, n) => t.name > n.name ? 1 : -1).map((t) => t.options);
}
function Bb(e, t) {
  if (e.length !== t.length) return !1;
  const n = xi(e), a = xi(t);
  return n.every((o, r) => {
    const s = a[r];
    return gs(o, s);
  });
}
function ys(e) {
  return typeof e == "number";
}
function dl(e) {
  return typeof e == "string";
}
function er(e) {
  return typeof e == "boolean";
}
function Ci(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Fe(e) {
  return Math.abs(e);
}
function hs(e) {
  return Math.sign(e);
}
function Ca(e, t) {
  return Fe(e - t);
}
function Pb(e, t) {
  if (e === 0 || t === 0 || Fe(e) <= Fe(t)) return 0;
  const n = Ca(Fe(e), Fe(t));
  return Fe(n / e);
}
function Db(e) {
  return Math.round(e * 100) / 100;
}
function Ta(e) {
  return Ia(e).map(Number);
}
function bt(e) {
  return e[Wa(e)];
}
function Wa(e) {
  return Math.max(0, e.length - 1);
}
function bs(e, t) {
  return t === Wa(e);
}
function Si(e, t = 0) {
  return Array.from(Array(e), (n, a) => t + a);
}
function Ia(e) {
  return Object.keys(e);
}
function ac(e, t) {
  return [e, t].reduce((n, a) => (Ia(a).forEach((o) => {
    const r = n[o], s = a[o], i = Ci(r) && Ci(s);
    n[o] = i ? ac(r, s) : s;
  }), n), {});
}
function cl(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function kb(e, t) {
  const n = {
    start: a,
    center: o,
    end: r
  };
  function a() {
    return 0;
  }
  function o(u) {
    return r(u) / 2;
  }
  function r(u) {
    return t - u;
  }
  function s(u, d) {
    return dl(e) ? n[e](u) : e(t, u, d);
  }
  return {
    measure: s
  };
}
function Fa() {
  let e = [];
  function t(o, r, s, i = {
    passive: !0
  }) {
    let u;
    if ("addEventListener" in o)
      o.addEventListener(r, s, i), u = () => o.removeEventListener(r, s, i);
    else {
      const d = o;
      d.addListener(s), u = () => d.removeListener(s);
    }
    return e.push(u), a;
  }
  function n() {
    e = e.filter((o) => o());
  }
  const a = {
    add: t,
    clear: n
  };
  return a;
}
function Tb(e, t, n, a) {
  const o = Fa(), r = 1e3 / 60;
  let s = null, i = 0, u = 0;
  function d() {
    o.add(e, "visibilitychange", () => {
      e.hidden && v();
    });
  }
  function c() {
    m(), o.clear();
  }
  function f(b) {
    if (!u) return;
    s || (s = b, n(), n());
    const _ = b - s;
    for (s = b, i += _; i >= r; )
      n(), i -= r;
    const $ = i / r;
    a($), u && (u = t.requestAnimationFrame(f));
  }
  function p() {
    u || (u = t.requestAnimationFrame(f));
  }
  function m() {
    t.cancelAnimationFrame(u), s = null, i = 0, u = 0;
  }
  function v() {
    s = null, i = 0;
  }
  return {
    init: d,
    destroy: c,
    start: p,
    stop: m,
    update: n,
    render: a
  };
}
function Ib(e, t) {
  const n = t === "rtl", a = e === "y", o = a ? "y" : "x", r = a ? "x" : "y", s = !a && n ? -1 : 1, i = c(), u = f();
  function d(v) {
    const {
      height: g,
      width: b
    } = v;
    return a ? g : b;
  }
  function c() {
    return a ? "top" : n ? "right" : "left";
  }
  function f() {
    return a ? "bottom" : n ? "left" : "right";
  }
  function p(v) {
    return v * s;
  }
  return {
    scroll: o,
    cross: r,
    startEdge: i,
    endEdge: u,
    measureSize: d,
    direction: p
  };
}
function bn(e = 0, t = 0) {
  const n = Fe(e - t);
  function a(d) {
    return d < e;
  }
  function o(d) {
    return d > t;
  }
  function r(d) {
    return a(d) || o(d);
  }
  function s(d) {
    return r(d) ? a(d) ? e : t : d;
  }
  function i(d) {
    return n ? d - n * Math.ceil((d - t) / n) : d;
  }
  return {
    length: n,
    max: t,
    min: e,
    constrain: s,
    reachedAny: r,
    reachedMax: o,
    reachedMin: a,
    removeOffset: i
  };
}
function oc(e, t, n) {
  const {
    constrain: a
  } = bn(0, e), o = e + 1;
  let r = s(t);
  function s(p) {
    return n ? Fe((o + p) % o) : a(p);
  }
  function i() {
    return r;
  }
  function u(p) {
    return r = s(p), f;
  }
  function d(p) {
    return c().set(i() + p);
  }
  function c() {
    return oc(e, i(), n);
  }
  const f = {
    get: i,
    set: u,
    add: d,
    clone: c
  };
  return f;
}
function Fb(e, t, n, a, o, r, s, i, u, d, c, f, p, m, v, g, b, _, $) {
  const {
    cross: S,
    direction: P
  } = e, A = ["INPUT", "SELECT", "TEXTAREA"], D = {
    passive: !1
  }, B = Fa(), I = Fa(), F = bn(50, 225).constrain(m.measure(20)), T = {
    mouse: 300,
    touch: 400
  }, L = {
    mouse: 500,
    touch: 600
  }, M = v ? 43 : 25;
  let K = !1, j = 0, G = 0, W = !1, ee = !1, Z = !1, z = !1;
  function se(J) {
    if (!$) return;
    function be(Xe) {
      (er($) || $(J, Xe)) && ut(Xe);
    }
    const Ae = t;
    B.add(Ae, "dragstart", (Xe) => Xe.preventDefault(), D).add(Ae, "touchmove", () => {
    }, D).add(Ae, "touchend", () => {
    }).add(Ae, "touchstart", be).add(Ae, "mousedown", be).add(Ae, "touchcancel", X).add(Ae, "contextmenu", X).add(Ae, "click", oe, !0);
  }
  function ie() {
    B.clear(), I.clear();
  }
  function Te() {
    const J = z ? n : t;
    I.add(J, "touchmove", U, D).add(J, "touchend", X).add(J, "mousemove", U, D).add(J, "mouseup", X);
  }
  function Me(J) {
    const be = J.nodeName || "";
    return A.includes(be);
  }
  function qe() {
    return (v ? L : T)[z ? "mouse" : "touch"];
  }
  function et(J, be) {
    const Ae = f.add(hs(J) * -1), Xe = c.byDistance(J, !v).distance;
    return v || Fe(J) < F ? Xe : b && be ? Xe * 0.5 : c.byIndex(Ae.get(), 0).distance;
  }
  function ut(J) {
    const be = cl(J, a);
    z = be, Z = v && be && !J.buttons && K, K = Ca(o.get(), s.get()) >= 2, !(be && J.button !== 0) && (Me(J.target) || (W = !0, r.pointerDown(J), d.useFriction(0).useDuration(0), o.set(s), Te(), j = r.readPoint(J), G = r.readPoint(J, S), p.emit("pointerDown")));
  }
  function U(J) {
    if (!cl(J, a) && J.touches.length >= 2) return X(J);
    const Ae = r.readPoint(J), Xe = r.readPoint(J, S), dt = Ca(Ae, j), vt = Ca(Xe, G);
    if (!ee && !z && (!J.cancelable || (ee = dt > vt, !ee)))
      return X(J);
    const ae = r.pointerMove(J);
    dt > g && (Z = !0), d.useFriction(0.3).useDuration(0.75), i.start(), o.add(P(ae)), J.preventDefault();
  }
  function X(J) {
    const Ae = c.byDistance(0, !1).index !== f.get(), Xe = r.pointerUp(J) * qe(), dt = et(P(Xe), Ae), vt = Pb(Xe, dt), ae = M - 10 * vt, Oe = _ + vt / 50;
    ee = !1, W = !1, I.clear(), d.useDuration(ae).useFriction(Oe), u.distance(dt, !v), z = !1, p.emit("pointerUp");
  }
  function oe(J) {
    Z && (J.stopPropagation(), J.preventDefault(), Z = !1);
  }
  function fe() {
    return W;
  }
  return {
    init: se,
    destroy: ie,
    pointerDown: fe
  };
}
function Mb(e, t) {
  let a, o;
  function r(f) {
    return f.timeStamp;
  }
  function s(f, p) {
    const v = `client${(p || e.scroll) === "x" ? "X" : "Y"}`;
    return (cl(f, t) ? f : f.touches[0])[v];
  }
  function i(f) {
    return a = f, o = f, s(f);
  }
  function u(f) {
    const p = s(f) - s(o), m = r(f) - r(a) > 170;
    return o = f, m && (a = f), p;
  }
  function d(f) {
    if (!a || !o) return 0;
    const p = s(o) - s(a), m = r(f) - r(a), v = r(f) - r(o) > 170, g = p / m;
    return m && !v && Fe(g) > 0.1 ? g : 0;
  }
  return {
    pointerDown: i,
    pointerMove: u,
    pointerUp: d,
    readPoint: s
  };
}
function Rb() {
  function e(n) {
    const {
      offsetTop: a,
      offsetLeft: o,
      offsetWidth: r,
      offsetHeight: s
    } = n;
    return {
      top: a,
      right: o + r,
      bottom: a + s,
      left: o,
      width: r,
      height: s
    };
  }
  return {
    measure: e
  };
}
function Lb(e) {
  function t(a) {
    return e * (a / 100);
  }
  return {
    measure: t
  };
}
function Nb(e, t, n, a, o, r, s) {
  const i = [e].concat(a);
  let u, d, c = [], f = !1;
  function p(b) {
    return o.measureSize(s.measure(b));
  }
  function m(b) {
    if (!r) return;
    d = p(e), c = a.map(p);
    function _($) {
      for (const S of $) {
        if (f) return;
        const P = S.target === e, A = a.indexOf(S.target), D = P ? d : c[A], B = p(P ? e : a[A]);
        if (Fe(B - D) >= 0.5) {
          b.reInit(), t.emit("resize");
          break;
        }
      }
    }
    u = new ResizeObserver(($) => {
      (er(r) || r(b, $)) && _($);
    }), n.requestAnimationFrame(() => {
      i.forEach(($) => u.observe($));
    });
  }
  function v() {
    f = !0, u && u.disconnect();
  }
  return {
    init: m,
    destroy: v
  };
}
function Vb(e, t, n, a, o, r) {
  let s = 0, i = 0, u = o, d = r, c = e.get(), f = 0;
  function p() {
    const D = a.get() - e.get(), B = !u;
    let I = 0;
    return B ? (s = 0, n.set(a), e.set(a), I = D) : (n.set(e), s += D / u, s *= d, c += s, e.add(s), I = c - f), i = hs(I), f = c, A;
  }
  function m() {
    const D = a.get() - t.get();
    return Fe(D) < 1e-3;
  }
  function v() {
    return u;
  }
  function g() {
    return i;
  }
  function b() {
    return s;
  }
  function _() {
    return S(o);
  }
  function $() {
    return P(r);
  }
  function S(D) {
    return u = D, A;
  }
  function P(D) {
    return d = D, A;
  }
  const A = {
    direction: g,
    duration: v,
    velocity: b,
    seek: p,
    settled: m,
    useBaseFriction: $,
    useBaseDuration: _,
    useFriction: P,
    useDuration: S
  };
  return A;
}
function qb(e, t, n, a, o) {
  const r = o.measure(10), s = o.measure(50), i = bn(0.1, 0.99);
  let u = !1;
  function d() {
    return !(u || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
  }
  function c(m) {
    if (!d()) return;
    const v = e.reachedMin(t.get()) ? "min" : "max", g = Fe(e[v] - t.get()), b = n.get() - t.get(), _ = i.constrain(g / s);
    n.subtract(b * _), !m && Fe(b) < r && (n.set(e.constrain(n.get())), a.useDuration(25).useBaseFriction());
  }
  function f(m) {
    u = !m;
  }
  return {
    shouldConstrain: d,
    constrain: c,
    toggleActive: f
  };
}
function zb(e, t, n, a, o) {
  const r = bn(-t + e, 0), s = f(), i = c(), u = p();
  function d(v, g) {
    return Ca(v, g) <= 1;
  }
  function c() {
    const v = s[0], g = bt(s), b = s.lastIndexOf(v), _ = s.indexOf(g) + 1;
    return bn(b, _);
  }
  function f() {
    return n.map((v, g) => {
      const {
        min: b,
        max: _
      } = r, $ = r.constrain(v), S = !g, P = bs(n, g);
      return S ? _ : P || d(b, $) ? b : d(_, $) ? _ : $;
    }).map((v) => parseFloat(v.toFixed(3)));
  }
  function p() {
    if (t <= e + o) return [r.max];
    if (a === "keepSnaps") return s;
    const {
      min: v,
      max: g
    } = i;
    return s.slice(v, g);
  }
  return {
    snapsContained: u,
    scrollContainLimit: i
  };
}
function jb(e, t, n) {
  const a = t[0], o = n ? a - e : bt(t);
  return {
    limit: bn(o, a)
  };
}
function Kb(e, t, n, a) {
  const r = t.min + 0.1, s = t.max + 0.1, {
    reachedMin: i,
    reachedMax: u
  } = bn(r, s);
  function d(p) {
    return p === 1 ? u(n.get()) : p === -1 ? i(n.get()) : !1;
  }
  function c(p) {
    if (!d(p)) return;
    const m = e * (p * -1);
    a.forEach((v) => v.add(m));
  }
  return {
    loop: c
  };
}
function Hb(e) {
  const {
    max: t,
    length: n
  } = e;
  function a(r) {
    const s = r - t;
    return n ? s / -n : 0;
  }
  return {
    get: a
  };
}
function Wb(e, t, n, a, o) {
  const {
    startEdge: r,
    endEdge: s
  } = e, {
    groupSlides: i
  } = o, u = f().map(t.measure), d = p(), c = m();
  function f() {
    return i(a).map((g) => bt(g)[s] - g[0][r]).map(Fe);
  }
  function p() {
    return a.map((g) => n[r] - g[r]).map((g) => -Fe(g));
  }
  function m() {
    return i(d).map((g) => g[0]).map((g, b) => g + u[b]);
  }
  return {
    snaps: d,
    snapsAligned: c
  };
}
function Ub(e, t, n, a, o, r) {
  const {
    groupSlides: s
  } = o, {
    min: i,
    max: u
  } = a, d = c();
  function c() {
    const p = s(r), m = !e || t === "keepSnaps";
    return n.length === 1 ? [r] : m ? p : p.slice(i, u).map((v, g, b) => {
      const _ = !g, $ = bs(b, g);
      if (_) {
        const S = bt(b[0]) + 1;
        return Si(S);
      }
      if ($) {
        const S = Wa(r) - bt(b)[0] + 1;
        return Si(S, bt(b)[0]);
      }
      return v;
    });
  }
  return {
    slideRegistry: d
  };
}
function Gb(e, t, n, a, o) {
  const {
    reachedAny: r,
    removeOffset: s,
    constrain: i
  } = a;
  function u(v) {
    return v.concat().sort((g, b) => Fe(g) - Fe(b))[0];
  }
  function d(v) {
    const g = e ? s(v) : i(v), b = t.map(($, S) => ({
      diff: c($ - g, 0),
      index: S
    })).sort(($, S) => Fe($.diff) - Fe(S.diff)), {
      index: _
    } = b[0];
    return {
      index: _,
      distance: g
    };
  }
  function c(v, g) {
    const b = [v, v + n, v - n];
    if (!e) return v;
    if (!g) return u(b);
    const _ = b.filter(($) => hs($) === g);
    return _.length ? u(_) : bt(b) - n;
  }
  function f(v, g) {
    const b = t[v] - o.get(), _ = c(b, g);
    return {
      index: v,
      distance: _
    };
  }
  function p(v, g) {
    const b = o.get() + v, {
      index: _,
      distance: $
    } = d(b), S = !e && r(b);
    if (!g || S) return {
      index: _,
      distance: v
    };
    const P = t[_] - $, A = v + c(P, 0);
    return {
      index: _,
      distance: A
    };
  }
  return {
    byDistance: p,
    byIndex: f,
    shortcut: c
  };
}
function Yb(e, t, n, a, o, r, s) {
  function i(f) {
    const p = f.distance, m = f.index !== t.get();
    r.add(p), p && (a.duration() ? e.start() : (e.update(), e.render(1), e.update())), m && (n.set(t.get()), t.set(f.index), s.emit("select"));
  }
  function u(f, p) {
    const m = o.byDistance(f, p);
    i(m);
  }
  function d(f, p) {
    const m = t.clone().set(f), v = o.byIndex(m.get(), p);
    i(v);
  }
  return {
    distance: u,
    index: d
  };
}
function Xb(e, t, n, a, o, r, s, i) {
  const u = {
    passive: !0,
    capture: !0
  };
  let d = 0;
  function c(m) {
    if (!i) return;
    function v(g) {
      if ((/* @__PURE__ */ new Date()).getTime() - d > 10) return;
      s.emit("slideFocusStart"), e.scrollLeft = 0;
      const $ = n.findIndex((S) => S.includes(g));
      ys($) && (o.useDuration(0), a.index($, 0), s.emit("slideFocus"));
    }
    r.add(document, "keydown", f, !1), t.forEach((g, b) => {
      r.add(g, "focus", (_) => {
        (er(i) || i(m, _)) && v(b);
      }, u);
    });
  }
  function f(m) {
    m.code === "Tab" && (d = (/* @__PURE__ */ new Date()).getTime());
  }
  return {
    init: c
  };
}
function _a(e) {
  let t = e;
  function n() {
    return t;
  }
  function a(u) {
    t = s(u);
  }
  function o(u) {
    t += s(u);
  }
  function r(u) {
    t -= s(u);
  }
  function s(u) {
    return ys(u) ? u : u.get();
  }
  return {
    get: n,
    set: a,
    add: o,
    subtract: r
  };
}
function rc(e, t) {
  const n = e.scroll === "x" ? s : i, a = t.style;
  let o = null, r = !1;
  function s(p) {
    return `translate3d(${p}px,0px,0px)`;
  }
  function i(p) {
    return `translate3d(0px,${p}px,0px)`;
  }
  function u(p) {
    if (r) return;
    const m = Db(e.direction(p));
    m !== o && (a.transform = n(m), o = m);
  }
  function d(p) {
    r = !p;
  }
  function c() {
    r || (a.transform = "", t.getAttribute("style") || t.removeAttribute("style"));
  }
  return {
    clear: c,
    to: u,
    toggleActive: d
  };
}
function Qb(e, t, n, a, o, r, s, i, u) {
  const c = Ta(o), f = Ta(o).reverse(), p = _().concat($());
  function m(B, I) {
    return B.reduce((F, T) => F - o[T], I);
  }
  function v(B, I) {
    return B.reduce((F, T) => m(F, I) > 0 ? F.concat([T]) : F, []);
  }
  function g(B) {
    return r.map((I, F) => ({
      start: I - a[F] + 0.5 + B,
      end: I + t - 0.5 + B
    }));
  }
  function b(B, I, F) {
    const T = g(I);
    return B.map((L) => {
      const M = F ? 0 : -n, K = F ? n : 0, j = F ? "end" : "start", G = T[L][j];
      return {
        index: L,
        loopPoint: G,
        slideLocation: _a(-1),
        translate: rc(e, u[L]),
        target: () => i.get() > G ? M : K
      };
    });
  }
  function _() {
    const B = s[0], I = v(f, B);
    return b(I, n, !1);
  }
  function $() {
    const B = t - s[0] - 1, I = v(c, B);
    return b(I, -n, !0);
  }
  function S() {
    return p.every(({
      index: B
    }) => {
      const I = c.filter((F) => F !== B);
      return m(I, t) <= 0.1;
    });
  }
  function P() {
    p.forEach((B) => {
      const {
        target: I,
        translate: F,
        slideLocation: T
      } = B, L = I();
      L !== T.get() && (F.to(L), T.set(L));
    });
  }
  function A() {
    p.forEach((B) => B.translate.clear());
  }
  return {
    canLoop: S,
    clear: A,
    loop: P,
    loopPoints: p
  };
}
function Jb(e, t, n) {
  let a, o = !1;
  function r(u) {
    if (!n) return;
    function d(c) {
      for (const f of c)
        if (f.type === "childList") {
          u.reInit(), t.emit("slidesChanged");
          break;
        }
    }
    a = new MutationObserver((c) => {
      o || (er(n) || n(u, c)) && d(c);
    }), a.observe(e, {
      childList: !0
    });
  }
  function s() {
    a && a.disconnect(), o = !0;
  }
  return {
    init: r,
    destroy: s
  };
}
function Zb(e, t, n, a) {
  const o = {};
  let r = null, s = null, i, u = !1;
  function d() {
    i = new IntersectionObserver((v) => {
      u || (v.forEach((g) => {
        const b = t.indexOf(g.target);
        o[b] = g;
      }), r = null, s = null, n.emit("slidesInView"));
    }, {
      root: e.parentElement,
      threshold: a
    }), t.forEach((v) => i.observe(v));
  }
  function c() {
    i && i.disconnect(), u = !0;
  }
  function f(v) {
    return Ia(o).reduce((g, b) => {
      const _ = parseInt(b), {
        isIntersecting: $
      } = o[_];
      return (v && $ || !v && !$) && g.push(_), g;
    }, []);
  }
  function p(v = !0) {
    if (v && r) return r;
    if (!v && s) return s;
    const g = f(v);
    return v && (r = g), v || (s = g), g;
  }
  return {
    init: d,
    destroy: c,
    get: p
  };
}
function ew(e, t, n, a, o, r) {
  const {
    measureSize: s,
    startEdge: i,
    endEdge: u
  } = e, d = n[0] && o, c = v(), f = g(), p = n.map(s), m = b();
  function v() {
    if (!d) return 0;
    const $ = n[0];
    return Fe(t[i] - $[i]);
  }
  function g() {
    if (!d) return 0;
    const $ = r.getComputedStyle(bt(a));
    return parseFloat($.getPropertyValue(`margin-${u}`));
  }
  function b() {
    return n.map(($, S, P) => {
      const A = !S, D = bs(P, S);
      return A ? p[S] + c : D ? p[S] + f : P[S + 1][i] - $[i];
    }).map(Fe);
  }
  return {
    slideSizes: p,
    slideSizesWithGaps: m,
    startGap: c,
    endGap: f
  };
}
function tw(e, t, n, a, o, r, s, i, u) {
  const {
    startEdge: d,
    endEdge: c,
    direction: f
  } = e, p = ys(n);
  function m(_, $) {
    return Ta(_).filter((S) => S % $ === 0).map((S) => _.slice(S, S + $));
  }
  function v(_) {
    return _.length ? Ta(_).reduce(($, S, P) => {
      const A = bt($) || 0, D = A === 0, B = S === Wa(_), I = o[d] - r[A][d], F = o[d] - r[S][c], T = !a && D ? f(s) : 0, L = !a && B ? f(i) : 0, M = Fe(F - L - (I + T));
      return P && M > t + u && $.push(S), B && $.push(_.length), $;
    }, []).map(($, S, P) => {
      const A = Math.max(P[S - 1] || 0);
      return _.slice(A, $);
    }) : [];
  }
  function g(_) {
    return p ? m(_, n) : v(_);
  }
  return {
    groupSlides: g
  };
}
function nw(e, t, n, a, o, r, s) {
  const {
    align: i,
    axis: u,
    direction: d,
    startIndex: c,
    loop: f,
    duration: p,
    dragFree: m,
    dragThreshold: v,
    inViewThreshold: g,
    slidesToScroll: b,
    skipSnaps: _,
    containScroll: $,
    watchResize: S,
    watchSlides: P,
    watchDrag: A,
    watchFocus: D
  } = r, B = 2, I = Rb(), F = I.measure(t), T = n.map(I.measure), L = Ib(u, d), M = L.measureSize(F), K = Lb(M), j = kb(i, M), G = !f && !!$, W = f || !!$, {
    slideSizes: ee,
    slideSizesWithGaps: Z,
    startGap: z,
    endGap: se
  } = ew(L, F, T, n, W, o), ie = tw(L, M, b, f, F, T, z, se, B), {
    snaps: Te,
    snapsAligned: Me
  } = Wb(L, j, F, T, ie), qe = -bt(Te) + bt(Z), {
    snapsContained: et,
    scrollContainLimit: ut
  } = zb(M, qe, Me, $, B), U = G ? et : Me, {
    limit: X
  } = jb(qe, U, f), oe = oc(Wa(U), c, f), fe = oe.clone(), ye = Ta(n), J = ({
    dragHandler: Rt,
    scrollBody: mt,
    scrollBounds: kn,
    options: {
      loop: Tn
    }
  }) => {
    Tn || kn.constrain(Rt.pointerDown()), mt.seek();
  }, be = ({
    scrollBody: Rt,
    translate: mt,
    location: kn,
    offsetLocation: Tn,
    previousLocation: Lt,
    scrollLooper: In,
    slideLooper: Za,
    dragHandler: nf,
    animation: af,
    eventHandler: ks,
    scrollBounds: of,
    options: {
      loop: Ts
    }
  }, Is) => {
    const Fs = Rt.settled(), rf = !of.shouldConstrain(), Ms = Ts ? Fs : Fs && rf, Rs = Ms && !nf.pointerDown();
    Rs && af.stop();
    const lf = kn.get() * Is + Lt.get() * (1 - Is);
    Tn.set(lf), Ts && (In.loop(Rt.direction()), Za.loop()), mt.to(Tn.get()), Rs && ks.emit("settle"), Ms || ks.emit("scroll");
  }, Ae = Tb(a, o, () => J(pn), (Rt) => be(pn, Rt)), Xe = 0.68, dt = U[oe.get()], vt = _a(dt), ae = _a(dt), Oe = _a(dt), Be = _a(dt), $e = Vb(vt, Oe, ae, Be, p, Xe), Le = Gb(f, U, qe, X, Be), ze = Yb(Ae, oe, fe, $e, Le, Be, s), tt = Hb(X), Mt = Fa(), Dn = Zb(t, n, s, g), {
    slideRegistry: fn
  } = Ub(G, $, U, ut, ie, ye), Ja = Xb(e, n, fn, ze, $e, Mt, s, D), pn = {
    ownerDocument: a,
    ownerWindow: o,
    eventHandler: s,
    containerRect: F,
    slideRects: T,
    animation: Ae,
    axis: L,
    dragHandler: Fb(L, e, a, o, Be, Mb(L, o), vt, Ae, ze, $e, Le, oe, s, K, m, v, _, Xe, A),
    eventStore: Mt,
    percentOfView: K,
    index: oe,
    indexPrevious: fe,
    limit: X,
    location: vt,
    offsetLocation: Oe,
    previousLocation: ae,
    options: r,
    resizeHandler: Nb(t, s, o, n, L, S, I),
    scrollBody: $e,
    scrollBounds: qb(X, Oe, Be, $e, K),
    scrollLooper: Kb(qe, X, Oe, [vt, Oe, ae, Be]),
    scrollProgress: tt,
    scrollSnapList: U.map(tt.get),
    scrollSnaps: U,
    scrollTarget: Le,
    scrollTo: ze,
    slideLooper: Qb(L, M, qe, ee, Z, Te, U, Oe, n),
    slideFocus: Ja,
    slidesHandler: Jb(t, s, P),
    slidesInView: Dn,
    slideIndexes: ye,
    slideRegistry: fn,
    slidesToScroll: ie,
    target: Be,
    translate: rc(L, t)
  };
  return pn;
}
function aw() {
  let e = {}, t;
  function n(d) {
    t = d;
  }
  function a(d) {
    return e[d] || [];
  }
  function o(d) {
    return a(d).forEach((c) => c(t, d)), u;
  }
  function r(d, c) {
    return e[d] = a(d).concat([c]), u;
  }
  function s(d, c) {
    return e[d] = a(d).filter((f) => f !== c), u;
  }
  function i() {
    e = {};
  }
  const u = {
    init: n,
    emit: o,
    off: s,
    on: r,
    clear: i
  };
  return u;
}
const ow = {
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
function rw(e) {
  function t(r, s) {
    return ac(r, s || {});
  }
  function n(r) {
    const s = r.breakpoints || {}, i = Ia(s).filter((u) => e.matchMedia(u).matches).map((u) => s[u]).reduce((u, d) => t(u, d), {});
    return t(r, i);
  }
  function a(r) {
    return r.map((s) => Ia(s.breakpoints || {})).reduce((s, i) => s.concat(i), []).map(e.matchMedia);
  }
  return {
    mergeOptions: t,
    optionsAtMedia: n,
    optionsMediaQueries: a
  };
}
function lw(e) {
  let t = [];
  function n(r, s) {
    return t = s.filter(({
      options: i
    }) => e.optionsAtMedia(i).active !== !1), t.forEach((i) => i.init(r, e)), s.reduce((i, u) => Object.assign(i, {
      [u.name]: u
    }), {});
  }
  function a() {
    t = t.filter((r) => r.destroy());
  }
  return {
    init: n,
    destroy: a
  };
}
function Bo(e, t, n) {
  const a = e.ownerDocument, o = a.defaultView, r = rw(o), s = lw(r), i = Fa(), u = aw(), {
    mergeOptions: d,
    optionsAtMedia: c,
    optionsMediaQueries: f
  } = r, {
    on: p,
    off: m,
    emit: v
  } = u, g = L;
  let b = !1, _, $ = d(ow, Bo.globalOptions), S = d($), P = [], A, D, B;
  function I() {
    const {
      container: ye,
      slides: J
    } = S;
    D = (dl(ye) ? e.querySelector(ye) : ye) || e.children[0];
    const Ae = dl(J) ? D.querySelectorAll(J) : J;
    B = [].slice.call(Ae || D.children);
  }
  function F(ye) {
    const J = nw(e, D, B, a, o, ye, u);
    if (ye.loop && !J.slideLooper.canLoop()) {
      const be = Object.assign({}, ye, {
        loop: !1
      });
      return F(be);
    }
    return J;
  }
  function T(ye, J) {
    b || ($ = d($, ye), S = c($), P = J || P, I(), _ = F(S), f([$, ...P.map(({
      options: be
    }) => be)]).forEach((be) => i.add(be, "change", L)), S.active && (_.translate.to(_.location.get()), _.animation.init(), _.slidesInView.init(), _.slideFocus.init(fe), _.eventHandler.init(fe), _.resizeHandler.init(fe), _.slidesHandler.init(fe), _.options.loop && _.slideLooper.loop(), D.offsetParent && B.length && _.dragHandler.init(fe), A = s.init(fe, P)));
  }
  function L(ye, J) {
    const be = ie();
    M(), T(d({
      startIndex: be
    }, ye), J), u.emit("reInit");
  }
  function M() {
    _.dragHandler.destroy(), _.eventStore.clear(), _.translate.clear(), _.slideLooper.clear(), _.resizeHandler.destroy(), _.slidesHandler.destroy(), _.slidesInView.destroy(), _.animation.destroy(), s.destroy(), i.clear();
  }
  function K() {
    b || (b = !0, i.clear(), M(), u.emit("destroy"), u.clear());
  }
  function j(ye, J, be) {
    !S.active || b || (_.scrollBody.useBaseFriction().useDuration(J === !0 ? 0 : S.duration), _.scrollTo.index(ye, be || 0));
  }
  function G(ye) {
    const J = _.index.add(1).get();
    j(J, ye, -1);
  }
  function W(ye) {
    const J = _.index.add(-1).get();
    j(J, ye, 1);
  }
  function ee() {
    return _.index.add(1).get() !== ie();
  }
  function Z() {
    return _.index.add(-1).get() !== ie();
  }
  function z() {
    return _.scrollSnapList;
  }
  function se() {
    return _.scrollProgress.get(_.offsetLocation.get());
  }
  function ie() {
    return _.index.get();
  }
  function Te() {
    return _.indexPrevious.get();
  }
  function Me() {
    return _.slidesInView.get();
  }
  function qe() {
    return _.slidesInView.get(!1);
  }
  function et() {
    return A;
  }
  function ut() {
    return _;
  }
  function U() {
    return e;
  }
  function X() {
    return D;
  }
  function oe() {
    return B;
  }
  const fe = {
    canScrollNext: ee,
    canScrollPrev: Z,
    containerNode: X,
    internalEngine: ut,
    destroy: K,
    off: m,
    on: p,
    emit: v,
    plugins: et,
    previousScrollSnap: Te,
    reInit: g,
    rootNode: U,
    scrollNext: G,
    scrollPrev: W,
    scrollProgress: se,
    scrollSnapList: z,
    scrollTo: j,
    selectedScrollSnap: ie,
    slideNodes: oe,
    slidesInView: Me,
    slidesNotInView: qe
  };
  return T(t, n), setTimeout(() => u.emit("init"), 0), fe;
}
Bo.globalOptions = void 0;
function ws(e = {}, t = []) {
  const n = ct(e), a = ct(t);
  let o = n ? e.value : e, r = a ? t.value : t;
  const s = Un(), i = Un();
  function u() {
    i.value && i.value.reInit(o, r);
  }
  return ue(() => {
    !Ab() || !s.value || (Bo.globalOptions = ws.globalOptions, i.value = Bo(s.value, o, r));
  }), ta(() => {
    i.value && i.value.destroy();
  }), n && te(e, (d) => {
    gs(o, d) || (o = d, u());
  }), a && te(t, (d) => {
    Bb(r, d) || (r = d, u());
  }), [s, i];
}
ws.globalOptions = void 0;
const [sw, iw] = hb(
  ({ opts: e, orientation: t, plugins: n }, a) => {
    const [o, r] = ws(
      {
        ...e,
        axis: t === "horizontal" ? "x" : "y"
      },
      n
    );
    function s() {
      var f;
      (f = r.value) == null || f.scrollPrev();
    }
    function i() {
      var f;
      (f = r.value) == null || f.scrollNext();
    }
    const u = E(!1), d = E(!1);
    function c(f) {
      u.value = (f == null ? void 0 : f.canScrollNext()) || !1, d.value = (f == null ? void 0 : f.canScrollPrev()) || !1;
    }
    return ue(() => {
      var f, p, m;
      r.value && ((f = r.value) == null || f.on("init", c), (p = r.value) == null || p.on("reInit", c), (m = r.value) == null || m.on("select", c), a("init-api", r.value));
    }), {
      carouselRef: o,
      carouselApi: r,
      canScrollPrev: d,
      canScrollNext: u,
      scrollPrev: s,
      scrollNext: i,
      orientation: t
    };
  }
);
function tr() {
  const e = iw();
  if (!e) throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const D$ = /* @__PURE__ */ w({
  __name: "Carousel",
  props: {
    opts: {},
    plugins: {},
    orientation: { default: "horizontal" },
    class: {}
  },
  emits: ["init-api"],
  setup(e, { expose: t, emit: n }) {
    const a = e, o = n, {
      canScrollNext: r,
      canScrollPrev: s,
      carouselApi: i,
      carouselRef: u,
      orientation: d,
      scrollNext: c,
      scrollPrev: f
    } = sw(a, o);
    t({
      canScrollNext: r,
      canScrollPrev: s,
      carouselApi: i,
      carouselRef: u,
      orientation: d,
      scrollNext: c,
      scrollPrev: f
    });
    function p(m) {
      const v = a.orientation === "vertical" ? "ArrowUp" : "ArrowLeft", g = a.orientation === "vertical" ? "ArrowDown" : "ArrowRight";
      if (m.key === v) {
        m.preventDefault(), f();
        return;
      }
      m.key === g && (m.preventDefault(), c());
    }
    return (m, v) => (y(), q("div", {
      class: le(l(N)("relative", a.class)),
      role: "region",
      "aria-roledescription": "carousel",
      tabindex: "0",
      onKeydown: p
    }, [
      x(m.$slots, "default", {
        canScrollNext: l(r),
        canScrollPrev: l(s),
        carouselApi: l(i),
        carouselRef: l(u),
        orientation: l(d),
        scrollNext: l(c),
        scrollPrev: l(f)
      })
    ], 34));
  }
}), k$ = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "CarouselContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { carouselRef: n, orientation: a } = tr();
    return (o, r) => (y(), q("div", {
      ref_key: "carouselRef",
      ref: n,
      class: "overflow-hidden"
    }, [
      H("div", k({
        class: l(N)("flex", l(a) === "horizontal" ? "-ml-4" : "-mt-4 flex-col", t.class)
      }, o.$attrs), [
        x(o.$slots, "default")
      ], 16)
    ], 512));
  }
}), T$ = /* @__PURE__ */ w({
  __name: "CarouselItem",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { orientation: n } = tr();
    return (a, o) => (y(), q("div", {
      role: "group",
      "aria-roledescription": "slide",
      class: le(
        l(N)(
          "min-w-0 shrink-0 grow-0 basis-full",
          l(n) === "horizontal" ? "pl-4" : "pt-4",
          t.class
        )
      )
    }, [
      x(a.$slots, "default")
    ], 2));
  }
}), I$ = /* @__PURE__ */ w({
  __name: "CarouselPrevious",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { orientation: n, canScrollPrev: a, scrollPrev: o } = tr();
    return (r, s) => (y(), C(l(vs), {
      disabled: !l(a),
      class: le(
        l(N)(
          "touch-manipulation absolute size-8 rounded-full p-0",
          l(n) === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          t.class
        )
      ),
      variant: "outline",
      onClick: l(o)
    }, {
      default: h(() => [
        x(r.$slots, "default", {}, () => [
          R(l(K0), { class: "size-4 text-current" }),
          s[0] || (s[0] = H("span", { class: "sr-only" }, "Previous Slide", -1))
        ])
      ]),
      _: 3
    }, 8, ["disabled", "class", "onClick"]));
  }
}), F$ = /* @__PURE__ */ w({
  __name: "CarouselNext",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { orientation: n, canScrollNext: a, scrollNext: o } = tr();
    return (r, s) => (y(), C(l(vs), {
      disabled: !l(a),
      class: le(
        l(N)(
          "touch-manipulation absolute size-8 rounded-full p-0",
          l(n) === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          t.class
        )
      ),
      variant: "outline",
      onClick: l(o)
    }, {
      default: h(() => [
        x(r.$slots, "default", {}, () => [
          R(l(H0), { class: "size-4 text-current" }),
          s[0] || (s[0] = H("span", { class: "sr-only" }, "Next Slide", -1))
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
const uw = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var so = {
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
const dw = ({ size: e, strokeWidth: t = 2, absoluteStrokeWidth: n, color: a, iconNode: o, name: r, class: s, ...i }, { slots: u }) => Je(
  "svg",
  {
    ...so,
    width: e || so.width,
    height: e || so.height,
    stroke: a || so.stroke,
    "stroke-width": n ? Number(t) * 24 / Number(e) : t,
    class: ["lucide", `lucide-${uw(r ?? "icon")}`],
    ...i
  },
  [...o.map((d) => Je(...d)), ...u.default ? [u.default()] : []]
);
/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yt = (e, t) => (n, { slots: a }) => Je(
  dw,
  {
    ...n,
    iconNode: t,
    name: e
  },
  a
);
/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cw = Yt("CheckIcon", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fw = Yt("ChevronDownIcon", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lc = Yt("ChevronLeftIcon", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sc = Yt("ChevronRightIcon", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pw = Yt("ChevronUpIcon", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]);
/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vw = Yt("ChevronsUpDownIcon", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]);
/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mw = Yt("EllipsisIcon", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
]);
/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gw = Yt("PlusIcon", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yw = Yt("XIcon", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function $i(e) {
  return typeof e == "string" ? `'${e}'` : new hw().serialize(e);
}
const hw = /* @__PURE__ */ function() {
  var t;
  class e {
    constructor() {
      Ns(this, t, /* @__PURE__ */ new Map());
    }
    compare(a, o) {
      const r = typeof a, s = typeof o;
      return r === "string" && s === "string" ? a.localeCompare(o) : r === "number" && s === "number" ? a - o : String.prototype.localeCompare.call(this.serialize(a, !0), this.serialize(o, !0));
    }
    serialize(a, o) {
      if (a === null) return "null";
      switch (typeof a) {
        case "string":
          return o ? a : `'${a}'`;
        case "bigint":
          return `${a}n`;
        case "object":
          return this.$object(a);
        case "function":
          return this.$function(a);
      }
      return String(a);
    }
    serializeObject(a) {
      const o = Object.prototype.toString.call(a);
      if (o !== "[object Object]") return this.serializeBuiltInType(o.length < 10 ? `unknown:${o}` : o.slice(8, -1), a);
      const r = a.constructor, s = r === Object || r === void 0 ? "" : r.name;
      if (s !== "" && globalThis[s] === r) return this.serializeBuiltInType(s, a);
      if (typeof a.toJSON == "function") {
        const i = a.toJSON();
        return s + (i !== null && typeof i == "object" ? this.$object(i) : `(${this.serialize(i)})`);
      }
      return this.serializeObjectEntries(s, Object.entries(a));
    }
    serializeBuiltInType(a, o) {
      const r = this["$" + a];
      if (r) return r.call(this, o);
      if (typeof (o == null ? void 0 : o.entries) == "function") return this.serializeObjectEntries(a, o.entries());
      throw new Error(`Cannot serialize ${a}`);
    }
    serializeObjectEntries(a, o) {
      const r = Array.from(o).sort((i, u) => this.compare(i[0], u[0]));
      let s = `${a}{`;
      for (let i = 0; i < r.length; i++) {
        const [u, d] = r[i];
        s += `${this.serialize(u, !0)}:${this.serialize(d)}`, i < r.length - 1 && (s += ",");
      }
      return s + "}";
    }
    $object(a) {
      let o = ga(this, t).get(a);
      return o === void 0 && (ga(this, t).set(a, `#${ga(this, t).size}`), o = this.serializeObject(a), ga(this, t).set(a, o)), o;
    }
    $function(a) {
      const o = Function.prototype.toString.call(a);
      return o.slice(-15) === "[native code] }" ? `${a.name || ""}()[native]` : `${a.name}(${a.length})${o.replace(/\s*\n\s*/g, "")}`;
    }
    $Array(a) {
      let o = "[";
      for (let r = 0; r < a.length; r++) o += this.serialize(a[r]), r < a.length - 1 && (o += ",");
      return o + "]";
    }
    $Date(a) {
      try {
        return `Date(${a.toISOString()})`;
      } catch {
        return "Date(null)";
      }
    }
    $ArrayBuffer(a) {
      return `ArrayBuffer[${new Uint8Array(a).join(",")}]`;
    }
    $Set(a) {
      return `Set${this.$Array(Array.from(a).sort((o, r) => this.compare(o, r)))}`;
    }
    $Map(a) {
      return this.serializeObjectEntries("Map", a.entries());
    }
  }
  t = new WeakMap();
  for (const n of ["Error", "RegExp", "URL"]) e.prototype["$" + n] = function(a) {
    return `${n}(${a})`;
  };
  for (const n of ["Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array"]) e.prototype["$" + n] = function(a) {
    return `${n}[${a.join(",")}]`;
  };
  for (const n of ["BigInt64Array", "BigUint64Array"]) e.prototype["$" + n] = function(a) {
    return `${n}[${a.join("n,")}${a.length > 0 ? "n" : ""}]`;
  };
  return e;
}();
function Jn(e, t) {
  return e === t || $i(e) === $i(t);
}
function bw(e, t, n) {
  const a = e.findIndex((i) => Jn(i, t)), o = e.findIndex((i) => Jn(i, n));
  if (a === -1 || o === -1) return [];
  const [r, s] = [a, o].sort((i, u) => i - u);
  return e.slice(r, s + 1);
}
function Ze(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, a = Symbol(n);
  return [(s) => {
    const i = na(a, s);
    if (i || i === null) return i;
    throw new Error(`Injection \`${a.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(", ")}` : `\`${e}\``}`);
  }, (s) => (aa(a, s), s)];
}
function wt() {
  let e = document.activeElement;
  if (e == null) return null;
  for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null; ) e = e.shadowRoot.activeElement;
  return e;
}
function _s(e, t, n) {
  const a = n.originalEvent.target, o = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && a.addEventListener(e, t, { once: !0 }), a.dispatchEvent(o);
}
function fl(e) {
  return e == null;
}
function Oi(e, t) {
  return fl(e) ? !1 : Array.isArray(e) ? e.some((n) => Jn(n, t)) : Jn(e, t);
}
function xs(e) {
  return e ? e.flatMap((t) => t.type === Ee ? xs(t.children) : [t]) : [];
}
const [nr] = Ze("ConfigProvider");
function ww(e, t) {
  var n;
  const a = Un();
  return Se(() => {
    a.value = e();
  }, {
    ...t,
    flush: (n = void 0) != null ? n : "sync"
  }), Mo(a);
}
function ar(e) {
  return Cl() ? (Sl(e), !0) : !1;
}
function bo() {
  const e = /* @__PURE__ */ new Set(), t = (r) => {
    e.delete(r);
  };
  return {
    on: (r) => {
      e.add(r);
      const s = () => t(r);
      return ar(s), {
        off: s
      };
    },
    off: t,
    trigger: (...r) => Promise.all(Array.from(e).map((s) => s(...r))),
    clear: () => {
      e.clear();
    }
  };
}
function _w(e) {
  let t = !1, n;
  const a = Ro(!0);
  return (...o) => (t || (n = a.run(() => e(...o)), t = !0), n);
}
function xw(e) {
  let t = 0, n, a;
  const o = () => {
    t -= 1, a && t <= 0 && (a.stop(), n = void 0, a = void 0);
  };
  return (...r) => (t += 1, a || (a = Ro(!0), n = a.run(() => e(...r))), ar(o), n);
}
const En = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Cw = (e) => typeof e < "u", Sw = Object.prototype.toString, $w = (e) => Sw.call(e) === "[object Object]", Ei = /* @__PURE__ */ Ow();
function Ow() {
  var e, t;
  return En && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function Ew(e) {
  return Qe();
}
function Sr(e) {
  return Array.isArray(e) ? e : [e];
}
function ic(e, t = 1e4) {
  return yu((n, a) => {
    let o = ot(e), r;
    const s = () => setTimeout(() => {
      o = ot(e), a();
    }, ot(t));
    return ar(() => {
      clearTimeout(r);
    }), {
      get() {
        return n(), o;
      },
      set(i) {
        o = i, a(), clearTimeout(r), r = s();
      }
    };
  });
}
const Aw = ot;
function Bw(e, t) {
  Ew() && ta(e, t);
}
function Pw(e, t, n) {
  return te(
    e,
    t,
    {
      ...n,
      immediate: !0
    }
  );
}
const Cs = En ? window : void 0;
function An(e) {
  var t;
  const n = ot(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
function Ss(...e) {
  const t = [], n = () => {
    t.forEach((i) => i()), t.length = 0;
  }, a = (i, u, d, c) => (i.addEventListener(u, d, c), () => i.removeEventListener(u, d, c)), o = O(() => {
    const i = Sr(ot(e[0])).filter((u) => u != null);
    return i.every((u) => typeof u != "string") ? i : void 0;
  }), r = Pw(
    () => {
      var i, u;
      return [
        (u = (i = o.value) == null ? void 0 : i.map((d) => An(d))) != null ? u : [Cs].filter((d) => d != null),
        Sr(ot(o.value ? e[1] : e[0])),
        Sr(l(o.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        ot(o.value ? e[3] : e[2])
      ];
    },
    ([i, u, d, c]) => {
      if (n(), !(i != null && i.length) || !(u != null && u.length) || !(d != null && d.length))
        return;
      const f = $w(c) ? { ...c } : c;
      t.push(
        ...i.flatMap(
          (p) => u.flatMap(
            (m) => d.map((v) => a(p, m, v, f))
          )
        )
      );
    },
    { flush: "post" }
  ), s = () => {
    r(), n();
  };
  return ar(n), s;
}
function Dw() {
  const e = Un(!1), t = Qe();
  return t && ue(() => {
    e.value = !0;
  }, t), e;
}
function kw(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function Tw(...e) {
  let t, n, a = {};
  e.length === 3 ? (t = e[0], n = e[1], a = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], a = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: o = Cs,
    eventName: r = "keydown",
    passive: s = !1,
    dedupe: i = !1
  } = a, u = kw(t);
  return Ss(o, r, (c) => {
    c.repeat && ot(i) || u(c) && n(c);
  }, s);
}
function Iw(e) {
  return JSON.parse(JSON.stringify(e));
}
function Gt(e, t, n, a = {}) {
  var o, r, s;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: c = !1,
    defaultValue: f,
    shouldEmit: p
  } = a, m = Qe(), v = n || (m == null ? void 0 : m.emit) || ((o = m == null ? void 0 : m.$emit) == null ? void 0 : o.bind(m)) || ((s = (r = m == null ? void 0 : m.proxy) == null ? void 0 : r.$emit) == null ? void 0 : s.bind(m == null ? void 0 : m.proxy));
  let g = d;
  t || (t = "modelValue"), g = g || `update:${t.toString()}`;
  const b = (S) => i ? typeof i == "function" ? i(S) : Iw(S) : S, _ = () => Cw(e[t]) ? b(e[t]) : f, $ = (S) => {
    p ? p(S) && v(g, S) : v(g, S);
  };
  if (u) {
    const S = _(), P = E(S);
    let A = !1;
    return te(
      () => e[t],
      (D) => {
        A || (A = !0, P.value = b(D), re(() => A = !1));
      }
    ), te(
      P,
      (D) => {
        !A && (D !== e[t] || c) && $(D);
      },
      { deep: c }
    ), P;
  } else
    return O({
      get() {
        return _();
      },
      set(S) {
        $(S);
      }
    });
}
function $r(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function pl(e, t, n = ".", a) {
  if (!$r(t))
    return pl(e, {}, n, a);
  const o = Object.assign({}, t);
  for (const r in e) {
    if (r === "__proto__" || r === "constructor")
      continue;
    const s = e[r];
    s != null && (a && a(o, r, s, n) || (Array.isArray(s) && Array.isArray(o[r]) ? o[r] = [...s, ...o[r]] : $r(s) && $r(o[r]) ? o[r] = pl(
      s,
      o[r],
      (n ? `${n}.` : "") + r.toString(),
      a
    ) : o[r] = s));
  }
  return o;
}
function Fw(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, a) => pl(n, a, "", e), {})
  );
}
const Mw = Fw(), Rw = xw(() => {
  const e = E(/* @__PURE__ */ new Map()), t = E(), n = O(() => {
    for (const s of e.value.values()) if (s) return !0;
    return !1;
  }), a = nr({ scrollBody: E(!0) });
  let o = null;
  const r = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.documentElement.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", Ei && (o == null || o()), t.value = void 0;
  };
  return te(n, (s, i) => {
    var f;
    if (!En) return;
    if (!s) {
      i && r();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const u = window.innerWidth - document.documentElement.clientWidth, d = {
      padding: u,
      margin: 0
    }, c = (f = a.scrollBody) != null && f.value ? typeof a.scrollBody.value == "object" ? Mw({
      padding: a.scrollBody.value.padding === !0 ? u : a.scrollBody.value.padding,
      margin: a.scrollBody.value.margin === !0 ? u : a.scrollBody.value.margin
    }, d) : d : {
      padding: 0,
      margin: 0
    };
    u > 0 && (document.body.style.paddingRight = typeof c.padding == "number" ? `${c.padding}px` : String(c.padding), document.body.style.marginRight = typeof c.margin == "number" ? `${c.margin}px` : String(c.margin), document.documentElement.style.setProperty("--scrollbar-width", `${u}px`), document.body.style.overflow = "hidden"), Ei && (o = Ss(document, "touchmove", (p) => Lw(p), { passive: !1 })), re(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, {
    immediate: !0,
    flush: "sync"
  }), e;
});
function uc(e) {
  const t = Math.random().toString(36).substring(2, 7), n = Rw();
  n.value.set(t, e ?? !1);
  const a = O({
    get: () => n.value.get(t) ?? !1,
    set: (o) => n.value.set(t, o)
  });
  return Bw(() => {
    n.value.delete(t);
  }), a;
}
function dc(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight) return !0;
  {
    const n = e.parentNode;
    return !(n instanceof Element) || n.tagName === "BODY" ? !1 : dc(n);
  }
}
function Lw(e) {
  const t = e || window.event, n = t.target;
  return n instanceof Element && dc(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
function cc(e) {
  const t = nr({ dir: E("ltr") });
  return O(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.dir) == null ? void 0 : n.value) || "ltr";
  });
}
function or(e) {
  const t = Qe(), n = t == null ? void 0 : t.type.emits, a = {};
  return n != null && n.length || console.warn(`No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`), n == null || n.forEach((o) => {
    a[pu(Fo(o))] = (...r) => e(o, ...r);
  }), a;
}
function Nw(e) {
  const t = O(() => l(e)), n = O(() => new Intl.Collator("en", {
    usage: "search",
    ...t.value
  }));
  return {
    startsWith: (s, i) => i.length === 0 ? !0 : (s = s.normalize("NFC"), i = i.normalize("NFC"), n.value.compare(s.slice(0, i.length), i) === 0),
    endsWith: (s, i) => i.length === 0 ? !0 : (s = s.normalize("NFC"), i = i.normalize("NFC"), n.value.compare(s.slice(-i.length), i) === 0),
    contains: (s, i) => {
      if (i.length === 0) return !0;
      s = s.normalize("NFC"), i = i.normalize("NFC");
      let u = 0;
      const d = i.length;
      for (; u + d <= s.length; u++) {
        const c = s.slice(u, u + d);
        if (n.value.compare(i, c) === 0) return !0;
      }
      return !1;
    }
  };
}
function fc(e) {
  return O(() => {
    var t;
    return Aw(e) ? !!((t = An(e)) != null && t.closest("form")) : !0;
  });
}
function xe() {
  const e = Qe(), t = E(), n = O(() => {
    var s, i;
    return ["#text", "#comment"].includes((s = t.value) == null ? void 0 : s.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : An(t);
  }), a = Object.assign({}, e.exposed), o = {};
  for (const s in e.props) Object.defineProperty(o, s, {
    enumerable: !0,
    configurable: !0,
    get: () => e.props[s]
  });
  if (Object.keys(a).length > 0) for (const s in a) Object.defineProperty(o, s, {
    enumerable: !0,
    configurable: !0,
    get: () => a[s]
  });
  Object.defineProperty(o, "$el", {
    enumerable: !0,
    configurable: !0,
    get: () => e.vnode.el
  }), e.exposed = o;
  function r(s) {
    t.value = s, s && (Object.defineProperty(o, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => s instanceof Element ? s : s.$el
    }), e.exposed = o);
  }
  return {
    forwardRef: r,
    currentRef: t,
    currentElement: n
  };
}
function Bn(e) {
  const t = Qe(), n = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((o, r) => {
    const s = (t == null ? void 0 : t.type.props[r]).default;
    return s !== void 0 && (o[r] = s), o;
  }, {}), a = du(e);
  return O(() => {
    const o = {}, r = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(r).forEach((s) => {
      o[Fo(s)] = r[s];
    }), Object.keys({
      ...n,
      ...o
    }).reduce((s, i) => (a.value[i] !== void 0 && (s[i] = a.value[i]), s), {});
  });
}
function It(e, t) {
  const n = Bn(e), a = t ? or(t) : {};
  return O(() => ({
    ...n.value,
    ...a
  }));
}
var Vw = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Rn = /* @__PURE__ */ new WeakMap(), io = /* @__PURE__ */ new WeakMap(), uo = {}, Or = 0, pc = function(e) {
  return e && (e.host || pc(e.parentNode));
}, qw = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var a = pc(n);
    return a && e.contains(a) ? a : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, zw = function(e, t, n, a) {
  var o = qw(t, Array.isArray(e) ? e : [e]);
  uo[n] || (uo[n] = /* @__PURE__ */ new WeakMap());
  var r = uo[n], s = [], i = /* @__PURE__ */ new Set(), u = new Set(o), d = function(f) {
    !f || i.has(f) || (i.add(f), d(f.parentNode));
  };
  o.forEach(d);
  var c = function(f) {
    !f || u.has(f) || Array.prototype.forEach.call(f.children, function(p) {
      if (i.has(p))
        c(p);
      else
        try {
          var m = p.getAttribute(a), v = m !== null && m !== "false", g = (Rn.get(p) || 0) + 1, b = (r.get(p) || 0) + 1;
          Rn.set(p, g), r.set(p, b), s.push(p), g === 1 && v && io.set(p, !0), b === 1 && p.setAttribute(n, "true"), v || p.setAttribute(a, "true");
        } catch (_) {
          console.error("aria-hidden: cannot operate on ", p, _);
        }
    });
  };
  return c(t), i.clear(), Or++, function() {
    s.forEach(function(f) {
      var p = Rn.get(f) - 1, m = r.get(f) - 1;
      Rn.set(f, p), r.set(f, m), p || (io.has(f) || f.removeAttribute(a), io.delete(f)), m || f.removeAttribute(n);
    }), Or--, Or || (Rn = /* @__PURE__ */ new WeakMap(), Rn = /* @__PURE__ */ new WeakMap(), io = /* @__PURE__ */ new WeakMap(), uo = {});
  };
}, jw = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var a = Array.from(Array.isArray(e) ? e : [e]), o = Vw(e);
  return o ? (a.push.apply(a, Array.from(o.querySelectorAll("[aria-live], script"))), zw(a, o, n, "aria-hidden")) : function() {
    return null;
  };
};
function vc(e) {
  let t;
  te(() => An(e), (n) => {
    n ? t = jw(n) : t && t();
  }), Ge(() => {
    t && t();
  });
}
let Kw = 0;
function Ct(e, t = "reka") {
  var a;
  if ("useId" in zn) return `${t}-${(a = zn.useId) == null ? void 0 : a.call(zn)}`;
  const n = nr({ useId: void 0 });
  return n.useId ? `${t}-${n.useId()}` : `${t}-${++Kw}`;
}
function Hw() {
  return {
    ALT: "Alt",
    ARROW_DOWN: "ArrowDown",
    ARROW_LEFT: "ArrowLeft",
    ARROW_RIGHT: "ArrowRight",
    ARROW_UP: "ArrowUp",
    BACKSPACE: "Backspace",
    CAPS_LOCK: "CapsLock",
    CONTROL: "Control",
    DELETE: "Delete",
    END: "End",
    ENTER: "Enter",
    ESCAPE: "Escape",
    F1: "F1",
    F10: "F10",
    F11: "F11",
    F12: "F12",
    F2: "F2",
    F3: "F3",
    F4: "F4",
    F5: "F5",
    F6: "F6",
    F7: "F7",
    F8: "F8",
    F9: "F9",
    HOME: "Home",
    META: "Meta",
    PAGE_DOWN: "PageDown",
    PAGE_UP: "PageUp",
    SHIFT: "Shift",
    SPACE: " ",
    TAB: "Tab",
    CTRL: "Control",
    ASTERISK: "*",
    SPACE_CODE: "Space"
  };
}
function Ww(e) {
  const t = E(), n = O(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.width) ?? 0;
  }), a = O(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.height) ?? 0;
  });
  return ue(() => {
    const o = An(e);
    if (o) {
      t.value = {
        width: o.offsetWidth,
        height: o.offsetHeight
      };
      const r = new ResizeObserver((s) => {
        if (!Array.isArray(s) || !s.length) return;
        const i = s[0];
        let u, d;
        if ("borderBoxSize" in i) {
          const c = i.borderBoxSize, f = Array.isArray(c) ? c[0] : c;
          u = f.inlineSize, d = f.blockSize;
        } else
          u = o.offsetWidth, d = o.offsetHeight;
        t.value = {
          width: u,
          height: d
        };
      });
      return r.observe(o, { box: "border-box" }), () => r.unobserve(o);
    } else t.value = void 0;
  }), {
    width: n,
    height: a
  };
}
function Uw(e, t) {
  const n = E(e);
  function a(r) {
    return t[n.value][r] ?? n.value;
  }
  return {
    state: n,
    dispatch: (r) => {
      n.value = a(r);
    }
  };
}
function Gw(e) {
  const t = ic("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (o, r) => {
      t.value = t.value + o;
      {
        const s = wt(), i = r.map((p) => {
          var m, v;
          return {
            ...p,
            textValue: ((m = p.value) == null ? void 0 : m.textValue) ?? ((v = p.ref.textContent) == null ? void 0 : v.trim()) ?? ""
          };
        }), u = i.find((p) => p.ref === s), d = i.map((p) => p.textValue), c = Xw(d, t.value, u == null ? void 0 : u.textValue), f = i.find((p) => p.textValue === c);
        return f && f.ref.focus(), f == null ? void 0 : f.ref;
      }
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function Yw(e, t) {
  return e.map((n, a) => e[(t + a) % e.length]);
}
function Xw(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, r = n ? e.indexOf(n) : -1;
  let s = Yw(e, Math.max(r, 0));
  o.length === 1 && (s = s.filter((d) => d !== n));
  const u = s.find((d) => d.toLowerCase().startsWith(o.toLowerCase()));
  return u !== n ? u : void 0;
}
function Qw(e, t) {
  var b;
  const n = E({}), a = E("none"), o = E(e), r = e.value ? "mounted" : "unmounted";
  let s;
  const i = ((b = t.value) == null ? void 0 : b.ownerDocument.defaultView) ?? Cs, { state: u, dispatch: d } = Uw(r, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: { MOUNT: "mounted" }
  }), c = (_) => {
    var $;
    if (En) {
      const S = new CustomEvent(_, {
        bubbles: !1,
        cancelable: !1
      });
      ($ = t.value) == null || $.dispatchEvent(S);
    }
  };
  te(e, async (_, $) => {
    var P;
    const S = $ !== _;
    if (await re(), S) {
      const A = a.value, D = co(t.value);
      _ ? (d("MOUNT"), c("enter"), D === "none" && c("after-enter")) : D === "none" || D === "undefined" || ((P = n.value) == null ? void 0 : P.display) === "none" ? (d("UNMOUNT"), c("leave"), c("after-leave")) : $ && A !== D ? (d("ANIMATION_OUT"), c("leave")) : (d("UNMOUNT"), c("after-leave"));
    }
  }, { immediate: !0 });
  const f = (_) => {
    const $ = co(t.value), S = $.includes(CSS.escape(_.animationName)), P = u.value === "mounted" ? "enter" : "leave";
    if (_.target === t.value && S && (c(`after-${P}`), d("ANIMATION_END"), !o.value)) {
      const A = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", s = i == null ? void 0 : i.setTimeout(() => {
        var D;
        ((D = t.value) == null ? void 0 : D.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = A);
      });
    }
    _.target === t.value && $ === "none" && d("ANIMATION_END");
  }, p = (_) => {
    _.target === t.value && (a.value = co(t.value));
  }, m = te(t, (_, $) => {
    _ ? (n.value = getComputedStyle(_), _.addEventListener("animationstart", p), _.addEventListener("animationcancel", f), _.addEventListener("animationend", f)) : (d("ANIMATION_END"), s !== void 0 && (i == null || i.clearTimeout(s)), $ == null || $.removeEventListener("animationstart", p), $ == null || $.removeEventListener("animationcancel", f), $ == null || $.removeEventListener("animationend", f));
  }, { immediate: !0 }), v = te(u, () => {
    const _ = co(t.value);
    a.value = u.value === "mounted" ? _ : "none";
  });
  return Ge(() => {
    m(), v();
  }), { isPresent: O(() => ["mounted", "unmountSuspended"].includes(u.value)) };
}
function co(e) {
  return e && getComputedStyle(e).animationName || "none";
}
var Ua = w({
  name: "Presence",
  props: {
    present: {
      type: Boolean,
      required: !0
    },
    forceMount: { type: Boolean }
  },
  slots: {},
  setup(e, { slots: t, expose: n }) {
    var d;
    const { present: a, forceMount: o } = Ce(e), r = E(), { isPresent: s } = Qw(a, r);
    n({ present: s });
    let i = t.default({ present: s.value });
    i = xs(i || []);
    const u = Qe();
    if (i && (i == null ? void 0 : i.length) > 1) {
      const c = (d = u == null ? void 0 : u.parent) != null && d.type.name ? `<${u.parent.type.name} />` : "component";
      throw new Error([
        `Detected an invalid children for \`${c}\` for  \`Presence\` component.`,
        "",
        "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",
        "You can apply a few solutions:",
        ["Provide a single child element so that `presence` directive attach correctly.", "Ensure the first child is an actual element instead of a raw text node or comment node."].map((f) => `  - ${f}`).join(`
`)
      ].join(`
`));
    }
    return () => o.value || a.value || s.value ? Je(t.default({ present: s.value })[0], { ref: (c) => {
      const f = An(c);
      return typeof (f == null ? void 0 : f.hasAttribute) > "u" || (f != null && f.hasAttribute("data-reka-popper-content-wrapper") ? r.value = f.firstElementChild : r.value = f), f;
    } }) : null;
  }
});
const vl = w({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      var u;
      if (!n.default) return null;
      const a = xs(n.default()), o = a.findIndex((d) => d.type !== El);
      if (o === -1) return a;
      const r = a[o];
      (u = r.props) == null || delete u.ref;
      const s = r.props ? k(t, r.props) : t, i = vu({
        ...r,
        props: {}
      }, s);
      return a.length === 1 ? i : (a[o] = i, a);
    };
  }
}), Jw = [
  "area",
  "img",
  "input"
], he = w({
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
    const a = e.asChild ? "template" : e.as;
    return typeof a == "string" && Jw.includes(a) ? () => Je(a, t) : a !== "template" ? () => Je(e.as, t, { default: n.default }) : () => Je(vl, t, { default: n.default });
  }
});
function ln() {
  const e = E(), t = O(() => {
    var n, a;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (a = e.value) == null ? void 0 : a.$el.nextElementSibling : An(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
const [mc, Zw] = Ze("CollapsibleRoot");
var e1 = /* @__PURE__ */ w({
  __name: "CollapsibleRoot",
  props: {
    defaultOpen: {
      type: Boolean,
      required: !1,
      default: !1
    },
    open: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    unmountOnHide: {
      type: Boolean,
      required: !1,
      default: !0
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: ["update:open"],
  setup(e, { expose: t, emit: n }) {
    const a = e, r = Gt(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), { disabled: s, unmountOnHide: i } = Ce(a);
    return Zw({
      contentId: "",
      disabled: s,
      open: r,
      unmountOnHide: i,
      onOpenToggle: () => {
        s.value || (r.value = !r.value);
      }
    }), t({ open: r }), xe(), (u, d) => (y(), C(l(he), {
      as: u.as,
      "as-child": a.asChild,
      "data-state": l(r) ? "open" : "closed",
      "data-disabled": l(s) ? "" : void 0
    }, {
      default: h(() => [x(u.$slots, "default", { open: l(r) })]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "data-state",
      "data-disabled"
    ]));
  }
}), t1 = e1, n1 = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "CollapsibleContent",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: ["contentFound"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = mc();
    o.contentId || (o.contentId = Ct(void 0, "reka-collapsible-content"));
    const r = E(), { forwardRef: s, currentElement: i } = xe(), u = E(0), d = E(0), c = O(() => o.open.value), f = E(c.value), p = E();
    te(() => {
      var v;
      return [c.value, (v = r.value) == null ? void 0 : v.present];
    }, async () => {
      await re();
      const v = i.value;
      if (!v) return;
      p.value = p.value || {
        transitionDuration: v.style.transitionDuration,
        animationName: v.style.animationName
      }, v.style.transitionDuration = "0s", v.style.animationName = "none";
      const g = v.getBoundingClientRect();
      d.value = g.height, u.value = g.width, f.value || (v.style.transitionDuration = p.value.transitionDuration, v.style.animationName = p.value.animationName);
    }, { immediate: !0 });
    const m = O(() => f.value && o.open.value);
    return ue(() => {
      requestAnimationFrame(() => {
        f.value = !1;
      });
    }), Ss(i, "beforematch", (v) => {
      requestAnimationFrame(() => {
        o.onOpenToggle(), a("contentFound");
      });
    }), (v, g) => (y(), C(l(Ua), {
      ref_key: "presentRef",
      ref: r,
      present: v.forceMount || l(o).open.value,
      "force-mount": !0
    }, {
      default: h(({ present: b }) => {
        var _;
        return [R(l(he), k(v.$attrs, {
          id: l(o).contentId,
          ref: l(s),
          "as-child": n.asChild,
          as: v.as,
          hidden: b ? void 0 : l(o).unmountOnHide.value ? "" : "until-found",
          "data-state": m.value ? void 0 : l(o).open.value ? "open" : "closed",
          "data-disabled": (_ = l(o).disabled) != null && _.value ? "" : void 0,
          style: {
            "--reka-collapsible-content-height": `${d.value}px`,
            "--reka-collapsible-content-width": `${u.value}px`
          }
        }), {
          default: h(() => [!l(o).unmountOnHide.value || b ? x(v.$slots, "default", { key: 0 }) : ce("v-if", !0)]),
          _: 2
        }, 1040, [
          "id",
          "as-child",
          "as",
          "hidden",
          "data-state",
          "data-disabled",
          "style"
        ])];
      }),
      _: 3
    }, 8, ["present"]));
  }
}), a1 = n1, o1 = /* @__PURE__ */ w({
  __name: "CollapsibleTrigger",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    }
  },
  setup(e) {
    const t = e;
    xe();
    const n = mc();
    return (a, o) => {
      var r, s;
      return y(), C(l(he), {
        type: a.as === "button" ? "button" : void 0,
        as: a.as,
        "as-child": t.asChild,
        "aria-controls": l(n).contentId,
        "aria-expanded": l(n).open.value,
        "data-state": l(n).open.value ? "open" : "closed",
        "data-disabled": (r = l(n).disabled) != null && r.value ? "" : void 0,
        disabled: (s = l(n).disabled) == null ? void 0 : s.value,
        onClick: l(n).onOpenToggle
      }, {
        default: h(() => [x(a.$slots, "default")]),
        _: 3
      }, 8, [
        "type",
        "as",
        "as-child",
        "aria-controls",
        "aria-expanded",
        "data-state",
        "data-disabled",
        "disabled",
        "onClick"
      ]);
    };
  }
}), r1 = o1;
const [Ft, l1] = Ze("DialogRoot");
var s1 = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "DialogRoot",
  props: {
    open: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    defaultOpen: {
      type: Boolean,
      required: !1,
      default: !1
    },
    modal: {
      type: Boolean,
      required: !1,
      default: !0
    }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = Gt(n, "open", t, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), r = E(), s = E(), { modal: i } = Ce(n);
    return l1({
      open: o,
      modal: i,
      openModal: () => {
        o.value = !0;
      },
      onOpenChange: (u) => {
        o.value = u;
      },
      onOpenToggle: () => {
        o.value = !o.value;
      },
      contentId: "",
      titleId: "",
      descriptionId: "",
      triggerElement: r,
      contentElement: s
    }), (u, d) => x(u.$slots, "default", {
      open: l(o),
      close: () => o.value = !1
    });
  }
}), i1 = s1, u1 = /* @__PURE__ */ w({
  __name: "DialogClose",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    }
  },
  setup(e) {
    const t = e;
    xe();
    const n = Ft();
    return (a, o) => (y(), C(l(he), k(t, {
      type: a.as === "button" ? "button" : void 0,
      onClick: o[0] || (o[0] = (r) => l(n).onOpenChange(!1))
    }), {
      default: h(() => [x(a.$slots, "default")]),
      _: 3
    }, 16, ["type"]));
  }
}), d1 = u1;
const c1 = "dismissableLayer.pointerDownOutside", f1 = "dismissableLayer.focusOutside";
function gc(e, t) {
  const n = t.closest("[data-dismissable-layer]"), a = e.dataset.dismissableLayer === "" ? e : e.querySelector("[data-dismissable-layer]"), o = Array.from(e.ownerDocument.querySelectorAll("[data-dismissable-layer]"));
  return !!(n && (a === n || o.indexOf(a) < o.indexOf(n)));
}
function p1(e, t, n = !0) {
  var s;
  const a = ((s = t == null ? void 0 : t.value) == null ? void 0 : s.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = E(!1), r = E(() => {
  });
  return Se((i) => {
    if (!En || !ot(n)) return;
    const u = async (c) => {
      const f = c.target;
      if (!(!(t != null && t.value) || !f)) {
        if (gc(t.value, f)) {
          o.value = !1;
          return;
        }
        if (c.target && !o.value) {
          let m = function() {
            _s(c1, e, p);
          };
          const p = { originalEvent: c };
          c.pointerType === "touch" ? (a.removeEventListener("click", r.value), r.value = m, a.addEventListener("click", r.value, { once: !0 })) : m();
        } else a.removeEventListener("click", r.value);
        o.value = !1;
      }
    }, d = window.setTimeout(() => {
      a.addEventListener("pointerdown", u);
    }, 0);
    i(() => {
      window.clearTimeout(d), a.removeEventListener("pointerdown", u), a.removeEventListener("click", r.value);
    });
  }), { onPointerDownCapture: () => {
    ot(n) && (o.value = !0);
  } };
}
function v1(e, t, n = !0) {
  var r;
  const a = ((r = t == null ? void 0 : t.value) == null ? void 0 : r.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = E(!1);
  return Se((s) => {
    if (!En || !ot(n)) return;
    const i = async (u) => {
      if (!(t != null && t.value)) return;
      await re(), await re();
      const d = u.target;
      !t.value || !d || gc(t.value, d) || u.target && !o.value && _s(f1, e, { originalEvent: u });
    };
    a.addEventListener("focusin", i), s(() => a.removeEventListener("focusin", i));
  }), {
    onFocusCapture: () => {
      ot(n) && (o.value = !0);
    },
    onBlurCapture: () => {
      ot(n) && (o.value = !1);
    }
  };
}
const qt = Gn({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
});
var m1 = /* @__PURE__ */ w({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1,
      default: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "dismiss"
  ],
  setup(e, { emit: t }) {
    const n = e, a = t, { forwardRef: o, currentElement: r } = xe(), s = O(() => {
      var v;
      return ((v = r.value) == null ? void 0 : v.ownerDocument) ?? globalThis.document;
    }), i = O(() => qt.layersRoot), u = O(() => r.value ? Array.from(i.value).indexOf(r.value) : -1), d = O(() => qt.layersWithOutsidePointerEventsDisabled.size > 0), c = O(() => {
      const v = Array.from(i.value), [g] = [...qt.layersWithOutsidePointerEventsDisabled].slice(-1), b = v.indexOf(g);
      return u.value >= b;
    }), f = p1(async (v) => {
      const g = [...qt.branches].some((b) => b == null ? void 0 : b.contains(v.target));
      !c.value || g || (a("pointerDownOutside", v), a("interactOutside", v), await re(), v.defaultPrevented || a("dismiss"));
    }, r), p = v1((v) => {
      [...qt.branches].some((b) => b == null ? void 0 : b.contains(v.target)) || (a("focusOutside", v), a("interactOutside", v), v.defaultPrevented || a("dismiss"));
    }, r);
    Tw("Escape", (v) => {
      u.value === i.value.size - 1 && (a("escapeKeyDown", v), v.defaultPrevented || a("dismiss"));
    });
    let m;
    return Se((v) => {
      r.value && (n.disableOutsidePointerEvents && (qt.layersWithOutsidePointerEventsDisabled.size === 0 && (m = s.value.body.style.pointerEvents, s.value.body.style.pointerEvents = "none"), qt.layersWithOutsidePointerEventsDisabled.add(r.value)), i.value.add(r.value), v(() => {
        n.disableOutsidePointerEvents && qt.layersWithOutsidePointerEventsDisabled.size === 1 && (s.value.body.style.pointerEvents = m);
      }));
    }), Se((v) => {
      v(() => {
        r.value && (i.value.delete(r.value), qt.layersWithOutsidePointerEventsDisabled.delete(r.value));
      });
    }), (v, g) => (y(), C(l(he), {
      ref: l(o),
      "as-child": v.asChild,
      as: v.as,
      "data-dismissable-layer": "",
      style: Pt({ pointerEvents: d.value ? c.value ? "auto" : "none" : void 0 }),
      onFocusCapture: l(p).onFocusCapture,
      onBlurCapture: l(p).onBlurCapture,
      onPointerdownCapture: l(f).onPointerDownCapture
    }, {
      default: h(() => [x(v.$slots, "default")]),
      _: 3
    }, 8, [
      "as-child",
      "as",
      "style",
      "onFocusCapture",
      "onBlurCapture",
      "onPointerdownCapture"
    ]));
  }
}), yc = m1;
const g1 = _w(() => E([]));
function y1() {
  const e = g1();
  return {
    add(t) {
      const n = e.value[0];
      t !== n && (n == null || n.pause()), e.value = Ai(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var n;
      e.value = Ai(e.value, t), (n = e.value[0]) == null || n.resume();
    }
  };
}
function Ai(e, t) {
  const n = [...e], a = n.indexOf(t);
  return a !== -1 && n.splice(a, 1), n;
}
function h1(e) {
  return e.filter((t) => t.tagName !== "A");
}
const Er = "focusScope.autoFocusOnMount", Ar = "focusScope.autoFocusOnUnmount", Bi = {
  bubbles: !1,
  cancelable: !0
};
function b1(e, { select: t = !1 } = {}) {
  const n = wt();
  for (const a of e)
    if (nn(a, { select: t }), wt() !== n) return !0;
}
function w1(e) {
  const t = hc(e), n = Pi(t, e), a = Pi(t.reverse(), e);
  return [n, a];
}
function hc(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (a) => {
    const o = a.tagName === "INPUT" && a.type === "hidden";
    return a.disabled || a.hidden || o ? NodeFilter.FILTER_SKIP : a.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Pi(e, t) {
  for (const n of e) if (!_1(n, { upTo: t })) return n;
}
function _1(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function x1(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function nn(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = wt();
    e.focus({ preventScroll: !0 }), e !== n && x1(e) && t && e.select();
  }
}
var C1 = /* @__PURE__ */ w({
  __name: "FocusScope",
  props: {
    loop: {
      type: Boolean,
      required: !1,
      default: !1
    },
    trapped: {
      type: Boolean,
      required: !1,
      default: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, a = t, { currentRef: o, currentElement: r } = xe(), s = E(null), i = y1(), u = Gn({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    Se((c) => {
      if (!En) return;
      const f = r.value;
      if (!n.trapped) return;
      function p(b) {
        if (u.paused || !f) return;
        const _ = b.target;
        f.contains(_) ? s.value = _ : nn(s.value, { select: !0 });
      }
      function m(b) {
        if (u.paused || !f) return;
        const _ = b.relatedTarget;
        _ !== null && (f.contains(_) || nn(s.value, { select: !0 }));
      }
      function v(b) {
        f.contains(s.value) || nn(f);
      }
      document.addEventListener("focusin", p), document.addEventListener("focusout", m);
      const g = new MutationObserver(v);
      f && g.observe(f, {
        childList: !0,
        subtree: !0
      }), c(() => {
        document.removeEventListener("focusin", p), document.removeEventListener("focusout", m), g.disconnect();
      });
    }), Se(async (c) => {
      const f = r.value;
      if (await re(), !f) return;
      i.add(u);
      const p = wt();
      if (!f.contains(p)) {
        const v = new CustomEvent(Er, Bi);
        f.addEventListener(Er, (g) => a("mountAutoFocus", g)), f.dispatchEvent(v), v.defaultPrevented || (b1(h1(hc(f)), { select: !0 }), wt() === p && nn(f));
      }
      c(() => {
        f.removeEventListener(Er, (b) => a("mountAutoFocus", b));
        const v = new CustomEvent(Ar, Bi), g = (b) => {
          a("unmountAutoFocus", b);
        };
        f.addEventListener(Ar, g), f.dispatchEvent(v), setTimeout(() => {
          v.defaultPrevented || nn(p ?? document.body, { select: !0 }), f.removeEventListener(Ar, g), i.remove(u);
        }, 0);
      });
    });
    function d(c) {
      if (!n.loop && !n.trapped || u.paused) return;
      const f = c.key === "Tab" && !c.altKey && !c.ctrlKey && !c.metaKey, p = wt();
      if (f && p) {
        const m = c.currentTarget, [v, g] = w1(m);
        v && g ? !c.shiftKey && p === g ? (c.preventDefault(), n.loop && nn(v, { select: !0 })) : c.shiftKey && p === v && (c.preventDefault(), n.loop && nn(g, { select: !0 })) : p === m && c.preventDefault();
      }
    }
    return (c, f) => (y(), C(l(he), {
      ref_key: "currentRef",
      ref: o,
      tabindex: "-1",
      "as-child": c.asChild,
      as: c.as,
      onKeydown: d
    }, {
      default: h(() => [x(c.$slots, "default")]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), S1 = C1;
function $1(e) {
  return e ? "open" : "closed";
}
const O1 = "DialogTitle", E1 = "DialogContent";
function A1({ titleName: e = O1, contentName: t = E1, componentLink: n = "dialog.html#title", titleId: a, descriptionId: o, contentElement: r }) {
  const s = `Warning: \`${t}\` requires a \`${e}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.reka-ui.com/docs/components/${n}`, i = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${t}.`;
  ue(() => {
    var c;
    document.getElementById(a) || console.warn(s);
    const d = (c = r.value) == null ? void 0 : c.getAttribute("aria-describedby");
    o && d && (document.getElementById(o) || console.warn(i));
  });
}
var B1 = /* @__PURE__ */ w({
  __name: "DialogContentImpl",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    trapFocus: {
      type: Boolean,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(e, { emit: t }) {
    const n = e, a = t, o = Ft(), { forwardRef: r, currentElement: s } = xe();
    return o.titleId || (o.titleId = Ct(void 0, "reka-dialog-title")), o.descriptionId || (o.descriptionId = Ct(void 0, "reka-dialog-description")), ue(() => {
      o.contentElement = s, wt() !== document.body && (o.triggerElement.value = wt());
    }), process.env.NODE_ENV !== "production" && A1({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: o.titleId,
      descriptionId: o.descriptionId,
      contentElement: s
    }), (i, u) => (y(), C(l(S1), {
      "as-child": "",
      loop: "",
      trapped: n.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => a("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => a("closeAutoFocus", d))
    }, {
      default: h(() => [R(l(yc), k({
        id: l(o).contentId,
        ref: l(r),
        as: i.as,
        "as-child": i.asChild,
        "disable-outside-pointer-events": i.disableOutsidePointerEvents,
        role: "dialog",
        "aria-describedby": l(o).descriptionId,
        "aria-labelledby": l(o).titleId,
        "data-state": l($1)(l(o).open.value)
      }, i.$attrs, {
        onDismiss: u[0] || (u[0] = (d) => l(o).onOpenChange(!1)),
        onEscapeKeyDown: u[1] || (u[1] = (d) => a("escapeKeyDown", d)),
        onFocusOutside: u[2] || (u[2] = (d) => a("focusOutside", d)),
        onInteractOutside: u[3] || (u[3] = (d) => a("interactOutside", d)),
        onPointerDownOutside: u[4] || (u[4] = (d) => a("pointerDownOutside", d))
      }), {
        default: h(() => [x(i.$slots, "default")]),
        _: 3
      }, 16, [
        "id",
        "as",
        "as-child",
        "disable-outside-pointer-events",
        "aria-describedby",
        "aria-labelledby",
        "data-state"
      ])]),
      _: 3
    }, 8, ["trapped"]));
  }
}), bc = B1, P1 = /* @__PURE__ */ w({
  __name: "DialogContentModal",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    trapFocus: {
      type: Boolean,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(e, { emit: t }) {
    const n = e, a = t, o = Ft(), r = or(a), { forwardRef: s, currentElement: i } = xe();
    return vc(i), (u, d) => (y(), C(bc, k({
      ...n,
      ...l(r)
    }, {
      ref: l(s),
      "trap-focus": l(o).open.value,
      "disable-outside-pointer-events": !0,
      onCloseAutoFocus: d[0] || (d[0] = (c) => {
        var f;
        c.defaultPrevented || (c.preventDefault(), (f = l(o).triggerElement.value) == null || f.focus());
      }),
      onPointerDownOutside: d[1] || (d[1] = (c) => {
        const f = c.detail.originalEvent, p = f.button === 0 && f.ctrlKey === !0;
        (f.button === 2 || p) && c.preventDefault();
      }),
      onFocusOutside: d[2] || (d[2] = (c) => {
        c.preventDefault();
      })
    }), {
      default: h(() => [x(u.$slots, "default")]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), D1 = P1, k1 = /* @__PURE__ */ w({
  __name: "DialogContentNonModal",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    trapFocus: {
      type: Boolean,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(e, { emit: t }) {
    const n = e, o = or(t);
    xe();
    const r = Ft(), s = E(!1), i = E(!1);
    return (u, d) => (y(), C(bc, k({
      ...n,
      ...l(o)
    }, {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: d[0] || (d[0] = (c) => {
        var f;
        c.defaultPrevented || (s.value || (f = l(r).triggerElement.value) == null || f.focus(), c.preventDefault()), s.value = !1, i.value = !1;
      }),
      onInteractOutside: d[1] || (d[1] = (c) => {
        var m;
        c.defaultPrevented || (s.value = !0, c.detail.originalEvent.type === "pointerdown" && (i.value = !0));
        const f = c.target;
        ((m = l(r).triggerElement.value) == null ? void 0 : m.contains(f)) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && i.value && c.preventDefault();
      })
    }), {
      default: h(() => [x(u.$slots, "default")]),
      _: 3
    }, 16));
  }
}), T1 = k1, I1 = /* @__PURE__ */ w({
  __name: "DialogContent",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(e, { emit: t }) {
    const n = e, a = t, o = Ft(), r = or(a), { forwardRef: s } = xe();
    return (i, u) => (y(), C(l(Ua), { present: i.forceMount || l(o).open.value }, {
      default: h(() => [l(o).modal.value ? (y(), C(D1, k({
        key: 0,
        ref: l(s)
      }, {
        ...n,
        ...l(r),
        ...i.$attrs
      }), {
        default: h(() => [x(i.$slots, "default")]),
        _: 3
      }, 16)) : (y(), C(T1, k({
        key: 1,
        ref: l(s)
      }, {
        ...n,
        ...l(r),
        ...i.$attrs
      }), {
        default: h(() => [x(i.$slots, "default")]),
        _: 3
      }, 16))]),
      _: 3
    }, 8, ["present"]));
  }
}), F1 = I1, M1 = /* @__PURE__ */ w({
  __name: "DialogDescription",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "p"
    }
  },
  setup(e) {
    const t = e;
    xe();
    const n = Ft();
    return (a, o) => (y(), C(l(he), k(t, { id: l(n).descriptionId }), {
      default: h(() => [x(a.$slots, "default")]),
      _: 3
    }, 16, ["id"]));
  }
}), R1 = M1, L1 = /* @__PURE__ */ w({
  __name: "DialogOverlayImpl",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = Ft();
    return uc(!0), xe(), (n, a) => (y(), C(l(he), {
      as: n.as,
      "as-child": n.asChild,
      "data-state": l(t).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" }
    }, {
      default: h(() => [x(n.$slots, "default")]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "data-state"
    ]));
  }
}), N1 = L1, V1 = /* @__PURE__ */ w({
  __name: "DialogOverlay",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = Ft(), { forwardRef: n } = xe();
    return (a, o) => {
      var r;
      return (r = l(t)) != null && r.modal.value ? (y(), C(l(Ua), {
        key: 0,
        present: a.forceMount || l(t).open.value
      }, {
        default: h(() => [R(N1, k(a.$attrs, {
          ref: l(n),
          as: a.as,
          "as-child": a.asChild
        }), {
          default: h(() => [x(a.$slots, "default")]),
          _: 3
        }, 16, ["as", "as-child"])]),
        _: 3
      }, 8, ["present"])) : ce("v-if", !0);
    };
  }
}), q1 = V1, z1 = /* @__PURE__ */ w({
  __name: "Teleport",
  props: {
    to: {
      type: null,
      required: !1,
      default: "body"
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    defer: {
      type: Boolean,
      required: !1
    },
    forceMount: {
      type: Boolean,
      required: !1
    }
  },
  setup(e) {
    const t = Dw();
    return (n, a) => l(t) || n.forceMount ? (y(), C(Ra, {
      key: 0,
      to: n.to,
      disabled: n.disabled,
      defer: n.defer
    }, [x(n.$slots, "default")], 8, [
      "to",
      "disabled",
      "defer"
    ])) : ce("v-if", !0);
  }
}), wc = z1, j1 = /* @__PURE__ */ w({
  __name: "DialogPortal",
  props: {
    to: {
      type: null,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    defer: {
      type: Boolean,
      required: !1
    },
    forceMount: {
      type: Boolean,
      required: !1
    }
  },
  setup(e) {
    const t = e;
    return (n, a) => (y(), C(l(wc), Q(ne(t)), {
      default: h(() => [x(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), K1 = j1, H1 = /* @__PURE__ */ w({
  __name: "DialogTitle",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "h2"
    }
  },
  setup(e) {
    const t = e, n = Ft();
    return xe(), (a, o) => (y(), C(l(he), k(t, { id: l(n).titleId }), {
      default: h(() => [x(a.$slots, "default")]),
      _: 3
    }, 16, ["id"]));
  }
}), W1 = H1, U1 = /* @__PURE__ */ w({
  __name: "DialogTrigger",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    }
  },
  setup(e) {
    const t = e, n = Ft(), { forwardRef: a, currentElement: o } = xe();
    return n.contentId || (n.contentId = Ct(void 0, "reka-dialog-content")), ue(() => {
      n.triggerElement.value = o.value;
    }), (r, s) => (y(), C(l(he), k(t, {
      ref: l(a),
      type: r.as === "button" ? "button" : void 0,
      "aria-haspopup": "dialog",
      "aria-expanded": l(n).open.value || !1,
      "aria-controls": l(n).open.value ? l(n).contentId : void 0,
      "data-state": l(n).open.value ? "open" : "closed",
      onClick: l(n).onOpenToggle
    }), {
      default: h(() => [x(r.$slots, "default")]),
      _: 3
    }, 16, [
      "type",
      "aria-expanded",
      "aria-controls",
      "data-state",
      "onClick"
    ]));
  }
}), G1 = U1;
const Di = "data-reka-collection-item";
function rr(e = {}) {
  const { key: t = "", isProvider: n = !1 } = e, a = `${t}CollectionProvider`;
  let o;
  if (n) {
    const c = E(/* @__PURE__ */ new Map());
    o = {
      collectionRef: E(),
      itemMap: c
    }, aa(a, o);
  } else o = na(a);
  const r = (c = !1) => {
    const f = o.collectionRef.value;
    if (!f) return [];
    const p = Array.from(f.querySelectorAll(`[${Di}]`)), v = Array.from(o.itemMap.value.values()).sort((g, b) => p.indexOf(g.ref) - p.indexOf(b.ref));
    return c ? v : v.filter((g) => g.ref.dataset.disabled !== "");
  }, s = w({
    name: "CollectionSlot",
    setup(c, { slots: f }) {
      const { primitiveElement: p, currentElement: m } = ln();
      return te(m, () => {
        o.collectionRef.value = m.value;
      }), () => Je(vl, { ref: p }, f);
    }
  }), i = w({
    name: "CollectionItem",
    inheritAttrs: !1,
    props: { value: { validator: () => !0 } },
    setup(c, { slots: f, attrs: p }) {
      const { primitiveElement: m, currentElement: v } = ln();
      return Se((g) => {
        if (v.value) {
          const b = mu(v.value);
          o.itemMap.value.set(b, {
            ref: v.value,
            value: c.value
          }), g(() => o.itemMap.value.delete(b));
        }
      }), () => Je(vl, {
        ...p,
        [Di]: "",
        ref: m
      }, f);
    }
  }), u = O(() => Array.from(o.itemMap.value.values())), d = O(() => o.itemMap.value.size);
  return {
    getItems: r,
    reactiveItems: u,
    itemMapSize: d,
    CollectionSlot: s,
    CollectionItem: i
  };
}
const Y1 = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function X1(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function _c(e, t, n) {
  const a = X1(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(a)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(a)))
    return Y1[a];
}
function Q1(e, t = !1) {
  const n = wt();
  for (const a of e)
    if (a === n || (a.focus({ preventScroll: t }), wt() !== n)) return;
}
function J1(e, t) {
  return e.map((n, a) => e[(t + a) % e.length]);
}
const [Z1] = Ze("RovingFocusGroup");
var e_ = /* @__PURE__ */ w({
  __name: "RovingFocusItem",
  props: {
    tabStopId: {
      type: String,
      required: !1
    },
    focusable: {
      type: Boolean,
      required: !1,
      default: !0
    },
    active: {
      type: Boolean,
      required: !1
    },
    allowShiftKey: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "span"
    }
  },
  setup(e) {
    const t = e, n = Z1(), a = Ct(), o = O(() => t.tabStopId || a), r = O(() => n.currentTabStopId.value === o.value), { getItems: s, CollectionItem: i } = rr();
    ue(() => {
      t.focusable && n.onFocusableItemAdd();
    }), Ge(() => {
      t.focusable && n.onFocusableItemRemove();
    });
    function u(d) {
      if (d.key === "Tab" && d.shiftKey) {
        n.onItemShiftTab();
        return;
      }
      if (d.target !== d.currentTarget) return;
      const c = _c(d, n.orientation.value, n.dir.value);
      if (c !== void 0) {
        if (d.metaKey || d.ctrlKey || d.altKey || !t.allowShiftKey && d.shiftKey) return;
        d.preventDefault();
        let f = [...s().map((p) => p.ref).filter((p) => p.dataset.disabled !== "")];
        if (c === "last") f.reverse();
        else if (c === "prev" || c === "next") {
          c === "prev" && f.reverse();
          const p = f.indexOf(d.currentTarget);
          f = n.loop.value ? J1(f, p + 1) : f.slice(p + 1);
        }
        re(() => Q1(f));
      }
    }
    return (d, c) => (y(), C(l(i), null, {
      default: h(() => [R(l(he), {
        tabindex: r.value ? 0 : -1,
        "data-orientation": l(n).orientation.value,
        "data-active": d.active ? "" : void 0,
        "data-disabled": d.focusable ? void 0 : "",
        as: d.as,
        "as-child": d.asChild,
        onMousedown: c[0] || (c[0] = (f) => {
          d.focusable ? l(n).onItemFocus(o.value) : f.preventDefault();
        }),
        onFocus: c[1] || (c[1] = (f) => l(n).onItemFocus(o.value)),
        onKeydown: u
      }, {
        default: h(() => [x(d.$slots, "default")]),
        _: 3
      }, 8, [
        "tabindex",
        "data-orientation",
        "data-active",
        "data-disabled",
        "as",
        "as-child"
      ])]),
      _: 3
    }));
  }
}), t_ = e_, n_ = /* @__PURE__ */ w({
  __name: "VisuallyHidden",
  props: {
    feature: {
      type: String,
      required: !1,
      default: "focusable"
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "span"
    }
  },
  setup(e) {
    return (t, n) => (y(), C(l(he), {
      as: t.as,
      "as-child": t.asChild,
      "aria-hidden": t.feature === "focusable" ? "true" : void 0,
      "data-hidden": t.feature === "fully-hidden" ? "" : void 0,
      tabindex: t.feature === "fully-hidden" ? "-1" : void 0,
      style: {
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
        wordWrap: "normal",
        top: "-1px",
        left: "-1px"
      }
    }, {
      default: h(() => [x(t.$slots, "default")]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "aria-hidden",
      "data-hidden",
      "tabindex"
    ]));
  }
}), a_ = n_, o_ = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "VisuallyHiddenInputBubble",
  props: {
    name: {
      type: String,
      required: !0
    },
    value: {
      type: null,
      required: !0
    },
    checked: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    required: {
      type: Boolean,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    feature: {
      type: String,
      required: !1,
      default: "fully-hidden"
    }
  },
  setup(e) {
    const t = e, { primitiveElement: n, currentElement: a } = ln(), o = O(() => t.checked ?? t.value);
    return te(o, (r, s) => {
      if (!a.value) return;
      const i = a.value, u = window.HTMLInputElement.prototype, c = Object.getOwnPropertyDescriptor(u, "value").set;
      if (c && r !== s) {
        const f = new Event("input", { bubbles: !0 }), p = new Event("change", { bubbles: !0 });
        c.call(i, r), i.dispatchEvent(f), i.dispatchEvent(p);
      }
    }), (r, s) => (y(), C(a_, k({
      ref_key: "primitiveElement",
      ref: n
    }, {
      ...t,
      ...r.$attrs
    }, { as: "input" }), null, 16));
  }
}), ki = o_, r_ = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "VisuallyHiddenInput",
  props: {
    name: {
      type: String,
      required: !0
    },
    value: {
      type: null,
      required: !0
    },
    checked: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    required: {
      type: Boolean,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    feature: {
      type: String,
      required: !1,
      default: "fully-hidden"
    }
  },
  setup(e) {
    const t = e, n = O(() => typeof t.value == "object" && Array.isArray(t.value) && t.value.length === 0 && t.required), a = O(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" || t.value === null || t.value === void 0 ? [{
      name: t.name,
      value: t.value
    }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((o, r) => typeof o == "object" ? Object.entries(o).map(([s, i]) => ({
      name: `${t.name}[${r}][${s}]`,
      value: i
    })) : {
      name: `${t.name}[${r}]`,
      value: o
    }) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([o, r]) => ({
      name: `${t.name}[${o}]`,
      value: r
    })) : []);
    return (o, r) => (y(), q(Ee, null, [ce(" We render single input if it's required "), n.value ? (y(), C(ki, k({ key: o.name }, {
      ...t,
      ...o.$attrs
    }, {
      name: o.name,
      value: o.value
    }), null, 16, ["name", "value"])) : (y(!0), q(Ee, { key: 1 }, st(a.value, (s) => (y(), C(ki, k({ key: s.name }, { ref_for: !0 }, {
      ...t,
      ...o.$attrs
    }, {
      name: s.name,
      value: s.value
    }), null, 16, ["name", "value"]))), 128))], 2112));
  }
}), xc = r_;
const [l_] = Ze("CheckboxGroupRoot");
function Po(e) {
  return e === "indeterminate";
}
function Cc(e) {
  return Po(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const [s_, i_] = Ze("CheckboxRoot");
var u_ = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "CheckboxRoot",
  props: {
    defaultValue: {
      type: [Boolean, String],
      required: !1
    },
    modelValue: {
      type: [
        Boolean,
        String,
        null
      ],
      required: !1,
      default: void 0
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    value: {
      type: null,
      required: !1,
      default: "on"
    },
    id: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    },
    name: {
      type: String,
      required: !1
    },
    required: {
      type: Boolean,
      required: !1
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = t, { forwardRef: o, currentElement: r } = xe(), s = l_(null), i = Gt(n, "modelValue", a, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), u = O(() => (s == null ? void 0 : s.disabled.value) || n.disabled), d = O(() => fl(s == null ? void 0 : s.modelValue.value) ? i.value === "indeterminate" ? "indeterminate" : i.value : Oi(s.modelValue.value, n.value));
    function c() {
      if (fl(s == null ? void 0 : s.modelValue.value))
        i.value = Po(i.value) ? !0 : !i.value;
      else {
        const m = [...s.modelValue.value || []];
        if (Oi(m, n.value)) {
          const v = m.findIndex((g) => Jn(g, n.value));
          m.splice(v, 1);
        } else m.push(n.value);
        s.modelValue.value = m;
      }
    }
    const f = fc(r), p = O(() => {
      var m;
      return n.id && r.value ? (m = document.querySelector(`[for="${n.id}"]`)) == null ? void 0 : m.innerText : void 0;
    });
    return i_({
      disabled: u,
      state: d
    }), (m, v) => {
      var g, b;
      return y(), C(at((g = l(s)) != null && g.rovingFocus.value ? l(t_) : l(he)), k(m.$attrs, {
        id: m.id,
        ref: l(o),
        role: "checkbox",
        "as-child": m.asChild,
        as: m.as,
        type: m.as === "button" ? "button" : void 0,
        "aria-checked": l(Po)(d.value) ? "mixed" : d.value,
        "aria-required": m.required,
        "aria-label": m.$attrs["aria-label"] || p.value,
        "data-state": l(Cc)(d.value),
        "data-disabled": u.value ? "" : void 0,
        disabled: u.value,
        focusable: (b = l(s)) != null && b.rovingFocus.value ? !u.value : void 0,
        onKeydown: nt(ke(() => {
        }, ["prevent"]), ["enter"]),
        onClick: c
      }), {
        default: h(() => [x(m.$slots, "default", {
          modelValue: l(i),
          state: d.value
        }), l(f) && m.name && !l(s) ? (y(), C(l(xc), {
          key: 0,
          type: "checkbox",
          checked: !!d.value,
          name: m.name,
          value: m.value,
          disabled: u.value,
          required: m.required
        }, null, 8, [
          "checked",
          "name",
          "value",
          "disabled",
          "required"
        ])) : ce("v-if", !0)]),
        _: 3
      }, 16, [
        "id",
        "as-child",
        "as",
        "type",
        "aria-checked",
        "aria-required",
        "aria-label",
        "data-state",
        "data-disabled",
        "disabled",
        "focusable",
        "onKeydown"
      ]);
    };
  }
}), d_ = u_, c_ = /* @__PURE__ */ w({
  __name: "CheckboxIndicator",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "span"
    }
  },
  setup(e) {
    const { forwardRef: t } = xe(), n = s_();
    return (a, o) => (y(), C(l(Ua), { present: a.forceMount || l(Po)(l(n).state.value) || l(n).state.value === !0 }, {
      default: h(() => [R(l(he), k({
        ref: l(t),
        "data-state": l(Cc)(l(n).state.value),
        "data-disabled": l(n).disabled.value ? "" : void 0,
        style: { pointerEvents: "none" },
        "as-child": a.asChild,
        as: a.as
      }, a.$attrs), {
        default: h(() => [x(a.$slots, "default")]),
        _: 3
      }, 16, [
        "data-state",
        "data-disabled",
        "as-child",
        "as"
      ])]),
      _: 3
    }, 8, ["present"]));
  }
}), f_ = c_;
const [Sc, p_] = Ze("PopperRoot");
var v_ = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = E();
    return p_({
      anchor: t,
      onAnchorChange: (n) => t.value = n
    }), (n, a) => x(n.$slots, "default");
  }
}), m_ = v_, g_ = /* @__PURE__ */ w({
  __name: "PopperAnchor",
  props: {
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: a } = xe(), o = Sc();
    return Bl(() => {
      o.onAnchorChange(t.reference ?? a.value);
    }), (r, s) => (y(), C(l(he), {
      ref: l(n),
      as: r.as,
      "as-child": r.asChild
    }, {
      default: h(() => [x(r.$slots, "default")]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), y_ = g_;
function h_(e) {
  return e !== null;
}
function b_(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var b, _, $;
      const { placement: n, rects: a, middlewareData: o } = t, s = ((b = o.arrow) == null ? void 0 : b.centerOffset) !== 0, i = s ? 0 : e.arrowWidth, u = s ? 0 : e.arrowHeight, [d, c] = ml(n), f = {
        start: "0%",
        center: "50%",
        end: "100%"
      }[c], p = (((_ = o.arrow) == null ? void 0 : _.x) ?? 0) + i / 2, m = ((($ = o.arrow) == null ? void 0 : $.y) ?? 0) + u / 2;
      let v = "", g = "";
      return d === "bottom" ? (v = s ? f : `${p}px`, g = `${-u}px`) : d === "top" ? (v = s ? f : `${p}px`, g = `${a.floating.height + u}px`) : d === "right" ? (v = `${-u}px`, g = s ? f : `${m}px`) : d === "left" && (v = `${a.floating.width + u}px`, g = s ? f : `${m}px`), { data: {
        x: v,
        y: g
      } };
    }
  };
}
function ml(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
const w_ = {
  side: "bottom",
  sideOffset: 0,
  sideFlip: !0,
  align: "center",
  alignOffset: 0,
  alignFlip: !0,
  arrowPadding: 0,
  avoidCollisions: !0,
  collisionBoundary: () => [],
  collisionPadding: 0,
  sticky: "partial",
  hideWhenDetached: !1,
  positionStrategy: "fixed",
  updatePositionStrategy: "optimized",
  prioritizePosition: !1
}, [M$, __] = Ze("PopperContent");
var x_ = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ Al({
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  }, { ...w_ }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = Sc(), { forwardRef: r, currentElement: s } = xe(), i = E(), u = E(), { width: d, height: c } = Ww(u), f = O(() => n.side + (n.align !== "center" ? `-${n.align}` : "")), p = O(() => typeof n.collisionPadding == "number" ? n.collisionPadding : {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...n.collisionPadding
    }), m = O(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), v = O(() => ({
      padding: p.value,
      boundary: m.value.filter(h_),
      altBoundary: m.value.length > 0
    })), g = O(() => ({
      mainAxis: n.sideFlip,
      crossAxis: n.alignFlip
    })), b = ww(() => [
      Lu({
        mainAxis: n.sideOffset + c.value,
        alignmentAxis: n.alignOffset
      }),
      n.prioritizePosition && n.avoidCollisions && Oo({
        ...v.value,
        ...g.value
      }),
      n.avoidCollisions && Nu({
        mainAxis: !0,
        crossAxis: !!n.prioritizePosition,
        limiter: n.sticky === "partial" ? zu() : void 0,
        ...v.value
      }),
      !n.prioritizePosition && n.avoidCollisions && Oo({
        ...v.value,
        ...g.value
      }),
      Vu({
        ...v.value,
        apply: ({ elements: M, rects: K, availableWidth: j, availableHeight: G }) => {
          const { width: W, height: ee } = K.reference, Z = M.floating.style;
          Z.setProperty("--reka-popper-available-width", `${j}px`), Z.setProperty("--reka-popper-available-height", `${G}px`), Z.setProperty("--reka-popper-anchor-width", `${W}px`), Z.setProperty("--reka-popper-anchor-height", `${ee}px`);
        }
      }),
      u.value && ju({
        element: u.value,
        padding: n.arrowPadding
      }),
      b_({
        arrowWidth: d.value,
        arrowHeight: c.value
      }),
      n.hideWhenDetached && qu({
        strategy: "referenceHidden",
        ...v.value
      })
    ]), _ = O(() => n.reference ?? o.anchor.value), { floatingStyles: $, placement: S, isPositioned: P, middlewareData: A } = Hu(_, i, {
      strategy: n.positionStrategy,
      placement: f,
      whileElementsMounted: (...M) => Ru(...M, {
        layoutShift: !n.disableUpdateOnLayoutShift,
        animationFrame: n.updatePositionStrategy === "always"
      }),
      middleware: b
    }), D = O(() => ml(S.value)[0]), B = O(() => ml(S.value)[1]);
    Bl(() => {
      P.value && a("placed");
    });
    const I = O(() => {
      var M;
      return ((M = A.value.arrow) == null ? void 0 : M.centerOffset) !== 0;
    }), F = E("");
    Se(() => {
      s.value && (F.value = window.getComputedStyle(s.value).zIndex);
    });
    const T = O(() => {
      var M;
      return ((M = A.value.arrow) == null ? void 0 : M.x) ?? 0;
    }), L = O(() => {
      var M;
      return ((M = A.value.arrow) == null ? void 0 : M.y) ?? 0;
    });
    return __({
      placedSide: D,
      onArrowChange: (M) => u.value = M,
      arrowX: T,
      arrowY: L,
      shouldHideArrow: I
    }), (M, K) => {
      var j, G, W;
      return y(), q("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-reka-popper-content-wrapper": "",
        style: Pt({
          ...l($),
          transform: l(P) ? l($).transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: F.value,
          "--reka-popper-transform-origin": [(j = l(A).transformOrigin) == null ? void 0 : j.x, (G = l(A).transformOrigin) == null ? void 0 : G.y].join(" "),
          ...((W = l(A).hide) == null ? void 0 : W.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [R(l(he), k({ ref: l(r) }, M.$attrs, {
        "as-child": n.asChild,
        as: M.as,
        "data-side": D.value,
        "data-align": B.value,
        style: { animation: l(P) ? void 0 : "none" }
      }), {
        default: h(() => [x(M.$slots, "default")]),
        _: 3
      }, 16, [
        "as-child",
        "as",
        "data-side",
        "data-align",
        "style"
      ])], 4);
    };
  }
}), C_ = x_, S_ = /* @__PURE__ */ w({
  __name: "ComboboxAnchor",
  props: {
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const { forwardRef: t } = xe();
    return (n, a) => (y(), C(l(y_), {
      "as-child": "",
      reference: n.reference
    }, {
      default: h(() => [R(l(he), k({
        ref: l(t),
        "as-child": n.asChild,
        as: n.as
      }, n.$attrs), {
        default: h(() => [x(n.$slots, "default")]),
        _: 3
      }, 16, ["as-child", "as"])]),
      _: 3
    }, 8, ["reference"]));
  }
}), $_ = S_;
function O_(e, t, n) {
  return e === void 0 ? !1 : Array.isArray(e) ? e.some((a) => Sa(a, t, n)) : Sa(e, t, n);
}
function Sa(e, t, n) {
  return e === void 0 || t === void 0 ? !1 : typeof e == "string" ? e === t : typeof n == "function" ? n(e, t) : typeof n == "string" ? (e == null ? void 0 : e[n]) === (t == null ? void 0 : t[n]) : Jn(e, t);
}
const [lr, E_] = Ze("ListboxRoot");
var A_ = /* @__PURE__ */ w({
  __name: "ListboxRoot",
  props: {
    modelValue: {
      type: null,
      required: !1
    },
    defaultValue: {
      type: null,
      required: !1
    },
    multiple: {
      type: Boolean,
      required: !1
    },
    orientation: {
      type: String,
      required: !1,
      default: "vertical"
    },
    dir: {
      type: String,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    selectionBehavior: {
      type: String,
      required: !1,
      default: "toggle"
    },
    highlightOnHover: {
      type: Boolean,
      required: !1
    },
    by: {
      type: [String, Function],
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    name: {
      type: String,
      required: !1
    },
    required: {
      type: Boolean,
      required: !1
    }
  },
  emits: [
    "update:modelValue",
    "highlight",
    "entryFocus",
    "leave"
  ],
  setup(e, { expose: t, emit: n }) {
    const a = e, o = n, { multiple: r, highlightOnHover: s, orientation: i, disabled: u, selectionBehavior: d, dir: c } = Ce(a), { getItems: f } = rr({ isProvider: !0 }), { handleTypeaheadSearch: p } = Gw(), { primitiveElement: m, currentElement: v } = ln(), g = Hw(), b = cc(c), _ = fc(v), $ = E(), S = E(!1), P = E(!0), A = Gt(a, "modelValue", o, {
      defaultValue: a.defaultValue ?? (r.value ? [] : void 0),
      passive: a.modelValue === void 0,
      deep: !0
    });
    function D(U) {
      if (S.value = !0, a.multiple) {
        const X = Array.isArray(A.value) ? [...A.value] : [], oe = X.findIndex((fe) => Sa(fe, U, a.by));
        a.selectionBehavior === "toggle" ? (oe === -1 ? X.push(U) : X.splice(oe, 1), A.value = X) : (A.value = [U], $.value = U);
      } else a.selectionBehavior === "toggle" && Sa(A.value, U, a.by) ? A.value = void 0 : A.value = U;
      setTimeout(() => {
        S.value = !1;
      }, 1);
    }
    const B = E(null), I = E(null), F = E(!1), T = E(!1), L = bo(), M = bo(), K = bo();
    function j() {
      return f().map((U) => U.ref).filter((U) => U.dataset.disabled !== "");
    }
    function G(U, X = !0) {
      if (!U) return;
      B.value = U, P.value && B.value.focus(), X && B.value.scrollIntoView({ block: "nearest" });
      const oe = f().find((fe) => fe.ref === U);
      o("highlight", oe);
    }
    function W(U) {
      if (F.value) K.trigger(U);
      else {
        const X = f().find((oe) => Sa(oe.value, U, a.by));
        X && (B.value = X.ref, G(X.ref));
      }
    }
    function ee(U) {
      B.value && B.value.isConnected && (U.preventDefault(), U.stopPropagation(), T.value || B.value.click());
    }
    function Z(U) {
      if (P.value) {
        if (S.value = !0, F.value) M.trigger(U);
        else {
          const X = U.altKey || U.ctrlKey || U.metaKey;
          if (X && U.key === "a" && r.value) {
            const oe = f(), fe = oe.map((ye) => ye.value);
            A.value = [...fe], U.preventDefault(), G(oe[oe.length - 1].ref);
          } else if (!X) {
            const oe = p(U.key, f());
            oe && G(oe);
          }
        }
        setTimeout(() => {
          S.value = !1;
        }, 1);
      }
    }
    function z() {
      T.value = !0;
    }
    function se() {
      re(() => {
        T.value = !1;
      });
    }
    function ie() {
      re(() => {
        const U = new KeyboardEvent("keydown", { key: "PageUp" });
        qe(U);
      });
    }
    function Te(U) {
      const X = B.value;
      X != null && X.isConnected && (I.value = X), B.value = null, o("leave", U);
    }
    function Me(U) {
      var oe, fe;
      const X = new CustomEvent("listbox.entryFocus", {
        bubbles: !1,
        cancelable: !0
      });
      if ((oe = U.currentTarget) == null || oe.dispatchEvent(X), o("entryFocus", X), !X.defaultPrevented)
        if (I.value) G(I.value);
        else {
          const ye = (fe = j()) == null ? void 0 : fe[0];
          G(ye);
        }
    }
    function qe(U) {
      const X = _c(U, i.value, b.value);
      if (!X) return;
      let oe = j();
      if (B.value) {
        if (X === "last") oe.reverse();
        else if (X === "prev" || X === "next") {
          X === "prev" && oe.reverse();
          const fe = oe.indexOf(B.value);
          oe = oe.slice(fe + 1);
        }
        et(U, oe[0]);
      }
      if (oe.length) {
        const fe = !B.value && X === "prev" ? oe.length - 1 : 0;
        G(oe[fe]);
      }
      if (F.value) return M.trigger(U);
    }
    function et(U, X) {
      var fe;
      if (!(F.value || a.selectionBehavior !== "replace" || !r.value || !Array.isArray(A.value) || (U.altKey || U.ctrlKey || U.metaKey) && !U.shiftKey) && U.shiftKey) {
        const ye = f().filter((Ae) => Ae.ref.dataset.disabled !== "");
        let J = (fe = ye.find((Ae) => Ae.ref === X)) == null ? void 0 : fe.value;
        if (U.key === g.END ? J = ye[ye.length - 1].value : U.key === g.HOME && (J = ye[0].value), !J || !$.value) return;
        const be = bw(ye.map((Ae) => Ae.value), $.value, J);
        A.value = be;
      }
    }
    async function ut(U) {
      if (await re(), F.value) L.trigger(U);
      else {
        const X = j(), oe = X.find((fe) => fe.dataset.state === "checked");
        oe ? G(oe) : X.length && G(X[0]);
      }
    }
    return te(A, () => {
      S.value || re(() => {
        ut();
      });
    }, {
      immediate: !0,
      deep: !0
    }), t({
      highlightedElement: B,
      highlightItem: W,
      highlightFirstItem: ie,
      highlightSelected: ut,
      getItems: f
    }), E_({
      modelValue: A,
      onValueChange: D,
      multiple: r,
      orientation: i,
      dir: b,
      disabled: u,
      highlightOnHover: s,
      highlightedElement: B,
      isVirtual: F,
      virtualFocusHook: L,
      virtualKeydownHook: M,
      virtualHighlightHook: K,
      by: a.by,
      firstValue: $,
      selectionBehavior: d,
      focusable: P,
      onLeave: Te,
      onEnter: Me,
      changeHighlight: G,
      onKeydownEnter: ee,
      onKeydownNavigation: qe,
      onKeydownTypeAhead: Z,
      onCompositionStart: z,
      onCompositionEnd: se,
      highlightFirstItem: ie
    }), (U, X) => (y(), C(l(he), {
      ref_key: "primitiveElement",
      ref: m,
      as: U.as,
      "as-child": U.asChild,
      dir: l(b),
      "data-disabled": l(u) ? "" : void 0,
      onPointerleave: Te,
      onFocusout: X[0] || (X[0] = async (oe) => {
        const fe = oe.relatedTarget || oe.target;
        await re(), B.value && l(v) && !l(v).contains(fe) && Te(oe);
      })
    }, {
      default: h(() => [x(U.$slots, "default", { modelValue: l(A) }), l(_) && U.name ? (y(), C(l(xc), {
        key: 0,
        name: U.name,
        value: l(A),
        disabled: l(u),
        required: U.required
      }, null, 8, [
        "name",
        "value",
        "disabled",
        "required"
      ])) : ce("v-if", !0)]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "dir",
      "data-disabled"
    ]));
  }
}), B_ = A_, P_ = /* @__PURE__ */ w({
  __name: "ListboxContent",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const { CollectionSlot: t } = rr(), n = lr(), a = ic(!1, 10);
    return (o, r) => (y(), C(l(t), null, {
      default: h(() => [R(l(he), {
        role: "listbox",
        as: o.as,
        "as-child": o.asChild,
        tabindex: l(n).focusable.value ? l(n).highlightedElement.value ? "-1" : "0" : void 0,
        "aria-orientation": l(n).orientation.value,
        "aria-multiselectable": !!l(n).multiple.value,
        "data-orientation": l(n).orientation.value,
        onMousedown: r[0] || (r[0] = ke((s) => a.value = !0, ["left"])),
        onFocus: r[1] || (r[1] = (s) => {
          l(a) || l(n).onEnter(s);
        }),
        onKeydown: [
          r[2] || (r[2] = nt((s) => {
            l(n).orientation.value === "vertical" && (s.key === "ArrowLeft" || s.key === "ArrowRight") || l(n).orientation.value === "horizontal" && (s.key === "ArrowUp" || s.key === "ArrowDown") || (s.preventDefault(), l(n).focusable.value && l(n).onKeydownNavigation(s));
          }, [
            "down",
            "up",
            "left",
            "right",
            "home",
            "end"
          ])),
          nt(l(n).onKeydownEnter, ["enter"]),
          l(n).onKeydownTypeAhead
        ]
      }, {
        default: h(() => [x(o.$slots, "default")]),
        _: 3
      }, 8, [
        "as",
        "as-child",
        "tabindex",
        "aria-orientation",
        "aria-multiselectable",
        "data-orientation",
        "onKeydown"
      ])]),
      _: 3
    }));
  }
}), D_ = P_, k_ = /* @__PURE__ */ w({
  __name: "ListboxFilter",
  props: {
    modelValue: {
      type: String,
      required: !1
    },
    autoFocus: {
      type: Boolean,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "input"
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = Gt(n, "modelValue", t, {
      defaultValue: "",
      passive: n.modelValue === void 0
    }), r = lr(), { primitiveElement: s, currentElement: i } = ln(), u = O(() => n.disabled || r.disabled.value || !1), d = E();
    return cu(() => {
      var c;
      return d.value = (c = r.highlightedElement.value) == null ? void 0 : c.id;
    }), ue(() => {
      r.focusable.value = !1, setTimeout(() => {
        var c;
        n.autoFocus && ((c = i.value) == null || c.focus());
      }, 1);
    }), Ge(() => {
      r.focusable.value = !0;
    }), (c, f) => (y(), C(l(he), {
      ref_key: "primitiveElement",
      ref: s,
      as: c.as,
      "as-child": c.asChild,
      value: l(o),
      disabled: u.value ? "" : void 0,
      "data-disabled": u.value ? "" : void 0,
      "aria-disabled": u.value ?? void 0,
      "aria-activedescendant": d.value,
      type: "text",
      onKeydown: [nt(ke(l(r).onKeydownNavigation, ["prevent"]), [
        "down",
        "up",
        "home",
        "end"
      ]), nt(l(r).onKeydownEnter, ["enter"])],
      onInput: f[0] || (f[0] = (p) => {
        o.value = p.target.value, l(r).highlightFirstItem();
      }),
      onCompositionstart: l(r).onCompositionStart,
      onCompositionend: l(r).onCompositionEnd
    }, {
      default: h(() => [x(c.$slots, "default", { modelValue: l(o) })]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "value",
      "disabled",
      "data-disabled",
      "aria-disabled",
      "aria-activedescendant",
      "onKeydown",
      "onCompositionstart",
      "onCompositionend"
    ]));
  }
}), T_ = k_;
const [R$, I_] = Ze("ListboxGroup");
var F_ = /* @__PURE__ */ w({
  __name: "ListboxGroup",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e, n = Ct(void 0, "reka-listbox-group");
    return I_({ id: n }), (a, o) => (y(), C(l(he), k({ role: "group" }, t, { "aria-labelledby": l(n) }), {
      default: h(() => [x(a.$slots, "default")]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), M_ = F_;
const R_ = "listbox.select", [L_, N_] = Ze("ListboxItem");
var V_ = /* @__PURE__ */ w({
  __name: "ListboxItem",
  props: {
    value: {
      type: null,
      required: !0
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "div"
    }
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = Ct(void 0, "reka-listbox-item"), { CollectionItem: r } = rr(), { forwardRef: s, currentElement: i } = xe(), u = lr(), d = O(() => i.value === u.highlightedElement.value), c = O(() => O_(u.modelValue.value, n.value, u.by)), f = O(() => u.disabled.value || n.disabled);
    async function p(v) {
      a("select", v), !(v != null && v.defaultPrevented) && !f.value && v && (u.onValueChange(n.value), u.changeHighlight(i.value));
    }
    function m(v) {
      const g = {
        originalEvent: v,
        value: n.value
      };
      _s(R_, p, g);
    }
    return N_({ isSelected: c }), (v, g) => (y(), C(l(r), { value: v.value }, {
      default: h(() => [vf([d.value, c.value], () => R(l(he), k({ id: l(o) }, v.$attrs, {
        ref: l(s),
        role: "option",
        tabindex: l(u).focusable.value ? d.value ? "0" : "-1" : -1,
        "aria-selected": c.value,
        as: v.as,
        "as-child": v.asChild,
        disabled: f.value ? "" : void 0,
        "data-disabled": f.value ? "" : void 0,
        "data-highlighted": d.value ? "" : void 0,
        "data-state": c.value ? "checked" : "unchecked",
        onClick: m,
        onKeydown: nt(ke(m, ["prevent"]), ["space"]),
        onPointermove: g[0] || (g[0] = (b) => {
          l(u).highlightedElement.value !== l(i) && (l(u).highlightOnHover.value ? l(u).changeHighlight(l(i), !1) : l(u).focusable.value || l(u).changeHighlight(l(i), !1));
        })
      }), {
        default: h(() => [x(v.$slots, "default")]),
        _: 3
      }, 16, [
        "id",
        "tabindex",
        "aria-selected",
        "as",
        "as-child",
        "disabled",
        "data-disabled",
        "data-highlighted",
        "data-state",
        "onKeydown"
      ]), g, 1)]),
      _: 3
    }, 8, ["value"]));
  }
}), q_ = V_, z_ = /* @__PURE__ */ w({
  __name: "ListboxItemIndicator",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "span"
    }
  },
  setup(e) {
    const t = e;
    xe();
    const n = L_();
    return (a, o) => l(n).isSelected.value ? (y(), C(l(he), k({
      key: 0,
      "aria-hidden": "true"
    }, t), {
      default: h(() => [x(a.$slots, "default")]),
      _: 3
    }, 16)) : ce("v-if", !0);
  }
}), j_ = z_;
const [Xt, K_] = Ze("ComboboxRoot");
var H_ = /* @__PURE__ */ w({
  __name: "ComboboxRoot",
  props: {
    open: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    defaultOpen: {
      type: Boolean,
      required: !1
    },
    resetSearchTermOnBlur: {
      type: Boolean,
      required: !1,
      default: !0
    },
    resetSearchTermOnSelect: {
      type: Boolean,
      required: !1,
      default: !0
    },
    openOnFocus: {
      type: Boolean,
      required: !1,
      default: !1
    },
    openOnClick: {
      type: Boolean,
      required: !1,
      default: !1
    },
    ignoreFilter: {
      type: Boolean,
      required: !1
    },
    modelValue: {
      type: null,
      required: !1
    },
    defaultValue: {
      type: null,
      required: !1
    },
    multiple: {
      type: Boolean,
      required: !1
    },
    dir: {
      type: String,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    highlightOnHover: {
      type: Boolean,
      required: !1
    },
    by: {
      type: [String, Function],
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    name: {
      type: String,
      required: !1
    },
    required: {
      type: Boolean,
      required: !1
    }
  },
  emits: [
    "update:modelValue",
    "highlight",
    "update:open"
  ],
  setup(e, { expose: t, emit: n }) {
    var j, G, W;
    const a = e, o = n, { primitiveElement: r, currentElement: s } = ln(), { multiple: i, disabled: u, ignoreFilter: d, resetSearchTermOnSelect: c, openOnFocus: f, openOnClick: p, dir: m } = Ce(a), v = cc(m), g = Gt(a, "modelValue", o, {
      defaultValue: a.defaultValue ?? (i.value ? [] : void 0),
      passive: a.modelValue === void 0,
      deep: !0
    }), b = Gt(a, "open", o, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    });
    async function _(ee) {
      var Z, z;
      b.value = ee, L.value = "", ee ? (await re(), (Z = r.value) == null || Z.highlightSelected(), S.value = !0) : S.value = !1, (z = A.value) == null || z.focus(), setTimeout(() => {
        !ee && a.resetSearchTermOnBlur && $.trigger();
      }, 1);
    }
    const $ = bo(), S = E(!1), P = E(!1), A = E(), D = E(), B = O(() => {
      var ee;
      return ((ee = r.value) == null ? void 0 : ee.highlightedElement) ?? void 0;
    }), I = E(/* @__PURE__ */ new Map()), F = E(/* @__PURE__ */ new Map()), { contains: T } = Nw({ sensitivity: "base" }), L = E(""), M = O((ee) => {
      if (!L.value || a.ignoreFilter || P.value) return {
        count: I.value.size,
        items: (ee == null ? void 0 : ee.items) ?? /* @__PURE__ */ new Map(),
        groups: (ee == null ? void 0 : ee.groups) ?? new Set(F.value.keys())
      };
      let Z = 0;
      const z = /* @__PURE__ */ new Map(), se = /* @__PURE__ */ new Set();
      for (const [ie, Te] of I.value) {
        const Me = T(Te, L.value);
        z.set(ie, Me ? 1 : 0), Me && Z++;
      }
      for (const [ie, Te] of F.value) for (const Me of Te) if (z.get(Me) > 0) {
        se.add(ie);
        break;
      }
      return {
        count: Z,
        items: z,
        groups: se
      };
    }), K = Qe();
    return ue(() => {
      var ee, Z, z;
      K != null && K.exposed && (K.exposed.highlightItem = (ee = r.value) == null ? void 0 : ee.highlightItem, K.exposed.highlightFirstItem = (Z = r.value) == null ? void 0 : Z.highlightFirstItem, K.exposed.highlightSelected = (z = r.value) == null ? void 0 : z.highlightSelected);
    }), t({
      filtered: M,
      highlightedElement: B,
      highlightItem: (j = r.value) == null ? void 0 : j.highlightItem,
      highlightFirstItem: (G = r.value) == null ? void 0 : G.highlightFirstItem,
      highlightSelected: (W = r.value) == null ? void 0 : W.highlightSelected
    }), K_({
      modelValue: g,
      multiple: i,
      disabled: u,
      open: b,
      onOpenChange: _,
      contentId: "",
      isUserInputted: S,
      isVirtual: P,
      inputElement: A,
      highlightedElement: B,
      onInputElementChange: (ee) => A.value = ee,
      triggerElement: D,
      onTriggerElementChange: (ee) => D.value = ee,
      parentElement: s,
      resetSearchTermOnSelect: c,
      onResetSearchTerm: $.on,
      allItems: I,
      allGroups: F,
      filterSearch: L,
      filterState: M,
      ignoreFilter: d,
      openOnFocus: f,
      openOnClick: p
    }), (ee, Z) => (y(), C(l(m_), null, {
      default: h(() => [R(l(B_), k({
        ref_key: "primitiveElement",
        ref: r
      }, ee.$attrs, {
        modelValue: l(g),
        "onUpdate:modelValue": Z[0] || (Z[0] = (z) => ct(g) ? g.value = z : null),
        style: { pointerEvents: l(b) ? "auto" : void 0 },
        as: ee.as,
        "as-child": ee.asChild,
        dir: l(v),
        multiple: l(i),
        name: ee.name,
        required: ee.required,
        disabled: l(u),
        "highlight-on-hover": !0,
        by: a.by,
        onHighlight: Z[1] || (Z[1] = (z) => o("highlight", z))
      }), {
        default: h(() => [x(ee.$slots, "default", {
          open: l(b),
          modelValue: l(g)
        })]),
        _: 3
      }, 16, [
        "modelValue",
        "style",
        "as",
        "as-child",
        "dir",
        "multiple",
        "name",
        "required",
        "disabled",
        "by"
      ])]),
      _: 3
    }));
  }
}), W_ = H_;
const [L$, U_] = Ze("ComboboxContent");
var G_ = /* @__PURE__ */ w({
  __name: "ComboboxContentImpl",
  props: {
    position: {
      type: String,
      required: !1,
      default: "inline"
    },
    bodyLock: {
      type: Boolean,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside"
  ],
  setup(e, { emit: t }) {
    const n = e, a = t, { position: o } = Ce(n), r = Xt(), { forwardRef: s, currentElement: i } = xe();
    uc(n.bodyLock), vc(r.parentElement);
    const u = O(() => n.position === "popper" ? n : {}), d = Bn(u.value), c = {
      boxSizing: "border-box",
      "--reka-combobox-content-transform-origin": "var(--reka-popper-transform-origin)",
      "--reka-combobox-content-available-width": "var(--reka-popper-available-width)",
      "--reka-combobox-content-available-height": "var(--reka-popper-available-height)",
      "--reka-combobox-trigger-width": "var(--reka-popper-anchor-width)",
      "--reka-combobox-trigger-height": "var(--reka-popper-anchor-height)"
    };
    U_({ position: o });
    const f = E(!1);
    return ue(() => {
      r.inputElement.value && (f.value = i.value.contains(r.inputElement.value), f.value && r.inputElement.value.focus());
    }), Ge(() => {
      var p;
      f.value && ((p = r.triggerElement.value) == null || p.focus());
    }), (p, m) => (y(), C(l(D_), { "as-child": "" }, {
      default: h(() => [R(l(yc), {
        "as-child": "",
        "disable-outside-pointer-events": p.disableOutsidePointerEvents,
        onDismiss: m[0] || (m[0] = (v) => l(r).onOpenChange(!1)),
        onFocusOutside: m[1] || (m[1] = (v) => {
          var g;
          (g = l(r).parentElement.value) != null && g.contains(v.target) && v.preventDefault(), a("focusOutside", v);
        }),
        onInteractOutside: m[2] || (m[2] = (v) => a("interactOutside", v)),
        onEscapeKeyDown: m[3] || (m[3] = (v) => a("escapeKeyDown", v)),
        onPointerDownOutside: m[4] || (m[4] = (v) => {
          var g;
          (g = l(r).parentElement.value) != null && g.contains(v.target) && v.preventDefault(), a("pointerDownOutside", v);
        })
      }, {
        default: h(() => [(y(), C(at(l(o) === "popper" ? l(C_) : l(he)), k({
          ...p.$attrs,
          ...l(d)
        }, {
          id: l(r).contentId,
          ref: l(s),
          "data-state": l(r).open.value ? "open" : "closed",
          style: {
            display: "flex",
            flexDirection: "column",
            outline: "none",
            ...l(o) === "popper" ? c : {}
          }
        }), {
          default: h(() => [x(p.$slots, "default")]),
          _: 3
        }, 16, [
          "id",
          "data-state",
          "style"
        ]))]),
        _: 3
      }, 8, ["disable-outside-pointer-events"])]),
      _: 3
    }));
  }
}), Y_ = G_, X_ = /* @__PURE__ */ w({
  __name: "ComboboxCancel",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    }
  },
  setup(e) {
    const t = e;
    xe();
    const n = Xt();
    function a() {
      n.filterSearch.value = "", n.inputElement.value && (n.inputElement.value.value = "", n.inputElement.value.focus());
    }
    return (o, r) => (y(), C(l(he), k({ type: o.as === "button" ? "button" : void 0 }, t, {
      tabindex: "-1",
      onClick: a
    }), {
      default: h(() => [x(o.$slots, "default")]),
      _: 3
    }, 16, ["type"]));
  }
}), N$ = X_, Q_ = /* @__PURE__ */ w({
  __name: "ComboboxContent",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    position: {
      type: String,
      required: !1
    },
    bodyLock: {
      type: Boolean,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside"
  ],
  setup(e, { emit: t }) {
    const o = It(e, t), { forwardRef: r } = xe(), s = Xt();
    return s.contentId || (s.contentId = Ct(void 0, "reka-combobox-content")), (i, u) => (y(), C(l(Ua), { present: i.forceMount || l(s).open.value }, {
      default: h(() => [R(Y_, k({
        ...l(o),
        ...i.$attrs
      }, { ref: l(r) }), {
        default: h(() => [x(i.$slots, "default")]),
        _: 3
      }, 16)]),
      _: 3
    }, 8, ["present"]));
  }
}), J_ = Q_, Z_ = /* @__PURE__ */ w({
  __name: "ComboboxEmpty",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e, n = Xt(), a = O(() => n.ignoreFilter.value ? n.allItems.value.size === 0 : n.filterState.value.count === 0);
    return (o, r) => a.value ? (y(), C(l(he), Q(k({ key: 0 }, t)), {
      default: h(() => [x(o.$slots, "default", {}, () => [r[0] || (r[0] = ge("No options"))])]),
      _: 3
    }, 16)) : ce("v-if", !0);
  }
}), ex = Z_;
const [$c, tx] = Ze("ComboboxGroup");
var nx = /* @__PURE__ */ w({
  __name: "ComboboxGroup",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e, n = Ct(void 0, "reka-combobox-group"), a = Xt(), o = O(() => a.ignoreFilter.value ? !0 : a.filterSearch.value ? a.filterState.value.groups.has(n) : !0), r = tx({
      id: n,
      labelId: ""
    });
    return ue(() => {
      a.allGroups.value.has(n) || a.allGroups.value.set(n, /* @__PURE__ */ new Set());
    }), Ge(() => {
      a.allGroups.value.delete(n);
    }), (s, i) => (y(), C(l(M_), k({
      id: l(n),
      "aria-labelledby": l(r).labelId
    }, t, { hidden: o.value ? void 0 : !0 }), {
      default: h(() => [x(s.$slots, "default")]),
      _: 3
    }, 16, [
      "id",
      "aria-labelledby",
      "hidden"
    ]));
  }
}), ax = nx, ox = /* @__PURE__ */ w({
  __name: "ComboboxInput",
  props: {
    displayValue: {
      type: Function,
      required: !1
    },
    modelValue: {
      type: String,
      required: !1
    },
    autoFocus: {
      type: Boolean,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "input"
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = Xt(), r = lr(), { primitiveElement: s, currentElement: i } = ln(), u = Gt(n, "modelValue", a, { passive: n.modelValue === void 0 });
    ue(() => {
      i.value && o.onInputElementChange(i.value);
    });
    function d(v) {
      o.open.value || o.onOpenChange(!0);
    }
    function c(v) {
      const g = v.target;
      o.open.value ? o.filterSearch.value = g.value : (o.onOpenChange(!0), re(() => {
        g.value && (o.filterSearch.value = g.value, r.highlightFirstItem());
      }));
    }
    function f() {
      o.openOnFocus.value && !o.open.value && o.onOpenChange(!0);
    }
    function p() {
      o.openOnClick.value && !o.open.value && o.onOpenChange(!0);
    }
    function m() {
      const v = o.modelValue.value;
      n.displayValue ? u.value = n.displayValue(v) : !o.multiple.value && v && !Array.isArray(v) && typeof v != "object" ? u.value = v.toString() : u.value = "", re(() => {
        u.value = u.value;
      });
    }
    return o.onResetSearchTerm(() => {
      m();
    }), te(o.modelValue, async () => {
      !o.isUserInputted.value && o.resetSearchTermOnSelect.value && m();
    }, {
      immediate: !0,
      deep: !0
    }), te(o.filterState, () => {
      !o.isVirtual.value && !o.highlightedElement.value && r.highlightFirstItem();
    }), (v, g) => (y(), C(l(T_), {
      ref_key: "primitiveElement",
      ref: s,
      modelValue: l(u),
      "onUpdate:modelValue": g[0] || (g[0] = (b) => ct(u) ? u.value = b : null),
      as: v.as,
      "as-child": v.asChild,
      "auto-focus": v.autoFocus,
      disabled: v.disabled,
      "aria-expanded": l(o).open.value,
      "aria-controls": l(o).contentId,
      "aria-autocomplete": "list",
      role: "combobox",
      autocomplete: "off",
      onClick: p,
      onInput: c,
      onKeydown: nt(ke(d, ["prevent"]), ["down", "up"]),
      onFocus: f
    }, {
      default: h(() => [x(v.$slots, "default")]),
      _: 3
    }, 8, [
      "modelValue",
      "as",
      "as-child",
      "auto-focus",
      "disabled",
      "aria-expanded",
      "aria-controls",
      "onKeydown"
    ]));
  }
}), rx = ox, lx = /* @__PURE__ */ w({
  __name: "ComboboxItem",
  props: {
    textValue: {
      type: String,
      required: !1
    },
    value: {
      type: null,
      required: !0
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = Ct(void 0, "reka-combobox-item"), r = Xt(), s = $c(null), { primitiveElement: i, currentElement: u } = ln();
    if (n.value === "") throw new Error("A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder.");
    const d = O(() => {
      if (r.isVirtual.value || r.ignoreFilter.value || !r.filterSearch.value) return !0;
      {
        const c = r.filterState.value.items.get(o);
        return c === void 0 ? !0 : c > 0;
      }
    });
    return ue(() => {
      var f;
      r.allItems.value.set(o, n.textValue || u.value.textContent || u.value.innerText);
      const c = s == null ? void 0 : s.id;
      c && (r.allGroups.value.has(c) ? (f = r.allGroups.value.get(c)) == null || f.add(o) : r.allGroups.value.set(c, /* @__PURE__ */ new Set([o])));
    }), Ge(() => {
      r.allItems.value.delete(o);
    }), (c, f) => d.value ? (y(), C(l(q_), k({ key: 0 }, n, {
      id: l(o),
      ref_key: "primitiveElement",
      ref: i,
      disabled: l(r).disabled.value || c.disabled,
      onSelect: f[0] || (f[0] = (p) => {
        a("select", p), !p.defaultPrevented && !l(r).multiple.value && !c.disabled && !l(r).disabled.value && (p.preventDefault(), l(r).onOpenChange(!1), l(r).modelValue.value = n.value);
      })
    }), {
      default: h(() => [x(c.$slots, "default", {}, () => [ge(pe(c.value), 1)])]),
      _: 3
    }, 16, ["id", "disabled"])) : ce("v-if", !0);
  }
}), sx = lx, ix = /* @__PURE__ */ w({
  __name: "ComboboxItemIndicator",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "span"
    }
  },
  setup(e) {
    const t = e;
    return (n, a) => (y(), C(l(j_), Q(ne(t)), {
      default: h(() => [x(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), V$ = ix, ux = /* @__PURE__ */ w({
  __name: "ComboboxLabel",
  props: {
    for: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "div"
    }
  },
  setup(e) {
    const t = e;
    xe();
    const n = $c({
      id: "",
      labelId: ""
    });
    return n.labelId || (n.labelId = Ct(void 0, "reka-combobox-group-label")), (a, o) => (y(), C(l(he), k(t, { id: l(n).labelId }), {
      default: h(() => [x(a.$slots, "default")]),
      _: 3
    }, 16, ["id"]));
  }
}), dx = ux, cx = /* @__PURE__ */ w({
  __name: "ComboboxPortal",
  props: {
    to: {
      type: null,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    defer: {
      type: Boolean,
      required: !1
    },
    forceMount: {
      type: Boolean,
      required: !1
    }
  },
  setup(e) {
    const t = e;
    return (n, a) => (y(), C(l(wc), Q(ne(t)), {
      default: h(() => [x(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), fx = cx, px = /* @__PURE__ */ w({
  __name: "ComboboxSeparator",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e;
    return xe(), (n, a) => (y(), C(l(he), k(t, { "aria-hidden": "true" }), {
      default: h(() => [x(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), vx = px, mx = /* @__PURE__ */ w({
  __name: "ComboboxTrigger",
  props: {
    disabled: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    }
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: a } = xe(), o = Xt(), r = O(() => t.disabled || o.disabled.value || !1);
    return ue(() => {
      a.value && o.onTriggerElementChange(a.value);
    }), (s, i) => (y(), C(l(he), k(t, {
      ref: l(n),
      type: s.as === "button" ? "button" : void 0,
      tabindex: "-1",
      "aria-label": "Show popup",
      "aria-haspopup": "listbox",
      "aria-expanded": l(o).open.value,
      "aria-controls": l(o).contentId,
      "data-state": l(o).open.value ? "open" : "closed",
      disabled: r.value,
      "data-disabled": r.value ? "" : void 0,
      "aria-disabled": r.value ?? void 0,
      onClick: i[0] || (i[0] = (u) => l(o).onOpenChange(!l(o).open.value))
    }), {
      default: h(() => [x(s.$slots, "default")]),
      _: 3
    }, 16, [
      "type",
      "aria-expanded",
      "aria-controls",
      "data-state",
      "disabled",
      "data-disabled",
      "aria-disabled"
    ]));
  }
}), q$ = mx;
function gx(e) {
  const t = nr({ nonce: E() });
  return O(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.nonce) == null ? void 0 : n.value);
  });
}
var yx = /* @__PURE__ */ w({
  __name: "ComboboxViewport",
  props: {
    nonce: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e, { forwardRef: n } = xe(), { nonce: a } = Ce(t), o = gx(a), r = Xt();
    return (s, i) => (y(), q(Ee, null, [R(l(he), k({
      ...s.$attrs,
      ...t
    }, {
      ref: l(n),
      "data-reka-combobox-viewport": "",
      role: "presentation",
      style: {
        position: "relative",
        flex: l(r).isVirtual.value ? void 0 : 1,
        overflow: "auto"
      }
    }), {
      default: h(() => [x(s.$slots, "default")]),
      _: 3
    }, 16, ["style"]), R(l(he), {
      as: "style",
      nonce: l(o)
    }, {
      default: h(() => i[0] || (i[0] = [ge(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-reka-combobox-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-reka-combobox-viewport]::-webkit-scrollbar { display: none; } ")])),
      _: 1,
      __: [0]
    }, 8, ["nonce"])], 64));
  }
}), hx = yx, bx = /* @__PURE__ */ w({
  __name: "PaginationEllipsis",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e;
    return xe(), (n, a) => (y(), C(l(he), k(t, { "data-type": "ellipsis" }), {
      default: h(() => [x(n.$slots, "default", {}, () => [a[0] || (a[0] = ge("…"))])]),
      _: 3
    }, 16));
  }
}), wx = bx;
const [va, _x] = Ze("PaginationRoot");
var xx = /* @__PURE__ */ w({
  __name: "PaginationRoot",
  props: {
    page: {
      type: Number,
      required: !1
    },
    defaultPage: {
      type: Number,
      required: !1,
      default: 1
    },
    itemsPerPage: {
      type: Number,
      required: !0
    },
    total: {
      type: Number,
      required: !1,
      default: 0
    },
    siblingCount: {
      type: Number,
      required: !1,
      default: 2
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    showEdges: {
      type: Boolean,
      required: !1,
      default: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "nav"
    }
  },
  emits: ["update:page"],
  setup(e, { emit: t }) {
    const n = e, a = t, { siblingCount: o, disabled: r, showEdges: s } = Ce(n);
    xe();
    const i = Gt(n, "page", a, {
      defaultValue: n.defaultPage,
      passive: n.page === void 0
    }), u = O(() => Math.max(1, Math.ceil(n.total / (n.itemsPerPage || 1))));
    return _x({
      page: i,
      onPageChange(d) {
        i.value = d;
      },
      pageCount: u,
      siblingCount: o,
      disabled: r,
      showEdges: s
    }), (d, c) => (y(), C(l(he), {
      as: d.as,
      "as-child": d.asChild
    }, {
      default: h(() => [x(d.$slots, "default", {
        page: l(i),
        pageCount: u.value
      })]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Cx = xx, Sx = /* @__PURE__ */ w({
  __name: "PaginationFirst",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    }
  },
  setup(e) {
    const t = e, n = va();
    xe();
    const a = O(() => n.page.value === 1 || n.disabled.value);
    return (o, r) => (y(), C(l(he), k(t, {
      "aria-label": "First Page",
      type: o.as === "button" ? "button" : void 0,
      disabled: a.value,
      onClick: r[0] || (r[0] = (s) => !a.value && l(n).onPageChange(1))
    }), {
      default: h(() => [x(o.$slots, "default", {}, () => [r[1] || (r[1] = ge("First page"))])]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), $x = Sx, Ox = /* @__PURE__ */ w({
  __name: "PaginationLast",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    }
  },
  setup(e) {
    const t = e, n = va();
    xe();
    const a = O(() => n.page.value === n.pageCount.value || n.disabled.value);
    return (o, r) => (y(), C(l(he), k(t, {
      "aria-label": "Last Page",
      type: o.as === "button" ? "button" : void 0,
      disabled: a.value,
      onClick: r[0] || (r[0] = (s) => !a.value && l(n).onPageChange(l(n).pageCount.value))
    }), {
      default: h(() => [x(o.$slots, "default", {}, () => [r[1] || (r[1] = ge("Last page"))])]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), Ex = Ox;
function en(e, t) {
  const n = t - e + 1;
  return Array.from({ length: n }, (a, o) => o + e);
}
function Ax(e) {
  return e.map((t) => typeof t == "number" ? {
    type: "page",
    value: t
  } : { type: "ellipsis" });
}
const fo = "ellipsis";
function Bx(e, t, n, a) {
  const r = t, s = Math.max(e - n, 1), i = Math.min(e + n, r);
  if (a) {
    const d = Math.min(2 * n + 5, t) - 2, c = s > 3 && Math.abs(r - d - 1 + 1) > 2 && Math.abs(s - 1) > 2, f = i < r - 2 && Math.abs(r - d) > 2 && Math.abs(r - i) > 2;
    if (!c && f)
      return [
        ...en(1, d),
        fo,
        r
      ];
    if (c && !f) {
      const m = en(r - d + 1, r);
      return [
        1,
        fo,
        ...m
      ];
    }
    if (c && f) {
      const m = en(s, i);
      return [
        1,
        fo,
        ...m,
        fo,
        r
      ];
    }
    return en(1, r);
  } else {
    const u = n * 2 + 1;
    return t < u ? en(1, r) : e <= n + 1 ? en(1, u) : t - e <= n ? en(t - u + 1, r) : en(s, i);
  }
}
var Px = /* @__PURE__ */ w({
  __name: "PaginationList",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e;
    xe();
    const n = va(), a = O(() => Ax(Bx(n.page.value, n.pageCount.value, n.siblingCount.value, n.showEdges.value)));
    return (o, r) => (y(), C(l(he), Q(ne(t)), {
      default: h(() => [x(o.$slots, "default", { items: a.value })]),
      _: 3
    }, 16));
  }
}), Dx = Px, kx = /* @__PURE__ */ w({
  __name: "PaginationListItem",
  props: {
    value: {
      type: Number,
      required: !0
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    }
  },
  setup(e) {
    const t = e;
    xe();
    const n = va(), a = O(() => n.page.value === t.value), o = O(() => n.disabled.value);
    return (r, s) => (y(), C(l(he), k(t, {
      "data-type": "page",
      "aria-label": `Page ${r.value}`,
      "aria-current": a.value ? "page" : void 0,
      "data-selected": a.value ? "true" : void 0,
      disabled: o.value,
      type: r.as === "button" ? "button" : void 0,
      onClick: s[0] || (s[0] = (i) => !o.value && l(n).onPageChange(r.value))
    }), {
      default: h(() => [x(r.$slots, "default", {}, () => [ge(pe(r.value), 1)])]),
      _: 3
    }, 16, [
      "aria-label",
      "aria-current",
      "data-selected",
      "disabled",
      "type"
    ]));
  }
}), Tx = kx, Ix = /* @__PURE__ */ w({
  __name: "PaginationNext",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    }
  },
  setup(e) {
    const t = e;
    xe();
    const n = va(), a = O(() => n.page.value === n.pageCount.value || n.disabled.value);
    return (o, r) => (y(), C(l(he), k(t, {
      "aria-label": "Next Page",
      type: o.as === "button" ? "button" : void 0,
      disabled: a.value,
      onClick: r[0] || (r[0] = (s) => !a.value && l(n).onPageChange(l(n).page.value + 1))
    }), {
      default: h(() => [x(o.$slots, "default", {}, () => [r[1] || (r[1] = ge("Next page"))])]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), Fx = Ix, Mx = /* @__PURE__ */ w({
  __name: "PaginationPrev",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    }
  },
  setup(e) {
    const t = e;
    xe();
    const n = va(), a = O(() => n.page.value === 1 || n.disabled.value);
    return (o, r) => (y(), C(l(he), k(t, {
      "aria-label": "Previous Page",
      type: o.as === "button" ? "button" : void 0,
      disabled: a.value,
      onClick: r[0] || (r[0] = (s) => !a.value && l(n).onPageChange(l(n).page.value - 1))
    }), {
      default: h(() => [x(o.$slots, "default", {}, () => [r[1] || (r[1] = ge("Prev page"))])]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), Rx = Mx;
const z$ = /* @__PURE__ */ w({
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
    const n = e, a = t, o = O(() => {
      const { class: s, ...i } = n;
      return i;
    }), r = It(o, a);
    return (s, i) => (y(), C(l(d_), k(l(r), {
      class: l(N)(
        "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        n.class
      )
    }), {
      default: h(() => [
        R(l(f_), { class: "flex h-full w-full items-center justify-center text-current" }, {
          default: h(() => [
            x(s.$slots, "default", {}, () => [
              R(l(cw), { class: "h-4 w-4" })
            ])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), j$ = /* @__PURE__ */ w({
  __name: "Collapsible",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    disabled: { type: Boolean },
    unmountOnHide: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = It(e, t);
    return (r, s) => (y(), C(l(t1), Q(ne(l(o))), {
      default: h(({ open: i }) => [
        x(r.$slots, "default", { open: i })
      ]),
      _: 3
    }, 16));
  }
}), K$ = /* @__PURE__ */ w({
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (y(), C(l(a1), k(t, { class: "overflow-hidden transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down" }), {
      default: h(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), H$ = /* @__PURE__ */ w({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (y(), C(l(r1), Q(ne(t)), {
      default: h(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), W$ = /* @__PURE__ */ w({
  __name: "Combobox",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    resetSearchTermOnBlur: { type: Boolean },
    resetSearchTermOnSelect: { type: Boolean },
    openOnFocus: { type: Boolean },
    openOnClick: { type: Boolean },
    ignoreFilter: { type: Boolean },
    modelValue: {},
    defaultValue: {},
    multiple: { type: Boolean },
    dir: {},
    disabled: { type: Boolean },
    highlightOnHover: { type: Boolean },
    by: { type: [String, Function] },
    asChild: { type: Boolean },
    as: {},
    name: {},
    required: { type: Boolean }
  },
  emits: ["update:modelValue", "highlight", "update:open"],
  setup(e, { emit: t }) {
    const o = It(e, t);
    return (r, s) => (y(), C(l(W_), Q(ne(l(o))), {
      default: h(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), U$ = /* @__PURE__ */ w({
  __name: "ComboboxAnchor",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = Ye(t, "class"), a = Bn(n);
    return (o, r) => (y(), C(l($_), k(l(a), {
      class: l(N)("w-[200px]", t.class)
    }), {
      default: h(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), G$ = /* @__PURE__ */ w({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = Ye(t, "class");
    return (a, o) => (y(), C(l(ex), k(l(n), {
      class: l(N)("py-6 text-center text-sm", t.class)
    }), {
      default: h(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Y$ = /* @__PURE__ */ w({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    heading: {}
  },
  setup(e) {
    const t = e, n = Ye(t, "class");
    return (a, o) => (y(), C(l(ax), k(l(n), {
      class: l(N)(
        "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
        t.class
      )
    }), {
      default: h(() => [
        e.heading ? (y(), C(l(dx), {
          key: 0,
          class: "px-2 py-1.5 text-xs font-medium text-muted-foreground"
        }, {
          default: h(() => [
            ge(pe(e.heading), 1)
          ]),
          _: 1
        })) : ce("", !0),
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), X$ = /* @__PURE__ */ w({
  __name: "ComboboxInput",
  props: {
    displayValue: { type: Function },
    modelValue: {},
    autoFocus: { type: Boolean },
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = Ye(n, "class"), r = It(o, a);
    return (s, i) => (y(), C(l(rx), k(l(r), {
      class: l(N)(
        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        n.class
      )
    }), {
      default: h(() => [
        x(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Q$ = /* @__PURE__ */ w({
  __name: "ComboboxItem",
  props: {
    textValue: {},
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = Ye(n, "class"), r = It(o, a);
    return (s, i) => (y(), C(l(sx), k(l(r), {
      class: l(N)(
        "relative flex cursor-default gap-2 select-none justify-between items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
        n.class
      )
    }), {
      default: h(() => [
        x(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), J$ = /* @__PURE__ */ w({
  __name: "ComboboxList",
  props: {
    forceMount: { type: Boolean },
    position: { default: "popper" },
    bodyLock: { type: Boolean },
    side: {},
    sideOffset: { default: 4 },
    sideFlip: { type: Boolean },
    align: { default: "center" },
    alignOffset: {},
    alignFlip: { type: Boolean },
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    positionStrategy: {},
    updatePositionStrategy: {},
    disableUpdateOnLayoutShift: { type: Boolean },
    prioritizePosition: { type: Boolean },
    reference: {},
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean },
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = Ye(n, "class"), r = It(o, a);
    return (s, i) => (y(), C(l(fx), null, {
      default: h(() => [
        R(l(J_), k(l(r), {
          class: l(N)(
            "z-50 w-[200px] rounded-md border bg-popover text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            n.class
          )
        }), {
          default: h(() => [
            R(l(hx), null, {
              default: h(() => [
                x(s.$slots, "default")
              ]),
              _: 3
            })
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Z$ = /* @__PURE__ */ w({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = Ye(t, "class");
    return (a, o) => (y(), C(l(vx), k(l(n), {
      class: l(N)("-mx-1 h-px bg-border", t.class)
    }), {
      default: h(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Lx = /* @__PURE__ */ w({
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
    const n = e, a = t, o = O(() => {
      const { class: s, ...i } = n;
      return i;
    }), r = de(o, a);
    return (s, i) => (y(), C(l(Am), k(l(r), {
      class: l(N)(
        "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
        n.class
      )
    }), {
      default: h(() => [
        x(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Nx = /* @__PURE__ */ w({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = de(e, t);
    return (r, s) => (y(), C(l(Ul), Q(ne(l(o))), {
      default: h(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), eO = /* @__PURE__ */ w({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (y(), C(l(Cn), Q(ne(t)), {
      default: h(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), tO = /* @__PURE__ */ w({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (y(), C(l(Gl), Q(ne(t)), {
      default: h(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), nO = /* @__PURE__ */ w({
  __name: "DialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (y(), q("div", {
      class: le(l(N)("flex flex-col gap-y-1.5 text-center sm:text-left", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), aO = /* @__PURE__ */ w({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = O(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = He(n);
    return (o, r) => (y(), C(l(Zl), k(l(a), {
      class: l(N)("text-lg font-semibold leading-none tracking-tight", t.class)
    }), {
      default: h(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), oO = /* @__PURE__ */ w({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = O(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = He(n);
    return (o, r) => (y(), C(l(es), k(l(a), {
      class: l(N)("text-sm text-muted-foreground", t.class)
    }), {
      default: h(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Vx = /* @__PURE__ */ w({
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
    const n = e, a = t, o = O(() => {
      const { class: s, ...i } = n;
      return i;
    }), r = de(o, a);
    return (s, i) => (y(), C(l(Yl), null, {
      default: h(() => [
        R(l(Go), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        R(l(Uo), k(l(r), {
          class: l(N)(
            "fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
            n.class
          )
        }), {
          default: h(() => [
            x(s.$slots, "default"),
            R(l(Cn), {
              class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
              onClick: i[0] || (i[0] = (u) => a("close", u))
            }, {
              default: h(() => [
                R(l(Zo), { class: "size-4" }),
                i[1] || (i[1] = H("span", { class: "sr-only" }, "Close", -1))
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
}), rO = /* @__PURE__ */ w({
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
    const n = e, a = t, o = O(() => {
      const { class: s, ...i } = n;
      return i;
    }), r = de(o, a);
    return (s, i) => (y(), C(l(Yl), null, {
      default: h(() => [
        R(l(Go), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: h(() => [
            R(l(Uo), k({
              class: l(N)(
                "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                n.class
              )
            }, l(r), {
              onPointerDownOutside: i[0] || (i[0] = (u) => {
                const d = u.detail.originalEvent, c = d.target;
                (d.offsetX > c.clientWidth || d.offsetY > c.clientHeight) && u.preventDefault();
              })
            }), {
              default: h(() => [
                x(s.$slots, "default"),
                R(l(Cn), { class: "absolute right-4 top-4 rounded-md p-0.5 transition-colors hover:bg-secondary" }, {
                  default: h(() => [
                    R(l(Zo), { class: "h-4 w-4" }),
                    i[1] || (i[1] = H("span", { class: "sr-only" }, "Close", -1))
                  ]),
                  _: 1
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
}), lO = /* @__PURE__ */ w({
  __name: "DialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (y(), q("div", {
      class: le(l(N)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), sO = /* @__PURE__ */ w({
  __name: "CommandDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = de(e, t);
    return (r, s) => (y(), C(l(Nx), Q(ne(l(o))), {
      default: h(() => [
        R(l(Vx), { class: "overflow-hidden p-0 shadow-lg" }, {
          default: h(() => [
            R(Lx, { class: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5" }, {
              default: h(() => [
                x(r.$slots, "default")
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
}), iO = /* @__PURE__ */ w({
  __name: "CommandEmpty",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = O(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (y(), C(l(Mm), k(n.value, {
      class: l(N)("py-6 text-center text-sm", t.class)
    }), {
      default: h(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), uO = /* @__PURE__ */ w({
  __name: "CommandGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    heading: {}
  },
  setup(e) {
    const t = e, n = O(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (y(), C(l(Dm), k(n.value, {
      class: l(N)(
        "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
        t.class
      )
    }), {
      default: h(() => [
        e.heading ? (y(), C(l(km), {
          key: 0,
          class: "px-2 py-1.5 text-xs font-medium text-muted-foreground"
        }, {
          default: h(() => [
            ge(pe(e.heading), 1)
          ]),
          _: 1
        })) : ce("", !0),
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), qx = {
  class: "flex items-center border-b px-3",
  "cmdk-input-wrapper": ""
}, dO = /* @__PURE__ */ w({
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
    const t = e, n = O(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = He(n);
    return (o, r) => (y(), q("div", qx, [
      R(l(X0), { class: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
      R(l(Bm), k({ ...l(a), ...o.$attrs }, {
        "auto-focus": "",
        class: l(N)(
          "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          t.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), cO = /* @__PURE__ */ w({
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
    const n = e, a = t, o = O(() => {
      const { class: s, ...i } = n;
      return i;
    }), r = de(o, a);
    return (s, i) => (y(), C(l(Vm), k(l(r), {
      class: l(N)(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        n.class
      )
    }), {
      default: h(() => [
        x(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), zx = { role: "presentation" }, fO = /* @__PURE__ */ w({
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
    const n = e, a = t, o = O(() => {
      const { class: s, ...i } = n;
      return i;
    }), r = de(o, a);
    return (s, i) => (y(), C(l(Fm), k(l(r), {
      class: l(N)("max-h-[300px] overflow-y-auto overflow-x-hidden", n.class)
    }), {
      default: h(() => [
        H("div", zx, [
          x(s.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), pO = /* @__PURE__ */ w({
  __name: "CommandSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = O(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (y(), C(l(qm), k(n.value, {
      class: l(N)("-mx-1 h-px bg-border", t.class)
    }), {
      default: h(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), vO = /* @__PURE__ */ w({
  __name: "CommandShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (y(), q("span", {
      class: le(l(N)("ml-auto text-xs tracking-widest text-muted-foreground", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), jx = /* @__PURE__ */ w({
  __name: "Table",
  props: {
    class: {},
    containerClass: { default: "relative w-full overflow-auto" }
  },
  setup(e) {
    const t = e;
    return (n, a) => (y(), q("div", {
      class: le(e.containerClass)
    }, [
      x(n.$slots, "topbar"),
      H("table", {
        class: le(l(N)("w-full caption-bottom text-sm", t.class))
      }, [
        x(n.$slots, "default")
      ], 2)
    ], 2));
  }
}), Kx = /* @__PURE__ */ w({
  __name: "TableBody",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (y(), q("tbody", {
      class: le(l(N)("[&_tr:last-child]:border-0", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), Oc = /* @__PURE__ */ w({
  __name: "TableCell",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (y(), q("td", {
      class: le(
        l(N)(
          "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5",
          t.class
        )
      )
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), Hx = /* @__PURE__ */ w({
  __name: "TableHead",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (y(), q("th", {
      class: le(
        l(N)(
          "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5",
          t.class
        )
      )
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), Wx = /* @__PURE__ */ w({
  __name: "TableHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (y(), q("thead", {
      class: le(l(N)("[&_tr]:border-b", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), mO = /* @__PURE__ */ w({
  __name: "TableFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (y(), q("tfoot", {
      class: le(l(N)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), gl = /* @__PURE__ */ w({
  __name: "TableRow",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (y(), q("tr", {
      class: le(
        l(N)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", t.class)
      )
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), gO = /* @__PURE__ */ w({
  __name: "TableCaption",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (y(), q("caption", {
      class: le(l(N)("mt-4 text-sm text-muted-foreground", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), Ux = { class: "flex items-center justify-center py-10" }, Gx = /* @__PURE__ */ w({
  __name: "TableEmpty",
  props: {
    class: {},
    colspan: { default: 1 }
  },
  setup(e) {
    const t = e, n = O(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (y(), C(gl, null, {
      default: h(() => [
        R(Oc, k({
          class: l(N)("p-4 whitespace-nowrap align-middle text-sm text-foreground", t.class)
        }, n.value), {
          default: h(() => [
            H("div", Ux, [
              x(a.$slots, "default")
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Yx = ["placeholder"], Xx = {
  key: 1,
  type: "submit",
  class: "h-8 rounded-md bg-primary px-3 text-xs text-primary-foreground"
}, Qx = /* @__PURE__ */ w({
  __name: "DatatableSearch",
  props: {
    modelValue: {},
    placeholder: { default: "Search…" },
    debounce: { default: 300 },
    auto: { type: Boolean, default: !0 }
  },
  emits: ["update:model-value", "submit", "clear"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = E(n.modelValue);
    let r;
    te(
      () => n.modelValue,
      (u) => {
        u !== o.value && (o.value = u);
      }
    ), te(o, (u) => {
      window.clearTimeout(r), r = window.setTimeout(() => {
        a("update:model-value", u);
      }, n.debounce);
    });
    const s = () => a("submit"), i = () => {
      o.value = "", a("update:model-value", ""), a("clear");
    };
    return ue(() => {
      o.value = n.modelValue;
    }), (u, d) => (y(), q("form", {
      class: "flex items-center gap-2",
      onSubmit: ke(s, ["prevent"])
    }, [
      rt(H("input", {
        "onUpdate:modelValue": d[0] || (d[0] = (c) => o.value = c),
        type: "search",
        placeholder: e.placeholder,
        class: "h-9 w-64 rounded-md border px-2 text-sm"
      }, null, 8, Yx), [
        [Ht, o.value]
      ]),
      o.value.length ? (y(), q("button", {
        key: 0,
        type: "button",
        class: "h-8 rounded-md border px-2 text-xs",
        onClick: i
      }, " Clear ")) : ce("", !0),
      n.auto ? ce("", !0) : (y(), q("button", Xx, " Search "))
    ], 32));
  }
}), Jx = /* @__PURE__ */ w({
  __name: "Popover",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = de(e, t);
    return (r, s) => (y(), C(l(Mg), Q(ne(l(o))), {
      default: h(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zx = /* @__PURE__ */ w({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (y(), C(l(Rg), Q(ne(t)), {
      default: h(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), eC = /* @__PURE__ */ w({
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
    const n = e, a = t, o = O(() => {
      const { class: s, ...i } = n;
      return i;
    }), r = de(o, a);
    return (s, i) => (y(), C(l(Lg), null, {
      default: h(() => [
        R(l(qg), k({ ...l(r), ...s.$attrs }, {
          class: l(N)(
            "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            n.class
          )
        }), {
          default: h(() => [
            x(s.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), tC = ["disabled"], nC = { class: "truncate text-gray-500" }, aC = {
  key: 1,
  class: "max-w-56 truncate font-medium text-gray-900"
}, Ga = /* @__PURE__ */ w({
  __name: "DatatableFilter",
  props: {
    label: { default: "Filter" },
    active: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["clear"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = E(!1), r = O(() => {
      const i = ["inline-flex items-stretch rounded-full text-xs transition-all bg-white"];
      return o.value ? i.push("ring-2 ring-blue-500") : n.active ? i.push("border border-gray-400") : i.push("border border-dashed border-gray-400"), i;
    }), s = (i) => {
      i.stopPropagation(), i.preventDefault(), a("clear");
    };
    return (i, u) => (y(), q("div", {
      class: le(r.value)
    }, [
      R(l(Jx), {
        open: o.value,
        "onUpdate:open": u[0] || (u[0] = (d) => o.value = d)
      }, {
        default: h(() => [
          R(l(Zx), { "as-child": "" }, {
            default: h(() => [
              H("button", {
                type: "button",
                disabled: e.disabled,
                class: le([
                  "inline-flex items-center gap-1.5 transition-colors",
                  e.active ? "rounded-l-full py-1 pl-2.5 pr-1.5 hover:bg-gray-50" : "rounded-full py-1 pl-2.5 pr-2.5 hover:bg-gray-50"
                ]),
                title: "Edit filter"
              }, [
                e.active ? ce("", !0) : (y(), C(l(gw), {
                  key: 0,
                  class: "h-3 w-3 text-gray-400"
                })),
                H("span", nC, [
                  x(i.$slots, "label", {}, () => [
                    ge(pe(e.label), 1)
                  ])
                ]),
                e.active ? (y(), q("span", aC, [
                  x(i.$slots, "display-value", {}, () => [
                    x(i.$slots, "summary", {}, () => [
                      u[1] || (u[1] = ge("Any", -1))
                    ])
                  ])
                ])) : ce("", !0)
              ], 10, tC)
            ]),
            _: 3
          }),
          R(l(eC), {
            side: "bottom",
            align: "start",
            class: "w-auto p-3"
          }, {
            default: h(() => [
              x(i.$slots, "form")
            ]),
            _: 3
          })
        ]),
        _: 3
      }, 8, ["open"]),
      e.active ? (y(), q("button", {
        key: 0,
        type: "button",
        class: "group inline-flex items-center rounded-r-full pl-1 pr-2 transition-colors hover:bg-gray-100",
        title: "Clear",
        "aria-label": "Clear filter",
        onClick: s
      }, [
        R(l(yw), { class: "h-3 w-3 text-gray-400 group-hover:text-red-600" })
      ])) : ce("", !0)
    ], 2));
  }
}), oC = { key: 0 }, rC = { key: 1 }, lC = { class: "flex w-64 flex-col gap-2" }, sC = ["placeholder"], iC = /* @__PURE__ */ w({
  __name: "DatatableTextFilter",
  props: {
    table: {},
    config: {}
  },
  setup(e) {
    const t = e, n = O(() => t.config.id), a = O(() => t.config.label || t.config.id), o = O(() => t.config.placeholder || String(a.value)), r = O(() => {
      var f;
      return ((f = t.table.filters.value[n.value]) == null ? void 0 : f.value) ?? "";
    }), s = O(() => {
      var f;
      return ((f = t.table.filters.value[n.value]) == null ? void 0 : f.enabled) ?? !1;
    }), i = E(r.value);
    te(r, (f) => {
      f !== i.value && (i.value = f);
    });
    const u = () => {
      t.table.filter(n.value, i.value);
    }, d = () => {
      var f;
      t.table.resetFilter(n.value), i.value = ((f = t.table.filters.value[n.value]) == null ? void 0 : f.value) ?? "";
    }, c = () => t.table.resetFilter(n.value);
    return (f, p) => (y(), C(Ga, {
      label: a.value,
      active: s.value,
      onClear: c
    }, {
      label: h(() => [
        ge(pe(a.value), 1)
      ]),
      "display-value": h(() => {
        var m;
        return [
          s.value ? (y(), q("span", oC, pe(String(r.value ?? "")), 1)) : (y(), q("span", rC, pe(((m = e.table.strings) == null ? void 0 : m.any) ?? "Any"), 1))
        ];
      }),
      form: h(() => [
        H("div", lC, [
          rt(H("input", {
            "onUpdate:modelValue": p[0] || (p[0] = (m) => i.value = m),
            placeholder: o.value,
            class: "h-9 w-full rounded-md border px-2 text-sm",
            type: "text"
          }, null, 8, sC), [
            [Ht, i.value]
          ]),
          H("div", { class: "flex items-center justify-end gap-2" }, [
            H("button", {
              type: "button",
              class: "h-8 rounded-md border px-2 text-sm",
              onClick: d
            }, " Reset "),
            H("button", {
              type: "button",
              class: "h-8 rounded-md bg-primary px-2 text-sm text-primary-foreground",
              onClick: u
            }, " Apply ")
          ])
        ])
      ]),
      _: 1
    }, 8, ["label", "active"]));
  }
}), uC = { class: "flex w-64 flex-col gap-2" }, dC = ["value"], cC = /* @__PURE__ */ w({
  __name: "DatatableSelectFilter",
  props: {
    table: {},
    config: {}
  },
  setup(e) {
    const t = e, n = O(() => t.config.id), a = O(() => t.config.label || t.config.id), o = O(() => t.config.options || []), r = O(() => {
      var p;
      return ((p = t.table.filters.value[n.value]) == null ? void 0 : p.value) ?? "";
    }), s = O(() => {
      var p;
      return ((p = t.table.filters.value[n.value]) == null ? void 0 : p.enabled) ?? !1;
    }), i = E(r.value);
    te(r, (p) => {
      p !== i.value && (i.value = p);
    });
    const u = () => {
      t.table.filter(n.value, i.value);
    }, d = () => {
      var p;
      t.table.resetFilter(n.value), i.value = ((p = t.table.filters.value[n.value]) == null ? void 0 : p.value) ?? "";
    }, c = () => t.table.resetFilter(n.value), f = O(() => {
      var m;
      if (!s.value) return ((m = t.table.strings) == null ? void 0 : m.any) ?? "Any";
      const p = o.value.find((v) => v.value === r.value);
      return p ? p.label : String(r.value ?? "");
    });
    return (p, m) => (y(), C(Ga, {
      label: a.value,
      active: s.value,
      onClear: c
    }, {
      label: h(() => [
        ge(pe(a.value), 1)
      ]),
      "display-value": h(() => [
        H("span", null, pe(f.value), 1)
      ]),
      form: h(() => [
        H("div", uC, [
          rt(H("select", {
            "onUpdate:modelValue": m[0] || (m[0] = (v) => i.value = v),
            class: "h-9 w-full rounded-md border px-2 text-sm"
          }, [
            m[1] || (m[1] = H("option", { value: "" }, "Any", -1)),
            (y(!0), q(Ee, null, st(o.value, (v) => (y(), q("option", {
              key: String(v.value),
              value: v.value
            }, pe(v.label), 9, dC))), 128))
          ], 512), [
            [gu, i.value]
          ]),
          H("div", { class: "flex items-center justify-end gap-2" }, [
            H("button", {
              type: "button",
              class: "h-8 rounded-md border px-2 text-sm",
              onClick: d
            }, " Reset "),
            H("button", {
              type: "button",
              class: "h-8 rounded-md bg-primary px-2 text-sm text-primary-foreground",
              onClick: u
            }, " Apply ")
          ])
        ])
      ]),
      _: 1
    }, 8, ["label", "active"]));
  }
}), fC = { class: "flex w-80 flex-col gap-2" }, pC = { class: "grid grid-cols-2 gap-2" }, vC = /* @__PURE__ */ w({
  __name: "DatatableDateFilter",
  props: {
    table: {},
    config: {}
  },
  setup(e) {
    const t = e, n = O(() => t.config.id), a = O(() => t.config.label || t.config.id), o = O(() => {
      var p;
      return ((p = t.table.filters.value[n.value]) == null ? void 0 : p.value) ?? [null, null];
    }), r = O(() => {
      var p;
      return ((p = t.table.filters.value[n.value]) == null ? void 0 : p.enabled) ?? !1;
    }), s = E(Array.isArray(o.value) ? o.value[0] : null), i = E(Array.isArray(o.value) ? o.value[1] : null);
    te(o, (p) => {
      Array.isArray(p) && (s.value = p[0], i.value = p[1]);
    });
    const u = () => {
      const p = [s.value || null, i.value || null];
      t.table.filter(n.value, p);
    }, d = () => {
      var m;
      t.table.resetFilter(n.value);
      const p = (m = t.table.filters.value[n.value]) == null ? void 0 : m.value;
      Array.isArray(p) ? (s.value = p[0], i.value = p[1]) : (s.value = null, i.value = null);
    }, c = () => t.table.resetFilter(n.value), f = O(() => {
      var v, g;
      if (!r.value || !Array.isArray(o.value)) return ((v = t.table.strings) == null ? void 0 : v.any) ?? "Any";
      const [p, m] = o.value;
      return p && m ? `${p} – ${m}` : p ? `From ${p}` : m ? `Until ${m}` : ((g = t.table.strings) == null ? void 0 : g.any) ?? "Any";
    });
    return (p, m) => (y(), C(Ga, {
      label: a.value,
      active: r.value,
      onClear: c
    }, {
      label: h(() => [
        ge(pe(a.value), 1)
      ]),
      "display-value": h(() => [
        H("span", null, pe(f.value), 1)
      ]),
      form: h(() => [
        H("div", fC, [
          H("div", pC, [
            rt(H("input", {
              "onUpdate:modelValue": m[0] || (m[0] = (v) => s.value = v),
              type: "date",
              class: "h-9 w-full rounded-md border px-2 text-sm"
            }, null, 512), [
              [Ht, s.value]
            ]),
            rt(H("input", {
              "onUpdate:modelValue": m[1] || (m[1] = (v) => i.value = v),
              type: "date",
              class: "h-9 w-full rounded-md border px-2 text-sm"
            }, null, 512), [
              [Ht, i.value]
            ])
          ]),
          H("div", { class: "flex items-center justify-end gap-2" }, [
            H("button", {
              type: "button",
              class: "h-8 rounded-md border px-2 text-sm",
              onClick: d
            }, " Reset "),
            H("button", {
              type: "button",
              class: "h-8 rounded-md bg-primary px-2 text-sm text-primary-foreground",
              onClick: u
            }, " Apply ")
          ])
        ])
      ]),
      _: 1
    }, 8, ["label", "active"]));
  }
}), mC = { class: "flex w-64 flex-col gap-2" }, gC = ["placeholder"], yC = /* @__PURE__ */ w({
  __name: "DatatableNumberFilter",
  props: {
    table: {},
    config: {}
  },
  setup(e) {
    const t = e, n = O(() => t.config.id), a = O(() => t.config.label || t.config.id), o = O(() => t.config.placeholder || String(a.value)), r = O(() => {
      var p;
      return ((p = t.table.filters.value[n.value]) == null ? void 0 : p.value) ?? null;
    }), s = O(() => {
      var p;
      return ((p = t.table.filters.value[n.value]) == null ? void 0 : p.enabled) ?? !1;
    }), i = E(r.value);
    te(r, (p) => {
      p !== i.value && (i.value = p);
    });
    const u = () => {
      const p = i.value === "" || i.value === null ? null : Number(i.value);
      t.table.filter(n.value, isNaN(p) ? null : p);
    }, d = () => {
      var p;
      t.table.resetFilter(n.value), i.value = ((p = t.table.filters.value[n.value]) == null ? void 0 : p.value) ?? null;
    }, c = () => t.table.resetFilter(n.value), f = O(
      () => {
        var p;
        return s.value ? String(r.value) : ((p = t.table.strings) == null ? void 0 : p.any) ?? "Any";
      }
    );
    return (p, m) => (y(), C(Ga, {
      label: a.value,
      active: s.value,
      onClear: c
    }, {
      label: h(() => [
        ge(pe(a.value), 1)
      ]),
      "display-value": h(() => [
        H("span", null, pe(f.value), 1)
      ]),
      form: h(() => [
        H("div", mC, [
          rt(H("input", {
            "onUpdate:modelValue": m[0] || (m[0] = (v) => i.value = v),
            placeholder: o.value,
            class: "h-9 w-full rounded-md border px-2 text-sm",
            type: "number"
          }, null, 8, gC), [
            [Ht, i.value]
          ]),
          H("div", { class: "flex items-center justify-end gap-2" }, [
            H("button", {
              type: "button",
              class: "h-8 rounded-md border px-2 text-sm",
              onClick: d
            }, " Reset "),
            H("button", {
              type: "button",
              class: "h-8 rounded-md bg-primary px-2 text-sm text-primary-foreground",
              onClick: u
            }, " Apply ")
          ])
        ])
      ]),
      _: 1
    }, 8, ["label", "active"]));
  }
}), hC = { class: "flex w-72 flex-col gap-2" }, bC = { class: "grid grid-cols-2 gap-2" }, wC = /* @__PURE__ */ w({
  __name: "DatatableNumberRangeFilter",
  props: {
    table: {},
    config: {}
  },
  setup(e) {
    const t = e, n = O(() => t.config.id), a = O(() => t.config.label || t.config.id), o = O(() => {
      var p;
      return ((p = t.table.filters.value[n.value]) == null ? void 0 : p.value) ?? [null, null];
    }), r = O(() => {
      var p;
      return ((p = t.table.filters.value[n.value]) == null ? void 0 : p.enabled) ?? !1;
    }), s = E(Array.isArray(o.value) ? o.value[0] : null), i = E(Array.isArray(o.value) ? o.value[1] : null);
    te(o, (p) => {
      Array.isArray(p) && (s.value = p[0], i.value = p[1]);
    });
    const u = () => {
      const p = s.value === "" || s.value === null ? null : Number(s.value), m = i.value === "" || i.value === null ? null : Number(i.value), v = [isNaN(p) ? null : p, isNaN(m) ? null : m];
      t.table.filter(n.value, v);
    }, d = () => {
      var m;
      t.table.resetFilter(n.value);
      const p = (m = t.table.filters.value[n.value]) == null ? void 0 : m.value;
      Array.isArray(p) ? (s.value = p[0], i.value = p[1]) : (s.value = null, i.value = null);
    }, c = () => t.table.resetFilter(n.value), f = O(() => {
      var v, g;
      if (!r.value || !Array.isArray(o.value)) return ((v = t.table.strings) == null ? void 0 : v.any) ?? "Any";
      const [p, m] = o.value;
      return p != null && m != null ? `${p} – ${m}` : p != null ? `≥ ${p}` : m != null ? `≤ ${m}` : ((g = t.table.strings) == null ? void 0 : g.any) ?? "Any";
    });
    return (p, m) => (y(), C(Ga, {
      label: a.value,
      active: r.value,
      onClear: c
    }, {
      label: h(() => [
        ge(pe(a.value), 1)
      ]),
      "display-value": h(() => [
        H("span", null, pe(f.value), 1)
      ]),
      form: h(() => [
        H("div", hC, [
          H("div", bC, [
            rt(H("input", {
              "onUpdate:modelValue": m[0] || (m[0] = (v) => s.value = v),
              type: "number",
              class: "h-9 w-full rounded-md border px-2 text-sm",
              placeholder: "Min"
            }, null, 512), [
              [Ht, s.value]
            ]),
            rt(H("input", {
              "onUpdate:modelValue": m[1] || (m[1] = (v) => i.value = v),
              type: "number",
              class: "h-9 w-full rounded-md border px-2 text-sm",
              placeholder: "Max"
            }, null, 512), [
              [Ht, i.value]
            ])
          ]),
          H("div", { class: "flex items-center justify-end gap-2" }, [
            H("button", {
              type: "button",
              class: "h-8 rounded-md border px-2 text-sm",
              onClick: d
            }, " Reset "),
            H("button", {
              type: "button",
              class: "h-8 rounded-md bg-primary px-2 text-sm text-primary-foreground",
              onClick: u
            }, " Apply ")
          ])
        ])
      ]),
      _: 1
    }, 8, ["label", "active"]));
  }
}), _C = { class: "mb-3 flex flex-col gap-2" }, xC = { class: "flex flex-wrap items-start justify-between gap-2" }, CC = { class: "flex min-w-0 flex-1 flex-wrap items-center gap-2" }, SC = { class: "flex shrink-0 items-center" }, $C = ["onClick"], OC = { class: "inline-flex items-center" }, yO = /* @__PURE__ */ w({
  __name: "Datatable",
  props: {
    table: {}
  },
  setup(e) {
    const n = e.table, a = O(() => n.columns.value);
    return (o, r) => (y(), C(l(jx), {
      class: le(l(n).tableClass),
      "container-class": l(n).tableContainerClass
    }, {
      topbar: h(() => [
        H("div", _C, [
          x(o.$slots, "topbar", {
            table: l(n),
            filters: l(n).filters,
            activeFilters: l(n).activeFilters,
            activeFilterCount: l(n).activeFilterCount,
            isAnyFilterActive: l(n).isAnyFilterActive,
            filter: l(n).filter,
            filterWithoutApplying: l(n).filterWithoutApplying,
            applyFilters: l(n).applyFilters,
            resetFilter: l(n).resetFilter,
            clearFilters: l(n).clearFilters,
            setSearch: l(n).setSearch,
            clearSearch: l(n).clearSearch,
            search: l(n).search,
            hasSearch: l(n).hasSearch,
            appliedQuery: l(n).appliedQuery,
            filterConfigs: l(n).filterConfigs
          }, () => {
            var s;
            return [
              H("div", xC, [
                H("div", CC, [
                  (y(!0), q(Ee, null, st(l(n).filterConfigs || [], (i) => (y(), C(at(
                    i.type === "select" ? cC : i.type === "date" ? vC : i.type === "number" ? yC : i.type === "number-range" ? wC : iC
                  ), {
                    key: `flt-pill-${i.id}`,
                    table: l(n),
                    config: i
                  }, null, 8, ["table", "config"]))), 128)),
                  l(n).isAnyFilterActive ? (y(), C(l(vs), {
                    key: 0,
                    variant: "ghost",
                    class: "h-8 px-3 text-xs",
                    onClick: l(n).clearFilters
                  }, {
                    default: h(() => {
                      var i;
                      return [
                        ge(pe(((i = l(n).strings) == null ? void 0 : i.clearAll) ?? "Clear all"), 1)
                      ];
                    }),
                    _: 1
                  }, 8, ["onClick"])) : ce("", !0)
                ]),
                H("div", SC, [
                  l(n).searchEnabled ? (y(), C(Qx, {
                    key: 0,
                    "model-value": l(l(n).search),
                    placeholder: ((s = l(n).strings) == null ? void 0 : s.searchPlaceholder) ?? "Search…",
                    auto: l(n).searchAutoEnabled,
                    "onUpdate:modelValue": r[0] || (r[0] = (i) => l(n).setSearch(i)),
                    onSubmit: r[1] || (r[1] = () => l(n).applyFilters()),
                    onClear: r[2] || (r[2] = () => {
                      l(n).clearSearch(), l(n).applyFilters();
                    })
                  }, null, 8, ["model-value", "placeholder", "auto"])) : ce("", !0)
                ])
              ])
            ];
          })
        ])
      ]),
      default: h(() => [
        R(l(Wx), null, {
          default: h(() => [
            R(l(gl), null, {
              default: h(() => [
                (y(!0), q(Ee, null, st(a.value, (s) => x(o.$slots, "head-cell:" + s.id, {
                  key: "head-cell-" + s.id,
                  column: s,
                  table: l(n)
                }, () => [
                  R(l(Hx), {
                    class: le(s.headerCellClasses)
                  }, {
                    default: h(() => [
                      x(o.$slots, "head-content:" + s.id, {
                        column: s,
                        table: l(n)
                      }, () => [
                        s.sortable ? (y(), q("button", {
                          key: 0,
                          type: "button",
                          class: "group inline-flex items-center gap-1 text-left hover:text-foreground",
                          onClick: () => {
                            const i = s.sortableAs ?? s.id;
                            l(n).toggleSort(i), l(n).applyFilters();
                          }
                        }, [
                          H("span", {
                            class: le(s.headerContentClasses)
                          }, pe(s.label), 3),
                          H("span", OC, [
                            l(n).getSortDirection(s.sortableAs ?? s.id) === "ascending" ? (y(), C(l(pw), {
                              key: 0,
                              class: "h-3.5 w-3.5 opacity-80 group-hover:opacity-100"
                            })) : l(n).getSortDirection(s.sortableAs ?? s.id) === "descending" ? (y(), C(l(fw), {
                              key: 1,
                              class: "h-3.5 w-3.5 opacity-80 group-hover:opacity-100"
                            })) : (y(), C(l(vw), {
                              key: 2,
                              class: "h-3.5 w-3.5 opacity-50 group-hover:opacity-80"
                            }))
                          ])
                        ], 8, $C)) : (y(), q("span", {
                          key: 1,
                          class: le(s.headerContentClasses)
                        }, pe(s.label), 3))
                      ])
                    ]),
                    _: 2
                  }, 1032, ["class"])
                ])), 128))
              ]),
              _: 3
            })
          ]),
          _: 3
        }),
        R(l(Kx), null, {
          default: h(() => [
            l(n).hasData ? (y(!0), q(Ee, { key: 0 }, st(l(l(n).data).data, (s, i) => (y(), C(l(gl), {
              key: "body-row-" + i
            }, {
              default: h(() => [
                (y(!0), q(Ee, null, st(a.value, (u) => x(o.$slots, "body-cell:" + u.id, {
                  key: "body-cell-" + u.id,
                  column: u,
                  row: s,
                  table: l(n)
                }, () => [
                  R(l(Oc), {
                    class: le(u.cellClasses)
                  }, {
                    default: h(() => [
                      x(o.$slots, "body-content:" + u.id, {
                        row: s,
                        table: l(n)
                      }, () => [
                        H("span", {
                          class: le(u.cellContentClasses)
                        }, pe(s[u.id]), 3)
                      ])
                    ]),
                    _: 2
                  }, 1032, ["class"])
                ])), 128))
              ]),
              _: 2
            }, 1024))), 128)) : (y(), C(l(Gx), {
              key: 1,
              colspan: a.value.length
            }, {
              default: h(() => [
                ge(pe(l(n).emptyMessage), 1)
              ]),
              _: 1
            }, 8, ["colspan"]))
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["class", "container-class"]));
  }
});
function EC(e) {
  const t = E([]), n = (c) => {
    t.value = c;
  }, a = E([]), o = (c) => {
    a.value = c;
  }, r = E([]), s = (c) => {
    r.value = c;
  }, i = (c) => {
    r.value.includes(c) || r.value.push(c);
  }, u = (c) => {
    r.value.includes(c) && (r.value = r.value.filter((f) => f !== c));
  };
  return {
    columns: O(() => {
      let c = e;
      if (a.value.length > 0) {
        const f = new Map(e.map((p) => [p.id, p]));
        c = a.value.map((p) => f.get(p)).filter((p) => p !== void 0);
      }
      return t.value.length > 0 && (c = c.filter((f) => t.value.includes(f.id))), c;
    }),
    columnDefinitions: e,
    visibleColumns: t,
    columnOrder: a,
    stickyColumns: r,
    setVisibleColumns: n,
    setColumnOrder: o,
    setStickyColumns: s,
    stickColumn: i,
    unstickColumn: u
  };
}
function AC(e) {
  const t = O(() => e), n = O(() => t.value.some((d) => d.bulk === !0)), a = O(() => t.value.length > 0), o = O(() => t.value.filter((d) => !d.bulk)), r = O(() => t.value.filter((d) => d.bulk === !0));
  return {
    actions: t,
    actionDefinitions: e,
    showSelectionColumn: n,
    showActionsColumn: a,
    rowActions: o,
    bulkActions: r,
    getVisibleActions: (d) => o.value.filter((c) => c.visible ? c.visible(d) : !0),
    handleActionClick: (d, c) => {
      d.handler([c]);
    },
    handleBulkActionClick: (d, c) => {
      d.handler(c);
    }
  };
}
function BC(e) {
  const t = E(e.defaultSort), n = (m) => m.startsWith("-"), a = (m) => n(m) ? m.substring(1) : m, o = () => {
    t.value = e.defaultSort;
  }, r = (m) => {
    const v = t.value;
    v === m ? t.value = `-${m}` : v === `-${m}` ? t.value = null : t.value = m;
  }, s = (m) => t.value === null ? !1 : t.value === m || t.value === `-${m}`, i = (m) => s(m) ? n(t.value) ? "descending" : "ascending" : null, u = () => t.value === null ? null : a(t.value), d = O(() => u()), c = O(() => {
    const m = u();
    if (!m) return null;
    const v = i(m);
    return v === "ascending" ? "asc" : v === "descending" ? "desc" : null;
  });
  return {
    sort: t,
    sortColumn: d,
    sortDirection: c,
    resetSort: o,
    cycleSort: r,
    isColumnSorted: s,
    getSortDirection: i,
    getSortedColumnId: u,
    setSort: (m, v) => {
      m === null || v === null ? t.value = null : v === "desc" ? t.value = `-${m}` : t.value = m;
    },
    toggleSort: (m) => {
      r(m);
    }
  };
}
function PC(e) {
  const t = E(e.search ? e.search : !0), n = E("");
  return {
    searchEnabled: t,
    search: n,
    setSearch: (s) => {
      n.value = s;
    },
    clearSearch: () => {
      n.value = "";
    },
    hasSearch: () => n.value.length > 0
  };
}
function DC(e) {
  const t = E({}), n = (b) => {
    const _ = ((e == null ? void 0 : e.filters) || []).find(($) => $.id === b);
    return (_ == null ? void 0 : _.defaultValue) ?? null;
  }, a = (b) => b == null || typeof b == "string" && b.length === 0;
  if (e != null && e.filters && Array.isArray(e.filters))
    for (const b of e.filters) {
      const _ = b.defaultValue ?? null;
      t.value[b.id] = {
        id: b.id,
        enabled: !a(_),
        value: _
      };
    }
  const o = (b, _ = null) => {
    if (!t.value[b]) {
      const $ = _ ?? n(b);
      t.value[b] = { id: b, enabled: !a($), value: $ };
    }
  }, r = (b) => {
    t.value[b] && delete t.value[b];
  }, s = (b) => {
    t.value[b] || o(b), t.value[b].enabled = !0;
  }, i = (b) => {
    t.value[b] && (t.value[b].enabled = !1);
  }, u = (b, _) => {
    t.value[b] || o(b), t.value[b].value = _, t.value[b].enabled = !a(_);
  }, d = (b) => {
    if (!t.value[b]) return;
    const _ = n(b);
    t.value[b].value = _, t.value[b].enabled = !a(_);
  }, c = () => {
    Object.keys(t.value).forEach((b) => {
      const _ = n(b);
      t.value[b].value = _, t.value[b].enabled = !a(_);
    });
  }, f = (b) => {
    var _;
    return ((_ = t.value[b]) == null ? void 0 : _.enabled) === !0;
  }, p = (b) => {
    var _;
    return (_ = t.value[b]) != null && _.enabled ? t.value[b].value : null;
  }, m = O(() => {
    const b = {};
    for (const [_, $] of Object.entries(t.value))
      $.enabled && (b[_] = $);
    return b;
  }), v = O(() => Object.keys(m.value).length), g = O(() => v.value > 0);
  return {
    filters: t,
    activeFilters: m,
    activeFilterCount: v,
    isAnyFilterActive: g,
    setFilter: u,
    enableFilter: s,
    disableFilter: i,
    clearFilter: d,
    clearAllFilters: c,
    registerFilter: o,
    unregisterFilter: r,
    hasFilter: f,
    getFilterValue: p
  };
}
var ma = TypeError;
const kC = {}, TC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: kC
}, Symbol.toStringTag, { value: "Module" })), IC = /* @__PURE__ */ yf(TC);
var $s = typeof Map == "function" && Map.prototype, Br = Object.getOwnPropertyDescriptor && $s ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, Do = $s && Br && typeof Br.get == "function" ? Br.get : null, Ti = $s && Map.prototype.forEach, Os = typeof Set == "function" && Set.prototype, Pr = Object.getOwnPropertyDescriptor && Os ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, ko = Os && Pr && typeof Pr.get == "function" ? Pr.get : null, Ii = Os && Set.prototype.forEach, FC = typeof WeakMap == "function" && WeakMap.prototype, $a = FC ? WeakMap.prototype.has : null, MC = typeof WeakSet == "function" && WeakSet.prototype, Oa = MC ? WeakSet.prototype.has : null, RC = typeof WeakRef == "function" && WeakRef.prototype, Fi = RC ? WeakRef.prototype.deref : null, LC = Boolean.prototype.valueOf, NC = Object.prototype.toString, VC = Function.prototype.toString, qC = String.prototype.match, Es = String.prototype.slice, an = String.prototype.replace, zC = String.prototype.toUpperCase, Mi = String.prototype.toLowerCase, Ec = RegExp.prototype.test, Ri = Array.prototype.concat, Ot = Array.prototype.join, jC = Array.prototype.slice, Li = Math.floor, yl = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, Dr = Object.getOwnPropertySymbols, hl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, Zn = typeof Symbol == "function" && typeof Symbol.iterator == "object", Ea = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Zn || !0) ? Symbol.toStringTag : null, Ac = Object.prototype.propertyIsEnumerable, Ni = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
  return e.__proto__;
} : null);
function Vi(e, t) {
  if (e === 1 / 0 || e === -1 / 0 || e !== e || e && e > -1e3 && e < 1e3 || Ec.call(/e/, t))
    return t;
  var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof e == "number") {
    var a = e < 0 ? -Li(-e) : Li(e);
    if (a !== e) {
      var o = String(a), r = Es.call(t, o.length + 1);
      return an.call(o, n, "$&_") + "." + an.call(an.call(r, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return an.call(t, n, "$&_");
}
var bl = IC, qi = bl.custom, zi = Dc(qi) ? qi : null, Bc = {
  __proto__: null,
  double: '"',
  single: "'"
}, KC = {
  __proto__: null,
  double: /(["\\])/g,
  single: /(['\\])/g
}, sr = function e(t, n, a, o) {
  var r = n || {};
  if (zt(r, "quoteStyle") && !zt(Bc, r.quoteStyle))
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (zt(r, "maxStringLength") && (typeof r.maxStringLength == "number" ? r.maxStringLength < 0 && r.maxStringLength !== 1 / 0 : r.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var s = zt(r, "customInspect") ? r.customInspect : !0;
  if (typeof s != "boolean" && s !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (zt(r, "indent") && r.indent !== null && r.indent !== "	" && !(parseInt(r.indent, 10) === r.indent && r.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (zt(r, "numericSeparator") && typeof r.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var i = r.numericSeparator;
  if (typeof t > "u")
    return "undefined";
  if (t === null)
    return "null";
  if (typeof t == "boolean")
    return t ? "true" : "false";
  if (typeof t == "string")
    return Tc(t, r);
  if (typeof t == "number") {
    if (t === 0)
      return 1 / 0 / t > 0 ? "0" : "-0";
    var u = String(t);
    return i ? Vi(t, u) : u;
  }
  if (typeof t == "bigint") {
    var d = String(t) + "n";
    return i ? Vi(t, d) : d;
  }
  var c = typeof r.depth > "u" ? 5 : r.depth;
  if (typeof a > "u" && (a = 0), a >= c && c > 0 && typeof t == "object")
    return wl(t) ? "[Array]" : "[Object]";
  var f = i3(r, a);
  if (typeof o > "u")
    o = [];
  else if (kc(o, t) >= 0)
    return "[Circular]";
  function p(K, j, G) {
    if (j && (o = jC.call(o), o.push(j)), G) {
      var W = {
        depth: r.depth
      };
      return zt(r, "quoteStyle") && (W.quoteStyle = r.quoteStyle), e(K, W, a + 1, o);
    }
    return e(K, r, a + 1, o);
  }
  if (typeof t == "function" && !ji(t)) {
    var m = ZC(t), v = po(t, p);
    return "[Function" + (m ? ": " + m : " (anonymous)") + "]" + (v.length > 0 ? " { " + Ot.call(v, ", ") + " }" : "");
  }
  if (Dc(t)) {
    var g = Zn ? an.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : hl.call(t);
    return typeof t == "object" && !Zn ? ba(g) : g;
  }
  if (r3(t)) {
    for (var b = "<" + Mi.call(String(t.nodeName)), _ = t.attributes || [], $ = 0; $ < _.length; $++)
      b += " " + _[$].name + "=" + Pc(HC(_[$].value), "double", r);
    return b += ">", t.childNodes && t.childNodes.length && (b += "..."), b += "</" + Mi.call(String(t.nodeName)) + ">", b;
  }
  if (wl(t)) {
    if (t.length === 0)
      return "[]";
    var S = po(t, p);
    return f && !s3(S) ? "[" + _l(S, f) + "]" : "[ " + Ot.call(S, ", ") + " ]";
  }
  if (UC(t)) {
    var P = po(t, p);
    return !("cause" in Error.prototype) && "cause" in t && !Ac.call(t, "cause") ? "{ [" + String(t) + "] " + Ot.call(Ri.call("[cause]: " + p(t.cause), P), ", ") + " }" : P.length === 0 ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + Ot.call(P, ", ") + " }";
  }
  if (typeof t == "object" && s) {
    if (zi && typeof t[zi] == "function" && bl)
      return bl(t, { depth: c - a });
    if (s !== "symbol" && typeof t.inspect == "function")
      return t.inspect();
  }
  if (e3(t)) {
    var A = [];
    return Ti && Ti.call(t, function(K, j) {
      A.push(p(j, t, !0) + " => " + p(K, t));
    }), Ki("Map", Do.call(t), A, f);
  }
  if (a3(t)) {
    var D = [];
    return Ii && Ii.call(t, function(K) {
      D.push(p(K, t));
    }), Ki("Set", ko.call(t), D, f);
  }
  if (t3(t))
    return kr("WeakMap");
  if (o3(t))
    return kr("WeakSet");
  if (n3(t))
    return kr("WeakRef");
  if (YC(t))
    return ba(p(Number(t)));
  if (QC(t))
    return ba(p(yl.call(t)));
  if (XC(t))
    return ba(LC.call(t));
  if (GC(t))
    return ba(p(String(t)));
  if (typeof window < "u" && t === window)
    return "{ [object Window] }";
  if (typeof globalThis < "u" && t === globalThis || typeof Vs < "u" && t === Vs)
    return "{ [object globalThis] }";
  if (!WC(t) && !ji(t)) {
    var B = po(t, p), I = Ni ? Ni(t) === Object.prototype : t instanceof Object || t.constructor === Object, F = t instanceof Object ? "" : "null prototype", T = !I && Ea && Object(t) === t && Ea in t ? Es.call(cn(t), 8, -1) : F ? "Object" : "", L = I || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : "", M = L + (T || F ? "[" + Ot.call(Ri.call([], T || [], F || []), ": ") + "] " : "");
    return B.length === 0 ? M + "{}" : f ? M + "{" + _l(B, f) + "}" : M + "{ " + Ot.call(B, ", ") + " }";
  }
  return String(t);
};
function Pc(e, t, n) {
  var a = n.quoteStyle || t, o = Bc[a];
  return o + e + o;
}
function HC(e) {
  return an.call(String(e), /"/g, "&quot;");
}
function Pn(e) {
  return !Ea || !(typeof e == "object" && (Ea in e || typeof e[Ea] < "u"));
}
function wl(e) {
  return cn(e) === "[object Array]" && Pn(e);
}
function WC(e) {
  return cn(e) === "[object Date]" && Pn(e);
}
function ji(e) {
  return cn(e) === "[object RegExp]" && Pn(e);
}
function UC(e) {
  return cn(e) === "[object Error]" && Pn(e);
}
function GC(e) {
  return cn(e) === "[object String]" && Pn(e);
}
function YC(e) {
  return cn(e) === "[object Number]" && Pn(e);
}
function XC(e) {
  return cn(e) === "[object Boolean]" && Pn(e);
}
function Dc(e) {
  if (Zn)
    return e && typeof e == "object" && e instanceof Symbol;
  if (typeof e == "symbol")
    return !0;
  if (!e || typeof e != "object" || !hl)
    return !1;
  try {
    return hl.call(e), !0;
  } catch {
  }
  return !1;
}
function QC(e) {
  if (!e || typeof e != "object" || !yl)
    return !1;
  try {
    return yl.call(e), !0;
  } catch {
  }
  return !1;
}
var JC = Object.prototype.hasOwnProperty || function(e) {
  return e in this;
};
function zt(e, t) {
  return JC.call(e, t);
}
function cn(e) {
  return NC.call(e);
}
function ZC(e) {
  if (e.name)
    return e.name;
  var t = qC.call(VC.call(e), /^function\s*([\w$]+)/);
  return t ? t[1] : null;
}
function kc(e, t) {
  if (e.indexOf)
    return e.indexOf(t);
  for (var n = 0, a = e.length; n < a; n++)
    if (e[n] === t)
      return n;
  return -1;
}
function e3(e) {
  if (!Do || !e || typeof e != "object")
    return !1;
  try {
    Do.call(e);
    try {
      ko.call(e);
    } catch {
      return !0;
    }
    return e instanceof Map;
  } catch {
  }
  return !1;
}
function t3(e) {
  if (!$a || !e || typeof e != "object")
    return !1;
  try {
    $a.call(e, $a);
    try {
      Oa.call(e, Oa);
    } catch {
      return !0;
    }
    return e instanceof WeakMap;
  } catch {
  }
  return !1;
}
function n3(e) {
  if (!Fi || !e || typeof e != "object")
    return !1;
  try {
    return Fi.call(e), !0;
  } catch {
  }
  return !1;
}
function a3(e) {
  if (!ko || !e || typeof e != "object")
    return !1;
  try {
    ko.call(e);
    try {
      Do.call(e);
    } catch {
      return !0;
    }
    return e instanceof Set;
  } catch {
  }
  return !1;
}
function o3(e) {
  if (!Oa || !e || typeof e != "object")
    return !1;
  try {
    Oa.call(e, Oa);
    try {
      $a.call(e, $a);
    } catch {
      return !0;
    }
    return e instanceof WeakSet;
  } catch {
  }
  return !1;
}
function r3(e) {
  return !e || typeof e != "object" ? !1 : typeof HTMLElement < "u" && e instanceof HTMLElement ? !0 : typeof e.nodeName == "string" && typeof e.getAttribute == "function";
}
function Tc(e, t) {
  if (e.length > t.maxStringLength) {
    var n = e.length - t.maxStringLength, a = "... " + n + " more character" + (n > 1 ? "s" : "");
    return Tc(Es.call(e, 0, t.maxStringLength), t) + a;
  }
  var o = KC[t.quoteStyle || "single"];
  o.lastIndex = 0;
  var r = an.call(an.call(e, o, "\\$1"), /[\x00-\x1f]/g, l3);
  return Pc(r, "single", t);
}
function l3(e) {
  var t = e.charCodeAt(0), n = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[t];
  return n ? "\\" + n : "\\x" + (t < 16 ? "0" : "") + zC.call(t.toString(16));
}
function ba(e) {
  return "Object(" + e + ")";
}
function kr(e) {
  return e + " { ? }";
}
function Ki(e, t, n, a) {
  var o = a ? _l(n, a) : Ot.call(n, ", ");
  return e + " (" + t + ") {" + o + "}";
}
function s3(e) {
  for (var t = 0; t < e.length; t++)
    if (kc(e[t], `
`) >= 0)
      return !1;
  return !0;
}
function i3(e, t) {
  var n;
  if (e.indent === "	")
    n = "	";
  else if (typeof e.indent == "number" && e.indent > 0)
    n = Ot.call(Array(e.indent + 1), " ");
  else
    return null;
  return {
    base: n,
    prev: Ot.call(Array(t + 1), n)
  };
}
function _l(e, t) {
  if (e.length === 0)
    return "";
  var n = `
` + t.prev + t.base;
  return n + Ot.call(e, "," + n) + `
` + t.prev;
}
function po(e, t) {
  var n = wl(e), a = [];
  if (n) {
    a.length = e.length;
    for (var o = 0; o < e.length; o++)
      a[o] = zt(e, o) ? t(e[o], e) : "";
  }
  var r = typeof Dr == "function" ? Dr(e) : [], s;
  if (Zn) {
    s = {};
    for (var i = 0; i < r.length; i++)
      s["$" + r[i]] = r[i];
  }
  for (var u in e)
    zt(e, u) && (n && String(Number(u)) === u && u < e.length || Zn && s["$" + u] instanceof Symbol || (Ec.call(/[^\w$]/, u) ? a.push(t(u, e) + ": " + t(e[u], e)) : a.push(u + ": " + t(e[u], e))));
  if (typeof Dr == "function")
    for (var d = 0; d < r.length; d++)
      Ac.call(e, r[d]) && a.push("[" + t(r[d]) + "]: " + t(e[r[d]], e));
  return a;
}
var u3 = sr, d3 = ma, ir = function(e, t, n) {
  for (var a = e, o; (o = a.next) != null; a = o)
    if (o.key === t)
      return a.next = o.next, n || (o.next = /** @type {NonNullable<typeof list.next>} */
      e.next, e.next = o), o;
}, c3 = function(e, t) {
  if (e) {
    var n = ir(e, t);
    return n && n.value;
  }
}, f3 = function(e, t, n) {
  var a = ir(e, t);
  a ? a.value = n : e.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
  {
    // eslint-disable-line no-param-reassign, no-extra-parens
    key: t,
    next: e.next,
    value: n
  };
}, p3 = function(e, t) {
  return e ? !!ir(e, t) : !1;
}, v3 = function(e, t) {
  if (e)
    return ir(e, t, !0);
}, m3 = function() {
  var t, n = {
    assert: function(a) {
      if (!n.has(a))
        throw new d3("Side channel does not contain " + u3(a));
    },
    delete: function(a) {
      var o = t && t.next, r = v3(t, a);
      return r && o && o === r && (t = void 0), !!r;
    },
    get: function(a) {
      return c3(t, a);
    },
    has: function(a) {
      return p3(t, a);
    },
    set: function(a, o) {
      t || (t = {
        next: void 0
      }), f3(
        /** @type {NonNullable<typeof $o>} */
        t,
        a,
        o
      );
    }
  };
  return n;
}, Ic = Object, g3 = Error, y3 = EvalError, h3 = RangeError, b3 = ReferenceError, w3 = SyntaxError, _3 = URIError, x3 = Math.abs, C3 = Math.floor, S3 = Math.max, $3 = Math.min, O3 = Math.pow, E3 = Math.round, A3 = Number.isNaN || function(t) {
  return t !== t;
}, B3 = A3, P3 = function(t) {
  return B3(t) || t === 0 ? t : t < 0 ? -1 : 1;
}, D3 = Object.getOwnPropertyDescriptor, wo = D3;
if (wo)
  try {
    wo([], "length");
  } catch {
    wo = null;
  }
var Fc = wo, _o = Object.defineProperty || !1;
if (_o)
  try {
    _o({}, "a", { value: 1 });
  } catch {
    _o = !1;
  }
var k3 = _o, Tr, Hi;
function T3() {
  return Hi || (Hi = 1, Tr = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return !1;
    if (typeof Symbol.iterator == "symbol")
      return !0;
    var t = {}, n = Symbol("test"), a = Object(n);
    if (typeof n == "string" || Object.prototype.toString.call(n) !== "[object Symbol]" || Object.prototype.toString.call(a) !== "[object Symbol]")
      return !1;
    var o = 42;
    t[n] = o;
    for (var r in t)
      return !1;
    if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
      return !1;
    var s = Object.getOwnPropertySymbols(t);
    if (s.length !== 1 || s[0] !== n || !Object.prototype.propertyIsEnumerable.call(t, n))
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var i = (
        /** @type {PropertyDescriptor} */
        Object.getOwnPropertyDescriptor(t, n)
      );
      if (i.value !== o || i.enumerable !== !0)
        return !1;
    }
    return !0;
  }), Tr;
}
var Ir, Wi;
function I3() {
  if (Wi) return Ir;
  Wi = 1;
  var e = typeof Symbol < "u" && Symbol, t = T3();
  return Ir = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : t();
  }, Ir;
}
var Fr, Ui;
function Mc() {
  return Ui || (Ui = 1, Fr = typeof Reflect < "u" && Reflect.getPrototypeOf || null), Fr;
}
var Mr, Gi;
function Rc() {
  if (Gi) return Mr;
  Gi = 1;
  var e = Ic;
  return Mr = e.getPrototypeOf || null, Mr;
}
var Rr, Yi;
function F3() {
  if (Yi) return Rr;
  Yi = 1;
  var e = "Function.prototype.bind called on incompatible ", t = Object.prototype.toString, n = Math.max, a = "[object Function]", o = function(u, d) {
    for (var c = [], f = 0; f < u.length; f += 1)
      c[f] = u[f];
    for (var p = 0; p < d.length; p += 1)
      c[p + u.length] = d[p];
    return c;
  }, r = function(u, d) {
    for (var c = [], f = d, p = 0; f < u.length; f += 1, p += 1)
      c[p] = u[f];
    return c;
  }, s = function(i, u) {
    for (var d = "", c = 0; c < i.length; c += 1)
      d += i[c], c + 1 < i.length && (d += u);
    return d;
  };
  return Rr = function(u) {
    var d = this;
    if (typeof d != "function" || t.apply(d) !== a)
      throw new TypeError(e + d);
    for (var c = r(arguments, 1), f, p = function() {
      if (this instanceof f) {
        var _ = d.apply(
          this,
          o(c, arguments)
        );
        return Object(_) === _ ? _ : this;
      }
      return d.apply(
        u,
        o(c, arguments)
      );
    }, m = n(0, d.length - c.length), v = [], g = 0; g < m; g++)
      v[g] = "$" + g;
    if (f = Function("binder", "return function (" + s(v, ",") + "){ return binder.apply(this,arguments); }")(p), d.prototype) {
      var b = function() {
      };
      b.prototype = d.prototype, f.prototype = new b(), b.prototype = null;
    }
    return f;
  }, Rr;
}
var Lr, Xi;
function ur() {
  if (Xi) return Lr;
  Xi = 1;
  var e = F3();
  return Lr = Function.prototype.bind || e, Lr;
}
var Nr, Qi;
function As() {
  return Qi || (Qi = 1, Nr = Function.prototype.call), Nr;
}
var Vr, Ji;
function Lc() {
  return Ji || (Ji = 1, Vr = Function.prototype.apply), Vr;
}
var M3 = typeof Reflect < "u" && Reflect && Reflect.apply, R3 = ur(), L3 = Lc(), N3 = As(), V3 = M3, q3 = V3 || R3.call(N3, L3), z3 = ur(), j3 = ma, K3 = As(), H3 = q3, Nc = function(t) {
  if (t.length < 1 || typeof t[0] != "function")
    throw new j3("a function is required");
  return H3(z3, K3, t);
}, qr, Zi;
function W3() {
  if (Zi) return qr;
  Zi = 1;
  var e = Nc, t = Fc, n;
  try {
    n = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (s) {
    if (!s || typeof s != "object" || !("code" in s) || s.code !== "ERR_PROTO_ACCESS")
      throw s;
  }
  var a = !!n && t && t(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  ), o = Object, r = o.getPrototypeOf;
  return qr = a && typeof a.get == "function" ? e([a.get]) : typeof r == "function" ? (
    /** @type {import('./get')} */
    function(i) {
      return r(i == null ? i : o(i));
    }
  ) : !1, qr;
}
var zr, eu;
function U3() {
  if (eu) return zr;
  eu = 1;
  var e = Mc(), t = Rc(), n = W3();
  return zr = e ? function(o) {
    return e(o);
  } : t ? function(o) {
    if (!o || typeof o != "object" && typeof o != "function")
      throw new TypeError("getProto: not an object");
    return t(o);
  } : n ? function(o) {
    return n(o);
  } : null, zr;
}
var jr, tu;
function G3() {
  if (tu) return jr;
  tu = 1;
  var e = Function.prototype.call, t = Object.prototype.hasOwnProperty, n = ur();
  return jr = n.call(e, t), jr;
}
var _e, Y3 = Ic, X3 = g3, Q3 = y3, J3 = h3, Z3 = b3, ea = w3, Wn = ma, eS = _3, tS = x3, nS = C3, aS = S3, oS = $3, rS = O3, lS = E3, sS = P3, Vc = Function, Kr = function(e) {
  try {
    return Vc('"use strict"; return (' + e + ").constructor;")();
  } catch {
  }
}, Ma = Fc, iS = k3, Hr = function() {
  throw new Wn();
}, uS = Ma ? function() {
  try {
    return arguments.callee, Hr;
  } catch {
    try {
      return Ma(arguments, "callee").get;
    } catch {
      return Hr;
    }
  }
}() : Hr, Ln = I3()(), Ue = U3(), dS = Rc(), cS = Mc(), qc = Lc(), Ya = As(), qn = {}, fS = typeof Uint8Array > "u" || !Ue ? _e : Ue(Uint8Array), yn = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? _e : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? _e : ArrayBuffer,
  "%ArrayIteratorPrototype%": Ln && Ue ? Ue([][Symbol.iterator]()) : _e,
  "%AsyncFromSyncIteratorPrototype%": _e,
  "%AsyncFunction%": qn,
  "%AsyncGenerator%": qn,
  "%AsyncGeneratorFunction%": qn,
  "%AsyncIteratorPrototype%": qn,
  "%Atomics%": typeof Atomics > "u" ? _e : Atomics,
  "%BigInt%": typeof BigInt > "u" ? _e : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? _e : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? _e : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? _e : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": X3,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": Q3,
  "%Float16Array%": typeof Float16Array > "u" ? _e : Float16Array,
  "%Float32Array%": typeof Float32Array > "u" ? _e : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? _e : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? _e : FinalizationRegistry,
  "%Function%": Vc,
  "%GeneratorFunction%": qn,
  "%Int8Array%": typeof Int8Array > "u" ? _e : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? _e : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? _e : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": Ln && Ue ? Ue(Ue([][Symbol.iterator]())) : _e,
  "%JSON%": typeof JSON == "object" ? JSON : _e,
  "%Map%": typeof Map > "u" ? _e : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !Ln || !Ue ? _e : Ue((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Y3,
  "%Object.getOwnPropertyDescriptor%": Ma,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? _e : Promise,
  "%Proxy%": typeof Proxy > "u" ? _e : Proxy,
  "%RangeError%": J3,
  "%ReferenceError%": Z3,
  "%Reflect%": typeof Reflect > "u" ? _e : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? _e : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !Ln || !Ue ? _e : Ue((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? _e : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": Ln && Ue ? Ue(""[Symbol.iterator]()) : _e,
  "%Symbol%": Ln ? Symbol : _e,
  "%SyntaxError%": ea,
  "%ThrowTypeError%": uS,
  "%TypedArray%": fS,
  "%TypeError%": Wn,
  "%Uint8Array%": typeof Uint8Array > "u" ? _e : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? _e : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? _e : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? _e : Uint32Array,
  "%URIError%": eS,
  "%WeakMap%": typeof WeakMap > "u" ? _e : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? _e : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? _e : WeakSet,
  "%Function.prototype.call%": Ya,
  "%Function.prototype.apply%": qc,
  "%Object.defineProperty%": iS,
  "%Object.getPrototypeOf%": dS,
  "%Math.abs%": tS,
  "%Math.floor%": nS,
  "%Math.max%": aS,
  "%Math.min%": oS,
  "%Math.pow%": rS,
  "%Math.round%": lS,
  "%Math.sign%": sS,
  "%Reflect.getPrototypeOf%": cS
};
if (Ue)
  try {
    null.error;
  } catch (e) {
    var pS = Ue(Ue(e));
    yn["%Error.prototype%"] = pS;
  }
var vS = function e(t) {
  var n;
  if (t === "%AsyncFunction%")
    n = Kr("async function () {}");
  else if (t === "%GeneratorFunction%")
    n = Kr("function* () {}");
  else if (t === "%AsyncGeneratorFunction%")
    n = Kr("async function* () {}");
  else if (t === "%AsyncGenerator%") {
    var a = e("%AsyncGeneratorFunction%");
    a && (n = a.prototype);
  } else if (t === "%AsyncIteratorPrototype%") {
    var o = e("%AsyncGenerator%");
    o && Ue && (n = Ue(o.prototype));
  }
  return yn[t] = n, n;
}, nu = {
  __proto__: null,
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
}, Xa = ur(), To = G3(), mS = Xa.call(Ya, Array.prototype.concat), gS = Xa.call(qc, Array.prototype.splice), au = Xa.call(Ya, String.prototype.replace), Io = Xa.call(Ya, String.prototype.slice), yS = Xa.call(Ya, RegExp.prototype.exec), hS = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, bS = /\\(\\)?/g, wS = function(t) {
  var n = Io(t, 0, 1), a = Io(t, -1);
  if (n === "%" && a !== "%")
    throw new ea("invalid intrinsic syntax, expected closing `%`");
  if (a === "%" && n !== "%")
    throw new ea("invalid intrinsic syntax, expected opening `%`");
  var o = [];
  return au(t, hS, function(r, s, i, u) {
    o[o.length] = i ? au(u, bS, "$1") : s || r;
  }), o;
}, _S = function(t, n) {
  var a = t, o;
  if (To(nu, a) && (o = nu[a], a = "%" + o[0] + "%"), To(yn, a)) {
    var r = yn[a];
    if (r === qn && (r = vS(a)), typeof r > "u" && !n)
      throw new Wn("intrinsic " + t + " exists, but is not available. Please file an issue!");
    return {
      alias: o,
      name: a,
      value: r
    };
  }
  throw new ea("intrinsic " + t + " does not exist!");
}, Bs = function(t, n) {
  if (typeof t != "string" || t.length === 0)
    throw new Wn("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof n != "boolean")
    throw new Wn('"allowMissing" argument must be a boolean');
  if (yS(/^%?[^%]*%?$/, t) === null)
    throw new ea("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var a = wS(t), o = a.length > 0 ? a[0] : "", r = _S("%" + o + "%", n), s = r.name, i = r.value, u = !1, d = r.alias;
  d && (o = d[0], gS(a, mS([0, 1], d)));
  for (var c = 1, f = !0; c < a.length; c += 1) {
    var p = a[c], m = Io(p, 0, 1), v = Io(p, -1);
    if ((m === '"' || m === "'" || m === "`" || v === '"' || v === "'" || v === "`") && m !== v)
      throw new ea("property names with quotes must have matching quotes");
    if ((p === "constructor" || !f) && (u = !0), o += "." + p, s = "%" + o + "%", To(yn, s))
      i = yn[s];
    else if (i != null) {
      if (!(p in i)) {
        if (!n)
          throw new Wn("base intrinsic for " + t + " exists, but the property is not available.");
        return;
      }
      if (Ma && c + 1 >= a.length) {
        var g = Ma(i, p);
        f = !!g, f && "get" in g && !("originalValue" in g.get) ? i = g.get : i = i[p];
      } else
        f = To(i, p), i = i[p];
      f && !u && (yn[s] = i);
    }
  }
  return i;
}, zc = Bs, jc = Nc, xS = jc([zc("%String.prototype.indexOf%")]), Kc = function(t, n) {
  var a = (
    /** @type {(this: unknown, ...args: unknown[]) => unknown} */
    zc(t, !!n)
  );
  return typeof a == "function" && xS(t, ".prototype.") > -1 ? jc(
    /** @type {const} */
    [a]
  ) : a;
}, CS = Bs, Qa = Kc, SS = sr, $S = ma, ou = CS("%Map%", !0), OS = Qa("Map.prototype.get", !0), ES = Qa("Map.prototype.set", !0), AS = Qa("Map.prototype.has", !0), BS = Qa("Map.prototype.delete", !0), PS = Qa("Map.prototype.size", !0), Hc = !!ou && /** @type {Exclude<import('.'), false>} */
function() {
  var t, n = {
    assert: function(a) {
      if (!n.has(a))
        throw new $S("Side channel does not contain " + SS(a));
    },
    delete: function(a) {
      if (t) {
        var o = BS(t, a);
        return PS(t) === 0 && (t = void 0), o;
      }
      return !1;
    },
    get: function(a) {
      if (t)
        return OS(t, a);
    },
    has: function(a) {
      return t ? AS(t, a) : !1;
    },
    set: function(a, o) {
      t || (t = new ou()), ES(t, a, o);
    }
  };
  return n;
}, DS = Bs, dr = Kc, kS = sr, vo = Hc, TS = ma, Nn = DS("%WeakMap%", !0), IS = dr("WeakMap.prototype.get", !0), FS = dr("WeakMap.prototype.set", !0), MS = dr("WeakMap.prototype.has", !0), RS = dr("WeakMap.prototype.delete", !0), LS = Nn ? (
  /** @type {Exclude<import('.'), false>} */
  function() {
    var t, n, a = {
      assert: function(o) {
        if (!a.has(o))
          throw new TS("Side channel does not contain " + kS(o));
      },
      delete: function(o) {
        if (Nn && o && (typeof o == "object" || typeof o == "function")) {
          if (t)
            return RS(t, o);
        } else if (vo && n)
          return n.delete(o);
        return !1;
      },
      get: function(o) {
        return Nn && o && (typeof o == "object" || typeof o == "function") && t ? IS(t, o) : n && n.get(o);
      },
      has: function(o) {
        return Nn && o && (typeof o == "object" || typeof o == "function") && t ? MS(t, o) : !!n && n.has(o);
      },
      set: function(o, r) {
        Nn && o && (typeof o == "object" || typeof o == "function") ? (t || (t = new Nn()), FS(t, o, r)) : vo && (n || (n = vo()), n.set(o, r));
      }
    };
    return a;
  }
) : vo, NS = ma, VS = sr, qS = m3, zS = Hc, jS = LS, KS = jS || zS || qS, HS = function() {
  var t, n = {
    assert: function(a) {
      if (!n.has(a))
        throw new NS("Side channel does not contain " + VS(a));
    },
    delete: function(a) {
      return !!t && t.delete(a);
    },
    get: function(a) {
      return t && t.get(a);
    },
    has: function(a) {
      return !!t && t.has(a);
    },
    set: function(a, o) {
      t || (t = KS()), t.set(a, o);
    }
  };
  return n;
}, WS = String.prototype.replace, US = /%20/g, Wr = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, Ps = {
  default: Wr.RFC3986,
  formatters: {
    RFC1738: function(e) {
      return WS.call(e, US, "+");
    },
    RFC3986: function(e) {
      return String(e);
    }
  },
  RFC1738: Wr.RFC1738,
  RFC3986: Wr.RFC3986
}, GS = Ps, Ur = Object.prototype.hasOwnProperty, mn = Array.isArray, St = function() {
  for (var e = [], t = 0; t < 256; ++t)
    e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
  return e;
}(), YS = function(t) {
  for (; t.length > 1; ) {
    var n = t.pop(), a = n.obj[n.prop];
    if (mn(a)) {
      for (var o = [], r = 0; r < a.length; ++r)
        typeof a[r] < "u" && o.push(a[r]);
      n.obj[n.prop] = o;
    }
  }
}, Wc = function(t, n) {
  for (var a = n && n.plainObjects ? { __proto__: null } : {}, o = 0; o < t.length; ++o)
    typeof t[o] < "u" && (a[o] = t[o]);
  return a;
}, XS = function e(t, n, a) {
  if (!n)
    return t;
  if (typeof n != "object" && typeof n != "function") {
    if (mn(t))
      t.push(n);
    else if (t && typeof t == "object")
      (a && (a.plainObjects || a.allowPrototypes) || !Ur.call(Object.prototype, n)) && (t[n] = !0);
    else
      return [t, n];
    return t;
  }
  if (!t || typeof t != "object")
    return [t].concat(n);
  var o = t;
  return mn(t) && !mn(n) && (o = Wc(t, a)), mn(t) && mn(n) ? (n.forEach(function(r, s) {
    if (Ur.call(t, s)) {
      var i = t[s];
      i && typeof i == "object" && r && typeof r == "object" ? t[s] = e(i, r, a) : t.push(r);
    } else
      t[s] = r;
  }), t) : Object.keys(n).reduce(function(r, s) {
    var i = n[s];
    return Ur.call(r, s) ? r[s] = e(r[s], i, a) : r[s] = i, r;
  }, o);
}, QS = function(t, n) {
  return Object.keys(n).reduce(function(a, o) {
    return a[o] = n[o], a;
  }, t);
}, JS = function(e, t, n) {
  var a = e.replace(/\+/g, " ");
  if (n === "iso-8859-1")
    return a.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(a);
  } catch {
    return a;
  }
}, Gr = 1024, ZS = function(t, n, a, o, r) {
  if (t.length === 0)
    return t;
  var s = t;
  if (typeof t == "symbol" ? s = Symbol.prototype.toString.call(t) : typeof t != "string" && (s = String(t)), a === "iso-8859-1")
    return escape(s).replace(/%u[0-9a-f]{4}/gi, function(m) {
      return "%26%23" + parseInt(m.slice(2), 16) + "%3B";
    });
  for (var i = "", u = 0; u < s.length; u += Gr) {
    for (var d = s.length >= Gr ? s.slice(u, u + Gr) : s, c = [], f = 0; f < d.length; ++f) {
      var p = d.charCodeAt(f);
      if (p === 45 || p === 46 || p === 95 || p === 126 || p >= 48 && p <= 57 || p >= 65 && p <= 90 || p >= 97 && p <= 122 || r === GS.RFC1738 && (p === 40 || p === 41)) {
        c[c.length] = d.charAt(f);
        continue;
      }
      if (p < 128) {
        c[c.length] = St[p];
        continue;
      }
      if (p < 2048) {
        c[c.length] = St[192 | p >> 6] + St[128 | p & 63];
        continue;
      }
      if (p < 55296 || p >= 57344) {
        c[c.length] = St[224 | p >> 12] + St[128 | p >> 6 & 63] + St[128 | p & 63];
        continue;
      }
      f += 1, p = 65536 + ((p & 1023) << 10 | d.charCodeAt(f) & 1023), c[c.length] = St[240 | p >> 18] + St[128 | p >> 12 & 63] + St[128 | p >> 6 & 63] + St[128 | p & 63];
    }
    i += c.join("");
  }
  return i;
}, e2 = function(t) {
  for (var n = [{ obj: { o: t }, prop: "o" }], a = [], o = 0; o < n.length; ++o)
    for (var r = n[o], s = r.obj[r.prop], i = Object.keys(s), u = 0; u < i.length; ++u) {
      var d = i[u], c = s[d];
      typeof c == "object" && c !== null && a.indexOf(c) === -1 && (n.push({ obj: s, prop: d }), a.push(c));
    }
  return YS(n), t;
}, t2 = function(t) {
  return Object.prototype.toString.call(t) === "[object RegExp]";
}, n2 = function(t) {
  return !t || typeof t != "object" ? !1 : !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t));
}, a2 = function(t, n) {
  return [].concat(t, n);
}, o2 = function(t, n) {
  if (mn(t)) {
    for (var a = [], o = 0; o < t.length; o += 1)
      a.push(n(t[o]));
    return a;
  }
  return n(t);
}, Uc = {
  arrayToObject: Wc,
  assign: QS,
  combine: a2,
  compact: e2,
  decode: JS,
  encode: ZS,
  isBuffer: n2,
  isRegExp: t2,
  maybeMap: o2,
  merge: XS
}, Gc = HS, xo = Uc, Aa = Ps, r2 = Object.prototype.hasOwnProperty, Yc = {
  brackets: function(t) {
    return t + "[]";
  },
  comma: "comma",
  indices: function(t, n) {
    return t + "[" + n + "]";
  },
  repeat: function(t) {
    return t;
  }
}, $t = Array.isArray, l2 = Array.prototype.push, Xc = function(e, t) {
  l2.apply(e, $t(t) ? t : [t]);
}, s2 = Date.prototype.toISOString, ru = Aa.default, je = {
  addQueryPrefix: !1,
  allowDots: !1,
  allowEmptyArrays: !1,
  arrayFormat: "indices",
  charset: "utf-8",
  charsetSentinel: !1,
  commaRoundTrip: !1,
  delimiter: "&",
  encode: !0,
  encodeDotInKeys: !1,
  encoder: xo.encode,
  encodeValuesOnly: !1,
  filter: void 0,
  format: ru,
  formatter: Aa.formatters[ru],
  // deprecated
  indices: !1,
  serializeDate: function(t) {
    return s2.call(t);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, i2 = function(t) {
  return typeof t == "string" || typeof t == "number" || typeof t == "boolean" || typeof t == "symbol" || typeof t == "bigint";
}, Yr = {}, u2 = function e(t, n, a, o, r, s, i, u, d, c, f, p, m, v, g, b, _, $) {
  for (var S = t, P = $, A = 0, D = !1; (P = P.get(Yr)) !== void 0 && !D; ) {
    var B = P.get(t);
    if (A += 1, typeof B < "u") {
      if (B === A)
        throw new RangeError("Cyclic object value");
      D = !0;
    }
    typeof P.get(Yr) > "u" && (A = 0);
  }
  if (typeof c == "function" ? S = c(n, S) : S instanceof Date ? S = m(S) : a === "comma" && $t(S) && (S = xo.maybeMap(S, function(se) {
    return se instanceof Date ? m(se) : se;
  })), S === null) {
    if (s)
      return d && !b ? d(n, je.encoder, _, "key", v) : n;
    S = "";
  }
  if (i2(S) || xo.isBuffer(S)) {
    if (d) {
      var I = b ? n : d(n, je.encoder, _, "key", v);
      return [g(I) + "=" + g(d(S, je.encoder, _, "value", v))];
    }
    return [g(n) + "=" + g(String(S))];
  }
  var F = [];
  if (typeof S > "u")
    return F;
  var T;
  if (a === "comma" && $t(S))
    b && d && (S = xo.maybeMap(S, d)), T = [{ value: S.length > 0 ? S.join(",") || null : void 0 }];
  else if ($t(c))
    T = c;
  else {
    var L = Object.keys(S);
    T = f ? L.sort(f) : L;
  }
  var M = u ? String(n).replace(/\./g, "%2E") : String(n), K = o && $t(S) && S.length === 1 ? M + "[]" : M;
  if (r && $t(S) && S.length === 0)
    return K + "[]";
  for (var j = 0; j < T.length; ++j) {
    var G = T[j], W = typeof G == "object" && G && typeof G.value < "u" ? G.value : S[G];
    if (!(i && W === null)) {
      var ee = p && u ? String(G).replace(/\./g, "%2E") : String(G), Z = $t(S) ? typeof a == "function" ? a(K, ee) : K : K + (p ? "." + ee : "[" + ee + "]");
      $.set(t, A);
      var z = Gc();
      z.set(Yr, $), Xc(F, e(
        W,
        Z,
        a,
        o,
        r,
        s,
        i,
        u,
        a === "comma" && b && $t(S) ? null : d,
        c,
        f,
        p,
        m,
        v,
        g,
        b,
        _,
        z
      ));
    }
  }
  return F;
}, d2 = function(t) {
  if (!t)
    return je;
  if (typeof t.allowEmptyArrays < "u" && typeof t.allowEmptyArrays != "boolean")
    throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  if (typeof t.encodeDotInKeys < "u" && typeof t.encodeDotInKeys != "boolean")
    throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
  if (t.encoder !== null && typeof t.encoder < "u" && typeof t.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var n = t.charset || je.charset;
  if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var a = Aa.default;
  if (typeof t.format < "u") {
    if (!r2.call(Aa.formatters, t.format))
      throw new TypeError("Unknown format option provided.");
    a = t.format;
  }
  var o = Aa.formatters[a], r = je.filter;
  (typeof t.filter == "function" || $t(t.filter)) && (r = t.filter);
  var s;
  if (t.arrayFormat in Yc ? s = t.arrayFormat : "indices" in t ? s = t.indices ? "indices" : "repeat" : s = je.arrayFormat, "commaRoundTrip" in t && typeof t.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var i = typeof t.allowDots > "u" ? t.encodeDotInKeys === !0 ? !0 : je.allowDots : !!t.allowDots;
  return {
    addQueryPrefix: typeof t.addQueryPrefix == "boolean" ? t.addQueryPrefix : je.addQueryPrefix,
    allowDots: i,
    allowEmptyArrays: typeof t.allowEmptyArrays == "boolean" ? !!t.allowEmptyArrays : je.allowEmptyArrays,
    arrayFormat: s,
    charset: n,
    charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : je.charsetSentinel,
    commaRoundTrip: !!t.commaRoundTrip,
    delimiter: typeof t.delimiter > "u" ? je.delimiter : t.delimiter,
    encode: typeof t.encode == "boolean" ? t.encode : je.encode,
    encodeDotInKeys: typeof t.encodeDotInKeys == "boolean" ? t.encodeDotInKeys : je.encodeDotInKeys,
    encoder: typeof t.encoder == "function" ? t.encoder : je.encoder,
    encodeValuesOnly: typeof t.encodeValuesOnly == "boolean" ? t.encodeValuesOnly : je.encodeValuesOnly,
    filter: r,
    format: a,
    formatter: o,
    serializeDate: typeof t.serializeDate == "function" ? t.serializeDate : je.serializeDate,
    skipNulls: typeof t.skipNulls == "boolean" ? t.skipNulls : je.skipNulls,
    sort: typeof t.sort == "function" ? t.sort : null,
    strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : je.strictNullHandling
  };
}, c2 = function(e, t) {
  var n = e, a = d2(t), o, r;
  typeof a.filter == "function" ? (r = a.filter, n = r("", n)) : $t(a.filter) && (r = a.filter, o = r);
  var s = [];
  if (typeof n != "object" || n === null)
    return "";
  var i = Yc[a.arrayFormat], u = i === "comma" && a.commaRoundTrip;
  o || (o = Object.keys(n)), a.sort && o.sort(a.sort);
  for (var d = Gc(), c = 0; c < o.length; ++c) {
    var f = o[c], p = n[f];
    a.skipNulls && p === null || Xc(s, u2(
      p,
      f,
      i,
      u,
      a.allowEmptyArrays,
      a.strictNullHandling,
      a.skipNulls,
      a.encodeDotInKeys,
      a.encode ? a.encoder : null,
      a.filter,
      a.sort,
      a.allowDots,
      a.serializeDate,
      a.format,
      a.formatter,
      a.encodeValuesOnly,
      a.charset,
      d
    ));
  }
  var m = s.join(a.delimiter), v = a.addQueryPrefix === !0 ? "?" : "";
  return a.charsetSentinel && (a.charset === "iso-8859-1" ? v += "utf8=%26%2310003%3B&" : v += "utf8=%E2%9C%93&"), m.length > 0 ? v + m : "";
}, wn = Uc, xl = Object.prototype.hasOwnProperty, lu = Array.isArray, Re = {
  allowDots: !1,
  allowEmptyArrays: !1,
  allowPrototypes: !1,
  allowSparse: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decodeDotInKeys: !1,
  decoder: wn.decode,
  delimiter: "&",
  depth: 5,
  duplicates: "combine",
  ignoreQueryPrefix: !1,
  interpretNumericEntities: !1,
  parameterLimit: 1e3,
  parseArrays: !0,
  plainObjects: !1,
  strictDepth: !1,
  strictNullHandling: !1,
  throwOnLimitExceeded: !1
}, f2 = function(e) {
  return e.replace(/&#(\d+);/g, function(t, n) {
    return String.fromCharCode(parseInt(n, 10));
  });
}, Qc = function(e, t, n) {
  if (e && typeof e == "string" && t.comma && e.indexOf(",") > -1)
    return e.split(",");
  if (t.throwOnLimitExceeded && n >= t.arrayLimit)
    throw new RangeError("Array limit exceeded. Only " + t.arrayLimit + " element" + (t.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
  return e;
}, p2 = "utf8=%26%2310003%3B", v2 = "utf8=%E2%9C%93", m2 = function(t, n) {
  var a = { __proto__: null }, o = n.ignoreQueryPrefix ? t.replace(/^\?/, "") : t;
  o = o.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  var r = n.parameterLimit === 1 / 0 ? void 0 : n.parameterLimit, s = o.split(
    n.delimiter,
    n.throwOnLimitExceeded ? r + 1 : r
  );
  if (n.throwOnLimitExceeded && s.length > r)
    throw new RangeError("Parameter limit exceeded. Only " + r + " parameter" + (r === 1 ? "" : "s") + " allowed.");
  var i = -1, u, d = n.charset;
  if (n.charsetSentinel)
    for (u = 0; u < s.length; ++u)
      s[u].indexOf("utf8=") === 0 && (s[u] === v2 ? d = "utf-8" : s[u] === p2 && (d = "iso-8859-1"), i = u, u = s.length);
  for (u = 0; u < s.length; ++u)
    if (u !== i) {
      var c = s[u], f = c.indexOf("]="), p = f === -1 ? c.indexOf("=") : f + 1, m, v;
      p === -1 ? (m = n.decoder(c, Re.decoder, d, "key"), v = n.strictNullHandling ? null : "") : (m = n.decoder(c.slice(0, p), Re.decoder, d, "key"), v = wn.maybeMap(
        Qc(
          c.slice(p + 1),
          n,
          lu(a[m]) ? a[m].length : 0
        ),
        function(b) {
          return n.decoder(b, Re.decoder, d, "value");
        }
      )), v && n.interpretNumericEntities && d === "iso-8859-1" && (v = f2(String(v))), c.indexOf("[]=") > -1 && (v = lu(v) ? [v] : v);
      var g = xl.call(a, m);
      g && n.duplicates === "combine" ? a[m] = wn.combine(a[m], v) : (!g || n.duplicates === "last") && (a[m] = v);
    }
  return a;
}, g2 = function(e, t, n, a) {
  var o = 0;
  if (e.length > 0 && e[e.length - 1] === "[]") {
    var r = e.slice(0, -1).join("");
    o = Array.isArray(t) && t[r] ? t[r].length : 0;
  }
  for (var s = a ? t : Qc(t, n, o), i = e.length - 1; i >= 0; --i) {
    var u, d = e[i];
    if (d === "[]" && n.parseArrays)
      u = n.allowEmptyArrays && (s === "" || n.strictNullHandling && s === null) ? [] : wn.combine([], s);
    else {
      u = n.plainObjects ? { __proto__: null } : {};
      var c = d.charAt(0) === "[" && d.charAt(d.length - 1) === "]" ? d.slice(1, -1) : d, f = n.decodeDotInKeys ? c.replace(/%2E/g, ".") : c, p = parseInt(f, 10);
      !n.parseArrays && f === "" ? u = { 0: s } : !isNaN(p) && d !== f && String(p) === f && p >= 0 && n.parseArrays && p <= n.arrayLimit ? (u = [], u[p] = s) : f !== "__proto__" && (u[f] = s);
    }
    s = u;
  }
  return s;
}, y2 = function(t, n, a, o) {
  if (t) {
    var r = a.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t, s = /(\[[^[\]]*])/, i = /(\[[^[\]]*])/g, u = a.depth > 0 && s.exec(r), d = u ? r.slice(0, u.index) : r, c = [];
    if (d) {
      if (!a.plainObjects && xl.call(Object.prototype, d) && !a.allowPrototypes)
        return;
      c.push(d);
    }
    for (var f = 0; a.depth > 0 && (u = i.exec(r)) !== null && f < a.depth; ) {
      if (f += 1, !a.plainObjects && xl.call(Object.prototype, u[1].slice(1, -1)) && !a.allowPrototypes)
        return;
      c.push(u[1]);
    }
    if (u) {
      if (a.strictDepth === !0)
        throw new RangeError("Input depth exceeded depth option of " + a.depth + " and strictDepth is true");
      c.push("[" + r.slice(u.index) + "]");
    }
    return g2(c, n, a, o);
  }
}, h2 = function(t) {
  if (!t)
    return Re;
  if (typeof t.allowEmptyArrays < "u" && typeof t.allowEmptyArrays != "boolean")
    throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  if (typeof t.decodeDotInKeys < "u" && typeof t.decodeDotInKeys != "boolean")
    throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
  if (t.decoder !== null && typeof t.decoder < "u" && typeof t.decoder != "function")
    throw new TypeError("Decoder has to be a function.");
  if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  if (typeof t.throwOnLimitExceeded < "u" && typeof t.throwOnLimitExceeded != "boolean")
    throw new TypeError("`throwOnLimitExceeded` option must be a boolean");
  var n = typeof t.charset > "u" ? Re.charset : t.charset, a = typeof t.duplicates > "u" ? Re.duplicates : t.duplicates;
  if (a !== "combine" && a !== "first" && a !== "last")
    throw new TypeError("The duplicates option must be either combine, first, or last");
  var o = typeof t.allowDots > "u" ? t.decodeDotInKeys === !0 ? !0 : Re.allowDots : !!t.allowDots;
  return {
    allowDots: o,
    allowEmptyArrays: typeof t.allowEmptyArrays == "boolean" ? !!t.allowEmptyArrays : Re.allowEmptyArrays,
    allowPrototypes: typeof t.allowPrototypes == "boolean" ? t.allowPrototypes : Re.allowPrototypes,
    allowSparse: typeof t.allowSparse == "boolean" ? t.allowSparse : Re.allowSparse,
    arrayLimit: typeof t.arrayLimit == "number" ? t.arrayLimit : Re.arrayLimit,
    charset: n,
    charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : Re.charsetSentinel,
    comma: typeof t.comma == "boolean" ? t.comma : Re.comma,
    decodeDotInKeys: typeof t.decodeDotInKeys == "boolean" ? t.decodeDotInKeys : Re.decodeDotInKeys,
    decoder: typeof t.decoder == "function" ? t.decoder : Re.decoder,
    delimiter: typeof t.delimiter == "string" || wn.isRegExp(t.delimiter) ? t.delimiter : Re.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof t.depth == "number" || t.depth === !1 ? +t.depth : Re.depth,
    duplicates: a,
    ignoreQueryPrefix: t.ignoreQueryPrefix === !0,
    interpretNumericEntities: typeof t.interpretNumericEntities == "boolean" ? t.interpretNumericEntities : Re.interpretNumericEntities,
    parameterLimit: typeof t.parameterLimit == "number" ? t.parameterLimit : Re.parameterLimit,
    parseArrays: t.parseArrays !== !1,
    plainObjects: typeof t.plainObjects == "boolean" ? t.plainObjects : Re.plainObjects,
    strictDepth: typeof t.strictDepth == "boolean" ? !!t.strictDepth : Re.strictDepth,
    strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : Re.strictNullHandling,
    throwOnLimitExceeded: typeof t.throwOnLimitExceeded == "boolean" ? t.throwOnLimitExceeded : !1
  };
}, b2 = function(e, t) {
  var n = h2(t);
  if (e === "" || e === null || typeof e > "u")
    return n.plainObjects ? { __proto__: null } : {};
  for (var a = typeof e == "string" ? m2(e, n) : e, o = n.plainObjects ? { __proto__: null } : {}, r = Object.keys(a), s = 0; s < r.length; ++s) {
    var i = r[s], u = y2(i, a[i], n, typeof e == "string");
    o = wn.merge(o, u, n);
  }
  return n.allowSparse === !0 ? o : wn.compact(o);
}, w2 = c2, _2 = b2, x2 = Ps, Xr = {
  formats: x2,
  parse: _2,
  stringify: w2
};
function C2(e) {
  var S, P, A;
  const t = BC(e.sorting), n = PC(e.searching), a = DC(e.filtering), o = Array.isArray((S = e.filtering) == null ? void 0 : S.filters) ? e.filtering.filters.map((D) => D.id) : [], r = () => {
    var D;
    return ((D = e == null ? void 0 : e.filtering) == null ? void 0 : D.paramStyle) !== "flat";
  }, s = () => {
    var D;
    return ((D = e == null ? void 0 : e.searching) == null ? void 0 : D.paramName) || "search";
  }, i = () => {
    var D;
    return r() ? ((D = e == null ? void 0 : e.filtering) == null ? void 0 : D.searchAsFilterKey) ?? "search" : null;
  }, u = ((P = e == null ? void 0 : e.searching) == null ? void 0 : P.autoApplySearch) !== !1, d = () => {
    const D = {};
    t.sort.value && (D.sort = t.sort.value);
    const B = {};
    if (n.search.value && n.search.value.length > 0) {
      const F = n.search.value, T = i();
      T ? B[T] = F : D[s()] = F;
    }
    const I = a.activeFilters.value;
    for (const [F, T] of Object.entries(I)) {
      const L = T.value;
      L == null || typeof L == "string" && L.length === 0 || (r() ? B[F] = L : D[F] = L);
    }
    return r() && Object.keys(B).length > 0 && (D.filter = B), D;
  }, c = () => {
    const D = Xr.parse(window.location.search.replace(/^\?/, ""));
    if (delete D.sort, r()) {
      const M = { ...D.filter || {} };
      for (const K of o) delete M[K];
      {
        const K = i();
        K && delete M[K];
      }
      D.filter = M, i() && delete D[s()];
    } else {
      delete D[s()];
      for (const L of o) delete D[L];
    }
    const B = d();
    let I;
    if (r()) {
      const L = {
        ...D.filter || {},
        ...B.filter || {}
      };
      I = {
        ...D,
        ...B,
        filter: Object.keys(L).length > 0 ? L : void 0
      }, I.filter === void 0 && delete I.filter;
    } else
      I = {
        ...D,
        ...B
      };
    const F = Xr.stringify(I, {
      encode: !1,
      arrayFormat: r() ? "brackets" : "indices"
    }), T = window.location.pathname + (F ? `?${F}` : "");
    window.history.replaceState({}, "", T);
  }, f = () => {
    c(), mf.reload();
  }, p = (D, B) => {
    var F;
    a.setFilter(D, B), ((F = e == null ? void 0 : e.filtering) == null ? void 0 : F.autoApplyFilters) !== !1 && f();
  }, m = (D, B) => {
    a.setFilter(D, B), f();
  }, v = (D) => {
    a.clearFilter(D), f();
  }, g = () => {
    a.clearAllFilters(), f();
  }, b = O(() => d());
  ue(() => {
    const D = Xr.parse(window.location.search.replace(/^\?/, ""));
    (typeof D.sort == "string" || D.sort === null) && (t.sort.value = D.sort ?? null);
    {
      const I = i();
      if (I) {
        const T = (D.filter || {})[I];
        typeof T == "string" && (n.search.value = T);
      } else {
        const F = s();
        typeof D[F] == "string" && (n.search.value = D[F]);
      }
    }
    const B = r() ? D.filter || {} : D;
    for (const I of o) {
      const F = B[I];
      F != null && !(typeof F == "string" && F.length === 0) ? a.setFilter(I, F) : a.clearFilter(I);
    }
  });
  const _ = (D) => {
    n.setSearch(D), u && f();
  }, $ = () => {
    n.clearSearch(), u && f();
  };
  return {
    ...t,
    ...n,
    ...a,
    filterWithoutApplying: p,
    filter: m,
    resetFilter: v,
    clearFilters: g,
    applyFilters: f,
    appliedQuery: b,
    filterConfigs: (A = e.filtering) == null ? void 0 : A.filters,
    // override search methods to include auto-apply
    setSearch: _,
    clearSearch: $,
    searchAutoEnabled: u
  };
}
function hO(e) {
  const t = EC(e.columns), n = AC(e.actions ? e.actions : []), a = C2({
    sorting: {
      defaultSort: e.defaultSort ? e.defaultSort : null
    },
    searching: {
      search: e.search ? e.search : !1,
      paramName: e == null ? void 0 : e.searchParamName,
      autoApplySearch: e.searchAutoApply !== !1
    },
    filtering: {
      filters: e.filters ? e.filters : []
    }
  }), o = gf(), r = O(
    () => o.props[e.dataKey]
  ), s = O(() => {
    var u, d;
    return (((d = (u = r.value) == null ? void 0 : u.data) == null ? void 0 : d.length) ?? 0) > 0;
  }), i = O(
    () => {
      var u;
      return ((u = e.strings) == null ? void 0 : u.emptyMessage) ?? e.emptyMessage ?? "No results.";
    }
  );
  return {
    ...t,
    ...n,
    ...a,
    // Data
    data: r,
    hasData: s,
    // Strings
    emptyMessage: i,
    // Expose strings so UI can localize labels/placeholders
    // Cast to any to allow components to read optional keys safely
    ...e.strings ? { strings: e.strings } : {},
    // Classes
    tableClass: typeof e.tableClass == "string" && e.tableClass.trim().length > 0 ? e.tableClass : void 0,
    tableContainerClass: typeof e.tableContainerClass == "string" && e.tableContainerClass.trim().length > 0 ? e.tableContainerClass : void 0
  };
}
(function() {
  var e;
  try {
    if (typeof document < "u") {
      var t = document.createElement("style");
      t.nonce = (e = document.head.querySelector("meta[property=csp-nonce]")) == null ? void 0 : e.content, t.appendChild(document.createTextNode('[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32,.72,0,1);animation-duration:.5s;animation-timing-function:cubic-bezier(.32,.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--initial-transform, 100%),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,calc(var(--initial-transform, 100%) * -1),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(calc(var(--initial-transform, 100%) * -1),0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--initial-transform, 100%),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top],[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height, 0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left],[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height, 0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(.32,.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-animate=false]{animation:none!important}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32,.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true]):after{content:"";position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]:after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]:after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]:after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]:after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not([data-state=closed]){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:hover,[data-vaul-handle]:active{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover: hover) and (pointer: fine){[data-vaul-drawer]{-webkit-user-select:none;user-select:none}}@media (pointer: fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{0%{transform:translate3d(0,var(--initial-transform, 100%),0)}to{transform:translateZ(0)}}@keyframes slideToBottom{to{transform:translate3d(0,var(--initial-transform, 100%),0)}}@keyframes slideFromTop{0%{transform:translate3d(0,calc(var(--initial-transform, 100%) * -1),0)}to{transform:translateZ(0)}}@keyframes slideToTop{to{transform:translate3d(0,calc(var(--initial-transform, 100%) * -1),0)}}@keyframes slideFromLeft{0%{transform:translate3d(calc(var(--initial-transform, 100%) * -1),0,0)}to{transform:translateZ(0)}}@keyframes slideToLeft{to{transform:translate3d(calc(var(--initial-transform, 100%) * -1),0,0)}}@keyframes slideFromRight{0%{transform:translate3d(var(--initial-transform, 100%),0,0)}to{transform:translateZ(0)}}@keyframes slideToRight{to{transform:translate3d(var(--initial-transform, 100%),0,0)}}')), document.head.appendChild(t);
    }
  } catch (n) {
    console.error("vite-plugin-css-injected-by-js", n);
  }
})();
const S2 = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const $2 = (e) => typeof e < "u";
function O2(e) {
  return JSON.parse(JSON.stringify(e));
}
function su(e, t, n, a = {}) {
  var o, r, s;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: c = !1,
    defaultValue: f,
    shouldEmit: p
  } = a, m = Qe(), v = n || (m == null ? void 0 : m.emit) || ((o = m == null ? void 0 : m.$emit) == null ? void 0 : o.bind(m)) || ((s = (r = m == null ? void 0 : m.proxy) == null ? void 0 : r.$emit) == null ? void 0 : s.bind(m == null ? void 0 : m.proxy));
  let g = d;
  t || (t = "modelValue"), g = g || `update:${t.toString()}`;
  const b = (S) => i ? typeof i == "function" ? i(S) : O2(S) : S, _ = () => $2(e[t]) ? b(e[t]) : f, $ = (S) => {
    p ? p(S) && v(g, S) : v(g, S);
  };
  if (u) {
    const S = _(), P = E(S);
    let A = !1;
    return te(
      () => e[t],
      (D) => {
        A || (A = !0, P.value = b(D), re(() => A = !1));
      }
    ), te(
      P,
      (D) => {
        !A && (D !== e[t] || c) && $(D);
      },
      { deep: c }
    ), P;
  } else
    return O({
      get() {
        return _();
      },
      set(S) {
        $(S);
      }
    });
}
const [Ds, E2] = Ze("DrawerRoot"), Jc = /* @__PURE__ */ new WeakMap();
function We(e, t, n = !1) {
  if (!e || !(e instanceof HTMLElement) || !t)
    return;
  const a = {};
  Object.entries(t).forEach(([o, r]) => {
    if (o.startsWith("--")) {
      e.style.setProperty(o, r);
      return;
    }
    a[o] = e.style[o], e.style[o] = r;
  }), !n && Jc.set(e, a);
}
function A2(e, t) {
  if (!e || !(e instanceof HTMLElement))
    return;
  const n = Jc.get(e);
  n && Object.entries(n).forEach(([a, o]) => {
    e.style[a] = o;
  });
}
function mo(e, t) {
  const n = window.getComputedStyle(e), a = n.transform || n.webkitTransform || n.mozTransform;
  let o = a.match(/^matrix3d\((.+)\)$/);
  return o ? Number.parseFloat(o[1].split(", ")[Ne(t) ? 13 : 12]) : (o = a.match(/^matrix\((.+)\)$/), o ? Number.parseFloat(o[1].split(", ")[Ne(t) ? 5 : 4]) : null);
}
function B2(e) {
  return 8 * (Math.log(e + 1) - 2);
}
function Ne(e) {
  switch (e) {
    case "top":
    case "bottom":
      return !0;
    case "left":
    case "right":
      return !1;
    default:
      return e;
  }
}
function Qr(e, t) {
  if (!e)
    return () => {
    };
  const n = e.style.cssText;
  return Object.assign(e.style, t), () => {
    e.style.cssText = n;
  };
}
function P2(...e) {
  return (...t) => {
    for (const n of e)
      typeof n == "function" && n(...t);
  };
}
const Ie = {
  DURATION: 0.5,
  EASE: [0.32, 0.72, 0, 1]
}, Zc = 0.4, D2 = 0.25, k2 = 100, ef = 8, go = 16, tf = 26, iu = "vaul-dragging";
function T2({
  activeSnapPoint: e,
  snapPoints: t,
  drawerRef: n,
  overlayRef: a,
  fadeFromIndex: o,
  onSnapPointChange: r,
  direction: s
}) {
  const i = E(typeof window < "u" ? {
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  } : void 0);
  function u() {
    i.value = {
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight
    };
  }
  ue(() => {
    typeof window < "u" && window.addEventListener("resize", u);
  }), ta(() => {
    typeof window < "u" && window.removeEventListener("resize", u);
  });
  const d = O(
    () => (t.value && e.value === t.value[t.value.length - 1]) ?? null
  ), c = O(
    () => t.value && t.value.length > 0 && ((o == null ? void 0 : o.value) || (o == null ? void 0 : o.value) === 0) && !Number.isNaN(o == null ? void 0 : o.value) && t.value[(o == null ? void 0 : o.value) ?? -1] === e.value || !t.value
  ), f = O(
    () => {
      var $;
      return (($ = t.value) == null ? void 0 : $.findIndex((S) => S === e.value)) ?? null;
    }
  ), p = O(
    () => {
      var $;
      return (($ = t.value) == null ? void 0 : $.map((S) => {
        const P = typeof S == "string";
        let A = 0;
        if (P && (A = Number.parseInt(S, 10)), Ne(s.value)) {
          const B = P ? A : i.value ? S * i.value.innerHeight : 0;
          return i.value ? s.value === "bottom" ? i.value.innerHeight - B : -i.value.innerHeight + B : B;
        }
        const D = P ? A : i.value ? S * i.value.innerWidth : 0;
        return i.value ? s.value === "right" ? i.value.innerWidth - D : -i.value.innerWidth + D : D;
      })) ?? [];
    }
  ), m = O(
    () => {
      var $;
      return f.value !== null ? ($ = p.value) == null ? void 0 : $[f.value] : null;
    }
  ), v = ($) => {
    var S, P, A, D;
    const B = ((S = p.value) == null ? void 0 : S.findIndex((I) => I === $)) ?? null;
    re(() => {
      var I;
      r(B, p.value), We((I = n.value) == null ? void 0 : I.$el, {
        transition: `transform ${Ie.DURATION}s cubic-bezier(${Ie.EASE.join(",")})`,
        transform: Ne(s.value) ? `translate3d(0, ${$}px, 0)` : `translate3d(${$}px, 0, 0)`
      });
    }), p.value && B !== p.value.length - 1 && B !== (o == null ? void 0 : o.value) ? We((P = a.value) == null ? void 0 : P.$el, {
      transition: `opacity ${Ie.DURATION}s cubic-bezier(${Ie.EASE.join(",")})`,
      opacity: "0"
    }) : We((A = a.value) == null ? void 0 : A.$el, {
      transition: `opacity ${Ie.DURATION}s cubic-bezier(${Ie.EASE.join(",")})`,
      opacity: "1"
    }), e.value = B !== null ? ((D = t.value) == null ? void 0 : D[B]) ?? null : null;
  };
  te(
    [e, p, t],
    () => {
      var $;
      if (e.value) {
        const S = (($ = t.value) == null ? void 0 : $.findIndex((P) => P === e.value)) ?? -1;
        p.value && S !== -1 && typeof p.value[S] == "number" && v(p.value[S]);
      }
    },
    {
      immediate: !0
      // if you want to run the effect immediately as well
    }
  );
  function g({
    draggedDistance: $,
    closeDrawer: S,
    velocity: P,
    dismissible: A
  }) {
    var D, B, I;
    if (o.value === void 0)
      return;
    const F = s.value === "bottom" || s.value === "right" ? (m.value ?? 0) - $ : (m.value ?? 0) + $, T = f.value === o.value - 1, L = f.value === 0, M = $ > 0;
    if (T && We((D = a.value) == null ? void 0 : D.$el, {
      transition: `opacity ${Ie.DURATION}s cubic-bezier(${Ie.EASE.join(",")})`
    }), P > 2 && !M) {
      A ? S() : v(p.value[0]);
      return;
    }
    if (P > 2 && M && p && t.value) {
      v(p.value[t.value.length - 1]);
      return;
    }
    const K = (B = p.value) == null ? void 0 : B.reduce((G, W) => typeof G != "number" || typeof W != "number" ? G : Math.abs(W - F) < Math.abs(G - F) ? W : G), j = Ne(s.value) ? window.innerHeight : window.innerWidth;
    if (P > Zc && Math.abs($) < j * 0.4) {
      const G = M ? 1 : -1;
      if (G > 0 && d) {
        v(p.value[(((I = t.value) == null ? void 0 : I.length) ?? 0) - 1]);
        return;
      }
      if (L && G < 0 && A && S(), f.value === null)
        return;
      v(p.value[f.value + G]);
      return;
    }
    v(K);
  }
  function b({ draggedDistance: $ }) {
    var S;
    if (m.value === null)
      return;
    const P = s.value === "bottom" || s.value === "right" ? m.value - $ : m.value + $;
    (s.value === "bottom" || s.value === "right") && P < p.value[p.value.length - 1] || (s.value === "top" || s.value === "left") && P > p.value[p.value.length - 1] || We((S = n.value) == null ? void 0 : S.$el, {
      transform: Ne(s.value) ? `translate3d(0, ${P}px, 0)` : `translate3d(${P}px, 0, 0)`
    });
  }
  function _($, S) {
    if (!t.value || typeof f.value != "number" || !p.value || o.value === void 0)
      return null;
    const P = f.value === o.value - 1;
    if (f.value >= o.value && S)
      return 0;
    if (P && !S)
      return 1;
    if (!c.value && !P)
      return null;
    const A = P ? f.value + 1 : f.value - 1, D = P ? p.value[A] - p.value[A - 1] : p.value[A + 1] - p.value[A], B = $ / Math.abs(D);
    return P ? 1 - B : B;
  }
  return {
    isLastSnapPoint: d,
    shouldFade: c,
    getPercentageDragged: _,
    activeSnapPointIndex: f,
    onRelease: g,
    onDrag: b,
    snapPointsOffset: p
  };
}
function uu() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
let wa = null;
function I2(e) {
  const { isOpen: t, modal: n, nested: a, hasBeenOpened: o, preventScrollRestoration: r, noBodyStyles: s } = e, i = E(typeof window < "u" ? window.location.href : ""), u = E(0);
  function d() {
    if (uu() && wa === null && t.value && !s.value) {
      wa = {
        position: document.body.style.position,
        top: document.body.style.top,
        left: document.body.style.left,
        height: document.body.style.height
      };
      const { scrollX: f, innerHeight: p } = window;
      document.body.style.setProperty("position", "fixed", "important"), Object.assign(document.body.style, {
        top: `${-u.value}px`,
        left: `${-f}px`,
        right: "0px",
        height: "auto"
      }), setTimeout(() => {
        requestAnimationFrame(() => {
          const m = p - window.innerHeight;
          m && u.value >= p && (document.body.style.top = `-${u.value + m}px`);
        });
      }, 300);
    }
  }
  function c() {
    if (uu() && wa !== null && !s.value) {
      const f = -Number.parseInt(document.body.style.top, 10), p = -Number.parseInt(document.body.style.left, 10);
      Object.assign(document.body.style, wa), window.requestAnimationFrame(() => {
        if (r.value && i.value !== window.location.href) {
          i.value = window.location.href;
          return;
        }
        window.scrollTo(p, f);
      }), wa = null;
    }
  }
  return ue(() => {
    function f() {
      u.value = window.scrollY;
    }
    f(), window.addEventListener("scroll", f), Ge(() => {
      window.removeEventListener("scroll", f);
    });
  }), te([t, o, i], () => {
    a.value || !o.value || (t.value ? (window.matchMedia("(display-mode: standalone)").matches || d(), n.value || setTimeout(() => {
      c();
    }, 500)) : c());
  }), { restorePositionSetting: c };
}
function F2(e, t) {
  return e && e.value ? e : t;
}
function M2(e) {
  const {
    emitDrag: t,
    emitRelease: n,
    emitClose: a,
    emitOpenChange: o,
    open: r,
    dismissible: s,
    nested: i,
    modal: u,
    shouldScaleBackground: d,
    setBackgroundColorOnScale: c,
    scrollLockTimeout: f,
    closeThreshold: p,
    activeSnapPoint: m,
    fadeFromIndex: v,
    direction: g,
    noBodyStyles: b,
    handleOnly: _,
    preventScrollRestoration: $
  } = e, S = E(r.value ?? !1), P = E(!1), A = E(!1), D = E(!1), B = E(null), I = E(null), F = E(null), T = E(null), L = E(null), M = E(!1), K = E(null), j = E(0), G = E(!1);
  E(0);
  const W = E(null);
  E(0);
  const ee = O(() => {
    var ae;
    return ((ae = W.value) == null ? void 0 : ae.$el.getBoundingClientRect().height) || 0;
  }), Z = F2(
    e.snapPoints,
    E(void 0)
  ), z = O(() => {
    var ae;
    return Z && (((ae = Z.value) == null ? void 0 : ae.length) ?? 0) > 0;
  }), se = E(null), {
    activeSnapPointIndex: ie,
    onRelease: Te,
    snapPointsOffset: Me,
    onDrag: qe,
    shouldFade: et,
    getPercentageDragged: ut
  } = T2({
    snapPoints: Z,
    activeSnapPoint: m,
    drawerRef: W,
    fadeFromIndex: v,
    overlayRef: B,
    onSnapPointChange: U,
    direction: g
  });
  function U(ae, Oe) {
    Z.value && ae === Oe.length - 1 && (I.value = /* @__PURE__ */ new Date());
  }
  I2({
    isOpen: S,
    modal: u,
    nested: i,
    hasBeenOpened: P,
    noBodyStyles: b,
    preventScrollRestoration: $
  });
  function X() {
    return (window.innerWidth - tf) / window.innerWidth;
  }
  function oe(ae, Oe) {
    var Be;
    if (!ae)
      return !1;
    let $e = ae;
    const Le = (Be = window.getSelection()) == null ? void 0 : Be.toString(), ze = W.value ? mo(W.value.$el, g.value) : null, tt = /* @__PURE__ */ new Date();
    if ($e.hasAttribute("data-vaul-no-drag") || $e.closest("[data-vaul-no-drag]"))
      return !1;
    if (g.value === "right" || g.value === "left")
      return !0;
    if (I.value && tt.getTime() - I.value.getTime() < 500)
      return !1;
    if (ze !== null && (g.value === "bottom" ? ze > 0 : ze < 0))
      return !0;
    if (Le && Le.length > 0)
      return !1;
    if (L.value && tt.getTime() - L.value.getTime() < f.value && ze === 0 || Oe)
      return L.value = tt, !1;
    for (; $e; ) {
      if ($e.scrollHeight > $e.clientHeight) {
        if ($e.scrollTop !== 0)
          return L.value = /* @__PURE__ */ new Date(), !1;
        if ($e.getAttribute("role") === "dialog")
          return !0;
      }
      $e = $e.parentNode;
    }
    return !0;
  }
  function fe(ae) {
    !s.value && !Z.value || W.value && !W.value.$el.contains(ae.target) || (A.value = !0, F.value = /* @__PURE__ */ new Date(), ae.target.setPointerCapture(ae.pointerId), j.value = Ne(g.value) ? ae.clientY : ae.clientX);
  }
  function ye(ae) {
    var Oe, Be, $e, Le, ze, tt;
    if (W.value && A.value) {
      const Mt = g.value === "bottom" || g.value === "right" ? 1 : -1, Dn = (j.value - (Ne(g.value) ? ae.clientY : ae.clientX)) * Mt, fn = Dn > 0, Ja = Z.value && !s.value && !fn;
      if (Ja && ie.value === 0)
        return;
      const pn = Math.abs(Dn), Rt = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      let mt = pn / ee.value;
      const kn = ut(pn, fn);
      if (kn !== null && (mt = kn), Ja && mt >= 1 || !M.value && !oe(ae.target, fn))
        return;
      if ((Oe = W == null ? void 0 : W.value) == null || Oe.$el.classList.add(iu), M.value = !0, We((Be = W.value) == null ? void 0 : Be.$el, {
        transition: "none"
      }), We(($e = B.value) == null ? void 0 : $e.$el, {
        transition: "none"
      }), Z.value && qe({ draggedDistance: Dn }), fn && !Z.value) {
        const Lt = B2(Dn), In = Math.min(Lt * -1, 0) * Mt;
        We((Le = W.value) == null ? void 0 : Le.$el, {
          transform: Ne(g.value) ? `translate3d(0, ${In}px, 0)` : `translate3d(${In}px, 0, 0)`
        });
        return;
      }
      const Tn = 1 - mt;
      if ((et.value || v.value && ie.value === v.value - 1) && (t(mt), We(
        (ze = B.value) == null ? void 0 : ze.$el,
        {
          opacity: `${Tn}`,
          transition: "none"
        },
        !0
      )), Rt && B.value && d.value) {
        const Lt = Math.min(X() + mt * (1 - X()), 1), In = 8 - mt * 8, Za = Math.max(0, 14 - mt * 14);
        We(
          Rt,
          {
            borderRadius: `${In}px`,
            transform: Ne(g.value) ? `scale(${Lt}) translate3d(0, ${Za}px, 0)` : `scale(${Lt}) translate3d(${Za}px, 0, 0)`,
            transition: "none"
          },
          !0
        );
      }
      if (!Z.value) {
        const Lt = pn * Mt;
        We((tt = W.value) == null ? void 0 : tt.$el, {
          transform: Ne(g.value) ? `translate3d(0, ${Lt}px, 0)` : `translate3d(${Lt}px, 0, 0)`
        });
      }
    }
  }
  function J() {
    var ae;
    if (!W.value)
      return;
    const Oe = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]"), Be = mo(W.value.$el, g.value);
    We(W.value.$el, {
      transform: "translate3d(0, 0, 0)",
      transition: `transform ${Ie.DURATION}s cubic-bezier(${Ie.EASE.join(",")})`
    }), We((ae = B.value) == null ? void 0 : ae.$el, {
      transition: `opacity ${Ie.DURATION}s cubic-bezier(${Ie.EASE.join(",")})`,
      opacity: "1"
    }), d.value && Be && Be > 0 && S.value && We(
      Oe,
      {
        borderRadius: `${ef}px`,
        overflow: "hidden",
        ...Ne(g.value) ? {
          transform: `scale(${X()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
          transformOrigin: "top"
        } : {
          transform: `scale(${X()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
          transformOrigin: "left"
        },
        transitionProperty: "transform, border-radius",
        transitionDuration: `${Ie.DURATION}s`,
        transitionTimingFunction: `cubic-bezier(${Ie.EASE.join(",")})`
      },
      !0
    );
  }
  function be(ae) {
    W.value && (a(), ae || (S.value = !1), window.setTimeout(() => {
      Z.value && (m.value = Z.value[0]);
    }, Ie.DURATION * 1e3));
  }
  Se(() => {
    if (!S.value && d.value && S2) {
      const ae = setTimeout(() => {
        A2(document.body);
      }, 200);
      return () => clearTimeout(ae);
    }
  }), te(r, () => {
    S.value = r.value, r.value || be();
  });
  function Ae(ae) {
    if (!A.value || !W.value)
      return;
    W.value.$el.classList.remove(iu), M.value = !1, A.value = !1, T.value = /* @__PURE__ */ new Date();
    const Oe = mo(W.value.$el, g.value);
    if (!oe(ae.target, !1) || !Oe || Number.isNaN(Oe) || F.value === null)
      return;
    const Be = T.value.getTime() - F.value.getTime(), $e = j.value - (Ne(g.value) ? ae.clientY : ae.clientX), Le = Math.abs($e) / Be;
    if (Le > 0.05 && (D.value = !0, window.setTimeout(() => {
      D.value = !1;
    }, 200)), Z.value) {
      const tt = g.value === "bottom" || g.value === "right" ? 1 : -1;
      Te({
        draggedDistance: $e * tt,
        closeDrawer: be,
        velocity: Le,
        dismissible: s.value
      }), n(!0);
      return;
    }
    if (g.value === "bottom" || g.value === "right" ? $e > 0 : $e < 0) {
      J(), n(!0);
      return;
    }
    if (Le > Zc) {
      be(), n(!1);
      return;
    }
    const ze = Math.min(
      W.value.$el.getBoundingClientRect().height ?? 0,
      window.innerHeight
    );
    if (Oe >= ze * p.value) {
      be(), n(!1);
      return;
    }
    n(!0), J();
  }
  te(S, (ae) => {
    ae && (I.value = /* @__PURE__ */ new Date()), o(ae);
  }, { immediate: !0 });
  function Xe(ae) {
    var Oe, Be;
    const $e = ae ? (window.innerWidth - go) / window.innerWidth : 1, Le = ae ? -16 : 0;
    K.value && window.clearTimeout(K.value), We((Oe = W.value) == null ? void 0 : Oe.$el, {
      transition: `transform ${Ie.DURATION}s cubic-bezier(${Ie.EASE.join(",")})`,
      transform: `scale(${$e}) translate3d(0, ${Le}px, 0)`
    }), !ae && (Be = W.value) != null && Be.$el && (K.value = window.setTimeout(() => {
      var ze, tt;
      const Mt = mo((ze = W.value) == null ? void 0 : ze.$el, g.value);
      We((tt = W.value) == null ? void 0 : tt.$el, {
        transition: "none",
        transform: Ne(g.value) ? `translate3d(0, ${Mt}px, 0)` : `translate3d(${Mt}px, 0, 0)`
      });
    }, 500));
  }
  function dt(ae) {
    var Oe;
    if (ae < 0)
      return;
    const Be = Ne(g.value) ? window.innerHeight : window.innerWidth, $e = (Be - go) / Be, Le = $e + ae * (1 - $e), ze = -16 + ae * go;
    We((Oe = W.value) == null ? void 0 : Oe.$el, {
      transform: Ne(g.value) ? `scale(${Le}) translate3d(0, ${ze}px, 0)` : `scale(${Le}) translate3d(${ze}px, 0, 0)`,
      transition: "none"
    });
  }
  function vt(ae) {
    var Oe;
    const Be = Ne(g.value) ? window.innerHeight : window.innerWidth, $e = ae ? (Be - go) / Be : 1, Le = ae ? -16 : 0;
    ae && We((Oe = W.value) == null ? void 0 : Oe.$el, {
      transition: `transform ${Ie.DURATION}s cubic-bezier(${Ie.EASE.join(",")})`,
      transform: Ne(g.value) ? `scale(${$e}) translate3d(0, ${Le}px, 0)` : `scale(${$e}) translate3d(${Le}px, 0, 0)`
    });
  }
  return {
    open: r,
    isOpen: S,
    modal: u,
    keyboardIsOpen: G,
    hasBeenOpened: P,
    drawerRef: W,
    drawerHeightRef: ee,
    overlayRef: B,
    handleRef: se,
    isDragging: A,
    dragStartTime: F,
    isAllowedToDrag: M,
    snapPoints: Z,
    activeSnapPoint: m,
    hasSnapPoints: z,
    pointerStart: j,
    dismissible: s,
    snapPointsOffset: Me,
    direction: g,
    shouldFade: et,
    fadeFromIndex: v,
    shouldScaleBackground: d,
    setBackgroundColorOnScale: c,
    onPress: fe,
    onDrag: ye,
    onRelease: Ae,
    closeDrawer: be,
    onNestedDrag: dt,
    onNestedRelease: vt,
    onNestedOpenChange: Xe,
    emitClose: a,
    emitDrag: t,
    emitRelease: n,
    emitOpenChange: o,
    nested: i,
    handleOnly: _,
    noBodyStyles: b
  };
}
const R2 = /* @__PURE__ */ w({
  __name: "DrawerRoot",
  props: {
    activeSnapPoint: { default: void 0 },
    closeThreshold: { default: D2 },
    shouldScaleBackground: { type: Boolean, default: void 0 },
    setBackgroundColorOnScale: { type: Boolean, default: !0 },
    scrollLockTimeout: { default: k2 },
    fixed: { type: Boolean, default: void 0 },
    dismissible: { type: Boolean, default: !0 },
    modal: { type: Boolean, default: !0 },
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: void 0 },
    nested: { type: Boolean, default: !1 },
    direction: { default: "bottom" },
    noBodyStyles: { type: Boolean },
    handleOnly: { type: Boolean, default: !1 },
    preventScrollRestoration: { type: Boolean },
    snapPoints: { default: void 0 },
    fadeFromIndex: { default: void 0 }
  },
  emits: ["drag", "release", "close", "update:open", "update:activeSnapPoint", "animationEnd"],
  setup(e, { expose: t, emit: n }) {
    const a = e, o = n;
    Ol();
    const r = O(() => a.fadeFromIndex ?? (a.snapPoints && a.snapPoints.length - 1)), s = su(a, "open", o, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), i = su(a, "activeSnapPoint", o, {
      passive: a.activeSnapPoint === void 0
    }), u = {
      emitDrag: (v) => o("drag", v),
      emitRelease: (v) => o("release", v),
      emitClose: () => o("close"),
      emitOpenChange: (v) => {
        o("update:open", v), setTimeout(() => {
          o("animationEnd", v);
        }, Ie.DURATION * 1e3);
      }
    }, { closeDrawer: d, hasBeenOpened: c, modal: f, isOpen: p } = E2(
      M2({
        ...u,
        ...Ce(a),
        activeSnapPoint: i,
        fadeFromIndex: r,
        open: s
      })
    );
    function m(v) {
      if (s.value !== void 0) {
        u.emitOpenChange(v);
        return;
      }
      p.value = v, v ? c.value = !0 : d();
    }
    return t({
      open: p
    }), (v, g) => (y(), C(l(i1), {
      open: l(p),
      modal: l(f),
      "onUpdate:open": m
    }, {
      default: h(() => [
        x(v.$slots, "default", { open: l(p) })
      ]),
      _: 3
    }, 8, ["open", "modal"]));
  }
}), L2 = /* @__PURE__ */ w({
  __name: "DrawerOverlay",
  setup(e) {
    const { overlayRef: t, hasSnapPoints: n, isOpen: a, shouldFade: o } = Ds();
    return (r, s) => (y(), C(l(q1), {
      ref_key: "overlayRef",
      ref: t,
      "data-vaul-overlay": "",
      "data-vaul-snap-points": l(a) && l(n) ? "true" : "false",
      "data-vaul-snap-points-overlay": l(a) && l(o) ? "true" : "false"
    }, null, 8, ["data-vaul-snap-points", "data-vaul-snap-points-overlay"]));
  }
}), N2 = () => () => {
};
function V2() {
  const { direction: e, isOpen: t, shouldScaleBackground: n, setBackgroundColorOnScale: a, noBodyStyles: o } = Ds(), r = E(null), s = E(document.body.style.backgroundColor);
  function i() {
    return (window.innerWidth - tf) / window.innerWidth;
  }
  Se((u) => {
    if (t.value && n.value) {
      r.value && clearTimeout(r.value);
      const d = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      if (!d)
        return;
      P2(
        a.value && !o.value ? Qr(document.body, { background: "black" }) : N2,
        Qr(d, {
          transformOrigin: Ne(e.value) ? "top" : "left",
          transitionProperty: "transform, border-radius",
          transitionDuration: `${Ie.DURATION}s`,
          transitionTimingFunction: `cubic-bezier(${Ie.EASE.join(",")})`
        })
      );
      const c = Qr(d, {
        borderRadius: `${ef}px`,
        overflow: "hidden",
        ...Ne(e.value) ? {
          transform: `scale(${i()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`
        } : {
          transform: `scale(${i()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`
        }
      });
      u(() => {
        c(), r.value = window.setTimeout(() => {
          s.value ? document.body.style.background = s.value : document.body.style.removeProperty("background");
        }, Ie.DURATION * 1e3);
      });
    }
  }, { flush: "pre" });
}
const q2 = /* @__PURE__ */ w({
  __name: "DrawerContent",
  setup(e) {
    const {
      open: t,
      isOpen: n,
      snapPointsOffset: a,
      hasSnapPoints: o,
      drawerRef: r,
      onPress: s,
      onDrag: i,
      onRelease: u,
      modal: d,
      emitOpenChange: c,
      dismissible: f,
      keyboardIsOpen: p,
      closeDrawer: m,
      direction: v,
      handleOnly: g
    } = Ds();
    V2();
    const b = E(!1), _ = O(() => a.value && a.value.length > 0 ? `${a.value[0]}px` : "0");
    function $(A) {
      if (!d.value || A.defaultPrevented) {
        A.preventDefault();
        return;
      }
      p.value && (p.value = !1), f.value ? c(!1) : A.preventDefault();
    }
    function S(A) {
      g.value || s(A);
    }
    function P(A) {
      g.value || i(A);
    }
    return Se(() => {
      o.value && window.requestAnimationFrame(() => {
        b.value = !0;
      });
    }), (A, D) => (y(), C(l(F1), {
      ref_key: "drawerRef",
      ref: r,
      "data-vaul-drawer": "",
      "data-vaul-drawer-direction": l(v),
      "data-vaul-delayed-snap-points": b.value ? "true" : "false",
      "data-vaul-snap-points": l(n) && l(o) ? "true" : "false",
      style: Pt({ "--snap-point-height": _.value }),
      onPointerdown: S,
      onPointermove: P,
      onPointerup: l(u),
      onPointerDownOutside: $,
      onOpenAutoFocus: D[0] || (D[0] = ke(() => {
      }, ["prevent"])),
      onEscapeKeyDown: D[1] || (D[1] = (B) => {
        l(f) || B.preventDefault();
      })
    }, {
      default: h(() => [
        x(A.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-vaul-drawer-direction", "data-vaul-delayed-snap-points", "data-vaul-snap-points", "style", "onPointerup"]));
  }
}), bO = /* @__PURE__ */ w({
  __name: "Drawer",
  props: {
    activeSnapPoint: {},
    closeThreshold: {},
    shouldScaleBackground: { type: Boolean, default: !0 },
    setBackgroundColorOnScale: { type: Boolean },
    scrollLockTimeout: {},
    fixed: { type: Boolean },
    dismissible: { type: Boolean },
    modal: { type: Boolean },
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    nested: { type: Boolean },
    direction: {},
    noBodyStyles: { type: Boolean },
    handleOnly: { type: Boolean },
    preventScrollRestoration: { type: Boolean },
    snapPoints: {},
    fadeFromIndex: {}
  },
  emits: ["drag", "release", "close", "update:open", "update:activeSnapPoint", "animationEnd"],
  setup(e, { emit: t }) {
    const o = It(e, t);
    return (r, s) => (y(), C(l(R2), k({ "data-slot": "drawer" }, l(o)), {
      default: h(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wO = /* @__PURE__ */ w({
  __name: "DrawerClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (y(), C(l(d1), k({ "data-slot": "drawer-close" }, t), {
      default: h(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), z2 = /* @__PURE__ */ w({
  __name: "DrawerOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = Ye(t, "class");
    return (a, o) => (y(), C(l(L2), k({ "data-slot": "drawer-overlay" }, l(n), {
      class: l(N)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        t.class
      )
    }), null, 16, ["class"]));
  }
}), _O = /* @__PURE__ */ w({
  __name: "DrawerContent",
  props: {
    forceMount: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, o = It(n, t);
    return (r, s) => (y(), C(l(K1), null, {
      default: h(() => [
        R(z2),
        R(l(q2), k({ "data-slot": "drawer-content" }, l(o), {
          class: l(N)(
            "group/drawer-content bg-background fixed z-50 flex h-auto flex-col",
            "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg",
            "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg",
            "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:sm:max-w-sm",
            "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:sm:max-w-sm",
            n.class
          )
        }), {
          default: h(() => [
            s[0] || (s[0] = H("div", { class: "mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full bg-muted group-data-[vaul-drawer-direction=bottom]/drawer-content:block" }, null, -1)),
            x(r.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), xO = /* @__PURE__ */ w({
  __name: "DrawerDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = Ye(t, "class");
    return (a, o) => (y(), C(l(R1), k({ "data-slot": "drawer-description" }, l(n), {
      class: l(N)("text-muted-foreground text-sm", t.class)
    }), {
      default: h(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), CO = /* @__PURE__ */ w({
  __name: "DrawerFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (y(), q("div", {
      "data-slot": "drawer-footer",
      class: le(l(N)("mt-auto flex flex-col gap-2 p-4", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), SO = /* @__PURE__ */ w({
  __name: "DrawerHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (y(), q("div", {
      "data-slot": "drawer-header",
      class: le(l(N)("flex flex-col gap-1.5 p-4", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), $O = /* @__PURE__ */ w({
  __name: "DrawerTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = Ye(t, "class");
    return (a, o) => (y(), C(l(W1), k({ "data-slot": "drawer-title" }, l(n), {
      class: l(N)("text-foreground font-semibold", t.class)
    }), {
      default: h(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), OO = /* @__PURE__ */ w({
  __name: "DrawerTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (y(), C(l(G1), k({ "data-slot": "drawer-trigger" }, t), {
      default: h(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), EO = /* @__PURE__ */ w({
  __name: "DropdownMenu",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = de(e, t);
    return (r, s) => (y(), C(l(wg), Q(ne(l(o))), {
      default: h(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), AO = /* @__PURE__ */ w({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const n = He(e);
    return (a, o) => (y(), C(l(_g), k({ class: "outline-none" }, l(n)), {
      default: h(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), BO = /* @__PURE__ */ w({
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
    const n = e, a = t, o = O(() => {
      const { class: s, ...i } = n;
      return i;
    }), r = de(o, a);
    return (s, i) => (y(), C(l(xg), null, {
      default: h(() => [
        R(l(Cg), k(l(r), {
          class: l(N)(
            "z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            n.class
          )
        }), {
          default: h(() => [
            x(s.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), PO = /* @__PURE__ */ w({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (y(), C(l($g), Q(ne(t)), {
      default: h(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), DO = /* @__PURE__ */ w({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = de(e, t);
    return (r, s) => (y(), C(l(Bg), Q(ne(l(o))), {
      default: h(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), kO = /* @__PURE__ */ w({
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
    const t = e, n = O(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = He(n);
    return (o, r) => (y(), C(l(Sg), k(l(a), {
      class: l(N)(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        e.inset && "pl-8",
        t.class
      )
    }), {
      default: h(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), j2 = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, TO = /* @__PURE__ */ w({
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
    const n = e, a = t, o = O(() => {
      const { class: s, ...i } = n;
      return i;
    }), r = de(o, a);
    return (s, i) => (y(), C(l(Eg), k(l(r), {
      class: l(N)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        n.class
      )
    }), {
      default: h(() => [
        H("span", j2, [
          R(l(wd), null, {
            default: h(() => [
              R(l(ec), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        x(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), K2 = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, IO = /* @__PURE__ */ w({
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
    const n = e, a = t, o = O(() => {
      const { class: s, ...i } = n;
      return i;
    }), r = de(o, a);
    return (s, i) => (y(), C(l(Pg), k(l(r), {
      class: l(N)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        n.class
      )
    }), {
      default: h(() => [
        H("span", K2, [
          R(l(wd), null, {
            default: h(() => [
              R(l(Y0), { class: "h-4 w-4 fill-current" })
            ]),
            _: 1
          })
        ]),
        x(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), FO = /* @__PURE__ */ w({
  __name: "DropdownMenuShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (y(), q("span", {
      class: le(l(N)("ml-auto text-xs tracking-widest opacity-60", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), MO = /* @__PURE__ */ w({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = O(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (y(), C(l(Og), k(n.value, {
      class: l(N)("-mx-1 my-1 h-px bg-muted", t.class)
    }), null, 16, ["class"]));
  }
}), RO = /* @__PURE__ */ w({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  setup(e) {
    const t = e, n = O(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = He(n);
    return (o, r) => (y(), C(l(Ag), k(l(a), {
      class: l(N)("px-2 py-1.5 text-sm font-semibold", e.inset && "pl-8", t.class)
    }), {
      default: h(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), LO = /* @__PURE__ */ w({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = de(e, t);
    return (r, s) => (y(), C(l(Dg), Q(ne(l(o))), {
      default: h(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), NO = /* @__PURE__ */ w({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = O(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = He(n);
    return (o, r) => (y(), C(l(Tg), k(l(a), {
      class: l(N)(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
        t.class
      )
    }), {
      default: h(() => [
        x(o.$slots, "default"),
        R(l(U0), { class: "ml-auto h-4 w-4" })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), VO = /* @__PURE__ */ w({
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
    const n = e, a = t, o = O(() => {
      const { class: s, ...i } = n;
      return i;
    }), r = de(o, a);
    return (s, i) => (y(), C(l(kg), k(l(r), {
      class: l(N)(
        "z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        n.class
      )
    }), {
      default: h(() => [
        x(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), qO = /* @__PURE__ */ w({
  __name: "Input",
  props: {
    defaultValue: {},
    modelValue: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = nc(n, "modelValue", t, {
      passive: !0,
      defaultValue: n.defaultValue
    });
    return (r, s) => rt((y(), q("input", {
      "onUpdate:modelValue": s[0] || (s[0] = (i) => ct(o) ? o.value = i : null),
      class: le(
        l(N)(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          n.class
        )
      )
    }, null, 2)), [
      [Ht, l(o)]
    ]);
  }
}), zO = /* @__PURE__ */ w({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = O(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (y(), C(l(Ig), k(n.value, {
      class: l(N)(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        t.class
      )
    }), {
      default: h(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), jO = /* @__PURE__ */ w({
  __name: "Pagination",
  props: {
    page: {},
    defaultPage: {},
    itemsPerPage: {},
    total: {},
    siblingCount: {},
    disabled: { type: Boolean },
    showEdges: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["update:page"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = Ye(n, "class"), r = It(o, a);
    return (s, i) => (y(), C(l(Cx), k({ "data-slot": "pagination" }, l(r), {
      class: l(N)("mx-auto flex w-full justify-center", n.class)
    }), {
      default: h((u) => [
        x(s.$slots, "default", Q(ne(u)))
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), KO = /* @__PURE__ */ w({
  __name: "PaginationContent",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = Ye(t, "class");
    return (a, o) => (y(), C(l(Dx), k({ "data-slot": "pagination-content" }, l(n), {
      class: l(N)("flex flex-row items-center gap-1", t.class)
    }), {
      default: h((r) => [
        x(a.$slots, "default", Q(ne(r)))
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), HO = /* @__PURE__ */ w({
  __name: "PaginationEllipsis",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = Ye(t, "class");
    return (a, o) => (y(), C(l(wx), k({ "data-slot": "pagination-ellipsis" }, l(n), {
      class: l(N)("flex size-9 items-center justify-center", t.class)
    }), {
      default: h(() => [
        x(a.$slots, "default", {}, () => [
          R(l(mw), { class: "size-4" }),
          o[0] || (o[0] = H("span", { class: "sr-only" }, "More pages", -1))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), WO = /* @__PURE__ */ w({
  __name: "PaginationFirst",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, n = Ye(t, "class", "size"), a = Bn(n);
    return (o, r) => (y(), C(l($x), k({
      "data-slot": "pagination-first",
      class: l(N)(l(dn)({ variant: "ghost", size: e.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, l(a)), {
      default: h(() => [
        x(o.$slots, "default", {}, () => [
          R(l(lc)),
          r[0] || (r[0] = H("span", { class: "hidden sm:block" }, "First", -1))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), UO = /* @__PURE__ */ w({
  __name: "PaginationItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: {},
    size: { default: "icon" },
    class: {},
    isActive: { type: Boolean }
  },
  setup(e) {
    const t = e, n = Ye(t, "class", "size", "isActive");
    return (a, o) => (y(), C(l(Tx), k({ "data-slot": "pagination-item" }, l(n), {
      class: l(N)(
        l(dn)({
          variant: e.isActive ? "outline" : "ghost",
          size: e.size
        }),
        t.class
      )
    }), {
      default: h(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), GO = /* @__PURE__ */ w({
  __name: "PaginationLast",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, n = Ye(t, "class", "size"), a = Bn(n);
    return (o, r) => (y(), C(l(Ex), k({
      "data-slot": "pagination-last",
      class: l(N)(l(dn)({ variant: "ghost", size: e.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, l(a)), {
      default: h(() => [
        x(o.$slots, "default", {}, () => [
          r[0] || (r[0] = H("span", { class: "hidden sm:block" }, "Last", -1)),
          R(l(sc))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), YO = /* @__PURE__ */ w({
  __name: "PaginationNext",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, n = Ye(t, "class", "size"), a = Bn(n);
    return (o, r) => (y(), C(l(Fx), k({
      "data-slot": "pagination-next",
      class: l(N)(l(dn)({ variant: "ghost", size: e.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, l(a)), {
      default: h(() => [
        x(o.$slots, "default", {}, () => [
          r[0] || (r[0] = H("span", { class: "hidden sm:block" }, "Next", -1)),
          R(l(sc))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), XO = /* @__PURE__ */ w({
  __name: "PaginationPrevious",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, n = Ye(t, "class", "size"), a = Bn(n);
    return (o, r) => (y(), C(l(Rx), k({
      "data-slot": "pagination-previous",
      class: l(N)(l(dn)({ variant: "ghost", size: e.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, l(a)), {
      default: h(() => [
        x(o.$slots, "default", {}, () => [
          R(l(lc)),
          r[0] || (r[0] = H("span", { class: "hidden sm:block" }, "Previous", -1))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), QO = /* @__PURE__ */ w({
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
    const t = e, n = O(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (y(), C(l(Wg), k(n.value, {
      class: l(N)("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", t.class)
    }), {
      default: h(() => [
        R(l(Ug), {
          class: "h-full w-full flex-1 bg-primary transition-all",
          style: Pt(`transform: translateX(-${100 - (t.modelValue ?? 0)}%);`)
        }, null, 8, ["style"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), JO = /* @__PURE__ */ w({
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
    const o = de(e, t);
    return (r, s) => (y(), C(l(Zg), Q(ne(l(o))), {
      default: h(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ZO = /* @__PURE__ */ w({
  __name: "SelectValue",
  props: {
    placeholder: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (y(), C(l(Cy), Q(ne(t)), {
      default: h(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), eE = /* @__PURE__ */ w({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = O(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = He(n);
    return (o, r) => (y(), C(l(ny), k(l(a), {
      class: l(N)(
        "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:truncate text-start",
        t.class
      )
    }), {
      default: h(() => [
        x(o.$slots, "default"),
        R(l(Sy), { "as-child": "" }, {
          default: h(() => [
            R(l(W0), { class: "h-4 w-4 shrink-0 opacity-50" })
          ]),
          _: 1
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), tE = /* @__PURE__ */ w({
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
    const n = e, a = t, o = O(() => {
      const { class: s, ...i } = n;
      return i;
    }), r = de(o, a);
    return (s, i) => (y(), C(l(ay), null, {
      default: h(() => [
        R(l(cy), k({ ...l(r), ...s.$attrs }, {
          class: l(N)(
            "relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            e.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            n.class
          )
        }), {
          default: h(() => [
            R(l(W2)),
            R(l(wy), {
              class: le(
                l(N)(
                  "p-1",
                  e.position === "popper" && "h-[--radix-select-trigger-height] w-full min-w-[--radix-select-trigger-width]"
                )
              )
            }, {
              default: h(() => [
                x(s.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]),
            R(l(U2))
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), nE = /* @__PURE__ */ w({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = O(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (y(), C(l(hy), k({
      class: l(N)("p-1 w-full", t.class)
    }, n.value), {
      default: h(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), H2 = { class: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center" }, aE = /* @__PURE__ */ w({
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
    const t = e, n = O(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = He(n);
    return (o, r) => (y(), C(l(vy), k(l(a), {
      class: l(N)(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        t.class
      )
    }), {
      default: h(() => [
        H("span", H2, [
          R(l(my), null, {
            default: h(() => [
              R(l(ec), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        R(l($d), null, {
          default: h(() => [
            x(o.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), oE = /* @__PURE__ */ w({
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (y(), C(l($d), Q(ne(t)), {
      default: h(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), rE = /* @__PURE__ */ w({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (y(), C(l(by), {
      class: le(l(N)("px-2 py-1.5 text-sm font-semibold", t.class))
    }, {
      default: h(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), lE = /* @__PURE__ */ w({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = O(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (y(), C(l(fy), k(n.value, {
      class: l(N)("-mx-1 my-1 h-px bg-muted", t.class)
    }), null, 16, ["class"]));
  }
}), W2 = /* @__PURE__ */ w({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = O(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = He(n);
    return (o, r) => (y(), C(l(_y), k(l(a), {
      class: l(N)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: h(() => [
        x(o.$slots, "default", {}, () => [
          R(l(G0))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), U2 = /* @__PURE__ */ w({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = O(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = He(n);
    return (o, r) => (y(), C(l(xy), k(l(a), {
      class: l(N)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: h(() => [
        x(o.$slots, "default", {}, () => [
          R(l(tc))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), sE = /* @__PURE__ */ w({
  __name: "Sheet",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = de(e, t);
    return (r, s) => (y(), C(l(Ul), Q(ne(l(o))), {
      default: h(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), iE = /* @__PURE__ */ w({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (y(), C(l(Gl), Q(ne(t)), {
      default: h(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), uE = /* @__PURE__ */ w({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (y(), C(l(Cn), Q(ne(t)), {
      default: h(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), dE = /* @__PURE__ */ w({
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
    const n = e, a = t, o = O(() => {
      const { class: s, side: i, ...u } = n;
      return u;
    }), r = de(o, a);
    return (s, i) => (y(), C(l(Yl), null, {
      default: h(() => [
        R(l(Go), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        R(l(Uo), k({
          class: l(N)(l(G2)({ side: e.side }), n.class)
        }, { ...l(r), ...s.$attrs }), {
          default: h(() => [
            x(s.$slots, "default"),
            R(l(Cn), { class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary" }, {
              default: h(() => [
                R(l(Zo), { class: "h-4 w-4" })
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
}), cE = /* @__PURE__ */ w({
  __name: "SheetHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (y(), q("div", {
      class: le(l(N)("flex flex-col gap-y-2 text-center sm:text-left", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), fE = /* @__PURE__ */ w({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = O(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (y(), C(l(Zl), k({
      class: l(N)("text-lg font-semibold text-foreground", t.class)
    }, n.value), {
      default: h(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), pE = /* @__PURE__ */ w({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = O(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (y(), C(l(es), k({
      class: l(N)("text-sm text-muted-foreground", t.class)
    }, n.value), {
      default: h(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), vE = /* @__PURE__ */ w({
  __name: "SheetFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (y(), q("div", {
      class: le(l(N)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), G2 = Ha(
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
), mE = /* @__PURE__ */ w({
  __name: "Skeleton",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (y(), q("div", {
      class: le(l(N)("animate-pulse rounded-md bg-primary/10", t.class))
    }, null, 2));
  }
}), gE = /* @__PURE__ */ w({
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
    const n = e, a = t, o = O(() => {
      const { class: s, ...i } = n;
      return i;
    }), r = de(o, a);
    return (s, i) => (y(), C(l(Ry), k({
      class: l(N)("relative flex w-full touch-none select-none items-center", n.class)
    }, l(r)), {
      default: h(() => [
        R(l(Vy), { class: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20" }, {
          default: h(() => [
            R(l(qy), { class: "absolute h-full bg-primary" })
          ]),
          _: 1
        }),
        (y(!0), q(Ee, null, st(e.modelValue, (u, d) => (y(), C(l(Ny), {
          key: d,
          class: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        }))), 128))
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), yE = /* @__PURE__ */ w({
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
    const n = e, a = t, o = O(() => {
      const { class: s, ...i } = n;
      return i;
    }), r = de(o, a);
    return (s, i) => (y(), C(l(Wy), k(l(r), {
      class: l(N)(
        "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        n.class
      )
    }), {
      default: h(() => [
        R(l(Uy), {
          class: le(
            l(N)(
              "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
            )
          )
        }, null, 8, ["class"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), hE = /* @__PURE__ */ w({
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
    const o = de(e, t);
    return (r, s) => (y(), C(l(Yy), Q(ne(l(o))), {
      default: h(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), bE = /* @__PURE__ */ w({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = O(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (y(), C(l(Qy), k({
      class: l(N)(
        "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        t.class
      )
    }, n.value), {
      default: h(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), wE = /* @__PURE__ */ w({
  __name: "TabsList",
  props: {
    loop: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = O(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (y(), C(l(Xy), k(n.value, {
      class: l(N)(
        "inline-flex items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
        t.class
      )
    }), {
      default: h(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Y2 = { class: "truncate" }, _E = /* @__PURE__ */ w({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = O(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = He(n);
    return (o, r) => (y(), C(l(Jy), k(l(a), {
      class: l(N)(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
        t.class
      )
    }), {
      default: h(() => [
        H("span", Y2, [
          x(o.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), X2 = ["placeholder"], xE = /* @__PURE__ */ w({
  __name: "Textarea",
  props: {
    class: {},
    defaultValue: {},
    modelValue: {},
    charLimit: {},
    placeholder: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = nc(n, "modelValue", t, {
      passive: !0,
      defaultValue: n.defaultValue
    }), r = O(() => o.value ? o.value.toString().length : 0);
    return (s, i) => (y(), q(Ee, null, [
      rt(H("textarea", {
        "onUpdate:modelValue": i[0] || (i[0] = (u) => ct(o) ? o.value = u : null),
        placeholder: e.placeholder,
        class: le(
          l(N)(
            "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            n.class
          )
        )
      }, null, 10, X2), [
        [Ht, l(o)]
      ]),
      e.charLimit ? (y(), q("p", {
        key: 0,
        class: le(["mt-1 flex w-full justify-end text-sm text-gray-500", { "text-red-500": r.value > e.charLimit }])
      }, pe(r.value) + " / " + pe(e.charLimit), 3)) : ce("", !0)
    ], 64));
  }
});
export {
  b$ as Accord,
  ob as Accordion,
  rb as AccordionContent,
  lb as AccordionItem,
  sb as AccordionTrigger,
  t0 as AlertDialog,
  s0 as AlertDialogAction,
  i0 as AlertDialogCancel,
  n0 as AlertDialogContent,
  r0 as AlertDialogDescription,
  l0 as AlertDialogFooter,
  a0 as AlertDialogHeader,
  o0 as AlertDialogTitle,
  s$ as AlertDialogTrigger,
  _$ as Avatar,
  C$ as AvatarFallback,
  x$ as AvatarImage,
  S$ as Badge,
  vs as Button,
  $$ as Card,
  O$ as CardContent,
  E$ as CardDescription,
  A$ as CardFooter,
  B$ as CardHeader,
  P$ as CardTitle,
  D$ as Carousel,
  k$ as CarouselContent,
  T$ as CarouselItem,
  F$ as CarouselNext,
  I$ as CarouselPrevious,
  z$ as Checkbox,
  j$ as Collapsible,
  K$ as CollapsibleContent,
  H$ as CollapsibleTrigger,
  W$ as Combobox,
  U$ as ComboboxAnchor,
  N$ as ComboboxCancel,
  G$ as ComboboxEmpty,
  Y$ as ComboboxGroup,
  X$ as ComboboxInput,
  Q$ as ComboboxItem,
  V$ as ComboboxItemIndicator,
  J$ as ComboboxList,
  Z$ as ComboboxSeparator,
  q$ as ComboboxTrigger,
  Lx as Command,
  sO as CommandDialog,
  iO as CommandEmpty,
  uO as CommandGroup,
  dO as CommandInput,
  cO as CommandItem,
  fO as CommandList,
  pO as CommandSeparator,
  vO as CommandShortcut,
  i$ as ConfirmDialog,
  yO as Datatable,
  vC as DatatableDateFilter,
  Ga as DatatableFilter,
  yC as DatatableNumberFilter,
  wC as DatatableNumberRangeFilter,
  Qx as DatatableSearch,
  cC as DatatableSelectFilter,
  iC as DatatableTextFilter,
  Nx as Dialog,
  eO as DialogClose,
  Vx as DialogContent,
  oO as DialogDescription,
  lO as DialogFooter,
  nO as DialogHeader,
  rO as DialogScrollContent,
  aO as DialogTitle,
  tO as DialogTrigger,
  bO as Drawer,
  wO as DrawerClose,
  _O as DrawerContent,
  xO as DrawerDescription,
  CO as DrawerFooter,
  SO as DrawerHeader,
  z2 as DrawerOverlay,
  $O as DrawerTitle,
  OO as DrawerTrigger,
  EO as DropdownMenu,
  TO as DropdownMenuCheckboxItem,
  BO as DropdownMenuContent,
  PO as DropdownMenuGroup,
  kO as DropdownMenuItem,
  RO as DropdownMenuLabel,
  xg as DropdownMenuPortal,
  DO as DropdownMenuRadioGroup,
  IO as DropdownMenuRadioItem,
  MO as DropdownMenuSeparator,
  FO as DropdownMenuShortcut,
  LO as DropdownMenuSub,
  VO as DropdownMenuSubContent,
  NO as DropdownMenuSubTrigger,
  AO as DropdownMenuTrigger,
  y$ as Flasher,
  d$ as Header,
  h$ as Heading,
  qO as Input,
  zO as Label,
  c$ as Main,
  jO as Pagination,
  KO as PaginationContent,
  HO as PaginationEllipsis,
  WO as PaginationFirst,
  UO as PaginationItem,
  GO as PaginationLast,
  YO as PaginationNext,
  XO as PaginationPrevious,
  Jx as Popover,
  o$ as PopoverAnchor,
  eC as PopoverContent,
  Zx as PopoverTrigger,
  QO as Progress,
  JO as Select,
  tE as SelectContent,
  nE as SelectGroup,
  aE as SelectItem,
  oE as SelectItemText,
  rE as SelectLabel,
  U2 as SelectScrollDownButton,
  W2 as SelectScrollUpButton,
  lE as SelectSeparator,
  eE as SelectTrigger,
  ZO as SelectValue,
  sE as Sheet,
  uE as SheetClose,
  dE as SheetContent,
  pE as SheetDescription,
  vE as SheetFooter,
  cE as SheetHeader,
  fE as SheetTitle,
  iE as SheetTrigger,
  mE as Skeleton,
  gE as Slider,
  yE as Switch,
  jx as Table,
  Kx as TableBody,
  gO as TableCaption,
  Oc as TableCell,
  Gx as TableEmpty,
  mO as TableFooter,
  Hx as TableHead,
  Wx as TableHeader,
  gl as TableRow,
  hE as Tabs,
  bE as TabsContent,
  wE as TabsList,
  _E as TabsTrigger,
  xE as Textarea,
  w$ as Tip,
  z0 as Toast,
  g$ as ToastAction,
  Q0 as ToastClose,
  vi as ToastDescription,
  Z0 as ToastProvider,
  J0 as ToastTitle,
  j0 as ToastViewport,
  q0 as Toaster,
  ib as Tooltip,
  ub as TooltipContent,
  db as TooltipProvider,
  cb as TooltipTrigger,
  u$ as TwoColumnLayout,
  f$ as TwoColumnLayoutSidebar,
  p$ as TwoColumnLayoutSidebarDesktop,
  v$ as TwoColumnLayoutSidebarMobile,
  m$ as TwoColumnLayoutSidebarTrigger,
  fb as avatarVariant,
  pb as badgeVariants,
  dn as buttonVariants,
  N as cn,
  l$ as createContext,
  e$ as preset,
  G2 as sheetVariants,
  M0 as toast,
  eb as toastVariants,
  tr as useCarousel,
  c0 as useConfirmDialog,
  hO as useDatatable,
  tb as useFlasher,
  Zd as useToast,
  r$ as valueUpdater
};
