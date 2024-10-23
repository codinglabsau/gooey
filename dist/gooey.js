import * as Kn from "vue";
import { computed as k, ref as D, shallowRef as wa, watch as Q, getCurrentScope as xa, onScopeDispose as _a, shallowReadonly as ct, unref as r, getCurrentInstance as Xe, toRef as Xr, camelize as Ca, defineComponent as b, Comment as Zr, mergeProps as E, cloneVNode as Qr, h as ot, toRefs as ie, openBlock as f, createBlock as x, withCtx as g, renderSlot as w, withKeys as mt, onMounted as se, normalizeProps as W, guardReactiveProps as U, reactive as Ba, createVNode as I, createCommentVNode as re, withModifiers as ve, nextTick as ee, withDirectives as bt, vShow as on, watchEffect as pe, markRaw as Jr, watchSyncEffect as es, createTextVNode as ge, toDisplayString as ye, isRef as Vt, resolveDynamicComponent as Oe, onBeforeMount as ka, onUnmounted as Ne, createElementBlock as j, Fragment as ce, renderList as nt, Teleport as io, onBeforeUnmount as nn, useSlots as ts, normalizeStyle as wt, effectScope as Oa, toHandlerKey as os, createElementVNode as oe, vModelSelect as ns, toRaw as as, inject as $a, provide as Da, customRef as rs, readonly as an, onBeforeUpdate as ss, onUpdated as ls, mergeDefaults as Ea, watchPostEffect as is, normalizeClass as ne, isVNode as ds, vModelText as Aa } from "vue";
function Sa(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var us = {
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
}, Ao = us, rn = {
  whitespace: /\s+/g,
  urlHexPairs: /%[\dA-F]{2}/g,
  quotes: /"/g
};
function cs(e) {
  return e.trim().replace(rn.whitespace, " ");
}
function ps(e) {
  return encodeURIComponent(e).replace(rn.urlHexPairs, ms);
}
function fs(e) {
  return Object.keys(Ao).forEach(function(t) {
    Ao[t].test(e) && (e = e.replace(Ao[t], t));
  }), e;
}
function ms(e) {
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
function jo(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string, but received " + typeof e);
  e.charCodeAt(0) === 65279 && (e = e.slice(1));
  var t = fs(cs(e)).replace(rn.quotes, "'");
  return "data:image/svg+xml," + ps(t);
}
jo.toSrcset = function(t) {
  return jo(t).replace(/ /g, "%20");
};
var vs = jo, Pa = {}, Ta = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return o;
    }
  });
  function t(n, a) {
    return {
      handler: n,
      config: a
    };
  }
  t.withOptions = function(n, a = () => ({})) {
    const s = function(l) {
      return {
        __options: l,
        handler: n(l),
        config: a(l)
      };
    };
    return s.__isOptionsFunction = !0, s.__pluginFunction = n, s.__configFunction = a, s;
  };
  const o = t;
})(Ta);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return n;
    }
  });
  const t = /* @__PURE__ */ o(Ta);
  function o(a) {
    return a && a.__esModule ? a : {
      default: a
    };
  }
  const n = t.default;
})(Pa);
let So = Pa;
var Ma = (So.__esModule ? So : { default: So }).default, Ia = {}, Ra = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "cloneDeep", {
    enumerable: !0,
    get: function() {
      return t;
    }
  });
  function t(o) {
    return Array.isArray(o) ? o.map((n) => t(n)) : typeof o == "object" && o !== null ? Object.fromEntries(Object.entries(o).map(([n, a]) => [
      n,
      t(a)
    ])) : o;
  }
})(Ra);
var gs = {
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
  const t = Ra, o = /* @__PURE__ */ n(gs);
  function n(s) {
    return s && s.__esModule ? s : {
      default: s
    };
  }
  const a = (0, t.cloneDeep)(o.default.theme);
})(Ia);
let Po = Ia;
var hs = (Po.__esModule ? Po : { default: Po }).default, Fa = {}, Va = {}, sn = { exports: {} }, q = String, La = function() {
  return { isColorSupported: !1, reset: q, bold: q, dim: q, italic: q, underline: q, inverse: q, hidden: q, strikethrough: q, black: q, red: q, green: q, yellow: q, blue: q, magenta: q, cyan: q, white: q, gray: q, bgBlack: q, bgRed: q, bgGreen: q, bgYellow: q, bgBlue: q, bgMagenta: q, bgCyan: q, bgWhite: q, blackBright: q, redBright: q, greenBright: q, yellowBright: q, blueBright: q, magentaBright: q, cyanBright: q, whiteBright: q, bgBlackBright: q, bgRedBright: q, bgGreenBright: q, bgYellowBright: q, bgBlueBright: q, bgMagentaBright: q, bgCyanBright: q, bgWhiteBright: q };
};
sn.exports = La();
sn.exports.createColors = La;
var ys = sn.exports;
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(d, u) {
    for (var c in u) Object.defineProperty(d, c, {
      enumerable: !0,
      get: u[c]
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
  const o = /* @__PURE__ */ n(ys);
  function n(d) {
    return d && d.__esModule ? d : {
      default: d
    };
  }
  let a = /* @__PURE__ */ new Set();
  function s(d, u, c) {
    typeof process < "u" && process.env.JEST_WORKER_ID || c && a.has(c) || (c && a.add(c), console.warn(""), u.forEach((p) => console.warn(d, "-", p)));
  }
  function l(d) {
    return o.default.dim(d);
  }
  const i = {
    info(d, u) {
      s(o.default.bold(o.default.cyan("info")), ...Array.isArray(d) ? [
        d
      ] : [
        u,
        d
      ]);
    },
    warn(d, u) {
      s(o.default.bold(o.default.yellow("warn")), ...Array.isArray(d) ? [
        d
      ] : [
        u,
        d
      ]);
    },
    risk(d, u) {
      s(o.default.bold(o.default.magenta("risk")), ...Array.isArray(d) ? [
        d
      ] : [
        u,
        d
      ]);
    }
  };
})(Va);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return a;
    }
  });
  const t = /* @__PURE__ */ o(Va);
  function o(s) {
    return s && s.__esModule ? s : {
      default: s
    };
  }
  function n({ version: s, from: l, to: i }) {
    t.default.warn(`${l}-color-renamed`, [
      `As of Tailwind CSS ${s}, \`${l}\` has been renamed to \`${i}\`.`,
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
})(Fa);
let To = Fa;
var bs = (To.__esModule ? To : { default: To }).default;
const qt = vs, ws = Ma, za = hs, Ke = bs, [xs, { lineHeight: _s }] = za.fontSize.base, { spacing: Me, borderWidth: jn, borderRadius: Wn } = za;
function et(e, t) {
  return e.replace("<alpha-value>", `var(${t}, 1)`);
}
const Cs = ws.withOptions(function(e = { strategy: void 0 }) {
  return function({ addBase: t, addComponents: o, theme: n }) {
    function a(d, u) {
      let c = n(d);
      return !c || c.includes("var(") ? u : c.replace("<alpha-value>", "1");
    }
    const s = e.strategy === void 0 ? ["base", "class"] : [e.strategy], l = [
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
          "border-color": et(
            n("colors.gray.500", Ke.gray[500]),
            "--tw-border-opacity"
          ),
          "border-width": jn.DEFAULT,
          "border-radius": Wn.none,
          "padding-top": Me[2],
          "padding-right": Me[3],
          "padding-bottom": Me[2],
          "padding-left": Me[3],
          "font-size": xs,
          "line-height": _s,
          "--tw-shadow": "0 0 #0000",
          "&:focus": {
            outline: "2px solid transparent",
            "outline-offset": "2px",
            "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)",
            "--tw-ring-offset-width": "0px",
            "--tw-ring-offset-color": "#fff",
            "--tw-ring-color": et(
              n("colors.blue.600", Ke.blue[600]),
              "--tw-ring-opacity"
            ),
            "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
            "--tw-ring-shadow": "var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
            "box-shadow": "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)",
            "border-color": et(
              n("colors.blue.600", Ke.blue[600]),
              "--tw-border-opacity"
            )
          }
        }
      },
      {
        base: ["input::placeholder", "textarea::placeholder"],
        class: [".form-input::placeholder", ".form-textarea::placeholder"],
        styles: {
          color: et(n("colors.gray.500", Ke.gray[500]), "--tw-text-opacity"),
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
          "background-image": `url("${qt(
            `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="${a(
              "colors.gray.500",
              Ke.gray[500]
            )}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 8l4 4 4-4"/></svg>`
          )}")`,
          "background-position": `right ${Me[2]} center`,
          "background-repeat": "no-repeat",
          "background-size": "1.5em 1.5em",
          "padding-right": Me[10],
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
          "padding-right": Me[3],
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
          height: Me[4],
          width: Me[4],
          color: et(n("colors.blue.600", Ke.blue[600]), "--tw-text-opacity"),
          "background-color": "#fff",
          "border-color": et(
            n("colors.gray.500", Ke.gray[500]),
            "--tw-border-opacity"
          ),
          "border-width": jn.DEFAULT,
          "--tw-shadow": "0 0 #0000"
        }
      },
      {
        base: ["[type='checkbox']"],
        class: [".form-checkbox"],
        styles: {
          "border-radius": Wn.none
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
          "--tw-ring-color": et(
            n("colors.blue.600", Ke.blue[600]),
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
          "background-image": `url("${qt(
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
          "background-image": `url("${qt(
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
          "background-image": `url("${qt(
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
    ], i = (d) => l.map((u) => u[d] === null ? null : { [u[d]]: u.styles }).filter(Boolean);
    s.includes("base") && t(i("base")), s.includes("class") && o(i("class"));
  };
});
var Bs = Cs;
const ks = /* @__PURE__ */ Sa(Bs), Os = Ma;
function Hn(e) {
  return Object.fromEntries(
    Object.entries(e).filter(([t]) => t !== "DEFAULT")
  );
}
var $s = Os(
  ({ addUtilities: e, matchUtilities: t, theme: o }) => {
    e({
      "@keyframes enter": o("keyframes.enter"),
      "@keyframes exit": o("keyframes.exit"),
      ".animate-in": {
        animationName: "enter",
        animationDuration: o("animationDuration.DEFAULT"),
        "--tw-enter-opacity": "initial",
        "--tw-enter-scale": "initial",
        "--tw-enter-rotate": "initial",
        "--tw-enter-translate-x": "initial",
        "--tw-enter-translate-y": "initial"
      },
      ".animate-out": {
        animationName: "exit",
        animationDuration: o("animationDuration.DEFAULT"),
        "--tw-exit-opacity": "initial",
        "--tw-exit-scale": "initial",
        "--tw-exit-rotate": "initial",
        "--tw-exit-translate-x": "initial",
        "--tw-exit-translate-y": "initial"
      }
    }), t(
      {
        "fade-in": (n) => ({ "--tw-enter-opacity": n }),
        "fade-out": (n) => ({ "--tw-exit-opacity": n })
      },
      { values: o("animationOpacity") }
    ), t(
      {
        "zoom-in": (n) => ({ "--tw-enter-scale": n }),
        "zoom-out": (n) => ({ "--tw-exit-scale": n })
      },
      { values: o("animationScale") }
    ), t(
      {
        "spin-in": (n) => ({ "--tw-enter-rotate": n }),
        "spin-out": (n) => ({ "--tw-exit-rotate": n })
      },
      { values: o("animationRotate") }
    ), t(
      {
        "slide-in-from-top": (n) => ({
          "--tw-enter-translate-y": `-${n}`
        }),
        "slide-in-from-bottom": (n) => ({
          "--tw-enter-translate-y": n
        }),
        "slide-in-from-left": (n) => ({
          "--tw-enter-translate-x": `-${n}`
        }),
        "slide-in-from-right": (n) => ({
          "--tw-enter-translate-x": n
        }),
        "slide-out-to-top": (n) => ({
          "--tw-exit-translate-y": `-${n}`
        }),
        "slide-out-to-bottom": (n) => ({
          "--tw-exit-translate-y": n
        }),
        "slide-out-to-left": (n) => ({
          "--tw-exit-translate-x": `-${n}`
        }),
        "slide-out-to-right": (n) => ({
          "--tw-exit-translate-x": n
        })
      },
      { values: o("animationTranslate") }
    ), t(
      { duration: (n) => ({ animationDuration: n }) },
      { values: Hn(o("animationDuration")) }
    ), t(
      { delay: (n) => ({ animationDelay: n }) },
      { values: o("animationDelay") }
    ), t(
      { ease: (n) => ({ animationTimingFunction: n }) },
      { values: Hn(o("animationTimingFunction")) }
    ), e({
      ".running": { animationPlayState: "running" },
      ".paused": { animationPlayState: "paused" }
    }), t(
      { "fill-mode": (n) => ({ animationFillMode: n }) },
      { values: o("animationFillMode") }
    ), t(
      { direction: (n) => ({ animationDirection: n }) },
      { values: o("animationDirection") }
    ), t(
      { repeat: (n) => ({ animationIterationCount: n }) },
      { values: o("animationRepeat") }
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
const Ds = /* @__PURE__ */ Sa($s), Kf = {
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
    Ds,
    ks({
      strategy: "class"
    })
  ]
}, Es = ["top", "right", "bottom", "left"], Ue = Math.min, be = Math.max, oo = Math.round, Yt = Math.floor, Ge = (e) => ({
  x: e,
  y: e
}), As = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Ss = {
  start: "end",
  end: "start"
};
function Wo(e, t, o) {
  return be(e, Ue(t, o));
}
function Le(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ze(e) {
  return e.split("-")[0];
}
function xt(e) {
  return e.split("-")[1];
}
function ln(e) {
  return e === "x" ? "y" : "x";
}
function dn(e) {
  return e === "y" ? "height" : "width";
}
function qe(e) {
  return ["top", "bottom"].includes(ze(e)) ? "y" : "x";
}
function un(e) {
  return ln(qe(e));
}
function Ps(e, t, o) {
  o === void 0 && (o = !1);
  const n = xt(e), a = un(e), s = dn(a);
  let l = a === "x" ? n === (o ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (l = no(l)), [l, no(l)];
}
function Ts(e) {
  const t = no(e);
  return [Ho(e), t, Ho(t)];
}
function Ho(e) {
  return e.replace(/start|end/g, (t) => Ss[t]);
}
function Ms(e, t, o) {
  const n = ["left", "right"], a = ["right", "left"], s = ["top", "bottom"], l = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return o ? t ? a : n : t ? n : a;
    case "left":
    case "right":
      return t ? s : l;
    default:
      return [];
  }
}
function Is(e, t, o, n) {
  const a = xt(e);
  let s = Ms(ze(e), o === "start", n);
  return a && (s = s.map((l) => l + "-" + a), t && (s = s.concat(s.map(Ho)))), s;
}
function no(e) {
  return e.replace(/left|right|bottom|top/g, (t) => As[t]);
}
function Rs(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Na(e) {
  return typeof e != "number" ? Rs(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function ao(e) {
  const {
    x: t,
    y: o,
    width: n,
    height: a
  } = e;
  return {
    width: n,
    height: a,
    top: o,
    left: t,
    right: t + n,
    bottom: o + a,
    x: t,
    y: o
  };
}
function Un(e, t, o) {
  let {
    reference: n,
    floating: a
  } = e;
  const s = qe(t), l = un(t), i = dn(l), d = ze(t), u = s === "y", c = n.x + n.width / 2 - a.width / 2, p = n.y + n.height / 2 - a.height / 2, v = n[i] / 2 - a[i] / 2;
  let m;
  switch (d) {
    case "top":
      m = {
        x: c,
        y: n.y - a.height
      };
      break;
    case "bottom":
      m = {
        x: c,
        y: n.y + n.height
      };
      break;
    case "right":
      m = {
        x: n.x + n.width,
        y: p
      };
      break;
    case "left":
      m = {
        x: n.x - a.width,
        y: p
      };
      break;
    default:
      m = {
        x: n.x,
        y: n.y
      };
  }
  switch (xt(t)) {
    case "start":
      m[l] -= v * (o && u ? -1 : 1);
      break;
    case "end":
      m[l] += v * (o && u ? -1 : 1);
      break;
  }
  return m;
}
const Fs = async (e, t, o) => {
  const {
    placement: n = "bottom",
    strategy: a = "absolute",
    middleware: s = [],
    platform: l
  } = o, i = s.filter(Boolean), d = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let u = await l.getElementRects({
    reference: e,
    floating: t,
    strategy: a
  }), {
    x: c,
    y: p
  } = Un(u, n, d), v = n, m = {}, h = 0;
  for (let y = 0; y < i.length; y++) {
    const {
      name: _,
      fn: C
    } = i[y], {
      x: O,
      y: B,
      data: P,
      reset: A
    } = await C({
      x: c,
      y: p,
      initialPlacement: n,
      placement: v,
      strategy: a,
      middlewareData: m,
      rects: u,
      platform: l,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = O ?? c, p = B ?? p, m = {
      ...m,
      [_]: {
        ...m[_],
        ...P
      }
    }, A && h <= 50 && (h++, typeof A == "object" && (A.placement && (v = A.placement), A.rects && (u = A.rects === !0 ? await l.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : A.rects), {
      x: c,
      y: p
    } = Un(u, v, d)), y = -1);
  }
  return {
    x: c,
    y: p,
    placement: v,
    strategy: a,
    middlewareData: m
  };
};
async function Tt(e, t) {
  var o;
  t === void 0 && (t = {});
  const {
    x: n,
    y: a,
    platform: s,
    rects: l,
    elements: i,
    strategy: d
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: p = "floating",
    altBoundary: v = !1,
    padding: m = 0
  } = Le(t, e), h = Na(m), _ = i[v ? p === "floating" ? "reference" : "floating" : p], C = ao(await s.getClippingRect({
    element: (o = await (s.isElement == null ? void 0 : s.isElement(_))) == null || o ? _ : _.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(i.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: d
  })), O = p === "floating" ? {
    x: n,
    y: a,
    width: l.floating.width,
    height: l.floating.height
  } : l.reference, B = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(i.floating)), P = await (s.isElement == null ? void 0 : s.isElement(B)) ? await (s.getScale == null ? void 0 : s.getScale(B)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, A = ao(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: O,
    offsetParent: B,
    strategy: d
  }) : O);
  return {
    top: (C.top - A.top + h.top) / P.y,
    bottom: (A.bottom - C.bottom + h.bottom) / P.y,
    left: (C.left - A.left + h.left) / P.x,
    right: (A.right - C.right + h.right) / P.x
  };
}
const Vs = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: o,
      y: n,
      placement: a,
      rects: s,
      platform: l,
      elements: i,
      middlewareData: d
    } = t, {
      element: u,
      padding: c = 0
    } = Le(e, t) || {};
    if (u == null)
      return {};
    const p = Na(c), v = {
      x: o,
      y: n
    }, m = un(a), h = dn(m), y = await l.getDimensions(u), _ = m === "y", C = _ ? "top" : "left", O = _ ? "bottom" : "right", B = _ ? "clientHeight" : "clientWidth", P = s.reference[h] + s.reference[m] - v[m] - s.floating[h], A = v[m] - s.reference[m], R = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(u));
    let S = R ? R[B] : 0;
    (!S || !await (l.isElement == null ? void 0 : l.isElement(R))) && (S = i.floating[B] || s.floating[h]);
    const F = P / 2 - A / 2, z = S / 2 - y[h] / 2 - 1, $ = Ue(p[C], z), L = Ue(p[O], z), M = $, Z = S - y[h] - L, H = S / 2 - y[h] / 2 + F, K = Wo(M, H, Z), G = !d.arrow && xt(a) != null && H !== K && s.reference[h] / 2 - (H < M ? $ : L) - y[h] / 2 < 0, te = G ? H < M ? H - M : H - Z : 0;
    return {
      [m]: v[m] + te,
      data: {
        [m]: K,
        centerOffset: H - K - te,
        ...G && {
          alignmentOffset: te
        }
      },
      reset: G
    };
  }
}), Ls = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var o, n;
      const {
        placement: a,
        middlewareData: s,
        rects: l,
        initialPlacement: i,
        platform: d,
        elements: u
      } = t, {
        mainAxis: c = !0,
        crossAxis: p = !0,
        fallbackPlacements: v,
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: y = !0,
        ..._
      } = Le(e, t);
      if ((o = s.arrow) != null && o.alignmentOffset)
        return {};
      const C = ze(a), O = qe(i), B = ze(i) === i, P = await (d.isRTL == null ? void 0 : d.isRTL(u.floating)), A = v || (B || !y ? [no(i)] : Ts(i)), R = h !== "none";
      !v && R && A.push(...Is(i, y, h, P));
      const S = [i, ...A], F = await Tt(t, _), z = [];
      let $ = ((n = s.flip) == null ? void 0 : n.overflows) || [];
      if (c && z.push(F[C]), p) {
        const H = Ps(a, l, P);
        z.push(F[H[0]], F[H[1]]);
      }
      if ($ = [...$, {
        placement: a,
        overflows: z
      }], !z.every((H) => H <= 0)) {
        var L, M;
        const H = (((L = s.flip) == null ? void 0 : L.index) || 0) + 1, K = S[H];
        if (K)
          return {
            data: {
              index: H,
              overflows: $
            },
            reset: {
              placement: K
            }
          };
        let G = (M = $.filter((te) => te.overflows[0] <= 0).sort((te, de) => te.overflows[1] - de.overflows[1])[0]) == null ? void 0 : M.placement;
        if (!G)
          switch (m) {
            case "bestFit": {
              var Z;
              const te = (Z = $.filter((de) => {
                if (R) {
                  const ue = qe(de.placement);
                  return ue === O || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  ue === "y";
                }
                return !0;
              }).map((de) => [de.placement, de.overflows.filter((ue) => ue > 0).reduce((ue, Pe) => ue + Pe, 0)]).sort((de, ue) => de[1] - ue[1])[0]) == null ? void 0 : Z[0];
              te && (G = te);
              break;
            }
            case "initialPlacement":
              G = i;
              break;
          }
        if (a !== G)
          return {
            reset: {
              placement: G
            }
          };
      }
      return {};
    }
  };
};
function Gn(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function qn(e) {
  return Es.some((t) => e[t] >= 0);
}
const zs = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: o
      } = t, {
        strategy: n = "referenceHidden",
        ...a
      } = Le(e, t);
      switch (n) {
        case "referenceHidden": {
          const s = await Tt(t, {
            ...a,
            elementContext: "reference"
          }), l = Gn(s, o.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: qn(l)
            }
          };
        }
        case "escaped": {
          const s = await Tt(t, {
            ...a,
            altBoundary: !0
          }), l = Gn(s, o.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: qn(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Ns(e, t) {
  const {
    placement: o,
    platform: n,
    elements: a
  } = e, s = await (n.isRTL == null ? void 0 : n.isRTL(a.floating)), l = ze(o), i = xt(o), d = qe(o) === "y", u = ["left", "top"].includes(l) ? -1 : 1, c = s && d ? -1 : 1, p = Le(t, e);
  let {
    mainAxis: v,
    crossAxis: m,
    alignmentAxis: h
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: p.mainAxis || 0,
    crossAxis: p.crossAxis || 0,
    alignmentAxis: p.alignmentAxis
  };
  return i && typeof h == "number" && (m = i === "end" ? h * -1 : h), d ? {
    x: m * c,
    y: v * u
  } : {
    x: v * u,
    y: m * c
  };
}
const Ks = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var o, n;
      const {
        x: a,
        y: s,
        placement: l,
        middlewareData: i
      } = t, d = await Ns(t, e);
      return l === ((o = i.offset) == null ? void 0 : o.placement) && (n = i.arrow) != null && n.alignmentOffset ? {} : {
        x: a + d.x,
        y: s + d.y,
        data: {
          ...d,
          placement: l
        }
      };
    }
  };
}, js = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: o,
        y: n,
        placement: a
      } = t, {
        mainAxis: s = !0,
        crossAxis: l = !1,
        limiter: i = {
          fn: (_) => {
            let {
              x: C,
              y: O
            } = _;
            return {
              x: C,
              y: O
            };
          }
        },
        ...d
      } = Le(e, t), u = {
        x: o,
        y: n
      }, c = await Tt(t, d), p = qe(ze(a)), v = ln(p);
      let m = u[v], h = u[p];
      if (s) {
        const _ = v === "y" ? "top" : "left", C = v === "y" ? "bottom" : "right", O = m + c[_], B = m - c[C];
        m = Wo(O, m, B);
      }
      if (l) {
        const _ = p === "y" ? "top" : "left", C = p === "y" ? "bottom" : "right", O = h + c[_], B = h - c[C];
        h = Wo(O, h, B);
      }
      const y = i.fn({
        ...t,
        [v]: m,
        [p]: h
      });
      return {
        ...y,
        data: {
          x: y.x - o,
          y: y.y - n,
          enabled: {
            [v]: s,
            [p]: l
          }
        }
      };
    }
  };
}, Ws = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: o,
        y: n,
        placement: a,
        rects: s,
        middlewareData: l
      } = t, {
        offset: i = 0,
        mainAxis: d = !0,
        crossAxis: u = !0
      } = Le(e, t), c = {
        x: o,
        y: n
      }, p = qe(a), v = ln(p);
      let m = c[v], h = c[p];
      const y = Le(i, t), _ = typeof y == "number" ? {
        mainAxis: y,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...y
      };
      if (d) {
        const B = v === "y" ? "height" : "width", P = s.reference[v] - s.floating[B] + _.mainAxis, A = s.reference[v] + s.reference[B] - _.mainAxis;
        m < P ? m = P : m > A && (m = A);
      }
      if (u) {
        var C, O;
        const B = v === "y" ? "width" : "height", P = ["top", "left"].includes(ze(a)), A = s.reference[p] - s.floating[B] + (P && ((C = l.offset) == null ? void 0 : C[p]) || 0) + (P ? 0 : _.crossAxis), R = s.reference[p] + s.reference[B] + (P ? 0 : ((O = l.offset) == null ? void 0 : O[p]) || 0) - (P ? _.crossAxis : 0);
        h < A ? h = A : h > R && (h = R);
      }
      return {
        [v]: m,
        [p]: h
      };
    }
  };
}, Hs = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var o, n;
      const {
        placement: a,
        rects: s,
        platform: l,
        elements: i
      } = t, {
        apply: d = () => {
        },
        ...u
      } = Le(e, t), c = await Tt(t, u), p = ze(a), v = xt(a), m = qe(a) === "y", {
        width: h,
        height: y
      } = s.floating;
      let _, C;
      p === "top" || p === "bottom" ? (_ = p, C = v === (await (l.isRTL == null ? void 0 : l.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (C = p, _ = v === "end" ? "top" : "bottom");
      const O = y - c.top - c.bottom, B = h - c.left - c.right, P = Ue(y - c[_], O), A = Ue(h - c[C], B), R = !t.middlewareData.shift;
      let S = P, F = A;
      if ((o = t.middlewareData.shift) != null && o.enabled.x && (F = B), (n = t.middlewareData.shift) != null && n.enabled.y && (S = O), R && !v) {
        const $ = be(c.left, 0), L = be(c.right, 0), M = be(c.top, 0), Z = be(c.bottom, 0);
        m ? F = h - 2 * ($ !== 0 || L !== 0 ? $ + L : be(c.left, c.right)) : S = y - 2 * (M !== 0 || Z !== 0 ? M + Z : be(c.top, c.bottom));
      }
      await d({
        ...t,
        availableWidth: F,
        availableHeight: S
      });
      const z = await l.getDimensions(i.floating);
      return h !== z.width || y !== z.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function uo() {
  return typeof window < "u";
}
function rt(e) {
  return cn(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function we(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function De(e) {
  var t;
  return (t = (cn(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function cn(e) {
  return uo() ? e instanceof Node || e instanceof we(e).Node : !1;
}
function Be(e) {
  return uo() ? e instanceof Element || e instanceof we(e).Element : !1;
}
function $e(e) {
  return uo() ? e instanceof HTMLElement || e instanceof we(e).HTMLElement : !1;
}
function Yn(e) {
  return !uo() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof we(e).ShadowRoot;
}
function Lt(e) {
  const {
    overflow: t,
    overflowX: o,
    overflowY: n,
    display: a
  } = ke(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + o) && !["inline", "contents"].includes(a);
}
function Us(e) {
  return ["table", "td", "th"].includes(rt(e));
}
function co(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function pn(e) {
  const t = fn(), o = Be(e) ? ke(e) : e;
  return o.transform !== "none" || o.perspective !== "none" || (o.containerType ? o.containerType !== "normal" : !1) || !t && (o.backdropFilter ? o.backdropFilter !== "none" : !1) || !t && (o.filter ? o.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (o.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (o.contain || "").includes(n));
}
function Gs(e) {
  let t = Ye(e);
  for (; $e(t) && !yt(t); ) {
    if (pn(t))
      return t;
    if (co(t))
      return null;
    t = Ye(t);
  }
  return null;
}
function fn() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function yt(e) {
  return ["html", "body", "#document"].includes(rt(e));
}
function ke(e) {
  return we(e).getComputedStyle(e);
}
function po(e) {
  return Be(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Ye(e) {
  if (rt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Yn(e) && e.host || // Fallback.
    De(e)
  );
  return Yn(t) ? t.host : t;
}
function Ka(e) {
  const t = Ye(e);
  return yt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : $e(t) && Lt(t) ? t : Ka(t);
}
function Mt(e, t, o) {
  var n;
  t === void 0 && (t = []), o === void 0 && (o = !0);
  const a = Ka(e), s = a === ((n = e.ownerDocument) == null ? void 0 : n.body), l = we(a);
  if (s) {
    const i = Uo(l);
    return t.concat(l, l.visualViewport || [], Lt(a) ? a : [], i && o ? Mt(i) : []);
  }
  return t.concat(a, Mt(a, [], o));
}
function Uo(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function ja(e) {
  const t = ke(e);
  let o = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const a = $e(e), s = a ? e.offsetWidth : o, l = a ? e.offsetHeight : n, i = oo(o) !== s || oo(n) !== l;
  return i && (o = s, n = l), {
    width: o,
    height: n,
    $: i
  };
}
function mn(e) {
  return Be(e) ? e : e.contextElement;
}
function vt(e) {
  const t = mn(e);
  if (!$e(t))
    return Ge(1);
  const o = t.getBoundingClientRect(), {
    width: n,
    height: a,
    $: s
  } = ja(t);
  let l = (s ? oo(o.width) : o.width) / n, i = (s ? oo(o.height) : o.height) / a;
  return (!l || !Number.isFinite(l)) && (l = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: l,
    y: i
  };
}
const qs = /* @__PURE__ */ Ge(0);
function Wa(e) {
  const t = we(e);
  return !fn() || !t.visualViewport ? qs : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Ys(e, t, o) {
  return t === void 0 && (t = !1), !o || t && o !== we(e) ? !1 : t;
}
function at(e, t, o, n) {
  t === void 0 && (t = !1), o === void 0 && (o = !1);
  const a = e.getBoundingClientRect(), s = mn(e);
  let l = Ge(1);
  t && (n ? Be(n) && (l = vt(n)) : l = vt(e));
  const i = Ys(s, o, n) ? Wa(s) : Ge(0);
  let d = (a.left + i.x) / l.x, u = (a.top + i.y) / l.y, c = a.width / l.x, p = a.height / l.y;
  if (s) {
    const v = we(s), m = n && Be(n) ? we(n) : n;
    let h = v, y = Uo(h);
    for (; y && n && m !== h; ) {
      const _ = vt(y), C = y.getBoundingClientRect(), O = ke(y), B = C.left + (y.clientLeft + parseFloat(O.paddingLeft)) * _.x, P = C.top + (y.clientTop + parseFloat(O.paddingTop)) * _.y;
      d *= _.x, u *= _.y, c *= _.x, p *= _.y, d += B, u += P, h = we(y), y = Uo(h);
    }
  }
  return ao({
    width: c,
    height: p,
    x: d,
    y: u
  });
}
function Xs(e) {
  let {
    elements: t,
    rect: o,
    offsetParent: n,
    strategy: a
  } = e;
  const s = a === "fixed", l = De(n), i = t ? co(t.floating) : !1;
  if (n === l || i && s)
    return o;
  let d = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Ge(1);
  const c = Ge(0), p = $e(n);
  if ((p || !p && !s) && ((rt(n) !== "body" || Lt(l)) && (d = po(n)), $e(n))) {
    const v = at(n);
    u = vt(n), c.x = v.x + n.clientLeft, c.y = v.y + n.clientTop;
  }
  return {
    width: o.width * u.x,
    height: o.height * u.y,
    x: o.x * u.x - d.scrollLeft * u.x + c.x,
    y: o.y * u.y - d.scrollTop * u.y + c.y
  };
}
function Zs(e) {
  return Array.from(e.getClientRects());
}
function Go(e, t) {
  const o = po(e).scrollLeft;
  return t ? t.left + o : at(De(e)).left + o;
}
function Qs(e) {
  const t = De(e), o = po(e), n = e.ownerDocument.body, a = be(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), s = be(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let l = -o.scrollLeft + Go(e);
  const i = -o.scrollTop;
  return ke(n).direction === "rtl" && (l += be(t.clientWidth, n.clientWidth) - a), {
    width: a,
    height: s,
    x: l,
    y: i
  };
}
function Js(e, t) {
  const o = we(e), n = De(e), a = o.visualViewport;
  let s = n.clientWidth, l = n.clientHeight, i = 0, d = 0;
  if (a) {
    s = a.width, l = a.height;
    const u = fn();
    (!u || u && t === "fixed") && (i = a.offsetLeft, d = a.offsetTop);
  }
  return {
    width: s,
    height: l,
    x: i,
    y: d
  };
}
function el(e, t) {
  const o = at(e, !0, t === "fixed"), n = o.top + e.clientTop, a = o.left + e.clientLeft, s = $e(e) ? vt(e) : Ge(1), l = e.clientWidth * s.x, i = e.clientHeight * s.y, d = a * s.x, u = n * s.y;
  return {
    width: l,
    height: i,
    x: d,
    y: u
  };
}
function Xn(e, t, o) {
  let n;
  if (t === "viewport")
    n = Js(e, o);
  else if (t === "document")
    n = Qs(De(e));
  else if (Be(t))
    n = el(t, o);
  else {
    const a = Wa(e);
    n = {
      ...t,
      x: t.x - a.x,
      y: t.y - a.y
    };
  }
  return ao(n);
}
function Ha(e, t) {
  const o = Ye(e);
  return o === t || !Be(o) || yt(o) ? !1 : ke(o).position === "fixed" || Ha(o, t);
}
function tl(e, t) {
  const o = t.get(e);
  if (o)
    return o;
  let n = Mt(e, [], !1).filter((i) => Be(i) && rt(i) !== "body"), a = null;
  const s = ke(e).position === "fixed";
  let l = s ? Ye(e) : e;
  for (; Be(l) && !yt(l); ) {
    const i = ke(l), d = pn(l);
    !d && i.position === "fixed" && (a = null), (s ? !d && !a : !d && i.position === "static" && !!a && ["absolute", "fixed"].includes(a.position) || Lt(l) && !d && Ha(e, l)) ? n = n.filter((c) => c !== l) : a = i, l = Ye(l);
  }
  return t.set(e, n), n;
}
function ol(e) {
  let {
    element: t,
    boundary: o,
    rootBoundary: n,
    strategy: a
  } = e;
  const l = [...o === "clippingAncestors" ? co(t) ? [] : tl(t, this._c) : [].concat(o), n], i = l[0], d = l.reduce((u, c) => {
    const p = Xn(t, c, a);
    return u.top = be(p.top, u.top), u.right = Ue(p.right, u.right), u.bottom = Ue(p.bottom, u.bottom), u.left = be(p.left, u.left), u;
  }, Xn(t, i, a));
  return {
    width: d.right - d.left,
    height: d.bottom - d.top,
    x: d.left,
    y: d.top
  };
}
function nl(e) {
  const {
    width: t,
    height: o
  } = ja(e);
  return {
    width: t,
    height: o
  };
}
function al(e, t, o) {
  const n = $e(t), a = De(t), s = o === "fixed", l = at(e, !0, s, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const d = Ge(0);
  if (n || !n && !s)
    if ((rt(t) !== "body" || Lt(a)) && (i = po(t)), n) {
      const m = at(t, !0, s, t);
      d.x = m.x + t.clientLeft, d.y = m.y + t.clientTop;
    } else a && (d.x = Go(a));
  let u = 0, c = 0;
  if (a && !n && !s) {
    const m = a.getBoundingClientRect();
    c = m.top + i.scrollTop, u = m.left + i.scrollLeft - // RTL <body> scrollbar.
    Go(a, m);
  }
  const p = l.left + i.scrollLeft - d.x - u, v = l.top + i.scrollTop - d.y - c;
  return {
    x: p,
    y: v,
    width: l.width,
    height: l.height
  };
}
function Mo(e) {
  return ke(e).position === "static";
}
function Zn(e, t) {
  if (!$e(e) || ke(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let o = e.offsetParent;
  return De(e) === o && (o = o.ownerDocument.body), o;
}
function Ua(e, t) {
  const o = we(e);
  if (co(e))
    return o;
  if (!$e(e)) {
    let a = Ye(e);
    for (; a && !yt(a); ) {
      if (Be(a) && !Mo(a))
        return a;
      a = Ye(a);
    }
    return o;
  }
  let n = Zn(e, t);
  for (; n && Us(n) && Mo(n); )
    n = Zn(n, t);
  return n && yt(n) && Mo(n) && !pn(n) ? o : n || Gs(e) || o;
}
const rl = async function(e) {
  const t = this.getOffsetParent || Ua, o = this.getDimensions, n = await o(e.floating);
  return {
    reference: al(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function sl(e) {
  return ke(e).direction === "rtl";
}
const ll = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Xs,
  getDocumentElement: De,
  getClippingRect: ol,
  getOffsetParent: Ua,
  getElementRects: rl,
  getClientRects: Zs,
  getDimensions: nl,
  getScale: vt,
  isElement: Be,
  isRTL: sl
};
function il(e, t) {
  let o = null, n;
  const a = De(e);
  function s() {
    var i;
    clearTimeout(n), (i = o) == null || i.disconnect(), o = null;
  }
  function l(i, d) {
    i === void 0 && (i = !1), d === void 0 && (d = 1), s();
    const {
      left: u,
      top: c,
      width: p,
      height: v
    } = e.getBoundingClientRect();
    if (i || t(), !p || !v)
      return;
    const m = Yt(c), h = Yt(a.clientWidth - (u + p)), y = Yt(a.clientHeight - (c + v)), _ = Yt(u), O = {
      rootMargin: -m + "px " + -h + "px " + -y + "px " + -_ + "px",
      threshold: be(0, Ue(1, d)) || 1
    };
    let B = !0;
    function P(A) {
      const R = A[0].intersectionRatio;
      if (R !== d) {
        if (!B)
          return l();
        R ? l(!1, R) : n = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      B = !1;
    }
    try {
      o = new IntersectionObserver(P, {
        ...O,
        // Handle <iframe>s
        root: a.ownerDocument
      });
    } catch {
      o = new IntersectionObserver(P, O);
    }
    o.observe(e);
  }
  return l(!0), s;
}
function dl(e, t, o, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: a = !0,
    ancestorResize: s = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: d = !1
  } = n, u = mn(e), c = a || s ? [...u ? Mt(u) : [], ...Mt(t)] : [];
  c.forEach((C) => {
    a && C.addEventListener("scroll", o, {
      passive: !0
    }), s && C.addEventListener("resize", o);
  });
  const p = u && i ? il(u, o) : null;
  let v = -1, m = null;
  l && (m = new ResizeObserver((C) => {
    let [O] = C;
    O && O.target === u && m && (m.unobserve(t), cancelAnimationFrame(v), v = requestAnimationFrame(() => {
      var B;
      (B = m) == null || B.observe(t);
    })), o();
  }), u && !d && m.observe(u), m.observe(t));
  let h, y = d ? at(e) : null;
  d && _();
  function _() {
    const C = at(e);
    y && (C.x !== y.x || C.y !== y.y || C.width !== y.width || C.height !== y.height) && o(), y = C, h = requestAnimationFrame(_);
  }
  return o(), () => {
    var C;
    c.forEach((O) => {
      a && O.removeEventListener("scroll", o), s && O.removeEventListener("resize", o);
    }), p == null || p(), (C = m) == null || C.disconnect(), m = null, d && cancelAnimationFrame(h);
  };
}
const ul = Ks, cl = js, Qn = Ls, pl = Hs, fl = zs, ml = Vs, vl = Ws, gl = (e, t, o) => {
  const n = /* @__PURE__ */ new Map(), a = {
    platform: ll,
    ...o
  }, s = {
    ...a.platform,
    _c: n
  };
  return Fs(e, t, {
    ...a,
    platform: s
  });
};
function hl(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function qo(e) {
  if (hl(e)) {
    const t = e.$el;
    return cn(t) && rt(t) === "#comment" ? null : t;
  }
  return e;
}
function ft(e) {
  return typeof e == "function" ? e() : r(e);
}
function yl(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const o = qo(ft(e.element));
      return o == null ? {} : ml({
        element: o,
        padding: e.padding
      }).fn(t);
    }
  };
}
function Ga(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Jn(e, t) {
  const o = Ga(e);
  return Math.round(t * o) / o;
}
function bl(e, t, o) {
  o === void 0 && (o = {});
  const n = o.whileElementsMounted, a = k(() => {
    var S;
    return (S = ft(o.open)) != null ? S : !0;
  }), s = k(() => ft(o.middleware)), l = k(() => {
    var S;
    return (S = ft(o.placement)) != null ? S : "bottom";
  }), i = k(() => {
    var S;
    return (S = ft(o.strategy)) != null ? S : "absolute";
  }), d = k(() => {
    var S;
    return (S = ft(o.transform)) != null ? S : !0;
  }), u = k(() => qo(e.value)), c = k(() => qo(t.value)), p = D(0), v = D(0), m = D(i.value), h = D(l.value), y = wa({}), _ = D(!1), C = k(() => {
    const S = {
      position: m.value,
      left: "0",
      top: "0"
    };
    if (!c.value)
      return S;
    const F = Jn(c.value, p.value), z = Jn(c.value, v.value);
    return d.value ? {
      ...S,
      transform: "translate(" + F + "px, " + z + "px)",
      ...Ga(c.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: m.value,
      left: F + "px",
      top: z + "px"
    };
  });
  let O;
  function B() {
    if (u.value == null || c.value == null)
      return;
    const S = a.value;
    gl(u.value, c.value, {
      middleware: s.value,
      placement: l.value,
      strategy: i.value
    }).then((F) => {
      p.value = F.x, v.value = F.y, m.value = F.strategy, h.value = F.placement, y.value = F.middlewareData, _.value = S !== !1;
    });
  }
  function P() {
    typeof O == "function" && (O(), O = void 0);
  }
  function A() {
    if (P(), n === void 0) {
      B();
      return;
    }
    if (u.value != null && c.value != null) {
      O = n(u.value, c.value, B);
      return;
    }
  }
  function R() {
    a.value || (_.value = !1);
  }
  return Q([s, l, i, a], B, {
    flush: "sync"
  }), Q([u, c], A, {
    flush: "sync"
  }), Q(a, R, {
    flush: "sync"
  }), xa() && _a(P), {
    x: ct(p),
    y: ct(v),
    strategy: ct(m),
    placement: ct(h),
    middlewareData: ct(y),
    isPositioned: ct(_),
    floatingStyles: C,
    update: B
  };
}
function J(e, t) {
  const o = typeof e == "string" && !t ? `${e}Context` : t, n = Symbol(o);
  return [(a) => {
    const s = $a(n, a);
    if (s || s === null)
      return s;
    throw new Error(
      `Injection \`${n.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (a) => (Da(n, a), a)];
}
function vn(e, t, o) {
  const n = o.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: o
  });
  t && n.addEventListener(e, t, { once: !0 }), n.dispatchEvent(a);
}
function ro(e, t = Number.NEGATIVE_INFINITY, o = Number.POSITIVE_INFINITY) {
  return Math.min(Math.max(e, t), o);
}
function wl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var xl = function e(t, o) {
  if (t === o) return !0;
  if (t && o && typeof t == "object" && typeof o == "object") {
    if (t.constructor !== o.constructor) return !1;
    var n, a, s;
    if (Array.isArray(t)) {
      if (n = t.length, n != o.length) return !1;
      for (a = n; a-- !== 0; )
        if (!e(t[a], o[a])) return !1;
      return !0;
    }
    if (t.constructor === RegExp) return t.source === o.source && t.flags === o.flags;
    if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === o.valueOf();
    if (t.toString !== Object.prototype.toString) return t.toString() === o.toString();
    if (s = Object.keys(t), n = s.length, n !== Object.keys(o).length) return !1;
    for (a = n; a-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(o, s[a])) return !1;
    for (a = n; a-- !== 0; ) {
      var l = s[a];
      if (!e(t[l], o[l])) return !1;
    }
    return !0;
  }
  return t !== t && o !== o;
};
const tt = /* @__PURE__ */ wl(xl);
function gt(e) {
  return e == null;
}
function _l(e, t) {
  var o;
  const n = wa();
  return pe(() => {
    n.value = e();
  }, {
    ...t,
    flush: (o = void 0) != null ? o : "sync"
  }), an(n);
}
function _t(e) {
  return xa() ? (_a(e), !0) : !1;
}
function Cl(e) {
  let t = !1, o;
  const n = Oa(!0);
  return (...a) => (t || (o = n.run(() => e(...a)), t = !0), o);
}
function qa(e) {
  let t = 0, o, n;
  const a = () => {
    t -= 1, n && t <= 0 && (n.stop(), o = void 0, n = void 0);
  };
  return (...s) => (t += 1, o || (n = Oa(!0), o = n.run(() => e(...s))), _t(a), o);
}
function Ve(e) {
  return typeof e == "function" ? e() : r(e);
}
const Ee = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Bl = (e) => typeof e < "u", kl = (e) => e != null, Ol = Object.prototype.toString, $l = (e) => Ol.call(e) === "[object Object]", Ya = () => {
}, ea = /* @__PURE__ */ Dl();
function Dl() {
  var e, t;
  return Ee && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function El(e) {
  return Xe();
}
function Al(e, t = 1e4) {
  return rs((o, n) => {
    let a = Ve(e), s;
    const l = () => setTimeout(() => {
      a = Ve(e), n();
    }, Ve(t));
    return _t(() => {
      clearTimeout(s);
    }), {
      get() {
        return o(), a;
      },
      set(i) {
        a = i, n(), clearTimeout(s), s = l();
      }
    };
  });
}
function Sl(e, t) {
  El() && nn(e, t);
}
function Pl(e, t, o = {}) {
  const {
    immediate: n = !0
  } = o, a = D(!1);
  let s = null;
  function l() {
    s && (clearTimeout(s), s = null);
  }
  function i() {
    a.value = !1, l();
  }
  function d(...u) {
    l(), a.value = !0, s = setTimeout(() => {
      a.value = !1, s = null, e(...u);
    }, Ve(t));
  }
  return n && (a.value = !0, Ee && d()), _t(i), {
    isPending: an(a),
    start: d,
    stop: i
  };
}
function Tl(e = 1e3, t = {}) {
  const {
    controls: o = !1,
    callback: n
  } = t, a = Pl(
    n ?? Ya,
    e,
    t
  ), s = k(() => !a.isPending.value);
  return o ? {
    ready: s,
    ...a
  } : s;
}
function xe(e) {
  var t;
  const o = Ve(e);
  return (t = o == null ? void 0 : o.$el) != null ? t : o;
}
const fo = Ee ? window : void 0;
function so(...e) {
  let t, o, n, a;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([o, n, a] = e, t = fo) : [t, o, n, a] = e, !t)
    return Ya;
  Array.isArray(o) || (o = [o]), Array.isArray(n) || (n = [n]);
  const s = [], l = () => {
    s.forEach((c) => c()), s.length = 0;
  }, i = (c, p, v, m) => (c.addEventListener(p, v, m), () => c.removeEventListener(p, v, m)), d = Q(
    () => [xe(t), Ve(a)],
    ([c, p]) => {
      if (l(), !c)
        return;
      const v = $l(p) ? { ...p } : p;
      s.push(
        ...o.flatMap((m) => n.map((h) => i(c, m, h, v)))
      );
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    d(), l();
  };
  return _t(u), u;
}
function Ml(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function gn(...e) {
  let t, o, n = {};
  e.length === 3 ? (t = e[0], o = e[1], n = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, o = e[0], n = e[1]) : (t = e[0], o = e[1]) : (t = !0, o = e[0]);
  const {
    target: a = fo,
    eventName: s = "keydown",
    passive: l = !1,
    dedupe: i = !1
  } = n, d = Ml(t);
  return so(a, s, (u) => {
    u.repeat && Ve(i) || d(u) && o(u);
  }, l);
}
function hn() {
  const e = D(!1), t = Xe();
  return t && se(() => {
    e.value = !0;
  }, t), e;
}
function Il(e) {
  const t = hn();
  return k(() => (t.value, !!e()));
}
function Rl(e, t, o = {}) {
  const { window: n = fo, ...a } = o;
  let s;
  const l = Il(() => n && "MutationObserver" in n), i = () => {
    s && (s.disconnect(), s = void 0);
  }, d = k(() => {
    const v = Ve(e), m = (Array.isArray(v) ? v : [v]).map(xe).filter(kl);
    return new Set(m);
  }), u = Q(
    () => d.value,
    (v) => {
      i(), l.value && v.size && (s = new MutationObserver(t), v.forEach((m) => s.observe(m, a)));
    },
    { immediate: !0, flush: "post" }
  ), c = () => s == null ? void 0 : s.takeRecords(), p = () => {
    i(), u();
  };
  return _t(p), {
    isSupported: l,
    stop: p,
    takeRecords: c
  };
}
function Xa(e, t = {}) {
  const {
    immediate: o = !0,
    fpsLimit: n = void 0,
    window: a = fo
  } = t, s = D(!1), l = n ? 1e3 / n : null;
  let i = 0, d = null;
  function u(v) {
    if (!s.value || !a)
      return;
    i || (i = v);
    const m = v - i;
    if (l && m < l) {
      d = a.requestAnimationFrame(u);
      return;
    }
    i = v, e({ delta: m, timestamp: v }), d = a.requestAnimationFrame(u);
  }
  function c() {
    !s.value && a && (s.value = !0, i = 0, d = a.requestAnimationFrame(u));
  }
  function p() {
    s.value = !1, d != null && a && (a.cancelAnimationFrame(d), d = null);
  }
  return o && c(), _t(p), {
    isActive: an(s),
    pause: p,
    resume: c
  };
}
function Fl(e) {
  return JSON.parse(JSON.stringify(e));
}
function le(e, t, o, n = {}) {
  var a, s, l;
  const {
    clone: i = !1,
    passive: d = !1,
    eventName: u,
    deep: c = !1,
    defaultValue: p,
    shouldEmit: v
  } = n, m = Xe(), h = o || (m == null ? void 0 : m.emit) || ((a = m == null ? void 0 : m.$emit) == null ? void 0 : a.bind(m)) || ((l = (s = m == null ? void 0 : m.proxy) == null ? void 0 : s.$emit) == null ? void 0 : l.bind(m == null ? void 0 : m.proxy));
  let y = u;
  t || (t = "modelValue"), y = y || `update:${t.toString()}`;
  const _ = (B) => i ? typeof i == "function" ? i(B) : Fl(B) : B, C = () => Bl(e[t]) ? _(e[t]) : p, O = (B) => {
    v ? v(B) && h(y, B) : h(y, B);
  };
  if (d) {
    const B = C(), P = D(B);
    let A = !1;
    return Q(
      () => e[t],
      (R) => {
        A || (A = !0, P.value = _(R), ee(() => A = !1));
      }
    ), Q(
      P,
      (R) => {
        !A && (R !== e[t] || c) && O(R);
      },
      { deep: c }
    ), P;
  } else
    return k({
      get() {
        return C();
      },
      set(B) {
        O(B);
      }
    });
}
function mo(e) {
  return e ? e.flatMap((t) => t.type === ce ? mo(t.children) : [t]) : [];
}
const Vl = ["INPUT", "TEXTAREA"];
function Za(e, t, o, n = {}) {
  if (!t || n.enableIgnoredElement && Vl.includes(t.nodeName))
    return null;
  const {
    arrowKeyOptions: a = "both",
    attributeName: s = "[data-radix-vue-collection-item]",
    itemsArray: l = [],
    loop: i = !0,
    dir: d = "ltr",
    preventScroll: u = !0,
    focus: c = !1
  } = n, [p, v, m, h, y, _] = [
    e.key === "ArrowRight",
    e.key === "ArrowLeft",
    e.key === "ArrowUp",
    e.key === "ArrowDown",
    e.key === "Home",
    e.key === "End"
  ], C = m || h, O = p || v;
  if (!y && !_ && (!C && !O || a === "vertical" && O || a === "horizontal" && C))
    return null;
  const B = o ? Array.from(o.querySelectorAll(s)) : l;
  if (!B.length)
    return null;
  u && e.preventDefault();
  let P = null;
  return O || C ? P = Qa(B, t, {
    goForward: C ? h : d === "ltr" ? p : v,
    loop: i
  }) : y ? P = B.at(0) || null : _ && (P = B.at(-1) || null), c && (P == null || P.focus()), P;
}
function Qa(e, t, o, n = e.length) {
  if (--n === 0)
    return null;
  const a = e.indexOf(t), s = o.goForward ? a + 1 : a - 1;
  if (!o.loop && (s < 0 || s >= e.length))
    return null;
  const l = (s + e.length) % e.length, i = e[l];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? Qa(
    e,
    i,
    o,
    n
  ) : i : null;
}
function Io(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function Yo(e, t, o = ".", n) {
  if (!Io(t))
    return Yo(e, {}, o);
  const a = Object.assign({}, t);
  for (const s in e) {
    if (s === "__proto__" || s === "constructor")
      continue;
    const l = e[s];
    l != null && (Array.isArray(l) && Array.isArray(a[s]) ? a[s] = [...l, ...a[s]] : Io(l) && Io(a[s]) ? a[s] = Yo(
      l,
      a[s],
      (o ? `${o}.` : "") + s.toString()
    ) : a[s] = l);
  }
  return a;
}
function Ll(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((o, n) => Yo(o, n, ""), {})
  );
}
const zl = Ll(), [vo, jf] = J("ConfigProvider");
let Nl = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", Kl = (e = 21) => {
  let t = "", o = e;
  for (; o--; )
    t += Nl[Math.random() * 64 | 0];
  return t;
};
const jl = qa(() => {
  const e = D(/* @__PURE__ */ new Map()), t = D(), o = k(() => {
    for (const l of e.value.values())
      if (l)
        return !0;
    return !1;
  }), n = vo({
    scrollBody: D(!0)
  });
  let a = null;
  const s = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", ea && (a == null || a()), t.value = void 0;
  };
  return Q(o, (l, i) => {
    var d;
    if (!Ee)
      return;
    if (!l) {
      i && s();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const u = window.innerWidth - document.documentElement.clientWidth, c = { padding: u, margin: 0 }, p = (d = n.scrollBody) != null && d.value ? typeof n.scrollBody.value == "object" ? zl({
      padding: n.scrollBody.value.padding === !0 ? u : n.scrollBody.value.padding,
      margin: n.scrollBody.value.margin === !0 ? u : n.scrollBody.value.margin
    }, c) : c : { padding: 0, margin: 0 };
    u > 0 && (document.body.style.paddingRight = typeof p.padding == "number" ? `${p.padding}px` : String(p.padding), document.body.style.marginRight = typeof p.margin == "number" ? `${p.margin}px` : String(p.margin), document.body.style.setProperty("--scrollbar-width", `${u}px`), document.body.style.overflow = "hidden"), ea && (a = so(
      document,
      "touchmove",
      (v) => {
        var m;
        v.target === document.documentElement && (v.touches.length > 1 || (m = v.preventDefault) == null || m.call(v));
      },
      { passive: !1 }
    )), ee(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), e;
});
function zt(e) {
  const t = Kl(6), o = jl();
  o.value.set(t, e ?? !1);
  const n = k({
    get: () => o.value.get(t) ?? !1,
    set: (a) => o.value.set(t, a)
  });
  return Sl(() => {
    o.value.delete(t);
  }), n;
}
const Wl = "data-radix-vue-collection-item";
function Ct(e, t = Wl) {
  const o = Symbol();
  return { createCollection: (n) => {
    const a = D([]);
    function s() {
      const l = xe(n);
      return l ? a.value = Array.from(
        l.querySelectorAll(`[${t}]:not([data-disabled])`)
      ) : a.value = [];
    }
    return ss(() => {
      a.value = [];
    }), se(s), ls(s), Q(() => n == null ? void 0 : n.value, s, { immediate: !0 }), Da(o, a), a;
  }, injectCollection: () => $a(o, D([])) };
}
function st(e) {
  const t = vo({
    dir: D("ltr")
  });
  return k(() => {
    var o;
    return (e == null ? void 0 : e.value) || ((o = t.dir) == null ? void 0 : o.value) || "ltr";
  });
}
function Ze(e) {
  const t = Xe(), o = t == null ? void 0 : t.type.emits, n = {};
  return o != null && o.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), o == null || o.forEach((a) => {
    n[os(Ca(a))] = (...s) => e(a, ...s);
  }), n;
}
let Ro = 0;
function yn() {
  pe((e) => {
    if (!Ee)
      return;
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? ta()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? ta()
    ), Ro++, e(() => {
      Ro === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((o) => o.remove()), Ro--;
    });
  });
}
function ta() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
function go(e) {
  return k(() => {
    var t;
    return Ve(e) ? !!((t = xe(e)) != null && t.closest("form")) : !0;
  });
}
function me(e) {
  const t = Xe(), o = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((a, s) => {
    const l = (t == null ? void 0 : t.type.props[s]).default;
    return l !== void 0 && (a[s] = l), a;
  }, {}), n = Xr(e);
  return k(() => {
    const a = {}, s = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(s).forEach((l) => {
      a[Ca(l)] = s[l];
    }), Object.keys({ ...o, ...a }).reduce((l, i) => (n.value[i] !== void 0 && (l[i] = n.value[i]), l), {});
  });
}
function X(e, t) {
  const o = me(e), n = t ? Ze(t) : {};
  return k(() => ({
    ...o.value,
    ...n
  }));
}
function T() {
  const e = Xe(), t = D(), o = k(() => {
    var l, i;
    return ["#text", "#comment"].includes((l = t.value) == null ? void 0 : l.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : xe(t);
  }), n = Object.assign({}, e.exposed), a = {};
  for (const l in e.props)
    Object.defineProperty(a, l, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[l]
    });
  if (Object.keys(n).length > 0)
    for (const l in n)
      Object.defineProperty(a, l, {
        enumerable: !0,
        configurable: !0,
        get: () => n[l]
      });
  Object.defineProperty(a, "$el", {
    enumerable: !0,
    configurable: !0,
    get: () => e.vnode.el
  }), e.exposed = a;
  function s(l) {
    t.value = l, !(l instanceof Element || !l) && (Object.defineProperty(a, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => l.$el
    }), e.exposed = a);
  }
  return { forwardRef: s, currentRef: t, currentElement: o };
}
var Hl = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, pt = /* @__PURE__ */ new WeakMap(), Xt = /* @__PURE__ */ new WeakMap(), Zt = {}, Fo = 0, Ja = function(e) {
  return e && (e.host || Ja(e.parentNode));
}, Ul = function(e, t) {
  return t.map(function(o) {
    if (e.contains(o))
      return o;
    var n = Ja(o);
    return n && e.contains(n) ? n : (console.error("aria-hidden", o, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(o) {
    return !!o;
  });
}, Gl = function(e, t, o, n) {
  var a = Ul(t, Array.isArray(e) ? e : [e]);
  Zt[o] || (Zt[o] = /* @__PURE__ */ new WeakMap());
  var s = Zt[o], l = [], i = /* @__PURE__ */ new Set(), d = new Set(a), u = function(p) {
    !p || i.has(p) || (i.add(p), u(p.parentNode));
  };
  a.forEach(u);
  var c = function(p) {
    !p || d.has(p) || Array.prototype.forEach.call(p.children, function(v) {
      if (i.has(v))
        c(v);
      else
        try {
          var m = v.getAttribute(n), h = m !== null && m !== "false", y = (pt.get(v) || 0) + 1, _ = (s.get(v) || 0) + 1;
          pt.set(v, y), s.set(v, _), l.push(v), y === 1 && h && Xt.set(v, !0), _ === 1 && v.setAttribute(o, "true"), h || v.setAttribute(n, "true");
        } catch (C) {
          console.error("aria-hidden: cannot operate on ", v, C);
        }
    });
  };
  return c(t), i.clear(), Fo++, function() {
    l.forEach(function(p) {
      var v = pt.get(p) - 1, m = s.get(p) - 1;
      pt.set(p, v), s.set(p, m), v || (Xt.has(p) || p.removeAttribute(n), Xt.delete(p)), m || p.removeAttribute(o);
    }), Fo--, Fo || (pt = /* @__PURE__ */ new WeakMap(), pt = /* @__PURE__ */ new WeakMap(), Xt = /* @__PURE__ */ new WeakMap(), Zt = {});
  };
}, ql = function(e, t, o) {
  o === void 0 && (o = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), a = Hl(e);
  return a ? (n.push.apply(n, Array.from(a.querySelectorAll("[aria-live]"))), Gl(n, a, o, "aria-hidden")) : function() {
    return null;
  };
};
function Nt(e) {
  let t;
  Q(() => xe(e), (o) => {
    o ? t = ql(o) : t && t();
  }), Ne(() => {
    t && t();
  });
}
let Yl = 0;
function fe(e, t = "radix") {
  const o = vo({ useId: void 0 });
  return Kn.useId ? `${t}-${Kn.useId()}` : o.useId ? `${t}-${o.useId()}` : `${t}-${++Yl}`;
}
function er(e) {
  const t = D(), o = k(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.width) ?? 0;
  }), n = k(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.height) ?? 0;
  });
  return se(() => {
    const a = xe(e);
    if (a) {
      t.value = { width: a.offsetWidth, height: a.offsetHeight };
      const s = new ResizeObserver((l) => {
        if (!Array.isArray(l) || !l.length)
          return;
        const i = l[0];
        let d, u;
        if ("borderBoxSize" in i) {
          const c = i.borderBoxSize, p = Array.isArray(c) ? c[0] : c;
          d = p.inlineSize, u = p.blockSize;
        } else
          d = a.offsetWidth, u = a.offsetHeight;
        t.value = { width: d, height: u };
      });
      return s.observe(a, { box: "border-box" }), () => s.unobserve(a);
    } else
      t.value = void 0;
  }), {
    width: o,
    height: n
  };
}
function Xl(e, t) {
  const o = D(e);
  function n(a) {
    return t[o.value][a] ?? o.value;
  }
  return {
    state: o,
    dispatch: (a) => {
      o.value = n(a);
    }
  };
}
function bn(e) {
  const t = Al("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (o, n) => {
      var a, s;
      if (!(e != null && e.value) && !n)
        return;
      t.value = t.value + o;
      const l = (e == null ? void 0 : e.value) ?? n, i = document.activeElement, d = ((s = (a = l.find((v) => v === i)) == null ? void 0 : a.textContent) == null ? void 0 : s.trim()) ?? "", u = l.map((v) => {
        var m;
        return ((m = v.textContent) == null ? void 0 : m.trim()) ?? "";
      }), c = Ql(u, t.value, d), p = l.find(
        (v) => {
          var m;
          return ((m = v.textContent) == null ? void 0 : m.trim()) === c;
        }
      );
      return p && p.focus(), p;
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function Zl(e, t) {
  return e.map((o, n) => e[(t + n) % e.length]);
}
function Ql(e, t, o) {
  const n = t.length > 1 && Array.from(t).every((i) => i === t[0]) ? t[0] : t, a = o ? e.indexOf(o) : -1;
  let s = Zl(e, Math.max(a, 0));
  n.length === 1 && (s = s.filter((i) => i !== o));
  const l = s.find(
    (i) => i.toLowerCase().startsWith(n.toLowerCase())
  );
  return l !== o ? l : void 0;
}
const wn = b({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: o }) {
    return () => {
      var n, a;
      if (!o.default)
        return null;
      const s = mo(o.default()), l = s.findIndex((c) => c.type !== Zr);
      if (l === -1)
        return s;
      const i = s[l];
      (n = i.props) == null || delete n.ref;
      const d = i.props ? E(t, i.props) : t;
      t.class && (a = i.props) != null && a.class && delete i.props.class;
      const u = Qr(i, d);
      for (const c in d)
        c.startsWith("on") && (u.props || (u.props = {}), u.props[c] = d[c]);
      return s.length === 1 ? u : (s[l] = u, s);
    };
  }
}), N = b({
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
  setup(e, { attrs: t, slots: o }) {
    const n = e.asChild ? "template" : e.as;
    return typeof n == "string" && ["area", "img", "input"].includes(n) ? () => ot(n, t) : n !== "template" ? () => ot(e.as, t, { default: o.default }) : () => ot(wn, t, { default: o.default });
  }
});
function tr() {
  const e = D(), t = k(() => {
    var o, n;
    return ["#text", "#comment"].includes((o = e.value) == null ? void 0 : o.$el.nodeName) ? (n = e.value) == null ? void 0 : n.$el.nextElementSibling : xe(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
const [or, Jl] = J("CollapsibleRoot"), ei = /* @__PURE__ */ b({
  __name: "CollapsibleRoot",
  props: {
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:open"],
  setup(e, { expose: t, emit: o }) {
    const n = e, a = le(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), s = le(n, "disabled");
    return Jl({
      contentId: "",
      disabled: s,
      open: a,
      onOpenToggle: () => {
        a.value = !a.value;
      }
    }), t({ open: a }), T(), (l, i) => (f(), x(r(N), {
      as: l.as,
      "as-child": n.asChild,
      "data-state": n.open ? "open" : "closed",
      "data-disabled": n.disabled ? "" : void 0
    }, {
      default: g(() => [
        w(l.$slots, "default", { open: r(a) })
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state", "data-disabled"]));
  }
}), ti = /* @__PURE__ */ b({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    T();
    const o = or();
    return (n, a) => {
      var s, l;
      return f(), x(r(N), {
        type: n.as === "button" ? "button" : void 0,
        as: n.as,
        "as-child": t.asChild,
        "aria-controls": r(o).contentId,
        "aria-expanded": r(o).open.value,
        "data-state": r(o).open.value ? "open" : "closed",
        "data-disabled": (s = r(o).disabled) != null && s.value ? "" : void 0,
        disabled: (l = r(o).disabled) == null ? void 0 : l.value,
        onClick: r(o).onOpenToggle
      }, {
        default: g(() => [
          w(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["type", "as", "as-child", "aria-controls", "aria-expanded", "data-state", "data-disabled", "disabled", "onClick"]);
    };
  }
});
function oi(e, t) {
  const o = D({}), n = D("none"), a = e.value ? "mounted" : "unmounted", { state: s, dispatch: l } = Xl(a, {
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
  }), i = (v) => {
    var m;
    if (Ee) {
      const h = new CustomEvent(v, { bubbles: !1, cancelable: !1 });
      (m = t.value) == null || m.dispatchEvent(h);
    }
  };
  Q(
    e,
    async (v, m) => {
      var h;
      const y = m !== v;
      if (await ee(), y) {
        const _ = n.value, C = Qt(t.value);
        v ? (l("MOUNT"), i("enter"), C === "none" && i("after-enter")) : C === "none" || ((h = o.value) == null ? void 0 : h.display) === "none" ? (l("UNMOUNT"), i("leave"), i("after-leave")) : m && _ !== C ? (l("ANIMATION_OUT"), i("leave")) : (l("UNMOUNT"), i("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const d = (v) => {
    const m = Qt(t.value), h = m.includes(
      v.animationName
    ), y = s.value === "mounted" ? "enter" : "leave";
    v.target === t.value && h && (i(`after-${y}`), l("ANIMATION_END")), v.target === t.value && m === "none" && l("ANIMATION_END");
  }, u = (v) => {
    v.target === t.value && (n.value = Qt(t.value));
  }, c = Q(
    t,
    (v, m) => {
      v ? (o.value = getComputedStyle(v), v.addEventListener("animationstart", u), v.addEventListener("animationcancel", d), v.addEventListener("animationend", d)) : (l("ANIMATION_END"), m == null || m.removeEventListener("animationstart", u), m == null || m.removeEventListener("animationcancel", d), m == null || m.removeEventListener("animationend", d));
    },
    { immediate: !0 }
  ), p = Q(s, () => {
    const v = Qt(t.value);
    n.value = s.value === "mounted" ? v : "none";
  });
  return Ne(() => {
    c(), p();
  }), {
    isPresent: k(
      () => ["mounted", "unmountSuspended"].includes(s.value)
    )
  };
}
function Qt(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const Ae = b({
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
  setup(e, { slots: t, expose: o }) {
    var n;
    const { present: a, forceMount: s } = ie(e), l = D(), { isPresent: i } = oi(a, l);
    o({ present: i });
    let d = t.default({ present: i });
    d = mo(d || []);
    const u = Xe();
    if (d && (d == null ? void 0 : d.length) > 1) {
      const c = (n = u == null ? void 0 : u.parent) != null && n.type.name ? `<${u.parent.type.name} />` : "component";
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
    return () => s.value || a.value || i.value ? ot(t.default({ present: i })[0], {
      ref: (c) => {
        const p = xe(c);
        return typeof (p == null ? void 0 : p.hasAttribute) > "u" || (p != null && p.hasAttribute("data-radix-popper-content-wrapper") ? l.value = p.firstElementChild : l.value = p), p;
      }
    }) : null;
  }
}), ni = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, o = or();
    o.contentId || (o.contentId = fe(void 0, "radix-vue-collapsible-content"));
    const n = D(), { forwardRef: a, currentElement: s } = T(), l = D(0), i = D(0), d = k(() => o.open.value), u = D(d.value), c = D();
    return Q(
      () => {
        var p;
        return [d.value, (p = n.value) == null ? void 0 : p.present];
      },
      async () => {
        await ee();
        const p = s.value;
        if (!p)
          return;
        c.value = c.value || {
          transitionDuration: p.style.transitionDuration,
          animationName: p.style.animationName
        }, p.style.transitionDuration = "0s", p.style.animationName = "none";
        const v = p.getBoundingClientRect();
        i.value = v.height, l.value = v.width, u.value || (p.style.transitionDuration = c.value.transitionDuration, p.style.animationName = c.value.animationName);
      },
      {
        immediate: !0
      }
    ), se(() => {
      requestAnimationFrame(() => {
        u.value = !1;
      });
    }), (p, v) => (f(), x(r(Ae), {
      ref_key: "presentRef",
      ref: n,
      present: p.forceMount || r(o).open.value,
      "force-mount": !0
    }, {
      default: g(() => {
        var m, h;
        return [
          I(r(N), E(p.$attrs, {
            id: r(o).contentId,
            ref: r(a),
            "as-child": t.asChild,
            as: p.as,
            "data-state": r(o).open.value ? "open" : "closed",
            "data-disabled": (m = r(o).disabled) != null && m.value ? "" : void 0,
            hidden: !((h = n.value) != null && h.present),
            style: {
              "--radix-collapsible-content-height": `${i.value}px`,
              "--radix-collapsible-content-width": `${l.value}px`
            }
          }), {
            default: g(() => {
              var y;
              return [
                (y = n.value) != null && y.present ? w(p.$slots, "default", { key: 0 }) : re("", !0)
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
function nr({ type: e, defaultValue: t, modelValue: o }) {
  const n = o || t;
  if (gt(e) && gt(o) && gt(t))
    throw new Error("Either the `type` or the `value` or `default-value` prop must be defined.");
  if (o !== void 0 && t !== void 0 && typeof o != typeof t)
    throw new Error(
      `Invalid prop \`value\` of value \`${o}\` supplied, should be the same type as the \`defaultValue\` prop, which is \`${t}\`. The \`value\` prop must be:
  ${e === "single" ? "- a string" : e === "multiple" ? "- an array of strings" : `- a string
- an array of strings`}
  - \`undefined\``
    );
  const a = o !== void 0 || t !== void 0;
  if (e && a) {
    const s = Array.isArray(o) || Array.isArray(t), l = o !== void 0 ? "modelValue" : "defaultValue", i = l === "modelValue" ? typeof o : typeof t;
    if (e === "single" && s)
      return console.error(`Invalid prop \`${l}\` of type ${i} supplied with type \`single\`. The \`modelValue\` prop must be a string or \`undefined\`.
    You can remove the \`type\` prop to let the component infer the type from the ${l} prop.`), "multiple";
    if (e === "multiple" && !s)
      return console.error(`Invalid prop \`${l}\` of type ${i} supplied with type \`multiple\`. The \`modelValue\` prop must be an array of strings or \`undefined\`.
    You can remove the \`type\` prop to let the component infer the type from the ${l} prop.`), "single";
  }
  return a ? Array.isArray(n) ? "multiple" : "single" : e;
}
function ai({ type: e, defaultValue: t, modelValue: o }) {
  return e || nr({ type: e, defaultValue: t, modelValue: o });
}
function ri({ type: e, defaultValue: t }) {
  return t !== void 0 ? t : e === "single" ? void 0 : [];
}
function si(e, t) {
  const o = D(ai(e)), n = le(e, "modelValue", t, {
    defaultValue: ri(e),
    passive: e.modelValue === void 0,
    deep: !0
  });
  Q(
    () => [e.type, e.modelValue, e.defaultValue],
    () => {
      const l = nr(e);
      o.value !== l && (o.value = l);
    },
    { immediate: !0 }
  );
  function a(l) {
    if (o.value === "single")
      n.value = l === n.value ? void 0 : l;
    else {
      const i = [...n.value || []];
      if (i.includes(l)) {
        const d = i.findIndex((u) => u === l);
        i.splice(d, 1);
      } else
        i.push(l);
      n.value = i;
    }
  }
  const s = k(() => o.value === "single");
  return {
    modelValue: n,
    type: o,
    changeModelValue: a,
    isSingle: s
  };
}
const [ho, li] = J("AccordionRoot"), ii = /* @__PURE__ */ b({
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
    const o = e, n = t, { dir: a, disabled: s } = ie(o), l = st(a), { modelValue: i, changeModelValue: d, isSingle: u } = si(o, n), { forwardRef: c, currentElement: p } = T();
    return li({
      disabled: s,
      direction: l,
      orientation: o.orientation,
      parentElement: p,
      isSingle: u,
      collapsible: o.collapsible,
      modelValue: i,
      changeModelValue: d
    }), (v, m) => (f(), x(r(N), {
      ref: r(c),
      "as-child": v.asChild,
      as: v.as
    }, {
      default: g(() => [
        w(v.$slots, "default", { modelValue: r(i) })
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), [xn, di] = J("AccordionItem"), ui = /* @__PURE__ */ b({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e, { expose: t }) {
    const o = e, n = ho(), a = k(
      () => n.isSingle.value ? o.value === n.modelValue.value : Array.isArray(n.modelValue.value) && n.modelValue.value.includes(o.value)
    ), s = k(() => n.disabled.value || o.disabled || n.isSingle.value && a.value && !n.collapsible), l = k(() => s.value ? "" : void 0), i = k(
      () => a.value ? "open" : "closed"
      /* Closed */
    );
    t({ open: a, dataDisabled: l });
    const { currentRef: d, currentElement: u } = T();
    di({
      open: a,
      dataState: i,
      disabled: s,
      dataDisabled: l,
      triggerId: "",
      currentRef: d,
      currentElement: u,
      value: k(() => o.value)
    });
    function c(p) {
      Za(
        p,
        u.value,
        n.parentElement.value,
        {
          arrowKeyOptions: n.orientation,
          dir: n.direction.value,
          focus: !0
        }
      );
    }
    return (p, v) => (f(), x(r(ei), {
      "data-orientation": r(n).orientation,
      "data-disabled": l.value,
      "data-state": i.value,
      disabled: s.value,
      open: a.value,
      as: o.as,
      "as-child": o.asChild,
      onKeydown: mt(c, ["up", "down", "left", "right", "home", "end"])
    }, {
      default: g(() => [
        w(p.$slots, "default", { open: a.value })
      ]),
      _: 3
    }, 8, ["data-orientation", "data-disabled", "data-state", "disabled", "open", "as", "as-child"]));
  }
}), ci = /* @__PURE__ */ b({
  __name: "AccordionContent",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, o = ho(), n = xn();
    return T(), (a, s) => (f(), x(r(ni), {
      role: "region",
      hidden: !r(n).open.value,
      "as-child": t.asChild,
      "aria-labelledby": r(n).triggerId,
      "data-state": r(n).dataState.value,
      "data-disabled": r(n).dataDisabled.value,
      "data-orientation": r(o).orientation,
      style: { "--radix-accordion-content-width": "var(--radix-collapsible-content-width)", "--radix-accordion-content-height": "var(--radix-collapsible-content-height)" }
    }, {
      default: g(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["hidden", "as-child", "aria-labelledby", "data-state", "data-disabled", "data-orientation"]));
  }
}), pi = /* @__PURE__ */ b({
  __name: "AccordionHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "h3" }
  },
  setup(e) {
    const t = e, o = ho(), n = xn();
    return T(), (a, s) => (f(), x(r(N), {
      as: t.as,
      "as-child": t.asChild,
      "data-orientation": r(o).orientation,
      "data-state": r(n).dataState.value,
      "data-disabled": r(n).dataDisabled.value
    }, {
      default: g(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-orientation", "data-state", "data-disabled"]));
  }
}), fi = /* @__PURE__ */ b({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, o = ho(), n = xn();
    n.triggerId || (n.triggerId = fe(void 0, "radix-vue-accordion-trigger"));
    function a() {
      n.disabled.value || o.changeModelValue(n.value.value);
    }
    return (s, l) => (f(), x(r(ti), {
      id: r(n).triggerId,
      ref: r(n).currentRef,
      "data-radix-vue-collection-item": "",
      as: t.as,
      "as-child": t.asChild,
      "aria-disabled": r(n).disabled.value || void 0,
      "aria-expanded": r(n).open.value || !1,
      "data-disabled": r(n).dataDisabled.value,
      "data-orientation": r(o).orientation,
      "data-state": r(n).dataState.value,
      disabled: r(n).disabled.value,
      onClick: a
    }, {
      default: g(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "as", "as-child", "aria-disabled", "aria-expanded", "data-disabled", "data-orientation", "data-state", "disabled"]));
  }
}), [Se, mi] = J("DialogRoot"), _n = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = e, n = le(o, "open", t, {
      defaultValue: o.defaultOpen,
      passive: o.open === void 0
    }), a = D(), s = D(), { modal: l } = ie(o);
    return mi({
      open: n,
      modal: l,
      openModal: () => {
        n.value = !0;
      },
      onOpenChange: (i) => {
        n.value = i;
      },
      onOpenToggle: () => {
        n.value = !n.value;
      },
      contentId: "",
      titleId: "",
      descriptionId: "",
      triggerElement: a,
      contentElement: s
    }), (i, d) => w(i.$slots, "default", { open: r(n) });
  }
}), Cn = /* @__PURE__ */ b({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, o = Se(), { forwardRef: n, currentElement: a } = T();
    return o.contentId || (o.contentId = fe(void 0, "radix-vue-dialog-content")), se(() => {
      o.triggerElement.value = a.value;
    }), (s, l) => (f(), x(r(N), E(t, {
      ref: r(n),
      type: s.as === "button" ? "button" : void 0,
      "aria-haspopup": "dialog",
      "aria-expanded": r(o).open.value || !1,
      "aria-controls": r(o).open.value ? r(o).contentId : void 0,
      "data-state": r(o).open.value ? "open" : "closed",
      onClick: r(o).onOpenToggle
    }), {
      default: g(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "onClick"]));
  }
}), Kt = /* @__PURE__ */ b({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = hn();
    return (o, n) => r(t) || o.forceMount ? (f(), x(io, {
      key: 0,
      to: o.to,
      disabled: o.disabled
    }, [
      w(o.$slots, "default")
    ], 8, ["to", "disabled"])) : re("", !0);
  }
}), Bn = /* @__PURE__ */ b({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (o, n) => (f(), x(r(Kt), W(U(t)), {
      default: g(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vi = "dismissableLayer.pointerDownOutside", gi = "dismissableLayer.focusOutside";
function ar(e, t) {
  const o = t.closest(
    "[data-dismissable-layer]"
  ), n = e.dataset.dismissableLayer === "" ? e : e.querySelector(
    "[data-dismissable-layer]"
  ), a = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(o && n === o || a.indexOf(n) < a.indexOf(o));
}
function hi(e, t) {
  var o;
  const n = ((o = t == null ? void 0 : t.value) == null ? void 0 : o.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), a = D(!1), s = D(() => {
  });
  return pe((l) => {
    if (!Ee)
      return;
    const i = async (u) => {
      const c = u.target;
      if (t != null && t.value) {
        if (ar(t.value, c)) {
          a.value = !1;
          return;
        }
        if (u.target && !a.value) {
          let p = function() {
            vn(
              vi,
              e,
              v
            );
          };
          const v = { originalEvent: u };
          u.pointerType === "touch" ? (n.removeEventListener("click", s.value), s.value = p, n.addEventListener("click", s.value, {
            once: !0
          })) : p();
        } else
          n.removeEventListener("click", s.value);
        a.value = !1;
      }
    }, d = window.setTimeout(() => {
      n.addEventListener("pointerdown", i);
    }, 0);
    l(() => {
      window.clearTimeout(d), n.removeEventListener("pointerdown", i), n.removeEventListener("click", s.value);
    });
  }), {
    onPointerDownCapture: () => a.value = !0
  };
}
function yi(e, t) {
  var o;
  const n = ((o = t == null ? void 0 : t.value) == null ? void 0 : o.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), a = D(!1);
  return pe((s) => {
    if (!Ee)
      return;
    const l = async (i) => {
      t != null && t.value && (await ee(), !(!t.value || ar(t.value, i.target)) && i.target && !a.value && vn(
        gi,
        e,
        { originalEvent: i }
      ));
    };
    n.addEventListener("focusin", l), s(() => n.removeEventListener("focusin", l));
  }), {
    onFocusCapture: () => a.value = !0,
    onBlurCapture: () => a.value = !1
  };
}
const Ce = Ba({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), jt = /* @__PURE__ */ b({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(e, { emit: t }) {
    const o = e, n = t, { forwardRef: a, currentElement: s } = T(), l = k(
      () => {
        var h;
        return ((h = s.value) == null ? void 0 : h.ownerDocument) ?? globalThis.document;
      }
    ), i = k(() => Ce.layersRoot), d = k(() => s.value ? Array.from(i.value).indexOf(s.value) : -1), u = k(() => Ce.layersWithOutsidePointerEventsDisabled.size > 0), c = k(() => {
      const h = Array.from(i.value), [y] = [...Ce.layersWithOutsidePointerEventsDisabled].slice(-1), _ = h.indexOf(y);
      return d.value >= _;
    }), p = hi(async (h) => {
      const y = [...Ce.branches].some(
        (_) => _ == null ? void 0 : _.contains(h.target)
      );
      !c.value || y || (n("pointerDownOutside", h), n("interactOutside", h), await ee(), h.defaultPrevented || n("dismiss"));
    }, s), v = yi((h) => {
      [...Ce.branches].some(
        (y) => y == null ? void 0 : y.contains(h.target)
      ) || (n("focusOutside", h), n("interactOutside", h), h.defaultPrevented || n("dismiss"));
    }, s);
    gn("Escape", (h) => {
      d.value === i.value.size - 1 && (n("escapeKeyDown", h), h.defaultPrevented || n("dismiss"));
    });
    let m;
    return pe((h) => {
      s.value && (o.disableOutsidePointerEvents && (Ce.layersWithOutsidePointerEventsDisabled.size === 0 && (m = l.value.body.style.pointerEvents, l.value.body.style.pointerEvents = "none"), Ce.layersWithOutsidePointerEventsDisabled.add(s.value)), i.value.add(s.value), h(() => {
        o.disableOutsidePointerEvents && Ce.layersWithOutsidePointerEventsDisabled.size === 1 && (l.value.body.style.pointerEvents = m);
      }));
    }), pe((h) => {
      h(() => {
        s.value && (i.value.delete(s.value), Ce.layersWithOutsidePointerEventsDisabled.delete(s.value));
      });
    }), (h, y) => (f(), x(r(N), {
      ref: r(a),
      "as-child": h.asChild,
      as: h.as,
      "data-dismissable-layer": "",
      style: wt({
        pointerEvents: u.value ? c.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: r(v).onFocusCapture,
      onBlurCapture: r(v).onBlurCapture,
      onPointerdownCapture: r(p).onPointerDownCapture
    }, {
      default: g(() => [
        w(h.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
}), bi = /* @__PURE__ */ b({
  __name: "DismissableLayerBranch",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: o, currentElement: n } = T();
    return se(() => {
      Ce.branches.add(n.value);
    }), Ne(() => {
      Ce.branches.delete(n.value);
    }), (a, s) => (f(), x(r(N), E({ ref: r(o) }, t), {
      default: g(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Vo = "focusScope.autoFocusOnMount", Lo = "focusScope.autoFocusOnUnmount", oa = { bubbles: !1, cancelable: !0 };
function to(e, { select: t = !1 } = {}) {
  const o = document.activeElement;
  for (const n of e)
    if (He(n, { select: t }), document.activeElement !== o)
      return !0;
}
function wi(e) {
  const t = kn(e), o = na(t, e), n = na(t.reverse(), e);
  return [o, n];
}
function kn(e) {
  const t = [], o = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const a = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || a ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; o.nextNode(); ) t.push(o.currentNode);
  return t;
}
function na(e, t) {
  for (const o of e)
    if (!xi(o, { upTo: t }))
      return o;
}
function xi(e, { upTo: t }) {
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
function _i(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function He(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const o = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== o && _i(e) && t && e.select();
  }
}
const Ci = Cl(() => D([]));
function Bi() {
  const e = Ci();
  return {
    add(t) {
      const o = e.value[0];
      t !== o && (o == null || o.pause()), e.value = aa(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var o;
      e.value = aa(e.value, t), (o = e.value[0]) == null || o.resume();
    }
  };
}
function aa(e, t) {
  const o = [...e], n = o.indexOf(t);
  return n !== -1 && o.splice(n, 1), o;
}
function ki(e) {
  return e.filter((t) => t.tagName !== "A");
}
const yo = /* @__PURE__ */ b({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const o = e, n = t, { currentRef: a, currentElement: s } = T(), l = D(null), i = Bi(), d = Ba({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    pe((c) => {
      if (!Ee)
        return;
      const p = s.value;
      if (!o.trapped)
        return;
      function v(_) {
        if (d.paused || !p)
          return;
        const C = _.target;
        p.contains(C) ? l.value = C : He(l.value, { select: !0 });
      }
      function m(_) {
        if (d.paused || !p)
          return;
        const C = _.relatedTarget;
        C !== null && (p.contains(C) || He(l.value, { select: !0 }));
      }
      function h(_) {
        p.contains(l.value) || He(p);
      }
      document.addEventListener("focusin", v), document.addEventListener("focusout", m);
      const y = new MutationObserver(h);
      p && y.observe(p, { childList: !0, subtree: !0 }), c(() => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", m), y.disconnect();
      });
    }), pe(async (c) => {
      const p = s.value;
      if (await ee(), !p)
        return;
      i.add(d);
      const v = document.activeElement;
      if (!p.contains(v)) {
        const m = new CustomEvent(Vo, oa);
        p.addEventListener(Vo, (h) => n("mountAutoFocus", h)), p.dispatchEvent(m), m.defaultPrevented || (to(ki(kn(p)), {
          select: !0
        }), document.activeElement === v && He(p));
      }
      c(() => {
        p.removeEventListener(Vo, (y) => n("mountAutoFocus", y));
        const m = new CustomEvent(Lo, oa), h = (y) => {
          n("unmountAutoFocus", y);
        };
        p.addEventListener(Lo, h), p.dispatchEvent(m), setTimeout(() => {
          m.defaultPrevented || He(v ?? document.body, { select: !0 }), p.removeEventListener(Lo, h), i.remove(d);
        }, 0);
      });
    });
    function u(c) {
      if (!o.loop && !o.trapped || d.paused)
        return;
      const p = c.key === "Tab" && !c.altKey && !c.ctrlKey && !c.metaKey, v = document.activeElement;
      if (p && v) {
        const m = c.currentTarget, [h, y] = wi(m);
        h && y ? !c.shiftKey && v === y ? (c.preventDefault(), o.loop && He(h, { select: !0 })) : c.shiftKey && v === h && (c.preventDefault(), o.loop && He(y, { select: !0 })) : v === m && c.preventDefault();
      }
    }
    return (c, p) => (f(), x(r(N), {
      ref_key: "currentRef",
      ref: a,
      tabindex: "-1",
      "as-child": c.asChild,
      as: c.as,
      onKeydown: u
    }, {
      default: g(() => [
        w(c.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), Oi = "menu.itemSelect", Xo = ["Enter", " "], $i = ["ArrowDown", "PageUp", "Home"], rr = ["ArrowUp", "PageDown", "End"], Di = [...$i, ...rr], Ei = {
  ltr: [...Xo, "ArrowRight"],
  rtl: [...Xo, "ArrowLeft"]
}, Ai = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function On(e) {
  return e ? "open" : "closed";
}
function lo(e) {
  return e === "indeterminate";
}
function $n(e) {
  return lo(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Zo(e) {
  const t = document.activeElement;
  for (const o of e)
    if (o === t || (o.focus(), document.activeElement !== t))
      return;
}
function Si(e, t) {
  const { x: o, y: n } = e;
  let a = !1;
  for (let s = 0, l = t.length - 1; s < t.length; l = s++) {
    const i = t[s].x, d = t[s].y, u = t[l].x, c = t[l].y;
    d > n != c > n && o < (u - i) * (n - d) / (c - d) + i && (a = !a);
  }
  return a;
}
function Pi(e, t) {
  if (!t)
    return !1;
  const o = { x: e.clientX, y: e.clientY };
  return Si(o, t);
}
function It(e) {
  return e.pointerType === "mouse";
}
const Ti = "DialogTitle", Mi = "DialogContent";
function Ii({
  titleName: e = Ti,
  contentName: t = Mi,
  componentLink: o = "dialog.html#title",
  titleId: n,
  descriptionId: a,
  contentElement: s
}) {
  const l = `Warning: \`${t}\` requires a \`${e}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.radix-vue.com/components/${o}`, i = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${t}.`;
  se(() => {
    var d;
    document.getElementById(n) || console.warn(l);
    const u = (d = s.value) == null ? void 0 : d.getAttribute("aria-describedby");
    a && u && (document.getElementById(a) || console.warn(i));
  });
}
const sr = /* @__PURE__ */ b({
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
    const o = e, n = t, a = Se(), { forwardRef: s, currentElement: l } = T();
    return a.titleId || (a.titleId = fe(void 0, "radix-vue-dialog-title")), a.descriptionId || (a.descriptionId = fe(void 0, "radix-vue-dialog-description")), se(() => {
      a.contentElement = l, document.activeElement !== document.body && (a.triggerElement.value = document.activeElement);
    }), process.env.NODE_ENV !== "production" && Ii({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: a.titleId,
      descriptionId: a.descriptionId,
      contentElement: l
    }), (i, d) => (f(), x(r(yo), {
      "as-child": "",
      loop: "",
      trapped: o.trapFocus,
      onMountAutoFocus: d[5] || (d[5] = (u) => n("openAutoFocus", u)),
      onUnmountAutoFocus: d[6] || (d[6] = (u) => n("closeAutoFocus", u))
    }, {
      default: g(() => [
        I(r(jt), E({
          id: r(a).contentId,
          ref: r(s),
          as: i.as,
          "as-child": i.asChild,
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": r(a).descriptionId,
          "aria-labelledby": r(a).titleId,
          "data-state": r(On)(r(a).open.value)
        }, i.$attrs, {
          onDismiss: d[0] || (d[0] = (u) => r(a).onOpenChange(!1)),
          onEscapeKeyDown: d[1] || (d[1] = (u) => n("escapeKeyDown", u)),
          onFocusOutside: d[2] || (d[2] = (u) => n("focusOutside", u)),
          onInteractOutside: d[3] || (d[3] = (u) => n("interactOutside", u)),
          onPointerDownOutside: d[4] || (d[4] = (u) => n("pointerDownOutside", u))
        }), {
          default: g(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "as", "as-child", "disable-outside-pointer-events", "aria-describedby", "aria-labelledby", "data-state"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
}), Ri = /* @__PURE__ */ b({
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
    const o = e, n = t, a = Se(), s = Ze(n), { forwardRef: l, currentElement: i } = T();
    return Nt(i), (d, u) => (f(), x(sr, E({ ...o, ...r(s) }, {
      ref: r(l),
      "trap-focus": r(a).open.value,
      "disable-outside-pointer-events": !0,
      onCloseAutoFocus: u[0] || (u[0] = (c) => {
        var p;
        c.defaultPrevented || (c.preventDefault(), (p = r(a).triggerElement.value) == null || p.focus());
      }),
      onPointerDownOutside: u[1] || (u[1] = (c) => {
        const p = c.detail.originalEvent, v = p.button === 0 && p.ctrlKey === !0;
        (p.button === 2 || v) && c.preventDefault();
      }),
      onFocusOutside: u[2] || (u[2] = (c) => {
        c.preventDefault();
      })
    }), {
      default: g(() => [
        w(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), Fi = /* @__PURE__ */ b({
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
    const o = e, n = Ze(t);
    T();
    const a = Se(), s = D(!1), l = D(!1);
    return (i, d) => (f(), x(sr, E({ ...o, ...r(n) }, {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: d[0] || (d[0] = (u) => {
        var c;
        u.defaultPrevented || (s.value || (c = r(a).triggerElement.value) == null || c.focus(), u.preventDefault()), s.value = !1, l.value = !1;
      }),
      onInteractOutside: d[1] || (d[1] = (u) => {
        var c;
        u.defaultPrevented || (s.value = !0, u.detail.originalEvent.type === "pointerdown" && (l.value = !0));
        const p = u.target;
        (c = r(a).triggerElement.value) != null && c.contains(p) && u.preventDefault(), u.detail.originalEvent.type === "focusin" && l.value && u.preventDefault();
      })
    }), {
      default: g(() => [
        w(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), bo = /* @__PURE__ */ b({
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
    const o = e, n = t, a = Se(), s = Ze(n), { forwardRef: l } = T();
    return (i, d) => (f(), x(r(Ae), {
      present: i.forceMount || r(a).open.value
    }, {
      default: g(() => [
        r(a).modal.value ? (f(), x(Ri, E({
          key: 0,
          ref: r(l)
        }, { ...o, ...r(s), ...i.$attrs }), {
          default: g(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (f(), x(Fi, E({
          key: 1,
          ref: r(l)
        }, { ...o, ...r(s), ...i.$attrs }), {
          default: g(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Vi = /* @__PURE__ */ b({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Se();
    return zt(!0), T(), (o, n) => (f(), x(r(N), {
      as: o.as,
      "as-child": o.asChild,
      "data-state": r(t).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" }
    }, {
      default: g(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state"]));
  }
}), wo = /* @__PURE__ */ b({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Se(), { forwardRef: o } = T();
    return (n, a) => {
      var s;
      return (s = r(t)) != null && s.modal.value ? (f(), x(r(Ae), {
        key: 0,
        present: n.forceMount || r(t).open.value
      }, {
        default: g(() => [
          I(Vi, E(n.$attrs, {
            ref: r(o),
            as: n.as,
            "as-child": n.asChild
          }), {
            default: g(() => [
              w(n.$slots, "default")
            ]),
            _: 3
          }, 16, ["as", "as-child"])
        ]),
        _: 3
      }, 8, ["present"])) : re("", !0);
    };
  }
}), lt = /* @__PURE__ */ b({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    T();
    const o = Se();
    return (n, a) => (f(), x(r(N), E(t, {
      type: n.as === "button" ? "button" : void 0,
      onClick: a[0] || (a[0] = (s) => r(o).onOpenChange(!1))
    }), {
      default: g(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
}), Dn = /* @__PURE__ */ b({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e, o = Se();
    return T(), (n, a) => (f(), x(r(N), E(t, {
      id: r(o).titleId
    }), {
      default: g(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), En = /* @__PURE__ */ b({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    T();
    const o = Se();
    return (n, a) => (f(), x(r(N), E(t, {
      id: r(o).descriptionId
    }), {
      default: g(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Li = /* @__PURE__ */ b({
  __name: "AlertDialogRoot",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = X(e, t);
    return T(), (n, a) => (f(), x(r(_n), E(r(o), { modal: !0 }), {
      default: g(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), zi = /* @__PURE__ */ b({
  __name: "AlertDialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    return T(), (o, n) => (f(), x(r(Cn), W(U(t)), {
      default: g(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ni = /* @__PURE__ */ b({
  __name: "AlertDialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (o, n) => (f(), x(r(Kt), W(U(t)), {
      default: g(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Ki, ji] = J("AlertDialogContent"), Wi = /* @__PURE__ */ b({
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
    const o = e, n = Ze(t);
    T();
    const a = D();
    return ji({
      onCancelElementChange: (s) => {
        a.value = s;
      }
    }), (s, l) => (f(), x(r(bo), E({ ...o, ...r(n) }, {
      role: "alertdialog",
      onPointerDownOutside: l[0] || (l[0] = ve(() => {
      }, ["prevent"])),
      onInteractOutside: l[1] || (l[1] = ve(() => {
      }, ["prevent"])),
      onOpenAutoFocus: l[2] || (l[2] = () => {
        ee(() => {
          var i;
          (i = a.value) == null || i.focus({
            preventScroll: !0
          });
        });
      })
    }), {
      default: g(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hi = /* @__PURE__ */ b({
  __name: "AlertDialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return T(), (o, n) => (f(), x(r(wo), W(U(t)), {
      default: g(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ui = /* @__PURE__ */ b({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, o = Ki(), { forwardRef: n, currentElement: a } = T();
    return se(() => {
      o.onCancelElementChange(a.value);
    }), (s, l) => (f(), x(r(lt), E(t, { ref: r(n) }), {
      default: g(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Gi = /* @__PURE__ */ b({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e;
    return T(), (o, n) => (f(), x(r(Dn), W(U(t)), {
      default: g(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), qi = /* @__PURE__ */ b({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    return T(), (o, n) => (f(), x(r(En), W(U(t)), {
      default: g(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Yi = /* @__PURE__ */ b({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    return T(), (o, n) => (f(), x(r(lt), W(U(t)), {
      default: g(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [lr, Xi] = J("AvatarRoot"), Zi = /* @__PURE__ */ b({
  __name: "AvatarRoot",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return T(), Xi({
      imageLoadingStatus: D("loading")
    }), (t, o) => (f(), x(r(N), {
      "as-child": t.asChild,
      as: t.as
    }, {
      default: g(() => [
        w(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
});
function Qi(e) {
  const t = D("idle"), o = D(!1), n = (a) => () => {
    o.value && (t.value = a);
  };
  return se(() => {
    o.value = !0, Q(e, (a) => {
      if (!a)
        t.value = "error";
      else {
        const s = new window.Image();
        t.value = "loading", s.onload = n("loaded"), s.onerror = n("error"), s.src = a;
      }
    }, { immediate: !0 });
  }), Ne(() => {
    o.value = !1;
  }), t;
}
const Ji = /* @__PURE__ */ b({
  __name: "AvatarImage",
  props: {
    src: {},
    asChild: { type: Boolean },
    as: { default: "img" }
  },
  emits: ["loadingStatusChange"],
  setup(e, { emit: t }) {
    const o = e, n = t, { src: a } = ie(o);
    T();
    const s = lr(), l = Qi(a);
    return Q(
      l,
      (i) => {
        n("loadingStatusChange", i), i !== "idle" && (s.imageLoadingStatus.value = i);
      },
      { immediate: !0 }
    ), (i, d) => bt((f(), x(r(N), {
      role: "img",
      "as-child": i.asChild,
      as: i.as,
      src: r(a)
    }, {
      default: g(() => [
        w(i.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "src"])), [
      [on, r(l) === "loaded"]
    ]);
  }
}), ed = /* @__PURE__ */ b({
  __name: "AvatarFallback",
  props: {
    delayMs: { default: 0 },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, o = lr();
    T();
    const n = D(!1);
    let a;
    return Q(o.imageLoadingStatus, (s) => {
      s === "loading" && (n.value = !1, t.delayMs ? a = setTimeout(() => {
        n.value = !0, clearTimeout(a);
      }, t.delayMs) : n.value = !0);
    }, { immediate: !0 }), (s, l) => n.value && r(o).imageLoadingStatus.value !== "loaded" ? (f(), x(r(N), {
      key: 0,
      "as-child": s.asChild,
      as: s.as
    }, {
      default: g(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"])) : re("", !0);
  }
}), [ir, td] = J("PopperRoot"), Wt = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = D();
    return td({
      anchor: t,
      onAnchorChange: (o) => t.value = o
    }), (o, n) => w(o.$slots, "default");
  }
}), xo = /* @__PURE__ */ b({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: o, currentElement: n } = T(), a = ir();
    return pe(() => {
      a.onAnchorChange(t.element ?? n.value);
    }), (s, l) => (f(), x(r(N), {
      ref: r(o),
      as: s.as,
      "as-child": s.asChild
    }, {
      default: g(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function od(e) {
  return e !== null;
}
function nd(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var o, n, a;
      const { placement: s, rects: l, middlewareData: i } = t, d = ((o = i.arrow) == null ? void 0 : o.centerOffset) !== 0, u = d ? 0 : e.arrowWidth, c = d ? 0 : e.arrowHeight, [p, v] = Qo(s), m = { start: "0%", center: "50%", end: "100%" }[v], h = (((n = i.arrow) == null ? void 0 : n.x) ?? 0) + u / 2, y = (((a = i.arrow) == null ? void 0 : a.y) ?? 0) + c / 2;
      let _ = "", C = "";
      return p === "bottom" ? (_ = d ? m : `${h}px`, C = `${-c}px`) : p === "top" ? (_ = d ? m : `${h}px`, C = `${l.floating.height + c}px`) : p === "right" ? (_ = `${-c}px`, C = d ? m : `${y}px`) : p === "left" && (_ = `${l.floating.width + c}px`, C = d ? m : `${y}px`), { data: { x: _, y: C } };
    }
  };
}
function Qo(e) {
  const [t, o = "center"] = e.split("-");
  return [t, o];
}
const dr = {
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
}, [Wf, ad] = J("PopperContent"), Rt = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ Ea({
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
    ...dr
  }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const o = e, n = t, a = ir(), { forwardRef: s, currentElement: l } = T(), i = D(), d = D(), { width: u, height: c } = er(d), p = k(
      () => o.side + (o.align !== "center" ? `-${o.align}` : "")
    ), v = k(() => typeof o.collisionPadding == "number" ? o.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...o.collisionPadding }), m = k(() => Array.isArray(o.collisionBoundary) ? o.collisionBoundary : [o.collisionBoundary]), h = k(() => ({
      padding: v.value,
      boundary: m.value.filter(od),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: m.value.length > 0
    })), y = _l(() => [
      ul({
        mainAxis: o.sideOffset + c.value,
        alignmentAxis: o.alignOffset
      }),
      o.prioritizePosition && o.avoidCollisions && Qn({
        ...h.value
      }),
      o.avoidCollisions && cl({
        mainAxis: !0,
        crossAxis: !!o.prioritizePosition,
        limiter: o.sticky === "partial" ? vl() : void 0,
        ...h.value
      }),
      !o.prioritizePosition && o.avoidCollisions && Qn({
        ...h.value
      }),
      pl({
        ...h.value,
        apply: ({ elements: $, rects: L, availableWidth: M, availableHeight: Z }) => {
          const { width: H, height: K } = L.reference, G = $.floating.style;
          G.setProperty(
            "--radix-popper-available-width",
            `${M}px`
          ), G.setProperty(
            "--radix-popper-available-height",
            `${Z}px`
          ), G.setProperty(
            "--radix-popper-anchor-width",
            `${H}px`
          ), G.setProperty(
            "--radix-popper-anchor-height",
            `${K}px`
          );
        }
      }),
      d.value && yl({ element: d.value, padding: o.arrowPadding }),
      nd({
        arrowWidth: u.value,
        arrowHeight: c.value
      }),
      o.hideWhenDetached && fl({ strategy: "referenceHidden", ...h.value })
    ]), { floatingStyles: _, placement: C, isPositioned: O, middlewareData: B } = bl(
      a.anchor,
      i,
      {
        strategy: "fixed",
        placement: p,
        whileElementsMounted: (...$) => dl(...$, {
          animationFrame: o.updatePositionStrategy === "always"
        }),
        middleware: y
      }
    ), P = k(
      () => Qo(C.value)[0]
    ), A = k(
      () => Qo(C.value)[1]
    );
    is(() => {
      O.value && n("placed");
    });
    const R = k(
      () => {
        var $;
        return (($ = B.value.arrow) == null ? void 0 : $.centerOffset) !== 0;
      }
    ), S = D("");
    pe(() => {
      l.value && (S.value = window.getComputedStyle(l.value).zIndex);
    });
    const F = k(() => {
      var $;
      return (($ = B.value.arrow) == null ? void 0 : $.x) ?? 0;
    }), z = k(() => {
      var $;
      return (($ = B.value.arrow) == null ? void 0 : $.y) ?? 0;
    });
    return ad({
      placedSide: P,
      onArrowChange: ($) => d.value = $,
      arrowX: F,
      arrowY: z,
      shouldHideArrow: R
    }), ($, L) => {
      var M, Z, H;
      return f(), j("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-radix-popper-content-wrapper": "",
        style: wt({
          ...r(_),
          transform: r(O) ? r(_).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: S.value,
          "--radix-popper-transform-origin": [
            (M = r(B).transformOrigin) == null ? void 0 : M.x,
            (Z = r(B).transformOrigin) == null ? void 0 : Z.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((H = r(B).hide) == null ? void 0 : H.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        I(r(N), E({ ref: r(s) }, $.$attrs, {
          "as-child": o.asChild,
          as: $.as,
          "data-side": P.value,
          "data-align": A.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: r(O) ? void 0 : "none"
          }
        }), {
          default: g(() => [
            w($.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
}), _o = /* @__PURE__ */ b({
  __name: "VisuallyHidden",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return T(), (t, o) => (f(), x(r(N), {
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
      default: g(() => [
        w(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), rd = /* @__PURE__ */ b({
  __name: "VisuallyHiddenInput",
  props: {
    name: {},
    value: {},
    required: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, o = k(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" ? [{ name: t.name, value: t.value }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((n, a) => typeof n == "object" ? Object.entries(n).map(([s, l]) => ({ name: `[${a}][${t.name}][${s}]`, value: l })) : { name: `[${t.name}][${a}]`, value: n }) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([n, a]) => ({ name: `[${t.name}][${n}]`, value: a })) : []);
    return (n, a) => (f(!0), j(ce, null, nt(o.value, (s) => (f(), x(_o, {
      key: s.name,
      as: "input",
      type: "hidden",
      hidden: "",
      readonly: "",
      name: s.name,
      value: s.value,
      required: n.required,
      disabled: n.disabled
    }, null, 8, ["name", "value", "required", "disabled"]))), 128));
  }
}), sd = "data-radix-vue-collection-item", [An, ld] = J("CollectionProvider");
function Sn(e = sd) {
  const t = D(/* @__PURE__ */ new Map()), o = D(), n = ld({
    collectionRef: o,
    itemMap: t,
    attrName: e
  }), { getItems: a } = ur(n), s = k(() => Array.from(n.itemMap.value.values())), l = k(() => n.itemMap.value.size);
  return { getItems: a, reactiveItems: s, itemMapSize: l };
}
const Pn = b({
  name: "CollectionSlot",
  setup(e, { slots: t }) {
    const o = An(), { primitiveElement: n, currentElement: a } = tr();
    return Q(a, () => {
      o.collectionRef.value = a.value;
    }), () => ot(wn, { ref: n }, t);
  }
}), Tn = b({
  name: "CollectionItem",
  inheritAttrs: !1,
  props: {
    value: {
      // It accepts any value
      validator: () => !0
    }
  },
  setup(e, { slots: t, attrs: o }) {
    const n = An(), { primitiveElement: a, currentElement: s } = tr();
    return pe((l) => {
      if (s.value) {
        const i = Jr(s.value);
        n.itemMap.value.set(i, { ref: s.value, value: e.value }), l(() => n.itemMap.value.delete(i));
      }
    }), () => ot(wn, { ...o, [n.attrName]: "", ref: a }, t);
  }
});
function ur(e) {
  const t = e ?? An();
  return { getItems: () => {
    const o = t.collectionRef.value;
    if (!o)
      return [];
    const n = Array.from(o.querySelectorAll(`[${t.attrName}]`));
    return Array.from(t.itemMap.value.values()).sort(
      (a, s) => n.indexOf(a.ref) - n.indexOf(s.ref)
    );
  } };
}
const [Bt, id] = J("ComboboxRoot"), dd = /* @__PURE__ */ b({
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
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "update:open", "update:searchTerm", "update:selectedValue"],
  setup(e, { emit: t }) {
    const o = e, n = t, { multiple: a, disabled: s, dir: l } = ie(o), i = st(l), d = le(o, "searchTerm", n, {
      // @ts-expect-error ignore the type error here
      defaultValue: "",
      passive: o.searchTerm === void 0
    }), u = le(o, "modelValue", n, {
      // @ts-expect-error ignore the type error here
      defaultValue: o.defaultValue ?? a.value ? [] : void 0,
      passive: o.modelValue === void 0,
      deep: !0
    }), c = le(o, "open", n, {
      defaultValue: o.defaultOpen,
      passive: o.open === void 0
    }), p = le(o, "selectedValue", n, {
      defaultValue: void 0,
      passive: o.selectedValue === void 0
    });
    async function v(K) {
      var G, te;
      c.value = K, await ee(), K ? (u.value && (Array.isArray(u.value) && a.value ? p.value = (G = B().find((de) => {
        var ue, Pe;
        return ((Pe = (ue = de.ref) == null ? void 0 : ue.dataset) == null ? void 0 : Pe.state) === "checked";
      })) == null ? void 0 : G.value : p.value = u.value), await ee(), (te = y.value) == null || te.focus(), Z()) : (h.value = !1, o.resetSearchTermOnBlur && F());
    }
    function m(K) {
      if (Array.isArray(u.value) && a.value) {
        const G = u.value.findIndex((de) => tt(de, K)), te = [...u.value];
        G === -1 ? te.push(K) : te.splice(G, 1), u.value = te;
      } else
        u.value = K, v(!1);
    }
    const h = D(!1), y = D(), _ = D(), { forwardRef: C, currentElement: O } = T(), { getItems: B, reactiveItems: P, itemMapSize: A } = Sn("data-radix-vue-combobox-item"), R = D([]);
    Q(() => A.value, () => {
      R.value = B().map((K) => K.value);
    }, {
      immediate: !0,
      flush: "post"
    });
    const S = k(() => {
      if (h.value) {
        if (o.filterFunction)
          return o.filterFunction(R.value, d.value);
        const K = R.value.filter((G) => typeof G == "string");
        if (K.length)
          return K.filter((G) => {
            var te;
            return G.toLowerCase().includes((te = d.value) == null ? void 0 : te.toLowerCase());
          });
      }
      return R.value;
    });
    function F() {
      !a.value && u.value && !Array.isArray(u.value) ? o.displayValue ? d.value = o.displayValue(u.value) : typeof u.value != "object" ? d.value = u.value.toString() : d.value = "" : d.value = "";
    }
    const z = k(() => S.value.findIndex((K) => tt(K, p.value))), $ = k(() => {
      var K;
      return (K = P.value.find((G) => tt(G.value, p.value))) == null ? void 0 : K.ref;
    }), L = k(() => JSON.stringify(u.value));
    Q(L, async () => {
      await ee(), await ee(), F();
    }, {
      // If searchTerm is provided with value during initialization, we don't reset it immediately
      immediate: !o.searchTerm
    }), Q(() => [S.value.length, d.value.length], async ([K, G], [te, de]) => {
      await ee(), await ee(), K && (de > G || z.value === -1) && (p.value = S.value[0]);
    });
    const M = go(O);
    function Z() {
      var K;
      $.value instanceof Element && ((K = $.value) == null || K.scrollIntoView({ block: "nearest" }));
    }
    function H() {
      $.value instanceof Element && $.value.focus && $.value.focus();
    }
    return id({
      searchTerm: d,
      modelValue: u,
      // @ts-expect-error ignoring
      onValueChange: m,
      isUserInputted: h,
      multiple: a,
      disabled: s,
      open: c,
      onOpenChange: v,
      filteredOptions: S,
      contentId: "",
      inputElement: y,
      selectedElement: $,
      onInputElementChange: (K) => y.value = K,
      onInputNavigation: async (K) => {
        const G = z.value;
        G === 0 && K === "up" || G === S.value.length - 1 && K === "down" || (G === -1 && S.value.length || K === "home" ? p.value = S.value[0] : K === "end" ? p.value = S.value[S.value.length - 1] : p.value = S.value[K === "up" ? G - 1 : G + 1], await ee(), Z(), H(), ee(() => {
          var te;
          return (te = y.value) == null ? void 0 : te.focus({ preventScroll: !0 });
        }));
      },
      onInputEnter: async (K) => {
        var G;
        S.value.length && p.value && $.value instanceof Element && (K.preventDefault(), K.stopPropagation(), (G = $.value) == null || G.click());
      },
      selectedValue: p,
      onSelectedValueChange: (K) => p.value = K,
      parentElement: O,
      contentElement: _,
      onContentElementChange: (K) => _.value = K
    }), (K, G) => (f(), x(r(Wt), null, {
      default: g(() => [
        I(r(N), E({
          ref: r(C),
          style: {
            pointerEvents: r(c) ? "auto" : void 0
          },
          as: K.as,
          "as-child": K.asChild,
          dir: r(i)
        }, K.$attrs), {
          default: g(() => [
            w(K.$slots, "default", {
              open: r(c),
              modelValue: r(u)
            }),
            r(M) && o.name ? (f(), x(r(rd), {
              key: 0,
              name: o.name,
              value: r(u)
            }, null, 8, ["name", "value"])) : re("", !0)
          ]),
          _: 3
        }, 16, ["style", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), ud = /* @__PURE__ */ b({
  __name: "ComboboxInput",
  props: {
    type: { default: "text" },
    disabled: { type: Boolean },
    autoFocus: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(e) {
    const t = e, o = Bt(), { forwardRef: n, currentElement: a } = T();
    se(() => {
      const c = a.value.nodeName === "INPUT" ? a.value : a.value.querySelector("input");
      c && (o.onInputElementChange(c), setTimeout(() => {
        t.autoFocus && (c == null || c.focus());
      }, 1));
    });
    const s = k(() => t.disabled || o.disabled.value || !1), l = D();
    es(() => {
      var c;
      return l.value = (c = o.selectedElement.value) == null ? void 0 : c.id;
    });
    function i(c) {
      o.open.value ? o.onInputNavigation(c.key === "ArrowUp" ? "up" : "down") : o.onOpenChange(!0);
    }
    function d(c) {
      o.open.value && o.onInputNavigation(c.key === "Home" ? "home" : "end");
    }
    function u(c) {
      var p;
      o.searchTerm.value = (p = c.target) == null ? void 0 : p.value, o.open.value || o.onOpenChange(!0), o.isUserInputted.value = !0;
    }
    return (c, p) => (f(), x(r(N), {
      ref: r(n),
      as: c.as,
      "as-child": c.asChild,
      type: c.type,
      disabled: s.value,
      value: r(o).searchTerm.value,
      "aria-expanded": r(o).open.value,
      "aria-controls": r(o).contentId,
      "aria-disabled": s.value ?? void 0,
      "aria-activedescendant": l.value,
      "aria-autocomplete": "list",
      role: "combobox",
      autocomplete: "false",
      onInput: u,
      onKeydown: [
        mt(ve(i, ["prevent"]), ["down", "up"]),
        mt(r(o).onInputEnter, ["enter"]),
        mt(ve(d, ["prevent"]), ["home", "end"])
      ]
    }, {
      default: g(() => [
        w(c.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "disabled", "value", "aria-expanded", "aria-controls", "aria-disabled", "aria-activedescendant", "onKeydown"]));
  }
}), [cr, cd] = J("ComboboxGroup"), pd = /* @__PURE__ */ b({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { currentRef: o, currentElement: n } = T(), a = fe(void 0, "radix-vue-combobox-group"), s = Bt(), l = D(!1);
    function i() {
      if (!n.value)
        return;
      const d = n.value.querySelectorAll("[data-radix-vue-combobox-item]:not([data-hidden])");
      l.value = !!d.length;
    }
    return Rl(n, () => {
      ee(() => {
        i();
      });
    }, { childList: !0 }), Q(() => s.searchTerm.value, () => {
      ee(() => {
        i();
      });
    }, { immediate: !0 }), cd({
      id: a
    }), (d, u) => bt((f(), x(r(N), E(t, {
      ref_key: "currentRef",
      ref: o,
      role: "group",
      "aria-labelledby": r(a)
    }), {
      default: g(() => [
        w(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"])), [
      [on, l.value]
    ]);
  }
}), fd = /* @__PURE__ */ b({
  __name: "ComboboxLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    T();
    const o = cr({ id: "" });
    return (n, a) => (f(), x(r(N), E(t, {
      id: r(o).id
    }), {
      default: g(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), [Hf, md] = J("ComboboxContent"), vd = /* @__PURE__ */ b({
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
    const o = e, n = t, { position: a } = ie(o), s = Bt();
    zt(o.bodyLock);
    const { forwardRef: l, currentElement: i } = T();
    Nt(s.parentElement);
    const d = k(() => o.position === "popper" ? o : {}), u = me(d.value);
    function c(v) {
      s.onSelectedValueChange("");
    }
    se(() => {
      s.onContentElementChange(i.value);
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
    return md({ position: a }), (v, m) => (f(), x(r(Pn), null, {
      default: g(() => [
        v.dismissable ? (f(), x(r(jt), {
          key: 0,
          "as-child": "",
          "disable-outside-pointer-events": v.disableOutsidePointerEvents,
          onDismiss: m[0] || (m[0] = (h) => r(s).onOpenChange(!1)),
          onFocusOutside: m[1] || (m[1] = (h) => {
            var y;
            (y = r(s).parentElement.value) != null && y.contains(h.target) && h.preventDefault(), n("focusOutside", h);
          }),
          onInteractOutside: m[2] || (m[2] = (h) => n("interactOutside", h)),
          onEscapeKeyDown: m[3] || (m[3] = (h) => n("escapeKeyDown", h)),
          onPointerDownOutside: m[4] || (m[4] = (h) => {
            var y;
            (y = r(s).parentElement.value) != null && y.contains(h.target) && h.preventDefault(), n("pointerDownOutside", h);
          })
        }, {
          default: g(() => [
            (f(), x(Oe(r(a) === "popper" ? r(Rt) : r(N)), E({ ...v.$attrs, ...r(u) }, {
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
                ...r(a) === "popper" ? p : {}
              },
              onPointerleave: c
            }), {
              default: g(() => [
                w(v.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "data-state", "style"]))
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])) : (f(), x(Oe(r(a) === "popper" ? r(Rt) : r(N)), E({ key: 1 }, { ...v.$attrs, ...d.value }, {
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
            ...r(a) === "popper" ? p : {}
          },
          onPointerleave: c
        }), {
          default: g(() => [
            w(v.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "data-state", "style"]))
      ]),
      _: 3
    }));
  }
}), gd = /* @__PURE__ */ b({
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
    const o = X(e, t), { forwardRef: n } = T(), a = Bt();
    return a.contentId || (a.contentId = fe(void 0, "radix-vue-combobox-content")), (s, l) => (f(), x(r(Ae), {
      present: s.forceMount || r(a).open.value
    }, {
      default: g(() => [
        I(vd, E({ ...r(o), ...s.$attrs }, { ref: r(n) }), {
          default: g(() => [
            w(s.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), hd = /* @__PURE__ */ b({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    T();
    const o = Bt(), n = k(() => o.filteredOptions.value.length === 0);
    return (a, s) => n.value ? (f(), x(r(N), W(E({ key: 0 }, t)), {
      default: g(() => [
        w(a.$slots, "default", {}, () => [
          ge("No options")
        ])
      ]),
      _: 3
    }, 16)) : re("", !0);
  }
});
function yd(e) {
  const t = vo({
    nonce: D()
  });
  return k(() => {
    var o;
    return (e == null ? void 0 : e.value) || ((o = t.nonce) == null ? void 0 : o.value);
  });
}
const [Uf, bd] = J("ComboboxItem"), wd = "combobox.select", xd = /* @__PURE__ */ b({
  __name: "ComboboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const o = e, n = t, { disabled: a } = ie(o), s = Bt();
    cr({ id: "", options: D([]) });
    const { forwardRef: l } = T(), i = k(
      () => {
        var y, _;
        return s.multiple.value && Array.isArray(s.modelValue.value) ? (y = s.modelValue.value) == null ? void 0 : y.some((C) => tt(C, o.value)) : tt((_ = s.modelValue) == null ? void 0 : _.value, o.value);
      }
    ), d = k(() => tt(s.selectedValue.value, o.value)), u = fe(void 0, "radix-vue-combobox-item"), c = fe(void 0, "radix-vue-combobox-option"), p = k(() => s.isUserInputted.value ? s.searchTerm.value === "" || !!s.filteredOptions.value.find((y) => tt(y, o.value)) : !0);
    async function v(y) {
      n("select", y), !(y != null && y.defaultPrevented) && !a.value && y && s.onValueChange(o.value);
    }
    function m(y) {
      if (!y)
        return;
      const _ = { originalEvent: y, value: o.value };
      vn(wd, v, _);
    }
    async function h(y) {
      await ee(), !y.defaultPrevented && s.onSelectedValueChange(o.value);
    }
    if (o.value === "")
      throw new Error(
        "A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder."
      );
    return bd({
      isSelected: i
    }), (y, _) => (f(), x(r(Tn), { value: y.value }, {
      default: g(() => [
        bt(I(r(N), {
          id: r(c),
          ref: r(l),
          role: "option",
          tabindex: "-1",
          "aria-labelledby": r(u),
          "data-highlighted": d.value ? "" : void 0,
          "aria-selected": i.value,
          "data-state": i.value ? "checked" : "unchecked",
          "aria-disabled": r(a) || void 0,
          "data-disabled": r(a) ? "" : void 0,
          as: y.as,
          "as-child": y.asChild,
          "data-hidden": p.value ? void 0 : !0,
          onClick: m,
          onPointermove: h
        }, {
          default: g(() => [
            w(y.$slots, "default", {}, () => [
              ge(ye(y.value), 1)
            ])
          ]),
          _: 3
        }, 8, ["id", "aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "as", "as-child", "data-hidden"]), [
          [on, p.value]
        ])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), _d = /* @__PURE__ */ b({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return T(), (o, n) => (f(), x(r(N), E(t, { "aria-hidden": "true" }), {
      default: g(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), pr = /* @__PURE__ */ b({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (f(), x(r(xo), W(U(t)), {
      default: g(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Cd() {
  const e = D(!1);
  return se(() => {
    so("keydown", () => {
      e.value = !0;
    }, { capture: !0, passive: !0 }), so(["pointerdown", "pointermove"], () => {
      e.value = !1;
    }, { capture: !0, passive: !0 });
  }), e;
}
const Bd = qa(Cd), [it, fr] = J(["MenuRoot", "MenuSub"], "MenuContext"), [Ht, kd] = J("MenuRoot"), Od = /* @__PURE__ */ b({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = e, n = t, { modal: a, dir: s } = ie(o), l = st(s), i = le(o, "open", n), d = D(), u = Bd();
    return fr({
      open: i,
      onOpenChange: (c) => {
        i.value = c;
      },
      content: d,
      onContentChange: (c) => {
        d.value = c;
      }
    }), kd({
      onClose: () => {
        i.value = !1;
      },
      isUsingKeyboardRef: u,
      dir: l,
      modal: a
    }), (c, p) => (f(), x(r(Wt), null, {
      default: g(() => [
        w(c.$slots, "default")
      ]),
      _: 3
    }));
  }
}), $d = "rovingFocusGroup.onEntryFocus", Dd = { bubbles: !1, cancelable: !0 };
function Ed(e, t = !1, o) {
  const n = document.activeElement;
  for (const a of e)
    if (a === n || (a.focus({ preventScroll: t }), document.activeElement !== n))
      return;
}
const [Gf, Ad] = J("RovingFocusGroup"), Sd = /* @__PURE__ */ b({
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
  setup(e, { expose: t, emit: o }) {
    const n = e, a = o, { loop: s, orientation: l, dir: i } = ie(n), d = st(i), u = le(n, "currentTabStopId", a, {
      defaultValue: n.defaultCurrentTabStopId,
      passive: n.currentTabStopId === void 0
    }), c = D(!1), p = D(!1), v = D(0), { getItems: m } = Sn();
    function h(_) {
      const C = !p.value;
      if (_.currentTarget && _.target === _.currentTarget && C && !c.value) {
        const O = new CustomEvent($d, Dd);
        if (_.currentTarget.dispatchEvent(O), a("entryFocus", O), !O.defaultPrevented) {
          const B = m().map((S) => S.ref).filter((S) => S.dataset.disabled !== ""), P = B.find((S) => S.getAttribute("data-active") === "true"), A = B.find(
            (S) => S.id === u.value
          ), R = [P, A, ...B].filter(
            Boolean
          );
          Ed(R, n.preventScrollOnEntryFocus);
        }
      }
      p.value = !1;
    }
    function y() {
      setTimeout(() => {
        p.value = !1;
      }, 1);
    }
    return t({
      getItems: m
    }), Ad({
      loop: s,
      dir: d,
      orientation: l,
      currentTabStopId: u,
      onItemFocus: (_) => {
        u.value = _;
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
    }), (_, C) => (f(), x(r(Pn), null, {
      default: g(() => [
        I(r(N), {
          tabindex: c.value || v.value === 0 ? -1 : 0,
          "data-orientation": r(l),
          as: _.as,
          "as-child": _.asChild,
          dir: r(d),
          style: { outline: "none" },
          onMousedown: C[0] || (C[0] = (O) => p.value = !0),
          onMouseup: y,
          onFocus: h,
          onBlur: C[1] || (C[1] = (O) => c.value = !1)
        }, {
          default: g(() => [
            w(_.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), [Mn, Pd] = J("MenuContent"), In = /* @__PURE__ */ b({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ Ea({
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
    ...dr
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(e, { emit: t }) {
    const o = e, n = t, a = it(), s = Ht(), { trapFocus: l, disableOutsidePointerEvents: i, loop: d } = ie(o);
    yn(), zt(i.value);
    const u = D(""), c = D(0), p = D(0), v = D(null), m = D("right"), h = D(0), y = D(null), { createCollection: _ } = Ct(), { forwardRef: C, currentElement: O } = T(), B = _(O);
    Q(O, ($) => {
      a.onContentChange($);
    });
    const { handleTypeaheadSearch: P } = bn(B);
    Ne(() => {
      window.clearTimeout(c.value);
    });
    function A($) {
      var L, M;
      return m.value === ((L = v.value) == null ? void 0 : L.side) && Pi($, (M = v.value) == null ? void 0 : M.area);
    }
    async function R($) {
      var L;
      n("openAutoFocus", $), !$.defaultPrevented && ($.preventDefault(), (L = O.value) == null || L.focus({
        preventScroll: !0
      }));
    }
    function S($) {
      if ($.defaultPrevented)
        return;
      const L = $.target.closest("[data-radix-menu-content]") === $.currentTarget, M = $.ctrlKey || $.altKey || $.metaKey, Z = $.key.length === 1, H = Za(
        $,
        document.activeElement,
        O.value,
        {
          loop: d.value,
          arrowKeyOptions: "vertical",
          dir: s == null ? void 0 : s.dir.value,
          focus: !0,
          attributeName: "[data-radix-vue-collection-item]:not([data-disabled])"
        }
      );
      if (H)
        return H == null ? void 0 : H.focus();
      if ($.code === "Space" || (L && ($.key === "Tab" && $.preventDefault(), !M && Z && P($.key)), $.target !== O.value) || !Di.includes($.key))
        return;
      $.preventDefault();
      const K = B.value;
      rr.includes($.key) && K.reverse(), Zo(K);
    }
    function F($) {
      var L, M;
      (M = (L = $ == null ? void 0 : $.currentTarget) == null ? void 0 : L.contains) != null && M.call(L, $.target) || (window.clearTimeout(c.value), u.value = "");
    }
    function z($) {
      var L;
      if (!It($))
        return;
      const M = $.target, Z = h.value !== $.clientX;
      if ((L = $ == null ? void 0 : $.currentTarget) != null && L.contains(M) && Z) {
        const H = $.clientX > h.value ? "right" : "left";
        m.value = H, h.value = $.clientX;
      }
    }
    return Pd({
      onItemEnter: ($) => !!A($),
      onItemLeave: ($) => {
        var L;
        A($) || ((L = O.value) == null || L.focus(), y.value = null);
      },
      onTriggerLeave: ($) => !!A($),
      searchRef: u,
      pointerGraceTimerRef: p,
      onPointerGraceIntentChange: ($) => {
        v.value = $;
      }
    }), ($, L) => (f(), x(r(yo), {
      "as-child": "",
      trapped: r(l),
      onMountAutoFocus: R,
      onUnmountAutoFocus: L[7] || (L[7] = (M) => n("closeAutoFocus", M))
    }, {
      default: g(() => [
        I(r(jt), {
          "as-child": "",
          "disable-outside-pointer-events": r(i),
          onEscapeKeyDown: L[2] || (L[2] = (M) => n("escapeKeyDown", M)),
          onPointerDownOutside: L[3] || (L[3] = (M) => n("pointerDownOutside", M)),
          onFocusOutside: L[4] || (L[4] = (M) => n("focusOutside", M)),
          onInteractOutside: L[5] || (L[5] = (M) => n("interactOutside", M)),
          onDismiss: L[6] || (L[6] = (M) => n("dismiss"))
        }, {
          default: g(() => [
            I(r(Sd), {
              "current-tab-stop-id": y.value,
              "onUpdate:currentTabStopId": L[0] || (L[0] = (M) => y.value = M),
              "as-child": "",
              orientation: "vertical",
              dir: r(s).dir.value,
              loop: r(d),
              onEntryFocus: L[1] || (L[1] = (M) => {
                n("entryFocus", M), r(s).isUsingKeyboardRef.value || M.preventDefault();
              })
            }, {
              default: g(() => [
                I(r(Rt), {
                  ref: r(C),
                  role: "menu",
                  as: $.as,
                  "as-child": $.asChild,
                  "aria-orientation": "vertical",
                  "data-radix-menu-content": "",
                  "data-state": r(On)(r(a).open.value),
                  dir: r(s).dir.value,
                  side: $.side,
                  "side-offset": $.sideOffset,
                  align: $.align,
                  "align-offset": $.alignOffset,
                  "avoid-collisions": $.avoidCollisions,
                  "collision-boundary": $.collisionBoundary,
                  "collision-padding": $.collisionPadding,
                  "arrow-padding": $.arrowPadding,
                  "prioritize-position": $.prioritizePosition,
                  sticky: $.sticky,
                  "hide-when-detached": $.hideWhenDetached,
                  onKeydown: S,
                  onBlur: F,
                  onPointermove: z
                }, {
                  default: g(() => [
                    w($.$slots, "default")
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
}), mr = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, o = Mn(), { forwardRef: n } = T(), a = D(!1);
    async function s(i) {
      if (!i.defaultPrevented && It(i)) {
        if (t.disabled)
          o.onItemLeave(i);
        else if (!o.onItemEnter(i)) {
          const d = i.currentTarget;
          d == null || d.focus({ preventScroll: !0 });
        }
      }
    }
    async function l(i) {
      await ee(), !i.defaultPrevented && It(i) && o.onItemLeave(i);
    }
    return (i, d) => (f(), x(r(Tn), null, {
      default: g(() => [
        I(r(N), E({
          ref: r(n),
          role: "menuitem",
          tabindex: "-1"
        }, i.$attrs, {
          as: i.as,
          "as-child": i.asChild,
          "data-radix-vue-collection-item": "",
          "aria-disabled": i.disabled || void 0,
          "data-disabled": i.disabled ? "" : void 0,
          "data-highlighted": a.value ? "" : void 0,
          onPointermove: s,
          onPointerleave: l,
          onFocus: d[0] || (d[0] = async (u) => {
            await ee(), !(u.defaultPrevented || i.disabled) && (a.value = !0);
          }),
          onBlur: d[1] || (d[1] = async (u) => {
            await ee(), !u.defaultPrevented && (a.value = !1);
          })
        }), {
          default: g(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "aria-disabled", "data-disabled", "data-highlighted"])
      ]),
      _: 3
    }));
  }
}), Rn = /* @__PURE__ */ b({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const o = e, n = t, { forwardRef: a, currentElement: s } = T(), l = Ht(), i = Mn(), d = D(!1);
    async function u() {
      const c = s.value;
      if (!o.disabled && c) {
        const p = new CustomEvent(Oi, {
          bubbles: !0,
          cancelable: !0
        });
        n("select", p), await ee(), p.defaultPrevented ? d.value = !1 : l.onClose();
      }
    }
    return (c, p) => (f(), x(mr, E(o, {
      ref: r(a),
      onClick: u,
      onPointerdown: p[0] || (p[0] = () => {
        d.value = !0;
      }),
      onPointerup: p[1] || (p[1] = async (v) => {
        var m;
        await ee(), !v.defaultPrevented && (d.value || (m = v.currentTarget) == null || m.click());
      }),
      onKeydown: p[2] || (p[2] = async (v) => {
        const m = r(i).searchRef.value !== "";
        c.disabled || m && v.key === " " || r(Xo).includes(v.key) && (v.currentTarget.click(), v.preventDefault());
      })
    }), {
      default: g(() => [
        w(c.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Td, vr] = J(
  ["MenuCheckboxItem", "MenuRadioItem"],
  "MenuItemIndicatorContext"
), Md = /* @__PURE__ */ b({
  __name: "MenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = Td({
      checked: D(!1)
    });
    return (o, n) => (f(), x(r(Ae), {
      present: o.forceMount || r(lo)(r(t).checked.value) || r(t).checked.value === !0
    }, {
      default: g(() => [
        I(r(N), {
          as: o.as,
          "as-child": o.asChild,
          "data-state": r($n)(r(t).checked.value)
        }, {
          default: g(() => [
            w(o.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child", "data-state"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Id = /* @__PURE__ */ b({
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
    const o = e, n = t, a = le(o, "checked", n);
    return vr({ checked: a }), (s, l) => (f(), x(Rn, E({ role: "menuitemcheckbox" }, o, {
      "aria-checked": r(lo)(r(a)) ? "mixed" : r(a),
      "data-state": r($n)(r(a)),
      onSelect: l[0] || (l[0] = async (i) => {
        n("select", i), r(lo)(r(a)) ? a.value = !0 : a.value = !r(a);
      })
    }), {
      default: g(() => [
        w(s.$slots, "default", { checked: r(a) })
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), Rd = /* @__PURE__ */ b({
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
    const o = e, n = t, a = X(o, n), s = it(), { forwardRef: l, currentElement: i } = T();
    return Nt(i), (d, u) => (f(), x(In, E(r(a), {
      ref: r(l),
      "trap-focus": r(s).open.value,
      "disable-outside-pointer-events": r(s).open.value,
      "disable-outside-scroll": !0,
      onDismiss: u[0] || (u[0] = (c) => r(s).onOpenChange(!1)),
      onFocusOutside: u[1] || (u[1] = ve((c) => n("focusOutside", c), ["prevent"]))
    }), {
      default: g(() => [
        w(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), Fd = /* @__PURE__ */ b({
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
    const o = X(e, t), n = it();
    return (a, s) => (f(), x(In, E(r(o), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      "disable-outside-scroll": !1,
      onDismiss: s[0] || (s[0] = (l) => r(n).onOpenChange(!1))
    }), {
      default: g(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Vd = /* @__PURE__ */ b({
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
    const o = X(e, t), n = it(), a = Ht();
    return (s, l) => (f(), x(r(Ae), {
      present: s.forceMount || r(n).open.value
    }, {
      default: g(() => [
        r(a).modal.value ? (f(), x(Rd, W(E({ key: 0 }, { ...s.$attrs, ...r(o) })), {
          default: g(() => [
            w(s.$slots, "default")
          ]),
          _: 3
        }, 16)) : (f(), x(Fd, W(E({ key: 1 }, { ...s.$attrs, ...r(o) })), {
          default: g(() => [
            w(s.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), gr = /* @__PURE__ */ b({
  __name: "MenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (f(), x(r(N), E({ role: "group" }, t), {
      default: g(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ld = /* @__PURE__ */ b({
  __name: "MenuLabel",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (o, n) => (f(), x(r(N), W(U(t)), {
      default: g(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), zd = /* @__PURE__ */ b({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (o, n) => (f(), x(r(Kt), W(U(t)), {
      default: g(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Nd, Kd] = J("MenuRadioGroup"), jd = /* @__PURE__ */ b({
  __name: "MenuRadioGroup",
  props: {
    modelValue: { default: "" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, n = le(o, "modelValue", t);
    return Kd({
      modelValue: n,
      onValueChange: (a) => {
        n.value = a;
      }
    }), (a, s) => (f(), x(gr, W(U(o)), {
      default: g(() => [
        w(a.$slots, "default", { modelValue: r(n) })
      ]),
      _: 3
    }, 16));
  }
}), Wd = /* @__PURE__ */ b({
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
    const o = e, n = t, { value: a } = ie(o), s = Nd(), l = k(
      () => s.modelValue.value === (a == null ? void 0 : a.value)
    );
    return vr({ checked: l }), (i, d) => (f(), x(Rn, E({ role: "menuitemradio" }, o, {
      "aria-checked": l.value,
      "data-state": r($n)(l.value),
      onSelect: d[0] || (d[0] = async (u) => {
        n("select", u), r(s).onValueChange(r(a));
      })
    }), {
      default: g(() => [
        w(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), Hd = /* @__PURE__ */ b({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (f(), x(r(N), E(t, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: g(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [hr, Ud] = J("MenuSub"), Gd = /* @__PURE__ */ b({
  __name: "MenuSub",
  props: {
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = e, n = le(o, "open", t, {
      defaultValue: !1,
      passive: o.open === void 0
    }), a = it(), s = D(), l = D();
    return pe((i) => {
      (a == null ? void 0 : a.open.value) === !1 && (n.value = !1), i(() => n.value = !1);
    }), fr({
      open: n,
      onOpenChange: (i) => {
        n.value = i;
      },
      content: l,
      onContentChange: (i) => {
        l.value = i;
      }
    }), Ud({
      triggerId: "",
      contentId: "",
      trigger: s,
      onTriggerChange: (i) => {
        s.value = i;
      }
    }), (i, d) => (f(), x(r(Wt), null, {
      default: g(() => [
        w(i.$slots, "default")
      ]),
      _: 3
    }));
  }
}), qd = /* @__PURE__ */ b({
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
    const o = X(e, t), n = it(), a = Ht(), s = hr(), { forwardRef: l, currentElement: i } = T();
    return s.contentId || (s.contentId = fe(void 0, "radix-vue-menu-sub-content")), (d, u) => (f(), x(r(Ae), {
      present: d.forceMount || r(n).open.value
    }, {
      default: g(() => [
        I(In, E(r(o), {
          id: r(s).contentId,
          ref: r(l),
          "aria-labelledby": r(s).triggerId,
          align: "start",
          side: r(a).dir.value === "rtl" ? "left" : "right",
          "disable-outside-pointer-events": !1,
          "disable-outside-scroll": !1,
          "trap-focus": !1,
          onOpenAutoFocus: u[0] || (u[0] = ve((c) => {
            var p;
            r(a).isUsingKeyboardRef.value && ((p = r(i)) == null || p.focus());
          }, ["prevent"])),
          onCloseAutoFocus: u[1] || (u[1] = ve(() => {
          }, ["prevent"])),
          onFocusOutside: u[2] || (u[2] = (c) => {
            c.defaultPrevented || c.target !== r(s).trigger.value && r(n).onOpenChange(!1);
          }),
          onEscapeKeyDown: u[3] || (u[3] = (c) => {
            r(a).onClose(), c.preventDefault();
          }),
          onKeydown: u[4] || (u[4] = (c) => {
            var p, v;
            const m = (p = c.currentTarget) == null ? void 0 : p.contains(c.target), h = r(Ai)[r(a).dir.value].includes(c.key);
            m && h && (r(n).onOpenChange(!1), (v = r(s).trigger.value) == null || v.focus(), c.preventDefault());
          })
        }), {
          default: g(() => [
            w(d.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-labelledby", "side"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Yd = /* @__PURE__ */ b({
  __name: "MenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, o = it(), n = Ht(), a = hr(), s = Mn(), l = D(null);
    a.triggerId || (a.triggerId = fe(void 0, "radix-vue-menu-sub-trigger"));
    function i() {
      l.value && window.clearTimeout(l.value), l.value = null;
    }
    Ne(() => {
      i();
    });
    function d(p) {
      !It(p) || s.onItemEnter(p) || !t.disabled && !o.open.value && !l.value && (s.onPointerGraceIntentChange(null), l.value = window.setTimeout(() => {
        o.onOpenChange(!0), i();
      }, 100));
    }
    async function u(p) {
      var v, m;
      if (!It(p))
        return;
      i();
      const h = (v = o.content.value) == null ? void 0 : v.getBoundingClientRect();
      if (h != null && h.width) {
        const y = (m = o.content.value) == null ? void 0 : m.dataset.side, _ = y === "right", C = _ ? -5 : 5, O = h[_ ? "left" : "right"], B = h[_ ? "right" : "left"];
        s.onPointerGraceIntentChange({
          area: [
            // Apply a bleed on clientX to ensure that our exit point is
            // consistently within polygon bounds
            { x: p.clientX + C, y: p.clientY },
            { x: O, y: h.top },
            { x: B, y: h.top },
            { x: B, y: h.bottom },
            { x: O, y: h.bottom }
          ],
          side: y
        }), window.clearTimeout(s.pointerGraceTimerRef.value), s.pointerGraceTimerRef.value = window.setTimeout(
          () => s.onPointerGraceIntentChange(null),
          300
        );
      } else {
        if (s.onTriggerLeave(p))
          return;
        s.onPointerGraceIntentChange(null);
      }
    }
    async function c(p) {
      var v;
      const m = s.searchRef.value !== "";
      t.disabled || m && p.key === " " || Ei[n.dir.value].includes(p.key) && (o.onOpenChange(!0), await ee(), (v = o.content.value) == null || v.focus(), p.preventDefault());
    }
    return (p, v) => (f(), x(pr, { "as-child": "" }, {
      default: g(() => [
        I(mr, E(t, {
          id: r(a).triggerId,
          ref: (m) => {
            var h;
            (h = r(a)) == null || h.onTriggerChange(m == null ? void 0 : m.$el);
          },
          "aria-haspopup": "menu",
          "aria-expanded": r(o).open.value,
          "aria-controls": r(a).contentId,
          "data-state": r(On)(r(o).open.value),
          onClick: v[0] || (v[0] = async (m) => {
            t.disabled || m.defaultPrevented || (m.currentTarget.focus(), r(o).open.value || r(o).onOpenChange(!0));
          }),
          onPointermove: d,
          onPointerleave: u,
          onKeydown: c
        }), {
          default: g(() => [
            w(p.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-expanded", "aria-controls", "data-state"])
      ]),
      _: 3
    }));
  }
}), [yr, Xd] = J("DropdownMenuRoot"), Zd = /* @__PURE__ */ b({
  __name: "DropdownMenuRoot",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = e, n = t;
    T();
    const a = le(o, "open", n, {
      defaultValue: o.defaultOpen,
      passive: o.open === void 0
    }), s = D(), { modal: l, dir: i } = ie(o), d = st(i);
    return Xd({
      open: a,
      onOpenChange: (u) => {
        a.value = u;
      },
      onOpenToggle: () => {
        a.value = !a.value;
      },
      triggerId: "",
      triggerElement: s,
      contentId: "",
      modal: l,
      dir: d
    }), (u, c) => (f(), x(r(Od), {
      open: r(a),
      "onUpdate:open": c[0] || (c[0] = (p) => Vt(a) ? a.value = p : null),
      dir: r(d),
      modal: r(l)
    }, {
      default: g(() => [
        w(u.$slots, "default", { open: r(a) })
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
}), Qd = /* @__PURE__ */ b({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, o = yr(), { forwardRef: n, currentElement: a } = T();
    return se(() => {
      o.triggerElement = a;
    }), o.triggerId || (o.triggerId = fe(void 0, "radix-vue-dropdown-menu-trigger")), (s, l) => (f(), x(r(pr), { "as-child": "" }, {
      default: g(() => [
        I(r(N), {
          id: r(o).triggerId,
          ref: r(n),
          type: s.as === "button" ? "button" : void 0,
          "as-child": t.asChild,
          as: s.as,
          "aria-haspopup": "menu",
          "aria-expanded": r(o).open.value,
          "aria-controls": r(o).open.value ? r(o).contentId : void 0,
          "data-disabled": s.disabled ? "" : void 0,
          disabled: s.disabled,
          "data-state": r(o).open.value ? "open" : "closed",
          onClick: l[0] || (l[0] = async (i) => {
            var d;
            !s.disabled && i.button === 0 && i.ctrlKey === !1 && ((d = r(o)) == null || d.onOpenToggle(), await ee(), r(o).open.value && i.preventDefault());
          }),
          onKeydown: l[1] || (l[1] = mt(
            (i) => {
              s.disabled || (["Enter", " "].includes(i.key) && r(o).onOpenToggle(), i.key === "ArrowDown" && r(o).onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
            },
            ["enter", "space", "arrow-down"]
          ))
        }, {
          default: g(() => [
            w(s.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as-child", "as", "aria-expanded", "aria-controls", "data-disabled", "disabled", "data-state"])
      ]),
      _: 3
    }));
  }
}), Jd = /* @__PURE__ */ b({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (o, n) => (f(), x(r(zd), W(U(t)), {
      default: g(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), eu = /* @__PURE__ */ b({
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
    const o = X(e, t);
    T();
    const n = yr(), a = D(!1);
    function s(l) {
      l.defaultPrevented || (a.value || setTimeout(() => {
        var i;
        (i = n.triggerElement.value) == null || i.focus();
      }, 0), a.value = !1, l.preventDefault());
    }
    return n.contentId || (n.contentId = fe(void 0, "radix-vue-dropdown-menu-content")), (l, i) => {
      var d;
      return f(), x(r(Vd), E(r(o), {
        id: r(n).contentId,
        "aria-labelledby": (d = r(n)) == null ? void 0 : d.triggerId,
        style: {
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        },
        onCloseAutoFocus: s,
        onInteractOutside: i[0] || (i[0] = (u) => {
          var c;
          if (u.defaultPrevented) return;
          const p = u.detail.originalEvent, v = p.button === 0 && p.ctrlKey === !0, m = p.button === 2 || v;
          (!r(n).modal.value || m) && (a.value = !0), (c = r(n).triggerElement.value) != null && c.contains(u.target) && u.preventDefault();
        })
      }), {
        default: g(() => [
          w(l.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby"]);
    };
  }
}), tu = /* @__PURE__ */ b({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const o = e, n = Ze(t);
    return T(), (a, s) => (f(), x(r(Rn), W(U({ ...o, ...r(n) })), {
      default: g(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ou = /* @__PURE__ */ b({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return T(), (o, n) => (f(), x(r(gr), W(U(t)), {
      default: g(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), nu = /* @__PURE__ */ b({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return T(), (o, n) => (f(), x(r(Hd), W(U(t)), {
      default: g(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), au = /* @__PURE__ */ b({
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
    const o = e, n = Ze(t);
    return T(), (a, s) => (f(), x(r(Id), W(U({ ...o, ...r(n) })), {
      default: g(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), br = /* @__PURE__ */ b({
  __name: "DropdownMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return T(), (o, n) => (f(), x(r(Md), W(U(t)), {
      default: g(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ru = /* @__PURE__ */ b({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return T(), (o, n) => (f(), x(r(Ld), W(U(t)), {
      default: g(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), su = /* @__PURE__ */ b({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, n = Ze(t);
    return T(), (a, s) => (f(), x(r(jd), W(U({ ...o, ...r(n) })), {
      default: g(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), lu = /* @__PURE__ */ b({
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
    const o = X(e, t);
    return T(), (n, a) => (f(), x(r(Wd), W(U(r(o))), {
      default: g(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), iu = /* @__PURE__ */ b({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = e, n = le(o, "open", t, {
      passive: o.open === void 0,
      defaultValue: o.defaultOpen ?? !1
    });
    return T(), (a, s) => (f(), x(r(Gd), {
      open: r(n),
      "onUpdate:open": s[0] || (s[0] = (l) => Vt(n) ? n.value = l : null)
    }, {
      default: g(() => [
        w(a.$slots, "default", { open: r(n) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), du = /* @__PURE__ */ b({
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
    const o = X(e, t);
    return T(), (n, a) => (f(), x(r(qd), E(r(o), { style: {
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: g(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), uu = /* @__PURE__ */ b({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return T(), (o, n) => (f(), x(r(Yd), W(U(t)), {
      default: g(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), cu = /* @__PURE__ */ b({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(e) {
    const t = e;
    return T(), (o, n) => (f(), x(r(N), E(t, {
      onMousedown: n[0] || (n[0] = (a) => {
        !a.defaultPrevented && a.detail > 1 && a.preventDefault();
      })
    }), {
      default: g(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [kt, pu] = J("PopoverRoot"), fu = /* @__PURE__ */ b({
  __name: "PopoverRoot",
  props: {
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: !1 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = e, n = t, { modal: a } = ie(o), s = le(o, "open", n, {
      defaultValue: o.defaultOpen,
      passive: o.open === void 0
    }), l = D(), i = D(!1);
    return pu({
      contentId: "",
      modal: a,
      open: s,
      onOpenChange: (d) => {
        s.value = d;
      },
      onOpenToggle: () => {
        s.value = !s.value;
      },
      triggerElement: l,
      hasCustomAnchor: i
    }), (d, u) => (f(), x(r(Wt), null, {
      default: g(() => [
        w(d.$slots, "default", { open: r(s) })
      ]),
      _: 3
    }));
  }
}), mu = /* @__PURE__ */ b({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, o = kt(), { forwardRef: n, currentElement: a } = T();
    return se(() => {
      o.triggerElement.value = a.value;
    }), (s, l) => (f(), x(Oe(r(o).hasCustomAnchor.value ? r(N) : r(xo)), { "as-child": "" }, {
      default: g(() => [
        I(r(N), {
          ref: r(n),
          type: s.as === "button" ? "button" : void 0,
          "aria-haspopup": "dialog",
          "aria-expanded": r(o).open.value,
          "aria-controls": r(o).contentId,
          "data-state": r(o).open.value ? "open" : "closed",
          as: s.as,
          "as-child": t.asChild,
          onClick: r(o).onOpenToggle
        }, {
          default: g(() => [
            w(s.$slots, "default")
          ]),
          _: 3
        }, 8, ["type", "aria-expanded", "aria-controls", "data-state", "as", "as-child", "onClick"])
      ]),
      _: 3
    }));
  }
}), vu = /* @__PURE__ */ b({
  __name: "PopoverPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (o, n) => (f(), x(r(Kt), W(U(t)), {
      default: g(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wr = /* @__PURE__ */ b({
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
    const o = e, n = t, a = me(o), { forwardRef: s } = T(), l = kt();
    return yn(), (i, d) => (f(), x(r(yo), {
      "as-child": "",
      loop: "",
      trapped: i.trapFocus,
      onMountAutoFocus: d[5] || (d[5] = (u) => n("openAutoFocus", u)),
      onUnmountAutoFocus: d[6] || (d[6] = (u) => n("closeAutoFocus", u))
    }, {
      default: g(() => [
        I(r(jt), {
          "as-child": "",
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          onPointerDownOutside: d[0] || (d[0] = (u) => n("pointerDownOutside", u)),
          onInteractOutside: d[1] || (d[1] = (u) => n("interactOutside", u)),
          onEscapeKeyDown: d[2] || (d[2] = (u) => n("escapeKeyDown", u)),
          onFocusOutside: d[3] || (d[3] = (u) => n("focusOutside", u)),
          onDismiss: d[4] || (d[4] = (u) => r(l).onOpenChange(!1))
        }, {
          default: g(() => [
            I(r(Rt), E(r(a), {
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
              default: g(() => [
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
}), gu = /* @__PURE__ */ b({
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
    const o = e, n = t, a = kt(), s = D(!1);
    zt(!0);
    const l = X(o, n), { forwardRef: i, currentElement: d } = T();
    return Nt(d), (u, c) => (f(), x(wr, E(r(l), {
      ref: r(i),
      "trap-focus": r(a).open.value,
      "disable-outside-pointer-events": "",
      onCloseAutoFocus: c[0] || (c[0] = ve(
        (p) => {
          var v;
          n("closeAutoFocus", p), s.value || (v = r(a).triggerElement.value) == null || v.focus();
        },
        ["prevent"]
      )),
      onPointerDownOutside: c[1] || (c[1] = (p) => {
        n("pointerDownOutside", p);
        const v = p.detail.originalEvent, m = v.button === 0 && v.ctrlKey === !0, h = v.button === 2 || m;
        s.value = h;
      }),
      onFocusOutside: c[2] || (c[2] = ve(() => {
      }, ["prevent"]))
    }), {
      default: g(() => [
        w(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), hu = /* @__PURE__ */ b({
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
    const o = e, n = t, a = kt(), s = D(!1), l = D(!1), i = X(o, n);
    return (d, u) => (f(), x(wr, E(r(i), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: u[0] || (u[0] = (c) => {
        var p;
        n("closeAutoFocus", c), c.defaultPrevented || (s.value || (p = r(a).triggerElement.value) == null || p.focus(), c.preventDefault()), s.value = !1, l.value = !1;
      }),
      onInteractOutside: u[1] || (u[1] = async (c) => {
        var p;
        n("interactOutside", c), c.defaultPrevented || (s.value = !0, c.detail.originalEvent.type === "pointerdown" && (l.value = !0));
        const v = c.target;
        (p = r(a).triggerElement.value) != null && p.contains(v) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && l.value && c.preventDefault();
      })
    }), {
      default: g(() => [
        w(d.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), yu = /* @__PURE__ */ b({
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
    const o = e, n = t, a = kt(), s = X(o, n), { forwardRef: l } = T();
    return a.contentId || (a.contentId = fe(void 0, "radix-vue-popover-content")), (i, d) => (f(), x(r(Ae), {
      present: i.forceMount || r(a).open.value
    }, {
      default: g(() => [
        r(a).modal.value ? (f(), x(gu, E({ key: 0 }, r(s), { ref: r(l) }), {
          default: g(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (f(), x(hu, E({ key: 1 }, r(s), { ref: r(l) }), {
          default: g(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), qf = /* @__PURE__ */ b({
  __name: "PopoverAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    T();
    const o = kt();
    return ka(() => {
      o.hasCustomAnchor.value = !0;
    }), Ne(() => {
      o.hasCustomAnchor.value = !1;
    }), (n, a) => (f(), x(r(xo), W(U(t)), {
      default: g(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ft = 100, [bu, wu] = J("ProgressRoot"), Fn = (e) => typeof e == "number";
function xu(e, t) {
  return gt(e) || Fn(e) && !Number.isNaN(e) && e <= t && e >= 0 ? e : (console.error(`Invalid prop \`value\` of value \`${e}\` supplied to \`ProgressRoot\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Ft} if no \`max\` prop is set)
  - \`null\`  or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`), null);
}
function _u(e) {
  return Fn(e) && !Number.isNaN(e) && e > 0 ? e : (console.error(
    `Invalid prop \`max\` of value \`${e}\` supplied to \`ProgressRoot\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Ft}\`.`
  ), Ft);
}
const Cu = /* @__PURE__ */ b({
  __name: "ProgressRoot",
  props: {
    modelValue: {},
    max: { default: Ft },
    getValueLabel: { type: Function, default: (e, t) => `${Math.round(e / t * Ft)}%` },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "update:max"],
  setup(e, { emit: t }) {
    const o = e, n = t;
    T();
    const a = le(o, "modelValue", n, {
      passive: o.modelValue === void 0
    }), s = le(o, "max", n, {
      passive: o.max === void 0
    });
    Q(
      () => a.value,
      async (i) => {
        const d = xu(i, o.max);
        d !== i && (await ee(), a.value = d);
      },
      { immediate: !0 }
    ), Q(
      () => o.max,
      (i) => {
        const d = _u(o.max);
        d !== i && (s.value = d);
      },
      { immediate: !0 }
    );
    const l = k(() => gt(a.value) ? "indeterminate" : a.value === s.value ? "complete" : "loading");
    return wu({
      modelValue: a,
      max: s,
      progressState: l
    }), (i, d) => (f(), x(r(N), {
      "as-child": i.asChild,
      as: i.as,
      "aria-valuemax": r(s),
      "aria-valuemin": 0,
      "aria-valuenow": Fn(r(a)) ? r(a) : void 0,
      "aria-valuetext": i.getValueLabel(r(a), r(s)),
      "aria-label": i.getValueLabel(r(a), r(s)),
      role: "progressbar",
      "data-state": l.value,
      "data-value": r(a) ?? void 0,
      "data-max": r(s)
    }, {
      default: g(() => [
        w(i.$slots, "default", { modelValue: r(a) })
      ]),
      _: 3
    }, 8, ["as-child", "as", "aria-valuemax", "aria-valuenow", "aria-valuetext", "aria-label", "data-state", "data-value", "data-max"]));
  }
}), Bu = /* @__PURE__ */ b({
  __name: "ProgressIndicator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, o = bu();
    return T(), (n, a) => {
      var s;
      return f(), x(r(N), E(t, {
        "data-state": r(o).progressState.value,
        "data-value": ((s = r(o).modelValue) == null ? void 0 : s.value) ?? void 0,
        "data-max": r(o).max.value
      }), {
        default: g(() => [
          w(n.$slots, "default")
        ]),
        _: 3
      }, 16, ["data-state", "data-value", "data-max"]);
    };
  }
}), ku = ["default-value"], Ou = /* @__PURE__ */ b({
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
    const t = e, { value: o } = ie(t), n = D();
    return (a, s) => (f(), x(r(_o), { "as-child": "" }, {
      default: g(() => [
        bt(oe("select", E({
          ref_key: "selectElement",
          ref: n
        }, t, {
          "onUpdate:modelValue": s[0] || (s[0] = (l) => Vt(o) ? o.value = l : null),
          "default-value": r(o)
        }), [
          w(a.$slots, "default")
        ], 16, ku), [
          [ns, r(o)]
        ])
      ]),
      _: 3
    }));
  }
}), $u = {
  key: 0,
  value: ""
}, [dt, xr] = J("SelectRoot"), [Du, Eu] = J("SelectRoot"), Au = /* @__PURE__ */ b({
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
    const o = e, n = t, a = le(o, "modelValue", n, {
      defaultValue: o.defaultValue,
      passive: o.modelValue === void 0
    }), s = le(o, "open", n, {
      defaultValue: o.defaultOpen,
      passive: o.open === void 0
    }), l = D(), i = D(), d = D({
      x: 0,
      y: 0
    }), u = D(!1), { required: c, disabled: p, dir: v } = ie(o), m = st(v);
    xr({
      triggerElement: l,
      onTriggerChange: (C) => {
        l.value = C;
      },
      valueElement: i,
      onValueElementChange: (C) => {
        i.value = C;
      },
      valueElementHasChildren: u,
      onValueElementHasChildrenChange: (C) => {
        u.value = C;
      },
      contentId: "",
      modelValue: a,
      onValueChange: (C) => {
        a.value = C;
      },
      open: s,
      required: c,
      onOpenChange: (C) => {
        s.value = C;
      },
      dir: m,
      triggerPointerDownPosRef: d,
      disabled: p
    });
    const h = go(l), y = D(/* @__PURE__ */ new Set()), _ = k(() => Array.from(y.value).map((C) => {
      var O;
      return (O = C.props) == null ? void 0 : O.value;
    }).join(";"));
    return Eu({
      onNativeOptionAdd: (C) => {
        y.value.add(C);
      },
      onNativeOptionRemove: (C) => {
        y.value.delete(C);
      }
    }), (C, O) => (f(), x(r(Wt), null, {
      default: g(() => [
        w(C.$slots, "default", {
          modelValue: r(a),
          open: r(s)
        }),
        r(h) ? (f(), x(Ou, E({ key: _.value }, C.$attrs, {
          "aria-hidden": "true",
          tabindex: "-1",
          required: r(c),
          name: C.name,
          autocomplete: C.autocomplete,
          disabled: r(p),
          value: r(a),
          onChange: O[0] || (O[0] = (B) => a.value = B.target.value)
        }), {
          default: g(() => [
            r(a) === void 0 ? (f(), j("option", $u)) : re("", !0),
            (f(!0), j(ce, null, nt(Array.from(y.value), (B) => (f(), x(Oe(B), E({ ref_for: !0 }, B.props, {
              key: B.key ?? ""
            }), null, 16))), 128))
          ]),
          _: 1
        }, 16, ["required", "name", "autocomplete", "disabled", "value"])) : re("", !0)
      ]),
      _: 3
    }));
  }
}), Su = [" ", "Enter", "ArrowUp", "ArrowDown"], Pu = [" ", "Enter"], Re = 10;
function _r(e) {
  return e === "" || gt(e);
}
const Tu = /* @__PURE__ */ b({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, o = dt(), n = k(() => {
      var m;
      return ((m = o.disabled) == null ? void 0 : m.value) || t.disabled;
    }), { forwardRef: a, currentElement: s } = T();
    o.contentId || (o.contentId = fe(void 0, "radix-vue-select-content")), se(() => {
      o.triggerElement = s;
    });
    const { injectCollection: l } = Ct(), i = l(), { search: d, handleTypeaheadSearch: u, resetTypeahead: c } = bn(i);
    function p() {
      n.value || (o.onOpenChange(!0), c());
    }
    function v(m) {
      p(), o.triggerPointerDownPosRef.value = {
        x: Math.round(m.pageX),
        y: Math.round(m.pageY)
      };
    }
    return (m, h) => (f(), x(r(xo), { "as-child": "" }, {
      default: g(() => {
        var y, _, C, O;
        return [
          I(r(N), {
            ref: r(a),
            role: "combobox",
            type: m.as === "button" ? "button" : void 0,
            "aria-controls": r(o).contentId,
            "aria-expanded": r(o).open.value || !1,
            "aria-required": (y = r(o).required) == null ? void 0 : y.value,
            "aria-autocomplete": "none",
            disabled: n.value,
            dir: (_ = r(o)) == null ? void 0 : _.dir.value,
            "data-state": (C = r(o)) != null && C.open.value ? "open" : "closed",
            "data-disabled": n.value ? "" : void 0,
            "data-placeholder": r(_r)((O = r(o).modelValue) == null ? void 0 : O.value) ? "" : void 0,
            "as-child": m.asChild,
            as: m.as,
            onClick: h[0] || (h[0] = (B) => {
              var P;
              (P = B == null ? void 0 : B.currentTarget) == null || P.focus();
            }),
            onPointerdown: h[1] || (h[1] = (B) => {
              if (B.pointerType === "touch")
                return B.preventDefault();
              const P = B.target;
              P.hasPointerCapture(B.pointerId) && P.releasePointerCapture(B.pointerId), B.button === 0 && B.ctrlKey === !1 && (v(B), B.preventDefault());
            }),
            onPointerup: h[2] || (h[2] = ve(
              (B) => {
                B.pointerType === "touch" && v(B);
              },
              ["prevent"]
            )),
            onKeydown: h[3] || (h[3] = (B) => {
              const P = r(d) !== "";
              !(B.ctrlKey || B.altKey || B.metaKey) && B.key.length === 1 && P && B.key === " " || (r(u)(B.key), r(Su).includes(B.key) && (p(), B.preventDefault()));
            })
          }, {
            default: g(() => [
              w(m.$slots, "default")
            ]),
            _: 3
          }, 8, ["type", "aria-controls", "aria-expanded", "aria-required", "disabled", "dir", "data-state", "data-disabled", "data-placeholder", "as-child", "as"])
        ];
      }),
      _: 3
    }));
  }
}), Mu = /* @__PURE__ */ b({
  __name: "SelectPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (o, n) => (f(), x(r(Kt), W(U(t)), {
      default: g(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Vn, Iu] = J("SelectItemAlignedPosition"), Ru = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(e, { emit: t }) {
    const o = e, n = t, { injectCollection: a } = Ct(), s = dt(), l = ut(), i = a(), d = D(!1), u = D(!0), c = D(), { forwardRef: p, currentElement: v } = T(), { viewport: m, selectedItem: h, selectedItemText: y, focusSelectedItem: _ } = l;
    function C() {
      if (s.triggerElement.value && s.valueElement.value && c.value && v.value && m != null && m.value && h != null && h.value && y != null && y.value) {
        const P = s.triggerElement.value.getBoundingClientRect(), A = v.value.getBoundingClientRect(), R = s.valueElement.value.getBoundingClientRect(), S = y.value.getBoundingClientRect();
        if (s.dir.value !== "rtl") {
          const Qe = S.left - A.left, Te = R.left - Qe, Et = P.left - Te, Je = P.width + Et, $o = Math.max(Je, A.width), Do = window.innerWidth - Re, Eo = ro(Te, Re, Do - $o);
          c.value.style.minWidth = `${Je}px`, c.value.style.left = `${Eo}px`;
        } else {
          const Qe = A.right - S.right, Te = window.innerWidth - R.right - Qe, Et = window.innerWidth - P.right - Te, Je = P.width + Et, $o = Math.max(Je, A.width), Do = window.innerWidth - Re, Eo = ro(
            Te,
            Re,
            Do - $o
          );
          c.value.style.minWidth = `${Je}px`, c.value.style.right = `${Eo}px`;
        }
        const F = i.value, z = window.innerHeight - Re * 2, $ = m.value.scrollHeight, L = window.getComputedStyle(v.value), M = Number.parseInt(
          L.borderTopWidth,
          10
        ), Z = Number.parseInt(L.paddingTop, 10), H = Number.parseInt(
          L.borderBottomWidth,
          10
        ), K = Number.parseInt(
          L.paddingBottom,
          10
        ), G = M + Z + $ + K + H, te = Math.min(
          h.value.offsetHeight * 5,
          G
        ), de = window.getComputedStyle(m.value), ue = Number.parseInt(de.paddingTop, 10), Pe = Number.parseInt(
          de.paddingBottom,
          10
        ), he = P.top + P.height / 2 - Re, Gr = z - he, Oo = h.value.offsetHeight / 2, qr = h.value.offsetTop + Oo, Gt = M + Z + qr, Yr = G - Gt;
        if (Gt <= he) {
          const Qe = h.value === F[F.length - 1];
          c.value.style.bottom = "0px";
          const Te = v.value.clientHeight - m.value.offsetTop - m.value.offsetHeight, Et = Math.max(
            Gr,
            Oo + (Qe ? Pe : 0) + Te + H
          ), Je = Gt + Et;
          c.value.style.height = `${Je}px`;
        } else {
          const Qe = h.value === F[0];
          c.value.style.top = "0px";
          const Te = Math.max(
            he,
            M + m.value.offsetTop + (Qe ? ue : 0) + Oo
          ) + Yr;
          c.value.style.height = `${Te}px`, m.value.scrollTop = Gt - he + m.value.offsetTop;
        }
        c.value.style.margin = `${Re}px 0`, c.value.style.minHeight = `${te}px`, c.value.style.maxHeight = `${z}px`, n("placed"), requestAnimationFrame(() => d.value = !0);
      }
    }
    const O = D("");
    se(async () => {
      await ee(), C(), v.value && (O.value = window.getComputedStyle(v.value).zIndex);
    });
    function B(P) {
      P && u.value === !0 && (C(), _ == null || _(), u.value = !1);
    }
    return Iu({
      contentWrapper: c,
      shouldExpandOnScrollRef: d,
      onScrollButtonChange: B
    }), (P, A) => (f(), j("div", {
      ref_key: "contentWrapperElement",
      ref: c,
      style: wt({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: O.value
      })
    }, [
      I(r(N), E({
        ref: r(p),
        style: {
          // When we get the height of the content, it includes borders. If we were to set
          // the height without having `boxSizing: 'border-box'` it would be too big.
          boxSizing: "border-box",
          // We need to ensure the content doesn't get taller than the wrapper
          maxHeight: "100%"
        }
      }, { ...P.$attrs, ...o }), {
        default: g(() => [
          w(P.$slots, "default")
        ]),
        _: 3
      }, 16)
    ], 4));
  }
}), Fu = /* @__PURE__ */ b({
  __name: "SelectPopperPosition",
  props: {
    side: {},
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: { default: Re },
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = me(e);
    return (o, n) => (f(), x(r(Rt), E(r(t), { style: {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-select-content-available-width": "var(--radix-popper-available-width)",
      "--radix-select-content-available-height": "var(--radix-popper-available-height)",
      "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: g(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ot = {
  onViewportChange: () => {
  },
  itemTextRefCallback: () => {
  },
  itemRefCallback: () => {
  }
}, [ut, Vu] = J("SelectContent"), Lu = /* @__PURE__ */ b({
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
    const o = e, n = t, a = dt();
    yn(), zt(o.bodyLock);
    const { createCollection: s } = Ct(), l = D();
    Nt(l);
    const i = s(l), { search: d, handleTypeaheadSearch: u } = bn(i), c = D(), p = D(), v = D(), m = D(!1), h = D(!1);
    function y() {
      p.value && l.value && Zo([p.value, l.value]);
    }
    Q(m, () => {
      y();
    });
    const { onOpenChange: _, triggerPointerDownPosRef: C } = a;
    pe((A) => {
      if (!l.value)
        return;
      let R = { x: 0, y: 0 };
      const S = (z) => {
        var $, L;
        R = {
          x: Math.abs(
            Math.round(z.pageX) - ((($ = C.value) == null ? void 0 : $.x) ?? 0)
          ),
          y: Math.abs(
            Math.round(z.pageY) - (((L = C.value) == null ? void 0 : L.y) ?? 0)
          )
        };
      }, F = (z) => {
        var $;
        z.pointerType !== "touch" && (R.x <= 10 && R.y <= 10 ? z.preventDefault() : ($ = l.value) != null && $.contains(z.target) || _(!1), document.removeEventListener("pointermove", S), C.value = null);
      };
      C.value !== null && (document.addEventListener("pointermove", S), document.addEventListener("pointerup", F, {
        capture: !0,
        once: !0
      })), A(() => {
        document.removeEventListener("pointermove", S), document.removeEventListener("pointerup", F, {
          capture: !0
        });
      });
    });
    function O(A) {
      const R = A.ctrlKey || A.altKey || A.metaKey;
      if (A.key === "Tab" && A.preventDefault(), !R && A.key.length === 1 && u(A.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(A.key)) {
        let S = i.value;
        if (["ArrowUp", "End"].includes(A.key) && (S = S.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(A.key)) {
          const F = A.target, z = S.indexOf(F);
          S = S.slice(z + 1);
        }
        setTimeout(() => Zo(S)), A.preventDefault();
      }
    }
    const B = k(() => o.position === "popper" ? o : {}), P = me(B.value);
    return Vu({
      content: l,
      viewport: c,
      onViewportChange: (A) => {
        c.value = A;
      },
      itemRefCallback: (A, R, S) => {
        var F, z;
        const $ = !h.value && !S;
        (((F = a.modelValue) == null ? void 0 : F.value) !== void 0 && ((z = a.modelValue) == null ? void 0 : z.value) === R || $) && (p.value = A, $ && (h.value = !0));
      },
      selectedItem: p,
      selectedItemText: v,
      onItemLeave: () => {
        var A;
        (A = l.value) == null || A.focus();
      },
      itemTextRefCallback: (A, R, S) => {
        var F, z;
        const $ = !h.value && !S;
        (((F = a.modelValue) == null ? void 0 : F.value) !== void 0 && ((z = a.modelValue) == null ? void 0 : z.value) === R || $) && (v.value = A);
      },
      focusSelectedItem: y,
      position: o.position,
      isPositioned: m,
      searchRef: d
    }), (A, R) => (f(), x(r(yo), {
      "as-child": "",
      onMountAutoFocus: R[6] || (R[6] = ve(() => {
      }, ["prevent"])),
      onUnmountAutoFocus: R[7] || (R[7] = (S) => {
        var F;
        n("closeAutoFocus", S), !S.defaultPrevented && ((F = r(a).triggerElement.value) == null || F.focus({ preventScroll: !0 }), S.preventDefault());
      })
    }, {
      default: g(() => [
        I(r(jt), {
          "as-child": "",
          "disable-outside-pointer-events": "",
          onFocusOutside: R[2] || (R[2] = ve(() => {
          }, ["prevent"])),
          onDismiss: R[3] || (R[3] = (S) => r(a).onOpenChange(!1)),
          onEscapeKeyDown: R[4] || (R[4] = (S) => n("escapeKeyDown", S)),
          onPointerDownOutside: R[5] || (R[5] = (S) => n("pointerDownOutside", S))
        }, {
          default: g(() => [
            (f(), x(Oe(
              A.position === "popper" ? Fu : Ru
            ), E({ ...A.$attrs, ...r(P) }, {
              id: r(a).contentId,
              ref: (S) => {
                l.value = r(xe)(S);
              },
              role: "listbox",
              "data-state": r(a).open.value ? "open" : "closed",
              dir: r(a).dir.value,
              style: {
                // flex layout so we can place the scroll buttons properly
                display: "flex",
                flexDirection: "column",
                // reset the outline by default as the content MAY get focused
                outline: "none"
              },
              onContextmenu: R[0] || (R[0] = ve(() => {
              }, ["prevent"])),
              onPlaced: R[1] || (R[1] = (S) => m.value = !0),
              onKeydown: O
            }), {
              default: g(() => [
                w(A.$slots, "default")
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
}), zu = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "SelectProvider",
  props: {
    context: {}
  },
  setup(e) {
    return xr(e.context), (t, o) => w(t.$slots, "default");
  }
}), Nu = { key: 1 }, Ku = /* @__PURE__ */ b({
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
    const o = e, n = X(o, t), a = dt(), s = D();
    se(() => {
      s.value = new DocumentFragment();
    });
    const l = D(), i = k(() => o.forceMount || a.open.value);
    return (d, u) => {
      var c;
      return i.value ? (f(), x(r(Ae), {
        key: 0,
        ref_key: "presenceRef",
        ref: l,
        present: !0
      }, {
        default: g(() => [
          I(Lu, W(U({ ...r(n), ...d.$attrs })), {
            default: g(() => [
              w(d.$slots, "default")
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 512)) : !((c = l.value) != null && c.present) && s.value ? (f(), j("div", Nu, [
        (f(), x(io, { to: s.value }, [
          I(zu, { context: r(a) }, {
            default: g(() => [
              w(d.$slots, "default")
            ]),
            _: 3
          }, 8, ["context"])
        ], 8, ["to"]))
      ])) : re("", !0);
    };
  }
}), ju = /* @__PURE__ */ b({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (f(), x(r(N), E({ "aria-hidden": "true" }, t), {
      default: g(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Cr, Wu] = J("SelectItem"), Hu = /* @__PURE__ */ b({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { disabled: o } = ie(t), n = dt(), a = ut(Ot), { forwardRef: s, currentElement: l } = T(), i = k(() => {
      var y;
      return ((y = n.modelValue) == null ? void 0 : y.value) === t.value;
    }), d = D(!1), u = D(t.textValue ?? ""), c = fe(void 0, "radix-vue-select-item-text");
    async function p(y) {
      await ee(), !(y != null && y.defaultPrevented) && (o.value || (n.onValueChange(t.value), n.onOpenChange(!1)));
    }
    async function v(y) {
      var _;
      await ee(), !y.defaultPrevented && (o.value ? (_ = a.onItemLeave) == null || _.call(a) : y.currentTarget.focus({ preventScroll: !0 }));
    }
    async function m(y) {
      var _;
      await ee(), !y.defaultPrevented && y.currentTarget === document.activeElement && ((_ = a.onItemLeave) == null || _.call(a));
    }
    async function h(y) {
      var _;
      await ee(), !(y.defaultPrevented || ((_ = a.searchRef) == null ? void 0 : _.value) !== "" && y.key === " ") && (Pu.includes(y.key) && p(), y.key === " " && y.preventDefault());
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
    }), Wu({
      value: t.value,
      disabled: o,
      textId: c,
      isSelected: i,
      onItemTextChange: (y) => {
        u.value = ((u.value || (y == null ? void 0 : y.textContent)) ?? "").trim();
      }
    }), (y, _) => (f(), x(r(N), {
      ref: r(s),
      role: "option",
      "data-radix-vue-collection-item": "",
      "aria-labelledby": r(c),
      "data-highlighted": d.value ? "" : void 0,
      "aria-selected": i.value,
      "data-state": i.value ? "checked" : "unchecked",
      "aria-disabled": r(o) || void 0,
      "data-disabled": r(o) ? "" : void 0,
      tabindex: r(o) ? void 0 : -1,
      as: y.as,
      "as-child": y.asChild,
      onFocus: _[0] || (_[0] = (C) => d.value = !0),
      onBlur: _[1] || (_[1] = (C) => d.value = !1),
      onPointerup: p,
      onPointerdown: _[2] || (_[2] = (C) => {
        C.currentTarget.focus({ preventScroll: !0 });
      }),
      onTouchend: _[3] || (_[3] = ve(() => {
      }, ["prevent", "stop"])),
      onPointermove: v,
      onPointerleave: m,
      onKeydown: h
    }, {
      default: g(() => [
        w(y.$slots, "default")
      ]),
      _: 3
    }, 8, ["aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "tabindex", "as", "as-child"]));
  }
}), Uu = /* @__PURE__ */ b({
  __name: "SelectItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, o = Cr();
    return (n, a) => r(o).isSelected.value ? (f(), x(r(N), E({
      key: 0,
      "aria-hidden": "true"
    }, t), {
      default: g(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16)) : re("", !0);
  }
}), [Gu, qu] = J("SelectGroup"), Yu = /* @__PURE__ */ b({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, o = fe(void 0, "radix-vue-select-group");
    return qu({ id: o }), (n, a) => (f(), x(r(N), E({ role: "group" }, t, { "aria-labelledby": r(o) }), {
      default: g(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), Xu = /* @__PURE__ */ b({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, o = Gu({ id: "" });
    return (n, a) => (f(), x(r(N), E(t, {
      id: r(o).id
    }), {
      default: g(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Br = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, o = dt(), n = ut(Ot), a = Du(), s = Cr(), { forwardRef: l, currentElement: i } = T(), d = k(() => {
      var u;
      return ot("option", {
        key: s.value,
        value: s.value,
        disabled: s.disabled.value,
        textContent: (u = i.value) == null ? void 0 : u.textContent
      });
    });
    return se(() => {
      i.value && (s.onItemTextChange(i.value), n.itemTextRefCallback(
        i.value,
        s.value,
        s.disabled.value
      ), a.onNativeOptionAdd(d.value));
    }), nn(() => {
      a.onNativeOptionRemove(d.value);
    }), (u, c) => (f(), j(ce, null, [
      I(r(N), E({
        id: r(s).textId,
        ref: r(l)
      }, { ...t, ...u.$attrs }), {
        default: g(() => [
          w(u.$slots, "default")
        ]),
        _: 3
      }, 16, ["id"]),
      r(s).isSelected.value && r(o).valueElement.value && !r(o).valueElementHasChildren.value ? (f(), x(io, {
        key: 0,
        to: r(o).valueElement.value
      }, [
        w(u.$slots, "default")
      ], 8, ["to"])) : re("", !0)
    ], 64));
  }
}), Zu = /* @__PURE__ */ b({
  __name: "SelectViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { nonce: o } = ie(t), n = yd(o), a = ut(Ot), s = a.position === "item-aligned" ? Vn() : void 0, { forwardRef: l, currentElement: i } = T();
    se(() => {
      a == null || a.onViewportChange(i.value);
    });
    const d = D(0);
    function u(c) {
      const p = c.currentTarget, { shouldExpandOnScrollRef: v, contentWrapper: m } = s ?? {};
      if (v != null && v.value && m != null && m.value) {
        const h = Math.abs(d.value - p.scrollTop);
        if (h > 0) {
          const y = window.innerHeight - Re * 2, _ = Number.parseFloat(
            m.value.style.minHeight
          ), C = Number.parseFloat(m.value.style.height), O = Math.max(_, C);
          if (O < y) {
            const B = O + h, P = Math.min(y, B), A = B - P;
            m.value.style.height = `${P}px`, m.value.style.bottom === "0px" && (p.scrollTop = A > 0 ? A : 0, m.value.style.justifyContent = "flex-end");
          }
        }
      }
      d.value = p.scrollTop;
    }
    return (c, p) => (f(), j(ce, null, [
      I(r(N), E({
        ref: r(l),
        "data-radix-select-viewport": "",
        role: "presentation"
      }, { ...c.$attrs, ...t }, {
        style: {
          // we use position: 'relative' here on the `viewport` so that when we call
          // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
          // (independent of the scrollUpButton).
          position: "relative",
          flex: 1,
          overflow: "auto"
        },
        onScroll: u
      }), {
        default: g(() => [
          w(c.$slots, "default")
        ]),
        _: 3
      }, 16),
      I(r(N), {
        as: "style",
        nonce: r(n)
      }, {
        default: g(() => [
          ge(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-radix-select-viewport]::-webkit-scrollbar { display: none; } ")
        ]),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
}), kr = /* @__PURE__ */ b({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(e, { emit: t }) {
    const o = t, { injectCollection: n } = Ct(), a = n(), s = ut(Ot), l = D(null);
    function i() {
      l.value !== null && (window.clearInterval(l.value), l.value = null);
    }
    pe(() => {
      const c = a.value.find(
        (p) => p === document.activeElement
      );
      c == null || c.scrollIntoView({ block: "nearest" });
    });
    function d() {
      l.value === null && (l.value = window.setInterval(() => {
        o("autoScroll");
      }, 50));
    }
    function u() {
      var c;
      (c = s.onItemLeave) == null || c.call(s), l.value === null && (l.value = window.setInterval(() => {
        o("autoScroll");
      }, 50));
    }
    return nn(() => i()), (c, p) => {
      var v;
      return f(), x(r(N), E({
        "aria-hidden": "true",
        style: {
          flexShrink: 0
        }
      }, (v = c.$parent) == null ? void 0 : v.$props, {
        onPointerdown: d,
        onPointermove: u,
        onPointerleave: p[0] || (p[0] = () => {
          i();
        })
      }), {
        default: g(() => [
          w(c.$slots, "default")
        ]),
        _: 3
      }, 16);
    };
  }
}), Qu = /* @__PURE__ */ b({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = ut(Ot), o = t.position === "item-aligned" ? Vn() : void 0, { forwardRef: n, currentElement: a } = T(), s = D(!1);
    return pe((l) => {
      var i, d;
      if ((i = t.viewport) != null && i.value && (d = t.isPositioned) != null && d.value) {
        let u = function() {
          s.value = c.scrollTop > 0;
        };
        const c = t.viewport.value;
        u(), c.addEventListener("scroll", u), l(() => c.removeEventListener("scroll", u));
      }
    }), Q(a, () => {
      a.value && (o == null || o.onScrollButtonChange(a.value));
    }), (l, i) => s.value ? (f(), x(kr, {
      key: 0,
      ref: r(n),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: d, selectedItem: u } = r(t);
        d != null && d.value && u != null && u.value && (d.value.scrollTop = d.value.scrollTop - u.value.offsetHeight);
      })
    }, {
      default: g(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 512)) : re("", !0);
  }
}), Ju = /* @__PURE__ */ b({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = ut(Ot), o = t.position === "item-aligned" ? Vn() : void 0, { forwardRef: n, currentElement: a } = T(), s = D(!1);
    return pe((l) => {
      var i, d;
      if ((i = t.viewport) != null && i.value && (d = t.isPositioned) != null && d.value) {
        let u = function() {
          const p = c.scrollHeight - c.clientHeight;
          s.value = Math.ceil(c.scrollTop) < p;
        };
        const c = t.viewport.value;
        u(), c.addEventListener("scroll", u), l(() => c.removeEventListener("scroll", u));
      }
    }), Q(a, () => {
      a.value && (o == null || o.onScrollButtonChange(a.value));
    }), (l, i) => s.value ? (f(), x(kr, {
      key: 0,
      ref: r(n),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: d, selectedItem: u } = r(t);
        d != null && d.value && u != null && u.value && (d.value.scrollTop = d.value.scrollTop + u.value.offsetHeight);
      })
    }, {
      default: g(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 512)) : re("", !0);
  }
}), ec = /* @__PURE__ */ b({
  __name: "SelectValue",
  props: {
    placeholder: { default: "" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const { forwardRef: t, currentElement: o } = T(), n = dt(), a = ts();
    return ka(() => {
      var s;
      const l = !!mo((s = a == null ? void 0 : a.default) == null ? void 0 : s.call(a)).length;
      n.onValueElementHasChildrenChange(l);
    }), se(() => {
      n.valueElement = o;
    }), (s, l) => (f(), x(r(N), {
      ref: r(t),
      as: s.as,
      "as-child": s.asChild,
      style: { pointerEvents: "none" }
    }, {
      default: g(() => {
        var i;
        return [
          r(_r)((i = r(n).modelValue) == null ? void 0 : i.value) ? (f(), j(ce, { key: 0 }, [
            ge(ye(s.placeholder), 1)
          ], 64)) : w(s.$slots, "default", { key: 1 })
        ];
      }),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), tc = /* @__PURE__ */ b({
  __name: "SelectIcon",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return (t, o) => (f(), x(r(N), {
      "aria-hidden": "true",
      as: t.as,
      "as-child": t.asChild
    }, {
      default: g(() => [
        w(t.$slots, "default", {}, () => [
          ge("▼")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function oc(e = [], t, o) {
  const n = [...e];
  return n[o] = t, n.sort((a, s) => a - s);
}
function Or(e, t, o) {
  const n = 100 / (o - t) * (e - t);
  return ro(n, 0, 100);
}
function nc(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
function ac(e, t) {
  if (e.length === 1)
    return 0;
  const o = e.map((a) => Math.abs(a - t)), n = Math.min(...o);
  return o.indexOf(n);
}
function rc(e, t, o) {
  const n = e / 2, a = Ln([0, 50], [0, n]);
  return (n - a(t) * o) * o;
}
function sc(e) {
  return e.slice(0, -1).map((t, o) => e[o + 1] - t);
}
function lc(e, t) {
  if (t > 0) {
    const o = sc(e);
    return Math.min(...o) >= t;
  }
  return !0;
}
function Ln(e, t) {
  return (o) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const n = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + n * (o - e[0]);
  };
}
function ic(e) {
  return (String(e).split(".")[1] || "").length;
}
function dc(e, t) {
  const o = 10 ** t;
  return Math.round(e * o) / o;
}
const $r = ["PageUp", "PageDown"], Dr = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Er = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, [Ar, Sr] = J(["SliderVertical", "SliderHorizontal"]), Pr = /* @__PURE__ */ b({
  __name: "SliderImpl",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  emits: ["slideStart", "slideMove", "slideEnd", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const o = e, n = t, a = Co();
    return (s, l) => (f(), x(r(N), E({ "data-slider-impl": "" }, o, {
      onKeydown: l[0] || (l[0] = (i) => {
        i.key === "Home" ? (n("homeKeyDown", i), i.preventDefault()) : i.key === "End" ? (n("endKeyDown", i), i.preventDefault()) : r($r).concat(r(Dr)).includes(i.key) && (n("stepKeyDown", i), i.preventDefault());
      }),
      onPointerdown: l[1] || (l[1] = (i) => {
        const d = i.target;
        d.setPointerCapture(i.pointerId), i.preventDefault(), r(a).thumbElements.value.includes(d) ? d.focus() : n("slideStart", i);
      }),
      onPointermove: l[2] || (l[2] = (i) => {
        i.target.hasPointerCapture(i.pointerId) && n("slideMove", i);
      }),
      onPointerup: l[3] || (l[3] = (i) => {
        const d = i.target;
        d.hasPointerCapture(i.pointerId) && (d.releasePointerCapture(i.pointerId), n("slideEnd", i));
      })
    }), {
      default: g(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), uc = /* @__PURE__ */ b({
  __name: "SliderHorizontal",
  props: {
    dir: {},
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const o = e, n = t, { max: a, min: s, dir: l, inverted: i } = ie(o), { forwardRef: d, currentElement: u } = T(), c = D(), p = k(() => (l == null ? void 0 : l.value) === "ltr" && !i.value || (l == null ? void 0 : l.value) !== "ltr" && i.value);
    function v(m) {
      const h = c.value || u.value.getBoundingClientRect(), y = [0, h.width], _ = p.value ? [s.value, a.value] : [a.value, s.value], C = Ln(y, _);
      return c.value = h, C(m - h.left);
    }
    return Sr({
      startEdge: p.value ? "left" : "right",
      endEdge: p.value ? "right" : "left",
      direction: p.value ? 1 : -1,
      size: "width"
    }), (m, h) => (f(), x(Pr, {
      ref: r(d),
      dir: r(l),
      "data-orientation": "horizontal",
      style: {
        "--radix-slider-thumb-transform": "translateX(-50%)"
      },
      onSlideStart: h[0] || (h[0] = (y) => {
        const _ = v(y.clientX);
        n("slideStart", _);
      }),
      onSlideMove: h[1] || (h[1] = (y) => {
        const _ = v(y.clientX);
        n("slideMove", _);
      }),
      onSlideEnd: h[2] || (h[2] = () => {
        c.value = void 0, n("slideEnd");
      }),
      onStepKeyDown: h[3] || (h[3] = (y) => {
        const _ = p.value ? "from-left" : "from-right", C = r(Er)[_].includes(y.key);
        n("stepKeyDown", y, C ? -1 : 1);
      }),
      onEndKeyDown: h[4] || (h[4] = (y) => n("endKeyDown", y)),
      onHomeKeyDown: h[5] || (h[5] = (y) => n("homeKeyDown", y))
    }, {
      default: g(() => [
        w(m.$slots, "default")
      ]),
      _: 3
    }, 8, ["dir"]));
  }
}), cc = /* @__PURE__ */ b({
  __name: "SliderVertical",
  props: {
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const o = e, n = t, { max: a, min: s, inverted: l } = ie(o), { forwardRef: i, currentElement: d } = T(), u = D(), c = k(() => !l.value);
    function p(v) {
      const m = u.value || d.value.getBoundingClientRect(), h = [0, m.height], y = c.value ? [a.value, s.value] : [s.value, a.value], _ = Ln(h, y);
      return u.value = m, _(v - m.top);
    }
    return Sr({
      startEdge: c.value ? "bottom" : "top",
      endEdge: c.value ? "top" : "bottom",
      size: "height",
      direction: c.value ? 1 : -1
    }), (v, m) => (f(), x(Pr, {
      ref: r(i),
      "data-orientation": "vertical",
      style: {
        "--radix-slider-thumb-transform": "translateY(50%)"
      },
      onSlideStart: m[0] || (m[0] = (h) => {
        const y = p(h.clientY);
        n("slideStart", y);
      }),
      onSlideMove: m[1] || (m[1] = (h) => {
        const y = p(h.clientY);
        n("slideMove", y);
      }),
      onSlideEnd: m[2] || (m[2] = () => {
        u.value = void 0, n("slideEnd");
      }),
      onStepKeyDown: m[3] || (m[3] = (h) => {
        const y = c.value ? "from-bottom" : "from-top", _ = r(Er)[y].includes(h.key);
        n("stepKeyDown", h, _ ? -1 : 1);
      }),
      onEndKeyDown: m[4] || (m[4] = (h) => n("endKeyDown", h)),
      onHomeKeyDown: m[5] || (m[5] = (h) => n("homeKeyDown", h))
    }, {
      default: g(() => [
        w(v.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
}), pc = ["value", "name", "disabled", "step"], [Co, fc] = J("SliderRoot"), mc = /* @__PURE__ */ b({
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
    const o = e, n = t, { min: a, max: s, step: l, minStepsBetweenThumbs: i, orientation: d, disabled: u, dir: c } = ie(o), p = st(c), { forwardRef: v, currentElement: m } = T(), h = go(m);
    Sn();
    const y = le(o, "modelValue", n, {
      defaultValue: o.defaultValue,
      passive: o.modelValue === void 0
    }), _ = D(0), C = D(y.value);
    function O(S) {
      const F = ac(y.value, S);
      A(S, F);
    }
    function B(S) {
      A(S, _.value);
    }
    function P() {
      const S = C.value[_.value];
      y.value[_.value] !== S && n("valueCommit", as(y.value));
    }
    function A(S, F, { commit: z } = { commit: !1 }) {
      var $;
      const L = ic(l.value), M = dc(Math.round((S - a.value) / l.value) * l.value + a.value, L), Z = ro(M, a.value, s.value), H = oc(y.value, Z, F);
      if (lc(H, i.value * l.value)) {
        _.value = H.indexOf(Z);
        const K = String(H) !== String(y.value);
        K && z && n("valueCommit", H), K && (($ = R.value[_.value]) == null || $.focus(), y.value = H);
      }
    }
    const R = D([]);
    return fc({
      modelValue: y,
      valueIndexToChangeRef: _,
      thumbElements: R,
      orientation: d,
      min: a,
      max: s,
      disabled: u
    }), (S, F) => (f(), j(ce, null, [
      I(r(Pn), null, {
        default: g(() => [
          (f(), x(Oe(r(d) === "horizontal" ? uc : cc), E(S.$attrs, {
            ref: r(v),
            "as-child": S.asChild,
            as: S.as,
            min: r(a),
            max: r(s),
            dir: r(p),
            inverted: S.inverted,
            "aria-disabled": r(u),
            "data-disabled": r(u) ? "" : void 0,
            onPointerdown: F[0] || (F[0] = () => {
              r(u) || (C.value = r(y));
            }),
            onSlideStart: F[1] || (F[1] = (z) => !r(u) && O(z)),
            onSlideMove: F[2] || (F[2] = (z) => !r(u) && B(z)),
            onSlideEnd: F[3] || (F[3] = (z) => !r(u) && P()),
            onHomeKeyDown: F[4] || (F[4] = (z) => !r(u) && A(r(a), 0, { commit: !0 })),
            onEndKeyDown: F[5] || (F[5] = (z) => !r(u) && A(r(s), r(y).length - 1, { commit: !0 })),
            onStepKeyDown: F[6] || (F[6] = (z, $) => {
              if (!r(u)) {
                const L = r($r).includes(z.key) || z.shiftKey && r(Dr).includes(z.key) ? 10 : 1, M = _.value, Z = r(y)[M], H = r(l) * L * $;
                A(Z + H, M, { commit: !0 });
              }
            })
          }), {
            default: g(() => [
              w(S.$slots, "default", { modelValue: r(y) })
            ]),
            _: 3
          }, 16, ["as-child", "as", "min", "max", "dir", "inverted", "aria-disabled", "data-disabled"]))
        ]),
        _: 3
      }),
      r(h) ? (f(!0), j(ce, { key: 0 }, nt(r(y), (z, $) => (f(), j("input", {
        key: $,
        value: z,
        type: "number",
        style: { display: "none" },
        name: S.name ? S.name + (r(y).length > 1 ? "[]" : "") : void 0,
        disabled: r(u),
        step: r(l)
      }, null, 8, pc))), 128)) : re("", !0)
    ], 64));
  }
}), vc = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "SliderThumbImpl",
  props: {
    index: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, o = Co(), n = Ar(), { forwardRef: a, currentElement: s } = T(), l = k(() => {
      var m, h;
      return (h = (m = o.modelValue) == null ? void 0 : m.value) == null ? void 0 : h[t.index];
    }), i = k(() => l.value === void 0 ? 0 : Or(l.value, o.min.value ?? 0, o.max.value ?? 100)), d = k(() => {
      var m, h;
      return nc(t.index, ((h = (m = o.modelValue) == null ? void 0 : m.value) == null ? void 0 : h.length) ?? 0);
    }), u = er(s), c = k(() => u[n.size].value), p = k(() => c.value ? rc(c.value, i.value, n.direction) : 0), v = hn();
    return se(() => {
      o.thumbElements.value.push(s.value);
    }), Ne(() => {
      const m = o.thumbElements.value.findIndex((h) => h === s.value) ?? -1;
      o.thumbElements.value.splice(m, 1);
    }), (m, h) => (f(), x(r(Tn), null, {
      default: g(() => [
        I(r(N), E(m.$attrs, {
          ref: r(a),
          role: "slider",
          "data-radix-vue-collection-item": "",
          tabindex: r(o).disabled.value ? void 0 : 0,
          "aria-label": m.$attrs["aria-label"] || d.value,
          "data-disabled": r(o).disabled.value ? "" : void 0,
          "data-orientation": r(o).orientation.value,
          "aria-valuenow": l.value,
          "aria-valuemin": r(o).min.value,
          "aria-valuemax": r(o).max.value,
          "aria-orientation": r(o).orientation.value,
          "as-child": m.asChild,
          as: m.as,
          style: {
            transform: "var(--radix-slider-thumb-transform)",
            position: "absolute",
            [r(n).startEdge]: `calc(${i.value}% + ${p.value}px)`,
            /**
             * There will be no value on initial render while we work out the index so we hide thumbs
             * without a value, otherwise SSR will render them in the wrong position before they
             * snap into the correct position during hydration which would be visually jarring for
             * slower connections.
             */
            display: !r(v) && l.value === void 0 ? "none" : void 0
          },
          onFocus: h[0] || (h[0] = () => {
            r(o).valueIndexToChangeRef.value = m.index;
          })
        }), {
          default: g(() => [
            w(m.$slots, "default")
          ]),
          _: 3
        }, 16, ["tabindex", "aria-label", "data-disabled", "data-orientation", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-orientation", "as-child", "as", "style"])
      ]),
      _: 3
    }));
  }
}), gc = /* @__PURE__ */ b({
  __name: "SliderThumb",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { getItems: o } = ur(), { forwardRef: n, currentElement: a } = T(), s = k(() => a.value ? o().findIndex((l) => l.ref === a.value) : -1);
    return (l, i) => (f(), x(vc, E({ ref: r(n) }, t, { index: s.value }), {
      default: g(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["index"]));
  }
}), hc = /* @__PURE__ */ b({
  __name: "SliderTrack",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = Co();
    return T(), (o, n) => (f(), x(r(N), {
      "as-child": o.asChild,
      as: o.as,
      "data-disabled": r(t).disabled.value ? "" : void 0,
      "data-orientation": r(t).orientation.value
    }, {
      default: g(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "data-disabled", "data-orientation"]));
  }
}), yc = /* @__PURE__ */ b({
  __name: "SliderRange",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = Co(), o = Ar();
    T();
    const n = k(() => {
      var l, i;
      return (i = (l = t.modelValue) == null ? void 0 : l.value) == null ? void 0 : i.map(
        (d) => Or(d, t.min.value, t.max.value)
      );
    }), a = k(() => t.modelValue.value.length > 1 ? Math.min(...n.value) : 0), s = k(() => 100 - Math.max(...n.value));
    return (l, i) => (f(), x(r(N), {
      "data-disabled": r(t).disabled.value ? "" : void 0,
      "data-orientation": r(t).orientation.value,
      "as-child": l.asChild,
      as: l.as,
      style: wt({
        [r(o).startEdge]: `${a.value}%`,
        [r(o).endEdge]: `${s.value}%`
      })
    }, {
      default: g(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-disabled", "data-orientation", "as-child", "as", "style"]));
  }
});
function bc() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
bc();
const wc = ["name", "disabled", "required", "value", "checked", "data-state", "data-disabled"], [xc, _c] = J("SwitchRoot"), Cc = /* @__PURE__ */ b({
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
    const o = e, n = t, { disabled: a } = ie(o), s = le(o, "checked", n, {
      defaultValue: o.defaultChecked,
      passive: o.checked === void 0
    });
    function l() {
      a.value || (s.value = !s.value);
    }
    const { forwardRef: i, currentElement: d } = T(), u = go(d), c = k(() => {
      var p;
      return o.id && d.value ? (p = document.querySelector(`[for="${o.id}"]`)) == null ? void 0 : p.innerText : void 0;
    });
    return _c({
      checked: s,
      toggleCheck: l,
      disabled: a
    }), (p, v) => (f(), j(ce, null, [
      I(r(N), E(p.$attrs, {
        id: p.id,
        ref: r(i),
        role: "switch",
        type: p.as === "button" ? "button" : void 0,
        value: p.value,
        "aria-label": p.$attrs["aria-label"] || c.value,
        "aria-checked": r(s),
        "aria-required": p.required,
        "data-state": r(s) ? "checked" : "unchecked",
        "data-disabled": r(a) ? "" : void 0,
        "as-child": p.asChild,
        as: p.as,
        disabled: r(a),
        onClick: l,
        onKeydown: mt(ve(l, ["prevent"]), ["enter"])
      }), {
        default: g(() => [
          w(p.$slots, "default", { checked: r(s) })
        ]),
        _: 3
      }, 16, ["id", "type", "value", "aria-label", "aria-checked", "aria-required", "data-state", "data-disabled", "as-child", "as", "disabled", "onKeydown"]),
      r(u) ? (f(), j("input", {
        key: 0,
        type: "checkbox",
        name: p.name,
        tabindex: "-1",
        "aria-hidden": "true",
        disabled: r(a),
        required: p.required,
        value: p.value,
        checked: !!r(s),
        "data-state": r(s) ? "checked" : "unchecked",
        "data-disabled": r(a) ? "" : void 0,
        style: {
          transform: "translateX(-100%)",
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }, null, 8, wc)) : re("", !0)
    ], 64));
  }
}), Bc = /* @__PURE__ */ b({
  __name: "SwitchThumb",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = xc();
    return T(), (o, n) => {
      var a;
      return f(), x(r(N), {
        "data-state": (a = r(t).checked) != null && a.value ? "checked" : "unchecked",
        "data-disabled": r(t).disabled.value ? "" : void 0,
        "as-child": o.asChild,
        as: o.as
      }, {
        default: g(() => [
          w(o.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-state", "data-disabled", "as-child", "as"]);
    };
  }
}), [Bo, kc] = J("ToastProvider"), Oc = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "ToastProvider",
  props: {
    label: { default: "Notification" },
    duration: { default: 5e3 },
    swipeDirection: { default: "right" },
    swipeThreshold: { default: 50 }
  },
  setup(e) {
    const t = e, { label: o, duration: n, swipeDirection: a, swipeThreshold: s } = ie(t), l = D(), i = D(0), d = D(!1), u = D(!1);
    if (t.label && typeof t.label == "string" && !t.label.trim()) {
      const c = "Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`.";
      throw new Error(c);
    }
    return kc({
      label: o,
      duration: n,
      swipeDirection: a,
      swipeThreshold: s,
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
      isFocusedToastEscapeKeyDownRef: d,
      isClosePausedRef: u
    }), (c, p) => w(c.$slots, "default");
  }
}), $c = "toast.swipeStart", Dc = "toast.swipeMove", Ec = "toast.swipeCancel", Ac = "toast.swipeEnd", Jo = "toast.viewportPause", en = "toast.viewportResume";
function Jt(e, t, o) {
  const n = o.originalEvent.currentTarget, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: o
  });
  t && n.addEventListener(e, t, { once: !0 }), n.dispatchEvent(a);
}
function ra(e, t, o = 0) {
  const n = Math.abs(e.x), a = Math.abs(e.y), s = n > a;
  return t === "left" || t === "right" ? s && n > o : !s && a > o;
}
function Sc(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function Tr(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((o) => {
    if (o.nodeType === o.TEXT_NODE && o.textContent && t.push(o.textContent), Sc(o)) {
      const n = o.ariaHidden || o.hidden || o.style.display === "none", a = o.dataset.radixToastAnnounceExclude === "";
      if (!n)
        if (a) {
          const s = o.dataset.radixToastAnnounceAlt;
          s && t.push(s);
        } else
          t.push(...Tr(o));
    }
  }), t;
}
const Pc = /* @__PURE__ */ b({
  __name: "ToastAnnounce",
  setup(e) {
    const t = Bo(), o = Tl(1e3), n = D(!1);
    return Xa(() => {
      n.value = !0;
    }), (a, s) => r(o) || n.value ? (f(), x(r(_o), { key: 0 }, {
      default: g(() => [
        ge(ye(r(t).label.value) + " ", 1),
        w(a.$slots, "default")
      ]),
      _: 3
    })) : re("", !0);
  }
}), [Tc, Mc] = J("ToastRoot"), Ic = /* @__PURE__ */ b({
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
    const o = e, n = t, { forwardRef: a, currentElement: s } = T(), l = Bo(), i = D(null), d = D(null), u = k(() => o.duration || l.duration.value), c = D(0), p = D(u.value), v = D(0), m = D(u.value), h = Xa(() => {
      const O = (/* @__PURE__ */ new Date()).getTime() - c.value;
      m.value = Math.max(p.value - O, 0);
    }, { fpsLimit: 60 });
    function y(O) {
      !O || O === Number.POSITIVE_INFINITY || Ee && (window.clearTimeout(v.value), c.value = (/* @__PURE__ */ new Date()).getTime(), v.value = window.setTimeout(_, O));
    }
    function _() {
      var O, B;
      (O = s.value) != null && O.contains(document.activeElement) && ((B = l.viewport.value) == null || B.focus()), l.isClosePausedRef.value = !1, n("close");
    }
    const C = k(() => s.value ? Tr(s.value) : null);
    if (o.type && !["foreground", "background"].includes(o.type)) {
      const O = "Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.";
      throw new Error(O);
    }
    return pe((O) => {
      const B = l.viewport.value;
      if (B) {
        const P = () => {
          y(p.value), h.resume(), n("resume");
        }, A = () => {
          const R = (/* @__PURE__ */ new Date()).getTime() - c.value;
          p.value = p.value - R, window.clearTimeout(v.value), h.pause(), n("pause");
        };
        return B.addEventListener(Jo, A), B.addEventListener(en, P), () => {
          B.removeEventListener(Jo, A), B.removeEventListener(en, P);
        };
      }
    }), Q(() => [o.open, u.value], () => {
      p.value = u.value, o.open && !l.isClosePausedRef.value && y(u.value);
    }, { immediate: !0 }), gn("Escape", (O) => {
      n("escapeKeyDown", O), O.defaultPrevented || (l.isFocusedToastEscapeKeyDownRef.value = !0, _());
    }), se(() => {
      l.onToastAdd();
    }), Ne(() => {
      l.onToastRemove();
    }), Mc({ onClose: _ }), (O, B) => (f(), j(ce, null, [
      C.value ? (f(), x(Pc, {
        key: 0,
        role: "status",
        "aria-live": O.type === "foreground" ? "assertive" : "polite",
        "aria-atomic": ""
      }, {
        default: g(() => [
          ge(ye(C.value), 1)
        ]),
        _: 1
      }, 8, ["aria-live"])) : re("", !0),
      r(l).viewport.value ? (f(), x(io, {
        key: 1,
        to: r(l).viewport.value
      }, [
        I(r(N), E({
          ref: r(a),
          role: "status",
          "aria-live": "off",
          "aria-atomic": "",
          tabindex: "0",
          "data-radix-vue-collection-item": ""
        }, O.$attrs, {
          as: O.as,
          "as-child": O.asChild,
          "data-state": O.open ? "open" : "closed",
          "data-swipe-direction": r(l).swipeDirection.value,
          style: { userSelect: "none", touchAction: "none" },
          onPointerdown: B[0] || (B[0] = ve((P) => {
            i.value = { x: P.clientX, y: P.clientY };
          }, ["left"])),
          onPointermove: B[1] || (B[1] = (P) => {
            if (!i.value) return;
            const A = P.clientX - i.value.x, R = P.clientY - i.value.y, S = !!d.value, F = ["left", "right"].includes(r(l).swipeDirection.value), z = ["left", "up"].includes(r(l).swipeDirection.value) ? Math.min : Math.max, $ = F ? z(0, A) : 0, L = F ? 0 : z(0, R), M = P.pointerType === "touch" ? 10 : 2, Z = { x: $, y: L }, H = { originalEvent: P, delta: Z };
            S ? (d.value = Z, r(Jt)(r(Dc), (K) => n("swipeMove", K), H)) : r(ra)(Z, r(l).swipeDirection.value, M) ? (d.value = Z, r(Jt)(r($c), (K) => n("swipeStart", K), H), P.target.setPointerCapture(P.pointerId)) : (Math.abs(A) > M || Math.abs(R) > M) && (i.value = null);
          }),
          onPointerup: B[2] || (B[2] = (P) => {
            const A = d.value, R = P.target;
            if (R.hasPointerCapture(P.pointerId) && R.releasePointerCapture(P.pointerId), d.value = null, i.value = null, A) {
              const S = P.currentTarget, F = { originalEvent: P, delta: A };
              r(ra)(A, r(l).swipeDirection.value, r(l).swipeThreshold.value) ? r(Jt)(r(Ac), (z) => n("swipeEnd", z), F) : r(Jt)(r(Ec), (z) => n("swipeCancel", z), F), S == null || S.addEventListener("click", (z) => z.preventDefault(), {
                once: !0
              });
            }
          })
        }), {
          default: g(() => [
            w(O.$slots, "default", {
              remaining: m.value,
              duration: u.value
            })
          ]),
          _: 3
        }, 16, ["as", "as-child", "data-state", "data-swipe-direction"])
      ], 8, ["to"])) : re("", !0)
    ], 64));
  }
}), Rc = /* @__PURE__ */ b({
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
    const o = e, n = t, { forwardRef: a } = T(), s = le(o, "open", n, {
      defaultValue: o.defaultOpen,
      passive: o.open === void 0
    });
    return (l, i) => (f(), x(r(Ae), {
      present: l.forceMount || r(s)
    }, {
      default: g(() => [
        I(Ic, E({
          ref: r(a),
          open: r(s),
          type: l.type,
          as: l.as,
          "as-child": l.asChild,
          duration: l.duration
        }, l.$attrs, {
          onClose: i[0] || (i[0] = (d) => s.value = !1),
          onPause: i[1] || (i[1] = (d) => n("pause")),
          onResume: i[2] || (i[2] = (d) => n("resume")),
          onEscapeKeyDown: i[3] || (i[3] = (d) => n("escapeKeyDown", d)),
          onSwipeStart: i[4] || (i[4] = (d) => {
            n("swipeStart", d), d.currentTarget.setAttribute("data-swipe", "start");
          }),
          onSwipeMove: i[5] || (i[5] = (d) => {
            const { x: u, y: c } = d.detail.delta, p = d.currentTarget;
            p.setAttribute("data-swipe", "move"), p.style.setProperty("--radix-toast-swipe-move-x", `${u}px`), p.style.setProperty("--radix-toast-swipe-move-y", `${c}px`);
          }),
          onSwipeCancel: i[6] || (i[6] = (d) => {
            const u = d.currentTarget;
            u.setAttribute("data-swipe", "cancel"), u.style.removeProperty("--radix-toast-swipe-move-x"), u.style.removeProperty("--radix-toast-swipe-move-y"), u.style.removeProperty("--radix-toast-swipe-end-x"), u.style.removeProperty("--radix-toast-swipe-end-y");
          }),
          onSwipeEnd: i[7] || (i[7] = (d) => {
            const { x: u, y: c } = d.detail.delta, p = d.currentTarget;
            p.setAttribute("data-swipe", "end"), p.style.removeProperty("--radix-toast-swipe-move-x"), p.style.removeProperty("--radix-toast-swipe-move-y"), p.style.setProperty("--radix-toast-swipe-end-x", `${u}px`), p.style.setProperty("--radix-toast-swipe-end-y", `${c}px`), s.value = !1;
          })
        }), {
          default: g(({ remaining: d, duration: u }) => [
            w(l.$slots, "default", {
              remaining: d,
              duration: u,
              open: r(s)
            })
          ]),
          _: 3
        }, 16, ["open", "type", "as", "as-child", "duration"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Mr = /* @__PURE__ */ b({
  __name: "ToastAnnounceExclude",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    return (t, o) => (f(), x(r(N), {
      as: t.as,
      "as-child": t.asChild,
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": t.altText || void 0
    }, {
      default: g(() => [
        w(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-radix-toast-announce-alt"]));
  }
}), Ir = /* @__PURE__ */ b({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, o = Tc(), { forwardRef: n } = T();
    return (a, s) => (f(), x(Mr, { "as-child": "" }, {
      default: g(() => [
        I(r(N), E(t, {
          ref: r(n),
          type: a.as === "button" ? "button" : void 0,
          onClick: s[0] || (s[0] = (l) => r(o).onClose())
        }), {
          default: g(() => [
            w(a.$slots, "default")
          ]),
          _: 3
        }, 16, ["type"])
      ]),
      _: 3
    }));
  }
}), Fc = /* @__PURE__ */ b({
  __name: "ToastAction",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    if (!e.altText)
      throw new Error("Missing prop `altText` expected on `ToastAction`");
    const { forwardRef: t } = T();
    return (o, n) => o.altText ? (f(), x(Mr, {
      key: 0,
      "alt-text": o.altText,
      "as-child": ""
    }, {
      default: g(() => [
        I(Ir, {
          ref: r(t),
          as: o.as,
          "as-child": o.asChild
        }, {
          default: g(() => [
            w(o.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child"])
      ]),
      _: 3
    }, 8, ["alt-text"])) : re("", !0);
  }
}), sa = /* @__PURE__ */ b({
  __name: "FocusProxy",
  emits: ["focusFromOutsideViewport"],
  setup(e, { emit: t }) {
    const o = t, n = Bo();
    return (a, s) => (f(), x(r(_o), {
      "aria-hidden": "true",
      tabindex: "0",
      style: { position: "fixed" },
      onFocus: s[0] || (s[0] = (l) => {
        var i;
        const d = l.relatedTarget;
        !((i = r(n).viewport.value) != null && i.contains(d)) && o("focusFromOutsideViewport");
      })
    }, {
      default: g(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Vc = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "ToastViewport",
  props: {
    hotkey: { default: () => ["F8"] },
    label: { type: [String, Function], default: "Notifications ({hotkey})" },
    asChild: { type: Boolean },
    as: { default: "ol" }
  },
  setup(e) {
    const t = e, { hotkey: o, label: n } = ie(t), { forwardRef: a, currentElement: s } = T(), { createCollection: l } = Ct(), i = l(s), d = Bo(), u = k(() => d.toastCount.value > 0), c = D(), p = D(), v = k(() => o.value.join("+").replace(/Key/g, "").replace(/Digit/g, ""));
    gn(o.value, () => {
      s.value.focus();
    }), se(() => {
      d.onViewportChange(s.value);
    }), pe((h) => {
      const y = s.value;
      if (u.value && y) {
        const _ = () => {
          if (!d.isClosePausedRef.value) {
            const A = new CustomEvent(Jo);
            y.dispatchEvent(A), d.isClosePausedRef.value = !0;
          }
        }, C = () => {
          if (d.isClosePausedRef.value) {
            const A = new CustomEvent(en);
            y.dispatchEvent(A), d.isClosePausedRef.value = !1;
          }
        }, O = (A) => {
          !y.contains(A.relatedTarget) && C();
        }, B = () => {
          y.contains(document.activeElement) || C();
        }, P = (A) => {
          var R, S, F;
          const z = A.altKey || A.ctrlKey || A.metaKey;
          if (A.key === "Tab" && !z) {
            const $ = document.activeElement, L = A.shiftKey;
            if (A.target === y && L) {
              (R = c.value) == null || R.focus();
              return;
            }
            const M = m({ tabbingDirection: L ? "backwards" : "forwards" }), Z = M.findIndex((H) => H === $);
            to(M.slice(Z + 1)) ? A.preventDefault() : L ? (S = c.value) == null || S.focus() : (F = p.value) == null || F.focus();
          }
        };
        y.addEventListener("focusin", _), y.addEventListener("focusout", O), y.addEventListener("pointermove", _), y.addEventListener("pointerleave", B), y.addEventListener("keydown", P), window.addEventListener("blur", _), window.addEventListener("focus", C), h(() => {
          y.removeEventListener("focusin", _), y.removeEventListener("focusout", O), y.removeEventListener("pointermove", _), y.removeEventListener("pointerleave", B), y.removeEventListener("keydown", P), window.removeEventListener("blur", _), window.removeEventListener("focus", C);
        });
      }
    });
    function m({ tabbingDirection: h }) {
      const y = i.value.map((_) => {
        const C = [_, ...kn(_)];
        return h === "forwards" ? C : C.reverse();
      });
      return (h === "forwards" ? y.reverse() : y).flat();
    }
    return (h, y) => (f(), x(r(bi), {
      role: "region",
      "aria-label": typeof r(n) == "string" ? r(n).replace("{hotkey}", v.value) : r(n)(v.value),
      tabindex: "-1",
      style: wt({
        // incase list has size when empty (e.g. padding), we remove pointer events so
        // it doesn't prevent interactions with page elements that it overlays
        pointerEvents: u.value ? void 0 : "none"
      })
    }, {
      default: g(() => [
        u.value ? (f(), x(sa, {
          key: 0,
          ref: (_) => {
            c.value = r(xe)(_);
          },
          onFocusFromOutsideViewport: y[0] || (y[0] = () => {
            const _ = m({
              tabbingDirection: "forwards"
            });
            r(to)(_);
          })
        }, null, 512)) : re("", !0),
        I(r(N), E({
          ref: r(a),
          tabindex: "-1",
          as: h.as,
          "as-child": h.asChild
        }, h.$attrs), {
          default: g(() => [
            w(h.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child"]),
        u.value ? (f(), x(sa, {
          key: 1,
          ref: (_) => {
            p.value = r(xe)(_);
          },
          onFocusFromOutsideViewport: y[1] || (y[1] = () => {
            const _ = m({
              tabbingDirection: "backwards"
            });
            r(to)(_);
          })
        }, null, 512)) : re("", !0)
      ]),
      _: 3
    }, 8, ["aria-label", "style"]));
  }
}), Lc = /* @__PURE__ */ b({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return T(), (o, n) => (f(), x(r(N), W(U(t)), {
      default: g(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), zc = /* @__PURE__ */ b({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return T(), (o, n) => (f(), x(r(N), W(U(t)), {
      default: g(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $t = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, a] of t)
    o[n] = a;
  return o;
}, Nc = {}, Kc = { class: "h-full bg-background dark:text-white" };
function jc(e, t) {
  return f(), j("div", Kc, [
    w(e.$slots, "default")
  ]);
}
const Yf = /* @__PURE__ */ $t(Nc, [["render", jc]]), Wc = {}, Hc = { class: "sticky top-0 z-50 flex h-16 shrink-0 items-center gap-x-4 bg-background/60 px-4 backdrop-blur sm:gap-x-6 sm:px-6 lg:px-8" };
function Uc(e, t) {
  return f(), j("header", Hc, [
    w(e.$slots, "default")
  ]);
}
const Xf = /* @__PURE__ */ $t(Wc, [["render", Uc]]), Gc = {}, qc = { class: "px-4 py-10 sm:px-6 lg:px-8 lg:pl-72" };
function Yc(e, t) {
  return f(), j("main", qc, [
    w(e.$slots, "default")
  ]);
}
const Zf = /* @__PURE__ */ $t(Gc, [["render", Yc]]), Xc = {};
function Zc(e, t) {
  return w(e.$slots, "default");
}
const Qf = /* @__PURE__ */ $t(Xc, [["render", Zc]]), Qc = {}, Jc = { class: "hidden px-6 py-10 lg:fixed lg:inset-y-0 lg:top-16 lg:z-50 lg:flex lg:w-72 lg:flex-col" }, ep = { class: "gap-y-5 overflow-y-auto" };
function tp(e, t) {
  return f(), j("div", Jc, [
    oe("div", ep, [
      w(e.$slots, "default")
    ])
  ]);
}
const Jf = /* @__PURE__ */ $t(Qc, [["render", tp]]), op = {};
function np(e, t) {
  return w(e.$slots, "default");
}
const em = /* @__PURE__ */ $t(op, [["render", np]]);
function ap(e, t) {
  return f(), j("svg", {
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
function rp(e, t) {
  return f(), j("svg", {
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
function la(e, t) {
  return f(), j("svg", {
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
function sp(e, t) {
  return f(), j("svg", {
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
const lp = {
  type: "button",
  class: "-m-2.5 p-2.5 lg:hidden"
}, tm = /* @__PURE__ */ b({
  __name: "TwoColumnLayoutSidebarTrigger",
  setup(e) {
    return (t, o) => (f(), j("button", lp, [
      o[0] || (o[0] = oe("span", { class: "sr-only" }, "Open sidebar", -1)),
      I(r(ap), {
        class: "h-6 w-6",
        "aria-hidden": "true"
      })
    ]));
  }
}), ip = 3, dp = 1e6, Fe = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST"
};
let zo = 0;
function up() {
  return zo = (zo + 1) % Number.MAX_VALUE, zo.toString();
}
const No = /* @__PURE__ */ new Map();
function ia(e) {
  if (No.has(e)) return;
  const t = setTimeout(() => {
    No.delete(e), Pt({
      type: Fe.REMOVE_TOAST,
      toastId: e
    });
  }, dp);
  No.set(e, t);
}
const _e = D({
  toasts: []
});
function Pt(e) {
  switch (e.type) {
    case Fe.ADD_TOAST:
      _e.value.toasts = [e.toast, ..._e.value.toasts].slice(0, ip);
      break;
    case Fe.UPDATE_TOAST:
      _e.value.toasts = _e.value.toasts.map(
        (t) => t.id === e.toast.id ? { ...t, ...e.toast } : t
      );
      break;
    case Fe.DISMISS_TOAST: {
      const { toastId: t } = e;
      t ? ia(t) : _e.value.toasts.forEach((o) => {
        ia(o.id);
      }), _e.value.toasts = _e.value.toasts.map(
        (o) => o.id === t || t === void 0 ? {
          ...o,
          open: !1
        } : o
      );
      break;
    }
    case Fe.REMOVE_TOAST:
      e.toastId === void 0 ? _e.value.toasts = [] : _e.value.toasts = _e.value.toasts.filter((t) => t.id !== e.toastId);
      break;
  }
}
function Rr() {
  return {
    toasts: k(() => _e.value.toasts),
    toast: cp,
    dismiss: (e) => Pt({ type: Fe.DISMISS_TOAST, toastId: e })
  };
}
function cp(e) {
  const t = up(), o = (a) => Pt({
    type: Fe.UPDATE_TOAST,
    toast: { ...a, id: t }
  }), n = () => Pt({ type: Fe.DISMISS_TOAST, toastId: t });
  return Pt({
    type: Fe.ADD_TOAST,
    toast: {
      ...e,
      id: t,
      open: !0,
      onOpenChange: (a) => {
        a || n();
      }
    }
  }), {
    id: t,
    dismiss: n,
    update: o
  };
}
const pp = { class: "flex items-start space-x-3" }, fp = { class: "grid gap-1" }, mp = { class: "font-bold" }, vp = /* @__PURE__ */ b({
  __name: "Toaster",
  setup(e) {
    const { toasts: t } = Rr();
    return (o, n) => (f(), x(r(af), null, {
      default: g(() => [
        (f(!0), j(ce, null, nt(r(t), (a) => (f(), x(r(Yp), E({
          key: a.id,
          ref_for: !0
        }, a, { class: "mt-1.5" }), {
          default: g(() => [
            oe("div", pp, [
              a.icon ? (f(), x(Oe(a.icon), {
                key: 0,
                class: ne(["h-6 w-6", a.iconClasses])
              }, null, 8, ["class"])) : re("", !0),
              oe("div", fp, [
                a.title ? (f(), x(r(nf), { key: 0 }, {
                  default: g(() => [
                    ge(ye(a.title), 1)
                  ]),
                  _: 2
                }, 1024)) : re("", !0),
                a.description ? (f(), j(ce, { key: 1 }, [
                  ds(a.description) ? (f(), x(r(ca), { key: 0 }, {
                    default: g(() => [
                      (f(), x(Oe(a.description)))
                    ]),
                    _: 2
                  }, 1024)) : typeof a.description == "object" ? (f(!0), j(ce, { key: 1 }, nt(a.description, (s, l) => (f(), j("p", {
                    key: l,
                    class: "text-sm opacity-90"
                  }, [
                    a.objectFormat === "key" ? (f(), j(ce, { key: 0 }, [
                      ge(ye(l), 1)
                    ], 64)) : a.objectFormat === "both" ? (f(), j(ce, { key: 1 }, [
                      oe("span", mp, ye(l), 1),
                      ge(": " + ye(s), 1)
                    ], 64)) : (f(), j(ce, { key: 2 }, [
                      ge(ye(s), 1)
                    ], 64))
                  ]))), 128)) : (f(), x(r(ca), { key: 2 }, {
                    default: g(() => [
                      ge(ye(a.description), 1)
                    ]),
                    _: 2
                  }, 1024))
                ], 64)) : re("", !0),
                I(r(of))
              ])
            ]),
            (f(), x(Oe(a.action)))
          ]),
          _: 2
        }, 1040))), 128)),
        I(r(Xp))
      ]),
      _: 1
    }));
  }
});
function Fr(e) {
  var t, o, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (t = 0; t < a; t++) e[t] && (o = Fr(e[t])) && (n && (n += " "), n += o);
  } else for (o in e) e[o] && (n && (n += " "), n += o);
  return n;
}
function gp() {
  for (var e, t, o = 0, n = "", a = arguments.length; o < a; o++) (e = arguments[o]) && (t = Fr(e)) && (n && (n += " "), n += t);
  return n;
}
const zn = "-", hp = (e) => {
  const t = bp(e), {
    conflictingClassGroups: o,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (l) => {
      const i = l.split(zn);
      return i[0] === "" && i.length !== 1 && i.shift(), Vr(i, t) || yp(l);
    },
    getConflictingClassGroupIds: (l, i) => {
      const d = o[l] || [];
      return i && n[l] ? [...d, ...n[l]] : d;
    }
  };
}, Vr = (e, t) => {
  var l;
  if (e.length === 0)
    return t.classGroupId;
  const o = e[0], n = t.nextPart.get(o), a = n ? Vr(e.slice(1), n) : void 0;
  if (a)
    return a;
  if (t.validators.length === 0)
    return;
  const s = e.join(zn);
  return (l = t.validators.find(({
    validator: i
  }) => i(s))) == null ? void 0 : l.classGroupId;
}, da = /^\[(.+)\]$/, yp = (e) => {
  if (da.test(e)) {
    const t = da.exec(e)[1], o = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (o)
      return "arbitrary.." + o;
  }
}, bp = (e) => {
  const {
    theme: t,
    prefix: o
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return xp(Object.entries(e.classGroups), o).forEach(([s, l]) => {
    tn(l, n, s, t);
  }), n;
}, tn = (e, t, o, n) => {
  e.forEach((a) => {
    if (typeof a == "string") {
      const s = a === "" ? t : ua(t, a);
      s.classGroupId = o;
      return;
    }
    if (typeof a == "function") {
      if (wp(a)) {
        tn(a(n), t, o, n);
        return;
      }
      t.validators.push({
        validator: a,
        classGroupId: o
      });
      return;
    }
    Object.entries(a).forEach(([s, l]) => {
      tn(l, ua(t, s), o, n);
    });
  });
}, ua = (e, t) => {
  let o = e;
  return t.split(zn).forEach((n) => {
    o.nextPart.has(n) || o.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), o = o.nextPart.get(n);
  }), o;
}, wp = (e) => e.isThemeGetter, xp = (e, t) => t ? e.map(([o, n]) => {
  const a = n.map((s) => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([l, i]) => [t + l, i])) : s);
  return [o, a];
}) : e, _p = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, o = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const a = (s, l) => {
    o.set(s, l), t++, t > e && (t = 0, n = o, o = /* @__PURE__ */ new Map());
  };
  return {
    get(s) {
      let l = o.get(s);
      if (l !== void 0)
        return l;
      if ((l = n.get(s)) !== void 0)
        return a(s, l), l;
    },
    set(s, l) {
      o.has(s) ? o.set(s, l) : a(s, l);
    }
  };
}, Lr = "!", Cp = (e) => {
  const {
    separator: t,
    experimentalParseClassName: o
  } = e, n = t.length === 1, a = t[0], s = t.length, l = (i) => {
    const d = [];
    let u = 0, c = 0, p;
    for (let _ = 0; _ < i.length; _++) {
      let C = i[_];
      if (u === 0) {
        if (C === a && (n || i.slice(_, _ + s) === t)) {
          d.push(i.slice(c, _)), c = _ + s;
          continue;
        }
        if (C === "/") {
          p = _;
          continue;
        }
      }
      C === "[" ? u++ : C === "]" && u--;
    }
    const v = d.length === 0 ? i : i.substring(c), m = v.startsWith(Lr), h = m ? v.substring(1) : v, y = p && p > c ? p - c : void 0;
    return {
      modifiers: d,
      hasImportantModifier: m,
      baseClassName: h,
      maybePostfixModifierPosition: y
    };
  };
  return o ? (i) => o({
    className: i,
    parseClassName: l
  }) : l;
}, Bp = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let o = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...o.sort(), n), o = []) : o.push(n);
  }), t.push(...o.sort()), t;
}, kp = (e) => ({
  cache: _p(e.cacheSize),
  parseClassName: Cp(e),
  ...hp(e)
}), Op = /\s+/, $p = (e, t) => {
  const {
    parseClassName: o,
    getClassGroupId: n,
    getConflictingClassGroupIds: a
  } = t, s = [], l = e.trim().split(Op);
  let i = "";
  for (let d = l.length - 1; d >= 0; d -= 1) {
    const u = l[d], {
      modifiers: c,
      hasImportantModifier: p,
      baseClassName: v,
      maybePostfixModifierPosition: m
    } = o(u);
    let h = !!m, y = n(h ? v.substring(0, m) : v);
    if (!y) {
      if (!h) {
        i = u + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (y = n(v), !y) {
        i = u + (i.length > 0 ? " " + i : i);
        continue;
      }
      h = !1;
    }
    const _ = Bp(c).join(":"), C = p ? _ + Lr : _, O = C + y;
    if (s.includes(O))
      continue;
    s.push(O);
    const B = a(y, h);
    for (let P = 0; P < B.length; ++P) {
      const A = B[P];
      s.push(C + A);
    }
    i = u + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function Dp() {
  let e = 0, t, o, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (o = zr(t)) && (n && (n += " "), n += o);
  return n;
}
const zr = (e) => {
  if (typeof e == "string")
    return e;
  let t, o = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = zr(e[n])) && (o && (o += " "), o += t);
  return o;
};
function Ep(e, ...t) {
  let o, n, a, s = l;
  function l(d) {
    const u = t.reduce((c, p) => p(c), e());
    return o = kp(u), n = o.cache.get, a = o.cache.set, s = i, i(d);
  }
  function i(d) {
    const u = n(d);
    if (u)
      return u;
    const c = $p(d, o);
    return a(d, c), c;
  }
  return function() {
    return s(Dp.apply(null, arguments));
  };
}
const ae = (e) => {
  const t = (o) => o[e] || [];
  return t.isThemeGetter = !0, t;
}, Nr = /^\[(?:([a-z-]+):)?(.+)\]$/i, Ap = /^\d+\/\d+$/, Sp = /* @__PURE__ */ new Set(["px", "full", "screen"]), Pp = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Tp = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Mp = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Ip = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Rp = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ie = (e) => ht(e) || Sp.has(e) || Ap.test(e), je = (e) => Dt(e, "length", Wp), ht = (e) => !!e && !Number.isNaN(Number(e)), Ko = (e) => Dt(e, "number", ht), At = (e) => !!e && Number.isInteger(Number(e)), Fp = (e) => e.endsWith("%") && ht(e.slice(0, -1)), Y = (e) => Nr.test(e), We = (e) => Pp.test(e), Vp = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Lp = (e) => Dt(e, Vp, Kr), zp = (e) => Dt(e, "position", Kr), Np = /* @__PURE__ */ new Set(["image", "url"]), Kp = (e) => Dt(e, Np, Up), jp = (e) => Dt(e, "", Hp), St = () => !0, Dt = (e, t, o) => {
  const n = Nr.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : o(n[2]) : !1;
}, Wp = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Tp.test(e) && !Mp.test(e)
), Kr = () => !1, Hp = (e) => Ip.test(e), Up = (e) => Rp.test(e), Gp = () => {
  const e = ae("colors"), t = ae("spacing"), o = ae("blur"), n = ae("brightness"), a = ae("borderColor"), s = ae("borderRadius"), l = ae("borderSpacing"), i = ae("borderWidth"), d = ae("contrast"), u = ae("grayscale"), c = ae("hueRotate"), p = ae("invert"), v = ae("gap"), m = ae("gradientColorStops"), h = ae("gradientColorStopPositions"), y = ae("inset"), _ = ae("margin"), C = ae("opacity"), O = ae("padding"), B = ae("saturate"), P = ae("scale"), A = ae("sepia"), R = ae("skew"), S = ae("space"), F = ae("translate"), z = () => ["auto", "contain", "none"], $ = () => ["auto", "hidden", "clip", "visible", "scroll"], L = () => ["auto", Y, t], M = () => [Y, t], Z = () => ["", Ie, je], H = () => ["auto", ht, Y], K = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], G = () => ["solid", "dashed", "dotted", "double", "none"], te = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], de = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], ue = () => ["", "0", Y], Pe = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], he = () => [ht, Y];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [St],
      spacing: [Ie, je],
      blur: ["none", "", We, Y],
      brightness: he(),
      borderColor: [e],
      borderRadius: ["none", "", "full", We, Y],
      borderSpacing: M(),
      borderWidth: Z(),
      contrast: he(),
      grayscale: ue(),
      hueRotate: he(),
      invert: ue(),
      gap: M(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Fp, je],
      inset: L(),
      margin: L(),
      opacity: he(),
      padding: M(),
      saturate: he(),
      scale: he(),
      sepia: ue(),
      skew: he(),
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
        aspect: ["auto", "square", "video", Y]
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
        columns: [We]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": Pe()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": Pe()
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
        object: [...K(), Y]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: $()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": $()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": $()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: z()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": z()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": z()
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
        inset: [y]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [y]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [y]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [y]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [y]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [y]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [y]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [y]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [y]
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
        z: ["auto", At, Y]
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
        flex: ["1", "auto", "initial", "none", Y]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ue()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ue()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", At, Y]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [St]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", At, Y]
        }, Y]
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
        "grid-rows": [St]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [At, Y]
        }, Y]
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
        "auto-cols": ["auto", "min", "max", "fr", Y]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", Y]
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
        justify: ["normal", ...de()]
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
        content: ["normal", ...de(), "baseline"]
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
        "place-content": [...de(), "baseline"]
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
        "space-x": [S]
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
        "space-y": [S]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Y, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [Y, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [Y, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [We]
        }, We]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [Y, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [Y, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [Y, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [Y, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", We, je]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ko]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [St]
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
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Y]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", ht, Ko]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Ie, Y]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", Y]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", Y]
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
        decoration: [...G(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Ie, je]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Ie, Y]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Y]
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
        content: ["none", Y]
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
        bg: [...K(), zp]
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
        bg: ["auto", "cover", "contain", Lp]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Kp]
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
        from: [h]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [h]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [h]
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
        border: [...G(), "hidden"]
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
        divide: G()
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
        outline: ["", ...G()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Ie, Y]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Ie, je]
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
        ring: Z()
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
        "ring-offset": [Ie, je]
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
        shadow: ["", "inner", "none", We, jp]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [St]
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
        "mix-blend": [...te(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": te()
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
        blur: [o]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [n]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [d]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", We, Y]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [u]
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
        "backdrop-blur": [o]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [n]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [d]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [u]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Y]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: he()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", Y]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: he()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", Y]
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
        rotate: [At, Y]
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
        "skew-x": [R]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [R]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Y]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Y]
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
        "will-change": ["auto", "scroll", "contents", "transform", Y]
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
        stroke: [Ie, je, Ko]
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
}, qp = /* @__PURE__ */ Ep(Gp);
function V(...e) {
  return qp(gp(e));
}
const Yp = /* @__PURE__ */ b({
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
    const o = e, n = t, a = k(() => {
      const { class: l, ...i } = o;
      return i;
    }), s = X(a, n);
    return (l, i) => (f(), x(r(Rc), E(r(s), {
      class: r(V)(r(sf)({ variant: l.variant }), o.class),
      "onUpdate:open": l.onOpenChange
    }), {
      default: g(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class", "onUpdate:open"]));
  }
}), Xp = /* @__PURE__ */ b({
  __name: "ToastViewport",
  props: {
    hotkey: {},
    label: { type: [String, Function] },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = k(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (f(), x(r(Vc), E(o.value, {
      class: r(V)(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        t.class
      )
    }), null, 16, ["class"]));
  }
}), om = /* @__PURE__ */ b({
  __name: "ToastAction",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = k(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (f(), x(r(Fc), E(o.value, {
      class: r(V)(
        "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
        t.class
      )
    }), {
      default: g(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
});
function Zp(e, t) {
  return f(), j("svg", {
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
function jr(e, t) {
  return f(), j("svg", {
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
function Wr(e, t) {
  return f(), j("svg", {
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
function Qp(e, t) {
  return f(), j("svg", {
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
function Jp(e, t) {
  return f(), j("svg", {
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
function ko(e, t) {
  return f(), j("svg", {
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
function ef(e, t) {
  return f(), j("svg", {
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
function tf(e, t) {
  return f(), j("svg", {
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
const of = /* @__PURE__ */ b({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = k(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (f(), x(r(Ir), E(o.value, {
      class: r(V)(
        "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
        t.class
      )
    }), {
      default: g(() => [
        I(r(ko), { class: "h-4 w-4" })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), nf = /* @__PURE__ */ b({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = k(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (f(), x(r(Lc), E(o.value, {
      class: r(V)("text-sm font-semibold [&+div]:text-xs", t.class)
    }), {
      default: g(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ca = /* @__PURE__ */ b({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = k(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (f(), x(r(zc), E({
      class: r(V)("text-sm opacity-90", t.class)
    }, o.value), {
      default: g(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), af = /* @__PURE__ */ b({
  __name: "ToastProvider",
  props: {
    label: {},
    duration: {},
    swipeDirection: {},
    swipeThreshold: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (f(), x(r(Oc), W(U(t)), {
      default: g(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Hr(e) {
  var t, o, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (o = Hr(e[t])) && (n && (n += " "), n += o);
  else for (t in e) e[t] && (n && (n += " "), n += t);
  return n;
}
function rf() {
  for (var e, t, o = 0, n = ""; o < arguments.length; ) (e = arguments[o++]) && (t = Hr(e)) && (n && (n += " "), n += t);
  return n;
}
const pa = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, fa = rf, Ut = (e, t) => (o) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null) return fa(e, o == null ? void 0 : o.class, o == null ? void 0 : o.className);
  const { variants: a, defaultVariants: s } = t, l = Object.keys(a).map((u) => {
    const c = o == null ? void 0 : o[u], p = s == null ? void 0 : s[u];
    if (c === null) return null;
    const v = pa(c) || pa(p);
    return a[u][v];
  }), i = o && Object.entries(o).reduce((u, c) => {
    let [p, v] = c;
    return v === void 0 || (u[p] = v), u;
  }, {}), d = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((u, c) => {
    let { class: p, className: v, ...m } = c;
    return Object.entries(m).every((h) => {
      let [y, _] = h;
      return Array.isArray(_) ? _.includes({
        ...s,
        ...i
      }[y]) : {
        ...s,
        ...i
      }[y] === _;
    }) ? [
      ...u,
      p,
      v
    ] : u;
  }, []);
  return fa(e, l, d, o == null ? void 0 : o.class, o == null ? void 0 : o.className);
}, sf = Ut(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
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
), { toast: eo } = Rr();
function lf() {
  return {
    info: (e) => {
      eo({
        icon: sp,
        iconClasses: "text-blue-400",
        title: "FYI",
        description: e
      });
    },
    success: (e) => {
      eo({
        icon: rp,
        iconClasses: "text-green-400",
        title: "Success",
        description: e
      });
    },
    warning: (e) => {
      eo({
        icon: la,
        iconClasses: "text-orange-400",
        title: "Warning",
        description: e
      });
    },
    error: (e, t = "value") => {
      eo({
        icon: la,
        iconClasses: "text-red-400",
        title: "Oh snap! Some errors were encountered.",
        description: e,
        objectFormat: t
      });
    }
  };
}
const nm = /* @__PURE__ */ b({
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
      info: o,
      success: n,
      warning: a,
      error: s
    } = lf();
    return Q(
      () => t.info,
      (l) => {
        l && o(t.info);
      },
      {
        immediate: !0
      }
    ), Q(
      () => t.success,
      (l) => {
        l && n(t.success);
      },
      { immediate: !0 }
    ), Q(
      () => t.warning,
      (l) => {
        l && a(t.warning);
      },
      { immediate: !0 }
    ), Q(
      () => t.errors,
      () => {
        t.errors !== void 0 && Object.keys(t.errors).length > 0 && s(t.errors, t.objectFormat);
      }
    ), (l, i) => (f(), x(r(vp)));
  }
}), df = { class: "flex items-center justify-between space-y-2" }, uf = { class: "flex items-center space-x-2" }, am = /* @__PURE__ */ b({
  __name: "Heading",
  props: {
    as: { default: "h2" }
  },
  setup(e) {
    return (t, o) => (f(), j("div", df, [
      (f(), x(Oe(t.as), { class: "text-3xl font-bold tracking-tight" }, {
        default: g(() => [
          w(t.$slots, "default")
        ]),
        _: 3
      })),
      oe("div", uf, [
        w(t.$slots, "actions")
      ])
    ]));
  }
}), rm = /* @__PURE__ */ b({
  __name: "Accordion",
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
    const a = X(e, t);
    return (s, l) => (f(), x(r(ii), W(U(r(a))), {
      default: g(() => [
        (f(!0), j(ce, null, nt(s.content, (i, d) => (f(), x(r(pf), {
          key: d,
          value: "item-" + d
        }, {
          default: g(() => [
            I(r(ff), null, {
              default: g(() => [
                w(s.$slots, d + ".title", { item: i }, () => [
                  ge(ye(i.title), 1)
                ])
              ]),
              _: 2
            }, 1024),
            I(r(cf), null, {
              default: g(() => [
                w(s.$slots, d + ".content", { item: i }, () => [
                  ge(ye(i.content), 1)
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
}), cf = /* @__PURE__ */ b({
  __name: "AccordionContent",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = k(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (f(), x(r(ci), E(o.value, { class: "accordion-content overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" }), {
      default: g(() => [
        oe("div", {
          class: ne(r(V)("pb-4 pt-0", t.class))
        }, [
          w(n.$slots, "default")
        ], 2)
      ]),
      _: 3
    }, 16));
  }
}), pf = /* @__PURE__ */ b({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = k(() => {
      const { class: a, ...s } = t;
      return s;
    }), n = me(o);
    return (a, s) => (f(), x(r(ui), E(r(n), {
      class: r(V)("border-b", t.class)
    }), {
      default: g(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ff = /* @__PURE__ */ b({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = k(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (f(), x(r(pi), { class: "flex" }, {
      default: g(() => [
        I(r(fi), E(o.value, {
          class: r(V)(
            "accordion-trigger flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
            t.class
          )
        }), {
          default: g(() => [
            w(n.$slots, "default"),
            w(n.$slots, "icon", {}, () => [
              I(r(Wr), { class: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), sm = /* @__PURE__ */ b({
  __name: "AlertDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = X(e, t);
    return (s, l) => (f(), x(r(Li), W(U(r(a))), {
      default: g(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), lm = /* @__PURE__ */ b({
  __name: "AlertDialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (f(), x(r(zi), W(U(t)), {
      default: g(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), im = /* @__PURE__ */ b({
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
    const o = e, n = t, a = k(() => {
      const { class: l, ...i } = o;
      return i;
    }), s = X(a, n);
    return (l, i) => (f(), x(r(Ni), null, {
      default: g(() => [
        I(r(Hi), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        I(r(Wi), E(r(s), {
          class: r(V)(
            "fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
            o.class
          )
        }), {
          default: g(() => [
            w(l.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), dm = /* @__PURE__ */ b({
  __name: "AlertDialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (f(), j("div", {
      class: ne(r(V)("flex flex-col gap-y-2 text-center sm:text-left", t.class))
    }, [
      w(o.$slots, "default")
    ], 2));
  }
}), um = /* @__PURE__ */ b({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = k(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (f(), x(r(Gi), E(o.value, {
      class: r(V)("text-lg font-semibold", t.class)
    }), {
      default: g(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), cm = /* @__PURE__ */ b({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = k(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (f(), x(r(qi), E(o.value, {
      class: r(V)("text-sm text-muted-foreground", t.class)
    }), {
      default: g(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), pm = /* @__PURE__ */ b({
  __name: "AlertDialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (f(), j("div", {
      class: ne(r(V)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      w(o.$slots, "default")
    ], 2));
  }
}), fm = /* @__PURE__ */ b({
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
    return (o, n) => (f(), x(r(N), {
      as: o.as,
      "as-child": o.asChild,
      class: ne(r(V)(r(Nn)({ variant: o.variant, size: o.size }), t.class))
    }, {
      default: g(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), Nn = Ut(
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
), mm = /* @__PURE__ */ b({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = k(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (f(), x(r(Yi), E(o.value, {
      class: r(V)(r(Nn)(), t.class)
    }), {
      default: g(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), vm = /* @__PURE__ */ b({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = k(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (f(), x(r(Ui), E(o.value, {
      class: r(V)(r(Nn)({ variant: "outline" }), "mt-2 sm:mt-0", t.class)
    }), {
      default: g(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), gm = /* @__PURE__ */ b({
  __name: "Avatar",
  props: {
    class: {},
    size: { default: "sm" },
    shape: { default: "circle" }
  },
  setup(e) {
    const t = e;
    return (o, n) => (f(), x(r(Zi), {
      class: ne(r(V)(r(mf)({ size: o.size, shape: o.shape }), t.class))
    }, {
      default: g(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), hm = /* @__PURE__ */ b({
  __name: "AvatarImage",
  props: {
    src: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (f(), x(r(Ji), E(t, { class: "h-full w-full object-cover" }), null, 16));
  }
}), ym = /* @__PURE__ */ b({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (f(), x(r(ed), W(U(t)), {
      default: g(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), mf = Ut(
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
), bm = /* @__PURE__ */ b({
  __name: "Badge",
  props: {
    variant: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (f(), j("div", {
      class: ne(r(V)(r(vf)({ variant: o.variant }), t.class))
    }, [
      w(o.$slots, "default")
    ], 2));
  }
}), vf = Ut(
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
), gf = /* @__PURE__ */ b({
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
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["update:modelValue", "update:open", "update:searchTerm", "update:selectedValue"],
  setup(e, { emit: t }) {
    const o = e, n = t, a = k(() => {
      const { class: l, ...i } = o;
      return i;
    }), s = X(a, n);
    return (l, i) => (f(), x(r(dd), E(r(s), {
      class: r(V)(
        "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
        o.class
      )
    }), {
      default: g(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), hf = /* @__PURE__ */ b({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = X(e, t);
    return (s, l) => (f(), x(r(_n), W(U(r(a))), {
      default: g(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wm = /* @__PURE__ */ b({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (f(), x(r(lt), W(U(t)), {
      default: g(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), xm = /* @__PURE__ */ b({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (f(), x(r(Cn), W(U(t)), {
      default: g(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), _m = /* @__PURE__ */ b({
  __name: "DialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (f(), j("div", {
      class: ne(r(V)("flex flex-col gap-y-1.5 text-center sm:text-left", t.class))
    }, [
      w(o.$slots, "default")
    ], 2));
  }
}), Cm = /* @__PURE__ */ b({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = k(() => {
      const { class: a, ...s } = t;
      return s;
    }), n = me(o);
    return (a, s) => (f(), x(r(Dn), E(r(n), {
      class: r(V)("text-lg font-semibold leading-none tracking-tight", t.class)
    }), {
      default: g(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Bm = /* @__PURE__ */ b({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = k(() => {
      const { class: a, ...s } = t;
      return s;
    }), n = me(o);
    return (a, s) => (f(), x(r(En), E(r(n), {
      class: r(V)("text-sm text-muted-foreground", t.class)
    }), {
      default: g(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), yf = /* @__PURE__ */ b({
  __name: "DialogContent",
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
    const o = e, n = t, a = k(() => {
      const { class: l, ...i } = o;
      return i;
    }), s = X(a, n);
    return (l, i) => (f(), x(r(Bn), null, {
      default: g(() => [
        I(r(wo), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        I(r(bo), E(r(s), {
          class: r(V)(
            "fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
            o.class
          )
        }), {
          default: g(() => [
            w(l.$slots, "default"),
            I(r(lt), { class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground" }, {
              default: g(() => [
                I(r(ko), { class: "h-4 w-4" }),
                i[0] || (i[0] = oe("span", { class: "sr-only" }, "Close", -1))
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
}), km = /* @__PURE__ */ b({
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
    const o = e, n = t, a = k(() => {
      const { class: l, ...i } = o;
      return i;
    }), s = X(a, n);
    return (l, i) => (f(), x(r(Bn), null, {
      default: g(() => [
        I(r(wo), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: g(() => [
            I(r(bo), E({
              class: r(V)(
                "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                o.class
              )
            }, r(s), {
              onPointerDownOutside: i[0] || (i[0] = (d) => {
                const u = d.detail.originalEvent, c = u.target;
                (u.offsetX > c.clientWidth || u.offsetY > c.clientHeight) && d.preventDefault();
              })
            }), {
              default: g(() => [
                w(l.$slots, "default"),
                I(r(lt), { class: "absolute right-4 top-4 rounded-md p-0.5 transition-colors hover:bg-secondary" }, {
                  default: g(() => [
                    I(r(ko), { class: "h-4 w-4" }),
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
}), Om = /* @__PURE__ */ b({
  __name: "DialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (f(), j("div", {
      class: ne(r(V)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      w(o.$slots, "default")
    ], 2));
  }
}), $m = /* @__PURE__ */ b({
  __name: "CommandDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = X(e, t);
    return (s, l) => (f(), x(r(hf), W(U(r(a))), {
      default: g(() => [
        I(r(yf), { class: "overflow-hidden p-0 shadow-lg" }, {
          default: g(() => [
            I(gf, { class: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5" }, {
              default: g(() => [
                w(s.$slots, "default")
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
}), Dm = /* @__PURE__ */ b({
  __name: "CommandEmpty",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = k(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (f(), x(r(hd), E(o.value, {
      class: r(V)("py-6 text-center text-sm", t.class)
    }), {
      default: g(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Em = /* @__PURE__ */ b({
  __name: "CommandGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    heading: {}
  },
  setup(e) {
    const t = e, o = k(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (f(), x(r(pd), E(o.value, {
      class: r(V)(
        "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
        t.class
      )
    }), {
      default: g(() => [
        n.heading ? (f(), x(r(fd), {
          key: 0,
          class: "px-2 py-1.5 text-xs font-medium text-muted-foreground"
        }, {
          default: g(() => [
            ge(ye(n.heading), 1)
          ]),
          _: 1
        })) : re("", !0),
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), bf = {
  class: "flex items-center border-b px-3",
  "cmdk-input-wrapper": ""
}, Am = /* @__PURE__ */ b({
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
    const t = e, o = k(() => {
      const { class: a, ...s } = t;
      return s;
    }), n = me(o);
    return (a, s) => (f(), j("div", bf, [
      I(r(tf), { class: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
      I(r(ud), E({ ...r(n), ...a.$attrs }, {
        "auto-focus": "",
        class: r(V)(
          "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          t.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), Sm = /* @__PURE__ */ b({
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
    const o = e, n = t, a = k(() => {
      const { class: l, ...i } = o;
      return i;
    }), s = X(a, n);
    return (l, i) => (f(), x(r(xd), E(r(s), {
      class: r(V)(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        o.class
      )
    }), {
      default: g(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), wf = { role: "presentation" }, Pm = /* @__PURE__ */ b({
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
    const o = e, n = t, a = k(() => {
      const { class: l, ...i } = o;
      return i;
    }), s = X(a, n);
    return (l, i) => (f(), x(r(gd), E(r(s), {
      class: r(V)("max-h-[300px] overflow-y-auto overflow-x-hidden", o.class)
    }), {
      default: g(() => [
        oe("div", wf, [
          w(l.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Tm = /* @__PURE__ */ b({
  __name: "CommandSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = k(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (f(), x(r(_d), E(o.value, {
      class: r(V)("-mx-1 h-px bg-border", t.class)
    }), {
      default: g(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Mm = /* @__PURE__ */ b({
  __name: "CommandShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (f(), j("span", {
      class: ne(r(V)("ml-auto text-xs tracking-widest text-muted-foreground", t.class))
    }, [
      w(o.$slots, "default")
    ], 2));
  }
}), Im = /* @__PURE__ */ b({
  __name: "DropdownMenu",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = X(e, t);
    return (s, l) => (f(), x(r(Zd), W(U(r(a))), {
      default: g(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Rm = /* @__PURE__ */ b({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const o = me(e);
    return (n, a) => (f(), x(r(Qd), E({ class: "outline-none" }, r(o)), {
      default: g(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Fm = /* @__PURE__ */ b({
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
    const o = e, n = t, a = k(() => {
      const { class: l, ...i } = o;
      return i;
    }), s = X(a, n);
    return (l, i) => (f(), x(r(Jd), null, {
      default: g(() => [
        I(r(eu), E(r(s), {
          class: r(V)(
            "z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            o.class
          )
        }), {
          default: g(() => [
            w(l.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Vm = /* @__PURE__ */ b({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (f(), x(r(ou), W(U(t)), {
      default: g(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Lm = /* @__PURE__ */ b({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = X(e, t);
    return (s, l) => (f(), x(r(su), W(U(r(a))), {
      default: g(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), zm = /* @__PURE__ */ b({
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
    const t = e, o = k(() => {
      const { class: a, ...s } = t;
      return s;
    }), n = me(o);
    return (a, s) => (f(), x(r(tu), E(r(n), {
      class: r(V)(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        a.inset && "pl-8",
        t.class
      )
    }), {
      default: g(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), xf = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, Nm = /* @__PURE__ */ b({
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
    const o = e, n = t, a = k(() => {
      const { class: l, ...i } = o;
      return i;
    }), s = X(a, n);
    return (l, i) => (f(), x(r(au), E(r(s), {
      class: r(V)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        o.class
      )
    }), {
      default: g(() => [
        oe("span", xf, [
          I(r(br), null, {
            default: g(() => [
              I(r(jr), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), _f = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, Km = /* @__PURE__ */ b({
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
    const o = e, n = t, a = k(() => {
      const { class: l, ...i } = o;
      return i;
    }), s = X(a, n);
    return (l, i) => (f(), x(r(lu), E(r(s), {
      class: r(V)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        o.class
      )
    }), {
      default: g(() => [
        oe("span", _f, [
          I(r(br), null, {
            default: g(() => [
              I(r(ef), { class: "h-4 w-4 fill-current" })
            ]),
            _: 1
          })
        ]),
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), jm = /* @__PURE__ */ b({
  __name: "DropdownMenuShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (f(), j("span", {
      class: ne(r(V)("ml-auto text-xs tracking-widest opacity-60", t.class))
    }, [
      w(o.$slots, "default")
    ], 2));
  }
}), Wm = /* @__PURE__ */ b({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = k(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (f(), x(r(nu), E(o.value, {
      class: r(V)("-mx-1 my-1 h-px bg-muted", t.class)
    }), null, 16, ["class"]));
  }
}), Hm = /* @__PURE__ */ b({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  setup(e) {
    const t = e, o = k(() => {
      const { class: a, ...s } = t;
      return s;
    }), n = me(o);
    return (a, s) => (f(), x(r(ru), E(r(n), {
      class: r(V)("px-2 py-1.5 text-sm font-semibold", a.inset && "pl-8", t.class)
    }), {
      default: g(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Um = /* @__PURE__ */ b({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = X(e, t);
    return (s, l) => (f(), x(r(iu), W(U(r(a))), {
      default: g(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Gm = /* @__PURE__ */ b({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = k(() => {
      const { class: a, ...s } = t;
      return s;
    }), n = me(o);
    return (a, s) => (f(), x(r(uu), E(r(n), {
      class: r(V)(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
        t.class
      )
    }), {
      default: g(() => [
        w(a.$slots, "default"),
        I(r(Qp), { class: "ml-auto h-4 w-4" })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), qm = /* @__PURE__ */ b({
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
    const o = e, n = t, a = k(() => {
      const { class: l, ...i } = o;
      return i;
    }), s = X(a, n);
    return (l, i) => (f(), x(r(du), E(r(s), {
      class: r(V)(
        "z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        o.class
      )
    }), {
      default: g(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
});
var ma;
const Cf = typeof window < "u", Bf = (e) => typeof e < "u", kf = (e) => typeof e == "function";
Cf && ((ma = window == null ? void 0 : window.navigator) != null && ma.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Of(e) {
  return e;
}
function $f(e) {
  return JSON.parse(JSON.stringify(e));
}
const va = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ga = "__vueuse_ssr_handlers__";
va[ga] = va[ga] || {};
var ha;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(ha || (ha = {}));
var Df = Object.defineProperty, ya = Object.getOwnPropertySymbols, Ef = Object.prototype.hasOwnProperty, Af = Object.prototype.propertyIsEnumerable, ba = (e, t, o) => t in e ? Df(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, Sf = (e, t) => {
  for (var o in t || (t = {}))
    Ef.call(t, o) && ba(e, o, t[o]);
  if (ya)
    for (var o of ya(t))
      Af.call(t, o) && ba(e, o, t[o]);
  return e;
};
const Pf = {
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
Sf({
  linear: Of
}, Pf);
function Ur(e, t, o, n = {}) {
  var a, s, l;
  const {
    clone: i = !1,
    passive: d = !1,
    eventName: u,
    deep: c = !1,
    defaultValue: p
  } = n, v = Xe(), m = o || (v == null ? void 0 : v.emit) || ((a = v == null ? void 0 : v.$emit) == null ? void 0 : a.bind(v)) || ((l = (s = v == null ? void 0 : v.proxy) == null ? void 0 : s.$emit) == null ? void 0 : l.bind(v == null ? void 0 : v.proxy));
  let h = u;
  h = u || h || `update:${t.toString()}`;
  const y = (C) => i ? kf(i) ? i(C) : $f(C) : C, _ = () => Bf(e[t]) ? y(e[t]) : p;
  if (d) {
    const C = _(), O = D(C);
    return Q(() => e[t], (B) => O.value = y(B)), Q(O, (B) => {
      (B !== e[t] || c) && m(h, B);
    }, { deep: c }), O;
  } else
    return k({
      get() {
        return _();
      },
      set(C) {
        m(h, C);
      }
    });
}
const Ym = /* @__PURE__ */ b({
  __name: "Input",
  props: {
    defaultValue: {},
    modelValue: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, a = Ur(o, "modelValue", t, {
      passive: !0,
      defaultValue: o.defaultValue
    });
    return (s, l) => bt((f(), j("input", {
      "onUpdate:modelValue": l[0] || (l[0] = (i) => Vt(a) ? a.value = i : null),
      class: ne(
        r(V)(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          o.class
        )
      )
    }, null, 2)), [
      [Aa, r(a)]
    ]);
  }
}), Xm = /* @__PURE__ */ b({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = k(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (f(), x(r(cu), E(o.value, {
      class: r(V)(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        t.class
      )
    }), {
      default: g(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Zm = /* @__PURE__ */ b({
  __name: "Popover",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = X(e, t);
    return (s, l) => (f(), x(r(fu), W(U(r(a))), {
      default: g(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Qm = /* @__PURE__ */ b({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (f(), x(r(mu), W(U(t)), {
      default: g(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Jm = /* @__PURE__ */ b({
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
    const o = e, n = t, a = k(() => {
      const { class: l, ...i } = o;
      return i;
    }), s = X(a, n);
    return (l, i) => (f(), x(r(vu), null, {
      default: g(() => [
        I(r(yu), E({ ...r(s), ...l.$attrs }, {
          class: r(V)(
            "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            o.class
          )
        }), {
          default: g(() => [
            w(l.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), ev = /* @__PURE__ */ b({
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
    const t = e, o = k(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (f(), x(r(Cu), E(o.value, {
      class: r(V)("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", t.class)
    }), {
      default: g(() => [
        I(r(Bu), {
          class: "h-full w-full flex-1 bg-primary transition-all",
          style: wt(`transform: translateX(-${100 - (t.modelValue ?? 0)}%);`)
        }, null, 8, ["style"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), tv = /* @__PURE__ */ b({
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
    const a = X(e, t);
    return (s, l) => (f(), x(r(Au), W(U(r(a))), {
      default: g(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ov = /* @__PURE__ */ b({
  __name: "SelectValue",
  props: {
    placeholder: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (f(), x(r(ec), W(U(t)), {
      default: g(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), nv = /* @__PURE__ */ b({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = k(() => {
      const { class: a, ...s } = t;
      return s;
    }), n = me(o);
    return (a, s) => (f(), x(r(Tu), E(r(n), {
      class: r(V)(
        "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:truncate text-start",
        t.class
      )
    }), {
      default: g(() => [
        w(a.$slots, "default"),
        I(r(tc), { "as-child": "" }, {
          default: g(() => [
            I(r(Zp), { class: "h-4 w-4 shrink-0 opacity-50" })
          ]),
          _: 1
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), av = /* @__PURE__ */ b({
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
    const o = e, n = t, a = k(() => {
      const { class: l, ...i } = o;
      return i;
    }), s = X(a, n);
    return (l, i) => (f(), x(r(Mu), null, {
      default: g(() => [
        I(r(Ku), E({ ...r(s), ...l.$attrs }, {
          class: r(V)(
            "relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            l.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            o.class
          )
        }), {
          default: g(() => [
            I(r(Mf)),
            I(r(Zu), {
              class: ne(
                r(V)(
                  "p-1",
                  l.position === "popper" && "h-[--radix-select-trigger-height] w-full min-w-[--radix-select-trigger-width]"
                )
              )
            }, {
              default: g(() => [
                w(l.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]),
            I(r(If))
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), rv = /* @__PURE__ */ b({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = k(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (f(), x(r(Yu), E({
      class: r(V)("p-1 w-full", t.class)
    }, o.value), {
      default: g(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Tf = { class: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center" }, sv = /* @__PURE__ */ b({
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
    const t = e, o = k(() => {
      const { class: a, ...s } = t;
      return s;
    }), n = me(o);
    return (a, s) => (f(), x(r(Hu), E(r(n), {
      class: r(V)(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        t.class
      )
    }), {
      default: g(() => [
        oe("span", Tf, [
          I(r(Uu), null, {
            default: g(() => [
              I(r(jr), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        I(r(Br), null, {
          default: g(() => [
            w(a.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), lv = /* @__PURE__ */ b({
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (f(), x(r(Br), W(U(t)), {
      default: g(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), iv = /* @__PURE__ */ b({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (f(), x(r(Xu), {
      class: ne(r(V)("px-2 py-1.5 text-sm font-semibold", t.class))
    }, {
      default: g(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), dv = /* @__PURE__ */ b({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = k(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (f(), x(r(ju), E(o.value, {
      class: r(V)("-mx-1 my-1 h-px bg-muted", t.class)
    }), null, 16, ["class"]));
  }
}), Mf = /* @__PURE__ */ b({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = k(() => {
      const { class: a, ...s } = t;
      return s;
    }), n = me(o);
    return (a, s) => (f(), x(r(Qu), E(r(n), {
      class: r(V)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: g(() => [
        w(a.$slots, "default", {}, () => [
          I(r(Jp))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), If = /* @__PURE__ */ b({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = k(() => {
      const { class: a, ...s } = t;
      return s;
    }), n = me(o);
    return (a, s) => (f(), x(r(Ju), E(r(n), {
      class: r(V)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: g(() => [
        w(a.$slots, "default", {}, () => [
          I(r(Wr))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), uv = /* @__PURE__ */ b({
  __name: "Sheet",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = X(e, t);
    return (s, l) => (f(), x(r(_n), W(U(r(a))), {
      default: g(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), cv = /* @__PURE__ */ b({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (f(), x(r(Cn), W(U(t)), {
      default: g(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), pv = /* @__PURE__ */ b({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (f(), x(r(lt), W(U(t)), {
      default: g(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fv = /* @__PURE__ */ b({
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
    const o = e, n = t, a = k(() => {
      const { class: l, side: i, ...d } = o;
      return d;
    }), s = X(a, n);
    return (l, i) => (f(), x(r(Bn), null, {
      default: g(() => [
        I(r(wo), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        I(r(bo), E({
          class: r(V)(r(Rf)({ side: l.side }), o.class)
        }, { ...r(s), ...l.$attrs }), {
          default: g(() => [
            w(l.$slots, "default"),
            I(r(lt), { class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary" }, {
              default: g(() => [
                I(r(ko), { class: "h-4 w-4" })
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
}), mv = /* @__PURE__ */ b({
  __name: "SheetHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (f(), j("div", {
      class: ne(r(V)("flex flex-col gap-y-2 text-center sm:text-left", t.class))
    }, [
      w(o.$slots, "default")
    ], 2));
  }
}), vv = /* @__PURE__ */ b({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = k(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (f(), x(r(Dn), E({
      class: r(V)("text-lg font-semibold text-foreground", t.class)
    }, o.value), {
      default: g(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), gv = /* @__PURE__ */ b({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = k(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (f(), x(r(En), E({
      class: r(V)("text-sm text-muted-foreground", t.class)
    }, o.value), {
      default: g(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), hv = /* @__PURE__ */ b({
  __name: "SheetFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (f(), j("div", {
      class: ne(r(V)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      w(o.$slots, "default")
    ], 2));
  }
}), Rf = Ut(
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
), yv = /* @__PURE__ */ b({
  __name: "Skeleton",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (f(), j("div", {
      class: ne(r(V)("animate-pulse rounded-md bg-primary/10", t.class))
    }, null, 2));
  }
}), bv = /* @__PURE__ */ b({
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
    const o = e, n = t, a = k(() => {
      const { class: l, ...i } = o;
      return i;
    }), s = X(a, n);
    return (l, i) => (f(), x(r(mc), E({
      class: r(V)("relative flex w-full touch-none select-none items-center", o.class)
    }, r(s)), {
      default: g(() => [
        I(r(hc), { class: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20" }, {
          default: g(() => [
            I(r(yc), { class: "absolute h-full bg-primary" })
          ]),
          _: 1
        }),
        (f(!0), j(ce, null, nt(l.modelValue, (d, u) => (f(), x(r(gc), {
          key: u,
          class: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        }))), 128))
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), wv = /* @__PURE__ */ b({
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
    const o = e, n = t, a = k(() => {
      const { class: l, ...i } = o;
      return i;
    }), s = X(a, n);
    return (l, i) => (f(), x(r(Cc), E(r(s), {
      class: r(V)(
        "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        o.class
      )
    }), {
      default: g(() => [
        I(r(Bc), {
          class: ne(
            r(V)(
              "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
            )
          )
        }, null, 8, ["class"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Ff = { class: "relative w-full overflow-auto" }, xv = /* @__PURE__ */ b({
  __name: "Table",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (f(), j("div", Ff, [
      oe("table", {
        class: ne(r(V)("w-full caption-bottom text-sm", t.class))
      }, [
        w(o.$slots, "default")
      ], 2)
    ]));
  }
}), _v = /* @__PURE__ */ b({
  __name: "TableBody",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (f(), j("tbody", {
      class: ne(r(V)("[&_tr:last-child]:border-0", t.class))
    }, [
      w(o.$slots, "default")
    ], 2));
  }
}), Vf = /* @__PURE__ */ b({
  __name: "TableCell",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (f(), j("td", {
      class: ne(
        r(V)(
          "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5",
          t.class
        )
      )
    }, [
      w(o.$slots, "default")
    ], 2));
  }
}), Cv = /* @__PURE__ */ b({
  __name: "TableHead",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (f(), j("th", {
      class: ne(
        r(V)(
          "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5",
          t.class
        )
      )
    }, [
      w(o.$slots, "default")
    ], 2));
  }
}), Bv = /* @__PURE__ */ b({
  __name: "TableHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (f(), j("thead", {
      class: ne(r(V)("[&_tr]:border-b", t.class))
    }, [
      w(o.$slots, "default")
    ], 2));
  }
}), kv = /* @__PURE__ */ b({
  __name: "TableFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (f(), j("tfoot", {
      class: ne(r(V)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", t.class))
    }, [
      w(o.$slots, "default")
    ], 2));
  }
}), Lf = /* @__PURE__ */ b({
  __name: "TableRow",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (f(), j("tr", {
      class: ne(
        r(V)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", t.class)
      )
    }, [
      w(o.$slots, "default")
    ], 2));
  }
}), Ov = /* @__PURE__ */ b({
  __name: "TableCaption",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (f(), j("caption", {
      class: ne(r(V)("mt-4 text-sm text-muted-foreground", t.class))
    }, [
      w(o.$slots, "default")
    ], 2));
  }
}), zf = { class: "flex items-center justify-center py-10" }, $v = /* @__PURE__ */ b({
  __name: "TableEmpty",
  props: {
    class: {},
    colspan: { default: 1 }
  },
  setup(e) {
    const t = e, o = k(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (f(), x(Lf, null, {
      default: g(() => [
        I(Vf, E({
          class: r(V)("p-4 whitespace-nowrap align-middle text-sm text-foreground", t.class)
        }, o.value), {
          default: g(() => [
            oe("div", zf, [
              w(n.$slots, "default")
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Dv = /* @__PURE__ */ b({
  __name: "Textarea",
  props: {
    class: {},
    defaultValue: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, a = Ur(o, "modelValue", t, {
      passive: !0,
      defaultValue: o.defaultValue
    });
    return (s, l) => bt((f(), j("textarea", {
      "onUpdate:modelValue": l[0] || (l[0] = (i) => Vt(a) ? a.value = i : null),
      class: ne(
        r(V)(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          o.class
        )
      )
    }, null, 2)), [
      [Aa, r(a)]
    ]);
  }
});
export {
  rm as Accordion,
  cf as AccordionContent,
  pf as AccordionItem,
  ff as AccordionTrigger,
  sm as AlertDialog,
  mm as AlertDialogAction,
  vm as AlertDialogCancel,
  im as AlertDialogContent,
  cm as AlertDialogDescription,
  pm as AlertDialogFooter,
  dm as AlertDialogHeader,
  um as AlertDialogTitle,
  lm as AlertDialogTrigger,
  gm as Avatar,
  ym as AvatarFallback,
  hm as AvatarImage,
  bm as Badge,
  fm as Button,
  gf as Command,
  $m as CommandDialog,
  Dm as CommandEmpty,
  Em as CommandGroup,
  Am as CommandInput,
  Sm as CommandItem,
  Pm as CommandList,
  Tm as CommandSeparator,
  Mm as CommandShortcut,
  hf as Dialog,
  wm as DialogClose,
  yf as DialogContent,
  Bm as DialogDescription,
  Om as DialogFooter,
  _m as DialogHeader,
  km as DialogScrollContent,
  Cm as DialogTitle,
  xm as DialogTrigger,
  Im as DropdownMenu,
  Nm as DropdownMenuCheckboxItem,
  Fm as DropdownMenuContent,
  Vm as DropdownMenuGroup,
  zm as DropdownMenuItem,
  Hm as DropdownMenuLabel,
  Jd as DropdownMenuPortal,
  Lm as DropdownMenuRadioGroup,
  Km as DropdownMenuRadioItem,
  Wm as DropdownMenuSeparator,
  jm as DropdownMenuShortcut,
  Um as DropdownMenuSub,
  qm as DropdownMenuSubContent,
  Gm as DropdownMenuSubTrigger,
  Rm as DropdownMenuTrigger,
  nm as Flasher,
  Xf as Header,
  am as Heading,
  Ym as Input,
  Xm as Label,
  Zf as Main,
  Zm as Popover,
  qf as PopoverAnchor,
  Jm as PopoverContent,
  Qm as PopoverTrigger,
  ev as Progress,
  tv as Select,
  av as SelectContent,
  rv as SelectGroup,
  sv as SelectItem,
  lv as SelectItemText,
  iv as SelectLabel,
  If as SelectScrollDownButton,
  Mf as SelectScrollUpButton,
  dv as SelectSeparator,
  nv as SelectTrigger,
  ov as SelectValue,
  uv as Sheet,
  pv as SheetClose,
  fv as SheetContent,
  gv as SheetDescription,
  hv as SheetFooter,
  mv as SheetHeader,
  vv as SheetTitle,
  cv as SheetTrigger,
  yv as Skeleton,
  bv as Slider,
  wv as Switch,
  xv as Table,
  _v as TableBody,
  Ov as TableCaption,
  Vf as TableCell,
  $v as TableEmpty,
  kv as TableFooter,
  Cv as TableHead,
  Bv as TableHeader,
  Lf as TableRow,
  Dv as Textarea,
  Yp as Toast,
  om as ToastAction,
  of as ToastClose,
  ca as ToastDescription,
  af as ToastProvider,
  nf as ToastTitle,
  Xp as ToastViewport,
  vp as Toaster,
  Yf as TwoColumnLayout,
  Qf as TwoColumnLayoutSidebar,
  Jf as TwoColumnLayoutSidebarDesktop,
  em as TwoColumnLayoutSidebarMobile,
  tm as TwoColumnLayoutSidebarTrigger,
  mf as avatarVariant,
  vf as badgeVariants,
  Nn as buttonVariants,
  Kf as preset,
  Rf as sheetVariants,
  cp as toast,
  sf as toastVariants,
  lf as useFlasher,
  Rr as useToast
};
