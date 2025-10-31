var fs = (e) => {
  throw TypeError(e);
};
var Fu = (e, t, n) => t.has(e) || fs("Cannot " + n);
var Un = (e, t, n) => (Fu(e, t, "read from private field"), n ? n.call(e) : t.get(e)), vs = (e, t, n) => t.has(e) ? fs("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n);
import * as xn from "vue";
import { computed as S, ref as E, shallowRef as Sn, watch as te, getCurrentScope as sr, onScopeDispose as lr, shallowReadonly as yn, unref as s, defineComponent as b, createBlock as x, openBlock as h, normalizeProps as Q, guardReactiveProps as ee, withCtx as y, renderSlot as _, mergeProps as A, withModifiers as Ae, nextTick as re, onMounted as ie, toRefs as we, createVNode as R, watchEffect as xe, normalizeStyle as lt, createCommentVNode as ce, getCurrentInstance as Ue, toRef as dl, camelize as Uo, withKeys as Qe, toHandlers as Ru, resolveDynamicComponent as tt, withDirectives as An, vShow as ir, h as Ge, createTextVNode as _e, watchSyncEffect as cl, toDisplayString as ke, isRef as st, onBeforeMount as pl, onUnmounted as Ne, createElementBlock as q, Fragment as Be, renderList as rt, useSlots as Go, Teleport as io, onBeforeUnmount as Tn, toHandlerKey as fl, inject as In, provide as Mn, onBeforeUpdate as Lu, onUpdated as Vu, reactive as kn, readonly as Yo, Comment as ur, cloneVNode as vl, markRaw as ml, createElementVNode as oe, vModelSelect as zu, toRaw as qu, mergeDefaults as dr, watchPostEffect as cr, effectScope as Xo, customRef as gl, normalizeClass as le, isVNode as Nu, toValue as Je, withMemo as ju, createStaticVNode as Ku, vModelText as hl } from "vue";
function yl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Hu = {
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
}, _a = Hu, pr = {
  whitespace: /\s+/g,
  urlHexPairs: /%[\dA-F]{2}/g,
  quotes: /"/g
};
function Wu(e) {
  return e.trim().replace(pr.whitespace, " ");
}
function Uu(e) {
  return encodeURIComponent(e).replace(pr.urlHexPairs, Yu);
}
function Gu(e) {
  return Object.keys(_a).forEach(function(t) {
    _a[t].test(e) && (e = e.replace(_a[t], t));
  }), e;
}
function Yu(e) {
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
function qa(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string, but received " + typeof e);
  e.charCodeAt(0) === 65279 && (e = e.slice(1));
  var t = Gu(Wu(e)).replace(pr.quotes, "'");
  return "data:image/svg+xml," + Uu(t);
}
qa.toSrcset = function(t) {
  return qa(t).replace(/ /g, "%20");
};
var Xu = qa, bl = {}, wl = {};
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
})(wl);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return o;
    }
  });
  const t = /* @__PURE__ */ n(wl);
  function n(a) {
    return a && a.__esModule ? a : {
      default: a
    };
  }
  const o = t.default;
})(bl);
let xa = bl;
var _l = (xa.__esModule ? xa : { default: xa }).default, xl = {}, Cl = {};
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
})(Cl);
var Zu = {
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
  const t = Cl, n = /* @__PURE__ */ o(Zu);
  function o(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  const a = (0, t.cloneDeep)(n.default.theme);
})(xl);
let Ca = xl;
var Qu = (Ca.__esModule ? Ca : { default: Ca }).default, Bl = {}, $l = {}, fr = { exports: {} }, fe = String, Sl = function() {
  return { isColorSupported: !1, reset: fe, bold: fe, dim: fe, italic: fe, underline: fe, inverse: fe, hidden: fe, strikethrough: fe, black: fe, red: fe, green: fe, yellow: fe, blue: fe, magenta: fe, cyan: fe, white: fe, gray: fe, bgBlack: fe, bgRed: fe, bgGreen: fe, bgYellow: fe, bgBlue: fe, bgMagenta: fe, bgCyan: fe, bgWhite: fe, blackBright: fe, redBright: fe, greenBright: fe, yellowBright: fe, blueBright: fe, magentaBright: fe, cyanBright: fe, whiteBright: fe, bgBlackBright: fe, bgRedBright: fe, bgGreenBright: fe, bgYellowBright: fe, bgBlueBright: fe, bgMagentaBright: fe, bgCyanBright: fe, bgWhiteBright: fe };
};
fr.exports = Sl();
fr.exports.createColors = Sl;
var Ju = fr.exports;
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
  const n = /* @__PURE__ */ o(Ju);
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
})($l);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return a;
    }
  });
  const t = /* @__PURE__ */ n($l);
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
})(Bl);
let Ba = Bl;
var ed = (Ba.__esModule ? Ba : { default: Ba }).default;
const xo = Xu, td = _l, kl = Qu, zt = ed, [nd, { lineHeight: od }] = kl.fontSize.base, { spacing: Dt, borderWidth: ms, borderRadius: gs } = kl;
function en(e, t) {
  return e.replace("<alpha-value>", `var(${t}, 1)`);
}
const ad = td.withOptions(function(e = { strategy: void 0 }) {
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
          "border-color": en(
            o("colors.gray.500", zt.gray[500]),
            "--tw-border-opacity"
          ),
          "border-width": ms.DEFAULT,
          "border-radius": gs.none,
          "padding-top": Dt[2],
          "padding-right": Dt[3],
          "padding-bottom": Dt[2],
          "padding-left": Dt[3],
          "font-size": nd,
          "line-height": od,
          "--tw-shadow": "0 0 #0000",
          "&:focus": {
            outline: "2px solid transparent",
            "outline-offset": "2px",
            "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)",
            "--tw-ring-offset-width": "0px",
            "--tw-ring-offset-color": "#fff",
            "--tw-ring-color": en(
              o("colors.blue.600", zt.blue[600]),
              "--tw-ring-opacity"
            ),
            "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
            "--tw-ring-shadow": "var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
            "box-shadow": "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)",
            "border-color": en(
              o("colors.blue.600", zt.blue[600]),
              "--tw-border-opacity"
            )
          }
        }
      },
      {
        base: ["input::placeholder", "textarea::placeholder"],
        class: [".form-input::placeholder", ".form-textarea::placeholder"],
        styles: {
          color: en(o("colors.gray.500", zt.gray[500]), "--tw-text-opacity"),
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
          "background-image": `url("${xo(
            `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="${a(
              "colors.gray.500",
              zt.gray[500]
            )}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 8l4 4 4-4"/></svg>`
          )}")`,
          "background-position": `right ${Dt[2]} center`,
          "background-repeat": "no-repeat",
          "background-size": "1.5em 1.5em",
          "padding-right": Dt[10],
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
          "padding-right": Dt[3],
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
          height: Dt[4],
          width: Dt[4],
          color: en(o("colors.blue.600", zt.blue[600]), "--tw-text-opacity"),
          "background-color": "#fff",
          "border-color": en(
            o("colors.gray.500", zt.gray[500]),
            "--tw-border-opacity"
          ),
          "border-width": ms.DEFAULT,
          "--tw-shadow": "0 0 #0000"
        }
      },
      {
        base: ["[type='checkbox']"],
        class: [".form-checkbox"],
        styles: {
          "border-radius": gs.none
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
          "--tw-ring-color": en(
            o("colors.blue.600", zt.blue[600]),
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
          "background-image": `url("${xo(
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
          "background-image": `url("${xo(
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
          "background-image": `url("${xo(
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
var rd = ad;
const sd = /* @__PURE__ */ yl(rd), ld = _l;
function hs(e) {
  return Object.fromEntries(
    Object.entries(e).filter(([t]) => t !== "DEFAULT")
  );
}
var id = ld(
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
      { values: hs(n("animationDuration")) }
    ), t(
      { delay: (o) => ({ animationDelay: o }) },
      { values: n("animationDelay") }
    ), t(
      { ease: (o) => ({ animationTimingFunction: o }) },
      { values: hs(n("animationTimingFunction")) }
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
const ud = /* @__PURE__ */ yl(id), m_ = {
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
    ud,
    sd({
      strategy: "class"
    })
  ]
}, dd = ["top", "right", "bottom", "left"], Wt = Math.min, et = Math.max, Vo = Math.round, Co = Math.floor, _t = (e) => ({
  x: e,
  y: e
}), cd = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, pd = {
  start: "end",
  end: "start"
};
function Na(e, t, n) {
  return et(e, Wt(t, n));
}
function Ft(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Rt(e) {
  return e.split("-")[0];
}
function Fn(e) {
  return e.split("-")[1];
}
function vr(e) {
  return e === "x" ? "y" : "x";
}
function mr(e) {
  return e === "y" ? "height" : "width";
}
const fd = /* @__PURE__ */ new Set(["top", "bottom"]);
function wt(e) {
  return fd.has(Rt(e)) ? "y" : "x";
}
function gr(e) {
  return vr(wt(e));
}
function vd(e, t, n) {
  n === void 0 && (n = !1);
  const o = Fn(e), a = gr(e), r = mr(a);
  let l = a === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (l = zo(l)), [l, zo(l)];
}
function md(e) {
  const t = zo(e);
  return [ja(e), t, ja(t)];
}
function ja(e) {
  return e.replace(/start|end/g, (t) => pd[t]);
}
const ys = ["left", "right"], bs = ["right", "left"], gd = ["top", "bottom"], hd = ["bottom", "top"];
function yd(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? bs : ys : t ? ys : bs;
    case "left":
    case "right":
      return t ? gd : hd;
    default:
      return [];
  }
}
function bd(e, t, n, o) {
  const a = Fn(e);
  let r = yd(Rt(e), n === "start", o);
  return a && (r = r.map((l) => l + "-" + a), t && (r = r.concat(r.map(ja)))), r;
}
function zo(e) {
  return e.replace(/left|right|bottom|top/g, (t) => cd[t]);
}
function wd(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Ol(e) {
  return typeof e != "number" ? wd(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function qo(e) {
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
function ws(e, t, n) {
  let {
    reference: o,
    floating: a
  } = e;
  const r = wt(t), l = gr(t), i = mr(l), u = Rt(t), d = r === "y", c = o.x + o.width / 2 - a.width / 2, p = o.y + o.height / 2 - a.height / 2, v = o[i] / 2 - a[i] / 2;
  let m;
  switch (u) {
    case "top":
      m = {
        x: c,
        y: o.y - a.height
      };
      break;
    case "bottom":
      m = {
        x: c,
        y: o.y + o.height
      };
      break;
    case "right":
      m = {
        x: o.x + o.width,
        y: p
      };
      break;
    case "left":
      m = {
        x: o.x - a.width,
        y: p
      };
      break;
    default:
      m = {
        x: o.x,
        y: o.y
      };
  }
  switch (Fn(t)) {
    case "start":
      m[l] -= v * (n && d ? -1 : 1);
      break;
    case "end":
      m[l] += v * (n && d ? -1 : 1);
      break;
  }
  return m;
}
const _d = async (e, t, n) => {
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
  } = ws(d, o, u), v = o, m = {}, f = 0;
  for (let g = 0; g < i.length; g++) {
    const {
      name: w,
      fn: C
    } = i[g], {
      x: $,
      y: B,
      data: D,
      reset: O
    } = await C({
      x: c,
      y: p,
      initialPlacement: o,
      placement: v,
      strategy: a,
      middlewareData: m,
      rects: d,
      platform: l,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = $ ?? c, p = B ?? p, m = {
      ...m,
      [w]: {
        ...m[w],
        ...D
      }
    }, O && f <= 50 && (f++, typeof O == "object" && (O.placement && (v = O.placement), O.rects && (d = O.rects === !0 ? await l.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : O.rects), {
      x: c,
      y: p
    } = ws(d, v, u)), g = -1);
  }
  return {
    x: c,
    y: p,
    placement: v,
    strategy: a,
    middlewareData: m
  };
};
async function to(e, t) {
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
    altBoundary: v = !1,
    padding: m = 0
  } = Ft(t, e), f = Ol(m), w = i[v ? p === "floating" ? "reference" : "floating" : p], C = qo(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(w))) == null || n ? w : w.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(i.floating)),
    boundary: d,
    rootBoundary: c,
    strategy: u
  })), $ = p === "floating" ? {
    x: o,
    y: a,
    width: l.floating.width,
    height: l.floating.height
  } : l.reference, B = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(i.floating)), D = await (r.isElement == null ? void 0 : r.isElement(B)) ? await (r.getScale == null ? void 0 : r.getScale(B)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, O = qo(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: $,
    offsetParent: B,
    strategy: u
  }) : $);
  return {
    top: (C.top - O.top + f.top) / D.y,
    bottom: (O.bottom - C.bottom + f.bottom) / D.y,
    left: (C.left - O.left + f.left) / D.x,
    right: (O.right - C.right + f.right) / D.x
  };
}
const xd = (e) => ({
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
    } = Ft(e, t) || {};
    if (d == null)
      return {};
    const p = Ol(c), v = {
      x: n,
      y: o
    }, m = gr(a), f = mr(m), g = await l.getDimensions(d), w = m === "y", C = w ? "top" : "left", $ = w ? "bottom" : "right", B = w ? "clientHeight" : "clientWidth", D = r.reference[f] + r.reference[m] - v[m] - r.floating[f], O = v[m] - r.reference[m], P = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(d));
    let k = P ? P[B] : 0;
    (!k || !await (l.isElement == null ? void 0 : l.isElement(P))) && (k = i.floating[B] || r.floating[f]);
    const I = D / 2 - O / 2, F = k / 2 - g[f] / 2 - 1, T = Wt(p[C], F), V = Wt(p[$], F), M = T, G = k - g[f] - V, L = k / 2 - g[f] / 2 + I, W = Na(M, L, G), j = !u.arrow && Fn(a) != null && L !== W && r.reference[f] / 2 - (L < M ? T : V) - g[f] / 2 < 0, Y = j ? L < M ? L - M : L - G : 0;
    return {
      [m]: v[m] + Y,
      data: {
        [m]: W,
        centerOffset: L - W - Y,
        ...j && {
          alignmentOffset: Y
        }
      },
      reset: j
    };
  }
}), Cd = function(e) {
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
        fallbackPlacements: v,
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: f = "none",
        flipAlignment: g = !0,
        ...w
      } = Ft(e, t);
      if ((n = r.arrow) != null && n.alignmentOffset)
        return {};
      const C = Rt(a), $ = wt(i), B = Rt(i) === i, D = await (u.isRTL == null ? void 0 : u.isRTL(d.floating)), O = v || (B || !g ? [zo(i)] : md(i)), P = f !== "none";
      !v && P && O.push(...bd(i, g, f, D));
      const k = [i, ...O], I = await to(t, w), F = [];
      let T = ((o = r.flip) == null ? void 0 : o.overflows) || [];
      if (c && F.push(I[C]), p) {
        const L = vd(a, l, D);
        F.push(I[L[0]], I[L[1]]);
      }
      if (T = [...T, {
        placement: a,
        overflows: F
      }], !F.every((L) => L <= 0)) {
        var V, M;
        const L = (((V = r.flip) == null ? void 0 : V.index) || 0) + 1, W = k[L];
        if (W && (!(p === "alignment" ? $ !== wt(W) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        T.every((K) => wt(K.placement) === $ ? K.overflows[0] > 0 : !0)))
          return {
            data: {
              index: L,
              overflows: T
            },
            reset: {
              placement: W
            }
          };
        let j = (M = T.filter((Y) => Y.overflows[0] <= 0).sort((Y, K) => Y.overflows[1] - K.overflows[1])[0]) == null ? void 0 : M.placement;
        if (!j)
          switch (m) {
            case "bestFit": {
              var G;
              const Y = (G = T.filter((K) => {
                if (P) {
                  const H = wt(K.placement);
                  return H === $ || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  H === "y";
                }
                return !0;
              }).map((K) => [K.placement, K.overflows.filter((H) => H > 0).reduce((H, ue) => H + ue, 0)]).sort((K, H) => K[1] - H[1])[0]) == null ? void 0 : G[0];
              Y && (j = Y);
              break;
            }
            case "initialPlacement":
              j = i;
              break;
          }
        if (a !== j)
          return {
            reset: {
              placement: j
            }
          };
      }
      return {};
    }
  };
};
function _s(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function xs(e) {
  return dd.some((t) => e[t] >= 0);
}
const Bd = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: o = "referenceHidden",
        ...a
      } = Ft(e, t);
      switch (o) {
        case "referenceHidden": {
          const r = await to(t, {
            ...a,
            elementContext: "reference"
          }), l = _s(r, n.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: xs(l)
            }
          };
        }
        case "escaped": {
          const r = await to(t, {
            ...a,
            altBoundary: !0
          }), l = _s(r, n.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: xs(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, El = /* @__PURE__ */ new Set(["left", "top"]);
async function $d(e, t) {
  const {
    placement: n,
    platform: o,
    elements: a
  } = e, r = await (o.isRTL == null ? void 0 : o.isRTL(a.floating)), l = Rt(n), i = Fn(n), u = wt(n) === "y", d = El.has(l) ? -1 : 1, c = r && u ? -1 : 1, p = Ft(t, e);
  let {
    mainAxis: v,
    crossAxis: m,
    alignmentAxis: f
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: p.mainAxis || 0,
    crossAxis: p.crossAxis || 0,
    alignmentAxis: p.alignmentAxis
  };
  return i && typeof f == "number" && (m = i === "end" ? f * -1 : f), u ? {
    x: m * c,
    y: v * d
  } : {
    x: v * d,
    y: m * c
  };
}
const Sd = function(e) {
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
      } = t, u = await $d(t, e);
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
}, kd = function(e) {
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
          fn: (w) => {
            let {
              x: C,
              y: $
            } = w;
            return {
              x: C,
              y: $
            };
          }
        },
        ...u
      } = Ft(e, t), d = {
        x: n,
        y: o
      }, c = await to(t, u), p = wt(Rt(a)), v = vr(p);
      let m = d[v], f = d[p];
      if (r) {
        const w = v === "y" ? "top" : "left", C = v === "y" ? "bottom" : "right", $ = m + c[w], B = m - c[C];
        m = Na($, m, B);
      }
      if (l) {
        const w = p === "y" ? "top" : "left", C = p === "y" ? "bottom" : "right", $ = f + c[w], B = f - c[C];
        f = Na($, f, B);
      }
      const g = i.fn({
        ...t,
        [v]: m,
        [p]: f
      });
      return {
        ...g,
        data: {
          x: g.x - n,
          y: g.y - o,
          enabled: {
            [v]: r,
            [p]: l
          }
        }
      };
    }
  };
}, Od = function(e) {
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
      } = Ft(e, t), c = {
        x: n,
        y: o
      }, p = wt(a), v = vr(p);
      let m = c[v], f = c[p];
      const g = Ft(i, t), w = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (u) {
        const B = v === "y" ? "height" : "width", D = r.reference[v] - r.floating[B] + w.mainAxis, O = r.reference[v] + r.reference[B] - w.mainAxis;
        m < D ? m = D : m > O && (m = O);
      }
      if (d) {
        var C, $;
        const B = v === "y" ? "width" : "height", D = El.has(Rt(a)), O = r.reference[p] - r.floating[B] + (D && ((C = l.offset) == null ? void 0 : C[p]) || 0) + (D ? 0 : w.crossAxis), P = r.reference[p] + r.reference[B] + (D ? 0 : (($ = l.offset) == null ? void 0 : $[p]) || 0) - (D ? w.crossAxis : 0);
        f < O ? f = O : f > P && (f = P);
      }
      return {
        [v]: m,
        [p]: f
      };
    }
  };
}, Ed = function(e) {
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
      } = Ft(e, t), c = await to(t, d), p = Rt(a), v = Fn(a), m = wt(a) === "y", {
        width: f,
        height: g
      } = r.floating;
      let w, C;
      p === "top" || p === "bottom" ? (w = p, C = v === (await (l.isRTL == null ? void 0 : l.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (C = p, w = v === "end" ? "top" : "bottom");
      const $ = g - c.top - c.bottom, B = f - c.left - c.right, D = Wt(g - c[w], $), O = Wt(f - c[C], B), P = !t.middlewareData.shift;
      let k = D, I = O;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (I = B), (o = t.middlewareData.shift) != null && o.enabled.y && (k = $), P && !v) {
        const T = et(c.left, 0), V = et(c.right, 0), M = et(c.top, 0), G = et(c.bottom, 0);
        m ? I = f - 2 * (T !== 0 || V !== 0 ? T + V : et(c.left, c.right)) : k = g - 2 * (M !== 0 || G !== 0 ? M + G : et(c.top, c.bottom));
      }
      await u({
        ...t,
        availableWidth: I,
        availableHeight: k
      });
      const F = await l.getDimensions(i.floating);
      return f !== F.width || g !== F.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Zo() {
  return typeof window < "u";
}
function an(e) {
  return hr(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function nt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ct(e) {
  var t;
  return (t = (hr(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function hr(e) {
  return Zo() ? e instanceof Node || e instanceof nt(e).Node : !1;
}
function ht(e) {
  return Zo() ? e instanceof Element || e instanceof nt(e).Element : !1;
}
function xt(e) {
  return Zo() ? e instanceof HTMLElement || e instanceof nt(e).HTMLElement : !1;
}
function Cs(e) {
  return !Zo() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof nt(e).ShadowRoot;
}
const Pd = /* @__PURE__ */ new Set(["inline", "contents"]);
function uo(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: a
  } = yt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !Pd.has(a);
}
const Dd = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Ad(e) {
  return Dd.has(an(e));
}
const Td = [":popover-open", ":modal"];
function Qo(e) {
  return Td.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const Id = ["transform", "translate", "scale", "rotate", "perspective"], Md = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Fd = ["paint", "layout", "strict", "content"];
function yr(e) {
  const t = br(), n = ht(e) ? yt(e) : e;
  return Id.some((o) => n[o] ? n[o] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || Md.some((o) => (n.willChange || "").includes(o)) || Fd.some((o) => (n.contain || "").includes(o));
}
function Rd(e) {
  let t = Ut(e);
  for (; xt(t) && !On(t); ) {
    if (yr(t))
      return t;
    if (Qo(t))
      return null;
    t = Ut(t);
  }
  return null;
}
function br() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Ld = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function On(e) {
  return Ld.has(an(e));
}
function yt(e) {
  return nt(e).getComputedStyle(e);
}
function Jo(e) {
  return ht(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Ut(e) {
  if (an(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Cs(e) && e.host || // Fallback.
    Ct(e)
  );
  return Cs(t) ? t.host : t;
}
function Pl(e) {
  const t = Ut(e);
  return On(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : xt(t) && uo(t) ? t : Pl(t);
}
function no(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const a = Pl(e), r = a === ((o = e.ownerDocument) == null ? void 0 : o.body), l = nt(a);
  if (r) {
    const i = Ka(l);
    return t.concat(l, l.visualViewport || [], uo(a) ? a : [], i && n ? no(i) : []);
  }
  return t.concat(a, no(a, [], n));
}
function Ka(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Dl(e) {
  const t = yt(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const a = xt(e), r = a ? e.offsetWidth : n, l = a ? e.offsetHeight : o, i = Vo(n) !== r || Vo(o) !== l;
  return i && (n = r, o = l), {
    width: n,
    height: o,
    $: i
  };
}
function wr(e) {
  return ht(e) ? e : e.contextElement;
}
function Cn(e) {
  const t = wr(e);
  if (!xt(t))
    return _t(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: a,
    $: r
  } = Dl(t);
  let l = (r ? Vo(n.width) : n.width) / o, i = (r ? Vo(n.height) : n.height) / a;
  return (!l || !Number.isFinite(l)) && (l = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: l,
    y: i
  };
}
const Vd = /* @__PURE__ */ _t(0);
function Al(e) {
  const t = nt(e);
  return !br() || !t.visualViewport ? Vd : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function zd(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== nt(e) ? !1 : t;
}
function nn(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const a = e.getBoundingClientRect(), r = wr(e);
  let l = _t(1);
  t && (o ? ht(o) && (l = Cn(o)) : l = Cn(e));
  const i = zd(r, n, o) ? Al(r) : _t(0);
  let u = (a.left + i.x) / l.x, d = (a.top + i.y) / l.y, c = a.width / l.x, p = a.height / l.y;
  if (r) {
    const v = nt(r), m = o && ht(o) ? nt(o) : o;
    let f = v, g = Ka(f);
    for (; g && o && m !== f; ) {
      const w = Cn(g), C = g.getBoundingClientRect(), $ = yt(g), B = C.left + (g.clientLeft + parseFloat($.paddingLeft)) * w.x, D = C.top + (g.clientTop + parseFloat($.paddingTop)) * w.y;
      u *= w.x, d *= w.y, c *= w.x, p *= w.y, u += B, d += D, f = nt(g), g = Ka(f);
    }
  }
  return qo({
    width: c,
    height: p,
    x: u,
    y: d
  });
}
function ea(e, t) {
  const n = Jo(e).scrollLeft;
  return t ? t.left + n : nn(Ct(e)).left + n;
}
function Tl(e, t) {
  const n = e.getBoundingClientRect(), o = n.left + t.scrollLeft - ea(e, n), a = n.top + t.scrollTop;
  return {
    x: o,
    y: a
  };
}
function qd(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: o,
    strategy: a
  } = e;
  const r = a === "fixed", l = Ct(o), i = t ? Qo(t.floating) : !1;
  if (o === l || i && r)
    return n;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = _t(1);
  const c = _t(0), p = xt(o);
  if ((p || !p && !r) && ((an(o) !== "body" || uo(l)) && (u = Jo(o)), xt(o))) {
    const m = nn(o);
    d = Cn(o), c.x = m.x + o.clientLeft, c.y = m.y + o.clientTop;
  }
  const v = l && !p && !r ? Tl(l, u) : _t(0);
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - u.scrollLeft * d.x + c.x + v.x,
    y: n.y * d.y - u.scrollTop * d.y + c.y + v.y
  };
}
function Nd(e) {
  return Array.from(e.getClientRects());
}
function jd(e) {
  const t = Ct(e), n = Jo(e), o = e.ownerDocument.body, a = et(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), r = et(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let l = -n.scrollLeft + ea(e);
  const i = -n.scrollTop;
  return yt(o).direction === "rtl" && (l += et(t.clientWidth, o.clientWidth) - a), {
    width: a,
    height: r,
    x: l,
    y: i
  };
}
const Bs = 25;
function Kd(e, t) {
  const n = nt(e), o = Ct(e), a = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, i = 0, u = 0;
  if (a) {
    r = a.width, l = a.height;
    const c = br();
    (!c || c && t === "fixed") && (i = a.offsetLeft, u = a.offsetTop);
  }
  const d = ea(o);
  if (d <= 0) {
    const c = o.ownerDocument, p = c.body, v = getComputedStyle(p), m = c.compatMode === "CSS1Compat" && parseFloat(v.marginLeft) + parseFloat(v.marginRight) || 0, f = Math.abs(o.clientWidth - p.clientWidth - m);
    f <= Bs && (r -= f);
  } else d <= Bs && (r += d);
  return {
    width: r,
    height: l,
    x: i,
    y: u
  };
}
const Hd = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Wd(e, t) {
  const n = nn(e, !0, t === "fixed"), o = n.top + e.clientTop, a = n.left + e.clientLeft, r = xt(e) ? Cn(e) : _t(1), l = e.clientWidth * r.x, i = e.clientHeight * r.y, u = a * r.x, d = o * r.y;
  return {
    width: l,
    height: i,
    x: u,
    y: d
  };
}
function $s(e, t, n) {
  let o;
  if (t === "viewport")
    o = Kd(e, n);
  else if (t === "document")
    o = jd(Ct(e));
  else if (ht(t))
    o = Wd(t, n);
  else {
    const a = Al(e);
    o = {
      x: t.x - a.x,
      y: t.y - a.y,
      width: t.width,
      height: t.height
    };
  }
  return qo(o);
}
function Il(e, t) {
  const n = Ut(e);
  return n === t || !ht(n) || On(n) ? !1 : yt(n).position === "fixed" || Il(n, t);
}
function Ud(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = no(e, [], !1).filter((i) => ht(i) && an(i) !== "body"), a = null;
  const r = yt(e).position === "fixed";
  let l = r ? Ut(e) : e;
  for (; ht(l) && !On(l); ) {
    const i = yt(l), u = yr(l);
    !u && i.position === "fixed" && (a = null), (r ? !u && !a : !u && i.position === "static" && !!a && Hd.has(a.position) || uo(l) && !u && Il(e, l)) ? o = o.filter((c) => c !== l) : a = i, l = Ut(l);
  }
  return t.set(e, o), o;
}
function Gd(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: a
  } = e;
  const l = [...n === "clippingAncestors" ? Qo(t) ? [] : Ud(t, this._c) : [].concat(n), o], i = l[0], u = l.reduce((d, c) => {
    const p = $s(t, c, a);
    return d.top = et(p.top, d.top), d.right = Wt(p.right, d.right), d.bottom = Wt(p.bottom, d.bottom), d.left = et(p.left, d.left), d;
  }, $s(t, i, a));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function Yd(e) {
  const {
    width: t,
    height: n
  } = Dl(e);
  return {
    width: t,
    height: n
  };
}
function Xd(e, t, n) {
  const o = xt(t), a = Ct(t), r = n === "fixed", l = nn(e, !0, r, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = _t(0);
  function d() {
    u.x = ea(a);
  }
  if (o || !o && !r)
    if ((an(t) !== "body" || uo(a)) && (i = Jo(t)), o) {
      const m = nn(t, !0, r, t);
      u.x = m.x + t.clientLeft, u.y = m.y + t.clientTop;
    } else a && d();
  r && !o && a && d();
  const c = a && !o && !r ? Tl(a, i) : _t(0), p = l.left + i.scrollLeft - u.x - c.x, v = l.top + i.scrollTop - u.y - c.y;
  return {
    x: p,
    y: v,
    width: l.width,
    height: l.height
  };
}
function $a(e) {
  return yt(e).position === "static";
}
function Ss(e, t) {
  if (!xt(e) || yt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Ct(e) === n && (n = n.ownerDocument.body), n;
}
function Ml(e, t) {
  const n = nt(e);
  if (Qo(e))
    return n;
  if (!xt(e)) {
    let a = Ut(e);
    for (; a && !On(a); ) {
      if (ht(a) && !$a(a))
        return a;
      a = Ut(a);
    }
    return n;
  }
  let o = Ss(e, t);
  for (; o && Ad(o) && $a(o); )
    o = Ss(o, t);
  return o && On(o) && $a(o) && !yr(o) ? n : o || Rd(e) || n;
}
const Zd = async function(e) {
  const t = this.getOffsetParent || Ml, n = this.getDimensions, o = await n(e.floating);
  return {
    reference: Xd(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function Qd(e) {
  return yt(e).direction === "rtl";
}
const Jd = {
  convertOffsetParentRelativeRectToViewportRelativeRect: qd,
  getDocumentElement: Ct,
  getClippingRect: Gd,
  getOffsetParent: Ml,
  getElementRects: Zd,
  getClientRects: Nd,
  getDimensions: Yd,
  getScale: Cn,
  isElement: ht,
  isRTL: Qd
};
function Fl(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function ec(e, t) {
  let n = null, o;
  const a = Ct(e);
  function r() {
    var i;
    clearTimeout(o), (i = n) == null || i.disconnect(), n = null;
  }
  function l(i, u) {
    i === void 0 && (i = !1), u === void 0 && (u = 1), r();
    const d = e.getBoundingClientRect(), {
      left: c,
      top: p,
      width: v,
      height: m
    } = d;
    if (i || t(), !v || !m)
      return;
    const f = Co(p), g = Co(a.clientWidth - (c + v)), w = Co(a.clientHeight - (p + m)), C = Co(c), B = {
      rootMargin: -f + "px " + -g + "px " + -w + "px " + -C + "px",
      threshold: et(0, Wt(1, u)) || 1
    };
    let D = !0;
    function O(P) {
      const k = P[0].intersectionRatio;
      if (k !== u) {
        if (!D)
          return l();
        k ? l(!1, k) : o = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      k === 1 && !Fl(d, e.getBoundingClientRect()) && l(), D = !1;
    }
    try {
      n = new IntersectionObserver(O, {
        ...B,
        // Handle <iframe>s
        root: a.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(O, B);
    }
    n.observe(e);
  }
  return l(!0), r;
}
function Rl(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: a = !0,
    ancestorResize: r = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = o, d = wr(e), c = a || r ? [...d ? no(d) : [], ...no(t)] : [];
  c.forEach((C) => {
    a && C.addEventListener("scroll", n, {
      passive: !0
    }), r && C.addEventListener("resize", n);
  });
  const p = d && i ? ec(d, n) : null;
  let v = -1, m = null;
  l && (m = new ResizeObserver((C) => {
    let [$] = C;
    $ && $.target === d && m && (m.unobserve(t), cancelAnimationFrame(v), v = requestAnimationFrame(() => {
      var B;
      (B = m) == null || B.observe(t);
    })), n();
  }), d && !u && m.observe(d), m.observe(t));
  let f, g = u ? nn(e) : null;
  u && w();
  function w() {
    const C = nn(e);
    g && !Fl(g, C) && n(), g = C, f = requestAnimationFrame(w);
  }
  return n(), () => {
    var C;
    c.forEach(($) => {
      a && $.removeEventListener("scroll", n), r && $.removeEventListener("resize", n);
    }), p == null || p(), (C = m) == null || C.disconnect(), m = null, u && cancelAnimationFrame(f);
  };
}
const Ll = Sd, Vl = kd, No = Cd, zl = Ed, ql = Bd, tc = xd, Nl = Od, nc = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), a = {
    platform: Jd,
    ...n
  }, r = {
    ...a.platform,
    _c: o
  };
  return _d(e, t, {
    ...a,
    platform: r
  });
};
function oc(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function Ha(e) {
  if (oc(e)) {
    const t = e.$el;
    return hr(t) && an(t) === "#comment" ? null : t;
  }
  return e;
}
function _n(e) {
  return typeof e == "function" ? e() : s(e);
}
function jl(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const n = Ha(_n(e.element));
      return n == null ? {} : tc({
        element: n,
        padding: e.padding
      }).fn(t);
    }
  };
}
function Kl(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ks(e, t) {
  const n = Kl(e);
  return Math.round(t * n) / n;
}
function Hl(e, t, n) {
  n === void 0 && (n = {});
  const o = n.whileElementsMounted, a = S(() => {
    var k;
    return (k = _n(n.open)) != null ? k : !0;
  }), r = S(() => _n(n.middleware)), l = S(() => {
    var k;
    return (k = _n(n.placement)) != null ? k : "bottom";
  }), i = S(() => {
    var k;
    return (k = _n(n.strategy)) != null ? k : "absolute";
  }), u = S(() => {
    var k;
    return (k = _n(n.transform)) != null ? k : !0;
  }), d = S(() => Ha(e.value)), c = S(() => Ha(t.value)), p = E(0), v = E(0), m = E(i.value), f = E(l.value), g = Sn({}), w = E(!1), C = S(() => {
    const k = {
      position: m.value,
      left: "0",
      top: "0"
    };
    if (!c.value)
      return k;
    const I = ks(c.value, p.value), F = ks(c.value, v.value);
    return u.value ? {
      ...k,
      transform: "translate(" + I + "px, " + F + "px)",
      ...Kl(c.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: m.value,
      left: I + "px",
      top: F + "px"
    };
  });
  let $;
  function B() {
    if (d.value == null || c.value == null)
      return;
    const k = a.value;
    nc(d.value, c.value, {
      middleware: r.value,
      placement: l.value,
      strategy: i.value
    }).then((I) => {
      p.value = I.x, v.value = I.y, m.value = I.strategy, f.value = I.placement, g.value = I.middlewareData, w.value = k !== !1;
    });
  }
  function D() {
    typeof $ == "function" && ($(), $ = void 0);
  }
  function O() {
    if (D(), o === void 0) {
      B();
      return;
    }
    if (d.value != null && c.value != null) {
      $ = o(d.value, c.value, B);
      return;
    }
  }
  function P() {
    a.value || (w.value = !1);
  }
  return te([r, l, i, a], B, {
    flush: "sync"
  }), te([d, c], O, {
    flush: "sync"
  }), te(a, P, {
    flush: "sync"
  }), sr() && lr(D), {
    x: yn(p),
    y: yn(v),
    strategy: yn(m),
    placement: yn(f),
    middlewareData: yn(g),
    isPositioned: yn(w),
    floatingStyles: C,
    update: B
  };
}
function ye(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, o = Symbol(n);
  return [(a) => {
    const r = In(o, a);
    if (r || r === null)
      return r;
    throw new Error(
      `Injection \`${o.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (a) => (Mn(o, a), a)];
}
function _r(e, t, n) {
  const o = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, { once: !0 }), o.dispatchEvent(a);
}
function jo(e, t = Number.NEGATIVE_INFINITY, n = Number.POSITIVE_INFINITY) {
  return Math.min(n, Math.max(t, e));
}
function ac(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var rc = function e(t, n) {
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
const tn = /* @__PURE__ */ ac(rc);
function Bn(e) {
  return e == null;
}
function sc(e, t) {
  var n;
  const o = Sn();
  return xe(() => {
    o.value = e();
  }, {
    ...t,
    flush: (n = void 0) != null ? n : "sync"
  }), Yo(o);
}
function rn(e) {
  return sr() ? (lr(e), !0) : !1;
}
function lc() {
  const e = /* @__PURE__ */ new Set(), t = (n) => {
    e.delete(n);
  };
  return {
    on: (n) => {
      e.add(n);
      const o = () => t(n);
      return rn(o), {
        off: o
      };
    },
    off: t,
    trigger: (...n) => Promise.all(Array.from(e).map((o) => o(...n)))
  };
}
function ic(e) {
  let t = !1, n;
  const o = Xo(!0);
  return (...a) => (t || (n = o.run(() => e(...a)), t = !0), n);
}
function Wl(e) {
  let t = 0, n, o;
  const a = () => {
    t -= 1, o && t <= 0 && (o.stop(), n = void 0, o = void 0);
  };
  return (...r) => (t += 1, n || (o = Xo(!0), n = o.run(() => e(...r))), rn(a), n);
}
function Mt(e) {
  return typeof e == "function" ? e() : s(e);
}
const Bt = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const uc = (e) => typeof e < "u", dc = (e) => e != null, cc = Object.prototype.toString, pc = (e) => cc.call(e) === "[object Object]", Ul = () => {
}, Os = /* @__PURE__ */ fc();
function fc() {
  var e, t;
  return Bt && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function vc(e) {
  return Ue();
}
function Gl(e, t = 1e4) {
  return gl((n, o) => {
    let a = Mt(e), r;
    const l = () => setTimeout(() => {
      a = Mt(e), o();
    }, Mt(t));
    return rn(() => {
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
function mc(e, t) {
  vc() && Tn(e, t);
}
function xr(e, t, n = {}) {
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
    }, Mt(t));
  }
  return o && (a.value = !0, Bt && u()), rn(i), {
    isPending: Yo(a),
    start: u,
    stop: i
  };
}
function gc(e = 1e3, t = {}) {
  const {
    controls: n = !1,
    callback: o
  } = t, a = xr(
    o ?? Ul,
    e,
    t
  ), r = S(() => !a.isPending.value);
  return n ? {
    ready: r,
    ...a
  } : r;
}
function it(e) {
  var t;
  const n = Mt(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const co = Bt ? window : void 0;
function En(...e) {
  let t, n, o, a;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, o, a] = e, t = co) : [t, n, o, a] = e, !t)
    return Ul;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const r = [], l = () => {
    r.forEach((c) => c()), r.length = 0;
  }, i = (c, p, v, m) => (c.addEventListener(p, v, m), () => c.removeEventListener(p, v, m)), u = te(
    () => [it(t), Mt(a)],
    ([c, p]) => {
      if (l(), !c)
        return;
      const v = pc(p) ? { ...p } : p;
      r.push(
        ...n.flatMap((m) => o.map((f) => i(c, m, f, v)))
      );
    },
    { immediate: !0, flush: "post" }
  ), d = () => {
    u(), l();
  };
  return rn(d), d;
}
function hc(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function Cr(...e) {
  let t, n, o = {};
  e.length === 3 ? (t = e[0], n = e[1], o = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], o = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: a = co,
    eventName: r = "keydown",
    passive: l = !1,
    dedupe: i = !1
  } = o, u = hc(t);
  return En(a, r, (d) => {
    d.repeat && Mt(i) || u(d) && n(d);
  }, l);
}
function Br() {
  const e = E(!1), t = Ue();
  return t && ie(() => {
    e.value = !0;
  }, t), e;
}
function yc(e) {
  const t = Br();
  return S(() => (t.value, !!e()));
}
function bc(e, t, n = {}) {
  const { window: o = co, ...a } = n;
  let r;
  const l = yc(() => o && "MutationObserver" in o), i = () => {
    r && (r.disconnect(), r = void 0);
  }, u = S(() => {
    const v = Mt(e), m = (Array.isArray(v) ? v : [v]).map(it).filter(dc);
    return new Set(m);
  }), d = te(
    () => u.value,
    (v) => {
      i(), l.value && v.size && (r = new MutationObserver(t), v.forEach((m) => r.observe(m, a)));
    },
    { immediate: !0, flush: "post" }
  ), c = () => r == null ? void 0 : r.takeRecords(), p = () => {
    i(), d();
  };
  return rn(p), {
    isSupported: l,
    stop: p,
    takeRecords: c
  };
}
function Yl(e, t = {}) {
  const {
    immediate: n = !0,
    fpsLimit: o = void 0,
    window: a = co
  } = t, r = E(!1), l = o ? 1e3 / o : null;
  let i = 0, u = null;
  function d(v) {
    if (!r.value || !a)
      return;
    i || (i = v);
    const m = v - i;
    if (l && m < l) {
      u = a.requestAnimationFrame(d);
      return;
    }
    i = v, e({ delta: m, timestamp: v }), u = a.requestAnimationFrame(d);
  }
  function c() {
    !r.value && a && (r.value = !0, i = 0, u = a.requestAnimationFrame(d));
  }
  function p() {
    r.value = !1, u != null && a && (a.cancelAnimationFrame(u), u = null);
  }
  return n && c(), rn(p), {
    isActive: Yo(r),
    pause: p,
    resume: c
  };
}
function wc(e) {
  return JSON.parse(JSON.stringify(e));
}
function Pe(e, t, n, o = {}) {
  var a, r, l;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: c = !1,
    defaultValue: p,
    shouldEmit: v
  } = o, m = Ue(), f = n || (m == null ? void 0 : m.emit) || ((a = m == null ? void 0 : m.$emit) == null ? void 0 : a.bind(m)) || ((l = (r = m == null ? void 0 : m.proxy) == null ? void 0 : r.$emit) == null ? void 0 : l.bind(m == null ? void 0 : m.proxy));
  let g = d;
  t || (t = "modelValue"), g = g || `update:${t.toString()}`;
  const w = (B) => i ? typeof i == "function" ? i(B) : wc(B) : B, C = () => uc(e[t]) ? w(e[t]) : p, $ = (B) => {
    v ? v(B) && f(g, B) : f(g, B);
  };
  if (u) {
    const B = C(), D = E(B);
    let O = !1;
    return te(
      () => e[t],
      (P) => {
        O || (O = !0, D.value = w(P), re(() => O = !1));
      }
    ), te(
      D,
      (P) => {
        !O && (P !== e[t] || c) && $(P);
      },
      { deep: c }
    ), D;
  } else
    return S({
      get() {
        return C();
      },
      set(B) {
        $(B);
      }
    });
}
function ta(e) {
  return e ? e.flatMap((t) => t.type === Be ? ta(t.children) : [t]) : [];
}
function qe() {
  let e = document.activeElement;
  if (e == null)
    return null;
  for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null; )
    e = e.shadowRoot.activeElement;
  return e;
}
const _c = ["INPUT", "TEXTAREA"];
function Xl(e, t, n, o = {}) {
  if (!t || o.enableIgnoredElement && _c.includes(t.nodeName))
    return null;
  const {
    arrowKeyOptions: a = "both",
    attributeName: r = "[data-radix-vue-collection-item]",
    itemsArray: l = [],
    loop: i = !0,
    dir: u = "ltr",
    preventScroll: d = !0,
    focus: c = !1
  } = o, [p, v, m, f, g, w] = [
    e.key === "ArrowRight",
    e.key === "ArrowLeft",
    e.key === "ArrowUp",
    e.key === "ArrowDown",
    e.key === "Home",
    e.key === "End"
  ], C = m || f, $ = p || v;
  if (!g && !w && (!C && !$ || a === "vertical" && $ || a === "horizontal" && C))
    return null;
  const B = n ? Array.from(n.querySelectorAll(r)) : l;
  if (!B.length)
    return null;
  d && e.preventDefault();
  let D = null;
  return $ || C ? D = Zl(B, t, {
    goForward: C ? f : u === "ltr" ? p : v,
    loop: i
  }) : g ? D = B.at(0) || null : w && (D = B.at(-1) || null), c && (D == null || D.focus()), D;
}
function Zl(e, t, n, o = e.length) {
  if (--o === 0)
    return null;
  const a = e.indexOf(t), r = n.goForward ? a + 1 : a - 1;
  if (!n.loop && (r < 0 || r >= e.length))
    return null;
  const l = (r + e.length) % e.length, i = e[l];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? Zl(
    e,
    i,
    n,
    o
  ) : i : null;
}
function Sa(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function Wa(e, t, n = ".", o) {
  if (!Sa(t))
    return Wa(e, {}, n);
  const a = Object.assign({}, t);
  for (const r in e) {
    if (r === "__proto__" || r === "constructor")
      continue;
    const l = e[r];
    l != null && (Array.isArray(l) && Array.isArray(a[r]) ? a[r] = [...l, ...a[r]] : Sa(l) && Sa(a[r]) ? a[r] = Wa(
      l,
      a[r],
      (n ? `${n}.` : "") + r.toString()
    ) : a[r] = l);
  }
  return a;
}
function xc(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, o) => Wa(n, o, ""), {})
  );
}
const Cc = xc(), [na] = ye("ConfigProvider");
let Bc = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", $c = (e = 21) => {
  let t = "", n = e;
  for (; n--; )
    t += Bc[Math.random() * 64 | 0];
  return t;
};
const Sc = Wl(() => {
  const e = E(/* @__PURE__ */ new Map()), t = E(), n = S(() => {
    for (const l of e.value.values())
      if (l)
        return !0;
    return !1;
  }), o = na({
    scrollBody: E(!0)
  });
  let a = null;
  const r = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", Os && (a == null || a()), t.value = void 0;
  };
  return te(n, (l, i) => {
    var u;
    if (!Bt)
      return;
    if (!l) {
      i && r();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const d = window.innerWidth - document.documentElement.clientWidth, c = { padding: d, margin: 0 }, p = (u = o.scrollBody) != null && u.value ? typeof o.scrollBody.value == "object" ? Cc({
      padding: o.scrollBody.value.padding === !0 ? d : o.scrollBody.value.padding,
      margin: o.scrollBody.value.margin === !0 ? d : o.scrollBody.value.margin
    }, c) : c : { padding: 0, margin: 0 };
    d > 0 && (document.body.style.paddingRight = typeof p.padding == "number" ? `${p.padding}px` : String(p.padding), document.body.style.marginRight = typeof p.margin == "number" ? `${p.margin}px` : String(p.margin), document.body.style.setProperty("--scrollbar-width", `${d}px`), document.body.style.overflow = "hidden"), Os && (a = En(
      document,
      "touchmove",
      (v) => kc(v),
      { passive: !1 }
    )), re(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), e;
});
function po(e) {
  const t = $c(6), n = Sc();
  n.value.set(t, e ?? !1);
  const o = S({
    get: () => n.value.get(t) ?? !1,
    set: (a) => n.value.set(t, a)
  });
  return mc(() => {
    n.value.delete(t);
  }), o;
}
function Ql(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight)
    return !0;
  {
    const n = e.parentNode;
    return !(n instanceof Element) || n.tagName === "BODY" ? !1 : Ql(n);
  }
}
function kc(e) {
  const t = e || window.event, n = t.target;
  return n instanceof Element && Ql(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
const Oc = "data-radix-vue-collection-item";
function Rn(e, t = Oc) {
  const n = Symbol();
  return { createCollection: (o) => {
    const a = E([]);
    function r() {
      const l = it(o);
      return l ? a.value = Array.from(
        l.querySelectorAll(`[${t}]:not([data-disabled])`)
      ) : a.value = [];
    }
    return Lu(() => {
      a.value = [];
    }), ie(r), Vu(r), te(() => o == null ? void 0 : o.value, r, { immediate: !0 }), Mn(n, a), a;
  }, injectCollection: () => In(n, E([])) };
}
function Yt(e) {
  const t = na({
    dir: E("ltr")
  });
  return S(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.dir) == null ? void 0 : n.value) || "ltr";
  });
}
function Xt(e) {
  const t = Ue(), n = t == null ? void 0 : t.type.emits, o = {};
  return n != null && n.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), n == null || n.forEach((a) => {
    o[fl(Uo(a))] = (...r) => e(a, ...r);
  }), o;
}
let ka = 0;
function $r() {
  xe((e) => {
    if (!Bt)
      return;
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? Es()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? Es()
    ), ka++, e(() => {
      ka === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((n) => n.remove()), ka--;
    });
  });
}
function Es() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
function oa(e) {
  return S(() => {
    var t;
    return Mt(e) ? !!((t = it(e)) != null && t.closest("form")) : !0;
  });
}
function je(e) {
  const t = Ue(), n = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((a, r) => {
    const l = (t == null ? void 0 : t.type.props[r]).default;
    return l !== void 0 && (a[r] = l), a;
  }, {}), o = dl(e);
  return S(() => {
    const a = {}, r = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(r).forEach((l) => {
      a[Uo(l)] = r[l];
    }), Object.keys({ ...n, ...a }).reduce((l, i) => (o.value[i] !== void 0 && (l[i] = o.value[i]), l), {});
  });
}
function de(e, t) {
  const n = je(e), o = t ? Xt(t) : {};
  return S(() => ({
    ...n.value,
    ...o
  }));
}
function N() {
  const e = Ue(), t = E(), n = S(() => {
    var l, i;
    return ["#text", "#comment"].includes((l = t.value) == null ? void 0 : l.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : it(t);
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
function Ec(e, t) {
  const n = Gl(!1, 300), o = E(null), a = lc();
  function r() {
    o.value = null, n.value = !1;
  }
  function l(i, u) {
    const d = i.currentTarget, c = { x: i.clientX, y: i.clientY }, p = Pc(c, d.getBoundingClientRect()), v = Dc(c, p), m = Ac(u.getBoundingClientRect()), f = Ic([...v, ...m]);
    o.value = f, n.value = !0;
  }
  return xe((i) => {
    if (e.value && t.value) {
      const u = (c) => l(c, t.value), d = (c) => l(c, e.value);
      e.value.addEventListener("pointerleave", u), t.value.addEventListener("pointerleave", d), i(() => {
        var c, p;
        (c = e.value) == null || c.removeEventListener("pointerleave", u), (p = t.value) == null || p.removeEventListener("pointerleave", d);
      });
    }
  }), xe((i) => {
    var u;
    if (o.value) {
      const d = (c) => {
        var p, v;
        if (!o.value)
          return;
        const m = c.target, f = { x: c.clientX, y: c.clientY }, g = ((p = e.value) == null ? void 0 : p.contains(m)) || ((v = t.value) == null ? void 0 : v.contains(m)), w = !Tc(f, o.value), C = !!m.closest("[data-grace-area-trigger]");
        g ? r() : (w || C) && (r(), a.trigger());
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
function Pc(e, t) {
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
function Dc(e, t, n = 5) {
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
function Ac(e) {
  const { top: t, right: n, bottom: o, left: a } = e;
  return [
    { x: a, y: t },
    { x: n, y: t },
    { x: n, y: o },
    { x: a, y: o }
  ];
}
function Tc(e, t) {
  const { x: n, y: o } = e;
  let a = !1;
  for (let r = 0, l = t.length - 1; r < t.length; l = r++) {
    const i = t[r].x, u = t[r].y, d = t[l].x, c = t[l].y;
    u > o != c > o && n < (d - i) * (o - u) / (c - u) + i && (a = !a);
  }
  return a;
}
function Ic(e) {
  const t = e.slice();
  return t.sort((n, o) => n.x < o.x ? -1 : n.x > o.x ? 1 : n.y < o.y ? -1 : n.y > o.y ? 1 : 0), Mc(t);
}
function Mc(e) {
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
var Fc = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, bn = /* @__PURE__ */ new WeakMap(), Bo = /* @__PURE__ */ new WeakMap(), $o = {}, Oa = 0, Jl = function(e) {
  return e && (e.host || Jl(e.parentNode));
}, Rc = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = Jl(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Lc = function(e, t, n, o) {
  var a = Rc(t, Array.isArray(e) ? e : [e]);
  $o[n] || ($o[n] = /* @__PURE__ */ new WeakMap());
  var r = $o[n], l = [], i = /* @__PURE__ */ new Set(), u = new Set(a), d = function(p) {
    !p || i.has(p) || (i.add(p), d(p.parentNode));
  };
  a.forEach(d);
  var c = function(p) {
    !p || u.has(p) || Array.prototype.forEach.call(p.children, function(v) {
      if (i.has(v))
        c(v);
      else
        try {
          var m = v.getAttribute(o), f = m !== null && m !== "false", g = (bn.get(v) || 0) + 1, w = (r.get(v) || 0) + 1;
          bn.set(v, g), r.set(v, w), l.push(v), g === 1 && f && Bo.set(v, !0), w === 1 && v.setAttribute(n, "true"), f || v.setAttribute(o, "true");
        } catch (C) {
          console.error("aria-hidden: cannot operate on ", v, C);
        }
    });
  };
  return c(t), i.clear(), Oa++, function() {
    l.forEach(function(p) {
      var v = bn.get(p) - 1, m = r.get(p) - 1;
      bn.set(p, v), r.set(p, m), v || (Bo.has(p) || p.removeAttribute(o), Bo.delete(p)), m || p.removeAttribute(n);
    }), Oa--, Oa || (bn = /* @__PURE__ */ new WeakMap(), bn = /* @__PURE__ */ new WeakMap(), Bo = /* @__PURE__ */ new WeakMap(), $o = {});
  };
}, Vc = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), a = Fc(e);
  return a ? (o.push.apply(o, Array.from(a.querySelectorAll("[aria-live]"))), Lc(o, a, n, "aria-hidden")) : function() {
    return null;
  };
};
function fo(e) {
  let t;
  te(() => it(e), (n) => {
    n ? t = Vc(n) : t && t();
  }), Ne(() => {
    t && t();
  });
}
let zc = 0;
function Le(e, t = "radix") {
  const n = na({ useId: void 0 });
  return xn.useId ? `${t}-${xn.useId()}` : n.useId ? `${t}-${n.useId()}` : `${t}-${++zc}`;
}
function ei(e) {
  const t = E(), n = S(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.width) ?? 0;
  }), o = S(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.height) ?? 0;
  });
  return ie(() => {
    const a = it(e);
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
function qc(e, t) {
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
const Nc = "data-item-text";
function Sr(e) {
  const t = Gl("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (n, o) => {
      if (!(e != null && e.value) && !o)
        return;
      t.value = t.value + n;
      const a = (e == null ? void 0 : e.value) ?? o, r = qe(), l = a.map((p) => {
        var v;
        return {
          ref: p,
          textValue: ((v = (p.querySelector(`[${Nc}]`) ?? p).textContent) == null ? void 0 : v.trim()) ?? ""
        };
      }), i = l.find((p) => p.ref === r), u = l.map((p) => p.textValue), d = Kc(u, t.value, i == null ? void 0 : i.textValue), c = l.find((p) => p.textValue === d);
      return c && c.ref.focus(), c == null ? void 0 : c.ref;
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function jc(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
function Kc(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((i) => i === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let r = jc(e, Math.max(a, 0));
  o.length === 1 && (r = r.filter((i) => i !== n));
  const l = r.find(
    (i) => i.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
const kr = b({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      var o, a;
      if (!n.default)
        return null;
      const r = ta(n.default()), l = r.findIndex((c) => c.type !== ur);
      if (l === -1)
        return r;
      const i = r[l];
      (o = i.props) == null || delete o.ref;
      const u = i.props ? A(t, i.props) : t;
      t.class && (a = i.props) != null && a.class && delete i.props.class;
      const d = vl(i, u);
      for (const c in u)
        c.startsWith("on") && (d.props || (d.props = {}), d.props[c] = u[c]);
      return r.length === 1 ? d : (r[l] = d, r);
    };
  }
}), X = b({
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
    return typeof o == "string" && ["area", "img", "input"].includes(o) ? () => Ge(o, t) : o !== "template" ? () => Ge(e.as, t, { default: n.default }) : () => Ge(kr, t, { default: n.default });
  }
});
function ti() {
  const e = E(), t = S(() => {
    var n, o;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (o = e.value) == null ? void 0 : o.$el.nextElementSibling : it(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
const [ni, Hc] = ye("CollapsibleRoot"), Wc = /* @__PURE__ */ b({
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
    const o = e, a = Pe(o, "open", n, {
      defaultValue: o.defaultOpen,
      passive: o.open === void 0
    }), r = Pe(o, "disabled");
    return Hc({
      contentId: "",
      disabled: r,
      open: a,
      onOpenToggle: () => {
        a.value = !a.value;
      }
    }), t({ open: a }), N(), (l, i) => (h(), x(s(X), {
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
}), Uc = /* @__PURE__ */ b({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    N();
    const n = ni();
    return (o, a) => {
      var r, l;
      return h(), x(s(X), {
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
function Gc(e, t) {
  var n;
  const o = E({}), a = E("none"), r = E(e), l = e.value ? "mounted" : "unmounted";
  let i;
  const u = ((n = t.value) == null ? void 0 : n.ownerDocument.defaultView) ?? co, { state: d, dispatch: c } = qc(l, {
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
  }), p = (w) => {
    var C;
    if (Bt) {
      const $ = new CustomEvent(w, { bubbles: !1, cancelable: !1 });
      (C = t.value) == null || C.dispatchEvent($);
    }
  };
  te(
    e,
    async (w, C) => {
      var $;
      const B = C !== w;
      if (await re(), B) {
        const D = a.value, O = So(t.value);
        w ? (c("MOUNT"), p("enter"), O === "none" && p("after-enter")) : O === "none" || (($ = o.value) == null ? void 0 : $.display) === "none" ? (c("UNMOUNT"), p("leave"), p("after-leave")) : C && D !== O ? (c("ANIMATION_OUT"), p("leave")) : (c("UNMOUNT"), p("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const v = (w) => {
    const C = So(t.value), $ = C.includes(
      w.animationName
    ), B = d.value === "mounted" ? "enter" : "leave";
    if (w.target === t.value && $ && (p(`after-${B}`), c("ANIMATION_END"), !r.value)) {
      const D = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", i = u == null ? void 0 : u.setTimeout(() => {
        var O;
        ((O = t.value) == null ? void 0 : O.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = D);
      });
    }
    w.target === t.value && C === "none" && c("ANIMATION_END");
  }, m = (w) => {
    w.target === t.value && (a.value = So(t.value));
  }, f = te(
    t,
    (w, C) => {
      w ? (o.value = getComputedStyle(w), w.addEventListener("animationstart", m), w.addEventListener("animationcancel", v), w.addEventListener("animationend", v)) : (c("ANIMATION_END"), i !== void 0 && (u == null || u.clearTimeout(i)), C == null || C.removeEventListener("animationstart", m), C == null || C.removeEventListener("animationcancel", v), C == null || C.removeEventListener("animationend", v));
    },
    { immediate: !0 }
  ), g = te(d, () => {
    const w = So(t.value);
    a.value = d.value === "mounted" ? w : "none";
  });
  return Ne(() => {
    f(), g();
  }), {
    isPresent: S(
      () => ["mounted", "unmountSuspended"].includes(d.value)
    )
  };
}
function So(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const ut = b({
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
    const { present: a, forceMount: r } = we(e), l = E(), { isPresent: i } = Gc(a, l);
    n({ present: i });
    let u = t.default({ present: i });
    u = ta(u || []);
    const d = Ue();
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
    return () => r.value || a.value || i.value ? Ge(t.default({ present: i })[0], {
      ref: (c) => {
        const p = it(c);
        return typeof (p == null ? void 0 : p.hasAttribute) > "u" || (p != null && p.hasAttribute("data-radix-popper-content-wrapper") ? l.value = p.firstElementChild : l.value = p), p;
      }
    }) : null;
  }
}), Yc = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = ni();
    n.contentId || (n.contentId = Le(void 0, "radix-vue-collapsible-content"));
    const o = E(), { forwardRef: a, currentElement: r } = N(), l = E(0), i = E(0), u = S(() => n.open.value), d = E(u.value), c = E();
    return te(
      () => {
        var p;
        return [u.value, (p = o.value) == null ? void 0 : p.present];
      },
      async () => {
        await re();
        const p = r.value;
        if (!p)
          return;
        c.value = c.value || {
          transitionDuration: p.style.transitionDuration,
          animationName: p.style.animationName
        }, p.style.transitionDuration = "0s", p.style.animationName = "none";
        const v = p.getBoundingClientRect();
        i.value = v.height, l.value = v.width, d.value || (p.style.transitionDuration = c.value.transitionDuration, p.style.animationName = c.value.animationName);
      },
      {
        immediate: !0
      }
    ), ie(() => {
      requestAnimationFrame(() => {
        d.value = !1;
      });
    }), (p, v) => (h(), x(s(ut), {
      ref_key: "presentRef",
      ref: o,
      present: p.forceMount || s(n).open.value,
      "force-mount": !0
    }, {
      default: y(() => {
        var m, f;
        return [
          R(s(X), A(p.$attrs, {
            id: s(n).contentId,
            ref: s(a),
            "as-child": t.asChild,
            as: p.as,
            "data-state": s(n).open.value ? "open" : "closed",
            "data-disabled": (m = s(n).disabled) != null && m.value ? "" : void 0,
            hidden: !((f = o.value) != null && f.present),
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
function oi({ type: e, defaultValue: t, modelValue: n }) {
  const o = n || t;
  if (Bn(e) && Bn(n) && Bn(t))
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
function Xc({ type: e, defaultValue: t, modelValue: n }) {
  return e || oi({ type: e, defaultValue: t, modelValue: n });
}
function Zc({ type: e, defaultValue: t }) {
  return t !== void 0 ? t : e === "single" ? void 0 : [];
}
function Qc(e, t) {
  const n = E(Xc(e)), o = Pe(e, "modelValue", t, {
    defaultValue: Zc(e),
    passive: e.modelValue === void 0,
    deep: !0
  });
  te(
    () => [e.type, e.modelValue, e.defaultValue],
    () => {
      const l = oi(e);
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
const [aa, Jc] = ye("AccordionRoot"), ep = /* @__PURE__ */ b({
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
    const n = e, o = t, { dir: a, disabled: r } = we(n), l = Yt(a), { modelValue: i, changeModelValue: u, isSingle: d } = Qc(n, o), { forwardRef: c, currentElement: p } = N();
    return Jc({
      disabled: r,
      direction: l,
      orientation: n.orientation,
      parentElement: p,
      isSingle: d,
      collapsible: n.collapsible,
      modelValue: i,
      changeModelValue: u
    }), (v, m) => (h(), x(s(X), {
      ref: s(c),
      "as-child": v.asChild,
      as: v.as
    }, {
      default: y(() => [
        _(v.$slots, "default", { modelValue: s(i) })
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), [Or, tp] = ye("AccordionItem"), np = /* @__PURE__ */ b({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e, { expose: t }) {
    const n = e, o = aa(), a = S(
      () => o.isSingle.value ? n.value === o.modelValue.value : Array.isArray(o.modelValue.value) && o.modelValue.value.includes(n.value)
    ), r = S(() => o.disabled.value || n.disabled), l = S(() => r.value ? "" : void 0), i = S(
      () => a.value ? "open" : "closed"
      /* Closed */
    );
    t({ open: a, dataDisabled: l });
    const { currentRef: u, currentElement: d } = N();
    tp({
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
      var v;
      const m = p.target;
      if (Array.from(((v = o.parentElement.value) == null ? void 0 : v.querySelectorAll("[data-radix-vue-collection-item]")) ?? []).findIndex((f) => f === m) === -1)
        return null;
      Xl(
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
    return (p, v) => (h(), x(s(Wc), {
      "data-orientation": s(o).orientation,
      "data-disabled": l.value,
      "data-state": i.value,
      disabled: r.value,
      open: a.value,
      as: n.as,
      "as-child": n.asChild,
      onKeydown: Qe(c, ["up", "down", "left", "right", "home", "end"])
    }, {
      default: y(() => [
        _(p.$slots, "default", { open: a.value })
      ]),
      _: 3
    }, 8, ["data-orientation", "data-disabled", "data-state", "disabled", "open", "as", "as-child"]));
  }
}), op = /* @__PURE__ */ b({
  __name: "AccordionContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = aa(), o = Or();
    return N(), (a, r) => (h(), x(s(Yc), {
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
}), ap = /* @__PURE__ */ b({
  __name: "AccordionHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "h3" }
  },
  setup(e) {
    const t = e, n = aa(), o = Or();
    return N(), (a, r) => (h(), x(s(X), {
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
}), rp = /* @__PURE__ */ b({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = aa(), o = Or();
    o.triggerId || (o.triggerId = Le(void 0, "radix-vue-accordion-trigger"));
    function a() {
      const r = n.isSingle.value && o.open.value && !n.collapsible;
      o.disabled.value || r || n.changeModelValue(o.value.value);
    }
    return (r, l) => (h(), x(s(Uc), {
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
}), [$t, sp] = ye("DialogRoot"), Er = /* @__PURE__ */ b({
  inheritAttrs: !1,
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
    }), a = E(), r = E(), { modal: l } = we(n);
    return sp({
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
}), Pr = /* @__PURE__ */ b({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = $t(), { forwardRef: o, currentElement: a } = N();
    return n.contentId || (n.contentId = Le(void 0, "radix-vue-dialog-content")), ie(() => {
      n.triggerElement.value = a.value;
    }), (r, l) => (h(), x(s(X), A(t, {
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
}), Ln = /* @__PURE__ */ b({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = Br();
    return (n, o) => s(t) || n.forceMount ? (h(), x(io, {
      key: 0,
      to: n.to,
      disabled: n.disabled
    }, [
      _(n.$slots, "default")
    ], 8, ["to", "disabled"])) : ce("", !0);
  }
}), Dr = /* @__PURE__ */ b({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Ln), Q(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), lp = "dismissableLayer.pointerDownOutside", ip = "dismissableLayer.focusOutside";
function ai(e, t) {
  const n = t.closest(
    "[data-dismissable-layer]"
  ), o = e.dataset.dismissableLayer === "" ? e : e.querySelector(
    "[data-dismissable-layer]"
  ), a = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(n && o === n || a.indexOf(o) < a.indexOf(n));
}
function up(e, t) {
  var n;
  const o = ((n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), a = E(!1), r = E(() => {
  });
  return xe((l) => {
    if (!Bt)
      return;
    const i = async (d) => {
      const c = d.target;
      if (t != null && t.value) {
        if (ai(t.value, c)) {
          a.value = !1;
          return;
        }
        if (d.target && !a.value) {
          let p = function() {
            _r(
              lp,
              e,
              v
            );
          };
          const v = { originalEvent: d };
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
function dp(e, t) {
  var n;
  const o = ((n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), a = E(!1);
  return xe((r) => {
    if (!Bt)
      return;
    const l = async (i) => {
      t != null && t.value && (await re(), !(!t.value || ai(t.value, i.target)) && i.target && !a.value && _r(
        ip,
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
const ft = kn({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Vn = /* @__PURE__ */ b({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, o = t, { forwardRef: a, currentElement: r } = N(), l = S(
      () => {
        var f;
        return ((f = r.value) == null ? void 0 : f.ownerDocument) ?? globalThis.document;
      }
    ), i = S(() => ft.layersRoot), u = S(() => r.value ? Array.from(i.value).indexOf(r.value) : -1), d = S(() => ft.layersWithOutsidePointerEventsDisabled.size > 0), c = S(() => {
      const f = Array.from(i.value), [g] = [...ft.layersWithOutsidePointerEventsDisabled].slice(-1), w = f.indexOf(g);
      return u.value >= w;
    }), p = up(async (f) => {
      const g = [...ft.branches].some(
        (w) => w == null ? void 0 : w.contains(f.target)
      );
      !c.value || g || (o("pointerDownOutside", f), o("interactOutside", f), await re(), f.defaultPrevented || o("dismiss"));
    }, r), v = dp((f) => {
      [...ft.branches].some(
        (g) => g == null ? void 0 : g.contains(f.target)
      ) || (o("focusOutside", f), o("interactOutside", f), f.defaultPrevented || o("dismiss"));
    }, r);
    Cr("Escape", (f) => {
      u.value === i.value.size - 1 && (o("escapeKeyDown", f), f.defaultPrevented || o("dismiss"));
    });
    let m;
    return xe((f) => {
      r.value && (n.disableOutsidePointerEvents && (ft.layersWithOutsidePointerEventsDisabled.size === 0 && (m = l.value.body.style.pointerEvents, l.value.body.style.pointerEvents = "none"), ft.layersWithOutsidePointerEventsDisabled.add(r.value)), i.value.add(r.value), f(() => {
        n.disableOutsidePointerEvents && ft.layersWithOutsidePointerEventsDisabled.size === 1 && (l.value.body.style.pointerEvents = m);
      }));
    }), xe((f) => {
      f(() => {
        r.value && (i.value.delete(r.value), ft.layersWithOutsidePointerEventsDisabled.delete(r.value));
      });
    }), (f, g) => (h(), x(s(X), {
      ref: s(a),
      "as-child": f.asChild,
      as: f.as,
      "data-dismissable-layer": "",
      style: lt({
        pointerEvents: d.value ? c.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: s(v).onFocusCapture,
      onBlurCapture: s(v).onBlurCapture,
      onPointerdownCapture: s(p).onPointerDownCapture
    }, {
      default: y(() => [
        _(f.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
}), cp = /* @__PURE__ */ b({
  __name: "DismissableLayerBranch",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: o } = N();
    return ie(() => {
      ft.branches.add(o.value);
    }), Ne(() => {
      ft.branches.delete(o.value);
    }), (a, r) => (h(), x(s(X), A({ ref: s(n) }, t), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ea = "focusScope.autoFocusOnMount", Pa = "focusScope.autoFocusOnUnmount", Ps = { bubbles: !1, cancelable: !0 };
function Fo(e, { select: t = !1 } = {}) {
  const n = qe();
  for (const o of e)
    if (Kt(o, { select: t }), qe() !== n)
      return !0;
}
function pp(e) {
  const t = Ar(e), n = Ds(t, e), o = Ds(t.reverse(), e);
  return [n, o];
}
function Ar(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const a = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || a ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Ds(e, t) {
  for (const n of e)
    if (!fp(n, { upTo: t }))
      return n;
}
function fp(e, { upTo: t }) {
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
function vp(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Kt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = qe();
    e.focus({ preventScroll: !0 }), e !== n && vp(e) && t && e.select();
  }
}
const mp = ic(() => E([]));
function gp() {
  const e = mp();
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
function hp(e) {
  return e.filter((t) => t.tagName !== "A");
}
const ra = /* @__PURE__ */ b({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, o = t, { currentRef: a, currentElement: r } = N(), l = E(null), i = gp(), u = kn({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    xe((c) => {
      if (!Bt)
        return;
      const p = r.value;
      if (!n.trapped)
        return;
      function v(w) {
        if (u.paused || !p)
          return;
        const C = w.target;
        p.contains(C) ? l.value = C : Kt(l.value, { select: !0 });
      }
      function m(w) {
        if (u.paused || !p)
          return;
        const C = w.relatedTarget;
        C !== null && (p.contains(C) || Kt(l.value, { select: !0 }));
      }
      function f(w) {
        p.contains(l.value) || Kt(p);
      }
      document.addEventListener("focusin", v), document.addEventListener("focusout", m);
      const g = new MutationObserver(f);
      p && g.observe(p, { childList: !0, subtree: !0 }), c(() => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", m), g.disconnect();
      });
    }), xe(async (c) => {
      const p = r.value;
      if (await re(), !p)
        return;
      i.add(u);
      const v = qe();
      if (!p.contains(v)) {
        const m = new CustomEvent(Ea, Ps);
        p.addEventListener(Ea, (f) => o("mountAutoFocus", f)), p.dispatchEvent(m), m.defaultPrevented || (Fo(hp(Ar(p)), {
          select: !0
        }), qe() === v && Kt(p));
      }
      c(() => {
        p.removeEventListener(Ea, (g) => o("mountAutoFocus", g));
        const m = new CustomEvent(Pa, Ps), f = (g) => {
          o("unmountAutoFocus", g);
        };
        p.addEventListener(Pa, f), p.dispatchEvent(m), setTimeout(() => {
          m.defaultPrevented || Kt(v ?? document.body, { select: !0 }), p.removeEventListener(Pa, f), i.remove(u);
        }, 0);
      });
    });
    function d(c) {
      if (!n.loop && !n.trapped || u.paused)
        return;
      const p = c.key === "Tab" && !c.altKey && !c.ctrlKey && !c.metaKey, v = qe();
      if (p && v) {
        const m = c.currentTarget, [f, g] = pp(m);
        f && g ? !c.shiftKey && v === g ? (c.preventDefault(), n.loop && Kt(f, { select: !0 })) : c.shiftKey && v === f && (c.preventDefault(), n.loop && Kt(g, { select: !0 })) : v === m && c.preventDefault();
      }
    }
    return (c, p) => (h(), x(s(X), {
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
}), yp = "menu.itemSelect", Ua = ["Enter", " "], bp = ["ArrowDown", "PageUp", "Home"], ri = ["ArrowUp", "PageDown", "End"], wp = [...bp, ...ri], _p = {
  ltr: [...Ua, "ArrowRight"],
  rtl: [...Ua, "ArrowLeft"]
}, xp = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function Tr(e) {
  return e ? "open" : "closed";
}
function Ko(e) {
  return e === "indeterminate";
}
function Ir(e) {
  return Ko(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Ga(e) {
  const t = qe();
  for (const n of e)
    if (n === t || (n.focus(), qe() !== t))
      return;
}
function Cp(e, t) {
  const { x: n, y: o } = e;
  let a = !1;
  for (let r = 0, l = t.length - 1; r < t.length; l = r++) {
    const i = t[r].x, u = t[r].y, d = t[l].x, c = t[l].y;
    u > o != c > o && n < (d - i) * (o - u) / (c - u) + i && (a = !a);
  }
  return a;
}
function Bp(e, t) {
  if (!t)
    return !1;
  const n = { x: e.clientX, y: e.clientY };
  return Cp(n, t);
}
function oo(e) {
  return e.pointerType === "mouse";
}
const $p = "DialogTitle", Sp = "DialogContent";
function kp({
  titleName: e = $p,
  contentName: t = Sp,
  componentLink: n = "dialog.html#title",
  titleId: o,
  descriptionId: a,
  contentElement: r
}) {
  const l = `Warning: \`${t}\` requires a \`${e}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.radix-vue.com/components/${n}`, i = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${t}.`;
  ie(() => {
    var u;
    document.getElementById(o) || console.warn(l);
    const d = (u = r.value) == null ? void 0 : u.getAttribute("aria-describedby");
    a && d && (document.getElementById(a) || console.warn(i));
  });
}
const si = /* @__PURE__ */ b({
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
    const n = e, o = t, a = $t(), { forwardRef: r, currentElement: l } = N();
    return a.titleId || (a.titleId = Le(void 0, "radix-vue-dialog-title")), a.descriptionId || (a.descriptionId = Le(void 0, "radix-vue-dialog-description")), ie(() => {
      a.contentElement = l, qe() !== document.body && (a.triggerElement.value = qe());
    }), process.env.NODE_ENV !== "production" && kp({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: a.titleId,
      descriptionId: a.descriptionId,
      contentElement: l
    }), (i, u) => (h(), x(s(ra), {
      "as-child": "",
      loop: "",
      trapped: n.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => o("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => o("closeAutoFocus", d))
    }, {
      default: y(() => [
        R(s(Vn), A({
          id: s(a).contentId,
          ref: s(r),
          as: i.as,
          "as-child": i.asChild,
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": s(a).descriptionId,
          "aria-labelledby": s(a).titleId,
          "data-state": s(Tr)(s(a).open.value)
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
}), Op = /* @__PURE__ */ b({
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
    const n = e, o = t, a = $t(), r = Xt(o), { forwardRef: l, currentElement: i } = N();
    return fo(i), (u, d) => (h(), x(si, A({ ...n, ...s(r) }, {
      ref: s(l),
      "trap-focus": s(a).open.value,
      "disable-outside-pointer-events": !0,
      onCloseAutoFocus: d[0] || (d[0] = (c) => {
        var p;
        c.defaultPrevented || (c.preventDefault(), (p = s(a).triggerElement.value) == null || p.focus());
      }),
      onPointerDownOutside: d[1] || (d[1] = (c) => {
        const p = c.detail.originalEvent, v = p.button === 0 && p.ctrlKey === !0;
        (p.button === 2 || v) && c.preventDefault();
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
}), Ep = /* @__PURE__ */ b({
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
    const n = e, o = Xt(t);
    N();
    const a = $t(), r = E(!1), l = E(!1);
    return (i, u) => (h(), x(si, A({ ...n, ...s(o) }, {
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
}), sa = /* @__PURE__ */ b({
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
    const n = e, o = t, a = $t(), r = Xt(o), { forwardRef: l } = N();
    return (i, u) => (h(), x(s(ut), {
      present: i.forceMount || s(a).open.value
    }, {
      default: y(() => [
        s(a).modal.value ? (h(), x(Op, A({
          key: 0,
          ref: s(l)
        }, { ...n, ...s(r), ...i.$attrs }), {
          default: y(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (h(), x(Ep, A({
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
}), Pp = /* @__PURE__ */ b({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = $t();
    return po(!0), N(), (n, o) => (h(), x(s(X), {
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
}), la = /* @__PURE__ */ b({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = $t(), { forwardRef: n } = N();
    return (o, a) => {
      var r;
      return (r = s(t)) != null && r.modal.value ? (h(), x(s(ut), {
        key: 0,
        present: o.forceMount || s(t).open.value
      }, {
        default: y(() => [
          R(Pp, A(o.$attrs, {
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
}), sn = /* @__PURE__ */ b({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    N();
    const n = $t();
    return (o, a) => (h(), x(s(X), A(t, {
      type: o.as === "button" ? "button" : void 0,
      onClick: a[0] || (a[0] = (r) => s(n).onOpenChange(!1))
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
}), Mr = /* @__PURE__ */ b({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e, n = $t();
    return N(), (o, a) => (h(), x(s(X), A(t, {
      id: s(n).titleId
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Fr = /* @__PURE__ */ b({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    N();
    const n = $t();
    return (o, a) => (h(), x(s(X), A(t, {
      id: s(n).descriptionId
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Dp = /* @__PURE__ */ b({
  __name: "AlertDialogRoot",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = de(e, t);
    return N(), (o, a) => (h(), x(s(Er), A(s(n), { modal: !0 }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ap = /* @__PURE__ */ b({
  __name: "AlertDialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    return N(), (n, o) => (h(), x(s(Pr), Q(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Tp = /* @__PURE__ */ b({
  __name: "AlertDialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Ln), Q(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Ip, Mp] = ye("AlertDialogContent"), Fp = /* @__PURE__ */ b({
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
    const n = e, o = Xt(t);
    N();
    const a = E();
    return Mp({
      onCancelElementChange: (r) => {
        a.value = r;
      }
    }), (r, l) => (h(), x(s(sa), A({ ...n, ...s(o) }, {
      role: "alertdialog",
      onPointerDownOutside: l[0] || (l[0] = Ae(() => {
      }, ["prevent"])),
      onInteractOutside: l[1] || (l[1] = Ae(() => {
      }, ["prevent"])),
      onOpenAutoFocus: l[2] || (l[2] = () => {
        re(() => {
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
}), Rp = /* @__PURE__ */ b({
  __name: "AlertDialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return N(), (n, o) => (h(), x(s(la), Q(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Lp = /* @__PURE__ */ b({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Ip(), { forwardRef: o, currentElement: a } = N();
    return ie(() => {
      n.onCancelElementChange(a.value);
    }), (r, l) => (h(), x(s(sn), A(t, { ref: s(o) }), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Vp = /* @__PURE__ */ b({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e;
    return N(), (n, o) => (h(), x(s(Mr), Q(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), zp = /* @__PURE__ */ b({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    return N(), (n, o) => (h(), x(s(Fr), Q(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), qp = /* @__PURE__ */ b({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    return N(), (n, o) => (h(), x(s(sn), Q(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [li, Np] = ye("AvatarRoot"), jp = /* @__PURE__ */ b({
  __name: "AvatarRoot",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return N(), Np({
      imageLoadingStatus: E("loading")
    }), (t, n) => (h(), x(s(X), {
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
function Kp(e, t) {
  const n = E("idle"), o = E(!1), a = (r) => () => {
    o.value && (n.value = r);
  };
  return ie(() => {
    o.value = !0, te([() => e.value, () => t == null ? void 0 : t.value], ([r, l]) => {
      if (!r)
        n.value = "error";
      else {
        const i = new window.Image();
        n.value = "loading", i.onload = a("loaded"), i.onerror = a("error"), i.src = r, l && (i.referrerPolicy = l);
      }
    }, { immediate: !0 });
  }), Ne(() => {
    o.value = !1;
  }), n;
}
const Hp = /* @__PURE__ */ b({
  __name: "AvatarImage",
  props: {
    src: {},
    referrerPolicy: {},
    asChild: { type: Boolean },
    as: { default: "img" }
  },
  emits: ["loadingStatusChange"],
  setup(e, { emit: t }) {
    const n = e, o = t, { src: a, referrerPolicy: r } = we(n);
    N();
    const l = li(), i = Kp(a, r);
    return te(
      i,
      (u) => {
        o("loadingStatusChange", u), u !== "idle" && (l.imageLoadingStatus.value = u);
      },
      { immediate: !0 }
    ), (u, d) => An((h(), x(s(X), {
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
      [ir, s(i) === "loaded"]
    ]);
  }
}), Wp = /* @__PURE__ */ b({
  __name: "AvatarFallback",
  props: {
    delayMs: { default: 0 },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = li();
    N();
    const o = E(!1);
    let a;
    return te(n.imageLoadingStatus, (r) => {
      r === "loading" && (o.value = !1, t.delayMs ? a = setTimeout(() => {
        o.value = !0, clearTimeout(a);
      }, t.delayMs) : o.value = !0);
    }, { immediate: !0 }), (r, l) => o.value && s(n).imageLoadingStatus.value !== "loaded" ? (h(), x(s(X), {
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
}), [ii, Up] = ye("PopperRoot"), zn = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = E();
    return Up({
      anchor: t,
      onAnchorChange: (n) => t.value = n
    }), (n, o) => _(n.$slots, "default");
  }
}), vo = /* @__PURE__ */ b({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: o } = N(), a = ii();
    return xe(() => {
      a.onAnchorChange(t.element ?? o.value);
    }), (r, l) => (h(), x(s(X), {
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
function Gp(e) {
  return e !== null;
}
function Yp(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var n, o, a;
      const { placement: r, rects: l, middlewareData: i } = t, u = ((n = i.arrow) == null ? void 0 : n.centerOffset) !== 0, d = u ? 0 : e.arrowWidth, c = u ? 0 : e.arrowHeight, [p, v] = Ya(r), m = { start: "0%", center: "50%", end: "100%" }[v], f = (((o = i.arrow) == null ? void 0 : o.x) ?? 0) + d / 2, g = (((a = i.arrow) == null ? void 0 : a.y) ?? 0) + c / 2;
      let w = "", C = "";
      return p === "bottom" ? (w = u ? m : `${f}px`, C = `${-c}px`) : p === "top" ? (w = u ? m : `${f}px`, C = `${l.floating.height + c}px`) : p === "right" ? (w = `${-c}px`, C = u ? m : `${g}px`) : p === "left" && (w = `${l.floating.width + c}px`, C = u ? m : `${g}px`), { data: { x: w, y: C } };
    }
  };
}
function Ya(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
const ui = {
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
}, [g_, Xp] = ye("PopperContent"), Pn = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ dr({
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
    ...ui
  }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = ii(), { forwardRef: r, currentElement: l } = N(), i = E(), u = E(), { width: d, height: c } = ei(u), p = S(
      () => n.side + (n.align !== "center" ? `-${n.align}` : "")
    ), v = S(() => typeof n.collisionPadding == "number" ? n.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...n.collisionPadding }), m = S(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), f = S(() => ({
      padding: v.value,
      boundary: m.value.filter(Gp),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: m.value.length > 0
    })), g = sc(() => [
      Ll({
        mainAxis: n.sideOffset + c.value,
        alignmentAxis: n.alignOffset
      }),
      n.prioritizePosition && n.avoidCollisions && No({
        ...f.value
      }),
      n.avoidCollisions && Vl({
        mainAxis: !0,
        crossAxis: !!n.prioritizePosition,
        limiter: n.sticky === "partial" ? Nl() : void 0,
        ...f.value
      }),
      !n.prioritizePosition && n.avoidCollisions && No({
        ...f.value
      }),
      zl({
        ...f.value,
        apply: ({ elements: T, rects: V, availableWidth: M, availableHeight: G }) => {
          const { width: L, height: W } = V.reference, j = T.floating.style;
          j.setProperty(
            "--radix-popper-available-width",
            `${M}px`
          ), j.setProperty(
            "--radix-popper-available-height",
            `${G}px`
          ), j.setProperty(
            "--radix-popper-anchor-width",
            `${L}px`
          ), j.setProperty(
            "--radix-popper-anchor-height",
            `${W}px`
          );
        }
      }),
      u.value && jl({ element: u.value, padding: n.arrowPadding }),
      Yp({
        arrowWidth: d.value,
        arrowHeight: c.value
      }),
      n.hideWhenDetached && ql({ strategy: "referenceHidden", ...f.value })
    ]), { floatingStyles: w, placement: C, isPositioned: $, middlewareData: B } = Hl(
      a.anchor,
      i,
      {
        strategy: "fixed",
        placement: p,
        whileElementsMounted: (...T) => Rl(...T, {
          animationFrame: n.updatePositionStrategy === "always"
        }),
        middleware: g
      }
    ), D = S(
      () => Ya(C.value)[0]
    ), O = S(
      () => Ya(C.value)[1]
    );
    cr(() => {
      $.value && o("placed");
    });
    const P = S(
      () => {
        var T;
        return ((T = B.value.arrow) == null ? void 0 : T.centerOffset) !== 0;
      }
    ), k = E("");
    xe(() => {
      l.value && (k.value = window.getComputedStyle(l.value).zIndex);
    });
    const I = S(() => {
      var T;
      return ((T = B.value.arrow) == null ? void 0 : T.x) ?? 0;
    }), F = S(() => {
      var T;
      return ((T = B.value.arrow) == null ? void 0 : T.y) ?? 0;
    });
    return Xp({
      placedSide: D,
      onArrowChange: (T) => u.value = T,
      arrowX: I,
      arrowY: F,
      shouldHideArrow: P
    }), (T, V) => {
      var M, G, L;
      return h(), q("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-radix-popper-content-wrapper": "",
        style: lt({
          ...s(w),
          transform: s($) ? s(w).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: k.value,
          "--radix-popper-transform-origin": [
            (M = s(B).transformOrigin) == null ? void 0 : M.x,
            (G = s(B).transformOrigin) == null ? void 0 : G.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((L = s(B).hide) == null ? void 0 : L.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        R(s(X), A({ ref: s(r) }, T.$attrs, {
          "as-child": n.asChild,
          as: T.as,
          "data-side": D.value,
          "data-align": O.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: s($) ? void 0 : "none"
          }
        }), {
          default: y(() => [
            _(T.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
}), mo = /* @__PURE__ */ b({
  __name: "VisuallyHidden",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return N(), (t, n) => (h(), x(s(X), {
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
}), Zp = /* @__PURE__ */ b({
  __name: "VisuallyHiddenInput",
  props: {
    name: {},
    value: {},
    required: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, n = S(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" ? [{ name: t.name, value: t.value }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((o, a) => typeof o == "object" ? Object.entries(o).map(([r, l]) => ({ name: `[${a}][${t.name}][${r}]`, value: l })) : { name: `[${t.name}][${a}]`, value: o }) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([o, a]) => ({ name: `[${t.name}][${o}]`, value: a })) : []);
    return (o, a) => (h(!0), q(Be, null, rt(n.value, (r) => (h(), x(mo, {
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
}), Qp = "data-radix-vue-collection-item", [Rr, Jp] = ye("CollectionProvider");
function Lr(e = Qp) {
  const t = E(/* @__PURE__ */ new Map()), n = E(), o = Jp({
    collectionRef: n,
    itemMap: t,
    attrName: e
  }), { getItems: a } = zr(o), r = S(() => Array.from(o.itemMap.value.values())), l = S(() => o.itemMap.value.size);
  return { getItems: a, reactiveItems: r, itemMapSize: l };
}
const Vr = b({
  name: "CollectionSlot",
  setup(e, { slots: t }) {
    const n = Rr(), { primitiveElement: o, currentElement: a } = ti();
    return te(a, () => {
      n.collectionRef.value = a.value;
    }), () => Ge(kr, { ref: o }, t);
  }
}), ia = b({
  name: "CollectionItem",
  inheritAttrs: !1,
  props: {
    value: {
      // It accepts any value
      validator: () => !0
    }
  },
  setup(e, { slots: t, attrs: n }) {
    const o = Rr(), { primitiveElement: a, currentElement: r } = ti();
    return xe((l) => {
      if (r.value) {
        const i = ml(r.value);
        o.itemMap.value.set(i, { ref: r.value, value: e.value }), l(() => o.itemMap.value.delete(i));
      }
    }), () => Ge(kr, { ...n, [o.attrName]: "", ref: a }, t);
  }
});
function zr(e) {
  const t = e ?? Rr();
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
const [qn, ef] = ye("ComboboxRoot"), tf = /* @__PURE__ */ b({
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
    const n = e, o = t, { multiple: a, disabled: r, dir: l } = we(n), i = Yt(l), u = Pe(n, "searchTerm", o, {
      // @ts-expect-error ignore the type error here
      defaultValue: "",
      passive: n.searchTerm === void 0
    }), d = Pe(n, "modelValue", o, {
      // @ts-expect-error ignore the type error here
      defaultValue: n.defaultValue ?? a.value ? [] : void 0,
      passive: n.modelValue === void 0,
      deep: !0
    }), c = Pe(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), p = Pe(n, "selectedValue", o, {
      defaultValue: void 0,
      passive: n.selectedValue === void 0
    });
    async function v(H) {
      var ue, se;
      c.value = H, await re(), H ? (d.value && (Array.isArray(d.value) && a.value ? p.value = (ue = B().find((De) => {
        var Me, Ve;
        return ((Ve = (Me = De.ref) == null ? void 0 : Me.dataset) == null ? void 0 : Ve.state) === "checked";
      })) == null ? void 0 : ue.value : p.value = d.value), await re(), (se = g.value) == null || se.focus(), G()) : (f.value = !1, n.resetSearchTermOnBlur && I("blur"));
    }
    function m(H) {
      if (Array.isArray(d.value) && a.value) {
        const ue = d.value.findIndex((De) => tn(De, H)), se = [...d.value];
        ue === -1 ? se.push(H) : se.splice(ue, 1), d.value = se;
      } else
        d.value = H, v(!1);
    }
    const f = E(!1), g = E(), w = E(), { forwardRef: C, currentElement: $ } = N(), { getItems: B, reactiveItems: D, itemMapSize: O } = Lr("data-radix-vue-combobox-item"), P = E([]);
    te(() => O.value, () => {
      P.value = B().map((H) => H.value);
    }, {
      immediate: !0,
      flush: "post"
    });
    const k = S(() => {
      if (f.value) {
        if (n.filterFunction)
          return n.filterFunction(P.value, u.value);
        const H = P.value.filter((ue) => typeof ue == "string");
        if (H.length)
          return H.filter((ue) => {
            var se;
            return ue.toLowerCase().includes((se = u.value) == null ? void 0 : se.toLowerCase());
          });
      }
      return P.value;
    });
    function I(H) {
      const ue = H === "blur" || H === "select" && n.resetSearchTermOnSelect;
      !a.value && d.value && !Array.isArray(d.value) ? n.displayValue ? u.value = n.displayValue(d.value) : typeof d.value != "object" ? u.value = d.value.toString() : ue && (u.value = "") : ue && (u.value = "");
    }
    const F = S(() => k.value.findIndex((H) => tn(H, p.value))), T = S(() => {
      var H;
      return (H = D.value.find((ue) => tn(ue.value, p.value))) == null ? void 0 : H.ref;
    }), V = S(() => JSON.stringify(d.value));
    te(V, async () => {
      await re(), await re(), I("select");
    }, {
      // If searchTerm is provided with value during initialization, we don't reset it immediately
      immediate: !n.searchTerm
    }), te(() => [k.value.length, u.value.length], async ([H, ue], [se, De]) => {
      await re(), await re(), H && (De > ue || F.value === -1) && (p.value = k.value[0]);
    });
    const M = oa($);
    function G() {
      var H;
      T.value instanceof Element && ((H = T.value) == null || H.scrollIntoView({ block: "nearest" }));
    }
    function L() {
      T.value instanceof Element && T.value.focus && T.value.focus();
    }
    const W = E(!1);
    function j() {
      W.value = !0;
    }
    function Y() {
      requestAnimationFrame(() => {
        W.value = !1;
      });
    }
    async function K(H) {
      var ue;
      k.value.length && p.value && T.value instanceof Element && (H.preventDefault(), H.stopPropagation(), W.value || (ue = T.value) == null || ue.click());
    }
    return ef({
      searchTerm: u,
      modelValue: d,
      // @ts-expect-error ignoring
      onValueChange: m,
      isUserInputted: f,
      multiple: a,
      disabled: r,
      open: c,
      onOpenChange: v,
      filteredOptions: k,
      contentId: "",
      inputElement: g,
      selectedElement: T,
      onInputElementChange: (H) => g.value = H,
      onInputNavigation: async (H) => {
        const ue = F.value;
        ue === 0 && H === "up" || ue === k.value.length - 1 && H === "down" || (ue === -1 && k.value.length || H === "home" ? p.value = k.value[0] : H === "end" ? p.value = k.value[k.value.length - 1] : p.value = k.value[H === "up" ? ue - 1 : ue + 1], await re(), G(), L(), re(() => {
          var se;
          return (se = g.value) == null ? void 0 : se.focus({ preventScroll: !0 });
        }));
      },
      onInputEnter: K,
      onCompositionEnd: Y,
      onCompositionStart: j,
      selectedValue: p,
      onSelectedValueChange: (H) => p.value = H,
      parentElement: $,
      contentElement: w,
      onContentElementChange: (H) => w.value = H
    }), (H, ue) => (h(), x(s(zn), null, {
      default: y(() => [
        R(s(X), A({
          ref: s(C),
          style: {
            pointerEvents: s(c) ? "auto" : void 0
          },
          as: H.as,
          "as-child": H.asChild,
          dir: s(i)
        }, H.$attrs), {
          default: y(() => [
            _(H.$slots, "default", {
              open: s(c),
              modelValue: s(d)
            }),
            s(M) && n.name ? (h(), x(s(Zp), {
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
}), nf = /* @__PURE__ */ b({
  __name: "ComboboxInput",
  props: {
    type: { default: "text" },
    disabled: { type: Boolean },
    autoFocus: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(e) {
    const t = e, n = qn(), { forwardRef: o, currentElement: a } = N();
    ie(() => {
      const c = a.value.nodeName === "INPUT" ? a.value : a.value.querySelector("input");
      c && (n.onInputElementChange(c), setTimeout(() => {
        t.autoFocus && (c == null || c.focus());
      }, 1));
    });
    const r = S(() => t.disabled || n.disabled.value || !1), l = E();
    cl(() => {
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
    return (c, p) => (h(), x(s(X), {
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
        Qe(Ae(i, ["prevent"]), ["down", "up"]),
        Qe(s(n).onInputEnter, ["enter"]),
        Qe(Ae(u, ["prevent"]), ["home", "end"])
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
}), [di, of] = ye("ComboboxGroup"), af = /* @__PURE__ */ b({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { currentRef: n, currentElement: o } = N(), a = Le(void 0, "radix-vue-combobox-group"), r = qn(), l = E(!1);
    function i() {
      if (!o.value)
        return;
      const u = o.value.querySelectorAll("[data-radix-vue-combobox-item]:not([data-hidden])");
      l.value = !!u.length;
    }
    return bc(o, () => {
      re(() => {
        i();
      });
    }, { childList: !0 }), te(() => r.searchTerm.value, () => {
      re(() => {
        i();
      });
    }, { immediate: !0 }), of({
      id: a
    }), (u, d) => An((h(), x(s(X), A(t, {
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
      [ir, l.value]
    ]);
  }
}), rf = /* @__PURE__ */ b({
  __name: "ComboboxLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    N();
    const n = di({ id: "" });
    return (o, a) => (h(), x(s(X), A(t, {
      id: s(n).id
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), [h_, sf] = ye("ComboboxContent"), lf = /* @__PURE__ */ b({
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
    const n = e, o = t, { position: a } = we(n), r = qn();
    po(n.bodyLock);
    const { forwardRef: l, currentElement: i } = N();
    fo(r.parentElement);
    const u = S(() => n.position === "popper" ? n : {}), d = je(u.value);
    function c(v) {
      r.onSelectedValueChange("");
    }
    ie(() => {
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
    return sf({ position: a }), (v, m) => (h(), x(s(Vr), null, {
      default: y(() => [
        v.dismissable ? (h(), x(s(Vn), {
          key: 0,
          "as-child": "",
          "disable-outside-pointer-events": v.disableOutsidePointerEvents,
          onDismiss: m[0] || (m[0] = (f) => s(r).onOpenChange(!1)),
          onFocusOutside: m[1] || (m[1] = (f) => {
            var g;
            (g = s(r).parentElement.value) != null && g.contains(f.target) && f.preventDefault(), o("focusOutside", f);
          }),
          onInteractOutside: m[2] || (m[2] = (f) => o("interactOutside", f)),
          onEscapeKeyDown: m[3] || (m[3] = (f) => o("escapeKeyDown", f)),
          onPointerDownOutside: m[4] || (m[4] = (f) => {
            var g;
            (g = s(r).parentElement.value) != null && g.contains(f.target) && f.preventDefault(), o("pointerDownOutside", f);
          })
        }, {
          default: y(() => [
            (h(), x(tt(s(a) === "popper" ? s(Pn) : s(X)), A({ ...v.$attrs, ...s(d) }, {
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
                _(v.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "data-state", "style"]))
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])) : (h(), x(tt(s(a) === "popper" ? s(Pn) : s(X)), A({ key: 1 }, { ...v.$attrs, ...u.value }, {
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
            _(v.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "data-state", "style"]))
      ]),
      _: 3
    }));
  }
}), uf = /* @__PURE__ */ b({
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
    const n = de(e, t), { forwardRef: o } = N(), a = qn();
    return a.contentId || (a.contentId = Le(void 0, "radix-vue-combobox-content")), (r, l) => (h(), x(s(ut), {
      present: r.forceMount || s(a).open.value
    }, {
      default: y(() => [
        R(lf, A({ ...s(n), ...r.$attrs }, { ref: s(o) }), {
          default: y(() => [
            _(r.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), df = /* @__PURE__ */ b({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    N();
    const n = qn(), o = S(() => n.filteredOptions.value.length === 0);
    return (a, r) => o.value ? (h(), x(s(X), Q(A({ key: 0 }, t)), {
      default: y(() => [
        _(a.$slots, "default", {}, () => [
          _e("No options")
        ])
      ]),
      _: 3
    }, 16)) : ce("", !0);
  }
});
function cf(e) {
  const t = na({
    nonce: E()
  });
  return S(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.nonce) == null ? void 0 : n.value);
  });
}
const [y_, pf] = ye("ComboboxItem"), ff = "combobox.select", vf = /* @__PURE__ */ b({
  __name: "ComboboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = t, { disabled: a } = we(n), r = qn();
    di({ id: "", options: E([]) });
    const { forwardRef: l } = N(), i = S(
      () => {
        var g, w;
        return r.multiple.value && Array.isArray(r.modelValue.value) ? (g = r.modelValue.value) == null ? void 0 : g.some((C) => tn(C, n.value)) : tn((w = r.modelValue) == null ? void 0 : w.value, n.value);
      }
    ), u = S(() => tn(r.selectedValue.value, n.value)), d = Le(void 0, "radix-vue-combobox-item"), c = Le(void 0, "radix-vue-combobox-option"), p = S(() => r.isUserInputted.value ? r.searchTerm.value === "" || !!r.filteredOptions.value.find((g) => tn(g, n.value)) : !0);
    async function v(g) {
      o("select", g), !(g != null && g.defaultPrevented) && !a.value && g && r.onValueChange(n.value);
    }
    function m(g) {
      if (!g)
        return;
      const w = { originalEvent: g, value: n.value };
      _r(ff, v, w);
    }
    async function f(g) {
      await re(), !g.defaultPrevented && r.onSelectedValueChange(n.value);
    }
    if (n.value === "")
      throw new Error(
        "A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder."
      );
    return pf({
      isSelected: i
    }), (g, w) => (h(), x(s(ia), { value: g.value }, {
      default: y(() => [
        An(R(s(X), {
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
          onClick: m,
          onPointermove: f
        }, {
          default: y(() => [
            _(g.$slots, "default", {}, () => [
              _e(ke(g.value), 1)
            ])
          ]),
          _: 3
        }, 8, ["id", "aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "as", "as-child", "data-hidden"]), [
          [ir, p.value]
        ])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), mf = /* @__PURE__ */ b({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return N(), (n, o) => (h(), x(s(X), A(t, { "aria-hidden": "true" }), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ci = /* @__PURE__ */ b({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(vo), Q(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function gf() {
  const e = E(!1);
  return ie(() => {
    En("keydown", () => {
      e.value = !0;
    }, { capture: !0, passive: !0 }), En(["pointerdown", "pointermove"], () => {
      e.value = !1;
    }, { capture: !0, passive: !0 });
  }), e;
}
const hf = Wl(gf), [ln, pi] = ye(["MenuRoot", "MenuSub"], "MenuContext"), [go, yf] = ye("MenuRoot"), bf = /* @__PURE__ */ b({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = t, { modal: a, dir: r } = we(n), l = Yt(r), i = Pe(n, "open", o), u = E(), d = hf();
    return pi({
      open: i,
      onOpenChange: (c) => {
        i.value = c;
      },
      content: u,
      onContentChange: (c) => {
        u.value = c;
      }
    }), yf({
      onClose: () => {
        i.value = !1;
      },
      isUsingKeyboardRef: d,
      dir: l,
      modal: a
    }), (c, p) => (h(), x(s(zn), null, {
      default: y(() => [
        _(c.$slots, "default")
      ]),
      _: 3
    }));
  }
}), wf = "rovingFocusGroup.onEntryFocus", _f = { bubbles: !1, cancelable: !0 }, xf = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Cf(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Bf(e, t, n) {
  const o = Cf(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o)))
    return xf[o];
}
function fi(e, t = !1) {
  const n = qe();
  for (const o of e)
    if (o === n || (o.focus({ preventScroll: t }), qe() !== n))
      return;
}
function $f(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
const [Sf, kf] = ye("RovingFocusGroup"), vi = /* @__PURE__ */ b({
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
    const o = e, a = n, { loop: r, orientation: l, dir: i } = we(o), u = Yt(i), d = Pe(o, "currentTabStopId", a, {
      defaultValue: o.defaultCurrentTabStopId,
      passive: o.currentTabStopId === void 0
    }), c = E(!1), p = E(!1), v = E(0), { getItems: m } = Lr();
    function f(w) {
      const C = !p.value;
      if (w.currentTarget && w.target === w.currentTarget && C && !c.value) {
        const $ = new CustomEvent(wf, _f);
        if (w.currentTarget.dispatchEvent($), a("entryFocus", $), !$.defaultPrevented) {
          const B = m().map((k) => k.ref).filter((k) => k.dataset.disabled !== ""), D = B.find((k) => k.getAttribute("data-active") === "true"), O = B.find(
            (k) => k.id === d.value
          ), P = [D, O, ...B].filter(
            Boolean
          );
          fi(P, o.preventScrollOnEntryFocus);
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
      getItems: m
    }), kf({
      loop: r,
      dir: u,
      orientation: l,
      currentTabStopId: d,
      onItemFocus: (w) => {
        d.value = w;
      },
      onItemShiftTab: () => {
        c.value = !0;
      },
      onFocusableItemAdd: () => {
        v.value++;
      },
      onFocusableItemRemove: () => {
        v.value--;
      }
    }), (w, C) => (h(), x(s(Vr), null, {
      default: y(() => [
        R(s(X), {
          tabindex: c.value || v.value === 0 ? -1 : 0,
          "data-orientation": s(l),
          as: w.as,
          "as-child": w.asChild,
          dir: s(u),
          style: { outline: "none" },
          onMousedown: C[0] || (C[0] = ($) => p.value = !0),
          onMouseup: g,
          onFocus: f,
          onBlur: C[1] || (C[1] = ($) => c.value = !1)
        }, {
          default: y(() => [
            _(w.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), Of = /* @__PURE__ */ b({
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
    const t = e, n = Sf(), o = S(() => t.tabStopId || Le()), a = S(
      () => n.currentTabStopId.value === o.value
    ), { getItems: r } = zr();
    ie(() => {
      t.focusable && n.onFocusableItemAdd();
    }), Ne(() => {
      t.focusable && n.onFocusableItemRemove();
    });
    function l(i) {
      if (i.key === "Tab" && i.shiftKey) {
        n.onItemShiftTab();
        return;
      }
      if (i.target !== i.currentTarget)
        return;
      const u = Bf(
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
          d = n.loop.value ? $f(d, c + 1) : d.slice(c + 1);
        }
        re(() => fi(d));
      }
    }
    return (i, u) => (h(), x(s(ia), null, {
      default: y(() => [
        R(s(X), {
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
}), [qr, Ef] = ye("MenuContent"), Nr = /* @__PURE__ */ b({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ dr({
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
    ...ui
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = ln(), r = go(), { trapFocus: l, disableOutsidePointerEvents: i, loop: u } = we(n);
    $r(), po(i.value);
    const d = E(""), c = E(0), p = E(0), v = E(null), m = E("right"), f = E(0), g = E(null), { createCollection: w } = Rn(), { forwardRef: C, currentElement: $ } = N(), B = w($);
    te($, (T) => {
      a.onContentChange(T);
    });
    const { handleTypeaheadSearch: D } = Sr(B);
    Ne(() => {
      window.clearTimeout(c.value);
    });
    function O(T) {
      var V, M;
      return m.value === ((V = v.value) == null ? void 0 : V.side) && Bp(T, (M = v.value) == null ? void 0 : M.area);
    }
    async function P(T) {
      var V;
      o("openAutoFocus", T), !T.defaultPrevented && (T.preventDefault(), (V = $.value) == null || V.focus({
        preventScroll: !0
      }));
    }
    function k(T) {
      if (T.defaultPrevented)
        return;
      const V = T.target.closest("[data-radix-menu-content]") === T.currentTarget, M = T.ctrlKey || T.altKey || T.metaKey, G = T.key.length === 1, L = Xl(
        T,
        qe(),
        $.value,
        {
          loop: u.value,
          arrowKeyOptions: "vertical",
          dir: r == null ? void 0 : r.dir.value,
          focus: !0,
          attributeName: "[data-radix-vue-collection-item]:not([data-disabled])"
        }
      );
      if (L)
        return L == null ? void 0 : L.focus();
      if (T.code === "Space" || (V && (T.key === "Tab" && T.preventDefault(), !M && G && D(T.key)), T.target !== $.value) || !wp.includes(T.key))
        return;
      T.preventDefault();
      const W = B.value;
      ri.includes(T.key) && W.reverse(), Ga(W);
    }
    function I(T) {
      var V, M;
      (M = (V = T == null ? void 0 : T.currentTarget) == null ? void 0 : V.contains) != null && M.call(V, T.target) || (window.clearTimeout(c.value), d.value = "");
    }
    function F(T) {
      var V;
      if (!oo(T))
        return;
      const M = T.target, G = f.value !== T.clientX;
      if ((V = T == null ? void 0 : T.currentTarget) != null && V.contains(M) && G) {
        const L = T.clientX > f.value ? "right" : "left";
        m.value = L, f.value = T.clientX;
      }
    }
    return Ef({
      onItemEnter: (T) => !!O(T),
      onItemLeave: (T) => {
        var V;
        O(T) || ((V = $.value) == null || V.focus(), g.value = null);
      },
      onTriggerLeave: (T) => !!O(T),
      searchRef: d,
      pointerGraceTimerRef: p,
      onPointerGraceIntentChange: (T) => {
        v.value = T;
      }
    }), (T, V) => (h(), x(s(ra), {
      "as-child": "",
      trapped: s(l),
      onMountAutoFocus: P,
      onUnmountAutoFocus: V[7] || (V[7] = (M) => o("closeAutoFocus", M))
    }, {
      default: y(() => [
        R(s(Vn), {
          "as-child": "",
          "disable-outside-pointer-events": s(i),
          onEscapeKeyDown: V[2] || (V[2] = (M) => o("escapeKeyDown", M)),
          onPointerDownOutside: V[3] || (V[3] = (M) => o("pointerDownOutside", M)),
          onFocusOutside: V[4] || (V[4] = (M) => o("focusOutside", M)),
          onInteractOutside: V[5] || (V[5] = (M) => o("interactOutside", M)),
          onDismiss: V[6] || (V[6] = (M) => o("dismiss"))
        }, {
          default: y(() => [
            R(s(vi), {
              "current-tab-stop-id": g.value,
              "onUpdate:currentTabStopId": V[0] || (V[0] = (M) => g.value = M),
              "as-child": "",
              orientation: "vertical",
              dir: s(r).dir.value,
              loop: s(u),
              onEntryFocus: V[1] || (V[1] = (M) => {
                o("entryFocus", M), s(r).isUsingKeyboardRef.value || M.preventDefault();
              })
            }, {
              default: y(() => [
                R(s(Pn), {
                  ref: s(C),
                  role: "menu",
                  as: T.as,
                  "as-child": T.asChild,
                  "aria-orientation": "vertical",
                  "data-radix-menu-content": "",
                  "data-state": s(Tr)(s(a).open.value),
                  dir: s(r).dir.value,
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
                  onKeydown: k,
                  onBlur: I,
                  onPointermove: F
                }, {
                  default: y(() => [
                    _(T.$slots, "default")
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
}), mi = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = qr(), { forwardRef: o } = N(), a = E(!1);
    async function r(i) {
      if (!i.defaultPrevented && oo(i)) {
        if (t.disabled)
          n.onItemLeave(i);
        else if (!n.onItemEnter(i)) {
          const u = i.currentTarget;
          u == null || u.focus({ preventScroll: !0 });
        }
      }
    }
    async function l(i) {
      await re(), !i.defaultPrevented && oo(i) && n.onItemLeave(i);
    }
    return (i, u) => (h(), x(s(ia), {
      value: { textValue: i.textValue }
    }, {
      default: y(() => [
        R(s(X), A({
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
            await re(), !(d.defaultPrevented || i.disabled) && (a.value = !0);
          }),
          onBlur: u[1] || (u[1] = async (d) => {
            await re(), !d.defaultPrevented && (a.value = !1);
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
}), jr = /* @__PURE__ */ b({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = t, { forwardRef: a, currentElement: r } = N(), l = go(), i = qr(), u = E(!1);
    async function d() {
      const c = r.value;
      if (!n.disabled && c) {
        const p = new CustomEvent(yp, {
          bubbles: !0,
          cancelable: !0
        });
        o("select", p), await re(), p.defaultPrevented ? u.value = !1 : l.onClose();
      }
    }
    return (c, p) => (h(), x(mi, A(n, {
      ref: s(a),
      onClick: d,
      onPointerdown: p[0] || (p[0] = () => {
        u.value = !0;
      }),
      onPointerup: p[1] || (p[1] = async (v) => {
        var m;
        await re(), !v.defaultPrevented && (u.value || (m = v.currentTarget) == null || m.click());
      }),
      onKeydown: p[2] || (p[2] = async (v) => {
        const m = s(i).searchRef.value !== "";
        c.disabled || m && v.key === " " || s(Ua).includes(v.key) && (v.currentTarget.click(), v.preventDefault());
      })
    }), {
      default: y(() => [
        _(c.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Pf, gi] = ye(
  ["MenuCheckboxItem", "MenuRadioItem"],
  "MenuItemIndicatorContext"
), Df = /* @__PURE__ */ b({
  __name: "MenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = Pf({
      checked: E(!1)
    });
    return (n, o) => (h(), x(s(ut), {
      present: n.forceMount || s(Ko)(s(t).checked.value) || s(t).checked.value === !0
    }, {
      default: y(() => [
        R(s(X), {
          as: n.as,
          "as-child": n.asChild,
          "data-state": s(Ir)(s(t).checked.value)
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
}), Af = /* @__PURE__ */ b({
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
    const n = e, o = t, a = Pe(n, "checked", o);
    return gi({ checked: a }), (r, l) => (h(), x(jr, A({ role: "menuitemcheckbox" }, n, {
      "aria-checked": s(Ko)(s(a)) ? "mixed" : s(a),
      "data-state": s(Ir)(s(a)),
      onSelect: l[0] || (l[0] = async (i) => {
        o("select", i), s(Ko)(s(a)) ? a.value = !0 : a.value = !s(a);
      })
    }), {
      default: y(() => [
        _(r.$slots, "default", { checked: s(a) })
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), Tf = /* @__PURE__ */ b({
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
    const n = e, o = t, a = de(n, o), r = ln(), { forwardRef: l, currentElement: i } = N();
    return fo(i), (u, d) => (h(), x(Nr, A(s(a), {
      ref: s(l),
      "trap-focus": s(r).open.value,
      "disable-outside-pointer-events": s(r).open.value,
      "disable-outside-scroll": !0,
      onDismiss: d[0] || (d[0] = (c) => s(r).onOpenChange(!1)),
      onFocusOutside: d[1] || (d[1] = Ae((c) => o("focusOutside", c), ["prevent"]))
    }), {
      default: y(() => [
        _(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), If = /* @__PURE__ */ b({
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
    const n = de(e, t), o = ln();
    return (a, r) => (h(), x(Nr, A(s(n), {
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
}), Mf = /* @__PURE__ */ b({
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
    const n = de(e, t), o = ln(), a = go();
    return (r, l) => (h(), x(s(ut), {
      present: r.forceMount || s(o).open.value
    }, {
      default: y(() => [
        s(a).modal.value ? (h(), x(Tf, Q(A({ key: 0 }, { ...r.$attrs, ...s(n) })), {
          default: y(() => [
            _(r.$slots, "default")
          ]),
          _: 3
        }, 16)) : (h(), x(If, Q(A({ key: 1 }, { ...r.$attrs, ...s(n) })), {
          default: y(() => [
            _(r.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), hi = /* @__PURE__ */ b({
  __name: "MenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(X), A({ role: "group" }, t), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ff = /* @__PURE__ */ b({
  __name: "MenuLabel",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(X), Q(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Rf = /* @__PURE__ */ b({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Ln), Q(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Lf, Vf] = ye("MenuRadioGroup"), zf = /* @__PURE__ */ b({
  __name: "MenuRadioGroup",
  props: {
    modelValue: { default: "" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = Pe(n, "modelValue", t);
    return Vf({
      modelValue: o,
      onValueChange: (a) => {
        o.value = a;
      }
    }), (a, r) => (h(), x(hi, Q(ee(n)), {
      default: y(() => [
        _(a.$slots, "default", { modelValue: s(o) })
      ]),
      _: 3
    }, 16));
  }
}), qf = /* @__PURE__ */ b({
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
    const n = e, o = t, { value: a } = we(n), r = Lf(), l = S(
      () => r.modelValue.value === (a == null ? void 0 : a.value)
    );
    return gi({ checked: l }), (i, u) => (h(), x(jr, A({ role: "menuitemradio" }, n, {
      "aria-checked": l.value,
      "data-state": s(Ir)(l.value),
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
}), Nf = /* @__PURE__ */ b({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(X), A(t, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [yi, jf] = ye("MenuSub"), Kf = /* @__PURE__ */ b({
  __name: "MenuSub",
  props: {
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = Pe(n, "open", t, {
      defaultValue: !1,
      passive: n.open === void 0
    }), a = ln(), r = E(), l = E();
    return xe((i) => {
      (a == null ? void 0 : a.open.value) === !1 && (o.value = !1), i(() => o.value = !1);
    }), pi({
      open: o,
      onOpenChange: (i) => {
        o.value = i;
      },
      content: l,
      onContentChange: (i) => {
        l.value = i;
      }
    }), jf({
      triggerId: "",
      contentId: "",
      trigger: r,
      onTriggerChange: (i) => {
        r.value = i;
      }
    }), (i, u) => (h(), x(s(zn), null, {
      default: y(() => [
        _(i.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Hf = /* @__PURE__ */ b({
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
    const n = de(e, t), o = ln(), a = go(), r = yi(), { forwardRef: l, currentElement: i } = N();
    return r.contentId || (r.contentId = Le(void 0, "radix-vue-menu-sub-content")), (u, d) => (h(), x(s(ut), {
      present: u.forceMount || s(o).open.value
    }, {
      default: y(() => [
        R(Nr, A(s(n), {
          id: s(r).contentId,
          ref: s(l),
          "aria-labelledby": s(r).triggerId,
          align: "start",
          side: s(a).dir.value === "rtl" ? "left" : "right",
          "disable-outside-pointer-events": !1,
          "disable-outside-scroll": !1,
          "trap-focus": !1,
          onOpenAutoFocus: d[0] || (d[0] = Ae((c) => {
            var p;
            s(a).isUsingKeyboardRef.value && ((p = s(i)) == null || p.focus());
          }, ["prevent"])),
          onCloseAutoFocus: d[1] || (d[1] = Ae(() => {
          }, ["prevent"])),
          onFocusOutside: d[2] || (d[2] = (c) => {
            c.defaultPrevented || c.target !== s(r).trigger.value && s(o).onOpenChange(!1);
          }),
          onEscapeKeyDown: d[3] || (d[3] = (c) => {
            s(a).onClose(), c.preventDefault();
          }),
          onKeydown: d[4] || (d[4] = (c) => {
            var p, v;
            const m = (p = c.currentTarget) == null ? void 0 : p.contains(c.target), f = s(xp)[s(a).dir.value].includes(c.key);
            m && f && (s(o).onOpenChange(!1), (v = s(r).trigger.value) == null || v.focus(), c.preventDefault());
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
}), Wf = /* @__PURE__ */ b({
  __name: "MenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = ln(), o = go(), a = yi(), r = qr(), l = E(null);
    a.triggerId || (a.triggerId = Le(void 0, "radix-vue-menu-sub-trigger"));
    function i() {
      l.value && window.clearTimeout(l.value), l.value = null;
    }
    Ne(() => {
      i();
    });
    function u(p) {
      !oo(p) || r.onItemEnter(p) || !t.disabled && !n.open.value && !l.value && (r.onPointerGraceIntentChange(null), l.value = window.setTimeout(() => {
        n.onOpenChange(!0), i();
      }, 100));
    }
    async function d(p) {
      var v, m;
      if (!oo(p))
        return;
      i();
      const f = (v = n.content.value) == null ? void 0 : v.getBoundingClientRect();
      if (f != null && f.width) {
        const g = (m = n.content.value) == null ? void 0 : m.dataset.side, w = g === "right", C = w ? -5 : 5, $ = f[w ? "left" : "right"], B = f[w ? "right" : "left"];
        r.onPointerGraceIntentChange({
          area: [
            // Apply a bleed on clientX to ensure that our exit point is
            // consistently within polygon bounds
            { x: p.clientX + C, y: p.clientY },
            { x: $, y: f.top },
            { x: B, y: f.top },
            { x: B, y: f.bottom },
            { x: $, y: f.bottom }
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
      var v;
      const m = r.searchRef.value !== "";
      t.disabled || m && p.key === " " || _p[o.dir.value].includes(p.key) && (n.onOpenChange(!0), await re(), (v = n.content.value) == null || v.focus(), p.preventDefault());
    }
    return (p, v) => (h(), x(ci, { "as-child": "" }, {
      default: y(() => [
        R(mi, A(t, {
          id: s(a).triggerId,
          ref: (m) => {
            var f;
            (f = s(a)) == null || f.onTriggerChange(m == null ? void 0 : m.$el);
          },
          "aria-haspopup": "menu",
          "aria-expanded": s(n).open.value,
          "aria-controls": s(a).contentId,
          "data-state": s(Tr)(s(n).open.value),
          onClick: v[0] || (v[0] = async (m) => {
            t.disabled || m.defaultPrevented || (m.currentTarget.focus(), s(n).open.value || s(n).onOpenChange(!0));
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
}), [bi, Uf] = ye("DropdownMenuRoot"), Gf = /* @__PURE__ */ b({
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
    const a = Pe(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), r = E(), { modal: l, dir: i } = we(n), u = Yt(i);
    return Uf({
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
    }), (d, c) => (h(), x(s(bf), {
      open: s(a),
      "onUpdate:open": c[0] || (c[0] = (p) => st(a) ? a.value = p : null),
      dir: s(u),
      modal: s(l)
    }, {
      default: y(() => [
        _(d.$slots, "default", { open: s(a) })
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
}), Yf = /* @__PURE__ */ b({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = bi(), { forwardRef: o, currentElement: a } = N();
    return ie(() => {
      n.triggerElement = a;
    }), n.triggerId || (n.triggerId = Le(void 0, "radix-vue-dropdown-menu-trigger")), (r, l) => (h(), x(s(ci), { "as-child": "" }, {
      default: y(() => [
        R(s(X), {
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
            !r.disabled && i.button === 0 && i.ctrlKey === !1 && ((u = s(n)) == null || u.onOpenToggle(), await re(), s(n).open.value && i.preventDefault());
          }),
          onKeydown: l[1] || (l[1] = Qe(
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
}), Xf = /* @__PURE__ */ b({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Rf), Q(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zf = /* @__PURE__ */ b({
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
    N();
    const o = bi(), a = E(!1);
    function r(l) {
      l.defaultPrevented || (a.value || setTimeout(() => {
        var i;
        (i = o.triggerElement.value) == null || i.focus();
      }, 0), a.value = !1, l.preventDefault());
    }
    return o.contentId || (o.contentId = Le(void 0, "radix-vue-dropdown-menu-content")), (l, i) => {
      var u;
      return h(), x(s(Mf), A(s(n), {
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
          const p = d.detail.originalEvent, v = p.button === 0 && p.ctrlKey === !0, m = p.button === 2 || v;
          (!s(o).modal.value || m) && (a.value = !0), (c = s(o).triggerElement.value) != null && c.contains(d.target) && d.preventDefault();
        })
      }), {
        default: y(() => [
          _(l.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby"]);
    };
  }
}), Qf = /* @__PURE__ */ b({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = Xt(t);
    return N(), (a, r) => (h(), x(s(jr), Q(ee({ ...n, ...s(o) })), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Jf = /* @__PURE__ */ b({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return N(), (n, o) => (h(), x(s(hi), Q(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ev = /* @__PURE__ */ b({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return N(), (n, o) => (h(), x(s(Nf), Q(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), tv = /* @__PURE__ */ b({
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
    const n = e, o = Xt(t);
    return N(), (a, r) => (h(), x(s(Af), Q(ee({ ...n, ...s(o) })), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wi = /* @__PURE__ */ b({
  __name: "DropdownMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return N(), (n, o) => (h(), x(s(Df), Q(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), nv = /* @__PURE__ */ b({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return N(), (n, o) => (h(), x(s(Ff), Q(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ov = /* @__PURE__ */ b({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = Xt(t);
    return N(), (a, r) => (h(), x(s(zf), Q(ee({ ...n, ...s(o) })), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), av = /* @__PURE__ */ b({
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
    return N(), (o, a) => (h(), x(s(qf), Q(ee(s(n))), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), rv = /* @__PURE__ */ b({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = Pe(n, "open", t, {
      passive: n.open === void 0,
      defaultValue: n.defaultOpen ?? !1
    });
    return N(), (a, r) => (h(), x(s(Kf), {
      open: s(o),
      "onUpdate:open": r[0] || (r[0] = (l) => st(o) ? o.value = l : null)
    }, {
      default: y(() => [
        _(a.$slots, "default", { open: s(o) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), sv = /* @__PURE__ */ b({
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
    return N(), (o, a) => (h(), x(s(Hf), A(s(n), { style: {
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
}), lv = /* @__PURE__ */ b({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return N(), (n, o) => (h(), x(s(Wf), Q(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), iv = /* @__PURE__ */ b({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(e) {
    const t = e;
    return N(), (n, o) => (h(), x(s(X), A(t, {
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
}), [Nn, uv] = ye("PopoverRoot"), dv = /* @__PURE__ */ b({
  __name: "PopoverRoot",
  props: {
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: !1 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = t, { modal: a } = we(n), r = Pe(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), l = E(), i = E(!1);
    return uv({
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
    }), (u, d) => (h(), x(s(zn), null, {
      default: y(() => [
        _(u.$slots, "default", { open: s(r) })
      ]),
      _: 3
    }));
  }
}), cv = /* @__PURE__ */ b({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Nn(), { forwardRef: o, currentElement: a } = N();
    return ie(() => {
      n.triggerElement.value = a.value;
    }), (r, l) => (h(), x(tt(s(n).hasCustomAnchor.value ? s(X) : s(vo)), { "as-child": "" }, {
      default: y(() => [
        R(s(X), {
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
}), pv = /* @__PURE__ */ b({
  __name: "PopoverPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Ln), Q(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), _i = /* @__PURE__ */ b({
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
    const n = e, o = t, a = je(n), { forwardRef: r } = N(), l = Nn();
    return $r(), (i, u) => (h(), x(s(ra), {
      "as-child": "",
      loop: "",
      trapped: i.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => o("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => o("closeAutoFocus", d))
    }, {
      default: y(() => [
        R(s(Vn), {
          "as-child": "",
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          onPointerDownOutside: u[0] || (u[0] = (d) => o("pointerDownOutside", d)),
          onInteractOutside: u[1] || (u[1] = (d) => o("interactOutside", d)),
          onEscapeKeyDown: u[2] || (u[2] = (d) => o("escapeKeyDown", d)),
          onFocusOutside: u[3] || (u[3] = (d) => o("focusOutside", d)),
          onDismiss: u[4] || (u[4] = (d) => s(l).onOpenChange(!1))
        }, {
          default: y(() => [
            R(s(Pn), A(s(a), {
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
}), fv = /* @__PURE__ */ b({
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
    const n = e, o = t, a = Nn(), r = E(!1);
    po(!0);
    const l = de(n, o), { forwardRef: i, currentElement: u } = N();
    return fo(u), (d, c) => (h(), x(_i, A(s(l), {
      ref: s(i),
      "trap-focus": s(a).open.value,
      "disable-outside-pointer-events": "",
      onCloseAutoFocus: c[0] || (c[0] = Ae(
        (p) => {
          var v;
          o("closeAutoFocus", p), r.value || (v = s(a).triggerElement.value) == null || v.focus();
        },
        ["prevent"]
      )),
      onPointerDownOutside: c[1] || (c[1] = (p) => {
        o("pointerDownOutside", p);
        const v = p.detail.originalEvent, m = v.button === 0 && v.ctrlKey === !0, f = v.button === 2 || m;
        r.value = f;
      }),
      onFocusOutside: c[2] || (c[2] = Ae(() => {
      }, ["prevent"]))
    }), {
      default: y(() => [
        _(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), vv = /* @__PURE__ */ b({
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
    const n = e, o = t, a = Nn(), r = E(!1), l = E(!1), i = de(n, o);
    return (u, d) => (h(), x(_i, A(s(i), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: d[0] || (d[0] = (c) => {
        var p;
        o("closeAutoFocus", c), c.defaultPrevented || (r.value || (p = s(a).triggerElement.value) == null || p.focus(), c.preventDefault()), r.value = !1, l.value = !1;
      }),
      onInteractOutside: d[1] || (d[1] = async (c) => {
        var p;
        o("interactOutside", c), c.defaultPrevented || (r.value = !0, c.detail.originalEvent.type === "pointerdown" && (l.value = !0));
        const v = c.target;
        (p = s(a).triggerElement.value) != null && p.contains(v) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && l.value && c.preventDefault();
      })
    }), {
      default: y(() => [
        _(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), mv = /* @__PURE__ */ b({
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
    const n = e, o = t, a = Nn(), r = de(n, o), { forwardRef: l } = N();
    return a.contentId || (a.contentId = Le(void 0, "radix-vue-popover-content")), (i, u) => (h(), x(s(ut), {
      present: i.forceMount || s(a).open.value
    }, {
      default: y(() => [
        s(a).modal.value ? (h(), x(fv, A({ key: 0 }, s(r), { ref: s(l) }), {
          default: y(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (h(), x(vv, A({ key: 1 }, s(r), { ref: s(l) }), {
          default: y(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), b_ = /* @__PURE__ */ b({
  __name: "PopoverAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    N();
    const n = Nn();
    return pl(() => {
      n.hasCustomAnchor.value = !0;
    }), Ne(() => {
      n.hasCustomAnchor.value = !1;
    }), (o, a) => (h(), x(s(vo), Q(ee(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ao = 100, [gv, hv] = ye("ProgressRoot"), Kr = (e) => typeof e == "number";
function yv(e, t) {
  return Bn(e) || Kr(e) && !Number.isNaN(e) && e <= t && e >= 0 ? e : (console.error(`Invalid prop \`value\` of value \`${e}\` supplied to \`ProgressRoot\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${ao} if no \`max\` prop is set)
  - \`null\`  or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`), null);
}
function bv(e) {
  return Kr(e) && !Number.isNaN(e) && e > 0 ? e : (console.error(
    `Invalid prop \`max\` of value \`${e}\` supplied to \`ProgressRoot\`. Only numbers greater than 0 are valid max values. Defaulting to \`${ao}\`.`
  ), ao);
}
const wv = /* @__PURE__ */ b({
  __name: "ProgressRoot",
  props: {
    modelValue: {},
    max: { default: ao },
    getValueLabel: { type: Function, default: (e, t) => `${Math.round(e / t * ao)}%` },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "update:max"],
  setup(e, { emit: t }) {
    const n = e, o = t;
    N();
    const a = Pe(n, "modelValue", o, {
      passive: n.modelValue === void 0
    }), r = Pe(n, "max", o, {
      passive: n.max === void 0
    });
    te(
      () => a.value,
      async (i) => {
        const u = yv(i, n.max);
        u !== i && (await re(), a.value = u);
      },
      { immediate: !0 }
    ), te(
      () => n.max,
      (i) => {
        const u = bv(n.max);
        u !== i && (r.value = u);
      },
      { immediate: !0 }
    );
    const l = S(() => Bn(a.value) ? "indeterminate" : a.value === r.value ? "complete" : "loading");
    return hv({
      modelValue: a,
      max: r,
      progressState: l
    }), (i, u) => (h(), x(s(X), {
      "as-child": i.asChild,
      as: i.as,
      "aria-valuemax": s(r),
      "aria-valuemin": 0,
      "aria-valuenow": Kr(s(a)) ? s(a) : void 0,
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
}), _v = /* @__PURE__ */ b({
  __name: "ProgressIndicator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = gv();
    return N(), (o, a) => {
      var r;
      return h(), x(s(X), A(t, {
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
}), xv = ["default-value"], Cv = /* @__PURE__ */ b({
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
    const t = e, { value: n } = we(t), o = E();
    return (a, r) => (h(), x(s(mo), { "as-child": "" }, {
      default: y(() => [
        An(oe("select", A({
          ref_key: "selectElement",
          ref: o
        }, t, {
          "onUpdate:modelValue": r[0] || (r[0] = (l) => st(n) ? n.value = l : null),
          "default-value": s(n)
        }), [
          _(a.$slots, "default")
        ], 16, xv), [
          [zu, s(n)]
        ])
      ]),
      _: 3
    }));
  }
}), Bv = {
  key: 0,
  value: ""
}, [un, xi] = ye("SelectRoot"), [$v, Sv] = ye("SelectRoot"), kv = /* @__PURE__ */ b({
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
    const n = e, o = t, a = Pe(n, "modelValue", o, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), r = Pe(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), l = E(), i = E(), u = E({
      x: 0,
      y: 0
    }), d = E(!1), { required: c, disabled: p, dir: v } = we(n), m = Yt(v);
    xi({
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
      modelValue: a,
      onValueChange: (C) => {
        a.value = C;
      },
      open: r,
      required: c,
      onOpenChange: (C) => {
        r.value = C;
      },
      dir: m,
      triggerPointerDownPosRef: u,
      disabled: p
    });
    const f = oa(l), g = E(/* @__PURE__ */ new Set()), w = S(() => Array.from(g.value).map((C) => {
      var $;
      return ($ = C.props) == null ? void 0 : $.value;
    }).join(";"));
    return Sv({
      onNativeOptionAdd: (C) => {
        g.value.add(C);
      },
      onNativeOptionRemove: (C) => {
        g.value.delete(C);
      }
    }), (C, $) => (h(), x(s(zn), null, {
      default: y(() => [
        _(C.$slots, "default", {
          modelValue: s(a),
          open: s(r)
        }),
        s(f) ? (h(), x(Cv, A({ key: w.value }, C.$attrs, {
          "aria-hidden": "true",
          tabindex: "-1",
          required: s(c),
          name: C.name,
          autocomplete: C.autocomplete,
          disabled: s(p),
          value: s(a),
          onChange: $[0] || ($[0] = (B) => a.value = B.target.value)
        }), {
          default: y(() => [
            s(a) === void 0 ? (h(), q("option", Bv)) : ce("", !0),
            (h(!0), q(Be, null, rt(Array.from(g.value), (B) => (h(), x(tt(B), A({ ref_for: !0 }, B.props, {
              key: B.key ?? ""
            }), null, 16))), 128))
          ]),
          _: 1
        }, 16, ["required", "name", "autocomplete", "disabled", "value"])) : ce("", !0)
      ]),
      _: 3
    }));
  }
}), Ov = [" ", "Enter", "ArrowUp", "ArrowDown"], Ev = [" ", "Enter"], vt = 10;
function Ci(e) {
  return e === "" || Bn(e);
}
const Pv = /* @__PURE__ */ b({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = un(), o = S(() => {
      var m;
      return ((m = n.disabled) == null ? void 0 : m.value) || t.disabled;
    }), { forwardRef: a, currentElement: r } = N();
    n.contentId || (n.contentId = Le(void 0, "radix-vue-select-content")), ie(() => {
      n.triggerElement = r;
    });
    const { injectCollection: l } = Rn(), i = l(), { search: u, handleTypeaheadSearch: d, resetTypeahead: c } = Sr(i);
    function p() {
      o.value || (n.onOpenChange(!0), c());
    }
    function v(m) {
      p(), n.triggerPointerDownPosRef.value = {
        x: Math.round(m.pageX),
        y: Math.round(m.pageY)
      };
    }
    return (m, f) => (h(), x(s(vo), { "as-child": "" }, {
      default: y(() => {
        var g, w, C, $;
        return [
          R(s(X), {
            ref: s(a),
            role: "combobox",
            type: m.as === "button" ? "button" : void 0,
            "aria-controls": s(n).contentId,
            "aria-expanded": s(n).open.value || !1,
            "aria-required": (g = s(n).required) == null ? void 0 : g.value,
            "aria-autocomplete": "none",
            disabled: o.value,
            dir: (w = s(n)) == null ? void 0 : w.dir.value,
            "data-state": (C = s(n)) != null && C.open.value ? "open" : "closed",
            "data-disabled": o.value ? "" : void 0,
            "data-placeholder": s(Ci)(($ = s(n).modelValue) == null ? void 0 : $.value) ? "" : void 0,
            "as-child": m.asChild,
            as: m.as,
            onClick: f[0] || (f[0] = (B) => {
              var D;
              (D = B == null ? void 0 : B.currentTarget) == null || D.focus();
            }),
            onPointerdown: f[1] || (f[1] = (B) => {
              if (B.pointerType === "touch")
                return B.preventDefault();
              const D = B.target;
              D.hasPointerCapture(B.pointerId) && D.releasePointerCapture(B.pointerId), B.button === 0 && B.ctrlKey === !1 && (v(B), B.preventDefault());
            }),
            onPointerup: f[2] || (f[2] = Ae(
              (B) => {
                B.pointerType === "touch" && v(B);
              },
              ["prevent"]
            )),
            onKeydown: f[3] || (f[3] = (B) => {
              const D = s(u) !== "";
              !(B.ctrlKey || B.altKey || B.metaKey) && B.key.length === 1 && D && B.key === " " || (s(d)(B.key), s(Ov).includes(B.key) && (p(), B.preventDefault()));
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
}), Dv = /* @__PURE__ */ b({
  __name: "SelectPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Ln), Q(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Hr, Av] = ye("SelectItemAlignedPosition"), Tv = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, o = t, { injectCollection: a } = Rn(), r = un(), l = dn(), i = a(), u = E(!1), d = E(!0), c = E(), { forwardRef: p, currentElement: v } = N(), { viewport: m, selectedItem: f, selectedItemText: g, focusSelectedItem: w } = l;
    function C() {
      if (r.triggerElement.value && r.valueElement.value && c.value && v.value && m != null && m.value && f != null && f.value && g != null && g.value) {
        const D = r.triggerElement.value.getBoundingClientRect(), O = v.value.getBoundingClientRect(), P = r.valueElement.value.getBoundingClientRect(), k = g.value.getBoundingClientRect();
        if (r.dir.value !== "rtl") {
          const U = k.left - O.left, Z = P.left - U, ae = D.left - Z, pe = D.width + ae, me = Math.max(pe, O.width), J = window.innerWidth - vt, he = jo(Z, vt, Math.max(vt, J - me));
          c.value.style.minWidth = `${pe}px`, c.value.style.left = `${he}px`;
        } else {
          const U = O.right - k.right, Z = window.innerWidth - P.right - U, ae = window.innerWidth - D.right - Z, pe = D.width + ae, me = Math.max(pe, O.width), J = window.innerWidth - vt, he = jo(
            Z,
            vt,
            Math.max(vt, J - me)
          );
          c.value.style.minWidth = `${pe}px`, c.value.style.right = `${he}px`;
        }
        const I = i.value, F = window.innerHeight - vt * 2, T = m.value.scrollHeight, V = window.getComputedStyle(v.value), M = Number.parseInt(
          V.borderTopWidth,
          10
        ), G = Number.parseInt(V.paddingTop, 10), L = Number.parseInt(
          V.borderBottomWidth,
          10
        ), W = Number.parseInt(
          V.paddingBottom,
          10
        ), j = M + G + T + W + L, Y = Math.min(
          f.value.offsetHeight * 5,
          j
        ), K = window.getComputedStyle(m.value), H = Number.parseInt(K.paddingTop, 10), ue = Number.parseInt(
          K.paddingBottom,
          10
        ), se = D.top + D.height / 2 - vt, De = F - se, Me = f.value.offsetHeight / 2, Ve = f.value.offsetTop + Me, Xe = M + G + Ve, ot = j - Xe;
        if (Xe <= se) {
          const U = f.value === I[I.length - 1];
          c.value.style.bottom = "0px";
          const Z = v.value.clientHeight - m.value.offsetTop - m.value.offsetHeight, ae = Math.max(
            De,
            Me + (U ? ue : 0) + Z + L
          ), pe = Xe + ae;
          c.value.style.height = `${pe}px`;
        } else {
          const U = f.value === I[0];
          c.value.style.top = "0px";
          const Z = Math.max(
            se,
            M + m.value.offsetTop + (U ? H : 0) + Me
          ) + ot;
          c.value.style.height = `${Z}px`, m.value.scrollTop = Xe - se + m.value.offsetTop;
        }
        c.value.style.margin = `${vt}px 0`, c.value.style.minHeight = `${Y}px`, c.value.style.maxHeight = `${F}px`, o("placed"), requestAnimationFrame(() => u.value = !0);
      }
    }
    const $ = E("");
    ie(async () => {
      await re(), C(), v.value && ($.value = window.getComputedStyle(v.value).zIndex);
    });
    function B(D) {
      D && d.value === !0 && (C(), w == null || w(), d.value = !1);
    }
    return Av({
      contentWrapper: c,
      shouldExpandOnScrollRef: u,
      onScrollButtonChange: B
    }), (D, O) => (h(), q("div", {
      ref_key: "contentWrapperElement",
      ref: c,
      style: lt({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: $.value
      })
    }, [
      R(s(X), A({
        ref: s(p),
        style: {
          // When we get the height of the content, it includes borders. If we were to set
          // the height without having `boxSizing: 'border-box'` it would be too big.
          boxSizing: "border-box",
          // We need to ensure the content doesn't get taller than the wrapper
          maxHeight: "100%"
        }
      }, { ...D.$attrs, ...n }), {
        default: y(() => [
          _(D.$slots, "default")
        ]),
        _: 3
      }, 16)
    ], 4));
  }
}), Iv = /* @__PURE__ */ b({
  __name: "SelectPopperPosition",
  props: {
    side: {},
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: { default: vt },
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = je(e);
    return (n, o) => (h(), x(s(Pn), A(s(t), { style: {
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
}), jn = {
  onViewportChange: () => {
  },
  itemTextRefCallback: () => {
  },
  itemRefCallback: () => {
  }
}, [dn, Mv] = ye("SelectContent"), Fv = /* @__PURE__ */ b({
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
    const n = e, o = t, a = un();
    $r(), po(n.bodyLock);
    const { createCollection: r } = Rn(), l = E();
    fo(l);
    const i = r(l), { search: u, handleTypeaheadSearch: d } = Sr(i), c = E(), p = E(), v = E(), m = E(!1), f = E(!1);
    function g() {
      p.value && l.value && Ga([p.value, l.value]);
    }
    te(m, () => {
      g();
    });
    const { onOpenChange: w, triggerPointerDownPosRef: C } = a;
    xe((O) => {
      if (!l.value)
        return;
      let P = { x: 0, y: 0 };
      const k = (F) => {
        var T, V;
        P = {
          x: Math.abs(
            Math.round(F.pageX) - (((T = C.value) == null ? void 0 : T.x) ?? 0)
          ),
          y: Math.abs(
            Math.round(F.pageY) - (((V = C.value) == null ? void 0 : V.y) ?? 0)
          )
        };
      }, I = (F) => {
        var T;
        F.pointerType !== "touch" && (P.x <= 10 && P.y <= 10 ? F.preventDefault() : (T = l.value) != null && T.contains(F.target) || w(!1), document.removeEventListener("pointermove", k), C.value = null);
      };
      C.value !== null && (document.addEventListener("pointermove", k), document.addEventListener("pointerup", I, {
        capture: !0,
        once: !0
      })), O(() => {
        document.removeEventListener("pointermove", k), document.removeEventListener("pointerup", I, {
          capture: !0
        });
      });
    });
    function $(O) {
      const P = O.ctrlKey || O.altKey || O.metaKey;
      if (O.key === "Tab" && O.preventDefault(), !P && O.key.length === 1 && d(O.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(O.key)) {
        let k = i.value;
        if (["ArrowUp", "End"].includes(O.key) && (k = k.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(O.key)) {
          const I = O.target, F = k.indexOf(I);
          k = k.slice(F + 1);
        }
        setTimeout(() => Ga(k)), O.preventDefault();
      }
    }
    const B = S(() => n.position === "popper" ? n : {}), D = je(B.value);
    return Mv({
      content: l,
      viewport: c,
      onViewportChange: (O) => {
        c.value = O;
      },
      itemRefCallback: (O, P, k) => {
        var I, F;
        const T = !f.value && !k;
        (((I = a.modelValue) == null ? void 0 : I.value) !== void 0 && ((F = a.modelValue) == null ? void 0 : F.value) === P || T) && (p.value = O, T && (f.value = !0));
      },
      selectedItem: p,
      selectedItemText: v,
      onItemLeave: () => {
        var O;
        (O = l.value) == null || O.focus();
      },
      itemTextRefCallback: (O, P, k) => {
        var I, F;
        const T = !f.value && !k;
        (((I = a.modelValue) == null ? void 0 : I.value) !== void 0 && ((F = a.modelValue) == null ? void 0 : F.value) === P || T) && (v.value = O);
      },
      focusSelectedItem: g,
      position: n.position,
      isPositioned: m,
      searchRef: u
    }), (O, P) => (h(), x(s(ra), {
      "as-child": "",
      onMountAutoFocus: P[6] || (P[6] = Ae(() => {
      }, ["prevent"])),
      onUnmountAutoFocus: P[7] || (P[7] = (k) => {
        var I;
        o("closeAutoFocus", k), !k.defaultPrevented && ((I = s(a).triggerElement.value) == null || I.focus({ preventScroll: !0 }), k.preventDefault());
      })
    }, {
      default: y(() => [
        R(s(Vn), {
          "as-child": "",
          "disable-outside-pointer-events": "",
          onFocusOutside: P[2] || (P[2] = Ae(() => {
          }, ["prevent"])),
          onDismiss: P[3] || (P[3] = (k) => s(a).onOpenChange(!1)),
          onEscapeKeyDown: P[4] || (P[4] = (k) => o("escapeKeyDown", k)),
          onPointerDownOutside: P[5] || (P[5] = (k) => o("pointerDownOutside", k))
        }, {
          default: y(() => [
            (h(), x(tt(
              O.position === "popper" ? Iv : Tv
            ), A({ ...O.$attrs, ...s(D) }, {
              id: s(a).contentId,
              ref: (k) => {
                l.value = s(it)(k);
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
              onContextmenu: P[0] || (P[0] = Ae(() => {
              }, ["prevent"])),
              onPlaced: P[1] || (P[1] = (k) => m.value = !0),
              onKeydown: $
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
}), Rv = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "SelectProvider",
  props: {
    context: {}
  },
  setup(e) {
    return xi(e.context), (t, n) => _(t.$slots, "default");
  }
}), Lv = { key: 1 }, Vv = /* @__PURE__ */ b({
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
    const n = e, o = de(n, t), a = un(), r = E();
    ie(() => {
      r.value = new DocumentFragment();
    });
    const l = E(), i = S(() => n.forceMount || a.open.value);
    return (u, d) => {
      var c;
      return i.value ? (h(), x(s(ut), {
        key: 0,
        ref_key: "presenceRef",
        ref: l,
        present: !0
      }, {
        default: y(() => [
          R(Fv, Q(ee({ ...s(o), ...u.$attrs })), {
            default: y(() => [
              _(u.$slots, "default")
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 512)) : !((c = l.value) != null && c.present) && r.value ? (h(), q("div", Lv, [
        (h(), x(io, { to: r.value }, [
          R(Rv, { context: s(a) }, {
            default: y(() => [
              _(u.$slots, "default")
            ]),
            _: 3
          }, 8, ["context"])
        ], 8, ["to"]))
      ])) : ce("", !0);
    };
  }
}), zv = /* @__PURE__ */ b({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(X), A({ "aria-hidden": "true" }, t), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Bi, qv] = ye("SelectItem"), Nv = /* @__PURE__ */ b({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { disabled: n } = we(t), o = un(), a = dn(jn), { forwardRef: r, currentElement: l } = N(), i = S(() => {
      var g;
      return ((g = o.modelValue) == null ? void 0 : g.value) === t.value;
    }), u = E(!1), d = E(t.textValue ?? ""), c = Le(void 0, "radix-vue-select-item-text");
    async function p(g) {
      await re(), !(g != null && g.defaultPrevented) && (n.value || (o.onValueChange(t.value), o.onOpenChange(!1)));
    }
    async function v(g) {
      var w;
      await re(), !g.defaultPrevented && (n.value ? (w = a.onItemLeave) == null || w.call(a) : g.currentTarget.focus({ preventScroll: !0 }));
    }
    async function m(g) {
      var w;
      await re(), !g.defaultPrevented && g.currentTarget === qe() && ((w = a.onItemLeave) == null || w.call(a));
    }
    async function f(g) {
      var w;
      await re(), !(g.defaultPrevented || ((w = a.searchRef) == null ? void 0 : w.value) !== "" && g.key === " ") && (Ev.includes(g.key) && p(), g.key === " " && g.preventDefault());
    }
    if (t.value === "")
      throw new Error(
        "A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return ie(() => {
      l.value && a.itemRefCallback(
        l.value,
        t.value,
        t.disabled
      );
    }), qv({
      value: t.value,
      disabled: n,
      textId: c,
      isSelected: i,
      onItemTextChange: (g) => {
        d.value = ((d.value || (g == null ? void 0 : g.textContent)) ?? "").trim();
      }
    }), (g, w) => (h(), x(s(X), {
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
      onFocus: w[0] || (w[0] = (C) => u.value = !0),
      onBlur: w[1] || (w[1] = (C) => u.value = !1),
      onPointerup: p,
      onPointerdown: w[2] || (w[2] = (C) => {
        C.currentTarget.focus({ preventScroll: !0 });
      }),
      onTouchend: w[3] || (w[3] = Ae(() => {
      }, ["prevent", "stop"])),
      onPointermove: v,
      onPointerleave: m,
      onKeydown: f
    }, {
      default: y(() => [
        _(g.$slots, "default")
      ]),
      _: 3
    }, 8, ["aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "tabindex", "as", "as-child"]));
  }
}), jv = /* @__PURE__ */ b({
  __name: "SelectItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = Bi();
    return (o, a) => s(n).isSelected.value ? (h(), x(s(X), A({
      key: 0,
      "aria-hidden": "true"
    }, t), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16)) : ce("", !0);
  }
}), [Kv, Hv] = ye("SelectGroup"), Wv = /* @__PURE__ */ b({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Le(void 0, "radix-vue-select-group");
    return Hv({ id: n }), (o, a) => (h(), x(s(X), A({ role: "group" }, t, { "aria-labelledby": s(n) }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), Uv = /* @__PURE__ */ b({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, n = Kv({ id: "" });
    return (o, a) => (h(), x(s(X), A(t, {
      id: s(n).id
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), $i = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = un(), o = dn(jn), a = $v(), r = Bi(), { forwardRef: l, currentElement: i } = N(), u = S(() => {
      var d;
      return Ge("option", {
        key: r.value,
        value: r.value,
        disabled: r.disabled.value,
        textContent: (d = i.value) == null ? void 0 : d.textContent
      });
    });
    return ie(() => {
      i.value && (r.onItemTextChange(i.value), o.itemTextRefCallback(
        i.value,
        r.value,
        r.disabled.value
      ), a.onNativeOptionAdd(u.value));
    }), Tn(() => {
      a.onNativeOptionRemove(u.value);
    }), (d, c) => (h(), q(Be, null, [
      R(s(X), A({
        id: s(r).textId,
        ref: s(l)
      }, { ...t, ...d.$attrs }, { "data-item-text": "" }), {
        default: y(() => [
          _(d.$slots, "default")
        ]),
        _: 3
      }, 16, ["id"]),
      s(r).isSelected.value && s(n).valueElement.value && !s(n).valueElementHasChildren.value ? (h(), x(io, {
        key: 0,
        to: s(n).valueElement.value
      }, [
        _(d.$slots, "default")
      ], 8, ["to"])) : ce("", !0)
    ], 64));
  }
}), Gv = /* @__PURE__ */ b({
  __name: "SelectViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { nonce: n } = we(t), o = cf(n), a = dn(jn), r = a.position === "item-aligned" ? Hr() : void 0, { forwardRef: l, currentElement: i } = N();
    ie(() => {
      a == null || a.onViewportChange(i.value);
    });
    const u = E(0);
    function d(c) {
      const p = c.currentTarget, { shouldExpandOnScrollRef: v, contentWrapper: m } = r ?? {};
      if (v != null && v.value && m != null && m.value) {
        const f = Math.abs(u.value - p.scrollTop);
        if (f > 0) {
          const g = window.innerHeight - vt * 2, w = Number.parseFloat(
            m.value.style.minHeight
          ), C = Number.parseFloat(m.value.style.height), $ = Math.max(w, C);
          if ($ < g) {
            const B = $ + f, D = Math.min(g, B), O = B - D;
            m.value.style.height = `${D}px`, m.value.style.bottom === "0px" && (p.scrollTop = O > 0 ? O : 0, m.value.style.justifyContent = "flex-end");
          }
        }
      }
      u.value = p.scrollTop;
    }
    return (c, p) => (h(), q(Be, null, [
      R(s(X), A({
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
      R(s(X), {
        as: "style",
        nonce: s(o)
      }, {
        default: y(() => [
          _e(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-radix-select-viewport]::-webkit-scrollbar { display: none; } ")
        ]),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
}), Si = /* @__PURE__ */ b({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(e, { emit: t }) {
    const n = t, { injectCollection: o } = Rn(), a = o(), r = dn(jn), l = E(null);
    function i() {
      l.value !== null && (window.clearInterval(l.value), l.value = null);
    }
    xe(() => {
      const c = a.value.find(
        (p) => p === qe()
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
    return Tn(() => i()), (c, p) => {
      var v;
      return h(), x(s(X), A({
        "aria-hidden": "true",
        style: {
          flexShrink: 0
        }
      }, (v = c.$parent) == null ? void 0 : v.$props, {
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
}), Yv = /* @__PURE__ */ b({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = dn(jn), n = t.position === "item-aligned" ? Hr() : void 0, { forwardRef: o, currentElement: a } = N(), r = E(!1);
    return xe((l) => {
      var i, u;
      if ((i = t.viewport) != null && i.value && (u = t.isPositioned) != null && u.value) {
        let d = function() {
          r.value = c.scrollTop > 0;
        };
        const c = t.viewport.value;
        d(), c.addEventListener("scroll", d), l(() => c.removeEventListener("scroll", d));
      }
    }), te(a, () => {
      a.value && (n == null || n.onScrollButtonChange(a.value));
    }), (l, i) => r.value ? (h(), x(Si, {
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
}), Xv = /* @__PURE__ */ b({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = dn(jn), n = t.position === "item-aligned" ? Hr() : void 0, { forwardRef: o, currentElement: a } = N(), r = E(!1);
    return xe((l) => {
      var i, u;
      if ((i = t.viewport) != null && i.value && (u = t.isPositioned) != null && u.value) {
        let d = function() {
          const p = c.scrollHeight - c.clientHeight;
          r.value = Math.ceil(c.scrollTop) < p;
        };
        const c = t.viewport.value;
        d(), c.addEventListener("scroll", d), l(() => c.removeEventListener("scroll", d));
      }
    }), te(a, () => {
      a.value && (n == null || n.onScrollButtonChange(a.value));
    }), (l, i) => r.value ? (h(), x(Si, {
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
}), Zv = /* @__PURE__ */ b({
  __name: "SelectValue",
  props: {
    placeholder: { default: "" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const { forwardRef: t, currentElement: n } = N(), o = un(), a = Go();
    return pl(() => {
      var r;
      const l = !!ta((r = a == null ? void 0 : a.default) == null ? void 0 : r.call(a)).length;
      o.onValueElementHasChildrenChange(l);
    }), ie(() => {
      o.valueElement = n;
    }), (r, l) => (h(), x(s(X), {
      ref: s(t),
      as: r.as,
      "as-child": r.asChild,
      style: { pointerEvents: "none" }
    }, {
      default: y(() => {
        var i;
        return [
          s(Ci)((i = s(o).modelValue) == null ? void 0 : i.value) ? (h(), q(Be, { key: 0 }, [
            _e(ke(r.placeholder), 1)
          ], 64)) : _(r.$slots, "default", { key: 1 })
        ];
      }),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Qv = /* @__PURE__ */ b({
  __name: "SelectIcon",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return (t, n) => (h(), x(s(X), {
      "aria-hidden": "true",
      as: t.as,
      "as-child": t.asChild
    }, {
      default: y(() => [
        _(t.$slots, "default", {}, () => [
          _e("▼")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function Jv(e = [], t, n) {
  const o = [...e];
  return o[n] = t, o.sort((a, r) => a - r);
}
function ki(e, t, n) {
  const o = 100 / (n - t) * (e - t);
  return jo(o, 0, 100);
}
function em(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
function tm(e, t) {
  if (e.length === 1)
    return 0;
  const n = e.map((a) => Math.abs(a - t)), o = Math.min(...n);
  return n.indexOf(o);
}
function nm(e, t, n) {
  const o = e / 2, a = Wr([0, 50], [0, o]);
  return (o - a(t) * n) * n;
}
function om(e) {
  return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
function am(e, t) {
  if (t > 0) {
    const n = om(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function Wr(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const o = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + o * (n - e[0]);
  };
}
function rm(e) {
  return (String(e).split(".")[1] || "").length;
}
function sm(e, t) {
  const n = 10 ** t;
  return Math.round(e * n) / n;
}
const Oi = ["PageUp", "PageDown"], Ei = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Pi = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, [Di, Ai] = ye(["SliderVertical", "SliderHorizontal"]), Ti = /* @__PURE__ */ b({
  __name: "SliderImpl",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  emits: ["slideStart", "slideMove", "slideEnd", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = ua();
    return (r, l) => (h(), x(s(X), A({ "data-slider-impl": "" }, n, {
      onKeydown: l[0] || (l[0] = (i) => {
        i.key === "Home" ? (o("homeKeyDown", i), i.preventDefault()) : i.key === "End" ? (o("endKeyDown", i), i.preventDefault()) : s(Oi).concat(s(Ei)).includes(i.key) && (o("stepKeyDown", i), i.preventDefault());
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
}), lm = /* @__PURE__ */ b({
  __name: "SliderHorizontal",
  props: {
    dir: {},
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const n = e, o = t, { max: a, min: r, dir: l, inverted: i } = we(n), { forwardRef: u, currentElement: d } = N(), c = E(), p = S(() => (l == null ? void 0 : l.value) === "ltr" && !i.value || (l == null ? void 0 : l.value) !== "ltr" && i.value);
    function v(m) {
      const f = c.value || d.value.getBoundingClientRect(), g = [0, f.width], w = p.value ? [r.value, a.value] : [a.value, r.value], C = Wr(g, w);
      return c.value = f, C(m - f.left);
    }
    return Ai({
      startEdge: p.value ? "left" : "right",
      endEdge: p.value ? "right" : "left",
      direction: p.value ? 1 : -1,
      size: "width"
    }), (m, f) => (h(), x(Ti, {
      ref: s(u),
      dir: s(l),
      "data-orientation": "horizontal",
      style: {
        "--radix-slider-thumb-transform": "translateX(-50%)"
      },
      onSlideStart: f[0] || (f[0] = (g) => {
        const w = v(g.clientX);
        o("slideStart", w);
      }),
      onSlideMove: f[1] || (f[1] = (g) => {
        const w = v(g.clientX);
        o("slideMove", w);
      }),
      onSlideEnd: f[2] || (f[2] = () => {
        c.value = void 0, o("slideEnd");
      }),
      onStepKeyDown: f[3] || (f[3] = (g) => {
        const w = p.value ? "from-left" : "from-right", C = s(Pi)[w].includes(g.key);
        o("stepKeyDown", g, C ? -1 : 1);
      }),
      onEndKeyDown: f[4] || (f[4] = (g) => o("endKeyDown", g)),
      onHomeKeyDown: f[5] || (f[5] = (g) => o("homeKeyDown", g))
    }, {
      default: y(() => [
        _(m.$slots, "default")
      ]),
      _: 3
    }, 8, ["dir"]));
  }
}), im = /* @__PURE__ */ b({
  __name: "SliderVertical",
  props: {
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const n = e, o = t, { max: a, min: r, inverted: l } = we(n), { forwardRef: i, currentElement: u } = N(), d = E(), c = S(() => !l.value);
    function p(v) {
      const m = d.value || u.value.getBoundingClientRect(), f = [0, m.height], g = c.value ? [a.value, r.value] : [r.value, a.value], w = Wr(f, g);
      return d.value = m, w(v - m.top);
    }
    return Ai({
      startEdge: c.value ? "bottom" : "top",
      endEdge: c.value ? "top" : "bottom",
      size: "height",
      direction: c.value ? 1 : -1
    }), (v, m) => (h(), x(Ti, {
      ref: s(i),
      "data-orientation": "vertical",
      style: {
        "--radix-slider-thumb-transform": "translateY(50%)"
      },
      onSlideStart: m[0] || (m[0] = (f) => {
        const g = p(f.clientY);
        o("slideStart", g);
      }),
      onSlideMove: m[1] || (m[1] = (f) => {
        const g = p(f.clientY);
        o("slideMove", g);
      }),
      onSlideEnd: m[2] || (m[2] = () => {
        d.value = void 0, o("slideEnd");
      }),
      onStepKeyDown: m[3] || (m[3] = (f) => {
        const g = c.value ? "from-bottom" : "from-top", w = s(Pi)[g].includes(f.key);
        o("stepKeyDown", f, w ? -1 : 1);
      }),
      onEndKeyDown: m[4] || (m[4] = (f) => o("endKeyDown", f)),
      onHomeKeyDown: m[5] || (m[5] = (f) => o("homeKeyDown", f))
    }, {
      default: y(() => [
        _(v.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
}), um = ["value", "name", "disabled", "step"], [ua, dm] = ye("SliderRoot"), cm = /* @__PURE__ */ b({
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
    const n = e, o = t, { min: a, max: r, step: l, minStepsBetweenThumbs: i, orientation: u, disabled: d, dir: c } = we(n), p = Yt(c), { forwardRef: v, currentElement: m } = N(), f = oa(m);
    Lr();
    const g = Pe(n, "modelValue", o, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), w = E(0), C = E(g.value);
    function $(k) {
      const I = tm(g.value, k);
      O(k, I);
    }
    function B(k) {
      O(k, w.value);
    }
    function D() {
      const k = C.value[w.value];
      g.value[w.value] !== k && o("valueCommit", qu(g.value));
    }
    function O(k, I, { commit: F } = { commit: !1 }) {
      var T;
      const V = rm(l.value), M = sm(Math.round((k - a.value) / l.value) * l.value + a.value, V), G = jo(M, a.value, r.value), L = Jv(g.value, G, I);
      if (am(L, i.value * l.value)) {
        w.value = L.indexOf(G);
        const W = String(L) !== String(g.value);
        W && F && o("valueCommit", L), W && ((T = P.value[w.value]) == null || T.focus(), g.value = L);
      }
    }
    const P = E([]);
    return dm({
      modelValue: g,
      valueIndexToChangeRef: w,
      thumbElements: P,
      orientation: u,
      min: a,
      max: r,
      disabled: d
    }), (k, I) => (h(), q(Be, null, [
      R(s(Vr), null, {
        default: y(() => [
          (h(), x(tt(s(u) === "horizontal" ? lm : im), A(k.$attrs, {
            ref: s(v),
            "as-child": k.asChild,
            as: k.as,
            min: s(a),
            max: s(r),
            dir: s(p),
            inverted: k.inverted,
            "aria-disabled": s(d),
            "data-disabled": s(d) ? "" : void 0,
            onPointerdown: I[0] || (I[0] = () => {
              s(d) || (C.value = s(g));
            }),
            onSlideStart: I[1] || (I[1] = (F) => !s(d) && $(F)),
            onSlideMove: I[2] || (I[2] = (F) => !s(d) && B(F)),
            onSlideEnd: I[3] || (I[3] = (F) => !s(d) && D()),
            onHomeKeyDown: I[4] || (I[4] = (F) => !s(d) && O(s(a), 0, { commit: !0 })),
            onEndKeyDown: I[5] || (I[5] = (F) => !s(d) && O(s(r), s(g).length - 1, { commit: !0 })),
            onStepKeyDown: I[6] || (I[6] = (F, T) => {
              if (!s(d)) {
                const V = s(Oi).includes(F.key) || F.shiftKey && s(Ei).includes(F.key) ? 10 : 1, M = w.value, G = s(g)[M], L = s(l) * V * T;
                O(G + L, M, { commit: !0 });
              }
            })
          }), {
            default: y(() => [
              _(k.$slots, "default", { modelValue: s(g) })
            ]),
            _: 3
          }, 16, ["as-child", "as", "min", "max", "dir", "inverted", "aria-disabled", "data-disabled"]))
        ]),
        _: 3
      }),
      s(f) ? (h(!0), q(Be, { key: 0 }, rt(s(g), (F, T) => (h(), q("input", {
        key: T,
        value: F,
        type: "number",
        style: { display: "none" },
        name: k.name ? k.name + (s(g).length > 1 ? "[]" : "") : void 0,
        disabled: s(d),
        step: s(l)
      }, null, 8, um))), 128)) : ce("", !0)
    ], 64));
  }
}), pm = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "SliderThumbImpl",
  props: {
    index: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = ua(), o = Di(), { forwardRef: a, currentElement: r } = N(), l = S(() => {
      var m, f;
      return (f = (m = n.modelValue) == null ? void 0 : m.value) == null ? void 0 : f[t.index];
    }), i = S(() => l.value === void 0 ? 0 : ki(l.value, n.min.value ?? 0, n.max.value ?? 100)), u = S(() => {
      var m, f;
      return em(t.index, ((f = (m = n.modelValue) == null ? void 0 : m.value) == null ? void 0 : f.length) ?? 0);
    }), d = ei(r), c = S(() => d[o.size].value), p = S(() => c.value ? nm(c.value, i.value, o.direction) : 0), v = Br();
    return ie(() => {
      n.thumbElements.value.push(r.value);
    }), Ne(() => {
      const m = n.thumbElements.value.findIndex((f) => f === r.value) ?? -1;
      n.thumbElements.value.splice(m, 1);
    }), (m, f) => (h(), x(s(ia), null, {
      default: y(() => [
        R(s(X), A(m.$attrs, {
          ref: s(a),
          role: "slider",
          "data-radix-vue-collection-item": "",
          tabindex: s(n).disabled.value ? void 0 : 0,
          "aria-label": m.$attrs["aria-label"] || u.value,
          "data-disabled": s(n).disabled.value ? "" : void 0,
          "data-orientation": s(n).orientation.value,
          "aria-valuenow": l.value,
          "aria-valuemin": s(n).min.value,
          "aria-valuemax": s(n).max.value,
          "aria-orientation": s(n).orientation.value,
          "as-child": m.asChild,
          as: m.as,
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
            display: !s(v) && l.value === void 0 ? "none" : void 0
          },
          onFocus: f[0] || (f[0] = () => {
            s(n).valueIndexToChangeRef.value = m.index;
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
}), fm = /* @__PURE__ */ b({
  __name: "SliderThumb",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { getItems: n } = zr(), { forwardRef: o, currentElement: a } = N(), r = S(() => a.value ? n().findIndex((l) => l.ref === a.value) : -1);
    return (l, i) => (h(), x(pm, A({ ref: s(o) }, t, { index: r.value }), {
      default: y(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["index"]));
  }
}), vm = /* @__PURE__ */ b({
  __name: "SliderTrack",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = ua();
    return N(), (n, o) => (h(), x(s(X), {
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
}), mm = /* @__PURE__ */ b({
  __name: "SliderRange",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = ua(), n = Di();
    N();
    const o = S(() => {
      var l, i;
      return (i = (l = t.modelValue) == null ? void 0 : l.value) == null ? void 0 : i.map(
        (u) => ki(u, t.min.value, t.max.value)
      );
    }), a = S(() => t.modelValue.value.length > 1 ? Math.min(...o.value) : 0), r = S(() => 100 - Math.max(...o.value));
    return (l, i) => (h(), x(s(X), {
      "data-disabled": s(t).disabled.value ? "" : void 0,
      "data-orientation": s(t).orientation.value,
      "as-child": l.asChild,
      as: l.as,
      style: lt({
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
function gm() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
gm();
const hm = ["name", "disabled", "required", "value", "checked", "data-state", "data-disabled"], [ym, bm] = ye("SwitchRoot"), wm = /* @__PURE__ */ b({
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
    const n = e, o = t, { disabled: a } = we(n), r = Pe(n, "checked", o, {
      defaultValue: n.defaultChecked,
      passive: n.checked === void 0
    });
    function l() {
      a.value || (r.value = !r.value);
    }
    const { forwardRef: i, currentElement: u } = N(), d = oa(u), c = S(() => {
      var p;
      return n.id && u.value ? (p = document.querySelector(`[for="${n.id}"]`)) == null ? void 0 : p.innerText : void 0;
    });
    return bm({
      checked: r,
      toggleCheck: l,
      disabled: a
    }), (p, v) => (h(), q(Be, null, [
      R(s(X), A(p.$attrs, {
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
        onKeydown: Qe(Ae(l, ["prevent"]), ["enter"])
      }), {
        default: y(() => [
          _(p.$slots, "default", { checked: s(r) })
        ]),
        _: 3
      }, 16, ["id", "type", "value", "aria-label", "aria-checked", "aria-required", "data-state", "data-disabled", "as-child", "as", "disabled", "onKeydown"]),
      s(d) ? (h(), q("input", {
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
      }, null, 8, hm)) : ce("", !0)
    ], 64));
  }
}), _m = /* @__PURE__ */ b({
  __name: "SwitchThumb",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = ym();
    return N(), (n, o) => {
      var a;
      return h(), x(s(X), {
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
}), [Ur, xm] = ye("TabsRoot"), Cm = /* @__PURE__ */ b({
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
    const n = e, o = t, { orientation: a, dir: r } = we(n), l = Yt(r);
    N();
    const i = Pe(n, "modelValue", o, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), u = E();
    return xm({
      modelValue: i,
      changeModelValue: (d) => {
        i.value = d;
      },
      orientation: a,
      dir: l,
      activationMode: n.activationMode,
      baseId: Le(void 0, "radix-vue-tabs"),
      tabsList: u
    }), (d, c) => (h(), x(s(X), {
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
}), Bm = /* @__PURE__ */ b({
  __name: "TabsList",
  props: {
    loop: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { loop: n } = we(t), { forwardRef: o, currentElement: a } = N(), r = Ur();
    return r.tabsList = a, (l, i) => (h(), x(s(vi), {
      "as-child": "",
      orientation: s(r).orientation.value,
      dir: s(r).dir.value,
      loop: s(n)
    }, {
      default: y(() => [
        R(s(X), {
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
function Ii(e, t) {
  return `${e}-trigger-${t}`;
}
function Mi(e, t) {
  return `${e}-content-${t}`;
}
const $m = /* @__PURE__ */ b({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n } = N(), o = Ur(), a = S(() => Ii(o.baseId, t.value)), r = S(() => Mi(o.baseId, t.value)), l = S(() => t.value === o.modelValue.value), i = E(l.value);
    return ie(() => {
      requestAnimationFrame(() => {
        i.value = !1;
      });
    }), (u, d) => (h(), x(s(ut), {
      present: l.value,
      "force-mount": ""
    }, {
      default: y(({ present: c }) => [
        R(s(X), {
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
          style: lt({
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
}), Sm = /* @__PURE__ */ b({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, { forwardRef: n } = N(), o = Ur(), a = S(() => Ii(o.baseId, t.value)), r = S(() => Mi(o.baseId, t.value)), l = S(() => t.value === o.modelValue.value);
    return (i, u) => (h(), x(s(Of), {
      "as-child": "",
      focusable: !i.disabled,
      active: l.value
    }, {
      default: y(() => [
        R(s(X), {
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
          onMousedown: u[0] || (u[0] = Ae((d) => {
            !i.disabled && d.ctrlKey === !1 ? s(o).changeModelValue(i.value) : d.preventDefault();
          }, ["left"])),
          onKeydown: u[1] || (u[1] = Qe((d) => s(o).changeModelValue(i.value), ["enter", "space"])),
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
}), [da, km] = ye("ToastProvider"), Om = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "ToastProvider",
  props: {
    label: { default: "Notification" },
    duration: { default: 5e3 },
    swipeDirection: { default: "right" },
    swipeThreshold: { default: 50 }
  },
  setup(e) {
    const t = e, { label: n, duration: o, swipeDirection: a, swipeThreshold: r } = we(t), l = E(), i = E(0), u = E(!1), d = E(!1);
    if (t.label && typeof t.label == "string" && !t.label.trim()) {
      const c = "Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`.";
      throw new Error(c);
    }
    return km({
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
}), Em = "toast.swipeStart", Pm = "toast.swipeMove", Dm = "toast.swipeCancel", Am = "toast.swipeEnd", Xa = "toast.viewportPause", Za = "toast.viewportResume";
function ko(e, t, n) {
  const o = n.originalEvent.currentTarget, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, { once: !0 }), o.dispatchEvent(a);
}
function Ts(e, t, n = 0) {
  const o = Math.abs(e.x), a = Math.abs(e.y), r = o > a;
  return t === "left" || t === "right" ? r && o > n : !r && a > n;
}
function Tm(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function Fi(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((n) => {
    if (n.nodeType === n.TEXT_NODE && n.textContent && t.push(n.textContent), Tm(n)) {
      const o = n.ariaHidden || n.hidden || n.style.display === "none", a = n.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (a) {
          const r = n.dataset.radixToastAnnounceAlt;
          r && t.push(r);
        } else
          t.push(...Fi(n));
    }
  }), t;
}
const Im = /* @__PURE__ */ b({
  __name: "ToastAnnounce",
  setup(e) {
    const t = da(), n = gc(1e3), o = E(!1);
    return Yl(() => {
      o.value = !0;
    }), (a, r) => s(n) || o.value ? (h(), x(s(mo), { key: 0 }, {
      default: y(() => [
        _e(ke(s(t).label.value) + " ", 1),
        _(a.$slots, "default")
      ]),
      _: 3
    })) : ce("", !0);
  }
}), [Mm, Fm] = ye("ToastRoot"), Rm = /* @__PURE__ */ b({
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
    const n = e, o = t, { forwardRef: a, currentElement: r } = N(), l = da(), i = E(null), u = E(null), d = S(
      () => typeof n.duration == "number" ? n.duration : l.duration.value
    ), c = E(0), p = E(d.value), v = E(0), m = E(d.value), f = Yl(() => {
      const $ = (/* @__PURE__ */ new Date()).getTime() - c.value;
      m.value = Math.max(p.value - $, 0);
    }, { fpsLimit: 60 });
    function g($) {
      $ <= 0 || $ === Number.POSITIVE_INFINITY || Bt && (window.clearTimeout(v.value), c.value = (/* @__PURE__ */ new Date()).getTime(), v.value = window.setTimeout(w, $));
    }
    function w() {
      var $, B;
      ($ = r.value) != null && $.contains(qe()) && ((B = l.viewport.value) == null || B.focus()), l.isClosePausedRef.value = !1, o("close");
    }
    const C = S(() => r.value ? Fi(r.value) : null);
    if (n.type && !["foreground", "background"].includes(n.type)) {
      const $ = "Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.";
      throw new Error($);
    }
    return xe(($) => {
      const B = l.viewport.value;
      if (B) {
        const D = () => {
          g(p.value), f.resume(), o("resume");
        }, O = () => {
          const P = (/* @__PURE__ */ new Date()).getTime() - c.value;
          p.value = p.value - P, window.clearTimeout(v.value), f.pause(), o("pause");
        };
        return B.addEventListener(Xa, O), B.addEventListener(Za, D), () => {
          B.removeEventListener(Xa, O), B.removeEventListener(Za, D);
        };
      }
    }), te(() => [n.open, d.value], () => {
      p.value = d.value, n.open && !l.isClosePausedRef.value && g(d.value);
    }, { immediate: !0 }), Cr("Escape", ($) => {
      o("escapeKeyDown", $), $.defaultPrevented || (l.isFocusedToastEscapeKeyDownRef.value = !0, w());
    }), ie(() => {
      l.onToastAdd();
    }), Ne(() => {
      l.onToastRemove();
    }), Fm({ onClose: w }), ($, B) => (h(), q(Be, null, [
      C.value ? (h(), x(Im, {
        key: 0,
        role: "alert",
        "aria-live": $.type === "foreground" ? "assertive" : "polite",
        "aria-atomic": "true"
      }, {
        default: y(() => [
          _e(ke(C.value), 1)
        ]),
        _: 1
      }, 8, ["aria-live"])) : ce("", !0),
      s(l).viewport.value ? (h(), x(io, {
        key: 1,
        to: s(l).viewport.value
      }, [
        R(s(X), A({
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
          onPointerdown: B[0] || (B[0] = Ae((D) => {
            i.value = { x: D.clientX, y: D.clientY };
          }, ["left"])),
          onPointermove: B[1] || (B[1] = (D) => {
            if (!i.value) return;
            const O = D.clientX - i.value.x, P = D.clientY - i.value.y, k = !!u.value, I = ["left", "right"].includes(s(l).swipeDirection.value), F = ["left", "up"].includes(s(l).swipeDirection.value) ? Math.min : Math.max, T = I ? F(0, O) : 0, V = I ? 0 : F(0, P), M = D.pointerType === "touch" ? 10 : 2, G = { x: T, y: V }, L = { originalEvent: D, delta: G };
            k ? (u.value = G, s(ko)(s(Pm), (W) => o("swipeMove", W), L)) : s(Ts)(G, s(l).swipeDirection.value, M) ? (u.value = G, s(ko)(s(Em), (W) => o("swipeStart", W), L), D.target.setPointerCapture(D.pointerId)) : (Math.abs(O) > M || Math.abs(P) > M) && (i.value = null);
          }),
          onPointerup: B[2] || (B[2] = (D) => {
            const O = u.value, P = D.target;
            if (P.hasPointerCapture(D.pointerId) && P.releasePointerCapture(D.pointerId), u.value = null, i.value = null, O) {
              const k = D.currentTarget, I = { originalEvent: D, delta: O };
              s(Ts)(O, s(l).swipeDirection.value, s(l).swipeThreshold.value) ? s(ko)(s(Am), (F) => o("swipeEnd", F), I) : s(ko)(s(Dm), (F) => o("swipeCancel", F), I), k == null || k.addEventListener("click", (F) => F.preventDefault(), {
                once: !0
              });
            }
          })
        }), {
          default: y(() => [
            _($.$slots, "default", {
              remaining: m.value,
              duration: d.value
            })
          ]),
          _: 3
        }, 16, ["as", "as-child", "data-state", "data-swipe-direction"])
      ], 8, ["to"])) : ce("", !0)
    ], 64));
  }
}), Lm = /* @__PURE__ */ b({
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
    const n = e, o = t, { forwardRef: a } = N(), r = Pe(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    });
    return (l, i) => (h(), x(s(ut), {
      present: l.forceMount || s(r)
    }, {
      default: y(() => [
        R(Rm, A({
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
}), Ri = /* @__PURE__ */ b({
  __name: "ToastAnnounceExclude",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    return (t, n) => (h(), x(s(X), {
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
}), Li = /* @__PURE__ */ b({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Mm(), { forwardRef: o } = N();
    return (a, r) => (h(), x(Ri, { "as-child": "" }, {
      default: y(() => [
        R(s(X), A(t, {
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
}), Vm = /* @__PURE__ */ b({
  __name: "ToastAction",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    if (!e.altText)
      throw new Error("Missing prop `altText` expected on `ToastAction`");
    const { forwardRef: t } = N();
    return (n, o) => n.altText ? (h(), x(Ri, {
      key: 0,
      "alt-text": n.altText,
      "as-child": ""
    }, {
      default: y(() => [
        R(Li, {
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
}), Is = /* @__PURE__ */ b({
  __name: "FocusProxy",
  emits: ["focusFromOutsideViewport"],
  setup(e, { emit: t }) {
    const n = t, o = da();
    return (a, r) => (h(), x(s(mo), {
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
}), zm = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "ToastViewport",
  props: {
    hotkey: { default: () => ["F8"] },
    label: { type: [String, Function], default: "Notifications ({hotkey})" },
    asChild: { type: Boolean },
    as: { default: "ol" }
  },
  setup(e) {
    const t = e, { hotkey: n, label: o } = we(t), { forwardRef: a, currentElement: r } = N(), { createCollection: l } = Rn(), i = l(r), u = da(), d = S(() => u.toastCount.value > 0), c = E(), p = E(), v = S(() => n.value.join("+").replace(/Key/g, "").replace(/Digit/g, ""));
    Cr(n.value, () => {
      r.value.focus();
    }), ie(() => {
      u.onViewportChange(r.value);
    }), xe((f) => {
      const g = r.value;
      if (d.value && g) {
        const w = () => {
          if (!u.isClosePausedRef.value) {
            const O = new CustomEvent(Xa);
            g.dispatchEvent(O), u.isClosePausedRef.value = !0;
          }
        }, C = () => {
          if (u.isClosePausedRef.value) {
            const O = new CustomEvent(Za);
            g.dispatchEvent(O), u.isClosePausedRef.value = !1;
          }
        }, $ = (O) => {
          !g.contains(O.relatedTarget) && C();
        }, B = () => {
          g.contains(qe()) || C();
        }, D = (O) => {
          var P, k, I;
          const F = O.altKey || O.ctrlKey || O.metaKey;
          if (O.key === "Tab" && !F) {
            const T = qe(), V = O.shiftKey;
            if (O.target === g && V) {
              (P = c.value) == null || P.focus();
              return;
            }
            const M = m({ tabbingDirection: V ? "backwards" : "forwards" }), G = M.findIndex((L) => L === T);
            Fo(M.slice(G + 1)) ? O.preventDefault() : V ? (k = c.value) == null || k.focus() : (I = p.value) == null || I.focus();
          }
        };
        g.addEventListener("focusin", w), g.addEventListener("focusout", $), g.addEventListener("pointermove", w), g.addEventListener("pointerleave", B), g.addEventListener("keydown", D), window.addEventListener("blur", w), window.addEventListener("focus", C), f(() => {
          g.removeEventListener("focusin", w), g.removeEventListener("focusout", $), g.removeEventListener("pointermove", w), g.removeEventListener("pointerleave", B), g.removeEventListener("keydown", D), window.removeEventListener("blur", w), window.removeEventListener("focus", C);
        });
      }
    });
    function m({ tabbingDirection: f }) {
      const g = i.value.map((w) => {
        const C = [w, ...Ar(w)];
        return f === "forwards" ? C : C.reverse();
      });
      return (f === "forwards" ? g.reverse() : g).flat();
    }
    return (f, g) => (h(), x(s(cp), {
      role: "region",
      "aria-label": typeof s(o) == "string" ? s(o).replace("{hotkey}", v.value) : s(o)(v.value),
      tabindex: "-1",
      style: lt({
        // incase list has size when empty (e.g. padding), we remove pointer events so
        // it doesn't prevent interactions with page elements that it overlays
        pointerEvents: d.value ? void 0 : "none"
      })
    }, {
      default: y(() => [
        d.value ? (h(), x(Is, {
          key: 0,
          ref: (w) => {
            c.value = s(it)(w);
          },
          onFocusFromOutsideViewport: g[0] || (g[0] = () => {
            const w = m({
              tabbingDirection: "forwards"
            });
            s(Fo)(w);
          })
        }, null, 512)) : ce("", !0),
        R(s(X), A({
          ref: s(a),
          tabindex: "-1",
          as: f.as,
          "as-child": f.asChild
        }, f.$attrs), {
          default: y(() => [
            _(f.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child"]),
        d.value ? (h(), x(Is, {
          key: 1,
          ref: (w) => {
            p.value = s(it)(w);
          },
          onFocusFromOutsideViewport: g[1] || (g[1] = () => {
            const w = m({
              tabbingDirection: "backwards"
            });
            s(Fo)(w);
          })
        }, null, 512)) : ce("", !0)
      ]),
      _: 3
    }, 8, ["aria-label", "style"]));
  }
}), qm = /* @__PURE__ */ b({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return N(), (n, o) => (h(), x(s(X), Q(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Nm = /* @__PURE__ */ b({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return N(), (n, o) => (h(), x(s(X), Q(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Vi = "tooltip.open", [Gr, jm] = ye("TooltipProvider"), Km = /* @__PURE__ */ b({
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
    const t = e, { delayDuration: n, skipDelayDuration: o, disableHoverableContent: a, disableClosingTrigger: r, ignoreNonKeyboardFocus: l, disabled: i } = we(t);
    N();
    const u = E(!0), d = E(!1), { start: c, stop: p } = xr(() => {
      u.value = !0;
    }, o, { immediate: !1 });
    return jm({
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
    }), (v, m) => _(v.$slots, "default");
  }
}), [ca, Hm] = ye("TooltipRoot"), Wm = /* @__PURE__ */ b({
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
    N();
    const a = Gr(), r = S(() => n.disableHoverableContent ?? a.disableHoverableContent.value), l = S(() => n.disableClosingTrigger ?? a.disableClosingTrigger.value), i = S(() => n.disabled ?? a.disabled.value), u = S(() => n.delayDuration ?? a.delayDuration.value), d = S(() => n.ignoreNonKeyboardFocus ?? a.ignoreNonKeyboardFocus.value), c = Pe(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    });
    te(c, (B) => {
      a.onClose && (B ? (a.onOpen(), document.dispatchEvent(new CustomEvent(Vi))) : a.onClose());
    });
    const p = E(!1), v = E(), m = S(() => c.value ? p.value ? "delayed-open" : "instant-open" : "closed"), { start: f, stop: g } = xr(() => {
      p.value = !0, c.value = !0;
    }, u, { immediate: !1 });
    function w() {
      g(), p.value = !1, c.value = !0;
    }
    function C() {
      g(), c.value = !1;
    }
    function $() {
      f();
    }
    return Hm({
      contentId: "",
      open: c,
      stateAttribute: m,
      trigger: v,
      onTriggerChange(B) {
        v.value = B;
      },
      onTriggerEnter() {
        a.isOpenDelayed.value ? $() : w();
      },
      onTriggerLeave() {
        r.value ? C() : g();
      },
      onOpen: w,
      onClose: C,
      disableHoverableContent: r,
      disableClosingTrigger: l,
      disabled: i,
      ignoreNonKeyboardFocus: d
    }), (B, D) => (h(), x(s(zn), null, {
      default: y(() => [
        _(B.$slots, "default", { open: s(c) })
      ]),
      _: 3
    }));
  }
}), Um = /* @__PURE__ */ b({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = ca(), o = Gr();
    n.contentId || (n.contentId = Le(void 0, "radix-vue-tooltip-content"));
    const { forwardRef: a, currentElement: r } = N(), l = E(!1), i = E(!1), u = S(() => n.disabled.value ? {} : {
      click: g,
      focus: m,
      pointermove: p,
      pointerleave: v,
      pointerdown: c,
      blur: f
    });
    ie(() => {
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
    function p(w) {
      w.pointerType !== "touch" && !i.value && !o.isPointerInTransitRef.value && (n.onTriggerEnter(), i.value = !0);
    }
    function v() {
      n.onTriggerLeave(), i.value = !1;
    }
    function m(w) {
      var C, $;
      l.value || n.ignoreNonKeyboardFocus.value && !(($ = (C = w.target).matches) != null && $.call(C, ":focus-visible")) || n.onOpen();
    }
    function f() {
      n.onClose();
    }
    function g() {
      n.disableClosingTrigger.value || n.onClose();
    }
    return (w, C) => (h(), x(s(vo), { "as-child": "" }, {
      default: y(() => [
        R(s(X), A({
          ref: s(a),
          "aria-describedby": s(n).open.value ? s(n).contentId : void 0,
          "data-state": s(n).stateAttribute.value,
          as: w.as,
          "as-child": t.asChild,
          "data-grace-area-trigger": ""
        }, Ru(u.value)), {
          default: y(() => [
            _(w.$slots, "default")
          ]),
          _: 3
        }, 16, ["aria-describedby", "data-state", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), zi = /* @__PURE__ */ b({
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
    const n = e, o = t, a = ca(), { forwardRef: r } = N(), l = Go(), i = S(() => {
      var c;
      return (c = l.default) == null ? void 0 : c.call(l);
    }), u = S(() => {
      var c;
      if (n.ariaLabel)
        return n.ariaLabel;
      let p = "";
      function v(m) {
        typeof m.children == "string" && m.type !== ur ? p += m.children : Array.isArray(m.children) && m.children.forEach((f) => v(f));
      }
      return (c = i.value) == null || c.forEach((m) => v(m)), p;
    }), d = S(() => {
      const { ariaLabel: c, ...p } = n;
      return p;
    });
    return ie(() => {
      En(window, "scroll", (c) => {
        const p = c.target;
        p != null && p.contains(a.trigger.value) && a.onClose();
      }), En(window, Vi, a.onClose);
    }), (c, p) => (h(), x(s(Vn), {
      "as-child": "",
      "disable-outside-pointer-events": !1,
      onEscapeKeyDown: p[0] || (p[0] = (v) => o("escapeKeyDown", v)),
      onPointerDownOutside: p[1] || (p[1] = (v) => {
        var m;
        s(a).disableClosingTrigger.value && (m = s(a).trigger.value) != null && m.contains(v.target) && v.preventDefault(), o("pointerDownOutside", v);
      }),
      onFocusOutside: p[2] || (p[2] = Ae(() => {
      }, ["prevent"])),
      onDismiss: p[3] || (p[3] = (v) => s(a).onClose())
    }, {
      default: y(() => [
        R(s(Pn), A({
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
            R(s(mo), {
              id: s(a).contentId,
              role: "tooltip"
            }, {
              default: y(() => [
                _e(ke(u.value), 1)
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
}), Gm = /* @__PURE__ */ b({
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
    const t = je(e), { forwardRef: n, currentElement: o } = N(), { trigger: a, onClose: r } = ca(), l = Gr(), { isPointerInTransit: i, onPointerExit: u } = Ec(a, o);
    return l.isPointerInTransitRef = i, u(() => {
      r();
    }), (d, c) => (h(), x(zi, A({ ref: s(n) }, s(t)), {
      default: y(() => [
        _(d.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ym = /* @__PURE__ */ b({
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
    const n = e, o = t, a = ca(), r = de(n, o), { forwardRef: l } = N();
    return (i, u) => (h(), x(s(ut), {
      present: i.forceMount || s(a).open.value
    }, {
      default: y(() => [
        (h(), x(tt(s(a).disableHoverableContent.value ? zi : Gm), A({ ref: s(l) }, s(r)), {
          default: y(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Xm = /* @__PURE__ */ b({
  __name: "TooltipPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Ln), Q(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function qi(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (t = 0; t < a; t++) e[t] && (n = qi(e[t])) && (o && (o += " "), o += n);
  } else for (n in e) e[n] && (o && (o += " "), o += n);
  return o;
}
function Ni() {
  for (var e, t, n = 0, o = "", a = arguments.length; n < a; n++) (e = arguments[n]) && (t = qi(e)) && (o && (o += " "), o += t);
  return o;
}
const Yr = "-", Zm = (e) => {
  const t = Jm(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (l) => {
      const i = l.split(Yr);
      return i[0] === "" && i.length !== 1 && i.shift(), ji(i, t) || Qm(l);
    },
    getConflictingClassGroupIds: (l, i) => {
      const u = n[l] || [];
      return i && o[l] ? [...u, ...o[l]] : u;
    }
  };
}, ji = (e, t) => {
  var l;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], o = t.nextPart.get(n), a = o ? ji(e.slice(1), o) : void 0;
  if (a)
    return a;
  if (t.validators.length === 0)
    return;
  const r = e.join(Yr);
  return (l = t.validators.find(({
    validator: i
  }) => i(r))) == null ? void 0 : l.classGroupId;
}, Ms = /^\[(.+)\]$/, Qm = (e) => {
  if (Ms.test(e)) {
    const t = Ms.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, Jm = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return tg(Object.entries(e.classGroups), n).forEach(([r, l]) => {
    Qa(l, o, r, t);
  }), o;
}, Qa = (e, t, n, o) => {
  e.forEach((a) => {
    if (typeof a == "string") {
      const r = a === "" ? t : Fs(t, a);
      r.classGroupId = n;
      return;
    }
    if (typeof a == "function") {
      if (eg(a)) {
        Qa(a(o), t, n, o);
        return;
      }
      t.validators.push({
        validator: a,
        classGroupId: n
      });
      return;
    }
    Object.entries(a).forEach(([r, l]) => {
      Qa(l, Fs(t, r), n, o);
    });
  });
}, Fs = (e, t) => {
  let n = e;
  return t.split(Yr).forEach((o) => {
    n.nextPart.has(o) || n.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(o);
  }), n;
}, eg = (e) => e.isThemeGetter, tg = (e, t) => t ? e.map(([n, o]) => {
  const a = o.map((r) => typeof r == "string" ? t + r : typeof r == "object" ? Object.fromEntries(Object.entries(r).map(([l, i]) => [t + l, i])) : r);
  return [n, a];
}) : e, ng = (e) => {
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
}, Ki = "!", og = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, o = t.length === 1, a = t[0], r = t.length, l = (i) => {
    const u = [];
    let d = 0, c = 0, p;
    for (let w = 0; w < i.length; w++) {
      let C = i[w];
      if (d === 0) {
        if (C === a && (o || i.slice(w, w + r) === t)) {
          u.push(i.slice(c, w)), c = w + r;
          continue;
        }
        if (C === "/") {
          p = w;
          continue;
        }
      }
      C === "[" ? d++ : C === "]" && d--;
    }
    const v = u.length === 0 ? i : i.substring(c), m = v.startsWith(Ki), f = m ? v.substring(1) : v, g = p && p > c ? p - c : void 0;
    return {
      modifiers: u,
      hasImportantModifier: m,
      baseClassName: f,
      maybePostfixModifierPosition: g
    };
  };
  return n ? (i) => n({
    className: i,
    parseClassName: l
  }) : l;
}, ag = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((o) => {
    o[0] === "[" ? (t.push(...n.sort(), o), n = []) : n.push(o);
  }), t.push(...n.sort()), t;
}, rg = (e) => ({
  cache: ng(e.cacheSize),
  parseClassName: og(e),
  ...Zm(e)
}), sg = /\s+/, lg = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: o,
    getConflictingClassGroupIds: a
  } = t, r = [], l = e.trim().split(sg);
  let i = "";
  for (let u = l.length - 1; u >= 0; u -= 1) {
    const d = l[u], {
      modifiers: c,
      hasImportantModifier: p,
      baseClassName: v,
      maybePostfixModifierPosition: m
    } = n(d);
    let f = !!m, g = o(f ? v.substring(0, m) : v);
    if (!g) {
      if (!f) {
        i = d + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (g = o(v), !g) {
        i = d + (i.length > 0 ? " " + i : i);
        continue;
      }
      f = !1;
    }
    const w = ag(c).join(":"), C = p ? w + Ki : w, $ = C + g;
    if (r.includes($))
      continue;
    r.push($);
    const B = a(g, f);
    for (let D = 0; D < B.length; ++D) {
      const O = B[D];
      r.push(C + O);
    }
    i = d + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function ig() {
  let e = 0, t, n, o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Hi(t)) && (o && (o += " "), o += n);
  return o;
}
const Hi = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = Hi(e[o])) && (n && (n += " "), n += t);
  return n;
};
function ug(e, ...t) {
  let n, o, a, r = l;
  function l(u) {
    const d = t.reduce((c, p) => p(c), e());
    return n = rg(d), o = n.cache.get, a = n.cache.set, r = i, i(u);
  }
  function i(u) {
    const d = o(u);
    if (d)
      return d;
    const c = lg(u, n);
    return a(u, c), c;
  }
  return function() {
    return r(ig.apply(null, arguments));
  };
}
const Ee = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, Wi = /^\[(?:([a-z-]+):)?(.+)\]$/i, dg = /^\d+\/\d+$/, cg = /* @__PURE__ */ new Set(["px", "full", "screen"]), pg = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, fg = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, vg = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, mg = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, gg = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, At = (e) => $n(e) || cg.has(e) || dg.test(e), qt = (e) => Kn(e, "length", Bg), $n = (e) => !!e && !Number.isNaN(Number(e)), Da = (e) => Kn(e, "number", $n), Gn = (e) => !!e && Number.isInteger(Number(e)), hg = (e) => e.endsWith("%") && $n(e.slice(0, -1)), ve = (e) => Wi.test(e), Nt = (e) => pg.test(e), yg = /* @__PURE__ */ new Set(["length", "size", "percentage"]), bg = (e) => Kn(e, yg, Ui), wg = (e) => Kn(e, "position", Ui), _g = /* @__PURE__ */ new Set(["image", "url"]), xg = (e) => Kn(e, _g, Sg), Cg = (e) => Kn(e, "", $g), Yn = () => !0, Kn = (e, t, n) => {
  const o = Wi.exec(e);
  return o ? o[1] ? typeof t == "string" ? o[1] === t : t.has(o[1]) : n(o[2]) : !1;
}, Bg = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  fg.test(e) && !vg.test(e)
), Ui = () => !1, $g = (e) => mg.test(e), Sg = (e) => gg.test(e), kg = () => {
  const e = Ee("colors"), t = Ee("spacing"), n = Ee("blur"), o = Ee("brightness"), a = Ee("borderColor"), r = Ee("borderRadius"), l = Ee("borderSpacing"), i = Ee("borderWidth"), u = Ee("contrast"), d = Ee("grayscale"), c = Ee("hueRotate"), p = Ee("invert"), v = Ee("gap"), m = Ee("gradientColorStops"), f = Ee("gradientColorStopPositions"), g = Ee("inset"), w = Ee("margin"), C = Ee("opacity"), $ = Ee("padding"), B = Ee("saturate"), D = Ee("scale"), O = Ee("sepia"), P = Ee("skew"), k = Ee("space"), I = Ee("translate"), F = () => ["auto", "contain", "none"], T = () => ["auto", "hidden", "clip", "visible", "scroll"], V = () => ["auto", ve, t], M = () => [ve, t], G = () => ["", At, qt], L = () => ["auto", $n, ve], W = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], j = () => ["solid", "dashed", "dotted", "double", "none"], Y = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], K = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], H = () => ["", "0", ve], ue = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], se = () => [$n, ve];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Yn],
      spacing: [At, qt],
      blur: ["none", "", Nt, ve],
      brightness: se(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Nt, ve],
      borderSpacing: M(),
      borderWidth: G(),
      contrast: se(),
      grayscale: H(),
      hueRotate: se(),
      invert: H(),
      gap: M(),
      gradientColorStops: [e],
      gradientColorStopPositions: [hg, qt],
      inset: V(),
      margin: V(),
      opacity: se(),
      padding: M(),
      saturate: se(),
      scale: se(),
      sepia: H(),
      skew: se(),
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
        aspect: ["auto", "square", "video", ve]
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
        columns: [Nt]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": ue()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": ue()
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
        object: [...W(), ve]
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
        z: ["auto", Gn, ve]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: V()
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
        flex: ["1", "auto", "initial", "none", ve]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: H()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: H()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Gn, ve]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Yn]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Gn, ve]
        }, ve]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": L()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": L()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Yn]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Gn, ve]
        }, ve]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": L()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": L()
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
        "auto-cols": ["auto", "min", "max", "fr", ve]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", ve]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [v]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [v]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [v]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...K()]
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
        content: ["normal", ...K(), "baseline"]
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
        "place-content": [...K(), "baseline"]
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
        m: [w]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [w]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [w]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [w]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [w]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [w]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [w]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [w]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [w]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ve, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [ve, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [ve, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [Nt]
        }, Nt]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [ve, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [ve, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [ve, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [ve, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Nt, qt]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Da]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Yn]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ve]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", $n, Da]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", At, ve]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ve]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", ve]
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
        decoration: [...j(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", At, qt]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", At, ve]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ve]
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
        content: ["none", ve]
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
        bg: [...W(), wg]
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
        bg: ["auto", "cover", "contain", bg]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, xg]
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
        from: [f]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [f]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [f]
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
        "border-opacity": [C]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...j(), "hidden"]
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
        divide: j()
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
        outline: ["", ...j()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [At, ve]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [At, qt]
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
        ring: G()
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
        "ring-offset": [At, qt]
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
        shadow: ["", "inner", "none", Nt, Cg]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Yn]
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
        "mix-blend": [...Y(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Y()
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
        "drop-shadow": ["", "none", Nt, ve]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ve]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: se()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", ve]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: se()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", ve]
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
        rotate: [Gn, ve]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", ve]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ve]
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
        "will-change": ["auto", "scroll", "contents", "transform", ve]
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
        stroke: [At, qt, Da]
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
}, Og = /* @__PURE__ */ ug(kg);
function z(...e) {
  return Og(Ni(e));
}
function w_(e, t) {
  t.value = typeof e == "function" ? e(t.value) : e;
}
function __(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, o = Symbol(n);
  return [(l) => {
    const i = In(o, l);
    if (i || i === null) return i;
    throw new Error(
      `Injection \`${o.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(", ")}` : `\`${e}\``}`
    );
  }, (l) => (Mn(o, l), l)];
}
const Eg = /* @__PURE__ */ b({
  __name: "AlertDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = de(e, t);
    return (r, l) => (h(), x(s(Dp), Q(ee(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), x_ = /* @__PURE__ */ b({
  __name: "AlertDialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Ap), Q(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Pg = /* @__PURE__ */ b({
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
    }), r = de(a, o);
    return (l, i) => (h(), x(s(Tp), null, {
      default: y(() => [
        R(s(Rp), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        R(s(Fp), A(s(r), {
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
}), Dg = /* @__PURE__ */ b({
  __name: "AlertDialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), q("div", {
      class: le(s(z)("flex flex-col gap-y-2 text-center sm:text-left", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), Ag = /* @__PURE__ */ b({
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
    return (o, a) => (h(), x(s(Vp), A(n.value, {
      class: s(z)("text-lg font-semibold", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Tg = /* @__PURE__ */ b({
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
    return (o, a) => (h(), x(s(zp), A(n.value, {
      class: s(z)("text-sm text-muted-foreground", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ig = /* @__PURE__ */ b({
  __name: "AlertDialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), q("div", {
      class: le(s(z)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), Rs = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Ls = Ni, ho = (e, t) => (n) => {
  var o;
  if ((t == null ? void 0 : t.variants) == null) return Ls(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: a, defaultVariants: r } = t, l = Object.keys(a).map((d) => {
    const c = n == null ? void 0 : n[d], p = r == null ? void 0 : r[d];
    if (c === null) return null;
    const v = Rs(c) || Rs(p);
    return a[d][v];
  }), i = n && Object.entries(n).reduce((d, c) => {
    let [p, v] = c;
    return v === void 0 || (d[p] = v), d;
  }, {}), u = t == null || (o = t.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((d, c) => {
    let { class: p, className: v, ...m } = c;
    return Object.entries(m).every((f) => {
      let [g, w] = f;
      return Array.isArray(w) ? w.includes({
        ...r,
        ...i
      }[g]) : {
        ...r,
        ...i
      }[g] === w;
    }) ? [
      ...d,
      p,
      v
    ] : d;
  }, []);
  return Ls(e, l, u, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, Gi = /* @__PURE__ */ b({
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
    return (n, o) => (h(), x(s(X), {
      as: e.as,
      "as-child": e.asChild,
      class: le(s(z)(s(Zt)({ variant: e.variant, size: e.size }), t.class))
    }, {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), Zt = ho(
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
), Mg = /* @__PURE__ */ b({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    variant: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), x(s(qp), A(n.value, {
      class: s(z)(s(Zt)({ variant: e.variant }), t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Fg = /* @__PURE__ */ b({
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
    return (o, a) => (h(), x(s(Lp), A(n.value, {
      class: s(z)(s(Zt)({ variant: "outline" }), "mt-2 sm:mt-0", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), C_ = /* @__PURE__ */ b({
  __name: "ConfirmDialog",
  setup(e) {
    const { isOpen: t, close: n, cancelButton: o, actionButton: a, title: r, description: l, variant: i } = Vg();
    return (u, d) => (h(), x(s(Eg), { open: s(t) }, {
      default: y(() => [
        R(s(Pg), {
          onClose: s(n),
          onEscapeKeyDown: s(n),
          onPointerDownOutside: s(n)
        }, {
          default: y(() => [
            R(s(Dg), null, {
              default: y(() => [
                R(s(Ag), null, {
                  default: y(() => [
                    _e(ke(s(r)), 1)
                  ]),
                  _: 1
                }),
                R(s(Tg), null, {
                  default: y(() => [
                    _e(ke(s(l)), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            R(s(Ig), null, {
              default: y(() => [
                R(s(Fg), {
                  onClick: s(o).handler
                }, {
                  default: y(() => [
                    _e(ke(s(o).label ?? "Cancel"), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                R(s(Mg), {
                  variant: s(i),
                  onClick: s(a).handler
                }, {
                  default: y(() => [
                    _e(ke(s(a).label ?? "Confirm"), 1)
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
}), Xr = E(!1), Yi = E(""), Xi = E(""), Zi = E(null), Qi = E({
  label: void 0,
  handler: () => {
  }
}), Ji = E({
  label: void 0,
  handler: () => {
  }
}), Rg = (e) => {
  Yi.value = e.title, Xi.value = e.description, Zi.value = e.variant, Qi.value = Vs(e.cancelAction), Ji.value = Vs(e.action), Lg();
}, Vs = (e) => typeof e == "string" ? {
  label: e,
  handler: Ro
} : typeof e == "function" ? {
  label: void 0,
  handler: e
} : typeof e == "object" && e !== void 0 ? {
  label: e.label ?? void 0,
  handler: e.handler ?? Ro
} : {
  label: void 0,
  handler: Ro
}, Ro = () => {
  Xr.value = !1;
}, Lg = () => {
  Xr.value = !0;
};
function Vg() {
  return {
    confirmDialog: (e) => Rg(e),
    title: Yi,
    description: Xi,
    variant: Zi,
    isOpen: Xr,
    close: Ro,
    cancelButton: Qi,
    actionButton: Ji
  };
}
const Hn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, a] of t)
    n[o] = a;
  return n;
}, zg = {}, qg = { class: "h-full bg-background dark:text-white" };
function Ng(e, t) {
  return h(), q("div", qg, [
    _(e.$slots, "default")
  ]);
}
const B_ = /* @__PURE__ */ Hn(zg, [["render", Ng]]), jg = {}, Kg = { class: "sticky top-0 z-50 flex h-16 shrink-0 items-center gap-x-4 bg-background/60 px-4 backdrop-blur sm:gap-x-6 sm:px-6 lg:px-8" };
function Hg(e, t) {
  return h(), q("header", Kg, [
    _(e.$slots, "default")
  ]);
}
const $_ = /* @__PURE__ */ Hn(jg, [["render", Hg]]), Wg = {}, Ug = { class: "px-4 py-10 sm:px-6 lg:px-8 lg:pl-72" };
function Gg(e, t) {
  return h(), q("main", Ug, [
    _(e.$slots, "default")
  ]);
}
const S_ = /* @__PURE__ */ Hn(Wg, [["render", Gg]]), Yg = {};
function Xg(e, t) {
  return _(e.$slots, "default");
}
const k_ = /* @__PURE__ */ Hn(Yg, [["render", Xg]]), Zg = {}, Qg = { class: "hidden px-6 py-10 lg:fixed lg:inset-y-0 lg:top-16 lg:z-50 lg:flex lg:w-72 lg:flex-col" }, Jg = { class: "gap-y-5 overflow-y-auto" };
function eh(e, t) {
  return h(), q("div", Qg, [
    oe("div", Jg, [
      _(e.$slots, "default")
    ])
  ]);
}
const O_ = /* @__PURE__ */ Hn(Zg, [["render", eh]]), th = {};
function nh(e, t) {
  return _(e.$slots, "default");
}
const E_ = /* @__PURE__ */ Hn(th, [["render", nh]]);
function oh(e, t) {
  return h(), q("svg", {
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
      d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    })
  ]);
}
function ah(e, t) {
  return h(), q("svg", {
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
function zs(e, t) {
  return h(), q("svg", {
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
function rh(e, t) {
  return h(), q("svg", {
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
const sh = {
  type: "button",
  class: "-m-2.5 p-2.5 lg:hidden"
}, P_ = /* @__PURE__ */ b({
  __name: "TwoColumnLayoutSidebarTrigger",
  setup(e) {
    return (t, n) => (h(), q("button", sh, [
      n[0] || (n[0] = oe("span", { class: "sr-only" }, "Open sidebar", -1)),
      R(s(oh), {
        class: "h-6 w-6",
        "aria-hidden": "true"
      })
    ]));
  }
}), lh = 3, ih = 1e6, It = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST"
};
let Aa = 0;
function uh() {
  return Aa = (Aa + 1) % Number.MAX_VALUE, Aa.toString();
}
const Ta = /* @__PURE__ */ new Map();
function qs(e) {
  if (Ta.has(e)) return;
  const t = setTimeout(() => {
    Ta.delete(e), Qn({
      type: It.REMOVE_TOAST,
      toastId: e
    });
  }, ih);
  Ta.set(e, t);
}
const pt = E({
  toasts: []
});
function Qn(e) {
  switch (e.type) {
    case It.ADD_TOAST:
      pt.value.toasts = [e.toast, ...pt.value.toasts].slice(0, lh);
      break;
    case It.UPDATE_TOAST:
      pt.value.toasts = pt.value.toasts.map(
        (t) => t.id === e.toast.id ? { ...t, ...e.toast } : t
      );
      break;
    case It.DISMISS_TOAST: {
      const { toastId: t } = e;
      t ? qs(t) : pt.value.toasts.forEach((n) => {
        qs(n.id);
      }), pt.value.toasts = pt.value.toasts.map(
        (n) => n.id === t || t === void 0 ? {
          ...n,
          open: !1
        } : n
      );
      break;
    }
    case It.REMOVE_TOAST:
      e.toastId === void 0 ? pt.value.toasts = [] : pt.value.toasts = pt.value.toasts.filter((t) => t.id !== e.toastId);
      break;
  }
}
function eu() {
  return {
    toasts: S(() => pt.value.toasts),
    toast: dh,
    dismiss: (e) => Qn({ type: It.DISMISS_TOAST, toastId: e })
  };
}
function dh(e) {
  const t = uh(), n = (a) => Qn({
    type: It.UPDATE_TOAST,
    toast: { ...a, id: t }
  }), o = () => Qn({ type: It.DISMISS_TOAST, toastId: t });
  return Qn({
    type: It.ADD_TOAST,
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
const ch = { class: "flex items-start space-x-3" }, ph = ["src", "alt"], fh = { class: "grid gap-1" }, vh = { class: "font-bold" }, mh = /* @__PURE__ */ b({
  __name: "Toaster",
  props: {
    position: {}
  },
  emits: ["click"],
  setup(e) {
    const { toasts: t } = eu();
    return (n, o) => (h(), x(s(kh), null, {
      default: y(() => [
        (h(!0), q(Be, null, rt(s(t), (a) => (h(), x(s(gh), A({
          key: a.id
        }, { ref_for: !0 }, a, {
          class: "mt-1.5",
          onClick: (r) => n.$emit("click", a)
        }), {
          default: y(() => [
            oe("div", ch, [
              a.icon ? (h(), q(Be, { key: 0 }, [
                typeof a.icon == "string" ? (h(), q("img", {
                  key: 0,
                  src: a.icon,
                  class: le(["size-16 rounded-sm object-cover", a.iconClasses]),
                  alt: a.title
                }, null, 10, ph)) : (h(), x(tt(a.icon), {
                  key: 1,
                  class: le(["size-6", a.iconClasses])
                }, null, 8, ["class"]))
              ], 64)) : ce("", !0),
              oe("div", fh, [
                a.title ? (h(), x(s(Sh), { key: 0 }, {
                  default: y(() => [
                    _e(ke(a.title), 1)
                  ]),
                  _: 2
                }, 1024)) : ce("", !0),
                a.description ? (h(), q(Be, { key: 1 }, [
                  Nu(a.description) ? (h(), x(s(Ns), { key: 0 }, {
                    default: y(() => [
                      (h(), x(tt(a.description)))
                    ]),
                    _: 2
                  }, 1024)) : typeof a.description == "object" ? (h(!0), q(Be, { key: 1 }, rt(a.description, (r, l) => (h(), q("p", {
                    key: l,
                    class: "text-sm opacity-90"
                  }, [
                    a.objectFormat === "key" ? (h(), q(Be, { key: 0 }, [
                      _e(ke(l), 1)
                    ], 64)) : a.objectFormat === "both" ? (h(), q(Be, { key: 1 }, [
                      oe("span", vh, ke(l), 1),
                      _e(": " + ke(r), 1)
                    ], 64)) : (h(), q(Be, { key: 2 }, [
                      _e(ke(r), 1)
                    ], 64))
                  ]))), 128)) : (h(), x(s(Ns), { key: 2 }, {
                    default: y(() => [
                      _e(ke(a.description), 1)
                    ]),
                    _: 2
                  }, 1024))
                ], 64)) : ce("", !0),
                R(s($h))
              ])
            ]),
            (h(), x(tt(a.action)))
          ]),
          _: 2
        }, 1040, ["onClick"]))), 128)),
        R(s(hh), { position: e.position }, null, 8, ["position"])
      ]),
      _: 1
    }));
  }
}), gh = /* @__PURE__ */ b({
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
    }), r = de(a, o);
    return (l, i) => (h(), x(s(Lm), A(s(r), {
      class: s(z)(s(Oh)({ variant: e.variant }), n.class),
      "onUpdate:open": e.onOpenChange
    }), {
      default: y(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class", "onUpdate:open"]));
  }
}), hh = /* @__PURE__ */ b({
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
    const t = e, n = S(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = S(() => {
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
    return (a, r) => (h(), x(s(zm), A(n.value, {
      class: s(z)(
        // overriding the defaults to position at the bottom on mobile viewport
        // 'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
        "fixed flex-col z-[100] flex max-h-screen w-full p-4 md:max-w-[420px]",
        o.value,
        t.class
      )
    }), null, 16, ["class"]));
  }
}), D_ = /* @__PURE__ */ b({
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
    return (o, a) => (h(), x(s(Vm), A(n.value, {
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
function yh(e, t) {
  return h(), q("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    oe("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z",
      fill: "currentColor"
    })
  ]);
}
function bh(e, t) {
  return h(), q("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    oe("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z",
      fill: "currentColor"
    })
  ]);
}
function wh(e, t) {
  return h(), q("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    oe("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z",
      fill: "currentColor"
    })
  ]);
}
function tu(e, t) {
  return h(), q("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    oe("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",
      fill: "currentColor"
    })
  ]);
}
function nu(e, t) {
  return h(), q("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    oe("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
      fill: "currentColor"
    })
  ]);
}
function _h(e, t) {
  return h(), q("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    oe("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z",
      fill: "currentColor"
    })
  ]);
}
function xh(e, t) {
  return h(), q("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    oe("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M3.13523 8.84197C3.3241 9.04343 3.64052 9.05363 3.84197 8.86477L7.5 5.43536L11.158 8.86477C11.3595 9.05363 11.6759 9.04343 11.8648 8.84197C12.0536 8.64051 12.0434 8.32409 11.842 8.13523L7.84197 4.38523C7.64964 4.20492 7.35036 4.20492 7.15803 4.38523L3.15803 8.13523C2.95657 8.32409 2.94637 8.64051 3.13523 8.84197Z",
      fill: "currentColor"
    })
  ]);
}
function pa(e, t) {
  return h(), q("svg", {
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
function Ch(e, t) {
  return h(), q("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    oe("path", {
      d: "M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z",
      fill: "currentColor"
    })
  ]);
}
function Bh(e, t) {
  return h(), q("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    oe("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z",
      fill: "currentColor"
    })
  ]);
}
const $h = /* @__PURE__ */ b({
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
    return (o, a) => (h(), x(s(Li), A(n.value, {
      class: s(z)(
        "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
        t.class
      )
    }), {
      default: y(() => [
        R(s(pa), { class: "h-4 w-4" })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Sh = /* @__PURE__ */ b({
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
    return (o, a) => (h(), x(s(qm), A(n.value, {
      class: s(z)("text-sm font-semibold [&+div]:text-xs", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ns = /* @__PURE__ */ b({
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
    return (o, a) => (h(), x(s(Nm), A({
      class: s(z)("text-sm opacity-90", t.class)
    }, n.value), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), kh = /* @__PURE__ */ b({
  __name: "ToastProvider",
  props: {
    label: {},
    duration: {},
    swipeDirection: {},
    swipeThreshold: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Om), Q(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Oh = ho(
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
), { toast: Oo } = eu();
function Eh() {
  return {
    info: (e) => {
      Oo({
        icon: rh,
        iconClasses: "text-blue-400",
        title: "FYI",
        description: e
      });
    },
    success: (e) => {
      Oo({
        icon: ah,
        iconClasses: "text-green-400",
        title: "Success",
        description: e
      });
    },
    warning: (e) => {
      Oo({
        icon: zs,
        iconClasses: "text-orange-400",
        title: "Warning",
        description: e
      });
    },
    error: (e, t = "value") => {
      Oo({
        icon: zs,
        iconClasses: "text-red-400",
        title: "Oh snap! Some errors were encountered.",
        description: e,
        objectFormat: t
      });
    }
  };
}
const A_ = /* @__PURE__ */ b({
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
    } = Eh();
    return te(
      () => t.info,
      (l) => {
        l && n(t.info);
      },
      {
        immediate: !0
      }
    ), te(
      () => t.success,
      (l) => {
        l && o(t.success);
      },
      { immediate: !0 }
    ), te(
      () => t.warning,
      (l) => {
        l && a(t.warning);
      },
      { immediate: !0 }
    ), te(
      () => t.errors,
      () => {
        t.errors !== void 0 && Object.keys(t.errors).length > 0 && r(t.errors, t.objectFormat);
      }
    ), (l, i) => (h(), x(s(mh)));
  }
}), Ph = { class: "flex items-center justify-between space-y-2" }, Dh = { class: "flex items-center space-x-2" }, T_ = /* @__PURE__ */ b({
  __name: "Heading",
  props: {
    as: { default: "h2" },
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), q("div", Ph, [
      (h(), x(tt(e.as), {
        class: le(s(z)("text-3xl font-bold tracking-tight", t.class))
      }, {
        default: y(() => [
          _(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["class"])),
      oe("div", Dh, [
        _(n.$slots, "actions")
      ])
    ]));
  }
}), Ah = /* @__PURE__ */ b({
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
    const a = de(e, t);
    return (r, l) => (h(), x(s(ep), Q(ee(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), I_ = /* @__PURE__ */ b({
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
    const a = de(e, t);
    return (r, l) => (h(), x(Ah, Q(ee(s(a))), {
      default: y(() => [
        (h(!0), q(Be, null, rt(e.content, (i, u) => (h(), x(s(Ih), {
          key: u,
          value: "item-" + u
        }, {
          default: y(() => [
            R(s(Mh), null, {
              default: y(() => [
                _(r.$slots, u + ".title", { item: i }, () => [
                  _e(ke(i.title), 1)
                ])
              ]),
              _: 2
            }, 1024),
            R(s(Th), null, {
              default: y(() => [
                _(r.$slots, u + ".content", { item: i }, () => [
                  _e(ke(i.content), 1)
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
}), Th = /* @__PURE__ */ b({
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
    return (o, a) => (h(), x(s(op), A(n.value, { class: "accordion-content overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" }), {
      default: y(() => [
        oe("div", {
          class: le(s(z)("pb-4 pt-0", t.class))
        }, [
          _(o.$slots, "default")
        ], 2)
      ]),
      _: 3
    }, 16));
  }
}), Ih = /* @__PURE__ */ b({
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
    }), o = je(n);
    return (a, r) => (h(), x(s(np), A(s(o), {
      class: s(z)("border-b", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Mh = /* @__PURE__ */ b({
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
    return (o, a) => (h(), x(s(ap), { class: "flex" }, {
      default: y(() => [
        R(s(rp), A(n.value, {
          class: s(z)(
            "accordion-trigger flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
            t.class
          )
        }), {
          default: y(() => [
            _(o.$slots, "default"),
            _(o.$slots, "icon", {}, () => [
              R(s(nu), { class: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), M_ = /* @__PURE__ */ b({
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
    const a = de(e, t);
    return (r, l) => (h(), x(s(Lh), null, {
      default: y(() => [
        R(s(Fh), Q(ee(s(a))), {
          default: y(() => [
            R(s(Vh), {
              class: le(e.indicator ? "underline decoration-dotted underline-offset-4" : "")
            }, {
              default: y(() => [
                _(r.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]),
            R(s(Rh), Q(ee(r.$attrs)), {
              default: y(() => [
                _(r.$slots, "tooltip", {}, () => [
                  _e(ke(e.tooltip), 1)
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
}), Fh = /* @__PURE__ */ b({
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
    const a = de(e, t);
    return (r, l) => (h(), x(s(Wm), Q(ee(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Rh = /* @__PURE__ */ b({
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
    }), r = de(a, o);
    return (l, i) => (h(), x(s(Xm), null, {
      default: y(() => [
        R(s(Ym), A({ ...s(r), ...l.$attrs }, {
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
}), Lh = /* @__PURE__ */ b({
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
    return (n, o) => (h(), x(s(Km), Q(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Vh = /* @__PURE__ */ b({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Um), Q(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), F_ = /* @__PURE__ */ b({
  __name: "Avatar",
  props: {
    class: {},
    size: { default: "sm" },
    shape: { default: "circle" }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(jp), {
      class: le(s(z)(s(zh)({ size: e.size, shape: e.shape }), t.class))
    }, {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), R_ = /* @__PURE__ */ b({
  __name: "AvatarImage",
  props: {
    src: {},
    referrerPolicy: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Hp), A(t, { class: "h-full w-full object-cover" }), null, 16));
  }
}), L_ = /* @__PURE__ */ b({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Wp), Q(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), zh = ho(
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
), V_ = /* @__PURE__ */ b({
  __name: "Badge",
  props: {
    variant: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), q("div", {
      class: le(s(z)(s(qh)({ variant: e.variant }), t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), qh = ho(
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
), z_ = /* @__PURE__ */ b({
  __name: "Card",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), q("div", {
      class: le(s(z)("rounded-xl border bg-card text-card-foreground shadow", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), q_ = /* @__PURE__ */ b({
  __name: "CardContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), q("div", {
      class: le(s(z)("p-6 pt-0", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), N_ = /* @__PURE__ */ b({
  __name: "CardDescription",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), q("p", {
      class: le(s(z)("text-sm text-muted-foreground", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), j_ = /* @__PURE__ */ b({
  __name: "CardFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), q("div", {
      class: le(s(z)("flex items-center p-6 pt-0", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), K_ = /* @__PURE__ */ b({
  __name: "CardHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), q("div", {
      class: le(s(z)("flex flex-col gap-y-1.5 p-6", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), H_ = /* @__PURE__ */ b({
  __name: "CardTitle",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), q("h3", {
      class: le(s(z)("font-semibold leading-none tracking-tight", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
});
var js;
const Nh = typeof window < "u", jh = (e) => typeof e < "u", Kh = (e) => typeof e == "function";
Nh && ((js = window == null ? void 0 : window.navigator) != null && js.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Hh(e) {
  return e;
}
function Wh(e) {
  const t = Symbol("InjectionState");
  return [(...a) => {
    const r = e(...a);
    return Mn(t, r), r;
  }, () => In(t)];
}
function Uh(e) {
  if (!st(e))
    return kn(e);
  const t = new Proxy({}, {
    get(n, o, a) {
      return s(Reflect.get(e.value, o, a));
    },
    set(n, o, a) {
      return st(e.value[o]) && !st(a) ? e.value[o].value = a : e.value[o] = a, !0;
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
  return kn(t);
}
function Gh(e) {
  return Uh(S(e));
}
function He(e, ...t) {
  const n = t.flat();
  return Gh(() => Object.fromEntries(Object.entries(we(e)).filter((o) => !n.includes(o[0]))));
}
function Yh(e) {
  return JSON.parse(JSON.stringify(e));
}
const Ks = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Hs = "__vueuse_ssr_handlers__";
Ks[Hs] = Ks[Hs] || {};
var Ws;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Ws || (Ws = {}));
var Xh = Object.defineProperty, Us = Object.getOwnPropertySymbols, Zh = Object.prototype.hasOwnProperty, Qh = Object.prototype.propertyIsEnumerable, Gs = (e, t, n) => t in e ? Xh(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Jh = (e, t) => {
  for (var n in t || (t = {}))
    Zh.call(t, n) && Gs(e, n, t[n]);
  if (Us)
    for (var n of Us(t))
      Qh.call(t, n) && Gs(e, n, t[n]);
  return e;
};
const ey = {
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
Jh({
  linear: Hh
}, ey);
function ou(e, t, n, o = {}) {
  var a, r, l;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: c = !1,
    defaultValue: p
  } = o, v = Ue(), m = n || (v == null ? void 0 : v.emit) || ((a = v == null ? void 0 : v.$emit) == null ? void 0 : a.bind(v)) || ((l = (r = v == null ? void 0 : v.proxy) == null ? void 0 : r.$emit) == null ? void 0 : l.bind(v == null ? void 0 : v.proxy));
  let f = d;
  f = d || f || `update:${t.toString()}`;
  const g = (C) => i ? Kh(i) ? i(C) : Yh(C) : C, w = () => jh(e[t]) ? g(e[t]) : p;
  if (u) {
    const C = w(), $ = E(C);
    return te(() => e[t], (B) => $.value = g(B)), te($, (B) => {
      (B !== e[t] || c) && m(f, B);
    }, { deep: c }), $;
  } else
    return S({
      get() {
        return w();
      },
      set(C) {
        m(f, C);
      }
    });
}
function ty(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Ys(e) {
  return ty(e) || Array.isArray(e);
}
function ny() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Zr(e, t) {
  const n = Object.keys(e), o = Object.keys(t);
  if (n.length !== o.length) return !1;
  const a = JSON.stringify(Object.keys(e.breakpoints || {})), r = JSON.stringify(Object.keys(t.breakpoints || {}));
  return a !== r ? !1 : n.every((l) => {
    const i = e[l], u = t[l];
    return typeof i == "function" ? `${i}` == `${u}` : !Ys(i) || !Ys(u) ? i === u : Zr(i, u);
  });
}
function Xs(e) {
  return e.concat().sort((t, n) => t.name > n.name ? 1 : -1).map((t) => t.options);
}
function oy(e, t) {
  if (e.length !== t.length) return !1;
  const n = Xs(e), o = Xs(t);
  return n.every((a, r) => {
    const l = o[r];
    return Zr(a, l);
  });
}
function Qr(e) {
  return typeof e == "number";
}
function Ja(e) {
  return typeof e == "string";
}
function fa(e) {
  return typeof e == "boolean";
}
function Zs(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Ie(e) {
  return Math.abs(e);
}
function Jr(e) {
  return Math.sign(e);
}
function Jn(e, t) {
  return Ie(e - t);
}
function ay(e, t) {
  if (e === 0 || t === 0 || Ie(e) <= Ie(t)) return 0;
  const n = Jn(Ie(e), Ie(t));
  return Ie(n / e);
}
function ry(e) {
  return Math.round(e * 100) / 100;
}
function ro(e) {
  return so(e).map(Number);
}
function mt(e) {
  return e[yo(e)];
}
function yo(e) {
  return Math.max(0, e.length - 1);
}
function es(e, t) {
  return t === yo(e);
}
function Qs(e, t = 0) {
  return Array.from(Array(e), (n, o) => t + o);
}
function so(e) {
  return Object.keys(e);
}
function au(e, t) {
  return [e, t].reduce((n, o) => (so(o).forEach((a) => {
    const r = n[a], l = o[a], i = Zs(r) && Zs(l);
    n[a] = i ? au(r, l) : l;
  }), n), {});
}
function er(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function sy(e, t) {
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
    return Ja(e) ? n[e](u) : e(t, u, d);
  }
  return {
    measure: l
  };
}
function lo() {
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
function ly(e, t, n, o) {
  const a = lo(), r = 1e3 / 60;
  let l = null, i = 0, u = 0;
  function d() {
    a.add(e, "visibilitychange", () => {
      e.hidden && f();
    });
  }
  function c() {
    m(), a.clear();
  }
  function p(w) {
    if (!u) return;
    l || (l = w, n(), n());
    const C = w - l;
    for (l = w, i += C; i >= r; )
      n(), i -= r;
    const $ = i / r;
    o($), u && (u = t.requestAnimationFrame(p));
  }
  function v() {
    u || (u = t.requestAnimationFrame(p));
  }
  function m() {
    t.cancelAnimationFrame(u), l = null, i = 0, u = 0;
  }
  function f() {
    l = null, i = 0;
  }
  return {
    init: d,
    destroy: c,
    start: v,
    stop: m,
    update: n,
    render: o
  };
}
function iy(e, t) {
  const n = t === "rtl", o = e === "y", a = o ? "y" : "x", r = o ? "x" : "y", l = !o && n ? -1 : 1, i = c(), u = p();
  function d(f) {
    const {
      height: g,
      width: w
    } = f;
    return o ? g : w;
  }
  function c() {
    return o ? "top" : n ? "right" : "left";
  }
  function p() {
    return o ? "bottom" : n ? "left" : "right";
  }
  function v(f) {
    return f * l;
  }
  return {
    scroll: a,
    cross: r,
    startEdge: i,
    endEdge: u,
    measureSize: d,
    direction: v
  };
}
function on(e = 0, t = 0) {
  const n = Ie(e - t);
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
function ru(e, t, n) {
  const {
    constrain: o
  } = on(0, e), a = e + 1;
  let r = l(t);
  function l(v) {
    return n ? Ie((a + v) % a) : o(v);
  }
  function i() {
    return r;
  }
  function u(v) {
    return r = l(v), p;
  }
  function d(v) {
    return c().set(i() + v);
  }
  function c() {
    return ru(e, i(), n);
  }
  const p = {
    get: i,
    set: u,
    add: d,
    clone: c
  };
  return p;
}
function uy(e, t, n, o, a, r, l, i, u, d, c, p, v, m, f, g, w, C, $) {
  const {
    cross: B,
    direction: D
  } = e, O = ["INPUT", "SELECT", "TEXTAREA"], P = {
    passive: !1
  }, k = lo(), I = lo(), F = on(50, 225).constrain(m.measure(20)), T = {
    mouse: 300,
    touch: 400
  }, V = {
    mouse: 500,
    touch: 600
  }, M = f ? 43 : 25;
  let G = !1, L = 0, W = 0, j = !1, Y = !1, K = !1, H = !1;
  function ue(J) {
    if (!$) return;
    function he(We) {
      (fa($) || $(J, We)) && ot(We);
    }
    const Se = t;
    k.add(Se, "dragstart", (We) => We.preventDefault(), P).add(Se, "touchmove", () => {
    }, P).add(Se, "touchend", () => {
    }).add(Se, "touchstart", he).add(Se, "mousedown", he).add(Se, "touchcancel", Z).add(Se, "contextmenu", Z).add(Se, "click", ae, !0);
  }
  function se() {
    k.clear(), I.clear();
  }
  function De() {
    const J = H ? n : t;
    I.add(J, "touchmove", U, P).add(J, "touchend", Z).add(J, "mousemove", U, P).add(J, "mouseup", Z);
  }
  function Me(J) {
    const he = J.nodeName || "";
    return O.includes(he);
  }
  function Ve() {
    return (f ? V : T)[H ? "mouse" : "touch"];
  }
  function Xe(J, he) {
    const Se = p.add(Jr(J) * -1), We = c.byDistance(J, !f).distance;
    return f || Ie(J) < F ? We : w && he ? We * 0.5 : c.byIndex(Se.get(), 0).distance;
  }
  function ot(J) {
    const he = er(J, o);
    H = he, K = f && he && !J.buttons && G, G = Jn(a.get(), l.get()) >= 2, !(he && J.button !== 0) && (Me(J.target) || (j = !0, r.pointerDown(J), d.useFriction(0).useDuration(0), a.set(l), De(), L = r.readPoint(J), W = r.readPoint(J, B), v.emit("pointerDown")));
  }
  function U(J) {
    if (!er(J, o) && J.touches.length >= 2) return Z(J);
    const Se = r.readPoint(J), We = r.readPoint(J, B), at = Jn(Se, L), dt = Jn(We, W);
    if (!Y && !H && (!J.cancelable || (Y = at > dt, !Y)))
      return Z(J);
    const ne = r.pointerMove(J);
    at > g && (K = !0), d.useFriction(0.3).useDuration(0.75), i.start(), a.add(D(ne)), J.preventDefault();
  }
  function Z(J) {
    const Se = c.byDistance(0, !1).index !== p.get(), We = r.pointerUp(J) * Ve(), at = Xe(D(We), Se), dt = ay(We, at), ne = M - 10 * dt, $e = C + dt / 50;
    Y = !1, j = !1, I.clear(), d.useDuration(ne).useFriction($e), u.distance(at, !f), H = !1, v.emit("pointerUp");
  }
  function ae(J) {
    K && (J.stopPropagation(), J.preventDefault(), K = !1);
  }
  function pe() {
    return j;
  }
  return {
    init: ue,
    destroy: se,
    pointerDown: pe
  };
}
function dy(e, t) {
  let o, a;
  function r(p) {
    return p.timeStamp;
  }
  function l(p, v) {
    const f = `client${(v || e.scroll) === "x" ? "X" : "Y"}`;
    return (er(p, t) ? p : p.touches[0])[f];
  }
  function i(p) {
    return o = p, a = p, l(p);
  }
  function u(p) {
    const v = l(p) - l(a), m = r(p) - r(o) > 170;
    return a = p, m && (o = p), v;
  }
  function d(p) {
    if (!o || !a) return 0;
    const v = l(a) - l(o), m = r(p) - r(o), f = r(p) - r(a) > 170, g = v / m;
    return m && !f && Ie(g) > 0.1 ? g : 0;
  }
  return {
    pointerDown: i,
    pointerMove: u,
    pointerUp: d,
    readPoint: l
  };
}
function cy() {
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
function py(e) {
  function t(o) {
    return e * (o / 100);
  }
  return {
    measure: t
  };
}
function fy(e, t, n, o, a, r, l) {
  const i = [e].concat(o);
  let u, d, c = [], p = !1;
  function v(w) {
    return a.measureSize(l.measure(w));
  }
  function m(w) {
    if (!r) return;
    d = v(e), c = o.map(v);
    function C($) {
      for (const B of $) {
        if (p) return;
        const D = B.target === e, O = o.indexOf(B.target), P = D ? d : c[O], k = v(D ? e : o[O]);
        if (Ie(k - P) >= 0.5) {
          w.reInit(), t.emit("resize");
          break;
        }
      }
    }
    u = new ResizeObserver(($) => {
      (fa(r) || r(w, $)) && C($);
    }), n.requestAnimationFrame(() => {
      i.forEach(($) => u.observe($));
    });
  }
  function f() {
    p = !0, u && u.disconnect();
  }
  return {
    init: m,
    destroy: f
  };
}
function vy(e, t, n, o, a, r) {
  let l = 0, i = 0, u = a, d = r, c = e.get(), p = 0;
  function v() {
    const P = o.get() - e.get(), k = !u;
    let I = 0;
    return k ? (l = 0, n.set(o), e.set(o), I = P) : (n.set(e), l += P / u, l *= d, c += l, e.add(l), I = c - p), i = Jr(I), p = c, O;
  }
  function m() {
    const P = o.get() - t.get();
    return Ie(P) < 1e-3;
  }
  function f() {
    return u;
  }
  function g() {
    return i;
  }
  function w() {
    return l;
  }
  function C() {
    return B(a);
  }
  function $() {
    return D(r);
  }
  function B(P) {
    return u = P, O;
  }
  function D(P) {
    return d = P, O;
  }
  const O = {
    direction: g,
    duration: f,
    velocity: w,
    seek: v,
    settled: m,
    useBaseFriction: $,
    useBaseDuration: C,
    useFriction: D,
    useDuration: B
  };
  return O;
}
function my(e, t, n, o, a) {
  const r = a.measure(10), l = a.measure(50), i = on(0.1, 0.99);
  let u = !1;
  function d() {
    return !(u || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
  }
  function c(m) {
    if (!d()) return;
    const f = e.reachedMin(t.get()) ? "min" : "max", g = Ie(e[f] - t.get()), w = n.get() - t.get(), C = i.constrain(g / l);
    n.subtract(w * C), !m && Ie(w) < r && (n.set(e.constrain(n.get())), o.useDuration(25).useBaseFriction());
  }
  function p(m) {
    u = !m;
  }
  return {
    shouldConstrain: d,
    constrain: c,
    toggleActive: p
  };
}
function gy(e, t, n, o, a) {
  const r = on(-t + e, 0), l = p(), i = c(), u = v();
  function d(f, g) {
    return Jn(f, g) <= 1;
  }
  function c() {
    const f = l[0], g = mt(l), w = l.lastIndexOf(f), C = l.indexOf(g) + 1;
    return on(w, C);
  }
  function p() {
    return n.map((f, g) => {
      const {
        min: w,
        max: C
      } = r, $ = r.constrain(f), B = !g, D = es(n, g);
      return B ? C : D || d(w, $) ? w : d(C, $) ? C : $;
    }).map((f) => parseFloat(f.toFixed(3)));
  }
  function v() {
    if (t <= e + a) return [r.max];
    if (o === "keepSnaps") return l;
    const {
      min: f,
      max: g
    } = i;
    return l.slice(f, g);
  }
  return {
    snapsContained: u,
    scrollContainLimit: i
  };
}
function hy(e, t, n) {
  const o = t[0], a = n ? o - e : mt(t);
  return {
    limit: on(a, o)
  };
}
function yy(e, t, n, o) {
  const r = t.min + 0.1, l = t.max + 0.1, {
    reachedMin: i,
    reachedMax: u
  } = on(r, l);
  function d(v) {
    return v === 1 ? u(n.get()) : v === -1 ? i(n.get()) : !1;
  }
  function c(v) {
    if (!d(v)) return;
    const m = e * (v * -1);
    o.forEach((f) => f.add(m));
  }
  return {
    loop: c
  };
}
function by(e) {
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
function wy(e, t, n, o, a) {
  const {
    startEdge: r,
    endEdge: l
  } = e, {
    groupSlides: i
  } = a, u = p().map(t.measure), d = v(), c = m();
  function p() {
    return i(o).map((g) => mt(g)[l] - g[0][r]).map(Ie);
  }
  function v() {
    return o.map((g) => n[r] - g[r]).map((g) => -Ie(g));
  }
  function m() {
    return i(d).map((g) => g[0]).map((g, w) => g + u[w]);
  }
  return {
    snaps: d,
    snapsAligned: c
  };
}
function _y(e, t, n, o, a, r) {
  const {
    groupSlides: l
  } = a, {
    min: i,
    max: u
  } = o, d = c();
  function c() {
    const v = l(r), m = !e || t === "keepSnaps";
    return n.length === 1 ? [r] : m ? v : v.slice(i, u).map((f, g, w) => {
      const C = !g, $ = es(w, g);
      if (C) {
        const B = mt(w[0]) + 1;
        return Qs(B);
      }
      if ($) {
        const B = yo(r) - mt(w)[0] + 1;
        return Qs(B, mt(w)[0]);
      }
      return f;
    });
  }
  return {
    slideRegistry: d
  };
}
function xy(e, t, n, o, a) {
  const {
    reachedAny: r,
    removeOffset: l,
    constrain: i
  } = o;
  function u(f) {
    return f.concat().sort((g, w) => Ie(g) - Ie(w))[0];
  }
  function d(f) {
    const g = e ? l(f) : i(f), w = t.map(($, B) => ({
      diff: c($ - g, 0),
      index: B
    })).sort(($, B) => Ie($.diff) - Ie(B.diff)), {
      index: C
    } = w[0];
    return {
      index: C,
      distance: g
    };
  }
  function c(f, g) {
    const w = [f, f + n, f - n];
    if (!e) return f;
    if (!g) return u(w);
    const C = w.filter(($) => Jr($) === g);
    return C.length ? u(C) : mt(w) - n;
  }
  function p(f, g) {
    const w = t[f] - a.get(), C = c(w, g);
    return {
      index: f,
      distance: C
    };
  }
  function v(f, g) {
    const w = a.get() + f, {
      index: C,
      distance: $
    } = d(w), B = !e && r(w);
    if (!g || B) return {
      index: C,
      distance: f
    };
    const D = t[C] - $, O = f + c(D, 0);
    return {
      index: C,
      distance: O
    };
  }
  return {
    byDistance: v,
    byIndex: p,
    shortcut: c
  };
}
function Cy(e, t, n, o, a, r, l) {
  function i(p) {
    const v = p.distance, m = p.index !== t.get();
    r.add(v), v && (o.duration() ? e.start() : (e.update(), e.render(1), e.update())), m && (n.set(t.get()), t.set(p.index), l.emit("select"));
  }
  function u(p, v) {
    const m = a.byDistance(p, v);
    i(m);
  }
  function d(p, v) {
    const m = t.clone().set(p), f = a.byIndex(m.get(), v);
    i(f);
  }
  return {
    distance: u,
    index: d
  };
}
function By(e, t, n, o, a, r, l, i) {
  const u = {
    passive: !0,
    capture: !0
  };
  let d = 0;
  function c(m) {
    if (!i) return;
    function f(g) {
      if ((/* @__PURE__ */ new Date()).getTime() - d > 10) return;
      l.emit("slideFocusStart"), e.scrollLeft = 0;
      const $ = n.findIndex((B) => B.includes(g));
      Qr($) && (a.useDuration(0), o.index($, 0), l.emit("slideFocus"));
    }
    r.add(document, "keydown", p, !1), t.forEach((g, w) => {
      r.add(g, "focus", (C) => {
        (fa(i) || i(m, C)) && f(w);
      }, u);
    });
  }
  function p(m) {
    m.code === "Tab" && (d = (/* @__PURE__ */ new Date()).getTime());
  }
  return {
    init: c
  };
}
function Zn(e) {
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
    return Qr(u) ? u : u.get();
  }
  return {
    get: n,
    set: o,
    add: a,
    subtract: r
  };
}
function su(e, t) {
  const n = e.scroll === "x" ? l : i, o = t.style;
  let a = null, r = !1;
  function l(v) {
    return `translate3d(${v}px,0px,0px)`;
  }
  function i(v) {
    return `translate3d(0px,${v}px,0px)`;
  }
  function u(v) {
    if (r) return;
    const m = ry(e.direction(v));
    m !== a && (o.transform = n(m), a = m);
  }
  function d(v) {
    r = !v;
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
function $y(e, t, n, o, a, r, l, i, u) {
  const c = ro(a), p = ro(a).reverse(), v = C().concat($());
  function m(k, I) {
    return k.reduce((F, T) => F - a[T], I);
  }
  function f(k, I) {
    return k.reduce((F, T) => m(F, I) > 0 ? F.concat([T]) : F, []);
  }
  function g(k) {
    return r.map((I, F) => ({
      start: I - o[F] + 0.5 + k,
      end: I + t - 0.5 + k
    }));
  }
  function w(k, I, F) {
    const T = g(I);
    return k.map((V) => {
      const M = F ? 0 : -n, G = F ? n : 0, L = F ? "end" : "start", W = T[V][L];
      return {
        index: V,
        loopPoint: W,
        slideLocation: Zn(-1),
        translate: su(e, u[V]),
        target: () => i.get() > W ? M : G
      };
    });
  }
  function C() {
    const k = l[0], I = f(p, k);
    return w(I, n, !1);
  }
  function $() {
    const k = t - l[0] - 1, I = f(c, k);
    return w(I, -n, !0);
  }
  function B() {
    return v.every(({
      index: k
    }) => {
      const I = c.filter((F) => F !== k);
      return m(I, t) <= 0.1;
    });
  }
  function D() {
    v.forEach((k) => {
      const {
        target: I,
        translate: F,
        slideLocation: T
      } = k, V = I();
      V !== T.get() && (F.to(V), T.set(V));
    });
  }
  function O() {
    v.forEach((k) => k.translate.clear());
  }
  return {
    canLoop: B,
    clear: O,
    loop: D,
    loopPoints: v
  };
}
function Sy(e, t, n) {
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
      a || (fa(n) || n(u, c)) && d(c);
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
function ky(e, t, n, o) {
  const a = {};
  let r = null, l = null, i, u = !1;
  function d() {
    i = new IntersectionObserver((f) => {
      u || (f.forEach((g) => {
        const w = t.indexOf(g.target);
        a[w] = g;
      }), r = null, l = null, n.emit("slidesInView"));
    }, {
      root: e.parentElement,
      threshold: o
    }), t.forEach((f) => i.observe(f));
  }
  function c() {
    i && i.disconnect(), u = !0;
  }
  function p(f) {
    return so(a).reduce((g, w) => {
      const C = parseInt(w), {
        isIntersecting: $
      } = a[C];
      return (f && $ || !f && !$) && g.push(C), g;
    }, []);
  }
  function v(f = !0) {
    if (f && r) return r;
    if (!f && l) return l;
    const g = p(f);
    return f && (r = g), f || (l = g), g;
  }
  return {
    init: d,
    destroy: c,
    get: v
  };
}
function Oy(e, t, n, o, a, r) {
  const {
    measureSize: l,
    startEdge: i,
    endEdge: u
  } = e, d = n[0] && a, c = f(), p = g(), v = n.map(l), m = w();
  function f() {
    if (!d) return 0;
    const $ = n[0];
    return Ie(t[i] - $[i]);
  }
  function g() {
    if (!d) return 0;
    const $ = r.getComputedStyle(mt(o));
    return parseFloat($.getPropertyValue(`margin-${u}`));
  }
  function w() {
    return n.map(($, B, D) => {
      const O = !B, P = es(D, B);
      return O ? v[B] + c : P ? v[B] + p : D[B + 1][i] - $[i];
    }).map(Ie);
  }
  return {
    slideSizes: v,
    slideSizesWithGaps: m,
    startGap: c,
    endGap: p
  };
}
function Ey(e, t, n, o, a, r, l, i, u) {
  const {
    startEdge: d,
    endEdge: c,
    direction: p
  } = e, v = Qr(n);
  function m(C, $) {
    return ro(C).filter((B) => B % $ === 0).map((B) => C.slice(B, B + $));
  }
  function f(C) {
    return C.length ? ro(C).reduce(($, B, D) => {
      const O = mt($) || 0, P = O === 0, k = B === yo(C), I = a[d] - r[O][d], F = a[d] - r[B][c], T = !o && P ? p(l) : 0, V = !o && k ? p(i) : 0, M = Ie(F - V - (I + T));
      return D && M > t + u && $.push(B), k && $.push(C.length), $;
    }, []).map(($, B, D) => {
      const O = Math.max(D[B - 1] || 0);
      return C.slice(O, $);
    }) : [];
  }
  function g(C) {
    return v ? m(C, n) : f(C);
  }
  return {
    groupSlides: g
  };
}
function Py(e, t, n, o, a, r, l) {
  const {
    align: i,
    axis: u,
    direction: d,
    startIndex: c,
    loop: p,
    duration: v,
    dragFree: m,
    dragThreshold: f,
    inViewThreshold: g,
    slidesToScroll: w,
    skipSnaps: C,
    containScroll: $,
    watchResize: B,
    watchSlides: D,
    watchDrag: O,
    watchFocus: P
  } = r, k = 2, I = cy(), F = I.measure(t), T = n.map(I.measure), V = iy(u, d), M = V.measureSize(F), G = py(M), L = sy(i, M), W = !p && !!$, j = p || !!$, {
    slideSizes: Y,
    slideSizesWithGaps: K,
    startGap: H,
    endGap: ue
  } = Oy(V, F, T, n, j, a), se = Ey(V, M, w, p, F, T, H, ue, k), {
    snaps: De,
    snapsAligned: Me
  } = wy(V, L, F, T, se), Ve = -mt(De) + mt(K), {
    snapsContained: Xe,
    scrollContainLimit: ot
  } = gy(M, Ve, Me, $, k), U = W ? Xe : Me, {
    limit: Z
  } = hy(Ve, U, p), ae = ru(yo(U), c, p), pe = ae.clone(), me = ro(n), J = ({
    dragHandler: Et,
    scrollBody: ct,
    scrollBounds: mn,
    options: {
      loop: gn
    }
  }) => {
    gn || mn.constrain(Et.pointerDown()), ct.seek();
  }, he = ({
    scrollBody: Et,
    translate: ct,
    location: mn,
    offsetLocation: gn,
    previousLocation: Pt,
    scrollLooper: hn,
    slideLooper: _o,
    dragHandler: Du,
    animation: Au,
    eventHandler: ls,
    scrollBounds: Tu,
    options: {
      loop: is
    }
  }, us) => {
    const ds = Et.settled(), Iu = !Tu.shouldConstrain(), cs = is ? ds : ds && Iu, ps = cs && !Du.pointerDown();
    ps && Au.stop();
    const Mu = mn.get() * us + Pt.get() * (1 - us);
    gn.set(Mu), is && (hn.loop(Et.direction()), _o.loop()), ct.to(gn.get()), ps && ls.emit("settle"), cs || ls.emit("scroll");
  }, Se = ly(o, a, () => J(Jt), (Et) => he(Jt, Et)), We = 0.68, at = U[ae.get()], dt = Zn(at), ne = Zn(at), $e = Zn(at), Oe = Zn(at), Ce = vy(dt, $e, ne, Oe, v, We), Fe = xy(p, U, Ve, Z, Oe), ze = Cy(Se, ae, pe, Ce, Fe, Oe, l), Ze = by(Z), Ot = lo(), vn = ky(t, n, l, g), {
    slideRegistry: Qt
  } = _y(W, $, U, ot, se, me), wo = By(e, n, Qt, ze, Ce, Ot, l, P), Jt = {
    ownerDocument: o,
    ownerWindow: a,
    eventHandler: l,
    containerRect: F,
    slideRects: T,
    animation: Se,
    axis: V,
    dragHandler: uy(V, e, o, a, Oe, dy(V, a), dt, Se, ze, Ce, Fe, ae, l, G, m, f, C, We, O),
    eventStore: Ot,
    percentOfView: G,
    index: ae,
    indexPrevious: pe,
    limit: Z,
    location: dt,
    offsetLocation: $e,
    previousLocation: ne,
    options: r,
    resizeHandler: fy(t, l, a, n, V, B, I),
    scrollBody: Ce,
    scrollBounds: my(Z, $e, Oe, Ce, G),
    scrollLooper: yy(Ve, Z, $e, [dt, $e, ne, Oe]),
    scrollProgress: Ze,
    scrollSnapList: U.map(Ze.get),
    scrollSnaps: U,
    scrollTarget: Fe,
    scrollTo: ze,
    slideLooper: $y(V, M, Ve, Y, K, De, U, $e, n),
    slideFocus: wo,
    slidesHandler: Sy(t, l, D),
    slidesInView: vn,
    slideIndexes: me,
    slideRegistry: Qt,
    slidesToScroll: se,
    target: Oe,
    translate: su(V, t)
  };
  return Jt;
}
function Dy() {
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
const Ay = {
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
function Ty(e) {
  function t(r, l) {
    return au(r, l || {});
  }
  function n(r) {
    const l = r.breakpoints || {}, i = so(l).filter((u) => e.matchMedia(u).matches).map((u) => l[u]).reduce((u, d) => t(u, d), {});
    return t(r, i);
  }
  function o(r) {
    return r.map((l) => so(l.breakpoints || {})).reduce((l, i) => l.concat(i), []).map(e.matchMedia);
  }
  return {
    mergeOptions: t,
    optionsAtMedia: n,
    optionsMediaQueries: o
  };
}
function Iy(e) {
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
function Ho(e, t, n) {
  const o = e.ownerDocument, a = o.defaultView, r = Ty(a), l = Iy(r), i = lo(), u = Dy(), {
    mergeOptions: d,
    optionsAtMedia: c,
    optionsMediaQueries: p
  } = r, {
    on: v,
    off: m,
    emit: f
  } = u, g = V;
  let w = !1, C, $ = d(Ay, Ho.globalOptions), B = d($), D = [], O, P, k;
  function I() {
    const {
      container: me,
      slides: J
    } = B;
    P = (Ja(me) ? e.querySelector(me) : me) || e.children[0];
    const Se = Ja(J) ? P.querySelectorAll(J) : J;
    k = [].slice.call(Se || P.children);
  }
  function F(me) {
    const J = Py(e, P, k, o, a, me, u);
    if (me.loop && !J.slideLooper.canLoop()) {
      const he = Object.assign({}, me, {
        loop: !1
      });
      return F(he);
    }
    return J;
  }
  function T(me, J) {
    w || ($ = d($, me), B = c($), D = J || D, I(), C = F(B), p([$, ...D.map(({
      options: he
    }) => he)]).forEach((he) => i.add(he, "change", V)), B.active && (C.translate.to(C.location.get()), C.animation.init(), C.slidesInView.init(), C.slideFocus.init(pe), C.eventHandler.init(pe), C.resizeHandler.init(pe), C.slidesHandler.init(pe), C.options.loop && C.slideLooper.loop(), P.offsetParent && k.length && C.dragHandler.init(pe), O = l.init(pe, D)));
  }
  function V(me, J) {
    const he = se();
    M(), T(d({
      startIndex: he
    }, me), J), u.emit("reInit");
  }
  function M() {
    C.dragHandler.destroy(), C.eventStore.clear(), C.translate.clear(), C.slideLooper.clear(), C.resizeHandler.destroy(), C.slidesHandler.destroy(), C.slidesInView.destroy(), C.animation.destroy(), l.destroy(), i.clear();
  }
  function G() {
    w || (w = !0, i.clear(), M(), u.emit("destroy"), u.clear());
  }
  function L(me, J, he) {
    !B.active || w || (C.scrollBody.useBaseFriction().useDuration(J === !0 ? 0 : B.duration), C.scrollTo.index(me, he || 0));
  }
  function W(me) {
    const J = C.index.add(1).get();
    L(J, me, -1);
  }
  function j(me) {
    const J = C.index.add(-1).get();
    L(J, me, 1);
  }
  function Y() {
    return C.index.add(1).get() !== se();
  }
  function K() {
    return C.index.add(-1).get() !== se();
  }
  function H() {
    return C.scrollSnapList;
  }
  function ue() {
    return C.scrollProgress.get(C.offsetLocation.get());
  }
  function se() {
    return C.index.get();
  }
  function De() {
    return C.indexPrevious.get();
  }
  function Me() {
    return C.slidesInView.get();
  }
  function Ve() {
    return C.slidesInView.get(!1);
  }
  function Xe() {
    return O;
  }
  function ot() {
    return C;
  }
  function U() {
    return e;
  }
  function Z() {
    return P;
  }
  function ae() {
    return k;
  }
  const pe = {
    canScrollNext: Y,
    canScrollPrev: K,
    containerNode: Z,
    internalEngine: ot,
    destroy: G,
    off: m,
    on: v,
    emit: f,
    plugins: Xe,
    previousScrollSnap: De,
    reInit: g,
    rootNode: U,
    scrollNext: W,
    scrollPrev: j,
    scrollProgress: ue,
    scrollSnapList: H,
    scrollTo: L,
    selectedScrollSnap: se,
    slideNodes: ae,
    slidesInView: Me,
    slidesNotInView: Ve
  };
  return T(t, n), setTimeout(() => u.emit("init"), 0), pe;
}
Ho.globalOptions = void 0;
function ts(e = {}, t = []) {
  const n = st(e), o = st(t);
  let a = n ? e.value : e, r = o ? t.value : t;
  const l = Sn(), i = Sn();
  function u() {
    i.value && i.value.reInit(a, r);
  }
  return ie(() => {
    !ny() || !l.value || (Ho.globalOptions = ts.globalOptions, i.value = Ho(l.value, a, r));
  }), Tn(() => {
    i.value && i.value.destroy();
  }), n && te(e, (d) => {
    Zr(a, d) || (a = d, u());
  }), o && te(t, (d) => {
    oy(r, d) || (r = d, u());
  }), [l, i];
}
ts.globalOptions = void 0;
const [My, Fy] = Wh(
  ({ opts: e, orientation: t, plugins: n }, o) => {
    const [a, r] = ts(
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
    const u = E(!1), d = E(!1);
    function c(p) {
      u.value = (p == null ? void 0 : p.canScrollNext()) || !1, d.value = (p == null ? void 0 : p.canScrollPrev()) || !1;
    }
    return ie(() => {
      var p, v, m;
      r.value && ((p = r.value) == null || p.on("init", c), (v = r.value) == null || v.on("reInit", c), (m = r.value) == null || m.on("select", c), o("init-api", r.value));
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
function va() {
  const e = Fy();
  if (!e) throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const W_ = /* @__PURE__ */ b({
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
    } = My(o, a);
    t({
      canScrollNext: r,
      canScrollPrev: l,
      carouselApi: i,
      carouselRef: u,
      orientation: d,
      scrollNext: c,
      scrollPrev: p
    });
    function v(m) {
      const f = o.orientation === "vertical" ? "ArrowUp" : "ArrowLeft", g = o.orientation === "vertical" ? "ArrowDown" : "ArrowRight";
      if (m.key === f) {
        m.preventDefault(), p();
        return;
      }
      m.key === g && (m.preventDefault(), c());
    }
    return (m, f) => (h(), q("div", {
      class: le(s(z)("relative", o.class)),
      role: "region",
      "aria-roledescription": "carousel",
      tabindex: "0",
      onKeydown: v
    }, [
      _(m.$slots, "default", {
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
}), U_ = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "CarouselContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { carouselRef: n, orientation: o } = va();
    return (a, r) => (h(), q("div", {
      ref_key: "carouselRef",
      ref: n,
      class: "overflow-hidden"
    }, [
      oe("div", A({
        class: s(z)("flex", s(o) === "horizontal" ? "-ml-4" : "-mt-4 flex-col", t.class)
      }, a.$attrs), [
        _(a.$slots, "default")
      ], 16)
    ], 512));
  }
}), G_ = /* @__PURE__ */ b({
  __name: "CarouselItem",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { orientation: n } = va();
    return (o, a) => (h(), q("div", {
      role: "group",
      "aria-roledescription": "slide",
      class: le(
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
}), Y_ = /* @__PURE__ */ b({
  __name: "CarouselPrevious",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { orientation: n, canScrollPrev: o, scrollPrev: a } = va();
    return (r, l) => (h(), x(s(Gi), {
      disabled: !s(o),
      class: le(
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
          R(s(yh), { class: "size-4 text-current" }),
          l[0] || (l[0] = oe("span", { class: "sr-only" }, "Previous Slide", -1))
        ])
      ]),
      _: 3
    }, 8, ["disabled", "class", "onClick"]));
  }
}), X_ = /* @__PURE__ */ b({
  __name: "CarouselNext",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { orientation: n, canScrollNext: o, scrollNext: a } = va();
    return (r, l) => (h(), x(s(Gi), {
      disabled: !s(o),
      class: le(
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
          R(s(bh), { class: "size-4 text-current" }),
          l[0] || (l[0] = oe("span", { class: "sr-only" }, "Next Slide", -1))
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
const Ry = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Eo = {
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
const Ly = ({ size: e, strokeWidth: t = 2, absoluteStrokeWidth: n, color: o, iconNode: a, name: r, class: l, ...i }, { slots: u }) => Ge(
  "svg",
  {
    ...Eo,
    width: e || Eo.width,
    height: e || Eo.height,
    stroke: o || Eo.stroke,
    "stroke-width": n ? Number(t) * 24 / Number(e) : t,
    class: ["lucide", `lucide-${Ry(r ?? "icon")}`],
    ...i
  },
  [...a.map((d) => Ge(...d)), ...u.default ? [u.default()] : []]
);
/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ma = (e, t) => (n, { slots: o }) => Ge(
  Ly,
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
const Vy = ma("CheckIcon", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lu = ma("ChevronLeftIcon", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iu = ma("ChevronRightIcon", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zy = ma("EllipsisIcon", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
]);
function Js(e) {
  return typeof e == "string" ? `'${e}'` : new qy().serialize(e);
}
const qy = /* @__PURE__ */ function() {
  var t;
  class e {
    constructor() {
      vs(this, t, /* @__PURE__ */ new Map());
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
      let a = Un(this, t).get(o);
      return a === void 0 && (Un(this, t).set(o, `#${Un(this, t).size}`), a = this.serializeObject(o), Un(this, t).set(o, a)), a;
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
function Dn(e, t) {
  return e === t || Js(e) === Js(t);
}
function Ny(e, t, n) {
  const o = e.findIndex((i) => Dn(i, t)), a = e.findIndex((i) => Dn(i, n));
  if (o === -1 || a === -1) return [];
  const [r, l] = [o, a].sort((i, u) => i - u);
  return e.slice(r, l + 1);
}
function Ye(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, o = Symbol(n);
  return [(l) => {
    const i = In(o, l);
    if (i || i === null) return i;
    throw new Error(`Injection \`${o.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(", ")}` : `\`${e}\``}`);
  }, (l) => (Mn(o, l), l)];
}
function gt() {
  let e = document.activeElement;
  if (e == null) return null;
  for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null; ) e = e.shadowRoot.activeElement;
  return e;
}
function ns(e, t, n) {
  const o = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, { once: !0 }), o.dispatchEvent(a);
}
function tr(e) {
  return e == null;
}
function el(e, t) {
  return tr(e) ? !1 : Array.isArray(e) ? e.some((n) => Dn(n, t)) : Dn(e, t);
}
function os(e) {
  return e ? e.flatMap((t) => t.type === Be ? os(t.children) : [t]) : [];
}
const [ga] = Ye("ConfigProvider");
function jy(e, t) {
  var n;
  const o = Sn();
  return xe(() => {
    o.value = e();
  }, {
    ...t,
    flush: (n = void 0) != null ? n : "sync"
  }), Yo(o);
}
function ha(e) {
  return sr() ? (lr(e), !0) : !1;
}
function Lo() {
  const e = /* @__PURE__ */ new Set(), t = (r) => {
    e.delete(r);
  };
  return {
    on: (r) => {
      e.add(r);
      const l = () => t(r);
      return ha(l), {
        off: l
      };
    },
    off: t,
    trigger: (...r) => Promise.all(Array.from(e).map((l) => l(...r))),
    clear: () => {
      e.clear();
    }
  };
}
function Ky(e) {
  let t = !1, n;
  const o = Xo(!0);
  return (...a) => (t || (n = o.run(() => e(...a)), t = !0), n);
}
function Hy(e) {
  let t = 0, n, o;
  const a = () => {
    t -= 1, o && t <= 0 && (o.stop(), n = void 0, o = void 0);
  };
  return (...r) => (t += 1, o || (o = Xo(!0), n = o.run(() => e(...r))), ha(a), n);
}
const cn = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Wy = (e) => typeof e < "u", Uy = Object.prototype.toString, Gy = (e) => Uy.call(e) === "[object Object]", tl = /* @__PURE__ */ Yy();
function Yy() {
  var e, t;
  return cn && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function Xy(e) {
  return Ue();
}
function Ia(e) {
  return Array.isArray(e) ? e : [e];
}
function uu(e, t = 1e4) {
  return gl((n, o) => {
    let a = Je(e), r;
    const l = () => setTimeout(() => {
      a = Je(e), o();
    }, Je(t));
    return ha(() => {
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
const Zy = Je;
function Qy(e, t) {
  Xy() && Tn(e, t);
}
function Jy(e, t, n) {
  return te(
    e,
    t,
    {
      ...n,
      immediate: !0
    }
  );
}
const as = cn ? window : void 0;
function pn(e) {
  var t;
  const n = Je(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
function rs(...e) {
  const t = [], n = () => {
    t.forEach((i) => i()), t.length = 0;
  }, o = (i, u, d, c) => (i.addEventListener(u, d, c), () => i.removeEventListener(u, d, c)), a = S(() => {
    const i = Ia(Je(e[0])).filter((u) => u != null);
    return i.every((u) => typeof u != "string") ? i : void 0;
  }), r = Jy(
    () => {
      var i, u;
      return [
        (u = (i = a.value) == null ? void 0 : i.map((d) => pn(d))) != null ? u : [as].filter((d) => d != null),
        Ia(Je(a.value ? e[1] : e[0])),
        Ia(s(a.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        Je(a.value ? e[3] : e[2])
      ];
    },
    ([i, u, d, c]) => {
      if (n(), !(i != null && i.length) || !(u != null && u.length) || !(d != null && d.length))
        return;
      const p = Gy(c) ? { ...c } : c;
      t.push(
        ...i.flatMap(
          (v) => u.flatMap(
            (m) => d.map((f) => o(v, m, f, p))
          )
        )
      );
    },
    { flush: "post" }
  ), l = () => {
    r(), n();
  };
  return ha(n), l;
}
function e0() {
  const e = Sn(!1), t = Ue();
  return t && ie(() => {
    e.value = !0;
  }, t), e;
}
function t0(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function n0(...e) {
  let t, n, o = {};
  e.length === 3 ? (t = e[0], n = e[1], o = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], o = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: a = as,
    eventName: r = "keydown",
    passive: l = !1,
    dedupe: i = !1
  } = o, u = t0(t);
  return rs(a, r, (c) => {
    c.repeat && Je(i) || u(c) && n(c);
  }, l);
}
function o0(e) {
  return JSON.parse(JSON.stringify(e));
}
function Lt(e, t, n, o = {}) {
  var a, r, l;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: c = !1,
    defaultValue: p,
    shouldEmit: v
  } = o, m = Ue(), f = n || (m == null ? void 0 : m.emit) || ((a = m == null ? void 0 : m.$emit) == null ? void 0 : a.bind(m)) || ((l = (r = m == null ? void 0 : m.proxy) == null ? void 0 : r.$emit) == null ? void 0 : l.bind(m == null ? void 0 : m.proxy));
  let g = d;
  t || (t = "modelValue"), g = g || `update:${t.toString()}`;
  const w = (B) => i ? typeof i == "function" ? i(B) : o0(B) : B, C = () => Wy(e[t]) ? w(e[t]) : p, $ = (B) => {
    v ? v(B) && f(g, B) : f(g, B);
  };
  if (u) {
    const B = C(), D = E(B);
    let O = !1;
    return te(
      () => e[t],
      (P) => {
        O || (O = !0, D.value = w(P), re(() => O = !1));
      }
    ), te(
      D,
      (P) => {
        !O && (P !== e[t] || c) && $(P);
      },
      { deep: c }
    ), D;
  } else
    return S({
      get() {
        return C();
      },
      set(B) {
        $(B);
      }
    });
}
function Ma(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function nr(e, t, n = ".", o) {
  if (!Ma(t))
    return nr(e, {}, n, o);
  const a = Object.assign({}, t);
  for (const r in e) {
    if (r === "__proto__" || r === "constructor")
      continue;
    const l = e[r];
    l != null && (o && o(a, r, l, n) || (Array.isArray(l) && Array.isArray(a[r]) ? a[r] = [...l, ...a[r]] : Ma(l) && Ma(a[r]) ? a[r] = nr(
      l,
      a[r],
      (n ? `${n}.` : "") + r.toString(),
      o
    ) : a[r] = l));
  }
  return a;
}
function a0(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, o) => nr(n, o, "", e), {})
  );
}
const r0 = a0(), s0 = Hy(() => {
  const e = E(/* @__PURE__ */ new Map()), t = E(), n = S(() => {
    for (const l of e.value.values()) if (l) return !0;
    return !1;
  }), o = ga({ scrollBody: E(!0) });
  let a = null;
  const r = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.documentElement.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", tl && (a == null || a()), t.value = void 0;
  };
  return te(n, (l, i) => {
    var p;
    if (!cn) return;
    if (!l) {
      i && r();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const u = window.innerWidth - document.documentElement.clientWidth, d = {
      padding: u,
      margin: 0
    }, c = (p = o.scrollBody) != null && p.value ? typeof o.scrollBody.value == "object" ? r0({
      padding: o.scrollBody.value.padding === !0 ? u : o.scrollBody.value.padding,
      margin: o.scrollBody.value.margin === !0 ? u : o.scrollBody.value.margin
    }, d) : d : {
      padding: 0,
      margin: 0
    };
    u > 0 && (document.body.style.paddingRight = typeof c.padding == "number" ? `${c.padding}px` : String(c.padding), document.body.style.marginRight = typeof c.margin == "number" ? `${c.margin}px` : String(c.margin), document.documentElement.style.setProperty("--scrollbar-width", `${u}px`), document.body.style.overflow = "hidden"), tl && (a = rs(document, "touchmove", (v) => l0(v), { passive: !1 })), re(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, {
    immediate: !0,
    flush: "sync"
  }), e;
});
function du(e) {
  const t = Math.random().toString(36).substring(2, 7), n = s0();
  n.value.set(t, e ?? !1);
  const o = S({
    get: () => n.value.get(t) ?? !1,
    set: (a) => n.value.set(t, a)
  });
  return Qy(() => {
    n.value.delete(t);
  }), o;
}
function cu(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight) return !0;
  {
    const n = e.parentNode;
    return !(n instanceof Element) || n.tagName === "BODY" ? !1 : cu(n);
  }
}
function l0(e) {
  const t = e || window.event, n = t.target;
  return n instanceof Element && cu(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
function pu(e) {
  const t = ga({ dir: E("ltr") });
  return S(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.dir) == null ? void 0 : n.value) || "ltr";
  });
}
function ya(e) {
  const t = Ue(), n = t == null ? void 0 : t.type.emits, o = {};
  return n != null && n.length || console.warn(`No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`), n == null || n.forEach((a) => {
    o[fl(Uo(a))] = (...r) => e(a, ...r);
  }), o;
}
function i0(e) {
  const t = S(() => s(e)), n = S(() => new Intl.Collator("en", {
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
        const c = l.slice(u, u + d);
        if (n.value.compare(i, c) === 0) return !0;
      }
      return !1;
    }
  };
}
function fu(e) {
  return S(() => {
    var t;
    return Zy(e) ? !!((t = pn(e)) != null && t.closest("form")) : !0;
  });
}
function be() {
  const e = Ue(), t = E(), n = S(() => {
    var l, i;
    return ["#text", "#comment"].includes((l = t.value) == null ? void 0 : l.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : pn(t);
  }), o = Object.assign({}, e.exposed), a = {};
  for (const l in e.props) Object.defineProperty(a, l, {
    enumerable: !0,
    configurable: !0,
    get: () => e.props[l]
  });
  if (Object.keys(o).length > 0) for (const l in o) Object.defineProperty(a, l, {
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
  return {
    forwardRef: r,
    currentRef: t,
    currentElement: n
  };
}
function fn(e) {
  const t = Ue(), n = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((a, r) => {
    const l = (t == null ? void 0 : t.type.props[r]).default;
    return l !== void 0 && (a[r] = l), a;
  }, {}), o = dl(e);
  return S(() => {
    const a = {}, r = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(r).forEach((l) => {
      a[Uo(l)] = r[l];
    }), Object.keys({
      ...n,
      ...a
    }).reduce((l, i) => (o.value[i] !== void 0 && (l[i] = o.value[i]), l), {});
  });
}
function St(e, t) {
  const n = fn(e), o = t ? ya(t) : {};
  return S(() => ({
    ...n.value,
    ...o
  }));
}
var u0 = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, wn = /* @__PURE__ */ new WeakMap(), Po = /* @__PURE__ */ new WeakMap(), Do = {}, Fa = 0, vu = function(e) {
  return e && (e.host || vu(e.parentNode));
}, d0 = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = vu(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, c0 = function(e, t, n, o) {
  var a = d0(t, Array.isArray(e) ? e : [e]);
  Do[n] || (Do[n] = /* @__PURE__ */ new WeakMap());
  var r = Do[n], l = [], i = /* @__PURE__ */ new Set(), u = new Set(a), d = function(p) {
    !p || i.has(p) || (i.add(p), d(p.parentNode));
  };
  a.forEach(d);
  var c = function(p) {
    !p || u.has(p) || Array.prototype.forEach.call(p.children, function(v) {
      if (i.has(v))
        c(v);
      else
        try {
          var m = v.getAttribute(o), f = m !== null && m !== "false", g = (wn.get(v) || 0) + 1, w = (r.get(v) || 0) + 1;
          wn.set(v, g), r.set(v, w), l.push(v), g === 1 && f && Po.set(v, !0), w === 1 && v.setAttribute(n, "true"), f || v.setAttribute(o, "true");
        } catch (C) {
          console.error("aria-hidden: cannot operate on ", v, C);
        }
    });
  };
  return c(t), i.clear(), Fa++, function() {
    l.forEach(function(p) {
      var v = wn.get(p) - 1, m = r.get(p) - 1;
      wn.set(p, v), r.set(p, m), v || (Po.has(p) || p.removeAttribute(o), Po.delete(p)), m || p.removeAttribute(n);
    }), Fa--, Fa || (wn = /* @__PURE__ */ new WeakMap(), wn = /* @__PURE__ */ new WeakMap(), Po = /* @__PURE__ */ new WeakMap(), Do = {});
  };
}, p0 = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), a = u0(e);
  return a ? (o.push.apply(o, Array.from(a.querySelectorAll("[aria-live], script"))), c0(o, a, n, "aria-hidden")) : function() {
    return null;
  };
};
function mu(e) {
  let t;
  te(() => pn(e), (n) => {
    n ? t = p0(n) : t && t();
  }), Ne(() => {
    t && t();
  });
}
let f0 = 0;
function bt(e, t = "reka") {
  var o;
  if ("useId" in xn) return `${t}-${(o = xn.useId) == null ? void 0 : o.call(xn)}`;
  const n = ga({ useId: void 0 });
  return n.useId ? `${t}-${n.useId()}` : `${t}-${++f0}`;
}
function v0() {
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
function m0(e) {
  const t = E(), n = S(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.width) ?? 0;
  }), o = S(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.height) ?? 0;
  });
  return ie(() => {
    const a = pn(e);
    if (a) {
      t.value = {
        width: a.offsetWidth,
        height: a.offsetHeight
      };
      const r = new ResizeObserver((l) => {
        if (!Array.isArray(l) || !l.length) return;
        const i = l[0];
        let u, d;
        if ("borderBoxSize" in i) {
          const c = i.borderBoxSize, p = Array.isArray(c) ? c[0] : c;
          u = p.inlineSize, d = p.blockSize;
        } else
          u = a.offsetWidth, d = a.offsetHeight;
        t.value = {
          width: u,
          height: d
        };
      });
      return r.observe(a, { box: "border-box" }), () => r.unobserve(a);
    } else t.value = void 0;
  }), {
    width: n,
    height: o
  };
}
function g0(e, t) {
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
function h0(e) {
  const t = uu("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (a, r) => {
      t.value = t.value + a;
      {
        const l = gt(), i = r.map((v) => {
          var m, f;
          return {
            ...v,
            textValue: ((m = v.value) == null ? void 0 : m.textValue) ?? ((f = v.ref.textContent) == null ? void 0 : f.trim()) ?? ""
          };
        }), u = i.find((v) => v.ref === l), d = i.map((v) => v.textValue), c = b0(d, t.value, u == null ? void 0 : u.textValue), p = i.find((v) => v.textValue === c);
        return p && p.ref.focus(), p == null ? void 0 : p.ref;
      }
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function y0(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
function b0(e, t, n) {
  const a = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, r = n ? e.indexOf(n) : -1;
  let l = y0(e, Math.max(r, 0));
  a.length === 1 && (l = l.filter((d) => d !== n));
  const u = l.find((d) => d.toLowerCase().startsWith(a.toLowerCase()));
  return u !== n ? u : void 0;
}
function w0(e, t) {
  var w;
  const n = E({}), o = E("none"), a = E(e), r = e.value ? "mounted" : "unmounted";
  let l;
  const i = ((w = t.value) == null ? void 0 : w.ownerDocument.defaultView) ?? as, { state: u, dispatch: d } = g0(r, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: { MOUNT: "mounted" }
  }), c = (C) => {
    var $;
    if (cn) {
      const B = new CustomEvent(C, {
        bubbles: !1,
        cancelable: !1
      });
      ($ = t.value) == null || $.dispatchEvent(B);
    }
  };
  te(e, async (C, $) => {
    var D;
    const B = $ !== C;
    if (await re(), B) {
      const O = o.value, P = Ao(t.value);
      C ? (d("MOUNT"), c("enter"), P === "none" && c("after-enter")) : P === "none" || P === "undefined" || ((D = n.value) == null ? void 0 : D.display) === "none" ? (d("UNMOUNT"), c("leave"), c("after-leave")) : $ && O !== P ? (d("ANIMATION_OUT"), c("leave")) : (d("UNMOUNT"), c("after-leave"));
    }
  }, { immediate: !0 });
  const p = (C) => {
    const $ = Ao(t.value), B = $.includes(CSS.escape(C.animationName)), D = u.value === "mounted" ? "enter" : "leave";
    if (C.target === t.value && B && (c(`after-${D}`), d("ANIMATION_END"), !a.value)) {
      const O = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", l = i == null ? void 0 : i.setTimeout(() => {
        var P;
        ((P = t.value) == null ? void 0 : P.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = O);
      });
    }
    C.target === t.value && $ === "none" && d("ANIMATION_END");
  }, v = (C) => {
    C.target === t.value && (o.value = Ao(t.value));
  }, m = te(t, (C, $) => {
    C ? (n.value = getComputedStyle(C), C.addEventListener("animationstart", v), C.addEventListener("animationcancel", p), C.addEventListener("animationend", p)) : (d("ANIMATION_END"), l !== void 0 && (i == null || i.clearTimeout(l)), $ == null || $.removeEventListener("animationstart", v), $ == null || $.removeEventListener("animationcancel", p), $ == null || $.removeEventListener("animationend", p));
  }, { immediate: !0 }), f = te(u, () => {
    const C = Ao(t.value);
    o.value = u.value === "mounted" ? C : "none";
  });
  return Ne(() => {
    m(), f();
  }), { isPresent: S(() => ["mounted", "unmountSuspended"].includes(u.value)) };
}
function Ao(e) {
  return e && getComputedStyle(e).animationName || "none";
}
var bo = b({
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
    const { present: o, forceMount: a } = we(e), r = E(), { isPresent: l } = w0(o, r);
    n({ present: l });
    let i = t.default({ present: l.value });
    i = os(i || []);
    const u = Ue();
    if (i && (i == null ? void 0 : i.length) > 1) {
      const c = (d = u == null ? void 0 : u.parent) != null && d.type.name ? `<${u.parent.type.name} />` : "component";
      throw new Error([
        `Detected an invalid children for \`${c}\` for  \`Presence\` component.`,
        "",
        "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",
        "You can apply a few solutions:",
        ["Provide a single child element so that `presence` directive attach correctly.", "Ensure the first child is an actual element instead of a raw text node or comment node."].map((p) => `  - ${p}`).join(`
`)
      ].join(`
`));
    }
    return () => a.value || o.value || l.value ? Ge(t.default({ present: l.value })[0], { ref: (c) => {
      const p = pn(c);
      return typeof (p == null ? void 0 : p.hasAttribute) > "u" || (p != null && p.hasAttribute("data-reka-popper-content-wrapper") ? r.value = p.firstElementChild : r.value = p), p;
    } }) : null;
  }
});
const or = b({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      var u;
      if (!n.default) return null;
      const o = os(n.default()), a = o.findIndex((d) => d.type !== ur);
      if (a === -1) return o;
      const r = o[a];
      (u = r.props) == null || delete u.ref;
      const l = r.props ? A(t, r.props) : t, i = vl({
        ...r,
        props: {}
      }, l);
      return o.length === 1 ? i : (o[a] = i, o);
    };
  }
}), _0 = [
  "area",
  "img",
  "input"
], ge = b({
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
    return typeof o == "string" && _0.includes(o) ? () => Ge(o, t) : o !== "template" ? () => Ge(e.as, t, { default: n.default }) : () => Ge(or, t, { default: n.default });
  }
});
function Gt() {
  const e = E(), t = S(() => {
    var n, o;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (o = e.value) == null ? void 0 : o.$el.nextElementSibling : pn(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
const [gu, x0] = Ye("CollapsibleRoot");
var C0 = /* @__PURE__ */ b({
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
    const o = e, r = Lt(o, "open", n, {
      defaultValue: o.defaultOpen,
      passive: o.open === void 0
    }), { disabled: l, unmountOnHide: i } = we(o);
    return x0({
      contentId: "",
      disabled: l,
      open: r,
      unmountOnHide: i,
      onOpenToggle: () => {
        l.value || (r.value = !r.value);
      }
    }), t({ open: r }), be(), (u, d) => (h(), x(s(ge), {
      as: u.as,
      "as-child": o.asChild,
      "data-state": s(r) ? "open" : "closed",
      "data-disabled": s(l) ? "" : void 0
    }, {
      default: y(() => [_(u.$slots, "default", { open: s(r) })]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "data-state",
      "data-disabled"
    ]));
  }
}), B0 = C0, $0 = /* @__PURE__ */ b({
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
    const n = e, o = t, a = gu();
    a.contentId || (a.contentId = bt(void 0, "reka-collapsible-content"));
    const r = E(), { forwardRef: l, currentElement: i } = be(), u = E(0), d = E(0), c = S(() => a.open.value), p = E(c.value), v = E();
    te(() => {
      var f;
      return [c.value, (f = r.value) == null ? void 0 : f.present];
    }, async () => {
      await re();
      const f = i.value;
      if (!f) return;
      v.value = v.value || {
        transitionDuration: f.style.transitionDuration,
        animationName: f.style.animationName
      }, f.style.transitionDuration = "0s", f.style.animationName = "none";
      const g = f.getBoundingClientRect();
      d.value = g.height, u.value = g.width, p.value || (f.style.transitionDuration = v.value.transitionDuration, f.style.animationName = v.value.animationName);
    }, { immediate: !0 });
    const m = S(() => p.value && a.open.value);
    return ie(() => {
      requestAnimationFrame(() => {
        p.value = !1;
      });
    }), rs(i, "beforematch", (f) => {
      requestAnimationFrame(() => {
        a.onOpenToggle(), o("contentFound");
      });
    }), (f, g) => (h(), x(s(bo), {
      ref_key: "presentRef",
      ref: r,
      present: f.forceMount || s(a).open.value,
      "force-mount": !0
    }, {
      default: y(({ present: w }) => {
        var C;
        return [R(s(ge), A(f.$attrs, {
          id: s(a).contentId,
          ref: s(l),
          "as-child": n.asChild,
          as: f.as,
          hidden: w ? void 0 : s(a).unmountOnHide.value ? "" : "until-found",
          "data-state": m.value ? void 0 : s(a).open.value ? "open" : "closed",
          "data-disabled": (C = s(a).disabled) != null && C.value ? "" : void 0,
          style: {
            "--reka-collapsible-content-height": `${d.value}px`,
            "--reka-collapsible-content-width": `${u.value}px`
          }
        }), {
          default: y(() => [!s(a).unmountOnHide.value || w ? _(f.$slots, "default", { key: 0 }) : ce("v-if", !0)]),
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
}), S0 = $0, k0 = /* @__PURE__ */ b({
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
    be();
    const n = gu();
    return (o, a) => {
      var r, l;
      return h(), x(s(ge), {
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
        default: y(() => [_(o.$slots, "default")]),
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
}), O0 = k0;
const [kt, E0] = Ye("DialogRoot");
var P0 = /* @__PURE__ */ b({
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
    const n = e, a = Lt(n, "open", t, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), r = E(), l = E(), { modal: i } = we(n);
    return E0({
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
    }), (u, d) => _(u.$slots, "default", {
      open: s(a),
      close: () => a.value = !1
    });
  }
}), D0 = P0, A0 = /* @__PURE__ */ b({
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
    be();
    const n = kt();
    return (o, a) => (h(), x(s(ge), A(t, {
      type: o.as === "button" ? "button" : void 0,
      onClick: a[0] || (a[0] = (r) => s(n).onOpenChange(!1))
    }), {
      default: y(() => [_(o.$slots, "default")]),
      _: 3
    }, 16, ["type"]));
  }
}), T0 = A0;
const I0 = "dismissableLayer.pointerDownOutside", M0 = "dismissableLayer.focusOutside";
function hu(e, t) {
  const n = t.closest("[data-dismissable-layer]"), o = e.dataset.dismissableLayer === "" ? e : e.querySelector("[data-dismissable-layer]"), a = Array.from(e.ownerDocument.querySelectorAll("[data-dismissable-layer]"));
  return !!(n && (o === n || a.indexOf(o) < a.indexOf(n)));
}
function F0(e, t, n = !0) {
  var l;
  const o = ((l = t == null ? void 0 : t.value) == null ? void 0 : l.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), a = E(!1), r = E(() => {
  });
  return xe((i) => {
    if (!cn || !Je(n)) return;
    const u = async (c) => {
      const p = c.target;
      if (!(!(t != null && t.value) || !p)) {
        if (hu(t.value, p)) {
          a.value = !1;
          return;
        }
        if (c.target && !a.value) {
          let m = function() {
            ns(I0, e, v);
          };
          const v = { originalEvent: c };
          c.pointerType === "touch" ? (o.removeEventListener("click", r.value), r.value = m, o.addEventListener("click", r.value, { once: !0 })) : m();
        } else o.removeEventListener("click", r.value);
        a.value = !1;
      }
    }, d = window.setTimeout(() => {
      o.addEventListener("pointerdown", u);
    }, 0);
    i(() => {
      window.clearTimeout(d), o.removeEventListener("pointerdown", u), o.removeEventListener("click", r.value);
    });
  }), { onPointerDownCapture: () => {
    Je(n) && (a.value = !0);
  } };
}
function R0(e, t, n = !0) {
  var r;
  const o = ((r = t == null ? void 0 : t.value) == null ? void 0 : r.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), a = E(!1);
  return xe((l) => {
    if (!cn || !Je(n)) return;
    const i = async (u) => {
      if (!(t != null && t.value)) return;
      await re(), await re();
      const d = u.target;
      !t.value || !d || hu(t.value, d) || u.target && !a.value && ns(M0, e, { originalEvent: u });
    };
    o.addEventListener("focusin", i), l(() => o.removeEventListener("focusin", i));
  }), {
    onFocusCapture: () => {
      Je(n) && (a.value = !0);
    },
    onBlurCapture: () => {
      Je(n) && (a.value = !1);
    }
  };
}
const Tt = kn({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
});
var L0 = /* @__PURE__ */ b({
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
    const n = e, o = t, { forwardRef: a, currentElement: r } = be(), l = S(() => {
      var f;
      return ((f = r.value) == null ? void 0 : f.ownerDocument) ?? globalThis.document;
    }), i = S(() => Tt.layersRoot), u = S(() => r.value ? Array.from(i.value).indexOf(r.value) : -1), d = S(() => Tt.layersWithOutsidePointerEventsDisabled.size > 0), c = S(() => {
      const f = Array.from(i.value), [g] = [...Tt.layersWithOutsidePointerEventsDisabled].slice(-1), w = f.indexOf(g);
      return u.value >= w;
    }), p = F0(async (f) => {
      const g = [...Tt.branches].some((w) => w == null ? void 0 : w.contains(f.target));
      !c.value || g || (o("pointerDownOutside", f), o("interactOutside", f), await re(), f.defaultPrevented || o("dismiss"));
    }, r), v = R0((f) => {
      [...Tt.branches].some((w) => w == null ? void 0 : w.contains(f.target)) || (o("focusOutside", f), o("interactOutside", f), f.defaultPrevented || o("dismiss"));
    }, r);
    n0("Escape", (f) => {
      u.value === i.value.size - 1 && (o("escapeKeyDown", f), f.defaultPrevented || o("dismiss"));
    });
    let m;
    return xe((f) => {
      r.value && (n.disableOutsidePointerEvents && (Tt.layersWithOutsidePointerEventsDisabled.size === 0 && (m = l.value.body.style.pointerEvents, l.value.body.style.pointerEvents = "none"), Tt.layersWithOutsidePointerEventsDisabled.add(r.value)), i.value.add(r.value), f(() => {
        n.disableOutsidePointerEvents && Tt.layersWithOutsidePointerEventsDisabled.size === 1 && (l.value.body.style.pointerEvents = m);
      }));
    }), xe((f) => {
      f(() => {
        r.value && (i.value.delete(r.value), Tt.layersWithOutsidePointerEventsDisabled.delete(r.value));
      });
    }), (f, g) => (h(), x(s(ge), {
      ref: s(a),
      "as-child": f.asChild,
      as: f.as,
      "data-dismissable-layer": "",
      style: lt({ pointerEvents: d.value ? c.value ? "auto" : "none" : void 0 }),
      onFocusCapture: s(v).onFocusCapture,
      onBlurCapture: s(v).onBlurCapture,
      onPointerdownCapture: s(p).onPointerDownCapture
    }, {
      default: y(() => [_(f.$slots, "default")]),
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
}), yu = L0;
const V0 = Ky(() => E([]));
function z0() {
  const e = V0();
  return {
    add(t) {
      const n = e.value[0];
      t !== n && (n == null || n.pause()), e.value = nl(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var n;
      e.value = nl(e.value, t), (n = e.value[0]) == null || n.resume();
    }
  };
}
function nl(e, t) {
  const n = [...e], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function q0(e) {
  return e.filter((t) => t.tagName !== "A");
}
const Ra = "focusScope.autoFocusOnMount", La = "focusScope.autoFocusOnUnmount", ol = {
  bubbles: !1,
  cancelable: !0
};
function N0(e, { select: t = !1 } = {}) {
  const n = gt();
  for (const o of e)
    if (Ht(o, { select: t }), gt() !== n) return !0;
}
function j0(e) {
  const t = bu(e), n = al(t, e), o = al(t.reverse(), e);
  return [n, o];
}
function bu(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (o) => {
    const a = o.tagName === "INPUT" && o.type === "hidden";
    return o.disabled || o.hidden || a ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function al(e, t) {
  for (const n of e) if (!K0(n, { upTo: t })) return n;
}
function K0(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function H0(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Ht(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = gt();
    e.focus({ preventScroll: !0 }), e !== n && H0(e) && t && e.select();
  }
}
var W0 = /* @__PURE__ */ b({
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
    const n = e, o = t, { currentRef: a, currentElement: r } = be(), l = E(null), i = z0(), u = kn({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    xe((c) => {
      if (!cn) return;
      const p = r.value;
      if (!n.trapped) return;
      function v(w) {
        if (u.paused || !p) return;
        const C = w.target;
        p.contains(C) ? l.value = C : Ht(l.value, { select: !0 });
      }
      function m(w) {
        if (u.paused || !p) return;
        const C = w.relatedTarget;
        C !== null && (p.contains(C) || Ht(l.value, { select: !0 }));
      }
      function f(w) {
        p.contains(l.value) || Ht(p);
      }
      document.addEventListener("focusin", v), document.addEventListener("focusout", m);
      const g = new MutationObserver(f);
      p && g.observe(p, {
        childList: !0,
        subtree: !0
      }), c(() => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", m), g.disconnect();
      });
    }), xe(async (c) => {
      const p = r.value;
      if (await re(), !p) return;
      i.add(u);
      const v = gt();
      if (!p.contains(v)) {
        const f = new CustomEvent(Ra, ol);
        p.addEventListener(Ra, (g) => o("mountAutoFocus", g)), p.dispatchEvent(f), f.defaultPrevented || (N0(q0(bu(p)), { select: !0 }), gt() === v && Ht(p));
      }
      c(() => {
        p.removeEventListener(Ra, (w) => o("mountAutoFocus", w));
        const f = new CustomEvent(La, ol), g = (w) => {
          o("unmountAutoFocus", w);
        };
        p.addEventListener(La, g), p.dispatchEvent(f), setTimeout(() => {
          f.defaultPrevented || Ht(v ?? document.body, { select: !0 }), p.removeEventListener(La, g), i.remove(u);
        }, 0);
      });
    });
    function d(c) {
      if (!n.loop && !n.trapped || u.paused) return;
      const p = c.key === "Tab" && !c.altKey && !c.ctrlKey && !c.metaKey, v = gt();
      if (p && v) {
        const m = c.currentTarget, [f, g] = j0(m);
        f && g ? !c.shiftKey && v === g ? (c.preventDefault(), n.loop && Ht(f, { select: !0 })) : c.shiftKey && v === f && (c.preventDefault(), n.loop && Ht(g, { select: !0 })) : v === m && c.preventDefault();
      }
    }
    return (c, p) => (h(), x(s(ge), {
      ref_key: "currentRef",
      ref: a,
      tabindex: "-1",
      "as-child": c.asChild,
      as: c.as,
      onKeydown: d
    }, {
      default: y(() => [_(c.$slots, "default")]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), U0 = W0;
function G0(e) {
  return e ? "open" : "closed";
}
const Y0 = "DialogTitle", X0 = "DialogContent";
function Z0({ titleName: e = Y0, contentName: t = X0, componentLink: n = "dialog.html#title", titleId: o, descriptionId: a, contentElement: r }) {
  const l = `Warning: \`${t}\` requires a \`${e}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.reka-ui.com/docs/components/${n}`, i = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${t}.`;
  ie(() => {
    var c;
    document.getElementById(o) || console.warn(l);
    const d = (c = r.value) == null ? void 0 : c.getAttribute("aria-describedby");
    a && d && (document.getElementById(a) || console.warn(i));
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
    const n = e, o = t, a = kt(), { forwardRef: r, currentElement: l } = be();
    return a.titleId || (a.titleId = bt(void 0, "reka-dialog-title")), a.descriptionId || (a.descriptionId = bt(void 0, "reka-dialog-description")), ie(() => {
      a.contentElement = l, gt() !== document.body && (a.triggerElement.value = gt());
    }), process.env.NODE_ENV !== "production" && Z0({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: a.titleId,
      descriptionId: a.descriptionId,
      contentElement: l
    }), (i, u) => (h(), x(s(U0), {
      "as-child": "",
      loop: "",
      trapped: n.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => o("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => o("closeAutoFocus", d))
    }, {
      default: y(() => [R(s(yu), A({
        id: s(a).contentId,
        ref: s(r),
        as: i.as,
        "as-child": i.asChild,
        "disable-outside-pointer-events": i.disableOutsidePointerEvents,
        role: "dialog",
        "aria-describedby": s(a).descriptionId,
        "aria-labelledby": s(a).titleId,
        "data-state": s(G0)(s(a).open.value)
      }, i.$attrs, {
        onDismiss: u[0] || (u[0] = (d) => s(a).onOpenChange(!1)),
        onEscapeKeyDown: u[1] || (u[1] = (d) => o("escapeKeyDown", d)),
        onFocusOutside: u[2] || (u[2] = (d) => o("focusOutside", d)),
        onInteractOutside: u[3] || (u[3] = (d) => o("interactOutside", d)),
        onPointerDownOutside: u[4] || (u[4] = (d) => o("pointerDownOutside", d))
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
}), wu = Q0, J0 = /* @__PURE__ */ b({
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
    const n = e, o = t, a = kt(), r = ya(o), { forwardRef: l, currentElement: i } = be();
    return mu(i), (u, d) => (h(), x(wu, A({
      ...n,
      ...s(r)
    }, {
      ref: s(l),
      "trap-focus": s(a).open.value,
      "disable-outside-pointer-events": !0,
      onCloseAutoFocus: d[0] || (d[0] = (c) => {
        var p;
        c.defaultPrevented || (c.preventDefault(), (p = s(a).triggerElement.value) == null || p.focus());
      }),
      onPointerDownOutside: d[1] || (d[1] = (c) => {
        const p = c.detail.originalEvent, v = p.button === 0 && p.ctrlKey === !0;
        (p.button === 2 || v) && c.preventDefault();
      }),
      onFocusOutside: d[2] || (d[2] = (c) => {
        c.preventDefault();
      })
    }), {
      default: y(() => [_(u.$slots, "default")]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), eb = J0, tb = /* @__PURE__ */ b({
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
    const n = e, a = ya(t);
    be();
    const r = kt(), l = E(!1), i = E(!1);
    return (u, d) => (h(), x(wu, A({
      ...n,
      ...s(a)
    }, {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: d[0] || (d[0] = (c) => {
        var p;
        c.defaultPrevented || (l.value || (p = s(r).triggerElement.value) == null || p.focus(), c.preventDefault()), l.value = !1, i.value = !1;
      }),
      onInteractOutside: d[1] || (d[1] = (c) => {
        var m;
        c.defaultPrevented || (l.value = !0, c.detail.originalEvent.type === "pointerdown" && (i.value = !0));
        const p = c.target;
        ((m = s(r).triggerElement.value) == null ? void 0 : m.contains(p)) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && i.value && c.preventDefault();
      })
    }), {
      default: y(() => [_(u.$slots, "default")]),
      _: 3
    }, 16));
  }
}), nb = tb, ob = /* @__PURE__ */ b({
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
    const n = e, o = t, a = kt(), r = ya(o), { forwardRef: l } = be();
    return (i, u) => (h(), x(s(bo), { present: i.forceMount || s(a).open.value }, {
      default: y(() => [s(a).modal.value ? (h(), x(eb, A({
        key: 0,
        ref: s(l)
      }, {
        ...n,
        ...s(r),
        ...i.$attrs
      }), {
        default: y(() => [_(i.$slots, "default")]),
        _: 3
      }, 16)) : (h(), x(nb, A({
        key: 1,
        ref: s(l)
      }, {
        ...n,
        ...s(r),
        ...i.$attrs
      }), {
        default: y(() => [_(i.$slots, "default")]),
        _: 3
      }, 16))]),
      _: 3
    }, 8, ["present"]));
  }
}), ab = ob, rb = /* @__PURE__ */ b({
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
    be();
    const n = kt();
    return (o, a) => (h(), x(s(ge), A(t, { id: s(n).descriptionId }), {
      default: y(() => [_(o.$slots, "default")]),
      _: 3
    }, 16, ["id"]));
  }
}), sb = rb, lb = /* @__PURE__ */ b({
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
    const t = kt();
    return du(!0), be(), (n, o) => (h(), x(s(ge), {
      as: n.as,
      "as-child": n.asChild,
      "data-state": s(t).open.value ? "open" : "closed",
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
}), ib = lb, ub = /* @__PURE__ */ b({
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
    const t = kt(), { forwardRef: n } = be();
    return (o, a) => {
      var r;
      return (r = s(t)) != null && r.modal.value ? (h(), x(s(bo), {
        key: 0,
        present: o.forceMount || s(t).open.value
      }, {
        default: y(() => [R(ib, A(o.$attrs, {
          ref: s(n),
          as: o.as,
          "as-child": o.asChild
        }), {
          default: y(() => [_(o.$slots, "default")]),
          _: 3
        }, 16, ["as", "as-child"])]),
        _: 3
      }, 8, ["present"])) : ce("v-if", !0);
    };
  }
}), db = ub, cb = /* @__PURE__ */ b({
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
    const t = e0();
    return (n, o) => s(t) || n.forceMount ? (h(), x(io, {
      key: 0,
      to: n.to,
      disabled: n.disabled,
      defer: n.defer
    }, [_(n.$slots, "default")], 8, [
      "to",
      "disabled",
      "defer"
    ])) : ce("v-if", !0);
  }
}), _u = cb, pb = /* @__PURE__ */ b({
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
    return (n, o) => (h(), x(s(_u), Q(ee(t)), {
      default: y(() => [_(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), fb = pb, vb = /* @__PURE__ */ b({
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
    const t = e, n = kt();
    return be(), (o, a) => (h(), x(s(ge), A(t, { id: s(n).titleId }), {
      default: y(() => [_(o.$slots, "default")]),
      _: 3
    }, 16, ["id"]));
  }
}), mb = vb, gb = /* @__PURE__ */ b({
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
    const t = e, n = kt(), { forwardRef: o, currentElement: a } = be();
    return n.contentId || (n.contentId = bt(void 0, "reka-dialog-content")), ie(() => {
      n.triggerElement.value = a.value;
    }), (r, l) => (h(), x(s(ge), A(t, {
      ref: s(o),
      type: r.as === "button" ? "button" : void 0,
      "aria-haspopup": "dialog",
      "aria-expanded": s(n).open.value || !1,
      "aria-controls": s(n).open.value ? s(n).contentId : void 0,
      "data-state": s(n).open.value ? "open" : "closed",
      onClick: s(n).onOpenToggle
    }), {
      default: y(() => [_(r.$slots, "default")]),
      _: 3
    }, 16, [
      "type",
      "aria-expanded",
      "aria-controls",
      "data-state",
      "onClick"
    ]));
  }
}), hb = gb;
const rl = "data-reka-collection-item";
function ba(e = {}) {
  const { key: t = "", isProvider: n = !1 } = e, o = `${t}CollectionProvider`;
  let a;
  if (n) {
    const c = E(/* @__PURE__ */ new Map());
    a = {
      collectionRef: E(),
      itemMap: c
    }, Mn(o, a);
  } else a = In(o);
  const r = (c = !1) => {
    const p = a.collectionRef.value;
    if (!p) return [];
    const v = Array.from(p.querySelectorAll(`[${rl}]`)), f = Array.from(a.itemMap.value.values()).sort((g, w) => v.indexOf(g.ref) - v.indexOf(w.ref));
    return c ? f : f.filter((g) => g.ref.dataset.disabled !== "");
  }, l = b({
    name: "CollectionSlot",
    setup(c, { slots: p }) {
      const { primitiveElement: v, currentElement: m } = Gt();
      return te(m, () => {
        a.collectionRef.value = m.value;
      }), () => Ge(or, { ref: v }, p);
    }
  }), i = b({
    name: "CollectionItem",
    inheritAttrs: !1,
    props: { value: { validator: () => !0 } },
    setup(c, { slots: p, attrs: v }) {
      const { primitiveElement: m, currentElement: f } = Gt();
      return xe((g) => {
        if (f.value) {
          const w = ml(f.value);
          a.itemMap.value.set(w, {
            ref: f.value,
            value: c.value
          }), g(() => a.itemMap.value.delete(w));
        }
      }), () => Ge(or, {
        ...v,
        [rl]: "",
        ref: m
      }, p);
    }
  }), u = S(() => Array.from(a.itemMap.value.values())), d = S(() => a.itemMap.value.size);
  return {
    getItems: r,
    reactiveItems: u,
    itemMapSize: d,
    CollectionSlot: l,
    CollectionItem: i
  };
}
const yb = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function bb(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function xu(e, t, n) {
  const o = bb(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o)))
    return yb[o];
}
function wb(e, t = !1) {
  const n = gt();
  for (const o of e)
    if (o === n || (o.focus({ preventScroll: t }), gt() !== n)) return;
}
function _b(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
const [xb] = Ye("RovingFocusGroup");
var Cb = /* @__PURE__ */ b({
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
    const t = e, n = xb(), o = bt(), a = S(() => t.tabStopId || o), r = S(() => n.currentTabStopId.value === a.value), { getItems: l, CollectionItem: i } = ba();
    ie(() => {
      t.focusable && n.onFocusableItemAdd();
    }), Ne(() => {
      t.focusable && n.onFocusableItemRemove();
    });
    function u(d) {
      if (d.key === "Tab" && d.shiftKey) {
        n.onItemShiftTab();
        return;
      }
      if (d.target !== d.currentTarget) return;
      const c = xu(d, n.orientation.value, n.dir.value);
      if (c !== void 0) {
        if (d.metaKey || d.ctrlKey || d.altKey || !t.allowShiftKey && d.shiftKey) return;
        d.preventDefault();
        let p = [...l().map((v) => v.ref).filter((v) => v.dataset.disabled !== "")];
        if (c === "last") p.reverse();
        else if (c === "prev" || c === "next") {
          c === "prev" && p.reverse();
          const v = p.indexOf(d.currentTarget);
          p = n.loop.value ? _b(p, v + 1) : p.slice(v + 1);
        }
        re(() => wb(p));
      }
    }
    return (d, c) => (h(), x(s(i), null, {
      default: y(() => [R(s(ge), {
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
}), Bb = Cb, $b = /* @__PURE__ */ b({
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
    return (t, n) => (h(), x(s(ge), {
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
}), Sb = $b, kb = /* @__PURE__ */ b({
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
    const t = e, { primitiveElement: n, currentElement: o } = Gt(), a = S(() => t.checked ?? t.value);
    return te(a, (r, l) => {
      if (!o.value) return;
      const i = o.value, u = window.HTMLInputElement.prototype, c = Object.getOwnPropertyDescriptor(u, "value").set;
      if (c && r !== l) {
        const p = new Event("input", { bubbles: !0 }), v = new Event("change", { bubbles: !0 });
        c.call(i, r), i.dispatchEvent(p), i.dispatchEvent(v);
      }
    }), (r, l) => (h(), x(Sb, A({
      ref_key: "primitiveElement",
      ref: n
    }, {
      ...t,
      ...r.$attrs
    }, { as: "input" }), null, 16));
  }
}), sl = kb, Ob = /* @__PURE__ */ b({
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
    const t = e, n = S(() => typeof t.value == "object" && Array.isArray(t.value) && t.value.length === 0 && t.required), o = S(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" || t.value === null || t.value === void 0 ? [{
      name: t.name,
      value: t.value
    }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((a, r) => typeof a == "object" ? Object.entries(a).map(([l, i]) => ({
      name: `${t.name}[${r}][${l}]`,
      value: i
    })) : {
      name: `${t.name}[${r}]`,
      value: a
    }) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([a, r]) => ({
      name: `${t.name}[${a}]`,
      value: r
    })) : []);
    return (a, r) => (h(), q(Be, null, [ce(" We render single input if it's required "), n.value ? (h(), x(sl, A({ key: a.name }, {
      ...t,
      ...a.$attrs
    }, {
      name: a.name,
      value: a.value
    }), null, 16, ["name", "value"])) : (h(!0), q(Be, { key: 1 }, rt(o.value, (l) => (h(), x(sl, A({ key: l.name }, { ref_for: !0 }, {
      ...t,
      ...a.$attrs
    }, {
      name: l.name,
      value: l.value
    }), null, 16, ["name", "value"]))), 128))], 2112));
  }
}), Cu = Ob;
const [Eb] = Ye("CheckboxGroupRoot");
function Wo(e) {
  return e === "indeterminate";
}
function Bu(e) {
  return Wo(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const [Pb, Db] = Ye("CheckboxRoot");
var Ab = /* @__PURE__ */ b({
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
    const n = e, o = t, { forwardRef: a, currentElement: r } = be(), l = Eb(null), i = Lt(n, "modelValue", o, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), u = S(() => (l == null ? void 0 : l.disabled.value) || n.disabled), d = S(() => tr(l == null ? void 0 : l.modelValue.value) ? i.value === "indeterminate" ? "indeterminate" : i.value : el(l.modelValue.value, n.value));
    function c() {
      if (tr(l == null ? void 0 : l.modelValue.value))
        i.value = Wo(i.value) ? !0 : !i.value;
      else {
        const m = [...l.modelValue.value || []];
        if (el(m, n.value)) {
          const f = m.findIndex((g) => Dn(g, n.value));
          m.splice(f, 1);
        } else m.push(n.value);
        l.modelValue.value = m;
      }
    }
    const p = fu(r), v = S(() => {
      var m;
      return n.id && r.value ? (m = document.querySelector(`[for="${n.id}"]`)) == null ? void 0 : m.innerText : void 0;
    });
    return Db({
      disabled: u,
      state: d
    }), (m, f) => {
      var g, w;
      return h(), x(tt((g = s(l)) != null && g.rovingFocus.value ? s(Bb) : s(ge)), A(m.$attrs, {
        id: m.id,
        ref: s(a),
        role: "checkbox",
        "as-child": m.asChild,
        as: m.as,
        type: m.as === "button" ? "button" : void 0,
        "aria-checked": s(Wo)(d.value) ? "mixed" : d.value,
        "aria-required": m.required,
        "aria-label": m.$attrs["aria-label"] || v.value,
        "data-state": s(Bu)(d.value),
        "data-disabled": u.value ? "" : void 0,
        disabled: u.value,
        focusable: (w = s(l)) != null && w.rovingFocus.value ? !u.value : void 0,
        onKeydown: Qe(Ae(() => {
        }, ["prevent"]), ["enter"]),
        onClick: c
      }), {
        default: y(() => [_(m.$slots, "default", {
          modelValue: s(i),
          state: d.value
        }), s(p) && m.name && !s(l) ? (h(), x(s(Cu), {
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
}), Tb = Ab, Ib = /* @__PURE__ */ b({
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
    const { forwardRef: t } = be(), n = Pb();
    return (o, a) => (h(), x(s(bo), { present: o.forceMount || s(Wo)(s(n).state.value) || s(n).state.value === !0 }, {
      default: y(() => [R(s(ge), A({
        ref: s(t),
        "data-state": s(Bu)(s(n).state.value),
        "data-disabled": s(n).disabled.value ? "" : void 0,
        style: { pointerEvents: "none" },
        "as-child": o.asChild,
        as: o.as
      }, o.$attrs), {
        default: y(() => [_(o.$slots, "default")]),
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
}), Mb = Ib;
const [$u, Fb] = Ye("PopperRoot");
var Rb = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = E();
    return Fb({
      anchor: t,
      onAnchorChange: (n) => t.value = n
    }), (n, o) => _(n.$slots, "default");
  }
}), Lb = Rb, Vb = /* @__PURE__ */ b({
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
    const t = e, { forwardRef: n, currentElement: o } = be(), a = $u();
    return cr(() => {
      a.onAnchorChange(t.reference ?? o.value);
    }), (r, l) => (h(), x(s(ge), {
      ref: s(n),
      as: r.as,
      "as-child": r.asChild
    }, {
      default: y(() => [_(r.$slots, "default")]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), zb = Vb;
function qb(e) {
  return e !== null;
}
function Nb(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var w, C, $;
      const { placement: n, rects: o, middlewareData: a } = t, l = ((w = a.arrow) == null ? void 0 : w.centerOffset) !== 0, i = l ? 0 : e.arrowWidth, u = l ? 0 : e.arrowHeight, [d, c] = ar(n), p = {
        start: "0%",
        center: "50%",
        end: "100%"
      }[c], v = (((C = a.arrow) == null ? void 0 : C.x) ?? 0) + i / 2, m = ((($ = a.arrow) == null ? void 0 : $.y) ?? 0) + u / 2;
      let f = "", g = "";
      return d === "bottom" ? (f = l ? p : `${v}px`, g = `${-u}px`) : d === "top" ? (f = l ? p : `${v}px`, g = `${o.floating.height + u}px`) : d === "right" ? (f = `${-u}px`, g = l ? p : `${m}px`) : d === "left" && (f = `${o.floating.width + u}px`, g = l ? p : `${m}px`), { data: {
        x: f,
        y: g
      } };
    }
  };
}
function ar(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
const jb = {
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
}, [Z_, Kb] = Ye("PopperContent");
var Hb = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ dr({
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
  }, { ...jb }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = $u(), { forwardRef: r, currentElement: l } = be(), i = E(), u = E(), { width: d, height: c } = m0(u), p = S(() => n.side + (n.align !== "center" ? `-${n.align}` : "")), v = S(() => typeof n.collisionPadding == "number" ? n.collisionPadding : {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...n.collisionPadding
    }), m = S(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), f = S(() => ({
      padding: v.value,
      boundary: m.value.filter(qb),
      altBoundary: m.value.length > 0
    })), g = S(() => ({
      mainAxis: n.sideFlip,
      crossAxis: n.alignFlip
    })), w = jy(() => [
      Ll({
        mainAxis: n.sideOffset + c.value,
        alignmentAxis: n.alignOffset
      }),
      n.prioritizePosition && n.avoidCollisions && No({
        ...f.value,
        ...g.value
      }),
      n.avoidCollisions && Vl({
        mainAxis: !0,
        crossAxis: !!n.prioritizePosition,
        limiter: n.sticky === "partial" ? Nl() : void 0,
        ...f.value
      }),
      !n.prioritizePosition && n.avoidCollisions && No({
        ...f.value,
        ...g.value
      }),
      zl({
        ...f.value,
        apply: ({ elements: M, rects: G, availableWidth: L, availableHeight: W }) => {
          const { width: j, height: Y } = G.reference, K = M.floating.style;
          K.setProperty("--reka-popper-available-width", `${L}px`), K.setProperty("--reka-popper-available-height", `${W}px`), K.setProperty("--reka-popper-anchor-width", `${j}px`), K.setProperty("--reka-popper-anchor-height", `${Y}px`);
        }
      }),
      u.value && jl({
        element: u.value,
        padding: n.arrowPadding
      }),
      Nb({
        arrowWidth: d.value,
        arrowHeight: c.value
      }),
      n.hideWhenDetached && ql({
        strategy: "referenceHidden",
        ...f.value
      })
    ]), C = S(() => n.reference ?? a.anchor.value), { floatingStyles: $, placement: B, isPositioned: D, middlewareData: O } = Hl(C, i, {
      strategy: n.positionStrategy,
      placement: p,
      whileElementsMounted: (...M) => Rl(...M, {
        layoutShift: !n.disableUpdateOnLayoutShift,
        animationFrame: n.updatePositionStrategy === "always"
      }),
      middleware: w
    }), P = S(() => ar(B.value)[0]), k = S(() => ar(B.value)[1]);
    cr(() => {
      D.value && o("placed");
    });
    const I = S(() => {
      var M;
      return ((M = O.value.arrow) == null ? void 0 : M.centerOffset) !== 0;
    }), F = E("");
    xe(() => {
      l.value && (F.value = window.getComputedStyle(l.value).zIndex);
    });
    const T = S(() => {
      var M;
      return ((M = O.value.arrow) == null ? void 0 : M.x) ?? 0;
    }), V = S(() => {
      var M;
      return ((M = O.value.arrow) == null ? void 0 : M.y) ?? 0;
    });
    return Kb({
      placedSide: P,
      onArrowChange: (M) => u.value = M,
      arrowX: T,
      arrowY: V,
      shouldHideArrow: I
    }), (M, G) => {
      var L, W, j;
      return h(), q("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-reka-popper-content-wrapper": "",
        style: lt({
          ...s($),
          transform: s(D) ? s($).transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: F.value,
          "--reka-popper-transform-origin": [(L = s(O).transformOrigin) == null ? void 0 : L.x, (W = s(O).transformOrigin) == null ? void 0 : W.y].join(" "),
          ...((j = s(O).hide) == null ? void 0 : j.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [R(s(ge), A({ ref: s(r) }, M.$attrs, {
        "as-child": n.asChild,
        as: M.as,
        "data-side": P.value,
        "data-align": k.value,
        style: { animation: s(D) ? void 0 : "none" }
      }), {
        default: y(() => [_(M.$slots, "default")]),
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
}), Wb = Hb, Ub = /* @__PURE__ */ b({
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
    const { forwardRef: t } = be();
    return (n, o) => (h(), x(s(zb), {
      "as-child": "",
      reference: n.reference
    }, {
      default: y(() => [R(s(ge), A({
        ref: s(t),
        "as-child": n.asChild,
        as: n.as
      }, n.$attrs), {
        default: y(() => [_(n.$slots, "default")]),
        _: 3
      }, 16, ["as-child", "as"])]),
      _: 3
    }, 8, ["reference"]));
  }
}), Gb = Ub;
function Yb(e, t, n) {
  return e === void 0 ? !1 : Array.isArray(e) ? e.some((o) => eo(o, t, n)) : eo(e, t, n);
}
function eo(e, t, n) {
  return e === void 0 || t === void 0 ? !1 : typeof e == "string" ? e === t : typeof n == "function" ? n(e, t) : typeof n == "string" ? (e == null ? void 0 : e[n]) === (t == null ? void 0 : t[n]) : Dn(e, t);
}
const [wa, Xb] = Ye("ListboxRoot");
var Zb = /* @__PURE__ */ b({
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
    const o = e, a = n, { multiple: r, highlightOnHover: l, orientation: i, disabled: u, selectionBehavior: d, dir: c } = we(o), { getItems: p } = ba({ isProvider: !0 }), { handleTypeaheadSearch: v } = h0(), { primitiveElement: m, currentElement: f } = Gt(), g = v0(), w = pu(c), C = fu(f), $ = E(), B = E(!1), D = E(!0), O = Lt(o, "modelValue", a, {
      defaultValue: o.defaultValue ?? (r.value ? [] : void 0),
      passive: o.modelValue === void 0,
      deep: !0
    });
    function P(U) {
      if (B.value = !0, o.multiple) {
        const Z = Array.isArray(O.value) ? [...O.value] : [], ae = Z.findIndex((pe) => eo(pe, U, o.by));
        o.selectionBehavior === "toggle" ? (ae === -1 ? Z.push(U) : Z.splice(ae, 1), O.value = Z) : (O.value = [U], $.value = U);
      } else o.selectionBehavior === "toggle" && eo(O.value, U, o.by) ? O.value = void 0 : O.value = U;
      setTimeout(() => {
        B.value = !1;
      }, 1);
    }
    const k = E(null), I = E(null), F = E(!1), T = E(!1), V = Lo(), M = Lo(), G = Lo();
    function L() {
      return p().map((U) => U.ref).filter((U) => U.dataset.disabled !== "");
    }
    function W(U, Z = !0) {
      if (!U) return;
      k.value = U, D.value && k.value.focus(), Z && k.value.scrollIntoView({ block: "nearest" });
      const ae = p().find((pe) => pe.ref === U);
      a("highlight", ae);
    }
    function j(U) {
      if (F.value) G.trigger(U);
      else {
        const Z = p().find((ae) => eo(ae.value, U, o.by));
        Z && (k.value = Z.ref, W(Z.ref));
      }
    }
    function Y(U) {
      k.value && k.value.isConnected && (U.preventDefault(), U.stopPropagation(), T.value || k.value.click());
    }
    function K(U) {
      if (D.value) {
        if (B.value = !0, F.value) M.trigger(U);
        else {
          const Z = U.altKey || U.ctrlKey || U.metaKey;
          if (Z && U.key === "a" && r.value) {
            const ae = p(), pe = ae.map((me) => me.value);
            O.value = [...pe], U.preventDefault(), W(ae[ae.length - 1].ref);
          } else if (!Z) {
            const ae = v(U.key, p());
            ae && W(ae);
          }
        }
        setTimeout(() => {
          B.value = !1;
        }, 1);
      }
    }
    function H() {
      T.value = !0;
    }
    function ue() {
      re(() => {
        T.value = !1;
      });
    }
    function se() {
      re(() => {
        const U = new KeyboardEvent("keydown", { key: "PageUp" });
        Ve(U);
      });
    }
    function De(U) {
      const Z = k.value;
      Z != null && Z.isConnected && (I.value = Z), k.value = null, a("leave", U);
    }
    function Me(U) {
      var ae, pe;
      const Z = new CustomEvent("listbox.entryFocus", {
        bubbles: !1,
        cancelable: !0
      });
      if ((ae = U.currentTarget) == null || ae.dispatchEvent(Z), a("entryFocus", Z), !Z.defaultPrevented)
        if (I.value) W(I.value);
        else {
          const me = (pe = L()) == null ? void 0 : pe[0];
          W(me);
        }
    }
    function Ve(U) {
      const Z = xu(U, i.value, w.value);
      if (!Z) return;
      let ae = L();
      if (k.value) {
        if (Z === "last") ae.reverse();
        else if (Z === "prev" || Z === "next") {
          Z === "prev" && ae.reverse();
          const pe = ae.indexOf(k.value);
          ae = ae.slice(pe + 1);
        }
        Xe(U, ae[0]);
      }
      if (ae.length) {
        const pe = !k.value && Z === "prev" ? ae.length - 1 : 0;
        W(ae[pe]);
      }
      if (F.value) return M.trigger(U);
    }
    function Xe(U, Z) {
      var pe;
      if (!(F.value || o.selectionBehavior !== "replace" || !r.value || !Array.isArray(O.value) || (U.altKey || U.ctrlKey || U.metaKey) && !U.shiftKey) && U.shiftKey) {
        const me = p().filter((Se) => Se.ref.dataset.disabled !== "");
        let J = (pe = me.find((Se) => Se.ref === Z)) == null ? void 0 : pe.value;
        if (U.key === g.END ? J = me[me.length - 1].value : U.key === g.HOME && (J = me[0].value), !J || !$.value) return;
        const he = Ny(me.map((Se) => Se.value), $.value, J);
        O.value = he;
      }
    }
    async function ot(U) {
      if (await re(), F.value) V.trigger(U);
      else {
        const Z = L(), ae = Z.find((pe) => pe.dataset.state === "checked");
        ae ? W(ae) : Z.length && W(Z[0]);
      }
    }
    return te(O, () => {
      B.value || re(() => {
        ot();
      });
    }, {
      immediate: !0,
      deep: !0
    }), t({
      highlightedElement: k,
      highlightItem: j,
      highlightFirstItem: se,
      highlightSelected: ot,
      getItems: p
    }), Xb({
      modelValue: O,
      onValueChange: P,
      multiple: r,
      orientation: i,
      dir: w,
      disabled: u,
      highlightOnHover: l,
      highlightedElement: k,
      isVirtual: F,
      virtualFocusHook: V,
      virtualKeydownHook: M,
      virtualHighlightHook: G,
      by: o.by,
      firstValue: $,
      selectionBehavior: d,
      focusable: D,
      onLeave: De,
      onEnter: Me,
      changeHighlight: W,
      onKeydownEnter: Y,
      onKeydownNavigation: Ve,
      onKeydownTypeAhead: K,
      onCompositionStart: H,
      onCompositionEnd: ue,
      highlightFirstItem: se
    }), (U, Z) => (h(), x(s(ge), {
      ref_key: "primitiveElement",
      ref: m,
      as: U.as,
      "as-child": U.asChild,
      dir: s(w),
      "data-disabled": s(u) ? "" : void 0,
      onPointerleave: De,
      onFocusout: Z[0] || (Z[0] = async (ae) => {
        const pe = ae.relatedTarget || ae.target;
        await re(), k.value && s(f) && !s(f).contains(pe) && De(ae);
      })
    }, {
      default: y(() => [_(U.$slots, "default", { modelValue: s(O) }), s(C) && U.name ? (h(), x(s(Cu), {
        key: 0,
        name: U.name,
        value: s(O),
        disabled: s(u),
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
}), Qb = Zb, Jb = /* @__PURE__ */ b({
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
    const { CollectionSlot: t } = ba(), n = wa(), o = uu(!1, 10);
    return (a, r) => (h(), x(s(t), null, {
      default: y(() => [R(s(ge), {
        role: "listbox",
        as: a.as,
        "as-child": a.asChild,
        tabindex: s(n).focusable.value ? s(n).highlightedElement.value ? "-1" : "0" : void 0,
        "aria-orientation": s(n).orientation.value,
        "aria-multiselectable": !!s(n).multiple.value,
        "data-orientation": s(n).orientation.value,
        onMousedown: r[0] || (r[0] = Ae((l) => o.value = !0, ["left"])),
        onFocus: r[1] || (r[1] = (l) => {
          s(o) || s(n).onEnter(l);
        }),
        onKeydown: [
          r[2] || (r[2] = Qe((l) => {
            s(n).orientation.value === "vertical" && (l.key === "ArrowLeft" || l.key === "ArrowRight") || s(n).orientation.value === "horizontal" && (l.key === "ArrowUp" || l.key === "ArrowDown") || (l.preventDefault(), s(n).focusable.value && s(n).onKeydownNavigation(l));
          }, [
            "down",
            "up",
            "left",
            "right",
            "home",
            "end"
          ])),
          Qe(s(n).onKeydownEnter, ["enter"]),
          s(n).onKeydownTypeAhead
        ]
      }, {
        default: y(() => [_(a.$slots, "default")]),
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
}), ew = Jb, tw = /* @__PURE__ */ b({
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
    const n = e, a = Lt(n, "modelValue", t, {
      defaultValue: "",
      passive: n.modelValue === void 0
    }), r = wa(), { primitiveElement: l, currentElement: i } = Gt(), u = S(() => n.disabled || r.disabled.value || !1), d = E();
    return cl(() => {
      var c;
      return d.value = (c = r.highlightedElement.value) == null ? void 0 : c.id;
    }), ie(() => {
      r.focusable.value = !1, setTimeout(() => {
        var c;
        n.autoFocus && ((c = i.value) == null || c.focus());
      }, 1);
    }), Ne(() => {
      r.focusable.value = !0;
    }), (c, p) => (h(), x(s(ge), {
      ref_key: "primitiveElement",
      ref: l,
      as: c.as,
      "as-child": c.asChild,
      value: s(a),
      disabled: u.value ? "" : void 0,
      "data-disabled": u.value ? "" : void 0,
      "aria-disabled": u.value ?? void 0,
      "aria-activedescendant": d.value,
      type: "text",
      onKeydown: [Qe(Ae(s(r).onKeydownNavigation, ["prevent"]), [
        "down",
        "up",
        "home",
        "end"
      ]), Qe(s(r).onKeydownEnter, ["enter"])],
      onInput: p[0] || (p[0] = (v) => {
        a.value = v.target.value, s(r).highlightFirstItem();
      }),
      onCompositionstart: s(r).onCompositionStart,
      onCompositionend: s(r).onCompositionEnd
    }, {
      default: y(() => [_(c.$slots, "default", { modelValue: s(a) })]),
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
}), nw = tw;
const [Q_, ow] = Ye("ListboxGroup");
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
    const t = e, n = bt(void 0, "reka-listbox-group");
    return ow({ id: n }), (o, a) => (h(), x(s(ge), A({ role: "group" }, t, { "aria-labelledby": s(n) }), {
      default: y(() => [_(o.$slots, "default")]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), rw = aw;
const sw = "listbox.select", [lw, iw] = Ye("ListboxItem");
var uw = /* @__PURE__ */ b({
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
    const n = e, o = t, a = bt(void 0, "reka-listbox-item"), { CollectionItem: r } = ba(), { forwardRef: l, currentElement: i } = be(), u = wa(), d = S(() => i.value === u.highlightedElement.value), c = S(() => Yb(u.modelValue.value, n.value, u.by)), p = S(() => u.disabled.value || n.disabled);
    async function v(f) {
      o("select", f), !(f != null && f.defaultPrevented) && !p.value && f && (u.onValueChange(n.value), u.changeHighlight(i.value));
    }
    function m(f) {
      const g = {
        originalEvent: f,
        value: n.value
      };
      ns(sw, v, g);
    }
    return iw({ isSelected: c }), (f, g) => (h(), x(s(r), { value: f.value }, {
      default: y(() => [ju([d.value, c.value], () => R(s(ge), A({ id: s(a) }, f.$attrs, {
        ref: s(l),
        role: "option",
        tabindex: s(u).focusable.value ? d.value ? "0" : "-1" : -1,
        "aria-selected": c.value,
        as: f.as,
        "as-child": f.asChild,
        disabled: p.value ? "" : void 0,
        "data-disabled": p.value ? "" : void 0,
        "data-highlighted": d.value ? "" : void 0,
        "data-state": c.value ? "checked" : "unchecked",
        onClick: m,
        onKeydown: Qe(Ae(m, ["prevent"]), ["space"]),
        onPointermove: g[0] || (g[0] = (w) => {
          s(u).highlightedElement.value !== s(i) && (s(u).highlightOnHover.value ? s(u).changeHighlight(s(i), !1) : s(u).focusable.value || s(u).changeHighlight(s(i), !1));
        })
      }), {
        default: y(() => [_(f.$slots, "default")]),
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
}), dw = uw, cw = /* @__PURE__ */ b({
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
    be();
    const n = lw();
    return (o, a) => s(n).isSelected.value ? (h(), x(s(ge), A({
      key: 0,
      "aria-hidden": "true"
    }, t), {
      default: y(() => [_(o.$slots, "default")]),
      _: 3
    }, 16)) : ce("v-if", !0);
  }
}), pw = cw;
const [Vt, fw] = Ye("ComboboxRoot");
var vw = /* @__PURE__ */ b({
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
    var L, W, j;
    const o = e, a = n, { primitiveElement: r, currentElement: l } = Gt(), { multiple: i, disabled: u, ignoreFilter: d, resetSearchTermOnSelect: c, openOnFocus: p, openOnClick: v, dir: m } = we(o), f = pu(m), g = Lt(o, "modelValue", a, {
      defaultValue: o.defaultValue ?? (i.value ? [] : void 0),
      passive: o.modelValue === void 0,
      deep: !0
    }), w = Lt(o, "open", a, {
      defaultValue: o.defaultOpen,
      passive: o.open === void 0
    });
    async function C(Y) {
      var K, H;
      w.value = Y, V.value = "", Y ? (await re(), (K = r.value) == null || K.highlightSelected(), B.value = !0) : B.value = !1, (H = O.value) == null || H.focus(), setTimeout(() => {
        !Y && o.resetSearchTermOnBlur && $.trigger();
      }, 1);
    }
    const $ = Lo(), B = E(!1), D = E(!1), O = E(), P = E(), k = S(() => {
      var Y;
      return ((Y = r.value) == null ? void 0 : Y.highlightedElement) ?? void 0;
    }), I = E(/* @__PURE__ */ new Map()), F = E(/* @__PURE__ */ new Map()), { contains: T } = i0({ sensitivity: "base" }), V = E(""), M = S((Y) => {
      if (!V.value || o.ignoreFilter || D.value) return {
        count: I.value.size,
        items: (Y == null ? void 0 : Y.items) ?? /* @__PURE__ */ new Map(),
        groups: (Y == null ? void 0 : Y.groups) ?? new Set(F.value.keys())
      };
      let K = 0;
      const H = /* @__PURE__ */ new Map(), ue = /* @__PURE__ */ new Set();
      for (const [se, De] of I.value) {
        const Me = T(De, V.value);
        H.set(se, Me ? 1 : 0), Me && K++;
      }
      for (const [se, De] of F.value) for (const Me of De) if (H.get(Me) > 0) {
        ue.add(se);
        break;
      }
      return {
        count: K,
        items: H,
        groups: ue
      };
    }), G = Ue();
    return ie(() => {
      var Y, K, H;
      G != null && G.exposed && (G.exposed.highlightItem = (Y = r.value) == null ? void 0 : Y.highlightItem, G.exposed.highlightFirstItem = (K = r.value) == null ? void 0 : K.highlightFirstItem, G.exposed.highlightSelected = (H = r.value) == null ? void 0 : H.highlightSelected);
    }), t({
      filtered: M,
      highlightedElement: k,
      highlightItem: (L = r.value) == null ? void 0 : L.highlightItem,
      highlightFirstItem: (W = r.value) == null ? void 0 : W.highlightFirstItem,
      highlightSelected: (j = r.value) == null ? void 0 : j.highlightSelected
    }), fw({
      modelValue: g,
      multiple: i,
      disabled: u,
      open: w,
      onOpenChange: C,
      contentId: "",
      isUserInputted: B,
      isVirtual: D,
      inputElement: O,
      highlightedElement: k,
      onInputElementChange: (Y) => O.value = Y,
      triggerElement: P,
      onTriggerElementChange: (Y) => P.value = Y,
      parentElement: l,
      resetSearchTermOnSelect: c,
      onResetSearchTerm: $.on,
      allItems: I,
      allGroups: F,
      filterSearch: V,
      filterState: M,
      ignoreFilter: d,
      openOnFocus: p,
      openOnClick: v
    }), (Y, K) => (h(), x(s(Lb), null, {
      default: y(() => [R(s(Qb), A({
        ref_key: "primitiveElement",
        ref: r
      }, Y.$attrs, {
        modelValue: s(g),
        "onUpdate:modelValue": K[0] || (K[0] = (H) => st(g) ? g.value = H : null),
        style: { pointerEvents: s(w) ? "auto" : void 0 },
        as: Y.as,
        "as-child": Y.asChild,
        dir: s(f),
        multiple: s(i),
        name: Y.name,
        required: Y.required,
        disabled: s(u),
        "highlight-on-hover": !0,
        by: o.by,
        onHighlight: K[1] || (K[1] = (H) => a("highlight", H))
      }), {
        default: y(() => [_(Y.$slots, "default", {
          open: s(w),
          modelValue: s(g)
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
}), mw = vw;
const [J_, gw] = Ye("ComboboxContent");
var hw = /* @__PURE__ */ b({
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
    const n = e, o = t, { position: a } = we(n), r = Vt(), { forwardRef: l, currentElement: i } = be();
    du(n.bodyLock), mu(r.parentElement);
    const u = S(() => n.position === "popper" ? n : {}), d = fn(u.value), c = {
      boxSizing: "border-box",
      "--reka-combobox-content-transform-origin": "var(--reka-popper-transform-origin)",
      "--reka-combobox-content-available-width": "var(--reka-popper-available-width)",
      "--reka-combobox-content-available-height": "var(--reka-popper-available-height)",
      "--reka-combobox-trigger-width": "var(--reka-popper-anchor-width)",
      "--reka-combobox-trigger-height": "var(--reka-popper-anchor-height)"
    };
    gw({ position: a });
    const p = E(!1);
    return ie(() => {
      r.inputElement.value && (p.value = i.value.contains(r.inputElement.value), p.value && r.inputElement.value.focus());
    }), Ne(() => {
      var v;
      p.value && ((v = r.triggerElement.value) == null || v.focus());
    }), (v, m) => (h(), x(s(ew), { "as-child": "" }, {
      default: y(() => [R(s(yu), {
        "as-child": "",
        "disable-outside-pointer-events": v.disableOutsidePointerEvents,
        onDismiss: m[0] || (m[0] = (f) => s(r).onOpenChange(!1)),
        onFocusOutside: m[1] || (m[1] = (f) => {
          var g;
          (g = s(r).parentElement.value) != null && g.contains(f.target) && f.preventDefault(), o("focusOutside", f);
        }),
        onInteractOutside: m[2] || (m[2] = (f) => o("interactOutside", f)),
        onEscapeKeyDown: m[3] || (m[3] = (f) => o("escapeKeyDown", f)),
        onPointerDownOutside: m[4] || (m[4] = (f) => {
          var g;
          (g = s(r).parentElement.value) != null && g.contains(f.target) && f.preventDefault(), o("pointerDownOutside", f);
        })
      }, {
        default: y(() => [(h(), x(tt(s(a) === "popper" ? s(Wb) : s(ge)), A({
          ...v.$attrs,
          ...s(d)
        }, {
          id: s(r).contentId,
          ref: s(l),
          "data-state": s(r).open.value ? "open" : "closed",
          style: {
            display: "flex",
            flexDirection: "column",
            outline: "none",
            ...s(a) === "popper" ? c : {}
          }
        }), {
          default: y(() => [_(v.$slots, "default")]),
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
}), yw = hw, bw = /* @__PURE__ */ b({
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
    be();
    const n = Vt();
    function o() {
      n.filterSearch.value = "", n.inputElement.value && (n.inputElement.value.value = "", n.inputElement.value.focus());
    }
    return (a, r) => (h(), x(s(ge), A({ type: a.as === "button" ? "button" : void 0 }, t, {
      tabindex: "-1",
      onClick: o
    }), {
      default: y(() => [_(a.$slots, "default")]),
      _: 3
    }, 16, ["type"]));
  }
}), ex = bw, ww = /* @__PURE__ */ b({
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
    const a = St(e, t), { forwardRef: r } = be(), l = Vt();
    return l.contentId || (l.contentId = bt(void 0, "reka-combobox-content")), (i, u) => (h(), x(s(bo), { present: i.forceMount || s(l).open.value }, {
      default: y(() => [R(yw, A({
        ...s(a),
        ...i.$attrs
      }, { ref: s(r) }), {
        default: y(() => [_(i.$slots, "default")]),
        _: 3
      }, 16)]),
      _: 3
    }, 8, ["present"]));
  }
}), _w = ww, xw = /* @__PURE__ */ b({
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
    const t = e, n = Vt(), o = S(() => n.ignoreFilter.value ? n.allItems.value.size === 0 : n.filterState.value.count === 0);
    return (a, r) => o.value ? (h(), x(s(ge), Q(A({ key: 0 }, t)), {
      default: y(() => [_(a.$slots, "default", {}, () => [r[0] || (r[0] = _e("No options"))])]),
      _: 3
    }, 16)) : ce("v-if", !0);
  }
}), Cw = xw;
const [Su, Bw] = Ye("ComboboxGroup");
var $w = /* @__PURE__ */ b({
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
    const t = e, n = bt(void 0, "reka-combobox-group"), o = Vt(), a = S(() => o.ignoreFilter.value ? !0 : o.filterSearch.value ? o.filterState.value.groups.has(n) : !0), r = Bw({
      id: n,
      labelId: ""
    });
    return ie(() => {
      o.allGroups.value.has(n) || o.allGroups.value.set(n, /* @__PURE__ */ new Set());
    }), Ne(() => {
      o.allGroups.value.delete(n);
    }), (l, i) => (h(), x(s(rw), A({
      id: s(n),
      "aria-labelledby": s(r).labelId
    }, t, { hidden: a.value ? void 0 : !0 }), {
      default: y(() => [_(l.$slots, "default")]),
      _: 3
    }, 16, [
      "id",
      "aria-labelledby",
      "hidden"
    ]));
  }
}), Sw = $w, kw = /* @__PURE__ */ b({
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
    const n = e, o = t, a = Vt(), r = wa(), { primitiveElement: l, currentElement: i } = Gt(), u = Lt(n, "modelValue", o, { passive: n.modelValue === void 0 });
    ie(() => {
      i.value && a.onInputElementChange(i.value);
    });
    function d(f) {
      a.open.value || a.onOpenChange(!0);
    }
    function c(f) {
      const g = f.target;
      a.open.value ? a.filterSearch.value = g.value : (a.onOpenChange(!0), re(() => {
        g.value && (a.filterSearch.value = g.value, r.highlightFirstItem());
      }));
    }
    function p() {
      a.openOnFocus.value && !a.open.value && a.onOpenChange(!0);
    }
    function v() {
      a.openOnClick.value && !a.open.value && a.onOpenChange(!0);
    }
    function m() {
      const f = a.modelValue.value;
      n.displayValue ? u.value = n.displayValue(f) : !a.multiple.value && f && !Array.isArray(f) && typeof f != "object" ? u.value = f.toString() : u.value = "", re(() => {
        u.value = u.value;
      });
    }
    return a.onResetSearchTerm(() => {
      m();
    }), te(a.modelValue, async () => {
      !a.isUserInputted.value && a.resetSearchTermOnSelect.value && m();
    }, {
      immediate: !0,
      deep: !0
    }), te(a.filterState, () => {
      !a.isVirtual.value && !a.highlightedElement.value && r.highlightFirstItem();
    }), (f, g) => (h(), x(s(nw), {
      ref_key: "primitiveElement",
      ref: l,
      modelValue: s(u),
      "onUpdate:modelValue": g[0] || (g[0] = (w) => st(u) ? u.value = w : null),
      as: f.as,
      "as-child": f.asChild,
      "auto-focus": f.autoFocus,
      disabled: f.disabled,
      "aria-expanded": s(a).open.value,
      "aria-controls": s(a).contentId,
      "aria-autocomplete": "list",
      role: "combobox",
      autocomplete: "off",
      onClick: v,
      onInput: c,
      onKeydown: Qe(Ae(d, ["prevent"]), ["down", "up"]),
      onFocus: p
    }, {
      default: y(() => [_(f.$slots, "default")]),
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
}), Ow = kw, Ew = /* @__PURE__ */ b({
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
    const n = e, o = t, a = bt(void 0, "reka-combobox-item"), r = Vt(), l = Su(null), { primitiveElement: i, currentElement: u } = Gt();
    if (n.value === "") throw new Error("A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder.");
    const d = S(() => {
      if (r.isVirtual.value || r.ignoreFilter.value || !r.filterSearch.value) return !0;
      {
        const c = r.filterState.value.items.get(a);
        return c === void 0 ? !0 : c > 0;
      }
    });
    return ie(() => {
      var p;
      r.allItems.value.set(a, n.textValue || u.value.textContent || u.value.innerText);
      const c = l == null ? void 0 : l.id;
      c && (r.allGroups.value.has(c) ? (p = r.allGroups.value.get(c)) == null || p.add(a) : r.allGroups.value.set(c, /* @__PURE__ */ new Set([a])));
    }), Ne(() => {
      r.allItems.value.delete(a);
    }), (c, p) => d.value ? (h(), x(s(dw), A({ key: 0 }, n, {
      id: s(a),
      ref_key: "primitiveElement",
      ref: i,
      disabled: s(r).disabled.value || c.disabled,
      onSelect: p[0] || (p[0] = (v) => {
        o("select", v), !v.defaultPrevented && !s(r).multiple.value && !c.disabled && !s(r).disabled.value && (v.preventDefault(), s(r).onOpenChange(!1), s(r).modelValue.value = n.value);
      })
    }), {
      default: y(() => [_(c.$slots, "default", {}, () => [_e(ke(c.value), 1)])]),
      _: 3
    }, 16, ["id", "disabled"])) : ce("v-if", !0);
  }
}), Pw = Ew, Dw = /* @__PURE__ */ b({
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
    return (n, o) => (h(), x(s(pw), Q(ee(t)), {
      default: y(() => [_(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), tx = Dw, Aw = /* @__PURE__ */ b({
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
    be();
    const n = Su({
      id: "",
      labelId: ""
    });
    return n.labelId || (n.labelId = bt(void 0, "reka-combobox-group-label")), (o, a) => (h(), x(s(ge), A(t, { id: s(n).labelId }), {
      default: y(() => [_(o.$slots, "default")]),
      _: 3
    }, 16, ["id"]));
  }
}), Tw = Aw, Iw = /* @__PURE__ */ b({
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
    return (n, o) => (h(), x(s(_u), Q(ee(t)), {
      default: y(() => [_(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), Mw = Iw, Fw = /* @__PURE__ */ b({
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
    return be(), (n, o) => (h(), x(s(ge), A(t, { "aria-hidden": "true" }), {
      default: y(() => [_(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), Rw = Fw, Lw = /* @__PURE__ */ b({
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
    const t = e, { forwardRef: n, currentElement: o } = be(), a = Vt(), r = S(() => t.disabled || a.disabled.value || !1);
    return ie(() => {
      o.value && a.onTriggerElementChange(o.value);
    }), (l, i) => (h(), x(s(ge), A(t, {
      ref: s(n),
      type: l.as === "button" ? "button" : void 0,
      tabindex: "-1",
      "aria-label": "Show popup",
      "aria-haspopup": "listbox",
      "aria-expanded": s(a).open.value,
      "aria-controls": s(a).contentId,
      "data-state": s(a).open.value ? "open" : "closed",
      disabled: r.value,
      "data-disabled": r.value ? "" : void 0,
      "aria-disabled": r.value ?? void 0,
      onClick: i[0] || (i[0] = (u) => s(a).onOpenChange(!s(a).open.value))
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
}), nx = Lw;
function Vw(e) {
  const t = ga({ nonce: E() });
  return S(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.nonce) == null ? void 0 : n.value);
  });
}
var zw = /* @__PURE__ */ b({
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
    const t = e, { forwardRef: n } = be(), { nonce: o } = we(t), a = Vw(o), r = Vt();
    return (l, i) => (h(), q(Be, null, [R(s(ge), A({
      ...l.$attrs,
      ...t
    }, {
      ref: s(n),
      "data-reka-combobox-viewport": "",
      role: "presentation",
      style: {
        position: "relative",
        flex: s(r).isVirtual.value ? void 0 : 1,
        overflow: "auto"
      }
    }), {
      default: y(() => [_(l.$slots, "default")]),
      _: 3
    }, 16, ["style"]), R(s(ge), {
      as: "style",
      nonce: s(a)
    }, {
      default: y(() => i[0] || (i[0] = [_e(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-reka-combobox-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-reka-combobox-viewport]::-webkit-scrollbar { display: none; } ")])),
      _: 1,
      __: [0]
    }, 8, ["nonce"])], 64));
  }
}), qw = zw, Nw = /* @__PURE__ */ b({
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
    return be(), (n, o) => (h(), x(s(ge), A(t, { "data-type": "ellipsis" }), {
      default: y(() => [_(n.$slots, "default", {}, () => [o[0] || (o[0] = _e("…"))])]),
      _: 3
    }, 16));
  }
}), jw = Nw;
const [Wn, Kw] = Ye("PaginationRoot");
var Hw = /* @__PURE__ */ b({
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
    const n = e, o = t, { siblingCount: a, disabled: r, showEdges: l } = we(n);
    be();
    const i = Lt(n, "page", o, {
      defaultValue: n.defaultPage,
      passive: n.page === void 0
    }), u = S(() => Math.max(1, Math.ceil(n.total / (n.itemsPerPage || 1))));
    return Kw({
      page: i,
      onPageChange(d) {
        i.value = d;
      },
      pageCount: u,
      siblingCount: a,
      disabled: r,
      showEdges: l
    }), (d, c) => (h(), x(s(ge), {
      as: d.as,
      "as-child": d.asChild
    }, {
      default: y(() => [_(d.$slots, "default", {
        page: s(i),
        pageCount: u.value
      })]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Ww = Hw, Uw = /* @__PURE__ */ b({
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
    const t = e, n = Wn();
    be();
    const o = S(() => n.page.value === 1 || n.disabled.value);
    return (a, r) => (h(), x(s(ge), A(t, {
      "aria-label": "First Page",
      type: a.as === "button" ? "button" : void 0,
      disabled: o.value,
      onClick: r[0] || (r[0] = (l) => !o.value && s(n).onPageChange(1))
    }), {
      default: y(() => [_(a.$slots, "default", {}, () => [r[1] || (r[1] = _e("First page"))])]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), Gw = Uw, Yw = /* @__PURE__ */ b({
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
    const t = e, n = Wn();
    be();
    const o = S(() => n.page.value === n.pageCount.value || n.disabled.value);
    return (a, r) => (h(), x(s(ge), A(t, {
      "aria-label": "Last Page",
      type: a.as === "button" ? "button" : void 0,
      disabled: o.value,
      onClick: r[0] || (r[0] = (l) => !o.value && s(n).onPageChange(s(n).pageCount.value))
    }), {
      default: y(() => [_(a.$slots, "default", {}, () => [r[1] || (r[1] = _e("Last page"))])]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), Xw = Yw;
function jt(e, t) {
  const n = t - e + 1;
  return Array.from({ length: n }, (o, a) => a + e);
}
function Zw(e) {
  return e.map((t) => typeof t == "number" ? {
    type: "page",
    value: t
  } : { type: "ellipsis" });
}
const To = "ellipsis";
function Qw(e, t, n, o) {
  const r = t, l = Math.max(e - n, 1), i = Math.min(e + n, r);
  if (o) {
    const d = Math.min(2 * n + 5, t) - 2, c = l > 3 && Math.abs(r - d - 1 + 1) > 2 && Math.abs(l - 1) > 2, p = i < r - 2 && Math.abs(r - d) > 2 && Math.abs(r - i) > 2;
    if (!c && p)
      return [
        ...jt(1, d),
        To,
        r
      ];
    if (c && !p) {
      const m = jt(r - d + 1, r);
      return [
        1,
        To,
        ...m
      ];
    }
    if (c && p) {
      const m = jt(l, i);
      return [
        1,
        To,
        ...m,
        To,
        r
      ];
    }
    return jt(1, r);
  } else {
    const u = n * 2 + 1;
    return t < u ? jt(1, r) : e <= n + 1 ? jt(1, u) : t - e <= n ? jt(t - u + 1, r) : jt(l, i);
  }
}
var Jw = /* @__PURE__ */ b({
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
    be();
    const n = Wn(), o = S(() => Zw(Qw(n.page.value, n.pageCount.value, n.siblingCount.value, n.showEdges.value)));
    return (a, r) => (h(), x(s(ge), Q(ee(t)), {
      default: y(() => [_(a.$slots, "default", { items: o.value })]),
      _: 3
    }, 16));
  }
}), e1 = Jw, t1 = /* @__PURE__ */ b({
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
    be();
    const n = Wn(), o = S(() => n.page.value === t.value), a = S(() => n.disabled.value);
    return (r, l) => (h(), x(s(ge), A(t, {
      "data-type": "page",
      "aria-label": `Page ${r.value}`,
      "aria-current": o.value ? "page" : void 0,
      "data-selected": o.value ? "true" : void 0,
      disabled: a.value,
      type: r.as === "button" ? "button" : void 0,
      onClick: l[0] || (l[0] = (i) => !a.value && s(n).onPageChange(r.value))
    }), {
      default: y(() => [_(r.$slots, "default", {}, () => [_e(ke(r.value), 1)])]),
      _: 3
    }, 16, [
      "aria-label",
      "aria-current",
      "data-selected",
      "disabled",
      "type"
    ]));
  }
}), n1 = t1, o1 = /* @__PURE__ */ b({
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
    be();
    const n = Wn(), o = S(() => n.page.value === n.pageCount.value || n.disabled.value);
    return (a, r) => (h(), x(s(ge), A(t, {
      "aria-label": "Next Page",
      type: a.as === "button" ? "button" : void 0,
      disabled: o.value,
      onClick: r[0] || (r[0] = (l) => !o.value && s(n).onPageChange(s(n).page.value + 1))
    }), {
      default: y(() => [_(a.$slots, "default", {}, () => [r[1] || (r[1] = _e("Next page"))])]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), a1 = o1, r1 = /* @__PURE__ */ b({
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
    be();
    const n = Wn(), o = S(() => n.page.value === 1 || n.disabled.value);
    return (a, r) => (h(), x(s(ge), A(t, {
      "aria-label": "Previous Page",
      type: a.as === "button" ? "button" : void 0,
      disabled: o.value,
      onClick: r[0] || (r[0] = (l) => !o.value && s(n).onPageChange(s(n).page.value - 1))
    }), {
      default: y(() => [_(a.$slots, "default", {}, () => [r[1] || (r[1] = _e("Prev page"))])]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), s1 = r1;
const ox = /* @__PURE__ */ b({
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
    }), r = St(a, o);
    return (l, i) => (h(), x(s(Tb), A(s(r), {
      class: s(z)(
        "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        n.class
      )
    }), {
      default: y(() => [
        R(s(Mb), { class: "flex h-full w-full items-center justify-center text-current" }, {
          default: y(() => [
            _(l.$slots, "default", {}, () => [
              R(s(Vy), { class: "h-4 w-4" })
            ])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ax = /* @__PURE__ */ b({
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
    const a = St(e, t);
    return (r, l) => (h(), x(s(B0), Q(ee(s(a))), {
      default: y(({ open: i }) => [
        _(r.$slots, "default", { open: i })
      ]),
      _: 3
    }, 16));
  }
}), rx = /* @__PURE__ */ b({
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(S0), A(t, { class: "overflow-hidden transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down" }), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), sx = /* @__PURE__ */ b({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(O0), Q(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), lx = /* @__PURE__ */ b({
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
    const a = St(e, t);
    return (r, l) => (h(), x(s(mw), Q(ee(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ix = /* @__PURE__ */ b({
  __name: "ComboboxAnchor",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = He(t, "class"), o = fn(n);
    return (a, r) => (h(), x(s(Gb), A(s(o), {
      class: s(z)("w-[200px]", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ux = /* @__PURE__ */ b({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = He(t, "class");
    return (o, a) => (h(), x(s(Cw), A(s(n), {
      class: s(z)("py-6 text-center text-sm", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), dx = /* @__PURE__ */ b({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    heading: {}
  },
  setup(e) {
    const t = e, n = He(t, "class");
    return (o, a) => (h(), x(s(Sw), A(s(n), {
      class: s(z)(
        "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
        t.class
      )
    }), {
      default: y(() => [
        e.heading ? (h(), x(s(Tw), {
          key: 0,
          class: "px-2 py-1.5 text-xs font-medium text-muted-foreground"
        }, {
          default: y(() => [
            _e(ke(e.heading), 1)
          ]),
          _: 1
        })) : ce("", !0),
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), cx = /* @__PURE__ */ b({
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
    const n = e, o = t, a = He(n, "class"), r = St(a, o);
    return (l, i) => (h(), x(s(Ow), A(s(r), {
      class: s(z)(
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
}), px = /* @__PURE__ */ b({
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
    const n = e, o = t, a = He(n, "class"), r = St(a, o);
    return (l, i) => (h(), x(s(Pw), A(s(r), {
      class: s(z)(
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
}), fx = /* @__PURE__ */ b({
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
    const n = e, o = t, a = He(n, "class"), r = St(a, o);
    return (l, i) => (h(), x(s(Mw), null, {
      default: y(() => [
        R(s(_w), A(s(r), {
          class: s(z)(
            "z-50 w-[200px] rounded-md border bg-popover text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            n.class
          )
        }), {
          default: y(() => [
            R(s(qw), null, {
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
}), vx = /* @__PURE__ */ b({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = He(t, "class");
    return (o, a) => (h(), x(s(Rw), A(s(n), {
      class: s(z)("-mx-1 h-px bg-border", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), l1 = /* @__PURE__ */ b({
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
    }), r = de(a, o);
    return (l, i) => (h(), x(s(tf), A(s(r), {
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
}), i1 = /* @__PURE__ */ b({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = de(e, t);
    return (r, l) => (h(), x(s(Er), Q(ee(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), mx = /* @__PURE__ */ b({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(sn), Q(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), gx = /* @__PURE__ */ b({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Pr), Q(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hx = /* @__PURE__ */ b({
  __name: "DialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), q("div", {
      class: le(s(z)("flex flex-col gap-y-1.5 text-center sm:text-left", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), yx = /* @__PURE__ */ b({
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
    }), o = je(n);
    return (a, r) => (h(), x(s(Mr), A(s(o), {
      class: s(z)("text-lg font-semibold leading-none tracking-tight", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), bx = /* @__PURE__ */ b({
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
    }), o = je(n);
    return (a, r) => (h(), x(s(Fr), A(s(o), {
      class: s(z)("text-sm text-muted-foreground", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), u1 = /* @__PURE__ */ b({
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
    }), r = de(a, o);
    return (l, i) => (h(), x(s(Dr), null, {
      default: y(() => [
        R(s(la), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        R(s(sa), A(s(r), {
          class: s(z)(
            "fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
            n.class
          )
        }), {
          default: y(() => [
            _(l.$slots, "default"),
            R(s(sn), {
              class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
              onClick: i[0] || (i[0] = (u) => o("close", u))
            }, {
              default: y(() => [
                R(s(pa), { class: "size-4" }),
                i[1] || (i[1] = oe("span", { class: "sr-only" }, "Close", -1))
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
}), wx = /* @__PURE__ */ b({
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
    }), r = de(a, o);
    return (l, i) => (h(), x(s(Dr), null, {
      default: y(() => [
        R(s(la), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: y(() => [
            R(s(sa), A({
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
                R(s(sn), { class: "absolute right-4 top-4 rounded-md p-0.5 transition-colors hover:bg-secondary" }, {
                  default: y(() => [
                    R(s(pa), { class: "h-4 w-4" }),
                    i[1] || (i[1] = oe("span", { class: "sr-only" }, "Close", -1))
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
}), _x = /* @__PURE__ */ b({
  __name: "DialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), q("div", {
      class: le(s(z)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), xx = /* @__PURE__ */ b({
  __name: "CommandDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = de(e, t);
    return (r, l) => (h(), x(s(i1), Q(ee(s(a))), {
      default: y(() => [
        R(s(u1), { class: "overflow-hidden p-0 shadow-lg" }, {
          default: y(() => [
            R(l1, { class: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5" }, {
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
}), Cx = /* @__PURE__ */ b({
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
    return (o, a) => (h(), x(s(df), A(n.value, {
      class: s(z)("py-6 text-center text-sm", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Bx = /* @__PURE__ */ b({
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
    return (o, a) => (h(), x(s(af), A(n.value, {
      class: s(z)(
        "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
        t.class
      )
    }), {
      default: y(() => [
        e.heading ? (h(), x(s(rf), {
          key: 0,
          class: "px-2 py-1.5 text-xs font-medium text-muted-foreground"
        }, {
          default: y(() => [
            _e(ke(e.heading), 1)
          ]),
          _: 1
        })) : ce("", !0),
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), d1 = {
  class: "flex items-center border-b px-3",
  "cmdk-input-wrapper": ""
}, $x = /* @__PURE__ */ b({
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
    }), o = je(n);
    return (a, r) => (h(), q("div", d1, [
      R(s(Bh), { class: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
      R(s(nf), A({ ...s(o), ...a.$attrs }, {
        "auto-focus": "",
        class: s(z)(
          "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          t.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), Sx = /* @__PURE__ */ b({
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
    }), r = de(a, o);
    return (l, i) => (h(), x(s(vf), A(s(r), {
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
}), c1 = { role: "presentation" }, kx = /* @__PURE__ */ b({
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
    }), r = de(a, o);
    return (l, i) => (h(), x(s(uf), A(s(r), {
      class: s(z)("max-h-[300px] overflow-y-auto overflow-x-hidden", n.class)
    }), {
      default: y(() => [
        oe("div", c1, [
          _(l.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ox = /* @__PURE__ */ b({
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
    return (o, a) => (h(), x(s(mf), A(n.value, {
      class: s(z)("-mx-1 h-px bg-border", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ex = /* @__PURE__ */ b({
  __name: "CommandShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), q("span", {
      class: le(s(z)("ml-auto text-xs tracking-widest text-muted-foreground", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
});
function rr(e) {
  let t = null;
  return (...n) => {
    t && cancelAnimationFrame(t), t = requestAnimationFrame(() => {
      e(...n);
    });
  };
}
function p1() {
  return new Promise((e) => {
    if (!(window != null && window.requestAnimationFrame))
      return e(60);
    const t = [];
    let n;
    function o(a) {
      if (t.unshift(a), t.length > 10) {
        const r = t.pop(), l = Math.floor(1e3 * 10 / (a - r));
        cancelAnimationFrame(n), e(Math.min(Math.max(l, 30), 240));
        return;
      }
      n = window.requestAnimationFrame(o);
    }
    n = window.requestAnimationFrame(o), setTimeout(() => {
      cancelAnimationFrame(n), e(60);
    }, 1e3);
  });
}
function f1(e) {
  const t = rr(() => {
    const a = e();
    if (!a)
      return;
    a.scrollLeft ? a.dataset.scrollX = "true" : delete a.dataset.scrollX;
  }), n = rr(() => {
    const a = e();
    if (!a)
      return;
    let r = 0;
    const i = a.querySelectorAll("th")[0];
    i && !i.getAttribute("data-column") && (r += i.getBoundingClientRect().width), a.querySelectorAll("th[data-column]").forEach((u) => {
      const d = u.getAttribute("data-column");
      d && (a.style.setProperty(`--column-${d}-offset`, `${r}px`), r += u.getBoundingClientRect().width);
    });
  });
  let o = null;
  return {
    add: () => {
      const a = e();
      a && (o = new MutationObserver(() => {
        n(), t();
      }), a.addEventListener("scroll", t, { passive: !0 }), o.observe(a, { childList: !0, subtree: !0 }), window.addEventListener("resize", n, { passive: !0 }), n(), t());
    },
    remove: () => {
      const a = e();
      window.removeEventListener("resize", n), o == null || o.disconnect(), a == null || a.removeEventListener("scroll", t);
    }
  };
}
function v1(e, t) {
  let n = null, o = Math.ceil(1e3 / 60);
  p1().then((i) => o = Math.ceil(1e3 / i));
  const a = rr((i, u) => {
    i.style.setProperty("--header-offset", `${u}px`);
  });
  function r() {
    const i = e(), u = t();
    if (!i || !u)
      return;
    i.dataset.isScrollingY = "true", n && clearTimeout(n);
    const d = i.getBoundingClientRect(), c = u.offsetHeight;
    let p = !1;
    d.top + c / 2 < 0 && d.bottom > c && (p = Math.min(-d.top, d.bottom - c - d.top) - c), a(i, p || 0), n = window.setTimeout(() => {
      const m = p ? p + c : 0;
      a(i, m), m ? i.dataset.scrollY = "true" : delete i.dataset.scrollY, delete i.dataset.isScrollingY;
    }, o);
  }
  let l = null;
  return {
    add: () => {
      const i = e();
      l = (i == null ? void 0 : i.closest("[scroll-region]")) || window, l.addEventListener("scroll", r, {
        passive: !0
      }), window.addEventListener("resize", r, { passive: !0 }), r();
    },
    remove: () => {
      window.removeEventListener("resize", r), l && l.removeEventListener("scroll", r), n && clearTimeout(n);
    }
  };
}
function Va(e = {}) {
  const t = {};
  return e.columns && e.columns.forEach((n) => {
    t[n] = !0;
  }), {
    filters: {},
    sort: {
      column: null,
      direction: null
    },
    search: "",
    page: 1,
    perPage: e.defaultPerPage || 15,
    cursor: null,
    sticky: [],
    columns: t,
    ...e.initialState
  };
}
function m1(e = {}) {
  const t = E(Va(e));
  Va(e);
  function n(P, k) {
    t.value.filters[P] = {
      enabled: !0,
      value: k
    };
  }
  function o(P) {
    t.value.filters[P] && (t.value.filters[P].enabled = !1, t.value.filters[P].value = null);
  }
  function a() {
    Object.keys(t.value.filters).forEach((P) => {
      t.value.filters[P].enabled = !1, t.value.filters[P].value = null;
    });
  }
  function r(P, k) {
    t.value.sort = {
      column: P,
      direction: k
    };
  }
  function l(P) {
    t.value.sort.column !== P ? r(P, "asc") : t.value.sort.direction === "asc" ? r(P, "desc") : r(null, null);
  }
  function i(P) {
    t.value.search = P;
  }
  function u(P) {
    t.value.page = P;
  }
  function d(P) {
    t.value.perPage = P;
  }
  function c(P) {
    t.value.cursor = P;
  }
  function p(P) {
    if (!e.columns) return;
    const k = e.columns.indexOf(P);
    if (k === -1) return;
    const I = e.columns.slice(0, k + 1);
    t.value.sticky = I;
  }
  function v(P) {
    const k = t.value.sticky.indexOf(P);
    k !== -1 && (t.value.sticky = t.value.sticky.slice(0, k));
  }
  function m(P) {
    P in t.value.columns && (t.value.columns[P] = !t.value.columns[P]);
  }
  function f(P) {
    t.value.columns[P] = !0;
  }
  function g(P) {
    t.value.columns[P] = !1;
  }
  function w(P) {
    t.value = {
      ...t.value,
      ...P
    };
  }
  function C() {
    const P = new URLSearchParams(), k = e.urlPrefix || "";
    return Object.entries(t.value.filters).forEach(([I, F]) => {
      F.enabled && F.value != null && P.append(`${k}filter[${I}]`, String(F.value));
    }), t.value.sort.column && t.value.sort.direction && (P.append(`${k}sort`, t.value.sort.column), P.append(`${k}direction`, t.value.sort.direction)), t.value.search && P.append(`${k}search`, t.value.search), t.value.page !== 1 && P.append(`${k}page`, String(t.value.page)), t.value.perPage !== (e.defaultPerPage || 15) && P.append(`${k}perPage`, String(t.value.perPage)), t.value.cursor && P.append(`${k}cursor`, t.value.cursor), t.value.sticky.forEach((I) => {
      P.append(`${k}sticky[]`, I);
    }), Object.entries(t.value.columns).forEach(([I, F]) => {
      F || P.append(`${k}columns[${I}]`, "false");
    }), P.toString();
  }
  function $() {
    return { ...t.value };
  }
  function B(P) {
    const k = new URLSearchParams(P), I = e.urlPrefix || "", F = {};
    k.forEach((Y, K) => {
      const H = K.match(new RegExp(`^${I}filter\\[(.+)\\]$`));
      H && (F[H[1]] = {
        enabled: !0,
        value: Y
      });
    }), Object.keys(F).length > 0 && (t.value.filters = { ...t.value.filters, ...F });
    const T = k.get(`${I}sort`), V = k.get(`${I}direction`);
    T && (t.value.sort = { column: T, direction: V || "asc" });
    const M = k.get(`${I}search`);
    M && (t.value.search = M);
    const G = k.get(`${I}page`);
    G && (t.value.page = parseInt(G, 10));
    const L = k.get(`${I}perPage`);
    L && (t.value.perPage = parseInt(L, 10));
    const W = k.get(`${I}cursor`);
    W && (t.value.cursor = W);
    const j = [];
    k.forEach((Y, K) => {
      K === `${I}sticky[]` && j.push(Y);
    }), j.length > 0 && (t.value.sticky = j), k.forEach((Y, K) => {
      const H = K.match(new RegExp(`^${I}columns\\[(.+)\\]$`));
      H && (t.value.columns[H[1]] = Y !== "false");
    });
  }
  function D(P) {
    w(P);
  }
  function O() {
    t.value = Va(e);
  }
  return e.syncWithUrl && typeof window < "u" && (te(
    t,
    () => {
      const P = C(), k = P ? `${window.location.pathname}?${P}` : window.location.pathname;
      window.history.replaceState({}, "", k);
    },
    { deep: !0 }
  ), window.location.search && B(window.location.search.substring(1))), {
    state: t,
    addFilter: n,
    removeFilter: o,
    clearFilters: a,
    setSort: r,
    toggleSort: l,
    setSearch: i,
    setPage: u,
    setPerPage: d,
    setCursor: c,
    makeSticky: p,
    undoSticky: v,
    toggleColumn: m,
    showColumn: f,
    hideColumn: g,
    setState: w,
    toQueryString: C,
    toObject: $,
    fromQueryString: B,
    fromObject: D,
    reset: O
  };
}
const g1 = { class: "group border-b border-gray-200 dark:border-zinc-700" }, h1 = {
  key: 0,
  class: "h-10 w-12 px-2 text-left align-middle font-medium text-gray-500 group-hover:bg-gray-100/50 dark:text-zinc-400 dark:group-hover:bg-zinc-900/50 md:sticky md:z-30 md:bg-white/90 md:dark:bg-zinc-900/90",
  style: { left: "0" }
}, y1 = { class: "flex items-center justify-center" }, b1 = ["checked", "indeterminate"], w1 = ["data-column"], _1 = {
  key: 1,
  class: "h-10 w-24 px-2 text-center align-middle font-medium text-gray-500 group-hover:bg-gray-100/50 dark:text-zinc-400 dark:group-hover:bg-zinc-900/50 md:sticky md:z-30 md:bg-white/90 md:dark:bg-zinc-900/90",
  style: { right: "0" }
}, x1 = {
  key: 0,
  class: "w-12 p-2 align-middle md:sticky md:z-10 md:bg-white/90 md:dark:bg-zinc-900/90",
  style: { left: "0" }
}, C1 = { class: "flex items-center justify-center" }, B1 = ["checked", "onChange"], $1 = ["data-column"], S1 = ["src", "alt"], k1 = {
  key: 1,
  class: "w-24 p-2 text-center align-middle md:sticky md:z-10 md:bg-white/90 md:dark:bg-zinc-900/90",
  style: { right: "0" }
}, O1 = { class: "flex items-center justify-center gap-1" }, E1 = ["onClick"], P1 = {
  key: 1,
  class: "group/actions relative"
}, D1 = { class: "absolute right-0 z-50 mt-1 hidden min-w-[120px] rounded-md border border-gray-200 bg-white py-1 shadow-lg group-hover/actions:block dark:border-zinc-700 dark:bg-zinc-800" }, A1 = ["onClick"], T1 = { key: 1 }, I1 = ["colspan"], M1 = { class: "flex items-center justify-center py-10" }, Px = /* @__PURE__ */ b({
  __name: "Datatable",
  props: {
    columns: {},
    data: {},
    datatableState: {},
    stickyColumns: { default: () => [] },
    actions: { default: () => [] },
    tableClasses: { default: "bg-white" }
  },
  emits: ["state-change", "selection-change"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = Go(), r = m1({
      columns: n.columns.map((L) => L.key)
    }), l = S(() => n.datatableState || r);
    te(
      () => n.stickyColumns,
      (L) => {
        !n.datatableState && L && (l.value.state.value.sticky = L);
      },
      { immediate: !0 }
    ), te(
      () => l.value.state.value,
      (L) => {
        o("state-change", L);
      },
      { deep: !0 }
    );
    const i = E(null), u = E(null), d = f1(() => i.value), c = v1(
      () => i.value,
      () => u.value
    );
    ie(() => {
      d.add(), c.add();
    }), Ne(() => {
      d.remove(), c.remove();
    });
    const p = (L) => L && typeof L == "object" && "data" in L && Array.isArray(L.data), v = S(() => Array.isArray(n.data) ? n.data : p(n.data) ? n.data.data : []), m = S(() => !v.value || v.value.length === 0), f = (L) => n.stickyColumns.includes(L), g = (L) => {
      const W = n.stickyColumns[n.stickyColumns.length - 1];
      return L === W;
    }, w = [
      "relative",
      "after:content-['']",
      "after:h-full",
      "after:w-px",
      "after:bg-gray-100",
      "after:shadow-[1px_0px_3px_0px_rgba(27,27,27,0.14)]",
      "after:absolute",
      "after:top-0",
      "after:right-0",
      "after:dark:bg-zinc-700"
    ].join(" "), C = (L) => !!L.image, $ = (L, W) => L[W.key] || null, B = (L) => typeof L.image == "string" ? L.image : "size-6", D = E(/* @__PURE__ */ new Set()), O = S(() => m.value || !F.value ? !1 : v.value.every((L, W) => D.value.has(W))), P = S(() => m.value || !F.value ? !1 : D.value.size > 0 && !O.value), k = (L) => {
      D.value.has(L) ? D.value.delete(L) : D.value.add(L), o("selection-change", D.value);
    }, I = () => {
      O.value ? D.value.clear() : v.value.forEach((L, W) => {
        D.value.add(W);
      }), o("selection-change", D.value);
    }, F = S(() => n.actions.some((L) => L.bulk === !0)), T = S(() => n.actions.length > 0), V = S(() => n.actions.filter((L) => !L.bulk)), M = (L) => V.value.filter((W) => W.visible ? W.visible(L) : !0), G = (L, W) => {
      L.handler([W]);
    };
    return (L, W) => (h(), q("div", {
      ref_key: "tableContainerRef",
      ref: i,
      class: "group/table max-h-full max-w-full overflow-auto rounded-md bg-white dark:bg-zinc-900"
    }, [
      oe("table", {
        class: le(s(z)("relative w-full caption-bottom text-sm border-collapse", e.tableClasses))
      }, [
        m.value ? ce("", !0) : (h(), q("thead", {
          key: 0,
          ref_key: "theadRef",
          ref: u,
          class: "sticky top-0 z-20 bg-white dark:bg-zinc-900"
        }, [
          oe("tr", g1, [
            F.value ? (h(), q("th", h1, [
              oe("div", y1, [
                oe("input", {
                  type: "checkbox",
                  checked: O.value,
                  indeterminate: P.value,
                  class: "size-4 cursor-pointer rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-zinc-600 dark:bg-zinc-800",
                  onChange: I
                }, null, 40, b1)
              ])
            ])) : ce("", !0),
            (h(!0), q(Be, null, rt(e.columns, (j) => (h(), q("th", {
              key: j.key,
              "data-column": j.key,
              class: le(
                s(z)(
                  "h-10 px-2 text-left align-middle font-medium text-gray-500 dark:text-zinc-400",
                  "group-hover:bg-gray-100/50 dark:group-hover:bg-zinc-900/50",
                  j.headerCellClasses,
                  {
                    // Sticky column with semi-transparent background and calculated offset (disabled on mobile)
                    "md:sticky md:z-30 md:bg-white/90 md:dark:bg-zinc-900/90": f(
                      j.key
                    )
                  },
                  // Visual separator for last sticky column (pseudo-element vertical line from InertiaUI)
                  g(j.key) ? s(w) : ""
                )
              ),
              style: lt(
                f(j.key) ? { left: `var(--column-${j.key}-offset, 0px)` } : {}
              )
            }, [
              oe("div", {
                class: le(j.headerContentClasses)
              }, ke(j.label), 3)
            ], 14, w1))), 128)),
            T.value ? (h(), q("th", _1, [...W[0] || (W[0] = [
              oe("div", null, "Actions", -1)
            ])])) : ce("", !0)
          ])
        ], 512)),
        oe("tbody", null, [
          m.value ? (h(), q("tr", T1, [
            oe("td", {
              colspan: e.columns.length + (F.value ? 1 : 0) + (T.value ? 1 : 0),
              class: "whitespace-nowrap p-4 align-middle text-sm text-foreground"
            }, [
              oe("div", M1, [
                _(L.$slots, "empty", {}, () => [
                  W[2] || (W[2] = _e("No Records.", -1))
                ])
              ])
            ], 8, I1)
          ])) : (h(!0), q(Be, { key: 0 }, rt(v.value, (j, Y) => (h(), q("tr", {
            key: Y,
            class: "border-b border-gray-200 hover:bg-gray-100/50 dark:border-zinc-700 dark:hover:bg-zinc-900/50"
          }, [
            F.value ? (h(), q("td", x1, [
              oe("div", C1, [
                oe("input", {
                  type: "checkbox",
                  checked: D.value.has(Y),
                  class: "size-4 cursor-pointer rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-zinc-600 dark:bg-zinc-800",
                  onChange: (K) => k(Y)
                }, null, 40, B1)
              ])
            ])) : ce("", !0),
            (h(!0), q(Be, null, rt(e.columns, (K) => (h(), q("td", {
              key: K.key,
              "data-column": K.key,
              class: le(
                s(z)(
                  "p-2 align-middle",
                  K.cellClasses,
                  {
                    // Sticky column with semi-transparent background and calculated offset (disabled on mobile)
                    "md:sticky md:z-10 md:bg-white/90 md:dark:bg-zinc-900/90": f(
                      K.key
                    )
                  },
                  // Visual separator for last sticky column (pseudo-element vertical line from InertiaUI)
                  g(K.key) ? s(w) : ""
                )
              ),
              style: lt(
                f(K.key) ? { left: `var(--column-${K.key}-offset, 0px)` } : {}
              )
            }, [
              C(K) && !s(a)[`row-${K.key}`] ? (h(), q(Be, { key: 0 }, [
                $(j, K) ? (h(), q("img", {
                  key: 0,
                  src: $(j, K),
                  alt: K.label,
                  loading: "lazy",
                  class: le(B(K))
                }, null, 10, S1)) : ce("", !0)
              ], 64)) : (h(), q("div", {
                key: 1,
                class: le(K.cellContentClasses)
              }, [
                s(a)[`row-${K.key}`] ? _(L.$slots, `row-${K.key}`, {
                  key: 0,
                  row: j,
                  column: K,
                  value: j[K.key]
                }) : (h(), q(Be, { key: 1 }, [
                  _e(ke(j[K.key]), 1)
                ], 64))
              ], 2))
            ], 14, $1))), 128)),
            T.value ? (h(), q("td", k1, [
              oe("div", O1, [
                s(a)["row-actions"] ? _(L.$slots, "row-actions", {
                  key: 0,
                  row: j,
                  rowIndex: Y,
                  visibleActions: M(j)
                }) : (h(), q(Be, { key: 1 }, [
                  M(j).length === 1 ? (h(), q("button", {
                    key: 0,
                    type: "button",
                    class: "rounded px-2 py-1 text-xs font-medium text-gray-700 hover:bg-gray-100 dark:text-zinc-300 dark:hover:bg-zinc-800",
                    onClick: (K) => G(M(j)[0], j)
                  }, ke(M(j)[0].label), 9, E1)) : M(j).length > 1 ? (h(), q("div", P1, [
                    W[1] || (W[1] = Ku('<button type="button" class="flex size-8 items-center justify-center rounded hover:bg-gray-100 dark:hover:bg-zinc-800" aria-label="Actions"><svg class="size-4 text-gray-700 dark:text-zinc-300" fill="currentColor" viewBox="0 0 16 16"><circle cx="2" cy="8" r="1.5"></circle><circle cx="8" cy="8" r="1.5"></circle><circle cx="14" cy="8" r="1.5"></circle></svg></button>', 1)),
                    oe("div", D1, [
                      (h(!0), q(Be, null, rt(M(j), (K) => (h(), q("button", {
                        key: K.label,
                        type: "button",
                        class: "block w-full px-4 py-2 text-left text-xs text-gray-700 hover:bg-gray-100 dark:text-zinc-300 dark:hover:bg-zinc-700",
                        onClick: (H) => G(K, j)
                      }, ke(K.label), 9, A1))), 128))
                    ])
                  ])) : ce("", !0)
                ], 64))
              ])
            ])) : ce("", !0)
          ]))), 128))
        ])
      ], 2)
    ], 512));
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
const F1 = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const R1 = (e) => typeof e < "u";
function L1(e) {
  return JSON.parse(JSON.stringify(e));
}
function ll(e, t, n, o = {}) {
  var a, r, l;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: c = !1,
    defaultValue: p,
    shouldEmit: v
  } = o, m = Ue(), f = n || (m == null ? void 0 : m.emit) || ((a = m == null ? void 0 : m.$emit) == null ? void 0 : a.bind(m)) || ((l = (r = m == null ? void 0 : m.proxy) == null ? void 0 : r.$emit) == null ? void 0 : l.bind(m == null ? void 0 : m.proxy));
  let g = d;
  t || (t = "modelValue"), g = g || `update:${t.toString()}`;
  const w = (B) => i ? typeof i == "function" ? i(B) : L1(B) : B, C = () => R1(e[t]) ? w(e[t]) : p, $ = (B) => {
    v ? v(B) && f(g, B) : f(g, B);
  };
  if (u) {
    const B = C(), D = E(B);
    let O = !1;
    return te(
      () => e[t],
      (P) => {
        O || (O = !0, D.value = w(P), re(() => O = !1));
      }
    ), te(
      D,
      (P) => {
        !O && (P !== e[t] || c) && $(P);
      },
      { deep: c }
    ), D;
  } else
    return S({
      get() {
        return C();
      },
      set(B) {
        $(B);
      }
    });
}
const [ss, V1] = Ye("DrawerRoot"), ku = /* @__PURE__ */ new WeakMap();
function Ke(e, t, n = !1) {
  if (!e || !(e instanceof HTMLElement) || !t)
    return;
  const o = {};
  Object.entries(t).forEach(([a, r]) => {
    if (a.startsWith("--")) {
      e.style.setProperty(a, r);
      return;
    }
    o[a] = e.style[a], e.style[a] = r;
  }), !n && ku.set(e, o);
}
function z1(e, t) {
  if (!e || !(e instanceof HTMLElement))
    return;
  const n = ku.get(e);
  n && Object.entries(n).forEach(([o, a]) => {
    e.style[o] = a;
  });
}
function Io(e, t) {
  const n = window.getComputedStyle(e), o = n.transform || n.webkitTransform || n.mozTransform;
  let a = o.match(/^matrix3d\((.+)\)$/);
  return a ? Number.parseFloat(a[1].split(", ")[Re(t) ? 13 : 12]) : (a = o.match(/^matrix\((.+)\)$/), a ? Number.parseFloat(a[1].split(", ")[Re(t) ? 5 : 4]) : null);
}
function q1(e) {
  return 8 * (Math.log(e + 1) - 2);
}
function Re(e) {
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
function za(e, t) {
  if (!e)
    return () => {
    };
  const n = e.style.cssText;
  return Object.assign(e.style, t), () => {
    e.style.cssText = n;
  };
}
function N1(...e) {
  return (...t) => {
    for (const n of e)
      typeof n == "function" && n(...t);
  };
}
const Te = {
  DURATION: 0.5,
  EASE: [0.32, 0.72, 0, 1]
}, Ou = 0.4, j1 = 0.25, K1 = 100, Eu = 8, Mo = 16, Pu = 26, il = "vaul-dragging";
function H1({
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
  ie(() => {
    typeof window < "u" && window.addEventListener("resize", u);
  }), Tn(() => {
    typeof window < "u" && window.removeEventListener("resize", u);
  });
  const d = S(
    () => (t.value && e.value === t.value[t.value.length - 1]) ?? null
  ), c = S(
    () => t.value && t.value.length > 0 && ((a == null ? void 0 : a.value) || (a == null ? void 0 : a.value) === 0) && !Number.isNaN(a == null ? void 0 : a.value) && t.value[(a == null ? void 0 : a.value) ?? -1] === e.value || !t.value
  ), p = S(
    () => {
      var $;
      return (($ = t.value) == null ? void 0 : $.findIndex((B) => B === e.value)) ?? null;
    }
  ), v = S(
    () => {
      var $;
      return (($ = t.value) == null ? void 0 : $.map((B) => {
        const D = typeof B == "string";
        let O = 0;
        if (D && (O = Number.parseInt(B, 10)), Re(l.value)) {
          const k = D ? O : i.value ? B * i.value.innerHeight : 0;
          return i.value ? l.value === "bottom" ? i.value.innerHeight - k : -i.value.innerHeight + k : k;
        }
        const P = D ? O : i.value ? B * i.value.innerWidth : 0;
        return i.value ? l.value === "right" ? i.value.innerWidth - P : -i.value.innerWidth + P : P;
      })) ?? [];
    }
  ), m = S(
    () => {
      var $;
      return p.value !== null ? ($ = v.value) == null ? void 0 : $[p.value] : null;
    }
  ), f = ($) => {
    var B, D, O, P;
    const k = ((B = v.value) == null ? void 0 : B.findIndex((I) => I === $)) ?? null;
    re(() => {
      var I;
      r(k, v.value), Ke((I = n.value) == null ? void 0 : I.$el, {
        transition: `transform ${Te.DURATION}s cubic-bezier(${Te.EASE.join(",")})`,
        transform: Re(l.value) ? `translate3d(0, ${$}px, 0)` : `translate3d(${$}px, 0, 0)`
      });
    }), v.value && k !== v.value.length - 1 && k !== (a == null ? void 0 : a.value) ? Ke((D = o.value) == null ? void 0 : D.$el, {
      transition: `opacity ${Te.DURATION}s cubic-bezier(${Te.EASE.join(",")})`,
      opacity: "0"
    }) : Ke((O = o.value) == null ? void 0 : O.$el, {
      transition: `opacity ${Te.DURATION}s cubic-bezier(${Te.EASE.join(",")})`,
      opacity: "1"
    }), e.value = k !== null ? ((P = t.value) == null ? void 0 : P[k]) ?? null : null;
  };
  te(
    [e, v, t],
    () => {
      var $;
      if (e.value) {
        const B = (($ = t.value) == null ? void 0 : $.findIndex((D) => D === e.value)) ?? -1;
        v.value && B !== -1 && typeof v.value[B] == "number" && f(v.value[B]);
      }
    },
    {
      immediate: !0
      // if you want to run the effect immediately as well
    }
  );
  function g({
    draggedDistance: $,
    closeDrawer: B,
    velocity: D,
    dismissible: O
  }) {
    var P, k, I;
    if (a.value === void 0)
      return;
    const F = l.value === "bottom" || l.value === "right" ? (m.value ?? 0) - $ : (m.value ?? 0) + $, T = p.value === a.value - 1, V = p.value === 0, M = $ > 0;
    if (T && Ke((P = o.value) == null ? void 0 : P.$el, {
      transition: `opacity ${Te.DURATION}s cubic-bezier(${Te.EASE.join(",")})`
    }), D > 2 && !M) {
      O ? B() : f(v.value[0]);
      return;
    }
    if (D > 2 && M && v && t.value) {
      f(v.value[t.value.length - 1]);
      return;
    }
    const G = (k = v.value) == null ? void 0 : k.reduce((W, j) => typeof W != "number" || typeof j != "number" ? W : Math.abs(j - F) < Math.abs(W - F) ? j : W), L = Re(l.value) ? window.innerHeight : window.innerWidth;
    if (D > Ou && Math.abs($) < L * 0.4) {
      const W = M ? 1 : -1;
      if (W > 0 && d) {
        f(v.value[(((I = t.value) == null ? void 0 : I.length) ?? 0) - 1]);
        return;
      }
      if (V && W < 0 && O && B(), p.value === null)
        return;
      f(v.value[p.value + W]);
      return;
    }
    f(G);
  }
  function w({ draggedDistance: $ }) {
    var B;
    if (m.value === null)
      return;
    const D = l.value === "bottom" || l.value === "right" ? m.value - $ : m.value + $;
    (l.value === "bottom" || l.value === "right") && D < v.value[v.value.length - 1] || (l.value === "top" || l.value === "left") && D > v.value[v.value.length - 1] || Ke((B = n.value) == null ? void 0 : B.$el, {
      transform: Re(l.value) ? `translate3d(0, ${D}px, 0)` : `translate3d(${D}px, 0, 0)`
    });
  }
  function C($, B) {
    if (!t.value || typeof p.value != "number" || !v.value || a.value === void 0)
      return null;
    const D = p.value === a.value - 1;
    if (p.value >= a.value && B)
      return 0;
    if (D && !B)
      return 1;
    if (!c.value && !D)
      return null;
    const O = D ? p.value + 1 : p.value - 1, P = D ? v.value[O] - v.value[O - 1] : v.value[O + 1] - v.value[O], k = $ / Math.abs(P);
    return D ? 1 - k : k;
  }
  return {
    isLastSnapPoint: d,
    shouldFade: c,
    getPercentageDragged: C,
    activeSnapPointIndex: p,
    onRelease: g,
    onDrag: w,
    snapPointsOffset: v
  };
}
function ul() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
let Xn = null;
function W1(e) {
  const { isOpen: t, modal: n, nested: o, hasBeenOpened: a, preventScrollRestoration: r, noBodyStyles: l } = e, i = E(typeof window < "u" ? window.location.href : ""), u = E(0);
  function d() {
    if (ul() && Xn === null && t.value && !l.value) {
      Xn = {
        position: document.body.style.position,
        top: document.body.style.top,
        left: document.body.style.left,
        height: document.body.style.height
      };
      const { scrollX: p, innerHeight: v } = window;
      document.body.style.setProperty("position", "fixed", "important"), Object.assign(document.body.style, {
        top: `${-u.value}px`,
        left: `${-p}px`,
        right: "0px",
        height: "auto"
      }), setTimeout(() => {
        requestAnimationFrame(() => {
          const m = v - window.innerHeight;
          m && u.value >= v && (document.body.style.top = `-${u.value + m}px`);
        });
      }, 300);
    }
  }
  function c() {
    if (ul() && Xn !== null && !l.value) {
      const p = -Number.parseInt(document.body.style.top, 10), v = -Number.parseInt(document.body.style.left, 10);
      Object.assign(document.body.style, Xn), window.requestAnimationFrame(() => {
        if (r.value && i.value !== window.location.href) {
          i.value = window.location.href;
          return;
        }
        window.scrollTo(v, p);
      }), Xn = null;
    }
  }
  return ie(() => {
    function p() {
      u.value = window.scrollY;
    }
    p(), window.addEventListener("scroll", p), Ne(() => {
      window.removeEventListener("scroll", p);
    });
  }), te([t, a, i], () => {
    o.value || !a.value || (t.value ? (window.matchMedia("(display-mode: standalone)").matches || d(), n.value || setTimeout(() => {
      c();
    }, 500)) : c());
  }), { restorePositionSetting: c };
}
function U1(e, t) {
  return e && e.value ? e : t;
}
function G1(e) {
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
    setBackgroundColorOnScale: c,
    scrollLockTimeout: p,
    closeThreshold: v,
    activeSnapPoint: m,
    fadeFromIndex: f,
    direction: g,
    noBodyStyles: w,
    handleOnly: C,
    preventScrollRestoration: $
  } = e, B = E(r.value ?? !1), D = E(!1), O = E(!1), P = E(!1), k = E(null), I = E(null), F = E(null), T = E(null), V = E(null), M = E(!1), G = E(null), L = E(0), W = E(!1);
  E(0);
  const j = E(null);
  E(0);
  const Y = S(() => {
    var ne;
    return ((ne = j.value) == null ? void 0 : ne.$el.getBoundingClientRect().height) || 0;
  }), K = U1(
    e.snapPoints,
    E(void 0)
  ), H = S(() => {
    var ne;
    return K && (((ne = K.value) == null ? void 0 : ne.length) ?? 0) > 0;
  }), ue = E(null), {
    activeSnapPointIndex: se,
    onRelease: De,
    snapPointsOffset: Me,
    onDrag: Ve,
    shouldFade: Xe,
    getPercentageDragged: ot
  } = H1({
    snapPoints: K,
    activeSnapPoint: m,
    drawerRef: j,
    fadeFromIndex: f,
    overlayRef: k,
    onSnapPointChange: U,
    direction: g
  });
  function U(ne, $e) {
    K.value && ne === $e.length - 1 && (I.value = /* @__PURE__ */ new Date());
  }
  W1({
    isOpen: B,
    modal: u,
    nested: i,
    hasBeenOpened: D,
    noBodyStyles: w,
    preventScrollRestoration: $
  });
  function Z() {
    return (window.innerWidth - Pu) / window.innerWidth;
  }
  function ae(ne, $e) {
    var Oe;
    if (!ne)
      return !1;
    let Ce = ne;
    const Fe = (Oe = window.getSelection()) == null ? void 0 : Oe.toString(), ze = j.value ? Io(j.value.$el, g.value) : null, Ze = /* @__PURE__ */ new Date();
    if (Ce.hasAttribute("data-vaul-no-drag") || Ce.closest("[data-vaul-no-drag]"))
      return !1;
    if (g.value === "right" || g.value === "left")
      return !0;
    if (I.value && Ze.getTime() - I.value.getTime() < 500)
      return !1;
    if (ze !== null && (g.value === "bottom" ? ze > 0 : ze < 0))
      return !0;
    if (Fe && Fe.length > 0)
      return !1;
    if (V.value && Ze.getTime() - V.value.getTime() < p.value && ze === 0 || $e)
      return V.value = Ze, !1;
    for (; Ce; ) {
      if (Ce.scrollHeight > Ce.clientHeight) {
        if (Ce.scrollTop !== 0)
          return V.value = /* @__PURE__ */ new Date(), !1;
        if (Ce.getAttribute("role") === "dialog")
          return !0;
      }
      Ce = Ce.parentNode;
    }
    return !0;
  }
  function pe(ne) {
    !l.value && !K.value || j.value && !j.value.$el.contains(ne.target) || (O.value = !0, F.value = /* @__PURE__ */ new Date(), ne.target.setPointerCapture(ne.pointerId), L.value = Re(g.value) ? ne.clientY : ne.clientX);
  }
  function me(ne) {
    var $e, Oe, Ce, Fe, ze, Ze;
    if (j.value && O.value) {
      const Ot = g.value === "bottom" || g.value === "right" ? 1 : -1, vn = (L.value - (Re(g.value) ? ne.clientY : ne.clientX)) * Ot, Qt = vn > 0, wo = K.value && !l.value && !Qt;
      if (wo && se.value === 0)
        return;
      const Jt = Math.abs(vn), Et = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      let ct = Jt / Y.value;
      const mn = ot(Jt, Qt);
      if (mn !== null && (ct = mn), wo && ct >= 1 || !M.value && !ae(ne.target, Qt))
        return;
      if (($e = j == null ? void 0 : j.value) == null || $e.$el.classList.add(il), M.value = !0, Ke((Oe = j.value) == null ? void 0 : Oe.$el, {
        transition: "none"
      }), Ke((Ce = k.value) == null ? void 0 : Ce.$el, {
        transition: "none"
      }), K.value && Ve({ draggedDistance: vn }), Qt && !K.value) {
        const Pt = q1(vn), hn = Math.min(Pt * -1, 0) * Ot;
        Ke((Fe = j.value) == null ? void 0 : Fe.$el, {
          transform: Re(g.value) ? `translate3d(0, ${hn}px, 0)` : `translate3d(${hn}px, 0, 0)`
        });
        return;
      }
      const gn = 1 - ct;
      if ((Xe.value || f.value && se.value === f.value - 1) && (t(ct), Ke(
        (ze = k.value) == null ? void 0 : ze.$el,
        {
          opacity: `${gn}`,
          transition: "none"
        },
        !0
      )), Et && k.value && d.value) {
        const Pt = Math.min(Z() + ct * (1 - Z()), 1), hn = 8 - ct * 8, _o = Math.max(0, 14 - ct * 14);
        Ke(
          Et,
          {
            borderRadius: `${hn}px`,
            transform: Re(g.value) ? `scale(${Pt}) translate3d(0, ${_o}px, 0)` : `scale(${Pt}) translate3d(${_o}px, 0, 0)`,
            transition: "none"
          },
          !0
        );
      }
      if (!K.value) {
        const Pt = Jt * Ot;
        Ke((Ze = j.value) == null ? void 0 : Ze.$el, {
          transform: Re(g.value) ? `translate3d(0, ${Pt}px, 0)` : `translate3d(${Pt}px, 0, 0)`
        });
      }
    }
  }
  function J() {
    var ne;
    if (!j.value)
      return;
    const $e = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]"), Oe = Io(j.value.$el, g.value);
    Ke(j.value.$el, {
      transform: "translate3d(0, 0, 0)",
      transition: `transform ${Te.DURATION}s cubic-bezier(${Te.EASE.join(",")})`
    }), Ke((ne = k.value) == null ? void 0 : ne.$el, {
      transition: `opacity ${Te.DURATION}s cubic-bezier(${Te.EASE.join(",")})`,
      opacity: "1"
    }), d.value && Oe && Oe > 0 && B.value && Ke(
      $e,
      {
        borderRadius: `${Eu}px`,
        overflow: "hidden",
        ...Re(g.value) ? {
          transform: `scale(${Z()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
          transformOrigin: "top"
        } : {
          transform: `scale(${Z()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
          transformOrigin: "left"
        },
        transitionProperty: "transform, border-radius",
        transitionDuration: `${Te.DURATION}s`,
        transitionTimingFunction: `cubic-bezier(${Te.EASE.join(",")})`
      },
      !0
    );
  }
  function he(ne) {
    j.value && (o(), ne || (B.value = !1), window.setTimeout(() => {
      K.value && (m.value = K.value[0]);
    }, Te.DURATION * 1e3));
  }
  xe(() => {
    if (!B.value && d.value && F1) {
      const ne = setTimeout(() => {
        z1(document.body);
      }, 200);
      return () => clearTimeout(ne);
    }
  }), te(r, () => {
    B.value = r.value, r.value || he();
  });
  function Se(ne) {
    if (!O.value || !j.value)
      return;
    j.value.$el.classList.remove(il), M.value = !1, O.value = !1, T.value = /* @__PURE__ */ new Date();
    const $e = Io(j.value.$el, g.value);
    if (!ae(ne.target, !1) || !$e || Number.isNaN($e) || F.value === null)
      return;
    const Oe = T.value.getTime() - F.value.getTime(), Ce = L.value - (Re(g.value) ? ne.clientY : ne.clientX), Fe = Math.abs(Ce) / Oe;
    if (Fe > 0.05 && (P.value = !0, window.setTimeout(() => {
      P.value = !1;
    }, 200)), K.value) {
      const Ze = g.value === "bottom" || g.value === "right" ? 1 : -1;
      De({
        draggedDistance: Ce * Ze,
        closeDrawer: he,
        velocity: Fe,
        dismissible: l.value
      }), n(!0);
      return;
    }
    if (g.value === "bottom" || g.value === "right" ? Ce > 0 : Ce < 0) {
      J(), n(!0);
      return;
    }
    if (Fe > Ou) {
      he(), n(!1);
      return;
    }
    const ze = Math.min(
      j.value.$el.getBoundingClientRect().height ?? 0,
      window.innerHeight
    );
    if ($e >= ze * v.value) {
      he(), n(!1);
      return;
    }
    n(!0), J();
  }
  te(B, (ne) => {
    ne && (I.value = /* @__PURE__ */ new Date()), a(ne);
  }, { immediate: !0 });
  function We(ne) {
    var $e, Oe;
    const Ce = ne ? (window.innerWidth - Mo) / window.innerWidth : 1, Fe = ne ? -16 : 0;
    G.value && window.clearTimeout(G.value), Ke(($e = j.value) == null ? void 0 : $e.$el, {
      transition: `transform ${Te.DURATION}s cubic-bezier(${Te.EASE.join(",")})`,
      transform: `scale(${Ce}) translate3d(0, ${Fe}px, 0)`
    }), !ne && (Oe = j.value) != null && Oe.$el && (G.value = window.setTimeout(() => {
      var ze, Ze;
      const Ot = Io((ze = j.value) == null ? void 0 : ze.$el, g.value);
      Ke((Ze = j.value) == null ? void 0 : Ze.$el, {
        transition: "none",
        transform: Re(g.value) ? `translate3d(0, ${Ot}px, 0)` : `translate3d(${Ot}px, 0, 0)`
      });
    }, 500));
  }
  function at(ne) {
    var $e;
    if (ne < 0)
      return;
    const Oe = Re(g.value) ? window.innerHeight : window.innerWidth, Ce = (Oe - Mo) / Oe, Fe = Ce + ne * (1 - Ce), ze = -16 + ne * Mo;
    Ke(($e = j.value) == null ? void 0 : $e.$el, {
      transform: Re(g.value) ? `scale(${Fe}) translate3d(0, ${ze}px, 0)` : `scale(${Fe}) translate3d(${ze}px, 0, 0)`,
      transition: "none"
    });
  }
  function dt(ne) {
    var $e;
    const Oe = Re(g.value) ? window.innerHeight : window.innerWidth, Ce = ne ? (Oe - Mo) / Oe : 1, Fe = ne ? -16 : 0;
    ne && Ke(($e = j.value) == null ? void 0 : $e.$el, {
      transition: `transform ${Te.DURATION}s cubic-bezier(${Te.EASE.join(",")})`,
      transform: Re(g.value) ? `scale(${Ce}) translate3d(0, ${Fe}px, 0)` : `scale(${Ce}) translate3d(${Fe}px, 0, 0)`
    });
  }
  return {
    open: r,
    isOpen: B,
    modal: u,
    keyboardIsOpen: W,
    hasBeenOpened: D,
    drawerRef: j,
    drawerHeightRef: Y,
    overlayRef: k,
    handleRef: ue,
    isDragging: O,
    dragStartTime: F,
    isAllowedToDrag: M,
    snapPoints: K,
    activeSnapPoint: m,
    hasSnapPoints: H,
    pointerStart: L,
    dismissible: l,
    snapPointsOffset: Me,
    direction: g,
    shouldFade: Xe,
    fadeFromIndex: f,
    shouldScaleBackground: d,
    setBackgroundColorOnScale: c,
    onPress: pe,
    onDrag: me,
    onRelease: Se,
    closeDrawer: he,
    onNestedDrag: at,
    onNestedRelease: dt,
    onNestedOpenChange: We,
    emitClose: o,
    emitDrag: t,
    emitRelease: n,
    emitOpenChange: a,
    nested: i,
    handleOnly: C,
    noBodyStyles: w
  };
}
const Y1 = /* @__PURE__ */ b({
  __name: "DrawerRoot",
  props: {
    activeSnapPoint: { default: void 0 },
    closeThreshold: { default: j1 },
    shouldScaleBackground: { type: Boolean, default: void 0 },
    setBackgroundColorOnScale: { type: Boolean, default: !0 },
    scrollLockTimeout: { default: K1 },
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
    Go();
    const r = S(() => o.fadeFromIndex ?? (o.snapPoints && o.snapPoints.length - 1)), l = ll(o, "open", a, {
      defaultValue: o.defaultOpen,
      passive: o.open === void 0
    }), i = ll(o, "activeSnapPoint", a, {
      passive: o.activeSnapPoint === void 0
    }), u = {
      emitDrag: (f) => a("drag", f),
      emitRelease: (f) => a("release", f),
      emitClose: () => a("close"),
      emitOpenChange: (f) => {
        a("update:open", f), setTimeout(() => {
          a("animationEnd", f);
        }, Te.DURATION * 1e3);
      }
    }, { closeDrawer: d, hasBeenOpened: c, modal: p, isOpen: v } = V1(
      G1({
        ...u,
        ...we(o),
        activeSnapPoint: i,
        fadeFromIndex: r,
        open: l
      })
    );
    function m(f) {
      if (l.value !== void 0) {
        u.emitOpenChange(f);
        return;
      }
      v.value = f, f ? c.value = !0 : d();
    }
    return t({
      open: v
    }), (f, g) => (h(), x(s(D0), {
      open: s(v),
      modal: s(p),
      "onUpdate:open": m
    }, {
      default: y(() => [
        _(f.$slots, "default", { open: s(v) })
      ]),
      _: 3
    }, 8, ["open", "modal"]));
  }
}), X1 = /* @__PURE__ */ b({
  __name: "DrawerOverlay",
  setup(e) {
    const { overlayRef: t, hasSnapPoints: n, isOpen: o, shouldFade: a } = ss();
    return (r, l) => (h(), x(s(db), {
      ref_key: "overlayRef",
      ref: t,
      "data-vaul-overlay": "",
      "data-vaul-snap-points": s(o) && s(n) ? "true" : "false",
      "data-vaul-snap-points-overlay": s(o) && s(a) ? "true" : "false"
    }, null, 8, ["data-vaul-snap-points", "data-vaul-snap-points-overlay"]));
  }
}), Z1 = () => () => {
};
function Q1() {
  const { direction: e, isOpen: t, shouldScaleBackground: n, setBackgroundColorOnScale: o, noBodyStyles: a } = ss(), r = E(null), l = E(document.body.style.backgroundColor);
  function i() {
    return (window.innerWidth - Pu) / window.innerWidth;
  }
  xe((u) => {
    if (t.value && n.value) {
      r.value && clearTimeout(r.value);
      const d = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      if (!d)
        return;
      N1(
        o.value && !a.value ? za(document.body, { background: "black" }) : Z1,
        za(d, {
          transformOrigin: Re(e.value) ? "top" : "left",
          transitionProperty: "transform, border-radius",
          transitionDuration: `${Te.DURATION}s`,
          transitionTimingFunction: `cubic-bezier(${Te.EASE.join(",")})`
        })
      );
      const c = za(d, {
        borderRadius: `${Eu}px`,
        overflow: "hidden",
        ...Re(e.value) ? {
          transform: `scale(${i()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`
        } : {
          transform: `scale(${i()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`
        }
      });
      u(() => {
        c(), r.value = window.setTimeout(() => {
          l.value ? document.body.style.background = l.value : document.body.style.removeProperty("background");
        }, Te.DURATION * 1e3);
      });
    }
  }, { flush: "pre" });
}
const J1 = /* @__PURE__ */ b({
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
      emitOpenChange: c,
      dismissible: p,
      keyboardIsOpen: v,
      closeDrawer: m,
      direction: f,
      handleOnly: g
    } = ss();
    Q1();
    const w = E(!1), C = S(() => o.value && o.value.length > 0 ? `${o.value[0]}px` : "0");
    function $(O) {
      if (!d.value || O.defaultPrevented) {
        O.preventDefault();
        return;
      }
      v.value && (v.value = !1), p.value ? c(!1) : O.preventDefault();
    }
    function B(O) {
      g.value || l(O);
    }
    function D(O) {
      g.value || i(O);
    }
    return xe(() => {
      a.value && window.requestAnimationFrame(() => {
        w.value = !0;
      });
    }), (O, P) => (h(), x(s(ab), {
      ref_key: "drawerRef",
      ref: r,
      "data-vaul-drawer": "",
      "data-vaul-drawer-direction": s(f),
      "data-vaul-delayed-snap-points": w.value ? "true" : "false",
      "data-vaul-snap-points": s(n) && s(a) ? "true" : "false",
      style: lt({ "--snap-point-height": C.value }),
      onPointerdown: B,
      onPointermove: D,
      onPointerup: s(u),
      onPointerDownOutside: $,
      onOpenAutoFocus: P[0] || (P[0] = Ae(() => {
      }, ["prevent"])),
      onEscapeKeyDown: P[1] || (P[1] = (k) => {
        s(p) || k.preventDefault();
      })
    }, {
      default: y(() => [
        _(O.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-vaul-drawer-direction", "data-vaul-delayed-snap-points", "data-vaul-snap-points", "style", "onPointerup"]));
  }
}), Dx = /* @__PURE__ */ b({
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
    const a = St(e, t);
    return (r, l) => (h(), x(s(Y1), A({ "data-slot": "drawer" }, s(a)), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ax = /* @__PURE__ */ b({
  __name: "DrawerClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(T0), A({ "data-slot": "drawer-close" }, t), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), e_ = /* @__PURE__ */ b({
  __name: "DrawerOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = He(t, "class");
    return (o, a) => (h(), x(s(X1), A({ "data-slot": "drawer-overlay" }, s(n), {
      class: s(z)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        t.class
      )
    }), null, 16, ["class"]));
  }
}), Tx = /* @__PURE__ */ b({
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
    const n = e, a = St(n, t);
    return (r, l) => (h(), x(s(fb), null, {
      default: y(() => [
        R(e_),
        R(s(J1), A({ "data-slot": "drawer-content" }, s(a), {
          class: s(z)(
            "group/drawer-content bg-background fixed z-50 flex h-auto flex-col",
            "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg",
            "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg",
            "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:sm:max-w-sm",
            "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:sm:max-w-sm",
            n.class
          )
        }), {
          default: y(() => [
            l[0] || (l[0] = oe("div", { class: "mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full bg-muted group-data-[vaul-drawer-direction=bottom]/drawer-content:block" }, null, -1)),
            _(r.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Ix = /* @__PURE__ */ b({
  __name: "DrawerDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = He(t, "class");
    return (o, a) => (h(), x(s(sb), A({ "data-slot": "drawer-description" }, s(n), {
      class: s(z)("text-muted-foreground text-sm", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Mx = /* @__PURE__ */ b({
  __name: "DrawerFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), q("div", {
      "data-slot": "drawer-footer",
      class: le(s(z)("mt-auto flex flex-col gap-2 p-4", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), Fx = /* @__PURE__ */ b({
  __name: "DrawerHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), q("div", {
      "data-slot": "drawer-header",
      class: le(s(z)("flex flex-col gap-1.5 p-4", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), Rx = /* @__PURE__ */ b({
  __name: "DrawerTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = He(t, "class");
    return (o, a) => (h(), x(s(mb), A({ "data-slot": "drawer-title" }, s(n), {
      class: s(z)("text-foreground font-semibold", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Lx = /* @__PURE__ */ b({
  __name: "DrawerTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(hb), A({ "data-slot": "drawer-trigger" }, t), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Vx = /* @__PURE__ */ b({
  __name: "DropdownMenu",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = de(e, t);
    return (r, l) => (h(), x(s(Gf), Q(ee(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), zx = /* @__PURE__ */ b({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const n = je(e);
    return (o, a) => (h(), x(s(Yf), A({ class: "outline-none" }, s(n)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), qx = /* @__PURE__ */ b({
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
    }), r = de(a, o);
    return (l, i) => (h(), x(s(Xf), null, {
      default: y(() => [
        R(s(Zf), A(s(r), {
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
}), Nx = /* @__PURE__ */ b({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Jf), Q(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), jx = /* @__PURE__ */ b({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = de(e, t);
    return (r, l) => (h(), x(s(ov), Q(ee(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Kx = /* @__PURE__ */ b({
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
    }), o = je(n);
    return (a, r) => (h(), x(s(Qf), A(s(o), {
      class: s(z)(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        e.inset && "pl-8",
        t.class
      )
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), t_ = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, Hx = /* @__PURE__ */ b({
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
    }), r = de(a, o);
    return (l, i) => (h(), x(s(tv), A(s(r), {
      class: s(z)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        n.class
      )
    }), {
      default: y(() => [
        oe("span", t_, [
          R(s(wi), null, {
            default: y(() => [
              R(s(tu), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), n_ = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, Wx = /* @__PURE__ */ b({
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
    }), r = de(a, o);
    return (l, i) => (h(), x(s(av), A(s(r), {
      class: s(z)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        n.class
      )
    }), {
      default: y(() => [
        oe("span", n_, [
          R(s(wi), null, {
            default: y(() => [
              R(s(Ch), { class: "h-4 w-4 fill-current" })
            ]),
            _: 1
          })
        ]),
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ux = /* @__PURE__ */ b({
  __name: "DropdownMenuShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), q("span", {
      class: le(s(z)("ml-auto text-xs tracking-widest opacity-60", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), Gx = /* @__PURE__ */ b({
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
    return (o, a) => (h(), x(s(ev), A(n.value, {
      class: s(z)("-mx-1 my-1 h-px bg-muted", t.class)
    }), null, 16, ["class"]));
  }
}), Yx = /* @__PURE__ */ b({
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
    }), o = je(n);
    return (a, r) => (h(), x(s(nv), A(s(o), {
      class: s(z)("px-2 py-1.5 text-sm font-semibold", e.inset && "pl-8", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Xx = /* @__PURE__ */ b({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = de(e, t);
    return (r, l) => (h(), x(s(rv), Q(ee(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zx = /* @__PURE__ */ b({
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
    }), o = je(n);
    return (a, r) => (h(), x(s(lv), A(s(o), {
      class: s(z)(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
        t.class
      )
    }), {
      default: y(() => [
        _(a.$slots, "default"),
        R(s(_h), { class: "ml-auto h-4 w-4" })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Qx = /* @__PURE__ */ b({
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
    }), r = de(a, o);
    return (l, i) => (h(), x(s(sv), A(s(r), {
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
}), Jx = /* @__PURE__ */ b({
  __name: "Input",
  props: {
    defaultValue: {},
    modelValue: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = ou(n, "modelValue", t, {
      passive: !0,
      defaultValue: n.defaultValue
    });
    return (r, l) => An((h(), q("input", {
      "onUpdate:modelValue": l[0] || (l[0] = (i) => st(a) ? a.value = i : null),
      class: le(
        s(z)(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          n.class
        )
      )
    }, null, 2)), [
      [hl, s(a)]
    ]);
  }
}), eC = /* @__PURE__ */ b({
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
    return (o, a) => (h(), x(s(iv), A(n.value, {
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
}), tC = /* @__PURE__ */ b({
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
    const n = e, o = t, a = He(n, "class"), r = St(a, o);
    return (l, i) => (h(), x(s(Ww), A({ "data-slot": "pagination" }, s(r), {
      class: s(z)("mx-auto flex w-full justify-center", n.class)
    }), {
      default: y((u) => [
        _(l.$slots, "default", Q(ee(u)))
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), nC = /* @__PURE__ */ b({
  __name: "PaginationContent",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = He(t, "class");
    return (o, a) => (h(), x(s(e1), A({ "data-slot": "pagination-content" }, s(n), {
      class: s(z)("flex flex-row items-center gap-1", t.class)
    }), {
      default: y((r) => [
        _(o.$slots, "default", Q(ee(r)))
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), oC = /* @__PURE__ */ b({
  __name: "PaginationEllipsis",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = He(t, "class");
    return (o, a) => (h(), x(s(jw), A({ "data-slot": "pagination-ellipsis" }, s(n), {
      class: s(z)("flex size-9 items-center justify-center", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default", {}, () => [
          R(s(zy), { class: "size-4" }),
          a[0] || (a[0] = oe("span", { class: "sr-only" }, "More pages", -1))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), aC = /* @__PURE__ */ b({
  __name: "PaginationFirst",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, n = He(t, "class", "size"), o = fn(n);
    return (a, r) => (h(), x(s(Gw), A({
      "data-slot": "pagination-first",
      class: s(z)(s(Zt)({ variant: "ghost", size: e.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, s(o)), {
      default: y(() => [
        _(a.$slots, "default", {}, () => [
          R(s(lu)),
          r[0] || (r[0] = oe("span", { class: "hidden sm:block" }, "First", -1))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), rC = /* @__PURE__ */ b({
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
    const t = e, n = He(t, "class", "size", "isActive");
    return (o, a) => (h(), x(s(n1), A({ "data-slot": "pagination-item" }, s(n), {
      class: s(z)(
        s(Zt)({
          variant: e.isActive ? "outline" : "ghost",
          size: e.size
        }),
        t.class
      )
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), sC = /* @__PURE__ */ b({
  __name: "PaginationLast",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, n = He(t, "class", "size"), o = fn(n);
    return (a, r) => (h(), x(s(Xw), A({
      "data-slot": "pagination-last",
      class: s(z)(s(Zt)({ variant: "ghost", size: e.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, s(o)), {
      default: y(() => [
        _(a.$slots, "default", {}, () => [
          r[0] || (r[0] = oe("span", { class: "hidden sm:block" }, "Last", -1)),
          R(s(iu))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), lC = /* @__PURE__ */ b({
  __name: "PaginationNext",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, n = He(t, "class", "size"), o = fn(n);
    return (a, r) => (h(), x(s(a1), A({
      "data-slot": "pagination-next",
      class: s(z)(s(Zt)({ variant: "ghost", size: e.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, s(o)), {
      default: y(() => [
        _(a.$slots, "default", {}, () => [
          r[0] || (r[0] = oe("span", { class: "hidden sm:block" }, "Next", -1)),
          R(s(iu))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), iC = /* @__PURE__ */ b({
  __name: "PaginationPrevious",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, n = He(t, "class", "size"), o = fn(n);
    return (a, r) => (h(), x(s(s1), A({
      "data-slot": "pagination-previous",
      class: s(z)(s(Zt)({ variant: "ghost", size: e.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, s(o)), {
      default: y(() => [
        _(a.$slots, "default", {}, () => [
          R(s(lu)),
          r[0] || (r[0] = oe("span", { class: "hidden sm:block" }, "Previous", -1))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), uC = /* @__PURE__ */ b({
  __name: "Popover",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = de(e, t);
    return (r, l) => (h(), x(s(dv), Q(ee(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), dC = /* @__PURE__ */ b({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(cv), Q(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), cC = /* @__PURE__ */ b({
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
    }), r = de(a, o);
    return (l, i) => (h(), x(s(pv), null, {
      default: y(() => [
        R(s(mv), A({ ...s(r), ...l.$attrs }, {
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
}), pC = /* @__PURE__ */ b({
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
    return (o, a) => (h(), x(s(wv), A(n.value, {
      class: s(z)("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", t.class)
    }), {
      default: y(() => [
        R(s(_v), {
          class: "h-full w-full flex-1 bg-primary transition-all",
          style: lt(`transform: translateX(-${100 - (t.modelValue ?? 0)}%);`)
        }, null, 8, ["style"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), fC = /* @__PURE__ */ b({
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
    const a = de(e, t);
    return (r, l) => (h(), x(s(kv), Q(ee(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vC = /* @__PURE__ */ b({
  __name: "SelectValue",
  props: {
    placeholder: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Zv), Q(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), mC = /* @__PURE__ */ b({
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
    }), o = je(n);
    return (a, r) => (h(), x(s(Pv), A(s(o), {
      class: s(z)(
        "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:truncate text-start",
        t.class
      )
    }), {
      default: y(() => [
        _(a.$slots, "default"),
        R(s(Qv), { "as-child": "" }, {
          default: y(() => [
            R(s(wh), { class: "h-4 w-4 shrink-0 opacity-50" })
          ]),
          _: 1
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), gC = /* @__PURE__ */ b({
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
    }), r = de(a, o);
    return (l, i) => (h(), x(s(Dv), null, {
      default: y(() => [
        R(s(Vv), A({ ...s(r), ...l.$attrs }, {
          class: s(z)(
            "relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            e.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            n.class
          )
        }), {
          default: y(() => [
            R(s(a_)),
            R(s(Gv), {
              class: le(
                s(z)(
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
            R(s(r_))
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), hC = /* @__PURE__ */ b({
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
    return (o, a) => (h(), x(s(Wv), A({
      class: s(z)("p-1 w-full", t.class)
    }, n.value), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), o_ = { class: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center" }, yC = /* @__PURE__ */ b({
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
    }), o = je(n);
    return (a, r) => (h(), x(s(Nv), A(s(o), {
      class: s(z)(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        t.class
      )
    }), {
      default: y(() => [
        oe("span", o_, [
          R(s(jv), null, {
            default: y(() => [
              R(s(tu), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        R(s($i), null, {
          default: y(() => [
            _(a.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), bC = /* @__PURE__ */ b({
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s($i), Q(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wC = /* @__PURE__ */ b({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Uv), {
      class: le(s(z)("px-2 py-1.5 text-sm font-semibold", t.class))
    }, {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), _C = /* @__PURE__ */ b({
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
    return (o, a) => (h(), x(s(zv), A(n.value, {
      class: s(z)("-mx-1 my-1 h-px bg-muted", t.class)
    }), null, 16, ["class"]));
  }
}), a_ = /* @__PURE__ */ b({
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
    }), o = je(n);
    return (a, r) => (h(), x(s(Yv), A(s(o), {
      class: s(z)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default", {}, () => [
          R(s(xh))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), r_ = /* @__PURE__ */ b({
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
    }), o = je(n);
    return (a, r) => (h(), x(s(Xv), A(s(o), {
      class: s(z)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default", {}, () => [
          R(s(nu))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), xC = /* @__PURE__ */ b({
  __name: "Sheet",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = de(e, t);
    return (r, l) => (h(), x(s(Er), Q(ee(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), CC = /* @__PURE__ */ b({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Pr), Q(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), BC = /* @__PURE__ */ b({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(sn), Q(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $C = /* @__PURE__ */ b({
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
    }), r = de(a, o);
    return (l, i) => (h(), x(s(Dr), null, {
      default: y(() => [
        R(s(la), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        R(s(sa), A({
          class: s(z)(s(s_)({ side: e.side }), n.class)
        }, { ...s(r), ...l.$attrs }), {
          default: y(() => [
            _(l.$slots, "default"),
            R(s(sn), { class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary" }, {
              default: y(() => [
                R(s(pa), { class: "h-4 w-4" })
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
}), SC = /* @__PURE__ */ b({
  __name: "SheetHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), q("div", {
      class: le(s(z)("flex flex-col gap-y-2 text-center sm:text-left", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), kC = /* @__PURE__ */ b({
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
    return (o, a) => (h(), x(s(Mr), A({
      class: s(z)("text-lg font-semibold text-foreground", t.class)
    }, n.value), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), OC = /* @__PURE__ */ b({
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
    return (o, a) => (h(), x(s(Fr), A({
      class: s(z)("text-sm text-muted-foreground", t.class)
    }, n.value), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), EC = /* @__PURE__ */ b({
  __name: "SheetFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), q("div", {
      class: le(s(z)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), s_ = ho(
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
), PC = /* @__PURE__ */ b({
  __name: "Skeleton",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), q("div", {
      class: le(s(z)("animate-pulse rounded-md bg-primary/10", t.class))
    }, null, 2));
  }
}), DC = /* @__PURE__ */ b({
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
    }), r = de(a, o);
    return (l, i) => (h(), x(s(cm), A({
      class: s(z)("relative flex w-full touch-none select-none items-center", n.class)
    }, s(r)), {
      default: y(() => [
        R(s(vm), { class: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20" }, {
          default: y(() => [
            R(s(mm), { class: "absolute h-full bg-primary" })
          ]),
          _: 1
        }),
        (h(!0), q(Be, null, rt(e.modelValue, (u, d) => (h(), x(s(fm), {
          key: d,
          class: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        }))), 128))
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), AC = /* @__PURE__ */ b({
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
    }), r = de(a, o);
    return (l, i) => (h(), x(s(wm), A(s(r), {
      class: s(z)(
        "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        n.class
      )
    }), {
      default: y(() => [
        R(s(_m), {
          class: le(
            s(z)(
              "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
            )
          )
        }, null, 8, ["class"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), l_ = { class: "relative w-full overflow-auto" }, TC = /* @__PURE__ */ b({
  __name: "Table",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), q("div", l_, [
      oe("table", {
        class: le(s(z)("w-full caption-bottom text-sm", t.class))
      }, [
        _(n.$slots, "default")
      ], 2)
    ]));
  }
}), IC = /* @__PURE__ */ b({
  __name: "TableBody",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), q("tbody", {
      class: le(s(z)("[&_tr:last-child]:border-0", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), i_ = /* @__PURE__ */ b({
  __name: "TableCell",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), q("td", {
      class: le(
        s(z)(
          "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5",
          t.class
        )
      )
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), MC = /* @__PURE__ */ b({
  __name: "TableHead",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), q("th", {
      class: le(
        s(z)(
          "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5",
          t.class
        )
      )
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), FC = /* @__PURE__ */ b({
  __name: "TableHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), q("thead", {
      class: le(s(z)("[&_tr]:border-b", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), RC = /* @__PURE__ */ b({
  __name: "TableFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), q("tfoot", {
      class: le(s(z)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), u_ = /* @__PURE__ */ b({
  __name: "TableRow",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), q("tr", {
      class: le(
        s(z)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", t.class)
      )
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), LC = /* @__PURE__ */ b({
  __name: "TableCaption",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), q("caption", {
      class: le(s(z)("mt-4 text-sm text-muted-foreground", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), d_ = { class: "flex items-center justify-center py-10" }, VC = /* @__PURE__ */ b({
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
    return (o, a) => (h(), x(u_, null, {
      default: y(() => [
        R(i_, A({
          class: s(z)("p-4 whitespace-nowrap align-middle text-sm text-foreground", t.class)
        }, n.value), {
          default: y(() => [
            oe("div", d_, [
              _(o.$slots, "default")
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), zC = /* @__PURE__ */ b({
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
    const a = de(e, t);
    return (r, l) => (h(), x(s(Cm), Q(ee(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), qC = /* @__PURE__ */ b({
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
    return (o, a) => (h(), x(s($m), A({
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
}), NC = /* @__PURE__ */ b({
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
    return (o, a) => (h(), x(s(Bm), A(n.value, {
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
}), c_ = { class: "truncate" }, jC = /* @__PURE__ */ b({
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
    }), o = je(n);
    return (a, r) => (h(), x(s(Sm), A(s(o), {
      class: s(z)(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
        t.class
      )
    }), {
      default: y(() => [
        oe("span", c_, [
          _(a.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), p_ = ["placeholder"], KC = /* @__PURE__ */ b({
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
    const n = e, a = ou(n, "modelValue", t, {
      passive: !0,
      defaultValue: n.defaultValue
    }), r = S(() => a.value ? a.value.toString().length : 0);
    return (l, i) => (h(), q(Be, null, [
      An(oe("textarea", {
        "onUpdate:modelValue": i[0] || (i[0] = (u) => st(a) ? a.value = u : null),
        placeholder: e.placeholder,
        class: le(
          s(z)(
            "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            n.class
          )
        )
      }, null, 10, p_), [
        [hl, s(a)]
      ]),
      e.charLimit ? (h(), q("p", {
        key: 0,
        class: le(["mt-1 flex w-full justify-end text-sm text-gray-500", { "text-red-500": r.value > e.charLimit }])
      }, ke(r.value) + " / " + ke(e.charLimit), 3)) : ce("", !0)
    ], 64));
  }
});
export {
  I_ as Accord,
  Ah as Accordion,
  Th as AccordionContent,
  Ih as AccordionItem,
  Mh as AccordionTrigger,
  Eg as AlertDialog,
  Mg as AlertDialogAction,
  Fg as AlertDialogCancel,
  Pg as AlertDialogContent,
  Tg as AlertDialogDescription,
  Ig as AlertDialogFooter,
  Dg as AlertDialogHeader,
  Ag as AlertDialogTitle,
  x_ as AlertDialogTrigger,
  F_ as Avatar,
  L_ as AvatarFallback,
  R_ as AvatarImage,
  V_ as Badge,
  Gi as Button,
  z_ as Card,
  q_ as CardContent,
  N_ as CardDescription,
  j_ as CardFooter,
  K_ as CardHeader,
  H_ as CardTitle,
  W_ as Carousel,
  U_ as CarouselContent,
  G_ as CarouselItem,
  X_ as CarouselNext,
  Y_ as CarouselPrevious,
  ox as Checkbox,
  ax as Collapsible,
  rx as CollapsibleContent,
  sx as CollapsibleTrigger,
  lx as Combobox,
  ix as ComboboxAnchor,
  ex as ComboboxCancel,
  ux as ComboboxEmpty,
  dx as ComboboxGroup,
  cx as ComboboxInput,
  px as ComboboxItem,
  tx as ComboboxItemIndicator,
  fx as ComboboxList,
  vx as ComboboxSeparator,
  nx as ComboboxTrigger,
  l1 as Command,
  xx as CommandDialog,
  Cx as CommandEmpty,
  Bx as CommandGroup,
  $x as CommandInput,
  Sx as CommandItem,
  kx as CommandList,
  Ox as CommandSeparator,
  Ex as CommandShortcut,
  C_ as ConfirmDialog,
  Px as Datatable,
  i1 as Dialog,
  mx as DialogClose,
  u1 as DialogContent,
  bx as DialogDescription,
  _x as DialogFooter,
  hx as DialogHeader,
  wx as DialogScrollContent,
  yx as DialogTitle,
  gx as DialogTrigger,
  Dx as Drawer,
  Ax as DrawerClose,
  Tx as DrawerContent,
  Ix as DrawerDescription,
  Mx as DrawerFooter,
  Fx as DrawerHeader,
  e_ as DrawerOverlay,
  Rx as DrawerTitle,
  Lx as DrawerTrigger,
  Vx as DropdownMenu,
  Hx as DropdownMenuCheckboxItem,
  qx as DropdownMenuContent,
  Nx as DropdownMenuGroup,
  Kx as DropdownMenuItem,
  Yx as DropdownMenuLabel,
  Xf as DropdownMenuPortal,
  jx as DropdownMenuRadioGroup,
  Wx as DropdownMenuRadioItem,
  Gx as DropdownMenuSeparator,
  Ux as DropdownMenuShortcut,
  Xx as DropdownMenuSub,
  Qx as DropdownMenuSubContent,
  Zx as DropdownMenuSubTrigger,
  zx as DropdownMenuTrigger,
  A_ as Flasher,
  $_ as Header,
  T_ as Heading,
  Jx as Input,
  eC as Label,
  S_ as Main,
  tC as Pagination,
  nC as PaginationContent,
  oC as PaginationEllipsis,
  aC as PaginationFirst,
  rC as PaginationItem,
  sC as PaginationLast,
  lC as PaginationNext,
  iC as PaginationPrevious,
  uC as Popover,
  b_ as PopoverAnchor,
  cC as PopoverContent,
  dC as PopoverTrigger,
  pC as Progress,
  fC as Select,
  gC as SelectContent,
  hC as SelectGroup,
  yC as SelectItem,
  bC as SelectItemText,
  wC as SelectLabel,
  r_ as SelectScrollDownButton,
  a_ as SelectScrollUpButton,
  _C as SelectSeparator,
  mC as SelectTrigger,
  vC as SelectValue,
  xC as Sheet,
  BC as SheetClose,
  $C as SheetContent,
  OC as SheetDescription,
  EC as SheetFooter,
  SC as SheetHeader,
  kC as SheetTitle,
  CC as SheetTrigger,
  PC as Skeleton,
  DC as Slider,
  AC as Switch,
  TC as Table,
  IC as TableBody,
  LC as TableCaption,
  i_ as TableCell,
  VC as TableEmpty,
  RC as TableFooter,
  MC as TableHead,
  FC as TableHeader,
  u_ as TableRow,
  zC as Tabs,
  qC as TabsContent,
  NC as TabsList,
  jC as TabsTrigger,
  KC as Textarea,
  M_ as Tip,
  gh as Toast,
  D_ as ToastAction,
  $h as ToastClose,
  Ns as ToastDescription,
  kh as ToastProvider,
  Sh as ToastTitle,
  hh as ToastViewport,
  mh as Toaster,
  Fh as Tooltip,
  Rh as TooltipContent,
  Lh as TooltipProvider,
  Vh as TooltipTrigger,
  B_ as TwoColumnLayout,
  k_ as TwoColumnLayoutSidebar,
  O_ as TwoColumnLayoutSidebarDesktop,
  E_ as TwoColumnLayoutSidebarMobile,
  P_ as TwoColumnLayoutSidebarTrigger,
  zh as avatarVariant,
  qh as badgeVariants,
  Zt as buttonVariants,
  z as cn,
  __ as createContext,
  m_ as preset,
  s_ as sheetVariants,
  dh as toast,
  Oh as toastVariants,
  va as useCarousel,
  Vg as useConfirmDialog,
  m1 as useDatatableState,
  Eh as useFlasher,
  eu as useToast,
  w_ as valueUpdater
};
