var gs = (e) => {
  throw TypeError(e);
};
var Nu = (e, t, n) => t.has(e) || gs("Cannot " + n);
var Xn = (e, t, n) => (Nu(e, t, "read from private field"), n ? n.call(e) : t.get(e)), hs = (e, t, n) => t.has(e) ? gs("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n);
import * as On from "vue";
import { computed as $, ref as E, shallowRef as rt, watch as ne, getCurrentScope as Qo, onScopeDispose as Jo, shallowReadonly as Cn, unref as s, defineComponent as b, createBlock as x, openBlock as h, normalizeProps as Z, guardReactiveProps as te, withCtx as y, renderSlot as w, mergeProps as k, withModifiers as Fe, nextTick as se, onMounted as ie, toRefs as ye, createVNode as F, watchEffect as xe, normalizeStyle as _t, createCommentVNode as he, getCurrentInstance as Qe, toRef as ir, camelize as ea, withKeys as ot, toHandlers as zu, resolveDynamicComponent as lt, withDirectives as Mn, vShow as ur, h as Ze, createTextVNode as Ce, watchSyncEffect as vl, toDisplayString as Ie, isRef as tt, onBeforeMount as ml, onUnmounted as Ke, createElementBlock as K, Fragment as Te, renderList as Gt, useSlots as dr, Teleport as po, onBeforeUnmount as Fn, toHandlerKey as gl, inject as un, provide as dn, onBeforeUpdate as ju, onUpdated as Ku, reactive as Yt, readonly as Rn, Comment as cr, cloneVNode as hl, markRaw as yl, createElementVNode as de, vModelSelect as Hu, toRaw as Wu, mergeDefaults as pr, watchPostEffect as fr, effectScope as ta, customRef as vr, normalizeClass as le, isVNode as Uu, toValue as Ue, withMemo as Gu, vModelText as bl, mergeModels as ys, useModel as Yu } from "vue";
function wl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Xu = {
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
}, Sa = Xu, mr = {
  whitespace: /\s+/g,
  urlHexPairs: /%[\dA-F]{2}/g,
  quotes: /"/g
};
function Zu(e) {
  return e.trim().replace(mr.whitespace, " ");
}
function Qu(e) {
  return encodeURIComponent(e).replace(mr.urlHexPairs, ed);
}
function Ju(e) {
  return Object.keys(Sa).forEach(function(t) {
    Sa[t].test(e) && (e = e.replace(Sa[t], t));
  }), e;
}
function ed(e) {
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
function Ha(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string, but received " + typeof e);
  e.charCodeAt(0) === 65279 && (e = e.slice(1));
  var t = Ju(Zu(e)).replace(mr.quotes, "'");
  return "data:image/svg+xml," + Qu(t);
}
Ha.toSrcset = function(t) {
  return Ha(t).replace(/ /g, "%20");
};
var td = Ha, _l = {}, xl = {};
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
})(xl);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return o;
    }
  });
  const t = /* @__PURE__ */ n(xl);
  function n(a) {
    return a && a.__esModule ? a : {
      default: a
    };
  }
  const o = t.default;
})(_l);
let $a = _l;
var Cl = ($a.__esModule ? $a : { default: $a }).default, Bl = {}, Sl = {};
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
})(Sl);
var nd = {
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
  const t = Sl, n = /* @__PURE__ */ o(nd);
  function o(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  const a = (0, t.cloneDeep)(n.default.theme);
})(Bl);
let Oa = Bl;
var od = (Oa.__esModule ? Oa : { default: Oa }).default, $l = {}, Ol = {}, gr = { exports: {} }, fe = String, El = function() {
  return { isColorSupported: !1, reset: fe, bold: fe, dim: fe, italic: fe, underline: fe, inverse: fe, hidden: fe, strikethrough: fe, black: fe, red: fe, green: fe, yellow: fe, blue: fe, magenta: fe, cyan: fe, white: fe, gray: fe, bgBlack: fe, bgRed: fe, bgGreen: fe, bgYellow: fe, bgBlue: fe, bgMagenta: fe, bgCyan: fe, bgWhite: fe, blackBright: fe, redBright: fe, greenBright: fe, yellowBright: fe, blueBright: fe, magentaBright: fe, cyanBright: fe, whiteBright: fe, bgBlackBright: fe, bgRedBright: fe, bgGreenBright: fe, bgYellowBright: fe, bgBlueBright: fe, bgMagentaBright: fe, bgCyanBright: fe, bgWhiteBright: fe };
};
gr.exports = El();
gr.exports.createColors = El;
var ad = gr.exports;
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
  const n = /* @__PURE__ */ o(ad);
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
})(Ol);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return a;
    }
  });
  const t = /* @__PURE__ */ n(Ol);
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
})($l);
let Ea = $l;
var rd = (Ea.__esModule ? Ea : { default: Ea }).default;
const So = td, sd = Cl, Pl = od, zt = rd, [ld, { lineHeight: id }] = Pl.fontSize.base, { spacing: It, borderWidth: bs, borderRadius: ws } = Pl;
function an(e, t) {
  return e.replace("<alpha-value>", `var(${t}, 1)`);
}
const ud = sd.withOptions(function(e = { strategy: void 0 }) {
  return function({ addBase: t, addComponents: n, theme: o }) {
    function a(u, d) {
      let c = o(u);
      return !c || c.includes("var(") ? d : c.replace("<alpha-value>", "1");
    }
    const r = e.strategy === void 0 ? ["base", "class"] : [e.strategy], l = [
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
          "border-color": an(
            o("colors.gray.500", zt.gray[500]),
            "--tw-border-opacity"
          ),
          "border-width": bs.DEFAULT,
          "border-radius": ws.none,
          "padding-top": It[2],
          "padding-right": It[3],
          "padding-bottom": It[2],
          "padding-left": It[3],
          "font-size": ld,
          "line-height": id,
          "--tw-shadow": "0 0 #0000",
          "&:focus": {
            outline: "2px solid transparent",
            "outline-offset": "2px",
            "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)",
            "--tw-ring-offset-width": "0px",
            "--tw-ring-offset-color": "#fff",
            "--tw-ring-color": an(
              o("colors.blue.600", zt.blue[600]),
              "--tw-ring-opacity"
            ),
            "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
            "--tw-ring-shadow": "var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
            "box-shadow": "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)",
            "border-color": an(
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
          color: an(o("colors.gray.500", zt.gray[500]), "--tw-text-opacity"),
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
          "background-image": `url("${So(
            `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="${a(
              "colors.gray.500",
              zt.gray[500]
            )}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 8l4 4 4-4"/></svg>`
          )}")`,
          "background-position": `right ${It[2]} center`,
          "background-repeat": "no-repeat",
          "background-size": "1.5em 1.5em",
          "padding-right": It[10],
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
          "padding-right": It[3],
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
          height: It[4],
          width: It[4],
          color: an(o("colors.blue.600", zt.blue[600]), "--tw-text-opacity"),
          "background-color": "#fff",
          "border-color": an(
            o("colors.gray.500", zt.gray[500]),
            "--tw-border-opacity"
          ),
          "border-width": bs.DEFAULT,
          "--tw-shadow": "0 0 #0000"
        }
      },
      {
        base: ["input:where([type='checkbox'])"],
        class: [".form-checkbox"],
        styles: {
          "border-radius": ws.none
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
          "--tw-ring-color": an(
            o("colors.blue.600", zt.blue[600]),
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
          "background-image": `url("${So(
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
          "background-image": `url("${So(
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
          "background-image": `url("${So(
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
    r.includes("base") && t(i("base")), r.includes("class") && n(i("class"));
  };
});
var dd = ud;
const cd = /* @__PURE__ */ wl(dd), pd = Cl;
function _s(e) {
  return Object.fromEntries(
    Object.entries(e).filter(([t]) => t !== "DEFAULT")
  );
}
var fd = pd(
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
      { values: _s(n("animationDuration")) }
    ), t(
      { delay: (o) => ({ animationDelay: o }) },
      { values: n("animationDelay") }
    ), t(
      { ease: (o) => ({ animationTimingFunction: o }) },
      { values: _s(n("animationTimingFunction")) }
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
const vd = /* @__PURE__ */ wl(fd), E1 = {
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
    vd,
    cd({
      strategy: "class"
    })
  ]
}, md = ["top", "right", "bottom", "left"], Xt = Math.min, st = Math.max, jo = Math.round, $o = Math.floor, St = (e) => ({
  x: e,
  y: e
}), gd = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, hd = {
  start: "end",
  end: "start"
};
function Wa(e, t, n) {
  return st(e, Xt(t, n));
}
function Lt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Vt(e) {
  return e.split("-")[0];
}
function Ln(e) {
  return e.split("-")[1];
}
function hr(e) {
  return e === "x" ? "y" : "x";
}
function yr(e) {
  return e === "y" ? "height" : "width";
}
const yd = /* @__PURE__ */ new Set(["top", "bottom"]);
function Bt(e) {
  return yd.has(Vt(e)) ? "y" : "x";
}
function br(e) {
  return hr(Bt(e));
}
function bd(e, t, n) {
  n === void 0 && (n = !1);
  const o = Ln(e), a = br(e), r = yr(a);
  let l = a === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (l = Ko(l)), [l, Ko(l)];
}
function wd(e) {
  const t = Ko(e);
  return [Ua(e), t, Ua(t)];
}
function Ua(e) {
  return e.replace(/start|end/g, (t) => hd[t]);
}
const xs = ["left", "right"], Cs = ["right", "left"], _d = ["top", "bottom"], xd = ["bottom", "top"];
function Cd(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Cs : xs : t ? xs : Cs;
    case "left":
    case "right":
      return t ? _d : xd;
    default:
      return [];
  }
}
function Bd(e, t, n, o) {
  const a = Ln(e);
  let r = Cd(Vt(e), n === "start", o);
  return a && (r = r.map((l) => l + "-" + a), t && (r = r.concat(r.map(Ua)))), r;
}
function Ko(e) {
  return e.replace(/left|right|bottom|top/g, (t) => gd[t]);
}
function Sd(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function kl(e) {
  return typeof e != "number" ? Sd(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ho(e) {
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
function Bs(e, t, n) {
  let {
    reference: o,
    floating: a
  } = e;
  const r = Bt(t), l = br(t), i = yr(l), u = Vt(t), d = r === "y", c = o.x + o.width / 2 - a.width / 2, p = o.y + o.height / 2 - a.height / 2, f = o[i] / 2 - a[i] / 2;
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
  switch (Ln(t)) {
    case "start":
      v[l] -= f * (n && d ? -1 : 1);
      break;
    case "end":
      v[l] += f * (n && d ? -1 : 1);
      break;
  }
  return v;
}
const $d = async (e, t, n) => {
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
  } = Bs(d, o, u), f = o, v = {}, m = 0;
  for (let g = 0; g < i.length; g++) {
    const {
      name: _,
      fn: C
    } = i[g], {
      x: S,
      y: B,
      data: D,
      reset: O
    } = await C({
      x: c,
      y: p,
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
    c = S ?? c, p = B ?? p, v = {
      ...v,
      [_]: {
        ...v[_],
        ...D
      }
    }, O && m <= 50 && (m++, typeof O == "object" && (O.placement && (f = O.placement), O.rects && (d = O.rects === !0 ? await l.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : O.rects), {
      x: c,
      y: p
    } = Bs(d, f, u)), g = -1);
  }
  return {
    x: c,
    y: p,
    placement: f,
    strategy: a,
    middlewareData: v
  };
};
async function ao(e, t) {
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
    altBoundary: f = !1,
    padding: v = 0
  } = Lt(t, e), m = kl(v), _ = i[f ? p === "floating" ? "reference" : "floating" : p], C = Ho(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(_))) == null || n ? _ : _.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(i.floating)),
    boundary: d,
    rootBoundary: c,
    strategy: u
  })), S = p === "floating" ? {
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
  }, O = Ho(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: S,
    offsetParent: B,
    strategy: u
  }) : S);
  return {
    top: (C.top - O.top + m.top) / D.y,
    bottom: (O.bottom - C.bottom + m.bottom) / D.y,
    left: (C.left - O.left + m.left) / D.x,
    right: (O.right - C.right + m.right) / D.x
  };
}
const Od = (e) => ({
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
    } = Lt(e, t) || {};
    if (d == null)
      return {};
    const p = kl(c), f = {
      x: n,
      y: o
    }, v = br(a), m = yr(v), g = await l.getDimensions(d), _ = v === "y", C = _ ? "top" : "left", S = _ ? "bottom" : "right", B = _ ? "clientHeight" : "clientWidth", D = r.reference[m] + r.reference[v] - f[v] - r.floating[m], O = f[v] - r.reference[v], T = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(d));
    let P = T ? T[B] : 0;
    (!P || !await (l.isElement == null ? void 0 : l.isElement(T))) && (P = i.floating[B] || r.floating[m]);
    const M = D / 2 - O / 2, q = P / 2 - g[m] / 2 - 1, A = Xt(p[C], q), z = Xt(p[S], q), I = A, Q = P - g[m] - z, U = P / 2 - g[m] / 2 + M, N = Wa(I, U, Q), R = !u.arrow && Ln(a) != null && U !== N && r.reference[m] / 2 - (U < I ? A : z) - g[m] / 2 < 0, ae = R ? U < I ? U - I : U - Q : 0;
    return {
      [v]: f[v] + ae,
      data: {
        [v]: N,
        centerOffset: U - N - ae,
        ...R && {
          alignmentOffset: ae
        }
      },
      reset: R
    };
  }
}), Ed = function(e) {
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
        fallbackPlacements: f,
        fallbackStrategy: v = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: g = !0,
        ..._
      } = Lt(e, t);
      if ((n = r.arrow) != null && n.alignmentOffset)
        return {};
      const C = Vt(a), S = Bt(i), B = Vt(i) === i, D = await (u.isRTL == null ? void 0 : u.isRTL(d.floating)), O = f || (B || !g ? [Ko(i)] : wd(i)), T = m !== "none";
      !f && T && O.push(...Bd(i, g, m, D));
      const P = [i, ...O], M = await ao(t, _), q = [];
      let A = ((o = r.flip) == null ? void 0 : o.overflows) || [];
      if (c && q.push(M[C]), p) {
        const U = bd(a, l, D);
        q.push(M[U[0]], M[U[1]]);
      }
      if (A = [...A, {
        placement: a,
        overflows: q
      }], !q.every((U) => U <= 0)) {
        var z, I;
        const U = (((z = r.flip) == null ? void 0 : z.index) || 0) + 1, N = P[U];
        if (N && (!(p === "alignment" ? S !== Bt(N) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        A.every((G) => Bt(G.placement) === S ? G.overflows[0] > 0 : !0)))
          return {
            data: {
              index: U,
              overflows: A
            },
            reset: {
              placement: N
            }
          };
        let R = (I = A.filter((ae) => ae.overflows[0] <= 0).sort((ae, G) => ae.overflows[1] - G.overflows[1])[0]) == null ? void 0 : I.placement;
        if (!R)
          switch (v) {
            case "bestFit": {
              var Q;
              const ae = (Q = A.filter((G) => {
                if (T) {
                  const L = Bt(G.placement);
                  return L === S || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  L === "y";
                }
                return !0;
              }).map((G) => [G.placement, G.overflows.filter((L) => L > 0).reduce((L, ee) => L + ee, 0)]).sort((G, L) => G[1] - L[1])[0]) == null ? void 0 : Q[0];
              ae && (R = ae);
              break;
            }
            case "initialPlacement":
              R = i;
              break;
          }
        if (a !== R)
          return {
            reset: {
              placement: R
            }
          };
      }
      return {};
    }
  };
};
function Ss(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function $s(e) {
  return md.some((t) => e[t] >= 0);
}
const Pd = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: o = "referenceHidden",
        ...a
      } = Lt(e, t);
      switch (o) {
        case "referenceHidden": {
          const r = await ao(t, {
            ...a,
            elementContext: "reference"
          }), l = Ss(r, n.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: $s(l)
            }
          };
        }
        case "escaped": {
          const r = await ao(t, {
            ...a,
            altBoundary: !0
          }), l = Ss(r, n.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: $s(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Dl = /* @__PURE__ */ new Set(["left", "top"]);
async function kd(e, t) {
  const {
    placement: n,
    platform: o,
    elements: a
  } = e, r = await (o.isRTL == null ? void 0 : o.isRTL(a.floating)), l = Vt(n), i = Ln(n), u = Bt(n) === "y", d = Dl.has(l) ? -1 : 1, c = r && u ? -1 : 1, p = Lt(t, e);
  let {
    mainAxis: f,
    crossAxis: v,
    alignmentAxis: m
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: p.mainAxis || 0,
    crossAxis: p.crossAxis || 0,
    alignmentAxis: p.alignmentAxis
  };
  return i && typeof m == "number" && (v = i === "end" ? m * -1 : m), u ? {
    x: v * c,
    y: f * d
  } : {
    x: f * d,
    y: v * c
  };
}
const Dd = function(e) {
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
      } = t, u = await kd(t, e);
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
}, Ad = function(e) {
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
          fn: (_) => {
            let {
              x: C,
              y: S
            } = _;
            return {
              x: C,
              y: S
            };
          }
        },
        ...u
      } = Lt(e, t), d = {
        x: n,
        y: o
      }, c = await ao(t, u), p = Bt(Vt(a)), f = hr(p);
      let v = d[f], m = d[p];
      if (r) {
        const _ = f === "y" ? "top" : "left", C = f === "y" ? "bottom" : "right", S = v + c[_], B = v - c[C];
        v = Wa(S, v, B);
      }
      if (l) {
        const _ = p === "y" ? "top" : "left", C = p === "y" ? "bottom" : "right", S = m + c[_], B = m - c[C];
        m = Wa(S, m, B);
      }
      const g = i.fn({
        ...t,
        [f]: v,
        [p]: m
      });
      return {
        ...g,
        data: {
          x: g.x - n,
          y: g.y - o,
          enabled: {
            [f]: r,
            [p]: l
          }
        }
      };
    }
  };
}, Td = function(e) {
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
      } = Lt(e, t), c = {
        x: n,
        y: o
      }, p = Bt(a), f = hr(p);
      let v = c[f], m = c[p];
      const g = Lt(i, t), _ = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (u) {
        const B = f === "y" ? "height" : "width", D = r.reference[f] - r.floating[B] + _.mainAxis, O = r.reference[f] + r.reference[B] - _.mainAxis;
        v < D ? v = D : v > O && (v = O);
      }
      if (d) {
        var C, S;
        const B = f === "y" ? "width" : "height", D = Dl.has(Vt(a)), O = r.reference[p] - r.floating[B] + (D && ((C = l.offset) == null ? void 0 : C[p]) || 0) + (D ? 0 : _.crossAxis), T = r.reference[p] + r.reference[B] + (D ? 0 : ((S = l.offset) == null ? void 0 : S[p]) || 0) - (D ? _.crossAxis : 0);
        m < O ? m = O : m > T && (m = T);
      }
      return {
        [f]: v,
        [p]: m
      };
    }
  };
}, Id = function(e) {
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
      } = Lt(e, t), c = await ao(t, d), p = Vt(a), f = Ln(a), v = Bt(a) === "y", {
        width: m,
        height: g
      } = r.floating;
      let _, C;
      p === "top" || p === "bottom" ? (_ = p, C = f === (await (l.isRTL == null ? void 0 : l.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (C = p, _ = f === "end" ? "top" : "bottom");
      const S = g - c.top - c.bottom, B = m - c.left - c.right, D = Xt(g - c[_], S), O = Xt(m - c[C], B), T = !t.middlewareData.shift;
      let P = D, M = O;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (M = B), (o = t.middlewareData.shift) != null && o.enabled.y && (P = S), T && !f) {
        const A = st(c.left, 0), z = st(c.right, 0), I = st(c.top, 0), Q = st(c.bottom, 0);
        v ? M = m - 2 * (A !== 0 || z !== 0 ? A + z : st(c.left, c.right)) : P = g - 2 * (I !== 0 || Q !== 0 ? I + Q : st(c.top, c.bottom));
      }
      await u({
        ...t,
        availableWidth: M,
        availableHeight: P
      });
      const q = await l.getDimensions(i.floating);
      return m !== q.width || g !== q.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function na() {
  return typeof window < "u";
}
function cn(e) {
  return wr(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function it(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ot(e) {
  var t;
  return (t = (wr(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function wr(e) {
  return na() ? e instanceof Node || e instanceof it(e).Node : !1;
}
function yt(e) {
  return na() ? e instanceof Element || e instanceof it(e).Element : !1;
}
function $t(e) {
  return na() ? e instanceof HTMLElement || e instanceof it(e).HTMLElement : !1;
}
function Os(e) {
  return !na() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof it(e).ShadowRoot;
}
const Md = /* @__PURE__ */ new Set(["inline", "contents"]);
function fo(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: a
  } = bt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !Md.has(a);
}
const Fd = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Rd(e) {
  return Fd.has(cn(e));
}
const Ld = [":popover-open", ":modal"];
function oa(e) {
  return Ld.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const Vd = ["transform", "translate", "scale", "rotate", "perspective"], qd = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Nd = ["paint", "layout", "strict", "content"];
function _r(e) {
  const t = xr(), n = yt(e) ? bt(e) : e;
  return Vd.some((o) => n[o] ? n[o] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || qd.some((o) => (n.willChange || "").includes(o)) || Nd.some((o) => (n.contain || "").includes(o));
}
function zd(e) {
  let t = Zt(e);
  for (; $t(t) && !Dn(t); ) {
    if (_r(t))
      return t;
    if (oa(t))
      return null;
    t = Zt(t);
  }
  return null;
}
function xr() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const jd = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Dn(e) {
  return jd.has(cn(e));
}
function bt(e) {
  return it(e).getComputedStyle(e);
}
function aa(e) {
  return yt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Zt(e) {
  if (cn(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Os(e) && e.host || // Fallback.
    Ot(e)
  );
  return Os(t) ? t.host : t;
}
function Al(e) {
  const t = Zt(e);
  return Dn(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : $t(t) && fo(t) ? t : Al(t);
}
function ro(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const a = Al(e), r = a === ((o = e.ownerDocument) == null ? void 0 : o.body), l = it(a);
  if (r) {
    const i = Ga(l);
    return t.concat(l, l.visualViewport || [], fo(a) ? a : [], i && n ? ro(i) : []);
  }
  return t.concat(a, ro(a, [], n));
}
function Ga(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Tl(e) {
  const t = bt(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const a = $t(e), r = a ? e.offsetWidth : n, l = a ? e.offsetHeight : o, i = jo(n) !== r || jo(o) !== l;
  return i && (n = r, o = l), {
    width: n,
    height: o,
    $: i
  };
}
function Cr(e) {
  return yt(e) ? e : e.contextElement;
}
function En(e) {
  const t = Cr(e);
  if (!$t(t))
    return St(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: a,
    $: r
  } = Tl(t);
  let l = (r ? jo(n.width) : n.width) / o, i = (r ? jo(n.height) : n.height) / a;
  return (!l || !Number.isFinite(l)) && (l = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: l,
    y: i
  };
}
const Kd = /* @__PURE__ */ St(0);
function Il(e) {
  const t = it(e);
  return !xr() || !t.visualViewport ? Kd : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Hd(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== it(e) ? !1 : t;
}
function sn(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const a = e.getBoundingClientRect(), r = Cr(e);
  let l = St(1);
  t && (o ? yt(o) && (l = En(o)) : l = En(e));
  const i = Hd(r, n, o) ? Il(r) : St(0);
  let u = (a.left + i.x) / l.x, d = (a.top + i.y) / l.y, c = a.width / l.x, p = a.height / l.y;
  if (r) {
    const f = it(r), v = o && yt(o) ? it(o) : o;
    let m = f, g = Ga(m);
    for (; g && o && v !== m; ) {
      const _ = En(g), C = g.getBoundingClientRect(), S = bt(g), B = C.left + (g.clientLeft + parseFloat(S.paddingLeft)) * _.x, D = C.top + (g.clientTop + parseFloat(S.paddingTop)) * _.y;
      u *= _.x, d *= _.y, c *= _.x, p *= _.y, u += B, d += D, m = it(g), g = Ga(m);
    }
  }
  return Ho({
    width: c,
    height: p,
    x: u,
    y: d
  });
}
function ra(e, t) {
  const n = aa(e).scrollLeft;
  return t ? t.left + n : sn(Ot(e)).left + n;
}
function Ml(e, t) {
  const n = e.getBoundingClientRect(), o = n.left + t.scrollLeft - ra(e, n), a = n.top + t.scrollTop;
  return {
    x: o,
    y: a
  };
}
function Wd(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: o,
    strategy: a
  } = e;
  const r = a === "fixed", l = Ot(o), i = t ? oa(t.floating) : !1;
  if (o === l || i && r)
    return n;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = St(1);
  const c = St(0), p = $t(o);
  if ((p || !p && !r) && ((cn(o) !== "body" || fo(l)) && (u = aa(o)), $t(o))) {
    const v = sn(o);
    d = En(o), c.x = v.x + o.clientLeft, c.y = v.y + o.clientTop;
  }
  const f = l && !p && !r ? Ml(l, u) : St(0);
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - u.scrollLeft * d.x + c.x + f.x,
    y: n.y * d.y - u.scrollTop * d.y + c.y + f.y
  };
}
function Ud(e) {
  return Array.from(e.getClientRects());
}
function Gd(e) {
  const t = Ot(e), n = aa(e), o = e.ownerDocument.body, a = st(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), r = st(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let l = -n.scrollLeft + ra(e);
  const i = -n.scrollTop;
  return bt(o).direction === "rtl" && (l += st(t.clientWidth, o.clientWidth) - a), {
    width: a,
    height: r,
    x: l,
    y: i
  };
}
const Es = 25;
function Yd(e, t) {
  const n = it(e), o = Ot(e), a = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, i = 0, u = 0;
  if (a) {
    r = a.width, l = a.height;
    const c = xr();
    (!c || c && t === "fixed") && (i = a.offsetLeft, u = a.offsetTop);
  }
  const d = ra(o);
  if (d <= 0) {
    const c = o.ownerDocument, p = c.body, f = getComputedStyle(p), v = c.compatMode === "CSS1Compat" && parseFloat(f.marginLeft) + parseFloat(f.marginRight) || 0, m = Math.abs(o.clientWidth - p.clientWidth - v);
    m <= Es && (r -= m);
  } else d <= Es && (r += d);
  return {
    width: r,
    height: l,
    x: i,
    y: u
  };
}
const Xd = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Zd(e, t) {
  const n = sn(e, !0, t === "fixed"), o = n.top + e.clientTop, a = n.left + e.clientLeft, r = $t(e) ? En(e) : St(1), l = e.clientWidth * r.x, i = e.clientHeight * r.y, u = a * r.x, d = o * r.y;
  return {
    width: l,
    height: i,
    x: u,
    y: d
  };
}
function Ps(e, t, n) {
  let o;
  if (t === "viewport")
    o = Yd(e, n);
  else if (t === "document")
    o = Gd(Ot(e));
  else if (yt(t))
    o = Zd(t, n);
  else {
    const a = Il(e);
    o = {
      x: t.x - a.x,
      y: t.y - a.y,
      width: t.width,
      height: t.height
    };
  }
  return Ho(o);
}
function Fl(e, t) {
  const n = Zt(e);
  return n === t || !yt(n) || Dn(n) ? !1 : bt(n).position === "fixed" || Fl(n, t);
}
function Qd(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = ro(e, [], !1).filter((i) => yt(i) && cn(i) !== "body"), a = null;
  const r = bt(e).position === "fixed";
  let l = r ? Zt(e) : e;
  for (; yt(l) && !Dn(l); ) {
    const i = bt(l), u = _r(l);
    !u && i.position === "fixed" && (a = null), (r ? !u && !a : !u && i.position === "static" && !!a && Xd.has(a.position) || fo(l) && !u && Fl(e, l)) ? o = o.filter((c) => c !== l) : a = i, l = Zt(l);
  }
  return t.set(e, o), o;
}
function Jd(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: a
  } = e;
  const l = [...n === "clippingAncestors" ? oa(t) ? [] : Qd(t, this._c) : [].concat(n), o], i = l[0], u = l.reduce((d, c) => {
    const p = Ps(t, c, a);
    return d.top = st(p.top, d.top), d.right = Xt(p.right, d.right), d.bottom = Xt(p.bottom, d.bottom), d.left = st(p.left, d.left), d;
  }, Ps(t, i, a));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function ec(e) {
  const {
    width: t,
    height: n
  } = Tl(e);
  return {
    width: t,
    height: n
  };
}
function tc(e, t, n) {
  const o = $t(t), a = Ot(t), r = n === "fixed", l = sn(e, !0, r, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = St(0);
  function d() {
    u.x = ra(a);
  }
  if (o || !o && !r)
    if ((cn(t) !== "body" || fo(a)) && (i = aa(t)), o) {
      const v = sn(t, !0, r, t);
      u.x = v.x + t.clientLeft, u.y = v.y + t.clientTop;
    } else a && d();
  r && !o && a && d();
  const c = a && !o && !r ? Ml(a, i) : St(0), p = l.left + i.scrollLeft - u.x - c.x, f = l.top + i.scrollTop - u.y - c.y;
  return {
    x: p,
    y: f,
    width: l.width,
    height: l.height
  };
}
function Pa(e) {
  return bt(e).position === "static";
}
function ks(e, t) {
  if (!$t(e) || bt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Ot(e) === n && (n = n.ownerDocument.body), n;
}
function Rl(e, t) {
  const n = it(e);
  if (oa(e))
    return n;
  if (!$t(e)) {
    let a = Zt(e);
    for (; a && !Dn(a); ) {
      if (yt(a) && !Pa(a))
        return a;
      a = Zt(a);
    }
    return n;
  }
  let o = ks(e, t);
  for (; o && Rd(o) && Pa(o); )
    o = ks(o, t);
  return o && Dn(o) && Pa(o) && !_r(o) ? n : o || zd(e) || n;
}
const nc = async function(e) {
  const t = this.getOffsetParent || Rl, n = this.getDimensions, o = await n(e.floating);
  return {
    reference: tc(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function oc(e) {
  return bt(e).direction === "rtl";
}
const ac = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Wd,
  getDocumentElement: Ot,
  getClippingRect: Jd,
  getOffsetParent: Rl,
  getElementRects: nc,
  getClientRects: Ud,
  getDimensions: ec,
  getScale: En,
  isElement: yt,
  isRTL: oc
};
function Ll(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function rc(e, t) {
  let n = null, o;
  const a = Ot(e);
  function r() {
    var i;
    clearTimeout(o), (i = n) == null || i.disconnect(), n = null;
  }
  function l(i, u) {
    i === void 0 && (i = !1), u === void 0 && (u = 1), r();
    const d = e.getBoundingClientRect(), {
      left: c,
      top: p,
      width: f,
      height: v
    } = d;
    if (i || t(), !f || !v)
      return;
    const m = $o(p), g = $o(a.clientWidth - (c + f)), _ = $o(a.clientHeight - (p + v)), C = $o(c), B = {
      rootMargin: -m + "px " + -g + "px " + -_ + "px " + -C + "px",
      threshold: st(0, Xt(1, u)) || 1
    };
    let D = !0;
    function O(T) {
      const P = T[0].intersectionRatio;
      if (P !== u) {
        if (!D)
          return l();
        P ? l(!1, P) : o = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      P === 1 && !Ll(d, e.getBoundingClientRect()) && l(), D = !1;
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
function Vl(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: a = !0,
    ancestorResize: r = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = o, d = Cr(e), c = a || r ? [...d ? ro(d) : [], ...ro(t)] : [];
  c.forEach((C) => {
    a && C.addEventListener("scroll", n, {
      passive: !0
    }), r && C.addEventListener("resize", n);
  });
  const p = d && i ? rc(d, n) : null;
  let f = -1, v = null;
  l && (v = new ResizeObserver((C) => {
    let [S] = C;
    S && S.target === d && v && (v.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var B;
      (B = v) == null || B.observe(t);
    })), n();
  }), d && !u && v.observe(d), v.observe(t));
  let m, g = u ? sn(e) : null;
  u && _();
  function _() {
    const C = sn(e);
    g && !Ll(g, C) && n(), g = C, m = requestAnimationFrame(_);
  }
  return n(), () => {
    var C;
    c.forEach((S) => {
      a && S.removeEventListener("scroll", n), r && S.removeEventListener("resize", n);
    }), p == null || p(), (C = v) == null || C.disconnect(), v = null, u && cancelAnimationFrame(m);
  };
}
const ql = Dd, Nl = Ad, Wo = Ed, zl = Id, jl = Pd, sc = Od, Kl = Td, lc = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), a = {
    platform: ac,
    ...n
  }, r = {
    ...a.platform,
    _c: o
  };
  return $d(e, t, {
    ...a,
    platform: r
  });
};
function ic(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function Ya(e) {
  if (ic(e)) {
    const t = e.$el;
    return wr(t) && cn(t) === "#comment" ? null : t;
  }
  return e;
}
function $n(e) {
  return typeof e == "function" ? e() : s(e);
}
function Hl(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const n = Ya($n(e.element));
      return n == null ? {} : sc({
        element: n,
        padding: e.padding
      }).fn(t);
    }
  };
}
function Wl(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Ds(e, t) {
  const n = Wl(e);
  return Math.round(t * n) / n;
}
function Ul(e, t, n) {
  n === void 0 && (n = {});
  const o = n.whileElementsMounted, a = $(() => {
    var P;
    return (P = $n(n.open)) != null ? P : !0;
  }), r = $(() => $n(n.middleware)), l = $(() => {
    var P;
    return (P = $n(n.placement)) != null ? P : "bottom";
  }), i = $(() => {
    var P;
    return (P = $n(n.strategy)) != null ? P : "absolute";
  }), u = $(() => {
    var P;
    return (P = $n(n.transform)) != null ? P : !0;
  }), d = $(() => Ya(e.value)), c = $(() => Ya(t.value)), p = E(0), f = E(0), v = E(i.value), m = E(l.value), g = rt({}), _ = E(!1), C = $(() => {
    const P = {
      position: v.value,
      left: "0",
      top: "0"
    };
    if (!c.value)
      return P;
    const M = Ds(c.value, p.value), q = Ds(c.value, f.value);
    return u.value ? {
      ...P,
      transform: "translate(" + M + "px, " + q + "px)",
      ...Wl(c.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: v.value,
      left: M + "px",
      top: q + "px"
    };
  });
  let S;
  function B() {
    if (d.value == null || c.value == null)
      return;
    const P = a.value;
    lc(d.value, c.value, {
      middleware: r.value,
      placement: l.value,
      strategy: i.value
    }).then((M) => {
      p.value = M.x, f.value = M.y, v.value = M.strategy, m.value = M.placement, g.value = M.middlewareData, _.value = P !== !1;
    });
  }
  function D() {
    typeof S == "function" && (S(), S = void 0);
  }
  function O() {
    if (D(), o === void 0) {
      B();
      return;
    }
    if (d.value != null && c.value != null) {
      S = o(d.value, c.value, B);
      return;
    }
  }
  function T() {
    a.value || (_.value = !1);
  }
  return ne([r, l, i, a], B, {
    flush: "sync"
  }), ne([d, c], O, {
    flush: "sync"
  }), ne(a, T, {
    flush: "sync"
  }), Qo() && Jo(D), {
    x: Cn(p),
    y: Cn(f),
    strategy: Cn(v),
    placement: Cn(m),
    middlewareData: Cn(g),
    isPositioned: Cn(_),
    floatingStyles: C,
    update: B
  };
}
function be(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, o = Symbol(n);
  return [(a) => {
    const r = un(o, a);
    if (r || r === null)
      return r;
    throw new Error(
      `Injection \`${o.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (a) => (dn(o, a), a)];
}
function Br(e, t, n) {
  const o = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, { once: !0 }), o.dispatchEvent(a);
}
function Uo(e, t = Number.NEGATIVE_INFINITY, n = Number.POSITIVE_INFINITY) {
  return Math.min(n, Math.max(t, e));
}
function uc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var dc = function e(t, n) {
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
const rn = /* @__PURE__ */ uc(dc);
function Pn(e) {
  return e == null;
}
function cc(e, t) {
  var n;
  const o = rt();
  return xe(() => {
    o.value = e();
  }, {
    ...t,
    flush: (n = void 0) != null ? n : "sync"
  }), Rn(o);
}
function pn(e) {
  return Qo() ? (Jo(e), !0) : !1;
}
function pc() {
  const e = /* @__PURE__ */ new Set(), t = (n) => {
    e.delete(n);
  };
  return {
    on: (n) => {
      e.add(n);
      const o = () => t(n);
      return pn(o), {
        off: o
      };
    },
    off: t,
    trigger: (...n) => Promise.all(Array.from(e).map((o) => o(...n)))
  };
}
function fc(e) {
  let t = !1, n;
  const o = ta(!0);
  return (...a) => (t || (n = o.run(() => e(...a)), t = !0), n);
}
function Gl(e) {
  let t = 0, n, o;
  const a = () => {
    t -= 1, o && t <= 0 && (o.stop(), n = void 0, o = void 0);
  };
  return (...r) => (t += 1, n || (o = ta(!0), n = o.run(() => e(...r))), pn(a), n);
}
function Rt(e) {
  return typeof e == "function" ? e() : s(e);
}
const Et = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const vc = (e) => typeof e < "u", mc = (e) => e != null, gc = Object.prototype.toString, hc = (e) => gc.call(e) === "[object Object]", Yl = () => {
}, As = /* @__PURE__ */ yc();
function yc() {
  var e, t;
  return Et && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function bc(e) {
  return Qe();
}
function Xl(e, t = 1e4) {
  return vr((n, o) => {
    let a = Rt(e), r;
    const l = () => setTimeout(() => {
      a = Rt(e), o();
    }, Rt(t));
    return pn(() => {
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
function wc(e, t) {
  bc() && Fn(e, t);
}
function Sr(e, t, n = {}) {
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
    }, Rt(t));
  }
  return o && (a.value = !0, Et && u()), pn(i), {
    isPending: Rn(a),
    start: u,
    stop: i
  };
}
function _c(e = 1e3, t = {}) {
  const {
    controls: n = !1,
    callback: o
  } = t, a = Sr(
    o ?? Yl,
    e,
    t
  ), r = $(() => !a.isPending.value);
  return n ? {
    ready: r,
    ...a
  } : r;
}
function ct(e) {
  var t;
  const n = Rt(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const vo = Et ? window : void 0;
function An(...e) {
  let t, n, o, a;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, o, a] = e, t = vo) : [t, n, o, a] = e, !t)
    return Yl;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const r = [], l = () => {
    r.forEach((c) => c()), r.length = 0;
  }, i = (c, p, f, v) => (c.addEventListener(p, f, v), () => c.removeEventListener(p, f, v)), u = ne(
    () => [ct(t), Rt(a)],
    ([c, p]) => {
      if (l(), !c)
        return;
      const f = hc(p) ? { ...p } : p;
      r.push(
        ...n.flatMap((v) => o.map((m) => i(c, v, m, f)))
      );
    },
    { immediate: !0, flush: "post" }
  ), d = () => {
    u(), l();
  };
  return pn(d), d;
}
function xc(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function $r(...e) {
  let t, n, o = {};
  e.length === 3 ? (t = e[0], n = e[1], o = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], o = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: a = vo,
    eventName: r = "keydown",
    passive: l = !1,
    dedupe: i = !1
  } = o, u = xc(t);
  return An(a, r, (d) => {
    d.repeat && Rt(i) || u(d) && n(d);
  }, l);
}
function Or() {
  const e = E(!1), t = Qe();
  return t && ie(() => {
    e.value = !0;
  }, t), e;
}
function Cc(e) {
  const t = Or();
  return $(() => (t.value, !!e()));
}
function Bc(e, t, n = {}) {
  const { window: o = vo, ...a } = n;
  let r;
  const l = Cc(() => o && "MutationObserver" in o), i = () => {
    r && (r.disconnect(), r = void 0);
  }, u = $(() => {
    const f = Rt(e), v = (Array.isArray(f) ? f : [f]).map(ct).filter(mc);
    return new Set(v);
  }), d = ne(
    () => u.value,
    (f) => {
      i(), l.value && f.size && (r = new MutationObserver(t), f.forEach((v) => r.observe(v, a)));
    },
    { immediate: !0, flush: "post" }
  ), c = () => r == null ? void 0 : r.takeRecords(), p = () => {
    i(), d();
  };
  return pn(p), {
    isSupported: l,
    stop: p,
    takeRecords: c
  };
}
function Zl(e, t = {}) {
  const {
    immediate: n = !0,
    fpsLimit: o = void 0,
    window: a = vo
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
  function c() {
    !r.value && a && (r.value = !0, i = 0, u = a.requestAnimationFrame(d));
  }
  function p() {
    r.value = !1, u != null && a && (a.cancelAnimationFrame(u), u = null);
  }
  return n && c(), pn(p), {
    isActive: Rn(r),
    pause: p,
    resume: c
  };
}
function Sc(e) {
  return JSON.parse(JSON.stringify(e));
}
function Me(e, t, n, o = {}) {
  var a, r, l;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: c = !1,
    defaultValue: p,
    shouldEmit: f
  } = o, v = Qe(), m = n || (v == null ? void 0 : v.emit) || ((a = v == null ? void 0 : v.$emit) == null ? void 0 : a.bind(v)) || ((l = (r = v == null ? void 0 : v.proxy) == null ? void 0 : r.$emit) == null ? void 0 : l.bind(v == null ? void 0 : v.proxy));
  let g = d;
  t || (t = "modelValue"), g = g || `update:${t.toString()}`;
  const _ = (B) => i ? typeof i == "function" ? i(B) : Sc(B) : B, C = () => vc(e[t]) ? _(e[t]) : p, S = (B) => {
    f ? f(B) && m(g, B) : m(g, B);
  };
  if (u) {
    const B = C(), D = E(B);
    let O = !1;
    return ne(
      () => e[t],
      (T) => {
        O || (O = !0, D.value = _(T), se(() => O = !1));
      }
    ), ne(
      D,
      (T) => {
        !O && (T !== e[t] || c) && S(T);
      },
      { deep: c }
    ), D;
  } else
    return $({
      get() {
        return C();
      },
      set(B) {
        S(B);
      }
    });
}
function sa(e) {
  return e ? e.flatMap((t) => t.type === Te ? sa(t.children) : [t]) : [];
}
function Ge() {
  let e = document.activeElement;
  if (e == null)
    return null;
  for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null; )
    e = e.shadowRoot.activeElement;
  return e;
}
const $c = ["INPUT", "TEXTAREA"];
function Ql(e, t, n, o = {}) {
  if (!t || o.enableIgnoredElement && $c.includes(t.nodeName))
    return null;
  const {
    arrowKeyOptions: a = "both",
    attributeName: r = "[data-radix-vue-collection-item]",
    itemsArray: l = [],
    loop: i = !0,
    dir: u = "ltr",
    preventScroll: d = !0,
    focus: c = !1
  } = o, [p, f, v, m, g, _] = [
    e.key === "ArrowRight",
    e.key === "ArrowLeft",
    e.key === "ArrowUp",
    e.key === "ArrowDown",
    e.key === "Home",
    e.key === "End"
  ], C = v || m, S = p || f;
  if (!g && !_ && (!C && !S || a === "vertical" && S || a === "horizontal" && C))
    return null;
  const B = n ? Array.from(n.querySelectorAll(r)) : l;
  if (!B.length)
    return null;
  d && e.preventDefault();
  let D = null;
  return S || C ? D = Jl(B, t, {
    goForward: C ? m : u === "ltr" ? p : f,
    loop: i
  }) : g ? D = B.at(0) || null : _ && (D = B.at(-1) || null), c && (D == null || D.focus()), D;
}
function Jl(e, t, n, o = e.length) {
  if (--o === 0)
    return null;
  const a = e.indexOf(t), r = n.goForward ? a + 1 : a - 1;
  if (!n.loop && (r < 0 || r >= e.length))
    return null;
  const l = (r + e.length) % e.length, i = e[l];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? Jl(
    e,
    i,
    n,
    o
  ) : i : null;
}
function ka(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function Xa(e, t, n = ".", o) {
  if (!ka(t))
    return Xa(e, {}, n);
  const a = Object.assign({}, t);
  for (const r in e) {
    if (r === "__proto__" || r === "constructor")
      continue;
    const l = e[r];
    l != null && (Array.isArray(l) && Array.isArray(a[r]) ? a[r] = [...l, ...a[r]] : ka(l) && ka(a[r]) ? a[r] = Xa(
      l,
      a[r],
      (n ? `${n}.` : "") + r.toString()
    ) : a[r] = l);
  }
  return a;
}
function Oc(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, o) => Xa(n, o, ""), {})
  );
}
const Ec = Oc(), [la] = be("ConfigProvider");
let Pc = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", kc = (e = 21) => {
  let t = "", n = e;
  for (; n--; )
    t += Pc[Math.random() * 64 | 0];
  return t;
};
const Dc = Gl(() => {
  const e = E(/* @__PURE__ */ new Map()), t = E(), n = $(() => {
    for (const l of e.value.values())
      if (l)
        return !0;
    return !1;
  }), o = la({
    scrollBody: E(!0)
  });
  let a = null;
  const r = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", As && (a == null || a()), t.value = void 0;
  };
  return ne(n, (l, i) => {
    var u;
    if (!Et)
      return;
    if (!l) {
      i && r();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const d = window.innerWidth - document.documentElement.clientWidth, c = { padding: d, margin: 0 }, p = (u = o.scrollBody) != null && u.value ? typeof o.scrollBody.value == "object" ? Ec({
      padding: o.scrollBody.value.padding === !0 ? d : o.scrollBody.value.padding,
      margin: o.scrollBody.value.margin === !0 ? d : o.scrollBody.value.margin
    }, c) : c : { padding: 0, margin: 0 };
    d > 0 && (document.body.style.paddingRight = typeof p.padding == "number" ? `${p.padding}px` : String(p.padding), document.body.style.marginRight = typeof p.margin == "number" ? `${p.margin}px` : String(p.margin), document.body.style.setProperty("--scrollbar-width", `${d}px`), document.body.style.overflow = "hidden"), As && (a = An(
      document,
      "touchmove",
      (f) => Ac(f),
      { passive: !1 }
    )), se(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), e;
});
function mo(e) {
  const t = kc(6), n = Dc();
  n.value.set(t, e ?? !1);
  const o = $({
    get: () => n.value.get(t) ?? !1,
    set: (a) => n.value.set(t, a)
  });
  return wc(() => {
    n.value.delete(t);
  }), o;
}
function ei(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight)
    return !0;
  {
    const n = e.parentNode;
    return !(n instanceof Element) || n.tagName === "BODY" ? !1 : ei(n);
  }
}
function Ac(e) {
  const t = e || window.event, n = t.target;
  return n instanceof Element && ei(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
const Tc = "data-radix-vue-collection-item";
function Vn(e, t = Tc) {
  const n = Symbol();
  return { createCollection: (o) => {
    const a = E([]);
    function r() {
      const l = ct(o);
      return l ? a.value = Array.from(
        l.querySelectorAll(`[${t}]:not([data-disabled])`)
      ) : a.value = [];
    }
    return ju(() => {
      a.value = [];
    }), ie(r), Ku(r), ne(() => o == null ? void 0 : o.value, r, { immediate: !0 }), dn(n, a), a;
  }, injectCollection: () => un(n, E([])) };
}
function Jt(e) {
  const t = la({
    dir: E("ltr")
  });
  return $(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.dir) == null ? void 0 : n.value) || "ltr";
  });
}
function en(e) {
  const t = Qe(), n = t == null ? void 0 : t.type.emits, o = {};
  return n != null && n.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), n == null || n.forEach((a) => {
    o[gl(ea(a))] = (...r) => e(a, ...r);
  }), o;
}
let Da = 0;
function Er() {
  xe((e) => {
    if (!Et)
      return;
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? Ts()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? Ts()
    ), Da++, e(() => {
      Da === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((n) => n.remove()), Da--;
    });
  });
}
function Ts() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
function ia(e) {
  return $(() => {
    var t;
    return Rt(e) ? !!((t = ct(e)) != null && t.closest("form")) : !0;
  });
}
function Ye(e) {
  const t = Qe(), n = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((a, r) => {
    const l = (t == null ? void 0 : t.type.props[r]).default;
    return l !== void 0 && (a[r] = l), a;
  }, {}), o = ir(e);
  return $(() => {
    const a = {}, r = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(r).forEach((l) => {
      a[ea(l)] = r[l];
    }), Object.keys({ ...n, ...a }).reduce((l, i) => (o.value[i] !== void 0 && (l[i] = o.value[i]), l), {});
  });
}
function ce(e, t) {
  const n = Ye(e), o = t ? en(t) : {};
  return $(() => ({
    ...n.value,
    ...o
  }));
}
function j() {
  const e = Qe(), t = E(), n = $(() => {
    var l, i;
    return ["#text", "#comment"].includes((l = t.value) == null ? void 0 : l.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : ct(t);
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
function Ic(e, t) {
  const n = Xl(!1, 300), o = E(null), a = pc();
  function r() {
    o.value = null, n.value = !1;
  }
  function l(i, u) {
    const d = i.currentTarget, c = { x: i.clientX, y: i.clientY }, p = Mc(c, d.getBoundingClientRect()), f = Fc(c, p), v = Rc(u.getBoundingClientRect()), m = Vc([...f, ...v]);
    o.value = m, n.value = !0;
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
        var p, f;
        if (!o.value)
          return;
        const v = c.target, m = { x: c.clientX, y: c.clientY }, g = ((p = e.value) == null ? void 0 : p.contains(v)) || ((f = t.value) == null ? void 0 : f.contains(v)), _ = !Lc(m, o.value), C = !!v.closest("[data-grace-area-trigger]");
        g ? r() : (_ || C) && (r(), a.trigger());
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
function Mc(e, t) {
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
function Fc(e, t, n = 5) {
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
function Rc(e) {
  const { top: t, right: n, bottom: o, left: a } = e;
  return [
    { x: a, y: t },
    { x: n, y: t },
    { x: n, y: o },
    { x: a, y: o }
  ];
}
function Lc(e, t) {
  const { x: n, y: o } = e;
  let a = !1;
  for (let r = 0, l = t.length - 1; r < t.length; l = r++) {
    const i = t[r].x, u = t[r].y, d = t[l].x, c = t[l].y;
    u > o != c > o && n < (d - i) * (o - u) / (c - u) + i && (a = !a);
  }
  return a;
}
function Vc(e) {
  const t = e.slice();
  return t.sort((n, o) => n.x < o.x ? -1 : n.x > o.x ? 1 : n.y < o.y ? -1 : n.y > o.y ? 1 : 0), qc(t);
}
function qc(e) {
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
var Nc = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Bn = /* @__PURE__ */ new WeakMap(), Oo = /* @__PURE__ */ new WeakMap(), Eo = {}, Aa = 0, ti = function(e) {
  return e && (e.host || ti(e.parentNode));
}, zc = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = ti(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, jc = function(e, t, n, o) {
  var a = zc(t, Array.isArray(e) ? e : [e]);
  Eo[n] || (Eo[n] = /* @__PURE__ */ new WeakMap());
  var r = Eo[n], l = [], i = /* @__PURE__ */ new Set(), u = new Set(a), d = function(p) {
    !p || i.has(p) || (i.add(p), d(p.parentNode));
  };
  a.forEach(d);
  var c = function(p) {
    !p || u.has(p) || Array.prototype.forEach.call(p.children, function(f) {
      if (i.has(f))
        c(f);
      else
        try {
          var v = f.getAttribute(o), m = v !== null && v !== "false", g = (Bn.get(f) || 0) + 1, _ = (r.get(f) || 0) + 1;
          Bn.set(f, g), r.set(f, _), l.push(f), g === 1 && m && Oo.set(f, !0), _ === 1 && f.setAttribute(n, "true"), m || f.setAttribute(o, "true");
        } catch (C) {
          console.error("aria-hidden: cannot operate on ", f, C);
        }
    });
  };
  return c(t), i.clear(), Aa++, function() {
    l.forEach(function(p) {
      var f = Bn.get(p) - 1, v = r.get(p) - 1;
      Bn.set(p, f), r.set(p, v), f || (Oo.has(p) || p.removeAttribute(o), Oo.delete(p)), v || p.removeAttribute(n);
    }), Aa--, Aa || (Bn = /* @__PURE__ */ new WeakMap(), Bn = /* @__PURE__ */ new WeakMap(), Oo = /* @__PURE__ */ new WeakMap(), Eo = {});
  };
}, Kc = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), a = Nc(e);
  return a ? (o.push.apply(o, Array.from(a.querySelectorAll("[aria-live]"))), jc(o, a, n, "aria-hidden")) : function() {
    return null;
  };
};
function go(e) {
  let t;
  ne(() => ct(e), (n) => {
    n ? t = Kc(n) : t && t();
  }), Ke(() => {
    t && t();
  });
}
let Hc = 0;
function je(e, t = "radix") {
  const n = la({ useId: void 0 });
  return On.useId ? `${t}-${On.useId()}` : n.useId ? `${t}-${n.useId()}` : `${t}-${++Hc}`;
}
function ni(e) {
  const t = E(), n = $(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.width) ?? 0;
  }), o = $(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.height) ?? 0;
  });
  return ie(() => {
    const a = ct(e);
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
function Wc(e, t) {
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
const Uc = "data-item-text";
function Pr(e) {
  const t = Xl("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (n, o) => {
      if (!(e != null && e.value) && !o)
        return;
      t.value = t.value + n;
      const a = (e == null ? void 0 : e.value) ?? o, r = Ge(), l = a.map((p) => {
        var f;
        return {
          ref: p,
          textValue: ((f = (p.querySelector(`[${Uc}]`) ?? p).textContent) == null ? void 0 : f.trim()) ?? ""
        };
      }), i = l.find((p) => p.ref === r), u = l.map((p) => p.textValue), d = Yc(u, t.value, i == null ? void 0 : i.textValue), c = l.find((p) => p.textValue === d);
      return c && c.ref.focus(), c == null ? void 0 : c.ref;
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function Gc(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
function Yc(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((i) => i === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let r = Gc(e, Math.max(a, 0));
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
      const r = sa(n.default()), l = r.findIndex((c) => c.type !== cr);
      if (l === -1)
        return r;
      const i = r[l];
      (o = i.props) == null || delete o.ref;
      const u = i.props ? k(t, i.props) : t;
      t.class && (a = i.props) != null && a.class && delete i.props.class;
      const d = hl(i, u);
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
    return typeof o == "string" && ["area", "img", "input"].includes(o) ? () => Ze(o, t) : o !== "template" ? () => Ze(e.as, t, { default: n.default }) : () => Ze(kr, t, { default: n.default });
  }
});
function oi() {
  const e = E(), t = $(() => {
    var n, o;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (o = e.value) == null ? void 0 : o.$el.nextElementSibling : ct(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
const [ai, Xc] = be("CollapsibleRoot"), Zc = /* @__PURE__ */ b({
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
    const o = e, a = Me(o, "open", n, {
      defaultValue: o.defaultOpen,
      passive: o.open === void 0
    }), r = Me(o, "disabled");
    return Xc({
      contentId: "",
      disabled: r,
      open: a,
      onOpenToggle: () => {
        a.value = !a.value;
      }
    }), t({ open: a }), j(), (l, i) => (h(), x(s(X), {
      as: l.as,
      "as-child": o.asChild,
      "data-state": s(a) ? "open" : "closed",
      "data-disabled": s(r) ? "" : void 0
    }, {
      default: y(() => [
        w(l.$slots, "default", { open: s(a) })
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state", "data-disabled"]));
  }
}), Qc = /* @__PURE__ */ b({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    j();
    const n = ai();
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
          w(o.$slots, "default")
        ]),
        _: 3
      }, 8, ["type", "as", "as-child", "aria-controls", "aria-expanded", "data-state", "data-disabled", "disabled", "onClick"]);
    };
  }
});
function Jc(e, t) {
  var n;
  const o = E({}), a = E("none"), r = E(e), l = e.value ? "mounted" : "unmounted";
  let i;
  const u = ((n = t.value) == null ? void 0 : n.ownerDocument.defaultView) ?? vo, { state: d, dispatch: c } = Wc(l, {
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
    var C;
    if (Et) {
      const S = new CustomEvent(_, { bubbles: !1, cancelable: !1 });
      (C = t.value) == null || C.dispatchEvent(S);
    }
  };
  ne(
    e,
    async (_, C) => {
      var S;
      const B = C !== _;
      if (await se(), B) {
        const D = a.value, O = Po(t.value);
        _ ? (c("MOUNT"), p("enter"), O === "none" && p("after-enter")) : O === "none" || ((S = o.value) == null ? void 0 : S.display) === "none" ? (c("UNMOUNT"), p("leave"), p("after-leave")) : C && D !== O ? (c("ANIMATION_OUT"), p("leave")) : (c("UNMOUNT"), p("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const f = (_) => {
    const C = Po(t.value), S = C.includes(
      _.animationName
    ), B = d.value === "mounted" ? "enter" : "leave";
    if (_.target === t.value && S && (p(`after-${B}`), c("ANIMATION_END"), !r.value)) {
      const D = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", i = u == null ? void 0 : u.setTimeout(() => {
        var O;
        ((O = t.value) == null ? void 0 : O.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = D);
      });
    }
    _.target === t.value && C === "none" && c("ANIMATION_END");
  }, v = (_) => {
    _.target === t.value && (a.value = Po(t.value));
  }, m = ne(
    t,
    (_, C) => {
      _ ? (o.value = getComputedStyle(_), _.addEventListener("animationstart", v), _.addEventListener("animationcancel", f), _.addEventListener("animationend", f)) : (c("ANIMATION_END"), i !== void 0 && (u == null || u.clearTimeout(i)), C == null || C.removeEventListener("animationstart", v), C == null || C.removeEventListener("animationcancel", f), C == null || C.removeEventListener("animationend", f));
    },
    { immediate: !0 }
  ), g = ne(d, () => {
    const _ = Po(t.value);
    a.value = d.value === "mounted" ? _ : "none";
  });
  return Ke(() => {
    m(), g();
  }), {
    isPresent: $(
      () => ["mounted", "unmountSuspended"].includes(d.value)
    )
  };
}
function Po(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const pt = b({
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
    const { present: a, forceMount: r } = ye(e), l = E(), { isPresent: i } = Jc(a, l);
    n({ present: i });
    let u = t.default({ present: i });
    u = sa(u || []);
    const d = Qe();
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
    return () => r.value || a.value || i.value ? Ze(t.default({ present: i })[0], {
      ref: (c) => {
        const p = ct(c);
        return typeof (p == null ? void 0 : p.hasAttribute) > "u" || (p != null && p.hasAttribute("data-radix-popper-content-wrapper") ? l.value = p.firstElementChild : l.value = p), p;
      }
    }) : null;
  }
}), ep = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = ai();
    n.contentId || (n.contentId = je(void 0, "radix-vue-collapsible-content"));
    const o = E(), { forwardRef: a, currentElement: r } = j(), l = E(0), i = E(0), u = $(() => n.open.value), d = E(u.value), c = E();
    return ne(
      () => {
        var p;
        return [u.value, (p = o.value) == null ? void 0 : p.present];
      },
      async () => {
        await se();
        const p = r.value;
        if (!p)
          return;
        c.value = c.value || {
          transitionDuration: p.style.transitionDuration,
          animationName: p.style.animationName
        }, p.style.transitionDuration = "0s", p.style.animationName = "none";
        const f = p.getBoundingClientRect();
        i.value = f.height, l.value = f.width, d.value || (p.style.transitionDuration = c.value.transitionDuration, p.style.animationName = c.value.animationName);
      },
      {
        immediate: !0
      }
    ), ie(() => {
      requestAnimationFrame(() => {
        d.value = !1;
      });
    }), (p, f) => (h(), x(s(pt), {
      ref_key: "presentRef",
      ref: o,
      present: p.forceMount || s(n).open.value,
      "force-mount": !0
    }, {
      default: y(() => {
        var v, m;
        return [
          F(s(X), k(p.$attrs, {
            id: s(n).contentId,
            ref: s(a),
            "as-child": t.asChild,
            as: p.as,
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
                (g = o.value) != null && g.present ? w(p.$slots, "default", { key: 0 }) : he("", !0)
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
function ri({ type: e, defaultValue: t, modelValue: n }) {
  const o = n || t;
  if (Pn(e) && Pn(n) && Pn(t))
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
function tp({ type: e, defaultValue: t, modelValue: n }) {
  return e || ri({ type: e, defaultValue: t, modelValue: n });
}
function np({ type: e, defaultValue: t }) {
  return t !== void 0 ? t : e === "single" ? void 0 : [];
}
function op(e, t) {
  const n = E(tp(e)), o = Me(e, "modelValue", t, {
    defaultValue: np(e),
    passive: e.modelValue === void 0,
    deep: !0
  });
  ne(
    () => [e.type, e.modelValue, e.defaultValue],
    () => {
      const l = ri(e);
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
  const r = $(() => n.value === "single");
  return {
    modelValue: o,
    type: n,
    changeModelValue: a,
    isSingle: r
  };
}
const [ua, ap] = be("AccordionRoot"), rp = /* @__PURE__ */ b({
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
    const n = e, o = t, { dir: a, disabled: r } = ye(n), l = Jt(a), { modelValue: i, changeModelValue: u, isSingle: d } = op(n, o), { forwardRef: c, currentElement: p } = j();
    return ap({
      disabled: r,
      direction: l,
      orientation: n.orientation,
      parentElement: p,
      isSingle: d,
      collapsible: n.collapsible,
      modelValue: i,
      changeModelValue: u
    }), (f, v) => (h(), x(s(X), {
      ref: s(c),
      "as-child": f.asChild,
      as: f.as
    }, {
      default: y(() => [
        w(f.$slots, "default", { modelValue: s(i) })
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), [Dr, sp] = be("AccordionItem"), lp = /* @__PURE__ */ b({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e, { expose: t }) {
    const n = e, o = ua(), a = $(
      () => o.isSingle.value ? n.value === o.modelValue.value : Array.isArray(o.modelValue.value) && o.modelValue.value.includes(n.value)
    ), r = $(() => o.disabled.value || n.disabled), l = $(() => r.value ? "" : void 0), i = $(
      () => a.value ? "open" : "closed"
      /* Closed */
    );
    t({ open: a, dataDisabled: l });
    const { currentRef: u, currentElement: d } = j();
    sp({
      open: a,
      dataState: i,
      disabled: r,
      dataDisabled: l,
      triggerId: "",
      currentRef: u,
      currentElement: d,
      value: $(() => n.value)
    });
    function c(p) {
      var f;
      const v = p.target;
      if (Array.from(((f = o.parentElement.value) == null ? void 0 : f.querySelectorAll("[data-radix-vue-collection-item]")) ?? []).findIndex((m) => m === v) === -1)
        return null;
      Ql(
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
    return (p, f) => (h(), x(s(Zc), {
      "data-orientation": s(o).orientation,
      "data-disabled": l.value,
      "data-state": i.value,
      disabled: r.value,
      open: a.value,
      as: n.as,
      "as-child": n.asChild,
      onKeydown: ot(c, ["up", "down", "left", "right", "home", "end"])
    }, {
      default: y(() => [
        w(p.$slots, "default", { open: a.value })
      ]),
      _: 3
    }, 8, ["data-orientation", "data-disabled", "data-state", "disabled", "open", "as", "as-child"]));
  }
}), ip = /* @__PURE__ */ b({
  __name: "AccordionContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = ua(), o = Dr();
    return j(), (a, r) => (h(), x(s(ep), {
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
        w(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["hidden", "as-child", "force-mount", "aria-labelledby", "data-state", "data-disabled", "data-orientation"]));
  }
}), up = /* @__PURE__ */ b({
  __name: "AccordionHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "h3" }
  },
  setup(e) {
    const t = e, n = ua(), o = Dr();
    return j(), (a, r) => (h(), x(s(X), {
      as: t.as,
      "as-child": t.asChild,
      "data-orientation": s(n).orientation,
      "data-state": s(o).dataState.value,
      "data-disabled": s(o).dataDisabled.value
    }, {
      default: y(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-orientation", "data-state", "data-disabled"]));
  }
}), dp = /* @__PURE__ */ b({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = ua(), o = Dr();
    o.triggerId || (o.triggerId = je(void 0, "radix-vue-accordion-trigger"));
    function a() {
      const r = n.isSingle.value && o.open.value && !n.collapsible;
      o.disabled.value || r || n.changeModelValue(o.value.value);
    }
    return (r, l) => (h(), x(s(Qc), {
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
        w(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "as", "as-child", "aria-disabled", "aria-expanded", "data-disabled", "data-orientation", "data-state", "disabled"]));
  }
}), [Pt, cp] = be("DialogRoot"), Ar = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = Me(n, "open", t, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), a = E(), r = E(), { modal: l } = ye(n);
    return cp({
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
    }), (i, u) => w(i.$slots, "default", { open: s(o) });
  }
}), Tr = /* @__PURE__ */ b({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Pt(), { forwardRef: o, currentElement: a } = j();
    return n.contentId || (n.contentId = je(void 0, "radix-vue-dialog-content")), ie(() => {
      n.triggerElement.value = a.value;
    }), (r, l) => (h(), x(s(X), k(t, {
      ref: s(o),
      type: r.as === "button" ? "button" : void 0,
      "aria-haspopup": "dialog",
      "aria-expanded": s(n).open.value || !1,
      "aria-controls": s(n).open.value ? s(n).contentId : void 0,
      "data-state": s(n).open.value ? "open" : "closed",
      onClick: s(n).onOpenToggle
    }), {
      default: y(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "onClick"]));
  }
}), qn = /* @__PURE__ */ b({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = Or();
    return (n, o) => s(t) || n.forceMount ? (h(), x(po, {
      key: 0,
      to: n.to,
      disabled: n.disabled
    }, [
      w(n.$slots, "default")
    ], 8, ["to", "disabled"])) : he("", !0);
  }
}), Ir = /* @__PURE__ */ b({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(qn), Z(te(t)), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), pp = "dismissableLayer.pointerDownOutside", fp = "dismissableLayer.focusOutside";
function si(e, t) {
  const n = t.closest(
    "[data-dismissable-layer]"
  ), o = e.dataset.dismissableLayer === "" ? e : e.querySelector(
    "[data-dismissable-layer]"
  ), a = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(n && o === n || a.indexOf(o) < a.indexOf(n));
}
function vp(e, t) {
  var n;
  const o = ((n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), a = E(!1), r = E(() => {
  });
  return xe((l) => {
    if (!Et)
      return;
    const i = async (d) => {
      const c = d.target;
      if (t != null && t.value) {
        if (si(t.value, c)) {
          a.value = !1;
          return;
        }
        if (d.target && !a.value) {
          let p = function() {
            Br(
              pp,
              e,
              f
            );
          };
          const f = { originalEvent: d };
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
function mp(e, t) {
  var n;
  const o = ((n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), a = E(!1);
  return xe((r) => {
    if (!Et)
      return;
    const l = async (i) => {
      t != null && t.value && (await se(), !(!t.value || si(t.value, i.target)) && i.target && !a.value && Br(
        fp,
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
const mt = Yt({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Nn = /* @__PURE__ */ b({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, o = t, { forwardRef: a, currentElement: r } = j(), l = $(
      () => {
        var m;
        return ((m = r.value) == null ? void 0 : m.ownerDocument) ?? globalThis.document;
      }
    ), i = $(() => mt.layersRoot), u = $(() => r.value ? Array.from(i.value).indexOf(r.value) : -1), d = $(() => mt.layersWithOutsidePointerEventsDisabled.size > 0), c = $(() => {
      const m = Array.from(i.value), [g] = [...mt.layersWithOutsidePointerEventsDisabled].slice(-1), _ = m.indexOf(g);
      return u.value >= _;
    }), p = vp(async (m) => {
      const g = [...mt.branches].some(
        (_) => _ == null ? void 0 : _.contains(m.target)
      );
      !c.value || g || (o("pointerDownOutside", m), o("interactOutside", m), await se(), m.defaultPrevented || o("dismiss"));
    }, r), f = mp((m) => {
      [...mt.branches].some(
        (g) => g == null ? void 0 : g.contains(m.target)
      ) || (o("focusOutside", m), o("interactOutside", m), m.defaultPrevented || o("dismiss"));
    }, r);
    $r("Escape", (m) => {
      u.value === i.value.size - 1 && (o("escapeKeyDown", m), m.defaultPrevented || o("dismiss"));
    });
    let v;
    return xe((m) => {
      r.value && (n.disableOutsidePointerEvents && (mt.layersWithOutsidePointerEventsDisabled.size === 0 && (v = l.value.body.style.pointerEvents, l.value.body.style.pointerEvents = "none"), mt.layersWithOutsidePointerEventsDisabled.add(r.value)), i.value.add(r.value), m(() => {
        n.disableOutsidePointerEvents && mt.layersWithOutsidePointerEventsDisabled.size === 1 && (l.value.body.style.pointerEvents = v);
      }));
    }), xe((m) => {
      m(() => {
        r.value && (i.value.delete(r.value), mt.layersWithOutsidePointerEventsDisabled.delete(r.value));
      });
    }), (m, g) => (h(), x(s(X), {
      ref: s(a),
      "as-child": m.asChild,
      as: m.as,
      "data-dismissable-layer": "",
      style: _t({
        pointerEvents: d.value ? c.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: s(f).onFocusCapture,
      onBlurCapture: s(f).onBlurCapture,
      onPointerdownCapture: s(p).onPointerDownCapture
    }, {
      default: y(() => [
        w(m.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
}), gp = /* @__PURE__ */ b({
  __name: "DismissableLayerBranch",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: o } = j();
    return ie(() => {
      mt.branches.add(o.value);
    }), Ke(() => {
      mt.branches.delete(o.value);
    }), (a, r) => (h(), x(s(X), k({ ref: s(n) }, t), {
      default: y(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ta = "focusScope.autoFocusOnMount", Ia = "focusScope.autoFocusOnUnmount", Is = { bubbles: !1, cancelable: !0 };
function Vo(e, { select: t = !1 } = {}) {
  const n = Ge();
  for (const o of e)
    if (Wt(o, { select: t }), Ge() !== n)
      return !0;
}
function hp(e) {
  const t = Mr(e), n = Ms(t, e), o = Ms(t.reverse(), e);
  return [n, o];
}
function Mr(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const a = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || a ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Ms(e, t) {
  for (const n of e)
    if (!yp(n, { upTo: t }))
      return n;
}
function yp(e, { upTo: t }) {
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
function bp(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Wt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = Ge();
    e.focus({ preventScroll: !0 }), e !== n && bp(e) && t && e.select();
  }
}
const wp = fc(() => E([]));
function _p() {
  const e = wp();
  return {
    add(t) {
      const n = e.value[0];
      t !== n && (n == null || n.pause()), e.value = Fs(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var n;
      e.value = Fs(e.value, t), (n = e.value[0]) == null || n.resume();
    }
  };
}
function Fs(e, t) {
  const n = [...e], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function xp(e) {
  return e.filter((t) => t.tagName !== "A");
}
const da = /* @__PURE__ */ b({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, o = t, { currentRef: a, currentElement: r } = j(), l = E(null), i = _p(), u = Yt({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    xe((c) => {
      if (!Et)
        return;
      const p = r.value;
      if (!n.trapped)
        return;
      function f(_) {
        if (u.paused || !p)
          return;
        const C = _.target;
        p.contains(C) ? l.value = C : Wt(l.value, { select: !0 });
      }
      function v(_) {
        if (u.paused || !p)
          return;
        const C = _.relatedTarget;
        C !== null && (p.contains(C) || Wt(l.value, { select: !0 }));
      }
      function m(_) {
        p.contains(l.value) || Wt(p);
      }
      document.addEventListener("focusin", f), document.addEventListener("focusout", v);
      const g = new MutationObserver(m);
      p && g.observe(p, { childList: !0, subtree: !0 }), c(() => {
        document.removeEventListener("focusin", f), document.removeEventListener("focusout", v), g.disconnect();
      });
    }), xe(async (c) => {
      const p = r.value;
      if (await se(), !p)
        return;
      i.add(u);
      const f = Ge();
      if (!p.contains(f)) {
        const v = new CustomEvent(Ta, Is);
        p.addEventListener(Ta, (m) => o("mountAutoFocus", m)), p.dispatchEvent(v), v.defaultPrevented || (Vo(xp(Mr(p)), {
          select: !0
        }), Ge() === f && Wt(p));
      }
      c(() => {
        p.removeEventListener(Ta, (g) => o("mountAutoFocus", g));
        const v = new CustomEvent(Ia, Is), m = (g) => {
          o("unmountAutoFocus", g);
        };
        p.addEventListener(Ia, m), p.dispatchEvent(v), setTimeout(() => {
          v.defaultPrevented || Wt(f ?? document.body, { select: !0 }), p.removeEventListener(Ia, m), i.remove(u);
        }, 0);
      });
    });
    function d(c) {
      if (!n.loop && !n.trapped || u.paused)
        return;
      const p = c.key === "Tab" && !c.altKey && !c.ctrlKey && !c.metaKey, f = Ge();
      if (p && f) {
        const v = c.currentTarget, [m, g] = hp(v);
        m && g ? !c.shiftKey && f === g ? (c.preventDefault(), n.loop && Wt(m, { select: !0 })) : c.shiftKey && f === m && (c.preventDefault(), n.loop && Wt(g, { select: !0 })) : f === v && c.preventDefault();
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
        w(c.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), Cp = "menu.itemSelect", Za = ["Enter", " "], Bp = ["ArrowDown", "PageUp", "Home"], li = ["ArrowUp", "PageDown", "End"], Sp = [...Bp, ...li], $p = {
  ltr: [...Za, "ArrowRight"],
  rtl: [...Za, "ArrowLeft"]
}, Op = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function Fr(e) {
  return e ? "open" : "closed";
}
function Go(e) {
  return e === "indeterminate";
}
function Rr(e) {
  return Go(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Qa(e) {
  const t = Ge();
  for (const n of e)
    if (n === t || (n.focus(), Ge() !== t))
      return;
}
function Ep(e, t) {
  const { x: n, y: o } = e;
  let a = !1;
  for (let r = 0, l = t.length - 1; r < t.length; l = r++) {
    const i = t[r].x, u = t[r].y, d = t[l].x, c = t[l].y;
    u > o != c > o && n < (d - i) * (o - u) / (c - u) + i && (a = !a);
  }
  return a;
}
function Pp(e, t) {
  if (!t)
    return !1;
  const n = { x: e.clientX, y: e.clientY };
  return Ep(n, t);
}
function so(e) {
  return e.pointerType === "mouse";
}
const kp = "DialogTitle", Dp = "DialogContent";
function Ap({
  titleName: e = kp,
  contentName: t = Dp,
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
const ii = /* @__PURE__ */ b({
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
    const n = e, o = t, a = Pt(), { forwardRef: r, currentElement: l } = j();
    return a.titleId || (a.titleId = je(void 0, "radix-vue-dialog-title")), a.descriptionId || (a.descriptionId = je(void 0, "radix-vue-dialog-description")), ie(() => {
      a.contentElement = l, Ge() !== document.body && (a.triggerElement.value = Ge());
    }), process.env.NODE_ENV !== "production" && Ap({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: a.titleId,
      descriptionId: a.descriptionId,
      contentElement: l
    }), (i, u) => (h(), x(s(da), {
      "as-child": "",
      loop: "",
      trapped: n.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => o("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => o("closeAutoFocus", d))
    }, {
      default: y(() => [
        F(s(Nn), k({
          id: s(a).contentId,
          ref: s(r),
          as: i.as,
          "as-child": i.asChild,
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": s(a).descriptionId,
          "aria-labelledby": s(a).titleId,
          "data-state": s(Fr)(s(a).open.value)
        }, i.$attrs, {
          onDismiss: u[0] || (u[0] = (d) => s(a).onOpenChange(!1)),
          onEscapeKeyDown: u[1] || (u[1] = (d) => o("escapeKeyDown", d)),
          onFocusOutside: u[2] || (u[2] = (d) => o("focusOutside", d)),
          onInteractOutside: u[3] || (u[3] = (d) => o("interactOutside", d)),
          onPointerDownOutside: u[4] || (u[4] = (d) => o("pointerDownOutside", d))
        }), {
          default: y(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "as", "as-child", "disable-outside-pointer-events", "aria-describedby", "aria-labelledby", "data-state"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
}), Tp = /* @__PURE__ */ b({
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
    const n = e, o = t, a = Pt(), r = en(o), { forwardRef: l, currentElement: i } = j();
    return go(i), (u, d) => (h(), x(ii, k({ ...n, ...s(r) }, {
      ref: s(l),
      "trap-focus": s(a).open.value,
      "disable-outside-pointer-events": !0,
      onCloseAutoFocus: d[0] || (d[0] = (c) => {
        var p;
        c.defaultPrevented || (c.preventDefault(), (p = s(a).triggerElement.value) == null || p.focus());
      }),
      onPointerDownOutside: d[1] || (d[1] = (c) => {
        const p = c.detail.originalEvent, f = p.button === 0 && p.ctrlKey === !0;
        (p.button === 2 || f) && c.preventDefault();
      }),
      onFocusOutside: d[2] || (d[2] = (c) => {
        c.preventDefault();
      })
    }), {
      default: y(() => [
        w(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), Ip = /* @__PURE__ */ b({
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
    const n = e, o = en(t);
    j();
    const a = Pt(), r = E(!1), l = E(!1);
    return (i, u) => (h(), x(ii, k({ ...n, ...s(o) }, {
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
        w(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ca = /* @__PURE__ */ b({
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
    const n = e, o = t, a = Pt(), r = en(o), { forwardRef: l } = j();
    return (i, u) => (h(), x(s(pt), {
      present: i.forceMount || s(a).open.value
    }, {
      default: y(() => [
        s(a).modal.value ? (h(), x(Tp, k({
          key: 0,
          ref: s(l)
        }, { ...n, ...s(r), ...i.$attrs }), {
          default: y(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (h(), x(Ip, k({
          key: 1,
          ref: s(l)
        }, { ...n, ...s(r), ...i.$attrs }), {
          default: y(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Mp = /* @__PURE__ */ b({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Pt();
    return mo(!0), j(), (n, o) => (h(), x(s(X), {
      as: n.as,
      "as-child": n.asChild,
      "data-state": s(t).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" }
    }, {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state"]));
  }
}), pa = /* @__PURE__ */ b({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Pt(), { forwardRef: n } = j();
    return (o, a) => {
      var r;
      return (r = s(t)) != null && r.modal.value ? (h(), x(s(pt), {
        key: 0,
        present: o.forceMount || s(t).open.value
      }, {
        default: y(() => [
          F(Mp, k(o.$attrs, {
            ref: s(n),
            as: o.as,
            "as-child": o.asChild
          }), {
            default: y(() => [
              w(o.$slots, "default")
            ]),
            _: 3
          }, 16, ["as", "as-child"])
        ]),
        _: 3
      }, 8, ["present"])) : he("", !0);
    };
  }
}), fn = /* @__PURE__ */ b({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    j();
    const n = Pt();
    return (o, a) => (h(), x(s(X), k(t, {
      type: o.as === "button" ? "button" : void 0,
      onClick: a[0] || (a[0] = (r) => s(n).onOpenChange(!1))
    }), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
}), Lr = /* @__PURE__ */ b({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e, n = Pt();
    return j(), (o, a) => (h(), x(s(X), k(t, {
      id: s(n).titleId
    }), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Vr = /* @__PURE__ */ b({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    j();
    const n = Pt();
    return (o, a) => (h(), x(s(X), k(t, {
      id: s(n).descriptionId
    }), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Fp = /* @__PURE__ */ b({
  __name: "AlertDialogRoot",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = ce(e, t);
    return j(), (o, a) => (h(), x(s(Ar), k(s(n), { modal: !0 }), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Rp = /* @__PURE__ */ b({
  __name: "AlertDialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    return j(), (n, o) => (h(), x(s(Tr), Z(te(t)), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Lp = /* @__PURE__ */ b({
  __name: "AlertDialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(qn), Z(te(t)), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Vp, qp] = be("AlertDialogContent"), Np = /* @__PURE__ */ b({
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
    const n = e, o = en(t);
    j();
    const a = E();
    return qp({
      onCancelElementChange: (r) => {
        a.value = r;
      }
    }), (r, l) => (h(), x(s(ca), k({ ...n, ...s(o) }, {
      role: "alertdialog",
      onPointerDownOutside: l[0] || (l[0] = Fe(() => {
      }, ["prevent"])),
      onInteractOutside: l[1] || (l[1] = Fe(() => {
      }, ["prevent"])),
      onOpenAutoFocus: l[2] || (l[2] = () => {
        se(() => {
          var i;
          (i = a.value) == null || i.focus({
            preventScroll: !0
          });
        });
      })
    }), {
      default: y(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), zp = /* @__PURE__ */ b({
  __name: "AlertDialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return j(), (n, o) => (h(), x(s(pa), Z(te(t)), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), jp = /* @__PURE__ */ b({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Vp(), { forwardRef: o, currentElement: a } = j();
    return ie(() => {
      n.onCancelElementChange(a.value);
    }), (r, l) => (h(), x(s(fn), k(t, { ref: s(o) }), {
      default: y(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Kp = /* @__PURE__ */ b({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e;
    return j(), (n, o) => (h(), x(s(Lr), Z(te(t)), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hp = /* @__PURE__ */ b({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    return j(), (n, o) => (h(), x(s(Vr), Z(te(t)), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Wp = /* @__PURE__ */ b({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    return j(), (n, o) => (h(), x(s(fn), Z(te(t)), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [ui, Up] = be("AvatarRoot"), Gp = /* @__PURE__ */ b({
  __name: "AvatarRoot",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return j(), Up({
      imageLoadingStatus: E("loading")
    }), (t, n) => (h(), x(s(X), {
      "as-child": t.asChild,
      as: t.as
    }, {
      default: y(() => [
        w(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
});
function Yp(e, t) {
  const n = E("idle"), o = E(!1), a = (r) => () => {
    o.value && (n.value = r);
  };
  return ie(() => {
    o.value = !0, ne([() => e.value, () => t == null ? void 0 : t.value], ([r, l]) => {
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
const Xp = /* @__PURE__ */ b({
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
    j();
    const l = ui(), i = Yp(a, r);
    return ne(
      i,
      (u) => {
        o("loadingStatusChange", u), u !== "idle" && (l.imageLoadingStatus.value = u);
      },
      { immediate: !0 }
    ), (u, d) => Mn((h(), x(s(X), {
      role: "img",
      "as-child": u.asChild,
      as: u.as,
      src: s(a),
      "referrer-policy": s(r)
    }, {
      default: y(() => [
        w(u.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "src", "referrer-policy"])), [
      [ur, s(i) === "loaded"]
    ]);
  }
}), Zp = /* @__PURE__ */ b({
  __name: "AvatarFallback",
  props: {
    delayMs: { default: 0 },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = ui();
    j();
    const o = E(!1);
    let a;
    return ne(n.imageLoadingStatus, (r) => {
      r === "loading" && (o.value = !1, t.delayMs ? a = setTimeout(() => {
        o.value = !0, clearTimeout(a);
      }, t.delayMs) : o.value = !0);
    }, { immediate: !0 }), (r, l) => o.value && s(n).imageLoadingStatus.value !== "loaded" ? (h(), x(s(X), {
      key: 0,
      "as-child": r.asChild,
      as: r.as
    }, {
      default: y(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"])) : he("", !0);
  }
}), [di, Qp] = be("PopperRoot"), zn = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = E();
    return Qp({
      anchor: t,
      onAnchorChange: (n) => t.value = n
    }), (n, o) => w(n.$slots, "default");
  }
}), ho = /* @__PURE__ */ b({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: o } = j(), a = di();
    return xe(() => {
      a.onAnchorChange(t.element ?? o.value);
    }), (r, l) => (h(), x(s(X), {
      ref: s(n),
      as: r.as,
      "as-child": r.asChild
    }, {
      default: y(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function Jp(e) {
  return e !== null;
}
function ef(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var n, o, a;
      const { placement: r, rects: l, middlewareData: i } = t, u = ((n = i.arrow) == null ? void 0 : n.centerOffset) !== 0, d = u ? 0 : e.arrowWidth, c = u ? 0 : e.arrowHeight, [p, f] = Ja(r), v = { start: "0%", center: "50%", end: "100%" }[f], m = (((o = i.arrow) == null ? void 0 : o.x) ?? 0) + d / 2, g = (((a = i.arrow) == null ? void 0 : a.y) ?? 0) + c / 2;
      let _ = "", C = "";
      return p === "bottom" ? (_ = u ? v : `${m}px`, C = `${-c}px`) : p === "top" ? (_ = u ? v : `${m}px`, C = `${l.floating.height + c}px`) : p === "right" ? (_ = `${-c}px`, C = u ? v : `${g}px`) : p === "left" && (_ = `${l.floating.width + c}px`, C = u ? v : `${g}px`), { data: { x: _, y: C } };
    }
  };
}
function Ja(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
const ci = {
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
}, [P1, tf] = be("PopperContent"), Tn = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ pr({
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
    ...ci
  }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = di(), { forwardRef: r, currentElement: l } = j(), i = E(), u = E(), { width: d, height: c } = ni(u), p = $(
      () => n.side + (n.align !== "center" ? `-${n.align}` : "")
    ), f = $(() => typeof n.collisionPadding == "number" ? n.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...n.collisionPadding }), v = $(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), m = $(() => ({
      padding: f.value,
      boundary: v.value.filter(Jp),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: v.value.length > 0
    })), g = cc(() => [
      ql({
        mainAxis: n.sideOffset + c.value,
        alignmentAxis: n.alignOffset
      }),
      n.prioritizePosition && n.avoidCollisions && Wo({
        ...m.value
      }),
      n.avoidCollisions && Nl({
        mainAxis: !0,
        crossAxis: !!n.prioritizePosition,
        limiter: n.sticky === "partial" ? Kl() : void 0,
        ...m.value
      }),
      !n.prioritizePosition && n.avoidCollisions && Wo({
        ...m.value
      }),
      zl({
        ...m.value,
        apply: ({ elements: A, rects: z, availableWidth: I, availableHeight: Q }) => {
          const { width: U, height: N } = z.reference, R = A.floating.style;
          R.setProperty(
            "--radix-popper-available-width",
            `${I}px`
          ), R.setProperty(
            "--radix-popper-available-height",
            `${Q}px`
          ), R.setProperty(
            "--radix-popper-anchor-width",
            `${U}px`
          ), R.setProperty(
            "--radix-popper-anchor-height",
            `${N}px`
          );
        }
      }),
      u.value && Hl({ element: u.value, padding: n.arrowPadding }),
      ef({
        arrowWidth: d.value,
        arrowHeight: c.value
      }),
      n.hideWhenDetached && jl({ strategy: "referenceHidden", ...m.value })
    ]), { floatingStyles: _, placement: C, isPositioned: S, middlewareData: B } = Ul(
      a.anchor,
      i,
      {
        strategy: "fixed",
        placement: p,
        whileElementsMounted: (...A) => Vl(...A, {
          animationFrame: n.updatePositionStrategy === "always"
        }),
        middleware: g
      }
    ), D = $(
      () => Ja(C.value)[0]
    ), O = $(
      () => Ja(C.value)[1]
    );
    fr(() => {
      S.value && o("placed");
    });
    const T = $(
      () => {
        var A;
        return ((A = B.value.arrow) == null ? void 0 : A.centerOffset) !== 0;
      }
    ), P = E("");
    xe(() => {
      l.value && (P.value = window.getComputedStyle(l.value).zIndex);
    });
    const M = $(() => {
      var A;
      return ((A = B.value.arrow) == null ? void 0 : A.x) ?? 0;
    }), q = $(() => {
      var A;
      return ((A = B.value.arrow) == null ? void 0 : A.y) ?? 0;
    });
    return tf({
      placedSide: D,
      onArrowChange: (A) => u.value = A,
      arrowX: M,
      arrowY: q,
      shouldHideArrow: T
    }), (A, z) => {
      var I, Q, U;
      return h(), K("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-radix-popper-content-wrapper": "",
        style: _t({
          ...s(_),
          transform: s(S) ? s(_).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: P.value,
          "--radix-popper-transform-origin": [
            (I = s(B).transformOrigin) == null ? void 0 : I.x,
            (Q = s(B).transformOrigin) == null ? void 0 : Q.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((U = s(B).hide) == null ? void 0 : U.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        F(s(X), k({ ref: s(r) }, A.$attrs, {
          "as-child": n.asChild,
          as: A.as,
          "data-side": D.value,
          "data-align": O.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: s(S) ? void 0 : "none"
          }
        }), {
          default: y(() => [
            w(A.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
}), yo = /* @__PURE__ */ b({
  __name: "VisuallyHidden",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return j(), (t, n) => (h(), x(s(X), {
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
        w(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), nf = /* @__PURE__ */ b({
  __name: "VisuallyHiddenInput",
  props: {
    name: {},
    value: {},
    required: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, n = $(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" ? [{ name: t.name, value: t.value }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((o, a) => typeof o == "object" ? Object.entries(o).map(([r, l]) => ({ name: `[${a}][${t.name}][${r}]`, value: l })) : { name: `[${t.name}][${a}]`, value: o }) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([o, a]) => ({ name: `[${t.name}][${o}]`, value: a })) : []);
    return (o, a) => (h(!0), K(Te, null, Gt(n.value, (r) => (h(), x(yo, {
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
}), of = "data-radix-vue-collection-item", [qr, af] = be("CollectionProvider");
function Nr(e = of) {
  const t = E(/* @__PURE__ */ new Map()), n = E(), o = af({
    collectionRef: n,
    itemMap: t,
    attrName: e
  }), { getItems: a } = jr(o), r = $(() => Array.from(o.itemMap.value.values())), l = $(() => o.itemMap.value.size);
  return { getItems: a, reactiveItems: r, itemMapSize: l };
}
const zr = b({
  name: "CollectionSlot",
  setup(e, { slots: t }) {
    const n = qr(), { primitiveElement: o, currentElement: a } = oi();
    return ne(a, () => {
      n.collectionRef.value = a.value;
    }), () => Ze(kr, { ref: o }, t);
  }
}), fa = b({
  name: "CollectionItem",
  inheritAttrs: !1,
  props: {
    value: {
      // It accepts any value
      validator: () => !0
    }
  },
  setup(e, { slots: t, attrs: n }) {
    const o = qr(), { primitiveElement: a, currentElement: r } = oi();
    return xe((l) => {
      if (r.value) {
        const i = yl(r.value);
        o.itemMap.value.set(i, { ref: r.value, value: e.value }), l(() => o.itemMap.value.delete(i));
      }
    }), () => Ze(kr, { ...n, [o.attrName]: "", ref: a }, t);
  }
});
function jr(e) {
  const t = e ?? qr();
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
const [jn, rf] = be("ComboboxRoot"), sf = /* @__PURE__ */ b({
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
    const n = e, o = t, { multiple: a, disabled: r, dir: l } = ye(n), i = Jt(l), u = Me(n, "searchTerm", o, {
      // @ts-expect-error ignore the type error here
      defaultValue: "",
      passive: n.searchTerm === void 0
    }), d = Me(n, "modelValue", o, {
      // @ts-expect-error ignore the type error here
      defaultValue: n.defaultValue ?? a.value ? [] : void 0,
      passive: n.modelValue === void 0,
      deep: !0
    }), c = Me(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), p = Me(n, "selectedValue", o, {
      defaultValue: void 0,
      passive: n.selectedValue === void 0
    });
    async function f(L) {
      var ee, W;
      c.value = L, await se(), L ? (d.value && (Array.isArray(d.value) && a.value ? p.value = (ee = B().find((_e) => {
        var ke, Be;
        return ((Be = (ke = _e.ref) == null ? void 0 : ke.dataset) == null ? void 0 : Be.state) === "checked";
      })) == null ? void 0 : ee.value : p.value = d.value), await se(), (W = g.value) == null || W.focus(), Q()) : (m.value = !1, n.resetSearchTermOnBlur && M("blur"));
    }
    function v(L) {
      if (Array.isArray(d.value) && a.value) {
        const ee = d.value.findIndex((_e) => rn(_e, L)), W = [...d.value];
        ee === -1 ? W.push(L) : W.splice(ee, 1), d.value = W;
      } else
        d.value = L, f(!1);
    }
    const m = E(!1), g = E(), _ = E(), { forwardRef: C, currentElement: S } = j(), { getItems: B, reactiveItems: D, itemMapSize: O } = Nr("data-radix-vue-combobox-item"), T = E([]);
    ne(() => O.value, () => {
      T.value = B().map((L) => L.value);
    }, {
      immediate: !0,
      flush: "post"
    });
    const P = $(() => {
      if (m.value) {
        if (n.filterFunction)
          return n.filterFunction(T.value, u.value);
        const L = T.value.filter((ee) => typeof ee == "string");
        if (L.length)
          return L.filter((ee) => {
            var W;
            return ee.toLowerCase().includes((W = u.value) == null ? void 0 : W.toLowerCase());
          });
      }
      return T.value;
    });
    function M(L) {
      const ee = L === "blur" || L === "select" && n.resetSearchTermOnSelect;
      !a.value && d.value && !Array.isArray(d.value) ? n.displayValue ? u.value = n.displayValue(d.value) : typeof d.value != "object" ? u.value = d.value.toString() : ee && (u.value = "") : ee && (u.value = "");
    }
    const q = $(() => P.value.findIndex((L) => rn(L, p.value))), A = $(() => {
      var L;
      return (L = D.value.find((ee) => rn(ee.value, p.value))) == null ? void 0 : L.ref;
    }), z = $(() => JSON.stringify(d.value));
    ne(z, async () => {
      await se(), await se(), M("select");
    }, {
      // If searchTerm is provided with value during initialization, we don't reset it immediately
      immediate: !n.searchTerm
    }), ne(() => [P.value.length, u.value.length], async ([L, ee], [W, _e]) => {
      await se(), await se(), L && (_e > ee || q.value === -1) && (p.value = P.value[0]);
    });
    const I = ia(S);
    function Q() {
      var L;
      A.value instanceof Element && ((L = A.value) == null || L.scrollIntoView({ block: "nearest" }));
    }
    function U() {
      A.value instanceof Element && A.value.focus && A.value.focus();
    }
    const N = E(!1);
    function R() {
      N.value = !0;
    }
    function ae() {
      requestAnimationFrame(() => {
        N.value = !1;
      });
    }
    async function G(L) {
      var ee;
      P.value.length && p.value && A.value instanceof Element && (L.preventDefault(), L.stopPropagation(), N.value || (ee = A.value) == null || ee.click());
    }
    return rf({
      searchTerm: u,
      modelValue: d,
      // @ts-expect-error ignoring
      onValueChange: v,
      isUserInputted: m,
      multiple: a,
      disabled: r,
      open: c,
      onOpenChange: f,
      filteredOptions: P,
      contentId: "",
      inputElement: g,
      selectedElement: A,
      onInputElementChange: (L) => g.value = L,
      onInputNavigation: async (L) => {
        const ee = q.value;
        ee === 0 && L === "up" || ee === P.value.length - 1 && L === "down" || (ee === -1 && P.value.length || L === "home" ? p.value = P.value[0] : L === "end" ? p.value = P.value[P.value.length - 1] : p.value = P.value[L === "up" ? ee - 1 : ee + 1], await se(), Q(), U(), se(() => {
          var W;
          return (W = g.value) == null ? void 0 : W.focus({ preventScroll: !0 });
        }));
      },
      onInputEnter: G,
      onCompositionEnd: ae,
      onCompositionStart: R,
      selectedValue: p,
      onSelectedValueChange: (L) => p.value = L,
      parentElement: S,
      contentElement: _,
      onContentElementChange: (L) => _.value = L
    }), (L, ee) => (h(), x(s(zn), null, {
      default: y(() => [
        F(s(X), k({
          ref: s(C),
          style: {
            pointerEvents: s(c) ? "auto" : void 0
          },
          as: L.as,
          "as-child": L.asChild,
          dir: s(i)
        }, L.$attrs), {
          default: y(() => [
            w(L.$slots, "default", {
              open: s(c),
              modelValue: s(d)
            }),
            s(I) && n.name ? (h(), x(s(nf), {
              key: 0,
              name: n.name,
              value: s(d)
            }, null, 8, ["name", "value"])) : he("", !0)
          ]),
          _: 3
        }, 16, ["style", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), lf = /* @__PURE__ */ b({
  __name: "ComboboxInput",
  props: {
    type: { default: "text" },
    disabled: { type: Boolean },
    autoFocus: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(e) {
    const t = e, n = jn(), { forwardRef: o, currentElement: a } = j();
    ie(() => {
      const c = a.value.nodeName === "INPUT" ? a.value : a.value.querySelector("input");
      c && (n.onInputElementChange(c), setTimeout(() => {
        t.autoFocus && (c == null || c.focus());
      }, 1));
    });
    const r = $(() => t.disabled || n.disabled.value || !1), l = E();
    vl(() => {
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
        ot(Fe(i, ["prevent"]), ["down", "up"]),
        ot(s(n).onInputEnter, ["enter"]),
        ot(Fe(u, ["prevent"]), ["home", "end"])
      ],
      onCompositionstart: s(n).onCompositionStart,
      onCompositionend: s(n).onCompositionEnd
    }, {
      default: y(() => [
        w(c.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "disabled", "value", "aria-expanded", "aria-controls", "aria-disabled", "aria-activedescendant", "onKeydown", "onCompositionstart", "onCompositionend"]));
  }
}), [pi, uf] = be("ComboboxGroup"), df = /* @__PURE__ */ b({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { currentRef: n, currentElement: o } = j(), a = je(void 0, "radix-vue-combobox-group"), r = jn(), l = E(!1);
    function i() {
      if (!o.value)
        return;
      const u = o.value.querySelectorAll("[data-radix-vue-combobox-item]:not([data-hidden])");
      l.value = !!u.length;
    }
    return Bc(o, () => {
      se(() => {
        i();
      });
    }, { childList: !0 }), ne(() => r.searchTerm.value, () => {
      se(() => {
        i();
      });
    }, { immediate: !0 }), uf({
      id: a
    }), (u, d) => Mn((h(), x(s(X), k(t, {
      ref_key: "currentRef",
      ref: n,
      role: "group",
      "aria-labelledby": s(a)
    }), {
      default: y(() => [
        w(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"])), [
      [ur, l.value]
    ]);
  }
}), cf = /* @__PURE__ */ b({
  __name: "ComboboxLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    j();
    const n = pi({ id: "" });
    return (o, a) => (h(), x(s(X), k(t, {
      id: s(n).id
    }), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), [k1, pf] = be("ComboboxContent"), ff = /* @__PURE__ */ b({
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
    const n = e, o = t, { position: a } = ye(n), r = jn();
    mo(n.bodyLock);
    const { forwardRef: l, currentElement: i } = j();
    go(r.parentElement);
    const u = $(() => n.position === "popper" ? n : {}), d = Ye(u.value);
    function c(f) {
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
    return pf({ position: a }), (f, v) => (h(), x(s(zr), null, {
      default: y(() => [
        f.dismissable ? (h(), x(s(Nn), {
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
            (h(), x(lt(s(a) === "popper" ? s(Tn) : s(X)), k({ ...f.$attrs, ...s(d) }, {
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
                w(f.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "data-state", "style"]))
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])) : (h(), x(lt(s(a) === "popper" ? s(Tn) : s(X)), k({ key: 1 }, { ...f.$attrs, ...u.value }, {
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
            w(f.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "data-state", "style"]))
      ]),
      _: 3
    }));
  }
}), vf = /* @__PURE__ */ b({
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
    const n = ce(e, t), { forwardRef: o } = j(), a = jn();
    return a.contentId || (a.contentId = je(void 0, "radix-vue-combobox-content")), (r, l) => (h(), x(s(pt), {
      present: r.forceMount || s(a).open.value
    }, {
      default: y(() => [
        F(ff, k({ ...s(n), ...r.$attrs }, { ref: s(o) }), {
          default: y(() => [
            w(r.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), mf = /* @__PURE__ */ b({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    j();
    const n = jn(), o = $(() => n.filteredOptions.value.length === 0);
    return (a, r) => o.value ? (h(), x(s(X), Z(k({ key: 0 }, t)), {
      default: y(() => [
        w(a.$slots, "default", {}, () => [
          Ce("No options")
        ])
      ]),
      _: 3
    }, 16)) : he("", !0);
  }
});
function gf(e) {
  const t = la({
    nonce: E()
  });
  return $(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.nonce) == null ? void 0 : n.value);
  });
}
const [D1, hf] = be("ComboboxItem"), yf = "combobox.select", bf = /* @__PURE__ */ b({
  __name: "ComboboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = t, { disabled: a } = ye(n), r = jn();
    pi({ id: "", options: E([]) });
    const { forwardRef: l } = j(), i = $(
      () => {
        var g, _;
        return r.multiple.value && Array.isArray(r.modelValue.value) ? (g = r.modelValue.value) == null ? void 0 : g.some((C) => rn(C, n.value)) : rn((_ = r.modelValue) == null ? void 0 : _.value, n.value);
      }
    ), u = $(() => rn(r.selectedValue.value, n.value)), d = je(void 0, "radix-vue-combobox-item"), c = je(void 0, "radix-vue-combobox-option"), p = $(() => r.isUserInputted.value ? r.searchTerm.value === "" || !!r.filteredOptions.value.find((g) => rn(g, n.value)) : !0);
    async function f(g) {
      o("select", g), !(g != null && g.defaultPrevented) && !a.value && g && r.onValueChange(n.value);
    }
    function v(g) {
      if (!g)
        return;
      const _ = { originalEvent: g, value: n.value };
      Br(yf, f, _);
    }
    async function m(g) {
      await se(), !g.defaultPrevented && r.onSelectedValueChange(n.value);
    }
    if (n.value === "")
      throw new Error(
        "A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder."
      );
    return hf({
      isSelected: i
    }), (g, _) => (h(), x(s(fa), { value: g.value }, {
      default: y(() => [
        Mn(F(s(X), {
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
          onPointermove: m
        }, {
          default: y(() => [
            w(g.$slots, "default", {}, () => [
              Ce(Ie(g.value), 1)
            ])
          ]),
          _: 3
        }, 8, ["id", "aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "as", "as-child", "data-hidden"]), [
          [ur, p.value]
        ])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), wf = /* @__PURE__ */ b({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return j(), (n, o) => (h(), x(s(X), k(t, { "aria-hidden": "true" }), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fi = /* @__PURE__ */ b({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(ho), Z(te(t)), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function _f() {
  const e = E(!1);
  return ie(() => {
    An("keydown", () => {
      e.value = !0;
    }, { capture: !0, passive: !0 }), An(["pointerdown", "pointermove"], () => {
      e.value = !1;
    }, { capture: !0, passive: !0 });
  }), e;
}
const xf = Gl(_f), [vn, vi] = be(["MenuRoot", "MenuSub"], "MenuContext"), [bo, Cf] = be("MenuRoot"), Bf = /* @__PURE__ */ b({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = t, { modal: a, dir: r } = ye(n), l = Jt(r), i = Me(n, "open", o), u = E(), d = xf();
    return vi({
      open: i,
      onOpenChange: (c) => {
        i.value = c;
      },
      content: u,
      onContentChange: (c) => {
        u.value = c;
      }
    }), Cf({
      onClose: () => {
        i.value = !1;
      },
      isUsingKeyboardRef: d,
      dir: l,
      modal: a
    }), (c, p) => (h(), x(s(zn), null, {
      default: y(() => [
        w(c.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Sf = "rovingFocusGroup.onEntryFocus", $f = { bubbles: !1, cancelable: !0 }, Of = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Ef(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Pf(e, t, n) {
  const o = Ef(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o)))
    return Of[o];
}
function mi(e, t = !1) {
  const n = Ge();
  for (const o of e)
    if (o === n || (o.focus({ preventScroll: t }), Ge() !== n))
      return;
}
function kf(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
const [Df, Af] = be("RovingFocusGroup"), gi = /* @__PURE__ */ b({
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
    const o = e, a = n, { loop: r, orientation: l, dir: i } = ye(o), u = Jt(i), d = Me(o, "currentTabStopId", a, {
      defaultValue: o.defaultCurrentTabStopId,
      passive: o.currentTabStopId === void 0
    }), c = E(!1), p = E(!1), f = E(0), { getItems: v } = Nr();
    function m(_) {
      const C = !p.value;
      if (_.currentTarget && _.target === _.currentTarget && C && !c.value) {
        const S = new CustomEvent(Sf, $f);
        if (_.currentTarget.dispatchEvent(S), a("entryFocus", S), !S.defaultPrevented) {
          const B = v().map((P) => P.ref).filter((P) => P.dataset.disabled !== ""), D = B.find((P) => P.getAttribute("data-active") === "true"), O = B.find(
            (P) => P.id === d.value
          ), T = [D, O, ...B].filter(
            Boolean
          );
          mi(T, o.preventScrollOnEntryFocus);
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
    }), Af({
      loop: r,
      dir: u,
      orientation: l,
      currentTabStopId: d,
      onItemFocus: (_) => {
        d.value = _;
      },
      onItemShiftTab: () => {
        c.value = !0;
      },
      onFocusableItemAdd: () => {
        f.value++;
      },
      onFocusableItemRemove: () => {
        f.value--;
      }
    }), (_, C) => (h(), x(s(zr), null, {
      default: y(() => [
        F(s(X), {
          tabindex: c.value || f.value === 0 ? -1 : 0,
          "data-orientation": s(l),
          as: _.as,
          "as-child": _.asChild,
          dir: s(u),
          style: { outline: "none" },
          onMousedown: C[0] || (C[0] = (S) => p.value = !0),
          onMouseup: g,
          onFocus: m,
          onBlur: C[1] || (C[1] = (S) => c.value = !1)
        }, {
          default: y(() => [
            w(_.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), Tf = /* @__PURE__ */ b({
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
    const t = e, n = Df(), o = $(() => t.tabStopId || je()), a = $(
      () => n.currentTabStopId.value === o.value
    ), { getItems: r } = jr();
    ie(() => {
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
      const u = Pf(
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
          d = n.loop.value ? kf(d, c + 1) : d.slice(c + 1);
        }
        se(() => mi(d));
      }
    }
    return (i, u) => (h(), x(s(fa), null, {
      default: y(() => [
        F(s(X), {
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
            w(i.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "data-active", "data-disabled", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), [Kr, If] = be("MenuContent"), Hr = /* @__PURE__ */ b({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ pr({
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
    ...ci
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = vn(), r = bo(), { trapFocus: l, disableOutsidePointerEvents: i, loop: u } = ye(n);
    Er(), mo(i.value);
    const d = E(""), c = E(0), p = E(0), f = E(null), v = E("right"), m = E(0), g = E(null), { createCollection: _ } = Vn(), { forwardRef: C, currentElement: S } = j(), B = _(S);
    ne(S, (A) => {
      a.onContentChange(A);
    });
    const { handleTypeaheadSearch: D } = Pr(B);
    Ke(() => {
      window.clearTimeout(c.value);
    });
    function O(A) {
      var z, I;
      return v.value === ((z = f.value) == null ? void 0 : z.side) && Pp(A, (I = f.value) == null ? void 0 : I.area);
    }
    async function T(A) {
      var z;
      o("openAutoFocus", A), !A.defaultPrevented && (A.preventDefault(), (z = S.value) == null || z.focus({
        preventScroll: !0
      }));
    }
    function P(A) {
      if (A.defaultPrevented)
        return;
      const z = A.target.closest("[data-radix-menu-content]") === A.currentTarget, I = A.ctrlKey || A.altKey || A.metaKey, Q = A.key.length === 1, U = Ql(
        A,
        Ge(),
        S.value,
        {
          loop: u.value,
          arrowKeyOptions: "vertical",
          dir: r == null ? void 0 : r.dir.value,
          focus: !0,
          attributeName: "[data-radix-vue-collection-item]:not([data-disabled])"
        }
      );
      if (U)
        return U == null ? void 0 : U.focus();
      if (A.code === "Space" || (z && (A.key === "Tab" && A.preventDefault(), !I && Q && D(A.key)), A.target !== S.value) || !Sp.includes(A.key))
        return;
      A.preventDefault();
      const N = B.value;
      li.includes(A.key) && N.reverse(), Qa(N);
    }
    function M(A) {
      var z, I;
      (I = (z = A == null ? void 0 : A.currentTarget) == null ? void 0 : z.contains) != null && I.call(z, A.target) || (window.clearTimeout(c.value), d.value = "");
    }
    function q(A) {
      var z;
      if (!so(A))
        return;
      const I = A.target, Q = m.value !== A.clientX;
      if ((z = A == null ? void 0 : A.currentTarget) != null && z.contains(I) && Q) {
        const U = A.clientX > m.value ? "right" : "left";
        v.value = U, m.value = A.clientX;
      }
    }
    return If({
      onItemEnter: (A) => !!O(A),
      onItemLeave: (A) => {
        var z;
        O(A) || ((z = S.value) == null || z.focus(), g.value = null);
      },
      onTriggerLeave: (A) => !!O(A),
      searchRef: d,
      pointerGraceTimerRef: p,
      onPointerGraceIntentChange: (A) => {
        f.value = A;
      }
    }), (A, z) => (h(), x(s(da), {
      "as-child": "",
      trapped: s(l),
      onMountAutoFocus: T,
      onUnmountAutoFocus: z[7] || (z[7] = (I) => o("closeAutoFocus", I))
    }, {
      default: y(() => [
        F(s(Nn), {
          "as-child": "",
          "disable-outside-pointer-events": s(i),
          onEscapeKeyDown: z[2] || (z[2] = (I) => o("escapeKeyDown", I)),
          onPointerDownOutside: z[3] || (z[3] = (I) => o("pointerDownOutside", I)),
          onFocusOutside: z[4] || (z[4] = (I) => o("focusOutside", I)),
          onInteractOutside: z[5] || (z[5] = (I) => o("interactOutside", I)),
          onDismiss: z[6] || (z[6] = (I) => o("dismiss"))
        }, {
          default: y(() => [
            F(s(gi), {
              "current-tab-stop-id": g.value,
              "onUpdate:currentTabStopId": z[0] || (z[0] = (I) => g.value = I),
              "as-child": "",
              orientation: "vertical",
              dir: s(r).dir.value,
              loop: s(u),
              onEntryFocus: z[1] || (z[1] = (I) => {
                o("entryFocus", I), s(r).isUsingKeyboardRef.value || I.preventDefault();
              })
            }, {
              default: y(() => [
                F(s(Tn), {
                  ref: s(C),
                  role: "menu",
                  as: A.as,
                  "as-child": A.asChild,
                  "aria-orientation": "vertical",
                  "data-radix-menu-content": "",
                  "data-state": s(Fr)(s(a).open.value),
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
                  onKeydown: P,
                  onBlur: M,
                  onPointermove: q
                }, {
                  default: y(() => [
                    w(A.$slots, "default")
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
}), hi = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Kr(), { forwardRef: o } = j(), a = E(!1);
    async function r(i) {
      if (!i.defaultPrevented && so(i)) {
        if (t.disabled)
          n.onItemLeave(i);
        else if (!n.onItemEnter(i)) {
          const u = i.currentTarget;
          u == null || u.focus({ preventScroll: !0 });
        }
      }
    }
    async function l(i) {
      await se(), !i.defaultPrevented && so(i) && n.onItemLeave(i);
    }
    return (i, u) => (h(), x(s(fa), {
      value: { textValue: i.textValue }
    }, {
      default: y(() => [
        F(s(X), k({
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
            await se(), !(d.defaultPrevented || i.disabled) && (a.value = !0);
          }),
          onBlur: u[1] || (u[1] = async (d) => {
            await se(), !d.defaultPrevented && (a.value = !1);
          })
        }), {
          default: y(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "aria-disabled", "data-disabled", "data-highlighted"])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), Wr = /* @__PURE__ */ b({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = t, { forwardRef: a, currentElement: r } = j(), l = bo(), i = Kr(), u = E(!1);
    async function d() {
      const c = r.value;
      if (!n.disabled && c) {
        const p = new CustomEvent(Cp, {
          bubbles: !0,
          cancelable: !0
        });
        o("select", p), await se(), p.defaultPrevented ? u.value = !1 : l.onClose();
      }
    }
    return (c, p) => (h(), x(hi, k(n, {
      ref: s(a),
      onClick: d,
      onPointerdown: p[0] || (p[0] = () => {
        u.value = !0;
      }),
      onPointerup: p[1] || (p[1] = async (f) => {
        var v;
        await se(), !f.defaultPrevented && (u.value || (v = f.currentTarget) == null || v.click());
      }),
      onKeydown: p[2] || (p[2] = async (f) => {
        const v = s(i).searchRef.value !== "";
        c.disabled || v && f.key === " " || s(Za).includes(f.key) && (f.currentTarget.click(), f.preventDefault());
      })
    }), {
      default: y(() => [
        w(c.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Mf, yi] = be(
  ["MenuCheckboxItem", "MenuRadioItem"],
  "MenuItemIndicatorContext"
), Ff = /* @__PURE__ */ b({
  __name: "MenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = Mf({
      checked: E(!1)
    });
    return (n, o) => (h(), x(s(pt), {
      present: n.forceMount || s(Go)(s(t).checked.value) || s(t).checked.value === !0
    }, {
      default: y(() => [
        F(s(X), {
          as: n.as,
          "as-child": n.asChild,
          "data-state": s(Rr)(s(t).checked.value)
        }, {
          default: y(() => [
            w(n.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child", "data-state"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Rf = /* @__PURE__ */ b({
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
    const n = e, o = t, a = Me(n, "checked", o);
    return yi({ checked: a }), (r, l) => (h(), x(Wr, k({ role: "menuitemcheckbox" }, n, {
      "aria-checked": s(Go)(s(a)) ? "mixed" : s(a),
      "data-state": s(Rr)(s(a)),
      onSelect: l[0] || (l[0] = async (i) => {
        o("select", i), s(Go)(s(a)) ? a.value = !0 : a.value = !s(a);
      })
    }), {
      default: y(() => [
        w(r.$slots, "default", { checked: s(a) })
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), Lf = /* @__PURE__ */ b({
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
    const n = e, o = t, a = ce(n, o), r = vn(), { forwardRef: l, currentElement: i } = j();
    return go(i), (u, d) => (h(), x(Hr, k(s(a), {
      ref: s(l),
      "trap-focus": s(r).open.value,
      "disable-outside-pointer-events": s(r).open.value,
      "disable-outside-scroll": !0,
      onDismiss: d[0] || (d[0] = (c) => s(r).onOpenChange(!1)),
      onFocusOutside: d[1] || (d[1] = Fe((c) => o("focusOutside", c), ["prevent"]))
    }), {
      default: y(() => [
        w(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), Vf = /* @__PURE__ */ b({
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
    const n = ce(e, t), o = vn();
    return (a, r) => (h(), x(Hr, k(s(n), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      "disable-outside-scroll": !1,
      onDismiss: r[0] || (r[0] = (l) => s(o).onOpenChange(!1))
    }), {
      default: y(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), qf = /* @__PURE__ */ b({
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
    const n = ce(e, t), o = vn(), a = bo();
    return (r, l) => (h(), x(s(pt), {
      present: r.forceMount || s(o).open.value
    }, {
      default: y(() => [
        s(a).modal.value ? (h(), x(Lf, Z(k({ key: 0 }, { ...r.$attrs, ...s(n) })), {
          default: y(() => [
            w(r.$slots, "default")
          ]),
          _: 3
        }, 16)) : (h(), x(Vf, Z(k({ key: 1 }, { ...r.$attrs, ...s(n) })), {
          default: y(() => [
            w(r.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), bi = /* @__PURE__ */ b({
  __name: "MenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(X), k({ role: "group" }, t), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Nf = /* @__PURE__ */ b({
  __name: "MenuLabel",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(X), Z(te(t)), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), zf = /* @__PURE__ */ b({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(qn), Z(te(t)), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [jf, Kf] = be("MenuRadioGroup"), Hf = /* @__PURE__ */ b({
  __name: "MenuRadioGroup",
  props: {
    modelValue: { default: "" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = Me(n, "modelValue", t);
    return Kf({
      modelValue: o,
      onValueChange: (a) => {
        o.value = a;
      }
    }), (a, r) => (h(), x(bi, Z(te(n)), {
      default: y(() => [
        w(a.$slots, "default", { modelValue: s(o) })
      ]),
      _: 3
    }, 16));
  }
}), Wf = /* @__PURE__ */ b({
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
    const n = e, o = t, { value: a } = ye(n), r = jf(), l = $(
      () => r.modelValue.value === (a == null ? void 0 : a.value)
    );
    return yi({ checked: l }), (i, u) => (h(), x(Wr, k({ role: "menuitemradio" }, n, {
      "aria-checked": l.value,
      "data-state": s(Rr)(l.value),
      onSelect: u[0] || (u[0] = async (d) => {
        o("select", d), s(r).onValueChange(s(a));
      })
    }), {
      default: y(() => [
        w(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), Uf = /* @__PURE__ */ b({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(X), k(t, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [wi, Gf] = be("MenuSub"), Yf = /* @__PURE__ */ b({
  __name: "MenuSub",
  props: {
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = Me(n, "open", t, {
      defaultValue: !1,
      passive: n.open === void 0
    }), a = vn(), r = E(), l = E();
    return xe((i) => {
      (a == null ? void 0 : a.open.value) === !1 && (o.value = !1), i(() => o.value = !1);
    }), vi({
      open: o,
      onOpenChange: (i) => {
        o.value = i;
      },
      content: l,
      onContentChange: (i) => {
        l.value = i;
      }
    }), Gf({
      triggerId: "",
      contentId: "",
      trigger: r,
      onTriggerChange: (i) => {
        r.value = i;
      }
    }), (i, u) => (h(), x(s(zn), null, {
      default: y(() => [
        w(i.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Xf = /* @__PURE__ */ b({
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
    const n = ce(e, t), o = vn(), a = bo(), r = wi(), { forwardRef: l, currentElement: i } = j();
    return r.contentId || (r.contentId = je(void 0, "radix-vue-menu-sub-content")), (u, d) => (h(), x(s(pt), {
      present: u.forceMount || s(o).open.value
    }, {
      default: y(() => [
        F(Hr, k(s(n), {
          id: s(r).contentId,
          ref: s(l),
          "aria-labelledby": s(r).triggerId,
          align: "start",
          side: s(a).dir.value === "rtl" ? "left" : "right",
          "disable-outside-pointer-events": !1,
          "disable-outside-scroll": !1,
          "trap-focus": !1,
          onOpenAutoFocus: d[0] || (d[0] = Fe((c) => {
            var p;
            s(a).isUsingKeyboardRef.value && ((p = s(i)) == null || p.focus());
          }, ["prevent"])),
          onCloseAutoFocus: d[1] || (d[1] = Fe(() => {
          }, ["prevent"])),
          onFocusOutside: d[2] || (d[2] = (c) => {
            c.defaultPrevented || c.target !== s(r).trigger.value && s(o).onOpenChange(!1);
          }),
          onEscapeKeyDown: d[3] || (d[3] = (c) => {
            s(a).onClose(), c.preventDefault();
          }),
          onKeydown: d[4] || (d[4] = (c) => {
            var p, f;
            const v = (p = c.currentTarget) == null ? void 0 : p.contains(c.target), m = s(Op)[s(a).dir.value].includes(c.key);
            v && m && (s(o).onOpenChange(!1), (f = s(r).trigger.value) == null || f.focus(), c.preventDefault());
          })
        }), {
          default: y(() => [
            w(u.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-labelledby", "side"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Zf = /* @__PURE__ */ b({
  __name: "MenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = vn(), o = bo(), a = wi(), r = Kr(), l = E(null);
    a.triggerId || (a.triggerId = je(void 0, "radix-vue-menu-sub-trigger"));
    function i() {
      l.value && window.clearTimeout(l.value), l.value = null;
    }
    Ke(() => {
      i();
    });
    function u(p) {
      !so(p) || r.onItemEnter(p) || !t.disabled && !n.open.value && !l.value && (r.onPointerGraceIntentChange(null), l.value = window.setTimeout(() => {
        n.onOpenChange(!0), i();
      }, 100));
    }
    async function d(p) {
      var f, v;
      if (!so(p))
        return;
      i();
      const m = (f = n.content.value) == null ? void 0 : f.getBoundingClientRect();
      if (m != null && m.width) {
        const g = (v = n.content.value) == null ? void 0 : v.dataset.side, _ = g === "right", C = _ ? -5 : 5, S = m[_ ? "left" : "right"], B = m[_ ? "right" : "left"];
        r.onPointerGraceIntentChange({
          area: [
            // Apply a bleed on clientX to ensure that our exit point is
            // consistently within polygon bounds
            { x: p.clientX + C, y: p.clientY },
            { x: S, y: m.top },
            { x: B, y: m.top },
            { x: B, y: m.bottom },
            { x: S, y: m.bottom }
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
      var f;
      const v = r.searchRef.value !== "";
      t.disabled || v && p.key === " " || $p[o.dir.value].includes(p.key) && (n.onOpenChange(!0), await se(), (f = n.content.value) == null || f.focus(), p.preventDefault());
    }
    return (p, f) => (h(), x(fi, { "as-child": "" }, {
      default: y(() => [
        F(hi, k(t, {
          id: s(a).triggerId,
          ref: (v) => {
            var m;
            (m = s(a)) == null || m.onTriggerChange(v == null ? void 0 : v.$el);
          },
          "aria-haspopup": "menu",
          "aria-expanded": s(n).open.value,
          "aria-controls": s(a).contentId,
          "data-state": s(Fr)(s(n).open.value),
          onClick: f[0] || (f[0] = async (v) => {
            t.disabled || v.defaultPrevented || (v.currentTarget.focus(), s(n).open.value || s(n).onOpenChange(!0));
          }),
          onPointermove: u,
          onPointerleave: d,
          onKeydown: c
        }), {
          default: y(() => [
            w(p.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-expanded", "aria-controls", "data-state"])
      ]),
      _: 3
    }));
  }
}), [_i, Qf] = be("DropdownMenuRoot"), Jf = /* @__PURE__ */ b({
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
    j();
    const a = Me(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), r = E(), { modal: l, dir: i } = ye(n), u = Jt(i);
    return Qf({
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
    }), (d, c) => (h(), x(s(Bf), {
      open: s(a),
      "onUpdate:open": c[0] || (c[0] = (p) => tt(a) ? a.value = p : null),
      dir: s(u),
      modal: s(l)
    }, {
      default: y(() => [
        w(d.$slots, "default", { open: s(a) })
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
}), ev = /* @__PURE__ */ b({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = _i(), { forwardRef: o, currentElement: a } = j();
    return ie(() => {
      n.triggerElement = a;
    }), n.triggerId || (n.triggerId = je(void 0, "radix-vue-dropdown-menu-trigger")), (r, l) => (h(), x(s(fi), { "as-child": "" }, {
      default: y(() => [
        F(s(X), {
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
            !r.disabled && i.button === 0 && i.ctrlKey === !1 && ((u = s(n)) == null || u.onOpenToggle(), await se(), s(n).open.value && i.preventDefault());
          }),
          onKeydown: l[1] || (l[1] = ot(
            (i) => {
              r.disabled || (["Enter", " "].includes(i.key) && s(n).onOpenToggle(), i.key === "ArrowDown" && s(n).onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
            },
            ["enter", "space", "arrow-down"]
          ))
        }, {
          default: y(() => [
            w(r.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as-child", "as", "aria-expanded", "aria-controls", "data-disabled", "disabled", "data-state"])
      ]),
      _: 3
    }));
  }
}), tv = /* @__PURE__ */ b({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(zf), Z(te(t)), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), nv = /* @__PURE__ */ b({
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
    const n = ce(e, t);
    j();
    const o = _i(), a = E(!1);
    function r(l) {
      l.defaultPrevented || (a.value || setTimeout(() => {
        var i;
        (i = o.triggerElement.value) == null || i.focus();
      }, 0), a.value = !1, l.preventDefault());
    }
    return o.contentId || (o.contentId = je(void 0, "radix-vue-dropdown-menu-content")), (l, i) => {
      var u;
      return h(), x(s(qf), k(s(n), {
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
          const p = d.detail.originalEvent, f = p.button === 0 && p.ctrlKey === !0, v = p.button === 2 || f;
          (!s(o).modal.value || v) && (a.value = !0), (c = s(o).triggerElement.value) != null && c.contains(d.target) && d.preventDefault();
        })
      }), {
        default: y(() => [
          w(l.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby"]);
    };
  }
}), ov = /* @__PURE__ */ b({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = en(t);
    return j(), (a, r) => (h(), x(s(Wr), Z(te({ ...n, ...s(o) })), {
      default: y(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), av = /* @__PURE__ */ b({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return j(), (n, o) => (h(), x(s(bi), Z(te(t)), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), rv = /* @__PURE__ */ b({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return j(), (n, o) => (h(), x(s(Uf), Z(te(t)), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), sv = /* @__PURE__ */ b({
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
    const n = e, o = en(t);
    return j(), (a, r) => (h(), x(s(Rf), Z(te({ ...n, ...s(o) })), {
      default: y(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), xi = /* @__PURE__ */ b({
  __name: "DropdownMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return j(), (n, o) => (h(), x(s(Ff), Z(te(t)), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), lv = /* @__PURE__ */ b({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return j(), (n, o) => (h(), x(s(Nf), Z(te(t)), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), iv = /* @__PURE__ */ b({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = en(t);
    return j(), (a, r) => (h(), x(s(Hf), Z(te({ ...n, ...s(o) })), {
      default: y(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), uv = /* @__PURE__ */ b({
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
    const n = ce(e, t);
    return j(), (o, a) => (h(), x(s(Wf), Z(te(s(n))), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), dv = /* @__PURE__ */ b({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = Me(n, "open", t, {
      passive: n.open === void 0,
      defaultValue: n.defaultOpen ?? !1
    });
    return j(), (a, r) => (h(), x(s(Yf), {
      open: s(o),
      "onUpdate:open": r[0] || (r[0] = (l) => tt(o) ? o.value = l : null)
    }, {
      default: y(() => [
        w(a.$slots, "default", { open: s(o) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), cv = /* @__PURE__ */ b({
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
    const n = ce(e, t);
    return j(), (o, a) => (h(), x(s(Xf), k(s(n), { style: {
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), pv = /* @__PURE__ */ b({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return j(), (n, o) => (h(), x(s(Zf), Z(te(t)), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fv = /* @__PURE__ */ b({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(e) {
    const t = e;
    return j(), (n, o) => (h(), x(s(X), k(t, {
      onMousedown: o[0] || (o[0] = (a) => {
        !a.defaultPrevented && a.detail > 1 && a.preventDefault();
      })
    }), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Kn, vv] = be("PopoverRoot"), mv = /* @__PURE__ */ b({
  __name: "PopoverRoot",
  props: {
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: !1 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = t, { modal: a } = ye(n), r = Me(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), l = E(), i = E(!1);
    return vv({
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
        w(u.$slots, "default", { open: s(r) })
      ]),
      _: 3
    }));
  }
}), gv = /* @__PURE__ */ b({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Kn(), { forwardRef: o, currentElement: a } = j();
    return ie(() => {
      n.triggerElement.value = a.value;
    }), (r, l) => (h(), x(lt(s(n).hasCustomAnchor.value ? s(X) : s(ho)), { "as-child": "" }, {
      default: y(() => [
        F(s(X), {
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
            w(r.$slots, "default")
          ]),
          _: 3
        }, 8, ["type", "aria-expanded", "aria-controls", "data-state", "as", "as-child", "onClick"])
      ]),
      _: 3
    }));
  }
}), hv = /* @__PURE__ */ b({
  __name: "PopoverPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(qn), Z(te(t)), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ci = /* @__PURE__ */ b({
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
    const n = e, o = t, a = Ye(n), { forwardRef: r } = j(), l = Kn();
    return Er(), (i, u) => (h(), x(s(da), {
      "as-child": "",
      loop: "",
      trapped: i.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => o("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => o("closeAutoFocus", d))
    }, {
      default: y(() => [
        F(s(Nn), {
          "as-child": "",
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          onPointerDownOutside: u[0] || (u[0] = (d) => o("pointerDownOutside", d)),
          onInteractOutside: u[1] || (u[1] = (d) => o("interactOutside", d)),
          onEscapeKeyDown: u[2] || (u[2] = (d) => o("escapeKeyDown", d)),
          onFocusOutside: u[3] || (u[3] = (d) => o("focusOutside", d)),
          onDismiss: u[4] || (u[4] = (d) => s(l).onOpenChange(!1))
        }, {
          default: y(() => [
            F(s(Tn), k(s(a), {
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
                w(i.$slots, "default")
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
}), yv = /* @__PURE__ */ b({
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
    const n = e, o = t, a = Kn(), r = E(!1);
    mo(!0);
    const l = ce(n, o), { forwardRef: i, currentElement: u } = j();
    return go(u), (d, c) => (h(), x(Ci, k(s(l), {
      ref: s(i),
      "trap-focus": s(a).open.value,
      "disable-outside-pointer-events": "",
      onCloseAutoFocus: c[0] || (c[0] = Fe(
        (p) => {
          var f;
          o("closeAutoFocus", p), r.value || (f = s(a).triggerElement.value) == null || f.focus();
        },
        ["prevent"]
      )),
      onPointerDownOutside: c[1] || (c[1] = (p) => {
        o("pointerDownOutside", p);
        const f = p.detail.originalEvent, v = f.button === 0 && f.ctrlKey === !0, m = f.button === 2 || v;
        r.value = m;
      }),
      onFocusOutside: c[2] || (c[2] = Fe(() => {
      }, ["prevent"]))
    }), {
      default: y(() => [
        w(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), bv = /* @__PURE__ */ b({
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
    const n = e, o = t, a = Kn(), r = E(!1), l = E(!1), i = ce(n, o);
    return (u, d) => (h(), x(Ci, k(s(i), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: d[0] || (d[0] = (c) => {
        var p;
        o("closeAutoFocus", c), c.defaultPrevented || (r.value || (p = s(a).triggerElement.value) == null || p.focus(), c.preventDefault()), r.value = !1, l.value = !1;
      }),
      onInteractOutside: d[1] || (d[1] = async (c) => {
        var p;
        o("interactOutside", c), c.defaultPrevented || (r.value = !0, c.detail.originalEvent.type === "pointerdown" && (l.value = !0));
        const f = c.target;
        (p = s(a).triggerElement.value) != null && p.contains(f) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && l.value && c.preventDefault();
      })
    }), {
      default: y(() => [
        w(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wv = /* @__PURE__ */ b({
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
    const n = e, o = t, a = Kn(), r = ce(n, o), { forwardRef: l } = j();
    return a.contentId || (a.contentId = je(void 0, "radix-vue-popover-content")), (i, u) => (h(), x(s(pt), {
      present: i.forceMount || s(a).open.value
    }, {
      default: y(() => [
        s(a).modal.value ? (h(), x(yv, k({ key: 0 }, s(r), { ref: s(l) }), {
          default: y(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (h(), x(bv, k({ key: 1 }, s(r), { ref: s(l) }), {
          default: y(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), A1 = /* @__PURE__ */ b({
  __name: "PopoverAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    j();
    const n = Kn();
    return ml(() => {
      n.hasCustomAnchor.value = !0;
    }), Ke(() => {
      n.hasCustomAnchor.value = !1;
    }), (o, a) => (h(), x(s(ho), Z(te(t)), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), lo = 100, [_v, xv] = be("ProgressRoot"), Ur = (e) => typeof e == "number";
function Cv(e, t) {
  return Pn(e) || Ur(e) && !Number.isNaN(e) && e <= t && e >= 0 ? e : (console.error(`Invalid prop \`value\` of value \`${e}\` supplied to \`ProgressRoot\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${lo} if no \`max\` prop is set)
  - \`null\`  or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`), null);
}
function Bv(e) {
  return Ur(e) && !Number.isNaN(e) && e > 0 ? e : (console.error(
    `Invalid prop \`max\` of value \`${e}\` supplied to \`ProgressRoot\`. Only numbers greater than 0 are valid max values. Defaulting to \`${lo}\`.`
  ), lo);
}
const Sv = /* @__PURE__ */ b({
  __name: "ProgressRoot",
  props: {
    modelValue: {},
    max: { default: lo },
    getValueLabel: { type: Function, default: (e, t) => `${Math.round(e / t * lo)}%` },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "update:max"],
  setup(e, { emit: t }) {
    const n = e, o = t;
    j();
    const a = Me(n, "modelValue", o, {
      passive: n.modelValue === void 0
    }), r = Me(n, "max", o, {
      passive: n.max === void 0
    });
    ne(
      () => a.value,
      async (i) => {
        const u = Cv(i, n.max);
        u !== i && (await se(), a.value = u);
      },
      { immediate: !0 }
    ), ne(
      () => n.max,
      (i) => {
        const u = Bv(n.max);
        u !== i && (r.value = u);
      },
      { immediate: !0 }
    );
    const l = $(() => Pn(a.value) ? "indeterminate" : a.value === r.value ? "complete" : "loading");
    return xv({
      modelValue: a,
      max: r,
      progressState: l
    }), (i, u) => (h(), x(s(X), {
      "as-child": i.asChild,
      as: i.as,
      "aria-valuemax": s(r),
      "aria-valuemin": 0,
      "aria-valuenow": Ur(s(a)) ? s(a) : void 0,
      "aria-valuetext": i.getValueLabel(s(a), s(r)),
      "aria-label": i.getValueLabel(s(a), s(r)),
      role: "progressbar",
      "data-state": l.value,
      "data-value": s(a) ?? void 0,
      "data-max": s(r)
    }, {
      default: y(() => [
        w(i.$slots, "default", { modelValue: s(a) })
      ]),
      _: 3
    }, 8, ["as-child", "as", "aria-valuemax", "aria-valuenow", "aria-valuetext", "aria-label", "data-state", "data-value", "data-max"]));
  }
}), $v = /* @__PURE__ */ b({
  __name: "ProgressIndicator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = _v();
    return j(), (o, a) => {
      var r;
      return h(), x(s(X), k(t, {
        "data-state": s(n).progressState.value,
        "data-value": ((r = s(n).modelValue) == null ? void 0 : r.value) ?? void 0,
        "data-max": s(n).max.value
      }), {
        default: y(() => [
          w(o.$slots, "default")
        ]),
        _: 3
      }, 16, ["data-state", "data-value", "data-max"]);
    };
  }
}), Ov = ["default-value"], Ev = /* @__PURE__ */ b({
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
    return (a, r) => (h(), x(s(yo), { "as-child": "" }, {
      default: y(() => [
        Mn(de("select", k({
          ref_key: "selectElement",
          ref: o
        }, t, {
          "onUpdate:modelValue": r[0] || (r[0] = (l) => tt(n) ? n.value = l : null),
          "default-value": s(n)
        }), [
          w(a.$slots, "default")
        ], 16, Ov), [
          [Hu, s(n)]
        ])
      ]),
      _: 3
    }));
  }
}), Pv = {
  key: 0,
  value: ""
}, [mn, Bi] = be("SelectRoot"), [kv, Dv] = be("SelectRoot"), Av = /* @__PURE__ */ b({
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
    const n = e, o = t, a = Me(n, "modelValue", o, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), r = Me(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), l = E(), i = E(), u = E({
      x: 0,
      y: 0
    }), d = E(!1), { required: c, disabled: p, dir: f } = ye(n), v = Jt(f);
    Bi({
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
    const m = ia(l), g = E(/* @__PURE__ */ new Set()), _ = $(() => Array.from(g.value).map((C) => {
      var S;
      return (S = C.props) == null ? void 0 : S.value;
    }).join(";"));
    return Dv({
      onNativeOptionAdd: (C) => {
        g.value.add(C);
      },
      onNativeOptionRemove: (C) => {
        g.value.delete(C);
      }
    }), (C, S) => (h(), x(s(zn), null, {
      default: y(() => [
        w(C.$slots, "default", {
          modelValue: s(a),
          open: s(r)
        }),
        s(m) ? (h(), x(Ev, k({ key: _.value }, C.$attrs, {
          "aria-hidden": "true",
          tabindex: "-1",
          required: s(c),
          name: C.name,
          autocomplete: C.autocomplete,
          disabled: s(p),
          value: s(a),
          onChange: S[0] || (S[0] = (B) => a.value = B.target.value)
        }), {
          default: y(() => [
            s(a) === void 0 ? (h(), K("option", Pv)) : he("", !0),
            (h(!0), K(Te, null, Gt(Array.from(g.value), (B) => (h(), x(lt(B), k({ ref_for: !0 }, B.props, {
              key: B.key ?? ""
            }), null, 16))), 128))
          ]),
          _: 1
        }, 16, ["required", "name", "autocomplete", "disabled", "value"])) : he("", !0)
      ]),
      _: 3
    }));
  }
}), Tv = [" ", "Enter", "ArrowUp", "ArrowDown"], Iv = [" ", "Enter"], gt = 10;
function Si(e) {
  return e === "" || Pn(e);
}
const Mv = /* @__PURE__ */ b({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = mn(), o = $(() => {
      var v;
      return ((v = n.disabled) == null ? void 0 : v.value) || t.disabled;
    }), { forwardRef: a, currentElement: r } = j();
    n.contentId || (n.contentId = je(void 0, "radix-vue-select-content")), ie(() => {
      n.triggerElement = r;
    });
    const { injectCollection: l } = Vn(), i = l(), { search: u, handleTypeaheadSearch: d, resetTypeahead: c } = Pr(i);
    function p() {
      o.value || (n.onOpenChange(!0), c());
    }
    function f(v) {
      p(), n.triggerPointerDownPosRef.value = {
        x: Math.round(v.pageX),
        y: Math.round(v.pageY)
      };
    }
    return (v, m) => (h(), x(s(ho), { "as-child": "" }, {
      default: y(() => {
        var g, _, C, S;
        return [
          F(s(X), {
            ref: s(a),
            role: "combobox",
            type: v.as === "button" ? "button" : void 0,
            "aria-controls": s(n).contentId,
            "aria-expanded": s(n).open.value || !1,
            "aria-required": (g = s(n).required) == null ? void 0 : g.value,
            "aria-autocomplete": "none",
            disabled: o.value,
            dir: (_ = s(n)) == null ? void 0 : _.dir.value,
            "data-state": (C = s(n)) != null && C.open.value ? "open" : "closed",
            "data-disabled": o.value ? "" : void 0,
            "data-placeholder": s(Si)((S = s(n).modelValue) == null ? void 0 : S.value) ? "" : void 0,
            "as-child": v.asChild,
            as: v.as,
            onClick: m[0] || (m[0] = (B) => {
              var D;
              (D = B == null ? void 0 : B.currentTarget) == null || D.focus();
            }),
            onPointerdown: m[1] || (m[1] = (B) => {
              if (B.pointerType === "touch")
                return B.preventDefault();
              const D = B.target;
              D.hasPointerCapture(B.pointerId) && D.releasePointerCapture(B.pointerId), B.button === 0 && B.ctrlKey === !1 && (f(B), B.preventDefault());
            }),
            onPointerup: m[2] || (m[2] = Fe(
              (B) => {
                B.pointerType === "touch" && f(B);
              },
              ["prevent"]
            )),
            onKeydown: m[3] || (m[3] = (B) => {
              const D = s(u) !== "";
              !(B.ctrlKey || B.altKey || B.metaKey) && B.key.length === 1 && D && B.key === " " || (s(d)(B.key), s(Tv).includes(B.key) && (p(), B.preventDefault()));
            })
          }, {
            default: y(() => [
              w(v.$slots, "default")
            ]),
            _: 3
          }, 8, ["type", "aria-controls", "aria-expanded", "aria-required", "disabled", "dir", "data-state", "data-disabled", "data-placeholder", "as-child", "as"])
        ];
      }),
      _: 3
    }));
  }
}), Fv = /* @__PURE__ */ b({
  __name: "SelectPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(qn), Z(te(t)), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Gr, Rv] = be("SelectItemAlignedPosition"), Lv = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, o = t, { injectCollection: a } = Vn(), r = mn(), l = gn(), i = a(), u = E(!1), d = E(!0), c = E(), { forwardRef: p, currentElement: f } = j(), { viewport: v, selectedItem: m, selectedItemText: g, focusSelectedItem: _ } = l;
    function C() {
      if (r.triggerElement.value && r.valueElement.value && c.value && f.value && v != null && v.value && m != null && m.value && g != null && g.value) {
        const D = r.triggerElement.value.getBoundingClientRect(), O = f.value.getBoundingClientRect(), T = r.valueElement.value.getBoundingClientRect(), P = g.value.getBoundingClientRect();
        if (r.dir.value !== "rtl") {
          const H = P.left - O.left, Y = T.left - H, oe = D.left - Y, ue = D.width + oe, pe = Math.max(ue, O.width), J = window.innerWidth - gt, me = Uo(Y, gt, Math.max(gt, J - pe));
          c.value.style.minWidth = `${ue}px`, c.value.style.left = `${me}px`;
        } else {
          const H = O.right - P.right, Y = window.innerWidth - T.right - H, oe = window.innerWidth - D.right - Y, ue = D.width + oe, pe = Math.max(ue, O.width), J = window.innerWidth - gt, me = Uo(
            Y,
            gt,
            Math.max(gt, J - pe)
          );
          c.value.style.minWidth = `${ue}px`, c.value.style.right = `${me}px`;
        }
        const M = i.value, q = window.innerHeight - gt * 2, A = v.value.scrollHeight, z = window.getComputedStyle(f.value), I = Number.parseInt(
          z.borderTopWidth,
          10
        ), Q = Number.parseInt(z.paddingTop, 10), U = Number.parseInt(
          z.borderBottomWidth,
          10
        ), N = Number.parseInt(
          z.paddingBottom,
          10
        ), R = I + Q + A + N + U, ae = Math.min(
          m.value.offsetHeight * 5,
          R
        ), G = window.getComputedStyle(v.value), L = Number.parseInt(G.paddingTop, 10), ee = Number.parseInt(
          G.paddingBottom,
          10
        ), W = D.top + D.height / 2 - gt, _e = q - W, ke = m.value.offsetHeight / 2, Be = m.value.offsetTop + ke, Ee = I + Q + Be, Ve = R - Ee;
        if (Ee <= W) {
          const H = m.value === M[M.length - 1];
          c.value.style.bottom = "0px";
          const Y = f.value.clientHeight - v.value.offsetTop - v.value.offsetHeight, oe = Math.max(
            _e,
            ke + (H ? ee : 0) + Y + U
          ), ue = Ee + oe;
          c.value.style.height = `${ue}px`;
        } else {
          const H = m.value === M[0];
          c.value.style.top = "0px";
          const Y = Math.max(
            W,
            I + v.value.offsetTop + (H ? L : 0) + ke
          ) + Ve;
          c.value.style.height = `${Y}px`, v.value.scrollTop = Ee - W + v.value.offsetTop;
        }
        c.value.style.margin = `${gt}px 0`, c.value.style.minHeight = `${ae}px`, c.value.style.maxHeight = `${q}px`, o("placed"), requestAnimationFrame(() => u.value = !0);
      }
    }
    const S = E("");
    ie(async () => {
      await se(), C(), f.value && (S.value = window.getComputedStyle(f.value).zIndex);
    });
    function B(D) {
      D && d.value === !0 && (C(), _ == null || _(), d.value = !1);
    }
    return Rv({
      contentWrapper: c,
      shouldExpandOnScrollRef: u,
      onScrollButtonChange: B
    }), (D, O) => (h(), K("div", {
      ref_key: "contentWrapperElement",
      ref: c,
      style: _t({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: S.value
      })
    }, [
      F(s(X), k({
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
          w(D.$slots, "default")
        ]),
        _: 3
      }, 16)
    ], 4));
  }
}), Vv = /* @__PURE__ */ b({
  __name: "SelectPopperPosition",
  props: {
    side: {},
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: { default: gt },
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Ye(e);
    return (n, o) => (h(), x(s(Tn), k(s(t), { style: {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-select-content-available-width": "var(--radix-popper-available-width)",
      "--radix-select-content-available-height": "var(--radix-popper-available-height)",
      "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hn = {
  onViewportChange: () => {
  },
  itemTextRefCallback: () => {
  },
  itemRefCallback: () => {
  }
}, [gn, qv] = be("SelectContent"), Nv = /* @__PURE__ */ b({
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
    const n = e, o = t, a = mn();
    Er(), mo(n.bodyLock);
    const { createCollection: r } = Vn(), l = E();
    go(l);
    const i = r(l), { search: u, handleTypeaheadSearch: d } = Pr(i), c = E(), p = E(), f = E(), v = E(!1), m = E(!1);
    function g() {
      p.value && l.value && Qa([p.value, l.value]);
    }
    ne(v, () => {
      g();
    });
    const { onOpenChange: _, triggerPointerDownPosRef: C } = a;
    xe((O) => {
      if (!l.value)
        return;
      let T = { x: 0, y: 0 };
      const P = (q) => {
        var A, z;
        T = {
          x: Math.abs(
            Math.round(q.pageX) - (((A = C.value) == null ? void 0 : A.x) ?? 0)
          ),
          y: Math.abs(
            Math.round(q.pageY) - (((z = C.value) == null ? void 0 : z.y) ?? 0)
          )
        };
      }, M = (q) => {
        var A;
        q.pointerType !== "touch" && (T.x <= 10 && T.y <= 10 ? q.preventDefault() : (A = l.value) != null && A.contains(q.target) || _(!1), document.removeEventListener("pointermove", P), C.value = null);
      };
      C.value !== null && (document.addEventListener("pointermove", P), document.addEventListener("pointerup", M, {
        capture: !0,
        once: !0
      })), O(() => {
        document.removeEventListener("pointermove", P), document.removeEventListener("pointerup", M, {
          capture: !0
        });
      });
    });
    function S(O) {
      const T = O.ctrlKey || O.altKey || O.metaKey;
      if (O.key === "Tab" && O.preventDefault(), !T && O.key.length === 1 && d(O.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(O.key)) {
        let P = i.value;
        if (["ArrowUp", "End"].includes(O.key) && (P = P.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(O.key)) {
          const M = O.target, q = P.indexOf(M);
          P = P.slice(q + 1);
        }
        setTimeout(() => Qa(P)), O.preventDefault();
      }
    }
    const B = $(() => n.position === "popper" ? n : {}), D = Ye(B.value);
    return qv({
      content: l,
      viewport: c,
      onViewportChange: (O) => {
        c.value = O;
      },
      itemRefCallback: (O, T, P) => {
        var M, q;
        const A = !m.value && !P;
        (((M = a.modelValue) == null ? void 0 : M.value) !== void 0 && ((q = a.modelValue) == null ? void 0 : q.value) === T || A) && (p.value = O, A && (m.value = !0));
      },
      selectedItem: p,
      selectedItemText: f,
      onItemLeave: () => {
        var O;
        (O = l.value) == null || O.focus();
      },
      itemTextRefCallback: (O, T, P) => {
        var M, q;
        const A = !m.value && !P;
        (((M = a.modelValue) == null ? void 0 : M.value) !== void 0 && ((q = a.modelValue) == null ? void 0 : q.value) === T || A) && (f.value = O);
      },
      focusSelectedItem: g,
      position: n.position,
      isPositioned: v,
      searchRef: u
    }), (O, T) => (h(), x(s(da), {
      "as-child": "",
      onMountAutoFocus: T[6] || (T[6] = Fe(() => {
      }, ["prevent"])),
      onUnmountAutoFocus: T[7] || (T[7] = (P) => {
        var M;
        o("closeAutoFocus", P), !P.defaultPrevented && ((M = s(a).triggerElement.value) == null || M.focus({ preventScroll: !0 }), P.preventDefault());
      })
    }, {
      default: y(() => [
        F(s(Nn), {
          "as-child": "",
          "disable-outside-pointer-events": "",
          onFocusOutside: T[2] || (T[2] = Fe(() => {
          }, ["prevent"])),
          onDismiss: T[3] || (T[3] = (P) => s(a).onOpenChange(!1)),
          onEscapeKeyDown: T[4] || (T[4] = (P) => o("escapeKeyDown", P)),
          onPointerDownOutside: T[5] || (T[5] = (P) => o("pointerDownOutside", P))
        }, {
          default: y(() => [
            (h(), x(lt(
              O.position === "popper" ? Vv : Lv
            ), k({ ...O.$attrs, ...s(D) }, {
              id: s(a).contentId,
              ref: (P) => {
                l.value = s(ct)(P);
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
              onContextmenu: T[0] || (T[0] = Fe(() => {
              }, ["prevent"])),
              onPlaced: T[1] || (T[1] = (P) => v.value = !0),
              onKeydown: S
            }), {
              default: y(() => [
                w(O.$slots, "default")
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
}), zv = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "SelectProvider",
  props: {
    context: {}
  },
  setup(e) {
    return Bi(e.context), (t, n) => w(t.$slots, "default");
  }
}), jv = { key: 1 }, Kv = /* @__PURE__ */ b({
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
    const n = e, o = ce(n, t), a = mn(), r = E();
    ie(() => {
      r.value = new DocumentFragment();
    });
    const l = E(), i = $(() => n.forceMount || a.open.value);
    return (u, d) => {
      var c;
      return i.value ? (h(), x(s(pt), {
        key: 0,
        ref_key: "presenceRef",
        ref: l,
        present: !0
      }, {
        default: y(() => [
          F(Nv, Z(te({ ...s(o), ...u.$attrs })), {
            default: y(() => [
              w(u.$slots, "default")
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 512)) : !((c = l.value) != null && c.present) && r.value ? (h(), K("div", jv, [
        (h(), x(po, { to: r.value }, [
          F(zv, { context: s(a) }, {
            default: y(() => [
              w(u.$slots, "default")
            ]),
            _: 3
          }, 8, ["context"])
        ], 8, ["to"]))
      ])) : he("", !0);
    };
  }
}), Hv = /* @__PURE__ */ b({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(X), k({ "aria-hidden": "true" }, t), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [$i, Wv] = be("SelectItem"), Uv = /* @__PURE__ */ b({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { disabled: n } = ye(t), o = mn(), a = gn(Hn), { forwardRef: r, currentElement: l } = j(), i = $(() => {
      var g;
      return ((g = o.modelValue) == null ? void 0 : g.value) === t.value;
    }), u = E(!1), d = E(t.textValue ?? ""), c = je(void 0, "radix-vue-select-item-text");
    async function p(g) {
      await se(), !(g != null && g.defaultPrevented) && (n.value || (o.onValueChange(t.value), o.onOpenChange(!1)));
    }
    async function f(g) {
      var _;
      await se(), !g.defaultPrevented && (n.value ? (_ = a.onItemLeave) == null || _.call(a) : g.currentTarget.focus({ preventScroll: !0 }));
    }
    async function v(g) {
      var _;
      await se(), !g.defaultPrevented && g.currentTarget === Ge() && ((_ = a.onItemLeave) == null || _.call(a));
    }
    async function m(g) {
      var _;
      await se(), !(g.defaultPrevented || ((_ = a.searchRef) == null ? void 0 : _.value) !== "" && g.key === " ") && (Iv.includes(g.key) && p(), g.key === " " && g.preventDefault());
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
    }), Wv({
      value: t.value,
      disabled: n,
      textId: c,
      isSelected: i,
      onItemTextChange: (g) => {
        d.value = ((d.value || (g == null ? void 0 : g.textContent)) ?? "").trim();
      }
    }), (g, _) => (h(), x(s(X), {
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
      onFocus: _[0] || (_[0] = (C) => u.value = !0),
      onBlur: _[1] || (_[1] = (C) => u.value = !1),
      onPointerup: p,
      onPointerdown: _[2] || (_[2] = (C) => {
        C.currentTarget.focus({ preventScroll: !0 });
      }),
      onTouchend: _[3] || (_[3] = Fe(() => {
      }, ["prevent", "stop"])),
      onPointermove: f,
      onPointerleave: v,
      onKeydown: m
    }, {
      default: y(() => [
        w(g.$slots, "default")
      ]),
      _: 3
    }, 8, ["aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "tabindex", "as", "as-child"]));
  }
}), Gv = /* @__PURE__ */ b({
  __name: "SelectItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = $i();
    return (o, a) => s(n).isSelected.value ? (h(), x(s(X), k({
      key: 0,
      "aria-hidden": "true"
    }, t), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16)) : he("", !0);
  }
}), [Yv, Xv] = be("SelectGroup"), Zv = /* @__PURE__ */ b({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = je(void 0, "radix-vue-select-group");
    return Xv({ id: n }), (o, a) => (h(), x(s(X), k({ role: "group" }, t, { "aria-labelledby": s(n) }), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), Qv = /* @__PURE__ */ b({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, n = Yv({ id: "" });
    return (o, a) => (h(), x(s(X), k(t, {
      id: s(n).id
    }), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Oi = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = mn(), o = gn(Hn), a = kv(), r = $i(), { forwardRef: l, currentElement: i } = j(), u = $(() => {
      var d;
      return Ze("option", {
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
    }), Fn(() => {
      a.onNativeOptionRemove(u.value);
    }), (d, c) => (h(), K(Te, null, [
      F(s(X), k({
        id: s(r).textId,
        ref: s(l)
      }, { ...t, ...d.$attrs }, { "data-item-text": "" }), {
        default: y(() => [
          w(d.$slots, "default")
        ]),
        _: 3
      }, 16, ["id"]),
      s(r).isSelected.value && s(n).valueElement.value && !s(n).valueElementHasChildren.value ? (h(), x(po, {
        key: 0,
        to: s(n).valueElement.value
      }, [
        w(d.$slots, "default")
      ], 8, ["to"])) : he("", !0)
    ], 64));
  }
}), Jv = /* @__PURE__ */ b({
  __name: "SelectViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { nonce: n } = ye(t), o = gf(n), a = gn(Hn), r = a.position === "item-aligned" ? Gr() : void 0, { forwardRef: l, currentElement: i } = j();
    ie(() => {
      a == null || a.onViewportChange(i.value);
    });
    const u = E(0);
    function d(c) {
      const p = c.currentTarget, { shouldExpandOnScrollRef: f, contentWrapper: v } = r ?? {};
      if (f != null && f.value && v != null && v.value) {
        const m = Math.abs(u.value - p.scrollTop);
        if (m > 0) {
          const g = window.innerHeight - gt * 2, _ = Number.parseFloat(
            v.value.style.minHeight
          ), C = Number.parseFloat(v.value.style.height), S = Math.max(_, C);
          if (S < g) {
            const B = S + m, D = Math.min(g, B), O = B - D;
            v.value.style.height = `${D}px`, v.value.style.bottom === "0px" && (p.scrollTop = O > 0 ? O : 0, v.value.style.justifyContent = "flex-end");
          }
        }
      }
      u.value = p.scrollTop;
    }
    return (c, p) => (h(), K(Te, null, [
      F(s(X), k({
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
          w(c.$slots, "default")
        ]),
        _: 3
      }, 16),
      F(s(X), {
        as: "style",
        nonce: s(o)
      }, {
        default: y(() => [
          Ce(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-radix-select-viewport]::-webkit-scrollbar { display: none; } ")
        ]),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
}), Ei = /* @__PURE__ */ b({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(e, { emit: t }) {
    const n = t, { injectCollection: o } = Vn(), a = o(), r = gn(Hn), l = E(null);
    function i() {
      l.value !== null && (window.clearInterval(l.value), l.value = null);
    }
    xe(() => {
      const c = a.value.find(
        (p) => p === Ge()
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
    return Fn(() => i()), (c, p) => {
      var f;
      return h(), x(s(X), k({
        "aria-hidden": "true",
        style: {
          flexShrink: 0
        }
      }, (f = c.$parent) == null ? void 0 : f.$props, {
        onPointerdown: u,
        onPointermove: d,
        onPointerleave: p[0] || (p[0] = () => {
          i();
        })
      }), {
        default: y(() => [
          w(c.$slots, "default")
        ]),
        _: 3
      }, 16);
    };
  }
}), em = /* @__PURE__ */ b({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = gn(Hn), n = t.position === "item-aligned" ? Gr() : void 0, { forwardRef: o, currentElement: a } = j(), r = E(!1);
    return xe((l) => {
      var i, u;
      if ((i = t.viewport) != null && i.value && (u = t.isPositioned) != null && u.value) {
        let d = function() {
          r.value = c.scrollTop > 0;
        };
        const c = t.viewport.value;
        d(), c.addEventListener("scroll", d), l(() => c.removeEventListener("scroll", d));
      }
    }), ne(a, () => {
      a.value && (n == null || n.onScrollButtonChange(a.value));
    }), (l, i) => r.value ? (h(), x(Ei, {
      key: 0,
      ref: s(o),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: u, selectedItem: d } = s(t);
        u != null && u.value && d != null && d.value && (u.value.scrollTop = u.value.scrollTop - d.value.offsetHeight);
      })
    }, {
      default: y(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 512)) : he("", !0);
  }
}), tm = /* @__PURE__ */ b({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = gn(Hn), n = t.position === "item-aligned" ? Gr() : void 0, { forwardRef: o, currentElement: a } = j(), r = E(!1);
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
    }), ne(a, () => {
      a.value && (n == null || n.onScrollButtonChange(a.value));
    }), (l, i) => r.value ? (h(), x(Ei, {
      key: 0,
      ref: s(o),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: u, selectedItem: d } = s(t);
        u != null && u.value && d != null && d.value && (u.value.scrollTop = u.value.scrollTop + d.value.offsetHeight);
      })
    }, {
      default: y(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 512)) : he("", !0);
  }
}), nm = /* @__PURE__ */ b({
  __name: "SelectValue",
  props: {
    placeholder: { default: "" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const { forwardRef: t, currentElement: n } = j(), o = mn(), a = dr();
    return ml(() => {
      var r;
      const l = !!sa((r = a == null ? void 0 : a.default) == null ? void 0 : r.call(a)).length;
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
          s(Si)((i = s(o).modelValue) == null ? void 0 : i.value) ? (h(), K(Te, { key: 0 }, [
            Ce(Ie(r.placeholder), 1)
          ], 64)) : w(r.$slots, "default", { key: 1 })
        ];
      }),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), om = /* @__PURE__ */ b({
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
        w(t.$slots, "default", {}, () => [
          Ce("▼")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function am(e = [], t, n) {
  const o = [...e];
  return o[n] = t, o.sort((a, r) => a - r);
}
function Pi(e, t, n) {
  const o = 100 / (n - t) * (e - t);
  return Uo(o, 0, 100);
}
function rm(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
function sm(e, t) {
  if (e.length === 1)
    return 0;
  const n = e.map((a) => Math.abs(a - t)), o = Math.min(...n);
  return n.indexOf(o);
}
function lm(e, t, n) {
  const o = e / 2, a = Yr([0, 50], [0, o]);
  return (o - a(t) * n) * n;
}
function im(e) {
  return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
function um(e, t) {
  if (t > 0) {
    const n = im(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function Yr(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const o = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + o * (n - e[0]);
  };
}
function dm(e) {
  return (String(e).split(".")[1] || "").length;
}
function cm(e, t) {
  const n = 10 ** t;
  return Math.round(e * n) / n;
}
const ki = ["PageUp", "PageDown"], Di = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Ai = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, [Ti, Ii] = be(["SliderVertical", "SliderHorizontal"]), Mi = /* @__PURE__ */ b({
  __name: "SliderImpl",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  emits: ["slideStart", "slideMove", "slideEnd", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = va();
    return (r, l) => (h(), x(s(X), k({ "data-slider-impl": "" }, n, {
      onKeydown: l[0] || (l[0] = (i) => {
        i.key === "Home" ? (o("homeKeyDown", i), i.preventDefault()) : i.key === "End" ? (o("endKeyDown", i), i.preventDefault()) : s(ki).concat(s(Di)).includes(i.key) && (o("stepKeyDown", i), i.preventDefault());
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
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), pm = /* @__PURE__ */ b({
  __name: "SliderHorizontal",
  props: {
    dir: {},
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const n = e, o = t, { max: a, min: r, dir: l, inverted: i } = ye(n), { forwardRef: u, currentElement: d } = j(), c = E(), p = $(() => (l == null ? void 0 : l.value) === "ltr" && !i.value || (l == null ? void 0 : l.value) !== "ltr" && i.value);
    function f(v) {
      const m = c.value || d.value.getBoundingClientRect(), g = [0, m.width], _ = p.value ? [r.value, a.value] : [a.value, r.value], C = Yr(g, _);
      return c.value = m, C(v - m.left);
    }
    return Ii({
      startEdge: p.value ? "left" : "right",
      endEdge: p.value ? "right" : "left",
      direction: p.value ? 1 : -1,
      size: "width"
    }), (v, m) => (h(), x(Mi, {
      ref: s(u),
      dir: s(l),
      "data-orientation": "horizontal",
      style: {
        "--radix-slider-thumb-transform": "translateX(-50%)"
      },
      onSlideStart: m[0] || (m[0] = (g) => {
        const _ = f(g.clientX);
        o("slideStart", _);
      }),
      onSlideMove: m[1] || (m[1] = (g) => {
        const _ = f(g.clientX);
        o("slideMove", _);
      }),
      onSlideEnd: m[2] || (m[2] = () => {
        c.value = void 0, o("slideEnd");
      }),
      onStepKeyDown: m[3] || (m[3] = (g) => {
        const _ = p.value ? "from-left" : "from-right", C = s(Ai)[_].includes(g.key);
        o("stepKeyDown", g, C ? -1 : 1);
      }),
      onEndKeyDown: m[4] || (m[4] = (g) => o("endKeyDown", g)),
      onHomeKeyDown: m[5] || (m[5] = (g) => o("homeKeyDown", g))
    }, {
      default: y(() => [
        w(v.$slots, "default")
      ]),
      _: 3
    }, 8, ["dir"]));
  }
}), fm = /* @__PURE__ */ b({
  __name: "SliderVertical",
  props: {
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const n = e, o = t, { max: a, min: r, inverted: l } = ye(n), { forwardRef: i, currentElement: u } = j(), d = E(), c = $(() => !l.value);
    function p(f) {
      const v = d.value || u.value.getBoundingClientRect(), m = [0, v.height], g = c.value ? [a.value, r.value] : [r.value, a.value], _ = Yr(m, g);
      return d.value = v, _(f - v.top);
    }
    return Ii({
      startEdge: c.value ? "bottom" : "top",
      endEdge: c.value ? "top" : "bottom",
      size: "height",
      direction: c.value ? 1 : -1
    }), (f, v) => (h(), x(Mi, {
      ref: s(i),
      "data-orientation": "vertical",
      style: {
        "--radix-slider-thumb-transform": "translateY(50%)"
      },
      onSlideStart: v[0] || (v[0] = (m) => {
        const g = p(m.clientY);
        o("slideStart", g);
      }),
      onSlideMove: v[1] || (v[1] = (m) => {
        const g = p(m.clientY);
        o("slideMove", g);
      }),
      onSlideEnd: v[2] || (v[2] = () => {
        d.value = void 0, o("slideEnd");
      }),
      onStepKeyDown: v[3] || (v[3] = (m) => {
        const g = c.value ? "from-bottom" : "from-top", _ = s(Ai)[g].includes(m.key);
        o("stepKeyDown", m, _ ? -1 : 1);
      }),
      onEndKeyDown: v[4] || (v[4] = (m) => o("endKeyDown", m)),
      onHomeKeyDown: v[5] || (v[5] = (m) => o("homeKeyDown", m))
    }, {
      default: y(() => [
        w(f.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
}), vm = ["value", "name", "disabled", "step"], [va, mm] = be("SliderRoot"), gm = /* @__PURE__ */ b({
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
    const n = e, o = t, { min: a, max: r, step: l, minStepsBetweenThumbs: i, orientation: u, disabled: d, dir: c } = ye(n), p = Jt(c), { forwardRef: f, currentElement: v } = j(), m = ia(v);
    Nr();
    const g = Me(n, "modelValue", o, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), _ = E(0), C = E(g.value);
    function S(P) {
      const M = sm(g.value, P);
      O(P, M);
    }
    function B(P) {
      O(P, _.value);
    }
    function D() {
      const P = C.value[_.value];
      g.value[_.value] !== P && o("valueCommit", Wu(g.value));
    }
    function O(P, M, { commit: q } = { commit: !1 }) {
      var A;
      const z = dm(l.value), I = cm(Math.round((P - a.value) / l.value) * l.value + a.value, z), Q = Uo(I, a.value, r.value), U = am(g.value, Q, M);
      if (um(U, i.value * l.value)) {
        _.value = U.indexOf(Q);
        const N = String(U) !== String(g.value);
        N && q && o("valueCommit", U), N && ((A = T.value[_.value]) == null || A.focus(), g.value = U);
      }
    }
    const T = E([]);
    return mm({
      modelValue: g,
      valueIndexToChangeRef: _,
      thumbElements: T,
      orientation: u,
      min: a,
      max: r,
      disabled: d
    }), (P, M) => (h(), K(Te, null, [
      F(s(zr), null, {
        default: y(() => [
          (h(), x(lt(s(u) === "horizontal" ? pm : fm), k(P.$attrs, {
            ref: s(f),
            "as-child": P.asChild,
            as: P.as,
            min: s(a),
            max: s(r),
            dir: s(p),
            inverted: P.inverted,
            "aria-disabled": s(d),
            "data-disabled": s(d) ? "" : void 0,
            onPointerdown: M[0] || (M[0] = () => {
              s(d) || (C.value = s(g));
            }),
            onSlideStart: M[1] || (M[1] = (q) => !s(d) && S(q)),
            onSlideMove: M[2] || (M[2] = (q) => !s(d) && B(q)),
            onSlideEnd: M[3] || (M[3] = (q) => !s(d) && D()),
            onHomeKeyDown: M[4] || (M[4] = (q) => !s(d) && O(s(a), 0, { commit: !0 })),
            onEndKeyDown: M[5] || (M[5] = (q) => !s(d) && O(s(r), s(g).length - 1, { commit: !0 })),
            onStepKeyDown: M[6] || (M[6] = (q, A) => {
              if (!s(d)) {
                const z = s(ki).includes(q.key) || q.shiftKey && s(Di).includes(q.key) ? 10 : 1, I = _.value, Q = s(g)[I], U = s(l) * z * A;
                O(Q + U, I, { commit: !0 });
              }
            })
          }), {
            default: y(() => [
              w(P.$slots, "default", { modelValue: s(g) })
            ]),
            _: 3
          }, 16, ["as-child", "as", "min", "max", "dir", "inverted", "aria-disabled", "data-disabled"]))
        ]),
        _: 3
      }),
      s(m) ? (h(!0), K(Te, { key: 0 }, Gt(s(g), (q, A) => (h(), K("input", {
        key: A,
        value: q,
        type: "number",
        style: { display: "none" },
        name: P.name ? P.name + (s(g).length > 1 ? "[]" : "") : void 0,
        disabled: s(d),
        step: s(l)
      }, null, 8, vm))), 128)) : he("", !0)
    ], 64));
  }
}), hm = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "SliderThumbImpl",
  props: {
    index: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = va(), o = Ti(), { forwardRef: a, currentElement: r } = j(), l = $(() => {
      var v, m;
      return (m = (v = n.modelValue) == null ? void 0 : v.value) == null ? void 0 : m[t.index];
    }), i = $(() => l.value === void 0 ? 0 : Pi(l.value, n.min.value ?? 0, n.max.value ?? 100)), u = $(() => {
      var v, m;
      return rm(t.index, ((m = (v = n.modelValue) == null ? void 0 : v.value) == null ? void 0 : m.length) ?? 0);
    }), d = ni(r), c = $(() => d[o.size].value), p = $(() => c.value ? lm(c.value, i.value, o.direction) : 0), f = Or();
    return ie(() => {
      n.thumbElements.value.push(r.value);
    }), Ke(() => {
      const v = n.thumbElements.value.findIndex((m) => m === r.value) ?? -1;
      n.thumbElements.value.splice(v, 1);
    }), (v, m) => (h(), x(s(fa), null, {
      default: y(() => [
        F(s(X), k(v.$attrs, {
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
            display: !s(f) && l.value === void 0 ? "none" : void 0
          },
          onFocus: m[0] || (m[0] = () => {
            s(n).valueIndexToChangeRef.value = v.index;
          })
        }), {
          default: y(() => [
            w(v.$slots, "default")
          ]),
          _: 3
        }, 16, ["tabindex", "aria-label", "data-disabled", "data-orientation", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-orientation", "as-child", "as", "style"])
      ]),
      _: 3
    }));
  }
}), ym = /* @__PURE__ */ b({
  __name: "SliderThumb",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { getItems: n } = jr(), { forwardRef: o, currentElement: a } = j(), r = $(() => a.value ? n().findIndex((l) => l.ref === a.value) : -1);
    return (l, i) => (h(), x(hm, k({ ref: s(o) }, t, { index: r.value }), {
      default: y(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["index"]));
  }
}), bm = /* @__PURE__ */ b({
  __name: "SliderTrack",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = va();
    return j(), (n, o) => (h(), x(s(X), {
      "as-child": n.asChild,
      as: n.as,
      "data-disabled": s(t).disabled.value ? "" : void 0,
      "data-orientation": s(t).orientation.value
    }, {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "data-disabled", "data-orientation"]));
  }
}), wm = /* @__PURE__ */ b({
  __name: "SliderRange",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = va(), n = Ti();
    j();
    const o = $(() => {
      var l, i;
      return (i = (l = t.modelValue) == null ? void 0 : l.value) == null ? void 0 : i.map(
        (u) => Pi(u, t.min.value, t.max.value)
      );
    }), a = $(() => t.modelValue.value.length > 1 ? Math.min(...o.value) : 0), r = $(() => 100 - Math.max(...o.value));
    return (l, i) => (h(), x(s(X), {
      "data-disabled": s(t).disabled.value ? "" : void 0,
      "data-orientation": s(t).orientation.value,
      "as-child": l.asChild,
      as: l.as,
      style: _t({
        [s(n).startEdge]: `${a.value}%`,
        [s(n).endEdge]: `${r.value}%`
      })
    }, {
      default: y(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-disabled", "data-orientation", "as-child", "as", "style"]));
  }
});
function _m() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
_m();
const xm = ["name", "disabled", "required", "value", "checked", "data-state", "data-disabled"], [Cm, Bm] = be("SwitchRoot"), Sm = /* @__PURE__ */ b({
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
    const n = e, o = t, { disabled: a } = ye(n), r = Me(n, "checked", o, {
      defaultValue: n.defaultChecked,
      passive: n.checked === void 0
    });
    function l() {
      a.value || (r.value = !r.value);
    }
    const { forwardRef: i, currentElement: u } = j(), d = ia(u), c = $(() => {
      var p;
      return n.id && u.value ? (p = document.querySelector(`[for="${n.id}"]`)) == null ? void 0 : p.innerText : void 0;
    });
    return Bm({
      checked: r,
      toggleCheck: l,
      disabled: a
    }), (p, f) => (h(), K(Te, null, [
      F(s(X), k(p.$attrs, {
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
        onKeydown: ot(Fe(l, ["prevent"]), ["enter"])
      }), {
        default: y(() => [
          w(p.$slots, "default", { checked: s(r) })
        ]),
        _: 3
      }, 16, ["id", "type", "value", "aria-label", "aria-checked", "aria-required", "data-state", "data-disabled", "as-child", "as", "disabled", "onKeydown"]),
      s(d) ? (h(), K("input", {
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
      }, null, 8, xm)) : he("", !0)
    ], 64));
  }
}), $m = /* @__PURE__ */ b({
  __name: "SwitchThumb",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = Cm();
    return j(), (n, o) => {
      var a;
      return h(), x(s(X), {
        "data-state": (a = s(t).checked) != null && a.value ? "checked" : "unchecked",
        "data-disabled": s(t).disabled.value ? "" : void 0,
        "as-child": n.asChild,
        as: n.as
      }, {
        default: y(() => [
          w(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-state", "data-disabled", "as-child", "as"]);
    };
  }
}), [Xr, Om] = be("TabsRoot"), Em = /* @__PURE__ */ b({
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
    const n = e, o = t, { orientation: a, dir: r } = ye(n), l = Jt(r);
    j();
    const i = Me(n, "modelValue", o, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), u = E();
    return Om({
      modelValue: i,
      changeModelValue: (d) => {
        i.value = d;
      },
      orientation: a,
      dir: l,
      activationMode: n.activationMode,
      baseId: je(void 0, "radix-vue-tabs"),
      tabsList: u
    }), (d, c) => (h(), x(s(X), {
      dir: s(l),
      "data-orientation": s(a),
      "as-child": d.asChild,
      as: d.as
    }, {
      default: y(() => [
        w(d.$slots, "default", { modelValue: s(i) })
      ]),
      _: 3
    }, 8, ["dir", "data-orientation", "as-child", "as"]));
  }
}), Pm = /* @__PURE__ */ b({
  __name: "TabsList",
  props: {
    loop: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { loop: n } = ye(t), { forwardRef: o, currentElement: a } = j(), r = Xr();
    return r.tabsList = a, (l, i) => (h(), x(s(gi), {
      "as-child": "",
      orientation: s(r).orientation.value,
      dir: s(r).dir.value,
      loop: s(n)
    }, {
      default: y(() => [
        F(s(X), {
          ref: s(o),
          role: "tablist",
          "as-child": l.asChild,
          as: l.as,
          "aria-orientation": s(r).orientation.value
        }, {
          default: y(() => [
            w(l.$slots, "default")
          ]),
          _: 3
        }, 8, ["as-child", "as", "aria-orientation"])
      ]),
      _: 3
    }, 8, ["orientation", "dir", "loop"]));
  }
});
function Fi(e, t) {
  return `${e}-trigger-${t}`;
}
function Ri(e, t) {
  return `${e}-content-${t}`;
}
const km = /* @__PURE__ */ b({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n } = j(), o = Xr(), a = $(() => Fi(o.baseId, t.value)), r = $(() => Ri(o.baseId, t.value)), l = $(() => t.value === o.modelValue.value), i = E(l.value);
    return ie(() => {
      requestAnimationFrame(() => {
        i.value = !1;
      });
    }), (u, d) => (h(), x(s(pt), {
      present: l.value,
      "force-mount": ""
    }, {
      default: y(({ present: c }) => [
        F(s(X), {
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
          style: _t({
            animationDuration: i.value ? "0s" : void 0
          })
        }, {
          default: y(() => [
            u.forceMount || l.value ? w(u.$slots, "default", { key: 0 }) : he("", !0)
          ]),
          _: 2
        }, 1032, ["id", "as-child", "as", "data-state", "data-orientation", "aria-labelledby", "hidden", "style"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Dm = /* @__PURE__ */ b({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, { forwardRef: n } = j(), o = Xr(), a = $(() => Fi(o.baseId, t.value)), r = $(() => Ri(o.baseId, t.value)), l = $(() => t.value === o.modelValue.value);
    return (i, u) => (h(), x(s(Tf), {
      "as-child": "",
      focusable: !i.disabled,
      active: l.value
    }, {
      default: y(() => [
        F(s(X), {
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
          onMousedown: u[0] || (u[0] = Fe((d) => {
            !i.disabled && d.ctrlKey === !1 ? s(o).changeModelValue(i.value) : d.preventDefault();
          }, ["left"])),
          onKeydown: u[1] || (u[1] = ot((d) => s(o).changeModelValue(i.value), ["enter", "space"])),
          onFocus: u[2] || (u[2] = () => {
            const d = s(o).activationMode !== "manual";
            !l.value && !i.disabled && d && s(o).changeModelValue(i.value);
          })
        }, {
          default: y(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as", "as-child", "aria-selected", "aria-controls", "data-state", "disabled", "data-disabled", "data-orientation"])
      ]),
      _: 3
    }, 8, ["focusable", "active"]));
  }
}), [ma, Am] = be("ToastProvider"), Tm = /* @__PURE__ */ b({
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
    return Am({
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
    }), (c, p) => w(c.$slots, "default");
  }
}), Im = "toast.swipeStart", Mm = "toast.swipeMove", Fm = "toast.swipeCancel", Rm = "toast.swipeEnd", er = "toast.viewportPause", tr = "toast.viewportResume";
function ko(e, t, n) {
  const o = n.originalEvent.currentTarget, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, { once: !0 }), o.dispatchEvent(a);
}
function Rs(e, t, n = 0) {
  const o = Math.abs(e.x), a = Math.abs(e.y), r = o > a;
  return t === "left" || t === "right" ? r && o > n : !r && a > n;
}
function Lm(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function Li(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((n) => {
    if (n.nodeType === n.TEXT_NODE && n.textContent && t.push(n.textContent), Lm(n)) {
      const o = n.ariaHidden || n.hidden || n.style.display === "none", a = n.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (a) {
          const r = n.dataset.radixToastAnnounceAlt;
          r && t.push(r);
        } else
          t.push(...Li(n));
    }
  }), t;
}
const Vm = /* @__PURE__ */ b({
  __name: "ToastAnnounce",
  setup(e) {
    const t = ma(), n = _c(1e3), o = E(!1);
    return Zl(() => {
      o.value = !0;
    }), (a, r) => s(n) || o.value ? (h(), x(s(yo), { key: 0 }, {
      default: y(() => [
        Ce(Ie(s(t).label.value) + " ", 1),
        w(a.$slots, "default")
      ]),
      _: 3
    })) : he("", !0);
  }
}), [qm, Nm] = be("ToastRoot"), zm = /* @__PURE__ */ b({
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
    const n = e, o = t, { forwardRef: a, currentElement: r } = j(), l = ma(), i = E(null), u = E(null), d = $(
      () => typeof n.duration == "number" ? n.duration : l.duration.value
    ), c = E(0), p = E(d.value), f = E(0), v = E(d.value), m = Zl(() => {
      const S = (/* @__PURE__ */ new Date()).getTime() - c.value;
      v.value = Math.max(p.value - S, 0);
    }, { fpsLimit: 60 });
    function g(S) {
      S <= 0 || S === Number.POSITIVE_INFINITY || Et && (window.clearTimeout(f.value), c.value = (/* @__PURE__ */ new Date()).getTime(), f.value = window.setTimeout(_, S));
    }
    function _() {
      var S, B;
      (S = r.value) != null && S.contains(Ge()) && ((B = l.viewport.value) == null || B.focus()), l.isClosePausedRef.value = !1, o("close");
    }
    const C = $(() => r.value ? Li(r.value) : null);
    if (n.type && !["foreground", "background"].includes(n.type)) {
      const S = "Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.";
      throw new Error(S);
    }
    return xe((S) => {
      const B = l.viewport.value;
      if (B) {
        const D = () => {
          g(p.value), m.resume(), o("resume");
        }, O = () => {
          const T = (/* @__PURE__ */ new Date()).getTime() - c.value;
          p.value = p.value - T, window.clearTimeout(f.value), m.pause(), o("pause");
        };
        return B.addEventListener(er, O), B.addEventListener(tr, D), () => {
          B.removeEventListener(er, O), B.removeEventListener(tr, D);
        };
      }
    }), ne(() => [n.open, d.value], () => {
      p.value = d.value, n.open && !l.isClosePausedRef.value && g(d.value);
    }, { immediate: !0 }), $r("Escape", (S) => {
      o("escapeKeyDown", S), S.defaultPrevented || (l.isFocusedToastEscapeKeyDownRef.value = !0, _());
    }), ie(() => {
      l.onToastAdd();
    }), Ke(() => {
      l.onToastRemove();
    }), Nm({ onClose: _ }), (S, B) => (h(), K(Te, null, [
      C.value ? (h(), x(Vm, {
        key: 0,
        role: "alert",
        "aria-live": S.type === "foreground" ? "assertive" : "polite",
        "aria-atomic": "true"
      }, {
        default: y(() => [
          Ce(Ie(C.value), 1)
        ]),
        _: 1
      }, 8, ["aria-live"])) : he("", !0),
      s(l).viewport.value ? (h(), x(po, {
        key: 1,
        to: s(l).viewport.value
      }, [
        F(s(X), k({
          ref: s(a),
          role: "alert",
          "aria-live": "off",
          "aria-atomic": "true",
          tabindex: "0",
          "data-radix-vue-collection-item": ""
        }, S.$attrs, {
          as: S.as,
          "as-child": S.asChild,
          "data-state": S.open ? "open" : "closed",
          "data-swipe-direction": s(l).swipeDirection.value,
          style: { userSelect: "none", touchAction: "none" },
          onPointerdown: B[0] || (B[0] = Fe((D) => {
            i.value = { x: D.clientX, y: D.clientY };
          }, ["left"])),
          onPointermove: B[1] || (B[1] = (D) => {
            if (!i.value) return;
            const O = D.clientX - i.value.x, T = D.clientY - i.value.y, P = !!u.value, M = ["left", "right"].includes(s(l).swipeDirection.value), q = ["left", "up"].includes(s(l).swipeDirection.value) ? Math.min : Math.max, A = M ? q(0, O) : 0, z = M ? 0 : q(0, T), I = D.pointerType === "touch" ? 10 : 2, Q = { x: A, y: z }, U = { originalEvent: D, delta: Q };
            P ? (u.value = Q, s(ko)(s(Mm), (N) => o("swipeMove", N), U)) : s(Rs)(Q, s(l).swipeDirection.value, I) ? (u.value = Q, s(ko)(s(Im), (N) => o("swipeStart", N), U), D.target.setPointerCapture(D.pointerId)) : (Math.abs(O) > I || Math.abs(T) > I) && (i.value = null);
          }),
          onPointerup: B[2] || (B[2] = (D) => {
            const O = u.value, T = D.target;
            if (T.hasPointerCapture(D.pointerId) && T.releasePointerCapture(D.pointerId), u.value = null, i.value = null, O) {
              const P = D.currentTarget, M = { originalEvent: D, delta: O };
              s(Rs)(O, s(l).swipeDirection.value, s(l).swipeThreshold.value) ? s(ko)(s(Rm), (q) => o("swipeEnd", q), M) : s(ko)(s(Fm), (q) => o("swipeCancel", q), M), P == null || P.addEventListener("click", (q) => q.preventDefault(), {
                once: !0
              });
            }
          })
        }), {
          default: y(() => [
            w(S.$slots, "default", {
              remaining: v.value,
              duration: d.value
            })
          ]),
          _: 3
        }, 16, ["as", "as-child", "data-state", "data-swipe-direction"])
      ], 8, ["to"])) : he("", !0)
    ], 64));
  }
}), jm = /* @__PURE__ */ b({
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
    const n = e, o = t, { forwardRef: a } = j(), r = Me(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    });
    return (l, i) => (h(), x(s(pt), {
      present: l.forceMount || s(r)
    }, {
      default: y(() => [
        F(zm, k({
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
            w(l.$slots, "default", {
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
}), Vi = /* @__PURE__ */ b({
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
        w(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-radix-toast-announce-alt"]));
  }
}), qi = /* @__PURE__ */ b({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = qm(), { forwardRef: o } = j();
    return (a, r) => (h(), x(Vi, { "as-child": "" }, {
      default: y(() => [
        F(s(X), k(t, {
          ref: s(o),
          type: a.as === "button" ? "button" : void 0,
          onClick: r[0] || (r[0] = (l) => s(n).onClose())
        }), {
          default: y(() => [
            w(a.$slots, "default")
          ]),
          _: 3
        }, 16, ["type"])
      ]),
      _: 3
    }));
  }
}), Km = /* @__PURE__ */ b({
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
    return (n, o) => n.altText ? (h(), x(Vi, {
      key: 0,
      "alt-text": n.altText,
      "as-child": ""
    }, {
      default: y(() => [
        F(qi, {
          ref: s(t),
          as: n.as,
          "as-child": n.asChild
        }, {
          default: y(() => [
            w(n.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child"])
      ]),
      _: 3
    }, 8, ["alt-text"])) : he("", !0);
  }
}), Ls = /* @__PURE__ */ b({
  __name: "FocusProxy",
  emits: ["focusFromOutsideViewport"],
  setup(e, { emit: t }) {
    const n = t, o = ma();
    return (a, r) => (h(), x(s(yo), {
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
        w(a.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Hm = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "ToastViewport",
  props: {
    hotkey: { default: () => ["F8"] },
    label: { type: [String, Function], default: "Notifications ({hotkey})" },
    asChild: { type: Boolean },
    as: { default: "ol" }
  },
  setup(e) {
    const t = e, { hotkey: n, label: o } = ye(t), { forwardRef: a, currentElement: r } = j(), { createCollection: l } = Vn(), i = l(r), u = ma(), d = $(() => u.toastCount.value > 0), c = E(), p = E(), f = $(() => n.value.join("+").replace(/Key/g, "").replace(/Digit/g, ""));
    $r(n.value, () => {
      r.value.focus();
    }), ie(() => {
      u.onViewportChange(r.value);
    }), xe((m) => {
      const g = r.value;
      if (d.value && g) {
        const _ = () => {
          if (!u.isClosePausedRef.value) {
            const O = new CustomEvent(er);
            g.dispatchEvent(O), u.isClosePausedRef.value = !0;
          }
        }, C = () => {
          if (u.isClosePausedRef.value) {
            const O = new CustomEvent(tr);
            g.dispatchEvent(O), u.isClosePausedRef.value = !1;
          }
        }, S = (O) => {
          !g.contains(O.relatedTarget) && C();
        }, B = () => {
          g.contains(Ge()) || C();
        }, D = (O) => {
          var T, P, M;
          const q = O.altKey || O.ctrlKey || O.metaKey;
          if (O.key === "Tab" && !q) {
            const A = Ge(), z = O.shiftKey;
            if (O.target === g && z) {
              (T = c.value) == null || T.focus();
              return;
            }
            const I = v({ tabbingDirection: z ? "backwards" : "forwards" }), Q = I.findIndex((U) => U === A);
            Vo(I.slice(Q + 1)) ? O.preventDefault() : z ? (P = c.value) == null || P.focus() : (M = p.value) == null || M.focus();
          }
        };
        g.addEventListener("focusin", _), g.addEventListener("focusout", S), g.addEventListener("pointermove", _), g.addEventListener("pointerleave", B), g.addEventListener("keydown", D), window.addEventListener("blur", _), window.addEventListener("focus", C), m(() => {
          g.removeEventListener("focusin", _), g.removeEventListener("focusout", S), g.removeEventListener("pointermove", _), g.removeEventListener("pointerleave", B), g.removeEventListener("keydown", D), window.removeEventListener("blur", _), window.removeEventListener("focus", C);
        });
      }
    });
    function v({ tabbingDirection: m }) {
      const g = i.value.map((_) => {
        const C = [_, ...Mr(_)];
        return m === "forwards" ? C : C.reverse();
      });
      return (m === "forwards" ? g.reverse() : g).flat();
    }
    return (m, g) => (h(), x(s(gp), {
      role: "region",
      "aria-label": typeof s(o) == "string" ? s(o).replace("{hotkey}", f.value) : s(o)(f.value),
      tabindex: "-1",
      style: _t({
        // incase list has size when empty (e.g. padding), we remove pointer events so
        // it doesn't prevent interactions with page elements that it overlays
        pointerEvents: d.value ? void 0 : "none"
      })
    }, {
      default: y(() => [
        d.value ? (h(), x(Ls, {
          key: 0,
          ref: (_) => {
            c.value = s(ct)(_);
          },
          onFocusFromOutsideViewport: g[0] || (g[0] = () => {
            const _ = v({
              tabbingDirection: "forwards"
            });
            s(Vo)(_);
          })
        }, null, 512)) : he("", !0),
        F(s(X), k({
          ref: s(a),
          tabindex: "-1",
          as: m.as,
          "as-child": m.asChild
        }, m.$attrs), {
          default: y(() => [
            w(m.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child"]),
        d.value ? (h(), x(Ls, {
          key: 1,
          ref: (_) => {
            p.value = s(ct)(_);
          },
          onFocusFromOutsideViewport: g[1] || (g[1] = () => {
            const _ = v({
              tabbingDirection: "backwards"
            });
            s(Vo)(_);
          })
        }, null, 512)) : he("", !0)
      ]),
      _: 3
    }, 8, ["aria-label", "style"]));
  }
}), Wm = /* @__PURE__ */ b({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return j(), (n, o) => (h(), x(s(X), Z(te(t)), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Um = /* @__PURE__ */ b({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return j(), (n, o) => (h(), x(s(X), Z(te(t)), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ni = "tooltip.open", [Zr, Gm] = be("TooltipProvider"), Ym = /* @__PURE__ */ b({
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
    j();
    const u = E(!0), d = E(!1), { start: c, stop: p } = Sr(() => {
      u.value = !0;
    }, o, { immediate: !1 });
    return Gm({
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
    }), (f, v) => w(f.$slots, "default");
  }
}), [ga, Xm] = be("TooltipRoot"), Zm = /* @__PURE__ */ b({
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
    j();
    const a = Zr(), r = $(() => n.disableHoverableContent ?? a.disableHoverableContent.value), l = $(() => n.disableClosingTrigger ?? a.disableClosingTrigger.value), i = $(() => n.disabled ?? a.disabled.value), u = $(() => n.delayDuration ?? a.delayDuration.value), d = $(() => n.ignoreNonKeyboardFocus ?? a.ignoreNonKeyboardFocus.value), c = Me(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    });
    ne(c, (B) => {
      a.onClose && (B ? (a.onOpen(), document.dispatchEvent(new CustomEvent(Ni))) : a.onClose());
    });
    const p = E(!1), f = E(), v = $(() => c.value ? p.value ? "delayed-open" : "instant-open" : "closed"), { start: m, stop: g } = Sr(() => {
      p.value = !0, c.value = !0;
    }, u, { immediate: !1 });
    function _() {
      g(), p.value = !1, c.value = !0;
    }
    function C() {
      g(), c.value = !1;
    }
    function S() {
      m();
    }
    return Xm({
      contentId: "",
      open: c,
      stateAttribute: v,
      trigger: f,
      onTriggerChange(B) {
        f.value = B;
      },
      onTriggerEnter() {
        a.isOpenDelayed.value ? S() : _();
      },
      onTriggerLeave() {
        r.value ? C() : g();
      },
      onOpen: _,
      onClose: C,
      disableHoverableContent: r,
      disableClosingTrigger: l,
      disabled: i,
      ignoreNonKeyboardFocus: d
    }), (B, D) => (h(), x(s(zn), null, {
      default: y(() => [
        w(B.$slots, "default", { open: s(c) })
      ]),
      _: 3
    }));
  }
}), Qm = /* @__PURE__ */ b({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = ga(), o = Zr();
    n.contentId || (n.contentId = je(void 0, "radix-vue-tooltip-content"));
    const { forwardRef: a, currentElement: r } = j(), l = E(!1), i = E(!1), u = $(() => n.disabled.value ? {} : {
      click: g,
      focus: v,
      pointermove: p,
      pointerleave: f,
      pointerdown: c,
      blur: m
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
    function p(_) {
      _.pointerType !== "touch" && !i.value && !o.isPointerInTransitRef.value && (n.onTriggerEnter(), i.value = !0);
    }
    function f() {
      n.onTriggerLeave(), i.value = !1;
    }
    function v(_) {
      var C, S;
      l.value || n.ignoreNonKeyboardFocus.value && !((S = (C = _.target).matches) != null && S.call(C, ":focus-visible")) || n.onOpen();
    }
    function m() {
      n.onClose();
    }
    function g() {
      n.disableClosingTrigger.value || n.onClose();
    }
    return (_, C) => (h(), x(s(ho), { "as-child": "" }, {
      default: y(() => [
        F(s(X), k({
          ref: s(a),
          "aria-describedby": s(n).open.value ? s(n).contentId : void 0,
          "data-state": s(n).stateAttribute.value,
          as: _.as,
          "as-child": t.asChild,
          "data-grace-area-trigger": ""
        }, zu(u.value)), {
          default: y(() => [
            w(_.$slots, "default")
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
    const n = e, o = t, a = ga(), { forwardRef: r } = j(), l = dr(), i = $(() => {
      var c;
      return (c = l.default) == null ? void 0 : c.call(l);
    }), u = $(() => {
      var c;
      if (n.ariaLabel)
        return n.ariaLabel;
      let p = "";
      function f(v) {
        typeof v.children == "string" && v.type !== cr ? p += v.children : Array.isArray(v.children) && v.children.forEach((m) => f(m));
      }
      return (c = i.value) == null || c.forEach((v) => f(v)), p;
    }), d = $(() => {
      const { ariaLabel: c, ...p } = n;
      return p;
    });
    return ie(() => {
      An(window, "scroll", (c) => {
        const p = c.target;
        p != null && p.contains(a.trigger.value) && a.onClose();
      }), An(window, Ni, a.onClose);
    }), (c, p) => (h(), x(s(Nn), {
      "as-child": "",
      "disable-outside-pointer-events": !1,
      onEscapeKeyDown: p[0] || (p[0] = (f) => o("escapeKeyDown", f)),
      onPointerDownOutside: p[1] || (p[1] = (f) => {
        var v;
        s(a).disableClosingTrigger.value && (v = s(a).trigger.value) != null && v.contains(f.target) && f.preventDefault(), o("pointerDownOutside", f);
      }),
      onFocusOutside: p[2] || (p[2] = Fe(() => {
      }, ["prevent"])),
      onDismiss: p[3] || (p[3] = (f) => s(a).onClose())
    }, {
      default: y(() => [
        F(s(Tn), k({
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
            w(c.$slots, "default"),
            F(s(yo), {
              id: s(a).contentId,
              role: "tooltip"
            }, {
              default: y(() => [
                Ce(Ie(u.value), 1)
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
}), Jm = /* @__PURE__ */ b({
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
    const t = Ye(e), { forwardRef: n, currentElement: o } = j(), { trigger: a, onClose: r } = ga(), l = Zr(), { isPointerInTransit: i, onPointerExit: u } = Ic(a, o);
    return l.isPointerInTransitRef = i, u(() => {
      r();
    }), (d, c) => (h(), x(zi, k({ ref: s(n) }, s(t)), {
      default: y(() => [
        w(d.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), eg = /* @__PURE__ */ b({
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
    const n = e, o = t, a = ga(), r = ce(n, o), { forwardRef: l } = j();
    return (i, u) => (h(), x(s(pt), {
      present: i.forceMount || s(a).open.value
    }, {
      default: y(() => [
        (h(), x(lt(s(a).disableHoverableContent.value ? zi : Jm), k({ ref: s(l) }, s(r)), {
          default: y(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), tg = /* @__PURE__ */ b({
  __name: "TooltipPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(qn), Z(te(t)), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function ji(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (t = 0; t < a; t++) e[t] && (n = ji(e[t])) && (o && (o += " "), o += n);
  } else for (n in e) e[n] && (o && (o += " "), o += n);
  return o;
}
function Ki() {
  for (var e, t, n = 0, o = "", a = arguments.length; n < a; n++) (e = arguments[n]) && (t = ji(e)) && (o && (o += " "), o += t);
  return o;
}
const Qr = "-", ng = (e) => {
  const t = ag(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (l) => {
      const i = l.split(Qr);
      return i[0] === "" && i.length !== 1 && i.shift(), Hi(i, t) || og(l);
    },
    getConflictingClassGroupIds: (l, i) => {
      const u = n[l] || [];
      return i && o[l] ? [...u, ...o[l]] : u;
    }
  };
}, Hi = (e, t) => {
  var l;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], o = t.nextPart.get(n), a = o ? Hi(e.slice(1), o) : void 0;
  if (a)
    return a;
  if (t.validators.length === 0)
    return;
  const r = e.join(Qr);
  return (l = t.validators.find(({
    validator: i
  }) => i(r))) == null ? void 0 : l.classGroupId;
}, Vs = /^\[(.+)\]$/, og = (e) => {
  if (Vs.test(e)) {
    const t = Vs.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, ag = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return sg(Object.entries(e.classGroups), n).forEach(([r, l]) => {
    nr(l, o, r, t);
  }), o;
}, nr = (e, t, n, o) => {
  e.forEach((a) => {
    if (typeof a == "string") {
      const r = a === "" ? t : qs(t, a);
      r.classGroupId = n;
      return;
    }
    if (typeof a == "function") {
      if (rg(a)) {
        nr(a(o), t, n, o);
        return;
      }
      t.validators.push({
        validator: a,
        classGroupId: n
      });
      return;
    }
    Object.entries(a).forEach(([r, l]) => {
      nr(l, qs(t, r), n, o);
    });
  });
}, qs = (e, t) => {
  let n = e;
  return t.split(Qr).forEach((o) => {
    n.nextPart.has(o) || n.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(o);
  }), n;
}, rg = (e) => e.isThemeGetter, sg = (e, t) => t ? e.map(([n, o]) => {
  const a = o.map((r) => typeof r == "string" ? t + r : typeof r == "object" ? Object.fromEntries(Object.entries(r).map(([l, i]) => [t + l, i])) : r);
  return [n, a];
}) : e, lg = (e) => {
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
}, Wi = "!", ig = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, o = t.length === 1, a = t[0], r = t.length, l = (i) => {
    const u = [];
    let d = 0, c = 0, p;
    for (let _ = 0; _ < i.length; _++) {
      let C = i[_];
      if (d === 0) {
        if (C === a && (o || i.slice(_, _ + r) === t)) {
          u.push(i.slice(c, _)), c = _ + r;
          continue;
        }
        if (C === "/") {
          p = _;
          continue;
        }
      }
      C === "[" ? d++ : C === "]" && d--;
    }
    const f = u.length === 0 ? i : i.substring(c), v = f.startsWith(Wi), m = v ? f.substring(1) : f, g = p && p > c ? p - c : void 0;
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
}, ug = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((o) => {
    o[0] === "[" ? (t.push(...n.sort(), o), n = []) : n.push(o);
  }), t.push(...n.sort()), t;
}, dg = (e) => ({
  cache: lg(e.cacheSize),
  parseClassName: ig(e),
  ...ng(e)
}), cg = /\s+/, pg = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: o,
    getConflictingClassGroupIds: a
  } = t, r = [], l = e.trim().split(cg);
  let i = "";
  for (let u = l.length - 1; u >= 0; u -= 1) {
    const d = l[u], {
      modifiers: c,
      hasImportantModifier: p,
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
    const _ = ug(c).join(":"), C = p ? _ + Wi : _, S = C + g;
    if (r.includes(S))
      continue;
    r.push(S);
    const B = a(g, m);
    for (let D = 0; D < B.length; ++D) {
      const O = B[D];
      r.push(C + O);
    }
    i = d + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function fg() {
  let e = 0, t, n, o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Ui(t)) && (o && (o += " "), o += n);
  return o;
}
const Ui = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = Ui(e[o])) && (n && (n += " "), n += t);
  return n;
};
function vg(e, ...t) {
  let n, o, a, r = l;
  function l(u) {
    const d = t.reduce((c, p) => p(c), e());
    return n = dg(d), o = n.cache.get, a = n.cache.set, r = i, i(u);
  }
  function i(u) {
    const d = o(u);
    if (d)
      return d;
    const c = pg(u, n);
    return a(u, c), c;
  }
  return function() {
    return r(fg.apply(null, arguments));
  };
}
const Ae = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, Gi = /^\[(?:([a-z-]+):)?(.+)\]$/i, mg = /^\d+\/\d+$/, gg = /* @__PURE__ */ new Set(["px", "full", "screen"]), hg = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, yg = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, bg = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, wg = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, _g = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Mt = (e) => kn(e) || gg.has(e) || mg.test(e), jt = (e) => Wn(e, "length", Pg), kn = (e) => !!e && !Number.isNaN(Number(e)), Ma = (e) => Wn(e, "number", kn), Zn = (e) => !!e && Number.isInteger(Number(e)), xg = (e) => e.endsWith("%") && kn(e.slice(0, -1)), ve = (e) => Gi.test(e), Kt = (e) => hg.test(e), Cg = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Bg = (e) => Wn(e, Cg, Yi), Sg = (e) => Wn(e, "position", Yi), $g = /* @__PURE__ */ new Set(["image", "url"]), Og = (e) => Wn(e, $g, Dg), Eg = (e) => Wn(e, "", kg), Qn = () => !0, Wn = (e, t, n) => {
  const o = Gi.exec(e);
  return o ? o[1] ? typeof t == "string" ? o[1] === t : t.has(o[1]) : n(o[2]) : !1;
}, Pg = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  yg.test(e) && !bg.test(e)
), Yi = () => !1, kg = (e) => wg.test(e), Dg = (e) => _g.test(e), Ag = () => {
  const e = Ae("colors"), t = Ae("spacing"), n = Ae("blur"), o = Ae("brightness"), a = Ae("borderColor"), r = Ae("borderRadius"), l = Ae("borderSpacing"), i = Ae("borderWidth"), u = Ae("contrast"), d = Ae("grayscale"), c = Ae("hueRotate"), p = Ae("invert"), f = Ae("gap"), v = Ae("gradientColorStops"), m = Ae("gradientColorStopPositions"), g = Ae("inset"), _ = Ae("margin"), C = Ae("opacity"), S = Ae("padding"), B = Ae("saturate"), D = Ae("scale"), O = Ae("sepia"), T = Ae("skew"), P = Ae("space"), M = Ae("translate"), q = () => ["auto", "contain", "none"], A = () => ["auto", "hidden", "clip", "visible", "scroll"], z = () => ["auto", ve, t], I = () => [ve, t], Q = () => ["", Mt, jt], U = () => ["auto", kn, ve], N = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], R = () => ["solid", "dashed", "dotted", "double", "none"], ae = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], G = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], L = () => ["", "0", ve], ee = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], W = () => [kn, ve];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Qn],
      spacing: [Mt, jt],
      blur: ["none", "", Kt, ve],
      brightness: W(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Kt, ve],
      borderSpacing: I(),
      borderWidth: Q(),
      contrast: W(),
      grayscale: L(),
      hueRotate: W(),
      invert: L(),
      gap: I(),
      gradientColorStops: [e],
      gradientColorStopPositions: [xg, jt],
      inset: z(),
      margin: z(),
      opacity: W(),
      padding: I(),
      saturate: W(),
      scale: W(),
      sepia: L(),
      skew: W(),
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
        columns: [Kt]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": ee()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": ee()
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
        object: [...N(), ve]
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
        overscroll: q()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": q()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": q()
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
        z: ["auto", Zn, ve]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: z()
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
        grow: L()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: L()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Zn, ve]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Qn]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Zn, ve]
        }, ve]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": U()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": U()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Qn]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Zn, ve]
        }, ve]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": U()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": U()
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
        justify: ["normal", ...G()]
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
        content: ["normal", ...G(), "baseline"]
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
        "place-content": [...G(), "baseline"]
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
        m: [_]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [_]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [_]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [_]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [_]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [_]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [_]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [_]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [_]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [P]
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
        "space-y": [P]
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
          screen: [Kt]
        }, Kt]
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
        text: ["base", Kt, jt]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ma]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Qn]
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
        "line-clamp": ["none", kn, Ma]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Mt, ve]
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
        decoration: [...R(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Mt, jt]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Mt, ve]
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
        bg: [...N(), Sg]
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
        bg: ["auto", "cover", "contain", Bg]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Og]
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
        "border-opacity": [C]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...R(), "hidden"]
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
        divide: R()
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
        outline: ["", ...R()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Mt, ve]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Mt, jt]
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
        ring: Q()
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
        "ring-offset": [Mt, jt]
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
        shadow: ["", "inner", "none", Kt, Eg]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Qn]
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
        "mix-blend": [...ae(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ae()
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
        "drop-shadow": ["", "none", Kt, ve]
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
        duration: W()
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
        delay: W()
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
        rotate: [Zn, ve]
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
        "skew-x": [T]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [T]
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
        stroke: [Mt, jt, Ma]
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
}, Tg = /* @__PURE__ */ vg(Ag);
function V(...e) {
  return Tg(Ki(e));
}
function T1(e, t) {
  t.value = typeof e == "function" ? e(t.value) : e;
}
function I1(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, o = Symbol(n);
  return [(l) => {
    const i = un(o, l);
    if (i || i === null) return i;
    throw new Error(
      `Injection \`${o.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(", ")}` : `\`${e}\``}`
    );
  }, (l) => (dn(o, l), l)];
}
const Ig = /* @__PURE__ */ b({
  __name: "AlertDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = ce(e, t);
    return (r, l) => (h(), x(s(Fp), Z(te(s(a))), {
      default: y(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), M1 = /* @__PURE__ */ b({
  __name: "AlertDialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Rp), Z(te(t)), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Mg = /* @__PURE__ */ b({
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
    const n = e, o = t, a = $(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = ce(a, o);
    return (l, i) => (h(), x(s(Lp), null, {
      default: y(() => [
        F(s(zp), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        F(s(Np), k(s(r), {
          class: s(V)(
            "fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
            n.class
          )
        }), {
          default: y(() => [
            w(l.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Fg = /* @__PURE__ */ b({
  __name: "AlertDialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), K("div", {
      class: le(s(V)("flex flex-col gap-y-2 text-center sm:text-left", t.class))
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), Rg = /* @__PURE__ */ b({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = $(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), x(s(Kp), k(n.value, {
      class: s(V)("text-lg font-semibold", t.class)
    }), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Lg = /* @__PURE__ */ b({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = $(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), x(s(Hp), k(n.value, {
      class: s(V)("text-sm text-muted-foreground", t.class)
    }), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Vg = /* @__PURE__ */ b({
  __name: "AlertDialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), K("div", {
      class: le(s(V)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), Ns = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, zs = Ki, Un = (e, t) => (n) => {
  var o;
  if ((t == null ? void 0 : t.variants) == null) return zs(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: a, defaultVariants: r } = t, l = Object.keys(a).map((d) => {
    const c = n == null ? void 0 : n[d], p = r == null ? void 0 : r[d];
    if (c === null) return null;
    const f = Ns(c) || Ns(p);
    return a[d][f];
  }), i = n && Object.entries(n).reduce((d, c) => {
    let [p, f] = c;
    return f === void 0 || (d[p] = f), d;
  }, {}), u = t == null || (o = t.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((d, c) => {
    let { class: p, className: f, ...v } = c;
    return Object.entries(v).every((m) => {
      let [g, _] = m;
      return Array.isArray(_) ? _.includes({
        ...r,
        ...i
      }[g]) : {
        ...r,
        ...i
      }[g] === _;
    }) ? [
      ...d,
      p,
      f
    ] : d;
  }, []);
  return zs(e, l, u, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, Xi = /* @__PURE__ */ b({
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
      class: le(s(V)(s(tn)({ variant: e.variant, size: e.size }), t.class))
    }, {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), tn = Un(
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
), qg = /* @__PURE__ */ b({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    variant: {}
  },
  setup(e) {
    const t = e, n = $(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), x(s(Wp), k(n.value, {
      class: s(V)(s(tn)({ variant: e.variant }), t.class)
    }), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ng = /* @__PURE__ */ b({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = $(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), x(s(jp), k(n.value, {
      class: s(V)(s(tn)({ variant: "outline" }), "mt-2 sm:mt-0", t.class)
    }), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), F1 = /* @__PURE__ */ b({
  __name: "ConfirmDialog",
  setup(e) {
    const { isOpen: t, close: n, cancelButton: o, actionButton: a, title: r, description: l, variant: i } = Kg();
    return (u, d) => (h(), x(s(Ig), { open: s(t) }, {
      default: y(() => [
        F(s(Mg), {
          onEscapeKeyDown: s(n),
          onPointerDownOutside: s(n)
        }, {
          default: y(() => [
            F(s(Fg), null, {
              default: y(() => [
                F(s(Rg), null, {
                  default: y(() => [
                    Ce(Ie(s(r)), 1)
                  ]),
                  _: 1
                }),
                F(s(Lg), null, {
                  default: y(() => [
                    Ce(Ie(s(l)), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            F(s(Vg), null, {
              default: y(() => [
                F(s(Ng), {
                  onClick: s(o).handler
                }, {
                  default: y(() => [
                    Ce(Ie(s(o).label ?? "Cancel"), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                F(s(qg), {
                  variant: s(i),
                  onClick: s(a).handler
                }, {
                  default: y(() => [
                    Ce(Ie(s(a).label ?? "Confirm"), 1)
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
}), Jr = E(!1), Zi = E(""), Qi = E(""), Ji = E(null), eu = E({
  label: void 0,
  handler: () => {
  }
}), tu = E({
  label: void 0,
  handler: () => {
  }
}), zg = (e) => {
  Zi.value = e.title, Qi.value = e.description, Ji.value = e.variant, eu.value = js(e.cancelAction), tu.value = js(e.action), jg();
}, js = (e) => typeof e == "string" ? {
  label: e,
  handler: qo
} : typeof e == "function" ? {
  label: void 0,
  handler: e
} : typeof e == "object" && e !== void 0 ? {
  label: e.label ?? void 0,
  handler: e.handler ?? qo
} : {
  label: void 0,
  handler: qo
}, qo = () => {
  Jr.value = !1;
}, jg = () => {
  Jr.value = !0;
};
function Kg() {
  return {
    confirmDialog: (e) => zg(e),
    title: Zi,
    description: Qi,
    variant: Ji,
    isOpen: Jr,
    close: qo,
    cancelButton: eu,
    actionButton: tu
  };
}
const Gn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, a] of t)
    n[o] = a;
  return n;
}, Hg = {}, Wg = { class: "h-full bg-background dark:text-white" };
function Ug(e, t) {
  return h(), K("div", Wg, [
    w(e.$slots, "default")
  ]);
}
const R1 = /* @__PURE__ */ Gn(Hg, [["render", Ug]]), Gg = {}, Yg = { class: "sticky top-0 z-50 flex h-16 shrink-0 items-center gap-x-4 bg-background/60 px-4 backdrop-blur sm:gap-x-6 sm:px-6 lg:px-8" };
function Xg(e, t) {
  return h(), K("header", Yg, [
    w(e.$slots, "default")
  ]);
}
const L1 = /* @__PURE__ */ Gn(Gg, [["render", Xg]]), Zg = {}, Qg = { class: "px-4 py-10 sm:px-6 lg:px-8 lg:pl-72" };
function Jg(e, t) {
  return h(), K("main", Qg, [
    w(e.$slots, "default")
  ]);
}
const V1 = /* @__PURE__ */ Gn(Zg, [["render", Jg]]), eh = {};
function th(e, t) {
  return w(e.$slots, "default");
}
const q1 = /* @__PURE__ */ Gn(eh, [["render", th]]), nh = {}, oh = { class: "hidden px-6 py-10 lg:fixed lg:inset-y-0 lg:top-16 lg:z-50 lg:flex lg:w-72 lg:flex-col" }, ah = { class: "gap-y-5 overflow-y-auto" };
function rh(e, t) {
  return h(), K("div", oh, [
    de("div", ah, [
      w(e.$slots, "default")
    ])
  ]);
}
const N1 = /* @__PURE__ */ Gn(nh, [["render", rh]]), sh = {};
function lh(e, t) {
  return w(e.$slots, "default");
}
const z1 = /* @__PURE__ */ Gn(sh, [["render", lh]]);
function ih(e, t) {
  return h(), K("svg", {
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
function uh(e, t) {
  return h(), K("svg", {
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
function Ks(e, t) {
  return h(), K("svg", {
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
function dh(e, t) {
  return h(), K("svg", {
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
const ch = {
  type: "button",
  class: "-m-2.5 p-2.5 lg:hidden"
}, j1 = /* @__PURE__ */ b({
  __name: "TwoColumnLayoutSidebarTrigger",
  setup(e) {
    return (t, n) => (h(), K("button", ch, [
      n[0] || (n[0] = de("span", { class: "sr-only" }, "Open sidebar", -1)),
      F(s(ih), {
        class: "h-6 w-6",
        "aria-hidden": "true"
      })
    ]));
  }
}), ph = 3, fh = 1e6, Ft = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST"
};
let Fa = 0;
function vh() {
  return Fa = (Fa + 1) % Number.MAX_VALUE, Fa.toString();
}
const Ra = /* @__PURE__ */ new Map();
function Hs(e) {
  if (Ra.has(e)) return;
  const t = setTimeout(() => {
    Ra.delete(e), to({
      type: Ft.REMOVE_TOAST,
      toastId: e
    });
  }, fh);
  Ra.set(e, t);
}
const vt = E({
  toasts: []
});
function to(e) {
  switch (e.type) {
    case Ft.ADD_TOAST:
      vt.value.toasts = [e.toast, ...vt.value.toasts].slice(0, ph);
      break;
    case Ft.UPDATE_TOAST:
      vt.value.toasts = vt.value.toasts.map(
        (t) => t.id === e.toast.id ? { ...t, ...e.toast } : t
      );
      break;
    case Ft.DISMISS_TOAST: {
      const { toastId: t } = e;
      t ? Hs(t) : vt.value.toasts.forEach((n) => {
        Hs(n.id);
      }), vt.value.toasts = vt.value.toasts.map(
        (n) => n.id === t || t === void 0 ? {
          ...n,
          open: !1
        } : n
      );
      break;
    }
    case Ft.REMOVE_TOAST:
      e.toastId === void 0 ? vt.value.toasts = [] : vt.value.toasts = vt.value.toasts.filter((t) => t.id !== e.toastId);
      break;
  }
}
function nu() {
  return {
    toasts: $(() => vt.value.toasts),
    toast: mh,
    dismiss: (e) => to({ type: Ft.DISMISS_TOAST, toastId: e })
  };
}
function mh(e) {
  const t = vh(), n = (a) => to({
    type: Ft.UPDATE_TOAST,
    toast: { ...a, id: t }
  }), o = () => to({ type: Ft.DISMISS_TOAST, toastId: t });
  return to({
    type: Ft.ADD_TOAST,
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
const gh = { class: "flex items-start space-x-3" }, hh = ["src", "alt"], yh = { class: "grid gap-1" }, bh = { class: "font-bold" }, wh = /* @__PURE__ */ b({
  __name: "Toaster",
  props: {
    position: {}
  },
  emits: ["click"],
  setup(e) {
    const { toasts: t } = nu();
    return (n, o) => (h(), x(s(Ah), null, {
      default: y(() => [
        (h(!0), K(Te, null, Gt(s(t), (a) => (h(), x(s(_h), k({
          key: a.id
        }, { ref_for: !0 }, a, {
          class: "mt-1.5",
          onClick: (r) => n.$emit("click", a)
        }), {
          default: y(() => [
            de("div", gh, [
              a.icon ? (h(), K(Te, { key: 0 }, [
                typeof a.icon == "string" ? (h(), K("img", {
                  key: 0,
                  src: a.icon,
                  class: le(["size-16 rounded-sm object-cover", a.iconClasses]),
                  alt: a.title
                }, null, 10, hh)) : (h(), x(lt(a.icon), {
                  key: 1,
                  class: le(["size-6", a.iconClasses])
                }, null, 8, ["class"]))
              ], 64)) : he("", !0),
              de("div", yh, [
                a.title ? (h(), x(s(Dh), { key: 0 }, {
                  default: y(() => [
                    Ce(Ie(a.title), 1)
                  ]),
                  _: 2
                }, 1024)) : he("", !0),
                a.description ? (h(), K(Te, { key: 1 }, [
                  Uu(a.description) ? (h(), x(s(Ws), { key: 0 }, {
                    default: y(() => [
                      (h(), x(lt(a.description)))
                    ]),
                    _: 2
                  }, 1024)) : typeof a.description == "object" ? (h(!0), K(Te, { key: 1 }, Gt(a.description, (r, l) => (h(), K("p", {
                    key: l,
                    class: "text-sm opacity-90"
                  }, [
                    a.objectFormat === "key" ? (h(), K(Te, { key: 0 }, [
                      Ce(Ie(l), 1)
                    ], 64)) : a.objectFormat === "both" ? (h(), K(Te, { key: 1 }, [
                      de("span", bh, Ie(l), 1),
                      Ce(": " + Ie(r), 1)
                    ], 64)) : (h(), K(Te, { key: 2 }, [
                      Ce(Ie(r), 1)
                    ], 64))
                  ]))), 128)) : (h(), x(s(Ws), { key: 2 }, {
                    default: y(() => [
                      Ce(Ie(a.description), 1)
                    ]),
                    _: 2
                  }, 1024))
                ], 64)) : he("", !0),
                F(s(kh))
              ])
            ]),
            (h(), x(lt(a.action)))
          ]),
          _: 2
        }, 1040, ["onClick"]))), 128)),
        F(s(xh), { position: e.position }, null, 8, ["position"])
      ]),
      _: 1
    }));
  }
}), _h = /* @__PURE__ */ b({
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
    const n = e, o = t, a = $(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = ce(a, o);
    return (l, i) => (h(), x(s(jm), k(s(r), {
      class: s(V)(s(Th)({ variant: e.variant }), n.class),
      "onUpdate:open": e.onOpenChange
    }), {
      default: y(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class", "onUpdate:open"]));
  }
}), xh = /* @__PURE__ */ b({
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
    const t = e, n = $(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = $(() => {
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
    return (a, r) => (h(), x(s(Hm), k(n.value, {
      class: s(V)(
        // overriding the defaults to position at the bottom on mobile viewport
        // 'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
        "fixed flex-col z-[100] flex max-h-screen w-full p-4 md:max-w-[420px]",
        o.value,
        t.class
      )
    }), null, 16, ["class"]));
  }
}), K1 = /* @__PURE__ */ b({
  __name: "ToastAction",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = $(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), x(s(Km), k(n.value, {
      class: s(V)(
        "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
        t.class
      )
    }), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
});
function Ch(e, t) {
  return h(), K("svg", {
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
function Bh(e, t) {
  return h(), K("svg", {
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
function Sh(e, t) {
  return h(), K("svg", {
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
function ou(e, t) {
  return h(), K("svg", {
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
function au(e, t) {
  return h(), K("svg", {
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
function $h(e, t) {
  return h(), K("svg", {
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
function Oh(e, t) {
  return h(), K("svg", {
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
function ha(e, t) {
  return h(), K("svg", {
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
function Eh(e, t) {
  return h(), K("svg", {
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
function Ph(e, t) {
  return h(), K("svg", {
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
const kh = /* @__PURE__ */ b({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = $(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), x(s(qi), k(n.value, {
      class: s(V)(
        "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
        t.class
      )
    }), {
      default: y(() => [
        F(s(ha), { class: "h-4 w-4" })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Dh = /* @__PURE__ */ b({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = $(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), x(s(Wm), k(n.value, {
      class: s(V)("text-sm font-semibold [&+div]:text-xs", t.class)
    }), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ws = /* @__PURE__ */ b({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = $(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), x(s(Um), k({
      class: s(V)("text-sm opacity-90", t.class)
    }, n.value), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ah = /* @__PURE__ */ b({
  __name: "ToastProvider",
  props: {
    label: {},
    duration: {},
    swipeDirection: {},
    swipeThreshold: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Tm), Z(te(t)), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Th = Un(
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
), { toast: Do } = nu();
function Ih() {
  return {
    info: (e) => {
      Do({
        icon: dh,
        iconClasses: "text-blue-400",
        title: "FYI",
        description: e
      });
    },
    success: (e) => {
      Do({
        icon: uh,
        iconClasses: "text-green-400",
        title: "Success",
        description: e
      });
    },
    warning: (e) => {
      Do({
        icon: Ks,
        iconClasses: "text-orange-400",
        title: "Warning",
        description: e
      });
    },
    error: (e, t = "value") => {
      Do({
        icon: Ks,
        iconClasses: "text-red-400",
        title: "Oh snap! Some errors were encountered.",
        description: e,
        objectFormat: t
      });
    }
  };
}
const H1 = /* @__PURE__ */ b({
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
    } = Ih();
    return ne(
      () => t.info,
      (l) => {
        l && n(t.info);
      },
      {
        immediate: !0
      }
    ), ne(
      () => t.success,
      (l) => {
        l && o(t.success);
      },
      { immediate: !0 }
    ), ne(
      () => t.warning,
      (l) => {
        l && a(t.warning);
      },
      { immediate: !0 }
    ), ne(
      () => t.errors,
      () => {
        t.errors !== void 0 && Object.keys(t.errors).length > 0 && r(t.errors, t.objectFormat);
      }
    ), (l, i) => (h(), x(s(wh)));
  }
}), Mh = { class: "flex items-center justify-between space-y-2" }, Fh = { class: "flex items-center space-x-2" }, W1 = /* @__PURE__ */ b({
  __name: "Heading",
  props: {
    as: { default: "h2" },
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), K("div", Mh, [
      (h(), x(lt(e.as), {
        class: le(s(V)("text-3xl font-bold tracking-tight", t.class))
      }, {
        default: y(() => [
          w(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["class"])),
      de("div", Fh, [
        w(n.$slots, "actions")
      ])
    ]));
  }
}), Rh = /* @__PURE__ */ b({
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
    const a = ce(e, t);
    return (r, l) => (h(), x(s(rp), Z(te(s(a))), {
      default: y(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), U1 = /* @__PURE__ */ b({
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
    const a = ce(e, t);
    return (r, l) => (h(), x(Rh, Z(te(s(a))), {
      default: y(() => [
        (h(!0), K(Te, null, Gt(e.content, (i, u) => (h(), x(s(Vh), {
          key: u,
          value: "item-" + u
        }, {
          default: y(() => [
            F(s(qh), null, {
              default: y(() => [
                w(r.$slots, u + ".title", { item: i }, () => [
                  Ce(Ie(i.title), 1)
                ])
              ]),
              _: 2
            }, 1024),
            F(s(Lh), null, {
              default: y(() => [
                w(r.$slots, u + ".content", { item: i }, () => [
                  Ce(Ie(i.content), 1)
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
}), Lh = /* @__PURE__ */ b({
  __name: "AccordionContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = $(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), x(s(ip), k(n.value, { class: "accordion-content overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" }), {
      default: y(() => [
        de("div", {
          class: le(s(V)("pb-4 pt-0", t.class))
        }, [
          w(o.$slots, "default")
        ], 2)
      ]),
      _: 3
    }, 16));
  }
}), Vh = /* @__PURE__ */ b({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = $(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = Ye(n);
    return (a, r) => (h(), x(s(lp), k(s(o), {
      class: s(V)("border-b", t.class)
    }), {
      default: y(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), qh = /* @__PURE__ */ b({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = $(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), x(s(up), { class: "flex" }, {
      default: y(() => [
        F(s(dp), k(n.value, {
          class: s(V)(
            "accordion-trigger flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
            t.class
          )
        }), {
          default: y(() => [
            w(o.$slots, "default"),
            w(o.$slots, "icon", {}, () => [
              F(s(au), { class: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), G1 = /* @__PURE__ */ b({
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
    const a = ce(e, t);
    return (r, l) => (h(), x(s(jh), null, {
      default: y(() => [
        F(s(Nh), Z(te(s(a))), {
          default: y(() => [
            F(s(Kh), {
              class: le(e.indicator ? "underline decoration-dotted underline-offset-4" : "")
            }, {
              default: y(() => [
                w(r.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]),
            F(s(zh), Z(te(r.$attrs)), {
              default: y(() => [
                w(r.$slots, "tooltip", {}, () => [
                  Ce(Ie(e.tooltip), 1)
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
}), Nh = /* @__PURE__ */ b({
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
    const a = ce(e, t);
    return (r, l) => (h(), x(s(Zm), Z(te(s(a))), {
      default: y(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), zh = /* @__PURE__ */ b({
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
    const n = e, o = t, a = $(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = ce(a, o);
    return (l, i) => (h(), x(s(tg), null, {
      default: y(() => [
        F(s(eg), k({ ...s(r), ...l.$attrs }, {
          class: s(V)(
            "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            n.class
          )
        }), {
          default: y(() => [
            w(l.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), jh = /* @__PURE__ */ b({
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
    return (n, o) => (h(), x(s(Ym), Z(te(t)), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Kh = /* @__PURE__ */ b({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Qm), Z(te(t)), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Y1 = /* @__PURE__ */ b({
  __name: "Avatar",
  props: {
    class: {},
    size: { default: "sm" },
    shape: { default: "circle" }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Gp), {
      class: le(s(V)(s(Hh)({ size: e.size, shape: e.shape }), t.class))
    }, {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), X1 = /* @__PURE__ */ b({
  __name: "AvatarImage",
  props: {
    src: {},
    referrerPolicy: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Xp), k(t, { class: "h-full w-full object-cover" }), null, 16));
  }
}), Z1 = /* @__PURE__ */ b({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Zp), Z(te(t)), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hh = Un(
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
), Q1 = /* @__PURE__ */ b({
  __name: "Badge",
  props: {
    variant: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), K("div", {
      class: le(s(V)(s(Wh)({ variant: e.variant }), t.class))
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), Wh = Un(
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
), J1 = /* @__PURE__ */ b({
  __name: "Card",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), K("div", {
      class: le(s(V)("rounded-xl border bg-card text-card-foreground shadow", t.class))
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), ex = /* @__PURE__ */ b({
  __name: "CardContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), K("div", {
      class: le(s(V)("p-6 pt-0", t.class))
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), tx = /* @__PURE__ */ b({
  __name: "CardDescription",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), K("p", {
      class: le(s(V)("text-sm text-muted-foreground", t.class))
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), nx = /* @__PURE__ */ b({
  __name: "CardFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), K("div", {
      class: le(s(V)("flex items-center p-6 pt-0", t.class))
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), ox = /* @__PURE__ */ b({
  __name: "CardHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), K("div", {
      class: le(s(V)("flex flex-col gap-y-1.5 p-6", t.class))
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), ax = /* @__PURE__ */ b({
  __name: "CardTitle",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), K("h3", {
      class: le(s(V)("font-semibold leading-none tracking-tight", t.class))
    }, [
      w(n.$slots, "default")
    ], 2));
  }
});
var Us;
const Uh = typeof window < "u", Gh = (e) => typeof e < "u", Yh = (e) => typeof e == "function";
Uh && ((Us = window == null ? void 0 : window.navigator) != null && Us.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Xh(e) {
  return e;
}
function Zh(e) {
  const t = Symbol("InjectionState");
  return [(...a) => {
    const r = e(...a);
    return dn(t, r), r;
  }, () => un(t)];
}
function Qh(e) {
  if (!tt(e))
    return Yt(e);
  const t = new Proxy({}, {
    get(n, o, a) {
      return s(Reflect.get(e.value, o, a));
    },
    set(n, o, a) {
      return tt(e.value[o]) && !tt(a) ? e.value[o].value = a : e.value[o] = a, !0;
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
  return Yt(t);
}
function Jh(e) {
  return Qh($(e));
}
function qe(e, ...t) {
  const n = t.flat();
  return Jh(() => Object.fromEntries(Object.entries(ye(e)).filter((o) => !n.includes(o[0]))));
}
function ey(e) {
  return JSON.parse(JSON.stringify(e));
}
const Gs = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ys = "__vueuse_ssr_handlers__";
Gs[Ys] = Gs[Ys] || {};
var Xs;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Xs || (Xs = {}));
var ty = Object.defineProperty, Zs = Object.getOwnPropertySymbols, ny = Object.prototype.hasOwnProperty, oy = Object.prototype.propertyIsEnumerable, Qs = (e, t, n) => t in e ? ty(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ay = (e, t) => {
  for (var n in t || (t = {}))
    ny.call(t, n) && Qs(e, n, t[n]);
  if (Zs)
    for (var n of Zs(t))
      oy.call(t, n) && Qs(e, n, t[n]);
  return e;
};
const ry = {
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
ay({
  linear: Xh
}, ry);
function ru(e, t, n, o = {}) {
  var a, r, l;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: c = !1,
    defaultValue: p
  } = o, f = Qe(), v = n || (f == null ? void 0 : f.emit) || ((a = f == null ? void 0 : f.$emit) == null ? void 0 : a.bind(f)) || ((l = (r = f == null ? void 0 : f.proxy) == null ? void 0 : r.$emit) == null ? void 0 : l.bind(f == null ? void 0 : f.proxy));
  let m = d;
  m = d || m || `update:${t.toString()}`;
  const g = (C) => i ? Yh(i) ? i(C) : ey(C) : C, _ = () => Gh(e[t]) ? g(e[t]) : p;
  if (u) {
    const C = _(), S = E(C);
    return ne(() => e[t], (B) => S.value = g(B)), ne(S, (B) => {
      (B !== e[t] || c) && v(m, B);
    }, { deep: c }), S;
  } else
    return $({
      get() {
        return _();
      },
      set(C) {
        v(m, C);
      }
    });
}
function sy(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Js(e) {
  return sy(e) || Array.isArray(e);
}
function ly() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function es(e, t) {
  const n = Object.keys(e), o = Object.keys(t);
  if (n.length !== o.length) return !1;
  const a = JSON.stringify(Object.keys(e.breakpoints || {})), r = JSON.stringify(Object.keys(t.breakpoints || {}));
  return a !== r ? !1 : n.every((l) => {
    const i = e[l], u = t[l];
    return typeof i == "function" ? `${i}` == `${u}` : !Js(i) || !Js(u) ? i === u : es(i, u);
  });
}
function el(e) {
  return e.concat().sort((t, n) => t.name > n.name ? 1 : -1).map((t) => t.options);
}
function iy(e, t) {
  if (e.length !== t.length) return !1;
  const n = el(e), o = el(t);
  return n.every((a, r) => {
    const l = o[r];
    return es(a, l);
  });
}
function ts(e) {
  return typeof e == "number";
}
function or(e) {
  return typeof e == "string";
}
function ya(e) {
  return typeof e == "boolean";
}
function tl(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Le(e) {
  return Math.abs(e);
}
function ns(e) {
  return Math.sign(e);
}
function no(e, t) {
  return Le(e - t);
}
function uy(e, t) {
  if (e === 0 || t === 0 || Le(e) <= Le(t)) return 0;
  const n = no(Le(e), Le(t));
  return Le(n / e);
}
function dy(e) {
  return Math.round(e * 100) / 100;
}
function io(e) {
  return uo(e).map(Number);
}
function ht(e) {
  return e[wo(e)];
}
function wo(e) {
  return Math.max(0, e.length - 1);
}
function os(e, t) {
  return t === wo(e);
}
function nl(e, t = 0) {
  return Array.from(Array(e), (n, o) => t + o);
}
function uo(e) {
  return Object.keys(e);
}
function su(e, t) {
  return [e, t].reduce((n, o) => (uo(o).forEach((a) => {
    const r = n[a], l = o[a], i = tl(r) && tl(l);
    n[a] = i ? su(r, l) : l;
  }), n), {});
}
function ar(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function cy(e, t) {
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
    return or(e) ? n[e](u) : e(t, u, d);
  }
  return {
    measure: l
  };
}
function co() {
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
function py(e, t, n, o) {
  const a = co(), r = 1e3 / 60;
  let l = null, i = 0, u = 0;
  function d() {
    a.add(e, "visibilitychange", () => {
      e.hidden && m();
    });
  }
  function c() {
    v(), a.clear();
  }
  function p(_) {
    if (!u) return;
    l || (l = _, n(), n());
    const C = _ - l;
    for (l = _, i += C; i >= r; )
      n(), i -= r;
    const S = i / r;
    o(S), u && (u = t.requestAnimationFrame(p));
  }
  function f() {
    u || (u = t.requestAnimationFrame(p));
  }
  function v() {
    t.cancelAnimationFrame(u), l = null, i = 0, u = 0;
  }
  function m() {
    l = null, i = 0;
  }
  return {
    init: d,
    destroy: c,
    start: f,
    stop: v,
    update: n,
    render: o
  };
}
function fy(e, t) {
  const n = t === "rtl", o = e === "y", a = o ? "y" : "x", r = o ? "x" : "y", l = !o && n ? -1 : 1, i = c(), u = p();
  function d(m) {
    const {
      height: g,
      width: _
    } = m;
    return o ? g : _;
  }
  function c() {
    return o ? "top" : n ? "right" : "left";
  }
  function p() {
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
function ln(e = 0, t = 0) {
  const n = Le(e - t);
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
function lu(e, t, n) {
  const {
    constrain: o
  } = ln(0, e), a = e + 1;
  let r = l(t);
  function l(f) {
    return n ? Le((a + f) % a) : o(f);
  }
  function i() {
    return r;
  }
  function u(f) {
    return r = l(f), p;
  }
  function d(f) {
    return c().set(i() + f);
  }
  function c() {
    return lu(e, i(), n);
  }
  const p = {
    get: i,
    set: u,
    add: d,
    clone: c
  };
  return p;
}
function vy(e, t, n, o, a, r, l, i, u, d, c, p, f, v, m, g, _, C, S) {
  const {
    cross: B,
    direction: D
  } = e, O = ["INPUT", "SELECT", "TEXTAREA"], T = {
    passive: !1
  }, P = co(), M = co(), q = ln(50, 225).constrain(v.measure(20)), A = {
    mouse: 300,
    touch: 400
  }, z = {
    mouse: 500,
    touch: 600
  }, I = m ? 43 : 25;
  let Q = !1, U = 0, N = 0, R = !1, ae = !1, G = !1, L = !1;
  function ee(J) {
    if (!S) return;
    function me(De) {
      (ya(S) || S(J, De)) && Ve(De);
    }
    const $e = t;
    P.add($e, "dragstart", (De) => De.preventDefault(), T).add($e, "touchmove", () => {
    }, T).add($e, "touchend", () => {
    }).add($e, "touchstart", me).add($e, "mousedown", me).add($e, "touchcancel", Y).add($e, "contextmenu", Y).add($e, "click", oe, !0);
  }
  function W() {
    P.clear(), M.clear();
  }
  function _e() {
    const J = L ? n : t;
    M.add(J, "touchmove", H, T).add(J, "touchend", Y).add(J, "mousemove", H, T).add(J, "mouseup", Y);
  }
  function ke(J) {
    const me = J.nodeName || "";
    return O.includes(me);
  }
  function Be() {
    return (m ? z : A)[L ? "mouse" : "touch"];
  }
  function Ee(J, me) {
    const $e = p.add(ns(J) * -1), De = c.byDistance(J, !m).distance;
    return m || Le(J) < q ? De : _ && me ? De * 0.5 : c.byIndex($e.get(), 0).distance;
  }
  function Ve(J) {
    const me = ar(J, o);
    L = me, G = m && me && !J.buttons && Q, Q = no(a.get(), l.get()) >= 2, !(me && J.button !== 0) && (ke(J.target) || (R = !0, r.pointerDown(J), d.useFriction(0).useDuration(0), a.set(l), _e(), U = r.readPoint(J), N = r.readPoint(J, B), f.emit("pointerDown")));
  }
  function H(J) {
    if (!ar(J, o) && J.touches.length >= 2) return Y(J);
    const $e = r.readPoint(J), De = r.readPoint(J, B), Je = no($e, U), at = no(De, N);
    if (!ae && !L && (!J.cancelable || (ae = Je > at, !ae)))
      return Y(J);
    const re = r.pointerMove(J);
    Je > g && (G = !0), d.useFriction(0.3).useDuration(0.75), i.start(), a.add(D(re)), J.preventDefault();
  }
  function Y(J) {
    const $e = c.byDistance(0, !1).index !== p.get(), De = r.pointerUp(J) * Be(), Je = Ee(D(De), $e), at = uy(De, Je), re = I - 10 * at, Oe = C + at / 50;
    ae = !1, R = !1, M.clear(), d.useDuration(re).useFriction(Oe), u.distance(Je, !m), L = !1, f.emit("pointerUp");
  }
  function oe(J) {
    G && (J.stopPropagation(), J.preventDefault(), G = !1);
  }
  function ue() {
    return R;
  }
  return {
    init: ee,
    destroy: W,
    pointerDown: ue
  };
}
function my(e, t) {
  let o, a;
  function r(p) {
    return p.timeStamp;
  }
  function l(p, f) {
    const m = `client${(f || e.scroll) === "x" ? "X" : "Y"}`;
    return (ar(p, t) ? p : p.touches[0])[m];
  }
  function i(p) {
    return o = p, a = p, l(p);
  }
  function u(p) {
    const f = l(p) - l(a), v = r(p) - r(o) > 170;
    return a = p, v && (o = p), f;
  }
  function d(p) {
    if (!o || !a) return 0;
    const f = l(a) - l(o), v = r(p) - r(o), m = r(p) - r(a) > 170, g = f / v;
    return v && !m && Le(g) > 0.1 ? g : 0;
  }
  return {
    pointerDown: i,
    pointerMove: u,
    pointerUp: d,
    readPoint: l
  };
}
function gy() {
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
function hy(e) {
  function t(o) {
    return e * (o / 100);
  }
  return {
    measure: t
  };
}
function yy(e, t, n, o, a, r, l) {
  const i = [e].concat(o);
  let u, d, c = [], p = !1;
  function f(_) {
    return a.measureSize(l.measure(_));
  }
  function v(_) {
    if (!r) return;
    d = f(e), c = o.map(f);
    function C(S) {
      for (const B of S) {
        if (p) return;
        const D = B.target === e, O = o.indexOf(B.target), T = D ? d : c[O], P = f(D ? e : o[O]);
        if (Le(P - T) >= 0.5) {
          _.reInit(), t.emit("resize");
          break;
        }
      }
    }
    u = new ResizeObserver((S) => {
      (ya(r) || r(_, S)) && C(S);
    }), n.requestAnimationFrame(() => {
      i.forEach((S) => u.observe(S));
    });
  }
  function m() {
    p = !0, u && u.disconnect();
  }
  return {
    init: v,
    destroy: m
  };
}
function by(e, t, n, o, a, r) {
  let l = 0, i = 0, u = a, d = r, c = e.get(), p = 0;
  function f() {
    const T = o.get() - e.get(), P = !u;
    let M = 0;
    return P ? (l = 0, n.set(o), e.set(o), M = T) : (n.set(e), l += T / u, l *= d, c += l, e.add(l), M = c - p), i = ns(M), p = c, O;
  }
  function v() {
    const T = o.get() - t.get();
    return Le(T) < 1e-3;
  }
  function m() {
    return u;
  }
  function g() {
    return i;
  }
  function _() {
    return l;
  }
  function C() {
    return B(a);
  }
  function S() {
    return D(r);
  }
  function B(T) {
    return u = T, O;
  }
  function D(T) {
    return d = T, O;
  }
  const O = {
    direction: g,
    duration: m,
    velocity: _,
    seek: f,
    settled: v,
    useBaseFriction: S,
    useBaseDuration: C,
    useFriction: D,
    useDuration: B
  };
  return O;
}
function wy(e, t, n, o, a) {
  const r = a.measure(10), l = a.measure(50), i = ln(0.1, 0.99);
  let u = !1;
  function d() {
    return !(u || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
  }
  function c(v) {
    if (!d()) return;
    const m = e.reachedMin(t.get()) ? "min" : "max", g = Le(e[m] - t.get()), _ = n.get() - t.get(), C = i.constrain(g / l);
    n.subtract(_ * C), !v && Le(_) < r && (n.set(e.constrain(n.get())), o.useDuration(25).useBaseFriction());
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
function _y(e, t, n, o, a) {
  const r = ln(-t + e, 0), l = p(), i = c(), u = f();
  function d(m, g) {
    return no(m, g) <= 1;
  }
  function c() {
    const m = l[0], g = ht(l), _ = l.lastIndexOf(m), C = l.indexOf(g) + 1;
    return ln(_, C);
  }
  function p() {
    return n.map((m, g) => {
      const {
        min: _,
        max: C
      } = r, S = r.constrain(m), B = !g, D = os(n, g);
      return B ? C : D || d(_, S) ? _ : d(C, S) ? C : S;
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
function xy(e, t, n) {
  const o = t[0], a = n ? o - e : ht(t);
  return {
    limit: ln(a, o)
  };
}
function Cy(e, t, n, o) {
  const r = t.min + 0.1, l = t.max + 0.1, {
    reachedMin: i,
    reachedMax: u
  } = ln(r, l);
  function d(f) {
    return f === 1 ? u(n.get()) : f === -1 ? i(n.get()) : !1;
  }
  function c(f) {
    if (!d(f)) return;
    const v = e * (f * -1);
    o.forEach((m) => m.add(v));
  }
  return {
    loop: c
  };
}
function By(e) {
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
function Sy(e, t, n, o, a) {
  const {
    startEdge: r,
    endEdge: l
  } = e, {
    groupSlides: i
  } = a, u = p().map(t.measure), d = f(), c = v();
  function p() {
    return i(o).map((g) => ht(g)[l] - g[0][r]).map(Le);
  }
  function f() {
    return o.map((g) => n[r] - g[r]).map((g) => -Le(g));
  }
  function v() {
    return i(d).map((g) => g[0]).map((g, _) => g + u[_]);
  }
  return {
    snaps: d,
    snapsAligned: c
  };
}
function $y(e, t, n, o, a, r) {
  const {
    groupSlides: l
  } = a, {
    min: i,
    max: u
  } = o, d = c();
  function c() {
    const f = l(r), v = !e || t === "keepSnaps";
    return n.length === 1 ? [r] : v ? f : f.slice(i, u).map((m, g, _) => {
      const C = !g, S = os(_, g);
      if (C) {
        const B = ht(_[0]) + 1;
        return nl(B);
      }
      if (S) {
        const B = wo(r) - ht(_)[0] + 1;
        return nl(B, ht(_)[0]);
      }
      return m;
    });
  }
  return {
    slideRegistry: d
  };
}
function Oy(e, t, n, o, a) {
  const {
    reachedAny: r,
    removeOffset: l,
    constrain: i
  } = o;
  function u(m) {
    return m.concat().sort((g, _) => Le(g) - Le(_))[0];
  }
  function d(m) {
    const g = e ? l(m) : i(m), _ = t.map((S, B) => ({
      diff: c(S - g, 0),
      index: B
    })).sort((S, B) => Le(S.diff) - Le(B.diff)), {
      index: C
    } = _[0];
    return {
      index: C,
      distance: g
    };
  }
  function c(m, g) {
    const _ = [m, m + n, m - n];
    if (!e) return m;
    if (!g) return u(_);
    const C = _.filter((S) => ns(S) === g);
    return C.length ? u(C) : ht(_) - n;
  }
  function p(m, g) {
    const _ = t[m] - a.get(), C = c(_, g);
    return {
      index: m,
      distance: C
    };
  }
  function f(m, g) {
    const _ = a.get() + m, {
      index: C,
      distance: S
    } = d(_), B = !e && r(_);
    if (!g || B) return {
      index: C,
      distance: m
    };
    const D = t[C] - S, O = m + c(D, 0);
    return {
      index: C,
      distance: O
    };
  }
  return {
    byDistance: f,
    byIndex: p,
    shortcut: c
  };
}
function Ey(e, t, n, o, a, r, l) {
  function i(p) {
    const f = p.distance, v = p.index !== t.get();
    r.add(f), f && (o.duration() ? e.start() : (e.update(), e.render(1), e.update())), v && (n.set(t.get()), t.set(p.index), l.emit("select"));
  }
  function u(p, f) {
    const v = a.byDistance(p, f);
    i(v);
  }
  function d(p, f) {
    const v = t.clone().set(p), m = a.byIndex(v.get(), f);
    i(m);
  }
  return {
    distance: u,
    index: d
  };
}
function Py(e, t, n, o, a, r, l, i) {
  const u = {
    passive: !0,
    capture: !0
  };
  let d = 0;
  function c(v) {
    if (!i) return;
    function m(g) {
      if ((/* @__PURE__ */ new Date()).getTime() - d > 10) return;
      l.emit("slideFocusStart"), e.scrollLeft = 0;
      const S = n.findIndex((B) => B.includes(g));
      ts(S) && (a.useDuration(0), o.index(S, 0), l.emit("slideFocus"));
    }
    r.add(document, "keydown", p, !1), t.forEach((g, _) => {
      r.add(g, "focus", (C) => {
        (ya(i) || i(v, C)) && m(_);
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
function eo(e) {
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
    return ts(u) ? u : u.get();
  }
  return {
    get: n,
    set: o,
    add: a,
    subtract: r
  };
}
function iu(e, t) {
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
    const v = dy(e.direction(f));
    v !== a && (o.transform = n(v), a = v);
  }
  function d(f) {
    r = !f;
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
function ky(e, t, n, o, a, r, l, i, u) {
  const c = io(a), p = io(a).reverse(), f = C().concat(S());
  function v(P, M) {
    return P.reduce((q, A) => q - a[A], M);
  }
  function m(P, M) {
    return P.reduce((q, A) => v(q, M) > 0 ? q.concat([A]) : q, []);
  }
  function g(P) {
    return r.map((M, q) => ({
      start: M - o[q] + 0.5 + P,
      end: M + t - 0.5 + P
    }));
  }
  function _(P, M, q) {
    const A = g(M);
    return P.map((z) => {
      const I = q ? 0 : -n, Q = q ? n : 0, U = q ? "end" : "start", N = A[z][U];
      return {
        index: z,
        loopPoint: N,
        slideLocation: eo(-1),
        translate: iu(e, u[z]),
        target: () => i.get() > N ? I : Q
      };
    });
  }
  function C() {
    const P = l[0], M = m(p, P);
    return _(M, n, !1);
  }
  function S() {
    const P = t - l[0] - 1, M = m(c, P);
    return _(M, -n, !0);
  }
  function B() {
    return f.every(({
      index: P
    }) => {
      const M = c.filter((q) => q !== P);
      return v(M, t) <= 0.1;
    });
  }
  function D() {
    f.forEach((P) => {
      const {
        target: M,
        translate: q,
        slideLocation: A
      } = P, z = M();
      z !== A.get() && (q.to(z), A.set(z));
    });
  }
  function O() {
    f.forEach((P) => P.translate.clear());
  }
  return {
    canLoop: B,
    clear: O,
    loop: D,
    loopPoints: f
  };
}
function Dy(e, t, n) {
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
      a || (ya(n) || n(u, c)) && d(c);
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
function Ay(e, t, n, o) {
  const a = {};
  let r = null, l = null, i, u = !1;
  function d() {
    i = new IntersectionObserver((m) => {
      u || (m.forEach((g) => {
        const _ = t.indexOf(g.target);
        a[_] = g;
      }), r = null, l = null, n.emit("slidesInView"));
    }, {
      root: e.parentElement,
      threshold: o
    }), t.forEach((m) => i.observe(m));
  }
  function c() {
    i && i.disconnect(), u = !0;
  }
  function p(m) {
    return uo(a).reduce((g, _) => {
      const C = parseInt(_), {
        isIntersecting: S
      } = a[C];
      return (m && S || !m && !S) && g.push(C), g;
    }, []);
  }
  function f(m = !0) {
    if (m && r) return r;
    if (!m && l) return l;
    const g = p(m);
    return m && (r = g), m || (l = g), g;
  }
  return {
    init: d,
    destroy: c,
    get: f
  };
}
function Ty(e, t, n, o, a, r) {
  const {
    measureSize: l,
    startEdge: i,
    endEdge: u
  } = e, d = n[0] && a, c = m(), p = g(), f = n.map(l), v = _();
  function m() {
    if (!d) return 0;
    const S = n[0];
    return Le(t[i] - S[i]);
  }
  function g() {
    if (!d) return 0;
    const S = r.getComputedStyle(ht(o));
    return parseFloat(S.getPropertyValue(`margin-${u}`));
  }
  function _() {
    return n.map((S, B, D) => {
      const O = !B, T = os(D, B);
      return O ? f[B] + c : T ? f[B] + p : D[B + 1][i] - S[i];
    }).map(Le);
  }
  return {
    slideSizes: f,
    slideSizesWithGaps: v,
    startGap: c,
    endGap: p
  };
}
function Iy(e, t, n, o, a, r, l, i, u) {
  const {
    startEdge: d,
    endEdge: c,
    direction: p
  } = e, f = ts(n);
  function v(C, S) {
    return io(C).filter((B) => B % S === 0).map((B) => C.slice(B, B + S));
  }
  function m(C) {
    return C.length ? io(C).reduce((S, B, D) => {
      const O = ht(S) || 0, T = O === 0, P = B === wo(C), M = a[d] - r[O][d], q = a[d] - r[B][c], A = !o && T ? p(l) : 0, z = !o && P ? p(i) : 0, I = Le(q - z - (M + A));
      return D && I > t + u && S.push(B), P && S.push(C.length), S;
    }, []).map((S, B, D) => {
      const O = Math.max(D[B - 1] || 0);
      return C.slice(O, S);
    }) : [];
  }
  function g(C) {
    return f ? v(C, n) : m(C);
  }
  return {
    groupSlides: g
  };
}
function My(e, t, n, o, a, r, l) {
  const {
    align: i,
    axis: u,
    direction: d,
    startIndex: c,
    loop: p,
    duration: f,
    dragFree: v,
    dragThreshold: m,
    inViewThreshold: g,
    slidesToScroll: _,
    skipSnaps: C,
    containScroll: S,
    watchResize: B,
    watchSlides: D,
    watchDrag: O,
    watchFocus: T
  } = r, P = 2, M = gy(), q = M.measure(t), A = n.map(M.measure), z = fy(u, d), I = z.measureSize(q), Q = hy(I), U = cy(i, I), N = !p && !!S, R = p || !!S, {
    slideSizes: ae,
    slideSizesWithGaps: G,
    startGap: L,
    endGap: ee
  } = Ty(z, q, A, n, R, a), W = Iy(z, I, _, p, q, A, L, ee, P), {
    snaps: _e,
    snapsAligned: ke
  } = Sy(z, U, q, A, W), Be = -ht(_e) + ht(G), {
    snapsContained: Ee,
    scrollContainLimit: Ve
  } = _y(I, Be, ke, S, P), H = N ? Ee : ke, {
    limit: Y
  } = xy(Be, H, p), oe = lu(wo(H), c, p), ue = oe.clone(), pe = io(n), J = ({
    dragHandler: At,
    scrollBody: ft,
    scrollBounds: wn,
    options: {
      loop: _n
    }
  }) => {
    _n || wn.constrain(At.pointerDown()), ft.seek();
  }, me = ({
    scrollBody: At,
    translate: ft,
    location: wn,
    offsetLocation: _n,
    previousLocation: Tt,
    scrollLooper: xn,
    slideLooper: Bo,
    dragHandler: Fu,
    animation: Ru,
    eventHandler: ds,
    scrollBounds: Lu,
    options: {
      loop: cs
    }
  }, ps) => {
    const fs = At.settled(), Vu = !Lu.shouldConstrain(), vs = cs ? fs : fs && Vu, ms = vs && !Fu.pointerDown();
    ms && Ru.stop();
    const qu = wn.get() * ps + Tt.get() * (1 - ps);
    _n.set(qu), cs && (xn.loop(At.direction()), Bo.loop()), ft.to(_n.get()), ms && ds.emit("settle"), vs || ds.emit("scroll");
  }, $e = py(o, a, () => J(on), (At) => me(on, At)), De = 0.68, Je = H[oe.get()], at = eo(Je), re = eo(Je), Oe = eo(Je), Pe = eo(Je), Se = by(at, Oe, re, Pe, f, De), Ne = Oy(p, H, Be, Y, Pe), He = Ey($e, oe, ue, Se, Ne, Pe, l), nt = By(Y), Dt = co(), bn = Ay(t, n, l, g), {
    slideRegistry: nn
  } = $y(N, S, H, Ve, W, pe), Co = Py(e, n, nn, He, Se, Dt, l, T), on = {
    ownerDocument: o,
    ownerWindow: a,
    eventHandler: l,
    containerRect: q,
    slideRects: A,
    animation: $e,
    axis: z,
    dragHandler: vy(z, e, o, a, Pe, my(z, a), at, $e, He, Se, Ne, oe, l, Q, v, m, C, De, O),
    eventStore: Dt,
    percentOfView: Q,
    index: oe,
    indexPrevious: ue,
    limit: Y,
    location: at,
    offsetLocation: Oe,
    previousLocation: re,
    options: r,
    resizeHandler: yy(t, l, a, n, z, B, M),
    scrollBody: Se,
    scrollBounds: wy(Y, Oe, Pe, Se, Q),
    scrollLooper: Cy(Be, Y, Oe, [at, Oe, re, Pe]),
    scrollProgress: nt,
    scrollSnapList: H.map(nt.get),
    scrollSnaps: H,
    scrollTarget: Ne,
    scrollTo: He,
    slideLooper: ky(z, I, Be, ae, G, _e, H, Oe, n),
    slideFocus: Co,
    slidesHandler: Dy(t, l, D),
    slidesInView: bn,
    slideIndexes: pe,
    slideRegistry: nn,
    slidesToScroll: W,
    target: Pe,
    translate: iu(z, t)
  };
  return on;
}
function Fy() {
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
const Ry = {
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
function Ly(e) {
  function t(r, l) {
    return su(r, l || {});
  }
  function n(r) {
    const l = r.breakpoints || {}, i = uo(l).filter((u) => e.matchMedia(u).matches).map((u) => l[u]).reduce((u, d) => t(u, d), {});
    return t(r, i);
  }
  function o(r) {
    return r.map((l) => uo(l.breakpoints || {})).reduce((l, i) => l.concat(i), []).map(e.matchMedia);
  }
  return {
    mergeOptions: t,
    optionsAtMedia: n,
    optionsMediaQueries: o
  };
}
function Vy(e) {
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
function Yo(e, t, n) {
  const o = e.ownerDocument, a = o.defaultView, r = Ly(a), l = Vy(r), i = co(), u = Fy(), {
    mergeOptions: d,
    optionsAtMedia: c,
    optionsMediaQueries: p
  } = r, {
    on: f,
    off: v,
    emit: m
  } = u, g = z;
  let _ = !1, C, S = d(Ry, Yo.globalOptions), B = d(S), D = [], O, T, P;
  function M() {
    const {
      container: pe,
      slides: J
    } = B;
    T = (or(pe) ? e.querySelector(pe) : pe) || e.children[0];
    const $e = or(J) ? T.querySelectorAll(J) : J;
    P = [].slice.call($e || T.children);
  }
  function q(pe) {
    const J = My(e, T, P, o, a, pe, u);
    if (pe.loop && !J.slideLooper.canLoop()) {
      const me = Object.assign({}, pe, {
        loop: !1
      });
      return q(me);
    }
    return J;
  }
  function A(pe, J) {
    _ || (S = d(S, pe), B = c(S), D = J || D, M(), C = q(B), p([S, ...D.map(({
      options: me
    }) => me)]).forEach((me) => i.add(me, "change", z)), B.active && (C.translate.to(C.location.get()), C.animation.init(), C.slidesInView.init(), C.slideFocus.init(ue), C.eventHandler.init(ue), C.resizeHandler.init(ue), C.slidesHandler.init(ue), C.options.loop && C.slideLooper.loop(), T.offsetParent && P.length && C.dragHandler.init(ue), O = l.init(ue, D)));
  }
  function z(pe, J) {
    const me = W();
    I(), A(d({
      startIndex: me
    }, pe), J), u.emit("reInit");
  }
  function I() {
    C.dragHandler.destroy(), C.eventStore.clear(), C.translate.clear(), C.slideLooper.clear(), C.resizeHandler.destroy(), C.slidesHandler.destroy(), C.slidesInView.destroy(), C.animation.destroy(), l.destroy(), i.clear();
  }
  function Q() {
    _ || (_ = !0, i.clear(), I(), u.emit("destroy"), u.clear());
  }
  function U(pe, J, me) {
    !B.active || _ || (C.scrollBody.useBaseFriction().useDuration(J === !0 ? 0 : B.duration), C.scrollTo.index(pe, me || 0));
  }
  function N(pe) {
    const J = C.index.add(1).get();
    U(J, pe, -1);
  }
  function R(pe) {
    const J = C.index.add(-1).get();
    U(J, pe, 1);
  }
  function ae() {
    return C.index.add(1).get() !== W();
  }
  function G() {
    return C.index.add(-1).get() !== W();
  }
  function L() {
    return C.scrollSnapList;
  }
  function ee() {
    return C.scrollProgress.get(C.offsetLocation.get());
  }
  function W() {
    return C.index.get();
  }
  function _e() {
    return C.indexPrevious.get();
  }
  function ke() {
    return C.slidesInView.get();
  }
  function Be() {
    return C.slidesInView.get(!1);
  }
  function Ee() {
    return O;
  }
  function Ve() {
    return C;
  }
  function H() {
    return e;
  }
  function Y() {
    return T;
  }
  function oe() {
    return P;
  }
  const ue = {
    canScrollNext: ae,
    canScrollPrev: G,
    containerNode: Y,
    internalEngine: Ve,
    destroy: Q,
    off: v,
    on: f,
    emit: m,
    plugins: Ee,
    previousScrollSnap: _e,
    reInit: g,
    rootNode: H,
    scrollNext: N,
    scrollPrev: R,
    scrollProgress: ee,
    scrollSnapList: L,
    scrollTo: U,
    selectedScrollSnap: W,
    slideNodes: oe,
    slidesInView: ke,
    slidesNotInView: Be
  };
  return A(t, n), setTimeout(() => u.emit("init"), 0), ue;
}
Yo.globalOptions = void 0;
function as(e = {}, t = []) {
  const n = tt(e), o = tt(t);
  let a = n ? e.value : e, r = o ? t.value : t;
  const l = rt(), i = rt();
  function u() {
    i.value && i.value.reInit(a, r);
  }
  return ie(() => {
    !ly() || !l.value || (Yo.globalOptions = as.globalOptions, i.value = Yo(l.value, a, r));
  }), Fn(() => {
    i.value && i.value.destroy();
  }), n && ne(e, (d) => {
    es(a, d) || (a = d, u());
  }), o && ne(t, (d) => {
    iy(r, d) || (r = d, u());
  }), [l, i];
}
as.globalOptions = void 0;
const [qy, Ny] = Zh(
  ({ opts: e, orientation: t, plugins: n }, o) => {
    const [a, r] = as(
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
      var p, f, v;
      r.value && ((p = r.value) == null || p.on("init", c), (f = r.value) == null || f.on("reInit", c), (v = r.value) == null || v.on("select", c), o("init-api", r.value));
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
function ba() {
  const e = Ny();
  if (!e) throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const rx = /* @__PURE__ */ b({
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
    } = qy(o, a);
    t({
      canScrollNext: r,
      canScrollPrev: l,
      carouselApi: i,
      carouselRef: u,
      orientation: d,
      scrollNext: c,
      scrollPrev: p
    });
    function f(v) {
      const m = o.orientation === "vertical" ? "ArrowUp" : "ArrowLeft", g = o.orientation === "vertical" ? "ArrowDown" : "ArrowRight";
      if (v.key === m) {
        v.preventDefault(), p();
        return;
      }
      v.key === g && (v.preventDefault(), c());
    }
    return (v, m) => (h(), K("div", {
      class: le(s(V)("relative", o.class)),
      role: "region",
      "aria-roledescription": "carousel",
      tabindex: "0",
      onKeydown: f
    }, [
      w(v.$slots, "default", {
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
}), sx = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "CarouselContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { carouselRef: n, orientation: o } = ba();
    return (a, r) => (h(), K("div", {
      ref_key: "carouselRef",
      ref: n,
      class: "overflow-hidden"
    }, [
      de("div", k({
        class: s(V)("flex", s(o) === "horizontal" ? "-ml-4" : "-mt-4 flex-col", t.class)
      }, a.$attrs), [
        w(a.$slots, "default")
      ], 16)
    ], 512));
  }
}), lx = /* @__PURE__ */ b({
  __name: "CarouselItem",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { orientation: n } = ba();
    return (o, a) => (h(), K("div", {
      role: "group",
      "aria-roledescription": "slide",
      class: le(
        s(V)(
          "min-w-0 shrink-0 grow-0 basis-full",
          s(n) === "horizontal" ? "pl-4" : "pt-4",
          t.class
        )
      )
    }, [
      w(o.$slots, "default")
    ], 2));
  }
}), ix = /* @__PURE__ */ b({
  __name: "CarouselPrevious",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { orientation: n, canScrollPrev: o, scrollPrev: a } = ba();
    return (r, l) => (h(), x(s(Xi), {
      disabled: !s(o),
      class: le(
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
        w(r.$slots, "default", {}, () => [
          F(s(Ch), { class: "size-4 text-current" }),
          l[0] || (l[0] = de("span", { class: "sr-only" }, "Previous Slide", -1))
        ])
      ]),
      _: 3
    }, 8, ["disabled", "class", "onClick"]));
  }
}), ux = /* @__PURE__ */ b({
  __name: "CarouselNext",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { orientation: n, canScrollNext: o, scrollNext: a } = ba();
    return (r, l) => (h(), x(s(Xi), {
      disabled: !s(o),
      class: le(
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
        w(r.$slots, "default", {}, () => [
          F(s(Bh), { class: "size-4 text-current" }),
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
const zy = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ao = {
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
const jy = ({ size: e, strokeWidth: t = 2, absoluteStrokeWidth: n, color: o, iconNode: a, name: r, class: l, ...i }, { slots: u }) => Ze(
  "svg",
  {
    ...Ao,
    width: e || Ao.width,
    height: e || Ao.height,
    stroke: o || Ao.stroke,
    "stroke-width": n ? Number(t) * 24 / Number(e) : t,
    class: ["lucide", `lucide-${zy(r ?? "icon")}`],
    ...i
  },
  [...a.map((d) => Ze(...d)), ...u.default ? [u.default()] : []]
);
/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _o = (e, t) => (n, { slots: o }) => Ze(
  jy,
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
const Ky = _o("CheckIcon", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uu = _o("ChevronLeftIcon", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const du = _o("ChevronRightIcon", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hy = _o("EllipsisIcon", [
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
const Wy = _o("MinusIcon", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
function ol(e) {
  return typeof e == "string" ? `'${e}'` : new Uy().serialize(e);
}
const Uy = /* @__PURE__ */ function() {
  var t;
  class e {
    constructor() {
      hs(this, t, /* @__PURE__ */ new Map());
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
      let a = Xn(this, t).get(o);
      return a === void 0 && (Xn(this, t).set(o, `#${Xn(this, t).size}`), a = this.serializeObject(o), Xn(this, t).set(o, a)), a;
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
function In(e, t) {
  return e === t || ol(e) === ol(t);
}
function Gy(e, t, n) {
  const o = e.findIndex((i) => In(i, t)), a = e.findIndex((i) => In(i, n));
  if (o === -1 || a === -1) return [];
  const [r, l] = [o, a].sort((i, u) => i - u);
  return e.slice(r, l + 1);
}
function et(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, o = Symbol(n);
  return [(l) => {
    const i = un(o, l);
    if (i || i === null) return i;
    throw new Error(`Injection \`${o.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(", ")}` : `\`${e}\``}`);
  }, (l) => (dn(o, l), l)];
}
function dt() {
  let e = document.activeElement;
  if (e == null) return null;
  for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null; ) e = e.shadowRoot.activeElement;
  return e;
}
function rs(e, t, n) {
  const o = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, { once: !0 }), o.dispatchEvent(a);
}
function Xo(e) {
  return e == null;
}
function al(e, t) {
  return Xo(e) ? !1 : Array.isArray(e) ? e.some((n) => In(n, t)) : In(e, t);
}
function ss(e) {
  return e ? e.flatMap((t) => t.type === Te ? ss(t.children) : [t]) : [];
}
const [wa] = et("ConfigProvider");
function Yy(e, t) {
  var n;
  const o = rt();
  return xe(() => {
    o.value = e();
  }, {
    ...t,
    flush: (n = void 0) != null ? n : "sync"
  }), Rn(o);
}
function _a(e) {
  return Qo() ? (Jo(e), !0) : !1;
}
function No() {
  const e = /* @__PURE__ */ new Set(), t = (r) => {
    e.delete(r);
  };
  return {
    on: (r) => {
      e.add(r);
      const l = () => t(r);
      return _a(l), {
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
function Xy(e) {
  let t = !1, n;
  const o = ta(!0);
  return (...a) => (t || (n = o.run(() => e(...a)), t = !0), n);
}
function Zy(e) {
  let t = 0, n, o;
  const a = () => {
    t -= 1, o && t <= 0 && (o.stop(), n = void 0, o = void 0);
  };
  return (...r) => (t += 1, o || (o = ta(!0), n = o.run(() => e(...r))), _a(a), n);
}
const hn = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Qy = (e) => typeof e < "u", Jy = Object.prototype.toString, e0 = (e) => Jy.call(e) === "[object Object]", rl = /* @__PURE__ */ t0();
function t0() {
  var e, t;
  return hn && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function n0(e) {
  return Qe();
}
function La(e) {
  return Array.isArray(e) ? e : [e];
}
function cu(e, t = 1e4) {
  return vr((n, o) => {
    let a = Ue(e), r;
    const l = () => setTimeout(() => {
      a = Ue(e), o();
    }, Ue(t));
    return _a(() => {
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
function o0(e, t) {
  n0() && Fn(e, t);
}
function a0(e, t, n) {
  return ne(
    e,
    t,
    {
      ...n,
      immediate: !0
    }
  );
}
const ls = hn ? window : void 0;
function yn(e) {
  var t;
  const n = Ue(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
function is(...e) {
  const t = [], n = () => {
    t.forEach((i) => i()), t.length = 0;
  }, o = (i, u, d, c) => (i.addEventListener(u, d, c), () => i.removeEventListener(u, d, c)), a = $(() => {
    const i = La(Ue(e[0])).filter((u) => u != null);
    return i.every((u) => typeof u != "string") ? i : void 0;
  }), r = a0(
    () => {
      var i, u;
      return [
        (u = (i = a.value) == null ? void 0 : i.map((d) => yn(d))) != null ? u : [ls].filter((d) => d != null),
        La(Ue(a.value ? e[1] : e[0])),
        La(s(a.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        Ue(a.value ? e[3] : e[2])
      ];
    },
    ([i, u, d, c]) => {
      if (n(), !(i != null && i.length) || !(u != null && u.length) || !(d != null && d.length))
        return;
      const p = e0(c) ? { ...c } : c;
      t.push(
        ...i.flatMap(
          (f) => u.flatMap(
            (v) => d.map((m) => o(f, v, m, p))
          )
        )
      );
    },
    { flush: "post" }
  ), l = () => {
    r(), n();
  };
  return _a(n), l;
}
function r0() {
  const e = rt(!1), t = Qe();
  return t && ie(() => {
    e.value = !0;
  }, t), e;
}
function s0(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function l0(...e) {
  let t, n, o = {};
  e.length === 3 ? (t = e[0], n = e[1], o = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], o = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: a = ls,
    eventName: r = "keydown",
    passive: l = !1,
    dedupe: i = !1
  } = o, u = s0(t);
  return is(a, r, (c) => {
    c.repeat && Ue(i) || u(c) && n(c);
  }, l);
}
function i0(e) {
  return JSON.parse(JSON.stringify(e));
}
function qt(e, t, n, o = {}) {
  var a, r, l;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: c = !1,
    defaultValue: p,
    shouldEmit: f
  } = o, v = Qe(), m = n || (v == null ? void 0 : v.emit) || ((a = v == null ? void 0 : v.$emit) == null ? void 0 : a.bind(v)) || ((l = (r = v == null ? void 0 : v.proxy) == null ? void 0 : r.$emit) == null ? void 0 : l.bind(v == null ? void 0 : v.proxy));
  let g = d;
  t || (t = "modelValue"), g = g || `update:${t.toString()}`;
  const _ = (B) => i ? typeof i == "function" ? i(B) : i0(B) : B, C = () => Qy(e[t]) ? _(e[t]) : p, S = (B) => {
    f ? f(B) && m(g, B) : m(g, B);
  };
  if (u) {
    const B = C(), D = E(B);
    let O = !1;
    return ne(
      () => e[t],
      (T) => {
        O || (O = !0, D.value = _(T), se(() => O = !1));
      }
    ), ne(
      D,
      (T) => {
        !O && (T !== e[t] || c) && S(T);
      },
      { deep: c }
    ), D;
  } else
    return $({
      get() {
        return C();
      },
      set(B) {
        S(B);
      }
    });
}
function Va(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function rr(e, t, n = ".", o) {
  if (!Va(t))
    return rr(e, {}, n, o);
  const a = Object.assign({}, t);
  for (const r in e) {
    if (r === "__proto__" || r === "constructor")
      continue;
    const l = e[r];
    l != null && (o && o(a, r, l, n) || (Array.isArray(l) && Array.isArray(a[r]) ? a[r] = [...l, ...a[r]] : Va(l) && Va(a[r]) ? a[r] = rr(
      l,
      a[r],
      (n ? `${n}.` : "") + r.toString(),
      o
    ) : a[r] = l));
  }
  return a;
}
function u0(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, o) => rr(n, o, "", e), {})
  );
}
const d0 = u0(), c0 = Zy(() => {
  const e = E(/* @__PURE__ */ new Map()), t = E(), n = $(() => {
    for (const l of e.value.values()) if (l) return !0;
    return !1;
  }), o = wa({ scrollBody: E(!0) });
  let a = null;
  const r = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.documentElement.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", rl && (a == null || a()), t.value = void 0;
  };
  return ne(n, (l, i) => {
    var p;
    if (!hn) return;
    if (!l) {
      i && r();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const u = window.innerWidth - document.documentElement.clientWidth, d = {
      padding: u,
      margin: 0
    }, c = (p = o.scrollBody) != null && p.value ? typeof o.scrollBody.value == "object" ? d0({
      padding: o.scrollBody.value.padding === !0 ? u : o.scrollBody.value.padding,
      margin: o.scrollBody.value.margin === !0 ? u : o.scrollBody.value.margin
    }, d) : d : {
      padding: 0,
      margin: 0
    };
    u > 0 && (document.body.style.paddingRight = typeof c.padding == "number" ? `${c.padding}px` : String(c.padding), document.body.style.marginRight = typeof c.margin == "number" ? `${c.margin}px` : String(c.margin), document.documentElement.style.setProperty("--scrollbar-width", `${u}px`), document.body.style.overflow = "hidden"), rl && (a = is(document, "touchmove", (f) => p0(f), { passive: !1 })), se(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, {
    immediate: !0,
    flush: "sync"
  }), e;
});
function pu(e) {
  const t = Math.random().toString(36).substring(2, 7), n = c0();
  n.value.set(t, e ?? !1);
  const o = $({
    get: () => n.value.get(t) ?? !1,
    set: (a) => n.value.set(t, a)
  });
  return o0(() => {
    n.value.delete(t);
  }), o;
}
function fu(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight) return !0;
  {
    const n = e.parentNode;
    return !(n instanceof Element) || n.tagName === "BODY" ? !1 : fu(n);
  }
}
function p0(e) {
  const t = e || window.event, n = t.target;
  return n instanceof Element && fu(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
function vu(e) {
  const t = wa({ dir: E("ltr") });
  return $(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.dir) == null ? void 0 : n.value) || "ltr";
  });
}
function xa(e) {
  const t = Qe(), n = t == null ? void 0 : t.type.emits, o = {};
  return n != null && n.length || console.warn(`No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`), n == null || n.forEach((a) => {
    o[gl(ea(a))] = (...r) => e(a, ...r);
  }), o;
}
function f0(e) {
  const t = $(() => s(e)), n = $(() => new Intl.Collator("en", {
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
function mu(e) {
  return $(() => {
    var t;
    return Ue(e) ? !!((t = yn(e)) != null && t.closest("form")) : !0;
  });
}
function we() {
  const e = Qe(), t = E(), n = $(() => {
    var l, i;
    return ["#text", "#comment"].includes((l = t.value) == null ? void 0 : l.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : yn(t);
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
    if (t.value = l, !!l && (Object.defineProperty(a, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => l instanceof Element ? l : l.$el
    }), !(l instanceof Element) && !Object.hasOwn(l, "$el"))) {
      const i = l.$.exposed, u = Object.assign({}, a);
      for (const d in i) Object.defineProperty(u, d, {
        enumerable: !0,
        configurable: !0,
        get: () => i[d]
      });
      e.exposed = u;
    }
  }
  return {
    forwardRef: r,
    currentRef: t,
    currentElement: n
  };
}
function xt(e) {
  const t = Qe(), n = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((a, r) => {
    const l = (t == null ? void 0 : t.type.props[r]).default;
    return l !== void 0 && (a[r] = l), a;
  }, {}), o = ir(e);
  return $(() => {
    const a = {}, r = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(r).forEach((l) => {
      a[ea(l)] = r[l];
    }), Object.keys({
      ...n,
      ...a
    }).reduce((l, i) => (o.value[i] !== void 0 && (l[i] = o.value[i]), l), {});
  });
}
function Ct(e, t) {
  const n = xt(e), o = t ? xa(t) : {};
  return $(() => ({
    ...n.value,
    ...o
  }));
}
var v0 = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Sn = /* @__PURE__ */ new WeakMap(), To = /* @__PURE__ */ new WeakMap(), Io = {}, qa = 0, gu = function(e) {
  return e && (e.host || gu(e.parentNode));
}, m0 = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = gu(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, g0 = function(e, t, n, o) {
  var a = m0(t, Array.isArray(e) ? e : [e]);
  Io[n] || (Io[n] = /* @__PURE__ */ new WeakMap());
  var r = Io[n], l = [], i = /* @__PURE__ */ new Set(), u = new Set(a), d = function(p) {
    !p || i.has(p) || (i.add(p), d(p.parentNode));
  };
  a.forEach(d);
  var c = function(p) {
    !p || u.has(p) || Array.prototype.forEach.call(p.children, function(f) {
      if (i.has(f))
        c(f);
      else
        try {
          var v = f.getAttribute(o), m = v !== null && v !== "false", g = (Sn.get(f) || 0) + 1, _ = (r.get(f) || 0) + 1;
          Sn.set(f, g), r.set(f, _), l.push(f), g === 1 && m && To.set(f, !0), _ === 1 && f.setAttribute(n, "true"), m || f.setAttribute(o, "true");
        } catch (C) {
          console.error("aria-hidden: cannot operate on ", f, C);
        }
    });
  };
  return c(t), i.clear(), qa++, function() {
    l.forEach(function(p) {
      var f = Sn.get(p) - 1, v = r.get(p) - 1;
      Sn.set(p, f), r.set(p, v), f || (To.has(p) || p.removeAttribute(o), To.delete(p)), v || p.removeAttribute(n);
    }), qa--, qa || (Sn = /* @__PURE__ */ new WeakMap(), Sn = /* @__PURE__ */ new WeakMap(), To = /* @__PURE__ */ new WeakMap(), Io = {});
  };
}, h0 = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), a = v0(e);
  return a ? (o.push.apply(o, Array.from(a.querySelectorAll("[aria-live], script"))), g0(o, a, n, "aria-hidden")) : function() {
    return null;
  };
};
function hu(e) {
  let t;
  ne(() => yn(e), (n) => {
    n ? t = h0(n) : t && t();
  }), Ke(() => {
    t && t();
  });
}
let y0 = 0;
function wt(e, t = "reka") {
  var o;
  if ("useId" in On) return `${t}-${(o = On.useId) == null ? void 0 : o.call(On)}`;
  const n = wa({ useId: void 0 });
  return n.useId ? `${t}-${n.useId()}` : `${t}-${++y0}`;
}
function b0() {
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
function w0(e) {
  const t = E(), n = $(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.width) ?? 0;
  }), o = $(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.height) ?? 0;
  });
  return ie(() => {
    const a = yn(e);
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
function _0(e, t) {
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
function x0(e) {
  const t = cu("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (a, r) => {
      t.value = t.value + a;
      {
        const l = dt(), i = r.map((f) => {
          var v, m;
          return {
            ...f,
            textValue: ((v = f.value) == null ? void 0 : v.textValue) ?? ((m = f.ref.textContent) == null ? void 0 : m.trim()) ?? ""
          };
        }), u = i.find((f) => f.ref === l), d = i.map((f) => f.textValue), c = B0(d, t.value, u == null ? void 0 : u.textValue), p = i.find((f) => f.textValue === c);
        return p && p.ref.focus(), p == null ? void 0 : p.ref;
      }
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function C0(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
function B0(e, t, n) {
  const a = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, r = n ? e.indexOf(n) : -1;
  let l = C0(e, Math.max(r, 0));
  a.length === 1 && (l = l.filter((d) => d !== n));
  const u = l.find((d) => d.toLowerCase().startsWith(a.toLowerCase()));
  return u !== n ? u : void 0;
}
function S0(e, t) {
  var _;
  const n = E({}), o = E("none"), a = E(e), r = e.value ? "mounted" : "unmounted";
  let l;
  const i = ((_ = t.value) == null ? void 0 : _.ownerDocument.defaultView) ?? ls, { state: u, dispatch: d } = _0(r, {
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
    var S;
    if (hn) {
      const B = new CustomEvent(C, {
        bubbles: !1,
        cancelable: !1
      });
      (S = t.value) == null || S.dispatchEvent(B);
    }
  };
  ne(e, async (C, S) => {
    var D;
    const B = S !== C;
    if (await se(), B) {
      const O = o.value, T = Mo(t.value);
      C ? (d("MOUNT"), c("enter"), T === "none" && c("after-enter")) : T === "none" || T === "undefined" || ((D = n.value) == null ? void 0 : D.display) === "none" ? (d("UNMOUNT"), c("leave"), c("after-leave")) : S && O !== T ? (d("ANIMATION_OUT"), c("leave")) : (d("UNMOUNT"), c("after-leave"));
    }
  }, { immediate: !0 });
  const p = (C) => {
    const S = Mo(t.value), B = S.includes(CSS.escape(C.animationName)), D = u.value === "mounted" ? "enter" : "leave";
    if (C.target === t.value && B && (c(`after-${D}`), d("ANIMATION_END"), !a.value)) {
      const O = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", l = i == null ? void 0 : i.setTimeout(() => {
        var T;
        ((T = t.value) == null ? void 0 : T.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = O);
      });
    }
    C.target === t.value && S === "none" && d("ANIMATION_END");
  }, f = (C) => {
    C.target === t.value && (o.value = Mo(t.value));
  }, v = ne(t, (C, S) => {
    C ? (n.value = getComputedStyle(C), C.addEventListener("animationstart", f), C.addEventListener("animationcancel", p), C.addEventListener("animationend", p)) : (d("ANIMATION_END"), l !== void 0 && (i == null || i.clearTimeout(l)), S == null || S.removeEventListener("animationstart", f), S == null || S.removeEventListener("animationcancel", p), S == null || S.removeEventListener("animationend", p));
  }, { immediate: !0 }), m = ne(u, () => {
    const C = Mo(t.value);
    o.value = u.value === "mounted" ? C : "none";
  });
  return Ke(() => {
    v(), m();
  }), { isPresent: $(() => ["mounted", "unmountSuspended"].includes(u.value)) };
}
function Mo(e) {
  return e && getComputedStyle(e).animationName || "none";
}
var xo = b({
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
    const { present: o, forceMount: a } = ye(e), r = E(), { isPresent: l } = S0(o, r);
    n({ present: l });
    let i = t.default({ present: l.value });
    i = ss(i || []);
    const u = Qe();
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
    return () => a.value || o.value || l.value ? Ze(t.default({ present: l.value })[0], { ref: (c) => {
      const p = yn(c);
      return typeof (p == null ? void 0 : p.hasAttribute) > "u" || (p != null && p.hasAttribute("data-reka-popper-content-wrapper") ? r.value = p.firstElementChild : r.value = p), p;
    } }) : null;
  }
});
const sr = b({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      var u;
      if (!n.default) return null;
      const o = ss(n.default()), a = o.findIndex((d) => d.type !== cr);
      if (a === -1) return o;
      const r = o[a];
      (u = r.props) == null || delete u.ref;
      const l = r.props ? k(t, r.props) : t, i = hl({
        ...r,
        props: {}
      }, l);
      return o.length === 1 ? i : (o[a] = i, o);
    };
  }
}), $0 = [
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
    return typeof o == "string" && $0.includes(o) ? () => Ze(o, t) : o !== "template" ? () => Ze(e.as, t, { default: n.default }) : () => Ze(sr, t, { default: n.default });
  }
});
function Qt() {
  const e = E(), t = $(() => {
    var n, o;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (o = e.value) == null ? void 0 : o.$el.nextElementSibling : yn(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
const [yu, O0] = et("CollapsibleRoot");
var E0 = /* @__PURE__ */ b({
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
    const o = e, r = qt(o, "open", n, {
      defaultValue: o.defaultOpen,
      passive: o.open === void 0
    }), { disabled: l, unmountOnHide: i } = ye(o);
    return O0({
      contentId: "",
      disabled: l,
      open: r,
      unmountOnHide: i,
      onOpenToggle: () => {
        l.value || (r.value = !r.value);
      }
    }), t({ open: r }), we(), (u, d) => (h(), x(s(ge), {
      as: u.as,
      "as-child": o.asChild,
      "data-state": s(r) ? "open" : "closed",
      "data-disabled": s(l) ? "" : void 0
    }, {
      default: y(() => [w(u.$slots, "default", { open: s(r) })]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "data-state",
      "data-disabled"
    ]));
  }
}), P0 = E0, k0 = /* @__PURE__ */ b({
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
    const n = e, o = t, a = yu();
    a.contentId || (a.contentId = wt(void 0, "reka-collapsible-content"));
    const r = E(), { forwardRef: l, currentElement: i } = we(), u = E(0), d = E(0), c = $(() => a.open.value), p = E(c.value), f = E();
    ne(() => {
      var m;
      return [c.value, (m = r.value) == null ? void 0 : m.present];
    }, async () => {
      await se();
      const m = i.value;
      if (!m) return;
      f.value = f.value || {
        transitionDuration: m.style.transitionDuration,
        animationName: m.style.animationName
      }, m.style.transitionDuration = "0s", m.style.animationName = "none";
      const g = m.getBoundingClientRect();
      d.value = g.height, u.value = g.width, p.value || (m.style.transitionDuration = f.value.transitionDuration, m.style.animationName = f.value.animationName);
    }, { immediate: !0 });
    const v = $(() => p.value && a.open.value);
    return ie(() => {
      requestAnimationFrame(() => {
        p.value = !1;
      });
    }), is(i, "beforematch", (m) => {
      requestAnimationFrame(() => {
        a.onOpenToggle(), o("contentFound");
      });
    }), (m, g) => (h(), x(s(xo), {
      ref_key: "presentRef",
      ref: r,
      present: m.forceMount || s(a).open.value,
      "force-mount": !0
    }, {
      default: y(({ present: _ }) => {
        var C;
        return [F(s(ge), k(m.$attrs, {
          id: s(a).contentId,
          ref: s(l),
          "as-child": n.asChild,
          as: m.as,
          hidden: _ ? void 0 : s(a).unmountOnHide.value ? "" : "until-found",
          "data-state": v.value ? void 0 : s(a).open.value ? "open" : "closed",
          "data-disabled": (C = s(a).disabled) != null && C.value ? "" : void 0,
          style: {
            "--reka-collapsible-content-height": `${d.value}px`,
            "--reka-collapsible-content-width": `${u.value}px`
          }
        }), {
          default: y(() => [!s(a).unmountOnHide.value || _ ? w(m.$slots, "default", { key: 0 }) : he("v-if", !0)]),
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
}), D0 = k0, A0 = /* @__PURE__ */ b({
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
    we();
    const n = yu();
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
        default: y(() => [w(o.$slots, "default")]),
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
}), T0 = A0;
const [kt, I0] = et("DialogRoot");
var M0 = /* @__PURE__ */ b({
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
    const n = e, a = qt(n, "open", t, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), r = E(), l = E(), { modal: i } = ye(n);
    return I0({
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
    }), (u, d) => w(u.$slots, "default", {
      open: s(a),
      close: () => a.value = !1
    });
  }
}), F0 = M0, R0 = /* @__PURE__ */ b({
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
    we();
    const n = kt();
    return (o, a) => (h(), x(s(ge), k(t, {
      type: o.as === "button" ? "button" : void 0,
      onClick: a[0] || (a[0] = (r) => s(n).onOpenChange(!1))
    }), {
      default: y(() => [w(o.$slots, "default")]),
      _: 3
    }, 16, ["type"]));
  }
}), L0 = R0;
const V0 = "dismissableLayer.pointerDownOutside", q0 = "dismissableLayer.focusOutside";
function bu(e, t) {
  const n = t.closest("[data-dismissable-layer]"), o = e.dataset.dismissableLayer === "" ? e : e.querySelector("[data-dismissable-layer]"), a = Array.from(e.ownerDocument.querySelectorAll("[data-dismissable-layer]"));
  return !!(n && (o === n || a.indexOf(o) < a.indexOf(n)));
}
function N0(e, t, n = !0) {
  var l;
  const o = ((l = t == null ? void 0 : t.value) == null ? void 0 : l.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), a = E(!1), r = E(() => {
  });
  return xe((i) => {
    if (!hn || !Ue(n)) return;
    const u = async (c) => {
      const p = c.target;
      if (!(!(t != null && t.value) || !p)) {
        if (bu(t.value, p)) {
          a.value = !1;
          return;
        }
        if (c.target && !a.value) {
          let v = function() {
            rs(V0, e, f);
          };
          const f = { originalEvent: c };
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
    Ue(n) && (a.value = !0);
  } };
}
function z0(e, t, n = !0) {
  var r;
  const o = ((r = t == null ? void 0 : t.value) == null ? void 0 : r.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), a = E(!1);
  return xe((l) => {
    if (!hn || !Ue(n)) return;
    const i = async (u) => {
      if (!(t != null && t.value)) return;
      await se(), await se();
      const d = u.target;
      !t.value || !d || bu(t.value, d) || u.target && !a.value && rs(q0, e, { originalEvent: u });
    };
    o.addEventListener("focusin", i), l(() => o.removeEventListener("focusin", i));
  }), {
    onFocusCapture: () => {
      Ue(n) && (a.value = !0);
    },
    onBlurCapture: () => {
      Ue(n) && (a.value = !1);
    }
  };
}
const ut = Yt({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  originalBodyPointerEvents: void 0,
  branches: /* @__PURE__ */ new Set()
});
var j0 = /* @__PURE__ */ b({
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
    const n = e, o = t, { forwardRef: a, currentElement: r } = we(), l = $(() => {
      var v;
      return ((v = r.value) == null ? void 0 : v.ownerDocument) ?? globalThis.document;
    }), i = $(() => ut.layersRoot), u = $(() => r.value ? Array.from(i.value).indexOf(r.value) : -1), d = $(() => ut.layersWithOutsidePointerEventsDisabled.size > 0), c = $(() => {
      const v = Array.from(i.value), [m] = [...ut.layersWithOutsidePointerEventsDisabled].slice(-1), g = v.indexOf(m);
      return u.value >= g;
    }), p = N0(async (v) => {
      const m = [...ut.branches].some((g) => g == null ? void 0 : g.contains(v.target));
      !c.value || m || (o("pointerDownOutside", v), o("interactOutside", v), await se(), v.defaultPrevented || o("dismiss"));
    }, r), f = z0((v) => {
      [...ut.branches].some((g) => g == null ? void 0 : g.contains(v.target)) || (o("focusOutside", v), o("interactOutside", v), v.defaultPrevented || o("dismiss"));
    }, r);
    return l0("Escape", (v) => {
      u.value === i.value.size - 1 && (o("escapeKeyDown", v), v.defaultPrevented || o("dismiss"));
    }), xe((v) => {
      r.value && (n.disableOutsidePointerEvents && (ut.layersWithOutsidePointerEventsDisabled.size === 0 && (ut.originalBodyPointerEvents = l.value.body.style.pointerEvents, l.value.body.style.pointerEvents = "none"), ut.layersWithOutsidePointerEventsDisabled.add(r.value)), i.value.add(r.value), v(() => {
        n.disableOutsidePointerEvents && ut.layersWithOutsidePointerEventsDisabled.size === 1 && !Xo(ut.originalBodyPointerEvents) && (l.value.body.style.pointerEvents = ut.originalBodyPointerEvents);
      }));
    }), xe((v) => {
      v(() => {
        r.value && (i.value.delete(r.value), ut.layersWithOutsidePointerEventsDisabled.delete(r.value));
      });
    }), (v, m) => (h(), x(s(ge), {
      ref: s(a),
      "as-child": v.asChild,
      as: v.as,
      "data-dismissable-layer": "",
      style: _t({ pointerEvents: d.value ? c.value ? "auto" : "none" : void 0 }),
      onFocusCapture: s(f).onFocusCapture,
      onBlurCapture: s(f).onBlurCapture,
      onPointerdownCapture: s(p).onPointerDownCapture
    }, {
      default: y(() => [w(v.$slots, "default")]),
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
}), wu = j0;
const K0 = Xy(() => E([]));
function H0() {
  const e = K0();
  return {
    add(t) {
      const n = e.value[0];
      t !== n && (n == null || n.pause()), e.value = sl(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var n;
      e.value = sl(e.value, t), (n = e.value[0]) == null || n.resume();
    }
  };
}
function sl(e, t) {
  const n = [...e], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function W0(e) {
  return e.filter((t) => t.tagName !== "A");
}
const Na = "focusScope.autoFocusOnMount", za = "focusScope.autoFocusOnUnmount", ll = {
  bubbles: !1,
  cancelable: !0
};
function U0(e, { select: t = !1 } = {}) {
  const n = dt();
  for (const o of e)
    if (Ut(o, { select: t }), dt() !== n) return !0;
}
function G0(e) {
  const t = _u(e), n = il(t, e), o = il(t.reverse(), e);
  return [n, o];
}
function _u(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (o) => {
    const a = o.tagName === "INPUT" && o.type === "hidden";
    return o.disabled || o.hidden || a ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function il(e, t) {
  for (const n of e) if (!Y0(n, { upTo: t })) return n;
}
function Y0(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function X0(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Ut(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = dt();
    e.focus({ preventScroll: !0 }), e !== n && X0(e) && t && e.select();
  }
}
var Z0 = /* @__PURE__ */ b({
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
    const n = e, o = t, { currentRef: a, currentElement: r } = we(), l = E(null), i = H0(), u = Yt({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    xe((c) => {
      if (!hn) return;
      const p = r.value;
      if (!n.trapped) return;
      function f(_) {
        if (u.paused || !p) return;
        const C = _.target;
        p.contains(C) ? l.value = C : Ut(l.value, { select: !0 });
      }
      function v(_) {
        if (u.paused || !p) return;
        const C = _.relatedTarget;
        C !== null && (p.contains(C) || Ut(l.value, { select: !0 }));
      }
      function m(_) {
        p.contains(l.value) || Ut(p);
      }
      document.addEventListener("focusin", f), document.addEventListener("focusout", v);
      const g = new MutationObserver(m);
      p && g.observe(p, {
        childList: !0,
        subtree: !0
      }), c(() => {
        document.removeEventListener("focusin", f), document.removeEventListener("focusout", v), g.disconnect();
      });
    }), xe(async (c) => {
      const p = r.value;
      if (await se(), !p) return;
      i.add(u);
      const f = dt();
      if (!p.contains(f)) {
        const m = new CustomEvent(Na, ll);
        p.addEventListener(Na, (g) => o("mountAutoFocus", g)), p.dispatchEvent(m), m.defaultPrevented || (U0(W0(_u(p)), { select: !0 }), dt() === f && Ut(p));
      }
      c(() => {
        p.removeEventListener(Na, (_) => o("mountAutoFocus", _));
        const m = new CustomEvent(za, ll), g = (_) => {
          o("unmountAutoFocus", _);
        };
        p.addEventListener(za, g), p.dispatchEvent(m), setTimeout(() => {
          m.defaultPrevented || Ut(f ?? document.body, { select: !0 }), p.removeEventListener(za, g), i.remove(u);
        }, 0);
      });
    });
    function d(c) {
      if (!n.loop && !n.trapped || u.paused) return;
      const p = c.key === "Tab" && !c.altKey && !c.ctrlKey && !c.metaKey, f = dt();
      if (p && f) {
        const v = c.currentTarget, [m, g] = G0(v);
        m && g ? !c.shiftKey && f === g ? (c.preventDefault(), n.loop && Ut(m, { select: !0 })) : c.shiftKey && f === m && (c.preventDefault(), n.loop && Ut(g, { select: !0 })) : f === v && c.preventDefault();
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
      default: y(() => [w(c.$slots, "default")]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), Q0 = Z0;
function J0(e) {
  return e ? "open" : "closed";
}
const eb = "DialogTitle", tb = "DialogContent";
function nb({ titleName: e = eb, contentName: t = tb, componentLink: n = "dialog.html#title", titleId: o, descriptionId: a, contentElement: r }) {
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
var ob = /* @__PURE__ */ b({
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
    const n = e, o = t, a = kt(), { forwardRef: r, currentElement: l } = we();
    return a.titleId || (a.titleId = wt(void 0, "reka-dialog-title")), a.descriptionId || (a.descriptionId = wt(void 0, "reka-dialog-description")), ie(() => {
      a.contentElement = l, dt() !== document.body && (a.triggerElement.value = dt());
    }), process.env.NODE_ENV !== "production" && nb({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: a.titleId,
      descriptionId: a.descriptionId,
      contentElement: l
    }), (i, u) => (h(), x(s(Q0), {
      "as-child": "",
      loop: "",
      trapped: n.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => o("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => o("closeAutoFocus", d))
    }, {
      default: y(() => [F(s(wu), k({
        id: s(a).contentId,
        ref: s(r),
        as: i.as,
        "as-child": i.asChild,
        "disable-outside-pointer-events": i.disableOutsidePointerEvents,
        role: "dialog",
        "aria-describedby": s(a).descriptionId,
        "aria-labelledby": s(a).titleId,
        "data-state": s(J0)(s(a).open.value)
      }, i.$attrs, {
        onDismiss: u[0] || (u[0] = (d) => s(a).onOpenChange(!1)),
        onEscapeKeyDown: u[1] || (u[1] = (d) => o("escapeKeyDown", d)),
        onFocusOutside: u[2] || (u[2] = (d) => o("focusOutside", d)),
        onInteractOutside: u[3] || (u[3] = (d) => o("interactOutside", d)),
        onPointerDownOutside: u[4] || (u[4] = (d) => o("pointerDownOutside", d))
      }), {
        default: y(() => [w(i.$slots, "default")]),
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
}), xu = ob, ab = /* @__PURE__ */ b({
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
    const n = e, o = t, a = kt(), r = xa(o), { forwardRef: l, currentElement: i } = we();
    return hu(i), (u, d) => (h(), x(xu, k({
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
        const p = c.detail.originalEvent, f = p.button === 0 && p.ctrlKey === !0;
        (p.button === 2 || f) && c.preventDefault();
      }),
      onFocusOutside: d[2] || (d[2] = (c) => {
        c.preventDefault();
      })
    }), {
      default: y(() => [w(u.$slots, "default")]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), rb = ab, sb = /* @__PURE__ */ b({
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
    const n = e, a = xa(t);
    we();
    const r = kt(), l = E(!1), i = E(!1);
    return (u, d) => (h(), x(xu, k({
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
      default: y(() => [w(u.$slots, "default")]),
      _: 3
    }, 16));
  }
}), lb = sb, ib = /* @__PURE__ */ b({
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
    const n = e, o = t, a = kt(), r = xa(o), { forwardRef: l } = we();
    return (i, u) => (h(), x(s(xo), { present: i.forceMount || s(a).open.value }, {
      default: y(() => [s(a).modal.value ? (h(), x(rb, k({
        key: 0,
        ref: s(l)
      }, {
        ...n,
        ...s(r),
        ...i.$attrs
      }), {
        default: y(() => [w(i.$slots, "default")]),
        _: 3
      }, 16)) : (h(), x(lb, k({
        key: 1,
        ref: s(l)
      }, {
        ...n,
        ...s(r),
        ...i.$attrs
      }), {
        default: y(() => [w(i.$slots, "default")]),
        _: 3
      }, 16))]),
      _: 3
    }, 8, ["present"]));
  }
}), ub = ib, db = /* @__PURE__ */ b({
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
    we();
    const n = kt();
    return (o, a) => (h(), x(s(ge), k(t, { id: s(n).descriptionId }), {
      default: y(() => [w(o.$slots, "default")]),
      _: 3
    }, 16, ["id"]));
  }
}), cb = db, pb = /* @__PURE__ */ b({
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
    return pu(!0), we(), (n, o) => (h(), x(s(ge), {
      as: n.as,
      "as-child": n.asChild,
      "data-state": s(t).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" }
    }, {
      default: y(() => [w(n.$slots, "default")]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "data-state"
    ]));
  }
}), fb = pb, vb = /* @__PURE__ */ b({
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
    const t = kt(), { forwardRef: n } = we();
    return (o, a) => {
      var r;
      return (r = s(t)) != null && r.modal.value ? (h(), x(s(xo), {
        key: 0,
        present: o.forceMount || s(t).open.value
      }, {
        default: y(() => [F(fb, k(o.$attrs, {
          ref: s(n),
          as: o.as,
          "as-child": o.asChild
        }), {
          default: y(() => [w(o.$slots, "default")]),
          _: 3
        }, 16, ["as", "as-child"])]),
        _: 3
      }, 8, ["present"])) : he("v-if", !0);
    };
  }
}), mb = vb, gb = /* @__PURE__ */ b({
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
    const t = r0();
    return (n, o) => s(t) || n.forceMount ? (h(), x(po, {
      key: 0,
      to: n.to,
      disabled: n.disabled,
      defer: n.defer
    }, [w(n.$slots, "default")], 8, [
      "to",
      "disabled",
      "defer"
    ])) : he("v-if", !0);
  }
}), Cu = gb, hb = /* @__PURE__ */ b({
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
    return (n, o) => (h(), x(s(Cu), Z(te(t)), {
      default: y(() => [w(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), yb = hb, bb = /* @__PURE__ */ b({
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
    return we(), (o, a) => (h(), x(s(ge), k(t, { id: s(n).titleId }), {
      default: y(() => [w(o.$slots, "default")]),
      _: 3
    }, 16, ["id"]));
  }
}), wb = bb, _b = /* @__PURE__ */ b({
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
    const t = e, n = kt(), { forwardRef: o, currentElement: a } = we();
    return n.contentId || (n.contentId = wt(void 0, "reka-dialog-content")), ie(() => {
      n.triggerElement.value = a.value;
    }), (r, l) => (h(), x(s(ge), k(t, {
      ref: s(o),
      type: r.as === "button" ? "button" : void 0,
      "aria-haspopup": "dialog",
      "aria-expanded": s(n).open.value || !1,
      "aria-controls": s(n).open.value ? s(n).contentId : void 0,
      "data-state": s(n).open.value ? "open" : "closed",
      onClick: s(n).onOpenToggle
    }), {
      default: y(() => [w(r.$slots, "default")]),
      _: 3
    }, 16, [
      "type",
      "aria-expanded",
      "aria-controls",
      "data-state",
      "onClick"
    ]));
  }
}), xb = _b;
const ul = "data-reka-collection-item";
function Ca(e = {}) {
  const { key: t = "", isProvider: n = !1 } = e, o = `${t}CollectionProvider`;
  let a;
  if (n) {
    const c = E(/* @__PURE__ */ new Map());
    a = {
      collectionRef: E(),
      itemMap: c
    }, dn(o, a);
  } else a = un(o);
  const r = (c = !1) => {
    const p = a.collectionRef.value;
    if (!p) return [];
    const f = Array.from(p.querySelectorAll(`[${ul}]`)), m = Array.from(a.itemMap.value.values()).sort((g, _) => f.indexOf(g.ref) - f.indexOf(_.ref));
    return c ? m : m.filter((g) => g.ref.dataset.disabled !== "");
  }, l = b({
    name: "CollectionSlot",
    setup(c, { slots: p }) {
      const { primitiveElement: f, currentElement: v } = Qt();
      return ne(v, () => {
        a.collectionRef.value = v.value;
      }), () => Ze(sr, { ref: f }, p);
    }
  }), i = b({
    name: "CollectionItem",
    inheritAttrs: !1,
    props: { value: { validator: () => !0 } },
    setup(c, { slots: p, attrs: f }) {
      const { primitiveElement: v, currentElement: m } = Qt();
      return xe((g) => {
        if (m.value) {
          const _ = yl(m.value);
          a.itemMap.value.set(_, {
            ref: m.value,
            value: c.value
          }), g(() => a.itemMap.value.delete(_));
        }
      }), () => Ze(sr, {
        ...f,
        [ul]: "",
        ref: v
      }, p);
    }
  }), u = $(() => Array.from(a.itemMap.value.values())), d = $(() => a.itemMap.value.size);
  return {
    getItems: r,
    reactiveItems: u,
    itemMapSize: d,
    CollectionSlot: l,
    CollectionItem: i
  };
}
const Cb = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Bb(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Bu(e, t, n) {
  const o = Bb(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o)))
    return Cb[o];
}
function Sb(e, t = !1) {
  const n = dt();
  for (const o of e)
    if (o === n || (o.focus({ preventScroll: t }), dt() !== n)) return;
}
function $b(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
const [Ob] = et("RovingFocusGroup");
var Eb = /* @__PURE__ */ b({
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
    const t = e, n = Ob(), o = wt(), a = $(() => t.tabStopId || o), r = $(() => n.currentTabStopId.value === a.value), { getItems: l, CollectionItem: i } = Ca();
    ie(() => {
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
      const c = Bu(d, n.orientation.value, n.dir.value);
      if (c !== void 0) {
        if (d.metaKey || d.ctrlKey || d.altKey || !t.allowShiftKey && d.shiftKey) return;
        d.preventDefault();
        let p = [...l().map((f) => f.ref).filter((f) => f.dataset.disabled !== "")];
        if (c === "last") p.reverse();
        else if (c === "prev" || c === "next") {
          c === "prev" && p.reverse();
          const f = p.indexOf(d.currentTarget);
          p = n.loop.value ? $b(p, f + 1) : p.slice(f + 1);
        }
        se(() => Sb(p));
      }
    }
    return (d, c) => (h(), x(s(i), null, {
      default: y(() => [F(s(ge), {
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
        default: y(() => [w(d.$slots, "default")]),
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
}), Pb = Eb, kb = /* @__PURE__ */ b({
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
      default: y(() => [w(t.$slots, "default")]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "aria-hidden",
      "data-hidden",
      "tabindex"
    ]));
  }
}), Db = kb, Ab = /* @__PURE__ */ b({
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
    const t = e, { primitiveElement: n, currentElement: o } = Qt(), a = $(() => t.checked ?? t.value);
    return ne(a, (r, l) => {
      if (!o.value) return;
      const i = o.value, u = window.HTMLInputElement.prototype, c = Object.getOwnPropertyDescriptor(u, "value").set;
      if (c && r !== l) {
        const p = new Event("input", { bubbles: !0 }), f = new Event("change", { bubbles: !0 });
        c.call(i, r), i.dispatchEvent(p), i.dispatchEvent(f);
      }
    }), (r, l) => (h(), x(Db, k({
      ref_key: "primitiveElement",
      ref: n
    }, {
      ...t,
      ...r.$attrs
    }, { as: "input" }), null, 16));
  }
}), dl = Ab, Tb = /* @__PURE__ */ b({
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
    const t = e, n = $(() => typeof t.value == "object" && Array.isArray(t.value) && t.value.length === 0 && t.required), o = $(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" || t.value === null || t.value === void 0 ? [{
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
    return (a, r) => (h(), K(Te, null, [he(" We render single input if it's required "), n.value ? (h(), x(dl, k({ key: a.name }, {
      ...t,
      ...a.$attrs
    }, {
      name: a.name,
      value: a.value
    }), null, 16, ["name", "value"])) : (h(!0), K(Te, { key: 1 }, Gt(o.value, (l) => (h(), x(dl, k({ key: l.name }, { ref_for: !0 }, {
      ...t,
      ...a.$attrs
    }, {
      name: l.name,
      value: l.value
    }), null, 16, ["name", "value"]))), 128))], 2112));
  }
}), Su = Tb;
const [Ib] = et("CheckboxGroupRoot");
function Zo(e) {
  return e === "indeterminate";
}
function $u(e) {
  return Zo(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const [Mb, Fb] = et("CheckboxRoot");
var Rb = /* @__PURE__ */ b({
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
    const n = e, o = t, { forwardRef: a, currentElement: r } = we(), l = Ib(null), i = qt(n, "modelValue", o, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), u = $(() => (l == null ? void 0 : l.disabled.value) || n.disabled), d = $(() => Xo(l == null ? void 0 : l.modelValue.value) ? i.value === "indeterminate" ? "indeterminate" : i.value : al(l.modelValue.value, n.value));
    function c() {
      if (Xo(l == null ? void 0 : l.modelValue.value))
        i.value = Zo(i.value) ? !0 : !i.value;
      else {
        const v = [...l.modelValue.value || []];
        if (al(v, n.value)) {
          const m = v.findIndex((g) => In(g, n.value));
          v.splice(m, 1);
        } else v.push(n.value);
        l.modelValue.value = v;
      }
    }
    const p = mu(r), f = $(() => {
      var v;
      return n.id && r.value ? (v = document.querySelector(`[for="${n.id}"]`)) == null ? void 0 : v.innerText : void 0;
    });
    return Fb({
      disabled: u,
      state: d
    }), (v, m) => {
      var g, _;
      return h(), x(lt((g = s(l)) != null && g.rovingFocus.value ? s(Pb) : s(ge)), k(v.$attrs, {
        id: v.id,
        ref: s(a),
        role: "checkbox",
        "as-child": v.asChild,
        as: v.as,
        type: v.as === "button" ? "button" : void 0,
        "aria-checked": s(Zo)(d.value) ? "mixed" : d.value,
        "aria-required": v.required,
        "aria-label": v.$attrs["aria-label"] || f.value,
        "data-state": s($u)(d.value),
        "data-disabled": u.value ? "" : void 0,
        disabled: u.value,
        focusable: (_ = s(l)) != null && _.rovingFocus.value ? !u.value : void 0,
        onKeydown: ot(Fe(() => {
        }, ["prevent"]), ["enter"]),
        onClick: c
      }), {
        default: y(() => [w(v.$slots, "default", {
          modelValue: s(i),
          state: d.value
        }), s(p) && v.name && !s(l) ? (h(), x(s(Su), {
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
        ])) : he("v-if", !0)]),
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
}), Lb = Rb, Vb = /* @__PURE__ */ b({
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
    const { forwardRef: t } = we(), n = Mb();
    return (o, a) => (h(), x(s(xo), { present: o.forceMount || s(Zo)(s(n).state.value) || s(n).state.value === !0 }, {
      default: y(() => [F(s(ge), k({
        ref: s(t),
        "data-state": s($u)(s(n).state.value),
        "data-disabled": s(n).disabled.value ? "" : void 0,
        style: { pointerEvents: "none" },
        "as-child": o.asChild,
        as: o.as
      }, o.$attrs), {
        default: y(() => [w(o.$slots, "default")]),
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
}), qb = Vb;
const [Ou, Nb] = et("PopperRoot");
var zb = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = E();
    return Nb({
      anchor: t,
      onAnchorChange: (n) => t.value = n
    }), (n, o) => w(n.$slots, "default");
  }
}), jb = zb, Kb = /* @__PURE__ */ b({
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
    const t = e, { forwardRef: n, currentElement: o } = we(), a = Ou();
    return fr(() => {
      a.onAnchorChange(t.reference ?? o.value);
    }), (r, l) => (h(), x(s(ge), {
      ref: s(n),
      as: r.as,
      "as-child": r.asChild
    }, {
      default: y(() => [w(r.$slots, "default")]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Hb = Kb;
function Wb(e) {
  return e !== null;
}
function Ub(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var _, C, S;
      const { placement: n, rects: o, middlewareData: a } = t, l = ((_ = a.arrow) == null ? void 0 : _.centerOffset) !== 0, i = l ? 0 : e.arrowWidth, u = l ? 0 : e.arrowHeight, [d, c] = lr(n), p = {
        start: "0%",
        center: "50%",
        end: "100%"
      }[c], f = (((C = a.arrow) == null ? void 0 : C.x) ?? 0) + i / 2, v = (((S = a.arrow) == null ? void 0 : S.y) ?? 0) + u / 2;
      let m = "", g = "";
      return d === "bottom" ? (m = l ? p : `${f}px`, g = `${-u}px`) : d === "top" ? (m = l ? p : `${f}px`, g = `${o.floating.height + u}px`) : d === "right" ? (m = `${-u}px`, g = l ? p : `${v}px`) : d === "left" && (m = `${o.floating.width + u}px`, g = l ? p : `${v}px`), { data: {
        x: m,
        y: g
      } };
    }
  };
}
function lr(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
const Gb = {
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
}, [dx, Yb] = et("PopperContent");
var Xb = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ pr({
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
  }, { ...Gb }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = Ou(), { forwardRef: r, currentElement: l } = we(), i = E(), u = E(), { width: d, height: c } = w0(u), p = $(() => n.side + (n.align !== "center" ? `-${n.align}` : "")), f = $(() => typeof n.collisionPadding == "number" ? n.collisionPadding : {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...n.collisionPadding
    }), v = $(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), m = $(() => ({
      padding: f.value,
      boundary: v.value.filter(Wb),
      altBoundary: v.value.length > 0
    })), g = $(() => ({
      mainAxis: n.sideFlip,
      crossAxis: n.alignFlip
    })), _ = Yy(() => [
      ql({
        mainAxis: n.sideOffset + c.value,
        alignmentAxis: n.alignOffset
      }),
      n.prioritizePosition && n.avoidCollisions && Wo({
        ...m.value,
        ...g.value
      }),
      n.avoidCollisions && Nl({
        mainAxis: !0,
        crossAxis: !!n.prioritizePosition,
        limiter: n.sticky === "partial" ? Kl() : void 0,
        ...m.value
      }),
      !n.prioritizePosition && n.avoidCollisions && Wo({
        ...m.value,
        ...g.value
      }),
      zl({
        ...m.value,
        apply: ({ elements: I, rects: Q, availableWidth: U, availableHeight: N }) => {
          const { width: R, height: ae } = Q.reference, G = I.floating.style;
          G.setProperty("--reka-popper-available-width", `${U}px`), G.setProperty("--reka-popper-available-height", `${N}px`), G.setProperty("--reka-popper-anchor-width", `${R}px`), G.setProperty("--reka-popper-anchor-height", `${ae}px`);
        }
      }),
      u.value && Hl({
        element: u.value,
        padding: n.arrowPadding
      }),
      Ub({
        arrowWidth: d.value,
        arrowHeight: c.value
      }),
      n.hideWhenDetached && jl({
        strategy: "referenceHidden",
        ...m.value
      })
    ]), C = $(() => n.reference ?? a.anchor.value), { floatingStyles: S, placement: B, isPositioned: D, middlewareData: O } = Ul(C, i, {
      strategy: n.positionStrategy,
      placement: p,
      whileElementsMounted: (...I) => Vl(...I, {
        layoutShift: !n.disableUpdateOnLayoutShift,
        animationFrame: n.updatePositionStrategy === "always"
      }),
      middleware: _
    }), T = $(() => lr(B.value)[0]), P = $(() => lr(B.value)[1]);
    fr(() => {
      D.value && o("placed");
    });
    const M = $(() => {
      var I;
      return ((I = O.value.arrow) == null ? void 0 : I.centerOffset) !== 0;
    }), q = E("");
    xe(() => {
      l.value && (q.value = window.getComputedStyle(l.value).zIndex);
    });
    const A = $(() => {
      var I;
      return ((I = O.value.arrow) == null ? void 0 : I.x) ?? 0;
    }), z = $(() => {
      var I;
      return ((I = O.value.arrow) == null ? void 0 : I.y) ?? 0;
    });
    return Yb({
      placedSide: T,
      onArrowChange: (I) => u.value = I,
      arrowX: A,
      arrowY: z,
      shouldHideArrow: M
    }), (I, Q) => {
      var U, N, R;
      return h(), K("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-reka-popper-content-wrapper": "",
        style: _t({
          ...s(S),
          transform: s(D) ? s(S).transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: q.value,
          "--reka-popper-transform-origin": [(U = s(O).transformOrigin) == null ? void 0 : U.x, (N = s(O).transformOrigin) == null ? void 0 : N.y].join(" "),
          ...((R = s(O).hide) == null ? void 0 : R.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [F(s(ge), k({ ref: s(r) }, I.$attrs, {
        "as-child": n.asChild,
        as: I.as,
        "data-side": T.value,
        "data-align": P.value,
        style: { animation: s(D) ? void 0 : "none" }
      }), {
        default: y(() => [w(I.$slots, "default")]),
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
}), Zb = Xb, Qb = /* @__PURE__ */ b({
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
    const { forwardRef: t } = we();
    return (n, o) => (h(), x(s(Hb), {
      "as-child": "",
      reference: n.reference
    }, {
      default: y(() => [F(s(ge), k({
        ref: s(t),
        "as-child": n.asChild,
        as: n.as
      }, n.$attrs), {
        default: y(() => [w(n.$slots, "default")]),
        _: 3
      }, 16, ["as-child", "as"])]),
      _: 3
    }, 8, ["reference"]));
  }
}), Jb = Qb;
function ew(e, t, n) {
  return e === void 0 ? !1 : Array.isArray(e) ? e.some((o) => oo(o, t, n)) : oo(e, t, n);
}
function oo(e, t, n) {
  return e === void 0 || t === void 0 ? !1 : typeof e == "string" ? e === t : typeof n == "function" ? n(e, t) : typeof n == "string" ? (e == null ? void 0 : e[n]) === (t == null ? void 0 : t[n]) : In(e, t);
}
const [Ba, tw] = et("ListboxRoot");
var nw = /* @__PURE__ */ b({
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
    const o = e, a = n, { multiple: r, highlightOnHover: l, orientation: i, disabled: u, selectionBehavior: d, dir: c } = ye(o), { getItems: p } = Ca({ isProvider: !0 }), { handleTypeaheadSearch: f } = x0(), { primitiveElement: v, currentElement: m } = Qt(), g = b0(), _ = vu(c), C = mu(m), S = E(), B = E(!1), D = E(!0), O = qt(o, "modelValue", a, {
      defaultValue: o.defaultValue ?? (r.value ? [] : void 0),
      passive: o.modelValue === void 0,
      deep: !0
    });
    function T(H) {
      if (B.value = !0, o.multiple) {
        const Y = Array.isArray(O.value) ? [...O.value] : [], oe = Y.findIndex((ue) => oo(ue, H, o.by));
        o.selectionBehavior === "toggle" ? (oe === -1 ? Y.push(H) : Y.splice(oe, 1), O.value = Y) : (O.value = [H], S.value = H);
      } else o.selectionBehavior === "toggle" && oo(O.value, H, o.by) ? O.value = void 0 : O.value = H;
      setTimeout(() => {
        B.value = !1;
      }, 1);
    }
    const P = E(null), M = E(null), q = E(!1), A = E(!1), z = No(), I = No(), Q = No();
    function U() {
      return p().map((H) => H.ref).filter((H) => H.dataset.disabled !== "");
    }
    function N(H, Y = !0) {
      if (!H) return;
      P.value = H, D.value && P.value.focus(), Y && P.value.scrollIntoView({ block: "nearest" });
      const oe = p().find((ue) => ue.ref === H);
      a("highlight", oe);
    }
    function R(H) {
      if (q.value) Q.trigger(H);
      else {
        const Y = p().find((oe) => oo(oe.value, H, o.by));
        Y && (P.value = Y.ref, N(Y.ref));
      }
    }
    function ae(H) {
      P.value && P.value.isConnected && (H.preventDefault(), H.stopPropagation(), A.value || P.value.click());
    }
    function G(H) {
      if (D.value) {
        if (B.value = !0, q.value) I.trigger(H);
        else {
          const Y = H.altKey || H.ctrlKey || H.metaKey;
          if (Y && H.key === "a" && r.value) {
            const oe = p(), ue = oe.map((pe) => pe.value);
            O.value = [...ue], H.preventDefault(), N(oe[oe.length - 1].ref);
          } else if (!Y) {
            const oe = f(H.key, p());
            oe && N(oe);
          }
        }
        setTimeout(() => {
          B.value = !1;
        }, 1);
      }
    }
    function L() {
      A.value = !0;
    }
    function ee() {
      se(() => {
        A.value = !1;
      });
    }
    function W() {
      se(() => {
        const H = new KeyboardEvent("keydown", { key: "PageUp" });
        Be(H);
      });
    }
    function _e(H) {
      const Y = P.value;
      Y != null && Y.isConnected && (M.value = Y), P.value = null, a("leave", H);
    }
    function ke(H) {
      var oe, ue;
      const Y = new CustomEvent("listbox.entryFocus", {
        bubbles: !1,
        cancelable: !0
      });
      if ((oe = H.currentTarget) == null || oe.dispatchEvent(Y), a("entryFocus", Y), !Y.defaultPrevented)
        if (M.value) N(M.value);
        else {
          const pe = (ue = U()) == null ? void 0 : ue[0];
          N(pe);
        }
    }
    function Be(H) {
      const Y = Bu(H, i.value, _.value);
      if (!Y) return;
      let oe = U();
      if (P.value) {
        if (Y === "last") oe.reverse();
        else if (Y === "prev" || Y === "next") {
          Y === "prev" && oe.reverse();
          const ue = oe.indexOf(P.value);
          oe = oe.slice(ue + 1);
        }
        Ee(H, oe[0]);
      }
      if (oe.length) {
        const ue = !P.value && Y === "prev" ? oe.length - 1 : 0;
        N(oe[ue]);
      }
      if (q.value) return I.trigger(H);
    }
    function Ee(H, Y) {
      var ue;
      if (!(q.value || o.selectionBehavior !== "replace" || !r.value || !Array.isArray(O.value) || (H.altKey || H.ctrlKey || H.metaKey) && !H.shiftKey) && H.shiftKey) {
        const pe = p().filter(($e) => $e.ref.dataset.disabled !== "");
        let J = (ue = pe.find(($e) => $e.ref === Y)) == null ? void 0 : ue.value;
        if (H.key === g.END ? J = pe[pe.length - 1].value : H.key === g.HOME && (J = pe[0].value), !J || !S.value) return;
        const me = Gy(pe.map(($e) => $e.value), S.value, J);
        O.value = me;
      }
    }
    async function Ve(H) {
      if (await se(), q.value) z.trigger(H);
      else {
        const Y = U(), oe = Y.find((ue) => ue.dataset.state === "checked");
        oe ? N(oe) : Y.length && N(Y[0]);
      }
    }
    return ne(O, () => {
      B.value || se(() => {
        Ve();
      });
    }, {
      immediate: !0,
      deep: !0
    }), t({
      highlightedElement: P,
      highlightItem: R,
      highlightFirstItem: W,
      highlightSelected: Ve,
      getItems: p
    }), tw({
      modelValue: O,
      onValueChange: T,
      multiple: r,
      orientation: i,
      dir: _,
      disabled: u,
      highlightOnHover: l,
      highlightedElement: P,
      isVirtual: q,
      virtualFocusHook: z,
      virtualKeydownHook: I,
      virtualHighlightHook: Q,
      by: o.by,
      firstValue: S,
      selectionBehavior: d,
      focusable: D,
      onLeave: _e,
      onEnter: ke,
      changeHighlight: N,
      onKeydownEnter: ae,
      onKeydownNavigation: Be,
      onKeydownTypeAhead: G,
      onCompositionStart: L,
      onCompositionEnd: ee,
      highlightFirstItem: W
    }), (H, Y) => (h(), x(s(ge), {
      ref_key: "primitiveElement",
      ref: v,
      as: H.as,
      "as-child": H.asChild,
      dir: s(_),
      "data-disabled": s(u) ? "" : void 0,
      onPointerleave: _e,
      onFocusout: Y[0] || (Y[0] = async (oe) => {
        const ue = oe.relatedTarget || oe.target;
        await se(), P.value && s(m) && !s(m).contains(ue) && _e(oe);
      })
    }, {
      default: y(() => [w(H.$slots, "default", { modelValue: s(O) }), s(C) && H.name ? (h(), x(s(Su), {
        key: 0,
        name: H.name,
        value: s(O),
        disabled: s(u),
        required: H.required
      }, null, 8, [
        "name",
        "value",
        "disabled",
        "required"
      ])) : he("v-if", !0)]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "dir",
      "data-disabled"
    ]));
  }
}), ow = nw, aw = /* @__PURE__ */ b({
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
    const { CollectionSlot: t } = Ca(), n = Ba(), o = cu(!1, 10);
    return (a, r) => (h(), x(s(t), null, {
      default: y(() => [F(s(ge), {
        role: "listbox",
        as: a.as,
        "as-child": a.asChild,
        tabindex: s(n).focusable.value ? s(n).highlightedElement.value ? "-1" : "0" : "-1",
        "aria-orientation": s(n).orientation.value,
        "aria-multiselectable": !!s(n).multiple.value,
        "data-orientation": s(n).orientation.value,
        onMousedown: r[0] || (r[0] = Fe((l) => o.value = !0, ["left"])),
        onFocus: r[1] || (r[1] = (l) => {
          s(o) || s(n).onEnter(l);
        }),
        onKeydown: [
          r[2] || (r[2] = ot((l) => {
            s(n).orientation.value === "vertical" && (l.key === "ArrowLeft" || l.key === "ArrowRight") || s(n).orientation.value === "horizontal" && (l.key === "ArrowUp" || l.key === "ArrowDown") || (l.preventDefault(), s(n).focusable.value && s(n).onKeydownNavigation(l));
          }, [
            "down",
            "up",
            "left",
            "right",
            "home",
            "end"
          ])),
          ot(s(n).onKeydownEnter, ["enter"]),
          s(n).onKeydownTypeAhead
        ]
      }, {
        default: y(() => [w(a.$slots, "default")]),
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
}), rw = aw, sw = /* @__PURE__ */ b({
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
    const n = e, a = qt(n, "modelValue", t, {
      defaultValue: "",
      passive: n.modelValue === void 0
    }), r = Ba(), { primitiveElement: l, currentElement: i } = Qt(), u = $(() => n.disabled || r.disabled.value || !1), d = E();
    return vl(() => {
      var c;
      return d.value = (c = r.highlightedElement.value) == null ? void 0 : c.id;
    }), ie(() => {
      r.focusable.value = !1, setTimeout(() => {
        var c;
        n.autoFocus && ((c = i.value) == null || c.focus());
      }, 1);
    }), Ke(() => {
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
      onKeydown: [ot(Fe(s(r).onKeydownNavigation, ["prevent"]), [
        "down",
        "up",
        "home",
        "end"
      ]), ot(s(r).onKeydownEnter, ["enter"])],
      onInput: p[0] || (p[0] = (f) => {
        a.value = f.target.value, s(r).highlightFirstItem();
      }),
      onCompositionstart: s(r).onCompositionStart,
      onCompositionend: s(r).onCompositionEnd
    }, {
      default: y(() => [w(c.$slots, "default", { modelValue: s(a) })]),
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
}), lw = sw;
const [cx, iw] = et("ListboxGroup");
var uw = /* @__PURE__ */ b({
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
    const t = e, n = wt(void 0, "reka-listbox-group");
    return iw({ id: n }), (o, a) => (h(), x(s(ge), k({ role: "group" }, t, { "aria-labelledby": s(n) }), {
      default: y(() => [w(o.$slots, "default")]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), dw = uw;
const cw = "listbox.select", [pw, fw] = et("ListboxItem");
var vw = /* @__PURE__ */ b({
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
    const n = e, o = t, a = wt(void 0, "reka-listbox-item"), { CollectionItem: r } = Ca(), { forwardRef: l, currentElement: i } = we(), u = Ba(), d = $(() => i.value === u.highlightedElement.value), c = $(() => ew(u.modelValue.value, n.value, u.by)), p = $(() => u.disabled.value || n.disabled);
    async function f(m) {
      o("select", m), !(m != null && m.defaultPrevented) && !p.value && m && (u.onValueChange(n.value), u.changeHighlight(i.value));
    }
    function v(m) {
      const g = {
        originalEvent: m,
        value: n.value
      };
      rs(cw, f, g);
    }
    return fw({ isSelected: c }), (m, g) => (h(), x(s(r), { value: m.value }, {
      default: y(() => [Gu([d.value, c.value], () => F(s(ge), k({ id: s(a) }, m.$attrs, {
        ref: s(l),
        role: "option",
        tabindex: s(u).focusable.value ? d.value ? "0" : "-1" : -1,
        "aria-selected": c.value,
        as: m.as,
        "as-child": m.asChild,
        disabled: p.value ? "" : void 0,
        "data-disabled": p.value ? "" : void 0,
        "data-highlighted": d.value ? "" : void 0,
        "data-state": c.value ? "checked" : "unchecked",
        onClick: v,
        onKeydown: ot(Fe(v, ["prevent"]), ["space"]),
        onPointermove: g[0] || (g[0] = () => {
          s(u).highlightedElement.value !== s(i) && s(u).highlightOnHover.value && !s(u).focusable.value && s(u).changeHighlight(s(i), !1);
        })
      }), {
        default: y(() => [w(m.$slots, "default")]),
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
}), mw = vw, gw = /* @__PURE__ */ b({
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
    we();
    const n = pw();
    return (o, a) => s(n).isSelected.value ? (h(), x(s(ge), k({
      key: 0,
      "aria-hidden": "true"
    }, t), {
      default: y(() => [w(o.$slots, "default")]),
      _: 3
    }, 16)) : he("v-if", !0);
  }
}), hw = gw;
const [Nt, yw] = et("ComboboxRoot");
var bw = /* @__PURE__ */ b({
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
    var R, ae, G;
    const o = e, a = n, { primitiveElement: r, currentElement: l } = Qt(), { multiple: i, disabled: u, ignoreFilter: d, resetSearchTermOnSelect: c, openOnFocus: p, openOnClick: f, dir: v, resetModelValueOnClear: m, highlightOnHover: g } = ye(o), _ = vu(v), C = qt(o, "modelValue", a, {
      defaultValue: o.defaultValue ?? (i.value ? [] : void 0),
      passive: o.modelValue === void 0,
      deep: !0
    }), S = qt(o, "open", a, {
      defaultValue: o.defaultOpen,
      passive: o.open === void 0
    });
    async function B(L) {
      var ee, W;
      S.value = L, Q.value = "", L ? (await se(), (ee = r.value) == null || ee.highlightSelected(), O.value = !0, (W = P.value) == null || W.focus()) : (O.value = !1, setTimeout(() => {
        !L && o.resetSearchTermOnBlur && D.trigger();
      }, 1));
    }
    const D = No(), O = E(!1), T = E(!1), P = E(), M = E(), q = $(() => {
      var L;
      return ((L = r.value) == null ? void 0 : L.highlightedElement) ?? void 0;
    }), A = E(/* @__PURE__ */ new Map()), z = E(/* @__PURE__ */ new Map()), { contains: I } = f0({ sensitivity: "base" }), Q = E(""), U = $((L) => {
      if (!Q.value || o.ignoreFilter || T.value) return {
        count: A.value.size,
        items: (L == null ? void 0 : L.items) ?? /* @__PURE__ */ new Map(),
        groups: (L == null ? void 0 : L.groups) ?? new Set(z.value.keys())
      };
      let ee = 0;
      const W = /* @__PURE__ */ new Map(), _e = /* @__PURE__ */ new Set();
      for (const [ke, Be] of A.value) {
        const Ee = I(Be, Q.value);
        W.set(ke, Ee ? 1 : 0), Ee && ee++;
      }
      for (const [ke, Be] of z.value) for (const Ee of Be) if (W.get(Ee) > 0) {
        _e.add(ke);
        break;
      }
      return {
        count: ee,
        items: W,
        groups: _e
      };
    }), N = Qe();
    return ie(() => {
      var L, ee, W;
      N != null && N.exposed && (N.exposed.highlightItem = (L = r.value) == null ? void 0 : L.highlightItem, N.exposed.highlightFirstItem = (ee = r.value) == null ? void 0 : ee.highlightFirstItem, N.exposed.highlightSelected = (W = r.value) == null ? void 0 : W.highlightSelected);
    }), t({
      filtered: U,
      highlightedElement: q,
      highlightItem: (R = r.value) == null ? void 0 : R.highlightItem,
      highlightFirstItem: (ae = r.value) == null ? void 0 : ae.highlightFirstItem,
      highlightSelected: (G = r.value) == null ? void 0 : G.highlightSelected
    }), yw({
      modelValue: C,
      multiple: i,
      disabled: u,
      open: S,
      onOpenChange: B,
      contentId: "",
      isUserInputted: O,
      isVirtual: T,
      inputElement: P,
      highlightedElement: q,
      onInputElementChange: (L) => P.value = L,
      triggerElement: M,
      onTriggerElementChange: (L) => M.value = L,
      parentElement: l,
      resetSearchTermOnSelect: c,
      onResetSearchTerm: D.on,
      allItems: A,
      allGroups: z,
      filterSearch: Q,
      filterState: U,
      ignoreFilter: d,
      openOnFocus: p,
      openOnClick: f,
      resetModelValueOnClear: m
    }), (L, ee) => (h(), x(s(jb), null, {
      default: y(() => [F(s(ow), k({
        ref_key: "primitiveElement",
        ref: r
      }, L.$attrs, {
        modelValue: s(C),
        "onUpdate:modelValue": ee[0] || (ee[0] = (W) => tt(C) ? C.value = W : null),
        style: { pointerEvents: s(S) ? "auto" : void 0 },
        as: L.as,
        "as-child": L.asChild,
        dir: s(_),
        multiple: s(i),
        name: L.name,
        required: L.required,
        disabled: s(u),
        "highlight-on-hover": s(g),
        by: o.by,
        onHighlight: ee[1] || (ee[1] = (W) => a("highlight", W))
      }), {
        default: y(() => [w(L.$slots, "default", {
          open: s(S),
          modelValue: s(C)
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
}), ww = bw;
const [px, _w] = et("ComboboxContent");
var xw = /* @__PURE__ */ b({
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
    const n = e, o = t, { position: a } = ye(n), r = Nt(), { forwardRef: l, currentElement: i } = we();
    pu(n.bodyLock), hu(r.parentElement);
    const u = $(() => n.position === "popper" ? n : {}), d = xt(u.value), c = {
      boxSizing: "border-box",
      "--reka-combobox-content-transform-origin": "var(--reka-popper-transform-origin)",
      "--reka-combobox-content-available-width": "var(--reka-popper-available-width)",
      "--reka-combobox-content-available-height": "var(--reka-popper-available-height)",
      "--reka-combobox-trigger-width": "var(--reka-popper-anchor-width)",
      "--reka-combobox-trigger-height": "var(--reka-popper-anchor-height)"
    };
    _w({ position: a });
    const p = E(!1);
    return ie(() => {
      r.inputElement.value && (p.value = i.value.contains(r.inputElement.value), p.value && r.inputElement.value.focus());
    }), Ke(() => {
      var v;
      const f = dt();
      p.value && (!f || f === document.body) && ((v = r.triggerElement.value) == null || v.focus());
    }), (f, v) => (h(), x(s(rw), { "as-child": "" }, {
      default: y(() => [F(s(wu), {
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
        default: y(() => [(h(), x(lt(s(a) === "popper" ? s(Zb) : s(ge)), k({
          ...f.$attrs,
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
          default: y(() => [w(f.$slots, "default")]),
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
}), Cw = xw, Bw = /* @__PURE__ */ b({
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
    we();
    const n = Nt();
    function o() {
      var a;
      n.filterSearch.value = "", n.inputElement.value && (n.inputElement.value.value = "", n.inputElement.value.focus()), (a = n.resetModelValueOnClear) != null && a.value && (n.modelValue.value = n.multiple.value ? [] : null);
    }
    return (a, r) => (h(), x(s(ge), k({ type: a.as === "button" ? "button" : void 0 }, t, {
      tabindex: "-1",
      onClick: o
    }), {
      default: y(() => [w(a.$slots, "default")]),
      _: 3
    }, 16, ["type"]));
  }
}), fx = Bw, Sw = /* @__PURE__ */ b({
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
    const a = Ct(e, t), { forwardRef: r } = we(), l = Nt();
    return l.contentId || (l.contentId = wt(void 0, "reka-combobox-content")), (i, u) => (h(), x(s(xo), { present: i.forceMount || s(l).open.value }, {
      default: y(() => [F(Cw, k({
        ...s(a),
        ...i.$attrs
      }, { ref: s(r) }), {
        default: y(() => [w(i.$slots, "default")]),
        _: 3
      }, 16)]),
      _: 3
    }, 8, ["present"]));
  }
}), $w = Sw, Ow = /* @__PURE__ */ b({
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
    const t = e, n = Nt(), o = $(() => n.ignoreFilter.value ? n.allItems.value.size === 0 : n.filterState.value.count === 0);
    return (a, r) => o.value ? (h(), x(s(ge), Z(k({ key: 0 }, t)), {
      default: y(() => [w(a.$slots, "default", {}, () => [r[0] || (r[0] = Ce("No options"))])]),
      _: 3
    }, 16)) : he("v-if", !0);
  }
}), Ew = Ow;
const [Eu, Pw] = et("ComboboxGroup");
var kw = /* @__PURE__ */ b({
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
    const t = e, n = wt(void 0, "reka-combobox-group"), o = Nt(), a = $(() => o.ignoreFilter.value ? !0 : o.filterSearch.value ? o.filterState.value.groups.has(n) : !0), r = Pw({
      id: n,
      labelId: ""
    });
    return ie(() => {
      o.allGroups.value.has(n) || o.allGroups.value.set(n, /* @__PURE__ */ new Set());
    }), Ke(() => {
      o.allGroups.value.delete(n);
    }), (l, i) => (h(), x(s(dw), k({
      id: s(n),
      "aria-labelledby": s(r).labelId
    }, t, { hidden: a.value ? void 0 : !0 }), {
      default: y(() => [w(l.$slots, "default")]),
      _: 3
    }, 16, [
      "id",
      "aria-labelledby",
      "hidden"
    ]));
  }
}), Dw = kw, Aw = /* @__PURE__ */ b({
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
    const n = e, o = t, a = Nt(), r = Ba(), { primitiveElement: l, currentElement: i } = Qt(), u = qt(n, "modelValue", o, { passive: n.modelValue === void 0 });
    ie(() => {
      i.value && a.onInputElementChange(i.value);
    });
    function d(m) {
      a.open.value || a.onOpenChange(!0);
    }
    function c(m) {
      const g = m.target;
      a.open.value ? a.filterSearch.value = g.value : (a.onOpenChange(!0), se(() => {
        g.value && (a.filterSearch.value = g.value, r.highlightFirstItem());
      }));
    }
    function p() {
      a.openOnFocus.value && !a.open.value && a.onOpenChange(!0);
    }
    function f() {
      a.openOnClick.value && !a.open.value && a.onOpenChange(!0);
    }
    function v() {
      const m = a.modelValue.value;
      n.displayValue ? u.value = n.displayValue(m) : !a.multiple.value && m && !Array.isArray(m) && typeof m != "object" ? u.value = m.toString() : u.value = "", se(() => {
        u.value = u.value;
      });
    }
    return a.onResetSearchTerm(() => {
      v();
    }), ne(a.modelValue, async () => {
      !a.isUserInputted.value && a.resetSearchTermOnSelect.value && v();
    }, {
      immediate: !0,
      deep: !0
    }), ne(a.filterState, (m, g) => {
      !a.isVirtual.value && g.count === 0 && r.highlightFirstItem();
    }), (m, g) => (h(), x(s(lw), {
      ref_key: "primitiveElement",
      ref: l,
      modelValue: s(u),
      "onUpdate:modelValue": g[0] || (g[0] = (_) => tt(u) ? u.value = _ : null),
      as: m.as,
      "as-child": m.asChild,
      "auto-focus": m.autoFocus,
      disabled: m.disabled,
      "aria-expanded": s(a).open.value,
      "aria-controls": s(a).contentId,
      "aria-autocomplete": "list",
      role: "combobox",
      autocomplete: "off",
      onClick: f,
      onInput: c,
      onKeydown: ot(Fe(d, ["prevent"]), ["down", "up"]),
      onFocus: p
    }, {
      default: y(() => [w(m.$slots, "default")]),
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
}), Tw = Aw, Iw = /* @__PURE__ */ b({
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
    const n = e, o = t, a = wt(void 0, "reka-combobox-item"), r = Nt(), l = Eu(null), { primitiveElement: i, currentElement: u } = Qt();
    if (n.value === "") throw new Error("A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder.");
    const d = $(() => {
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
    }), Ke(() => {
      r.allItems.value.delete(a);
    }), (c, p) => d.value ? (h(), x(s(mw), k({ key: 0 }, n, {
      id: s(a),
      ref_key: "primitiveElement",
      ref: i,
      disabled: s(r).disabled.value || c.disabled,
      onSelect: p[0] || (p[0] = (f) => {
        o("select", f), !f.defaultPrevented && !s(r).multiple.value && !c.disabled && !s(r).disabled.value && (f.preventDefault(), s(r).onOpenChange(!1), s(r).modelValue.value = n.value);
      })
    }), {
      default: y(() => [w(c.$slots, "default", {}, () => [Ce(Ie(c.value), 1)])]),
      _: 3
    }, 16, ["id", "disabled"])) : he("v-if", !0);
  }
}), Mw = Iw, Fw = /* @__PURE__ */ b({
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
    return (n, o) => (h(), x(s(hw), Z(te(t)), {
      default: y(() => [w(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), vx = Fw, Rw = /* @__PURE__ */ b({
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
    we();
    const n = Eu({
      id: "",
      labelId: ""
    });
    return n.labelId || (n.labelId = wt(void 0, "reka-combobox-group-label")), (o, a) => (h(), x(s(ge), k(t, { id: s(n).labelId }), {
      default: y(() => [w(o.$slots, "default")]),
      _: 3
    }, 16, ["id"]));
  }
}), Lw = Rw, Vw = /* @__PURE__ */ b({
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
    return (n, o) => (h(), x(s(Cu), Z(te(t)), {
      default: y(() => [w(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), qw = Vw, Nw = /* @__PURE__ */ b({
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
    return we(), (n, o) => (h(), x(s(ge), k(t, { "aria-hidden": "true" }), {
      default: y(() => [w(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), zw = Nw, jw = /* @__PURE__ */ b({
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
    const t = e, { forwardRef: n, currentElement: o } = we(), a = Nt(), r = $(() => t.disabled || a.disabled.value || !1);
    return ie(() => {
      o.value && a.onTriggerElementChange(o.value);
    }), (l, i) => (h(), x(s(ge), k(t, {
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
      default: y(() => [w(l.$slots, "default")]),
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
}), mx = jw;
function Kw(e) {
  const t = wa({ nonce: E() });
  return $(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.nonce) == null ? void 0 : n.value);
  });
}
var Hw = /* @__PURE__ */ b({
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
    const t = e, { forwardRef: n } = we(), { nonce: o } = ye(t), a = Kw(o), r = Nt();
    return (l, i) => (h(), K(Te, null, [F(s(ge), k({
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
      default: y(() => [w(l.$slots, "default")]),
      _: 3
    }, 16, ["style"]), F(s(ge), {
      as: "style",
      nonce: s(a)
    }, {
      default: y(() => i[0] || (i[0] = [Ce(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-reka-combobox-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-reka-combobox-viewport]::-webkit-scrollbar { display: none; } ")])),
      _: 1,
      __: [0]
    }, 8, ["nonce"])], 64));
  }
}), Ww = Hw, Uw = /* @__PURE__ */ b({
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
    return we(), (n, o) => (h(), x(s(ge), k(t, { "data-type": "ellipsis" }), {
      default: y(() => [w(n.$slots, "default", {}, () => [o[0] || (o[0] = Ce("…"))])]),
      _: 3
    }, 16));
  }
}), Gw = Uw;
const [Yn, Yw] = et("PaginationRoot");
var Xw = /* @__PURE__ */ b({
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
    const n = e, o = t, { siblingCount: a, disabled: r, showEdges: l } = ye(n);
    we();
    const i = qt(n, "page", o, {
      defaultValue: n.defaultPage,
      passive: n.page === void 0
    }), u = $(() => Math.max(1, Math.ceil(n.total / (n.itemsPerPage || 1))));
    return Yw({
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
      default: y(() => [w(d.$slots, "default", {
        page: s(i),
        pageCount: u.value
      })]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Zw = Xw, Qw = /* @__PURE__ */ b({
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
    const t = e, n = Yn();
    we();
    const o = $(() => n.page.value === 1 || n.disabled.value);
    return (a, r) => (h(), x(s(ge), k(t, {
      "aria-label": "First Page",
      type: a.as === "button" ? "button" : void 0,
      disabled: o.value,
      onClick: r[0] || (r[0] = (l) => !o.value && s(n).onPageChange(1))
    }), {
      default: y(() => [w(a.$slots, "default", {}, () => [r[1] || (r[1] = Ce("First page"))])]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), Jw = Qw, e_ = /* @__PURE__ */ b({
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
    const t = e, n = Yn();
    we();
    const o = $(() => n.page.value === n.pageCount.value || n.disabled.value);
    return (a, r) => (h(), x(s(ge), k(t, {
      "aria-label": "Last Page",
      type: a.as === "button" ? "button" : void 0,
      disabled: o.value,
      onClick: r[0] || (r[0] = (l) => !o.value && s(n).onPageChange(s(n).pageCount.value))
    }), {
      default: y(() => [w(a.$slots, "default", {}, () => [r[1] || (r[1] = Ce("Last page"))])]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), t_ = e_;
function Ht(e, t) {
  const n = t - e + 1;
  return Array.from({ length: n }, (o, a) => a + e);
}
function n_(e) {
  return e.map((t) => typeof t == "number" ? {
    type: "page",
    value: t
  } : { type: "ellipsis" });
}
const Fo = "ellipsis";
function o_(e, t, n, o) {
  const r = t, l = Math.max(e - n, 1), i = Math.min(e + n, r);
  if (o) {
    const d = Math.min(2 * n + 5, t) - 2, c = l > 3 && Math.abs(r - d - 1 + 1) > 2 && Math.abs(l - 1) > 2, p = i < r - 2 && Math.abs(r - d) > 2 && Math.abs(r - i) > 2;
    if (!c && p)
      return [
        ...Ht(1, d),
        Fo,
        r
      ];
    if (c && !p) {
      const v = Ht(r - d + 1, r);
      return [
        1,
        Fo,
        ...v
      ];
    }
    if (c && p) {
      const v = Ht(l, i);
      return [
        1,
        Fo,
        ...v,
        Fo,
        r
      ];
    }
    return Ht(1, r);
  } else {
    const u = n * 2 + 1;
    return t < u ? Ht(1, r) : e <= n + 1 ? Ht(1, u) : t - e <= n ? Ht(t - u + 1, r) : Ht(l, i);
  }
}
var a_ = /* @__PURE__ */ b({
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
    we();
    const n = Yn(), o = $(() => n_(o_(n.page.value, n.pageCount.value, n.siblingCount.value, n.showEdges.value)));
    return (a, r) => (h(), x(s(ge), Z(te(t)), {
      default: y(() => [w(a.$slots, "default", { items: o.value })]),
      _: 3
    }, 16));
  }
}), r_ = a_, s_ = /* @__PURE__ */ b({
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
    we();
    const n = Yn(), o = $(() => n.page.value === t.value), a = $(() => n.disabled.value);
    return (r, l) => (h(), x(s(ge), k(t, {
      "data-type": "page",
      "aria-label": `Page ${r.value}`,
      "aria-current": o.value ? "page" : void 0,
      "data-selected": o.value ? "true" : void 0,
      disabled: a.value,
      type: r.as === "button" ? "button" : void 0,
      onClick: l[0] || (l[0] = (i) => !a.value && s(n).onPageChange(r.value))
    }), {
      default: y(() => [w(r.$slots, "default", {}, () => [Ce(Ie(r.value), 1)])]),
      _: 3
    }, 16, [
      "aria-label",
      "aria-current",
      "data-selected",
      "disabled",
      "type"
    ]));
  }
}), l_ = s_, i_ = /* @__PURE__ */ b({
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
    we();
    const n = Yn(), o = $(() => n.page.value === n.pageCount.value || n.disabled.value);
    return (a, r) => (h(), x(s(ge), k(t, {
      "aria-label": "Next Page",
      type: a.as === "button" ? "button" : void 0,
      disabled: o.value,
      onClick: r[0] || (r[0] = (l) => !o.value && s(n).onPageChange(s(n).page.value + 1))
    }), {
      default: y(() => [w(a.$slots, "default", {}, () => [r[1] || (r[1] = Ce("Next page"))])]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), u_ = i_, d_ = /* @__PURE__ */ b({
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
    we();
    const n = Yn(), o = $(() => n.page.value === 1 || n.disabled.value);
    return (a, r) => (h(), x(s(ge), k(t, {
      "aria-label": "Previous Page",
      type: a.as === "button" ? "button" : void 0,
      disabled: o.value,
      onClick: r[0] || (r[0] = (l) => !o.value && s(n).onPageChange(s(n).page.value - 1))
    }), {
      default: y(() => [w(a.$slots, "default", {}, () => [r[1] || (r[1] = Ce("Prev page"))])]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), c_ = d_, p_ = /* @__PURE__ */ b({
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
    function o(i) {
      return n.includes(i);
    }
    const a = $(() => o(t.orientation) ? t.orientation : "horizontal"), r = $(() => a.value === "vertical" ? t.orientation : void 0), l = $(() => t.decorative ? { role: "none" } : {
      "aria-orientation": r.value,
      role: "separator"
    });
    return (i, u) => (h(), x(s(ge), k({
      as: i.as,
      "as-child": i.asChild,
      "data-orientation": a.value
    }, l.value), {
      default: y(() => [w(i.$slots, "default")]),
      _: 3
    }, 16, [
      "as",
      "as-child",
      "data-orientation"
    ]));
  }
}), f_ = p_, v_ = /* @__PURE__ */ b({
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
    return (n, o) => (h(), x(f_, Z(te(t)), {
      default: y(() => [w(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), m_ = v_;
const gx = /* @__PURE__ */ b({
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
    const n = e, o = t, a = $(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = Ct(a, o);
    return (l, i) => (h(), x(s(Lb), k(s(r), {
      class: s(V)(
        "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        n.class
      )
    }), {
      default: y(() => [
        F(s(qb), { class: "flex h-full w-full items-center justify-center text-current" }, {
          default: y(() => [
            w(l.$slots, "default", {}, () => [
              F(s(Ky), { class: "h-4 w-4" })
            ])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), hx = /* @__PURE__ */ b({
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
    const a = Ct(e, t);
    return (r, l) => (h(), x(s(P0), Z(te(s(a))), {
      default: y(({ open: i }) => [
        w(r.$slots, "default", { open: i })
      ]),
      _: 3
    }, 16));
  }
}), yx = /* @__PURE__ */ b({
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(D0), k(t, { class: "overflow-hidden transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down" }), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), bx = /* @__PURE__ */ b({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(T0), Z(te(t)), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wx = /* @__PURE__ */ b({
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
    const a = Ct(e, t);
    return (r, l) => (h(), x(s(ww), Z(te(s(a))), {
      default: y(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), _x = /* @__PURE__ */ b({
  __name: "ComboboxAnchor",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = qe(t, "class"), o = xt(n);
    return (a, r) => (h(), x(s(Jb), k(s(o), {
      class: s(V)("w-[200px]", t.class)
    }), {
      default: y(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), xx = /* @__PURE__ */ b({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = qe(t, "class");
    return (o, a) => (h(), x(s(Ew), k(s(n), {
      class: s(V)("py-6 text-center text-sm", t.class)
    }), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Cx = /* @__PURE__ */ b({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    heading: {}
  },
  setup(e) {
    const t = e, n = qe(t, "class");
    return (o, a) => (h(), x(s(Dw), k(s(n), {
      class: s(V)(
        "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
        t.class
      )
    }), {
      default: y(() => [
        e.heading ? (h(), x(s(Lw), {
          key: 0,
          class: "px-2 py-1.5 text-xs font-medium text-muted-foreground"
        }, {
          default: y(() => [
            Ce(Ie(e.heading), 1)
          ]),
          _: 1
        })) : he("", !0),
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Bx = /* @__PURE__ */ b({
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
    const n = e, o = t, a = qe(n, "class"), r = Ct(a, o);
    return (l, i) => (h(), x(s(Tw), k(s(r), {
      class: s(V)(
        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        n.class
      )
    }), {
      default: y(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Sx = /* @__PURE__ */ b({
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
    const n = e, o = t, a = qe(n, "class"), r = Ct(a, o);
    return (l, i) => (h(), x(s(Mw), k(s(r), {
      class: s(V)(
        "relative flex cursor-default gap-2 select-none justify-between items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
        n.class
      )
    }), {
      default: y(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), $x = /* @__PURE__ */ b({
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
    const n = e, o = t, a = qe(n, "class"), r = Ct(a, o);
    return (l, i) => (h(), x(s(qw), null, {
      default: y(() => [
        F(s($w), k(s(r), {
          class: s(V)(
            "z-50 w-[200px] rounded-md border bg-popover text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            n.class
          )
        }), {
          default: y(() => [
            F(s(Ww), null, {
              default: y(() => [
                w(l.$slots, "default")
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
}), Ox = /* @__PURE__ */ b({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = qe(t, "class");
    return (o, a) => (h(), x(s(zw), k(s(n), {
      class: s(V)("-mx-1 h-px bg-border", t.class)
    }), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), g_ = /* @__PURE__ */ b({
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
    const n = e, o = t, a = $(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = ce(a, o);
    return (l, i) => (h(), x(s(sf), k(s(r), {
      class: s(V)(
        "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
        n.class
      )
    }), {
      default: y(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), h_ = /* @__PURE__ */ b({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = ce(e, t);
    return (r, l) => (h(), x(s(Ar), Z(te(s(a))), {
      default: y(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ex = /* @__PURE__ */ b({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(fn), Z(te(t)), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Px = /* @__PURE__ */ b({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Tr), Z(te(t)), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), kx = /* @__PURE__ */ b({
  __name: "DialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), K("div", {
      class: le(s(V)("flex flex-col gap-y-1.5 text-center sm:text-left", t.class))
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), Dx = /* @__PURE__ */ b({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = $(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = Ye(n);
    return (a, r) => (h(), x(s(Lr), k(s(o), {
      class: s(V)("text-lg font-semibold leading-none tracking-tight", t.class)
    }), {
      default: y(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ax = /* @__PURE__ */ b({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = $(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = Ye(n);
    return (a, r) => (h(), x(s(Vr), k(s(o), {
      class: s(V)("text-sm text-muted-foreground", t.class)
    }), {
      default: y(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), y_ = /* @__PURE__ */ b({
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
    const n = e, o = t, a = $(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = ce(a, o);
    return (l, i) => (h(), x(s(Ir), null, {
      default: y(() => [
        F(s(pa), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        F(s(ca), k(s(r), {
          class: s(V)(
            "fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
            n.class
          )
        }), {
          default: y(() => [
            w(l.$slots, "default"),
            F(s(fn), {
              class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
              onClick: i[0] || (i[0] = (u) => o("close", u))
            }, {
              default: y(() => [
                F(s(ha), { class: "size-4" }),
                i[1] || (i[1] = de("span", { class: "sr-only" }, "Close", -1))
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
}), Tx = /* @__PURE__ */ b({
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
    const n = e, o = t, a = $(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = ce(a, o);
    return (l, i) => (h(), x(s(Ir), null, {
      default: y(() => [
        F(s(pa), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: y(() => [
            F(s(ca), k({
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
                w(l.$slots, "default"),
                F(s(fn), { class: "absolute right-4 top-4 rounded-md p-0.5 transition-colors hover:bg-secondary" }, {
                  default: y(() => [
                    F(s(ha), { class: "h-4 w-4" }),
                    i[1] || (i[1] = de("span", { class: "sr-only" }, "Close", -1))
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
}), Ix = /* @__PURE__ */ b({
  __name: "DialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), K("div", {
      class: le(s(V)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), Mx = /* @__PURE__ */ b({
  __name: "CommandDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = ce(e, t);
    return (r, l) => (h(), x(s(h_), Z(te(s(a))), {
      default: y(() => [
        F(s(y_), { class: "overflow-hidden p-0 shadow-lg" }, {
          default: y(() => [
            F(g_, { class: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5" }, {
              default: y(() => [
                w(r.$slots, "default")
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
}), Fx = /* @__PURE__ */ b({
  __name: "CommandEmpty",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = $(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), x(s(mf), k(n.value, {
      class: s(V)("py-6 text-center text-sm", t.class)
    }), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Rx = /* @__PURE__ */ b({
  __name: "CommandGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    heading: {}
  },
  setup(e) {
    const t = e, n = $(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), x(s(df), k(n.value, {
      class: s(V)(
        "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
        t.class
      )
    }), {
      default: y(() => [
        e.heading ? (h(), x(s(cf), {
          key: 0,
          class: "px-2 py-1.5 text-xs font-medium text-muted-foreground"
        }, {
          default: y(() => [
            Ce(Ie(e.heading), 1)
          ]),
          _: 1
        })) : he("", !0),
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), b_ = {
  class: "flex items-center border-b px-3",
  "cmdk-input-wrapper": ""
}, Lx = /* @__PURE__ */ b({
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
    const t = e, n = $(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = Ye(n);
    return (a, r) => (h(), K("div", b_, [
      F(s(Ph), { class: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
      F(s(lf), k({ ...s(o), ...a.$attrs }, {
        "auto-focus": "",
        class: s(V)(
          "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          t.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), Vx = /* @__PURE__ */ b({
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
    const n = e, o = t, a = $(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = ce(a, o);
    return (l, i) => (h(), x(s(bf), k(s(r), {
      class: s(V)(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        n.class
      )
    }), {
      default: y(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), w_ = { role: "presentation" }, qx = /* @__PURE__ */ b({
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
    const n = e, o = t, a = $(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = ce(a, o);
    return (l, i) => (h(), x(s(vf), k(s(r), {
      class: s(V)("max-h-[300px] overflow-y-auto overflow-x-hidden", n.class)
    }), {
      default: y(() => [
        de("div", w_, [
          w(l.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Nx = /* @__PURE__ */ b({
  __name: "CommandSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = $(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), x(s(wf), k(n.value, {
      class: s(V)("-mx-1 h-px bg-border", t.class)
    }), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), zx = /* @__PURE__ */ b({
  __name: "CommandShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), K("span", {
      class: le(s(V)("ml-auto text-xs tracking-widest text-muted-foreground", t.class))
    }, [
      w(n.$slots, "default")
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
const __ = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const x_ = (e) => typeof e < "u";
function C_(e) {
  return JSON.parse(JSON.stringify(e));
}
function cl(e, t, n, o = {}) {
  var a, r, l;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: c = !1,
    defaultValue: p,
    shouldEmit: f
  } = o, v = Qe(), m = n || (v == null ? void 0 : v.emit) || ((a = v == null ? void 0 : v.$emit) == null ? void 0 : a.bind(v)) || ((l = (r = v == null ? void 0 : v.proxy) == null ? void 0 : r.$emit) == null ? void 0 : l.bind(v == null ? void 0 : v.proxy));
  let g = d;
  t || (t = "modelValue"), g = g || `update:${t.toString()}`;
  const _ = (B) => i ? typeof i == "function" ? i(B) : C_(B) : B, C = () => x_(e[t]) ? _(e[t]) : p, S = (B) => {
    f ? f(B) && m(g, B) : m(g, B);
  };
  if (u) {
    const B = C(), D = E(B);
    let O = !1;
    return ne(
      () => e[t],
      (T) => {
        O || (O = !0, D.value = _(T), se(() => O = !1));
      }
    ), ne(
      D,
      (T) => {
        !O && (T !== e[t] || c) && S(T);
      },
      { deep: c }
    ), D;
  } else
    return $({
      get() {
        return C();
      },
      set(B) {
        S(B);
      }
    });
}
const [us, B_] = et("DrawerRoot"), Pu = /* @__PURE__ */ new WeakMap();
function Xe(e, t, n = !1) {
  if (!e || !(e instanceof HTMLElement) || !t)
    return;
  const o = {};
  Object.entries(t).forEach(([a, r]) => {
    if (a.startsWith("--")) {
      e.style.setProperty(a, r);
      return;
    }
    o[a] = e.style[a], e.style[a] = r;
  }), !n && Pu.set(e, o);
}
function S_(e, t) {
  if (!e || !(e instanceof HTMLElement))
    return;
  const n = Pu.get(e);
  n && Object.entries(n).forEach(([o, a]) => {
    e.style[o] = a;
  });
}
function Ro(e, t) {
  const n = window.getComputedStyle(e), o = n.transform || n.webkitTransform || n.mozTransform;
  let a = o.match(/^matrix3d\((.+)\)$/);
  return a ? Number.parseFloat(a[1].split(", ")[ze(t) ? 13 : 12]) : (a = o.match(/^matrix\((.+)\)$/), a ? Number.parseFloat(a[1].split(", ")[ze(t) ? 5 : 4]) : null);
}
function $_(e) {
  return 8 * (Math.log(e + 1) - 2);
}
function ze(e) {
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
function ja(e, t) {
  if (!e)
    return () => {
    };
  const n = e.style.cssText;
  return Object.assign(e.style, t), () => {
    e.style.cssText = n;
  };
}
function O_(...e) {
  return (...t) => {
    for (const n of e)
      typeof n == "function" && n(...t);
  };
}
const Re = {
  DURATION: 0.5,
  EASE: [0.32, 0.72, 0, 1]
}, ku = 0.4, E_ = 0.25, P_ = 100, Du = 8, Lo = 16, Au = 26, pl = "vaul-dragging";
function k_({
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
  }), Fn(() => {
    typeof window < "u" && window.removeEventListener("resize", u);
  });
  const d = $(
    () => (t.value && e.value === t.value[t.value.length - 1]) ?? null
  ), c = $(
    () => t.value && t.value.length > 0 && ((a == null ? void 0 : a.value) || (a == null ? void 0 : a.value) === 0) && !Number.isNaN(a == null ? void 0 : a.value) && t.value[(a == null ? void 0 : a.value) ?? -1] === e.value || !t.value
  ), p = $(
    () => {
      var S;
      return ((S = t.value) == null ? void 0 : S.findIndex((B) => B === e.value)) ?? null;
    }
  ), f = $(
    () => {
      var S;
      return ((S = t.value) == null ? void 0 : S.map((B) => {
        const D = typeof B == "string";
        let O = 0;
        if (D && (O = Number.parseInt(B, 10)), ze(l.value)) {
          const P = D ? O : i.value ? B * i.value.innerHeight : 0;
          return i.value ? l.value === "bottom" ? i.value.innerHeight - P : -i.value.innerHeight + P : P;
        }
        const T = D ? O : i.value ? B * i.value.innerWidth : 0;
        return i.value ? l.value === "right" ? i.value.innerWidth - T : -i.value.innerWidth + T : T;
      })) ?? [];
    }
  ), v = $(
    () => {
      var S;
      return p.value !== null ? (S = f.value) == null ? void 0 : S[p.value] : null;
    }
  ), m = (S) => {
    var B, D, O, T;
    const P = ((B = f.value) == null ? void 0 : B.findIndex((M) => M === S)) ?? null;
    se(() => {
      var M;
      r(P, f.value), Xe((M = n.value) == null ? void 0 : M.$el, {
        transition: `transform ${Re.DURATION}s cubic-bezier(${Re.EASE.join(",")})`,
        transform: ze(l.value) ? `translate3d(0, ${S}px, 0)` : `translate3d(${S}px, 0, 0)`
      });
    }), f.value && P !== f.value.length - 1 && P !== (a == null ? void 0 : a.value) ? Xe((D = o.value) == null ? void 0 : D.$el, {
      transition: `opacity ${Re.DURATION}s cubic-bezier(${Re.EASE.join(",")})`,
      opacity: "0"
    }) : Xe((O = o.value) == null ? void 0 : O.$el, {
      transition: `opacity ${Re.DURATION}s cubic-bezier(${Re.EASE.join(",")})`,
      opacity: "1"
    }), e.value = P !== null ? ((T = t.value) == null ? void 0 : T[P]) ?? null : null;
  };
  ne(
    [e, f, t],
    () => {
      var S;
      if (e.value) {
        const B = ((S = t.value) == null ? void 0 : S.findIndex((D) => D === e.value)) ?? -1;
        f.value && B !== -1 && typeof f.value[B] == "number" && m(f.value[B]);
      }
    },
    {
      immediate: !0
      // if you want to run the effect immediately as well
    }
  );
  function g({
    draggedDistance: S,
    closeDrawer: B,
    velocity: D,
    dismissible: O
  }) {
    var T, P, M;
    if (a.value === void 0)
      return;
    const q = l.value === "bottom" || l.value === "right" ? (v.value ?? 0) - S : (v.value ?? 0) + S, A = p.value === a.value - 1, z = p.value === 0, I = S > 0;
    if (A && Xe((T = o.value) == null ? void 0 : T.$el, {
      transition: `opacity ${Re.DURATION}s cubic-bezier(${Re.EASE.join(",")})`
    }), D > 2 && !I) {
      O ? B() : m(f.value[0]);
      return;
    }
    if (D > 2 && I && f && t.value) {
      m(f.value[t.value.length - 1]);
      return;
    }
    const Q = (P = f.value) == null ? void 0 : P.reduce((N, R) => typeof N != "number" || typeof R != "number" ? N : Math.abs(R - q) < Math.abs(N - q) ? R : N), U = ze(l.value) ? window.innerHeight : window.innerWidth;
    if (D > ku && Math.abs(S) < U * 0.4) {
      const N = I ? 1 : -1;
      if (N > 0 && d) {
        m(f.value[(((M = t.value) == null ? void 0 : M.length) ?? 0) - 1]);
        return;
      }
      if (z && N < 0 && O && B(), p.value === null)
        return;
      m(f.value[p.value + N]);
      return;
    }
    m(Q);
  }
  function _({ draggedDistance: S }) {
    var B;
    if (v.value === null)
      return;
    const D = l.value === "bottom" || l.value === "right" ? v.value - S : v.value + S;
    (l.value === "bottom" || l.value === "right") && D < f.value[f.value.length - 1] || (l.value === "top" || l.value === "left") && D > f.value[f.value.length - 1] || Xe((B = n.value) == null ? void 0 : B.$el, {
      transform: ze(l.value) ? `translate3d(0, ${D}px, 0)` : `translate3d(${D}px, 0, 0)`
    });
  }
  function C(S, B) {
    if (!t.value || typeof p.value != "number" || !f.value || a.value === void 0)
      return null;
    const D = p.value === a.value - 1;
    if (p.value >= a.value && B)
      return 0;
    if (D && !B)
      return 1;
    if (!c.value && !D)
      return null;
    const O = D ? p.value + 1 : p.value - 1, T = D ? f.value[O] - f.value[O - 1] : f.value[O + 1] - f.value[O], P = S / Math.abs(T);
    return D ? 1 - P : P;
  }
  return {
    isLastSnapPoint: d,
    shouldFade: c,
    getPercentageDragged: C,
    activeSnapPointIndex: p,
    onRelease: g,
    onDrag: _,
    snapPointsOffset: f
  };
}
function fl() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
let Jn = null;
function D_(e) {
  const { isOpen: t, modal: n, nested: o, hasBeenOpened: a, preventScrollRestoration: r, noBodyStyles: l } = e, i = E(typeof window < "u" ? window.location.href : ""), u = E(0);
  function d() {
    if (fl() && Jn === null && t.value && !l.value) {
      Jn = {
        position: document.body.style.position,
        top: document.body.style.top,
        left: document.body.style.left,
        height: document.body.style.height
      };
      const { scrollX: p, innerHeight: f } = window;
      document.body.style.setProperty("position", "fixed", "important"), Object.assign(document.body.style, {
        top: `${-u.value}px`,
        left: `${-p}px`,
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
  function c() {
    if (fl() && Jn !== null && !l.value) {
      const p = -Number.parseInt(document.body.style.top, 10), f = -Number.parseInt(document.body.style.left, 10);
      Object.assign(document.body.style, Jn), window.requestAnimationFrame(() => {
        if (r.value && i.value !== window.location.href) {
          i.value = window.location.href;
          return;
        }
        window.scrollTo(f, p);
      }), Jn = null;
    }
  }
  return ie(() => {
    function p() {
      u.value = window.scrollY;
    }
    p(), window.addEventListener("scroll", p), Ke(() => {
      window.removeEventListener("scroll", p);
    });
  }), ne([t, a, i], () => {
    o.value || !a.value || (t.value ? (window.matchMedia("(display-mode: standalone)").matches || d(), n.value || setTimeout(() => {
      c();
    }, 500)) : c());
  }), { restorePositionSetting: c };
}
function A_(e, t) {
  return e && e.value ? e : t;
}
function T_(e) {
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
    closeThreshold: f,
    activeSnapPoint: v,
    fadeFromIndex: m,
    direction: g,
    noBodyStyles: _,
    handleOnly: C,
    preventScrollRestoration: S
  } = e, B = E(r.value ?? !1), D = E(!1), O = E(!1), T = E(!1), P = E(null), M = E(null), q = E(null), A = E(null), z = E(null), I = E(!1), Q = E(null), U = E(0), N = E(!1);
  E(0);
  const R = E(null);
  E(0);
  const ae = $(() => {
    var re;
    return ((re = R.value) == null ? void 0 : re.$el.getBoundingClientRect().height) || 0;
  }), G = A_(
    e.snapPoints,
    E(void 0)
  ), L = $(() => {
    var re;
    return G && (((re = G.value) == null ? void 0 : re.length) ?? 0) > 0;
  }), ee = E(null), {
    activeSnapPointIndex: W,
    onRelease: _e,
    snapPointsOffset: ke,
    onDrag: Be,
    shouldFade: Ee,
    getPercentageDragged: Ve
  } = k_({
    snapPoints: G,
    activeSnapPoint: v,
    drawerRef: R,
    fadeFromIndex: m,
    overlayRef: P,
    onSnapPointChange: H,
    direction: g
  });
  function H(re, Oe) {
    G.value && re === Oe.length - 1 && (M.value = /* @__PURE__ */ new Date());
  }
  D_({
    isOpen: B,
    modal: u,
    nested: i,
    hasBeenOpened: D,
    noBodyStyles: _,
    preventScrollRestoration: S
  });
  function Y() {
    return (window.innerWidth - Au) / window.innerWidth;
  }
  function oe(re, Oe) {
    var Pe;
    if (!re)
      return !1;
    let Se = re;
    const Ne = (Pe = window.getSelection()) == null ? void 0 : Pe.toString(), He = R.value ? Ro(R.value.$el, g.value) : null, nt = /* @__PURE__ */ new Date();
    if (Se.hasAttribute("data-vaul-no-drag") || Se.closest("[data-vaul-no-drag]"))
      return !1;
    if (g.value === "right" || g.value === "left")
      return !0;
    if (M.value && nt.getTime() - M.value.getTime() < 500)
      return !1;
    if (He !== null && (g.value === "bottom" ? He > 0 : He < 0))
      return !0;
    if (Ne && Ne.length > 0)
      return !1;
    if (z.value && nt.getTime() - z.value.getTime() < p.value && He === 0 || Oe)
      return z.value = nt, !1;
    for (; Se; ) {
      if (Se.scrollHeight > Se.clientHeight) {
        if (Se.scrollTop !== 0)
          return z.value = /* @__PURE__ */ new Date(), !1;
        if (Se.getAttribute("role") === "dialog")
          return !0;
      }
      Se = Se.parentNode;
    }
    return !0;
  }
  function ue(re) {
    !l.value && !G.value || R.value && !R.value.$el.contains(re.target) || (O.value = !0, q.value = /* @__PURE__ */ new Date(), re.target.setPointerCapture(re.pointerId), U.value = ze(g.value) ? re.clientY : re.clientX);
  }
  function pe(re) {
    var Oe, Pe, Se, Ne, He, nt;
    if (R.value && O.value) {
      const Dt = g.value === "bottom" || g.value === "right" ? 1 : -1, bn = (U.value - (ze(g.value) ? re.clientY : re.clientX)) * Dt, nn = bn > 0, Co = G.value && !l.value && !nn;
      if (Co && W.value === 0)
        return;
      const on = Math.abs(bn), At = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      let ft = on / ae.value;
      const wn = Ve(on, nn);
      if (wn !== null && (ft = wn), Co && ft >= 1 || !I.value && !oe(re.target, nn))
        return;
      if ((Oe = R == null ? void 0 : R.value) == null || Oe.$el.classList.add(pl), I.value = !0, Xe((Pe = R.value) == null ? void 0 : Pe.$el, {
        transition: "none"
      }), Xe((Se = P.value) == null ? void 0 : Se.$el, {
        transition: "none"
      }), G.value && Be({ draggedDistance: bn }), nn && !G.value) {
        const Tt = $_(bn), xn = Math.min(Tt * -1, 0) * Dt;
        Xe((Ne = R.value) == null ? void 0 : Ne.$el, {
          transform: ze(g.value) ? `translate3d(0, ${xn}px, 0)` : `translate3d(${xn}px, 0, 0)`
        });
        return;
      }
      const _n = 1 - ft;
      if ((Ee.value || m.value && W.value === m.value - 1) && (t(ft), Xe(
        (He = P.value) == null ? void 0 : He.$el,
        {
          opacity: `${_n}`,
          transition: "none"
        },
        !0
      )), At && P.value && d.value) {
        const Tt = Math.min(Y() + ft * (1 - Y()), 1), xn = 8 - ft * 8, Bo = Math.max(0, 14 - ft * 14);
        Xe(
          At,
          {
            borderRadius: `${xn}px`,
            transform: ze(g.value) ? `scale(${Tt}) translate3d(0, ${Bo}px, 0)` : `scale(${Tt}) translate3d(${Bo}px, 0, 0)`,
            transition: "none"
          },
          !0
        );
      }
      if (!G.value) {
        const Tt = on * Dt;
        Xe((nt = R.value) == null ? void 0 : nt.$el, {
          transform: ze(g.value) ? `translate3d(0, ${Tt}px, 0)` : `translate3d(${Tt}px, 0, 0)`
        });
      }
    }
  }
  function J() {
    var re;
    if (!R.value)
      return;
    const Oe = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]"), Pe = Ro(R.value.$el, g.value);
    Xe(R.value.$el, {
      transform: "translate3d(0, 0, 0)",
      transition: `transform ${Re.DURATION}s cubic-bezier(${Re.EASE.join(",")})`
    }), Xe((re = P.value) == null ? void 0 : re.$el, {
      transition: `opacity ${Re.DURATION}s cubic-bezier(${Re.EASE.join(",")})`,
      opacity: "1"
    }), d.value && Pe && Pe > 0 && B.value && Xe(
      Oe,
      {
        borderRadius: `${Du}px`,
        overflow: "hidden",
        ...ze(g.value) ? {
          transform: `scale(${Y()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
          transformOrigin: "top"
        } : {
          transform: `scale(${Y()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
          transformOrigin: "left"
        },
        transitionProperty: "transform, border-radius",
        transitionDuration: `${Re.DURATION}s`,
        transitionTimingFunction: `cubic-bezier(${Re.EASE.join(",")})`
      },
      !0
    );
  }
  function me(re) {
    R.value && (o(), re || (B.value = !1), window.setTimeout(() => {
      G.value && (v.value = G.value[0]);
    }, Re.DURATION * 1e3));
  }
  xe(() => {
    if (!B.value && d.value && __) {
      const re = setTimeout(() => {
        S_(document.body);
      }, 200);
      return () => clearTimeout(re);
    }
  }), ne(r, () => {
    B.value = r.value, r.value || me();
  });
  function $e(re) {
    if (!O.value || !R.value)
      return;
    R.value.$el.classList.remove(pl), I.value = !1, O.value = !1, A.value = /* @__PURE__ */ new Date();
    const Oe = Ro(R.value.$el, g.value);
    if (!oe(re.target, !1) || !Oe || Number.isNaN(Oe) || q.value === null)
      return;
    const Pe = A.value.getTime() - q.value.getTime(), Se = U.value - (ze(g.value) ? re.clientY : re.clientX), Ne = Math.abs(Se) / Pe;
    if (Ne > 0.05 && (T.value = !0, window.setTimeout(() => {
      T.value = !1;
    }, 200)), G.value) {
      const nt = g.value === "bottom" || g.value === "right" ? 1 : -1;
      _e({
        draggedDistance: Se * nt,
        closeDrawer: me,
        velocity: Ne,
        dismissible: l.value
      }), n(!0);
      return;
    }
    if (g.value === "bottom" || g.value === "right" ? Se > 0 : Se < 0) {
      J(), n(!0);
      return;
    }
    if (Ne > ku) {
      me(), n(!1);
      return;
    }
    const He = Math.min(
      R.value.$el.getBoundingClientRect().height ?? 0,
      window.innerHeight
    );
    if (Oe >= He * f.value) {
      me(), n(!1);
      return;
    }
    n(!0), J();
  }
  ne(B, (re) => {
    re && (M.value = /* @__PURE__ */ new Date()), a(re);
  }, { immediate: !0 });
  function De(re) {
    var Oe, Pe;
    const Se = re ? (window.innerWidth - Lo) / window.innerWidth : 1, Ne = re ? -16 : 0;
    Q.value && window.clearTimeout(Q.value), Xe((Oe = R.value) == null ? void 0 : Oe.$el, {
      transition: `transform ${Re.DURATION}s cubic-bezier(${Re.EASE.join(",")})`,
      transform: `scale(${Se}) translate3d(0, ${Ne}px, 0)`
    }), !re && (Pe = R.value) != null && Pe.$el && (Q.value = window.setTimeout(() => {
      var He, nt;
      const Dt = Ro((He = R.value) == null ? void 0 : He.$el, g.value);
      Xe((nt = R.value) == null ? void 0 : nt.$el, {
        transition: "none",
        transform: ze(g.value) ? `translate3d(0, ${Dt}px, 0)` : `translate3d(${Dt}px, 0, 0)`
      });
    }, 500));
  }
  function Je(re) {
    var Oe;
    if (re < 0)
      return;
    const Pe = ze(g.value) ? window.innerHeight : window.innerWidth, Se = (Pe - Lo) / Pe, Ne = Se + re * (1 - Se), He = -16 + re * Lo;
    Xe((Oe = R.value) == null ? void 0 : Oe.$el, {
      transform: ze(g.value) ? `scale(${Ne}) translate3d(0, ${He}px, 0)` : `scale(${Ne}) translate3d(${He}px, 0, 0)`,
      transition: "none"
    });
  }
  function at(re) {
    var Oe;
    const Pe = ze(g.value) ? window.innerHeight : window.innerWidth, Se = re ? (Pe - Lo) / Pe : 1, Ne = re ? -16 : 0;
    re && Xe((Oe = R.value) == null ? void 0 : Oe.$el, {
      transition: `transform ${Re.DURATION}s cubic-bezier(${Re.EASE.join(",")})`,
      transform: ze(g.value) ? `scale(${Se}) translate3d(0, ${Ne}px, 0)` : `scale(${Se}) translate3d(${Ne}px, 0, 0)`
    });
  }
  return {
    open: r,
    isOpen: B,
    modal: u,
    keyboardIsOpen: N,
    hasBeenOpened: D,
    drawerRef: R,
    drawerHeightRef: ae,
    overlayRef: P,
    handleRef: ee,
    isDragging: O,
    dragStartTime: q,
    isAllowedToDrag: I,
    snapPoints: G,
    activeSnapPoint: v,
    hasSnapPoints: L,
    pointerStart: U,
    dismissible: l,
    snapPointsOffset: ke,
    direction: g,
    shouldFade: Ee,
    fadeFromIndex: m,
    shouldScaleBackground: d,
    setBackgroundColorOnScale: c,
    onPress: ue,
    onDrag: pe,
    onRelease: $e,
    closeDrawer: me,
    onNestedDrag: Je,
    onNestedRelease: at,
    onNestedOpenChange: De,
    emitClose: o,
    emitDrag: t,
    emitRelease: n,
    emitOpenChange: a,
    nested: i,
    handleOnly: C,
    noBodyStyles: _
  };
}
const I_ = /* @__PURE__ */ b({
  __name: "DrawerRoot",
  props: {
    activeSnapPoint: { default: void 0 },
    closeThreshold: { default: E_ },
    shouldScaleBackground: { type: Boolean, default: void 0 },
    setBackgroundColorOnScale: { type: Boolean, default: !0 },
    scrollLockTimeout: { default: P_ },
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
    dr();
    const r = $(() => o.fadeFromIndex ?? (o.snapPoints && o.snapPoints.length - 1)), l = cl(o, "open", a, {
      defaultValue: o.defaultOpen,
      passive: o.open === void 0
    }), i = cl(o, "activeSnapPoint", a, {
      passive: o.activeSnapPoint === void 0
    }), u = {
      emitDrag: (m) => a("drag", m),
      emitRelease: (m) => a("release", m),
      emitClose: () => a("close"),
      emitOpenChange: (m) => {
        a("update:open", m), setTimeout(() => {
          a("animationEnd", m);
        }, Re.DURATION * 1e3);
      }
    }, { closeDrawer: d, hasBeenOpened: c, modal: p, isOpen: f } = B_(
      T_({
        ...u,
        ...ye(o),
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
      f.value = m, m ? c.value = !0 : d();
    }
    return t({
      open: f
    }), (m, g) => (h(), x(s(F0), {
      open: s(f),
      modal: s(p),
      "onUpdate:open": v
    }, {
      default: y(() => [
        w(m.$slots, "default", { open: s(f) })
      ]),
      _: 3
    }, 8, ["open", "modal"]));
  }
}), M_ = /* @__PURE__ */ b({
  __name: "DrawerOverlay",
  setup(e) {
    const { overlayRef: t, hasSnapPoints: n, isOpen: o, shouldFade: a } = us();
    return (r, l) => (h(), x(s(mb), {
      ref_key: "overlayRef",
      ref: t,
      "data-vaul-overlay": "",
      "data-vaul-snap-points": s(o) && s(n) ? "true" : "false",
      "data-vaul-snap-points-overlay": s(o) && s(a) ? "true" : "false"
    }, null, 8, ["data-vaul-snap-points", "data-vaul-snap-points-overlay"]));
  }
}), F_ = () => () => {
};
function R_() {
  const { direction: e, isOpen: t, shouldScaleBackground: n, setBackgroundColorOnScale: o, noBodyStyles: a } = us(), r = E(null), l = E(document.body.style.backgroundColor);
  function i() {
    return (window.innerWidth - Au) / window.innerWidth;
  }
  xe((u) => {
    if (t.value && n.value) {
      r.value && clearTimeout(r.value);
      const d = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      if (!d)
        return;
      O_(
        o.value && !a.value ? ja(document.body, { background: "black" }) : F_,
        ja(d, {
          transformOrigin: ze(e.value) ? "top" : "left",
          transitionProperty: "transform, border-radius",
          transitionDuration: `${Re.DURATION}s`,
          transitionTimingFunction: `cubic-bezier(${Re.EASE.join(",")})`
        })
      );
      const c = ja(d, {
        borderRadius: `${Du}px`,
        overflow: "hidden",
        ...ze(e.value) ? {
          transform: `scale(${i()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`
        } : {
          transform: `scale(${i()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`
        }
      });
      u(() => {
        c(), r.value = window.setTimeout(() => {
          l.value ? document.body.style.background = l.value : document.body.style.removeProperty("background");
        }, Re.DURATION * 1e3);
      });
    }
  }, { flush: "pre" });
}
const L_ = /* @__PURE__ */ b({
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
      keyboardIsOpen: f,
      closeDrawer: v,
      direction: m,
      handleOnly: g
    } = us();
    R_();
    const _ = E(!1), C = $(() => o.value && o.value.length > 0 ? `${o.value[0]}px` : "0");
    function S(O) {
      if (!d.value || O.defaultPrevented) {
        O.preventDefault();
        return;
      }
      f.value && (f.value = !1), p.value ? c(!1) : O.preventDefault();
    }
    function B(O) {
      g.value || l(O);
    }
    function D(O) {
      g.value || i(O);
    }
    return xe(() => {
      a.value && window.requestAnimationFrame(() => {
        _.value = !0;
      });
    }), (O, T) => (h(), x(s(ub), {
      ref_key: "drawerRef",
      ref: r,
      "data-vaul-drawer": "",
      "data-vaul-drawer-direction": s(m),
      "data-vaul-delayed-snap-points": _.value ? "true" : "false",
      "data-vaul-snap-points": s(n) && s(a) ? "true" : "false",
      style: _t({ "--snap-point-height": C.value }),
      onPointerdown: B,
      onPointermove: D,
      onPointerup: s(u),
      onPointerDownOutside: S,
      onOpenAutoFocus: T[0] || (T[0] = Fe(() => {
      }, ["prevent"])),
      onEscapeKeyDown: T[1] || (T[1] = (P) => {
        s(p) || P.preventDefault();
      })
    }, {
      default: y(() => [
        w(O.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-vaul-drawer-direction", "data-vaul-delayed-snap-points", "data-vaul-snap-points", "style", "onPointerup"]));
  }
}), jx = /* @__PURE__ */ b({
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
    const a = Ct(e, t);
    return (r, l) => (h(), x(s(I_), k({ "data-slot": "drawer" }, s(a)), {
      default: y(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Kx = /* @__PURE__ */ b({
  __name: "DrawerClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(L0), k({ "data-slot": "drawer-close" }, t), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), V_ = /* @__PURE__ */ b({
  __name: "DrawerOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = qe(t, "class");
    return (o, a) => (h(), x(s(M_), k({ "data-slot": "drawer-overlay" }, s(n), {
      class: s(V)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        t.class
      )
    }), null, 16, ["class"]));
  }
}), Hx = /* @__PURE__ */ b({
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
    const n = e, a = Ct(n, t);
    return (r, l) => (h(), x(s(yb), null, {
      default: y(() => [
        F(V_),
        F(s(L_), k({ "data-slot": "drawer-content" }, s(a), {
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
            l[0] || (l[0] = de("div", { class: "mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full bg-muted group-data-[vaul-drawer-direction=bottom]/drawer-content:block" }, null, -1)),
            w(r.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Wx = /* @__PURE__ */ b({
  __name: "DrawerDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = qe(t, "class");
    return (o, a) => (h(), x(s(cb), k({ "data-slot": "drawer-description" }, s(n), {
      class: s(V)("text-muted-foreground text-sm", t.class)
    }), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ux = /* @__PURE__ */ b({
  __name: "DrawerFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), K("div", {
      "data-slot": "drawer-footer",
      class: le(s(V)("mt-auto flex flex-col gap-2 p-4", t.class))
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), Gx = /* @__PURE__ */ b({
  __name: "DrawerHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), K("div", {
      "data-slot": "drawer-header",
      class: le(s(V)("flex flex-col gap-1.5 p-4", t.class))
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), Yx = /* @__PURE__ */ b({
  __name: "DrawerTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = qe(t, "class");
    return (o, a) => (h(), x(s(wb), k({ "data-slot": "drawer-title" }, s(n), {
      class: s(V)("text-foreground font-semibold", t.class)
    }), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Xx = /* @__PURE__ */ b({
  __name: "DrawerTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(xb), k({ "data-slot": "drawer-trigger" }, t), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zx = /* @__PURE__ */ b({
  __name: "DropdownMenu",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = ce(e, t);
    return (r, l) => (h(), x(s(Jf), Z(te(s(a))), {
      default: y(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Qx = /* @__PURE__ */ b({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const n = Ye(e);
    return (o, a) => (h(), x(s(ev), k({ class: "outline-none" }, s(n)), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Jx = /* @__PURE__ */ b({
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
    const n = e, o = t, a = $(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = ce(a, o);
    return (l, i) => (h(), x(s(tv), null, {
      default: y(() => [
        F(s(nv), k(s(r), {
          class: s(V)(
            "z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            n.class
          )
        }), {
          default: y(() => [
            w(l.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), eC = /* @__PURE__ */ b({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(av), Z(te(t)), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), tC = /* @__PURE__ */ b({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = ce(e, t);
    return (r, l) => (h(), x(s(iv), Z(te(s(a))), {
      default: y(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), nC = /* @__PURE__ */ b({
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
    const t = e, n = $(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = Ye(n);
    return (a, r) => (h(), x(s(ov), k(s(o), {
      class: s(V)(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        e.inset && "pl-8",
        t.class
      )
    }), {
      default: y(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), q_ = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, oC = /* @__PURE__ */ b({
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
    const n = e, o = t, a = $(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = ce(a, o);
    return (l, i) => (h(), x(s(sv), k(s(r), {
      class: s(V)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        n.class
      )
    }), {
      default: y(() => [
        de("span", q_, [
          F(s(xi), null, {
            default: y(() => [
              F(s(ou), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), N_ = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, aC = /* @__PURE__ */ b({
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
    const n = e, o = t, a = $(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = ce(a, o);
    return (l, i) => (h(), x(s(uv), k(s(r), {
      class: s(V)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        n.class
      )
    }), {
      default: y(() => [
        de("span", N_, [
          F(s(xi), null, {
            default: y(() => [
              F(s(Eh), { class: "h-4 w-4 fill-current" })
            ]),
            _: 1
          })
        ]),
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), rC = /* @__PURE__ */ b({
  __name: "DropdownMenuShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), K("span", {
      class: le(s(V)("ml-auto text-xs tracking-widest opacity-60", t.class))
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), sC = /* @__PURE__ */ b({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = $(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), x(s(rv), k(n.value, {
      class: s(V)("-mx-1 my-1 h-px bg-muted", t.class)
    }), null, 16, ["class"]));
  }
}), lC = /* @__PURE__ */ b({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  setup(e) {
    const t = e, n = $(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = Ye(n);
    return (a, r) => (h(), x(s(lv), k(s(o), {
      class: s(V)("px-2 py-1.5 text-sm font-semibold", e.inset && "pl-8", t.class)
    }), {
      default: y(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), iC = /* @__PURE__ */ b({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = ce(e, t);
    return (r, l) => (h(), x(s(dv), Z(te(s(a))), {
      default: y(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), uC = /* @__PURE__ */ b({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = $(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = Ye(n);
    return (a, r) => (h(), x(s(pv), k(s(o), {
      class: s(V)(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
        t.class
      )
    }), {
      default: y(() => [
        w(a.$slots, "default"),
        F(s($h), { class: "ml-auto h-4 w-4" })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), dC = /* @__PURE__ */ b({
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
    const n = e, o = t, a = $(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = ce(a, o);
    return (l, i) => (h(), x(s(cv), k(s(r), {
      class: s(V)(
        "z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        n.class
      )
    }), {
      default: y(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), cC = /* @__PURE__ */ b({
  __name: "Empty",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), K("div", {
      "data-slot": "empty",
      class: le(
        s(V)(
          "flex min-w-0 flex-1 flex-col items-center justify-center gap-6 text-balance rounded-lg border-dashed p-6 text-center md:p-12",
          t.class
        )
      )
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), pC = /* @__PURE__ */ b({
  __name: "EmptyContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), K("div", {
      "data-slot": "empty-content",
      class: le(
        s(V)(
          "flex w-full min-w-0 max-w-sm flex-col items-center gap-4 text-balance text-sm",
          t.class
        )
      )
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), fC = /* @__PURE__ */ b({
  __name: "EmptyDescription",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), K("p", {
      "data-slot": "empty-description",
      class: le(
        s(V)(
          "text-muted-foreground [&>a:hover]:text-primary text-sm/relaxed [&>a]:underline [&>a]:underline-offset-4",
          t.class
        )
      )
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), vC = /* @__PURE__ */ b({
  __name: "EmptyHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), K("div", {
      "data-slot": "empty-header",
      class: le(s(V)("flex max-w-sm flex-col items-center gap-2 text-center", t.class))
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), z_ = ["data-variant"], mC = /* @__PURE__ */ b({
  __name: "EmptyMedia",
  props: {
    class: {},
    variant: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), K("div", {
      "data-slot": "empty-icon",
      "data-variant": e.variant,
      class: le(s(V)(s(j_)({ variant: e.variant }), t.class))
    }, [
      w(n.$slots, "default")
    ], 10, z_));
  }
}), gC = /* @__PURE__ */ b({
  __name: "EmptyTitle",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), K("div", {
      "data-slot": "empty-title",
      class: le(s(V)("text-lg font-medium tracking-tight", t.class))
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), j_ = Un(
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
), hC = /* @__PURE__ */ b({
  __name: "Input",
  props: {
    defaultValue: {},
    modelValue: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = ru(n, "modelValue", t, {
      passive: !0,
      defaultValue: n.defaultValue
    });
    return (r, l) => Mn((h(), K("input", {
      "onUpdate:modelValue": l[0] || (l[0] = (i) => tt(a) ? a.value = i : null),
      class: le(
        s(V)(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          n.class
        )
      )
    }, null, 2)), [
      [bl, s(a)]
    ]);
  }
});
function K_(e) {
  return Qo() ? (Jo(e), !0) : !1;
}
function H_(e) {
  if (!tt(e))
    return Yt(e);
  const t = new Proxy({}, {
    get(n, o, a) {
      return s(Reflect.get(e.value, o, a));
    },
    set(n, o, a) {
      return tt(e.value[o]) && !tt(a) ? e.value[o].value = a : e.value[o] = a, !0;
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
  return Yt(t);
}
function W_(e) {
  return H_($(e));
}
function U_(e, ...t) {
  const n = t.flat(), o = n[0];
  return W_(() => Object.fromEntries(typeof o == "function" ? Object.entries(ye(e)).filter(([a, r]) => !o(Ue(r), a)) : Object.entries(ye(e)).filter((a) => !n.includes(a[0]))));
}
const Tu = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const G_ = Object.prototype.toString, Y_ = (e) => G_.call(e) === "[object Object]", X_ = () => {
};
function Ka(e) {
  return Array.isArray(e) ? e : [e];
}
function Z_(...e) {
  if (e.length !== 1)
    return ir(...e);
  const t = e[0];
  return typeof t == "function" ? Rn(vr(() => ({ get: t, set: X_ }))) : E(t);
}
function Q_(e, t, n) {
  return ne(
    e,
    t,
    {
      ...n,
      immediate: !0
    }
  );
}
const zo = Tu ? window : void 0, We = Tu ? window.document : void 0;
function J_(e) {
  var t;
  const n = Ue(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
function e1(...e) {
  const t = [], n = () => {
    t.forEach((i) => i()), t.length = 0;
  }, o = (i, u, d, c) => (i.addEventListener(u, d, c), () => i.removeEventListener(u, d, c)), a = $(() => {
    const i = Ka(Ue(e[0])).filter((u) => u != null);
    return i.every((u) => typeof u != "string") ? i : void 0;
  }), r = Q_(
    () => {
      var i, u;
      return [
        (u = (i = a.value) == null ? void 0 : i.map((d) => J_(d))) != null ? u : [zo].filter((d) => d != null),
        Ka(Ue(a.value ? e[1] : e[0])),
        Ka(s(a.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        Ue(a.value ? e[3] : e[2])
      ];
    },
    ([i, u, d, c]) => {
      if (n(), !(i != null && i.length) || !(u != null && u.length) || !(d != null && d.length))
        return;
      const p = Y_(c) ? { ...c } : c;
      t.push(
        ...i.flatMap(
          (f) => u.flatMap(
            (v) => d.map((m) => o(f, v, m, p))
          )
        )
      );
    },
    { flush: "post" }
  ), l = () => {
    r(), n();
  };
  return K_(n), l;
}
function t1(e, t) {
  const n = rt(t);
  return ne(
    Z_(e),
    (o, a) => {
      n.value = a;
    },
    { flush: "sync" }
  ), Rn(n);
}
const n1 = `
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
}`, o1 = b({
  props: { fallback: {
    type: String,
    required: !0
  } },
  setup(e) {
    return () => Ze("noscript", { innerHTML: `<style>${e.fallback}</style>` });
  }
}), Iu = Symbol("vue-otp-context");
function a1(e) {
  return [
    setTimeout(e, 0),
    setTimeout(e, 10),
    setTimeout(e, 50)
  ];
}
const r1 = 18, Mu = 40, s1 = `${Mu}px`, l1 = [
  "[data-lastpass-icon-root]",
  "com-1password-button",
  "[data-dashlanecreated]",
  '[style$="2147483647 !important;"]'
].join(",");
function i1({ containerRef: e, inputRef: t, pushPasswordManagerStrategy: n, isFocused: o }) {
  const a = E({
    done: !1,
    refocused: !1
  }), r = E(!1), l = E(!1), i = E(!1), u = $(() => n === "none" ? !1 : (n === "increase-width" || n === "experimental-no-flickering") && r.value && l.value), d = () => {
    const f = e.value, v = t.value;
    if (!f || !v || i.value || n === "none") return;
    const m = f, g = m.getBoundingClientRect().left + m.offsetWidth, _ = m.getBoundingClientRect().top + m.offsetHeight / 2, C = g - r1, S = _;
    if (!(document.querySelectorAll(l1).length === 0 && document.elementFromPoint(C, S) === f) && (r.value = !0, i.value = !0, !a.value.refocused && document.activeElement === v)) {
      const B = [v.selectionStart, v.selectionEnd];
      v.blur(), v.focus(), v.setSelectionRange(B[0], B[1]), a.value.refocused = !0;
    }
  }, c = () => {
    const f = e.value;
    !f || n === "none" || (l.value = window.innerWidth - f.getBoundingClientRect().right >= Mu);
  };
  let p;
  return ie(() => {
    c(), p = setInterval(c, 1e3);
  }), Ke(() => {
    clearInterval(p);
  }), ne([o, t], (f, v, m) => {
    const [g, _] = f, C = g || document.activeElement === _;
    if (n === "none" || !C) return;
    const S = setTimeout(d, 0), B = setTimeout(d, 2e3), D = setTimeout(d, 5e3), O = setTimeout(() => {
      i.value = !0;
    }, 6e3);
    m(() => {
      clearTimeout(S), clearTimeout(B), clearTimeout(D), clearTimeout(O);
    });
  }), {
    hasPWMBadge: r,
    willPushPWMBadge: u,
    PWM_BADGE_SPACE_WIDTH: s1
  };
}
const u1 = { style: {
  position: "absolute",
  inset: "0",
  "pointer-events": "none"
} }, d1 = [
  "value",
  "data-input-otp-placeholder-shown",
  "data-input-otp-mss",
  "data-input-otp-mse",
  "aria-placeholder",
  "pattern"
], c1 = /* @__PURE__ */ b({
  name: "OTPInput",
  inheritAttrs: !1,
  __name: "OTPInput",
  props: /* @__PURE__ */ ys({
    maxlength: {},
    textAlign: { default: "left" },
    inputmode: { default: "numeric" },
    containerClass: {},
    pushPasswordManagerStrategy: { default: "increase-width" },
    noScriptCssFallback: { default: n1 },
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
  emits: /* @__PURE__ */ ys([
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
    var A, z, I, Q, U;
    const o = e, a = n, [r] = Yu(e, "modelValue"), l = t1(r), i = $(() => o.pattern ? typeof o.pattern == "string" ? new RegExp(o.pattern) : o.pattern : null), u = rt(!1), d = rt(!1), c = rt(null), p = rt(null), f = rt(null), v = rt(null), m = (z = (A = zo == null ? void 0 : zo.CSS) == null ? void 0 : A.supports) == null ? void 0 : z.call(A, "-webkit-touch-callout", "none");
    let g = { prev: [
      (I = f.value) == null ? void 0 : I.selectionStart,
      (Q = f.value) == null ? void 0 : Q.selectionEnd,
      (U = f.value) == null ? void 0 : U.selectionDirection
    ] };
    function _(N, R) {
      try {
        N.insertRule(R);
      } catch {
        console.error("input-otp could not insert CSS rule:", R);
      }
    }
    ie(() => {
      const N = f.value, R = v.value;
      if (!N || !R) return;
      g.prev = [
        N.selectionStart,
        N.selectionEnd,
        N.selectionDirection ?? "none"
      ];
      const ae = e1(We, "selectionchange", G, { capture: !0 });
      function G() {
        if (!N) return;
        if ((We == null ? void 0 : We.activeElement) !== N) {
          c.value = null, p.value = null;
          return;
        }
        const W = N.selectionStart, _e = N.selectionEnd, ke = N.selectionDirection, Be = N.maxLength, Ee = N.value, Ve = g.prev;
        let H = -1, Y = -1, oe;
        if (Ee.length !== 0 && W !== null && _e !== null) {
          const me = W === _e, $e = W === Ee.length && Ee.length < Be;
          if (me && !$e) {
            const De = W;
            if (De === 0)
              H = 0, Y = 1, oe = "forward";
            else if (De === Be)
              H = De - 1, Y = De, oe = "backward";
            else if (Be > 1 && Ee.length > 1) {
              let Je = 0;
              if (Ve[0] !== null && Ve[1] !== null) {
                oe = De < Ve[1] ? "backward" : "forward";
                const at = Ve[0] === Ve[1] && Ve[0] < Be;
                oe === "backward" && !at && (Je = -1);
              }
              H = Je + De, Y = Je + De + 1;
            }
          }
          H !== -1 && Y !== -1 && H !== Y && N.setSelectionRange(H, Y, oe);
        }
        const ue = H !== -1 ? H : W, pe = Y !== -1 ? Y : _e, J = oe ?? ke;
        c.value = ue, p.value = pe, g.prev = [
          ue,
          pe,
          J
        ];
      }
      if (G(), (We == null ? void 0 : We.activeElement) === N && (d.value = !0), !(We != null && We.getElementById("input-otp-style"))) {
        const W = We == null ? void 0 : We.createElement("style");
        if (W.id = "input-otp-style", We == null || We.head.appendChild(W), W.sheet) {
          const _e = "background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";
          _(W.sheet, "[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"), _(W.sheet, `[data-input-otp]:autofill { ${_e} }`), _(W.sheet, `[data-input-otp]:-webkit-autofill { ${_e} }`), _(W.sheet, "@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"), _(W.sheet, "[data-input-otp] + * { pointer-events: all !important; }");
        }
      }
      const L = () => {
        R && R.style.setProperty("--root-height", `${N.clientHeight}px`);
      };
      L();
      const ee = new ResizeObserver(L);
      ee.observe(N), Ke(() => {
        ae(), ee.disconnect();
      });
    }), ne([r], () => {
      a1(() => {
        var G, L, ee, W;
        if (!f.value) return;
        (G = f.value) == null || G.dispatchEvent(new Event("input"));
        const N = (L = f.value) == null ? void 0 : L.selectionStart, R = (ee = f.value) == null ? void 0 : ee.selectionEnd, ae = (W = f.value) == null ? void 0 : W.selectionDirection;
        N !== null && R !== null && (c.value = N ?? null, p.value = R ?? null, g.prev = [
          N,
          R,
          ae
        ]);
      });
    }, { immediate: !0 }), xe(() => {
      l.value !== void 0 && r.value !== l.value && l.value.length < o.maxlength && r.value.length === o.maxlength && a("complete", r.value);
    });
    const C = i1({
      containerRef: v,
      inputRef: f,
      pushPasswordManagerStrategy: o.pushPasswordManagerStrategy,
      isFocused: d
    });
    function S(N) {
      if (N.inputType === "insertText" && N.data !== null) {
        const R = N.currentTarget, ae = R.selectionStart ?? 0, G = R.selectionEnd ?? 0, L = R.value, ee = (ae !== G ? L.slice(0, ae) + N.data + L.slice(G) : L.slice(0, ae) + N.data + L.slice(ae)).slice(0, o.maxlength);
        ee.length > 0 && i.value && !i.value.test(ee) && N.preventDefault();
      }
    }
    function B(N) {
      const R = N.currentTarget.value.slice(0, o.maxlength);
      if (R.length > 0 && i.value && !i.value.test(R)) {
        N.preventDefault();
        return;
      }
      typeof l.value == "string" && R.length < l.value.length && (We == null || We.dispatchEvent(new Event("selectionchange"))), r.value = R, a("input", R);
    }
    function D() {
      const N = f.value;
      if (N) {
        const R = Math.min(N.value.length, o.maxlength - 1), ae = N.value.length;
        N.setSelectionRange(R, ae), c.value = R, p.value = ae;
      }
      d.value = !0;
    }
    function O(N) {
      var Be, Ee, Ve;
      const R = f.value;
      if (!R || !o.pasteTransformer && (!m || !N.clipboardData || !R)) return;
      const ae = (Be = N == null ? void 0 : N.clipboardData) == null ? void 0 : Be.getData("text/plain"), G = o != null && o.pasteTransformer ? o.pasteTransformer(ae) : ae;
      N.preventDefault();
      const L = (Ee = f.value) == null ? void 0 : Ee.selectionStart, ee = (Ve = f.value) == null ? void 0 : Ve.selectionEnd, W = (L !== ee ? r.value.slice(0, L) + G + r.value.slice(ee) : r.value.slice(0, L) + G + r.value.slice(L)).slice(0, o.maxlength);
      if (W.length > 0 && i.value && !i.value.test(W)) return;
      r.value = W, a("input", W);
      const _e = Math.min(W.length, o.maxlength - 1), ke = W.length;
      R == null || R.setSelectionRange(_e, ke), c.value = _e, p.value = ke;
    }
    const T = xt(U_(o, "containerClass", "value", "pattern", "defaultValue", "pushPasswordManagerStrategy", "noScriptCssFallback", "modelValue")), P = $(() => ({
      position: "relative",
      cursor: o.disabled ? "default" : "text",
      userSelect: "none",
      WebkitUserSelect: "none",
      pointerEvents: "none"
    })), M = $(() => ({
      position: "absolute",
      inset: 0,
      width: C.willPushPWMBadge.value ? `calc(100% + ${C.PWM_BADGE_SPACE_WIDTH})` : "100%",
      clipPath: C.willPushPWMBadge.value ? `inset(0 ${C.PWM_BADGE_SPACE_WIDTH} 0 0)` : void 0,
      height: "100%",
      display: "flex",
      textAlign: o.textAlign,
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
    })), q = $(() => ({
      slots: Array.from({ length: Number(o.maxlength) }).map((N, R) => {
        var L;
        const ae = d.value && c.value !== null && p.value !== null && (c.value === p.value && R === c.value || R >= c.value && R < p.value), G = r.value[R] !== void 0 ? r.value[R] : null;
        return {
          char: G,
          placeholderChar: G ?? ((L = o == null ? void 0 : o.placeholder) == null ? void 0 : L[R]) ?? null,
          isActive: ae,
          hasFakeCaret: ae && G === null
        };
      }),
      isFocused: d.value,
      isHovering: !o.disabled && u.value
    }));
    return dn(Iu, q), t(Object.defineProperty({}, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => f
    })), (N, R) => {
      var ae;
      return h(), K(Te, null, [e.noScriptCssFallback !== null ? (h(), x(s(o1), {
        key: 0,
        fallback: e.noScriptCssFallback
      }, null, 8, ["fallback"])) : he("v-if", !0), de("div", {
        ref_key: "containerRef",
        ref: v,
        "data-input-otp-container": "",
        style: _t(P.value),
        class: le(e.containerClass)
      }, [w(N.$slots, "default", {
        slots: q.value.slots,
        isFocused: d.value,
        isHovering: !e.disabled && u.value
      }), de("div", u1, [de("input", k({
        ref_key: "inputRef",
        ref: f,
        value: s(r),
        "data-input-otp": "",
        "data-input-otp-placeholder-shown": s(r).length === 0 || void 0,
        "data-input-otp-mss": c.value,
        "data-input-otp-mse": p.value,
        "aria-placeholder": e.placeholder,
        style: M.value,
        pattern: (ae = i.value) == null ? void 0 : ae.source
      }, {
        ...N.$attrs,
        ...s(T)
      }, {
        onBeforeinput: S,
        onMouseover: R[0] || (R[0] = (G) => {
          u.value = !0, a("mouseover", G);
        }),
        onMouseleave: R[1] || (R[1] = (G) => {
          u.value = !1, a("mouseleave", G);
        }),
        onPaste: R[2] || (R[2] = (G) => {
          O(G), a("paste", G);
        }),
        onInput: B,
        onFocus: R[3] || (R[3] = (G) => {
          D(), a("focus", G);
        }),
        onBlur: R[4] || (R[4] = (G) => {
          d.value = !1, a("blur", G);
        })
      }), null, 16, d1)])], 6)], 64);
    };
  }
});
var p1 = c1;
function f1() {
  return un(Iu);
}
const yC = /* @__PURE__ */ b({
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
    const n = e, o = t, a = qe(n, "class"), r = Ct(a, o);
    return (l, i) => (h(), x(s(p1), k(s(r), {
      "container-class": s(V)("flex items-center gap-2 has-disabled:opacity-50", n.class),
      "data-slot": "input-otp",
      class: "disabled:cursor-not-allowed"
    }), {
      default: y((u) => [
        w(l.$slots, "default", Z(te(u)))
      ]),
      _: 3
    }, 16, ["container-class"]));
  }
}), bC = /* @__PURE__ */ b({
  __name: "InputOTPGroup",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, n = qe(t, "class"), o = xt(n);
    return (a, r) => (h(), K("div", k({ "data-slot": "input-otp-group" }, s(o), {
      class: s(V)("flex items-center", t.class)
    }), [
      w(a.$slots, "default")
    ], 16));
  }
}), wC = /* @__PURE__ */ b({
  __name: "InputOTPSeparator",
  props: {
    class: {}
  },
  setup(e) {
    const n = xt(e);
    return (o, a) => (h(), K("div", k({
      "data-slot": "input-otp-separator",
      role: "separator"
    }, s(n)), [
      w(o.$slots, "default", {}, () => [
        F(s(Wy))
      ])
    ], 16));
  }
}), v1 = ["data-active"], m1 = {
  key: 0,
  class: "pointer-events-none absolute inset-0 flex items-center justify-center"
}, _C = /* @__PURE__ */ b({
  __name: "InputOTPSlot",
  props: {
    index: {},
    class: {}
  },
  setup(e) {
    const t = e, n = qe(t, "class"), o = xt(n), a = f1(), r = $(() => a == null ? void 0 : a.value.slots[t.index]);
    return (l, i) => {
      var u, d, c;
      return h(), K("div", k(s(o), {
        "data-slot": "input-otp-slot",
        "data-active": (u = r.value) == null ? void 0 : u.isActive,
        class: s(V)(
          "data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]",
          t.class
        )
      }), [
        Ce(Ie((d = r.value) == null ? void 0 : d.char) + " ", 1),
        (c = r.value) != null && c.hasFakeCaret ? (h(), K("div", m1, [...i[0] || (i[0] = [
          de("div", { class: "animate-caret-blink h-4 w-px bg-foreground duration-1000" }, null, -1)
        ])])) : he("", !0)
      ], 16, v1);
    };
  }
}), xC = /* @__PURE__ */ b({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = $(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), x(s(fv), k(n.value, {
      class: s(V)(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        t.class
      )
    }), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), CC = /* @__PURE__ */ b({
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
    const n = e, o = t, a = qe(n, "class"), r = Ct(a, o);
    return (l, i) => (h(), x(s(Zw), k({ "data-slot": "pagination" }, s(r), {
      class: s(V)("mx-auto flex w-full justify-center", n.class)
    }), {
      default: y((u) => [
        w(l.$slots, "default", Z(te(u)))
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), BC = /* @__PURE__ */ b({
  __name: "PaginationContent",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = qe(t, "class");
    return (o, a) => (h(), x(s(r_), k({ "data-slot": "pagination-content" }, s(n), {
      class: s(V)("flex flex-row items-center gap-1", t.class)
    }), {
      default: y((r) => [
        w(o.$slots, "default", Z(te(r)))
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), SC = /* @__PURE__ */ b({
  __name: "PaginationEllipsis",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = qe(t, "class");
    return (o, a) => (h(), x(s(Gw), k({ "data-slot": "pagination-ellipsis" }, s(n), {
      class: s(V)("flex size-9 items-center justify-center", t.class)
    }), {
      default: y(() => [
        w(o.$slots, "default", {}, () => [
          F(s(Hy), { class: "size-4" }),
          a[0] || (a[0] = de("span", { class: "sr-only" }, "More pages", -1))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), $C = /* @__PURE__ */ b({
  __name: "PaginationFirst",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, n = qe(t, "class", "size"), o = xt(n);
    return (a, r) => (h(), x(s(Jw), k({
      "data-slot": "pagination-first",
      class: s(V)(s(tn)({ variant: "ghost", size: e.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, s(o)), {
      default: y(() => [
        w(a.$slots, "default", {}, () => [
          F(s(uu)),
          r[0] || (r[0] = de("span", { class: "hidden sm:block" }, "First", -1))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), OC = /* @__PURE__ */ b({
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
    const t = e, n = qe(t, "class", "size", "isActive");
    return (o, a) => (h(), x(s(l_), k({ "data-slot": "pagination-item" }, s(n), {
      class: s(V)(
        s(tn)({
          variant: e.isActive ? "outline" : "ghost",
          size: e.size
        }),
        t.class
      )
    }), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), EC = /* @__PURE__ */ b({
  __name: "PaginationLast",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, n = qe(t, "class", "size"), o = xt(n);
    return (a, r) => (h(), x(s(t_), k({
      "data-slot": "pagination-last",
      class: s(V)(s(tn)({ variant: "ghost", size: e.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, s(o)), {
      default: y(() => [
        w(a.$slots, "default", {}, () => [
          r[0] || (r[0] = de("span", { class: "hidden sm:block" }, "Last", -1)),
          F(s(du))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), PC = /* @__PURE__ */ b({
  __name: "PaginationNext",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, n = qe(t, "class", "size"), o = xt(n);
    return (a, r) => (h(), x(s(u_), k({
      "data-slot": "pagination-next",
      class: s(V)(s(tn)({ variant: "ghost", size: e.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, s(o)), {
      default: y(() => [
        w(a.$slots, "default", {}, () => [
          r[0] || (r[0] = de("span", { class: "hidden sm:block" }, "Next", -1)),
          F(s(du))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), kC = /* @__PURE__ */ b({
  __name: "PaginationPrevious",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, n = qe(t, "class", "size"), o = xt(n);
    return (a, r) => (h(), x(s(c_), k({
      "data-slot": "pagination-previous",
      class: s(V)(s(tn)({ variant: "ghost", size: e.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, s(o)), {
      default: y(() => [
        w(a.$slots, "default", {}, () => [
          F(s(uu)),
          r[0] || (r[0] = de("span", { class: "hidden sm:block" }, "Previous", -1))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), DC = /* @__PURE__ */ b({
  __name: "Popover",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = ce(e, t);
    return (r, l) => (h(), x(s(mv), Z(te(s(a))), {
      default: y(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), AC = /* @__PURE__ */ b({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(gv), Z(te(t)), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), TC = /* @__PURE__ */ b({
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
    const n = e, o = t, a = $(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = ce(a, o);
    return (l, i) => (h(), x(s(hv), null, {
      default: y(() => [
        F(s(wv), k({ ...s(r), ...l.$attrs }, {
          class: s(V)(
            "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            n.class
          )
        }), {
          default: y(() => [
            w(l.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), IC = /* @__PURE__ */ b({
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
    const t = e, n = $(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), x(s(Sv), k(n.value, {
      class: s(V)("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", t.class)
    }), {
      default: y(() => [
        F(s($v), {
          class: "h-full w-full flex-1 bg-primary transition-all",
          style: _t(`transform: translateX(-${100 - (t.modelValue ?? 0)}%);`)
        }, null, 8, ["style"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), MC = /* @__PURE__ */ b({
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
    const a = ce(e, t);
    return (r, l) => (h(), x(s(Av), Z(te(s(a))), {
      default: y(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), FC = /* @__PURE__ */ b({
  __name: "SelectValue",
  props: {
    placeholder: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(nm), Z(te(t)), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), RC = /* @__PURE__ */ b({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = $(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = Ye(n);
    return (a, r) => (h(), x(s(Mv), k(s(o), {
      class: s(V)(
        "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:truncate text-start",
        t.class
      )
    }), {
      default: y(() => [
        w(a.$slots, "default"),
        F(s(om), { "as-child": "" }, {
          default: y(() => [
            F(s(Sh), { class: "h-4 w-4 shrink-0 opacity-50" })
          ]),
          _: 1
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), LC = /* @__PURE__ */ b({
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
    const n = e, o = t, a = $(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = ce(a, o);
    return (l, i) => (h(), x(s(Fv), null, {
      default: y(() => [
        F(s(Kv), k({ ...s(r), ...l.$attrs }, {
          class: s(V)(
            "relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            e.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            n.class
          )
        }), {
          default: y(() => [
            F(s(h1)),
            F(s(Jv), {
              class: le(
                s(V)(
                  "p-1",
                  e.position === "popper" && "h-[--radix-select-trigger-height] w-full min-w-[--radix-select-trigger-width]"
                )
              )
            }, {
              default: y(() => [
                w(l.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]),
            F(s(y1))
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), VC = /* @__PURE__ */ b({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = $(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), x(s(Zv), k({
      class: s(V)("p-1 w-full", t.class)
    }, n.value), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), g1 = { class: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center" }, qC = /* @__PURE__ */ b({
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
    const t = e, n = $(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = Ye(n);
    return (a, r) => (h(), x(s(Uv), k(s(o), {
      class: s(V)(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        t.class
      )
    }), {
      default: y(() => [
        de("span", g1, [
          F(s(Gv), null, {
            default: y(() => [
              F(s(ou), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        F(s(Oi), null, {
          default: y(() => [
            w(a.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), NC = /* @__PURE__ */ b({
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Oi), Z(te(t)), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), zC = /* @__PURE__ */ b({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Qv), {
      class: le(s(V)("px-2 py-1.5 text-sm font-semibold", t.class))
    }, {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), jC = /* @__PURE__ */ b({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = $(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), x(s(Hv), k(n.value, {
      class: s(V)("-mx-1 my-1 h-px bg-muted", t.class)
    }), null, 16, ["class"]));
  }
}), h1 = /* @__PURE__ */ b({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = $(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = Ye(n);
    return (a, r) => (h(), x(s(em), k(s(o), {
      class: s(V)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: y(() => [
        w(a.$slots, "default", {}, () => [
          F(s(Oh))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), y1 = /* @__PURE__ */ b({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = $(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = Ye(n);
    return (a, r) => (h(), x(s(tm), k(s(o), {
      class: s(V)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: y(() => [
        w(a.$slots, "default", {}, () => [
          F(s(au))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), KC = /* @__PURE__ */ b({
  __name: "Separator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = qe(t, "class");
    return (o, a) => (h(), x(s(m_), k(s(n), {
      class: s(V)(
        "shrink-0 bg-border",
        t.orientation === "horizontal" ? "h-px w-full" : "w-px h-full",
        t.class
      )
    }), null, 16, ["class"]));
  }
}), HC = /* @__PURE__ */ b({
  __name: "Sheet",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = ce(e, t);
    return (r, l) => (h(), x(s(Ar), Z(te(s(a))), {
      default: y(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), WC = /* @__PURE__ */ b({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Tr), Z(te(t)), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), UC = /* @__PURE__ */ b({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(fn), Z(te(t)), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), GC = /* @__PURE__ */ b({
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
    const n = e, o = t, a = $(() => {
      const { class: l, side: i, ...u } = n;
      return u;
    }), r = ce(a, o);
    return (l, i) => (h(), x(s(Ir), null, {
      default: y(() => [
        F(s(pa), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        F(s(ca), k({
          class: s(V)(s(b1)({ side: e.side }), n.class)
        }, { ...s(r), ...l.$attrs }), {
          default: y(() => [
            w(l.$slots, "default"),
            F(s(fn), { class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary" }, {
              default: y(() => [
                F(s(ha), { class: "h-4 w-4" })
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
}), YC = /* @__PURE__ */ b({
  __name: "SheetHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), K("div", {
      class: le(s(V)("flex flex-col gap-y-2 text-center sm:text-left", t.class))
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), XC = /* @__PURE__ */ b({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = $(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), x(s(Lr), k({
      class: s(V)("text-lg font-semibold text-foreground", t.class)
    }, n.value), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ZC = /* @__PURE__ */ b({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = $(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), x(s(Vr), k({
      class: s(V)("text-sm text-muted-foreground", t.class)
    }, n.value), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), QC = /* @__PURE__ */ b({
  __name: "SheetFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), K("div", {
      class: le(s(V)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), b1 = Un(
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
), JC = /* @__PURE__ */ b({
  __name: "Skeleton",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), K("div", {
      class: le(s(V)("animate-pulse rounded-md bg-primary/10", t.class))
    }, null, 2));
  }
}), e3 = /* @__PURE__ */ b({
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
    const n = e, o = t, a = $(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = ce(a, o);
    return (l, i) => (h(), x(s(gm), k({
      class: s(V)("relative flex w-full touch-none select-none items-center", n.class)
    }, s(r)), {
      default: y(() => [
        F(s(bm), { class: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20" }, {
          default: y(() => [
            F(s(wm), { class: "absolute h-full bg-primary" })
          ]),
          _: 1
        }),
        (h(!0), K(Te, null, Gt(e.modelValue, (u, d) => (h(), x(s(ym), {
          key: d,
          class: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        }))), 128))
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), t3 = /* @__PURE__ */ b({
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
    const n = e, o = t, a = $(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = ce(a, o);
    return (l, i) => (h(), x(s(Sm), k(s(r), {
      class: s(V)(
        "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        n.class
      )
    }), {
      default: y(() => [
        F(s($m), {
          class: le(
            s(V)(
              "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
            )
          )
        }, null, 8, ["class"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), w1 = { class: "relative w-full overflow-auto" }, n3 = /* @__PURE__ */ b({
  __name: "Table",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), K("div", w1, [
      de("table", {
        class: le(s(V)("w-full caption-bottom text-sm", t.class))
      }, [
        w(n.$slots, "default")
      ], 2)
    ]));
  }
}), o3 = /* @__PURE__ */ b({
  __name: "TableBody",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), K("tbody", {
      class: le(s(V)("[&_tr:last-child]:border-0", t.class))
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), _1 = /* @__PURE__ */ b({
  __name: "TableCell",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), K("td", {
      class: le(
        s(V)(
          "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5",
          t.class
        )
      )
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), a3 = /* @__PURE__ */ b({
  __name: "TableHead",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), K("th", {
      class: le(
        s(V)(
          "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5",
          t.class
        )
      )
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), r3 = /* @__PURE__ */ b({
  __name: "TableHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), K("thead", {
      class: le(s(V)("[&_tr]:border-b", t.class))
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), s3 = /* @__PURE__ */ b({
  __name: "TableFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), K("tfoot", {
      class: le(s(V)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", t.class))
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), x1 = /* @__PURE__ */ b({
  __name: "TableRow",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), K("tr", {
      class: le(
        s(V)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", t.class)
      )
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), l3 = /* @__PURE__ */ b({
  __name: "TableCaption",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), K("caption", {
      class: le(s(V)("mt-4 text-sm text-muted-foreground", t.class))
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), C1 = { class: "flex items-center justify-center py-10" }, i3 = /* @__PURE__ */ b({
  __name: "TableEmpty",
  props: {
    class: {},
    colspan: { default: 1 }
  },
  setup(e) {
    const t = e, n = $(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), x(x1, null, {
      default: y(() => [
        F(_1, k({
          class: s(V)("p-4 whitespace-nowrap align-middle text-sm text-foreground", t.class)
        }, n.value), {
          default: y(() => [
            de("div", C1, [
              w(o.$slots, "default")
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), u3 = /* @__PURE__ */ b({
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
    const a = ce(e, t);
    return (r, l) => (h(), x(s(Em), Z(te(s(a))), {
      default: y(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), d3 = /* @__PURE__ */ b({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = $(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), x(s(km), k({
      class: s(V)(
        "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        t.class
      )
    }, n.value), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), c3 = /* @__PURE__ */ b({
  __name: "TabsList",
  props: {
    loop: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = $(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), x(s(Pm), k(n.value, {
      class: s(V)(
        "inline-flex items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
        t.class
      )
    }), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), B1 = { class: "truncate" }, p3 = /* @__PURE__ */ b({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = $(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = Ye(n);
    return (a, r) => (h(), x(s(Dm), k(s(o), {
      class: s(V)(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
        t.class
      )
    }), {
      default: y(() => [
        de("span", B1, [
          w(a.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), S1 = ["placeholder"], f3 = /* @__PURE__ */ b({
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
    const n = e, a = ru(n, "modelValue", t, {
      passive: !0,
      defaultValue: n.defaultValue
    }), r = $(() => a.value ? a.value.toString().length : 0);
    return (l, i) => (h(), K(Te, null, [
      Mn(de("textarea", {
        "onUpdate:modelValue": i[0] || (i[0] = (u) => tt(a) ? a.value = u : null),
        placeholder: e.placeholder,
        class: le(
          s(V)(
            "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            n.class
          )
        )
      }, null, 10, S1), [
        [bl, s(a)]
      ]),
      e.charLimit ? (h(), K("p", {
        key: 0,
        class: le(["mt-1 flex w-full justify-end text-sm text-gray-500", { "text-red-500": r.value > e.charLimit }])
      }, Ie(r.value) + " / " + Ie(e.charLimit), 3)) : he("", !0)
    ], 64));
  }
});
export {
  U1 as Accord,
  Rh as Accordion,
  Lh as AccordionContent,
  Vh as AccordionItem,
  qh as AccordionTrigger,
  Ig as AlertDialog,
  qg as AlertDialogAction,
  Ng as AlertDialogCancel,
  Mg as AlertDialogContent,
  Lg as AlertDialogDescription,
  Vg as AlertDialogFooter,
  Fg as AlertDialogHeader,
  Rg as AlertDialogTitle,
  M1 as AlertDialogTrigger,
  Y1 as Avatar,
  Z1 as AvatarFallback,
  X1 as AvatarImage,
  Q1 as Badge,
  Xi as Button,
  J1 as Card,
  ex as CardContent,
  tx as CardDescription,
  nx as CardFooter,
  ox as CardHeader,
  ax as CardTitle,
  rx as Carousel,
  sx as CarouselContent,
  lx as CarouselItem,
  ux as CarouselNext,
  ix as CarouselPrevious,
  gx as Checkbox,
  hx as Collapsible,
  yx as CollapsibleContent,
  bx as CollapsibleTrigger,
  wx as Combobox,
  _x as ComboboxAnchor,
  fx as ComboboxCancel,
  xx as ComboboxEmpty,
  Cx as ComboboxGroup,
  Bx as ComboboxInput,
  Sx as ComboboxItem,
  vx as ComboboxItemIndicator,
  $x as ComboboxList,
  Ox as ComboboxSeparator,
  mx as ComboboxTrigger,
  g_ as Command,
  Mx as CommandDialog,
  Fx as CommandEmpty,
  Rx as CommandGroup,
  Lx as CommandInput,
  Vx as CommandItem,
  qx as CommandList,
  Nx as CommandSeparator,
  zx as CommandShortcut,
  F1 as ConfirmDialog,
  h_ as Dialog,
  Ex as DialogClose,
  y_ as DialogContent,
  Ax as DialogDescription,
  Ix as DialogFooter,
  kx as DialogHeader,
  Tx as DialogScrollContent,
  Dx as DialogTitle,
  Px as DialogTrigger,
  jx as Drawer,
  Kx as DrawerClose,
  Hx as DrawerContent,
  Wx as DrawerDescription,
  Ux as DrawerFooter,
  Gx as DrawerHeader,
  V_ as DrawerOverlay,
  Yx as DrawerTitle,
  Xx as DrawerTrigger,
  Zx as DropdownMenu,
  oC as DropdownMenuCheckboxItem,
  Jx as DropdownMenuContent,
  eC as DropdownMenuGroup,
  nC as DropdownMenuItem,
  lC as DropdownMenuLabel,
  tv as DropdownMenuPortal,
  tC as DropdownMenuRadioGroup,
  aC as DropdownMenuRadioItem,
  sC as DropdownMenuSeparator,
  rC as DropdownMenuShortcut,
  iC as DropdownMenuSub,
  dC as DropdownMenuSubContent,
  uC as DropdownMenuSubTrigger,
  Qx as DropdownMenuTrigger,
  cC as Empty,
  pC as EmptyContent,
  fC as EmptyDescription,
  vC as EmptyHeader,
  mC as EmptyMedia,
  gC as EmptyTitle,
  H1 as Flasher,
  L1 as Header,
  W1 as Heading,
  hC as Input,
  yC as InputOTP,
  bC as InputOTPGroup,
  wC as InputOTPSeparator,
  _C as InputOTPSlot,
  xC as Label,
  V1 as Main,
  CC as Pagination,
  BC as PaginationContent,
  SC as PaginationEllipsis,
  $C as PaginationFirst,
  OC as PaginationItem,
  EC as PaginationLast,
  PC as PaginationNext,
  kC as PaginationPrevious,
  DC as Popover,
  A1 as PopoverAnchor,
  TC as PopoverContent,
  AC as PopoverTrigger,
  IC as Progress,
  MC as Select,
  LC as SelectContent,
  VC as SelectGroup,
  qC as SelectItem,
  NC as SelectItemText,
  zC as SelectLabel,
  y1 as SelectScrollDownButton,
  h1 as SelectScrollUpButton,
  jC as SelectSeparator,
  RC as SelectTrigger,
  FC as SelectValue,
  KC as Separator,
  HC as Sheet,
  UC as SheetClose,
  GC as SheetContent,
  ZC as SheetDescription,
  QC as SheetFooter,
  YC as SheetHeader,
  XC as SheetTitle,
  WC as SheetTrigger,
  JC as Skeleton,
  e3 as Slider,
  t3 as Switch,
  n3 as Table,
  o3 as TableBody,
  l3 as TableCaption,
  _1 as TableCell,
  i3 as TableEmpty,
  s3 as TableFooter,
  a3 as TableHead,
  r3 as TableHeader,
  x1 as TableRow,
  u3 as Tabs,
  d3 as TabsContent,
  c3 as TabsList,
  p3 as TabsTrigger,
  f3 as Textarea,
  G1 as Tip,
  _h as Toast,
  K1 as ToastAction,
  kh as ToastClose,
  Ws as ToastDescription,
  Ah as ToastProvider,
  Dh as ToastTitle,
  xh as ToastViewport,
  wh as Toaster,
  Nh as Tooltip,
  zh as TooltipContent,
  jh as TooltipProvider,
  Kh as TooltipTrigger,
  R1 as TwoColumnLayout,
  q1 as TwoColumnLayoutSidebar,
  N1 as TwoColumnLayoutSidebarDesktop,
  z1 as TwoColumnLayoutSidebarMobile,
  j1 as TwoColumnLayoutSidebarTrigger,
  Hh as avatarVariant,
  Wh as badgeVariants,
  tn as buttonVariants,
  V as cn,
  I1 as createContext,
  j_ as emptyMediaVariants,
  E1 as preset,
  b1 as sheetVariants,
  mh as toast,
  Th as toastVariants,
  ba as useCarousel,
  Kg as useConfirmDialog,
  Ih as useFlasher,
  nu as useToast,
  T1 as valueUpdater
};
