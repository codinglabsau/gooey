var ls = (e) => {
  throw TypeError(e);
};
var $u = (e, t, n) => t.has(e) || ls("Cannot " + n);
var qn = (e, t, n) => ($u(e, t, "read from private field"), n ? n.call(e) : t.get(e)), is = (e, t, n) => t.has(e) ? ls("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n);
import * as bn from "vue";
import { computed as S, ref as E, shallowRef as Cn, watch as te, getCurrentScope as Za, onScopeDispose as Qa, shallowReadonly as vn, unref as s, defineComponent as w, createBlock as x, openBlock as h, normalizeProps as Z, guardReactiveProps as ee, withCtx as y, renderSlot as _, toRefs as ye, createVNode as F, mergeProps as A, onMounted as se, watchEffect as be, normalizeStyle as wt, createCommentVNode as ge, getCurrentInstance as We, toRef as al, camelize as zo, withKeys as Ze, toHandlers as Eu, resolveDynamicComponent as et, withModifiers as De, nextTick as ae, withDirectives as Dn, vShow as Ja, h as Ue, createTextVNode as $e, watchSyncEffect as rl, toDisplayString as Pe, isRef as at, onBeforeMount as sl, onUnmounted as Ke, createElementBlock as z, Fragment as Ae, renderList as jt, useSlots as er, Teleport as no, onBeforeUnmount as kn, inject as oo, provide as ao, toHandlerKey as ll, onBeforeUpdate as Du, onUpdated as ku, reactive as Bn, readonly as jo, Comment as tr, cloneVNode as il, markRaw as ul, createElementVNode as he, vModelSelect as Au, toRaw as Tu, mergeDefaults as nr, watchPostEffect as or, effectScope as Ko, customRef as dl, normalizeClass as ue, isVNode as Pu, toValue as Qe, withMemo as Iu, vModelText as cl } from "vue";
function pl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Mu = {
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
}, ma = Mu, ar = {
  whitespace: /\s+/g,
  urlHexPairs: /%[\dA-F]{2}/g,
  quotes: /"/g
};
function Fu(e) {
  return e.trim().replace(ar.whitespace, " ");
}
function Ru(e) {
  return encodeURIComponent(e).replace(ar.urlHexPairs, Vu);
}
function Lu(e) {
  return Object.keys(ma).forEach(function(t) {
    ma[t].test(e) && (e = e.replace(ma[t], t));
  }), e;
}
function Vu(e) {
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
function Pa(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string, but received " + typeof e);
  e.charCodeAt(0) === 65279 && (e = e.slice(1));
  var t = Lu(Fu(e)).replace(ar.quotes, "'");
  return "data:image/svg+xml," + Ru(t);
}
Pa.toSrcset = function(t) {
  return Pa(t).replace(/ /g, "%20");
};
var Nu = Pa, fl = {}, ml = {};
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
})(ml);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return o;
    }
  });
  const t = /* @__PURE__ */ n(ml);
  function n(a) {
    return a && a.__esModule ? a : {
      default: a
    };
  }
  const o = t.default;
})(fl);
let va = fl;
var vl = (va.__esModule ? va : { default: va }).default, gl = {}, hl = {};
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
})(hl);
var qu = {
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
  const t = hl, n = /* @__PURE__ */ o(qu);
  function o(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  const a = (0, t.cloneDeep)(n.default.theme);
})(gl);
let ga = gl;
var zu = (ga.__esModule ? ga : { default: ga }).default, yl = {}, bl = {}, rr = { exports: {} }, ce = String, wl = function() {
  return { isColorSupported: !1, reset: ce, bold: ce, dim: ce, italic: ce, underline: ce, inverse: ce, hidden: ce, strikethrough: ce, black: ce, red: ce, green: ce, yellow: ce, blue: ce, magenta: ce, cyan: ce, white: ce, gray: ce, bgBlack: ce, bgRed: ce, bgGreen: ce, bgYellow: ce, bgBlue: ce, bgMagenta: ce, bgCyan: ce, bgWhite: ce, blackBright: ce, redBright: ce, greenBright: ce, yellowBright: ce, blueBright: ce, magentaBright: ce, cyanBright: ce, whiteBright: ce, bgBlackBright: ce, bgRedBright: ce, bgGreenBright: ce, bgYellowBright: ce, bgBlueBright: ce, bgMagentaBright: ce, bgCyanBright: ce, bgWhiteBright: ce };
};
rr.exports = wl();
rr.exports.createColors = wl;
var ju = rr.exports;
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
  const n = /* @__PURE__ */ o(ju);
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
})(bl);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return a;
    }
  });
  const t = /* @__PURE__ */ n(bl);
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
})(yl);
let ha = yl;
var Ku = (ha.__esModule ? ha : { default: ha }).default;
const yo = Nu, Hu = vl, _l = zu, Lt = Ku, [Wu, { lineHeight: Uu }] = _l.fontSize.base, { spacing: Dt, borderWidth: us, borderRadius: ds } = _l;
function Qt(e, t) {
  return e.replace("<alpha-value>", `var(${t}, 1)`);
}
const Gu = Hu.withOptions(function(e = { strategy: void 0 }) {
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
          "border-color": Qt(
            o("colors.gray.500", Lt.gray[500]),
            "--tw-border-opacity"
          ),
          "border-width": us.DEFAULT,
          "border-radius": ds.none,
          "padding-top": Dt[2],
          "padding-right": Dt[3],
          "padding-bottom": Dt[2],
          "padding-left": Dt[3],
          "font-size": Wu,
          "line-height": Uu,
          "--tw-shadow": "0 0 #0000",
          "&:focus": {
            outline: "2px solid transparent",
            "outline-offset": "2px",
            "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)",
            "--tw-ring-offset-width": "0px",
            "--tw-ring-offset-color": "#fff",
            "--tw-ring-color": Qt(
              o("colors.blue.600", Lt.blue[600]),
              "--tw-ring-opacity"
            ),
            "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
            "--tw-ring-shadow": "var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
            "box-shadow": "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)",
            "border-color": Qt(
              o("colors.blue.600", Lt.blue[600]),
              "--tw-border-opacity"
            )
          }
        }
      },
      {
        base: ["input::placeholder", "textarea::placeholder"],
        class: [".form-input::placeholder", ".form-textarea::placeholder"],
        styles: {
          color: Qt(o("colors.gray.500", Lt.gray[500]), "--tw-text-opacity"),
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
          "background-image": `url("${yo(
            `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="${a(
              "colors.gray.500",
              Lt.gray[500]
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
          color: Qt(o("colors.blue.600", Lt.blue[600]), "--tw-text-opacity"),
          "background-color": "#fff",
          "border-color": Qt(
            o("colors.gray.500", Lt.gray[500]),
            "--tw-border-opacity"
          ),
          "border-width": us.DEFAULT,
          "--tw-shadow": "0 0 #0000"
        }
      },
      {
        base: ["[type='checkbox']"],
        class: [".form-checkbox"],
        styles: {
          "border-radius": ds.none
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
          "--tw-ring-color": Qt(
            o("colors.blue.600", Lt.blue[600]),
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
          "background-image": `url("${yo(
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
          "background-image": `url("${yo(
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
          "background-image": `url("${yo(
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
var Yu = Gu;
const Xu = /* @__PURE__ */ pl(Yu), Zu = vl;
function cs(e) {
  return Object.fromEntries(
    Object.entries(e).filter(([t]) => t !== "DEFAULT")
  );
}
var Qu = Zu(
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
      { values: cs(n("animationDuration")) }
    ), t(
      { delay: (o) => ({ animationDelay: o }) },
      { values: n("animationDelay") }
    ), t(
      { ease: (o) => ({ animationTimingFunction: o }) },
      { values: cs(n("animationTimingFunction")) }
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
const Ju = /* @__PURE__ */ pl(Qu), v_ = {
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
    Ju,
    Xu({
      strategy: "class"
    })
  ]
}, ed = ["top", "right", "bottom", "left"], Kt = Math.min, Je = Math.max, Io = Math.round, bo = Math.floor, yt = (e) => ({
  x: e,
  y: e
}), td = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, nd = {
  start: "end",
  end: "start"
};
function Ia(e, t, n) {
  return Je(e, Kt(t, n));
}
function It(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Mt(e) {
  return e.split("-")[0];
}
function An(e) {
  return e.split("-")[1];
}
function sr(e) {
  return e === "x" ? "y" : "x";
}
function lr(e) {
  return e === "y" ? "height" : "width";
}
const od = /* @__PURE__ */ new Set(["top", "bottom"]);
function ht(e) {
  return od.has(Mt(e)) ? "y" : "x";
}
function ir(e) {
  return sr(ht(e));
}
function ad(e, t, n) {
  n === void 0 && (n = !1);
  const o = An(e), a = ir(e), r = lr(a);
  let l = a === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (l = Mo(l)), [l, Mo(l)];
}
function rd(e) {
  const t = Mo(e);
  return [Ma(e), t, Ma(t)];
}
function Ma(e) {
  return e.replace(/start|end/g, (t) => nd[t]);
}
const ps = ["left", "right"], fs = ["right", "left"], sd = ["top", "bottom"], ld = ["bottom", "top"];
function id(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? fs : ps : t ? ps : fs;
    case "left":
    case "right":
      return t ? sd : ld;
    default:
      return [];
  }
}
function ud(e, t, n, o) {
  const a = An(e);
  let r = id(Mt(e), n === "start", o);
  return a && (r = r.map((l) => l + "-" + a), t && (r = r.concat(r.map(Ma)))), r;
}
function Mo(e) {
  return e.replace(/left|right|bottom|top/g, (t) => td[t]);
}
function dd(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function xl(e) {
  return typeof e != "number" ? dd(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Fo(e) {
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
function ms(e, t, n) {
  let {
    reference: o,
    floating: a
  } = e;
  const r = ht(t), l = ir(t), i = lr(l), u = Mt(t), d = r === "y", c = o.x + o.width / 2 - a.width / 2, p = o.y + o.height / 2 - a.height / 2, m = o[i] / 2 - a[i] / 2;
  let v;
  switch (u) {
    case "top":
      v = {
        x: c,
        y: o.y - a.height
      };
      break;
    case "bottom":
      v = {
        x: c,
        y: o.y + o.height
      };
      break;
    case "right":
      v = {
        x: o.x + o.width,
        y: p
      };
      break;
    case "left":
      v = {
        x: o.x - a.width,
        y: p
      };
      break;
    default:
      v = {
        x: o.x,
        y: o.y
      };
  }
  switch (An(t)) {
    case "start":
      v[l] -= m * (n && d ? -1 : 1);
      break;
    case "end":
      v[l] += m * (n && d ? -1 : 1);
      break;
  }
  return v;
}
const cd = async (e, t, n) => {
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
  } = ms(d, o, u), m = o, v = {}, f = 0;
  for (let g = 0; g < i.length; g++) {
    const {
      name: b,
      fn: C
    } = i[g], {
      x: O,
      y: B,
      data: k,
      reset: $
    } = await C({
      x: c,
      y: p,
      initialPlacement: o,
      placement: m,
      strategy: a,
      middlewareData: v,
      rects: d,
      platform: l,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = O ?? c, p = B ?? p, v = {
      ...v,
      [b]: {
        ...v[b],
        ...k
      }
    }, $ && f <= 50 && (f++, typeof $ == "object" && ($.placement && (m = $.placement), $.rects && (d = $.rects === !0 ? await l.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : $.rects), {
      x: c,
      y: p
    } = ms(d, m, u)), g = -1);
  }
  return {
    x: c,
    y: p,
    placement: m,
    strategy: a,
    middlewareData: v
  };
};
async function Yn(e, t) {
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
    padding: v = 0
  } = It(t, e), f = xl(v), b = i[m ? p === "floating" ? "reference" : "floating" : p], C = Fo(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(b))) == null || n ? b : b.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(i.floating)),
    boundary: d,
    rootBoundary: c,
    strategy: u
  })), O = p === "floating" ? {
    x: o,
    y: a,
    width: l.floating.width,
    height: l.floating.height
  } : l.reference, B = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(i.floating)), k = await (r.isElement == null ? void 0 : r.isElement(B)) ? await (r.getScale == null ? void 0 : r.getScale(B)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, $ = Fo(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: O,
    offsetParent: B,
    strategy: u
  }) : O);
  return {
    top: (C.top - $.top + f.top) / k.y,
    bottom: ($.bottom - C.bottom + f.bottom) / k.y,
    left: (C.left - $.left + f.left) / k.x,
    right: ($.right - C.right + f.right) / k.x
  };
}
const pd = (e) => ({
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
    } = It(e, t) || {};
    if (d == null)
      return {};
    const p = xl(c), m = {
      x: n,
      y: o
    }, v = ir(a), f = lr(v), g = await l.getDimensions(d), b = v === "y", C = b ? "top" : "left", O = b ? "bottom" : "right", B = b ? "clientHeight" : "clientWidth", k = r.reference[f] + r.reference[v] - m[v] - r.floating[f], $ = m[v] - r.reference[v], P = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(d));
    let D = P ? P[B] : 0;
    (!D || !await (l.isElement == null ? void 0 : l.isElement(P))) && (D = i.floating[B] || r.floating[f]);
    const M = k / 2 - $ / 2, R = D / 2 - g[f] / 2 - 1, T = Kt(p[C], R), L = Kt(p[O], R), I = T, U = D - g[f] - L, K = D / 2 - g[f] / 2 + M, Y = Ia(I, K, U), H = !u.arrow && An(a) != null && K !== Y && r.reference[f] / 2 - (K < I ? T : L) - g[f] / 2 < 0, J = H ? K < I ? K - I : K - U : 0;
    return {
      [v]: m[v] + J,
      data: {
        [v]: Y,
        centerOffset: K - Y - J,
        ...H && {
          alignmentOffset: J
        }
      },
      reset: H
    };
  }
}), fd = function(e) {
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
        fallbackStrategy: v = "bestFit",
        fallbackAxisSideDirection: f = "none",
        flipAlignment: g = !0,
        ...b
      } = It(e, t);
      if ((n = r.arrow) != null && n.alignmentOffset)
        return {};
      const C = Mt(a), O = ht(i), B = Mt(i) === i, k = await (u.isRTL == null ? void 0 : u.isRTL(d.floating)), $ = m || (B || !g ? [Mo(i)] : rd(i)), P = f !== "none";
      !m && P && $.push(...ud(i, g, f, k));
      const D = [i, ...$], M = await Yn(t, b), R = [];
      let T = ((o = r.flip) == null ? void 0 : o.overflows) || [];
      if (c && R.push(M[C]), p) {
        const K = ad(a, l, k);
        R.push(M[K[0]], M[K[1]]);
      }
      if (T = [...T, {
        placement: a,
        overflows: R
      }], !R.every((K) => K <= 0)) {
        var L, I;
        const K = (((L = r.flip) == null ? void 0 : L.index) || 0) + 1, Y = D[K];
        if (Y && (!(p === "alignment" ? O !== ht(Y) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        T.every((Q) => ht(Q.placement) === O ? Q.overflows[0] > 0 : !0)))
          return {
            data: {
              index: K,
              overflows: T
            },
            reset: {
              placement: Y
            }
          };
        let H = (I = T.filter((J) => J.overflows[0] <= 0).sort((J, Q) => J.overflows[1] - Q.overflows[1])[0]) == null ? void 0 : I.placement;
        if (!H)
          switch (v) {
            case "bestFit": {
              var U;
              const J = (U = T.filter((Q) => {
                if (P) {
                  const q = ht(Q.placement);
                  return q === O || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  q === "y";
                }
                return !0;
              }).map((Q) => [Q.placement, Q.overflows.filter((q) => q > 0).reduce((q, le) => q + le, 0)]).sort((Q, q) => Q[1] - q[1])[0]) == null ? void 0 : U[0];
              J && (H = J);
              break;
            }
            case "initialPlacement":
              H = i;
              break;
          }
        if (a !== H)
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
function vs(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function gs(e) {
  return ed.some((t) => e[t] >= 0);
}
const md = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: o = "referenceHidden",
        ...a
      } = It(e, t);
      switch (o) {
        case "referenceHidden": {
          const r = await Yn(t, {
            ...a,
            elementContext: "reference"
          }), l = vs(r, n.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: gs(l)
            }
          };
        }
        case "escaped": {
          const r = await Yn(t, {
            ...a,
            altBoundary: !0
          }), l = vs(r, n.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: gs(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Cl = /* @__PURE__ */ new Set(["left", "top"]);
async function vd(e, t) {
  const {
    placement: n,
    platform: o,
    elements: a
  } = e, r = await (o.isRTL == null ? void 0 : o.isRTL(a.floating)), l = Mt(n), i = An(n), u = ht(n) === "y", d = Cl.has(l) ? -1 : 1, c = r && u ? -1 : 1, p = It(t, e);
  let {
    mainAxis: m,
    crossAxis: v,
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
  return i && typeof f == "number" && (v = i === "end" ? f * -1 : f), u ? {
    x: v * c,
    y: m * d
  } : {
    x: m * d,
    y: v * c
  };
}
const gd = function(e) {
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
      } = t, u = await vd(t, e);
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
}, hd = function(e) {
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
              x: C,
              y: O
            } = b;
            return {
              x: C,
              y: O
            };
          }
        },
        ...u
      } = It(e, t), d = {
        x: n,
        y: o
      }, c = await Yn(t, u), p = ht(Mt(a)), m = sr(p);
      let v = d[m], f = d[p];
      if (r) {
        const b = m === "y" ? "top" : "left", C = m === "y" ? "bottom" : "right", O = v + c[b], B = v - c[C];
        v = Ia(O, v, B);
      }
      if (l) {
        const b = p === "y" ? "top" : "left", C = p === "y" ? "bottom" : "right", O = f + c[b], B = f - c[C];
        f = Ia(O, f, B);
      }
      const g = i.fn({
        ...t,
        [m]: v,
        [p]: f
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
}, yd = function(e) {
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
      } = It(e, t), c = {
        x: n,
        y: o
      }, p = ht(a), m = sr(p);
      let v = c[m], f = c[p];
      const g = It(i, t), b = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (u) {
        const B = m === "y" ? "height" : "width", k = r.reference[m] - r.floating[B] + b.mainAxis, $ = r.reference[m] + r.reference[B] - b.mainAxis;
        v < k ? v = k : v > $ && (v = $);
      }
      if (d) {
        var C, O;
        const B = m === "y" ? "width" : "height", k = Cl.has(Mt(a)), $ = r.reference[p] - r.floating[B] + (k && ((C = l.offset) == null ? void 0 : C[p]) || 0) + (k ? 0 : b.crossAxis), P = r.reference[p] + r.reference[B] + (k ? 0 : ((O = l.offset) == null ? void 0 : O[p]) || 0) - (k ? b.crossAxis : 0);
        f < $ ? f = $ : f > P && (f = P);
      }
      return {
        [m]: v,
        [p]: f
      };
    }
  };
}, bd = function(e) {
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
      } = It(e, t), c = await Yn(t, d), p = Mt(a), m = An(a), v = ht(a) === "y", {
        width: f,
        height: g
      } = r.floating;
      let b, C;
      p === "top" || p === "bottom" ? (b = p, C = m === (await (l.isRTL == null ? void 0 : l.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (C = p, b = m === "end" ? "top" : "bottom");
      const O = g - c.top - c.bottom, B = f - c.left - c.right, k = Kt(g - c[b], O), $ = Kt(f - c[C], B), P = !t.middlewareData.shift;
      let D = k, M = $;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (M = B), (o = t.middlewareData.shift) != null && o.enabled.y && (D = O), P && !m) {
        const T = Je(c.left, 0), L = Je(c.right, 0), I = Je(c.top, 0), U = Je(c.bottom, 0);
        v ? M = f - 2 * (T !== 0 || L !== 0 ? T + L : Je(c.left, c.right)) : D = g - 2 * (I !== 0 || U !== 0 ? I + U : Je(c.top, c.bottom));
      }
      await u({
        ...t,
        availableWidth: M,
        availableHeight: D
      });
      const R = await l.getDimensions(i.floating);
      return f !== R.width || g !== R.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Ho() {
  return typeof window < "u";
}
function nn(e) {
  return ur(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function tt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function _t(e) {
  var t;
  return (t = (ur(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function ur(e) {
  return Ho() ? e instanceof Node || e instanceof tt(e).Node : !1;
}
function mt(e) {
  return Ho() ? e instanceof Element || e instanceof tt(e).Element : !1;
}
function bt(e) {
  return Ho() ? e instanceof HTMLElement || e instanceof tt(e).HTMLElement : !1;
}
function hs(e) {
  return !Ho() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof tt(e).ShadowRoot;
}
const wd = /* @__PURE__ */ new Set(["inline", "contents"]);
function ro(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: a
  } = vt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !wd.has(a);
}
const _d = /* @__PURE__ */ new Set(["table", "td", "th"]);
function xd(e) {
  return _d.has(nn(e));
}
const Cd = [":popover-open", ":modal"];
function Wo(e) {
  return Cd.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const Bd = ["transform", "translate", "scale", "rotate", "perspective"], Od = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Sd = ["paint", "layout", "strict", "content"];
function dr(e) {
  const t = cr(), n = mt(e) ? vt(e) : e;
  return Bd.some((o) => n[o] ? n[o] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || Od.some((o) => (n.willChange || "").includes(o)) || Sd.some((o) => (n.contain || "").includes(o));
}
function $d(e) {
  let t = Ht(e);
  for (; bt(t) && !On(t); ) {
    if (dr(t))
      return t;
    if (Wo(t))
      return null;
    t = Ht(t);
  }
  return null;
}
function cr() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Ed = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function On(e) {
  return Ed.has(nn(e));
}
function vt(e) {
  return tt(e).getComputedStyle(e);
}
function Uo(e) {
  return mt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Ht(e) {
  if (nn(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    hs(e) && e.host || // Fallback.
    _t(e)
  );
  return hs(t) ? t.host : t;
}
function Bl(e) {
  const t = Ht(e);
  return On(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : bt(t) && ro(t) ? t : Bl(t);
}
function Xn(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const a = Bl(e), r = a === ((o = e.ownerDocument) == null ? void 0 : o.body), l = tt(a);
  if (r) {
    const i = Fa(l);
    return t.concat(l, l.visualViewport || [], ro(a) ? a : [], i && n ? Xn(i) : []);
  }
  return t.concat(a, Xn(a, [], n));
}
function Fa(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Ol(e) {
  const t = vt(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const a = bt(e), r = a ? e.offsetWidth : n, l = a ? e.offsetHeight : o, i = Io(n) !== r || Io(o) !== l;
  return i && (n = r, o = l), {
    width: n,
    height: o,
    $: i
  };
}
function pr(e) {
  return mt(e) ? e : e.contextElement;
}
function wn(e) {
  const t = pr(e);
  if (!bt(t))
    return yt(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: a,
    $: r
  } = Ol(t);
  let l = (r ? Io(n.width) : n.width) / o, i = (r ? Io(n.height) : n.height) / a;
  return (!l || !Number.isFinite(l)) && (l = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: l,
    y: i
  };
}
const Dd = /* @__PURE__ */ yt(0);
function Sl(e) {
  const t = tt(e);
  return !cr() || !t.visualViewport ? Dd : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function kd(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== tt(e) ? !1 : t;
}
function en(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const a = e.getBoundingClientRect(), r = pr(e);
  let l = yt(1);
  t && (o ? mt(o) && (l = wn(o)) : l = wn(e));
  const i = kd(r, n, o) ? Sl(r) : yt(0);
  let u = (a.left + i.x) / l.x, d = (a.top + i.y) / l.y, c = a.width / l.x, p = a.height / l.y;
  if (r) {
    const m = tt(r), v = o && mt(o) ? tt(o) : o;
    let f = m, g = Fa(f);
    for (; g && o && v !== f; ) {
      const b = wn(g), C = g.getBoundingClientRect(), O = vt(g), B = C.left + (g.clientLeft + parseFloat(O.paddingLeft)) * b.x, k = C.top + (g.clientTop + parseFloat(O.paddingTop)) * b.y;
      u *= b.x, d *= b.y, c *= b.x, p *= b.y, u += B, d += k, f = tt(g), g = Fa(f);
    }
  }
  return Fo({
    width: c,
    height: p,
    x: u,
    y: d
  });
}
function Go(e, t) {
  const n = Uo(e).scrollLeft;
  return t ? t.left + n : en(_t(e)).left + n;
}
function $l(e, t) {
  const n = e.getBoundingClientRect(), o = n.left + t.scrollLeft - Go(e, n), a = n.top + t.scrollTop;
  return {
    x: o,
    y: a
  };
}
function Ad(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: o,
    strategy: a
  } = e;
  const r = a === "fixed", l = _t(o), i = t ? Wo(t.floating) : !1;
  if (o === l || i && r)
    return n;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = yt(1);
  const c = yt(0), p = bt(o);
  if ((p || !p && !r) && ((nn(o) !== "body" || ro(l)) && (u = Uo(o)), bt(o))) {
    const v = en(o);
    d = wn(o), c.x = v.x + o.clientLeft, c.y = v.y + o.clientTop;
  }
  const m = l && !p && !r ? $l(l, u) : yt(0);
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - u.scrollLeft * d.x + c.x + m.x,
    y: n.y * d.y - u.scrollTop * d.y + c.y + m.y
  };
}
function Td(e) {
  return Array.from(e.getClientRects());
}
function Pd(e) {
  const t = _t(e), n = Uo(e), o = e.ownerDocument.body, a = Je(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), r = Je(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let l = -n.scrollLeft + Go(e);
  const i = -n.scrollTop;
  return vt(o).direction === "rtl" && (l += Je(t.clientWidth, o.clientWidth) - a), {
    width: a,
    height: r,
    x: l,
    y: i
  };
}
const ys = 25;
function Id(e, t) {
  const n = tt(e), o = _t(e), a = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, i = 0, u = 0;
  if (a) {
    r = a.width, l = a.height;
    const c = cr();
    (!c || c && t === "fixed") && (i = a.offsetLeft, u = a.offsetTop);
  }
  const d = Go(o);
  if (d <= 0) {
    const c = o.ownerDocument, p = c.body, m = getComputedStyle(p), v = c.compatMode === "CSS1Compat" && parseFloat(m.marginLeft) + parseFloat(m.marginRight) || 0, f = Math.abs(o.clientWidth - p.clientWidth - v);
    f <= ys && (r -= f);
  } else d <= ys && (r += d);
  return {
    width: r,
    height: l,
    x: i,
    y: u
  };
}
const Md = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Fd(e, t) {
  const n = en(e, !0, t === "fixed"), o = n.top + e.clientTop, a = n.left + e.clientLeft, r = bt(e) ? wn(e) : yt(1), l = e.clientWidth * r.x, i = e.clientHeight * r.y, u = a * r.x, d = o * r.y;
  return {
    width: l,
    height: i,
    x: u,
    y: d
  };
}
function bs(e, t, n) {
  let o;
  if (t === "viewport")
    o = Id(e, n);
  else if (t === "document")
    o = Pd(_t(e));
  else if (mt(t))
    o = Fd(t, n);
  else {
    const a = Sl(e);
    o = {
      x: t.x - a.x,
      y: t.y - a.y,
      width: t.width,
      height: t.height
    };
  }
  return Fo(o);
}
function El(e, t) {
  const n = Ht(e);
  return n === t || !mt(n) || On(n) ? !1 : vt(n).position === "fixed" || El(n, t);
}
function Rd(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = Xn(e, [], !1).filter((i) => mt(i) && nn(i) !== "body"), a = null;
  const r = vt(e).position === "fixed";
  let l = r ? Ht(e) : e;
  for (; mt(l) && !On(l); ) {
    const i = vt(l), u = dr(l);
    !u && i.position === "fixed" && (a = null), (r ? !u && !a : !u && i.position === "static" && !!a && Md.has(a.position) || ro(l) && !u && El(e, l)) ? o = o.filter((c) => c !== l) : a = i, l = Ht(l);
  }
  return t.set(e, o), o;
}
function Ld(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: a
  } = e;
  const l = [...n === "clippingAncestors" ? Wo(t) ? [] : Rd(t, this._c) : [].concat(n), o], i = l[0], u = l.reduce((d, c) => {
    const p = bs(t, c, a);
    return d.top = Je(p.top, d.top), d.right = Kt(p.right, d.right), d.bottom = Kt(p.bottom, d.bottom), d.left = Je(p.left, d.left), d;
  }, bs(t, i, a));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function Vd(e) {
  const {
    width: t,
    height: n
  } = Ol(e);
  return {
    width: t,
    height: n
  };
}
function Nd(e, t, n) {
  const o = bt(t), a = _t(t), r = n === "fixed", l = en(e, !0, r, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = yt(0);
  function d() {
    u.x = Go(a);
  }
  if (o || !o && !r)
    if ((nn(t) !== "body" || ro(a)) && (i = Uo(t)), o) {
      const v = en(t, !0, r, t);
      u.x = v.x + t.clientLeft, u.y = v.y + t.clientTop;
    } else a && d();
  r && !o && a && d();
  const c = a && !o && !r ? $l(a, i) : yt(0), p = l.left + i.scrollLeft - u.x - c.x, m = l.top + i.scrollTop - u.y - c.y;
  return {
    x: p,
    y: m,
    width: l.width,
    height: l.height
  };
}
function ya(e) {
  return vt(e).position === "static";
}
function ws(e, t) {
  if (!bt(e) || vt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return _t(e) === n && (n = n.ownerDocument.body), n;
}
function Dl(e, t) {
  const n = tt(e);
  if (Wo(e))
    return n;
  if (!bt(e)) {
    let a = Ht(e);
    for (; a && !On(a); ) {
      if (mt(a) && !ya(a))
        return a;
      a = Ht(a);
    }
    return n;
  }
  let o = ws(e, t);
  for (; o && xd(o) && ya(o); )
    o = ws(o, t);
  return o && On(o) && ya(o) && !dr(o) ? n : o || $d(e) || n;
}
const qd = async function(e) {
  const t = this.getOffsetParent || Dl, n = this.getDimensions, o = await n(e.floating);
  return {
    reference: Nd(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function zd(e) {
  return vt(e).direction === "rtl";
}
const jd = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Ad,
  getDocumentElement: _t,
  getClippingRect: Ld,
  getOffsetParent: Dl,
  getElementRects: qd,
  getClientRects: Td,
  getDimensions: Vd,
  getScale: wn,
  isElement: mt,
  isRTL: zd
};
function kl(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Kd(e, t) {
  let n = null, o;
  const a = _t(e);
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
      height: v
    } = d;
    if (i || t(), !m || !v)
      return;
    const f = bo(p), g = bo(a.clientWidth - (c + m)), b = bo(a.clientHeight - (p + v)), C = bo(c), B = {
      rootMargin: -f + "px " + -g + "px " + -b + "px " + -C + "px",
      threshold: Je(0, Kt(1, u)) || 1
    };
    let k = !0;
    function $(P) {
      const D = P[0].intersectionRatio;
      if (D !== u) {
        if (!k)
          return l();
        D ? l(!1, D) : o = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      D === 1 && !kl(d, e.getBoundingClientRect()) && l(), k = !1;
    }
    try {
      n = new IntersectionObserver($, {
        ...B,
        // Handle <iframe>s
        root: a.ownerDocument
      });
    } catch {
      n = new IntersectionObserver($, B);
    }
    n.observe(e);
  }
  return l(!0), r;
}
function Al(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: a = !0,
    ancestorResize: r = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = o, d = pr(e), c = a || r ? [...d ? Xn(d) : [], ...Xn(t)] : [];
  c.forEach((C) => {
    a && C.addEventListener("scroll", n, {
      passive: !0
    }), r && C.addEventListener("resize", n);
  });
  const p = d && i ? Kd(d, n) : null;
  let m = -1, v = null;
  l && (v = new ResizeObserver((C) => {
    let [O] = C;
    O && O.target === d && v && (v.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var B;
      (B = v) == null || B.observe(t);
    })), n();
  }), d && !u && v.observe(d), v.observe(t));
  let f, g = u ? en(e) : null;
  u && b();
  function b() {
    const C = en(e);
    g && !kl(g, C) && n(), g = C, f = requestAnimationFrame(b);
  }
  return n(), () => {
    var C;
    c.forEach((O) => {
      a && O.removeEventListener("scroll", n), r && O.removeEventListener("resize", n);
    }), p == null || p(), (C = v) == null || C.disconnect(), v = null, u && cancelAnimationFrame(f);
  };
}
const Tl = gd, Pl = hd, Ro = fd, Il = bd, Ml = md, Hd = pd, Fl = yd, Wd = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), a = {
    platform: jd,
    ...n
  }, r = {
    ...a.platform,
    _c: o
  };
  return cd(e, t, {
    ...a,
    platform: r
  });
};
function Ud(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function Ra(e) {
  if (Ud(e)) {
    const t = e.$el;
    return ur(t) && nn(t) === "#comment" ? null : t;
  }
  return e;
}
function yn(e) {
  return typeof e == "function" ? e() : s(e);
}
function Rl(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const n = Ra(yn(e.element));
      return n == null ? {} : Hd({
        element: n,
        padding: e.padding
      }).fn(t);
    }
  };
}
function Ll(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function _s(e, t) {
  const n = Ll(e);
  return Math.round(t * n) / n;
}
function Vl(e, t, n) {
  n === void 0 && (n = {});
  const o = n.whileElementsMounted, a = S(() => {
    var D;
    return (D = yn(n.open)) != null ? D : !0;
  }), r = S(() => yn(n.middleware)), l = S(() => {
    var D;
    return (D = yn(n.placement)) != null ? D : "bottom";
  }), i = S(() => {
    var D;
    return (D = yn(n.strategy)) != null ? D : "absolute";
  }), u = S(() => {
    var D;
    return (D = yn(n.transform)) != null ? D : !0;
  }), d = S(() => Ra(e.value)), c = S(() => Ra(t.value)), p = E(0), m = E(0), v = E(i.value), f = E(l.value), g = Cn({}), b = E(!1), C = S(() => {
    const D = {
      position: v.value,
      left: "0",
      top: "0"
    };
    if (!c.value)
      return D;
    const M = _s(c.value, p.value), R = _s(c.value, m.value);
    return u.value ? {
      ...D,
      transform: "translate(" + M + "px, " + R + "px)",
      ...Ll(c.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: v.value,
      left: M + "px",
      top: R + "px"
    };
  });
  let O;
  function B() {
    if (d.value == null || c.value == null)
      return;
    const D = a.value;
    Wd(d.value, c.value, {
      middleware: r.value,
      placement: l.value,
      strategy: i.value
    }).then((M) => {
      p.value = M.x, m.value = M.y, v.value = M.strategy, f.value = M.placement, g.value = M.middlewareData, b.value = D !== !1;
    });
  }
  function k() {
    typeof O == "function" && (O(), O = void 0);
  }
  function $() {
    if (k(), o === void 0) {
      B();
      return;
    }
    if (d.value != null && c.value != null) {
      O = o(d.value, c.value, B);
      return;
    }
  }
  function P() {
    a.value || (b.value = !1);
  }
  return te([r, l, i, a], B, {
    flush: "sync"
  }), te([d, c], $, {
    flush: "sync"
  }), te(a, P, {
    flush: "sync"
  }), Za() && Qa(k), {
    x: vn(p),
    y: vn(m),
    strategy: vn(v),
    placement: vn(f),
    middlewareData: vn(g),
    isPositioned: vn(b),
    floatingStyles: C,
    update: B
  };
}
function ve(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, o = Symbol(n);
  return [(a) => {
    const r = oo(o, a);
    if (r || r === null)
      return r;
    throw new Error(
      `Injection \`${o.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (a) => (ao(o, a), a)];
}
function fr(e, t, n) {
  const o = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, { once: !0 }), o.dispatchEvent(a);
}
function Lo(e, t = Number.NEGATIVE_INFINITY, n = Number.POSITIVE_INFINITY) {
  return Math.min(n, Math.max(t, e));
}
function Gd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Yd = function e(t, n) {
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
const Jt = /* @__PURE__ */ Gd(Yd);
function _n(e) {
  return e == null;
}
function Xd(e, t) {
  var n;
  const o = Cn();
  return be(() => {
    o.value = e();
  }, {
    ...t,
    flush: (n = void 0) != null ? n : "sync"
  }), jo(o);
}
function on(e) {
  return Za() ? (Qa(e), !0) : !1;
}
function Zd() {
  const e = /* @__PURE__ */ new Set(), t = (n) => {
    e.delete(n);
  };
  return {
    on: (n) => {
      e.add(n);
      const o = () => t(n);
      return on(o), {
        off: o
      };
    },
    off: t,
    trigger: (...n) => Promise.all(Array.from(e).map((o) => o(...n)))
  };
}
function Qd(e) {
  let t = !1, n;
  const o = Ko(!0);
  return (...a) => (t || (n = o.run(() => e(...a)), t = !0), n);
}
function Nl(e) {
  let t = 0, n, o;
  const a = () => {
    t -= 1, o && t <= 0 && (o.stop(), n = void 0, o = void 0);
  };
  return (...r) => (t += 1, n || (o = Ko(!0), n = o.run(() => e(...r))), on(a), n);
}
function Pt(e) {
  return typeof e == "function" ? e() : s(e);
}
const xt = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Jd = (e) => typeof e < "u", ec = (e) => e != null, tc = Object.prototype.toString, nc = (e) => tc.call(e) === "[object Object]", ql = () => {
}, xs = /* @__PURE__ */ oc();
function oc() {
  var e, t;
  return xt && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function ac(e) {
  return We();
}
function zl(e, t = 1e4) {
  return dl((n, o) => {
    let a = Pt(e), r;
    const l = () => setTimeout(() => {
      a = Pt(e), o();
    }, Pt(t));
    return on(() => {
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
function rc(e, t) {
  ac() && kn(e, t);
}
function mr(e, t, n = {}) {
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
    }, Pt(t));
  }
  return o && (a.value = !0, xt && u()), on(i), {
    isPending: jo(a),
    start: u,
    stop: i
  };
}
function sc(e = 1e3, t = {}) {
  const {
    controls: n = !1,
    callback: o
  } = t, a = mr(
    o ?? ql,
    e,
    t
  ), r = S(() => !a.isPending.value);
  return n ? {
    ready: r,
    ...a
  } : r;
}
function rt(e) {
  var t;
  const n = Pt(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const so = xt ? window : void 0;
function Sn(...e) {
  let t, n, o, a;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, o, a] = e, t = so) : [t, n, o, a] = e, !t)
    return ql;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const r = [], l = () => {
    r.forEach((c) => c()), r.length = 0;
  }, i = (c, p, m, v) => (c.addEventListener(p, m, v), () => c.removeEventListener(p, m, v)), u = te(
    () => [rt(t), Pt(a)],
    ([c, p]) => {
      if (l(), !c)
        return;
      const m = nc(p) ? { ...p } : p;
      r.push(
        ...n.flatMap((v) => o.map((f) => i(c, v, f, m)))
      );
    },
    { immediate: !0, flush: "post" }
  ), d = () => {
    u(), l();
  };
  return on(d), d;
}
function lc(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function vr(...e) {
  let t, n, o = {};
  e.length === 3 ? (t = e[0], n = e[1], o = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], o = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: a = so,
    eventName: r = "keydown",
    passive: l = !1,
    dedupe: i = !1
  } = o, u = lc(t);
  return Sn(a, r, (d) => {
    d.repeat && Pt(i) || u(d) && n(d);
  }, l);
}
function gr() {
  const e = E(!1), t = We();
  return t && se(() => {
    e.value = !0;
  }, t), e;
}
function ic(e) {
  const t = gr();
  return S(() => (t.value, !!e()));
}
function uc(e, t, n = {}) {
  const { window: o = so, ...a } = n;
  let r;
  const l = ic(() => o && "MutationObserver" in o), i = () => {
    r && (r.disconnect(), r = void 0);
  }, u = S(() => {
    const m = Pt(e), v = (Array.isArray(m) ? m : [m]).map(rt).filter(ec);
    return new Set(v);
  }), d = te(
    () => u.value,
    (m) => {
      i(), l.value && m.size && (r = new MutationObserver(t), m.forEach((v) => r.observe(v, a)));
    },
    { immediate: !0, flush: "post" }
  ), c = () => r == null ? void 0 : r.takeRecords(), p = () => {
    i(), d();
  };
  return on(p), {
    isSupported: l,
    stop: p,
    takeRecords: c
  };
}
function jl(e, t = {}) {
  const {
    immediate: n = !0,
    fpsLimit: o = void 0,
    window: a = so
  } = t, r = E(!1), l = o ? 1e3 / o : null;
  let i = 0, u = null;
  function d(m) {
    if (!r.value || !a)
      return;
    i || (i = m);
    const v = m - i;
    if (l && v < l) {
      u = a.requestAnimationFrame(d);
      return;
    }
    i = m, e({ delta: v, timestamp: m }), u = a.requestAnimationFrame(d);
  }
  function c() {
    !r.value && a && (r.value = !0, i = 0, u = a.requestAnimationFrame(d));
  }
  function p() {
    r.value = !1, u != null && a && (a.cancelAnimationFrame(u), u = null);
  }
  return n && c(), on(p), {
    isActive: jo(r),
    pause: p,
    resume: c
  };
}
function dc(e) {
  return JSON.parse(JSON.stringify(e));
}
function Ee(e, t, n, o = {}) {
  var a, r, l;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: c = !1,
    defaultValue: p,
    shouldEmit: m
  } = o, v = We(), f = n || (v == null ? void 0 : v.emit) || ((a = v == null ? void 0 : v.$emit) == null ? void 0 : a.bind(v)) || ((l = (r = v == null ? void 0 : v.proxy) == null ? void 0 : r.$emit) == null ? void 0 : l.bind(v == null ? void 0 : v.proxy));
  let g = d;
  t || (t = "modelValue"), g = g || `update:${t.toString()}`;
  const b = (B) => i ? typeof i == "function" ? i(B) : dc(B) : B, C = () => Jd(e[t]) ? b(e[t]) : p, O = (B) => {
    m ? m(B) && f(g, B) : f(g, B);
  };
  if (u) {
    const B = C(), k = E(B);
    let $ = !1;
    return te(
      () => e[t],
      (P) => {
        $ || ($ = !0, k.value = b(P), ae(() => $ = !1));
      }
    ), te(
      k,
      (P) => {
        !$ && (P !== e[t] || c) && O(P);
      },
      { deep: c }
    ), k;
  } else
    return S({
      get() {
        return C();
      },
      set(B) {
        O(B);
      }
    });
}
function Yo(e) {
  return e ? e.flatMap((t) => t.type === Ae ? Yo(t.children) : [t]) : [];
}
function qe() {
  let e = document.activeElement;
  if (e == null)
    return null;
  for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null; )
    e = e.shadowRoot.activeElement;
  return e;
}
const cc = ["INPUT", "TEXTAREA"];
function Kl(e, t, n, o = {}) {
  if (!t || o.enableIgnoredElement && cc.includes(t.nodeName))
    return null;
  const {
    arrowKeyOptions: a = "both",
    attributeName: r = "[data-radix-vue-collection-item]",
    itemsArray: l = [],
    loop: i = !0,
    dir: u = "ltr",
    preventScroll: d = !0,
    focus: c = !1
  } = o, [p, m, v, f, g, b] = [
    e.key === "ArrowRight",
    e.key === "ArrowLeft",
    e.key === "ArrowUp",
    e.key === "ArrowDown",
    e.key === "Home",
    e.key === "End"
  ], C = v || f, O = p || m;
  if (!g && !b && (!C && !O || a === "vertical" && O || a === "horizontal" && C))
    return null;
  const B = n ? Array.from(n.querySelectorAll(r)) : l;
  if (!B.length)
    return null;
  d && e.preventDefault();
  let k = null;
  return O || C ? k = Hl(B, t, {
    goForward: C ? f : u === "ltr" ? p : m,
    loop: i
  }) : g ? k = B.at(0) || null : b && (k = B.at(-1) || null), c && (k == null || k.focus()), k;
}
function Hl(e, t, n, o = e.length) {
  if (--o === 0)
    return null;
  const a = e.indexOf(t), r = n.goForward ? a + 1 : a - 1;
  if (!n.loop && (r < 0 || r >= e.length))
    return null;
  const l = (r + e.length) % e.length, i = e[l];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? Hl(
    e,
    i,
    n,
    o
  ) : i : null;
}
function ba(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function La(e, t, n = ".", o) {
  if (!ba(t))
    return La(e, {}, n);
  const a = Object.assign({}, t);
  for (const r in e) {
    if (r === "__proto__" || r === "constructor")
      continue;
    const l = e[r];
    l != null && (Array.isArray(l) && Array.isArray(a[r]) ? a[r] = [...l, ...a[r]] : ba(l) && ba(a[r]) ? a[r] = La(
      l,
      a[r],
      (n ? `${n}.` : "") + r.toString()
    ) : a[r] = l);
  }
  return a;
}
function pc(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, o) => La(n, o, ""), {})
  );
}
const fc = pc(), [Xo, g_] = ve("ConfigProvider");
let mc = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", vc = (e = 21) => {
  let t = "", n = e;
  for (; n--; )
    t += mc[Math.random() * 64 | 0];
  return t;
};
const gc = Nl(() => {
  const e = E(/* @__PURE__ */ new Map()), t = E(), n = S(() => {
    for (const l of e.value.values())
      if (l)
        return !0;
    return !1;
  }), o = Xo({
    scrollBody: E(!0)
  });
  let a = null;
  const r = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", xs && (a == null || a()), t.value = void 0;
  };
  return te(n, (l, i) => {
    var u;
    if (!xt)
      return;
    if (!l) {
      i && r();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const d = window.innerWidth - document.documentElement.clientWidth, c = { padding: d, margin: 0 }, p = (u = o.scrollBody) != null && u.value ? typeof o.scrollBody.value == "object" ? fc({
      padding: o.scrollBody.value.padding === !0 ? d : o.scrollBody.value.padding,
      margin: o.scrollBody.value.margin === !0 ? d : o.scrollBody.value.margin
    }, c) : c : { padding: 0, margin: 0 };
    d > 0 && (document.body.style.paddingRight = typeof p.padding == "number" ? `${p.padding}px` : String(p.padding), document.body.style.marginRight = typeof p.margin == "number" ? `${p.margin}px` : String(p.margin), document.body.style.setProperty("--scrollbar-width", `${d}px`), document.body.style.overflow = "hidden"), xs && (a = Sn(
      document,
      "touchmove",
      (m) => hc(m),
      { passive: !1 }
    )), ae(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), e;
});
function lo(e) {
  const t = vc(6), n = gc();
  n.value.set(t, e ?? !1);
  const o = S({
    get: () => n.value.get(t) ?? !1,
    set: (a) => n.value.set(t, a)
  });
  return rc(() => {
    n.value.delete(t);
  }), o;
}
function Wl(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight)
    return !0;
  {
    const n = e.parentNode;
    return !(n instanceof Element) || n.tagName === "BODY" ? !1 : Wl(n);
  }
}
function hc(e) {
  const t = e || window.event, n = t.target;
  return n instanceof Element && Wl(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
const yc = "data-radix-vue-collection-item";
function Tn(e, t = yc) {
  const n = Symbol();
  return { createCollection: (o) => {
    const a = E([]);
    function r() {
      const l = rt(o);
      return l ? a.value = Array.from(
        l.querySelectorAll(`[${t}]:not([data-disabled])`)
      ) : a.value = [];
    }
    return Du(() => {
      a.value = [];
    }), se(r), ku(r), te(() => o == null ? void 0 : o.value, r, { immediate: !0 }), ao(n, a), a;
  }, injectCollection: () => oo(n, E([])) };
}
function Gt(e) {
  const t = Xo({
    dir: E("ltr")
  });
  return S(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.dir) == null ? void 0 : n.value) || "ltr";
  });
}
function Yt(e) {
  const t = We(), n = t == null ? void 0 : t.type.emits, o = {};
  return n != null && n.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), n == null || n.forEach((a) => {
    o[ll(zo(a))] = (...r) => e(a, ...r);
  }), o;
}
let wa = 0;
function hr() {
  be((e) => {
    if (!xt)
      return;
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? Cs()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? Cs()
    ), wa++, e(() => {
      wa === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((n) => n.remove()), wa--;
    });
  });
}
function Cs() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
function Zo(e) {
  return S(() => {
    var t;
    return Pt(e) ? !!((t = rt(e)) != null && t.closest("form")) : !0;
  });
}
function ze(e) {
  const t = We(), n = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((a, r) => {
    const l = (t == null ? void 0 : t.type.props[r]).default;
    return l !== void 0 && (a[r] = l), a;
  }, {}), o = al(e);
  return S(() => {
    const a = {}, r = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(r).forEach((l) => {
      a[zo(l)] = r[l];
    }), Object.keys({ ...n, ...a }).reduce((l, i) => (o.value[i] !== void 0 && (l[i] = o.value[i]), l), {});
  });
}
function ie(e, t) {
  const n = ze(e), o = t ? Yt(t) : {};
  return S(() => ({
    ...n.value,
    ...o
  }));
}
function N() {
  const e = We(), t = E(), n = S(() => {
    var l, i;
    return ["#text", "#comment"].includes((l = t.value) == null ? void 0 : l.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : rt(t);
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
function bc(e, t) {
  const n = zl(!1, 300), o = E(null), a = Zd();
  function r() {
    o.value = null, n.value = !1;
  }
  function l(i, u) {
    const d = i.currentTarget, c = { x: i.clientX, y: i.clientY }, p = wc(c, d.getBoundingClientRect()), m = _c(c, p), v = xc(u.getBoundingClientRect()), f = Bc([...m, ...v]);
    o.value = f, n.value = !0;
  }
  return be((i) => {
    if (e.value && t.value) {
      const u = (c) => l(c, t.value), d = (c) => l(c, e.value);
      e.value.addEventListener("pointerleave", u), t.value.addEventListener("pointerleave", d), i(() => {
        var c, p;
        (c = e.value) == null || c.removeEventListener("pointerleave", u), (p = t.value) == null || p.removeEventListener("pointerleave", d);
      });
    }
  }), be((i) => {
    var u;
    if (o.value) {
      const d = (c) => {
        var p, m;
        if (!o.value)
          return;
        const v = c.target, f = { x: c.clientX, y: c.clientY }, g = ((p = e.value) == null ? void 0 : p.contains(v)) || ((m = t.value) == null ? void 0 : m.contains(v)), b = !Cc(f, o.value), C = !!v.closest("[data-grace-area-trigger]");
        g ? r() : (b || C) && (r(), a.trigger());
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
function wc(e, t) {
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
function _c(e, t, n = 5) {
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
function xc(e) {
  const { top: t, right: n, bottom: o, left: a } = e;
  return [
    { x: a, y: t },
    { x: n, y: t },
    { x: n, y: o },
    { x: a, y: o }
  ];
}
function Cc(e, t) {
  const { x: n, y: o } = e;
  let a = !1;
  for (let r = 0, l = t.length - 1; r < t.length; l = r++) {
    const i = t[r].x, u = t[r].y, d = t[l].x, c = t[l].y;
    u > o != c > o && n < (d - i) * (o - u) / (c - u) + i && (a = !a);
  }
  return a;
}
function Bc(e) {
  const t = e.slice();
  return t.sort((n, o) => n.x < o.x ? -1 : n.x > o.x ? 1 : n.y < o.y ? -1 : n.y > o.y ? 1 : 0), Oc(t);
}
function Oc(e) {
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
var Sc = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, gn = /* @__PURE__ */ new WeakMap(), wo = /* @__PURE__ */ new WeakMap(), _o = {}, _a = 0, Ul = function(e) {
  return e && (e.host || Ul(e.parentNode));
}, $c = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = Ul(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Ec = function(e, t, n, o) {
  var a = $c(t, Array.isArray(e) ? e : [e]);
  _o[n] || (_o[n] = /* @__PURE__ */ new WeakMap());
  var r = _o[n], l = [], i = /* @__PURE__ */ new Set(), u = new Set(a), d = function(p) {
    !p || i.has(p) || (i.add(p), d(p.parentNode));
  };
  a.forEach(d);
  var c = function(p) {
    !p || u.has(p) || Array.prototype.forEach.call(p.children, function(m) {
      if (i.has(m))
        c(m);
      else
        try {
          var v = m.getAttribute(o), f = v !== null && v !== "false", g = (gn.get(m) || 0) + 1, b = (r.get(m) || 0) + 1;
          gn.set(m, g), r.set(m, b), l.push(m), g === 1 && f && wo.set(m, !0), b === 1 && m.setAttribute(n, "true"), f || m.setAttribute(o, "true");
        } catch (C) {
          console.error("aria-hidden: cannot operate on ", m, C);
        }
    });
  };
  return c(t), i.clear(), _a++, function() {
    l.forEach(function(p) {
      var m = gn.get(p) - 1, v = r.get(p) - 1;
      gn.set(p, m), r.set(p, v), m || (wo.has(p) || p.removeAttribute(o), wo.delete(p)), v || p.removeAttribute(n);
    }), _a--, _a || (gn = /* @__PURE__ */ new WeakMap(), gn = /* @__PURE__ */ new WeakMap(), wo = /* @__PURE__ */ new WeakMap(), _o = {});
  };
}, Dc = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), a = Sc(e);
  return a ? (o.push.apply(o, Array.from(a.querySelectorAll("[aria-live]"))), Ec(o, a, n, "aria-hidden")) : function() {
    return null;
  };
};
function io(e) {
  let t;
  te(() => rt(e), (n) => {
    n ? t = Dc(n) : t && t();
  }), Ke(() => {
    t && t();
  });
}
let kc = 0;
function Le(e, t = "radix") {
  const n = Xo({ useId: void 0 });
  return bn.useId ? `${t}-${bn.useId()}` : n.useId ? `${t}-${n.useId()}` : `${t}-${++kc}`;
}
function Gl(e) {
  const t = E(), n = S(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.width) ?? 0;
  }), o = S(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.height) ?? 0;
  });
  return se(() => {
    const a = rt(e);
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
function Ac(e, t) {
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
const Tc = "data-item-text";
function yr(e) {
  const t = zl("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (n, o) => {
      if (!(e != null && e.value) && !o)
        return;
      t.value = t.value + n;
      const a = (e == null ? void 0 : e.value) ?? o, r = qe(), l = a.map((p) => {
        var m;
        return {
          ref: p,
          textValue: ((m = (p.querySelector(`[${Tc}]`) ?? p).textContent) == null ? void 0 : m.trim()) ?? ""
        };
      }), i = l.find((p) => p.ref === r), u = l.map((p) => p.textValue), d = Ic(u, t.value, i == null ? void 0 : i.textValue), c = l.find((p) => p.textValue === d);
      return c && c.ref.focus(), c == null ? void 0 : c.ref;
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function Pc(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
function Ic(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((i) => i === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let r = Pc(e, Math.max(a, 0));
  o.length === 1 && (r = r.filter((i) => i !== n));
  const l = r.find(
    (i) => i.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
const br = w({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      var o, a;
      if (!n.default)
        return null;
      const r = Yo(n.default()), l = r.findIndex((c) => c.type !== tr);
      if (l === -1)
        return r;
      const i = r[l];
      (o = i.props) == null || delete o.ref;
      const u = i.props ? A(t, i.props) : t;
      t.class && (a = i.props) != null && a.class && delete i.props.class;
      const d = il(i, u);
      for (const c in u)
        c.startsWith("on") && (d.props || (d.props = {}), d.props[c] = u[c]);
      return r.length === 1 ? d : (r[l] = d, r);
    };
  }
}), W = w({
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
    return typeof o == "string" && ["area", "img", "input"].includes(o) ? () => Ue(o, t) : o !== "template" ? () => Ue(e.as, t, { default: n.default }) : () => Ue(br, t, { default: n.default });
  }
});
function Yl() {
  const e = E(), t = S(() => {
    var n, o;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (o = e.value) == null ? void 0 : o.$el.nextElementSibling : rt(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
const [Xl, Mc] = ve("CollapsibleRoot"), Fc = /* @__PURE__ */ w({
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
    const o = e, a = Ee(o, "open", n, {
      defaultValue: o.defaultOpen,
      passive: o.open === void 0
    }), r = Ee(o, "disabled");
    return Mc({
      contentId: "",
      disabled: r,
      open: a,
      onOpenToggle: () => {
        a.value = !a.value;
      }
    }), t({ open: a }), N(), (l, i) => (h(), x(s(W), {
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
}), Rc = /* @__PURE__ */ w({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    N();
    const n = Xl();
    return (o, a) => {
      var r, l;
      return h(), x(s(W), {
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
function Lc(e, t) {
  var n;
  const o = E({}), a = E("none"), r = E(e), l = e.value ? "mounted" : "unmounted";
  let i;
  const u = ((n = t.value) == null ? void 0 : n.ownerDocument.defaultView) ?? so, { state: d, dispatch: c } = Ac(l, {
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
    var C;
    if (xt) {
      const O = new CustomEvent(b, { bubbles: !1, cancelable: !1 });
      (C = t.value) == null || C.dispatchEvent(O);
    }
  };
  te(
    e,
    async (b, C) => {
      var O;
      const B = C !== b;
      if (await ae(), B) {
        const k = a.value, $ = xo(t.value);
        b ? (c("MOUNT"), p("enter"), $ === "none" && p("after-enter")) : $ === "none" || ((O = o.value) == null ? void 0 : O.display) === "none" ? (c("UNMOUNT"), p("leave"), p("after-leave")) : C && k !== $ ? (c("ANIMATION_OUT"), p("leave")) : (c("UNMOUNT"), p("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const m = (b) => {
    const C = xo(t.value), O = C.includes(
      b.animationName
    ), B = d.value === "mounted" ? "enter" : "leave";
    if (b.target === t.value && O && (p(`after-${B}`), c("ANIMATION_END"), !r.value)) {
      const k = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", i = u == null ? void 0 : u.setTimeout(() => {
        var $;
        (($ = t.value) == null ? void 0 : $.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = k);
      });
    }
    b.target === t.value && C === "none" && c("ANIMATION_END");
  }, v = (b) => {
    b.target === t.value && (a.value = xo(t.value));
  }, f = te(
    t,
    (b, C) => {
      b ? (o.value = getComputedStyle(b), b.addEventListener("animationstart", v), b.addEventListener("animationcancel", m), b.addEventListener("animationend", m)) : (c("ANIMATION_END"), i !== void 0 && (u == null || u.clearTimeout(i)), C == null || C.removeEventListener("animationstart", v), C == null || C.removeEventListener("animationcancel", m), C == null || C.removeEventListener("animationend", m));
    },
    { immediate: !0 }
  ), g = te(d, () => {
    const b = xo(t.value);
    a.value = d.value === "mounted" ? b : "none";
  });
  return Ke(() => {
    f(), g();
  }), {
    isPresent: S(
      () => ["mounted", "unmountSuspended"].includes(d.value)
    )
  };
}
function xo(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const st = w({
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
    const { present: a, forceMount: r } = ye(e), l = E(), { isPresent: i } = Lc(a, l);
    n({ present: i });
    let u = t.default({ present: i });
    u = Yo(u || []);
    const d = We();
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
    return () => r.value || a.value || i.value ? Ue(t.default({ present: i })[0], {
      ref: (c) => {
        const p = rt(c);
        return typeof (p == null ? void 0 : p.hasAttribute) > "u" || (p != null && p.hasAttribute("data-radix-popper-content-wrapper") ? l.value = p.firstElementChild : l.value = p), p;
      }
    }) : null;
  }
}), Vc = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Xl();
    n.contentId || (n.contentId = Le(void 0, "radix-vue-collapsible-content"));
    const o = E(), { forwardRef: a, currentElement: r } = N(), l = E(0), i = E(0), u = S(() => n.open.value), d = E(u.value), c = E();
    return te(
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
    }), (p, m) => (h(), x(s(st), {
      ref_key: "presentRef",
      ref: o,
      present: p.forceMount || s(n).open.value,
      "force-mount": !0
    }, {
      default: y(() => {
        var v, f;
        return [
          F(s(W), A(p.$attrs, {
            id: s(n).contentId,
            ref: s(a),
            "as-child": t.asChild,
            as: p.as,
            "data-state": s(n).open.value ? "open" : "closed",
            "data-disabled": (v = s(n).disabled) != null && v.value ? "" : void 0,
            hidden: !((f = o.value) != null && f.present),
            style: {
              "--radix-collapsible-content-height": `${i.value}px`,
              "--radix-collapsible-content-width": `${l.value}px`
            }
          }), {
            default: y(() => {
              var g;
              return [
                (g = o.value) != null && g.present ? _(p.$slots, "default", { key: 0 }) : ge("", !0)
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
function Zl({ type: e, defaultValue: t, modelValue: n }) {
  const o = n || t;
  if (_n(e) && _n(n) && _n(t))
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
function Nc({ type: e, defaultValue: t, modelValue: n }) {
  return e || Zl({ type: e, defaultValue: t, modelValue: n });
}
function qc({ type: e, defaultValue: t }) {
  return t !== void 0 ? t : e === "single" ? void 0 : [];
}
function zc(e, t) {
  const n = E(Nc(e)), o = Ee(e, "modelValue", t, {
    defaultValue: qc(e),
    passive: e.modelValue === void 0,
    deep: !0
  });
  te(
    () => [e.type, e.modelValue, e.defaultValue],
    () => {
      const l = Zl(e);
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
const [Qo, jc] = ve("AccordionRoot"), Kc = /* @__PURE__ */ w({
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
    const n = e, o = t, { dir: a, disabled: r } = ye(n), l = Gt(a), { modelValue: i, changeModelValue: u, isSingle: d } = zc(n, o), { forwardRef: c, currentElement: p } = N();
    return jc({
      disabled: r,
      direction: l,
      orientation: n.orientation,
      parentElement: p,
      isSingle: d,
      collapsible: n.collapsible,
      modelValue: i,
      changeModelValue: u
    }), (m, v) => (h(), x(s(W), {
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
}), [wr, Hc] = ve("AccordionItem"), Wc = /* @__PURE__ */ w({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e, { expose: t }) {
    const n = e, o = Qo(), a = S(
      () => o.isSingle.value ? n.value === o.modelValue.value : Array.isArray(o.modelValue.value) && o.modelValue.value.includes(n.value)
    ), r = S(() => o.disabled.value || n.disabled), l = S(() => r.value ? "" : void 0), i = S(
      () => a.value ? "open" : "closed"
      /* Closed */
    );
    t({ open: a, dataDisabled: l });
    const { currentRef: u, currentElement: d } = N();
    Hc({
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
      const v = p.target;
      if (Array.from(((m = o.parentElement.value) == null ? void 0 : m.querySelectorAll("[data-radix-vue-collection-item]")) ?? []).findIndex((f) => f === v) === -1)
        return null;
      Kl(
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
    return (p, m) => (h(), x(s(Fc), {
      "data-orientation": s(o).orientation,
      "data-disabled": l.value,
      "data-state": i.value,
      disabled: r.value,
      open: a.value,
      as: n.as,
      "as-child": n.asChild,
      onKeydown: Ze(c, ["up", "down", "left", "right", "home", "end"])
    }, {
      default: y(() => [
        _(p.$slots, "default", { open: a.value })
      ]),
      _: 3
    }, 8, ["data-orientation", "data-disabled", "data-state", "disabled", "open", "as", "as-child"]));
  }
}), Uc = /* @__PURE__ */ w({
  __name: "AccordionContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Qo(), o = wr();
    return N(), (a, r) => (h(), x(s(Vc), {
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
}), Gc = /* @__PURE__ */ w({
  __name: "AccordionHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "h3" }
  },
  setup(e) {
    const t = e, n = Qo(), o = wr();
    return N(), (a, r) => (h(), x(s(W), {
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
}), Yc = /* @__PURE__ */ w({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Qo(), o = wr();
    o.triggerId || (o.triggerId = Le(void 0, "radix-vue-accordion-trigger"));
    function a() {
      const r = n.isSingle.value && o.open.value && !n.collapsible;
      o.disabled.value || r || n.changeModelValue(o.value.value);
    }
    return (r, l) => (h(), x(s(Rc), {
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
}), [Ct, Xc] = ve("DialogRoot"), _r = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = Ee(n, "open", t, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), a = E(), r = E(), { modal: l } = ye(n);
    return Xc({
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
}), xr = /* @__PURE__ */ w({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Ct(), { forwardRef: o, currentElement: a } = N();
    return n.contentId || (n.contentId = Le(void 0, "radix-vue-dialog-content")), se(() => {
      n.triggerElement.value = a.value;
    }), (r, l) => (h(), x(s(W), A(t, {
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
}), Pn = /* @__PURE__ */ w({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = gr();
    return (n, o) => s(t) || n.forceMount ? (h(), x(no, {
      key: 0,
      to: n.to,
      disabled: n.disabled
    }, [
      _(n.$slots, "default")
    ], 8, ["to", "disabled"])) : ge("", !0);
  }
}), Cr = /* @__PURE__ */ w({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Pn), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zc = "dismissableLayer.pointerDownOutside", Qc = "dismissableLayer.focusOutside";
function Ql(e, t) {
  const n = t.closest(
    "[data-dismissable-layer]"
  ), o = e.dataset.dismissableLayer === "" ? e : e.querySelector(
    "[data-dismissable-layer]"
  ), a = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(n && o === n || a.indexOf(o) < a.indexOf(n));
}
function Jc(e, t) {
  var n;
  const o = ((n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), a = E(!1), r = E(() => {
  });
  return be((l) => {
    if (!xt)
      return;
    const i = async (d) => {
      const c = d.target;
      if (t != null && t.value) {
        if (Ql(t.value, c)) {
          a.value = !1;
          return;
        }
        if (d.target && !a.value) {
          let p = function() {
            fr(
              Zc,
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
function ep(e, t) {
  var n;
  const o = ((n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), a = E(!1);
  return be((r) => {
    if (!xt)
      return;
    const l = async (i) => {
      t != null && t.value && (await ae(), !(!t.value || Ql(t.value, i.target)) && i.target && !a.value && fr(
        Qc,
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
const dt = Bn({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), In = /* @__PURE__ */ w({
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
    ), i = S(() => dt.layersRoot), u = S(() => r.value ? Array.from(i.value).indexOf(r.value) : -1), d = S(() => dt.layersWithOutsidePointerEventsDisabled.size > 0), c = S(() => {
      const f = Array.from(i.value), [g] = [...dt.layersWithOutsidePointerEventsDisabled].slice(-1), b = f.indexOf(g);
      return u.value >= b;
    }), p = Jc(async (f) => {
      const g = [...dt.branches].some(
        (b) => b == null ? void 0 : b.contains(f.target)
      );
      !c.value || g || (o("pointerDownOutside", f), o("interactOutside", f), await ae(), f.defaultPrevented || o("dismiss"));
    }, r), m = ep((f) => {
      [...dt.branches].some(
        (g) => g == null ? void 0 : g.contains(f.target)
      ) || (o("focusOutside", f), o("interactOutside", f), f.defaultPrevented || o("dismiss"));
    }, r);
    vr("Escape", (f) => {
      u.value === i.value.size - 1 && (o("escapeKeyDown", f), f.defaultPrevented || o("dismiss"));
    });
    let v;
    return be((f) => {
      r.value && (n.disableOutsidePointerEvents && (dt.layersWithOutsidePointerEventsDisabled.size === 0 && (v = l.value.body.style.pointerEvents, l.value.body.style.pointerEvents = "none"), dt.layersWithOutsidePointerEventsDisabled.add(r.value)), i.value.add(r.value), f(() => {
        n.disableOutsidePointerEvents && dt.layersWithOutsidePointerEventsDisabled.size === 1 && (l.value.body.style.pointerEvents = v);
      }));
    }), be((f) => {
      f(() => {
        r.value && (i.value.delete(r.value), dt.layersWithOutsidePointerEventsDisabled.delete(r.value));
      });
    }), (f, g) => (h(), x(s(W), {
      ref: s(a),
      "as-child": f.asChild,
      as: f.as,
      "data-dismissable-layer": "",
      style: wt({
        pointerEvents: d.value ? c.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: s(m).onFocusCapture,
      onBlurCapture: s(m).onBlurCapture,
      onPointerdownCapture: s(p).onPointerDownCapture
    }, {
      default: y(() => [
        _(f.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
}), tp = /* @__PURE__ */ w({
  __name: "DismissableLayerBranch",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: o } = N();
    return se(() => {
      dt.branches.add(o.value);
    }), Ke(() => {
      dt.branches.delete(o.value);
    }), (a, r) => (h(), x(s(W), A({ ref: s(n) }, t), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), xa = "focusScope.autoFocusOnMount", Ca = "focusScope.autoFocusOnUnmount", Bs = { bubbles: !1, cancelable: !0 };
function Ao(e, { select: t = !1 } = {}) {
  const n = qe();
  for (const o of e)
    if (qt(o, { select: t }), qe() !== n)
      return !0;
}
function np(e) {
  const t = Br(e), n = Os(t, e), o = Os(t.reverse(), e);
  return [n, o];
}
function Br(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const a = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || a ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Os(e, t) {
  for (const n of e)
    if (!op(n, { upTo: t }))
      return n;
}
function op(e, { upTo: t }) {
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
function ap(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function qt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = qe();
    e.focus({ preventScroll: !0 }), e !== n && ap(e) && t && e.select();
  }
}
const rp = Qd(() => E([]));
function sp() {
  const e = rp();
  return {
    add(t) {
      const n = e.value[0];
      t !== n && (n == null || n.pause()), e.value = Ss(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var n;
      e.value = Ss(e.value, t), (n = e.value[0]) == null || n.resume();
    }
  };
}
function Ss(e, t) {
  const n = [...e], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function lp(e) {
  return e.filter((t) => t.tagName !== "A");
}
const Jo = /* @__PURE__ */ w({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, o = t, { currentRef: a, currentElement: r } = N(), l = E(null), i = sp(), u = Bn({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    be((c) => {
      if (!xt)
        return;
      const p = r.value;
      if (!n.trapped)
        return;
      function m(b) {
        if (u.paused || !p)
          return;
        const C = b.target;
        p.contains(C) ? l.value = C : qt(l.value, { select: !0 });
      }
      function v(b) {
        if (u.paused || !p)
          return;
        const C = b.relatedTarget;
        C !== null && (p.contains(C) || qt(l.value, { select: !0 }));
      }
      function f(b) {
        p.contains(l.value) || qt(p);
      }
      document.addEventListener("focusin", m), document.addEventListener("focusout", v);
      const g = new MutationObserver(f);
      p && g.observe(p, { childList: !0, subtree: !0 }), c(() => {
        document.removeEventListener("focusin", m), document.removeEventListener("focusout", v), g.disconnect();
      });
    }), be(async (c) => {
      const p = r.value;
      if (await ae(), !p)
        return;
      i.add(u);
      const m = qe();
      if (!p.contains(m)) {
        const v = new CustomEvent(xa, Bs);
        p.addEventListener(xa, (f) => o("mountAutoFocus", f)), p.dispatchEvent(v), v.defaultPrevented || (Ao(lp(Br(p)), {
          select: !0
        }), qe() === m && qt(p));
      }
      c(() => {
        p.removeEventListener(xa, (g) => o("mountAutoFocus", g));
        const v = new CustomEvent(Ca, Bs), f = (g) => {
          o("unmountAutoFocus", g);
        };
        p.addEventListener(Ca, f), p.dispatchEvent(v), setTimeout(() => {
          v.defaultPrevented || qt(m ?? document.body, { select: !0 }), p.removeEventListener(Ca, f), i.remove(u);
        }, 0);
      });
    });
    function d(c) {
      if (!n.loop && !n.trapped || u.paused)
        return;
      const p = c.key === "Tab" && !c.altKey && !c.ctrlKey && !c.metaKey, m = qe();
      if (p && m) {
        const v = c.currentTarget, [f, g] = np(v);
        f && g ? !c.shiftKey && m === g ? (c.preventDefault(), n.loop && qt(f, { select: !0 })) : c.shiftKey && m === f && (c.preventDefault(), n.loop && qt(g, { select: !0 })) : m === v && c.preventDefault();
      }
    }
    return (c, p) => (h(), x(s(W), {
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
}), ip = "menu.itemSelect", Va = ["Enter", " "], up = ["ArrowDown", "PageUp", "Home"], Jl = ["ArrowUp", "PageDown", "End"], dp = [...up, ...Jl], cp = {
  ltr: [...Va, "ArrowRight"],
  rtl: [...Va, "ArrowLeft"]
}, pp = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function Or(e) {
  return e ? "open" : "closed";
}
function Vo(e) {
  return e === "indeterminate";
}
function Sr(e) {
  return Vo(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Na(e) {
  const t = qe();
  for (const n of e)
    if (n === t || (n.focus(), qe() !== t))
      return;
}
function fp(e, t) {
  const { x: n, y: o } = e;
  let a = !1;
  for (let r = 0, l = t.length - 1; r < t.length; l = r++) {
    const i = t[r].x, u = t[r].y, d = t[l].x, c = t[l].y;
    u > o != c > o && n < (d - i) * (o - u) / (c - u) + i && (a = !a);
  }
  return a;
}
function mp(e, t) {
  if (!t)
    return !1;
  const n = { x: e.clientX, y: e.clientY };
  return fp(n, t);
}
function Zn(e) {
  return e.pointerType === "mouse";
}
const vp = "DialogTitle", gp = "DialogContent";
function hp({
  titleName: e = vp,
  contentName: t = gp,
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
const ei = /* @__PURE__ */ w({
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
    const n = e, o = t, a = Ct(), { forwardRef: r, currentElement: l } = N();
    return a.titleId || (a.titleId = Le(void 0, "radix-vue-dialog-title")), a.descriptionId || (a.descriptionId = Le(void 0, "radix-vue-dialog-description")), se(() => {
      a.contentElement = l, qe() !== document.body && (a.triggerElement.value = qe());
    }), process.env.NODE_ENV !== "production" && hp({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: a.titleId,
      descriptionId: a.descriptionId,
      contentElement: l
    }), (i, u) => (h(), x(s(Jo), {
      "as-child": "",
      loop: "",
      trapped: n.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => o("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => o("closeAutoFocus", d))
    }, {
      default: y(() => [
        F(s(In), A({
          id: s(a).contentId,
          ref: s(r),
          as: i.as,
          "as-child": i.asChild,
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": s(a).descriptionId,
          "aria-labelledby": s(a).titleId,
          "data-state": s(Or)(s(a).open.value)
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
}), yp = /* @__PURE__ */ w({
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
    const n = e, o = t, a = Ct(), r = Yt(o), { forwardRef: l, currentElement: i } = N();
    return io(i), (u, d) => (h(), x(ei, A({ ...n, ...s(r) }, {
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
}), bp = /* @__PURE__ */ w({
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
    const n = e, o = Yt(t);
    N();
    const a = Ct(), r = E(!1), l = E(!1);
    return (i, u) => (h(), x(ei, A({ ...n, ...s(o) }, {
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
}), ea = /* @__PURE__ */ w({
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
    const n = e, o = t, a = Ct(), r = Yt(o), { forwardRef: l } = N();
    return (i, u) => (h(), x(s(st), {
      present: i.forceMount || s(a).open.value
    }, {
      default: y(() => [
        s(a).modal.value ? (h(), x(yp, A({
          key: 0,
          ref: s(l)
        }, { ...n, ...s(r), ...i.$attrs }), {
          default: y(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (h(), x(bp, A({
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
}), wp = /* @__PURE__ */ w({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Ct();
    return lo(!0), N(), (n, o) => (h(), x(s(W), {
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
}), ta = /* @__PURE__ */ w({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Ct(), { forwardRef: n } = N();
    return (o, a) => {
      var r;
      return (r = s(t)) != null && r.modal.value ? (h(), x(s(st), {
        key: 0,
        present: o.forceMount || s(t).open.value
      }, {
        default: y(() => [
          F(wp, A(o.$attrs, {
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
      }, 8, ["present"])) : ge("", !0);
    };
  }
}), an = /* @__PURE__ */ w({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    N();
    const n = Ct();
    return (o, a) => (h(), x(s(W), A(t, {
      type: o.as === "button" ? "button" : void 0,
      onClick: a[0] || (a[0] = (r) => s(n).onOpenChange(!1))
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
}), $r = /* @__PURE__ */ w({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e, n = Ct();
    return N(), (o, a) => (h(), x(s(W), A(t, {
      id: s(n).titleId
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Er = /* @__PURE__ */ w({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    N();
    const n = Ct();
    return (o, a) => (h(), x(s(W), A(t, {
      id: s(n).descriptionId
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), _p = /* @__PURE__ */ w({
  __name: "AlertDialogRoot",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = ie(e, t);
    return N(), (o, a) => (h(), x(s(_r), A(s(n), { modal: !0 }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), xp = /* @__PURE__ */ w({
  __name: "AlertDialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    return N(), (n, o) => (h(), x(s(xr), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Cp = /* @__PURE__ */ w({
  __name: "AlertDialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Pn), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Bp, Op] = ve("AlertDialogContent"), Sp = /* @__PURE__ */ w({
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
    const n = e, o = Yt(t);
    N();
    const a = E();
    return Op({
      onCancelElementChange: (r) => {
        a.value = r;
      }
    }), (r, l) => (h(), x(s(ea), A({ ...n, ...s(o) }, {
      role: "alertdialog",
      onPointerDownOutside: l[0] || (l[0] = De(() => {
      }, ["prevent"])),
      onInteractOutside: l[1] || (l[1] = De(() => {
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
}), $p = /* @__PURE__ */ w({
  __name: "AlertDialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return N(), (n, o) => (h(), x(s(ta), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ep = /* @__PURE__ */ w({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Bp(), { forwardRef: o, currentElement: a } = N();
    return se(() => {
      n.onCancelElementChange(a.value);
    }), (r, l) => (h(), x(s(an), A(t, { ref: s(o) }), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Dp = /* @__PURE__ */ w({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e;
    return N(), (n, o) => (h(), x(s($r), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), kp = /* @__PURE__ */ w({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    return N(), (n, o) => (h(), x(s(Er), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ap = /* @__PURE__ */ w({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    return N(), (n, o) => (h(), x(s(an), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [ti, Tp] = ve("AvatarRoot"), Pp = /* @__PURE__ */ w({
  __name: "AvatarRoot",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return N(), Tp({
      imageLoadingStatus: E("loading")
    }), (t, n) => (h(), x(s(W), {
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
function Ip(e, t) {
  const n = E("idle"), o = E(!1), a = (r) => () => {
    o.value && (n.value = r);
  };
  return se(() => {
    o.value = !0, te([() => e.value, () => t == null ? void 0 : t.value], ([r, l]) => {
      if (!r)
        n.value = "error";
      else {
        const i = new window.Image();
        n.value = "loading", i.onload = a("loaded"), i.onerror = a("error"), i.src = r, l && (i.referrerPolicy = l);
      }
    }, { immediate: !0 });
  }), Ke(() => {
    o.value = !1;
  }), n;
}
const Mp = /* @__PURE__ */ w({
  __name: "AvatarImage",
  props: {
    src: {},
    referrerPolicy: {},
    asChild: { type: Boolean },
    as: { default: "img" }
  },
  emits: ["loadingStatusChange"],
  setup(e, { emit: t }) {
    const n = e, o = t, { src: a, referrerPolicy: r } = ye(n);
    N();
    const l = ti(), i = Ip(a, r);
    return te(
      i,
      (u) => {
        o("loadingStatusChange", u), u !== "idle" && (l.imageLoadingStatus.value = u);
      },
      { immediate: !0 }
    ), (u, d) => Dn((h(), x(s(W), {
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
      [Ja, s(i) === "loaded"]
    ]);
  }
}), Fp = /* @__PURE__ */ w({
  __name: "AvatarFallback",
  props: {
    delayMs: { default: 0 },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = ti();
    N();
    const o = E(!1);
    let a;
    return te(n.imageLoadingStatus, (r) => {
      r === "loading" && (o.value = !1, t.delayMs ? a = setTimeout(() => {
        o.value = !0, clearTimeout(a);
      }, t.delayMs) : o.value = !0);
    }, { immediate: !0 }), (r, l) => o.value && s(n).imageLoadingStatus.value !== "loaded" ? (h(), x(s(W), {
      key: 0,
      "as-child": r.asChild,
      as: r.as
    }, {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"])) : ge("", !0);
  }
}), [ni, Rp] = ve("PopperRoot"), Mn = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = E();
    return Rp({
      anchor: t,
      onAnchorChange: (n) => t.value = n
    }), (n, o) => _(n.$slots, "default");
  }
}), uo = /* @__PURE__ */ w({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: o } = N(), a = ni();
    return be(() => {
      a.onAnchorChange(t.element ?? o.value);
    }), (r, l) => (h(), x(s(W), {
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
function Lp(e) {
  return e !== null;
}
function Vp(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var n, o, a;
      const { placement: r, rects: l, middlewareData: i } = t, u = ((n = i.arrow) == null ? void 0 : n.centerOffset) !== 0, d = u ? 0 : e.arrowWidth, c = u ? 0 : e.arrowHeight, [p, m] = qa(r), v = { start: "0%", center: "50%", end: "100%" }[m], f = (((o = i.arrow) == null ? void 0 : o.x) ?? 0) + d / 2, g = (((a = i.arrow) == null ? void 0 : a.y) ?? 0) + c / 2;
      let b = "", C = "";
      return p === "bottom" ? (b = u ? v : `${f}px`, C = `${-c}px`) : p === "top" ? (b = u ? v : `${f}px`, C = `${l.floating.height + c}px`) : p === "right" ? (b = `${-c}px`, C = u ? v : `${g}px`) : p === "left" && (b = `${l.floating.width + c}px`, C = u ? v : `${g}px`), { data: { x: b, y: C } };
    }
  };
}
function qa(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
const oi = {
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
}, [h_, Np] = ve("PopperContent"), $n = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ nr({
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
    ...oi
  }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = ni(), { forwardRef: r, currentElement: l } = N(), i = E(), u = E(), { width: d, height: c } = Gl(u), p = S(
      () => n.side + (n.align !== "center" ? `-${n.align}` : "")
    ), m = S(() => typeof n.collisionPadding == "number" ? n.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...n.collisionPadding }), v = S(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), f = S(() => ({
      padding: m.value,
      boundary: v.value.filter(Lp),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: v.value.length > 0
    })), g = Xd(() => [
      Tl({
        mainAxis: n.sideOffset + c.value,
        alignmentAxis: n.alignOffset
      }),
      n.prioritizePosition && n.avoidCollisions && Ro({
        ...f.value
      }),
      n.avoidCollisions && Pl({
        mainAxis: !0,
        crossAxis: !!n.prioritizePosition,
        limiter: n.sticky === "partial" ? Fl() : void 0,
        ...f.value
      }),
      !n.prioritizePosition && n.avoidCollisions && Ro({
        ...f.value
      }),
      Il({
        ...f.value,
        apply: ({ elements: T, rects: L, availableWidth: I, availableHeight: U }) => {
          const { width: K, height: Y } = L.reference, H = T.floating.style;
          H.setProperty(
            "--radix-popper-available-width",
            `${I}px`
          ), H.setProperty(
            "--radix-popper-available-height",
            `${U}px`
          ), H.setProperty(
            "--radix-popper-anchor-width",
            `${K}px`
          ), H.setProperty(
            "--radix-popper-anchor-height",
            `${Y}px`
          );
        }
      }),
      u.value && Rl({ element: u.value, padding: n.arrowPadding }),
      Vp({
        arrowWidth: d.value,
        arrowHeight: c.value
      }),
      n.hideWhenDetached && Ml({ strategy: "referenceHidden", ...f.value })
    ]), { floatingStyles: b, placement: C, isPositioned: O, middlewareData: B } = Vl(
      a.anchor,
      i,
      {
        strategy: "fixed",
        placement: p,
        whileElementsMounted: (...T) => Al(...T, {
          animationFrame: n.updatePositionStrategy === "always"
        }),
        middleware: g
      }
    ), k = S(
      () => qa(C.value)[0]
    ), $ = S(
      () => qa(C.value)[1]
    );
    or(() => {
      O.value && o("placed");
    });
    const P = S(
      () => {
        var T;
        return ((T = B.value.arrow) == null ? void 0 : T.centerOffset) !== 0;
      }
    ), D = E("");
    be(() => {
      l.value && (D.value = window.getComputedStyle(l.value).zIndex);
    });
    const M = S(() => {
      var T;
      return ((T = B.value.arrow) == null ? void 0 : T.x) ?? 0;
    }), R = S(() => {
      var T;
      return ((T = B.value.arrow) == null ? void 0 : T.y) ?? 0;
    });
    return Np({
      placedSide: k,
      onArrowChange: (T) => u.value = T,
      arrowX: M,
      arrowY: R,
      shouldHideArrow: P
    }), (T, L) => {
      var I, U, K;
      return h(), z("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-radix-popper-content-wrapper": "",
        style: wt({
          ...s(b),
          transform: s(O) ? s(b).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: D.value,
          "--radix-popper-transform-origin": [
            (I = s(B).transformOrigin) == null ? void 0 : I.x,
            (U = s(B).transformOrigin) == null ? void 0 : U.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((K = s(B).hide) == null ? void 0 : K.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        F(s(W), A({ ref: s(r) }, T.$attrs, {
          "as-child": n.asChild,
          as: T.as,
          "data-side": k.value,
          "data-align": $.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: s(O) ? void 0 : "none"
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
}), co = /* @__PURE__ */ w({
  __name: "VisuallyHidden",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return N(), (t, n) => (h(), x(s(W), {
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
}), qp = /* @__PURE__ */ w({
  __name: "VisuallyHiddenInput",
  props: {
    name: {},
    value: {},
    required: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, n = S(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" ? [{ name: t.name, value: t.value }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((o, a) => typeof o == "object" ? Object.entries(o).map(([r, l]) => ({ name: `[${a}][${t.name}][${r}]`, value: l })) : { name: `[${t.name}][${a}]`, value: o }) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([o, a]) => ({ name: `[${t.name}][${o}]`, value: a })) : []);
    return (o, a) => (h(!0), z(Ae, null, jt(n.value, (r) => (h(), x(co, {
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
}), zp = "data-radix-vue-collection-item", [Dr, jp] = ve("CollectionProvider");
function kr(e = zp) {
  const t = E(/* @__PURE__ */ new Map()), n = E(), o = jp({
    collectionRef: n,
    itemMap: t,
    attrName: e
  }), { getItems: a } = Tr(o), r = S(() => Array.from(o.itemMap.value.values())), l = S(() => o.itemMap.value.size);
  return { getItems: a, reactiveItems: r, itemMapSize: l };
}
const Ar = w({
  name: "CollectionSlot",
  setup(e, { slots: t }) {
    const n = Dr(), { primitiveElement: o, currentElement: a } = Yl();
    return te(a, () => {
      n.collectionRef.value = a.value;
    }), () => Ue(br, { ref: o }, t);
  }
}), na = w({
  name: "CollectionItem",
  inheritAttrs: !1,
  props: {
    value: {
      // It accepts any value
      validator: () => !0
    }
  },
  setup(e, { slots: t, attrs: n }) {
    const o = Dr(), { primitiveElement: a, currentElement: r } = Yl();
    return be((l) => {
      if (r.value) {
        const i = ul(r.value);
        o.itemMap.value.set(i, { ref: r.value, value: e.value }), l(() => o.itemMap.value.delete(i));
      }
    }), () => Ue(br, { ...n, [o.attrName]: "", ref: a }, t);
  }
});
function Tr(e) {
  const t = e ?? Dr();
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
const [Fn, Kp] = ve("ComboboxRoot"), Hp = /* @__PURE__ */ w({
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
    const n = e, o = t, { multiple: a, disabled: r, dir: l } = ye(n), i = Gt(l), u = Ee(n, "searchTerm", o, {
      // @ts-expect-error ignore the type error here
      defaultValue: "",
      passive: n.searchTerm === void 0
    }), d = Ee(n, "modelValue", o, {
      // @ts-expect-error ignore the type error here
      defaultValue: n.defaultValue ?? a.value ? [] : void 0,
      passive: n.modelValue === void 0,
      deep: !0
    }), c = Ee(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), p = Ee(n, "selectedValue", o, {
      defaultValue: void 0,
      passive: n.selectedValue === void 0
    });
    async function m(q) {
      var le, re;
      c.value = q, await ae(), q ? (d.value && (Array.isArray(d.value) && a.value ? p.value = (le = B().find((ke) => {
        var Me, Ve;
        return ((Ve = (Me = ke.ref) == null ? void 0 : Me.dataset) == null ? void 0 : Ve.state) === "checked";
      })) == null ? void 0 : le.value : p.value = d.value), await ae(), (re = g.value) == null || re.focus(), U()) : (f.value = !1, n.resetSearchTermOnBlur && M("blur"));
    }
    function v(q) {
      if (Array.isArray(d.value) && a.value) {
        const le = d.value.findIndex((ke) => Jt(ke, q)), re = [...d.value];
        le === -1 ? re.push(q) : re.splice(le, 1), d.value = re;
      } else
        d.value = q, m(!1);
    }
    const f = E(!1), g = E(), b = E(), { forwardRef: C, currentElement: O } = N(), { getItems: B, reactiveItems: k, itemMapSize: $ } = kr("data-radix-vue-combobox-item"), P = E([]);
    te(() => $.value, () => {
      P.value = B().map((q) => q.value);
    }, {
      immediate: !0,
      flush: "post"
    });
    const D = S(() => {
      if (f.value) {
        if (n.filterFunction)
          return n.filterFunction(P.value, u.value);
        const q = P.value.filter((le) => typeof le == "string");
        if (q.length)
          return q.filter((le) => {
            var re;
            return le.toLowerCase().includes((re = u.value) == null ? void 0 : re.toLowerCase());
          });
      }
      return P.value;
    });
    function M(q) {
      const le = q === "blur" || q === "select" && n.resetSearchTermOnSelect;
      !a.value && d.value && !Array.isArray(d.value) ? n.displayValue ? u.value = n.displayValue(d.value) : typeof d.value != "object" ? u.value = d.value.toString() : le && (u.value = "") : le && (u.value = "");
    }
    const R = S(() => D.value.findIndex((q) => Jt(q, p.value))), T = S(() => {
      var q;
      return (q = k.value.find((le) => Jt(le.value, p.value))) == null ? void 0 : q.ref;
    }), L = S(() => JSON.stringify(d.value));
    te(L, async () => {
      await ae(), await ae(), M("select");
    }, {
      // If searchTerm is provided with value during initialization, we don't reset it immediately
      immediate: !n.searchTerm
    }), te(() => [D.value.length, u.value.length], async ([q, le], [re, ke]) => {
      await ae(), await ae(), q && (ke > le || R.value === -1) && (p.value = D.value[0]);
    });
    const I = Zo(O);
    function U() {
      var q;
      T.value instanceof Element && ((q = T.value) == null || q.scrollIntoView({ block: "nearest" }));
    }
    function K() {
      T.value instanceof Element && T.value.focus && T.value.focus();
    }
    const Y = E(!1);
    function H() {
      Y.value = !0;
    }
    function J() {
      requestAnimationFrame(() => {
        Y.value = !1;
      });
    }
    async function Q(q) {
      var le;
      D.value.length && p.value && T.value instanceof Element && (q.preventDefault(), q.stopPropagation(), Y.value || (le = T.value) == null || le.click());
    }
    return Kp({
      searchTerm: u,
      modelValue: d,
      // @ts-expect-error ignoring
      onValueChange: v,
      isUserInputted: f,
      multiple: a,
      disabled: r,
      open: c,
      onOpenChange: m,
      filteredOptions: D,
      contentId: "",
      inputElement: g,
      selectedElement: T,
      onInputElementChange: (q) => g.value = q,
      onInputNavigation: async (q) => {
        const le = R.value;
        le === 0 && q === "up" || le === D.value.length - 1 && q === "down" || (le === -1 && D.value.length || q === "home" ? p.value = D.value[0] : q === "end" ? p.value = D.value[D.value.length - 1] : p.value = D.value[q === "up" ? le - 1 : le + 1], await ae(), U(), K(), ae(() => {
          var re;
          return (re = g.value) == null ? void 0 : re.focus({ preventScroll: !0 });
        }));
      },
      onInputEnter: Q,
      onCompositionEnd: J,
      onCompositionStart: H,
      selectedValue: p,
      onSelectedValueChange: (q) => p.value = q,
      parentElement: O,
      contentElement: b,
      onContentElementChange: (q) => b.value = q
    }), (q, le) => (h(), x(s(Mn), null, {
      default: y(() => [
        F(s(W), A({
          ref: s(C),
          style: {
            pointerEvents: s(c) ? "auto" : void 0
          },
          as: q.as,
          "as-child": q.asChild,
          dir: s(i)
        }, q.$attrs), {
          default: y(() => [
            _(q.$slots, "default", {
              open: s(c),
              modelValue: s(d)
            }),
            s(I) && n.name ? (h(), x(s(qp), {
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
}), Wp = /* @__PURE__ */ w({
  __name: "ComboboxInput",
  props: {
    type: { default: "text" },
    disabled: { type: Boolean },
    autoFocus: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(e) {
    const t = e, n = Fn(), { forwardRef: o, currentElement: a } = N();
    se(() => {
      const c = a.value.nodeName === "INPUT" ? a.value : a.value.querySelector("input");
      c && (n.onInputElementChange(c), setTimeout(() => {
        t.autoFocus && (c == null || c.focus());
      }, 1));
    });
    const r = S(() => t.disabled || n.disabled.value || !1), l = E();
    rl(() => {
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
    return (c, p) => (h(), x(s(W), {
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
        Ze(De(i, ["prevent"]), ["down", "up"]),
        Ze(s(n).onInputEnter, ["enter"]),
        Ze(De(u, ["prevent"]), ["home", "end"])
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
}), [ai, Up] = ve("ComboboxGroup"), Gp = /* @__PURE__ */ w({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { currentRef: n, currentElement: o } = N(), a = Le(void 0, "radix-vue-combobox-group"), r = Fn(), l = E(!1);
    function i() {
      if (!o.value)
        return;
      const u = o.value.querySelectorAll("[data-radix-vue-combobox-item]:not([data-hidden])");
      l.value = !!u.length;
    }
    return uc(o, () => {
      ae(() => {
        i();
      });
    }, { childList: !0 }), te(() => r.searchTerm.value, () => {
      ae(() => {
        i();
      });
    }, { immediate: !0 }), Up({
      id: a
    }), (u, d) => Dn((h(), x(s(W), A(t, {
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
      [Ja, l.value]
    ]);
  }
}), Yp = /* @__PURE__ */ w({
  __name: "ComboboxLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    N();
    const n = ai({ id: "" });
    return (o, a) => (h(), x(s(W), A(t, {
      id: s(n).id
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), [y_, Xp] = ve("ComboboxContent"), Zp = /* @__PURE__ */ w({
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
    const n = e, o = t, { position: a } = ye(n), r = Fn();
    lo(n.bodyLock);
    const { forwardRef: l, currentElement: i } = N();
    io(r.parentElement);
    const u = S(() => n.position === "popper" ? n : {}), d = ze(u.value);
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
    return Xp({ position: a }), (m, v) => (h(), x(s(Ar), null, {
      default: y(() => [
        m.dismissable ? (h(), x(s(In), {
          key: 0,
          "as-child": "",
          "disable-outside-pointer-events": m.disableOutsidePointerEvents,
          onDismiss: v[0] || (v[0] = (f) => s(r).onOpenChange(!1)),
          onFocusOutside: v[1] || (v[1] = (f) => {
            var g;
            (g = s(r).parentElement.value) != null && g.contains(f.target) && f.preventDefault(), o("focusOutside", f);
          }),
          onInteractOutside: v[2] || (v[2] = (f) => o("interactOutside", f)),
          onEscapeKeyDown: v[3] || (v[3] = (f) => o("escapeKeyDown", f)),
          onPointerDownOutside: v[4] || (v[4] = (f) => {
            var g;
            (g = s(r).parentElement.value) != null && g.contains(f.target) && f.preventDefault(), o("pointerDownOutside", f);
          })
        }, {
          default: y(() => [
            (h(), x(et(s(a) === "popper" ? s($n) : s(W)), A({ ...m.$attrs, ...s(d) }, {
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
        }, 8, ["disable-outside-pointer-events"])) : (h(), x(et(s(a) === "popper" ? s($n) : s(W)), A({ key: 1 }, { ...m.$attrs, ...u.value }, {
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
}), Qp = /* @__PURE__ */ w({
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
    const n = ie(e, t), { forwardRef: o } = N(), a = Fn();
    return a.contentId || (a.contentId = Le(void 0, "radix-vue-combobox-content")), (r, l) => (h(), x(s(st), {
      present: r.forceMount || s(a).open.value
    }, {
      default: y(() => [
        F(Zp, A({ ...s(n), ...r.$attrs }, { ref: s(o) }), {
          default: y(() => [
            _(r.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Jp = /* @__PURE__ */ w({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    N();
    const n = Fn(), o = S(() => n.filteredOptions.value.length === 0);
    return (a, r) => o.value ? (h(), x(s(W), Z(A({ key: 0 }, t)), {
      default: y(() => [
        _(a.$slots, "default", {}, () => [
          $e("No options")
        ])
      ]),
      _: 3
    }, 16)) : ge("", !0);
  }
});
function ef(e) {
  const t = Xo({
    nonce: E()
  });
  return S(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.nonce) == null ? void 0 : n.value);
  });
}
const [b_, tf] = ve("ComboboxItem"), nf = "combobox.select", of = /* @__PURE__ */ w({
  __name: "ComboboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = t, { disabled: a } = ye(n), r = Fn();
    ai({ id: "", options: E([]) });
    const { forwardRef: l } = N(), i = S(
      () => {
        var g, b;
        return r.multiple.value && Array.isArray(r.modelValue.value) ? (g = r.modelValue.value) == null ? void 0 : g.some((C) => Jt(C, n.value)) : Jt((b = r.modelValue) == null ? void 0 : b.value, n.value);
      }
    ), u = S(() => Jt(r.selectedValue.value, n.value)), d = Le(void 0, "radix-vue-combobox-item"), c = Le(void 0, "radix-vue-combobox-option"), p = S(() => r.isUserInputted.value ? r.searchTerm.value === "" || !!r.filteredOptions.value.find((g) => Jt(g, n.value)) : !0);
    async function m(g) {
      o("select", g), !(g != null && g.defaultPrevented) && !a.value && g && r.onValueChange(n.value);
    }
    function v(g) {
      if (!g)
        return;
      const b = { originalEvent: g, value: n.value };
      fr(nf, m, b);
    }
    async function f(g) {
      await ae(), !g.defaultPrevented && r.onSelectedValueChange(n.value);
    }
    if (n.value === "")
      throw new Error(
        "A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder."
      );
    return tf({
      isSelected: i
    }), (g, b) => (h(), x(s(na), { value: g.value }, {
      default: y(() => [
        Dn(F(s(W), {
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
          onClick: v,
          onPointermove: f
        }, {
          default: y(() => [
            _(g.$slots, "default", {}, () => [
              $e(Pe(g.value), 1)
            ])
          ]),
          _: 3
        }, 8, ["id", "aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "as", "as-child", "data-hidden"]), [
          [Ja, p.value]
        ])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), af = /* @__PURE__ */ w({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return N(), (n, o) => (h(), x(s(W), A(t, { "aria-hidden": "true" }), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ri = /* @__PURE__ */ w({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(uo), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function rf() {
  const e = E(!1);
  return se(() => {
    Sn("keydown", () => {
      e.value = !0;
    }, { capture: !0, passive: !0 }), Sn(["pointerdown", "pointermove"], () => {
      e.value = !1;
    }, { capture: !0, passive: !0 });
  }), e;
}
const sf = Nl(rf), [rn, si] = ve(["MenuRoot", "MenuSub"], "MenuContext"), [po, lf] = ve("MenuRoot"), uf = /* @__PURE__ */ w({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = t, { modal: a, dir: r } = ye(n), l = Gt(r), i = Ee(n, "open", o), u = E(), d = sf();
    return si({
      open: i,
      onOpenChange: (c) => {
        i.value = c;
      },
      content: u,
      onContentChange: (c) => {
        u.value = c;
      }
    }), lf({
      onClose: () => {
        i.value = !1;
      },
      isUsingKeyboardRef: d,
      dir: l,
      modal: a
    }), (c, p) => (h(), x(s(Mn), null, {
      default: y(() => [
        _(c.$slots, "default")
      ]),
      _: 3
    }));
  }
}), df = "rovingFocusGroup.onEntryFocus", cf = { bubbles: !1, cancelable: !0 }, pf = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function ff(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function mf(e, t, n) {
  const o = ff(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o)))
    return pf[o];
}
function li(e, t = !1) {
  const n = qe();
  for (const o of e)
    if (o === n || (o.focus({ preventScroll: t }), qe() !== n))
      return;
}
function vf(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
const [gf, hf] = ve("RovingFocusGroup"), ii = /* @__PURE__ */ w({
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
    const o = e, a = n, { loop: r, orientation: l, dir: i } = ye(o), u = Gt(i), d = Ee(o, "currentTabStopId", a, {
      defaultValue: o.defaultCurrentTabStopId,
      passive: o.currentTabStopId === void 0
    }), c = E(!1), p = E(!1), m = E(0), { getItems: v } = kr();
    function f(b) {
      const C = !p.value;
      if (b.currentTarget && b.target === b.currentTarget && C && !c.value) {
        const O = new CustomEvent(df, cf);
        if (b.currentTarget.dispatchEvent(O), a("entryFocus", O), !O.defaultPrevented) {
          const B = v().map((D) => D.ref).filter((D) => D.dataset.disabled !== ""), k = B.find((D) => D.getAttribute("data-active") === "true"), $ = B.find(
            (D) => D.id === d.value
          ), P = [k, $, ...B].filter(
            Boolean
          );
          li(P, o.preventScrollOnEntryFocus);
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
      getItems: v
    }), hf({
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
    }), (b, C) => (h(), x(s(Ar), null, {
      default: y(() => [
        F(s(W), {
          tabindex: c.value || m.value === 0 ? -1 : 0,
          "data-orientation": s(l),
          as: b.as,
          "as-child": b.asChild,
          dir: s(u),
          style: { outline: "none" },
          onMousedown: C[0] || (C[0] = (O) => p.value = !0),
          onMouseup: g,
          onFocus: f,
          onBlur: C[1] || (C[1] = (O) => c.value = !1)
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
}), yf = /* @__PURE__ */ w({
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
    const t = e, n = gf(), o = S(() => t.tabStopId || Le()), a = S(
      () => n.currentTabStopId.value === o.value
    ), { getItems: r } = Tr();
    se(() => {
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
      const u = mf(
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
          d = n.loop.value ? vf(d, c + 1) : d.slice(c + 1);
        }
        ae(() => li(d));
      }
    }
    return (i, u) => (h(), x(s(na), null, {
      default: y(() => [
        F(s(W), {
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
}), [Pr, bf] = ve("MenuContent"), Ir = /* @__PURE__ */ w({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ nr({
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
    ...oi
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = rn(), r = po(), { trapFocus: l, disableOutsidePointerEvents: i, loop: u } = ye(n);
    hr(), lo(i.value);
    const d = E(""), c = E(0), p = E(0), m = E(null), v = E("right"), f = E(0), g = E(null), { createCollection: b } = Tn(), { forwardRef: C, currentElement: O } = N(), B = b(O);
    te(O, (T) => {
      a.onContentChange(T);
    });
    const { handleTypeaheadSearch: k } = yr(B);
    Ke(() => {
      window.clearTimeout(c.value);
    });
    function $(T) {
      var L, I;
      return v.value === ((L = m.value) == null ? void 0 : L.side) && mp(T, (I = m.value) == null ? void 0 : I.area);
    }
    async function P(T) {
      var L;
      o("openAutoFocus", T), !T.defaultPrevented && (T.preventDefault(), (L = O.value) == null || L.focus({
        preventScroll: !0
      }));
    }
    function D(T) {
      if (T.defaultPrevented)
        return;
      const L = T.target.closest("[data-radix-menu-content]") === T.currentTarget, I = T.ctrlKey || T.altKey || T.metaKey, U = T.key.length === 1, K = Kl(
        T,
        qe(),
        O.value,
        {
          loop: u.value,
          arrowKeyOptions: "vertical",
          dir: r == null ? void 0 : r.dir.value,
          focus: !0,
          attributeName: "[data-radix-vue-collection-item]:not([data-disabled])"
        }
      );
      if (K)
        return K == null ? void 0 : K.focus();
      if (T.code === "Space" || (L && (T.key === "Tab" && T.preventDefault(), !I && U && k(T.key)), T.target !== O.value) || !dp.includes(T.key))
        return;
      T.preventDefault();
      const Y = B.value;
      Jl.includes(T.key) && Y.reverse(), Na(Y);
    }
    function M(T) {
      var L, I;
      (I = (L = T == null ? void 0 : T.currentTarget) == null ? void 0 : L.contains) != null && I.call(L, T.target) || (window.clearTimeout(c.value), d.value = "");
    }
    function R(T) {
      var L;
      if (!Zn(T))
        return;
      const I = T.target, U = f.value !== T.clientX;
      if ((L = T == null ? void 0 : T.currentTarget) != null && L.contains(I) && U) {
        const K = T.clientX > f.value ? "right" : "left";
        v.value = K, f.value = T.clientX;
      }
    }
    return bf({
      onItemEnter: (T) => !!$(T),
      onItemLeave: (T) => {
        var L;
        $(T) || ((L = O.value) == null || L.focus(), g.value = null);
      },
      onTriggerLeave: (T) => !!$(T),
      searchRef: d,
      pointerGraceTimerRef: p,
      onPointerGraceIntentChange: (T) => {
        m.value = T;
      }
    }), (T, L) => (h(), x(s(Jo), {
      "as-child": "",
      trapped: s(l),
      onMountAutoFocus: P,
      onUnmountAutoFocus: L[7] || (L[7] = (I) => o("closeAutoFocus", I))
    }, {
      default: y(() => [
        F(s(In), {
          "as-child": "",
          "disable-outside-pointer-events": s(i),
          onEscapeKeyDown: L[2] || (L[2] = (I) => o("escapeKeyDown", I)),
          onPointerDownOutside: L[3] || (L[3] = (I) => o("pointerDownOutside", I)),
          onFocusOutside: L[4] || (L[4] = (I) => o("focusOutside", I)),
          onInteractOutside: L[5] || (L[5] = (I) => o("interactOutside", I)),
          onDismiss: L[6] || (L[6] = (I) => o("dismiss"))
        }, {
          default: y(() => [
            F(s(ii), {
              "current-tab-stop-id": g.value,
              "onUpdate:currentTabStopId": L[0] || (L[0] = (I) => g.value = I),
              "as-child": "",
              orientation: "vertical",
              dir: s(r).dir.value,
              loop: s(u),
              onEntryFocus: L[1] || (L[1] = (I) => {
                o("entryFocus", I), s(r).isUsingKeyboardRef.value || I.preventDefault();
              })
            }, {
              default: y(() => [
                F(s($n), {
                  ref: s(C),
                  role: "menu",
                  as: T.as,
                  "as-child": T.asChild,
                  "aria-orientation": "vertical",
                  "data-radix-menu-content": "",
                  "data-state": s(Or)(s(a).open.value),
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
                  onKeydown: D,
                  onBlur: M,
                  onPointermove: R
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
}), ui = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Pr(), { forwardRef: o } = N(), a = E(!1);
    async function r(i) {
      if (!i.defaultPrevented && Zn(i)) {
        if (t.disabled)
          n.onItemLeave(i);
        else if (!n.onItemEnter(i)) {
          const u = i.currentTarget;
          u == null || u.focus({ preventScroll: !0 });
        }
      }
    }
    async function l(i) {
      await ae(), !i.defaultPrevented && Zn(i) && n.onItemLeave(i);
    }
    return (i, u) => (h(), x(s(na), {
      value: { textValue: i.textValue }
    }, {
      default: y(() => [
        F(s(W), A({
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
}), Mr = /* @__PURE__ */ w({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = t, { forwardRef: a, currentElement: r } = N(), l = po(), i = Pr(), u = E(!1);
    async function d() {
      const c = r.value;
      if (!n.disabled && c) {
        const p = new CustomEvent(ip, {
          bubbles: !0,
          cancelable: !0
        });
        o("select", p), await ae(), p.defaultPrevented ? u.value = !1 : l.onClose();
      }
    }
    return (c, p) => (h(), x(ui, A(n, {
      ref: s(a),
      onClick: d,
      onPointerdown: p[0] || (p[0] = () => {
        u.value = !0;
      }),
      onPointerup: p[1] || (p[1] = async (m) => {
        var v;
        await ae(), !m.defaultPrevented && (u.value || (v = m.currentTarget) == null || v.click());
      }),
      onKeydown: p[2] || (p[2] = async (m) => {
        const v = s(i).searchRef.value !== "";
        c.disabled || v && m.key === " " || s(Va).includes(m.key) && (m.currentTarget.click(), m.preventDefault());
      })
    }), {
      default: y(() => [
        _(c.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [wf, di] = ve(
  ["MenuCheckboxItem", "MenuRadioItem"],
  "MenuItemIndicatorContext"
), _f = /* @__PURE__ */ w({
  __name: "MenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = wf({
      checked: E(!1)
    });
    return (n, o) => (h(), x(s(st), {
      present: n.forceMount || s(Vo)(s(t).checked.value) || s(t).checked.value === !0
    }, {
      default: y(() => [
        F(s(W), {
          as: n.as,
          "as-child": n.asChild,
          "data-state": s(Sr)(s(t).checked.value)
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
}), xf = /* @__PURE__ */ w({
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
    const n = e, o = t, a = Ee(n, "checked", o);
    return di({ checked: a }), (r, l) => (h(), x(Mr, A({ role: "menuitemcheckbox" }, n, {
      "aria-checked": s(Vo)(s(a)) ? "mixed" : s(a),
      "data-state": s(Sr)(s(a)),
      onSelect: l[0] || (l[0] = async (i) => {
        o("select", i), s(Vo)(s(a)) ? a.value = !0 : a.value = !s(a);
      })
    }), {
      default: y(() => [
        _(r.$slots, "default", { checked: s(a) })
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), Cf = /* @__PURE__ */ w({
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
    const n = e, o = t, a = ie(n, o), r = rn(), { forwardRef: l, currentElement: i } = N();
    return io(i), (u, d) => (h(), x(Ir, A(s(a), {
      ref: s(l),
      "trap-focus": s(r).open.value,
      "disable-outside-pointer-events": s(r).open.value,
      "disable-outside-scroll": !0,
      onDismiss: d[0] || (d[0] = (c) => s(r).onOpenChange(!1)),
      onFocusOutside: d[1] || (d[1] = De((c) => o("focusOutside", c), ["prevent"]))
    }), {
      default: y(() => [
        _(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), Bf = /* @__PURE__ */ w({
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
    const n = ie(e, t), o = rn();
    return (a, r) => (h(), x(Ir, A(s(n), {
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
}), Of = /* @__PURE__ */ w({
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
    const n = ie(e, t), o = rn(), a = po();
    return (r, l) => (h(), x(s(st), {
      present: r.forceMount || s(o).open.value
    }, {
      default: y(() => [
        s(a).modal.value ? (h(), x(Cf, Z(A({ key: 0 }, { ...r.$attrs, ...s(n) })), {
          default: y(() => [
            _(r.$slots, "default")
          ]),
          _: 3
        }, 16)) : (h(), x(Bf, Z(A({ key: 1 }, { ...r.$attrs, ...s(n) })), {
          default: y(() => [
            _(r.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), ci = /* @__PURE__ */ w({
  __name: "MenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(W), A({ role: "group" }, t), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Sf = /* @__PURE__ */ w({
  __name: "MenuLabel",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(W), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $f = /* @__PURE__ */ w({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Pn), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Ef, Df] = ve("MenuRadioGroup"), kf = /* @__PURE__ */ w({
  __name: "MenuRadioGroup",
  props: {
    modelValue: { default: "" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = Ee(n, "modelValue", t);
    return Df({
      modelValue: o,
      onValueChange: (a) => {
        o.value = a;
      }
    }), (a, r) => (h(), x(ci, Z(ee(n)), {
      default: y(() => [
        _(a.$slots, "default", { modelValue: s(o) })
      ]),
      _: 3
    }, 16));
  }
}), Af = /* @__PURE__ */ w({
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
    const n = e, o = t, { value: a } = ye(n), r = Ef(), l = S(
      () => r.modelValue.value === (a == null ? void 0 : a.value)
    );
    return di({ checked: l }), (i, u) => (h(), x(Mr, A({ role: "menuitemradio" }, n, {
      "aria-checked": l.value,
      "data-state": s(Sr)(l.value),
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
}), Tf = /* @__PURE__ */ w({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(W), A(t, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [pi, Pf] = ve("MenuSub"), If = /* @__PURE__ */ w({
  __name: "MenuSub",
  props: {
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = Ee(n, "open", t, {
      defaultValue: !1,
      passive: n.open === void 0
    }), a = rn(), r = E(), l = E();
    return be((i) => {
      (a == null ? void 0 : a.open.value) === !1 && (o.value = !1), i(() => o.value = !1);
    }), si({
      open: o,
      onOpenChange: (i) => {
        o.value = i;
      },
      content: l,
      onContentChange: (i) => {
        l.value = i;
      }
    }), Pf({
      triggerId: "",
      contentId: "",
      trigger: r,
      onTriggerChange: (i) => {
        r.value = i;
      }
    }), (i, u) => (h(), x(s(Mn), null, {
      default: y(() => [
        _(i.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Mf = /* @__PURE__ */ w({
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
    const n = ie(e, t), o = rn(), a = po(), r = pi(), { forwardRef: l, currentElement: i } = N();
    return r.contentId || (r.contentId = Le(void 0, "radix-vue-menu-sub-content")), (u, d) => (h(), x(s(st), {
      present: u.forceMount || s(o).open.value
    }, {
      default: y(() => [
        F(Ir, A(s(n), {
          id: s(r).contentId,
          ref: s(l),
          "aria-labelledby": s(r).triggerId,
          align: "start",
          side: s(a).dir.value === "rtl" ? "left" : "right",
          "disable-outside-pointer-events": !1,
          "disable-outside-scroll": !1,
          "trap-focus": !1,
          onOpenAutoFocus: d[0] || (d[0] = De((c) => {
            var p;
            s(a).isUsingKeyboardRef.value && ((p = s(i)) == null || p.focus());
          }, ["prevent"])),
          onCloseAutoFocus: d[1] || (d[1] = De(() => {
          }, ["prevent"])),
          onFocusOutside: d[2] || (d[2] = (c) => {
            c.defaultPrevented || c.target !== s(r).trigger.value && s(o).onOpenChange(!1);
          }),
          onEscapeKeyDown: d[3] || (d[3] = (c) => {
            s(a).onClose(), c.preventDefault();
          }),
          onKeydown: d[4] || (d[4] = (c) => {
            var p, m;
            const v = (p = c.currentTarget) == null ? void 0 : p.contains(c.target), f = s(pp)[s(a).dir.value].includes(c.key);
            v && f && (s(o).onOpenChange(!1), (m = s(r).trigger.value) == null || m.focus(), c.preventDefault());
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
}), Ff = /* @__PURE__ */ w({
  __name: "MenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = rn(), o = po(), a = pi(), r = Pr(), l = E(null);
    a.triggerId || (a.triggerId = Le(void 0, "radix-vue-menu-sub-trigger"));
    function i() {
      l.value && window.clearTimeout(l.value), l.value = null;
    }
    Ke(() => {
      i();
    });
    function u(p) {
      !Zn(p) || r.onItemEnter(p) || !t.disabled && !n.open.value && !l.value && (r.onPointerGraceIntentChange(null), l.value = window.setTimeout(() => {
        n.onOpenChange(!0), i();
      }, 100));
    }
    async function d(p) {
      var m, v;
      if (!Zn(p))
        return;
      i();
      const f = (m = n.content.value) == null ? void 0 : m.getBoundingClientRect();
      if (f != null && f.width) {
        const g = (v = n.content.value) == null ? void 0 : v.dataset.side, b = g === "right", C = b ? -5 : 5, O = f[b ? "left" : "right"], B = f[b ? "right" : "left"];
        r.onPointerGraceIntentChange({
          area: [
            // Apply a bleed on clientX to ensure that our exit point is
            // consistently within polygon bounds
            { x: p.clientX + C, y: p.clientY },
            { x: O, y: f.top },
            { x: B, y: f.top },
            { x: B, y: f.bottom },
            { x: O, y: f.bottom }
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
      const v = r.searchRef.value !== "";
      t.disabled || v && p.key === " " || cp[o.dir.value].includes(p.key) && (n.onOpenChange(!0), await ae(), (m = n.content.value) == null || m.focus(), p.preventDefault());
    }
    return (p, m) => (h(), x(ri, { "as-child": "" }, {
      default: y(() => [
        F(ui, A(t, {
          id: s(a).triggerId,
          ref: (v) => {
            var f;
            (f = s(a)) == null || f.onTriggerChange(v == null ? void 0 : v.$el);
          },
          "aria-haspopup": "menu",
          "aria-expanded": s(n).open.value,
          "aria-controls": s(a).contentId,
          "data-state": s(Or)(s(n).open.value),
          onClick: m[0] || (m[0] = async (v) => {
            t.disabled || v.defaultPrevented || (v.currentTarget.focus(), s(n).open.value || s(n).onOpenChange(!0));
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
}), [fi, Rf] = ve("DropdownMenuRoot"), Lf = /* @__PURE__ */ w({
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
    const a = Ee(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), r = E(), { modal: l, dir: i } = ye(n), u = Gt(i);
    return Rf({
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
    }), (d, c) => (h(), x(s(uf), {
      open: s(a),
      "onUpdate:open": c[0] || (c[0] = (p) => at(a) ? a.value = p : null),
      dir: s(u),
      modal: s(l)
    }, {
      default: y(() => [
        _(d.$slots, "default", { open: s(a) })
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
}), Vf = /* @__PURE__ */ w({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = fi(), { forwardRef: o, currentElement: a } = N();
    return se(() => {
      n.triggerElement = a;
    }), n.triggerId || (n.triggerId = Le(void 0, "radix-vue-dropdown-menu-trigger")), (r, l) => (h(), x(s(ri), { "as-child": "" }, {
      default: y(() => [
        F(s(W), {
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
          onKeydown: l[1] || (l[1] = Ze(
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
}), Nf = /* @__PURE__ */ w({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s($f), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), qf = /* @__PURE__ */ w({
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
    const n = ie(e, t);
    N();
    const o = fi(), a = E(!1);
    function r(l) {
      l.defaultPrevented || (a.value || setTimeout(() => {
        var i;
        (i = o.triggerElement.value) == null || i.focus();
      }, 0), a.value = !1, l.preventDefault());
    }
    return o.contentId || (o.contentId = Le(void 0, "radix-vue-dropdown-menu-content")), (l, i) => {
      var u;
      return h(), x(s(Of), A(s(n), {
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
          const p = d.detail.originalEvent, m = p.button === 0 && p.ctrlKey === !0, v = p.button === 2 || m;
          (!s(o).modal.value || v) && (a.value = !0), (c = s(o).triggerElement.value) != null && c.contains(d.target) && d.preventDefault();
        })
      }), {
        default: y(() => [
          _(l.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby"]);
    };
  }
}), zf = /* @__PURE__ */ w({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = Yt(t);
    return N(), (a, r) => (h(), x(s(Mr), Z(ee({ ...n, ...s(o) })), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), jf = /* @__PURE__ */ w({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return N(), (n, o) => (h(), x(s(ci), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Kf = /* @__PURE__ */ w({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return N(), (n, o) => (h(), x(s(Tf), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hf = /* @__PURE__ */ w({
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
    const n = e, o = Yt(t);
    return N(), (a, r) => (h(), x(s(xf), Z(ee({ ...n, ...s(o) })), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), mi = /* @__PURE__ */ w({
  __name: "DropdownMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return N(), (n, o) => (h(), x(s(_f), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Wf = /* @__PURE__ */ w({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return N(), (n, o) => (h(), x(s(Sf), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Uf = /* @__PURE__ */ w({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = Yt(t);
    return N(), (a, r) => (h(), x(s(kf), Z(ee({ ...n, ...s(o) })), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Gf = /* @__PURE__ */ w({
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
    const n = ie(e, t);
    return N(), (o, a) => (h(), x(s(Af), Z(ee(s(n))), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Yf = /* @__PURE__ */ w({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = Ee(n, "open", t, {
      passive: n.open === void 0,
      defaultValue: n.defaultOpen ?? !1
    });
    return N(), (a, r) => (h(), x(s(If), {
      open: s(o),
      "onUpdate:open": r[0] || (r[0] = (l) => at(o) ? o.value = l : null)
    }, {
      default: y(() => [
        _(a.$slots, "default", { open: s(o) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), Xf = /* @__PURE__ */ w({
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
    const n = ie(e, t);
    return N(), (o, a) => (h(), x(s(Mf), A(s(n), { style: {
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
}), Zf = /* @__PURE__ */ w({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return N(), (n, o) => (h(), x(s(Ff), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Qf = /* @__PURE__ */ w({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(e) {
    const t = e;
    return N(), (n, o) => (h(), x(s(W), A(t, {
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
}), [Rn, Jf] = ve("PopoverRoot"), em = /* @__PURE__ */ w({
  __name: "PopoverRoot",
  props: {
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: !1 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = t, { modal: a } = ye(n), r = Ee(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), l = E(), i = E(!1);
    return Jf({
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
    }), (u, d) => (h(), x(s(Mn), null, {
      default: y(() => [
        _(u.$slots, "default", { open: s(r) })
      ]),
      _: 3
    }));
  }
}), tm = /* @__PURE__ */ w({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Rn(), { forwardRef: o, currentElement: a } = N();
    return se(() => {
      n.triggerElement.value = a.value;
    }), (r, l) => (h(), x(et(s(n).hasCustomAnchor.value ? s(W) : s(uo)), { "as-child": "" }, {
      default: y(() => [
        F(s(W), {
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
}), nm = /* @__PURE__ */ w({
  __name: "PopoverPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Pn), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vi = /* @__PURE__ */ w({
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
    const n = e, o = t, a = ze(n), { forwardRef: r } = N(), l = Rn();
    return hr(), (i, u) => (h(), x(s(Jo), {
      "as-child": "",
      loop: "",
      trapped: i.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => o("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => o("closeAutoFocus", d))
    }, {
      default: y(() => [
        F(s(In), {
          "as-child": "",
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          onPointerDownOutside: u[0] || (u[0] = (d) => o("pointerDownOutside", d)),
          onInteractOutside: u[1] || (u[1] = (d) => o("interactOutside", d)),
          onEscapeKeyDown: u[2] || (u[2] = (d) => o("escapeKeyDown", d)),
          onFocusOutside: u[3] || (u[3] = (d) => o("focusOutside", d)),
          onDismiss: u[4] || (u[4] = (d) => s(l).onOpenChange(!1))
        }, {
          default: y(() => [
            F(s($n), A(s(a), {
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
}), om = /* @__PURE__ */ w({
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
    const n = e, o = t, a = Rn(), r = E(!1);
    lo(!0);
    const l = ie(n, o), { forwardRef: i, currentElement: u } = N();
    return io(u), (d, c) => (h(), x(vi, A(s(l), {
      ref: s(i),
      "trap-focus": s(a).open.value,
      "disable-outside-pointer-events": "",
      onCloseAutoFocus: c[0] || (c[0] = De(
        (p) => {
          var m;
          o("closeAutoFocus", p), r.value || (m = s(a).triggerElement.value) == null || m.focus();
        },
        ["prevent"]
      )),
      onPointerDownOutside: c[1] || (c[1] = (p) => {
        o("pointerDownOutside", p);
        const m = p.detail.originalEvent, v = m.button === 0 && m.ctrlKey === !0, f = m.button === 2 || v;
        r.value = f;
      }),
      onFocusOutside: c[2] || (c[2] = De(() => {
      }, ["prevent"]))
    }), {
      default: y(() => [
        _(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), am = /* @__PURE__ */ w({
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
    const n = e, o = t, a = Rn(), r = E(!1), l = E(!1), i = ie(n, o);
    return (u, d) => (h(), x(vi, A(s(i), {
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
}), rm = /* @__PURE__ */ w({
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
    const n = e, o = t, a = Rn(), r = ie(n, o), { forwardRef: l } = N();
    return a.contentId || (a.contentId = Le(void 0, "radix-vue-popover-content")), (i, u) => (h(), x(s(st), {
      present: i.forceMount || s(a).open.value
    }, {
      default: y(() => [
        s(a).modal.value ? (h(), x(om, A({ key: 0 }, s(r), { ref: s(l) }), {
          default: y(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (h(), x(am, A({ key: 1 }, s(r), { ref: s(l) }), {
          default: y(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), w_ = /* @__PURE__ */ w({
  __name: "PopoverAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    N();
    const n = Rn();
    return sl(() => {
      n.hasCustomAnchor.value = !0;
    }), Ke(() => {
      n.hasCustomAnchor.value = !1;
    }), (o, a) => (h(), x(s(uo), Z(ee(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Qn = 100, [sm, lm] = ve("ProgressRoot"), Fr = (e) => typeof e == "number";
function im(e, t) {
  return _n(e) || Fr(e) && !Number.isNaN(e) && e <= t && e >= 0 ? e : (console.error(`Invalid prop \`value\` of value \`${e}\` supplied to \`ProgressRoot\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Qn} if no \`max\` prop is set)
  - \`null\`  or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`), null);
}
function um(e) {
  return Fr(e) && !Number.isNaN(e) && e > 0 ? e : (console.error(
    `Invalid prop \`max\` of value \`${e}\` supplied to \`ProgressRoot\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Qn}\`.`
  ), Qn);
}
const dm = /* @__PURE__ */ w({
  __name: "ProgressRoot",
  props: {
    modelValue: {},
    max: { default: Qn },
    getValueLabel: { type: Function, default: (e, t) => `${Math.round(e / t * Qn)}%` },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "update:max"],
  setup(e, { emit: t }) {
    const n = e, o = t;
    N();
    const a = Ee(n, "modelValue", o, {
      passive: n.modelValue === void 0
    }), r = Ee(n, "max", o, {
      passive: n.max === void 0
    });
    te(
      () => a.value,
      async (i) => {
        const u = im(i, n.max);
        u !== i && (await ae(), a.value = u);
      },
      { immediate: !0 }
    ), te(
      () => n.max,
      (i) => {
        const u = um(n.max);
        u !== i && (r.value = u);
      },
      { immediate: !0 }
    );
    const l = S(() => _n(a.value) ? "indeterminate" : a.value === r.value ? "complete" : "loading");
    return lm({
      modelValue: a,
      max: r,
      progressState: l
    }), (i, u) => (h(), x(s(W), {
      "as-child": i.asChild,
      as: i.as,
      "aria-valuemax": s(r),
      "aria-valuemin": 0,
      "aria-valuenow": Fr(s(a)) ? s(a) : void 0,
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
}), cm = /* @__PURE__ */ w({
  __name: "ProgressIndicator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = sm();
    return N(), (o, a) => {
      var r;
      return h(), x(s(W), A(t, {
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
}), pm = ["default-value"], fm = /* @__PURE__ */ w({
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
    const t = e, { value: n } = ye(t), o = E();
    return (a, r) => (h(), x(s(co), { "as-child": "" }, {
      default: y(() => [
        Dn(he("select", A({
          ref_key: "selectElement",
          ref: o
        }, t, {
          "onUpdate:modelValue": r[0] || (r[0] = (l) => at(n) ? n.value = l : null),
          "default-value": s(n)
        }), [
          _(a.$slots, "default")
        ], 16, pm), [
          [Au, s(n)]
        ])
      ]),
      _: 3
    }));
  }
}), mm = {
  key: 0,
  value: ""
}, [sn, gi] = ve("SelectRoot"), [vm, gm] = ve("SelectRoot"), hm = /* @__PURE__ */ w({
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
    const n = e, o = t, a = Ee(n, "modelValue", o, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), r = Ee(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), l = E(), i = E(), u = E({
      x: 0,
      y: 0
    }), d = E(!1), { required: c, disabled: p, dir: m } = ye(n), v = Gt(m);
    gi({
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
      dir: v,
      triggerPointerDownPosRef: u,
      disabled: p
    });
    const f = Zo(l), g = E(/* @__PURE__ */ new Set()), b = S(() => Array.from(g.value).map((C) => {
      var O;
      return (O = C.props) == null ? void 0 : O.value;
    }).join(";"));
    return gm({
      onNativeOptionAdd: (C) => {
        g.value.add(C);
      },
      onNativeOptionRemove: (C) => {
        g.value.delete(C);
      }
    }), (C, O) => (h(), x(s(Mn), null, {
      default: y(() => [
        _(C.$slots, "default", {
          modelValue: s(a),
          open: s(r)
        }),
        s(f) ? (h(), x(fm, A({ key: b.value }, C.$attrs, {
          "aria-hidden": "true",
          tabindex: "-1",
          required: s(c),
          name: C.name,
          autocomplete: C.autocomplete,
          disabled: s(p),
          value: s(a),
          onChange: O[0] || (O[0] = (B) => a.value = B.target.value)
        }), {
          default: y(() => [
            s(a) === void 0 ? (h(), z("option", mm)) : ge("", !0),
            (h(!0), z(Ae, null, jt(Array.from(g.value), (B) => (h(), x(et(B), A({ ref_for: !0 }, B.props, {
              key: B.key ?? ""
            }), null, 16))), 128))
          ]),
          _: 1
        }, 16, ["required", "name", "autocomplete", "disabled", "value"])) : ge("", !0)
      ]),
      _: 3
    }));
  }
}), ym = [" ", "Enter", "ArrowUp", "ArrowDown"], bm = [" ", "Enter"], ct = 10;
function hi(e) {
  return e === "" || _n(e);
}
const wm = /* @__PURE__ */ w({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = sn(), o = S(() => {
      var v;
      return ((v = n.disabled) == null ? void 0 : v.value) || t.disabled;
    }), { forwardRef: a, currentElement: r } = N();
    n.contentId || (n.contentId = Le(void 0, "radix-vue-select-content")), se(() => {
      n.triggerElement = r;
    });
    const { injectCollection: l } = Tn(), i = l(), { search: u, handleTypeaheadSearch: d, resetTypeahead: c } = yr(i);
    function p() {
      o.value || (n.onOpenChange(!0), c());
    }
    function m(v) {
      p(), n.triggerPointerDownPosRef.value = {
        x: Math.round(v.pageX),
        y: Math.round(v.pageY)
      };
    }
    return (v, f) => (h(), x(s(uo), { "as-child": "" }, {
      default: y(() => {
        var g, b, C, O;
        return [
          F(s(W), {
            ref: s(a),
            role: "combobox",
            type: v.as === "button" ? "button" : void 0,
            "aria-controls": s(n).contentId,
            "aria-expanded": s(n).open.value || !1,
            "aria-required": (g = s(n).required) == null ? void 0 : g.value,
            "aria-autocomplete": "none",
            disabled: o.value,
            dir: (b = s(n)) == null ? void 0 : b.dir.value,
            "data-state": (C = s(n)) != null && C.open.value ? "open" : "closed",
            "data-disabled": o.value ? "" : void 0,
            "data-placeholder": s(hi)((O = s(n).modelValue) == null ? void 0 : O.value) ? "" : void 0,
            "as-child": v.asChild,
            as: v.as,
            onClick: f[0] || (f[0] = (B) => {
              var k;
              (k = B == null ? void 0 : B.currentTarget) == null || k.focus();
            }),
            onPointerdown: f[1] || (f[1] = (B) => {
              if (B.pointerType === "touch")
                return B.preventDefault();
              const k = B.target;
              k.hasPointerCapture(B.pointerId) && k.releasePointerCapture(B.pointerId), B.button === 0 && B.ctrlKey === !1 && (m(B), B.preventDefault());
            }),
            onPointerup: f[2] || (f[2] = De(
              (B) => {
                B.pointerType === "touch" && m(B);
              },
              ["prevent"]
            )),
            onKeydown: f[3] || (f[3] = (B) => {
              const k = s(u) !== "";
              !(B.ctrlKey || B.altKey || B.metaKey) && B.key.length === 1 && k && B.key === " " || (s(d)(B.key), s(ym).includes(B.key) && (p(), B.preventDefault()));
            })
          }, {
            default: y(() => [
              _(v.$slots, "default")
            ]),
            _: 3
          }, 8, ["type", "aria-controls", "aria-expanded", "aria-required", "disabled", "dir", "data-state", "data-disabled", "data-placeholder", "as-child", "as"])
        ];
      }),
      _: 3
    }));
  }
}), _m = /* @__PURE__ */ w({
  __name: "SelectPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Pn), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Rr, xm] = ve("SelectItemAlignedPosition"), Cm = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, o = t, { injectCollection: a } = Tn(), r = sn(), l = ln(), i = a(), u = E(!1), d = E(!0), c = E(), { forwardRef: p, currentElement: m } = N(), { viewport: v, selectedItem: f, selectedItemText: g, focusSelectedItem: b } = l;
    function C() {
      if (r.triggerElement.value && r.valueElement.value && c.value && m.value && v != null && v.value && f != null && f.value && g != null && g.value) {
        const k = r.triggerElement.value.getBoundingClientRect(), $ = m.value.getBoundingClientRect(), P = r.valueElement.value.getBoundingClientRect(), D = g.value.getBoundingClientRect();
        if (r.dir.value !== "rtl") {
          const j = D.left - $.left, G = P.left - j, oe = k.left - G, de = k.width + oe, fe = Math.max(de, $.width), X = window.innerWidth - ct, me = Lo(G, ct, Math.max(ct, X - fe));
          c.value.style.minWidth = `${de}px`, c.value.style.left = `${me}px`;
        } else {
          const j = $.right - D.right, G = window.innerWidth - P.right - j, oe = window.innerWidth - k.right - G, de = k.width + oe, fe = Math.max(de, $.width), X = window.innerWidth - ct, me = Lo(
            G,
            ct,
            Math.max(ct, X - fe)
          );
          c.value.style.minWidth = `${de}px`, c.value.style.right = `${me}px`;
        }
        const M = i.value, R = window.innerHeight - ct * 2, T = v.value.scrollHeight, L = window.getComputedStyle(m.value), I = Number.parseInt(
          L.borderTopWidth,
          10
        ), U = Number.parseInt(L.paddingTop, 10), K = Number.parseInt(
          L.borderBottomWidth,
          10
        ), Y = Number.parseInt(
          L.paddingBottom,
          10
        ), H = I + U + T + Y + K, J = Math.min(
          f.value.offsetHeight * 5,
          H
        ), Q = window.getComputedStyle(v.value), q = Number.parseInt(Q.paddingTop, 10), le = Number.parseInt(
          Q.paddingBottom,
          10
        ), re = k.top + k.height / 2 - ct, ke = R - re, Me = f.value.offsetHeight / 2, Ve = f.value.offsetTop + Me, Ge = I + U + Ve, nt = H - Ge;
        if (Ge <= re) {
          const j = f.value === M[M.length - 1];
          c.value.style.bottom = "0px";
          const G = m.value.clientHeight - v.value.offsetTop - v.value.offsetHeight, oe = Math.max(
            ke,
            Me + (j ? le : 0) + G + K
          ), de = Ge + oe;
          c.value.style.height = `${de}px`;
        } else {
          const j = f.value === M[0];
          c.value.style.top = "0px";
          const G = Math.max(
            re,
            I + v.value.offsetTop + (j ? q : 0) + Me
          ) + nt;
          c.value.style.height = `${G}px`, v.value.scrollTop = Ge - re + v.value.offsetTop;
        }
        c.value.style.margin = `${ct}px 0`, c.value.style.minHeight = `${J}px`, c.value.style.maxHeight = `${R}px`, o("placed"), requestAnimationFrame(() => u.value = !0);
      }
    }
    const O = E("");
    se(async () => {
      await ae(), C(), m.value && (O.value = window.getComputedStyle(m.value).zIndex);
    });
    function B(k) {
      k && d.value === !0 && (C(), b == null || b(), d.value = !1);
    }
    return xm({
      contentWrapper: c,
      shouldExpandOnScrollRef: u,
      onScrollButtonChange: B
    }), (k, $) => (h(), z("div", {
      ref_key: "contentWrapperElement",
      ref: c,
      style: wt({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: O.value
      })
    }, [
      F(s(W), A({
        ref: s(p),
        style: {
          // When we get the height of the content, it includes borders. If we were to set
          // the height without having `boxSizing: 'border-box'` it would be too big.
          boxSizing: "border-box",
          // We need to ensure the content doesn't get taller than the wrapper
          maxHeight: "100%"
        }
      }, { ...k.$attrs, ...n }), {
        default: y(() => [
          _(k.$slots, "default")
        ]),
        _: 3
      }, 16)
    ], 4));
  }
}), Bm = /* @__PURE__ */ w({
  __name: "SelectPopperPosition",
  props: {
    side: {},
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: { default: ct },
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = ze(e);
    return (n, o) => (h(), x(s($n), A(s(t), { style: {
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
}), Ln = {
  onViewportChange: () => {
  },
  itemTextRefCallback: () => {
  },
  itemRefCallback: () => {
  }
}, [ln, Om] = ve("SelectContent"), Sm = /* @__PURE__ */ w({
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
    const n = e, o = t, a = sn();
    hr(), lo(n.bodyLock);
    const { createCollection: r } = Tn(), l = E();
    io(l);
    const i = r(l), { search: u, handleTypeaheadSearch: d } = yr(i), c = E(), p = E(), m = E(), v = E(!1), f = E(!1);
    function g() {
      p.value && l.value && Na([p.value, l.value]);
    }
    te(v, () => {
      g();
    });
    const { onOpenChange: b, triggerPointerDownPosRef: C } = a;
    be(($) => {
      if (!l.value)
        return;
      let P = { x: 0, y: 0 };
      const D = (R) => {
        var T, L;
        P = {
          x: Math.abs(
            Math.round(R.pageX) - (((T = C.value) == null ? void 0 : T.x) ?? 0)
          ),
          y: Math.abs(
            Math.round(R.pageY) - (((L = C.value) == null ? void 0 : L.y) ?? 0)
          )
        };
      }, M = (R) => {
        var T;
        R.pointerType !== "touch" && (P.x <= 10 && P.y <= 10 ? R.preventDefault() : (T = l.value) != null && T.contains(R.target) || b(!1), document.removeEventListener("pointermove", D), C.value = null);
      };
      C.value !== null && (document.addEventListener("pointermove", D), document.addEventListener("pointerup", M, {
        capture: !0,
        once: !0
      })), $(() => {
        document.removeEventListener("pointermove", D), document.removeEventListener("pointerup", M, {
          capture: !0
        });
      });
    });
    function O($) {
      const P = $.ctrlKey || $.altKey || $.metaKey;
      if ($.key === "Tab" && $.preventDefault(), !P && $.key.length === 1 && d($.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes($.key)) {
        let D = i.value;
        if (["ArrowUp", "End"].includes($.key) && (D = D.slice().reverse()), ["ArrowUp", "ArrowDown"].includes($.key)) {
          const M = $.target, R = D.indexOf(M);
          D = D.slice(R + 1);
        }
        setTimeout(() => Na(D)), $.preventDefault();
      }
    }
    const B = S(() => n.position === "popper" ? n : {}), k = ze(B.value);
    return Om({
      content: l,
      viewport: c,
      onViewportChange: ($) => {
        c.value = $;
      },
      itemRefCallback: ($, P, D) => {
        var M, R;
        const T = !f.value && !D;
        (((M = a.modelValue) == null ? void 0 : M.value) !== void 0 && ((R = a.modelValue) == null ? void 0 : R.value) === P || T) && (p.value = $, T && (f.value = !0));
      },
      selectedItem: p,
      selectedItemText: m,
      onItemLeave: () => {
        var $;
        ($ = l.value) == null || $.focus();
      },
      itemTextRefCallback: ($, P, D) => {
        var M, R;
        const T = !f.value && !D;
        (((M = a.modelValue) == null ? void 0 : M.value) !== void 0 && ((R = a.modelValue) == null ? void 0 : R.value) === P || T) && (m.value = $);
      },
      focusSelectedItem: g,
      position: n.position,
      isPositioned: v,
      searchRef: u
    }), ($, P) => (h(), x(s(Jo), {
      "as-child": "",
      onMountAutoFocus: P[6] || (P[6] = De(() => {
      }, ["prevent"])),
      onUnmountAutoFocus: P[7] || (P[7] = (D) => {
        var M;
        o("closeAutoFocus", D), !D.defaultPrevented && ((M = s(a).triggerElement.value) == null || M.focus({ preventScroll: !0 }), D.preventDefault());
      })
    }, {
      default: y(() => [
        F(s(In), {
          "as-child": "",
          "disable-outside-pointer-events": "",
          onFocusOutside: P[2] || (P[2] = De(() => {
          }, ["prevent"])),
          onDismiss: P[3] || (P[3] = (D) => s(a).onOpenChange(!1)),
          onEscapeKeyDown: P[4] || (P[4] = (D) => o("escapeKeyDown", D)),
          onPointerDownOutside: P[5] || (P[5] = (D) => o("pointerDownOutside", D))
        }, {
          default: y(() => [
            (h(), x(et(
              $.position === "popper" ? Bm : Cm
            ), A({ ...$.$attrs, ...s(k) }, {
              id: s(a).contentId,
              ref: (D) => {
                l.value = s(rt)(D);
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
              onContextmenu: P[0] || (P[0] = De(() => {
              }, ["prevent"])),
              onPlaced: P[1] || (P[1] = (D) => v.value = !0),
              onKeydown: O
            }), {
              default: y(() => [
                _($.$slots, "default")
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
}), $m = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "SelectProvider",
  props: {
    context: {}
  },
  setup(e) {
    return gi(e.context), (t, n) => _(t.$slots, "default");
  }
}), Em = { key: 1 }, Dm = /* @__PURE__ */ w({
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
    const n = e, o = ie(n, t), a = sn(), r = E();
    se(() => {
      r.value = new DocumentFragment();
    });
    const l = E(), i = S(() => n.forceMount || a.open.value);
    return (u, d) => {
      var c;
      return i.value ? (h(), x(s(st), {
        key: 0,
        ref_key: "presenceRef",
        ref: l,
        present: !0
      }, {
        default: y(() => [
          F(Sm, Z(ee({ ...s(o), ...u.$attrs })), {
            default: y(() => [
              _(u.$slots, "default")
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 512)) : !((c = l.value) != null && c.present) && r.value ? (h(), z("div", Em, [
        (h(), x(no, { to: r.value }, [
          F($m, { context: s(a) }, {
            default: y(() => [
              _(u.$slots, "default")
            ]),
            _: 3
          }, 8, ["context"])
        ], 8, ["to"]))
      ])) : ge("", !0);
    };
  }
}), km = /* @__PURE__ */ w({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(W), A({ "aria-hidden": "true" }, t), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [yi, Am] = ve("SelectItem"), Tm = /* @__PURE__ */ w({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { disabled: n } = ye(t), o = sn(), a = ln(Ln), { forwardRef: r, currentElement: l } = N(), i = S(() => {
      var g;
      return ((g = o.modelValue) == null ? void 0 : g.value) === t.value;
    }), u = E(!1), d = E(t.textValue ?? ""), c = Le(void 0, "radix-vue-select-item-text");
    async function p(g) {
      await ae(), !(g != null && g.defaultPrevented) && (n.value || (o.onValueChange(t.value), o.onOpenChange(!1)));
    }
    async function m(g) {
      var b;
      await ae(), !g.defaultPrevented && (n.value ? (b = a.onItemLeave) == null || b.call(a) : g.currentTarget.focus({ preventScroll: !0 }));
    }
    async function v(g) {
      var b;
      await ae(), !g.defaultPrevented && g.currentTarget === qe() && ((b = a.onItemLeave) == null || b.call(a));
    }
    async function f(g) {
      var b;
      await ae(), !(g.defaultPrevented || ((b = a.searchRef) == null ? void 0 : b.value) !== "" && g.key === " ") && (bm.includes(g.key) && p(), g.key === " " && g.preventDefault());
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
    }), Am({
      value: t.value,
      disabled: n,
      textId: c,
      isSelected: i,
      onItemTextChange: (g) => {
        d.value = ((d.value || (g == null ? void 0 : g.textContent)) ?? "").trim();
      }
    }), (g, b) => (h(), x(s(W), {
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
      onFocus: b[0] || (b[0] = (C) => u.value = !0),
      onBlur: b[1] || (b[1] = (C) => u.value = !1),
      onPointerup: p,
      onPointerdown: b[2] || (b[2] = (C) => {
        C.currentTarget.focus({ preventScroll: !0 });
      }),
      onTouchend: b[3] || (b[3] = De(() => {
      }, ["prevent", "stop"])),
      onPointermove: m,
      onPointerleave: v,
      onKeydown: f
    }, {
      default: y(() => [
        _(g.$slots, "default")
      ]),
      _: 3
    }, 8, ["aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "tabindex", "as", "as-child"]));
  }
}), Pm = /* @__PURE__ */ w({
  __name: "SelectItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = yi();
    return (o, a) => s(n).isSelected.value ? (h(), x(s(W), A({
      key: 0,
      "aria-hidden": "true"
    }, t), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16)) : ge("", !0);
  }
}), [Im, Mm] = ve("SelectGroup"), Fm = /* @__PURE__ */ w({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Le(void 0, "radix-vue-select-group");
    return Mm({ id: n }), (o, a) => (h(), x(s(W), A({ role: "group" }, t, { "aria-labelledby": s(n) }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), Rm = /* @__PURE__ */ w({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, n = Im({ id: "" });
    return (o, a) => (h(), x(s(W), A(t, {
      id: s(n).id
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), bi = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = sn(), o = ln(Ln), a = vm(), r = yi(), { forwardRef: l, currentElement: i } = N(), u = S(() => {
      var d;
      return Ue("option", {
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
    }), kn(() => {
      a.onNativeOptionRemove(u.value);
    }), (d, c) => (h(), z(Ae, null, [
      F(s(W), A({
        id: s(r).textId,
        ref: s(l)
      }, { ...t, ...d.$attrs }, { "data-item-text": "" }), {
        default: y(() => [
          _(d.$slots, "default")
        ]),
        _: 3
      }, 16, ["id"]),
      s(r).isSelected.value && s(n).valueElement.value && !s(n).valueElementHasChildren.value ? (h(), x(no, {
        key: 0,
        to: s(n).valueElement.value
      }, [
        _(d.$slots, "default")
      ], 8, ["to"])) : ge("", !0)
    ], 64));
  }
}), Lm = /* @__PURE__ */ w({
  __name: "SelectViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { nonce: n } = ye(t), o = ef(n), a = ln(Ln), r = a.position === "item-aligned" ? Rr() : void 0, { forwardRef: l, currentElement: i } = N();
    se(() => {
      a == null || a.onViewportChange(i.value);
    });
    const u = E(0);
    function d(c) {
      const p = c.currentTarget, { shouldExpandOnScrollRef: m, contentWrapper: v } = r ?? {};
      if (m != null && m.value && v != null && v.value) {
        const f = Math.abs(u.value - p.scrollTop);
        if (f > 0) {
          const g = window.innerHeight - ct * 2, b = Number.parseFloat(
            v.value.style.minHeight
          ), C = Number.parseFloat(v.value.style.height), O = Math.max(b, C);
          if (O < g) {
            const B = O + f, k = Math.min(g, B), $ = B - k;
            v.value.style.height = `${k}px`, v.value.style.bottom === "0px" && (p.scrollTop = $ > 0 ? $ : 0, v.value.style.justifyContent = "flex-end");
          }
        }
      }
      u.value = p.scrollTop;
    }
    return (c, p) => (h(), z(Ae, null, [
      F(s(W), A({
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
      F(s(W), {
        as: "style",
        nonce: s(o)
      }, {
        default: y(() => [
          $e(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-radix-select-viewport]::-webkit-scrollbar { display: none; } ")
        ]),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
}), wi = /* @__PURE__ */ w({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(e, { emit: t }) {
    const n = t, { injectCollection: o } = Tn(), a = o(), r = ln(Ln), l = E(null);
    function i() {
      l.value !== null && (window.clearInterval(l.value), l.value = null);
    }
    be(() => {
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
    return kn(() => i()), (c, p) => {
      var m;
      return h(), x(s(W), A({
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
}), Vm = /* @__PURE__ */ w({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = ln(Ln), n = t.position === "item-aligned" ? Rr() : void 0, { forwardRef: o, currentElement: a } = N(), r = E(!1);
    return be((l) => {
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
    }), (l, i) => r.value ? (h(), x(wi, {
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
    }, 512)) : ge("", !0);
  }
}), Nm = /* @__PURE__ */ w({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = ln(Ln), n = t.position === "item-aligned" ? Rr() : void 0, { forwardRef: o, currentElement: a } = N(), r = E(!1);
    return be((l) => {
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
    }), (l, i) => r.value ? (h(), x(wi, {
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
    }, 512)) : ge("", !0);
  }
}), qm = /* @__PURE__ */ w({
  __name: "SelectValue",
  props: {
    placeholder: { default: "" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const { forwardRef: t, currentElement: n } = N(), o = sn(), a = er();
    return sl(() => {
      var r;
      const l = !!Yo((r = a == null ? void 0 : a.default) == null ? void 0 : r.call(a)).length;
      o.onValueElementHasChildrenChange(l);
    }), se(() => {
      o.valueElement = n;
    }), (r, l) => (h(), x(s(W), {
      ref: s(t),
      as: r.as,
      "as-child": r.asChild,
      style: { pointerEvents: "none" }
    }, {
      default: y(() => {
        var i;
        return [
          s(hi)((i = s(o).modelValue) == null ? void 0 : i.value) ? (h(), z(Ae, { key: 0 }, [
            $e(Pe(r.placeholder), 1)
          ], 64)) : _(r.$slots, "default", { key: 1 })
        ];
      }),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), zm = /* @__PURE__ */ w({
  __name: "SelectIcon",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return (t, n) => (h(), x(s(W), {
      "aria-hidden": "true",
      as: t.as,
      "as-child": t.asChild
    }, {
      default: y(() => [
        _(t.$slots, "default", {}, () => [
          $e("▼")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function jm(e = [], t, n) {
  const o = [...e];
  return o[n] = t, o.sort((a, r) => a - r);
}
function _i(e, t, n) {
  const o = 100 / (n - t) * (e - t);
  return Lo(o, 0, 100);
}
function Km(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
function Hm(e, t) {
  if (e.length === 1)
    return 0;
  const n = e.map((a) => Math.abs(a - t)), o = Math.min(...n);
  return n.indexOf(o);
}
function Wm(e, t, n) {
  const o = e / 2, a = Lr([0, 50], [0, o]);
  return (o - a(t) * n) * n;
}
function Um(e) {
  return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
function Gm(e, t) {
  if (t > 0) {
    const n = Um(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function Lr(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const o = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + o * (n - e[0]);
  };
}
function Ym(e) {
  return (String(e).split(".")[1] || "").length;
}
function Xm(e, t) {
  const n = 10 ** t;
  return Math.round(e * n) / n;
}
const xi = ["PageUp", "PageDown"], Ci = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Bi = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, [Oi, Si] = ve(["SliderVertical", "SliderHorizontal"]), $i = /* @__PURE__ */ w({
  __name: "SliderImpl",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  emits: ["slideStart", "slideMove", "slideEnd", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = oa();
    return (r, l) => (h(), x(s(W), A({ "data-slider-impl": "" }, n, {
      onKeydown: l[0] || (l[0] = (i) => {
        i.key === "Home" ? (o("homeKeyDown", i), i.preventDefault()) : i.key === "End" ? (o("endKeyDown", i), i.preventDefault()) : s(xi).concat(s(Ci)).includes(i.key) && (o("stepKeyDown", i), i.preventDefault());
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
}), Zm = /* @__PURE__ */ w({
  __name: "SliderHorizontal",
  props: {
    dir: {},
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const n = e, o = t, { max: a, min: r, dir: l, inverted: i } = ye(n), { forwardRef: u, currentElement: d } = N(), c = E(), p = S(() => (l == null ? void 0 : l.value) === "ltr" && !i.value || (l == null ? void 0 : l.value) !== "ltr" && i.value);
    function m(v) {
      const f = c.value || d.value.getBoundingClientRect(), g = [0, f.width], b = p.value ? [r.value, a.value] : [a.value, r.value], C = Lr(g, b);
      return c.value = f, C(v - f.left);
    }
    return Si({
      startEdge: p.value ? "left" : "right",
      endEdge: p.value ? "right" : "left",
      direction: p.value ? 1 : -1,
      size: "width"
    }), (v, f) => (h(), x($i, {
      ref: s(u),
      dir: s(l),
      "data-orientation": "horizontal",
      style: {
        "--radix-slider-thumb-transform": "translateX(-50%)"
      },
      onSlideStart: f[0] || (f[0] = (g) => {
        const b = m(g.clientX);
        o("slideStart", b);
      }),
      onSlideMove: f[1] || (f[1] = (g) => {
        const b = m(g.clientX);
        o("slideMove", b);
      }),
      onSlideEnd: f[2] || (f[2] = () => {
        c.value = void 0, o("slideEnd");
      }),
      onStepKeyDown: f[3] || (f[3] = (g) => {
        const b = p.value ? "from-left" : "from-right", C = s(Bi)[b].includes(g.key);
        o("stepKeyDown", g, C ? -1 : 1);
      }),
      onEndKeyDown: f[4] || (f[4] = (g) => o("endKeyDown", g)),
      onHomeKeyDown: f[5] || (f[5] = (g) => o("homeKeyDown", g))
    }, {
      default: y(() => [
        _(v.$slots, "default")
      ]),
      _: 3
    }, 8, ["dir"]));
  }
}), Qm = /* @__PURE__ */ w({
  __name: "SliderVertical",
  props: {
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const n = e, o = t, { max: a, min: r, inverted: l } = ye(n), { forwardRef: i, currentElement: u } = N(), d = E(), c = S(() => !l.value);
    function p(m) {
      const v = d.value || u.value.getBoundingClientRect(), f = [0, v.height], g = c.value ? [a.value, r.value] : [r.value, a.value], b = Lr(f, g);
      return d.value = v, b(m - v.top);
    }
    return Si({
      startEdge: c.value ? "bottom" : "top",
      endEdge: c.value ? "top" : "bottom",
      size: "height",
      direction: c.value ? 1 : -1
    }), (m, v) => (h(), x($i, {
      ref: s(i),
      "data-orientation": "vertical",
      style: {
        "--radix-slider-thumb-transform": "translateY(50%)"
      },
      onSlideStart: v[0] || (v[0] = (f) => {
        const g = p(f.clientY);
        o("slideStart", g);
      }),
      onSlideMove: v[1] || (v[1] = (f) => {
        const g = p(f.clientY);
        o("slideMove", g);
      }),
      onSlideEnd: v[2] || (v[2] = () => {
        d.value = void 0, o("slideEnd");
      }),
      onStepKeyDown: v[3] || (v[3] = (f) => {
        const g = c.value ? "from-bottom" : "from-top", b = s(Bi)[g].includes(f.key);
        o("stepKeyDown", f, b ? -1 : 1);
      }),
      onEndKeyDown: v[4] || (v[4] = (f) => o("endKeyDown", f)),
      onHomeKeyDown: v[5] || (v[5] = (f) => o("homeKeyDown", f))
    }, {
      default: y(() => [
        _(m.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
}), Jm = ["value", "name", "disabled", "step"], [oa, ev] = ve("SliderRoot"), tv = /* @__PURE__ */ w({
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
    const n = e, o = t, { min: a, max: r, step: l, minStepsBetweenThumbs: i, orientation: u, disabled: d, dir: c } = ye(n), p = Gt(c), { forwardRef: m, currentElement: v } = N(), f = Zo(v);
    kr();
    const g = Ee(n, "modelValue", o, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), b = E(0), C = E(g.value);
    function O(D) {
      const M = Hm(g.value, D);
      $(D, M);
    }
    function B(D) {
      $(D, b.value);
    }
    function k() {
      const D = C.value[b.value];
      g.value[b.value] !== D && o("valueCommit", Tu(g.value));
    }
    function $(D, M, { commit: R } = { commit: !1 }) {
      var T;
      const L = Ym(l.value), I = Xm(Math.round((D - a.value) / l.value) * l.value + a.value, L), U = Lo(I, a.value, r.value), K = jm(g.value, U, M);
      if (Gm(K, i.value * l.value)) {
        b.value = K.indexOf(U);
        const Y = String(K) !== String(g.value);
        Y && R && o("valueCommit", K), Y && ((T = P.value[b.value]) == null || T.focus(), g.value = K);
      }
    }
    const P = E([]);
    return ev({
      modelValue: g,
      valueIndexToChangeRef: b,
      thumbElements: P,
      orientation: u,
      min: a,
      max: r,
      disabled: d
    }), (D, M) => (h(), z(Ae, null, [
      F(s(Ar), null, {
        default: y(() => [
          (h(), x(et(s(u) === "horizontal" ? Zm : Qm), A(D.$attrs, {
            ref: s(m),
            "as-child": D.asChild,
            as: D.as,
            min: s(a),
            max: s(r),
            dir: s(p),
            inverted: D.inverted,
            "aria-disabled": s(d),
            "data-disabled": s(d) ? "" : void 0,
            onPointerdown: M[0] || (M[0] = () => {
              s(d) || (C.value = s(g));
            }),
            onSlideStart: M[1] || (M[1] = (R) => !s(d) && O(R)),
            onSlideMove: M[2] || (M[2] = (R) => !s(d) && B(R)),
            onSlideEnd: M[3] || (M[3] = (R) => !s(d) && k()),
            onHomeKeyDown: M[4] || (M[4] = (R) => !s(d) && $(s(a), 0, { commit: !0 })),
            onEndKeyDown: M[5] || (M[5] = (R) => !s(d) && $(s(r), s(g).length - 1, { commit: !0 })),
            onStepKeyDown: M[6] || (M[6] = (R, T) => {
              if (!s(d)) {
                const L = s(xi).includes(R.key) || R.shiftKey && s(Ci).includes(R.key) ? 10 : 1, I = b.value, U = s(g)[I], K = s(l) * L * T;
                $(U + K, I, { commit: !0 });
              }
            })
          }), {
            default: y(() => [
              _(D.$slots, "default", { modelValue: s(g) })
            ]),
            _: 3
          }, 16, ["as-child", "as", "min", "max", "dir", "inverted", "aria-disabled", "data-disabled"]))
        ]),
        _: 3
      }),
      s(f) ? (h(!0), z(Ae, { key: 0 }, jt(s(g), (R, T) => (h(), z("input", {
        key: T,
        value: R,
        type: "number",
        style: { display: "none" },
        name: D.name ? D.name + (s(g).length > 1 ? "[]" : "") : void 0,
        disabled: s(d),
        step: s(l)
      }, null, 8, Jm))), 128)) : ge("", !0)
    ], 64));
  }
}), nv = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "SliderThumbImpl",
  props: {
    index: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = oa(), o = Oi(), { forwardRef: a, currentElement: r } = N(), l = S(() => {
      var v, f;
      return (f = (v = n.modelValue) == null ? void 0 : v.value) == null ? void 0 : f[t.index];
    }), i = S(() => l.value === void 0 ? 0 : _i(l.value, n.min.value ?? 0, n.max.value ?? 100)), u = S(() => {
      var v, f;
      return Km(t.index, ((f = (v = n.modelValue) == null ? void 0 : v.value) == null ? void 0 : f.length) ?? 0);
    }), d = Gl(r), c = S(() => d[o.size].value), p = S(() => c.value ? Wm(c.value, i.value, o.direction) : 0), m = gr();
    return se(() => {
      n.thumbElements.value.push(r.value);
    }), Ke(() => {
      const v = n.thumbElements.value.findIndex((f) => f === r.value) ?? -1;
      n.thumbElements.value.splice(v, 1);
    }), (v, f) => (h(), x(s(na), null, {
      default: y(() => [
        F(s(W), A(v.$attrs, {
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
            [s(o).startEdge]: `calc(${i.value}% + ${p.value}px)`,
            /**
             * There will be no value on initial render while we work out the index so we hide thumbs
             * without a value, otherwise SSR will render them in the wrong position before they
             * snap into the correct position during hydration which would be visually jarring for
             * slower connections.
             */
            display: !s(m) && l.value === void 0 ? "none" : void 0
          },
          onFocus: f[0] || (f[0] = () => {
            s(n).valueIndexToChangeRef.value = v.index;
          })
        }), {
          default: y(() => [
            _(v.$slots, "default")
          ]),
          _: 3
        }, 16, ["tabindex", "aria-label", "data-disabled", "data-orientation", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-orientation", "as-child", "as", "style"])
      ]),
      _: 3
    }));
  }
}), ov = /* @__PURE__ */ w({
  __name: "SliderThumb",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { getItems: n } = Tr(), { forwardRef: o, currentElement: a } = N(), r = S(() => a.value ? n().findIndex((l) => l.ref === a.value) : -1);
    return (l, i) => (h(), x(nv, A({ ref: s(o) }, t, { index: r.value }), {
      default: y(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["index"]));
  }
}), av = /* @__PURE__ */ w({
  __name: "SliderTrack",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = oa();
    return N(), (n, o) => (h(), x(s(W), {
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
}), rv = /* @__PURE__ */ w({
  __name: "SliderRange",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = oa(), n = Oi();
    N();
    const o = S(() => {
      var l, i;
      return (i = (l = t.modelValue) == null ? void 0 : l.value) == null ? void 0 : i.map(
        (u) => _i(u, t.min.value, t.max.value)
      );
    }), a = S(() => t.modelValue.value.length > 1 ? Math.min(...o.value) : 0), r = S(() => 100 - Math.max(...o.value));
    return (l, i) => (h(), x(s(W), {
      "data-disabled": s(t).disabled.value ? "" : void 0,
      "data-orientation": s(t).orientation.value,
      "as-child": l.asChild,
      as: l.as,
      style: wt({
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
function sv() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
sv();
const lv = ["name", "disabled", "required", "value", "checked", "data-state", "data-disabled"], [iv, uv] = ve("SwitchRoot"), dv = /* @__PURE__ */ w({
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
    const n = e, o = t, { disabled: a } = ye(n), r = Ee(n, "checked", o, {
      defaultValue: n.defaultChecked,
      passive: n.checked === void 0
    });
    function l() {
      a.value || (r.value = !r.value);
    }
    const { forwardRef: i, currentElement: u } = N(), d = Zo(u), c = S(() => {
      var p;
      return n.id && u.value ? (p = document.querySelector(`[for="${n.id}"]`)) == null ? void 0 : p.innerText : void 0;
    });
    return uv({
      checked: r,
      toggleCheck: l,
      disabled: a
    }), (p, m) => (h(), z(Ae, null, [
      F(s(W), A(p.$attrs, {
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
        onKeydown: Ze(De(l, ["prevent"]), ["enter"])
      }), {
        default: y(() => [
          _(p.$slots, "default", { checked: s(r) })
        ]),
        _: 3
      }, 16, ["id", "type", "value", "aria-label", "aria-checked", "aria-required", "data-state", "data-disabled", "as-child", "as", "disabled", "onKeydown"]),
      s(d) ? (h(), z("input", {
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
      }, null, 8, lv)) : ge("", !0)
    ], 64));
  }
}), cv = /* @__PURE__ */ w({
  __name: "SwitchThumb",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = iv();
    return N(), (n, o) => {
      var a;
      return h(), x(s(W), {
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
}), [Vr, pv] = ve("TabsRoot"), fv = /* @__PURE__ */ w({
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
    const n = e, o = t, { orientation: a, dir: r } = ye(n), l = Gt(r);
    N();
    const i = Ee(n, "modelValue", o, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), u = E();
    return pv({
      modelValue: i,
      changeModelValue: (d) => {
        i.value = d;
      },
      orientation: a,
      dir: l,
      activationMode: n.activationMode,
      baseId: Le(void 0, "radix-vue-tabs"),
      tabsList: u
    }), (d, c) => (h(), x(s(W), {
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
}), mv = /* @__PURE__ */ w({
  __name: "TabsList",
  props: {
    loop: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { loop: n } = ye(t), { forwardRef: o, currentElement: a } = N(), r = Vr();
    return r.tabsList = a, (l, i) => (h(), x(s(ii), {
      "as-child": "",
      orientation: s(r).orientation.value,
      dir: s(r).dir.value,
      loop: s(n)
    }, {
      default: y(() => [
        F(s(W), {
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
function Ei(e, t) {
  return `${e}-trigger-${t}`;
}
function Di(e, t) {
  return `${e}-content-${t}`;
}
const vv = /* @__PURE__ */ w({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n } = N(), o = Vr(), a = S(() => Ei(o.baseId, t.value)), r = S(() => Di(o.baseId, t.value)), l = S(() => t.value === o.modelValue.value), i = E(l.value);
    return se(() => {
      requestAnimationFrame(() => {
        i.value = !1;
      });
    }), (u, d) => (h(), x(s(st), {
      present: l.value,
      "force-mount": ""
    }, {
      default: y(({ present: c }) => [
        F(s(W), {
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
          style: wt({
            animationDuration: i.value ? "0s" : void 0
          })
        }, {
          default: y(() => [
            u.forceMount || l.value ? _(u.$slots, "default", { key: 0 }) : ge("", !0)
          ]),
          _: 2
        }, 1032, ["id", "as-child", "as", "data-state", "data-orientation", "aria-labelledby", "hidden", "style"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), gv = /* @__PURE__ */ w({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, { forwardRef: n } = N(), o = Vr(), a = S(() => Ei(o.baseId, t.value)), r = S(() => Di(o.baseId, t.value)), l = S(() => t.value === o.modelValue.value);
    return (i, u) => (h(), x(s(yf), {
      "as-child": "",
      focusable: !i.disabled,
      active: l.value
    }, {
      default: y(() => [
        F(s(W), {
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
          onMousedown: u[0] || (u[0] = De((d) => {
            !i.disabled && d.ctrlKey === !1 ? s(o).changeModelValue(i.value) : d.preventDefault();
          }, ["left"])),
          onKeydown: u[1] || (u[1] = Ze((d) => s(o).changeModelValue(i.value), ["enter", "space"])),
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
}), [aa, hv] = ve("ToastProvider"), yv = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "ToastProvider",
  props: {
    label: { default: "Notification" },
    duration: { default: 5e3 },
    swipeDirection: { default: "right" },
    swipeThreshold: { default: 50 }
  },
  setup(e) {
    const t = e, { label: n, duration: o, swipeDirection: a, swipeThreshold: r } = ye(t), l = E(), i = E(0), u = E(!1), d = E(!1);
    if (t.label && typeof t.label == "string" && !t.label.trim()) {
      const c = "Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`.";
      throw new Error(c);
    }
    return hv({
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
}), bv = "toast.swipeStart", wv = "toast.swipeMove", _v = "toast.swipeCancel", xv = "toast.swipeEnd", za = "toast.viewportPause", ja = "toast.viewportResume";
function Co(e, t, n) {
  const o = n.originalEvent.currentTarget, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, { once: !0 }), o.dispatchEvent(a);
}
function $s(e, t, n = 0) {
  const o = Math.abs(e.x), a = Math.abs(e.y), r = o > a;
  return t === "left" || t === "right" ? r && o > n : !r && a > n;
}
function Cv(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function ki(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((n) => {
    if (n.nodeType === n.TEXT_NODE && n.textContent && t.push(n.textContent), Cv(n)) {
      const o = n.ariaHidden || n.hidden || n.style.display === "none", a = n.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (a) {
          const r = n.dataset.radixToastAnnounceAlt;
          r && t.push(r);
        } else
          t.push(...ki(n));
    }
  }), t;
}
const Bv = /* @__PURE__ */ w({
  __name: "ToastAnnounce",
  setup(e) {
    const t = aa(), n = sc(1e3), o = E(!1);
    return jl(() => {
      o.value = !0;
    }), (a, r) => s(n) || o.value ? (h(), x(s(co), { key: 0 }, {
      default: y(() => [
        $e(Pe(s(t).label.value) + " ", 1),
        _(a.$slots, "default")
      ]),
      _: 3
    })) : ge("", !0);
  }
}), [Ov, Sv] = ve("ToastRoot"), $v = /* @__PURE__ */ w({
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
    const n = e, o = t, { forwardRef: a, currentElement: r } = N(), l = aa(), i = E(null), u = E(null), d = S(
      () => typeof n.duration == "number" ? n.duration : l.duration.value
    ), c = E(0), p = E(d.value), m = E(0), v = E(d.value), f = jl(() => {
      const O = (/* @__PURE__ */ new Date()).getTime() - c.value;
      v.value = Math.max(p.value - O, 0);
    }, { fpsLimit: 60 });
    function g(O) {
      O <= 0 || O === Number.POSITIVE_INFINITY || xt && (window.clearTimeout(m.value), c.value = (/* @__PURE__ */ new Date()).getTime(), m.value = window.setTimeout(b, O));
    }
    function b() {
      var O, B;
      (O = r.value) != null && O.contains(qe()) && ((B = l.viewport.value) == null || B.focus()), l.isClosePausedRef.value = !1, o("close");
    }
    const C = S(() => r.value ? ki(r.value) : null);
    if (n.type && !["foreground", "background"].includes(n.type)) {
      const O = "Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.";
      throw new Error(O);
    }
    return be((O) => {
      const B = l.viewport.value;
      if (B) {
        const k = () => {
          g(p.value), f.resume(), o("resume");
        }, $ = () => {
          const P = (/* @__PURE__ */ new Date()).getTime() - c.value;
          p.value = p.value - P, window.clearTimeout(m.value), f.pause(), o("pause");
        };
        return B.addEventListener(za, $), B.addEventListener(ja, k), () => {
          B.removeEventListener(za, $), B.removeEventListener(ja, k);
        };
      }
    }), te(() => [n.open, d.value], () => {
      p.value = d.value, n.open && !l.isClosePausedRef.value && g(d.value);
    }, { immediate: !0 }), vr("Escape", (O) => {
      o("escapeKeyDown", O), O.defaultPrevented || (l.isFocusedToastEscapeKeyDownRef.value = !0, b());
    }), se(() => {
      l.onToastAdd();
    }), Ke(() => {
      l.onToastRemove();
    }), Sv({ onClose: b }), (O, B) => (h(), z(Ae, null, [
      C.value ? (h(), x(Bv, {
        key: 0,
        role: "alert",
        "aria-live": O.type === "foreground" ? "assertive" : "polite",
        "aria-atomic": "true"
      }, {
        default: y(() => [
          $e(Pe(C.value), 1)
        ]),
        _: 1
      }, 8, ["aria-live"])) : ge("", !0),
      s(l).viewport.value ? (h(), x(no, {
        key: 1,
        to: s(l).viewport.value
      }, [
        F(s(W), A({
          ref: s(a),
          role: "alert",
          "aria-live": "off",
          "aria-atomic": "true",
          tabindex: "0",
          "data-radix-vue-collection-item": ""
        }, O.$attrs, {
          as: O.as,
          "as-child": O.asChild,
          "data-state": O.open ? "open" : "closed",
          "data-swipe-direction": s(l).swipeDirection.value,
          style: { userSelect: "none", touchAction: "none" },
          onPointerdown: B[0] || (B[0] = De((k) => {
            i.value = { x: k.clientX, y: k.clientY };
          }, ["left"])),
          onPointermove: B[1] || (B[1] = (k) => {
            if (!i.value) return;
            const $ = k.clientX - i.value.x, P = k.clientY - i.value.y, D = !!u.value, M = ["left", "right"].includes(s(l).swipeDirection.value), R = ["left", "up"].includes(s(l).swipeDirection.value) ? Math.min : Math.max, T = M ? R(0, $) : 0, L = M ? 0 : R(0, P), I = k.pointerType === "touch" ? 10 : 2, U = { x: T, y: L }, K = { originalEvent: k, delta: U };
            D ? (u.value = U, s(Co)(s(wv), (Y) => o("swipeMove", Y), K)) : s($s)(U, s(l).swipeDirection.value, I) ? (u.value = U, s(Co)(s(bv), (Y) => o("swipeStart", Y), K), k.target.setPointerCapture(k.pointerId)) : (Math.abs($) > I || Math.abs(P) > I) && (i.value = null);
          }),
          onPointerup: B[2] || (B[2] = (k) => {
            const $ = u.value, P = k.target;
            if (P.hasPointerCapture(k.pointerId) && P.releasePointerCapture(k.pointerId), u.value = null, i.value = null, $) {
              const D = k.currentTarget, M = { originalEvent: k, delta: $ };
              s($s)($, s(l).swipeDirection.value, s(l).swipeThreshold.value) ? s(Co)(s(xv), (R) => o("swipeEnd", R), M) : s(Co)(s(_v), (R) => o("swipeCancel", R), M), D == null || D.addEventListener("click", (R) => R.preventDefault(), {
                once: !0
              });
            }
          })
        }), {
          default: y(() => [
            _(O.$slots, "default", {
              remaining: v.value,
              duration: d.value
            })
          ]),
          _: 3
        }, 16, ["as", "as-child", "data-state", "data-swipe-direction"])
      ], 8, ["to"])) : ge("", !0)
    ], 64));
  }
}), Ev = /* @__PURE__ */ w({
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
    const n = e, o = t, { forwardRef: a } = N(), r = Ee(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    });
    return (l, i) => (h(), x(s(st), {
      present: l.forceMount || s(r)
    }, {
      default: y(() => [
        F($v, A({
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
}), Ai = /* @__PURE__ */ w({
  __name: "ToastAnnounceExclude",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    return (t, n) => (h(), x(s(W), {
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
}), Ti = /* @__PURE__ */ w({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Ov(), { forwardRef: o } = N();
    return (a, r) => (h(), x(Ai, { "as-child": "" }, {
      default: y(() => [
        F(s(W), A(t, {
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
}), Dv = /* @__PURE__ */ w({
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
    return (n, o) => n.altText ? (h(), x(Ai, {
      key: 0,
      "alt-text": n.altText,
      "as-child": ""
    }, {
      default: y(() => [
        F(Ti, {
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
    }, 8, ["alt-text"])) : ge("", !0);
  }
}), Es = /* @__PURE__ */ w({
  __name: "FocusProxy",
  emits: ["focusFromOutsideViewport"],
  setup(e, { emit: t }) {
    const n = t, o = aa();
    return (a, r) => (h(), x(s(co), {
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
}), kv = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "ToastViewport",
  props: {
    hotkey: { default: () => ["F8"] },
    label: { type: [String, Function], default: "Notifications ({hotkey})" },
    asChild: { type: Boolean },
    as: { default: "ol" }
  },
  setup(e) {
    const t = e, { hotkey: n, label: o } = ye(t), { forwardRef: a, currentElement: r } = N(), { createCollection: l } = Tn(), i = l(r), u = aa(), d = S(() => u.toastCount.value > 0), c = E(), p = E(), m = S(() => n.value.join("+").replace(/Key/g, "").replace(/Digit/g, ""));
    vr(n.value, () => {
      r.value.focus();
    }), se(() => {
      u.onViewportChange(r.value);
    }), be((f) => {
      const g = r.value;
      if (d.value && g) {
        const b = () => {
          if (!u.isClosePausedRef.value) {
            const $ = new CustomEvent(za);
            g.dispatchEvent($), u.isClosePausedRef.value = !0;
          }
        }, C = () => {
          if (u.isClosePausedRef.value) {
            const $ = new CustomEvent(ja);
            g.dispatchEvent($), u.isClosePausedRef.value = !1;
          }
        }, O = ($) => {
          !g.contains($.relatedTarget) && C();
        }, B = () => {
          g.contains(qe()) || C();
        }, k = ($) => {
          var P, D, M;
          const R = $.altKey || $.ctrlKey || $.metaKey;
          if ($.key === "Tab" && !R) {
            const T = qe(), L = $.shiftKey;
            if ($.target === g && L) {
              (P = c.value) == null || P.focus();
              return;
            }
            const I = v({ tabbingDirection: L ? "backwards" : "forwards" }), U = I.findIndex((K) => K === T);
            Ao(I.slice(U + 1)) ? $.preventDefault() : L ? (D = c.value) == null || D.focus() : (M = p.value) == null || M.focus();
          }
        };
        g.addEventListener("focusin", b), g.addEventListener("focusout", O), g.addEventListener("pointermove", b), g.addEventListener("pointerleave", B), g.addEventListener("keydown", k), window.addEventListener("blur", b), window.addEventListener("focus", C), f(() => {
          g.removeEventListener("focusin", b), g.removeEventListener("focusout", O), g.removeEventListener("pointermove", b), g.removeEventListener("pointerleave", B), g.removeEventListener("keydown", k), window.removeEventListener("blur", b), window.removeEventListener("focus", C);
        });
      }
    });
    function v({ tabbingDirection: f }) {
      const g = i.value.map((b) => {
        const C = [b, ...Br(b)];
        return f === "forwards" ? C : C.reverse();
      });
      return (f === "forwards" ? g.reverse() : g).flat();
    }
    return (f, g) => (h(), x(s(tp), {
      role: "region",
      "aria-label": typeof s(o) == "string" ? s(o).replace("{hotkey}", m.value) : s(o)(m.value),
      tabindex: "-1",
      style: wt({
        // incase list has size when empty (e.g. padding), we remove pointer events so
        // it doesn't prevent interactions with page elements that it overlays
        pointerEvents: d.value ? void 0 : "none"
      })
    }, {
      default: y(() => [
        d.value ? (h(), x(Es, {
          key: 0,
          ref: (b) => {
            c.value = s(rt)(b);
          },
          onFocusFromOutsideViewport: g[0] || (g[0] = () => {
            const b = v({
              tabbingDirection: "forwards"
            });
            s(Ao)(b);
          })
        }, null, 512)) : ge("", !0),
        F(s(W), A({
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
        d.value ? (h(), x(Es, {
          key: 1,
          ref: (b) => {
            p.value = s(rt)(b);
          },
          onFocusFromOutsideViewport: g[1] || (g[1] = () => {
            const b = v({
              tabbingDirection: "backwards"
            });
            s(Ao)(b);
          })
        }, null, 512)) : ge("", !0)
      ]),
      _: 3
    }, 8, ["aria-label", "style"]));
  }
}), Av = /* @__PURE__ */ w({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return N(), (n, o) => (h(), x(s(W), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Tv = /* @__PURE__ */ w({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return N(), (n, o) => (h(), x(s(W), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Pi = "tooltip.open", [Nr, Pv] = ve("TooltipProvider"), Iv = /* @__PURE__ */ w({
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
    const t = e, { delayDuration: n, skipDelayDuration: o, disableHoverableContent: a, disableClosingTrigger: r, ignoreNonKeyboardFocus: l, disabled: i } = ye(t);
    N();
    const u = E(!0), d = E(!1), { start: c, stop: p } = mr(() => {
      u.value = !0;
    }, o, { immediate: !1 });
    return Pv({
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
    }), (m, v) => _(m.$slots, "default");
  }
}), [ra, Mv] = ve("TooltipRoot"), Fv = /* @__PURE__ */ w({
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
    const a = Nr(), r = S(() => n.disableHoverableContent ?? a.disableHoverableContent.value), l = S(() => n.disableClosingTrigger ?? a.disableClosingTrigger.value), i = S(() => n.disabled ?? a.disabled.value), u = S(() => n.delayDuration ?? a.delayDuration.value), d = S(() => n.ignoreNonKeyboardFocus ?? a.ignoreNonKeyboardFocus.value), c = Ee(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    });
    te(c, (B) => {
      a.onClose && (B ? (a.onOpen(), document.dispatchEvent(new CustomEvent(Pi))) : a.onClose());
    });
    const p = E(!1), m = E(), v = S(() => c.value ? p.value ? "delayed-open" : "instant-open" : "closed"), { start: f, stop: g } = mr(() => {
      p.value = !0, c.value = !0;
    }, u, { immediate: !1 });
    function b() {
      g(), p.value = !1, c.value = !0;
    }
    function C() {
      g(), c.value = !1;
    }
    function O() {
      f();
    }
    return Mv({
      contentId: "",
      open: c,
      stateAttribute: v,
      trigger: m,
      onTriggerChange(B) {
        m.value = B;
      },
      onTriggerEnter() {
        a.isOpenDelayed.value ? O() : b();
      },
      onTriggerLeave() {
        r.value ? C() : g();
      },
      onOpen: b,
      onClose: C,
      disableHoverableContent: r,
      disableClosingTrigger: l,
      disabled: i,
      ignoreNonKeyboardFocus: d
    }), (B, k) => (h(), x(s(Mn), null, {
      default: y(() => [
        _(B.$slots, "default", { open: s(c) })
      ]),
      _: 3
    }));
  }
}), Rv = /* @__PURE__ */ w({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = ra(), o = Nr();
    n.contentId || (n.contentId = Le(void 0, "radix-vue-tooltip-content"));
    const { forwardRef: a, currentElement: r } = N(), l = E(!1), i = E(!1), u = S(() => n.disabled.value ? {} : {
      click: g,
      focus: v,
      pointermove: p,
      pointerleave: m,
      pointerdown: c,
      blur: f
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
    function v(b) {
      var C, O;
      l.value || n.ignoreNonKeyboardFocus.value && !((O = (C = b.target).matches) != null && O.call(C, ":focus-visible")) || n.onOpen();
    }
    function f() {
      n.onClose();
    }
    function g() {
      n.disableClosingTrigger.value || n.onClose();
    }
    return (b, C) => (h(), x(s(uo), { "as-child": "" }, {
      default: y(() => [
        F(s(W), A({
          ref: s(a),
          "aria-describedby": s(n).open.value ? s(n).contentId : void 0,
          "data-state": s(n).stateAttribute.value,
          as: b.as,
          "as-child": t.asChild,
          "data-grace-area-trigger": ""
        }, Eu(u.value)), {
          default: y(() => [
            _(b.$slots, "default")
          ]),
          _: 3
        }, 16, ["aria-describedby", "data-state", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), Ii = /* @__PURE__ */ w({
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
    const n = e, o = t, a = ra(), { forwardRef: r } = N(), l = er(), i = S(() => {
      var c;
      return (c = l.default) == null ? void 0 : c.call(l);
    }), u = S(() => {
      var c;
      if (n.ariaLabel)
        return n.ariaLabel;
      let p = "";
      function m(v) {
        typeof v.children == "string" && v.type !== tr ? p += v.children : Array.isArray(v.children) && v.children.forEach((f) => m(f));
      }
      return (c = i.value) == null || c.forEach((v) => m(v)), p;
    }), d = S(() => {
      const { ariaLabel: c, ...p } = n;
      return p;
    });
    return se(() => {
      Sn(window, "scroll", (c) => {
        const p = c.target;
        p != null && p.contains(a.trigger.value) && a.onClose();
      }), Sn(window, Pi, a.onClose);
    }), (c, p) => (h(), x(s(In), {
      "as-child": "",
      "disable-outside-pointer-events": !1,
      onEscapeKeyDown: p[0] || (p[0] = (m) => o("escapeKeyDown", m)),
      onPointerDownOutside: p[1] || (p[1] = (m) => {
        var v;
        s(a).disableClosingTrigger.value && (v = s(a).trigger.value) != null && v.contains(m.target) && m.preventDefault(), o("pointerDownOutside", m);
      }),
      onFocusOutside: p[2] || (p[2] = De(() => {
      }, ["prevent"])),
      onDismiss: p[3] || (p[3] = (m) => s(a).onClose())
    }, {
      default: y(() => [
        F(s($n), A({
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
            F(s(co), {
              id: s(a).contentId,
              role: "tooltip"
            }, {
              default: y(() => [
                $e(Pe(u.value), 1)
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
}), Lv = /* @__PURE__ */ w({
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
    const t = ze(e), { forwardRef: n, currentElement: o } = N(), { trigger: a, onClose: r } = ra(), l = Nr(), { isPointerInTransit: i, onPointerExit: u } = bc(a, o);
    return l.isPointerInTransitRef = i, u(() => {
      r();
    }), (d, c) => (h(), x(Ii, A({ ref: s(n) }, s(t)), {
      default: y(() => [
        _(d.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Vv = /* @__PURE__ */ w({
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
    const n = e, o = t, a = ra(), r = ie(n, o), { forwardRef: l } = N();
    return (i, u) => (h(), x(s(st), {
      present: i.forceMount || s(a).open.value
    }, {
      default: y(() => [
        (h(), x(et(s(a).disableHoverableContent.value ? Ii : Lv), A({ ref: s(l) }, s(r)), {
          default: y(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Nv = /* @__PURE__ */ w({
  __name: "TooltipPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Pn), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Mi(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (t = 0; t < a; t++) e[t] && (n = Mi(e[t])) && (o && (o += " "), o += n);
  } else for (n in e) e[n] && (o && (o += " "), o += n);
  return o;
}
function Fi() {
  for (var e, t, n = 0, o = "", a = arguments.length; n < a; n++) (e = arguments[n]) && (t = Mi(e)) && (o && (o += " "), o += t);
  return o;
}
const qr = "-", qv = (e) => {
  const t = jv(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (l) => {
      const i = l.split(qr);
      return i[0] === "" && i.length !== 1 && i.shift(), Ri(i, t) || zv(l);
    },
    getConflictingClassGroupIds: (l, i) => {
      const u = n[l] || [];
      return i && o[l] ? [...u, ...o[l]] : u;
    }
  };
}, Ri = (e, t) => {
  var l;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], o = t.nextPart.get(n), a = o ? Ri(e.slice(1), o) : void 0;
  if (a)
    return a;
  if (t.validators.length === 0)
    return;
  const r = e.join(qr);
  return (l = t.validators.find(({
    validator: i
  }) => i(r))) == null ? void 0 : l.classGroupId;
}, Ds = /^\[(.+)\]$/, zv = (e) => {
  if (Ds.test(e)) {
    const t = Ds.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, jv = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Hv(Object.entries(e.classGroups), n).forEach(([r, l]) => {
    Ka(l, o, r, t);
  }), o;
}, Ka = (e, t, n, o) => {
  e.forEach((a) => {
    if (typeof a == "string") {
      const r = a === "" ? t : ks(t, a);
      r.classGroupId = n;
      return;
    }
    if (typeof a == "function") {
      if (Kv(a)) {
        Ka(a(o), t, n, o);
        return;
      }
      t.validators.push({
        validator: a,
        classGroupId: n
      });
      return;
    }
    Object.entries(a).forEach(([r, l]) => {
      Ka(l, ks(t, r), n, o);
    });
  });
}, ks = (e, t) => {
  let n = e;
  return t.split(qr).forEach((o) => {
    n.nextPart.has(o) || n.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(o);
  }), n;
}, Kv = (e) => e.isThemeGetter, Hv = (e, t) => t ? e.map(([n, o]) => {
  const a = o.map((r) => typeof r == "string" ? t + r : typeof r == "object" ? Object.fromEntries(Object.entries(r).map(([l, i]) => [t + l, i])) : r);
  return [n, a];
}) : e, Wv = (e) => {
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
}, Li = "!", Uv = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, o = t.length === 1, a = t[0], r = t.length, l = (i) => {
    const u = [];
    let d = 0, c = 0, p;
    for (let b = 0; b < i.length; b++) {
      let C = i[b];
      if (d === 0) {
        if (C === a && (o || i.slice(b, b + r) === t)) {
          u.push(i.slice(c, b)), c = b + r;
          continue;
        }
        if (C === "/") {
          p = b;
          continue;
        }
      }
      C === "[" ? d++ : C === "]" && d--;
    }
    const m = u.length === 0 ? i : i.substring(c), v = m.startsWith(Li), f = v ? m.substring(1) : m, g = p && p > c ? p - c : void 0;
    return {
      modifiers: u,
      hasImportantModifier: v,
      baseClassName: f,
      maybePostfixModifierPosition: g
    };
  };
  return n ? (i) => n({
    className: i,
    parseClassName: l
  }) : l;
}, Gv = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((o) => {
    o[0] === "[" ? (t.push(...n.sort(), o), n = []) : n.push(o);
  }), t.push(...n.sort()), t;
}, Yv = (e) => ({
  cache: Wv(e.cacheSize),
  parseClassName: Uv(e),
  ...qv(e)
}), Xv = /\s+/, Zv = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: o,
    getConflictingClassGroupIds: a
  } = t, r = [], l = e.trim().split(Xv);
  let i = "";
  for (let u = l.length - 1; u >= 0; u -= 1) {
    const d = l[u], {
      modifiers: c,
      hasImportantModifier: p,
      baseClassName: m,
      maybePostfixModifierPosition: v
    } = n(d);
    let f = !!v, g = o(f ? m.substring(0, v) : m);
    if (!g) {
      if (!f) {
        i = d + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (g = o(m), !g) {
        i = d + (i.length > 0 ? " " + i : i);
        continue;
      }
      f = !1;
    }
    const b = Gv(c).join(":"), C = p ? b + Li : b, O = C + g;
    if (r.includes(O))
      continue;
    r.push(O);
    const B = a(g, f);
    for (let k = 0; k < B.length; ++k) {
      const $ = B[k];
      r.push(C + $);
    }
    i = d + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function Qv() {
  let e = 0, t, n, o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Vi(t)) && (o && (o += " "), o += n);
  return o;
}
const Vi = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = Vi(e[o])) && (n && (n += " "), n += t);
  return n;
};
function Jv(e, ...t) {
  let n, o, a, r = l;
  function l(u) {
    const d = t.reduce((c, p) => p(c), e());
    return n = Yv(d), o = n.cache.get, a = n.cache.set, r = i, i(u);
  }
  function i(u) {
    const d = o(u);
    if (d)
      return d;
    const c = Zv(u, n);
    return a(u, c), c;
  }
  return function() {
    return r(Qv.apply(null, arguments));
  };
}
const Se = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, Ni = /^\[(?:([a-z-]+):)?(.+)\]$/i, eg = /^\d+\/\d+$/, tg = /* @__PURE__ */ new Set(["px", "full", "screen"]), ng = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, og = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ag = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, rg = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, sg = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, kt = (e) => xn(e) || tg.has(e) || eg.test(e), Vt = (e) => Vn(e, "length", mg), xn = (e) => !!e && !Number.isNaN(Number(e)), Ba = (e) => Vn(e, "number", xn), zn = (e) => !!e && Number.isInteger(Number(e)), lg = (e) => e.endsWith("%") && xn(e.slice(0, -1)), pe = (e) => Ni.test(e), Nt = (e) => ng.test(e), ig = /* @__PURE__ */ new Set(["length", "size", "percentage"]), ug = (e) => Vn(e, ig, qi), dg = (e) => Vn(e, "position", qi), cg = /* @__PURE__ */ new Set(["image", "url"]), pg = (e) => Vn(e, cg, gg), fg = (e) => Vn(e, "", vg), jn = () => !0, Vn = (e, t, n) => {
  const o = Ni.exec(e);
  return o ? o[1] ? typeof t == "string" ? o[1] === t : t.has(o[1]) : n(o[2]) : !1;
}, mg = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  og.test(e) && !ag.test(e)
), qi = () => !1, vg = (e) => rg.test(e), gg = (e) => sg.test(e), hg = () => {
  const e = Se("colors"), t = Se("spacing"), n = Se("blur"), o = Se("brightness"), a = Se("borderColor"), r = Se("borderRadius"), l = Se("borderSpacing"), i = Se("borderWidth"), u = Se("contrast"), d = Se("grayscale"), c = Se("hueRotate"), p = Se("invert"), m = Se("gap"), v = Se("gradientColorStops"), f = Se("gradientColorStopPositions"), g = Se("inset"), b = Se("margin"), C = Se("opacity"), O = Se("padding"), B = Se("saturate"), k = Se("scale"), $ = Se("sepia"), P = Se("skew"), D = Se("space"), M = Se("translate"), R = () => ["auto", "contain", "none"], T = () => ["auto", "hidden", "clip", "visible", "scroll"], L = () => ["auto", pe, t], I = () => [pe, t], U = () => ["", kt, Vt], K = () => ["auto", xn, pe], Y = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], H = () => ["solid", "dashed", "dotted", "double", "none"], J = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], Q = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], q = () => ["", "0", pe], le = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], re = () => [xn, pe];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [jn],
      spacing: [kt, Vt],
      blur: ["none", "", Nt, pe],
      brightness: re(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Nt, pe],
      borderSpacing: I(),
      borderWidth: U(),
      contrast: re(),
      grayscale: q(),
      hueRotate: re(),
      invert: q(),
      gap: I(),
      gradientColorStops: [e],
      gradientColorStopPositions: [lg, Vt],
      inset: L(),
      margin: L(),
      opacity: re(),
      padding: I(),
      saturate: re(),
      scale: re(),
      sepia: q(),
      skew: re(),
      space: I(),
      translate: I()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", pe]
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
        "break-after": le()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": le()
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
        object: [...Y(), pe]
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
        z: ["auto", zn, pe]
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
        flex: ["1", "auto", "initial", "none", pe]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: q()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: q()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", zn, pe]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [jn]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", zn, pe]
        }, pe]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": K()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": K()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [jn]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [zn, pe]
        }, pe]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": K()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": K()
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
        "auto-cols": ["auto", "min", "max", "fr", pe]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", pe]
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
        justify: ["normal", ...Q()]
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
        content: ["normal", ...Q(), "baseline"]
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
        "place-content": [...Q(), "baseline"]
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
        p: [O]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [O]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [O]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [O]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [O]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [O]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [O]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [O]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [O]
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
        "space-x": [D]
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
        "space-y": [D]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", pe, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [pe, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [pe, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [Nt]
        }, Nt]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [pe, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [pe, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [pe, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [pe, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Nt, Vt]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ba]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [jn]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", pe]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", xn, Ba]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", kt, pe]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", pe]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", pe]
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
        decoration: [...H(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", kt, Vt]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", kt, pe]
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
        indent: I()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", pe]
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
        content: ["none", pe]
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
        bg: [...Y(), dg]
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
        bg: ["auto", "cover", "contain", ug]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, pg]
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
        "border-opacity": [C]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...H(), "hidden"]
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
        divide: H()
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
        outline: ["", ...H()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [kt, pe]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [kt, Vt]
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
        ring: U()
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
        "ring-offset": [kt, Vt]
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
        shadow: ["", "inner", "none", Nt, fg]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [jn]
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
        "mix-blend": [...J(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": J()
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
        "drop-shadow": ["", "none", Nt, pe]
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
        sepia: [$]
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
        "backdrop-sepia": [$]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", pe]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: re()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", pe]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: re()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", pe]
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
        scale: [k]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [k]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [k]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [zn, pe]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [M]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [M]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", pe]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", pe]
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
        "scroll-m": I()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": I()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": I()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": I()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": I()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": I()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": I()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": I()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": I()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": I()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": I()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": I()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": I()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": I()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": I()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": I()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": I()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": I()
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
        "will-change": ["auto", "scroll", "contents", "transform", pe]
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
        stroke: [kt, Vt, Ba]
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
}, yg = /* @__PURE__ */ Jv(hg);
function V(...e) {
  return yg(Fi(e));
}
function __(e, t) {
  t.value = typeof e == "function" ? e(t.value) : e;
}
const Nn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, a] of t)
    n[o] = a;
  return n;
}, bg = {}, wg = { class: "h-full bg-background dark:text-white" };
function _g(e, t) {
  return h(), z("div", wg, [
    _(e.$slots, "default")
  ]);
}
const x_ = /* @__PURE__ */ Nn(bg, [["render", _g]]), xg = {}, Cg = { class: "sticky top-0 z-50 flex h-16 shrink-0 items-center gap-x-4 bg-background/60 px-4 backdrop-blur sm:gap-x-6 sm:px-6 lg:px-8" };
function Bg(e, t) {
  return h(), z("header", Cg, [
    _(e.$slots, "default")
  ]);
}
const C_ = /* @__PURE__ */ Nn(xg, [["render", Bg]]), Og = {}, Sg = { class: "px-4 py-10 sm:px-6 lg:px-8 lg:pl-72" };
function $g(e, t) {
  return h(), z("main", Sg, [
    _(e.$slots, "default")
  ]);
}
const B_ = /* @__PURE__ */ Nn(Og, [["render", $g]]), Eg = {};
function Dg(e, t) {
  return _(e.$slots, "default");
}
const O_ = /* @__PURE__ */ Nn(Eg, [["render", Dg]]), kg = {}, Ag = { class: "hidden px-6 py-10 lg:fixed lg:inset-y-0 lg:top-16 lg:z-50 lg:flex lg:w-72 lg:flex-col" }, Tg = { class: "gap-y-5 overflow-y-auto" };
function Pg(e, t) {
  return h(), z("div", Ag, [
    he("div", Tg, [
      _(e.$slots, "default")
    ])
  ]);
}
const S_ = /* @__PURE__ */ Nn(kg, [["render", Pg]]), Ig = {};
function Mg(e, t) {
  return _(e.$slots, "default");
}
const $_ = /* @__PURE__ */ Nn(Ig, [["render", Mg]]);
function Fg(e, t) {
  return h(), z("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    he("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    })
  ]);
}
function Rg(e, t) {
  return h(), z("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    he("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    })
  ]);
}
function As(e, t) {
  return h(), z("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    he("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
    })
  ]);
}
function Lg(e, t) {
  return h(), z("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    he("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
    })
  ]);
}
const Vg = {
  type: "button",
  class: "-m-2.5 p-2.5 lg:hidden"
}, E_ = /* @__PURE__ */ w({
  __name: "TwoColumnLayoutSidebarTrigger",
  setup(e) {
    return (t, n) => (h(), z("button", Vg, [
      n[0] || (n[0] = he("span", { class: "sr-only" }, "Open sidebar", -1)),
      F(s(Fg), {
        class: "h-6 w-6",
        "aria-hidden": "true"
      })
    ]));
  }
}), Ng = 3, qg = 1e6, Tt = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST"
};
let Oa = 0;
function zg() {
  return Oa = (Oa + 1) % Number.MAX_VALUE, Oa.toString();
}
const Sa = /* @__PURE__ */ new Map();
function Ts(e) {
  if (Sa.has(e)) return;
  const t = setTimeout(() => {
    Sa.delete(e), Wn({
      type: Tt.REMOVE_TOAST,
      toastId: e
    });
  }, qg);
  Sa.set(e, t);
}
const ut = E({
  toasts: []
});
function Wn(e) {
  switch (e.type) {
    case Tt.ADD_TOAST:
      ut.value.toasts = [e.toast, ...ut.value.toasts].slice(0, Ng);
      break;
    case Tt.UPDATE_TOAST:
      ut.value.toasts = ut.value.toasts.map(
        (t) => t.id === e.toast.id ? { ...t, ...e.toast } : t
      );
      break;
    case Tt.DISMISS_TOAST: {
      const { toastId: t } = e;
      t ? Ts(t) : ut.value.toasts.forEach((n) => {
        Ts(n.id);
      }), ut.value.toasts = ut.value.toasts.map(
        (n) => n.id === t || t === void 0 ? {
          ...n,
          open: !1
        } : n
      );
      break;
    }
    case Tt.REMOVE_TOAST:
      e.toastId === void 0 ? ut.value.toasts = [] : ut.value.toasts = ut.value.toasts.filter((t) => t.id !== e.toastId);
      break;
  }
}
function zi() {
  return {
    toasts: S(() => ut.value.toasts),
    toast: jg,
    dismiss: (e) => Wn({ type: Tt.DISMISS_TOAST, toastId: e })
  };
}
function jg(e) {
  const t = zg(), n = (a) => Wn({
    type: Tt.UPDATE_TOAST,
    toast: { ...a, id: t }
  }), o = () => Wn({ type: Tt.DISMISS_TOAST, toastId: t });
  return Wn({
    type: Tt.ADD_TOAST,
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
const Kg = { class: "flex items-start space-x-3" }, Hg = ["src", "alt"], Wg = { class: "grid gap-1" }, Ug = { class: "font-bold" }, Gg = /* @__PURE__ */ w({
  __name: "Toaster",
  props: {
    position: {}
  },
  emits: ["click"],
  setup(e) {
    const { toasts: t } = zi();
    return (n, o) => (h(), x(s(sh), null, {
      default: y(() => [
        (h(!0), z(Ae, null, jt(s(t), (a) => (h(), x(s(Yg), A({
          key: a.id
        }, { ref_for: !0 }, a, {
          class: "mt-1.5",
          onClick: (r) => n.$emit("click", a)
        }), {
          default: y(() => [
            he("div", Kg, [
              a.icon ? (h(), z(Ae, { key: 0 }, [
                typeof a.icon == "string" ? (h(), z("img", {
                  key: 0,
                  src: a.icon,
                  class: ue(["size-16 rounded-sm object-cover", a.iconClasses]),
                  alt: a.title
                }, null, 10, Hg)) : (h(), x(et(a.icon), {
                  key: 1,
                  class: ue(["size-6", a.iconClasses])
                }, null, 8, ["class"]))
              ], 64)) : ge("", !0),
              he("div", Wg, [
                a.title ? (h(), x(s(rh), { key: 0 }, {
                  default: y(() => [
                    $e(Pe(a.title), 1)
                  ]),
                  _: 2
                }, 1024)) : ge("", !0),
                a.description ? (h(), z(Ae, { key: 1 }, [
                  Pu(a.description) ? (h(), x(s(Ps), { key: 0 }, {
                    default: y(() => [
                      (h(), x(et(a.description)))
                    ]),
                    _: 2
                  }, 1024)) : typeof a.description == "object" ? (h(!0), z(Ae, { key: 1 }, jt(a.description, (r, l) => (h(), z("p", {
                    key: l,
                    class: "text-sm opacity-90"
                  }, [
                    a.objectFormat === "key" ? (h(), z(Ae, { key: 0 }, [
                      $e(Pe(l), 1)
                    ], 64)) : a.objectFormat === "both" ? (h(), z(Ae, { key: 1 }, [
                      he("span", Ug, Pe(l), 1),
                      $e(": " + Pe(r), 1)
                    ], 64)) : (h(), z(Ae, { key: 2 }, [
                      $e(Pe(r), 1)
                    ], 64))
                  ]))), 128)) : (h(), x(s(Ps), { key: 2 }, {
                    default: y(() => [
                      $e(Pe(a.description), 1)
                    ]),
                    _: 2
                  }, 1024))
                ], 64)) : ge("", !0),
                F(s(ah))
              ])
            ]),
            (h(), x(et(a.action)))
          ]),
          _: 2
        }, 1040, ["onClick"]))), 128)),
        F(s(Xg), { position: n.position }, null, 8, ["position"])
      ]),
      _: 1
    }));
  }
}), Yg = /* @__PURE__ */ w({
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
    }), r = ie(a, o);
    return (l, i) => (h(), x(s(Ev), A(s(r), {
      class: s(V)(s(lh)({ variant: l.variant }), n.class),
      "onUpdate:open": l.onOpenChange
    }), {
      default: y(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class", "onUpdate:open"]));
  }
}), Xg = /* @__PURE__ */ w({
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
    return (a, r) => (h(), x(s(kv), A(n.value, {
      class: s(V)(
        // overriding the defaults to position at the bottom on mobile viewport
        // 'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
        "fixed flex-col z-[100] flex max-h-screen w-full p-4 md:max-w-[420px]",
        o.value,
        t.class
      )
    }), null, 16, ["class"]));
  }
}), D_ = /* @__PURE__ */ w({
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
    return (o, a) => (h(), x(s(Dv), A(n.value, {
      class: s(V)(
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
function Zg(e, t) {
  return h(), z("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    he("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z",
      fill: "currentColor"
    })
  ]);
}
function Qg(e, t) {
  return h(), z("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    he("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z",
      fill: "currentColor"
    })
  ]);
}
function Jg(e, t) {
  return h(), z("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    he("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z",
      fill: "currentColor"
    })
  ]);
}
function ji(e, t) {
  return h(), z("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    he("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",
      fill: "currentColor"
    })
  ]);
}
function Ki(e, t) {
  return h(), z("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    he("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
      fill: "currentColor"
    })
  ]);
}
function eh(e, t) {
  return h(), z("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    he("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z",
      fill: "currentColor"
    })
  ]);
}
function th(e, t) {
  return h(), z("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    he("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M3.13523 8.84197C3.3241 9.04343 3.64052 9.05363 3.84197 8.86477L7.5 5.43536L11.158 8.86477C11.3595 9.05363 11.6759 9.04343 11.8648 8.84197C12.0536 8.64051 12.0434 8.32409 11.842 8.13523L7.84197 4.38523C7.64964 4.20492 7.35036 4.20492 7.15803 4.38523L3.15803 8.13523C2.95657 8.32409 2.94637 8.64051 3.13523 8.84197Z",
      fill: "currentColor"
    })
  ]);
}
function sa(e, t) {
  return h(), z("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    he("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
      fill: "currentColor"
    })
  ]);
}
function nh(e, t) {
  return h(), z("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    he("path", {
      d: "M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z",
      fill: "currentColor"
    })
  ]);
}
function oh(e, t) {
  return h(), z("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    he("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z",
      fill: "currentColor"
    })
  ]);
}
const ah = /* @__PURE__ */ w({
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
    return (o, a) => (h(), x(s(Ti), A(n.value, {
      class: s(V)(
        "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
        t.class
      )
    }), {
      default: y(() => [
        F(s(sa), { class: "h-4 w-4" })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), rh = /* @__PURE__ */ w({
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
    return (o, a) => (h(), x(s(Av), A(n.value, {
      class: s(V)("text-sm font-semibold [&+div]:text-xs", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ps = /* @__PURE__ */ w({
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
    return (o, a) => (h(), x(s(Tv), A({
      class: s(V)("text-sm opacity-90", t.class)
    }, n.value), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), sh = /* @__PURE__ */ w({
  __name: "ToastProvider",
  props: {
    label: {},
    duration: {},
    swipeDirection: {},
    swipeThreshold: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(yv), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Is = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Ms = Fi, fo = (e, t) => (n) => {
  var o;
  if ((t == null ? void 0 : t.variants) == null) return Ms(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: a, defaultVariants: r } = t, l = Object.keys(a).map((d) => {
    const c = n == null ? void 0 : n[d], p = r == null ? void 0 : r[d];
    if (c === null) return null;
    const m = Is(c) || Is(p);
    return a[d][m];
  }), i = n && Object.entries(n).reduce((d, c) => {
    let [p, m] = c;
    return m === void 0 || (d[p] = m), d;
  }, {}), u = t == null || (o = t.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((d, c) => {
    let { class: p, className: m, ...v } = c;
    return Object.entries(v).every((f) => {
      let [g, b] = f;
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
  return Ms(e, l, u, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, lh = fo(
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
), { toast: Bo } = zi();
function ih() {
  return {
    info: (e) => {
      Bo({
        icon: Lg,
        iconClasses: "text-blue-400",
        title: "FYI",
        description: e
      });
    },
    success: (e) => {
      Bo({
        icon: Rg,
        iconClasses: "text-green-400",
        title: "Success",
        description: e
      });
    },
    warning: (e) => {
      Bo({
        icon: As,
        iconClasses: "text-orange-400",
        title: "Warning",
        description: e
      });
    },
    error: (e, t = "value") => {
      Bo({
        icon: As,
        iconClasses: "text-red-400",
        title: "Oh snap! Some errors were encountered.",
        description: e,
        objectFormat: t
      });
    }
  };
}
const k_ = /* @__PURE__ */ w({
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
    } = ih();
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
    ), (l, i) => (h(), x(s(Gg)));
  }
}), uh = { class: "flex items-center justify-between space-y-2" }, dh = { class: "flex items-center space-x-2" }, A_ = /* @__PURE__ */ w({
  __name: "Heading",
  props: {
    as: { default: "h2" },
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("div", uh, [
      (h(), x(et(n.as), {
        class: ue(s(V)("text-3xl font-bold tracking-tight", t.class))
      }, {
        default: y(() => [
          _(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["class"])),
      he("div", dh, [
        _(n.$slots, "actions")
      ])
    ]));
  }
}), ch = /* @__PURE__ */ w({
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
    const a = ie(e, t);
    return (r, l) => (h(), x(s(Kc), Z(ee(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), T_ = /* @__PURE__ */ w({
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
    const a = ie(e, t);
    return (r, l) => (h(), x(ch, Z(ee(s(a))), {
      default: y(() => [
        (h(!0), z(Ae, null, jt(r.content, (i, u) => (h(), x(s(fh), {
          key: u,
          value: "item-" + u
        }, {
          default: y(() => [
            F(s(mh), null, {
              default: y(() => [
                _(r.$slots, u + ".title", { item: i }, () => [
                  $e(Pe(i.title), 1)
                ])
              ]),
              _: 2
            }, 1024),
            F(s(ph), null, {
              default: y(() => [
                _(r.$slots, u + ".content", { item: i }, () => [
                  $e(Pe(i.content), 1)
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
}), ph = /* @__PURE__ */ w({
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
    return (o, a) => (h(), x(s(Uc), A(n.value, { class: "accordion-content overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" }), {
      default: y(() => [
        he("div", {
          class: ue(s(V)("pb-4 pt-0", t.class))
        }, [
          _(o.$slots, "default")
        ], 2)
      ]),
      _: 3
    }, 16));
  }
}), fh = /* @__PURE__ */ w({
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
    }), o = ze(n);
    return (a, r) => (h(), x(s(Wc), A(s(o), {
      class: s(V)("border-b", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), mh = /* @__PURE__ */ w({
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
    return (o, a) => (h(), x(s(Gc), { class: "flex" }, {
      default: y(() => [
        F(s(Yc), A(n.value, {
          class: s(V)(
            "accordion-trigger flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
            t.class
          )
        }), {
          default: y(() => [
            _(o.$slots, "default"),
            _(o.$slots, "icon", {}, () => [
              F(s(Ki), { class: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), P_ = /* @__PURE__ */ w({
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
    const a = ie(e, t);
    return (r, l) => (h(), x(s(hh), null, {
      default: y(() => [
        F(s(vh), Z(ee(s(a))), {
          default: y(() => [
            F(s(yh), {
              class: ue(r.indicator ? "underline decoration-dotted underline-offset-4" : "")
            }, {
              default: y(() => [
                _(r.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]),
            F(s(gh), Z(ee(r.$attrs)), {
              default: y(() => [
                _(r.$slots, "tooltip", {}, () => [
                  $e(Pe(r.tooltip), 1)
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
}), vh = /* @__PURE__ */ w({
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
    const a = ie(e, t);
    return (r, l) => (h(), x(s(Fv), Z(ee(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), gh = /* @__PURE__ */ w({
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
    }), r = ie(a, o);
    return (l, i) => (h(), x(s(Nv), null, {
      default: y(() => [
        F(s(Vv), A({ ...s(r), ...l.$attrs }, {
          class: s(V)(
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
}), hh = /* @__PURE__ */ w({
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
    return (n, o) => (h(), x(s(Iv), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), yh = /* @__PURE__ */ w({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Rv), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), bh = /* @__PURE__ */ w({
  __name: "AlertDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = ie(e, t);
    return (r, l) => (h(), x(s(_p), Z(ee(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), I_ = /* @__PURE__ */ w({
  __name: "AlertDialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(xp), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wh = /* @__PURE__ */ w({
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
    }), r = ie(a, o);
    return (l, i) => (h(), x(s(Cp), null, {
      default: y(() => [
        F(s($p), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        F(s(Sp), A(s(r), {
          class: s(V)(
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
}), _h = /* @__PURE__ */ w({
  __name: "AlertDialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("div", {
      class: ue(s(V)("flex flex-col gap-y-2 text-center sm:text-left", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), xh = /* @__PURE__ */ w({
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
    return (o, a) => (h(), x(s(Dp), A(n.value, {
      class: s(V)("text-lg font-semibold", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ch = /* @__PURE__ */ w({
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
    return (o, a) => (h(), x(s(kp), A(n.value, {
      class: s(V)("text-sm text-muted-foreground", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Bh = /* @__PURE__ */ w({
  __name: "AlertDialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("div", {
      class: ue(s(V)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), Hi = /* @__PURE__ */ w({
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
    return (n, o) => (h(), x(s(W), {
      as: n.as,
      "as-child": n.asChild,
      class: ue(s(V)(s(zr)({ variant: n.variant, size: n.size }), t.class))
    }, {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), zr = fo(
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
), Oh = /* @__PURE__ */ w({
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
    return (o, a) => (h(), x(s(Ap), A(n.value, {
      class: s(V)(s(zr)(), t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Sh = /* @__PURE__ */ w({
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
    return (o, a) => (h(), x(s(Ep), A(n.value, {
      class: s(V)(s(zr)({ variant: "outline" }), "mt-2 sm:mt-0", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), M_ = /* @__PURE__ */ w({
  __name: "Avatar",
  props: {
    class: {},
    size: { default: "sm" },
    shape: { default: "circle" }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Pp), {
      class: ue(s(V)(s($h)({ size: n.size, shape: n.shape }), t.class))
    }, {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), F_ = /* @__PURE__ */ w({
  __name: "AvatarImage",
  props: {
    src: {},
    referrerPolicy: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Mp), A(t, { class: "h-full w-full object-cover" }), null, 16));
  }
}), R_ = /* @__PURE__ */ w({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Fp), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $h = fo(
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
), L_ = /* @__PURE__ */ w({
  __name: "Badge",
  props: {
    variant: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("div", {
      class: ue(s(V)(s(Eh)({ variant: n.variant }), t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), Eh = fo(
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
), V_ = /* @__PURE__ */ w({
  __name: "Card",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("div", {
      class: ue(s(V)("rounded-xl border bg-card text-card-foreground shadow", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), N_ = /* @__PURE__ */ w({
  __name: "CardContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("div", {
      class: ue(s(V)("p-6 pt-0", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), q_ = /* @__PURE__ */ w({
  __name: "CardDescription",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("p", {
      class: ue(s(V)("text-sm text-muted-foreground", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), z_ = /* @__PURE__ */ w({
  __name: "CardFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("div", {
      class: ue(s(V)("flex items-center p-6 pt-0", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), j_ = /* @__PURE__ */ w({
  __name: "CardHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("div", {
      class: ue(s(V)("flex flex-col gap-y-1.5 p-6", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), K_ = /* @__PURE__ */ w({
  __name: "CardTitle",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("h3", {
      class: ue(s(V)("font-semibold leading-none tracking-tight", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
});
var Fs;
const Dh = typeof window < "u", kh = (e) => typeof e < "u", Ah = (e) => typeof e == "function";
Dh && ((Fs = window == null ? void 0 : window.navigator) != null && Fs.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Th(e) {
  return e;
}
function Ph(e) {
  const t = Symbol("InjectionState");
  return [(...a) => {
    const r = e(...a);
    return ao(t, r), r;
  }, () => oo(t)];
}
function Ih(e) {
  if (!at(e))
    return Bn(e);
  const t = new Proxy({}, {
    get(n, o, a) {
      return s(Reflect.get(e.value, o, a));
    },
    set(n, o, a) {
      return at(e.value[o]) && !at(a) ? e.value[o].value = a : e.value[o] = a, !0;
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
  return Bn(t);
}
function Mh(e) {
  return Ih(S(e));
}
function Bt(e, ...t) {
  const n = t.flat();
  return Mh(() => Object.fromEntries(Object.entries(ye(e)).filter((o) => !n.includes(o[0]))));
}
function Fh(e) {
  return JSON.parse(JSON.stringify(e));
}
const Rs = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ls = "__vueuse_ssr_handlers__";
Rs[Ls] = Rs[Ls] || {};
var Vs;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Vs || (Vs = {}));
var Rh = Object.defineProperty, Ns = Object.getOwnPropertySymbols, Lh = Object.prototype.hasOwnProperty, Vh = Object.prototype.propertyIsEnumerable, qs = (e, t, n) => t in e ? Rh(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Nh = (e, t) => {
  for (var n in t || (t = {}))
    Lh.call(t, n) && qs(e, n, t[n]);
  if (Ns)
    for (var n of Ns(t))
      Vh.call(t, n) && qs(e, n, t[n]);
  return e;
};
const qh = {
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
Nh({
  linear: Th
}, qh);
function Wi(e, t, n, o = {}) {
  var a, r, l;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: c = !1,
    defaultValue: p
  } = o, m = We(), v = n || (m == null ? void 0 : m.emit) || ((a = m == null ? void 0 : m.$emit) == null ? void 0 : a.bind(m)) || ((l = (r = m == null ? void 0 : m.proxy) == null ? void 0 : r.$emit) == null ? void 0 : l.bind(m == null ? void 0 : m.proxy));
  let f = d;
  f = d || f || `update:${t.toString()}`;
  const g = (C) => i ? Ah(i) ? i(C) : Fh(C) : C, b = () => kh(e[t]) ? g(e[t]) : p;
  if (u) {
    const C = b(), O = E(C);
    return te(() => e[t], (B) => O.value = g(B)), te(O, (B) => {
      (B !== e[t] || c) && v(f, B);
    }, { deep: c }), O;
  } else
    return S({
      get() {
        return b();
      },
      set(C) {
        v(f, C);
      }
    });
}
function zh(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function zs(e) {
  return zh(e) || Array.isArray(e);
}
function jh() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function jr(e, t) {
  const n = Object.keys(e), o = Object.keys(t);
  if (n.length !== o.length) return !1;
  const a = JSON.stringify(Object.keys(e.breakpoints || {})), r = JSON.stringify(Object.keys(t.breakpoints || {}));
  return a !== r ? !1 : n.every((l) => {
    const i = e[l], u = t[l];
    return typeof i == "function" ? `${i}` == `${u}` : !zs(i) || !zs(u) ? i === u : jr(i, u);
  });
}
function js(e) {
  return e.concat().sort((t, n) => t.name > n.name ? 1 : -1).map((t) => t.options);
}
function Kh(e, t) {
  if (e.length !== t.length) return !1;
  const n = js(e), o = js(t);
  return n.every((a, r) => {
    const l = o[r];
    return jr(a, l);
  });
}
function Kr(e) {
  return typeof e == "number";
}
function Ha(e) {
  return typeof e == "string";
}
function la(e) {
  return typeof e == "boolean";
}
function Ks(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Ie(e) {
  return Math.abs(e);
}
function Hr(e) {
  return Math.sign(e);
}
function Un(e, t) {
  return Ie(e - t);
}
function Hh(e, t) {
  if (e === 0 || t === 0 || Ie(e) <= Ie(t)) return 0;
  const n = Un(Ie(e), Ie(t));
  return Ie(n / e);
}
function Wh(e) {
  return Math.round(e * 100) / 100;
}
function Jn(e) {
  return eo(e).map(Number);
}
function pt(e) {
  return e[mo(e)];
}
function mo(e) {
  return Math.max(0, e.length - 1);
}
function Wr(e, t) {
  return t === mo(e);
}
function Hs(e, t = 0) {
  return Array.from(Array(e), (n, o) => t + o);
}
function eo(e) {
  return Object.keys(e);
}
function Ui(e, t) {
  return [e, t].reduce((n, o) => (eo(o).forEach((a) => {
    const r = n[a], l = o[a], i = Ks(r) && Ks(l);
    n[a] = i ? Ui(r, l) : l;
  }), n), {});
}
function Wa(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function Uh(e, t) {
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
    return Ha(e) ? n[e](u) : e(t, u, d);
  }
  return {
    measure: l
  };
}
function to() {
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
function Gh(e, t, n, o) {
  const a = to(), r = 1e3 / 60;
  let l = null, i = 0, u = 0;
  function d() {
    a.add(e, "visibilitychange", () => {
      e.hidden && f();
    });
  }
  function c() {
    v(), a.clear();
  }
  function p(b) {
    if (!u) return;
    l || (l = b, n(), n());
    const C = b - l;
    for (l = b, i += C; i >= r; )
      n(), i -= r;
    const O = i / r;
    o(O), u && (u = t.requestAnimationFrame(p));
  }
  function m() {
    u || (u = t.requestAnimationFrame(p));
  }
  function v() {
    t.cancelAnimationFrame(u), l = null, i = 0, u = 0;
  }
  function f() {
    l = null, i = 0;
  }
  return {
    init: d,
    destroy: c,
    start: m,
    stop: v,
    update: n,
    render: o
  };
}
function Yh(e, t) {
  const n = t === "rtl", o = e === "y", a = o ? "y" : "x", r = o ? "x" : "y", l = !o && n ? -1 : 1, i = c(), u = p();
  function d(f) {
    const {
      height: g,
      width: b
    } = f;
    return o ? g : b;
  }
  function c() {
    return o ? "top" : n ? "right" : "left";
  }
  function p() {
    return o ? "bottom" : n ? "left" : "right";
  }
  function m(f) {
    return f * l;
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
function tn(e = 0, t = 0) {
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
function Gi(e, t, n) {
  const {
    constrain: o
  } = tn(0, e), a = e + 1;
  let r = l(t);
  function l(m) {
    return n ? Ie((a + m) % a) : o(m);
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
    return Gi(e, i(), n);
  }
  const p = {
    get: i,
    set: u,
    add: d,
    clone: c
  };
  return p;
}
function Xh(e, t, n, o, a, r, l, i, u, d, c, p, m, v, f, g, b, C, O) {
  const {
    cross: B,
    direction: k
  } = e, $ = ["INPUT", "SELECT", "TEXTAREA"], P = {
    passive: !1
  }, D = to(), M = to(), R = tn(50, 225).constrain(v.measure(20)), T = {
    mouse: 300,
    touch: 400
  }, L = {
    mouse: 500,
    touch: 600
  }, I = f ? 43 : 25;
  let U = !1, K = 0, Y = 0, H = !1, J = !1, Q = !1, q = !1;
  function le(X) {
    if (!O) return;
    function me(He) {
      (la(O) || O(X, He)) && nt(He);
    }
    const Be = t;
    D.add(Be, "dragstart", (He) => He.preventDefault(), P).add(Be, "touchmove", () => {
    }, P).add(Be, "touchend", () => {
    }).add(Be, "touchstart", me).add(Be, "mousedown", me).add(Be, "touchcancel", G).add(Be, "contextmenu", G).add(Be, "click", oe, !0);
  }
  function re() {
    D.clear(), M.clear();
  }
  function ke() {
    const X = q ? n : t;
    M.add(X, "touchmove", j, P).add(X, "touchend", G).add(X, "mousemove", j, P).add(X, "mouseup", G);
  }
  function Me(X) {
    const me = X.nodeName || "";
    return $.includes(me);
  }
  function Ve() {
    return (f ? L : T)[q ? "mouse" : "touch"];
  }
  function Ge(X, me) {
    const Be = p.add(Hr(X) * -1), He = c.byDistance(X, !f).distance;
    return f || Ie(X) < R ? He : b && me ? He * 0.5 : c.byIndex(Be.get(), 0).distance;
  }
  function nt(X) {
    const me = Wa(X, o);
    q = me, Q = f && me && !X.buttons && U, U = Un(a.get(), l.get()) >= 2, !(me && X.button !== 0) && (Me(X.target) || (H = !0, r.pointerDown(X), d.useFriction(0).useDuration(0), a.set(l), ke(), K = r.readPoint(X), Y = r.readPoint(X, B), m.emit("pointerDown")));
  }
  function j(X) {
    if (!Wa(X, o) && X.touches.length >= 2) return G(X);
    const Be = r.readPoint(X), He = r.readPoint(X, B), ot = Un(Be, K), lt = Un(He, Y);
    if (!J && !q && (!X.cancelable || (J = ot > lt, !J)))
      return G(X);
    const ne = r.pointerMove(X);
    ot > g && (Q = !0), d.useFriction(0.3).useDuration(0.75), i.start(), a.add(k(ne)), X.preventDefault();
  }
  function G(X) {
    const Be = c.byDistance(0, !1).index !== p.get(), He = r.pointerUp(X) * Ve(), ot = Ge(k(He), Be), lt = Hh(He, ot), ne = I - 10 * lt, xe = C + lt / 50;
    J = !1, H = !1, M.clear(), d.useDuration(ne).useFriction(xe), u.distance(ot, !f), q = !1, m.emit("pointerUp");
  }
  function oe(X) {
    Q && (X.stopPropagation(), X.preventDefault(), Q = !1);
  }
  function de() {
    return H;
  }
  return {
    init: le,
    destroy: re,
    pointerDown: de
  };
}
function Zh(e, t) {
  let o, a;
  function r(p) {
    return p.timeStamp;
  }
  function l(p, m) {
    const f = `client${(m || e.scroll) === "x" ? "X" : "Y"}`;
    return (Wa(p, t) ? p : p.touches[0])[f];
  }
  function i(p) {
    return o = p, a = p, l(p);
  }
  function u(p) {
    const m = l(p) - l(a), v = r(p) - r(o) > 170;
    return a = p, v && (o = p), m;
  }
  function d(p) {
    if (!o || !a) return 0;
    const m = l(a) - l(o), v = r(p) - r(o), f = r(p) - r(a) > 170, g = m / v;
    return v && !f && Ie(g) > 0.1 ? g : 0;
  }
  return {
    pointerDown: i,
    pointerMove: u,
    pointerUp: d,
    readPoint: l
  };
}
function Qh() {
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
function Jh(e) {
  function t(o) {
    return e * (o / 100);
  }
  return {
    measure: t
  };
}
function ey(e, t, n, o, a, r, l) {
  const i = [e].concat(o);
  let u, d, c = [], p = !1;
  function m(b) {
    return a.measureSize(l.measure(b));
  }
  function v(b) {
    if (!r) return;
    d = m(e), c = o.map(m);
    function C(O) {
      for (const B of O) {
        if (p) return;
        const k = B.target === e, $ = o.indexOf(B.target), P = k ? d : c[$], D = m(k ? e : o[$]);
        if (Ie(D - P) >= 0.5) {
          b.reInit(), t.emit("resize");
          break;
        }
      }
    }
    u = new ResizeObserver((O) => {
      (la(r) || r(b, O)) && C(O);
    }), n.requestAnimationFrame(() => {
      i.forEach((O) => u.observe(O));
    });
  }
  function f() {
    p = !0, u && u.disconnect();
  }
  return {
    init: v,
    destroy: f
  };
}
function ty(e, t, n, o, a, r) {
  let l = 0, i = 0, u = a, d = r, c = e.get(), p = 0;
  function m() {
    const P = o.get() - e.get(), D = !u;
    let M = 0;
    return D ? (l = 0, n.set(o), e.set(o), M = P) : (n.set(e), l += P / u, l *= d, c += l, e.add(l), M = c - p), i = Hr(M), p = c, $;
  }
  function v() {
    const P = o.get() - t.get();
    return Ie(P) < 1e-3;
  }
  function f() {
    return u;
  }
  function g() {
    return i;
  }
  function b() {
    return l;
  }
  function C() {
    return B(a);
  }
  function O() {
    return k(r);
  }
  function B(P) {
    return u = P, $;
  }
  function k(P) {
    return d = P, $;
  }
  const $ = {
    direction: g,
    duration: f,
    velocity: b,
    seek: m,
    settled: v,
    useBaseFriction: O,
    useBaseDuration: C,
    useFriction: k,
    useDuration: B
  };
  return $;
}
function ny(e, t, n, o, a) {
  const r = a.measure(10), l = a.measure(50), i = tn(0.1, 0.99);
  let u = !1;
  function d() {
    return !(u || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
  }
  function c(v) {
    if (!d()) return;
    const f = e.reachedMin(t.get()) ? "min" : "max", g = Ie(e[f] - t.get()), b = n.get() - t.get(), C = i.constrain(g / l);
    n.subtract(b * C), !v && Ie(b) < r && (n.set(e.constrain(n.get())), o.useDuration(25).useBaseFriction());
  }
  function p(v) {
    u = !v;
  }
  return {
    shouldConstrain: d,
    constrain: c,
    toggleActive: p
  };
}
function oy(e, t, n, o, a) {
  const r = tn(-t + e, 0), l = p(), i = c(), u = m();
  function d(f, g) {
    return Un(f, g) <= 1;
  }
  function c() {
    const f = l[0], g = pt(l), b = l.lastIndexOf(f), C = l.indexOf(g) + 1;
    return tn(b, C);
  }
  function p() {
    return n.map((f, g) => {
      const {
        min: b,
        max: C
      } = r, O = r.constrain(f), B = !g, k = Wr(n, g);
      return B ? C : k || d(b, O) ? b : d(C, O) ? C : O;
    }).map((f) => parseFloat(f.toFixed(3)));
  }
  function m() {
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
function ay(e, t, n) {
  const o = t[0], a = n ? o - e : pt(t);
  return {
    limit: tn(a, o)
  };
}
function ry(e, t, n, o) {
  const r = t.min + 0.1, l = t.max + 0.1, {
    reachedMin: i,
    reachedMax: u
  } = tn(r, l);
  function d(m) {
    return m === 1 ? u(n.get()) : m === -1 ? i(n.get()) : !1;
  }
  function c(m) {
    if (!d(m)) return;
    const v = e * (m * -1);
    o.forEach((f) => f.add(v));
  }
  return {
    loop: c
  };
}
function sy(e) {
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
function ly(e, t, n, o, a) {
  const {
    startEdge: r,
    endEdge: l
  } = e, {
    groupSlides: i
  } = a, u = p().map(t.measure), d = m(), c = v();
  function p() {
    return i(o).map((g) => pt(g)[l] - g[0][r]).map(Ie);
  }
  function m() {
    return o.map((g) => n[r] - g[r]).map((g) => -Ie(g));
  }
  function v() {
    return i(d).map((g) => g[0]).map((g, b) => g + u[b]);
  }
  return {
    snaps: d,
    snapsAligned: c
  };
}
function iy(e, t, n, o, a, r) {
  const {
    groupSlides: l
  } = a, {
    min: i,
    max: u
  } = o, d = c();
  function c() {
    const m = l(r), v = !e || t === "keepSnaps";
    return n.length === 1 ? [r] : v ? m : m.slice(i, u).map((f, g, b) => {
      const C = !g, O = Wr(b, g);
      if (C) {
        const B = pt(b[0]) + 1;
        return Hs(B);
      }
      if (O) {
        const B = mo(r) - pt(b)[0] + 1;
        return Hs(B, pt(b)[0]);
      }
      return f;
    });
  }
  return {
    slideRegistry: d
  };
}
function uy(e, t, n, o, a) {
  const {
    reachedAny: r,
    removeOffset: l,
    constrain: i
  } = o;
  function u(f) {
    return f.concat().sort((g, b) => Ie(g) - Ie(b))[0];
  }
  function d(f) {
    const g = e ? l(f) : i(f), b = t.map((O, B) => ({
      diff: c(O - g, 0),
      index: B
    })).sort((O, B) => Ie(O.diff) - Ie(B.diff)), {
      index: C
    } = b[0];
    return {
      index: C,
      distance: g
    };
  }
  function c(f, g) {
    const b = [f, f + n, f - n];
    if (!e) return f;
    if (!g) return u(b);
    const C = b.filter((O) => Hr(O) === g);
    return C.length ? u(C) : pt(b) - n;
  }
  function p(f, g) {
    const b = t[f] - a.get(), C = c(b, g);
    return {
      index: f,
      distance: C
    };
  }
  function m(f, g) {
    const b = a.get() + f, {
      index: C,
      distance: O
    } = d(b), B = !e && r(b);
    if (!g || B) return {
      index: C,
      distance: f
    };
    const k = t[C] - O, $ = f + c(k, 0);
    return {
      index: C,
      distance: $
    };
  }
  return {
    byDistance: m,
    byIndex: p,
    shortcut: c
  };
}
function dy(e, t, n, o, a, r, l) {
  function i(p) {
    const m = p.distance, v = p.index !== t.get();
    r.add(m), m && (o.duration() ? e.start() : (e.update(), e.render(1), e.update())), v && (n.set(t.get()), t.set(p.index), l.emit("select"));
  }
  function u(p, m) {
    const v = a.byDistance(p, m);
    i(v);
  }
  function d(p, m) {
    const v = t.clone().set(p), f = a.byIndex(v.get(), m);
    i(f);
  }
  return {
    distance: u,
    index: d
  };
}
function cy(e, t, n, o, a, r, l, i) {
  const u = {
    passive: !0,
    capture: !0
  };
  let d = 0;
  function c(v) {
    if (!i) return;
    function f(g) {
      if ((/* @__PURE__ */ new Date()).getTime() - d > 10) return;
      l.emit("slideFocusStart"), e.scrollLeft = 0;
      const O = n.findIndex((B) => B.includes(g));
      Kr(O) && (a.useDuration(0), o.index(O, 0), l.emit("slideFocus"));
    }
    r.add(document, "keydown", p, !1), t.forEach((g, b) => {
      r.add(g, "focus", (C) => {
        (la(i) || i(v, C)) && f(b);
      }, u);
    });
  }
  function p(v) {
    v.code === "Tab" && (d = (/* @__PURE__ */ new Date()).getTime());
  }
  return {
    init: c
  };
}
function Hn(e) {
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
    return Kr(u) ? u : u.get();
  }
  return {
    get: n,
    set: o,
    add: a,
    subtract: r
  };
}
function Yi(e, t) {
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
    const v = Wh(e.direction(m));
    v !== a && (o.transform = n(v), a = v);
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
function py(e, t, n, o, a, r, l, i, u) {
  const c = Jn(a), p = Jn(a).reverse(), m = C().concat(O());
  function v(D, M) {
    return D.reduce((R, T) => R - a[T], M);
  }
  function f(D, M) {
    return D.reduce((R, T) => v(R, M) > 0 ? R.concat([T]) : R, []);
  }
  function g(D) {
    return r.map((M, R) => ({
      start: M - o[R] + 0.5 + D,
      end: M + t - 0.5 + D
    }));
  }
  function b(D, M, R) {
    const T = g(M);
    return D.map((L) => {
      const I = R ? 0 : -n, U = R ? n : 0, K = R ? "end" : "start", Y = T[L][K];
      return {
        index: L,
        loopPoint: Y,
        slideLocation: Hn(-1),
        translate: Yi(e, u[L]),
        target: () => i.get() > Y ? I : U
      };
    });
  }
  function C() {
    const D = l[0], M = f(p, D);
    return b(M, n, !1);
  }
  function O() {
    const D = t - l[0] - 1, M = f(c, D);
    return b(M, -n, !0);
  }
  function B() {
    return m.every(({
      index: D
    }) => {
      const M = c.filter((R) => R !== D);
      return v(M, t) <= 0.1;
    });
  }
  function k() {
    m.forEach((D) => {
      const {
        target: M,
        translate: R,
        slideLocation: T
      } = D, L = M();
      L !== T.get() && (R.to(L), T.set(L));
    });
  }
  function $() {
    m.forEach((D) => D.translate.clear());
  }
  return {
    canLoop: B,
    clear: $,
    loop: k,
    loopPoints: m
  };
}
function fy(e, t, n) {
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
      a || (la(n) || n(u, c)) && d(c);
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
function my(e, t, n, o) {
  const a = {};
  let r = null, l = null, i, u = !1;
  function d() {
    i = new IntersectionObserver((f) => {
      u || (f.forEach((g) => {
        const b = t.indexOf(g.target);
        a[b] = g;
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
    return eo(a).reduce((g, b) => {
      const C = parseInt(b), {
        isIntersecting: O
      } = a[C];
      return (f && O || !f && !O) && g.push(C), g;
    }, []);
  }
  function m(f = !0) {
    if (f && r) return r;
    if (!f && l) return l;
    const g = p(f);
    return f && (r = g), f || (l = g), g;
  }
  return {
    init: d,
    destroy: c,
    get: m
  };
}
function vy(e, t, n, o, a, r) {
  const {
    measureSize: l,
    startEdge: i,
    endEdge: u
  } = e, d = n[0] && a, c = f(), p = g(), m = n.map(l), v = b();
  function f() {
    if (!d) return 0;
    const O = n[0];
    return Ie(t[i] - O[i]);
  }
  function g() {
    if (!d) return 0;
    const O = r.getComputedStyle(pt(o));
    return parseFloat(O.getPropertyValue(`margin-${u}`));
  }
  function b() {
    return n.map((O, B, k) => {
      const $ = !B, P = Wr(k, B);
      return $ ? m[B] + c : P ? m[B] + p : k[B + 1][i] - O[i];
    }).map(Ie);
  }
  return {
    slideSizes: m,
    slideSizesWithGaps: v,
    startGap: c,
    endGap: p
  };
}
function gy(e, t, n, o, a, r, l, i, u) {
  const {
    startEdge: d,
    endEdge: c,
    direction: p
  } = e, m = Kr(n);
  function v(C, O) {
    return Jn(C).filter((B) => B % O === 0).map((B) => C.slice(B, B + O));
  }
  function f(C) {
    return C.length ? Jn(C).reduce((O, B, k) => {
      const $ = pt(O) || 0, P = $ === 0, D = B === mo(C), M = a[d] - r[$][d], R = a[d] - r[B][c], T = !o && P ? p(l) : 0, L = !o && D ? p(i) : 0, I = Ie(R - L - (M + T));
      return k && I > t + u && O.push(B), D && O.push(C.length), O;
    }, []).map((O, B, k) => {
      const $ = Math.max(k[B - 1] || 0);
      return C.slice($, O);
    }) : [];
  }
  function g(C) {
    return m ? v(C, n) : f(C);
  }
  return {
    groupSlides: g
  };
}
function hy(e, t, n, o, a, r, l) {
  const {
    align: i,
    axis: u,
    direction: d,
    startIndex: c,
    loop: p,
    duration: m,
    dragFree: v,
    dragThreshold: f,
    inViewThreshold: g,
    slidesToScroll: b,
    skipSnaps: C,
    containScroll: O,
    watchResize: B,
    watchSlides: k,
    watchDrag: $,
    watchFocus: P
  } = r, D = 2, M = Qh(), R = M.measure(t), T = n.map(M.measure), L = Yh(u, d), I = L.measureSize(R), U = Jh(I), K = Uh(i, I), Y = !p && !!O, H = p || !!O, {
    slideSizes: J,
    slideSizesWithGaps: Q,
    startGap: q,
    endGap: le
  } = vy(L, R, T, n, H, a), re = gy(L, I, b, p, R, T, q, le, D), {
    snaps: ke,
    snapsAligned: Me
  } = ly(L, K, R, T, re), Ve = -pt(ke) + pt(Q), {
    snapsContained: Ge,
    scrollContainLimit: nt
  } = oy(I, Ve, Me, O, D), j = Y ? Ge : Me, {
    limit: G
  } = ay(Ve, j, p), oe = Gi(mo(j), c, p), de = oe.clone(), fe = Jn(n), X = ({
    dragHandler: $t,
    scrollBody: it,
    scrollBounds: pn,
    options: {
      loop: fn
    }
  }) => {
    fn || pn.constrain($t.pointerDown()), it.seek();
  }, me = ({
    scrollBody: $t,
    translate: it,
    location: pn,
    offsetLocation: fn,
    previousLocation: Et,
    scrollLooper: mn,
    slideLooper: ho,
    dragHandler: xu,
    animation: Cu,
    eventHandler: ts,
    scrollBounds: Bu,
    options: {
      loop: ns
    }
  }, os) => {
    const as = $t.settled(), Ou = !Bu.shouldConstrain(), rs = ns ? as : as && Ou, ss = rs && !xu.pointerDown();
    ss && Cu.stop();
    const Su = pn.get() * os + Et.get() * (1 - os);
    fn.set(Su), ns && (mn.loop($t.direction()), ho.loop()), it.to(fn.get()), ss && ts.emit("settle"), rs || ts.emit("scroll");
  }, Be = Gh(o, a, () => X(Zt), ($t) => me(Zt, $t)), He = 0.68, ot = j[oe.get()], lt = Hn(ot), ne = Hn(ot), xe = Hn(ot), Oe = Hn(ot), we = ty(lt, xe, ne, Oe, m, He), Fe = uy(p, j, Ve, G, Oe), Ne = dy(Be, oe, de, we, Fe, Oe, l), Xe = sy(G), St = to(), cn = my(t, n, l, g), {
    slideRegistry: Xt
  } = iy(Y, O, j, nt, re, fe), go = cy(e, n, Xt, Ne, we, St, l, P), Zt = {
    ownerDocument: o,
    ownerWindow: a,
    eventHandler: l,
    containerRect: R,
    slideRects: T,
    animation: Be,
    axis: L,
    dragHandler: Xh(L, e, o, a, Oe, Zh(L, a), lt, Be, Ne, we, Fe, oe, l, U, v, f, C, He, $),
    eventStore: St,
    percentOfView: U,
    index: oe,
    indexPrevious: de,
    limit: G,
    location: lt,
    offsetLocation: xe,
    previousLocation: ne,
    options: r,
    resizeHandler: ey(t, l, a, n, L, B, M),
    scrollBody: we,
    scrollBounds: ny(G, xe, Oe, we, U),
    scrollLooper: ry(Ve, G, xe, [lt, xe, ne, Oe]),
    scrollProgress: Xe,
    scrollSnapList: j.map(Xe.get),
    scrollSnaps: j,
    scrollTarget: Fe,
    scrollTo: Ne,
    slideLooper: py(L, I, Ve, J, Q, ke, j, xe, n),
    slideFocus: go,
    slidesHandler: fy(t, l, k),
    slidesInView: cn,
    slideIndexes: fe,
    slideRegistry: Xt,
    slidesToScroll: re,
    target: Oe,
    translate: Yi(L, t)
  };
  return Zt;
}
function yy() {
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
const by = {
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
function wy(e) {
  function t(r, l) {
    return Ui(r, l || {});
  }
  function n(r) {
    const l = r.breakpoints || {}, i = eo(l).filter((u) => e.matchMedia(u).matches).map((u) => l[u]).reduce((u, d) => t(u, d), {});
    return t(r, i);
  }
  function o(r) {
    return r.map((l) => eo(l.breakpoints || {})).reduce((l, i) => l.concat(i), []).map(e.matchMedia);
  }
  return {
    mergeOptions: t,
    optionsAtMedia: n,
    optionsMediaQueries: o
  };
}
function _y(e) {
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
function No(e, t, n) {
  const o = e.ownerDocument, a = o.defaultView, r = wy(a), l = _y(r), i = to(), u = yy(), {
    mergeOptions: d,
    optionsAtMedia: c,
    optionsMediaQueries: p
  } = r, {
    on: m,
    off: v,
    emit: f
  } = u, g = L;
  let b = !1, C, O = d(by, No.globalOptions), B = d(O), k = [], $, P, D;
  function M() {
    const {
      container: fe,
      slides: X
    } = B;
    P = (Ha(fe) ? e.querySelector(fe) : fe) || e.children[0];
    const Be = Ha(X) ? P.querySelectorAll(X) : X;
    D = [].slice.call(Be || P.children);
  }
  function R(fe) {
    const X = hy(e, P, D, o, a, fe, u);
    if (fe.loop && !X.slideLooper.canLoop()) {
      const me = Object.assign({}, fe, {
        loop: !1
      });
      return R(me);
    }
    return X;
  }
  function T(fe, X) {
    b || (O = d(O, fe), B = c(O), k = X || k, M(), C = R(B), p([O, ...k.map(({
      options: me
    }) => me)]).forEach((me) => i.add(me, "change", L)), B.active && (C.translate.to(C.location.get()), C.animation.init(), C.slidesInView.init(), C.slideFocus.init(de), C.eventHandler.init(de), C.resizeHandler.init(de), C.slidesHandler.init(de), C.options.loop && C.slideLooper.loop(), P.offsetParent && D.length && C.dragHandler.init(de), $ = l.init(de, k)));
  }
  function L(fe, X) {
    const me = re();
    I(), T(d({
      startIndex: me
    }, fe), X), u.emit("reInit");
  }
  function I() {
    C.dragHandler.destroy(), C.eventStore.clear(), C.translate.clear(), C.slideLooper.clear(), C.resizeHandler.destroy(), C.slidesHandler.destroy(), C.slidesInView.destroy(), C.animation.destroy(), l.destroy(), i.clear();
  }
  function U() {
    b || (b = !0, i.clear(), I(), u.emit("destroy"), u.clear());
  }
  function K(fe, X, me) {
    !B.active || b || (C.scrollBody.useBaseFriction().useDuration(X === !0 ? 0 : B.duration), C.scrollTo.index(fe, me || 0));
  }
  function Y(fe) {
    const X = C.index.add(1).get();
    K(X, fe, -1);
  }
  function H(fe) {
    const X = C.index.add(-1).get();
    K(X, fe, 1);
  }
  function J() {
    return C.index.add(1).get() !== re();
  }
  function Q() {
    return C.index.add(-1).get() !== re();
  }
  function q() {
    return C.scrollSnapList;
  }
  function le() {
    return C.scrollProgress.get(C.offsetLocation.get());
  }
  function re() {
    return C.index.get();
  }
  function ke() {
    return C.indexPrevious.get();
  }
  function Me() {
    return C.slidesInView.get();
  }
  function Ve() {
    return C.slidesInView.get(!1);
  }
  function Ge() {
    return $;
  }
  function nt() {
    return C;
  }
  function j() {
    return e;
  }
  function G() {
    return P;
  }
  function oe() {
    return D;
  }
  const de = {
    canScrollNext: J,
    canScrollPrev: Q,
    containerNode: G,
    internalEngine: nt,
    destroy: U,
    off: v,
    on: m,
    emit: f,
    plugins: Ge,
    previousScrollSnap: ke,
    reInit: g,
    rootNode: j,
    scrollNext: Y,
    scrollPrev: H,
    scrollProgress: le,
    scrollSnapList: q,
    scrollTo: K,
    selectedScrollSnap: re,
    slideNodes: oe,
    slidesInView: Me,
    slidesNotInView: Ve
  };
  return T(t, n), setTimeout(() => u.emit("init"), 0), de;
}
No.globalOptions = void 0;
function Ur(e = {}, t = []) {
  const n = at(e), o = at(t);
  let a = n ? e.value : e, r = o ? t.value : t;
  const l = Cn(), i = Cn();
  function u() {
    i.value && i.value.reInit(a, r);
  }
  return se(() => {
    !jh() || !l.value || (No.globalOptions = Ur.globalOptions, i.value = No(l.value, a, r));
  }), kn(() => {
    i.value && i.value.destroy();
  }), n && te(e, (d) => {
    jr(a, d) || (a = d, u());
  }), o && te(t, (d) => {
    Kh(r, d) || (r = d, u());
  }), [l, i];
}
Ur.globalOptions = void 0;
const [xy, Cy] = Ph(
  ({ opts: e, orientation: t, plugins: n }, o) => {
    const [a, r] = Ur(
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
    return se(() => {
      var p, m, v;
      r.value && ((p = r.value) == null || p.on("init", c), (m = r.value) == null || m.on("reInit", c), (v = r.value) == null || v.on("select", c), o("init-api", r.value));
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
function ia() {
  const e = Cy();
  if (!e) throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const H_ = /* @__PURE__ */ w({
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
    } = xy(o, a);
    t({
      canScrollNext: r,
      canScrollPrev: l,
      carouselApi: i,
      carouselRef: u,
      orientation: d,
      scrollNext: c,
      scrollPrev: p
    });
    function m(v) {
      const f = o.orientation === "vertical" ? "ArrowUp" : "ArrowLeft", g = o.orientation === "vertical" ? "ArrowDown" : "ArrowRight";
      if (v.key === f) {
        v.preventDefault(), p();
        return;
      }
      v.key === g && (v.preventDefault(), c());
    }
    return (v, f) => (h(), z("div", {
      class: ue(s(V)("relative", o.class)),
      role: "region",
      "aria-roledescription": "carousel",
      tabindex: "0",
      onKeydown: m
    }, [
      _(v.$slots, "default", {
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
}), W_ = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "CarouselContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { carouselRef: n, orientation: o } = ia();
    return (a, r) => (h(), z("div", {
      ref_key: "carouselRef",
      ref: n,
      class: "overflow-hidden"
    }, [
      he("div", A({
        class: s(V)("flex", s(o) === "horizontal" ? "-ml-4" : "-mt-4 flex-col", t.class)
      }, a.$attrs), [
        _(a.$slots, "default")
      ], 16)
    ], 512));
  }
}), U_ = /* @__PURE__ */ w({
  __name: "CarouselItem",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { orientation: n } = ia();
    return (o, a) => (h(), z("div", {
      role: "group",
      "aria-roledescription": "slide",
      class: ue(
        s(V)(
          "min-w-0 shrink-0 grow-0 basis-full",
          s(n) === "horizontal" ? "pl-4" : "pt-4",
          t.class
        )
      )
    }, [
      _(o.$slots, "default")
    ], 2));
  }
}), G_ = /* @__PURE__ */ w({
  __name: "CarouselPrevious",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { orientation: n, canScrollPrev: o, scrollPrev: a } = ia();
    return (r, l) => (h(), x(s(Hi), {
      disabled: !s(o),
      class: ue(
        s(V)(
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
          F(s(Zg), { class: "size-4 text-current" }),
          l[0] || (l[0] = he("span", { class: "sr-only" }, "Previous Slide", -1))
        ])
      ]),
      _: 3
    }, 8, ["disabled", "class", "onClick"]));
  }
}), Y_ = /* @__PURE__ */ w({
  __name: "CarouselNext",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { orientation: n, canScrollNext: o, scrollNext: a } = ia();
    return (r, l) => (h(), x(s(Hi), {
      disabled: !s(o),
      class: ue(
        s(V)(
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
          F(s(Qg), { class: "size-4 text-current" }),
          l[0] || (l[0] = he("span", { class: "sr-only" }, "Next Slide", -1))
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
const By = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Oo = {
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
const Oy = ({ size: e, strokeWidth: t = 2, absoluteStrokeWidth: n, color: o, iconNode: a, name: r, class: l, ...i }, { slots: u }) => Ue(
  "svg",
  {
    ...Oo,
    width: e || Oo.width,
    height: e || Oo.height,
    stroke: o || Oo.stroke,
    "stroke-width": n ? Number(t) * 24 / Number(e) : t,
    class: ["lucide", `lucide-${By(r ?? "icon")}`],
    ...i
  },
  [...a.map((d) => Ue(...d)), ...u.default ? [u.default()] : []]
);
/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sy = (e, t) => (n, { slots: o }) => Ue(
  Oy,
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
const $y = Sy("CheckIcon", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
function Ws(e) {
  return typeof e == "string" ? `'${e}'` : new Ey().serialize(e);
}
const Ey = /* @__PURE__ */ function() {
  var t;
  class e {
    constructor() {
      is(this, t, /* @__PURE__ */ new Map());
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
      let a = qn(this, t).get(o);
      return a === void 0 && (qn(this, t).set(o, `#${qn(this, t).size}`), a = this.serializeObject(o), qn(this, t).set(o, a)), a;
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
function En(e, t) {
  return e === t || Ws(e) === Ws(t);
}
function Dy(e, t, n) {
  const o = e.findIndex((i) => En(i, t)), a = e.findIndex((i) => En(i, n));
  if (o === -1 || a === -1) return [];
  const [r, l] = [o, a].sort((i, u) => i - u);
  return e.slice(r, l + 1);
}
function Ye(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, o = Symbol(n);
  return [(l) => {
    const i = oo(o, l);
    if (i || i === null) return i;
    throw new Error(`Injection \`${o.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(", ")}` : `\`${e}\``}`);
  }, (l) => (ao(o, l), l)];
}
function ft() {
  let e = document.activeElement;
  if (e == null) return null;
  for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null; ) e = e.shadowRoot.activeElement;
  return e;
}
function Gr(e, t, n) {
  const o = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, { once: !0 }), o.dispatchEvent(a);
}
function Ua(e) {
  return e == null;
}
function Us(e, t) {
  return Ua(e) ? !1 : Array.isArray(e) ? e.some((n) => En(n, t)) : En(e, t);
}
function Yr(e) {
  return e ? e.flatMap((t) => t.type === Ae ? Yr(t.children) : [t]) : [];
}
const [ua, X_] = Ye("ConfigProvider");
function ky(e, t) {
  var n;
  const o = Cn();
  return be(() => {
    o.value = e();
  }, {
    ...t,
    flush: (n = void 0) != null ? n : "sync"
  }), jo(o);
}
function da(e) {
  return Za() ? (Qa(e), !0) : !1;
}
function To() {
  const e = /* @__PURE__ */ new Set(), t = (r) => {
    e.delete(r);
  };
  return {
    on: (r) => {
      e.add(r);
      const l = () => t(r);
      return da(l), {
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
function Ay(e) {
  let t = !1, n;
  const o = Ko(!0);
  return (...a) => (t || (n = o.run(() => e(...a)), t = !0), n);
}
function Ty(e) {
  let t = 0, n, o;
  const a = () => {
    t -= 1, o && t <= 0 && (o.stop(), n = void 0, o = void 0);
  };
  return (...r) => (t += 1, o || (o = Ko(!0), n = o.run(() => e(...r))), da(a), n);
}
const un = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Py = (e) => typeof e < "u", Iy = Object.prototype.toString, My = (e) => Iy.call(e) === "[object Object]", Gs = /* @__PURE__ */ Fy();
function Fy() {
  var e, t;
  return un && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function Ry(e) {
  return We();
}
function $a(e) {
  return Array.isArray(e) ? e : [e];
}
function Xi(e, t = 1e4) {
  return dl((n, o) => {
    let a = Qe(e), r;
    const l = () => setTimeout(() => {
      a = Qe(e), o();
    }, Qe(t));
    return da(() => {
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
const Ly = Qe;
function Vy(e, t) {
  Ry() && kn(e, t);
}
function Ny(e, t, n) {
  return te(
    e,
    t,
    {
      ...n,
      immediate: !0
    }
  );
}
const Xr = un ? window : void 0;
function dn(e) {
  var t;
  const n = Qe(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
function Zr(...e) {
  const t = [], n = () => {
    t.forEach((i) => i()), t.length = 0;
  }, o = (i, u, d, c) => (i.addEventListener(u, d, c), () => i.removeEventListener(u, d, c)), a = S(() => {
    const i = $a(Qe(e[0])).filter((u) => u != null);
    return i.every((u) => typeof u != "string") ? i : void 0;
  }), r = Ny(
    () => {
      var i, u;
      return [
        (u = (i = a.value) == null ? void 0 : i.map((d) => dn(d))) != null ? u : [Xr].filter((d) => d != null),
        $a(Qe(a.value ? e[1] : e[0])),
        $a(s(a.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        Qe(a.value ? e[3] : e[2])
      ];
    },
    ([i, u, d, c]) => {
      if (n(), !(i != null && i.length) || !(u != null && u.length) || !(d != null && d.length))
        return;
      const p = My(c) ? { ...c } : c;
      t.push(
        ...i.flatMap(
          (m) => u.flatMap(
            (v) => d.map((f) => o(m, v, f, p))
          )
        )
      );
    },
    { flush: "post" }
  ), l = () => {
    r(), n();
  };
  return da(n), l;
}
function qy() {
  const e = Cn(!1), t = We();
  return t && se(() => {
    e.value = !0;
  }, t), e;
}
function zy(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function jy(...e) {
  let t, n, o = {};
  e.length === 3 ? (t = e[0], n = e[1], o = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], o = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: a = Xr,
    eventName: r = "keydown",
    passive: l = !1,
    dedupe: i = !1
  } = o, u = zy(t);
  return Zr(a, r, (c) => {
    c.repeat && Qe(i) || u(c) && n(c);
  }, l);
}
function Ky(e) {
  return JSON.parse(JSON.stringify(e));
}
function Wt(e, t, n, o = {}) {
  var a, r, l;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: c = !1,
    defaultValue: p,
    shouldEmit: m
  } = o, v = We(), f = n || (v == null ? void 0 : v.emit) || ((a = v == null ? void 0 : v.$emit) == null ? void 0 : a.bind(v)) || ((l = (r = v == null ? void 0 : v.proxy) == null ? void 0 : r.$emit) == null ? void 0 : l.bind(v == null ? void 0 : v.proxy));
  let g = d;
  t || (t = "modelValue"), g = g || `update:${t.toString()}`;
  const b = (B) => i ? typeof i == "function" ? i(B) : Ky(B) : B, C = () => Py(e[t]) ? b(e[t]) : p, O = (B) => {
    m ? m(B) && f(g, B) : f(g, B);
  };
  if (u) {
    const B = C(), k = E(B);
    let $ = !1;
    return te(
      () => e[t],
      (P) => {
        $ || ($ = !0, k.value = b(P), ae(() => $ = !1));
      }
    ), te(
      k,
      (P) => {
        !$ && (P !== e[t] || c) && O(P);
      },
      { deep: c }
    ), k;
  } else
    return S({
      get() {
        return C();
      },
      set(B) {
        O(B);
      }
    });
}
function Ea(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function Ga(e, t, n = ".", o) {
  if (!Ea(t))
    return Ga(e, {}, n, o);
  const a = Object.assign({}, t);
  for (const r in e) {
    if (r === "__proto__" || r === "constructor")
      continue;
    const l = e[r];
    l != null && (o && o(a, r, l, n) || (Array.isArray(l) && Array.isArray(a[r]) ? a[r] = [...l, ...a[r]] : Ea(l) && Ea(a[r]) ? a[r] = Ga(
      l,
      a[r],
      (n ? `${n}.` : "") + r.toString(),
      o
    ) : a[r] = l));
  }
  return a;
}
function Hy(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, o) => Ga(n, o, "", e), {})
  );
}
const Wy = Hy(), Uy = Ty(() => {
  const e = E(/* @__PURE__ */ new Map()), t = E(), n = S(() => {
    for (const l of e.value.values()) if (l) return !0;
    return !1;
  }), o = ua({ scrollBody: E(!0) });
  let a = null;
  const r = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.documentElement.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", Gs && (a == null || a()), t.value = void 0;
  };
  return te(n, (l, i) => {
    var p;
    if (!un) return;
    if (!l) {
      i && r();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const u = window.innerWidth - document.documentElement.clientWidth, d = {
      padding: u,
      margin: 0
    }, c = (p = o.scrollBody) != null && p.value ? typeof o.scrollBody.value == "object" ? Wy({
      padding: o.scrollBody.value.padding === !0 ? u : o.scrollBody.value.padding,
      margin: o.scrollBody.value.margin === !0 ? u : o.scrollBody.value.margin
    }, d) : d : {
      padding: 0,
      margin: 0
    };
    u > 0 && (document.body.style.paddingRight = typeof c.padding == "number" ? `${c.padding}px` : String(c.padding), document.body.style.marginRight = typeof c.margin == "number" ? `${c.margin}px` : String(c.margin), document.documentElement.style.setProperty("--scrollbar-width", `${u}px`), document.body.style.overflow = "hidden"), Gs && (a = Zr(document, "touchmove", (m) => Gy(m), { passive: !1 })), ae(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, {
    immediate: !0,
    flush: "sync"
  }), e;
});
function Zi(e) {
  const t = Math.random().toString(36).substring(2, 7), n = Uy();
  n.value.set(t, e ?? !1);
  const o = S({
    get: () => n.value.get(t) ?? !1,
    set: (a) => n.value.set(t, a)
  });
  return Vy(() => {
    n.value.delete(t);
  }), o;
}
function Qi(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight) return !0;
  {
    const n = e.parentNode;
    return !(n instanceof Element) || n.tagName === "BODY" ? !1 : Qi(n);
  }
}
function Gy(e) {
  const t = e || window.event, n = t.target;
  return n instanceof Element && Qi(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
function Ji(e) {
  const t = ua({ dir: E("ltr") });
  return S(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.dir) == null ? void 0 : n.value) || "ltr";
  });
}
function ca(e) {
  const t = We(), n = t == null ? void 0 : t.type.emits, o = {};
  return n != null && n.length || console.warn(`No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`), n == null || n.forEach((a) => {
    o[ll(zo(a))] = (...r) => e(a, ...r);
  }), o;
}
function Yy(e) {
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
function eu(e) {
  return S(() => {
    var t;
    return Ly(e) ? !!((t = dn(e)) != null && t.closest("form")) : !0;
  });
}
function Ce() {
  const e = We(), t = E(), n = S(() => {
    var l, i;
    return ["#text", "#comment"].includes((l = t.value) == null ? void 0 : l.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : dn(t);
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
function Qr(e) {
  const t = We(), n = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((a, r) => {
    const l = (t == null ? void 0 : t.type.props[r]).default;
    return l !== void 0 && (a[r] = l), a;
  }, {}), o = al(e);
  return S(() => {
    const a = {}, r = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(r).forEach((l) => {
      a[zo(l)] = r[l];
    }), Object.keys({
      ...n,
      ...a
    }).reduce((l, i) => (o.value[i] !== void 0 && (l[i] = o.value[i]), l), {});
  });
}
function Ft(e, t) {
  const n = Qr(e), o = t ? ca(t) : {};
  return S(() => ({
    ...n.value,
    ...o
  }));
}
var Xy = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, hn = /* @__PURE__ */ new WeakMap(), So = /* @__PURE__ */ new WeakMap(), $o = {}, Da = 0, tu = function(e) {
  return e && (e.host || tu(e.parentNode));
}, Zy = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = tu(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Qy = function(e, t, n, o) {
  var a = Zy(t, Array.isArray(e) ? e : [e]);
  $o[n] || ($o[n] = /* @__PURE__ */ new WeakMap());
  var r = $o[n], l = [], i = /* @__PURE__ */ new Set(), u = new Set(a), d = function(p) {
    !p || i.has(p) || (i.add(p), d(p.parentNode));
  };
  a.forEach(d);
  var c = function(p) {
    !p || u.has(p) || Array.prototype.forEach.call(p.children, function(m) {
      if (i.has(m))
        c(m);
      else
        try {
          var v = m.getAttribute(o), f = v !== null && v !== "false", g = (hn.get(m) || 0) + 1, b = (r.get(m) || 0) + 1;
          hn.set(m, g), r.set(m, b), l.push(m), g === 1 && f && So.set(m, !0), b === 1 && m.setAttribute(n, "true"), f || m.setAttribute(o, "true");
        } catch (C) {
          console.error("aria-hidden: cannot operate on ", m, C);
        }
    });
  };
  return c(t), i.clear(), Da++, function() {
    l.forEach(function(p) {
      var m = hn.get(p) - 1, v = r.get(p) - 1;
      hn.set(p, m), r.set(p, v), m || (So.has(p) || p.removeAttribute(o), So.delete(p)), v || p.removeAttribute(n);
    }), Da--, Da || (hn = /* @__PURE__ */ new WeakMap(), hn = /* @__PURE__ */ new WeakMap(), So = /* @__PURE__ */ new WeakMap(), $o = {});
  };
}, Jy = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), a = Xy(e);
  return a ? (o.push.apply(o, Array.from(a.querySelectorAll("[aria-live], script"))), Qy(o, a, n, "aria-hidden")) : function() {
    return null;
  };
};
function nu(e) {
  let t;
  te(() => dn(e), (n) => {
    n ? t = Jy(n) : t && t();
  }), Ke(() => {
    t && t();
  });
}
let e0 = 0;
function gt(e, t = "reka") {
  var o;
  if ("useId" in bn) return `${t}-${(o = bn.useId) == null ? void 0 : o.call(bn)}`;
  const n = ua({ useId: void 0 });
  return n.useId ? `${t}-${n.useId()}` : `${t}-${++e0}`;
}
function t0() {
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
function n0(e) {
  const t = E(), n = S(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.width) ?? 0;
  }), o = S(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.height) ?? 0;
  });
  return se(() => {
    const a = dn(e);
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
function o0(e, t) {
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
function a0(e) {
  const t = Xi("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (a, r) => {
      t.value = t.value + a;
      {
        const l = ft(), i = r.map((m) => {
          var v, f;
          return {
            ...m,
            textValue: ((v = m.value) == null ? void 0 : v.textValue) ?? ((f = m.ref.textContent) == null ? void 0 : f.trim()) ?? ""
          };
        }), u = i.find((m) => m.ref === l), d = i.map((m) => m.textValue), c = s0(d, t.value, u == null ? void 0 : u.textValue), p = i.find((m) => m.textValue === c);
        return p && p.ref.focus(), p == null ? void 0 : p.ref;
      }
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function r0(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
function s0(e, t, n) {
  const a = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, r = n ? e.indexOf(n) : -1;
  let l = r0(e, Math.max(r, 0));
  a.length === 1 && (l = l.filter((d) => d !== n));
  const u = l.find((d) => d.toLowerCase().startsWith(a.toLowerCase()));
  return u !== n ? u : void 0;
}
function l0(e, t) {
  var b;
  const n = E({}), o = E("none"), a = E(e), r = e.value ? "mounted" : "unmounted";
  let l;
  const i = ((b = t.value) == null ? void 0 : b.ownerDocument.defaultView) ?? Xr, { state: u, dispatch: d } = o0(r, {
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
    var O;
    if (un) {
      const B = new CustomEvent(C, {
        bubbles: !1,
        cancelable: !1
      });
      (O = t.value) == null || O.dispatchEvent(B);
    }
  };
  te(e, async (C, O) => {
    var k;
    const B = O !== C;
    if (await ae(), B) {
      const $ = o.value, P = Eo(t.value);
      C ? (d("MOUNT"), c("enter"), P === "none" && c("after-enter")) : P === "none" || P === "undefined" || ((k = n.value) == null ? void 0 : k.display) === "none" ? (d("UNMOUNT"), c("leave"), c("after-leave")) : O && $ !== P ? (d("ANIMATION_OUT"), c("leave")) : (d("UNMOUNT"), c("after-leave"));
    }
  }, { immediate: !0 });
  const p = (C) => {
    const O = Eo(t.value), B = O.includes(C.animationName), k = u.value === "mounted" ? "enter" : "leave";
    if (C.target === t.value && B && (c(`after-${k}`), d("ANIMATION_END"), !a.value)) {
      const $ = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", l = i == null ? void 0 : i.setTimeout(() => {
        var P;
        ((P = t.value) == null ? void 0 : P.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = $);
      });
    }
    C.target === t.value && O === "none" && d("ANIMATION_END");
  }, m = (C) => {
    C.target === t.value && (o.value = Eo(t.value));
  }, v = te(t, (C, O) => {
    C ? (n.value = getComputedStyle(C), C.addEventListener("animationstart", m), C.addEventListener("animationcancel", p), C.addEventListener("animationend", p)) : (d("ANIMATION_END"), l !== void 0 && (i == null || i.clearTimeout(l)), O == null || O.removeEventListener("animationstart", m), O == null || O.removeEventListener("animationcancel", p), O == null || O.removeEventListener("animationend", p));
  }, { immediate: !0 }), f = te(u, () => {
    const C = Eo(t.value);
    o.value = u.value === "mounted" ? C : "none";
  });
  return Ke(() => {
    v(), f();
  }), { isPresent: S(() => ["mounted", "unmountSuspended"].includes(u.value)) };
}
function Eo(e) {
  return e && getComputedStyle(e).animationName || "none";
}
var vo = w({
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
    const { present: o, forceMount: a } = ye(e), r = E(), { isPresent: l } = l0(o, r);
    n({ present: l });
    let i = t.default({ present: l.value });
    i = Yr(i || []);
    const u = We();
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
    return () => a.value || o.value || l.value ? Ue(t.default({ present: l.value })[0], { ref: (c) => {
      const p = dn(c);
      return typeof (p == null ? void 0 : p.hasAttribute) > "u" || (p != null && p.hasAttribute("data-reka-popper-content-wrapper") ? r.value = p.firstElementChild : r.value = p), p;
    } }) : null;
  }
});
const Ya = w({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      var u;
      if (!n.default) return null;
      const o = Yr(n.default()), a = o.findIndex((d) => d.type !== tr);
      if (a === -1) return o;
      const r = o[a];
      (u = r.props) == null || delete u.ref;
      const l = r.props ? A(t, r.props) : t, i = il({
        ...r,
        props: {}
      }, l);
      return o.length === 1 ? i : (o[a] = i, o);
    };
  }
}), i0 = [
  "area",
  "img",
  "input"
], _e = w({
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
    return typeof o == "string" && i0.includes(o) ? () => Ue(o, t) : o !== "template" ? () => Ue(e.as, t, { default: n.default }) : () => Ue(Ya, t, { default: n.default });
  }
});
function Ut() {
  const e = E(), t = S(() => {
    var n, o;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (o = e.value) == null ? void 0 : o.$el.nextElementSibling : dn(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
const [ou, u0] = Ye("CollapsibleRoot");
var d0 = /* @__PURE__ */ w({
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
    const o = e, r = Wt(o, "open", n, {
      defaultValue: o.defaultOpen,
      passive: o.open === void 0
    }), { disabled: l, unmountOnHide: i } = ye(o);
    return u0({
      contentId: "",
      disabled: l,
      open: r,
      unmountOnHide: i,
      onOpenToggle: () => {
        l.value || (r.value = !r.value);
      }
    }), t({ open: r }), Ce(), (u, d) => (h(), x(s(_e), {
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
}), c0 = d0, p0 = /* @__PURE__ */ w({
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
    const n = e, o = t, a = ou();
    a.contentId || (a.contentId = gt(void 0, "reka-collapsible-content"));
    const r = E(), { forwardRef: l, currentElement: i } = Ce(), u = E(0), d = E(0), c = S(() => a.open.value), p = E(c.value), m = E();
    te(() => {
      var f;
      return [c.value, (f = r.value) == null ? void 0 : f.present];
    }, async () => {
      await ae();
      const f = i.value;
      if (!f) return;
      m.value = m.value || {
        transitionDuration: f.style.transitionDuration,
        animationName: f.style.animationName
      }, f.style.transitionDuration = "0s", f.style.animationName = "none";
      const g = f.getBoundingClientRect();
      d.value = g.height, u.value = g.width, p.value || (f.style.transitionDuration = m.value.transitionDuration, f.style.animationName = m.value.animationName);
    }, { immediate: !0 });
    const v = S(() => p.value && a.open.value);
    return se(() => {
      requestAnimationFrame(() => {
        p.value = !1;
      });
    }), Zr(i, "beforematch", (f) => {
      requestAnimationFrame(() => {
        a.onOpenToggle(), o("contentFound");
      });
    }), (f, g) => (h(), x(s(vo), {
      ref_key: "presentRef",
      ref: r,
      present: f.forceMount || s(a).open.value,
      "force-mount": !0
    }, {
      default: y(({ present: b }) => {
        var C;
        return [F(s(_e), A(f.$attrs, {
          id: s(a).contentId,
          ref: s(l),
          "as-child": n.asChild,
          as: f.as,
          hidden: b ? void 0 : s(a).unmountOnHide.value ? "" : "until-found",
          "data-state": v.value ? void 0 : s(a).open.value ? "open" : "closed",
          "data-disabled": (C = s(a).disabled) != null && C.value ? "" : void 0,
          style: {
            "--reka-collapsible-content-height": `${d.value}px`,
            "--reka-collapsible-content-width": `${u.value}px`
          }
        }), {
          default: y(() => [!s(a).unmountOnHide.value || b ? _(f.$slots, "default", { key: 0 }) : ge("v-if", !0)]),
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
}), f0 = p0, m0 = /* @__PURE__ */ w({
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
    Ce();
    const n = ou();
    return (o, a) => {
      var r, l;
      return h(), x(s(_e), {
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
}), v0 = m0;
const [Ot, g0] = Ye("DialogRoot");
var h0 = /* @__PURE__ */ w({
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
    const n = e, a = Wt(n, "open", t, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), r = E(), l = E(), { modal: i } = ye(n);
    return g0({
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
}), y0 = h0, b0 = /* @__PURE__ */ w({
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
    Ce();
    const n = Ot();
    return (o, a) => (h(), x(s(_e), A(t, {
      type: o.as === "button" ? "button" : void 0,
      onClick: a[0] || (a[0] = (r) => s(n).onOpenChange(!1))
    }), {
      default: y(() => [_(o.$slots, "default")]),
      _: 3
    }, 16, ["type"]));
  }
}), w0 = b0;
const _0 = "dismissableLayer.pointerDownOutside", x0 = "dismissableLayer.focusOutside";
function au(e, t) {
  const n = t.closest("[data-dismissable-layer]"), o = e.dataset.dismissableLayer === "" ? e : e.querySelector("[data-dismissable-layer]"), a = Array.from(e.ownerDocument.querySelectorAll("[data-dismissable-layer]"));
  return !!(n && (o === n || a.indexOf(o) < a.indexOf(n)));
}
function C0(e, t, n = !0) {
  var l;
  const o = ((l = t == null ? void 0 : t.value) == null ? void 0 : l.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), a = E(!1), r = E(() => {
  });
  return be((i) => {
    if (!un || !Qe(n)) return;
    const u = async (c) => {
      const p = c.target;
      if (!(!(t != null && t.value) || !p)) {
        if (au(t.value, p)) {
          a.value = !1;
          return;
        }
        if (c.target && !a.value) {
          let v = function() {
            Gr(_0, e, m);
          };
          const m = { originalEvent: c };
          c.pointerType === "touch" ? (o.removeEventListener("click", r.value), r.value = v, o.addEventListener("click", r.value, { once: !0 })) : v();
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
    Qe(n) && (a.value = !0);
  } };
}
function B0(e, t, n = !0) {
  var r;
  const o = ((r = t == null ? void 0 : t.value) == null ? void 0 : r.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), a = E(!1);
  return be((l) => {
    if (!un || !Qe(n)) return;
    const i = async (u) => {
      if (!(t != null && t.value)) return;
      await ae(), await ae();
      const d = u.target;
      !t.value || !d || au(t.value, d) || u.target && !a.value && Gr(x0, e, { originalEvent: u });
    };
    o.addEventListener("focusin", i), l(() => o.removeEventListener("focusin", i));
  }), {
    onFocusCapture: () => {
      Qe(n) && (a.value = !0);
    },
    onBlurCapture: () => {
      Qe(n) && (a.value = !1);
    }
  };
}
const At = Bn({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
});
var O0 = /* @__PURE__ */ w({
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
    const n = e, o = t, { forwardRef: a, currentElement: r } = Ce(), l = S(() => {
      var f;
      return ((f = r.value) == null ? void 0 : f.ownerDocument) ?? globalThis.document;
    }), i = S(() => At.layersRoot), u = S(() => r.value ? Array.from(i.value).indexOf(r.value) : -1), d = S(() => At.layersWithOutsidePointerEventsDisabled.size > 0), c = S(() => {
      const f = Array.from(i.value), [g] = [...At.layersWithOutsidePointerEventsDisabled].slice(-1), b = f.indexOf(g);
      return u.value >= b;
    }), p = C0(async (f) => {
      const g = [...At.branches].some((b) => b == null ? void 0 : b.contains(f.target));
      !c.value || g || (o("pointerDownOutside", f), o("interactOutside", f), await ae(), f.defaultPrevented || o("dismiss"));
    }, r), m = B0((f) => {
      [...At.branches].some((b) => b == null ? void 0 : b.contains(f.target)) || (o("focusOutside", f), o("interactOutside", f), f.defaultPrevented || o("dismiss"));
    }, r);
    jy("Escape", (f) => {
      u.value === i.value.size - 1 && (o("escapeKeyDown", f), f.defaultPrevented || o("dismiss"));
    });
    let v;
    return be((f) => {
      r.value && (n.disableOutsidePointerEvents && (At.layersWithOutsidePointerEventsDisabled.size === 0 && (v = l.value.body.style.pointerEvents, l.value.body.style.pointerEvents = "none"), At.layersWithOutsidePointerEventsDisabled.add(r.value)), i.value.add(r.value), f(() => {
        n.disableOutsidePointerEvents && At.layersWithOutsidePointerEventsDisabled.size === 1 && (l.value.body.style.pointerEvents = v);
      }));
    }), be((f) => {
      f(() => {
        r.value && (i.value.delete(r.value), At.layersWithOutsidePointerEventsDisabled.delete(r.value));
      });
    }), (f, g) => (h(), x(s(_e), {
      ref: s(a),
      "as-child": f.asChild,
      as: f.as,
      "data-dismissable-layer": "",
      style: wt({ pointerEvents: d.value ? c.value ? "auto" : "none" : void 0 }),
      onFocusCapture: s(m).onFocusCapture,
      onBlurCapture: s(m).onBlurCapture,
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
}), ru = O0;
const S0 = Ay(() => E([]));
function $0() {
  const e = S0();
  return {
    add(t) {
      const n = e.value[0];
      t !== n && (n == null || n.pause()), e.value = Ys(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var n;
      e.value = Ys(e.value, t), (n = e.value[0]) == null || n.resume();
    }
  };
}
function Ys(e, t) {
  const n = [...e], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function E0(e) {
  return e.filter((t) => t.tagName !== "A");
}
const ka = "focusScope.autoFocusOnMount", Aa = "focusScope.autoFocusOnUnmount", Xs = {
  bubbles: !1,
  cancelable: !0
};
function D0(e, { select: t = !1 } = {}) {
  const n = ft();
  for (const o of e)
    if (zt(o, { select: t }), ft() !== n) return !0;
}
function k0(e) {
  const t = su(e), n = Zs(t, e), o = Zs(t.reverse(), e);
  return [n, o];
}
function su(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (o) => {
    const a = o.tagName === "INPUT" && o.type === "hidden";
    return o.disabled || o.hidden || a ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Zs(e, t) {
  for (const n of e) if (!A0(n, { upTo: t })) return n;
}
function A0(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function T0(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function zt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = ft();
    e.focus({ preventScroll: !0 }), e !== n && T0(e) && t && e.select();
  }
}
var P0 = /* @__PURE__ */ w({
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
    const n = e, o = t, { currentRef: a, currentElement: r } = Ce(), l = E(null), i = $0(), u = Bn({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    be((c) => {
      if (!un) return;
      const p = r.value;
      if (!n.trapped) return;
      function m(b) {
        if (u.paused || !p) return;
        const C = b.target;
        p.contains(C) ? l.value = C : zt(l.value, { select: !0 });
      }
      function v(b) {
        if (u.paused || !p) return;
        const C = b.relatedTarget;
        C !== null && (p.contains(C) || zt(l.value, { select: !0 }));
      }
      function f(b) {
        p.contains(l.value) || zt(p);
      }
      document.addEventListener("focusin", m), document.addEventListener("focusout", v);
      const g = new MutationObserver(f);
      p && g.observe(p, {
        childList: !0,
        subtree: !0
      }), c(() => {
        document.removeEventListener("focusin", m), document.removeEventListener("focusout", v), g.disconnect();
      });
    }), be(async (c) => {
      const p = r.value;
      if (await ae(), !p) return;
      i.add(u);
      const m = ft();
      if (!p.contains(m)) {
        const f = new CustomEvent(ka, Xs);
        p.addEventListener(ka, (g) => o("mountAutoFocus", g)), p.dispatchEvent(f), f.defaultPrevented || (D0(E0(su(p)), { select: !0 }), ft() === m && zt(p));
      }
      c(() => {
        p.removeEventListener(ka, (b) => o("mountAutoFocus", b));
        const f = new CustomEvent(Aa, Xs), g = (b) => {
          o("unmountAutoFocus", b);
        };
        p.addEventListener(Aa, g), p.dispatchEvent(f), setTimeout(() => {
          f.defaultPrevented || zt(m ?? document.body, { select: !0 }), p.removeEventListener(Aa, g), i.remove(u);
        }, 0);
      });
    });
    function d(c) {
      if (!n.loop && !n.trapped || u.paused) return;
      const p = c.key === "Tab" && !c.altKey && !c.ctrlKey && !c.metaKey, m = ft();
      if (p && m) {
        const v = c.currentTarget, [f, g] = k0(v);
        f && g ? !c.shiftKey && m === g ? (c.preventDefault(), n.loop && zt(f, { select: !0 })) : c.shiftKey && m === f && (c.preventDefault(), n.loop && zt(g, { select: !0 })) : m === v && c.preventDefault();
      }
    }
    return (c, p) => (h(), x(s(_e), {
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
}), I0 = P0;
function M0(e) {
  return e ? "open" : "closed";
}
const F0 = "DialogTitle", R0 = "DialogContent";
function L0({ titleName: e = F0, contentName: t = R0, componentLink: n = "dialog.html#title", titleId: o, descriptionId: a, contentElement: r }) {
  const l = `Warning: \`${t}\` requires a \`${e}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.reka-ui.com/docs/components/${n}`, i = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${t}.`;
  se(() => {
    var c;
    document.getElementById(o) || console.warn(l);
    const d = (c = r.value) == null ? void 0 : c.getAttribute("aria-describedby");
    a && d && (document.getElementById(a) || console.warn(i));
  });
}
var V0 = /* @__PURE__ */ w({
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
    const n = e, o = t, a = Ot(), { forwardRef: r, currentElement: l } = Ce();
    return a.titleId || (a.titleId = gt(void 0, "reka-dialog-title")), a.descriptionId || (a.descriptionId = gt(void 0, "reka-dialog-description")), se(() => {
      a.contentElement = l, ft() !== document.body && (a.triggerElement.value = ft());
    }), process.env.NODE_ENV !== "production" && L0({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: a.titleId,
      descriptionId: a.descriptionId,
      contentElement: l
    }), (i, u) => (h(), x(s(I0), {
      "as-child": "",
      loop: "",
      trapped: n.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => o("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => o("closeAutoFocus", d))
    }, {
      default: y(() => [F(s(ru), A({
        id: s(a).contentId,
        ref: s(r),
        as: i.as,
        "as-child": i.asChild,
        "disable-outside-pointer-events": i.disableOutsidePointerEvents,
        role: "dialog",
        "aria-describedby": s(a).descriptionId,
        "aria-labelledby": s(a).titleId,
        "data-state": s(M0)(s(a).open.value)
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
}), lu = V0, N0 = /* @__PURE__ */ w({
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
    const n = e, o = t, a = Ot(), r = ca(o), { forwardRef: l, currentElement: i } = Ce();
    return nu(i), (u, d) => (h(), x(lu, A({
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
        const p = c.detail.originalEvent, m = p.button === 0 && p.ctrlKey === !0;
        (p.button === 2 || m) && c.preventDefault();
      }),
      onFocusOutside: d[2] || (d[2] = (c) => {
        c.preventDefault();
      })
    }), {
      default: y(() => [_(u.$slots, "default")]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), q0 = N0, z0 = /* @__PURE__ */ w({
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
    const n = e, a = ca(t);
    Ce();
    const r = Ot(), l = E(!1), i = E(!1);
    return (u, d) => (h(), x(lu, A({
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
        var v;
        c.defaultPrevented || (l.value = !0, c.detail.originalEvent.type === "pointerdown" && (i.value = !0));
        const p = c.target;
        ((v = s(r).triggerElement.value) == null ? void 0 : v.contains(p)) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && i.value && c.preventDefault();
      })
    }), {
      default: y(() => [_(u.$slots, "default")]),
      _: 3
    }, 16));
  }
}), j0 = z0, K0 = /* @__PURE__ */ w({
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
    const n = e, o = t, a = Ot(), r = ca(o), { forwardRef: l } = Ce();
    return (i, u) => (h(), x(s(vo), { present: i.forceMount || s(a).open.value }, {
      default: y(() => [s(a).modal.value ? (h(), x(q0, A({
        key: 0,
        ref: s(l)
      }, {
        ...n,
        ...s(r),
        ...i.$attrs
      }), {
        default: y(() => [_(i.$slots, "default")]),
        _: 3
      }, 16)) : (h(), x(j0, A({
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
}), H0 = K0, W0 = /* @__PURE__ */ w({
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
    Ce();
    const n = Ot();
    return (o, a) => (h(), x(s(_e), A(t, { id: s(n).descriptionId }), {
      default: y(() => [_(o.$slots, "default")]),
      _: 3
    }, 16, ["id"]));
  }
}), U0 = W0, G0 = /* @__PURE__ */ w({
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
    const t = Ot();
    return Zi(!0), Ce(), (n, o) => (h(), x(s(_e), {
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
}), Y0 = G0, X0 = /* @__PURE__ */ w({
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
    const t = Ot(), { forwardRef: n } = Ce();
    return (o, a) => {
      var r;
      return (r = s(t)) != null && r.modal.value ? (h(), x(s(vo), {
        key: 0,
        present: o.forceMount || s(t).open.value
      }, {
        default: y(() => [F(Y0, A(o.$attrs, {
          ref: s(n),
          as: o.as,
          "as-child": o.asChild
        }), {
          default: y(() => [_(o.$slots, "default")]),
          _: 3
        }, 16, ["as", "as-child"])]),
        _: 3
      }, 8, ["present"])) : ge("v-if", !0);
    };
  }
}), Z0 = X0, Q0 = /* @__PURE__ */ w({
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
    const t = qy();
    return (n, o) => s(t) || n.forceMount ? (h(), x(no, {
      key: 0,
      to: n.to,
      disabled: n.disabled,
      defer: n.defer
    }, [_(n.$slots, "default")], 8, [
      "to",
      "disabled",
      "defer"
    ])) : ge("v-if", !0);
  }
}), iu = Q0, J0 = /* @__PURE__ */ w({
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
    return (n, o) => (h(), x(s(iu), Z(ee(t)), {
      default: y(() => [_(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), eb = J0, tb = /* @__PURE__ */ w({
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
    const t = e, n = Ot();
    return Ce(), (o, a) => (h(), x(s(_e), A(t, { id: s(n).titleId }), {
      default: y(() => [_(o.$slots, "default")]),
      _: 3
    }, 16, ["id"]));
  }
}), nb = tb, ob = /* @__PURE__ */ w({
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
    const t = e, n = Ot(), { forwardRef: o, currentElement: a } = Ce();
    return n.contentId || (n.contentId = gt(void 0, "reka-dialog-content")), se(() => {
      n.triggerElement.value = a.value;
    }), (r, l) => (h(), x(s(_e), A(t, {
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
}), ab = ob;
const Qs = "data-reka-collection-item";
function pa(e = {}) {
  const { key: t = "", isProvider: n = !1 } = e, o = `${t}CollectionProvider`;
  let a;
  if (n) {
    const c = E(/* @__PURE__ */ new Map());
    a = {
      collectionRef: E(),
      itemMap: c
    }, ao(o, a);
  } else a = oo(o);
  const r = (c = !1) => {
    const p = a.collectionRef.value;
    if (!p) return [];
    const m = Array.from(p.querySelectorAll(`[${Qs}]`)), f = Array.from(a.itemMap.value.values()).sort((g, b) => m.indexOf(g.ref) - m.indexOf(b.ref));
    return c ? f : f.filter((g) => g.ref.dataset.disabled !== "");
  }, l = w({
    name: "CollectionSlot",
    setup(c, { slots: p }) {
      const { primitiveElement: m, currentElement: v } = Ut();
      return te(v, () => {
        a.collectionRef.value = v.value;
      }), () => Ue(Ya, { ref: m }, p);
    }
  }), i = w({
    name: "CollectionItem",
    inheritAttrs: !1,
    props: { value: { validator: () => !0 } },
    setup(c, { slots: p, attrs: m }) {
      const { primitiveElement: v, currentElement: f } = Ut();
      return be((g) => {
        if (f.value) {
          const b = ul(f.value);
          a.itemMap.value.set(b, {
            ref: f.value,
            value: c.value
          }), g(() => a.itemMap.value.delete(b));
        }
      }), () => Ue(Ya, {
        ...m,
        [Qs]: "",
        ref: v
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
const rb = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function sb(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function uu(e, t, n) {
  const o = sb(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o)))
    return rb[o];
}
function lb(e, t = !1) {
  const n = ft();
  for (const o of e)
    if (o === n || (o.focus({ preventScroll: t }), ft() !== n)) return;
}
function ib(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
const [ub, Z_] = Ye("RovingFocusGroup");
var db = /* @__PURE__ */ w({
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
    const t = e, n = ub(), o = gt(), a = S(() => t.tabStopId || o), r = S(() => n.currentTabStopId.value === a.value), { getItems: l, CollectionItem: i } = pa();
    se(() => {
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
      const c = uu(d, n.orientation.value, n.dir.value);
      if (c !== void 0) {
        if (d.metaKey || d.ctrlKey || d.altKey || !t.allowShiftKey && d.shiftKey) return;
        d.preventDefault();
        let p = [...l().map((m) => m.ref).filter((m) => m.dataset.disabled !== "")];
        if (c === "last") p.reverse();
        else if (c === "prev" || c === "next") {
          c === "prev" && p.reverse();
          const m = p.indexOf(d.currentTarget);
          p = n.loop.value ? ib(p, m + 1) : p.slice(m + 1);
        }
        ae(() => lb(p));
      }
    }
    return (d, c) => (h(), x(s(i), null, {
      default: y(() => [F(s(_e), {
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
}), cb = db, pb = /* @__PURE__ */ w({
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
    return (t, n) => (h(), x(s(_e), {
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
        wordWrap: "normal"
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
}), fb = pb, mb = /* @__PURE__ */ w({
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
    const t = e, { primitiveElement: n, currentElement: o } = Ut(), a = S(() => t.checked ?? t.value);
    return te(a, (r, l) => {
      if (!o.value) return;
      const i = o.value, u = window.HTMLInputElement.prototype, c = Object.getOwnPropertyDescriptor(u, "value").set;
      if (c && r !== l) {
        const p = new Event("input", { bubbles: !0 }), m = new Event("change", { bubbles: !0 });
        c.call(i, r), i.dispatchEvent(p), i.dispatchEvent(m);
      }
    }), (r, l) => (h(), x(fb, A({
      ref_key: "primitiveElement",
      ref: n
    }, {
      ...t,
      ...r.$attrs
    }, { as: "input" }), null, 16));
  }
}), Js = mb, vb = /* @__PURE__ */ w({
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
    return (a, r) => (h(), z(Ae, null, [ge(" We render single input if it's required "), n.value ? (h(), x(Js, A({ key: a.name }, {
      ...t,
      ...a.$attrs
    }, {
      name: a.name,
      value: a.value
    }), null, 16, ["name", "value"])) : (h(!0), z(Ae, { key: 1 }, jt(o.value, (l) => (h(), x(Js, A({ key: l.name }, { ref_for: !0 }, {
      ...t,
      ...a.$attrs
    }, {
      name: l.name,
      value: l.value
    }), null, 16, ["name", "value"]))), 128))], 2112));
  }
}), du = vb;
const [gb, Q_] = Ye("CheckboxGroupRoot");
function qo(e) {
  return e === "indeterminate";
}
function cu(e) {
  return qo(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const [hb, yb] = Ye("CheckboxRoot");
var bb = /* @__PURE__ */ w({
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
    const n = e, o = t, { forwardRef: a, currentElement: r } = Ce(), l = gb(null), i = Wt(n, "modelValue", o, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), u = S(() => (l == null ? void 0 : l.disabled.value) || n.disabled), d = S(() => Ua(l == null ? void 0 : l.modelValue.value) ? i.value === "indeterminate" ? "indeterminate" : i.value : Us(l.modelValue.value, n.value));
    function c() {
      if (Ua(l == null ? void 0 : l.modelValue.value))
        i.value = qo(i.value) ? !0 : !i.value;
      else {
        const v = [...l.modelValue.value || []];
        if (Us(v, n.value)) {
          const f = v.findIndex((g) => En(g, n.value));
          v.splice(f, 1);
        } else v.push(n.value);
        l.modelValue.value = v;
      }
    }
    const p = eu(r), m = S(() => {
      var v;
      return n.id && r.value ? (v = document.querySelector(`[for="${n.id}"]`)) == null ? void 0 : v.innerText : void 0;
    });
    return yb({
      disabled: u,
      state: d
    }), (v, f) => {
      var g, b;
      return h(), x(et((g = s(l)) != null && g.rovingFocus.value ? s(cb) : s(_e)), A(v.$attrs, {
        id: v.id,
        ref: s(a),
        role: "checkbox",
        "as-child": v.asChild,
        as: v.as,
        type: v.as === "button" ? "button" : void 0,
        "aria-checked": s(qo)(d.value) ? "mixed" : d.value,
        "aria-required": v.required,
        "aria-label": v.$attrs["aria-label"] || m.value,
        "data-state": s(cu)(d.value),
        "data-disabled": u.value ? "" : void 0,
        disabled: u.value,
        focusable: (b = s(l)) != null && b.rovingFocus.value ? !u.value : void 0,
        onKeydown: Ze(De(() => {
        }, ["prevent"]), ["enter"]),
        onClick: c
      }), {
        default: y(() => [_(v.$slots, "default", {
          modelValue: s(i),
          state: d.value
        }), s(p) && v.name && !s(l) ? (h(), x(s(du), {
          key: 0,
          type: "checkbox",
          checked: !!d.value,
          name: v.name,
          value: v.value,
          disabled: u.value,
          required: v.required
        }, null, 8, [
          "checked",
          "name",
          "value",
          "disabled",
          "required"
        ])) : ge("v-if", !0)]),
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
}), wb = bb, _b = /* @__PURE__ */ w({
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
    const { forwardRef: t } = Ce(), n = hb();
    return (o, a) => (h(), x(s(vo), { present: o.forceMount || s(qo)(s(n).state.value) || s(n).state.value === !0 }, {
      default: y(() => [F(s(_e), A({
        ref: s(t),
        "data-state": s(cu)(s(n).state.value),
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
}), xb = _b;
const [pu, Cb] = Ye("PopperRoot");
var Bb = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = E();
    return Cb({
      anchor: t,
      onAnchorChange: (n) => t.value = n
    }), (n, o) => _(n.$slots, "default");
  }
}), Ob = Bb, Sb = /* @__PURE__ */ w({
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
    const t = e, { forwardRef: n, currentElement: o } = Ce(), a = pu();
    return or(() => {
      a.onAnchorChange(t.reference ?? o.value);
    }), (r, l) => (h(), x(s(_e), {
      ref: s(n),
      as: r.as,
      "as-child": r.asChild
    }, {
      default: y(() => [_(r.$slots, "default")]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), $b = Sb;
function Eb(e) {
  return e !== null;
}
function Db(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var b, C, O;
      const { placement: n, rects: o, middlewareData: a } = t, l = ((b = a.arrow) == null ? void 0 : b.centerOffset) !== 0, i = l ? 0 : e.arrowWidth, u = l ? 0 : e.arrowHeight, [d, c] = Xa(n), p = {
        start: "0%",
        center: "50%",
        end: "100%"
      }[c], m = (((C = a.arrow) == null ? void 0 : C.x) ?? 0) + i / 2, v = (((O = a.arrow) == null ? void 0 : O.y) ?? 0) + u / 2;
      let f = "", g = "";
      return d === "bottom" ? (f = l ? p : `${m}px`, g = `${-u}px`) : d === "top" ? (f = l ? p : `${m}px`, g = `${o.floating.height + u}px`) : d === "right" ? (f = `${-u}px`, g = l ? p : `${v}px`) : d === "left" && (f = `${o.floating.width + u}px`, g = l ? p : `${v}px`), { data: {
        x: f,
        y: g
      } };
    }
  };
}
function Xa(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
const kb = {
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
}, [J_, Ab] = Ye("PopperContent");
var Tb = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ nr({
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
  }, { ...kb }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = pu(), { forwardRef: r, currentElement: l } = Ce(), i = E(), u = E(), { width: d, height: c } = n0(u), p = S(() => n.side + (n.align !== "center" ? `-${n.align}` : "")), m = S(() => typeof n.collisionPadding == "number" ? n.collisionPadding : {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...n.collisionPadding
    }), v = S(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), f = S(() => ({
      padding: m.value,
      boundary: v.value.filter(Eb),
      altBoundary: v.value.length > 0
    })), g = S(() => ({
      mainAxis: n.sideFlip,
      crossAxis: n.alignFlip
    })), b = ky(() => [
      Tl({
        mainAxis: n.sideOffset + c.value,
        alignmentAxis: n.alignOffset
      }),
      n.prioritizePosition && n.avoidCollisions && Ro({
        ...f.value,
        ...g.value
      }),
      n.avoidCollisions && Pl({
        mainAxis: !0,
        crossAxis: !!n.prioritizePosition,
        limiter: n.sticky === "partial" ? Fl() : void 0,
        ...f.value
      }),
      !n.prioritizePosition && n.avoidCollisions && Ro({
        ...f.value,
        ...g.value
      }),
      Il({
        ...f.value,
        apply: ({ elements: I, rects: U, availableWidth: K, availableHeight: Y }) => {
          const { width: H, height: J } = U.reference, Q = I.floating.style;
          Q.setProperty("--reka-popper-available-width", `${K}px`), Q.setProperty("--reka-popper-available-height", `${Y}px`), Q.setProperty("--reka-popper-anchor-width", `${H}px`), Q.setProperty("--reka-popper-anchor-height", `${J}px`);
        }
      }),
      u.value && Rl({
        element: u.value,
        padding: n.arrowPadding
      }),
      Db({
        arrowWidth: d.value,
        arrowHeight: c.value
      }),
      n.hideWhenDetached && Ml({
        strategy: "referenceHidden",
        ...f.value
      })
    ]), C = S(() => n.reference ?? a.anchor.value), { floatingStyles: O, placement: B, isPositioned: k, middlewareData: $ } = Vl(C, i, {
      strategy: n.positionStrategy,
      placement: p,
      whileElementsMounted: (...I) => Al(...I, {
        layoutShift: !n.disableUpdateOnLayoutShift,
        animationFrame: n.updatePositionStrategy === "always"
      }),
      middleware: b
    }), P = S(() => Xa(B.value)[0]), D = S(() => Xa(B.value)[1]);
    or(() => {
      k.value && o("placed");
    });
    const M = S(() => {
      var I;
      return ((I = $.value.arrow) == null ? void 0 : I.centerOffset) !== 0;
    }), R = E("");
    be(() => {
      l.value && (R.value = window.getComputedStyle(l.value).zIndex);
    });
    const T = S(() => {
      var I;
      return ((I = $.value.arrow) == null ? void 0 : I.x) ?? 0;
    }), L = S(() => {
      var I;
      return ((I = $.value.arrow) == null ? void 0 : I.y) ?? 0;
    });
    return Ab({
      placedSide: P,
      onArrowChange: (I) => u.value = I,
      arrowX: T,
      arrowY: L,
      shouldHideArrow: M
    }), (I, U) => {
      var K, Y, H;
      return h(), z("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-reka-popper-content-wrapper": "",
        style: wt({
          ...s(O),
          transform: s(k) ? s(O).transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: R.value,
          "--reka-popper-transform-origin": [(K = s($).transformOrigin) == null ? void 0 : K.x, (Y = s($).transformOrigin) == null ? void 0 : Y.y].join(" "),
          ...((H = s($).hide) == null ? void 0 : H.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [F(s(_e), A({ ref: s(r) }, I.$attrs, {
        "as-child": n.asChild,
        as: I.as,
        "data-side": P.value,
        "data-align": D.value,
        style: { animation: s(k) ? void 0 : "none" }
      }), {
        default: y(() => [_(I.$slots, "default")]),
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
}), Pb = Tb, Ib = /* @__PURE__ */ w({
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
    const { forwardRef: t } = Ce();
    return (n, o) => (h(), x(s($b), {
      "as-child": "",
      reference: n.reference
    }, {
      default: y(() => [F(s(_e), A({
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
}), Mb = Ib;
function Fb(e, t, n) {
  return e === void 0 ? !1 : Array.isArray(e) ? e.some((o) => Gn(o, t, n)) : Gn(e, t, n);
}
function Gn(e, t, n) {
  return e === void 0 || t === void 0 ? !1 : typeof e == "string" ? e === t : typeof n == "function" ? n(e, t) : typeof n == "string" ? (e == null ? void 0 : e[n]) === (t == null ? void 0 : t[n]) : En(e, t);
}
const [fa, Rb] = Ye("ListboxRoot");
var Lb = /* @__PURE__ */ w({
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
    const o = e, a = n, { multiple: r, highlightOnHover: l, orientation: i, disabled: u, selectionBehavior: d, dir: c } = ye(o), { getItems: p } = pa({ isProvider: !0 }), { handleTypeaheadSearch: m } = a0(), { primitiveElement: v, currentElement: f } = Ut(), g = t0(), b = Ji(c), C = eu(f), O = E(), B = E(!1), k = E(!0), $ = Wt(o, "modelValue", a, {
      defaultValue: o.defaultValue ?? (r.value ? [] : void 0),
      passive: o.modelValue === void 0,
      deep: !0
    });
    function P(j) {
      if (B.value = !0, o.multiple) {
        const G = Array.isArray($.value) ? [...$.value] : [], oe = G.findIndex((de) => Gn(de, j, o.by));
        o.selectionBehavior === "toggle" ? (oe === -1 ? G.push(j) : G.splice(oe, 1), $.value = G) : ($.value = [j], O.value = j);
      } else o.selectionBehavior === "toggle" && Gn($.value, j, o.by) ? $.value = void 0 : $.value = j;
      setTimeout(() => {
        B.value = !1;
      }, 1);
    }
    const D = E(null), M = E(null), R = E(!1), T = E(!1), L = To(), I = To(), U = To();
    function K() {
      return p().map((j) => j.ref).filter((j) => j.dataset.disabled !== "");
    }
    function Y(j, G = !0) {
      if (!j) return;
      D.value = j, k.value && D.value.focus(), G && D.value.scrollIntoView({ block: "nearest" });
      const oe = p().find((de) => de.ref === j);
      a("highlight", oe);
    }
    function H(j) {
      if (R.value) U.trigger(j);
      else {
        const G = p().find((oe) => Gn(oe.value, j, o.by));
        G && (D.value = G.ref, Y(G.ref));
      }
    }
    function J(j) {
      D.value && D.value.isConnected && (j.preventDefault(), j.stopPropagation(), T.value || D.value.click());
    }
    function Q(j) {
      if (k.value) {
        if (B.value = !0, R.value) I.trigger(j);
        else {
          const G = j.altKey || j.ctrlKey || j.metaKey;
          if (G && j.key === "a" && r.value) {
            const oe = p(), de = oe.map((fe) => fe.value);
            $.value = [...de], j.preventDefault(), Y(oe[oe.length - 1].ref);
          } else if (!G) {
            const oe = m(j.key, p());
            oe && Y(oe);
          }
        }
        setTimeout(() => {
          B.value = !1;
        }, 1);
      }
    }
    function q() {
      T.value = !0;
    }
    function le() {
      ae(() => {
        T.value = !1;
      });
    }
    function re() {
      ae(() => {
        const j = new KeyboardEvent("keydown", { key: "PageUp" });
        Ve(j);
      });
    }
    function ke(j) {
      const G = D.value;
      G != null && G.isConnected && (M.value = G), D.value = null, a("leave", j);
    }
    function Me(j) {
      var oe, de;
      const G = new CustomEvent("listbox.entryFocus", {
        bubbles: !1,
        cancelable: !0
      });
      if ((oe = j.currentTarget) == null || oe.dispatchEvent(G), a("entryFocus", G), !G.defaultPrevented)
        if (M.value) Y(M.value);
        else {
          const fe = (de = K()) == null ? void 0 : de[0];
          Y(fe);
        }
    }
    function Ve(j) {
      const G = uu(j, i.value, b.value);
      if (!G) return;
      let oe = K();
      if (D.value) {
        if (G === "last") oe.reverse();
        else if (G === "prev" || G === "next") {
          G === "prev" && oe.reverse();
          const de = oe.indexOf(D.value);
          oe = oe.slice(de + 1);
        }
        Ge(j, oe[0]);
      }
      if (oe.length) {
        const de = !D.value && G === "prev" ? oe.length - 1 : 0;
        Y(oe[de]);
      }
      if (R.value) return I.trigger(j);
    }
    function Ge(j, G) {
      var de;
      if (!(R.value || o.selectionBehavior !== "replace" || !r.value || !Array.isArray($.value) || (j.altKey || j.ctrlKey || j.metaKey) && !j.shiftKey) && j.shiftKey) {
        const fe = p().filter((Be) => Be.ref.dataset.disabled !== "");
        let X = (de = fe.find((Be) => Be.ref === G)) == null ? void 0 : de.value;
        if (j.key === g.END ? X = fe[fe.length - 1].value : j.key === g.HOME && (X = fe[0].value), !X || !O.value) return;
        const me = Dy(fe.map((Be) => Be.value), O.value, X);
        $.value = me;
      }
    }
    async function nt(j) {
      if (await ae(), R.value) L.trigger(j);
      else {
        const G = K(), oe = G.find((de) => de.dataset.state === "checked");
        oe ? Y(oe) : G.length && Y(G[0]);
      }
    }
    return te($, () => {
      B.value || ae(() => {
        nt();
      });
    }, {
      immediate: !0,
      deep: !0
    }), t({
      highlightedElement: D,
      highlightItem: H,
      highlightFirstItem: re,
      highlightSelected: nt,
      getItems: p
    }), Rb({
      modelValue: $,
      onValueChange: P,
      multiple: r,
      orientation: i,
      dir: b,
      disabled: u,
      highlightOnHover: l,
      highlightedElement: D,
      isVirtual: R,
      virtualFocusHook: L,
      virtualKeydownHook: I,
      virtualHighlightHook: U,
      by: o.by,
      firstValue: O,
      selectionBehavior: d,
      focusable: k,
      onLeave: ke,
      onEnter: Me,
      changeHighlight: Y,
      onKeydownEnter: J,
      onKeydownNavigation: Ve,
      onKeydownTypeAhead: Q,
      onCompositionStart: q,
      onCompositionEnd: le,
      highlightFirstItem: re
    }), (j, G) => (h(), x(s(_e), {
      ref_key: "primitiveElement",
      ref: v,
      as: j.as,
      "as-child": j.asChild,
      dir: s(b),
      "data-disabled": s(u) ? "" : void 0,
      onPointerleave: ke,
      onFocusout: G[0] || (G[0] = async (oe) => {
        const de = oe.relatedTarget || oe.target;
        await ae(), D.value && s(f) && !s(f).contains(de) && ke(oe);
      })
    }, {
      default: y(() => [_(j.$slots, "default", { modelValue: s($) }), s(C) && j.name ? (h(), x(s(du), {
        key: 0,
        name: j.name,
        value: s($),
        disabled: s(u),
        required: j.required
      }, null, 8, [
        "name",
        "value",
        "disabled",
        "required"
      ])) : ge("v-if", !0)]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "dir",
      "data-disabled"
    ]));
  }
}), Vb = Lb, Nb = /* @__PURE__ */ w({
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
    const { CollectionSlot: t } = pa(), n = fa(), o = Xi(!1, 10);
    return (a, r) => (h(), x(s(t), null, {
      default: y(() => [F(s(_e), {
        role: "listbox",
        as: a.as,
        "as-child": a.asChild,
        tabindex: s(n).focusable.value ? s(n).highlightedElement.value ? "-1" : "0" : void 0,
        "aria-orientation": s(n).orientation.value,
        "aria-multiselectable": !!s(n).multiple.value,
        "data-orientation": s(n).orientation.value,
        onMousedown: r[0] || (r[0] = De((l) => o.value = !0, ["left"])),
        onFocus: r[1] || (r[1] = (l) => {
          s(o) || s(n).onEnter(l);
        }),
        onKeydown: [
          r[2] || (r[2] = Ze(De((l) => {
            s(n).focusable.value && s(n).onKeydownNavigation(l);
          }, ["prevent"]), [
            "down",
            "up",
            "left",
            "right",
            "home",
            "end"
          ])),
          Ze(s(n).onKeydownEnter, ["enter"]),
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
}), qb = Nb, zb = /* @__PURE__ */ w({
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
    const n = e, a = Wt(n, "modelValue", t, {
      defaultValue: "",
      passive: n.modelValue === void 0
    }), r = fa(), { primitiveElement: l, currentElement: i } = Ut(), u = S(() => n.disabled || r.disabled.value || !1), d = E();
    return rl(() => {
      var c;
      return d.value = (c = r.highlightedElement.value) == null ? void 0 : c.id;
    }), se(() => {
      r.focusable.value = !1, setTimeout(() => {
        var c;
        n.autoFocus && ((c = i.value) == null || c.focus());
      }, 1);
    }), Ke(() => {
      r.focusable.value = !0;
    }), (c, p) => (h(), x(s(_e), {
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
      onKeydown: [Ze(De(s(r).onKeydownNavigation, ["prevent"]), [
        "down",
        "up",
        "home",
        "end"
      ]), Ze(s(r).onKeydownEnter, ["enter"])],
      onInput: p[0] || (p[0] = (m) => {
        a.value = m.target.value, s(r).highlightFirstItem();
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
}), jb = zb;
const [e1, Kb] = Ye("ListboxGroup");
var Hb = /* @__PURE__ */ w({
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
    const t = e, n = gt(void 0, "reka-listbox-group");
    return Kb({ id: n }), (o, a) => (h(), x(s(_e), A({ role: "group" }, t, { "aria-labelledby": s(n) }), {
      default: y(() => [_(o.$slots, "default")]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), Wb = Hb;
const Ub = "listbox.select", [Gb, Yb] = Ye("ListboxItem");
var Xb = /* @__PURE__ */ w({
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
    const n = e, o = t, a = gt(void 0, "reka-listbox-item"), { CollectionItem: r } = pa(), { forwardRef: l, currentElement: i } = Ce(), u = fa(), d = S(() => i.value === u.highlightedElement.value), c = S(() => Fb(u.modelValue.value, n.value, u.by)), p = S(() => u.disabled.value || n.disabled);
    async function m(f) {
      o("select", f), !(f != null && f.defaultPrevented) && !p.value && f && (u.onValueChange(n.value), u.changeHighlight(i.value));
    }
    function v(f) {
      const g = {
        originalEvent: f,
        value: n.value
      };
      Gr(Ub, m, g);
    }
    return Yb({ isSelected: c }), (f, g) => (h(), x(s(r), { value: f.value }, {
      default: y(() => [Iu([d.value, c.value], () => F(s(_e), A({ id: s(a) }, f.$attrs, {
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
        onClick: v,
        onKeydown: Ze(De(v, ["prevent"]), ["space"]),
        onPointermove: g[0] || (g[0] = (b) => {
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
}), Zb = Xb, Qb = /* @__PURE__ */ w({
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
    Ce();
    const n = Gb();
    return (o, a) => s(n).isSelected.value ? (h(), x(s(_e), A({
      key: 0,
      "aria-hidden": "true"
    }, t), {
      default: y(() => [_(o.$slots, "default")]),
      _: 3
    }, 16)) : ge("v-if", !0);
  }
}), Jb = Qb;
const [Rt, ew] = Ye("ComboboxRoot");
var tw = /* @__PURE__ */ w({
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
    var K, Y, H;
    const o = e, a = n, { primitiveElement: r, currentElement: l } = Ut(), { multiple: i, disabled: u, ignoreFilter: d, resetSearchTermOnSelect: c, openOnFocus: p, openOnClick: m, dir: v } = ye(o), f = Ji(v), g = Wt(o, "modelValue", a, {
      defaultValue: o.defaultValue ?? (i.value ? [] : void 0),
      passive: o.modelValue === void 0,
      deep: !0
    }), b = Wt(o, "open", a, {
      defaultValue: o.defaultOpen,
      passive: o.open === void 0
    });
    async function C(J) {
      var Q, q;
      b.value = J, L.value = "", J ? (await ae(), (Q = r.value) == null || Q.highlightSelected(), B.value = !0) : B.value = !1, (q = $.value) == null || q.focus(), setTimeout(() => {
        !J && o.resetSearchTermOnBlur && O.trigger();
      }, 1);
    }
    const O = To(), B = E(!1), k = E(!1), $ = E(), P = E(), D = S(() => {
      var J;
      return ((J = r.value) == null ? void 0 : J.highlightedElement) ?? void 0;
    }), M = E(/* @__PURE__ */ new Map()), R = E(/* @__PURE__ */ new Map()), { contains: T } = Yy({ sensitivity: "base" }), L = E(""), I = S((J) => {
      if (!L.value || o.ignoreFilter || k.value) return {
        count: M.value.size,
        items: (J == null ? void 0 : J.items) ?? /* @__PURE__ */ new Map(),
        groups: (J == null ? void 0 : J.groups) ?? new Set(R.value.keys())
      };
      let Q = 0;
      const q = /* @__PURE__ */ new Map(), le = /* @__PURE__ */ new Set();
      for (const [re, ke] of M.value) {
        const Me = T(ke, L.value);
        q.set(re, Me ? 1 : 0), Me && Q++;
      }
      for (const [re, ke] of R.value) for (const Me of ke) if (q.get(Me) > 0) {
        le.add(re);
        break;
      }
      return {
        count: Q,
        items: q,
        groups: le
      };
    }), U = We();
    return se(() => {
      var J, Q, q;
      U != null && U.exposed && (U.exposed.highlightItem = (J = r.value) == null ? void 0 : J.highlightItem, U.exposed.highlightFirstItem = (Q = r.value) == null ? void 0 : Q.highlightFirstItem, U.exposed.highlightSelected = (q = r.value) == null ? void 0 : q.highlightSelected);
    }), t({
      filtered: I,
      highlightedElement: D,
      highlightItem: (K = r.value) == null ? void 0 : K.highlightItem,
      highlightFirstItem: (Y = r.value) == null ? void 0 : Y.highlightFirstItem,
      highlightSelected: (H = r.value) == null ? void 0 : H.highlightSelected
    }), ew({
      modelValue: g,
      multiple: i,
      disabled: u,
      open: b,
      onOpenChange: C,
      contentId: "",
      isUserInputted: B,
      isVirtual: k,
      inputElement: $,
      highlightedElement: D,
      onInputElementChange: (J) => $.value = J,
      triggerElement: P,
      onTriggerElementChange: (J) => P.value = J,
      parentElement: l,
      resetSearchTermOnSelect: c,
      onResetSearchTerm: O.on,
      allItems: M,
      allGroups: R,
      filterSearch: L,
      filterState: I,
      ignoreFilter: d,
      openOnFocus: p,
      openOnClick: m
    }), (J, Q) => (h(), x(s(Ob), null, {
      default: y(() => [F(s(Vb), A({
        ref_key: "primitiveElement",
        ref: r
      }, J.$attrs, {
        modelValue: s(g),
        "onUpdate:modelValue": Q[0] || (Q[0] = (q) => at(g) ? g.value = q : null),
        style: { pointerEvents: s(b) ? "auto" : void 0 },
        as: J.as,
        "as-child": J.asChild,
        dir: s(f),
        multiple: s(i),
        name: J.name,
        required: J.required,
        disabled: s(u),
        "highlight-on-hover": !0,
        by: o.by,
        onHighlight: Q[1] || (Q[1] = (q) => a("highlight", q))
      }), {
        default: y(() => [_(J.$slots, "default", {
          open: s(b),
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
}), nw = tw;
const [t1, ow] = Ye("ComboboxContent");
var aw = /* @__PURE__ */ w({
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
    const n = e, o = t, { position: a } = ye(n), r = Rt(), { forwardRef: l, currentElement: i } = Ce();
    Zi(n.bodyLock), nu(r.parentElement);
    const u = S(() => n.position === "popper" ? n : {}), d = Qr(u.value), c = {
      boxSizing: "border-box",
      "--reka-combobox-content-transform-origin": "var(--reka-popper-transform-origin)",
      "--reka-combobox-content-available-width": "var(--reka-popper-available-width)",
      "--reka-combobox-content-available-height": "var(--reka-popper-available-height)",
      "--reka-combobox-trigger-width": "var(--reka-popper-anchor-width)",
      "--reka-combobox-trigger-height": "var(--reka-popper-anchor-height)"
    };
    ow({ position: a });
    const p = E(!1);
    return se(() => {
      r.inputElement.value && (p.value = i.value.contains(r.inputElement.value), p.value && r.inputElement.value.focus());
    }), Ke(() => {
      var m;
      p.value && ((m = r.triggerElement.value) == null || m.focus());
    }), (m, v) => (h(), x(s(qb), { "as-child": "" }, {
      default: y(() => [F(s(ru), {
        "as-child": "",
        "disable-outside-pointer-events": m.disableOutsidePointerEvents,
        onDismiss: v[0] || (v[0] = (f) => s(r).onOpenChange(!1)),
        onFocusOutside: v[1] || (v[1] = (f) => {
          var g;
          (g = s(r).parentElement.value) != null && g.contains(f.target) && f.preventDefault(), o("focusOutside", f);
        }),
        onInteractOutside: v[2] || (v[2] = (f) => o("interactOutside", f)),
        onEscapeKeyDown: v[3] || (v[3] = (f) => o("escapeKeyDown", f)),
        onPointerDownOutside: v[4] || (v[4] = (f) => {
          var g;
          (g = s(r).parentElement.value) != null && g.contains(f.target) && f.preventDefault(), o("pointerDownOutside", f);
        })
      }, {
        default: y(() => [(h(), x(et(s(a) === "popper" ? s(Pb) : s(_e)), A({
          ...m.$attrs,
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
          default: y(() => [_(m.$slots, "default")]),
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
}), rw = aw, sw = /* @__PURE__ */ w({
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
    Ce();
    const n = Rt();
    function o() {
      n.filterSearch.value = "", n.inputElement.value && (n.inputElement.value.value = "", n.inputElement.value.focus());
    }
    return (a, r) => (h(), x(s(_e), A({ type: a.as === "button" ? "button" : void 0 }, t, {
      tabindex: "-1",
      onClick: o
    }), {
      default: y(() => [_(a.$slots, "default")]),
      _: 3
    }, 16, ["type"]));
  }
}), n1 = sw, lw = /* @__PURE__ */ w({
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
    const a = Ft(e, t), { forwardRef: r } = Ce(), l = Rt();
    return l.contentId || (l.contentId = gt(void 0, "reka-combobox-content")), (i, u) => (h(), x(s(vo), { present: i.forceMount || s(l).open.value }, {
      default: y(() => [F(rw, A({
        ...s(a),
        ...i.$attrs
      }, { ref: s(r) }), {
        default: y(() => [_(i.$slots, "default")]),
        _: 3
      }, 16)]),
      _: 3
    }, 8, ["present"]));
  }
}), iw = lw, uw = /* @__PURE__ */ w({
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
    const t = e, n = Rt(), o = S(() => n.ignoreFilter.value ? n.allItems.value.size === 0 : n.filterState.value.count === 0);
    return (a, r) => o.value ? (h(), x(s(_e), Z(A({ key: 0 }, t)), {
      default: y(() => [_(a.$slots, "default", {}, () => [r[0] || (r[0] = $e("No options"))])]),
      _: 3
    }, 16)) : ge("v-if", !0);
  }
}), dw = uw;
const [fu, cw] = Ye("ComboboxGroup");
var pw = /* @__PURE__ */ w({
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
    const t = e, n = gt(void 0, "reka-combobox-group"), o = Rt(), a = S(() => o.ignoreFilter.value ? !0 : o.filterSearch.value ? o.filterState.value.groups.has(n) : !0), r = cw({
      id: n,
      labelId: ""
    });
    return se(() => {
      o.allGroups.value.has(n) || o.allGroups.value.set(n, /* @__PURE__ */ new Set());
    }), Ke(() => {
      o.allGroups.value.delete(n);
    }), (l, i) => (h(), x(s(Wb), A({
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
}), fw = pw, mw = /* @__PURE__ */ w({
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
    const n = e, o = t, a = Rt(), r = fa(), { primitiveElement: l, currentElement: i } = Ut(), u = Wt(n, "modelValue", o, { passive: n.modelValue === void 0 });
    se(() => {
      i.value && a.onInputElementChange(i.value);
    });
    function d(f) {
      a.open.value || a.onOpenChange(!0);
    }
    function c(f) {
      const g = f.target;
      a.open.value ? a.filterSearch.value = g.value : (a.onOpenChange(!0), ae(() => {
        g.value && (a.filterSearch.value = g.value, r.highlightFirstItem());
      }));
    }
    function p() {
      a.openOnFocus.value && !a.open.value && a.onOpenChange(!0);
    }
    function m() {
      a.openOnClick.value && !a.open.value && a.onOpenChange(!0);
    }
    function v() {
      const f = a.modelValue.value;
      n.displayValue ? u.value = n.displayValue(f) : !a.multiple.value && f && !Array.isArray(f) && typeof f != "object" ? u.value = f.toString() : u.value = "", ae(() => {
        u.value = u.value;
      });
    }
    return a.onResetSearchTerm(() => {
      v();
    }), te(a.modelValue, async () => {
      !a.isUserInputted.value && a.resetSearchTermOnSelect.value && v();
    }, {
      immediate: !0,
      deep: !0
    }), te(a.filterState, () => {
      a.isVirtual.value || r.highlightFirstItem();
    }), (f, g) => (h(), x(s(jb), {
      ref_key: "primitiveElement",
      ref: l,
      modelValue: s(u),
      "onUpdate:modelValue": g[0] || (g[0] = (b) => at(u) ? u.value = b : null),
      as: f.as,
      "as-child": f.asChild,
      "auto-focus": f.autoFocus,
      disabled: f.disabled,
      "aria-expanded": s(a).open.value,
      "aria-controls": s(a).contentId,
      "aria-autocomplete": "list",
      role: "combobox",
      autocomplete: "off",
      onClick: m,
      onInput: c,
      onKeydown: Ze(De(d, ["prevent"]), ["down", "up"]),
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
}), vw = mw, gw = /* @__PURE__ */ w({
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
    const n = e, o = t, a = gt(void 0, "reka-combobox-item"), r = Rt(), l = fu(null), { primitiveElement: i, currentElement: u } = Ut();
    if (n.value === "") throw new Error("A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder.");
    const d = S(() => {
      if (r.isVirtual.value || r.ignoreFilter.value || !r.filterSearch.value) return !0;
      {
        const c = r.filterState.value.items.get(a);
        return c === void 0 ? !0 : c > 0;
      }
    });
    return se(() => {
      var p;
      r.allItems.value.set(a, n.textValue || u.value.textContent || u.value.innerText);
      const c = l == null ? void 0 : l.id;
      c && (r.allGroups.value.has(c) ? (p = r.allGroups.value.get(c)) == null || p.add(a) : r.allGroups.value.set(c, /* @__PURE__ */ new Set([a])));
    }), Ke(() => {
      r.allItems.value.delete(a);
    }), (c, p) => d.value ? (h(), x(s(Zb), A({ key: 0 }, n, {
      id: s(a),
      ref_key: "primitiveElement",
      ref: i,
      disabled: s(r).disabled.value || c.disabled,
      onSelect: p[0] || (p[0] = (m) => {
        o("select", m), !m.defaultPrevented && !s(r).multiple.value && !c.disabled && !s(r).disabled.value && (m.preventDefault(), s(r).onOpenChange(!1), s(r).modelValue.value = n.value);
      })
    }), {
      default: y(() => [_(c.$slots, "default", {}, () => [$e(Pe(c.value), 1)])]),
      _: 3
    }, 16, ["id", "disabled"])) : ge("v-if", !0);
  }
}), hw = gw, yw = /* @__PURE__ */ w({
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
    return (n, o) => (h(), x(s(Jb), Z(ee(t)), {
      default: y(() => [_(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), o1 = yw, bw = /* @__PURE__ */ w({
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
    Ce();
    const n = fu({
      id: "",
      labelId: ""
    });
    return n.labelId || (n.labelId = gt(void 0, "reka-combobox-group-label")), (o, a) => (h(), x(s(_e), A(t, { id: s(n).labelId }), {
      default: y(() => [_(o.$slots, "default")]),
      _: 3
    }, 16, ["id"]));
  }
}), ww = bw, _w = /* @__PURE__ */ w({
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
    return (n, o) => (h(), x(s(iu), Z(ee(t)), {
      default: y(() => [_(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), xw = _w, Cw = /* @__PURE__ */ w({
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
    return Ce(), (n, o) => (h(), x(s(_e), A(t, { "aria-hidden": "true" }), {
      default: y(() => [_(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), Bw = Cw, Ow = /* @__PURE__ */ w({
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
    const t = e, { forwardRef: n, currentElement: o } = Ce(), a = Rt(), r = S(() => t.disabled || a.disabled.value || !1);
    return se(() => {
      o.value && a.onTriggerElementChange(o.value);
    }), (l, i) => (h(), x(s(_e), A(t, {
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
}), a1 = Ow;
function Sw(e) {
  const t = ua({ nonce: E() });
  return S(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.nonce) == null ? void 0 : n.value);
  });
}
var $w = /* @__PURE__ */ w({
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
    const t = e, { forwardRef: n } = Ce(), { nonce: o } = ye(t), a = Sw(o), r = Rt();
    return (l, i) => (h(), z(Ae, null, [F(s(_e), A({
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
    }, 16, ["style"]), F(s(_e), {
      as: "style",
      nonce: s(a)
    }, {
      default: y(() => i[0] || (i[0] = [$e(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-reka-combobox-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-reka-combobox-viewport]::-webkit-scrollbar { display: none; } ")])),
      _: 1,
      __: [0]
    }, 8, ["nonce"])], 64));
  }
}), Ew = $w;
const r1 = /* @__PURE__ */ w({
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
    }), r = Ft(a, o);
    return (l, i) => (h(), x(s(wb), A(s(r), {
      class: s(V)(
        "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        n.class
      )
    }), {
      default: y(() => [
        F(s(xb), { class: "flex h-full w-full items-center justify-center text-current" }, {
          default: y(() => [
            _(l.$slots, "default", {}, () => [
              F(s($y), { class: "h-4 w-4" })
            ])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), s1 = /* @__PURE__ */ w({
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
    const a = Ft(e, t);
    return (r, l) => (h(), x(s(c0), Z(ee(s(a))), {
      default: y(({ open: i }) => [
        _(r.$slots, "default", { open: i })
      ]),
      _: 3
    }, 16));
  }
}), l1 = /* @__PURE__ */ w({
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(f0), A(t, { class: "overflow-hidden transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down" }), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), i1 = /* @__PURE__ */ w({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(v0), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), u1 = /* @__PURE__ */ w({
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
    const a = Ft(e, t);
    return (r, l) => (h(), x(s(nw), Z(ee(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), d1 = /* @__PURE__ */ w({
  __name: "ComboboxAnchor",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = Bt(t, "class"), o = Qr(n);
    return (a, r) => (h(), x(s(Mb), A(s(o), {
      class: s(V)("w-[200px]", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), c1 = /* @__PURE__ */ w({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = Bt(t, "class");
    return (o, a) => (h(), x(s(dw), A(s(n), {
      class: s(V)("py-6 text-center text-sm", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), p1 = /* @__PURE__ */ w({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    heading: {}
  },
  setup(e) {
    const t = e, n = Bt(t, "class");
    return (o, a) => (h(), x(s(fw), A(s(n), {
      class: s(V)(
        "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
        t.class
      )
    }), {
      default: y(() => [
        o.heading ? (h(), x(s(ww), {
          key: 0,
          class: "px-2 py-1.5 text-xs font-medium text-muted-foreground"
        }, {
          default: y(() => [
            $e(Pe(o.heading), 1)
          ]),
          _: 1
        })) : ge("", !0),
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), f1 = /* @__PURE__ */ w({
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
    const n = e, o = t, a = Bt(n, "class"), r = Ft(a, o);
    return (l, i) => (h(), x(s(vw), A(s(r), {
      class: s(V)(
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
}), m1 = /* @__PURE__ */ w({
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
    const n = e, o = t, a = Bt(n, "class"), r = Ft(a, o);
    return (l, i) => (h(), x(s(hw), A(s(r), {
      class: s(V)(
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
}), v1 = /* @__PURE__ */ w({
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
    const n = e, o = t, a = Bt(n, "class"), r = Ft(a, o);
    return (l, i) => (h(), x(s(xw), null, {
      default: y(() => [
        F(s(iw), A(s(r), {
          class: s(V)(
            "z-50 w-[200px] rounded-md border bg-popover text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            n.class
          )
        }), {
          default: y(() => [
            F(s(Ew), null, {
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
}), g1 = /* @__PURE__ */ w({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = Bt(t, "class");
    return (o, a) => (h(), x(s(Bw), A(s(n), {
      class: s(V)("-mx-1 h-px bg-border", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Dw = /* @__PURE__ */ w({
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
    }), r = ie(a, o);
    return (l, i) => (h(), x(s(Hp), A(s(r), {
      class: s(V)(
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
}), kw = /* @__PURE__ */ w({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = ie(e, t);
    return (r, l) => (h(), x(s(_r), Z(ee(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), h1 = /* @__PURE__ */ w({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(an), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), y1 = /* @__PURE__ */ w({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(xr), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), b1 = /* @__PURE__ */ w({
  __name: "DialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("div", {
      class: ue(s(V)("flex flex-col gap-y-1.5 text-center sm:text-left", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), w1 = /* @__PURE__ */ w({
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
    }), o = ze(n);
    return (a, r) => (h(), x(s($r), A(s(o), {
      class: s(V)("text-lg font-semibold leading-none tracking-tight", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), _1 = /* @__PURE__ */ w({
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
    }), o = ze(n);
    return (a, r) => (h(), x(s(Er), A(s(o), {
      class: s(V)("text-sm text-muted-foreground", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Aw = /* @__PURE__ */ w({
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
    }), r = ie(a, o);
    return (l, i) => (h(), x(s(Cr), null, {
      default: y(() => [
        F(s(ta), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        F(s(ea), A(s(r), {
          class: s(V)(
            "fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
            n.class
          )
        }), {
          default: y(() => [
            _(l.$slots, "default"),
            F(s(an), {
              class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
              onClick: i[0] || (i[0] = (u) => o("close", u))
            }, {
              default: y(() => [
                F(s(sa), { class: "size-4" }),
                i[1] || (i[1] = he("span", { class: "sr-only" }, "Close", -1))
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
}), x1 = /* @__PURE__ */ w({
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
    }), r = ie(a, o);
    return (l, i) => (h(), x(s(Cr), null, {
      default: y(() => [
        F(s(ta), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: y(() => [
            F(s(ea), A({
              class: s(V)(
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
                F(s(an), { class: "absolute right-4 top-4 rounded-md p-0.5 transition-colors hover:bg-secondary" }, {
                  default: y(() => [
                    F(s(sa), { class: "h-4 w-4" }),
                    i[1] || (i[1] = he("span", { class: "sr-only" }, "Close", -1))
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
}), C1 = /* @__PURE__ */ w({
  __name: "DialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("div", {
      class: ue(s(V)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), B1 = /* @__PURE__ */ w({
  __name: "CommandDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = ie(e, t);
    return (r, l) => (h(), x(s(kw), Z(ee(s(a))), {
      default: y(() => [
        F(s(Aw), { class: "overflow-hidden p-0 shadow-lg" }, {
          default: y(() => [
            F(Dw, { class: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5" }, {
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
}), O1 = /* @__PURE__ */ w({
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
    return (o, a) => (h(), x(s(Jp), A(n.value, {
      class: s(V)("py-6 text-center text-sm", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), S1 = /* @__PURE__ */ w({
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
    return (o, a) => (h(), x(s(Gp), A(n.value, {
      class: s(V)(
        "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
        t.class
      )
    }), {
      default: y(() => [
        o.heading ? (h(), x(s(Yp), {
          key: 0,
          class: "px-2 py-1.5 text-xs font-medium text-muted-foreground"
        }, {
          default: y(() => [
            $e(Pe(o.heading), 1)
          ]),
          _: 1
        })) : ge("", !0),
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Tw = {
  class: "flex items-center border-b px-3",
  "cmdk-input-wrapper": ""
}, $1 = /* @__PURE__ */ w({
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
    }), o = ze(n);
    return (a, r) => (h(), z("div", Tw, [
      F(s(oh), { class: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
      F(s(Wp), A({ ...s(o), ...a.$attrs }, {
        "auto-focus": "",
        class: s(V)(
          "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          t.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), E1 = /* @__PURE__ */ w({
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
    }), r = ie(a, o);
    return (l, i) => (h(), x(s(of), A(s(r), {
      class: s(V)(
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
}), Pw = { role: "presentation" }, D1 = /* @__PURE__ */ w({
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
    }), r = ie(a, o);
    return (l, i) => (h(), x(s(Qp), A(s(r), {
      class: s(V)("max-h-[300px] overflow-y-auto overflow-x-hidden", n.class)
    }), {
      default: y(() => [
        he("div", Pw, [
          _(l.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), k1 = /* @__PURE__ */ w({
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
    return (o, a) => (h(), x(s(af), A(n.value, {
      class: s(V)("-mx-1 h-px bg-border", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), A1 = /* @__PURE__ */ w({
  __name: "CommandShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("span", {
      class: ue(s(V)("ml-auto text-xs tracking-widest text-muted-foreground", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), T1 = /* @__PURE__ */ w({
  __name: "ConfirmDialog",
  setup(e) {
    const { isOpen: t, close: n, cancelButton: o, actionButton: a, title: r, description: l } = Fw();
    return (i, u) => (h(), x(s(bh), { open: s(t) }, {
      default: y(() => [
        F(s(wh), {
          onClose: s(n),
          onEscapeKeyDown: s(n),
          onPointerDownOutside: s(n)
        }, {
          default: y(() => [
            F(s(_h), null, {
              default: y(() => [
                F(s(xh), null, {
                  default: y(() => [
                    $e(Pe(s(r)), 1)
                  ]),
                  _: 1
                }),
                F(s(Ch), null, {
                  default: y(() => [
                    $e(Pe(s(l)), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            F(s(Bh), null, {
              default: y(() => [
                F(s(Sh), {
                  onClick: s(o).handler
                }, {
                  default: y(() => [
                    $e(Pe(s(o).label ?? "Cancel"), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                F(s(Oh), {
                  onClick: s(a).handler
                }, {
                  default: y(() => [
                    $e(Pe(s(a).label ?? "Confirm"), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"])
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
}), Jr = E(!1), mu = E(""), vu = E(""), gu = E({
  label: void 0,
  handler: () => {
  }
}), hu = E({
  label: void 0,
  handler: () => {
  }
}), Iw = (e) => {
  mu.value = e.title, vu.value = e.description, gu.value = el(e.cancelAction), hu.value = el(e.action), Mw();
}, el = (e) => typeof e == "string" ? {
  label: e,
  handler: Po
} : typeof e == "function" ? {
  label: void 0,
  handler: e
} : typeof e == "object" && e !== void 0 ? {
  label: e.label ?? void 0,
  handler: e.handler ?? Po
} : {
  label: void 0,
  handler: Po
}, Po = () => {
  Jr.value = !1;
}, Mw = () => {
  Jr.value = !0;
};
function Fw() {
  return {
    confirmDialog: (e) => Iw(e),
    title: mu,
    description: vu,
    isOpen: Jr,
    close: Po,
    cancelButton: gu,
    actionButton: hu
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
const Rw = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Lw = (e) => typeof e < "u";
function Vw(e) {
  return JSON.parse(JSON.stringify(e));
}
function tl(e, t, n, o = {}) {
  var a, r, l;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: c = !1,
    defaultValue: p,
    shouldEmit: m
  } = o, v = We(), f = n || (v == null ? void 0 : v.emit) || ((a = v == null ? void 0 : v.$emit) == null ? void 0 : a.bind(v)) || ((l = (r = v == null ? void 0 : v.proxy) == null ? void 0 : r.$emit) == null ? void 0 : l.bind(v == null ? void 0 : v.proxy));
  let g = d;
  t || (t = "modelValue"), g = g || `update:${t.toString()}`;
  const b = (B) => i ? typeof i == "function" ? i(B) : Vw(B) : B, C = () => Lw(e[t]) ? b(e[t]) : p, O = (B) => {
    m ? m(B) && f(g, B) : f(g, B);
  };
  if (u) {
    const B = C(), k = E(B);
    let $ = !1;
    return te(
      () => e[t],
      (P) => {
        $ || ($ = !0, k.value = b(P), ae(() => $ = !1));
      }
    ), te(
      k,
      (P) => {
        !$ && (P !== e[t] || c) && O(P);
      },
      { deep: c }
    ), k;
  } else
    return S({
      get() {
        return C();
      },
      set(B) {
        O(B);
      }
    });
}
const [es, Nw] = Ye("DrawerRoot"), yu = /* @__PURE__ */ new WeakMap();
function je(e, t, n = !1) {
  if (!e || !(e instanceof HTMLElement) || !t)
    return;
  const o = {};
  Object.entries(t).forEach(([a, r]) => {
    if (a.startsWith("--")) {
      e.style.setProperty(a, r);
      return;
    }
    o[a] = e.style[a], e.style[a] = r;
  }), !n && yu.set(e, o);
}
function qw(e, t) {
  if (!e || !(e instanceof HTMLElement))
    return;
  const n = yu.get(e);
  n && Object.entries(n).forEach(([o, a]) => {
    e.style[o] = a;
  });
}
function Do(e, t) {
  const n = window.getComputedStyle(e), o = n.transform || n.webkitTransform || n.mozTransform;
  let a = o.match(/^matrix3d\((.+)\)$/);
  return a ? Number.parseFloat(a[1].split(", ")[Re(t) ? 13 : 12]) : (a = o.match(/^matrix\((.+)\)$/), a ? Number.parseFloat(a[1].split(", ")[Re(t) ? 5 : 4]) : null);
}
function zw(e) {
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
function Ta(e, t) {
  if (!e)
    return () => {
    };
  const n = e.style.cssText;
  return Object.assign(e.style, t), () => {
    e.style.cssText = n;
  };
}
function jw(...e) {
  return (...t) => {
    for (const n of e)
      typeof n == "function" && n(...t);
  };
}
const Te = {
  DURATION: 0.5,
  EASE: [0.32, 0.72, 0, 1]
}, bu = 0.4, Kw = 0.25, Hw = 100, wu = 8, ko = 16, _u = 26, nl = "vaul-dragging";
function Ww({
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
  se(() => {
    typeof window < "u" && window.addEventListener("resize", u);
  }), kn(() => {
    typeof window < "u" && window.removeEventListener("resize", u);
  });
  const d = S(
    () => (t.value && e.value === t.value[t.value.length - 1]) ?? null
  ), c = S(
    () => t.value && t.value.length > 0 && ((a == null ? void 0 : a.value) || (a == null ? void 0 : a.value) === 0) && !Number.isNaN(a == null ? void 0 : a.value) && t.value[(a == null ? void 0 : a.value) ?? -1] === e.value || !t.value
  ), p = S(
    () => {
      var O;
      return ((O = t.value) == null ? void 0 : O.findIndex((B) => B === e.value)) ?? null;
    }
  ), m = S(
    () => {
      var O;
      return ((O = t.value) == null ? void 0 : O.map((B) => {
        const k = typeof B == "string";
        let $ = 0;
        if (k && ($ = Number.parseInt(B, 10)), Re(l.value)) {
          const D = k ? $ : i.value ? B * i.value.innerHeight : 0;
          return i.value ? l.value === "bottom" ? i.value.innerHeight - D : -i.value.innerHeight + D : D;
        }
        const P = k ? $ : i.value ? B * i.value.innerWidth : 0;
        return i.value ? l.value === "right" ? i.value.innerWidth - P : -i.value.innerWidth + P : P;
      })) ?? [];
    }
  ), v = S(
    () => {
      var O;
      return p.value !== null ? (O = m.value) == null ? void 0 : O[p.value] : null;
    }
  ), f = (O) => {
    var B, k, $, P;
    const D = ((B = m.value) == null ? void 0 : B.findIndex((M) => M === O)) ?? null;
    ae(() => {
      var M;
      r(D, m.value), je((M = n.value) == null ? void 0 : M.$el, {
        transition: `transform ${Te.DURATION}s cubic-bezier(${Te.EASE.join(",")})`,
        transform: Re(l.value) ? `translate3d(0, ${O}px, 0)` : `translate3d(${O}px, 0, 0)`
      });
    }), m.value && D !== m.value.length - 1 && D !== (a == null ? void 0 : a.value) ? je((k = o.value) == null ? void 0 : k.$el, {
      transition: `opacity ${Te.DURATION}s cubic-bezier(${Te.EASE.join(",")})`,
      opacity: "0"
    }) : je(($ = o.value) == null ? void 0 : $.$el, {
      transition: `opacity ${Te.DURATION}s cubic-bezier(${Te.EASE.join(",")})`,
      opacity: "1"
    }), e.value = D !== null ? ((P = t.value) == null ? void 0 : P[D]) ?? null : null;
  };
  te(
    [e, m, t],
    () => {
      var O;
      if (e.value) {
        const B = ((O = t.value) == null ? void 0 : O.findIndex((k) => k === e.value)) ?? -1;
        m.value && B !== -1 && typeof m.value[B] == "number" && f(m.value[B]);
      }
    },
    {
      immediate: !0
      // if you want to run the effect immediately as well
    }
  );
  function g({
    draggedDistance: O,
    closeDrawer: B,
    velocity: k,
    dismissible: $
  }) {
    var P, D, M;
    if (a.value === void 0)
      return;
    const R = l.value === "bottom" || l.value === "right" ? (v.value ?? 0) - O : (v.value ?? 0) + O, T = p.value === a.value - 1, L = p.value === 0, I = O > 0;
    if (T && je((P = o.value) == null ? void 0 : P.$el, {
      transition: `opacity ${Te.DURATION}s cubic-bezier(${Te.EASE.join(",")})`
    }), k > 2 && !I) {
      $ ? B() : f(m.value[0]);
      return;
    }
    if (k > 2 && I && m && t.value) {
      f(m.value[t.value.length - 1]);
      return;
    }
    const U = (D = m.value) == null ? void 0 : D.reduce((Y, H) => typeof Y != "number" || typeof H != "number" ? Y : Math.abs(H - R) < Math.abs(Y - R) ? H : Y), K = Re(l.value) ? window.innerHeight : window.innerWidth;
    if (k > bu && Math.abs(O) < K * 0.4) {
      const Y = I ? 1 : -1;
      if (Y > 0 && d) {
        f(m.value[(((M = t.value) == null ? void 0 : M.length) ?? 0) - 1]);
        return;
      }
      if (L && Y < 0 && $ && B(), p.value === null)
        return;
      f(m.value[p.value + Y]);
      return;
    }
    f(U);
  }
  function b({ draggedDistance: O }) {
    var B;
    if (v.value === null)
      return;
    const k = l.value === "bottom" || l.value === "right" ? v.value - O : v.value + O;
    (l.value === "bottom" || l.value === "right") && k < m.value[m.value.length - 1] || (l.value === "top" || l.value === "left") && k > m.value[m.value.length - 1] || je((B = n.value) == null ? void 0 : B.$el, {
      transform: Re(l.value) ? `translate3d(0, ${k}px, 0)` : `translate3d(${k}px, 0, 0)`
    });
  }
  function C(O, B) {
    if (!t.value || typeof p.value != "number" || !m.value || a.value === void 0)
      return null;
    const k = p.value === a.value - 1;
    if (p.value >= a.value && B)
      return 0;
    if (k && !B)
      return 1;
    if (!c.value && !k)
      return null;
    const $ = k ? p.value + 1 : p.value - 1, P = k ? m.value[$] - m.value[$ - 1] : m.value[$ + 1] - m.value[$], D = O / Math.abs(P);
    return k ? 1 - D : D;
  }
  return {
    isLastSnapPoint: d,
    shouldFade: c,
    getPercentageDragged: C,
    activeSnapPointIndex: p,
    onRelease: g,
    onDrag: b,
    snapPointsOffset: m
  };
}
function ol() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
let Kn = null;
function Uw(e) {
  const { isOpen: t, modal: n, nested: o, hasBeenOpened: a, preventScrollRestoration: r, noBodyStyles: l } = e, i = E(typeof window < "u" ? window.location.href : ""), u = E(0);
  function d() {
    if (ol() && Kn === null && t.value && !l.value) {
      Kn = {
        position: document.body.style.position,
        top: document.body.style.top,
        left: document.body.style.left,
        height: document.body.style.height
      };
      const { scrollX: p, innerHeight: m } = window;
      document.body.style.setProperty("position", "fixed", "important"), Object.assign(document.body.style, {
        top: `${-u.value}px`,
        left: `${-p}px`,
        right: "0px",
        height: "auto"
      }), setTimeout(() => {
        requestAnimationFrame(() => {
          const v = m - window.innerHeight;
          v && u.value >= m && (document.body.style.top = `-${u.value + v}px`);
        });
      }, 300);
    }
  }
  function c() {
    if (ol() && Kn !== null && !l.value) {
      const p = -Number.parseInt(document.body.style.top, 10), m = -Number.parseInt(document.body.style.left, 10);
      Object.assign(document.body.style, Kn), window.requestAnimationFrame(() => {
        if (r.value && i.value !== window.location.href) {
          i.value = window.location.href;
          return;
        }
        window.scrollTo(m, p);
      }), Kn = null;
    }
  }
  return se(() => {
    function p() {
      u.value = window.scrollY;
    }
    p(), window.addEventListener("scroll", p), Ke(() => {
      window.removeEventListener("scroll", p);
    });
  }), te([t, a, i], () => {
    o.value || !a.value || (t.value ? (window.matchMedia("(display-mode: standalone)").matches || d(), n.value || setTimeout(() => {
      c();
    }, 500)) : c());
  }), { restorePositionSetting: c };
}
function Gw(e, t) {
  return e && e.value ? e : t;
}
function Yw(e) {
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
    closeThreshold: m,
    activeSnapPoint: v,
    fadeFromIndex: f,
    direction: g,
    noBodyStyles: b,
    handleOnly: C,
    preventScrollRestoration: O
  } = e, B = E(r.value ?? !1), k = E(!1), $ = E(!1), P = E(!1), D = E(null), M = E(null), R = E(null), T = E(null), L = E(null), I = E(!1), U = E(null), K = E(0), Y = E(!1);
  E(0);
  const H = E(null);
  E(0);
  const J = S(() => {
    var ne;
    return ((ne = H.value) == null ? void 0 : ne.$el.getBoundingClientRect().height) || 0;
  }), Q = Gw(
    e.snapPoints,
    E(void 0)
  ), q = S(() => {
    var ne;
    return Q && (((ne = Q.value) == null ? void 0 : ne.length) ?? 0) > 0;
  }), le = E(null), {
    activeSnapPointIndex: re,
    onRelease: ke,
    snapPointsOffset: Me,
    onDrag: Ve,
    shouldFade: Ge,
    getPercentageDragged: nt
  } = Ww({
    snapPoints: Q,
    activeSnapPoint: v,
    drawerRef: H,
    fadeFromIndex: f,
    overlayRef: D,
    onSnapPointChange: j,
    direction: g
  });
  function j(ne, xe) {
    Q.value && ne === xe.length - 1 && (M.value = /* @__PURE__ */ new Date());
  }
  Uw({
    isOpen: B,
    modal: u,
    nested: i,
    hasBeenOpened: k,
    noBodyStyles: b,
    preventScrollRestoration: O
  });
  function G() {
    return (window.innerWidth - _u) / window.innerWidth;
  }
  function oe(ne, xe) {
    var Oe;
    if (!ne)
      return !1;
    let we = ne;
    const Fe = (Oe = window.getSelection()) == null ? void 0 : Oe.toString(), Ne = H.value ? Do(H.value.$el, g.value) : null, Xe = /* @__PURE__ */ new Date();
    if (we.hasAttribute("data-vaul-no-drag") || we.closest("[data-vaul-no-drag]"))
      return !1;
    if (g.value === "right" || g.value === "left")
      return !0;
    if (M.value && Xe.getTime() - M.value.getTime() < 500)
      return !1;
    if (Ne !== null && (g.value === "bottom" ? Ne > 0 : Ne < 0))
      return !0;
    if (Fe && Fe.length > 0)
      return !1;
    if (L.value && Xe.getTime() - L.value.getTime() < p.value && Ne === 0 || xe)
      return L.value = Xe, !1;
    for (; we; ) {
      if (we.scrollHeight > we.clientHeight) {
        if (we.scrollTop !== 0)
          return L.value = /* @__PURE__ */ new Date(), !1;
        if (we.getAttribute("role") === "dialog")
          return !0;
      }
      we = we.parentNode;
    }
    return !0;
  }
  function de(ne) {
    !l.value && !Q.value || H.value && !H.value.$el.contains(ne.target) || ($.value = !0, R.value = /* @__PURE__ */ new Date(), ne.target.setPointerCapture(ne.pointerId), K.value = Re(g.value) ? ne.clientY : ne.clientX);
  }
  function fe(ne) {
    var xe, Oe, we, Fe, Ne, Xe;
    if (H.value && $.value) {
      const St = g.value === "bottom" || g.value === "right" ? 1 : -1, cn = (K.value - (Re(g.value) ? ne.clientY : ne.clientX)) * St, Xt = cn > 0, go = Q.value && !l.value && !Xt;
      if (go && re.value === 0)
        return;
      const Zt = Math.abs(cn), $t = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      let it = Zt / J.value;
      const pn = nt(Zt, Xt);
      if (pn !== null && (it = pn), go && it >= 1 || !I.value && !oe(ne.target, Xt))
        return;
      if ((xe = H == null ? void 0 : H.value) == null || xe.$el.classList.add(nl), I.value = !0, je((Oe = H.value) == null ? void 0 : Oe.$el, {
        transition: "none"
      }), je((we = D.value) == null ? void 0 : we.$el, {
        transition: "none"
      }), Q.value && Ve({ draggedDistance: cn }), Xt && !Q.value) {
        const Et = zw(cn), mn = Math.min(Et * -1, 0) * St;
        je((Fe = H.value) == null ? void 0 : Fe.$el, {
          transform: Re(g.value) ? `translate3d(0, ${mn}px, 0)` : `translate3d(${mn}px, 0, 0)`
        });
        return;
      }
      const fn = 1 - it;
      if ((Ge.value || f.value && re.value === f.value - 1) && (t(it), je(
        (Ne = D.value) == null ? void 0 : Ne.$el,
        {
          opacity: `${fn}`,
          transition: "none"
        },
        !0
      )), $t && D.value && d.value) {
        const Et = Math.min(G() + it * (1 - G()), 1), mn = 8 - it * 8, ho = Math.max(0, 14 - it * 14);
        je(
          $t,
          {
            borderRadius: `${mn}px`,
            transform: Re(g.value) ? `scale(${Et}) translate3d(0, ${ho}px, 0)` : `scale(${Et}) translate3d(${ho}px, 0, 0)`,
            transition: "none"
          },
          !0
        );
      }
      if (!Q.value) {
        const Et = Zt * St;
        je((Xe = H.value) == null ? void 0 : Xe.$el, {
          transform: Re(g.value) ? `translate3d(0, ${Et}px, 0)` : `translate3d(${Et}px, 0, 0)`
        });
      }
    }
  }
  function X() {
    var ne;
    if (!H.value)
      return;
    const xe = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]"), Oe = Do(H.value.$el, g.value);
    je(H.value.$el, {
      transform: "translate3d(0, 0, 0)",
      transition: `transform ${Te.DURATION}s cubic-bezier(${Te.EASE.join(",")})`
    }), je((ne = D.value) == null ? void 0 : ne.$el, {
      transition: `opacity ${Te.DURATION}s cubic-bezier(${Te.EASE.join(",")})`,
      opacity: "1"
    }), d.value && Oe && Oe > 0 && B.value && je(
      xe,
      {
        borderRadius: `${wu}px`,
        overflow: "hidden",
        ...Re(g.value) ? {
          transform: `scale(${G()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
          transformOrigin: "top"
        } : {
          transform: `scale(${G()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
          transformOrigin: "left"
        },
        transitionProperty: "transform, border-radius",
        transitionDuration: `${Te.DURATION}s`,
        transitionTimingFunction: `cubic-bezier(${Te.EASE.join(",")})`
      },
      !0
    );
  }
  function me(ne) {
    H.value && (o(), ne || (B.value = !1), window.setTimeout(() => {
      Q.value && (v.value = Q.value[0]);
    }, Te.DURATION * 1e3));
  }
  be(() => {
    if (!B.value && d.value && Rw) {
      const ne = setTimeout(() => {
        qw(document.body);
      }, 200);
      return () => clearTimeout(ne);
    }
  }), te(r, () => {
    B.value = r.value, r.value || me();
  });
  function Be(ne) {
    if (!$.value || !H.value)
      return;
    H.value.$el.classList.remove(nl), I.value = !1, $.value = !1, T.value = /* @__PURE__ */ new Date();
    const xe = Do(H.value.$el, g.value);
    if (!oe(ne.target, !1) || !xe || Number.isNaN(xe) || R.value === null)
      return;
    const Oe = T.value.getTime() - R.value.getTime(), we = K.value - (Re(g.value) ? ne.clientY : ne.clientX), Fe = Math.abs(we) / Oe;
    if (Fe > 0.05 && (P.value = !0, window.setTimeout(() => {
      P.value = !1;
    }, 200)), Q.value) {
      const Xe = g.value === "bottom" || g.value === "right" ? 1 : -1;
      ke({
        draggedDistance: we * Xe,
        closeDrawer: me,
        velocity: Fe,
        dismissible: l.value
      }), n(!0);
      return;
    }
    if (g.value === "bottom" || g.value === "right" ? we > 0 : we < 0) {
      X(), n(!0);
      return;
    }
    if (Fe > bu) {
      me(), n(!1);
      return;
    }
    const Ne = Math.min(
      H.value.$el.getBoundingClientRect().height ?? 0,
      window.innerHeight
    );
    if (xe >= Ne * m.value) {
      me(), n(!1);
      return;
    }
    n(!0), X();
  }
  te(B, (ne) => {
    ne && (M.value = /* @__PURE__ */ new Date()), a(ne);
  }, { immediate: !0 });
  function He(ne) {
    var xe, Oe;
    const we = ne ? (window.innerWidth - ko) / window.innerWidth : 1, Fe = ne ? -16 : 0;
    U.value && window.clearTimeout(U.value), je((xe = H.value) == null ? void 0 : xe.$el, {
      transition: `transform ${Te.DURATION}s cubic-bezier(${Te.EASE.join(",")})`,
      transform: `scale(${we}) translate3d(0, ${Fe}px, 0)`
    }), !ne && (Oe = H.value) != null && Oe.$el && (U.value = window.setTimeout(() => {
      var Ne, Xe;
      const St = Do((Ne = H.value) == null ? void 0 : Ne.$el, g.value);
      je((Xe = H.value) == null ? void 0 : Xe.$el, {
        transition: "none",
        transform: Re(g.value) ? `translate3d(0, ${St}px, 0)` : `translate3d(${St}px, 0, 0)`
      });
    }, 500));
  }
  function ot(ne) {
    var xe;
    if (ne < 0)
      return;
    const Oe = Re(g.value) ? window.innerHeight : window.innerWidth, we = (Oe - ko) / Oe, Fe = we + ne * (1 - we), Ne = -16 + ne * ko;
    je((xe = H.value) == null ? void 0 : xe.$el, {
      transform: Re(g.value) ? `scale(${Fe}) translate3d(0, ${Ne}px, 0)` : `scale(${Fe}) translate3d(${Ne}px, 0, 0)`,
      transition: "none"
    });
  }
  function lt(ne) {
    var xe;
    const Oe = Re(g.value) ? window.innerHeight : window.innerWidth, we = ne ? (Oe - ko) / Oe : 1, Fe = ne ? -16 : 0;
    ne && je((xe = H.value) == null ? void 0 : xe.$el, {
      transition: `transform ${Te.DURATION}s cubic-bezier(${Te.EASE.join(",")})`,
      transform: Re(g.value) ? `scale(${we}) translate3d(0, ${Fe}px, 0)` : `scale(${we}) translate3d(${Fe}px, 0, 0)`
    });
  }
  return {
    open: r,
    isOpen: B,
    modal: u,
    keyboardIsOpen: Y,
    hasBeenOpened: k,
    drawerRef: H,
    drawerHeightRef: J,
    overlayRef: D,
    handleRef: le,
    isDragging: $,
    dragStartTime: R,
    isAllowedToDrag: I,
    snapPoints: Q,
    activeSnapPoint: v,
    hasSnapPoints: q,
    pointerStart: K,
    dismissible: l,
    snapPointsOffset: Me,
    direction: g,
    shouldFade: Ge,
    fadeFromIndex: f,
    shouldScaleBackground: d,
    setBackgroundColorOnScale: c,
    onPress: de,
    onDrag: fe,
    onRelease: Be,
    closeDrawer: me,
    onNestedDrag: ot,
    onNestedRelease: lt,
    onNestedOpenChange: He,
    emitClose: o,
    emitDrag: t,
    emitRelease: n,
    emitOpenChange: a,
    nested: i,
    handleOnly: C,
    noBodyStyles: b
  };
}
const Xw = /* @__PURE__ */ w({
  __name: "DrawerRoot",
  props: {
    activeSnapPoint: { default: void 0 },
    closeThreshold: { default: Kw },
    shouldScaleBackground: { type: Boolean, default: void 0 },
    setBackgroundColorOnScale: { type: Boolean, default: !0 },
    scrollLockTimeout: { default: Hw },
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
    er();
    const r = S(() => o.fadeFromIndex ?? (o.snapPoints && o.snapPoints.length - 1)), l = tl(o, "open", a, {
      defaultValue: o.defaultOpen,
      passive: o.open === void 0
    }), i = tl(o, "activeSnapPoint", a, {
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
    }, { closeDrawer: d, hasBeenOpened: c, modal: p, isOpen: m } = Nw(
      Yw({
        ...u,
        ...ye(o),
        activeSnapPoint: i,
        fadeFromIndex: r,
        open: l
      })
    );
    function v(f) {
      if (l.value !== void 0) {
        u.emitOpenChange(f);
        return;
      }
      m.value = f, f ? c.value = !0 : d();
    }
    return t({
      open: m
    }), (f, g) => (h(), x(s(y0), {
      open: s(m),
      modal: s(p),
      "onUpdate:open": v
    }, {
      default: y(() => [
        _(f.$slots, "default", { open: s(m) })
      ]),
      _: 3
    }, 8, ["open", "modal"]));
  }
}), Zw = /* @__PURE__ */ w({
  __name: "DrawerOverlay",
  setup(e) {
    const { overlayRef: t, hasSnapPoints: n, isOpen: o, shouldFade: a } = es();
    return (r, l) => (h(), x(s(Z0), {
      ref_key: "overlayRef",
      ref: t,
      "data-vaul-overlay": "",
      "data-vaul-snap-points": s(o) && s(n) ? "true" : "false",
      "data-vaul-snap-points-overlay": s(o) && s(a) ? "true" : "false"
    }, null, 8, ["data-vaul-snap-points", "data-vaul-snap-points-overlay"]));
  }
}), Qw = () => () => {
};
function Jw() {
  const { direction: e, isOpen: t, shouldScaleBackground: n, setBackgroundColorOnScale: o, noBodyStyles: a } = es(), r = E(null), l = E(document.body.style.backgroundColor);
  function i() {
    return (window.innerWidth - _u) / window.innerWidth;
  }
  be((u) => {
    if (t.value && n.value) {
      r.value && clearTimeout(r.value);
      const d = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      if (!d)
        return;
      jw(
        o.value && !a.value ? Ta(document.body, { background: "black" }) : Qw,
        Ta(d, {
          transformOrigin: Re(e.value) ? "top" : "left",
          transitionProperty: "transform, border-radius",
          transitionDuration: `${Te.DURATION}s`,
          transitionTimingFunction: `cubic-bezier(${Te.EASE.join(",")})`
        })
      );
      const c = Ta(d, {
        borderRadius: `${wu}px`,
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
const e_ = /* @__PURE__ */ w({
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
      keyboardIsOpen: m,
      closeDrawer: v,
      direction: f,
      handleOnly: g
    } = es();
    Jw();
    const b = E(!1), C = S(() => o.value && o.value.length > 0 ? `${o.value[0]}px` : "0");
    function O($) {
      if (!d.value || $.defaultPrevented) {
        $.preventDefault();
        return;
      }
      m.value && (m.value = !1), p.value ? c(!1) : $.preventDefault();
    }
    function B($) {
      g.value || l($);
    }
    function k($) {
      g.value || i($);
    }
    return be(() => {
      a.value && window.requestAnimationFrame(() => {
        b.value = !0;
      });
    }), ($, P) => (h(), x(s(H0), {
      ref_key: "drawerRef",
      ref: r,
      "data-vaul-drawer": "",
      "data-vaul-drawer-direction": s(f),
      "data-vaul-delayed-snap-points": b.value ? "true" : "false",
      "data-vaul-snap-points": s(n) && s(a) ? "true" : "false",
      style: wt({ "--snap-point-height": C.value }),
      onPointerdown: B,
      onPointermove: k,
      onPointerup: s(u),
      onPointerDownOutside: O,
      onOpenAutoFocus: P[0] || (P[0] = De(() => {
      }, ["prevent"])),
      onEscapeKeyDown: P[1] || (P[1] = (D) => {
        s(p) || D.preventDefault();
      })
    }, {
      default: y(() => [
        _($.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-vaul-drawer-direction", "data-vaul-delayed-snap-points", "data-vaul-snap-points", "style", "onPointerup"]));
  }
}), P1 = /* @__PURE__ */ w({
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
    const a = Ft(e, t);
    return (r, l) => (h(), x(s(Xw), A({ "data-slot": "drawer" }, s(a)), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), I1 = /* @__PURE__ */ w({
  __name: "DrawerClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(w0), A({ "data-slot": "drawer-close" }, t), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), t_ = /* @__PURE__ */ w({
  __name: "DrawerOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = Bt(t, "class");
    return (o, a) => (h(), x(s(Zw), A({ "data-slot": "drawer-overlay" }, s(n), {
      class: s(V)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        t.class
      )
    }), null, 16, ["class"]));
  }
}), M1 = /* @__PURE__ */ w({
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
    const n = e, a = Ft(n, t);
    return (r, l) => (h(), x(s(eb), null, {
      default: y(() => [
        F(t_),
        F(s(e_), A({ "data-slot": "drawer-content" }, s(a), {
          class: s(V)(
            "group/drawer-content bg-background fixed z-50 flex h-auto flex-col",
            "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg",
            "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg",
            "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:sm:max-w-sm",
            "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:sm:max-w-sm",
            n.class
          )
        }), {
          default: y(() => [
            l[0] || (l[0] = he("div", { class: "mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full bg-muted group-data-[vaul-drawer-direction=bottom]/drawer-content:block" }, null, -1)),
            _(r.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), F1 = /* @__PURE__ */ w({
  __name: "DrawerDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = Bt(t, "class");
    return (o, a) => (h(), x(s(U0), A({ "data-slot": "drawer-description" }, s(n), {
      class: s(V)("text-muted-foreground text-sm", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), R1 = /* @__PURE__ */ w({
  __name: "DrawerFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("div", {
      "data-slot": "drawer-footer",
      class: ue(s(V)("mt-auto flex flex-col gap-2 p-4", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), L1 = /* @__PURE__ */ w({
  __name: "DrawerHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("div", {
      "data-slot": "drawer-header",
      class: ue(s(V)("flex flex-col gap-1.5 p-4", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), V1 = /* @__PURE__ */ w({
  __name: "DrawerTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = Bt(t, "class");
    return (o, a) => (h(), x(s(nb), A({ "data-slot": "drawer-title" }, s(n), {
      class: s(V)("text-foreground font-semibold", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), N1 = /* @__PURE__ */ w({
  __name: "DrawerTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(ab), A({ "data-slot": "drawer-trigger" }, t), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), q1 = /* @__PURE__ */ w({
  __name: "DropdownMenu",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = ie(e, t);
    return (r, l) => (h(), x(s(Lf), Z(ee(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), z1 = /* @__PURE__ */ w({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const n = ze(e);
    return (o, a) => (h(), x(s(Vf), A({ class: "outline-none" }, s(n)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), j1 = /* @__PURE__ */ w({
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
    }), r = ie(a, o);
    return (l, i) => (h(), x(s(Nf), null, {
      default: y(() => [
        F(s(qf), A(s(r), {
          class: s(V)(
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
}), K1 = /* @__PURE__ */ w({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(jf), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), H1 = /* @__PURE__ */ w({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = ie(e, t);
    return (r, l) => (h(), x(s(Uf), Z(ee(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), W1 = /* @__PURE__ */ w({
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
    }), o = ze(n);
    return (a, r) => (h(), x(s(zf), A(s(o), {
      class: s(V)(
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
}), n_ = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, U1 = /* @__PURE__ */ w({
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
    }), r = ie(a, o);
    return (l, i) => (h(), x(s(Hf), A(s(r), {
      class: s(V)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        n.class
      )
    }), {
      default: y(() => [
        he("span", n_, [
          F(s(mi), null, {
            default: y(() => [
              F(s(ji), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), o_ = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, G1 = /* @__PURE__ */ w({
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
    }), r = ie(a, o);
    return (l, i) => (h(), x(s(Gf), A(s(r), {
      class: s(V)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        n.class
      )
    }), {
      default: y(() => [
        he("span", o_, [
          F(s(mi), null, {
            default: y(() => [
              F(s(nh), { class: "h-4 w-4 fill-current" })
            ]),
            _: 1
          })
        ]),
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Y1 = /* @__PURE__ */ w({
  __name: "DropdownMenuShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("span", {
      class: ue(s(V)("ml-auto text-xs tracking-widest opacity-60", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), X1 = /* @__PURE__ */ w({
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
    return (o, a) => (h(), x(s(Kf), A(n.value, {
      class: s(V)("-mx-1 my-1 h-px bg-muted", t.class)
    }), null, 16, ["class"]));
  }
}), Z1 = /* @__PURE__ */ w({
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
    }), o = ze(n);
    return (a, r) => (h(), x(s(Wf), A(s(o), {
      class: s(V)("px-2 py-1.5 text-sm font-semibold", a.inset && "pl-8", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Q1 = /* @__PURE__ */ w({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = ie(e, t);
    return (r, l) => (h(), x(s(Yf), Z(ee(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), J1 = /* @__PURE__ */ w({
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
    }), o = ze(n);
    return (a, r) => (h(), x(s(Zf), A(s(o), {
      class: s(V)(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
        t.class
      )
    }), {
      default: y(() => [
        _(a.$slots, "default"),
        F(s(eh), { class: "ml-auto h-4 w-4" })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ex = /* @__PURE__ */ w({
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
    }), r = ie(a, o);
    return (l, i) => (h(), x(s(Xf), A(s(r), {
      class: s(V)(
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
}), tx = /* @__PURE__ */ w({
  __name: "Input",
  props: {
    defaultValue: {},
    modelValue: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = Wi(n, "modelValue", t, {
      passive: !0,
      defaultValue: n.defaultValue
    });
    return (r, l) => Dn((h(), z("input", {
      "onUpdate:modelValue": l[0] || (l[0] = (i) => at(a) ? a.value = i : null),
      class: ue(
        s(V)(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          n.class
        )
      )
    }, null, 2)), [
      [cl, s(a)]
    ]);
  }
}), nx = /* @__PURE__ */ w({
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
    return (o, a) => (h(), x(s(Qf), A(n.value, {
      class: s(V)(
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
}), ox = /* @__PURE__ */ w({
  __name: "Popover",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = ie(e, t);
    return (r, l) => (h(), x(s(em), Z(ee(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ax = /* @__PURE__ */ w({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(tm), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), rx = /* @__PURE__ */ w({
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
    }), r = ie(a, o);
    return (l, i) => (h(), x(s(nm), null, {
      default: y(() => [
        F(s(rm), A({ ...s(r), ...l.$attrs }, {
          class: s(V)(
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
}), sx = /* @__PURE__ */ w({
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
    return (o, a) => (h(), x(s(dm), A(n.value, {
      class: s(V)("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", t.class)
    }), {
      default: y(() => [
        F(s(cm), {
          class: "h-full w-full flex-1 bg-primary transition-all",
          style: wt(`transform: translateX(-${100 - (t.modelValue ?? 0)}%);`)
        }, null, 8, ["style"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), lx = /* @__PURE__ */ w({
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
    const a = ie(e, t);
    return (r, l) => (h(), x(s(hm), Z(ee(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ix = /* @__PURE__ */ w({
  __name: "SelectValue",
  props: {
    placeholder: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(qm), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ux = /* @__PURE__ */ w({
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
    }), o = ze(n);
    return (a, r) => (h(), x(s(wm), A(s(o), {
      class: s(V)(
        "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:truncate text-start",
        t.class
      )
    }), {
      default: y(() => [
        _(a.$slots, "default"),
        F(s(zm), { "as-child": "" }, {
          default: y(() => [
            F(s(Jg), { class: "h-4 w-4 shrink-0 opacity-50" })
          ]),
          _: 1
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), dx = /* @__PURE__ */ w({
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
    }), r = ie(a, o);
    return (l, i) => (h(), x(s(_m), null, {
      default: y(() => [
        F(s(Dm), A({ ...s(r), ...l.$attrs }, {
          class: s(V)(
            "relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            l.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            n.class
          )
        }), {
          default: y(() => [
            F(s(r_)),
            F(s(Lm), {
              class: ue(
                s(V)(
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
            F(s(s_))
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), cx = /* @__PURE__ */ w({
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
    return (o, a) => (h(), x(s(Fm), A({
      class: s(V)("p-1 w-full", t.class)
    }, n.value), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), a_ = { class: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center" }, px = /* @__PURE__ */ w({
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
    }), o = ze(n);
    return (a, r) => (h(), x(s(Tm), A(s(o), {
      class: s(V)(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        t.class
      )
    }), {
      default: y(() => [
        he("span", a_, [
          F(s(Pm), null, {
            default: y(() => [
              F(s(ji), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        F(s(bi), null, {
          default: y(() => [
            _(a.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), fx = /* @__PURE__ */ w({
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(bi), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), mx = /* @__PURE__ */ w({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Rm), {
      class: ue(s(V)("px-2 py-1.5 text-sm font-semibold", t.class))
    }, {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), vx = /* @__PURE__ */ w({
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
    return (o, a) => (h(), x(s(km), A(n.value, {
      class: s(V)("-mx-1 my-1 h-px bg-muted", t.class)
    }), null, 16, ["class"]));
  }
}), r_ = /* @__PURE__ */ w({
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
    }), o = ze(n);
    return (a, r) => (h(), x(s(Vm), A(s(o), {
      class: s(V)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default", {}, () => [
          F(s(th))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), s_ = /* @__PURE__ */ w({
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
    }), o = ze(n);
    return (a, r) => (h(), x(s(Nm), A(s(o), {
      class: s(V)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default", {}, () => [
          F(s(Ki))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), gx = /* @__PURE__ */ w({
  __name: "Sheet",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = ie(e, t);
    return (r, l) => (h(), x(s(_r), Z(ee(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hx = /* @__PURE__ */ w({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(xr), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), yx = /* @__PURE__ */ w({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(an), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), bx = /* @__PURE__ */ w({
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
    }), r = ie(a, o);
    return (l, i) => (h(), x(s(Cr), null, {
      default: y(() => [
        F(s(ta), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        F(s(ea), A({
          class: s(V)(s(l_)({ side: l.side }), n.class)
        }, { ...s(r), ...l.$attrs }), {
          default: y(() => [
            _(l.$slots, "default"),
            F(s(an), { class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary" }, {
              default: y(() => [
                F(s(sa), { class: "h-4 w-4" })
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
}), wx = /* @__PURE__ */ w({
  __name: "SheetHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("div", {
      class: ue(s(V)("flex flex-col gap-y-2 text-center sm:text-left", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), _x = /* @__PURE__ */ w({
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
    return (o, a) => (h(), x(s($r), A({
      class: s(V)("text-lg font-semibold text-foreground", t.class)
    }, n.value), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), xx = /* @__PURE__ */ w({
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
    return (o, a) => (h(), x(s(Er), A({
      class: s(V)("text-sm text-muted-foreground", t.class)
    }, n.value), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Cx = /* @__PURE__ */ w({
  __name: "SheetFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("div", {
      class: ue(s(V)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), l_ = fo(
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
), Bx = /* @__PURE__ */ w({
  __name: "Skeleton",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("div", {
      class: ue(s(V)("animate-pulse rounded-md bg-primary/10", t.class))
    }, null, 2));
  }
}), Ox = /* @__PURE__ */ w({
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
    }), r = ie(a, o);
    return (l, i) => (h(), x(s(tv), A({
      class: s(V)("relative flex w-full touch-none select-none items-center", n.class)
    }, s(r)), {
      default: y(() => [
        F(s(av), { class: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20" }, {
          default: y(() => [
            F(s(rv), { class: "absolute h-full bg-primary" })
          ]),
          _: 1
        }),
        (h(!0), z(Ae, null, jt(l.modelValue, (u, d) => (h(), x(s(ov), {
          key: d,
          class: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        }))), 128))
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Sx = /* @__PURE__ */ w({
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
    }), r = ie(a, o);
    return (l, i) => (h(), x(s(dv), A(s(r), {
      class: s(V)(
        "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        n.class
      )
    }), {
      default: y(() => [
        F(s(cv), {
          class: ue(
            s(V)(
              "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
            )
          )
        }, null, 8, ["class"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), i_ = { class: "relative w-full overflow-auto" }, $x = /* @__PURE__ */ w({
  __name: "Table",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("div", i_, [
      he("table", {
        class: ue(s(V)("w-full caption-bottom text-sm", t.class))
      }, [
        _(n.$slots, "default")
      ], 2)
    ]));
  }
}), Ex = /* @__PURE__ */ w({
  __name: "TableBody",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("tbody", {
      class: ue(s(V)("[&_tr:last-child]:border-0", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), u_ = /* @__PURE__ */ w({
  __name: "TableCell",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("td", {
      class: ue(
        s(V)(
          "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5",
          t.class
        )
      )
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), Dx = /* @__PURE__ */ w({
  __name: "TableHead",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("th", {
      class: ue(
        s(V)(
          "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5",
          t.class
        )
      )
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), kx = /* @__PURE__ */ w({
  __name: "TableHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("thead", {
      class: ue(s(V)("[&_tr]:border-b", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), Ax = /* @__PURE__ */ w({
  __name: "TableFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("tfoot", {
      class: ue(s(V)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), d_ = /* @__PURE__ */ w({
  __name: "TableRow",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("tr", {
      class: ue(
        s(V)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", t.class)
      )
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), Tx = /* @__PURE__ */ w({
  __name: "TableCaption",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("caption", {
      class: ue(s(V)("mt-4 text-sm text-muted-foreground", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), c_ = { class: "flex items-center justify-center py-10" }, Px = /* @__PURE__ */ w({
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
    return (o, a) => (h(), x(d_, null, {
      default: y(() => [
        F(u_, A({
          class: s(V)("p-4 whitespace-nowrap align-middle text-sm text-foreground", t.class)
        }, n.value), {
          default: y(() => [
            he("div", c_, [
              _(o.$slots, "default")
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Ix = /* @__PURE__ */ w({
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
    const a = ie(e, t);
    return (r, l) => (h(), x(s(fv), Z(ee(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Mx = /* @__PURE__ */ w({
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
    return (o, a) => (h(), x(s(vv), A({
      class: s(V)(
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
}), Fx = /* @__PURE__ */ w({
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
    return (o, a) => (h(), x(s(mv), A(n.value, {
      class: s(V)(
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
}), p_ = { class: "truncate" }, Rx = /* @__PURE__ */ w({
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
    }), o = ze(n);
    return (a, r) => (h(), x(s(gv), A(s(o), {
      class: s(V)(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
        t.class
      )
    }), {
      default: y(() => [
        he("span", p_, [
          _(a.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Lx = /* @__PURE__ */ w({
  __name: "Textarea",
  props: {
    class: {},
    defaultValue: {},
    modelValue: {},
    charLimit: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = Wi(n, "modelValue", t, {
      passive: !0,
      defaultValue: n.defaultValue
    }), r = S(() => a.value ? a.value.toString().length : 0);
    return (l, i) => (h(), z(Ae, null, [
      Dn(he("textarea", {
        "onUpdate:modelValue": i[0] || (i[0] = (u) => at(a) ? a.value = u : null),
        class: ue(
          s(V)(
            "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            n.class
          )
        )
      }, null, 2), [
        [cl, s(a)]
      ]),
      l.charLimit ? (h(), z("p", {
        key: 0,
        class: ue(["mt-1 flex w-full justify-end text-sm text-gray-500", { "text-red-500": r.value > l.charLimit }])
      }, Pe(r.value) + " / " + Pe(l.charLimit), 3)) : ge("", !0)
    ], 64));
  }
});
export {
  T_ as Accord,
  ch as Accordion,
  ph as AccordionContent,
  fh as AccordionItem,
  mh as AccordionTrigger,
  bh as AlertDialog,
  Oh as AlertDialogAction,
  Sh as AlertDialogCancel,
  wh as AlertDialogContent,
  Ch as AlertDialogDescription,
  Bh as AlertDialogFooter,
  _h as AlertDialogHeader,
  xh as AlertDialogTitle,
  I_ as AlertDialogTrigger,
  M_ as Avatar,
  R_ as AvatarFallback,
  F_ as AvatarImage,
  L_ as Badge,
  Hi as Button,
  V_ as Card,
  N_ as CardContent,
  q_ as CardDescription,
  z_ as CardFooter,
  j_ as CardHeader,
  K_ as CardTitle,
  H_ as Carousel,
  W_ as CarouselContent,
  U_ as CarouselItem,
  Y_ as CarouselNext,
  G_ as CarouselPrevious,
  r1 as Checkbox,
  s1 as Collapsible,
  l1 as CollapsibleContent,
  i1 as CollapsibleTrigger,
  u1 as Combobox,
  d1 as ComboboxAnchor,
  n1 as ComboboxCancel,
  c1 as ComboboxEmpty,
  p1 as ComboboxGroup,
  f1 as ComboboxInput,
  m1 as ComboboxItem,
  o1 as ComboboxItemIndicator,
  v1 as ComboboxList,
  g1 as ComboboxSeparator,
  a1 as ComboboxTrigger,
  Dw as Command,
  B1 as CommandDialog,
  O1 as CommandEmpty,
  S1 as CommandGroup,
  $1 as CommandInput,
  E1 as CommandItem,
  D1 as CommandList,
  k1 as CommandSeparator,
  A1 as CommandShortcut,
  T1 as ConfirmDialog,
  kw as Dialog,
  h1 as DialogClose,
  Aw as DialogContent,
  _1 as DialogDescription,
  C1 as DialogFooter,
  b1 as DialogHeader,
  x1 as DialogScrollContent,
  w1 as DialogTitle,
  y1 as DialogTrigger,
  P1 as Drawer,
  I1 as DrawerClose,
  M1 as DrawerContent,
  F1 as DrawerDescription,
  R1 as DrawerFooter,
  L1 as DrawerHeader,
  t_ as DrawerOverlay,
  V1 as DrawerTitle,
  N1 as DrawerTrigger,
  q1 as DropdownMenu,
  U1 as DropdownMenuCheckboxItem,
  j1 as DropdownMenuContent,
  K1 as DropdownMenuGroup,
  W1 as DropdownMenuItem,
  Z1 as DropdownMenuLabel,
  Nf as DropdownMenuPortal,
  H1 as DropdownMenuRadioGroup,
  G1 as DropdownMenuRadioItem,
  X1 as DropdownMenuSeparator,
  Y1 as DropdownMenuShortcut,
  Q1 as DropdownMenuSub,
  ex as DropdownMenuSubContent,
  J1 as DropdownMenuSubTrigger,
  z1 as DropdownMenuTrigger,
  k_ as Flasher,
  C_ as Header,
  A_ as Heading,
  tx as Input,
  nx as Label,
  B_ as Main,
  ox as Popover,
  w_ as PopoverAnchor,
  rx as PopoverContent,
  ax as PopoverTrigger,
  sx as Progress,
  lx as Select,
  dx as SelectContent,
  cx as SelectGroup,
  px as SelectItem,
  fx as SelectItemText,
  mx as SelectLabel,
  s_ as SelectScrollDownButton,
  r_ as SelectScrollUpButton,
  vx as SelectSeparator,
  ux as SelectTrigger,
  ix as SelectValue,
  gx as Sheet,
  yx as SheetClose,
  bx as SheetContent,
  xx as SheetDescription,
  Cx as SheetFooter,
  wx as SheetHeader,
  _x as SheetTitle,
  hx as SheetTrigger,
  Bx as Skeleton,
  Ox as Slider,
  Sx as Switch,
  $x as Table,
  Ex as TableBody,
  Tx as TableCaption,
  u_ as TableCell,
  Px as TableEmpty,
  Ax as TableFooter,
  Dx as TableHead,
  kx as TableHeader,
  d_ as TableRow,
  Ix as Tabs,
  Mx as TabsContent,
  Fx as TabsList,
  Rx as TabsTrigger,
  Lx as Textarea,
  P_ as Tip,
  Yg as Toast,
  D_ as ToastAction,
  ah as ToastClose,
  Ps as ToastDescription,
  sh as ToastProvider,
  rh as ToastTitle,
  Xg as ToastViewport,
  Gg as Toaster,
  vh as Tooltip,
  gh as TooltipContent,
  hh as TooltipProvider,
  yh as TooltipTrigger,
  x_ as TwoColumnLayout,
  O_ as TwoColumnLayoutSidebar,
  S_ as TwoColumnLayoutSidebarDesktop,
  $_ as TwoColumnLayoutSidebarMobile,
  E_ as TwoColumnLayoutSidebarTrigger,
  $h as avatarVariant,
  Eh as badgeVariants,
  zr as buttonVariants,
  V as cn,
  v_ as preset,
  l_ as sheetVariants,
  jg as toast,
  lh as toastVariants,
  ia as useCarousel,
  Fw as useConfirmDialog,
  ih as useFlasher,
  zi as useToast,
  __ as valueUpdater
};
