var Js = (e) => {
  throw TypeError(e);
};
var Xd = (e, t, n) => t.has(e) || Js("Cannot " + n);
var ra = (e, t, n) => (Xd(e, t, "read from private field"), n ? n.call(e) : t.get(e)), el = (e, t, n) => t.has(e) ? Js("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n);
import * as Fn from "vue";
import { computed as E, ref as $, shallowRef as pt, watch as ae, getCurrentScope as Ca, onScopeDispose as Ba, shallowReadonly as An, unref as r, defineComponent as b, createBlock as w, openBlock as g, normalizeProps as H, guardReactiveProps as U, withCtx as y, renderSlot as _, mergeProps as T, withModifiers as Ae, nextTick as re, onMounted as de, toRefs as pe, createVNode as R, watchEffect as _e, normalizeStyle as at, createCommentVNode as fe, getCurrentInstance as nt, toRef as Ar, camelize as mo, withKeys as lt, toHandlers as Zd, resolveDynamicComponent as dt, withDirectives as Hn, vShow as Ir, h as ot, createTextVNode as Be, watchSyncEffect as ti, toDisplayString as Me, isRef as Qe, onBeforeMount as ni, onUnmounted as Ke, createElementBlock as V, Fragment as Pe, renderList as nn, useSlots as Mr, Teleport as hn, onBeforeUnmount as Wn, inject as yn, provide as bn, toHandlerKey as ai, onBeforeUpdate as Qd, onUpdated as Jd, reactive as gt, readonly as Un, Comment as Rr, cloneVNode as oi, markRaw as ri, createElementVNode as ie, vModelSelect as ec, toRaw as tc, mergeDefaults as go, watchPostEffect as Fr, effectScope as ho, customRef as qr, normalizeClass as Y, isVNode as nc, toValue as ze, withMemo as ac, vModelText as si, mergeModels as tl, useModel as oc } from "vue";
function li(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var rc = {
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
}, jo = rc, Lr = {
  whitespace: /\s+/g,
  urlHexPairs: /%[\dA-F]{2}/g,
  quotes: /"/g
};
function sc(e) {
  return e.trim().replace(Lr.whitespace, " ");
}
function lc(e) {
  return encodeURIComponent(e).replace(Lr.urlHexPairs, uc);
}
function ic(e) {
  return Object.keys(jo).forEach(function(t) {
    jo[t].test(e) && (e = e.replace(jo[t], t));
  }), e;
}
function uc(e) {
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
function pr(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string, but received " + typeof e);
  e.charCodeAt(0) === 65279 && (e = e.slice(1));
  var t = ic(sc(e)).replace(Lr.quotes, "'");
  return "data:image/svg+xml," + lc(t);
}
pr.toSrcset = function(t) {
  return pr(t).replace(/ /g, "%20");
};
var dc = pr, ii = {}, ui = {};
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
    const s = function(l) {
      return {
        __options: l,
        handler: a(l),
        config: o(l)
      };
    };
    return s.__isOptionsFunction = !0, s.__pluginFunction = a, s.__configFunction = o, s;
  };
  const n = t;
})(ui);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return a;
    }
  });
  const t = /* @__PURE__ */ n(ui);
  function n(o) {
    return o && o.__esModule ? o : {
      default: o
    };
  }
  const a = t.default;
})(ii);
let Ho = ii;
var di = (Ho.__esModule ? Ho : { default: Ho }).default, ci = {}, pi = {};
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
})(pi);
var cc = {
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
  const t = pi, n = /* @__PURE__ */ a(cc);
  function a(s) {
    return s && s.__esModule ? s : {
      default: s
    };
  }
  const o = (0, t.cloneDeep)(n.default.theme);
})(ci);
let Wo = ci;
var pc = (Wo.__esModule ? Wo : { default: Wo }).default, fi = {}, vi = {}, Vr = { exports: {} }, he = String, mi = function() {
  return { isColorSupported: !1, reset: he, bold: he, dim: he, italic: he, underline: he, inverse: he, hidden: he, strikethrough: he, black: he, red: he, green: he, yellow: he, blue: he, magenta: he, cyan: he, white: he, gray: he, bgBlack: he, bgRed: he, bgGreen: he, bgYellow: he, bgBlue: he, bgMagenta: he, bgCyan: he, bgWhite: he, blackBright: he, redBright: he, greenBright: he, yellowBright: he, blueBright: he, magentaBright: he, cyanBright: he, whiteBright: he, bgBlackBright: he, bgRedBright: he, bgGreenBright: he, bgYellowBright: he, bgBlueBright: he, bgMagentaBright: he, bgCyanBright: he, bgWhiteBright: he };
};
Vr.exports = mi();
Vr.exports.createColors = mi;
var fc = Vr.exports;
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(u, d) {
    for (var p in d) Object.defineProperty(u, p, {
      enumerable: !0,
      get: d[p]
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
  const n = /* @__PURE__ */ a(fc);
  function a(u) {
    return u && u.__esModule ? u : {
      default: u
    };
  }
  let o = /* @__PURE__ */ new Set();
  function s(u, d, p) {
    typeof process < "u" && process.env.JEST_WORKER_ID || p && o.has(p) || (p && o.add(p), console.warn(""), d.forEach((c) => console.warn(u, "-", c)));
  }
  function l(u) {
    return n.default.dim(u);
  }
  const i = {
    info(u, d) {
      s(n.default.bold(n.default.cyan("info")), ...Array.isArray(u) ? [
        u
      ] : [
        d,
        u
      ]);
    },
    warn(u, d) {
      s(n.default.bold(n.default.yellow("warn")), ...Array.isArray(u) ? [
        u
      ] : [
        d,
        u
      ]);
    },
    risk(u, d) {
      s(n.default.bold(n.default.magenta("risk")), ...Array.isArray(u) ? [
        u
      ] : [
        d,
        u
      ]);
    }
  };
})(vi);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return o;
    }
  });
  const t = /* @__PURE__ */ n(vi);
  function n(s) {
    return s && s.__esModule ? s : {
      default: s
    };
  }
  function a({ version: s, from: l, to: i }) {
    t.default.warn(`${l}-color-renamed`, [
      `As of Tailwind CSS ${s}, \`${l}\` has been renamed to \`${i}\`.`,
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
})(fi);
let Uo = fi;
var vc = (Uo.__esModule ? Uo : { default: Uo }).default;
const qa = dc, mc = di, gi = pc, Xt = vc, [gc, { lineHeight: hc }] = gi.fontSize.base, { spacing: Vt, borderWidth: nl, borderRadius: al } = gi;
function fn(e, t) {
  return e.replace("<alpha-value>", `var(${t}, 1)`);
}
const yc = mc.withOptions(function(e = { strategy: void 0 }) {
  return function({ addBase: t, addComponents: n, theme: a }) {
    function o(u, d) {
      let p = a(u);
      return !p || p.includes("var(") ? d : p.replace("<alpha-value>", "1");
    }
    const s = e.strategy === void 0 ? ["base", "class"] : [e.strategy], l = [
      {
        base: [
          "input:where([type='text'])",
          "input:where(:not([type]))",
          "input:where([type='email'])",
          "input:where([type='url'])",
          "input:where([type='password'])",
          "input:where([type='number'])",
          "input:where([type='date'])",
          "input:where([type='datetime-local'])",
          "input:where([type='month'])",
          "input:where([type='search'])",
          "input:where([type='tel'])",
          "input:where([type='time'])",
          "input:where([type='week'])",
          "select:where([multiple])",
          "textarea",
          "select"
        ],
        class: [".form-input", ".form-textarea", ".form-select", ".form-multiselect"],
        styles: {
          appearance: "none",
          "background-color": "#fff",
          "border-color": fn(
            a("colors.gray.500", Xt.gray[500]),
            "--tw-border-opacity"
          ),
          "border-width": nl.DEFAULT,
          "border-radius": al.none,
          "padding-top": Vt[2],
          "padding-right": Vt[3],
          "padding-bottom": Vt[2],
          "padding-left": Vt[3],
          "font-size": gc,
          "line-height": hc,
          "--tw-shadow": "0 0 #0000",
          "&:focus": {
            outline: "2px solid transparent",
            "outline-offset": "2px",
            "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)",
            "--tw-ring-offset-width": "0px",
            "--tw-ring-offset-color": "#fff",
            "--tw-ring-color": fn(
              a("colors.blue.600", Xt.blue[600]),
              "--tw-ring-opacity"
            ),
            "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
            "--tw-ring-shadow": "var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
            "box-shadow": "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)",
            "border-color": fn(
              a("colors.blue.600", Xt.blue[600]),
              "--tw-border-opacity"
            )
          }
        }
      },
      {
        base: ["input::placeholder", "textarea::placeholder"],
        class: [".form-input::placeholder", ".form-textarea::placeholder"],
        styles: {
          color: fn(a("colors.gray.500", Xt.gray[500]), "--tw-text-opacity"),
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
          "background-image": `url("${qa(
            `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="${o(
              "colors.gray.500",
              Xt.gray[500]
            )}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 8l4 4 4-4"/></svg>`
          )}")`,
          "background-position": `right ${Vt[2]} center`,
          "background-repeat": "no-repeat",
          "background-size": "1.5em 1.5em",
          "padding-right": Vt[10],
          "print-color-adjust": "exact"
        }
      },
      {
        base: ["select:where([multiple])", 'select:where([size]:not([size="1"]))'],
        class: ['.form-select:where([size]:not([size="1"]))'],
        styles: {
          "background-image": "initial",
          "background-position": "initial",
          "background-repeat": "unset",
          "background-size": "initial",
          "padding-right": Vt[3],
          "print-color-adjust": "unset"
        }
      },
      {
        base: ["input:where([type='checkbox'])", "input:where([type='radio'])"],
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
          height: Vt[4],
          width: Vt[4],
          color: fn(a("colors.blue.600", Xt.blue[600]), "--tw-text-opacity"),
          "background-color": "#fff",
          "border-color": fn(
            a("colors.gray.500", Xt.gray[500]),
            "--tw-border-opacity"
          ),
          "border-width": nl.DEFAULT,
          "--tw-shadow": "0 0 #0000"
        }
      },
      {
        base: ["input:where([type='checkbox'])"],
        class: [".form-checkbox"],
        styles: {
          "border-radius": al.none
        }
      },
      {
        base: ["input:where([type='radio'])"],
        class: [".form-radio"],
        styles: {
          "border-radius": "100%"
        }
      },
      {
        base: ["input:where([type='checkbox']):focus", "input:where([type='radio']):focus"],
        class: [".form-checkbox:focus", ".form-radio:focus"],
        styles: {
          outline: "2px solid transparent",
          "outline-offset": "2px",
          "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)",
          "--tw-ring-offset-width": "2px",
          "--tw-ring-offset-color": "#fff",
          "--tw-ring-color": fn(
            a("colors.blue.600", Xt.blue[600]),
            "--tw-ring-opacity"
          ),
          "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
          "--tw-ring-shadow": "var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
          "box-shadow": "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)"
        }
      },
      {
        base: ["input:where([type='checkbox']):checked", "input:where([type='radio']):checked"],
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
        base: ["input:where([type='checkbox']):checked"],
        class: [".form-checkbox:checked"],
        styles: {
          "background-image": `url("${qa(
            '<svg viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z"/></svg>'
          )}")`,
          "@media (forced-colors: active) ": {
            appearance: "auto"
          }
        }
      },
      {
        base: ["input:where([type='radio']):checked"],
        class: [".form-radio:checked"],
        styles: {
          "background-image": `url("${qa(
            '<svg viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="3"/></svg>'
          )}")`,
          "@media (forced-colors: active) ": {
            appearance: "auto"
          }
        }
      },
      {
        base: [
          "input:where([type='checkbox']):checked:hover",
          "input:where([type='checkbox']):checked:focus",
          "input:where([type='radio']):checked:hover",
          "input:where([type='radio']):checked:focus"
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
        base: ["input:where([type='checkbox']):indeterminate"],
        class: [".form-checkbox:indeterminate"],
        styles: {
          "background-image": `url("${qa(
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
        base: ["input:where([type='checkbox']):indeterminate:hover", "input:where([type='checkbox']):indeterminate:focus"],
        class: [".form-checkbox:indeterminate:hover", ".form-checkbox:indeterminate:focus"],
        styles: {
          "border-color": "transparent",
          "background-color": "currentColor"
        }
      },
      {
        base: ["input:where([type='file'])"],
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
        base: ["input:where([type='file']):focus"],
        class: null,
        styles: {
          outline: ["1px solid ButtonText", "1px auto -webkit-focus-ring-color"]
        }
      }
    ], i = (u) => l.map((d) => d[u] === null ? null : { [d[u]]: d.styles }).filter(Boolean);
    s.includes("base") && t(i("base")), s.includes("class") && n(i("class"));
  };
});
var bc = yc;
const _c = /* @__PURE__ */ li(bc), wc = di;
function ol(e) {
  return Object.fromEntries(
    Object.entries(e).filter(([t]) => t !== "DEFAULT")
  );
}
var xc = wc(
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
      { values: ol(n("animationDuration")) }
    ), t(
      { delay: (a) => ({ animationDelay: a }) },
      { values: n("animationDelay") }
    ), t(
      { ease: (a) => ({ animationTimingFunction: a }) },
      { values: ol(n("animationTimingFunction")) }
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
const Cc = /* @__PURE__ */ li(xc), pB = {
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
    Cc,
    _c({
      strategy: "class"
    })
  ]
}, Bc = ["top", "right", "bottom", "left"], an = Math.min, ft = Math.max, ao = Math.round, La = Math.floor, Pt = (e) => ({
  x: e,
  y: e
}), Sc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, $c = {
  start: "end",
  end: "start"
};
function fr(e, t, n) {
  return ft(e, an(t, n));
}
function Ht(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Wt(e) {
  return e.split("-")[0];
}
function Gn(e) {
  return e.split("-")[1];
}
function Nr(e) {
  return e === "x" ? "y" : "x";
}
function zr(e) {
  return e === "y" ? "height" : "width";
}
const Oc = /* @__PURE__ */ new Set(["top", "bottom"]);
function Et(e) {
  return Oc.has(Wt(e)) ? "y" : "x";
}
function Kr(e) {
  return Nr(Et(e));
}
function Ec(e, t, n) {
  n === void 0 && (n = !1);
  const a = Gn(e), o = Kr(e), s = zr(o);
  let l = o === "x" ? a === (n ? "end" : "start") ? "right" : "left" : a === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (l = oo(l)), [l, oo(l)];
}
function Pc(e) {
  const t = oo(e);
  return [vr(e), t, vr(t)];
}
function vr(e) {
  return e.replace(/start|end/g, (t) => $c[t]);
}
const rl = ["left", "right"], sl = ["right", "left"], kc = ["top", "bottom"], Tc = ["bottom", "top"];
function Dc(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? sl : rl : t ? rl : sl;
    case "left":
    case "right":
      return t ? kc : Tc;
    default:
      return [];
  }
}
function Ac(e, t, n, a) {
  const o = Gn(e);
  let s = Dc(Wt(e), n === "start", a);
  return o && (s = s.map((l) => l + "-" + o), t && (s = s.concat(s.map(vr)))), s;
}
function oo(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Sc[t]);
}
function Ic(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function hi(e) {
  return typeof e != "number" ? Ic(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function ro(e) {
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
function ll(e, t, n) {
  let {
    reference: a,
    floating: o
  } = e;
  const s = Et(t), l = Kr(t), i = zr(l), u = Wt(t), d = s === "y", p = a.x + a.width / 2 - o.width / 2, c = a.y + a.height / 2 - o.height / 2, f = a[i] / 2 - o[i] / 2;
  let m;
  switch (u) {
    case "top":
      m = {
        x: p,
        y: a.y - o.height
      };
      break;
    case "bottom":
      m = {
        x: p,
        y: a.y + a.height
      };
      break;
    case "right":
      m = {
        x: a.x + a.width,
        y: c
      };
      break;
    case "left":
      m = {
        x: a.x - o.width,
        y: c
      };
      break;
    default:
      m = {
        x: a.x,
        y: a.y
      };
  }
  switch (Gn(t)) {
    case "start":
      m[l] -= f * (n && d ? -1 : 1);
      break;
    case "end":
      m[l] += f * (n && d ? -1 : 1);
      break;
  }
  return m;
}
const Mc = async (e, t, n) => {
  const {
    placement: a = "bottom",
    strategy: o = "absolute",
    middleware: s = [],
    platform: l
  } = n, i = s.filter(Boolean), u = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let d = await l.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: p,
    y: c
  } = ll(d, a, u), f = a, m = {}, v = 0;
  for (let h = 0; h < i.length; h++) {
    const {
      name: x,
      fn: C
    } = i[h], {
      x: S,
      y: B,
      data: P,
      reset: O
    } = await C({
      x: p,
      y: c,
      initialPlacement: a,
      placement: f,
      strategy: o,
      middlewareData: m,
      rects: d,
      platform: l,
      elements: {
        reference: e,
        floating: t
      }
    });
    p = S ?? p, c = B ?? c, m = {
      ...m,
      [x]: {
        ...m[x],
        ...P
      }
    }, O && v <= 50 && (v++, typeof O == "object" && (O.placement && (f = O.placement), O.rects && (d = O.rects === !0 ? await l.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : O.rects), {
      x: p,
      y: c
    } = ll(d, f, u)), h = -1);
  }
  return {
    x: p,
    y: c,
    placement: f,
    strategy: o,
    middlewareData: m
  };
};
async function va(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: a,
    y: o,
    platform: s,
    rects: l,
    elements: i,
    strategy: u
  } = e, {
    boundary: d = "clippingAncestors",
    rootBoundary: p = "viewport",
    elementContext: c = "floating",
    altBoundary: f = !1,
    padding: m = 0
  } = Ht(t, e), v = hi(m), x = i[f ? c === "floating" ? "reference" : "floating" : c], C = ro(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(x))) == null || n ? x : x.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(i.floating)),
    boundary: d,
    rootBoundary: p,
    strategy: u
  })), S = c === "floating" ? {
    x: a,
    y: o,
    width: l.floating.width,
    height: l.floating.height
  } : l.reference, B = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(i.floating)), P = await (s.isElement == null ? void 0 : s.isElement(B)) ? await (s.getScale == null ? void 0 : s.getScale(B)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, O = ro(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: S,
    offsetParent: B,
    strategy: u
  }) : S);
  return {
    top: (C.top - O.top + v.top) / P.y,
    bottom: (O.bottom - C.bottom + v.bottom) / P.y,
    left: (C.left - O.left + v.left) / P.x,
    right: (O.right - C.right + v.right) / P.x
  };
}
const Rc = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: a,
      placement: o,
      rects: s,
      platform: l,
      elements: i,
      middlewareData: u
    } = t, {
      element: d,
      padding: p = 0
    } = Ht(e, t) || {};
    if (d == null)
      return {};
    const c = hi(p), f = {
      x: n,
      y: a
    }, m = Kr(o), v = zr(m), h = await l.getDimensions(d), x = m === "y", C = x ? "top" : "left", S = x ? "bottom" : "right", B = x ? "clientHeight" : "clientWidth", P = s.reference[v] + s.reference[m] - f[m] - s.floating[v], O = f[m] - s.reference[m], I = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(d));
    let k = I ? I[B] : 0;
    (!k || !await (l.isElement == null ? void 0 : l.isElement(I))) && (k = i.floating[B] || s.floating[v]);
    const F = P / 2 - O / 2, D = k / 2 - h[v] / 2 - 1, A = an(c[C], D), q = an(c[S], D), L = A, ee = k - h[v] - q, G = k / 2 - h[v] / 2 + F, z = fr(L, G, ee), N = !u.arrow && Gn(o) != null && G !== z && s.reference[v] / 2 - (G < L ? A : q) - h[v] / 2 < 0, se = N ? G < L ? G - L : G - ee : 0;
    return {
      [m]: f[m] + se,
      data: {
        [m]: z,
        centerOffset: G - z - se,
        ...N && {
          alignmentOffset: se
        }
      },
      reset: N
    };
  }
}), Fc = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, a;
      const {
        placement: o,
        middlewareData: s,
        rects: l,
        initialPlacement: i,
        platform: u,
        elements: d
      } = t, {
        mainAxis: p = !0,
        crossAxis: c = !0,
        fallbackPlacements: f,
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: h = !0,
        ...x
      } = Ht(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const C = Wt(o), S = Et(i), B = Wt(i) === i, P = await (u.isRTL == null ? void 0 : u.isRTL(d.floating)), O = f || (B || !h ? [oo(i)] : Pc(i)), I = v !== "none";
      !f && I && O.push(...Ac(i, h, v, P));
      const k = [i, ...O], F = await va(t, x), D = [];
      let A = ((a = s.flip) == null ? void 0 : a.overflows) || [];
      if (p && D.push(F[C]), c) {
        const G = Ec(o, l, P);
        D.push(F[G[0]], F[G[1]]);
      }
      if (A = [...A, {
        placement: o,
        overflows: D
      }], !D.every((G) => G <= 0)) {
        var q, L;
        const G = (((q = s.flip) == null ? void 0 : q.index) || 0) + 1, z = k[G];
        if (z && (!(c === "alignment" ? S !== Et(z) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        A.every((Z) => Et(Z.placement) === S ? Z.overflows[0] > 0 : !0)))
          return {
            data: {
              index: G,
              overflows: A
            },
            reset: {
              placement: z
            }
          };
        let N = (L = A.filter((se) => se.overflows[0] <= 0).sort((se, Z) => se.overflows[1] - Z.overflows[1])[0]) == null ? void 0 : L.placement;
        if (!N)
          switch (m) {
            case "bestFit": {
              var ee;
              const se = (ee = A.filter((Z) => {
                if (I) {
                  const K = Et(Z.placement);
                  return K === S || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  K === "y";
                }
                return !0;
              }).map((Z) => [Z.placement, Z.overflows.filter((K) => K > 0).reduce((K, ne) => K + ne, 0)]).sort((Z, K) => Z[1] - K[1])[0]) == null ? void 0 : ee[0];
              se && (N = se);
              break;
            }
            case "initialPlacement":
              N = i;
              break;
          }
        if (o !== N)
          return {
            reset: {
              placement: N
            }
          };
      }
      return {};
    }
  };
};
function il(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function ul(e) {
  return Bc.some((t) => e[t] >= 0);
}
const qc = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: a = "referenceHidden",
        ...o
      } = Ht(e, t);
      switch (a) {
        case "referenceHidden": {
          const s = await va(t, {
            ...o,
            elementContext: "reference"
          }), l = il(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: ul(l)
            }
          };
        }
        case "escaped": {
          const s = await va(t, {
            ...o,
            altBoundary: !0
          }), l = il(s, n.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: ul(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, yi = /* @__PURE__ */ new Set(["left", "top"]);
async function Lc(e, t) {
  const {
    placement: n,
    platform: a,
    elements: o
  } = e, s = await (a.isRTL == null ? void 0 : a.isRTL(o.floating)), l = Wt(n), i = Gn(n), u = Et(n) === "y", d = yi.has(l) ? -1 : 1, p = s && u ? -1 : 1, c = Ht(t, e);
  let {
    mainAxis: f,
    crossAxis: m,
    alignmentAxis: v
  } = typeof c == "number" ? {
    mainAxis: c,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: c.mainAxis || 0,
    crossAxis: c.crossAxis || 0,
    alignmentAxis: c.alignmentAxis
  };
  return i && typeof v == "number" && (m = i === "end" ? v * -1 : v), u ? {
    x: m * p,
    y: f * d
  } : {
    x: f * d,
    y: m * p
  };
}
const Vc = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, a;
      const {
        x: o,
        y: s,
        placement: l,
        middlewareData: i
      } = t, u = await Lc(t, e);
      return l === ((n = i.offset) == null ? void 0 : n.placement) && (a = i.arrow) != null && a.alignmentOffset ? {} : {
        x: o + u.x,
        y: s + u.y,
        data: {
          ...u,
          placement: l
        }
      };
    }
  };
}, Nc = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: a,
        placement: o
      } = t, {
        mainAxis: s = !0,
        crossAxis: l = !1,
        limiter: i = {
          fn: (x) => {
            let {
              x: C,
              y: S
            } = x;
            return {
              x: C,
              y: S
            };
          }
        },
        ...u
      } = Ht(e, t), d = {
        x: n,
        y: a
      }, p = await va(t, u), c = Et(Wt(o)), f = Nr(c);
      let m = d[f], v = d[c];
      if (s) {
        const x = f === "y" ? "top" : "left", C = f === "y" ? "bottom" : "right", S = m + p[x], B = m - p[C];
        m = fr(S, m, B);
      }
      if (l) {
        const x = c === "y" ? "top" : "left", C = c === "y" ? "bottom" : "right", S = v + p[x], B = v - p[C];
        v = fr(S, v, B);
      }
      const h = i.fn({
        ...t,
        [f]: m,
        [c]: v
      });
      return {
        ...h,
        data: {
          x: h.x - n,
          y: h.y - a,
          enabled: {
            [f]: s,
            [c]: l
          }
        }
      };
    }
  };
}, zc = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: a,
        placement: o,
        rects: s,
        middlewareData: l
      } = t, {
        offset: i = 0,
        mainAxis: u = !0,
        crossAxis: d = !0
      } = Ht(e, t), p = {
        x: n,
        y: a
      }, c = Et(o), f = Nr(c);
      let m = p[f], v = p[c];
      const h = Ht(i, t), x = typeof h == "number" ? {
        mainAxis: h,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...h
      };
      if (u) {
        const B = f === "y" ? "height" : "width", P = s.reference[f] - s.floating[B] + x.mainAxis, O = s.reference[f] + s.reference[B] - x.mainAxis;
        m < P ? m = P : m > O && (m = O);
      }
      if (d) {
        var C, S;
        const B = f === "y" ? "width" : "height", P = yi.has(Wt(o)), O = s.reference[c] - s.floating[B] + (P && ((C = l.offset) == null ? void 0 : C[c]) || 0) + (P ? 0 : x.crossAxis), I = s.reference[c] + s.reference[B] + (P ? 0 : ((S = l.offset) == null ? void 0 : S[c]) || 0) - (P ? x.crossAxis : 0);
        v < O ? v = O : v > I && (v = I);
      }
      return {
        [f]: m,
        [c]: v
      };
    }
  };
}, Kc = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, a;
      const {
        placement: o,
        rects: s,
        platform: l,
        elements: i
      } = t, {
        apply: u = () => {
        },
        ...d
      } = Ht(e, t), p = await va(t, d), c = Wt(o), f = Gn(o), m = Et(o) === "y", {
        width: v,
        height: h
      } = s.floating;
      let x, C;
      c === "top" || c === "bottom" ? (x = c, C = f === (await (l.isRTL == null ? void 0 : l.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (C = c, x = f === "end" ? "top" : "bottom");
      const S = h - p.top - p.bottom, B = v - p.left - p.right, P = an(h - p[x], S), O = an(v - p[C], B), I = !t.middlewareData.shift;
      let k = P, F = O;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (F = B), (a = t.middlewareData.shift) != null && a.enabled.y && (k = S), I && !f) {
        const A = ft(p.left, 0), q = ft(p.right, 0), L = ft(p.top, 0), ee = ft(p.bottom, 0);
        m ? F = v - 2 * (A !== 0 || q !== 0 ? A + q : ft(p.left, p.right)) : k = h - 2 * (L !== 0 || ee !== 0 ? L + ee : ft(p.top, p.bottom));
      }
      await u({
        ...t,
        availableWidth: F,
        availableHeight: k
      });
      const D = await l.getDimensions(i.floating);
      return v !== D.width || h !== D.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function yo() {
  return typeof window < "u";
}
function _n(e) {
  return jr(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function vt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function At(e) {
  var t;
  return (t = (jr(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function jr(e) {
  return yo() ? e instanceof Node || e instanceof vt(e).Node : !1;
}
function Bt(e) {
  return yo() ? e instanceof Element || e instanceof vt(e).Element : !1;
}
function kt(e) {
  return yo() ? e instanceof HTMLElement || e instanceof vt(e).HTMLElement : !1;
}
function dl(e) {
  return !yo() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof vt(e).ShadowRoot;
}
const jc = /* @__PURE__ */ new Set(["inline", "contents"]);
function Sa(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: a,
    display: o
  } = St(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + a + n) && !jc.has(o);
}
const Hc = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Wc(e) {
  return Hc.has(_n(e));
}
const Uc = [":popover-open", ":modal"];
function bo(e) {
  return Uc.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const Gc = ["transform", "translate", "scale", "rotate", "perspective"], Yc = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Xc = ["paint", "layout", "strict", "content"];
function Hr(e) {
  const t = Wr(), n = Bt(e) ? St(e) : e;
  return Gc.some((a) => n[a] ? n[a] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || Yc.some((a) => (n.willChange || "").includes(a)) || Xc.some((a) => (n.contain || "").includes(a));
}
function Zc(e) {
  let t = on(e);
  for (; kt(t) && !Nn(t); ) {
    if (Hr(t))
      return t;
    if (bo(t))
      return null;
    t = on(t);
  }
  return null;
}
function Wr() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Qc = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Nn(e) {
  return Qc.has(_n(e));
}
function St(e) {
  return vt(e).getComputedStyle(e);
}
function _o(e) {
  return Bt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function on(e) {
  if (_n(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    dl(e) && e.host || // Fallback.
    At(e)
  );
  return dl(t) ? t.host : t;
}
function bi(e) {
  const t = on(e);
  return Nn(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : kt(t) && Sa(t) ? t : bi(t);
}
function ma(e, t, n) {
  var a;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = bi(e), s = o === ((a = e.ownerDocument) == null ? void 0 : a.body), l = vt(o);
  if (s) {
    const i = mr(l);
    return t.concat(l, l.visualViewport || [], Sa(o) ? o : [], i && n ? ma(i) : []);
  }
  return t.concat(o, ma(o, [], n));
}
function mr(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function _i(e) {
  const t = St(e);
  let n = parseFloat(t.width) || 0, a = parseFloat(t.height) || 0;
  const o = kt(e), s = o ? e.offsetWidth : n, l = o ? e.offsetHeight : a, i = ao(n) !== s || ao(a) !== l;
  return i && (n = s, a = l), {
    width: n,
    height: a,
    $: i
  };
}
function Ur(e) {
  return Bt(e) ? e : e.contextElement;
}
function qn(e) {
  const t = Ur(e);
  if (!kt(t))
    return Pt(1);
  const n = t.getBoundingClientRect(), {
    width: a,
    height: o,
    $: s
  } = _i(t);
  let l = (s ? ao(n.width) : n.width) / a, i = (s ? ao(n.height) : n.height) / o;
  return (!l || !Number.isFinite(l)) && (l = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: l,
    y: i
  };
}
const Jc = /* @__PURE__ */ Pt(0);
function wi(e) {
  const t = vt(e);
  return !Wr() || !t.visualViewport ? Jc : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function ep(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== vt(e) ? !1 : t;
}
function mn(e, t, n, a) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = Ur(e);
  let l = Pt(1);
  t && (a ? Bt(a) && (l = qn(a)) : l = qn(e));
  const i = ep(s, n, a) ? wi(s) : Pt(0);
  let u = (o.left + i.x) / l.x, d = (o.top + i.y) / l.y, p = o.width / l.x, c = o.height / l.y;
  if (s) {
    const f = vt(s), m = a && Bt(a) ? vt(a) : a;
    let v = f, h = mr(v);
    for (; h && a && m !== v; ) {
      const x = qn(h), C = h.getBoundingClientRect(), S = St(h), B = C.left + (h.clientLeft + parseFloat(S.paddingLeft)) * x.x, P = C.top + (h.clientTop + parseFloat(S.paddingTop)) * x.y;
      u *= x.x, d *= x.y, p *= x.x, c *= x.y, u += B, d += P, v = vt(h), h = mr(v);
    }
  }
  return ro({
    width: p,
    height: c,
    x: u,
    y: d
  });
}
function wo(e, t) {
  const n = _o(e).scrollLeft;
  return t ? t.left + n : mn(At(e)).left + n;
}
function xi(e, t) {
  const n = e.getBoundingClientRect(), a = n.left + t.scrollLeft - wo(e, n), o = n.top + t.scrollTop;
  return {
    x: a,
    y: o
  };
}
function tp(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: a,
    strategy: o
  } = e;
  const s = o === "fixed", l = At(a), i = t ? bo(t.floating) : !1;
  if (a === l || i && s)
    return n;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = Pt(1);
  const p = Pt(0), c = kt(a);
  if ((c || !c && !s) && ((_n(a) !== "body" || Sa(l)) && (u = _o(a)), kt(a))) {
    const m = mn(a);
    d = qn(a), p.x = m.x + a.clientLeft, p.y = m.y + a.clientTop;
  }
  const f = l && !c && !s ? xi(l, u) : Pt(0);
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - u.scrollLeft * d.x + p.x + f.x,
    y: n.y * d.y - u.scrollTop * d.y + p.y + f.y
  };
}
function np(e) {
  return Array.from(e.getClientRects());
}
function ap(e) {
  const t = At(e), n = _o(e), a = e.ownerDocument.body, o = ft(t.scrollWidth, t.clientWidth, a.scrollWidth, a.clientWidth), s = ft(t.scrollHeight, t.clientHeight, a.scrollHeight, a.clientHeight);
  let l = -n.scrollLeft + wo(e);
  const i = -n.scrollTop;
  return St(a).direction === "rtl" && (l += ft(t.clientWidth, a.clientWidth) - o), {
    width: o,
    height: s,
    x: l,
    y: i
  };
}
const cl = 25;
function op(e, t) {
  const n = vt(e), a = At(e), o = n.visualViewport;
  let s = a.clientWidth, l = a.clientHeight, i = 0, u = 0;
  if (o) {
    s = o.width, l = o.height;
    const p = Wr();
    (!p || p && t === "fixed") && (i = o.offsetLeft, u = o.offsetTop);
  }
  const d = wo(a);
  if (d <= 0) {
    const p = a.ownerDocument, c = p.body, f = getComputedStyle(c), m = p.compatMode === "CSS1Compat" && parseFloat(f.marginLeft) + parseFloat(f.marginRight) || 0, v = Math.abs(a.clientWidth - c.clientWidth - m);
    v <= cl && (s -= v);
  } else d <= cl && (s += d);
  return {
    width: s,
    height: l,
    x: i,
    y: u
  };
}
const rp = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function sp(e, t) {
  const n = mn(e, !0, t === "fixed"), a = n.top + e.clientTop, o = n.left + e.clientLeft, s = kt(e) ? qn(e) : Pt(1), l = e.clientWidth * s.x, i = e.clientHeight * s.y, u = o * s.x, d = a * s.y;
  return {
    width: l,
    height: i,
    x: u,
    y: d
  };
}
function pl(e, t, n) {
  let a;
  if (t === "viewport")
    a = op(e, n);
  else if (t === "document")
    a = ap(At(e));
  else if (Bt(t))
    a = sp(t, n);
  else {
    const o = wi(e);
    a = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return ro(a);
}
function Ci(e, t) {
  const n = on(e);
  return n === t || !Bt(n) || Nn(n) ? !1 : St(n).position === "fixed" || Ci(n, t);
}
function lp(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let a = ma(e, [], !1).filter((i) => Bt(i) && _n(i) !== "body"), o = null;
  const s = St(e).position === "fixed";
  let l = s ? on(e) : e;
  for (; Bt(l) && !Nn(l); ) {
    const i = St(l), u = Hr(l);
    !u && i.position === "fixed" && (o = null), (s ? !u && !o : !u && i.position === "static" && !!o && rp.has(o.position) || Sa(l) && !u && Ci(e, l)) ? a = a.filter((p) => p !== l) : o = i, l = on(l);
  }
  return t.set(e, a), a;
}
function ip(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: a,
    strategy: o
  } = e;
  const l = [...n === "clippingAncestors" ? bo(t) ? [] : lp(t, this._c) : [].concat(n), a], i = l[0], u = l.reduce((d, p) => {
    const c = pl(t, p, o);
    return d.top = ft(c.top, d.top), d.right = an(c.right, d.right), d.bottom = an(c.bottom, d.bottom), d.left = ft(c.left, d.left), d;
  }, pl(t, i, o));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function up(e) {
  const {
    width: t,
    height: n
  } = _i(e);
  return {
    width: t,
    height: n
  };
}
function dp(e, t, n) {
  const a = kt(t), o = At(t), s = n === "fixed", l = mn(e, !0, s, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = Pt(0);
  function d() {
    u.x = wo(o);
  }
  if (a || !a && !s)
    if ((_n(t) !== "body" || Sa(o)) && (i = _o(t)), a) {
      const m = mn(t, !0, s, t);
      u.x = m.x + t.clientLeft, u.y = m.y + t.clientTop;
    } else o && d();
  s && !a && o && d();
  const p = o && !a && !s ? xi(o, i) : Pt(0), c = l.left + i.scrollLeft - u.x - p.x, f = l.top + i.scrollTop - u.y - p.y;
  return {
    x: c,
    y: f,
    width: l.width,
    height: l.height
  };
}
function Go(e) {
  return St(e).position === "static";
}
function fl(e, t) {
  if (!kt(e) || St(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return At(e) === n && (n = n.ownerDocument.body), n;
}
function Bi(e, t) {
  const n = vt(e);
  if (bo(e))
    return n;
  if (!kt(e)) {
    let o = on(e);
    for (; o && !Nn(o); ) {
      if (Bt(o) && !Go(o))
        return o;
      o = on(o);
    }
    return n;
  }
  let a = fl(e, t);
  for (; a && Wc(a) && Go(a); )
    a = fl(a, t);
  return a && Nn(a) && Go(a) && !Hr(a) ? n : a || Zc(e) || n;
}
const cp = async function(e) {
  const t = this.getOffsetParent || Bi, n = this.getDimensions, a = await n(e.floating);
  return {
    reference: dp(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: a.width,
      height: a.height
    }
  };
};
function pp(e) {
  return St(e).direction === "rtl";
}
const fp = {
  convertOffsetParentRelativeRectToViewportRelativeRect: tp,
  getDocumentElement: At,
  getClippingRect: ip,
  getOffsetParent: Bi,
  getElementRects: cp,
  getClientRects: np,
  getDimensions: up,
  getScale: qn,
  isElement: Bt,
  isRTL: pp
};
function Si(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function vp(e, t) {
  let n = null, a;
  const o = At(e);
  function s() {
    var i;
    clearTimeout(a), (i = n) == null || i.disconnect(), n = null;
  }
  function l(i, u) {
    i === void 0 && (i = !1), u === void 0 && (u = 1), s();
    const d = e.getBoundingClientRect(), {
      left: p,
      top: c,
      width: f,
      height: m
    } = d;
    if (i || t(), !f || !m)
      return;
    const v = La(c), h = La(o.clientWidth - (p + f)), x = La(o.clientHeight - (c + m)), C = La(p), B = {
      rootMargin: -v + "px " + -h + "px " + -x + "px " + -C + "px",
      threshold: ft(0, an(1, u)) || 1
    };
    let P = !0;
    function O(I) {
      const k = I[0].intersectionRatio;
      if (k !== u) {
        if (!P)
          return l();
        k ? l(!1, k) : a = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      k === 1 && !Si(d, e.getBoundingClientRect()) && l(), P = !1;
    }
    try {
      n = new IntersectionObserver(O, {
        ...B,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(O, B);
    }
    n.observe(e);
  }
  return l(!0), s;
}
function $i(e, t, n, a) {
  a === void 0 && (a = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = a, d = Ur(e), p = o || s ? [...d ? ma(d) : [], ...ma(t)] : [];
  p.forEach((C) => {
    o && C.addEventListener("scroll", n, {
      passive: !0
    }), s && C.addEventListener("resize", n);
  });
  const c = d && i ? vp(d, n) : null;
  let f = -1, m = null;
  l && (m = new ResizeObserver((C) => {
    let [S] = C;
    S && S.target === d && m && (m.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var B;
      (B = m) == null || B.observe(t);
    })), n();
  }), d && !u && m.observe(d), m.observe(t));
  let v, h = u ? mn(e) : null;
  u && x();
  function x() {
    const C = mn(e);
    h && !Si(h, C) && n(), h = C, v = requestAnimationFrame(x);
  }
  return n(), () => {
    var C;
    p.forEach((S) => {
      o && S.removeEventListener("scroll", n), s && S.removeEventListener("resize", n);
    }), c == null || c(), (C = m) == null || C.disconnect(), m = null, u && cancelAnimationFrame(v);
  };
}
const Oi = Vc, Ei = Nc, so = Fc, Pi = Kc, ki = qc, mp = Rc, Ti = zc, gp = (e, t, n) => {
  const a = /* @__PURE__ */ new Map(), o = {
    platform: fp,
    ...n
  }, s = {
    ...o.platform,
    _c: a
  };
  return Mc(e, t, {
    ...o,
    platform: s
  });
};
function hp(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function gr(e) {
  if (hp(e)) {
    const t = e.$el;
    return jr(t) && _n(t) === "#comment" ? null : t;
  }
  return e;
}
function Rn(e) {
  return typeof e == "function" ? e() : r(e);
}
function Di(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const n = gr(Rn(e.element));
      return n == null ? {} : mp({
        element: n,
        padding: e.padding
      }).fn(t);
    }
  };
}
function Ai(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function vl(e, t) {
  const n = Ai(e);
  return Math.round(t * n) / n;
}
function Ii(e, t, n) {
  n === void 0 && (n = {});
  const a = n.whileElementsMounted, o = E(() => {
    var k;
    return (k = Rn(n.open)) != null ? k : !0;
  }), s = E(() => Rn(n.middleware)), l = E(() => {
    var k;
    return (k = Rn(n.placement)) != null ? k : "bottom";
  }), i = E(() => {
    var k;
    return (k = Rn(n.strategy)) != null ? k : "absolute";
  }), u = E(() => {
    var k;
    return (k = Rn(n.transform)) != null ? k : !0;
  }), d = E(() => gr(e.value)), p = E(() => gr(t.value)), c = $(0), f = $(0), m = $(i.value), v = $(l.value), h = pt({}), x = $(!1), C = E(() => {
    const k = {
      position: m.value,
      left: "0",
      top: "0"
    };
    if (!p.value)
      return k;
    const F = vl(p.value, c.value), D = vl(p.value, f.value);
    return u.value ? {
      ...k,
      transform: "translate(" + F + "px, " + D + "px)",
      ...Ai(p.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: m.value,
      left: F + "px",
      top: D + "px"
    };
  });
  let S;
  function B() {
    if (d.value == null || p.value == null)
      return;
    const k = o.value;
    gp(d.value, p.value, {
      middleware: s.value,
      placement: l.value,
      strategy: i.value
    }).then((F) => {
      c.value = F.x, f.value = F.y, m.value = F.strategy, v.value = F.placement, h.value = F.middlewareData, x.value = k !== !1;
    });
  }
  function P() {
    typeof S == "function" && (S(), S = void 0);
  }
  function O() {
    if (P(), a === void 0) {
      B();
      return;
    }
    if (d.value != null && p.value != null) {
      S = a(d.value, p.value, B);
      return;
    }
  }
  function I() {
    o.value || (x.value = !1);
  }
  return ae([s, l, i, o], B, {
    flush: "sync"
  }), ae([d, p], O, {
    flush: "sync"
  }), ae(o, I, {
    flush: "sync"
  }), Ca() && Ba(P), {
    x: An(c),
    y: An(f),
    strategy: An(m),
    placement: An(v),
    middlewareData: An(h),
    isPositioned: An(x),
    floatingStyles: C,
    update: B
  };
}
function we(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, a = Symbol(n);
  return [(o) => {
    const s = yn(a, o);
    if (s || s === null)
      return s;
    throw new Error(
      `Injection \`${a.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (o) => (bn(a, o), o)];
}
function Gr(e, t, n) {
  const a = n.originalEvent.target, o = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && a.addEventListener(e, t, { once: !0 }), a.dispatchEvent(o);
}
function lo(e, t = Number.NEGATIVE_INFINITY, n = Number.POSITIVE_INFINITY) {
  return Math.min(n, Math.max(t, e));
}
function yp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var bp = function e(t, n) {
  if (t === n) return !0;
  if (t && n && typeof t == "object" && typeof n == "object") {
    if (t.constructor !== n.constructor) return !1;
    var a, o, s;
    if (Array.isArray(t)) {
      if (a = t.length, a != n.length) return !1;
      for (o = a; o-- !== 0; )
        if (!e(t[o], n[o])) return !1;
      return !0;
    }
    if (t.constructor === RegExp) return t.source === n.source && t.flags === n.flags;
    if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === n.valueOf();
    if (t.toString !== Object.prototype.toString) return t.toString() === n.toString();
    if (s = Object.keys(t), a = s.length, a !== Object.keys(n).length) return !1;
    for (o = a; o-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(n, s[o])) return !1;
    for (o = a; o-- !== 0; ) {
      var l = s[o];
      if (!e(t[l], n[l])) return !1;
    }
    return !0;
  }
  return t !== t && n !== n;
};
const vn = /* @__PURE__ */ yp(bp);
function Ln(e) {
  return e == null;
}
function _p(e, t) {
  var n;
  const a = pt();
  return _e(() => {
    a.value = e();
  }, {
    ...t,
    flush: (n = void 0) != null ? n : "sync"
  }), Un(a);
}
function wn(e) {
  return Ca() ? (Ba(e), !0) : !1;
}
function wp() {
  const e = /* @__PURE__ */ new Set(), t = (n) => {
    e.delete(n);
  };
  return {
    on: (n) => {
      e.add(n);
      const a = () => t(n);
      return wn(a), {
        off: a
      };
    },
    off: t,
    trigger: (...n) => Promise.all(Array.from(e).map((a) => a(...n)))
  };
}
function xp(e) {
  let t = !1, n;
  const a = ho(!0);
  return (...o) => (t || (n = a.run(() => e(...o)), t = !0), n);
}
function Mi(e) {
  let t = 0, n, a;
  const o = () => {
    t -= 1, a && t <= 0 && (a.stop(), n = void 0, a = void 0);
  };
  return (...s) => (t += 1, n || (a = ho(!0), n = a.run(() => e(...s))), wn(o), n);
}
function jt(e) {
  return typeof e == "function" ? e() : r(e);
}
const It = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Cp = (e) => typeof e < "u", Bp = (e) => e != null, Sp = Object.prototype.toString, $p = (e) => Sp.call(e) === "[object Object]", Ri = () => {
}, ml = /* @__PURE__ */ Op();
function Op() {
  var e, t;
  return It && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function Ep(e) {
  return nt();
}
function Fi(e, t = 1e4) {
  return qr((n, a) => {
    let o = jt(e), s;
    const l = () => setTimeout(() => {
      o = jt(e), a();
    }, jt(t));
    return wn(() => {
      clearTimeout(s);
    }), {
      get() {
        return n(), o;
      },
      set(i) {
        o = i, a(), clearTimeout(s), s = l();
      }
    };
  });
}
function Pp(e, t) {
  Ep() && Wn(e, t);
}
function Yr(e, t, n = {}) {
  const {
    immediate: a = !0
  } = n, o = $(!1);
  let s = null;
  function l() {
    s && (clearTimeout(s), s = null);
  }
  function i() {
    o.value = !1, l();
  }
  function u(...d) {
    l(), o.value = !0, s = setTimeout(() => {
      o.value = !1, s = null, e(...d);
    }, jt(t));
  }
  return a && (o.value = !0, It && u()), wn(i), {
    isPending: Un(o),
    start: u,
    stop: i
  };
}
function kp(e = 1e3, t = {}) {
  const {
    controls: n = !1,
    callback: a
  } = t, o = Yr(
    a ?? Ri,
    e,
    t
  ), s = E(() => !o.isPending.value);
  return n ? {
    ready: s,
    ...o
  } : s;
}
function ht(e) {
  var t;
  const n = jt(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const $a = It ? window : void 0;
function zn(...e) {
  let t, n, a, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, a, o] = e, t = $a) : [t, n, a, o] = e, !t)
    return Ri;
  Array.isArray(n) || (n = [n]), Array.isArray(a) || (a = [a]);
  const s = [], l = () => {
    s.forEach((p) => p()), s.length = 0;
  }, i = (p, c, f, m) => (p.addEventListener(c, f, m), () => p.removeEventListener(c, f, m)), u = ae(
    () => [ht(t), jt(o)],
    ([p, c]) => {
      if (l(), !p)
        return;
      const f = $p(c) ? { ...c } : c;
      s.push(
        ...n.flatMap((m) => a.map((v) => i(p, m, v, f)))
      );
    },
    { immediate: !0, flush: "post" }
  ), d = () => {
    u(), l();
  };
  return wn(d), d;
}
function Tp(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function Xr(...e) {
  let t, n, a = {};
  e.length === 3 ? (t = e[0], n = e[1], a = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], a = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: o = $a,
    eventName: s = "keydown",
    passive: l = !1,
    dedupe: i = !1
  } = a, u = Tp(t);
  return zn(o, s, (d) => {
    d.repeat && jt(i) || u(d) && n(d);
  }, l);
}
function Zr() {
  const e = $(!1), t = nt();
  return t && de(() => {
    e.value = !0;
  }, t), e;
}
function Dp(e) {
  const t = Zr();
  return E(() => (t.value, !!e()));
}
function Ap(e, t, n = {}) {
  const { window: a = $a, ...o } = n;
  let s;
  const l = Dp(() => a && "MutationObserver" in a), i = () => {
    s && (s.disconnect(), s = void 0);
  }, u = E(() => {
    const f = jt(e), m = (Array.isArray(f) ? f : [f]).map(ht).filter(Bp);
    return new Set(m);
  }), d = ae(
    () => u.value,
    (f) => {
      i(), l.value && f.size && (s = new MutationObserver(t), f.forEach((m) => s.observe(m, o)));
    },
    { immediate: !0, flush: "post" }
  ), p = () => s == null ? void 0 : s.takeRecords(), c = () => {
    i(), d();
  };
  return wn(c), {
    isSupported: l,
    stop: c,
    takeRecords: p
  };
}
function qi(e, t = {}) {
  const {
    immediate: n = !0,
    fpsLimit: a = void 0,
    window: o = $a
  } = t, s = $(!1), l = a ? 1e3 / a : null;
  let i = 0, u = null;
  function d(f) {
    if (!s.value || !o)
      return;
    i || (i = f);
    const m = f - i;
    if (l && m < l) {
      u = o.requestAnimationFrame(d);
      return;
    }
    i = f, e({ delta: m, timestamp: f }), u = o.requestAnimationFrame(d);
  }
  function p() {
    !s.value && o && (s.value = !0, i = 0, u = o.requestAnimationFrame(d));
  }
  function c() {
    s.value = !1, u != null && o && (o.cancelAnimationFrame(u), u = null);
  }
  return n && p(), wn(c), {
    isActive: Un(s),
    pause: c,
    resume: p
  };
}
function Ip(e) {
  return JSON.parse(JSON.stringify(e));
}
function qe(e, t, n, a = {}) {
  var o, s, l;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: p = !1,
    defaultValue: c,
    shouldEmit: f
  } = a, m = nt(), v = n || (m == null ? void 0 : m.emit) || ((o = m == null ? void 0 : m.$emit) == null ? void 0 : o.bind(m)) || ((l = (s = m == null ? void 0 : m.proxy) == null ? void 0 : s.$emit) == null ? void 0 : l.bind(m == null ? void 0 : m.proxy));
  let h = d;
  t || (t = "modelValue"), h = h || `update:${t.toString()}`;
  const x = (B) => i ? typeof i == "function" ? i(B) : Ip(B) : B, C = () => Cp(e[t]) ? x(e[t]) : c, S = (B) => {
    f ? f(B) && v(h, B) : v(h, B);
  };
  if (u) {
    const B = C(), P = $(B);
    let O = !1;
    return ae(
      () => e[t],
      (I) => {
        O || (O = !0, P.value = x(I), re(() => O = !1));
      }
    ), ae(
      P,
      (I) => {
        !O && (I !== e[t] || p) && S(I);
      },
      { deep: p }
    ), P;
  } else
    return E({
      get() {
        return C();
      },
      set(B) {
        S(B);
      }
    });
}
function xo(e) {
  return e ? e.flatMap((t) => t.type === Pe ? xo(t.children) : [t]) : [];
}
function Je() {
  let e = document.activeElement;
  if (e == null)
    return null;
  for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null; )
    e = e.shadowRoot.activeElement;
  return e;
}
const Mp = ["INPUT", "TEXTAREA"];
function Li(e, t, n, a = {}) {
  if (!t || a.enableIgnoredElement && Mp.includes(t.nodeName))
    return null;
  const {
    arrowKeyOptions: o = "both",
    attributeName: s = "[data-radix-vue-collection-item]",
    itemsArray: l = [],
    loop: i = !0,
    dir: u = "ltr",
    preventScroll: d = !0,
    focus: p = !1
  } = a, [c, f, m, v, h, x] = [
    e.key === "ArrowRight",
    e.key === "ArrowLeft",
    e.key === "ArrowUp",
    e.key === "ArrowDown",
    e.key === "Home",
    e.key === "End"
  ], C = m || v, S = c || f;
  if (!h && !x && (!C && !S || o === "vertical" && S || o === "horizontal" && C))
    return null;
  const B = n ? Array.from(n.querySelectorAll(s)) : l;
  if (!B.length)
    return null;
  d && e.preventDefault();
  let P = null;
  return S || C ? P = Vi(B, t, {
    goForward: C ? v : u === "ltr" ? c : f,
    loop: i
  }) : h ? P = B.at(0) || null : x && (P = B.at(-1) || null), p && (P == null || P.focus()), P;
}
function Vi(e, t, n, a = e.length) {
  if (--a === 0)
    return null;
  const o = e.indexOf(t), s = n.goForward ? o + 1 : o - 1;
  if (!n.loop && (s < 0 || s >= e.length))
    return null;
  const l = (s + e.length) % e.length, i = e[l];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? Vi(
    e,
    i,
    n,
    a
  ) : i : null;
}
function Yo(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function hr(e, t, n = ".", a) {
  if (!Yo(t))
    return hr(e, {}, n);
  const o = Object.assign({}, t);
  for (const s in e) {
    if (s === "__proto__" || s === "constructor")
      continue;
    const l = e[s];
    l != null && (Array.isArray(l) && Array.isArray(o[s]) ? o[s] = [...l, ...o[s]] : Yo(l) && Yo(o[s]) ? o[s] = hr(
      l,
      o[s],
      (n ? `${n}.` : "") + s.toString()
    ) : o[s] = l);
  }
  return o;
}
function Rp(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, a) => hr(n, a, ""), {})
  );
}
const Fp = Rp(), [Co] = we("ConfigProvider");
let qp = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", Lp = (e = 21) => {
  let t = "", n = e;
  for (; n--; )
    t += qp[Math.random() * 64 | 0];
  return t;
};
const Vp = Mi(() => {
  const e = $(/* @__PURE__ */ new Map()), t = $(), n = E(() => {
    for (const l of e.value.values())
      if (l)
        return !0;
    return !1;
  }), a = Co({
    scrollBody: $(!0)
  });
  let o = null;
  const s = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", ml && (o == null || o()), t.value = void 0;
  };
  return ae(n, (l, i) => {
    var u;
    if (!It)
      return;
    if (!l) {
      i && s();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const d = window.innerWidth - document.documentElement.clientWidth, p = { padding: d, margin: 0 }, c = (u = a.scrollBody) != null && u.value ? typeof a.scrollBody.value == "object" ? Fp({
      padding: a.scrollBody.value.padding === !0 ? d : a.scrollBody.value.padding,
      margin: a.scrollBody.value.margin === !0 ? d : a.scrollBody.value.margin
    }, p) : p : { padding: 0, margin: 0 };
    d > 0 && (document.body.style.paddingRight = typeof c.padding == "number" ? `${c.padding}px` : String(c.padding), document.body.style.marginRight = typeof c.margin == "number" ? `${c.margin}px` : String(c.margin), document.body.style.setProperty("--scrollbar-width", `${d}px`), document.body.style.overflow = "hidden"), ml && (o = zn(
      document,
      "touchmove",
      (f) => Np(f),
      { passive: !1 }
    )), re(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), e;
});
function Oa(e) {
  const t = Lp(6), n = Vp();
  n.value.set(t, e ?? !1);
  const a = E({
    get: () => n.value.get(t) ?? !1,
    set: (o) => n.value.set(t, o)
  });
  return Pp(() => {
    n.value.delete(t);
  }), a;
}
function Ni(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight)
    return !0;
  {
    const n = e.parentNode;
    return !(n instanceof Element) || n.tagName === "BODY" ? !1 : Ni(n);
  }
}
function Np(e) {
  const t = e || window.event, n = t.target;
  return n instanceof Element && Ni(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
const zp = "data-radix-vue-collection-item";
function Yn(e, t = zp) {
  const n = Symbol();
  return { createCollection: (a) => {
    const o = $([]);
    function s() {
      const l = ht(a);
      return l ? o.value = Array.from(
        l.querySelectorAll(`[${t}]:not([data-disabled])`)
      ) : o.value = [];
    }
    return Qd(() => {
      o.value = [];
    }), de(s), Jd(s), ae(() => a == null ? void 0 : a.value, s, { immediate: !0 }), bn(n, o), o;
  }, injectCollection: () => yn(n, $([])) };
}
function sn(e) {
  const t = Co({
    dir: $("ltr")
  });
  return E(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.dir) == null ? void 0 : n.value) || "ltr";
  });
}
function ln(e) {
  const t = nt(), n = t == null ? void 0 : t.type.emits, a = {};
  return n != null && n.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), n == null || n.forEach((o) => {
    a[ai(mo(o))] = (...s) => e(o, ...s);
  }), a;
}
let Xo = 0;
function Qr() {
  _e((e) => {
    if (!It)
      return;
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? gl()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? gl()
    ), Xo++, e(() => {
      Xo === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((n) => n.remove()), Xo--;
    });
  });
}
function gl() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
function Bo(e) {
  return E(() => {
    var t;
    return jt(e) ? !!((t = ht(e)) != null && t.closest("form")) : !0;
  });
}
function et(e) {
  const t = nt(), n = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((o, s) => {
    const l = (t == null ? void 0 : t.type.props[s]).default;
    return l !== void 0 && (o[s] = l), o;
  }, {}), a = Ar(e);
  return E(() => {
    const o = {}, s = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(s).forEach((l) => {
      o[mo(l)] = s[l];
    }), Object.keys({ ...n, ...o }).reduce((l, i) => (a.value[i] !== void 0 && (l[i] = a.value[i]), l), {});
  });
}
function me(e, t) {
  const n = et(e), a = t ? ln(t) : {};
  return E(() => ({
    ...n.value,
    ...a
  }));
}
function j() {
  const e = nt(), t = $(), n = E(() => {
    var l, i;
    return ["#text", "#comment"].includes((l = t.value) == null ? void 0 : l.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : ht(t);
  }), a = Object.assign({}, e.exposed), o = {};
  for (const l in e.props)
    Object.defineProperty(o, l, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[l]
    });
  if (Object.keys(a).length > 0)
    for (const l in a)
      Object.defineProperty(o, l, {
        enumerable: !0,
        configurable: !0,
        get: () => a[l]
      });
  Object.defineProperty(o, "$el", {
    enumerable: !0,
    configurable: !0,
    get: () => e.vnode.el
  }), e.exposed = o;
  function s(l) {
    t.value = l, l && (Object.defineProperty(o, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => l instanceof Element ? l : l.$el
    }), e.exposed = o);
  }
  return { forwardRef: s, currentRef: t, currentElement: n };
}
function Kp(e, t) {
  const n = Fi(!1, 300), a = $(null), o = wp();
  function s() {
    a.value = null, n.value = !1;
  }
  function l(i, u) {
    const d = i.currentTarget, p = { x: i.clientX, y: i.clientY }, c = jp(p, d.getBoundingClientRect()), f = Hp(p, c), m = Wp(u.getBoundingClientRect()), v = Gp([...f, ...m]);
    a.value = v, n.value = !0;
  }
  return _e((i) => {
    if (e.value && t.value) {
      const u = (p) => l(p, t.value), d = (p) => l(p, e.value);
      e.value.addEventListener("pointerleave", u), t.value.addEventListener("pointerleave", d), i(() => {
        var p, c;
        (p = e.value) == null || p.removeEventListener("pointerleave", u), (c = t.value) == null || c.removeEventListener("pointerleave", d);
      });
    }
  }), _e((i) => {
    var u;
    if (a.value) {
      const d = (p) => {
        var c, f;
        if (!a.value)
          return;
        const m = p.target, v = { x: p.clientX, y: p.clientY }, h = ((c = e.value) == null ? void 0 : c.contains(m)) || ((f = t.value) == null ? void 0 : f.contains(m)), x = !Up(v, a.value), C = !!m.closest("[data-grace-area-trigger]");
        h ? s() : (x || C) && (s(), o.trigger());
      };
      (u = e.value) == null || u.ownerDocument.addEventListener("pointermove", d), i(() => {
        var p;
        return (p = e.value) == null ? void 0 : p.ownerDocument.removeEventListener("pointermove", d);
      });
    }
  }), {
    isPointerInTransit: n,
    onPointerExit: o.on
  };
}
function jp(e, t) {
  const n = Math.abs(t.top - e.y), a = Math.abs(t.bottom - e.y), o = Math.abs(t.right - e.x), s = Math.abs(t.left - e.x);
  switch (Math.min(n, a, o, s)) {
    case s:
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
function Hp(e, t, n = 5) {
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
function Wp(e) {
  const { top: t, right: n, bottom: a, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: a },
    { x: o, y: a }
  ];
}
function Up(e, t) {
  const { x: n, y: a } = e;
  let o = !1;
  for (let s = 0, l = t.length - 1; s < t.length; l = s++) {
    const i = t[s].x, u = t[s].y, d = t[l].x, p = t[l].y;
    u > a != p > a && n < (d - i) * (a - u) / (p - u) + i && (o = !o);
  }
  return o;
}
function Gp(e) {
  const t = e.slice();
  return t.sort((n, a) => n.x < a.x ? -1 : n.x > a.x ? 1 : n.y < a.y ? -1 : n.y > a.y ? 1 : 0), Yp(t);
}
function Yp(e) {
  if (e.length <= 1)
    return e.slice();
  const t = [];
  for (let a = 0; a < e.length; a++) {
    const o = e[a];
    for (; t.length >= 2; ) {
      const s = t[t.length - 1], l = t[t.length - 2];
      if ((s.x - l.x) * (o.y - l.y) >= (s.y - l.y) * (o.x - l.x))
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
      const s = n[n.length - 1], l = n[n.length - 2];
      if ((s.x - l.x) * (o.y - l.y) >= (s.y - l.y) * (o.x - l.x))
        n.pop();
      else break;
    }
    n.push(o);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var Xp = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, In = /* @__PURE__ */ new WeakMap(), Va = /* @__PURE__ */ new WeakMap(), Na = {}, Zo = 0, zi = function(e) {
  return e && (e.host || zi(e.parentNode));
}, Zp = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var a = zi(n);
    return a && e.contains(a) ? a : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Qp = function(e, t, n, a) {
  var o = Zp(t, Array.isArray(e) ? e : [e]);
  Na[n] || (Na[n] = /* @__PURE__ */ new WeakMap());
  var s = Na[n], l = [], i = /* @__PURE__ */ new Set(), u = new Set(o), d = function(c) {
    !c || i.has(c) || (i.add(c), d(c.parentNode));
  };
  o.forEach(d);
  var p = function(c) {
    !c || u.has(c) || Array.prototype.forEach.call(c.children, function(f) {
      if (i.has(f))
        p(f);
      else
        try {
          var m = f.getAttribute(a), v = m !== null && m !== "false", h = (In.get(f) || 0) + 1, x = (s.get(f) || 0) + 1;
          In.set(f, h), s.set(f, x), l.push(f), h === 1 && v && Va.set(f, !0), x === 1 && f.setAttribute(n, "true"), v || f.setAttribute(a, "true");
        } catch (C) {
          console.error("aria-hidden: cannot operate on ", f, C);
        }
    });
  };
  return p(t), i.clear(), Zo++, function() {
    l.forEach(function(c) {
      var f = In.get(c) - 1, m = s.get(c) - 1;
      In.set(c, f), s.set(c, m), f || (Va.has(c) || c.removeAttribute(a), Va.delete(c)), m || c.removeAttribute(n);
    }), Zo--, Zo || (In = /* @__PURE__ */ new WeakMap(), In = /* @__PURE__ */ new WeakMap(), Va = /* @__PURE__ */ new WeakMap(), Na = {});
  };
}, Jp = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var a = Array.from(Array.isArray(e) ? e : [e]), o = Xp(e);
  return o ? (a.push.apply(a, Array.from(o.querySelectorAll("[aria-live]"))), Qp(a, o, n, "aria-hidden")) : function() {
    return null;
  };
};
function Ea(e) {
  let t;
  ae(() => ht(e), (n) => {
    n ? t = Jp(n) : t && t();
  }), Ke(() => {
    t && t();
  });
}
let ef = 0;
function Ge(e, t = "radix") {
  const n = Co({ useId: void 0 });
  return Fn.useId ? `${t}-${Fn.useId()}` : n.useId ? `${t}-${n.useId()}` : `${t}-${++ef}`;
}
function Ki(e) {
  const t = $(), n = E(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.width) ?? 0;
  }), a = E(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.height) ?? 0;
  });
  return de(() => {
    const o = ht(e);
    if (o) {
      t.value = { width: o.offsetWidth, height: o.offsetHeight };
      const s = new ResizeObserver((l) => {
        if (!Array.isArray(l) || !l.length)
          return;
        const i = l[0];
        let u, d;
        if ("borderBoxSize" in i) {
          const p = i.borderBoxSize, c = Array.isArray(p) ? p[0] : p;
          u = c.inlineSize, d = c.blockSize;
        } else
          u = o.offsetWidth, d = o.offsetHeight;
        t.value = { width: u, height: d };
      });
      return s.observe(o, { box: "border-box" }), () => s.unobserve(o);
    } else
      t.value = void 0;
  }), {
    width: n,
    height: a
  };
}
function tf(e, t) {
  const n = $(e);
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
const nf = "data-item-text";
function Jr(e) {
  const t = Fi("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (n, a) => {
      if (!(e != null && e.value) && !a)
        return;
      t.value = t.value + n;
      const o = (e == null ? void 0 : e.value) ?? a, s = Je(), l = o.map((c) => {
        var f;
        return {
          ref: c,
          textValue: ((f = (c.querySelector(`[${nf}]`) ?? c).textContent) == null ? void 0 : f.trim()) ?? ""
        };
      }), i = l.find((c) => c.ref === s), u = l.map((c) => c.textValue), d = of(u, t.value, i == null ? void 0 : i.textValue), p = l.find((c) => c.textValue === d);
      return p && p.ref.focus(), p == null ? void 0 : p.ref;
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function af(e, t) {
  return e.map((n, a) => e[(t + a) % e.length]);
}
function of(e, t, n) {
  const a = t.length > 1 && Array.from(t).every((i) => i === t[0]) ? t[0] : t, o = n ? e.indexOf(n) : -1;
  let s = af(e, Math.max(o, 0));
  a.length === 1 && (s = s.filter((i) => i !== n));
  const l = s.find(
    (i) => i.toLowerCase().startsWith(a.toLowerCase())
  );
  return l !== n ? l : void 0;
}
const es = b({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      var a, o;
      if (!n.default)
        return null;
      const s = xo(n.default()), l = s.findIndex((p) => p.type !== Rr);
      if (l === -1)
        return s;
      const i = s[l];
      (a = i.props) == null || delete a.ref;
      const u = i.props ? T(t, i.props) : t;
      t.class && (o = i.props) != null && o.class && delete i.props.class;
      const d = oi(i, u);
      for (const p in u)
        p.startsWith("on") && (d.props || (d.props = {}), d.props[p] = u[p]);
      return s.length === 1 ? d : (s[l] = d, s);
    };
  }
}), J = b({
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
    return typeof a == "string" && ["area", "img", "input"].includes(a) ? () => ot(a, t) : a !== "template" ? () => ot(e.as, t, { default: n.default }) : () => ot(es, t, { default: n.default });
  }
});
function ji() {
  const e = $(), t = E(() => {
    var n, a;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (a = e.value) == null ? void 0 : a.$el.nextElementSibling : ht(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
const [Hi, rf] = we("CollapsibleRoot"), sf = /* @__PURE__ */ b({
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
    const a = e, o = qe(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), s = qe(a, "disabled");
    return rf({
      contentId: "",
      disabled: s,
      open: o,
      onOpenToggle: () => {
        o.value = !o.value;
      }
    }), t({ open: o }), j(), (l, i) => (g(), w(r(J), {
      as: l.as,
      "as-child": a.asChild,
      "data-state": r(o) ? "open" : "closed",
      "data-disabled": r(s) ? "" : void 0
    }, {
      default: y(() => [
        _(l.$slots, "default", { open: r(o) })
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state", "data-disabled"]));
  }
}), lf = /* @__PURE__ */ b({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    j();
    const n = Hi();
    return (a, o) => {
      var s, l;
      return g(), w(r(J), {
        type: a.as === "button" ? "button" : void 0,
        as: a.as,
        "as-child": t.asChild,
        "aria-controls": r(n).contentId,
        "aria-expanded": r(n).open.value,
        "data-state": r(n).open.value ? "open" : "closed",
        "data-disabled": (s = r(n).disabled) != null && s.value ? "" : void 0,
        disabled: (l = r(n).disabled) == null ? void 0 : l.value,
        onClick: r(n).onOpenToggle
      }, {
        default: y(() => [
          _(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["type", "as", "as-child", "aria-controls", "aria-expanded", "data-state", "data-disabled", "disabled", "onClick"]);
    };
  }
});
function uf(e, t) {
  var n;
  const a = $({}), o = $("none"), s = $(e), l = e.value ? "mounted" : "unmounted";
  let i;
  const u = ((n = t.value) == null ? void 0 : n.ownerDocument.defaultView) ?? $a, { state: d, dispatch: p } = tf(l, {
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
  }), c = (x) => {
    var C;
    if (It) {
      const S = new CustomEvent(x, { bubbles: !1, cancelable: !1 });
      (C = t.value) == null || C.dispatchEvent(S);
    }
  };
  ae(
    e,
    async (x, C) => {
      var S;
      const B = C !== x;
      if (await re(), B) {
        const P = o.value, O = za(t.value);
        x ? (p("MOUNT"), c("enter"), O === "none" && c("after-enter")) : O === "none" || ((S = a.value) == null ? void 0 : S.display) === "none" ? (p("UNMOUNT"), c("leave"), c("after-leave")) : C && P !== O ? (p("ANIMATION_OUT"), c("leave")) : (p("UNMOUNT"), c("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const f = (x) => {
    const C = za(t.value), S = C.includes(
      x.animationName
    ), B = d.value === "mounted" ? "enter" : "leave";
    if (x.target === t.value && S && (c(`after-${B}`), p("ANIMATION_END"), !s.value)) {
      const P = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", i = u == null ? void 0 : u.setTimeout(() => {
        var O;
        ((O = t.value) == null ? void 0 : O.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = P);
      });
    }
    x.target === t.value && C === "none" && p("ANIMATION_END");
  }, m = (x) => {
    x.target === t.value && (o.value = za(t.value));
  }, v = ae(
    t,
    (x, C) => {
      x ? (a.value = getComputedStyle(x), x.addEventListener("animationstart", m), x.addEventListener("animationcancel", f), x.addEventListener("animationend", f)) : (p("ANIMATION_END"), i !== void 0 && (u == null || u.clearTimeout(i)), C == null || C.removeEventListener("animationstart", m), C == null || C.removeEventListener("animationcancel", f), C == null || C.removeEventListener("animationend", f));
    },
    { immediate: !0 }
  ), h = ae(d, () => {
    const x = za(t.value);
    o.value = d.value === "mounted" ? x : "none";
  });
  return Ke(() => {
    v(), h();
  }), {
    isPresent: E(
      () => ["mounted", "unmountSuspended"].includes(d.value)
    )
  };
}
function za(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const yt = b({
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
    const { present: o, forceMount: s } = pe(e), l = $(), { isPresent: i } = uf(o, l);
    n({ present: i });
    let u = t.default({ present: i });
    u = xo(u || []);
    const d = nt();
    if (u && (u == null ? void 0 : u.length) > 1) {
      const p = (a = d == null ? void 0 : d.parent) != null && a.type.name ? `<${d.parent.type.name} />` : "component";
      throw new Error(
        [
          `Detected an invalid children for \`${p}\` for  \`Presence\` component.`,
          "",
          "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",
          "You can apply a few solutions:",
          [
            "Provide a single child element so that `presence` directive attach correctly.",
            "Ensure the first child is an actual element instead of a raw text node or comment node."
          ].map((c) => `  - ${c}`).join(`
`)
        ].join(`
`)
      );
    }
    return () => s.value || o.value || i.value ? ot(t.default({ present: i })[0], {
      ref: (p) => {
        const c = ht(p);
        return typeof (c == null ? void 0 : c.hasAttribute) > "u" || (c != null && c.hasAttribute("data-radix-popper-content-wrapper") ? l.value = c.firstElementChild : l.value = c), c;
      }
    }) : null;
  }
}), df = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Hi();
    n.contentId || (n.contentId = Ge(void 0, "radix-vue-collapsible-content"));
    const a = $(), { forwardRef: o, currentElement: s } = j(), l = $(0), i = $(0), u = E(() => n.open.value), d = $(u.value), p = $();
    return ae(
      () => {
        var c;
        return [u.value, (c = a.value) == null ? void 0 : c.present];
      },
      async () => {
        await re();
        const c = s.value;
        if (!c)
          return;
        p.value = p.value || {
          transitionDuration: c.style.transitionDuration,
          animationName: c.style.animationName
        }, c.style.transitionDuration = "0s", c.style.animationName = "none";
        const f = c.getBoundingClientRect();
        i.value = f.height, l.value = f.width, d.value || (c.style.transitionDuration = p.value.transitionDuration, c.style.animationName = p.value.animationName);
      },
      {
        immediate: !0
      }
    ), de(() => {
      requestAnimationFrame(() => {
        d.value = !1;
      });
    }), (c, f) => (g(), w(r(yt), {
      ref_key: "presentRef",
      ref: a,
      present: c.forceMount || r(n).open.value,
      "force-mount": !0
    }, {
      default: y(() => {
        var m, v;
        return [
          R(r(J), T(c.$attrs, {
            id: r(n).contentId,
            ref: r(o),
            "as-child": t.asChild,
            as: c.as,
            "data-state": r(n).open.value ? "open" : "closed",
            "data-disabled": (m = r(n).disabled) != null && m.value ? "" : void 0,
            hidden: !((v = a.value) != null && v.present),
            style: {
              "--radix-collapsible-content-height": `${i.value}px`,
              "--radix-collapsible-content-width": `${l.value}px`
            }
          }), {
            default: y(() => {
              var h;
              return [
                (h = a.value) != null && h.present ? _(c.$slots, "default", { key: 0 }) : fe("", !0)
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
function Wi({ type: e, defaultValue: t, modelValue: n }) {
  const a = n || t;
  if (Ln(e) && Ln(n) && Ln(t))
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
    const s = Array.isArray(n) || Array.isArray(t), l = n !== void 0 ? "modelValue" : "defaultValue", i = l === "modelValue" ? typeof n : typeof t;
    if (e === "single" && s)
      return console.error(`Invalid prop \`${l}\` of type ${i} supplied with type \`single\`. The \`modelValue\` prop must be a string or \`undefined\`.
    You can remove the \`type\` prop to let the component infer the type from the ${l} prop.`), "multiple";
    if (e === "multiple" && !s)
      return console.error(`Invalid prop \`${l}\` of type ${i} supplied with type \`multiple\`. The \`modelValue\` prop must be an array of strings or \`undefined\`.
    You can remove the \`type\` prop to let the component infer the type from the ${l} prop.`), "single";
  }
  return o ? Array.isArray(a) ? "multiple" : "single" : e;
}
function cf({ type: e, defaultValue: t, modelValue: n }) {
  return e || Wi({ type: e, defaultValue: t, modelValue: n });
}
function pf({ type: e, defaultValue: t }) {
  return t !== void 0 ? t : e === "single" ? void 0 : [];
}
function ff(e, t) {
  const n = $(cf(e)), a = qe(e, "modelValue", t, {
    defaultValue: pf(e),
    passive: e.modelValue === void 0,
    deep: !0
  });
  ae(
    () => [e.type, e.modelValue, e.defaultValue],
    () => {
      const l = Wi(e);
      n.value !== l && (n.value = l);
    },
    { immediate: !0 }
  );
  function o(l) {
    if (n.value === "single")
      a.value = l === a.value ? void 0 : l;
    else {
      const i = [...a.value || []];
      if (i.includes(l)) {
        const u = i.findIndex((d) => d === l);
        i.splice(u, 1);
      } else
        i.push(l);
      a.value = i;
    }
  }
  const s = E(() => n.value === "single");
  return {
    modelValue: a,
    type: n,
    changeModelValue: o,
    isSingle: s
  };
}
const [So, vf] = we("AccordionRoot"), mf = /* @__PURE__ */ b({
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
    const n = e, a = t, { dir: o, disabled: s } = pe(n), l = sn(o), { modelValue: i, changeModelValue: u, isSingle: d } = ff(n, a), { forwardRef: p, currentElement: c } = j();
    return vf({
      disabled: s,
      direction: l,
      orientation: n.orientation,
      parentElement: c,
      isSingle: d,
      collapsible: n.collapsible,
      modelValue: i,
      changeModelValue: u
    }), (f, m) => (g(), w(r(J), {
      ref: r(p),
      "as-child": f.asChild,
      as: f.as
    }, {
      default: y(() => [
        _(f.$slots, "default", { modelValue: r(i) })
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), [ts, gf] = we("AccordionItem"), hf = /* @__PURE__ */ b({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e, { expose: t }) {
    const n = e, a = So(), o = E(
      () => a.isSingle.value ? n.value === a.modelValue.value : Array.isArray(a.modelValue.value) && a.modelValue.value.includes(n.value)
    ), s = E(() => a.disabled.value || n.disabled), l = E(() => s.value ? "" : void 0), i = E(
      () => o.value ? "open" : "closed"
      /* Closed */
    );
    t({ open: o, dataDisabled: l });
    const { currentRef: u, currentElement: d } = j();
    gf({
      open: o,
      dataState: i,
      disabled: s,
      dataDisabled: l,
      triggerId: "",
      currentRef: u,
      currentElement: d,
      value: E(() => n.value)
    });
    function p(c) {
      var f;
      const m = c.target;
      if (Array.from(((f = a.parentElement.value) == null ? void 0 : f.querySelectorAll("[data-radix-vue-collection-item]")) ?? []).findIndex((v) => v === m) === -1)
        return null;
      Li(
        c,
        d.value,
        a.parentElement.value,
        {
          arrowKeyOptions: a.orientation,
          dir: a.direction.value,
          focus: !0
        }
      );
    }
    return (c, f) => (g(), w(r(sf), {
      "data-orientation": r(a).orientation,
      "data-disabled": l.value,
      "data-state": i.value,
      disabled: s.value,
      open: o.value,
      as: n.as,
      "as-child": n.asChild,
      onKeydown: lt(p, ["up", "down", "left", "right", "home", "end"])
    }, {
      default: y(() => [
        _(c.$slots, "default", { open: o.value })
      ]),
      _: 3
    }, 8, ["data-orientation", "data-disabled", "data-state", "disabled", "open", "as", "as-child"]));
  }
}), yf = /* @__PURE__ */ b({
  __name: "AccordionContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = So(), a = ts();
    return j(), (o, s) => (g(), w(r(df), {
      role: "region",
      hidden: !r(a).open.value,
      "as-child": t.asChild,
      "force-mount": t.forceMount,
      "aria-labelledby": r(a).triggerId,
      "data-state": r(a).dataState.value,
      "data-disabled": r(a).dataDisabled.value,
      "data-orientation": r(n).orientation,
      style: { "--radix-accordion-content-width": "var(--radix-collapsible-content-width)", "--radix-accordion-content-height": "var(--radix-collapsible-content-height)" }
    }, {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["hidden", "as-child", "force-mount", "aria-labelledby", "data-state", "data-disabled", "data-orientation"]));
  }
}), bf = /* @__PURE__ */ b({
  __name: "AccordionHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "h3" }
  },
  setup(e) {
    const t = e, n = So(), a = ts();
    return j(), (o, s) => (g(), w(r(J), {
      as: t.as,
      "as-child": t.asChild,
      "data-orientation": r(n).orientation,
      "data-state": r(a).dataState.value,
      "data-disabled": r(a).dataDisabled.value
    }, {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-orientation", "data-state", "data-disabled"]));
  }
}), _f = /* @__PURE__ */ b({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = So(), a = ts();
    a.triggerId || (a.triggerId = Ge(void 0, "radix-vue-accordion-trigger"));
    function o() {
      const s = n.isSingle.value && a.open.value && !n.collapsible;
      a.disabled.value || s || n.changeModelValue(a.value.value);
    }
    return (s, l) => (g(), w(r(lf), {
      id: r(a).triggerId,
      ref: r(a).currentRef,
      "data-radix-vue-collection-item": "",
      as: t.as,
      "as-child": t.asChild,
      "aria-disabled": r(a).disabled.value || void 0,
      "aria-expanded": r(a).open.value || !1,
      "data-disabled": r(a).dataDisabled.value,
      "data-orientation": r(n).orientation,
      "data-state": r(a).dataState.value,
      disabled: r(a).disabled.value,
      onClick: o
    }, {
      default: y(() => [
        _(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "as", "as-child", "aria-disabled", "aria-expanded", "data-disabled", "data-orientation", "data-state", "disabled"]));
  }
}), [Mt, wf] = we("DialogRoot"), ns = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, a = qe(n, "open", t, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), o = $(), s = $(), { modal: l } = pe(n);
    return wf({
      open: a,
      modal: l,
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
      contentElement: s
    }), (i, u) => _(i.$slots, "default", { open: r(a) });
  }
}), as = /* @__PURE__ */ b({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Mt(), { forwardRef: a, currentElement: o } = j();
    return n.contentId || (n.contentId = Ge(void 0, "radix-vue-dialog-content")), de(() => {
      n.triggerElement.value = o.value;
    }), (s, l) => (g(), w(r(J), T(t, {
      ref: r(a),
      type: s.as === "button" ? "button" : void 0,
      "aria-haspopup": "dialog",
      "aria-expanded": r(n).open.value || !1,
      "aria-controls": r(n).open.value ? r(n).contentId : void 0,
      "data-state": r(n).open.value ? "open" : "closed",
      onClick: r(n).onOpenToggle
    }), {
      default: y(() => [
        _(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "onClick"]));
  }
}), Xn = /* @__PURE__ */ b({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = Zr();
    return (n, a) => r(t) || n.forceMount ? (g(), w(hn, {
      key: 0,
      to: n.to,
      disabled: n.disabled
    }, [
      _(n.$slots, "default")
    ], 8, ["to", "disabled"])) : fe("", !0);
  }
}), os = /* @__PURE__ */ b({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(r(Xn), H(U(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), xf = "dismissableLayer.pointerDownOutside", Cf = "dismissableLayer.focusOutside";
function Ui(e, t) {
  const n = t.closest(
    "[data-dismissable-layer]"
  ), a = e.dataset.dismissableLayer === "" ? e : e.querySelector(
    "[data-dismissable-layer]"
  ), o = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(n && a === n || o.indexOf(a) < o.indexOf(n));
}
function Bf(e, t) {
  var n;
  const a = ((n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = $(!1), s = $(() => {
  });
  return _e((l) => {
    if (!It)
      return;
    const i = async (d) => {
      const p = d.target;
      if (t != null && t.value) {
        if (Ui(t.value, p)) {
          o.value = !1;
          return;
        }
        if (d.target && !o.value) {
          let c = function() {
            Gr(
              xf,
              e,
              f
            );
          };
          const f = { originalEvent: d };
          d.pointerType === "touch" ? (a.removeEventListener("click", s.value), s.value = c, a.addEventListener("click", s.value, {
            once: !0
          })) : c();
        } else
          a.removeEventListener("click", s.value);
        o.value = !1;
      }
    }, u = window.setTimeout(() => {
      a.addEventListener("pointerdown", i);
    }, 0);
    l(() => {
      window.clearTimeout(u), a.removeEventListener("pointerdown", i), a.removeEventListener("click", s.value);
    });
  }), {
    onPointerDownCapture: () => o.value = !0
  };
}
function Sf(e, t) {
  var n;
  const a = ((n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = $(!1);
  return _e((s) => {
    if (!It)
      return;
    const l = async (i) => {
      t != null && t.value && (await re(), !(!t.value || Ui(t.value, i.target)) && i.target && !o.value && Gr(
        Cf,
        e,
        { originalEvent: i }
      ));
    };
    a.addEventListener("focusin", l), s(() => a.removeEventListener("focusin", l));
  }), {
    onFocusCapture: () => o.value = !0,
    onBlurCapture: () => o.value = !1
  };
}
const wt = gt({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Zn = /* @__PURE__ */ b({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, a = t, { forwardRef: o, currentElement: s } = j(), l = E(
      () => {
        var v;
        return ((v = s.value) == null ? void 0 : v.ownerDocument) ?? globalThis.document;
      }
    ), i = E(() => wt.layersRoot), u = E(() => s.value ? Array.from(i.value).indexOf(s.value) : -1), d = E(() => wt.layersWithOutsidePointerEventsDisabled.size > 0), p = E(() => {
      const v = Array.from(i.value), [h] = [...wt.layersWithOutsidePointerEventsDisabled].slice(-1), x = v.indexOf(h);
      return u.value >= x;
    }), c = Bf(async (v) => {
      const h = [...wt.branches].some(
        (x) => x == null ? void 0 : x.contains(v.target)
      );
      !p.value || h || (a("pointerDownOutside", v), a("interactOutside", v), await re(), v.defaultPrevented || a("dismiss"));
    }, s), f = Sf((v) => {
      [...wt.branches].some(
        (h) => h == null ? void 0 : h.contains(v.target)
      ) || (a("focusOutside", v), a("interactOutside", v), v.defaultPrevented || a("dismiss"));
    }, s);
    Xr("Escape", (v) => {
      u.value === i.value.size - 1 && (a("escapeKeyDown", v), v.defaultPrevented || a("dismiss"));
    });
    let m;
    return _e((v) => {
      s.value && (n.disableOutsidePointerEvents && (wt.layersWithOutsidePointerEventsDisabled.size === 0 && (m = l.value.body.style.pointerEvents, l.value.body.style.pointerEvents = "none"), wt.layersWithOutsidePointerEventsDisabled.add(s.value)), i.value.add(s.value), v(() => {
        n.disableOutsidePointerEvents && wt.layersWithOutsidePointerEventsDisabled.size === 1 && (l.value.body.style.pointerEvents = m);
      }));
    }), _e((v) => {
      v(() => {
        s.value && (i.value.delete(s.value), wt.layersWithOutsidePointerEventsDisabled.delete(s.value));
      });
    }), (v, h) => (g(), w(r(J), {
      ref: r(o),
      "as-child": v.asChild,
      as: v.as,
      "data-dismissable-layer": "",
      style: at({
        pointerEvents: d.value ? p.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: r(f).onFocusCapture,
      onBlurCapture: r(f).onBlurCapture,
      onPointerdownCapture: r(c).onPointerDownCapture
    }, {
      default: y(() => [
        _(v.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
}), $f = /* @__PURE__ */ b({
  __name: "DismissableLayerBranch",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: a } = j();
    return de(() => {
      wt.branches.add(a.value);
    }), Ke(() => {
      wt.branches.delete(a.value);
    }), (o, s) => (g(), w(r(J), T({ ref: r(n) }, t), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Qo = "focusScope.autoFocusOnMount", Jo = "focusScope.autoFocusOnUnmount", hl = { bubbles: !1, cancelable: !0 };
function Qa(e, { select: t = !1 } = {}) {
  const n = Je();
  for (const a of e)
    if (en(a, { select: t }), Je() !== n)
      return !0;
}
function Of(e) {
  const t = rs(e), n = yl(t, e), a = yl(t.reverse(), e);
  return [n, a];
}
function rs(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (a) => {
      const o = a.tagName === "INPUT" && a.type === "hidden";
      return a.disabled || a.hidden || o ? NodeFilter.FILTER_SKIP : a.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function yl(e, t) {
  for (const n of e)
    if (!Ef(n, { upTo: t }))
      return n;
}
function Ef(e, { upTo: t }) {
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
function Pf(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function en(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = Je();
    e.focus({ preventScroll: !0 }), e !== n && Pf(e) && t && e.select();
  }
}
const kf = xp(() => $([]));
function Tf() {
  const e = kf();
  return {
    add(t) {
      const n = e.value[0];
      t !== n && (n == null || n.pause()), e.value = bl(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var n;
      e.value = bl(e.value, t), (n = e.value[0]) == null || n.resume();
    }
  };
}
function bl(e, t) {
  const n = [...e], a = n.indexOf(t);
  return a !== -1 && n.splice(a, 1), n;
}
function Df(e) {
  return e.filter((t) => t.tagName !== "A");
}
const $o = /* @__PURE__ */ b({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, a = t, { currentRef: o, currentElement: s } = j(), l = $(null), i = Tf(), u = gt({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    _e((p) => {
      if (!It)
        return;
      const c = s.value;
      if (!n.trapped)
        return;
      function f(x) {
        if (u.paused || !c)
          return;
        const C = x.target;
        c.contains(C) ? l.value = C : en(l.value, { select: !0 });
      }
      function m(x) {
        if (u.paused || !c)
          return;
        const C = x.relatedTarget;
        C !== null && (c.contains(C) || en(l.value, { select: !0 }));
      }
      function v(x) {
        c.contains(l.value) || en(c);
      }
      document.addEventListener("focusin", f), document.addEventListener("focusout", m);
      const h = new MutationObserver(v);
      c && h.observe(c, { childList: !0, subtree: !0 }), p(() => {
        document.removeEventListener("focusin", f), document.removeEventListener("focusout", m), h.disconnect();
      });
    }), _e(async (p) => {
      const c = s.value;
      if (await re(), !c)
        return;
      i.add(u);
      const f = Je();
      if (!c.contains(f)) {
        const m = new CustomEvent(Qo, hl);
        c.addEventListener(Qo, (v) => a("mountAutoFocus", v)), c.dispatchEvent(m), m.defaultPrevented || (Qa(Df(rs(c)), {
          select: !0
        }), Je() === f && en(c));
      }
      p(() => {
        c.removeEventListener(Qo, (h) => a("mountAutoFocus", h));
        const m = new CustomEvent(Jo, hl), v = (h) => {
          a("unmountAutoFocus", h);
        };
        c.addEventListener(Jo, v), c.dispatchEvent(m), setTimeout(() => {
          m.defaultPrevented || en(f ?? document.body, { select: !0 }), c.removeEventListener(Jo, v), i.remove(u);
        }, 0);
      });
    });
    function d(p) {
      if (!n.loop && !n.trapped || u.paused)
        return;
      const c = p.key === "Tab" && !p.altKey && !p.ctrlKey && !p.metaKey, f = Je();
      if (c && f) {
        const m = p.currentTarget, [v, h] = Of(m);
        v && h ? !p.shiftKey && f === h ? (p.preventDefault(), n.loop && en(v, { select: !0 })) : p.shiftKey && f === v && (p.preventDefault(), n.loop && en(h, { select: !0 })) : f === m && p.preventDefault();
      }
    }
    return (p, c) => (g(), w(r(J), {
      ref_key: "currentRef",
      ref: o,
      tabindex: "-1",
      "as-child": p.asChild,
      as: p.as,
      onKeydown: d
    }, {
      default: y(() => [
        _(p.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), Af = "menu.itemSelect", yr = ["Enter", " "], If = ["ArrowDown", "PageUp", "Home"], Gi = ["ArrowUp", "PageDown", "End"], Mf = [...If, ...Gi], Rf = {
  ltr: [...yr, "ArrowRight"],
  rtl: [...yr, "ArrowLeft"]
}, Ff = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function ss(e) {
  return e ? "open" : "closed";
}
function io(e) {
  return e === "indeterminate";
}
function ls(e) {
  return io(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function br(e) {
  const t = Je();
  for (const n of e)
    if (n === t || (n.focus(), Je() !== t))
      return;
}
function qf(e, t) {
  const { x: n, y: a } = e;
  let o = !1;
  for (let s = 0, l = t.length - 1; s < t.length; l = s++) {
    const i = t[s].x, u = t[s].y, d = t[l].x, p = t[l].y;
    u > a != p > a && n < (d - i) * (a - u) / (p - u) + i && (o = !o);
  }
  return o;
}
function Lf(e, t) {
  if (!t)
    return !1;
  const n = { x: e.clientX, y: e.clientY };
  return qf(n, t);
}
function ga(e) {
  return e.pointerType === "mouse";
}
const Vf = "DialogTitle", Nf = "DialogContent";
function zf({
  titleName: e = Vf,
  contentName: t = Nf,
  componentLink: n = "dialog.html#title",
  titleId: a,
  descriptionId: o,
  contentElement: s
}) {
  const l = `Warning: \`${t}\` requires a \`${e}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.radix-vue.com/components/${n}`, i = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${t}.`;
  de(() => {
    var u;
    document.getElementById(a) || console.warn(l);
    const d = (u = s.value) == null ? void 0 : u.getAttribute("aria-describedby");
    o && d && (document.getElementById(o) || console.warn(i));
  });
}
const Yi = /* @__PURE__ */ b({
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
    const n = e, a = t, o = Mt(), { forwardRef: s, currentElement: l } = j();
    return o.titleId || (o.titleId = Ge(void 0, "radix-vue-dialog-title")), o.descriptionId || (o.descriptionId = Ge(void 0, "radix-vue-dialog-description")), de(() => {
      o.contentElement = l, Je() !== document.body && (o.triggerElement.value = Je());
    }), process.env.NODE_ENV !== "production" && zf({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: o.titleId,
      descriptionId: o.descriptionId,
      contentElement: l
    }), (i, u) => (g(), w(r($o), {
      "as-child": "",
      loop: "",
      trapped: n.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => a("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => a("closeAutoFocus", d))
    }, {
      default: y(() => [
        R(r(Zn), T({
          id: r(o).contentId,
          ref: r(s),
          as: i.as,
          "as-child": i.asChild,
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": r(o).descriptionId,
          "aria-labelledby": r(o).titleId,
          "data-state": r(ss)(r(o).open.value)
        }, i.$attrs, {
          onDismiss: u[0] || (u[0] = (d) => r(o).onOpenChange(!1)),
          onEscapeKeyDown: u[1] || (u[1] = (d) => a("escapeKeyDown", d)),
          onFocusOutside: u[2] || (u[2] = (d) => a("focusOutside", d)),
          onInteractOutside: u[3] || (u[3] = (d) => a("interactOutside", d)),
          onPointerDownOutside: u[4] || (u[4] = (d) => a("pointerDownOutside", d))
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
}), Kf = /* @__PURE__ */ b({
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
    const n = e, a = t, o = Mt(), s = ln(a), { forwardRef: l, currentElement: i } = j();
    return Ea(i), (u, d) => (g(), w(Yi, T({ ...n, ...r(s) }, {
      ref: r(l),
      "trap-focus": r(o).open.value,
      "disable-outside-pointer-events": !0,
      onCloseAutoFocus: d[0] || (d[0] = (p) => {
        var c;
        p.defaultPrevented || (p.preventDefault(), (c = r(o).triggerElement.value) == null || c.focus());
      }),
      onPointerDownOutside: d[1] || (d[1] = (p) => {
        const c = p.detail.originalEvent, f = c.button === 0 && c.ctrlKey === !0;
        (c.button === 2 || f) && p.preventDefault();
      }),
      onFocusOutside: d[2] || (d[2] = (p) => {
        p.preventDefault();
      })
    }), {
      default: y(() => [
        _(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), jf = /* @__PURE__ */ b({
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
    const n = e, a = ln(t);
    j();
    const o = Mt(), s = $(!1), l = $(!1);
    return (i, u) => (g(), w(Yi, T({ ...n, ...r(a) }, {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: u[0] || (u[0] = (d) => {
        var p;
        d.defaultPrevented || (s.value || (p = r(o).triggerElement.value) == null || p.focus(), d.preventDefault()), s.value = !1, l.value = !1;
      }),
      onInteractOutside: u[1] || (u[1] = (d) => {
        var p;
        d.defaultPrevented || (s.value = !0, d.detail.originalEvent.type === "pointerdown" && (l.value = !0));
        const c = d.target;
        (p = r(o).triggerElement.value) != null && p.contains(c) && d.preventDefault(), d.detail.originalEvent.type === "focusin" && l.value && d.preventDefault();
      })
    }), {
      default: y(() => [
        _(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Oo = /* @__PURE__ */ b({
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
    const n = e, a = t, o = Mt(), s = ln(a), { forwardRef: l } = j();
    return (i, u) => (g(), w(r(yt), {
      present: i.forceMount || r(o).open.value
    }, {
      default: y(() => [
        r(o).modal.value ? (g(), w(Kf, T({
          key: 0,
          ref: r(l)
        }, { ...n, ...r(s), ...i.$attrs }), {
          default: y(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (g(), w(jf, T({
          key: 1,
          ref: r(l)
        }, { ...n, ...r(s), ...i.$attrs }), {
          default: y(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Hf = /* @__PURE__ */ b({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Mt();
    return Oa(!0), j(), (n, a) => (g(), w(r(J), {
      as: n.as,
      "as-child": n.asChild,
      "data-state": r(t).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" }
    }, {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state"]));
  }
}), Eo = /* @__PURE__ */ b({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Mt(), { forwardRef: n } = j();
    return (a, o) => {
      var s;
      return (s = r(t)) != null && s.modal.value ? (g(), w(r(yt), {
        key: 0,
        present: a.forceMount || r(t).open.value
      }, {
        default: y(() => [
          R(Hf, T(a.$attrs, {
            ref: r(n),
            as: a.as,
            "as-child": a.asChild
          }), {
            default: y(() => [
              _(a.$slots, "default")
            ]),
            _: 3
          }, 16, ["as", "as-child"])
        ]),
        _: 3
      }, 8, ["present"])) : fe("", !0);
    };
  }
}), xn = /* @__PURE__ */ b({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    j();
    const n = Mt();
    return (a, o) => (g(), w(r(J), T(t, {
      type: a.as === "button" ? "button" : void 0,
      onClick: o[0] || (o[0] = (s) => r(n).onOpenChange(!1))
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
}), is = /* @__PURE__ */ b({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e, n = Mt();
    return j(), (a, o) => (g(), w(r(J), T(t, {
      id: r(n).titleId
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), us = /* @__PURE__ */ b({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    j();
    const n = Mt();
    return (a, o) => (g(), w(r(J), T(t, {
      id: r(n).descriptionId
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Wf = /* @__PURE__ */ b({
  __name: "AlertDialogRoot",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = me(e, t);
    return j(), (a, o) => (g(), w(r(ns), T(r(n), { modal: !0 }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Uf = /* @__PURE__ */ b({
  __name: "AlertDialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    return j(), (n, a) => (g(), w(r(as), H(U(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Gf = /* @__PURE__ */ b({
  __name: "AlertDialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(r(Xn), H(U(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Yf, Xf] = we("AlertDialogContent"), Zf = /* @__PURE__ */ b({
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
    const n = e, a = ln(t);
    j();
    const o = $();
    return Xf({
      onCancelElementChange: (s) => {
        o.value = s;
      }
    }), (s, l) => (g(), w(r(Oo), T({ ...n, ...r(a) }, {
      role: "alertdialog",
      onPointerDownOutside: l[0] || (l[0] = Ae(() => {
      }, ["prevent"])),
      onInteractOutside: l[1] || (l[1] = Ae(() => {
      }, ["prevent"])),
      onOpenAutoFocus: l[2] || (l[2] = () => {
        re(() => {
          var i;
          (i = o.value) == null || i.focus({
            preventScroll: !0
          });
        });
      })
    }), {
      default: y(() => [
        _(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Qf = /* @__PURE__ */ b({
  __name: "AlertDialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return j(), (n, a) => (g(), w(r(Eo), H(U(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Jf = /* @__PURE__ */ b({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Yf(), { forwardRef: a, currentElement: o } = j();
    return de(() => {
      n.onCancelElementChange(o.value);
    }), (s, l) => (g(), w(r(xn), T(t, { ref: r(a) }), {
      default: y(() => [
        _(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ev = /* @__PURE__ */ b({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e;
    return j(), (n, a) => (g(), w(r(is), H(U(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), tv = /* @__PURE__ */ b({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    return j(), (n, a) => (g(), w(r(us), H(U(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), nv = /* @__PURE__ */ b({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    return j(), (n, a) => (g(), w(r(xn), H(U(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Xi, av] = we("AvatarRoot"), ov = /* @__PURE__ */ b({
  __name: "AvatarRoot",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return j(), av({
      imageLoadingStatus: $("loading")
    }), (t, n) => (g(), w(r(J), {
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
function rv(e, t) {
  const n = $("idle"), a = $(!1), o = (s) => () => {
    a.value && (n.value = s);
  };
  return de(() => {
    a.value = !0, ae([() => e.value, () => t == null ? void 0 : t.value], ([s, l]) => {
      if (!s)
        n.value = "error";
      else {
        const i = new window.Image();
        n.value = "loading", i.onload = o("loaded"), i.onerror = o("error"), i.src = s, l && (i.referrerPolicy = l);
      }
    }, { immediate: !0 });
  }), Ke(() => {
    a.value = !1;
  }), n;
}
const sv = /* @__PURE__ */ b({
  __name: "AvatarImage",
  props: {
    src: {},
    referrerPolicy: {},
    asChild: { type: Boolean },
    as: { default: "img" }
  },
  emits: ["loadingStatusChange"],
  setup(e, { emit: t }) {
    const n = e, a = t, { src: o, referrerPolicy: s } = pe(n);
    j();
    const l = Xi(), i = rv(o, s);
    return ae(
      i,
      (u) => {
        a("loadingStatusChange", u), u !== "idle" && (l.imageLoadingStatus.value = u);
      },
      { immediate: !0 }
    ), (u, d) => Hn((g(), w(r(J), {
      role: "img",
      "as-child": u.asChild,
      as: u.as,
      src: r(o),
      "referrer-policy": r(s)
    }, {
      default: y(() => [
        _(u.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "src", "referrer-policy"])), [
      [Ir, r(i) === "loaded"]
    ]);
  }
}), lv = /* @__PURE__ */ b({
  __name: "AvatarFallback",
  props: {
    delayMs: { default: 0 },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = Xi();
    j();
    const a = $(!1);
    let o;
    return ae(n.imageLoadingStatus, (s) => {
      s === "loading" && (a.value = !1, t.delayMs ? o = setTimeout(() => {
        a.value = !0, clearTimeout(o);
      }, t.delayMs) : a.value = !0);
    }, { immediate: !0 }), (s, l) => a.value && r(n).imageLoadingStatus.value !== "loaded" ? (g(), w(r(J), {
      key: 0,
      "as-child": s.asChild,
      as: s.as
    }, {
      default: y(() => [
        _(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"])) : fe("", !0);
  }
}), [Zi, iv] = we("PopperRoot"), Qn = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = $();
    return iv({
      anchor: t,
      onAnchorChange: (n) => t.value = n
    }), (n, a) => _(n.$slots, "default");
  }
}), Pa = /* @__PURE__ */ b({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: a } = j(), o = Zi();
    return _e(() => {
      o.onAnchorChange(t.element ?? a.value);
    }), (s, l) => (g(), w(r(J), {
      ref: r(n),
      as: s.as,
      "as-child": s.asChild
    }, {
      default: y(() => [
        _(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function uv(e) {
  return e !== null;
}
function dv(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var n, a, o;
      const { placement: s, rects: l, middlewareData: i } = t, u = ((n = i.arrow) == null ? void 0 : n.centerOffset) !== 0, d = u ? 0 : e.arrowWidth, p = u ? 0 : e.arrowHeight, [c, f] = _r(s), m = { start: "0%", center: "50%", end: "100%" }[f], v = (((a = i.arrow) == null ? void 0 : a.x) ?? 0) + d / 2, h = (((o = i.arrow) == null ? void 0 : o.y) ?? 0) + p / 2;
      let x = "", C = "";
      return c === "bottom" ? (x = u ? m : `${v}px`, C = `${-p}px`) : c === "top" ? (x = u ? m : `${v}px`, C = `${l.floating.height + p}px`) : c === "right" ? (x = `${-p}px`, C = u ? m : `${h}px`) : c === "left" && (x = `${l.floating.width + p}px`, C = u ? m : `${h}px`), { data: { x, y: C } };
    }
  };
}
function _r(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
const Qi = {
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
}, [fB, cv] = we("PopperContent"), Kn = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ go({
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
    ...Qi
  }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = Zi(), { forwardRef: s, currentElement: l } = j(), i = $(), u = $(), { width: d, height: p } = Ki(u), c = E(
      () => n.side + (n.align !== "center" ? `-${n.align}` : "")
    ), f = E(() => typeof n.collisionPadding == "number" ? n.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...n.collisionPadding }), m = E(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), v = E(() => ({
      padding: f.value,
      boundary: m.value.filter(uv),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: m.value.length > 0
    })), h = _p(() => [
      Oi({
        mainAxis: n.sideOffset + p.value,
        alignmentAxis: n.alignOffset
      }),
      n.prioritizePosition && n.avoidCollisions && so({
        ...v.value
      }),
      n.avoidCollisions && Ei({
        mainAxis: !0,
        crossAxis: !!n.prioritizePosition,
        limiter: n.sticky === "partial" ? Ti() : void 0,
        ...v.value
      }),
      !n.prioritizePosition && n.avoidCollisions && so({
        ...v.value
      }),
      Pi({
        ...v.value,
        apply: ({ elements: A, rects: q, availableWidth: L, availableHeight: ee }) => {
          const { width: G, height: z } = q.reference, N = A.floating.style;
          N.setProperty(
            "--radix-popper-available-width",
            `${L}px`
          ), N.setProperty(
            "--radix-popper-available-height",
            `${ee}px`
          ), N.setProperty(
            "--radix-popper-anchor-width",
            `${G}px`
          ), N.setProperty(
            "--radix-popper-anchor-height",
            `${z}px`
          );
        }
      }),
      u.value && Di({ element: u.value, padding: n.arrowPadding }),
      dv({
        arrowWidth: d.value,
        arrowHeight: p.value
      }),
      n.hideWhenDetached && ki({ strategy: "referenceHidden", ...v.value })
    ]), { floatingStyles: x, placement: C, isPositioned: S, middlewareData: B } = Ii(
      o.anchor,
      i,
      {
        strategy: "fixed",
        placement: c,
        whileElementsMounted: (...A) => $i(...A, {
          animationFrame: n.updatePositionStrategy === "always"
        }),
        middleware: h
      }
    ), P = E(
      () => _r(C.value)[0]
    ), O = E(
      () => _r(C.value)[1]
    );
    Fr(() => {
      S.value && a("placed");
    });
    const I = E(
      () => {
        var A;
        return ((A = B.value.arrow) == null ? void 0 : A.centerOffset) !== 0;
      }
    ), k = $("");
    _e(() => {
      l.value && (k.value = window.getComputedStyle(l.value).zIndex);
    });
    const F = E(() => {
      var A;
      return ((A = B.value.arrow) == null ? void 0 : A.x) ?? 0;
    }), D = E(() => {
      var A;
      return ((A = B.value.arrow) == null ? void 0 : A.y) ?? 0;
    });
    return cv({
      placedSide: P,
      onArrowChange: (A) => u.value = A,
      arrowX: F,
      arrowY: D,
      shouldHideArrow: I
    }), (A, q) => {
      var L, ee, G;
      return g(), V("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-radix-popper-content-wrapper": "",
        style: at({
          ...r(x),
          transform: r(S) ? r(x).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: k.value,
          "--radix-popper-transform-origin": [
            (L = r(B).transformOrigin) == null ? void 0 : L.x,
            (ee = r(B).transformOrigin) == null ? void 0 : ee.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((G = r(B).hide) == null ? void 0 : G.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        R(r(J), T({ ref: r(s) }, A.$attrs, {
          "as-child": n.asChild,
          as: A.as,
          "data-side": P.value,
          "data-align": O.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: r(S) ? void 0 : "none"
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
}), ka = /* @__PURE__ */ b({
  __name: "VisuallyHidden",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return j(), (t, n) => (g(), w(r(J), {
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
}), pv = /* @__PURE__ */ b({
  __name: "VisuallyHiddenInput",
  props: {
    name: {},
    value: {},
    required: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, n = E(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" ? [{ name: t.name, value: t.value }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((a, o) => typeof a == "object" ? Object.entries(a).map(([s, l]) => ({ name: `[${o}][${t.name}][${s}]`, value: l })) : { name: `[${t.name}][${o}]`, value: a }) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([a, o]) => ({ name: `[${t.name}][${a}]`, value: o })) : []);
    return (a, o) => (g(!0), V(Pe, null, nn(n.value, (s) => (g(), w(ka, {
      key: s.name,
      as: "input",
      type: "hidden",
      hidden: "",
      readonly: "",
      name: s.name,
      value: s.value,
      required: a.required,
      disabled: a.disabled
    }, null, 8, ["name", "value", "required", "disabled"]))), 128));
  }
}), fv = "data-radix-vue-collection-item", [ds, vv] = we("CollectionProvider");
function cs(e = fv) {
  const t = $(/* @__PURE__ */ new Map()), n = $(), a = vv({
    collectionRef: n,
    itemMap: t,
    attrName: e
  }), { getItems: o } = fs(a), s = E(() => Array.from(a.itemMap.value.values())), l = E(() => a.itemMap.value.size);
  return { getItems: o, reactiveItems: s, itemMapSize: l };
}
const ps = b({
  name: "CollectionSlot",
  setup(e, { slots: t }) {
    const n = ds(), { primitiveElement: a, currentElement: o } = ji();
    return ae(o, () => {
      n.collectionRef.value = o.value;
    }), () => ot(es, { ref: a }, t);
  }
}), Po = b({
  name: "CollectionItem",
  inheritAttrs: !1,
  props: {
    value: {
      // It accepts any value
      validator: () => !0
    }
  },
  setup(e, { slots: t, attrs: n }) {
    const a = ds(), { primitiveElement: o, currentElement: s } = ji();
    return _e((l) => {
      if (s.value) {
        const i = ri(s.value);
        a.itemMap.value.set(i, { ref: s.value, value: e.value }), l(() => a.itemMap.value.delete(i));
      }
    }), () => ot(es, { ...n, [a.attrName]: "", ref: o }, t);
  }
});
function fs(e) {
  const t = e ?? ds();
  return { getItems: () => {
    const n = t.collectionRef.value;
    if (!n)
      return [];
    const a = Array.from(n.querySelectorAll(`[${t.attrName}]`));
    return Array.from(t.itemMap.value.values()).sort(
      (o, s) => a.indexOf(o.ref) - a.indexOf(s.ref)
    );
  } };
}
const [Jn, mv] = we("ComboboxRoot"), gv = /* @__PURE__ */ b({
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
    const n = e, a = t, { multiple: o, disabled: s, dir: l } = pe(n), i = sn(l), u = qe(n, "searchTerm", a, {
      // @ts-expect-error ignore the type error here
      defaultValue: "",
      passive: n.searchTerm === void 0
    }), d = qe(n, "modelValue", a, {
      // @ts-expect-error ignore the type error here
      defaultValue: n.defaultValue ?? o.value ? [] : void 0,
      passive: n.modelValue === void 0,
      deep: !0
    }), p = qe(n, "open", a, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), c = qe(n, "selectedValue", a, {
      defaultValue: void 0,
      passive: n.selectedValue === void 0
    });
    async function f(K) {
      var ne, X;
      p.value = K, await re(), K ? (d.value && (Array.isArray(d.value) && o.value ? c.value = (ne = B().find((Ce) => {
        var Ie, Se;
        return ((Se = (Ie = Ce.ref) == null ? void 0 : Ie.dataset) == null ? void 0 : Se.state) === "checked";
      })) == null ? void 0 : ne.value : c.value = d.value), await re(), (X = h.value) == null || X.focus(), ee()) : (v.value = !1, n.resetSearchTermOnBlur && F("blur"));
    }
    function m(K) {
      if (Array.isArray(d.value) && o.value) {
        const ne = d.value.findIndex((Ce) => vn(Ce, K)), X = [...d.value];
        ne === -1 ? X.push(K) : X.splice(ne, 1), d.value = X;
      } else
        d.value = K, f(!1);
    }
    const v = $(!1), h = $(), x = $(), { forwardRef: C, currentElement: S } = j(), { getItems: B, reactiveItems: P, itemMapSize: O } = cs("data-radix-vue-combobox-item"), I = $([]);
    ae(() => O.value, () => {
      I.value = B().map((K) => K.value);
    }, {
      immediate: !0,
      flush: "post"
    });
    const k = E(() => {
      if (v.value) {
        if (n.filterFunction)
          return n.filterFunction(I.value, u.value);
        const K = I.value.filter((ne) => typeof ne == "string");
        if (K.length)
          return K.filter((ne) => {
            var X;
            return ne.toLowerCase().includes((X = u.value) == null ? void 0 : X.toLowerCase());
          });
      }
      return I.value;
    });
    function F(K) {
      const ne = K === "blur" || K === "select" && n.resetSearchTermOnSelect;
      !o.value && d.value && !Array.isArray(d.value) ? n.displayValue ? u.value = n.displayValue(d.value) : typeof d.value != "object" ? u.value = d.value.toString() : ne && (u.value = "") : ne && (u.value = "");
    }
    const D = E(() => k.value.findIndex((K) => vn(K, c.value))), A = E(() => {
      var K;
      return (K = P.value.find((ne) => vn(ne.value, c.value))) == null ? void 0 : K.ref;
    }), q = E(() => JSON.stringify(d.value));
    ae(q, async () => {
      await re(), await re(), F("select");
    }, {
      // If searchTerm is provided with value during initialization, we don't reset it immediately
      immediate: !n.searchTerm
    }), ae(() => [k.value.length, u.value.length], async ([K, ne], [X, Ce]) => {
      await re(), await re(), K && (Ce > ne || D.value === -1) && (c.value = k.value[0]);
    });
    const L = Bo(S);
    function ee() {
      var K;
      A.value instanceof Element && ((K = A.value) == null || K.scrollIntoView({ block: "nearest" }));
    }
    function G() {
      A.value instanceof Element && A.value.focus && A.value.focus();
    }
    const z = $(!1);
    function N() {
      z.value = !0;
    }
    function se() {
      requestAnimationFrame(() => {
        z.value = !1;
      });
    }
    async function Z(K) {
      var ne;
      k.value.length && c.value && A.value instanceof Element && (K.preventDefault(), K.stopPropagation(), z.value || (ne = A.value) == null || ne.click());
    }
    return mv({
      searchTerm: u,
      modelValue: d,
      // @ts-expect-error ignoring
      onValueChange: m,
      isUserInputted: v,
      multiple: o,
      disabled: s,
      open: p,
      onOpenChange: f,
      filteredOptions: k,
      contentId: "",
      inputElement: h,
      selectedElement: A,
      onInputElementChange: (K) => h.value = K,
      onInputNavigation: async (K) => {
        const ne = D.value;
        ne === 0 && K === "up" || ne === k.value.length - 1 && K === "down" || (ne === -1 && k.value.length || K === "home" ? c.value = k.value[0] : K === "end" ? c.value = k.value[k.value.length - 1] : c.value = k.value[K === "up" ? ne - 1 : ne + 1], await re(), ee(), G(), re(() => {
          var X;
          return (X = h.value) == null ? void 0 : X.focus({ preventScroll: !0 });
        }));
      },
      onInputEnter: Z,
      onCompositionEnd: se,
      onCompositionStart: N,
      selectedValue: c,
      onSelectedValueChange: (K) => c.value = K,
      parentElement: S,
      contentElement: x,
      onContentElementChange: (K) => x.value = K
    }), (K, ne) => (g(), w(r(Qn), null, {
      default: y(() => [
        R(r(J), T({
          ref: r(C),
          style: {
            pointerEvents: r(p) ? "auto" : void 0
          },
          as: K.as,
          "as-child": K.asChild,
          dir: r(i)
        }, K.$attrs), {
          default: y(() => [
            _(K.$slots, "default", {
              open: r(p),
              modelValue: r(d)
            }),
            r(L) && n.name ? (g(), w(r(pv), {
              key: 0,
              name: n.name,
              value: r(d)
            }, null, 8, ["name", "value"])) : fe("", !0)
          ]),
          _: 3
        }, 16, ["style", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), hv = /* @__PURE__ */ b({
  __name: "ComboboxInput",
  props: {
    type: { default: "text" },
    disabled: { type: Boolean },
    autoFocus: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(e) {
    const t = e, n = Jn(), { forwardRef: a, currentElement: o } = j();
    de(() => {
      const p = o.value.nodeName === "INPUT" ? o.value : o.value.querySelector("input");
      p && (n.onInputElementChange(p), setTimeout(() => {
        t.autoFocus && (p == null || p.focus());
      }, 1));
    });
    const s = E(() => t.disabled || n.disabled.value || !1), l = $();
    ti(() => {
      var p;
      return l.value = (p = n.selectedElement.value) == null ? void 0 : p.id;
    });
    function i(p) {
      n.open.value ? n.onInputNavigation(p.key === "ArrowUp" ? "up" : "down") : n.onOpenChange(!0);
    }
    function u(p) {
      n.open.value && n.onInputNavigation(p.key === "Home" ? "home" : "end");
    }
    function d(p) {
      var c;
      n.searchTerm.value = (c = p.target) == null ? void 0 : c.value, n.open.value || n.onOpenChange(!0), n.isUserInputted.value = !0;
    }
    return (p, c) => (g(), w(r(J), {
      ref: r(a),
      as: p.as,
      "as-child": p.asChild,
      type: p.type,
      disabled: s.value,
      value: r(n).searchTerm.value,
      "aria-expanded": r(n).open.value,
      "aria-controls": r(n).contentId,
      "aria-disabled": s.value ?? void 0,
      "aria-activedescendant": l.value,
      "aria-autocomplete": "list",
      role: "combobox",
      autocomplete: "false",
      onInput: d,
      onKeydown: [
        lt(Ae(i, ["prevent"]), ["down", "up"]),
        lt(r(n).onInputEnter, ["enter"]),
        lt(Ae(u, ["prevent"]), ["home", "end"])
      ],
      onCompositionstart: r(n).onCompositionStart,
      onCompositionend: r(n).onCompositionEnd
    }, {
      default: y(() => [
        _(p.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "disabled", "value", "aria-expanded", "aria-controls", "aria-disabled", "aria-activedescendant", "onKeydown", "onCompositionstart", "onCompositionend"]));
  }
}), [Ji, yv] = we("ComboboxGroup"), bv = /* @__PURE__ */ b({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { currentRef: n, currentElement: a } = j(), o = Ge(void 0, "radix-vue-combobox-group"), s = Jn(), l = $(!1);
    function i() {
      if (!a.value)
        return;
      const u = a.value.querySelectorAll("[data-radix-vue-combobox-item]:not([data-hidden])");
      l.value = !!u.length;
    }
    return Ap(a, () => {
      re(() => {
        i();
      });
    }, { childList: !0 }), ae(() => s.searchTerm.value, () => {
      re(() => {
        i();
      });
    }, { immediate: !0 }), yv({
      id: o
    }), (u, d) => Hn((g(), w(r(J), T(t, {
      ref_key: "currentRef",
      ref: n,
      role: "group",
      "aria-labelledby": r(o)
    }), {
      default: y(() => [
        _(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"])), [
      [Ir, l.value]
    ]);
  }
}), _v = /* @__PURE__ */ b({
  __name: "ComboboxLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    j();
    const n = Ji({ id: "" });
    return (a, o) => (g(), w(r(J), T(t, {
      id: r(n).id
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), [vB, wv] = we("ComboboxContent"), xv = /* @__PURE__ */ b({
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
    const n = e, a = t, { position: o } = pe(n), s = Jn();
    Oa(n.bodyLock);
    const { forwardRef: l, currentElement: i } = j();
    Ea(s.parentElement);
    const u = E(() => n.position === "popper" ? n : {}), d = et(u.value);
    function p(f) {
      s.onSelectedValueChange("");
    }
    de(() => {
      s.onContentElementChange(i.value);
    });
    const c = {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      "--radix-combobox-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-combobox-content-available-width": "var(--radix-popper-available-width)",
      "--radix-combobox-content-available-height": "var(--radix-popper-available-height)",
      "--radix-combobox-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-combobox-trigger-height": "var(--radix-popper-anchor-height)"
    };
    return wv({ position: o }), (f, m) => (g(), w(r(ps), null, {
      default: y(() => [
        f.dismissable ? (g(), w(r(Zn), {
          key: 0,
          "as-child": "",
          "disable-outside-pointer-events": f.disableOutsidePointerEvents,
          onDismiss: m[0] || (m[0] = (v) => r(s).onOpenChange(!1)),
          onFocusOutside: m[1] || (m[1] = (v) => {
            var h;
            (h = r(s).parentElement.value) != null && h.contains(v.target) && v.preventDefault(), a("focusOutside", v);
          }),
          onInteractOutside: m[2] || (m[2] = (v) => a("interactOutside", v)),
          onEscapeKeyDown: m[3] || (m[3] = (v) => a("escapeKeyDown", v)),
          onPointerDownOutside: m[4] || (m[4] = (v) => {
            var h;
            (h = r(s).parentElement.value) != null && h.contains(v.target) && v.preventDefault(), a("pointerDownOutside", v);
          })
        }, {
          default: y(() => [
            (g(), w(dt(r(o) === "popper" ? r(Kn) : r(J)), T({ ...f.$attrs, ...r(d) }, {
              id: r(s).contentId,
              ref: r(l),
              role: "listbox",
              "data-state": r(s).open.value ? "open" : "closed",
              style: {
                // flex layout so we can place the scroll buttons properly
                display: "flex",
                flexDirection: "column",
                // reset the outline by default as the content MAY get focused
                outline: "none",
                ...r(o) === "popper" ? c : {}
              },
              onPointerleave: p
            }), {
              default: y(() => [
                _(f.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "data-state", "style"]))
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])) : (g(), w(dt(r(o) === "popper" ? r(Kn) : r(J)), T({ key: 1 }, { ...f.$attrs, ...u.value }, {
          id: r(s).contentId,
          ref: r(l),
          role: "listbox",
          "data-state": r(s).open.value ? "open" : "closed",
          style: {
            // flex layout so we can place the scroll buttons properly
            display: "flex",
            flexDirection: "column",
            // reset the outline by default as the content MAY get focused
            outline: "none",
            ...r(o) === "popper" ? c : {}
          },
          onPointerleave: p
        }), {
          default: y(() => [
            _(f.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "data-state", "style"]))
      ]),
      _: 3
    }));
  }
}), Cv = /* @__PURE__ */ b({
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
    const n = me(e, t), { forwardRef: a } = j(), o = Jn();
    return o.contentId || (o.contentId = Ge(void 0, "radix-vue-combobox-content")), (s, l) => (g(), w(r(yt), {
      present: s.forceMount || r(o).open.value
    }, {
      default: y(() => [
        R(xv, T({ ...r(n), ...s.$attrs }, { ref: r(a) }), {
          default: y(() => [
            _(s.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Bv = /* @__PURE__ */ b({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    j();
    const n = Jn(), a = E(() => n.filteredOptions.value.length === 0);
    return (o, s) => a.value ? (g(), w(r(J), H(T({ key: 0 }, t)), {
      default: y(() => [
        _(o.$slots, "default", {}, () => [
          Be("No options")
        ])
      ]),
      _: 3
    }, 16)) : fe("", !0);
  }
});
function Sv(e) {
  const t = Co({
    nonce: $()
  });
  return E(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.nonce) == null ? void 0 : n.value);
  });
}
const [mB, $v] = we("ComboboxItem"), Ov = "combobox.select", Ev = /* @__PURE__ */ b({
  __name: "ComboboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, a = t, { disabled: o } = pe(n), s = Jn();
    Ji({ id: "", options: $([]) });
    const { forwardRef: l } = j(), i = E(
      () => {
        var h, x;
        return s.multiple.value && Array.isArray(s.modelValue.value) ? (h = s.modelValue.value) == null ? void 0 : h.some((C) => vn(C, n.value)) : vn((x = s.modelValue) == null ? void 0 : x.value, n.value);
      }
    ), u = E(() => vn(s.selectedValue.value, n.value)), d = Ge(void 0, "radix-vue-combobox-item"), p = Ge(void 0, "radix-vue-combobox-option"), c = E(() => s.isUserInputted.value ? s.searchTerm.value === "" || !!s.filteredOptions.value.find((h) => vn(h, n.value)) : !0);
    async function f(h) {
      a("select", h), !(h != null && h.defaultPrevented) && !o.value && h && s.onValueChange(n.value);
    }
    function m(h) {
      if (!h)
        return;
      const x = { originalEvent: h, value: n.value };
      Gr(Ov, f, x);
    }
    async function v(h) {
      await re(), !h.defaultPrevented && s.onSelectedValueChange(n.value);
    }
    if (n.value === "")
      throw new Error(
        "A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder."
      );
    return $v({
      isSelected: i
    }), (h, x) => (g(), w(r(Po), { value: h.value }, {
      default: y(() => [
        Hn(R(r(J), {
          id: r(p),
          ref: r(l),
          role: "option",
          tabindex: "-1",
          "aria-labelledby": r(d),
          "data-highlighted": u.value ? "" : void 0,
          "aria-selected": i.value,
          "data-state": i.value ? "checked" : "unchecked",
          "aria-disabled": r(o) || void 0,
          "data-disabled": r(o) ? "" : void 0,
          as: h.as,
          "as-child": h.asChild,
          "data-hidden": c.value ? void 0 : !0,
          onClick: m,
          onPointermove: v
        }, {
          default: y(() => [
            _(h.$slots, "default", {}, () => [
              Be(Me(h.value), 1)
            ])
          ]),
          _: 3
        }, 8, ["id", "aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "as", "as-child", "data-hidden"]), [
          [Ir, c.value]
        ])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), Pv = /* @__PURE__ */ b({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return j(), (n, a) => (g(), w(r(J), T(t, { "aria-hidden": "true" }), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), eu = /* @__PURE__ */ b({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(r(Pa), H(U(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function kv() {
  const e = $(!1);
  return de(() => {
    zn("keydown", () => {
      e.value = !0;
    }, { capture: !0, passive: !0 }), zn(["pointerdown", "pointermove"], () => {
      e.value = !1;
    }, { capture: !0, passive: !0 });
  }), e;
}
const Tv = Mi(kv), [Cn, tu] = we(["MenuRoot", "MenuSub"], "MenuContext"), [Ta, Dv] = we("MenuRoot"), Av = /* @__PURE__ */ b({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, a = t, { modal: o, dir: s } = pe(n), l = sn(s), i = qe(n, "open", a), u = $(), d = Tv();
    return tu({
      open: i,
      onOpenChange: (p) => {
        i.value = p;
      },
      content: u,
      onContentChange: (p) => {
        u.value = p;
      }
    }), Dv({
      onClose: () => {
        i.value = !1;
      },
      isUsingKeyboardRef: d,
      dir: l,
      modal: o
    }), (p, c) => (g(), w(r(Qn), null, {
      default: y(() => [
        _(p.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Iv = "rovingFocusGroup.onEntryFocus", Mv = { bubbles: !1, cancelable: !0 }, Rv = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Fv(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function qv(e, t, n) {
  const a = Fv(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(a)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(a)))
    return Rv[a];
}
function nu(e, t = !1) {
  const n = Je();
  for (const a of e)
    if (a === n || (a.focus({ preventScroll: t }), Je() !== n))
      return;
}
function Lv(e, t) {
  return e.map((n, a) => e[(t + a) % e.length]);
}
const [Vv, Nv] = we("RovingFocusGroup"), au = /* @__PURE__ */ b({
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
    const a = e, o = n, { loop: s, orientation: l, dir: i } = pe(a), u = sn(i), d = qe(a, "currentTabStopId", o, {
      defaultValue: a.defaultCurrentTabStopId,
      passive: a.currentTabStopId === void 0
    }), p = $(!1), c = $(!1), f = $(0), { getItems: m } = cs();
    function v(x) {
      const C = !c.value;
      if (x.currentTarget && x.target === x.currentTarget && C && !p.value) {
        const S = new CustomEvent(Iv, Mv);
        if (x.currentTarget.dispatchEvent(S), o("entryFocus", S), !S.defaultPrevented) {
          const B = m().map((k) => k.ref).filter((k) => k.dataset.disabled !== ""), P = B.find((k) => k.getAttribute("data-active") === "true"), O = B.find(
            (k) => k.id === d.value
          ), I = [P, O, ...B].filter(
            Boolean
          );
          nu(I, a.preventScrollOnEntryFocus);
        }
      }
      c.value = !1;
    }
    function h() {
      setTimeout(() => {
        c.value = !1;
      }, 1);
    }
    return t({
      getItems: m
    }), Nv({
      loop: s,
      dir: u,
      orientation: l,
      currentTabStopId: d,
      onItemFocus: (x) => {
        d.value = x;
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
    }), (x, C) => (g(), w(r(ps), null, {
      default: y(() => [
        R(r(J), {
          tabindex: p.value || f.value === 0 ? -1 : 0,
          "data-orientation": r(l),
          as: x.as,
          "as-child": x.asChild,
          dir: r(u),
          style: { outline: "none" },
          onMousedown: C[0] || (C[0] = (S) => c.value = !0),
          onMouseup: h,
          onFocus: v,
          onBlur: C[1] || (C[1] = (S) => p.value = !1)
        }, {
          default: y(() => [
            _(x.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), zv = /* @__PURE__ */ b({
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
    const t = e, n = Vv(), a = E(() => t.tabStopId || Ge()), o = E(
      () => n.currentTabStopId.value === a.value
    ), { getItems: s } = fs();
    de(() => {
      t.focusable && n.onFocusableItemAdd();
    }), Ke(() => {
      t.focusable && n.onFocusableItemRemove();
    });
    function l(i) {
      if (i.key === "Tab" && i.shiftKey) {
        n.onItemShiftTab();
        return;
      }
      if (i.target !== i.currentTarget)
        return;
      const u = qv(
        i,
        n.orientation.value,
        n.dir.value
      );
      if (u !== void 0) {
        if (i.metaKey || i.ctrlKey || i.altKey || !t.allowShiftKey && i.shiftKey)
          return;
        i.preventDefault();
        let d = [...s().map((p) => p.ref).filter((p) => p.dataset.disabled !== "")];
        if (u === "last")
          d.reverse();
        else if (u === "prev" || u === "next") {
          u === "prev" && d.reverse();
          const p = d.indexOf(
            i.currentTarget
          );
          d = n.loop.value ? Lv(d, p + 1) : d.slice(p + 1);
        }
        re(() => nu(d));
      }
    }
    return (i, u) => (g(), w(r(Po), null, {
      default: y(() => [
        R(r(J), {
          tabindex: o.value ? 0 : -1,
          "data-orientation": r(n).orientation.value,
          "data-active": i.active,
          "data-disabled": i.focusable ? void 0 : "",
          as: i.as,
          "as-child": i.asChild,
          onMousedown: u[0] || (u[0] = (d) => {
            i.focusable ? r(n).onItemFocus(a.value) : d.preventDefault();
          }),
          onFocus: u[1] || (u[1] = (d) => r(n).onItemFocus(a.value)),
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
}), [vs, Kv] = we("MenuContent"), ms = /* @__PURE__ */ b({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ go({
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
    ...Qi
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = Cn(), s = Ta(), { trapFocus: l, disableOutsidePointerEvents: i, loop: u } = pe(n);
    Qr(), Oa(i.value);
    const d = $(""), p = $(0), c = $(0), f = $(null), m = $("right"), v = $(0), h = $(null), { createCollection: x } = Yn(), { forwardRef: C, currentElement: S } = j(), B = x(S);
    ae(S, (A) => {
      o.onContentChange(A);
    });
    const { handleTypeaheadSearch: P } = Jr(B);
    Ke(() => {
      window.clearTimeout(p.value);
    });
    function O(A) {
      var q, L;
      return m.value === ((q = f.value) == null ? void 0 : q.side) && Lf(A, (L = f.value) == null ? void 0 : L.area);
    }
    async function I(A) {
      var q;
      a("openAutoFocus", A), !A.defaultPrevented && (A.preventDefault(), (q = S.value) == null || q.focus({
        preventScroll: !0
      }));
    }
    function k(A) {
      if (A.defaultPrevented)
        return;
      const q = A.target.closest("[data-radix-menu-content]") === A.currentTarget, L = A.ctrlKey || A.altKey || A.metaKey, ee = A.key.length === 1, G = Li(
        A,
        Je(),
        S.value,
        {
          loop: u.value,
          arrowKeyOptions: "vertical",
          dir: s == null ? void 0 : s.dir.value,
          focus: !0,
          attributeName: "[data-radix-vue-collection-item]:not([data-disabled])"
        }
      );
      if (G)
        return G == null ? void 0 : G.focus();
      if (A.code === "Space" || (q && (A.key === "Tab" && A.preventDefault(), !L && ee && P(A.key)), A.target !== S.value) || !Mf.includes(A.key))
        return;
      A.preventDefault();
      const z = B.value;
      Gi.includes(A.key) && z.reverse(), br(z);
    }
    function F(A) {
      var q, L;
      (L = (q = A == null ? void 0 : A.currentTarget) == null ? void 0 : q.contains) != null && L.call(q, A.target) || (window.clearTimeout(p.value), d.value = "");
    }
    function D(A) {
      var q;
      if (!ga(A))
        return;
      const L = A.target, ee = v.value !== A.clientX;
      if ((q = A == null ? void 0 : A.currentTarget) != null && q.contains(L) && ee) {
        const G = A.clientX > v.value ? "right" : "left";
        m.value = G, v.value = A.clientX;
      }
    }
    return Kv({
      onItemEnter: (A) => !!O(A),
      onItemLeave: (A) => {
        var q;
        O(A) || ((q = S.value) == null || q.focus(), h.value = null);
      },
      onTriggerLeave: (A) => !!O(A),
      searchRef: d,
      pointerGraceTimerRef: c,
      onPointerGraceIntentChange: (A) => {
        f.value = A;
      }
    }), (A, q) => (g(), w(r($o), {
      "as-child": "",
      trapped: r(l),
      onMountAutoFocus: I,
      onUnmountAutoFocus: q[7] || (q[7] = (L) => a("closeAutoFocus", L))
    }, {
      default: y(() => [
        R(r(Zn), {
          "as-child": "",
          "disable-outside-pointer-events": r(i),
          onEscapeKeyDown: q[2] || (q[2] = (L) => a("escapeKeyDown", L)),
          onPointerDownOutside: q[3] || (q[3] = (L) => a("pointerDownOutside", L)),
          onFocusOutside: q[4] || (q[4] = (L) => a("focusOutside", L)),
          onInteractOutside: q[5] || (q[5] = (L) => a("interactOutside", L)),
          onDismiss: q[6] || (q[6] = (L) => a("dismiss"))
        }, {
          default: y(() => [
            R(r(au), {
              "current-tab-stop-id": h.value,
              "onUpdate:currentTabStopId": q[0] || (q[0] = (L) => h.value = L),
              "as-child": "",
              orientation: "vertical",
              dir: r(s).dir.value,
              loop: r(u),
              onEntryFocus: q[1] || (q[1] = (L) => {
                a("entryFocus", L), r(s).isUsingKeyboardRef.value || L.preventDefault();
              })
            }, {
              default: y(() => [
                R(r(Kn), {
                  ref: r(C),
                  role: "menu",
                  as: A.as,
                  "as-child": A.asChild,
                  "aria-orientation": "vertical",
                  "data-radix-menu-content": "",
                  "data-state": r(ss)(r(o).open.value),
                  dir: r(s).dir.value,
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
                  onKeydown: k,
                  onBlur: F,
                  onPointermove: D
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
}), ou = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = vs(), { forwardRef: a } = j(), o = $(!1);
    async function s(i) {
      if (!i.defaultPrevented && ga(i)) {
        if (t.disabled)
          n.onItemLeave(i);
        else if (!n.onItemEnter(i)) {
          const u = i.currentTarget;
          u == null || u.focus({ preventScroll: !0 });
        }
      }
    }
    async function l(i) {
      await re(), !i.defaultPrevented && ga(i) && n.onItemLeave(i);
    }
    return (i, u) => (g(), w(r(Po), {
      value: { textValue: i.textValue }
    }, {
      default: y(() => [
        R(r(J), T({
          ref: r(a),
          role: "menuitem",
          tabindex: "-1"
        }, i.$attrs, {
          as: i.as,
          "as-child": i.asChild,
          "data-radix-vue-collection-item": "",
          "aria-disabled": i.disabled || void 0,
          "data-disabled": i.disabled ? "" : void 0,
          "data-highlighted": o.value ? "" : void 0,
          onPointermove: s,
          onPointerleave: l,
          onFocus: u[0] || (u[0] = async (d) => {
            await re(), !(d.defaultPrevented || i.disabled) && (o.value = !0);
          }),
          onBlur: u[1] || (u[1] = async (d) => {
            await re(), !d.defaultPrevented && (o.value = !1);
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
}), gs = /* @__PURE__ */ b({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, a = t, { forwardRef: o, currentElement: s } = j(), l = Ta(), i = vs(), u = $(!1);
    async function d() {
      const p = s.value;
      if (!n.disabled && p) {
        const c = new CustomEvent(Af, {
          bubbles: !0,
          cancelable: !0
        });
        a("select", c), await re(), c.defaultPrevented ? u.value = !1 : l.onClose();
      }
    }
    return (p, c) => (g(), w(ou, T(n, {
      ref: r(o),
      onClick: d,
      onPointerdown: c[0] || (c[0] = () => {
        u.value = !0;
      }),
      onPointerup: c[1] || (c[1] = async (f) => {
        var m;
        await re(), !f.defaultPrevented && (u.value || (m = f.currentTarget) == null || m.click());
      }),
      onKeydown: c[2] || (c[2] = async (f) => {
        const m = r(i).searchRef.value !== "";
        p.disabled || m && f.key === " " || r(yr).includes(f.key) && (f.currentTarget.click(), f.preventDefault());
      })
    }), {
      default: y(() => [
        _(p.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [jv, ru] = we(
  ["MenuCheckboxItem", "MenuRadioItem"],
  "MenuItemIndicatorContext"
), Hv = /* @__PURE__ */ b({
  __name: "MenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = jv({
      checked: $(!1)
    });
    return (n, a) => (g(), w(r(yt), {
      present: n.forceMount || r(io)(r(t).checked.value) || r(t).checked.value === !0
    }, {
      default: y(() => [
        R(r(J), {
          as: n.as,
          "as-child": n.asChild,
          "data-state": r(ls)(r(t).checked.value)
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
}), Wv = /* @__PURE__ */ b({
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
    const n = e, a = t, o = qe(n, "checked", a);
    return ru({ checked: o }), (s, l) => (g(), w(gs, T({ role: "menuitemcheckbox" }, n, {
      "aria-checked": r(io)(r(o)) ? "mixed" : r(o),
      "data-state": r(ls)(r(o)),
      onSelect: l[0] || (l[0] = async (i) => {
        a("select", i), r(io)(r(o)) ? o.value = !0 : o.value = !r(o);
      })
    }), {
      default: y(() => [
        _(s.$slots, "default", { checked: r(o) })
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), Uv = /* @__PURE__ */ b({
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
    const n = e, a = t, o = me(n, a), s = Cn(), { forwardRef: l, currentElement: i } = j();
    return Ea(i), (u, d) => (g(), w(ms, T(r(o), {
      ref: r(l),
      "trap-focus": r(s).open.value,
      "disable-outside-pointer-events": r(s).open.value,
      "disable-outside-scroll": !0,
      onDismiss: d[0] || (d[0] = (p) => r(s).onOpenChange(!1)),
      onFocusOutside: d[1] || (d[1] = Ae((p) => a("focusOutside", p), ["prevent"]))
    }), {
      default: y(() => [
        _(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), Gv = /* @__PURE__ */ b({
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
    const n = me(e, t), a = Cn();
    return (o, s) => (g(), w(ms, T(r(n), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      "disable-outside-scroll": !1,
      onDismiss: s[0] || (s[0] = (l) => r(a).onOpenChange(!1))
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Yv = /* @__PURE__ */ b({
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
    const n = me(e, t), a = Cn(), o = Ta();
    return (s, l) => (g(), w(r(yt), {
      present: s.forceMount || r(a).open.value
    }, {
      default: y(() => [
        r(o).modal.value ? (g(), w(Uv, H(T({ key: 0 }, { ...s.$attrs, ...r(n) })), {
          default: y(() => [
            _(s.$slots, "default")
          ]),
          _: 3
        }, 16)) : (g(), w(Gv, H(T({ key: 1 }, { ...s.$attrs, ...r(n) })), {
          default: y(() => [
            _(s.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), su = /* @__PURE__ */ b({
  __name: "MenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(r(J), T({ role: "group" }, t), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Xv = /* @__PURE__ */ b({
  __name: "MenuLabel",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(r(J), H(U(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zv = /* @__PURE__ */ b({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(r(Xn), H(U(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Qv, Jv] = we("MenuRadioGroup"), em = /* @__PURE__ */ b({
  __name: "MenuRadioGroup",
  props: {
    modelValue: { default: "" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = qe(n, "modelValue", t);
    return Jv({
      modelValue: a,
      onValueChange: (o) => {
        a.value = o;
      }
    }), (o, s) => (g(), w(su, H(U(n)), {
      default: y(() => [
        _(o.$slots, "default", { modelValue: r(a) })
      ]),
      _: 3
    }, 16));
  }
}), tm = /* @__PURE__ */ b({
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
    const n = e, a = t, { value: o } = pe(n), s = Qv(), l = E(
      () => s.modelValue.value === (o == null ? void 0 : o.value)
    );
    return ru({ checked: l }), (i, u) => (g(), w(gs, T({ role: "menuitemradio" }, n, {
      "aria-checked": l.value,
      "data-state": r(ls)(l.value),
      onSelect: u[0] || (u[0] = async (d) => {
        a("select", d), r(s).onValueChange(r(o));
      })
    }), {
      default: y(() => [
        _(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), nm = /* @__PURE__ */ b({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(r(J), T(t, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [lu, am] = we("MenuSub"), om = /* @__PURE__ */ b({
  __name: "MenuSub",
  props: {
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, a = qe(n, "open", t, {
      defaultValue: !1,
      passive: n.open === void 0
    }), o = Cn(), s = $(), l = $();
    return _e((i) => {
      (o == null ? void 0 : o.open.value) === !1 && (a.value = !1), i(() => a.value = !1);
    }), tu({
      open: a,
      onOpenChange: (i) => {
        a.value = i;
      },
      content: l,
      onContentChange: (i) => {
        l.value = i;
      }
    }), am({
      triggerId: "",
      contentId: "",
      trigger: s,
      onTriggerChange: (i) => {
        s.value = i;
      }
    }), (i, u) => (g(), w(r(Qn), null, {
      default: y(() => [
        _(i.$slots, "default")
      ]),
      _: 3
    }));
  }
}), rm = /* @__PURE__ */ b({
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
    const n = me(e, t), a = Cn(), o = Ta(), s = lu(), { forwardRef: l, currentElement: i } = j();
    return s.contentId || (s.contentId = Ge(void 0, "radix-vue-menu-sub-content")), (u, d) => (g(), w(r(yt), {
      present: u.forceMount || r(a).open.value
    }, {
      default: y(() => [
        R(ms, T(r(n), {
          id: r(s).contentId,
          ref: r(l),
          "aria-labelledby": r(s).triggerId,
          align: "start",
          side: r(o).dir.value === "rtl" ? "left" : "right",
          "disable-outside-pointer-events": !1,
          "disable-outside-scroll": !1,
          "trap-focus": !1,
          onOpenAutoFocus: d[0] || (d[0] = Ae((p) => {
            var c;
            r(o).isUsingKeyboardRef.value && ((c = r(i)) == null || c.focus());
          }, ["prevent"])),
          onCloseAutoFocus: d[1] || (d[1] = Ae(() => {
          }, ["prevent"])),
          onFocusOutside: d[2] || (d[2] = (p) => {
            p.defaultPrevented || p.target !== r(s).trigger.value && r(a).onOpenChange(!1);
          }),
          onEscapeKeyDown: d[3] || (d[3] = (p) => {
            r(o).onClose(), p.preventDefault();
          }),
          onKeydown: d[4] || (d[4] = (p) => {
            var c, f;
            const m = (c = p.currentTarget) == null ? void 0 : c.contains(p.target), v = r(Ff)[r(o).dir.value].includes(p.key);
            m && v && (r(a).onOpenChange(!1), (f = r(s).trigger.value) == null || f.focus(), p.preventDefault());
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
}), sm = /* @__PURE__ */ b({
  __name: "MenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Cn(), a = Ta(), o = lu(), s = vs(), l = $(null);
    o.triggerId || (o.triggerId = Ge(void 0, "radix-vue-menu-sub-trigger"));
    function i() {
      l.value && window.clearTimeout(l.value), l.value = null;
    }
    Ke(() => {
      i();
    });
    function u(c) {
      !ga(c) || s.onItemEnter(c) || !t.disabled && !n.open.value && !l.value && (s.onPointerGraceIntentChange(null), l.value = window.setTimeout(() => {
        n.onOpenChange(!0), i();
      }, 100));
    }
    async function d(c) {
      var f, m;
      if (!ga(c))
        return;
      i();
      const v = (f = n.content.value) == null ? void 0 : f.getBoundingClientRect();
      if (v != null && v.width) {
        const h = (m = n.content.value) == null ? void 0 : m.dataset.side, x = h === "right", C = x ? -5 : 5, S = v[x ? "left" : "right"], B = v[x ? "right" : "left"];
        s.onPointerGraceIntentChange({
          area: [
            // Apply a bleed on clientX to ensure that our exit point is
            // consistently within polygon bounds
            { x: c.clientX + C, y: c.clientY },
            { x: S, y: v.top },
            { x: B, y: v.top },
            { x: B, y: v.bottom },
            { x: S, y: v.bottom }
          ],
          side: h
        }), window.clearTimeout(s.pointerGraceTimerRef.value), s.pointerGraceTimerRef.value = window.setTimeout(
          () => s.onPointerGraceIntentChange(null),
          300
        );
      } else {
        if (s.onTriggerLeave(c))
          return;
        s.onPointerGraceIntentChange(null);
      }
    }
    async function p(c) {
      var f;
      const m = s.searchRef.value !== "";
      t.disabled || m && c.key === " " || Rf[a.dir.value].includes(c.key) && (n.onOpenChange(!0), await re(), (f = n.content.value) == null || f.focus(), c.preventDefault());
    }
    return (c, f) => (g(), w(eu, { "as-child": "" }, {
      default: y(() => [
        R(ou, T(t, {
          id: r(o).triggerId,
          ref: (m) => {
            var v;
            (v = r(o)) == null || v.onTriggerChange(m == null ? void 0 : m.$el);
          },
          "aria-haspopup": "menu",
          "aria-expanded": r(n).open.value,
          "aria-controls": r(o).contentId,
          "data-state": r(ss)(r(n).open.value),
          onClick: f[0] || (f[0] = async (m) => {
            t.disabled || m.defaultPrevented || (m.currentTarget.focus(), r(n).open.value || r(n).onOpenChange(!0));
          }),
          onPointermove: u,
          onPointerleave: d,
          onKeydown: p
        }), {
          default: y(() => [
            _(c.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-expanded", "aria-controls", "data-state"])
      ]),
      _: 3
    }));
  }
}), [iu, lm] = we("DropdownMenuRoot"), im = /* @__PURE__ */ b({
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
    j();
    const o = qe(n, "open", a, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), s = $(), { modal: l, dir: i } = pe(n), u = sn(i);
    return lm({
      open: o,
      onOpenChange: (d) => {
        o.value = d;
      },
      onOpenToggle: () => {
        o.value = !o.value;
      },
      triggerId: "",
      triggerElement: s,
      contentId: "",
      modal: l,
      dir: u
    }), (d, p) => (g(), w(r(Av), {
      open: r(o),
      "onUpdate:open": p[0] || (p[0] = (c) => Qe(o) ? o.value = c : null),
      dir: r(u),
      modal: r(l)
    }, {
      default: y(() => [
        _(d.$slots, "default", { open: r(o) })
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
}), um = /* @__PURE__ */ b({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = iu(), { forwardRef: a, currentElement: o } = j();
    return de(() => {
      n.triggerElement = o;
    }), n.triggerId || (n.triggerId = Ge(void 0, "radix-vue-dropdown-menu-trigger")), (s, l) => (g(), w(r(eu), { "as-child": "" }, {
      default: y(() => [
        R(r(J), {
          id: r(n).triggerId,
          ref: r(a),
          type: s.as === "button" ? "button" : void 0,
          "as-child": t.asChild,
          as: s.as,
          "aria-haspopup": "menu",
          "aria-expanded": r(n).open.value,
          "aria-controls": r(n).open.value ? r(n).contentId : void 0,
          "data-disabled": s.disabled ? "" : void 0,
          disabled: s.disabled,
          "data-state": r(n).open.value ? "open" : "closed",
          onClick: l[0] || (l[0] = async (i) => {
            var u;
            !s.disabled && i.button === 0 && i.ctrlKey === !1 && ((u = r(n)) == null || u.onOpenToggle(), await re(), r(n).open.value && i.preventDefault());
          }),
          onKeydown: l[1] || (l[1] = lt(
            (i) => {
              s.disabled || (["Enter", " "].includes(i.key) && r(n).onOpenToggle(), i.key === "ArrowDown" && r(n).onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
            },
            ["enter", "space", "arrow-down"]
          ))
        }, {
          default: y(() => [
            _(s.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as-child", "as", "aria-expanded", "aria-controls", "data-disabled", "disabled", "data-state"])
      ]),
      _: 3
    }));
  }
}), dm = /* @__PURE__ */ b({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(r(Zv), H(U(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), cm = /* @__PURE__ */ b({
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
    const n = me(e, t);
    j();
    const a = iu(), o = $(!1);
    function s(l) {
      l.defaultPrevented || (o.value || setTimeout(() => {
        var i;
        (i = a.triggerElement.value) == null || i.focus();
      }, 0), o.value = !1, l.preventDefault());
    }
    return a.contentId || (a.contentId = Ge(void 0, "radix-vue-dropdown-menu-content")), (l, i) => {
      var u;
      return g(), w(r(Yv), T(r(n), {
        id: r(a).contentId,
        "aria-labelledby": (u = r(a)) == null ? void 0 : u.triggerId,
        style: {
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        },
        onCloseAutoFocus: s,
        onInteractOutside: i[0] || (i[0] = (d) => {
          var p;
          if (d.defaultPrevented) return;
          const c = d.detail.originalEvent, f = c.button === 0 && c.ctrlKey === !0, m = c.button === 2 || f;
          (!r(a).modal.value || m) && (o.value = !0), (p = r(a).triggerElement.value) != null && p.contains(d.target) && d.preventDefault();
        })
      }), {
        default: y(() => [
          _(l.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby"]);
    };
  }
}), pm = /* @__PURE__ */ b({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, a = ln(t);
    return j(), (o, s) => (g(), w(r(gs), H(U({ ...n, ...r(a) })), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fm = /* @__PURE__ */ b({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return j(), (n, a) => (g(), w(r(su), H(U(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vm = /* @__PURE__ */ b({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return j(), (n, a) => (g(), w(r(nm), H(U(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), mm = /* @__PURE__ */ b({
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
    const n = e, a = ln(t);
    return j(), (o, s) => (g(), w(r(Wv), H(U({ ...n, ...r(a) })), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), uu = /* @__PURE__ */ b({
  __name: "DropdownMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return j(), (n, a) => (g(), w(r(Hv), H(U(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), gm = /* @__PURE__ */ b({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return j(), (n, a) => (g(), w(r(Xv), H(U(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hm = /* @__PURE__ */ b({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = ln(t);
    return j(), (o, s) => (g(), w(r(em), H(U({ ...n, ...r(a) })), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ym = /* @__PURE__ */ b({
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
    const n = me(e, t);
    return j(), (a, o) => (g(), w(r(tm), H(U(r(n))), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), bm = /* @__PURE__ */ b({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, a = qe(n, "open", t, {
      passive: n.open === void 0,
      defaultValue: n.defaultOpen ?? !1
    });
    return j(), (o, s) => (g(), w(r(om), {
      open: r(a),
      "onUpdate:open": s[0] || (s[0] = (l) => Qe(a) ? a.value = l : null)
    }, {
      default: y(() => [
        _(o.$slots, "default", { open: r(a) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), _m = /* @__PURE__ */ b({
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
    const n = me(e, t);
    return j(), (a, o) => (g(), w(r(rm), T(r(n), { style: {
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wm = /* @__PURE__ */ b({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return j(), (n, a) => (g(), w(r(sm), H(U(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), xm = /* @__PURE__ */ b({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(e) {
    const t = e;
    return j(), (n, a) => (g(), w(r(J), T(t, {
      onMousedown: a[0] || (a[0] = (o) => {
        !o.defaultPrevented && o.detail > 1 && o.preventDefault();
      })
    }), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [ea, Cm] = we("PopoverRoot"), Bm = /* @__PURE__ */ b({
  __name: "PopoverRoot",
  props: {
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: !1 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, a = t, { modal: o } = pe(n), s = qe(n, "open", a, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), l = $(), i = $(!1);
    return Cm({
      contentId: "",
      modal: o,
      open: s,
      onOpenChange: (u) => {
        s.value = u;
      },
      onOpenToggle: () => {
        s.value = !s.value;
      },
      triggerElement: l,
      hasCustomAnchor: i
    }), (u, d) => (g(), w(r(Qn), null, {
      default: y(() => [
        _(u.$slots, "default", { open: r(s) })
      ]),
      _: 3
    }));
  }
}), Sm = /* @__PURE__ */ b({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = ea(), { forwardRef: a, currentElement: o } = j();
    return de(() => {
      n.triggerElement.value = o.value;
    }), (s, l) => (g(), w(dt(r(n).hasCustomAnchor.value ? r(J) : r(Pa)), { "as-child": "" }, {
      default: y(() => [
        R(r(J), {
          ref: r(a),
          type: s.as === "button" ? "button" : void 0,
          "aria-haspopup": "dialog",
          "aria-expanded": r(n).open.value,
          "aria-controls": r(n).contentId,
          "data-state": r(n).open.value ? "open" : "closed",
          as: s.as,
          "as-child": t.asChild,
          onClick: r(n).onOpenToggle
        }, {
          default: y(() => [
            _(s.$slots, "default")
          ]),
          _: 3
        }, 8, ["type", "aria-expanded", "aria-controls", "data-state", "as", "as-child", "onClick"])
      ]),
      _: 3
    }));
  }
}), $m = /* @__PURE__ */ b({
  __name: "PopoverPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(r(Xn), H(U(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), du = /* @__PURE__ */ b({
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
    const n = e, a = t, o = et(n), { forwardRef: s } = j(), l = ea();
    return Qr(), (i, u) => (g(), w(r($o), {
      "as-child": "",
      loop: "",
      trapped: i.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => a("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => a("closeAutoFocus", d))
    }, {
      default: y(() => [
        R(r(Zn), {
          "as-child": "",
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          onPointerDownOutside: u[0] || (u[0] = (d) => a("pointerDownOutside", d)),
          onInteractOutside: u[1] || (u[1] = (d) => a("interactOutside", d)),
          onEscapeKeyDown: u[2] || (u[2] = (d) => a("escapeKeyDown", d)),
          onFocusOutside: u[3] || (u[3] = (d) => a("focusOutside", d)),
          onDismiss: u[4] || (u[4] = (d) => r(l).onOpenChange(!1))
        }, {
          default: y(() => [
            R(r(Kn), T(r(o), {
              id: r(l).contentId,
              ref: r(s),
              "data-state": r(l).open.value ? "open" : "closed",
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
}), Om = /* @__PURE__ */ b({
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
    const n = e, a = t, o = ea(), s = $(!1);
    Oa(!0);
    const l = me(n, a), { forwardRef: i, currentElement: u } = j();
    return Ea(u), (d, p) => (g(), w(du, T(r(l), {
      ref: r(i),
      "trap-focus": r(o).open.value,
      "disable-outside-pointer-events": "",
      onCloseAutoFocus: p[0] || (p[0] = Ae(
        (c) => {
          var f;
          a("closeAutoFocus", c), s.value || (f = r(o).triggerElement.value) == null || f.focus();
        },
        ["prevent"]
      )),
      onPointerDownOutside: p[1] || (p[1] = (c) => {
        a("pointerDownOutside", c);
        const f = c.detail.originalEvent, m = f.button === 0 && f.ctrlKey === !0, v = f.button === 2 || m;
        s.value = v;
      }),
      onFocusOutside: p[2] || (p[2] = Ae(() => {
      }, ["prevent"]))
    }), {
      default: y(() => [
        _(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), Em = /* @__PURE__ */ b({
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
    const n = e, a = t, o = ea(), s = $(!1), l = $(!1), i = me(n, a);
    return (u, d) => (g(), w(du, T(r(i), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: d[0] || (d[0] = (p) => {
        var c;
        a("closeAutoFocus", p), p.defaultPrevented || (s.value || (c = r(o).triggerElement.value) == null || c.focus(), p.preventDefault()), s.value = !1, l.value = !1;
      }),
      onInteractOutside: d[1] || (d[1] = async (p) => {
        var c;
        a("interactOutside", p), p.defaultPrevented || (s.value = !0, p.detail.originalEvent.type === "pointerdown" && (l.value = !0));
        const f = p.target;
        (c = r(o).triggerElement.value) != null && c.contains(f) && p.preventDefault(), p.detail.originalEvent.type === "focusin" && l.value && p.preventDefault();
      })
    }), {
      default: y(() => [
        _(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Pm = /* @__PURE__ */ b({
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
    const n = e, a = t, o = ea(), s = me(n, a), { forwardRef: l } = j();
    return o.contentId || (o.contentId = Ge(void 0, "radix-vue-popover-content")), (i, u) => (g(), w(r(yt), {
      present: i.forceMount || r(o).open.value
    }, {
      default: y(() => [
        r(o).modal.value ? (g(), w(Om, T({ key: 0 }, r(s), { ref: r(l) }), {
          default: y(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (g(), w(Em, T({ key: 1 }, r(s), { ref: r(l) }), {
          default: y(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), gB = /* @__PURE__ */ b({
  __name: "PopoverAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    j();
    const n = ea();
    return ni(() => {
      n.hasCustomAnchor.value = !0;
    }), Ke(() => {
      n.hasCustomAnchor.value = !1;
    }), (a, o) => (g(), w(r(Pa), H(U(t)), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ha = 100, [km, Tm] = we("ProgressRoot"), hs = (e) => typeof e == "number";
function Dm(e, t) {
  return Ln(e) || hs(e) && !Number.isNaN(e) && e <= t && e >= 0 ? e : (console.error(`Invalid prop \`value\` of value \`${e}\` supplied to \`ProgressRoot\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${ha} if no \`max\` prop is set)
  - \`null\`  or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`), null);
}
function Am(e) {
  return hs(e) && !Number.isNaN(e) && e > 0 ? e : (console.error(
    `Invalid prop \`max\` of value \`${e}\` supplied to \`ProgressRoot\`. Only numbers greater than 0 are valid max values. Defaulting to \`${ha}\`.`
  ), ha);
}
const Im = /* @__PURE__ */ b({
  __name: "ProgressRoot",
  props: {
    modelValue: {},
    max: { default: ha },
    getValueLabel: { type: Function, default: (e, t) => `${Math.round(e / t * ha)}%` },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "update:max"],
  setup(e, { emit: t }) {
    const n = e, a = t;
    j();
    const o = qe(n, "modelValue", a, {
      passive: n.modelValue === void 0
    }), s = qe(n, "max", a, {
      passive: n.max === void 0
    });
    ae(
      () => o.value,
      async (i) => {
        const u = Dm(i, n.max);
        u !== i && (await re(), o.value = u);
      },
      { immediate: !0 }
    ), ae(
      () => n.max,
      (i) => {
        const u = Am(n.max);
        u !== i && (s.value = u);
      },
      { immediate: !0 }
    );
    const l = E(() => Ln(o.value) ? "indeterminate" : o.value === s.value ? "complete" : "loading");
    return Tm({
      modelValue: o,
      max: s,
      progressState: l
    }), (i, u) => (g(), w(r(J), {
      "as-child": i.asChild,
      as: i.as,
      "aria-valuemax": r(s),
      "aria-valuemin": 0,
      "aria-valuenow": hs(r(o)) ? r(o) : void 0,
      "aria-valuetext": i.getValueLabel(r(o), r(s)),
      "aria-label": i.getValueLabel(r(o), r(s)),
      role: "progressbar",
      "data-state": l.value,
      "data-value": r(o) ?? void 0,
      "data-max": r(s)
    }, {
      default: y(() => [
        _(i.$slots, "default", { modelValue: r(o) })
      ]),
      _: 3
    }, 8, ["as-child", "as", "aria-valuemax", "aria-valuenow", "aria-valuetext", "aria-label", "data-state", "data-value", "data-max"]));
  }
}), Mm = /* @__PURE__ */ b({
  __name: "ProgressIndicator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = km();
    return j(), (a, o) => {
      var s;
      return g(), w(r(J), T(t, {
        "data-state": r(n).progressState.value,
        "data-value": ((s = r(n).modelValue) == null ? void 0 : s.value) ?? void 0,
        "data-max": r(n).max.value
      }), {
        default: y(() => [
          _(a.$slots, "default")
        ]),
        _: 3
      }, 16, ["data-state", "data-value", "data-max"]);
    };
  }
}), Rm = ["default-value"], Fm = /* @__PURE__ */ b({
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
    const t = e, { value: n } = pe(t), a = $();
    return (o, s) => (g(), w(r(ka), { "as-child": "" }, {
      default: y(() => [
        Hn(ie("select", T({
          ref_key: "selectElement",
          ref: a
        }, t, {
          "onUpdate:modelValue": s[0] || (s[0] = (l) => Qe(n) ? n.value = l : null),
          "default-value": r(n)
        }), [
          _(o.$slots, "default")
        ], 16, Rm), [
          [ec, r(n)]
        ])
      ]),
      _: 3
    }));
  }
}), qm = {
  key: 0,
  value: ""
}, [Bn, cu] = we("SelectRoot"), [Lm, Vm] = we("SelectRoot"), Nm = /* @__PURE__ */ b({
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
    const n = e, a = t, o = qe(n, "modelValue", a, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), s = qe(n, "open", a, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), l = $(), i = $(), u = $({
      x: 0,
      y: 0
    }), d = $(!1), { required: p, disabled: c, dir: f } = pe(n), m = sn(f);
    cu({
      triggerElement: l,
      onTriggerChange: (C) => {
        l.value = C;
      },
      valueElement: i,
      onValueElementChange: (C) => {
        i.value = C;
      },
      valueElementHasChildren: d,
      onValueElementHasChildrenChange: (C) => {
        d.value = C;
      },
      contentId: "",
      modelValue: o,
      onValueChange: (C) => {
        o.value = C;
      },
      open: s,
      required: p,
      onOpenChange: (C) => {
        s.value = C;
      },
      dir: m,
      triggerPointerDownPosRef: u,
      disabled: c
    });
    const v = Bo(l), h = $(/* @__PURE__ */ new Set()), x = E(() => Array.from(h.value).map((C) => {
      var S;
      return (S = C.props) == null ? void 0 : S.value;
    }).join(";"));
    return Vm({
      onNativeOptionAdd: (C) => {
        h.value.add(C);
      },
      onNativeOptionRemove: (C) => {
        h.value.delete(C);
      }
    }), (C, S) => (g(), w(r(Qn), null, {
      default: y(() => [
        _(C.$slots, "default", {
          modelValue: r(o),
          open: r(s)
        }),
        r(v) ? (g(), w(Fm, T({ key: x.value }, C.$attrs, {
          "aria-hidden": "true",
          tabindex: "-1",
          required: r(p),
          name: C.name,
          autocomplete: C.autocomplete,
          disabled: r(c),
          value: r(o),
          onChange: S[0] || (S[0] = (B) => o.value = B.target.value)
        }), {
          default: y(() => [
            r(o) === void 0 ? (g(), V("option", qm)) : fe("", !0),
            (g(!0), V(Pe, null, nn(Array.from(h.value), (B) => (g(), w(dt(B), T({ ref_for: !0 }, B.props, {
              key: B.key ?? ""
            }), null, 16))), 128))
          ]),
          _: 1
        }, 16, ["required", "name", "autocomplete", "disabled", "value"])) : fe("", !0)
      ]),
      _: 3
    }));
  }
}), zm = [" ", "Enter", "ArrowUp", "ArrowDown"], Km = [" ", "Enter"], xt = 10;
function pu(e) {
  return e === "" || Ln(e);
}
const jm = /* @__PURE__ */ b({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Bn(), a = E(() => {
      var m;
      return ((m = n.disabled) == null ? void 0 : m.value) || t.disabled;
    }), { forwardRef: o, currentElement: s } = j();
    n.contentId || (n.contentId = Ge(void 0, "radix-vue-select-content")), de(() => {
      n.triggerElement = s;
    });
    const { injectCollection: l } = Yn(), i = l(), { search: u, handleTypeaheadSearch: d, resetTypeahead: p } = Jr(i);
    function c() {
      a.value || (n.onOpenChange(!0), p());
    }
    function f(m) {
      c(), n.triggerPointerDownPosRef.value = {
        x: Math.round(m.pageX),
        y: Math.round(m.pageY)
      };
    }
    return (m, v) => (g(), w(r(Pa), { "as-child": "" }, {
      default: y(() => {
        var h, x, C, S;
        return [
          R(r(J), {
            ref: r(o),
            role: "combobox",
            type: m.as === "button" ? "button" : void 0,
            "aria-controls": r(n).contentId,
            "aria-expanded": r(n).open.value || !1,
            "aria-required": (h = r(n).required) == null ? void 0 : h.value,
            "aria-autocomplete": "none",
            disabled: a.value,
            dir: (x = r(n)) == null ? void 0 : x.dir.value,
            "data-state": (C = r(n)) != null && C.open.value ? "open" : "closed",
            "data-disabled": a.value ? "" : void 0,
            "data-placeholder": r(pu)((S = r(n).modelValue) == null ? void 0 : S.value) ? "" : void 0,
            "as-child": m.asChild,
            as: m.as,
            onClick: v[0] || (v[0] = (B) => {
              var P;
              (P = B == null ? void 0 : B.currentTarget) == null || P.focus();
            }),
            onPointerdown: v[1] || (v[1] = (B) => {
              if (B.pointerType === "touch")
                return B.preventDefault();
              const P = B.target;
              P.hasPointerCapture(B.pointerId) && P.releasePointerCapture(B.pointerId), B.button === 0 && B.ctrlKey === !1 && (f(B), B.preventDefault());
            }),
            onPointerup: v[2] || (v[2] = Ae(
              (B) => {
                B.pointerType === "touch" && f(B);
              },
              ["prevent"]
            )),
            onKeydown: v[3] || (v[3] = (B) => {
              const P = r(u) !== "";
              !(B.ctrlKey || B.altKey || B.metaKey) && B.key.length === 1 && P && B.key === " " || (r(d)(B.key), r(zm).includes(B.key) && (c(), B.preventDefault()));
            })
          }, {
            default: y(() => [
              _(m.$slots, "default")
            ]),
            _: 3
          }, 8, ["type", "aria-controls", "aria-expanded", "aria-required", "disabled", "dir", "data-state", "data-disabled", "data-placeholder", "as-child", "as"])
        ];
      }),
      _: 3
    }));
  }
}), Hm = /* @__PURE__ */ b({
  __name: "SelectPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(r(Xn), H(U(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [ys, Wm] = we("SelectItemAlignedPosition"), Um = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, a = t, { injectCollection: o } = Yn(), s = Bn(), l = Sn(), i = o(), u = $(!1), d = $(!0), p = $(), { forwardRef: c, currentElement: f } = j(), { viewport: m, selectedItem: v, selectedItemText: h, focusSelectedItem: x } = l;
    function C() {
      if (s.triggerElement.value && s.valueElement.value && p.value && f.value && m != null && m.value && v != null && v.value && h != null && h.value) {
        const P = s.triggerElement.value.getBoundingClientRect(), O = f.value.getBoundingClientRect(), I = s.valueElement.value.getBoundingClientRect(), k = h.value.getBoundingClientRect();
        if (s.dir.value !== "rtl") {
          const W = k.left - O.left, Q = I.left - W, le = P.left - Q, ve = P.width + le, ge = Math.max(ve, O.width), te = window.innerWidth - xt, be = lo(Q, xt, Math.max(xt, te - ge));
          p.value.style.minWidth = `${ve}px`, p.value.style.left = `${be}px`;
        } else {
          const W = O.right - k.right, Q = window.innerWidth - I.right - W, le = window.innerWidth - P.right - Q, ve = P.width + le, ge = Math.max(ve, O.width), te = window.innerWidth - xt, be = lo(
            Q,
            xt,
            Math.max(xt, te - ge)
          );
          p.value.style.minWidth = `${ve}px`, p.value.style.right = `${be}px`;
        }
        const F = i.value, D = window.innerHeight - xt * 2, A = m.value.scrollHeight, q = window.getComputedStyle(f.value), L = Number.parseInt(
          q.borderTopWidth,
          10
        ), ee = Number.parseInt(q.paddingTop, 10), G = Number.parseInt(
          q.borderBottomWidth,
          10
        ), z = Number.parseInt(
          q.paddingBottom,
          10
        ), N = L + ee + A + z + G, se = Math.min(
          v.value.offsetHeight * 5,
          N
        ), Z = window.getComputedStyle(m.value), K = Number.parseInt(Z.paddingTop, 10), ne = Number.parseInt(
          Z.paddingBottom,
          10
        ), X = P.top + P.height / 2 - xt, Ce = D - X, Ie = v.value.offsetHeight / 2, Se = v.value.offsetTop + Ie, Te = L + ee + Se, je = N - Te;
        if (Te <= X) {
          const W = v.value === F[F.length - 1];
          p.value.style.bottom = "0px";
          const Q = f.value.clientHeight - m.value.offsetTop - m.value.offsetHeight, le = Math.max(
            Ce,
            Ie + (W ? ne : 0) + Q + G
          ), ve = Te + le;
          p.value.style.height = `${ve}px`;
        } else {
          const W = v.value === F[0];
          p.value.style.top = "0px";
          const Q = Math.max(
            X,
            L + m.value.offsetTop + (W ? K : 0) + Ie
          ) + je;
          p.value.style.height = `${Q}px`, m.value.scrollTop = Te - X + m.value.offsetTop;
        }
        p.value.style.margin = `${xt}px 0`, p.value.style.minHeight = `${se}px`, p.value.style.maxHeight = `${D}px`, a("placed"), requestAnimationFrame(() => u.value = !0);
      }
    }
    const S = $("");
    de(async () => {
      await re(), C(), f.value && (S.value = window.getComputedStyle(f.value).zIndex);
    });
    function B(P) {
      P && d.value === !0 && (C(), x == null || x(), d.value = !1);
    }
    return Wm({
      contentWrapper: p,
      shouldExpandOnScrollRef: u,
      onScrollButtonChange: B
    }), (P, O) => (g(), V("div", {
      ref_key: "contentWrapperElement",
      ref: p,
      style: at({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: S.value
      })
    }, [
      R(r(J), T({
        ref: r(c),
        style: {
          // When we get the height of the content, it includes borders. If we were to set
          // the height without having `boxSizing: 'border-box'` it would be too big.
          boxSizing: "border-box",
          // We need to ensure the content doesn't get taller than the wrapper
          maxHeight: "100%"
        }
      }, { ...P.$attrs, ...n }), {
        default: y(() => [
          _(P.$slots, "default")
        ]),
        _: 3
      }, 16)
    ], 4));
  }
}), Gm = /* @__PURE__ */ b({
  __name: "SelectPopperPosition",
  props: {
    side: {},
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: { default: xt },
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = et(e);
    return (n, a) => (g(), w(r(Kn), T(r(t), { style: {
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
}), ta = {
  onViewportChange: () => {
  },
  itemTextRefCallback: () => {
  },
  itemRefCallback: () => {
  }
}, [Sn, Ym] = we("SelectContent"), Xm = /* @__PURE__ */ b({
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
    const n = e, a = t, o = Bn();
    Qr(), Oa(n.bodyLock);
    const { createCollection: s } = Yn(), l = $();
    Ea(l);
    const i = s(l), { search: u, handleTypeaheadSearch: d } = Jr(i), p = $(), c = $(), f = $(), m = $(!1), v = $(!1);
    function h() {
      c.value && l.value && br([c.value, l.value]);
    }
    ae(m, () => {
      h();
    });
    const { onOpenChange: x, triggerPointerDownPosRef: C } = o;
    _e((O) => {
      if (!l.value)
        return;
      let I = { x: 0, y: 0 };
      const k = (D) => {
        var A, q;
        I = {
          x: Math.abs(
            Math.round(D.pageX) - (((A = C.value) == null ? void 0 : A.x) ?? 0)
          ),
          y: Math.abs(
            Math.round(D.pageY) - (((q = C.value) == null ? void 0 : q.y) ?? 0)
          )
        };
      }, F = (D) => {
        var A;
        D.pointerType !== "touch" && (I.x <= 10 && I.y <= 10 ? D.preventDefault() : (A = l.value) != null && A.contains(D.target) || x(!1), document.removeEventListener("pointermove", k), C.value = null);
      };
      C.value !== null && (document.addEventListener("pointermove", k), document.addEventListener("pointerup", F, {
        capture: !0,
        once: !0
      })), O(() => {
        document.removeEventListener("pointermove", k), document.removeEventListener("pointerup", F, {
          capture: !0
        });
      });
    });
    function S(O) {
      const I = O.ctrlKey || O.altKey || O.metaKey;
      if (O.key === "Tab" && O.preventDefault(), !I && O.key.length === 1 && d(O.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(O.key)) {
        let k = i.value;
        if (["ArrowUp", "End"].includes(O.key) && (k = k.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(O.key)) {
          const F = O.target, D = k.indexOf(F);
          k = k.slice(D + 1);
        }
        setTimeout(() => br(k)), O.preventDefault();
      }
    }
    const B = E(() => n.position === "popper" ? n : {}), P = et(B.value);
    return Ym({
      content: l,
      viewport: p,
      onViewportChange: (O) => {
        p.value = O;
      },
      itemRefCallback: (O, I, k) => {
        var F, D;
        const A = !v.value && !k;
        (((F = o.modelValue) == null ? void 0 : F.value) !== void 0 && ((D = o.modelValue) == null ? void 0 : D.value) === I || A) && (c.value = O, A && (v.value = !0));
      },
      selectedItem: c,
      selectedItemText: f,
      onItemLeave: () => {
        var O;
        (O = l.value) == null || O.focus();
      },
      itemTextRefCallback: (O, I, k) => {
        var F, D;
        const A = !v.value && !k;
        (((F = o.modelValue) == null ? void 0 : F.value) !== void 0 && ((D = o.modelValue) == null ? void 0 : D.value) === I || A) && (f.value = O);
      },
      focusSelectedItem: h,
      position: n.position,
      isPositioned: m,
      searchRef: u
    }), (O, I) => (g(), w(r($o), {
      "as-child": "",
      onMountAutoFocus: I[6] || (I[6] = Ae(() => {
      }, ["prevent"])),
      onUnmountAutoFocus: I[7] || (I[7] = (k) => {
        var F;
        a("closeAutoFocus", k), !k.defaultPrevented && ((F = r(o).triggerElement.value) == null || F.focus({ preventScroll: !0 }), k.preventDefault());
      })
    }, {
      default: y(() => [
        R(r(Zn), {
          "as-child": "",
          "disable-outside-pointer-events": "",
          onFocusOutside: I[2] || (I[2] = Ae(() => {
          }, ["prevent"])),
          onDismiss: I[3] || (I[3] = (k) => r(o).onOpenChange(!1)),
          onEscapeKeyDown: I[4] || (I[4] = (k) => a("escapeKeyDown", k)),
          onPointerDownOutside: I[5] || (I[5] = (k) => a("pointerDownOutside", k))
        }, {
          default: y(() => [
            (g(), w(dt(
              O.position === "popper" ? Gm : Um
            ), T({ ...O.$attrs, ...r(P) }, {
              id: r(o).contentId,
              ref: (k) => {
                l.value = r(ht)(k);
              },
              role: "listbox",
              "data-state": r(o).open.value ? "open" : "closed",
              dir: r(o).dir.value,
              style: {
                // flex layout so we can place the scroll buttons properly
                display: "flex",
                flexDirection: "column",
                // reset the outline by default as the content MAY get focused
                outline: "none"
              },
              onContextmenu: I[0] || (I[0] = Ae(() => {
              }, ["prevent"])),
              onPlaced: I[1] || (I[1] = (k) => m.value = !0),
              onKeydown: S
            }), {
              default: y(() => [
                _(O.$slots, "default")
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
}), Zm = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "SelectProvider",
  props: {
    context: {}
  },
  setup(e) {
    return cu(e.context), (t, n) => _(t.$slots, "default");
  }
}), Qm = { key: 1 }, Jm = /* @__PURE__ */ b({
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
    const n = e, a = me(n, t), o = Bn(), s = $();
    de(() => {
      s.value = new DocumentFragment();
    });
    const l = $(), i = E(() => n.forceMount || o.open.value);
    return (u, d) => {
      var p;
      return i.value ? (g(), w(r(yt), {
        key: 0,
        ref_key: "presenceRef",
        ref: l,
        present: !0
      }, {
        default: y(() => [
          R(Xm, H(U({ ...r(a), ...u.$attrs })), {
            default: y(() => [
              _(u.$slots, "default")
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 512)) : !((p = l.value) != null && p.present) && s.value ? (g(), V("div", Qm, [
        (g(), w(hn, { to: s.value }, [
          R(Zm, { context: r(o) }, {
            default: y(() => [
              _(u.$slots, "default")
            ]),
            _: 3
          }, 8, ["context"])
        ], 8, ["to"]))
      ])) : fe("", !0);
    };
  }
}), eg = /* @__PURE__ */ b({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(r(J), T({ "aria-hidden": "true" }, t), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [fu, tg] = we("SelectItem"), ng = /* @__PURE__ */ b({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { disabled: n } = pe(t), a = Bn(), o = Sn(ta), { forwardRef: s, currentElement: l } = j(), i = E(() => {
      var h;
      return ((h = a.modelValue) == null ? void 0 : h.value) === t.value;
    }), u = $(!1), d = $(t.textValue ?? ""), p = Ge(void 0, "radix-vue-select-item-text");
    async function c(h) {
      await re(), !(h != null && h.defaultPrevented) && (n.value || (a.onValueChange(t.value), a.onOpenChange(!1)));
    }
    async function f(h) {
      var x;
      await re(), !h.defaultPrevented && (n.value ? (x = o.onItemLeave) == null || x.call(o) : h.currentTarget.focus({ preventScroll: !0 }));
    }
    async function m(h) {
      var x;
      await re(), !h.defaultPrevented && h.currentTarget === Je() && ((x = o.onItemLeave) == null || x.call(o));
    }
    async function v(h) {
      var x;
      await re(), !(h.defaultPrevented || ((x = o.searchRef) == null ? void 0 : x.value) !== "" && h.key === " ") && (Km.includes(h.key) && c(), h.key === " " && h.preventDefault());
    }
    if (t.value === "")
      throw new Error(
        "A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return de(() => {
      l.value && o.itemRefCallback(
        l.value,
        t.value,
        t.disabled
      );
    }), tg({
      value: t.value,
      disabled: n,
      textId: p,
      isSelected: i,
      onItemTextChange: (h) => {
        d.value = ((d.value || (h == null ? void 0 : h.textContent)) ?? "").trim();
      }
    }), (h, x) => (g(), w(r(J), {
      ref: r(s),
      role: "option",
      "data-radix-vue-collection-item": "",
      "aria-labelledby": r(p),
      "data-highlighted": u.value ? "" : void 0,
      "aria-selected": i.value,
      "data-state": i.value ? "checked" : "unchecked",
      "aria-disabled": r(n) || void 0,
      "data-disabled": r(n) ? "" : void 0,
      tabindex: r(n) ? void 0 : -1,
      as: h.as,
      "as-child": h.asChild,
      onFocus: x[0] || (x[0] = (C) => u.value = !0),
      onBlur: x[1] || (x[1] = (C) => u.value = !1),
      onPointerup: c,
      onPointerdown: x[2] || (x[2] = (C) => {
        C.currentTarget.focus({ preventScroll: !0 });
      }),
      onTouchend: x[3] || (x[3] = Ae(() => {
      }, ["prevent", "stop"])),
      onPointermove: f,
      onPointerleave: m,
      onKeydown: v
    }, {
      default: y(() => [
        _(h.$slots, "default")
      ]),
      _: 3
    }, 8, ["aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "tabindex", "as", "as-child"]));
  }
}), ag = /* @__PURE__ */ b({
  __name: "SelectItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = fu();
    return (a, o) => r(n).isSelected.value ? (g(), w(r(J), T({
      key: 0,
      "aria-hidden": "true"
    }, t), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16)) : fe("", !0);
  }
}), [og, rg] = we("SelectGroup"), sg = /* @__PURE__ */ b({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Ge(void 0, "radix-vue-select-group");
    return rg({ id: n }), (a, o) => (g(), w(r(J), T({ role: "group" }, t, { "aria-labelledby": r(n) }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), lg = /* @__PURE__ */ b({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, n = og({ id: "" });
    return (a, o) => (g(), w(r(J), T(t, {
      id: r(n).id
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), vu = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = Bn(), a = Sn(ta), o = Lm(), s = fu(), { forwardRef: l, currentElement: i } = j(), u = E(() => {
      var d;
      return ot("option", {
        key: s.value,
        value: s.value,
        disabled: s.disabled.value,
        textContent: (d = i.value) == null ? void 0 : d.textContent
      });
    });
    return de(() => {
      i.value && (s.onItemTextChange(i.value), a.itemTextRefCallback(
        i.value,
        s.value,
        s.disabled.value
      ), o.onNativeOptionAdd(u.value));
    }), Wn(() => {
      o.onNativeOptionRemove(u.value);
    }), (d, p) => (g(), V(Pe, null, [
      R(r(J), T({
        id: r(s).textId,
        ref: r(l)
      }, { ...t, ...d.$attrs }, { "data-item-text": "" }), {
        default: y(() => [
          _(d.$slots, "default")
        ]),
        _: 3
      }, 16, ["id"]),
      r(s).isSelected.value && r(n).valueElement.value && !r(n).valueElementHasChildren.value ? (g(), w(hn, {
        key: 0,
        to: r(n).valueElement.value
      }, [
        _(d.$slots, "default")
      ], 8, ["to"])) : fe("", !0)
    ], 64));
  }
}), ig = /* @__PURE__ */ b({
  __name: "SelectViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { nonce: n } = pe(t), a = Sv(n), o = Sn(ta), s = o.position === "item-aligned" ? ys() : void 0, { forwardRef: l, currentElement: i } = j();
    de(() => {
      o == null || o.onViewportChange(i.value);
    });
    const u = $(0);
    function d(p) {
      const c = p.currentTarget, { shouldExpandOnScrollRef: f, contentWrapper: m } = s ?? {};
      if (f != null && f.value && m != null && m.value) {
        const v = Math.abs(u.value - c.scrollTop);
        if (v > 0) {
          const h = window.innerHeight - xt * 2, x = Number.parseFloat(
            m.value.style.minHeight
          ), C = Number.parseFloat(m.value.style.height), S = Math.max(x, C);
          if (S < h) {
            const B = S + v, P = Math.min(h, B), O = B - P;
            m.value.style.height = `${P}px`, m.value.style.bottom === "0px" && (c.scrollTop = O > 0 ? O : 0, m.value.style.justifyContent = "flex-end");
          }
        }
      }
      u.value = c.scrollTop;
    }
    return (p, c) => (g(), V(Pe, null, [
      R(r(J), T({
        ref: r(l),
        "data-radix-select-viewport": "",
        role: "presentation"
      }, { ...p.$attrs, ...t }, {
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
          _(p.$slots, "default")
        ]),
        _: 3
      }, 16),
      R(r(J), {
        as: "style",
        nonce: r(a)
      }, {
        default: y(() => [
          Be(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-radix-select-viewport]::-webkit-scrollbar { display: none; } ")
        ]),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
}), mu = /* @__PURE__ */ b({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(e, { emit: t }) {
    const n = t, { injectCollection: a } = Yn(), o = a(), s = Sn(ta), l = $(null);
    function i() {
      l.value !== null && (window.clearInterval(l.value), l.value = null);
    }
    _e(() => {
      const p = o.value.find(
        (c) => c === Je()
      );
      p == null || p.scrollIntoView({ block: "nearest" });
    });
    function u() {
      l.value === null && (l.value = window.setInterval(() => {
        n("autoScroll");
      }, 50));
    }
    function d() {
      var p;
      (p = s.onItemLeave) == null || p.call(s), l.value === null && (l.value = window.setInterval(() => {
        n("autoScroll");
      }, 50));
    }
    return Wn(() => i()), (p, c) => {
      var f;
      return g(), w(r(J), T({
        "aria-hidden": "true",
        style: {
          flexShrink: 0
        }
      }, (f = p.$parent) == null ? void 0 : f.$props, {
        onPointerdown: u,
        onPointermove: d,
        onPointerleave: c[0] || (c[0] = () => {
          i();
        })
      }), {
        default: y(() => [
          _(p.$slots, "default")
        ]),
        _: 3
      }, 16);
    };
  }
}), ug = /* @__PURE__ */ b({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Sn(ta), n = t.position === "item-aligned" ? ys() : void 0, { forwardRef: a, currentElement: o } = j(), s = $(!1);
    return _e((l) => {
      var i, u;
      if ((i = t.viewport) != null && i.value && (u = t.isPositioned) != null && u.value) {
        let d = function() {
          s.value = p.scrollTop > 0;
        };
        const p = t.viewport.value;
        d(), p.addEventListener("scroll", d), l(() => p.removeEventListener("scroll", d));
      }
    }), ae(o, () => {
      o.value && (n == null || n.onScrollButtonChange(o.value));
    }), (l, i) => s.value ? (g(), w(mu, {
      key: 0,
      ref: r(a),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: u, selectedItem: d } = r(t);
        u != null && u.value && d != null && d.value && (u.value.scrollTop = u.value.scrollTop - d.value.offsetHeight);
      })
    }, {
      default: y(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 512)) : fe("", !0);
  }
}), dg = /* @__PURE__ */ b({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Sn(ta), n = t.position === "item-aligned" ? ys() : void 0, { forwardRef: a, currentElement: o } = j(), s = $(!1);
    return _e((l) => {
      var i, u;
      if ((i = t.viewport) != null && i.value && (u = t.isPositioned) != null && u.value) {
        let d = function() {
          const c = p.scrollHeight - p.clientHeight;
          s.value = Math.ceil(p.scrollTop) < c;
        };
        const p = t.viewport.value;
        d(), p.addEventListener("scroll", d), l(() => p.removeEventListener("scroll", d));
      }
    }), ae(o, () => {
      o.value && (n == null || n.onScrollButtonChange(o.value));
    }), (l, i) => s.value ? (g(), w(mu, {
      key: 0,
      ref: r(a),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: u, selectedItem: d } = r(t);
        u != null && u.value && d != null && d.value && (u.value.scrollTop = u.value.scrollTop + d.value.offsetHeight);
      })
    }, {
      default: y(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 512)) : fe("", !0);
  }
}), cg = /* @__PURE__ */ b({
  __name: "SelectValue",
  props: {
    placeholder: { default: "" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const { forwardRef: t, currentElement: n } = j(), a = Bn(), o = Mr();
    return ni(() => {
      var s;
      const l = !!xo((s = o == null ? void 0 : o.default) == null ? void 0 : s.call(o)).length;
      a.onValueElementHasChildrenChange(l);
    }), de(() => {
      a.valueElement = n;
    }), (s, l) => (g(), w(r(J), {
      ref: r(t),
      as: s.as,
      "as-child": s.asChild,
      style: { pointerEvents: "none" }
    }, {
      default: y(() => {
        var i;
        return [
          r(pu)((i = r(a).modelValue) == null ? void 0 : i.value) ? (g(), V(Pe, { key: 0 }, [
            Be(Me(s.placeholder), 1)
          ], 64)) : _(s.$slots, "default", { key: 1 })
        ];
      }),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), pg = /* @__PURE__ */ b({
  __name: "SelectIcon",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return (t, n) => (g(), w(r(J), {
      "aria-hidden": "true",
      as: t.as,
      "as-child": t.asChild
    }, {
      default: y(() => [
        _(t.$slots, "default", {}, () => [
          Be("▼")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function fg(e = [], t, n) {
  const a = [...e];
  return a[n] = t, a.sort((o, s) => o - s);
}
function gu(e, t, n) {
  const a = 100 / (n - t) * (e - t);
  return lo(a, 0, 100);
}
function vg(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
function mg(e, t) {
  if (e.length === 1)
    return 0;
  const n = e.map((o) => Math.abs(o - t)), a = Math.min(...n);
  return n.indexOf(a);
}
function gg(e, t, n) {
  const a = e / 2, o = bs([0, 50], [0, a]);
  return (a - o(t) * n) * n;
}
function hg(e) {
  return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
function yg(e, t) {
  if (t > 0) {
    const n = hg(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function bs(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const a = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + a * (n - e[0]);
  };
}
function bg(e) {
  return (String(e).split(".")[1] || "").length;
}
function _g(e, t) {
  const n = 10 ** t;
  return Math.round(e * n) / n;
}
const hu = ["PageUp", "PageDown"], yu = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], bu = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, [_u, wu] = we(["SliderVertical", "SliderHorizontal"]), xu = /* @__PURE__ */ b({
  __name: "SliderImpl",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  emits: ["slideStart", "slideMove", "slideEnd", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = ko();
    return (s, l) => (g(), w(r(J), T({ "data-slider-impl": "" }, n, {
      onKeydown: l[0] || (l[0] = (i) => {
        i.key === "Home" ? (a("homeKeyDown", i), i.preventDefault()) : i.key === "End" ? (a("endKeyDown", i), i.preventDefault()) : r(hu).concat(r(yu)).includes(i.key) && (a("stepKeyDown", i), i.preventDefault());
      }),
      onPointerdown: l[1] || (l[1] = (i) => {
        const u = i.target;
        u.setPointerCapture(i.pointerId), i.preventDefault(), r(o).thumbElements.value.includes(u) ? u.focus() : a("slideStart", i);
      }),
      onPointermove: l[2] || (l[2] = (i) => {
        i.target.hasPointerCapture(i.pointerId) && a("slideMove", i);
      }),
      onPointerup: l[3] || (l[3] = (i) => {
        const u = i.target;
        u.hasPointerCapture(i.pointerId) && (u.releasePointerCapture(i.pointerId), a("slideEnd", i));
      })
    }), {
      default: y(() => [
        _(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wg = /* @__PURE__ */ b({
  __name: "SliderHorizontal",
  props: {
    dir: {},
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const n = e, a = t, { max: o, min: s, dir: l, inverted: i } = pe(n), { forwardRef: u, currentElement: d } = j(), p = $(), c = E(() => (l == null ? void 0 : l.value) === "ltr" && !i.value || (l == null ? void 0 : l.value) !== "ltr" && i.value);
    function f(m) {
      const v = p.value || d.value.getBoundingClientRect(), h = [0, v.width], x = c.value ? [s.value, o.value] : [o.value, s.value], C = bs(h, x);
      return p.value = v, C(m - v.left);
    }
    return wu({
      startEdge: c.value ? "left" : "right",
      endEdge: c.value ? "right" : "left",
      direction: c.value ? 1 : -1,
      size: "width"
    }), (m, v) => (g(), w(xu, {
      ref: r(u),
      dir: r(l),
      "data-orientation": "horizontal",
      style: {
        "--radix-slider-thumb-transform": "translateX(-50%)"
      },
      onSlideStart: v[0] || (v[0] = (h) => {
        const x = f(h.clientX);
        a("slideStart", x);
      }),
      onSlideMove: v[1] || (v[1] = (h) => {
        const x = f(h.clientX);
        a("slideMove", x);
      }),
      onSlideEnd: v[2] || (v[2] = () => {
        p.value = void 0, a("slideEnd");
      }),
      onStepKeyDown: v[3] || (v[3] = (h) => {
        const x = c.value ? "from-left" : "from-right", C = r(bu)[x].includes(h.key);
        a("stepKeyDown", h, C ? -1 : 1);
      }),
      onEndKeyDown: v[4] || (v[4] = (h) => a("endKeyDown", h)),
      onHomeKeyDown: v[5] || (v[5] = (h) => a("homeKeyDown", h))
    }, {
      default: y(() => [
        _(m.$slots, "default")
      ]),
      _: 3
    }, 8, ["dir"]));
  }
}), xg = /* @__PURE__ */ b({
  __name: "SliderVertical",
  props: {
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const n = e, a = t, { max: o, min: s, inverted: l } = pe(n), { forwardRef: i, currentElement: u } = j(), d = $(), p = E(() => !l.value);
    function c(f) {
      const m = d.value || u.value.getBoundingClientRect(), v = [0, m.height], h = p.value ? [o.value, s.value] : [s.value, o.value], x = bs(v, h);
      return d.value = m, x(f - m.top);
    }
    return wu({
      startEdge: p.value ? "bottom" : "top",
      endEdge: p.value ? "top" : "bottom",
      size: "height",
      direction: p.value ? 1 : -1
    }), (f, m) => (g(), w(xu, {
      ref: r(i),
      "data-orientation": "vertical",
      style: {
        "--radix-slider-thumb-transform": "translateY(50%)"
      },
      onSlideStart: m[0] || (m[0] = (v) => {
        const h = c(v.clientY);
        a("slideStart", h);
      }),
      onSlideMove: m[1] || (m[1] = (v) => {
        const h = c(v.clientY);
        a("slideMove", h);
      }),
      onSlideEnd: m[2] || (m[2] = () => {
        d.value = void 0, a("slideEnd");
      }),
      onStepKeyDown: m[3] || (m[3] = (v) => {
        const h = p.value ? "from-bottom" : "from-top", x = r(bu)[h].includes(v.key);
        a("stepKeyDown", v, x ? -1 : 1);
      }),
      onEndKeyDown: m[4] || (m[4] = (v) => a("endKeyDown", v)),
      onHomeKeyDown: m[5] || (m[5] = (v) => a("homeKeyDown", v))
    }, {
      default: y(() => [
        _(f.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
}), Cg = ["value", "name", "disabled", "step"], [ko, Bg] = we("SliderRoot"), Sg = /* @__PURE__ */ b({
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
    const n = e, a = t, { min: o, max: s, step: l, minStepsBetweenThumbs: i, orientation: u, disabled: d, dir: p } = pe(n), c = sn(p), { forwardRef: f, currentElement: m } = j(), v = Bo(m);
    cs();
    const h = qe(n, "modelValue", a, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), x = $(0), C = $(h.value);
    function S(k) {
      const F = mg(h.value, k);
      O(k, F);
    }
    function B(k) {
      O(k, x.value);
    }
    function P() {
      const k = C.value[x.value];
      h.value[x.value] !== k && a("valueCommit", tc(h.value));
    }
    function O(k, F, { commit: D } = { commit: !1 }) {
      var A;
      const q = bg(l.value), L = _g(Math.round((k - o.value) / l.value) * l.value + o.value, q), ee = lo(L, o.value, s.value), G = fg(h.value, ee, F);
      if (yg(G, i.value * l.value)) {
        x.value = G.indexOf(ee);
        const z = String(G) !== String(h.value);
        z && D && a("valueCommit", G), z && ((A = I.value[x.value]) == null || A.focus(), h.value = G);
      }
    }
    const I = $([]);
    return Bg({
      modelValue: h,
      valueIndexToChangeRef: x,
      thumbElements: I,
      orientation: u,
      min: o,
      max: s,
      disabled: d
    }), (k, F) => (g(), V(Pe, null, [
      R(r(ps), null, {
        default: y(() => [
          (g(), w(dt(r(u) === "horizontal" ? wg : xg), T(k.$attrs, {
            ref: r(f),
            "as-child": k.asChild,
            as: k.as,
            min: r(o),
            max: r(s),
            dir: r(c),
            inverted: k.inverted,
            "aria-disabled": r(d),
            "data-disabled": r(d) ? "" : void 0,
            onPointerdown: F[0] || (F[0] = () => {
              r(d) || (C.value = r(h));
            }),
            onSlideStart: F[1] || (F[1] = (D) => !r(d) && S(D)),
            onSlideMove: F[2] || (F[2] = (D) => !r(d) && B(D)),
            onSlideEnd: F[3] || (F[3] = (D) => !r(d) && P()),
            onHomeKeyDown: F[4] || (F[4] = (D) => !r(d) && O(r(o), 0, { commit: !0 })),
            onEndKeyDown: F[5] || (F[5] = (D) => !r(d) && O(r(s), r(h).length - 1, { commit: !0 })),
            onStepKeyDown: F[6] || (F[6] = (D, A) => {
              if (!r(d)) {
                const q = r(hu).includes(D.key) || D.shiftKey && r(yu).includes(D.key) ? 10 : 1, L = x.value, ee = r(h)[L], G = r(l) * q * A;
                O(ee + G, L, { commit: !0 });
              }
            })
          }), {
            default: y(() => [
              _(k.$slots, "default", { modelValue: r(h) })
            ]),
            _: 3
          }, 16, ["as-child", "as", "min", "max", "dir", "inverted", "aria-disabled", "data-disabled"]))
        ]),
        _: 3
      }),
      r(v) ? (g(!0), V(Pe, { key: 0 }, nn(r(h), (D, A) => (g(), V("input", {
        key: A,
        value: D,
        type: "number",
        style: { display: "none" },
        name: k.name ? k.name + (r(h).length > 1 ? "[]" : "") : void 0,
        disabled: r(d),
        step: r(l)
      }, null, 8, Cg))), 128)) : fe("", !0)
    ], 64));
  }
}), $g = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "SliderThumbImpl",
  props: {
    index: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = ko(), a = _u(), { forwardRef: o, currentElement: s } = j(), l = E(() => {
      var m, v;
      return (v = (m = n.modelValue) == null ? void 0 : m.value) == null ? void 0 : v[t.index];
    }), i = E(() => l.value === void 0 ? 0 : gu(l.value, n.min.value ?? 0, n.max.value ?? 100)), u = E(() => {
      var m, v;
      return vg(t.index, ((v = (m = n.modelValue) == null ? void 0 : m.value) == null ? void 0 : v.length) ?? 0);
    }), d = Ki(s), p = E(() => d[a.size].value), c = E(() => p.value ? gg(p.value, i.value, a.direction) : 0), f = Zr();
    return de(() => {
      n.thumbElements.value.push(s.value);
    }), Ke(() => {
      const m = n.thumbElements.value.findIndex((v) => v === s.value) ?? -1;
      n.thumbElements.value.splice(m, 1);
    }), (m, v) => (g(), w(r(Po), null, {
      default: y(() => [
        R(r(J), T(m.$attrs, {
          ref: r(o),
          role: "slider",
          "data-radix-vue-collection-item": "",
          tabindex: r(n).disabled.value ? void 0 : 0,
          "aria-label": m.$attrs["aria-label"] || u.value,
          "data-disabled": r(n).disabled.value ? "" : void 0,
          "data-orientation": r(n).orientation.value,
          "aria-valuenow": l.value,
          "aria-valuemin": r(n).min.value,
          "aria-valuemax": r(n).max.value,
          "aria-orientation": r(n).orientation.value,
          "as-child": m.asChild,
          as: m.as,
          style: {
            transform: "var(--radix-slider-thumb-transform)",
            position: "absolute",
            [r(a).startEdge]: `calc(${i.value}% + ${c.value}px)`,
            /**
             * There will be no value on initial render while we work out the index so we hide thumbs
             * without a value, otherwise SSR will render them in the wrong position before they
             * snap into the correct position during hydration which would be visually jarring for
             * slower connections.
             */
            display: !r(f) && l.value === void 0 ? "none" : void 0
          },
          onFocus: v[0] || (v[0] = () => {
            r(n).valueIndexToChangeRef.value = m.index;
          })
        }), {
          default: y(() => [
            _(m.$slots, "default")
          ]),
          _: 3
        }, 16, ["tabindex", "aria-label", "data-disabled", "data-orientation", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-orientation", "as-child", "as", "style"])
      ]),
      _: 3
    }));
  }
}), Og = /* @__PURE__ */ b({
  __name: "SliderThumb",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { getItems: n } = fs(), { forwardRef: a, currentElement: o } = j(), s = E(() => o.value ? n().findIndex((l) => l.ref === o.value) : -1);
    return (l, i) => (g(), w($g, T({ ref: r(a) }, t, { index: s.value }), {
      default: y(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["index"]));
  }
}), Eg = /* @__PURE__ */ b({
  __name: "SliderTrack",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = ko();
    return j(), (n, a) => (g(), w(r(J), {
      "as-child": n.asChild,
      as: n.as,
      "data-disabled": r(t).disabled.value ? "" : void 0,
      "data-orientation": r(t).orientation.value
    }, {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "data-disabled", "data-orientation"]));
  }
}), Pg = /* @__PURE__ */ b({
  __name: "SliderRange",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = ko(), n = _u();
    j();
    const a = E(() => {
      var l, i;
      return (i = (l = t.modelValue) == null ? void 0 : l.value) == null ? void 0 : i.map(
        (u) => gu(u, t.min.value, t.max.value)
      );
    }), o = E(() => t.modelValue.value.length > 1 ? Math.min(...a.value) : 0), s = E(() => 100 - Math.max(...a.value));
    return (l, i) => (g(), w(r(J), {
      "data-disabled": r(t).disabled.value ? "" : void 0,
      "data-orientation": r(t).orientation.value,
      "as-child": l.asChild,
      as: l.as,
      style: at({
        [r(n).startEdge]: `${o.value}%`,
        [r(n).endEdge]: `${s.value}%`
      })
    }, {
      default: y(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-disabled", "data-orientation", "as-child", "as", "style"]));
  }
});
function kg() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
kg();
const Tg = ["name", "disabled", "required", "value", "checked", "data-state", "data-disabled"], [Dg, Ag] = we("SwitchRoot"), Ig = /* @__PURE__ */ b({
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
    const n = e, a = t, { disabled: o } = pe(n), s = qe(n, "checked", a, {
      defaultValue: n.defaultChecked,
      passive: n.checked === void 0
    });
    function l() {
      o.value || (s.value = !s.value);
    }
    const { forwardRef: i, currentElement: u } = j(), d = Bo(u), p = E(() => {
      var c;
      return n.id && u.value ? (c = document.querySelector(`[for="${n.id}"]`)) == null ? void 0 : c.innerText : void 0;
    });
    return Ag({
      checked: s,
      toggleCheck: l,
      disabled: o
    }), (c, f) => (g(), V(Pe, null, [
      R(r(J), T(c.$attrs, {
        id: c.id,
        ref: r(i),
        role: "switch",
        type: c.as === "button" ? "button" : void 0,
        value: c.value,
        "aria-label": c.$attrs["aria-label"] || p.value,
        "aria-checked": r(s),
        "aria-required": c.required,
        "data-state": r(s) ? "checked" : "unchecked",
        "data-disabled": r(o) ? "" : void 0,
        "as-child": c.asChild,
        as: c.as,
        disabled: r(o),
        onClick: l,
        onKeydown: lt(Ae(l, ["prevent"]), ["enter"])
      }), {
        default: y(() => [
          _(c.$slots, "default", { checked: r(s) })
        ]),
        _: 3
      }, 16, ["id", "type", "value", "aria-label", "aria-checked", "aria-required", "data-state", "data-disabled", "as-child", "as", "disabled", "onKeydown"]),
      r(d) ? (g(), V("input", {
        key: 0,
        type: "checkbox",
        name: c.name,
        tabindex: "-1",
        "aria-hidden": "true",
        disabled: r(o),
        required: c.required,
        value: c.value,
        checked: !!r(s),
        "data-state": r(s) ? "checked" : "unchecked",
        "data-disabled": r(o) ? "" : void 0,
        style: {
          transform: "translateX(-100%)",
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }, null, 8, Tg)) : fe("", !0)
    ], 64));
  }
}), Mg = /* @__PURE__ */ b({
  __name: "SwitchThumb",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = Dg();
    return j(), (n, a) => {
      var o;
      return g(), w(r(J), {
        "data-state": (o = r(t).checked) != null && o.value ? "checked" : "unchecked",
        "data-disabled": r(t).disabled.value ? "" : void 0,
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
}), [_s, Rg] = we("TabsRoot"), Fg = /* @__PURE__ */ b({
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
    const n = e, a = t, { orientation: o, dir: s } = pe(n), l = sn(s);
    j();
    const i = qe(n, "modelValue", a, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), u = $();
    return Rg({
      modelValue: i,
      changeModelValue: (d) => {
        i.value = d;
      },
      orientation: o,
      dir: l,
      activationMode: n.activationMode,
      baseId: Ge(void 0, "radix-vue-tabs"),
      tabsList: u
    }), (d, p) => (g(), w(r(J), {
      dir: r(l),
      "data-orientation": r(o),
      "as-child": d.asChild,
      as: d.as
    }, {
      default: y(() => [
        _(d.$slots, "default", { modelValue: r(i) })
      ]),
      _: 3
    }, 8, ["dir", "data-orientation", "as-child", "as"]));
  }
}), qg = /* @__PURE__ */ b({
  __name: "TabsList",
  props: {
    loop: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { loop: n } = pe(t), { forwardRef: a, currentElement: o } = j(), s = _s();
    return s.tabsList = o, (l, i) => (g(), w(r(au), {
      "as-child": "",
      orientation: r(s).orientation.value,
      dir: r(s).dir.value,
      loop: r(n)
    }, {
      default: y(() => [
        R(r(J), {
          ref: r(a),
          role: "tablist",
          "as-child": l.asChild,
          as: l.as,
          "aria-orientation": r(s).orientation.value
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
function Cu(e, t) {
  return `${e}-trigger-${t}`;
}
function Bu(e, t) {
  return `${e}-content-${t}`;
}
const Lg = /* @__PURE__ */ b({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n } = j(), a = _s(), o = E(() => Cu(a.baseId, t.value)), s = E(() => Bu(a.baseId, t.value)), l = E(() => t.value === a.modelValue.value), i = $(l.value);
    return de(() => {
      requestAnimationFrame(() => {
        i.value = !1;
      });
    }), (u, d) => (g(), w(r(yt), {
      present: l.value,
      "force-mount": ""
    }, {
      default: y(({ present: p }) => [
        R(r(J), {
          id: s.value,
          ref: r(n),
          "as-child": u.asChild,
          as: u.as,
          role: "tabpanel",
          "data-state": l.value ? "active" : "inactive",
          "data-orientation": r(a).orientation.value,
          "aria-labelledby": o.value,
          hidden: !p.value,
          tabindex: "0",
          style: at({
            animationDuration: i.value ? "0s" : void 0
          })
        }, {
          default: y(() => [
            u.forceMount || l.value ? _(u.$slots, "default", { key: 0 }) : fe("", !0)
          ]),
          _: 2
        }, 1032, ["id", "as-child", "as", "data-state", "data-orientation", "aria-labelledby", "hidden", "style"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Vg = /* @__PURE__ */ b({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, { forwardRef: n } = j(), a = _s(), o = E(() => Cu(a.baseId, t.value)), s = E(() => Bu(a.baseId, t.value)), l = E(() => t.value === a.modelValue.value);
    return (i, u) => (g(), w(r(zv), {
      "as-child": "",
      focusable: !i.disabled,
      active: l.value
    }, {
      default: y(() => [
        R(r(J), {
          id: o.value,
          ref: r(n),
          role: "tab",
          type: i.as === "button" ? "button" : void 0,
          as: i.as,
          "as-child": i.asChild,
          "aria-selected": l.value ? "true" : "false",
          "aria-controls": s.value,
          "data-state": l.value ? "active" : "inactive",
          disabled: i.disabled,
          "data-disabled": i.disabled ? "" : void 0,
          "data-orientation": r(a).orientation.value,
          onMousedown: u[0] || (u[0] = Ae((d) => {
            !i.disabled && d.ctrlKey === !1 ? r(a).changeModelValue(i.value) : d.preventDefault();
          }, ["left"])),
          onKeydown: u[1] || (u[1] = lt((d) => r(a).changeModelValue(i.value), ["enter", "space"])),
          onFocus: u[2] || (u[2] = () => {
            const d = r(a).activationMode !== "manual";
            !l.value && !i.disabled && d && r(a).changeModelValue(i.value);
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
}), [To, Ng] = we("ToastProvider"), zg = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "ToastProvider",
  props: {
    label: { default: "Notification" },
    duration: { default: 5e3 },
    swipeDirection: { default: "right" },
    swipeThreshold: { default: 50 }
  },
  setup(e) {
    const t = e, { label: n, duration: a, swipeDirection: o, swipeThreshold: s } = pe(t), l = $(), i = $(0), u = $(!1), d = $(!1);
    if (t.label && typeof t.label == "string" && !t.label.trim()) {
      const p = "Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`.";
      throw new Error(p);
    }
    return Ng({
      label: n,
      duration: a,
      swipeDirection: o,
      swipeThreshold: s,
      toastCount: i,
      viewport: l,
      onViewportChange(p) {
        l.value = p;
      },
      onToastAdd() {
        i.value++;
      },
      onToastRemove() {
        i.value--;
      },
      isFocusedToastEscapeKeyDownRef: u,
      isClosePausedRef: d
    }), (p, c) => _(p.$slots, "default");
  }
}), Kg = "toast.swipeStart", jg = "toast.swipeMove", Hg = "toast.swipeCancel", Wg = "toast.swipeEnd", wr = "toast.viewportPause", xr = "toast.viewportResume";
function Ka(e, t, n) {
  const a = n.originalEvent.currentTarget, o = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && a.addEventListener(e, t, { once: !0 }), a.dispatchEvent(o);
}
function _l(e, t, n = 0) {
  const a = Math.abs(e.x), o = Math.abs(e.y), s = a > o;
  return t === "left" || t === "right" ? s && a > n : !s && o > n;
}
function Ug(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function Su(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((n) => {
    if (n.nodeType === n.TEXT_NODE && n.textContent && t.push(n.textContent), Ug(n)) {
      const a = n.ariaHidden || n.hidden || n.style.display === "none", o = n.dataset.radixToastAnnounceExclude === "";
      if (!a)
        if (o) {
          const s = n.dataset.radixToastAnnounceAlt;
          s && t.push(s);
        } else
          t.push(...Su(n));
    }
  }), t;
}
const Gg = /* @__PURE__ */ b({
  __name: "ToastAnnounce",
  setup(e) {
    const t = To(), n = kp(1e3), a = $(!1);
    return qi(() => {
      a.value = !0;
    }), (o, s) => r(n) || a.value ? (g(), w(r(ka), { key: 0 }, {
      default: y(() => [
        Be(Me(r(t).label.value) + " ", 1),
        _(o.$slots, "default")
      ]),
      _: 3
    })) : fe("", !0);
  }
}), [Yg, Xg] = we("ToastRoot"), Zg = /* @__PURE__ */ b({
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
    const n = e, a = t, { forwardRef: o, currentElement: s } = j(), l = To(), i = $(null), u = $(null), d = E(
      () => typeof n.duration == "number" ? n.duration : l.duration.value
    ), p = $(0), c = $(d.value), f = $(0), m = $(d.value), v = qi(() => {
      const S = (/* @__PURE__ */ new Date()).getTime() - p.value;
      m.value = Math.max(c.value - S, 0);
    }, { fpsLimit: 60 });
    function h(S) {
      S <= 0 || S === Number.POSITIVE_INFINITY || It && (window.clearTimeout(f.value), p.value = (/* @__PURE__ */ new Date()).getTime(), f.value = window.setTimeout(x, S));
    }
    function x() {
      var S, B;
      (S = s.value) != null && S.contains(Je()) && ((B = l.viewport.value) == null || B.focus()), l.isClosePausedRef.value = !1, a("close");
    }
    const C = E(() => s.value ? Su(s.value) : null);
    if (n.type && !["foreground", "background"].includes(n.type)) {
      const S = "Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.";
      throw new Error(S);
    }
    return _e((S) => {
      const B = l.viewport.value;
      if (B) {
        const P = () => {
          h(c.value), v.resume(), a("resume");
        }, O = () => {
          const I = (/* @__PURE__ */ new Date()).getTime() - p.value;
          c.value = c.value - I, window.clearTimeout(f.value), v.pause(), a("pause");
        };
        return B.addEventListener(wr, O), B.addEventListener(xr, P), () => {
          B.removeEventListener(wr, O), B.removeEventListener(xr, P);
        };
      }
    }), ae(() => [n.open, d.value], () => {
      c.value = d.value, n.open && !l.isClosePausedRef.value && h(d.value);
    }, { immediate: !0 }), Xr("Escape", (S) => {
      a("escapeKeyDown", S), S.defaultPrevented || (l.isFocusedToastEscapeKeyDownRef.value = !0, x());
    }), de(() => {
      l.onToastAdd();
    }), Ke(() => {
      l.onToastRemove();
    }), Xg({ onClose: x }), (S, B) => (g(), V(Pe, null, [
      C.value ? (g(), w(Gg, {
        key: 0,
        role: "alert",
        "aria-live": S.type === "foreground" ? "assertive" : "polite",
        "aria-atomic": "true"
      }, {
        default: y(() => [
          Be(Me(C.value), 1)
        ]),
        _: 1
      }, 8, ["aria-live"])) : fe("", !0),
      r(l).viewport.value ? (g(), w(hn, {
        key: 1,
        to: r(l).viewport.value
      }, [
        R(r(J), T({
          ref: r(o),
          role: "alert",
          "aria-live": "off",
          "aria-atomic": "true",
          tabindex: "0",
          "data-radix-vue-collection-item": ""
        }, S.$attrs, {
          as: S.as,
          "as-child": S.asChild,
          "data-state": S.open ? "open" : "closed",
          "data-swipe-direction": r(l).swipeDirection.value,
          style: { userSelect: "none", touchAction: "none" },
          onPointerdown: B[0] || (B[0] = Ae((P) => {
            i.value = { x: P.clientX, y: P.clientY };
          }, ["left"])),
          onPointermove: B[1] || (B[1] = (P) => {
            if (!i.value) return;
            const O = P.clientX - i.value.x, I = P.clientY - i.value.y, k = !!u.value, F = ["left", "right"].includes(r(l).swipeDirection.value), D = ["left", "up"].includes(r(l).swipeDirection.value) ? Math.min : Math.max, A = F ? D(0, O) : 0, q = F ? 0 : D(0, I), L = P.pointerType === "touch" ? 10 : 2, ee = { x: A, y: q }, G = { originalEvent: P, delta: ee };
            k ? (u.value = ee, r(Ka)(r(jg), (z) => a("swipeMove", z), G)) : r(_l)(ee, r(l).swipeDirection.value, L) ? (u.value = ee, r(Ka)(r(Kg), (z) => a("swipeStart", z), G), P.target.setPointerCapture(P.pointerId)) : (Math.abs(O) > L || Math.abs(I) > L) && (i.value = null);
          }),
          onPointerup: B[2] || (B[2] = (P) => {
            const O = u.value, I = P.target;
            if (I.hasPointerCapture(P.pointerId) && I.releasePointerCapture(P.pointerId), u.value = null, i.value = null, O) {
              const k = P.currentTarget, F = { originalEvent: P, delta: O };
              r(_l)(O, r(l).swipeDirection.value, r(l).swipeThreshold.value) ? r(Ka)(r(Wg), (D) => a("swipeEnd", D), F) : r(Ka)(r(Hg), (D) => a("swipeCancel", D), F), k == null || k.addEventListener("click", (D) => D.preventDefault(), {
                once: !0
              });
            }
          })
        }), {
          default: y(() => [
            _(S.$slots, "default", {
              remaining: m.value,
              duration: d.value
            })
          ]),
          _: 3
        }, 16, ["as", "as-child", "data-state", "data-swipe-direction"])
      ], 8, ["to"])) : fe("", !0)
    ], 64));
  }
}), Qg = /* @__PURE__ */ b({
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
    const n = e, a = t, { forwardRef: o } = j(), s = qe(n, "open", a, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    });
    return (l, i) => (g(), w(r(yt), {
      present: l.forceMount || r(s)
    }, {
      default: y(() => [
        R(Zg, T({
          ref: r(o),
          open: r(s),
          type: l.type,
          as: l.as,
          "as-child": l.asChild,
          duration: l.duration
        }, l.$attrs, {
          onClose: i[0] || (i[0] = (u) => s.value = !1),
          onPause: i[1] || (i[1] = (u) => a("pause")),
          onResume: i[2] || (i[2] = (u) => a("resume")),
          onEscapeKeyDown: i[3] || (i[3] = (u) => a("escapeKeyDown", u)),
          onSwipeStart: i[4] || (i[4] = (u) => {
            a("swipeStart", u), u.currentTarget.setAttribute("data-swipe", "start");
          }),
          onSwipeMove: i[5] || (i[5] = (u) => {
            const { x: d, y: p } = u.detail.delta, c = u.currentTarget;
            c.setAttribute("data-swipe", "move"), c.style.setProperty("--radix-toast-swipe-move-x", `${d}px`), c.style.setProperty("--radix-toast-swipe-move-y", `${p}px`);
          }),
          onSwipeCancel: i[6] || (i[6] = (u) => {
            const d = u.currentTarget;
            d.setAttribute("data-swipe", "cancel"), d.style.removeProperty("--radix-toast-swipe-move-x"), d.style.removeProperty("--radix-toast-swipe-move-y"), d.style.removeProperty("--radix-toast-swipe-end-x"), d.style.removeProperty("--radix-toast-swipe-end-y");
          }),
          onSwipeEnd: i[7] || (i[7] = (u) => {
            const { x: d, y: p } = u.detail.delta, c = u.currentTarget;
            c.setAttribute("data-swipe", "end"), c.style.removeProperty("--radix-toast-swipe-move-x"), c.style.removeProperty("--radix-toast-swipe-move-y"), c.style.setProperty("--radix-toast-swipe-end-x", `${d}px`), c.style.setProperty("--radix-toast-swipe-end-y", `${p}px`), s.value = !1;
          })
        }), {
          default: y(({ remaining: u, duration: d }) => [
            _(l.$slots, "default", {
              remaining: u,
              duration: d,
              open: r(s)
            })
          ]),
          _: 3
        }, 16, ["open", "type", "as", "as-child", "duration"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), $u = /* @__PURE__ */ b({
  __name: "ToastAnnounceExclude",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    return (t, n) => (g(), w(r(J), {
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
}), Ou = /* @__PURE__ */ b({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Yg(), { forwardRef: a } = j();
    return (o, s) => (g(), w($u, { "as-child": "" }, {
      default: y(() => [
        R(r(J), T(t, {
          ref: r(a),
          type: o.as === "button" ? "button" : void 0,
          onClick: s[0] || (s[0] = (l) => r(n).onClose())
        }), {
          default: y(() => [
            _(o.$slots, "default")
          ]),
          _: 3
        }, 16, ["type"])
      ]),
      _: 3
    }));
  }
}), Jg = /* @__PURE__ */ b({
  __name: "ToastAction",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    if (!e.altText)
      throw new Error("Missing prop `altText` expected on `ToastAction`");
    const { forwardRef: t } = j();
    return (n, a) => n.altText ? (g(), w($u, {
      key: 0,
      "alt-text": n.altText,
      "as-child": ""
    }, {
      default: y(() => [
        R(Ou, {
          ref: r(t),
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
    }, 8, ["alt-text"])) : fe("", !0);
  }
}), wl = /* @__PURE__ */ b({
  __name: "FocusProxy",
  emits: ["focusFromOutsideViewport"],
  setup(e, { emit: t }) {
    const n = t, a = To();
    return (o, s) => (g(), w(r(ka), {
      "aria-hidden": "true",
      tabindex: "0",
      style: { position: "fixed" },
      onFocus: s[0] || (s[0] = (l) => {
        var i;
        const u = l.relatedTarget;
        !((i = r(a).viewport.value) != null && i.contains(u)) && n("focusFromOutsideViewport");
      })
    }, {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }));
  }
}), eh = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "ToastViewport",
  props: {
    hotkey: { default: () => ["F8"] },
    label: { type: [String, Function], default: "Notifications ({hotkey})" },
    asChild: { type: Boolean },
    as: { default: "ol" }
  },
  setup(e) {
    const t = e, { hotkey: n, label: a } = pe(t), { forwardRef: o, currentElement: s } = j(), { createCollection: l } = Yn(), i = l(s), u = To(), d = E(() => u.toastCount.value > 0), p = $(), c = $(), f = E(() => n.value.join("+").replace(/Key/g, "").replace(/Digit/g, ""));
    Xr(n.value, () => {
      s.value.focus();
    }), de(() => {
      u.onViewportChange(s.value);
    }), _e((v) => {
      const h = s.value;
      if (d.value && h) {
        const x = () => {
          if (!u.isClosePausedRef.value) {
            const O = new CustomEvent(wr);
            h.dispatchEvent(O), u.isClosePausedRef.value = !0;
          }
        }, C = () => {
          if (u.isClosePausedRef.value) {
            const O = new CustomEvent(xr);
            h.dispatchEvent(O), u.isClosePausedRef.value = !1;
          }
        }, S = (O) => {
          !h.contains(O.relatedTarget) && C();
        }, B = () => {
          h.contains(Je()) || C();
        }, P = (O) => {
          var I, k, F;
          const D = O.altKey || O.ctrlKey || O.metaKey;
          if (O.key === "Tab" && !D) {
            const A = Je(), q = O.shiftKey;
            if (O.target === h && q) {
              (I = p.value) == null || I.focus();
              return;
            }
            const L = m({ tabbingDirection: q ? "backwards" : "forwards" }), ee = L.findIndex((G) => G === A);
            Qa(L.slice(ee + 1)) ? O.preventDefault() : q ? (k = p.value) == null || k.focus() : (F = c.value) == null || F.focus();
          }
        };
        h.addEventListener("focusin", x), h.addEventListener("focusout", S), h.addEventListener("pointermove", x), h.addEventListener("pointerleave", B), h.addEventListener("keydown", P), window.addEventListener("blur", x), window.addEventListener("focus", C), v(() => {
          h.removeEventListener("focusin", x), h.removeEventListener("focusout", S), h.removeEventListener("pointermove", x), h.removeEventListener("pointerleave", B), h.removeEventListener("keydown", P), window.removeEventListener("blur", x), window.removeEventListener("focus", C);
        });
      }
    });
    function m({ tabbingDirection: v }) {
      const h = i.value.map((x) => {
        const C = [x, ...rs(x)];
        return v === "forwards" ? C : C.reverse();
      });
      return (v === "forwards" ? h.reverse() : h).flat();
    }
    return (v, h) => (g(), w(r($f), {
      role: "region",
      "aria-label": typeof r(a) == "string" ? r(a).replace("{hotkey}", f.value) : r(a)(f.value),
      tabindex: "-1",
      style: at({
        // incase list has size when empty (e.g. padding), we remove pointer events so
        // it doesn't prevent interactions with page elements that it overlays
        pointerEvents: d.value ? void 0 : "none"
      })
    }, {
      default: y(() => [
        d.value ? (g(), w(wl, {
          key: 0,
          ref: (x) => {
            p.value = r(ht)(x);
          },
          onFocusFromOutsideViewport: h[0] || (h[0] = () => {
            const x = m({
              tabbingDirection: "forwards"
            });
            r(Qa)(x);
          })
        }, null, 512)) : fe("", !0),
        R(r(J), T({
          ref: r(o),
          tabindex: "-1",
          as: v.as,
          "as-child": v.asChild
        }, v.$attrs), {
          default: y(() => [
            _(v.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child"]),
        d.value ? (g(), w(wl, {
          key: 1,
          ref: (x) => {
            c.value = r(ht)(x);
          },
          onFocusFromOutsideViewport: h[1] || (h[1] = () => {
            const x = m({
              tabbingDirection: "backwards"
            });
            r(Qa)(x);
          })
        }, null, 512)) : fe("", !0)
      ]),
      _: 3
    }, 8, ["aria-label", "style"]));
  }
}), th = /* @__PURE__ */ b({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return j(), (n, a) => (g(), w(r(J), H(U(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), nh = /* @__PURE__ */ b({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return j(), (n, a) => (g(), w(r(J), H(U(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Eu = "tooltip.open", [ws, ah] = we("TooltipProvider"), Pu = /* @__PURE__ */ b({
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
    const t = e, { delayDuration: n, skipDelayDuration: a, disableHoverableContent: o, disableClosingTrigger: s, ignoreNonKeyboardFocus: l, disabled: i } = pe(t);
    j();
    const u = $(!0), d = $(!1), { start: p, stop: c } = Yr(() => {
      u.value = !0;
    }, a, { immediate: !1 });
    return ah({
      isOpenDelayed: u,
      delayDuration: n,
      onOpen() {
        c(), u.value = !1;
      },
      onClose() {
        p();
      },
      isPointerInTransitRef: d,
      disableHoverableContent: o,
      disableClosingTrigger: s,
      disabled: i,
      ignoreNonKeyboardFocus: l
    }), (f, m) => _(f.$slots, "default");
  }
}), [Do, oh] = we("TooltipRoot"), rh = /* @__PURE__ */ b({
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
    j();
    const o = ws(), s = E(() => n.disableHoverableContent ?? o.disableHoverableContent.value), l = E(() => n.disableClosingTrigger ?? o.disableClosingTrigger.value), i = E(() => n.disabled ?? o.disabled.value), u = E(() => n.delayDuration ?? o.delayDuration.value), d = E(() => n.ignoreNonKeyboardFocus ?? o.ignoreNonKeyboardFocus.value), p = qe(n, "open", a, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    });
    ae(p, (B) => {
      o.onClose && (B ? (o.onOpen(), document.dispatchEvent(new CustomEvent(Eu))) : o.onClose());
    });
    const c = $(!1), f = $(), m = E(() => p.value ? c.value ? "delayed-open" : "instant-open" : "closed"), { start: v, stop: h } = Yr(() => {
      c.value = !0, p.value = !0;
    }, u, { immediate: !1 });
    function x() {
      h(), c.value = !1, p.value = !0;
    }
    function C() {
      h(), p.value = !1;
    }
    function S() {
      v();
    }
    return oh({
      contentId: "",
      open: p,
      stateAttribute: m,
      trigger: f,
      onTriggerChange(B) {
        f.value = B;
      },
      onTriggerEnter() {
        o.isOpenDelayed.value ? S() : x();
      },
      onTriggerLeave() {
        s.value ? C() : h();
      },
      onOpen: x,
      onClose: C,
      disableHoverableContent: s,
      disableClosingTrigger: l,
      disabled: i,
      ignoreNonKeyboardFocus: d
    }), (B, P) => (g(), w(r(Qn), null, {
      default: y(() => [
        _(B.$slots, "default", { open: r(p) })
      ]),
      _: 3
    }));
  }
}), sh = /* @__PURE__ */ b({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Do(), a = ws();
    n.contentId || (n.contentId = Ge(void 0, "radix-vue-tooltip-content"));
    const { forwardRef: o, currentElement: s } = j(), l = $(!1), i = $(!1), u = E(() => n.disabled.value ? {} : {
      click: h,
      focus: m,
      pointermove: c,
      pointerleave: f,
      pointerdown: p,
      blur: v
    });
    de(() => {
      n.onTriggerChange(s.value);
    });
    function d() {
      setTimeout(() => {
        l.value = !1;
      }, 1);
    }
    function p() {
      l.value = !0, document.addEventListener("pointerup", d, { once: !0 });
    }
    function c(x) {
      x.pointerType !== "touch" && !i.value && !a.isPointerInTransitRef.value && (n.onTriggerEnter(), i.value = !0);
    }
    function f() {
      n.onTriggerLeave(), i.value = !1;
    }
    function m(x) {
      var C, S;
      l.value || n.ignoreNonKeyboardFocus.value && !((S = (C = x.target).matches) != null && S.call(C, ":focus-visible")) || n.onOpen();
    }
    function v() {
      n.onClose();
    }
    function h() {
      n.disableClosingTrigger.value || n.onClose();
    }
    return (x, C) => (g(), w(r(Pa), { "as-child": "" }, {
      default: y(() => [
        R(r(J), T({
          ref: r(o),
          "aria-describedby": r(n).open.value ? r(n).contentId : void 0,
          "data-state": r(n).stateAttribute.value,
          as: x.as,
          "as-child": t.asChild,
          "data-grace-area-trigger": ""
        }, Zd(u.value)), {
          default: y(() => [
            _(x.$slots, "default")
          ]),
          _: 3
        }, 16, ["aria-describedby", "data-state", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), ku = /* @__PURE__ */ b({
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
    const n = e, a = t, o = Do(), { forwardRef: s } = j(), l = Mr(), i = E(() => {
      var p;
      return (p = l.default) == null ? void 0 : p.call(l);
    }), u = E(() => {
      var p;
      if (n.ariaLabel)
        return n.ariaLabel;
      let c = "";
      function f(m) {
        typeof m.children == "string" && m.type !== Rr ? c += m.children : Array.isArray(m.children) && m.children.forEach((v) => f(v));
      }
      return (p = i.value) == null || p.forEach((m) => f(m)), c;
    }), d = E(() => {
      const { ariaLabel: p, ...c } = n;
      return c;
    });
    return de(() => {
      zn(window, "scroll", (p) => {
        const c = p.target;
        c != null && c.contains(o.trigger.value) && o.onClose();
      }), zn(window, Eu, o.onClose);
    }), (p, c) => (g(), w(r(Zn), {
      "as-child": "",
      "disable-outside-pointer-events": !1,
      onEscapeKeyDown: c[0] || (c[0] = (f) => a("escapeKeyDown", f)),
      onPointerDownOutside: c[1] || (c[1] = (f) => {
        var m;
        r(o).disableClosingTrigger.value && (m = r(o).trigger.value) != null && m.contains(f.target) && f.preventDefault(), a("pointerDownOutside", f);
      }),
      onFocusOutside: c[2] || (c[2] = Ae(() => {
      }, ["prevent"])),
      onDismiss: c[3] || (c[3] = (f) => r(o).onClose())
    }, {
      default: y(() => [
        R(r(Kn), T({
          ref: r(s),
          "data-state": r(o).stateAttribute.value
        }, { ...p.$attrs, ...d.value }, { style: {
          "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
          "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
          "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
        } }), {
          default: y(() => [
            _(p.$slots, "default"),
            R(r(ka), {
              id: r(o).contentId,
              role: "tooltip"
            }, {
              default: y(() => [
                Be(Me(u.value), 1)
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
}), lh = /* @__PURE__ */ b({
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
    const t = et(e), { forwardRef: n, currentElement: a } = j(), { trigger: o, onClose: s } = Do(), l = ws(), { isPointerInTransit: i, onPointerExit: u } = Kp(o, a);
    return l.isPointerInTransitRef = i, u(() => {
      s();
    }), (d, p) => (g(), w(ku, T({ ref: r(n) }, r(t)), {
      default: y(() => [
        _(d.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ih = /* @__PURE__ */ b({
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
    const n = e, a = t, o = Do(), s = me(n, a), { forwardRef: l } = j();
    return (i, u) => (g(), w(r(yt), {
      present: i.forceMount || r(o).open.value
    }, {
      default: y(() => [
        (g(), w(dt(r(o).disableHoverableContent.value ? ku : lh), T({ ref: r(l) }, r(s)), {
          default: y(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), uh = /* @__PURE__ */ b({
  __name: "TooltipPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(r(Xn), H(U(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Tu(e) {
  var t, n, a = "";
  if (typeof e == "string" || typeof e == "number") a += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Tu(e[t])) && (a && (a += " "), a += n);
  } else for (n in e) e[n] && (a && (a += " "), a += n);
  return a;
}
function Du() {
  for (var e, t, n = 0, a = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Tu(e)) && (a && (a += " "), a += t);
  return a;
}
const xs = "-", dh = (e) => {
  const t = ph(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: a
  } = e;
  return {
    getClassGroupId: (l) => {
      const i = l.split(xs);
      return i[0] === "" && i.length !== 1 && i.shift(), Au(i, t) || ch(l);
    },
    getConflictingClassGroupIds: (l, i) => {
      const u = n[l] || [];
      return i && a[l] ? [...u, ...a[l]] : u;
    }
  };
}, Au = (e, t) => {
  var l;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], a = t.nextPart.get(n), o = a ? Au(e.slice(1), a) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const s = e.join(xs);
  return (l = t.validators.find(({
    validator: i
  }) => i(s))) == null ? void 0 : l.classGroupId;
}, xl = /^\[(.+)\]$/, ch = (e) => {
  if (xl.test(e)) {
    const t = xl.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, ph = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, a = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return vh(Object.entries(e.classGroups), n).forEach(([s, l]) => {
    Cr(l, a, s, t);
  }), a;
}, Cr = (e, t, n, a) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const s = o === "" ? t : Cl(t, o);
      s.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (fh(o)) {
        Cr(o(a), t, n, a);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([s, l]) => {
      Cr(l, Cl(t, s), n, a);
    });
  });
}, Cl = (e, t) => {
  let n = e;
  return t.split(xs).forEach((a) => {
    n.nextPart.has(a) || n.nextPart.set(a, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(a);
  }), n;
}, fh = (e) => e.isThemeGetter, vh = (e, t) => t ? e.map(([n, a]) => {
  const o = a.map((s) => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([l, i]) => [t + l, i])) : s);
  return [n, o];
}) : e, mh = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
  const o = (s, l) => {
    n.set(s, l), t++, t > e && (t = 0, a = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(s) {
      let l = n.get(s);
      if (l !== void 0)
        return l;
      if ((l = a.get(s)) !== void 0)
        return o(s, l), l;
    },
    set(s, l) {
      n.has(s) ? n.set(s, l) : o(s, l);
    }
  };
}, Iu = "!", gh = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, a = t.length === 1, o = t[0], s = t.length, l = (i) => {
    const u = [];
    let d = 0, p = 0, c;
    for (let x = 0; x < i.length; x++) {
      let C = i[x];
      if (d === 0) {
        if (C === o && (a || i.slice(x, x + s) === t)) {
          u.push(i.slice(p, x)), p = x + s;
          continue;
        }
        if (C === "/") {
          c = x;
          continue;
        }
      }
      C === "[" ? d++ : C === "]" && d--;
    }
    const f = u.length === 0 ? i : i.substring(p), m = f.startsWith(Iu), v = m ? f.substring(1) : f, h = c && c > p ? c - p : void 0;
    return {
      modifiers: u,
      hasImportantModifier: m,
      baseClassName: v,
      maybePostfixModifierPosition: h
    };
  };
  return n ? (i) => n({
    className: i,
    parseClassName: l
  }) : l;
}, hh = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((a) => {
    a[0] === "[" ? (t.push(...n.sort(), a), n = []) : n.push(a);
  }), t.push(...n.sort()), t;
}, yh = (e) => ({
  cache: mh(e.cacheSize),
  parseClassName: gh(e),
  ...dh(e)
}), bh = /\s+/, _h = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: a,
    getConflictingClassGroupIds: o
  } = t, s = [], l = e.trim().split(bh);
  let i = "";
  for (let u = l.length - 1; u >= 0; u -= 1) {
    const d = l[u], {
      modifiers: p,
      hasImportantModifier: c,
      baseClassName: f,
      maybePostfixModifierPosition: m
    } = n(d);
    let v = !!m, h = a(v ? f.substring(0, m) : f);
    if (!h) {
      if (!v) {
        i = d + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (h = a(f), !h) {
        i = d + (i.length > 0 ? " " + i : i);
        continue;
      }
      v = !1;
    }
    const x = hh(p).join(":"), C = c ? x + Iu : x, S = C + h;
    if (s.includes(S))
      continue;
    s.push(S);
    const B = o(h, v);
    for (let P = 0; P < B.length; ++P) {
      const O = B[P];
      s.push(C + O);
    }
    i = d + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function wh() {
  let e = 0, t, n, a = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Mu(t)) && (a && (a += " "), a += n);
  return a;
}
const Mu = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let a = 0; a < e.length; a++)
    e[a] && (t = Mu(e[a])) && (n && (n += " "), n += t);
  return n;
};
function xh(e, ...t) {
  let n, a, o, s = l;
  function l(u) {
    const d = t.reduce((p, c) => c(p), e());
    return n = yh(d), a = n.cache.get, o = n.cache.set, s = i, i(u);
  }
  function i(u) {
    const d = a(u);
    if (d)
      return d;
    const p = _h(u, n);
    return o(u, p), p;
  }
  return function() {
    return s(wh.apply(null, arguments));
  };
}
const Fe = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, Ru = /^\[(?:([a-z-]+):)?(.+)\]$/i, Ch = /^\d+\/\d+$/, Bh = /* @__PURE__ */ new Set(["px", "full", "screen"]), Sh = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, $h = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Oh = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Eh = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Ph = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Nt = (e) => Vn(e) || Bh.has(e) || Ch.test(e), Zt = (e) => na(e, "length", Fh), Vn = (e) => !!e && !Number.isNaN(Number(e)), er = (e) => na(e, "number", Vn), sa = (e) => !!e && Number.isInteger(Number(e)), kh = (e) => e.endsWith("%") && Vn(e.slice(0, -1)), ye = (e) => Ru.test(e), Qt = (e) => Sh.test(e), Th = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Dh = (e) => na(e, Th, Fu), Ah = (e) => na(e, "position", Fu), Ih = /* @__PURE__ */ new Set(["image", "url"]), Mh = (e) => na(e, Ih, Lh), Rh = (e) => na(e, "", qh), la = () => !0, na = (e, t, n) => {
  const a = Ru.exec(e);
  return a ? a[1] ? typeof t == "string" ? a[1] === t : t.has(a[1]) : n(a[2]) : !1;
}, Fh = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  $h.test(e) && !Oh.test(e)
), Fu = () => !1, qh = (e) => Eh.test(e), Lh = (e) => Ph.test(e), Vh = () => {
  const e = Fe("colors"), t = Fe("spacing"), n = Fe("blur"), a = Fe("brightness"), o = Fe("borderColor"), s = Fe("borderRadius"), l = Fe("borderSpacing"), i = Fe("borderWidth"), u = Fe("contrast"), d = Fe("grayscale"), p = Fe("hueRotate"), c = Fe("invert"), f = Fe("gap"), m = Fe("gradientColorStops"), v = Fe("gradientColorStopPositions"), h = Fe("inset"), x = Fe("margin"), C = Fe("opacity"), S = Fe("padding"), B = Fe("saturate"), P = Fe("scale"), O = Fe("sepia"), I = Fe("skew"), k = Fe("space"), F = Fe("translate"), D = () => ["auto", "contain", "none"], A = () => ["auto", "hidden", "clip", "visible", "scroll"], q = () => ["auto", ye, t], L = () => [ye, t], ee = () => ["", Nt, Zt], G = () => ["auto", Vn, ye], z = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], N = () => ["solid", "dashed", "dotted", "double", "none"], se = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], Z = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], K = () => ["", "0", ye], ne = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], X = () => [Vn, ye];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [la],
      spacing: [Nt, Zt],
      blur: ["none", "", Qt, ye],
      brightness: X(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Qt, ye],
      borderSpacing: L(),
      borderWidth: ee(),
      contrast: X(),
      grayscale: K(),
      hueRotate: X(),
      invert: K(),
      gap: L(),
      gradientColorStops: [e],
      gradientColorStopPositions: [kh, Zt],
      inset: q(),
      margin: q(),
      opacity: X(),
      padding: L(),
      saturate: X(),
      scale: X(),
      sepia: K(),
      skew: X(),
      space: L(),
      translate: L()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", ye]
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
        columns: [Qt]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": ne()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": ne()
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
        object: [...z(), ye]
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
        overscroll: D()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": D()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": D()
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
        inset: [h]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [h]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [h]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [h]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [h]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [h]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [h]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [h]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [h]
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
        z: ["auto", sa, ye]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: q()
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
        flex: ["1", "auto", "initial", "none", ye]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: K()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: K()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", sa, ye]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [la]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", sa, ye]
        }, ye]
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
        "grid-rows": [la]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [sa, ye]
        }, ye]
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
        "auto-cols": ["auto", "min", "max", "fr", ye]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", ye]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [f]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [f]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [f]
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
        p: [S]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [S]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [S]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [S]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [S]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [S]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [S]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [S]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [S]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [x]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [x]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [x]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [x]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [x]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [x]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [x]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [x]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [x]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [k]
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
        "space-y": [k]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ye, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [ye, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [ye, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [Qt]
        }, Qt]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [ye, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [ye, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [ye, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [ye, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Qt, Zt]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", er]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [la]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ye]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Vn, er]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Nt, ye]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ye]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", ye]
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
        "placeholder-opacity": [C]
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
        "text-opacity": [C]
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
        decoration: [...N(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Nt, Zt]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Nt, ye]
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
        indent: L()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ye]
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
        content: ["none", ye]
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
        "bg-opacity": [C]
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
        bg: [...z(), Ah]
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
        bg: ["auto", "cover", "contain", Dh]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Mh]
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
        rounded: [s]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [s]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [s]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [s]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [s]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [s]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [s]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [s]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [s]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [s]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [s]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [s]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [s]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [s]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [s]
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
        "border-opacity": [C]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...N(), "hidden"]
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
        "divide-opacity": [C]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: N()
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
        outline: ["", ...N()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Nt, ye]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Nt, Zt]
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
        ring: ee()
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
        "ring-opacity": [C]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Nt, Zt]
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
        shadow: ["", "inner", "none", Qt, Rh]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [la]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [C]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...se(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": se()
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
        "drop-shadow": ["", "none", Qt, ye]
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
        "hue-rotate": [p]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [c]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [B]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [O]
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
        "backdrop-hue-rotate": [p]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [c]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [C]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [B]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [O]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ye]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: X()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", ye]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: X()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", ye]
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
        rotate: [sa, ye]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [F]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [F]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [I]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [I]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", ye]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ye]
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
        "scroll-m": L()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": L()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": L()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": L()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": L()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": L()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": L()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": L()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": L()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": L()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": L()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": L()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": L()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": L()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": L()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": L()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": L()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": L()
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
        "will-change": ["auto", "scroll", "contents", "transform", ye]
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
        stroke: [Nt, Zt, er]
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
}, Nh = /* @__PURE__ */ xh(Vh);
function M(...e) {
  return Nh(Du(e));
}
function hB(e, t) {
  t.value = typeof e == "function" ? e(t.value) : e;
}
function yB(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, a = Symbol(n);
  return [(l) => {
    const i = yn(a, l);
    if (i || i === null) return i;
    throw new Error(
      `Injection \`${a.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(", ")}` : `\`${e}\``}`
    );
  }, (l) => (bn(a, l), l)];
}
function zh() {
  const e = "vibrate" in navigator;
  return {
    isSupported: e,
    light: () => {
      e && navigator.vibrate(10);
    },
    medium: () => {
      e && navigator.vibrate(25);
    },
    heavy: () => {
      e && navigator.vibrate(50);
    },
    success: () => {
      e && navigator.vibrate([10, 50, 10]);
    },
    error: () => {
      e && navigator.vibrate([50, 50, 50, 50, 50]);
    },
    pattern: (i) => {
      e && navigator.vibrate(i);
    }
  };
}
var Bl;
const qu = typeof window < "u", Kh = (e) => typeof e < "u", jh = (e) => typeof e == "function", Hh = (e) => typeof e == "string", Br = () => {
};
qu && ((Bl = window == null ? void 0 : window.navigator) != null && Bl.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Lu(e) {
  return typeof e == "function" ? e() : r(e);
}
function Wh(e) {
  return e;
}
function Vu(e) {
  return Ca() ? (Ba(e), !0) : !1;
}
function Uh(e) {
  const t = Symbol("InjectionState");
  return [(...o) => {
    const s = e(...o);
    return bn(t, s), s;
  }, () => yn(t)];
}
function Gh(e) {
  if (!Qe(e))
    return gt(e);
  const t = new Proxy({}, {
    get(n, a, o) {
      return r(Reflect.get(e.value, a, o));
    },
    set(n, a, o) {
      return Qe(e.value[a]) && !Qe(o) ? e.value[a].value = o : e.value[a] = o, !0;
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
  return gt(t);
}
function Yh(e) {
  return Gh(E(e));
}
function xe(e, ...t) {
  const n = t.flat();
  return Yh(() => Object.fromEntries(Object.entries(pe(e)).filter((a) => !n.includes(a[0]))));
}
function Xh(e) {
  return typeof e == "function" ? E(e) : $(e);
}
function Zh(e, t = !0) {
  nt() ? de(e) : t ? e() : re(e);
}
function Qh(e) {
  var t;
  const n = Lu(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Cs = qu ? window : void 0;
function ua(...e) {
  let t, n, a, o;
  if (Hh(e[0]) || Array.isArray(e[0]) ? ([n, a, o] = e, t = Cs) : [t, n, a, o] = e, !t)
    return Br;
  Array.isArray(n) || (n = [n]), Array.isArray(a) || (a = [a]);
  const s = [], l = () => {
    s.forEach((p) => p()), s.length = 0;
  }, i = (p, c, f, m) => (p.addEventListener(c, f, m), () => p.removeEventListener(c, f, m)), u = ae(() => [Qh(t), Lu(o)], ([p, c]) => {
    l(), p && s.push(...n.flatMap((f) => a.map((m) => i(p, f, m, c))));
  }, { immediate: !0, flush: "post" }), d = () => {
    u(), l();
  };
  return Vu(d), d;
}
function Jh(e, t = !1) {
  const n = $(), a = () => n.value = !!e();
  return a(), Zh(a, t), n;
}
function Sr(e, t = {}) {
  const { window: n = Cs } = t, a = Jh(() => n && "matchMedia" in n && typeof n.matchMedia == "function");
  let o;
  const s = $(!1), l = () => {
    o && ("removeEventListener" in o ? o.removeEventListener("change", i) : o.removeListener(i));
  }, i = () => {
    a.value && (l(), o = n.matchMedia(Xh(e).value), s.value = o.matches, "addEventListener" in o ? o.addEventListener("change", i) : o.addListener(i));
  };
  return _e(i), Vu(() => l()), s;
}
function ey(e) {
  return JSON.parse(JSON.stringify(e));
}
const Sl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, $l = "__vueuse_ssr_handlers__";
Sl[$l] = Sl[$l] || {};
var zt;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(zt || (zt = {}));
function ty(e, t = {}) {
  const {
    threshold: n = 50,
    onSwipe: a,
    onSwipeEnd: o,
    onSwipeStart: s,
    passive: l = !0,
    window: i = Cs
  } = t, u = gt({ x: 0, y: 0 }), d = gt({ x: 0, y: 0 }), p = E(() => u.x - d.x), c = E(() => u.y - d.y), { max: f, abs: m } = Math, v = E(() => f(m(p.value), m(c.value)) >= n), h = $(!1), x = E(() => v.value ? m(p.value) > m(c.value) ? p.value > 0 ? zt.LEFT : zt.RIGHT : c.value > 0 ? zt.UP : zt.DOWN : zt.NONE), C = (D) => [D.touches[0].clientX, D.touches[0].clientY], S = (D, A) => {
    u.x = D, u.y = A;
  }, B = (D, A) => {
    d.x = D, d.y = A;
  };
  let P;
  const O = ny(i == null ? void 0 : i.document);
  l ? P = O ? { passive: !0 } : { capture: !1 } : P = O ? { passive: !1, capture: !0 } : { capture: !0 };
  const I = (D) => {
    h.value && (o == null || o(D, x.value)), h.value = !1;
  }, k = [
    ua(e, "touchstart", (D) => {
      P.capture && !P.passive && D.preventDefault();
      const [A, q] = C(D);
      S(A, q), B(A, q), s == null || s(D);
    }, P),
    ua(e, "touchmove", (D) => {
      const [A, q] = C(D);
      B(A, q), !h.value && v.value && (h.value = !0), h.value && (a == null || a(D));
    }, P),
    ua(e, "touchend", I, P),
    ua(e, "touchcancel", I, P)
  ];
  return {
    isPassiveEventSupported: O,
    isSwiping: h,
    direction: x,
    coordsStart: u,
    coordsEnd: d,
    lengthX: p,
    lengthY: c,
    stop: () => k.forEach((D) => D())
  };
}
function ny(e) {
  if (!e)
    return !1;
  let t = !1;
  const n = {
    get passive() {
      return t = !0, !1;
    }
  };
  return e.addEventListener("x", Br, n), e.removeEventListener("x", Br), t;
}
var ay = Object.defineProperty, Ol = Object.getOwnPropertySymbols, oy = Object.prototype.hasOwnProperty, ry = Object.prototype.propertyIsEnumerable, El = (e, t, n) => t in e ? ay(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, sy = (e, t) => {
  for (var n in t || (t = {}))
    oy.call(t, n) && El(e, n, t[n]);
  if (Ol)
    for (var n of Ol(t))
      ry.call(t, n) && El(e, n, t[n]);
  return e;
};
const ly = {
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
sy({
  linear: Wh
}, ly);
function Bs(e, t, n, a = {}) {
  var o, s, l;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: p = !1,
    defaultValue: c
  } = a, f = nt(), m = n || (f == null ? void 0 : f.emit) || ((o = f == null ? void 0 : f.$emit) == null ? void 0 : o.bind(f)) || ((l = (s = f == null ? void 0 : f.proxy) == null ? void 0 : s.$emit) == null ? void 0 : l.bind(f == null ? void 0 : f.proxy));
  let v = d;
  t || (t = "modelValue"), v = d || v || `update:${t.toString()}`;
  const h = (C) => i ? jh(i) ? i(C) : ey(C) : C, x = () => Kh(e[t]) ? h(e[t]) : c;
  if (u) {
    const C = x(), S = $(C);
    return ae(() => e[t], (B) => S.value = h(B)), ae(S, (B) => {
      (B !== e[t] || p) && m(v, B);
    }, { deep: p }), S;
  } else
    return E({
      get() {
        return x();
      },
      set(C) {
        m(v, C);
      }
    });
}
function iy() {
  const e = Sr("(max-width: 768px)"), t = Sr("(min-width: 769px) and (max-width: 1024px)"), n = $(!1);
  de(() => {
    n.value = "ontouchstart" in window || navigator.maxTouchPoints > 0;
  });
  const a = E(() => e.value || t.value);
  return {
    isMobile: e,
    isTablet: t,
    isTouchDevice: n,
    isSmallScreen: a
  };
}
function bB(e, t = {}) {
  const { threshold: n = 50, enabled: a = !0, onSwipeLeft: o, onSwipeRight: s } = t, { direction: l, lengthX: i } = ty(e, {
    passive: !0,
    onSwipeEnd() {
      a && Math.abs(i.value) >= n && (l.value === zt.LEFT && o ? o() : l.value === zt.RIGHT && s && s());
    }
  });
  return {
    direction: l,
    lengthX: i
  };
}
function _B() {
  const e = $(!0);
  let t = 0, n = !1;
  const a = () => {
    n || (window.requestAnimationFrame(() => {
      const o = window.scrollY, s = o - t;
      s > 10 && o > 100 ? e.value = !1 : s < -10 && (e.value = !0), t = o, n = !1;
    }), n = !0);
  };
  return de(() => {
    window.addEventListener("scroll", a, { passive: !0 });
  }), Ke(() => {
    window.removeEventListener("scroll", a);
  }), {
    isVisible: e
  };
}
const uy = /* @__PURE__ */ b({
  __name: "AlertDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = me(e, t);
    return (s, l) => (g(), w(r(Wf), H(U(r(o))), {
      default: y(() => [
        _(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wB = /* @__PURE__ */ b({
  __name: "AlertDialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(r(Uf), H(U(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), dy = /* @__PURE__ */ b({
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
    const n = e, a = t, o = E(() => {
      const { class: l, ...i } = n;
      return i;
    }), s = me(o, a);
    return (l, i) => (g(), w(r(Gf), null, {
      default: y(() => [
        R(r(Qf), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        R(r(Zf), T(r(s), {
          class: r(M)(
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
}), cy = /* @__PURE__ */ b({
  __name: "AlertDialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("div", {
      class: Y(r(M)("flex flex-col gap-y-2 text-center sm:text-left", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), py = /* @__PURE__ */ b({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(r(ev), T(n.value, {
      class: r(M)("text-lg font-semibold", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), fy = /* @__PURE__ */ b({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(r(tv), T(n.value, {
      class: r(M)("text-sm text-muted-foreground", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), vy = /* @__PURE__ */ b({
  __name: "AlertDialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("div", {
      class: Y(r(M)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), Pl = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, kl = Du, Ut = (e, t) => (n) => {
  var a;
  if ((t == null ? void 0 : t.variants) == null) return kl(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: s } = t, l = Object.keys(o).map((d) => {
    const p = n == null ? void 0 : n[d], c = s == null ? void 0 : s[d];
    if (p === null) return null;
    const f = Pl(p) || Pl(c);
    return o[d][f];
  }), i = n && Object.entries(n).reduce((d, p) => {
    let [c, f] = p;
    return f === void 0 || (d[c] = f), d;
  }, {}), u = t == null || (a = t.compoundVariants) === null || a === void 0 ? void 0 : a.reduce((d, p) => {
    let { class: c, className: f, ...m } = p;
    return Object.entries(m).every((v) => {
      let [h, x] = v;
      return Array.isArray(x) ? x.includes({
        ...s,
        ...i
      }[h]) : {
        ...s,
        ...i
      }[h] === x;
    }) ? [
      ...d,
      c,
      f
    ] : d;
  }, []);
  return kl(e, l, u, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, Ss = /* @__PURE__ */ b({
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
    return (n, a) => (g(), w(r(J), {
      as: e.as,
      "as-child": e.asChild,
      class: Y(r(M)(r(un)({ variant: e.variant, size: e.size }), t.class))
    }, {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), un = Ut(
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
), my = /* @__PURE__ */ b({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    variant: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(r(nv), T(n.value, {
      class: r(M)(r(un)({ variant: e.variant }), t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), gy = /* @__PURE__ */ b({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(r(Jf), T(n.value, {
      class: r(M)(r(un)({ variant: "outline" }), "mt-2 sm:mt-0", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), xB = /* @__PURE__ */ b({
  __name: "ConfirmDialog",
  setup(e) {
    const { isOpen: t, close: n, cancelButton: a, actionButton: o, title: s, description: l, variant: i } = by();
    return (u, d) => (g(), w(r(uy), { open: r(t) }, {
      default: y(() => [
        R(r(dy), {
          onEscapeKeyDown: r(n),
          onPointerDownOutside: r(n)
        }, {
          default: y(() => [
            R(r(cy), null, {
              default: y(() => [
                R(r(py), null, {
                  default: y(() => [
                    Be(Me(r(s)), 1)
                  ]),
                  _: 1
                }),
                R(r(fy), null, {
                  default: y(() => [
                    Be(Me(r(l)), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            R(r(vy), null, {
              default: y(() => [
                R(r(gy), {
                  onClick: r(a).handler
                }, {
                  default: y(() => [
                    Be(Me(r(a).label ?? "Cancel"), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                R(r(my), {
                  variant: r(i),
                  onClick: r(o).handler
                }, {
                  default: y(() => [
                    Be(Me(r(o).label ?? "Confirm"), 1)
                  ]),
                  _: 1
                }, 8, ["variant", "onClick"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["onEscapeKeyDown", "onPointerDownOutside"])
      ]),
      _: 1
    }, 8, ["open"]));
  }
}), $s = $(!1), Nu = $(""), zu = $(""), Ku = $(null), ju = $({
  label: void 0,
  handler: () => {
  }
}), Hu = $({
  label: void 0,
  handler: () => {
  }
}), hy = (e) => {
  Nu.value = e.title, zu.value = e.description, Ku.value = e.variant, ju.value = Tl(e.cancelAction), Hu.value = Tl(e.action), yy();
}, Tl = (e) => typeof e == "string" ? {
  label: e,
  handler: Ja
} : typeof e == "function" ? {
  label: void 0,
  handler: e
} : typeof e == "object" && e !== void 0 ? {
  label: e.label ?? void 0,
  handler: e.handler ?? Ja
} : {
  label: void 0,
  handler: Ja
}, Ja = () => {
  $s.value = !1;
}, yy = () => {
  $s.value = !0;
};
function by() {
  return {
    confirmDialog: (e) => hy(e),
    title: Nu,
    description: zu,
    variant: Ku,
    isOpen: $s,
    close: Ja,
    cancelButton: ju,
    actionButton: Hu
  };
}
const $n = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, o] of t)
    n[a] = o;
  return n;
}, _y = {}, wy = { class: "h-full bg-background dark:text-white" };
function xy(e, t) {
  return g(), V("div", wy, [
    _(e.$slots, "default")
  ]);
}
const CB = /* @__PURE__ */ $n(_y, [["render", xy]]), Cy = {}, By = { class: "sticky top-0 z-50 flex h-16 shrink-0 items-center gap-x-4 bg-background/60 px-4 backdrop-blur sm:gap-x-6 sm:px-6 lg:px-8" };
function Sy(e, t) {
  return g(), V("header", By, [
    _(e.$slots, "default")
  ]);
}
const BB = /* @__PURE__ */ $n(Cy, [["render", Sy]]), $y = {}, Oy = { class: "px-4 py-10 sm:px-6 lg:px-8 lg:pl-72" };
function Ey(e, t) {
  return g(), V("main", Oy, [
    _(e.$slots, "default")
  ]);
}
const SB = /* @__PURE__ */ $n($y, [["render", Ey]]), Py = {};
function ky(e, t) {
  return _(e.$slots, "default");
}
const $B = /* @__PURE__ */ $n(Py, [["render", ky]]), Ty = {}, Dy = { class: "hidden px-6 py-10 lg:fixed lg:inset-y-0 lg:top-16 lg:z-50 lg:flex lg:w-72 lg:flex-col" }, Ay = { class: "gap-y-5 overflow-y-auto" };
function Iy(e, t) {
  return g(), V("div", Dy, [
    ie("div", Ay, [
      _(e.$slots, "default")
    ])
  ]);
}
const OB = /* @__PURE__ */ $n(Ty, [["render", Iy]]), My = {};
function Ry(e, t) {
  return _(e.$slots, "default");
}
const EB = /* @__PURE__ */ $n(My, [["render", Ry]]);
function Fy(e, t) {
  return g(), V("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    ie("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    })
  ]);
}
function qy(e, t) {
  return g(), V("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    ie("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    })
  ]);
}
function Dl(e, t) {
  return g(), V("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    ie("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
    })
  ]);
}
function Ly(e, t) {
  return g(), V("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    ie("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
    })
  ]);
}
const Vy = {
  type: "button",
  class: "-m-2.5 p-2.5 lg:hidden"
}, PB = /* @__PURE__ */ b({
  __name: "TwoColumnLayoutSidebarTrigger",
  setup(e) {
    return (t, n) => (g(), V("button", Vy, [
      n[0] || (n[0] = ie("span", { class: "sr-only" }, "Open sidebar", -1)),
      R(r(Fy), {
        class: "h-6 w-6",
        "aria-hidden": "true"
      })
    ]));
  }
}), Ny = 3, zy = 1e6, Kt = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST"
};
let tr = 0;
function Ky() {
  return tr = (tr + 1) % Number.MAX_VALUE, tr.toString();
}
const nr = /* @__PURE__ */ new Map();
function Al(e) {
  if (nr.has(e)) return;
  const t = setTimeout(() => {
    nr.delete(e), ca({
      type: Kt.REMOVE_TOAST,
      toastId: e
    });
  }, zy);
  nr.set(e, t);
}
const _t = $({
  toasts: []
});
function ca(e) {
  switch (e.type) {
    case Kt.ADD_TOAST:
      _t.value.toasts = [e.toast, ..._t.value.toasts].slice(0, Ny);
      break;
    case Kt.UPDATE_TOAST:
      _t.value.toasts = _t.value.toasts.map(
        (t) => t.id === e.toast.id ? { ...t, ...e.toast } : t
      );
      break;
    case Kt.DISMISS_TOAST: {
      const { toastId: t } = e;
      t ? Al(t) : _t.value.toasts.forEach((n) => {
        Al(n.id);
      }), _t.value.toasts = _t.value.toasts.map(
        (n) => n.id === t || t === void 0 ? {
          ...n,
          open: !1
        } : n
      );
      break;
    }
    case Kt.REMOVE_TOAST:
      e.toastId === void 0 ? _t.value.toasts = [] : _t.value.toasts = _t.value.toasts.filter((t) => t.id !== e.toastId);
      break;
  }
}
function Wu() {
  return {
    toasts: E(() => _t.value.toasts),
    toast: jy,
    dismiss: (e) => ca({ type: Kt.DISMISS_TOAST, toastId: e })
  };
}
function jy(e) {
  const t = Ky(), n = (o) => ca({
    type: Kt.UPDATE_TOAST,
    toast: { ...o, id: t }
  }), a = () => ca({ type: Kt.DISMISS_TOAST, toastId: t });
  return ca({
    type: Kt.ADD_TOAST,
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
const Hy = { class: "flex items-start space-x-3" }, Wy = ["src", "alt"], Uy = { class: "grid gap-1" }, Gy = { class: "font-bold" }, Yy = /* @__PURE__ */ b({
  __name: "Toaster",
  props: {
    position: {}
  },
  emits: ["click"],
  setup(e) {
    const { toasts: t } = Wu();
    return (n, a) => (g(), w(r(lb), null, {
      default: y(() => [
        (g(!0), V(Pe, null, nn(r(t), (o) => (g(), w(r(Xy), T({
          key: o.id
        }, { ref_for: !0 }, o, {
          class: "mt-1.5",
          onClick: (s) => n.$emit("click", o)
        }), {
          default: y(() => [
            ie("div", Hy, [
              o.icon ? (g(), V(Pe, { key: 0 }, [
                typeof o.icon == "string" ? (g(), V("img", {
                  key: 0,
                  src: o.icon,
                  class: Y(["size-16 rounded-sm object-cover", o.iconClasses]),
                  alt: o.title
                }, null, 10, Wy)) : (g(), w(dt(o.icon), {
                  key: 1,
                  class: Y(["size-6", o.iconClasses])
                }, null, 8, ["class"]))
              ], 64)) : fe("", !0),
              ie("div", Uy, [
                o.title ? (g(), w(r(sb), { key: 0 }, {
                  default: y(() => [
                    Be(Me(o.title), 1)
                  ]),
                  _: 2
                }, 1024)) : fe("", !0),
                o.description ? (g(), V(Pe, { key: 1 }, [
                  nc(o.description) ? (g(), w(r(Il), { key: 0 }, {
                    default: y(() => [
                      (g(), w(dt(o.description)))
                    ]),
                    _: 2
                  }, 1024)) : typeof o.description == "object" ? (g(!0), V(Pe, { key: 1 }, nn(o.description, (s, l) => (g(), V("p", {
                    key: l,
                    class: "text-sm opacity-90"
                  }, [
                    o.objectFormat === "key" ? (g(), V(Pe, { key: 0 }, [
                      Be(Me(l), 1)
                    ], 64)) : o.objectFormat === "both" ? (g(), V(Pe, { key: 1 }, [
                      ie("span", Gy, Me(l), 1),
                      Be(": " + Me(s), 1)
                    ], 64)) : (g(), V(Pe, { key: 2 }, [
                      Be(Me(s), 1)
                    ], 64))
                  ]))), 128)) : (g(), w(r(Il), { key: 2 }, {
                    default: y(() => [
                      Be(Me(o.description), 1)
                    ]),
                    _: 2
                  }, 1024))
                ], 64)) : fe("", !0),
                R(r(rb))
              ])
            ]),
            (g(), w(dt(o.action)))
          ]),
          _: 2
        }, 1040, ["onClick"]))), 128)),
        R(r(Zy), { position: e.position }, null, 8, ["position"])
      ]),
      _: 1
    }));
  }
}), Xy = /* @__PURE__ */ b({
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
    const n = e, a = t, o = E(() => {
      const { class: l, ...i } = n;
      return i;
    }), s = me(o, a);
    return (l, i) => (g(), w(r(Qg), T(r(s), {
      class: r(M)(r(ib)({ variant: e.variant }), n.class),
      "onUpdate:open": e.onOpenChange
    }), {
      default: y(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class", "onUpdate:open"]));
  }
}), Zy = /* @__PURE__ */ b({
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
    const t = e, n = E(() => {
      const { class: o, ...s } = t;
      return s;
    }), a = E(() => {
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
    return (o, s) => (g(), w(r(eh), T(n.value, {
      class: r(M)(
        // overriding the defaults to position at the bottom on mobile viewport
        // 'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
        "fixed flex-col z-[100] flex max-h-screen w-full p-4 md:max-w-[420px]",
        a.value,
        t.class
      )
    }), null, 16, ["class"]));
  }
}), kB = /* @__PURE__ */ b({
  __name: "ToastAction",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(r(Jg), T(n.value, {
      class: r(M)(
        "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
        t.class
      )
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
});
function Qy(e, t) {
  return g(), V("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    ie("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z",
      fill: "currentColor"
    })
  ]);
}
function Jy(e, t) {
  return g(), V("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    ie("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z",
      fill: "currentColor"
    })
  ]);
}
function eb(e, t) {
  return g(), V("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    ie("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z",
      fill: "currentColor"
    })
  ]);
}
function Uu(e, t) {
  return g(), V("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    ie("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",
      fill: "currentColor"
    })
  ]);
}
function Gu(e, t) {
  return g(), V("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    ie("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
      fill: "currentColor"
    })
  ]);
}
function tb(e, t) {
  return g(), V("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    ie("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z",
      fill: "currentColor"
    })
  ]);
}
function nb(e, t) {
  return g(), V("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    ie("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M3.13523 8.84197C3.3241 9.04343 3.64052 9.05363 3.84197 8.86477L7.5 5.43536L11.158 8.86477C11.3595 9.05363 11.6759 9.04343 11.8648 8.84197C12.0536 8.64051 12.0434 8.32409 11.842 8.13523L7.84197 4.38523C7.64964 4.20492 7.35036 4.20492 7.15803 4.38523L3.15803 8.13523C2.95657 8.32409 2.94637 8.64051 3.13523 8.84197Z",
      fill: "currentColor"
    })
  ]);
}
function Ao(e, t) {
  return g(), V("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    ie("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
      fill: "currentColor"
    })
  ]);
}
function ab(e, t) {
  return g(), V("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    ie("path", {
      d: "M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z",
      fill: "currentColor"
    })
  ]);
}
function ob(e, t) {
  return g(), V("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    ie("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z",
      fill: "currentColor"
    })
  ]);
}
const rb = /* @__PURE__ */ b({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(r(Ou), T(n.value, {
      class: r(M)(
        "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
        t.class
      )
    }), {
      default: y(() => [
        R(r(Ao), { class: "h-4 w-4" })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), sb = /* @__PURE__ */ b({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(r(th), T(n.value, {
      class: r(M)("text-sm font-semibold [&+div]:text-xs", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Il = /* @__PURE__ */ b({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(r(nh), T({
      class: r(M)("text-sm opacity-90", t.class)
    }, n.value), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), lb = /* @__PURE__ */ b({
  __name: "ToastProvider",
  props: {
    label: {},
    duration: {},
    swipeDirection: {},
    swipeThreshold: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(r(zg), H(U(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ib = Ut(
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
), { toast: ja } = Wu();
function ub() {
  return {
    info: (e) => {
      ja({
        icon: Ly,
        iconClasses: "text-blue-400",
        title: "FYI",
        description: e
      });
    },
    success: (e) => {
      ja({
        icon: qy,
        iconClasses: "text-green-400",
        title: "Success",
        description: e
      });
    },
    warning: (e) => {
      ja({
        icon: Dl,
        iconClasses: "text-orange-400",
        title: "Warning",
        description: e
      });
    },
    error: (e, t = "value") => {
      ja({
        icon: Dl,
        iconClasses: "text-red-400",
        title: "Oh snap! Some errors were encountered.",
        description: e,
        objectFormat: t
      });
    }
  };
}
const TB = /* @__PURE__ */ b({
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
      error: s
    } = ub();
    return ae(
      () => t.info,
      (l) => {
        l && n(t.info);
      },
      {
        immediate: !0
      }
    ), ae(
      () => t.success,
      (l) => {
        l && a(t.success);
      },
      { immediate: !0 }
    ), ae(
      () => t.warning,
      (l) => {
        l && o(t.warning);
      },
      { immediate: !0 }
    ), ae(
      () => t.errors,
      () => {
        t.errors !== void 0 && Object.keys(t.errors).length > 0 && s(t.errors, t.objectFormat);
      }
    ), (l, i) => (g(), w(r(Yy)));
  }
}), db = { class: "flex items-center justify-between space-y-2" }, cb = { class: "flex items-center space-x-2" }, DB = /* @__PURE__ */ b({
  __name: "Heading",
  props: {
    as: { default: "h2" },
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("div", db, [
      (g(), w(dt(e.as), {
        class: Y(r(M)("text-3xl font-bold tracking-tight", t.class))
      }, {
        default: y(() => [
          _(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["class"])),
      ie("div", cb, [
        _(n.$slots, "actions")
      ])
    ]));
  }
}), pb = /* @__PURE__ */ b({
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
    const o = me(e, t);
    return (s, l) => (g(), w(r(mf), H(U(r(o))), {
      default: y(() => [
        _(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), AB = /* @__PURE__ */ b({
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
    const o = me(e, t);
    return (s, l) => (g(), w(pb, H(U(r(o))), {
      default: y(() => [
        (g(!0), V(Pe, null, nn(e.content, (i, u) => (g(), w(r(vb), {
          key: u,
          value: "item-" + u
        }, {
          default: y(() => [
            R(r(mb), null, {
              default: y(() => [
                _(s.$slots, u + ".title", { item: i }, () => [
                  Be(Me(i.title), 1)
                ])
              ]),
              _: 2
            }, 1024),
            R(r(fb), null, {
              default: y(() => [
                _(s.$slots, u + ".content", { item: i }, () => [
                  Be(Me(i.content), 1)
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
}), fb = /* @__PURE__ */ b({
  __name: "AccordionContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(r(yf), T(n.value, { class: "accordion-content overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" }), {
      default: y(() => [
        ie("div", {
          class: Y(r(M)("pb-4 pt-0", t.class))
        }, [
          _(a.$slots, "default")
        ], 2)
      ]),
      _: 3
    }, 16));
  }
}), vb = /* @__PURE__ */ b({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: o, ...s } = t;
      return s;
    }), a = et(n);
    return (o, s) => (g(), w(r(hf), T(r(a), {
      class: r(M)("border-b", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), mb = /* @__PURE__ */ b({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(r(bf), { class: "flex" }, {
      default: y(() => [
        R(r(_f), T(n.value, {
          class: r(M)(
            "accordion-trigger flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
            t.class
          )
        }), {
          default: y(() => [
            _(a.$slots, "default"),
            _(a.$slots, "icon", {}, () => [
              R(r(Gu), { class: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), gb = {
  key: 0,
  class: "relative w-full overflow-auto"
}, IB = /* @__PURE__ */ b({
  __name: "ResponsiveTable",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { isMobile: n } = iy();
    return (a, o) => r(n) ? (g(), V("div", {
      key: 1,
      class: Y(r(M)("flex flex-col gap-3", t.class))
    }, [
      _(a.$slots, "mobile")
    ], 2)) : (g(), V("div", gb, [
      ie("table", {
        class: Y(r(M)("w-full caption-bottom text-sm", t.class))
      }, [
        _(a.$slots, "default")
      ], 2)
    ]));
  }
});
/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hb = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ha = {
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
const yb = ({ size: e, strokeWidth: t = 2, absoluteStrokeWidth: n, color: a, iconNode: o, name: s, class: l, ...i }, { slots: u }) => ot(
  "svg",
  {
    ...Ha,
    width: e || Ha.width,
    height: e || Ha.height,
    stroke: a || Ha.stroke,
    "stroke-width": n ? Number(t) * 24 / Number(e) : t,
    class: ["lucide", `lucide-${hb(s ?? "icon")}`],
    ...i
  },
  [...o.map((d) => ot(...d)), ...u.default ? [u.default()] : []]
);
/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gt = (e, t) => (n, { slots: a }) => ot(
  yb,
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
const Yu = Gt("CheckIcon", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bb = Gt("ChevronDownIcon", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xu = Gt("ChevronLeftIcon", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Da = Gt("ChevronRightIcon", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _b = Gt("CircleIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zu = Gt("EllipsisIcon", [
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
const wb = Gt("MenuIcon", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]
]);
/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xb = Gt("MinusIcon", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cb = Gt("PanelLeftIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }]
]), Bb = { class: "flex items-start justify-between gap-4" }, Sb = { class: "min-w-0 flex-1" }, $b = {
  key: 0,
  class: "flex shrink-0 items-center"
}, ar = 80, MB = /* @__PURE__ */ b({
  __name: "ResponsiveTableCard",
  props: {
    class: {},
    clickable: { type: Boolean }
  },
  emits: ["click", "swipe-left", "swipe-right"],
  setup(e, { emit: t }) {
    const n = e, a = t, { light: o, medium: s } = zh(), l = $(null), i = $(0), u = $(0), d = $(!1), p = $(!1), c = (h) => {
      i.value = h.touches[0].clientX, u.value = 0, d.value = !0, p.value = !1;
    }, f = (h) => {
      if (!d.value) return;
      u.value = h.touches[0].clientX - i.value;
      const x = Math.abs(u.value) >= ar;
      x && !p.value ? (s(), p.value = !0) : !x && p.value && (p.value = !1);
    }, m = () => {
      d.value && (u.value < -ar ? a("swipe-left") : u.value > ar && a("swipe-right"), u.value = 0, d.value = !1);
    }, v = () => {
      Math.abs(u.value) < 10 && (o(), a("click"));
    };
    return (h, x) => (g(), V("div", {
      ref_key: "cardRef",
      ref: l,
      class: Y(
        r(M)(
          "relative overflow-hidden rounded-lg border bg-card p-4 shadow-sm transition-transform touch-manipulation",
          e.clickable && "cursor-pointer active:bg-muted/50",
          n.class
        )
      ),
      style: at({
        transform: `translateX(${u.value}px)`,
        transition: d.value ? "none" : "transform 0.2s ease-out"
      }),
      onTouchstart: c,
      onTouchmove: f,
      onTouchend: m,
      onClick: v
    }, [
      ie("div", Bb, [
        ie("div", Sb, [
          _(h.$slots, "default")
        ]),
        e.clickable ? (g(), V("div", $b, [
          R(r(Da), { class: "h-5 w-5 text-muted-foreground" })
        ])) : fe("", !0)
      ]),
      u.value < -20 ? (g(), V("div", {
        key: 0,
        class: "absolute inset-y-0 right-0 flex items-center bg-destructive/10 px-4",
        style: at({ width: `${Math.abs(u.value)}px` })
      }, [
        _(h.$slots, "swipe-left-action")
      ], 4)) : fe("", !0),
      u.value > 20 ? (g(), V("div", {
        key: 1,
        class: "absolute inset-y-0 left-0 flex items-center bg-primary/10 px-4",
        style: at({ width: `${u.value}px` })
      }, [
        _(h.$slots, "swipe-right-action")
      ], 4)) : fe("", !0)
    ], 38));
  }
}), RB = /* @__PURE__ */ b({
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
    const o = me(e, t);
    return (s, l) => (g(), w(r(Ob), null, {
      default: y(() => [
        R(r(Qu), H(U(r(o))), {
          default: y(() => [
            R(r(ed), {
              class: Y(e.indicator ? "underline decoration-dotted underline-offset-4" : "")
            }, {
              default: y(() => [
                _(s.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]),
            R(r(Ju), H(U(s.$attrs)), {
              default: y(() => [
                _(s.$slots, "tooltip", {}, () => [
                  Be(Me(e.tooltip), 1)
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
}), Qu = /* @__PURE__ */ b({
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
    const o = me(e, t);
    return (s, l) => (g(), w(r(rh), H(U(r(o))), {
      default: y(() => [
        _(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ju = /* @__PURE__ */ b({
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
    const n = e, a = t, o = E(() => {
      const { class: l, ...i } = n;
      return i;
    }), s = me(o, a);
    return (l, i) => (g(), w(r(uh), null, {
      default: y(() => [
        R(r(ih), T({ ...r(s), ...l.$attrs }, {
          class: r(M)(
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
}), Ob = /* @__PURE__ */ b({
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
    return (n, a) => (g(), w(r(Pu), H(U(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ed = /* @__PURE__ */ b({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(r(sh), H(U(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), FB = /* @__PURE__ */ b({
  __name: "Alert",
  props: {
    class: {},
    variant: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("div", {
      class: Y(r(M)(r(Eb)({ variant: e.variant }), t.class)),
      role: "alert"
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), qB = /* @__PURE__ */ b({
  __name: "AlertDescription",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("div", {
      class: Y(r(M)("text-sm [&_p]:leading-relaxed", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), LB = /* @__PURE__ */ b({
  __name: "AlertTitle",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("h5", {
      class: Y(r(M)("mb-1 font-medium leading-none tracking-tight", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), Eb = Ut(
  "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), VB = /* @__PURE__ */ b({
  __name: "Avatar",
  props: {
    class: {},
    size: { default: "sm" },
    shape: { default: "circle" }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(r(ov), {
      class: Y(r(M)(r(Pb)({ size: e.size, shape: e.shape }), t.class))
    }, {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), NB = /* @__PURE__ */ b({
  __name: "AvatarImage",
  props: {
    src: {},
    referrerPolicy: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(r(sv), T(t, { class: "h-full w-full object-cover" }), null, 16));
  }
}), zB = /* @__PURE__ */ b({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(r(lv), H(U(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Pb = Ut(
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
), KB = /* @__PURE__ */ b({
  __name: "Badge",
  props: {
    variant: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("div", {
      class: Y(r(M)(r(kb)({ variant: e.variant }), t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), kb = Ut(
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
), jB = /* @__PURE__ */ b({
  __name: "Breadcrumb",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("nav", {
      "aria-label": "breadcrumb",
      class: Y(t.class)
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), HB = /* @__PURE__ */ b({
  __name: "BreadcrumbEllipsis",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("span", {
      role: "presentation",
      "aria-hidden": "true",
      class: Y(r(M)("flex h-9 w-9 items-center justify-center", t.class))
    }, [
      _(n.$slots, "default", {}, () => [
        R(r(Zu), { class: "h-4 w-4" })
      ]),
      a[0] || (a[0] = ie("span", { class: "sr-only" }, "More", -1))
    ], 2));
  }
}), WB = /* @__PURE__ */ b({
  __name: "BreadcrumbItem",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("li", {
      class: Y(r(M)("inline-flex items-center gap-1.5", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
});
function Ml(e) {
  return typeof e == "string" ? `'${e}'` : new Tb().serialize(e);
}
const Tb = /* @__PURE__ */ function() {
  var t;
  class e {
    constructor() {
      el(this, t, /* @__PURE__ */ new Map());
    }
    compare(a, o) {
      const s = typeof a, l = typeof o;
      return s === "string" && l === "string" ? a.localeCompare(o) : s === "number" && l === "number" ? a - o : String.prototype.localeCompare.call(this.serialize(a, !0), this.serialize(o, !0));
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
      const s = a.constructor, l = s === Object || s === void 0 ? "" : s.name;
      if (l !== "" && globalThis[l] === s) return this.serializeBuiltInType(l, a);
      if (typeof a.toJSON == "function") {
        const i = a.toJSON();
        return l + (i !== null && typeof i == "object" ? this.$object(i) : `(${this.serialize(i)})`);
      }
      return this.serializeObjectEntries(l, Object.entries(a));
    }
    serializeBuiltInType(a, o) {
      const s = this["$" + a];
      if (s) return s.call(this, o);
      if (typeof (o == null ? void 0 : o.entries) == "function") return this.serializeObjectEntries(a, o.entries());
      throw new Error(`Cannot serialize ${a}`);
    }
    serializeObjectEntries(a, o) {
      const s = Array.from(o).sort((i, u) => this.compare(i[0], u[0]));
      let l = `${a}{`;
      for (let i = 0; i < s.length; i++) {
        const [u, d] = s[i];
        l += `${this.serialize(u, !0)}:${this.serialize(d)}`, i < s.length - 1 && (l += ",");
      }
      return l + "}";
    }
    $object(a) {
      let o = ra(this, t).get(a);
      return o === void 0 && (ra(this, t).set(a, `#${ra(this, t).size}`), o = this.serializeObject(a), ra(this, t).set(a, o)), o;
    }
    $function(a) {
      const o = Function.prototype.toString.call(a);
      return o.slice(-15) === "[native code] }" ? `${a.name || ""}()[native]` : `${a.name}(${a.length})${o.replace(/\s*\n\s*/g, "")}`;
    }
    $Array(a) {
      let o = "[";
      for (let s = 0; s < a.length; s++) o += this.serialize(a[s]), s < a.length - 1 && (o += ",");
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
      return `Set${this.$Array(Array.from(a).sort((o, s) => this.compare(o, s)))}`;
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
function jn(e, t) {
  return e === t || Ml(e) === Ml(t);
}
function Db(e, t, n) {
  const a = e.findIndex((i) => jn(i, t)), o = e.findIndex((i) => jn(i, n));
  if (a === -1 || o === -1) return [];
  const [s, l] = [a, o].sort((i, u) => i - u);
  return e.slice(s, l + 1);
}
function Le(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, a = Symbol(n);
  return [(l) => {
    const i = yn(a, l);
    if (i || i === null) return i;
    throw new Error(`Injection \`${a.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(", ")}` : `\`${e}\``}`);
  }, (l) => (bn(a, l), l)];
}
function We() {
  let e = document.activeElement;
  if (e == null) return null;
  for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null; ) e = e.shadowRoot.activeElement;
  return e;
}
function Os(e, t, n) {
  const a = n.originalEvent.target, o = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && a.addEventListener(e, t, { once: !0 }), a.dispatchEvent(o);
}
function uo(e) {
  return e == null;
}
function Rl(e, t) {
  return uo(e) ? !1 : Array.isArray(e) ? e.some((n) => jn(n, t)) : jn(e, t);
}
function Es(e) {
  return e ? e.flatMap((t) => t.type === Pe ? Es(t.children) : [t]) : [];
}
const Ab = ["INPUT", "TEXTAREA"];
function Ps(e, t, n, a = {}) {
  if (!t || a.enableIgnoredElement && Ab.includes(t.nodeName)) return null;
  const { arrowKeyOptions: o = "both", attributeName: s = "[data-reka-collection-item]", itemsArray: l = [], loop: i = !0, dir: u = "ltr", preventScroll: d = !0, focus: p = !1 } = a, [c, f, m, v, h, x] = [
    e.key === "ArrowRight",
    e.key === "ArrowLeft",
    e.key === "ArrowUp",
    e.key === "ArrowDown",
    e.key === "Home",
    e.key === "End"
  ], C = m || v, S = c || f;
  if (!h && !x && (!C && !S || o === "vertical" && S || o === "horizontal" && C)) return null;
  const B = n ? Array.from(n.querySelectorAll(s)) : l;
  if (!B.length) return null;
  d && e.preventDefault();
  let P = null;
  return S || C ? P = td(B, t, {
    goForward: C ? v : u === "ltr" ? c : f,
    loop: i
  }) : h ? P = B.at(0) || null : x && (P = B.at(-1) || null), p && (P == null || P.focus()), P;
}
function td(e, t, n, a = e.length) {
  if (--a === 0) return null;
  const o = e.indexOf(t), s = n.goForward ? o + 1 : o - 1;
  if (!n.loop && (s < 0 || s >= e.length)) return null;
  const l = (s + e.length) % e.length, i = e[l];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? td(e, i, n, a) : i : null;
}
const [Io] = Le("ConfigProvider");
function Ib(e, t) {
  var n;
  const a = pt();
  return _e(() => {
    a.value = e();
  }, {
    ...t,
    flush: (n = void 0) != null ? n : "sync"
  }), Un(a);
}
function Aa(e) {
  return Ca() ? (Ba(e), !0) : !1;
}
function eo() {
  const e = /* @__PURE__ */ new Set(), t = (s) => {
    e.delete(s);
  };
  return {
    on: (s) => {
      e.add(s);
      const l = () => t(s);
      return Aa(l), {
        off: l
      };
    },
    off: t,
    trigger: (...s) => Promise.all(Array.from(e).map((l) => l(...s))),
    clear: () => {
      e.clear();
    }
  };
}
function Mb(e) {
  let t = !1, n;
  const a = ho(!0);
  return (...o) => (t || (n = a.run(() => e(...o)), t = !0), n);
}
function nd(e) {
  let t = 0, n, a;
  const o = () => {
    t -= 1, a && t <= 0 && (a.stop(), n = void 0, a = void 0);
  };
  return (...s) => (t += 1, a || (a = ho(!0), n = a.run(() => e(...s))), Aa(o), n);
}
function Rb(e) {
  if (!Qe(e))
    return gt(e);
  const t = new Proxy({}, {
    get(n, a, o) {
      return r(Reflect.get(e.value, a, o));
    },
    set(n, a, o) {
      return Qe(e.value[a]) && !Qe(o) ? e.value[a].value = o : e.value[a] = o, !0;
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
  return gt(t);
}
function Fb(e) {
  return Rb(E(e));
}
function Mo(e, ...t) {
  const n = t.flat(), a = n[0];
  return Fb(() => Object.fromEntries(typeof a == "function" ? Object.entries(pe(e)).filter(([o, s]) => !a(ze(s), o)) : Object.entries(pe(e)).filter((o) => !n.includes(o[0]))));
}
const Tt = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const qb = (e) => typeof e < "u", Lb = Object.prototype.toString, Vb = (e) => Lb.call(e) === "[object Object]", Fl = () => {
}, ql = /* @__PURE__ */ Nb();
function Nb() {
  var e, t;
  return Tt && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function zb(e, t) {
  function n(...a) {
    return new Promise((o, s) => {
      Promise.resolve(e(() => t.apply(this, a), { fn: t, thisArg: this, args: a })).then(o).catch(s);
    });
  }
  return n;
}
function Kb(e, t = {}) {
  let n, a, o = Fl;
  const s = (u) => {
    clearTimeout(u), o(), o = Fl;
  };
  let l;
  return (u) => {
    const d = ze(e), p = ze(t.maxWait);
    return n && s(n), d <= 0 || p !== void 0 && p <= 0 ? (a && (s(a), a = null), Promise.resolve(u())) : new Promise((c, f) => {
      o = t.rejectOnCancel ? f : c, l = u, p && !a && (a = setTimeout(() => {
        n && s(n), a = null, c(l());
      }, p)), n = setTimeout(() => {
        a && s(a), a = null, c(u());
      }, d);
    });
  };
}
function jb(e) {
  return nt();
}
function or(e) {
  return Array.isArray(e) ? e : [e];
}
function Ro(e, t = 1e4) {
  return qr((n, a) => {
    let o = ze(e), s;
    const l = () => setTimeout(() => {
      o = ze(e), a();
    }, ze(t));
    return Aa(() => {
      clearTimeout(s);
    }), {
      get() {
        return n(), o;
      },
      set(i) {
        o = i, a(), clearTimeout(s), s = l();
      }
    };
  });
}
function Hb(e, t = 200, n = {}) {
  return zb(
    Kb(t, n),
    e
  );
}
function Wb(e, t) {
  jb() && Wn(e, t);
}
function Ub(e, t, n) {
  return ae(
    e,
    t,
    {
      ...n,
      immediate: !0
    }
  );
}
const Fo = Tt ? window : void 0;
function Dt(e) {
  var t;
  const n = ze(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
function ya(...e) {
  const t = [], n = () => {
    t.forEach((i) => i()), t.length = 0;
  }, a = (i, u, d, p) => (i.addEventListener(u, d, p), () => i.removeEventListener(u, d, p)), o = E(() => {
    const i = or(ze(e[0])).filter((u) => u != null);
    return i.every((u) => typeof u != "string") ? i : void 0;
  }), s = Ub(
    () => {
      var i, u;
      return [
        (u = (i = o.value) == null ? void 0 : i.map((d) => Dt(d))) != null ? u : [Fo].filter((d) => d != null),
        or(ze(o.value ? e[1] : e[0])),
        or(r(o.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        ze(o.value ? e[3] : e[2])
      ];
    },
    ([i, u, d, p]) => {
      if (n(), !(i != null && i.length) || !(u != null && u.length) || !(d != null && d.length))
        return;
      const c = Vb(p) ? { ...p } : p;
      t.push(
        ...i.flatMap(
          (f) => u.flatMap(
            (m) => d.map((v) => a(f, m, v, c))
          )
        )
      );
    },
    { flush: "post" }
  ), l = () => {
    s(), n();
  };
  return Aa(n), l;
}
function ad() {
  const e = pt(!1), t = nt();
  return t && de(() => {
    e.value = !0;
  }, t), e;
}
function Gb(e) {
  const t = ad();
  return E(() => (t.value, !!e()));
}
function Yb(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function Xb(...e) {
  let t, n, a = {};
  e.length === 3 ? (t = e[0], n = e[1], a = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], a = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: o = Fo,
    eventName: s = "keydown",
    passive: l = !1,
    dedupe: i = !1
  } = a, u = Yb(t);
  return ya(o, s, (p) => {
    p.repeat && ze(i) || u(p) && n(p);
  }, l);
}
function Zb(e) {
  return JSON.parse(JSON.stringify(e));
}
function co(e, t, n = {}) {
  const { window: a = Fo, ...o } = n;
  let s;
  const l = Gb(() => a && "ResizeObserver" in a), i = () => {
    s && (s.disconnect(), s = void 0);
  }, u = E(() => {
    const c = ze(e);
    return Array.isArray(c) ? c.map((f) => Dt(f)) : [Dt(c)];
  }), d = ae(
    u,
    (c) => {
      if (i(), l.value && a) {
        s = new ResizeObserver(t);
        for (const f of c)
          f && s.observe(f, o);
      }
    },
    { immediate: !0, flush: "post" }
  ), p = () => {
    i(), d();
  };
  return Aa(p), {
    isSupported: l,
    stop: p
  };
}
function st(e, t, n, a = {}) {
  var o, s, l;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: p = !1,
    defaultValue: c,
    shouldEmit: f
  } = a, m = nt(), v = n || (m == null ? void 0 : m.emit) || ((o = m == null ? void 0 : m.$emit) == null ? void 0 : o.bind(m)) || ((l = (s = m == null ? void 0 : m.proxy) == null ? void 0 : s.$emit) == null ? void 0 : l.bind(m == null ? void 0 : m.proxy));
  let h = d;
  t || (t = "modelValue"), h = h || `update:${t.toString()}`;
  const x = (B) => i ? typeof i == "function" ? i(B) : Zb(B) : B, C = () => qb(e[t]) ? x(e[t]) : c, S = (B) => {
    f ? f(B) && v(h, B) : v(h, B);
  };
  if (u) {
    const B = C(), P = $(B);
    let O = !1;
    return ae(
      () => e[t],
      (I) => {
        O || (O = !0, P.value = x(I), re(() => O = !1));
      }
    ), ae(
      P,
      (I) => {
        !O && (I !== e[t] || p) && S(I);
      },
      { deep: p }
    ), P;
  } else
    return E({
      get() {
        return C();
      },
      set(B) {
        S(B);
      }
    });
}
function rr(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function $r(e, t, n = ".", a) {
  if (!rr(t))
    return $r(e, {}, n, a);
  const o = Object.assign({}, t);
  for (const s in e) {
    if (s === "__proto__" || s === "constructor")
      continue;
    const l = e[s];
    l != null && (a && a(o, s, l, n) || (Array.isArray(l) && Array.isArray(o[s]) ? o[s] = [...l, ...o[s]] : rr(l) && rr(o[s]) ? o[s] = $r(
      l,
      o[s],
      (n ? `${n}.` : "") + s.toString(),
      a
    ) : o[s] = l));
  }
  return o;
}
function Qb(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, a) => $r(n, a, "", e), {})
  );
}
const Jb = Qb(), e0 = nd(() => {
  const e = $(/* @__PURE__ */ new Map()), t = $(), n = E(() => {
    for (const l of e.value.values()) if (l) return !0;
    return !1;
  }), a = Io({ scrollBody: $(!0) });
  let o = null;
  const s = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.documentElement.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", ql && (o == null || o()), t.value = void 0;
  };
  return ae(n, (l, i) => {
    var c;
    if (!Tt) return;
    if (!l) {
      i && s();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const u = window.innerWidth - document.documentElement.clientWidth, d = {
      padding: u,
      margin: 0
    }, p = (c = a.scrollBody) != null && c.value ? typeof a.scrollBody.value == "object" ? Jb({
      padding: a.scrollBody.value.padding === !0 ? u : a.scrollBody.value.padding,
      margin: a.scrollBody.value.margin === !0 ? u : a.scrollBody.value.margin
    }, d) : d : {
      padding: 0,
      margin: 0
    };
    u > 0 && (document.body.style.paddingRight = typeof p.padding == "number" ? `${p.padding}px` : String(p.padding), document.body.style.marginRight = typeof p.margin == "number" ? `${p.margin}px` : String(p.margin), document.documentElement.style.setProperty("--scrollbar-width", `${u}px`), document.body.style.overflow = "hidden"), ql && (o = ya(document, "touchmove", (f) => t0(f), { passive: !1 })), re(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, {
    immediate: !0,
    flush: "sync"
  }), e;
});
function ks(e) {
  const t = Math.random().toString(36).substring(2, 7), n = e0();
  n.value.set(t, e ?? !1);
  const a = E({
    get: () => n.value.get(t) ?? !1,
    set: (o) => n.value.set(t, o)
  });
  return Wb(() => {
    n.value.delete(t);
  }), a;
}
function od(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight) return !0;
  {
    const n = e.parentNode;
    return !(n instanceof Element) || n.tagName === "BODY" ? !1 : od(n);
  }
}
function t0(e) {
  const t = e || window.event, n = t.target;
  return n instanceof Element && od(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
function aa(e) {
  const t = Io({ dir: $("ltr") });
  return E(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.dir) == null ? void 0 : n.value) || "ltr";
  });
}
function dn(e) {
  const t = nt(), n = t == null ? void 0 : t.type.emits, a = {};
  return n != null && n.length || console.warn(`No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`), n == null || n.forEach((o) => {
    a[ai(mo(o))] = (...s) => e(o, ...s);
  }), a;
}
function n0(e) {
  const t = E(() => r(e)), n = E(() => new Intl.Collator("en", {
    usage: "search",
    ...t.value
  }));
  return {
    startsWith: (l, i) => i.length === 0 ? !0 : (l = l.normalize("NFC"), i = i.normalize("NFC"), n.value.compare(l.slice(0, i.length), i) === 0),
    endsWith: (l, i) => i.length === 0 ? !0 : (l = l.normalize("NFC"), i = i.normalize("NFC"), n.value.compare(l.slice(-i.length), i) === 0),
    contains: (l, i) => {
      if (i.length === 0) return !0;
      l = l.normalize("NFC"), i = i.normalize("NFC");
      let u = 0;
      const d = i.length;
      for (; u + d <= l.length; u++) {
        const p = l.slice(u, u + d);
        if (n.value.compare(i, p) === 0) return !0;
      }
      return !1;
    }
  };
}
let sr = 0;
function a0() {
  _e((e) => {
    if (!Tt) return;
    const t = document.querySelectorAll("[data-reka-focus-guard]");
    document.body.insertAdjacentElement("afterbegin", t[0] ?? Ll()), document.body.insertAdjacentElement("beforeend", t[1] ?? Ll()), sr++, e(() => {
      sr === 1 && document.querySelectorAll("[data-reka-focus-guard]").forEach((n) => n.remove()), sr--;
    });
  });
}
function Ll() {
  const e = document.createElement("span");
  return e.setAttribute("data-reka-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
function rd(e) {
  return E(() => {
    var t;
    return ze(e) ? !!((t = Dt(e)) != null && t.closest("form")) : !0;
  });
}
function oe() {
  const e = nt(), t = $(), n = E(() => {
    var l, i;
    return ["#text", "#comment"].includes((l = t.value) == null ? void 0 : l.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : Dt(t);
  }), a = Object.assign({}, e.exposed), o = {};
  for (const l in e.props) Object.defineProperty(o, l, {
    enumerable: !0,
    configurable: !0,
    get: () => e.props[l]
  });
  if (Object.keys(a).length > 0) for (const l in a) Object.defineProperty(o, l, {
    enumerable: !0,
    configurable: !0,
    get: () => a[l]
  });
  Object.defineProperty(o, "$el", {
    enumerable: !0,
    configurable: !0,
    get: () => e.vnode.el
  }), e.exposed = o;
  function s(l) {
    if (t.value = l, !!l && (Object.defineProperty(o, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => l instanceof Element ? l : l.$el
    }), !(l instanceof Element) && !Object.hasOwn(l, "$el"))) {
      const i = l.$.exposed, u = Object.assign({}, o);
      for (const d in i) Object.defineProperty(u, d, {
        enumerable: !0,
        configurable: !0,
        get: () => i[d]
      });
      e.exposed = u;
    }
  }
  return {
    forwardRef: s,
    currentRef: t,
    currentElement: n
  };
}
function Ye(e) {
  const t = nt(), n = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((o, s) => {
    const l = (t == null ? void 0 : t.type.props[s]).default;
    return l !== void 0 && (o[s] = l), o;
  }, {}), a = Ar(e);
  return E(() => {
    const o = {}, s = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(s).forEach((l) => {
      o[mo(l)] = s[l];
    }), Object.keys({
      ...n,
      ...o
    }).reduce((l, i) => (a.value[i] !== void 0 && (l[i] = a.value[i]), l), {});
  });
}
function ke(e, t) {
  const n = Ye(e), a = t ? dn(t) : {};
  return E(() => ({
    ...n.value,
    ...a
  }));
}
var o0 = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Mn = /* @__PURE__ */ new WeakMap(), Wa = /* @__PURE__ */ new WeakMap(), Ua = {}, lr = 0, sd = function(e) {
  return e && (e.host || sd(e.parentNode));
}, r0 = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var a = sd(n);
    return a && e.contains(a) ? a : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, s0 = function(e, t, n, a) {
  var o = r0(t, Array.isArray(e) ? e : [e]);
  Ua[n] || (Ua[n] = /* @__PURE__ */ new WeakMap());
  var s = Ua[n], l = [], i = /* @__PURE__ */ new Set(), u = new Set(o), d = function(c) {
    !c || i.has(c) || (i.add(c), d(c.parentNode));
  };
  o.forEach(d);
  var p = function(c) {
    !c || u.has(c) || Array.prototype.forEach.call(c.children, function(f) {
      if (i.has(f))
        p(f);
      else
        try {
          var m = f.getAttribute(a), v = m !== null && m !== "false", h = (Mn.get(f) || 0) + 1, x = (s.get(f) || 0) + 1;
          Mn.set(f, h), s.set(f, x), l.push(f), h === 1 && v && Wa.set(f, !0), x === 1 && f.setAttribute(n, "true"), v || f.setAttribute(a, "true");
        } catch (C) {
          console.error("aria-hidden: cannot operate on ", f, C);
        }
    });
  };
  return p(t), i.clear(), lr++, function() {
    l.forEach(function(c) {
      var f = Mn.get(c) - 1, m = s.get(c) - 1;
      Mn.set(c, f), s.set(c, m), f || (Wa.has(c) || c.removeAttribute(a), Wa.delete(c)), m || c.removeAttribute(n);
    }), lr--, lr || (Mn = /* @__PURE__ */ new WeakMap(), Mn = /* @__PURE__ */ new WeakMap(), Wa = /* @__PURE__ */ new WeakMap(), Ua = {});
  };
}, l0 = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var a = Array.from(Array.isArray(e) ? e : [e]), o = o0(e);
  return o ? (a.push.apply(a, Array.from(o.querySelectorAll("[aria-live], script"))), s0(a, o, n, "aria-hidden")) : function() {
    return null;
  };
};
function Ts(e) {
  let t;
  ae(() => Dt(e), (n) => {
    n ? t = l0(n) : t && t();
  }), Ke(() => {
    t && t();
  });
}
let i0 = 0;
function it(e, t = "reka") {
  var a;
  if (e) return e;
  if ("useId" in Fn) return `${t}-${(a = Fn.useId) == null ? void 0 : a.call(Fn)}`;
  const n = Io({ useId: void 0 });
  return n.useId ? `${t}-${n.useId()}` : `${t}-${++i0}`;
}
function u0() {
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
function d0(e) {
  const t = $(), n = E(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.width) ?? 0;
  }), a = E(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.height) ?? 0;
  });
  return de(() => {
    const o = Dt(e);
    if (o) {
      t.value = {
        width: o.offsetWidth,
        height: o.offsetHeight
      };
      const s = new ResizeObserver((l) => {
        if (!Array.isArray(l) || !l.length) return;
        const i = l[0];
        let u, d;
        if ("borderBoxSize" in i) {
          const p = i.borderBoxSize, c = Array.isArray(p) ? p[0] : p;
          u = c.inlineSize, d = c.blockSize;
        } else
          u = o.offsetWidth, d = o.offsetHeight;
        t.value = {
          width: u,
          height: d
        };
      });
      return s.observe(o, { box: "border-box" }), () => s.unobserve(o);
    } else t.value = void 0;
  }), {
    width: n,
    height: a
  };
}
function c0(e, t) {
  const n = $(e);
  function a(s) {
    return t[n.value][s] ?? n.value;
  }
  return {
    state: n,
    dispatch: (s) => {
      n.value = a(s);
    }
  };
}
function ld(e) {
  const t = Ro("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (o, s) => {
      t.value = t.value + o;
      {
        const l = We(), i = s.map((f) => {
          var m, v;
          return {
            ...f,
            textValue: ((m = f.value) == null ? void 0 : m.textValue) ?? ((v = f.ref.textContent) == null ? void 0 : v.trim()) ?? ""
          };
        }), u = i.find((f) => f.ref === l), d = i.map((f) => f.textValue), p = f0(d, t.value, u == null ? void 0 : u.textValue), c = i.find((f) => f.textValue === p);
        return c && c.ref.focus(), c == null ? void 0 : c.ref;
      }
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function p0(e, t) {
  return e.map((n, a) => e[(t + a) % e.length]);
}
function f0(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let l = p0(e, Math.max(s, 0));
  o.length === 1 && (l = l.filter((d) => d !== n));
  const u = l.find((d) => d.toLowerCase().startsWith(o.toLowerCase()));
  return u !== n ? u : void 0;
}
function v0(e, t) {
  var x;
  const n = $({}), a = $("none"), o = $(e), s = e.value ? "mounted" : "unmounted";
  let l;
  const i = ((x = t.value) == null ? void 0 : x.ownerDocument.defaultView) ?? Fo, { state: u, dispatch: d } = c0(s, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: { MOUNT: "mounted" }
  }), p = (C) => {
    var S;
    if (Tt) {
      const B = new CustomEvent(C, {
        bubbles: !1,
        cancelable: !1
      });
      (S = t.value) == null || S.dispatchEvent(B);
    }
  };
  ae(e, async (C, S) => {
    var P;
    const B = S !== C;
    if (await re(), B) {
      const O = a.value, I = Ga(t.value);
      C ? (d("MOUNT"), p("enter"), I === "none" && p("after-enter")) : I === "none" || I === "undefined" || ((P = n.value) == null ? void 0 : P.display) === "none" ? (d("UNMOUNT"), p("leave"), p("after-leave")) : S && O !== I ? (d("ANIMATION_OUT"), p("leave")) : (d("UNMOUNT"), p("after-leave"));
    }
  }, { immediate: !0 });
  const c = (C) => {
    const S = Ga(t.value), B = S.includes(CSS.escape(C.animationName)), P = u.value === "mounted" ? "enter" : "leave";
    if (C.target === t.value && B && (p(`after-${P}`), d("ANIMATION_END"), !o.value)) {
      const O = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", l = i == null ? void 0 : i.setTimeout(() => {
        var I;
        ((I = t.value) == null ? void 0 : I.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = O);
      });
    }
    C.target === t.value && S === "none" && d("ANIMATION_END");
  }, f = (C) => {
    C.target === t.value && (a.value = Ga(t.value));
  }, m = ae(t, (C, S) => {
    C ? (n.value = getComputedStyle(C), C.addEventListener("animationstart", f), C.addEventListener("animationcancel", c), C.addEventListener("animationend", c)) : (d("ANIMATION_END"), l !== void 0 && (i == null || i.clearTimeout(l)), S == null || S.removeEventListener("animationstart", f), S == null || S.removeEventListener("animationcancel", c), S == null || S.removeEventListener("animationend", c));
  }, { immediate: !0 }), v = ae(u, () => {
    const C = Ga(t.value);
    a.value = u.value === "mounted" ? C : "none";
  });
  return Ke(() => {
    m(), v();
  }), { isPresent: E(() => ["mounted", "unmountSuspended"].includes(u.value)) };
}
function Ga(e) {
  return e && getComputedStyle(e).animationName || "none";
}
var $t = b({
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
    const { present: a, forceMount: o } = pe(e), s = $(), { isPresent: l } = v0(a, s);
    n({ present: l });
    let i = t.default({ present: l.value });
    i = Es(i || []);
    const u = nt();
    if (i && (i == null ? void 0 : i.length) > 1) {
      const p = (d = u == null ? void 0 : u.parent) != null && d.type.name ? `<${u.parent.type.name} />` : "component";
      throw new Error([
        `Detected an invalid children for \`${p}\` for  \`Presence\` component.`,
        "",
        "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",
        "You can apply a few solutions:",
        ["Provide a single child element so that `presence` directive attach correctly.", "Ensure the first child is an actual element instead of a raw text node or comment node."].map((c) => `  - ${c}`).join(`
`)
      ].join(`
`));
    }
    return () => o.value || a.value || l.value ? ot(t.default({ present: l.value })[0], { ref: (p) => {
      const c = Dt(p);
      return typeof (c == null ? void 0 : c.hasAttribute) > "u" || (c != null && c.hasAttribute("data-reka-popper-content-wrapper") ? s.value = c.firstElementChild : s.value = c), c;
    } }) : null;
  }
});
const Or = b({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      var u;
      if (!n.default) return null;
      const a = Es(n.default()), o = a.findIndex((d) => d.type !== Rr);
      if (o === -1) return a;
      const s = a[o];
      (u = s.props) == null || delete u.ref;
      const l = s.props ? T(t, s.props) : t, i = oi({
        ...s,
        props: {}
      }, l);
      return a.length === 1 ? i : (a[o] = i, a);
    };
  }
}), m0 = [
  "area",
  "img",
  "input"
], ue = b({
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
    return typeof a == "string" && m0.includes(a) ? () => ot(a, t) : a !== "template" ? () => ot(e.as, t, { default: n.default }) : () => ot(Or, t, { default: n.default });
  }
});
function rn() {
  const e = $(), t = E(() => {
    var n, a;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (a = e.value) == null ? void 0 : a.$el.nextElementSibling : Dt(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
const [id, g0] = Le("CollapsibleRoot");
var h0 = /* @__PURE__ */ b({
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
    const a = e, s = st(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), { disabled: l, unmountOnHide: i } = pe(a);
    return g0({
      contentId: "",
      disabled: l,
      open: s,
      unmountOnHide: i,
      onOpenToggle: () => {
        l.value || (s.value = !s.value);
      }
    }), t({ open: s }), oe(), (u, d) => (g(), w(r(ue), {
      as: u.as,
      "as-child": a.asChild,
      "data-state": r(s) ? "open" : "closed",
      "data-disabled": r(l) ? "" : void 0
    }, {
      default: y(() => [_(u.$slots, "default", { open: r(s) })]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "data-state",
      "data-disabled"
    ]));
  }
}), y0 = h0, b0 = /* @__PURE__ */ b({
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
    const n = e, a = t, o = id();
    o.contentId || (o.contentId = it(void 0, "reka-collapsible-content"));
    const s = $(), { forwardRef: l, currentElement: i } = oe(), u = $(0), d = $(0), p = E(() => o.open.value), c = $(p.value), f = $();
    ae(() => {
      var v;
      return [p.value, (v = s.value) == null ? void 0 : v.present];
    }, async () => {
      await re();
      const v = i.value;
      if (!v) return;
      f.value = f.value || {
        transitionDuration: v.style.transitionDuration,
        animationName: v.style.animationName
      }, v.style.transitionDuration = "0s", v.style.animationName = "none";
      const h = v.getBoundingClientRect();
      d.value = h.height, u.value = h.width, c.value || (v.style.transitionDuration = f.value.transitionDuration, v.style.animationName = f.value.animationName);
    }, { immediate: !0 });
    const m = E(() => c.value && o.open.value);
    return de(() => {
      requestAnimationFrame(() => {
        c.value = !1;
      });
    }), ya(i, "beforematch", (v) => {
      requestAnimationFrame(() => {
        o.onOpenToggle(), a("contentFound");
      });
    }), (v, h) => (g(), w(r($t), {
      ref_key: "presentRef",
      ref: s,
      present: v.forceMount || r(o).open.value,
      "force-mount": !0
    }, {
      default: y(({ present: x }) => {
        var C;
        return [R(r(ue), T(v.$attrs, {
          id: r(o).contentId,
          ref: r(l),
          "as-child": n.asChild,
          as: v.as,
          hidden: x ? void 0 : r(o).unmountOnHide.value ? "" : "until-found",
          "data-state": m.value ? void 0 : r(o).open.value ? "open" : "closed",
          "data-disabled": (C = r(o).disabled) != null && C.value ? "" : void 0,
          style: {
            "--reka-collapsible-content-height": `${d.value}px`,
            "--reka-collapsible-content-width": `${u.value}px`
          }
        }), {
          default: y(() => [!r(o).unmountOnHide.value || x ? _(v.$slots, "default", { key: 0 }) : fe("v-if", !0)]),
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
}), _0 = b0, w0 = /* @__PURE__ */ b({
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
    oe();
    const n = id();
    return (a, o) => {
      var s, l;
      return g(), w(r(ue), {
        type: a.as === "button" ? "button" : void 0,
        as: a.as,
        "as-child": t.asChild,
        "aria-controls": r(n).contentId,
        "aria-expanded": r(n).open.value,
        "data-state": r(n).open.value ? "open" : "closed",
        "data-disabled": (s = r(n).disabled) != null && s.value ? "" : void 0,
        disabled: (l = r(n).disabled) == null ? void 0 : l.value,
        onClick: r(n).onOpenToggle
      }, {
        default: y(() => [_(a.$slots, "default")]),
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
}), x0 = w0;
const [Rt, C0] = Le("DialogRoot");
var B0 = /* @__PURE__ */ b({
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
    const n = e, o = st(n, "open", t, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), s = $(), l = $(), { modal: i } = pe(n);
    return C0({
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
      triggerElement: s,
      contentElement: l
    }), (u, d) => _(u.$slots, "default", {
      open: r(o),
      close: () => o.value = !1
    });
  }
}), S0 = B0, $0 = /* @__PURE__ */ b({
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
    oe();
    const n = Rt();
    return (a, o) => (g(), w(r(ue), T(t, {
      type: a.as === "button" ? "button" : void 0,
      onClick: o[0] || (o[0] = (s) => r(n).onOpenChange(!1))
    }), {
      default: y(() => [_(a.$slots, "default")]),
      _: 3
    }, 16, ["type"]));
  }
}), O0 = $0;
const E0 = "dismissableLayer.pointerDownOutside", P0 = "dismissableLayer.focusOutside";
function ud(e, t) {
  const n = t.closest("[data-dismissable-layer]"), a = e.dataset.dismissableLayer === "" ? e : e.querySelector("[data-dismissable-layer]"), o = Array.from(e.ownerDocument.querySelectorAll("[data-dismissable-layer]"));
  return !!(n && (a === n || o.indexOf(a) < o.indexOf(n)));
}
function k0(e, t, n = !0) {
  var l;
  const a = ((l = t == null ? void 0 : t.value) == null ? void 0 : l.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = $(!1), s = $(() => {
  });
  return _e((i) => {
    if (!Tt || !ze(n)) return;
    const u = async (p) => {
      const c = p.target;
      if (!(!(t != null && t.value) || !c)) {
        if (ud(t.value, c)) {
          o.value = !1;
          return;
        }
        if (p.target && !o.value) {
          let m = function() {
            Os(E0, e, f);
          };
          const f = { originalEvent: p };
          p.pointerType === "touch" ? (a.removeEventListener("click", s.value), s.value = m, a.addEventListener("click", s.value, { once: !0 })) : m();
        } else a.removeEventListener("click", s.value);
        o.value = !1;
      }
    }, d = window.setTimeout(() => {
      a.addEventListener("pointerdown", u);
    }, 0);
    i(() => {
      window.clearTimeout(d), a.removeEventListener("pointerdown", u), a.removeEventListener("click", s.value);
    });
  }), { onPointerDownCapture: () => {
    ze(n) && (o.value = !0);
  } };
}
function T0(e, t, n = !0) {
  var s;
  const a = ((s = t == null ? void 0 : t.value) == null ? void 0 : s.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = $(!1);
  return _e((l) => {
    if (!Tt || !ze(n)) return;
    const i = async (u) => {
      if (!(t != null && t.value)) return;
      await re(), await re();
      const d = u.target;
      !t.value || !d || ud(t.value, d) || u.target && !o.value && Os(P0, e, { originalEvent: u });
    };
    a.addEventListener("focusin", i), l(() => a.removeEventListener("focusin", i));
  }), {
    onFocusCapture: () => {
      ze(n) && (o.value = !0);
    },
    onBlurCapture: () => {
      ze(n) && (o.value = !1);
    }
  };
}
const mt = gt({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  originalBodyPointerEvents: void 0,
  branches: /* @__PURE__ */ new Set()
});
var D0 = /* @__PURE__ */ b({
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
    const n = e, a = t, { forwardRef: o, currentElement: s } = oe(), l = E(() => {
      var m;
      return ((m = s.value) == null ? void 0 : m.ownerDocument) ?? globalThis.document;
    }), i = E(() => mt.layersRoot), u = E(() => s.value ? Array.from(i.value).indexOf(s.value) : -1), d = E(() => mt.layersWithOutsidePointerEventsDisabled.size > 0), p = E(() => {
      const m = Array.from(i.value), [v] = [...mt.layersWithOutsidePointerEventsDisabled].slice(-1), h = m.indexOf(v);
      return u.value >= h;
    }), c = k0(async (m) => {
      const v = [...mt.branches].some((h) => h == null ? void 0 : h.contains(m.target));
      !p.value || v || (a("pointerDownOutside", m), a("interactOutside", m), await re(), m.defaultPrevented || a("dismiss"));
    }, s), f = T0((m) => {
      [...mt.branches].some((h) => h == null ? void 0 : h.contains(m.target)) || (a("focusOutside", m), a("interactOutside", m), m.defaultPrevented || a("dismiss"));
    }, s);
    return Xb("Escape", (m) => {
      u.value === i.value.size - 1 && (a("escapeKeyDown", m), m.defaultPrevented || a("dismiss"));
    }), _e((m) => {
      s.value && (n.disableOutsidePointerEvents && (mt.layersWithOutsidePointerEventsDisabled.size === 0 && (mt.originalBodyPointerEvents = l.value.body.style.pointerEvents, l.value.body.style.pointerEvents = "none"), mt.layersWithOutsidePointerEventsDisabled.add(s.value)), i.value.add(s.value), m(() => {
        n.disableOutsidePointerEvents && mt.layersWithOutsidePointerEventsDisabled.size === 1 && !uo(mt.originalBodyPointerEvents) && (l.value.body.style.pointerEvents = mt.originalBodyPointerEvents);
      }));
    }), _e((m) => {
      m(() => {
        s.value && (i.value.delete(s.value), mt.layersWithOutsidePointerEventsDisabled.delete(s.value));
      });
    }), (m, v) => (g(), w(r(ue), {
      ref: r(o),
      "as-child": m.asChild,
      as: m.as,
      "data-dismissable-layer": "",
      style: at({ pointerEvents: d.value ? p.value ? "auto" : "none" : void 0 }),
      onFocusCapture: r(f).onFocusCapture,
      onBlurCapture: r(f).onBlurCapture,
      onPointerdownCapture: r(c).onPointerDownCapture
    }, {
      default: y(() => [_(m.$slots, "default")]),
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
}), qo = D0;
const A0 = Mb(() => $([]));
function I0() {
  const e = A0();
  return {
    add(t) {
      const n = e.value[0];
      t !== n && (n == null || n.pause()), e.value = Vl(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var n;
      e.value = Vl(e.value, t), (n = e.value[0]) == null || n.resume();
    }
  };
}
function Vl(e, t) {
  const n = [...e], a = n.indexOf(t);
  return a !== -1 && n.splice(a, 1), n;
}
function M0(e) {
  return e.filter((t) => t.tagName !== "A");
}
const ir = "focusScope.autoFocusOnMount", ur = "focusScope.autoFocusOnUnmount", Nl = {
  bubbles: !1,
  cancelable: !0
};
function R0(e, { select: t = !1 } = {}) {
  const n = We();
  for (const a of e)
    if (tn(a, { select: t }), We() !== n) return !0;
}
function F0(e) {
  const t = dd(e), n = zl(t, e), a = zl(t.reverse(), e);
  return [n, a];
}
function dd(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (a) => {
    const o = a.tagName === "INPUT" && a.type === "hidden";
    return a.disabled || a.hidden || o ? NodeFilter.FILTER_SKIP : a.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function zl(e, t) {
  for (const n of e) if (!q0(n, { upTo: t })) return n;
}
function q0(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function L0(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function tn(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = We();
    e.focus({ preventScroll: !0 }), e !== n && L0(e) && t && e.select();
  }
}
var V0 = /* @__PURE__ */ b({
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
    const n = e, a = t, { currentRef: o, currentElement: s } = oe(), l = $(null), i = I0(), u = gt({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    _e((p) => {
      if (!Tt) return;
      const c = s.value;
      if (!n.trapped) return;
      function f(x) {
        if (u.paused || !c) return;
        const C = x.target;
        c.contains(C) ? l.value = C : tn(l.value, { select: !0 });
      }
      function m(x) {
        if (u.paused || !c) return;
        const C = x.relatedTarget;
        C !== null && (c.contains(C) || tn(l.value, { select: !0 }));
      }
      function v(x) {
        c.contains(l.value) || tn(c);
      }
      document.addEventListener("focusin", f), document.addEventListener("focusout", m);
      const h = new MutationObserver(v);
      c && h.observe(c, {
        childList: !0,
        subtree: !0
      }), p(() => {
        document.removeEventListener("focusin", f), document.removeEventListener("focusout", m), h.disconnect();
      });
    }), _e(async (p) => {
      const c = s.value;
      if (await re(), !c) return;
      i.add(u);
      const f = We();
      if (!c.contains(f)) {
        const v = new CustomEvent(ir, Nl);
        c.addEventListener(ir, (h) => a("mountAutoFocus", h)), c.dispatchEvent(v), v.defaultPrevented || (R0(M0(dd(c)), { select: !0 }), We() === f && tn(c));
      }
      p(() => {
        c.removeEventListener(ir, (x) => a("mountAutoFocus", x));
        const v = new CustomEvent(ur, Nl), h = (x) => {
          a("unmountAutoFocus", x);
        };
        c.addEventListener(ur, h), c.dispatchEvent(v), setTimeout(() => {
          v.defaultPrevented || tn(f ?? document.body, { select: !0 }), c.removeEventListener(ur, h), i.remove(u);
        }, 0);
      });
    });
    function d(p) {
      if (!n.loop && !n.trapped || u.paused) return;
      const c = p.key === "Tab" && !p.altKey && !p.ctrlKey && !p.metaKey, f = We();
      if (c && f) {
        const m = p.currentTarget, [v, h] = F0(m);
        v && h ? !p.shiftKey && f === h ? (p.preventDefault(), n.loop && tn(v, { select: !0 })) : p.shiftKey && f === v && (p.preventDefault(), n.loop && tn(h, { select: !0 })) : f === m && p.preventDefault();
      }
    }
    return (p, c) => (g(), w(r(ue), {
      ref_key: "currentRef",
      ref: o,
      tabindex: "-1",
      "as-child": p.asChild,
      as: p.as,
      onKeydown: d
    }, {
      default: y(() => [_(p.$slots, "default")]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), cd = V0;
const N0 = "menu.itemSelect", Er = ["Enter", " "], z0 = [
  "ArrowDown",
  "PageUp",
  "Home"
], pd = [
  "ArrowUp",
  "PageDown",
  "End"
], K0 = [...z0, ...pd], j0 = {
  ltr: [...Er, "ArrowRight"],
  rtl: [...Er, "ArrowLeft"]
}, H0 = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function Ds(e) {
  return e ? "open" : "closed";
}
function po(e) {
  return e === "indeterminate";
}
function As(e) {
  return po(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function W0(e) {
  const t = We();
  for (const n of e)
    if (n === t || (n.focus(), We() !== t)) return;
}
function U0(e, t) {
  const { x: n, y: a } = e;
  let o = !1;
  for (let s = 0, l = t.length - 1; s < t.length; l = s++) {
    const i = t[s].x, u = t[s].y, d = t[l].x, p = t[l].y;
    u > a != p > a && n < (d - i) * (a - u) / (p - u) + i && (o = !o);
  }
  return o;
}
function G0(e, t) {
  if (!t) return !1;
  const n = {
    x: e.clientX,
    y: e.clientY
  };
  return U0(n, t);
}
function ba(e) {
  return e.pointerType === "mouse";
}
const Y0 = "DialogTitle", X0 = "DialogContent";
function Z0({ titleName: e = Y0, contentName: t = X0, componentLink: n = "dialog.html#title", titleId: a, descriptionId: o, contentElement: s }) {
  const l = `Warning: \`${t}\` requires a \`${e}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.reka-ui.com/docs/components/${n}`, i = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${t}.`;
  de(() => {
    var p;
    document.getElementById(a) || console.warn(l);
    const d = (p = s.value) == null ? void 0 : p.getAttribute("aria-describedby");
    o && d && (document.getElementById(o) || console.warn(i));
  });
}
var Q0 = /* @__PURE__ */ b({
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
    const n = e, a = t, o = Rt(), { forwardRef: s, currentElement: l } = oe();
    return o.titleId || (o.titleId = it(void 0, "reka-dialog-title")), o.descriptionId || (o.descriptionId = it(void 0, "reka-dialog-description")), de(() => {
      o.contentElement = l, We() !== document.body && (o.triggerElement.value = We());
    }), process.env.NODE_ENV !== "production" && Z0({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: o.titleId,
      descriptionId: o.descriptionId,
      contentElement: l
    }), (i, u) => (g(), w(r(cd), {
      "as-child": "",
      loop: "",
      trapped: n.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => a("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => a("closeAutoFocus", d))
    }, {
      default: y(() => [R(r(qo), T({
        id: r(o).contentId,
        ref: r(s),
        as: i.as,
        "as-child": i.asChild,
        "disable-outside-pointer-events": i.disableOutsidePointerEvents,
        role: "dialog",
        "aria-describedby": r(o).descriptionId,
        "aria-labelledby": r(o).titleId,
        "data-state": r(Ds)(r(o).open.value)
      }, i.$attrs, {
        onDismiss: u[0] || (u[0] = (d) => r(o).onOpenChange(!1)),
        onEscapeKeyDown: u[1] || (u[1] = (d) => a("escapeKeyDown", d)),
        onFocusOutside: u[2] || (u[2] = (d) => a("focusOutside", d)),
        onInteractOutside: u[3] || (u[3] = (d) => a("interactOutside", d)),
        onPointerDownOutside: u[4] || (u[4] = (d) => a("pointerDownOutside", d))
      }), {
        default: y(() => [_(i.$slots, "default")]),
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
}), fd = Q0, J0 = /* @__PURE__ */ b({
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
    const n = e, a = t, o = Rt(), s = dn(a), { forwardRef: l, currentElement: i } = oe();
    return Ts(i), (u, d) => (g(), w(fd, T({
      ...n,
      ...r(s)
    }, {
      ref: r(l),
      "trap-focus": r(o).open.value,
      "disable-outside-pointer-events": !0,
      onCloseAutoFocus: d[0] || (d[0] = (p) => {
        var c;
        p.defaultPrevented || (p.preventDefault(), (c = r(o).triggerElement.value) == null || c.focus());
      }),
      onPointerDownOutside: d[1] || (d[1] = (p) => {
        const c = p.detail.originalEvent, f = c.button === 0 && c.ctrlKey === !0;
        (c.button === 2 || f) && p.preventDefault();
      }),
      onFocusOutside: d[2] || (d[2] = (p) => {
        p.preventDefault();
      })
    }), {
      default: y(() => [_(u.$slots, "default")]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), e_ = J0, t_ = /* @__PURE__ */ b({
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
    const n = e, o = dn(t);
    oe();
    const s = Rt(), l = $(!1), i = $(!1);
    return (u, d) => (g(), w(fd, T({
      ...n,
      ...r(o)
    }, {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: d[0] || (d[0] = (p) => {
        var c;
        p.defaultPrevented || (l.value || (c = r(s).triggerElement.value) == null || c.focus(), p.preventDefault()), l.value = !1, i.value = !1;
      }),
      onInteractOutside: d[1] || (d[1] = (p) => {
        var m;
        p.defaultPrevented || (l.value = !0, p.detail.originalEvent.type === "pointerdown" && (i.value = !0));
        const c = p.target;
        ((m = r(s).triggerElement.value) == null ? void 0 : m.contains(c)) && p.preventDefault(), p.detail.originalEvent.type === "focusin" && i.value && p.preventDefault();
      })
    }), {
      default: y(() => [_(u.$slots, "default")]),
      _: 3
    }, 16));
  }
}), n_ = t_, a_ = /* @__PURE__ */ b({
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
    const n = e, a = t, o = Rt(), s = dn(a), { forwardRef: l } = oe();
    return (i, u) => (g(), w(r($t), { present: i.forceMount || r(o).open.value }, {
      default: y(() => [r(o).modal.value ? (g(), w(e_, T({
        key: 0,
        ref: r(l)
      }, {
        ...n,
        ...r(s),
        ...i.$attrs
      }), {
        default: y(() => [_(i.$slots, "default")]),
        _: 3
      }, 16)) : (g(), w(n_, T({
        key: 1,
        ref: r(l)
      }, {
        ...n,
        ...r(s),
        ...i.$attrs
      }), {
        default: y(() => [_(i.$slots, "default")]),
        _: 3
      }, 16))]),
      _: 3
    }, 8, ["present"]));
  }
}), o_ = a_, r_ = /* @__PURE__ */ b({
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
    oe();
    const n = Rt();
    return (a, o) => (g(), w(r(ue), T(t, { id: r(n).descriptionId }), {
      default: y(() => [_(a.$slots, "default")]),
      _: 3
    }, 16, ["id"]));
  }
}), s_ = r_, l_ = /* @__PURE__ */ b({
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
    const t = Rt();
    return ks(!0), oe(), (n, a) => (g(), w(r(ue), {
      as: n.as,
      "as-child": n.asChild,
      "data-state": r(t).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" }
    }, {
      default: y(() => [_(n.$slots, "default")]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "data-state"
    ]));
  }
}), i_ = l_, u_ = /* @__PURE__ */ b({
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
    const t = Rt(), { forwardRef: n } = oe();
    return (a, o) => {
      var s;
      return (s = r(t)) != null && s.modal.value ? (g(), w(r($t), {
        key: 0,
        present: a.forceMount || r(t).open.value
      }, {
        default: y(() => [R(i_, T(a.$attrs, {
          ref: r(n),
          as: a.as,
          "as-child": a.asChild
        }), {
          default: y(() => [_(a.$slots, "default")]),
          _: 3
        }, 16, ["as", "as-child"])]),
        _: 3
      }, 8, ["present"])) : fe("v-if", !0);
    };
  }
}), d_ = u_, c_ = /* @__PURE__ */ b({
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
    const t = ad();
    return (n, a) => r(t) || n.forceMount ? (g(), w(hn, {
      key: 0,
      to: n.to,
      disabled: n.disabled,
      defer: n.defer
    }, [_(n.$slots, "default")], 8, [
      "to",
      "disabled",
      "defer"
    ])) : fe("v-if", !0);
  }
}), Is = c_, p_ = /* @__PURE__ */ b({
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
    return (n, a) => (g(), w(r(Is), H(U(t)), {
      default: y(() => [_(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), f_ = p_, v_ = /* @__PURE__ */ b({
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
    const t = e, n = Rt();
    return oe(), (a, o) => (g(), w(r(ue), T(t, { id: r(n).titleId }), {
      default: y(() => [_(a.$slots, "default")]),
      _: 3
    }, 16, ["id"]));
  }
}), m_ = v_, g_ = /* @__PURE__ */ b({
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
    const t = e, n = Rt(), { forwardRef: a, currentElement: o } = oe();
    return n.contentId || (n.contentId = it(void 0, "reka-dialog-content")), de(() => {
      n.triggerElement.value = o.value;
    }), (s, l) => (g(), w(r(ue), T(t, {
      ref: r(a),
      type: s.as === "button" ? "button" : void 0,
      "aria-haspopup": "dialog",
      "aria-expanded": r(n).open.value || !1,
      "aria-controls": r(n).open.value ? r(n).contentId : void 0,
      "data-state": r(n).open.value ? "open" : "closed",
      onClick: r(n).onOpenToggle
    }), {
      default: y(() => [_(s.$slots, "default")]),
      _: 3
    }, 16, [
      "type",
      "aria-expanded",
      "aria-controls",
      "data-state",
      "onClick"
    ]));
  }
}), h_ = g_;
const Kl = "data-reka-collection-item";
function Ot(e = {}) {
  const { key: t = "", isProvider: n = !1 } = e, a = `${t}CollectionProvider`;
  let o;
  if (n) {
    const p = $(/* @__PURE__ */ new Map());
    o = {
      collectionRef: $(),
      itemMap: p
    }, bn(a, o);
  } else o = yn(a);
  const s = (p = !1) => {
    const c = o.collectionRef.value;
    if (!c) return [];
    const f = Array.from(c.querySelectorAll(`[${Kl}]`)), v = Array.from(o.itemMap.value.values()).sort((h, x) => f.indexOf(h.ref) - f.indexOf(x.ref));
    return p ? v : v.filter((h) => h.ref.dataset.disabled !== "");
  }, l = b({
    name: "CollectionSlot",
    setup(p, { slots: c }) {
      const { primitiveElement: f, currentElement: m } = rn();
      return ae(m, () => {
        o.collectionRef.value = m.value;
      }), () => ot(Or, { ref: f }, c);
    }
  }), i = b({
    name: "CollectionItem",
    inheritAttrs: !1,
    props: { value: { validator: () => !0 } },
    setup(p, { slots: c, attrs: f }) {
      const { primitiveElement: m, currentElement: v } = rn();
      return _e((h) => {
        if (v.value) {
          const x = ri(v.value);
          o.itemMap.value.set(x, {
            ref: v.value,
            value: p.value
          }), h(() => o.itemMap.value.delete(x));
        }
      }), () => ot(Or, {
        ...f,
        [Kl]: "",
        ref: m
      }, c);
    }
  }), u = E(() => Array.from(o.itemMap.value.values())), d = E(() => o.itemMap.value.size);
  return {
    getItems: s,
    reactiveItems: u,
    itemMapSize: d,
    CollectionSlot: l,
    CollectionItem: i
  };
}
const y_ = "rovingFocusGroup.onEntryFocus", b_ = {
  bubbles: !1,
  cancelable: !0
}, __ = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function w_(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function vd(e, t, n) {
  const a = w_(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(a)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(a)))
    return __[a];
}
function md(e, t = !1) {
  const n = We();
  for (const a of e)
    if (a === n || (a.focus({ preventScroll: t }), We() !== n)) return;
}
function x_(e, t) {
  return e.map((n, a) => e[(t + a) % e.length]);
}
const [C_, B_] = Le("RovingFocusGroup");
var S_ = /* @__PURE__ */ b({
  __name: "RovingFocusGroup",
  props: {
    orientation: {
      type: String,
      required: !1,
      default: void 0
    },
    dir: {
      type: String,
      required: !1
    },
    loop: {
      type: Boolean,
      required: !1,
      default: !1
    },
    currentTabStopId: {
      type: [String, null],
      required: !1
    },
    defaultCurrentTabStopId: {
      type: String,
      required: !1
    },
    preventScrollOnEntryFocus: {
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
  emits: ["entryFocus", "update:currentTabStopId"],
  setup(e, { expose: t, emit: n }) {
    const a = e, o = n, { loop: s, orientation: l, dir: i } = pe(a), u = aa(i), d = st(a, "currentTabStopId", o, {
      defaultValue: a.defaultCurrentTabStopId,
      passive: a.currentTabStopId === void 0
    }), p = $(!1), c = $(!1), f = $(0), { getItems: m, CollectionSlot: v } = Ot({ isProvider: !0 });
    function h(C) {
      const S = !c.value;
      if (C.currentTarget && C.target === C.currentTarget && S && !p.value) {
        const B = new CustomEvent(y_, b_);
        if (C.currentTarget.dispatchEvent(B), o("entryFocus", B), !B.defaultPrevented) {
          const P = m().map((D) => D.ref).filter((D) => D.dataset.disabled !== ""), O = P.find((D) => D.getAttribute("data-active") === ""), I = P.find((D) => D.getAttribute("data-highlighted") === ""), k = P.find((D) => D.id === d.value), F = [
            O,
            I,
            k,
            ...P
          ].filter(Boolean);
          md(F, a.preventScrollOnEntryFocus);
        }
      }
      c.value = !1;
    }
    function x() {
      setTimeout(() => {
        c.value = !1;
      }, 1);
    }
    return t({ getItems: m }), B_({
      loop: s,
      dir: u,
      orientation: l,
      currentTabStopId: d,
      onItemFocus: (C) => {
        d.value = C;
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
    }), (C, S) => (g(), w(r(v), null, {
      default: y(() => [R(r(ue), {
        tabindex: p.value || f.value === 0 ? -1 : 0,
        "data-orientation": r(l),
        as: C.as,
        "as-child": C.asChild,
        dir: r(u),
        style: { outline: "none" },
        onMousedown: S[0] || (S[0] = (B) => c.value = !0),
        onMouseup: x,
        onFocus: h,
        onBlur: S[1] || (S[1] = (B) => p.value = !1)
      }, {
        default: y(() => [_(C.$slots, "default")]),
        _: 3
      }, 8, [
        "tabindex",
        "data-orientation",
        "as",
        "as-child",
        "dir"
      ])]),
      _: 3
    }));
  }
}), $_ = S_, O_ = /* @__PURE__ */ b({
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
    const t = e, n = C_(), a = it(), o = E(() => t.tabStopId || a), s = E(() => n.currentTabStopId.value === o.value), { getItems: l, CollectionItem: i } = Ot();
    de(() => {
      t.focusable && n.onFocusableItemAdd();
    }), Ke(() => {
      t.focusable && n.onFocusableItemRemove();
    });
    function u(d) {
      if (d.key === "Tab" && d.shiftKey) {
        n.onItemShiftTab();
        return;
      }
      if (d.target !== d.currentTarget) return;
      const p = vd(d, n.orientation.value, n.dir.value);
      if (p !== void 0) {
        if (d.metaKey || d.ctrlKey || d.altKey || !t.allowShiftKey && d.shiftKey) return;
        d.preventDefault();
        let c = [...l().map((f) => f.ref).filter((f) => f.dataset.disabled !== "")];
        if (p === "last") c.reverse();
        else if (p === "prev" || p === "next") {
          p === "prev" && c.reverse();
          const f = c.indexOf(d.currentTarget);
          c = n.loop.value ? x_(c, f + 1) : c.slice(f + 1);
        }
        re(() => md(c));
      }
    }
    return (d, p) => (g(), w(r(i), null, {
      default: y(() => [R(r(ue), {
        tabindex: s.value ? 0 : -1,
        "data-orientation": r(n).orientation.value,
        "data-active": d.active ? "" : void 0,
        "data-disabled": d.focusable ? void 0 : "",
        as: d.as,
        "as-child": d.asChild,
        onMousedown: p[0] || (p[0] = (c) => {
          d.focusable ? r(n).onItemFocus(o.value) : c.preventDefault();
        }),
        onFocus: p[1] || (p[1] = (c) => r(n).onItemFocus(o.value)),
        onKeydown: u
      }, {
        default: y(() => [_(d.$slots, "default")]),
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
}), E_ = O_, P_ = /* @__PURE__ */ b({
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
    return (t, n) => (g(), w(r(ue), {
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
      default: y(() => [_(t.$slots, "default")]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "aria-hidden",
      "data-hidden",
      "tabindex"
    ]));
  }
}), gd = P_, k_ = /* @__PURE__ */ b({
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
    const t = e, { primitiveElement: n, currentElement: a } = rn(), o = E(() => t.checked ?? t.value);
    return ae(o, (s, l) => {
      if (!a.value) return;
      const i = a.value, u = window.HTMLInputElement.prototype, p = Object.getOwnPropertyDescriptor(u, "value").set;
      if (p && s !== l) {
        const c = new Event("input", { bubbles: !0 }), f = new Event("change", { bubbles: !0 });
        p.call(i, s), i.dispatchEvent(c), i.dispatchEvent(f);
      }
    }), (s, l) => (g(), w(gd, T({
      ref_key: "primitiveElement",
      ref: n
    }, {
      ...t,
      ...s.$attrs
    }, { as: "input" }), null, 16));
  }
}), jl = k_, T_ = /* @__PURE__ */ b({
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
    const t = e, n = E(() => typeof t.value == "object" && Array.isArray(t.value) && t.value.length === 0 && t.required), a = E(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" || t.value === null || t.value === void 0 ? [{
      name: t.name,
      value: t.value
    }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((o, s) => typeof o == "object" ? Object.entries(o).map(([l, i]) => ({
      name: `${t.name}[${s}][${l}]`,
      value: i
    })) : {
      name: `${t.name}[${s}]`,
      value: o
    }) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([o, s]) => ({
      name: `${t.name}[${o}]`,
      value: s
    })) : []);
    return (o, s) => (g(), V(Pe, null, [fe(" We render single input if it's required "), n.value ? (g(), w(jl, T({ key: o.name }, {
      ...t,
      ...o.$attrs
    }, {
      name: o.name,
      value: o.value
    }), null, 16, ["name", "value"])) : (g(!0), V(Pe, { key: 1 }, nn(a.value, (l) => (g(), w(jl, T({ key: l.name }, { ref_for: !0 }, {
      ...t,
      ...o.$attrs
    }, {
      name: l.name,
      value: l.value
    }), null, 16, ["name", "value"]))), 128))], 2112));
  }
}), hd = T_;
const [D_] = Le("CheckboxGroupRoot");
function fo(e) {
  return e === "indeterminate";
}
function yd(e) {
  return fo(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const [A_, I_] = Le("CheckboxRoot");
var M_ = /* @__PURE__ */ b({
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
    const n = e, a = t, { forwardRef: o, currentElement: s } = oe(), l = D_(null), i = st(n, "modelValue", a, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), u = E(() => (l == null ? void 0 : l.disabled.value) || n.disabled), d = E(() => uo(l == null ? void 0 : l.modelValue.value) ? i.value === "indeterminate" ? "indeterminate" : i.value : Rl(l.modelValue.value, n.value));
    function p() {
      if (uo(l == null ? void 0 : l.modelValue.value))
        i.value = fo(i.value) ? !0 : !i.value;
      else {
        const m = [...l.modelValue.value || []];
        if (Rl(m, n.value)) {
          const v = m.findIndex((h) => jn(h, n.value));
          m.splice(v, 1);
        } else m.push(n.value);
        l.modelValue.value = m;
      }
    }
    const c = rd(s), f = E(() => {
      var m;
      return n.id && s.value ? (m = document.querySelector(`[for="${n.id}"]`)) == null ? void 0 : m.innerText : void 0;
    });
    return I_({
      disabled: u,
      state: d
    }), (m, v) => {
      var h, x;
      return g(), w(dt((h = r(l)) != null && h.rovingFocus.value ? r(E_) : r(ue)), T(m.$attrs, {
        id: m.id,
        ref: r(o),
        role: "checkbox",
        "as-child": m.asChild,
        as: m.as,
        type: m.as === "button" ? "button" : void 0,
        "aria-checked": r(fo)(d.value) ? "mixed" : d.value,
        "aria-required": m.required,
        "aria-label": m.$attrs["aria-label"] || f.value,
        "data-state": r(yd)(d.value),
        "data-disabled": u.value ? "" : void 0,
        disabled: u.value,
        focusable: (x = r(l)) != null && x.rovingFocus.value ? !u.value : void 0,
        onKeydown: lt(Ae(() => {
        }, ["prevent"]), ["enter"]),
        onClick: p
      }), {
        default: y(() => [_(m.$slots, "default", {
          modelValue: r(i),
          state: d.value
        }), r(c) && m.name && !r(l) ? (g(), w(r(hd), {
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
        ])) : fe("v-if", !0)]),
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
}), R_ = M_, F_ = /* @__PURE__ */ b({
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
    const { forwardRef: t } = oe(), n = A_();
    return (a, o) => (g(), w(r($t), { present: a.forceMount || r(fo)(r(n).state.value) || r(n).state.value === !0 }, {
      default: y(() => [R(r(ue), T({
        ref: r(t),
        "data-state": r(yd)(r(n).state.value),
        "data-disabled": r(n).disabled.value ? "" : void 0,
        style: { pointerEvents: "none" },
        "as-child": a.asChild,
        as: a.as
      }, a.$attrs), {
        default: y(() => [_(a.$slots, "default")]),
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
}), q_ = F_;
const [bd, L_] = Le("PopperRoot");
var V_ = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = $();
    return L_({
      anchor: t,
      onAnchorChange: (n) => t.value = n
    }), (n, a) => _(n.$slots, "default");
  }
}), Ms = V_, N_ = /* @__PURE__ */ b({
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
    const t = e, { forwardRef: n, currentElement: a } = oe(), o = bd();
    return Fr(() => {
      o.onAnchorChange(t.reference ?? a.value);
    }), (s, l) => (g(), w(r(ue), {
      ref: r(n),
      as: s.as,
      "as-child": s.asChild
    }, {
      default: y(() => [_(s.$slots, "default")]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), _d = N_;
function z_(e) {
  return e !== null;
}
function K_(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var x, C, S;
      const { placement: n, rects: a, middlewareData: o } = t, l = ((x = o.arrow) == null ? void 0 : x.centerOffset) !== 0, i = l ? 0 : e.arrowWidth, u = l ? 0 : e.arrowHeight, [d, p] = Pr(n), c = {
        start: "0%",
        center: "50%",
        end: "100%"
      }[p], f = (((C = o.arrow) == null ? void 0 : C.x) ?? 0) + i / 2, m = (((S = o.arrow) == null ? void 0 : S.y) ?? 0) + u / 2;
      let v = "", h = "";
      return d === "bottom" ? (v = l ? c : `${f}px`, h = `${-u}px`) : d === "top" ? (v = l ? c : `${f}px`, h = `${a.floating.height + u}px`) : d === "right" ? (v = `${-u}px`, h = l ? c : `${m}px`) : d === "left" && (v = `${a.floating.width + u}px`, h = l ? c : `${m}px`), { data: {
        x: v,
        y: h
      } };
    }
  };
}
function Pr(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
const wd = {
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
}, [UB, j_] = Le("PopperContent");
var H_ = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ go({
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
  }, { ...wd }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = bd(), { forwardRef: s, currentElement: l } = oe(), i = $(), u = $(), { width: d, height: p } = d0(u), c = E(() => n.side + (n.align !== "center" ? `-${n.align}` : "")), f = E(() => typeof n.collisionPadding == "number" ? n.collisionPadding : {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...n.collisionPadding
    }), m = E(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), v = E(() => ({
      padding: f.value,
      boundary: m.value.filter(z_),
      altBoundary: m.value.length > 0
    })), h = E(() => ({
      mainAxis: n.sideFlip,
      crossAxis: n.alignFlip
    })), x = Ib(() => [
      Oi({
        mainAxis: n.sideOffset + p.value,
        alignmentAxis: n.alignOffset
      }),
      n.prioritizePosition && n.avoidCollisions && so({
        ...v.value,
        ...h.value
      }),
      n.avoidCollisions && Ei({
        mainAxis: !0,
        crossAxis: !!n.prioritizePosition,
        limiter: n.sticky === "partial" ? Ti() : void 0,
        ...v.value
      }),
      !n.prioritizePosition && n.avoidCollisions && so({
        ...v.value,
        ...h.value
      }),
      Pi({
        ...v.value,
        apply: ({ elements: L, rects: ee, availableWidth: G, availableHeight: z }) => {
          const { width: N, height: se } = ee.reference, Z = L.floating.style;
          Z.setProperty("--reka-popper-available-width", `${G}px`), Z.setProperty("--reka-popper-available-height", `${z}px`), Z.setProperty("--reka-popper-anchor-width", `${N}px`), Z.setProperty("--reka-popper-anchor-height", `${se}px`);
        }
      }),
      u.value && Di({
        element: u.value,
        padding: n.arrowPadding
      }),
      K_({
        arrowWidth: d.value,
        arrowHeight: p.value
      }),
      n.hideWhenDetached && ki({
        strategy: "referenceHidden",
        ...v.value
      })
    ]), C = E(() => n.reference ?? o.anchor.value), { floatingStyles: S, placement: B, isPositioned: P, middlewareData: O } = Ii(C, i, {
      strategy: n.positionStrategy,
      placement: c,
      whileElementsMounted: (...L) => $i(...L, {
        layoutShift: !n.disableUpdateOnLayoutShift,
        animationFrame: n.updatePositionStrategy === "always"
      }),
      middleware: x
    }), I = E(() => Pr(B.value)[0]), k = E(() => Pr(B.value)[1]);
    Fr(() => {
      P.value && a("placed");
    });
    const F = E(() => {
      var L;
      return ((L = O.value.arrow) == null ? void 0 : L.centerOffset) !== 0;
    }), D = $("");
    _e(() => {
      l.value && (D.value = window.getComputedStyle(l.value).zIndex);
    });
    const A = E(() => {
      var L;
      return ((L = O.value.arrow) == null ? void 0 : L.x) ?? 0;
    }), q = E(() => {
      var L;
      return ((L = O.value.arrow) == null ? void 0 : L.y) ?? 0;
    });
    return j_({
      placedSide: I,
      onArrowChange: (L) => u.value = L,
      arrowX: A,
      arrowY: q,
      shouldHideArrow: F
    }), (L, ee) => {
      var G, z, N;
      return g(), V("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-reka-popper-content-wrapper": "",
        style: at({
          ...r(S),
          transform: r(P) ? r(S).transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: D.value,
          "--reka-popper-transform-origin": [(G = r(O).transformOrigin) == null ? void 0 : G.x, (z = r(O).transformOrigin) == null ? void 0 : z.y].join(" "),
          ...((N = r(O).hide) == null ? void 0 : N.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [R(r(ue), T({ ref: r(s) }, L.$attrs, {
        "as-child": n.asChild,
        as: L.as,
        "data-side": I.value,
        "data-align": k.value,
        style: { animation: r(P) ? void 0 : "none" }
      }), {
        default: y(() => [_(L.$slots, "default")]),
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
}), xd = H_, W_ = /* @__PURE__ */ b({
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
    const { forwardRef: t } = oe();
    return (n, a) => (g(), w(r(_d), {
      "as-child": "",
      reference: n.reference
    }, {
      default: y(() => [R(r(ue), T({
        ref: r(t),
        "as-child": n.asChild,
        as: n.as
      }, n.$attrs), {
        default: y(() => [_(n.$slots, "default")]),
        _: 3
      }, 16, ["as-child", "as"])]),
      _: 3
    }, 8, ["reference"]));
  }
}), U_ = W_;
function G_(e, t, n) {
  return e === void 0 ? !1 : Array.isArray(e) ? e.some((a) => pa(a, t, n)) : pa(e, t, n);
}
function pa(e, t, n) {
  return e === void 0 || t === void 0 ? !1 : typeof e == "string" ? e === t : typeof n == "function" ? n(e, t) : typeof n == "string" ? (e == null ? void 0 : e[n]) === (t == null ? void 0 : t[n]) : jn(e, t);
}
const [Lo, Y_] = Le("ListboxRoot");
var X_ = /* @__PURE__ */ b({
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
    const a = e, o = n, { multiple: s, highlightOnHover: l, orientation: i, disabled: u, selectionBehavior: d, dir: p } = pe(a), { getItems: c } = Ot({ isProvider: !0 }), { handleTypeaheadSearch: f } = ld(), { primitiveElement: m, currentElement: v } = rn(), h = u0(), x = aa(p), C = rd(v), S = $(), B = $(!1), P = $(!0), O = st(a, "modelValue", o, {
      defaultValue: a.defaultValue ?? (s.value ? [] : void 0),
      passive: a.modelValue === void 0,
      deep: !0
    });
    function I(W) {
      if (B.value = !0, a.multiple) {
        const Q = Array.isArray(O.value) ? [...O.value] : [], le = Q.findIndex((ve) => pa(ve, W, a.by));
        a.selectionBehavior === "toggle" ? (le === -1 ? Q.push(W) : Q.splice(le, 1), O.value = Q) : (O.value = [W], S.value = W);
      } else a.selectionBehavior === "toggle" && pa(O.value, W, a.by) ? O.value = void 0 : O.value = W;
      setTimeout(() => {
        B.value = !1;
      }, 1);
    }
    const k = $(null), F = $(null), D = $(!1), A = $(!1), q = eo(), L = eo(), ee = eo();
    function G() {
      return c().map((W) => W.ref).filter((W) => W.dataset.disabled !== "");
    }
    function z(W, Q = !0) {
      if (!W) return;
      k.value = W, P.value && k.value.focus(), Q && k.value.scrollIntoView({ block: "nearest" });
      const le = c().find((ve) => ve.ref === W);
      o("highlight", le);
    }
    function N(W) {
      if (D.value) ee.trigger(W);
      else {
        const Q = c().find((le) => pa(le.value, W, a.by));
        Q && (k.value = Q.ref, z(Q.ref));
      }
    }
    function se(W) {
      k.value && k.value.isConnected && (W.preventDefault(), W.stopPropagation(), A.value || k.value.click());
    }
    function Z(W) {
      if (P.value) {
        if (B.value = !0, D.value) L.trigger(W);
        else {
          const Q = W.altKey || W.ctrlKey || W.metaKey;
          if (Q && W.key === "a" && s.value) {
            const le = c(), ve = le.map((ge) => ge.value);
            O.value = [...ve], W.preventDefault(), z(le[le.length - 1].ref);
          } else if (!Q) {
            const le = f(W.key, c());
            le && z(le);
          }
        }
        setTimeout(() => {
          B.value = !1;
        }, 1);
      }
    }
    function K() {
      A.value = !0;
    }
    function ne() {
      re(() => {
        A.value = !1;
      });
    }
    function X() {
      re(() => {
        const W = new KeyboardEvent("keydown", { key: "PageUp" });
        Se(W);
      });
    }
    function Ce(W) {
      const Q = k.value;
      Q != null && Q.isConnected && (F.value = Q), k.value = null, o("leave", W);
    }
    function Ie(W) {
      var le, ve;
      const Q = new CustomEvent("listbox.entryFocus", {
        bubbles: !1,
        cancelable: !0
      });
      if ((le = W.currentTarget) == null || le.dispatchEvent(Q), o("entryFocus", Q), !Q.defaultPrevented)
        if (F.value) z(F.value);
        else {
          const ge = (ve = G()) == null ? void 0 : ve[0];
          z(ge);
        }
    }
    function Se(W) {
      const Q = vd(W, i.value, x.value);
      if (!Q) return;
      let le = G();
      if (k.value) {
        if (Q === "last") le.reverse();
        else if (Q === "prev" || Q === "next") {
          Q === "prev" && le.reverse();
          const ve = le.indexOf(k.value);
          le = le.slice(ve + 1);
        }
        Te(W, le[0]);
      }
      if (le.length) {
        const ve = !k.value && Q === "prev" ? le.length - 1 : 0;
        z(le[ve]);
      }
      if (D.value) return L.trigger(W);
    }
    function Te(W, Q) {
      var ve;
      if (!(D.value || a.selectionBehavior !== "replace" || !s.value || !Array.isArray(O.value) || (W.altKey || W.ctrlKey || W.metaKey) && !W.shiftKey) && W.shiftKey) {
        const ge = c().filter((Oe) => Oe.ref.dataset.disabled !== "");
        let te = (ve = ge.find((Oe) => Oe.ref === Q)) == null ? void 0 : ve.value;
        if (W.key === h.END ? te = ge[ge.length - 1].value : W.key === h.HOME && (te = ge[0].value), !te || !S.value) return;
        const be = Db(ge.map((Oe) => Oe.value), S.value, te);
        O.value = be;
      }
    }
    async function je(W) {
      if (await re(), D.value) q.trigger(W);
      else {
        const Q = G(), le = Q.find((ve) => ve.dataset.state === "checked");
        le ? z(le) : Q.length && z(Q[0]);
      }
    }
    return ae(O, () => {
      B.value || re(() => {
        je();
      });
    }, {
      immediate: !0,
      deep: !0
    }), t({
      highlightedElement: k,
      highlightItem: N,
      highlightFirstItem: X,
      highlightSelected: je,
      getItems: c
    }), Y_({
      modelValue: O,
      onValueChange: I,
      multiple: s,
      orientation: i,
      dir: x,
      disabled: u,
      highlightOnHover: l,
      highlightedElement: k,
      isVirtual: D,
      virtualFocusHook: q,
      virtualKeydownHook: L,
      virtualHighlightHook: ee,
      by: a.by,
      firstValue: S,
      selectionBehavior: d,
      focusable: P,
      onLeave: Ce,
      onEnter: Ie,
      changeHighlight: z,
      onKeydownEnter: se,
      onKeydownNavigation: Se,
      onKeydownTypeAhead: Z,
      onCompositionStart: K,
      onCompositionEnd: ne,
      highlightFirstItem: X
    }), (W, Q) => (g(), w(r(ue), {
      ref_key: "primitiveElement",
      ref: m,
      as: W.as,
      "as-child": W.asChild,
      dir: r(x),
      "data-disabled": r(u) ? "" : void 0,
      onPointerleave: Ce,
      onFocusout: Q[0] || (Q[0] = async (le) => {
        const ve = le.relatedTarget || le.target;
        await re(), k.value && r(v) && !r(v).contains(ve) && Ce(le);
      })
    }, {
      default: y(() => [_(W.$slots, "default", { modelValue: r(O) }), r(C) && W.name ? (g(), w(r(hd), {
        key: 0,
        name: W.name,
        value: r(O),
        disabled: r(u),
        required: W.required
      }, null, 8, [
        "name",
        "value",
        "disabled",
        "required"
      ])) : fe("v-if", !0)]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "dir",
      "data-disabled"
    ]));
  }
}), Z_ = X_, Q_ = /* @__PURE__ */ b({
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
    const { CollectionSlot: t } = Ot(), n = Lo(), a = Ro(!1, 10);
    return (o, s) => (g(), w(r(t), null, {
      default: y(() => [R(r(ue), {
        role: "listbox",
        as: o.as,
        "as-child": o.asChild,
        tabindex: r(n).focusable.value ? r(n).highlightedElement.value ? "-1" : "0" : "-1",
        "aria-orientation": r(n).orientation.value,
        "aria-multiselectable": !!r(n).multiple.value,
        "data-orientation": r(n).orientation.value,
        onMousedown: s[0] || (s[0] = Ae((l) => a.value = !0, ["left"])),
        onFocus: s[1] || (s[1] = (l) => {
          r(a) || r(n).onEnter(l);
        }),
        onKeydown: [
          s[2] || (s[2] = lt((l) => {
            r(n).orientation.value === "vertical" && (l.key === "ArrowLeft" || l.key === "ArrowRight") || r(n).orientation.value === "horizontal" && (l.key === "ArrowUp" || l.key === "ArrowDown") || (l.preventDefault(), r(n).focusable.value && r(n).onKeydownNavigation(l));
          }, [
            "down",
            "up",
            "left",
            "right",
            "home",
            "end"
          ])),
          lt(r(n).onKeydownEnter, ["enter"]),
          r(n).onKeydownTypeAhead
        ]
      }, {
        default: y(() => [_(o.$slots, "default")]),
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
}), J_ = Q_, ew = /* @__PURE__ */ b({
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
    const n = e, o = st(n, "modelValue", t, {
      defaultValue: "",
      passive: n.modelValue === void 0
    }), s = Lo(), { primitiveElement: l, currentElement: i } = rn(), u = E(() => n.disabled || s.disabled.value || !1), d = $();
    return ti(() => {
      var p;
      return d.value = (p = s.highlightedElement.value) == null ? void 0 : p.id;
    }), de(() => {
      s.focusable.value = !1, setTimeout(() => {
        var p;
        n.autoFocus && ((p = i.value) == null || p.focus());
      }, 1);
    }), Ke(() => {
      s.focusable.value = !0;
    }), (p, c) => (g(), w(r(ue), {
      ref_key: "primitiveElement",
      ref: l,
      as: p.as,
      "as-child": p.asChild,
      value: r(o),
      disabled: u.value ? "" : void 0,
      "data-disabled": u.value ? "" : void 0,
      "aria-disabled": u.value ?? void 0,
      "aria-activedescendant": d.value,
      type: "text",
      onKeydown: [lt(Ae(r(s).onKeydownNavigation, ["prevent"]), [
        "down",
        "up",
        "home",
        "end"
      ]), lt(r(s).onKeydownEnter, ["enter"])],
      onInput: c[0] || (c[0] = (f) => {
        o.value = f.target.value, r(s).highlightFirstItem();
      }),
      onCompositionstart: r(s).onCompositionStart,
      onCompositionend: r(s).onCompositionEnd
    }, {
      default: y(() => [_(p.$slots, "default", { modelValue: r(o) })]),
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
}), tw = ew;
const [GB, nw] = Le("ListboxGroup");
var aw = /* @__PURE__ */ b({
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
    const t = e, n = it(void 0, "reka-listbox-group");
    return nw({ id: n }), (a, o) => (g(), w(r(ue), T({ role: "group" }, t, { "aria-labelledby": r(n) }), {
      default: y(() => [_(a.$slots, "default")]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), ow = aw;
const rw = "listbox.select", [sw, lw] = Le("ListboxItem");
var iw = /* @__PURE__ */ b({
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
    const n = e, a = t, o = it(void 0, "reka-listbox-item"), { CollectionItem: s } = Ot(), { forwardRef: l, currentElement: i } = oe(), u = Lo(), d = E(() => i.value === u.highlightedElement.value), p = E(() => G_(u.modelValue.value, n.value, u.by)), c = E(() => u.disabled.value || n.disabled);
    async function f(v) {
      a("select", v), !(v != null && v.defaultPrevented) && !c.value && v && (u.onValueChange(n.value), u.changeHighlight(i.value));
    }
    function m(v) {
      const h = {
        originalEvent: v,
        value: n.value
      };
      Os(rw, f, h);
    }
    return lw({ isSelected: p }), (v, h) => (g(), w(r(s), { value: v.value }, {
      default: y(() => [ac([d.value, p.value], () => R(r(ue), T({ id: r(o) }, v.$attrs, {
        ref: r(l),
        role: "option",
        tabindex: r(u).focusable.value ? d.value ? "0" : "-1" : -1,
        "aria-selected": p.value,
        as: v.as,
        "as-child": v.asChild,
        disabled: c.value ? "" : void 0,
        "data-disabled": c.value ? "" : void 0,
        "data-highlighted": d.value ? "" : void 0,
        "data-state": p.value ? "checked" : "unchecked",
        onClick: m,
        onKeydown: lt(Ae(m, ["prevent"]), ["space"]),
        onPointermove: h[0] || (h[0] = () => {
          r(u).highlightedElement.value !== r(i) && r(u).highlightOnHover.value && !r(u).focusable.value && r(u).changeHighlight(r(i), !1);
        })
      }), {
        default: y(() => [_(v.$slots, "default")]),
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
      ]), h, 1)]),
      _: 3
    }, 8, ["value"]));
  }
}), uw = iw, dw = /* @__PURE__ */ b({
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
    oe();
    const n = sw();
    return (a, o) => r(n).isSelected.value ? (g(), w(r(ue), T({
      key: 0,
      "aria-hidden": "true"
    }, t), {
      default: y(() => [_(a.$slots, "default")]),
      _: 3
    }, 16)) : fe("v-if", !0);
  }
}), cw = dw;
const [Yt, pw] = Le("ComboboxRoot");
var fw = /* @__PURE__ */ b({
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
    resetModelValueOnClear: {
      type: Boolean,
      required: !1,
      default: !1
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
      required: !1,
      default: !0
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
    var N, se, Z;
    const a = e, o = n, { primitiveElement: s, currentElement: l } = rn(), { multiple: i, disabled: u, ignoreFilter: d, resetSearchTermOnSelect: p, openOnFocus: c, openOnClick: f, dir: m, resetModelValueOnClear: v, highlightOnHover: h } = pe(a), x = aa(m), C = st(a, "modelValue", o, {
      defaultValue: a.defaultValue ?? (i.value ? [] : void 0),
      passive: a.modelValue === void 0,
      deep: !0
    }), S = st(a, "open", o, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    });
    async function B(K) {
      var ne, X;
      S.value = K, ee.value = "", K ? (await re(), (ne = s.value) == null || ne.highlightSelected(), O.value = !0, (X = k.value) == null || X.focus()) : (O.value = !1, setTimeout(() => {
        !K && a.resetSearchTermOnBlur && P.trigger();
      }, 1));
    }
    const P = eo(), O = $(!1), I = $(!1), k = $(), F = $(), D = E(() => {
      var K;
      return ((K = s.value) == null ? void 0 : K.highlightedElement) ?? void 0;
    }), A = $(/* @__PURE__ */ new Map()), q = $(/* @__PURE__ */ new Map()), { contains: L } = n0({ sensitivity: "base" }), ee = $(""), G = E((K) => {
      if (!ee.value || a.ignoreFilter || I.value) return {
        count: A.value.size,
        items: (K == null ? void 0 : K.items) ?? /* @__PURE__ */ new Map(),
        groups: (K == null ? void 0 : K.groups) ?? new Set(q.value.keys())
      };
      let ne = 0;
      const X = /* @__PURE__ */ new Map(), Ce = /* @__PURE__ */ new Set();
      for (const [Ie, Se] of A.value) {
        const Te = L(Se, ee.value);
        X.set(Ie, Te ? 1 : 0), Te && ne++;
      }
      for (const [Ie, Se] of q.value) for (const Te of Se) if (X.get(Te) > 0) {
        Ce.add(Ie);
        break;
      }
      return {
        count: ne,
        items: X,
        groups: Ce
      };
    }), z = nt();
    return de(() => {
      var K, ne, X;
      z != null && z.exposed && (z.exposed.highlightItem = (K = s.value) == null ? void 0 : K.highlightItem, z.exposed.highlightFirstItem = (ne = s.value) == null ? void 0 : ne.highlightFirstItem, z.exposed.highlightSelected = (X = s.value) == null ? void 0 : X.highlightSelected);
    }), t({
      filtered: G,
      highlightedElement: D,
      highlightItem: (N = s.value) == null ? void 0 : N.highlightItem,
      highlightFirstItem: (se = s.value) == null ? void 0 : se.highlightFirstItem,
      highlightSelected: (Z = s.value) == null ? void 0 : Z.highlightSelected
    }), pw({
      modelValue: C,
      multiple: i,
      disabled: u,
      open: S,
      onOpenChange: B,
      contentId: "",
      isUserInputted: O,
      isVirtual: I,
      inputElement: k,
      highlightedElement: D,
      onInputElementChange: (K) => k.value = K,
      triggerElement: F,
      onTriggerElementChange: (K) => F.value = K,
      parentElement: l,
      resetSearchTermOnSelect: p,
      onResetSearchTerm: P.on,
      allItems: A,
      allGroups: q,
      filterSearch: ee,
      filterState: G,
      ignoreFilter: d,
      openOnFocus: c,
      openOnClick: f,
      resetModelValueOnClear: v
    }), (K, ne) => (g(), w(r(Ms), null, {
      default: y(() => [R(r(Z_), T({
        ref_key: "primitiveElement",
        ref: s
      }, K.$attrs, {
        modelValue: r(C),
        "onUpdate:modelValue": ne[0] || (ne[0] = (X) => Qe(C) ? C.value = X : null),
        style: { pointerEvents: r(S) ? "auto" : void 0 },
        as: K.as,
        "as-child": K.asChild,
        dir: r(x),
        multiple: r(i),
        name: K.name,
        required: K.required,
        disabled: r(u),
        "highlight-on-hover": r(h),
        by: a.by,
        onHighlight: ne[1] || (ne[1] = (X) => o("highlight", X))
      }), {
        default: y(() => [_(K.$slots, "default", {
          open: r(S),
          modelValue: r(C)
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
        "highlight-on-hover",
        "by"
      ])]),
      _: 3
    }));
  }
}), vw = fw;
const [YB, mw] = Le("ComboboxContent");
var gw = /* @__PURE__ */ b({
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
    const n = e, a = t, { position: o } = pe(n), s = Yt(), { forwardRef: l, currentElement: i } = oe();
    ks(n.bodyLock), Ts(s.parentElement);
    const u = E(() => n.position === "popper" ? n : {}), d = Ye(u.value), p = {
      boxSizing: "border-box",
      "--reka-combobox-content-transform-origin": "var(--reka-popper-transform-origin)",
      "--reka-combobox-content-available-width": "var(--reka-popper-available-width)",
      "--reka-combobox-content-available-height": "var(--reka-popper-available-height)",
      "--reka-combobox-trigger-width": "var(--reka-popper-anchor-width)",
      "--reka-combobox-trigger-height": "var(--reka-popper-anchor-height)"
    };
    mw({ position: o });
    const c = $(!1);
    return de(() => {
      s.inputElement.value && (c.value = i.value.contains(s.inputElement.value), c.value && s.inputElement.value.focus());
    }), Ke(() => {
      var m;
      const f = We();
      c.value && (!f || f === document.body) && ((m = s.triggerElement.value) == null || m.focus());
    }), (f, m) => (g(), w(r(J_), { "as-child": "" }, {
      default: y(() => [R(r(qo), {
        "as-child": "",
        "disable-outside-pointer-events": f.disableOutsidePointerEvents,
        onDismiss: m[0] || (m[0] = (v) => r(s).onOpenChange(!1)),
        onFocusOutside: m[1] || (m[1] = (v) => {
          var h;
          (h = r(s).parentElement.value) != null && h.contains(v.target) && v.preventDefault(), a("focusOutside", v);
        }),
        onInteractOutside: m[2] || (m[2] = (v) => a("interactOutside", v)),
        onEscapeKeyDown: m[3] || (m[3] = (v) => a("escapeKeyDown", v)),
        onPointerDownOutside: m[4] || (m[4] = (v) => {
          var h;
          (h = r(s).parentElement.value) != null && h.contains(v.target) && v.preventDefault(), a("pointerDownOutside", v);
        })
      }, {
        default: y(() => [(g(), w(dt(r(o) === "popper" ? r(xd) : r(ue)), T({
          ...f.$attrs,
          ...r(d)
        }, {
          id: r(s).contentId,
          ref: r(l),
          "data-state": r(s).open.value ? "open" : "closed",
          style: {
            display: "flex",
            flexDirection: "column",
            outline: "none",
            ...r(o) === "popper" ? p : {}
          }
        }), {
          default: y(() => [_(f.$slots, "default")]),
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
}), hw = gw, yw = /* @__PURE__ */ b({
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
    oe();
    const n = Yt();
    function a() {
      var o;
      n.filterSearch.value = "", n.inputElement.value && (n.inputElement.value.value = "", n.inputElement.value.focus()), (o = n.resetModelValueOnClear) != null && o.value && (n.modelValue.value = n.multiple.value ? [] : null);
    }
    return (o, s) => (g(), w(r(ue), T({ type: o.as === "button" ? "button" : void 0 }, t, {
      tabindex: "-1",
      onClick: a
    }), {
      default: y(() => [_(o.$slots, "default")]),
      _: 3
    }, 16, ["type"]));
  }
}), XB = yw, bw = /* @__PURE__ */ b({
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
    const o = ke(e, t), { forwardRef: s } = oe(), l = Yt();
    return l.contentId || (l.contentId = it(void 0, "reka-combobox-content")), (i, u) => (g(), w(r($t), { present: i.forceMount || r(l).open.value }, {
      default: y(() => [R(hw, T({
        ...r(o),
        ...i.$attrs
      }, { ref: r(s) }), {
        default: y(() => [_(i.$slots, "default")]),
        _: 3
      }, 16)]),
      _: 3
    }, 8, ["present"]));
  }
}), _w = bw, ww = /* @__PURE__ */ b({
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
    const t = e, n = Yt(), a = E(() => n.ignoreFilter.value ? n.allItems.value.size === 0 : n.filterState.value.count === 0);
    return (o, s) => a.value ? (g(), w(r(ue), H(T({ key: 0 }, t)), {
      default: y(() => [_(o.$slots, "default", {}, () => [s[0] || (s[0] = Be("No options"))])]),
      _: 3
    }, 16)) : fe("v-if", !0);
  }
}), xw = ww;
const [Cd, Cw] = Le("ComboboxGroup");
var Bw = /* @__PURE__ */ b({
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
    const t = e, n = it(void 0, "reka-combobox-group"), a = Yt(), o = E(() => a.ignoreFilter.value ? !0 : a.filterSearch.value ? a.filterState.value.groups.has(n) : !0), s = Cw({
      id: n,
      labelId: ""
    });
    return de(() => {
      a.allGroups.value.has(n) || a.allGroups.value.set(n, /* @__PURE__ */ new Set());
    }), Ke(() => {
      a.allGroups.value.delete(n);
    }), (l, i) => (g(), w(r(ow), T({
      id: r(n),
      "aria-labelledby": r(s).labelId
    }, t, { hidden: o.value ? void 0 : !0 }), {
      default: y(() => [_(l.$slots, "default")]),
      _: 3
    }, 16, [
      "id",
      "aria-labelledby",
      "hidden"
    ]));
  }
}), Sw = Bw, $w = /* @__PURE__ */ b({
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
    const n = e, a = t, o = Yt(), s = Lo(), { primitiveElement: l, currentElement: i } = rn(), u = st(n, "modelValue", a, { passive: n.modelValue === void 0 });
    de(() => {
      i.value && o.onInputElementChange(i.value);
    });
    function d(v) {
      o.open.value || o.onOpenChange(!0);
    }
    function p(v) {
      const h = v.target;
      o.open.value ? o.filterSearch.value = h.value : (o.onOpenChange(!0), re(() => {
        h.value && (o.filterSearch.value = h.value, s.highlightFirstItem());
      }));
    }
    function c() {
      o.openOnFocus.value && !o.open.value && o.onOpenChange(!0);
    }
    function f() {
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
    }), ae(o.modelValue, async () => {
      !o.isUserInputted.value && o.resetSearchTermOnSelect.value && m();
    }, {
      immediate: !0,
      deep: !0
    }), ae(o.filterState, (v, h) => {
      !o.isVirtual.value && h.count === 0 && s.highlightFirstItem();
    }), (v, h) => (g(), w(r(tw), {
      ref_key: "primitiveElement",
      ref: l,
      modelValue: r(u),
      "onUpdate:modelValue": h[0] || (h[0] = (x) => Qe(u) ? u.value = x : null),
      as: v.as,
      "as-child": v.asChild,
      "auto-focus": v.autoFocus,
      disabled: v.disabled,
      "aria-expanded": r(o).open.value,
      "aria-controls": r(o).contentId,
      "aria-autocomplete": "list",
      role: "combobox",
      autocomplete: "off",
      onClick: f,
      onInput: p,
      onKeydown: lt(Ae(d, ["prevent"]), ["down", "up"]),
      onFocus: c
    }, {
      default: y(() => [_(v.$slots, "default")]),
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
}), Ow = $w, Ew = /* @__PURE__ */ b({
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
    const n = e, a = t, o = it(void 0, "reka-combobox-item"), s = Yt(), l = Cd(null), { primitiveElement: i, currentElement: u } = rn();
    if (n.value === "") throw new Error("A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder.");
    const d = E(() => {
      if (s.isVirtual.value || s.ignoreFilter.value || !s.filterSearch.value) return !0;
      {
        const p = s.filterState.value.items.get(o);
        return p === void 0 ? !0 : p > 0;
      }
    });
    return de(() => {
      var c;
      s.allItems.value.set(o, n.textValue || u.value.textContent || u.value.innerText);
      const p = l == null ? void 0 : l.id;
      p && (s.allGroups.value.has(p) ? (c = s.allGroups.value.get(p)) == null || c.add(o) : s.allGroups.value.set(p, /* @__PURE__ */ new Set([o])));
    }), Ke(() => {
      s.allItems.value.delete(o);
    }), (p, c) => d.value ? (g(), w(r(uw), T({ key: 0 }, n, {
      id: r(o),
      ref_key: "primitiveElement",
      ref: i,
      disabled: r(s).disabled.value || p.disabled,
      onSelect: c[0] || (c[0] = (f) => {
        a("select", f), !f.defaultPrevented && !r(s).multiple.value && !p.disabled && !r(s).disabled.value && (f.preventDefault(), r(s).onOpenChange(!1), r(s).modelValue.value = n.value);
      })
    }), {
      default: y(() => [_(p.$slots, "default", {}, () => [Be(Me(p.value), 1)])]),
      _: 3
    }, 16, ["id", "disabled"])) : fe("v-if", !0);
  }
}), Pw = Ew, kw = /* @__PURE__ */ b({
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
    return (n, a) => (g(), w(r(cw), H(U(t)), {
      default: y(() => [_(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), ZB = kw, Tw = /* @__PURE__ */ b({
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
    oe();
    const n = Cd({
      id: "",
      labelId: ""
    });
    return n.labelId || (n.labelId = it(void 0, "reka-combobox-group-label")), (a, o) => (g(), w(r(ue), T(t, { id: r(n).labelId }), {
      default: y(() => [_(a.$slots, "default")]),
      _: 3
    }, 16, ["id"]));
  }
}), Dw = Tw, Aw = /* @__PURE__ */ b({
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
    return (n, a) => (g(), w(r(Is), H(U(t)), {
      default: y(() => [_(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), Iw = Aw, Mw = /* @__PURE__ */ b({
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
    return oe(), (n, a) => (g(), w(r(ue), T(t, { "aria-hidden": "true" }), {
      default: y(() => [_(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), Rw = Mw, Fw = /* @__PURE__ */ b({
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
    const t = e, { forwardRef: n, currentElement: a } = oe(), o = Yt(), s = E(() => t.disabled || o.disabled.value || !1);
    return de(() => {
      a.value && o.onTriggerElementChange(a.value);
    }), (l, i) => (g(), w(r(ue), T(t, {
      ref: r(n),
      type: l.as === "button" ? "button" : void 0,
      tabindex: "-1",
      "aria-label": "Show popup",
      "aria-haspopup": "listbox",
      "aria-expanded": r(o).open.value,
      "aria-controls": r(o).contentId,
      "data-state": r(o).open.value ? "open" : "closed",
      disabled: s.value,
      "data-disabled": s.value ? "" : void 0,
      "aria-disabled": s.value ?? void 0,
      onClick: i[0] || (i[0] = (u) => r(o).onOpenChange(!r(o).open.value))
    }), {
      default: y(() => [_(l.$slots, "default")]),
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
}), QB = Fw;
function qw(e) {
  const t = Io({ nonce: $() });
  return E(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.nonce) == null ? void 0 : n.value);
  });
}
var Lw = /* @__PURE__ */ b({
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
    const t = e, { forwardRef: n } = oe(), { nonce: a } = pe(t), o = qw(a), s = Yt();
    return (l, i) => (g(), V(Pe, null, [R(r(ue), T({
      ...l.$attrs,
      ...t
    }, {
      ref: r(n),
      "data-reka-combobox-viewport": "",
      role: "presentation",
      style: {
        position: "relative",
        flex: r(s).isVirtual.value ? void 0 : 1,
        overflow: "auto"
      }
    }), {
      default: y(() => [_(l.$slots, "default")]),
      _: 3
    }, 16, ["style"]), R(r(ue), {
      as: "style",
      nonce: r(o)
    }, {
      default: y(() => i[0] || (i[0] = [Be(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-reka-combobox-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-reka-combobox-viewport]::-webkit-scrollbar { display: none; } ")])),
      _: 1,
      __: [0]
    }, 8, ["nonce"])], 64));
  }
}), Vw = Lw, Nw = /* @__PURE__ */ b({
  __name: "MenuAnchor",
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
    const t = e;
    return (n, a) => (g(), w(r(_d), H(U(t)), {
      default: y(() => [_(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), Bd = Nw;
function zw() {
  const e = $(!1);
  return de(() => {
    ya("keydown", () => {
      e.value = !0;
    }, {
      capture: !0,
      passive: !0
    }), ya(["pointerdown", "pointermove"], () => {
      e.value = !1;
    }, {
      capture: !0,
      passive: !0
    });
  }), e;
}
const Kw = nd(zw), [On, Sd] = Le(["MenuRoot", "MenuSub"], "MenuContext"), [Ia, jw] = Le("MenuRoot");
var Hw = /* @__PURE__ */ b({
  __name: "MenuRoot",
  props: {
    open: {
      type: Boolean,
      required: !1,
      default: !1
    },
    dir: {
      type: String,
      required: !1
    },
    modal: {
      type: Boolean,
      required: !1,
      default: !0
    }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, a = t, { modal: o, dir: s } = pe(n), l = aa(s), i = st(n, "open", a), u = $(), d = Kw();
    return Sd({
      open: i,
      onOpenChange: (p) => {
        i.value = p;
      },
      content: u,
      onContentChange: (p) => {
        u.value = p;
      }
    }), jw({
      onClose: () => {
        i.value = !1;
      },
      isUsingKeyboardRef: d,
      dir: l,
      modal: o
    }), (p, c) => (g(), w(r(Ms), null, {
      default: y(() => [_(p.$slots, "default")]),
      _: 3
    }));
  }
}), Ww = Hw;
const [Rs, Uw] = Le("MenuContent");
var Gw = /* @__PURE__ */ b({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ go({
    loop: {
      type: Boolean,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1
    },
    disableOutsideScroll: {
      type: Boolean,
      required: !1
    },
    trapFocus: {
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
    }
  }, { ...wd }),
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "entryFocus",
    "openAutoFocus",
    "closeAutoFocus",
    "dismiss"
  ],
  setup(e, { emit: t }) {
    const n = e, a = t, o = On(), s = Ia(), { trapFocus: l, disableOutsidePointerEvents: i, loop: u } = pe(n);
    a0(), ks(i.value);
    const d = $(""), p = $(0), c = $(0), f = $(null), m = $("right"), v = $(0), h = $(null), x = $(), { forwardRef: C, currentElement: S } = oe(), { handleTypeaheadSearch: B } = ld();
    ae(S, (D) => {
      o.onContentChange(D);
    }), Ke(() => {
      window.clearTimeout(p.value);
    });
    function P(D) {
      var q, L;
      return m.value === ((q = f.value) == null ? void 0 : q.side) && G0(D, (L = f.value) == null ? void 0 : L.area);
    }
    async function O(D) {
      var A;
      a("openAutoFocus", D), !D.defaultPrevented && (D.preventDefault(), (A = S.value) == null || A.focus({ preventScroll: !0 }));
    }
    function I(D) {
      var se;
      if (D.defaultPrevented) return;
      const q = D.target.closest("[data-reka-menu-content]") === D.currentTarget, L = D.ctrlKey || D.altKey || D.metaKey, ee = D.key.length === 1, G = Ps(D, We(), S.value, {
        loop: u.value,
        arrowKeyOptions: "vertical",
        dir: s == null ? void 0 : s.dir.value,
        focus: !0,
        attributeName: "[data-reka-collection-item]:not([data-disabled])"
      });
      if (G) return G == null ? void 0 : G.focus();
      if (D.code === "Space") return;
      const z = ((se = x.value) == null ? void 0 : se.getItems()) ?? [];
      if (q && (D.key === "Tab" && D.preventDefault(), !L && ee && B(D.key, z)), D.target !== S.value || !K0.includes(D.key)) return;
      D.preventDefault();
      const N = [...z.map((Z) => Z.ref)];
      pd.includes(D.key) && N.reverse(), W0(N);
    }
    function k(D) {
      var A, q;
      (q = (A = D == null ? void 0 : D.currentTarget) == null ? void 0 : A.contains) != null && q.call(A, D.target) || (window.clearTimeout(p.value), d.value = "");
    }
    function F(D) {
      var L;
      if (!ba(D)) return;
      const A = D.target, q = v.value !== D.clientX;
      if ((L = D == null ? void 0 : D.currentTarget) != null && L.contains(A) && q) {
        const ee = D.clientX > v.value ? "right" : "left";
        m.value = ee, v.value = D.clientX;
      }
    }
    return Uw({
      onItemEnter: (D) => !!P(D),
      onItemLeave: (D) => {
        var A;
        P(D) || ((A = S.value) == null || A.focus(), h.value = null);
      },
      onTriggerLeave: (D) => !!P(D),
      searchRef: d,
      pointerGraceTimerRef: c,
      onPointerGraceIntentChange: (D) => {
        f.value = D;
      }
    }), (D, A) => (g(), w(r(cd), {
      "as-child": "",
      trapped: r(l),
      onMountAutoFocus: O,
      onUnmountAutoFocus: A[7] || (A[7] = (q) => a("closeAutoFocus", q))
    }, {
      default: y(() => [R(r(qo), {
        "as-child": "",
        "disable-outside-pointer-events": r(i),
        onEscapeKeyDown: A[2] || (A[2] = (q) => a("escapeKeyDown", q)),
        onPointerDownOutside: A[3] || (A[3] = (q) => a("pointerDownOutside", q)),
        onFocusOutside: A[4] || (A[4] = (q) => a("focusOutside", q)),
        onInteractOutside: A[5] || (A[5] = (q) => a("interactOutside", q)),
        onDismiss: A[6] || (A[6] = (q) => a("dismiss"))
      }, {
        default: y(() => [R(r($_), {
          ref_key: "rovingFocusGroupRef",
          ref: x,
          "current-tab-stop-id": h.value,
          "onUpdate:currentTabStopId": A[0] || (A[0] = (q) => h.value = q),
          "as-child": "",
          orientation: "vertical",
          dir: r(s).dir.value,
          loop: r(u),
          onEntryFocus: A[1] || (A[1] = (q) => {
            a("entryFocus", q), r(s).isUsingKeyboardRef.value || q.preventDefault();
          })
        }, {
          default: y(() => [R(r(xd), {
            ref: r(C),
            role: "menu",
            as: D.as,
            "as-child": D.asChild,
            "aria-orientation": "vertical",
            "data-reka-menu-content": "",
            "data-state": r(Ds)(r(o).open.value),
            dir: r(s).dir.value,
            side: D.side,
            "side-offset": D.sideOffset,
            align: D.align,
            "align-offset": D.alignOffset,
            "avoid-collisions": D.avoidCollisions,
            "collision-boundary": D.collisionBoundary,
            "collision-padding": D.collisionPadding,
            "arrow-padding": D.arrowPadding,
            "prioritize-position": D.prioritizePosition,
            "position-strategy": D.positionStrategy,
            "update-position-strategy": D.updatePositionStrategy,
            sticky: D.sticky,
            "hide-when-detached": D.hideWhenDetached,
            reference: D.reference,
            onKeydown: I,
            onBlur: k,
            onPointermove: F
          }, {
            default: y(() => [_(D.$slots, "default")]),
            _: 3
          }, 8, [
            "as",
            "as-child",
            "data-state",
            "dir",
            "side",
            "side-offset",
            "align",
            "align-offset",
            "avoid-collisions",
            "collision-boundary",
            "collision-padding",
            "arrow-padding",
            "prioritize-position",
            "position-strategy",
            "update-position-strategy",
            "sticky",
            "hide-when-detached",
            "reference"
          ])]),
          _: 3
        }, 8, [
          "current-tab-stop-id",
          "dir",
          "loop"
        ])]),
        _: 3
      }, 8, ["disable-outside-pointer-events"])]),
      _: 3
    }, 8, ["trapped"]));
  }
}), Fs = Gw, Yw = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: {
      type: Boolean,
      required: !1
    },
    textValue: {
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
    const t = e, n = Rs(), { forwardRef: a } = oe(), { CollectionItem: o } = Ot(), s = $(!1);
    async function l(u) {
      if (!u.defaultPrevented && ba(u)) {
        if (t.disabled) n.onItemLeave(u);
        else if (!n.onItemEnter(u)) {
          const p = u.currentTarget;
          p == null || p.focus({ preventScroll: !0 });
        }
      }
    }
    async function i(u) {
      await re(), !u.defaultPrevented && ba(u) && n.onItemLeave(u);
    }
    return (u, d) => (g(), w(r(o), { value: { textValue: u.textValue } }, {
      default: y(() => [R(r(ue), T({
        ref: r(a),
        role: "menuitem",
        tabindex: "-1"
      }, u.$attrs, {
        as: u.as,
        "as-child": u.asChild,
        "aria-disabled": u.disabled || void 0,
        "data-disabled": u.disabled ? "" : void 0,
        "data-highlighted": s.value ? "" : void 0,
        onPointermove: l,
        onPointerleave: i,
        onFocus: d[0] || (d[0] = async (p) => {
          await re(), !(p.defaultPrevented || u.disabled) && (s.value = !0);
        }),
        onBlur: d[1] || (d[1] = async (p) => {
          await re(), !p.defaultPrevented && (s.value = !1);
        })
      }), {
        default: y(() => [_(u.$slots, "default")]),
        _: 3
      }, 16, [
        "as",
        "as-child",
        "aria-disabled",
        "data-disabled",
        "data-highlighted"
      ])]),
      _: 3
    }, 8, ["value"]));
  }
}), $d = Yw, Xw = /* @__PURE__ */ b({
  __name: "MenuItem",
  props: {
    disabled: {
      type: Boolean,
      required: !1
    },
    textValue: {
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
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, a = t, { forwardRef: o, currentElement: s } = oe(), l = Ia(), i = Rs(), u = $(!1);
    async function d() {
      const p = s.value;
      if (!n.disabled && p) {
        const c = new CustomEvent(N0, {
          bubbles: !0,
          cancelable: !0
        });
        a("select", c), await re(), c.defaultPrevented ? u.value = !1 : l.onClose();
      }
    }
    return (p, c) => (g(), w($d, T(n, {
      ref: r(o),
      onClick: d,
      onPointerdown: c[0] || (c[0] = () => {
        u.value = !0;
      }),
      onPointerup: c[1] || (c[1] = async (f) => {
        var m;
        await re(), !f.defaultPrevented && (u.value || (m = f.currentTarget) == null || m.click());
      }),
      onKeydown: c[2] || (c[2] = async (f) => {
        const m = r(i).searchRef.value !== "";
        p.disabled || m && f.key === " " || r(Er).includes(f.key) && (f.currentTarget.click(), f.preventDefault());
      })
    }), {
      default: y(() => [_(p.$slots, "default")]),
      _: 3
    }, 16));
  }
}), qs = Xw;
const [Zw, Od] = Le(["MenuCheckboxItem", "MenuRadioItem"], "MenuItemIndicatorContext");
var Qw = /* @__PURE__ */ b({
  __name: "MenuItemIndicator",
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
    const t = Zw({ modelValue: $(!1) });
    return (n, a) => (g(), w(r($t), { present: n.forceMount || r(po)(r(t).modelValue.value) || r(t).modelValue.value === !0 }, {
      default: y(() => [R(r(ue), {
        as: n.as,
        "as-child": n.asChild,
        "data-state": r(As)(r(t).modelValue.value)
      }, {
        default: y(() => [_(n.$slots, "default")]),
        _: 3
      }, 8, [
        "as",
        "as-child",
        "data-state"
      ])]),
      _: 3
    }, 8, ["present"]));
  }
}), Jw = Qw, e1 = /* @__PURE__ */ b({
  __name: "MenuCheckboxItem",
  props: {
    modelValue: {
      type: [Boolean, String],
      required: !1,
      default: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    textValue: {
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
  emits: ["select", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = Mo(n, ["modelValue"]), s = Ye(o), l = st(n, "modelValue", a);
    return Od({ modelValue: l }), (i, u) => (g(), w(qs, T({ role: "menuitemcheckbox" }, r(s), {
      "aria-checked": r(po)(r(l)) ? "mixed" : r(l),
      "data-state": r(As)(r(l)),
      onSelect: u[0] || (u[0] = async (d) => {
        a("select", d), r(po)(r(l)) ? l.value = !0 : l.value = !r(l);
      })
    }), {
      default: y(() => [_(i.$slots, "default", { modelValue: r(l) })]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), t1 = e1, n1 = /* @__PURE__ */ b({
  __name: "MenuRootContentModal",
  props: {
    loop: {
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
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "entryFocus",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(e, { emit: t }) {
    const n = e, a = t, o = ke(n, a), s = On(), { forwardRef: l, currentElement: i } = oe();
    return Ts(i), (u, d) => (g(), w(Fs, T(r(o), {
      ref: r(l),
      "trap-focus": r(s).open.value,
      "disable-outside-pointer-events": r(s).open.value,
      "disable-outside-scroll": !0,
      onDismiss: d[0] || (d[0] = (p) => r(s).onOpenChange(!1)),
      onFocusOutside: d[1] || (d[1] = Ae((p) => a("focusOutside", p), ["prevent"]))
    }), {
      default: y(() => [_(u.$slots, "default")]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), a1 = n1, o1 = /* @__PURE__ */ b({
  __name: "MenuRootContentNonModal",
  props: {
    loop: {
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
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "entryFocus",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(e, { emit: t }) {
    const o = ke(e, t), s = On();
    return (l, i) => (g(), w(Fs, T(r(o), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      "disable-outside-scroll": !1,
      onDismiss: i[0] || (i[0] = (u) => r(s).onOpenChange(!1))
    }), {
      default: y(() => [_(l.$slots, "default")]),
      _: 3
    }, 16));
  }
}), r1 = o1, s1 = /* @__PURE__ */ b({
  __name: "MenuContent",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    loop: {
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
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "entryFocus",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(e, { emit: t }) {
    const o = ke(e, t), s = On(), l = Ia();
    return (i, u) => (g(), w(r($t), { present: i.forceMount || r(s).open.value }, {
      default: y(() => [r(l).modal.value ? (g(), w(a1, H(T({ key: 0 }, {
        ...i.$attrs,
        ...r(o)
      })), {
        default: y(() => [_(i.$slots, "default")]),
        _: 3
      }, 16)) : (g(), w(r1, H(T({ key: 1 }, {
        ...i.$attrs,
        ...r(o)
      })), {
        default: y(() => [_(i.$slots, "default")]),
        _: 3
      }, 16))]),
      _: 3
    }, 8, ["present"]));
  }
}), l1 = s1, i1 = /* @__PURE__ */ b({
  __name: "MenuGroup",
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
    return (n, a) => (g(), w(r(ue), T({ role: "group" }, t), {
      default: y(() => [_(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), Ed = i1, u1 = /* @__PURE__ */ b({
  __name: "MenuLabel",
  props: {
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
    return (n, a) => (g(), w(r(ue), H(U(t)), {
      default: y(() => [_(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), d1 = u1, c1 = /* @__PURE__ */ b({
  __name: "MenuPortal",
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
    return (n, a) => (g(), w(r(Is), H(U(t)), {
      default: y(() => [_(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), p1 = c1;
const [f1, v1] = Le("MenuRadioGroup");
var m1 = /* @__PURE__ */ b({
  __name: "MenuRadioGroup",
  props: {
    modelValue: {
      type: String,
      required: !1,
      default: ""
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
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = Mo(n, ["modelValue"]), s = Ye(o), l = st(n, "modelValue", a);
    return v1({
      modelValue: l,
      onValueChange: (i) => {
        l.value = i;
      }
    }), (i, u) => (g(), w(Ed, H(U(r(s))), {
      default: y(() => [_(i.$slots, "default", { modelValue: r(l) })]),
      _: 3
    }, 16));
  }
}), g1 = m1, h1 = /* @__PURE__ */ b({
  __name: "MenuRadioItem",
  props: {
    value: {
      type: String,
      required: !0
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    textValue: {
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
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = Mo(n, ["value"]), s = Ye(o), { value: l } = pe(n), i = f1(), u = E(() => i.modelValue.value === (l == null ? void 0 : l.value));
    return Od({ modelValue: u }), (d, p) => (g(), w(qs, T({ role: "menuitemradio" }, r(s), {
      "aria-checked": u.value,
      "data-state": r(As)(u.value),
      onSelect: p[0] || (p[0] = async (c) => {
        a("select", c), r(i).onValueChange(r(l));
      })
    }), {
      default: y(() => [_(d.$slots, "default")]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), y1 = h1, b1 = /* @__PURE__ */ b({
  __name: "MenuSeparator",
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
    return (n, a) => (g(), w(r(ue), T(t, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: y(() => [_(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), _1 = b1;
const [Pd, w1] = Le("MenuSub");
var x1 = /* @__PURE__ */ b({
  __name: "MenuSub",
  props: { open: {
    type: Boolean,
    required: !1,
    default: void 0
  } },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = st(n, "open", t, {
      defaultValue: !1,
      passive: n.open === void 0
    }), s = On(), l = $(), i = $();
    return _e((u) => {
      (s == null ? void 0 : s.open.value) === !1 && (o.value = !1), u(() => o.value = !1);
    }), Sd({
      open: o,
      onOpenChange: (u) => {
        o.value = u;
      },
      content: i,
      onContentChange: (u) => {
        i.value = u;
      }
    }), w1({
      triggerId: "",
      contentId: "",
      trigger: l,
      onTriggerChange: (u) => {
        l.value = u;
      }
    }), (u, d) => (g(), w(r(Ms), null, {
      default: y(() => [_(u.$slots, "default")]),
      _: 3
    }));
  }
}), C1 = x1, B1 = /* @__PURE__ */ b({
  __name: "MenuSubContent",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    loop: {
      type: Boolean,
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
      required: !1,
      default: !0
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
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "entryFocus",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(e, { emit: t }) {
    const o = ke(e, t), s = On(), l = Ia(), i = Pd(), { forwardRef: u, currentElement: d } = oe();
    return i.contentId || (i.contentId = it(void 0, "reka-menu-sub-content")), (p, c) => (g(), w(r($t), { present: p.forceMount || r(s).open.value }, {
      default: y(() => [R(Fs, T(r(o), {
        id: r(i).contentId,
        ref: r(u),
        "aria-labelledby": r(i).triggerId,
        align: "start",
        side: r(l).dir.value === "rtl" ? "left" : "right",
        "disable-outside-pointer-events": !1,
        "disable-outside-scroll": !1,
        "trap-focus": !1,
        onOpenAutoFocus: c[0] || (c[0] = Ae((f) => {
          var m;
          r(l).isUsingKeyboardRef.value && ((m = r(d)) == null || m.focus());
        }, ["prevent"])),
        onCloseAutoFocus: c[1] || (c[1] = Ae(() => {
        }, ["prevent"])),
        onFocusOutside: c[2] || (c[2] = (f) => {
          f.defaultPrevented || f.target !== r(i).trigger.value && r(s).onOpenChange(!1);
        }),
        onEscapeKeyDown: c[3] || (c[3] = (f) => {
          r(l).onClose(), f.preventDefault();
        }),
        onKeydown: c[4] || (c[4] = (f) => {
          var h, x;
          const m = (h = f.currentTarget) == null ? void 0 : h.contains(f.target), v = r(H0)[r(l).dir.value].includes(f.key);
          m && v && (r(s).onOpenChange(!1), (x = r(i).trigger.value) == null || x.focus(), f.preventDefault());
        })
      }), {
        default: y(() => [_(p.$slots, "default")]),
        _: 3
      }, 16, [
        "id",
        "aria-labelledby",
        "side"
      ])]),
      _: 3
    }, 8, ["present"]));
  }
}), S1 = B1, $1 = /* @__PURE__ */ b({
  __name: "MenuSubTrigger",
  props: {
    disabled: {
      type: Boolean,
      required: !1
    },
    textValue: {
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
    const t = e, n = On(), a = Ia(), o = Pd(), s = Rs(), l = $(null);
    o.triggerId || (o.triggerId = it(void 0, "reka-menu-sub-trigger"));
    function i() {
      l.value && window.clearTimeout(l.value), l.value = null;
    }
    Ke(() => {
      i();
    });
    function u(c) {
      !ba(c) || s.onItemEnter(c) || !t.disabled && !n.open.value && !l.value && (s.onPointerGraceIntentChange(null), l.value = window.setTimeout(() => {
        n.onOpenChange(!0), i();
      }, 100));
    }
    async function d(c) {
      var m, v;
      if (!ba(c)) return;
      i();
      const f = (m = n.content.value) == null ? void 0 : m.getBoundingClientRect();
      if (f != null && f.width) {
        const h = (v = n.content.value) == null ? void 0 : v.dataset.side, x = h === "right", C = x ? -5 : 5, S = f[x ? "left" : "right"], B = f[x ? "right" : "left"];
        s.onPointerGraceIntentChange({
          area: [
            {
              x: c.clientX + C,
              y: c.clientY
            },
            {
              x: S,
              y: f.top
            },
            {
              x: B,
              y: f.top
            },
            {
              x: B,
              y: f.bottom
            },
            {
              x: S,
              y: f.bottom
            }
          ],
          side: h
        }), window.clearTimeout(s.pointerGraceTimerRef.value), s.pointerGraceTimerRef.value = window.setTimeout(() => s.onPointerGraceIntentChange(null), 300);
      } else {
        if (s.onTriggerLeave(c)) return;
        s.onPointerGraceIntentChange(null);
      }
    }
    async function p(c) {
      var m;
      const f = s.searchRef.value !== "";
      t.disabled || f && c.key === " " || j0[a.dir.value].includes(c.key) && (n.onOpenChange(!0), await re(), (m = n.content.value) == null || m.focus(), c.preventDefault());
    }
    return (c, f) => (g(), w(Bd, { "as-child": "" }, {
      default: y(() => [R($d, T(t, {
        id: r(o).triggerId,
        ref: (m) => {
          var v;
          (v = r(o)) == null || v.onTriggerChange(m == null ? void 0 : m.$el);
        },
        "aria-haspopup": "menu",
        "aria-expanded": r(n).open.value,
        "aria-controls": r(o).contentId,
        "data-state": r(Ds)(r(n).open.value),
        onClick: f[0] || (f[0] = async (m) => {
          t.disabled || m.defaultPrevented || (m.currentTarget.focus(), r(n).open.value || r(n).onOpenChange(!0));
        }),
        onPointermove: u,
        onPointerleave: d,
        onKeydown: p
      }), {
        default: y(() => [_(c.$slots, "default")]),
        _: 3
      }, 16, [
        "id",
        "aria-expanded",
        "aria-controls",
        "data-state"
      ])]),
      _: 3
    }));
  }
}), O1 = $1, E1 = /* @__PURE__ */ b({
  __name: "ContextMenuCheckboxItem",
  props: {
    modelValue: {
      type: [Boolean, String],
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    textValue: {
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
  emits: ["select", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = dn(t);
    return oe(), (s, l) => (g(), w(r(t1), H(U({
      ...n,
      ...r(o)
    })), {
      default: y(() => [_(s.$slots, "default")]),
      _: 3
    }, 16));
  }
}), P1 = E1;
const [kd, k1] = Le("ContextMenuRoot");
var T1 = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "ContextMenuRoot",
  props: {
    pressOpenDelay: {
      type: Number,
      required: !1,
      default: 700
    },
    dir: {
      type: String,
      required: !1
    },
    modal: {
      type: Boolean,
      required: !1,
      default: !0
    }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, a = t, { dir: o, modal: s, pressOpenDelay: l } = pe(n);
    oe();
    const i = aa(o), u = $(!1), d = $();
    return k1({
      open: u,
      onOpenChange: (p) => {
        u.value = p;
      },
      dir: i,
      modal: s,
      triggerElement: d,
      pressOpenDelay: l
    }), ae(u, (p) => {
      a("update:open", p);
    }), (p, c) => (g(), w(r(Ww), {
      open: u.value,
      "onUpdate:open": c[0] || (c[0] = (f) => u.value = f),
      dir: r(i),
      modal: r(s)
    }, {
      default: y(() => [_(p.$slots, "default")]),
      _: 3
    }, 8, [
      "open",
      "dir",
      "modal"
    ]));
  }
}), D1 = T1, A1 = /* @__PURE__ */ b({
  __name: "ContextMenuContent",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    loop: {
      type: Boolean,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1,
      default: 0
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1,
      default: !0
    },
    collisionBoundary: {
      type: null,
      required: !1,
      default: () => []
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1,
      default: 0
    },
    sticky: {
      type: String,
      required: !1,
      default: "partial"
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1,
      default: !1
    },
    positionStrategy: {
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
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "closeAutoFocus"
  ],
  setup(e, { emit: t }) {
    const o = ke(e, t);
    oe();
    const s = kd(), l = $(!1);
    return (i, u) => (g(), w(r(l1), T(r(o), {
      side: "right",
      "side-offset": 2,
      align: "start",
      "update-position-strategy": "always",
      style: {
        "--reka-context-menu-content-transform-origin": "var(--reka-popper-transform-origin)",
        "--reka-context-menu-content-available-width": "var(--reka-popper-available-width)",
        "--reka-context-menu-content-available-height": "var(--reka-popper-available-height)",
        "--reka-context-menu-trigger-width": "var(--reka-popper-anchor-width)",
        "--reka-context-menu-trigger-height": "var(--reka-popper-anchor-height)"
      },
      onCloseAutoFocus: u[0] || (u[0] = (d) => {
        !d.defaultPrevented && l.value && d.preventDefault(), l.value = !1;
      }),
      onInteractOutside: u[1] || (u[1] = (d) => {
        d.detail.originalEvent.button === 2 && d.target === r(s).triggerElement.value && d.preventDefault(), !d.defaultPrevented && !r(s).modal.value && (l.value = !0);
      })
    }), {
      default: y(() => [_(i.$slots, "default")]),
      _: 3
    }, 16));
  }
}), I1 = A1, M1 = /* @__PURE__ */ b({
  __name: "ContextMenuGroup",
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
    return oe(), (n, a) => (g(), w(r(Ed), H(U(t)), {
      default: y(() => [_(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), R1 = M1, F1 = /* @__PURE__ */ b({
  __name: "ContextMenuItem",
  props: {
    disabled: {
      type: Boolean,
      required: !1
    },
    textValue: {
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
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = dn(t);
    return oe(), (s, l) => (g(), w(r(qs), H(U({
      ...n,
      ...r(o)
    })), {
      default: y(() => [_(s.$slots, "default")]),
      _: 3
    }, 16));
  }
}), q1 = F1, L1 = /* @__PURE__ */ b({
  __name: "ContextMenuItemIndicator",
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
    const t = e;
    return oe(), (n, a) => (g(), w(r(Jw), H(U(t)), {
      default: y(() => [_(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), Td = L1, V1 = /* @__PURE__ */ b({
  __name: "ContextMenuLabel",
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
    return oe(), (n, a) => (g(), w(r(d1), H(U(t)), {
      default: y(() => [_(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), N1 = V1, z1 = /* @__PURE__ */ b({
  __name: "ContextMenuPortal",
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
    return (n, a) => (g(), w(r(p1), H(U(t)), {
      default: y(() => [_(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), K1 = z1, j1 = /* @__PURE__ */ b({
  __name: "ContextMenuRadioGroup",
  props: {
    modelValue: {
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
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = dn(t);
    return oe(), (s, l) => (g(), w(r(g1), H(U({
      ...n,
      ...r(o)
    })), {
      default: y(() => [_(s.$slots, "default")]),
      _: 3
    }, 16));
  }
}), H1 = j1, W1 = /* @__PURE__ */ b({
  __name: "ContextMenuRadioItem",
  props: {
    value: {
      type: String,
      required: !0
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    textValue: {
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
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = dn(t);
    return oe(), (s, l) => (g(), w(r(y1), H(U({
      ...n,
      ...r(o)
    })), {
      default: y(() => [_(s.$slots, "default")]),
      _: 3
    }, 16));
  }
}), U1 = W1, G1 = /* @__PURE__ */ b({
  __name: "ContextMenuSeparator",
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
    return oe(), (n, a) => (g(), w(r(_1), H(U(t)), {
      default: y(() => [_(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), Y1 = G1, X1 = /* @__PURE__ */ b({
  __name: "ContextMenuSub",
  props: {
    defaultOpen: {
      type: Boolean,
      required: !1
    },
    open: {
      type: Boolean,
      required: !1,
      default: void 0
    }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, a = t;
    oe();
    const o = st(n, "open", a, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    });
    return (s, l) => (g(), w(r(C1), {
      open: r(o),
      "onUpdate:open": l[0] || (l[0] = (i) => Qe(o) ? o.value = i : null)
    }, {
      default: y(() => [_(s.$slots, "default", { open: r(o) })]),
      _: 3
    }, 8, ["open"]));
  }
}), Z1 = X1, Q1 = /* @__PURE__ */ b({
  __name: "ContextMenuSubContent",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    loop: {
      type: Boolean,
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
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "entryFocus",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(e, { emit: t }) {
    const o = ke(e, t);
    return oe(), (s, l) => (g(), w(r(S1), T(r(o), { style: {
      "--reka-context-menu-content-transform-origin": "var(--reka-popper-transform-origin)",
      "--reka-context-menu-content-available-width": "var(--reka-popper-available-width)",
      "--reka-context-menu-content-available-height": "var(--reka-popper-available-height)",
      "--reka-context-menu-trigger-width": "var(--reka-popper-anchor-width)",
      "--reka-context-menu-trigger-height": "var(--reka-popper-anchor-height)"
    } }), {
      default: y(() => [_(s.$slots, "default")]),
      _: 3
    }, 16));
  }
}), J1 = Q1, ex = /* @__PURE__ */ b({
  __name: "ContextMenuSubTrigger",
  props: {
    disabled: {
      type: Boolean,
      required: !1
    },
    textValue: {
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
    const t = e;
    return oe(), (n, a) => (g(), w(r(O1), H(U(t)), {
      default: y(() => [_(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), tx = ex;
function Hl(e) {
  return e.pointerType !== "mouse";
}
var nx = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "ContextMenuTrigger",
  props: {
    disabled: {
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
      default: "span"
    }
  },
  setup(e) {
    const t = e, { disabled: n } = pe(t), { forwardRef: a, currentElement: o } = oe(), s = kd(), l = $({
      x: 0,
      y: 0
    }), i = E(() => ({ getBoundingClientRect: () => ({
      width: 0,
      height: 0,
      left: l.value.x,
      right: l.value.x,
      top: l.value.y,
      bottom: l.value.y,
      ...l.value
    }) })), u = $(0);
    function d() {
      window.clearTimeout(u.value);
    }
    function p(v) {
      l.value = {
        x: v.clientX,
        y: v.clientY
      }, s.onOpenChange(!0);
    }
    async function c(v) {
      n.value || (await re(), v.defaultPrevented || (d(), p(v), v.preventDefault()));
    }
    async function f(v) {
      n.value || (await re(), Hl(v) && !v.defaultPrevented && (d(), u.value = window.setTimeout(() => p(v), s.pressOpenDelay.value)));
    }
    async function m(v) {
      n.value || (await re(), Hl(v) && !v.defaultPrevented && d());
    }
    return de(() => {
      o.value && (s.triggerElement.value = o.value);
    }), (v, h) => (g(), V(Pe, null, [R(r(Bd), {
      as: "template",
      reference: i.value
    }, null, 8, ["reference"]), R(r(ue), T({
      ref: r(a),
      as: v.as,
      "as-child": v.asChild,
      "data-state": r(s).open.value ? "open" : "closed",
      "data-disabled": r(n) ? "" : void 0,
      style: {
        WebkitTouchCallout: "none",
        pointerEvents: "auto"
      }
    }, v.$attrs, {
      onContextmenu: c,
      onPointerdown: f,
      onPointermove: m,
      onPointercancel: m,
      onPointerup: m
    }), {
      default: y(() => [_(v.$slots, "default")]),
      _: 3
    }, 16, [
      "as",
      "as-child",
      "data-state",
      "data-disabled"
    ])], 64));
  }
}), ax = nx;
const [En, ox] = Le(["NavigationMenuRoot", "NavigationMenuSub"], "NavigationMenuContext");
var rx = /* @__PURE__ */ b({
  __name: "NavigationMenuRoot",
  props: {
    modelValue: {
      type: String,
      required: !1,
      default: void 0
    },
    defaultValue: {
      type: String,
      required: !1
    },
    dir: {
      type: String,
      required: !1
    },
    orientation: {
      type: String,
      required: !1,
      default: "horizontal"
    },
    delayDuration: {
      type: Number,
      required: !1,
      default: 200
    },
    skipDelayDuration: {
      type: Number,
      required: !1,
      default: 300
    },
    disableClickTrigger: {
      type: Boolean,
      required: !1,
      default: !1
    },
    disableHoverTrigger: {
      type: Boolean,
      required: !1,
      default: !1
    },
    disablePointerLeaveClose: {
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
      required: !1,
      default: "nav"
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = st(n, "modelValue", t, {
      defaultValue: n.defaultValue ?? "",
      passive: n.modelValue === void 0
    }), s = $(""), { forwardRef: l, currentElement: i } = oe(), u = $(), d = $(), p = $(), { getItems: c, CollectionSlot: f } = Ot({
      key: "NavigationMenu",
      isProvider: !0
    }), { delayDuration: m, skipDelayDuration: v, dir: h, disableClickTrigger: x, disableHoverTrigger: C, unmountOnHide: S } = pe(n), B = aa(h), P = Ro(!1, v), O = E(() => o.value !== "" || P.value ? 150 : m.value), I = Hb((k) => {
      typeof k == "string" && (s.value = o.value, o.value = k);
    }, O);
    return _e(() => {
      if (!o.value) return;
      const k = c().map((F) => F.ref);
      p.value = k.find((F) => F.id.includes(o.value));
    }), ox({
      isRootMenu: !0,
      modelValue: o,
      previousValue: s,
      baseId: it(void 0, "reka-navigation-menu"),
      disableClickTrigger: x,
      disableHoverTrigger: C,
      dir: B,
      unmountOnHide: S,
      orientation: n.orientation,
      rootNavigationMenu: i,
      indicatorTrack: u,
      activeTrigger: p,
      onIndicatorTrackChange: (k) => {
        u.value = k;
      },
      viewport: d,
      onViewportChange: (k) => {
        d.value = k;
      },
      onTriggerEnter: (k) => {
        I(k);
      },
      onTriggerLeave: () => {
        P.value = !0, I("");
      },
      onContentEnter: () => {
        I();
      },
      onContentLeave: () => {
        n.disablePointerLeaveClose || I("");
      },
      onItemSelect: (k) => {
        s.value = o.value, o.value = k;
      },
      onItemDismiss: () => {
        s.value = o.value, o.value = "";
      }
    }), (k, F) => (g(), w(r(f), null, {
      default: y(() => [R(r(ue), {
        ref: r(l),
        "aria-label": "Main",
        as: k.as,
        "as-child": k.asChild,
        "data-orientation": k.orientation,
        dir: r(B),
        "data-reka-navigation-menu": ""
      }, {
        default: y(() => [_(k.$slots, "default", { modelValue: r(o) })]),
        _: 3
      }, 8, [
        "as",
        "as-child",
        "data-orientation",
        "dir"
      ])]),
      _: 3
    }));
  }
}), sx = rx;
function Vo(e) {
  return e ? "open" : "closed";
}
function Dd(e, t) {
  return `${e}-trigger-${t}`;
}
function Ls(e, t) {
  return `${e}-content-${t}`;
}
const lx = "navigationMenu.linkSelect", to = "navigationMenu.rootContentDismiss";
function kr(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (a) => {
    const o = a.tagName === "INPUT" && a.type === "hidden";
    return a.disabled || a.hidden || o ? NodeFilter.FILTER_SKIP : a.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Ad(e) {
  const t = We();
  return e.some((n) => n === t ? !0 : (n.focus(), We() !== t));
}
function ix(e) {
  return e.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    e.forEach((t) => {
      const n = t.dataset.tabindex;
      t.setAttribute("tabindex", n);
    });
  };
}
function Id(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
const [Vs, ux] = Le("NavigationMenuItem");
var dx = /* @__PURE__ */ b({
  __name: "NavigationMenuItem",
  props: {
    value: {
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
      default: "li"
    }
  },
  setup(e) {
    const t = e;
    oe();
    const { getItems: n } = Ot({ key: "NavigationMenu" }), a = En(), o = it(t.value), s = $(), l = $(), i = Ls(a.baseId, o);
    let u = () => ({});
    const d = $(!1);
    async function p(v = "start") {
      const h = document.getElementById(i);
      if (h) {
        u();
        const x = kr(h);
        x.length && Ad(v === "start" ? x : x.reverse());
      }
    }
    function c() {
      const v = document.getElementById(i);
      if (v) {
        const h = kr(v);
        h.length && (u = ix(h));
      }
    }
    ux({
      value: o,
      contentId: i,
      triggerRef: s,
      focusProxyRef: l,
      wasEscapeCloseRef: d,
      onEntryKeyDown: p,
      onFocusProxyEnter: p,
      onContentFocusOutside: c,
      onRootContentClose: c
    });
    function f() {
      var v;
      a.onItemDismiss(), (v = s.value) == null || v.focus();
    }
    function m(v) {
      const h = We();
      if (v.keyCode === 32 || v.key === "Enter") if (a.modelValue.value === o) {
        f(), v.preventDefault();
        return;
      } else {
        v.target.click(), v.preventDefault();
        return;
      }
      const x = n().filter((S) => {
        var B;
        return (B = S.ref.parentElement) == null ? void 0 : B.hasAttribute("data-menu-item");
      }).map((S) => S.ref);
      if (!x.includes(h)) return;
      const C = Ps(v, h, void 0, {
        itemsArray: x,
        loop: !1
      });
      C && (C == null || C.focus()), v.preventDefault(), v.stopPropagation();
    }
    return (v, h) => (g(), w(r(ue), {
      "as-child": v.asChild,
      as: v.as,
      "data-menu-item": "",
      onKeydown: lt(m, [
        "up",
        "down",
        "left",
        "right",
        "home",
        "end",
        "space"
      ])
    }, {
      default: y(() => [_(v.$slots, "default")]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), cx = dx, px = /* @__PURE__ */ b({
  __name: "NavigationMenuContentImpl",
  props: {
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
    "interactOutside"
  ],
  setup(e, { emit: t }) {
    const n = e, a = t, { getItems: o } = Ot({ key: "NavigationMenu" }), { forwardRef: s, currentElement: l } = oe(), i = En(), u = Vs(), d = Dd(i.baseId, u.value), p = Ls(i.baseId, u.value), c = $(null), f = E(() => {
      const S = o().map((F) => F.ref.id.split("trigger-")[1]);
      i.dir.value === "rtl" && S.reverse();
      const B = S.indexOf(i.modelValue.value), P = S.indexOf(i.previousValue.value), O = u.value === i.modelValue.value, I = P === S.indexOf(u.value);
      if (!O && !I) return c.value;
      const k = (() => {
        if (B !== P) {
          if (O && P !== -1) return B > P ? "from-end" : "from-start";
          if (I && B !== -1) return B > P ? "to-start" : "to-end";
        }
        return null;
      })();
      return c.value = k, k;
    });
    function m(S) {
      var P, O;
      if (a("focusOutside", S), a("interactOutside", S), S.detail.originalEvent.target.hasAttribute("data-navigation-menu-trigger") && S.preventDefault(), !S.defaultPrevented) {
        u.onContentFocusOutside();
        const I = S.target;
        (O = (P = i.rootNavigationMenu) == null ? void 0 : P.value) != null && O.contains(I) && S.preventDefault();
      }
    }
    function v(S) {
      var B;
      if (a("pointerDownOutside", S), !S.defaultPrevented) {
        const P = S.target, O = o().some((k) => k.ref.contains(P)), I = i.isRootMenu && ((B = i.viewport.value) == null ? void 0 : B.contains(P));
        (O || I || !i.isRootMenu) && S.preventDefault();
      }
    }
    _e((S) => {
      const B = l.value;
      if (i.isRootMenu && B) {
        const P = () => {
          var O;
          i.onItemDismiss(), u.onRootContentClose(), B.contains(We()) && ((O = u.triggerRef.value) == null || O.focus());
        };
        B.addEventListener(to, P), S(() => B.removeEventListener(to, P));
      }
    });
    function h(S) {
      var B, P;
      a("escapeKeyDown", S), S.defaultPrevented || (i.onItemDismiss(), (P = (B = u.triggerRef) == null ? void 0 : B.value) == null || P.focus(), u.wasEscapeCloseRef.value = !0);
    }
    function x(S) {
      var k;
      if (S.target.closest("[data-reka-navigation-menu]") !== i.rootNavigationMenu.value) return;
      const B = S.altKey || S.ctrlKey || S.metaKey, P = S.key === "Tab" && !B, O = kr(S.currentTarget);
      if (P) {
        const F = We(), D = O.findIndex((L) => L === F), q = S.shiftKey ? O.slice(0, D).reverse() : O.slice(D + 1, O.length);
        if (Ad(q)) S.preventDefault();
        else {
          (k = u.focusProxyRef.value) == null || k.focus();
          return;
        }
      }
      const I = Ps(S, We(), void 0, {
        itemsArray: O,
        loop: !1,
        enableIgnoredElement: !0
      });
      I == null || I.focus();
    }
    function C() {
      var B;
      const S = new Event(to, {
        bubbles: !0,
        cancelable: !0
      });
      (B = l.value) == null || B.dispatchEvent(S);
    }
    return (S, B) => (g(), w(r(qo), T({
      id: r(p),
      ref: r(s),
      "aria-labelledby": r(d),
      "data-motion": f.value,
      "data-state": r(Vo)(r(i).modelValue.value === r(u).value),
      "data-orientation": r(i).orientation
    }, n, {
      onKeydown: x,
      onEscapeKeyDown: h,
      onPointerDownOutside: v,
      onFocusOutside: m,
      onDismiss: C
    }), {
      default: y(() => [_(S.$slots, "default")]),
      _: 3
    }, 16, [
      "id",
      "aria-labelledby",
      "data-motion",
      "data-state",
      "data-orientation"
    ]));
  }
}), fx = px, vx = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "NavigationMenuContent",
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
    "interactOutside"
  ],
  setup(e, { emit: t }) {
    const n = e, a = t, o = ke(Mo(n, "forceMount"), a), { forwardRef: s } = oe(), l = En(), i = Vs(), u = E(() => i.value === l.modelValue.value), d = E(() => l.viewport.value && !l.modelValue.value && l.previousValue.value ? l.previousValue.value === i.value : !1);
    return (p, c) => (g(), w(hn, {
      to: r(Tt) && r(l).viewport.value ? r(l).viewport.value : "body",
      disabled: r(Tt) && r(l).viewport.value ? !r(l).viewport.value : !0
    }, [R(r($t), {
      present: p.forceMount || u.value || d.value,
      "force-mount": !r(l).unmountOnHide.value
    }, {
      default: y(({ present: f }) => [R(fx, T({
        ref: r(s),
        "data-state": r(Vo)(u.value),
        style: { pointerEvents: !u.value && r(l).isRootMenu ? "none" : void 0 }
      }, {
        ...p.$attrs,
        ...r(o)
      }, {
        hidden: !f,
        onPointerenter: c[0] || (c[0] = (m) => r(l).onContentEnter(r(i).value)),
        onPointerleave: c[1] || (c[1] = (m) => r(Id)(() => r(l).onContentLeave())(m)),
        onPointerDownOutside: c[2] || (c[2] = (m) => a("pointerDownOutside", m)),
        onFocusOutside: c[3] || (c[3] = (m) => a("focusOutside", m)),
        onInteractOutside: c[4] || (c[4] = (m) => a("interactOutside", m))
      }), {
        default: y(() => [_(p.$slots, "default")]),
        _: 2
      }, 1040, [
        "data-state",
        "style",
        "hidden"
      ])]),
      _: 3
    }, 8, ["present", "force-mount"])], 8, ["to", "disabled"]));
  }
}), mx = vx, gx = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "NavigationMenuIndicator",
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
    const t = e, { forwardRef: n } = oe(), a = En(), o = $(), s = E(() => a.orientation === "horizontal"), l = E(() => !!a.modelValue.value), { activeTrigger: i } = a;
    function u() {
      i.value && (o.value = {
        size: s.value ? i.value.offsetWidth : i.value.offsetHeight,
        position: s.value ? i.value.offsetLeft : i.value.offsetTop
      });
    }
    return _e(() => {
      a.modelValue.value && u();
    }), co(i, u), co(a.indicatorTrack, u), (d, p) => r(a).indicatorTrack.value ? (g(), w(hn, {
      key: 0,
      to: r(a).indicatorTrack.value
    }, [R(r($t), { present: d.forceMount || l.value }, {
      default: y(() => [R(r(ue), T({
        ref: r(n),
        "aria-hidden": "true",
        "data-state": l.value ? "visible" : "hidden",
        "data-orientation": r(a).orientation,
        "as-child": t.asChild,
        as: d.as,
        style: { ...o.value ? {
          "--reka-navigation-menu-indicator-size": `${o.value.size}px`,
          "--reka-navigation-menu-indicator-position": `${o.value.position}px`
        } : {} }
      }, d.$attrs), {
        default: y(() => [_(d.$slots, "default")]),
        _: 3
      }, 16, [
        "data-state",
        "data-orientation",
        "as-child",
        "as",
        "style"
      ])]),
      _: 3
    }, 8, ["present"])], 8, ["to"])) : fe("v-if", !0);
  }
}), hx = gx, yx = /* @__PURE__ */ b({
  __name: "NavigationMenuLink",
  props: {
    active: {
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
      default: "a"
    }
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, a = t, { CollectionItem: o } = Ot({ key: "NavigationMenu" });
    oe();
    async function s(l) {
      var u;
      const i = new CustomEvent(lx, {
        bubbles: !0,
        cancelable: !0,
        detail: { originalEvent: l }
      });
      if (a("select", i), !i.defaultPrevented && !l.metaKey) {
        const d = new CustomEvent(to, {
          bubbles: !0,
          cancelable: !0
        });
        (u = l.target) == null || u.dispatchEvent(d);
      }
    }
    return (l, i) => (g(), w(r(o), null, {
      default: y(() => [R(r(ue), {
        as: l.as,
        "data-active": l.active ? "" : void 0,
        "aria-current": l.active ? "page" : void 0,
        "as-child": n.asChild,
        onClick: s
      }, {
        default: y(() => [_(l.$slots, "default")]),
        _: 3
      }, 8, [
        "as",
        "data-active",
        "aria-current",
        "as-child"
      ])]),
      _: 3
    }));
  }
}), bx = yx, _x = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "NavigationMenuList",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "ul"
    }
  },
  setup(e) {
    const t = e, n = En(), { forwardRef: a, currentElement: o } = oe();
    return de(() => {
      n.onIndicatorTrackChange(o.value);
    }), (s, l) => (g(), w(r(ue), {
      ref: r(a),
      style: { position: "relative" }
    }, {
      default: y(() => [R(r(ue), T(s.$attrs, {
        "as-child": t.asChild,
        as: s.as,
        "data-orientation": r(n).orientation
      }), {
        default: y(() => [_(s.$slots, "default")]),
        _: 3
      }, 16, [
        "as-child",
        "as",
        "data-orientation"
      ])]),
      _: 3
    }, 512));
  }
}), wx = _x;
const xx = ["aria-owns"];
var Cx = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "NavigationMenuTrigger",
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
    const t = e, n = En(), a = Vs(), { CollectionItem: o } = Ot({ key: "NavigationMenu" }), { forwardRef: s, currentElement: l } = oe(), i = $(""), u = $(""), d = Ro(!1, 300), p = $(!1), c = E(() => a.value === n.modelValue.value);
    de(() => {
      a.triggerRef = l, i.value = Dd(n.baseId, a.value), u.value = Ls(n.baseId, a.value);
    });
    function f() {
      n.disableHoverTrigger.value || (p.value = !1, a.wasEscapeCloseRef.value = !1);
    }
    function m(B) {
      if (!n.disableHoverTrigger.value && B.pointerType === "mouse") {
        if (t.disabled || p.value || a.wasEscapeCloseRef.value || d.value) return;
        n.onTriggerEnter(a.value), d.value = !0;
      }
    }
    function v(B) {
      if (!n.disableHoverTrigger.value && B.pointerType === "mouse") {
        if (t.disabled) return;
        n.onTriggerLeave(), d.value = !1;
      }
    }
    function h(B) {
      (!("pointerType" in B) || B.pointerType === "mouse") && n.disableClickTrigger.value || d.value || (c.value ? n.onItemSelect("") : n.onItemSelect(a.value), p.value = c.value);
    }
    function x(B) {
      const O = {
        horizontal: "ArrowDown",
        vertical: n.dir.value === "rtl" ? "ArrowLeft" : "ArrowRight"
      }[n.orientation];
      c.value && B.key === O && (a.onEntryKeyDown(), B.preventDefault(), B.stopPropagation());
    }
    function C(B) {
      a.focusProxyRef.value = Dt(B);
    }
    function S(B) {
      const P = document.getElementById(a.contentId), O = B.relatedTarget, I = O === l.value, k = P == null ? void 0 : P.contains(O);
      (I || !k) && a.onFocusProxyEnter(I ? "start" : "end");
    }
    return (B, P) => (g(), V(Pe, null, [R(r(o), null, {
      default: y(() => [R(r(ue), T({
        id: i.value,
        ref: r(s),
        disabled: B.disabled,
        "data-disabled": B.disabled ? "" : void 0,
        "data-state": r(Vo)(c.value),
        "data-navigation-menu-trigger": "",
        "aria-expanded": c.value,
        "aria-controls": u.value,
        "as-child": t.asChild,
        as: B.as
      }, B.$attrs, {
        onPointerenter: f,
        onPointermove: m,
        onPointerleave: v,
        onClick: h,
        onKeydown: x
      }), {
        default: y(() => [_(B.$slots, "default")]),
        _: 3
      }, 16, [
        "id",
        "disabled",
        "data-disabled",
        "data-state",
        "aria-expanded",
        "aria-controls",
        "as-child",
        "as"
      ])]),
      _: 3
    }), c.value ? (g(), V(Pe, { key: 0 }, [R(r(gd), {
      ref: C,
      "aria-hidden": "true",
      tabindex: 0,
      onFocus: S
    }), r(n).viewport ? (g(), V("span", {
      key: 0,
      "aria-owns": u.value
    }, null, 8, xx)) : fe("v-if", !0)], 64)) : fe("v-if", !0)], 64));
  }
}), Bx = Cx, Sx = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "NavigationMenuViewport",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    align: {
      type: String,
      required: !1,
      default: "center"
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
    var m;
    const t = e, { forwardRef: n, currentElement: a } = oe(), o = En(), { activeTrigger: s, rootNavigationMenu: l, modelValue: i } = o, u = $(), d = $(), p = E(() => !!o.modelValue.value);
    ae(a, () => {
      o.onViewportChange(a.value);
    });
    const c = $();
    ae([i, p], () => {
      re(() => {
        a.value && requestAnimationFrame(() => {
          var h;
          const v = (h = a.value) == null ? void 0 : h.querySelector("[data-state=open]");
          c.value = v;
        });
      });
    }, { immediate: !0 });
    function f() {
      if (c.value && s.value && l.value) {
        const v = document.documentElement.offsetWidth, h = document.documentElement.offsetHeight, x = l.value.getBoundingClientRect(), C = s.value.getBoundingClientRect(), { offsetWidth: S, offsetHeight: B } = c.value, P = C.left - x.left, O = C.top - x.top;
        let I = null, k = null;
        switch (t.align) {
          case "start":
            I = P, k = O;
            break;
          case "end":
            I = P - S + C.width, k = O - B + C.height;
            break;
          default:
            I = P - S / 2 + C.width / 2, k = O - B / 2 + C.height / 2;
        }
        const F = 10;
        I + x.left < F && (I = F - x.left);
        const D = I + x.left + S;
        D > v - F && (I -= D - v + F, I < F - x.left && (I = F - x.left)), k + x.top < F && (k = F - x.top);
        const A = k + x.top + B;
        A > h - F && (k -= A - h + F, k < F - x.top && (k = F - x.top)), I = Math.round(I), k = Math.round(k), d.value = {
          left: I,
          top: k
        };
      }
    }
    return co(c, () => {
      c.value && (u.value = {
        width: c.value.offsetWidth,
        height: c.value.offsetHeight
      }, f());
    }), co([(m = globalThis.document) == null ? void 0 : m.body, l], () => {
      f();
    }), (v, h) => (g(), w(r($t), {
      present: v.forceMount || p.value,
      "force-mount": !r(o).unmountOnHide.value,
      onAfterLeave: h[2] || (h[2] = () => {
        u.value = void 0, d.value = void 0;
      })
    }, {
      default: y(({ present: x }) => {
        var C, S, B, P;
        return [R(r(ue), T(v.$attrs, {
          ref: r(n),
          as: v.as,
          "as-child": v.asChild,
          "data-state": r(Vo)(p.value),
          "data-orientation": r(o).orientation,
          style: {
            pointerEvents: !p.value && r(o).isRootMenu ? "none" : void 0,
            "--reka-navigation-menu-viewport-width": u.value ? `${(C = u.value) == null ? void 0 : C.width}px` : void 0,
            "--reka-navigation-menu-viewport-height": u.value ? `${(S = u.value) == null ? void 0 : S.height}px` : void 0,
            "--reka-navigation-menu-viewport-left": d.value ? `${(B = d.value) == null ? void 0 : B.left}px` : void 0,
            "--reka-navigation-menu-viewport-top": d.value ? `${(P = d.value) == null ? void 0 : P.top}px` : void 0
          },
          hidden: !x,
          onPointerenter: h[0] || (h[0] = (O) => r(o).onContentEnter(r(o).modelValue.value)),
          onPointerleave: h[1] || (h[1] = (O) => r(Id)(() => r(o).onContentLeave())(O))
        }), {
          default: y(() => [_(v.$slots, "default")]),
          _: 2
        }, 1040, [
          "as",
          "as-child",
          "data-state",
          "data-orientation",
          "style",
          "hidden"
        ])];
      }),
      _: 3
    }, 8, ["present", "force-mount"]));
  }
}), $x = Sx, Ox = /* @__PURE__ */ b({
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
    return oe(), (n, a) => (g(), w(r(ue), T(t, { "data-type": "ellipsis" }), {
      default: y(() => [_(n.$slots, "default", {}, () => [a[0] || (a[0] = Be("…"))])]),
      _: 3
    }, 16));
  }
}), Ex = Ox;
const [oa, Px] = Le("PaginationRoot");
var kx = /* @__PURE__ */ b({
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
    const n = e, a = t, { siblingCount: o, disabled: s, showEdges: l } = pe(n);
    oe();
    const i = st(n, "page", a, {
      defaultValue: n.defaultPage,
      passive: n.page === void 0
    }), u = E(() => Math.max(1, Math.ceil(n.total / (n.itemsPerPage || 1))));
    return Px({
      page: i,
      onPageChange(d) {
        i.value = d;
      },
      pageCount: u,
      siblingCount: o,
      disabled: s,
      showEdges: l
    }), (d, p) => (g(), w(r(ue), {
      as: d.as,
      "as-child": d.asChild
    }, {
      default: y(() => [_(d.$slots, "default", {
        page: r(i),
        pageCount: u.value
      })]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Tx = kx, Dx = /* @__PURE__ */ b({
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
    const t = e, n = oa();
    oe();
    const a = E(() => n.page.value === 1 || n.disabled.value);
    return (o, s) => (g(), w(r(ue), T(t, {
      "aria-label": "First Page",
      type: o.as === "button" ? "button" : void 0,
      disabled: a.value,
      onClick: s[0] || (s[0] = (l) => !a.value && r(n).onPageChange(1))
    }), {
      default: y(() => [_(o.$slots, "default", {}, () => [s[1] || (s[1] = Be("First page"))])]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), Ax = Dx, Ix = /* @__PURE__ */ b({
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
    const t = e, n = oa();
    oe();
    const a = E(() => n.page.value === n.pageCount.value || n.disabled.value);
    return (o, s) => (g(), w(r(ue), T(t, {
      "aria-label": "Last Page",
      type: o.as === "button" ? "button" : void 0,
      disabled: a.value,
      onClick: s[0] || (s[0] = (l) => !a.value && r(n).onPageChange(r(n).pageCount.value))
    }), {
      default: y(() => [_(o.$slots, "default", {}, () => [s[1] || (s[1] = Be("Last page"))])]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), Mx = Ix;
function Jt(e, t) {
  const n = t - e + 1;
  return Array.from({ length: n }, (a, o) => o + e);
}
function Rx(e) {
  return e.map((t) => typeof t == "number" ? {
    type: "page",
    value: t
  } : { type: "ellipsis" });
}
const Ya = "ellipsis";
function Fx(e, t, n, a) {
  const s = t, l = Math.max(e - n, 1), i = Math.min(e + n, s);
  if (a) {
    const d = Math.min(2 * n + 5, t) - 2, p = l > 3 && Math.abs(s - d - 1 + 1) > 2 && Math.abs(l - 1) > 2, c = i < s - 2 && Math.abs(s - d) > 2 && Math.abs(s - i) > 2;
    if (!p && c)
      return [
        ...Jt(1, d),
        Ya,
        s
      ];
    if (p && !c) {
      const m = Jt(s - d + 1, s);
      return [
        1,
        Ya,
        ...m
      ];
    }
    if (p && c) {
      const m = Jt(l, i);
      return [
        1,
        Ya,
        ...m,
        Ya,
        s
      ];
    }
    return Jt(1, s);
  } else {
    const u = n * 2 + 1;
    return t < u ? Jt(1, s) : e <= n + 1 ? Jt(1, u) : t - e <= n ? Jt(t - u + 1, s) : Jt(l, i);
  }
}
var qx = /* @__PURE__ */ b({
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
    oe();
    const n = oa(), a = E(() => Rx(Fx(n.page.value, n.pageCount.value, n.siblingCount.value, n.showEdges.value)));
    return (o, s) => (g(), w(r(ue), H(U(t)), {
      default: y(() => [_(o.$slots, "default", { items: a.value })]),
      _: 3
    }, 16));
  }
}), Lx = qx, Vx = /* @__PURE__ */ b({
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
    oe();
    const n = oa(), a = E(() => n.page.value === t.value), o = E(() => n.disabled.value);
    return (s, l) => (g(), w(r(ue), T(t, {
      "data-type": "page",
      "aria-label": `Page ${s.value}`,
      "aria-current": a.value ? "page" : void 0,
      "data-selected": a.value ? "true" : void 0,
      disabled: o.value,
      type: s.as === "button" ? "button" : void 0,
      onClick: l[0] || (l[0] = (i) => !o.value && r(n).onPageChange(s.value))
    }), {
      default: y(() => [_(s.$slots, "default", {}, () => [Be(Me(s.value), 1)])]),
      _: 3
    }, 16, [
      "aria-label",
      "aria-current",
      "data-selected",
      "disabled",
      "type"
    ]));
  }
}), Nx = Vx, zx = /* @__PURE__ */ b({
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
    oe();
    const n = oa(), a = E(() => n.page.value === n.pageCount.value || n.disabled.value);
    return (o, s) => (g(), w(r(ue), T(t, {
      "aria-label": "Next Page",
      type: o.as === "button" ? "button" : void 0,
      disabled: a.value,
      onClick: s[0] || (s[0] = (l) => !a.value && r(n).onPageChange(r(n).page.value + 1))
    }), {
      default: y(() => [_(o.$slots, "default", {}, () => [s[1] || (s[1] = Be("Next page"))])]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), Kx = zx, jx = /* @__PURE__ */ b({
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
    oe();
    const n = oa(), a = E(() => n.page.value === 1 || n.disabled.value);
    return (o, s) => (g(), w(r(ue), T(t, {
      "aria-label": "Previous Page",
      type: o.as === "button" ? "button" : void 0,
      disabled: a.value,
      onClick: s[0] || (s[0] = (l) => !a.value && r(n).onPageChange(r(n).page.value - 1))
    }), {
      default: y(() => [_(o.$slots, "default", {}, () => [s[1] || (s[1] = Be("Prev page"))])]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), Hx = jx, Wx = /* @__PURE__ */ b({
  __name: "BaseSeparator",
  props: {
    orientation: {
      type: String,
      required: !1,
      default: "horizontal"
    },
    decorative: {
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
    const t = e, n = ["horizontal", "vertical"];
    function a(i) {
      return n.includes(i);
    }
    const o = E(() => a(t.orientation) ? t.orientation : "horizontal"), s = E(() => o.value === "vertical" ? t.orientation : void 0), l = E(() => t.decorative ? { role: "none" } : {
      "aria-orientation": s.value,
      role: "separator"
    });
    return (i, u) => (g(), w(r(ue), T({
      as: i.as,
      "as-child": i.asChild,
      "data-orientation": o.value
    }, l.value), {
      default: y(() => [_(i.$slots, "default")]),
      _: 3
    }, 16, [
      "as",
      "as-child",
      "data-orientation"
    ]));
  }
}), Ux = Wx, Gx = /* @__PURE__ */ b({
  __name: "Separator",
  props: {
    orientation: {
      type: String,
      required: !1,
      default: "horizontal"
    },
    decorative: {
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
    const t = e;
    return (n, a) => (g(), w(Ux, H(U(t)), {
      default: y(() => [_(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), Yx = Gx;
const JB = /* @__PURE__ */ b({
  __name: "BreadcrumbLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" },
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(r(ue), {
      as: e.as,
      "as-child": e.asChild,
      class: Y(r(M)("transition-colors hover:text-foreground", t.class))
    }, {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), eS = /* @__PURE__ */ b({
  __name: "BreadcrumbList",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("ol", {
      class: Y(
        r(M)(
          "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
          t.class
        )
      )
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), tS = /* @__PURE__ */ b({
  __name: "BreadcrumbPage",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("span", {
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      class: Y(r(M)("font-normal text-foreground", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), nS = /* @__PURE__ */ b({
  __name: "BreadcrumbSeparator",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("li", {
      role: "presentation",
      "aria-hidden": "true",
      class: Y(r(M)("[&>svg]:size-3.5", t.class))
    }, [
      _(n.$slots, "default", {}, () => [
        R(r(Da))
      ])
    ], 2));
  }
}), aS = /* @__PURE__ */ b({
  __name: "Card",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("div", {
      class: Y(r(M)("rounded-xl border bg-card text-card-foreground shadow", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), oS = /* @__PURE__ */ b({
  __name: "CardContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("div", {
      class: Y(r(M)("p-6 pt-0", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), rS = /* @__PURE__ */ b({
  __name: "CardDescription",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("p", {
      class: Y(r(M)("text-sm text-muted-foreground", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), sS = /* @__PURE__ */ b({
  __name: "CardFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("div", {
      class: Y(r(M)("flex items-center p-6 pt-0", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), lS = /* @__PURE__ */ b({
  __name: "CardHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("div", {
      class: Y(r(M)("flex flex-col gap-y-1.5 p-6", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), iS = /* @__PURE__ */ b({
  __name: "CardTitle",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("h3", {
      class: Y(r(M)("font-semibold leading-none tracking-tight", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
});
function Xx(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Wl(e) {
  return Xx(e) || Array.isArray(e);
}
function Zx() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Ns(e, t) {
  const n = Object.keys(e), a = Object.keys(t);
  if (n.length !== a.length) return !1;
  const o = JSON.stringify(Object.keys(e.breakpoints || {})), s = JSON.stringify(Object.keys(t.breakpoints || {}));
  return o !== s ? !1 : n.every((l) => {
    const i = e[l], u = t[l];
    return typeof i == "function" ? `${i}` == `${u}` : !Wl(i) || !Wl(u) ? i === u : Ns(i, u);
  });
}
function Ul(e) {
  return e.concat().sort((t, n) => t.name > n.name ? 1 : -1).map((t) => t.options);
}
function Qx(e, t) {
  if (e.length !== t.length) return !1;
  const n = Ul(e), a = Ul(t);
  return n.every((o, s) => {
    const l = a[s];
    return Ns(o, l);
  });
}
function zs(e) {
  return typeof e == "number";
}
function Tr(e) {
  return typeof e == "string";
}
function No(e) {
  return typeof e == "boolean";
}
function Gl(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Ne(e) {
  return Math.abs(e);
}
function Ks(e) {
  return Math.sign(e);
}
function fa(e, t) {
  return Ne(e - t);
}
function Jx(e, t) {
  if (e === 0 || t === 0 || Ne(e) <= Ne(t)) return 0;
  const n = fa(Ne(e), Ne(t));
  return Ne(n / e);
}
function eC(e) {
  return Math.round(e * 100) / 100;
}
function _a(e) {
  return wa(e).map(Number);
}
function Ct(e) {
  return e[Ma(e)];
}
function Ma(e) {
  return Math.max(0, e.length - 1);
}
function js(e, t) {
  return t === Ma(e);
}
function Yl(e, t = 0) {
  return Array.from(Array(e), (n, a) => t + a);
}
function wa(e) {
  return Object.keys(e);
}
function Md(e, t) {
  return [e, t].reduce((n, a) => (wa(a).forEach((o) => {
    const s = n[o], l = a[o], i = Gl(s) && Gl(l);
    n[o] = i ? Md(s, l) : l;
  }), n), {});
}
function Dr(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function tC(e, t) {
  const n = {
    start: a,
    center: o,
    end: s
  };
  function a() {
    return 0;
  }
  function o(u) {
    return s(u) / 2;
  }
  function s(u) {
    return t - u;
  }
  function l(u, d) {
    return Tr(e) ? n[e](u) : e(t, u, d);
  }
  return {
    measure: l
  };
}
function xa() {
  let e = [];
  function t(o, s, l, i = {
    passive: !0
  }) {
    let u;
    if ("addEventListener" in o)
      o.addEventListener(s, l, i), u = () => o.removeEventListener(s, l, i);
    else {
      const d = o;
      d.addListener(l), u = () => d.removeListener(l);
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
function nC(e, t, n, a) {
  const o = xa(), s = 1e3 / 60;
  let l = null, i = 0, u = 0;
  function d() {
    o.add(e, "visibilitychange", () => {
      e.hidden && v();
    });
  }
  function p() {
    m(), o.clear();
  }
  function c(x) {
    if (!u) return;
    l || (l = x, n(), n());
    const C = x - l;
    for (l = x, i += C; i >= s; )
      n(), i -= s;
    const S = i / s;
    a(S), u && (u = t.requestAnimationFrame(c));
  }
  function f() {
    u || (u = t.requestAnimationFrame(c));
  }
  function m() {
    t.cancelAnimationFrame(u), l = null, i = 0, u = 0;
  }
  function v() {
    l = null, i = 0;
  }
  return {
    init: d,
    destroy: p,
    start: f,
    stop: m,
    update: n,
    render: a
  };
}
function aC(e, t) {
  const n = t === "rtl", a = e === "y", o = a ? "y" : "x", s = a ? "x" : "y", l = !a && n ? -1 : 1, i = p(), u = c();
  function d(v) {
    const {
      height: h,
      width: x
    } = v;
    return a ? h : x;
  }
  function p() {
    return a ? "top" : n ? "right" : "left";
  }
  function c() {
    return a ? "bottom" : n ? "left" : "right";
  }
  function f(v) {
    return v * l;
  }
  return {
    scroll: o,
    cross: s,
    startEdge: i,
    endEdge: u,
    measureSize: d,
    direction: f
  };
}
function gn(e = 0, t = 0) {
  const n = Ne(e - t);
  function a(d) {
    return d < e;
  }
  function o(d) {
    return d > t;
  }
  function s(d) {
    return a(d) || o(d);
  }
  function l(d) {
    return s(d) ? a(d) ? e : t : d;
  }
  function i(d) {
    return n ? d - n * Math.ceil((d - t) / n) : d;
  }
  return {
    length: n,
    max: t,
    min: e,
    constrain: l,
    reachedAny: s,
    reachedMax: o,
    reachedMin: a,
    removeOffset: i
  };
}
function Rd(e, t, n) {
  const {
    constrain: a
  } = gn(0, e), o = e + 1;
  let s = l(t);
  function l(f) {
    return n ? Ne((o + f) % o) : a(f);
  }
  function i() {
    return s;
  }
  function u(f) {
    return s = l(f), c;
  }
  function d(f) {
    return p().set(i() + f);
  }
  function p() {
    return Rd(e, i(), n);
  }
  const c = {
    get: i,
    set: u,
    add: d,
    clone: p
  };
  return c;
}
function oC(e, t, n, a, o, s, l, i, u, d, p, c, f, m, v, h, x, C, S) {
  const {
    cross: B,
    direction: P
  } = e, O = ["INPUT", "SELECT", "TEXTAREA"], I = {
    passive: !1
  }, k = xa(), F = xa(), D = gn(50, 225).constrain(m.measure(20)), A = {
    mouse: 300,
    touch: 400
  }, q = {
    mouse: 500,
    touch: 600
  }, L = v ? 43 : 25;
  let ee = !1, G = 0, z = 0, N = !1, se = !1, Z = !1, K = !1;
  function ne(te) {
    if (!S) return;
    function be(Re) {
      (No(S) || S(te, Re)) && je(Re);
    }
    const Oe = t;
    k.add(Oe, "dragstart", (Re) => Re.preventDefault(), I).add(Oe, "touchmove", () => {
    }, I).add(Oe, "touchend", () => {
    }).add(Oe, "touchstart", be).add(Oe, "mousedown", be).add(Oe, "touchcancel", Q).add(Oe, "contextmenu", Q).add(Oe, "click", le, !0);
  }
  function X() {
    k.clear(), F.clear();
  }
  function Ce() {
    const te = K ? n : t;
    F.add(te, "touchmove", W, I).add(te, "touchend", Q).add(te, "mousemove", W, I).add(te, "mouseup", Q);
  }
  function Ie(te) {
    const be = te.nodeName || "";
    return O.includes(be);
  }
  function Se() {
    return (v ? q : A)[K ? "mouse" : "touch"];
  }
  function Te(te, be) {
    const Oe = c.add(Ks(te) * -1), Re = p.byDistance(te, !v).distance;
    return v || Ne(te) < D ? Re : x && be ? Re * 0.5 : p.byIndex(Oe.get(), 0).distance;
  }
  function je(te) {
    const be = Dr(te, a);
    K = be, Z = v && be && !te.buttons && ee, ee = fa(o.get(), l.get()) >= 2, !(be && te.button !== 0) && (Ie(te.target) || (N = !0, s.pointerDown(te), d.useFriction(0).useDuration(0), o.set(l), Ce(), G = s.readPoint(te), z = s.readPoint(te, B), f.emit("pointerDown")));
  }
  function W(te) {
    if (!Dr(te, a) && te.touches.length >= 2) return Q(te);
    const Oe = s.readPoint(te), Re = s.readPoint(te, B), rt = fa(Oe, G), ct = fa(Re, z);
    if (!se && !K && (!te.cancelable || (se = rt > ct, !se)))
      return Q(te);
    const ce = s.pointerMove(te);
    rt > h && (Z = !0), d.useFriction(0.3).useDuration(0.75), i.start(), o.add(P(ce)), te.preventDefault();
  }
  function Q(te) {
    const Oe = p.byDistance(0, !1).index !== c.get(), Re = s.pointerUp(te) * Se(), rt = Te(P(Re), Oe), ct = Jx(Re, rt), ce = L - 10 * ct, Ee = C + ct / 50;
    se = !1, N = !1, F.clear(), d.useDuration(ce).useFriction(Ee), u.distance(rt, !v), K = !1, f.emit("pointerUp");
  }
  function le(te) {
    Z && (te.stopPropagation(), te.preventDefault(), Z = !1);
  }
  function ve() {
    return N;
  }
  return {
    init: ne,
    destroy: X,
    pointerDown: ve
  };
}
function rC(e, t) {
  let a, o;
  function s(c) {
    return c.timeStamp;
  }
  function l(c, f) {
    const v = `client${(f || e.scroll) === "x" ? "X" : "Y"}`;
    return (Dr(c, t) ? c : c.touches[0])[v];
  }
  function i(c) {
    return a = c, o = c, l(c);
  }
  function u(c) {
    const f = l(c) - l(o), m = s(c) - s(a) > 170;
    return o = c, m && (a = c), f;
  }
  function d(c) {
    if (!a || !o) return 0;
    const f = l(o) - l(a), m = s(c) - s(a), v = s(c) - s(o) > 170, h = f / m;
    return m && !v && Ne(h) > 0.1 ? h : 0;
  }
  return {
    pointerDown: i,
    pointerMove: u,
    pointerUp: d,
    readPoint: l
  };
}
function sC() {
  function e(n) {
    const {
      offsetTop: a,
      offsetLeft: o,
      offsetWidth: s,
      offsetHeight: l
    } = n;
    return {
      top: a,
      right: o + s,
      bottom: a + l,
      left: o,
      width: s,
      height: l
    };
  }
  return {
    measure: e
  };
}
function lC(e) {
  function t(a) {
    return e * (a / 100);
  }
  return {
    measure: t
  };
}
function iC(e, t, n, a, o, s, l) {
  const i = [e].concat(a);
  let u, d, p = [], c = !1;
  function f(x) {
    return o.measureSize(l.measure(x));
  }
  function m(x) {
    if (!s) return;
    d = f(e), p = a.map(f);
    function C(S) {
      for (const B of S) {
        if (c) return;
        const P = B.target === e, O = a.indexOf(B.target), I = P ? d : p[O], k = f(P ? e : a[O]);
        if (Ne(k - I) >= 0.5) {
          x.reInit(), t.emit("resize");
          break;
        }
      }
    }
    u = new ResizeObserver((S) => {
      (No(s) || s(x, S)) && C(S);
    }), n.requestAnimationFrame(() => {
      i.forEach((S) => u.observe(S));
    });
  }
  function v() {
    c = !0, u && u.disconnect();
  }
  return {
    init: m,
    destroy: v
  };
}
function uC(e, t, n, a, o, s) {
  let l = 0, i = 0, u = o, d = s, p = e.get(), c = 0;
  function f() {
    const I = a.get() - e.get(), k = !u;
    let F = 0;
    return k ? (l = 0, n.set(a), e.set(a), F = I) : (n.set(e), l += I / u, l *= d, p += l, e.add(l), F = p - c), i = Ks(F), c = p, O;
  }
  function m() {
    const I = a.get() - t.get();
    return Ne(I) < 1e-3;
  }
  function v() {
    return u;
  }
  function h() {
    return i;
  }
  function x() {
    return l;
  }
  function C() {
    return B(o);
  }
  function S() {
    return P(s);
  }
  function B(I) {
    return u = I, O;
  }
  function P(I) {
    return d = I, O;
  }
  const O = {
    direction: h,
    duration: v,
    velocity: x,
    seek: f,
    settled: m,
    useBaseFriction: S,
    useBaseDuration: C,
    useFriction: P,
    useDuration: B
  };
  return O;
}
function dC(e, t, n, a, o) {
  const s = o.measure(10), l = o.measure(50), i = gn(0.1, 0.99);
  let u = !1;
  function d() {
    return !(u || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
  }
  function p(m) {
    if (!d()) return;
    const v = e.reachedMin(t.get()) ? "min" : "max", h = Ne(e[v] - t.get()), x = n.get() - t.get(), C = i.constrain(h / l);
    n.subtract(x * C), !m && Ne(x) < s && (n.set(e.constrain(n.get())), a.useDuration(25).useBaseFriction());
  }
  function c(m) {
    u = !m;
  }
  return {
    shouldConstrain: d,
    constrain: p,
    toggleActive: c
  };
}
function cC(e, t, n, a, o) {
  const s = gn(-t + e, 0), l = c(), i = p(), u = f();
  function d(v, h) {
    return fa(v, h) <= 1;
  }
  function p() {
    const v = l[0], h = Ct(l), x = l.lastIndexOf(v), C = l.indexOf(h) + 1;
    return gn(x, C);
  }
  function c() {
    return n.map((v, h) => {
      const {
        min: x,
        max: C
      } = s, S = s.constrain(v), B = !h, P = js(n, h);
      return B ? C : P || d(x, S) ? x : d(C, S) ? C : S;
    }).map((v) => parseFloat(v.toFixed(3)));
  }
  function f() {
    if (t <= e + o) return [s.max];
    if (a === "keepSnaps") return l;
    const {
      min: v,
      max: h
    } = i;
    return l.slice(v, h);
  }
  return {
    snapsContained: u,
    scrollContainLimit: i
  };
}
function pC(e, t, n) {
  const a = t[0], o = n ? a - e : Ct(t);
  return {
    limit: gn(o, a)
  };
}
function fC(e, t, n, a) {
  const s = t.min + 0.1, l = t.max + 0.1, {
    reachedMin: i,
    reachedMax: u
  } = gn(s, l);
  function d(f) {
    return f === 1 ? u(n.get()) : f === -1 ? i(n.get()) : !1;
  }
  function p(f) {
    if (!d(f)) return;
    const m = e * (f * -1);
    a.forEach((v) => v.add(m));
  }
  return {
    loop: p
  };
}
function vC(e) {
  const {
    max: t,
    length: n
  } = e;
  function a(s) {
    const l = s - t;
    return n ? l / -n : 0;
  }
  return {
    get: a
  };
}
function mC(e, t, n, a, o) {
  const {
    startEdge: s,
    endEdge: l
  } = e, {
    groupSlides: i
  } = o, u = c().map(t.measure), d = f(), p = m();
  function c() {
    return i(a).map((h) => Ct(h)[l] - h[0][s]).map(Ne);
  }
  function f() {
    return a.map((h) => n[s] - h[s]).map((h) => -Ne(h));
  }
  function m() {
    return i(d).map((h) => h[0]).map((h, x) => h + u[x]);
  }
  return {
    snaps: d,
    snapsAligned: p
  };
}
function gC(e, t, n, a, o, s) {
  const {
    groupSlides: l
  } = o, {
    min: i,
    max: u
  } = a, d = p();
  function p() {
    const f = l(s), m = !e || t === "keepSnaps";
    return n.length === 1 ? [s] : m ? f : f.slice(i, u).map((v, h, x) => {
      const C = !h, S = js(x, h);
      if (C) {
        const B = Ct(x[0]) + 1;
        return Yl(B);
      }
      if (S) {
        const B = Ma(s) - Ct(x)[0] + 1;
        return Yl(B, Ct(x)[0]);
      }
      return v;
    });
  }
  return {
    slideRegistry: d
  };
}
function hC(e, t, n, a, o) {
  const {
    reachedAny: s,
    removeOffset: l,
    constrain: i
  } = a;
  function u(v) {
    return v.concat().sort((h, x) => Ne(h) - Ne(x))[0];
  }
  function d(v) {
    const h = e ? l(v) : i(v), x = t.map((S, B) => ({
      diff: p(S - h, 0),
      index: B
    })).sort((S, B) => Ne(S.diff) - Ne(B.diff)), {
      index: C
    } = x[0];
    return {
      index: C,
      distance: h
    };
  }
  function p(v, h) {
    const x = [v, v + n, v - n];
    if (!e) return v;
    if (!h) return u(x);
    const C = x.filter((S) => Ks(S) === h);
    return C.length ? u(C) : Ct(x) - n;
  }
  function c(v, h) {
    const x = t[v] - o.get(), C = p(x, h);
    return {
      index: v,
      distance: C
    };
  }
  function f(v, h) {
    const x = o.get() + v, {
      index: C,
      distance: S
    } = d(x), B = !e && s(x);
    if (!h || B) return {
      index: C,
      distance: v
    };
    const P = t[C] - S, O = v + p(P, 0);
    return {
      index: C,
      distance: O
    };
  }
  return {
    byDistance: f,
    byIndex: c,
    shortcut: p
  };
}
function yC(e, t, n, a, o, s, l) {
  function i(c) {
    const f = c.distance, m = c.index !== t.get();
    s.add(f), f && (a.duration() ? e.start() : (e.update(), e.render(1), e.update())), m && (n.set(t.get()), t.set(c.index), l.emit("select"));
  }
  function u(c, f) {
    const m = o.byDistance(c, f);
    i(m);
  }
  function d(c, f) {
    const m = t.clone().set(c), v = o.byIndex(m.get(), f);
    i(v);
  }
  return {
    distance: u,
    index: d
  };
}
function bC(e, t, n, a, o, s, l, i) {
  const u = {
    passive: !0,
    capture: !0
  };
  let d = 0;
  function p(m) {
    if (!i) return;
    function v(h) {
      if ((/* @__PURE__ */ new Date()).getTime() - d > 10) return;
      l.emit("slideFocusStart"), e.scrollLeft = 0;
      const S = n.findIndex((B) => B.includes(h));
      zs(S) && (o.useDuration(0), a.index(S, 0), l.emit("slideFocus"));
    }
    s.add(document, "keydown", c, !1), t.forEach((h, x) => {
      s.add(h, "focus", (C) => {
        (No(i) || i(m, C)) && v(x);
      }, u);
    });
  }
  function c(m) {
    m.code === "Tab" && (d = (/* @__PURE__ */ new Date()).getTime());
  }
  return {
    init: p
  };
}
function da(e) {
  let t = e;
  function n() {
    return t;
  }
  function a(u) {
    t = l(u);
  }
  function o(u) {
    t += l(u);
  }
  function s(u) {
    t -= l(u);
  }
  function l(u) {
    return zs(u) ? u : u.get();
  }
  return {
    get: n,
    set: a,
    add: o,
    subtract: s
  };
}
function Fd(e, t) {
  const n = e.scroll === "x" ? l : i, a = t.style;
  let o = null, s = !1;
  function l(f) {
    return `translate3d(${f}px,0px,0px)`;
  }
  function i(f) {
    return `translate3d(0px,${f}px,0px)`;
  }
  function u(f) {
    if (s) return;
    const m = eC(e.direction(f));
    m !== o && (a.transform = n(m), o = m);
  }
  function d(f) {
    s = !f;
  }
  function p() {
    s || (a.transform = "", t.getAttribute("style") || t.removeAttribute("style"));
  }
  return {
    clear: p,
    to: u,
    toggleActive: d
  };
}
function _C(e, t, n, a, o, s, l, i, u) {
  const p = _a(o), c = _a(o).reverse(), f = C().concat(S());
  function m(k, F) {
    return k.reduce((D, A) => D - o[A], F);
  }
  function v(k, F) {
    return k.reduce((D, A) => m(D, F) > 0 ? D.concat([A]) : D, []);
  }
  function h(k) {
    return s.map((F, D) => ({
      start: F - a[D] + 0.5 + k,
      end: F + t - 0.5 + k
    }));
  }
  function x(k, F, D) {
    const A = h(F);
    return k.map((q) => {
      const L = D ? 0 : -n, ee = D ? n : 0, G = D ? "end" : "start", z = A[q][G];
      return {
        index: q,
        loopPoint: z,
        slideLocation: da(-1),
        translate: Fd(e, u[q]),
        target: () => i.get() > z ? L : ee
      };
    });
  }
  function C() {
    const k = l[0], F = v(c, k);
    return x(F, n, !1);
  }
  function S() {
    const k = t - l[0] - 1, F = v(p, k);
    return x(F, -n, !0);
  }
  function B() {
    return f.every(({
      index: k
    }) => {
      const F = p.filter((D) => D !== k);
      return m(F, t) <= 0.1;
    });
  }
  function P() {
    f.forEach((k) => {
      const {
        target: F,
        translate: D,
        slideLocation: A
      } = k, q = F();
      q !== A.get() && (D.to(q), A.set(q));
    });
  }
  function O() {
    f.forEach((k) => k.translate.clear());
  }
  return {
    canLoop: B,
    clear: O,
    loop: P,
    loopPoints: f
  };
}
function wC(e, t, n) {
  let a, o = !1;
  function s(u) {
    if (!n) return;
    function d(p) {
      for (const c of p)
        if (c.type === "childList") {
          u.reInit(), t.emit("slidesChanged");
          break;
        }
    }
    a = new MutationObserver((p) => {
      o || (No(n) || n(u, p)) && d(p);
    }), a.observe(e, {
      childList: !0
    });
  }
  function l() {
    a && a.disconnect(), o = !0;
  }
  return {
    init: s,
    destroy: l
  };
}
function xC(e, t, n, a) {
  const o = {};
  let s = null, l = null, i, u = !1;
  function d() {
    i = new IntersectionObserver((v) => {
      u || (v.forEach((h) => {
        const x = t.indexOf(h.target);
        o[x] = h;
      }), s = null, l = null, n.emit("slidesInView"));
    }, {
      root: e.parentElement,
      threshold: a
    }), t.forEach((v) => i.observe(v));
  }
  function p() {
    i && i.disconnect(), u = !0;
  }
  function c(v) {
    return wa(o).reduce((h, x) => {
      const C = parseInt(x), {
        isIntersecting: S
      } = o[C];
      return (v && S || !v && !S) && h.push(C), h;
    }, []);
  }
  function f(v = !0) {
    if (v && s) return s;
    if (!v && l) return l;
    const h = c(v);
    return v && (s = h), v || (l = h), h;
  }
  return {
    init: d,
    destroy: p,
    get: f
  };
}
function CC(e, t, n, a, o, s) {
  const {
    measureSize: l,
    startEdge: i,
    endEdge: u
  } = e, d = n[0] && o, p = v(), c = h(), f = n.map(l), m = x();
  function v() {
    if (!d) return 0;
    const S = n[0];
    return Ne(t[i] - S[i]);
  }
  function h() {
    if (!d) return 0;
    const S = s.getComputedStyle(Ct(a));
    return parseFloat(S.getPropertyValue(`margin-${u}`));
  }
  function x() {
    return n.map((S, B, P) => {
      const O = !B, I = js(P, B);
      return O ? f[B] + p : I ? f[B] + c : P[B + 1][i] - S[i];
    }).map(Ne);
  }
  return {
    slideSizes: f,
    slideSizesWithGaps: m,
    startGap: p,
    endGap: c
  };
}
function BC(e, t, n, a, o, s, l, i, u) {
  const {
    startEdge: d,
    endEdge: p,
    direction: c
  } = e, f = zs(n);
  function m(C, S) {
    return _a(C).filter((B) => B % S === 0).map((B) => C.slice(B, B + S));
  }
  function v(C) {
    return C.length ? _a(C).reduce((S, B, P) => {
      const O = Ct(S) || 0, I = O === 0, k = B === Ma(C), F = o[d] - s[O][d], D = o[d] - s[B][p], A = !a && I ? c(l) : 0, q = !a && k ? c(i) : 0, L = Ne(D - q - (F + A));
      return P && L > t + u && S.push(B), k && S.push(C.length), S;
    }, []).map((S, B, P) => {
      const O = Math.max(P[B - 1] || 0);
      return C.slice(O, S);
    }) : [];
  }
  function h(C) {
    return f ? m(C, n) : v(C);
  }
  return {
    groupSlides: h
  };
}
function SC(e, t, n, a, o, s, l) {
  const {
    align: i,
    axis: u,
    direction: d,
    startIndex: p,
    loop: c,
    duration: f,
    dragFree: m,
    dragThreshold: v,
    inViewThreshold: h,
    slidesToScroll: x,
    skipSnaps: C,
    containScroll: S,
    watchResize: B,
    watchSlides: P,
    watchDrag: O,
    watchFocus: I
  } = s, k = 2, F = sC(), D = F.measure(t), A = n.map(F.measure), q = aC(u, d), L = q.measureSize(D), ee = lC(L), G = tC(i, L), z = !c && !!S, N = c || !!S, {
    slideSizes: se,
    slideSizesWithGaps: Z,
    startGap: K,
    endGap: ne
  } = CC(q, D, A, n, N, o), X = BC(q, L, x, c, D, A, K, ne, k), {
    snaps: Ce,
    snapsAligned: Ie
  } = mC(q, G, D, A, X), Se = -Ct(Ce) + Ct(Z), {
    snapsContained: Te,
    scrollContainLimit: je
  } = cC(L, Se, Ie, S, k), W = z ? Te : Ie, {
    limit: Q
  } = pC(Se, W, c), le = Rd(Ma(W), p, c), ve = le.clone(), ge = _a(n), te = ({
    dragHandler: qt,
    scrollBody: bt,
    scrollBounds: kn,
    options: {
      loop: Tn
    }
  }) => {
    Tn || kn.constrain(qt.pointerDown()), bt.seek();
  }, be = ({
    scrollBody: qt,
    translate: bt,
    location: kn,
    offsetLocation: Tn,
    previousLocation: Lt,
    scrollLooper: Dn,
    slideLooper: Fa,
    dragHandler: Hd,
    animation: Wd,
    eventHandler: Us,
    scrollBounds: Ud,
    options: {
      loop: Gs
    }
  }, Ys) => {
    const Xs = qt.settled(), Gd = !Ud.shouldConstrain(), Zs = Gs ? Xs : Xs && Gd, Qs = Zs && !Hd.pointerDown();
    Qs && Wd.stop();
    const Yd = kn.get() * Ys + Lt.get() * (1 - Ys);
    Tn.set(Yd), Gs && (Dn.loop(qt.direction()), Fa.loop()), bt.to(Tn.get()), Qs && Us.emit("settle"), Zs || Us.emit("scroll");
  }, Oe = nC(a, o, () => te(pn), (qt) => be(pn, qt)), Re = 0.68, rt = W[le.get()], ct = da(rt), ce = da(rt), Ee = da(rt), De = da(rt), $e = uC(ct, Ee, ce, De, f, Re), He = hC(c, W, Se, Q, De), Xe = yC(Oe, le, ve, $e, He, De, l), ut = vC(Q), Ft = xa(), Pn = xC(t, n, l, h), {
    slideRegistry: cn
  } = gC(z, S, W, je, X, ge), Ra = bC(e, n, cn, Xe, $e, Ft, l, I), pn = {
    ownerDocument: a,
    ownerWindow: o,
    eventHandler: l,
    containerRect: D,
    slideRects: A,
    animation: Oe,
    axis: q,
    dragHandler: oC(q, e, a, o, De, rC(q, o), ct, Oe, Xe, $e, He, le, l, ee, m, v, C, Re, O),
    eventStore: Ft,
    percentOfView: ee,
    index: le,
    indexPrevious: ve,
    limit: Q,
    location: ct,
    offsetLocation: Ee,
    previousLocation: ce,
    options: s,
    resizeHandler: iC(t, l, o, n, q, B, F),
    scrollBody: $e,
    scrollBounds: dC(Q, Ee, De, $e, ee),
    scrollLooper: fC(Se, Q, Ee, [ct, Ee, ce, De]),
    scrollProgress: ut,
    scrollSnapList: W.map(ut.get),
    scrollSnaps: W,
    scrollTarget: He,
    scrollTo: Xe,
    slideLooper: _C(q, L, Se, se, Z, Ce, W, Ee, n),
    slideFocus: Ra,
    slidesHandler: wC(t, l, P),
    slidesInView: Pn,
    slideIndexes: ge,
    slideRegistry: cn,
    slidesToScroll: X,
    target: De,
    translate: Fd(q, t)
  };
  return pn;
}
function $C() {
  let e = {}, t;
  function n(d) {
    t = d;
  }
  function a(d) {
    return e[d] || [];
  }
  function o(d) {
    return a(d).forEach((p) => p(t, d)), u;
  }
  function s(d, p) {
    return e[d] = a(d).concat([p]), u;
  }
  function l(d, p) {
    return e[d] = a(d).filter((c) => c !== p), u;
  }
  function i() {
    e = {};
  }
  const u = {
    init: n,
    emit: o,
    off: l,
    on: s,
    clear: i
  };
  return u;
}
const OC = {
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
function EC(e) {
  function t(s, l) {
    return Md(s, l || {});
  }
  function n(s) {
    const l = s.breakpoints || {}, i = wa(l).filter((u) => e.matchMedia(u).matches).map((u) => l[u]).reduce((u, d) => t(u, d), {});
    return t(s, i);
  }
  function a(s) {
    return s.map((l) => wa(l.breakpoints || {})).reduce((l, i) => l.concat(i), []).map(e.matchMedia);
  }
  return {
    mergeOptions: t,
    optionsAtMedia: n,
    optionsMediaQueries: a
  };
}
function PC(e) {
  let t = [];
  function n(s, l) {
    return t = l.filter(({
      options: i
    }) => e.optionsAtMedia(i).active !== !1), t.forEach((i) => i.init(s, e)), l.reduce((i, u) => Object.assign(i, {
      [u.name]: u
    }), {});
  }
  function a() {
    t = t.filter((s) => s.destroy());
  }
  return {
    init: n,
    destroy: a
  };
}
function vo(e, t, n) {
  const a = e.ownerDocument, o = a.defaultView, s = EC(o), l = PC(s), i = xa(), u = $C(), {
    mergeOptions: d,
    optionsAtMedia: p,
    optionsMediaQueries: c
  } = s, {
    on: f,
    off: m,
    emit: v
  } = u, h = q;
  let x = !1, C, S = d(OC, vo.globalOptions), B = d(S), P = [], O, I, k;
  function F() {
    const {
      container: ge,
      slides: te
    } = B;
    I = (Tr(ge) ? e.querySelector(ge) : ge) || e.children[0];
    const Oe = Tr(te) ? I.querySelectorAll(te) : te;
    k = [].slice.call(Oe || I.children);
  }
  function D(ge) {
    const te = SC(e, I, k, a, o, ge, u);
    if (ge.loop && !te.slideLooper.canLoop()) {
      const be = Object.assign({}, ge, {
        loop: !1
      });
      return D(be);
    }
    return te;
  }
  function A(ge, te) {
    x || (S = d(S, ge), B = p(S), P = te || P, F(), C = D(B), c([S, ...P.map(({
      options: be
    }) => be)]).forEach((be) => i.add(be, "change", q)), B.active && (C.translate.to(C.location.get()), C.animation.init(), C.slidesInView.init(), C.slideFocus.init(ve), C.eventHandler.init(ve), C.resizeHandler.init(ve), C.slidesHandler.init(ve), C.options.loop && C.slideLooper.loop(), I.offsetParent && k.length && C.dragHandler.init(ve), O = l.init(ve, P)));
  }
  function q(ge, te) {
    const be = X();
    L(), A(d({
      startIndex: be
    }, ge), te), u.emit("reInit");
  }
  function L() {
    C.dragHandler.destroy(), C.eventStore.clear(), C.translate.clear(), C.slideLooper.clear(), C.resizeHandler.destroy(), C.slidesHandler.destroy(), C.slidesInView.destroy(), C.animation.destroy(), l.destroy(), i.clear();
  }
  function ee() {
    x || (x = !0, i.clear(), L(), u.emit("destroy"), u.clear());
  }
  function G(ge, te, be) {
    !B.active || x || (C.scrollBody.useBaseFriction().useDuration(te === !0 ? 0 : B.duration), C.scrollTo.index(ge, be || 0));
  }
  function z(ge) {
    const te = C.index.add(1).get();
    G(te, ge, -1);
  }
  function N(ge) {
    const te = C.index.add(-1).get();
    G(te, ge, 1);
  }
  function se() {
    return C.index.add(1).get() !== X();
  }
  function Z() {
    return C.index.add(-1).get() !== X();
  }
  function K() {
    return C.scrollSnapList;
  }
  function ne() {
    return C.scrollProgress.get(C.offsetLocation.get());
  }
  function X() {
    return C.index.get();
  }
  function Ce() {
    return C.indexPrevious.get();
  }
  function Ie() {
    return C.slidesInView.get();
  }
  function Se() {
    return C.slidesInView.get(!1);
  }
  function Te() {
    return O;
  }
  function je() {
    return C;
  }
  function W() {
    return e;
  }
  function Q() {
    return I;
  }
  function le() {
    return k;
  }
  const ve = {
    canScrollNext: se,
    canScrollPrev: Z,
    containerNode: Q,
    internalEngine: je,
    destroy: ee,
    off: m,
    on: f,
    emit: v,
    plugins: Te,
    previousScrollSnap: Ce,
    reInit: h,
    rootNode: W,
    scrollNext: z,
    scrollPrev: N,
    scrollProgress: ne,
    scrollSnapList: K,
    scrollTo: G,
    selectedScrollSnap: X,
    slideNodes: le,
    slidesInView: Ie,
    slidesNotInView: Se
  };
  return A(t, n), setTimeout(() => u.emit("init"), 0), ve;
}
vo.globalOptions = void 0;
function Hs(e = {}, t = []) {
  const n = Qe(e), a = Qe(t);
  let o = n ? e.value : e, s = a ? t.value : t;
  const l = pt(), i = pt();
  function u() {
    i.value && i.value.reInit(o, s);
  }
  return de(() => {
    !Zx() || !l.value || (vo.globalOptions = Hs.globalOptions, i.value = vo(l.value, o, s));
  }), Wn(() => {
    i.value && i.value.destroy();
  }), n && ae(e, (d) => {
    Ns(o, d) || (o = d, u());
  }), a && ae(t, (d) => {
    Qx(s, d) || (s = d, u());
  }), [l, i];
}
Hs.globalOptions = void 0;
const [kC, TC] = Uh(
  ({ opts: e, orientation: t, plugins: n }, a) => {
    const [o, s] = Hs(
      {
        ...e,
        axis: t === "horizontal" ? "x" : "y"
      },
      n
    );
    function l() {
      var c;
      (c = s.value) == null || c.scrollPrev();
    }
    function i() {
      var c;
      (c = s.value) == null || c.scrollNext();
    }
    const u = $(!1), d = $(!1);
    function p(c) {
      u.value = (c == null ? void 0 : c.canScrollNext()) || !1, d.value = (c == null ? void 0 : c.canScrollPrev()) || !1;
    }
    return de(() => {
      var c, f, m;
      s.value && ((c = s.value) == null || c.on("init", p), (f = s.value) == null || f.on("reInit", p), (m = s.value) == null || m.on("select", p), a("init-api", s.value));
    }), {
      carouselRef: o,
      carouselApi: s,
      canScrollPrev: d,
      canScrollNext: u,
      scrollPrev: l,
      scrollNext: i,
      orientation: t
    };
  }
);
function zo() {
  const e = TC();
  if (!e) throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const uS = /* @__PURE__ */ b({
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
      canScrollNext: s,
      canScrollPrev: l,
      carouselApi: i,
      carouselRef: u,
      orientation: d,
      scrollNext: p,
      scrollPrev: c
    } = kC(a, o);
    t({
      canScrollNext: s,
      canScrollPrev: l,
      carouselApi: i,
      carouselRef: u,
      orientation: d,
      scrollNext: p,
      scrollPrev: c
    });
    function f(m) {
      const v = a.orientation === "vertical" ? "ArrowUp" : "ArrowLeft", h = a.orientation === "vertical" ? "ArrowDown" : "ArrowRight";
      if (m.key === v) {
        m.preventDefault(), c();
        return;
      }
      m.key === h && (m.preventDefault(), p());
    }
    return (m, v) => (g(), V("div", {
      class: Y(r(M)("relative", a.class)),
      role: "region",
      "aria-roledescription": "carousel",
      tabindex: "0",
      onKeydown: f
    }, [
      _(m.$slots, "default", {
        canScrollNext: r(s),
        canScrollPrev: r(l),
        carouselApi: r(i),
        carouselRef: r(u),
        orientation: r(d),
        scrollNext: r(p),
        scrollPrev: r(c)
      })
    ], 34));
  }
}), dS = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "CarouselContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { carouselRef: n, orientation: a } = zo();
    return (o, s) => (g(), V("div", {
      ref_key: "carouselRef",
      ref: n,
      class: "overflow-hidden"
    }, [
      ie("div", T({
        class: r(M)("flex", r(a) === "horizontal" ? "-ml-4" : "-mt-4 flex-col", t.class)
      }, o.$attrs), [
        _(o.$slots, "default")
      ], 16)
    ], 512));
  }
}), cS = /* @__PURE__ */ b({
  __name: "CarouselItem",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { orientation: n } = zo();
    return (a, o) => (g(), V("div", {
      role: "group",
      "aria-roledescription": "slide",
      class: Y(
        r(M)(
          "min-w-0 shrink-0 grow-0 basis-full",
          r(n) === "horizontal" ? "pl-4" : "pt-4",
          t.class
        )
      )
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), pS = /* @__PURE__ */ b({
  __name: "CarouselPrevious",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { orientation: n, canScrollPrev: a, scrollPrev: o } = zo();
    return (s, l) => (g(), w(r(Ss), {
      disabled: !r(a),
      class: Y(
        r(M)(
          "touch-manipulation absolute size-8 rounded-full p-0",
          r(n) === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          t.class
        )
      ),
      variant: "outline",
      onClick: r(o)
    }, {
      default: y(() => [
        _(s.$slots, "default", {}, () => [
          R(r(Qy), { class: "size-4 text-current" }),
          l[0] || (l[0] = ie("span", { class: "sr-only" }, "Previous Slide", -1))
        ])
      ]),
      _: 3
    }, 8, ["disabled", "class", "onClick"]));
  }
}), fS = /* @__PURE__ */ b({
  __name: "CarouselNext",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { orientation: n, canScrollNext: a, scrollNext: o } = zo();
    return (s, l) => (g(), w(r(Ss), {
      disabled: !r(a),
      class: Y(
        r(M)(
          "touch-manipulation absolute size-8 rounded-full p-0",
          r(n) === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          t.class
        )
      ),
      variant: "outline",
      onClick: r(o)
    }, {
      default: y(() => [
        _(s.$slots, "default", {}, () => [
          R(r(Jy), { class: "size-4 text-current" }),
          l[0] || (l[0] = ie("span", { class: "sr-only" }, "Next Slide", -1))
        ])
      ]),
      _: 3
    }, 8, ["disabled", "class", "onClick"]));
  }
}), vS = /* @__PURE__ */ b({
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
    const n = e, a = t, o = E(() => {
      const { class: l, ...i } = n;
      return i;
    }), s = ke(o, a);
    return (l, i) => (g(), w(r(R_), T(r(s), {
      class: r(M)(
        "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        n.class
      )
    }), {
      default: y(() => [
        R(r(q_), { class: "flex h-full w-full items-center justify-center text-current" }, {
          default: y(() => [
            _(l.$slots, "default", {}, () => [
              R(r(Yu), { class: "h-4 w-4" })
            ])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), mS = /* @__PURE__ */ b({
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
    const o = ke(e, t);
    return (s, l) => (g(), w(r(y0), H(U(r(o))), {
      default: y(({ open: i }) => [
        _(s.$slots, "default", { open: i })
      ]),
      _: 3
    }, 16));
  }
}), gS = /* @__PURE__ */ b({
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(r(_0), T(t, { class: "overflow-hidden transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down" }), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hS = /* @__PURE__ */ b({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(r(x0), H(U(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), yS = /* @__PURE__ */ b({
  __name: "Combobox",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    resetSearchTermOnBlur: { type: Boolean },
    resetSearchTermOnSelect: { type: Boolean },
    openOnFocus: { type: Boolean },
    openOnClick: { type: Boolean },
    ignoreFilter: { type: Boolean },
    resetModelValueOnClear: { type: Boolean },
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
    const o = ke(e, t);
    return (s, l) => (g(), w(r(vw), H(U(r(o))), {
      default: y(() => [
        _(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), bS = /* @__PURE__ */ b({
  __name: "ComboboxAnchor",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = xe(t, "class"), a = Ye(n);
    return (o, s) => (g(), w(r(U_), T(r(a), {
      class: r(M)("w-[200px]", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), _S = /* @__PURE__ */ b({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = xe(t, "class");
    return (a, o) => (g(), w(r(xw), T(r(n), {
      class: r(M)("py-6 text-center text-sm", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), wS = /* @__PURE__ */ b({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    heading: {}
  },
  setup(e) {
    const t = e, n = xe(t, "class");
    return (a, o) => (g(), w(r(Sw), T(r(n), {
      class: r(M)(
        "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
        t.class
      )
    }), {
      default: y(() => [
        e.heading ? (g(), w(r(Dw), {
          key: 0,
          class: "px-2 py-1.5 text-xs font-medium text-muted-foreground"
        }, {
          default: y(() => [
            Be(Me(e.heading), 1)
          ]),
          _: 1
        })) : fe("", !0),
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), xS = /* @__PURE__ */ b({
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
    const n = e, a = t, o = xe(n, "class"), s = ke(o, a);
    return (l, i) => (g(), w(r(Ow), T(r(s), {
      class: r(M)(
        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        n.class
      )
    }), {
      default: y(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), CS = /* @__PURE__ */ b({
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
    const n = e, a = t, o = xe(n, "class"), s = ke(o, a);
    return (l, i) => (g(), w(r(Pw), T(r(s), {
      class: r(M)(
        "relative flex cursor-default gap-2 select-none justify-between items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
        n.class
      )
    }), {
      default: y(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), BS = /* @__PURE__ */ b({
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
    const n = e, a = t, o = xe(n, "class"), s = ke(o, a);
    return (l, i) => (g(), w(r(Iw), null, {
      default: y(() => [
        R(r(_w), T(r(s), {
          class: r(M)(
            "z-50 w-[200px] rounded-md border bg-popover text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            n.class
          )
        }), {
          default: y(() => [
            R(r(Vw), null, {
              default: y(() => [
                _(l.$slots, "default")
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
}), SS = /* @__PURE__ */ b({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = xe(t, "class");
    return (a, o) => (g(), w(r(Rw), T(r(n), {
      class: r(M)("-mx-1 h-px bg-border", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), DC = /* @__PURE__ */ b({
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
    const n = e, a = t, o = E(() => {
      const { class: l, ...i } = n;
      return i;
    }), s = me(o, a);
    return (l, i) => (g(), w(r(gv), T(r(s), {
      class: r(M)(
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
}), AC = /* @__PURE__ */ b({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = me(e, t);
    return (s, l) => (g(), w(r(ns), H(U(r(o))), {
      default: y(() => [
        _(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $S = /* @__PURE__ */ b({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(r(xn), H(U(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), OS = /* @__PURE__ */ b({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(r(as), H(U(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ES = /* @__PURE__ */ b({
  __name: "DialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("div", {
      class: Y(r(M)("flex flex-col gap-y-1.5 text-center sm:text-left", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), PS = /* @__PURE__ */ b({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: o, ...s } = t;
      return s;
    }), a = et(n);
    return (o, s) => (g(), w(r(is), T(r(a), {
      class: r(M)("text-lg font-semibold leading-none tracking-tight", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), kS = /* @__PURE__ */ b({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: o, ...s } = t;
      return s;
    }), a = et(n);
    return (o, s) => (g(), w(r(us), T(r(a), {
      class: r(M)("text-sm text-muted-foreground", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), IC = /* @__PURE__ */ b({
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
    const n = e, a = t, o = E(() => {
      const { class: l, ...i } = n;
      return i;
    }), s = me(o, a);
    return (l, i) => (g(), w(r(os), null, {
      default: y(() => [
        R(r(Eo), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        R(r(Oo), T(r(s), {
          class: r(M)(
            "fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
            n.class
          )
        }), {
          default: y(() => [
            _(l.$slots, "default"),
            R(r(xn), {
              class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
              onClick: i[0] || (i[0] = (u) => a("close", u))
            }, {
              default: y(() => [
                R(r(Ao), { class: "size-4" }),
                i[1] || (i[1] = ie("span", { class: "sr-only" }, "Close", -1))
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
}), TS = /* @__PURE__ */ b({
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
    const n = e, a = t, o = E(() => {
      const { class: l, ...i } = n;
      return i;
    }), s = me(o, a);
    return (l, i) => (g(), w(r(os), null, {
      default: y(() => [
        R(r(Eo), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: y(() => [
            R(r(Oo), T({
              class: r(M)(
                "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                n.class
              )
            }, r(s), {
              onPointerDownOutside: i[0] || (i[0] = (u) => {
                const d = u.detail.originalEvent, p = d.target;
                (d.offsetX > p.clientWidth || d.offsetY > p.clientHeight) && u.preventDefault();
              })
            }), {
              default: y(() => [
                _(l.$slots, "default"),
                R(r(xn), { class: "absolute right-4 top-4 rounded-md p-0.5 transition-colors hover:bg-secondary" }, {
                  default: y(() => [
                    R(r(Ao), { class: "h-4 w-4" }),
                    i[1] || (i[1] = ie("span", { class: "sr-only" }, "Close", -1))
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
}), DS = /* @__PURE__ */ b({
  __name: "DialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("div", {
      class: Y(r(M)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), AS = /* @__PURE__ */ b({
  __name: "CommandDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = me(e, t);
    return (s, l) => (g(), w(r(AC), H(U(r(o))), {
      default: y(() => [
        R(r(IC), { class: "overflow-hidden p-0 shadow-lg" }, {
          default: y(() => [
            R(DC, { class: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5" }, {
              default: y(() => [
                _(s.$slots, "default")
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
}), IS = /* @__PURE__ */ b({
  __name: "CommandEmpty",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(r(Bv), T(n.value, {
      class: r(M)("py-6 text-center text-sm", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), MS = /* @__PURE__ */ b({
  __name: "CommandGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    heading: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(r(bv), T(n.value, {
      class: r(M)(
        "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
        t.class
      )
    }), {
      default: y(() => [
        e.heading ? (g(), w(r(_v), {
          key: 0,
          class: "px-2 py-1.5 text-xs font-medium text-muted-foreground"
        }, {
          default: y(() => [
            Be(Me(e.heading), 1)
          ]),
          _: 1
        })) : fe("", !0),
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), MC = {
  class: "flex items-center border-b px-3",
  "cmdk-input-wrapper": ""
}, RS = /* @__PURE__ */ b({
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
    const t = e, n = E(() => {
      const { class: o, ...s } = t;
      return s;
    }), a = et(n);
    return (o, s) => (g(), V("div", MC, [
      R(r(ob), { class: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
      R(r(hv), T({ ...r(a), ...o.$attrs }, {
        "auto-focus": "",
        class: r(M)(
          "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          t.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), FS = /* @__PURE__ */ b({
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
    const n = e, a = t, o = E(() => {
      const { class: l, ...i } = n;
      return i;
    }), s = me(o, a);
    return (l, i) => (g(), w(r(Ev), T(r(s), {
      class: r(M)(
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
}), RC = { role: "presentation" }, qS = /* @__PURE__ */ b({
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
    const n = e, a = t, o = E(() => {
      const { class: l, ...i } = n;
      return i;
    }), s = me(o, a);
    return (l, i) => (g(), w(r(Cv), T(r(s), {
      class: r(M)("max-h-[300px] overflow-y-auto overflow-x-hidden", n.class)
    }), {
      default: y(() => [
        ie("div", RC, [
          _(l.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), LS = /* @__PURE__ */ b({
  __name: "CommandSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(r(Pv), T(n.value, {
      class: r(M)("-mx-1 h-px bg-border", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), VS = /* @__PURE__ */ b({
  __name: "CommandShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("span", {
      class: Y(r(M)("ml-auto text-xs tracking-widest text-muted-foreground", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), NS = /* @__PURE__ */ b({
  __name: "ContextMenu",
  props: {
    pressOpenDelay: {},
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = ke(e, t);
    return (s, l) => (g(), w(r(D1), H(U(r(o))), {
      default: y(() => [
        _(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), FC = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, zS = /* @__PURE__ */ b({
  __name: "ContextMenuCheckboxItem",
  props: {
    modelValue: { type: [Boolean, String] },
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["select", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = xe(n, "class"), s = ke(o, a);
    return (l, i) => (g(), w(r(P1), T(r(s), {
      class: r(M)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        n.class
      )
    }), {
      default: y(() => [
        ie("span", FC, [
          R(r(Td), null, {
            default: y(() => [
              R(r(Yu), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), KS = /* @__PURE__ */ b({
  __name: "ContextMenuContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    sideFlip: { type: Boolean },
    alignOffset: {},
    alignFlip: { type: Boolean },
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    positionStrategy: {},
    disableUpdateOnLayoutShift: { type: Boolean },
    prioritizePosition: { type: Boolean },
    reference: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = xe(n, "class"), s = ke(o, a);
    return (l, i) => (g(), w(r(K1), null, {
      default: y(() => [
        R(r(I1), T(r(s), {
          class: r(M)(
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
}), jS = /* @__PURE__ */ b({
  __name: "ContextMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(r(R1), H(U(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), HS = /* @__PURE__ */ b({
  __name: "ContextMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = xe(n, "class"), s = ke(o, a);
    return (l, i) => (g(), w(r(q1), T(r(s), {
      class: r(M)(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        e.inset && "pl-8",
        n.class
      )
    }), {
      default: y(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), WS = /* @__PURE__ */ b({
  __name: "ContextMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  setup(e) {
    const t = e, n = xe(t, "class");
    return (a, o) => (g(), w(r(N1), T(r(n), {
      class: r(M)("px-2 py-1.5 text-sm font-semibold text-foreground", e.inset && "pl-8", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), US = /* @__PURE__ */ b({
  __name: "ContextMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = ke(e, t);
    return (s, l) => (g(), w(r(H1), H(U(r(o))), {
      default: y(() => [
        _(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), qC = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, GS = /* @__PURE__ */ b({
  __name: "ContextMenuRadioItem",
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
    const n = e, a = t, o = xe(n, "class"), s = ke(o, a);
    return (l, i) => (g(), w(r(U1), T(r(s), {
      class: r(M)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        n.class
      )
    }), {
      default: y(() => [
        ie("span", qC, [
          R(r(Td), null, {
            default: y(() => [
              R(r(_b), { class: "h-4 w-4 fill-current" })
            ]),
            _: 1
          })
        ]),
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), YS = /* @__PURE__ */ b({
  __name: "ContextMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = xe(t, "class");
    return (a, o) => (g(), w(r(Y1), T(r(n), {
      class: r(M)("-mx-1 my-1 h-px bg-border", t.class)
    }), null, 16, ["class"]));
  }
}), XS = /* @__PURE__ */ b({
  __name: "ContextMenuShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("span", {
      class: Y(r(M)("ml-auto text-xs tracking-widest text-muted-foreground", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), ZS = /* @__PURE__ */ b({
  __name: "ContextMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = ke(e, t);
    return (s, l) => (g(), w(r(Z1), H(U(r(o))), {
      default: y(() => [
        _(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), QS = /* @__PURE__ */ b({
  __name: "ContextMenuSubContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    sideOffset: {},
    sideFlip: { type: Boolean },
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
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = xe(n, "class"), s = ke(o, a);
    return (l, i) => (g(), w(r(J1), T(r(s), {
      class: r(M)(
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
}), JS = /* @__PURE__ */ b({
  __name: "ContextMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  setup(e) {
    const t = e, n = xe(t, "class"), a = Ye(n);
    return (o, s) => (g(), w(r(tx), T(r(a), {
      class: r(M)(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
        e.inset && "pl-8",
        t.class
      )
    }), {
      default: y(() => [
        _(o.$slots, "default"),
        R(r(Da), { class: "ml-auto h-4 w-4" })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), e$ = /* @__PURE__ */ b({
  __name: "ContextMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const n = Ye(e);
    return (a, o) => (g(), w(r(ax), H(U(r(n))), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
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
const LC = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const VC = (e) => typeof e < "u";
function NC(e) {
  return JSON.parse(JSON.stringify(e));
}
function Xl(e, t, n, a = {}) {
  var o, s, l;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: p = !1,
    defaultValue: c,
    shouldEmit: f
  } = a, m = nt(), v = n || (m == null ? void 0 : m.emit) || ((o = m == null ? void 0 : m.$emit) == null ? void 0 : o.bind(m)) || ((l = (s = m == null ? void 0 : m.proxy) == null ? void 0 : s.$emit) == null ? void 0 : l.bind(m == null ? void 0 : m.proxy));
  let h = d;
  t || (t = "modelValue"), h = h || `update:${t.toString()}`;
  const x = (B) => i ? typeof i == "function" ? i(B) : NC(B) : B, C = () => VC(e[t]) ? x(e[t]) : c, S = (B) => {
    f ? f(B) && v(h, B) : v(h, B);
  };
  if (u) {
    const B = C(), P = $(B);
    let O = !1;
    return ae(
      () => e[t],
      (I) => {
        O || (O = !0, P.value = x(I), re(() => O = !1));
      }
    ), ae(
      P,
      (I) => {
        !O && (I !== e[t] || p) && S(I);
      },
      { deep: p }
    ), P;
  } else
    return E({
      get() {
        return C();
      },
      set(B) {
        S(B);
      }
    });
}
const [Ws, zC] = Le("DrawerRoot"), qd = /* @__PURE__ */ new WeakMap();
function tt(e, t, n = !1) {
  if (!e || !(e instanceof HTMLElement) || !t)
    return;
  const a = {};
  Object.entries(t).forEach(([o, s]) => {
    if (o.startsWith("--")) {
      e.style.setProperty(o, s);
      return;
    }
    a[o] = e.style[o], e.style[o] = s;
  }), !n && qd.set(e, a);
}
function KC(e, t) {
  if (!e || !(e instanceof HTMLElement))
    return;
  const n = qd.get(e);
  n && Object.entries(n).forEach(([a, o]) => {
    e.style[a] = o;
  });
}
function Xa(e, t) {
  const n = window.getComputedStyle(e), a = n.transform || n.webkitTransform || n.mozTransform;
  let o = a.match(/^matrix3d\((.+)\)$/);
  return o ? Number.parseFloat(o[1].split(", ")[Ue(t) ? 13 : 12]) : (o = a.match(/^matrix\((.+)\)$/), o ? Number.parseFloat(o[1].split(", ")[Ue(t) ? 5 : 4]) : null);
}
function jC(e) {
  return 8 * (Math.log(e + 1) - 2);
}
function Ue(e) {
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
function dr(e, t) {
  if (!e)
    return () => {
    };
  const n = e.style.cssText;
  return Object.assign(e.style, t), () => {
    e.style.cssText = n;
  };
}
function HC(...e) {
  return (...t) => {
    for (const n of e)
      typeof n == "function" && n(...t);
  };
}
const Ve = {
  DURATION: 0.5,
  EASE: [0.32, 0.72, 0, 1]
}, Ld = 0.4, WC = 0.25, UC = 100, Vd = 8, Za = 16, Nd = 26, Zl = "vaul-dragging";
function GC({
  activeSnapPoint: e,
  snapPoints: t,
  drawerRef: n,
  overlayRef: a,
  fadeFromIndex: o,
  onSnapPointChange: s,
  direction: l
}) {
  const i = $(typeof window < "u" ? {
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  } : void 0);
  function u() {
    i.value = {
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight
    };
  }
  de(() => {
    typeof window < "u" && window.addEventListener("resize", u);
  }), Wn(() => {
    typeof window < "u" && window.removeEventListener("resize", u);
  });
  const d = E(
    () => (t.value && e.value === t.value[t.value.length - 1]) ?? null
  ), p = E(
    () => t.value && t.value.length > 0 && ((o == null ? void 0 : o.value) || (o == null ? void 0 : o.value) === 0) && !Number.isNaN(o == null ? void 0 : o.value) && t.value[(o == null ? void 0 : o.value) ?? -1] === e.value || !t.value
  ), c = E(
    () => {
      var S;
      return ((S = t.value) == null ? void 0 : S.findIndex((B) => B === e.value)) ?? null;
    }
  ), f = E(
    () => {
      var S;
      return ((S = t.value) == null ? void 0 : S.map((B) => {
        const P = typeof B == "string";
        let O = 0;
        if (P && (O = Number.parseInt(B, 10)), Ue(l.value)) {
          const k = P ? O : i.value ? B * i.value.innerHeight : 0;
          return i.value ? l.value === "bottom" ? i.value.innerHeight - k : -i.value.innerHeight + k : k;
        }
        const I = P ? O : i.value ? B * i.value.innerWidth : 0;
        return i.value ? l.value === "right" ? i.value.innerWidth - I : -i.value.innerWidth + I : I;
      })) ?? [];
    }
  ), m = E(
    () => {
      var S;
      return c.value !== null ? (S = f.value) == null ? void 0 : S[c.value] : null;
    }
  ), v = (S) => {
    var B, P, O, I;
    const k = ((B = f.value) == null ? void 0 : B.findIndex((F) => F === S)) ?? null;
    re(() => {
      var F;
      s(k, f.value), tt((F = n.value) == null ? void 0 : F.$el, {
        transition: `transform ${Ve.DURATION}s cubic-bezier(${Ve.EASE.join(",")})`,
        transform: Ue(l.value) ? `translate3d(0, ${S}px, 0)` : `translate3d(${S}px, 0, 0)`
      });
    }), f.value && k !== f.value.length - 1 && k !== (o == null ? void 0 : o.value) ? tt((P = a.value) == null ? void 0 : P.$el, {
      transition: `opacity ${Ve.DURATION}s cubic-bezier(${Ve.EASE.join(",")})`,
      opacity: "0"
    }) : tt((O = a.value) == null ? void 0 : O.$el, {
      transition: `opacity ${Ve.DURATION}s cubic-bezier(${Ve.EASE.join(",")})`,
      opacity: "1"
    }), e.value = k !== null ? ((I = t.value) == null ? void 0 : I[k]) ?? null : null;
  };
  ae(
    [e, f, t],
    () => {
      var S;
      if (e.value) {
        const B = ((S = t.value) == null ? void 0 : S.findIndex((P) => P === e.value)) ?? -1;
        f.value && B !== -1 && typeof f.value[B] == "number" && v(f.value[B]);
      }
    },
    {
      immediate: !0
      // if you want to run the effect immediately as well
    }
  );
  function h({
    draggedDistance: S,
    closeDrawer: B,
    velocity: P,
    dismissible: O
  }) {
    var I, k, F;
    if (o.value === void 0)
      return;
    const D = l.value === "bottom" || l.value === "right" ? (m.value ?? 0) - S : (m.value ?? 0) + S, A = c.value === o.value - 1, q = c.value === 0, L = S > 0;
    if (A && tt((I = a.value) == null ? void 0 : I.$el, {
      transition: `opacity ${Ve.DURATION}s cubic-bezier(${Ve.EASE.join(",")})`
    }), P > 2 && !L) {
      O ? B() : v(f.value[0]);
      return;
    }
    if (P > 2 && L && f && t.value) {
      v(f.value[t.value.length - 1]);
      return;
    }
    const ee = (k = f.value) == null ? void 0 : k.reduce((z, N) => typeof z != "number" || typeof N != "number" ? z : Math.abs(N - D) < Math.abs(z - D) ? N : z), G = Ue(l.value) ? window.innerHeight : window.innerWidth;
    if (P > Ld && Math.abs(S) < G * 0.4) {
      const z = L ? 1 : -1;
      if (z > 0 && d) {
        v(f.value[(((F = t.value) == null ? void 0 : F.length) ?? 0) - 1]);
        return;
      }
      if (q && z < 0 && O && B(), c.value === null)
        return;
      v(f.value[c.value + z]);
      return;
    }
    v(ee);
  }
  function x({ draggedDistance: S }) {
    var B;
    if (m.value === null)
      return;
    const P = l.value === "bottom" || l.value === "right" ? m.value - S : m.value + S;
    (l.value === "bottom" || l.value === "right") && P < f.value[f.value.length - 1] || (l.value === "top" || l.value === "left") && P > f.value[f.value.length - 1] || tt((B = n.value) == null ? void 0 : B.$el, {
      transform: Ue(l.value) ? `translate3d(0, ${P}px, 0)` : `translate3d(${P}px, 0, 0)`
    });
  }
  function C(S, B) {
    if (!t.value || typeof c.value != "number" || !f.value || o.value === void 0)
      return null;
    const P = c.value === o.value - 1;
    if (c.value >= o.value && B)
      return 0;
    if (P && !B)
      return 1;
    if (!p.value && !P)
      return null;
    const O = P ? c.value + 1 : c.value - 1, I = P ? f.value[O] - f.value[O - 1] : f.value[O + 1] - f.value[O], k = S / Math.abs(I);
    return P ? 1 - k : k;
  }
  return {
    isLastSnapPoint: d,
    shouldFade: p,
    getPercentageDragged: C,
    activeSnapPointIndex: c,
    onRelease: h,
    onDrag: x,
    snapPointsOffset: f
  };
}
function Ql() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
let ia = null;
function YC(e) {
  const { isOpen: t, modal: n, nested: a, hasBeenOpened: o, preventScrollRestoration: s, noBodyStyles: l } = e, i = $(typeof window < "u" ? window.location.href : ""), u = $(0);
  function d() {
    if (Ql() && ia === null && t.value && !l.value) {
      ia = {
        position: document.body.style.position,
        top: document.body.style.top,
        left: document.body.style.left,
        height: document.body.style.height
      };
      const { scrollX: c, innerHeight: f } = window;
      document.body.style.setProperty("position", "fixed", "important"), Object.assign(document.body.style, {
        top: `${-u.value}px`,
        left: `${-c}px`,
        right: "0px",
        height: "auto"
      }), setTimeout(() => {
        requestAnimationFrame(() => {
          const m = f - window.innerHeight;
          m && u.value >= f && (document.body.style.top = `-${u.value + m}px`);
        });
      }, 300);
    }
  }
  function p() {
    if (Ql() && ia !== null && !l.value) {
      const c = -Number.parseInt(document.body.style.top, 10), f = -Number.parseInt(document.body.style.left, 10);
      Object.assign(document.body.style, ia), window.requestAnimationFrame(() => {
        if (s.value && i.value !== window.location.href) {
          i.value = window.location.href;
          return;
        }
        window.scrollTo(f, c);
      }), ia = null;
    }
  }
  return de(() => {
    function c() {
      u.value = window.scrollY;
    }
    c(), window.addEventListener("scroll", c), Ke(() => {
      window.removeEventListener("scroll", c);
    });
  }), ae([t, o, i], () => {
    a.value || !o.value || (t.value ? (window.matchMedia("(display-mode: standalone)").matches || d(), n.value || setTimeout(() => {
      p();
    }, 500)) : p());
  }), { restorePositionSetting: p };
}
function XC(e, t) {
  return e && e.value ? e : t;
}
function ZC(e) {
  const {
    emitDrag: t,
    emitRelease: n,
    emitClose: a,
    emitOpenChange: o,
    open: s,
    dismissible: l,
    nested: i,
    modal: u,
    shouldScaleBackground: d,
    setBackgroundColorOnScale: p,
    scrollLockTimeout: c,
    closeThreshold: f,
    activeSnapPoint: m,
    fadeFromIndex: v,
    direction: h,
    noBodyStyles: x,
    handleOnly: C,
    preventScrollRestoration: S
  } = e, B = $(s.value ?? !1), P = $(!1), O = $(!1), I = $(!1), k = $(null), F = $(null), D = $(null), A = $(null), q = $(null), L = $(!1), ee = $(null), G = $(0), z = $(!1);
  $(0);
  const N = $(null);
  $(0);
  const se = E(() => {
    var ce;
    return ((ce = N.value) == null ? void 0 : ce.$el.getBoundingClientRect().height) || 0;
  }), Z = XC(
    e.snapPoints,
    $(void 0)
  ), K = E(() => {
    var ce;
    return Z && (((ce = Z.value) == null ? void 0 : ce.length) ?? 0) > 0;
  }), ne = $(null), {
    activeSnapPointIndex: X,
    onRelease: Ce,
    snapPointsOffset: Ie,
    onDrag: Se,
    shouldFade: Te,
    getPercentageDragged: je
  } = GC({
    snapPoints: Z,
    activeSnapPoint: m,
    drawerRef: N,
    fadeFromIndex: v,
    overlayRef: k,
    onSnapPointChange: W,
    direction: h
  });
  function W(ce, Ee) {
    Z.value && ce === Ee.length - 1 && (F.value = /* @__PURE__ */ new Date());
  }
  YC({
    isOpen: B,
    modal: u,
    nested: i,
    hasBeenOpened: P,
    noBodyStyles: x,
    preventScrollRestoration: S
  });
  function Q() {
    return (window.innerWidth - Nd) / window.innerWidth;
  }
  function le(ce, Ee) {
    var De;
    if (!ce)
      return !1;
    let $e = ce;
    const He = (De = window.getSelection()) == null ? void 0 : De.toString(), Xe = N.value ? Xa(N.value.$el, h.value) : null, ut = /* @__PURE__ */ new Date();
    if ($e.hasAttribute("data-vaul-no-drag") || $e.closest("[data-vaul-no-drag]"))
      return !1;
    if (h.value === "right" || h.value === "left")
      return !0;
    if (F.value && ut.getTime() - F.value.getTime() < 500)
      return !1;
    if (Xe !== null && (h.value === "bottom" ? Xe > 0 : Xe < 0))
      return !0;
    if (He && He.length > 0)
      return !1;
    if (q.value && ut.getTime() - q.value.getTime() < c.value && Xe === 0 || Ee)
      return q.value = ut, !1;
    for (; $e; ) {
      if ($e.scrollHeight > $e.clientHeight) {
        if ($e.scrollTop !== 0)
          return q.value = /* @__PURE__ */ new Date(), !1;
        if ($e.getAttribute("role") === "dialog")
          return !0;
      }
      $e = $e.parentNode;
    }
    return !0;
  }
  function ve(ce) {
    !l.value && !Z.value || N.value && !N.value.$el.contains(ce.target) || (O.value = !0, D.value = /* @__PURE__ */ new Date(), ce.target.setPointerCapture(ce.pointerId), G.value = Ue(h.value) ? ce.clientY : ce.clientX);
  }
  function ge(ce) {
    var Ee, De, $e, He, Xe, ut;
    if (N.value && O.value) {
      const Ft = h.value === "bottom" || h.value === "right" ? 1 : -1, Pn = (G.value - (Ue(h.value) ? ce.clientY : ce.clientX)) * Ft, cn = Pn > 0, Ra = Z.value && !l.value && !cn;
      if (Ra && X.value === 0)
        return;
      const pn = Math.abs(Pn), qt = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      let bt = pn / se.value;
      const kn = je(pn, cn);
      if (kn !== null && (bt = kn), Ra && bt >= 1 || !L.value && !le(ce.target, cn))
        return;
      if ((Ee = N == null ? void 0 : N.value) == null || Ee.$el.classList.add(Zl), L.value = !0, tt((De = N.value) == null ? void 0 : De.$el, {
        transition: "none"
      }), tt(($e = k.value) == null ? void 0 : $e.$el, {
        transition: "none"
      }), Z.value && Se({ draggedDistance: Pn }), cn && !Z.value) {
        const Lt = jC(Pn), Dn = Math.min(Lt * -1, 0) * Ft;
        tt((He = N.value) == null ? void 0 : He.$el, {
          transform: Ue(h.value) ? `translate3d(0, ${Dn}px, 0)` : `translate3d(${Dn}px, 0, 0)`
        });
        return;
      }
      const Tn = 1 - bt;
      if ((Te.value || v.value && X.value === v.value - 1) && (t(bt), tt(
        (Xe = k.value) == null ? void 0 : Xe.$el,
        {
          opacity: `${Tn}`,
          transition: "none"
        },
        !0
      )), qt && k.value && d.value) {
        const Lt = Math.min(Q() + bt * (1 - Q()), 1), Dn = 8 - bt * 8, Fa = Math.max(0, 14 - bt * 14);
        tt(
          qt,
          {
            borderRadius: `${Dn}px`,
            transform: Ue(h.value) ? `scale(${Lt}) translate3d(0, ${Fa}px, 0)` : `scale(${Lt}) translate3d(${Fa}px, 0, 0)`,
            transition: "none"
          },
          !0
        );
      }
      if (!Z.value) {
        const Lt = pn * Ft;
        tt((ut = N.value) == null ? void 0 : ut.$el, {
          transform: Ue(h.value) ? `translate3d(0, ${Lt}px, 0)` : `translate3d(${Lt}px, 0, 0)`
        });
      }
    }
  }
  function te() {
    var ce;
    if (!N.value)
      return;
    const Ee = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]"), De = Xa(N.value.$el, h.value);
    tt(N.value.$el, {
      transform: "translate3d(0, 0, 0)",
      transition: `transform ${Ve.DURATION}s cubic-bezier(${Ve.EASE.join(",")})`
    }), tt((ce = k.value) == null ? void 0 : ce.$el, {
      transition: `opacity ${Ve.DURATION}s cubic-bezier(${Ve.EASE.join(",")})`,
      opacity: "1"
    }), d.value && De && De > 0 && B.value && tt(
      Ee,
      {
        borderRadius: `${Vd}px`,
        overflow: "hidden",
        ...Ue(h.value) ? {
          transform: `scale(${Q()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
          transformOrigin: "top"
        } : {
          transform: `scale(${Q()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
          transformOrigin: "left"
        },
        transitionProperty: "transform, border-radius",
        transitionDuration: `${Ve.DURATION}s`,
        transitionTimingFunction: `cubic-bezier(${Ve.EASE.join(",")})`
      },
      !0
    );
  }
  function be(ce) {
    N.value && (a(), ce || (B.value = !1), window.setTimeout(() => {
      Z.value && (m.value = Z.value[0]);
    }, Ve.DURATION * 1e3));
  }
  _e(() => {
    if (!B.value && d.value && LC) {
      const ce = setTimeout(() => {
        KC(document.body);
      }, 200);
      return () => clearTimeout(ce);
    }
  }), ae(s, () => {
    B.value = s.value, s.value || be();
  });
  function Oe(ce) {
    if (!O.value || !N.value)
      return;
    N.value.$el.classList.remove(Zl), L.value = !1, O.value = !1, A.value = /* @__PURE__ */ new Date();
    const Ee = Xa(N.value.$el, h.value);
    if (!le(ce.target, !1) || !Ee || Number.isNaN(Ee) || D.value === null)
      return;
    const De = A.value.getTime() - D.value.getTime(), $e = G.value - (Ue(h.value) ? ce.clientY : ce.clientX), He = Math.abs($e) / De;
    if (He > 0.05 && (I.value = !0, window.setTimeout(() => {
      I.value = !1;
    }, 200)), Z.value) {
      const ut = h.value === "bottom" || h.value === "right" ? 1 : -1;
      Ce({
        draggedDistance: $e * ut,
        closeDrawer: be,
        velocity: He,
        dismissible: l.value
      }), n(!0);
      return;
    }
    if (h.value === "bottom" || h.value === "right" ? $e > 0 : $e < 0) {
      te(), n(!0);
      return;
    }
    if (He > Ld) {
      be(), n(!1);
      return;
    }
    const Xe = Math.min(
      N.value.$el.getBoundingClientRect().height ?? 0,
      window.innerHeight
    );
    if (Ee >= Xe * f.value) {
      be(), n(!1);
      return;
    }
    n(!0), te();
  }
  ae(B, (ce) => {
    ce && (F.value = /* @__PURE__ */ new Date()), o(ce);
  }, { immediate: !0 });
  function Re(ce) {
    var Ee, De;
    const $e = ce ? (window.innerWidth - Za) / window.innerWidth : 1, He = ce ? -16 : 0;
    ee.value && window.clearTimeout(ee.value), tt((Ee = N.value) == null ? void 0 : Ee.$el, {
      transition: `transform ${Ve.DURATION}s cubic-bezier(${Ve.EASE.join(",")})`,
      transform: `scale(${$e}) translate3d(0, ${He}px, 0)`
    }), !ce && (De = N.value) != null && De.$el && (ee.value = window.setTimeout(() => {
      var Xe, ut;
      const Ft = Xa((Xe = N.value) == null ? void 0 : Xe.$el, h.value);
      tt((ut = N.value) == null ? void 0 : ut.$el, {
        transition: "none",
        transform: Ue(h.value) ? `translate3d(0, ${Ft}px, 0)` : `translate3d(${Ft}px, 0, 0)`
      });
    }, 500));
  }
  function rt(ce) {
    var Ee;
    if (ce < 0)
      return;
    const De = Ue(h.value) ? window.innerHeight : window.innerWidth, $e = (De - Za) / De, He = $e + ce * (1 - $e), Xe = -16 + ce * Za;
    tt((Ee = N.value) == null ? void 0 : Ee.$el, {
      transform: Ue(h.value) ? `scale(${He}) translate3d(0, ${Xe}px, 0)` : `scale(${He}) translate3d(${Xe}px, 0, 0)`,
      transition: "none"
    });
  }
  function ct(ce) {
    var Ee;
    const De = Ue(h.value) ? window.innerHeight : window.innerWidth, $e = ce ? (De - Za) / De : 1, He = ce ? -16 : 0;
    ce && tt((Ee = N.value) == null ? void 0 : Ee.$el, {
      transition: `transform ${Ve.DURATION}s cubic-bezier(${Ve.EASE.join(",")})`,
      transform: Ue(h.value) ? `scale(${$e}) translate3d(0, ${He}px, 0)` : `scale(${$e}) translate3d(${He}px, 0, 0)`
    });
  }
  return {
    open: s,
    isOpen: B,
    modal: u,
    keyboardIsOpen: z,
    hasBeenOpened: P,
    drawerRef: N,
    drawerHeightRef: se,
    overlayRef: k,
    handleRef: ne,
    isDragging: O,
    dragStartTime: D,
    isAllowedToDrag: L,
    snapPoints: Z,
    activeSnapPoint: m,
    hasSnapPoints: K,
    pointerStart: G,
    dismissible: l,
    snapPointsOffset: Ie,
    direction: h,
    shouldFade: Te,
    fadeFromIndex: v,
    shouldScaleBackground: d,
    setBackgroundColorOnScale: p,
    onPress: ve,
    onDrag: ge,
    onRelease: Oe,
    closeDrawer: be,
    onNestedDrag: rt,
    onNestedRelease: ct,
    onNestedOpenChange: Re,
    emitClose: a,
    emitDrag: t,
    emitRelease: n,
    emitOpenChange: o,
    nested: i,
    handleOnly: C,
    noBodyStyles: x
  };
}
const QC = /* @__PURE__ */ b({
  __name: "DrawerRoot",
  props: {
    activeSnapPoint: { default: void 0 },
    closeThreshold: { default: WC },
    shouldScaleBackground: { type: Boolean, default: void 0 },
    setBackgroundColorOnScale: { type: Boolean, default: !0 },
    scrollLockTimeout: { default: UC },
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
    Mr();
    const s = E(() => a.fadeFromIndex ?? (a.snapPoints && a.snapPoints.length - 1)), l = Xl(a, "open", o, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), i = Xl(a, "activeSnapPoint", o, {
      passive: a.activeSnapPoint === void 0
    }), u = {
      emitDrag: (v) => o("drag", v),
      emitRelease: (v) => o("release", v),
      emitClose: () => o("close"),
      emitOpenChange: (v) => {
        o("update:open", v), setTimeout(() => {
          o("animationEnd", v);
        }, Ve.DURATION * 1e3);
      }
    }, { closeDrawer: d, hasBeenOpened: p, modal: c, isOpen: f } = zC(
      ZC({
        ...u,
        ...pe(a),
        activeSnapPoint: i,
        fadeFromIndex: s,
        open: l
      })
    );
    function m(v) {
      if (l.value !== void 0) {
        u.emitOpenChange(v);
        return;
      }
      f.value = v, v ? p.value = !0 : d();
    }
    return t({
      open: f
    }), (v, h) => (g(), w(r(S0), {
      open: r(f),
      modal: r(c),
      "onUpdate:open": m
    }, {
      default: y(() => [
        _(v.$slots, "default", { open: r(f) })
      ]),
      _: 3
    }, 8, ["open", "modal"]));
  }
}), JC = /* @__PURE__ */ b({
  __name: "DrawerOverlay",
  setup(e) {
    const { overlayRef: t, hasSnapPoints: n, isOpen: a, shouldFade: o } = Ws();
    return (s, l) => (g(), w(r(d_), {
      ref_key: "overlayRef",
      ref: t,
      "data-vaul-overlay": "",
      "data-vaul-snap-points": r(a) && r(n) ? "true" : "false",
      "data-vaul-snap-points-overlay": r(a) && r(o) ? "true" : "false"
    }, null, 8, ["data-vaul-snap-points", "data-vaul-snap-points-overlay"]));
  }
}), e3 = () => () => {
};
function t3() {
  const { direction: e, isOpen: t, shouldScaleBackground: n, setBackgroundColorOnScale: a, noBodyStyles: o } = Ws(), s = $(null), l = $(document.body.style.backgroundColor);
  function i() {
    return (window.innerWidth - Nd) / window.innerWidth;
  }
  _e((u) => {
    if (t.value && n.value) {
      s.value && clearTimeout(s.value);
      const d = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      if (!d)
        return;
      HC(
        a.value && !o.value ? dr(document.body, { background: "black" }) : e3,
        dr(d, {
          transformOrigin: Ue(e.value) ? "top" : "left",
          transitionProperty: "transform, border-radius",
          transitionDuration: `${Ve.DURATION}s`,
          transitionTimingFunction: `cubic-bezier(${Ve.EASE.join(",")})`
        })
      );
      const p = dr(d, {
        borderRadius: `${Vd}px`,
        overflow: "hidden",
        ...Ue(e.value) ? {
          transform: `scale(${i()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`
        } : {
          transform: `scale(${i()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`
        }
      });
      u(() => {
        p(), s.value = window.setTimeout(() => {
          l.value ? document.body.style.background = l.value : document.body.style.removeProperty("background");
        }, Ve.DURATION * 1e3);
      });
    }
  }, { flush: "pre" });
}
const n3 = /* @__PURE__ */ b({
  __name: "DrawerContent",
  setup(e) {
    const {
      open: t,
      isOpen: n,
      snapPointsOffset: a,
      hasSnapPoints: o,
      drawerRef: s,
      onPress: l,
      onDrag: i,
      onRelease: u,
      modal: d,
      emitOpenChange: p,
      dismissible: c,
      keyboardIsOpen: f,
      closeDrawer: m,
      direction: v,
      handleOnly: h
    } = Ws();
    t3();
    const x = $(!1), C = E(() => a.value && a.value.length > 0 ? `${a.value[0]}px` : "0");
    function S(O) {
      if (!d.value || O.defaultPrevented) {
        O.preventDefault();
        return;
      }
      f.value && (f.value = !1), c.value ? p(!1) : O.preventDefault();
    }
    function B(O) {
      h.value || l(O);
    }
    function P(O) {
      h.value || i(O);
    }
    return _e(() => {
      o.value && window.requestAnimationFrame(() => {
        x.value = !0;
      });
    }), (O, I) => (g(), w(r(o_), {
      ref_key: "drawerRef",
      ref: s,
      "data-vaul-drawer": "",
      "data-vaul-drawer-direction": r(v),
      "data-vaul-delayed-snap-points": x.value ? "true" : "false",
      "data-vaul-snap-points": r(n) && r(o) ? "true" : "false",
      style: at({ "--snap-point-height": C.value }),
      onPointerdown: B,
      onPointermove: P,
      onPointerup: r(u),
      onPointerDownOutside: S,
      onOpenAutoFocus: I[0] || (I[0] = Ae(() => {
      }, ["prevent"])),
      onEscapeKeyDown: I[1] || (I[1] = (k) => {
        r(c) || k.preventDefault();
      })
    }, {
      default: y(() => [
        _(O.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-vaul-drawer-direction", "data-vaul-delayed-snap-points", "data-vaul-snap-points", "style", "onPointerup"]));
  }
}), t$ = /* @__PURE__ */ b({
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
    const o = ke(e, t);
    return (s, l) => (g(), w(r(QC), T({ "data-slot": "drawer" }, r(o)), {
      default: y(() => [
        _(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), n$ = /* @__PURE__ */ b({
  __name: "DrawerClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(r(O0), T({ "data-slot": "drawer-close" }, t), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), a3 = /* @__PURE__ */ b({
  __name: "DrawerOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = xe(t, "class");
    return (a, o) => (g(), w(r(JC), T({ "data-slot": "drawer-overlay" }, r(n), {
      class: r(M)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        t.class
      )
    }), null, 16, ["class"]));
  }
}), a$ = /* @__PURE__ */ b({
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
    const n = e, o = ke(n, t);
    return (s, l) => (g(), w(r(f_), null, {
      default: y(() => [
        R(a3),
        R(r(n3), T({ "data-slot": "drawer-content" }, r(o), {
          class: r(M)(
            "group/drawer-content bg-background fixed z-50 flex h-auto flex-col",
            "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg",
            "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg",
            "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:sm:max-w-sm",
            "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:sm:max-w-sm",
            n.class
          )
        }), {
          default: y(() => [
            l[0] || (l[0] = ie("div", { class: "mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full bg-muted group-data-[vaul-drawer-direction=bottom]/drawer-content:block" }, null, -1)),
            _(s.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), o$ = /* @__PURE__ */ b({
  __name: "DrawerDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = xe(t, "class");
    return (a, o) => (g(), w(r(s_), T({ "data-slot": "drawer-description" }, r(n), {
      class: r(M)("text-muted-foreground text-sm", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), r$ = /* @__PURE__ */ b({
  __name: "DrawerFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("div", {
      "data-slot": "drawer-footer",
      class: Y(r(M)("mt-auto flex flex-col gap-2 p-4", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), s$ = /* @__PURE__ */ b({
  __name: "DrawerHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("div", {
      "data-slot": "drawer-header",
      class: Y(r(M)("flex flex-col gap-1.5 p-4", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), l$ = /* @__PURE__ */ b({
  __name: "DrawerTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = xe(t, "class");
    return (a, o) => (g(), w(r(m_), T({ "data-slot": "drawer-title" }, r(n), {
      class: r(M)("text-foreground font-semibold", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), i$ = /* @__PURE__ */ b({
  __name: "DrawerTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(r(h_), T({ "data-slot": "drawer-trigger" }, t), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), u$ = /* @__PURE__ */ b({
  __name: "DropdownMenu",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = me(e, t);
    return (s, l) => (g(), w(r(im), H(U(r(o))), {
      default: y(() => [
        _(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), d$ = /* @__PURE__ */ b({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const n = et(e);
    return (a, o) => (g(), w(r(um), T({ class: "outline-none" }, r(n)), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), c$ = /* @__PURE__ */ b({
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
    const n = e, a = t, o = E(() => {
      const { class: l, ...i } = n;
      return i;
    }), s = me(o, a);
    return (l, i) => (g(), w(r(dm), null, {
      default: y(() => [
        R(r(cm), T(r(s), {
          class: r(M)(
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
}), p$ = /* @__PURE__ */ b({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(r(fm), H(U(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), f$ = /* @__PURE__ */ b({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = me(e, t);
    return (s, l) => (g(), w(r(hm), H(U(r(o))), {
      default: y(() => [
        _(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), v$ = /* @__PURE__ */ b({
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
    const t = e, n = E(() => {
      const { class: o, ...s } = t;
      return s;
    }), a = et(n);
    return (o, s) => (g(), w(r(pm), T(r(a), {
      class: r(M)(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        e.inset && "pl-8",
        t.class
      )
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), o3 = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, m$ = /* @__PURE__ */ b({
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
    const n = e, a = t, o = E(() => {
      const { class: l, ...i } = n;
      return i;
    }), s = me(o, a);
    return (l, i) => (g(), w(r(mm), T(r(s), {
      class: r(M)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        n.class
      )
    }), {
      default: y(() => [
        ie("span", o3, [
          R(r(uu), null, {
            default: y(() => [
              R(r(Uu), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), r3 = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, g$ = /* @__PURE__ */ b({
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
    const n = e, a = t, o = E(() => {
      const { class: l, ...i } = n;
      return i;
    }), s = me(o, a);
    return (l, i) => (g(), w(r(ym), T(r(s), {
      class: r(M)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        n.class
      )
    }), {
      default: y(() => [
        ie("span", r3, [
          R(r(uu), null, {
            default: y(() => [
              R(r(ab), { class: "h-4 w-4 fill-current" })
            ]),
            _: 1
          })
        ]),
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), h$ = /* @__PURE__ */ b({
  __name: "DropdownMenuShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("span", {
      class: Y(r(M)("ml-auto text-xs tracking-widest opacity-60", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), y$ = /* @__PURE__ */ b({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(r(vm), T(n.value, {
      class: r(M)("-mx-1 my-1 h-px bg-muted", t.class)
    }), null, 16, ["class"]));
  }
}), b$ = /* @__PURE__ */ b({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: o, ...s } = t;
      return s;
    }), a = et(n);
    return (o, s) => (g(), w(r(gm), T(r(a), {
      class: r(M)("px-2 py-1.5 text-sm font-semibold", e.inset && "pl-8", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), _$ = /* @__PURE__ */ b({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = me(e, t);
    return (s, l) => (g(), w(r(bm), H(U(r(o))), {
      default: y(() => [
        _(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), w$ = /* @__PURE__ */ b({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: o, ...s } = t;
      return s;
    }), a = et(n);
    return (o, s) => (g(), w(r(wm), T(r(a), {
      class: r(M)(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
        t.class
      )
    }), {
      default: y(() => [
        _(o.$slots, "default"),
        R(r(tb), { class: "ml-auto h-4 w-4" })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), x$ = /* @__PURE__ */ b({
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
    const n = e, a = t, o = E(() => {
      const { class: l, ...i } = n;
      return i;
    }), s = me(o, a);
    return (l, i) => (g(), w(r(_m), T(r(s), {
      class: r(M)(
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
}), C$ = /* @__PURE__ */ b({
  __name: "Empty",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("div", {
      "data-slot": "empty",
      class: Y(
        r(M)(
          "flex min-w-0 flex-1 flex-col items-center justify-center gap-6 text-balance rounded-lg border-dashed p-6 text-center md:p-12",
          t.class
        )
      )
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), B$ = /* @__PURE__ */ b({
  __name: "EmptyContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("div", {
      "data-slot": "empty-content",
      class: Y(
        r(M)(
          "flex w-full min-w-0 max-w-sm flex-col items-center gap-4 text-balance text-sm",
          t.class
        )
      )
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), S$ = /* @__PURE__ */ b({
  __name: "EmptyDescription",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("p", {
      "data-slot": "empty-description",
      class: Y(
        r(M)(
          "text-muted-foreground [&>a:hover]:text-primary text-sm/relaxed [&>a]:underline [&>a]:underline-offset-4",
          t.class
        )
      )
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), $$ = /* @__PURE__ */ b({
  __name: "EmptyHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("div", {
      "data-slot": "empty-header",
      class: Y(r(M)("flex max-w-sm flex-col items-center gap-2 text-center", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), s3 = ["data-variant"], O$ = /* @__PURE__ */ b({
  __name: "EmptyMedia",
  props: {
    class: {},
    variant: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("div", {
      "data-slot": "empty-icon",
      "data-variant": e.variant,
      class: Y(r(M)(r(l3)({ variant: e.variant }), t.class))
    }, [
      _(n.$slots, "default")
    ], 10, s3));
  }
}), E$ = /* @__PURE__ */ b({
  __name: "EmptyTitle",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("div", {
      "data-slot": "empty-title",
      class: Y(r(M)("text-lg font-medium tracking-tight", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), l3 = Ut(
  "mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground [&_svg:not([class*='size-'])]:size-6"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), i3 = /* @__PURE__ */ b({
  __name: "Input",
  props: {
    defaultValue: {},
    modelValue: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = Bs(n, "modelValue", t, {
      passive: !0,
      defaultValue: n.defaultValue
    });
    return (s, l) => Hn((g(), V("input", {
      "onUpdate:modelValue": l[0] || (l[0] = (i) => Qe(o) ? o.value = i : null),
      class: Y(
        r(M)(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          n.class
        )
      )
    }, null, 2)), [
      [si, r(o)]
    ]);
  }
});
function u3(e) {
  return Ca() ? (Ba(e), !0) : !1;
}
function d3(e) {
  if (!Qe(e))
    return gt(e);
  const t = new Proxy({}, {
    get(n, a, o) {
      return r(Reflect.get(e.value, a, o));
    },
    set(n, a, o) {
      return Qe(e.value[a]) && !Qe(o) ? e.value[a].value = o : e.value[a] = o, !0;
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
  return gt(t);
}
function c3(e) {
  return d3(E(e));
}
function p3(e, ...t) {
  const n = t.flat(), a = n[0];
  return c3(() => Object.fromEntries(typeof a == "function" ? Object.entries(pe(e)).filter(([o, s]) => !a(ze(s), o)) : Object.entries(pe(e)).filter((o) => !n.includes(o[0]))));
}
const zd = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const f3 = Object.prototype.toString, v3 = (e) => f3.call(e) === "[object Object]", m3 = () => {
};
function cr(e) {
  return Array.isArray(e) ? e : [e];
}
function g3(...e) {
  if (e.length !== 1)
    return Ar(...e);
  const t = e[0];
  return typeof t == "function" ? Un(qr(() => ({ get: t, set: m3 }))) : $(t);
}
function h3(e, t, n) {
  return ae(
    e,
    t,
    {
      ...n,
      immediate: !0
    }
  );
}
const no = zd ? window : void 0, Ze = zd ? window.document : void 0;
function y3(e) {
  var t;
  const n = ze(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
function b3(...e) {
  const t = [], n = () => {
    t.forEach((i) => i()), t.length = 0;
  }, a = (i, u, d, p) => (i.addEventListener(u, d, p), () => i.removeEventListener(u, d, p)), o = E(() => {
    const i = cr(ze(e[0])).filter((u) => u != null);
    return i.every((u) => typeof u != "string") ? i : void 0;
  }), s = h3(
    () => {
      var i, u;
      return [
        (u = (i = o.value) == null ? void 0 : i.map((d) => y3(d))) != null ? u : [no].filter((d) => d != null),
        cr(ze(o.value ? e[1] : e[0])),
        cr(r(o.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        ze(o.value ? e[3] : e[2])
      ];
    },
    ([i, u, d, p]) => {
      if (n(), !(i != null && i.length) || !(u != null && u.length) || !(d != null && d.length))
        return;
      const c = v3(p) ? { ...p } : p;
      t.push(
        ...i.flatMap(
          (f) => u.flatMap(
            (m) => d.map((v) => a(f, m, v, c))
          )
        )
      );
    },
    { flush: "post" }
  ), l = () => {
    s(), n();
  };
  return u3(n), l;
}
function _3(e, t) {
  const n = pt(t);
  return ae(
    g3(e),
    (a, o) => {
      n.value = o;
    },
    { flush: "sync" }
  ), Un(n);
}
const w3 = `
[data-input-otp] {
  --nojs-bg: white !important;
  --nojs-fg: black !important;

  background-color: var(--nojs-bg) !important;
  color: var(--nojs-fg) !important;
  caret-color: var(--nojs-fg) !important;
  letter-spacing: .25em !important;
  text-align: center !important;
  border: 1px solid var(--nojs-fg) !important;
  border-radius: 4px !important;
  width: 100% !important;
}
@media (prefers-color-scheme: dark) {
  [data-input-otp] {
    --nojs-bg: black !important;
    --nojs-fg: white !important;
  }
}`, x3 = b({
  props: { fallback: {
    type: String,
    required: !0
  } },
  setup(e) {
    return () => ot("noscript", { innerHTML: `<style>${e.fallback}</style>` });
  }
}), Kd = Symbol("vue-otp-context");
function C3(e) {
  return [
    setTimeout(e, 0),
    setTimeout(e, 10),
    setTimeout(e, 50)
  ];
}
const B3 = 18, jd = 40, S3 = `${jd}px`, $3 = [
  "[data-lastpass-icon-root]",
  "com-1password-button",
  "[data-dashlanecreated]",
  '[style$="2147483647 !important;"]'
].join(",");
function O3({ containerRef: e, inputRef: t, pushPasswordManagerStrategy: n, isFocused: a }) {
  const o = $({
    done: !1,
    refocused: !1
  }), s = $(!1), l = $(!1), i = $(!1), u = E(() => n === "none" ? !1 : (n === "increase-width" || n === "experimental-no-flickering") && s.value && l.value), d = () => {
    const f = e.value, m = t.value;
    if (!f || !m || i.value || n === "none") return;
    const v = f, h = v.getBoundingClientRect().left + v.offsetWidth, x = v.getBoundingClientRect().top + v.offsetHeight / 2, C = h - B3, S = x;
    if (!(document.querySelectorAll($3).length === 0 && document.elementFromPoint(C, S) === f) && (s.value = !0, i.value = !0, !o.value.refocused && document.activeElement === m)) {
      const B = [m.selectionStart, m.selectionEnd];
      m.blur(), m.focus(), m.setSelectionRange(B[0], B[1]), o.value.refocused = !0;
    }
  }, p = () => {
    const f = e.value;
    !f || n === "none" || (l.value = window.innerWidth - f.getBoundingClientRect().right >= jd);
  };
  let c;
  return de(() => {
    p(), c = setInterval(p, 1e3);
  }), Ke(() => {
    clearInterval(c);
  }), ae([a, t], (f, m, v) => {
    const [h, x] = f, C = h || document.activeElement === x;
    if (n === "none" || !C) return;
    const S = setTimeout(d, 0), B = setTimeout(d, 2e3), P = setTimeout(d, 5e3), O = setTimeout(() => {
      i.value = !0;
    }, 6e3);
    v(() => {
      clearTimeout(S), clearTimeout(B), clearTimeout(P), clearTimeout(O);
    });
  }), {
    hasPWMBadge: s,
    willPushPWMBadge: u,
    PWM_BADGE_SPACE_WIDTH: S3
  };
}
const E3 = { style: {
  position: "absolute",
  inset: "0",
  "pointer-events": "none"
} }, P3 = [
  "value",
  "data-input-otp-placeholder-shown",
  "data-input-otp-mss",
  "data-input-otp-mse",
  "aria-placeholder",
  "pattern"
], k3 = /* @__PURE__ */ b({
  name: "OTPInput",
  inheritAttrs: !1,
  __name: "OTPInput",
  props: /* @__PURE__ */ tl({
    maxlength: {},
    textAlign: { default: "left" },
    inputmode: { default: "numeric" },
    containerClass: {},
    pushPasswordManagerStrategy: { default: "increase-width" },
    noScriptCssFallback: { default: w3 },
    defaultValue: { default: "" },
    pasteTransformer: {},
    accept: {},
    alt: {},
    autocomplete: { default: "one-time-code" },
    autofocus: { type: Boolean },
    capture: { type: [Boolean, String] },
    checked: { type: [
      Boolean,
      Array,
      Set
    ] },
    crossorigin: {},
    disabled: { type: Boolean },
    enterKeyHint: {},
    form: {},
    formaction: {},
    formenctype: {},
    formmethod: {},
    formnovalidate: { type: Boolean },
    formtarget: {},
    height: {},
    indeterminate: { type: Boolean },
    list: {},
    max: {},
    min: {},
    minlength: {},
    multiple: { type: Boolean },
    name: {},
    pattern: {},
    placeholder: {},
    readonly: { type: Boolean },
    required: { type: Boolean },
    size: {},
    src: {},
    step: {},
    type: {},
    value: {},
    width: {}
  }, {
    modelValue: { default(e) {
      return e.defaultValue;
    } },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ tl([
    "complete",
    "change",
    "select",
    "input",
    "focus",
    "blur",
    "mouseover",
    "mouseleave",
    "paste"
  ], ["update:modelValue"]),
  setup(e, { expose: t, emit: n }) {
    var A, q, L, ee, G;
    const a = e, o = n, [s] = oc(e, "modelValue"), l = _3(s), i = E(() => a.pattern ? typeof a.pattern == "string" ? new RegExp(a.pattern) : a.pattern : null), u = pt(!1), d = pt(!1), p = pt(null), c = pt(null), f = pt(null), m = pt(null), v = (q = (A = no == null ? void 0 : no.CSS) == null ? void 0 : A.supports) == null ? void 0 : q.call(A, "-webkit-touch-callout", "none");
    let h = { prev: [
      (L = f.value) == null ? void 0 : L.selectionStart,
      (ee = f.value) == null ? void 0 : ee.selectionEnd,
      (G = f.value) == null ? void 0 : G.selectionDirection
    ] };
    function x(z, N) {
      try {
        z.insertRule(N);
      } catch {
        console.error("input-otp could not insert CSS rule:", N);
      }
    }
    de(() => {
      const z = f.value, N = m.value;
      if (!z || !N) return;
      h.prev = [
        z.selectionStart,
        z.selectionEnd,
        z.selectionDirection ?? "none"
      ];
      const se = b3(Ze, "selectionchange", Z, { capture: !0 });
      function Z() {
        if (!z) return;
        if ((Ze == null ? void 0 : Ze.activeElement) !== z) {
          p.value = null, c.value = null;
          return;
        }
        const X = z.selectionStart, Ce = z.selectionEnd, Ie = z.selectionDirection, Se = z.maxLength, Te = z.value, je = h.prev;
        let W = -1, Q = -1, le;
        if (Te.length !== 0 && X !== null && Ce !== null) {
          const be = X === Ce, Oe = X === Te.length && Te.length < Se;
          if (be && !Oe) {
            const Re = X;
            if (Re === 0)
              W = 0, Q = 1, le = "forward";
            else if (Re === Se)
              W = Re - 1, Q = Re, le = "backward";
            else if (Se > 1 && Te.length > 1) {
              let rt = 0;
              if (je[0] !== null && je[1] !== null) {
                le = Re < je[1] ? "backward" : "forward";
                const ct = je[0] === je[1] && je[0] < Se;
                le === "backward" && !ct && (rt = -1);
              }
              W = rt + Re, Q = rt + Re + 1;
            }
          }
          W !== -1 && Q !== -1 && W !== Q && z.setSelectionRange(W, Q, le);
        }
        const ve = W !== -1 ? W : X, ge = Q !== -1 ? Q : Ce, te = le ?? Ie;
        p.value = ve, c.value = ge, h.prev = [
          ve,
          ge,
          te
        ];
      }
      if (Z(), (Ze == null ? void 0 : Ze.activeElement) === z && (d.value = !0), !(Ze != null && Ze.getElementById("input-otp-style"))) {
        const X = Ze == null ? void 0 : Ze.createElement("style");
        if (X.id = "input-otp-style", Ze == null || Ze.head.appendChild(X), X.sheet) {
          const Ce = "background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";
          x(X.sheet, "[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"), x(X.sheet, `[data-input-otp]:autofill { ${Ce} }`), x(X.sheet, `[data-input-otp]:-webkit-autofill { ${Ce} }`), x(X.sheet, "@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"), x(X.sheet, "[data-input-otp] + * { pointer-events: all !important; }");
        }
      }
      const K = () => {
        N && N.style.setProperty("--root-height", `${z.clientHeight}px`);
      };
      K();
      const ne = new ResizeObserver(K);
      ne.observe(z), Ke(() => {
        se(), ne.disconnect();
      });
    }), ae([s], () => {
      C3(() => {
        var Z, K, ne, X;
        if (!f.value) return;
        (Z = f.value) == null || Z.dispatchEvent(new Event("input"));
        const z = (K = f.value) == null ? void 0 : K.selectionStart, N = (ne = f.value) == null ? void 0 : ne.selectionEnd, se = (X = f.value) == null ? void 0 : X.selectionDirection;
        z !== null && N !== null && (p.value = z ?? null, c.value = N ?? null, h.prev = [
          z,
          N,
          se
        ]);
      });
    }, { immediate: !0 }), _e(() => {
      l.value !== void 0 && s.value !== l.value && l.value.length < a.maxlength && s.value.length === a.maxlength && o("complete", s.value);
    });
    const C = O3({
      containerRef: m,
      inputRef: f,
      pushPasswordManagerStrategy: a.pushPasswordManagerStrategy,
      isFocused: d
    });
    function S(z) {
      if (z.inputType === "insertText" && z.data !== null) {
        const N = z.currentTarget, se = N.selectionStart ?? 0, Z = N.selectionEnd ?? 0, K = N.value, ne = (se !== Z ? K.slice(0, se) + z.data + K.slice(Z) : K.slice(0, se) + z.data + K.slice(se)).slice(0, a.maxlength);
        ne.length > 0 && i.value && !i.value.test(ne) && z.preventDefault();
      }
    }
    function B(z) {
      const N = z.currentTarget.value.slice(0, a.maxlength);
      if (N.length > 0 && i.value && !i.value.test(N)) {
        z.preventDefault();
        return;
      }
      typeof l.value == "string" && N.length < l.value.length && (Ze == null || Ze.dispatchEvent(new Event("selectionchange"))), s.value = N, o("input", N);
    }
    function P() {
      const z = f.value;
      if (z) {
        const N = Math.min(z.value.length, a.maxlength - 1), se = z.value.length;
        z.setSelectionRange(N, se), p.value = N, c.value = se;
      }
      d.value = !0;
    }
    function O(z) {
      var Se, Te, je;
      const N = f.value;
      if (!N || !a.pasteTransformer && (!v || !z.clipboardData || !N)) return;
      const se = (Se = z == null ? void 0 : z.clipboardData) == null ? void 0 : Se.getData("text/plain"), Z = a != null && a.pasteTransformer ? a.pasteTransformer(se) : se;
      z.preventDefault();
      const K = (Te = f.value) == null ? void 0 : Te.selectionStart, ne = (je = f.value) == null ? void 0 : je.selectionEnd, X = (K !== ne ? s.value.slice(0, K) + Z + s.value.slice(ne) : s.value.slice(0, K) + Z + s.value.slice(K)).slice(0, a.maxlength);
      if (X.length > 0 && i.value && !i.value.test(X)) return;
      s.value = X, o("input", X);
      const Ce = Math.min(X.length, a.maxlength - 1), Ie = X.length;
      N == null || N.setSelectionRange(Ce, Ie), p.value = Ce, c.value = Ie;
    }
    const I = Ye(p3(a, "containerClass", "value", "pattern", "defaultValue", "pushPasswordManagerStrategy", "noScriptCssFallback", "modelValue")), k = E(() => ({
      position: "relative",
      cursor: a.disabled ? "default" : "text",
      userSelect: "none",
      WebkitUserSelect: "none",
      pointerEvents: "none"
    })), F = E(() => ({
      position: "absolute",
      inset: 0,
      width: C.willPushPWMBadge.value ? `calc(100% + ${C.PWM_BADGE_SPACE_WIDTH})` : "100%",
      clipPath: C.willPushPWMBadge.value ? `inset(0 ${C.PWM_BADGE_SPACE_WIDTH} 0 0)` : void 0,
      height: "100%",
      display: "flex",
      textAlign: a.textAlign,
      opacity: "1",
      color: "transparent",
      pointerEvents: "all",
      background: "transparent",
      caretColor: "transparent",
      border: "0 solid transparent",
      outline: "0 solid transparent",
      boxShadow: "none",
      lineHeight: "1",
      letterSpacing: "-.5em",
      fontSize: "var(--root-height)",
      fontFamily: "monospace",
      fontVariantNumeric: "tabular-nums"
    })), D = E(() => ({
      slots: Array.from({ length: Number(a.maxlength) }).map((z, N) => {
        var K;
        const se = d.value && p.value !== null && c.value !== null && (p.value === c.value && N === p.value || N >= p.value && N < c.value), Z = s.value[N] !== void 0 ? s.value[N] : null;
        return {
          char: Z,
          placeholderChar: Z ?? ((K = a == null ? void 0 : a.placeholder) == null ? void 0 : K[N]) ?? null,
          isActive: se,
          hasFakeCaret: se && Z === null
        };
      }),
      isFocused: d.value,
      isHovering: !a.disabled && u.value
    }));
    return bn(Kd, D), t(Object.defineProperty({}, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => f
    })), (z, N) => {
      var se;
      return g(), V(Pe, null, [e.noScriptCssFallback !== null ? (g(), w(r(x3), {
        key: 0,
        fallback: e.noScriptCssFallback
      }, null, 8, ["fallback"])) : fe("v-if", !0), ie("div", {
        ref_key: "containerRef",
        ref: m,
        "data-input-otp-container": "",
        style: at(k.value),
        class: Y(e.containerClass)
      }, [_(z.$slots, "default", {
        slots: D.value.slots,
        isFocused: d.value,
        isHovering: !e.disabled && u.value
      }), ie("div", E3, [ie("input", T({
        ref_key: "inputRef",
        ref: f,
        value: r(s),
        "data-input-otp": "",
        "data-input-otp-placeholder-shown": r(s).length === 0 || void 0,
        "data-input-otp-mss": p.value,
        "data-input-otp-mse": c.value,
        "aria-placeholder": e.placeholder,
        style: F.value,
        pattern: (se = i.value) == null ? void 0 : se.source
      }, {
        ...z.$attrs,
        ...r(I)
      }, {
        onBeforeinput: S,
        onMouseover: N[0] || (N[0] = (Z) => {
          u.value = !0, o("mouseover", Z);
        }),
        onMouseleave: N[1] || (N[1] = (Z) => {
          u.value = !1, o("mouseleave", Z);
        }),
        onPaste: N[2] || (N[2] = (Z) => {
          O(Z), o("paste", Z);
        }),
        onInput: B,
        onFocus: N[3] || (N[3] = (Z) => {
          P(), o("focus", Z);
        }),
        onBlur: N[4] || (N[4] = (Z) => {
          d.value = !1, o("blur", Z);
        })
      }), null, 16, P3)])], 6)], 64);
    };
  }
});
var T3 = k3;
function D3() {
  return yn(Kd);
}
const P$ = /* @__PURE__ */ b({
  __name: "InputOTP",
  props: {
    maxlength: {},
    textAlign: {},
    inputmode: {},
    containerClass: {},
    pushPasswordManagerStrategy: {},
    noScriptCssFallback: {},
    defaultValue: {},
    pasteTransformer: { type: Function },
    accept: {},
    alt: {},
    autocomplete: {},
    autofocus: { type: Boolean },
    capture: { type: [Boolean, String] },
    checked: { type: [Boolean, Array, Set] },
    crossorigin: {},
    disabled: { type: Boolean },
    enterKeyHint: {},
    form: {},
    formaction: {},
    formenctype: {},
    formmethod: {},
    formnovalidate: { type: Boolean },
    formtarget: {},
    height: {},
    indeterminate: { type: Boolean },
    list: {},
    max: {},
    min: {},
    minlength: {},
    multiple: { type: Boolean },
    name: {},
    pattern: {},
    placeholder: {},
    readonly: { type: Boolean },
    required: { type: Boolean },
    size: {},
    src: {},
    step: {},
    type: {},
    value: {},
    width: {},
    class: {}
  },
  emits: ["complete", "change", "select", "input", "focus", "blur", "mouseover", "mouseleave", "paste"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = xe(n, "class"), s = ke(o, a);
    return (l, i) => (g(), w(r(T3), T(r(s), {
      "container-class": r(M)("flex items-center gap-2 has-disabled:opacity-50", n.class),
      "data-slot": "input-otp",
      class: "disabled:cursor-not-allowed"
    }), {
      default: y((u) => [
        _(l.$slots, "default", H(U(u)))
      ]),
      _: 3
    }, 16, ["container-class"]));
  }
}), k$ = /* @__PURE__ */ b({
  __name: "InputOTPGroup",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, n = xe(t, "class"), a = Ye(n);
    return (o, s) => (g(), V("div", T({ "data-slot": "input-otp-group" }, r(a), {
      class: r(M)("flex items-center", t.class)
    }), [
      _(o.$slots, "default")
    ], 16));
  }
}), T$ = /* @__PURE__ */ b({
  __name: "InputOTPSeparator",
  props: {
    class: {}
  },
  setup(e) {
    const n = Ye(e);
    return (a, o) => (g(), V("div", T({
      "data-slot": "input-otp-separator",
      role: "separator"
    }, r(n)), [
      _(a.$slots, "default", {}, () => [
        R(r(xb))
      ])
    ], 16));
  }
}), A3 = ["data-active"], I3 = {
  key: 0,
  class: "pointer-events-none absolute inset-0 flex items-center justify-center"
}, D$ = /* @__PURE__ */ b({
  __name: "InputOTPSlot",
  props: {
    index: {},
    class: {}
  },
  setup(e) {
    const t = e, n = xe(t, "class"), a = Ye(n), o = D3(), s = E(() => o == null ? void 0 : o.value.slots[t.index]);
    return (l, i) => {
      var u, d, p;
      return g(), V("div", T(r(a), {
        "data-slot": "input-otp-slot",
        "data-active": (u = s.value) == null ? void 0 : u.isActive,
        class: r(M)(
          "data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]",
          t.class
        )
      }), [
        Be(Me((d = s.value) == null ? void 0 : d.char) + " ", 1),
        (p = s.value) != null && p.hasFakeCaret ? (g(), V("div", I3, [...i[0] || (i[0] = [
          ie("div", { class: "animate-caret-blink h-4 w-px bg-foreground duration-1000" }, null, -1)
        ])])) : fe("", !0)
      ], 16, A3);
    };
  }
}), A$ = /* @__PURE__ */ b({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(r(xm), T(n.value, {
      class: r(M)(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        t.class
      )
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), M3 = { class: "absolute left-0 top-full flex justify-center" }, R3 = /* @__PURE__ */ b({
  __name: "NavigationMenuViewport",
  props: {
    forceMount: { type: Boolean },
    align: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = xe(t, "class"), a = Ye(n);
    return (o, s) => (g(), V("div", M3, [
      R(r($x), T(r(a), {
        class: r(M)(
          "origin-top-center relative mt-1.5 h-[--reka-navigation-menu-viewport-height] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[--reka-navigation-menu-viewport-width] left-[var(--reka-navigation-menu-viewport-left)]",
          t.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), I$ = /* @__PURE__ */ b({
  __name: "NavigationMenu",
  props: {
    modelValue: {},
    defaultValue: {},
    dir: {},
    orientation: {},
    delayDuration: {},
    skipDelayDuration: {},
    disableClickTrigger: { type: Boolean },
    disableHoverTrigger: { type: Boolean },
    disablePointerLeaveClose: { type: Boolean },
    unmountOnHide: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = xe(n, "class"), s = ke(o, a);
    return (l, i) => (g(), w(r(sx), T(r(s), {
      class: r(M)("relative z-10 flex max-w-max flex-1 items-center justify-center", n.class)
    }), {
      default: y(() => [
        _(l.$slots, "default"),
        R(R3)
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), M$ = /* @__PURE__ */ b({
  __name: "NavigationMenuContent",
  props: {
    forceMount: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = xe(n, "class"), s = ke(o, a);
    return (l, i) => (g(), w(r(mx), T(r(s), {
      class: r(M)(
        "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto",
        n.class
      )
    }), {
      default: y(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), R$ = /* @__PURE__ */ b({
  __name: "NavigationMenuIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = xe(t, "class"), a = Ye(n);
    return (o, s) => (g(), w(r(hx), T(r(a), {
      class: r(M)(
        "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
        t.class
      )
    }), {
      default: y(() => [...s[0] || (s[0] = [
        ie("div", { class: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" }, null, -1)
      ])]),
      _: 1
    }, 16, ["class"]));
  }
}), F$ = /* @__PURE__ */ b({
  __name: "NavigationMenuItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(r(cx), H(U(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), q$ = /* @__PURE__ */ b({
  __name: "NavigationMenuLink",
  props: {
    active: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const o = ke(e, t);
    return (s, l) => (g(), w(r(bx), H(U(r(o))), {
      default: y(() => [
        _(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), L$ = /* @__PURE__ */ b({
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = xe(t, "class"), a = Ye(n);
    return (o, s) => (g(), w(r(wx), T(r(a), {
      class: r(M)("group flex flex-1 list-none items-center justify-center gap-x-1", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), V$ = /* @__PURE__ */ b({
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = xe(t, "class"), a = Ye(n);
    return (o, s) => (g(), w(r(Bx), T(r(a), {
      class: r(M)(r(F3)(), "group", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default"),
        R(r(bb), {
          class: "relative top-px ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), F3 = Ut(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
), N$ = /* @__PURE__ */ b({
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
    const n = e, a = t, o = xe(n, "class"), s = ke(o, a);
    return (l, i) => (g(), w(r(Tx), T({ "data-slot": "pagination" }, r(s), {
      class: r(M)("mx-auto flex w-full justify-center", n.class)
    }), {
      default: y((u) => [
        _(l.$slots, "default", H(U(u)))
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), z$ = /* @__PURE__ */ b({
  __name: "PaginationContent",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = xe(t, "class");
    return (a, o) => (g(), w(r(Lx), T({ "data-slot": "pagination-content" }, r(n), {
      class: r(M)("flex flex-row items-center gap-1", t.class)
    }), {
      default: y((s) => [
        _(a.$slots, "default", H(U(s)))
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), K$ = /* @__PURE__ */ b({
  __name: "PaginationEllipsis",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = xe(t, "class");
    return (a, o) => (g(), w(r(Ex), T({ "data-slot": "pagination-ellipsis" }, r(n), {
      class: r(M)("flex size-9 items-center justify-center", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default", {}, () => [
          R(r(Zu), { class: "size-4" }),
          o[0] || (o[0] = ie("span", { class: "sr-only" }, "More pages", -1))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), j$ = /* @__PURE__ */ b({
  __name: "PaginationFirst",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, n = xe(t, "class", "size"), a = Ye(n);
    return (o, s) => (g(), w(r(Ax), T({
      "data-slot": "pagination-first",
      class: r(M)(r(un)({ variant: "ghost", size: e.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, r(a)), {
      default: y(() => [
        _(o.$slots, "default", {}, () => [
          R(r(Xu)),
          s[0] || (s[0] = ie("span", { class: "hidden sm:block" }, "First", -1))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), H$ = /* @__PURE__ */ b({
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
    const t = e, n = xe(t, "class", "size", "isActive");
    return (a, o) => (g(), w(r(Nx), T({ "data-slot": "pagination-item" }, r(n), {
      class: r(M)(
        r(un)({
          variant: e.isActive ? "outline" : "ghost",
          size: e.size
        }),
        t.class
      )
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), W$ = /* @__PURE__ */ b({
  __name: "PaginationLast",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, n = xe(t, "class", "size"), a = Ye(n);
    return (o, s) => (g(), w(r(Mx), T({
      "data-slot": "pagination-last",
      class: r(M)(r(un)({ variant: "ghost", size: e.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, r(a)), {
      default: y(() => [
        _(o.$slots, "default", {}, () => [
          s[0] || (s[0] = ie("span", { class: "hidden sm:block" }, "Last", -1)),
          R(r(Da))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), U$ = /* @__PURE__ */ b({
  __name: "PaginationNext",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, n = xe(t, "class", "size"), a = Ye(n);
    return (o, s) => (g(), w(r(Kx), T({
      "data-slot": "pagination-next",
      class: r(M)(r(un)({ variant: "ghost", size: e.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, r(a)), {
      default: y(() => [
        _(o.$slots, "default", {}, () => [
          s[0] || (s[0] = ie("span", { class: "hidden sm:block" }, "Next", -1)),
          R(r(Da))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), G$ = /* @__PURE__ */ b({
  __name: "PaginationPrevious",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, n = xe(t, "class", "size"), a = Ye(n);
    return (o, s) => (g(), w(r(Hx), T({
      "data-slot": "pagination-previous",
      class: r(M)(r(un)({ variant: "ghost", size: e.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, r(a)), {
      default: y(() => [
        _(o.$slots, "default", {}, () => [
          R(r(Xu)),
          s[0] || (s[0] = ie("span", { class: "hidden sm:block" }, "Previous", -1))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Y$ = /* @__PURE__ */ b({
  __name: "Popover",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = me(e, t);
    return (s, l) => (g(), w(r(Bm), H(U(r(o))), {
      default: y(() => [
        _(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), X$ = /* @__PURE__ */ b({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(r(Sm), H(U(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Z$ = /* @__PURE__ */ b({
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
    const n = e, a = t, o = E(() => {
      const { class: l, ...i } = n;
      return i;
    }), s = me(o, a);
    return (l, i) => (g(), w(r($m), null, {
      default: y(() => [
        R(r(Pm), T({ ...r(s), ...l.$attrs }, {
          class: r(M)(
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
}), Q$ = /* @__PURE__ */ b({
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
    const t = e, n = E(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(r(Im), T(n.value, {
      class: r(M)("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", t.class)
    }), {
      default: y(() => [
        R(r(Mm), {
          class: "h-full w-full flex-1 bg-primary transition-all",
          style: at(`transform: translateX(-${100 - (t.modelValue ?? 0)}%);`)
        }, null, 8, ["style"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), J$ = /* @__PURE__ */ b({
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
    const o = me(e, t);
    return (s, l) => (g(), w(r(Nm), H(U(r(o))), {
      default: y(() => [
        _(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), e2 = /* @__PURE__ */ b({
  __name: "SelectValue",
  props: {
    placeholder: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(r(cg), H(U(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), t2 = /* @__PURE__ */ b({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: o, ...s } = t;
      return s;
    }), a = et(n);
    return (o, s) => (g(), w(r(jm), T(r(a), {
      class: r(M)(
        "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:truncate text-start",
        t.class
      )
    }), {
      default: y(() => [
        _(o.$slots, "default"),
        R(r(pg), { "as-child": "" }, {
          default: y(() => [
            R(r(eb), { class: "h-4 w-4 shrink-0 opacity-50" })
          ]),
          _: 1
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), n2 = /* @__PURE__ */ b({
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
    const n = e, a = t, o = E(() => {
      const { class: l, ...i } = n;
      return i;
    }), s = me(o, a);
    return (l, i) => (g(), w(r(Hm), null, {
      default: y(() => [
        R(r(Jm), T({ ...r(s), ...l.$attrs }, {
          class: r(M)(
            "relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            e.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            n.class
          )
        }), {
          default: y(() => [
            R(r(L3)),
            R(r(ig), {
              class: Y(
                r(M)(
                  "p-1",
                  e.position === "popper" && "h-[--radix-select-trigger-height] w-full min-w-[--radix-select-trigger-width]"
                )
              )
            }, {
              default: y(() => [
                _(l.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]),
            R(r(V3))
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), a2 = /* @__PURE__ */ b({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(r(sg), T({
      class: r(M)("p-1 w-full", t.class)
    }, n.value), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), q3 = { class: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center" }, o2 = /* @__PURE__ */ b({
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
    const t = e, n = E(() => {
      const { class: o, ...s } = t;
      return s;
    }), a = et(n);
    return (o, s) => (g(), w(r(ng), T(r(a), {
      class: r(M)(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        t.class
      )
    }), {
      default: y(() => [
        ie("span", q3, [
          R(r(ag), null, {
            default: y(() => [
              R(r(Uu), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        R(r(vu), null, {
          default: y(() => [
            _(o.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), r2 = /* @__PURE__ */ b({
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(r(vu), H(U(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), s2 = /* @__PURE__ */ b({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(r(lg), {
      class: Y(r(M)("px-2 py-1.5 text-sm font-semibold", t.class))
    }, {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), l2 = /* @__PURE__ */ b({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(r(eg), T(n.value, {
      class: r(M)("-mx-1 my-1 h-px bg-muted", t.class)
    }), null, 16, ["class"]));
  }
}), L3 = /* @__PURE__ */ b({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: o, ...s } = t;
      return s;
    }), a = et(n);
    return (o, s) => (g(), w(r(ug), T(r(a), {
      class: r(M)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default", {}, () => [
          R(r(nb))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), V3 = /* @__PURE__ */ b({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: o, ...s } = t;
      return s;
    }), a = et(n);
    return (o, s) => (g(), w(r(dg), T(r(a), {
      class: r(M)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default", {}, () => [
          R(r(Gu))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), N3 = /* @__PURE__ */ b({
  __name: "Separator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = xe(t, "class");
    return (a, o) => (g(), w(r(Yx), T(r(n), {
      class: r(M)(
        "shrink-0 bg-border",
        t.orientation === "horizontal" ? "h-px w-full" : "w-px h-full",
        t.class
      )
    }), null, 16, ["class"]));
  }
}), z3 = /* @__PURE__ */ b({
  __name: "Sheet",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = me(e, t);
    return (s, l) => (g(), w(r(ns), H(U(r(o))), {
      default: y(() => [
        _(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), i2 = /* @__PURE__ */ b({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(r(as), H(U(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), u2 = /* @__PURE__ */ b({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(r(xn), H(U(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), K3 = /* @__PURE__ */ b({
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
    const n = e, a = t, o = E(() => {
      const { class: l, side: i, ...u } = n;
      return u;
    }), s = me(o, a);
    return (l, i) => (g(), w(r(os), null, {
      default: y(() => [
        R(r(Eo), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        R(r(Oo), T({
          class: r(M)(r(j3)({ side: e.side }), n.class)
        }, { ...r(s), ...l.$attrs }), {
          default: y(() => [
            _(l.$slots, "default"),
            R(r(xn), { class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary" }, {
              default: y(() => [
                R(r(Ao), { class: "h-4 w-4" })
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
}), d2 = /* @__PURE__ */ b({
  __name: "SheetHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("div", {
      class: Y(r(M)("flex flex-col gap-y-2 text-center sm:text-left", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), c2 = /* @__PURE__ */ b({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(r(is), T({
      class: r(M)("text-lg font-semibold text-foreground", t.class)
    }, n.value), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), p2 = /* @__PURE__ */ b({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(r(us), T({
      class: r(M)("text-sm text-muted-foreground", t.class)
    }, n.value), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), f2 = /* @__PURE__ */ b({
  __name: "SheetFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("div", {
      class: Y(r(M)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), j3 = Ut(
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
), H3 = "sidebar:state", W3 = 60 * 60 * 24 * 7, U3 = "16rem", G3 = "18rem", Y3 = "3rem", X3 = "b", [Ko, Z3] = we("Sidebar"), Q3 = { class: "flex h-full w-full flex-col" }, J3 = ["data-state", "data-collapsible", "data-variant", "data-side"], eB = {
  "data-sidebar": "sidebar",
  class: "flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow"
}, v2 = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "Sidebar",
  props: {
    side: { default: "left" },
    variant: { default: "sidebar" },
    collapsible: { default: "offcanvas" },
    class: {}
  },
  setup(e) {
    const t = e, { isMobile: n, state: a, openMobile: o, setOpenMobile: s } = Ko();
    return (l, i) => e.collapsible === "none" ? (g(), V("div", T({
      key: 0,
      class: r(M)("flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground", t.class)
    }, l.$attrs), [
      _(l.$slots, "default")
    ], 16)) : r(n) ? (g(), w(z3, T({
      key: 1,
      open: r(o)
    }, l.$attrs, { "onUpdate:open": r(s) }), {
      default: y(() => [
        R(K3, {
          "data-sidebar": "sidebar",
          "data-mobile": "true",
          side: e.side,
          class: "w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
          style: at({
            "--sidebar-width": r(G3)
          })
        }, {
          default: y(() => [
            ie("div", Q3, [
              _(l.$slots, "default")
            ])
          ]),
          _: 3
        }, 8, ["side", "style"])
      ]),
      _: 3
    }, 16, ["open", "onUpdate:open"])) : (g(), V("div", {
      key: 2,
      class: "group peer hidden md:block",
      "data-state": r(a),
      "data-collapsible": r(a) === "collapsed" ? e.collapsible : "",
      "data-variant": e.variant,
      "data-side": e.side
    }, [
      ie("div", {
        class: Y(
          r(M)(
            "relative h-svh w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            e.variant === "floating" || e.variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
          )
        )
      }, null, 2),
      ie("div", T({
        class: r(M)(
          "fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] duration-200 ease-linear md:flex",
          e.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          e.variant === "floating" || e.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
          t.class
        )
      }, l.$attrs), [
        ie("div", eB, [
          _(l.$slots, "default")
        ])
      ], 16)
    ], 8, J3));
  }
}), m2 = /* @__PURE__ */ b({
  __name: "SidebarContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("div", {
      "data-sidebar": "content",
      class: Y(
        r(M)(
          "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
          t.class
        )
      )
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), g2 = /* @__PURE__ */ b({
  __name: "SidebarFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("div", {
      "data-sidebar": "footer",
      class: Y(r(M)("flex flex-col gap-2 p-2", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), h2 = /* @__PURE__ */ b({
  __name: "SidebarGroup",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("div", {
      "data-sidebar": "group",
      class: Y(r(M)("relative flex w-full min-w-0 flex-col p-2", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), y2 = /* @__PURE__ */ b({
  __name: "SidebarGroupAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(r(J), {
      "data-sidebar": "group-action",
      as: e.as,
      "as-child": e.asChild,
      class: Y(
        r(M)(
          "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          // Increases the hit area of the button on mobile.
          "after:absolute after:-inset-2 after:md:hidden",
          "group-data-[collapsible=icon]:hidden",
          t.class
        )
      )
    }, {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), b2 = /* @__PURE__ */ b({
  __name: "SidebarGroupContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("div", {
      "data-sidebar": "group-content",
      class: Y(r(M)("w-full text-sm", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), _2 = /* @__PURE__ */ b({
  __name: "SidebarGroupLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(r(J), {
      "data-sidebar": "group-label",
      as: e.as,
      "as-child": e.asChild,
      class: Y(
        r(M)(
          "flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
          t.class
        )
      )
    }, {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), w2 = /* @__PURE__ */ b({
  __name: "SidebarHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("div", {
      "data-sidebar": "header",
      class: Y(r(M)("flex flex-col gap-2 p-2", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), x2 = /* @__PURE__ */ b({
  __name: "SidebarInput",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(i3, {
      "data-sidebar": "input",
      class: Y(
        r(M)(
          "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
          t.class
        )
      )
    }, {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), C2 = /* @__PURE__ */ b({
  __name: "SidebarInset",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("main", {
      class: Y(
        r(M)(
          "relative flex min-h-svh flex-1 flex-col bg-background overflow-x-hidden",
          "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
          t.class
        )
      )
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), B2 = /* @__PURE__ */ b({
  __name: "SidebarMenu",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("ul", {
      "data-sidebar": "menu",
      class: Y(r(M)("flex w-full min-w-0 flex-col gap-1", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), S2 = /* @__PURE__ */ b({
  __name: "SidebarMenuAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" },
    showOnHover: { type: Boolean },
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(r(J), {
      "data-sidebar": "menu-action",
      class: Y(
        r(M)(
          "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0",
          // Increases the hit area of the button on mobile.
          "after:absolute after:-inset-2 after:md:hidden",
          "peer-data-[size=sm]/menu-button:top-1",
          "peer-data-[size=default]/menu-button:top-1.5",
          "peer-data-[size=lg]/menu-button:top-2.5",
          "group-data-[collapsible=icon]:hidden",
          e.showOnHover && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
          t.class
        )
      ),
      as: e.as,
      "as-child": e.asChild
    }, {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "as", "as-child"]));
  }
}), $2 = /* @__PURE__ */ b({
  __name: "SidebarMenuBadge",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("div", {
      "data-sidebar": "menu-badge",
      class: Y(
        r(M)(
          "pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground",
          "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
          "peer-data-[size=sm]/menu-button:top-1",
          "peer-data-[size=default]/menu-button:top-1.5",
          "peer-data-[size=lg]/menu-button:top-2.5",
          "group-data-[collapsible=icon]:hidden",
          t.class
        )
      )
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), Jl = /* @__PURE__ */ b({
  __name: "SidebarMenuButtonChild",
  props: {
    variant: { default: "default" },
    size: { default: "default" },
    isActive: { type: Boolean },
    class: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(r(J), T({
      "data-sidebar": "menu-button",
      "data-size": e.size,
      "data-active": e.isActive,
      class: r(M)(r(aB)({ variant: e.variant, size: e.size }), t.class),
      as: e.as,
      "as-child": e.asChild
    }, n.$attrs), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), O2 = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "SidebarMenuButton",
  props: {
    variant: { default: "default" },
    size: { default: "default" },
    isActive: { type: Boolean },
    class: {},
    asChild: { type: Boolean },
    as: { default: "button" },
    tooltip: {}
  },
  setup(e) {
    const t = e, { isMobile: n, state: a } = Ko(), o = E(() => {
      const { tooltip: s, ...l } = t;
      return l;
    });
    return (s, l) => e.tooltip ? (g(), w(Qu, { key: 1 }, {
      default: y(() => [
        R(ed, { "as-child": "" }, {
          default: y(() => [
            R(Jl, H(U({ ...o.value, ...s.$attrs })), {
              default: y(() => [
                _(s.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        R(Ju, {
          side: "right",
          align: "center",
          hidden: r(a) !== "collapsed" || r(n)
        }, {
          default: y(() => [
            typeof e.tooltip == "string" ? (g(), V(Pe, { key: 0 }, [
              Be(Me(e.tooltip), 1)
            ], 64)) : (g(), w(dt(e.tooltip), { key: 1 }))
          ]),
          _: 1
        }, 8, ["hidden"])
      ]),
      _: 3
    })) : (g(), w(Jl, H(T({ key: 0 }, { ...o.value, ...s.$attrs })), {
      default: y(() => [
        _(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), E2 = /* @__PURE__ */ b({
  __name: "SidebarMenuItem",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("li", {
      "data-sidebar": "menu-item",
      class: Y(r(M)("group/menu-item relative", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), ei = /* @__PURE__ */ b({
  __name: "Skeleton",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("div", {
      class: Y(r(M)("animate-pulse rounded-md bg-primary/10", t.class))
    }, null, 2));
  }
}), P2 = /* @__PURE__ */ b({
  __name: "SidebarMenuSkeleton",
  props: {
    showIcon: { type: Boolean },
    class: {}
  },
  setup(e) {
    const t = e, n = E(() => `${Math.floor(Math.random() * 40) + 50}%`);
    return (a, o) => (g(), V("div", {
      "data-sidebar": "menu-skeleton",
      class: Y(r(M)("flex h-8 items-center gap-2 rounded-md px-2", t.class))
    }, [
      e.showIcon ? (g(), w(ei, {
        key: 0,
        class: "size-4 rounded-md",
        "data-sidebar": "menu-skeleton-icon"
      })) : fe("", !0),
      R(ei, {
        class: "h-4 max-w-[--skeleton-width] flex-1",
        "data-sidebar": "menu-skeleton-text",
        style: at({ "--skeleton-width": n.value })
      }, null, 8, ["style"])
    ], 2));
  }
}), k2 = /* @__PURE__ */ b({
  __name: "SidebarMenuSub",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("ul", {
      "data-sidebar": "menu-badge",
      class: Y(
        r(M)(
          "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
          "group-data-[collapsible=icon]:hidden",
          t.class
        )
      )
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), T2 = /* @__PURE__ */ b({
  __name: "SidebarMenuSubButton",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" },
    size: { default: "md" },
    isActive: { type: Boolean },
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(r(J), {
      "data-sidebar": "menu-sub-button",
      as: e.as,
      "as-child": e.asChild,
      "data-size": e.size,
      "data-active": e.isActive,
      class: Y(
        r(M)(
          "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
          "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
          e.size === "sm" && "text-xs",
          e.size === "md" && "text-sm",
          "group-data-[collapsible=icon]:hidden",
          t.class
        )
      )
    }, {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-size", "data-active", "class"]));
  }
}), tB = {};
function nB(e, t) {
  return g(), V("li", null, [
    _(e.$slots, "default")
  ]);
}
const D2 = /* @__PURE__ */ $n(tB, [["render", nB]]), A2 = /* @__PURE__ */ b({
  __name: "SidebarProvider",
  props: {
    defaultOpen: { type: Boolean, default: !0 },
    open: { type: Boolean, default: void 0 },
    class: {}
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = Sr("(max-width: 768px)"), s = $(!1), l = Bs(n, "open", a, {
      defaultValue: n.defaultOpen ?? !1,
      passive: n.open === void 0
    });
    function i(c) {
      l.value = c, document.cookie = `${H3}=${l.value}; path=/; max-age=${W3}`;
    }
    function u(c) {
      s.value = c;
    }
    function d() {
      return o.value ? u(!s.value) : i(!l.value);
    }
    ua("keydown", (c) => {
      c.key === X3 && (c.metaKey || c.ctrlKey) && (c.preventDefault(), d());
    });
    const p = E(() => l.value ? "expanded" : "collapsed");
    return Z3({
      state: p,
      open: l,
      setOpen: i,
      isMobile: o,
      openMobile: s,
      setOpenMobile: u,
      toggleSidebar: d
    }), (c, f) => (g(), w(r(Pu), { "delay-duration": 0 }, {
      default: y(() => [
        ie("div", {
          style: at({
            "--sidebar-width": r(U3),
            "--sidebar-width-icon": r(Y3)
          }),
          class: Y(
            r(M)(
              "group/sidebar-wrapper flex min-h-svh w-full text-sidebar-foreground has-[[data-variant=inset]]:bg-sidebar",
              n.class
            )
          )
        }, [
          _(c.$slots, "default")
        ], 6)
      ]),
      _: 3
    }));
  }
}), I2 = /* @__PURE__ */ b({
  __name: "SidebarRail",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { toggleSidebar: n } = Ko();
    return (a, o) => (g(), V("button", {
      "data-sidebar": "rail",
      "aria-label": "Toggle Sidebar",
      tabindex: -1,
      title: "Toggle Sidebar",
      class: Y(
        r(M)(
          "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
          "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
          "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
          "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
          "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
          "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
          t.class
        )
      ),
      onClick: o[0] || (o[0] = //@ts-ignore
      (...s) => r(n) && r(n)(...s))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), M2 = /* @__PURE__ */ b({
  __name: "SidebarSeparator",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(N3, {
      "data-sidebar": "separator",
      class: Y(r(M)("mx-2 w-auto bg-sidebar-border", t.class))
    }, {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), R2 = /* @__PURE__ */ b({
  __name: "SidebarTrigger",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { toggleSidebar: n, isMobile: a } = Ko();
    return (o, s) => (g(), w(Ss, {
      "data-sidebar": "trigger",
      variant: "ghost",
      size: "icon",
      class: Y(r(M)("h-9 w-9 touch-manipulation md:h-7 md:w-7", t.class)),
      onClick: r(n)
    }, {
      default: y(() => [
        r(a) ? (g(), w(r(wb), {
          key: 0,
          class: "h-5 w-5"
        })) : (g(), w(r(Cb), { key: 1 })),
        s[0] || (s[0] = ie("span", { class: "sr-only" }, "Toggle Sidebar", -1))
      ]),
      _: 1
    }, 8, ["class", "onClick"]));
  }
}), aB = Ut(
  "peer/menu-button flex w-full touch-manipulation items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
      },
      size: {
        default: "h-8 text-sm md:h-8",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), F2 = /* @__PURE__ */ b({
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
    const n = e, a = t, o = E(() => {
      const { class: l, ...i } = n;
      return i;
    }), s = me(o, a);
    return (l, i) => (g(), w(r(Sg), T({
      class: r(M)("relative flex w-full touch-none select-none items-center", n.class)
    }, r(s)), {
      default: y(() => [
        R(r(Eg), { class: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20" }, {
          default: y(() => [
            R(r(Pg), { class: "absolute h-full bg-primary" })
          ]),
          _: 1
        }),
        (g(!0), V(Pe, null, nn(e.modelValue, (u, d) => (g(), w(r(Og), {
          key: d,
          class: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        }))), 128))
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), q2 = /* @__PURE__ */ b({
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
    const n = e, a = t, o = E(() => {
      const { class: l, ...i } = n;
      return i;
    }), s = me(o, a);
    return (l, i) => (g(), w(r(Ig), T(r(s), {
      class: r(M)(
        "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        n.class
      )
    }), {
      default: y(() => [
        R(r(Mg), {
          class: Y(
            r(M)(
              "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
            )
          )
        }, null, 8, ["class"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), oB = { class: "relative w-full overflow-auto" }, L2 = /* @__PURE__ */ b({
  __name: "Table",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("div", oB, [
      ie("table", {
        class: Y(r(M)("w-full caption-bottom text-sm", t.class))
      }, [
        _(n.$slots, "default")
      ], 2)
    ]));
  }
}), V2 = /* @__PURE__ */ b({
  __name: "TableBody",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("tbody", {
      class: Y(r(M)("[&_tr:last-child]:border-0", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), rB = /* @__PURE__ */ b({
  __name: "TableCell",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("td", {
      class: Y(
        r(M)(
          "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5",
          t.class
        )
      )
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), N2 = /* @__PURE__ */ b({
  __name: "TableHead",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("th", {
      class: Y(
        r(M)(
          "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5",
          t.class
        )
      )
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), z2 = /* @__PURE__ */ b({
  __name: "TableHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("thead", {
      class: Y(r(M)("[&_tr]:border-b", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), K2 = /* @__PURE__ */ b({
  __name: "TableFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("tfoot", {
      class: Y(r(M)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), sB = /* @__PURE__ */ b({
  __name: "TableRow",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("tr", {
      class: Y(
        r(M)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", t.class)
      )
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), j2 = /* @__PURE__ */ b({
  __name: "TableCaption",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("caption", {
      class: Y(r(M)("mt-4 text-sm text-muted-foreground", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), lB = { class: "flex items-center justify-center py-10" }, H2 = /* @__PURE__ */ b({
  __name: "TableEmpty",
  props: {
    class: {},
    colspan: { default: 1 }
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(sB, null, {
      default: y(() => [
        R(rB, T({
          class: r(M)("p-4 whitespace-nowrap align-middle text-sm text-foreground", t.class)
        }, n.value), {
          default: y(() => [
            ie("div", lB, [
              _(a.$slots, "default")
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), W2 = /* @__PURE__ */ b({
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
    const o = me(e, t);
    return (s, l) => (g(), w(r(Fg), H(U(r(o))), {
      default: y(() => [
        _(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), U2 = /* @__PURE__ */ b({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(r(Lg), T({
      class: r(M)(
        "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        t.class
      )
    }, n.value), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), G2 = /* @__PURE__ */ b({
  __name: "TabsList",
  props: {
    loop: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(r(qg), T(n.value, {
      class: r(M)(
        "inline-flex items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
        t.class
      )
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), iB = { class: "truncate" }, Y2 = /* @__PURE__ */ b({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: o, ...s } = t;
      return s;
    }), a = et(n);
    return (o, s) => (g(), w(r(Vg), T(r(a), {
      class: r(M)(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
        t.class
      )
    }), {
      default: y(() => [
        ie("span", iB, [
          _(o.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), uB = ["placeholder"], X2 = /* @__PURE__ */ b({
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
    const n = e, o = Bs(n, "modelValue", t, {
      passive: !0,
      defaultValue: n.defaultValue
    }), s = E(() => o.value ? o.value.toString().length : 0);
    return (l, i) => (g(), V(Pe, null, [
      Hn(ie("textarea", {
        "onUpdate:modelValue": i[0] || (i[0] = (u) => Qe(o) ? o.value = u : null),
        placeholder: e.placeholder,
        class: Y(
          r(M)(
            "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            n.class
          )
        )
      }, null, 10, uB), [
        [si, r(o)]
      ]),
      e.charLimit ? (g(), V("p", {
        key: 0,
        class: Y(["mt-1 flex w-full justify-end text-sm text-gray-500", { "text-red-500": s.value > e.charLimit }])
      }, Me(s.value) + " / " + Me(e.charLimit), 3)) : fe("", !0)
    ], 64));
  }
});
export {
  AB as Accord,
  pb as Accordion,
  fb as AccordionContent,
  vb as AccordionItem,
  mb as AccordionTrigger,
  FB as Alert,
  qB as AlertDescription,
  uy as AlertDialog,
  my as AlertDialogAction,
  gy as AlertDialogCancel,
  dy as AlertDialogContent,
  fy as AlertDialogDescription,
  vy as AlertDialogFooter,
  cy as AlertDialogHeader,
  py as AlertDialogTitle,
  wB as AlertDialogTrigger,
  LB as AlertTitle,
  VB as Avatar,
  zB as AvatarFallback,
  NB as AvatarImage,
  KB as Badge,
  jB as Breadcrumb,
  HB as BreadcrumbEllipsis,
  WB as BreadcrumbItem,
  JB as BreadcrumbLink,
  eS as BreadcrumbList,
  tS as BreadcrumbPage,
  nS as BreadcrumbSeparator,
  Ss as Button,
  aS as Card,
  oS as CardContent,
  rS as CardDescription,
  sS as CardFooter,
  lS as CardHeader,
  iS as CardTitle,
  uS as Carousel,
  dS as CarouselContent,
  cS as CarouselItem,
  fS as CarouselNext,
  pS as CarouselPrevious,
  vS as Checkbox,
  mS as Collapsible,
  gS as CollapsibleContent,
  hS as CollapsibleTrigger,
  yS as Combobox,
  bS as ComboboxAnchor,
  XB as ComboboxCancel,
  _S as ComboboxEmpty,
  wS as ComboboxGroup,
  xS as ComboboxInput,
  CS as ComboboxItem,
  ZB as ComboboxItemIndicator,
  BS as ComboboxList,
  SS as ComboboxSeparator,
  QB as ComboboxTrigger,
  DC as Command,
  AS as CommandDialog,
  IS as CommandEmpty,
  MS as CommandGroup,
  RS as CommandInput,
  FS as CommandItem,
  qS as CommandList,
  LS as CommandSeparator,
  VS as CommandShortcut,
  xB as ConfirmDialog,
  NS as ContextMenu,
  zS as ContextMenuCheckboxItem,
  KS as ContextMenuContent,
  jS as ContextMenuGroup,
  HS as ContextMenuItem,
  WS as ContextMenuLabel,
  US as ContextMenuRadioGroup,
  GS as ContextMenuRadioItem,
  YS as ContextMenuSeparator,
  XS as ContextMenuShortcut,
  ZS as ContextMenuSub,
  QS as ContextMenuSubContent,
  JS as ContextMenuSubTrigger,
  e$ as ContextMenuTrigger,
  AC as Dialog,
  $S as DialogClose,
  IC as DialogContent,
  kS as DialogDescription,
  DS as DialogFooter,
  ES as DialogHeader,
  TS as DialogScrollContent,
  PS as DialogTitle,
  OS as DialogTrigger,
  t$ as Drawer,
  n$ as DrawerClose,
  a$ as DrawerContent,
  o$ as DrawerDescription,
  r$ as DrawerFooter,
  s$ as DrawerHeader,
  a3 as DrawerOverlay,
  l$ as DrawerTitle,
  i$ as DrawerTrigger,
  u$ as DropdownMenu,
  m$ as DropdownMenuCheckboxItem,
  c$ as DropdownMenuContent,
  p$ as DropdownMenuGroup,
  v$ as DropdownMenuItem,
  b$ as DropdownMenuLabel,
  dm as DropdownMenuPortal,
  f$ as DropdownMenuRadioGroup,
  g$ as DropdownMenuRadioItem,
  y$ as DropdownMenuSeparator,
  h$ as DropdownMenuShortcut,
  _$ as DropdownMenuSub,
  x$ as DropdownMenuSubContent,
  w$ as DropdownMenuSubTrigger,
  d$ as DropdownMenuTrigger,
  C$ as Empty,
  B$ as EmptyContent,
  S$ as EmptyDescription,
  $$ as EmptyHeader,
  O$ as EmptyMedia,
  E$ as EmptyTitle,
  TB as Flasher,
  BB as Header,
  DB as Heading,
  i3 as Input,
  P$ as InputOTP,
  k$ as InputOTPGroup,
  T$ as InputOTPSeparator,
  D$ as InputOTPSlot,
  A$ as Label,
  SB as Main,
  I$ as NavigationMenu,
  M$ as NavigationMenuContent,
  R$ as NavigationMenuIndicator,
  F$ as NavigationMenuItem,
  q$ as NavigationMenuLink,
  L$ as NavigationMenuList,
  V$ as NavigationMenuTrigger,
  R3 as NavigationMenuViewport,
  N$ as Pagination,
  z$ as PaginationContent,
  K$ as PaginationEllipsis,
  j$ as PaginationFirst,
  H$ as PaginationItem,
  W$ as PaginationLast,
  U$ as PaginationNext,
  G$ as PaginationPrevious,
  Y$ as Popover,
  gB as PopoverAnchor,
  Z$ as PopoverContent,
  X$ as PopoverTrigger,
  Q$ as Progress,
  IB as ResponsiveTable,
  MB as ResponsiveTableCard,
  J$ as Select,
  n2 as SelectContent,
  a2 as SelectGroup,
  o2 as SelectItem,
  r2 as SelectItemText,
  s2 as SelectLabel,
  V3 as SelectScrollDownButton,
  L3 as SelectScrollUpButton,
  l2 as SelectSeparator,
  t2 as SelectTrigger,
  e2 as SelectValue,
  N3 as Separator,
  z3 as Sheet,
  u2 as SheetClose,
  K3 as SheetContent,
  p2 as SheetDescription,
  f2 as SheetFooter,
  d2 as SheetHeader,
  c2 as SheetTitle,
  i2 as SheetTrigger,
  v2 as Sidebar,
  m2 as SidebarContent,
  g2 as SidebarFooter,
  h2 as SidebarGroup,
  y2 as SidebarGroupAction,
  b2 as SidebarGroupContent,
  _2 as SidebarGroupLabel,
  w2 as SidebarHeader,
  x2 as SidebarInput,
  C2 as SidebarInset,
  B2 as SidebarMenu,
  S2 as SidebarMenuAction,
  $2 as SidebarMenuBadge,
  O2 as SidebarMenuButton,
  E2 as SidebarMenuItem,
  P2 as SidebarMenuSkeleton,
  k2 as SidebarMenuSub,
  T2 as SidebarMenuSubButton,
  D2 as SidebarMenuSubItem,
  A2 as SidebarProvider,
  I2 as SidebarRail,
  M2 as SidebarSeparator,
  R2 as SidebarTrigger,
  ei as Skeleton,
  F2 as Slider,
  q2 as Switch,
  L2 as Table,
  V2 as TableBody,
  j2 as TableCaption,
  rB as TableCell,
  H2 as TableEmpty,
  K2 as TableFooter,
  N2 as TableHead,
  z2 as TableHeader,
  sB as TableRow,
  W2 as Tabs,
  U2 as TabsContent,
  G2 as TabsList,
  Y2 as TabsTrigger,
  X2 as Textarea,
  RB as Tip,
  Xy as Toast,
  kB as ToastAction,
  rb as ToastClose,
  Il as ToastDescription,
  lb as ToastProvider,
  sb as ToastTitle,
  Zy as ToastViewport,
  Yy as Toaster,
  Qu as Tooltip,
  Ju as TooltipContent,
  Ob as TooltipProvider,
  ed as TooltipTrigger,
  CB as TwoColumnLayout,
  $B as TwoColumnLayoutSidebar,
  OB as TwoColumnLayoutSidebarDesktop,
  EB as TwoColumnLayoutSidebarMobile,
  PB as TwoColumnLayoutSidebarTrigger,
  Eb as alertVariants,
  Pb as avatarVariant,
  kb as badgeVariants,
  un as buttonVariants,
  M as cn,
  yB as createContext,
  l3 as emptyMediaVariants,
  F3 as navigationMenuTriggerStyle,
  pB as preset,
  j3 as sheetVariants,
  aB as sidebarMenuButtonVariants,
  jy as toast,
  ib as toastVariants,
  zo as useCarousel,
  by as useConfirmDialog,
  ub as useFlasher,
  zh as useHapticFeedback,
  _B as useMobileBottomNav,
  iy as useMobileNavigation,
  Ko as useSidebar,
  bB as useSwipeNavigation,
  Wu as useToast,
  hB as valueUpdater
};
