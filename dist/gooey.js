var Ur = (e) => {
  throw TypeError(e);
};
var ji = (e, t, n) => t.has(e) || Ur("Cannot " + n);
var Pn = (e, t, n) => (ji(e, t, "read from private field"), n ? n.call(e) : t.get(e)), qr = (e, t, n) => t.has(e) ? Ur("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n);
import * as pn from "vue";
import { computed as B, ref as E, shallowRef as Nn, watch as Y, getCurrentScope as Ra, onScopeDispose as La, shallowReadonly as ln, unref as s, defineComponent as w, createBlock as C, openBlock as h, normalizeProps as q, guardReactiveProps as G, withCtx as y, renderSlot as x, toRefs as pe, createVNode as F, mergeProps as k, onMounted as le, watchEffect as he, normalizeStyle as kt, createCommentVNode as ge, getCurrentInstance as Ke, toRef as Ns, camelize as ko, withKeys as Rt, toHandlers as zi, resolveDynamicComponent as Je, withModifiers as Te, nextTick as te, withDirectives as wn, vShow as Va, h as ze, createTextVNode as Le, watchSyncEffect as Ki, toDisplayString as We, isRef as pt, onBeforeMount as js, onUnmounted as qe, createElementBlock as j, Fragment as Ee, renderList as Lt, useSlots as Na, Teleport as Yn, onBeforeUnmount as _n, inject as Xn, provide as Zn, toHandlerKey as zs, onBeforeUpdate as Hi, onUpdated as Wi, reactive as gn, readonly as ja, Comment as za, cloneVNode as Ks, markRaw as Hs, createElementVNode as de, vModelSelect as Ui, toRaw as qi, mergeDefaults as Ws, watchPostEffect as Gi, effectScope as Ao, customRef as Yi, normalizeClass as oe, isVNode as Xi, toValue as lt, vModelText as Us } from "vue";
function qs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Zi = {
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
}, Jo = Zi, Ka = {
  whitespace: /\s+/g,
  urlHexPairs: /%[\dA-F]{2}/g,
  quotes: /"/g
};
function Qi(e) {
  return e.trim().replace(Ka.whitespace, " ");
}
function Ji(e) {
  return encodeURIComponent(e).replace(Ka.urlHexPairs, tu);
}
function eu(e) {
  return Object.keys(Jo).forEach(function(t) {
    Jo[t].test(e) && (e = e.replace(Jo[t], t));
  }), e;
}
function tu(e) {
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
function ya(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string, but received " + typeof e);
  e.charCodeAt(0) === 65279 && (e = e.slice(1));
  var t = eu(Qi(e)).replace(Ka.quotes, "'");
  return "data:image/svg+xml," + Ji(t);
}
ya.toSrcset = function(t) {
  return ya(t).replace(/ /g, "%20");
};
var nu = ya, Gs = {}, Ys = {};
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
})(Ys);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return o;
    }
  });
  const t = /* @__PURE__ */ n(Ys);
  function n(a) {
    return a && a.__esModule ? a : {
      default: a
    };
  }
  const o = t.default;
})(Gs);
let ea = Gs;
var Xs = (ea.__esModule ? ea : { default: ea }).default, Zs = {}, Qs = {};
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
})(Qs);
var ou = {
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
  const t = Qs, n = /* @__PURE__ */ o(ou);
  function o(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  const a = (0, t.cloneDeep)(n.default.theme);
})(Zs);
let ta = Zs;
var au = (ta.__esModule ? ta : { default: ta }).default, Js = {}, el = {}, Ha = { exports: {} }, re = String, tl = function() {
  return { isColorSupported: !1, reset: re, bold: re, dim: re, italic: re, underline: re, inverse: re, hidden: re, strikethrough: re, black: re, red: re, green: re, yellow: re, blue: re, magenta: re, cyan: re, white: re, gray: re, bgBlack: re, bgRed: re, bgGreen: re, bgYellow: re, bgBlue: re, bgMagenta: re, bgCyan: re, bgWhite: re, blackBright: re, redBright: re, greenBright: re, yellowBright: re, blueBright: re, magentaBright: re, cyanBright: re, whiteBright: re, bgBlackBright: re, bgRedBright: re, bgGreenBright: re, bgYellowBright: re, bgBlueBright: re, bgMagentaBright: re, bgCyanBright: re, bgWhiteBright: re };
};
Ha.exports = tl();
Ha.exports.createColors = tl;
var ru = Ha.exports;
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
  const n = /* @__PURE__ */ o(ru);
  function o(u) {
    return u && u.__esModule ? u : {
      default: u
    };
  }
  let a = /* @__PURE__ */ new Set();
  function r(u, d, p) {
    typeof process < "u" && process.env.JEST_WORKER_ID || p && a.has(p) || (p && a.add(p), console.warn(""), d.forEach((c) => console.warn(u, "-", c)));
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
})(el);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return a;
    }
  });
  const t = /* @__PURE__ */ n(el);
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
})(Js);
let na = Js;
var su = (na.__esModule ? na : { default: na }).default;
const uo = nu, lu = Xs, nl = au, At = su, [iu, { lineHeight: uu }] = nl.fontSize.base, { spacing: Ot, borderWidth: Gr, borderRadius: Yr } = nl;
function Wt(e, t) {
  return e.replace("<alpha-value>", `var(${t}, 1)`);
}
const du = lu.withOptions(function(e = { strategy: void 0 }) {
  return function({ addBase: t, addComponents: n, theme: o }) {
    function a(u, d) {
      let p = o(u);
      return !p || p.includes("var(") ? d : p.replace("<alpha-value>", "1");
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
          "border-color": Wt(
            o("colors.gray.500", At.gray[500]),
            "--tw-border-opacity"
          ),
          "border-width": Gr.DEFAULT,
          "border-radius": Yr.none,
          "padding-top": Ot[2],
          "padding-right": Ot[3],
          "padding-bottom": Ot[2],
          "padding-left": Ot[3],
          "font-size": iu,
          "line-height": uu,
          "--tw-shadow": "0 0 #0000",
          "&:focus": {
            outline: "2px solid transparent",
            "outline-offset": "2px",
            "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)",
            "--tw-ring-offset-width": "0px",
            "--tw-ring-offset-color": "#fff",
            "--tw-ring-color": Wt(
              o("colors.blue.600", At.blue[600]),
              "--tw-ring-opacity"
            ),
            "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
            "--tw-ring-shadow": "var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
            "box-shadow": "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)",
            "border-color": Wt(
              o("colors.blue.600", At.blue[600]),
              "--tw-border-opacity"
            )
          }
        }
      },
      {
        base: ["input::placeholder", "textarea::placeholder"],
        class: [".form-input::placeholder", ".form-textarea::placeholder"],
        styles: {
          color: Wt(o("colors.gray.500", At.gray[500]), "--tw-text-opacity"),
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
          "background-image": `url("${uo(
            `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="${a(
              "colors.gray.500",
              At.gray[500]
            )}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 8l4 4 4-4"/></svg>`
          )}")`,
          "background-position": `right ${Ot[2]} center`,
          "background-repeat": "no-repeat",
          "background-size": "1.5em 1.5em",
          "padding-right": Ot[10],
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
          "padding-right": Ot[3],
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
          height: Ot[4],
          width: Ot[4],
          color: Wt(o("colors.blue.600", At.blue[600]), "--tw-text-opacity"),
          "background-color": "#fff",
          "border-color": Wt(
            o("colors.gray.500", At.gray[500]),
            "--tw-border-opacity"
          ),
          "border-width": Gr.DEFAULT,
          "--tw-shadow": "0 0 #0000"
        }
      },
      {
        base: ["[type='checkbox']"],
        class: [".form-checkbox"],
        styles: {
          "border-radius": Yr.none
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
          "--tw-ring-color": Wt(
            o("colors.blue.600", At.blue[600]),
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
          "background-image": `url("${uo(
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
          "background-image": `url("${uo(
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
          "background-image": `url("${uo(
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
var cu = du;
const pu = /* @__PURE__ */ qs(cu), fu = Xs;
function Xr(e) {
  return Object.fromEntries(
    Object.entries(e).filter(([t]) => t !== "DEFAULT")
  );
}
var mu = fu(
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
      { values: Xr(n("animationDuration")) }
    ), t(
      { delay: (o) => ({ animationDelay: o }) },
      { values: n("animationDelay") }
    ), t(
      { ease: (o) => ({ animationTimingFunction: o }) },
      { values: Xr(n("animationTimingFunction")) }
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
const vu = /* @__PURE__ */ qs(mu), zy = {
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
    vu,
    pu({
      strategy: "class"
    })
  ]
}, gu = ["top", "right", "bottom", "left"], Vt = Math.min, Xe = Math.max, Oo = Math.round, co = Math.floor, ft = (e) => ({
  x: e,
  y: e
}), hu = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, yu = {
  start: "end",
  end: "start"
};
function ba(e, t, n) {
  return Xe(e, Vt(t, n));
}
function Dt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Tt(e) {
  return e.split("-")[0];
}
function xn(e) {
  return e.split("-")[1];
}
function Wa(e) {
  return e === "x" ? "y" : "x";
}
function Ua(e) {
  return e === "y" ? "height" : "width";
}
function ct(e) {
  return ["top", "bottom"].includes(Tt(e)) ? "y" : "x";
}
function qa(e) {
  return Wa(ct(e));
}
function bu(e, t, n) {
  n === void 0 && (n = !1);
  const o = xn(e), a = qa(e), r = Ua(a);
  let l = a === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (l = $o(l)), [l, $o(l)];
}
function wu(e) {
  const t = $o(e);
  return [wa(e), t, wa(t)];
}
function wa(e) {
  return e.replace(/start|end/g, (t) => yu[t]);
}
function _u(e, t, n) {
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
function xu(e, t, n, o) {
  const a = xn(e);
  let r = _u(Tt(e), n === "start", o);
  return a && (r = r.map((l) => l + "-" + a), t && (r = r.concat(r.map(wa)))), r;
}
function $o(e) {
  return e.replace(/left|right|bottom|top/g, (t) => hu[t]);
}
function Cu(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function ol(e) {
  return typeof e != "number" ? Cu(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function So(e) {
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
function Zr(e, t, n) {
  let {
    reference: o,
    floating: a
  } = e;
  const r = ct(t), l = qa(t), i = Ua(l), u = Tt(t), d = r === "y", p = o.x + o.width / 2 - a.width / 2, c = o.y + o.height / 2 - a.height / 2, f = o[i] / 2 - a[i] / 2;
  let v;
  switch (u) {
    case "top":
      v = {
        x: p,
        y: o.y - a.height
      };
      break;
    case "bottom":
      v = {
        x: p,
        y: o.y + o.height
      };
      break;
    case "right":
      v = {
        x: o.x + o.width,
        y: c
      };
      break;
    case "left":
      v = {
        x: o.x - a.width,
        y: c
      };
      break;
    default:
      v = {
        x: o.x,
        y: o.y
      };
  }
  switch (xn(t)) {
    case "start":
      v[l] -= f * (n && d ? -1 : 1);
      break;
    case "end":
      v[l] += f * (n && d ? -1 : 1);
      break;
  }
  return v;
}
const Ou = async (e, t, n) => {
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
    x: p,
    y: c
  } = Zr(d, o, u), f = o, v = {}, m = 0;
  for (let g = 0; g < i.length; g++) {
    const {
      name: b,
      fn: _
    } = i[g], {
      x: $,
      y: O,
      data: D,
      reset: S
    } = await _({
      x: p,
      y: c,
      initialPlacement: o,
      placement: f,
      strategy: a,
      middlewareData: v,
      rects: d,
      platform: l,
      elements: {
        reference: e,
        floating: t
      }
    });
    p = $ ?? p, c = O ?? c, v = {
      ...v,
      [b]: {
        ...v[b],
        ...D
      }
    }, S && m <= 50 && (m++, typeof S == "object" && (S.placement && (f = S.placement), S.rects && (d = S.rects === !0 ? await l.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : S.rects), {
      x: p,
      y: c
    } = Zr(d, f, u)), g = -1);
  }
  return {
    x: p,
    y: c,
    placement: f,
    strategy: a,
    middlewareData: v
  };
};
async function jn(e, t) {
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
    rootBoundary: p = "viewport",
    elementContext: c = "floating",
    altBoundary: f = !1,
    padding: v = 0
  } = Dt(t, e), m = ol(v), b = i[f ? c === "floating" ? "reference" : "floating" : c], _ = So(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(b))) == null || n ? b : b.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(i.floating)),
    boundary: d,
    rootBoundary: p,
    strategy: u
  })), $ = c === "floating" ? {
    x: o,
    y: a,
    width: l.floating.width,
    height: l.floating.height
  } : l.reference, O = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(i.floating)), D = await (r.isElement == null ? void 0 : r.isElement(O)) ? await (r.getScale == null ? void 0 : r.getScale(O)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, S = So(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: $,
    offsetParent: O,
    strategy: u
  }) : $);
  return {
    top: (_.top - S.top + m.top) / D.y,
    bottom: (S.bottom - _.bottom + m.bottom) / D.y,
    left: (_.left - S.left + m.left) / D.x,
    right: (S.right - _.right + m.right) / D.x
  };
}
const $u = (e) => ({
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
      padding: p = 0
    } = Dt(e, t) || {};
    if (d == null)
      return {};
    const c = ol(p), f = {
      x: n,
      y: o
    }, v = qa(a), m = Ua(v), g = await l.getDimensions(d), b = v === "y", _ = b ? "top" : "left", $ = b ? "bottom" : "right", O = b ? "clientHeight" : "clientWidth", D = r.reference[m] + r.reference[v] - f[v] - r.floating[m], S = f[v] - r.reference[v], P = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(d));
    let T = P ? P[O] : 0;
    (!T || !await (l.isElement == null ? void 0 : l.isElement(P))) && (T = i.floating[O] || r.floating[m]);
    const I = D / 2 - S / 2, R = T / 2 - g[m] / 2 - 1, A = Vt(c[_], R), L = Vt(c[$], R), M = A, X = T - g[m] - L, H = T / 2 - g[m] / 2 + I, Q = ba(M, H, X), W = !u.arrow && xn(a) != null && H !== Q && r.reference[m] / 2 - (H < M ? A : L) - g[m] / 2 < 0, fe = W ? H < M ? H - M : H - X : 0;
    return {
      [v]: f[v] + fe,
      data: {
        [v]: Q,
        centerOffset: H - Q - fe,
        ...W && {
          alignmentOffset: fe
        }
      },
      reset: W
    };
  }
}), Su = function(e) {
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
        mainAxis: p = !0,
        crossAxis: c = !0,
        fallbackPlacements: f,
        fallbackStrategy: v = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: g = !0,
        ...b
      } = Dt(e, t);
      if ((n = r.arrow) != null && n.alignmentOffset)
        return {};
      const _ = Tt(a), $ = ct(i), O = Tt(i) === i, D = await (u.isRTL == null ? void 0 : u.isRTL(d.floating)), S = f || (O || !g ? [$o(i)] : wu(i)), P = m !== "none";
      !f && P && S.push(...xu(i, g, m, D));
      const T = [i, ...S], I = await jn(t, b), R = [];
      let A = ((o = r.flip) == null ? void 0 : o.overflows) || [];
      if (p && R.push(I[_]), c) {
        const H = bu(a, l, D);
        R.push(I[H[0]], I[H[1]]);
      }
      if (A = [...A, {
        placement: a,
        overflows: R
      }], !R.every((H) => H <= 0)) {
        var L, M;
        const H = (((L = r.flip) == null ? void 0 : L.index) || 0) + 1, Q = T[H];
        if (Q && (!(c === "alignment" ? $ !== ct(Q) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        A.every((ee) => ee.overflows[0] > 0 && ct(ee.placement) === $)))
          return {
            data: {
              index: H,
              overflows: A
            },
            reset: {
              placement: Q
            }
          };
        let W = (M = A.filter((fe) => fe.overflows[0] <= 0).sort((fe, ee) => fe.overflows[1] - ee.overflows[1])[0]) == null ? void 0 : M.placement;
        if (!W)
          switch (v) {
            case "bestFit": {
              var X;
              const fe = (X = A.filter((ee) => {
                if (P) {
                  const z = ct(ee.placement);
                  return z === $ || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  z === "y";
                }
                return !0;
              }).map((ee) => [ee.placement, ee.overflows.filter((z) => z > 0).reduce((z, ae) => z + ae, 0)]).sort((ee, z) => ee[1] - z[1])[0]) == null ? void 0 : X[0];
              fe && (W = fe);
              break;
            }
            case "initialPlacement":
              W = i;
              break;
          }
        if (a !== W)
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
function Qr(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Jr(e) {
  return gu.some((t) => e[t] >= 0);
}
const Bu = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: o = "referenceHidden",
        ...a
      } = Dt(e, t);
      switch (o) {
        case "referenceHidden": {
          const r = await jn(t, {
            ...a,
            elementContext: "reference"
          }), l = Qr(r, n.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: Jr(l)
            }
          };
        }
        case "escaped": {
          const r = await jn(t, {
            ...a,
            altBoundary: !0
          }), l = Qr(r, n.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: Jr(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Eu(e, t) {
  const {
    placement: n,
    platform: o,
    elements: a
  } = e, r = await (o.isRTL == null ? void 0 : o.isRTL(a.floating)), l = Tt(n), i = xn(n), u = ct(n) === "y", d = ["left", "top"].includes(l) ? -1 : 1, p = r && u ? -1 : 1, c = Dt(t, e);
  let {
    mainAxis: f,
    crossAxis: v,
    alignmentAxis: m
  } = typeof c == "number" ? {
    mainAxis: c,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: c.mainAxis || 0,
    crossAxis: c.crossAxis || 0,
    alignmentAxis: c.alignmentAxis
  };
  return i && typeof m == "number" && (v = i === "end" ? m * -1 : m), u ? {
    x: v * p,
    y: f * d
  } : {
    x: f * d,
    y: v * p
  };
}
const Du = function(e) {
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
      } = t, u = await Eu(t, e);
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
}, Tu = function(e) {
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
      } = Dt(e, t), d = {
        x: n,
        y: o
      }, p = await jn(t, u), c = ct(Tt(a)), f = Wa(c);
      let v = d[f], m = d[c];
      if (r) {
        const b = f === "y" ? "top" : "left", _ = f === "y" ? "bottom" : "right", $ = v + p[b], O = v - p[_];
        v = ba($, v, O);
      }
      if (l) {
        const b = c === "y" ? "top" : "left", _ = c === "y" ? "bottom" : "right", $ = m + p[b], O = m - p[_];
        m = ba($, m, O);
      }
      const g = i.fn({
        ...t,
        [f]: v,
        [c]: m
      });
      return {
        ...g,
        data: {
          x: g.x - n,
          y: g.y - o,
          enabled: {
            [f]: r,
            [c]: l
          }
        }
      };
    }
  };
}, ku = function(e) {
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
      } = Dt(e, t), p = {
        x: n,
        y: o
      }, c = ct(a), f = Wa(c);
      let v = p[f], m = p[c];
      const g = Dt(i, t), b = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (u) {
        const O = f === "y" ? "height" : "width", D = r.reference[f] - r.floating[O] + b.mainAxis, S = r.reference[f] + r.reference[O] - b.mainAxis;
        v < D ? v = D : v > S && (v = S);
      }
      if (d) {
        var _, $;
        const O = f === "y" ? "width" : "height", D = ["top", "left"].includes(Tt(a)), S = r.reference[c] - r.floating[O] + (D && ((_ = l.offset) == null ? void 0 : _[c]) || 0) + (D ? 0 : b.crossAxis), P = r.reference[c] + r.reference[O] + (D ? 0 : (($ = l.offset) == null ? void 0 : $[c]) || 0) - (D ? b.crossAxis : 0);
        m < S ? m = S : m > P && (m = P);
      }
      return {
        [f]: v,
        [c]: m
      };
    }
  };
}, Au = function(e) {
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
      } = Dt(e, t), p = await jn(t, d), c = Tt(a), f = xn(a), v = ct(a) === "y", {
        width: m,
        height: g
      } = r.floating;
      let b, _;
      c === "top" || c === "bottom" ? (b = c, _ = f === (await (l.isRTL == null ? void 0 : l.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (_ = c, b = f === "end" ? "top" : "bottom");
      const $ = g - p.top - p.bottom, O = m - p.left - p.right, D = Vt(g - p[b], $), S = Vt(m - p[_], O), P = !t.middlewareData.shift;
      let T = D, I = S;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (I = O), (o = t.middlewareData.shift) != null && o.enabled.y && (T = $), P && !f) {
        const A = Xe(p.left, 0), L = Xe(p.right, 0), M = Xe(p.top, 0), X = Xe(p.bottom, 0);
        v ? I = m - 2 * (A !== 0 || L !== 0 ? A + L : Xe(p.left, p.right)) : T = g - 2 * (M !== 0 || X !== 0 ? M + X : Xe(p.top, p.bottom));
      }
      await u({
        ...t,
        availableWidth: I,
        availableHeight: T
      });
      const R = await l.getDimensions(i.floating);
      return m !== R.width || g !== R.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Po() {
  return typeof window < "u";
}
function Yt(e) {
  return Ga(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ze(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function gt(e) {
  var t;
  return (t = (Ga(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Ga(e) {
  return Po() ? e instanceof Node || e instanceof Ze(e).Node : !1;
}
function ut(e) {
  return Po() ? e instanceof Element || e instanceof Ze(e).Element : !1;
}
function vt(e) {
  return Po() ? e instanceof HTMLElement || e instanceof Ze(e).HTMLElement : !1;
}
function es(e) {
  return !Po() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ze(e).ShadowRoot;
}
function Qn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: a
  } = dt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(a);
}
function Pu(e) {
  return ["table", "td", "th"].includes(Yt(e));
}
function Io(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Ya(e) {
  const t = Xa(), n = ut(e) ? dt(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((o) => n[o] ? n[o] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function Iu(e) {
  let t = Nt(e);
  for (; vt(t) && !hn(t); ) {
    if (Ya(t))
      return t;
    if (Io(t))
      return null;
    t = Nt(t);
  }
  return null;
}
function Xa() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function hn(e) {
  return ["html", "body", "#document"].includes(Yt(e));
}
function dt(e) {
  return Ze(e).getComputedStyle(e);
}
function Mo(e) {
  return ut(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Nt(e) {
  if (Yt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    es(e) && e.host || // Fallback.
    gt(e)
  );
  return es(t) ? t.host : t;
}
function al(e) {
  const t = Nt(e);
  return hn(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : vt(t) && Qn(t) ? t : al(t);
}
function zn(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const a = al(e), r = a === ((o = e.ownerDocument) == null ? void 0 : o.body), l = Ze(a);
  if (r) {
    const i = _a(l);
    return t.concat(l, l.visualViewport || [], Qn(a) ? a : [], i && n ? zn(i) : []);
  }
  return t.concat(a, zn(a, [], n));
}
function _a(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function rl(e) {
  const t = dt(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const a = vt(e), r = a ? e.offsetWidth : n, l = a ? e.offsetHeight : o, i = Oo(n) !== r || Oo(o) !== l;
  return i && (n = r, o = l), {
    width: n,
    height: o,
    $: i
  };
}
function Za(e) {
  return ut(e) ? e : e.contextElement;
}
function fn(e) {
  const t = Za(e);
  if (!vt(t))
    return ft(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: a,
    $: r
  } = rl(t);
  let l = (r ? Oo(n.width) : n.width) / o, i = (r ? Oo(n.height) : n.height) / a;
  return (!l || !Number.isFinite(l)) && (l = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: l,
    y: i
  };
}
const Mu = /* @__PURE__ */ ft(0);
function sl(e) {
  const t = Ze(e);
  return !Xa() || !t.visualViewport ? Mu : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Fu(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Ze(e) ? !1 : t;
}
function qt(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const a = e.getBoundingClientRect(), r = Za(e);
  let l = ft(1);
  t && (o ? ut(o) && (l = fn(o)) : l = fn(e));
  const i = Fu(r, n, o) ? sl(r) : ft(0);
  let u = (a.left + i.x) / l.x, d = (a.top + i.y) / l.y, p = a.width / l.x, c = a.height / l.y;
  if (r) {
    const f = Ze(r), v = o && ut(o) ? Ze(o) : o;
    let m = f, g = _a(m);
    for (; g && o && v !== m; ) {
      const b = fn(g), _ = g.getBoundingClientRect(), $ = dt(g), O = _.left + (g.clientLeft + parseFloat($.paddingLeft)) * b.x, D = _.top + (g.clientTop + parseFloat($.paddingTop)) * b.y;
      u *= b.x, d *= b.y, p *= b.x, c *= b.y, u += O, d += D, m = Ze(g), g = _a(m);
    }
  }
  return So({
    width: p,
    height: c,
    x: u,
    y: d
  });
}
function Qa(e, t) {
  const n = Mo(e).scrollLeft;
  return t ? t.left + n : qt(gt(e)).left + n;
}
function ll(e, t, n) {
  n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = o.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Qa(e, o)
  )), r = o.top + t.scrollTop;
  return {
    x: a,
    y: r
  };
}
function Ru(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: o,
    strategy: a
  } = e;
  const r = a === "fixed", l = gt(o), i = t ? Io(t.floating) : !1;
  if (o === l || i && r)
    return n;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = ft(1);
  const p = ft(0), c = vt(o);
  if ((c || !c && !r) && ((Yt(o) !== "body" || Qn(l)) && (u = Mo(o)), vt(o))) {
    const v = qt(o);
    d = fn(o), p.x = v.x + o.clientLeft, p.y = v.y + o.clientTop;
  }
  const f = l && !c && !r ? ll(l, u, !0) : ft(0);
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - u.scrollLeft * d.x + p.x + f.x,
    y: n.y * d.y - u.scrollTop * d.y + p.y + f.y
  };
}
function Lu(e) {
  return Array.from(e.getClientRects());
}
function Vu(e) {
  const t = gt(e), n = Mo(e), o = e.ownerDocument.body, a = Xe(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), r = Xe(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let l = -n.scrollLeft + Qa(e);
  const i = -n.scrollTop;
  return dt(o).direction === "rtl" && (l += Xe(t.clientWidth, o.clientWidth) - a), {
    width: a,
    height: r,
    x: l,
    y: i
  };
}
function Nu(e, t) {
  const n = Ze(e), o = gt(e), a = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, i = 0, u = 0;
  if (a) {
    r = a.width, l = a.height;
    const d = Xa();
    (!d || d && t === "fixed") && (i = a.offsetLeft, u = a.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: i,
    y: u
  };
}
function ju(e, t) {
  const n = qt(e, !0, t === "fixed"), o = n.top + e.clientTop, a = n.left + e.clientLeft, r = vt(e) ? fn(e) : ft(1), l = e.clientWidth * r.x, i = e.clientHeight * r.y, u = a * r.x, d = o * r.y;
  return {
    width: l,
    height: i,
    x: u,
    y: d
  };
}
function ts(e, t, n) {
  let o;
  if (t === "viewport")
    o = Nu(e, n);
  else if (t === "document")
    o = Vu(gt(e));
  else if (ut(t))
    o = ju(t, n);
  else {
    const a = sl(e);
    o = {
      x: t.x - a.x,
      y: t.y - a.y,
      width: t.width,
      height: t.height
    };
  }
  return So(o);
}
function il(e, t) {
  const n = Nt(e);
  return n === t || !ut(n) || hn(n) ? !1 : dt(n).position === "fixed" || il(n, t);
}
function zu(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = zn(e, [], !1).filter((i) => ut(i) && Yt(i) !== "body"), a = null;
  const r = dt(e).position === "fixed";
  let l = r ? Nt(e) : e;
  for (; ut(l) && !hn(l); ) {
    const i = dt(l), u = Ya(l);
    !u && i.position === "fixed" && (a = null), (r ? !u && !a : !u && i.position === "static" && !!a && ["absolute", "fixed"].includes(a.position) || Qn(l) && !u && il(e, l)) ? o = o.filter((p) => p !== l) : a = i, l = Nt(l);
  }
  return t.set(e, o), o;
}
function Ku(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: a
  } = e;
  const l = [...n === "clippingAncestors" ? Io(t) ? [] : zu(t, this._c) : [].concat(n), o], i = l[0], u = l.reduce((d, p) => {
    const c = ts(t, p, a);
    return d.top = Xe(c.top, d.top), d.right = Vt(c.right, d.right), d.bottom = Vt(c.bottom, d.bottom), d.left = Xe(c.left, d.left), d;
  }, ts(t, i, a));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function Hu(e) {
  const {
    width: t,
    height: n
  } = rl(e);
  return {
    width: t,
    height: n
  };
}
function Wu(e, t, n) {
  const o = vt(t), a = gt(t), r = n === "fixed", l = qt(e, !0, r, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = ft(0);
  function d() {
    u.x = Qa(a);
  }
  if (o || !o && !r)
    if ((Yt(t) !== "body" || Qn(a)) && (i = Mo(t)), o) {
      const v = qt(t, !0, r, t);
      u.x = v.x + t.clientLeft, u.y = v.y + t.clientTop;
    } else a && d();
  r && !o && a && d();
  const p = a && !o && !r ? ll(a, i) : ft(0), c = l.left + i.scrollLeft - u.x - p.x, f = l.top + i.scrollTop - u.y - p.y;
  return {
    x: c,
    y: f,
    width: l.width,
    height: l.height
  };
}
function oa(e) {
  return dt(e).position === "static";
}
function ns(e, t) {
  if (!vt(e) || dt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return gt(e) === n && (n = n.ownerDocument.body), n;
}
function ul(e, t) {
  const n = Ze(e);
  if (Io(e))
    return n;
  if (!vt(e)) {
    let a = Nt(e);
    for (; a && !hn(a); ) {
      if (ut(a) && !oa(a))
        return a;
      a = Nt(a);
    }
    return n;
  }
  let o = ns(e, t);
  for (; o && Pu(o) && oa(o); )
    o = ns(o, t);
  return o && hn(o) && oa(o) && !Ya(o) ? n : o || Iu(e) || n;
}
const Uu = async function(e) {
  const t = this.getOffsetParent || ul, n = this.getDimensions, o = await n(e.floating);
  return {
    reference: Wu(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function qu(e) {
  return dt(e).direction === "rtl";
}
const Gu = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Ru,
  getDocumentElement: gt,
  getClippingRect: Ku,
  getOffsetParent: ul,
  getElementRects: Uu,
  getClientRects: Lu,
  getDimensions: Hu,
  getScale: fn,
  isElement: ut,
  isRTL: qu
};
function dl(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Yu(e, t) {
  let n = null, o;
  const a = gt(e);
  function r() {
    var i;
    clearTimeout(o), (i = n) == null || i.disconnect(), n = null;
  }
  function l(i, u) {
    i === void 0 && (i = !1), u === void 0 && (u = 1), r();
    const d = e.getBoundingClientRect(), {
      left: p,
      top: c,
      width: f,
      height: v
    } = d;
    if (i || t(), !f || !v)
      return;
    const m = co(c), g = co(a.clientWidth - (p + f)), b = co(a.clientHeight - (c + v)), _ = co(p), O = {
      rootMargin: -m + "px " + -g + "px " + -b + "px " + -_ + "px",
      threshold: Xe(0, Vt(1, u)) || 1
    };
    let D = !0;
    function S(P) {
      const T = P[0].intersectionRatio;
      if (T !== u) {
        if (!D)
          return l();
        T ? l(!1, T) : o = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      T === 1 && !dl(d, e.getBoundingClientRect()) && l(), D = !1;
    }
    try {
      n = new IntersectionObserver(S, {
        ...O,
        // Handle <iframe>s
        root: a.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(S, O);
    }
    n.observe(e);
  }
  return l(!0), r;
}
function Xu(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: a = !0,
    ancestorResize: r = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = o, d = Za(e), p = a || r ? [...d ? zn(d) : [], ...zn(t)] : [];
  p.forEach((_) => {
    a && _.addEventListener("scroll", n, {
      passive: !0
    }), r && _.addEventListener("resize", n);
  });
  const c = d && i ? Yu(d, n) : null;
  let f = -1, v = null;
  l && (v = new ResizeObserver((_) => {
    let [$] = _;
    $ && $.target === d && v && (v.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var O;
      (O = v) == null || O.observe(t);
    })), n();
  }), d && !u && v.observe(d), v.observe(t));
  let m, g = u ? qt(e) : null;
  u && b();
  function b() {
    const _ = qt(e);
    g && !dl(g, _) && n(), g = _, m = requestAnimationFrame(b);
  }
  return n(), () => {
    var _;
    p.forEach(($) => {
      a && $.removeEventListener("scroll", n), r && $.removeEventListener("resize", n);
    }), c == null || c(), (_ = v) == null || _.disconnect(), v = null, u && cancelAnimationFrame(m);
  };
}
const Zu = Du, Qu = Tu, os = Su, Ju = Au, ed = Bu, td = $u, nd = ku, od = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), a = {
    platform: Gu,
    ...n
  }, r = {
    ...a.platform,
    _c: o
  };
  return Ou(e, t, {
    ...a,
    platform: r
  });
};
function ad(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function xa(e) {
  if (ad(e)) {
    const t = e.$el;
    return Ga(t) && Yt(t) === "#comment" ? null : t;
  }
  return e;
}
function cn(e) {
  return typeof e == "function" ? e() : s(e);
}
function rd(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const n = xa(cn(e.element));
      return n == null ? {} : td({
        element: n,
        padding: e.padding
      }).fn(t);
    }
  };
}
function cl(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function as(e, t) {
  const n = cl(e);
  return Math.round(t * n) / n;
}
function sd(e, t, n) {
  n === void 0 && (n = {});
  const o = n.whileElementsMounted, a = B(() => {
    var T;
    return (T = cn(n.open)) != null ? T : !0;
  }), r = B(() => cn(n.middleware)), l = B(() => {
    var T;
    return (T = cn(n.placement)) != null ? T : "bottom";
  }), i = B(() => {
    var T;
    return (T = cn(n.strategy)) != null ? T : "absolute";
  }), u = B(() => {
    var T;
    return (T = cn(n.transform)) != null ? T : !0;
  }), d = B(() => xa(e.value)), p = B(() => xa(t.value)), c = E(0), f = E(0), v = E(i.value), m = E(l.value), g = Nn({}), b = E(!1), _ = B(() => {
    const T = {
      position: v.value,
      left: "0",
      top: "0"
    };
    if (!p.value)
      return T;
    const I = as(p.value, c.value), R = as(p.value, f.value);
    return u.value ? {
      ...T,
      transform: "translate(" + I + "px, " + R + "px)",
      ...cl(p.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: v.value,
      left: I + "px",
      top: R + "px"
    };
  });
  let $;
  function O() {
    if (d.value == null || p.value == null)
      return;
    const T = a.value;
    od(d.value, p.value, {
      middleware: r.value,
      placement: l.value,
      strategy: i.value
    }).then((I) => {
      c.value = I.x, f.value = I.y, v.value = I.strategy, m.value = I.placement, g.value = I.middlewareData, b.value = T !== !1;
    });
  }
  function D() {
    typeof $ == "function" && ($(), $ = void 0);
  }
  function S() {
    if (D(), o === void 0) {
      O();
      return;
    }
    if (d.value != null && p.value != null) {
      $ = o(d.value, p.value, O);
      return;
    }
  }
  function P() {
    a.value || (b.value = !1);
  }
  return Y([r, l, i, a], O, {
    flush: "sync"
  }), Y([d, p], S, {
    flush: "sync"
  }), Y(a, P, {
    flush: "sync"
  }), Ra() && La(D), {
    x: ln(c),
    y: ln(f),
    strategy: ln(v),
    placement: ln(m),
    middlewareData: ln(g),
    isPositioned: ln(b),
    floatingStyles: _,
    update: O
  };
}
function ie(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, o = Symbol(n);
  return [(a) => {
    const r = Xn(o, a);
    if (r || r === null)
      return r;
    throw new Error(
      `Injection \`${o.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (a) => (Zn(o, a), a)];
}
function Ja(e, t, n) {
  const o = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, { once: !0 }), o.dispatchEvent(a);
}
function Bo(e, t = Number.NEGATIVE_INFINITY, n = Number.POSITIVE_INFINITY) {
  return Math.min(n, Math.max(t, e));
}
function ld(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var id = function e(t, n) {
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
const Ut = /* @__PURE__ */ ld(id);
function mn(e) {
  return e == null;
}
function ud(e, t) {
  var n;
  const o = Nn();
  return he(() => {
    o.value = e();
  }, {
    ...t,
    flush: (n = void 0) != null ? n : "sync"
  }), ja(o);
}
function Xt(e) {
  return Ra() ? (La(e), !0) : !1;
}
function dd() {
  const e = /* @__PURE__ */ new Set(), t = (n) => {
    e.delete(n);
  };
  return {
    on: (n) => {
      e.add(n);
      const o = () => t(n);
      return Xt(o), {
        off: o
      };
    },
    off: t,
    trigger: (...n) => Promise.all(Array.from(e).map((o) => o(...n)))
  };
}
function cd(e) {
  let t = !1, n;
  const o = Ao(!0);
  return (...a) => (t || (n = o.run(() => e(...a)), t = !0), n);
}
function pl(e) {
  let t = 0, n, o;
  const a = () => {
    t -= 1, o && t <= 0 && (o.stop(), n = void 0, o = void 0);
  };
  return (...r) => (t += 1, n || (o = Ao(!0), n = o.run(() => e(...r))), Xt(a), n);
}
function Et(e) {
  return typeof e == "function" ? e() : s(e);
}
const ht = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const pd = (e) => typeof e < "u", fd = (e) => e != null, md = Object.prototype.toString, vd = (e) => md.call(e) === "[object Object]", fl = () => {
}, rs = /* @__PURE__ */ gd();
function gd() {
  var e, t;
  return ht && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function hd(e) {
  return Ke();
}
function ml(e, t = 1e4) {
  return Yi((n, o) => {
    let a = Et(e), r;
    const l = () => setTimeout(() => {
      a = Et(e), o();
    }, Et(t));
    return Xt(() => {
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
function yd(e, t) {
  hd() && _n(e, t);
}
function er(e, t, n = {}) {
  const {
    immediate: o = !0
  } = n, a = E(!1);
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
    }, Et(t));
  }
  return o && (a.value = !0, ht && u()), Xt(i), {
    isPending: ja(a),
    start: u,
    stop: i
  };
}
function bd(e = 1e3, t = {}) {
  const {
    controls: n = !1,
    callback: o
  } = t, a = er(
    o ?? fl,
    e,
    t
  ), r = B(() => !a.isPending.value);
  return n ? {
    ready: r,
    ...a
  } : r;
}
function et(e) {
  var t;
  const n = Et(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Jn = ht ? window : void 0;
function yn(...e) {
  let t, n, o, a;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, o, a] = e, t = Jn) : [t, n, o, a] = e, !t)
    return fl;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const r = [], l = () => {
    r.forEach((p) => p()), r.length = 0;
  }, i = (p, c, f, v) => (p.addEventListener(c, f, v), () => p.removeEventListener(c, f, v)), u = Y(
    () => [et(t), Et(a)],
    ([p, c]) => {
      if (l(), !p)
        return;
      const f = vd(c) ? { ...c } : c;
      r.push(
        ...n.flatMap((v) => o.map((m) => i(p, v, m, f)))
      );
    },
    { immediate: !0, flush: "post" }
  ), d = () => {
    u(), l();
  };
  return Xt(d), d;
}
function wd(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function tr(...e) {
  let t, n, o = {};
  e.length === 3 ? (t = e[0], n = e[1], o = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], o = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: a = Jn,
    eventName: r = "keydown",
    passive: l = !1,
    dedupe: i = !1
  } = o, u = wd(t);
  return yn(a, r, (d) => {
    d.repeat && Et(i) || u(d) && n(d);
  }, l);
}
function nr() {
  const e = E(!1), t = Ke();
  return t && le(() => {
    e.value = !0;
  }, t), e;
}
function _d(e) {
  const t = nr();
  return B(() => (t.value, !!e()));
}
function xd(e, t, n = {}) {
  const { window: o = Jn, ...a } = n;
  let r;
  const l = _d(() => o && "MutationObserver" in o), i = () => {
    r && (r.disconnect(), r = void 0);
  }, u = B(() => {
    const f = Et(e), v = (Array.isArray(f) ? f : [f]).map(et).filter(fd);
    return new Set(v);
  }), d = Y(
    () => u.value,
    (f) => {
      i(), l.value && f.size && (r = new MutationObserver(t), f.forEach((v) => r.observe(v, a)));
    },
    { immediate: !0, flush: "post" }
  ), p = () => r == null ? void 0 : r.takeRecords(), c = () => {
    i(), d();
  };
  return Xt(c), {
    isSupported: l,
    stop: c,
    takeRecords: p
  };
}
function vl(e, t = {}) {
  const {
    immediate: n = !0,
    fpsLimit: o = void 0,
    window: a = Jn
  } = t, r = E(!1), l = o ? 1e3 / o : null;
  let i = 0, u = null;
  function d(f) {
    if (!r.value || !a)
      return;
    i || (i = f);
    const v = f - i;
    if (l && v < l) {
      u = a.requestAnimationFrame(d);
      return;
    }
    i = f, e({ delta: v, timestamp: f }), u = a.requestAnimationFrame(d);
  }
  function p() {
    !r.value && a && (r.value = !0, i = 0, u = a.requestAnimationFrame(d));
  }
  function c() {
    r.value = !1, u != null && a && (a.cancelAnimationFrame(u), u = null);
  }
  return n && p(), Xt(c), {
    isActive: ja(r),
    pause: c,
    resume: p
  };
}
function Cd(e) {
  return JSON.parse(JSON.stringify(e));
}
function _e(e, t, n, o = {}) {
  var a, r, l;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: p = !1,
    defaultValue: c,
    shouldEmit: f
  } = o, v = Ke(), m = n || (v == null ? void 0 : v.emit) || ((a = v == null ? void 0 : v.$emit) == null ? void 0 : a.bind(v)) || ((l = (r = v == null ? void 0 : v.proxy) == null ? void 0 : r.$emit) == null ? void 0 : l.bind(v == null ? void 0 : v.proxy));
  let g = d;
  t || (t = "modelValue"), g = g || `update:${t.toString()}`;
  const b = (O) => i ? typeof i == "function" ? i(O) : Cd(O) : O, _ = () => pd(e[t]) ? b(e[t]) : c, $ = (O) => {
    f ? f(O) && m(g, O) : m(g, O);
  };
  if (u) {
    const O = _(), D = E(O);
    let S = !1;
    return Y(
      () => e[t],
      (P) => {
        S || (S = !0, D.value = b(P), te(() => S = !1));
      }
    ), Y(
      D,
      (P) => {
        !S && (P !== e[t] || p) && $(P);
      },
      { deep: p }
    ), D;
  } else
    return B({
      get() {
        return _();
      },
      set(O) {
        $(O);
      }
    });
}
function Fo(e) {
  return e ? e.flatMap((t) => t.type === Ee ? Fo(t.children) : [t]) : [];
}
function Pe() {
  let e = document.activeElement;
  if (e == null)
    return null;
  for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null; )
    e = e.shadowRoot.activeElement;
  return e;
}
const Od = ["INPUT", "TEXTAREA"];
function gl(e, t, n, o = {}) {
  if (!t || o.enableIgnoredElement && Od.includes(t.nodeName))
    return null;
  const {
    arrowKeyOptions: a = "both",
    attributeName: r = "[data-radix-vue-collection-item]",
    itemsArray: l = [],
    loop: i = !0,
    dir: u = "ltr",
    preventScroll: d = !0,
    focus: p = !1
  } = o, [c, f, v, m, g, b] = [
    e.key === "ArrowRight",
    e.key === "ArrowLeft",
    e.key === "ArrowUp",
    e.key === "ArrowDown",
    e.key === "Home",
    e.key === "End"
  ], _ = v || m, $ = c || f;
  if (!g && !b && (!_ && !$ || a === "vertical" && $ || a === "horizontal" && _))
    return null;
  const O = n ? Array.from(n.querySelectorAll(r)) : l;
  if (!O.length)
    return null;
  d && e.preventDefault();
  let D = null;
  return $ || _ ? D = hl(O, t, {
    goForward: _ ? m : u === "ltr" ? c : f,
    loop: i
  }) : g ? D = O.at(0) || null : b && (D = O.at(-1) || null), p && (D == null || D.focus()), D;
}
function hl(e, t, n, o = e.length) {
  if (--o === 0)
    return null;
  const a = e.indexOf(t), r = n.goForward ? a + 1 : a - 1;
  if (!n.loop && (r < 0 || r >= e.length))
    return null;
  const l = (r + e.length) % e.length, i = e[l];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? hl(
    e,
    i,
    n,
    o
  ) : i : null;
}
function aa(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function Ca(e, t, n = ".", o) {
  if (!aa(t))
    return Ca(e, {}, n);
  const a = Object.assign({}, t);
  for (const r in e) {
    if (r === "__proto__" || r === "constructor")
      continue;
    const l = e[r];
    l != null && (Array.isArray(l) && Array.isArray(a[r]) ? a[r] = [...l, ...a[r]] : aa(l) && aa(a[r]) ? a[r] = Ca(
      l,
      a[r],
      (n ? `${n}.` : "") + r.toString()
    ) : a[r] = l);
  }
  return a;
}
function $d(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, o) => Ca(n, o, ""), {})
  );
}
const Sd = $d(), [Ro, Ky] = ie("ConfigProvider");
let Bd = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", Ed = (e = 21) => {
  let t = "", n = e;
  for (; n--; )
    t += Bd[Math.random() * 64 | 0];
  return t;
};
const Dd = pl(() => {
  const e = E(/* @__PURE__ */ new Map()), t = E(), n = B(() => {
    for (const l of e.value.values())
      if (l)
        return !0;
    return !1;
  }), o = Ro({
    scrollBody: E(!0)
  });
  let a = null;
  const r = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", rs && (a == null || a()), t.value = void 0;
  };
  return Y(n, (l, i) => {
    var u;
    if (!ht)
      return;
    if (!l) {
      i && r();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const d = window.innerWidth - document.documentElement.clientWidth, p = { padding: d, margin: 0 }, c = (u = o.scrollBody) != null && u.value ? typeof o.scrollBody.value == "object" ? Sd({
      padding: o.scrollBody.value.padding === !0 ? d : o.scrollBody.value.padding,
      margin: o.scrollBody.value.margin === !0 ? d : o.scrollBody.value.margin
    }, p) : p : { padding: 0, margin: 0 };
    d > 0 && (document.body.style.paddingRight = typeof c.padding == "number" ? `${c.padding}px` : String(c.padding), document.body.style.marginRight = typeof c.margin == "number" ? `${c.margin}px` : String(c.margin), document.body.style.setProperty("--scrollbar-width", `${d}px`), document.body.style.overflow = "hidden"), rs && (a = yn(
      document,
      "touchmove",
      (f) => Td(f),
      { passive: !1 }
    )), te(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), e;
});
function eo(e) {
  const t = Ed(6), n = Dd();
  n.value.set(t, e ?? !1);
  const o = B({
    get: () => n.value.get(t) ?? !1,
    set: (a) => n.value.set(t, a)
  });
  return yd(() => {
    n.value.delete(t);
  }), o;
}
function yl(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight)
    return !0;
  {
    const n = e.parentNode;
    return !(n instanceof Element) || n.tagName === "BODY" ? !1 : yl(n);
  }
}
function Td(e) {
  const t = e || window.event, n = t.target;
  return n instanceof Element && yl(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
const kd = "data-radix-vue-collection-item";
function Cn(e, t = kd) {
  const n = Symbol();
  return { createCollection: (o) => {
    const a = E([]);
    function r() {
      const l = et(o);
      return l ? a.value = Array.from(
        l.querySelectorAll(`[${t}]:not([data-disabled])`)
      ) : a.value = [];
    }
    return Hi(() => {
      a.value = [];
    }), le(r), Wi(r), Y(() => o == null ? void 0 : o.value, r, { immediate: !0 }), Zn(n, a), a;
  }, injectCollection: () => Xn(n, E([])) };
}
function jt(e) {
  const t = Ro({
    dir: E("ltr")
  });
  return B(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.dir) == null ? void 0 : n.value) || "ltr";
  });
}
function zt(e) {
  const t = Ke(), n = t == null ? void 0 : t.type.emits, o = {};
  return n != null && n.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), n == null || n.forEach((a) => {
    o[zs(ko(a))] = (...r) => e(a, ...r);
  }), o;
}
let ra = 0;
function or() {
  he((e) => {
    if (!ht)
      return;
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? ss()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? ss()
    ), ra++, e(() => {
      ra === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((n) => n.remove()), ra--;
    });
  });
}
function ss() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
function Lo(e) {
  return B(() => {
    var t;
    return Et(e) ? !!((t = et(e)) != null && t.closest("form")) : !0;
  });
}
function Ie(e) {
  const t = Ke(), n = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((a, r) => {
    const l = (t == null ? void 0 : t.type.props[r]).default;
    return l !== void 0 && (a[r] = l), a;
  }, {}), o = Ns(e);
  return B(() => {
    const a = {}, r = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(r).forEach((l) => {
      a[ko(l)] = r[l];
    }), Object.keys({ ...n, ...a }).reduce((l, i) => (o.value[i] !== void 0 && (l[i] = o.value[i]), l), {});
  });
}
function J(e, t) {
  const n = Ie(e), o = t ? zt(t) : {};
  return B(() => ({
    ...n.value,
    ...o
  }));
}
function V() {
  const e = Ke(), t = E(), n = B(() => {
    var l, i;
    return ["#text", "#comment"].includes((l = t.value) == null ? void 0 : l.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : et(t);
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
function Ad(e, t) {
  const n = ml(!1, 300), o = E(null), a = dd();
  function r() {
    o.value = null, n.value = !1;
  }
  function l(i, u) {
    const d = i.currentTarget, p = { x: i.clientX, y: i.clientY }, c = Pd(p, d.getBoundingClientRect()), f = Id(p, c), v = Md(u.getBoundingClientRect()), m = Rd([...f, ...v]);
    o.value = m, n.value = !0;
  }
  return he((i) => {
    if (e.value && t.value) {
      const u = (p) => l(p, t.value), d = (p) => l(p, e.value);
      e.value.addEventListener("pointerleave", u), t.value.addEventListener("pointerleave", d), i(() => {
        var p, c;
        (p = e.value) == null || p.removeEventListener("pointerleave", u), (c = t.value) == null || c.removeEventListener("pointerleave", d);
      });
    }
  }), he((i) => {
    var u;
    if (o.value) {
      const d = (p) => {
        var c, f;
        if (!o.value)
          return;
        const v = p.target, m = { x: p.clientX, y: p.clientY }, g = ((c = e.value) == null ? void 0 : c.contains(v)) || ((f = t.value) == null ? void 0 : f.contains(v)), b = !Fd(m, o.value), _ = !!v.closest("[data-grace-area-trigger]");
        g ? r() : (b || _) && (r(), a.trigger());
      };
      (u = e.value) == null || u.ownerDocument.addEventListener("pointermove", d), i(() => {
        var p;
        return (p = e.value) == null ? void 0 : p.ownerDocument.removeEventListener("pointermove", d);
      });
    }
  }), {
    isPointerInTransit: n,
    onPointerExit: a.on
  };
}
function Pd(e, t) {
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
function Id(e, t, n = 5) {
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
function Md(e) {
  const { top: t, right: n, bottom: o, left: a } = e;
  return [
    { x: a, y: t },
    { x: n, y: t },
    { x: n, y: o },
    { x: a, y: o }
  ];
}
function Fd(e, t) {
  const { x: n, y: o } = e;
  let a = !1;
  for (let r = 0, l = t.length - 1; r < t.length; l = r++) {
    const i = t[r].x, u = t[r].y, d = t[l].x, p = t[l].y;
    u > o != p > o && n < (d - i) * (o - u) / (p - u) + i && (a = !a);
  }
  return a;
}
function Rd(e) {
  const t = e.slice();
  return t.sort((n, o) => n.x < o.x ? -1 : n.x > o.x ? 1 : n.y < o.y ? -1 : n.y > o.y ? 1 : 0), Ld(t);
}
function Ld(e) {
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
var Vd = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, un = /* @__PURE__ */ new WeakMap(), po = /* @__PURE__ */ new WeakMap(), fo = {}, sa = 0, bl = function(e) {
  return e && (e.host || bl(e.parentNode));
}, Nd = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = bl(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, jd = function(e, t, n, o) {
  var a = Nd(t, Array.isArray(e) ? e : [e]);
  fo[n] || (fo[n] = /* @__PURE__ */ new WeakMap());
  var r = fo[n], l = [], i = /* @__PURE__ */ new Set(), u = new Set(a), d = function(c) {
    !c || i.has(c) || (i.add(c), d(c.parentNode));
  };
  a.forEach(d);
  var p = function(c) {
    !c || u.has(c) || Array.prototype.forEach.call(c.children, function(f) {
      if (i.has(f))
        p(f);
      else
        try {
          var v = f.getAttribute(o), m = v !== null && v !== "false", g = (un.get(f) || 0) + 1, b = (r.get(f) || 0) + 1;
          un.set(f, g), r.set(f, b), l.push(f), g === 1 && m && po.set(f, !0), b === 1 && f.setAttribute(n, "true"), m || f.setAttribute(o, "true");
        } catch (_) {
          console.error("aria-hidden: cannot operate on ", f, _);
        }
    });
  };
  return p(t), i.clear(), sa++, function() {
    l.forEach(function(c) {
      var f = un.get(c) - 1, v = r.get(c) - 1;
      un.set(c, f), r.set(c, v), f || (po.has(c) || c.removeAttribute(o), po.delete(c)), v || c.removeAttribute(n);
    }), sa--, sa || (un = /* @__PURE__ */ new WeakMap(), un = /* @__PURE__ */ new WeakMap(), po = /* @__PURE__ */ new WeakMap(), fo = {});
  };
}, zd = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), a = Vd(e);
  return a ? (o.push.apply(o, Array.from(a.querySelectorAll("[aria-live]"))), jd(o, a, n, "aria-hidden")) : function() {
    return null;
  };
};
function to(e) {
  let t;
  Y(() => et(e), (n) => {
    n ? t = zd(n) : t && t();
  }), qe(() => {
    t && t();
  });
}
let Kd = 0;
function ke(e, t = "radix") {
  const n = Ro({ useId: void 0 });
  return pn.useId ? `${t}-${pn.useId()}` : n.useId ? `${t}-${n.useId()}` : `${t}-${++Kd}`;
}
function wl(e) {
  const t = E(), n = B(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.width) ?? 0;
  }), o = B(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.height) ?? 0;
  });
  return le(() => {
    const a = et(e);
    if (a) {
      t.value = { width: a.offsetWidth, height: a.offsetHeight };
      const r = new ResizeObserver((l) => {
        if (!Array.isArray(l) || !l.length)
          return;
        const i = l[0];
        let u, d;
        if ("borderBoxSize" in i) {
          const p = i.borderBoxSize, c = Array.isArray(p) ? p[0] : p;
          u = c.inlineSize, d = c.blockSize;
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
function Hd(e, t) {
  const n = E(e);
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
const Wd = "data-item-text";
function ar(e) {
  const t = ml("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (n, o) => {
      if (!(e != null && e.value) && !o)
        return;
      t.value = t.value + n;
      const a = (e == null ? void 0 : e.value) ?? o, r = Pe(), l = a.map((c) => {
        var f;
        return {
          ref: c,
          textValue: ((f = (c.querySelector(`[${Wd}]`) ?? c).textContent) == null ? void 0 : f.trim()) ?? ""
        };
      }), i = l.find((c) => c.ref === r), u = l.map((c) => c.textValue), d = qd(u, t.value, i == null ? void 0 : i.textValue), p = l.find((c) => c.textValue === d);
      return p && p.ref.focus(), p == null ? void 0 : p.ref;
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function Ud(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
function qd(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((i) => i === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let r = Ud(e, Math.max(a, 0));
  o.length === 1 && (r = r.filter((i) => i !== n));
  const l = r.find(
    (i) => i.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
const rr = w({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      var o, a;
      if (!n.default)
        return null;
      const r = Fo(n.default()), l = r.findIndex((p) => p.type !== za);
      if (l === -1)
        return r;
      const i = r[l];
      (o = i.props) == null || delete o.ref;
      const u = i.props ? k(t, i.props) : t;
      t.class && (a = i.props) != null && a.class && delete i.props.class;
      const d = Ks(i, u);
      for (const p in u)
        p.startsWith("on") && (d.props || (d.props = {}), d.props[p] = u[p]);
      return r.length === 1 ? d : (r[l] = d, r);
    };
  }
}), K = w({
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
    return typeof o == "string" && ["area", "img", "input"].includes(o) ? () => ze(o, t) : o !== "template" ? () => ze(e.as, t, { default: n.default }) : () => ze(rr, t, { default: n.default });
  }
});
function _l() {
  const e = E(), t = B(() => {
    var n, o;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (o = e.value) == null ? void 0 : o.$el.nextElementSibling : et(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
const [xl, Gd] = ie("CollapsibleRoot"), Yd = /* @__PURE__ */ w({
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
    const o = e, a = _e(o, "open", n, {
      defaultValue: o.defaultOpen,
      passive: o.open === void 0
    }), r = _e(o, "disabled");
    return Gd({
      contentId: "",
      disabled: r,
      open: a,
      onOpenToggle: () => {
        a.value = !a.value;
      }
    }), t({ open: a }), V(), (l, i) => (h(), C(s(K), {
      as: l.as,
      "as-child": o.asChild,
      "data-state": s(a) ? "open" : "closed",
      "data-disabled": s(r) ? "" : void 0
    }, {
      default: y(() => [
        x(l.$slots, "default", { open: s(a) })
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state", "data-disabled"]));
  }
}), Xd = /* @__PURE__ */ w({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    V();
    const n = xl();
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
          x(o.$slots, "default")
        ]),
        _: 3
      }, 8, ["type", "as", "as-child", "aria-controls", "aria-expanded", "data-state", "data-disabled", "disabled", "onClick"]);
    };
  }
});
function Zd(e, t) {
  var n;
  const o = E({}), a = E("none"), r = E(e), l = e.value ? "mounted" : "unmounted";
  let i;
  const u = ((n = t.value) == null ? void 0 : n.ownerDocument.defaultView) ?? Jn, { state: d, dispatch: p } = Hd(l, {
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
  }), c = (b) => {
    var _;
    if (ht) {
      const $ = new CustomEvent(b, { bubbles: !1, cancelable: !1 });
      (_ = t.value) == null || _.dispatchEvent($);
    }
  };
  Y(
    e,
    async (b, _) => {
      var $;
      const O = _ !== b;
      if (await te(), O) {
        const D = a.value, S = mo(t.value);
        b ? (p("MOUNT"), c("enter"), S === "none" && c("after-enter")) : S === "none" || (($ = o.value) == null ? void 0 : $.display) === "none" ? (p("UNMOUNT"), c("leave"), c("after-leave")) : _ && D !== S ? (p("ANIMATION_OUT"), c("leave")) : (p("UNMOUNT"), c("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const f = (b) => {
    const _ = mo(t.value), $ = _.includes(
      b.animationName
    ), O = d.value === "mounted" ? "enter" : "leave";
    if (b.target === t.value && $ && (c(`after-${O}`), p("ANIMATION_END"), !r.value)) {
      const D = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", i = u == null ? void 0 : u.setTimeout(() => {
        var S;
        ((S = t.value) == null ? void 0 : S.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = D);
      });
    }
    b.target === t.value && _ === "none" && p("ANIMATION_END");
  }, v = (b) => {
    b.target === t.value && (a.value = mo(t.value));
  }, m = Y(
    t,
    (b, _) => {
      b ? (o.value = getComputedStyle(b), b.addEventListener("animationstart", v), b.addEventListener("animationcancel", f), b.addEventListener("animationend", f)) : (p("ANIMATION_END"), i !== void 0 && (u == null || u.clearTimeout(i)), _ == null || _.removeEventListener("animationstart", v), _ == null || _.removeEventListener("animationcancel", f), _ == null || _.removeEventListener("animationend", f));
    },
    { immediate: !0 }
  ), g = Y(d, () => {
    const b = mo(t.value);
    a.value = d.value === "mounted" ? b : "none";
  });
  return qe(() => {
    m(), g();
  }), {
    isPresent: B(
      () => ["mounted", "unmountSuspended"].includes(d.value)
    )
  };
}
function mo(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const tt = w({
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
    const { present: a, forceMount: r } = pe(e), l = E(), { isPresent: i } = Zd(a, l);
    n({ present: i });
    let u = t.default({ present: i });
    u = Fo(u || []);
    const d = Ke();
    if (u && (u == null ? void 0 : u.length) > 1) {
      const p = (o = d == null ? void 0 : d.parent) != null && o.type.name ? `<${d.parent.type.name} />` : "component";
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
    return () => r.value || a.value || i.value ? ze(t.default({ present: i })[0], {
      ref: (p) => {
        const c = et(p);
        return typeof (c == null ? void 0 : c.hasAttribute) > "u" || (c != null && c.hasAttribute("data-radix-popper-content-wrapper") ? l.value = c.firstElementChild : l.value = c), c;
      }
    }) : null;
  }
}), Qd = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = xl();
    n.contentId || (n.contentId = ke(void 0, "radix-vue-collapsible-content"));
    const o = E(), { forwardRef: a, currentElement: r } = V(), l = E(0), i = E(0), u = B(() => n.open.value), d = E(u.value), p = E();
    return Y(
      () => {
        var c;
        return [u.value, (c = o.value) == null ? void 0 : c.present];
      },
      async () => {
        await te();
        const c = r.value;
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
    ), le(() => {
      requestAnimationFrame(() => {
        d.value = !1;
      });
    }), (c, f) => (h(), C(s(tt), {
      ref_key: "presentRef",
      ref: o,
      present: c.forceMount || s(n).open.value,
      "force-mount": !0
    }, {
      default: y(() => {
        var v, m;
        return [
          F(s(K), k(c.$attrs, {
            id: s(n).contentId,
            ref: s(a),
            "as-child": t.asChild,
            as: c.as,
            "data-state": s(n).open.value ? "open" : "closed",
            "data-disabled": (v = s(n).disabled) != null && v.value ? "" : void 0,
            hidden: !((m = o.value) != null && m.present),
            style: {
              "--radix-collapsible-content-height": `${i.value}px`,
              "--radix-collapsible-content-width": `${l.value}px`
            }
          }), {
            default: y(() => {
              var g;
              return [
                (g = o.value) != null && g.present ? x(c.$slots, "default", { key: 0 }) : ge("", !0)
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
function Cl({ type: e, defaultValue: t, modelValue: n }) {
  const o = n || t;
  if (mn(e) && mn(n) && mn(t))
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
function Jd({ type: e, defaultValue: t, modelValue: n }) {
  return e || Cl({ type: e, defaultValue: t, modelValue: n });
}
function ec({ type: e, defaultValue: t }) {
  return t !== void 0 ? t : e === "single" ? void 0 : [];
}
function tc(e, t) {
  const n = E(Jd(e)), o = _e(e, "modelValue", t, {
    defaultValue: ec(e),
    passive: e.modelValue === void 0,
    deep: !0
  });
  Y(
    () => [e.type, e.modelValue, e.defaultValue],
    () => {
      const l = Cl(e);
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
  const r = B(() => n.value === "single");
  return {
    modelValue: o,
    type: n,
    changeModelValue: a,
    isSingle: r
  };
}
const [Vo, nc] = ie("AccordionRoot"), oc = /* @__PURE__ */ w({
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
    const n = e, o = t, { dir: a, disabled: r } = pe(n), l = jt(a), { modelValue: i, changeModelValue: u, isSingle: d } = tc(n, o), { forwardRef: p, currentElement: c } = V();
    return nc({
      disabled: r,
      direction: l,
      orientation: n.orientation,
      parentElement: c,
      isSingle: d,
      collapsible: n.collapsible,
      modelValue: i,
      changeModelValue: u
    }), (f, v) => (h(), C(s(K), {
      ref: s(p),
      "as-child": f.asChild,
      as: f.as
    }, {
      default: y(() => [
        x(f.$slots, "default", { modelValue: s(i) })
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), [sr, ac] = ie("AccordionItem"), rc = /* @__PURE__ */ w({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e, { expose: t }) {
    const n = e, o = Vo(), a = B(
      () => o.isSingle.value ? n.value === o.modelValue.value : Array.isArray(o.modelValue.value) && o.modelValue.value.includes(n.value)
    ), r = B(() => o.disabled.value || n.disabled), l = B(() => r.value ? "" : void 0), i = B(
      () => a.value ? "open" : "closed"
      /* Closed */
    );
    t({ open: a, dataDisabled: l });
    const { currentRef: u, currentElement: d } = V();
    ac({
      open: a,
      dataState: i,
      disabled: r,
      dataDisabled: l,
      triggerId: "",
      currentRef: u,
      currentElement: d,
      value: B(() => n.value)
    });
    function p(c) {
      var f;
      const v = c.target;
      if (Array.from(((f = o.parentElement.value) == null ? void 0 : f.querySelectorAll("[data-radix-vue-collection-item]")) ?? []).findIndex((m) => m === v) === -1)
        return null;
      gl(
        c,
        d.value,
        o.parentElement.value,
        {
          arrowKeyOptions: o.orientation,
          dir: o.direction.value,
          focus: !0
        }
      );
    }
    return (c, f) => (h(), C(s(Yd), {
      "data-orientation": s(o).orientation,
      "data-disabled": l.value,
      "data-state": i.value,
      disabled: r.value,
      open: a.value,
      as: n.as,
      "as-child": n.asChild,
      onKeydown: Rt(p, ["up", "down", "left", "right", "home", "end"])
    }, {
      default: y(() => [
        x(c.$slots, "default", { open: a.value })
      ]),
      _: 3
    }, 8, ["data-orientation", "data-disabled", "data-state", "disabled", "open", "as", "as-child"]));
  }
}), sc = /* @__PURE__ */ w({
  __name: "AccordionContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Vo(), o = sr();
    return V(), (a, r) => (h(), C(s(Qd), {
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
        x(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["hidden", "as-child", "force-mount", "aria-labelledby", "data-state", "data-disabled", "data-orientation"]));
  }
}), lc = /* @__PURE__ */ w({
  __name: "AccordionHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "h3" }
  },
  setup(e) {
    const t = e, n = Vo(), o = sr();
    return V(), (a, r) => (h(), C(s(K), {
      as: t.as,
      "as-child": t.asChild,
      "data-orientation": s(n).orientation,
      "data-state": s(o).dataState.value,
      "data-disabled": s(o).dataDisabled.value
    }, {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-orientation", "data-state", "data-disabled"]));
  }
}), ic = /* @__PURE__ */ w({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Vo(), o = sr();
    o.triggerId || (o.triggerId = ke(void 0, "radix-vue-accordion-trigger"));
    function a() {
      const r = n.isSingle.value && o.open.value && !n.collapsible;
      o.disabled.value || r || n.changeModelValue(o.value.value);
    }
    return (r, l) => (h(), C(s(Xd), {
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
        x(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "as", "as-child", "aria-disabled", "aria-expanded", "data-disabled", "data-orientation", "data-state", "disabled"]));
  }
}), [yt, uc] = ie("DialogRoot"), lr = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = _e(n, "open", t, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), a = E(), r = E(), { modal: l } = pe(n);
    return uc({
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
    }), (i, u) => x(i.$slots, "default", { open: s(o) });
  }
}), ir = /* @__PURE__ */ w({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = yt(), { forwardRef: o, currentElement: a } = V();
    return n.contentId || (n.contentId = ke(void 0, "radix-vue-dialog-content")), le(() => {
      n.triggerElement.value = a.value;
    }), (r, l) => (h(), C(s(K), k(t, {
      ref: s(o),
      type: r.as === "button" ? "button" : void 0,
      "aria-haspopup": "dialog",
      "aria-expanded": s(n).open.value || !1,
      "aria-controls": s(n).open.value ? s(n).contentId : void 0,
      "data-state": s(n).open.value ? "open" : "closed",
      onClick: s(n).onOpenToggle
    }), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "onClick"]));
  }
}), On = /* @__PURE__ */ w({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = nr();
    return (n, o) => s(t) || n.forceMount ? (h(), C(Yn, {
      key: 0,
      to: n.to,
      disabled: n.disabled
    }, [
      x(n.$slots, "default")
    ], 8, ["to", "disabled"])) : ge("", !0);
  }
}), ur = /* @__PURE__ */ w({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(On), q(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), dc = "dismissableLayer.pointerDownOutside", cc = "dismissableLayer.focusOutside";
function Ol(e, t) {
  const n = t.closest(
    "[data-dismissable-layer]"
  ), o = e.dataset.dismissableLayer === "" ? e : e.querySelector(
    "[data-dismissable-layer]"
  ), a = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(n && o === n || a.indexOf(o) < a.indexOf(n));
}
function pc(e, t) {
  var n;
  const o = ((n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), a = E(!1), r = E(() => {
  });
  return he((l) => {
    if (!ht)
      return;
    const i = async (d) => {
      const p = d.target;
      if (t != null && t.value) {
        if (Ol(t.value, p)) {
          a.value = !1;
          return;
        }
        if (d.target && !a.value) {
          let c = function() {
            Ja(
              dc,
              e,
              f
            );
          };
          const f = { originalEvent: d };
          d.pointerType === "touch" ? (o.removeEventListener("click", r.value), r.value = c, o.addEventListener("click", r.value, {
            once: !0
          })) : c();
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
function fc(e, t) {
  var n;
  const o = ((n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), a = E(!1);
  return he((r) => {
    if (!ht)
      return;
    const l = async (i) => {
      t != null && t.value && (await te(), !(!t.value || Ol(t.value, i.target)) && i.target && !a.value && Ja(
        cc,
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
const rt = gn({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), $n = /* @__PURE__ */ w({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, o = t, { forwardRef: a, currentElement: r } = V(), l = B(
      () => {
        var m;
        return ((m = r.value) == null ? void 0 : m.ownerDocument) ?? globalThis.document;
      }
    ), i = B(() => rt.layersRoot), u = B(() => r.value ? Array.from(i.value).indexOf(r.value) : -1), d = B(() => rt.layersWithOutsidePointerEventsDisabled.size > 0), p = B(() => {
      const m = Array.from(i.value), [g] = [...rt.layersWithOutsidePointerEventsDisabled].slice(-1), b = m.indexOf(g);
      return u.value >= b;
    }), c = pc(async (m) => {
      const g = [...rt.branches].some(
        (b) => b == null ? void 0 : b.contains(m.target)
      );
      !p.value || g || (o("pointerDownOutside", m), o("interactOutside", m), await te(), m.defaultPrevented || o("dismiss"));
    }, r), f = fc((m) => {
      [...rt.branches].some(
        (g) => g == null ? void 0 : g.contains(m.target)
      ) || (o("focusOutside", m), o("interactOutside", m), m.defaultPrevented || o("dismiss"));
    }, r);
    tr("Escape", (m) => {
      u.value === i.value.size - 1 && (o("escapeKeyDown", m), m.defaultPrevented || o("dismiss"));
    });
    let v;
    return he((m) => {
      r.value && (n.disableOutsidePointerEvents && (rt.layersWithOutsidePointerEventsDisabled.size === 0 && (v = l.value.body.style.pointerEvents, l.value.body.style.pointerEvents = "none"), rt.layersWithOutsidePointerEventsDisabled.add(r.value)), i.value.add(r.value), m(() => {
        n.disableOutsidePointerEvents && rt.layersWithOutsidePointerEventsDisabled.size === 1 && (l.value.body.style.pointerEvents = v);
      }));
    }), he((m) => {
      m(() => {
        r.value && (i.value.delete(r.value), rt.layersWithOutsidePointerEventsDisabled.delete(r.value));
      });
    }), (m, g) => (h(), C(s(K), {
      ref: s(a),
      "as-child": m.asChild,
      as: m.as,
      "data-dismissable-layer": "",
      style: kt({
        pointerEvents: d.value ? p.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: s(f).onFocusCapture,
      onBlurCapture: s(f).onBlurCapture,
      onPointerdownCapture: s(c).onPointerDownCapture
    }, {
      default: y(() => [
        x(m.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
}), mc = /* @__PURE__ */ w({
  __name: "DismissableLayerBranch",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: o } = V();
    return le(() => {
      rt.branches.add(o.value);
    }), qe(() => {
      rt.branches.delete(o.value);
    }), (a, r) => (h(), C(s(K), k({ ref: s(n) }, t), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), la = "focusScope.autoFocusOnMount", ia = "focusScope.autoFocusOnUnmount", ls = { bubbles: !1, cancelable: !0 };
function Co(e, { select: t = !1 } = {}) {
  const n = Pe();
  for (const o of e)
    if (Mt(o, { select: t }), Pe() !== n)
      return !0;
}
function vc(e) {
  const t = dr(e), n = is(t, e), o = is(t.reverse(), e);
  return [n, o];
}
function dr(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const a = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || a ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function is(e, t) {
  for (const n of e)
    if (!gc(n, { upTo: t }))
      return n;
}
function gc(e, { upTo: t }) {
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
function hc(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Mt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = Pe();
    e.focus({ preventScroll: !0 }), e !== n && hc(e) && t && e.select();
  }
}
const yc = cd(() => E([]));
function bc() {
  const e = yc();
  return {
    add(t) {
      const n = e.value[0];
      t !== n && (n == null || n.pause()), e.value = us(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var n;
      e.value = us(e.value, t), (n = e.value[0]) == null || n.resume();
    }
  };
}
function us(e, t) {
  const n = [...e], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function wc(e) {
  return e.filter((t) => t.tagName !== "A");
}
const No = /* @__PURE__ */ w({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, o = t, { currentRef: a, currentElement: r } = V(), l = E(null), i = bc(), u = gn({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    he((p) => {
      if (!ht)
        return;
      const c = r.value;
      if (!n.trapped)
        return;
      function f(b) {
        if (u.paused || !c)
          return;
        const _ = b.target;
        c.contains(_) ? l.value = _ : Mt(l.value, { select: !0 });
      }
      function v(b) {
        if (u.paused || !c)
          return;
        const _ = b.relatedTarget;
        _ !== null && (c.contains(_) || Mt(l.value, { select: !0 }));
      }
      function m(b) {
        c.contains(l.value) || Mt(c);
      }
      document.addEventListener("focusin", f), document.addEventListener("focusout", v);
      const g = new MutationObserver(m);
      c && g.observe(c, { childList: !0, subtree: !0 }), p(() => {
        document.removeEventListener("focusin", f), document.removeEventListener("focusout", v), g.disconnect();
      });
    }), he(async (p) => {
      const c = r.value;
      if (await te(), !c)
        return;
      i.add(u);
      const f = Pe();
      if (!c.contains(f)) {
        const v = new CustomEvent(la, ls);
        c.addEventListener(la, (m) => o("mountAutoFocus", m)), c.dispatchEvent(v), v.defaultPrevented || (Co(wc(dr(c)), {
          select: !0
        }), Pe() === f && Mt(c));
      }
      p(() => {
        c.removeEventListener(la, (g) => o("mountAutoFocus", g));
        const v = new CustomEvent(ia, ls), m = (g) => {
          o("unmountAutoFocus", g);
        };
        c.addEventListener(ia, m), c.dispatchEvent(v), setTimeout(() => {
          v.defaultPrevented || Mt(f ?? document.body, { select: !0 }), c.removeEventListener(ia, m), i.remove(u);
        }, 0);
      });
    });
    function d(p) {
      if (!n.loop && !n.trapped || u.paused)
        return;
      const c = p.key === "Tab" && !p.altKey && !p.ctrlKey && !p.metaKey, f = Pe();
      if (c && f) {
        const v = p.currentTarget, [m, g] = vc(v);
        m && g ? !p.shiftKey && f === g ? (p.preventDefault(), n.loop && Mt(m, { select: !0 })) : p.shiftKey && f === m && (p.preventDefault(), n.loop && Mt(g, { select: !0 })) : f === v && p.preventDefault();
      }
    }
    return (p, c) => (h(), C(s(K), {
      ref_key: "currentRef",
      ref: a,
      tabindex: "-1",
      "as-child": p.asChild,
      as: p.as,
      onKeydown: d
    }, {
      default: y(() => [
        x(p.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), _c = "menu.itemSelect", Oa = ["Enter", " "], xc = ["ArrowDown", "PageUp", "Home"], $l = ["ArrowUp", "PageDown", "End"], Cc = [...xc, ...$l], Oc = {
  ltr: [...Oa, "ArrowRight"],
  rtl: [...Oa, "ArrowLeft"]
}, $c = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function cr(e) {
  return e ? "open" : "closed";
}
function Eo(e) {
  return e === "indeterminate";
}
function pr(e) {
  return Eo(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function $a(e) {
  const t = Pe();
  for (const n of e)
    if (n === t || (n.focus(), Pe() !== t))
      return;
}
function Sc(e, t) {
  const { x: n, y: o } = e;
  let a = !1;
  for (let r = 0, l = t.length - 1; r < t.length; l = r++) {
    const i = t[r].x, u = t[r].y, d = t[l].x, p = t[l].y;
    u > o != p > o && n < (d - i) * (o - u) / (p - u) + i && (a = !a);
  }
  return a;
}
function Bc(e, t) {
  if (!t)
    return !1;
  const n = { x: e.clientX, y: e.clientY };
  return Sc(n, t);
}
function Kn(e) {
  return e.pointerType === "mouse";
}
const Ec = "DialogTitle", Dc = "DialogContent";
function Tc({
  titleName: e = Ec,
  contentName: t = Dc,
  componentLink: n = "dialog.html#title",
  titleId: o,
  descriptionId: a,
  contentElement: r
}) {
  const l = `Warning: \`${t}\` requires a \`${e}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.radix-vue.com/components/${n}`, i = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${t}.`;
  le(() => {
    var u;
    document.getElementById(o) || console.warn(l);
    const d = (u = r.value) == null ? void 0 : u.getAttribute("aria-describedby");
    a && d && (document.getElementById(a) || console.warn(i));
  });
}
const Sl = /* @__PURE__ */ w({
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
    const n = e, o = t, a = yt(), { forwardRef: r, currentElement: l } = V();
    return a.titleId || (a.titleId = ke(void 0, "radix-vue-dialog-title")), a.descriptionId || (a.descriptionId = ke(void 0, "radix-vue-dialog-description")), le(() => {
      a.contentElement = l, Pe() !== document.body && (a.triggerElement.value = Pe());
    }), process.env.NODE_ENV !== "production" && Tc({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: a.titleId,
      descriptionId: a.descriptionId,
      contentElement: l
    }), (i, u) => (h(), C(s(No), {
      "as-child": "",
      loop: "",
      trapped: n.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => o("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => o("closeAutoFocus", d))
    }, {
      default: y(() => [
        F(s($n), k({
          id: s(a).contentId,
          ref: s(r),
          as: i.as,
          "as-child": i.asChild,
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": s(a).descriptionId,
          "aria-labelledby": s(a).titleId,
          "data-state": s(cr)(s(a).open.value)
        }, i.$attrs, {
          onDismiss: u[0] || (u[0] = (d) => s(a).onOpenChange(!1)),
          onEscapeKeyDown: u[1] || (u[1] = (d) => o("escapeKeyDown", d)),
          onFocusOutside: u[2] || (u[2] = (d) => o("focusOutside", d)),
          onInteractOutside: u[3] || (u[3] = (d) => o("interactOutside", d)),
          onPointerDownOutside: u[4] || (u[4] = (d) => o("pointerDownOutside", d))
        }), {
          default: y(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "as", "as-child", "disable-outside-pointer-events", "aria-describedby", "aria-labelledby", "data-state"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
}), kc = /* @__PURE__ */ w({
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
    const n = e, o = t, a = yt(), r = zt(o), { forwardRef: l, currentElement: i } = V();
    return to(i), (u, d) => (h(), C(Sl, k({ ...n, ...s(r) }, {
      ref: s(l),
      "trap-focus": s(a).open.value,
      "disable-outside-pointer-events": !0,
      onCloseAutoFocus: d[0] || (d[0] = (p) => {
        var c;
        p.defaultPrevented || (p.preventDefault(), (c = s(a).triggerElement.value) == null || c.focus());
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
        x(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), Ac = /* @__PURE__ */ w({
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
    const n = e, o = zt(t);
    V();
    const a = yt(), r = E(!1), l = E(!1);
    return (i, u) => (h(), C(Sl, k({ ...n, ...s(o) }, {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: u[0] || (u[0] = (d) => {
        var p;
        d.defaultPrevented || (r.value || (p = s(a).triggerElement.value) == null || p.focus(), d.preventDefault()), r.value = !1, l.value = !1;
      }),
      onInteractOutside: u[1] || (u[1] = (d) => {
        var p;
        d.defaultPrevented || (r.value = !0, d.detail.originalEvent.type === "pointerdown" && (l.value = !0));
        const c = d.target;
        (p = s(a).triggerElement.value) != null && p.contains(c) && d.preventDefault(), d.detail.originalEvent.type === "focusin" && l.value && d.preventDefault();
      })
    }), {
      default: y(() => [
        x(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), jo = /* @__PURE__ */ w({
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
    const n = e, o = t, a = yt(), r = zt(o), { forwardRef: l } = V();
    return (i, u) => (h(), C(s(tt), {
      present: i.forceMount || s(a).open.value
    }, {
      default: y(() => [
        s(a).modal.value ? (h(), C(kc, k({
          key: 0,
          ref: s(l)
        }, { ...n, ...s(r), ...i.$attrs }), {
          default: y(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (h(), C(Ac, k({
          key: 1,
          ref: s(l)
        }, { ...n, ...s(r), ...i.$attrs }), {
          default: y(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Pc = /* @__PURE__ */ w({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = yt();
    return eo(!0), V(), (n, o) => (h(), C(s(K), {
      as: n.as,
      "as-child": n.asChild,
      "data-state": s(t).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" }
    }, {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state"]));
  }
}), zo = /* @__PURE__ */ w({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = yt(), { forwardRef: n } = V();
    return (o, a) => {
      var r;
      return (r = s(t)) != null && r.modal.value ? (h(), C(s(tt), {
        key: 0,
        present: o.forceMount || s(t).open.value
      }, {
        default: y(() => [
          F(Pc, k(o.$attrs, {
            ref: s(n),
            as: o.as,
            "as-child": o.asChild
          }), {
            default: y(() => [
              x(o.$slots, "default")
            ]),
            _: 3
          }, 16, ["as", "as-child"])
        ]),
        _: 3
      }, 8, ["present"])) : ge("", !0);
    };
  }
}), Zt = /* @__PURE__ */ w({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    V();
    const n = yt();
    return (o, a) => (h(), C(s(K), k(t, {
      type: o.as === "button" ? "button" : void 0,
      onClick: a[0] || (a[0] = (r) => s(n).onOpenChange(!1))
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
}), fr = /* @__PURE__ */ w({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e, n = yt();
    return V(), (o, a) => (h(), C(s(K), k(t, {
      id: s(n).titleId
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), mr = /* @__PURE__ */ w({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    V();
    const n = yt();
    return (o, a) => (h(), C(s(K), k(t, {
      id: s(n).descriptionId
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Ic = /* @__PURE__ */ w({
  __name: "AlertDialogRoot",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = J(e, t);
    return V(), (o, a) => (h(), C(s(lr), k(s(n), { modal: !0 }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Mc = /* @__PURE__ */ w({
  __name: "AlertDialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    return V(), (n, o) => (h(), C(s(ir), q(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Fc = /* @__PURE__ */ w({
  __name: "AlertDialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(On), q(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Rc, Lc] = ie("AlertDialogContent"), Vc = /* @__PURE__ */ w({
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
    const n = e, o = zt(t);
    V();
    const a = E();
    return Lc({
      onCancelElementChange: (r) => {
        a.value = r;
      }
    }), (r, l) => (h(), C(s(jo), k({ ...n, ...s(o) }, {
      role: "alertdialog",
      onPointerDownOutside: l[0] || (l[0] = Te(() => {
      }, ["prevent"])),
      onInteractOutside: l[1] || (l[1] = Te(() => {
      }, ["prevent"])),
      onOpenAutoFocus: l[2] || (l[2] = () => {
        te(() => {
          var i;
          (i = a.value) == null || i.focus({
            preventScroll: !0
          });
        });
      })
    }), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Nc = /* @__PURE__ */ w({
  __name: "AlertDialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return V(), (n, o) => (h(), C(s(zo), q(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), jc = /* @__PURE__ */ w({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Rc(), { forwardRef: o, currentElement: a } = V();
    return le(() => {
      n.onCancelElementChange(a.value);
    }), (r, l) => (h(), C(s(Zt), k(t, { ref: s(o) }), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), zc = /* @__PURE__ */ w({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e;
    return V(), (n, o) => (h(), C(s(fr), q(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Kc = /* @__PURE__ */ w({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    return V(), (n, o) => (h(), C(s(mr), q(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hc = /* @__PURE__ */ w({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    return V(), (n, o) => (h(), C(s(Zt), q(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Bl, Wc] = ie("AvatarRoot"), Uc = /* @__PURE__ */ w({
  __name: "AvatarRoot",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return V(), Wc({
      imageLoadingStatus: E("loading")
    }), (t, n) => (h(), C(s(K), {
      "as-child": t.asChild,
      as: t.as
    }, {
      default: y(() => [
        x(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
});
function qc(e, t) {
  const n = E("idle"), o = E(!1), a = (r) => () => {
    o.value && (n.value = r);
  };
  return le(() => {
    o.value = !0, Y([() => e.value, () => t == null ? void 0 : t.value], ([r, l]) => {
      if (!r)
        n.value = "error";
      else {
        const i = new window.Image();
        n.value = "loading", i.onload = a("loaded"), i.onerror = a("error"), i.src = r, l && (i.referrerPolicy = l);
      }
    }, { immediate: !0 });
  }), qe(() => {
    o.value = !1;
  }), n;
}
const Gc = /* @__PURE__ */ w({
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
    V();
    const l = Bl(), i = qc(a, r);
    return Y(
      i,
      (u) => {
        o("loadingStatusChange", u), u !== "idle" && (l.imageLoadingStatus.value = u);
      },
      { immediate: !0 }
    ), (u, d) => wn((h(), C(s(K), {
      role: "img",
      "as-child": u.asChild,
      as: u.as,
      src: s(a),
      "referrer-policy": s(r)
    }, {
      default: y(() => [
        x(u.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "src", "referrer-policy"])), [
      [Va, s(i) === "loaded"]
    ]);
  }
}), Yc = /* @__PURE__ */ w({
  __name: "AvatarFallback",
  props: {
    delayMs: { default: 0 },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = Bl();
    V();
    const o = E(!1);
    let a;
    return Y(n.imageLoadingStatus, (r) => {
      r === "loading" && (o.value = !1, t.delayMs ? a = setTimeout(() => {
        o.value = !0, clearTimeout(a);
      }, t.delayMs) : o.value = !0);
    }, { immediate: !0 }), (r, l) => o.value && s(n).imageLoadingStatus.value !== "loaded" ? (h(), C(s(K), {
      key: 0,
      "as-child": r.asChild,
      as: r.as
    }, {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"])) : ge("", !0);
  }
}), [El, Xc] = ie("PopperRoot"), Sn = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = E();
    return Xc({
      anchor: t,
      onAnchorChange: (n) => t.value = n
    }), (n, o) => x(n.$slots, "default");
  }
}), no = /* @__PURE__ */ w({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: o } = V(), a = El();
    return he(() => {
      a.onAnchorChange(t.element ?? o.value);
    }), (r, l) => (h(), C(s(K), {
      ref: s(n),
      as: r.as,
      "as-child": r.asChild
    }, {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function Zc(e) {
  return e !== null;
}
function Qc(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var n, o, a;
      const { placement: r, rects: l, middlewareData: i } = t, u = ((n = i.arrow) == null ? void 0 : n.centerOffset) !== 0, d = u ? 0 : e.arrowWidth, p = u ? 0 : e.arrowHeight, [c, f] = Sa(r), v = { start: "0%", center: "50%", end: "100%" }[f], m = (((o = i.arrow) == null ? void 0 : o.x) ?? 0) + d / 2, g = (((a = i.arrow) == null ? void 0 : a.y) ?? 0) + p / 2;
      let b = "", _ = "";
      return c === "bottom" ? (b = u ? v : `${m}px`, _ = `${-p}px`) : c === "top" ? (b = u ? v : `${m}px`, _ = `${l.floating.height + p}px`) : c === "right" ? (b = `${-p}px`, _ = u ? v : `${g}px`) : c === "left" && (b = `${l.floating.width + p}px`, _ = u ? v : `${g}px`), { data: { x: b, y: _ } };
    }
  };
}
function Sa(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
const Dl = {
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
}, [Hy, Jc] = ie("PopperContent"), bn = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ Ws({
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
    ...Dl
  }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = El(), { forwardRef: r, currentElement: l } = V(), i = E(), u = E(), { width: d, height: p } = wl(u), c = B(
      () => n.side + (n.align !== "center" ? `-${n.align}` : "")
    ), f = B(() => typeof n.collisionPadding == "number" ? n.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...n.collisionPadding }), v = B(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), m = B(() => ({
      padding: f.value,
      boundary: v.value.filter(Zc),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: v.value.length > 0
    })), g = ud(() => [
      Zu({
        mainAxis: n.sideOffset + p.value,
        alignmentAxis: n.alignOffset
      }),
      n.prioritizePosition && n.avoidCollisions && os({
        ...m.value
      }),
      n.avoidCollisions && Qu({
        mainAxis: !0,
        crossAxis: !!n.prioritizePosition,
        limiter: n.sticky === "partial" ? nd() : void 0,
        ...m.value
      }),
      !n.prioritizePosition && n.avoidCollisions && os({
        ...m.value
      }),
      Ju({
        ...m.value,
        apply: ({ elements: A, rects: L, availableWidth: M, availableHeight: X }) => {
          const { width: H, height: Q } = L.reference, W = A.floating.style;
          W.setProperty(
            "--radix-popper-available-width",
            `${M}px`
          ), W.setProperty(
            "--radix-popper-available-height",
            `${X}px`
          ), W.setProperty(
            "--radix-popper-anchor-width",
            `${H}px`
          ), W.setProperty(
            "--radix-popper-anchor-height",
            `${Q}px`
          );
        }
      }),
      u.value && rd({ element: u.value, padding: n.arrowPadding }),
      Qc({
        arrowWidth: d.value,
        arrowHeight: p.value
      }),
      n.hideWhenDetached && ed({ strategy: "referenceHidden", ...m.value })
    ]), { floatingStyles: b, placement: _, isPositioned: $, middlewareData: O } = sd(
      a.anchor,
      i,
      {
        strategy: "fixed",
        placement: c,
        whileElementsMounted: (...A) => Xu(...A, {
          animationFrame: n.updatePositionStrategy === "always"
        }),
        middleware: g
      }
    ), D = B(
      () => Sa(_.value)[0]
    ), S = B(
      () => Sa(_.value)[1]
    );
    Gi(() => {
      $.value && o("placed");
    });
    const P = B(
      () => {
        var A;
        return ((A = O.value.arrow) == null ? void 0 : A.centerOffset) !== 0;
      }
    ), T = E("");
    he(() => {
      l.value && (T.value = window.getComputedStyle(l.value).zIndex);
    });
    const I = B(() => {
      var A;
      return ((A = O.value.arrow) == null ? void 0 : A.x) ?? 0;
    }), R = B(() => {
      var A;
      return ((A = O.value.arrow) == null ? void 0 : A.y) ?? 0;
    });
    return Jc({
      placedSide: D,
      onArrowChange: (A) => u.value = A,
      arrowX: I,
      arrowY: R,
      shouldHideArrow: P
    }), (A, L) => {
      var M, X, H;
      return h(), j("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-radix-popper-content-wrapper": "",
        style: kt({
          ...s(b),
          transform: s($) ? s(b).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: T.value,
          "--radix-popper-transform-origin": [
            (M = s(O).transformOrigin) == null ? void 0 : M.x,
            (X = s(O).transformOrigin) == null ? void 0 : X.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((H = s(O).hide) == null ? void 0 : H.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        F(s(K), k({ ref: s(r) }, A.$attrs, {
          "as-child": n.asChild,
          as: A.as,
          "data-side": D.value,
          "data-align": S.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: s($) ? void 0 : "none"
          }
        }), {
          default: y(() => [
            x(A.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
}), oo = /* @__PURE__ */ w({
  __name: "VisuallyHidden",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return V(), (t, n) => (h(), C(s(K), {
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
        x(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), ep = /* @__PURE__ */ w({
  __name: "VisuallyHiddenInput",
  props: {
    name: {},
    value: {},
    required: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, n = B(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" ? [{ name: t.name, value: t.value }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((o, a) => typeof o == "object" ? Object.entries(o).map(([r, l]) => ({ name: `[${a}][${t.name}][${r}]`, value: l })) : { name: `[${t.name}][${a}]`, value: o }) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([o, a]) => ({ name: `[${t.name}][${o}]`, value: a })) : []);
    return (o, a) => (h(!0), j(Ee, null, Lt(n.value, (r) => (h(), C(oo, {
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
}), tp = "data-radix-vue-collection-item", [vr, np] = ie("CollectionProvider");
function gr(e = tp) {
  const t = E(/* @__PURE__ */ new Map()), n = E(), o = np({
    collectionRef: n,
    itemMap: t,
    attrName: e
  }), { getItems: a } = yr(o), r = B(() => Array.from(o.itemMap.value.values())), l = B(() => o.itemMap.value.size);
  return { getItems: a, reactiveItems: r, itemMapSize: l };
}
const hr = w({
  name: "CollectionSlot",
  setup(e, { slots: t }) {
    const n = vr(), { primitiveElement: o, currentElement: a } = _l();
    return Y(a, () => {
      n.collectionRef.value = a.value;
    }), () => ze(rr, { ref: o }, t);
  }
}), Ko = w({
  name: "CollectionItem",
  inheritAttrs: !1,
  props: {
    value: {
      // It accepts any value
      validator: () => !0
    }
  },
  setup(e, { slots: t, attrs: n }) {
    const o = vr(), { primitiveElement: a, currentElement: r } = _l();
    return he((l) => {
      if (r.value) {
        const i = Hs(r.value);
        o.itemMap.value.set(i, { ref: r.value, value: e.value }), l(() => o.itemMap.value.delete(i));
      }
    }), () => ze(rr, { ...n, [o.attrName]: "", ref: a }, t);
  }
});
function yr(e) {
  const t = e ?? vr();
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
const [Bn, op] = ie("ComboboxRoot"), ap = /* @__PURE__ */ w({
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
    const n = e, o = t, { multiple: a, disabled: r, dir: l } = pe(n), i = jt(l), u = _e(n, "searchTerm", o, {
      // @ts-expect-error ignore the type error here
      defaultValue: "",
      passive: n.searchTerm === void 0
    }), d = _e(n, "modelValue", o, {
      // @ts-expect-error ignore the type error here
      defaultValue: n.defaultValue ?? a.value ? [] : void 0,
      passive: n.modelValue === void 0,
      deep: !0
    }), p = _e(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), c = _e(n, "selectedValue", o, {
      defaultValue: void 0,
      passive: n.selectedValue === void 0
    });
    async function f(z) {
      var ae, ne;
      p.value = z, await te(), z ? (d.value && (Array.isArray(d.value) && a.value ? c.value = (ae = O().find((Ne) => {
        var He, je;
        return ((je = (He = Ne.ref) == null ? void 0 : He.dataset) == null ? void 0 : je.state) === "checked";
      })) == null ? void 0 : ae.value : c.value = d.value), await te(), (ne = g.value) == null || ne.focus(), X()) : (m.value = !1, n.resetSearchTermOnBlur && I("blur"));
    }
    function v(z) {
      if (Array.isArray(d.value) && a.value) {
        const ae = d.value.findIndex((Ne) => Ut(Ne, z)), ne = [...d.value];
        ae === -1 ? ne.push(z) : ne.splice(ae, 1), d.value = ne;
      } else
        d.value = z, f(!1);
    }
    const m = E(!1), g = E(), b = E(), { forwardRef: _, currentElement: $ } = V(), { getItems: O, reactiveItems: D, itemMapSize: S } = gr("data-radix-vue-combobox-item"), P = E([]);
    Y(() => S.value, () => {
      P.value = O().map((z) => z.value);
    }, {
      immediate: !0,
      flush: "post"
    });
    const T = B(() => {
      if (m.value) {
        if (n.filterFunction)
          return n.filterFunction(P.value, u.value);
        const z = P.value.filter((ae) => typeof ae == "string");
        if (z.length)
          return z.filter((ae) => {
            var ne;
            return ae.toLowerCase().includes((ne = u.value) == null ? void 0 : ne.toLowerCase());
          });
      }
      return P.value;
    });
    function I(z) {
      const ae = z === "blur" || z === "select" && n.resetSearchTermOnSelect;
      !a.value && d.value && !Array.isArray(d.value) ? n.displayValue ? u.value = n.displayValue(d.value) : typeof d.value != "object" ? u.value = d.value.toString() : ae && (u.value = "") : ae && (u.value = "");
    }
    const R = B(() => T.value.findIndex((z) => Ut(z, c.value))), A = B(() => {
      var z;
      return (z = D.value.find((ae) => Ut(ae.value, c.value))) == null ? void 0 : z.ref;
    }), L = B(() => JSON.stringify(d.value));
    Y(L, async () => {
      await te(), await te(), I("select");
    }, {
      // If searchTerm is provided with value during initialization, we don't reset it immediately
      immediate: !n.searchTerm
    }), Y(() => [T.value.length, u.value.length], async ([z, ae], [ne, Ne]) => {
      await te(), await te(), z && (Ne > ae || R.value === -1) && (c.value = T.value[0]);
    });
    const M = Lo($);
    function X() {
      var z;
      A.value instanceof Element && ((z = A.value) == null || z.scrollIntoView({ block: "nearest" }));
    }
    function H() {
      A.value instanceof Element && A.value.focus && A.value.focus();
    }
    const Q = E(!1);
    function W() {
      Q.value = !0;
    }
    function fe() {
      requestAnimationFrame(() => {
        Q.value = !1;
      });
    }
    async function ee(z) {
      var ae;
      T.value.length && c.value && A.value instanceof Element && (z.preventDefault(), z.stopPropagation(), Q.value || (ae = A.value) == null || ae.click());
    }
    return op({
      searchTerm: u,
      modelValue: d,
      // @ts-expect-error ignoring
      onValueChange: v,
      isUserInputted: m,
      multiple: a,
      disabled: r,
      open: p,
      onOpenChange: f,
      filteredOptions: T,
      contentId: "",
      inputElement: g,
      selectedElement: A,
      onInputElementChange: (z) => g.value = z,
      onInputNavigation: async (z) => {
        const ae = R.value;
        ae === 0 && z === "up" || ae === T.value.length - 1 && z === "down" || (ae === -1 && T.value.length || z === "home" ? c.value = T.value[0] : z === "end" ? c.value = T.value[T.value.length - 1] : c.value = T.value[z === "up" ? ae - 1 : ae + 1], await te(), X(), H(), te(() => {
          var ne;
          return (ne = g.value) == null ? void 0 : ne.focus({ preventScroll: !0 });
        }));
      },
      onInputEnter: ee,
      onCompositionEnd: fe,
      onCompositionStart: W,
      selectedValue: c,
      onSelectedValueChange: (z) => c.value = z,
      parentElement: $,
      contentElement: b,
      onContentElementChange: (z) => b.value = z
    }), (z, ae) => (h(), C(s(Sn), null, {
      default: y(() => [
        F(s(K), k({
          ref: s(_),
          style: {
            pointerEvents: s(p) ? "auto" : void 0
          },
          as: z.as,
          "as-child": z.asChild,
          dir: s(i)
        }, z.$attrs), {
          default: y(() => [
            x(z.$slots, "default", {
              open: s(p),
              modelValue: s(d)
            }),
            s(M) && n.name ? (h(), C(s(ep), {
              key: 0,
              name: n.name,
              value: s(d)
            }, null, 8, ["name", "value"])) : ge("", !0)
          ]),
          _: 3
        }, 16, ["style", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), rp = /* @__PURE__ */ w({
  __name: "ComboboxInput",
  props: {
    type: { default: "text" },
    disabled: { type: Boolean },
    autoFocus: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(e) {
    const t = e, n = Bn(), { forwardRef: o, currentElement: a } = V();
    le(() => {
      const p = a.value.nodeName === "INPUT" ? a.value : a.value.querySelector("input");
      p && (n.onInputElementChange(p), setTimeout(() => {
        t.autoFocus && (p == null || p.focus());
      }, 1));
    });
    const r = B(() => t.disabled || n.disabled.value || !1), l = E();
    Ki(() => {
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
    return (p, c) => (h(), C(s(K), {
      ref: s(o),
      as: p.as,
      "as-child": p.asChild,
      type: p.type,
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
        Rt(Te(i, ["prevent"]), ["down", "up"]),
        Rt(s(n).onInputEnter, ["enter"]),
        Rt(Te(u, ["prevent"]), ["home", "end"])
      ],
      onCompositionstart: s(n).onCompositionStart,
      onCompositionend: s(n).onCompositionEnd
    }, {
      default: y(() => [
        x(p.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "disabled", "value", "aria-expanded", "aria-controls", "aria-disabled", "aria-activedescendant", "onKeydown", "onCompositionstart", "onCompositionend"]));
  }
}), [Tl, sp] = ie("ComboboxGroup"), lp = /* @__PURE__ */ w({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { currentRef: n, currentElement: o } = V(), a = ke(void 0, "radix-vue-combobox-group"), r = Bn(), l = E(!1);
    function i() {
      if (!o.value)
        return;
      const u = o.value.querySelectorAll("[data-radix-vue-combobox-item]:not([data-hidden])");
      l.value = !!u.length;
    }
    return xd(o, () => {
      te(() => {
        i();
      });
    }, { childList: !0 }), Y(() => r.searchTerm.value, () => {
      te(() => {
        i();
      });
    }, { immediate: !0 }), sp({
      id: a
    }), (u, d) => wn((h(), C(s(K), k(t, {
      ref_key: "currentRef",
      ref: n,
      role: "group",
      "aria-labelledby": s(a)
    }), {
      default: y(() => [
        x(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"])), [
      [Va, l.value]
    ]);
  }
}), ip = /* @__PURE__ */ w({
  __name: "ComboboxLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    V();
    const n = Tl({ id: "" });
    return (o, a) => (h(), C(s(K), k(t, {
      id: s(n).id
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), [Wy, up] = ie("ComboboxContent"), dp = /* @__PURE__ */ w({
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
    const n = e, o = t, { position: a } = pe(n), r = Bn();
    eo(n.bodyLock);
    const { forwardRef: l, currentElement: i } = V();
    to(r.parentElement);
    const u = B(() => n.position === "popper" ? n : {}), d = Ie(u.value);
    function p(f) {
      r.onSelectedValueChange("");
    }
    le(() => {
      r.onContentElementChange(i.value);
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
    return up({ position: a }), (f, v) => (h(), C(s(hr), null, {
      default: y(() => [
        f.dismissable ? (h(), C(s($n), {
          key: 0,
          "as-child": "",
          "disable-outside-pointer-events": f.disableOutsidePointerEvents,
          onDismiss: v[0] || (v[0] = (m) => s(r).onOpenChange(!1)),
          onFocusOutside: v[1] || (v[1] = (m) => {
            var g;
            (g = s(r).parentElement.value) != null && g.contains(m.target) && m.preventDefault(), o("focusOutside", m);
          }),
          onInteractOutside: v[2] || (v[2] = (m) => o("interactOutside", m)),
          onEscapeKeyDown: v[3] || (v[3] = (m) => o("escapeKeyDown", m)),
          onPointerDownOutside: v[4] || (v[4] = (m) => {
            var g;
            (g = s(r).parentElement.value) != null && g.contains(m.target) && m.preventDefault(), o("pointerDownOutside", m);
          })
        }, {
          default: y(() => [
            (h(), C(Je(s(a) === "popper" ? s(bn) : s(K)), k({ ...f.$attrs, ...s(d) }, {
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
                ...s(a) === "popper" ? c : {}
              },
              onPointerleave: p
            }), {
              default: y(() => [
                x(f.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "data-state", "style"]))
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])) : (h(), C(Je(s(a) === "popper" ? s(bn) : s(K)), k({ key: 1 }, { ...f.$attrs, ...u.value }, {
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
            ...s(a) === "popper" ? c : {}
          },
          onPointerleave: p
        }), {
          default: y(() => [
            x(f.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "data-state", "style"]))
      ]),
      _: 3
    }));
  }
}), cp = /* @__PURE__ */ w({
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
    const n = J(e, t), { forwardRef: o } = V(), a = Bn();
    return a.contentId || (a.contentId = ke(void 0, "radix-vue-combobox-content")), (r, l) => (h(), C(s(tt), {
      present: r.forceMount || s(a).open.value
    }, {
      default: y(() => [
        F(dp, k({ ...s(n), ...r.$attrs }, { ref: s(o) }), {
          default: y(() => [
            x(r.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), pp = /* @__PURE__ */ w({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    V();
    const n = Bn(), o = B(() => n.filteredOptions.value.length === 0);
    return (a, r) => o.value ? (h(), C(s(K), q(k({ key: 0 }, t)), {
      default: y(() => [
        x(a.$slots, "default", {}, () => [
          Le("No options")
        ])
      ]),
      _: 3
    }, 16)) : ge("", !0);
  }
});
function fp(e) {
  const t = Ro({
    nonce: E()
  });
  return B(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.nonce) == null ? void 0 : n.value);
  });
}
const [Uy, mp] = ie("ComboboxItem"), vp = "combobox.select", gp = /* @__PURE__ */ w({
  __name: "ComboboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = t, { disabled: a } = pe(n), r = Bn();
    Tl({ id: "", options: E([]) });
    const { forwardRef: l } = V(), i = B(
      () => {
        var g, b;
        return r.multiple.value && Array.isArray(r.modelValue.value) ? (g = r.modelValue.value) == null ? void 0 : g.some((_) => Ut(_, n.value)) : Ut((b = r.modelValue) == null ? void 0 : b.value, n.value);
      }
    ), u = B(() => Ut(r.selectedValue.value, n.value)), d = ke(void 0, "radix-vue-combobox-item"), p = ke(void 0, "radix-vue-combobox-option"), c = B(() => r.isUserInputted.value ? r.searchTerm.value === "" || !!r.filteredOptions.value.find((g) => Ut(g, n.value)) : !0);
    async function f(g) {
      o("select", g), !(g != null && g.defaultPrevented) && !a.value && g && r.onValueChange(n.value);
    }
    function v(g) {
      if (!g)
        return;
      const b = { originalEvent: g, value: n.value };
      Ja(vp, f, b);
    }
    async function m(g) {
      await te(), !g.defaultPrevented && r.onSelectedValueChange(n.value);
    }
    if (n.value === "")
      throw new Error(
        "A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder."
      );
    return mp({
      isSelected: i
    }), (g, b) => (h(), C(s(Ko), { value: g.value }, {
      default: y(() => [
        wn(F(s(K), {
          id: s(p),
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
          "data-hidden": c.value ? void 0 : !0,
          onClick: v,
          onPointermove: m
        }, {
          default: y(() => [
            x(g.$slots, "default", {}, () => [
              Le(We(g.value), 1)
            ])
          ]),
          _: 3
        }, 8, ["id", "aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "as", "as-child", "data-hidden"]), [
          [Va, c.value]
        ])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), hp = /* @__PURE__ */ w({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return V(), (n, o) => (h(), C(s(K), k(t, { "aria-hidden": "true" }), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), kl = /* @__PURE__ */ w({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(no), q(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function yp() {
  const e = E(!1);
  return le(() => {
    yn("keydown", () => {
      e.value = !0;
    }, { capture: !0, passive: !0 }), yn(["pointerdown", "pointermove"], () => {
      e.value = !1;
    }, { capture: !0, passive: !0 });
  }), e;
}
const bp = pl(yp), [Qt, Al] = ie(["MenuRoot", "MenuSub"], "MenuContext"), [ao, wp] = ie("MenuRoot"), _p = /* @__PURE__ */ w({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = t, { modal: a, dir: r } = pe(n), l = jt(r), i = _e(n, "open", o), u = E(), d = bp();
    return Al({
      open: i,
      onOpenChange: (p) => {
        i.value = p;
      },
      content: u,
      onContentChange: (p) => {
        u.value = p;
      }
    }), wp({
      onClose: () => {
        i.value = !1;
      },
      isUsingKeyboardRef: d,
      dir: l,
      modal: a
    }), (p, c) => (h(), C(s(Sn), null, {
      default: y(() => [
        x(p.$slots, "default")
      ]),
      _: 3
    }));
  }
}), xp = "rovingFocusGroup.onEntryFocus", Cp = { bubbles: !1, cancelable: !0 }, Op = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function $p(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Sp(e, t, n) {
  const o = $p(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o)))
    return Op[o];
}
function Pl(e, t = !1) {
  const n = Pe();
  for (const o of e)
    if (o === n || (o.focus({ preventScroll: t }), Pe() !== n))
      return;
}
function Bp(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
const [Ep, Dp] = ie("RovingFocusGroup"), Il = /* @__PURE__ */ w({
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
    const o = e, a = n, { loop: r, orientation: l, dir: i } = pe(o), u = jt(i), d = _e(o, "currentTabStopId", a, {
      defaultValue: o.defaultCurrentTabStopId,
      passive: o.currentTabStopId === void 0
    }), p = E(!1), c = E(!1), f = E(0), { getItems: v } = gr();
    function m(b) {
      const _ = !c.value;
      if (b.currentTarget && b.target === b.currentTarget && _ && !p.value) {
        const $ = new CustomEvent(xp, Cp);
        if (b.currentTarget.dispatchEvent($), a("entryFocus", $), !$.defaultPrevented) {
          const O = v().map((T) => T.ref).filter((T) => T.dataset.disabled !== ""), D = O.find((T) => T.getAttribute("data-active") === "true"), S = O.find(
            (T) => T.id === d.value
          ), P = [D, S, ...O].filter(
            Boolean
          );
          Pl(P, o.preventScrollOnEntryFocus);
        }
      }
      c.value = !1;
    }
    function g() {
      setTimeout(() => {
        c.value = !1;
      }, 1);
    }
    return t({
      getItems: v
    }), Dp({
      loop: r,
      dir: u,
      orientation: l,
      currentTabStopId: d,
      onItemFocus: (b) => {
        d.value = b;
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
    }), (b, _) => (h(), C(s(hr), null, {
      default: y(() => [
        F(s(K), {
          tabindex: p.value || f.value === 0 ? -1 : 0,
          "data-orientation": s(l),
          as: b.as,
          "as-child": b.asChild,
          dir: s(u),
          style: { outline: "none" },
          onMousedown: _[0] || (_[0] = ($) => c.value = !0),
          onMouseup: g,
          onFocus: m,
          onBlur: _[1] || (_[1] = ($) => p.value = !1)
        }, {
          default: y(() => [
            x(b.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), Tp = /* @__PURE__ */ w({
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
    const t = e, n = Ep(), o = B(() => t.tabStopId || ke()), a = B(
      () => n.currentTabStopId.value === o.value
    ), { getItems: r } = yr();
    le(() => {
      t.focusable && n.onFocusableItemAdd();
    }), qe(() => {
      t.focusable && n.onFocusableItemRemove();
    });
    function l(i) {
      if (i.key === "Tab" && i.shiftKey) {
        n.onItemShiftTab();
        return;
      }
      if (i.target !== i.currentTarget)
        return;
      const u = Sp(
        i,
        n.orientation.value,
        n.dir.value
      );
      if (u !== void 0) {
        if (i.metaKey || i.ctrlKey || i.altKey || !t.allowShiftKey && i.shiftKey)
          return;
        i.preventDefault();
        let d = [...r().map((p) => p.ref).filter((p) => p.dataset.disabled !== "")];
        if (u === "last")
          d.reverse();
        else if (u === "prev" || u === "next") {
          u === "prev" && d.reverse();
          const p = d.indexOf(
            i.currentTarget
          );
          d = n.loop.value ? Bp(d, p + 1) : d.slice(p + 1);
        }
        te(() => Pl(d));
      }
    }
    return (i, u) => (h(), C(s(Ko), null, {
      default: y(() => [
        F(s(K), {
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
            x(i.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "data-active", "data-disabled", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), [br, kp] = ie("MenuContent"), wr = /* @__PURE__ */ w({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ Ws({
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
    ...Dl
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = Qt(), r = ao(), { trapFocus: l, disableOutsidePointerEvents: i, loop: u } = pe(n);
    or(), eo(i.value);
    const d = E(""), p = E(0), c = E(0), f = E(null), v = E("right"), m = E(0), g = E(null), { createCollection: b } = Cn(), { forwardRef: _, currentElement: $ } = V(), O = b($);
    Y($, (A) => {
      a.onContentChange(A);
    });
    const { handleTypeaheadSearch: D } = ar(O);
    qe(() => {
      window.clearTimeout(p.value);
    });
    function S(A) {
      var L, M;
      return v.value === ((L = f.value) == null ? void 0 : L.side) && Bc(A, (M = f.value) == null ? void 0 : M.area);
    }
    async function P(A) {
      var L;
      o("openAutoFocus", A), !A.defaultPrevented && (A.preventDefault(), (L = $.value) == null || L.focus({
        preventScroll: !0
      }));
    }
    function T(A) {
      if (A.defaultPrevented)
        return;
      const L = A.target.closest("[data-radix-menu-content]") === A.currentTarget, M = A.ctrlKey || A.altKey || A.metaKey, X = A.key.length === 1, H = gl(
        A,
        Pe(),
        $.value,
        {
          loop: u.value,
          arrowKeyOptions: "vertical",
          dir: r == null ? void 0 : r.dir.value,
          focus: !0,
          attributeName: "[data-radix-vue-collection-item]:not([data-disabled])"
        }
      );
      if (H)
        return H == null ? void 0 : H.focus();
      if (A.code === "Space" || (L && (A.key === "Tab" && A.preventDefault(), !M && X && D(A.key)), A.target !== $.value) || !Cc.includes(A.key))
        return;
      A.preventDefault();
      const Q = O.value;
      $l.includes(A.key) && Q.reverse(), $a(Q);
    }
    function I(A) {
      var L, M;
      (M = (L = A == null ? void 0 : A.currentTarget) == null ? void 0 : L.contains) != null && M.call(L, A.target) || (window.clearTimeout(p.value), d.value = "");
    }
    function R(A) {
      var L;
      if (!Kn(A))
        return;
      const M = A.target, X = m.value !== A.clientX;
      if ((L = A == null ? void 0 : A.currentTarget) != null && L.contains(M) && X) {
        const H = A.clientX > m.value ? "right" : "left";
        v.value = H, m.value = A.clientX;
      }
    }
    return kp({
      onItemEnter: (A) => !!S(A),
      onItemLeave: (A) => {
        var L;
        S(A) || ((L = $.value) == null || L.focus(), g.value = null);
      },
      onTriggerLeave: (A) => !!S(A),
      searchRef: d,
      pointerGraceTimerRef: c,
      onPointerGraceIntentChange: (A) => {
        f.value = A;
      }
    }), (A, L) => (h(), C(s(No), {
      "as-child": "",
      trapped: s(l),
      onMountAutoFocus: P,
      onUnmountAutoFocus: L[7] || (L[7] = (M) => o("closeAutoFocus", M))
    }, {
      default: y(() => [
        F(s($n), {
          "as-child": "",
          "disable-outside-pointer-events": s(i),
          onEscapeKeyDown: L[2] || (L[2] = (M) => o("escapeKeyDown", M)),
          onPointerDownOutside: L[3] || (L[3] = (M) => o("pointerDownOutside", M)),
          onFocusOutside: L[4] || (L[4] = (M) => o("focusOutside", M)),
          onInteractOutside: L[5] || (L[5] = (M) => o("interactOutside", M)),
          onDismiss: L[6] || (L[6] = (M) => o("dismiss"))
        }, {
          default: y(() => [
            F(s(Il), {
              "current-tab-stop-id": g.value,
              "onUpdate:currentTabStopId": L[0] || (L[0] = (M) => g.value = M),
              "as-child": "",
              orientation: "vertical",
              dir: s(r).dir.value,
              loop: s(u),
              onEntryFocus: L[1] || (L[1] = (M) => {
                o("entryFocus", M), s(r).isUsingKeyboardRef.value || M.preventDefault();
              })
            }, {
              default: y(() => [
                F(s(bn), {
                  ref: s(_),
                  role: "menu",
                  as: A.as,
                  "as-child": A.asChild,
                  "aria-orientation": "vertical",
                  "data-radix-menu-content": "",
                  "data-state": s(cr)(s(a).open.value),
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
                  onKeydown: T,
                  onBlur: I,
                  onPointermove: R
                }, {
                  default: y(() => [
                    x(A.$slots, "default")
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
}), Ml = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = br(), { forwardRef: o } = V(), a = E(!1);
    async function r(i) {
      if (!i.defaultPrevented && Kn(i)) {
        if (t.disabled)
          n.onItemLeave(i);
        else if (!n.onItemEnter(i)) {
          const u = i.currentTarget;
          u == null || u.focus({ preventScroll: !0 });
        }
      }
    }
    async function l(i) {
      await te(), !i.defaultPrevented && Kn(i) && n.onItemLeave(i);
    }
    return (i, u) => (h(), C(s(Ko), {
      value: { textValue: i.textValue }
    }, {
      default: y(() => [
        F(s(K), k({
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
            await te(), !(d.defaultPrevented || i.disabled) && (a.value = !0);
          }),
          onBlur: u[1] || (u[1] = async (d) => {
            await te(), !d.defaultPrevented && (a.value = !1);
          })
        }), {
          default: y(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "aria-disabled", "data-disabled", "data-highlighted"])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), _r = /* @__PURE__ */ w({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = t, { forwardRef: a, currentElement: r } = V(), l = ao(), i = br(), u = E(!1);
    async function d() {
      const p = r.value;
      if (!n.disabled && p) {
        const c = new CustomEvent(_c, {
          bubbles: !0,
          cancelable: !0
        });
        o("select", c), await te(), c.defaultPrevented ? u.value = !1 : l.onClose();
      }
    }
    return (p, c) => (h(), C(Ml, k(n, {
      ref: s(a),
      onClick: d,
      onPointerdown: c[0] || (c[0] = () => {
        u.value = !0;
      }),
      onPointerup: c[1] || (c[1] = async (f) => {
        var v;
        await te(), !f.defaultPrevented && (u.value || (v = f.currentTarget) == null || v.click());
      }),
      onKeydown: c[2] || (c[2] = async (f) => {
        const v = s(i).searchRef.value !== "";
        p.disabled || v && f.key === " " || s(Oa).includes(f.key) && (f.currentTarget.click(), f.preventDefault());
      })
    }), {
      default: y(() => [
        x(p.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Ap, Fl] = ie(
  ["MenuCheckboxItem", "MenuRadioItem"],
  "MenuItemIndicatorContext"
), Pp = /* @__PURE__ */ w({
  __name: "MenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = Ap({
      checked: E(!1)
    });
    return (n, o) => (h(), C(s(tt), {
      present: n.forceMount || s(Eo)(s(t).checked.value) || s(t).checked.value === !0
    }, {
      default: y(() => [
        F(s(K), {
          as: n.as,
          "as-child": n.asChild,
          "data-state": s(pr)(s(t).checked.value)
        }, {
          default: y(() => [
            x(n.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child", "data-state"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Ip = /* @__PURE__ */ w({
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
    const n = e, o = t, a = _e(n, "checked", o);
    return Fl({ checked: a }), (r, l) => (h(), C(_r, k({ role: "menuitemcheckbox" }, n, {
      "aria-checked": s(Eo)(s(a)) ? "mixed" : s(a),
      "data-state": s(pr)(s(a)),
      onSelect: l[0] || (l[0] = async (i) => {
        o("select", i), s(Eo)(s(a)) ? a.value = !0 : a.value = !s(a);
      })
    }), {
      default: y(() => [
        x(r.$slots, "default", { checked: s(a) })
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), Mp = /* @__PURE__ */ w({
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
    const n = e, o = t, a = J(n, o), r = Qt(), { forwardRef: l, currentElement: i } = V();
    return to(i), (u, d) => (h(), C(wr, k(s(a), {
      ref: s(l),
      "trap-focus": s(r).open.value,
      "disable-outside-pointer-events": s(r).open.value,
      "disable-outside-scroll": !0,
      onDismiss: d[0] || (d[0] = (p) => s(r).onOpenChange(!1)),
      onFocusOutside: d[1] || (d[1] = Te((p) => o("focusOutside", p), ["prevent"]))
    }), {
      default: y(() => [
        x(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), Fp = /* @__PURE__ */ w({
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
    const n = J(e, t), o = Qt();
    return (a, r) => (h(), C(wr, k(s(n), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      "disable-outside-scroll": !1,
      onDismiss: r[0] || (r[0] = (l) => s(o).onOpenChange(!1))
    }), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Rp = /* @__PURE__ */ w({
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
    const n = J(e, t), o = Qt(), a = ao();
    return (r, l) => (h(), C(s(tt), {
      present: r.forceMount || s(o).open.value
    }, {
      default: y(() => [
        s(a).modal.value ? (h(), C(Mp, q(k({ key: 0 }, { ...r.$attrs, ...s(n) })), {
          default: y(() => [
            x(r.$slots, "default")
          ]),
          _: 3
        }, 16)) : (h(), C(Fp, q(k({ key: 1 }, { ...r.$attrs, ...s(n) })), {
          default: y(() => [
            x(r.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Rl = /* @__PURE__ */ w({
  __name: "MenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(K), k({ role: "group" }, t), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Lp = /* @__PURE__ */ w({
  __name: "MenuLabel",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(K), q(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Vp = /* @__PURE__ */ w({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(On), q(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Np, jp] = ie("MenuRadioGroup"), zp = /* @__PURE__ */ w({
  __name: "MenuRadioGroup",
  props: {
    modelValue: { default: "" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = _e(n, "modelValue", t);
    return jp({
      modelValue: o,
      onValueChange: (a) => {
        o.value = a;
      }
    }), (a, r) => (h(), C(Rl, q(G(n)), {
      default: y(() => [
        x(a.$slots, "default", { modelValue: s(o) })
      ]),
      _: 3
    }, 16));
  }
}), Kp = /* @__PURE__ */ w({
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
    const n = e, o = t, { value: a } = pe(n), r = Np(), l = B(
      () => r.modelValue.value === (a == null ? void 0 : a.value)
    );
    return Fl({ checked: l }), (i, u) => (h(), C(_r, k({ role: "menuitemradio" }, n, {
      "aria-checked": l.value,
      "data-state": s(pr)(l.value),
      onSelect: u[0] || (u[0] = async (d) => {
        o("select", d), s(r).onValueChange(s(a));
      })
    }), {
      default: y(() => [
        x(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), Hp = /* @__PURE__ */ w({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(K), k(t, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Ll, Wp] = ie("MenuSub"), Up = /* @__PURE__ */ w({
  __name: "MenuSub",
  props: {
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = _e(n, "open", t, {
      defaultValue: !1,
      passive: n.open === void 0
    }), a = Qt(), r = E(), l = E();
    return he((i) => {
      (a == null ? void 0 : a.open.value) === !1 && (o.value = !1), i(() => o.value = !1);
    }), Al({
      open: o,
      onOpenChange: (i) => {
        o.value = i;
      },
      content: l,
      onContentChange: (i) => {
        l.value = i;
      }
    }), Wp({
      triggerId: "",
      contentId: "",
      trigger: r,
      onTriggerChange: (i) => {
        r.value = i;
      }
    }), (i, u) => (h(), C(s(Sn), null, {
      default: y(() => [
        x(i.$slots, "default")
      ]),
      _: 3
    }));
  }
}), qp = /* @__PURE__ */ w({
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
    const n = J(e, t), o = Qt(), a = ao(), r = Ll(), { forwardRef: l, currentElement: i } = V();
    return r.contentId || (r.contentId = ke(void 0, "radix-vue-menu-sub-content")), (u, d) => (h(), C(s(tt), {
      present: u.forceMount || s(o).open.value
    }, {
      default: y(() => [
        F(wr, k(s(n), {
          id: s(r).contentId,
          ref: s(l),
          "aria-labelledby": s(r).triggerId,
          align: "start",
          side: s(a).dir.value === "rtl" ? "left" : "right",
          "disable-outside-pointer-events": !1,
          "disable-outside-scroll": !1,
          "trap-focus": !1,
          onOpenAutoFocus: d[0] || (d[0] = Te((p) => {
            var c;
            s(a).isUsingKeyboardRef.value && ((c = s(i)) == null || c.focus());
          }, ["prevent"])),
          onCloseAutoFocus: d[1] || (d[1] = Te(() => {
          }, ["prevent"])),
          onFocusOutside: d[2] || (d[2] = (p) => {
            p.defaultPrevented || p.target !== s(r).trigger.value && s(o).onOpenChange(!1);
          }),
          onEscapeKeyDown: d[3] || (d[3] = (p) => {
            s(a).onClose(), p.preventDefault();
          }),
          onKeydown: d[4] || (d[4] = (p) => {
            var c, f;
            const v = (c = p.currentTarget) == null ? void 0 : c.contains(p.target), m = s($c)[s(a).dir.value].includes(p.key);
            v && m && (s(o).onOpenChange(!1), (f = s(r).trigger.value) == null || f.focus(), p.preventDefault());
          })
        }), {
          default: y(() => [
            x(u.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-labelledby", "side"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Gp = /* @__PURE__ */ w({
  __name: "MenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Qt(), o = ao(), a = Ll(), r = br(), l = E(null);
    a.triggerId || (a.triggerId = ke(void 0, "radix-vue-menu-sub-trigger"));
    function i() {
      l.value && window.clearTimeout(l.value), l.value = null;
    }
    qe(() => {
      i();
    });
    function u(c) {
      !Kn(c) || r.onItemEnter(c) || !t.disabled && !n.open.value && !l.value && (r.onPointerGraceIntentChange(null), l.value = window.setTimeout(() => {
        n.onOpenChange(!0), i();
      }, 100));
    }
    async function d(c) {
      var f, v;
      if (!Kn(c))
        return;
      i();
      const m = (f = n.content.value) == null ? void 0 : f.getBoundingClientRect();
      if (m != null && m.width) {
        const g = (v = n.content.value) == null ? void 0 : v.dataset.side, b = g === "right", _ = b ? -5 : 5, $ = m[b ? "left" : "right"], O = m[b ? "right" : "left"];
        r.onPointerGraceIntentChange({
          area: [
            // Apply a bleed on clientX to ensure that our exit point is
            // consistently within polygon bounds
            { x: c.clientX + _, y: c.clientY },
            { x: $, y: m.top },
            { x: O, y: m.top },
            { x: O, y: m.bottom },
            { x: $, y: m.bottom }
          ],
          side: g
        }), window.clearTimeout(r.pointerGraceTimerRef.value), r.pointerGraceTimerRef.value = window.setTimeout(
          () => r.onPointerGraceIntentChange(null),
          300
        );
      } else {
        if (r.onTriggerLeave(c))
          return;
        r.onPointerGraceIntentChange(null);
      }
    }
    async function p(c) {
      var f;
      const v = r.searchRef.value !== "";
      t.disabled || v && c.key === " " || Oc[o.dir.value].includes(c.key) && (n.onOpenChange(!0), await te(), (f = n.content.value) == null || f.focus(), c.preventDefault());
    }
    return (c, f) => (h(), C(kl, { "as-child": "" }, {
      default: y(() => [
        F(Ml, k(t, {
          id: s(a).triggerId,
          ref: (v) => {
            var m;
            (m = s(a)) == null || m.onTriggerChange(v == null ? void 0 : v.$el);
          },
          "aria-haspopup": "menu",
          "aria-expanded": s(n).open.value,
          "aria-controls": s(a).contentId,
          "data-state": s(cr)(s(n).open.value),
          onClick: f[0] || (f[0] = async (v) => {
            t.disabled || v.defaultPrevented || (v.currentTarget.focus(), s(n).open.value || s(n).onOpenChange(!0));
          }),
          onPointermove: u,
          onPointerleave: d,
          onKeydown: p
        }), {
          default: y(() => [
            x(c.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-expanded", "aria-controls", "data-state"])
      ]),
      _: 3
    }));
  }
}), [Vl, Yp] = ie("DropdownMenuRoot"), Xp = /* @__PURE__ */ w({
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
    V();
    const a = _e(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), r = E(), { modal: l, dir: i } = pe(n), u = jt(i);
    return Yp({
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
    }), (d, p) => (h(), C(s(_p), {
      open: s(a),
      "onUpdate:open": p[0] || (p[0] = (c) => pt(a) ? a.value = c : null),
      dir: s(u),
      modal: s(l)
    }, {
      default: y(() => [
        x(d.$slots, "default", { open: s(a) })
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
}), Zp = /* @__PURE__ */ w({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Vl(), { forwardRef: o, currentElement: a } = V();
    return le(() => {
      n.triggerElement = a;
    }), n.triggerId || (n.triggerId = ke(void 0, "radix-vue-dropdown-menu-trigger")), (r, l) => (h(), C(s(kl), { "as-child": "" }, {
      default: y(() => [
        F(s(K), {
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
            !r.disabled && i.button === 0 && i.ctrlKey === !1 && ((u = s(n)) == null || u.onOpenToggle(), await te(), s(n).open.value && i.preventDefault());
          }),
          onKeydown: l[1] || (l[1] = Rt(
            (i) => {
              r.disabled || (["Enter", " "].includes(i.key) && s(n).onOpenToggle(), i.key === "ArrowDown" && s(n).onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
            },
            ["enter", "space", "arrow-down"]
          ))
        }, {
          default: y(() => [
            x(r.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as-child", "as", "aria-expanded", "aria-controls", "data-disabled", "disabled", "data-state"])
      ]),
      _: 3
    }));
  }
}), Qp = /* @__PURE__ */ w({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(Vp), q(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Jp = /* @__PURE__ */ w({
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
    V();
    const o = Vl(), a = E(!1);
    function r(l) {
      l.defaultPrevented || (a.value || setTimeout(() => {
        var i;
        (i = o.triggerElement.value) == null || i.focus();
      }, 0), a.value = !1, l.preventDefault());
    }
    return o.contentId || (o.contentId = ke(void 0, "radix-vue-dropdown-menu-content")), (l, i) => {
      var u;
      return h(), C(s(Rp), k(s(n), {
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
          var p;
          if (d.defaultPrevented) return;
          const c = d.detail.originalEvent, f = c.button === 0 && c.ctrlKey === !0, v = c.button === 2 || f;
          (!s(o).modal.value || v) && (a.value = !0), (p = s(o).triggerElement.value) != null && p.contains(d.target) && d.preventDefault();
        })
      }), {
        default: y(() => [
          x(l.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby"]);
    };
  }
}), ef = /* @__PURE__ */ w({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = zt(t);
    return V(), (a, r) => (h(), C(s(_r), q(G({ ...n, ...s(o) })), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), tf = /* @__PURE__ */ w({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return V(), (n, o) => (h(), C(s(Rl), q(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), nf = /* @__PURE__ */ w({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return V(), (n, o) => (h(), C(s(Hp), q(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), of = /* @__PURE__ */ w({
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
    const n = e, o = zt(t);
    return V(), (a, r) => (h(), C(s(Ip), q(G({ ...n, ...s(o) })), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Nl = /* @__PURE__ */ w({
  __name: "DropdownMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return V(), (n, o) => (h(), C(s(Pp), q(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), af = /* @__PURE__ */ w({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return V(), (n, o) => (h(), C(s(Lp), q(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), rf = /* @__PURE__ */ w({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = zt(t);
    return V(), (a, r) => (h(), C(s(zp), q(G({ ...n, ...s(o) })), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), sf = /* @__PURE__ */ w({
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
    return V(), (o, a) => (h(), C(s(Kp), q(G(s(n))), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), lf = /* @__PURE__ */ w({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = _e(n, "open", t, {
      passive: n.open === void 0,
      defaultValue: n.defaultOpen ?? !1
    });
    return V(), (a, r) => (h(), C(s(Up), {
      open: s(o),
      "onUpdate:open": r[0] || (r[0] = (l) => pt(o) ? o.value = l : null)
    }, {
      default: y(() => [
        x(a.$slots, "default", { open: s(o) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), uf = /* @__PURE__ */ w({
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
    return V(), (o, a) => (h(), C(s(qp), k(s(n), { style: {
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), df = /* @__PURE__ */ w({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return V(), (n, o) => (h(), C(s(Gp), q(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), cf = /* @__PURE__ */ w({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(e) {
    const t = e;
    return V(), (n, o) => (h(), C(s(K), k(t, {
      onMousedown: o[0] || (o[0] = (a) => {
        !a.defaultPrevented && a.detail > 1 && a.preventDefault();
      })
    }), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [En, pf] = ie("PopoverRoot"), ff = /* @__PURE__ */ w({
  __name: "PopoverRoot",
  props: {
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: !1 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = t, { modal: a } = pe(n), r = _e(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), l = E(), i = E(!1);
    return pf({
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
    }), (u, d) => (h(), C(s(Sn), null, {
      default: y(() => [
        x(u.$slots, "default", { open: s(r) })
      ]),
      _: 3
    }));
  }
}), mf = /* @__PURE__ */ w({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = En(), { forwardRef: o, currentElement: a } = V();
    return le(() => {
      n.triggerElement.value = a.value;
    }), (r, l) => (h(), C(Je(s(n).hasCustomAnchor.value ? s(K) : s(no)), { "as-child": "" }, {
      default: y(() => [
        F(s(K), {
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
            x(r.$slots, "default")
          ]),
          _: 3
        }, 8, ["type", "aria-expanded", "aria-controls", "data-state", "as", "as-child", "onClick"])
      ]),
      _: 3
    }));
  }
}), vf = /* @__PURE__ */ w({
  __name: "PopoverPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(On), q(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), jl = /* @__PURE__ */ w({
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
    const n = e, o = t, a = Ie(n), { forwardRef: r } = V(), l = En();
    return or(), (i, u) => (h(), C(s(No), {
      "as-child": "",
      loop: "",
      trapped: i.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => o("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => o("closeAutoFocus", d))
    }, {
      default: y(() => [
        F(s($n), {
          "as-child": "",
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          onPointerDownOutside: u[0] || (u[0] = (d) => o("pointerDownOutside", d)),
          onInteractOutside: u[1] || (u[1] = (d) => o("interactOutside", d)),
          onEscapeKeyDown: u[2] || (u[2] = (d) => o("escapeKeyDown", d)),
          onFocusOutside: u[3] || (u[3] = (d) => o("focusOutside", d)),
          onDismiss: u[4] || (u[4] = (d) => s(l).onOpenChange(!1))
        }, {
          default: y(() => [
            F(s(bn), k(s(a), {
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
}), gf = /* @__PURE__ */ w({
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
    const n = e, o = t, a = En(), r = E(!1);
    eo(!0);
    const l = J(n, o), { forwardRef: i, currentElement: u } = V();
    return to(u), (d, p) => (h(), C(jl, k(s(l), {
      ref: s(i),
      "trap-focus": s(a).open.value,
      "disable-outside-pointer-events": "",
      onCloseAutoFocus: p[0] || (p[0] = Te(
        (c) => {
          var f;
          o("closeAutoFocus", c), r.value || (f = s(a).triggerElement.value) == null || f.focus();
        },
        ["prevent"]
      )),
      onPointerDownOutside: p[1] || (p[1] = (c) => {
        o("pointerDownOutside", c);
        const f = c.detail.originalEvent, v = f.button === 0 && f.ctrlKey === !0, m = f.button === 2 || v;
        r.value = m;
      }),
      onFocusOutside: p[2] || (p[2] = Te(() => {
      }, ["prevent"]))
    }), {
      default: y(() => [
        x(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), hf = /* @__PURE__ */ w({
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
    const n = e, o = t, a = En(), r = E(!1), l = E(!1), i = J(n, o);
    return (u, d) => (h(), C(jl, k(s(i), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: d[0] || (d[0] = (p) => {
        var c;
        o("closeAutoFocus", p), p.defaultPrevented || (r.value || (c = s(a).triggerElement.value) == null || c.focus(), p.preventDefault()), r.value = !1, l.value = !1;
      }),
      onInteractOutside: d[1] || (d[1] = async (p) => {
        var c;
        o("interactOutside", p), p.defaultPrevented || (r.value = !0, p.detail.originalEvent.type === "pointerdown" && (l.value = !0));
        const f = p.target;
        (c = s(a).triggerElement.value) != null && c.contains(f) && p.preventDefault(), p.detail.originalEvent.type === "focusin" && l.value && p.preventDefault();
      })
    }), {
      default: y(() => [
        x(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), yf = /* @__PURE__ */ w({
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
    const n = e, o = t, a = En(), r = J(n, o), { forwardRef: l } = V();
    return a.contentId || (a.contentId = ke(void 0, "radix-vue-popover-content")), (i, u) => (h(), C(s(tt), {
      present: i.forceMount || s(a).open.value
    }, {
      default: y(() => [
        s(a).modal.value ? (h(), C(gf, k({ key: 0 }, s(r), { ref: s(l) }), {
          default: y(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (h(), C(hf, k({ key: 1 }, s(r), { ref: s(l) }), {
          default: y(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), qy = /* @__PURE__ */ w({
  __name: "PopoverAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    V();
    const n = En();
    return js(() => {
      n.hasCustomAnchor.value = !0;
    }), qe(() => {
      n.hasCustomAnchor.value = !1;
    }), (o, a) => (h(), C(s(no), q(G(t)), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hn = 100, [bf, wf] = ie("ProgressRoot"), xr = (e) => typeof e == "number";
function _f(e, t) {
  return mn(e) || xr(e) && !Number.isNaN(e) && e <= t && e >= 0 ? e : (console.error(`Invalid prop \`value\` of value \`${e}\` supplied to \`ProgressRoot\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Hn} if no \`max\` prop is set)
  - \`null\`  or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`), null);
}
function xf(e) {
  return xr(e) && !Number.isNaN(e) && e > 0 ? e : (console.error(
    `Invalid prop \`max\` of value \`${e}\` supplied to \`ProgressRoot\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Hn}\`.`
  ), Hn);
}
const Cf = /* @__PURE__ */ w({
  __name: "ProgressRoot",
  props: {
    modelValue: {},
    max: { default: Hn },
    getValueLabel: { type: Function, default: (e, t) => `${Math.round(e / t * Hn)}%` },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "update:max"],
  setup(e, { emit: t }) {
    const n = e, o = t;
    V();
    const a = _e(n, "modelValue", o, {
      passive: n.modelValue === void 0
    }), r = _e(n, "max", o, {
      passive: n.max === void 0
    });
    Y(
      () => a.value,
      async (i) => {
        const u = _f(i, n.max);
        u !== i && (await te(), a.value = u);
      },
      { immediate: !0 }
    ), Y(
      () => n.max,
      (i) => {
        const u = xf(n.max);
        u !== i && (r.value = u);
      },
      { immediate: !0 }
    );
    const l = B(() => mn(a.value) ? "indeterminate" : a.value === r.value ? "complete" : "loading");
    return wf({
      modelValue: a,
      max: r,
      progressState: l
    }), (i, u) => (h(), C(s(K), {
      "as-child": i.asChild,
      as: i.as,
      "aria-valuemax": s(r),
      "aria-valuemin": 0,
      "aria-valuenow": xr(s(a)) ? s(a) : void 0,
      "aria-valuetext": i.getValueLabel(s(a), s(r)),
      "aria-label": i.getValueLabel(s(a), s(r)),
      role: "progressbar",
      "data-state": l.value,
      "data-value": s(a) ?? void 0,
      "data-max": s(r)
    }, {
      default: y(() => [
        x(i.$slots, "default", { modelValue: s(a) })
      ]),
      _: 3
    }, 8, ["as-child", "as", "aria-valuemax", "aria-valuenow", "aria-valuetext", "aria-label", "data-state", "data-value", "data-max"]));
  }
}), Of = /* @__PURE__ */ w({
  __name: "ProgressIndicator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = bf();
    return V(), (o, a) => {
      var r;
      return h(), C(s(K), k(t, {
        "data-state": s(n).progressState.value,
        "data-value": ((r = s(n).modelValue) == null ? void 0 : r.value) ?? void 0,
        "data-max": s(n).max.value
      }), {
        default: y(() => [
          x(o.$slots, "default")
        ]),
        _: 3
      }, 16, ["data-state", "data-value", "data-max"]);
    };
  }
}), $f = ["default-value"], Sf = /* @__PURE__ */ w({
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
    const t = e, { value: n } = pe(t), o = E();
    return (a, r) => (h(), C(s(oo), { "as-child": "" }, {
      default: y(() => [
        wn(de("select", k({
          ref_key: "selectElement",
          ref: o
        }, t, {
          "onUpdate:modelValue": r[0] || (r[0] = (l) => pt(n) ? n.value = l : null),
          "default-value": s(n)
        }), [
          x(a.$slots, "default")
        ], 16, $f), [
          [Ui, s(n)]
        ])
      ]),
      _: 3
    }));
  }
}), Bf = {
  key: 0,
  value: ""
}, [Jt, zl] = ie("SelectRoot"), [Ef, Df] = ie("SelectRoot"), Tf = /* @__PURE__ */ w({
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
    const n = e, o = t, a = _e(n, "modelValue", o, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), r = _e(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), l = E(), i = E(), u = E({
      x: 0,
      y: 0
    }), d = E(!1), { required: p, disabled: c, dir: f } = pe(n), v = jt(f);
    zl({
      triggerElement: l,
      onTriggerChange: (_) => {
        l.value = _;
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
      modelValue: a,
      onValueChange: (_) => {
        a.value = _;
      },
      open: r,
      required: p,
      onOpenChange: (_) => {
        r.value = _;
      },
      dir: v,
      triggerPointerDownPosRef: u,
      disabled: c
    });
    const m = Lo(l), g = E(/* @__PURE__ */ new Set()), b = B(() => Array.from(g.value).map((_) => {
      var $;
      return ($ = _.props) == null ? void 0 : $.value;
    }).join(";"));
    return Df({
      onNativeOptionAdd: (_) => {
        g.value.add(_);
      },
      onNativeOptionRemove: (_) => {
        g.value.delete(_);
      }
    }), (_, $) => (h(), C(s(Sn), null, {
      default: y(() => [
        x(_.$slots, "default", {
          modelValue: s(a),
          open: s(r)
        }),
        s(m) ? (h(), C(Sf, k({ key: b.value }, _.$attrs, {
          "aria-hidden": "true",
          tabindex: "-1",
          required: s(p),
          name: _.name,
          autocomplete: _.autocomplete,
          disabled: s(c),
          value: s(a),
          onChange: $[0] || ($[0] = (O) => a.value = O.target.value)
        }), {
          default: y(() => [
            s(a) === void 0 ? (h(), j("option", Bf)) : ge("", !0),
            (h(!0), j(Ee, null, Lt(Array.from(g.value), (O) => (h(), C(Je(O), k({ ref_for: !0 }, O.props, {
              key: O.key ?? ""
            }), null, 16))), 128))
          ]),
          _: 1
        }, 16, ["required", "name", "autocomplete", "disabled", "value"])) : ge("", !0)
      ]),
      _: 3
    }));
  }
}), kf = [" ", "Enter", "ArrowUp", "ArrowDown"], Af = [" ", "Enter"], st = 10;
function Kl(e) {
  return e === "" || mn(e);
}
const Pf = /* @__PURE__ */ w({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Jt(), o = B(() => {
      var v;
      return ((v = n.disabled) == null ? void 0 : v.value) || t.disabled;
    }), { forwardRef: a, currentElement: r } = V();
    n.contentId || (n.contentId = ke(void 0, "radix-vue-select-content")), le(() => {
      n.triggerElement = r;
    });
    const { injectCollection: l } = Cn(), i = l(), { search: u, handleTypeaheadSearch: d, resetTypeahead: p } = ar(i);
    function c() {
      o.value || (n.onOpenChange(!0), p());
    }
    function f(v) {
      c(), n.triggerPointerDownPosRef.value = {
        x: Math.round(v.pageX),
        y: Math.round(v.pageY)
      };
    }
    return (v, m) => (h(), C(s(no), { "as-child": "" }, {
      default: y(() => {
        var g, b, _, $;
        return [
          F(s(K), {
            ref: s(a),
            role: "combobox",
            type: v.as === "button" ? "button" : void 0,
            "aria-controls": s(n).contentId,
            "aria-expanded": s(n).open.value || !1,
            "aria-required": (g = s(n).required) == null ? void 0 : g.value,
            "aria-autocomplete": "none",
            disabled: o.value,
            dir: (b = s(n)) == null ? void 0 : b.dir.value,
            "data-state": (_ = s(n)) != null && _.open.value ? "open" : "closed",
            "data-disabled": o.value ? "" : void 0,
            "data-placeholder": s(Kl)(($ = s(n).modelValue) == null ? void 0 : $.value) ? "" : void 0,
            "as-child": v.asChild,
            as: v.as,
            onClick: m[0] || (m[0] = (O) => {
              var D;
              (D = O == null ? void 0 : O.currentTarget) == null || D.focus();
            }),
            onPointerdown: m[1] || (m[1] = (O) => {
              if (O.pointerType === "touch")
                return O.preventDefault();
              const D = O.target;
              D.hasPointerCapture(O.pointerId) && D.releasePointerCapture(O.pointerId), O.button === 0 && O.ctrlKey === !1 && (f(O), O.preventDefault());
            }),
            onPointerup: m[2] || (m[2] = Te(
              (O) => {
                O.pointerType === "touch" && f(O);
              },
              ["prevent"]
            )),
            onKeydown: m[3] || (m[3] = (O) => {
              const D = s(u) !== "";
              !(O.ctrlKey || O.altKey || O.metaKey) && O.key.length === 1 && D && O.key === " " || (s(d)(O.key), s(kf).includes(O.key) && (c(), O.preventDefault()));
            })
          }, {
            default: y(() => [
              x(v.$slots, "default")
            ]),
            _: 3
          }, 8, ["type", "aria-controls", "aria-expanded", "aria-required", "disabled", "dir", "data-state", "data-disabled", "data-placeholder", "as-child", "as"])
        ];
      }),
      _: 3
    }));
  }
}), If = /* @__PURE__ */ w({
  __name: "SelectPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(On), q(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Cr, Mf] = ie("SelectItemAlignedPosition"), Ff = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, o = t, { injectCollection: a } = Cn(), r = Jt(), l = en(), i = a(), u = E(!1), d = E(!0), p = E(), { forwardRef: c, currentElement: f } = V(), { viewport: v, selectedItem: m, selectedItemText: g, focusSelectedItem: b } = l;
    function _() {
      if (r.triggerElement.value && r.valueElement.value && p.value && f.value && v != null && v.value && m != null && m.value && g != null && g.value) {
        const D = r.triggerElement.value.getBoundingClientRect(), S = f.value.getBoundingClientRect(), P = r.valueElement.value.getBoundingClientRect(), T = g.value.getBoundingClientRect();
        if (r.dir.value !== "rtl") {
          const xe = T.left - S.left, me = P.left - xe, Me = D.left - me, $e = D.width + Me, ye = Math.max($e, S.width), U = window.innerWidth - st, ue = Bo(me, st, Math.max(st, U - ye));
          p.value.style.minWidth = `${$e}px`, p.value.style.left = `${ue}px`;
        } else {
          const xe = S.right - T.right, me = window.innerWidth - P.right - xe, Me = window.innerWidth - D.right - me, $e = D.width + Me, ye = Math.max($e, S.width), U = window.innerWidth - st, ue = Bo(
            me,
            st,
            Math.max(st, U - ye)
          );
          p.value.style.minWidth = `${$e}px`, p.value.style.right = `${ue}px`;
        }
        const I = i.value, R = window.innerHeight - st * 2, A = v.value.scrollHeight, L = window.getComputedStyle(f.value), M = Number.parseInt(
          L.borderTopWidth,
          10
        ), X = Number.parseInt(L.paddingTop, 10), H = Number.parseInt(
          L.borderBottomWidth,
          10
        ), Q = Number.parseInt(
          L.paddingBottom,
          10
        ), W = M + X + A + Q + H, fe = Math.min(
          m.value.offsetHeight * 5,
          W
        ), ee = window.getComputedStyle(v.value), z = Number.parseInt(ee.paddingTop, 10), ae = Number.parseInt(
          ee.paddingBottom,
          10
        ), ne = D.top + D.height / 2 - st, Ne = R - ne, He = m.value.offsetHeight / 2, je = m.value.offsetTop + He, Ye = M + X + je, wt = W - Ye;
        if (Ye <= ne) {
          const xe = m.value === I[I.length - 1];
          p.value.style.bottom = "0px";
          const me = f.value.clientHeight - v.value.offsetTop - v.value.offsetHeight, Me = Math.max(
            Ne,
            He + (xe ? ae : 0) + me + H
          ), $e = Ye + Me;
          p.value.style.height = `${$e}px`;
        } else {
          const xe = m.value === I[0];
          p.value.style.top = "0px";
          const me = Math.max(
            ne,
            M + v.value.offsetTop + (xe ? z : 0) + He
          ) + wt;
          p.value.style.height = `${me}px`, v.value.scrollTop = Ye - ne + v.value.offsetTop;
        }
        p.value.style.margin = `${st}px 0`, p.value.style.minHeight = `${fe}px`, p.value.style.maxHeight = `${R}px`, o("placed"), requestAnimationFrame(() => u.value = !0);
      }
    }
    const $ = E("");
    le(async () => {
      await te(), _(), f.value && ($.value = window.getComputedStyle(f.value).zIndex);
    });
    function O(D) {
      D && d.value === !0 && (_(), b == null || b(), d.value = !1);
    }
    return Mf({
      contentWrapper: p,
      shouldExpandOnScrollRef: u,
      onScrollButtonChange: O
    }), (D, S) => (h(), j("div", {
      ref_key: "contentWrapperElement",
      ref: p,
      style: kt({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: $.value
      })
    }, [
      F(s(K), k({
        ref: s(c),
        style: {
          // When we get the height of the content, it includes borders. If we were to set
          // the height without having `boxSizing: 'border-box'` it would be too big.
          boxSizing: "border-box",
          // We need to ensure the content doesn't get taller than the wrapper
          maxHeight: "100%"
        }
      }, { ...D.$attrs, ...n }), {
        default: y(() => [
          x(D.$slots, "default")
        ]),
        _: 3
      }, 16)
    ], 4));
  }
}), Rf = /* @__PURE__ */ w({
  __name: "SelectPopperPosition",
  props: {
    side: {},
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: { default: st },
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Ie(e);
    return (n, o) => (h(), C(s(bn), k(s(t), { style: {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-select-content-available-width": "var(--radix-popper-available-width)",
      "--radix-select-content-available-height": "var(--radix-popper-available-height)",
      "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Dn = {
  onViewportChange: () => {
  },
  itemTextRefCallback: () => {
  },
  itemRefCallback: () => {
  }
}, [en, Lf] = ie("SelectContent"), Vf = /* @__PURE__ */ w({
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
    const n = e, o = t, a = Jt();
    or(), eo(n.bodyLock);
    const { createCollection: r } = Cn(), l = E();
    to(l);
    const i = r(l), { search: u, handleTypeaheadSearch: d } = ar(i), p = E(), c = E(), f = E(), v = E(!1), m = E(!1);
    function g() {
      c.value && l.value && $a([c.value, l.value]);
    }
    Y(v, () => {
      g();
    });
    const { onOpenChange: b, triggerPointerDownPosRef: _ } = a;
    he((S) => {
      if (!l.value)
        return;
      let P = { x: 0, y: 0 };
      const T = (R) => {
        var A, L;
        P = {
          x: Math.abs(
            Math.round(R.pageX) - (((A = _.value) == null ? void 0 : A.x) ?? 0)
          ),
          y: Math.abs(
            Math.round(R.pageY) - (((L = _.value) == null ? void 0 : L.y) ?? 0)
          )
        };
      }, I = (R) => {
        var A;
        R.pointerType !== "touch" && (P.x <= 10 && P.y <= 10 ? R.preventDefault() : (A = l.value) != null && A.contains(R.target) || b(!1), document.removeEventListener("pointermove", T), _.value = null);
      };
      _.value !== null && (document.addEventListener("pointermove", T), document.addEventListener("pointerup", I, {
        capture: !0,
        once: !0
      })), S(() => {
        document.removeEventListener("pointermove", T), document.removeEventListener("pointerup", I, {
          capture: !0
        });
      });
    });
    function $(S) {
      const P = S.ctrlKey || S.altKey || S.metaKey;
      if (S.key === "Tab" && S.preventDefault(), !P && S.key.length === 1 && d(S.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(S.key)) {
        let T = i.value;
        if (["ArrowUp", "End"].includes(S.key) && (T = T.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(S.key)) {
          const I = S.target, R = T.indexOf(I);
          T = T.slice(R + 1);
        }
        setTimeout(() => $a(T)), S.preventDefault();
      }
    }
    const O = B(() => n.position === "popper" ? n : {}), D = Ie(O.value);
    return Lf({
      content: l,
      viewport: p,
      onViewportChange: (S) => {
        p.value = S;
      },
      itemRefCallback: (S, P, T) => {
        var I, R;
        const A = !m.value && !T;
        (((I = a.modelValue) == null ? void 0 : I.value) !== void 0 && ((R = a.modelValue) == null ? void 0 : R.value) === P || A) && (c.value = S, A && (m.value = !0));
      },
      selectedItem: c,
      selectedItemText: f,
      onItemLeave: () => {
        var S;
        (S = l.value) == null || S.focus();
      },
      itemTextRefCallback: (S, P, T) => {
        var I, R;
        const A = !m.value && !T;
        (((I = a.modelValue) == null ? void 0 : I.value) !== void 0 && ((R = a.modelValue) == null ? void 0 : R.value) === P || A) && (f.value = S);
      },
      focusSelectedItem: g,
      position: n.position,
      isPositioned: v,
      searchRef: u
    }), (S, P) => (h(), C(s(No), {
      "as-child": "",
      onMountAutoFocus: P[6] || (P[6] = Te(() => {
      }, ["prevent"])),
      onUnmountAutoFocus: P[7] || (P[7] = (T) => {
        var I;
        o("closeAutoFocus", T), !T.defaultPrevented && ((I = s(a).triggerElement.value) == null || I.focus({ preventScroll: !0 }), T.preventDefault());
      })
    }, {
      default: y(() => [
        F(s($n), {
          "as-child": "",
          "disable-outside-pointer-events": "",
          onFocusOutside: P[2] || (P[2] = Te(() => {
          }, ["prevent"])),
          onDismiss: P[3] || (P[3] = (T) => s(a).onOpenChange(!1)),
          onEscapeKeyDown: P[4] || (P[4] = (T) => o("escapeKeyDown", T)),
          onPointerDownOutside: P[5] || (P[5] = (T) => o("pointerDownOutside", T))
        }, {
          default: y(() => [
            (h(), C(Je(
              S.position === "popper" ? Rf : Ff
            ), k({ ...S.$attrs, ...s(D) }, {
              id: s(a).contentId,
              ref: (T) => {
                l.value = s(et)(T);
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
              onContextmenu: P[0] || (P[0] = Te(() => {
              }, ["prevent"])),
              onPlaced: P[1] || (P[1] = (T) => v.value = !0),
              onKeydown: $
            }), {
              default: y(() => [
                x(S.$slots, "default")
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
}), Nf = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "SelectProvider",
  props: {
    context: {}
  },
  setup(e) {
    return zl(e.context), (t, n) => x(t.$slots, "default");
  }
}), jf = { key: 1 }, zf = /* @__PURE__ */ w({
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
    const n = e, o = J(n, t), a = Jt(), r = E();
    le(() => {
      r.value = new DocumentFragment();
    });
    const l = E(), i = B(() => n.forceMount || a.open.value);
    return (u, d) => {
      var p;
      return i.value ? (h(), C(s(tt), {
        key: 0,
        ref_key: "presenceRef",
        ref: l,
        present: !0
      }, {
        default: y(() => [
          F(Vf, q(G({ ...s(o), ...u.$attrs })), {
            default: y(() => [
              x(u.$slots, "default")
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 512)) : !((p = l.value) != null && p.present) && r.value ? (h(), j("div", jf, [
        (h(), C(Yn, { to: r.value }, [
          F(Nf, { context: s(a) }, {
            default: y(() => [
              x(u.$slots, "default")
            ]),
            _: 3
          }, 8, ["context"])
        ], 8, ["to"]))
      ])) : ge("", !0);
    };
  }
}), Kf = /* @__PURE__ */ w({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(K), k({ "aria-hidden": "true" }, t), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Hl, Hf] = ie("SelectItem"), Wf = /* @__PURE__ */ w({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { disabled: n } = pe(t), o = Jt(), a = en(Dn), { forwardRef: r, currentElement: l } = V(), i = B(() => {
      var g;
      return ((g = o.modelValue) == null ? void 0 : g.value) === t.value;
    }), u = E(!1), d = E(t.textValue ?? ""), p = ke(void 0, "radix-vue-select-item-text");
    async function c(g) {
      await te(), !(g != null && g.defaultPrevented) && (n.value || (o.onValueChange(t.value), o.onOpenChange(!1)));
    }
    async function f(g) {
      var b;
      await te(), !g.defaultPrevented && (n.value ? (b = a.onItemLeave) == null || b.call(a) : g.currentTarget.focus({ preventScroll: !0 }));
    }
    async function v(g) {
      var b;
      await te(), !g.defaultPrevented && g.currentTarget === Pe() && ((b = a.onItemLeave) == null || b.call(a));
    }
    async function m(g) {
      var b;
      await te(), !(g.defaultPrevented || ((b = a.searchRef) == null ? void 0 : b.value) !== "" && g.key === " ") && (Af.includes(g.key) && c(), g.key === " " && g.preventDefault());
    }
    if (t.value === "")
      throw new Error(
        "A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return le(() => {
      l.value && a.itemRefCallback(
        l.value,
        t.value,
        t.disabled
      );
    }), Hf({
      value: t.value,
      disabled: n,
      textId: p,
      isSelected: i,
      onItemTextChange: (g) => {
        d.value = ((d.value || (g == null ? void 0 : g.textContent)) ?? "").trim();
      }
    }), (g, b) => (h(), C(s(K), {
      ref: s(r),
      role: "option",
      "data-radix-vue-collection-item": "",
      "aria-labelledby": s(p),
      "data-highlighted": u.value ? "" : void 0,
      "aria-selected": i.value,
      "data-state": i.value ? "checked" : "unchecked",
      "aria-disabled": s(n) || void 0,
      "data-disabled": s(n) ? "" : void 0,
      tabindex: s(n) ? void 0 : -1,
      as: g.as,
      "as-child": g.asChild,
      onFocus: b[0] || (b[0] = (_) => u.value = !0),
      onBlur: b[1] || (b[1] = (_) => u.value = !1),
      onPointerup: c,
      onPointerdown: b[2] || (b[2] = (_) => {
        _.currentTarget.focus({ preventScroll: !0 });
      }),
      onTouchend: b[3] || (b[3] = Te(() => {
      }, ["prevent", "stop"])),
      onPointermove: f,
      onPointerleave: v,
      onKeydown: m
    }, {
      default: y(() => [
        x(g.$slots, "default")
      ]),
      _: 3
    }, 8, ["aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "tabindex", "as", "as-child"]));
  }
}), Uf = /* @__PURE__ */ w({
  __name: "SelectItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = Hl();
    return (o, a) => s(n).isSelected.value ? (h(), C(s(K), k({
      key: 0,
      "aria-hidden": "true"
    }, t), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16)) : ge("", !0);
  }
}), [qf, Gf] = ie("SelectGroup"), Yf = /* @__PURE__ */ w({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = ke(void 0, "radix-vue-select-group");
    return Gf({ id: n }), (o, a) => (h(), C(s(K), k({ role: "group" }, t, { "aria-labelledby": s(n) }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), Xf = /* @__PURE__ */ w({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, n = qf({ id: "" });
    return (o, a) => (h(), C(s(K), k(t, {
      id: s(n).id
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Wl = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = Jt(), o = en(Dn), a = Ef(), r = Hl(), { forwardRef: l, currentElement: i } = V(), u = B(() => {
      var d;
      return ze("option", {
        key: r.value,
        value: r.value,
        disabled: r.disabled.value,
        textContent: (d = i.value) == null ? void 0 : d.textContent
      });
    });
    return le(() => {
      i.value && (r.onItemTextChange(i.value), o.itemTextRefCallback(
        i.value,
        r.value,
        r.disabled.value
      ), a.onNativeOptionAdd(u.value));
    }), _n(() => {
      a.onNativeOptionRemove(u.value);
    }), (d, p) => (h(), j(Ee, null, [
      F(s(K), k({
        id: s(r).textId,
        ref: s(l)
      }, { ...t, ...d.$attrs }, { "data-item-text": "" }), {
        default: y(() => [
          x(d.$slots, "default")
        ]),
        _: 3
      }, 16, ["id"]),
      s(r).isSelected.value && s(n).valueElement.value && !s(n).valueElementHasChildren.value ? (h(), C(Yn, {
        key: 0,
        to: s(n).valueElement.value
      }, [
        x(d.$slots, "default")
      ], 8, ["to"])) : ge("", !0)
    ], 64));
  }
}), Zf = /* @__PURE__ */ w({
  __name: "SelectViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { nonce: n } = pe(t), o = fp(n), a = en(Dn), r = a.position === "item-aligned" ? Cr() : void 0, { forwardRef: l, currentElement: i } = V();
    le(() => {
      a == null || a.onViewportChange(i.value);
    });
    const u = E(0);
    function d(p) {
      const c = p.currentTarget, { shouldExpandOnScrollRef: f, contentWrapper: v } = r ?? {};
      if (f != null && f.value && v != null && v.value) {
        const m = Math.abs(u.value - c.scrollTop);
        if (m > 0) {
          const g = window.innerHeight - st * 2, b = Number.parseFloat(
            v.value.style.minHeight
          ), _ = Number.parseFloat(v.value.style.height), $ = Math.max(b, _);
          if ($ < g) {
            const O = $ + m, D = Math.min(g, O), S = O - D;
            v.value.style.height = `${D}px`, v.value.style.bottom === "0px" && (c.scrollTop = S > 0 ? S : 0, v.value.style.justifyContent = "flex-end");
          }
        }
      }
      u.value = c.scrollTop;
    }
    return (p, c) => (h(), j(Ee, null, [
      F(s(K), k({
        ref: s(l),
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
          x(p.$slots, "default")
        ]),
        _: 3
      }, 16),
      F(s(K), {
        as: "style",
        nonce: s(o)
      }, {
        default: y(() => [
          Le(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-radix-select-viewport]::-webkit-scrollbar { display: none; } ")
        ]),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
}), Ul = /* @__PURE__ */ w({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(e, { emit: t }) {
    const n = t, { injectCollection: o } = Cn(), a = o(), r = en(Dn), l = E(null);
    function i() {
      l.value !== null && (window.clearInterval(l.value), l.value = null);
    }
    he(() => {
      const p = a.value.find(
        (c) => c === Pe()
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
      (p = r.onItemLeave) == null || p.call(r), l.value === null && (l.value = window.setInterval(() => {
        n("autoScroll");
      }, 50));
    }
    return _n(() => i()), (p, c) => {
      var f;
      return h(), C(s(K), k({
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
          x(p.$slots, "default")
        ]),
        _: 3
      }, 16);
    };
  }
}), Qf = /* @__PURE__ */ w({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = en(Dn), n = t.position === "item-aligned" ? Cr() : void 0, { forwardRef: o, currentElement: a } = V(), r = E(!1);
    return he((l) => {
      var i, u;
      if ((i = t.viewport) != null && i.value && (u = t.isPositioned) != null && u.value) {
        let d = function() {
          r.value = p.scrollTop > 0;
        };
        const p = t.viewport.value;
        d(), p.addEventListener("scroll", d), l(() => p.removeEventListener("scroll", d));
      }
    }), Y(a, () => {
      a.value && (n == null || n.onScrollButtonChange(a.value));
    }), (l, i) => r.value ? (h(), C(Ul, {
      key: 0,
      ref: s(o),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: u, selectedItem: d } = s(t);
        u != null && u.value && d != null && d.value && (u.value.scrollTop = u.value.scrollTop - d.value.offsetHeight);
      })
    }, {
      default: y(() => [
        x(l.$slots, "default")
      ]),
      _: 3
    }, 512)) : ge("", !0);
  }
}), Jf = /* @__PURE__ */ w({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = en(Dn), n = t.position === "item-aligned" ? Cr() : void 0, { forwardRef: o, currentElement: a } = V(), r = E(!1);
    return he((l) => {
      var i, u;
      if ((i = t.viewport) != null && i.value && (u = t.isPositioned) != null && u.value) {
        let d = function() {
          const c = p.scrollHeight - p.clientHeight;
          r.value = Math.ceil(p.scrollTop) < c;
        };
        const p = t.viewport.value;
        d(), p.addEventListener("scroll", d), l(() => p.removeEventListener("scroll", d));
      }
    }), Y(a, () => {
      a.value && (n == null || n.onScrollButtonChange(a.value));
    }), (l, i) => r.value ? (h(), C(Ul, {
      key: 0,
      ref: s(o),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: u, selectedItem: d } = s(t);
        u != null && u.value && d != null && d.value && (u.value.scrollTop = u.value.scrollTop + d.value.offsetHeight);
      })
    }, {
      default: y(() => [
        x(l.$slots, "default")
      ]),
      _: 3
    }, 512)) : ge("", !0);
  }
}), em = /* @__PURE__ */ w({
  __name: "SelectValue",
  props: {
    placeholder: { default: "" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const { forwardRef: t, currentElement: n } = V(), o = Jt(), a = Na();
    return js(() => {
      var r;
      const l = !!Fo((r = a == null ? void 0 : a.default) == null ? void 0 : r.call(a)).length;
      o.onValueElementHasChildrenChange(l);
    }), le(() => {
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
          s(Kl)((i = s(o).modelValue) == null ? void 0 : i.value) ? (h(), j(Ee, { key: 0 }, [
            Le(We(r.placeholder), 1)
          ], 64)) : x(r.$slots, "default", { key: 1 })
        ];
      }),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), tm = /* @__PURE__ */ w({
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
        x(t.$slots, "default", {}, () => [
          Le("▼")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function nm(e = [], t, n) {
  const o = [...e];
  return o[n] = t, o.sort((a, r) => a - r);
}
function ql(e, t, n) {
  const o = 100 / (n - t) * (e - t);
  return Bo(o, 0, 100);
}
function om(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
function am(e, t) {
  if (e.length === 1)
    return 0;
  const n = e.map((a) => Math.abs(a - t)), o = Math.min(...n);
  return n.indexOf(o);
}
function rm(e, t, n) {
  const o = e / 2, a = Or([0, 50], [0, o]);
  return (o - a(t) * n) * n;
}
function sm(e) {
  return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
function lm(e, t) {
  if (t > 0) {
    const n = sm(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function Or(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const o = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + o * (n - e[0]);
  };
}
function im(e) {
  return (String(e).split(".")[1] || "").length;
}
function um(e, t) {
  const n = 10 ** t;
  return Math.round(e * n) / n;
}
const Gl = ["PageUp", "PageDown"], Yl = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Xl = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, [Zl, Ql] = ie(["SliderVertical", "SliderHorizontal"]), Jl = /* @__PURE__ */ w({
  __name: "SliderImpl",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  emits: ["slideStart", "slideMove", "slideEnd", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = Ho();
    return (r, l) => (h(), C(s(K), k({ "data-slider-impl": "" }, n, {
      onKeydown: l[0] || (l[0] = (i) => {
        i.key === "Home" ? (o("homeKeyDown", i), i.preventDefault()) : i.key === "End" ? (o("endKeyDown", i), i.preventDefault()) : s(Gl).concat(s(Yl)).includes(i.key) && (o("stepKeyDown", i), i.preventDefault());
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
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), dm = /* @__PURE__ */ w({
  __name: "SliderHorizontal",
  props: {
    dir: {},
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const n = e, o = t, { max: a, min: r, dir: l, inverted: i } = pe(n), { forwardRef: u, currentElement: d } = V(), p = E(), c = B(() => (l == null ? void 0 : l.value) === "ltr" && !i.value || (l == null ? void 0 : l.value) !== "ltr" && i.value);
    function f(v) {
      const m = p.value || d.value.getBoundingClientRect(), g = [0, m.width], b = c.value ? [r.value, a.value] : [a.value, r.value], _ = Or(g, b);
      return p.value = m, _(v - m.left);
    }
    return Ql({
      startEdge: c.value ? "left" : "right",
      endEdge: c.value ? "right" : "left",
      direction: c.value ? 1 : -1,
      size: "width"
    }), (v, m) => (h(), C(Jl, {
      ref: s(u),
      dir: s(l),
      "data-orientation": "horizontal",
      style: {
        "--radix-slider-thumb-transform": "translateX(-50%)"
      },
      onSlideStart: m[0] || (m[0] = (g) => {
        const b = f(g.clientX);
        o("slideStart", b);
      }),
      onSlideMove: m[1] || (m[1] = (g) => {
        const b = f(g.clientX);
        o("slideMove", b);
      }),
      onSlideEnd: m[2] || (m[2] = () => {
        p.value = void 0, o("slideEnd");
      }),
      onStepKeyDown: m[3] || (m[3] = (g) => {
        const b = c.value ? "from-left" : "from-right", _ = s(Xl)[b].includes(g.key);
        o("stepKeyDown", g, _ ? -1 : 1);
      }),
      onEndKeyDown: m[4] || (m[4] = (g) => o("endKeyDown", g)),
      onHomeKeyDown: m[5] || (m[5] = (g) => o("homeKeyDown", g))
    }, {
      default: y(() => [
        x(v.$slots, "default")
      ]),
      _: 3
    }, 8, ["dir"]));
  }
}), cm = /* @__PURE__ */ w({
  __name: "SliderVertical",
  props: {
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const n = e, o = t, { max: a, min: r, inverted: l } = pe(n), { forwardRef: i, currentElement: u } = V(), d = E(), p = B(() => !l.value);
    function c(f) {
      const v = d.value || u.value.getBoundingClientRect(), m = [0, v.height], g = p.value ? [a.value, r.value] : [r.value, a.value], b = Or(m, g);
      return d.value = v, b(f - v.top);
    }
    return Ql({
      startEdge: p.value ? "bottom" : "top",
      endEdge: p.value ? "top" : "bottom",
      size: "height",
      direction: p.value ? 1 : -1
    }), (f, v) => (h(), C(Jl, {
      ref: s(i),
      "data-orientation": "vertical",
      style: {
        "--radix-slider-thumb-transform": "translateY(50%)"
      },
      onSlideStart: v[0] || (v[0] = (m) => {
        const g = c(m.clientY);
        o("slideStart", g);
      }),
      onSlideMove: v[1] || (v[1] = (m) => {
        const g = c(m.clientY);
        o("slideMove", g);
      }),
      onSlideEnd: v[2] || (v[2] = () => {
        d.value = void 0, o("slideEnd");
      }),
      onStepKeyDown: v[3] || (v[3] = (m) => {
        const g = p.value ? "from-bottom" : "from-top", b = s(Xl)[g].includes(m.key);
        o("stepKeyDown", m, b ? -1 : 1);
      }),
      onEndKeyDown: v[4] || (v[4] = (m) => o("endKeyDown", m)),
      onHomeKeyDown: v[5] || (v[5] = (m) => o("homeKeyDown", m))
    }, {
      default: y(() => [
        x(f.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
}), pm = ["value", "name", "disabled", "step"], [Ho, fm] = ie("SliderRoot"), mm = /* @__PURE__ */ w({
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
    const n = e, o = t, { min: a, max: r, step: l, minStepsBetweenThumbs: i, orientation: u, disabled: d, dir: p } = pe(n), c = jt(p), { forwardRef: f, currentElement: v } = V(), m = Lo(v);
    gr();
    const g = _e(n, "modelValue", o, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), b = E(0), _ = E(g.value);
    function $(T) {
      const I = am(g.value, T);
      S(T, I);
    }
    function O(T) {
      S(T, b.value);
    }
    function D() {
      const T = _.value[b.value];
      g.value[b.value] !== T && o("valueCommit", qi(g.value));
    }
    function S(T, I, { commit: R } = { commit: !1 }) {
      var A;
      const L = im(l.value), M = um(Math.round((T - a.value) / l.value) * l.value + a.value, L), X = Bo(M, a.value, r.value), H = nm(g.value, X, I);
      if (lm(H, i.value * l.value)) {
        b.value = H.indexOf(X);
        const Q = String(H) !== String(g.value);
        Q && R && o("valueCommit", H), Q && ((A = P.value[b.value]) == null || A.focus(), g.value = H);
      }
    }
    const P = E([]);
    return fm({
      modelValue: g,
      valueIndexToChangeRef: b,
      thumbElements: P,
      orientation: u,
      min: a,
      max: r,
      disabled: d
    }), (T, I) => (h(), j(Ee, null, [
      F(s(hr), null, {
        default: y(() => [
          (h(), C(Je(s(u) === "horizontal" ? dm : cm), k(T.$attrs, {
            ref: s(f),
            "as-child": T.asChild,
            as: T.as,
            min: s(a),
            max: s(r),
            dir: s(c),
            inverted: T.inverted,
            "aria-disabled": s(d),
            "data-disabled": s(d) ? "" : void 0,
            onPointerdown: I[0] || (I[0] = () => {
              s(d) || (_.value = s(g));
            }),
            onSlideStart: I[1] || (I[1] = (R) => !s(d) && $(R)),
            onSlideMove: I[2] || (I[2] = (R) => !s(d) && O(R)),
            onSlideEnd: I[3] || (I[3] = (R) => !s(d) && D()),
            onHomeKeyDown: I[4] || (I[4] = (R) => !s(d) && S(s(a), 0, { commit: !0 })),
            onEndKeyDown: I[5] || (I[5] = (R) => !s(d) && S(s(r), s(g).length - 1, { commit: !0 })),
            onStepKeyDown: I[6] || (I[6] = (R, A) => {
              if (!s(d)) {
                const L = s(Gl).includes(R.key) || R.shiftKey && s(Yl).includes(R.key) ? 10 : 1, M = b.value, X = s(g)[M], H = s(l) * L * A;
                S(X + H, M, { commit: !0 });
              }
            })
          }), {
            default: y(() => [
              x(T.$slots, "default", { modelValue: s(g) })
            ]),
            _: 3
          }, 16, ["as-child", "as", "min", "max", "dir", "inverted", "aria-disabled", "data-disabled"]))
        ]),
        _: 3
      }),
      s(m) ? (h(!0), j(Ee, { key: 0 }, Lt(s(g), (R, A) => (h(), j("input", {
        key: A,
        value: R,
        type: "number",
        style: { display: "none" },
        name: T.name ? T.name + (s(g).length > 1 ? "[]" : "") : void 0,
        disabled: s(d),
        step: s(l)
      }, null, 8, pm))), 128)) : ge("", !0)
    ], 64));
  }
}), vm = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "SliderThumbImpl",
  props: {
    index: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Ho(), o = Zl(), { forwardRef: a, currentElement: r } = V(), l = B(() => {
      var v, m;
      return (m = (v = n.modelValue) == null ? void 0 : v.value) == null ? void 0 : m[t.index];
    }), i = B(() => l.value === void 0 ? 0 : ql(l.value, n.min.value ?? 0, n.max.value ?? 100)), u = B(() => {
      var v, m;
      return om(t.index, ((m = (v = n.modelValue) == null ? void 0 : v.value) == null ? void 0 : m.length) ?? 0);
    }), d = wl(r), p = B(() => d[o.size].value), c = B(() => p.value ? rm(p.value, i.value, o.direction) : 0), f = nr();
    return le(() => {
      n.thumbElements.value.push(r.value);
    }), qe(() => {
      const v = n.thumbElements.value.findIndex((m) => m === r.value) ?? -1;
      n.thumbElements.value.splice(v, 1);
    }), (v, m) => (h(), C(s(Ko), null, {
      default: y(() => [
        F(s(K), k(v.$attrs, {
          ref: s(a),
          role: "slider",
          "data-radix-vue-collection-item": "",
          tabindex: s(n).disabled.value ? void 0 : 0,
          "aria-label": v.$attrs["aria-label"] || u.value,
          "data-disabled": s(n).disabled.value ? "" : void 0,
          "data-orientation": s(n).orientation.value,
          "aria-valuenow": l.value,
          "aria-valuemin": s(n).min.value,
          "aria-valuemax": s(n).max.value,
          "aria-orientation": s(n).orientation.value,
          "as-child": v.asChild,
          as: v.as,
          style: {
            transform: "var(--radix-slider-thumb-transform)",
            position: "absolute",
            [s(o).startEdge]: `calc(${i.value}% + ${c.value}px)`,
            /**
             * There will be no value on initial render while we work out the index so we hide thumbs
             * without a value, otherwise SSR will render them in the wrong position before they
             * snap into the correct position during hydration which would be visually jarring for
             * slower connections.
             */
            display: !s(f) && l.value === void 0 ? "none" : void 0
          },
          onFocus: m[0] || (m[0] = () => {
            s(n).valueIndexToChangeRef.value = v.index;
          })
        }), {
          default: y(() => [
            x(v.$slots, "default")
          ]),
          _: 3
        }, 16, ["tabindex", "aria-label", "data-disabled", "data-orientation", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-orientation", "as-child", "as", "style"])
      ]),
      _: 3
    }));
  }
}), gm = /* @__PURE__ */ w({
  __name: "SliderThumb",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { getItems: n } = yr(), { forwardRef: o, currentElement: a } = V(), r = B(() => a.value ? n().findIndex((l) => l.ref === a.value) : -1);
    return (l, i) => (h(), C(vm, k({ ref: s(o) }, t, { index: r.value }), {
      default: y(() => [
        x(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["index"]));
  }
}), hm = /* @__PURE__ */ w({
  __name: "SliderTrack",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = Ho();
    return V(), (n, o) => (h(), C(s(K), {
      "as-child": n.asChild,
      as: n.as,
      "data-disabled": s(t).disabled.value ? "" : void 0,
      "data-orientation": s(t).orientation.value
    }, {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "data-disabled", "data-orientation"]));
  }
}), ym = /* @__PURE__ */ w({
  __name: "SliderRange",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = Ho(), n = Zl();
    V();
    const o = B(() => {
      var l, i;
      return (i = (l = t.modelValue) == null ? void 0 : l.value) == null ? void 0 : i.map(
        (u) => ql(u, t.min.value, t.max.value)
      );
    }), a = B(() => t.modelValue.value.length > 1 ? Math.min(...o.value) : 0), r = B(() => 100 - Math.max(...o.value));
    return (l, i) => (h(), C(s(K), {
      "data-disabled": s(t).disabled.value ? "" : void 0,
      "data-orientation": s(t).orientation.value,
      "as-child": l.asChild,
      as: l.as,
      style: kt({
        [s(n).startEdge]: `${a.value}%`,
        [s(n).endEdge]: `${r.value}%`
      })
    }, {
      default: y(() => [
        x(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-disabled", "data-orientation", "as-child", "as", "style"]));
  }
});
function bm() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
bm();
const wm = ["name", "disabled", "required", "value", "checked", "data-state", "data-disabled"], [_m, xm] = ie("SwitchRoot"), Cm = /* @__PURE__ */ w({
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
    const n = e, o = t, { disabled: a } = pe(n), r = _e(n, "checked", o, {
      defaultValue: n.defaultChecked,
      passive: n.checked === void 0
    });
    function l() {
      a.value || (r.value = !r.value);
    }
    const { forwardRef: i, currentElement: u } = V(), d = Lo(u), p = B(() => {
      var c;
      return n.id && u.value ? (c = document.querySelector(`[for="${n.id}"]`)) == null ? void 0 : c.innerText : void 0;
    });
    return xm({
      checked: r,
      toggleCheck: l,
      disabled: a
    }), (c, f) => (h(), j(Ee, null, [
      F(s(K), k(c.$attrs, {
        id: c.id,
        ref: s(i),
        role: "switch",
        type: c.as === "button" ? "button" : void 0,
        value: c.value,
        "aria-label": c.$attrs["aria-label"] || p.value,
        "aria-checked": s(r),
        "aria-required": c.required,
        "data-state": s(r) ? "checked" : "unchecked",
        "data-disabled": s(a) ? "" : void 0,
        "as-child": c.asChild,
        as: c.as,
        disabled: s(a),
        onClick: l,
        onKeydown: Rt(Te(l, ["prevent"]), ["enter"])
      }), {
        default: y(() => [
          x(c.$slots, "default", { checked: s(r) })
        ]),
        _: 3
      }, 16, ["id", "type", "value", "aria-label", "aria-checked", "aria-required", "data-state", "data-disabled", "as-child", "as", "disabled", "onKeydown"]),
      s(d) ? (h(), j("input", {
        key: 0,
        type: "checkbox",
        name: c.name,
        tabindex: "-1",
        "aria-hidden": "true",
        disabled: s(a),
        required: c.required,
        value: c.value,
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
      }, null, 8, wm)) : ge("", !0)
    ], 64));
  }
}), Om = /* @__PURE__ */ w({
  __name: "SwitchThumb",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = _m();
    return V(), (n, o) => {
      var a;
      return h(), C(s(K), {
        "data-state": (a = s(t).checked) != null && a.value ? "checked" : "unchecked",
        "data-disabled": s(t).disabled.value ? "" : void 0,
        "as-child": n.asChild,
        as: n.as
      }, {
        default: y(() => [
          x(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-state", "data-disabled", "as-child", "as"]);
    };
  }
}), [$r, $m] = ie("TabsRoot"), Sm = /* @__PURE__ */ w({
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
    const n = e, o = t, { orientation: a, dir: r } = pe(n), l = jt(r);
    V();
    const i = _e(n, "modelValue", o, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), u = E();
    return $m({
      modelValue: i,
      changeModelValue: (d) => {
        i.value = d;
      },
      orientation: a,
      dir: l,
      activationMode: n.activationMode,
      baseId: ke(void 0, "radix-vue-tabs"),
      tabsList: u
    }), (d, p) => (h(), C(s(K), {
      dir: s(l),
      "data-orientation": s(a),
      "as-child": d.asChild,
      as: d.as
    }, {
      default: y(() => [
        x(d.$slots, "default", { modelValue: s(i) })
      ]),
      _: 3
    }, 8, ["dir", "data-orientation", "as-child", "as"]));
  }
}), Bm = /* @__PURE__ */ w({
  __name: "TabsList",
  props: {
    loop: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { loop: n } = pe(t), { forwardRef: o, currentElement: a } = V(), r = $r();
    return r.tabsList = a, (l, i) => (h(), C(s(Il), {
      "as-child": "",
      orientation: s(r).orientation.value,
      dir: s(r).dir.value,
      loop: s(n)
    }, {
      default: y(() => [
        F(s(K), {
          ref: s(o),
          role: "tablist",
          "as-child": l.asChild,
          as: l.as,
          "aria-orientation": s(r).orientation.value
        }, {
          default: y(() => [
            x(l.$slots, "default")
          ]),
          _: 3
        }, 8, ["as-child", "as", "aria-orientation"])
      ]),
      _: 3
    }, 8, ["orientation", "dir", "loop"]));
  }
});
function ei(e, t) {
  return `${e}-trigger-${t}`;
}
function ti(e, t) {
  return `${e}-content-${t}`;
}
const Em = /* @__PURE__ */ w({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n } = V(), o = $r(), a = B(() => ei(o.baseId, t.value)), r = B(() => ti(o.baseId, t.value)), l = B(() => t.value === o.modelValue.value), i = E(l.value);
    return le(() => {
      requestAnimationFrame(() => {
        i.value = !1;
      });
    }), (u, d) => (h(), C(s(tt), {
      present: l.value,
      "force-mount": ""
    }, {
      default: y(({ present: p }) => [
        F(s(K), {
          id: r.value,
          ref: s(n),
          "as-child": u.asChild,
          as: u.as,
          role: "tabpanel",
          "data-state": l.value ? "active" : "inactive",
          "data-orientation": s(o).orientation.value,
          "aria-labelledby": a.value,
          hidden: !p.value,
          tabindex: "0",
          style: kt({
            animationDuration: i.value ? "0s" : void 0
          })
        }, {
          default: y(() => [
            u.forceMount || l.value ? x(u.$slots, "default", { key: 0 }) : ge("", !0)
          ]),
          _: 2
        }, 1032, ["id", "as-child", "as", "data-state", "data-orientation", "aria-labelledby", "hidden", "style"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Dm = /* @__PURE__ */ w({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, { forwardRef: n } = V(), o = $r(), a = B(() => ei(o.baseId, t.value)), r = B(() => ti(o.baseId, t.value)), l = B(() => t.value === o.modelValue.value);
    return (i, u) => (h(), C(s(Tp), {
      "as-child": "",
      focusable: !i.disabled,
      active: l.value
    }, {
      default: y(() => [
        F(s(K), {
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
          onMousedown: u[0] || (u[0] = Te((d) => {
            !i.disabled && d.ctrlKey === !1 ? s(o).changeModelValue(i.value) : d.preventDefault();
          }, ["left"])),
          onKeydown: u[1] || (u[1] = Rt((d) => s(o).changeModelValue(i.value), ["enter", "space"])),
          onFocus: u[2] || (u[2] = () => {
            const d = s(o).activationMode !== "manual";
            !l.value && !i.disabled && d && s(o).changeModelValue(i.value);
          })
        }, {
          default: y(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as", "as-child", "aria-selected", "aria-controls", "data-state", "disabled", "data-disabled", "data-orientation"])
      ]),
      _: 3
    }, 8, ["focusable", "active"]));
  }
}), [Wo, Tm] = ie("ToastProvider"), km = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "ToastProvider",
  props: {
    label: { default: "Notification" },
    duration: { default: 5e3 },
    swipeDirection: { default: "right" },
    swipeThreshold: { default: 50 }
  },
  setup(e) {
    const t = e, { label: n, duration: o, swipeDirection: a, swipeThreshold: r } = pe(t), l = E(), i = E(0), u = E(!1), d = E(!1);
    if (t.label && typeof t.label == "string" && !t.label.trim()) {
      const p = "Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`.";
      throw new Error(p);
    }
    return Tm({
      label: n,
      duration: o,
      swipeDirection: a,
      swipeThreshold: r,
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
    }), (p, c) => x(p.$slots, "default");
  }
}), Am = "toast.swipeStart", Pm = "toast.swipeMove", Im = "toast.swipeCancel", Mm = "toast.swipeEnd", Ba = "toast.viewportPause", Ea = "toast.viewportResume";
function vo(e, t, n) {
  const o = n.originalEvent.currentTarget, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, { once: !0 }), o.dispatchEvent(a);
}
function ds(e, t, n = 0) {
  const o = Math.abs(e.x), a = Math.abs(e.y), r = o > a;
  return t === "left" || t === "right" ? r && o > n : !r && a > n;
}
function Fm(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function ni(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((n) => {
    if (n.nodeType === n.TEXT_NODE && n.textContent && t.push(n.textContent), Fm(n)) {
      const o = n.ariaHidden || n.hidden || n.style.display === "none", a = n.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (a) {
          const r = n.dataset.radixToastAnnounceAlt;
          r && t.push(r);
        } else
          t.push(...ni(n));
    }
  }), t;
}
const Rm = /* @__PURE__ */ w({
  __name: "ToastAnnounce",
  setup(e) {
    const t = Wo(), n = bd(1e3), o = E(!1);
    return vl(() => {
      o.value = !0;
    }), (a, r) => s(n) || o.value ? (h(), C(s(oo), { key: 0 }, {
      default: y(() => [
        Le(We(s(t).label.value) + " ", 1),
        x(a.$slots, "default")
      ]),
      _: 3
    })) : ge("", !0);
  }
}), [Lm, Vm] = ie("ToastRoot"), Nm = /* @__PURE__ */ w({
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
    const n = e, o = t, { forwardRef: a, currentElement: r } = V(), l = Wo(), i = E(null), u = E(null), d = B(
      () => typeof n.duration == "number" ? n.duration : l.duration.value
    ), p = E(0), c = E(d.value), f = E(0), v = E(d.value), m = vl(() => {
      const $ = (/* @__PURE__ */ new Date()).getTime() - p.value;
      v.value = Math.max(c.value - $, 0);
    }, { fpsLimit: 60 });
    function g($) {
      $ <= 0 || $ === Number.POSITIVE_INFINITY || ht && (window.clearTimeout(f.value), p.value = (/* @__PURE__ */ new Date()).getTime(), f.value = window.setTimeout(b, $));
    }
    function b() {
      var $, O;
      ($ = r.value) != null && $.contains(Pe()) && ((O = l.viewport.value) == null || O.focus()), l.isClosePausedRef.value = !1, o("close");
    }
    const _ = B(() => r.value ? ni(r.value) : null);
    if (n.type && !["foreground", "background"].includes(n.type)) {
      const $ = "Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.";
      throw new Error($);
    }
    return he(($) => {
      const O = l.viewport.value;
      if (O) {
        const D = () => {
          g(c.value), m.resume(), o("resume");
        }, S = () => {
          const P = (/* @__PURE__ */ new Date()).getTime() - p.value;
          c.value = c.value - P, window.clearTimeout(f.value), m.pause(), o("pause");
        };
        return O.addEventListener(Ba, S), O.addEventListener(Ea, D), () => {
          O.removeEventListener(Ba, S), O.removeEventListener(Ea, D);
        };
      }
    }), Y(() => [n.open, d.value], () => {
      c.value = d.value, n.open && !l.isClosePausedRef.value && g(d.value);
    }, { immediate: !0 }), tr("Escape", ($) => {
      o("escapeKeyDown", $), $.defaultPrevented || (l.isFocusedToastEscapeKeyDownRef.value = !0, b());
    }), le(() => {
      l.onToastAdd();
    }), qe(() => {
      l.onToastRemove();
    }), Vm({ onClose: b }), ($, O) => (h(), j(Ee, null, [
      _.value ? (h(), C(Rm, {
        key: 0,
        role: "alert",
        "aria-live": $.type === "foreground" ? "assertive" : "polite",
        "aria-atomic": "true"
      }, {
        default: y(() => [
          Le(We(_.value), 1)
        ]),
        _: 1
      }, 8, ["aria-live"])) : ge("", !0),
      s(l).viewport.value ? (h(), C(Yn, {
        key: 1,
        to: s(l).viewport.value
      }, [
        F(s(K), k({
          ref: s(a),
          role: "alert",
          "aria-live": "off",
          "aria-atomic": "true",
          tabindex: "0",
          "data-radix-vue-collection-item": ""
        }, $.$attrs, {
          as: $.as,
          "as-child": $.asChild,
          "data-state": $.open ? "open" : "closed",
          "data-swipe-direction": s(l).swipeDirection.value,
          style: { userSelect: "none", touchAction: "none" },
          onPointerdown: O[0] || (O[0] = Te((D) => {
            i.value = { x: D.clientX, y: D.clientY };
          }, ["left"])),
          onPointermove: O[1] || (O[1] = (D) => {
            if (!i.value) return;
            const S = D.clientX - i.value.x, P = D.clientY - i.value.y, T = !!u.value, I = ["left", "right"].includes(s(l).swipeDirection.value), R = ["left", "up"].includes(s(l).swipeDirection.value) ? Math.min : Math.max, A = I ? R(0, S) : 0, L = I ? 0 : R(0, P), M = D.pointerType === "touch" ? 10 : 2, X = { x: A, y: L }, H = { originalEvent: D, delta: X };
            T ? (u.value = X, s(vo)(s(Pm), (Q) => o("swipeMove", Q), H)) : s(ds)(X, s(l).swipeDirection.value, M) ? (u.value = X, s(vo)(s(Am), (Q) => o("swipeStart", Q), H), D.target.setPointerCapture(D.pointerId)) : (Math.abs(S) > M || Math.abs(P) > M) && (i.value = null);
          }),
          onPointerup: O[2] || (O[2] = (D) => {
            const S = u.value, P = D.target;
            if (P.hasPointerCapture(D.pointerId) && P.releasePointerCapture(D.pointerId), u.value = null, i.value = null, S) {
              const T = D.currentTarget, I = { originalEvent: D, delta: S };
              s(ds)(S, s(l).swipeDirection.value, s(l).swipeThreshold.value) ? s(vo)(s(Mm), (R) => o("swipeEnd", R), I) : s(vo)(s(Im), (R) => o("swipeCancel", R), I), T == null || T.addEventListener("click", (R) => R.preventDefault(), {
                once: !0
              });
            }
          })
        }), {
          default: y(() => [
            x($.$slots, "default", {
              remaining: v.value,
              duration: d.value
            })
          ]),
          _: 3
        }, 16, ["as", "as-child", "data-state", "data-swipe-direction"])
      ], 8, ["to"])) : ge("", !0)
    ], 64));
  }
}), jm = /* @__PURE__ */ w({
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
    const n = e, o = t, { forwardRef: a } = V(), r = _e(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    });
    return (l, i) => (h(), C(s(tt), {
      present: l.forceMount || s(r)
    }, {
      default: y(() => [
        F(Nm, k({
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
            const { x: d, y: p } = u.detail.delta, c = u.currentTarget;
            c.setAttribute("data-swipe", "move"), c.style.setProperty("--radix-toast-swipe-move-x", `${d}px`), c.style.setProperty("--radix-toast-swipe-move-y", `${p}px`);
          }),
          onSwipeCancel: i[6] || (i[6] = (u) => {
            const d = u.currentTarget;
            d.setAttribute("data-swipe", "cancel"), d.style.removeProperty("--radix-toast-swipe-move-x"), d.style.removeProperty("--radix-toast-swipe-move-y"), d.style.removeProperty("--radix-toast-swipe-end-x"), d.style.removeProperty("--radix-toast-swipe-end-y");
          }),
          onSwipeEnd: i[7] || (i[7] = (u) => {
            const { x: d, y: p } = u.detail.delta, c = u.currentTarget;
            c.setAttribute("data-swipe", "end"), c.style.removeProperty("--radix-toast-swipe-move-x"), c.style.removeProperty("--radix-toast-swipe-move-y"), c.style.setProperty("--radix-toast-swipe-end-x", `${d}px`), c.style.setProperty("--radix-toast-swipe-end-y", `${p}px`), r.value = !1;
          })
        }), {
          default: y(({ remaining: u, duration: d }) => [
            x(l.$slots, "default", {
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
}), oi = /* @__PURE__ */ w({
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
        x(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-radix-toast-announce-alt"]));
  }
}), ai = /* @__PURE__ */ w({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Lm(), { forwardRef: o } = V();
    return (a, r) => (h(), C(oi, { "as-child": "" }, {
      default: y(() => [
        F(s(K), k(t, {
          ref: s(o),
          type: a.as === "button" ? "button" : void 0,
          onClick: r[0] || (r[0] = (l) => s(n).onClose())
        }), {
          default: y(() => [
            x(a.$slots, "default")
          ]),
          _: 3
        }, 16, ["type"])
      ]),
      _: 3
    }));
  }
}), zm = /* @__PURE__ */ w({
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
    return (n, o) => n.altText ? (h(), C(oi, {
      key: 0,
      "alt-text": n.altText,
      "as-child": ""
    }, {
      default: y(() => [
        F(ai, {
          ref: s(t),
          as: n.as,
          "as-child": n.asChild
        }, {
          default: y(() => [
            x(n.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child"])
      ]),
      _: 3
    }, 8, ["alt-text"])) : ge("", !0);
  }
}), cs = /* @__PURE__ */ w({
  __name: "FocusProxy",
  emits: ["focusFromOutsideViewport"],
  setup(e, { emit: t }) {
    const n = t, o = Wo();
    return (a, r) => (h(), C(s(oo), {
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
        x(a.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Km = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "ToastViewport",
  props: {
    hotkey: { default: () => ["F8"] },
    label: { type: [String, Function], default: "Notifications ({hotkey})" },
    asChild: { type: Boolean },
    as: { default: "ol" }
  },
  setup(e) {
    const t = e, { hotkey: n, label: o } = pe(t), { forwardRef: a, currentElement: r } = V(), { createCollection: l } = Cn(), i = l(r), u = Wo(), d = B(() => u.toastCount.value > 0), p = E(), c = E(), f = B(() => n.value.join("+").replace(/Key/g, "").replace(/Digit/g, ""));
    tr(n.value, () => {
      r.value.focus();
    }), le(() => {
      u.onViewportChange(r.value);
    }), he((m) => {
      const g = r.value;
      if (d.value && g) {
        const b = () => {
          if (!u.isClosePausedRef.value) {
            const S = new CustomEvent(Ba);
            g.dispatchEvent(S), u.isClosePausedRef.value = !0;
          }
        }, _ = () => {
          if (u.isClosePausedRef.value) {
            const S = new CustomEvent(Ea);
            g.dispatchEvent(S), u.isClosePausedRef.value = !1;
          }
        }, $ = (S) => {
          !g.contains(S.relatedTarget) && _();
        }, O = () => {
          g.contains(Pe()) || _();
        }, D = (S) => {
          var P, T, I;
          const R = S.altKey || S.ctrlKey || S.metaKey;
          if (S.key === "Tab" && !R) {
            const A = Pe(), L = S.shiftKey;
            if (S.target === g && L) {
              (P = p.value) == null || P.focus();
              return;
            }
            const M = v({ tabbingDirection: L ? "backwards" : "forwards" }), X = M.findIndex((H) => H === A);
            Co(M.slice(X + 1)) ? S.preventDefault() : L ? (T = p.value) == null || T.focus() : (I = c.value) == null || I.focus();
          }
        };
        g.addEventListener("focusin", b), g.addEventListener("focusout", $), g.addEventListener("pointermove", b), g.addEventListener("pointerleave", O), g.addEventListener("keydown", D), window.addEventListener("blur", b), window.addEventListener("focus", _), m(() => {
          g.removeEventListener("focusin", b), g.removeEventListener("focusout", $), g.removeEventListener("pointermove", b), g.removeEventListener("pointerleave", O), g.removeEventListener("keydown", D), window.removeEventListener("blur", b), window.removeEventListener("focus", _);
        });
      }
    });
    function v({ tabbingDirection: m }) {
      const g = i.value.map((b) => {
        const _ = [b, ...dr(b)];
        return m === "forwards" ? _ : _.reverse();
      });
      return (m === "forwards" ? g.reverse() : g).flat();
    }
    return (m, g) => (h(), C(s(mc), {
      role: "region",
      "aria-label": typeof s(o) == "string" ? s(o).replace("{hotkey}", f.value) : s(o)(f.value),
      tabindex: "-1",
      style: kt({
        // incase list has size when empty (e.g. padding), we remove pointer events so
        // it doesn't prevent interactions with page elements that it overlays
        pointerEvents: d.value ? void 0 : "none"
      })
    }, {
      default: y(() => [
        d.value ? (h(), C(cs, {
          key: 0,
          ref: (b) => {
            p.value = s(et)(b);
          },
          onFocusFromOutsideViewport: g[0] || (g[0] = () => {
            const b = v({
              tabbingDirection: "forwards"
            });
            s(Co)(b);
          })
        }, null, 512)) : ge("", !0),
        F(s(K), k({
          ref: s(a),
          tabindex: "-1",
          as: m.as,
          "as-child": m.asChild
        }, m.$attrs), {
          default: y(() => [
            x(m.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child"]),
        d.value ? (h(), C(cs, {
          key: 1,
          ref: (b) => {
            c.value = s(et)(b);
          },
          onFocusFromOutsideViewport: g[1] || (g[1] = () => {
            const b = v({
              tabbingDirection: "backwards"
            });
            s(Co)(b);
          })
        }, null, 512)) : ge("", !0)
      ]),
      _: 3
    }, 8, ["aria-label", "style"]));
  }
}), Hm = /* @__PURE__ */ w({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return V(), (n, o) => (h(), C(s(K), q(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Wm = /* @__PURE__ */ w({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return V(), (n, o) => (h(), C(s(K), q(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ri = "tooltip.open", [Sr, Um] = ie("TooltipProvider"), qm = /* @__PURE__ */ w({
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
    V();
    const u = E(!0), d = E(!1), { start: p, stop: c } = er(() => {
      u.value = !0;
    }, o, { immediate: !1 });
    return Um({
      isOpenDelayed: u,
      delayDuration: n,
      onOpen() {
        c(), u.value = !1;
      },
      onClose() {
        p();
      },
      isPointerInTransitRef: d,
      disableHoverableContent: a,
      disableClosingTrigger: r,
      disabled: i,
      ignoreNonKeyboardFocus: l
    }), (f, v) => x(f.$slots, "default");
  }
}), [Uo, Gm] = ie("TooltipRoot"), Ym = /* @__PURE__ */ w({
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
    V();
    const a = Sr(), r = B(() => n.disableHoverableContent ?? a.disableHoverableContent.value), l = B(() => n.disableClosingTrigger ?? a.disableClosingTrigger.value), i = B(() => n.disabled ?? a.disabled.value), u = B(() => n.delayDuration ?? a.delayDuration.value), d = B(() => n.ignoreNonKeyboardFocus ?? a.ignoreNonKeyboardFocus.value), p = _e(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    });
    Y(p, (O) => {
      a.onClose && (O ? (a.onOpen(), document.dispatchEvent(new CustomEvent(ri))) : a.onClose());
    });
    const c = E(!1), f = E(), v = B(() => p.value ? c.value ? "delayed-open" : "instant-open" : "closed"), { start: m, stop: g } = er(() => {
      c.value = !0, p.value = !0;
    }, u, { immediate: !1 });
    function b() {
      g(), c.value = !1, p.value = !0;
    }
    function _() {
      g(), p.value = !1;
    }
    function $() {
      m();
    }
    return Gm({
      contentId: "",
      open: p,
      stateAttribute: v,
      trigger: f,
      onTriggerChange(O) {
        f.value = O;
      },
      onTriggerEnter() {
        a.isOpenDelayed.value ? $() : b();
      },
      onTriggerLeave() {
        r.value ? _() : g();
      },
      onOpen: b,
      onClose: _,
      disableHoverableContent: r,
      disableClosingTrigger: l,
      disabled: i,
      ignoreNonKeyboardFocus: d
    }), (O, D) => (h(), C(s(Sn), null, {
      default: y(() => [
        x(O.$slots, "default", { open: s(p) })
      ]),
      _: 3
    }));
  }
}), Xm = /* @__PURE__ */ w({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Uo(), o = Sr();
    n.contentId || (n.contentId = ke(void 0, "radix-vue-tooltip-content"));
    const { forwardRef: a, currentElement: r } = V(), l = E(!1), i = E(!1), u = B(() => n.disabled.value ? {} : {
      click: g,
      focus: v,
      pointermove: c,
      pointerleave: f,
      pointerdown: p,
      blur: m
    });
    le(() => {
      n.onTriggerChange(r.value);
    });
    function d() {
      setTimeout(() => {
        l.value = !1;
      }, 1);
    }
    function p() {
      l.value = !0, document.addEventListener("pointerup", d, { once: !0 });
    }
    function c(b) {
      b.pointerType !== "touch" && !i.value && !o.isPointerInTransitRef.value && (n.onTriggerEnter(), i.value = !0);
    }
    function f() {
      n.onTriggerLeave(), i.value = !1;
    }
    function v(b) {
      var _, $;
      l.value || n.ignoreNonKeyboardFocus.value && !(($ = (_ = b.target).matches) != null && $.call(_, ":focus-visible")) || n.onOpen();
    }
    function m() {
      n.onClose();
    }
    function g() {
      n.disableClosingTrigger.value || n.onClose();
    }
    return (b, _) => (h(), C(s(no), { "as-child": "" }, {
      default: y(() => [
        F(s(K), k({
          ref: s(a),
          "aria-describedby": s(n).open.value ? s(n).contentId : void 0,
          "data-state": s(n).stateAttribute.value,
          as: b.as,
          "as-child": t.asChild,
          "data-grace-area-trigger": ""
        }, zi(u.value)), {
          default: y(() => [
            x(b.$slots, "default")
          ]),
          _: 3
        }, 16, ["aria-describedby", "data-state", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), si = /* @__PURE__ */ w({
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
    const n = e, o = t, a = Uo(), { forwardRef: r } = V(), l = Na(), i = B(() => {
      var p;
      return (p = l.default) == null ? void 0 : p.call(l);
    }), u = B(() => {
      var p;
      if (n.ariaLabel)
        return n.ariaLabel;
      let c = "";
      function f(v) {
        typeof v.children == "string" && v.type !== za ? c += v.children : Array.isArray(v.children) && v.children.forEach((m) => f(m));
      }
      return (p = i.value) == null || p.forEach((v) => f(v)), c;
    }), d = B(() => {
      const { ariaLabel: p, ...c } = n;
      return c;
    });
    return le(() => {
      yn(window, "scroll", (p) => {
        const c = p.target;
        c != null && c.contains(a.trigger.value) && a.onClose();
      }), yn(window, ri, a.onClose);
    }), (p, c) => (h(), C(s($n), {
      "as-child": "",
      "disable-outside-pointer-events": !1,
      onEscapeKeyDown: c[0] || (c[0] = (f) => o("escapeKeyDown", f)),
      onPointerDownOutside: c[1] || (c[1] = (f) => {
        var v;
        s(a).disableClosingTrigger.value && (v = s(a).trigger.value) != null && v.contains(f.target) && f.preventDefault(), o("pointerDownOutside", f);
      }),
      onFocusOutside: c[2] || (c[2] = Te(() => {
      }, ["prevent"])),
      onDismiss: c[3] || (c[3] = (f) => s(a).onClose())
    }, {
      default: y(() => [
        F(s(bn), k({
          ref: s(r),
          "data-state": s(a).stateAttribute.value
        }, { ...p.$attrs, ...d.value }, { style: {
          "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
          "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
          "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
        } }), {
          default: y(() => [
            x(p.$slots, "default"),
            F(s(oo), {
              id: s(a).contentId,
              role: "tooltip"
            }, {
              default: y(() => [
                Le(We(u.value), 1)
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
}), Zm = /* @__PURE__ */ w({
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
    const t = Ie(e), { forwardRef: n, currentElement: o } = V(), { trigger: a, onClose: r } = Uo(), l = Sr(), { isPointerInTransit: i, onPointerExit: u } = Ad(a, o);
    return l.isPointerInTransitRef = i, u(() => {
      r();
    }), (d, p) => (h(), C(si, k({ ref: s(n) }, s(t)), {
      default: y(() => [
        x(d.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Qm = /* @__PURE__ */ w({
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
    const n = e, o = t, a = Uo(), r = J(n, o), { forwardRef: l } = V();
    return (i, u) => (h(), C(s(tt), {
      present: i.forceMount || s(a).open.value
    }, {
      default: y(() => [
        (h(), C(Je(s(a).disableHoverableContent.value ? si : Zm), k({ ref: s(l) }, s(r)), {
          default: y(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Jm = /* @__PURE__ */ w({
  __name: "TooltipPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(On), q(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function li(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (t = 0; t < a; t++) e[t] && (n = li(e[t])) && (o && (o += " "), o += n);
  } else for (n in e) e[n] && (o && (o += " "), o += n);
  return o;
}
function ii() {
  for (var e, t, n = 0, o = "", a = arguments.length; n < a; n++) (e = arguments[n]) && (t = li(e)) && (o && (o += " "), o += t);
  return o;
}
const Br = "-", ev = (e) => {
  const t = nv(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (l) => {
      const i = l.split(Br);
      return i[0] === "" && i.length !== 1 && i.shift(), ui(i, t) || tv(l);
    },
    getConflictingClassGroupIds: (l, i) => {
      const u = n[l] || [];
      return i && o[l] ? [...u, ...o[l]] : u;
    }
  };
}, ui = (e, t) => {
  var l;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], o = t.nextPart.get(n), a = o ? ui(e.slice(1), o) : void 0;
  if (a)
    return a;
  if (t.validators.length === 0)
    return;
  const r = e.join(Br);
  return (l = t.validators.find(({
    validator: i
  }) => i(r))) == null ? void 0 : l.classGroupId;
}, ps = /^\[(.+)\]$/, tv = (e) => {
  if (ps.test(e)) {
    const t = ps.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, nv = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return av(Object.entries(e.classGroups), n).forEach(([r, l]) => {
    Da(l, o, r, t);
  }), o;
}, Da = (e, t, n, o) => {
  e.forEach((a) => {
    if (typeof a == "string") {
      const r = a === "" ? t : fs(t, a);
      r.classGroupId = n;
      return;
    }
    if (typeof a == "function") {
      if (ov(a)) {
        Da(a(o), t, n, o);
        return;
      }
      t.validators.push({
        validator: a,
        classGroupId: n
      });
      return;
    }
    Object.entries(a).forEach(([r, l]) => {
      Da(l, fs(t, r), n, o);
    });
  });
}, fs = (e, t) => {
  let n = e;
  return t.split(Br).forEach((o) => {
    n.nextPart.has(o) || n.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(o);
  }), n;
}, ov = (e) => e.isThemeGetter, av = (e, t) => t ? e.map(([n, o]) => {
  const a = o.map((r) => typeof r == "string" ? t + r : typeof r == "object" ? Object.fromEntries(Object.entries(r).map(([l, i]) => [t + l, i])) : r);
  return [n, a];
}) : e, rv = (e) => {
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
}, di = "!", sv = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, o = t.length === 1, a = t[0], r = t.length, l = (i) => {
    const u = [];
    let d = 0, p = 0, c;
    for (let b = 0; b < i.length; b++) {
      let _ = i[b];
      if (d === 0) {
        if (_ === a && (o || i.slice(b, b + r) === t)) {
          u.push(i.slice(p, b)), p = b + r;
          continue;
        }
        if (_ === "/") {
          c = b;
          continue;
        }
      }
      _ === "[" ? d++ : _ === "]" && d--;
    }
    const f = u.length === 0 ? i : i.substring(p), v = f.startsWith(di), m = v ? f.substring(1) : f, g = c && c > p ? c - p : void 0;
    return {
      modifiers: u,
      hasImportantModifier: v,
      baseClassName: m,
      maybePostfixModifierPosition: g
    };
  };
  return n ? (i) => n({
    className: i,
    parseClassName: l
  }) : l;
}, lv = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((o) => {
    o[0] === "[" ? (t.push(...n.sort(), o), n = []) : n.push(o);
  }), t.push(...n.sort()), t;
}, iv = (e) => ({
  cache: rv(e.cacheSize),
  parseClassName: sv(e),
  ...ev(e)
}), uv = /\s+/, dv = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: o,
    getConflictingClassGroupIds: a
  } = t, r = [], l = e.trim().split(uv);
  let i = "";
  for (let u = l.length - 1; u >= 0; u -= 1) {
    const d = l[u], {
      modifiers: p,
      hasImportantModifier: c,
      baseClassName: f,
      maybePostfixModifierPosition: v
    } = n(d);
    let m = !!v, g = o(m ? f.substring(0, v) : f);
    if (!g) {
      if (!m) {
        i = d + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (g = o(f), !g) {
        i = d + (i.length > 0 ? " " + i : i);
        continue;
      }
      m = !1;
    }
    const b = lv(p).join(":"), _ = c ? b + di : b, $ = _ + g;
    if (r.includes($))
      continue;
    r.push($);
    const O = a(g, m);
    for (let D = 0; D < O.length; ++D) {
      const S = O[D];
      r.push(_ + S);
    }
    i = d + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function cv() {
  let e = 0, t, n, o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = ci(t)) && (o && (o += " "), o += n);
  return o;
}
const ci = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = ci(e[o])) && (n && (n += " "), n += t);
  return n;
};
function pv(e, ...t) {
  let n, o, a, r = l;
  function l(u) {
    const d = t.reduce((p, c) => c(p), e());
    return n = iv(d), o = n.cache.get, a = n.cache.set, r = i, i(u);
  }
  function i(u) {
    const d = o(u);
    if (d)
      return d;
    const p = dv(u, n);
    return a(u, p), p;
  }
  return function() {
    return r(cv.apply(null, arguments));
  };
}
const we = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, pi = /^\[(?:([a-z-]+):)?(.+)\]$/i, fv = /^\d+\/\d+$/, mv = /* @__PURE__ */ new Set(["px", "full", "screen"]), vv = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, gv = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, hv = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, yv = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, bv = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, $t = (e) => vn(e) || mv.has(e) || fv.test(e), Pt = (e) => Tn(e, "length", Bv), vn = (e) => !!e && !Number.isNaN(Number(e)), ua = (e) => Tn(e, "number", vn), In = (e) => !!e && Number.isInteger(Number(e)), wv = (e) => e.endsWith("%") && vn(e.slice(0, -1)), se = (e) => pi.test(e), It = (e) => vv.test(e), _v = /* @__PURE__ */ new Set(["length", "size", "percentage"]), xv = (e) => Tn(e, _v, fi), Cv = (e) => Tn(e, "position", fi), Ov = /* @__PURE__ */ new Set(["image", "url"]), $v = (e) => Tn(e, Ov, Dv), Sv = (e) => Tn(e, "", Ev), Mn = () => !0, Tn = (e, t, n) => {
  const o = pi.exec(e);
  return o ? o[1] ? typeof t == "string" ? o[1] === t : t.has(o[1]) : n(o[2]) : !1;
}, Bv = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  gv.test(e) && !hv.test(e)
), fi = () => !1, Ev = (e) => yv.test(e), Dv = (e) => bv.test(e), Tv = () => {
  const e = we("colors"), t = we("spacing"), n = we("blur"), o = we("brightness"), a = we("borderColor"), r = we("borderRadius"), l = we("borderSpacing"), i = we("borderWidth"), u = we("contrast"), d = we("grayscale"), p = we("hueRotate"), c = we("invert"), f = we("gap"), v = we("gradientColorStops"), m = we("gradientColorStopPositions"), g = we("inset"), b = we("margin"), _ = we("opacity"), $ = we("padding"), O = we("saturate"), D = we("scale"), S = we("sepia"), P = we("skew"), T = we("space"), I = we("translate"), R = () => ["auto", "contain", "none"], A = () => ["auto", "hidden", "clip", "visible", "scroll"], L = () => ["auto", se, t], M = () => [se, t], X = () => ["", $t, Pt], H = () => ["auto", vn, se], Q = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], W = () => ["solid", "dashed", "dotted", "double", "none"], fe = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ee = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], z = () => ["", "0", se], ae = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], ne = () => [vn, se];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Mn],
      spacing: [$t, Pt],
      blur: ["none", "", It, se],
      brightness: ne(),
      borderColor: [e],
      borderRadius: ["none", "", "full", It, se],
      borderSpacing: M(),
      borderWidth: X(),
      contrast: ne(),
      grayscale: z(),
      hueRotate: ne(),
      invert: z(),
      gap: M(),
      gradientColorStops: [e],
      gradientColorStopPositions: [wv, Pt],
      inset: L(),
      margin: L(),
      opacity: ne(),
      padding: M(),
      saturate: ne(),
      scale: ne(),
      sepia: z(),
      skew: ne(),
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
        aspect: ["auto", "square", "video", se]
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
        columns: [It]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": ae()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": ae()
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
        object: [...Q(), se]
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
        overscroll: R()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": R()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": R()
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
        z: ["auto", In, se]
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
        flex: ["1", "auto", "initial", "none", se]
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
        order: ["first", "last", "none", In, se]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Mn]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", In, se]
        }, se]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": H()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": H()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Mn]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [In, se]
        }, se]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": H()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": H()
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
        "auto-cols": ["auto", "min", "max", "fr", se]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", se]
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
        justify: ["normal", ...ee()]
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
        content: ["normal", ...ee(), "baseline"]
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
        "place-content": [...ee(), "baseline"]
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
        "space-x": [T]
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
        "space-y": [T]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", se, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [se, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [se, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [It]
        }, It]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [se, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [se, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [se, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [se, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", It, Pt]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", ua]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Mn]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", se]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", vn, ua]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", $t, se]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", se]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", se]
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
        decoration: ["auto", "from-font", $t, Pt]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", $t, se]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", se]
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
        content: ["none", se]
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
        bg: [...Q(), Cv]
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
        bg: ["auto", "cover", "contain", xv]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, $v]
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
        from: [m]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [m]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [m]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [v]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [v]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [v]
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
        outline: ["", ...W()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [$t, se]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [$t, Pt]
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
        ring: X()
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
        "ring-offset": [$t, Pt]
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
        shadow: ["", "inner", "none", It, Sv]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Mn]
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
        "drop-shadow": ["", "none", It, se]
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
        saturate: [O]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [S]
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
        "backdrop-opacity": [_]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [O]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [S]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", se]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: ne()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", se]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: ne()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", se]
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
        scale: [D]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [D]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [D]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [In, se]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", se]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", se]
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
        "will-change": ["auto", "scroll", "contents", "transform", se]
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
        stroke: [$t, Pt, ua]
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
}, kv = /* @__PURE__ */ pv(Tv);
function N(...e) {
  return kv(ii(e));
}
function Gy(e, t) {
  t.value = typeof e == "function" ? e(t.value) : e;
}
const kn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, a] of t)
    n[o] = a;
  return n;
}, Av = {}, Pv = { class: "h-full bg-background dark:text-white" };
function Iv(e, t) {
  return h(), j("div", Pv, [
    x(e.$slots, "default")
  ]);
}
const Yy = /* @__PURE__ */ kn(Av, [["render", Iv]]), Mv = {}, Fv = { class: "sticky top-0 z-50 flex h-16 shrink-0 items-center gap-x-4 bg-background/60 px-4 backdrop-blur sm:gap-x-6 sm:px-6 lg:px-8" };
function Rv(e, t) {
  return h(), j("header", Fv, [
    x(e.$slots, "default")
  ]);
}
const Xy = /* @__PURE__ */ kn(Mv, [["render", Rv]]), Lv = {}, Vv = { class: "px-4 py-10 sm:px-6 lg:px-8 lg:pl-72" };
function Nv(e, t) {
  return h(), j("main", Vv, [
    x(e.$slots, "default")
  ]);
}
const Zy = /* @__PURE__ */ kn(Lv, [["render", Nv]]), jv = {};
function zv(e, t) {
  return x(e.$slots, "default");
}
const Qy = /* @__PURE__ */ kn(jv, [["render", zv]]), Kv = {}, Hv = { class: "hidden px-6 py-10 lg:fixed lg:inset-y-0 lg:top-16 lg:z-50 lg:flex lg:w-72 lg:flex-col" }, Wv = { class: "gap-y-5 overflow-y-auto" };
function Uv(e, t) {
  return h(), j("div", Hv, [
    de("div", Wv, [
      x(e.$slots, "default")
    ])
  ]);
}
const Jy = /* @__PURE__ */ kn(Kv, [["render", Uv]]), qv = {};
function Gv(e, t) {
  return x(e.$slots, "default");
}
const eb = /* @__PURE__ */ kn(qv, [["render", Gv]]);
function Yv(e, t) {
  return h(), j("svg", {
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
      d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    })
  ]);
}
function Xv(e, t) {
  return h(), j("svg", {
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
function ms(e, t) {
  return h(), j("svg", {
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
function Zv(e, t) {
  return h(), j("svg", {
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
const Qv = {
  type: "button",
  class: "-m-2.5 p-2.5 lg:hidden"
}, tb = /* @__PURE__ */ w({
  __name: "TwoColumnLayoutSidebarTrigger",
  setup(e) {
    return (t, n) => (h(), j("button", Qv, [
      n[0] || (n[0] = de("span", { class: "sr-only" }, "Open sidebar", -1)),
      F(s(Yv), {
        class: "h-6 w-6",
        "aria-hidden": "true"
      })
    ]));
  }
}), Jv = 3, eg = 1e6, Bt = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST"
};
let da = 0;
function tg() {
  return da = (da + 1) % Number.MAX_VALUE, da.toString();
}
const ca = /* @__PURE__ */ new Map();
function vs(e) {
  if (ca.has(e)) return;
  const t = setTimeout(() => {
    ca.delete(e), Ln({
      type: Bt.REMOVE_TOAST,
      toastId: e
    });
  }, eg);
  ca.set(e, t);
}
const at = E({
  toasts: []
});
function Ln(e) {
  switch (e.type) {
    case Bt.ADD_TOAST:
      at.value.toasts = [e.toast, ...at.value.toasts].slice(0, Jv);
      break;
    case Bt.UPDATE_TOAST:
      at.value.toasts = at.value.toasts.map(
        (t) => t.id === e.toast.id ? { ...t, ...e.toast } : t
      );
      break;
    case Bt.DISMISS_TOAST: {
      const { toastId: t } = e;
      t ? vs(t) : at.value.toasts.forEach((n) => {
        vs(n.id);
      }), at.value.toasts = at.value.toasts.map(
        (n) => n.id === t || t === void 0 ? {
          ...n,
          open: !1
        } : n
      );
      break;
    }
    case Bt.REMOVE_TOAST:
      e.toastId === void 0 ? at.value.toasts = [] : at.value.toasts = at.value.toasts.filter((t) => t.id !== e.toastId);
      break;
  }
}
function mi() {
  return {
    toasts: B(() => at.value.toasts),
    toast: ng,
    dismiss: (e) => Ln({ type: Bt.DISMISS_TOAST, toastId: e })
  };
}
function ng(e) {
  const t = tg(), n = (a) => Ln({
    type: Bt.UPDATE_TOAST,
    toast: { ...a, id: t }
  }), o = () => Ln({ type: Bt.DISMISS_TOAST, toastId: t });
  return Ln({
    type: Bt.ADD_TOAST,
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
const og = { class: "flex items-start space-x-3" }, ag = ["src", "alt"], rg = { class: "grid gap-1" }, sg = { class: "font-bold" }, lg = /* @__PURE__ */ w({
  __name: "Toaster",
  emits: ["click"],
  setup(e) {
    const { toasts: t } = mi();
    return (n, o) => (h(), C(s(bg), null, {
      default: y(() => [
        (h(!0), j(Ee, null, Lt(s(t), (a) => (h(), C(s(ig), k({
          key: a.id
        }, { ref_for: !0 }, a, {
          class: "mt-1.5",
          onClick: (r) => n.$emit("click", a)
        }), {
          default: y(() => [
            de("div", og, [
              a.icon ? (h(), j(Ee, { key: 0 }, [
                typeof a.icon == "string" ? (h(), j("img", {
                  key: 0,
                  src: a.icon,
                  class: oe(["size-16 rounded-sm object-cover", a.iconClasses]),
                  alt: a.title
                }, null, 10, ag)) : (h(), C(Je(a.icon), {
                  key: 1,
                  class: oe(["size-6", a.iconClasses])
                }, null, 8, ["class"]))
              ], 64)) : ge("", !0),
              de("div", rg, [
                a.title ? (h(), C(s(yg), { key: 0 }, {
                  default: y(() => [
                    Le(We(a.title), 1)
                  ]),
                  _: 2
                }, 1024)) : ge("", !0),
                a.description ? (h(), j(Ee, { key: 1 }, [
                  Xi(a.description) ? (h(), C(s(gs), { key: 0 }, {
                    default: y(() => [
                      (h(), C(Je(a.description)))
                    ]),
                    _: 2
                  }, 1024)) : typeof a.description == "object" ? (h(!0), j(Ee, { key: 1 }, Lt(a.description, (r, l) => (h(), j("p", {
                    key: l,
                    class: "text-sm opacity-90"
                  }, [
                    a.objectFormat === "key" ? (h(), j(Ee, { key: 0 }, [
                      Le(We(l), 1)
                    ], 64)) : a.objectFormat === "both" ? (h(), j(Ee, { key: 1 }, [
                      de("span", sg, We(l), 1),
                      Le(": " + We(r), 1)
                    ], 64)) : (h(), j(Ee, { key: 2 }, [
                      Le(We(r), 1)
                    ], 64))
                  ]))), 128)) : (h(), C(s(gs), { key: 2 }, {
                    default: y(() => [
                      Le(We(a.description), 1)
                    ]),
                    _: 2
                  }, 1024))
                ], 64)) : ge("", !0),
                F(s(hg))
              ])
            ]),
            (h(), C(Je(a.action)))
          ]),
          _: 2
        }, 1040, ["onClick"]))), 128)),
        F(s(ug))
      ]),
      _: 1
    }));
  }
}), ig = /* @__PURE__ */ w({
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
    as: { type: [String, Object, Function] }
  },
  emits: ["escapeKeyDown", "pause", "resume", "swipeStart", "swipeMove", "swipeCancel", "swipeEnd", "update:open"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = B(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = J(a, o);
    return (l, i) => (h(), C(s(jm), k(s(r), {
      class: s(N)(s(wg)({ variant: l.variant }), n.class),
      "onUpdate:open": l.onOpenChange
    }), {
      default: y(() => [
        x(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class", "onUpdate:open"]));
  }
}), ug = /* @__PURE__ */ w({
  __name: "ToastViewport",
  props: {
    hotkey: {},
    label: { type: [String, Function] },
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(Km), k(n.value, {
      class: s(N)(
        // overriding the defaults to position at the bottom on mobile viewport
        // 'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
        "fixed bottom-0 right-0 top-auto flex-col z-[100] flex max-h-screen w-full p-4 md:max-w-[420px]",
        t.class
      )
    }), null, 16, ["class"]));
  }
}), nb = /* @__PURE__ */ w({
  __name: "ToastAction",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(zm), k(n.value, {
      class: s(N)(
        "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
        t.class
      )
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
});
function dg(e, t) {
  return h(), j("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    de("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z",
      fill: "currentColor"
    })
  ]);
}
function cg(e, t) {
  return h(), j("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    de("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z",
      fill: "currentColor"
    })
  ]);
}
function pg(e, t) {
  return h(), j("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    de("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z",
      fill: "currentColor"
    })
  ]);
}
function vi(e, t) {
  return h(), j("svg", {
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
function gi(e, t) {
  return h(), j("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    de("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
      fill: "currentColor"
    })
  ]);
}
function fg(e, t) {
  return h(), j("svg", {
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
function mg(e, t) {
  return h(), j("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    de("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M3.13523 8.84197C3.3241 9.04343 3.64052 9.05363 3.84197 8.86477L7.5 5.43536L11.158 8.86477C11.3595 9.05363 11.6759 9.04343 11.8648 8.84197C12.0536 8.64051 12.0434 8.32409 11.842 8.13523L7.84197 4.38523C7.64964 4.20492 7.35036 4.20492 7.15803 4.38523L3.15803 8.13523C2.95657 8.32409 2.94637 8.64051 3.13523 8.84197Z",
      fill: "currentColor"
    })
  ]);
}
function qo(e, t) {
  return h(), j("svg", {
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
function vg(e, t) {
  return h(), j("svg", {
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
function gg(e, t) {
  return h(), j("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    de("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z",
      fill: "currentColor"
    })
  ]);
}
const hg = /* @__PURE__ */ w({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(ai), k(n.value, {
      class: s(N)(
        "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
        t.class
      )
    }), {
      default: y(() => [
        F(s(qo), { class: "h-4 w-4" })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), yg = /* @__PURE__ */ w({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(Hm), k(n.value, {
      class: s(N)("text-sm font-semibold [&+div]:text-xs", t.class)
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), gs = /* @__PURE__ */ w({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(Wm), k({
      class: s(N)("text-sm opacity-90", t.class)
    }, n.value), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), bg = /* @__PURE__ */ w({
  __name: "ToastProvider",
  props: {
    label: {},
    duration: {},
    swipeDirection: {},
    swipeThreshold: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(km), q(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hs = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, ys = ii, ro = (e, t) => (n) => {
  var o;
  if ((t == null ? void 0 : t.variants) == null) return ys(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: a, defaultVariants: r } = t, l = Object.keys(a).map((d) => {
    const p = n == null ? void 0 : n[d], c = r == null ? void 0 : r[d];
    if (p === null) return null;
    const f = hs(p) || hs(c);
    return a[d][f];
  }), i = n && Object.entries(n).reduce((d, p) => {
    let [c, f] = p;
    return f === void 0 || (d[c] = f), d;
  }, {}), u = t == null || (o = t.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((d, p) => {
    let { class: c, className: f, ...v } = p;
    return Object.entries(v).every((m) => {
      let [g, b] = m;
      return Array.isArray(b) ? b.includes({
        ...r,
        ...i
      }[g]) : {
        ...r,
        ...i
      }[g] === b;
    }) ? [
      ...d,
      c,
      f
    ] : d;
  }, []);
  return ys(e, l, u, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, wg = ro(
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
), { toast: go } = mi();
function _g() {
  return {
    info: (e) => {
      go({
        icon: Zv,
        iconClasses: "text-blue-400",
        title: "FYI",
        description: e
      });
    },
    success: (e) => {
      go({
        icon: Xv,
        iconClasses: "text-green-400",
        title: "Success",
        description: e
      });
    },
    warning: (e) => {
      go({
        icon: ms,
        iconClasses: "text-orange-400",
        title: "Warning",
        description: e
      });
    },
    error: (e, t = "value") => {
      go({
        icon: ms,
        iconClasses: "text-red-400",
        title: "Oh snap! Some errors were encountered.",
        description: e,
        objectFormat: t
      });
    }
  };
}
const ob = /* @__PURE__ */ w({
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
    } = _g();
    return Y(
      () => t.info,
      (l) => {
        l && n(t.info);
      },
      {
        immediate: !0
      }
    ), Y(
      () => t.success,
      (l) => {
        l && o(t.success);
      },
      { immediate: !0 }
    ), Y(
      () => t.warning,
      (l) => {
        l && a(t.warning);
      },
      { immediate: !0 }
    ), Y(
      () => t.errors,
      () => {
        t.errors !== void 0 && Object.keys(t.errors).length > 0 && r(t.errors, t.objectFormat);
      }
    ), (l, i) => (h(), C(s(lg)));
  }
}), xg = { class: "flex items-center justify-between space-y-2" }, Cg = { class: "flex items-center space-x-2" }, ab = /* @__PURE__ */ w({
  __name: "Heading",
  props: {
    as: { default: "h2" },
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), j("div", xg, [
      (h(), C(Je(n.as), {
        class: oe(s(N)("text-3xl font-bold tracking-tight", t.class))
      }, {
        default: y(() => [
          x(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["class"])),
      de("div", Cg, [
        x(n.$slots, "actions")
      ])
    ]));
  }
}), Og = /* @__PURE__ */ w({
  __name: "Accordion",
  props: {
    collapsible: { type: Boolean },
    disabled: { type: Boolean },
    dir: {},
    orientation: {},
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    type: {},
    modelValue: {},
    defaultValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = J(e, t);
    return (r, l) => (h(), C(s(oc), q(G(s(a))), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), rb = /* @__PURE__ */ w({
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
    const a = J(e, t);
    return (r, l) => (h(), C(Og, q(G(s(a))), {
      default: y(() => [
        (h(!0), j(Ee, null, Lt(r.content, (i, u) => (h(), C(s(Sg), {
          key: u,
          value: "item-" + u
        }, {
          default: y(() => [
            F(s(Bg), null, {
              default: y(() => [
                x(r.$slots, u + ".title", { item: i }, () => [
                  Le(We(i.title), 1)
                ])
              ]),
              _: 2
            }, 1024),
            F(s($g), null, {
              default: y(() => [
                x(r.$slots, u + ".content", { item: i }, () => [
                  Le(We(i.content), 1)
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
}), $g = /* @__PURE__ */ w({
  __name: "AccordionContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(sc), k(n.value, { class: "accordion-content overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" }), {
      default: y(() => [
        de("div", {
          class: oe(s(N)("pb-4 pt-0", t.class))
        }, [
          x(o.$slots, "default")
        ], 2)
      ]),
      _: 3
    }, 16));
  }
}), Sg = /* @__PURE__ */ w({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = Ie(n);
    return (a, r) => (h(), C(s(rc), k(s(o), {
      class: s(N)("border-b", t.class)
    }), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Bg = /* @__PURE__ */ w({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(lc), { class: "flex" }, {
      default: y(() => [
        F(s(ic), k(n.value, {
          class: s(N)(
            "accordion-trigger flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
            t.class
          )
        }), {
          default: y(() => [
            x(o.$slots, "default"),
            x(o.$slots, "icon", {}, () => [
              F(s(gi), { class: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), sb = /* @__PURE__ */ w({
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
    const a = J(e, t);
    return (r, l) => (h(), C(s(Tg), null, {
      default: y(() => [
        F(s(Eg), q(G(s(a))), {
          default: y(() => [
            F(s(kg), {
              class: oe(r.indicator ? "underline decoration-dotted underline-offset-4" : "")
            }, {
              default: y(() => [
                x(r.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]),
            F(s(Dg), q(G(r.$attrs)), {
              default: y(() => [
                x(r.$slots, "tooltip", {}, () => [
                  Le(We(r.tooltip), 1)
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
}), Eg = /* @__PURE__ */ w({
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
    const a = J(e, t);
    return (r, l) => (h(), C(s(Ym), q(G(s(a))), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Dg = /* @__PURE__ */ w({
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
    const n = e, o = t, a = B(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = J(a, o);
    return (l, i) => (h(), C(s(Jm), null, {
      default: y(() => [
        F(s(Qm), k({ ...s(r), ...l.$attrs }, {
          class: s(N)(
            "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            n.class
          )
        }), {
          default: y(() => [
            x(l.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Tg = /* @__PURE__ */ w({
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
    return (n, o) => (h(), C(s(qm), q(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), kg = /* @__PURE__ */ w({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(Xm), q(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), lb = /* @__PURE__ */ w({
  __name: "AlertDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = J(e, t);
    return (r, l) => (h(), C(s(Ic), q(G(s(a))), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ib = /* @__PURE__ */ w({
  __name: "AlertDialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(Mc), q(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ub = /* @__PURE__ */ w({
  __name: "AlertDialogContent",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = B(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = J(a, o);
    return (l, i) => (h(), C(s(Fc), null, {
      default: y(() => [
        F(s(Nc), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        F(s(Vc), k(s(r), {
          class: s(N)(
            "fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
            n.class
          )
        }), {
          default: y(() => [
            x(l.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), db = /* @__PURE__ */ w({
  __name: "AlertDialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), j("div", {
      class: oe(s(N)("flex flex-col gap-y-2 text-center sm:text-left", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), cb = /* @__PURE__ */ w({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(zc), k(n.value, {
      class: s(N)("text-lg font-semibold", t.class)
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), pb = /* @__PURE__ */ w({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(Kc), k(n.value, {
      class: s(N)("text-sm text-muted-foreground", t.class)
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), fb = /* @__PURE__ */ w({
  __name: "AlertDialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), j("div", {
      class: oe(s(N)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), hi = /* @__PURE__ */ w({
  __name: "Button",
  props: {
    variant: {},
    size: {},
    class: {},
    asChild: { type: Boolean },
    as: { type: [String, Object, Function], default: "button" }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(K), {
      as: n.as,
      "as-child": n.asChild,
      class: oe(s(N)(s(Er)({ variant: n.variant, size: n.size }), t.class))
    }, {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), Er = ro(
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
), mb = /* @__PURE__ */ w({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(Hc), k(n.value, {
      class: s(N)(s(Er)(), t.class)
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), vb = /* @__PURE__ */ w({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(jc), k(n.value, {
      class: s(N)(s(Er)({ variant: "outline" }), "mt-2 sm:mt-0", t.class)
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), gb = /* @__PURE__ */ w({
  __name: "Avatar",
  props: {
    class: {},
    size: { default: "sm" },
    shape: { default: "circle" }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(Uc), {
      class: oe(s(N)(s(Ag)({ size: n.size, shape: n.shape }), t.class))
    }, {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), hb = /* @__PURE__ */ w({
  __name: "AvatarImage",
  props: {
    src: {},
    referrerPolicy: {},
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(Gc), k(t, { class: "h-full w-full object-cover" }), null, 16));
  }
}), yb = /* @__PURE__ */ w({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(Yc), q(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ag = ro(
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
), bb = /* @__PURE__ */ w({
  __name: "Badge",
  props: {
    variant: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), j("div", {
      class: oe(s(N)(s(Pg)({ variant: n.variant }), t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), Pg = ro(
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
), wb = /* @__PURE__ */ w({
  __name: "Card",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), j("div", {
      class: oe(s(N)("rounded-xl border bg-card text-card-foreground shadow", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), _b = /* @__PURE__ */ w({
  __name: "CardContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), j("div", {
      class: oe(s(N)("p-6 pt-0", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), xb = /* @__PURE__ */ w({
  __name: "CardDescription",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), j("p", {
      class: oe(s(N)("text-sm text-muted-foreground", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), Cb = /* @__PURE__ */ w({
  __name: "CardFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), j("div", {
      class: oe(s(N)("flex items-center p-6 pt-0", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), Ob = /* @__PURE__ */ w({
  __name: "CardHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), j("div", {
      class: oe(s(N)("flex flex-col gap-y-1.5 p-6", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), $b = /* @__PURE__ */ w({
  __name: "CardTitle",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), j("h3", {
      class: oe(s(N)("font-semibold leading-none tracking-tight", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
});
var bs;
const Ig = typeof window < "u", Mg = (e) => typeof e < "u", Fg = (e) => typeof e == "function";
Ig && ((bs = window == null ? void 0 : window.navigator) != null && bs.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Rg(e) {
  return e;
}
function Lg(e) {
  const t = Symbol("InjectionState");
  return [(...a) => {
    const r = e(...a);
    return Zn(t, r), r;
  }, () => Xn(t)];
}
function Vg(e) {
  if (!pt(e))
    return gn(e);
  const t = new Proxy({}, {
    get(n, o, a) {
      return s(Reflect.get(e.value, o, a));
    },
    set(n, o, a) {
      return pt(e.value[o]) && !pt(a) ? e.value[o].value = a : e.value[o] = a, !0;
    },
    deleteProperty(n, o) {
      return Reflect.deleteProperty(e.value, o);
    },
    has(n, o) {
      return Reflect.has(e.value, o);
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
  return gn(t);
}
function Ng(e) {
  return Vg(B(e));
}
function Dr(e, ...t) {
  const n = t.flat();
  return Ng(() => Object.fromEntries(Object.entries(pe(e)).filter((o) => !n.includes(o[0]))));
}
function jg(e) {
  return JSON.parse(JSON.stringify(e));
}
const ws = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, _s = "__vueuse_ssr_handlers__";
ws[_s] = ws[_s] || {};
var xs;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(xs || (xs = {}));
var zg = Object.defineProperty, Cs = Object.getOwnPropertySymbols, Kg = Object.prototype.hasOwnProperty, Hg = Object.prototype.propertyIsEnumerable, Os = (e, t, n) => t in e ? zg(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Wg = (e, t) => {
  for (var n in t || (t = {}))
    Kg.call(t, n) && Os(e, n, t[n]);
  if (Cs)
    for (var n of Cs(t))
      Hg.call(t, n) && Os(e, n, t[n]);
  return e;
};
const Ug = {
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
Wg({
  linear: Rg
}, Ug);
function yi(e, t, n, o = {}) {
  var a, r, l;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: p = !1,
    defaultValue: c
  } = o, f = Ke(), v = n || (f == null ? void 0 : f.emit) || ((a = f == null ? void 0 : f.$emit) == null ? void 0 : a.bind(f)) || ((l = (r = f == null ? void 0 : f.proxy) == null ? void 0 : r.$emit) == null ? void 0 : l.bind(f == null ? void 0 : f.proxy));
  let m = d;
  m = d || m || `update:${t.toString()}`;
  const g = (_) => i ? Fg(i) ? i(_) : jg(_) : _, b = () => Mg(e[t]) ? g(e[t]) : c;
  if (u) {
    const _ = b(), $ = E(_);
    return Y(() => e[t], (O) => $.value = g(O)), Y($, (O) => {
      (O !== e[t] || p) && v(m, O);
    }, { deep: p }), $;
  } else
    return B({
      get() {
        return b();
      },
      set(_) {
        v(m, _);
      }
    });
}
function qg(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function $s(e) {
  return qg(e) || Array.isArray(e);
}
function Gg() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Tr(e, t) {
  const n = Object.keys(e), o = Object.keys(t);
  if (n.length !== o.length) return !1;
  const a = JSON.stringify(Object.keys(e.breakpoints || {})), r = JSON.stringify(Object.keys(t.breakpoints || {}));
  return a !== r ? !1 : n.every((l) => {
    const i = e[l], u = t[l];
    return typeof i == "function" ? `${i}` == `${u}` : !$s(i) || !$s(u) ? i === u : Tr(i, u);
  });
}
function Ss(e) {
  return e.concat().sort((t, n) => t.name > n.name ? 1 : -1).map((t) => t.options);
}
function Yg(e, t) {
  if (e.length !== t.length) return !1;
  const n = Ss(e), o = Ss(t);
  return n.every((a, r) => {
    const l = o[r];
    return Tr(a, l);
  });
}
function kr(e) {
  return typeof e == "number";
}
function Ta(e) {
  return typeof e == "string";
}
function Go(e) {
  return typeof e == "boolean";
}
function Bs(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Oe(e) {
  return Math.abs(e);
}
function Ar(e) {
  return Math.sign(e);
}
function Vn(e, t) {
  return Oe(e - t);
}
function Xg(e, t) {
  if (e === 0 || t === 0 || Oe(e) <= Oe(t)) return 0;
  const n = Vn(Oe(e), Oe(t));
  return Oe(n / e);
}
function Zg(e) {
  return Math.round(e * 100) / 100;
}
function Wn(e) {
  return Un(e).map(Number);
}
function it(e) {
  return e[so(e)];
}
function so(e) {
  return Math.max(0, e.length - 1);
}
function Pr(e, t) {
  return t === so(e);
}
function Es(e, t = 0) {
  return Array.from(Array(e), (n, o) => t + o);
}
function Un(e) {
  return Object.keys(e);
}
function bi(e, t) {
  return [e, t].reduce((n, o) => (Un(o).forEach((a) => {
    const r = n[a], l = o[a], i = Bs(r) && Bs(l);
    n[a] = i ? bi(r, l) : l;
  }), n), {});
}
function ka(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function Qg(e, t) {
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
    return Ta(e) ? n[e](u) : e(t, u, d);
  }
  return {
    measure: l
  };
}
function qn() {
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
function Jg(e, t, n, o) {
  const a = qn(), r = 1e3 / 60;
  let l = null, i = 0, u = 0;
  function d() {
    a.add(e, "visibilitychange", () => {
      e.hidden && m();
    });
  }
  function p() {
    v(), a.clear();
  }
  function c(b) {
    if (!u) return;
    l || (l = b, n(), n());
    const _ = b - l;
    for (l = b, i += _; i >= r; )
      n(), i -= r;
    const $ = i / r;
    o($), u && (u = t.requestAnimationFrame(c));
  }
  function f() {
    u || (u = t.requestAnimationFrame(c));
  }
  function v() {
    t.cancelAnimationFrame(u), l = null, i = 0, u = 0;
  }
  function m() {
    l = null, i = 0;
  }
  return {
    init: d,
    destroy: p,
    start: f,
    stop: v,
    update: n,
    render: o
  };
}
function eh(e, t) {
  const n = t === "rtl", o = e === "y", a = o ? "y" : "x", r = o ? "x" : "y", l = !o && n ? -1 : 1, i = p(), u = c();
  function d(m) {
    const {
      height: g,
      width: b
    } = m;
    return o ? g : b;
  }
  function p() {
    return o ? "top" : n ? "right" : "left";
  }
  function c() {
    return o ? "bottom" : n ? "left" : "right";
  }
  function f(m) {
    return m * l;
  }
  return {
    scroll: a,
    cross: r,
    startEdge: i,
    endEdge: u,
    measureSize: d,
    direction: f
  };
}
function Gt(e = 0, t = 0) {
  const n = Oe(e - t);
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
function wi(e, t, n) {
  const {
    constrain: o
  } = Gt(0, e), a = e + 1;
  let r = l(t);
  function l(f) {
    return n ? Oe((a + f) % a) : o(f);
  }
  function i() {
    return r;
  }
  function u(f) {
    return r = l(f), c;
  }
  function d(f) {
    return p().set(i() + f);
  }
  function p() {
    return wi(e, i(), n);
  }
  const c = {
    get: i,
    set: u,
    add: d,
    clone: p
  };
  return c;
}
function th(e, t, n, o, a, r, l, i, u, d, p, c, f, v, m, g, b, _, $) {
  const {
    cross: O,
    direction: D
  } = e, S = ["INPUT", "SELECT", "TEXTAREA"], P = {
    passive: !1
  }, T = qn(), I = qn(), R = Gt(50, 225).constrain(v.measure(20)), A = {
    mouse: 300,
    touch: 400
  }, L = {
    mouse: 500,
    touch: 600
  }, M = m ? 43 : 25;
  let X = !1, H = 0, Q = 0, W = !1, fe = !1, ee = !1, z = !1;
  function ae(U) {
    if (!$) return;
    function ue(Re) {
      (Go($) || $(U, Re)) && wt(Re);
    }
    const Se = t;
    T.add(Se, "dragstart", (Re) => Re.preventDefault(), P).add(Se, "touchmove", () => {
    }, P).add(Se, "touchend", () => {
    }).add(Se, "touchstart", ue).add(Se, "mousedown", ue).add(Se, "touchcancel", me).add(Se, "contextmenu", me).add(Se, "click", Me, !0);
  }
  function ne() {
    T.clear(), I.clear();
  }
  function Ne() {
    const U = z ? n : t;
    I.add(U, "touchmove", xe, P).add(U, "touchend", me).add(U, "mousemove", xe, P).add(U, "mouseup", me);
  }
  function He(U) {
    const ue = U.nodeName || "";
    return S.includes(ue);
  }
  function je() {
    return (m ? L : A)[z ? "mouse" : "touch"];
  }
  function Ye(U, ue) {
    const Se = c.add(Ar(U) * -1), Re = p.byDistance(U, !m).distance;
    return m || Oe(U) < R ? Re : b && ue ? Re * 0.5 : p.byIndex(Se.get(), 0).distance;
  }
  function wt(U) {
    const ue = ka(U, o);
    z = ue, ee = m && ue && !U.buttons && X, X = Vn(a.get(), l.get()) >= 2, !(ue && U.button !== 0) && (He(U.target) || (W = !0, r.pointerDown(U), d.useFriction(0).useDuration(0), a.set(l), Ne(), H = r.readPoint(U), Q = r.readPoint(U, O), f.emit("pointerDown")));
  }
  function xe(U) {
    if (!ka(U, o) && U.touches.length >= 2) return me(U);
    const Se = r.readPoint(U), Re = r.readPoint(U, O), Qe = Vn(Se, H), nt = Vn(Re, Q);
    if (!fe && !z && (!U.cancelable || (fe = Qe > nt, !fe)))
      return me(U);
    const Z = r.pointerMove(U);
    Qe > g && (ee = !0), d.useFriction(0.3).useDuration(0.75), i.start(), a.add(D(Z)), U.preventDefault();
  }
  function me(U) {
    const Se = p.byDistance(0, !1).index !== c.get(), Re = r.pointerUp(U) * je(), Qe = Ye(D(Re), Se), nt = Xg(Re, Qe), Z = M - 10 * nt, ve = _ + nt / 50;
    fe = !1, W = !1, I.clear(), d.useDuration(Z).useFriction(ve), u.distance(Qe, !m), z = !1, f.emit("pointerUp");
  }
  function Me(U) {
    ee && (U.stopPropagation(), U.preventDefault(), ee = !1);
  }
  function $e() {
    return W;
  }
  return {
    init: ae,
    destroy: ne,
    pointerDown: $e
  };
}
function nh(e, t) {
  let o, a;
  function r(c) {
    return c.timeStamp;
  }
  function l(c, f) {
    const m = `client${(f || e.scroll) === "x" ? "X" : "Y"}`;
    return (ka(c, t) ? c : c.touches[0])[m];
  }
  function i(c) {
    return o = c, a = c, l(c);
  }
  function u(c) {
    const f = l(c) - l(a), v = r(c) - r(o) > 170;
    return a = c, v && (o = c), f;
  }
  function d(c) {
    if (!o || !a) return 0;
    const f = l(a) - l(o), v = r(c) - r(o), m = r(c) - r(a) > 170, g = f / v;
    return v && !m && Oe(g) > 0.1 ? g : 0;
  }
  return {
    pointerDown: i,
    pointerMove: u,
    pointerUp: d,
    readPoint: l
  };
}
function oh() {
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
function ah(e) {
  function t(o) {
    return e * (o / 100);
  }
  return {
    measure: t
  };
}
function rh(e, t, n, o, a, r, l) {
  const i = [e].concat(o);
  let u, d, p = [], c = !1;
  function f(b) {
    return a.measureSize(l.measure(b));
  }
  function v(b) {
    if (!r) return;
    d = f(e), p = o.map(f);
    function _($) {
      for (const O of $) {
        if (c) return;
        const D = O.target === e, S = o.indexOf(O.target), P = D ? d : p[S], T = f(D ? e : o[S]);
        if (Oe(T - P) >= 0.5) {
          b.reInit(), t.emit("resize");
          break;
        }
      }
    }
    u = new ResizeObserver(($) => {
      (Go(r) || r(b, $)) && _($);
    }), n.requestAnimationFrame(() => {
      i.forEach(($) => u.observe($));
    });
  }
  function m() {
    c = !0, u && u.disconnect();
  }
  return {
    init: v,
    destroy: m
  };
}
function sh(e, t, n, o, a, r) {
  let l = 0, i = 0, u = a, d = r, p = e.get(), c = 0;
  function f() {
    const P = o.get() - e.get(), T = !u;
    let I = 0;
    return T ? (l = 0, n.set(o), e.set(o), I = P) : (n.set(e), l += P / u, l *= d, p += l, e.add(l), I = p - c), i = Ar(I), c = p, S;
  }
  function v() {
    const P = o.get() - t.get();
    return Oe(P) < 1e-3;
  }
  function m() {
    return u;
  }
  function g() {
    return i;
  }
  function b() {
    return l;
  }
  function _() {
    return O(a);
  }
  function $() {
    return D(r);
  }
  function O(P) {
    return u = P, S;
  }
  function D(P) {
    return d = P, S;
  }
  const S = {
    direction: g,
    duration: m,
    velocity: b,
    seek: f,
    settled: v,
    useBaseFriction: $,
    useBaseDuration: _,
    useFriction: D,
    useDuration: O
  };
  return S;
}
function lh(e, t, n, o, a) {
  const r = a.measure(10), l = a.measure(50), i = Gt(0.1, 0.99);
  let u = !1;
  function d() {
    return !(u || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
  }
  function p(v) {
    if (!d()) return;
    const m = e.reachedMin(t.get()) ? "min" : "max", g = Oe(e[m] - t.get()), b = n.get() - t.get(), _ = i.constrain(g / l);
    n.subtract(b * _), !v && Oe(b) < r && (n.set(e.constrain(n.get())), o.useDuration(25).useBaseFriction());
  }
  function c(v) {
    u = !v;
  }
  return {
    shouldConstrain: d,
    constrain: p,
    toggleActive: c
  };
}
function ih(e, t, n, o, a) {
  const r = Gt(-t + e, 0), l = c(), i = p(), u = f();
  function d(m, g) {
    return Vn(m, g) <= 1;
  }
  function p() {
    const m = l[0], g = it(l), b = l.lastIndexOf(m), _ = l.indexOf(g) + 1;
    return Gt(b, _);
  }
  function c() {
    return n.map((m, g) => {
      const {
        min: b,
        max: _
      } = r, $ = r.constrain(m), O = !g, D = Pr(n, g);
      return O ? _ : D || d(b, $) ? b : d(_, $) ? _ : $;
    }).map((m) => parseFloat(m.toFixed(3)));
  }
  function f() {
    if (t <= e + a) return [r.max];
    if (o === "keepSnaps") return l;
    const {
      min: m,
      max: g
    } = i;
    return l.slice(m, g);
  }
  return {
    snapsContained: u,
    scrollContainLimit: i
  };
}
function uh(e, t, n) {
  const o = t[0], a = n ? o - e : it(t);
  return {
    limit: Gt(a, o)
  };
}
function dh(e, t, n, o) {
  const r = t.min + 0.1, l = t.max + 0.1, {
    reachedMin: i,
    reachedMax: u
  } = Gt(r, l);
  function d(f) {
    return f === 1 ? u(n.get()) : f === -1 ? i(n.get()) : !1;
  }
  function p(f) {
    if (!d(f)) return;
    const v = e * (f * -1);
    o.forEach((m) => m.add(v));
  }
  return {
    loop: p
  };
}
function ch(e) {
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
function ph(e, t, n, o, a) {
  const {
    startEdge: r,
    endEdge: l
  } = e, {
    groupSlides: i
  } = a, u = c().map(t.measure), d = f(), p = v();
  function c() {
    return i(o).map((g) => it(g)[l] - g[0][r]).map(Oe);
  }
  function f() {
    return o.map((g) => n[r] - g[r]).map((g) => -Oe(g));
  }
  function v() {
    return i(d).map((g) => g[0]).map((g, b) => g + u[b]);
  }
  return {
    snaps: d,
    snapsAligned: p
  };
}
function fh(e, t, n, o, a, r) {
  const {
    groupSlides: l
  } = a, {
    min: i,
    max: u
  } = o, d = p();
  function p() {
    const f = l(r), v = !e || t === "keepSnaps";
    return n.length === 1 ? [r] : v ? f : f.slice(i, u).map((m, g, b) => {
      const _ = !g, $ = Pr(b, g);
      if (_) {
        const O = it(b[0]) + 1;
        return Es(O);
      }
      if ($) {
        const O = so(r) - it(b)[0] + 1;
        return Es(O, it(b)[0]);
      }
      return m;
    });
  }
  return {
    slideRegistry: d
  };
}
function mh(e, t, n, o, a) {
  const {
    reachedAny: r,
    removeOffset: l,
    constrain: i
  } = o;
  function u(m) {
    return m.concat().sort((g, b) => Oe(g) - Oe(b))[0];
  }
  function d(m) {
    const g = e ? l(m) : i(m), b = t.map(($, O) => ({
      diff: p($ - g, 0),
      index: O
    })).sort(($, O) => Oe($.diff) - Oe(O.diff)), {
      index: _
    } = b[0];
    return {
      index: _,
      distance: g
    };
  }
  function p(m, g) {
    const b = [m, m + n, m - n];
    if (!e) return m;
    if (!g) return u(b);
    const _ = b.filter(($) => Ar($) === g);
    return _.length ? u(_) : it(b) - n;
  }
  function c(m, g) {
    const b = t[m] - a.get(), _ = p(b, g);
    return {
      index: m,
      distance: _
    };
  }
  function f(m, g) {
    const b = a.get() + m, {
      index: _,
      distance: $
    } = d(b), O = !e && r(b);
    if (!g || O) return {
      index: _,
      distance: m
    };
    const D = t[_] - $, S = m + p(D, 0);
    return {
      index: _,
      distance: S
    };
  }
  return {
    byDistance: f,
    byIndex: c,
    shortcut: p
  };
}
function vh(e, t, n, o, a, r, l) {
  function i(c) {
    const f = c.distance, v = c.index !== t.get();
    r.add(f), f && (o.duration() ? e.start() : (e.update(), e.render(1), e.update())), v && (n.set(t.get()), t.set(c.index), l.emit("select"));
  }
  function u(c, f) {
    const v = a.byDistance(c, f);
    i(v);
  }
  function d(c, f) {
    const v = t.clone().set(c), m = a.byIndex(v.get(), f);
    i(m);
  }
  return {
    distance: u,
    index: d
  };
}
function gh(e, t, n, o, a, r, l, i) {
  const u = {
    passive: !0,
    capture: !0
  };
  let d = 0;
  function p(v) {
    if (!i) return;
    function m(g) {
      if ((/* @__PURE__ */ new Date()).getTime() - d > 10) return;
      l.emit("slideFocusStart"), e.scrollLeft = 0;
      const $ = n.findIndex((O) => O.includes(g));
      kr($) && (a.useDuration(0), o.index($, 0), l.emit("slideFocus"));
    }
    r.add(document, "keydown", c, !1), t.forEach((g, b) => {
      r.add(g, "focus", (_) => {
        (Go(i) || i(v, _)) && m(b);
      }, u);
    });
  }
  function c(v) {
    v.code === "Tab" && (d = (/* @__PURE__ */ new Date()).getTime());
  }
  return {
    init: p
  };
}
function Rn(e) {
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
    return kr(u) ? u : u.get();
  }
  return {
    get: n,
    set: o,
    add: a,
    subtract: r
  };
}
function _i(e, t) {
  const n = e.scroll === "x" ? l : i, o = t.style;
  let a = null, r = !1;
  function l(f) {
    return `translate3d(${f}px,0px,0px)`;
  }
  function i(f) {
    return `translate3d(0px,${f}px,0px)`;
  }
  function u(f) {
    if (r) return;
    const v = Zg(e.direction(f));
    v !== a && (o.transform = n(v), a = v);
  }
  function d(f) {
    r = !f;
  }
  function p() {
    r || (o.transform = "", t.getAttribute("style") || t.removeAttribute("style"));
  }
  return {
    clear: p,
    to: u,
    toggleActive: d
  };
}
function hh(e, t, n, o, a, r, l, i, u) {
  const p = Wn(a), c = Wn(a).reverse(), f = _().concat($());
  function v(T, I) {
    return T.reduce((R, A) => R - a[A], I);
  }
  function m(T, I) {
    return T.reduce((R, A) => v(R, I) > 0 ? R.concat([A]) : R, []);
  }
  function g(T) {
    return r.map((I, R) => ({
      start: I - o[R] + 0.5 + T,
      end: I + t - 0.5 + T
    }));
  }
  function b(T, I, R) {
    const A = g(I);
    return T.map((L) => {
      const M = R ? 0 : -n, X = R ? n : 0, H = R ? "end" : "start", Q = A[L][H];
      return {
        index: L,
        loopPoint: Q,
        slideLocation: Rn(-1),
        translate: _i(e, u[L]),
        target: () => i.get() > Q ? M : X
      };
    });
  }
  function _() {
    const T = l[0], I = m(c, T);
    return b(I, n, !1);
  }
  function $() {
    const T = t - l[0] - 1, I = m(p, T);
    return b(I, -n, !0);
  }
  function O() {
    return f.every(({
      index: T
    }) => {
      const I = p.filter((R) => R !== T);
      return v(I, t) <= 0.1;
    });
  }
  function D() {
    f.forEach((T) => {
      const {
        target: I,
        translate: R,
        slideLocation: A
      } = T, L = I();
      L !== A.get() && (R.to(L), A.set(L));
    });
  }
  function S() {
    f.forEach((T) => T.translate.clear());
  }
  return {
    canLoop: O,
    clear: S,
    loop: D,
    loopPoints: f
  };
}
function yh(e, t, n) {
  let o, a = !1;
  function r(u) {
    if (!n) return;
    function d(p) {
      for (const c of p)
        if (c.type === "childList") {
          u.reInit(), t.emit("slidesChanged");
          break;
        }
    }
    o = new MutationObserver((p) => {
      a || (Go(n) || n(u, p)) && d(p);
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
function bh(e, t, n, o) {
  const a = {};
  let r = null, l = null, i, u = !1;
  function d() {
    i = new IntersectionObserver((m) => {
      u || (m.forEach((g) => {
        const b = t.indexOf(g.target);
        a[b] = g;
      }), r = null, l = null, n.emit("slidesInView"));
    }, {
      root: e.parentElement,
      threshold: o
    }), t.forEach((m) => i.observe(m));
  }
  function p() {
    i && i.disconnect(), u = !0;
  }
  function c(m) {
    return Un(a).reduce((g, b) => {
      const _ = parseInt(b), {
        isIntersecting: $
      } = a[_];
      return (m && $ || !m && !$) && g.push(_), g;
    }, []);
  }
  function f(m = !0) {
    if (m && r) return r;
    if (!m && l) return l;
    const g = c(m);
    return m && (r = g), m || (l = g), g;
  }
  return {
    init: d,
    destroy: p,
    get: f
  };
}
function wh(e, t, n, o, a, r) {
  const {
    measureSize: l,
    startEdge: i,
    endEdge: u
  } = e, d = n[0] && a, p = m(), c = g(), f = n.map(l), v = b();
  function m() {
    if (!d) return 0;
    const $ = n[0];
    return Oe(t[i] - $[i]);
  }
  function g() {
    if (!d) return 0;
    const $ = r.getComputedStyle(it(o));
    return parseFloat($.getPropertyValue(`margin-${u}`));
  }
  function b() {
    return n.map(($, O, D) => {
      const S = !O, P = Pr(D, O);
      return S ? f[O] + p : P ? f[O] + c : D[O + 1][i] - $[i];
    }).map(Oe);
  }
  return {
    slideSizes: f,
    slideSizesWithGaps: v,
    startGap: p,
    endGap: c
  };
}
function _h(e, t, n, o, a, r, l, i, u) {
  const {
    startEdge: d,
    endEdge: p,
    direction: c
  } = e, f = kr(n);
  function v(_, $) {
    return Wn(_).filter((O) => O % $ === 0).map((O) => _.slice(O, O + $));
  }
  function m(_) {
    return _.length ? Wn(_).reduce(($, O, D) => {
      const S = it($) || 0, P = S === 0, T = O === so(_), I = a[d] - r[S][d], R = a[d] - r[O][p], A = !o && P ? c(l) : 0, L = !o && T ? c(i) : 0, M = Oe(R - L - (I + A));
      return D && M > t + u && $.push(O), T && $.push(_.length), $;
    }, []).map(($, O, D) => {
      const S = Math.max(D[O - 1] || 0);
      return _.slice(S, $);
    }) : [];
  }
  function g(_) {
    return f ? v(_, n) : m(_);
  }
  return {
    groupSlides: g
  };
}
function xh(e, t, n, o, a, r, l) {
  const {
    align: i,
    axis: u,
    direction: d,
    startIndex: p,
    loop: c,
    duration: f,
    dragFree: v,
    dragThreshold: m,
    inViewThreshold: g,
    slidesToScroll: b,
    skipSnaps: _,
    containScroll: $,
    watchResize: O,
    watchSlides: D,
    watchDrag: S,
    watchFocus: P
  } = r, T = 2, I = oh(), R = I.measure(t), A = n.map(I.measure), L = eh(u, d), M = L.measureSize(R), X = ah(M), H = Qg(i, M), Q = !c && !!$, W = c || !!$, {
    slideSizes: fe,
    slideSizesWithGaps: ee,
    startGap: z,
    endGap: ae
  } = wh(L, R, A, n, W, a), ne = _h(L, M, b, c, R, A, z, ae, T), {
    snaps: Ne,
    snapsAligned: He
  } = ph(L, H, R, A, ne), je = -it(Ne) + it(ee), {
    snapsContained: Ye,
    scrollContainLimit: wt
  } = ih(M, je, He, $, T), xe = Q ? Ye : He, {
    limit: me
  } = uh(je, xe, c), Me = wi(so(xe), p, c), $e = Me.clone(), ye = Wn(n), U = ({
    dragHandler: xt,
    scrollBody: ot,
    scrollBounds: an,
    options: {
      loop: rn
    }
  }) => {
    rn || an.constrain(xt.pointerDown()), ot.seek();
  }, ue = ({
    scrollBody: xt,
    translate: ot,
    location: an,
    offsetLocation: rn,
    previousLocation: Ct,
    scrollLooper: sn,
    slideLooper: io,
    dragHandler: Fi,
    animation: Ri,
    eventHandler: Nr,
    scrollBounds: Li,
    options: {
      loop: jr
    }
  }, zr) => {
    const Kr = xt.settled(), Vi = !Li.shouldConstrain(), Hr = jr ? Kr : Kr && Vi, Wr = Hr && !Fi.pointerDown();
    Wr && Ri.stop();
    const Ni = an.get() * zr + Ct.get() * (1 - zr);
    rn.set(Ni), jr && (sn.loop(xt.direction()), io.loop()), ot.to(rn.get()), Wr && Nr.emit("settle"), Hr || Nr.emit("scroll");
  }, Se = Jg(o, a, () => U(Ht), (xt) => ue(Ht, xt)), Re = 0.68, Qe = xe[Me.get()], nt = Rn(Qe), Z = Rn(Qe), ve = Rn(Qe), be = Rn(Qe), ce = sh(nt, ve, Z, be, f, Re), Be = mh(c, xe, je, me, be), Ae = vh(Se, Me, $e, ce, Be, be, l), Ue = ch(me), _t = qn(), on = bh(t, n, l, g), {
    slideRegistry: Kt
  } = fh(Q, $, xe, wt, ne, ye), lo = gh(e, n, Kt, Ae, ce, _t, l, P), Ht = {
    ownerDocument: o,
    ownerWindow: a,
    eventHandler: l,
    containerRect: R,
    slideRects: A,
    animation: Se,
    axis: L,
    dragHandler: th(L, e, o, a, be, nh(L, a), nt, Se, Ae, ce, Be, Me, l, X, v, m, _, Re, S),
    eventStore: _t,
    percentOfView: X,
    index: Me,
    indexPrevious: $e,
    limit: me,
    location: nt,
    offsetLocation: ve,
    previousLocation: Z,
    options: r,
    resizeHandler: rh(t, l, a, n, L, O, I),
    scrollBody: ce,
    scrollBounds: lh(me, ve, be, ce, X),
    scrollLooper: dh(je, me, ve, [nt, ve, Z, be]),
    scrollProgress: Ue,
    scrollSnapList: xe.map(Ue.get),
    scrollSnaps: xe,
    scrollTarget: Be,
    scrollTo: Ae,
    slideLooper: hh(L, M, je, fe, ee, Ne, xe, ve, n),
    slideFocus: lo,
    slidesHandler: yh(t, l, D),
    slidesInView: on,
    slideIndexes: ye,
    slideRegistry: Kt,
    slidesToScroll: ne,
    target: be,
    translate: _i(L, t)
  };
  return Ht;
}
function Ch() {
  let e = {}, t;
  function n(d) {
    t = d;
  }
  function o(d) {
    return e[d] || [];
  }
  function a(d) {
    return o(d).forEach((p) => p(t, d)), u;
  }
  function r(d, p) {
    return e[d] = o(d).concat([p]), u;
  }
  function l(d, p) {
    return e[d] = o(d).filter((c) => c !== p), u;
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
const Oh = {
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
function $h(e) {
  function t(r, l) {
    return bi(r, l || {});
  }
  function n(r) {
    const l = r.breakpoints || {}, i = Un(l).filter((u) => e.matchMedia(u).matches).map((u) => l[u]).reduce((u, d) => t(u, d), {});
    return t(r, i);
  }
  function o(r) {
    return r.map((l) => Un(l.breakpoints || {})).reduce((l, i) => l.concat(i), []).map(e.matchMedia);
  }
  return {
    mergeOptions: t,
    optionsAtMedia: n,
    optionsMediaQueries: o
  };
}
function Sh(e) {
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
function Do(e, t, n) {
  const o = e.ownerDocument, a = o.defaultView, r = $h(a), l = Sh(r), i = qn(), u = Ch(), {
    mergeOptions: d,
    optionsAtMedia: p,
    optionsMediaQueries: c
  } = r, {
    on: f,
    off: v,
    emit: m
  } = u, g = L;
  let b = !1, _, $ = d(Oh, Do.globalOptions), O = d($), D = [], S, P, T;
  function I() {
    const {
      container: ye,
      slides: U
    } = O;
    P = (Ta(ye) ? e.querySelector(ye) : ye) || e.children[0];
    const Se = Ta(U) ? P.querySelectorAll(U) : U;
    T = [].slice.call(Se || P.children);
  }
  function R(ye) {
    const U = xh(e, P, T, o, a, ye, u);
    if (ye.loop && !U.slideLooper.canLoop()) {
      const ue = Object.assign({}, ye, {
        loop: !1
      });
      return R(ue);
    }
    return U;
  }
  function A(ye, U) {
    b || ($ = d($, ye), O = p($), D = U || D, I(), _ = R(O), c([$, ...D.map(({
      options: ue
    }) => ue)]).forEach((ue) => i.add(ue, "change", L)), O.active && (_.translate.to(_.location.get()), _.animation.init(), _.slidesInView.init(), _.slideFocus.init($e), _.eventHandler.init($e), _.resizeHandler.init($e), _.slidesHandler.init($e), _.options.loop && _.slideLooper.loop(), P.offsetParent && T.length && _.dragHandler.init($e), S = l.init($e, D)));
  }
  function L(ye, U) {
    const ue = ne();
    M(), A(d({
      startIndex: ue
    }, ye), U), u.emit("reInit");
  }
  function M() {
    _.dragHandler.destroy(), _.eventStore.clear(), _.translate.clear(), _.slideLooper.clear(), _.resizeHandler.destroy(), _.slidesHandler.destroy(), _.slidesInView.destroy(), _.animation.destroy(), l.destroy(), i.clear();
  }
  function X() {
    b || (b = !0, i.clear(), M(), u.emit("destroy"), u.clear());
  }
  function H(ye, U, ue) {
    !O.active || b || (_.scrollBody.useBaseFriction().useDuration(U === !0 ? 0 : O.duration), _.scrollTo.index(ye, ue || 0));
  }
  function Q(ye) {
    const U = _.index.add(1).get();
    H(U, ye, -1);
  }
  function W(ye) {
    const U = _.index.add(-1).get();
    H(U, ye, 1);
  }
  function fe() {
    return _.index.add(1).get() !== ne();
  }
  function ee() {
    return _.index.add(-1).get() !== ne();
  }
  function z() {
    return _.scrollSnapList;
  }
  function ae() {
    return _.scrollProgress.get(_.offsetLocation.get());
  }
  function ne() {
    return _.index.get();
  }
  function Ne() {
    return _.indexPrevious.get();
  }
  function He() {
    return _.slidesInView.get();
  }
  function je() {
    return _.slidesInView.get(!1);
  }
  function Ye() {
    return S;
  }
  function wt() {
    return _;
  }
  function xe() {
    return e;
  }
  function me() {
    return P;
  }
  function Me() {
    return T;
  }
  const $e = {
    canScrollNext: fe,
    canScrollPrev: ee,
    containerNode: me,
    internalEngine: wt,
    destroy: X,
    off: v,
    on: f,
    emit: m,
    plugins: Ye,
    previousScrollSnap: Ne,
    reInit: g,
    rootNode: xe,
    scrollNext: Q,
    scrollPrev: W,
    scrollProgress: ae,
    scrollSnapList: z,
    scrollTo: H,
    selectedScrollSnap: ne,
    slideNodes: Me,
    slidesInView: He,
    slidesNotInView: je
  };
  return A(t, n), setTimeout(() => u.emit("init"), 0), $e;
}
Do.globalOptions = void 0;
function Ir(e = {}, t = []) {
  const n = pt(e), o = pt(t);
  let a = n ? e.value : e, r = o ? t.value : t;
  const l = Nn(), i = Nn();
  function u() {
    i.value && i.value.reInit(a, r);
  }
  return le(() => {
    !Gg() || !l.value || (Do.globalOptions = Ir.globalOptions, i.value = Do(l.value, a, r));
  }), _n(() => {
    i.value && i.value.destroy();
  }), n && Y(e, (d) => {
    Tr(a, d) || (a = d, u());
  }), o && Y(t, (d) => {
    Yg(r, d) || (r = d, u());
  }), [l, i];
}
Ir.globalOptions = void 0;
const [Bh, Eh] = Lg(
  ({ opts: e, orientation: t, plugins: n }, o) => {
    const [a, r] = Ir(
      {
        ...e,
        axis: t === "horizontal" ? "x" : "y"
      },
      n
    );
    function l() {
      var c;
      (c = r.value) == null || c.scrollPrev();
    }
    function i() {
      var c;
      (c = r.value) == null || c.scrollNext();
    }
    const u = E(!1), d = E(!1);
    function p(c) {
      u.value = (c == null ? void 0 : c.canScrollNext()) || !1, d.value = (c == null ? void 0 : c.canScrollPrev()) || !1;
    }
    return le(() => {
      var c, f, v;
      r.value && ((c = r.value) == null || c.on("init", p), (f = r.value) == null || f.on("reInit", p), (v = r.value) == null || v.on("select", p), o("init-api", r.value));
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
function Yo() {
  const e = Eh();
  if (!e) throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const Sb = /* @__PURE__ */ w({
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
      scrollNext: p,
      scrollPrev: c
    } = Bh(o, a);
    t({
      canScrollNext: r,
      canScrollPrev: l,
      carouselApi: i,
      carouselRef: u,
      orientation: d,
      scrollNext: p,
      scrollPrev: c
    });
    function f(v) {
      const m = o.orientation === "vertical" ? "ArrowUp" : "ArrowLeft", g = o.orientation === "vertical" ? "ArrowDown" : "ArrowRight";
      if (v.key === m) {
        v.preventDefault(), c();
        return;
      }
      v.key === g && (v.preventDefault(), p());
    }
    return (v, m) => (h(), j("div", {
      class: oe(s(N)("relative", o.class)),
      role: "region",
      "aria-roledescription": "carousel",
      tabindex: "0",
      onKeydown: f
    }, [
      x(v.$slots, "default", {
        canScrollNext: s(r),
        canScrollPrev: s(l),
        carouselApi: s(i),
        carouselRef: s(u),
        orientation: s(d),
        scrollNext: s(p),
        scrollPrev: s(c)
      })
    ], 34));
  }
}), Bb = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "CarouselContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { carouselRef: n, orientation: o } = Yo();
    return (a, r) => (h(), j("div", {
      ref_key: "carouselRef",
      ref: n,
      class: "overflow-hidden"
    }, [
      de("div", k({
        class: s(N)("flex", s(o) === "horizontal" ? "-ml-4" : "-mt-4 flex-col", t.class)
      }, a.$attrs), [
        x(a.$slots, "default")
      ], 16)
    ], 512));
  }
}), Eb = /* @__PURE__ */ w({
  __name: "CarouselItem",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { orientation: n } = Yo();
    return (o, a) => (h(), j("div", {
      role: "group",
      "aria-roledescription": "slide",
      class: oe(
        s(N)(
          "min-w-0 shrink-0 grow-0 basis-full",
          s(n) === "horizontal" ? "pl-4" : "pt-4",
          t.class
        )
      )
    }, [
      x(o.$slots, "default")
    ], 2));
  }
}), Db = /* @__PURE__ */ w({
  __name: "CarouselPrevious",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { orientation: n, canScrollPrev: o, scrollPrev: a } = Yo();
    return (r, l) => (h(), C(s(hi), {
      disabled: !s(o),
      class: oe(
        s(N)(
          "touch-manipulation absolute size-8 rounded-full p-0",
          s(n) === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          t.class
        )
      ),
      variant: "outline",
      onClick: s(a)
    }, {
      default: y(() => [
        x(r.$slots, "default", {}, () => [
          F(s(dg), { class: "size-4 text-current" }),
          l[0] || (l[0] = de("span", { class: "sr-only" }, "Previous Slide", -1))
        ])
      ]),
      _: 3
    }, 8, ["disabled", "class", "onClick"]));
  }
}), Tb = /* @__PURE__ */ w({
  __name: "CarouselNext",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { orientation: n, canScrollNext: o, scrollNext: a } = Yo();
    return (r, l) => (h(), C(s(hi), {
      disabled: !s(o),
      class: oe(
        s(N)(
          "touch-manipulation absolute size-8 rounded-full p-0",
          s(n) === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          t.class
        )
      ),
      variant: "outline",
      onClick: s(a)
    }, {
      default: y(() => [
        x(r.$slots, "default", {}, () => [
          F(s(cg), { class: "size-4 text-current" }),
          l[0] || (l[0] = de("span", { class: "sr-only" }, "Next Slide", -1))
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
const Dh = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ho = {
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
const Th = ({ size: e, strokeWidth: t = 2, absoluteStrokeWidth: n, color: o, iconNode: a, name: r, class: l, ...i }, { slots: u }) => ze(
  "svg",
  {
    ...ho,
    width: e || ho.width,
    height: e || ho.height,
    stroke: o || ho.stroke,
    "stroke-width": n ? Number(t) * 24 / Number(e) : t,
    class: ["lucide", `lucide-${Dh(r ?? "icon")}`],
    ...i
  },
  [...a.map((d) => ze(...d)), ...u.default ? [u.default()] : []]
);
/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kh = (e, t) => (n, { slots: o }) => ze(
  Th,
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
const Ah = kh("CheckIcon", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
function Mr(e) {
  return e ? e.flatMap((t) => t.type === Ee ? Mr(t.children) : [t]) : [];
}
const Aa = w({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      var u;
      if (!n.default)
        return null;
      const o = Mr(n.default()), a = o.findIndex((d) => d.type !== za);
      if (a === -1)
        return o;
      const r = o[a];
      (u = r.props) == null || delete u.ref;
      const l = r.props ? k(t, r.props) : t, i = Ks({ ...r, props: {} }, l);
      return o.length === 1 ? i : (o[a] = i, o);
    };
  }
}), Ph = ["area", "img", "input"], Ge = w({
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
    return typeof o == "string" && Ph.includes(o) ? () => ze(o, t) : o !== "template" ? () => ze(e.as, t, { default: n.default }) : () => ze(Aa, t, { default: n.default });
  }
}), Ih = /* @__PURE__ */ w({
  __name: "VisuallyHidden",
  props: {
    feature: { default: "focusable" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return (t, n) => (h(), C(s(Ge), {
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
        x(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-hidden", "data-hidden", "tabindex"]));
  }
});
function xi(e) {
  return Ra() ? (La(e), !0) : !1;
}
function Mh(e) {
  let t = !1, n;
  const o = Ao(!0);
  return (...a) => (t || (n = o.run(() => e(...a)), t = !0), n);
}
function Fh(e) {
  let t = 0, n, o;
  const a = () => {
    t -= 1, o && t <= 0 && (o.stop(), n = void 0, o = void 0);
  };
  return (...r) => (t += 1, o || (o = Ao(!0), n = o.run(() => e(...r))), xi(a), n);
}
const tn = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Rh = (e) => typeof e < "u", Lh = Object.prototype.toString, Vh = (e) => Lh.call(e) === "[object Object]", Ds = /* @__PURE__ */ Nh();
function Nh() {
  var e, t;
  return tn && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function jh(e) {
  return Ke();
}
function pa(e) {
  return Array.isArray(e) ? e : [e];
}
const zh = lt;
function Kh(e, t) {
  jh() && _n(e, t);
}
function Hh(e, t, n) {
  return Y(
    e,
    t,
    {
      ...n,
      immediate: !0
    }
  );
}
const Fr = tn ? window : void 0;
function An(e) {
  var t;
  const n = lt(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
function Rr(...e) {
  const t = [], n = () => {
    t.forEach((i) => i()), t.length = 0;
  }, o = (i, u, d, p) => (i.addEventListener(u, d, p), () => i.removeEventListener(u, d, p)), a = B(() => {
    const i = pa(lt(e[0])).filter((u) => u != null);
    return i.every((u) => typeof u != "string") ? i : void 0;
  }), r = Hh(
    () => {
      var i, u;
      return [
        (u = (i = a.value) == null ? void 0 : i.map((d) => An(d))) != null ? u : [Fr].filter((d) => d != null),
        pa(lt(a.value ? e[1] : e[0])),
        pa(s(a.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        lt(a.value ? e[3] : e[2])
      ];
    },
    ([i, u, d, p]) => {
      if (n(), !(i != null && i.length) || !(u != null && u.length) || !(d != null && d.length))
        return;
      const c = Vh(p) ? { ...p } : p;
      t.push(
        ...i.flatMap(
          (f) => u.flatMap(
            (v) => d.map((m) => o(f, v, m, c))
          )
        )
      );
    },
    { flush: "post" }
  ), l = () => {
    r(), n();
  };
  return xi(n), l;
}
function Wh() {
  const e = Nn(!1), t = Ke();
  return t && le(() => {
    e.value = !0;
  }, t), e;
}
function Uh(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function qh(...e) {
  let t, n, o = {};
  e.length === 3 ? (t = e[0], n = e[1], o = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], o = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: a = Fr,
    eventName: r = "keydown",
    passive: l = !1,
    dedupe: i = !1
  } = o, u = Uh(t);
  return Rr(a, r, (p) => {
    p.repeat && lt(i) || u(p) && n(p);
  }, l);
}
function Gh(e) {
  return JSON.parse(JSON.stringify(e));
}
function Lr(e, t, n, o = {}) {
  var a, r, l;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: p = !1,
    defaultValue: c,
    shouldEmit: f
  } = o, v = Ke(), m = n || (v == null ? void 0 : v.emit) || ((a = v == null ? void 0 : v.$emit) == null ? void 0 : a.bind(v)) || ((l = (r = v == null ? void 0 : v.proxy) == null ? void 0 : r.$emit) == null ? void 0 : l.bind(v == null ? void 0 : v.proxy));
  let g = d;
  t || (t = "modelValue"), g = g || `update:${t.toString()}`;
  const b = (O) => i ? typeof i == "function" ? i(O) : Gh(O) : O, _ = () => Rh(e[t]) ? b(e[t]) : c, $ = (O) => {
    f ? f(O) && m(g, O) : m(g, O);
  };
  if (u) {
    const O = _(), D = E(O);
    let S = !1;
    return Y(
      () => e[t],
      (P) => {
        S || (S = !0, D.value = b(P), te(() => S = !1));
      }
    ), Y(
      D,
      (P) => {
        !S && (P !== e[t] || p) && $(P);
      },
      { deep: p }
    ), D;
  } else
    return B({
      get() {
        return _();
      },
      set(O) {
        $(O);
      }
    });
}
function nn(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, o = Symbol(n);
  return [(l) => {
    const i = Xn(o, l);
    if (i || i === null)
      return i;
    throw new Error(
      `Injection \`${o.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (l) => (Zn(o, l), l)];
}
function Ts(e) {
  return typeof e == "string" ? `'${e}'` : new Yh().serialize(e);
}
const Yh = /* @__PURE__ */ function() {
  var t;
  class e {
    constructor() {
      qr(this, t, /* @__PURE__ */ new Map());
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
      let a = Pn(this, t).get(o);
      return a === void 0 && (Pn(this, t).set(o, `#${Pn(this, t).size}`), a = this.serializeObject(o), Pn(this, t).set(o, a)), a;
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
function Pa(e, t) {
  return e === t || Ts(e) === Ts(t);
}
function Ia(e) {
  return e == null;
}
function ks(e, t) {
  return Ia(e) ? !1 : Array.isArray(e) ? e.some((n) => Pa(n, t)) : Pa(e, t);
}
const [Ci, kb] = nn("ConfigProvider");
function Ve() {
  const e = Ke(), t = E(), n = B(() => {
    var l, i;
    return ["#text", "#comment"].includes((l = t.value) == null ? void 0 : l.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : An(t);
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
const [Oi, Xh] = nn("CollapsibleRoot"), Zh = /* @__PURE__ */ w({
  __name: "CollapsibleRoot",
  props: {
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    disabled: { type: Boolean },
    unmountOnHide: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:open"],
  setup(e, { expose: t, emit: n }) {
    const o = e, r = Lr(o, "open", n, {
      defaultValue: o.defaultOpen,
      passive: o.open === void 0
    }), { disabled: l, unmountOnHide: i } = pe(o);
    return Xh({
      contentId: "",
      disabled: l,
      open: r,
      unmountOnHide: i,
      onOpenToggle: () => {
        l.value || (r.value = !r.value);
      }
    }), t({ open: r }), Ve(), (u, d) => (h(), C(s(Ge), {
      as: u.as,
      "as-child": o.asChild,
      "data-state": s(r) ? "open" : "closed",
      "data-disabled": s(l) ? "" : void 0
    }, {
      default: y(() => [
        x(u.$slots, "default", { open: s(r) })
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state", "data-disabled"]));
  }
});
let Qh = 0;
function Gn(e, t = "reka") {
  var o;
  const n = Ci({ useId: void 0 });
  return Object.hasOwn(pn, "useId") ? `${t}-${(o = pn.useId) == null ? void 0 : o.call(pn)}` : n.useId ? `${t}-${n.useId()}` : `${t}-${++Qh}`;
}
function Jh(e, t) {
  const n = E(e);
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
function e0(e, t) {
  var b;
  const n = E({}), o = E("none"), a = E(e), r = e.value ? "mounted" : "unmounted";
  let l;
  const i = ((b = t.value) == null ? void 0 : b.ownerDocument.defaultView) ?? Fr, { state: u, dispatch: d } = Jh(r, {
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
  }), p = (_) => {
    var $;
    if (tn) {
      const O = new CustomEvent(_, { bubbles: !1, cancelable: !1 });
      ($ = t.value) == null || $.dispatchEvent(O);
    }
  };
  Y(
    e,
    async (_, $) => {
      var D;
      const O = $ !== _;
      if (await te(), O) {
        const S = o.value, P = yo(t.value);
        _ ? (d("MOUNT"), p("enter"), P === "none" && p("after-enter")) : P === "none" || P === "undefined" || ((D = n.value) == null ? void 0 : D.display) === "none" ? (d("UNMOUNT"), p("leave"), p("after-leave")) : $ && S !== P ? (d("ANIMATION_OUT"), p("leave")) : (d("UNMOUNT"), p("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const c = (_) => {
    const $ = yo(t.value), O = $.includes(
      _.animationName
    ), D = u.value === "mounted" ? "enter" : "leave";
    if (_.target === t.value && O && (p(`after-${D}`), d("ANIMATION_END"), !a.value)) {
      const S = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", l = i == null ? void 0 : i.setTimeout(() => {
        var P;
        ((P = t.value) == null ? void 0 : P.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = S);
      });
    }
    _.target === t.value && $ === "none" && d("ANIMATION_END");
  }, f = (_) => {
    _.target === t.value && (o.value = yo(t.value));
  }, v = Y(
    t,
    (_, $) => {
      _ ? (n.value = getComputedStyle(_), _.addEventListener("animationstart", f), _.addEventListener("animationcancel", c), _.addEventListener("animationend", c)) : (d("ANIMATION_END"), l !== void 0 && (i == null || i.clearTimeout(l)), $ == null || $.removeEventListener("animationstart", f), $ == null || $.removeEventListener("animationcancel", c), $ == null || $.removeEventListener("animationend", c));
    },
    { immediate: !0 }
  ), m = Y(u, () => {
    const _ = yo(t.value);
    o.value = u.value === "mounted" ? _ : "none";
  });
  return qe(() => {
    v(), m();
  }), {
    isPresent: B(
      () => ["mounted", "unmountSuspended"].includes(u.value)
    )
  };
}
function yo(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const Xo = w({
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
    const { present: o, forceMount: a } = pe(e), r = E(), { isPresent: l } = e0(o, r);
    n({ present: l });
    let i = t.default({ present: l.value });
    i = Mr(i || []);
    const u = Ke();
    if (i && (i == null ? void 0 : i.length) > 1) {
      const p = (d = u == null ? void 0 : u.parent) != null && d.type.name ? `<${u.parent.type.name} />` : "component";
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
    return () => a.value || o.value || l.value ? ze(t.default({ present: l.value })[0], {
      ref: (p) => {
        const c = An(p);
        return typeof (c == null ? void 0 : c.hasAttribute) > "u" || (c != null && c.hasAttribute("data-reka-popper-content-wrapper") ? r.value = c.firstElementChild : r.value = c), c;
      }
    }) : null;
  }
}), t0 = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["contentFound"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = Oi();
    a.contentId || (a.contentId = Gn(void 0, "reka-collapsible-content"));
    const r = E(), { forwardRef: l, currentElement: i } = Ve(), u = E(0), d = E(0), p = B(() => a.open.value), c = E(p.value), f = E();
    Y(
      () => {
        var m;
        return [p.value, (m = r.value) == null ? void 0 : m.present];
      },
      async () => {
        await te();
        const m = i.value;
        if (!m)
          return;
        f.value = f.value || {
          transitionDuration: m.style.transitionDuration,
          animationName: m.style.animationName
        }, m.style.transitionDuration = "0s", m.style.animationName = "none";
        const g = m.getBoundingClientRect();
        d.value = g.height, u.value = g.width, c.value || (m.style.transitionDuration = f.value.transitionDuration, m.style.animationName = f.value.animationName);
      },
      {
        immediate: !0
      }
    );
    const v = B(() => c.value && a.open.value);
    return le(() => {
      requestAnimationFrame(() => {
        c.value = !1;
      });
    }), Rr(i, "beforematch", (m) => {
      requestAnimationFrame(() => {
        a.onOpenToggle(), o("contentFound");
      });
    }), (m, g) => (h(), C(s(Xo), {
      ref_key: "presentRef",
      ref: r,
      present: m.forceMount || s(a).open.value,
      "force-mount": !0
    }, {
      default: y(({ present: b }) => {
        var _;
        return [
          F(s(Ge), k(m.$attrs, {
            id: s(a).contentId,
            ref: s(l),
            "as-child": n.asChild,
            as: m.as,
            hidden: b ? void 0 : s(a).unmountOnHide.value ? "" : "until-found",
            "data-state": v.value ? void 0 : s(a).open.value ? "open" : "closed",
            "data-disabled": (_ = s(a).disabled) != null && _.value ? "" : void 0,
            style: {
              "--reka-collapsible-content-height": `${d.value}px`,
              "--reka-collapsible-content-width": `${u.value}px`
            }
          }), {
            default: y(() => [
              !s(a).unmountOnHide.value || b ? x(m.$slots, "default", { key: 0 }) : ge("", !0)
            ]),
            _: 2
          }, 1040, ["id", "as-child", "as", "hidden", "data-state", "data-disabled", "style"])
        ];
      }),
      _: 3
    }, 8, ["present"]));
  }
}), n0 = /* @__PURE__ */ w({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    Ve();
    const n = Oi();
    return (o, a) => {
      var r, l;
      return h(), C(s(Ge), {
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
          x(o.$slots, "default")
        ]),
        _: 3
      }, 8, ["type", "as", "as-child", "aria-controls", "aria-expanded", "data-state", "data-disabled", "disabled", "onClick"]);
    };
  }
}), [bt, o0] = nn("DialogRoot"), a0 = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, a = Lr(n, "open", t, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), r = E(), l = E(), { modal: i } = pe(n);
    return o0({
      open: a,
      modal: i,
      openModal: () => {
        a.value = !0;
      },
      onOpenChange: (u) => {
        a.value = u;
      },
      onOpenToggle: () => {
        a.value = !a.value;
      },
      contentId: "",
      titleId: "",
      descriptionId: "",
      triggerElement: r,
      contentElement: l
    }), (u, d) => x(u.$slots, "default", {
      open: s(a),
      close: () => a.value = !1
    });
  }
}), r0 = /* @__PURE__ */ w({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    Ve();
    const n = bt();
    return (o, a) => (h(), C(s(Ge), k(t, {
      type: o.as === "button" ? "button" : void 0,
      onClick: a[0] || (a[0] = (r) => s(n).onOpenChange(!1))
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
});
function Zo(e) {
  const t = Ke(), n = t == null ? void 0 : t.type.emits, o = {};
  return n != null && n.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), n == null || n.forEach((a) => {
    o[zs(ko(a))] = (...r) => e(a, ...r);
  }), o;
}
function mt() {
  let e = document.activeElement;
  if (e == null)
    return null;
  for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null; )
    e = e.shadowRoot.activeElement;
  return e;
}
function s0(e) {
  return e ? "open" : "closed";
}
const l0 = "DialogTitle", i0 = "DialogContent";
function u0({
  titleName: e = l0,
  contentName: t = i0,
  componentLink: n = "dialog.html#title",
  titleId: o,
  descriptionId: a,
  contentElement: r
}) {
  const l = `Warning: \`${t}\` requires a \`${e}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.reka-ui.com/docs/components/${n}`, i = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${t}.`;
  le(() => {
    var p;
    document.getElementById(o) || console.warn(l);
    const d = (p = r.value) == null ? void 0 : p.getAttribute("aria-describedby");
    a && d && (document.getElementById(a) || console.warn(i));
  });
}
const d0 = Mh(() => E([]));
function c0() {
  const e = d0();
  return {
    add(t) {
      const n = e.value[0];
      t !== n && (n == null || n.pause()), e.value = As(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var n;
      e.value = As(e.value, t), (n = e.value[0]) == null || n.resume();
    }
  };
}
function As(e, t) {
  const n = [...e], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function p0(e) {
  return e.filter((t) => t.tagName !== "A");
}
const fa = "focusScope.autoFocusOnMount", ma = "focusScope.autoFocusOnUnmount", Ps = { bubbles: !1, cancelable: !0 };
function f0(e, { select: t = !1 } = {}) {
  const n = mt();
  for (const o of e)
    if (Ft(o, { select: t }), mt() !== n)
      return !0;
}
function m0(e) {
  const t = $i(e), n = Is(t, e), o = Is(t.reverse(), e);
  return [n, o];
}
function $i(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const a = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || a ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Is(e, t) {
  for (const n of e)
    if (!v0(n, { upTo: t }))
      return n;
}
function v0(e, { upTo: t }) {
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
function g0(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Ft(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = mt();
    e.focus({ preventScroll: !0 }), e !== n && g0(e) && t && e.select();
  }
}
const h0 = /* @__PURE__ */ w({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, o = t, { currentRef: a, currentElement: r } = Ve(), l = E(null), i = c0(), u = gn({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    he((p) => {
      if (!tn)
        return;
      const c = r.value;
      if (!n.trapped)
        return;
      function f(b) {
        if (u.paused || !c)
          return;
        const _ = b.target;
        c.contains(_) ? l.value = _ : Ft(l.value, { select: !0 });
      }
      function v(b) {
        if (u.paused || !c)
          return;
        const _ = b.relatedTarget;
        _ !== null && (c.contains(_) || Ft(l.value, { select: !0 }));
      }
      function m(b) {
        c.contains(l.value) || Ft(c);
      }
      document.addEventListener("focusin", f), document.addEventListener("focusout", v);
      const g = new MutationObserver(m);
      c && g.observe(c, { childList: !0, subtree: !0 }), p(() => {
        document.removeEventListener("focusin", f), document.removeEventListener("focusout", v), g.disconnect();
      });
    }), he(async (p) => {
      const c = r.value;
      if (await te(), !c)
        return;
      i.add(u);
      const f = mt();
      if (!c.contains(f)) {
        const m = new CustomEvent(fa, Ps);
        c.addEventListener(fa, (g) => o("mountAutoFocus", g)), c.dispatchEvent(m), m.defaultPrevented || (f0(p0($i(c)), {
          select: !0
        }), mt() === f && Ft(c));
      }
      p(() => {
        c.removeEventListener(fa, (b) => o("mountAutoFocus", b));
        const m = new CustomEvent(ma, Ps), g = (b) => {
          o("unmountAutoFocus", b);
        };
        c.addEventListener(ma, g), c.dispatchEvent(m), setTimeout(() => {
          m.defaultPrevented || Ft(f ?? document.body, { select: !0 }), c.removeEventListener(ma, g), i.remove(u);
        }, 0);
      });
    });
    function d(p) {
      if (!n.loop && !n.trapped || u.paused)
        return;
      const c = p.key === "Tab" && !p.altKey && !p.ctrlKey && !p.metaKey, f = mt();
      if (c && f) {
        const v = p.currentTarget, [m, g] = m0(v);
        m && g ? !p.shiftKey && f === g ? (p.preventDefault(), n.loop && Ft(m, { select: !0 })) : p.shiftKey && f === m && (p.preventDefault(), n.loop && Ft(g, { select: !0 })) : f === v && p.preventDefault();
      }
    }
    return (p, c) => (h(), C(s(Ge), {
      ref_key: "currentRef",
      ref: a,
      tabindex: "-1",
      "as-child": p.asChild,
      as: p.as,
      onKeydown: d
    }, {
      default: y(() => [
        x(p.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
});
function Si(e, t, n) {
  const o = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, { once: !0 }), o.dispatchEvent(a);
}
const y0 = "dismissableLayer.pointerDownOutside", b0 = "dismissableLayer.focusOutside";
function Bi(e, t) {
  const n = t.closest(
    "[data-dismissable-layer]"
  ), o = e.dataset.dismissableLayer === "" ? e : e.querySelector(
    "[data-dismissable-layer]"
  ), a = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(n && (o === n || a.indexOf(o) < a.indexOf(n)));
}
function w0(e, t, n = !0) {
  var l;
  const o = ((l = t == null ? void 0 : t.value) == null ? void 0 : l.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), a = E(!1), r = E(() => {
  });
  return he((i) => {
    if (!tn || !lt(n))
      return;
    const u = async (p) => {
      const c = p.target;
      if (!(!(t != null && t.value) || !c)) {
        if (Bi(t.value, c)) {
          a.value = !1;
          return;
        }
        if (p.target && !a.value) {
          let f = function() {
            Si(
              y0,
              e,
              v
            );
          };
          const v = { originalEvent: p };
          p.pointerType === "touch" ? (o.removeEventListener("click", r.value), r.value = f, o.addEventListener("click", r.value, {
            once: !0
          })) : f();
        } else
          o.removeEventListener("click", r.value);
        a.value = !1;
      }
    }, d = window.setTimeout(() => {
      o.addEventListener("pointerdown", u);
    }, 0);
    i(() => {
      window.clearTimeout(d), o.removeEventListener("pointerdown", u), o.removeEventListener("click", r.value);
    });
  }), {
    onPointerDownCapture: () => {
      lt(n) && (a.value = !0);
    }
  };
}
function _0(e, t, n = !0) {
  var r;
  const o = ((r = t == null ? void 0 : t.value) == null ? void 0 : r.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), a = E(!1);
  return he((l) => {
    if (!tn || !lt(n))
      return;
    const i = async (u) => {
      if (!(t != null && t.value))
        return;
      await te(), await te();
      const d = u.target;
      !t.value || !d || Bi(t.value, d) || u.target && !a.value && Si(
        b0,
        e,
        { originalEvent: u }
      );
    };
    o.addEventListener("focusin", i), l(() => o.removeEventListener("focusin", i));
  }), {
    onFocusCapture: () => {
      lt(n) && (a.value = !0);
    },
    onBlurCapture: () => {
      lt(n) && (a.value = !1);
    }
  };
}
const St = gn({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), x0 = /* @__PURE__ */ w({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, o = t, { forwardRef: a, currentElement: r } = Ve(), l = B(
      () => {
        var m;
        return ((m = r.value) == null ? void 0 : m.ownerDocument) ?? globalThis.document;
      }
    ), i = B(() => St.layersRoot), u = B(() => r.value ? Array.from(i.value).indexOf(r.value) : -1), d = B(() => St.layersWithOutsidePointerEventsDisabled.size > 0), p = B(() => {
      const m = Array.from(i.value), [g] = [...St.layersWithOutsidePointerEventsDisabled].slice(-1), b = m.indexOf(g);
      return u.value >= b;
    }), c = w0(async (m) => {
      const g = [...St.branches].some(
        (b) => b == null ? void 0 : b.contains(m.target)
      );
      !p.value || g || (o("pointerDownOutside", m), o("interactOutside", m), await te(), m.defaultPrevented || o("dismiss"));
    }, r), f = _0((m) => {
      [...St.branches].some(
        (b) => b == null ? void 0 : b.contains(m.target)
      ) || (o("focusOutside", m), o("interactOutside", m), m.defaultPrevented || o("dismiss"));
    }, r);
    qh("Escape", (m) => {
      u.value === i.value.size - 1 && (o("escapeKeyDown", m), m.defaultPrevented || o("dismiss"));
    });
    let v;
    return he((m) => {
      r.value && (n.disableOutsidePointerEvents && (St.layersWithOutsidePointerEventsDisabled.size === 0 && (v = l.value.body.style.pointerEvents, l.value.body.style.pointerEvents = "none"), St.layersWithOutsidePointerEventsDisabled.add(r.value)), i.value.add(r.value), m(() => {
        n.disableOutsidePointerEvents && St.layersWithOutsidePointerEventsDisabled.size === 1 && (l.value.body.style.pointerEvents = v);
      }));
    }), he((m) => {
      m(() => {
        r.value && (i.value.delete(r.value), St.layersWithOutsidePointerEventsDisabled.delete(r.value));
      });
    }), (m, g) => (h(), C(s(Ge), {
      ref: s(a),
      "as-child": m.asChild,
      as: m.as,
      "data-dismissable-layer": "",
      style: kt({
        pointerEvents: d.value ? p.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: s(f).onFocusCapture,
      onBlurCapture: s(f).onBlurCapture,
      onPointerdownCapture: s(c).onPointerDownCapture
    }, {
      default: y(() => [
        x(m.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
}), Ei = /* @__PURE__ */ w({
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
    const n = e, o = t, a = bt(), { forwardRef: r, currentElement: l } = Ve();
    return a.titleId || (a.titleId = Gn(void 0, "reka-dialog-title")), a.descriptionId || (a.descriptionId = Gn(void 0, "reka-dialog-description")), le(() => {
      a.contentElement = l, mt() !== document.body && (a.triggerElement.value = mt());
    }), process.env.NODE_ENV !== "production" && u0({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: a.titleId,
      descriptionId: a.descriptionId,
      contentElement: l
    }), (i, u) => (h(), C(s(h0), {
      "as-child": "",
      loop: "",
      trapped: n.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => o("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => o("closeAutoFocus", d))
    }, {
      default: y(() => [
        F(s(x0), k({
          id: s(a).contentId,
          ref: s(r),
          as: i.as,
          "as-child": i.asChild,
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": s(a).descriptionId,
          "aria-labelledby": s(a).titleId,
          "data-state": s(s0)(s(a).open.value)
        }, i.$attrs, {
          onDismiss: u[0] || (u[0] = (d) => s(a).onOpenChange(!1)),
          onEscapeKeyDown: u[1] || (u[1] = (d) => o("escapeKeyDown", d)),
          onFocusOutside: u[2] || (u[2] = (d) => o("focusOutside", d)),
          onInteractOutside: u[3] || (u[3] = (d) => o("interactOutside", d)),
          onPointerDownOutside: u[4] || (u[4] = (d) => o("pointerDownOutside", d))
        }), {
          default: y(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "as", "as-child", "disable-outside-pointer-events", "aria-describedby", "aria-labelledby", "data-state"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
});
var C0 = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, dn = /* @__PURE__ */ new WeakMap(), bo = /* @__PURE__ */ new WeakMap(), wo = {}, va = 0, Di = function(e) {
  return e && (e.host || Di(e.parentNode));
}, O0 = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = Di(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, $0 = function(e, t, n, o) {
  var a = O0(t, Array.isArray(e) ? e : [e]);
  wo[n] || (wo[n] = /* @__PURE__ */ new WeakMap());
  var r = wo[n], l = [], i = /* @__PURE__ */ new Set(), u = new Set(a), d = function(c) {
    !c || i.has(c) || (i.add(c), d(c.parentNode));
  };
  a.forEach(d);
  var p = function(c) {
    !c || u.has(c) || Array.prototype.forEach.call(c.children, function(f) {
      if (i.has(f))
        p(f);
      else
        try {
          var v = f.getAttribute(o), m = v !== null && v !== "false", g = (dn.get(f) || 0) + 1, b = (r.get(f) || 0) + 1;
          dn.set(f, g), r.set(f, b), l.push(f), g === 1 && m && bo.set(f, !0), b === 1 && f.setAttribute(n, "true"), m || f.setAttribute(o, "true");
        } catch (_) {
          console.error("aria-hidden: cannot operate on ", f, _);
        }
    });
  };
  return p(t), i.clear(), va++, function() {
    l.forEach(function(c) {
      var f = dn.get(c) - 1, v = r.get(c) - 1;
      dn.set(c, f), r.set(c, v), f || (bo.has(c) || c.removeAttribute(o), bo.delete(c)), v || c.removeAttribute(n);
    }), va--, va || (dn = /* @__PURE__ */ new WeakMap(), dn = /* @__PURE__ */ new WeakMap(), bo = /* @__PURE__ */ new WeakMap(), wo = {});
  };
}, S0 = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), a = C0(e);
  return a ? (o.push.apply(o, Array.from(a.querySelectorAll("[aria-live], script"))), $0(o, a, n, "aria-hidden")) : function() {
    return null;
  };
};
function B0(e) {
  let t;
  Y(() => An(e), (n) => {
    n ? t = S0(n) : t && t();
  }), qe(() => {
    t && t();
  });
}
const E0 = /* @__PURE__ */ w({
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
    const n = e, o = t, a = bt(), r = Zo(o), { forwardRef: l, currentElement: i } = Ve();
    return B0(i), (u, d) => (h(), C(Ei, k({ ...n, ...s(r) }, {
      ref: s(l),
      "trap-focus": s(a).open.value,
      "disable-outside-pointer-events": !0,
      onCloseAutoFocus: d[0] || (d[0] = (p) => {
        var c;
        p.defaultPrevented || (p.preventDefault(), (c = s(a).triggerElement.value) == null || c.focus());
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
        x(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), D0 = /* @__PURE__ */ w({
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
    const n = e, a = Zo(t);
    Ve();
    const r = bt(), l = E(!1), i = E(!1);
    return (u, d) => (h(), C(Ei, k({ ...n, ...s(a) }, {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: d[0] || (d[0] = (p) => {
        var c;
        p.defaultPrevented || (l.value || (c = s(r).triggerElement.value) == null || c.focus(), p.preventDefault()), l.value = !1, i.value = !1;
      }),
      onInteractOutside: d[1] || (d[1] = (p) => {
        var v;
        p.defaultPrevented || (l.value = !0, p.detail.originalEvent.type === "pointerdown" && (i.value = !0));
        const c = p.target;
        ((v = s(r).triggerElement.value) == null ? void 0 : v.contains(c)) && p.preventDefault(), p.detail.originalEvent.type === "focusin" && i.value && p.preventDefault();
      })
    }), {
      default: y(() => [
        x(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), T0 = /* @__PURE__ */ w({
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
    const n = e, o = t, a = bt(), r = Zo(o), { forwardRef: l } = Ve();
    return (i, u) => (h(), C(s(Xo), {
      present: i.forceMount || s(a).open.value
    }, {
      default: y(() => [
        s(a).modal.value ? (h(), C(E0, k({
          key: 0,
          ref: s(l)
        }, { ...n, ...s(r), ...i.$attrs }), {
          default: y(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (h(), C(D0, k({
          key: 1,
          ref: s(l)
        }, { ...n, ...s(r), ...i.$attrs }), {
          default: y(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), k0 = /* @__PURE__ */ w({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    Ve();
    const n = bt();
    return (o, a) => (h(), C(s(Ge), k(t, {
      id: s(n).descriptionId
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
});
function ga(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function Ma(e, t, n = ".", o) {
  if (!ga(t))
    return Ma(e, {}, n, o);
  const a = Object.assign({}, t);
  for (const r in e) {
    if (r === "__proto__" || r === "constructor")
      continue;
    const l = e[r];
    l != null && (o && o(a, r, l, n) || (Array.isArray(l) && Array.isArray(a[r]) ? a[r] = [...l, ...a[r]] : ga(l) && ga(a[r]) ? a[r] = Ma(
      l,
      a[r],
      (n ? `${n}.` : "") + r.toString(),
      o
    ) : a[r] = l));
  }
  return a;
}
function A0(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, o) => Ma(n, o, "", e), {})
  );
}
const P0 = A0(), I0 = Fh(() => {
  const e = E(/* @__PURE__ */ new Map()), t = E(), n = B(() => {
    for (const l of e.value.values())
      if (l)
        return !0;
    return !1;
  }), o = Ci({
    scrollBody: E(!0)
  });
  let a = null;
  const r = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.documentElement.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", Ds && (a == null || a()), t.value = void 0;
  };
  return Y(n, (l, i) => {
    var c;
    if (!tn)
      return;
    if (!l) {
      i && r();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const u = window.innerWidth - document.documentElement.clientWidth, d = { padding: u, margin: 0 }, p = (c = o.scrollBody) != null && c.value ? typeof o.scrollBody.value == "object" ? P0({
      padding: o.scrollBody.value.padding === !0 ? u : o.scrollBody.value.padding,
      margin: o.scrollBody.value.margin === !0 ? u : o.scrollBody.value.margin
    }, d) : d : { padding: 0, margin: 0 };
    u > 0 && (document.body.style.paddingRight = typeof p.padding == "number" ? `${p.padding}px` : String(p.padding), document.body.style.marginRight = typeof p.margin == "number" ? `${p.margin}px` : String(p.margin), document.documentElement.style.setProperty("--scrollbar-width", `${u}px`), document.body.style.overflow = "hidden"), Ds && (a = Rr(
      document,
      "touchmove",
      (f) => F0(f),
      { passive: !1 }
    )), te(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), e;
});
function M0(e) {
  const t = Math.random().toString(36).substring(2, 7), n = I0();
  n.value.set(t, e);
  const o = B({
    get: () => n.value.get(t) ?? !1,
    set: (a) => n.value.set(t, a)
  });
  return Kh(() => {
    n.value.delete(t);
  }), o;
}
function Ti(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight)
    return !0;
  {
    const n = e.parentNode;
    return !(n instanceof Element) || n.tagName === "BODY" ? !1 : Ti(n);
  }
}
function F0(e) {
  const t = e || window.event, n = t.target;
  return n instanceof Element && Ti(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
const R0 = /* @__PURE__ */ w({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = bt();
    return M0(!0), Ve(), (n, o) => (h(), C(s(Ge), {
      as: n.as,
      "as-child": n.asChild,
      "data-state": s(t).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" }
    }, {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state"]));
  }
}), L0 = /* @__PURE__ */ w({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = bt(), { forwardRef: n } = Ve();
    return (o, a) => {
      var r;
      return (r = s(t)) != null && r.modal.value ? (h(), C(s(Xo), {
        key: 0,
        present: o.forceMount || s(t).open.value
      }, {
        default: y(() => [
          F(R0, k(o.$attrs, {
            ref: s(n),
            as: o.as,
            "as-child": o.asChild
          }), {
            default: y(() => [
              x(o.$slots, "default")
            ]),
            _: 3
          }, 16, ["as", "as-child"])
        ]),
        _: 3
      }, 8, ["present"])) : ge("", !0);
    };
  }
}), V0 = /* @__PURE__ */ w({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = Wh();
    return (n, o) => s(t) || n.forceMount ? (h(), C(Yn, {
      key: 0,
      to: n.to,
      disabled: n.disabled,
      defer: n.defer
    }, [
      x(n.$slots, "default")
    ], 8, ["to", "disabled", "defer"])) : ge("", !0);
  }
});
function N0(e) {
  const t = Ke(), n = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((a, r) => {
    const l = (t == null ? void 0 : t.type.props[r]).default;
    return l !== void 0 && (a[r] = l), a;
  }, {}), o = Ns(e);
  return B(() => {
    const a = {}, r = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(r).forEach((l) => {
      a[ko(l)] = r[l];
    }), Object.keys({ ...n, ...a }).reduce((l, i) => (o.value[i] !== void 0 && (l[i] = o.value[i]), l), {});
  });
}
function Qo(e, t) {
  const n = N0(e), o = t ? Zo(t) : {};
  return B(() => ({
    ...n.value,
    ...o
  }));
}
const j0 = /* @__PURE__ */ w({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e, n = bt();
    return Ve(), (o, a) => (h(), C(s(Ge), k(t, {
      id: s(n).titleId
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), z0 = /* @__PURE__ */ w({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = bt(), { forwardRef: o, currentElement: a } = Ve();
    return n.contentId || (n.contentId = Gn(void 0, "reka-dialog-content")), le(() => {
      n.triggerElement.value = a.value;
    }), (r, l) => (h(), C(s(Ge), k(t, {
      ref: s(o),
      type: r.as === "button" ? "button" : void 0,
      "aria-haspopup": "dialog",
      "aria-expanded": s(n).open.value || !1,
      "aria-controls": s(n).open.value ? s(n).contentId : void 0,
      "data-state": s(n).open.value ? "open" : "closed",
      onClick: s(n).onOpenToggle
    }), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "onClick"]));
  }
});
function Fa() {
  const e = E(), t = B(() => {
    var n, o;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (o = e.value) == null ? void 0 : o.$el.nextElementSibling : An(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
function K0(e) {
  return B(() => {
    var t;
    return zh(e) ? !!((t = An(e)) != null && t.closest("form")) : !0;
  });
}
const Ms = "data-reka-collection-item";
function H0(e = {}) {
  const { key: t = "", isProvider: n = !1 } = e, o = `${t}CollectionProvider`;
  let a;
  if (n) {
    const p = E(/* @__PURE__ */ new Map());
    a = {
      collectionRef: E(),
      itemMap: p
    }, Zn(o, a);
  } else
    a = Xn(o);
  const r = (p = !1) => {
    const c = a.collectionRef.value;
    if (!c)
      return [];
    const f = Array.from(c.querySelectorAll(`[${Ms}]`)), m = Array.from(a.itemMap.value.values()).sort(
      (g, b) => f.indexOf(g.ref) - f.indexOf(b.ref)
    );
    return p ? m : m.filter((g) => g.ref.dataset.disabled !== "");
  }, l = w({
    name: "CollectionSlot",
    setup(p, { slots: c }) {
      const { primitiveElement: f, currentElement: v } = Fa();
      return Y(v, () => {
        a.collectionRef.value = v.value;
      }), () => ze(Aa, { ref: f }, c);
    }
  }), i = w({
    name: "CollectionItem",
    inheritAttrs: !1,
    props: {
      value: {
        // It accepts any value
        validator: () => !0
      }
    },
    setup(p, { slots: c, attrs: f }) {
      const { primitiveElement: v, currentElement: m } = Fa();
      return he((g) => {
        if (m.value) {
          const b = Hs(m.value);
          a.itemMap.value.set(b, { ref: m.value, value: p.value }), g(() => a.itemMap.value.delete(b));
        }
      }), () => ze(Aa, { ...f, [Ms]: "", ref: v }, c);
    }
  }), u = B(() => Array.from(a.itemMap.value.values())), d = B(() => a.itemMap.value.size);
  return { getItems: r, reactiveItems: u, itemMapSize: d, CollectionSlot: l, CollectionItem: i };
}
const W0 = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function U0(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function q0(e, t, n) {
  const o = U0(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o)))
    return W0[o];
}
function G0(e, t = !1) {
  const n = mt();
  for (const o of e)
    if (o === n || (o.focus({ preventScroll: t }), mt() !== n))
      return;
}
function Y0(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
const [X0, Ab] = nn("RovingFocusGroup"), Fs = /* @__PURE__ */ w({
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
    const t = e, { primitiveElement: n, currentElement: o } = Fa(), a = B(() => t.checked ?? t.value);
    return Y(a, (r, l) => {
      if (!o.value)
        return;
      const i = o.value, u = window.HTMLInputElement.prototype, p = Object.getOwnPropertyDescriptor(u, "value").set;
      if (p && r !== l) {
        const c = new Event("input", { bubbles: !0 }), f = new Event("change", { bubbles: !0 });
        p.call(i, r), i.dispatchEvent(c), i.dispatchEvent(f);
      }
    }), (r, l) => (h(), C(Ih, k({
      ref_key: "primitiveElement",
      ref: n
    }, { ...t, ...r.$attrs }, { as: "input" }), null, 16));
  }
}), Z0 = /* @__PURE__ */ w({
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
    const t = e, n = B(
      () => typeof t.value == "object" && Array.isArray(t.value) && t.value.length === 0 && t.required
    ), o = B(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" ? [{ name: t.name, value: t.value }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((a, r) => typeof a == "object" ? Object.entries(a).map(([l, i]) => ({ name: `[${t.name}][${r}][${l}]`, value: i })) : { name: `[${t.name}][${r}]`, value: a }) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([a, r]) => ({ name: `[${t.name}][${a}]`, value: r })) : []);
    return (a, r) => n.value ? (h(), C(Fs, k({ key: a.name }, { ...t, ...a.$attrs }, {
      name: a.name,
      value: a.value
    }), null, 16, ["name", "value"])) : (h(!0), j(Ee, { key: 1 }, Lt(o.value, (l) => (h(), C(Fs, k({
      key: l.name,
      ref_for: !0
    }, { ...t, ...a.$attrs }, {
      name: l.name,
      value: l.value
    }), null, 16, ["name", "value"]))), 128));
  }
}), [Q0, Pb] = nn("CheckboxGroupRoot");
function To(e) {
  return e === "indeterminate";
}
function ki(e) {
  return To(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const J0 = /* @__PURE__ */ w({
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
    const t = e, n = X0(), o = Gn(), a = B(() => t.tabStopId || o), r = B(
      () => n.currentTabStopId.value === a.value
    ), { getItems: l, CollectionItem: i } = H0();
    le(() => {
      t.focusable && n.onFocusableItemAdd();
    }), qe(() => {
      t.focusable && n.onFocusableItemRemove();
    });
    function u(d) {
      if (d.key === "Tab" && d.shiftKey) {
        n.onItemShiftTab();
        return;
      }
      if (d.target !== d.currentTarget)
        return;
      const p = q0(
        d,
        n.orientation.value,
        n.dir.value
      );
      if (p !== void 0) {
        if (d.metaKey || d.ctrlKey || d.altKey || !t.allowShiftKey && d.shiftKey)
          return;
        d.preventDefault();
        let c = [...l().map((f) => f.ref).filter((f) => f.dataset.disabled !== "")];
        if (p === "last")
          c.reverse();
        else if (p === "prev" || p === "next") {
          p === "prev" && c.reverse();
          const f = c.indexOf(
            d.currentTarget
          );
          c = n.loop.value ? Y0(c, f + 1) : c.slice(f + 1);
        }
        te(() => G0(c));
      }
    }
    return (d, p) => (h(), C(s(i), null, {
      default: y(() => [
        F(s(Ge), {
          tabindex: r.value ? 0 : -1,
          "data-orientation": s(n).orientation.value,
          "data-active": d.active ? "" : void 0,
          "data-disabled": d.focusable ? void 0 : "",
          as: d.as,
          "as-child": d.asChild,
          onMousedown: p[0] || (p[0] = (c) => {
            d.focusable ? s(n).onItemFocus(a.value) : c.preventDefault();
          }),
          onFocus: p[1] || (p[1] = (c) => s(n).onItemFocus(a.value)),
          onKeydown: u
        }, {
          default: y(() => [
            x(d.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "data-active", "data-disabled", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), [ey, ty] = nn("CheckboxRoot"), ny = /* @__PURE__ */ w({
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
    const n = e, o = t, { forwardRef: a, currentElement: r } = Ve(), l = Q0(null), i = Lr(n, "modelValue", o, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), u = B(() => (l == null ? void 0 : l.disabled.value) || n.disabled), d = B(() => Ia(l == null ? void 0 : l.modelValue.value) ? i.value === "indeterminate" ? "indeterminate" : i.value : ks(l.modelValue.value, n.value));
    function p() {
      if (Ia(l == null ? void 0 : l.modelValue.value))
        i.value = To(i.value) ? !0 : !i.value;
      else {
        const v = [...l.modelValue.value || []];
        if (ks(v, n.value)) {
          const m = v.findIndex((g) => Pa(g, n.value));
          v.splice(m, 1);
        } else
          v.push(n.value);
        l.modelValue.value = v;
      }
    }
    const c = K0(r), f = B(() => {
      var v;
      return n.id && r.value ? (v = document.querySelector(`[for="${n.id}"]`)) == null ? void 0 : v.innerText : void 0;
    });
    return ty({
      disabled: u,
      state: d
    }), (v, m) => {
      var g, b;
      return h(), C(Je((g = s(l)) != null && g.rovingFocus.value ? s(J0) : s(Ge)), k(v.$attrs, {
        id: v.id,
        ref: s(a),
        role: "checkbox",
        "as-child": v.asChild,
        as: v.as,
        type: v.as === "button" ? "button" : void 0,
        "aria-checked": s(To)(d.value) ? "mixed" : d.value,
        "aria-required": v.required,
        "aria-label": v.$attrs["aria-label"] || f.value,
        "data-state": s(ki)(d.value),
        "data-disabled": u.value ? "" : void 0,
        disabled: u.value,
        focusable: (b = s(l)) != null && b.rovingFocus.value ? !u.value : void 0,
        onKeydown: Rt(Te(() => {
        }, ["prevent"]), ["enter"]),
        onClick: p
      }), {
        default: y(() => [
          x(v.$slots, "default", {
            modelValue: s(i),
            state: d.value
          }),
          s(c) && v.name && !s(l) ? (h(), C(s(Z0), {
            key: 0,
            type: "checkbox",
            checked: !!d.value,
            name: v.name,
            value: v.value,
            disabled: u.value,
            required: v.required
          }, null, 8, ["checked", "name", "value", "disabled", "required"])) : ge("", !0)
        ]),
        _: 3
      }, 16, ["id", "as-child", "as", "type", "aria-checked", "aria-required", "aria-label", "data-state", "data-disabled", "disabled", "focusable", "onKeydown"]);
    };
  }
}), oy = /* @__PURE__ */ w({
  __name: "CheckboxIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const { forwardRef: t } = Ve(), n = ey();
    return (o, a) => (h(), C(s(Xo), {
      present: o.forceMount || s(To)(s(n).state.value) || s(n).state.value === !0
    }, {
      default: y(() => [
        F(s(Ge), k({
          ref: s(t),
          "data-state": s(ki)(s(n).state.value),
          "data-disabled": s(n).disabled.value ? "" : void 0,
          style: { pointerEvents: "none" },
          "as-child": o.asChild,
          as: o.as
        }, o.$attrs), {
          default: y(() => [
            x(o.$slots, "default")
          ]),
          _: 3
        }, 16, ["data-state", "data-disabled", "as-child", "as"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), ay = /* @__PURE__ */ w({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(V0), q(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ib = /* @__PURE__ */ w({
  __name: "Checkbox",
  props: {
    defaultValue: { type: [Boolean, String] },
    modelValue: { type: [Boolean, String, null] },
    disabled: { type: Boolean },
    value: {},
    id: {},
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    name: {},
    required: { type: Boolean },
    class: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = B(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = Qo(a, o);
    return (l, i) => (h(), C(s(ny), k(s(r), {
      class: s(N)(
        "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        n.class
      )
    }), {
      default: y(() => [
        F(s(oy), { class: "flex h-full w-full items-center justify-center text-current" }, {
          default: y(() => [
            x(l.$slots, "default", {}, () => [
              F(s(Ah), { class: "h-4 w-4" })
            ])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Mb = /* @__PURE__ */ w({
  __name: "Collapsible",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    disabled: { type: Boolean },
    unmountOnHide: { type: Boolean },
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = Qo(e, t);
    return (r, l) => (h(), C(s(Zh), q(G(s(a))), {
      default: y(({ open: i }) => [
        x(r.$slots, "default", { open: i })
      ]),
      _: 3
    }, 16));
  }
}), Fb = /* @__PURE__ */ w({
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(t0), k(t, { class: "overflow-hidden transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down" }), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Rb = /* @__PURE__ */ w({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(n0), q(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ry = /* @__PURE__ */ w({
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
    const n = e, o = t, a = B(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = J(a, o);
    return (l, i) => (h(), C(s(ap), k(s(r), {
      class: s(N)(
        "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
        n.class
      )
    }), {
      default: y(() => [
        x(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), sy = /* @__PURE__ */ w({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = J(e, t);
    return (r, l) => (h(), C(s(lr), q(G(s(a))), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Lb = /* @__PURE__ */ w({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(Zt), q(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Vb = /* @__PURE__ */ w({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(ir), q(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Nb = /* @__PURE__ */ w({
  __name: "DialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), j("div", {
      class: oe(s(N)("flex flex-col gap-y-1.5 text-center sm:text-left", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), jb = /* @__PURE__ */ w({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = Ie(n);
    return (a, r) => (h(), C(s(fr), k(s(o), {
      class: s(N)("text-lg font-semibold leading-none tracking-tight", t.class)
    }), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), zb = /* @__PURE__ */ w({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = Ie(n);
    return (a, r) => (h(), C(s(mr), k(s(o), {
      class: s(N)("text-sm text-muted-foreground", t.class)
    }), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ly = /* @__PURE__ */ w({
  __name: "DialogContent",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus", "close"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = B(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = J(a, o);
    return (l, i) => (h(), C(s(ur), null, {
      default: y(() => [
        F(s(zo), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        F(s(jo), k(s(r), {
          class: s(N)(
            "fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
            n.class
          )
        }), {
          default: y(() => [
            x(l.$slots, "default"),
            F(s(Zt), {
              class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
              onClick: i[0] || (i[0] = (u) => o("close", u))
            }, {
              default: y(() => [
                F(s(qo), { class: "size-4" }),
                i[1] || (i[1] = de("span", { class: "sr-only" }, "Close", -1))
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
}), Kb = /* @__PURE__ */ w({
  __name: "DialogScrollContent",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = B(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = J(a, o);
    return (l, i) => (h(), C(s(ur), null, {
      default: y(() => [
        F(s(zo), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: y(() => [
            F(s(jo), k({
              class: s(N)(
                "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                n.class
              )
            }, s(r), {
              onPointerDownOutside: i[0] || (i[0] = (u) => {
                const d = u.detail.originalEvent, p = d.target;
                (d.offsetX > p.clientWidth || d.offsetY > p.clientHeight) && u.preventDefault();
              })
            }), {
              default: y(() => [
                x(l.$slots, "default"),
                F(s(Zt), { class: "absolute right-4 top-4 rounded-md p-0.5 transition-colors hover:bg-secondary" }, {
                  default: y(() => [
                    F(s(qo), { class: "h-4 w-4" }),
                    i[1] || (i[1] = de("span", { class: "sr-only" }, "Close", -1))
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
}), Hb = /* @__PURE__ */ w({
  __name: "DialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), j("div", {
      class: oe(s(N)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), Wb = /* @__PURE__ */ w({
  __name: "CommandDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = J(e, t);
    return (r, l) => (h(), C(s(sy), q(G(s(a))), {
      default: y(() => [
        F(s(ly), { class: "overflow-hidden p-0 shadow-lg" }, {
          default: y(() => [
            F(ry, { class: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5" }, {
              default: y(() => [
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
}), Ub = /* @__PURE__ */ w({
  __name: "CommandEmpty",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(pp), k(n.value, {
      class: s(N)("py-6 text-center text-sm", t.class)
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), qb = /* @__PURE__ */ w({
  __name: "CommandGroup",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {},
    heading: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(lp), k(n.value, {
      class: s(N)(
        "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
        t.class
      )
    }), {
      default: y(() => [
        o.heading ? (h(), C(s(ip), {
          key: 0,
          class: "px-2 py-1.5 text-xs font-medium text-muted-foreground"
        }, {
          default: y(() => [
            Le(We(o.heading), 1)
          ]),
          _: 1
        })) : ge("", !0),
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), iy = {
  class: "flex items-center border-b px-3",
  "cmdk-input-wrapper": ""
}, Gb = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "CommandInput",
  props: {
    type: {},
    disabled: { type: Boolean },
    autoFocus: { type: Boolean },
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = Ie(n);
    return (a, r) => (h(), j("div", iy, [
      F(s(gg), { class: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
      F(s(rp), k({ ...s(o), ...a.$attrs }, {
        "auto-focus": "",
        class: s(N)(
          "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          t.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), Yb = /* @__PURE__ */ w({
  __name: "CommandItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = B(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = J(a, o);
    return (l, i) => (h(), C(s(gp), k(s(r), {
      class: s(N)(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        n.class
      )
    }), {
      default: y(() => [
        x(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), uy = { role: "presentation" }, Xb = /* @__PURE__ */ w({
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
    const n = e, o = t, a = B(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = J(a, o);
    return (l, i) => (h(), C(s(cp), k(s(r), {
      class: s(N)("max-h-[300px] overflow-y-auto overflow-x-hidden", n.class)
    }), {
      default: y(() => [
        de("div", uy, [
          x(l.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Zb = /* @__PURE__ */ w({
  __name: "CommandSeparator",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(hp), k(n.value, {
      class: s(N)("-mx-1 h-px bg-border", t.class)
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Qb = /* @__PURE__ */ w({
  __name: "CommandShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), j("span", {
      class: oe(s(N)("ml-auto text-xs tracking-widest text-muted-foreground", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
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
const dy = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const cy = (e) => typeof e < "u";
function py(e) {
  return JSON.parse(JSON.stringify(e));
}
function Rs(e, t, n, o = {}) {
  var a, r, l;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: p = !1,
    defaultValue: c,
    shouldEmit: f
  } = o, v = Ke(), m = n || (v == null ? void 0 : v.emit) || ((a = v == null ? void 0 : v.$emit) == null ? void 0 : a.bind(v)) || ((l = (r = v == null ? void 0 : v.proxy) == null ? void 0 : r.$emit) == null ? void 0 : l.bind(v == null ? void 0 : v.proxy));
  let g = d;
  t || (t = "modelValue"), g = g || `update:${t.toString()}`;
  const b = (O) => i ? typeof i == "function" ? i(O) : py(O) : O, _ = () => cy(e[t]) ? b(e[t]) : c, $ = (O) => {
    f ? f(O) && m(g, O) : m(g, O);
  };
  if (u) {
    const O = _(), D = E(O);
    let S = !1;
    return Y(
      () => e[t],
      (P) => {
        S || (S = !0, D.value = b(P), te(() => S = !1));
      }
    ), Y(
      D,
      (P) => {
        !S && (P !== e[t] || p) && $(P);
      },
      { deep: p }
    ), D;
  } else
    return B({
      get() {
        return _();
      },
      set(O) {
        $(O);
      }
    });
}
const [Vr, fy] = nn("DrawerRoot"), Ai = /* @__PURE__ */ new WeakMap();
function Fe(e, t, n = !1) {
  if (!e || !(e instanceof HTMLElement) || !t)
    return;
  const o = {};
  Object.entries(t).forEach(([a, r]) => {
    if (a.startsWith("--")) {
      e.style.setProperty(a, r);
      return;
    }
    o[a] = e.style[a], e.style[a] = r;
  }), !n && Ai.set(e, o);
}
function my(e, t) {
  if (!e || !(e instanceof HTMLElement))
    return;
  const n = Ai.get(e);
  n && Object.entries(n).forEach(([o, a]) => {
    e.style[o] = a;
  });
}
function _o(e, t) {
  const n = window.getComputedStyle(e), o = n.transform || n.webkitTransform || n.mozTransform;
  let a = o.match(/^matrix3d\((.+)\)$/);
  return a ? Number.parseFloat(a[1].split(", ")[De(t) ? 13 : 12]) : (a = o.match(/^matrix\((.+)\)$/), a ? Number.parseFloat(a[1].split(", ")[De(t) ? 5 : 4]) : null);
}
function vy(e) {
  return 8 * (Math.log(e + 1) - 2);
}
function De(e) {
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
function ha(e, t) {
  if (!e)
    return () => {
    };
  const n = e.style.cssText;
  return Object.assign(e.style, t), () => {
    e.style.cssText = n;
  };
}
function gy(...e) {
  return (...t) => {
    for (const n of e)
      typeof n == "function" && n(...t);
  };
}
const Ce = {
  DURATION: 0.5,
  EASE: [0.32, 0.72, 0, 1]
}, Pi = 0.4, hy = 0.25, yy = 100, Ii = 8, xo = 16, Mi = 26, Ls = "vaul-dragging";
function by({
  activeSnapPoint: e,
  snapPoints: t,
  drawerRef: n,
  overlayRef: o,
  fadeFromIndex: a,
  onSnapPointChange: r,
  direction: l
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
  le(() => {
    typeof window < "u" && window.addEventListener("resize", u);
  }), _n(() => {
    typeof window < "u" && window.removeEventListener("resize", u);
  });
  const d = B(
    () => (t.value && e.value === t.value[t.value.length - 1]) ?? null
  ), p = B(
    () => t.value && t.value.length > 0 && ((a == null ? void 0 : a.value) || (a == null ? void 0 : a.value) === 0) && !Number.isNaN(a == null ? void 0 : a.value) && t.value[(a == null ? void 0 : a.value) ?? -1] === e.value || !t.value
  ), c = B(
    () => {
      var $;
      return (($ = t.value) == null ? void 0 : $.findIndex((O) => O === e.value)) ?? null;
    }
  ), f = B(
    () => {
      var $;
      return (($ = t.value) == null ? void 0 : $.map((O) => {
        const D = typeof O == "string";
        let S = 0;
        if (D && (S = Number.parseInt(O, 10)), De(l.value)) {
          const T = D ? S : i.value ? O * i.value.innerHeight : 0;
          return i.value ? l.value === "bottom" ? i.value.innerHeight - T : -i.value.innerHeight + T : T;
        }
        const P = D ? S : i.value ? O * i.value.innerWidth : 0;
        return i.value ? l.value === "right" ? i.value.innerWidth - P : -i.value.innerWidth + P : P;
      })) ?? [];
    }
  ), v = B(
    () => {
      var $;
      return c.value !== null ? ($ = f.value) == null ? void 0 : $[c.value] : null;
    }
  ), m = ($) => {
    var O, D, S, P;
    const T = ((O = f.value) == null ? void 0 : O.findIndex((I) => I === $)) ?? null;
    te(() => {
      var I;
      r(T, f.value), Fe((I = n.value) == null ? void 0 : I.$el, {
        transition: `transform ${Ce.DURATION}s cubic-bezier(${Ce.EASE.join(",")})`,
        transform: De(l.value) ? `translate3d(0, ${$}px, 0)` : `translate3d(${$}px, 0, 0)`
      });
    }), f.value && T !== f.value.length - 1 && T !== (a == null ? void 0 : a.value) ? Fe((D = o.value) == null ? void 0 : D.$el, {
      transition: `opacity ${Ce.DURATION}s cubic-bezier(${Ce.EASE.join(",")})`,
      opacity: "0"
    }) : Fe((S = o.value) == null ? void 0 : S.$el, {
      transition: `opacity ${Ce.DURATION}s cubic-bezier(${Ce.EASE.join(",")})`,
      opacity: "1"
    }), e.value = T !== null ? ((P = t.value) == null ? void 0 : P[T]) ?? null : null;
  };
  Y(
    [e, f, t],
    () => {
      var $;
      if (e.value) {
        const O = (($ = t.value) == null ? void 0 : $.findIndex((D) => D === e.value)) ?? -1;
        f.value && O !== -1 && typeof f.value[O] == "number" && m(f.value[O]);
      }
    },
    {
      immediate: !0
      // if you want to run the effect immediately as well
    }
  );
  function g({
    draggedDistance: $,
    closeDrawer: O,
    velocity: D,
    dismissible: S
  }) {
    var P, T, I;
    if (a.value === void 0)
      return;
    const R = l.value === "bottom" || l.value === "right" ? (v.value ?? 0) - $ : (v.value ?? 0) + $, A = c.value === a.value - 1, L = c.value === 0, M = $ > 0;
    if (A && Fe((P = o.value) == null ? void 0 : P.$el, {
      transition: `opacity ${Ce.DURATION}s cubic-bezier(${Ce.EASE.join(",")})`
    }), D > 2 && !M) {
      S ? O() : m(f.value[0]);
      return;
    }
    if (D > 2 && M && f && t.value) {
      m(f.value[t.value.length - 1]);
      return;
    }
    const X = (T = f.value) == null ? void 0 : T.reduce((Q, W) => typeof Q != "number" || typeof W != "number" ? Q : Math.abs(W - R) < Math.abs(Q - R) ? W : Q), H = De(l.value) ? window.innerHeight : window.innerWidth;
    if (D > Pi && Math.abs($) < H * 0.4) {
      const Q = M ? 1 : -1;
      if (Q > 0 && d) {
        m(f.value[(((I = t.value) == null ? void 0 : I.length) ?? 0) - 1]);
        return;
      }
      if (L && Q < 0 && S && O(), c.value === null)
        return;
      m(f.value[c.value + Q]);
      return;
    }
    m(X);
  }
  function b({ draggedDistance: $ }) {
    var O;
    if (v.value === null)
      return;
    const D = l.value === "bottom" || l.value === "right" ? v.value - $ : v.value + $;
    (l.value === "bottom" || l.value === "right") && D < f.value[f.value.length - 1] || (l.value === "top" || l.value === "left") && D > f.value[f.value.length - 1] || Fe((O = n.value) == null ? void 0 : O.$el, {
      transform: De(l.value) ? `translate3d(0, ${D}px, 0)` : `translate3d(${D}px, 0, 0)`
    });
  }
  function _($, O) {
    if (!t.value || typeof c.value != "number" || !f.value || a.value === void 0)
      return null;
    const D = c.value === a.value - 1;
    if (c.value >= a.value && O)
      return 0;
    if (D && !O)
      return 1;
    if (!p.value && !D)
      return null;
    const S = D ? c.value + 1 : c.value - 1, P = D ? f.value[S] - f.value[S - 1] : f.value[S + 1] - f.value[S], T = $ / Math.abs(P);
    return D ? 1 - T : T;
  }
  return {
    isLastSnapPoint: d,
    shouldFade: p,
    getPercentageDragged: _,
    activeSnapPointIndex: c,
    onRelease: g,
    onDrag: b,
    snapPointsOffset: f
  };
}
function Vs() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
let Fn = null;
function wy(e) {
  const { isOpen: t, modal: n, nested: o, hasBeenOpened: a, preventScrollRestoration: r, noBodyStyles: l } = e, i = E(typeof window < "u" ? window.location.href : ""), u = E(0);
  function d() {
    if (Vs() && Fn === null && t.value && !l.value) {
      Fn = {
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
          const v = f - window.innerHeight;
          v && u.value >= f && (document.body.style.top = `-${u.value + v}px`);
        });
      }, 300);
    }
  }
  function p() {
    if (Vs() && Fn !== null && !l.value) {
      const c = -Number.parseInt(document.body.style.top, 10), f = -Number.parseInt(document.body.style.left, 10);
      Object.assign(document.body.style, Fn), window.requestAnimationFrame(() => {
        if (r.value && i.value !== window.location.href) {
          i.value = window.location.href;
          return;
        }
        window.scrollTo(f, c);
      }), Fn = null;
    }
  }
  return le(() => {
    function c() {
      u.value = window.scrollY;
    }
    c(), window.addEventListener("scroll", c), qe(() => {
      window.removeEventListener("scroll", c);
    });
  }), Y([t, a, i], () => {
    o.value || !a.value || (t.value ? (window.matchMedia("(display-mode: standalone)").matches || d(), n.value || setTimeout(() => {
      p();
    }, 500)) : p());
  }), { restorePositionSetting: p };
}
function _y(e, t) {
  return e && e.value ? e : t;
}
function xy(e) {
  const {
    emitDrag: t,
    emitRelease: n,
    emitClose: o,
    emitOpenChange: a,
    open: r,
    dismissible: l,
    nested: i,
    modal: u,
    shouldScaleBackground: d,
    setBackgroundColorOnScale: p,
    scrollLockTimeout: c,
    closeThreshold: f,
    activeSnapPoint: v,
    fadeFromIndex: m,
    direction: g,
    noBodyStyles: b,
    handleOnly: _,
    preventScrollRestoration: $
  } = e, O = E(r.value ?? !1), D = E(!1), S = E(!1), P = E(!1), T = E(null), I = E(null), R = E(null), A = E(null), L = E(null), M = E(!1), X = E(null), H = E(0), Q = E(!1);
  E(0);
  const W = E(null);
  E(0);
  const fe = B(() => {
    var Z;
    return ((Z = W.value) == null ? void 0 : Z.$el.getBoundingClientRect().height) || 0;
  }), ee = _y(
    e.snapPoints,
    E(void 0)
  ), z = B(() => {
    var Z;
    return ee && (((Z = ee.value) == null ? void 0 : Z.length) ?? 0) > 0;
  }), ae = E(null), {
    activeSnapPointIndex: ne,
    onRelease: Ne,
    snapPointsOffset: He,
    onDrag: je,
    shouldFade: Ye,
    getPercentageDragged: wt
  } = by({
    snapPoints: ee,
    activeSnapPoint: v,
    drawerRef: W,
    fadeFromIndex: m,
    overlayRef: T,
    onSnapPointChange: xe,
    direction: g
  });
  function xe(Z, ve) {
    ee.value && Z === ve.length - 1 && (I.value = /* @__PURE__ */ new Date());
  }
  wy({
    isOpen: O,
    modal: u,
    nested: i,
    hasBeenOpened: D,
    noBodyStyles: b,
    preventScrollRestoration: $
  });
  function me() {
    return (window.innerWidth - Mi) / window.innerWidth;
  }
  function Me(Z, ve) {
    var be;
    if (!Z)
      return !1;
    let ce = Z;
    const Be = (be = window.getSelection()) == null ? void 0 : be.toString(), Ae = W.value ? _o(W.value.$el, g.value) : null, Ue = /* @__PURE__ */ new Date();
    if (ce.hasAttribute("data-vaul-no-drag") || ce.closest("[data-vaul-no-drag]"))
      return !1;
    if (g.value === "right" || g.value === "left")
      return !0;
    if (I.value && Ue.getTime() - I.value.getTime() < 500)
      return !1;
    if (Ae !== null && (g.value === "bottom" ? Ae > 0 : Ae < 0))
      return !0;
    if (Be && Be.length > 0)
      return !1;
    if (L.value && Ue.getTime() - L.value.getTime() < c.value && Ae === 0 || ve)
      return L.value = Ue, !1;
    for (; ce; ) {
      if (ce.scrollHeight > ce.clientHeight) {
        if (ce.scrollTop !== 0)
          return L.value = /* @__PURE__ */ new Date(), !1;
        if (ce.getAttribute("role") === "dialog")
          return !0;
      }
      ce = ce.parentNode;
    }
    return !0;
  }
  function $e(Z) {
    !l.value && !ee.value || W.value && !W.value.$el.contains(Z.target) || (S.value = !0, R.value = /* @__PURE__ */ new Date(), Z.target.setPointerCapture(Z.pointerId), H.value = De(g.value) ? Z.clientY : Z.clientX);
  }
  function ye(Z) {
    var ve, be, ce, Be, Ae, Ue;
    if (W.value && S.value) {
      const _t = g.value === "bottom" || g.value === "right" ? 1 : -1, on = (H.value - (De(g.value) ? Z.clientY : Z.clientX)) * _t, Kt = on > 0, lo = ee.value && !l.value && !Kt;
      if (lo && ne.value === 0)
        return;
      const Ht = Math.abs(on), xt = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      let ot = Ht / fe.value;
      const an = wt(Ht, Kt);
      if (an !== null && (ot = an), lo && ot >= 1 || !M.value && !Me(Z.target, Kt))
        return;
      if ((ve = W == null ? void 0 : W.value) == null || ve.$el.classList.add(Ls), M.value = !0, Fe((be = W.value) == null ? void 0 : be.$el, {
        transition: "none"
      }), Fe((ce = T.value) == null ? void 0 : ce.$el, {
        transition: "none"
      }), ee.value && je({ draggedDistance: on }), Kt && !ee.value) {
        const Ct = vy(on), sn = Math.min(Ct * -1, 0) * _t;
        Fe((Be = W.value) == null ? void 0 : Be.$el, {
          transform: De(g.value) ? `translate3d(0, ${sn}px, 0)` : `translate3d(${sn}px, 0, 0)`
        });
        return;
      }
      const rn = 1 - ot;
      if ((Ye.value || m.value && ne.value === m.value - 1) && (t(ot), Fe(
        (Ae = T.value) == null ? void 0 : Ae.$el,
        {
          opacity: `${rn}`,
          transition: "none"
        },
        !0
      )), xt && T.value && d.value) {
        const Ct = Math.min(me() + ot * (1 - me()), 1), sn = 8 - ot * 8, io = Math.max(0, 14 - ot * 14);
        Fe(
          xt,
          {
            borderRadius: `${sn}px`,
            transform: De(g.value) ? `scale(${Ct}) translate3d(0, ${io}px, 0)` : `scale(${Ct}) translate3d(${io}px, 0, 0)`,
            transition: "none"
          },
          !0
        );
      }
      if (!ee.value) {
        const Ct = Ht * _t;
        Fe((Ue = W.value) == null ? void 0 : Ue.$el, {
          transform: De(g.value) ? `translate3d(0, ${Ct}px, 0)` : `translate3d(${Ct}px, 0, 0)`
        });
      }
    }
  }
  function U() {
    var Z;
    if (!W.value)
      return;
    const ve = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]"), be = _o(W.value.$el, g.value);
    Fe(W.value.$el, {
      transform: "translate3d(0, 0, 0)",
      transition: `transform ${Ce.DURATION}s cubic-bezier(${Ce.EASE.join(",")})`
    }), Fe((Z = T.value) == null ? void 0 : Z.$el, {
      transition: `opacity ${Ce.DURATION}s cubic-bezier(${Ce.EASE.join(",")})`,
      opacity: "1"
    }), d.value && be && be > 0 && O.value && Fe(
      ve,
      {
        borderRadius: `${Ii}px`,
        overflow: "hidden",
        ...De(g.value) ? {
          transform: `scale(${me()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
          transformOrigin: "top"
        } : {
          transform: `scale(${me()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
          transformOrigin: "left"
        },
        transitionProperty: "transform, border-radius",
        transitionDuration: `${Ce.DURATION}s`,
        transitionTimingFunction: `cubic-bezier(${Ce.EASE.join(",")})`
      },
      !0
    );
  }
  function ue(Z) {
    W.value && (o(), Z || (O.value = !1), window.setTimeout(() => {
      ee.value && (v.value = ee.value[0]);
    }, Ce.DURATION * 1e3));
  }
  he(() => {
    if (!O.value && d.value && dy) {
      const Z = setTimeout(() => {
        my(document.body);
      }, 200);
      return () => clearTimeout(Z);
    }
  }), Y(r, () => {
    O.value = r.value, r.value || ue();
  });
  function Se(Z) {
    if (!S.value || !W.value)
      return;
    W.value.$el.classList.remove(Ls), M.value = !1, S.value = !1, A.value = /* @__PURE__ */ new Date();
    const ve = _o(W.value.$el, g.value);
    if (!Me(Z.target, !1) || !ve || Number.isNaN(ve) || R.value === null)
      return;
    const be = A.value.getTime() - R.value.getTime(), ce = H.value - (De(g.value) ? Z.clientY : Z.clientX), Be = Math.abs(ce) / be;
    if (Be > 0.05 && (P.value = !0, window.setTimeout(() => {
      P.value = !1;
    }, 200)), ee.value) {
      const Ue = g.value === "bottom" || g.value === "right" ? 1 : -1;
      Ne({
        draggedDistance: ce * Ue,
        closeDrawer: ue,
        velocity: Be,
        dismissible: l.value
      }), n(!0);
      return;
    }
    if (g.value === "bottom" || g.value === "right" ? ce > 0 : ce < 0) {
      U(), n(!0);
      return;
    }
    if (Be > Pi) {
      ue(), n(!1);
      return;
    }
    const Ae = Math.min(
      W.value.$el.getBoundingClientRect().height ?? 0,
      window.innerHeight
    );
    if (ve >= Ae * f.value) {
      ue(), n(!1);
      return;
    }
    n(!0), U();
  }
  Y(O, (Z) => {
    Z && (I.value = /* @__PURE__ */ new Date()), a(Z);
  }, { immediate: !0 });
  function Re(Z) {
    var ve, be;
    const ce = Z ? (window.innerWidth - xo) / window.innerWidth : 1, Be = Z ? -16 : 0;
    X.value && window.clearTimeout(X.value), Fe((ve = W.value) == null ? void 0 : ve.$el, {
      transition: `transform ${Ce.DURATION}s cubic-bezier(${Ce.EASE.join(",")})`,
      transform: `scale(${ce}) translate3d(0, ${Be}px, 0)`
    }), !Z && (be = W.value) != null && be.$el && (X.value = window.setTimeout(() => {
      var Ae, Ue;
      const _t = _o((Ae = W.value) == null ? void 0 : Ae.$el, g.value);
      Fe((Ue = W.value) == null ? void 0 : Ue.$el, {
        transition: "none",
        transform: De(g.value) ? `translate3d(0, ${_t}px, 0)` : `translate3d(${_t}px, 0, 0)`
      });
    }, 500));
  }
  function Qe(Z) {
    var ve;
    if (Z < 0)
      return;
    const be = De(g.value) ? window.innerHeight : window.innerWidth, ce = (be - xo) / be, Be = ce + Z * (1 - ce), Ae = -16 + Z * xo;
    Fe((ve = W.value) == null ? void 0 : ve.$el, {
      transform: De(g.value) ? `scale(${Be}) translate3d(0, ${Ae}px, 0)` : `scale(${Be}) translate3d(${Ae}px, 0, 0)`,
      transition: "none"
    });
  }
  function nt(Z) {
    var ve;
    const be = De(g.value) ? window.innerHeight : window.innerWidth, ce = Z ? (be - xo) / be : 1, Be = Z ? -16 : 0;
    Z && Fe((ve = W.value) == null ? void 0 : ve.$el, {
      transition: `transform ${Ce.DURATION}s cubic-bezier(${Ce.EASE.join(",")})`,
      transform: De(g.value) ? `scale(${ce}) translate3d(0, ${Be}px, 0)` : `scale(${ce}) translate3d(${Be}px, 0, 0)`
    });
  }
  return {
    open: r,
    isOpen: O,
    modal: u,
    keyboardIsOpen: Q,
    hasBeenOpened: D,
    drawerRef: W,
    drawerHeightRef: fe,
    overlayRef: T,
    handleRef: ae,
    isDragging: S,
    dragStartTime: R,
    isAllowedToDrag: M,
    snapPoints: ee,
    activeSnapPoint: v,
    hasSnapPoints: z,
    pointerStart: H,
    dismissible: l,
    snapPointsOffset: He,
    direction: g,
    shouldFade: Ye,
    fadeFromIndex: m,
    shouldScaleBackground: d,
    setBackgroundColorOnScale: p,
    onPress: $e,
    onDrag: ye,
    onRelease: Se,
    closeDrawer: ue,
    onNestedDrag: Qe,
    onNestedRelease: nt,
    onNestedOpenChange: Re,
    emitClose: o,
    emitDrag: t,
    emitRelease: n,
    emitOpenChange: a,
    nested: i,
    handleOnly: _,
    noBodyStyles: b
  };
}
const Cy = /* @__PURE__ */ w({
  __name: "DrawerRoot",
  props: {
    activeSnapPoint: { default: void 0 },
    closeThreshold: { default: hy },
    shouldScaleBackground: { type: Boolean, default: void 0 },
    setBackgroundColorOnScale: { type: Boolean, default: !0 },
    scrollLockTimeout: { default: yy },
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
    const o = e, a = n;
    Na();
    const r = B(() => o.fadeFromIndex ?? (o.snapPoints && o.snapPoints.length - 1)), l = Rs(o, "open", a, {
      defaultValue: o.defaultOpen,
      passive: o.open === void 0
    }), i = Rs(o, "activeSnapPoint", a, {
      passive: o.activeSnapPoint === void 0
    }), u = {
      emitDrag: (m) => a("drag", m),
      emitRelease: (m) => a("release", m),
      emitClose: () => a("close"),
      emitOpenChange: (m) => {
        a("update:open", m), setTimeout(() => {
          a("animationEnd", m);
        }, Ce.DURATION * 1e3);
      }
    }, { closeDrawer: d, hasBeenOpened: p, modal: c, isOpen: f } = fy(
      xy({
        ...u,
        ...pe(o),
        activeSnapPoint: i,
        fadeFromIndex: r,
        open: l
      })
    );
    function v(m) {
      if (l.value !== void 0) {
        u.emitOpenChange(m);
        return;
      }
      f.value = m, m ? p.value = !0 : d();
    }
    return t({
      open: f
    }), (m, g) => (h(), C(s(a0), {
      open: s(f),
      modal: s(c),
      "onUpdate:open": v
    }, {
      default: y(() => [
        x(m.$slots, "default", { open: s(f) })
      ]),
      _: 3
    }, 8, ["open", "modal"]));
  }
}), Oy = /* @__PURE__ */ w({
  __name: "DrawerOverlay",
  setup(e) {
    const { overlayRef: t, hasSnapPoints: n, isOpen: o, shouldFade: a } = Vr();
    return (r, l) => (h(), C(s(L0), {
      ref_key: "overlayRef",
      ref: t,
      "data-vaul-overlay": "",
      "data-vaul-snap-points": s(o) && s(n) ? "true" : "false",
      "data-vaul-snap-points-overlay": s(o) && s(a) ? "true" : "false"
    }, null, 8, ["data-vaul-snap-points", "data-vaul-snap-points-overlay"]));
  }
}), $y = () => () => {
};
function Sy() {
  const { direction: e, isOpen: t, shouldScaleBackground: n, setBackgroundColorOnScale: o, noBodyStyles: a } = Vr(), r = E(null), l = E(document.body.style.backgroundColor);
  function i() {
    return (window.innerWidth - Mi) / window.innerWidth;
  }
  he((u) => {
    if (t.value && n.value) {
      r.value && clearTimeout(r.value);
      const d = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      if (!d)
        return;
      gy(
        o.value && !a.value ? ha(document.body, { background: "black" }) : $y,
        ha(d, {
          transformOrigin: De(e.value) ? "top" : "left",
          transitionProperty: "transform, border-radius",
          transitionDuration: `${Ce.DURATION}s`,
          transitionTimingFunction: `cubic-bezier(${Ce.EASE.join(",")})`
        })
      );
      const p = ha(d, {
        borderRadius: `${Ii}px`,
        overflow: "hidden",
        ...De(e.value) ? {
          transform: `scale(${i()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`
        } : {
          transform: `scale(${i()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`
        }
      });
      u(() => {
        p(), r.value = window.setTimeout(() => {
          l.value ? document.body.style.background = l.value : document.body.style.removeProperty("background");
        }, Ce.DURATION * 1e3);
      });
    }
  }, { flush: "pre" });
}
const By = /* @__PURE__ */ w({
  __name: "DrawerContent",
  setup(e) {
    const {
      open: t,
      isOpen: n,
      snapPointsOffset: o,
      hasSnapPoints: a,
      drawerRef: r,
      onPress: l,
      onDrag: i,
      onRelease: u,
      modal: d,
      emitOpenChange: p,
      dismissible: c,
      keyboardIsOpen: f,
      closeDrawer: v,
      direction: m,
      handleOnly: g
    } = Vr();
    Sy();
    const b = E(!1), _ = B(() => o.value && o.value.length > 0 ? `${o.value[0]}px` : "0");
    function $(S) {
      if (!d.value || S.defaultPrevented) {
        S.preventDefault();
        return;
      }
      f.value && (f.value = !1), c.value ? p(!1) : S.preventDefault();
    }
    function O(S) {
      g.value || l(S);
    }
    function D(S) {
      g.value || i(S);
    }
    return he(() => {
      a.value && window.requestAnimationFrame(() => {
        b.value = !0;
      });
    }), (S, P) => (h(), C(s(T0), {
      ref_key: "drawerRef",
      ref: r,
      "data-vaul-drawer": "",
      "data-vaul-drawer-direction": s(m),
      "data-vaul-delayed-snap-points": b.value ? "true" : "false",
      "data-vaul-snap-points": s(n) && s(a) ? "true" : "false",
      style: kt({ "--snap-point-height": _.value }),
      onPointerdown: O,
      onPointermove: D,
      onPointerup: s(u),
      onPointerDownOutside: $,
      onOpenAutoFocus: P[0] || (P[0] = Te(() => {
      }, ["prevent"])),
      onEscapeKeyDown: P[1] || (P[1] = (T) => {
        s(c) || T.preventDefault();
      })
    }, {
      default: y(() => [
        x(S.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-vaul-drawer-direction", "data-vaul-delayed-snap-points", "data-vaul-snap-points", "style", "onPointerup"]));
  }
}), Jb = /* @__PURE__ */ w({
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
    const a = Qo(e, t);
    return (r, l) => (h(), C(s(Cy), k({ "data-slot": "drawer" }, s(a)), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ew = /* @__PURE__ */ w({
  __name: "DrawerClose",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(r0), k({ "data-slot": "drawer-close" }, t), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ey = /* @__PURE__ */ w({
  __name: "DrawerOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(e) {
    const t = e, n = Dr(t, "class");
    return (o, a) => (h(), C(s(Oy), k({ "data-slot": "drawer-overlay" }, s(n), {
      class: s(N)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        t.class
      )
    }), null, 16, ["class"]));
  }
}), tw = /* @__PURE__ */ w({
  __name: "DrawerContent",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, a = Qo(n, t);
    return (r, l) => (h(), C(s(ay), null, {
      default: y(() => [
        F(Ey),
        F(s(By), k({ "data-slot": "drawer-content" }, s(a), {
          class: s(N)(
            "group/drawer-content bg-background fixed z-50 flex h-auto flex-col",
            "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg",
            "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg",
            "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:sm:max-w-sm",
            "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:sm:max-w-sm",
            n.class
          )
        }), {
          default: y(() => [
            l[0] || (l[0] = de("div", { class: "mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full bg-muted group-data-[vaul-drawer-direction=bottom]/drawer-content:block" }, null, -1)),
            x(r.$slots, "default")
          ]),
          _: 3,
          __: [0]
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), nw = /* @__PURE__ */ w({
  __name: "DrawerDescription",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(e) {
    const t = e, n = Dr(t, "class");
    return (o, a) => (h(), C(s(k0), k({ "data-slot": "drawer-description" }, s(n), {
      class: s(N)("text-muted-foreground text-sm", t.class)
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ow = /* @__PURE__ */ w({
  __name: "DrawerFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), j("div", {
      "data-slot": "drawer-footer",
      class: oe(s(N)("mt-auto flex flex-col gap-2 p-4", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), aw = /* @__PURE__ */ w({
  __name: "DrawerHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), j("div", {
      "data-slot": "drawer-header",
      class: oe(s(N)("flex flex-col gap-1.5 p-4", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), rw = /* @__PURE__ */ w({
  __name: "DrawerTitle",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(e) {
    const t = e, n = Dr(t, "class");
    return (o, a) => (h(), C(s(j0), k({ "data-slot": "drawer-title" }, s(n), {
      class: s(N)("text-foreground font-semibold", t.class)
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), sw = /* @__PURE__ */ w({
  __name: "DrawerTrigger",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(z0), k({ "data-slot": "drawer-trigger" }, t), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), lw = /* @__PURE__ */ w({
  __name: "DropdownMenu",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = J(e, t);
    return (r, l) => (h(), C(s(Xp), q(G(s(a))), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), iw = /* @__PURE__ */ w({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  setup(e) {
    const n = Ie(e);
    return (o, a) => (h(), C(s(Zp), k({ class: "outline-none" }, s(n)), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), uw = /* @__PURE__ */ w({
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
    const n = e, o = t, a = B(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = J(a, o);
    return (l, i) => (h(), C(s(Qp), null, {
      default: y(() => [
        F(s(Jp), k(s(r), {
          class: s(N)(
            "z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            n.class
          )
        }), {
          default: y(() => [
            x(l.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), dw = /* @__PURE__ */ w({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(tf), q(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), cw = /* @__PURE__ */ w({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = J(e, t);
    return (r, l) => (h(), C(s(rf), q(G(s(a))), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), pw = /* @__PURE__ */ w({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {},
    inset: { type: Boolean }
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = Ie(n);
    return (a, r) => (h(), C(s(ef), k(s(o), {
      class: s(N)(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        a.inset && "pl-8",
        t.class
      )
    }), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Dy = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, fw = /* @__PURE__ */ w({
  __name: "DropdownMenuCheckboxItem",
  props: {
    checked: { type: [Boolean, String] },
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  emits: ["select", "update:checked"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = B(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = J(a, o);
    return (l, i) => (h(), C(s(of), k(s(r), {
      class: s(N)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        n.class
      )
    }), {
      default: y(() => [
        de("span", Dy, [
          F(s(Nl), null, {
            default: y(() => [
              F(s(vi), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        x(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ty = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, mw = /* @__PURE__ */ w({
  __name: "DropdownMenuRadioItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = B(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = J(a, o);
    return (l, i) => (h(), C(s(sf), k(s(r), {
      class: s(N)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        n.class
      )
    }), {
      default: y(() => [
        de("span", Ty, [
          F(s(Nl), null, {
            default: y(() => [
              F(s(vg), { class: "h-4 w-4 fill-current" })
            ]),
            _: 1
          })
        ]),
        x(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), vw = /* @__PURE__ */ w({
  __name: "DropdownMenuShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), j("span", {
      class: oe(s(N)("ml-auto text-xs tracking-widest opacity-60", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), gw = /* @__PURE__ */ w({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(nf), k(n.value, {
      class: s(N)("-mx-1 my-1 h-px bg-muted", t.class)
    }), null, 16, ["class"]));
  }
}), hw = /* @__PURE__ */ w({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {},
    inset: { type: Boolean }
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = Ie(n);
    return (a, r) => (h(), C(s(af), k(s(o), {
      class: s(N)("px-2 py-1.5 text-sm font-semibold", a.inset && "pl-8", t.class)
    }), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), yw = /* @__PURE__ */ w({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = J(e, t);
    return (r, l) => (h(), C(s(lf), q(G(s(a))), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), bw = /* @__PURE__ */ w({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = Ie(n);
    return (a, r) => (h(), C(s(df), k(s(o), {
      class: s(N)(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
        t.class
      )
    }), {
      default: y(() => [
        x(a.$slots, "default"),
        F(s(fg), { class: "ml-auto h-4 w-4" })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ww = /* @__PURE__ */ w({
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
    as: { type: [String, Object, Function] },
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = B(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = J(a, o);
    return (l, i) => (h(), C(s(uf), k(s(r), {
      class: s(N)(
        "z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        n.class
      )
    }), {
      default: y(() => [
        x(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), _w = /* @__PURE__ */ w({
  __name: "Input",
  props: {
    defaultValue: {},
    modelValue: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = yi(n, "modelValue", t, {
      passive: !0,
      defaultValue: n.defaultValue
    });
    return (r, l) => wn((h(), j("input", {
      "onUpdate:modelValue": l[0] || (l[0] = (i) => pt(a) ? a.value = i : null),
      class: oe(
        s(N)(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          n.class
        )
      )
    }, null, 2)), [
      [Us, s(a)]
    ]);
  }
}), xw = /* @__PURE__ */ w({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(cf), k(n.value, {
      class: s(N)(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        t.class
      )
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Cw = /* @__PURE__ */ w({
  __name: "Popover",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = J(e, t);
    return (r, l) => (h(), C(s(ff), q(G(s(a))), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ow = /* @__PURE__ */ w({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(mf), q(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $w = /* @__PURE__ */ w({
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
    const n = e, o = t, a = B(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = J(a, o);
    return (l, i) => (h(), C(s(vf), null, {
      default: y(() => [
        F(s(yf), k({ ...s(r), ...l.$attrs }, {
          class: s(N)(
            "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            n.class
          )
        }), {
          default: y(() => [
            x(l.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Sw = /* @__PURE__ */ w({
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
    const t = e, n = B(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(Cf), k(n.value, {
      class: s(N)("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", t.class)
    }), {
      default: y(() => [
        F(s(Of), {
          class: "h-full w-full flex-1 bg-primary transition-all",
          style: kt(`transform: translateX(-${100 - (t.modelValue ?? 0)}%);`)
        }, null, 8, ["style"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Bw = /* @__PURE__ */ w({
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
    const a = J(e, t);
    return (r, l) => (h(), C(s(Tf), q(G(s(a))), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ew = /* @__PURE__ */ w({
  __name: "SelectValue",
  props: {
    placeholder: {},
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(em), q(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Dw = /* @__PURE__ */ w({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = Ie(n);
    return (a, r) => (h(), C(s(Pf), k(s(o), {
      class: s(N)(
        "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:truncate text-start",
        t.class
      )
    }), {
      default: y(() => [
        x(a.$slots, "default"),
        F(s(tm), { "as-child": "" }, {
          default: y(() => [
            F(s(pg), { class: "h-4 w-4 shrink-0 opacity-50" })
          ]),
          _: 1
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Tw = /* @__PURE__ */ w({
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
    const n = e, o = t, a = B(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = J(a, o);
    return (l, i) => (h(), C(s(If), null, {
      default: y(() => [
        F(s(zf), k({ ...s(r), ...l.$attrs }, {
          class: s(N)(
            "relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            l.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            n.class
          )
        }), {
          default: y(() => [
            F(s(Ay)),
            F(s(Zf), {
              class: oe(
                s(N)(
                  "p-1",
                  l.position === "popper" && "h-[--radix-select-trigger-height] w-full min-w-[--radix-select-trigger-width]"
                )
              )
            }, {
              default: y(() => [
                x(l.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]),
            F(s(Py))
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), kw = /* @__PURE__ */ w({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(Yf), k({
      class: s(N)("p-1 w-full", t.class)
    }, n.value), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ky = { class: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center" }, Aw = /* @__PURE__ */ w({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = Ie(n);
    return (a, r) => (h(), C(s(Wf), k(s(o), {
      class: s(N)(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        t.class
      )
    }), {
      default: y(() => [
        de("span", ky, [
          F(s(Uf), null, {
            default: y(() => [
              F(s(vi), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        F(s(Wl), null, {
          default: y(() => [
            x(a.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Pw = /* @__PURE__ */ w({
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(Wl), q(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Iw = /* @__PURE__ */ w({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(Xf), {
      class: oe(s(N)("px-2 py-1.5 text-sm font-semibold", t.class))
    }, {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Mw = /* @__PURE__ */ w({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(Kf), k(n.value, {
      class: s(N)("-mx-1 my-1 h-px bg-muted", t.class)
    }), null, 16, ["class"]));
  }
}), Ay = /* @__PURE__ */ w({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = Ie(n);
    return (a, r) => (h(), C(s(Qf), k(s(o), {
      class: s(N)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: y(() => [
        x(a.$slots, "default", {}, () => [
          F(s(mg))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Py = /* @__PURE__ */ w({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = Ie(n);
    return (a, r) => (h(), C(s(Jf), k(s(o), {
      class: s(N)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: y(() => [
        x(a.$slots, "default", {}, () => [
          F(s(gi))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Fw = /* @__PURE__ */ w({
  __name: "Sheet",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = J(e, t);
    return (r, l) => (h(), C(s(lr), q(G(s(a))), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Rw = /* @__PURE__ */ w({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(ir), q(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Lw = /* @__PURE__ */ w({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(Zt), q(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Vw = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "SheetContent",
  props: {
    class: {},
    side: {},
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = B(() => {
      const { class: l, side: i, ...u } = n;
      return u;
    }), r = J(a, o);
    return (l, i) => (h(), C(s(ur), null, {
      default: y(() => [
        F(s(zo), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        F(s(jo), k({
          class: s(N)(s(Iy)({ side: l.side }), n.class)
        }, { ...s(r), ...l.$attrs }), {
          default: y(() => [
            x(l.$slots, "default"),
            F(s(Zt), { class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary" }, {
              default: y(() => [
                F(s(qo), { class: "h-4 w-4" })
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
}), Nw = /* @__PURE__ */ w({
  __name: "SheetHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), j("div", {
      class: oe(s(N)("flex flex-col gap-y-2 text-center sm:text-left", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), jw = /* @__PURE__ */ w({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(fr), k({
      class: s(N)("text-lg font-semibold text-foreground", t.class)
    }, n.value), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), zw = /* @__PURE__ */ w({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(mr), k({
      class: s(N)("text-sm text-muted-foreground", t.class)
    }, n.value), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Kw = /* @__PURE__ */ w({
  __name: "SheetFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), j("div", {
      class: oe(s(N)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), Iy = ro(
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
), Hw = /* @__PURE__ */ w({
  __name: "Skeleton",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), j("div", {
      class: oe(s(N)("animate-pulse rounded-md bg-primary/10", t.class))
    }, null, 2));
  }
}), Ww = /* @__PURE__ */ w({
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
    as: { type: [String, Object, Function] },
    class: {}
  },
  emits: ["update:modelValue", "valueCommit"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = B(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = J(a, o);
    return (l, i) => (h(), C(s(mm), k({
      class: s(N)("relative flex w-full touch-none select-none items-center", n.class)
    }, s(r)), {
      default: y(() => [
        F(s(hm), { class: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20" }, {
          default: y(() => [
            F(s(ym), { class: "absolute h-full bg-primary" })
          ]),
          _: 1
        }),
        (h(!0), j(Ee, null, Lt(l.modelValue, (u, d) => (h(), C(s(gm), {
          key: d,
          class: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        }))), 128))
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Uw = /* @__PURE__ */ w({
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
    as: { type: [String, Object, Function] },
    class: {}
  },
  emits: ["update:checked"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = B(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = J(a, o);
    return (l, i) => (h(), C(s(Cm), k(s(r), {
      class: s(N)(
        "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        n.class
      )
    }), {
      default: y(() => [
        F(s(Om), {
          class: oe(
            s(N)(
              "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
            )
          )
        }, null, 8, ["class"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), My = { class: "relative w-full overflow-auto" }, qw = /* @__PURE__ */ w({
  __name: "Table",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), j("div", My, [
      de("table", {
        class: oe(s(N)("w-full caption-bottom text-sm", t.class))
      }, [
        x(n.$slots, "default")
      ], 2)
    ]));
  }
}), Gw = /* @__PURE__ */ w({
  __name: "TableBody",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), j("tbody", {
      class: oe(s(N)("[&_tr:last-child]:border-0", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), Fy = /* @__PURE__ */ w({
  __name: "TableCell",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), j("td", {
      class: oe(
        s(N)(
          "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5",
          t.class
        )
      )
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), Yw = /* @__PURE__ */ w({
  __name: "TableHead",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), j("th", {
      class: oe(
        s(N)(
          "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5",
          t.class
        )
      )
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), Xw = /* @__PURE__ */ w({
  __name: "TableHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), j("thead", {
      class: oe(s(N)("[&_tr]:border-b", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), Zw = /* @__PURE__ */ w({
  __name: "TableFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), j("tfoot", {
      class: oe(s(N)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), Ry = /* @__PURE__ */ w({
  __name: "TableRow",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), j("tr", {
      class: oe(
        s(N)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", t.class)
      )
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), Qw = /* @__PURE__ */ w({
  __name: "TableCaption",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), j("caption", {
      class: oe(s(N)("mt-4 text-sm text-muted-foreground", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), Ly = { class: "flex items-center justify-center py-10" }, Jw = /* @__PURE__ */ w({
  __name: "TableEmpty",
  props: {
    class: {},
    colspan: { default: 1 }
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(Ry, null, {
      default: y(() => [
        F(Fy, k({
          class: s(N)("p-4 whitespace-nowrap align-middle text-sm text-foreground", t.class)
        }, n.value), {
          default: y(() => [
            de("div", Ly, [
              x(o.$slots, "default")
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), e1 = /* @__PURE__ */ w({
  __name: "Tabs",
  props: {
    defaultValue: {},
    orientation: {},
    dir: {},
    activationMode: {},
    modelValue: {},
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = J(e, t);
    return (r, l) => (h(), C(s(Sm), q(G(s(a))), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), t1 = /* @__PURE__ */ w({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(Em), k({
      class: s(N)(
        "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        t.class
      )
    }, n.value), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), n1 = /* @__PURE__ */ w({
  __name: "TabsList",
  props: {
    loop: { type: Boolean },
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(Bm), k(n.value, {
      class: s(N)(
        "inline-flex items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
        t.class
      )
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Vy = { class: "truncate" }, o1 = /* @__PURE__ */ w({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = Ie(n);
    return (a, r) => (h(), C(s(Dm), k(s(o), {
      class: s(N)(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
        t.class
      )
    }), {
      default: y(() => [
        de("span", Vy, [
          x(a.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), a1 = /* @__PURE__ */ w({
  __name: "Textarea",
  props: {
    class: {},
    defaultValue: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = yi(n, "modelValue", t, {
      passive: !0,
      defaultValue: n.defaultValue
    });
    return (r, l) => wn((h(), j("textarea", {
      "onUpdate:modelValue": l[0] || (l[0] = (i) => pt(a) ? a.value = i : null),
      class: oe(
        s(N)(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          n.class
        )
      )
    }, null, 2)), [
      [Us, s(a)]
    ]);
  }
});
export {
  rb as Accord,
  Og as Accordion,
  $g as AccordionContent,
  Sg as AccordionItem,
  Bg as AccordionTrigger,
  lb as AlertDialog,
  mb as AlertDialogAction,
  vb as AlertDialogCancel,
  ub as AlertDialogContent,
  pb as AlertDialogDescription,
  fb as AlertDialogFooter,
  db as AlertDialogHeader,
  cb as AlertDialogTitle,
  ib as AlertDialogTrigger,
  gb as Avatar,
  yb as AvatarFallback,
  hb as AvatarImage,
  bb as Badge,
  hi as Button,
  wb as Card,
  _b as CardContent,
  xb as CardDescription,
  Cb as CardFooter,
  Ob as CardHeader,
  $b as CardTitle,
  Sb as Carousel,
  Bb as CarouselContent,
  Eb as CarouselItem,
  Tb as CarouselNext,
  Db as CarouselPrevious,
  Ib as Checkbox,
  Mb as Collapsible,
  Fb as CollapsibleContent,
  Rb as CollapsibleTrigger,
  ry as Command,
  Wb as CommandDialog,
  Ub as CommandEmpty,
  qb as CommandGroup,
  Gb as CommandInput,
  Yb as CommandItem,
  Xb as CommandList,
  Zb as CommandSeparator,
  Qb as CommandShortcut,
  sy as Dialog,
  Lb as DialogClose,
  ly as DialogContent,
  zb as DialogDescription,
  Hb as DialogFooter,
  Nb as DialogHeader,
  Kb as DialogScrollContent,
  jb as DialogTitle,
  Vb as DialogTrigger,
  Jb as Drawer,
  ew as DrawerClose,
  tw as DrawerContent,
  nw as DrawerDescription,
  ow as DrawerFooter,
  aw as DrawerHeader,
  Ey as DrawerOverlay,
  rw as DrawerTitle,
  sw as DrawerTrigger,
  lw as DropdownMenu,
  fw as DropdownMenuCheckboxItem,
  uw as DropdownMenuContent,
  dw as DropdownMenuGroup,
  pw as DropdownMenuItem,
  hw as DropdownMenuLabel,
  Qp as DropdownMenuPortal,
  cw as DropdownMenuRadioGroup,
  mw as DropdownMenuRadioItem,
  gw as DropdownMenuSeparator,
  vw as DropdownMenuShortcut,
  yw as DropdownMenuSub,
  ww as DropdownMenuSubContent,
  bw as DropdownMenuSubTrigger,
  iw as DropdownMenuTrigger,
  ob as Flasher,
  Xy as Header,
  ab as Heading,
  _w as Input,
  xw as Label,
  Zy as Main,
  Cw as Popover,
  qy as PopoverAnchor,
  $w as PopoverContent,
  Ow as PopoverTrigger,
  Sw as Progress,
  Bw as Select,
  Tw as SelectContent,
  kw as SelectGroup,
  Aw as SelectItem,
  Pw as SelectItemText,
  Iw as SelectLabel,
  Py as SelectScrollDownButton,
  Ay as SelectScrollUpButton,
  Mw as SelectSeparator,
  Dw as SelectTrigger,
  Ew as SelectValue,
  Fw as Sheet,
  Lw as SheetClose,
  Vw as SheetContent,
  zw as SheetDescription,
  Kw as SheetFooter,
  Nw as SheetHeader,
  jw as SheetTitle,
  Rw as SheetTrigger,
  Hw as Skeleton,
  Ww as Slider,
  Uw as Switch,
  qw as Table,
  Gw as TableBody,
  Qw as TableCaption,
  Fy as TableCell,
  Jw as TableEmpty,
  Zw as TableFooter,
  Yw as TableHead,
  Xw as TableHeader,
  Ry as TableRow,
  e1 as Tabs,
  t1 as TabsContent,
  n1 as TabsList,
  o1 as TabsTrigger,
  a1 as Textarea,
  sb as Tip,
  ig as Toast,
  nb as ToastAction,
  hg as ToastClose,
  gs as ToastDescription,
  bg as ToastProvider,
  yg as ToastTitle,
  ug as ToastViewport,
  lg as Toaster,
  Eg as Tooltip,
  Dg as TooltipContent,
  Tg as TooltipProvider,
  kg as TooltipTrigger,
  Yy as TwoColumnLayout,
  Qy as TwoColumnLayoutSidebar,
  Jy as TwoColumnLayoutSidebarDesktop,
  eb as TwoColumnLayoutSidebarMobile,
  tb as TwoColumnLayoutSidebarTrigger,
  Ag as avatarVariant,
  Pg as badgeVariants,
  Er as buttonVariants,
  N as cn,
  zy as preset,
  Iy as sheetVariants,
  ng as toast,
  wg as toastVariants,
  Yo as useCarousel,
  _g as useFlasher,
  mi as useToast,
  Gy as valueUpdater
};
